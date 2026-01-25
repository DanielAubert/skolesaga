/* eslint-disable */
// @ts-nocheck
/**
 * Tysk Nivå 1 - Kapittel 4-6 (Detaljerte underkapitler)
 *
 * Dekker:
 * - Kapittel 4: Tid og kalender (4.1-4.4)
 * - Kapittel 5: Mat og restaurant (5.1-5.4)
 * - Kapittel 6: Hjem og bolig (6.1-6.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 4: TID OG KALENDER
// ============================================================================

// ----------------------------------------------------------------------------
// 4.1 Die Uhrzeit - Klokkeslettet
// ----------------------------------------------------------------------------

export const CHAPTER_TYSK_1_4_1: TextbookChapter = {
  id: 'tysk-1-4-1',
  courseId: 'tysk-1',
  chapterNumber: '4.1',
  title: 'Die Uhrzeit',
  subtitle: 'Klokkeslettet',
  description: 'Laer aa si hva klokken er paa tysk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'si hva klokken er',
    'spoerre om klokkeslett',
  ],
  content: [
    {
      id: 'tysk-1-4-1-intro',
      type: 'text',
      content: `## Klokkeslett paa tysk

Aa kunne si hva klokken er, er viktig i hverdagen. Paa tysk finnes det to maater aa si klokkeslettet paa: den offisielle (24-timers) og den uformelle (12-timers).

**Spoerre om klokken:**

| Tysk | Norsk |
|------|-------|
| Wie spaet ist es? | Hva er klokka? |
| Wie viel Uhr ist es? | Hva er klokka? |
| Um wie viel Uhr? | Naar? / Klokka hva? |`,
    },
    {
      id: 'tysk-1-4-1-text-1',
      type: 'text',
      content: `## Hele timer

For aa si hele timer bruker vi "Es ist ... Uhr":

| Klokka | Tysk |
|--------|------|
| 1:00 | Es ist ein Uhr |
| 2:00 | Es ist zwei Uhr |
| 3:00 | Es ist drei Uhr |
| 4:00 | Es ist vier Uhr |
| 5:00 | Es ist fuenf Uhr |
| 6:00 | Es ist sechs Uhr |
| 7:00 | Es ist sieben Uhr |
| 8:00 | Es ist acht Uhr |
| 9:00 | Es ist neun Uhr |
| 10:00 | Es ist zehn Uhr |
| 11:00 | Es ist elf Uhr |
| 12:00 | Es ist zwoelf Uhr |

**Merk:** Ved klokka ett sier vi "ein Uhr" (ikke "eins Uhr").`,
    },
    {
      id: 'tysk-1-4-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Hele timer',
      problem: `Si paa tysk:

a) Klokka er 3
b) Klokka er 7
c) Klokka er 12`,
      solution: `**Loesning:**

a) **Es ist drei Uhr.**

b) **Es ist sieben Uhr.**

c) **Es ist zwoelf Uhr.**`,
    },
    {
      id: 'tysk-1-4-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-4-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Si paa tysk:',
        subTasks: [
          { label: 'a', task: 'Klokka er 5', solution: 'Es ist fuenf Uhr' },
          { label: 'b', task: 'Klokka er 9', solution: 'Es ist neun Uhr' },
          { label: 'c', task: 'Klokka er 1', solution: 'Es ist ein Uhr' },
        ],
        solution: 'a) Es ist fuenf Uhr, b) Es ist neun Uhr, c) Es ist ein Uhr',
        hints: ['Bruk "Es ist ... Uhr"', 'Ved klokka 1: "ein Uhr" (ikke "eins")'],
      },
    },
    {
      id: 'tysk-1-4-1-text-2',
      type: 'text',
      content: `## Halv og kvart

Paa tysk bruker vi spesielle uttrykk for halv og kvart:

| Klokka | Tysk | Forklaring |
|--------|------|------------|
| 2:15 | Viertel nach zwei | Kvart over to |
| 2:30 | halb drei | Halv tre |
| 2:45 | Viertel vor drei | Kvart paa tre |

**Viktig:** "Halb" peker mot den NESTE timen!
- halb drei = 2:30 (halv tre)
- halb sieben = 6:30 (halv syv)`,
    },
    {
      id: 'tysk-1-4-1-warning-1',
      type: 'warning',
      content: `**Vanlig feil med "halb":**

Paa tysk refererer "halb" til den kommende timen:
- **halb drei** = 2:30 (IKKE 3:30!)
- **halb acht** = 7:30 (IKKE 8:30!)

Dette er annerledes enn paa norsk der vi ogsaa sier "halv tre" for 2:30.`,
    },
    {
      id: 'tysk-1-4-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Halv og kvart',
      problem: `Si paa tysk:

a) Klokka er kvart over fire (4:15)
b) Klokka er halv fem (4:30)
c) Klokka er kvart paa seks (5:45)`,
      solution: `**Loesning:**

a) **Es ist Viertel nach vier.** (kvart over fire)

b) **Es ist halb fuenf.** (halv fem = 4:30)

c) **Es ist Viertel vor sechs.** (kvart paa seks)`,
    },
    {
      id: 'tysk-1-4-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-4-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Si paa tysk:',
        subTasks: [
          { label: 'a', task: '3:15', solution: 'Viertel nach drei' },
          { label: 'b', task: '6:30', solution: 'halb sieben' },
          { label: 'c', task: '8:45', solution: 'Viertel vor neun' },
          { label: 'd', task: '11:30', solution: 'halb zwoelf' },
        ],
        solution: 'a) Viertel nach drei, b) halb sieben, c) Viertel vor neun, d) halb zwoelf',
        hints: ['Kvart over = Viertel nach', 'Halv = halb + NESTE time', 'Kvart paa = Viertel vor'],
      },
    },
    {
      id: 'tysk-1-4-1-text-3',
      type: 'text',
      content: `## Minutter

For andre minutter bruker vi "nach" (over) og "vor" (paa):

| Klokka | Tysk |
|--------|------|
| 3:05 | fuenf nach drei |
| 3:10 | zehn nach drei |
| 3:20 | zwanzig nach drei |
| 3:40 | zwanzig vor vier |
| 3:50 | zehn vor vier |
| 3:55 | fuenf vor vier |

**Offisiell tid (24-timers):**

| Klokka | Tysk |
|--------|------|
| 14:30 | vierzehn Uhr dreissig |
| 18:45 | achtzehn Uhr fuenfundvierzig |`,
    },
    {
      id: 'tysk-1-4-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Minutter',
      problem: `Si paa tysk:

a) 4:10
b) 7:50
c) 15:25 (offisiell tid)`,
      solution: `**Loesning:**

a) **Es ist zehn nach vier.** (ti over fire)

b) **Es ist zehn vor acht.** (ti paa aatte)

c) **Es ist fuenfzehn Uhr fuenfundzwanzig.** (offisiell)`,
    },
    {
      id: 'tysk-1-4-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-4-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva er klokka paa norsk?',
        subTasks: [
          { label: 'a', task: 'Es ist halb neun', solution: '8:30 (halv ni)' },
          { label: 'b', task: 'Es ist Viertel nach elf', solution: '11:15 (kvart over elleve)' },
          { label: 'c', task: 'Es ist zwanzig vor sechs', solution: '5:40 (tjue paa seks)' },
        ],
        solution: 'a) 8:30, b) 11:15, c) 5:40',
        hints: ['halb neun = halv ni = 8:30', 'Viertel nach = kvart over', 'vor = paa (foer)'],
      },
    },
    {
      id: 'tysk-1-4-1-tip-1',
      type: 'tip',
      content: `**Tips for aa huske klokkeslett:**

1. "nach" = etter/over (minuttene etter hel time)
2. "vor" = foer/paa (minuttene foer neste time)
3. "halb" = halv (peker mot neste time!)
4. "Viertel" = kvart (15 minutter)`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 4.2 Die Wochentage - Ukedagene
// ----------------------------------------------------------------------------

export const CHAPTER_TYSK_1_4_2: TextbookChapter = {
  id: 'tysk-1-4-2',
  courseId: 'tysk-1',
  chapterNumber: '4.2',
  title: 'Die Wochentage',
  subtitle: 'Ukedagene',
  description: 'Laer ukedagene paa tysk og hvordan du bruker dem.',
  estimatedMinutes: 40,
  competenceGoals: [
    'si ukedagene paa tysk',
    'snakke om hva som skjer paa ulike dager',
  ],
  content: [
    {
      id: 'tysk-1-4-2-intro',
      type: 'text',
      content: `## Ukedagene paa tysk

Ukedagene er viktige ord som du bruker hver dag. Paa tysk begynner uka med mandag.

| Tysk | Norsk |
|------|-------|
| der Montag | mandag |
| der Dienstag | tirsdag |
| der Mittwoch | onsdag |
| der Donnerstag | torsdag |
| der Freitag | fredag |
| der Samstag | loerdag |
| der Sonntag | soendag |

**Merk:** Alle ukedagene er hankjoennsord (der).`,
    },
    {
      id: 'tysk-1-4-2-note-1',
      type: 'note',
      content: `**Opprinnelsen til navnene:**

- **Montag** - Maanens dag (Mond = maane)
- **Dienstag** - Tius dag (germansk gud)
- **Mittwoch** - Midten av uka (Mitte = midten)
- **Donnerstag** - Tors dag (Donner = torden)
- **Freitag** - Frøyas dag (germansk gudinne)
- **Samstag** - Fra hebraisk sabbat
- **Sonntag** - Solens dag (Sonne = sol)`,
    },
    {
      id: 'tysk-1-4-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Ukedagene',
      problem: `Si paa tysk:

a) mandag
b) onsdag
c) loerdag`,
      solution: `**Loesning:**

a) **Montag**

b) **Mittwoch**

c) **Samstag**`,
    },
    {
      id: 'tysk-1-4-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-4-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv ukedagene paa tysk:',
        subTasks: [
          { label: 'a', task: 'tirsdag', solution: 'Dienstag' },
          { label: 'b', task: 'torsdag', solution: 'Donnerstag' },
          { label: 'c', task: 'fredag', solution: 'Freitag' },
          { label: 'd', task: 'soendag', solution: 'Sonntag' },
        ],
        solution: 'a) Dienstag, b) Donnerstag, c) Freitag, d) Sonntag',
        hints: ['Dagene har stor forbokstav', 'Torsdag = Donner (torden) + Tag'],
      },
    },
    {
      id: 'tysk-1-4-2-text-1',
      type: 'text',
      content: `## Bruke ukedagene i setninger

For aa si "paa mandag" bruker vi preposisjonen **am**:

| Tysk | Norsk |
|------|-------|
| am Montag | paa mandag |
| am Dienstag | paa tirsdag |
| am Wochenende | i helgen |

**Eksempler:**
- Am Montag habe ich Schule. (Paa mandag har jeg skole.)
- Am Freitag gehe ich ins Kino. (Paa fredag gaar jeg paa kino.)`,
    },
    {
      id: 'tysk-1-4-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Setninger med ukedager',
      problem: `Oversett til tysk:

a) Paa tirsdag spiller jeg fotball.
b) Paa loerdag besoekervi bestemor.`,
      solution: `**Loesning:**

a) **Am Dienstag spiele ich Fussball.**

b) **Am Samstag besuchen wir Oma.**`,
    },
    {
      id: 'tysk-1-4-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-4-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Paa onsdag har jeg tysk.', solution: 'Am Mittwoch habe ich Deutsch.' },
          { label: 'b', task: 'Paa soendag sover jeg lenge.', solution: 'Am Sonntag schlafe ich lange.' },
        ],
        solution: 'a) Am Mittwoch habe ich Deutsch. b) Am Sonntag schlafe ich lange.',
        hints: ['Bruk "am" + ukedag', 'Verbet staar paa plass 2'],
      },
    },
    {
      id: 'tysk-1-4-2-text-2',
      type: 'text',
      content: `## Spoerre om hvilken dag

| Tysk | Norsk |
|------|-------|
| Welcher Tag ist heute? | Hvilken dag er det i dag? |
| Heute ist Montag. | I dag er det mandag. |
| Morgen ist Dienstag. | I morgen er det tirsdag. |
| Gestern war Sonntag. | I gaar var det soendag. |`,
    },
    {
      id: 'tysk-1-4-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Spoerre om dagen',
      problem: `Svar paa tysk (i dag er onsdag):

a) Welcher Tag ist heute?
b) Welcher Tag ist morgen?
c) Welcher Tag war gestern?`,
      solution: `**Loesning:**

a) **Heute ist Mittwoch.** (I dag er det onsdag.)

b) **Morgen ist Donnerstag.** (I morgen er det torsdag.)

c) **Gestern war Dienstag.** (I gaar var det tirsdag.)`,
    },
    {
      id: 'tysk-1-4-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-4-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar paa tysk (i dag er fredag):',
        subTasks: [
          { label: 'a', task: 'Hvilken dag er det i dag?', solution: 'Heute ist Freitag.' },
          { label: 'b', task: 'Hvilken dag er det i morgen?', solution: 'Morgen ist Samstag.' },
          { label: 'c', task: 'Hvilken dag var det i gaar?', solution: 'Gestern war Donnerstag.' },
        ],
        solution: 'a) Heute ist Freitag. b) Morgen ist Samstag. c) Gestern war Donnerstag.',
        hints: ['heute = i dag', 'morgen = i morgen', 'gestern = i gaar'],
      },
    },
    {
      id: 'tysk-1-4-2-tip-1',
      type: 'tip',
      content: `**Huskeregel:**

- **am** + ukedag (am Montag)
- **heute ist** + ukedag (heute ist Montag)
- **morgen ist** + ukedag (morgen ist Dienstag)
- **gestern war** + ukedag (gestern war Sonntag)`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 4.3 Monate und Jahreszeiten - Maaneder og aarstider
// ----------------------------------------------------------------------------

export const CHAPTER_TYSK_1_4_3: TextbookChapter = {
  id: 'tysk-1-4-3',
  courseId: 'tysk-1',
  chapterNumber: '4.3',
  title: 'Monate und Jahreszeiten',
  subtitle: 'Maaneder og aarstider',
  description: 'Laer maanedene og aarstidene paa tysk.',
  estimatedMinutes: 40,
  competenceGoals: [
    'si maanedene paa tysk',
    'snakke om aarstider',
    'si naar man har bursdag',
  ],
  content: [
    {
      id: 'tysk-1-4-3-intro',
      type: 'text',
      content: `## Maanedene paa tysk

Maanedene paa tysk ligner paa de norske:

| Tysk | Norsk |
|------|-------|
| Januar | januar |
| Februar | februar |
| Maerz | mars |
| April | april |
| Mai | mai |
| Juni | juni |
| Juli | juli |
| August | august |
| September | september |
| Oktober | oktober |
| November | november |
| Dezember | desember |

**Merk:** Maanedene skrives med stor forbokstav paa tysk.`,
    },
    {
      id: 'tysk-1-4-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Maanedene',
      problem: `Si paa tysk:

a) mars
b) august
c) desember`,
      solution: `**Loesning:**

a) **Maerz**

b) **August**

c) **Dezember**`,
    },
    {
      id: 'tysk-1-4-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-4-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv maanedene paa tysk:',
        subTasks: [
          { label: 'a', task: 'januar', solution: 'Januar' },
          { label: 'b', task: 'mai', solution: 'Mai' },
          { label: 'c', task: 'juli', solution: 'Juli' },
          { label: 'd', task: 'oktober', solution: 'Oktober' },
        ],
        solution: 'a) Januar, b) Mai, c) Juli, d) Oktober',
        hints: ['Stor forbokstav', 'Ligner paa norsk'],
      },
    },
    {
      id: 'tysk-1-4-3-text-1',
      type: 'text',
      content: `## Aarstidene

| Tysk | Norsk |
|------|-------|
| der Fruehling | vaaren |
| der Sommer | sommeren |
| der Herbst | hoesten |
| der Winter | vinteren |

**Maaneder i hver aarstid:**
- **Fruehling:** Maerz, April, Mai
- **Sommer:** Juni, Juli, August
- **Herbst:** September, Oktober, November
- **Winter:** Dezember, Januar, Februar`,
    },
    {
      id: 'tysk-1-4-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Aarstider',
      problem: `Si paa tysk:

a) Sommeren er varm.
b) Om vinteren snor det.`,
      solution: `**Loesning:**

a) **Der Sommer ist warm.**

b) **Im Winter schneit es.**`,
    },
    {
      id: 'tysk-1-4-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-4-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv aarstidene paa tysk:',
        subTasks: [
          { label: 'a', task: 'vaaren', solution: 'der Fruehling' },
          { label: 'b', task: 'sommeren', solution: 'der Sommer' },
          { label: 'c', task: 'hoesten', solution: 'der Herbst' },
          { label: 'd', task: 'vinteren', solution: 'der Winter' },
        ],
        solution: 'a) der Fruehling, b) der Sommer, c) der Herbst, d) der Winter',
        hints: ['Alle aarstidene er hankjoenn (der)'],
      },
    },
    {
      id: 'tysk-1-4-3-text-2',
      type: 'text',
      content: `## Bruke maaneder og aarstider

For aa si "i januar" eller "om sommeren" bruker vi **im**:

| Tysk | Norsk |
|------|-------|
| im Januar | i januar |
| im Sommer | om sommeren |
| im Herbst | om hoesten |

**Eksempel:**
- Mein Geburtstag ist im Mai. (Bursdagen min er i mai.)
- Im Winter fahre ich Ski. (Om vinteren gaar jeg paa ski.)`,
    },
    {
      id: 'tysk-1-4-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Bursdag',
      problem: `Si paa tysk:

a) Bursdagen min er i mars.
b) Naar har du bursdag?`,
      solution: `**Loesning:**

a) **Mein Geburtstag ist im Maerz.**

b) **Wann hast du Geburtstag?**`,
    },
    {
      id: 'tysk-1-4-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-4-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Bursdagen min er i juli.', solution: 'Mein Geburtstag ist im Juli.' },
          { label: 'b', task: 'Om vaaren blomstrer trærne.', solution: 'Im Fruehling bluehen die Baeume.' },
          { label: 'c', task: 'I desember feirer vi jul.', solution: 'Im Dezember feiern wir Weihnachten.' },
        ],
        solution: 'a) Mein Geburtstag ist im Juli. b) Im Fruehling bluehen die Baeume. c) Im Dezember feiern wir Weihnachten.',
        hints: ['Bruk "im" + maaned/aarstid', 'Weihnachten = jul'],
      },
    },
    {
      id: 'tysk-1-4-3-tip-1',
      type: 'tip',
      content: `**Nyttige ord:**

| Tysk | Norsk |
|------|-------|
| der Geburtstag | bursdagen |
| Wann? | Naar? |
| das Jahr | aaret |
| die Woche | uka |`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 4.4 Mein Tagesablauf - Min dagsrutine
// ----------------------------------------------------------------------------

export const CHAPTER_TYSK_1_4_4: TextbookChapter = {
  id: 'tysk-1-4-4',
  courseId: 'tysk-1',
  chapterNumber: '4.4',
  title: 'Mein Tagesablauf',
  subtitle: 'Min dagsrutine',
  description: 'Laer aa fortelle om din daglige rutine.',
  estimatedMinutes: 45,
  competenceGoals: [
    'fortelle om daglige aktiviteter',
    'bruke refleksive verb',
    'snakke om tidspunkter',
  ],
  content: [
    {
      id: 'tysk-1-4-4-intro',
      type: 'text',
      content: `## Daglige aktiviteter

Her er vanlige aktiviteter i loapert av en dag:

| Tysk | Norsk |
|------|-------|
| aufstehen | staa opp |
| aufwachen | vaakne |
| fruehstuecken | spise frokost |
| sich duschen | dusje |
| sich anziehen | kle paa seg |
| zur Schule gehen | gaa paa skolen |
| Mittag essen | spise lunsj |
| Hausaufgaben machen | gjore lekser |
| zu Abend essen | spise middag |
| fernsehen | se paa TV |
| schlafen gehen | legge seg |`,
    },
    {
      id: 'tysk-1-4-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Morgenrutine',
      problem: `Si paa tysk:

a) Jeg staar opp klokka 7.
b) Jeg spiser frokost.
c) Jeg gaar paa skolen.`,
      solution: `**Loesning:**

a) **Ich stehe um sieben Uhr auf.**

b) **Ich fruehstuecke.**

c) **Ich gehe zur Schule.**`,
    },
    {
      id: 'tysk-1-4-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-4-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Jeg vaakner klokka 6.', solution: 'Ich wache um sechs Uhr auf.' },
          { label: 'b', task: 'Jeg spiser lunsj.', solution: 'Ich esse Mittag.' },
          { label: 'c', task: 'Jeg ser paa TV.', solution: 'Ich sehe fern.' },
        ],
        solution: 'a) Ich wache um sechs Uhr auf. b) Ich esse Mittag. c) Ich sehe fern.',
        hints: ['aufwachen er et delbart verb', 'fernsehen er ogsaa delbart'],
      },
    },
    {
      id: 'tysk-1-4-4-text-1',
      type: 'text',
      content: `## Delbare verb

Mange hverdagsverb er "delbare" - prefikset flyttes til slutten av setningen:

| Infinitiv | Boeyning | Eksempel |
|-----------|----------|----------|
| aufstehen | stehe ... auf | Ich stehe um 7 Uhr auf. |
| aufwachen | wache ... auf | Ich wache frueh auf. |
| fernsehen | sehe ... fern | Ich sehe abends fern. |
| anziehen | ziehe ... an | Ich ziehe mich an. |

**Struktur:** Subjekt + boeyd verb + ... + prefiks`,
    },
    {
      id: 'tysk-1-4-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Delbare verb',
      problem: `Sett inn riktig form av verbet:

a) Ich _____ um 8 Uhr _____. (aufstehen)
b) Er _____ den Fernseher _____. (anmachen)`,
      solution: `**Loesning:**

a) **Ich stehe um 8 Uhr auf.**

b) **Er macht den Fernseher an.**`,
    },
    {
      id: 'tysk-1-4-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-4-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fullfoor setningene med riktig verbform:',
        subTasks: [
          { label: 'a', task: 'Wir _____ um 6 Uhr _____. (aufstehen)', solution: 'stehen ... auf' },
          { label: 'b', task: 'Sie _____ jeden Abend _____. (fernsehen)', solution: 'sieht ... fern' },
          { label: 'c', task: 'Ich _____ mich schnell _____. (anziehen)', solution: 'ziehe ... an' },
        ],
        solution: 'a) stehen ... auf, b) sieht ... fern, c) ziehe ... an',
        hints: ['Prefikset gaar til slutten', 'Verbet boeyes etter subjektet'],
      },
    },
    {
      id: 'tysk-1-4-4-text-2',
      type: 'text',
      content: `## Tidsuttrykk

| Tysk | Norsk |
|------|-------|
| am Morgen / morgens | om morgenen |
| am Vormittag | paa formiddagen |
| am Mittag / mittags | midt paa dagen |
| am Nachmittag | paa ettermiddagen |
| am Abend / abends | om kvelden |
| in der Nacht / nachts | om natta |
| frueh | tidlig |
| spaet | sent |
| dann | saa/deretter |
| zuerst | foerst |
| danach | etterpaa |`,
    },
    {
      id: 'tysk-1-4-4-example-3',
      type: 'example',
      title: 'Eksempel 3: En hel dag',
      problem: `Beskriv din dag paa tysk med minst 4 aktiviteter.`,
      solution: `**Eksempel paa loesning:**

Ich stehe um sieben Uhr auf. Zuerst dusche ich mich. Dann fruehstuecke ich. Um acht Uhr gehe ich zur Schule. Am Nachmittag mache ich Hausaufgaben. Abends sehe ich fern. Um zehn Uhr gehe ich schlafen.

(Jeg staar opp klokka syv. Foerst dusjer jeg. Saa spiser jeg frokost. Klokka aatte gaar jeg paa skolen. Paa ettermiddagen gjoer jeg lekser. Om kvelden ser jeg paa TV. Klokka ti legger jeg meg.)`,
    },
    {
      id: 'tysk-1-4-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-4-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Om morgenen spiser jeg frokost.', solution: 'Am Morgen fruehstuecke ich. / Morgens fruehstuecke ich.' },
          { label: 'b', task: 'Foerst dusjer jeg, saa kler jeg paa meg.', solution: 'Zuerst dusche ich mich, dann ziehe ich mich an.' },
          { label: 'c', task: 'Om kvelden legger jeg meg klokka 10.', solution: 'Abends gehe ich um zehn Uhr schlafen.' },
        ],
        solution: 'a) Morgens fruehstuecke ich. b) Zuerst dusche ich mich, dann ziehe ich mich an. c) Abends gehe ich um zehn Uhr schlafen.',
        hints: ['Bruk tidsuttrykk i begynnelsen', 'zuerst = foerst, dann = saa'],
      },
    },
    {
      id: 'tysk-1-4-4-tip-1',
      type: 'tip',
      content: `**Tips for aa fortelle om dagen din:**

1. Begynn med naar du staar opp
2. Bruk tidsord som "zuerst", "dann", "danach"
3. Husk at delbare verb deles i to
4. Avslutt med naar du legger deg`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5: MAT OG RESTAURANT
// ============================================================================

// ----------------------------------------------------------------------------
// 5.1 Essen und Trinken - Mat og drikke
// ----------------------------------------------------------------------------

export const CHAPTER_TYSK_1_5_1: TextbookChapter = {
  id: 'tysk-1-5-1',
  courseId: 'tysk-1',
  chapterNumber: '5.1',
  title: 'Essen und Trinken',
  subtitle: 'Mat og drikke',
  description: 'Laer grunnleggende ord for mat og drikke paa tysk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'navngi vanlig mat og drikke',
    'snakke om hva du liker aa spise',
  ],
  content: [
    {
      id: 'tysk-1-5-1-intro',
      type: 'text',
      content: `## Mat paa tysk

Mat er et viktig tema! Her er grunnleggende matvarer:

**Broed og bakevarer:**

| Tysk | Norsk |
|------|-------|
| das Brot | broedet |
| das Broetchen | rundstykket |
| der Toast | toasten |
| der Kuchen | kaken |
| die Brezel | kringlen |`,
    },
    {
      id: 'tysk-1-5-1-text-1',
      type: 'text',
      content: `## Kjoett og paalegg

| Tysk | Norsk |
|------|-------|
| das Fleisch | kjoettet |
| die Wurst | poelsen |
| der Schinken | skinken |
| das Haehnchen | kyllingen |
| der Fisch | fisken |
| das Ei / die Eier | egget / eggene |
| der Kaese | osten |
| die Butter | smoeret |`,
    },
    {
      id: 'tysk-1-5-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Matord',
      problem: `Si paa tysk:

a) broed
b) ost
c) egg`,
      solution: `**Loesning:**

a) **das Brot**

b) **der Kaese**

c) **das Ei** (flertall: die Eier)`,
    },
    {
      id: 'tysk-1-5-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-5-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv paa tysk med artikkel:',
        subTasks: [
          { label: 'a', task: 'poelse', solution: 'die Wurst' },
          { label: 'b', task: 'kylling', solution: 'das Haehnchen' },
          { label: 'c', task: 'smoer', solution: 'die Butter' },
          { label: 'd', task: 'kake', solution: 'der Kuchen' },
        ],
        solution: 'a) die Wurst, b) das Haehnchen, c) die Butter, d) der Kuchen',
        hints: ['Husk artikkelen (der, die, das)'],
      },
    },
    {
      id: 'tysk-1-5-1-text-2',
      type: 'text',
      content: `## Frukt og groennsaker

| Tysk | Norsk |
|------|-------|
| das Obst | frukten |
| der Apfel | eplet |
| die Banane | bananen |
| die Orange | appelsinen |
| die Erdbeere | jordbaeret |
| das Gemuese | groennsakene |
| die Tomate | tomaten |
| die Gurke | agurken |
| die Kartoffel | poteten |
| der Salat | salaten |`,
    },
    {
      id: 'tysk-1-5-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Frukt og groennsaker',
      problem: `Si paa tysk:

a) Jeg liker epler.
b) Tomater er roede.`,
      solution: `**Loesning:**

a) **Ich mag Aepfel.** (flertall av Apfel)

b) **Tomaten sind rot.**`,
    },
    {
      id: 'tysk-1-5-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-5-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv paa tysk:',
        subTasks: [
          { label: 'a', task: 'eple', solution: 'der Apfel' },
          { label: 'b', task: 'banan', solution: 'die Banane' },
          { label: 'c', task: 'potet', solution: 'die Kartoffel' },
          { label: 'd', task: 'salat', solution: 'der Salat' },
        ],
        solution: 'a) der Apfel, b) die Banane, c) die Kartoffel, d) der Salat',
        hints: ['Frukt og groennsaker har ulike kjoenn'],
      },
    },
    {
      id: 'tysk-1-5-1-text-3',
      type: 'text',
      content: `## Drikke

| Tysk | Norsk |
|------|-------|
| das Wasser | vannet |
| die Milch | melka |
| der Saft | juicen |
| der Orangensaft | appelsinjuicen |
| der Kaffee | kaffen |
| der Tee | teen |
| die Limonade | brusen |
| das Bier | oelet |
| der Wein | vinen |`,
    },
    {
      id: 'tysk-1-5-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Drikke',
      problem: `Si paa tysk:

a) Jeg drikker vann.
b) Vil du ha kaffe?`,
      solution: `**Loesning:**

a) **Ich trinke Wasser.**

b) **Moechtest du Kaffee?**`,
    },
    {
      id: 'tysk-1-5-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-5-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Jeg drikker melk.', solution: 'Ich trinke Milch.' },
          { label: 'b', task: 'Han liker te.', solution: 'Er mag Tee.' },
          { label: 'c', task: 'Vi drikker appelsinjuice.', solution: 'Wir trinken Orangensaft.' },
        ],
        solution: 'a) Ich trinke Milch. b) Er mag Tee. c) Wir trinken Orangensaft.',
        hints: ['trinken = drikke', 'moegen = like'],
      },
    },
    {
      id: 'tysk-1-5-1-tip-1',
      type: 'tip',
      content: `**Nyttige uttrykk:**

| Tysk | Norsk |
|------|-------|
| Ich esse ... | Jeg spiser ... |
| Ich trinke ... | Jeg drikker ... |
| Ich mag ... | Jeg liker ... |
| Ich mag ... nicht | Jeg liker ikke ... |
| Ich habe Hunger | Jeg er sulten |
| Ich habe Durst | Jeg er toerst |`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 5.2 Im Restaurant - Paa restauranten
// ----------------------------------------------------------------------------

export const CHAPTER_TYSK_1_5_2: TextbookChapter = {
  id: 'tysk-1-5-2',
  courseId: 'tysk-1',
  chapterNumber: '5.2',
  title: 'Im Restaurant',
  subtitle: 'Paa restauranten',
  description: 'Laer aa bestille mat og kommunisere paa restaurant.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bestille mat og drikke',
    'foerstaa servitoren',
    'betale regningen',
  ],
  content: [
    {
      id: 'tysk-1-5-2-intro',
      type: 'text',
      content: `## Paa restauranten

Naar du besaeker en restaurant i Tyskland, er det nyttig aa kunne disse uttrykkene:

**Ankomst:**

| Tysk | Norsk |
|------|-------|
| Einen Tisch fuer zwei, bitte. | Et bord for to, takk. |
| Haben Sie einen Tisch frei? | Har dere et ledig bord? |
| Ich habe reserviert. | Jeg har reservert. |`,
    },
    {
      id: 'tysk-1-5-2-text-1',
      type: 'text',
      content: `## Bestilling

**Servitaeren sier:**

| Tysk | Norsk |
|------|-------|
| Was moechten Sie bestellen? | Hva oensker De aa bestille? |
| Moechten Sie etwas trinken? | Oensker De noe aa drikke? |
| Haben Sie schon gewaehlt? | Har De valgt? |

**Du svarer:**

| Tysk | Norsk |
|------|-------|
| Ich haette gern... | Jeg vil gjerne ha... |
| Ich moechte... | Jeg oensker... |
| Ich nehme... | Jeg tar... |
| Die Speisekarte, bitte. | Menyen, takk. |`,
    },
    {
      id: 'tysk-1-5-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Bestilling',
      problem: `Bestill paa tysk:

a) en pizza
b) et glass vann
c) menyen`,
      solution: `**Loesning:**

a) **Ich haette gern eine Pizza.** / **Ich moechte eine Pizza.**

b) **Ich haette gern ein Glas Wasser.**

c) **Die Speisekarte, bitte.**`,
    },
    {
      id: 'tysk-1-5-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-5-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bestill paa tysk:',
        subTasks: [
          { label: 'a', task: 'en kaffe', solution: 'Ich haette gern einen Kaffee.' },
          { label: 'b', task: 'en suppe', solution: 'Ich haette gern eine Suppe.' },
          { label: 'c', task: 'en biff', solution: 'Ich haette gern ein Steak.' },
        ],
        solution: 'a) Ich haette gern einen Kaffee. b) Ich haette gern eine Suppe. c) Ich haette gern ein Steak.',
        hints: ['Bruk "Ich haette gern..." eller "Ich moechte..."'],
      },
    },
    {
      id: 'tysk-1-5-2-text-2',
      type: 'text',
      content: `## Betaling

| Tysk | Norsk |
|------|-------|
| Die Rechnung, bitte. | Regningen, takk. |
| Zahlen, bitte. | Jeg vil betale, takk. |
| Zusammen oder getrennt? | Sammen eller hver for seg? |
| Zusammen, bitte. | Sammen, takk. |
| Getrennt, bitte. | Hver for seg, takk. |
| Stimmt so. | Behold resten (tips). |
| Das macht... Euro. | Det blir... euro. |`,
    },
    {
      id: 'tysk-1-5-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Betaling',
      problem: `Si paa tysk:

a) Regningen, takk.
b) Vi betaler sammen.
c) Behold resten.`,
      solution: `**Loesning:**

a) **Die Rechnung, bitte.**

b) **Zusammen, bitte.**

c) **Stimmt so.**`,
    },
    {
      id: 'tysk-1-5-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-5-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva sier du paa tysk?',
        subTasks: [
          { label: 'a', task: 'Du vil betale.', solution: 'Zahlen, bitte. / Die Rechnung, bitte.' },
          { label: 'b', task: 'Dere vil betale hver for seg.', solution: 'Getrennt, bitte.' },
          { label: 'c', task: 'Du gir tips (behold resten).', solution: 'Stimmt so.' },
        ],
        solution: 'a) Zahlen, bitte. b) Getrennt, bitte. c) Stimmt so.',
        hints: ['Die Rechnung = regningen', 'Stimmt so = behold resten'],
      },
    },
    {
      id: 'tysk-1-5-2-text-3',
      type: 'text',
      content: `## Hoeflige fraser

| Tysk | Norsk |
|------|-------|
| Hat es geschmeckt? | Smakte det? |
| Ja, sehr gut! | Ja, veldig godt! |
| Es war lecker. | Det var deilig. |
| Danke, gleichfalls! | Takk, i like maate! |
| Guten Appetit! | God appetitt! |`,
    },
    {
      id: 'tysk-1-5-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Dialog paa restaurant',
      problem: `Fullfaer dialogen:

Kellner: Guten Tag! Was moechten Sie?
Du: _____
Kellner: Und zu trinken?
Du: _____`,
      solution: `**Eksempel paa loesning:**

Kellner: Guten Tag! Was moechten Sie?
Du: **Ich haette gern eine Pizza Margherita, bitte.**

Kellner: Und zu trinken?
Du: **Ein Glas Cola, bitte.**`,
    },
    {
      id: 'tysk-1-5-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-5-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett dialogen til tysk:',
        subTasks: [
          { label: 'a', task: 'Servitaer: Hva oensker De?', solution: 'Was moechten Sie?' },
          { label: 'b', task: 'Du: Jeg vil gjerne ha en salat.', solution: 'Ich haette gern einen Salat.' },
          { label: 'c', task: 'Servitaer: Smakte det?', solution: 'Hat es geschmeckt?' },
          { label: 'd', task: 'Du: Ja, veldig godt!', solution: 'Ja, sehr gut!' },
        ],
        solution: 'a) Was moechten Sie? b) Ich haette gern einen Salat. c) Hat es geschmeckt? d) Ja, sehr gut!',
        hints: ['moechten = oenske', 'geschmeckt = smakte'],
      },
    },
    {
      id: 'tysk-1-5-2-note-1',
      type: 'note',
      content: `**Kulturell info:**

I Tyskland er det vanlig aa gi 5-10% tips. Du kan runde opp beloepet og si "Stimmt so" (behold resten), eller si det nytte beloepet direkte, f.eks. "Achtzehn Euro, bitte" naar regningen er 16,50 euro.`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 5.3 Im Supermarkt - Paa butikken
// ----------------------------------------------------------------------------

export const CHAPTER_TYSK_1_5_3: TextbookChapter = {
  id: 'tysk-1-5-3',
  courseId: 'tysk-1',
  chapterNumber: '5.3',
  title: 'Im Supermarkt',
  subtitle: 'Paa butikken',
  description: 'Laer aa handle og kommunisere i butikken.',
  estimatedMinutes: 40,
  competenceGoals: [
    'handle i butikken',
    'spoerre om priser',
    'betale for varer',
  ],
  content: [
    {
      id: 'tysk-1-5-3-intro',
      type: 'text',
      content: `## I butikken

Viktige ord for aa handle:

| Tysk | Norsk |
|------|-------|
| der Supermarkt | supermarkedet |
| das Geschaeft | butikken |
| die Baeckerei | bakeriet |
| die Metzgerei | slakterbutikken |
| der Markt | markedet |
| der Einkaufswagen | handlevogna |
| der Korb | kurven |
| die Kasse | kassa |`,
    },
    {
      id: 'tysk-1-5-3-text-1',
      type: 'text',
      content: `## Mengde og emballasje

| Tysk | Norsk |
|------|-------|
| ein Stueck | et stykke |
| eine Scheibe | en skive |
| eine Flasche | en flaske |
| eine Dose | en boks |
| eine Tuete | en pose |
| ein Kilo | en kilo |
| ein Pfund (500g) | et pund |
| ein Liter | en liter |
| hundert Gramm | hundre gram |`,
    },
    {
      id: 'tysk-1-5-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Bestille i butikken',
      problem: `Si paa tysk:

a) En kilo epler, takk.
b) Tre skiver skinke.
c) En flaske melk.`,
      solution: `**Loesning:**

a) **Ein Kilo Aepfel, bitte.**

b) **Drei Scheiben Schinken, bitte.**

c) **Eine Flasche Milch, bitte.**`,
    },
    {
      id: 'tysk-1-5-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-5-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Si paa tysk:',
        subTasks: [
          { label: 'a', task: 'En flaske vann', solution: 'Eine Flasche Wasser' },
          { label: 'b', task: 'Hundre gram ost', solution: 'Hundert Gramm Kaese' },
          { label: 'c', task: 'To kilo poteter', solution: 'Zwei Kilo Kartoffeln' },
        ],
        solution: 'a) Eine Flasche Wasser, b) Hundert Gramm Kaese, c) Zwei Kilo Kartoffeln',
        hints: ['Mengde + enhet + vare'],
      },
    },
    {
      id: 'tysk-1-5-3-text-2',
      type: 'text',
      content: `## Spoerre om pris

| Tysk | Norsk |
|------|-------|
| Was kostet das? | Hva koster det? |
| Wie viel kostet...? | Hvor mye koster...? |
| Das kostet... Euro. | Det koster... euro. |
| Das macht... Euro. | Det blir... euro. |
| Das ist zu teuer. | Det er for dyrt. |
| Das ist guenstig/billig. | Det er rimelig/billig. |`,
    },
    {
      id: 'tysk-1-5-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Spoerre om pris',
      problem: `Si paa tysk:

a) Hva koster broedet?
b) Det er for dyrt.`,
      solution: `**Loesning:**

a) **Was kostet das Brot?** / **Wie viel kostet das Brot?**

b) **Das ist zu teuer.**`,
    },
    {
      id: 'tysk-1-5-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-5-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Hva koster det?', solution: 'Was kostet das?' },
          { label: 'b', task: 'Det blir 5 euro.', solution: 'Das macht fuenf Euro.' },
          { label: 'c', task: 'Det er billig.', solution: 'Das ist billig/guenstig.' },
        ],
        solution: 'a) Was kostet das? b) Das macht fuenf Euro. c) Das ist billig/guenstig.',
        hints: ['kosten = koste', 'machen = bli (i prissammenheng)'],
      },
    },
    {
      id: 'tysk-1-5-3-text-3',
      type: 'text',
      content: `## Ved kassa

| Tysk | Norsk |
|------|-------|
| Bar oder mit Karte? | Kontant eller med kort? |
| Ich zahle bar. | Jeg betaler kontant. |
| Mit Karte, bitte. | Med kort, takk. |
| Brauchen Sie eine Tuete? | Trenger De en pose? |
| Ja, bitte. / Nein, danke. | Ja, takk. / Nei, takk. |
| Hier ist Ihr Wechselgeld. | Her er vekslepengene. |`,
    },
    {
      id: 'tysk-1-5-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Ved kassa',
      problem: `Hva svarer du?

a) Bar oder mit Karte?
b) Brauchen Sie eine Tuete?`,
      solution: `**Mulige svar:**

a) **Ich zahle bar.** eller **Mit Karte, bitte.**

b) **Ja, bitte.** eller **Nein, danke.**`,
    },
    {
      id: 'tysk-1-5-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-5-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva sier du paa tysk?',
        subTasks: [
          { label: 'a', task: 'Du vil betale med kort.', solution: 'Mit Karte, bitte.' },
          { label: 'b', task: 'Du trenger ikke pose.', solution: 'Nein, danke.' },
          { label: 'c', task: 'Du vil betale kontant.', solution: 'Ich zahle bar.' },
        ],
        solution: 'a) Mit Karte, bitte. b) Nein, danke. c) Ich zahle bar.',
        hints: ['bar = kontant', 'Karte = kort'],
      },
    },
    {
      id: 'tysk-1-5-3-tip-1',
      type: 'tip',
      content: `**Tips for aa handle i Tyskland:**

1. Ta med egen handlepose - poser koster penger
2. Legg varene paa baandet selv
3. Pakk varene raskt - det gaar fort i kassa
4. Pant (Pfand) paa flasker - ta vare paa kvitteringen`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 5.4 Deutsche Kueche - Tysk mat
// ----------------------------------------------------------------------------

export const CHAPTER_TYSK_1_5_4: TextbookChapter = {
  id: 'tysk-1-5-4',
  courseId: 'tysk-1',
  chapterNumber: '5.4',
  title: 'Deutsche Kueche',
  subtitle: 'Tysk mat',
  description: 'Laer om tradisjonell tysk mat og matkultur.',
  estimatedMinutes: 40,
  competenceGoals: [
    'kjenne til tysk matkultur',
    'beskrive tradisjonelle tyske retter',
  ],
  content: [
    {
      id: 'tysk-1-5-4-intro',
      type: 'text',
      content: `## Tradisjonell tysk mat

Tyskland er kjent for mange deilige retter! Her er noen av de mest kjente:

**Klassiske retter:**

| Tysk | Beskrivelse |
|------|-------------|
| die Bratwurst | stekt poelse |
| das Schnitzel | panert kotelett |
| der Sauerbraten | sursteik (marinert kjoett) |
| das Sauerkraut | surkaal |
| die Brezel | saltkringle |
| der Lebkuchen | pepperkake |`,
    },
    {
      id: 'tysk-1-5-4-text-1',
      type: 'text',
      content: `## Poelser (Wuerste)

Tyskland har over 1500 forskjellige poelsetyper!

| Tysk | Beskrivelse |
|------|-------------|
| die Bratwurst | stekepoelse |
| die Currywurst | poelse med karrisaus |
| die Weisswurst | hvit poelse (fra Bayern) |
| die Bockwurst | kokepoelse |
| die Nuernberger | smaa stekepoelser fra Nuernberg |`,
    },
    {
      id: 'tysk-1-5-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Tysk mat',
      problem: `Hva er dette paa norsk?

a) die Bratwurst
b) das Sauerkraut
c) die Brezel`,
      solution: `**Loesning:**

a) **stekt poelse / stekepoelse**

b) **surkaal**

c) **saltkringle / kringle**`,
    },
    {
      id: 'tysk-1-5-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-5-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Match rettene med beskrivelsen:',
        subTasks: [
          { label: 'a', task: 'das Schnitzel', solution: 'panert kotelett' },
          { label: 'b', task: 'die Currywurst', solution: 'poelse med karrisaus' },
          { label: 'c', task: 'der Sauerbraten', solution: 'marinert kjoett / sursteik' },
        ],
        solution: 'a) panert kotelett, b) poelse med karrisaus, c) marinert kjoett',
        hints: ['Schnitzel = kotelett', 'Curry = karri'],
      },
    },
    {
      id: 'tysk-1-5-4-text-2',
      type: 'text',
      content: `## Tilbehoer og garnityr

| Tysk | Norsk |
|------|-------|
| die Kartoffeln | potetene |
| die Pommes (frites) | pommes frites |
| der Kartoffelsalat | potetsalat |
| die Knoedel | melboller |
| der Rotkohl | raedkaal |
| die Sosse | sausen |
| der Senf | sennepen |`,
    },
    {
      id: 'tysk-1-5-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Bestille tysk mat',
      problem: `Si paa tysk:

a) Jeg vil gjerne ha en bratwurst med surkaal.
b) Med sennep, takk.`,
      solution: `**Loesning:**

a) **Ich haette gern eine Bratwurst mit Sauerkraut.**

b) **Mit Senf, bitte.**`,
    },
    {
      id: 'tysk-1-5-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-5-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Jeg vil gjerne ha schnitzel med pommes frites.', solution: 'Ich haette gern ein Schnitzel mit Pommes.' },
          { label: 'b', task: 'Kan jeg faa saus, takk?', solution: 'Kann ich Sosse haben, bitte?' },
          { label: 'c', task: 'Surkaal smaker godt.', solution: 'Sauerkraut schmeckt gut.' },
        ],
        solution: 'a) Ich haette gern ein Schnitzel mit Pommes. b) Kann ich Sosse haben, bitte? c) Sauerkraut schmeckt gut.',
        hints: ['mit = med', 'schmecken = smake'],
      },
    },
    {
      id: 'tysk-1-5-4-text-3',
      type: 'text',
      content: `## Tysk broed og bakst

Tyskland er verdens broedland med over 300 broedsort!

| Tysk | Norsk |
|------|-------|
| das Vollkornbrot | grovbroed |
| das Schwarzbrot | moerkt broed |
| das Roggenbrot | rugbroed |
| der Kuchen | kake |
| die Torte | blaakake |
| der Apfelstrudel | eplestrudel |
| die Schwarzwaelder Kirschtorte | Schwarzwald-kake |`,
    },
    {
      id: 'tysk-1-5-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Paa bakeriet',
      problem: `Du er paa et tysk bakeri. Bestill:

a) Et rundstykke
b) En skive grovbroed`,
      solution: `**Loesning:**

a) **Ein Broetchen, bitte.**

b) **Eine Scheibe Vollkornbrot, bitte.**`,
    },
    {
      id: 'tysk-1-5-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-5-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva er dette paa tysk?',
        subTasks: [
          { label: 'a', task: 'eplestrudel', solution: 'der Apfelstrudel' },
          { label: 'b', task: 'rugbroed', solution: 'das Roggenbrot' },
          { label: 'c', task: 'blaakake', solution: 'die Torte' },
        ],
        solution: 'a) der Apfelstrudel, b) das Roggenbrot, c) die Torte',
        hints: ['Apfel = eple, Roggen = rug'],
      },
    },
    {
      id: 'tysk-1-5-4-note-1',
      type: 'note',
      content: `**Visste du?**

- Oktoberfest i Muenchen er verdens stoerste oelfestival
- Currywurst ble oppfunnet i Berlin i 1949
- Det tyske ordet "Abendbrot" (kveldsbroed) viser hvor viktig broed er i Tyskland
- Frokosten kalles "Fruehstueck" (tidlig stykke)`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: HJEM OG BOLIG
// ============================================================================

// ----------------------------------------------------------------------------
// 6.1 Das Haus - Huset
// ----------------------------------------------------------------------------

export const CHAPTER_TYSK_1_6_1: TextbookChapter = {
  id: 'tysk-1-6-1',
  courseId: 'tysk-1',
  chapterNumber: '6.1',
  title: 'Das Haus',
  subtitle: 'Huset',
  description: 'Laer om rommene i et hus.',
  estimatedMinutes: 45,
  competenceGoals: [
    'navngi rom i et hus',
    'beskrive hvor ting er',
  ],
  content: [
    {
      id: 'tysk-1-6-1-intro',
      type: 'text',
      content: `## Rommene i huset

Et hus har mange rom. Her er de viktigste:

| Tysk | Norsk |
|------|-------|
| das Haus | huset |
| die Wohnung | leiligheten |
| das Zimmer | rommet |
| der Raum | rommet |`,
    },
    {
      id: 'tysk-1-6-1-text-1',
      type: 'text',
      content: `## Rommene

| Tysk | Norsk |
|------|-------|
| die Kueche | kjoekkenet |
| das Wohnzimmer | stua |
| das Schlafzimmer | soverommet |
| das Badezimmer / das Bad | badet |
| das Kinderzimmer | barnerommet |
| das Esszimmer | spisestua |
| das Arbeitszimmer | kontoret |
| der Flur | gangen |
| der Keller | kjelleren |
| der Dachboden | loftet |
| die Garage | garasjen |
| der Garten | hagen |`,
    },
    {
      id: 'tysk-1-6-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Rommene',
      problem: `Si paa tysk:

a) kjoekkenet
b) stua
c) soverommet`,
      solution: `**Loesning:**

a) **die Kueche**

b) **das Wohnzimmer**

c) **das Schlafzimmer**`,
    },
    {
      id: 'tysk-1-6-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-6-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv paa tysk:',
        subTasks: [
          { label: 'a', task: 'badet', solution: 'das Badezimmer / das Bad' },
          { label: 'b', task: 'hagen', solution: 'der Garten' },
          { label: 'c', task: 'kjelleren', solution: 'der Keller' },
          { label: 'd', task: 'gangen', solution: 'der Flur' },
        ],
        solution: 'a) das Badezimmer, b) der Garten, c) der Keller, d) der Flur',
        hints: ['Zimmer = rom', 'Bad = bad'],
      },
    },
    {
      id: 'tysk-1-6-1-text-2',
      type: 'text',
      content: `## Beskrive huset

| Tysk | Norsk |
|------|-------|
| gross | stort |
| klein | lite |
| hell | lyst |
| dunkel | moerkt |
| gemuetlich | koselig |
| modern | moderne |
| alt | gammelt |
| neu | nytt |

**Setningsmal:**
- Das Haus ist gross. (Huset er stort.)
- Die Kueche ist modern. (Kjoekkenet er moderne.)`,
    },
    {
      id: 'tysk-1-6-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Beskrive rom',
      problem: `Oversett til tysk:

a) Stua er stor.
b) Badet er lite.
c) Kjoekkenet er moderne.`,
      solution: `**Loesning:**

a) **Das Wohnzimmer ist gross.**

b) **Das Badezimmer ist klein.**

c) **Die Kueche ist modern.**`,
    },
    {
      id: 'tysk-1-6-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-6-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Hagen er stor.', solution: 'Der Garten ist gross.' },
          { label: 'b', task: 'Soverommet er koselig.', solution: 'Das Schlafzimmer ist gemuetlich.' },
          { label: 'c', task: 'Huset er gammelt.', solution: 'Das Haus ist alt.' },
        ],
        solution: 'a) Der Garten ist gross. b) Das Schlafzimmer ist gemuetlich. c) Das Haus ist alt.',
        hints: ['Husk riktig artikkel', 'ist = er'],
      },
    },
    {
      id: 'tysk-1-6-1-text-3',
      type: 'text',
      content: `## Hvor er...?

| Tysk | Norsk |
|------|-------|
| Wo ist...? | Hvor er...? |
| im Erdgeschoss | i foerste etasje |
| im ersten Stock | i andre etasje |
| im zweiten Stock | i tredje etasje |
| oben | oppe |
| unten | nede |
| links | til venstre |
| rechts | til hoeyre |`,
    },
    {
      id: 'tysk-1-6-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Hvor er rommet?',
      problem: `Si paa tysk:

a) Kjoekkenet er i foerste etasje.
b) Soverommet er oppe.`,
      solution: `**Loesning:**

a) **Die Kueche ist im Erdgeschoss.**

b) **Das Schlafzimmer ist oben.**`,
    },
    {
      id: 'tysk-1-6-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-6-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Hvor er badet?', solution: 'Wo ist das Bad?' },
          { label: 'b', task: 'Badet er oppe.', solution: 'Das Bad ist oben.' },
          { label: 'c', task: 'Stua er til venstre.', solution: 'Das Wohnzimmer ist links.' },
        ],
        solution: 'a) Wo ist das Bad? b) Das Bad ist oben. c) Das Wohnzimmer ist links.',
        hints: ['wo = hvor', 'oben = oppe'],
      },
    },
    {
      id: 'tysk-1-6-1-tip-1',
      type: 'tip',
      content: `**Huskeregel for etasjer:**

- **Erdgeschoss** = foerste etasje (bakkenivaa)
- **erster Stock** = andre etasje
- **zweiter Stock** = tredje etasje

I Tyskland teller man annerledes - det vi kaller foerste etasje er "Erdgeschoss" (bakke-etasje).`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 6.2 Die Moebel - Moeblene
// ----------------------------------------------------------------------------

export const CHAPTER_TYSK_1_6_2: TextbookChapter = {
  id: 'tysk-1-6-2',
  courseId: 'tysk-1',
  chapterNumber: '6.2',
  title: 'Die Moebel',
  subtitle: 'Moeblene',
  description: 'Laer navnene paa moebler paa tysk.',
  estimatedMinutes: 40,
  competenceGoals: [
    'navngi vanlige moebler',
    'beskrive hvor moebler staar',
  ],
content: [
    {
      id: 'tysk-1-6-2-intro',
      type: 'text',
      content: `## Moebler i hjemmet

Her er de vanligste moeblene:

**I stua (im Wohnzimmer):**

| Tysk | Norsk |
|------|-------|
| das Sofa | sofaen |
| der Sessel | lenestolen |
| der Tisch | bordet |
| der Couchtisch | sofabordet |
| der Fernseher | TVen |
| das Regal | hylla |
| die Lampe | lampa |`,
    },
    {
      id: 'tysk-1-6-2-text-1',
      type: 'text',
      content: `## Flere moebler

**I soverommet (im Schlafzimmer):**

| Tysk | Norsk |
|------|-------|
| das Bett | senga |
| der Schrank | skapet |
| der Kleiderschrank | klesskapet |
| die Kommode | kommoden |
| der Nachttisch | nattbordet |
| der Spiegel | speilet |

**I kjoekkenet (in der Kueche):**

| Tysk | Norsk |
|------|-------|
| der Kuehlschrank | kjoeleskapet |
| der Herd | komfyren |
| die Spuele | vasken |
| der Esstisch | spisebordet |
| der Stuhl | stolen |`,
    },
    {
      id: 'tysk-1-6-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Moebler',
      problem: `Si paa tysk:

a) sofa
b) seng
c) bord`,
      solution: `**Loesning:**

a) **das Sofa**

b) **das Bett**

c) **der Tisch**`,
    },
    {
      id: 'tysk-1-6-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-6-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv paa tysk med artikkel:',
        subTasks: [
          { label: 'a', task: 'stol', solution: 'der Stuhl' },
          { label: 'b', task: 'skap', solution: 'der Schrank' },
          { label: 'c', task: 'lampe', solution: 'die Lampe' },
          { label: 'd', task: 'kjoeleskap', solution: 'der Kuehlschrank' },
        ],
        solution: 'a) der Stuhl, b) der Schrank, c) die Lampe, d) der Kuehlschrank',
        hints: ['Schrank = skap', 'Stuhl = stol'],
      },
    },
    {
      id: 'tysk-1-6-2-text-2',
      type: 'text',
      content: `## Posisjonsord

For aa si hvor moebler staar:

| Tysk | Norsk |
|------|-------|
| auf | paa |
| unter | under |
| neben | ved siden av |
| vor | foran |
| hinter | bak |
| zwischen | mellom |
| in | i |
| an | paa/ved |`,
    },
    {
      id: 'tysk-1-6-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Hvor staar moeblene?',
      problem: `Si paa tysk:

a) Lampa staar paa bordet.
b) Stolen staar ved siden av sofaen.`,
      solution: `**Loesning:**

a) **Die Lampe steht auf dem Tisch.**

b) **Der Stuhl steht neben dem Sofa.**`,
    },
    {
      id: 'tysk-1-6-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-6-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'TVen staar foran sofaen.', solution: 'Der Fernseher steht vor dem Sofa.' },
          { label: 'b', task: 'Senga staar i soverommet.', solution: 'Das Bett steht im Schlafzimmer.' },
          { label: 'c', task: 'Speilet henger paa veggen.', solution: 'Der Spiegel haengt an der Wand.' },
        ],
        solution: 'a) Der Fernseher steht vor dem Sofa. b) Das Bett steht im Schlafzimmer. c) Der Spiegel haengt an der Wand.',
        hints: ['stehen = staa', 'haengen = henge'],
      },
    },
    {
      id: 'tysk-1-6-2-text-3',
      type: 'text',
      content: `## Flere ting i hjemmet

| Tysk | Norsk |
|------|-------|
| der Teppich | teppet |
| das Bild | bildet |
| die Gardine | gardinen |
| das Kissen | puta |
| die Decke | dyna/teppet |
| die Pflanze | planten |
| die Uhr | klokka |
| die Vase | vasen |`,
    },
    {
      id: 'tysk-1-6-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Beskrive et rom',
      problem: `Beskriv stua paa tysk med minst 3 moebler.`,
      solution: `**Eksempel paa loesning:**

Im Wohnzimmer steht ein grosses Sofa. Vor dem Sofa steht ein Couchtisch. An der Wand haengt ein Fernseher. Neben dem Sofa steht eine Lampe.

(I stua staar en stor sofa. Foran sofaen staar et sofabord. Paa veggen henger en TV. Ved siden av sofaen staar en lampe.)`,
    },
    {
      id: 'tysk-1-6-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-6-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Match moebelet med rommet:',
        subTasks: [
          { label: 'a', task: 'das Bett', solution: 'das Schlafzimmer' },
          { label: 'b', task: 'der Kuehlschrank', solution: 'die Kueche' },
          { label: 'c', task: 'das Sofa', solution: 'das Wohnzimmer' },
        ],
        solution: 'a) das Schlafzimmer, b) die Kueche, c) das Wohnzimmer',
        hints: ['Bett = seng, Kuehlschrank = kjoeleskap, Sofa = sofa'],
      },
    },
    {
      id: 'tysk-1-6-2-tip-1',
      type: 'tip',
      content: `**Stehen vs. liegen vs. haengen:**

- **stehen** (staa) - for moebler som staar paa gulvet: Der Stuhl steht.
- **liegen** (ligge) - for ting som ligger: Das Buch liegt auf dem Tisch.
- **haengen** (henge) - for ting som henger: Das Bild haengt an der Wand.`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 6.3 Mein Zimmer - Rommet mitt
// ----------------------------------------------------------------------------

export const CHAPTER_TYSK_1_6_3: TextbookChapter = {
  id: 'tysk-1-6-3',
  courseId: 'tysk-1',
  chapterNumber: '6.3',
  title: 'Mein Zimmer',
  subtitle: 'Rommet mitt',
  description: 'Laer aa beskrive ditt eget rom.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive sitt eget rom',
    'fortelle om ting man har',
  ],
  content: [
    {
      id: 'tysk-1-6-3-intro',
      type: 'text',
      content: `## Beskrive rommet ditt

Naar du skal beskrive rommet ditt, kan du fortelle om:
- Stoerrelsen (gross/klein)
- Fargene
- Moeblene
- Hva du gjoer der

**Nyttige uttrykk:**

| Tysk | Norsk |
|------|-------|
| Mein Zimmer ist... | Rommet mitt er... |
| In meinem Zimmer gibt es... | I rommet mitt er det... |
| Ich habe... | Jeg har... |
| An der Wand | Paa veggen |
| Auf dem Boden | Paa gulvet |`,
    },
    {
      id: 'tysk-1-6-3-text-1',
      type: 'text',
      content: `## Ting paa rommet

| Tysk | Norsk |
|------|-------|
| der Schreibtisch | skrivebordet |
| der Computer | datamaskinen |
| der Laptop | laptopen |
| das Poster | plakaten |
| das Buecherregal | bokhylla |
| die Buecher | boekene |
| die Spielsachen | lekene |
| das Bild | bildet |
| die Pflanze | planten |`,
    },
    {
      id: 'tysk-1-6-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Beskrive rommet',
      problem: `Si paa tysk:

a) Rommet mitt er stort.
b) Jeg har en datamaskin.
c) Paa veggen henger en plakat.`,
      solution: `**Loesning:**

a) **Mein Zimmer ist gross.**

b) **Ich habe einen Computer.**

c) **An der Wand haengt ein Poster.**`,
    },
    {
      id: 'tysk-1-6-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-6-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Rommet mitt er lite.', solution: 'Mein Zimmer ist klein.' },
          { label: 'b', task: 'Jeg har et skrivebord.', solution: 'Ich habe einen Schreibtisch.' },
          { label: 'c', task: 'Senga mi er stor.', solution: 'Mein Bett ist gross.' },
        ],
        solution: 'a) Mein Zimmer ist klein. b) Ich habe einen Schreibtisch. c) Mein Bett ist gross.',
        hints: ['mein = min/mitt', 'Zimmer er inkjekoenn'],
      },
    },
    {
      id: 'tysk-1-6-3-text-2',
      type: 'text',
      content: `## Farger paa rommet

| Tysk | Norsk |
|------|-------|
| Die Waende sind... | Veggene er... |
| Der Teppich ist... | Teppet er... |
| Die Moebel sind... | Moeblene er... |

**Farger:**
weiss (hvit), schwarz (svart), blau (blaa), gruen (groenn), rot (roed), gelb (gul), braun (brun), grau (graa), rosa (rosa), lila (lilla)`,
    },
    {
      id: 'tysk-1-6-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Farger',
      problem: `Si paa tysk:

a) Veggene er hvite.
b) Teppet er blaatt.`,
      solution: `**Loesning:**

a) **Die Waende sind weiss.**

b) **Der Teppich ist blau.**`,
    },
    {
      id: 'tysk-1-6-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-6-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Veggene er blaa.', solution: 'Die Waende sind blau.' },
          { label: 'b', task: 'Skrivebordet er hvitt.', solution: 'Der Schreibtisch ist weiss.' },
          { label: 'c', task: 'Stolen er brun.', solution: 'Der Stuhl ist braun.' },
        ],
        solution: 'a) Die Waende sind blau. b) Der Schreibtisch ist weiss. c) Der Stuhl ist braun.',
        hints: ['Waende er flertall', 'Fargen boeyes ikke etter "ist"'],
      },
    },
    {
      id: 'tysk-1-6-3-text-3',
      type: 'text',
      content: `## Hva gjoer du paa rommet?

| Tysk | Norsk |
|------|-------|
| Ich schlafe. | Jeg sover. |
| Ich lerne. | Jeg gjoer lekser. |
| Ich lese. | Jeg leser. |
| Ich spiele. | Jeg leker/spiller. |
| Ich hoere Musik. | Jeg hoerer paa musikk. |
| Ich entspanne mich. | Jeg slapper av. |`,
    },
    {
      id: 'tysk-1-6-3-example-3',
      type: 'example',
      title: 'Eksempel 3: En beskrivelse av rommet',
      problem: `Skriv en kort beskrivelse av rommet ditt paa tysk (minst 4 setninger).`,
      solution: `**Eksempel paa loesning:**

Mein Zimmer ist nicht sehr gross, aber gemuetlich. Die Waende sind hellblau. In meinem Zimmer steht ein Bett und ein Schreibtisch. An der Wand haengen viele Poster. Ich habe auch ein Buecherregal mit vielen Buechern. Auf meinem Zimmer mache ich Hausaufgaben und hoere Musik.

(Rommet mitt er ikke veldig stort, men koselig. Veggene er lyseblaa. I rommet mitt staar en seng og et skrivebord. Paa veggen henger mange plakater. Jeg har ogsaa en bokhylle med mange boeker. Paa rommet mitt gjoer jeg lekser og hoerer paa musikk.)`,
    },
    {
      id: 'tysk-1-6-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-6-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'I rommet mitt er det en seng.', solution: 'In meinem Zimmer gibt es ein Bett.' },
          { label: 'b', task: 'Paa rommet mitt leser jeg boeker.', solution: 'Auf meinem Zimmer lese ich Buecher.' },
          { label: 'c', task: 'Rommet mitt er koselig.', solution: 'Mein Zimmer ist gemuetlich.' },
        ],
        solution: 'a) In meinem Zimmer gibt es ein Bett. b) Auf meinem Zimmer lese ich Buecher. c) Mein Zimmer ist gemuetlich.',
        hints: ['es gibt = det er/finnes', 'in meinem Zimmer = i rommet mitt'],
      },
    },
    {
      id: 'tysk-1-6-3-tip-1',
      type: 'tip',
      content: `**Tips for aa beskrive rommet:**

1. Start med stoerrelse og form
2. Nevn fargene paa vegger og moebler
3. Beskriv hvor moeblene staar
4. Fortell hva du gjoer paa rommet
5. Si hva du liker best med rommet`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 6.4 Wohnen in Deutschland - Bo i Tyskland
// ----------------------------------------------------------------------------

export const CHAPTER_TYSK_1_6_4: TextbookChapter = {
  id: 'tysk-1-6-4',
  courseId: 'tysk-1',
  chapterNumber: '6.4',
  title: 'Wohnen in Deutschland',
  subtitle: 'Bo i Tyskland',
  description: 'Laer om hvordan folk bor i Tyskland.',
  estimatedMinutes: 40,
  competenceGoals: [
    'kjenne til boformer i Tyskland',
    'snakke om hvor man bor',
  ],
  content: [
    {
      id: 'tysk-1-6-4-intro',
      type: 'text',
      content: `## Boformer i Tyskland

I Tyskland bor folk paa ulike maater:

| Tysk | Norsk |
|------|-------|
| das Einfamilienhaus | enebolig |
| das Reihenhaus | rekkehus |
| das Mehrfamilienhaus | fleretasjes boligbygg |
| die Wohnung | leiligheten |
| das Apartment | leiligheten (liten) |
| die WG (Wohngemeinschaft) | kollektiv |`,
    },
    {
      id: 'tysk-1-6-4-text-1',
      type: 'text',
      content: `## Snakke om hvor du bor

| Tysk | Norsk |
|------|-------|
| Wo wohnst du? | Hvor bor du? |
| Ich wohne in... | Jeg bor i... |
| Ich wohne in einer Wohnung. | Jeg bor i en leilighet. |
| Ich wohne in einem Haus. | Jeg bor i et hus. |
| Ich wohne bei meinen Eltern. | Jeg bor hos foreldrene mine. |
| Ich wohne allein. | Jeg bor alene. |
| Ich wohne mit meiner Familie. | Jeg bor med familien min. |`,
    },
    {
      id: 'tysk-1-6-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Hvor bor du?',
      problem: `Si paa tysk:

a) Jeg bor i Oslo.
b) Jeg bor i et hus.
c) Jeg bor med familien min.`,
      solution: `**Loesning:**

a) **Ich wohne in Oslo.**

b) **Ich wohne in einem Haus.**

c) **Ich wohne mit meiner Familie.**`,
    },
    {
      id: 'tysk-1-6-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-6-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Jeg bor i en leilighet.', solution: 'Ich wohne in einer Wohnung.' },
          { label: 'b', task: 'Hvor bor du?', solution: 'Wo wohnst du?' },
          { label: 'c', task: 'Han bor i Berlin.', solution: 'Er wohnt in Berlin.' },
        ],
        solution: 'a) Ich wohne in einer Wohnung. b) Wo wohnst du? c) Er wohnt in Berlin.',
        hints: ['wohnen = bo', 'in einer Wohnung = i en leilighet'],
      },
    },
    {
      id: 'tysk-1-6-4-text-2',
      type: 'text',
      content: `## Beskrive boligen

| Tysk | Norsk |
|------|-------|
| Die Wohnung hat... Zimmer. | Leiligheten har... rom. |
| Die Miete ist... Euro. | Husleien er... euro. |
| Das Haus hat einen Garten. | Huset har en hage. |
| Die Wohnung ist zentral. | Leiligheten ligger sentralt. |
| Die Wohnung ist ruhig. | Leiligheten er rolig. |
| Es gibt einen Balkon. | Det er en balkong. |
| Es gibt einen Aufzug. | Det er heis. |`,
    },
    {
      id: 'tysk-1-6-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Beskrive boligen',
      problem: `Si paa tysk:

a) Leiligheten har 4 rom.
b) Det er en balkong.
c) Huset har en hage.`,
      solution: `**Loesning:**

a) **Die Wohnung hat vier Zimmer.**

b) **Es gibt einen Balkon.**

c) **Das Haus hat einen Garten.**`,
    },
    {
      id: 'tysk-1-6-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-6-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Leiligheten er stor.', solution: 'Die Wohnung ist gross.' },
          { label: 'b', task: 'Det er heis.', solution: 'Es gibt einen Aufzug.' },
          { label: 'c', task: 'Leiligheten ligger sentralt.', solution: 'Die Wohnung ist zentral.' },
        ],
        solution: 'a) Die Wohnung ist gross. b) Es gibt einen Aufzug. c) Die Wohnung ist zentral.',
        hints: ['es gibt = det er/finnes', 'Aufzug = heis'],
      },
    },
    {
      id: 'tysk-1-6-4-text-3',
      type: 'text',
      content: `## Byer og omraader

| Tysk | Norsk |
|------|-------|
| in der Stadt | i byen |
| auf dem Land | paa landet |
| in der Naehe von... | i naerheten av... |
| im Zentrum | i sentrum |
| am Stadtrand | i utkanten av byen |
| in einem Vorort | i en forstad |`,
    },
    {
      id: 'tysk-1-6-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Hvor ligger boligen?',
      problem: `Si paa tysk:

a) Jeg bor i byen.
b) Vi bor paa landet.
c) Huset ligger i naerheten av skolen.`,
      solution: `**Loesning:**

a) **Ich wohne in der Stadt.**

b) **Wir wohnen auf dem Land.**

c) **Das Haus liegt in der Naehe von der Schule.**`,
    },
    {
      id: 'tysk-1-6-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-6-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Jeg bor i sentrum.', solution: 'Ich wohne im Zentrum.' },
          { label: 'b', task: 'De bor paa landet.', solution: 'Sie wohnen auf dem Land.' },
          { label: 'c', task: 'Leiligheten er i utkanten av byen.', solution: 'Die Wohnung ist am Stadtrand.' },
        ],
        solution: 'a) Ich wohne im Zentrum. b) Sie wohnen auf dem Land. c) Die Wohnung ist am Stadtrand.',
        hints: ['im = in dem', 'auf dem Land = paa landet'],
      },
    },
    {
      id: 'tysk-1-6-4-note-1',
      type: 'note',
      content: `**Visste du?**

- I Tyskland leier over 50% av befolkningen bolig (i Norge eier de fleste)
- "WG" (Wohngemeinschaft) er vanlig blant studenter - flere deler en leilighet
- Mange tyske hus har kjeller (Keller) som brukes som ekstra rom
- Balkonger og terrasser er veldig populaere i Tyskland`,
    },
    {
      id: 'tysk-1-6-4-tip-1',
      type: 'tip',
      content: `**Nyttige ord for boligannonser:**

| Tysk | Norsk |
|------|-------|
| die Miete | husleien |
| die Nebenkosten | tilleggsutgifter |
| moebliert | moelert |
| unmoebliert | umoelert |
| ab sofort | fra med en gang |
| die Kaution | depositum |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORTER ALLE KAPITLER
// ============================================================================

export const TYSK_1_CHAPTERS_4_6: TextbookChapter[] = [
  CHAPTER_TYSK_1_4_1,
  CHAPTER_TYSK_1_4_2,
  CHAPTER_TYSK_1_4_3,
  CHAPTER_TYSK_1_4_4,
  CHAPTER_TYSK_1_5_1,
  CHAPTER_TYSK_1_5_2,
  CHAPTER_TYSK_1_5_3,
  CHAPTER_TYSK_1_5_4,
  CHAPTER_TYSK_1_6_1,
  CHAPTER_TYSK_1_6_2,
  CHAPTER_TYSK_1_6_3,
  CHAPTER_TYSK_1_6_4,
];
