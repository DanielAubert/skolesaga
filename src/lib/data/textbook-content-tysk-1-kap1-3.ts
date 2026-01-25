/* eslint-disable */
// @ts-nocheck
/**
 * Tysk nivå 1 - Tekstbokinnhold kapittel 1-3
 *
 * Dekker LK20 lareplan for fremmedsprak niva 1
 * Struktur: teori -> eksempel -> oppgave (gjentatt)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Hallo! - Hilsener
// ============================================================================

export const CHAPTER_TYSK_1_1_1: TextbookChapter = {
  id: 'tysk-1-1-1',
  courseId: 'tysk-1',
  chapterNumber: '1.1',
  title: 'Hallo! - Hilsener',
  description: 'Grunnleggende hilsener og hoflighetsfraser pa tysk.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke enkle hilsener og hoflighetsuttrykk',
  ],
  content: [
    {
      id: 'tysk-1-1-1-intro',
      type: 'text',
      content: `## Hilsener pa tysk

Tysk er morsmalet til over 100 millioner mennesker i Europa og er et viktig sprak i handel, vitenskap og kultur. La oss starte med de viktigste hilsenene!

I tysktalende land er hilsener viktige for a vise hoflighet og respekt. Det er forskjell pa formelle og uformelle hilsener, akkurat som pa norsk.`,
    },
    {
      id: 'tysk-1-1-1-text-1',
      type: 'text',
      content: `**Grunnleggende hilsener**

| Tysk | Norsk |
|------|-------|
| Hallo | Hei |
| Guten Tag | God dag |
| Guten Morgen | God morgen |
| Guten Abend | God kveld |
| Gute Nacht | God natt |`,
    },
    {
      id: 'tysk-1-1-1-def-1',
      type: 'definition',
      title: 'Formell vs. uformell',
      content: `Pa tysk skiller man mellom formell (Sie) og uformell (du) tiltale:
- **Du**: Brukes med venner, familie og jevnaldrende
- **Sie**: Brukes med voksne du ikke kjenner, laerere, i butikker osv.

Nar du bruker "Sie", skrives det alltid med stor forbokstav!`,
    },
    {
      id: 'tysk-1-1-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Hilsener gjennom dagen',
      problem: `Oversett til tysk:
a) God morgen
b) God dag
c) God kveld`,
      solution: `a) Guten Morgen
b) Guten Tag
c) Guten Abend

**Huskeregel**: "Guten" betyr "god" og brukes med Morgen, Tag og Abend.`,
    },
    {
      id: 'tysk-1-1-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-1-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett folgende hilsener til tysk:',
        subTasks: [
          { label: 'a', task: 'Hei', solution: 'Hallo' },
          { label: 'b', task: 'God dag', solution: 'Guten Tag' },
          { label: 'c', task: 'God morgen', solution: 'Guten Morgen' },
        ],
        solution: 'a) Hallo\nb) Guten Tag\nc) Guten Morgen',
        hints: ['Se tabellen med grunnleggende hilsener'],
      },
    },
    {
      id: 'tysk-1-1-1-text-2',
      type: 'text',
      content: `**Avskjedshilsener**

| Tysk | Norsk |
|------|-------|
| Tschuss | Ha det (uformelt) |
| Auf Wiedersehen | Pa gjensyn (formelt) |
| Bis bald | Vi sees snart |
| Bis morgen | Vi sees i morgen |
| Bis spater | Vi sees senere |`,
    },
    {
      id: 'tysk-1-1-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Formell vs. uformell avskjed',
      problem: `Hvilken avskjedshilsen passer best?
a) Til en venn: ___
b) Til en larer: ___`,
      solution: `a) Til en venn: **Tschuss** eller **Bis bald**
b) Til en larer: **Auf Wiedersehen**

"Tschuss" er uformelt og brukes med venner. "Auf Wiedersehen" er formelt og mer hoflig.`,
    },
    {
      id: 'tysk-1-1-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-1-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett folgende avskjedshilsener til tysk:',
        subTasks: [
          { label: 'a', task: 'Ha det', solution: 'Tschuss' },
          { label: 'b', task: 'Pa gjensyn', solution: 'Auf Wiedersehen' },
          { label: 'c', task: 'Vi sees i morgen', solution: 'Bis morgen' },
        ],
        solution: 'a) Tschuss\nb) Auf Wiedersehen\nc) Bis morgen',
        hints: ['Se tabellen med avskjedshilsener'],
      },
    },
    {
      id: 'tysk-1-1-1-text-3',
      type: 'text',
      content: `**Hoflighetsuttrykk**

| Tysk | Norsk |
|------|-------|
| Bitte | Vaer sa snill / Takk |
| Danke | Takk |
| Danke schon | Mange takk |
| Vielen Dank | Tusen takk |
| Bitte schon | Vaer sa god / Ingen arsak |
| Entschuldigung | Unnskyld |`,
    },
    {
      id: 'tysk-1-1-1-tip-1',
      type: 'tip',
      content: `"Bitte" er et magisk ord pa tysk! Det betyr bade "vaer sa snill" (nar du ber om noe) og "vaer sa god" (nar du gir noe til noen).`,
    },
    {
      id: 'tysk-1-1-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Takk og svar',
      problem: `Hva svarer du nar noen sier "Danke"?`,
      solution: `Du kan svare:
- **Bitte** (Vaer sa god)
- **Bitte schon** (Ingen arsak)
- **Gern geschehen** (Det var hyggelig a hjelpe)`,
    },
    {
      id: 'tysk-1-1-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-1-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett folgende hoflighetsuttrykk til tysk:',
        subTasks: [
          { label: 'a', task: 'Takk', solution: 'Danke' },
          { label: 'b', task: 'Unnskyld', solution: 'Entschuldigung' },
          { label: 'c', task: 'Tusen takk', solution: 'Vielen Dank' },
          { label: 'd', task: 'Vaer sa snill', solution: 'Bitte' },
        ],
        solution: 'a) Danke\nb) Entschuldigung\nc) Vielen Dank\nd) Bitte',
        hints: ['Husk at "Bitte" har flere betydninger'],
      },
    },
    {
      id: 'tysk-1-1-1-note-1',
      type: 'note',
      content: `**Regionale hilsener**: I Sor-Tyskland, Osterrike og Sveits horer du ofte "Gruss Gott" (formal) eller "Servus" (uformell). I Nord-Tyskland brukes "Moin" mye.`,
    },
    {
      id: 'tysk-1-1-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-1-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg riktig hilsen for hver situasjon:',
        subTasks: [
          { label: 'a', task: 'Du moter en venn pa skolen om morgenen', solution: 'Hallo eller Guten Morgen' },
          { label: 'b', task: 'Du gar inn i en butikk', solution: 'Guten Tag' },
          { label: 'c', task: 'Du sier ha det til vennen din', solution: 'Tschuss' },
          { label: 'd', task: 'Du sier ha det til laereren', solution: 'Auf Wiedersehen' },
        ],
        solution: 'a) Hallo/Guten Morgen\nb) Guten Tag\nc) Tschuss\nd) Auf Wiedersehen',
        hints: ['Tenk pa om situasjonen er formell eller uformell'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.2: Ich heisse... - Presentasjon
// ============================================================================

export const CHAPTER_TYSK_1_1_2: TextbookChapter = {
  id: 'tysk-1-1-2',
  courseId: 'tysk-1',
  chapterNumber: '1.2',
  title: 'Ich heisse... - Presentasjon',
  description: 'Laer a presentere deg selv med navn og verbene sein og heissen.',
  estimatedMinutes: 45,
  competenceGoals: [
    'presentere seg selv og andre',
    'bruke grunnleggende verb i presens',
  ],
  content: [
    {
      id: 'tysk-1-1-2-intro',
      type: 'text',
      content: `## Presentere seg selv

A kunne presentere seg er grunnleggende i ethvert sprak. Pa tysk bruker vi verbene **heissen** (a hete) og **sein** (a vaere) for a fortelle hvem vi er.`,
    },
    {
      id: 'tysk-1-1-2-text-1',
      type: 'text',
      content: `**Presentere seg selv**

| Tysk | Norsk |
|------|-------|
| Ich heisse... | Jeg heter... |
| Ich bin... | Jeg er... |
| Mein Name ist... | Navnet mitt er... |`,
    },
    {
      id: 'tysk-1-1-2-def-1',
      type: 'definition',
      title: 'Verbet "sein" (a vaere)',
      content: `**Sein** er et uregelmessig verb og ma laeres utenat:

| Person | Tysk | Norsk |
|--------|------|-------|
| ich | bin | jeg er |
| du | bist | du er |
| er/sie/es | ist | han/hun/det er |
| wir | sind | vi er |
| ihr | seid | dere er |
| sie/Sie | sind | de er / De er |`,
    },
    {
      id: 'tysk-1-1-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Presentasjon med sein',
      problem: `Fullfar setningene med riktig form av "sein":
a) Ich ___ Anna.
b) Du ___ Max.
c) Er ___ Lehrer.`,
      solution: `a) Ich **bin** Anna. (Jeg er Anna.)
b) Du **bist** Max. (Du er Max.)
c) Er **ist** Lehrer. (Han er laerer.)`,
    },
    {
      id: 'tysk-1-1-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-1-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av verbet "sein":',
        subTasks: [
          { label: 'a', task: 'Ich ___ Erik.', solution: 'bin' },
          { label: 'b', task: 'Du ___ nett.', solution: 'bist' },
          { label: 'c', task: 'Sie ___ Maria.', solution: 'ist' },
          { label: 'd', task: 'Wir ___ Freunde.', solution: 'sind' },
        ],
        solution: 'a) bin\nb) bist\nc) ist\nd) sind',
        hints: ['Se tabellen over baying av sein'],
      },
    },
    {
      id: 'tysk-1-1-2-def-2',
      type: 'definition',
      title: 'Verbet "heissen" (a hete)',
      content: `**Heissen** folger et mer regelmessig monster:

| Person | Tysk | Norsk |
|--------|------|-------|
| ich | heisse | jeg heter |
| du | heisst | du heter |
| er/sie/es | heisst | han/hun/det heter |
| wir | heissen | vi heter |
| ihr | heisst | dere heter |
| sie/Sie | heissen | de heter / De heter |`,
    },
    {
      id: 'tysk-1-1-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Sporsmaal og svar',
      problem: `Lag en kort dialog der du spor om navn og svarer:`,
      solution: `**Dialog:**
- A: Hallo! Wie heisst du? (Hei! Hva heter du?)
- B: Ich heisse Maria. Und du? (Jeg heter Maria. Og du?)
- A: Ich heisse Thomas. (Jeg heter Thomas.)`,
    },
    {
      id: 'tysk-1-1-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-1-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Jeg heter...', solution: 'Ich heisse...' },
          { label: 'b', task: 'Hva heter du?', solution: 'Wie heisst du?' },
          { label: 'c', task: 'Hun heter Sara.', solution: 'Sie heisst Sara.' },
        ],
        solution: 'a) Ich heisse...\nb) Wie heisst du?\nc) Sie heisst Sara.',
        hints: ['Bruk verbet heissen'],
      },
    },
    {
      id: 'tysk-1-1-2-text-2',
      type: 'text',
      content: `**Sporre om andres navn**

| Tysk | Norsk |
|------|-------|
| Wie heisst du? | Hva heter du? (uformelt) |
| Wie heissen Sie? | Hva heter De? (formelt) |
| Wer bist du? | Hvem er du? |
| Und du? | Og du? |`,
    },
    {
      id: 'tysk-1-1-2-tip-1',
      type: 'tip',
      content: `Pa tysk kan du bruke bade "Ich heisse..." og "Ich bin..." for a presentere deg. "Mein Name ist..." er litt mer formelt.`,
    },
    {
      id: 'tysk-1-1-2-example-3',
      type: 'example',
      title: 'Eksempel 3: En fullstendig presentasjon',
      problem: `Skriv en kort presentasjon pa tysk:`,
      solution: `**Eksempel:**
Hallo! Ich heisse Lisa. Ich bin 16 Jahre alt. Ich bin Schulerin.

(Hei! Jeg heter Lisa. Jeg er 16 ar gammel. Jeg er elev.)`,
    },
    {
      id: 'tysk-1-1-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-1-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig form av verbet (sein eller heissen):',
        subTasks: [
          { label: 'a', task: 'Wie ___ du? (hete)', solution: 'heisst' },
          { label: 'b', task: 'Ich ___ Schuler. (vaere)', solution: 'bin' },
          { label: 'c', task: 'Er ___ Paul. (hete)', solution: 'heisst' },
          { label: 'd', task: 'Wir ___ aus Norwegen. (vaere)', solution: 'sind' },
        ],
        solution: 'a) heisst\nb) bin\nc) heisst\nd) sind',
        hints: ['Tenk pa hvilket verb som passer best i sammenhengen'],
      },
    },
    {
      id: 'tysk-1-1-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-1-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort presentasjon av deg selv pa tysk (3-4 setninger). Bruk ordene: heissen, sein, Jahre alt.',
        solution: 'Eksempel: Hallo! Ich heisse [navn]. Ich bin [alder] Jahre alt. Ich bin Schuler/Schulerin.',
        hints: ['Start med Hallo!', 'Bruk "Ich heisse..." for navnet', 'Bruk "Ich bin... Jahre alt" for alder'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.3: Woher kommst du? - Land og nasjonalitet
// ============================================================================

export const CHAPTER_TYSK_1_1_3: TextbookChapter = {
  id: 'tysk-1-1-3',
  courseId: 'tysk-1',
  chapterNumber: '1.3',
  title: 'Woher kommst du? - Land og nasjonalitet',
  description: 'Laer a fortelle hvor du kommer fra og snakke om nasjonalitet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'fortelle hvor man kommer fra',
    'bruke landnavn og nasjonaliteter',
  ],
  content: [
    {
      id: 'tysk-1-1-3-intro',
      type: 'text',
      content: `## Hvor kommer du fra?

Nar du moter nye mennesker, er det vanlig a sporre hvor de kommer fra. La oss laere hvordan vi snakker om land og nasjonalitet pa tysk!`,
    },
    {
      id: 'tysk-1-1-3-text-1',
      type: 'text',
      content: `**Viktige fraser**

| Tysk | Norsk |
|------|-------|
| Woher kommst du? | Hvor kommer du fra? (uformelt) |
| Woher kommen Sie? | Hvor kommer De fra? (formelt) |
| Ich komme aus... | Jeg kommer fra... |
| Ich wohne in... | Jeg bor i... |`,
    },
    {
      id: 'tysk-1-1-3-def-1',
      type: 'definition',
      title: 'Verbet "kommen" (a komme)',
      content: `**Kommen** er et regelmessig verb:

| Person | Tysk | Norsk |
|--------|------|-------|
| ich | komme | jeg kommer |
| du | kommst | du kommer |
| er/sie/es | kommt | han/hun/det kommer |
| wir | kommen | vi kommer |
| ihr | kommt | dere kommer |
| sie/Sie | kommen | de kommer / De kommer |`,
    },
    {
      id: 'tysk-1-1-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Sporre og svare',
      problem: `Lag en kort dialog om hvor man kommer fra:`,
      solution: `**Dialog:**
- A: Woher kommst du? (Hvor kommer du fra?)
- B: Ich komme aus Norwegen. Und du? (Jeg kommer fra Norge. Og du?)
- A: Ich komme aus Deutschland. (Jeg kommer fra Tyskland.)`,
    },
    {
      id: 'tysk-1-1-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-1-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av verbet "kommen":',
        subTasks: [
          { label: 'a', task: 'Ich ___ aus Norwegen.', solution: 'komme' },
          { label: 'b', task: 'Woher ___ du?', solution: 'kommst' },
          { label: 'c', task: 'Er ___ aus Deutschland.', solution: 'kommt' },
          { label: 'd', task: 'Wir ___ aus Schweden.', solution: 'kommen' },
        ],
        solution: 'a) komme\nb) kommst\nc) kommt\nd) kommen',
        hints: ['Se boyingstabellen for kommen'],
      },
    },
    {
      id: 'tysk-1-1-3-text-2',
      type: 'text',
      content: `**Land i Europa**

| Tysk | Norsk |
|------|-------|
| Deutschland | Tyskland |
| Norwegen | Norge |
| Schweden | Sverige |
| Danemark | Danmark |
| Finnland | Finland |
| Osterreich | Osterrike |
| die Schweiz | Sveits |
| Frankreich | Frankrike |
| England | England |
| Spanien | Spania |
| Italien | Italia |`,
    },
    {
      id: 'tysk-1-1-3-note-1',
      type: 'note',
      content: `De fleste land brukes uten artikkel: "Ich komme aus Deutschland". Men noen fa land har artikkel: "Ich komme aus **der Schweiz**" (Sveits), "Ich komme aus **den USA**" (USA).`,
    },
    {
      id: 'tysk-1-1-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Land og preposisjoner',
      problem: `Oversett til tysk:
a) Jeg kommer fra Norge.
b) Hun kommer fra Sveits.`,
      solution: `a) Ich komme aus Norwegen.
b) Sie kommt aus der Schweiz.

Merk at Sveits bruker artikkel "der" etter "aus".`,
    },
    {
      id: 'tysk-1-1-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-1-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett landnavnene til tysk:',
        subTasks: [
          { label: 'a', task: 'Norge', solution: 'Norwegen' },
          { label: 'b', task: 'Tyskland', solution: 'Deutschland' },
          { label: 'c', task: 'Sverige', solution: 'Schweden' },
          { label: 'd', task: 'Frankrike', solution: 'Frankreich' },
        ],
        solution: 'a) Norwegen\nb) Deutschland\nc) Schweden\nd) Frankreich',
        hints: ['Se tabellen over europeiske land'],
      },
    },
    {
      id: 'tysk-1-1-3-text-3',
      type: 'text',
      content: `**Nasjonaliteter**

| Mann | Kvinne | Norsk |
|------|--------|-------|
| Norweger | Norwegerin | nordmann/norsk |
| Deutscher | Deutsche | tysker/tysk |
| Schwede | Schwedin | svenske/svensk |
| Franzose | Franzosin | franskmann/fransk |
| Englander | Englanderin | engelskmann/engelsk |
| Spanier | Spanierin | spanjol/spansk |`,
    },
    {
      id: 'tysk-1-1-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Nasjonalitet',
      problem: `Fullfar setningene:
a) Erik kommt aus Norwegen. Er ist ___.
b) Anna kommt aus Deutschland. Sie ist ___.`,
      solution: `a) Erik kommt aus Norwegen. Er ist **Norweger**. (Han er nordmann.)
b) Anna kommt aus Deutschland. Sie ist **Deutsche**. (Hun er tysk.)`,
    },
    {
      id: 'tysk-1-1-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-1-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig nasjonalitet:',
        subTasks: [
          { label: 'a', task: 'Ich komme aus Norwegen. Ich bin ___ (mann).', solution: 'Norweger' },
          { label: 'b', task: 'Sie kommt aus Schweden. Sie ist ___.', solution: 'Schwedin' },
          { label: 'c', task: 'Er kommt aus Frankreich. Er ist ___.', solution: 'Franzose' },
          { label: 'd', task: 'Ich komme aus Deutschland. Ich bin ___ (kvinne).', solution: 'Deutsche' },
        ],
        solution: 'a) Norweger\nb) Schwedin\nc) Franzose\nd) Deutsche',
        hints: ['Husk at nasjonalitet byes etter kjonn'],
      },
    },
    {
      id: 'tysk-1-1-3-text-4',
      type: 'text',
      content: `**Sprak**

| Tysk | Norsk |
|------|-------|
| Deutsch | tysk |
| Norwegisch | norsk |
| Englisch | engelsk |
| Franzosisch | fransk |
| Spanisch | spansk |

**Eksempel:** Ich spreche Deutsch und Englisch. (Jeg snakker tysk og engelsk.)`,
    },
    {
      id: 'tysk-1-1-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-1-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv fullstendige setninger pa tysk:',
        subTasks: [
          { label: 'a', task: 'Jeg kommer fra Norge.', solution: 'Ich komme aus Norwegen.' },
          { label: 'b', task: 'Han er tysker.', solution: 'Er ist Deutscher.' },
          { label: 'c', task: 'Hun snakker norsk og tysk.', solution: 'Sie spricht Norwegisch und Deutsch.' },
        ],
        solution: 'a) Ich komme aus Norwegen.\nb) Er ist Deutscher.\nc) Sie spricht Norwegisch und Deutsch.',
        hints: ['Bruk verbet sprechen (snakke) - ich spreche, du sprichst, er/sie spricht'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.4: Erste Gesprache - Forste samtaler
// ============================================================================

export const CHAPTER_TYSK_1_1_4: TextbookChapter = {
  id: 'tysk-1-1-4',
  courseId: 'tysk-1',
  chapterNumber: '1.4',
  title: 'Erste Gesprache - Forste samtaler',
  description: 'Laer a fore enkle samtaler og dialoger pa tysk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'fore enkle samtaler',
    'bruke sporsmalsord',
  ],
  content: [
    {
      id: 'tysk-1-1-4-intro',
      type: 'text',
      content: `## Forste samtaler

Na har du laert hilsener, presentasjon og a fortelle hvor du kommer fra. La oss sette alt sammen til enkle samtaler!`,
    },
    {
      id: 'tysk-1-1-4-text-1',
      type: 'text',
      content: `**Sporsmalsord**

| Tysk | Norsk |
|------|-------|
| Wer? | Hvem? |
| Was? | Hva? |
| Wo? | Hvor? |
| Woher? | Hvorfra? |
| Wohin? | Hvor hen? |
| Wie? | Hvordan? |
| Warum? | Hvorfor? |
| Wann? | Nar? |`,
    },
    {
      id: 'tysk-1-1-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Bruk av sporsmalsord',
      problem: `Hvilke sporsmalsord passer?
a) ___ heisst du? (Hva heter du?)
b) ___ kommst du? (Hvor kommer du fra?)
c) ___ wohnst du? (Hvor bor du?)`,
      solution: `a) **Wie** heisst du?
b) **Woher** kommst du?
c) **Wo** wohnst du?

Merk forskjellen: "Wo" = hvor (sted), "Woher" = hvorfra (opprinnelse).`,
    },
    {
      id: 'tysk-1-1-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-1-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig sporsmalsord:',
        subTasks: [
          { label: 'a', task: '___ ist das? (Hvem er det?)', solution: 'Wer' },
          { label: 'b', task: '___ alt bist du? (Hvor gammel er du?)', solution: 'Wie' },
          { label: 'c', task: '___ ist dein Name? (Hva er navnet ditt?)', solution: 'Was' },
          { label: 'd', task: '___ gehst du? (Hvor skal du?)', solution: 'Wohin' },
        ],
        solution: 'a) Wer\nb) Wie\nc) Was\nd) Wohin',
        hints: ['Se tabellen over sporsmalsord'],
      },
    },
    {
      id: 'tysk-1-1-4-text-2',
      type: 'text',
      content: `**Hvordan har du det?**

| Tysk | Norsk |
|------|-------|
| Wie geht es dir? | Hvordan har du det? (uformelt) |
| Wie geht es Ihnen? | Hvordan har De det? (formelt) |
| Mir geht es gut. | Jeg har det bra. |
| Mir geht es nicht so gut. | Jeg har det ikke sa bra. |
| Es geht. | Det gar greit. |
| Super! / Prima! | Kjempebra! |
| Danke, und dir? | Takk, og du? |`,
    },
    {
      id: 'tysk-1-1-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Dialog - Hvordan har du det?',
      problem: `Lag en dialog med sporsmalet "Wie geht es dir?"`,
      solution: `**Dialog:**
- A: Hallo! Wie geht es dir?
- B: Mir geht es gut, danke! Und dir?
- A: Super! Danke.

(Hei! Hvordan har du det? - Jeg har det bra, takk! Og du? - Kjempebra! Takk.)`,
    },
    {
      id: 'tysk-1-1-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-1-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Hvordan har du det?', solution: 'Wie geht es dir?' },
          { label: 'b', task: 'Jeg har det bra.', solution: 'Mir geht es gut.' },
          { label: 'c', task: 'Takk, og du?', solution: 'Danke, und dir?' },
        ],
        solution: 'a) Wie geht es dir?\nb) Mir geht es gut.\nc) Danke, und dir?',
        hints: ['Bruk "mir" for "jeg har det"'],
      },
    },
    {
      id: 'tysk-1-1-4-text-3',
      type: 'text',
      content: `**Alder**

| Tysk | Norsk |
|------|-------|
| Wie alt bist du? | Hvor gammel er du? |
| Ich bin ... Jahre alt. | Jeg er ... ar gammel. |
| Ich bin 15 Jahre alt. | Jeg er 15 ar gammel. |
| Er ist 20 Jahre alt. | Han er 20 ar gammel. |`,
    },
    {
      id: 'tysk-1-1-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Fullstendig dialog',
      problem: `Les og forsta denne dialogen:`,
      solution: `**Dialog mellom Lisa og Max:**

Lisa: Hallo! Ich heisse Lisa. Wie heisst du?
Max: Hallo Lisa! Ich heisse Max.
Lisa: Woher kommst du, Max?
Max: Ich komme aus Deutschland. Und du?
Lisa: Ich komme aus Norwegen. Wie alt bist du?
Max: Ich bin 16 Jahre alt. Und du?
Lisa: Ich bin auch 16. Wie geht es dir?
Max: Mir geht es gut, danke! Tschuss!
Lisa: Tschuss, Max!`,
    },
    {
      id: 'tysk-1-1-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-1-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Svar pa sporsmalene pa tysk:',
        subTasks: [
          { label: 'a', task: 'Wie heisst du?', solution: 'Ich heisse [ditt navn].' },
          { label: 'b', task: 'Woher kommst du?', solution: 'Ich komme aus Norwegen.' },
          { label: 'c', task: 'Wie alt bist du?', solution: 'Ich bin [alder] Jahre alt.' },
          { label: 'd', task: 'Wie geht es dir?', solution: 'Mir geht es gut.' },
        ],
        solution: 'a) Ich heisse...\nb) Ich komme aus Norwegen.\nc) Ich bin... Jahre alt.\nd) Mir geht es gut.',
        hints: ['Bruk dine egne opplysninger'],
      },
    },
    {
      id: 'tysk-1-1-4-tip-1',
      type: 'tip',
      content: `Nar du ever pa tysk, prov a ha korte samtaler med deg selv eller en venn. Start med enkle sporsmaal og svar, og bygg gradvis opp lengre dialoger.`,
    },
    {
      id: 'tysk-1-1-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-1-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort dialog (6-8 setninger) mellom to personer som moter hverandre for forste gang. Bruk hilsener, presentasjon, land og alder.',
        solution: 'Eksempel:\nA: Hallo! Wie heisst du?\nB: Ich heisse Anna. Und du?\nA: Ich heisse Peter. Woher kommst du?\nB: Ich komme aus Schweden. Und du?\nA: Ich komme aus Deutschland. Wie alt bist du?\nB: Ich bin 15 Jahre alt.\nA: Ich bin auch 15! Tschuss!\nB: Tschuss!',
        hints: ['Bruk sporsmalsordene Wie, Woher, Wie alt', 'Husk a inkludere hilsen og avskjed'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.1: Die Zahlen 0-20 - Tallene 0-20
// ============================================================================

export const CHAPTER_TYSK_1_2_1: TextbookChapter = {
  id: 'tysk-1-2-1',
  courseId: 'tysk-1',
  chapterNumber: '2.1',
  title: 'Die Zahlen 0-20 - Tallene 0-20',
  description: 'Laer tallene fra 0 til 20 pa tysk.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke tall i kommunikasjon',
    'telle pa tysk',
  ],
  content: [
    {
      id: 'tysk-1-2-1-intro',
      type: 'text',
      content: `## Tallene 0-20

Tall er viktige for a snakke om alder, priser, telefonnummer og mye mer. La oss laere de grunnleggende tallene pa tysk!`,
    },
    {
      id: 'tysk-1-2-1-text-1',
      type: 'text',
      content: `**Tallene 0-12**

| Tall | Tysk | Uttale |
|------|------|--------|
| 0 | null | [null] |
| 1 | eins | [ains] |
| 2 | zwei | [tsvai] |
| 3 | drei | [drai] |
| 4 | vier | [fir] |
| 5 | funf | [fynf] |
| 6 | sechs | [zeks] |
| 7 | sieben | [zi:ben] |
| 8 | acht | [akt] |
| 9 | neun | [noyn] |
| 10 | zehn | [tse:n] |
| 11 | elf | [elf] |
| 12 | zwolf | [tsvolf] |`,
    },
    {
      id: 'tysk-1-2-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Telle til 10',
      problem: `Tell hoyt fra 1 til 10 pa tysk:`,
      solution: `eins, zwei, drei, vier, funf, sechs, sieben, acht, neun, zehn

**Tips**: Ov pa uttalen! "Zwei" uttales [tsvai], "drei" uttales [drai].`,
    },
    {
      id: 'tysk-1-2-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-2-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv tallene pa tysk:',
        subTasks: [
          { label: 'a', task: '3', solution: 'drei' },
          { label: 'b', task: '7', solution: 'sieben' },
          { label: 'c', task: '5', solution: 'funf' },
          { label: 'd', task: '10', solution: 'zehn' },
        ],
        solution: 'a) drei\nb) sieben\nc) funf\nd) zehn',
        hints: ['Se tabellen over tallene 0-12'],
      },
    },
    {
      id: 'tysk-1-2-1-text-2',
      type: 'text',
      content: `**Tallene 13-20**

| Tall | Tysk | Mønster |
|------|------|---------|
| 13 | dreizehn | drei + zehn |
| 14 | vierzehn | vier + zehn |
| 15 | funfzehn | funf + zehn |
| 16 | sechzehn | sechs + zehn (mister s) |
| 17 | siebzehn | sieben + zehn (mister en) |
| 18 | achtzehn | acht + zehn |
| 19 | neunzehn | neun + zehn |
| 20 | zwanzig | - |`,
    },
    {
      id: 'tysk-1-2-1-note-1',
      type: 'note',
      content: `Tallene 13-19 folger monsteret: enertall + zehn. Men merk at **sechzehn** mister en "s" og **siebzehn** mister "en".`,
    },
    {
      id: 'tysk-1-2-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Monsteret for tenartallene',
      problem: `Hvordan dannes tallet 15 pa tysk?`,
      solution: `15 = funf + zehn = **funfzehn**

Monsteret er: enertall + "zehn"
- 13 = drei + zehn = dreizehn
- 14 = vier + zehn = vierzehn
- 15 = funf + zehn = funfzehn`,
    },
    {
      id: 'tysk-1-2-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-2-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv tallene pa tysk:',
        subTasks: [
          { label: 'a', task: '14', solution: 'vierzehn' },
          { label: 'b', task: '17', solution: 'siebzehn' },
          { label: 'c', task: '20', solution: 'zwanzig' },
          { label: 'd', task: '16', solution: 'sechzehn' },
        ],
        solution: 'a) vierzehn\nb) siebzehn\nc) zwanzig\nd) sechzehn',
        hints: ['Husk unntakene: sechzehn og siebzehn'],
      },
    },
    {
      id: 'tysk-1-2-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Alder med tall',
      problem: `Oversett til tysk:
a) Jeg er 15 ar.
b) Hun er 18 ar.`,
      solution: `a) Ich bin funfzehn Jahre alt.
b) Sie ist achtzehn Jahre alt.

**Struktur**: [Person] + bin/ist + [tall] + Jahre alt`,
    },
    {
      id: 'tysk-1-2-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-2-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv setningene pa tysk:',
        subTasks: [
          { label: 'a', task: 'Jeg er 16 ar.', solution: 'Ich bin sechzehn Jahre alt.' },
          { label: 'b', task: 'Han er 14 ar.', solution: 'Er ist vierzehn Jahre alt.' },
          { label: 'c', task: 'Hun er 19 ar.', solution: 'Sie ist neunzehn Jahre alt.' },
        ],
        solution: 'a) Ich bin sechzehn Jahre alt.\nb) Er ist vierzehn Jahre alt.\nc) Sie ist neunzehn Jahre alt.',
        hints: ['Bruk monsteret: bin/ist + tall + Jahre alt'],
      },
    },
    {
      id: 'tysk-1-2-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-2-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv det neste tallet i rekken pa tysk:',
        subTasks: [
          { label: 'a', task: 'funf, sechs, ___', solution: 'sieben' },
          { label: 'b', task: 'zwolf, dreizehn, ___', solution: 'vierzehn' },
          { label: 'c', task: 'siebzehn, achtzehn, ___', solution: 'neunzehn' },
          { label: 'd', task: 'null, eins, ___', solution: 'zwei' },
        ],
        solution: 'a) sieben\nb) vierzehn\nc) neunzehn\nd) zwei',
        hints: ['Tell i rekkef alge'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.2: Die Zahlen 21-100 - Tallene 21-100
// ============================================================================

export const CHAPTER_TYSK_1_2_2: TextbookChapter = {
  id: 'tysk-1-2-2',
  courseId: 'tysk-1',
  chapterNumber: '2.2',
  title: 'Die Zahlen 21-100 - Tallene 21-100',
  description: 'Laer tallene fra 21 til 100 pa tysk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke storre tall i kommunikasjon',
  ],
  content: [
    {
      id: 'tysk-1-2-2-intro',
      type: 'text',
      content: `## Tallene 21-100

Pa tysk har sammensatte tall en spesiell ordstilling: enertallet kommer for titallet! Dette er annerledes enn pa norsk.`,
    },
    {
      id: 'tysk-1-2-2-text-1',
      type: 'text',
      content: `**Tierne**

| Tall | Tysk |
|------|------|
| 20 | zwanzig |
| 30 | dreissig |
| 40 | vierzig |
| 50 | funfzig |
| 60 | sechzig |
| 70 | siebzig |
| 80 | achtzig |
| 90 | neunzig |
| 100 | hundert |`,
    },
    {
      id: 'tysk-1-2-2-note-1',
      type: 'note',
      content: `Merk unntakene: **dreissig** (ikke dreizig), **sechzig** (mister s), og **siebzig** (mister en).`,
    },
    {
      id: 'tysk-1-2-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Tierne',
      problem: `Skriv tallene pa tysk:
a) 30
b) 50
c) 70`,
      solution: `a) 30 = **dreissig**
b) 50 = **funfzig**
c) 70 = **siebzig**`,
    },
    {
      id: 'tysk-1-2-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-2-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv tierne pa tysk:',
        subTasks: [
          { label: 'a', task: '40', solution: 'vierzig' },
          { label: 'b', task: '60', solution: 'sechzig' },
          { label: 'c', task: '80', solution: 'achtzig' },
          { label: 'd', task: '100', solution: 'hundert' },
        ],
        solution: 'a) vierzig\nb) sechzig\nc) achtzig\nd) hundert',
        hints: ['Husk unntakene: dreissig, sechzig, siebzig'],
      },
    },
    {
      id: 'tysk-1-2-2-def-1',
      type: 'definition',
      title: 'Sammensatte tall (21-99)',
      content: `Pa tysk sier man enertallet for titallet, koblet med "und":

**Monster**: [enertall] + und + [titall]

Eksempler:
- 21 = ein**und**zwanzig (en-og-tjue)
- 34 = vier**und**dreissig (fire-og-tretti)
- 56 = sechs**und**funfzig (seks-og-femti)`,
    },
    {
      id: 'tysk-1-2-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Sammensatte tall',
      problem: `Skriv tallene pa tysk:
a) 25
b) 42
c) 67`,
      solution: `a) 25 = funf**und**zwanzig (fem-og-tjue)
b) 42 = zwei**und**vierzig (to-og-forti)
c) 67 = sieben**und**sechzig (syv-og-seksti)

**Tips**: Tenk "baklengs" - si enertallet forst!`,
    },
    {
      id: 'tysk-1-2-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-2-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv tallene pa tysk:',
        subTasks: [
          { label: 'a', task: '23', solution: 'dreiundzwanzig' },
          { label: 'b', task: '45', solution: 'funfundvierzig' },
          { label: 'c', task: '78', solution: 'achtundsiebzig' },
          { label: 'd', task: '91', solution: 'einundneunzig' },
        ],
        solution: 'a) dreiundzwanzig\nb) funfundvierzig\nc) achtundsiebzig\nd) einundneunzig',
        hints: ['Husk: enertall + und + titall'],
      },
    },
    {
      id: 'tysk-1-2-2-tip-1',
      type: 'tip',
      content: `For a huske den tyske tallordningen, tenk pa det engelske "four-and-twenty blackbirds" fra gamle regler. Tysk har beholdt denne gamle malformen!`,
    },
    {
      id: 'tysk-1-2-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Priser',
      problem: `Skriv prisene pa tysk:
"Det koster 35 euro."`,
      solution: `Das kostet funfunddreissig Euro.

**Nyttige ord:**
- Das kostet... = Det koster...
- Euro = euro
- Cent = cent`,
    },
    {
      id: 'tysk-1-2-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-2-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett prisene til tysk (bruk "Das kostet..."):',
        subTasks: [
          { label: 'a', task: 'Det koster 27 euro.', solution: 'Das kostet siebenundzwanzig Euro.' },
          { label: 'b', task: 'Det koster 53 euro.', solution: 'Das kostet dreiundfunfzig Euro.' },
          { label: 'c', task: 'Det koster 84 euro.', solution: 'Das kostet vierundachtzig Euro.' },
        ],
        solution: 'a) Das kostet siebenundzwanzig Euro.\nb) Das kostet dreiundfunfzig Euro.\nc) Das kostet vierundachtzig Euro.',
        hints: ['Husk monsteret: enertall + und + titall'],
      },
    },
    {
      id: 'tysk-1-2-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-2-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv tallene som ord pa tysk:',
        subTasks: [
          { label: 'a', task: '99', solution: 'neunundneunzig' },
          { label: 'b', task: '66', solution: 'sechsundsechzig' },
          { label: 'c', task: '37', solution: 'siebenunddreissig' },
          { label: 'd', task: '100', solution: 'hundert' },
        ],
        solution: 'a) neunundneunzig\nb) sechsundsechzig\nc) siebenunddreissig\nd) hundert',
        hints: ['Ov pa de spesielle formene: sechzig, siebzig, dreissig'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.3: Die Farben - Fargene
// ============================================================================

export const CHAPTER_TYSK_1_2_3: TextbookChapter = {
  id: 'tysk-1-2-3',
  courseId: 'tysk-1',
  chapterNumber: '2.3',
  title: 'Die Farben - Fargene',
  description: 'Laer fargene pa tysk.',
  estimatedMinutes: 35,
  competenceGoals: [
    'beskrive ting med farger',
  ],
  content: [
    {
      id: 'tysk-1-2-3-intro',
      type: 'text',
      content: `## Fargene

Farger er nyttige for a beskrive ting og gjenstander. La oss laere de vanligste fargene pa tysk!`,
    },
    {
      id: 'tysk-1-2-3-text-1',
      type: 'text',
      content: `**Grunnleggende farger**

| Tysk | Norsk |
|------|-------|
| rot | rod |
| blau | bla |
| gelb | gul |
| grun | gronn |
| weiss | hvit |
| schwarz | svart |
| braun | brun |
| orange | oransje |
| rosa / pink | rosa |
| lila / violett | lilla |
| grau | gra |`,
    },
    {
      id: 'tysk-1-2-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Grunnleggende farger',
      problem: `Oversett til tysk:
a) rod
b) bla
c) gronn`,
      solution: `a) **rot**
b) **blau**
c) **grun**`,
    },
    {
      id: 'tysk-1-2-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-2-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett fargene til tysk:',
        subTasks: [
          { label: 'a', task: 'gul', solution: 'gelb' },
          { label: 'b', task: 'svart', solution: 'schwarz' },
          { label: 'c', task: 'hvit', solution: 'weiss' },
          { label: 'd', task: 'brun', solution: 'braun' },
        ],
        solution: 'a) gelb\nb) schwarz\nc) weiss\nd) braun',
        hints: ['Se tabellen over grunnleggende farger'],
      },
    },
    {
      id: 'tysk-1-2-3-text-2',
      type: 'text',
      content: `**Beskrive ting med farger**

| Tysk | Norsk |
|------|-------|
| Das ist rot. | Det er rodt. |
| Der Ball ist blau. | Ballen er bla. |
| Die Blume ist gelb. | Blomsten er gul. |
| Meine Lieblingsfarbe ist... | Favorittfargen min er... |`,
    },
    {
      id: 'tysk-1-2-3-def-1',
      type: 'definition',
      title: 'Farger som adjektiv',
      content: `Nar farger brukes foran substantiv, ma de boyes etter kjonn og kasus:
- **der** rote Ball (den rode ballen - hankjonn)
- **die** rote Blume (den rode blomsten - hunkjonn)
- **das** rote Auto (den rode bilen - intettkjonn)

Men nar fargen star alene etter verbet, boyes den ikke:
- Der Ball ist **rot**. (Ballen er rod.)`,
    },
    {
      id: 'tysk-1-2-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Beskrive farger',
      problem: `Oversett til tysk:
a) Himmelen er bla.
b) Gresset er gront.`,
      solution: `a) Der Himmel ist **blau**. (Himmelen er bla.)
b) Das Gras ist **grun**. (Gresset er gront.)

Nar fargen star etter "ist", boyes den ikke!`,
    },
    {
      id: 'tysk-1-2-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-2-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fullfar setningene med riktig farge pa tysk:',
        subTasks: [
          { label: 'a', task: 'Die Sonne ist ___. (gul)', solution: 'gelb' },
          { label: 'b', task: 'Der Schnee ist ___. (hvit)', solution: 'weiss' },
          { label: 'c', task: 'Die Nacht ist ___. (svart)', solution: 'schwarz' },
          { label: 'd', task: 'Die Tomate ist ___. (rod)', solution: 'rot' },
        ],
        solution: 'a) gelb\nb) weiss\nc) schwarz\nd) rot',
        hints: ['Fargen star etter "ist" og boyes ikke'],
      },
    },
    {
      id: 'tysk-1-2-3-text-3',
      type: 'text',
      content: `**Nyanser**

| Tysk | Norsk |
|------|-------|
| hellblau | lyseblatt |
| dunkelblau | morkeblatt |
| hellgrun | lysegront |
| dunkelgrun | morkegront |
| hellrot | lyserodt |
| dunkelrot | morkerodt |`,
    },
    {
      id: 'tysk-1-2-3-tip-1',
      type: 'tip',
      content: `**hell** = lys, **dunkel** = mork. Kombiner disse med farger for a lage nyanser: hell + blau = hellblau (lyseblatt)`,
    },
    {
      id: 'tysk-1-2-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Favorittfarge',
      problem: `Hvordan sier du favorittfargen din pa tysk?`,
      solution: `**Meine Lieblingsfarbe ist blau.**
(Favorittfargen min er bla.)

Sporre: **Was ist deine Lieblingsfarbe?**
(Hva er favorittfargen din?)`,
    },
    {
      id: 'tysk-1-2-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-2-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Favorittfargen min er gronn.', solution: 'Meine Lieblingsfarbe ist grun.' },
          { label: 'b', task: 'Hva er favorittfargen din?', solution: 'Was ist deine Lieblingsfarbe?' },
          { label: 'c', task: 'Himmelen er lyseblaa.', solution: 'Der Himmel ist hellblau.' },
        ],
        solution: 'a) Meine Lieblingsfarbe ist grun.\nb) Was ist deine Lieblingsfarbe?\nc) Der Himmel ist hellblau.',
        hints: ['Lieblingsfarbe = favorittfarge'],
      },
    },
    {
      id: 'tysk-1-2-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-2-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva er fargene pa det tyske flagget? Skriv pa tysk.',
        solution: 'schwarz, rot, gelb (eller gold)',
        hints: ['Flagget har tre horisontale striper'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.4: Einkaufen mit Zahlen - Handle med tall
// ============================================================================

export const CHAPTER_TYSK_1_2_4: TextbookChapter = {
  id: 'tysk-1-2-4',
  courseId: 'tysk-1',
  chapterNumber: '2.4',
  title: 'Einkaufen mit Zahlen - Handle med tall',
  description: 'Laer a bruke tall nar du handler.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kommunisere i enkle handelssituasjoner',
    'bruke tall praktisk',
  ],
  content: [
    {
      id: 'tysk-1-2-4-intro',
      type: 'text',
      content: `## Handle med tall

Na skal vi bruke tallene i praktiske situasjoner - som a handle i en butikk eller sporre om priser!`,
    },
    {
      id: 'tysk-1-2-4-text-1',
      type: 'text',
      content: `**Nyttige handelsfraser**

| Tysk | Norsk |
|------|-------|
| Was kostet das? | Hva koster det? |
| Wie viel kostet das? | Hvor mye koster det? |
| Das kostet... Euro | Det koster... euro |
| Ich mochte... | Jeg vil gjerne ha... |
| Ich nehme... | Jeg tar... |
| Haben Sie...? | Har De...? |`,
    },
    {
      id: 'tysk-1-2-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Sporre om pris',
      problem: `Lag en kort dialog om a sporre om pris:`,
      solution: `**Dialog i butikken:**
- Kunde: Entschuldigung, was kostet das T-Shirt?
- Verkaufer: Das kostet funfundzwanzig Euro.
- Kunde: Danke!

(Unnskyld, hva koster T-skjorten? - Den koster 25 euro. - Takk!)`,
    },
    {
      id: 'tysk-1-2-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-2-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Hva koster det?', solution: 'Was kostet das?' },
          { label: 'b', task: 'Det koster 15 euro.', solution: 'Das kostet funfzehn Euro.' },
          { label: 'c', task: 'Jeg vil gjerne ha...', solution: 'Ich mochte...' },
        ],
        solution: 'a) Was kostet das?\nb) Das kostet funfzehn Euro.\nc) Ich mochte...',
        hints: ['Se tabellen med handelsfraser'],
      },
    },
    {
      id: 'tysk-1-2-4-text-2',
      type: 'text',
      content: `**Penger og betaling**

| Tysk | Norsk |
|------|-------|
| der Euro | euroen |
| der Cent | centen |
| das Geld | pengene |
| bezahlen | betale |
| bar bezahlen | betale kontant |
| mit Karte bezahlen | betale med kort |
| das Wechselgeld | vekslepenger |`,
    },
    {
      id: 'tysk-1-2-4-def-1',
      type: 'definition',
      title: 'Euro og cent',
      content: `Priser med euro og cent:
- 3,50 EUR = drei Euro funfzig (Cent)
- 12,99 EUR = zwolf Euro neunundneunzig
- 0,50 EUR = funfzig Cent

Merk: Pa tysk brukes komma (ikke punktum) for desimaler.`,
    },
    {
      id: 'tysk-1-2-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Priser med cent',
      problem: `Hvordan sier du disse prisene pa tysk?
a) 4,50 EUR
b) 7,99 EUR`,
      solution: `a) vier Euro funfzig (Cent)
b) sieben Euro neunundneunzig

Man sier ofte bare "vier funfzig" i dagligtale.`,
    },
    {
      id: 'tysk-1-2-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-2-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv prisene pa tysk:',
        subTasks: [
          { label: 'a', task: '2,50 EUR', solution: 'zwei Euro funfzig' },
          { label: 'b', task: '9,99 EUR', solution: 'neun Euro neunundneunzig' },
          { label: 'c', task: '15,75 EUR', solution: 'funfzehn Euro funfundsiebzig' },
        ],
        solution: 'a) zwei Euro funfzig\nb) neun Euro neunundneunzig\nc) funfzehn Euro funfundsiebzig',
        hints: ['Euro + centbelopet'],
      },
    },
    {
      id: 'tysk-1-2-4-text-3',
      type: 'text',
      content: `**Mengdeord**

| Tysk | Norsk |
|------|-------|
| ein/eine | en/ei/et |
| zwei | to |
| ein Kilo | en kilo |
| ein Liter | en liter |
| eine Flasche | en flaske |
| eine Tute | en pose |
| ein Stuck | et stykke |`,
    },
    {
      id: 'tysk-1-2-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Bestille med mengde',
      problem: `Lag en bestilling pa tysk:`,
      solution: `**Bestilling:**
- Ich mochte ein Kilo Apfel, bitte.
(Jeg vil gjerne ha en kilo epler, takk.)

- Ich nehme zwei Flaschen Wasser.
(Jeg tar to flasker vann.)`,
    },
    {
      id: 'tysk-1-2-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-2-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett bestillingene til tysk:',
        subTasks: [
          { label: 'a', task: 'Jeg vil gjerne ha en flaske melk.', solution: 'Ich mochte eine Flasche Milch.' },
          { label: 'b', task: 'Jeg tar tre epler.', solution: 'Ich nehme drei Apfel.' },
          { label: 'c', task: 'Et stykke kake, takk.', solution: 'Ein Stuck Kuchen, bitte.' },
        ],
        solution: 'a) Ich mochte eine Flasche Milch.\nb) Ich nehme drei Apfel.\nc) Ein Stuck Kuchen, bitte.',
        hints: ['Bruk "Ich mochte" eller "Ich nehme"'],
      },
    },
    {
      id: 'tysk-1-2-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-2-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort dialog i en butikk (6-8 setninger). Inkluder hilsen, sporre om pris, bestille og betale.',
        solution: 'Eksempel:\nKunde: Guten Tag!\nVerkaufer: Guten Tag! Kann ich Ihnen helfen?\nKunde: Was kostet das T-Shirt?\nVerkaufer: Das kostet neunzehn Euro neunundneunzig.\nKunde: Ich nehme es.\nVerkaufer: Das macht neunzehn Euro neunundneunzig.\nKunde: Bitte schon. (gir penger)\nVerkaufer: Danke! Auf Wiedersehen!\nKunde: Tschuss!',
        hints: ['Start med hilsen', 'Spor om pris med "Was kostet...?"', 'Avslutt med betaling og avskjed'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.1: Die Familie - Familien
// ============================================================================

export const CHAPTER_TYSK_1_3_1: TextbookChapter = {
  id: 'tysk-1-3-1',
  courseId: 'tysk-1',
  chapterNumber: '3.1',
  title: 'Die Familie - Familien',
  description: 'Laer ord for familiemedlemmer pa tysk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'fortelle om familien sin',
  ],
  content: [
    {
      id: 'tysk-1-3-1-intro',
      type: 'text',
      content: `## Familie

Familie er et viktig tema i alle sprak. La oss laere ordene for familiemedlemmer pa tysk!`,
    },
    {
      id: 'tysk-1-3-1-text-1',
      type: 'text',
      content: `**Naer familie**

| Tysk | Norsk | Kjonn |
|------|-------|-------|
| die Mutter | moren | f |
| der Vater | faren | m |
| die Eltern | foreldrene | fl |
| die Schwester | sosteren | f |
| der Bruder | broren | m |
| die Geschwister | sosknene | fl |
| das Kind | barnet | n |
| die Kinder | barna | fl |`,
    },
    {
      id: 'tysk-1-3-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Naer familie',
      problem: `Oversett til tysk:
a) mor
b) far
c) sooster`,
      solution: `a) die Mutter
b) der Vater
c) die Schwester

Merk at alle substantiv pa tysk har kjonn (der, die, das).`,
    },
    {
      id: 'tysk-1-3-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-3-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett familieordene til tysk (med artikkel):',
        subTasks: [
          { label: 'a', task: 'broren', solution: 'der Bruder' },
          { label: 'b', task: 'sosteren', solution: 'die Schwester' },
          { label: 'c', task: 'foreldrene', solution: 'die Eltern' },
          { label: 'd', task: 'barnet', solution: 'das Kind' },
        ],
        solution: 'a) der Bruder\nb) die Schwester\nc) die Eltern\nd) das Kind',
        hints: ['Husk artikkelen: der (m), die (f), das (n)'],
      },
    },
    {
      id: 'tysk-1-3-1-text-2',
      type: 'text',
      content: `**Besteforeldre og barnebarn**

| Tysk | Norsk | Kjonn |
|------|-------|-------|
| die Grossmutter / die Oma | bestemoren | f |
| der Grossvater / der Opa | bestefaren | m |
| die Grosseltern | besteforeldrene | fl |
| der Enkel | barnebarnet (gutt) | m |
| die Enkelin | barnebarnet (jente) | f |
| die Enkelkinder | barnebarna | fl |`,
    },
    {
      id: 'tysk-1-3-1-tip-1',
      type: 'tip',
      content: `**Oma** og **Opa** er uformelle ord for bestemor og bestefar, akkurat som "bestemor" og "bestefar" pa norsk. De brukes mye i dagligtale.`,
    },
    {
      id: 'tysk-1-3-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Besteforeldre',
      problem: `Hvordan sier du:
"Jeg har en bestemor og en bestefar."`,
      solution: `Ich habe eine Grossmutter und einen Grossvater.
eller uformelt:
Ich habe eine Oma und einen Opa.`,
    },
    {
      id: 'tysk-1-3-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-3-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'bestemor (uformelt)', solution: 'die Oma' },
          { label: 'b', task: 'bestefar (uformelt)', solution: 'der Opa' },
          { label: 'c', task: 'besteforeldrene', solution: 'die Grosseltern' },
        ],
        solution: 'a) die Oma\nb) der Opa\nc) die Grosseltern',
        hints: ['Oma og Opa er de uformelle formene'],
      },
    },
    {
      id: 'tysk-1-3-1-text-3',
      type: 'text',
      content: `**Utvidet familie**

| Tysk | Norsk | Kjonn |
|------|-------|-------|
| die Tante | tanten | f |
| der Onkel | onkelen | m |
| die Cousine | kusinen | f |
| der Cousin | fetteren | m |
| die Nichte | niesen | f |
| der Neffe | nevoen | m |`,
    },
    {
      id: 'tysk-1-3-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Beskrive familien',
      problem: `Beskriv familien din pa tysk:`,
      solution: `**Eksempel:**
Ich habe eine grosse Familie. Ich habe eine Mutter, einen Vater, eine Schwester und einen Bruder. Meine Grosseltern wohnen in Oslo.

(Jeg har en stor familie. Jeg har en mor, en far, en soster og en bror. Besteforeldrene mine bor i Oslo.)`,
    },
    {
      id: 'tysk-1-3-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-3-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'tanten', solution: 'die Tante' },
          { label: 'b', task: 'onkelen', solution: 'der Onkel' },
          { label: 'c', task: 'fetteren', solution: 'der Cousin' },
          { label: 'd', task: 'kusinen', solution: 'die Cousine' },
        ],
        solution: 'a) die Tante\nb) der Onkel\nc) der Cousin\nd) die Cousine',
        hints: ['Cousin og Cousine kommer fra fransk'],
      },
    },
    {
      id: 'tysk-1-3-1-def-1',
      type: 'definition',
      title: 'Verbet "haben" (a ha)',
      content: `**Haben** brukes for a si hva du har:

| Person | Tysk | Norsk |
|--------|------|-------|
| ich | habe | jeg har |
| du | hast | du har |
| er/sie/es | hat | han/hun/det har |
| wir | haben | vi har |
| ihr | habt | dere har |
| sie/Sie | haben | de har / De har |`,
    },
    {
      id: 'tysk-1-3-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-3-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig form av "haben" og oversett:',
        subTasks: [
          { label: 'a', task: 'Ich ___ eine Schwester.', solution: 'habe' },
          { label: 'b', task: 'Er ___ zwei Bruder.', solution: 'hat' },
          { label: 'c', task: 'Wir ___ viele Cousins.', solution: 'haben' },
          { label: 'd', task: '___ du Geschwister?', solution: 'Hast' },
        ],
        solution: 'a) habe (Jeg har en soster.)\nb) hat (Han har to brodre.)\nc) haben (Vi har mange fettere.)\nd) Hast (Har du sosken?)',
        hints: ['Se boyingstabellen for haben'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.2: Possessivpronomen - Eiendomsord
// ============================================================================

export const CHAPTER_TYSK_1_3_2: TextbookChapter = {
  id: 'tysk-1-3-2',
  courseId: 'tysk-1',
  chapterNumber: '3.2',
  title: 'Possessivpronomen - Eiendomsord',
  description: 'Laer eiendomsordene mein, dein, sein osv.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke eiendomsord riktig',
  ],
  content: [
    {
      id: 'tysk-1-3-2-intro',
      type: 'text',
      content: `## Eiendomsord

Eiendomsord (possessivpronomen) brukes for a vise hvem noe tilhorer, som "min", "din", "hans" osv. Pa tysk ma eiendomsordene boyes etter kjonnet til substantivet de star foran.`,
    },
    {
      id: 'tysk-1-3-2-text-1',
      type: 'text',
      content: `**Eiendomsordene**

| Person | Tysk | Norsk |
|--------|------|-------|
| ich | mein | min |
| du | dein | din |
| er | sein | hans |
| sie | ihr | hennes |
| es | sein | dens/dets |
| wir | unser | var |
| ihr | euer | deres |
| sie/Sie | ihr/Ihr | deres/Deres |`,
    },
    {
      id: 'tysk-1-3-2-def-1',
      type: 'definition',
      title: 'Boying av eiendomsord',
      content: `Eiendomsord boyes etter kjonnet til substantivet:

**Med "mein" som eksempel:**
| Kjonn | Nominativ | Eksempel |
|-------|-----------|----------|
| maskulin (der) | mein | mein Vater (min far) |
| feminin (die) | meine | meine Mutter (min mor) |
| noytrum (das) | mein | mein Kind (mitt barn) |
| flertall (die) | meine | meine Eltern (mine foreldre) |`,
    },
    {
      id: 'tysk-1-3-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Mein og meine',
      problem: `Fyll inn mein eller meine:
a) ___ Bruder
b) ___ Schwester
c) ___ Kind
d) ___ Eltern`,
      solution: `a) **mein** Bruder (min bror - maskulin)
b) **meine** Schwester (min soster - feminin)
c) **mein** Kind (mitt barn - noytrum)
d) **meine** Eltern (mine foreldre - flertall)`,
    },
    {
      id: 'tysk-1-3-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-3-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av "mein":',
        subTasks: [
          { label: 'a', task: '___ Vater ist nett.', solution: 'Mein' },
          { label: 'b', task: '___ Mutter ist Lehrerin.', solution: 'Meine' },
          { label: 'c', task: '___ Haus ist gross.', solution: 'Mein' },
          { label: 'd', task: '___ Geschwister wohnen hier.', solution: 'Meine' },
        ],
        solution: 'a) Mein\nb) Meine\nc) Mein\nd) Meine',
        hints: ['Maskulin/noytrum = mein, feminin/flertall = meine'],
      },
    },
    {
      id: 'tysk-1-3-2-text-2',
      type: 'text',
      content: `**Alle eiendomsord boyes likt**

Alle eiendomsord folger samme monster som "mein":

| | Maskulin | Feminin | Noytrum | Flertall |
|--|----------|---------|---------|----------|
| mein | mein | meine | mein | meine |
| dein | dein | deine | dein | deine |
| sein | sein | seine | sein | seine |
| ihr | ihr | ihre | ihr | ihre |
| unser | unser | unsere | unser | unsere |`,
    },
    {
      id: 'tysk-1-3-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Dein og sein',
      problem: `Oversett til tysk:
a) din bror
b) hans soster
c) hennes foreldre`,
      solution: `a) **dein** Bruder (din bror)
b) **seine** Schwester (hans soster)
c) **ihre** Eltern (hennes foreldre)`,
    },
    {
      id: 'tysk-1-3-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-3-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig eiendomsord:',
        subTasks: [
          { label: 'a', task: 'Das ist ___ Hund. (hans)', solution: 'sein' },
          { label: 'b', task: '___ Katze ist schwarz. (hennes)', solution: 'Ihre' },
          { label: 'c', task: 'Wo ist ___ Tasche? (din)', solution: 'deine' },
          { label: 'd', task: '___ Eltern sind nett. (vare)', solution: 'Unsere' },
        ],
        solution: 'a) sein\nb) Ihre\nc) deine\nd) Unsere',
        hints: ['Tenk pa bade eier og kjonnet til substantivet'],
      },
    },
    {
      id: 'tysk-1-3-2-note-1',
      type: 'note',
      content: `Pass pa! "Ihr" kan bety bade "hennes" og "deres/Deres". Konteksten avgjor betydningen.`,
    },
    {
      id: 'tysk-1-3-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Snakke om familie',
      problem: `Beskriv familiemedlemmer med eiendomsord:`,
      solution: `**Eksempler:**
- Mein Vater heisst Erik. (Faren min heter Erik.)
- Meine Mutter ist Arztin. (Moren min er lege.)
- Meine Schwester ist 12 Jahre alt. (Sosteren min er 12 ar.)
- Mein Bruder wohnt in Berlin. (Broren min bor i Berlin.)`,
    },
    {
      id: 'tysk-1-3-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-3-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Min mor heter Anna.', solution: 'Meine Mutter heisst Anna.' },
          { label: 'b', task: 'Hans far er laerer.', solution: 'Sein Vater ist Lehrer.' },
          { label: 'c', task: 'Hennes bror er 15 ar.', solution: 'Ihr Bruder ist 15 Jahre alt.' },
        ],
        solution: 'a) Meine Mutter heisst Anna.\nb) Sein Vater ist Lehrer.\nc) Ihr Bruder ist 15 Jahre alt.',
        hints: ['Husk boying etter kjonn'],
      },
    },
    {
      id: 'tysk-1-3-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-3-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Fullfar teksten med riktige eiendomsord:',
        subTasks: [
          { label: 'a', task: 'Ich heisse Max. ___ Schwester heisst Lisa.', solution: 'Meine' },
          { label: 'b', task: 'Lisa ist 14 Jahre alt. ___ Lieblingsfarbe ist blau.', solution: 'Ihre' },
          { label: 'c', task: 'Wir haben einen Hund. ___ Hund heisst Bello.', solution: 'Unser' },
        ],
        solution: 'a) Meine\nb) Ihre\nc) Unser',
        hints: ['Tenk pa hvem som eier og substantivets kjonn'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.3: Menschen beschreiben - Beskrive mennesker
// ============================================================================

export const CHAPTER_TYSK_1_3_3: TextbookChapter = {
  id: 'tysk-1-3-3',
  courseId: 'tysk-1',
  chapterNumber: '3.3',
  title: 'Menschen beschreiben - Beskrive mennesker',
  description: 'Laer a beskrive utseende og personlighet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive mennesker',
    'bruke adjektiv',
  ],
  content: [
    {
      id: 'tysk-1-3-3-intro',
      type: 'text',
      content: `## Beskrive mennesker

For a fortelle om familien din eller venner, er det nyttig a kunne beskrive hvordan de ser ut og hvordan de er.`,
    },
    {
      id: 'tysk-1-3-3-text-1',
      type: 'text',
      content: `**Utseende - Har**

| Tysk | Norsk |
|------|-------|
| die Haare | haret |
| blonde Haare | blondt har |
| braune Haare | brunt har |
| schwarze Haare | svart har |
| rote Haare | rodt har |
| graue Haare | gratt har |
| lange Haare | langt har |
| kurze Haare | kort har |
| lockige Haare | krollete har |
| glatte Haare | glatt har |`,
    },
    {
      id: 'tysk-1-3-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Beskrive har',
      problem: `Beskriv haret til en person:`,
      solution: `**Eksempler:**
- Er hat blonde Haare. (Han har blondt har.)
- Sie hat lange, braune Haare. (Hun har langt, brunt har.)
- Mein Vater hat kurze, graue Haare. (Faren min har kort, gratt har.)`,
    },
    {
      id: 'tysk-1-3-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-3-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Han har brunt har.', solution: 'Er hat braune Haare.' },
          { label: 'b', task: 'Hun har langt har.', solution: 'Sie hat lange Haare.' },
          { label: 'c', task: 'Jeg har kort har.', solution: 'Ich habe kurze Haare.' },
        ],
        solution: 'a) Er hat braune Haare.\nb) Sie hat lange Haare.\nc) Ich habe kurze Haare.',
        hints: ['Bruk "hat/habe" + adjektiv + "Haare"'],
      },
    },
    {
      id: 'tysk-1-3-3-text-2',
      type: 'text',
      content: `**Utseende - Oyne og kropp**

| Tysk | Norsk |
|------|-------|
| die Augen | oynene |
| blaue Augen | bla oyne |
| grune Augen | gronne oyne |
| braune Augen | brune oyne |
| gross | hoy/stor |
| klein | liten/lav |
| schlank | slank |
| dick | tykk |
| jung | ung |
| alt | gammel |`,
    },
    {
      id: 'tysk-1-3-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Beskrive oyne og kropp',
      problem: `Lag setninger om utseende:`,
      solution: `**Eksempler:**
- Er hat blaue Augen. (Han har bla oyne.)
- Sie ist gross und schlank. (Hun er hoy og slank.)
- Mein Opa ist alt. (Bestefaren min er gammel.)`,
    },
    {
      id: 'tysk-1-3-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-3-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Hun har gronne oyne.', solution: 'Sie hat grune Augen.' },
          { label: 'b', task: 'Han er hoy.', solution: 'Er ist gross.' },
          { label: 'c', task: 'Min bror er ung.', solution: 'Mein Bruder ist jung.' },
        ],
        solution: 'a) Sie hat grune Augen.\nb) Er ist gross.\nc) Mein Bruder ist jung.',
        hints: ['Bruk "hat" for oyne og "ist" for egenskaper'],
      },
    },
    {
      id: 'tysk-1-3-3-text-3',
      type: 'text',
      content: `**Personlighet**

| Tysk | Norsk |
|------|-------|
| nett | snill |
| freundlich | vennlig |
| lustig | morsom |
| ernst | serials |
| intelligent | intelligent |
| fleissig | flittig |
| faul | lat |
| schuchtern | sjenert |
| mutig | modig |
| ruhig | rolig |
| laut | hoylydt |`,
    },
    {
      id: 'tysk-1-3-3-def-1',
      type: 'definition',
      title: 'Adjektiv etter verb',
      content: `Nar adjektiv star etter verbet "sein" (vaere), boyes de ikke:
- Er ist **nett**. (Han er snill.)
- Sie ist **intelligent**. (Hun er intelligent.)
- Sie sind **freundlich**. (De er vennlige.)`,
    },
    {
      id: 'tysk-1-3-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Beskrive personlighet',
      problem: `Beskriv personligheten til noen:`,
      solution: `**Eksempler:**
- Meine Mutter ist sehr nett. (Moren min er veldig snill.)
- Mein Bruder ist lustig. (Broren min er morsom.)
- Meine Schwester ist intelligent und fleissig. (Sosteren min er intelligent og flittig.)`,
    },
    {
      id: 'tysk-1-3-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-3-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Min mor er vennlig.', solution: 'Meine Mutter ist freundlich.' },
          { label: 'b', task: 'Hans bror er morsom.', solution: 'Sein Bruder ist lustig.' },
          { label: 'c', task: 'Hun er sjenert men snill.', solution: 'Sie ist schuchtern aber nett.' },
        ],
        solution: 'a) Meine Mutter ist freundlich.\nb) Sein Bruder ist lustig.\nc) Sie ist schuchtern aber nett.',
        hints: ['Adjektiv etter "ist" boyes ikke'],
      },
    },
    {
      id: 'tysk-1-3-3-tip-1',
      type: 'tip',
      content: `Bruk "sehr" (veldig) for a forsterke adjektiver: sehr nett (veldig snill), sehr gross (veldig hoy).`,
    },
    {
      id: 'tysk-1-3-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-3-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en beskrivelse av et familiemedlem pa tysk (4-5 setninger). Inkluder navn, alder, utseende og personlighet.',
        solution: 'Eksempel:\nMeine Schwester heisst Lisa. Sie ist 14 Jahre alt. Sie hat lange, blonde Haare und blaue Augen. Sie ist gross und schlank. Lisa ist sehr nett und lustig.',
        hints: ['Start med navn og alder', 'Beskriv har og oyne', 'Beskriv personlighet med adjektiver'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.4: Meine Familie vorstellen - Presentere familien
// ============================================================================

export const CHAPTER_TYSK_1_3_4: TextbookChapter = {
  id: 'tysk-1-3-4',
  courseId: 'tysk-1',
  chapterNumber: '3.4',
  title: 'Meine Familie vorstellen - Presentere familien',
  description: 'Laer a presentere familien din pa tysk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'presentere familien sin sammenhengende',
    'kombinere ordforrad og grammatikk',
  ],
  content: [
    {
      id: 'tysk-1-3-4-intro',
      type: 'text',
      content: `## Presentere familien

Na skal vi sette sammen alt vi har laert! Du skal kunne presentere familien din - fortelle om familiemedlemmer, beskrive dem og bruke eiendomsord riktig.`,
    },
    {
      id: 'tysk-1-3-4-text-1',
      type: 'text',
      content: `**Nyttige fraser**

| Tysk | Norsk |
|------|-------|
| Ich mochte meine Familie vorstellen. | Jeg vil gjerne presentere familien min. |
| Meine Familie besteht aus... | Familien min bestar av... |
| Wir sind ... Personen. | Vi er ... personer. |
| Ich habe... | Jeg har... |
| ... und ich verstehen uns gut. | ... og jeg kommer godt overens. |`,
    },
    {
      id: 'tysk-1-3-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Apningsfrase',
      problem: `Hvordan begynner du a presentere familien?`,
      solution: `**Gode apninger:**
- Ich mochte meine Familie vorstellen.
(Jeg vil gjerne presentere familien min.)

- Meine Familie ist klein/gross.
(Familien min er liten/stor.)

- Wir sind funf Personen.
(Vi er fem personer.)`,
    },
    {
      id: 'tysk-1-3-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-3-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Familien min er stor.', solution: 'Meine Familie ist gross.' },
          { label: 'b', task: 'Vi er fire personer.', solution: 'Wir sind vier Personen.' },
          { label: 'c', task: 'Jeg har to sosken.', solution: 'Ich habe zwei Geschwister.' },
        ],
        solution: 'a) Meine Familie ist gross.\nb) Wir sind vier Personen.\nc) Ich habe zwei Geschwister.',
        hints: ['Bruk "Meine Familie" og tall'],
      },
    },
    {
      id: 'tysk-1-3-4-text-2',
      type: 'text',
      content: `**Beskrive familiemedlemmer**

For hvert familiemedlem kan du nevne:
1. Hvem det er (relasjon)
2. Navn
3. Alder
4. Utseende
5. Personlighet
6. Yrke eller interesser`,
    },
    {
      id: 'tysk-1-3-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Beskrive et familiemedlem',
      problem: `Skriv en fullstendig beskrivelse av moren din:`,
      solution: `**Eksempel:**
Meine Mutter heisst Karin. Sie ist 45 Jahre alt. Sie hat kurze, braune Haare und grune Augen. Meine Mutter ist sehr nett und freundlich. Sie ist Lehrerin. Wir verstehen uns gut.

(Moren min heter Karin. Hun er 45 ar gammel. Hun har kort, brunt har og gronne oyne. Moren min er veldig snill og vennlig. Hun er laerer. Vi kommer godt overens.)`,
    },
    {
      id: 'tysk-1-3-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-3-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fullfar beskrivelsen pa tysk:',
        subTasks: [
          { label: 'a', task: 'Faren min heter ___. (Per)', solution: 'Mein Vater heisst Per.' },
          { label: 'b', task: 'Han er ___ ar gammel. (50)', solution: 'Er ist funfzig Jahre alt.' },
          { label: 'c', task: 'Han har ___ har. (kort, gratt)', solution: 'Er hat kurze, graue Haare.' },
        ],
        solution: 'a) Mein Vater heisst Per.\nb) Er ist funfzig Jahre alt.\nc) Er hat kurze, graue Haare.',
        hints: ['Bruk de riktige eiendomsordene og adjektivene'],
      },
    },
    {
      id: 'tysk-1-3-4-text-3',
      type: 'text',
      content: `**Yrker**

| Tysk | Norsk |
|------|-------|
| der Lehrer / die Lehrerin | laereren |
| der Arzt / die Arztin | legen |
| der Ingenieur / die Ingenieurin | ingenioren |
| der Krankenpfleger / die Krankenschwester | sykepleieren |
| der Polizist / die Polizistin | politibetjenten |
| der Koch / die Kochin | kokken |
| arbeitslos | arbeidslos |
| Rentner / Rentnerin | pensjonist |`,
    },
    {
      id: 'tysk-1-3-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Nevne yrke',
      problem: `Hvordan sier du hva noen jobber som?`,
      solution: `**Eksempler:**
- Mein Vater ist Ingenieur. (Faren min er ingenior.)
- Meine Mutter ist Arztin. (Moren min er lege.)
- Mein Opa ist Rentner. (Bestefaren min er pensjonist.)

Merk: Pa tysk bruker man ikke artikkel foran yrkestitler etter "sein".`,
    },
    {
      id: 'tysk-1-3-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-3-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Min mor er sykepleier.', solution: 'Meine Mutter ist Krankenschwester.' },
          { label: 'b', task: 'Min far er laerer.', solution: 'Mein Vater ist Lehrer.' },
          { label: 'c', task: 'Min bestemor er pensjonist.', solution: 'Meine Oma ist Rentnerin.' },
        ],
        solution: 'a) Meine Mutter ist Krankenschwester.\nb) Mein Vater ist Lehrer.\nc) Meine Oma ist Rentnerin.',
        hints: ['Husk a bruke femininformen for kvinner'],
      },
    },
    {
      id: 'tysk-1-3-4-text-4',
      type: 'text',
      content: `**Fullstendig familiepresentasjon - struktur**

1. **Innledning**: Storrelse pa familien
2. **Foreldre**: Navn, alder, utseende, yrke
3. **Sosken**: Navn, alder, beskrivelse
4. **Eventuelt**: Besteforeldre, kjaeledyr
5. **Avslutning**: Hva dere liker a gjore sammen`,
    },
    {
      id: 'tysk-1-3-4-example-4',
      type: 'example',
      title: 'Eksempel 4: Fullstendig presentasjon',
      problem: `Les en fullstendig familiepresentasjon:`,
      solution: `**Meine Familie**

Meine Familie ist nicht so gross. Wir sind vier Personen: meine Eltern, meine Schwester und ich.

Mein Vater heisst Erik. Er ist 48 Jahre alt. Er hat kurze, braune Haare und blaue Augen. Er ist Ingenieur. Mein Vater ist sehr nett und lustig.

Meine Mutter heisst Anne. Sie ist 45 Jahre alt. Sie hat lange, blonde Haare und grune Augen. Sie ist Lehrerin. Meine Mutter ist freundlich und intelligent.

Meine Schwester heisst Lisa. Sie ist 12 Jahre alt. Sie hat lange, braune Haare. Lisa ist schuchtern aber sehr nett.

Am Wochenende spielen wir oft zusammen Spiele. Ich liebe meine Familie!`,
    },
    {
      id: 'tysk-1-3-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-1-3-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en presentasjon av din egen familie pa tysk (minst 8-10 setninger). Inkluder: familiestorrelse, minst to familiemedlemmer med navn, alder, utseende og personlighet.',
        solution: 'Se eksemplet i teksten for inspirasjon. Husk a bruke alle elementene: eiendomsord (mein/meine), verbet sein og haben, adjektiver for utseende og personlighet, og tall for alder.',
        hints: [
          'Begynn med "Meine Familie ist..."',
          'Beskriv hvert familiemedlem systematisk',
          'Bruk adjektiver for utseende og personlighet',
          'Avslutt med noe positivt om familien',
        ],
      },
    },
    {
      id: 'tysk-1-3-4-tip-1',
      type: 'tip',
      content: `Nar du skriver en lengre tekst pa tysk, bruk bindeord som **und** (og), **aber** (men), **auch** (ogsa) for a variere setningene.`,
    },
    {
      id: 'tysk-1-3-4-note-1',
      type: 'note',
      content: `**Gratulerer!** Du har na laert grunnleggende om hilsener, presentasjon, tall, farger og familie pa tysk. Ov pa a bruke disse kunnskapene i samtaler!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const TYSK_1_CHAPTERS_1_3: TextbookChapter[] = [
  CHAPTER_TYSK_1_1_1,
  CHAPTER_TYSK_1_1_2,
  CHAPTER_TYSK_1_1_3,
  CHAPTER_TYSK_1_1_4,
  CHAPTER_TYSK_1_2_1,
  CHAPTER_TYSK_1_2_2,
  CHAPTER_TYSK_1_2_3,
  CHAPTER_TYSK_1_2_4,
  CHAPTER_TYSK_1_3_1,
  CHAPTER_TYSK_1_3_2,
  CHAPTER_TYSK_1_3_3,
  CHAPTER_TYSK_1_3_4,
];
