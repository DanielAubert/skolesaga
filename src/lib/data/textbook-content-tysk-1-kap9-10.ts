/* eslint-disable */
// @ts-nocheck
/**
 * Tysk Niva 1 - Kapittel 9-10
 *
 * Kapittel 9: Reise og transport
 * Kapittel 10: Verb og grammatikk
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 9.1: Verkehrsmittel - Transportmidler
// ============================================================================

export const CHAPTER_TYSK_1_9_1: TextbookChapter = {
  id: 'tysk-1-9-1',
  courseId: 'tysk-1',
  chapterNumber: '9.1',
  title: 'Verkehrsmittel',
  subtitle: 'Transportmidler',
  description: 'Laer om ulike transportmidler pa tysk og hvordan du snakker om reiser.',
  estimatedMinutes: 45,
  competenceGoals: [
    'navngi vanlige transportmidler pa tysk',
    'fortelle hvordan du reiser til ulike steder',
    'bruke preposisjoner med transportmidler',
  ],
  content: [
    {
      id: 'tysk-1-9-1-intro',
      type: 'text',
      content: `## Transportmidler pa tysk

Nar du reiser i Tyskland eller andre tysktalende land, er det viktig a kunne snakke om transportmidler. Tyskland har et veldig godt offentlig transportsystem med tog, busser og trikker.

I dette kapittelet laerer du ordene for de vanligste transportmidlene og hvordan du bruker dem i setninger.`,
    },
    {
      id: 'tysk-1-9-1-text-1',
      type: 'text',
      content: `## Vanlige transportmidler

| Tysk | Norsk | Artikkel |
|------|-------|----------|
| das Auto | bilen | intetkjonn |
| der Zug | toget | hankjonn |
| der Bus | bussen | hankjonn |
| das Flugzeug | flyet | intetkjonn |
| das Fahrrad | sykkelen | intetkjonn |
| die Strassenbahn | trikken | hunkjonn |
| die U-Bahn | t-banen | hunkjonn |
| das Schiff | skipet | intetkjonn |
| das Motorrad | motorsykkelen | intetkjonn |
| das Taxi | taxien | intetkjonn |`,
    },
    {
      id: 'tysk-1-9-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Transportmidler',
      problem: `Oversett til norsk:
a) das Auto
b) der Zug
c) das Fahrrad`,
      solution: `a) das Auto = bilen
b) der Zug = toget
c) das Fahrrad = sykkelen

Merk at alle substantiver pa tysk har stor forbokstav!`,
    },
    {
      id: 'tysk-1-9-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-9-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett disse transportmidlene til tysk. Husk artikkel!',
        subTasks: [
          { label: 'a', task: 'bussen', solution: 'der Bus' },
          { label: 'b', task: 'flyet', solution: 'das Flugzeug' },
          { label: 'c', task: 'trikken', solution: 'die Strassenbahn' },
          { label: 'd', task: 'taxien', solution: 'das Taxi' },
        ],
        solution: 'a) der Bus, b) das Flugzeug, c) die Strassenbahn, d) das Taxi',
        hints: ['Husk at alle tyske substantiver har stor forbokstav', 'Artikkel er viktig: der (hankjonn), die (hunkjonn), das (intetkjonn)'],
      },
    },
    {
      id: 'tysk-1-9-1-text-2',
      type: 'text',
      content: `## Mit + Dativ

Nar vi snakker om hvilket transportmiddel vi bruker, bruker vi preposisjonen **mit** (med). Etter "mit" bruker vi **dativ**:

- der -> dem
- die -> der
- das -> dem

**Eksempler:**
- Ich fahre mit **dem** Auto. (Jeg kjorer med bilen.)
- Ich fahre mit **dem** Zug. (Jeg reiser med toget.)
- Ich fahre mit **der** Strassenbahn. (Jeg reiser med trikken.)`,
    },
    {
      id: 'tysk-1-9-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Mit + transportmiddel',
      problem: `Fyll inn riktig form:
a) Ich fahre mit ___ Bus. (der Bus)
b) Ich fahre mit ___ Fahrrad. (das Fahrrad)
c) Ich fahre mit ___ U-Bahn. (die U-Bahn)`,
      solution: `a) Ich fahre mit **dem** Bus.
b) Ich fahre mit **dem** Fahrrad.
c) Ich fahre mit **der** U-Bahn.

Husk: der/das -> dem, die -> der etter "mit"`,
    },
    {
      id: 'tysk-1-9-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-9-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig artikkel i dativ etter "mit".',
        subTasks: [
          { label: 'a', task: 'Ich fahre mit ___ Auto.', solution: 'dem' },
          { label: 'b', task: 'Er kommt mit ___ Zug.', solution: 'dem' },
          { label: 'c', task: 'Sie fahrt mit ___ Strassenbahn.', solution: 'der' },
          { label: 'd', task: 'Wir fliegen mit ___ Flugzeug.', solution: 'dem' },
        ],
        solution: 'a) dem, b) dem, c) der, d) dem',
        hints: ['der og das blir til "dem" i dativ', 'die blir til "der" i dativ'],
      },
    },
    {
      id: 'tysk-1-9-1-text-3',
      type: 'text',
      content: `## Nyttige setninger om transport

| Tysk | Norsk |
|------|-------|
| Wie kommst du zur Schule? | Hvordan kommer du til skolen? |
| Ich fahre mit dem Bus. | Jeg reiser med bussen. |
| Ich gehe zu Fuss. | Jeg gar til fots. |
| Der Zug fahrt um 10 Uhr. | Toget gar klokken 10. |
| Wo ist die Bushaltestelle? | Hvor er bussholdeplassen? |
| Wann kommt der nachste Bus? | Nar kommer neste buss? |`,
    },
    {
      id: 'tysk-1-9-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Sporre om transport',
      problem: `Oversett til norsk:
a) Wie kommst du zur Arbeit?
b) Ich fahre mit dem Fahrrad.
c) Der Bus kommt in 5 Minuten.`,
      solution: `a) Hvordan kommer du til jobb?
b) Jeg sykler / Jeg reiser med sykkelen.
c) Bussen kommer om 5 minutter.`,
    },
    {
      id: 'tysk-1-9-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-9-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk.',
        subTasks: [
          { label: 'a', task: 'Hvordan kommer du til skolen?', solution: 'Wie kommst du zur Schule?' },
          { label: 'b', task: 'Jeg gar til fots.', solution: 'Ich gehe zu Fuss.' },
          { label: 'c', task: 'Toget gar klokken 8.', solution: 'Der Zug fahrt um 8 Uhr.' },
        ],
        solution: 'a) Wie kommst du zur Schule? b) Ich gehe zu Fuss. c) Der Zug fahrt um 8 Uhr.',
        hints: ['zur = zu + der (til)', 'zu Fuss = til fots'],
      },
    },
    {
      id: 'tysk-1-9-1-text-4',
      type: 'text',
      content: `## Oppsummering - Viktige ord

| Tysk | Norsk |
|------|-------|
| fahren | kjore/reise |
| fliegen | fly |
| gehen | ga |
| kommen | komme |
| die Haltestelle | holdeplassen |
| der Bahnhof | togstasjonen |
| der Flughafen | flyplassen |`,
    },
    {
      id: 'tysk-1-9-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-9-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva betyr disse ordene pa norsk?',
        subTasks: [
          { label: 'a', task: 'der Bahnhof', solution: 'togstasjonen' },
          { label: 'b', task: 'die Haltestelle', solution: 'holdeplassen' },
          { label: 'c', task: 'fahren', solution: 'kjore/reise' },
          { label: 'd', task: 'der Flughafen', solution: 'flyplassen' },
        ],
        solution: 'a) togstasjonen, b) holdeplassen, c) kjore/reise, d) flyplassen',
        hints: ['Bahn = tog/bane, Hof = gard -> togstasjon', 'Flug = fly, Hafen = havn -> flyplass'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9.2: In der Stadt - I byen
// ============================================================================

export const CHAPTER_TYSK_1_9_2: TextbookChapter = {
  id: 'tysk-1-9-2',
  courseId: 'tysk-1',
  chapterNumber: '9.2',
  title: 'In der Stadt',
  subtitle: 'I byen',
  description: 'Laer om viktige steder i byen og hvordan du spor om veien.',
  estimatedMinutes: 45,
  competenceGoals: [
    'navngi viktige steder i byen',
    'sporre om veien pa tysk',
    'forstae enkle veibeskrivelser',
  ],
  content: [
    {
      id: 'tysk-1-9-2-intro',
      type: 'text',
      content: `## Steder i byen

Nar du er i en tysk by, er det nyttig a kunne navngi ulike steder. I dette kapittelet laerer du ordene for de viktigste stedene og hvordan du spor om veien.`,
    },
    {
      id: 'tysk-1-9-2-text-1',
      type: 'text',
      content: `## Viktige steder i byen

| Tysk | Norsk | Artikkel |
|------|-------|----------|
| das Rathaus | radhuset | intetkjonn |
| der Bahnhof | togstasjonen | hankjonn |
| die Post | posten | hunkjonn |
| die Apotheke | apoteket | hunkjonn |
| das Krankenhaus | sykehuset | intetkjonn |
| die Bank | banken | hunkjonn |
| das Restaurant | restauranten | intetkjonn |
| der Supermarkt | supermarkedet | hankjonn |
| die Schule | skolen | hunkjonn |
| die Kirche | kirken | hunkjonn |
| das Museum | museet | intetkjonn |
| die Bibliothek | biblioteket | hunkjonn |`,
    },
    {
      id: 'tysk-1-9-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Steder i byen',
      problem: `Oversett til norsk:
a) das Rathaus
b) die Apotheke
c) der Supermarkt`,
      solution: `a) das Rathaus = radhuset
b) die Apotheke = apoteket
c) der Supermarkt = supermarkedet`,
    },
    {
      id: 'tysk-1-9-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-9-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til tysk med riktig artikkel.',
        subTasks: [
          { label: 'a', task: 'togstasjonen', solution: 'der Bahnhof' },
          { label: 'b', task: 'banken', solution: 'die Bank' },
          { label: 'c', task: 'sykehuset', solution: 'das Krankenhaus' },
          { label: 'd', task: 'posten', solution: 'die Post' },
        ],
        solution: 'a) der Bahnhof, b) die Bank, c) das Krankenhaus, d) die Post',
        hints: ['Husk artikkel: der (hankjonn), die (hunkjonn), das (intetkjonn)'],
      },
    },
    {
      id: 'tysk-1-9-2-text-2',
      type: 'text',
      content: `## Sporre om veien

Nar du vil finne frem i byen, kan du bruke disse frasene:

| Tysk | Norsk |
|------|-------|
| Wo ist...? | Hvor er...? |
| Wie komme ich zum/zur...? | Hvordan kommer jeg til...? |
| Entschuldigung, konnen Sie mir helfen? | Unnskyld, kan De hjelpe meg? |
| Ist es weit? | Er det langt? |
| Ist es in der Nahe? | Er det i naerheten? |

**Zum eller zur?**
- zum = zu + dem (hankjonn/intetkjonn)
- zur = zu + der (hunkjonn)`,
    },
    {
      id: 'tysk-1-9-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Sporre om veien',
      problem: `Fyll inn zum eller zur:
a) Wie komme ich ___ Bahnhof? (der Bahnhof)
b) Wie komme ich ___ Post? (die Post)
c) Wie komme ich ___ Rathaus? (das Rathaus)`,
      solution: `a) Wie komme ich **zum** Bahnhof? (der -> zum)
b) Wie komme ich **zur** Post? (die -> zur)
c) Wie komme ich **zum** Rathaus? (das -> zum)`,
    },
    {
      id: 'tysk-1-9-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-9-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn zum eller zur.',
        subTasks: [
          { label: 'a', task: 'Wie komme ich ___ Bank?', solution: 'zur' },
          { label: 'b', task: 'Wie komme ich ___ Supermarkt?', solution: 'zum' },
          { label: 'c', task: 'Wie komme ich ___ Krankenhaus?', solution: 'zum' },
          { label: 'd', task: 'Wie komme ich ___ Apotheke?', solution: 'zur' },
        ],
        solution: 'a) zur, b) zum, c) zum, d) zur',
        hints: ['die -> zur', 'der/das -> zum'],
      },
    },
    {
      id: 'tysk-1-9-2-text-3',
      type: 'text',
      content: `## Veibeskrivelser

| Tysk | Norsk |
|------|-------|
| Gehen Sie geradeaus. | Ga rett fram. |
| Gehen Sie nach links. | Ga til venstre. |
| Gehen Sie nach rechts. | Ga til hoyre. |
| Die erste Strasse links. | Forste gate til venstre. |
| Die zweite Strasse rechts. | Andre gate til hoyre. |
| Es ist auf der linken Seite. | Det er pa venstre side. |
| Es ist auf der rechten Seite. | Det er pa hoyre side. |`,
    },
    {
      id: 'tysk-1-9-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Veibeskrivelse',
      problem: `Oversett til norsk:
"Gehen Sie geradeaus, dann die zweite Strasse links. Das Rathaus ist auf der rechten Seite."`,
      solution: `"Ga rett fram, sa andre gate til venstre. Radhuset er pa hoyre side."`,
    },
    {
      id: 'tysk-1-9-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-9-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk.',
        subTasks: [
          { label: 'a', task: 'Ga rett fram.', solution: 'Gehen Sie geradeaus.' },
          { label: 'b', task: 'Ga til venstre.', solution: 'Gehen Sie nach links.' },
          { label: 'c', task: 'Forste gate til hoyre.', solution: 'Die erste Strasse rechts.' },
        ],
        solution: 'a) Gehen Sie geradeaus. b) Gehen Sie nach links. c) Die erste Strasse rechts.',
        hints: ['geradeaus = rett fram', 'links = venstre, rechts = hoyre'],
      },
    },
    {
      id: 'tysk-1-9-2-text-4',
      type: 'text',
      content: `## Nyttige ord for veibeskrivelser

| Tysk | Norsk |
|------|-------|
| die Strasse | gaten |
| die Ecke | hjornet |
| die Kreuzung | krysset |
| die Ampel | trafikklyset |
| die Brucke | broen |
| gegenüber | overfor |
| neben | ved siden av |`,
    },
    {
      id: 'tysk-1-9-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-9-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva betyr disse ordene?',
        subTasks: [
          { label: 'a', task: 'die Strasse', solution: 'gaten' },
          { label: 'b', task: 'die Ampel', solution: 'trafikklyset' },
          { label: 'c', task: 'gegenüber', solution: 'overfor' },
          { label: 'd', task: 'die Brucke', solution: 'broen' },
        ],
        solution: 'a) gaten, b) trafikklyset, c) overfor, d) broen',
        hints: ['Disse ordene er nyttige nar du far veibeskrivelser'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9.3: Eine Reise planen - Planlegge en reise
// ============================================================================

export const CHAPTER_TYSK_1_9_3: TextbookChapter = {
  id: 'tysk-1-9-3',
  courseId: 'tysk-1',
  chapterNumber: '9.3',
  title: 'Eine Reise planen',
  subtitle: 'Planlegge en reise',
  description: 'Laer a kjope billetter og planlegge reiser pa tysk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kjope billetter pa tysk',
    'sporre om avgangstider og priser',
    'forstae informasjon om reiser',
  ],
  content: [
    {
      id: 'tysk-1-9-3-intro',
      type: 'text',
      content: `## Planlegge en reise

Nar du skal reise i Tyskland, ma du kunne kjope billetter og sporre om avgangstider. I dette kapittelet laerer du de viktigste ordene og frasene for a planlegge en reise.`,
    },
    {
      id: 'tysk-1-9-3-text-1',
      type: 'text',
      content: `## Viktige reiseord

| Tysk | Norsk |
|------|-------|
| die Fahrkarte | billetten |
| die Ruckfahrkarte | tur-retur-billett |
| die einfache Fahrt | enkeltbillett |
| der Fahrplan | rutetabellen |
| die Abfahrt | avgangen |
| die Ankunft | ankomsten |
| das Gleis | sporet/perrongen |
| der Schalter | skranken |
| umsteigen | bytte (tog/buss) |
| aussteigen | ga av |
| einsteigen | ga pa |`,
    },
    {
      id: 'tysk-1-9-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Reiseord',
      problem: `Oversett til norsk:
a) die Fahrkarte
b) die Abfahrt
c) umsteigen`,
      solution: `a) die Fahrkarte = billetten
b) die Abfahrt = avgangen
c) umsteigen = bytte (tog/buss)`,
    },
    {
      id: 'tysk-1-9-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-9-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til tysk.',
        subTasks: [
          { label: 'a', task: 'billetten', solution: 'die Fahrkarte' },
          { label: 'b', task: 'ankomsten', solution: 'die Ankunft' },
          { label: 'c', task: 'sporet/perrongen', solution: 'das Gleis' },
          { label: 'd', task: 'rutetabellen', solution: 'der Fahrplan' },
        ],
        solution: 'a) die Fahrkarte, b) die Ankunft, c) das Gleis, d) der Fahrplan',
        hints: ['Fahrkarte = Fahr (reise) + Karte (kort)'],
      },
    },
    {
      id: 'tysk-1-9-3-text-2',
      type: 'text',
      content: `## Kjope billetter

Nyttige fraser nar du kjoper billett:

| Tysk | Norsk |
|------|-------|
| Eine Fahrkarte nach Berlin, bitte. | En billett til Berlin, takk. |
| Hin und zuruck? | Tur-retur? |
| Nur einfach, bitte. | Bare en vei, takk. |
| Was kostet das? | Hva koster det? |
| Wann fahrt der Zug? | Nar gar toget? |
| Von welchem Gleis? | Fra hvilket spor? |
| Muss ich umsteigen? | Ma jeg bytte? |`,
    },
    {
      id: 'tysk-1-9-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Pa togstasjonen',
      problem: `Les dialogen og svar pa sporsmalene:

*Kunde: Guten Tag! Eine Fahrkarte nach Munchen, bitte.*
*Angestellter: Hin und zuruck?*
*Kunde: Nein, nur einfach.*
*Angestellter: Das macht 45 Euro. Der Zug fahrt um 10:30 von Gleis 3.*

a) Hvor vil kunden reise?
b) Vil kunden ha tur-retur?
c) Hva koster billetten?`,
      solution: `a) Kunden vil reise til Munchen.
b) Nei, kunden vil bare ha enkeltbillett (einfach).
c) Billetten koster 45 Euro.`,
    },
    {
      id: 'tysk-1-9-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-9-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk.',
        subTasks: [
          { label: 'a', task: 'En billett til Hamburg, takk.', solution: 'Eine Fahrkarte nach Hamburg, bitte.' },
          { label: 'b', task: 'Hva koster det?', solution: 'Was kostet das?' },
          { label: 'c', task: 'Nar gar toget?', solution: 'Wann fahrt der Zug?' },
          { label: 'd', task: 'Fra hvilket spor?', solution: 'Von welchem Gleis?' },
        ],
        solution: 'a) Eine Fahrkarte nach Hamburg, bitte. b) Was kostet das? c) Wann fahrt der Zug? d) Von welchem Gleis?',
        hints: ['nach = til (med byer)', 'bitte = takk/ver sa snill'],
      },
    },
    {
      id: 'tysk-1-9-3-text-3',
      type: 'text',
      content: `## Klokkeslett og avganger

| Tysk | Norsk |
|------|-------|
| Der Zug fahrt um 9 Uhr. | Toget gar klokken 9. |
| Der Zug kommt um 11:30 an. | Toget ankommer klokken 11:30. |
| Die Abfahrt ist um 14:15. | Avgangen er klokken 14:15. |
| Der Zug hat Verspatung. | Toget er forsinket. |
| Der Zug ist punktlich. | Toget er i rute. |`,
    },
    {
      id: 'tysk-1-9-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Avgangstider',
      problem: `Oversett til norsk:
a) Der Zug fahrt um 8:45 ab.
b) Die Ankunft ist um 12:30.
c) Der Zug hat 10 Minuten Verspatung.`,
      solution: `a) Toget gar klokken 8:45.
b) Ankomsten er klokken 12:30.
c) Toget er 10 minutter forsinket.`,
    },
    {
      id: 'tysk-1-9-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-9-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk.',
        subTasks: [
          { label: 'a', task: 'Toget gar klokken 10.', solution: 'Der Zug fahrt um 10 Uhr.' },
          { label: 'b', task: 'Toget er forsinket.', solution: 'Der Zug hat Verspatung.' },
          { label: 'c', task: 'Ma jeg bytte?', solution: 'Muss ich umsteigen?' },
        ],
        solution: 'a) Der Zug fahrt um 10 Uhr. b) Der Zug hat Verspatung. c) Muss ich umsteigen?',
        hints: ['um + klokkeslett', 'Verspatung haben = vaere forsinket'],
      },
    },
    {
      id: 'tysk-1-9-3-text-4',
      type: 'text',
      content: `## Oppsummering - Nyttige fraser

| Situasjon | Tysk | Norsk |
|-----------|------|-------|
| Kjope billett | Eine Fahrkarte, bitte. | En billett, takk. |
| Sporre om pris | Was kostet das? | Hva koster det? |
| Sporre om tid | Wann fahrt der Zug? | Nar gar toget? |
| Sporre om spor | Von welchem Gleis? | Fra hvilket spor? |
| Sporre om bytte | Muss ich umsteigen? | Ma jeg bytte? |`,
    },
    {
      id: 'tysk-1-9-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-9-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort dialog pa tysk. Du vil kjope en billett til Frankfurt. Spor om pris og avgangstid.',
        subTasks: [
          { label: 'a', task: 'Si "God dag" og be om en billett til Frankfurt', solution: 'Guten Tag! Eine Fahrkarte nach Frankfurt, bitte.' },
          { label: 'b', task: 'Spor hva det koster', solution: 'Was kostet das?' },
          { label: 'c', task: 'Spor nar toget gar', solution: 'Wann fahrt der Zug?' },
        ],
        solution: 'a) Guten Tag! Eine Fahrkarte nach Frankfurt, bitte. b) Was kostet das? c) Wann fahrt der Zug?',
        hints: ['Guten Tag = God dag', 'bitte = takk'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9.4: Im Hotel - Pa hotellet
// ============================================================================

export const CHAPTER_TYSK_1_9_4: TextbookChapter = {
  id: 'tysk-1-9-4',
  courseId: 'tysk-1',
  chapterNumber: '9.4',
  title: 'Im Hotel',
  subtitle: 'Pa hotellet',
  description: 'Laer a bestille hotellrom og kommunisere pa et hotell.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bestille hotellrom pa tysk',
    'sporre om fasiliteter og priser',
    'sjekke inn og ut av hotell',
  ],
  content: [
    {
      id: 'tysk-1-9-4-intro',
      type: 'text',
      content: `## Pa hotellet

Nar du reiser til Tyskland eller andre tysktalende land, er det nyttig a kunne bestille hotellrom og kommunisere med resepsjonen. I dette kapittelet laerer du de viktigste ordene og frasene.`,
    },
    {
      id: 'tysk-1-9-4-text-1',
      type: 'text',
      content: `## Hotellvokabular

| Tysk | Norsk |
|------|-------|
| das Hotel | hotellet |
| das Zimmer | rommet |
| das Einzelzimmer | enkeltrom |
| das Doppelzimmer | dobbeltrom |
| die Rezeption | resepsjonen |
| der Schlussel | nøkkelen |
| das Fruhstuck | frokosten |
| die Ubernachtung | overnatting |
| die Nacht | natten |
| der Aufzug | heisen |
| das Badezimmer | badet |`,
    },
    {
      id: 'tysk-1-9-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Hotellord',
      problem: `Oversett til norsk:
a) das Einzelzimmer
b) die Rezeption
c) das Fruhstuck`,
      solution: `a) das Einzelzimmer = enkeltrom
b) die Rezeption = resepsjonen
c) das Fruhstuck = frokosten`,
    },
    {
      id: 'tysk-1-9-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-9-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til tysk.',
        subTasks: [
          { label: 'a', task: 'dobbeltrom', solution: 'das Doppelzimmer' },
          { label: 'b', task: 'nokkelen', solution: 'der Schlussel' },
          { label: 'c', task: 'heisen', solution: 'der Aufzug' },
          { label: 'd', task: 'badet', solution: 'das Badezimmer' },
        ],
        solution: 'a) das Doppelzimmer, b) der Schlussel, c) der Aufzug, d) das Badezimmer',
        hints: ['Doppel = dobbel, Zimmer = rom', 'Aufzug = heis (lift)'],
      },
    },
    {
      id: 'tysk-1-9-4-text-2',
      type: 'text',
      content: `## Bestille rom

Nyttige fraser nar du bestiller rom:

| Tysk | Norsk |
|------|-------|
| Ich mochte ein Zimmer reservieren. | Jeg vil gjerne bestille et rom. |
| Haben Sie ein freies Zimmer? | Har dere et ledig rom? |
| Fur wie viele Nachte? | For hvor mange netter? |
| Fur zwei Nachte, bitte. | For to netter, takk. |
| Was kostet das Zimmer pro Nacht? | Hva koster rommet per natt? |
| Ist Fruhstuck inklusive? | Er frokost inkludert? |`,
    },
    {
      id: 'tysk-1-9-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Bestille rom',
      problem: `Les dialogen og svar pa sporsmalene:

*Gast: Guten Tag! Haben Sie ein freies Zimmer?*
*Rezeptionist: Ja, wir haben noch Zimmer frei. Mochten Sie ein Einzelzimmer oder ein Doppelzimmer?*
*Gast: Ein Doppelzimmer, bitte. Fur drei Nachte.*
*Rezeptionist: Das kostet 80 Euro pro Nacht, mit Fruhstuck.*

a) Hva slags rom vil gjesten ha?
b) Hvor mange netter?
c) Er frokost inkludert?`,
      solution: `a) Gjesten vil ha et dobbeltrom (Doppelzimmer).
b) Tre netter (drei Nachte).
c) Ja, frokost er inkludert (mit Fruhstuck).`,
    },
    {
      id: 'tysk-1-9-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-9-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk.',
        subTasks: [
          { label: 'a', task: 'Har dere et ledig rom?', solution: 'Haben Sie ein freies Zimmer?' },
          { label: 'b', task: 'For to netter, takk.', solution: 'Fur zwei Nachte, bitte.' },
          { label: 'c', task: 'Hva koster rommet per natt?', solution: 'Was kostet das Zimmer pro Nacht?' },
          { label: 'd', task: 'Er frokost inkludert?', solution: 'Ist Fruhstuck inklusive?' },
        ],
        solution: 'a) Haben Sie ein freies Zimmer? b) Fur zwei Nachte, bitte. c) Was kostet das Zimmer pro Nacht? d) Ist Fruhstuck inklusive?',
        hints: ['frei = ledig', 'pro Nacht = per natt'],
      },
    },
    {
      id: 'tysk-1-9-4-text-3',
      type: 'text',
      content: `## Sjekke inn og ut

| Tysk | Norsk |
|------|-------|
| Ich mochte einchecken. | Jeg vil sjekke inn. |
| Ich mochte auschecken. | Jeg vil sjekke ut. |
| Hier ist Ihr Schlussel. | Her er nokkelen Deres. |
| Ihr Zimmer ist Nummer 205. | Rommet Deres er nummer 205. |
| Wann ist Checkout? | Nar er utsjekking? |
| Konnen Sie mir ein Taxi rufen? | Kan De ringe en taxi til meg? |`,
    },
    {
      id: 'tysk-1-9-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Pa resepsjonen',
      problem: `Oversett til norsk:
a) Ihr Zimmer ist im zweiten Stock.
b) Das Fruhstuck ist von 7 bis 10 Uhr.
c) Der Aufzug ist dort druben.`,
      solution: `a) Rommet Deres er i andre etasje.
b) Frokosten er fra 7 til 10.
c) Heisen er der borte.`,
    },
    {
      id: 'tysk-1-9-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-9-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk.',
        subTasks: [
          { label: 'a', task: 'Jeg vil sjekke inn.', solution: 'Ich mochte einchecken.' },
          { label: 'b', task: 'Her er nokkelen Deres.', solution: 'Hier ist Ihr Schlussel.' },
          { label: 'c', task: 'Nar er utsjekking?', solution: 'Wann ist Checkout?' },
        ],
        solution: 'a) Ich mochte einchecken. b) Hier ist Ihr Schlussel. c) Wann ist Checkout?',
        hints: ['einchecken = sjekke inn', 'Ihr = Deres (formal)'],
      },
    },
    {
      id: 'tysk-1-9-4-text-4',
      type: 'text',
      content: `## Fasiliteter pa hotellet

| Tysk | Norsk |
|------|-------|
| das WLAN | wifi |
| der Fernseher | TV-en |
| die Klimaanlage | klimaanlegget |
| der Parkplatz | parkeringsplassen |
| das Schwimmbad | svommebassenget |
| die Minibar | minibaren |`,
    },
    {
      id: 'tysk-1-9-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-9-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva betyr disse ordene?',
        subTasks: [
          { label: 'a', task: 'das WLAN', solution: 'wifi' },
          { label: 'b', task: 'das Schwimmbad', solution: 'svommebassenget' },
          { label: 'c', task: 'der Parkplatz', solution: 'parkeringsplassen' },
          { label: 'd', task: 'die Klimaanlage', solution: 'klimaanlegget' },
        ],
        solution: 'a) wifi, b) svommebassenget, c) parkeringsplassen, d) klimaanlegget',
        hints: ['WLAN = wireless LAN (wifi)', 'Schwimmbad = Schwimm (svomme) + Bad (bad)'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.1: Das Verb "sein" - Verbet "a vaere"
// ============================================================================

export const CHAPTER_TYSK_1_10_1: TextbookChapter = {
  id: 'tysk-1-10-1',
  courseId: 'tysk-1',
  chapterNumber: '10.1',
  title: 'Das Verb "sein"',
  subtitle: 'Verbet "a vaere"',
  description: 'Laer a boye verbet "sein" (a vaere) i presens.',
  estimatedMinutes: 40,
  competenceGoals: [
    'boye verbet "sein" i alle personer',
    'bruke "sein" i enkle setninger',
    'beskrive seg selv og andre med "sein"',
  ],
  content: [
    {
      id: 'tysk-1-10-1-intro',
      type: 'text',
      content: `## Verbet "sein" - a vaere

"Sein" er et av de viktigste verbene pa tysk. Det brukes til a si hvem eller hva noe er, og til a beskrive egenskaper. "Sein" er et uregelmessig verb og ma laeres utenat.`,
    },
    {
      id: 'tysk-1-10-1-text-1',
      type: 'text',
      content: `## Boyning av "sein" i presens

| Person | Tysk | Norsk |
|--------|------|-------|
| ich | bin | jeg er |
| du | bist | du er |
| er/sie/es | ist | han/hun/det er |
| wir | sind | vi er |
| ihr | seid | dere er |
| sie/Sie | sind | de er / De er |

**Merk:** "sie" (med liten s) = de, "Sie" (med stor S) = De (formal)`,
    },
    {
      id: 'tysk-1-10-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Boyning',
      problem: `Fyll inn riktig form av "sein":
a) Ich ___ Schuler.
b) Du ___ nett.
c) Er ___ gross.`,
      solution: `a) Ich **bin** Schuler. (Jeg er elev.)
b) Du **bist** nett. (Du er hyggelig.)
c) Er **ist** gross. (Han er hoy.)`,
    },
    {
      id: 'tysk-1-10-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-10-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av "sein".',
        subTasks: [
          { label: 'a', task: 'Ich ___ 15 Jahre alt.', solution: 'bin' },
          { label: 'b', task: 'Du ___ mein Freund.', solution: 'bist' },
          { label: 'c', task: 'Sie ___ Lehrerin. (Hun...)', solution: 'ist' },
          { label: 'd', task: 'Wir ___ aus Norwegen.', solution: 'sind' },
        ],
        solution: 'a) bin, b) bist, c) ist, d) sind',
        hints: ['ich -> bin', 'du -> bist', 'er/sie/es -> ist', 'wir -> sind'],
      },
    },
    {
      id: 'tysk-1-10-1-text-2',
      type: 'text',
      content: `## Bruk av "sein"

"Sein" brukes til a:

1. **Si hvem man er:**
   - Ich bin Peter. (Jeg er Peter.)
   - Sie ist Arztin. (Hun er lege.)

2. **Si hvor man kommer fra:**
   - Wir sind aus Deutschland. (Vi er fra Tyskland.)

3. **Beskrive egenskaper:**
   - Das Wetter ist schon. (Vaeret er fint.)
   - Die Katze ist klein. (Katten er liten.)

4. **Si alder:**
   - Ich bin 16 Jahre alt. (Jeg er 16 ar gammel.)`,
    },
    {
      id: 'tysk-1-10-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Bruk av sein',
      problem: `Oversett til tysk:
a) Jeg er fra Norge.
b) Hun er lege.
c) Vi er glade.`,
      solution: `a) Ich bin aus Norwegen.
b) Sie ist Arztin.
c) Wir sind froh/glucklich.`,
    },
    {
      id: 'tysk-1-10-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-10-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk. Bruk riktig form av "sein".',
        subTasks: [
          { label: 'a', task: 'Han er 20 ar gammel.', solution: 'Er ist 20 Jahre alt.' },
          { label: 'b', task: 'Dere er hyggelige.', solution: 'Ihr seid nett.' },
          { label: 'c', task: 'De er fra Tyskland.', solution: 'Sie sind aus Deutschland.' },
        ],
        solution: 'a) Er ist 20 Jahre alt. b) Ihr seid nett. c) Sie sind aus Deutschland.',
        hints: ['er -> ist', 'ihr -> seid', 'sie (flertall) -> sind'],
      },
    },
    {
      id: 'tysk-1-10-1-text-3',
      type: 'text',
      content: `## Sporsmal med "sein"

| Sporsmal | Svar |
|----------|------|
| Bist du mude? | Ja, ich bin mude. |
| Ist er Schuler? | Ja, er ist Schuler. |
| Sind Sie Herr Muller? | Ja, ich bin Herr Muller. |
| Wie alt bist du? | Ich bin 16 Jahre alt. |
| Woher seid ihr? | Wir sind aus Norwegen. |`,
    },
    {
      id: 'tysk-1-10-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Sporsmal og svar',
      problem: `Svar pa sporsmalene:
a) Bist du Schuler? (Ja)
b) Wie alt ist sie? (17)
c) Sind Sie Frau Schmidt? (Ja)`,
      solution: `a) Ja, ich bin Schuler.
b) Sie ist 17 Jahre alt.
c) Ja, ich bin Frau Schmidt.`,
    },
    {
      id: 'tysk-1-10-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-10-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett sporsmalene til tysk.',
        subTasks: [
          { label: 'a', task: 'Er du trott?', solution: 'Bist du mude?' },
          { label: 'b', task: 'Hvor gammel er han?', solution: 'Wie alt ist er?' },
          { label: 'c', task: 'Er dere fra Norge?', solution: 'Seid ihr aus Norwegen?' },
        ],
        solution: 'a) Bist du mude? b) Wie alt ist er? c) Seid ihr aus Norwegen?',
        hints: ['I sporsmal star verbet forst', 'mude = trott'],
      },
    },
    {
      id: 'tysk-1-10-1-text-4',
      type: 'text',
      content: `## Vanlige uttrykk med "sein"

| Tysk | Norsk |
|------|-------|
| Wie geht es dir? - Mir geht es gut. | Hvordan har du det? - Jeg har det bra. |
| Ich bin hungrig. | Jeg er sulten. |
| Ich bin durstig. | Jeg er torst. |
| Ich bin mude. | Jeg er trott. |
| Es ist kalt. | Det er kaldt. |
| Es ist warm. | Det er varmt. |`,
    },
    {
      id: 'tysk-1-10-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-10-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva betyr disse uttrykkene?',
        subTasks: [
          { label: 'a', task: 'Ich bin hungrig.', solution: 'Jeg er sulten.' },
          { label: 'b', task: 'Es ist kalt.', solution: 'Det er kaldt.' },
          { label: 'c', task: 'Sie ist mude.', solution: 'Hun er trott.' },
          { label: 'd', task: 'Wir sind glucklich.', solution: 'Vi er lykkelige/glade.' },
        ],
        solution: 'a) Jeg er sulten. b) Det er kaldt. c) Hun er trott. d) Vi er lykkelige/glade.',
        hints: ['hungrig = sulten', 'mude = trott', 'glucklich = lykkelig'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.2: Das Verb "haben" - Verbet "a ha"
// ============================================================================

export const CHAPTER_TYSK_1_10_2: TextbookChapter = {
  id: 'tysk-1-10-2',
  courseId: 'tysk-1',
  chapterNumber: '10.2',
  title: 'Das Verb "haben"',
  subtitle: 'Verbet "a ha"',
  description: 'Laer a boye verbet "haben" (a ha) i presens.',
  estimatedMinutes: 40,
  competenceGoals: [
    'boye verbet "haben" i alle personer',
    'bruke "haben" i enkle setninger',
    'snakke om hva man har og eier',
  ],
  content: [
    {
      id: 'tysk-1-10-2-intro',
      type: 'text',
      content: `## Verbet "haben" - a ha

"Haben" er et av de viktigste verbene pa tysk. Det brukes til a snakke om hva man har, eier eller besitter. "Haben" er ogsa et uregelmessig verb som ma laeres utenat.`,
    },
    {
      id: 'tysk-1-10-2-text-1',
      type: 'text',
      content: `## Boyning av "haben" i presens

| Person | Tysk | Norsk |
|--------|------|-------|
| ich | habe | jeg har |
| du | hast | du har |
| er/sie/es | hat | han/hun/det har |
| wir | haben | vi har |
| ihr | habt | dere har |
| sie/Sie | haben | de har / De har |

**Merk:** Ved "du" og "er/sie/es" forsvinner bokstaven "b".`,
    },
    {
      id: 'tysk-1-10-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Boyning',
      problem: `Fyll inn riktig form av "haben":
a) Ich ___ einen Hund.
b) Du ___ blaue Augen.
c) Sie ___ eine Katze. (Hun...)`,
      solution: `a) Ich **habe** einen Hund. (Jeg har en hund.)
b) Du **hast** blaue Augen. (Du har bla oyne.)
c) Sie **hat** eine Katze. (Hun har en katt.)`,
    },
    {
      id: 'tysk-1-10-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-10-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av "haben".',
        subTasks: [
          { label: 'a', task: 'Ich ___ ein Auto.', solution: 'habe' },
          { label: 'b', task: 'Du ___ ein Fahrrad.', solution: 'hast' },
          { label: 'c', task: 'Er ___ einen Bruder.', solution: 'hat' },
          { label: 'd', task: 'Wir ___ zwei Katzen.', solution: 'haben' },
        ],
        solution: 'a) habe, b) hast, c) hat, d) haben',
        hints: ['ich -> habe', 'du -> hast', 'er/sie/es -> hat', 'wir -> haben'],
      },
    },
    {
      id: 'tysk-1-10-2-text-2',
      type: 'text',
      content: `## Bruk av "haben"

"Haben" brukes til a:

1. **Snakke om eierskap:**
   - Ich habe ein Handy. (Jeg har en mobiltelefon.)
   - Sie hat ein grosses Haus. (Hun har et stort hus.)

2. **Snakke om familie:**
   - Ich habe zwei Geschwister. (Jeg har to sosken.)
   - Er hat eine Schwester. (Han har en soster.)

3. **Snakke om tid:**
   - Hast du Zeit? (Har du tid?)
   - Ich habe keine Zeit. (Jeg har ikke tid.)

4. **Faste uttrykk:**
   - Ich habe Hunger. (Jeg er sulten.)
   - Ich habe Durst. (Jeg er torst.)`,
    },
    {
      id: 'tysk-1-10-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Bruk av haben',
      problem: `Oversett til tysk:
a) Jeg har en hund.
b) Han har en bror.
c) Vi har tid.`,
      solution: `a) Ich habe einen Hund.
b) Er hat einen Bruder.
c) Wir haben Zeit.`,
    },
    {
      id: 'tysk-1-10-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-10-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk. Bruk riktig form av "haben".',
        subTasks: [
          { label: 'a', task: 'Hun har en soster.', solution: 'Sie hat eine Schwester.' },
          { label: 'b', task: 'Dere har en bil.', solution: 'Ihr habt ein Auto.' },
          { label: 'c', task: 'De har to barn.', solution: 'Sie haben zwei Kinder.' },
        ],
        solution: 'a) Sie hat eine Schwester. b) Ihr habt ein Auto. c) Sie haben zwei Kinder.',
        hints: ['sie (hun) -> hat', 'ihr -> habt', 'sie (de) -> haben'],
      },
    },
    {
      id: 'tysk-1-10-2-text-3',
      type: 'text',
      content: `## Akkusativ med "haben"

Etter "haben" bruker vi akkusativ:
- **ein** (intetkjonn) forblir **ein**
- **eine** (hunkjonn) forblir **eine**
- **ein** (hankjonn) blir **einen**

| Nominativ | Akkusativ |
|-----------|-----------|
| Das ist ein Hund. | Ich habe einen Hund. |
| Das ist eine Katze. | Ich habe eine Katze. |
| Das ist ein Haus. | Ich habe ein Haus. |`,
    },
    {
      id: 'tysk-1-10-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Akkusativ',
      problem: `Fyll inn riktig artikkel:
a) Ich habe ___ Computer. (der Computer)
b) Du hast ___ Tasche. (die Tasche)
c) Er hat ___ Buch. (das Buch)`,
      solution: `a) Ich habe **einen** Computer. (hankjonn -> einen)
b) Du hast **eine** Tasche. (hunkjonn -> eine)
c) Er hat **ein** Buch. (intetkjonn -> ein)`,
    },
    {
      id: 'tysk-1-10-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-10-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig artikkel i akkusativ.',
        subTasks: [
          { label: 'a', task: 'Ich habe ___ Freund. (der Freund)', solution: 'einen' },
          { label: 'b', task: 'Sie hat ___ Idee. (die Idee)', solution: 'eine' },
          { label: 'c', task: 'Wir haben ___ Problem. (das Problem)', solution: 'ein' },
        ],
        solution: 'a) einen, b) eine, c) ein',
        hints: ['der -> einen i akkusativ', 'die -> eine (ingen endring)', 'das -> ein (ingen endring)'],
      },
    },
    {
      id: 'tysk-1-10-2-text-4',
      type: 'text',
      content: `## Vanlige uttrykk med "haben"

| Tysk | Norsk |
|------|-------|
| Hunger haben | vaere sulten |
| Durst haben | vaere torst |
| Zeit haben | ha tid |
| Recht haben | ha rett |
| Angst haben | vaere redd |
| Gluck haben | vaere heldig |
| Lust haben | ha lyst |`,
    },
    {
      id: 'tysk-1-10-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-10-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva betyr disse uttrykkene?',
        subTasks: [
          { label: 'a', task: 'Ich habe Hunger.', solution: 'Jeg er sulten.' },
          { label: 'b', task: 'Du hast Recht.', solution: 'Du har rett.' },
          { label: 'c', task: 'Er hat Angst.', solution: 'Han er redd.' },
          { label: 'd', task: 'Wir haben Gluck.', solution: 'Vi er heldige.' },
        ],
        solution: 'a) Jeg er sulten. b) Du har rett. c) Han er redd. d) Vi er heldige.',
        hints: ['Pa tysk sier man "ha sult" i stedet for "vaere sulten"'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.3: Regelmasige Verben - Regelmessige verb
// ============================================================================

export const CHAPTER_TYSK_1_10_3: TextbookChapter = {
  id: 'tysk-1-10-3',
  courseId: 'tysk-1',
  chapterNumber: '10.3',
  title: 'Regelmasige Verben',
  subtitle: 'Regelmessige verb',
  description: 'Laer a boye regelmessige verb i presens.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstae monsteret for regelmessige verb',
    'boye regelmessige verb i alle personer',
    'bruke vanlige verb i setninger',
  ],
  content: [
    {
      id: 'tysk-1-10-3-intro',
      type: 'text',
      content: `## Regelmessige verb pa tysk

De fleste tyske verb er regelmessige og folger det samme monsteret. Nar du laerer dette monsteret, kan du boye mange verb riktig!

Et regelmessig verb bestar av en **stamme** og en **endelse**. For eksempel: **spiel**en (a spille) - "spiel" er stammen og "en" er endelsen.`,
    },
    {
      id: 'tysk-1-10-3-text-1',
      type: 'text',
      content: `## Boyningsmonster for regelmessige verb

Vi tar verbet **spielen** (a spille) som eksempel:

| Person | Endelse | spielen |
|--------|---------|---------|
| ich | -e | spiele |
| du | -st | spielst |
| er/sie/es | -t | spielt |
| wir | -en | spielen |
| ihr | -t | spielt |
| sie/Sie | -en | spielen |

**Merk:** Stammen er "spiel-", og vi legger til endelsen.`,
    },
    {
      id: 'tysk-1-10-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Boye "machen" (a gjore)',
      problem: `Boy verbet "machen" i alle personer:
- Stamme: mach-
- Legg til endelsene: -e, -st, -t, -en, -t, -en`,
      solution: `| Person | machen |
|--------|--------|
| ich | mache |
| du | machst |
| er/sie/es | macht |
| wir | machen |
| ihr | macht |
| sie/Sie | machen |`,
    },
    {
      id: 'tysk-1-10-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-10-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av "spielen".',
        subTasks: [
          { label: 'a', task: 'Ich ___ Fussball.', solution: 'spiele' },
          { label: 'b', task: 'Du ___ Gitarre.', solution: 'spielst' },
          { label: 'c', task: 'Er ___ Tennis.', solution: 'spielt' },
          { label: 'd', task: 'Wir ___ Karten.', solution: 'spielen' },
        ],
        solution: 'a) spiele, b) spielst, c) spielt, d) spielen',
        hints: ['ich -> -e', 'du -> -st', 'er/sie/es -> -t', 'wir -> -en'],
      },
    },
    {
      id: 'tysk-1-10-3-text-2',
      type: 'text',
      content: `## Vanlige regelmessige verb

| Tysk | Norsk |
|------|-------|
| spielen | spille |
| machen | gjore/lage |
| lernen | laere |
| wohnen | bo |
| kaufen | kjope |
| horen | hore |
| fragen | sporre |
| sagen | si |
| arbeiten | arbeide |
| tanzen | danse |
| kochen | lage mat |
| brauchen | trenge |`,
    },
    {
      id: 'tysk-1-10-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Flere verb',
      problem: `Boy verbene "lernen" og "wohnen" med "ich" og "er":
- lernen (laere)
- wohnen (bo)`,
      solution: `**lernen:**
- ich lern**e** (jeg laerer)
- er lern**t** (han laerer)

**wohnen:**
- ich wohn**e** (jeg bor)
- er wohn**t** (han bor)`,
    },
    {
      id: 'tysk-1-10-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-10-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig verbform.',
        subTasks: [
          { label: 'a', task: 'Ich ___ Deutsch. (lernen)', solution: 'lerne' },
          { label: 'b', task: 'Er ___ in Berlin. (wohnen)', solution: 'wohnt' },
          { label: 'c', task: 'Wir ___ ein Buch. (kaufen)', solution: 'kaufen' },
          { label: 'd', task: 'Ihr ___ Musik. (horen)', solution: 'hort' },
        ],
        solution: 'a) lerne, b) wohnt, c) kaufen, d) hort',
        hints: ['Finn stammen og legg til riktig endelse'],
      },
    },
    {
      id: 'tysk-1-10-3-text-3',
      type: 'text',
      content: `## Spesielle tilfeller

Noen verb har stamme som ender pa **-t**, **-d**, eller **-n**. Da legger vi til en **-e** for lettere uttale:

| Verb | du | er/sie/es | ihr |
|------|-----|-----------|------|
| arbeiten | arbeit**e**st | arbeit**e**t | arbeit**e**t |
| warten | wart**e**st | wart**e**t | wart**e**t |
| finden | find**e**st | find**e**t | find**e**t |`,
    },
    {
      id: 'tysk-1-10-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Verb med -t/-d stamme',
      problem: `Boy "arbeiten" (arbeide) med alle personer:`,
      solution: `| Person | arbeiten |
|--------|----------|
| ich | arbeite |
| du | arbeit**e**st |
| er/sie/es | arbeit**e**t |
| wir | arbeiten |
| ihr | arbeit**e**t |
| sie/Sie | arbeiten |

Merk den ekstra -e- ved du, er/sie/es, og ihr!`,
    },
    {
      id: 'tysk-1-10-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-10-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig form av "arbeiten".',
        subTasks: [
          { label: 'a', task: 'Du ___ viel.', solution: 'arbeitest' },
          { label: 'b', task: 'Er ___ im Buro.', solution: 'arbeitet' },
          { label: 'c', task: 'Ihr ___ zusammen.', solution: 'arbeitet' },
        ],
        solution: 'a) arbeitest, b) arbeitet, c) arbeitet',
        hints: ['Husk ekstra -e- for lettere uttale ved -t stamme'],
      },
    },
    {
      id: 'tysk-1-10-3-text-4',
      type: 'text',
      content: `## Setninger med regelmessige verb

| Tysk | Norsk |
|------|-------|
| Ich spiele gern Fussball. | Jeg liker a spille fotball. |
| Er lernt Deutsch. | Han laerer tysk. |
| Wir wohnen in Oslo. | Vi bor i Oslo. |
| Sie kauft ein Buch. | Hun kjoper en bok. |
| Ihr tanzt gut! | Dere danser bra! |`,
    },
    {
      id: 'tysk-1-10-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-10-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk.',
        subTasks: [
          { label: 'a', task: 'Jeg laerer tysk.', solution: 'Ich lerne Deutsch.' },
          { label: 'b', task: 'Hun bor i Berlin.', solution: 'Sie wohnt in Berlin.' },
          { label: 'c', task: 'Vi lager mat.', solution: 'Wir kochen.' },
          { label: 'd', task: 'Han kjoper en bil.', solution: 'Er kauft ein Auto.' },
        ],
        solution: 'a) Ich lerne Deutsch. b) Sie wohnt in Berlin. c) Wir kochen. d) Er kauft ein Auto.',
        hints: ['Bruk riktig verbform basert pa personen'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.4: Wiederholung - Repetisjon
// ============================================================================

export const CHAPTER_TYSK_1_10_4: TextbookChapter = {
  id: 'tysk-1-10-4',
  courseId: 'tysk-1',
  chapterNumber: '10.4',
  title: 'Wiederholung',
  subtitle: 'Repetisjon',
  description: 'Repetisjon av alt du har laert i Tysk Niva 1.',
  estimatedMinutes: 50,
  competenceGoals: [
    'repetere og befeste kunnskap fra Niva 1',
    'bruke ordforrad og grammatikk fra hele kurset',
    'kommunisere i enkle hverdagssituasjoner',
  ],
  content: [
    {
      id: 'tysk-1-10-4-intro',
      type: 'text',
      content: `## Repetisjon av Tysk Niva 1

Gratulerer! Du har nadd slutten av Tysk Niva 1. I dette kapittelet repeterer vi de viktigste temaene du har laert. Bruk dette kapittelet til a teste deg selv og ove pa det du har laert.`,
    },
    {
      id: 'tysk-1-10-4-text-1',
      type: 'text',
      content: `## Oversikt over verbene "sein" og "haben"

**sein (a vaere)**
| Person | Form |
|--------|------|
| ich | bin |
| du | bist |
| er/sie/es | ist |
| wir | sind |
| ihr | seid |
| sie/Sie | sind |

**haben (a ha)**
| Person | Form |
|--------|------|
| ich | habe |
| du | hast |
| er/sie/es | hat |
| wir | haben |
| ihr | habt |
| sie/Sie | haben |`,
    },
    {
      id: 'tysk-1-10-4-example-1',
      type: 'example',
      title: 'Eksempel 1: sein og haben',
      problem: `Fyll inn riktig form av "sein" eller "haben":
a) Ich ___ 16 Jahre alt. (sein)
b) Er ___ einen Hund. (haben)
c) Wir ___ aus Norwegen. (sein)`,
      solution: `a) Ich **bin** 16 Jahre alt.
b) Er **hat** einen Hund.
c) Wir **sind** aus Norwegen.`,
    },
    {
      id: 'tysk-1-10-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-10-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av "sein" eller "haben".',
        subTasks: [
          { label: 'a', task: 'Du ___ nett. (sein)', solution: 'bist' },
          { label: 'b', task: 'Sie ___ eine Katze. (haben) (Hun...)', solution: 'hat' },
          { label: 'c', task: 'Ihr ___ mude. (sein)', solution: 'seid' },
          { label: 'd', task: 'Wir ___ Zeit. (haben)', solution: 'haben' },
        ],
        solution: 'a) bist, b) hat, c) seid, d) haben',
        hints: ['sein: ich bin, du bist, er ist...', 'haben: ich habe, du hast, er hat...'],
      },
    },
    {
      id: 'tysk-1-10-4-text-2',
      type: 'text',
      content: `## Regelmessige verb - Boyningsmonster

| Person | Endelse | Eksempel: spielen |
|--------|---------|-------------------|
| ich | -e | spiele |
| du | -st | spielst |
| er/sie/es | -t | spielt |
| wir | -en | spielen |
| ihr | -t | spielt |
| sie/Sie | -en | spielen |

**Vanlige verb:** lernen, machen, wohnen, kaufen, horen, arbeiten`,
    },
    {
      id: 'tysk-1-10-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Regelmessige verb',
      problem: `Boy verbene:
a) lernen med "ich"
b) wohnen med "er"
c) kaufen med "wir"`,
      solution: `a) ich lern**e**
b) er wohn**t**
c) wir kauf**en**`,
    },
    {
      id: 'tysk-1-10-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-10-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig verbform.',
        subTasks: [
          { label: 'a', task: 'Er ___ Musik. (horen)', solution: 'hort' },
          { label: 'b', task: 'Ich ___ in Oslo. (wohnen)', solution: 'wohne' },
          { label: 'c', task: 'Du ___ gut Deutsch. (lernen)', solution: 'lernst' },
          { label: 'd', task: 'Sie ___ im Buro. (arbeiten) (Hun...)', solution: 'arbeitet' },
        ],
        solution: 'a) hort, b) wohne, c) lernst, d) arbeitet',
        hints: ['Finn stammen og legg til riktig endelse', 'arbeiten far ekstra -e- (arbeitet)'],
      },
    },
    {
      id: 'tysk-1-10-4-text-3',
      type: 'text',
      content: `## Viktig ordforrad - Oppsummering

**Hilsener:**
- Guten Tag, Guten Morgen, Hallo, Tschuss, Auf Wiedersehen

**Familie:**
- die Mutter, der Vater, die Schwester, der Bruder, die Eltern

**Mat og drikke:**
- das Brot, der Kase, das Wasser, die Milch, das Fruhstuck

**Transport:**
- das Auto, der Zug, der Bus, das Flugzeug, das Fahrrad

**I byen:**
- der Bahnhof, die Post, die Apotheke, das Rathaus`,
    },
    {
      id: 'tysk-1-10-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Ordforrad',
      problem: `Oversett til norsk:
a) der Bahnhof
b) das Fruhstuck
c) die Schwester`,
      solution: `a) togstasjonen
b) frokosten
c) sosteren`,
    },
    {
      id: 'tysk-1-10-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-10-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk med riktig artikkel.',
        subTasks: [
          { label: 'a', task: 'bilen', solution: 'das Auto' },
          { label: 'b', task: 'apoteket', solution: 'die Apotheke' },
          { label: 'c', task: 'billetten', solution: 'die Fahrkarte' },
          { label: 'd', task: 'resepsjonen', solution: 'die Rezeption' },
        ],
        solution: 'a) das Auto, b) die Apotheke, c) die Fahrkarte, d) die Rezeption',
        hints: ['Husk artikkel: der (hankjonn), die (hunkjonn), das (intetkjonn)'],
      },
    },
    {
      id: 'tysk-1-10-4-text-4',
      type: 'text',
      content: `## Nyttige fraser

**Pa togstasjonen:**
- Eine Fahrkarte nach..., bitte.
- Wann fahrt der Zug?
- Von welchem Gleis?

**Pa hotellet:**
- Haben Sie ein freies Zimmer?
- Was kostet das Zimmer pro Nacht?
- Ist Fruhstuck inklusive?

**Sporre om veien:**
- Wie komme ich zum/zur...?
- Wo ist...?
- Gehen Sie geradeaus/links/rechts.`,
    },
    {
      id: 'tysk-1-10-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-10-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk.',
        subTasks: [
          { label: 'a', task: 'En billett til Berlin, takk.', solution: 'Eine Fahrkarte nach Berlin, bitte.' },
          { label: 'b', task: 'Har dere et ledig rom?', solution: 'Haben Sie ein freies Zimmer?' },
          { label: 'c', task: 'Hvordan kommer jeg til togstasjonen?', solution: 'Wie komme ich zum Bahnhof?' },
          { label: 'd', task: 'Ga rett fram.', solution: 'Gehen Sie geradeaus.' },
        ],
        solution: 'a) Eine Fahrkarte nach Berlin, bitte. b) Haben Sie ein freies Zimmer? c) Wie komme ich zum Bahnhof? d) Gehen Sie geradeaus.',
        hints: ['nach = til (med byer)', 'frei = ledig', 'zum = zu + dem'],
      },
    },
    {
      id: 'tysk-1-10-4-text-5',
      type: 'text',
      content: `## Hva har du laert?

I Tysk Niva 1 har du laert:

1. **Hilsener og hoflighetsfraser** - Guten Tag, Danke, Bitte
2. **Presentere deg selv** - Ich heisse..., Ich komme aus...
3. **Tall og farger** - eins, zwei, drei... rot, blau, grun...
4. **Familie** - Mutter, Vater, Schwester, Bruder
5. **Tid og dager** - Montag, Dienstag... Es ist 10 Uhr.
6. **Mat og restaurantbesok** - Ich mochte..., Die Rechnung, bitte.
7. **Transport og reise** - der Zug, die Fahrkarte, umsteigen
8. **I byen** - der Bahnhof, die Post, Wo ist...?
9. **Pa hotellet** - das Zimmer, Fruhstuck inklusive
10. **Verb** - sein, haben, regelmessige verb

**Viel Erfolg mit Niveau 2!** (Lykke til med Niva 2!)`,
    },
    {
      id: 'tysk-1-10-4-note-1',
      type: 'note',
      title: 'Tips til videre laering',
      content: `For a fortsette a forbedre tysken din:
- Hor pa tysk musikk og se tyske filmer
- Ov deg pa a snakke hoyt
- Skriv dagbok pa tysk
- Bruk sprakappar som Duolingo
- Finn en sprakpartner a ove med`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const TYSK_1_CHAPTERS_9_10: TextbookChapter[] = [
  CHAPTER_TYSK_1_9_1,
  CHAPTER_TYSK_1_9_2,
  CHAPTER_TYSK_1_9_3,
  CHAPTER_TYSK_1_9_4,
  CHAPTER_TYSK_1_10_1,
  CHAPTER_TYSK_1_10_2,
  CHAPTER_TYSK_1_10_3,
  CHAPTER_TYSK_1_10_4,
];
