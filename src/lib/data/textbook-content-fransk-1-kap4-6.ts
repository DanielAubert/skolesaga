/* eslint-disable */
// @ts-nocheck
/**
 * Fransk Nivaa 1 - Kapittel 4-6 (Detaljerte underkapitler)
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
// 4.1 L'heure - Klokkeslettet
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_1_4_1: TextbookChapter = {
  id: 'fransk-1-4-1',
  courseId: 'fransk-1',
  chapterNumber: '4.1',
  title: "L'heure",
  subtitle: 'Klokkeslettet',
  description: 'Lær å si hva klokken er på fransk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'si hva klokken er',
    'spørre om klokkeslett',
  ],
  content: [
    {
      id: 'fransk-1-4-1-intro',
      type: 'text',
      content: `## Klokkeslett på fransk

Å kunne si hva klokken er, er viktig i hverdagen. På fransk bruker vi uttrykket "Il est... heure(s)" for å si klokkeslettet.

**Spørre om klokken:**

| Fransk | Norsk |
|--------|-------|
| Quelle heure est-il ? | Hva er klokka? |
| Il est quelle heure ? | Hva er klokka? (uformell) |
| À quelle heure ? | Når? / Klokka hva? |`,
    },
    {
      id: 'fransk-1-4-1-text-1',
      type: 'text',
      content: `## Hele timer

For å si hele timer bruker vi "Il est ... heure(s)":

| Klokka | Fransk |
|--------|--------|
| 1:00 | Il est une heure |
| 2:00 | Il est deux heures |
| 3:00 | Il est trois heures |
| 4:00 | Il est quatre heures |
| 5:00 | Il est cinq heures |
| 6:00 | Il est six heures |
| 7:00 | Il est sept heures |
| 8:00 | Il est huit heures |
| 9:00 | Il est neuf heures |
| 10:00 | Il est dix heures |
| 11:00 | Il est onze heures |
| 12:00 | Il est midi |

**Merk:** Ved klokka ett sier vi "une heure" (entall). Klokka 12 er "midi" (midt på dagen) og klokka 24/00 er "minuit" (midnatt).`,
    },
    {
      id: 'fransk-1-4-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Hele timer',
      problem: `Si på fransk:

a) Klokka er 3
b) Klokka er 7
c) Klokka er 12`,
      solution: `**Løsning:**

a) **Il est trois heures.**

b) **Il est sept heures.**

c) **Il est midi.**`,
    },
    {
      id: 'fransk-1-4-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-4-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Si på fransk:',
        subTasks: [
          { label: 'a', task: 'Klokka er 5', solution: 'Il est cinq heures' },
          { label: 'b', task: 'Klokka er 9', solution: 'Il est neuf heures' },
          { label: 'c', task: 'Klokka er 1', solution: 'Il est une heure' },
        ],
        solution: 'a) Il est cinq heures, b) Il est neuf heures, c) Il est une heure',
        hints: ['Bruk "Il est ... heure(s)"', 'Ved klokka 1: "une heure" (entall)'],
      },
    },
    {
      id: 'fransk-1-4-1-text-2',
      type: 'text',
      content: `## Halv og kvart

På fransk bruker vi spesielle uttrykk for halv og kvart:

| Klokka | Fransk | Forklaring |
|--------|--------|------------|
| 2:15 | Il est deux heures et quart | Kvart over to |
| 2:30 | Il est deux heures et demie | Halv tre |
| 2:45 | Il est trois heures moins le quart | Kvart på tre |

**Viktig:** Ved "et demie" (halv) og "et quart" (kvart over) refererer man til den gjeldende timen. Ved "moins le quart" (kvart på) refererer man til den kommende timen.`,
    },
    {
      id: 'fransk-1-4-1-warning-1',
      type: 'warning',
      content: `**Merk forskjellen på "midi" og "minuit":**

- **midi** = midt på dagen (kl. 12:00)
- **minuit** = midnatt (kl. 00:00)

Ved "midi" og "minuit" sier vi: "Il est midi et demi" (uten -e på demi, fordi midi er hankjønn), men "Il est deux heures et demie" (med -e, fordi heure er hunkjønn).`,
    },
    {
      id: 'fransk-1-4-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Halv og kvart',
      problem: `Si på fransk:

a) Klokka er kvart over fire (4:15)
b) Klokka er halv fem (4:30)
c) Klokka er kvart på seks (5:45)`,
      solution: `**Løsning:**

a) **Il est quatre heures et quart.** (kvart over fire)

b) **Il est quatre heures et demie.** (halv fem = 4:30)

c) **Il est six heures moins le quart.** (kvart på seks)`,
    },
    {
      id: 'fransk-1-4-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-4-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Si på fransk:',
        subTasks: [
          { label: 'a', task: '3:15', solution: 'Il est trois heures et quart' },
          { label: 'b', task: '6:30', solution: 'Il est six heures et demie' },
          { label: 'c', task: '8:45', solution: 'Il est neuf heures moins le quart' },
          { label: 'd', task: '11:30', solution: 'Il est onze heures et demie' },
        ],
        solution: 'a) Il est trois heures et quart, b) Il est six heures et demie, c) Il est neuf heures moins le quart, d) Il est onze heures et demie',
        hints: ['Kvart over = et quart', 'Halv = et demie', 'Kvart på = moins le quart (bruk neste time)'],
      },
    },
    {
      id: 'fransk-1-4-1-text-3',
      type: 'text',
      content: `## Minutter

For andre minutter legger vi til eller trekker fra:

| Klokka | Fransk |
|--------|--------|
| 3:05 | Il est trois heures cinq |
| 3:10 | Il est trois heures dix |
| 3:20 | Il est trois heures vingt |
| 3:40 | Il est quatre heures moins vingt |
| 3:50 | Il est quatre heures moins dix |
| 3:55 | Il est quatre heures moins cinq |

**Offisiell tid (24-timers):**

| Klokka | Fransk |
|--------|--------|
| 14:30 | Il est quatorze heures trente |
| 18:45 | Il est dix-huit heures quarante-cinq |`,
    },
    {
      id: 'fransk-1-4-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Minutter',
      problem: `Si på fransk:

a) 4:10
b) 7:50
c) 15:25 (offisiell tid)`,
      solution: `**Løsning:**

a) **Il est quatre heures dix.** (ti over fire)

b) **Il est huit heures moins dix.** (ti på aatte)

c) **Il est quinze heures vingt-cinq.** (offisiell)`,
    },
    {
      id: 'fransk-1-4-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-4-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva er klokka på norsk?',
        subTasks: [
          { label: 'a', task: 'Il est neuf heures et demie', solution: '9:30 (halv ti)' },
          { label: 'b', task: 'Il est onze heures et quart', solution: '11:15 (kvart over elleve)' },
          { label: 'c', task: 'Il est six heures moins vingt', solution: '5:40 (tjue på seks)' },
        ],
        solution: 'a) 9:30, b) 11:15, c) 5:40',
        hints: ['et demie = halv (gjeldende time + 30 min)', 'et quart = kvart over', 'moins = minus / på'],
      },
    },
    {
      id: 'fransk-1-4-1-tip-1',
      type: 'tip',
      content: `**Tips for å huske klokkeslett:**

1. "et quart" = kvart over (+ 15 min)
2. "et demie" = halv (+ 30 min)
3. "moins le quart" = kvart på (- 15 min fra neste time)
4. "moins" = minus / på (trekk fra neste time)
5. "midi" = kl. 12, "minuit" = kl. 00`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 4.2 Les jours de la semaine - Ukedagene
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_1_4_2: TextbookChapter = {
  id: 'fransk-1-4-2',
  courseId: 'fransk-1',
  chapterNumber: '4.2',
  title: 'Les jours de la semaine',
  subtitle: 'Ukedagene',
  description: 'Lær ukedagene på fransk og hvordan du bruker dem.',
  estimatedMinutes: 40,
  competenceGoals: [
    'si ukedagene på fransk',
    'snakke om hva som skjer på ulike dager',
  ],
  content: [
    {
      id: 'fransk-1-4-2-intro',
      type: 'text',
      content: `## Ukedagene på fransk

Ukedagene er viktige ord som du bruker hver dag. På fransk begynner uka med mandag.

| Fransk | Norsk |
|--------|-------|
| lundi | mandag |
| mardi | tirsdag |
| mercredi | onsdag |
| jeudi | torsdag |
| vendredi | fredag |
| samedi | lørdag |
| dimanche | søndag |

**Merk:** Ukedagene skrives med liten forbokstav på fransk (i motsetning til på norsk og tysk).`,
    },
    {
      id: 'fransk-1-4-2-note-1',
      type: 'note',
      content: `**Opprinnelsen til navnene:**

- **lundi** - Månens dag (la Lune = maanen)
- **mardi** - Mars' dag (planeten Mars)
- **mercredi** - Merkurs dag (planeten Merkur)
- **jeudi** - Jupiters dag (planeten Jupiter)
- **vendredi** - Venus' dag (planeten Venus)
- **samedi** - Saturns dag (fra latin Saturni dies)
- **dimanche** - Herrens dag (fra latin dies dominica)`,
    },
    {
      id: 'fransk-1-4-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Ukedagene',
      problem: `Si på fransk:

a) mandag
b) onsdag
c) lørdag`,
      solution: `**Løsning:**

a) **lundi**

b) **mercredi**

c) **samedi**`,
    },
    {
      id: 'fransk-1-4-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-4-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv ukedagene på fransk:',
        subTasks: [
          { label: 'a', task: 'tirsdag', solution: 'mardi' },
          { label: 'b', task: 'torsdag', solution: 'jeudi' },
          { label: 'c', task: 'fredag', solution: 'vendredi' },
          { label: 'd', task: 'søndag', solution: 'dimanche' },
        ],
        solution: 'a) mardi, b) jeudi, c) vendredi, d) dimanche',
        hints: ['Liten forbokstav på fransk', 'Torsdag = jeudi (Jupiter)'],
      },
    },
    {
      id: 'fransk-1-4-2-text-1',
      type: 'text',
      content: `## Bruke ukedagene i setninger

For å si "på mandag" (en bestemt mandag) bruker vi bare ukedagen uten artikkel. For å si "på mandager" (vanligvis) bruker vi artikkelen **le**:

| Fransk | Norsk |
|--------|-------|
| lundi | på mandag (denne mandagen) |
| le lundi | på mandager (hver mandag) |
| le week-end | i helgen |

**Eksempler:**
- Lundi, j'ai école. (På mandag har jeg skole.)
- Le vendredi, je vais au cinéma. (På fredager går jeg på kino.)`,
    },
    {
      id: 'fransk-1-4-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Setninger med ukedager',
      problem: `Oversett til fransk:

a) På tirsdag spiller jeg fotball.
b) På lørdager besøkervi bestemor.`,
      solution: `**Løsning:**

a) **Mardi, je joue au football.**

b) **Le samedi, nous visitons grand-mère.**`,
    },
    {
      id: 'fransk-1-4-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-4-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'På onsdag har jeg fransk.', solution: 'Mercredi, j\'ai français.' },
          { label: 'b', task: 'På søndager sover jeg lenge.', solution: 'Le dimanche, je dors longtemps.' },
        ],
        solution: 'a) Mercredi, j\'ai français. b) Le dimanche, je dors longtemps.',
        hints: ['Uten artikkel = en bestemt dag', 'Med "le" = vanligvis / hver uke'],
      },
    },
    {
      id: 'fransk-1-4-2-text-2',
      type: 'text',
      content: `## Spørre om hvilken dag

| Fransk | Norsk |
|--------|-------|
| Quel jour sommes-nous ? | Hvilken dag er det i dag? |
| Aujourd'hui, c'est lundi. | I dag er det mandag. |
| Demain, c'est mardi. | I morgen er det tirsdag. |
| Hier, c'était dimanche. | I går var det søndag. |`,
    },
    {
      id: 'fransk-1-4-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Spørre om dagen',
      problem: `Svar på fransk (i dag er onsdag):

a) Quel jour sommes-nous ?
b) Quel jour est demain ?
c) Quel jour etait hier ?`,
      solution: `**Løsning:**

a) **Aujourd'hui, c'est mercredi.** (I dag er det onsdag.)

b) **Demain, c'est jeudi.** (I morgen er det torsdag.)

c) **Hier, c'était mardi.** (I går var det tirsdag.)`,
    },
    {
      id: 'fransk-1-4-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-4-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar på fransk (i dag er fredag):',
        subTasks: [
          { label: 'a', task: 'Hvilken dag er det i dag?', solution: 'Aujourd\'hui, c\'est vendredi.' },
          { label: 'b', task: 'Hvilken dag er det i morgen?', solution: 'Demain, c\'est samedi.' },
          { label: 'c', task: 'Hvilken dag var det i gaar?', solution: 'Hier, c\'etait jeudi.' },
        ],
        solution: 'a) Aujourd\'hui, c\'est vendredi. b) Demain, c\'est samedi. c) Hier, c\'etait jeudi.',
        hints: ['aujourd\'hui = i dag', 'demain = i morgen', 'hier = i gaar'],
      },
    },
    {
      id: 'fransk-1-4-2-tip-1',
      type: 'tip',
      content: `**Huskeregel:**

- Uten artikkel = en bestemt dag (lundi = på mandag)
- Med **le** = vanligvis (le lundi = på mandager)
- **aujourd'hui** = i dag
- **demain** = i morgen
- **hier** = i gaar`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 4.3 Les mois et les saisons - Måneder og årstider
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_1_4_3: TextbookChapter = {
  id: 'fransk-1-4-3',
  courseId: 'fransk-1',
  chapterNumber: '4.3',
  title: 'Les mois et les saisons',
  subtitle: 'Måneder og årstider',
  description: 'Lær månedene og årstidene på fransk.',
  estimatedMinutes: 40,
  competenceGoals: [
    'si månedene på fransk',
    'snakke om årstider',
    'si når man har bursdag',
  ],
  content: [
    {
      id: 'fransk-1-4-3-intro',
      type: 'text',
      content: `## Månedene på fransk

Månedene på fransk ligner på de norske:

| Fransk | Norsk |
|--------|-------|
| janvier | januar |
| février | februar |
| mars | mars |
| avril | april |
| mai | mai |
| juin | juni |
| juillet | juli |
| août | august |
| septembre | september |
| octobre | oktober |
| novembre | november |
| décembre | desember |

**Merk:** Månedene skrives med liten forbokstav på fransk.`,
    },
    {
      id: 'fransk-1-4-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Månedene',
      problem: `Si på fransk:

a) mars
b) august
c) desember`,
      solution: `**Løsning:**

a) **mars**

b) **août**

c) **décembre**`,
    },
    {
      id: 'fransk-1-4-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-4-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv månedene på fransk:',
        subTasks: [
          { label: 'a', task: 'januar', solution: 'janvier' },
          { label: 'b', task: 'mai', solution: 'mai' },
          { label: 'c', task: 'juli', solution: 'juillet' },
          { label: 'd', task: 'oktober', solution: 'octobre' },
        ],
        solution: 'a) janvier, b) mai, c) juillet, d) octobre',
        hints: ['Liten forbokstav', 'Ligner på norsk'],
      },
    },
    {
      id: 'fransk-1-4-3-text-1',
      type: 'text',
      content: `## Årstidene

| Fransk | Norsk |
|--------|-------|
| le printemps | våren |
| l'été (m) | sommeren |
| l'automne (m) | høsten |
| l'hiver (m) | vinteren |

**Måneder i hver årstid:**
- **le printemps :** mars, avril, mai
- **l'été :** juin, juillet, août
- **l'automne :** septembre, octobre, novembre
- **l'hiver :** décembre, janvier, février`,
    },
    {
      id: 'fransk-1-4-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Årstider',
      problem: `Si på fransk:

a) Sommeren er varm.
b) Om vinteren snor det.`,
      solution: `**Løsning:**

a) **L'été est chaud.**

b) **En hiver, il neige.**`,
    },
    {
      id: 'fransk-1-4-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-4-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv årstidene på fransk:',
        subTasks: [
          { label: 'a', task: 'våren', solution: 'le printemps' },
          { label: 'b', task: 'sommeren', solution: "l'été" },
          { label: 'c', task: 'høsten', solution: "l'automne" },
          { label: 'd', task: 'vinteren', solution: "l'hiver" },
        ],
        solution: "a) le printemps, b) l'été, c) l'automne, d) l'hiver",
        hints: ['Alle årstidene er hankjønn', 'Våren har bestemt artikkel "le"'],
      },
    },
    {
      id: 'fransk-1-4-3-text-2',
      type: 'text',
      content: `## Bruke måneder og årstider

For å si "i januar" bruker vi **en**. For årstidene varierer preposisjonen:

| Fransk | Norsk |
|--------|-------|
| en janvier | i januar |
| en ete | om sommeren |
| en automne | om høsten |
| en hiver | om vinteren |
| au printemps | om våren |

**Merk:** Våren bruker "au" (= a + le), de andre bruker "en".

**Eksempel:**
- Mon anniversaire est en mai. (Bursdagen min er i mai.)
- En hiver, je fais du ski. (Om vinteren går jeg på ski.)`,
    },
    {
      id: 'fransk-1-4-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Bursdag',
      problem: `Si på fransk:

a) Bursdagen min er i mars.
b) Når har du bursdag?`,
      solution: `**Løsning:**

a) **Mon anniversaire est en mars.**

b) **Quand est ton anniversaire ? / C'est quand, ton anniversaire ?**`,
    },
    {
      id: 'fransk-1-4-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-4-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Bursdagen min er i juli.', solution: 'Mon anniversaire est en juillet.' },
          { label: 'b', task: 'Om våren blomstrer traerne.', solution: 'Au printemps, les arbres fleurissent.' },
          { label: 'c', task: 'I desember feirer vi jul.', solution: 'En décembre, nous fêtons Noël.' },
        ],
        solution: 'a) Mon anniversaire est en juillet. b) Au printemps, les arbres fleurissent. c) En décembre, nous fêtons Noël.',
        hints: ['Bruk "en" + måned', 'Våren = au printemps', 'Noël = jul'],
      },
    },
    {
      id: 'fransk-1-4-3-tip-1',
      type: 'tip',
      content: `**Datoer på fransk:**

På fransk bruker vi ordenstall for datoer, UNNTATT den første:

| Fransk | Norsk |
|--------|-------|
| le premier janvier | 1. januar |
| le deux février | 2. februar |
| le trois mars | 3. mars |
| le vingt-cinq décembre | 25. desember |

"Le premier" (den første) er det eneste ordenstallet - ellers bruker vi vanlige tall.`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 4.4 Ma journee - Min dagsrutine
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_1_4_4: TextbookChapter = {
  id: 'fransk-1-4-4',
  courseId: 'fransk-1',
  chapterNumber: '4.4',
  title: 'Ma journee',
  subtitle: 'Min dagsrutine',
  description: 'Lær å fortelle om din daglige rutine.',
  estimatedMinutes: 45,
  competenceGoals: [
    'fortelle om daglige aktiviteter',
    'bruke refleksive verb',
    'snakke om tidspunkter',
  ],
  content: [
    {
      id: 'fransk-1-4-4-intro',
      type: 'text',
      content: `## Daglige aktiviteter

Her er vanlige aktiviteter i løpet av en dag:

| Fransk | Norsk |
|--------|-------|
| se réveiller | våkne |
| se lever | staa opp |
| se doucher | dusje |
| s'habiller | kle på seg |
| prendre le petit déjeuner | spise frokost |
| aller à l'école | gaa på skolen |
| déjeuner | spise lunsj |
| faire les devoirs | gjore lekser |
| diner | spise middag |
| regarder la télé | se på TV |
| se coucher | legge seg |`,
    },
    {
      id: 'fransk-1-4-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Morgenrutine',
      problem: `Si på fransk:

a) Jeg står opp klokka 7.
b) Jeg spiser frokost.
c) Jeg går på skolen.`,
      solution: `**Løsning:**

a) **Je me leve a sept heures.**

b) **Je prends le petit déjeuner.**

c) **Je vais à l'école.**`,
    },
    {
      id: 'fransk-1-4-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-4-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Jeg våkner klokka 6.', solution: 'Je me réveille a six heures.' },
          { label: 'b', task: 'Jeg spiser lunsj.', solution: 'Je déjeune.' },
          { label: 'c', task: 'Jeg ser på TV.', solution: 'Je regarde la télé.' },
        ],
        solution: 'a) Je me réveille a six heures. b) Je déjeune. c) Je regarde la télé.',
        hints: ['Se réveiller er et refleksivt verb (je me...)', 'a = klokka (tidsangivelse)'],
      },
    },
    {
      id: 'fransk-1-4-4-text-1',
      type: 'text',
      content: `## Refleksive verb (les verbes pronominaux)

Refleksive verb har et ekstra pronomen som refererer tilbake til subjektet:

| Subjekt | Pronomen | Eksempel |
|---------|----------|----------|
| je | me | je me leve |
| tu | te | tu te leves |
| il/elle | se | il se leve |
| nous | nous | nous nous levons |
| vous | vous | vous vous levez |
| ils/elles | se | ils se levent |

**Vanlige refleksive verb:**
- se lever (staa opp)
- se coucher (legge seg)
- se doucher (dusje)
- s'habiller (kle på seg)
- se réveiller (våkne)`,
    },
    {
      id: 'fransk-1-4-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Refleksive verb',
      problem: `Sett inn riktig form av verbet:

a) Je _____ a 8 heures. (se lever)
b) Elle _____ vite. (s'habiller)`,
      solution: `**Løsning:**

a) **Je me leve a huit heures.**

b) **Elle s'habille vite.**`,
    },
    {
      id: 'fransk-1-4-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-4-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fullfør setningene med riktig verbform:',
        subTasks: [
          { label: 'a', task: 'Nous _____ a 6 heures. (se lever)', solution: 'nous levons' },
          { label: 'b', task: 'Tu _____ a quelle heure ? (se coucher)', solution: 'te couches' },
          { label: 'c', task: 'Il _____ rapidement. (s\'habiller)', solution: "s'habille" },
        ],
        solution: "a) nous levons, b) te couches, c) s'habille",
        hints: ['Pronomenet endres etter subjektet', 'Verbet bøyes som vanlig'],
      },
    },
    {
      id: 'fransk-1-4-4-text-2',
      type: 'text',
      content: `## Tidsuttrykk

| Fransk | Norsk |
|--------|-------|
| le matin | om morgenen |
| l'après-midi | på ettermiddagen |
| le soir | om kvelden |
| la nuit | om natta |
| tot | tidlig |
| tard | sent |
| puis / ensuite | saa / deretter |
| d'abord | først |
| après | etter / etterpå |
| enfin | til slutt |`,
    },
    {
      id: 'fransk-1-4-4-example-3',
      type: 'example',
      title: 'Eksempel 3: En hel dag',
      problem: `Beskriv din dag på fransk med minst 4 aktiviteter.`,
      solution: `**Eksempel på løsning:**

Je me leve a sept heures. D'abord, je me douche. Ensuite, je prends le petit déjeuner. A huit heures, je vais à l'école. L'après-midi, je fais mes devoirs. Le soir, je regarde la télé. A dix heures, je me couche.

(Jeg står opp klokka syv. Foerst dusjer jeg. Saa spiser jeg frokost. Klokka aatte går jeg på skolen. På ettermiddagen gjør jeg lekser. Om kvelden ser jeg på TV. Klokka ti legger jeg meg.)`,
    },
    {
      id: 'fransk-1-4-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-4-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Om morgenen spiser jeg frokost.', solution: 'Le matin, je prends le petit déjeuner.' },
          { label: 'b', task: 'Foerst dusjer jeg, saa kler jeg på meg.', solution: "D'abord, je me douche, ensuite, je m'habille." },
          { label: 'c', task: 'Om kvelden legger jeg meg klokka 10.', solution: 'Le soir, je me couche a dix heures.' },
        ],
        solution: "a) Le matin, je prends le petit déjeuner. b) D'abord, je me douche, ensuite, je m'habille. c) Le soir, je me couche a dix heures.",
        hints: ['Bruk tidsuttrykk i begynnelsen', "d'abord = først, ensuite = saa"],
      },
    },
    {
      id: 'fransk-1-4-4-tip-1',
      type: 'tip',
      content: `**Tips for å fortelle om dagen din:**

1. Begynn med når du står opp
2. Bruk tidsord som "d'abord", "ensuite", "puis"
3. Husk refleksivpronomen på refleksive verb
4. Avslutt med når du legger deg`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5: MAT OG RESTAURANT
// ============================================================================

// ----------------------------------------------------------------------------
// 5.1 Manger et boire - Mat og drikke
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_1_5_1: TextbookChapter = {
  id: 'fransk-1-5-1',
  courseId: 'fransk-1',
  chapterNumber: '5.1',
  title: 'Manger et boire',
  subtitle: 'Mat og drikke',
  description: 'Lær grunnleggende ord for mat og drikke på fransk, samt delingsartikler.',
  estimatedMinutes: 45,
  competenceGoals: [
    'navngi vanlig mat og drikke',
    'bruke delingsartikler (articles partitifs)',
  ],
  content: [
    {
      id: 'fransk-1-5-1-intro',
      type: 'text',
      content: `## Mat på fransk

Mat er et viktig tema! Her er grunnleggende matvarer:

**Brød og bakevarer:**

| Fransk | Norsk |
|--------|-------|
| le pain | brødet |
| la baguette | baguetten |
| le croissant | croissanten |
| le gâteau | kaken |
| la tarte | paien / terten |`,
    },
    {
      id: 'fransk-1-5-1-text-1',
      type: 'text',
      content: `## Kjoett og pålegg

| Fransk | Norsk |
|--------|-------|
| la viande | kjøttet |
| le poulet | kyllingen |
| le porc | svinekjøtt |
| le bœuf | oksekjøtt |
| le jambon | skinken |
| le poisson | fisken |
| l'œuf (m) / les œufs | egget / eggene |
| le fromage | osten |
| le beurre | smøret |`,
    },
    {
      id: 'fransk-1-5-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Matord',
      problem: `Si på fransk:

a) brød
b) ost
c) egg`,
      solution: `**Løsning:**

a) **le pain**

b) **le fromage**

c) **l'œuf** (flertall: les œufs)`,
    },
    {
      id: 'fransk-1-5-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-5-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv på fransk med artikkel:',
        subTasks: [
          { label: 'a', task: 'skinke', solution: 'le jambon' },
          { label: 'b', task: 'kylling', solution: 'le poulet' },
          { label: 'c', task: 'smør', solution: 'le beurre' },
          { label: 'd', task: 'kake', solution: 'le gâteau' },
        ],
        solution: 'a) le jambon, b) le poulet, c) le beurre, d) le gâteau',
        hints: ['Husk artikkelen (le / la / l\')'],
      },
    },
    {
      id: 'fransk-1-5-1-text-2',
      type: 'text',
      content: `## Frukt og grønnsaker

| Fransk | Norsk |
|--------|-------|
| les fruits (m) | fruktene |
| la pomme | eplet |
| la banane | bananen |
| l'orange (f) | appelsinen |
| la fraise | jordbæret |
| les legumes (m) | grønnsakene |
| la tomate | tomaten |
| le concombre | agurken |
| la pomme de terre | poteten |
| la salade | salaten |

## Delingsartikler (articles partitifs)

På fransk bruker vi delingsartikler for å si "noe av":

| Delingsartikkel | Brukes før |
|-----------------|------------|
| du | hankjønnsord (du pain = noe brød) |
| de la | hunkjønnsord (de la viande = noe kjøtt) |
| de l' | ord som begynner på vokal (de l'eau = noe vann) |
| des | flertallsord (des fruits = noen frukter) |

**Etter nektelse:** Alle delingsartikler blir **de** (eller **d'**):
- Je mange **du** pain. -> Je **ne** mange **pas de** pain.`,
    },
    {
      id: 'fransk-1-5-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Delingsartikler',
      problem: `Si på fransk:

a) Jeg spiser brød.
b) Jeg spiser ikke kjøtt.`,
      solution: `**Løsning:**

a) **Je mange du pain.**

b) **Je ne mange pas de viande.**`,
    },
    {
      id: 'fransk-1-5-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-5-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett inn riktig delingsartikkel (du, de la, de l\', des):',
        subTasks: [
          { label: 'a', task: 'Je mange ___ fromage.', solution: 'du' },
          { label: 'b', task: 'Tu bois ___ eau.', solution: "de l'" },
          { label: 'c', task: 'Elle mange ___ salade.', solution: 'de la' },
          { label: 'd', task: 'Nous mangeons ___ fruits.', solution: 'des' },
        ],
        solution: "a) du, b) de l', c) de la, d) des",
        hints: ['Fromage = hankjønn -> du', 'Eau begynner på vokal -> de l\''],
      },
    },
    {
      id: 'fransk-1-5-1-text-3',
      type: 'text',
      content: `## Drikke

| Fransk | Norsk |
|--------|-------|
| l'eau (f) | vannet |
| le lait | melka |
| le jus | juicen |
| le jus d'orange | appelsinjuicen |
| le café | kaffen |
| le thé | teen |
| la limonade | brusen |
| la bière | ølet |
| le vin | vinen |`,
    },
    {
      id: 'fransk-1-5-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Drikke',
      problem: `Si på fransk:

a) Jeg drikker vann.
b) Vil du ha kaffe?`,
      solution: `**Løsning:**

a) **Je bois de l'eau.**

b) **Tu veux du café ?** / **Vous voulez du café ?**`,
    },
    {
      id: 'fransk-1-5-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-5-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Jeg drikker melk.', solution: 'Je bois du lait.' },
          { label: 'b', task: 'Han liker te.', solution: 'Il aime le thé.' },
          { label: 'c', task: 'Vi drikker appelsinjuice.', solution: "Nous buvons du jus d'orange." },
        ],
        solution: "a) Je bois du lait. b) Il aime le thé. c) Nous buvons du jus d'orange.",
        hints: ['boire = drikke (je bois, nous buvons)', 'aimer = like (bruker bestemt artikkel: le/la/les)'],
      },
    },
    {
      id: 'fransk-1-5-1-tip-1',
      type: 'tip',
      content: `**Nyttige uttrykk:**

| Fransk | Norsk |
|--------|-------|
| Je mange... | Jeg spiser... |
| Je bois... | Jeg drikker... |
| J'aime... | Jeg liker... |
| Je n'aime pas... | Jeg liker ikke... |
| J'ai faim | Jeg er sulten |
| J'ai soif | Jeg er tørst |`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 5.2 Au restaurant - På restauranten
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_1_5_2: TextbookChapter = {
  id: 'fransk-1-5-2',
  courseId: 'fransk-1',
  chapterNumber: '5.2',
  title: 'Au restaurant',
  subtitle: 'På restauranten',
  description: 'Lær å bestille mat og kommunisere på restaurant.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bestille mat og drikke',
    'forstå servitoren',
    'betale regningen',
  ],
  content: [
    {
      id: 'fransk-1-5-2-intro',
      type: 'text',
      content: `## På restauranten

Når du besøker en restaurant i Frankrike, er det nyttig å kunne disse uttrykkene:

**Ankomst:**

| Fransk | Norsk |
|--------|-------|
| Une table pour deux, s'il vous plaît. | Et bord for to, takk. |
| Avez-vous une table libre ? | Har dere et ledig bord? |
| J'ai réservé. | Jeg har réservért. |`,
    },
    {
      id: 'fransk-1-5-2-text-1',
      type: 'text',
      content: `## Bestilling

**Servitøren sier:**

| Fransk | Norsk |
|--------|-------|
| Vous avez choisi ? | Har De valgt? |
| Qu'est-ce que vous désirez ? | Hva ønsker De? |
| Et comme boisson ? | Og å drikke? |

**Du svarer:**

| Fransk | Norsk |
|--------|-------|
| Je voudrais... | Jeg vil gjerne ha... |
| Je vais prendre... | Jeg tar... |
| Pour moi... | For meg... |
| La carte, s'il vous plaît. | Menyen, takk. |`,
    },
    {
      id: 'fransk-1-5-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Bestilling',
      problem: `Bestill på fransk:

a) en pizza
b) et glass vann
c) menyen`,
      solution: `**Løsning:**

a) **Je voudrais une pizza, s'il vous plaît.**

b) **Je voudrais un verre d'eau, s'il vous plaît.**

c) **La carte, s'il vous plaît.**`,
    },
    {
      id: 'fransk-1-5-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-5-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bestill på fransk:',
        subTasks: [
          { label: 'a', task: 'en kaffe', solution: 'Je voudrais un café, s\'il vous plait.' },
          { label: 'b', task: 'en suppe', solution: 'Je voudrais une soupe, s\'il vous plait.' },
          { label: 'c', task: 'en biff', solution: 'Je voudrais un steak, s\'il vous plait.' },
        ],
        solution: 'a) Je voudrais un café. b) Je voudrais une soupe. c) Je voudrais un steak.',
        hints: ['Bruk "Je voudrais..." (Jeg vil gjerne ha...)'],
      },
    },
    {
      id: 'fransk-1-5-2-text-2',
      type: 'text',
      content: `## Betaling

| Fransk | Norsk |
|--------|-------|
| L'addition, s'il vous plaît. | Regningen, takk. |
| Je peux payer ? | Kan jeg betale? |
| On paie ensemble ou séparément ? | Betaler vi sammen eller hver for seg? |
| Ensemble, s'il vous plaît. | Sammen, takk. |
| Séparément, s'il vous plaît. | Hver for seg, takk. |
| Gardez la monnaie. | Behold resten (tips). |
| Ça fait... euros. | Det blir... euro. |`,
    },
    {
      id: 'fransk-1-5-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Betaling',
      problem: `Si på fransk:

a) Regningen, takk.
b) Vi betaler sammen.
c) Behold resten.`,
      solution: `**Løsning:**

a) **L'addition, s'il vous plaît.**

b) **Ensemble, s'il vous plaît.**

c) **Gardez la monnaie.**`,
    },
    {
      id: 'fransk-1-5-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-5-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva sier du på fransk?',
        subTasks: [
          { label: 'a', task: 'Du vil betale.', solution: "L'addition, s'il vous plaît." },
          { label: 'b', task: 'Dere vil betale hver for seg.', solution: "Séparément, s'il vous plaît." },
          { label: 'c', task: 'Du gir tips (behold resten).', solution: 'Gardez la monnaie.' },
        ],
        solution: "a) L'addition, s'il vous plaît. b) Séparément, s'il vous plaît. c) Gardez la monnaie.",
        hints: ["L'addition = regningen", 'la monnaie = vekslepenger/resten'],
      },
    },
    {
      id: 'fransk-1-5-2-text-3',
      type: 'text',
      content: `## Høflige fraser

| Fransk | Norsk |
|--------|-------|
| C'était délicieux ! | Det var deilig! |
| C'était très bon ! | Det var veldig godt! |
| Merci beaucoup ! | Tusen takk! |
| Bon appetit ! | God appetitt! |
| Merci, de meme ! | Takk, i like maate! |`,
    },
    {
      id: 'fransk-1-5-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Dialog på restaurant',
      problem: `Fullfør dialogen:

Serveur : Bonjour ! Vous avez choisi ?
Du : _____
Serveur : Et comme boisson ?
Du : _____`,
      solution: `**Eksempel på løsning:**

Serveur : Bonjour ! Vous avez choisi ?
Du : **Oui, je voudrais une pizza margherita, s'il vous plaît.**

Serveur : Et comme boisson ?
Du : **Un verre de coca, s'il vous plaît.**`,
    },
    {
      id: 'fransk-1-5-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-5-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett dialogen til fransk:',
        subTasks: [
          { label: 'a', task: 'Servitør: Hva ønsker De?', solution: "Qu'est-ce que vous désirez ?" },
          { label: 'b', task: 'Du: Jeg vil gjerne ha en salat.', solution: 'Je voudrais une salade, s\'il vous plait.' },
          { label: 'c', task: 'Servitør: Var det godt?', solution: "C'était bon ?" },
          { label: 'd', task: 'Du: Ja, veldig godt!', solution: 'Oui, c\'etait très bon !' },
        ],
        solution: "a) Qu'est-ce que vous désirez ? b) Je voudrais une salade. c) C'était bon ? d) Oui, c'était très bon !",
        hints: ['voudrais = vil gjerne ha', "c'était = det var"],
      },
    },
    {
      id: 'fransk-1-5-2-note-1',
      type: 'note',
      content: `**Kulturell info:**

I Frankrike er det vanlig at tips (le pourboire) er inkludert i regningen ("service compris"). Likevel kan du legge igjen litt ekstra for god service. Det er vanlig å runde opp beløpet eller legge igjen 1-2 euro. I Frankrike er lunsj (le déjeuner) det viktigste måltidet, og det er vanlig med en lang lunsjpause.`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 5.3 Au supermarché - På butikken
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_1_5_3: TextbookChapter = {
  id: 'fransk-1-5-3',
  courseId: 'fransk-1',
  chapterNumber: '5.3',
  title: 'Au supermarché',
  subtitle: 'På butikken',
  description: 'Lær å handle og kommunisere i butikken.',
  estimatedMinutes: 40,
  competenceGoals: [
    'handle i butikken',
    'spørre om priser',
    'snakke om mengder',
  ],
  content: [
    {
      id: 'fransk-1-5-3-intro',
      type: 'text',
      content: `## I butikken

Viktige ord for å handle:

| Fransk | Norsk |
|--------|-------|
| le supermarché | supermarkedet |
| le magasin | butikken |
| la boulangerie | bakeriet |
| la boucherie | slakterbutikken |
| le marché | markedet |
| le caddie | handlevogna |
| le panier | kurven |
| la caisse | kassa |`,
    },
    {
      id: 'fransk-1-5-3-text-1',
      type: 'text',
      content: `## Mengde og emballasje

| Fransk | Norsk |
|--------|-------|
| un morceau de | et stykke |
| une tranche de | en skive |
| une bouteille de | en flaske |
| une boite de | en boks |
| un sac de | en pose |
| un kilo de | en kilo |
| une livre de (500g) | et pund |
| un litre de | en liter |
| cent grammes de | hundre gram |

**Merk:** Etter mengdeuttrykk bruker vi **de** (ikke du/de la/des):
- un kilo **de** pommes (en kilo epler)
- une bouteille **de** lait (en flaske melk)`,
    },
    {
      id: 'fransk-1-5-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Bestille i butikken',
      problem: `Si på fransk:

a) En kilo epler, takk.
b) Tre skiver skinke.
c) En flaske melk.`,
      solution: `**Løsning:**

a) **Un kilo de pommes, s'il vous plaît.**

b) **Trois tranches de jambon, s'il vous plaît.**

c) **Une bouteille de lait, s'il vous plaît.**`,
    },
    {
      id: 'fransk-1-5-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-5-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Si på fransk:',
        subTasks: [
          { label: 'a', task: 'En flaske vann', solution: "Une bouteille d'eau" },
          { label: 'b', task: 'Hundre gram ost', solution: 'Cent grammes de fromage' },
          { label: 'c', task: 'To kilo poteter', solution: 'Deux kilos de pommes de terre' },
        ],
        solution: "a) Une bouteille d'eau, b) Cent grammes de fromage, c) Deux kilos de pommes de terre",
        hints: ['Mengde + de + vare', 'Eau begynner på vokal: d\'eau'],
      },
    },
    {
      id: 'fransk-1-5-3-text-2',
      type: 'text',
      content: `## Spørre om pris

| Fransk | Norsk |
|--------|-------|
| C'est combien ? | Hva koster det? |
| Combien coûte... ? | Hvor mye koster...? |
| Ça coûte... euros. | Det koster... euro. |
| Ça fait... euros. | Det blir... euro. |
| C'est trop cher. | Det er for dyrt. |
| C'est pas cher. / C'est bon marché. | Det er billig. |`,
    },
    {
      id: 'fransk-1-5-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Spørre om pris',
      problem: `Si på fransk:

a) Hva koster brødet?
b) Det er for dyrt.`,
      solution: `**Løsning:**

a) **Combien coûte le pain ?** / **C'est combien, le pain ?**

b) **C'est trop cher.**`,
    },
    {
      id: 'fransk-1-5-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-5-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Hva koster det?', solution: "C'est combien ?" },
          { label: 'b', task: 'Det blir 5 euro.', solution: 'Ça fait cinq euros.' },
          { label: 'c', task: 'Det er billig.', solution: "C'est pas cher. / C'est bon marché." },
        ],
        solution: "a) C'est combien ? b) Ça fait cinq euros. c) C'est pas cher.",
        hints: ['coûter = koste', 'ca fait = det blir'],
      },
    },
    {
      id: 'fransk-1-5-3-text-3',
      type: 'text',
      content: `## Ved kassa

| Fransk | Norsk |
|--------|-------|
| En espèces ou par carte ? | Kontant eller med kort? |
| Je paie en especes. | Jeg betaler kontant. |
| Par carte, s'il vous plaît. | Med kort, takk. |
| Vous voulez un sac ? | Vil De ha en pose? |
| Oui, s'il vous plaît. / Non, merci. | Ja, takk. / Nei, takk. |
| Voici votre monnaie. | Her er vekslepengene. |`,
    },
    {
      id: 'fransk-1-5-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Ved kassa',
      problem: `Hva svarer du?

a) En espèces ou par carte ?
b) Vous voulez un sac ?`,
      solution: `**Mulige svar:**

a) **Je paie en especes.** eller **Par carte, s'il vous plaît.**

b) **Oui, s'il vous plaît.** eller **Non, merci.**`,
    },
    {
      id: 'fransk-1-5-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-5-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva sier du på fransk?',
        subTasks: [
          { label: 'a', task: 'Du vil betale med kort.', solution: "Par carte, s'il vous plaît." },
          { label: 'b', task: 'Du trenger ikke pose.', solution: 'Non, merci.' },
          { label: 'c', task: 'Du vil betale kontant.', solution: 'Je paie en especes.' },
        ],
        solution: "a) Par carte, s'il vous plaît. b) Non, merci. c) Je paie en especes.",
        hints: ['especes = kontanter', 'carte = kort'],
      },
    },
    {
      id: 'fransk-1-5-3-tip-1',
      type: 'tip',
      content: `**Tips for å handle i Frankrike:**

1. Ta med egen handlepose - plastposer koster penger
2. På markedet (le marché) kan du kjøpere fersk frukt og grønnsaker
3. La boulangerie (bakeriet) er svart viktig i Frankrike - folk kjøper fersk baguette hver dag
4. Mange butikker er stengt på søndager`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 5.4 La cuisine française - Fransk mat
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_1_5_4: TextbookChapter = {
  id: 'fransk-1-5-4',
  courseId: 'fransk-1',
  chapterNumber: '5.4',
  title: 'La cuisine française',
  subtitle: 'Fransk mat',
  description: 'Lær om tradisjonell fransk mat og matkultur.',
  estimatedMinutes: 40,
  competenceGoals: [
    'kjenne til fransk matkultur',
    'beskrive tradisjonelle franske retter',
  ],
  content: [
    {
      id: 'fransk-1-5-4-intro',
      type: 'text',
      content: `## Tradisjonell fransk mat

Frankrike er kjent for sitt fantastiske kjoekken! Fransk matkultur er på UNESCOs verdensarvliste. Her er noen av de mest kjente rettene:

**Klassiske retter:**

| Fransk | Beskrivelse |
|--------|-------------|
| la crepe | tynn pannekake |
| le croissant | smørrull/halvmaane |
| la baguette | langt, tynt brød |
| la quiche lorraine | pai med egg, ost og skinke |
| le croque-monsieur | varm ostetoast med skinke |
| la ratatouille | grønnsaksgryte fra Provence |`,
    },
    {
      id: 'fransk-1-5-4-text-1',
      type: 'text',
      content: `## Ost (le fromage)

Frankrike har over 400 forskjellige ostesort! Noen av de mest kjente:

| Fransk | Beskrivelse |
|--------|-------------|
| le camembert | myk ost fra Normandie |
| le brie | myk ost fra Ile-de-France |
| le roquefort | blåmuggost fra Aveyron |
| le comte | hard ost fra Jura |
| le chevre | geitost |

Ost serveres ofte som egen rett etter hovedretten i Frankrike.`,
    },
    {
      id: 'fransk-1-5-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Fransk mat',
      problem: `Hva er dette på norsk?

a) la crepe
b) la baguette
c) le croissant`,
      solution: `**Løsning:**

a) **tynn pannekake**

b) **langt, tynt brød (baguett)**

c) **smørrull / halvmaaneformet bakverk (croissant)**`,
    },
    {
      id: 'fransk-1-5-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-5-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Match rettene med beskrivelsen:',
        subTasks: [
          { label: 'a', task: 'la quiche lorraine', solution: 'pai med egg, ost og skinke' },
          { label: 'b', task: 'le croque-monsieur', solution: 'varm ostetoast med skinke' },
          { label: 'c', task: 'la ratatouille', solution: 'grønnsaksgryte fra Provence' },
        ],
        solution: 'a) pai med egg, ost og skinke, b) varm ostetoast med skinke, c) grønnsaksgryte fra Provence',
        hints: ['Quiche = pai', 'Croque = sprød/knasende'],
      },
    },
    {
      id: 'fransk-1-5-4-text-2',
      type: 'text',
      content: `## Franske maaltider

I Frankrike er maaltidene svart viktige:

| Fransk | Norsk | Tidspunkt |
|--------|-------|-----------|
| le petit déjeuner | frokosten | ca. 7-8 |
| le déjeuner | lunsjen | ca. 12-14 |
| le gouter | mellommåltidet | ca. 16 |
| le diner | middagen | ca. 19-21 |

**Typisk fransk frokost:**
- un croissant ou un pain au chocolat (sjokoladebolle)
- du café au lait (kaffe med melk)
- du jus d'orange (appelsinjuice)
- une tartine avec du beurre et de la confiture (brød med smør og syltetoey)`,
    },
    {
      id: 'fransk-1-5-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Bestille fransk mat',
      problem: `Si på fransk:

a) Jeg vil gjerne ha en crepe med sjokolade.
b) En kaffe med melk, takk.`,
      solution: `**Løsning:**

a) **Je voudrais une crepe au chocolat, s'il vous plaît.**

b) **Un café au lait, s'il vous plaît.**`,
    },
    {
      id: 'fransk-1-5-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-5-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Jeg vil gjerne ha en quiche med salat.', solution: 'Je voudrais une quiche avec une salade, s\'il vous plait.' },
          { label: 'b', task: 'Kan jeg faa en baguette, takk?', solution: 'Je peux avoir une baguette, s\'il vous plait ?' },
          { label: 'c', task: 'Osten smaker godt.', solution: 'Le fromage est bon. / Le fromage est délicieux.' },
        ],
        solution: 'a) Je voudrais une quiche avec une salade. b) Je peux avoir une baguette ? c) Le fromage est bon.',
        hints: ['avec = med', 'bon/délicieux = godt/deilig'],
      },
    },
    {
      id: 'fransk-1-5-4-text-3',
      type: 'text',
      content: `## Regionale spesialiteter

Frankrike har mange regionale spesialiteter:

| Region | Spesialitet |
|--------|-------------|
| Bretagne | les crepes og les galettes (bokhvete-crepes) |
| Provence | la ratatouille, la bouillabaisse (fiskesuppe) |
| Bourgogne | le bœuf bourguignon (oksegryte i vin) |
| Alsace | la choucroute (surkaal med poelser) |
| Normandie | le camembert, les moules (blåkoett) |
| Lyon | les quenelles (fiskepolser), la salade lyonnaise |`,
    },
    {
      id: 'fransk-1-5-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Franske spesialiteter',
      problem: `Svar på spørsmålene:

a) Hvilken region er kjent for crepes?
b) Hva er bouillabaisse?`,
      solution: `**Løsning:**

a) **Bretagne** er kjent for crepes og galettes.

b) **La bouillabaisse** er en fiskesuppe fra Provence.`,
    },
    {
      id: 'fransk-1-5-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-5-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva er dette på fransk?',
        subTasks: [
          { label: 'a', task: 'tynn pannekake', solution: 'la crepe' },
          { label: 'b', task: 'oksegryte i vin', solution: 'le bœuf bourguignon' },
          { label: 'c', task: 'fiskesuppe fra Provence', solution: 'la bouillabaisse' },
        ],
        solution: 'a) la crepe, b) le bœuf bourguignon, c) la bouillabaisse',
        hints: ['Crepe = tynn pannekake', 'Bourguignon = fra Bourgogne (vinregion)'],
      },
    },
    {
      id: 'fransk-1-5-4-note-1',
      type: 'note',
      content: `**Visste du?**

- Frankrike er verdens mest besøkerland - maten er en stor grunn!
- Baguetten er saa viktig at det finnes en lov om hvordan den skal lages
- "Le gouter" (kl. 16-måltidet) er spesielt viktig for barn
- Fransk matkultur ble satt på UNESCOs verdensarvliste i 2010
- Det er over 400 ostesorter i Frankrike - Charles de Gaulle sa: "Hvordan kan man styre et land med 246 ostesorter?"`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: HJEM OG BOLIG
// ============================================================================

// ----------------------------------------------------------------------------
// 6.1 La maison - Huset
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_1_6_1: TextbookChapter = {
  id: 'fransk-1-6-1',
  courseId: 'fransk-1',
  chapterNumber: '6.1',
  title: 'La maison',
  subtitle: 'Huset',
  description: 'Lær om rommene i et hus.',
  estimatedMinutes: 45,
  competenceGoals: [
    'navngi rom i et hus',
    'beskrive hvor ting er',
  ],
  content: [
    {
      id: 'fransk-1-6-1-intro',
      type: 'text',
      content: `## Rommene i huset

Et hus har mange rom. Her er de viktigste:

| Fransk | Norsk |
|--------|-------|
| la maison | huset |
| l'appartement (m) | leiligheten |
| la piece | rommet |
| la chambre | (sove)rommet |`,
    },
    {
      id: 'fransk-1-6-1-text-1',
      type: 'text',
      content: `## Rommene

| Fransk | Norsk |
|--------|-------|
| la cuisine | kjoekkenet |
| le salon / le sejour | stua |
| la chambre (a coucher) | soverommet |
| la salle de bains | badet |
| la chambre d'enfant | barnerommet |
| la salle a manger | spisestua |
| le bureau | kontoret |
| le couloir / l'entree | gangen |
| la cave | kjelleren |
| le grenier | loftet |
| le garage | garasjen |
| le jardin | hagen |`,
    },
    {
      id: 'fransk-1-6-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Rommene',
      problem: `Si på fransk:

a) kjoekkenet
b) stua
c) soverommet`,
      solution: `**Løsning:**

a) **la cuisine**

b) **le salon**

c) **la chambre**`,
    },
    {
      id: 'fransk-1-6-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-6-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv på fransk:',
        subTasks: [
          { label: 'a', task: 'badet', solution: 'la salle de bains' },
          { label: 'b', task: 'hagen', solution: 'le jardin' },
          { label: 'c', task: 'kjelleren', solution: 'la cave' },
          { label: 'd', task: 'gangen', solution: "le couloir / l'entree" },
        ],
        solution: "a) la salle de bains, b) le jardin, c) la cave, d) le couloir / l'entree",
        hints: ['Salle de bains = badeværelset', 'Jardin = hage'],
      },
    },
    {
      id: 'fransk-1-6-1-text-2',
      type: 'text',
      content: `## Beskrive huset

| Fransk | Norsk |
|--------|-------|
| grand(e) | stor(t) |
| petit(e) | lite(n) |
| clair(e) | lys(t) |
| sombre | mørkt |
| confortable | komfortabelt |
| moderne | moderne |
| ancien(ne) | gammelt |
| nouveau/nouvelle | nytt |

**Setningsmal:**
- La maison est grande. (Huset er stort.)
- La cuisine est moderne. (Kjoekkenet er moderne.)`,
    },
    {
      id: 'fransk-1-6-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Beskrive rom',
      problem: `Oversett til fransk:

a) Stua er stor.
b) Badet er lite.
c) Kjoekkenet er moderne.`,
      solution: `**Løsning:**

a) **Le salon est grand.**

b) **La salle de bains est petite.**

c) **La cuisine est moderne.**`,
    },
    {
      id: 'fransk-1-6-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-6-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Hagen er stor.', solution: 'Le jardin est grand.' },
          { label: 'b', task: 'Soverommet er koselig.', solution: 'La chambre est confortable.' },
          { label: 'c', task: 'Huset er gammelt.', solution: 'La maison est ancienne.' },
        ],
        solution: 'a) Le jardin est grand. b) La chambre est confortable. c) La maison est ancienne.',
        hints: ['Husk at adjektivet maa samsvare i kjønn', 'ancien -> ancienne (hunkjønn)'],
      },
    },
    {
      id: 'fransk-1-6-1-text-3',
      type: 'text',
      content: `## Hvor er...?

| Fransk | Norsk |
|--------|-------|
| Ou est... ? | Hvor er...? |
| au rez-de-chaussee | i første etasje |
| au premier étage | i andre etasje |
| au deuxième étage | i tredje etasje |
| en haut | oppe |
| en bas | nede |
| à gauche | til venstre |
| à droite | til høyre |`,
    },
    {
      id: 'fransk-1-6-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Hvor er rommet?',
      problem: `Si på fransk:

a) Kjoekkenet er i første etasje.
b) Soverommet er oppe.`,
      solution: `**Løsning:**

a) **La cuisine est au rez-de-chaussee.**

b) **La chambre est en haut.**`,
    },
    {
      id: 'fransk-1-6-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-6-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Hvor er badet?', solution: 'Où est la salle de bains ?' },
          { label: 'b', task: 'Badet er oppe.', solution: 'La salle de bains est en haut.' },
          { label: 'c', task: 'Stua er til venstre.', solution: 'Le salon est à gauche.' },
        ],
        solution: 'a) Où est la salle de bains ? b) La salle de bains est en haut. c) Le salon est à gauche.',
        hints: ['ou = hvor', 'en haut = oppe'],
      },
    },
    {
      id: 'fransk-1-6-1-tip-1',
      type: 'tip',
      content: `**Huskeregel for etasjer:**

- **le rez-de-chaussee** = første etasje (bakkenivaa)
- **le premier étage** = andre etasje
- **le deuxième étage** = tredje etasje

I Frankrike teller man annerledes - det vi kaller første etasje er "le rez-de-chaussee" (gateplan). På fransk begynner man å telle etasjer fra den første etasjen OVER bakkenivaa.`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 6.2 Les meubles - Moeblene
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_1_6_2: TextbookChapter = {
  id: 'fransk-1-6-2',
  courseId: 'fransk-1',
  chapterNumber: '6.2',
  title: 'Les meubles',
  subtitle: 'Moeblene',
  description: 'Lær navnene på moebler og preposisjoner på fransk.',
  estimatedMinutes: 40,
  competenceGoals: [
    'navngi vanlige moebler',
    'bruke preposisjoner for å si hvor ting er',
  ],
  content: [
    {
      id: 'fransk-1-6-2-intro',
      type: 'text',
      content: `## Moebler i hjemmet

Her er de vanligste moeblene:

**I stua (dans le salon):**

| Fransk | Norsk |
|--------|-------|
| le canape | sofaen |
| le fauteuil | lenestolen |
| la table | bordet |
| la table basse | sofabordet |
| la télévision / la télé | TVen |
| l'etagere (f) | hylla |
| la lampe | lampa |`,
    },
    {
      id: 'fransk-1-6-2-text-1',
      type: 'text',
      content: `## Flere moebler

**I soverommet (dans la chambre):**

| Fransk | Norsk |
|--------|-------|
| le lit | senga |
| l'armoire (f) | skapet |
| la commode | kommoden |
| la table de nuit | nattbordet |
| le miroir | speilet |

**I kjoekkenet (dans la cuisine):**

| Fransk | Norsk |
|--------|-------|
| le refrigerateur / le frigo | kjoeleskapet |
| la cuisiniere | komfyren |
| l'evier (m) | vasken |
| la table a manger | spisebordet |
| la chaise | stolen |`,
    },
    {
      id: 'fransk-1-6-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Moebler',
      problem: `Si på fransk:

a) sofa
b) seng
c) bord`,
      solution: `**Løsning:**

a) **le canape**

b) **le lit**

c) **la table**`,
    },
    {
      id: 'fransk-1-6-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-6-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv på fransk med artikkel:',
        subTasks: [
          { label: 'a', task: 'stol', solution: 'la chaise' },
          { label: 'b', task: 'skap', solution: "l'armoire (f)" },
          { label: 'c', task: 'lampe', solution: 'la lampe' },
          { label: 'd', task: 'kjoeleskap', solution: 'le refrigerateur / le frigo' },
        ],
        solution: "a) la chaise, b) l'armoire, c) la lampe, d) le frigo",
        hints: ['Armoire = skap (hunkjønn)', 'Chaise = stol'],
      },
    },
    {
      id: 'fransk-1-6-2-text-2',
      type: 'text',
      content: `## Preposisjoner (les prepositions de lieu)

For å si hvor moebler og ting befinner seg:

| Fransk | Norsk |
|--------|-------|
| sur | på |
| sous | under |
| dans | i |
| devant | foran |
| derriere | bak |
| à côté de | ved siden av |
| entre | mellom |
| en face de | overfor |`,
    },
    {
      id: 'fransk-1-6-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Hvor står moeblene?',
      problem: `Si på fransk:

a) Lampa står på bordet.
b) Stolen står ved siden av sofaen.`,
      solution: `**Løsning:**

a) **La lampe est sur la table.**

b) **La chaise est a cote du canape.**`,
    },
    {
      id: 'fransk-1-6-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-6-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'TVen er foran sofaen.', solution: 'La tele est devant le canape.' },
          { label: 'b', task: 'Senga står i soverommet.', solution: 'Le lit est dans la chambre.' },
          { label: 'c', task: 'Speilet henger på veggen.', solution: 'Le miroir est sur le mur.' },
        ],
        solution: 'a) La tele est devant le canape. b) Le lit est dans la chambre. c) Le miroir est sur le mur.',
        hints: ['devant = foran', 'dans = i', 'sur = på'],
      },
    },
    {
      id: 'fransk-1-6-2-text-3',
      type: 'text',
      content: `## Flere ting i hjemmet

| Fransk | Norsk |
|--------|-------|
| le tapis | teppet |
| le tableau | bildet/maleriet |
| le rideau / les rideaux | gardinen / gardinene |
| le coussin | puta |
| la couverture | teppet/dyna |
| la plante | planten |
| l'horloge (f) | klokka |
| le vase | vasen |`,
    },
    {
      id: 'fransk-1-6-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Beskrive et rom',
      problem: `Beskriv stua på fransk med minst 3 moebler.`,
      solution: `**Eksempel på løsning:**

Dans le salon, il y a un grand canape. Devant le canape, il y a une table basse. Sur le mur, il y a une television. A cote du canape, il y a une lampe.

(I stua er det en stor sofa. Foran sofaen er det et sofabord. På veggen er det en TV. Ved siden av sofaen er det en lampe.)`,
    },
    {
      id: 'fransk-1-6-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-6-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Match moebelet med rommet:',
        subTasks: [
          { label: 'a', task: 'le lit', solution: 'la chambre' },
          { label: 'b', task: 'le frigo', solution: 'la cuisine' },
          { label: 'c', task: 'le canape', solution: 'le salon' },
        ],
        solution: 'a) la chambre, b) la cuisine, c) le salon',
        hints: ['Lit = seng, frigo = kjoeleskap, canape = sofa'],
      },
    },
    {
      id: 'fransk-1-6-2-tip-1',
      type: 'tip',
      content: `**Sammentrekninger med preposisjoner:**

Når "a" eller "de" kommer før bestemt artikkel, trekkes de sammen:

- **a + le = au** (au salon = i stua)
- **a + les = aux** (aux toilettes = på toalettet)
- **de + le = du** (a cote du lit = ved siden av senga)
- **de + les = des** (pres des fenêtres = naer vinduene)

Men: **a la** og **de la** endres IKKE (a la cuisine, de la chambre).`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 6.3 Ma chambre - Rommet mitt
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_1_6_3: TextbookChapter = {
  id: 'fransk-1-6-3',
  courseId: 'fransk-1',
  chapterNumber: '6.3',
  title: 'Ma chambre',
  subtitle: 'Rommet mitt',
  description: 'Lær å beskrive ditt eget rom med "il y a".',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive sitt eget rom',
    'bruke uttrykket "il y a" (det er/finnes)',
  ],
  content: [
    {
      id: 'fransk-1-6-3-intro',
      type: 'text',
      content: `## Beskrive rommet ditt

Når du skal beskrive rommet ditt, kan du fortelle om:
- Størrelsen (grand/petit)
- Fargene
- Moeblene
- Hva du gjør der

**Nyttige uttrykk:**

| Fransk | Norsk |
|--------|-------|
| Ma chambre est... | Rommet mitt er... |
| Dans ma chambre, il y a... | I rommet mitt er det... |
| J'ai... | Jeg har... |
| Sur le mur | På veggen |
| Par terre / sur le sol | På gulvet |`,
    },
    {
      id: 'fransk-1-6-3-text-1',
      type: 'text',
      content: `## Ting på rommet

| Fransk | Norsk |
|--------|-------|
| le bureau | skrivebordet |
| l'ordinateur (m) | datamaskinen |
| le portable | laptopen / mobilen |
| le poster / l'affiche (f) | plakaten |
| la bibliothèque | bokhylla |
| les livres (m) | boekene |
| les jouets (m) | lekene |
| la photo | bildet/fotografiet |
| la plante | planten |

## "Il y a" (det er / det finnes)

**Il y a** er et veldig nyttig uttrykk på fransk. Det betyr "det er" eller "det finnes":

- **Il y a** un lit. (Det er en seng.)
- **Il y a** des livres. (Det er noen bøker.)
- **Il n'y a pas de** television. (Det er ingen TV.)`,
    },
    {
      id: 'fransk-1-6-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Beskrive rommet',
      problem: `Si på fransk:

a) Rommet mitt er stort.
b) Jeg har en datamaskin.
c) På veggen henger en plakat.`,
      solution: `**Løsning:**

a) **Ma chambre est grande.**

b) **J'ai un ordinateur.**

c) **Sur le mur, il y a un poster.**`,
    },
    {
      id: 'fransk-1-6-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-6-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Rommet mitt er lite.', solution: 'Ma chambre est petite.' },
          { label: 'b', task: 'Jeg har et skrivebord.', solution: "J'ai un bureau." },
          { label: 'c', task: 'Senga mi er stor.', solution: 'Mon lit est grand.' },
        ],
        solution: "a) Ma chambre est petite. b) J'ai un bureau. c) Mon lit est grand.",
        hints: ['ma = min (hunkjønn)', 'mon = min (hankjønn)'],
      },
    },
    {
      id: 'fransk-1-6-3-text-2',
      type: 'text',
      content: `## Farger på rommet

| Fransk | Norsk |
|--------|-------|
| Les murs sont... | Veggene er... |
| Le tapis est... | Teppet er... |
| Les meubles sont... | Moeblene er... |

**Farger:**
blanc/blanche (hvit), noir(e) (svart), bleu(e) (blå), vert(e) (grønn), rouge (rød), jaune (gul), marron (brun), gris(e) (grå), rose (rosa), violet(te) (lilla)

**Merk:** De fleste fargene maa samsvare i kjønn og tall:
- Le mur est **blanc**. (hankjønn)
- La porte est **blanche**. (hunkjønn)
- Les murs sont **blancs**. (flertall)`,
    },
    {
      id: 'fransk-1-6-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Farger',
      problem: `Si på fransk:

a) Veggene er hvite.
b) Teppet er blått.`,
      solution: `**Løsning:**

a) **Les murs sont blancs.**

b) **Le tapis est bleu.**`,
    },
    {
      id: 'fransk-1-6-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-6-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Veggene er blå.', solution: 'Les murs sont bleus.' },
          { label: 'b', task: 'Skrivebordet er hvitt.', solution: 'Le bureau est blanc.' },
          { label: 'c', task: 'Stolen er brun.', solution: 'La chaise est marron.' },
        ],
        solution: 'a) Les murs sont bleus. b) Le bureau est blanc. c) La chaise est marron.',
        hints: ['Murs er flertall -> bleus', 'Marron endres aldri i form'],
      },
    },
    {
      id: 'fransk-1-6-3-text-3',
      type: 'text',
      content: `## Hva gjør du på rommet?

| Fransk | Norsk |
|--------|-------|
| Je dors. | Jeg sover. |
| Je fais mes devoirs. | Jeg gjør lekser. |
| Je lis. | Jeg leser. |
| Je joue. | Jeg leker/spiller. |
| J'écoute de la musique. | Jeg hører på musikk. |
| Je me repose. | Jeg slapper av. |`,
    },
    {
      id: 'fransk-1-6-3-example-3',
      type: 'example',
      title: 'Eksempel 3: En beskrivelse av rommet',
      problem: `Skriv en kort beskrivelse av rommet ditt på fransk (minst 4 setninger).`,
      solution: `**Eksempel på løsning:**

Ma chambre n'est pas très grande, mais elle est confortable. Les murs sont bleu clair. Dans ma chambre, il y a un lit et un bureau. Sur le mur, il y a beaucoup de posters. J'ai aussi une bibliothèque avec beaucoup de livres. Dans ma chambre, je fais mes devoirs et j'écoute de la musique.

(Rommet mitt er ikke veldig stort, men det er komfortabelt. Veggene er lyseblå. I rommet mitt er det en seng og et skrivebord. På veggen er det mange plakater. Jeg har også en bokhylle med mange bøker. På rommet mitt gjør jeg lekser og hører på musikk.)`,
    },
    {
      id: 'fransk-1-6-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-6-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'I rommet mitt er det en seng.', solution: 'Dans ma chambre, il y a un lit.' },
          { label: 'b', task: 'På rommet mitt leser jeg bøker.', solution: 'Dans ma chambre, je lis des livres.' },
          { label: 'c', task: 'Rommet mitt er koselig.', solution: 'Ma chambre est confortable.' },
        ],
        solution: 'a) Dans ma chambre, il y a un lit. b) Dans ma chambre, je lis des livres. c) Ma chambre est confortable.',
        hints: ['il y a = det er/finnes', 'dans ma chambre = i rommet mitt'],
      },
    },
    {
      id: 'fransk-1-6-3-tip-1',
      type: 'tip',
      content: `**Tips for å beskrive rommet:**

1. Start med størrelse og form
2. Nevn fargene på vegger og moebler
3. Bruk "il y a" for å si hva som finnes i rommet
4. Fortell hva du gjør på rommet
5. Si hva du liker best med rommet: "Ce que j'aime le plus, c'est..."`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 6.4 Habiter en France - Bo i Frankrike
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_1_6_4: TextbookChapter = {
  id: 'fransk-1-6-4',
  courseId: 'fransk-1',
  chapterNumber: '6.4',
  title: 'Habiter en France',
  subtitle: 'Bo i Frankrike',
  description: 'Lær om hvordan folk bor i Frankrike.',
  estimatedMinutes: 40,
  competenceGoals: [
    'kjenne til boformer i Frankrike',
    'snakke om hvor man bor',
  ],
  content: [
    {
      id: 'fransk-1-6-4-intro',
      type: 'text',
      content: `## Boformer i Frankrike

I Frankrike bor folk på ulike maater:

| Fransk | Norsk |
|--------|-------|
| la maison individuelle | enebolig |
| la maison mitoyenne | rekkehus |
| l'immeuble (m) | boligblokk |
| l'appartement (m) | leiligheten |
| le studio | ettromsleilighet |
| la colocation | kollektiv |`,
    },
    {
      id: 'fransk-1-6-4-text-1',
      type: 'text',
      content: `## Snakke om hvor du bor

| Fransk | Norsk |
|--------|-------|
| Où habites-tu ? / Tu habites ou ? | Hvor bor du? |
| J'habite a... | Jeg bor i... |
| J'habite dans un appartement. | Jeg bor i en leilighet. |
| J'habite dans une maison. | Jeg bor i et hus. |
| J'habite chez mes parents. | Jeg bor hos foreldrene mine. |
| J'habite seul(e). | Jeg bor alene. |
| J'habite avec ma famille. | Jeg bor med familien min. |`,
    },
    {
      id: 'fransk-1-6-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Hvor bor du?',
      problem: `Si på fransk:

a) Jeg bor i Oslo.
b) Jeg bor i et hus.
c) Jeg bor med familien min.`,
      solution: `**Løsning:**

a) **J'habite a Oslo.**

b) **J'habite dans une maison.**

c) **J'habite avec ma famille.**`,
    },
    {
      id: 'fransk-1-6-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-6-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Jeg bor i en leilighet.', solution: "J'habite dans un appartement." },
          { label: 'b', task: 'Hvor bor du?', solution: 'Où habites-tu ? / Tu habites ou ?' },
          { label: 'c', task: 'Han bor i Paris.', solution: 'Il habite a Paris.' },
        ],
        solution: "a) J'habite dans un appartement. b) Tu habites ou ? c) Il habite a Paris.",
        hints: ['habiter = bo', 'dans un appartement = i en leilighet'],
      },
    },
    {
      id: 'fransk-1-6-4-text-2',
      type: 'text',
      content: `## Beskrive boligen

| Fransk | Norsk |
|--------|-------|
| L'appartement a... pieces. | Leiligheten har... rom. |
| Le loyer est de... euros. | Husleien er... euro. |
| La maison a un jardin. | Huset har en hage. |
| L'appartement est central. | Leiligheten ligger sentralt. |
| L'appartement est calme. | Leiligheten er rolig. |
| Il y a un balcon. | Det er en balkong. |
| Il y a un ascenseur. | Det er heis. |`,
    },
    {
      id: 'fransk-1-6-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Beskrive boligen',
      problem: `Si på fransk:

a) Leiligheten har 4 rom.
b) Det er en balkong.
c) Huset har en hage.`,
      solution: `**Løsning:**

a) **L'appartement a quatre pieces.**

b) **Il y a un balcon.**

c) **La maison a un jardin.**`,
    },
    {
      id: 'fransk-1-6-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-6-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Leiligheten er stor.', solution: "L'appartement est grand." },
          { label: 'b', task: 'Det er heis.', solution: 'Il y a un ascenseur.' },
          { label: 'c', task: 'Leiligheten ligger sentralt.', solution: "L'appartement est central." },
        ],
        solution: "a) L'appartement est grand. b) Il y a un ascenseur. c) L'appartement est central.",
        hints: ['il y a = det er/finnes', 'ascenseur = heis'],
      },
    },
    {
      id: 'fransk-1-6-4-text-3',
      type: 'text',
      content: `## Byer og omraader

| Fransk | Norsk |
|--------|-------|
| en ville | i byen |
| a la campagne | på landet |
| pres de... | i nærheten av... |
| dans le centre-ville | i sentrum |
| en banlieue | i forstaden |
| dans un quartier | i en bydel |`,
    },
    {
      id: 'fransk-1-6-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Hvor ligger boligen?',
      problem: `Si på fransk:

a) Jeg bor i byen.
b) Vi bor på landet.
c) Huset ligger i nærheten av skolen.`,
      solution: `**Løsning:**

a) **J'habite en ville.**

b) **Nous habitons a la campagne.**

c) **La maison est pres de l'école.**`,
    },
    {
      id: 'fransk-1-6-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-6-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Jeg bor i sentrum.', solution: "J'habite dans le centre-ville." },
          { label: 'b', task: 'De bor på landet.', solution: 'Ils habitent a la campagne.' },
          { label: 'c', task: 'Leiligheten er i forstaden.', solution: "L'appartement est en banlieue." },
        ],
        solution: "a) J'habite dans le centre-ville. b) Ils habitent a la campagne. c) L'appartement est en banlieue.",
        hints: ['centre-ville = sentrum', 'a la campagne = på landet'],
      },
    },
    {
      id: 'fransk-1-6-4-note-1',
      type: 'note',
      content: `**Visste du?**

- I Frankrike er det svart vanlig å bo i leilighet, spesielt i storbyene
- Paris er kjent for sine "immeubles haussmanniens" - elegante boligblokker fra 1800-tallet
- Mange franske leiligheter har trepersiener (les volets) utenfor vinduene
- "La colocation" (kollektiv) er svart populaert blant studenter i Frankrike
- I Frankrike kaller man ofte leiligheter etter antall rom: un T2 (to rom), un T3 (tre rom), osv.`,
    },
    {
      id: 'fransk-1-6-4-tip-1',
      type: 'tip',
      content: `**Nyttige ord for boligannonser:**

| Fransk | Norsk |
|--------|-------|
| le loyer | husleien |
| les charges | tilleggsutgifter |
| meuble(e) | moelert |
| non meuble(e) | umoelert |
| disponible immediatement | ledig umiddelbart |
| la caution | depositum |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORTER ALLE KAPITLER
// ============================================================================

export const FRANSK_1_CHAPTERS_4_6: TextbookChapter[] = [
  CHAPTER_FRANSK_1_4_1,
  CHAPTER_FRANSK_1_4_2,
  CHAPTER_FRANSK_1_4_3,
  CHAPTER_FRANSK_1_4_4,
  CHAPTER_FRANSK_1_5_1,
  CHAPTER_FRANSK_1_5_2,
  CHAPTER_FRANSK_1_5_3,
  CHAPTER_FRANSK_1_5_4,
  CHAPTER_FRANSK_1_6_1,
  CHAPTER_FRANSK_1_6_2,
  CHAPTER_FRANSK_1_6_3,
  CHAPTER_FRANSK_1_6_4,
];
