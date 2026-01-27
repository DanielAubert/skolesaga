/* eslint-disable */
// @ts-nocheck
/**
 * Spansk nivå 1 - Tekstbokinnhold kapittel 4-6
 *
 * Dekker LK20 læreplan for fremmedspråk nivå 1
 * Struktur: teori → eksempel → oppgave (gjentatt)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 4: TIEMPO Y CALENDARIO (TID OG KALENDER)
// ============================================================================

// ----------------------------------------------------------------------------
// 4.1 La hora - Klokkeslettet
// ----------------------------------------------------------------------------

export const CHAPTER_SPANSK_1_4_1: TextbookChapter = {
  id: 'spansk-1-4-1',
  courseId: 'spansk-1',
  chapterNumber: '4.1',
  title: 'La hora',
  subtitle: 'Klokkeslettet',
  description: 'Lær å si hva klokken er på spansk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'uttrykke klokkeslett',
  ],
  content: [
    {
      id: 'spansk-1-4-1-intro',
      type: 'text',
      content: `## Klokkeslett på spansk

Å kunne si hva klokken er, er viktig i hverdagen. På spansk bruker vi verbet "ser" (å være) for å uttrykke klokkeslett.

**Spørre om klokken:**

| Spansk | Norsk |
|--------|-------|
| ¿Qué hora es? | Hva er klokka? |
| ¿A qué hora? | Når? / Klokka hva? |`,
    },
    {
      id: 'spansk-1-4-1-text-1',
      type: 'text',
      content: `## Hele timer

For å si hele timer bruker vi "Es la una" for klokka ett og "Son las ..." for alle andre:

| Klokka | Spansk |
|--------|--------|
| 1:00 | Es la una |
| 2:00 | Son las dos |
| 3:00 | Son las tres |
| 4:00 | Son las cuatro |
| 5:00 | Son las cinco |
| 6:00 | Son las seis |
| 7:00 | Son las siete |
| 8:00 | Son las ocho |
| 9:00 | Son las nueve |
| 10:00 | Son las diez |
| 11:00 | Son las once |
| 12:00 | Son las doce |

**Merk:** "Es la" brukes bare for klokka ett (entall). "Son las" brukes for alle andre klokkeslett (flertall).`,
    },
    {
      id: 'spansk-1-4-1-def-1',
      type: 'definition',
      title: 'Es la vs. Son las',
      content: `"Es la una" bruker entallsformen av verbet "ser" fordi "una" (én) er entall. Alle andre tall er flertall, derfor bruker vi "Son las" (de er).`,
    },
    {
      id: 'spansk-1-4-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Hele timer',
      problem: `Si på spansk:

a) Klokka er 3
b) Klokka er 7
c) Klokka er 1`,
      solution: `**Løsning:**

a) **Son las tres.**

b) **Son las siete.**

c) **Es la una.** (Husk: "Es la" for klokka ett!)`,
    },
    {
      id: 'spansk-1-4-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-4-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv klokkeslettet på spansk:',
        subTasks: [
          { label: 'a', task: '3:00', solution: 'Son las tres' },
          { label: 'b', task: '1:00', solution: 'Es la una' },
          { label: 'c', task: '8:00', solution: 'Son las ocho' },
          { label: 'd', task: '12:00', solution: 'Son las doce' },
        ],
        solution: 'a) Son las tres\nb) Es la una\nc) Son las ocho\nd) Son las doce',
        hints: ['Husk: Es la for 1, Son las for resten', 'Bruk tallene du har lært'],
      },
    },
    {
      id: 'spansk-1-4-1-text-2',
      type: 'text',
      content: `## Halv og kvart

For å uttrykke halv og kvart bruker vi spesielle uttrykk:

| Klokka | Spansk | Norsk |
|--------|--------|-------|
| 2:15 | Son las dos y cuarto | Kvart over to |
| 2:30 | Son las dos y media | Halv tre |
| 2:45 | Son las tres menos cuarto | Kvart på tre |

**Viktige begreper:**
- **y cuarto** = og kvart (kvart over)
- **y media** = og halv (halv)
- **menos cuarto** = minus kvart (kvart på)

**Merk:** På spansk sier man "klokka to og halv" (las dos y media) for 2:30, ikke "halv tre" som på norsk.`,
    },
    {
      id: 'spansk-1-4-1-warning-1',
      type: 'warning',
      content: `**Forskjell fra norsk:**

På norsk sier vi "halv tre" for 2:30 (halvveis til tre). På spansk sier vi "las dos y media" (to og en halv). Det er altså timen som har passert som nevnes, ikke den kommende timen!

- **2:30** = Son las dos y media (IKKE "las tres y media")
- **7:30** = Son las siete y media (IKKE "las ocho y media")`,
    },
    {
      id: 'spansk-1-4-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Halv og kvart',
      problem: `Si på spansk:

a) Klokka er kvart over fire (4:15)
b) Klokka er halv fem (4:30)
c) Klokka er kvart på seks (5:45)`,
      solution: `**Løsning:**

a) **Son las cuatro y cuarto.** (kvart over fire)

b) **Son las cuatro y media.** (fire og halv = halv fem)

c) **Son las seis menos cuarto.** (seks minus kvart = kvart på seks)`,
    },
    {
      id: 'spansk-1-4-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-4-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv klokkeslettet på spansk:',
        subTasks: [
          { label: 'a', task: '3:15', solution: 'Son las tres y cuarto' },
          { label: 'b', task: '6:30', solution: 'Son las seis y media' },
          { label: 'c', task: '8:45', solution: 'Son las nueve menos cuarto' },
          { label: 'd', task: '1:30', solution: 'Es la una y media' },
        ],
        solution: 'a) Son las tres y cuarto, b) Son las seis y media, c) Son las nueve menos cuarto, d) Es la una y media',
        hints: ['Kvart over = y cuarto', 'Halv = y media (timen som har passert)', 'Kvart på = menos cuarto (neste time)'],
      },
    },
    {
      id: 'spansk-1-4-1-text-3',
      type: 'text',
      content: `## Minutter

For andre minutter bruker vi "y" (over) og "menos" (på/minus):

| Klokka | Spansk |
|--------|--------|
| 3:05 | Son las tres y cinco |
| 3:10 | Son las tres y diez |
| 3:20 | Son las tres y veinte |
| 3:25 | Son las tres y veinticinco |
| 3:35 | Son las cuatro menos veinticinco |
| 3:40 | Son las cuatro menos veinte |
| 3:50 | Son las cuatro menos diez |
| 3:55 | Son las cuatro menos cinco |

**Regel:** Opp til 30 minutter bruker vi "y" (over). Over 30 minutter bruker vi "menos" (på/minus) med neste time.`,
    },
    {
      id: 'spansk-1-4-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Minutter',
      problem: `Si på spansk:

a) 4:10
b) 7:50
c) 9:25`,
      solution: `**Løsning:**

a) **Son las cuatro y diez.** (ti over fire)

b) **Son las ocho menos diez.** (ti på åtte)

c) **Son las nueve y veinticinco.** (tjuefem over ni)`,
    },
    {
      id: 'spansk-1-4-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-4-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva er klokka på norsk?',
        subTasks: [
          { label: 'a', task: 'Son las dos y media', solution: '2:30 (halv tre)' },
          { label: 'b', task: 'Son las once y cuarto', solution: '11:15 (kvart over elleve)' },
          { label: 'c', task: 'Son las seis menos veinte', solution: '5:40 (tjue på seks)' },
        ],
        solution: 'a) 2:30, b) 11:15, c) 5:40',
        hints: ['y media = og halv', 'y cuarto = og kvart', 'menos = minus/på'],
      },
    },
    {
      id: 'spansk-1-4-1-tip-1',
      type: 'tip',
      content: `**Tips for å huske klokkeslett:**

1. **Es la** = bare for klokka 1 (entall)
2. **Son las** = alle andre klokkeslett (flertall)
3. **y** = over/pluss (opp til 30 min)
4. **menos** = på/minus (over 30 min)
5. **y cuarto** = kvart over
6. **y media** = halv (timen som har vært!)
7. **menos cuarto** = kvart på`,
    },
    {
      id: 'spansk-1-4-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-4-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til spansk:',
        subTasks: [
          { label: 'a', task: 'Klokka er ti på tre (2:50)', solution: 'Son las tres menos diez' },
          { label: 'b', task: 'Klokka er kvart over ett (1:15)', solution: 'Es la una y cuarto' },
          { label: 'c', task: 'Klokka er fem over halv åtte (7:35)', solution: 'Son las ocho menos veinticinco' },
        ],
        solution: 'a) Son las tres menos diez, b) Es la una y cuarto, c) Son las ocho menos veinticinco',
        hints: ['Ti på tre = tre minus ti', 'Kvart over ett bruker Es la (entall)', 'Fem over halv åtte = åtte minus tjuefem'],
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 4.2 Los días de la semana - Ukedagene
// ----------------------------------------------------------------------------

export const CHAPTER_SPANSK_1_4_2: TextbookChapter = {
  id: 'spansk-1-4-2',
  courseId: 'spansk-1',
  chapterNumber: '4.2',
  title: 'Los días de la semana',
  subtitle: 'Ukedagene',
  description: 'Lær ukedagene på spansk og hvordan du bruker dem.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke ukedager i kommunikasjon',
  ],
  content: [
    {
      id: 'spansk-1-4-2-intro',
      type: 'text',
      content: `## Ukedagene på spansk

Ukedagene er viktige ord som du bruker hver dag. På spansk skrives ukedagene med liten forbokstav.

| Spansk | Norsk |
|--------|-------|
| lunes | mandag |
| martes | tirsdag |
| miércoles | onsdag |
| jueves | torsdag |
| viernes | fredag |
| sábado | lørdag |
| domingo | søndag |

**Merk:** Ukedagene skrives med liten forbokstav på spansk, i motsetning til norsk!`,
    },
    {
      id: 'spansk-1-4-2-note-1',
      type: 'note',
      content: `**Opprinnelsen til navnene:**

- **lunes** - Månens dag (Luna = månen)
- **martes** - Mars' dag (den romerske guden)
- **miércoles** - Merkurs dag
- **jueves** - Jupiters dag
- **viernes** - Venus' dag
- **sábado** - Fra hebraisk sabbat
- **domingo** - Herrens dag (Dominus = herre)`,
    },
    {
      id: 'spansk-1-4-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Ukedagene',
      problem: `Si på spansk:

a) mandag
b) onsdag
c) lørdag`,
      solution: `**Løsning:**

a) **lunes**

b) **miércoles**

c) **sábado**`,
    },
    {
      id: 'spansk-1-4-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-4-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv ukedagene på spansk:',
        subTasks: [
          { label: 'a', task: 'tirsdag', solution: 'martes' },
          { label: 'b', task: 'torsdag', solution: 'jueves' },
          { label: 'c', task: 'fredag', solution: 'viernes' },
          { label: 'd', task: 'søndag', solution: 'domingo' },
        ],
        solution: 'a) martes, b) jueves, c) viernes, d) domingo',
        hints: ['Skrives med liten forbokstav', 'Torsdag = jueves (Jupiters dag)'],
      },
    },
    {
      id: 'spansk-1-4-2-text-1',
      type: 'text',
      content: `## Bruke ukedagene i setninger

For å si "på mandag" bruker vi artikkelen **el** (bestemt entall) eller **los** (bestemt flertall):

| Spansk | Norsk |
|--------|-------|
| el lunes | på mandag (en bestemt mandag) |
| los lunes | på mandager (hver mandag) |
| el fin de semana | i helgen |
| los fines de semana | i helgene |

**Eksempler:**
- El lunes tengo español. (På mandag har jeg spansk.)
- Los viernes juego al fútbol. (På fredager spiller jeg fotball.)`,
    },
    {
      id: 'spansk-1-4-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Setninger med ukedager',
      problem: `Oversett til spansk:

a) På tirsdag har jeg matematikk.
b) På lørdager spiser vi pizza.`,
      solution: `**Løsning:**

a) **El martes tengo matemáticas.**

b) **Los sábados comemos pizza.**`,
    },
    {
      id: 'spansk-1-4-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-4-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk:',
        subTasks: [
          { label: 'a', task: 'På onsdag har jeg engelsk.', solution: 'El miércoles tengo inglés.' },
          { label: 'b', task: 'På søndager sover jeg lenge.', solution: 'Los domingos duermo mucho.' },
          { label: 'c', task: 'I helgen reiser vi.', solution: 'El fin de semana viajamos.' },
        ],
        solution: 'a) El miércoles tengo inglés. b) Los domingos duermo mucho. c) El fin de semana viajamos.',
        hints: ['Bruk "el" + ukedag for en bestemt dag', 'Bruk "los" + ukedag for hver uke'],
      },
    },
    {
      id: 'spansk-1-4-2-text-2',
      type: 'text',
      content: `## Spørre om hvilken dag

| Spansk | Norsk |
|--------|-------|
| ¿Qué día es hoy? | Hvilken dag er det i dag? |
| Hoy es lunes. | I dag er det mandag. |
| Mañana es martes. | I morgen er det tirsdag. |
| Ayer fue domingo. | I går var det søndag. |

**Nyttige tidsuttrykk:**

| Spansk | Norsk |
|--------|-------|
| hoy | i dag |
| mañana | i morgen |
| ayer | i går |
| pasado mañana | i overmorgen |`,
    },
    {
      id: 'spansk-1-4-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Spørre om dagen',
      problem: `Svar på spansk (i dag er onsdag):

a) ¿Qué día es hoy?
b) ¿Qué día es mañana?
c) ¿Qué día fue ayer?`,
      solution: `**Løsning:**

a) **Hoy es miércoles.** (I dag er det onsdag.)

b) **Mañana es jueves.** (I morgen er det torsdag.)

c) **Ayer fue martes.** (I går var det tirsdag.)`,
    },
    {
      id: 'spansk-1-4-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-4-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar på spansk (i dag er fredag):',
        subTasks: [
          { label: 'a', task: 'Hvilken dag er det i dag?', solution: 'Hoy es viernes.' },
          { label: 'b', task: 'Hvilken dag er det i morgen?', solution: 'Mañana es sábado.' },
          { label: 'c', task: 'Hvilken dag var det i går?', solution: 'Ayer fue jueves.' },
        ],
        solution: 'a) Hoy es viernes. b) Mañana es sábado. c) Ayer fue jueves.',
        hints: ['hoy = i dag', 'mañana = i morgen', 'ayer = i går'],
      },
    },
    {
      id: 'spansk-1-4-2-tip-1',
      type: 'tip',
      content: `**Huskeregel:**

- **el** + ukedag = en bestemt dag (el lunes = på mandag)
- **los** + ukedag = fast dag (los lunes = på mandager)
- Ukedagene er **hankjønn** (el/los)
- Lørdag og søndag får **-s** i flertall: los sábados, los domingos
- Mandag til fredag er like i entall og flertall: el lunes / los lunes`,
    },
    {
      id: 'spansk-1-4-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-4-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til spansk:',
        subTasks: [
          { label: 'a', task: 'På mandager har jeg spansk.', solution: 'Los lunes tengo español.' },
          { label: 'b', task: 'På lørdag skal vi på kino.', solution: 'El sábado vamos al cine.' },
          { label: 'c', task: 'Hvilken dag er det i dag? I dag er det torsdag.', solution: '¿Qué día es hoy? Hoy es jueves.' },
        ],
        solution: 'a) Los lunes tengo español. b) El sábado vamos al cine. c) ¿Qué día es hoy? Hoy es jueves.',
        hints: ['Fast dag = los + ukedag', 'Bestemt dag = el + ukedag', 'vamos al cine = vi går på kino'],
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 4.3 Meses y estaciones - Måneder og årstider
// ----------------------------------------------------------------------------

export const CHAPTER_SPANSK_1_4_3: TextbookChapter = {
  id: 'spansk-1-4-3',
  courseId: 'spansk-1',
  chapterNumber: '4.3',
  title: 'Meses y estaciones',
  subtitle: 'Måneder og årstider',
  description: 'Lær månedene og årstidene på spansk.',
  estimatedMinutes: 40,
  competenceGoals: [
    'uttrykke datoer og årstider',
  ],
  content: [
    {
      id: 'spansk-1-4-3-intro',
      type: 'text',
      content: `## Månedene på spansk

Månedene på spansk ligner på de norske. De skrives med liten forbokstav:

| Spansk | Norsk |
|--------|-------|
| enero | januar |
| febrero | februar |
| marzo | mars |
| abril | april |
| mayo | mai |
| junio | juni |
| julio | juli |
| agosto | august |
| septiembre | september |
| octubre | oktober |
| noviembre | november |
| diciembre | desember |

**Merk:** Månedene skrives med liten forbokstav på spansk!`,
    },
    {
      id: 'spansk-1-4-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Månedene',
      problem: `Si på spansk:

a) mars
b) august
c) desember`,
      solution: `**Løsning:**

a) **marzo**

b) **agosto**

c) **diciembre**`,
    },
    {
      id: 'spansk-1-4-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-4-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv månedene på spansk:',
        subTasks: [
          { label: 'a', task: 'januar', solution: 'enero' },
          { label: 'b', task: 'mai', solution: 'mayo' },
          { label: 'c', task: 'juli', solution: 'julio' },
          { label: 'd', task: 'oktober', solution: 'octubre' },
        ],
        solution: 'a) enero, b) mayo, c) julio, d) octubre',
        hints: ['Liten forbokstav', 'Ligner på norsk'],
      },
    },
    {
      id: 'spansk-1-4-3-text-1',
      type: 'text',
      content: `## Årstidene

| Spansk | Norsk |
|--------|-------|
| la primavera | våren |
| el verano | sommeren |
| el otoño | høsten |
| el invierno | vinteren |

**Måneder i hver årstid:**
- **La primavera:** marzo, abril, mayo
- **El verano:** junio, julio, agosto
- **El otoño:** septiembre, octubre, noviembre
- **El invierno:** diciembre, enero, febrero`,
    },
    {
      id: 'spansk-1-4-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Årstider',
      problem: `Si på spansk:

a) Sommeren er varm.
b) Om vinteren snør det.`,
      solution: `**Løsning:**

a) **El verano es caluroso.**

b) **En invierno nieva.**`,
    },
    {
      id: 'spansk-1-4-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-4-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv årstidene på spansk:',
        subTasks: [
          { label: 'a', task: 'våren', solution: 'la primavera' },
          { label: 'b', task: 'sommeren', solution: 'el verano' },
          { label: 'c', task: 'høsten', solution: 'el otoño' },
          { label: 'd', task: 'vinteren', solution: 'el invierno' },
        ],
        solution: 'a) la primavera, b) el verano, c) el otoño, d) el invierno',
        hints: ['Bare primavera er hunkjønn (la)', 'De andre er hankjønn (el)'],
      },
    },
    {
      id: 'spansk-1-4-3-text-2',
      type: 'text',
      content: `## Datoer og bursdag

For å si en dato bruker vi mønsteret: **el + tall + de + måned**

| Spansk | Norsk |
|--------|-------|
| el quince de mayo | 15. mai |
| el tres de marzo | 3. mars |
| el veinticinco de diciembre | 25. desember |

**Bursdag:**

| Spansk | Norsk |
|--------|-------|
| ¿Cuándo es tu cumpleaños? | Når er bursdagen din? |
| Mi cumpleaños es el diez de julio. | Bursdagen min er 10. juli. |
| ¡Feliz cumpleaños! | Gratulerer med dagen! |

**For å si "i januar":** en enero
**For å si "om sommeren":** en verano`,
    },
    {
      id: 'spansk-1-4-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Bursdag',
      problem: `Si på spansk:

a) Bursdagen min er 20. mars.
b) Når er bursdagen din?`,
      solution: `**Løsning:**

a) **Mi cumpleaños es el veinte de marzo.**

b) **¿Cuándo es tu cumpleaños?**`,
    },
    {
      id: 'spansk-1-4-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-4-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk:',
        subTasks: [
          { label: 'a', task: 'Bursdagen min er 5. juni.', solution: 'Mi cumpleaños es el cinco de junio.' },
          { label: 'b', task: 'Om våren blomstrer trærne.', solution: 'En primavera florecen los árboles.' },
          { label: 'c', task: 'I desember feirer vi jul.', solution: 'En diciembre celebramos la Navidad.' },
        ],
        solution: 'a) Mi cumpleaños es el cinco de junio. b) En primavera florecen los árboles. c) En diciembre celebramos la Navidad.',
        hints: ['Bruk "en" + måned/årstid', 'Navidad = jul'],
      },
    },
    {
      id: 'spansk-1-4-3-tip-1',
      type: 'tip',
      content: `**Nyttige ord:**

| Spansk | Norsk |
|--------|-------|
| el cumpleaños | bursdagen |
| ¿Cuándo? | Når? |
| el año | året |
| la semana | uka |
| el mes | måneden |`,
    },
    {
      id: 'spansk-1-4-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-4-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv datoene på spansk:',
        subTasks: [
          { label: 'a', task: '1. januar', solution: 'el uno de enero / el primero de enero' },
          { label: 'b', task: '14. februar', solution: 'el catorce de febrero' },
          { label: 'c', task: '17. mai', solution: 'el diecisiete de mayo' },
        ],
        solution: 'a) el primero de enero, b) el catorce de febrero, c) el diecisiete de mayo',
        hints: ['Bruk el + tall + de + måned', 'For 1. kan man bruke "primero"', '17 = diecisiete'],
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 4.4 Mi rutina diaria - Min dagsrutine
// ----------------------------------------------------------------------------

export const CHAPTER_SPANSK_1_4_4: TextbookChapter = {
  id: 'spansk-1-4-4',
  courseId: 'spansk-1',
  chapterNumber: '4.4',
  title: 'Mi rutina diaria',
  subtitle: 'Min dagsrutine',
  description: 'Lær å fortelle om din daglige rutine på spansk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive daglige rutiner',
  ],
  content: [
    {
      id: 'spansk-1-4-4-intro',
      type: 'text',
      content: `## Daglige aktiviteter

Her er vanlige aktiviteter i løpet av en dag:

| Spansk | Norsk |
|--------|-------|
| levantarse | å stå opp |
| ducharse | å dusje |
| desayunar | å spise frokost |
| ir al colegio | å gå på skolen |
| comer | å spise lunsj |
| estudiar | å studere |
| hacer los deberes | å gjøre lekser |
| cenar | å spise middag |
| ver la televisión | å se på TV |
| acostarse | å legge seg |

**Merk:** Verb som "levantarse", "ducharse" og "acostarse" er refleksive verb. De har "-se" på slutten i infinitiv.`,
    },
    {
      id: 'spansk-1-4-4-def-1',
      type: 'definition',
      title: 'Refleksive verb',
      content: `Refleksive verb beskriver handlinger man gjør med seg selv. De bøyes med refleksive pronomen: me (meg), te (deg), se (seg). Eksempel: "Me levanto" = Jeg reiser meg opp / Jeg står opp.`,
    },
    {
      id: 'spansk-1-4-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Morgenrutine',
      problem: `Si på spansk:

a) Jeg står opp klokka 7.
b) Jeg spiser frokost.
c) Jeg går på skolen.`,
      solution: `**Løsning:**

a) **Me levanto a las siete.**

b) **Desayuno.**

c) **Voy al colegio.**`,
    },
    {
      id: 'spansk-1-4-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-4-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til spansk:',
        subTasks: [
          { label: 'a', task: 'Jeg dusjer.', solution: 'Me ducho.' },
          { label: 'b', task: 'Jeg spiser lunsj.', solution: 'Como.' },
          { label: 'c', task: 'Jeg ser på TV.', solution: 'Veo la televisión.' },
        ],
        solution: 'a) Me ducho. b) Como. c) Veo la televisión.',
        hints: ['ducharse er refleksivt: me ducho', 'comer = å spise', 'ver = å se'],
      },
    },
    {
      id: 'spansk-1-4-4-text-1',
      type: 'text',
      content: `## Tidsuttrykk i løpet av dagen

| Spansk | Norsk |
|--------|-------|
| por la mañana | om morgenen |
| por la tarde | om ettermiddagen |
| por la noche | om kvelden |
| a las siete | klokka syv |
| temprano | tidlig |
| tarde | sent |
| primero | først |
| luego / después | så / deretter |

**Eksempler med klokkeslett:**
- Me levanto a las siete de la mañana. (Jeg står opp klokka syv om morgenen.)
- Como a las dos de la tarde. (Jeg spiser klokka to om ettermiddagen.)
- Me acuesto a las diez de la noche. (Jeg legger meg klokka ti om kvelden.)`,
    },
    {
      id: 'spansk-1-4-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Tid på dagen',
      problem: `Si på spansk:

a) Om morgenen spiser jeg frokost.
b) Om ettermiddagen gjør jeg lekser.`,
      solution: `**Løsning:**

a) **Por la mañana desayuno.**

b) **Por la tarde hago los deberes.**`,
    },
    {
      id: 'spansk-1-4-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-4-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk:',
        subTasks: [
          { label: 'a', task: 'Jeg står opp klokka seks om morgenen.', solution: 'Me levanto a las seis de la mañana.' },
          { label: 'b', task: 'Om kvelden ser jeg på TV.', solution: 'Por la noche veo la televisión.' },
          { label: 'c', task: 'Jeg legger meg klokka ti.', solution: 'Me acuesto a las diez.' },
        ],
        solution: 'a) Me levanto a las seis de la mañana. b) Por la noche veo la televisión. c) Me acuesto a las diez.',
        hints: ['Bruk "a las" + klokkeslett', 'acostarse bøyes: me acuesto'],
      },
    },
    {
      id: 'spansk-1-4-4-text-2',
      type: 'text',
      content: `## Beskrive en hel dag

For å beskrive en hel dag setter vi aktivitetene sammen med tidsuttrykk:

**Nyttige koblingsord:**

| Spansk | Norsk |
|--------|-------|
| primero | først |
| luego | så |
| después | deretter |
| más tarde | senere |
| por último | til slutt |
| también | også |

**Eksempel på en dagsrutine:**

Primero me levanto a las siete. Luego me ducho y desayuno. Después voy al colegio. Por la tarde hago los deberes. Por la noche ceno y veo la televisión. Por último me acuesto a las diez.`,
    },
    {
      id: 'spansk-1-4-4-example-3',
      type: 'example',
      title: 'Eksempel 3: En hel dag',
      problem: `Beskriv din dag på spansk med minst 4 aktiviteter.`,
      solution: `**Eksempel på løsning:**

Me levanto a las siete de la mañana. Primero me ducho. Luego desayuno. A las ocho voy al colegio. Por la tarde hago los deberes. Por la noche ceno con mi familia. Después veo la televisión. Me acuesto a las diez.

(Jeg står opp klokka syv om morgenen. Først dusjer jeg. Så spiser jeg frokost. Klokka åtte går jeg på skolen. Om ettermiddagen gjør jeg lekser. Om kvelden spiser jeg middag med familien min. Deretter ser jeg på TV. Jeg legger meg klokka ti.)`,
    },
    {
      id: 'spansk-1-4-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-4-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk:',
        subTasks: [
          { label: 'a', task: 'Om morgenen spiser jeg frokost.', solution: 'Por la mañana desayuno.' },
          { label: 'b', task: 'Først dusjer jeg, så kler jeg på meg.', solution: 'Primero me ducho, luego me visto.' },
          { label: 'c', task: 'Om kvelden legger jeg meg klokka ti.', solution: 'Por la noche me acuesto a las diez.' },
        ],
        solution: 'a) Por la mañana desayuno. b) Primero me ducho, luego me visto. c) Por la noche me acuesto a las diez.',
        hints: ['Bruk tidsuttrykk i begynnelsen', 'primero = først, luego = så'],
      },
    },
    {
      id: 'spansk-1-4-4-tip-1',
      type: 'tip',
      content: `**Tips for å fortelle om dagen din:**

1. Begynn med når du står opp
2. Bruk koblingsord som "primero", "luego", "después"
3. Husk refleksive pronomen (me levanto, me ducho, me acuesto)
4. Avslutt med når du legger deg`,
    },
    {
      id: 'spansk-1-4-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-4-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sett setningene i riktig rekkefølge og oversett til spansk:',
        subTasks: [
          { label: 'a', task: 'Jeg spiser middag klokka seks.', solution: 'Ceno a las seis.' },
          { label: 'b', task: 'Klokka åtte går jeg på skolen.', solution: 'A las ocho voy al colegio.' },
          { label: 'c', task: 'Jeg gjør lekser om ettermiddagen.', solution: 'Por la tarde hago los deberes.' },
        ],
        solution: 'a) Ceno a las seis. b) A las ocho voy al colegio. c) Por la tarde hago los deberes.',
        hints: ['cenar = å spise middag', 'ir al colegio = å gå på skolen', 'hacer los deberes = å gjøre lekser'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5: COMIDA Y RESTAURANTE (MAT OG RESTAURANT)
// ============================================================================

// ----------------------------------------------------------------------------
// 5.1 La comida y bebida - Mat og drikke
// ----------------------------------------------------------------------------

export const CHAPTER_SPANSK_1_5_1: TextbookChapter = {
  id: 'spansk-1-5-1',
  courseId: 'spansk-1',
  chapterNumber: '5.1',
  title: 'La comida y bebida',
  subtitle: 'Mat og drikke',
  description: 'Lær grunnleggende ord for mat og drikke på spansk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'snakke om mat og måltider',
  ],
  content: [
    {
      id: 'spansk-1-5-1-intro',
      type: 'text',
      content: `## Mat på spansk

Mat er en viktig del av spansk kultur! Her er grunnleggende matvarer:

**Brød og meieriprodukter:**

| Spansk | Norsk |
|--------|-------|
| el pan | brød |
| el queso | ost |
| la mantequilla | smør |
| el yogur | yoghurt |
| el huevo | egg |`,
    },
    {
      id: 'spansk-1-5-1-text-1',
      type: 'text',
      content: `## Kjøtt og fisk

| Spansk | Norsk |
|--------|-------|
| la carne | kjøtt |
| el pollo | kylling |
| el jamón | skinke |
| el pescado | fisk |
| la ternera | kalvekjøtt |
| el cerdo | svinekjøtt |

## Frukt og grønnsaker

| Spansk | Norsk |
|--------|-------|
| la manzana | eple |
| la naranja | appelsin |
| el plátano | banan |
| la fresa | jordbær |
| el tomate | tomat |
| la patata | potet |
| la lechuga | salat (grønn) |
| la cebolla | løk |`,
    },
    {
      id: 'spansk-1-5-1-def-1',
      type: 'definition',
      title: 'Artikler med matvarer',
      content: `Alle substantiv på spansk har kjønn. Mat som ender på -a er vanligvis hunkjønn (la): la manzana, la naranja, la patata. Mat som ender på -o er vanligvis hankjønn (el): el queso, el pollo. Det finnes unntak, f.eks. "el agua" (vann) som er hankjønn selv om det ender på -a.`,
    },
    {
      id: 'spansk-1-5-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Matord',
      problem: `Si på spansk med riktig artikkel:

a) brød
b) ost
c) eple`,
      solution: `**Løsning:**

a) **el pan**

b) **el queso**

c) **la manzana**`,
    },
    {
      id: 'spansk-1-5-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-5-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv på spansk med artikkel:',
        subTasks: [
          { label: 'a', task: 'skinke', solution: 'el jamón' },
          { label: 'b', task: 'kylling', solution: 'el pollo' },
          { label: 'c', task: 'tomat', solution: 'el tomate' },
          { label: 'd', task: 'appelsin', solution: 'la naranja' },
        ],
        solution: 'a) el jamón, b) el pollo, c) el tomate, d) la naranja',
        hints: ['Hankjønn = el', 'Hunkjønn = la', 'De fleste ord på -a er hunkjønn'],
      },
    },
    {
      id: 'spansk-1-5-1-text-2',
      type: 'text',
      content: `## Drikke (Las bebidas)

| Spansk | Norsk |
|--------|-------|
| el agua | vann |
| la leche | melk |
| el zumo (de naranja) | (appelsin)juice |
| el café | kaffe |
| el té | te |
| el refresco | brus |

## Måltider (Las comidas)

| Spansk | Norsk |
|--------|-------|
| el desayuno | frokost |
| el almuerzo / la comida | lunsj |
| la merienda | mellommåltid |
| la cena | middag/kveldsmat |

**Merk:** I Spania er "la comida" (lunsj) det største måltidet, og det spises rundt kl. 14:00.`,
    },
    {
      id: 'spansk-1-5-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Me gusta / Me gustan',
      problem: `"Me gusta" (jeg liker) brukes med entall, og "me gustan" med flertall:

a) Jeg liker ost.
b) Jeg liker epler.
c) Jeg liker ikke fisk.`,
      solution: `**Løsning:**

a) **Me gusta el queso.** (entall = gusta)

b) **Me gustan las manzanas.** (flertall = gustan)

c) **No me gusta el pescado.** ("no" foran for nektelse)`,
    },
    {
      id: 'spansk-1-5-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-5-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk med "me gusta" eller "me gustan":',
        subTasks: [
          { label: 'a', task: 'Jeg liker kaffe.', solution: 'Me gusta el café.' },
          { label: 'b', task: 'Jeg liker jordbær.', solution: 'Me gustan las fresas.' },
          { label: 'c', task: 'Jeg liker ikke løk.', solution: 'No me gusta la cebolla.' },
        ],
        solution: 'a) Me gusta el café. b) Me gustan las fresas. c) No me gusta la cebolla.',
        hints: ['Entall = me gusta', 'Flertall = me gustan', 'Nektelse: no foran me gusta'],
      },
    },
    {
      id: 'spansk-1-5-1-text-3',
      type: 'text',
      content: `## Andre nyttige uttrykk om mat

| Spansk | Norsk |
|--------|-------|
| Tengo hambre. | Jeg er sulten. |
| Tengo sed. | Jeg er tørst. |
| ¿Qué quieres comer? | Hva vil du spise? |
| ¿Qué quieres beber? | Hva vil du drikke? |
| Quiero... | Jeg vil ha... |
| Es delicioso. | Det er deilig. |
| Es rico/a. | Det er godt. |
| No me gusta. | Jeg liker det ikke. |

**Merk:** På spansk sier man "Tengo hambre" (Jeg har sult) i stedet for "Jeg er sulten".`,
    },
    {
      id: 'spansk-1-5-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Samtale om mat',
      problem: `Oversett dialogen:

A: Jeg er sulten. Hva vil du spise?
B: Jeg vil ha kylling med ris.`,
      solution: `**Løsning:**

A: **Tengo hambre. ¿Qué quieres comer?**

B: **Quiero pollo con arroz.**`,
    },
    {
      id: 'spansk-1-5-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-5-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk:',
        subTasks: [
          { label: 'a', task: 'Jeg er sulten.', solution: 'Tengo hambre.' },
          { label: 'b', task: 'Jeg vil ha brød med ost.', solution: 'Quiero pan con queso.' },
          { label: 'c', task: 'Det er deilig!', solution: '¡Es delicioso!' },
        ],
        solution: 'a) Tengo hambre. b) Quiero pan con queso. c) ¡Es delicioso!',
        hints: ['Tengo hambre = Jeg har sult', 'con = med', 'delicioso = deilig'],
      },
    },
    {
      id: 'spansk-1-5-1-tip-1',
      type: 'tip',
      content: `**Tips om mat og artikler:**

1. **el** brukes med de fleste matvarer på -o: el queso, el pollo
2. **la** brukes med de fleste på -a: la manzana, la naranja
3. Unntak: **el agua** (vann) er hankjønn
4. Flertall: las manzanas, los tomates
5. **con** = med: pan con queso (brød med ost)`,
    },
    {
      id: 'spansk-1-5-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-5-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv hva du liker og ikke liker å spise og drikke:',
        subTasks: [
          { label: 'a', task: 'Si at du liker kylling.', solution: 'Me gusta el pollo.' },
          { label: 'b', task: 'Si at du liker bananer og jordbær.', solution: 'Me gustan los plátanos y las fresas.' },
          { label: 'c', task: 'Si at du ikke liker melk.', solution: 'No me gusta la leche.' },
        ],
        solution: 'a) Me gusta el pollo. b) Me gustan los plátanos y las fresas. c) No me gusta la leche.',
        hints: ['Entall: me gusta + el/la', 'Flertall: me gustan + los/las', 'y = og'],
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 5.2 En el restaurante - På restauranten
// ----------------------------------------------------------------------------

export const CHAPTER_SPANSK_1_5_2: TextbookChapter = {
  id: 'spansk-1-5-2',
  courseId: 'spansk-1',
  chapterNumber: '5.2',
  title: 'En el restaurante',
  subtitle: 'På restauranten',
  description: 'Lær å bestille mat og drikke på en spansk restaurant.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kommunisere i enkle hverdagssituasjoner',
  ],
  content: [
    {
      id: 'spansk-1-5-2-intro',
      type: 'text',
      content: `## På restauranten

Å kunne bestille mat på en restaurant er nyttig når du reiser til spansktalende land. Her er de viktigste uttrykkene:

| Spansk | Norsk |
|--------|-------|
| ¿Qué desea? | Hva ønsker du/De? |
| ¿Qué van a tomar? | Hva skal dere ha? |
| Quiero... | Jeg vil ha... |
| Quisiera... | Jeg vil gjerne ha... (høflig) |
| Para mí... | Til meg... |
| ¿Tienen...? | Har dere...? |
| ¿Me trae...? | Kan du bringe meg...? |`,
    },
    {
      id: 'spansk-1-5-2-text-1',
      type: 'text',
      content: `## Restaurantvokabular

| Spansk | Norsk |
|--------|-------|
| el menú / la carta | menyen |
| el plato del día | dagens rett |
| el primer plato | forrett |
| el segundo plato | hovedrett |
| el postre | dessert |
| la bebida | drikke |
| el camarero / la camarera | kelneren |
| la mesa | bordet |
| la cuenta | regningen |
| la propina | tips (drikkepenger) |

**Nyttige uttrykk:**

| Spansk | Norsk |
|--------|-------|
| La cuenta, por favor. | Regningen, takk. |
| ¿Cuánto es? | Hvor mye er det? |
| ¿Está incluida la propina? | Er tips inkludert? |`,
    },
    {
      id: 'spansk-1-5-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Bestille mat',
      problem: `Oversett til spansk:

a) Menyen, takk.
b) Jeg vil gjerne ha dagens rett.
c) Til meg en salat, takk.`,
      solution: `**Løsning:**

a) **La carta, por favor.**

b) **Quisiera el plato del día.**

c) **Para mí una ensalada, por favor.**`,
    },
    {
      id: 'spansk-1-5-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-5-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til spansk:',
        subTasks: [
          { label: 'a', task: 'Regningen, takk.', solution: 'La cuenta, por favor.' },
          { label: 'b', task: 'Jeg vil ha vann.', solution: 'Quiero agua.' },
          { label: 'c', task: 'Har dere pizza?', solution: '¿Tienen pizza?' },
        ],
        solution: 'a) La cuenta, por favor. b) Quiero agua. c) ¿Tienen pizza?',
        hints: ['la cuenta = regningen', 'quiero = jeg vil ha', '¿Tienen...? = Har dere...?'],
      },
    },
    {
      id: 'spansk-1-5-2-text-2',
      type: 'text',
      content: `## Dialog på restaurant

Her er en typisk dialog på en spansk restaurant:

**Kelner:** ¡Buenas tardes! ¿Qué van a tomar?
**Gjest 1:** De primero, quisiera una sopa. De segundo, pollo con patatas.
**Kelner:** ¿Y para beber?
**Gjest 1:** Un agua mineral, por favor.
**Kelner:** ¿Y usted?
**Gjest 2:** Para mí una ensalada y un filete con arroz. Y un zumo de naranja.
**Kelner:** Muy bien. ¿Desean postre?
**Gjest 1:** Sí, un flan, por favor.
**Gjest 2:** No, gracias. La cuenta, por favor.
**Kelner:** Son veinticinco euros en total.

**Nyttige uttrykk fra dialogen:**
- "De primero..." = Som forrett...
- "De segundo..." = Som hovedrett...
- "¿Desean postre?" = Ønsker dere dessert?`,
    },
    {
      id: 'spansk-1-5-2-example-2',
      type: 'example',
      title: 'Eksempel 2: På restauranten',
      problem: `Oversett til spansk:

a) Som forrett vil jeg ha suppe.
b) Som hovedrett vil jeg ha fisk med ris.
c) Ønsker du dessert?`,
      solution: `**Løsning:**

a) **De primero quiero sopa.**

b) **De segundo quiero pescado con arroz.**

c) **¿Deseas postre?** (uformelt) / **¿Desea postre?** (formelt)`,
    },
    {
      id: 'spansk-1-5-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-5-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk:',
        subTasks: [
          { label: 'a', task: 'Som forrett vil jeg ha salat.', solution: 'De primero quiero ensalada.' },
          { label: 'b', task: 'Og for å drikke, en kaffe.', solution: 'Y para beber, un café.' },
          { label: 'c', task: 'Hvor mye er det?', solution: '¿Cuánto es?' },
        ],
        solution: 'a) De primero quiero ensalada. b) Y para beber, un café. c) ¿Cuánto es?',
        hints: ['de primero = som forrett', 'para beber = for å drikke', 'cuánto = hvor mye'],
      },
    },
    {
      id: 'spansk-1-5-2-note-1',
      type: 'note',
      content: `**Restaurantkultur i Spania:**

- I Spania spiser man **lunsj (la comida)** rundt kl. 14:00-15:00 og **middag (la cena)** rundt kl. 21:00-22:00.
- Brød serveres ofte gratis til måltidet.
- Tips er ikke obligatorisk, men det er vanlig å etterlate noen mynter.
- "El menú del día" (dagens meny) er ofte et billig alternativ med forrett, hovedrett, dessert og drikke inkludert.`,
    },
    {
      id: 'spansk-1-5-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Klage og ros',
      problem: `Oversett til spansk:

a) Maten er veldig god!
b) Kan jeg få mer brød?
c) Regningen, takk.`,
      solution: `**Løsning:**

a) **¡La comida está muy buena!**

b) **¿Me trae más pan, por favor?**

c) **La cuenta, por favor.**`,
    },
    {
      id: 'spansk-1-5-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-5-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva sier du på spansk i disse situasjonene?',
        subTasks: [
          { label: 'a', task: 'Du vil ha menyen.', solution: 'La carta, por favor.' },
          { label: 'b', task: 'Du vil bestille dagens rett.', solution: 'Quisiera el plato del día.' },
          { label: 'c', task: 'Du vil betale.', solution: 'La cuenta, por favor.' },
        ],
        solution: 'a) La carta, por favor. b) Quisiera el plato del día. c) La cuenta, por favor.',
        hints: ['la carta = menyen', 'el plato del día = dagens rett', 'la cuenta = regningen'],
      },
    },
    {
      id: 'spansk-1-5-2-tip-1',
      type: 'tip',
      content: `**Tips for restaurantbesøk:**

1. Bruk **"Quisiera..."** (Jeg vil gjerne ha...) - det er mer høflig enn "Quiero..."
2. Si alltid **"por favor"** (takk/vær så snill) når du bestiller
3. **"De primero..."** og **"de segundo..."** brukes for å bestille forrett og hovedrett
4. Husk at måltidene i Spania er mye senere enn i Norge!`,
    },
    {
      id: 'spansk-1-5-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-5-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort restaurantdialog på spansk:',
        subTasks: [
          { label: 'a', task: 'Kelneren spør hva du vil ha.', solution: '¿Qué desea? / ¿Qué va a tomar?' },
          { label: 'b', task: 'Du bestiller kylling med salat og vann.', solution: 'Quisiera pollo con ensalada y un agua, por favor.' },
          { label: 'c', task: 'Du ber om regningen.', solution: 'La cuenta, por favor. ¿Cuánto es?' },
        ],
        solution: 'a) ¿Qué desea? b) Quisiera pollo con ensalada y un agua, por favor. c) La cuenta, por favor. ¿Cuánto es?',
        hints: ['¿Qué desea? = Hva ønsker De?', 'Quisiera = Jeg vil gjerne ha', '¿Cuánto es? = Hvor mye er det?'],
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 5.3 En el supermercado - På butikken
// ----------------------------------------------------------------------------

export const CHAPTER_SPANSK_1_5_3: TextbookChapter = {
  id: 'spansk-1-5-3',
  courseId: 'spansk-1',
  chapterNumber: '5.3',
  title: 'En el supermercado',
  subtitle: 'På butikken',
  description: 'Lær å handle og kommunisere i en spansk butikk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'handle og kommunisere i butikk',
  ],
  content: [
    {
      id: 'spansk-1-5-3-intro',
      type: 'text',
      content: `## Å handle på spansk

Å handle mat er en hverdagslig aktivitet. Her er viktige ord og uttrykk for butikken:

| Spansk | Norsk |
|--------|-------|
| la tienda | butikken |
| el supermercado | supermarkedet |
| el mercado | markedet |
| la panadería | bakeriet |
| la carnicería | slakterbutikken |
| la frutería | fruktbutikken |
| la pescadería | fiskebutikken |
| comprar | å kjøpe |
| vender | å selge |`,
    },
    {
      id: 'spansk-1-5-3-text-1',
      type: 'text',
      content: `## Mengdeord

For å si hvor mye du vil ha, bruker vi mengdeord med "de":

| Spansk | Norsk |
|--------|-------|
| un kilo de | en kilo ... |
| medio kilo de | en halv kilo ... |
| una botella de | en flaske ... |
| un litro de | en liter ... |
| un paquete de | en pakke ... |
| una lata de | en boks ... |
| una docena de | et dusin ... |
| un trozo de | et stykke ... |

**Eksempler:**
- un kilo de manzanas (en kilo epler)
- una botella de agua (en flaske vann)
- un paquete de arroz (en pakke ris)`,
    },
    {
      id: 'spansk-1-5-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Mengder',
      problem: `Si på spansk:

a) en kilo poteter
b) en flaske melk
c) en pakke pasta`,
      solution: `**Løsning:**

a) **un kilo de patatas**

b) **una botella de leche**

c) **un paquete de pasta**`,
    },
    {
      id: 'spansk-1-5-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-5-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv på spansk:',
        subTasks: [
          { label: 'a', task: 'en kilo appelsiner', solution: 'un kilo de naranjas' },
          { label: 'b', task: 'en liter melk', solution: 'un litro de leche' },
          { label: 'c', task: 'en flaske vann', solution: 'una botella de agua' },
          { label: 'd', task: 'en boks tunfisk', solution: 'una lata de atún' },
        ],
        solution: 'a) un kilo de naranjas, b) un litro de leche, c) una botella de agua, d) una lata de atún',
        hints: ['Bruk mengdeord + de + vare', 'Husk flertall: naranjas (appelsiner)'],
      },
    },
    {
      id: 'spansk-1-5-3-text-2',
      type: 'text',
      content: `## Nyttige uttrykk i butikken

| Spansk | Norsk |
|--------|-------|
| ¿Tiene...? | Har du/dere...? |
| Quiero... | Jeg vil ha... |
| Deme... | Gi meg... |
| ¿Cuánto cuesta? | Hvor mye koster det? |
| ¿Cuánto cuestan? | Hvor mye koster de? |
| Cuesta ... euros. | Det koster ... euro. |
| ¿Algo más? | Noe annet? |
| Nada más, gracias. | Ikke noe mer, takk. |
| ¿Dónde está/están...? | Hvor er...? |

**Priser:**
- Cuesta tres euros. (Det koster tre euro.)
- Cuesta tres euros cincuenta. (Det koster tre euro og femti cent.)
- Son dos euros con veinte. (Det er to euro og tjue cent.)`,
    },
    {
      id: 'spansk-1-5-3-example-2',
      type: 'example',
      title: 'Eksempel 2: I butikken',
      problem: `Oversett til spansk:

a) Har du epler?
b) Gi meg en halv kilo, takk.
c) Hvor mye koster det?`,
      solution: `**Løsning:**

a) **¿Tiene manzanas?**

b) **Deme medio kilo, por favor.**

c) **¿Cuánto cuesta?**`,
    },
    {
      id: 'spansk-1-5-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-5-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk:',
        subTasks: [
          { label: 'a', task: 'Jeg vil ha en kilo tomater.', solution: 'Quiero un kilo de tomates.' },
          { label: 'b', task: 'Hvor mye koster det?', solution: '¿Cuánto cuesta?' },
          { label: 'c', task: 'Noe annet? Nei takk, det er alt.', solution: '¿Algo más? No, nada más, gracias.' },
        ],
        solution: 'a) Quiero un kilo de tomates. b) ¿Cuánto cuesta? c) ¿Algo más? No, nada más, gracias.',
        hints: ['Quiero = Jeg vil ha', '¿Cuánto cuesta? = Hvor mye koster det?', 'Nada más = Ikke noe mer'],
      },
    },
    {
      id: 'spansk-1-5-3-text-3',
      type: 'text',
      content: `## Dialog i butikken

**Selger:** ¡Buenos días! ¿Qué desea?
**Kunde:** Buenos días. Quiero un kilo de naranjas y medio kilo de fresas.
**Selger:** Aquí tiene. ¿Algo más?
**Kunde:** Sí, ¿tiene pan fresco?
**Selger:** Sí, aquí tiene. ¿Algo más?
**Kunde:** No, nada más. ¿Cuánto es?
**Selger:** Son cuatro euros con cincuenta.
**Kunde:** Aquí tiene. Gracias.
**Selger:** Gracias a usted. ¡Hasta luego!

**Nyttige uttrykk fra dialogen:**
- "Aquí tiene" = Vær så god (her har du)
- "pan fresco" = ferskt brød
- "Gracias a usted" = Takk til deg/Dem`,
    },
    {
      id: 'spansk-1-5-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Priser',
      problem: `Si prisene på spansk:

a) Det koster 5 euro.
b) Det koster 2 euro og 50 cent.
c) Det er 10 euro totalt.`,
      solution: `**Løsning:**

a) **Cuesta cinco euros.**

b) **Cuesta dos euros cincuenta.**

c) **Son diez euros en total.**`,
    },
    {
      id: 'spansk-1-5-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-5-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv prisene på spansk:',
        subTasks: [
          { label: 'a', task: 'Det koster 3 euro.', solution: 'Cuesta tres euros.' },
          { label: 'b', task: 'Det koster 7 euro og 50 cent.', solution: 'Cuesta siete euros cincuenta.' },
          { label: 'c', task: 'Det er 15 euro totalt.', solution: 'Son quince euros en total.' },
        ],
        solution: 'a) Cuesta tres euros. b) Cuesta siete euros cincuenta. c) Son quince euros en total.',
        hints: ['Cuesta = Det koster (entall)', 'Son = Det er (flertall/beløp)', 'en total = totalt'],
      },
    },
    {
      id: 'spansk-1-5-3-tip-1',
      type: 'tip',
      content: `**Tips for å handle i Spania:**

1. I Spania er det vanlig å handle på **el mercado** (markedet) for ferske varer
2. Si **"Buenos días"** eller **"Hola"** når du kommer inn i en butikk
3. Bruk **"¿Tiene...?"** for å spørre om de har noe
4. **"Algo más?"** hører du ofte - det betyr "Noe annet?"
5. Priser oppgis i **euros** (euro)`,
    },
    {
      id: 'spansk-1-5-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-5-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en handleliste og dialog:',
        subTasks: [
          { label: 'a', task: 'Be om en kilo epler og en flaske juice.', solution: 'Quiero un kilo de manzanas y una botella de zumo, por favor.' },
          { label: 'b', task: 'Spør om de har ferskt brød.', solution: '¿Tiene pan fresco?' },
          { label: 'c', task: 'Spør hva det koster totalt.', solution: '¿Cuánto es en total?' },
        ],
        solution: 'a) Quiero un kilo de manzanas y una botella de zumo, por favor. b) ¿Tiene pan fresco? c) ¿Cuánto es en total?',
        hints: ['Quiero = Jeg vil ha', '¿Tiene...? = Har du/dere...?', 'en total = totalt'],
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 5.4 La cocina española - Spansk mat og kultur
// ----------------------------------------------------------------------------

export const CHAPTER_SPANSK_1_5_4: TextbookChapter = {
  id: 'spansk-1-5-4',
  courseId: 'spansk-1',
  chapterNumber: '5.4',
  title: 'La cocina española',
  subtitle: 'Spansk mat og kultur',
  description: 'Lær om spansk matkultur og kjente retter.',
  estimatedMinutes: 40,
  competenceGoals: [
    'kjenne til spansk matkultur',
  ],
  content: [
    {
      id: 'spansk-1-5-4-intro',
      type: 'text',
      content: `## Spansk matkultur

Spania er kjent for sin fantastiske matkultur. La oss lære om noen av de mest kjente rettene og mattradisjonene!

**Kjente spanske retter:**

| Spansk | Beskrivelse |
|--------|-------------|
| la paella | Risrett med sjømat, kylling og grønnsaker fra Valencia |
| la tortilla española | Potetomelett med egg og løk |
| el gazpacho | Kald tomatsuppe fra Andalucía |
| los churros | Fritert deig som dyppes i varm sjokolade |
| el jamón serrano | Lufttørket skinke |
| las tapas | Små retter som deles |`,
    },
    {
      id: 'spansk-1-5-4-text-1',
      type: 'text',
      content: `## Måltidstider i Spania

Spanjoler spiser til andre tider enn nordmenn:

| Måltid | Tid i Spania | Tid i Norge |
|--------|-------------|-------------|
| El desayuno (frokost) | 07:00-09:00 | 07:00-08:00 |
| La comida (lunsj) | 14:00-15:30 | 11:30-12:30 |
| La merienda (mellommåltid) | 17:00-18:00 | - |
| La cena (middag) | 21:00-22:30 | 17:00-18:00 |

**Merk:** I Spania er lunsjen (la comida) det viktigste og største måltidet på dagen. Middagen (la cena) er lettere enn i Norge.`,
    },
    {
      id: 'spansk-1-5-4-def-1',
      type: 'definition',
      title: 'Tapas',
      content: `Tapas er små porsjoner mat som serveres som snacks eller forrett. Ordet "tapa" betyr egentlig "lokk" - det sies at bartendere la et stykke brød over glasset for å holde fluer unna. Tapas kan være oliven, ost, skinke, små biter sjømat, tortilla og mye mer.`,
    },
    {
      id: 'spansk-1-5-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Spanske retter',
      problem: `Hva er disse rettene? Svar på norsk:

a) la paella
b) el gazpacho
c) la tortilla española`,
      solution: `**Løsning:**

a) **Paella** - En risrett med sjømat, kylling og grønnsaker, opprinnelig fra Valencia.

b) **Gazpacho** - En kald tomatsuppe fra Sør-Spania (Andalucía).

c) **Tortilla española** - En potetomelett laget med egg, poteter og ofte løk.`,
    },
    {
      id: 'spansk-1-5-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-5-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Koble den spanske retten med riktig beskrivelse:',
        subTasks: [
          { label: 'a', task: 'Los churros', solution: 'Fritert deig som dyppes i varm sjokolade' },
          { label: 'b', task: 'El jamón serrano', solution: 'Lufttørket skinke' },
          { label: 'c', task: 'Las tapas', solution: 'Små retter som deles' },
        ],
        solution: 'a) Fritert deig med sjokolade, b) Lufttørket skinke, c) Små retter som deles',
        hints: ['Churros er søtt', 'Jamón = skinke', 'Tapas er mange små porsjoner'],
      },
    },
    {
      id: 'spansk-1-5-4-text-2',
      type: 'text',
      content: `## La sobremesa og andre mattradisjoner

**La sobremesa** er en viktig spansk tradisjon. Etter et måltid (spesielt lunsj) blir man sittende ved bordet for å prate, drikke kaffe og nyte tiden sammen. Dette kan vare i timevis!

**Andre mattradisjoner:**

| Tradisjon | Beskrivelse |
|-----------|-------------|
| La sobremesa | Å bli sittende etter måltidet og prate |
| Ir de tapas | Å gå fra bar til bar og smake tapas |
| El aperitivo | En liten drink med snacks før lunsj |
| La siesta | Hvile etter lunsj (vanlig i varme områder) |

**Typisk spansk frokost:**
En spansk frokost er enklere enn den norske. Den består ofte av:
- Un café con leche (kaffe med melk)
- Tostadas con tomate y aceite (ristet brød med tomat og olivenolje)
- Churros con chocolate (churros med varm sjokolade)`,
    },
    {
      id: 'spansk-1-5-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Sammenligne matkultur',
      problem: `Sammenlign på spansk:

a) I Spania spiser de lunsj klokka to.
b) I Norge spiser vi middag klokka fem.`,
      solution: `**Løsning:**

a) **En España comen a las dos.**

b) **En Noruega cenamos a las cinco.**`,
    },
    {
      id: 'spansk-1-5-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-5-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Svar på spørsmålene på spansk:',
        subTasks: [
          { label: 'a', task: 'Når spiser spanjoler lunsj?', solution: 'En España comen a las dos de la tarde. / A las catorce.' },
          { label: 'b', task: 'Hva er "la sobremesa"?', solution: 'La sobremesa es quedarse en la mesa después de comer para hablar.' },
          { label: 'c', task: 'Hva er tapas?', solution: 'Las tapas son pequeños platos de comida para compartir.' },
        ],
        solution: 'a) Comen a las dos de la tarde. b) Es quedarse en la mesa después de comer. c) Son pequeños platos para compartir.',
        hints: ['comer = å spise', 'quedarse = å bli', 'compartir = å dele'],
      },
    },
    {
      id: 'spansk-1-5-4-text-3',
      type: 'text',
      content: `## En enkel spansk oppskrift: Tortilla española

Her er en forenklet oppskrift på tortilla española:

**Ingredientes (Ingredienser):**
- 6 huevos (egg)
- 4 patatas (poteter)
- 1 cebolla (løk)
- aceite de oliva (olivenolje)
- sal (salt)

**Preparación (Tilberedning):**
1. Pelar y cortar las patatas. (Skrelle og kutte potetene.)
2. Freír las patatas con la cebolla. (Steke potetene med løken.)
3. Batir los huevos. (Vispe eggene.)
4. Mezclar todo. (Blande alt.)
5. Cocinar en la sartén. (Steke i pannen.)
6. Dar la vuelta. (Snu omeletten.)

**Nyttige kjøkkenord:**

| Spansk | Norsk |
|--------|-------|
| cortar | å kutte |
| mezclar | å blande |
| cocinar | å lage mat |
| freír | å steke |
| hervir | å koke |`,
    },
    {
      id: 'spansk-1-5-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Kjøkkenord',
      problem: `Oversett til spansk:

a) å kutte potetene
b) å vispe eggene
c) å steke i pannen`,
      solution: `**Løsning:**

a) **cortar las patatas**

b) **batir los huevos**

c) **freír en la sartén**`,
    },
    {
      id: 'spansk-1-5-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-5-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett kjøkkenhandlingene til spansk:',
        subTasks: [
          { label: 'a', task: 'å blande alt', solution: 'mezclar todo' },
          { label: 'b', task: 'å koke vannet', solution: 'hervir el agua' },
          { label: 'c', task: 'å lage mat', solution: 'cocinar' },
        ],
        solution: 'a) mezclar todo, b) hervir el agua, c) cocinar',
        hints: ['mezclar = å blande', 'hervir = å koke', 'cocinar = å lage mat'],
      },
    },
    {
      id: 'spansk-1-5-4-tip-1',
      type: 'tip',
      content: `**Visste du at...**

1. **Paella** kommer fra Valencia og lages tradisjonelt utendørs over åpen ild
2. **Gazpacho** serveres kald og er perfekt om sommeren
3. **Churros con chocolate** er en populær frokost og mellommåltid
4. Spania er verdens største produsent av **olivenolje** (aceite de oliva)
5. **Tapas** betyr egentlig "lokk" - fra å dekke glasset med brød`,
    },
    {
      id: 'spansk-1-5-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-5-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign norsk og spansk matkultur på spansk:',
        subTasks: [
          { label: 'a', task: 'I Norge spiser vi frokost klokka syv.', solution: 'En Noruega desayunamos a las siete.' },
          { label: 'b', task: 'I Spania spiser de middag klokka ni om kvelden.', solution: 'En España cenan a las nueve de la noche.' },
          { label: 'c', task: 'Norsk frokost er stor, spansk frokost er liten.', solution: 'El desayuno noruego es grande, el desayuno español es pequeño.' },
        ],
        solution: 'a) En Noruega desayunamos a las siete. b) En España cenan a las nueve de la noche. c) El desayuno noruego es grande, el desayuno español es pequeño.',
        hints: ['desayunar = å spise frokost', 'cenar = å spise middag', 'grande = stor, pequeño = liten'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: CASA Y HOGAR (HJEM OG BOLIG)
// ============================================================================

// ----------------------------------------------------------------------------
// 6.1 La casa - Huset
// ----------------------------------------------------------------------------

export const CHAPTER_SPANSK_1_6_1: TextbookChapter = {
  id: 'spansk-1-6-1',
  courseId: 'spansk-1',
  chapterNumber: '6.1',
  title: 'La casa',
  subtitle: 'Huset',
  description: 'Lær ord for rom og deler av huset på spansk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive hjemmet sitt',
  ],
  content: [
    {
      id: 'spansk-1-6-1-intro',
      type: 'text',
      content: `## Huset på spansk

For å snakke om hjemmet trenger vi ord for de ulike rommene. Her er de viktigste:

| Spansk | Norsk |
|--------|-------|
| la casa | huset |
| la cocina | kjøkkenet |
| el salón / el cuarto de estar | stuen |
| el dormitorio / la habitación | soverommet |
| el baño / el cuarto de baño | badet |
| el comedor | spisestuen |
| el jardín | hagen |
| el garaje | garasjen |
| el pasillo | gangen |
| la terraza / el balcón | terrassen / balkongen |`,
    },
    {
      id: 'spansk-1-6-1-text-1',
      type: 'text',
      content: `## Flere deler av huset

| Spansk | Norsk |
|--------|-------|
| la puerta | døren |
| la ventana | vinduet |
| la escalera | trappen |
| el techo | taket |
| el suelo | gulvet |
| la pared | veggen |
| la planta baja | første etasje |
| el primer piso | andre etasje |
| el segundo piso | tredje etasje |

**Nyttige uttrykk:**
- Mi casa tiene dos pisos. (Huset mitt har to etasjer.)
- La cocina está en la planta baja. (Kjøkkenet er i første etasje.)`,
    },
    {
      id: 'spansk-1-6-1-def-1',
      type: 'definition',
      title: 'Hay - det finnes / det er',
      content: `"Hay" betyr "det er" eller "det finnes" og brukes for å si hva som finnes et sted. "Hay" er uforanderlig - den er lik for entall og flertall. Eksempel: "En mi casa hay tres dormitorios" (I huset mitt er det tre soverom). "Hay un jardín grande" (Det er en stor hage).`,
    },
    {
      id: 'spansk-1-6-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Rommene',
      problem: `Si på spansk:

a) kjøkkenet
b) soverommet
c) hagen`,
      solution: `**Løsning:**

a) **la cocina**

b) **el dormitorio** / **la habitación**

c) **el jardín**`,
    },
    {
      id: 'spansk-1-6-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-6-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv rommene på spansk med artikkel:',
        subTasks: [
          { label: 'a', task: 'stuen', solution: 'el salón' },
          { label: 'b', task: 'badet', solution: 'el baño' },
          { label: 'c', task: 'garasjen', solution: 'el garaje' },
          { label: 'd', task: 'spisestuen', solution: 'el comedor' },
        ],
        solution: 'a) el salón, b) el baño, c) el garaje, d) el comedor',
        hints: ['De fleste rom er hankjønn (el)', 'la cocina er hunkjønn'],
      },
    },
    {
      id: 'spansk-1-6-1-text-2',
      type: 'text',
      content: `## Beskrive huset med "hay"

"Hay" brukes for å si hva som finnes:

| Spansk | Norsk |
|--------|-------|
| En mi casa hay... | I huset mitt er det... |
| Hay un salón grande. | Det er en stor stue. |
| Hay tres dormitorios. | Det er tre soverom. |
| Hay un jardín pequeño. | Det er en liten hage. |
| No hay garaje. | Det er ikke garasje. |

**Nyttige adjektiver:**

| Spansk | Norsk |
|--------|-------|
| grande | stor |
| pequeño/a | liten |
| bonito/a | pen |
| moderno/a | moderne |
| antiguo/a | gammel (ting) |
| luminoso/a | lys (godt belyst) |
| oscuro/a | mørk |`,
    },
    {
      id: 'spansk-1-6-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Beskrive huset',
      problem: `Oversett til spansk:

a) I huset mitt er det en stor stue.
b) Det er to soverom og et bad.
c) Det er ikke hage.`,
      solution: `**Løsning:**

a) **En mi casa hay un salón grande.**

b) **Hay dos dormitorios y un baño.**

c) **No hay jardín.**`,
    },
    {
      id: 'spansk-1-6-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-6-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk med "hay":',
        subTasks: [
          { label: 'a', task: 'I huset mitt er det fire soverom.', solution: 'En mi casa hay cuatro dormitorios.' },
          { label: 'b', task: 'Det er et moderne kjøkken.', solution: 'Hay una cocina moderna.' },
          { label: 'c', task: 'Det er ikke balkong.', solution: 'No hay balcón.' },
        ],
        solution: 'a) En mi casa hay cuatro dormitorios. b) Hay una cocina moderna. c) No hay balcón.',
        hints: ['hay = det er/finnes', 'Adjektivet kommer etter substantivet', 'No hay = det er ikke'],
      },
    },
    {
      id: 'spansk-1-6-1-text-3',
      type: 'text',
      content: `## Artikler: el, la, los, las

Husk at alle spanske substantiv har kjønn:

| Artikkel | Bruk | Eksempel |
|----------|------|----------|
| el | hankjønn entall | el salón (stuen) |
| la | hunkjønn entall | la cocina (kjøkkenet) |
| los | hankjønn flertall | los dormitorios (soverommene) |
| las | hunkjønn flertall | las ventanas (vinduene) |

**Ubestemte artikler:**

| Artikkel | Bruk | Eksempel |
|----------|------|----------|
| un | hankjønn entall | un jardín (en hage) |
| una | hunkjønn entall | una cocina (et kjøkken) |
| unos | hankjønn flertall | unos baños (noen bad) |
| unas | hunkjønn flertall | unas ventanas (noen vinduer) |`,
    },
    {
      id: 'spansk-1-6-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Beskrive ditt eget hus',
      problem: `Skriv en kort beskrivelse av huset ditt:

Eksempel: Beskriv et hus med stue, kjøkken, to soverom, bad og hage.`,
      solution: `**Eksempel på løsning:**

**Mi casa es grande y bonita. Hay un salón, una cocina, dos dormitorios y un baño. También hay un jardín pequeño. La cocina es moderna. El salón es luminoso.**

(Huset mitt er stort og pent. Det er en stue, et kjøkken, to soverom og et bad. Det er også en liten hage. Kjøkkenet er moderne. Stuen er lys.)`,
    },
    {
      id: 'spansk-1-6-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-6-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk:',
        subTasks: [
          { label: 'a', task: 'Huset mitt er stort.', solution: 'Mi casa es grande.' },
          { label: 'b', task: 'Kjøkkenet er moderne.', solution: 'La cocina es moderna.' },
          { label: 'c', task: 'Soverommene er små.', solution: 'Los dormitorios son pequeños.' },
        ],
        solution: 'a) Mi casa es grande. b) La cocina es moderna. c) Los dormitorios son pequeños.',
        hints: ['es = er (entall)', 'son = er (flertall)', 'Adjektivet bøyes etter kjønn og tall'],
      },
    },
    {
      id: 'spansk-1-6-1-tip-1',
      type: 'tip',
      content: `**Tips for å beskrive huset:**

1. Bruk **"hay"** for å si hva som finnes: "Hay un jardín" (Det er en hage)
2. Bruk **"es"** for å beskrive: "Mi casa es grande" (Huset mitt er stort)
3. Adjektivet kommer **etter** substantivet: "una cocina moderna" (et moderne kjøkken)
4. Husk å bøye adjektivet: "grande" endres ikke, men "pequeño" blir "pequeña" for hunkjønn`,
    },
    {
      id: 'spansk-1-6-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-6-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en beskrivelse av huset ditt på spansk:',
        subTasks: [
          { label: 'a', task: 'Si hva slags hus det er og hvor mange etasjer.', solution: 'Mi casa tiene dos pisos. / Vivo en una casa grande.' },
          { label: 'b', task: 'Fortell hva som finnes i huset (minst 4 rom).', solution: 'Hay un salón, una cocina, tres dormitorios y dos baños.' },
          { label: 'c', task: 'Beskriv et rom med et adjektiv.', solution: 'El salón es grande y luminoso. / La cocina es moderna.' },
        ],
        solution: 'a) Mi casa tiene dos pisos. b) Hay un salón, una cocina, tres dormitorios y dos baños. c) El salón es grande y luminoso.',
        hints: ['tiene = har', 'hay = det er/finnes', 'Adjektivet etter substantivet'],
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 6.2 Los muebles - Møblene
// ----------------------------------------------------------------------------

export const CHAPTER_SPANSK_1_6_2: TextbookChapter = {
  id: 'spansk-1-6-2',
  courseId: 'spansk-1',
  chapterNumber: '6.2',
  title: 'Los muebles',
  subtitle: 'Møblene',
  description: 'Lær møbelnavn og preposisjoner for å beskrive plassering.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive rominnredning og plassering',
  ],
  content: [
    {
      id: 'spansk-1-6-2-intro',
      type: 'text',
      content: `## Møbler på spansk

For å beskrive et rom trenger vi ord for møbler og gjenstander:

| Spansk | Norsk |
|--------|-------|
| la mesa | bordet |
| la silla | stolen |
| el sofá | sofaen |
| la cama | sengen |
| el armario | skapet |
| la estantería | bokhyllen |
| la lámpara | lampen |
| la alfombra | teppet |
| el espejo | speilet |
| el televisor | TV-en |
| la nevera / el frigorífico | kjøleskapet |
| la lavadora | vaskemaskinen |`,
    },
    {
      id: 'spansk-1-6-2-text-1',
      type: 'text',
      content: `## Preposisjoner - Hvor ting er

For å si hvor noe befinner seg, bruker vi preposisjoner:

| Spansk | Norsk |
|--------|-------|
| en | i / på |
| sobre | oppå / på |
| debajo de | under |
| al lado de | ved siden av |
| delante de | foran |
| detrás de | bak |
| entre | mellom |
| encima de | over / oppå |
| cerca de | nær |
| lejos de | langt fra |

**Eksempler:**
- El libro está sobre la mesa. (Boken er på bordet.)
- El gato está debajo de la silla. (Katten er under stolen.)
- La lámpara está al lado de la cama. (Lampen er ved siden av sengen.)`,
    },
    {
      id: 'spansk-1-6-2-def-1',
      type: 'definition',
      title: 'Estar vs. Ser',
      content: `For å si hvor noe befinner seg, bruker vi verbet "estar" (å befinne seg), ikke "ser" (å være). "Estar" brukes for plassering og midlertidige tilstander. Eksempel: "El sofá está en el salón" (Sofaen er i stuen).`,
    },
    {
      id: 'spansk-1-6-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Møbler',
      problem: `Si på spansk med artikkel:

a) bordet
b) sengen
c) sofaen`,
      solution: `**Løsning:**

a) **la mesa**

b) **la cama**

c) **el sofá**`,
    },
    {
      id: 'spansk-1-6-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-6-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv møblene på spansk med artikkel:',
        subTasks: [
          { label: 'a', task: 'stolen', solution: 'la silla' },
          { label: 'b', task: 'skapet', solution: 'el armario' },
          { label: 'c', task: 'lampen', solution: 'la lámpara' },
          { label: 'd', task: 'speilet', solution: 'el espejo' },
        ],
        solution: 'a) la silla, b) el armario, c) la lámpara, d) el espejo',
        hints: ['Hunkjønn: la silla, la lámpara', 'Hankjønn: el armario, el espejo'],
      },
    },
    {
      id: 'spansk-1-6-2-text-2',
      type: 'text',
      content: `## Bruke preposisjoner i setninger

For å beskrive hvor ting er, bruker vi "estar" + preposisjon:

| Spansk | Norsk |
|--------|-------|
| El sofá está en el salón. | Sofaen er i stuen. |
| La mesa está delante de la ventana. | Bordet er foran vinduet. |
| El armario está al lado de la cama. | Skapet er ved siden av sengen. |
| Los libros están sobre la estantería. | Bøkene er på bokhyllen. |
| La alfombra está debajo de la mesa. | Teppet er under bordet. |

**Bøyning av "estar":**

| Person | Bøyning |
|--------|---------|
| yo | estoy |
| tú | estás |
| él/ella | está |
| nosotros | estamos |
| ellos/ellas | están |`,
    },
    {
      id: 'spansk-1-6-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Plassering',
      problem: `Oversett til spansk:

a) Katten er under bordet.
b) Lampen er ved siden av sofaen.
c) Bøkene er på hyllen.`,
      solution: `**Løsning:**

a) **El gato está debajo de la mesa.**

b) **La lámpara está al lado del sofá.**

c) **Los libros están sobre la estantería.**`,
    },
    {
      id: 'spansk-1-6-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-6-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk:',
        subTasks: [
          { label: 'a', task: 'TV-en er foran sofaen.', solution: 'El televisor está delante del sofá.' },
          { label: 'b', task: 'Stolen er ved siden av bordet.', solution: 'La silla está al lado de la mesa.' },
          { label: 'c', task: 'Speilet er over vasken.', solution: 'El espejo está encima del lavabo.' },
        ],
        solution: 'a) El televisor está delante del sofá. b) La silla está al lado de la mesa. c) El espejo está encima del lavabo.',
        hints: ['delante de = foran', 'al lado de = ved siden av', 'encima de = over/oppå', 'de + el = del'],
      },
    },
    {
      id: 'spansk-1-6-2-warning-1',
      type: 'warning',
      content: `**Viktig: de + el = del**

Når preposisjonen "de" kommer foran artikkelen "el", slås de sammen til **"del"**:
- delante **del** sofá (foran sofaen) - IKKE "de el sofá"
- al lado **del** armario (ved siden av skapet)
- debajo **del** escritorio (under pulten)

Men med "la" skjer ingen sammentrekning:
- delante **de la** mesa (foran bordet)
- al lado **de la** cama (ved siden av sengen)`,
    },
    {
      id: 'spansk-1-6-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Beskrive et rom',
      problem: `Beskriv stuen med møbler og plassering:

Stuen har en sofa, et bord, en TV og en lampe. Sofaen er foran TV-en. Bordet er mellom sofaen og vinduet.`,
      solution: `**Løsning:**

**En el salón hay un sofá, una mesa, un televisor y una lámpara. El sofá está delante del televisor. La mesa está entre el sofá y la ventana.**`,
    },
    {
      id: 'spansk-1-6-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-6-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig preposisjon:',
        subTasks: [
          { label: 'a', task: 'El gato está _____ la mesa. (under)', solution: 'debajo de' },
          { label: 'b', task: 'La lámpara está _____ la cama. (ved siden av)', solution: 'al lado de' },
          { label: 'c', task: 'El cuadro está _____ el sofá. (over)', solution: 'encima de' },
        ],
        solution: 'a) debajo de, b) al lado de, c) encima de',
        hints: ['under = debajo de', 'ved siden av = al lado de', 'over = encima de'],
      },
    },
    {
      id: 'spansk-1-6-2-tip-1',
      type: 'tip',
      content: `**Huskeregel for preposisjoner:**

1. **en** = i/på (generell plassering)
2. **sobre / encima de** = oppå/over
3. **debajo de** = under
4. **al lado de** = ved siden av
5. **delante de** = foran
6. **detrás de** = bak
7. **entre** = mellom
8. Husk: **de + el = del**!`,
    },
    {
      id: 'spansk-1-6-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-6-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Beskriv rommet på spansk:',
        subTasks: [
          { label: 'a', task: 'I stuen er det en sofa og et bord.', solution: 'En el salón hay un sofá y una mesa.' },
          { label: 'b', task: 'Sofaen er foran TV-en.', solution: 'El sofá está delante del televisor.' },
          { label: 'c', task: 'Teppet er under bordet.', solution: 'La alfombra está debajo de la mesa.' },
        ],
        solution: 'a) En el salón hay un sofá y una mesa. b) El sofá está delante del televisor. c) La alfombra está debajo de la mesa.',
        hints: ['hay = det er/finnes', 'está = befinner seg', 'delante del = foran (hankjønn)'],
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 6.3 Mi habitación - Rommet mitt
// ----------------------------------------------------------------------------

export const CHAPTER_SPANSK_1_6_3: TextbookChapter = {
  id: 'spansk-1-6-3',
  courseId: 'spansk-1',
  chapterNumber: '6.3',
  title: 'Mi habitación',
  subtitle: 'Rommet mitt',
  description: 'Lær å beskrive rommet ditt detaljert på spansk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive rommet sitt detaljert',
  ],
  content: [
    {
      id: 'spansk-1-6-3-intro',
      type: 'text',
      content: `## Rommet mitt

For å beskrive rommet ditt trenger du ord for møbler og gjenstander som finnes på et typisk soverom:

| Spansk | Norsk |
|--------|-------|
| la cama | sengen |
| el escritorio | pulten/skrivebordet |
| la silla | stolen |
| el ordenador / el portátil | datamaskinen / den bærbare |
| la ventana | vinduet |
| la puerta | døren |
| el armario | skapet |
| la estantería | bokhyllen |
| la mesilla de noche | nattbordet |
| la alfombra | teppet |
| el póster | plakaten |
| la cortina | gardinen |`,
    },
    {
      id: 'spansk-1-6-3-text-1',
      type: 'text',
      content: `## Farger og beskrivelser

For å gjøre beskrivelsen mer detaljert, bruker vi farger og adjektiver:

| Spansk | Norsk |
|--------|-------|
| blanco/a | hvit |
| negro/a | svart |
| azul | blå |
| rojo/a | rød |
| verde | grønn |
| amarillo/a | gul |
| rosa | rosa |
| gris | grå |
| grande | stor |
| pequeño/a | liten |
| nuevo/a | ny |
| viejo/a | gammel |
| bonito/a | pen |
| cómodo/a | komfortabel |
| ordenado/a | ryddig |
| desordenado/a | rotete |

**Merk:** Adjektivet kommer etter substantivet og bøyes etter kjønn:
- una cama **grande** (en stor seng)
- un armario **blanco** (et hvitt skap)
- una silla **cómoda** (en komfortabel stol)`,
    },
    {
      id: 'spansk-1-6-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Gjenstander på rommet',
      problem: `Si på spansk:

a) en blå seng
b) et hvitt skap
c) et lite vindu`,
      solution: `**Løsning:**

a) **una cama azul**

b) **un armario blanco**

c) **una ventana pequeña**`,
    },
    {
      id: 'spansk-1-6-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-6-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv på spansk med farge eller adjektiv:',
        subTasks: [
          { label: 'a', task: 'en stor seng', solution: 'una cama grande' },
          { label: 'b', task: 'et nytt skrivebord', solution: 'un escritorio nuevo' },
          { label: 'c', task: 'grønne gardiner', solution: 'unas cortinas verdes' },
          { label: 'd', task: 'en rød stol', solution: 'una silla roja' },
        ],
        solution: 'a) una cama grande, b) un escritorio nuevo, c) unas cortinas verdes, d) una silla roja',
        hints: ['Adjektivet kommer etter substantivet', 'Bøy adjektivet etter kjønn og tall', 'verde endres ikke i kjønn'],
      },
    },
    {
      id: 'spansk-1-6-3-text-2',
      type: 'text',
      content: `## Beskrive rommet med "hay" og "es/está"

Vi bruker ulike uttrykk avhengig av hva vi vil si:

| Uttrykk | Bruk | Eksempel |
|---------|------|----------|
| En mi habitación hay... | Hva som finnes | Hay una cama y un escritorio. |
| Mi habitación es... | Beskrive egenskaper | Mi habitación es grande. |
| La cama está... | Plassering | La cama está al lado de la ventana. |

**Eksempel på en beskrivelse:**

Mi habitación es grande y luminosa. Hay una cama, un escritorio, una silla y un armario. La cama está al lado de la ventana. El escritorio está delante de la pared. Sobre el escritorio hay un ordenador. En las paredes hay pósters.

(Rommet mitt er stort og lyst. Det er en seng, et skrivebord, en stol og et skap. Sengen er ved siden av vinduet. Skrivebordet er foran veggen. På skrivebordet er det en datamaskin. På veggene er det plakater.)`,
    },
    {
      id: 'spansk-1-6-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Beskrive rommet',
      problem: `Oversett til spansk:

a) Rommet mitt er lite, men pent.
b) Det er en seng og et skrivebord.
c) Sengen er ved siden av vinduet.`,
      solution: `**Løsning:**

a) **Mi habitación es pequeña, pero bonita.**

b) **Hay una cama y un escritorio.**

c) **La cama está al lado de la ventana.**`,
    },
    {
      id: 'spansk-1-6-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-6-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk:',
        subTasks: [
          { label: 'a', task: 'Rommet mitt er stort og lyst.', solution: 'Mi habitación es grande y luminosa.' },
          { label: 'b', task: 'På skrivebordet er det en bærbar datamaskin.', solution: 'Sobre el escritorio hay un portátil.' },
          { label: 'c', task: 'Skapet er ved siden av døren.', solution: 'El armario está al lado de la puerta.' },
        ],
        solution: 'a) Mi habitación es grande y luminosa. b) Sobre el escritorio hay un portátil. c) El armario está al lado de la puerta.',
        hints: ['es = er (egenskap)', 'hay = det er/finnes', 'está = befinner seg'],
      },
    },
    {
      id: 'spansk-1-6-3-text-3',
      type: 'text',
      content: `## Si hva du gjør på rommet

| Spansk | Norsk |
|--------|-------|
| En mi habitación... | På rommet mitt... |
| estudio | studerer jeg |
| leo | leser jeg |
| escucho música | hører jeg på musikk |
| juego a videojuegos | spiller jeg videospill |
| duermo | sover jeg |
| hago los deberes | gjør jeg lekser |
| hablo por teléfono | snakker jeg i telefonen |

**Eksempler:**
- En mi habitación estudio y hago los deberes. (På rommet mitt studerer jeg og gjør lekser.)
- Me gusta escuchar música en mi habitación. (Jeg liker å høre på musikk på rommet mitt.)`,
    },
    {
      id: 'spansk-1-6-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Aktiviteter på rommet',
      problem: `Oversett til spansk:

a) Jeg studerer på rommet mitt.
b) Jeg liker å lese i sengen.
c) Jeg spiller videospill på datamaskinen.`,
      solution: `**Løsning:**

a) **Estudio en mi habitación.**

b) **Me gusta leer en la cama.**

c) **Juego a videojuegos en el ordenador.**`,
    },
    {
      id: 'spansk-1-6-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-6-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk:',
        subTasks: [
          { label: 'a', task: 'Jeg gjør lekser på rommet mitt.', solution: 'Hago los deberes en mi habitación.' },
          { label: 'b', task: 'Jeg hører på musikk i sengen.', solution: 'Escucho música en la cama.' },
          { label: 'c', task: 'Jeg liker rommet mitt.', solution: 'Me gusta mi habitación.' },
        ],
        solution: 'a) Hago los deberes en mi habitación. b) Escucho música en la cama. c) Me gusta mi habitación.',
        hints: ['hacer los deberes = å gjøre lekser', 'escuchar música = å høre på musikk', 'Me gusta = Jeg liker'],
      },
    },
    {
      id: 'spansk-1-6-3-tip-1',
      type: 'tip',
      content: `**Oppskrift for å beskrive rommet ditt:**

1. Start med størrelse: "Mi habitación es grande/pequeña"
2. Fortell hva som finnes: "Hay una cama, un escritorio..."
3. Beskriv plasseringen: "La cama está al lado de..."
4. Legg til farger: "Las paredes son blancas"
5. Si hva du gjør der: "En mi habitación estudio..."`,
    },
    {
      id: 'spansk-1-6-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-6-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en beskrivelse av rommet ditt (3 setninger):',
        subTasks: [
          { label: 'a', task: 'Beskriv størrelsen og en egenskap.', solution: 'Mi habitación es pequeña pero bonita. / Mi habitación es grande y luminosa.' },
          { label: 'b', task: 'Fortell hva som finnes med farger.', solution: 'Hay una cama azul, un escritorio blanco y una estantería grande.' },
          { label: 'c', task: 'Si hva du gjør på rommet.', solution: 'En mi habitación estudio, escucho música y duermo.' },
        ],
        solution: 'a) Mi habitación es pequeña pero bonita. b) Hay una cama azul, un escritorio blanco y una estantería grande. c) En mi habitación estudio, escucho música y duermo.',
        hints: ['pero = men', 'Legg til farger etter møblene', 'List opp aktiviteter med komma og "y"'],
      },
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 6.4 Vivir en España - Bo i Spania
// ----------------------------------------------------------------------------

export const CHAPTER_SPANSK_1_6_4: TextbookChapter = {
  id: 'spansk-1-6-4',
  courseId: 'spansk-1',
  chapterNumber: '6.4',
  title: 'Vivir en España',
  subtitle: 'Bo i Spania',
  description: 'Lær om boligtyper i Spania og sammenlign med Norge.',
  estimatedMinutes: 40,
  competenceGoals: [
    'sammenligne boforhold i Spania og Norge',
  ],
  content: [
    {
      id: 'spansk-1-6-4-intro',
      type: 'text',
      content: `## Boligtyper i Spania

Spanjolene bor i forskjellige typer boliger. Her er de vanligste:

| Spansk | Norsk |
|--------|-------|
| el piso / el apartamento | leiligheten |
| la casa | huset |
| el chalet / la villa | villaen |
| el adosado | rekkehuset |
| el ático | toppleiligheten |
| el estudio | ettromsleiligheten |

**Merk:** I Spania bor de fleste i leiligheter (pisos), spesielt i byene. Hus (casas) og villaer (chalets) er vanligere på landsbygda og i forsteder.`,
    },
    {
      id: 'spansk-1-6-4-text-1',
      type: 'text',
      content: `## Forskjeller mellom spansk og norsk bolig

| Tema | Spania | Norge |
|------|--------|-------|
| Vanligste boligtype | Leilighet (piso) | Enebolig (casa) |
| Balkong/terrasse | Nesten alle har balkong | Ikke like vanlig |
| Hage | Sjeldent i byen | Mange har hage |
| Sentralvarme | Sjeldent (mildt klima) | Standard |
| Aircondition | Svært vanlig | Uvanlig |
| Persienner | Vanlig (mot sol og varme) | Uvanlig |
| Fellesområder | Ofte felles basseng og hage | Sjeldent |

**Nyttige ord:**

| Spansk | Norsk |
|--------|-------|
| vivir | å bo |
| la dirección | adressen |
| la calle | gaten |
| el barrio | nabolaget |
| el piso (etasje) | etasjen |
| la planta baja | første etasje |
| el ascensor | heisen |
| la piscina | bassenget |`,
    },
    {
      id: 'spansk-1-6-4-def-1',
      type: 'definition',
      title: 'Vivir - å bo',
      content: `Verbet "vivir" (å bo) bøyes slik: vivo (jeg bor), vives (du bor), vive (han/hun bor), vivimos (vi bor), viven (de bor). Eksempel: "Vivo en un piso en Madrid" (Jeg bor i en leilighet i Madrid).`,
    },
    {
      id: 'spansk-1-6-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Bolig',
      problem: `Si på spansk:

a) Jeg bor i en leilighet.
b) Leiligheten er i tredje etasje.
c) Det er heis i bygningen.`,
      solution: `**Løsning:**

a) **Vivo en un piso.**

b) **El piso está en el tercer piso.**

c) **Hay ascensor en el edificio.**`,
    },
    {
      id: 'spansk-1-6-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-6-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til spansk:',
        subTasks: [
          { label: 'a', task: 'Jeg bor i et hus.', solution: 'Vivo en una casa.' },
          { label: 'b', task: 'Hun bor i en leilighet.', solution: 'Vive en un piso.' },
          { label: 'c', task: 'Vi bor i Norge.', solution: 'Vivimos en Noruega.' },
        ],
        solution: 'a) Vivo en una casa. b) Vive en un piso. c) Vivimos en Noruega.',
        hints: ['vivo = jeg bor', 'vive = han/hun bor', 'vivimos = vi bor'],
      },
    },
    {
      id: 'spansk-1-6-4-text-2',
      type: 'text',
      content: `## Adresse og nabolag

For å oppgi adresse på spansk:

**Adresseformat:**
Calle + gatenavn + nummer + etasje + dør

**Eksempel:**
- Calle Mayor, 15, 3° B (Calle Mayor nummer 15, tredje etasje, dør B)
- Avenida de la Constitución, 42 (Konstitusjonsboulevarden 42)

**Si hvor du bor:**

| Spansk | Norsk |
|--------|-------|
| Vivo en la calle... | Jeg bor i ... gaten |
| Mi dirección es... | Adressen min er... |
| Vivo en el centro. | Jeg bor i sentrum. |
| Vivo en las afueras. | Jeg bor i utkanten. |
| Mi barrio es tranquilo. | Nabolaget mitt er rolig. |
| Mi barrio es ruidoso. | Nabolaget mitt er bråkete. |

**Nyttige adjektiver for nabolag:**

| Spansk | Norsk |
|--------|-------|
| tranquilo/a | rolig |
| ruidoso/a | bråkete |
| moderno/a | moderne |
| antiguo/a | gammel |
| bonito/a | pen |
| céntrico/a | sentralt |`,
    },
    {
      id: 'spansk-1-6-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Hvor bor du?',
      problem: `Oversett til spansk:

a) Jeg bor i Kongens gate nummer 5.
b) Nabolaget mitt er rolig og pent.
c) Det er nær sentrum.`,
      solution: `**Løsning:**

a) **Vivo en la calle Kongens, número 5.**

b) **Mi barrio es tranquilo y bonito.**

c) **Está cerca del centro.**`,
    },
    {
      id: 'spansk-1-6-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-6-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk:',
        subTasks: [
          { label: 'a', task: 'Jeg bor i sentrum.', solution: 'Vivo en el centro.' },
          { label: 'b', task: 'Nabolaget mitt er moderne.', solution: 'Mi barrio es moderno.' },
          { label: 'c', task: 'Det er nær skolen.', solution: 'Está cerca del colegio.' },
        ],
        solution: 'a) Vivo en el centro. b) Mi barrio es moderno. c) Está cerca del colegio.',
        hints: ['el centro = sentrum', 'el barrio = nabolaget', 'cerca de = nær'],
      },
    },
    {
      id: 'spansk-1-6-4-text-3',
      type: 'text',
      content: `## Sammenligne boforhold

For å sammenligne bruker vi disse uttrykkene:

| Spansk | Norsk |
|--------|-------|
| En España... | I Spania... |
| En Noruega... | I Norge... |
| es diferente | er annerledes |
| es similar | er likt |
| también | også |
| pero | men |
| sin embargo | likevel |
| más ... que | mer ... enn |
| menos ... que | mindre ... enn |

**Eksempler på sammenligning:**
- En España hace más calor que en Noruega. (I Spania er det varmere enn i Norge.)
- En Noruega las casas tienen calefacción. (I Norge har husene sentralvarme.)
- En España muchas personas viven en pisos. (I Spania bor mange mennesker i leiligheter.)`,
    },
    {
      id: 'spansk-1-6-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Sammenligne Spania og Norge',
      problem: `Oversett til spansk:

a) I Spania bor de fleste i leiligheter.
b) I Norge har mange hus en hage.
c) Spanske leiligheter har ofte balkong.`,
      solution: `**Løsning:**

a) **En España la mayoría vive en pisos.**

b) **En Noruega muchas casas tienen un jardín.**

c) **Los pisos españoles a menudo tienen balcón.**`,
    },
    {
      id: 'spansk-1-6-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-6-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk:',
        subTasks: [
          { label: 'a', task: 'I Spania er det varmere enn i Norge.', solution: 'En España hace más calor que en Noruega.' },
          { label: 'b', task: 'I Norge har husene sentralvarme.', solution: 'En Noruega las casas tienen calefacción.' },
          { label: 'c', task: 'Spanske hjem har ofte aircondition.', solution: 'Los hogares españoles a menudo tienen aire acondicionado.' },
        ],
        solution: 'a) En España hace más calor que en Noruega. b) En Noruega las casas tienen calefacción. c) Los hogares españoles a menudo tienen aire acondicionado.',
        hints: ['hace calor = det er varmt', 'calefacción = sentralvarme', 'aire acondicionado = aircondition'],
      },
    },
    {
      id: 'spansk-1-6-4-note-1',
      type: 'note',
      content: `**Visste du at...**

- I Spania bor over **65%** av befolkningen i leiligheter
- Mange spanske leilighetskomplekser har felles **basseng** (piscina comunitaria)
- I Sør-Spania har husene ofte **persienner** (persianas) for å holde varmen ute
- Spanjolene kjøper oftere bolig enn de leier - å eie er viktig i spansk kultur
- Tradisjonelle spanske hus har ofte en indre **gårdsplass** (patio) med planter og fontene`,
    },
    {
      id: 'spansk-1-6-4-tip-1',
      type: 'tip',
      content: `**Tips for å beskrive hvor du bor:**

1. Start med boligtype: "Vivo en una casa / un piso"
2. Si hvor: "en el centro / en las afueras"
3. Beskriv nabolaget: "Mi barrio es tranquilo"
4. Fortell om boligen: "Hay tres dormitorios y un jardín"
5. Sammenlign gjerne: "En Noruega es diferente porque..."`,
    },
    {
      id: 'spansk-1-6-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-6-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv om hvor du bor og sammenlign med Spania:',
        subTasks: [
          { label: 'a', task: 'Fortell hva slags bolig du bor i og hvor.', solution: 'Vivo en una casa en Noruega. / Vivo en un piso en el centro de Oslo.' },
          { label: 'b', task: 'Beskriv boligen din kort.', solution: 'Mi casa es grande. Hay cuatro dormitorios, dos baños y un jardín.' },
          { label: 'c', task: 'Sammenlign med en typisk spansk bolig.', solution: 'En España la mayoría vive en pisos. En Noruega muchos viven en casas con jardín.' },
        ],
        solution: 'a) Vivo en una casa en Noruega. b) Mi casa es grande. Hay cuatro dormitorios y un jardín. c) En España la mayoría vive en pisos, pero en Noruega muchos viven en casas.',
        hints: ['Vivo en = Jeg bor i', 'la mayoría = de fleste', 'muchos = mange'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORTER ALLE KAPITLER
// ============================================================================

export const SPANSK_1_CHAPTERS_4_6: TextbookChapter[] = [
  CHAPTER_SPANSK_1_4_1,
  CHAPTER_SPANSK_1_4_2,
  CHAPTER_SPANSK_1_4_3,
  CHAPTER_SPANSK_1_4_4,
  CHAPTER_SPANSK_1_5_1,
  CHAPTER_SPANSK_1_5_2,
  CHAPTER_SPANSK_1_5_3,
  CHAPTER_SPANSK_1_5_4,
  CHAPTER_SPANSK_1_6_1,
  CHAPTER_SPANSK_1_6_2,
  CHAPTER_SPANSK_1_6_3,
  CHAPTER_SPANSK_1_6_4,
];
