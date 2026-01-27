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
  description: 'Laer aa si hva klokken er paa fransk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'si hva klokken er',
    'spoerre om klokkeslett',
  ],
  content: [
    {
      id: 'fransk-1-4-1-intro',
      type: 'text',
      content: `## Klokkeslett paa fransk

Aa kunne si hva klokken er, er viktig i hverdagen. Paa fransk bruker vi uttrykket "Il est... heure(s)" for aa si klokkeslettet.

**Spoerre om klokken:**

| Fransk | Norsk |
|--------|-------|
| Quelle heure est-il ? | Hva er klokka? |
| Il est quelle heure ? | Hva er klokka? (uformell) |
| A quelle heure ? | Naar? / Klokka hva? |`,
    },
    {
      id: 'fransk-1-4-1-text-1',
      type: 'text',
      content: `## Hele timer

For aa si hele timer bruker vi "Il est ... heure(s)":

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

**Merk:** Ved klokka ett sier vi "une heure" (entall). Klokka 12 er "midi" (midt paa dagen) og klokka 24/00 er "minuit" (midnatt).`,
    },
    {
      id: 'fransk-1-4-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Hele timer',
      problem: `Si paa fransk:

a) Klokka er 3
b) Klokka er 7
c) Klokka er 12`,
      solution: `**Loesning:**

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
        task: 'Si paa fransk:',
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

Paa fransk bruker vi spesielle uttrykk for halv og kvart:

| Klokka | Fransk | Forklaring |
|--------|--------|------------|
| 2:15 | Il est deux heures et quart | Kvart over to |
| 2:30 | Il est deux heures et demie | Halv tre |
| 2:45 | Il est trois heures moins le quart | Kvart paa tre |

**Viktig:** Ved "et demie" (halv) og "et quart" (kvart over) refererer man til den gjeldende timen. Ved "moins le quart" (kvart paa) refererer man til den kommende timen.`,
    },
    {
      id: 'fransk-1-4-1-warning-1',
      type: 'warning',
      content: `**Merk forskjellen paa "midi" og "minuit":**

- **midi** = midt paa dagen (kl. 12:00)
- **minuit** = midnatt (kl. 00:00)

Ved "midi" og "minuit" sier vi: "Il est midi et demi" (uten -e paa demi, fordi midi er hankjoenn), men "Il est deux heures et demie" (med -e, fordi heure er hunkjoenn).`,
    },
    {
      id: 'fransk-1-4-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Halv og kvart',
      problem: `Si paa fransk:

a) Klokka er kvart over fire (4:15)
b) Klokka er halv fem (4:30)
c) Klokka er kvart paa seks (5:45)`,
      solution: `**Loesning:**

a) **Il est quatre heures et quart.** (kvart over fire)

b) **Il est quatre heures et demie.** (halv fem = 4:30)

c) **Il est six heures moins le quart.** (kvart paa seks)`,
    },
    {
      id: 'fransk-1-4-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-4-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Si paa fransk:',
        subTasks: [
          { label: 'a', task: '3:15', solution: 'Il est trois heures et quart' },
          { label: 'b', task: '6:30', solution: 'Il est six heures et demie' },
          { label: 'c', task: '8:45', solution: 'Il est neuf heures moins le quart' },
          { label: 'd', task: '11:30', solution: 'Il est onze heures et demie' },
        ],
        solution: 'a) Il est trois heures et quart, b) Il est six heures et demie, c) Il est neuf heures moins le quart, d) Il est onze heures et demie',
        hints: ['Kvart over = et quart', 'Halv = et demie', 'Kvart paa = moins le quart (bruk neste time)'],
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
      problem: `Si paa fransk:

a) 4:10
b) 7:50
c) 15:25 (offisiell tid)`,
      solution: `**Loesning:**

a) **Il est quatre heures dix.** (ti over fire)

b) **Il est huit heures moins dix.** (ti paa aatte)

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
        task: 'Hva er klokka paa norsk?',
        subTasks: [
          { label: 'a', task: 'Il est neuf heures et demie', solution: '9:30 (halv ti)' },
          { label: 'b', task: 'Il est onze heures et quart', solution: '11:15 (kvart over elleve)' },
          { label: 'c', task: 'Il est six heures moins vingt', solution: '5:40 (tjue paa seks)' },
        ],
        solution: 'a) 9:30, b) 11:15, c) 5:40',
        hints: ['et demie = halv (gjeldende time + 30 min)', 'et quart = kvart over', 'moins = minus / paa'],
      },
    },
    {
      id: 'fransk-1-4-1-tip-1',
      type: 'tip',
      content: `**Tips for aa huske klokkeslett:**

1. "et quart" = kvart over (+ 15 min)
2. "et demie" = halv (+ 30 min)
3. "moins le quart" = kvart paa (- 15 min fra neste time)
4. "moins" = minus / paa (trekk fra neste time)
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
  description: 'Laer ukedagene paa fransk og hvordan du bruker dem.',
  estimatedMinutes: 40,
  competenceGoals: [
    'si ukedagene paa fransk',
    'snakke om hva som skjer paa ulike dager',
  ],
  content: [
    {
      id: 'fransk-1-4-2-intro',
      type: 'text',
      content: `## Ukedagene paa fransk

Ukedagene er viktige ord som du bruker hver dag. Paa fransk begynner uka med mandag.

| Fransk | Norsk |
|--------|-------|
| lundi | mandag |
| mardi | tirsdag |
| mercredi | onsdag |
| jeudi | torsdag |
| vendredi | fredag |
| samedi | loerdag |
| dimanche | soendag |

**Merk:** Ukedagene skrives med liten forbokstav paa fransk (i motsetning til paa norsk og tysk).`,
    },
    {
      id: 'fransk-1-4-2-note-1',
      type: 'note',
      content: `**Opprinnelsen til navnene:**

- **lundi** - Maanens dag (la Lune = maanen)
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
      problem: `Si paa fransk:

a) mandag
b) onsdag
c) loerdag`,
      solution: `**Loesning:**

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
        task: 'Skriv ukedagene paa fransk:',
        subTasks: [
          { label: 'a', task: 'tirsdag', solution: 'mardi' },
          { label: 'b', task: 'torsdag', solution: 'jeudi' },
          { label: 'c', task: 'fredag', solution: 'vendredi' },
          { label: 'd', task: 'soendag', solution: 'dimanche' },
        ],
        solution: 'a) mardi, b) jeudi, c) vendredi, d) dimanche',
        hints: ['Liten forbokstav paa fransk', 'Torsdag = jeudi (Jupiter)'],
      },
    },
    {
      id: 'fransk-1-4-2-text-1',
      type: 'text',
      content: `## Bruke ukedagene i setninger

For aa si "paa mandag" (en bestemt mandag) bruker vi bare ukedagen uten artikkel. For aa si "paa mandager" (vanligvis) bruker vi artikkelen **le**:

| Fransk | Norsk |
|--------|-------|
| lundi | paa mandag (denne mandagen) |
| le lundi | paa mandager (hver mandag) |
| le week-end | i helgen |

**Eksempler:**
- Lundi, j'ai ecole. (Paa mandag har jeg skole.)
- Le vendredi, je vais au cinema. (Paa fredager gaar jeg paa kino.)`,
    },
    {
      id: 'fransk-1-4-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Setninger med ukedager',
      problem: `Oversett til fransk:

a) Paa tirsdag spiller jeg fotball.
b) Paa loerdager besoekervi bestemor.`,
      solution: `**Loesning:**

a) **Mardi, je joue au football.**

b) **Le samedi, nous visitons grand-mere.**`,
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
          { label: 'a', task: 'Paa onsdag har jeg fransk.', solution: 'Mercredi, j\'ai francais.' },
          { label: 'b', task: 'Paa soendager sover jeg lenge.', solution: 'Le dimanche, je dors longtemps.' },
        ],
        solution: 'a) Mercredi, j\'ai francais. b) Le dimanche, je dors longtemps.',
        hints: ['Uten artikkel = en bestemt dag', 'Med "le" = vanligvis / hver uke'],
      },
    },
    {
      id: 'fransk-1-4-2-text-2',
      type: 'text',
      content: `## Spoerre om hvilken dag

| Fransk | Norsk |
|--------|-------|
| Quel jour sommes-nous ? | Hvilken dag er det i dag? |
| Aujourd'hui, c'est lundi. | I dag er det mandag. |
| Demain, c'est mardi. | I morgen er det tirsdag. |
| Hier, c'etait dimanche. | I gaar var det soendag. |`,
    },
    {
      id: 'fransk-1-4-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Spoerre om dagen',
      problem: `Svar paa fransk (i dag er onsdag):

a) Quel jour sommes-nous ?
b) Quel jour est demain ?
c) Quel jour etait hier ?`,
      solution: `**Loesning:**

a) **Aujourd'hui, c'est mercredi.** (I dag er det onsdag.)

b) **Demain, c'est jeudi.** (I morgen er det torsdag.)

c) **Hier, c'etait mardi.** (I gaar var det tirsdag.)`,
    },
    {
      id: 'fransk-1-4-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-4-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar paa fransk (i dag er fredag):',
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

- Uten artikkel = en bestemt dag (lundi = paa mandag)
- Med **le** = vanligvis (le lundi = paa mandager)
- **aujourd'hui** = i dag
- **demain** = i morgen
- **hier** = i gaar`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 4.3 Les mois et les saisons - Maaneder og aarstider
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_1_4_3: TextbookChapter = {
  id: 'fransk-1-4-3',
  courseId: 'fransk-1',
  chapterNumber: '4.3',
  title: 'Les mois et les saisons',
  subtitle: 'Maaneder og aarstider',
  description: 'Laer maanedene og aarstidene paa fransk.',
  estimatedMinutes: 40,
  competenceGoals: [
    'si maanedene paa fransk',
    'snakke om aarstider',
    'si naar man har bursdag',
  ],
  content: [
    {
      id: 'fransk-1-4-3-intro',
      type: 'text',
      content: `## Maanedene paa fransk

Maanedene paa fransk ligner paa de norske:

| Fransk | Norsk |
|--------|-------|
| janvier | januar |
| fevrier | februar |
| mars | mars |
| avril | april |
| mai | mai |
| juin | juni |
| juillet | juli |
| aout | august |
| septembre | september |
| octobre | oktober |
| novembre | november |
| decembre | desember |

**Merk:** Maanedene skrives med liten forbokstav paa fransk.`,
    },
    {
      id: 'fransk-1-4-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Maanedene',
      problem: `Si paa fransk:

a) mars
b) august
c) desember`,
      solution: `**Loesning:**

a) **mars**

b) **aout**

c) **decembre**`,
    },
    {
      id: 'fransk-1-4-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-4-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv maanedene paa fransk:',
        subTasks: [
          { label: 'a', task: 'januar', solution: 'janvier' },
          { label: 'b', task: 'mai', solution: 'mai' },
          { label: 'c', task: 'juli', solution: 'juillet' },
          { label: 'd', task: 'oktober', solution: 'octobre' },
        ],
        solution: 'a) janvier, b) mai, c) juillet, d) octobre',
        hints: ['Liten forbokstav', 'Ligner paa norsk'],
      },
    },
    {
      id: 'fransk-1-4-3-text-1',
      type: 'text',
      content: `## Aarstidene

| Fransk | Norsk |
|--------|-------|
| le printemps | vaaren |
| l'ete (m) | sommeren |
| l'automne (m) | hoesten |
| l'hiver (m) | vinteren |

**Maaneder i hver aarstid:**
- **le printemps :** mars, avril, mai
- **l'ete :** juin, juillet, aout
- **l'automne :** septembre, octobre, novembre
- **l'hiver :** decembre, janvier, fevrier`,
    },
    {
      id: 'fransk-1-4-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Aarstider',
      problem: `Si paa fransk:

a) Sommeren er varm.
b) Om vinteren snor det.`,
      solution: `**Loesning:**

a) **L'ete est chaud.**

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
        task: 'Skriv aarstidene paa fransk:',
        subTasks: [
          { label: 'a', task: 'vaaren', solution: 'le printemps' },
          { label: 'b', task: 'sommeren', solution: "l'ete" },
          { label: 'c', task: 'hoesten', solution: "l'automne" },
          { label: 'd', task: 'vinteren', solution: "l'hiver" },
        ],
        solution: "a) le printemps, b) l'ete, c) l'automne, d) l'hiver",
        hints: ['Alle aarstidene er hankjoenn', 'Vaaren har bestemt artikkel "le"'],
      },
    },
    {
      id: 'fransk-1-4-3-text-2',
      type: 'text',
      content: `## Bruke maaneder og aarstider

For aa si "i januar" bruker vi **en**. For aarstidene varierer preposisjonen:

| Fransk | Norsk |
|--------|-------|
| en janvier | i januar |
| en ete | om sommeren |
| en automne | om hoesten |
| en hiver | om vinteren |
| au printemps | om vaaren |

**Merk:** Vaaren bruker "au" (= a + le), de andre bruker "en".

**Eksempel:**
- Mon anniversaire est en mai. (Bursdagen min er i mai.)
- En hiver, je fais du ski. (Om vinteren gaar jeg paa ski.)`,
    },
    {
      id: 'fransk-1-4-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Bursdag',
      problem: `Si paa fransk:

a) Bursdagen min er i mars.
b) Naar har du bursdag?`,
      solution: `**Loesning:**

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
          { label: 'b', task: 'Om vaaren blomstrer traerne.', solution: 'Au printemps, les arbres fleurissent.' },
          { label: 'c', task: 'I desember feirer vi jul.', solution: 'En decembre, nous fetons Noel.' },
        ],
        solution: 'a) Mon anniversaire est en juillet. b) Au printemps, les arbres fleurissent. c) En decembre, nous fetons Noel.',
        hints: ['Bruk "en" + maaned', 'Vaaren = au printemps', 'Noel = jul'],
      },
    },
    {
      id: 'fransk-1-4-3-tip-1',
      type: 'tip',
      content: `**Datoer paa fransk:**

Paa fransk bruker vi ordenstall for datoer, UNNTATT den foerste:

| Fransk | Norsk |
|--------|-------|
| le premier janvier | 1. januar |
| le deux fevrier | 2. februar |
| le trois mars | 3. mars |
| le vingt-cinq decembre | 25. desember |

"Le premier" (den foerste) er det eneste ordenstallet - ellers bruker vi vanlige tall.`,
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
  description: 'Laer aa fortelle om din daglige rutine.',
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

Her er vanlige aktiviteter i loepet av en dag:

| Fransk | Norsk |
|--------|-------|
| se reveiller | vaakne |
| se lever | staa opp |
| se doucher | dusje |
| s'habiller | kle paa seg |
| prendre le petit dejeuner | spise frokost |
| aller a l'ecole | gaa paa skolen |
| dejeuner | spise lunsj |
| faire les devoirs | gjore lekser |
| diner | spise middag |
| regarder la tele | se paa TV |
| se coucher | legge seg |`,
    },
    {
      id: 'fransk-1-4-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Morgenrutine',
      problem: `Si paa fransk:

a) Jeg staar opp klokka 7.
b) Jeg spiser frokost.
c) Jeg gaar paa skolen.`,
      solution: `**Loesning:**

a) **Je me leve a sept heures.**

b) **Je prends le petit dejeuner.**

c) **Je vais a l'ecole.**`,
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
          { label: 'a', task: 'Jeg vaakner klokka 6.', solution: 'Je me reveille a six heures.' },
          { label: 'b', task: 'Jeg spiser lunsj.', solution: 'Je dejeune.' },
          { label: 'c', task: 'Jeg ser paa TV.', solution: 'Je regarde la tele.' },
        ],
        solution: 'a) Je me reveille a six heures. b) Je dejeune. c) Je regarde la tele.',
        hints: ['Se reveiller er et refleksivt verb (je me...)', 'a = klokka (tidsangivelse)'],
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
- s'habiller (kle paa seg)
- se reveiller (vaakne)`,
    },
    {
      id: 'fransk-1-4-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Refleksive verb',
      problem: `Sett inn riktig form av verbet:

a) Je _____ a 8 heures. (se lever)
b) Elle _____ vite. (s'habiller)`,
      solution: `**Loesning:**

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
        task: 'Fullfaer setningene med riktig verbform:',
        subTasks: [
          { label: 'a', task: 'Nous _____ a 6 heures. (se lever)', solution: 'nous levons' },
          { label: 'b', task: 'Tu _____ a quelle heure ? (se coucher)', solution: 'te couches' },
          { label: 'c', task: 'Il _____ rapidement. (s\'habiller)', solution: "s'habille" },
        ],
        solution: "a) nous levons, b) te couches, c) s'habille",
        hints: ['Pronomenet endres etter subjektet', 'Verbet boeyes som vanlig'],
      },
    },
    {
      id: 'fransk-1-4-4-text-2',
      type: 'text',
      content: `## Tidsuttrykk

| Fransk | Norsk |
|--------|-------|
| le matin | om morgenen |
| l'apres-midi | paa ettermiddagen |
| le soir | om kvelden |
| la nuit | om natta |
| tot | tidlig |
| tard | sent |
| puis / ensuite | saa / deretter |
| d'abord | foerst |
| apres | etter / etterpaa |
| enfin | til slutt |`,
    },
    {
      id: 'fransk-1-4-4-example-3',
      type: 'example',
      title: 'Eksempel 3: En hel dag',
      problem: `Beskriv din dag paa fransk med minst 4 aktiviteter.`,
      solution: `**Eksempel paa loesning:**

Je me leve a sept heures. D'abord, je me douche. Ensuite, je prends le petit dejeuner. A huit heures, je vais a l'ecole. L'apres-midi, je fais mes devoirs. Le soir, je regarde la tele. A dix heures, je me couche.

(Jeg staar opp klokka syv. Foerst dusjer jeg. Saa spiser jeg frokost. Klokka aatte gaar jeg paa skolen. Paa ettermiddagen gjoer jeg lekser. Om kvelden ser jeg paa TV. Klokka ti legger jeg meg.)`,
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
          { label: 'a', task: 'Om morgenen spiser jeg frokost.', solution: 'Le matin, je prends le petit dejeuner.' },
          { label: 'b', task: 'Foerst dusjer jeg, saa kler jeg paa meg.', solution: "D'abord, je me douche, ensuite, je m'habille." },
          { label: 'c', task: 'Om kvelden legger jeg meg klokka 10.', solution: 'Le soir, je me couche a dix heures.' },
        ],
        solution: "a) Le matin, je prends le petit dejeuner. b) D'abord, je me douche, ensuite, je m'habille. c) Le soir, je me couche a dix heures.",
        hints: ['Bruk tidsuttrykk i begynnelsen', "d'abord = foerst, ensuite = saa"],
      },
    },
    {
      id: 'fransk-1-4-4-tip-1',
      type: 'tip',
      content: `**Tips for aa fortelle om dagen din:**

1. Begynn med naar du staar opp
2. Bruk tidsord som "d'abord", "ensuite", "puis"
3. Husk refleksivpronomen paa refleksive verb
4. Avslutt med naar du legger deg`,
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
  description: 'Laer grunnleggende ord for mat og drikke paa fransk, samt delingsartikler.',
  estimatedMinutes: 45,
  competenceGoals: [
    'navngi vanlig mat og drikke',
    'bruke delingsartikler (articles partitifs)',
  ],
  content: [
    {
      id: 'fransk-1-5-1-intro',
      type: 'text',
      content: `## Mat paa fransk

Mat er et viktig tema! Her er grunnleggende matvarer:

**Broed og bakevarer:**

| Fransk | Norsk |
|--------|-------|
| le pain | broedet |
| la baguette | baguetten |
| le croissant | croissanten |
| le gateau | kaken |
| la tarte | paien / terten |`,
    },
    {
      id: 'fransk-1-5-1-text-1',
      type: 'text',
      content: `## Kjoett og paalegg

| Fransk | Norsk |
|--------|-------|
| la viande | kjoettet |
| le poulet | kyllingen |
| le porc | svinekoett |
| le boeuf | oksekjoett |
| le jambon | skinken |
| le poisson | fisken |
| l'oeuf (m) / les oeufs | egget / eggene |
| le fromage | osten |
| le beurre | smoeret |`,
    },
    {
      id: 'fransk-1-5-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Matord',
      problem: `Si paa fransk:

a) broed
b) ost
c) egg`,
      solution: `**Loesning:**

a) **le pain**

b) **le fromage**

c) **l'oeuf** (flertall: les oeufs)`,
    },
    {
      id: 'fransk-1-5-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-5-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv paa fransk med artikkel:',
        subTasks: [
          { label: 'a', task: 'skinke', solution: 'le jambon' },
          { label: 'b', task: 'kylling', solution: 'le poulet' },
          { label: 'c', task: 'smoer', solution: 'le beurre' },
          { label: 'd', task: 'kake', solution: 'le gateau' },
        ],
        solution: 'a) le jambon, b) le poulet, c) le beurre, d) le gateau',
        hints: ['Husk artikkelen (le / la / l\')'],
      },
    },
    {
      id: 'fransk-1-5-1-text-2',
      type: 'text',
      content: `## Frukt og groennsaker

| Fransk | Norsk |
|--------|-------|
| les fruits (m) | fruktene |
| la pomme | eplet |
| la banane | bananen |
| l'orange (f) | appelsinen |
| la fraise | jordbaeret |
| les legumes (m) | groennsakene |
| la tomate | tomaten |
| le concombre | agurken |
| la pomme de terre | poteten |
| la salade | salaten |

## Delingsartikler (articles partitifs)

Paa fransk bruker vi delingsartikler for aa si "noe av":

| Delingsartikkel | Brukes foer |
|-----------------|------------|
| du | hankjoennsord (du pain = noe broed) |
| de la | hunkjoennsord (de la viande = noe kjoett) |
| de l' | ord som begynner paa vokal (de l'eau = noe vann) |
| des | flertallsord (des fruits = noen frukter) |

**Etter nektelse:** Alle delingsartikler blir **de** (eller **d'**):
- Je mange **du** pain. -> Je **ne** mange **pas de** pain.`,
    },
    {
      id: 'fransk-1-5-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Delingsartikler',
      problem: `Si paa fransk:

a) Jeg spiser broed.
b) Jeg spiser ikke kjoett.`,
      solution: `**Loesning:**

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
        hints: ['Fromage = hankjoenn -> du', 'Eau begynner paa vokal -> de l\''],
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
| le cafe | kaffen |
| le the | teen |
| la limonade | brusen |
| la biere | oelet |
| le vin | vinen |`,
    },
    {
      id: 'fransk-1-5-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Drikke',
      problem: `Si paa fransk:

a) Jeg drikker vann.
b) Vil du ha kaffe?`,
      solution: `**Loesning:**

a) **Je bois de l'eau.**

b) **Tu veux du cafe ?** / **Vous voulez du cafe ?**`,
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
          { label: 'b', task: 'Han liker te.', solution: 'Il aime le the.' },
          { label: 'c', task: 'Vi drikker appelsinjuice.', solution: "Nous buvons du jus d'orange." },
        ],
        solution: "a) Je bois du lait. b) Il aime le the. c) Nous buvons du jus d'orange.",
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
| J'ai soif | Jeg er toerst |`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 5.2 Au restaurant - Paa restauranten
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_1_5_2: TextbookChapter = {
  id: 'fransk-1-5-2',
  courseId: 'fransk-1',
  chapterNumber: '5.2',
  title: 'Au restaurant',
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
      id: 'fransk-1-5-2-intro',
      type: 'text',
      content: `## Paa restauranten

Naar du besoekerr en restaurant i Frankrike, er det nyttig aa kunne disse uttrykkene:

**Ankomst:**

| Fransk | Norsk |
|--------|-------|
| Une table pour deux, s'il vous plait. | Et bord for to, takk. |
| Avez-vous une table libre ? | Har dere et ledig bord? |
| J'ai reserve. | Jeg har reservert. |`,
    },
    {
      id: 'fransk-1-5-2-text-1',
      type: 'text',
      content: `## Bestilling

**Servitaeren sier:**

| Fransk | Norsk |
|--------|-------|
| Vous avez choisi ? | Har De valgt? |
| Qu'est-ce que vous desirez ? | Hva oensker De? |
| Et comme boisson ? | Og aa drikke? |

**Du svarer:**

| Fransk | Norsk |
|--------|-------|
| Je voudrais... | Jeg vil gjerne ha... |
| Je vais prendre... | Jeg tar... |
| Pour moi... | For meg... |
| La carte, s'il vous plait. | Menyen, takk. |`,
    },
    {
      id: 'fransk-1-5-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Bestilling',
      problem: `Bestill paa fransk:

a) en pizza
b) et glass vann
c) menyen`,
      solution: `**Loesning:**

a) **Je voudrais une pizza, s'il vous plait.**

b) **Je voudrais un verre d'eau, s'il vous plait.**

c) **La carte, s'il vous plait.**`,
    },
    {
      id: 'fransk-1-5-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-5-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bestill paa fransk:',
        subTasks: [
          { label: 'a', task: 'en kaffe', solution: 'Je voudrais un cafe, s\'il vous plait.' },
          { label: 'b', task: 'en suppe', solution: 'Je voudrais une soupe, s\'il vous plait.' },
          { label: 'c', task: 'en biff', solution: 'Je voudrais un steak, s\'il vous plait.' },
        ],
        solution: 'a) Je voudrais un cafe. b) Je voudrais une soupe. c) Je voudrais un steak.',
        hints: ['Bruk "Je voudrais..." (Jeg vil gjerne ha...)'],
      },
    },
    {
      id: 'fransk-1-5-2-text-2',
      type: 'text',
      content: `## Betaling

| Fransk | Norsk |
|--------|-------|
| L'addition, s'il vous plait. | Regningen, takk. |
| Je peux payer ? | Kan jeg betale? |
| On paie ensemble ou separement ? | Betaler vi sammen eller hver for seg? |
| Ensemble, s'il vous plait. | Sammen, takk. |
| Separement, s'il vous plait. | Hver for seg, takk. |
| Gardez la monnaie. | Behold resten (tips). |
| Ca fait... euros. | Det blir... euro. |`,
    },
    {
      id: 'fransk-1-5-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Betaling',
      problem: `Si paa fransk:

a) Regningen, takk.
b) Vi betaler sammen.
c) Behold resten.`,
      solution: `**Loesning:**

a) **L'addition, s'il vous plait.**

b) **Ensemble, s'il vous plait.**

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
        task: 'Hva sier du paa fransk?',
        subTasks: [
          { label: 'a', task: 'Du vil betale.', solution: "L'addition, s'il vous plait." },
          { label: 'b', task: 'Dere vil betale hver for seg.', solution: "Separement, s'il vous plait." },
          { label: 'c', task: 'Du gir tips (behold resten).', solution: 'Gardez la monnaie.' },
        ],
        solution: "a) L'addition, s'il vous plait. b) Separement, s'il vous plait. c) Gardez la monnaie.",
        hints: ["L'addition = regningen", 'la monnaie = vekslepenger/resten'],
      },
    },
    {
      id: 'fransk-1-5-2-text-3',
      type: 'text',
      content: `## Hoeflige fraser

| Fransk | Norsk |
|--------|-------|
| C'etait delicieux ! | Det var deilig! |
| C'etait tres bon ! | Det var veldig godt! |
| Merci beaucoup ! | Tusen takk! |
| Bon appetit ! | God appetitt! |
| Merci, de meme ! | Takk, i like maate! |`,
    },
    {
      id: 'fransk-1-5-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Dialog paa restaurant',
      problem: `Fullfaer dialogen:

Serveur : Bonjour ! Vous avez choisi ?
Du : _____
Serveur : Et comme boisson ?
Du : _____`,
      solution: `**Eksempel paa loesning:**

Serveur : Bonjour ! Vous avez choisi ?
Du : **Oui, je voudrais une pizza margherita, s'il vous plait.**

Serveur : Et comme boisson ?
Du : **Un verre de coca, s'il vous plait.**`,
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
          { label: 'a', task: 'Servitaer: Hva oensker De?', solution: "Qu'est-ce que vous desirez ?" },
          { label: 'b', task: 'Du: Jeg vil gjerne ha en salat.', solution: 'Je voudrais une salade, s\'il vous plait.' },
          { label: 'c', task: 'Servitaer: Var det godt?', solution: "C'etait bon ?" },
          { label: 'd', task: 'Du: Ja, veldig godt!', solution: 'Oui, c\'etait tres bon !' },
        ],
        solution: "a) Qu'est-ce que vous desirez ? b) Je voudrais une salade. c) C'etait bon ? d) Oui, c'etait tres bon !",
        hints: ['voudrais = vil gjerne ha', "c'etait = det var"],
      },
    },
    {
      id: 'fransk-1-5-2-note-1',
      type: 'note',
      content: `**Kulturell info:**

I Frankrike er det vanlig at tips (le pourboire) er inkludert i regningen ("service compris"). Likevel kan du legge igjen litt ekstra for god service. Det er vanlig aa runde opp beloepet eller legge igjen 1-2 euro. I Frankrike er lunsj (le dejeuner) det viktigste maaltidet, og det er vanlig med en lang lunsjpause.`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 5.3 Au supermarche - Paa butikken
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_1_5_3: TextbookChapter = {
  id: 'fransk-1-5-3',
  courseId: 'fransk-1',
  chapterNumber: '5.3',
  title: 'Au supermarche',
  subtitle: 'Paa butikken',
  description: 'Laer aa handle og kommunisere i butikken.',
  estimatedMinutes: 40,
  competenceGoals: [
    'handle i butikken',
    'spoerre om priser',
    'snakke om mengder',
  ],
  content: [
    {
      id: 'fransk-1-5-3-intro',
      type: 'text',
      content: `## I butikken

Viktige ord for aa handle:

| Fransk | Norsk |
|--------|-------|
| le supermarche | supermarkedet |
| le magasin | butikken |
| la boulangerie | bakeriet |
| la boucherie | slakterbutikken |
| le marche | markedet |
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
      problem: `Si paa fransk:

a) En kilo epler, takk.
b) Tre skiver skinke.
c) En flaske melk.`,
      solution: `**Loesning:**

a) **Un kilo de pommes, s'il vous plait.**

b) **Trois tranches de jambon, s'il vous plait.**

c) **Une bouteille de lait, s'il vous plait.**`,
    },
    {
      id: 'fransk-1-5-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-5-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Si paa fransk:',
        subTasks: [
          { label: 'a', task: 'En flaske vann', solution: "Une bouteille d'eau" },
          { label: 'b', task: 'Hundre gram ost', solution: 'Cent grammes de fromage' },
          { label: 'c', task: 'To kilo poteter', solution: 'Deux kilos de pommes de terre' },
        ],
        solution: "a) Une bouteille d'eau, b) Cent grammes de fromage, c) Deux kilos de pommes de terre",
        hints: ['Mengde + de + vare', 'Eau begynner paa vokal: d\'eau'],
      },
    },
    {
      id: 'fransk-1-5-3-text-2',
      type: 'text',
      content: `## Spoerre om pris

| Fransk | Norsk |
|--------|-------|
| C'est combien ? | Hva koster det? |
| Combien coute... ? | Hvor mye koster...? |
| Ca coute... euros. | Det koster... euro. |
| Ca fait... euros. | Det blir... euro. |
| C'est trop cher. | Det er for dyrt. |
| C'est pas cher. / C'est bon marche. | Det er billig. |`,
    },
    {
      id: 'fransk-1-5-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Spoerre om pris',
      problem: `Si paa fransk:

a) Hva koster broedet?
b) Det er for dyrt.`,
      solution: `**Loesning:**

a) **Combien coute le pain ?** / **C'est combien, le pain ?**

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
          { label: 'b', task: 'Det blir 5 euro.', solution: 'Ca fait cinq euros.' },
          { label: 'c', task: 'Det er billig.', solution: "C'est pas cher. / C'est bon marche." },
        ],
        solution: "a) C'est combien ? b) Ca fait cinq euros. c) C'est pas cher.",
        hints: ['couter = koste', 'ca fait = det blir'],
      },
    },
    {
      id: 'fransk-1-5-3-text-3',
      type: 'text',
      content: `## Ved kassa

| Fransk | Norsk |
|--------|-------|
| En especes ou par carte ? | Kontant eller med kort? |
| Je paie en especes. | Jeg betaler kontant. |
| Par carte, s'il vous plait. | Med kort, takk. |
| Vous voulez un sac ? | Vil De ha en pose? |
| Oui, s'il vous plait. / Non, merci. | Ja, takk. / Nei, takk. |
| Voici votre monnaie. | Her er vekslepengene. |`,
    },
    {
      id: 'fransk-1-5-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Ved kassa',
      problem: `Hva svarer du?

a) En especes ou par carte ?
b) Vous voulez un sac ?`,
      solution: `**Mulige svar:**

a) **Je paie en especes.** eller **Par carte, s'il vous plait.**

b) **Oui, s'il vous plait.** eller **Non, merci.**`,
    },
    {
      id: 'fransk-1-5-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-5-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva sier du paa fransk?',
        subTasks: [
          { label: 'a', task: 'Du vil betale med kort.', solution: "Par carte, s'il vous plait." },
          { label: 'b', task: 'Du trenger ikke pose.', solution: 'Non, merci.' },
          { label: 'c', task: 'Du vil betale kontant.', solution: 'Je paie en especes.' },
        ],
        solution: "a) Par carte, s'il vous plait. b) Non, merci. c) Je paie en especes.",
        hints: ['especes = kontanter', 'carte = kort'],
      },
    },
    {
      id: 'fransk-1-5-3-tip-1',
      type: 'tip',
      content: `**Tips for aa handle i Frankrike:**

1. Ta med egen handlepose - plastposer koster penger
2. Paa markedet (le marche) kan du kjoepere fersk frukt og groennsaker
3. La boulangerie (bakeriet) er svart viktig i Frankrike - folk kjoeper fersk baguette hver dag
4. Mange butikker er stengt paa soendager`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 5.4 La cuisine francaise - Fransk mat
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_1_5_4: TextbookChapter = {
  id: 'fransk-1-5-4',
  courseId: 'fransk-1',
  chapterNumber: '5.4',
  title: 'La cuisine francaise',
  subtitle: 'Fransk mat',
  description: 'Laer om tradisjonell fransk mat og matkultur.',
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

Frankrike er kjent for sitt fantastiske kjoekken! Fransk matkultur er paa UNESCOs verdensarvliste. Her er noen av de mest kjente rettene:

**Klassiske retter:**

| Fransk | Beskrivelse |
|--------|-------------|
| la crepe | tynn pannekake |
| le croissant | smoerrull/halvmaane |
| la baguette | langt, tynt broed |
| la quiche lorraine | pai med egg, ost og skinke |
| le croque-monsieur | varm ostetoast med skinke |
| la ratatouille | groennsaksgryte fra Provence |`,
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
| le roquefort | blaamuggost fra Aveyron |
| le comte | hard ost fra Jura |
| le chevre | geitost |

Ost serveres ofte som egen rett etter hovedretten i Frankrike.`,
    },
    {
      id: 'fransk-1-5-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Fransk mat',
      problem: `Hva er dette paa norsk?

a) la crepe
b) la baguette
c) le croissant`,
      solution: `**Loesning:**

a) **tynn pannekake**

b) **langt, tynt broed (baguett)**

c) **smoerrull / halvmaaneformet bakverk (croissant)**`,
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
          { label: 'c', task: 'la ratatouille', solution: 'groennsaksgryte fra Provence' },
        ],
        solution: 'a) pai med egg, ost og skinke, b) varm ostetoast med skinke, c) groennsaksgryte fra Provence',
        hints: ['Quiche = pai', 'Croque = sproed/knasende'],
      },
    },
    {
      id: 'fransk-1-5-4-text-2',
      type: 'text',
      content: `## Franske maaltider

I Frankrike er maaltidene svart viktige:

| Fransk | Norsk | Tidspunkt |
|--------|-------|-----------|
| le petit dejeuner | frokosten | ca. 7-8 |
| le dejeuner | lunsjen | ca. 12-14 |
| le gouter | mellommaaltidet | ca. 16 |
| le diner | middagen | ca. 19-21 |

**Typisk fransk frokost:**
- un croissant ou un pain au chocolat (sjokoladebolle)
- du cafe au lait (kaffe med melk)
- du jus d'orange (appelsinjuice)
- une tartine avec du beurre et de la confiture (broed med smoer og syltetoey)`,
    },
    {
      id: 'fransk-1-5-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Bestille fransk mat',
      problem: `Si paa fransk:

a) Jeg vil gjerne ha en crepe med sjokolade.
b) En kaffe med melk, takk.`,
      solution: `**Loesning:**

a) **Je voudrais une crepe au chocolat, s'il vous plait.**

b) **Un cafe au lait, s'il vous plait.**`,
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
          { label: 'c', task: 'Osten smaker godt.', solution: 'Le fromage est bon. / Le fromage est delicieux.' },
        ],
        solution: 'a) Je voudrais une quiche avec une salade. b) Je peux avoir une baguette ? c) Le fromage est bon.',
        hints: ['avec = med', 'bon/delicieux = godt/deilig'],
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
| Bourgogne | le boeuf bourguignon (oksegryte i vin) |
| Alsace | la choucroute (surkaal med poelser) |
| Normandie | le camembert, les moules (blaakoett) |
| Lyon | les quenelles (fiskepolser), la salade lyonnaise |`,
    },
    {
      id: 'fransk-1-5-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Franske spesialiteter',
      problem: `Svar paa spoersmaalene:

a) Hvilken region er kjent for crepes?
b) Hva er bouillabaisse?`,
      solution: `**Loesning:**

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
        task: 'Hva er dette paa fransk?',
        subTasks: [
          { label: 'a', task: 'tynn pannekake', solution: 'la crepe' },
          { label: 'b', task: 'oksegryte i vin', solution: 'le boeuf bourguignon' },
          { label: 'c', task: 'fiskesuppe fra Provence', solution: 'la bouillabaisse' },
        ],
        solution: 'a) la crepe, b) le boeuf bourguignon, c) la bouillabaisse',
        hints: ['Crepe = tynn pannekake', 'Bourguignon = fra Bourgogne (vinregion)'],
      },
    },
    {
      id: 'fransk-1-5-4-note-1',
      type: 'note',
      content: `**Visste du?**

- Frankrike er verdens mest besoekerland - maten er en stor grunn!
- Baguetten er saa viktig at det finnes en lov om hvordan den skal lages
- "Le gouter" (kl. 16-maaltidet) er spesielt viktig for barn
- Fransk matkultur ble satt paa UNESCOs verdensarvliste i 2010
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
  description: 'Laer om rommene i et hus.',
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
      problem: `Si paa fransk:

a) kjoekkenet
b) stua
c) soverommet`,
      solution: `**Loesning:**

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
        task: 'Skriv paa fransk:',
        subTasks: [
          { label: 'a', task: 'badet', solution: 'la salle de bains' },
          { label: 'b', task: 'hagen', solution: 'le jardin' },
          { label: 'c', task: 'kjelleren', solution: 'la cave' },
          { label: 'd', task: 'gangen', solution: "le couloir / l'entree" },
        ],
        solution: "a) la salle de bains, b) le jardin, c) la cave, d) le couloir / l'entree",
        hints: ['Salle de bains = badevaerelset', 'Jardin = hage'],
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
| sombre | moerkt |
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
      solution: `**Loesning:**

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
        hints: ['Husk at adjektivet maa samsvare i kjoenn', 'ancien -> ancienne (hunkjoenn)'],
      },
    },
    {
      id: 'fransk-1-6-1-text-3',
      type: 'text',
      content: `## Hvor er...?

| Fransk | Norsk |
|--------|-------|
| Ou est... ? | Hvor er...? |
| au rez-de-chaussee | i foerste etasje |
| au premier etage | i andre etasje |
| au deuxieme etage | i tredje etasje |
| en haut | oppe |
| en bas | nede |
| a gauche | til venstre |
| a droite | til hoeyre |`,
    },
    {
      id: 'fransk-1-6-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Hvor er rommet?',
      problem: `Si paa fransk:

a) Kjoekkenet er i foerste etasje.
b) Soverommet er oppe.`,
      solution: `**Loesning:**

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
          { label: 'a', task: 'Hvor er badet?', solution: 'Ou est la salle de bains ?' },
          { label: 'b', task: 'Badet er oppe.', solution: 'La salle de bains est en haut.' },
          { label: 'c', task: 'Stua er til venstre.', solution: 'Le salon est a gauche.' },
        ],
        solution: 'a) Ou est la salle de bains ? b) La salle de bains est en haut. c) Le salon est a gauche.',
        hints: ['ou = hvor', 'en haut = oppe'],
      },
    },
    {
      id: 'fransk-1-6-1-tip-1',
      type: 'tip',
      content: `**Huskeregel for etasjer:**

- **le rez-de-chaussee** = foerste etasje (bakkenivaa)
- **le premier etage** = andre etasje
- **le deuxieme etage** = tredje etasje

I Frankrike teller man annerledes - det vi kaller foerste etasje er "le rez-de-chaussee" (gateplan). Paa fransk begynner man aa telle etasjer fra den foerste etasjen OVER bakkenivaa.`,
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
  description: 'Laer navnene paa moebler og preposisjoner paa fransk.',
  estimatedMinutes: 40,
  competenceGoals: [
    'navngi vanlige moebler',
    'bruke preposisjoner for aa si hvor ting er',
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
| la television / la tele | TVen |
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
      problem: `Si paa fransk:

a) sofa
b) seng
c) bord`,
      solution: `**Loesning:**

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
        task: 'Skriv paa fransk med artikkel:',
        subTasks: [
          { label: 'a', task: 'stol', solution: 'la chaise' },
          { label: 'b', task: 'skap', solution: "l'armoire (f)" },
          { label: 'c', task: 'lampe', solution: 'la lampe' },
          { label: 'd', task: 'kjoeleskap', solution: 'le refrigerateur / le frigo' },
        ],
        solution: "a) la chaise, b) l'armoire, c) la lampe, d) le frigo",
        hints: ['Armoire = skap (hunkjoenn)', 'Chaise = stol'],
      },
    },
    {
      id: 'fransk-1-6-2-text-2',
      type: 'text',
      content: `## Preposisjoner (les prepositions de lieu)

For aa si hvor moebler og ting befinner seg:

| Fransk | Norsk |
|--------|-------|
| sur | paa |
| sous | under |
| dans | i |
| devant | foran |
| derriere | bak |
| a cote de | ved siden av |
| entre | mellom |
| en face de | overfor |`,
    },
    {
      id: 'fransk-1-6-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Hvor staar moeblene?',
      problem: `Si paa fransk:

a) Lampa staar paa bordet.
b) Stolen staar ved siden av sofaen.`,
      solution: `**Loesning:**

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
          { label: 'b', task: 'Senga staar i soverommet.', solution: 'Le lit est dans la chambre.' },
          { label: 'c', task: 'Speilet henger paa veggen.', solution: 'Le miroir est sur le mur.' },
        ],
        solution: 'a) La tele est devant le canape. b) Le lit est dans la chambre. c) Le miroir est sur le mur.',
        hints: ['devant = foran', 'dans = i', 'sur = paa'],
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
      problem: `Beskriv stua paa fransk med minst 3 moebler.`,
      solution: `**Eksempel paa loesning:**

Dans le salon, il y a un grand canape. Devant le canape, il y a une table basse. Sur le mur, il y a une television. A cote du canape, il y a une lampe.

(I stua er det en stor sofa. Foran sofaen er det et sofabord. Paa veggen er det en TV. Ved siden av sofaen er det en lampe.)`,
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

Naar "a" eller "de" kommer foer bestemt artikkel, trekkes de sammen:

- **a + le = au** (au salon = i stua)
- **a + les = aux** (aux toilettes = paa toalettet)
- **de + le = du** (a cote du lit = ved siden av senga)
- **de + les = des** (pres des fenetres = naer vinduene)

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
  description: 'Laer aa beskrive ditt eget rom med "il y a".',
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

Naar du skal beskrive rommet ditt, kan du fortelle om:
- Stoerrelsen (grand/petit)
- Fargene
- Moeblene
- Hva du gjoer der

**Nyttige uttrykk:**

| Fransk | Norsk |
|--------|-------|
| Ma chambre est... | Rommet mitt er... |
| Dans ma chambre, il y a... | I rommet mitt er det... |
| J'ai... | Jeg har... |
| Sur le mur | Paa veggen |
| Par terre / sur le sol | Paa gulvet |`,
    },
    {
      id: 'fransk-1-6-3-text-1',
      type: 'text',
      content: `## Ting paa rommet

| Fransk | Norsk |
|--------|-------|
| le bureau | skrivebordet |
| l'ordinateur (m) | datamaskinen |
| le portable | laptopen / mobilen |
| le poster / l'affiche (f) | plakaten |
| la bibliotheque | bokhylla |
| les livres (m) | boekene |
| les jouets (m) | lekene |
| la photo | bildet/fotografiet |
| la plante | planten |

## "Il y a" (det er / det finnes)

**Il y a** er et veldig nyttig uttrykk paa fransk. Det betyr "det er" eller "det finnes":

- **Il y a** un lit. (Det er en seng.)
- **Il y a** des livres. (Det er noen boeker.)
- **Il n'y a pas de** television. (Det er ingen TV.)`,
    },
    {
      id: 'fransk-1-6-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Beskrive rommet',
      problem: `Si paa fransk:

a) Rommet mitt er stort.
b) Jeg har en datamaskin.
c) Paa veggen henger en plakat.`,
      solution: `**Loesning:**

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
        hints: ['ma = min (hunkjoenn)', 'mon = min (hankjoenn)'],
      },
    },
    {
      id: 'fransk-1-6-3-text-2',
      type: 'text',
      content: `## Farger paa rommet

| Fransk | Norsk |
|--------|-------|
| Les murs sont... | Veggene er... |
| Le tapis est... | Teppet er... |
| Les meubles sont... | Moeblene er... |

**Farger:**
blanc/blanche (hvit), noir(e) (svart), bleu(e) (blaa), vert(e) (groenn), rouge (roed), jaune (gul), marron (brun), gris(e) (graa), rose (rosa), violet(te) (lilla)

**Merk:** De fleste fargene maa samsvare i kjoenn og tall:
- Le mur est **blanc**. (hankjoenn)
- La porte est **blanche**. (hunkjoenn)
- Les murs sont **blancs**. (flertall)`,
    },
    {
      id: 'fransk-1-6-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Farger',
      problem: `Si paa fransk:

a) Veggene er hvite.
b) Teppet er blaatt.`,
      solution: `**Loesning:**

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
          { label: 'a', task: 'Veggene er blaa.', solution: 'Les murs sont bleus.' },
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
      content: `## Hva gjoer du paa rommet?

| Fransk | Norsk |
|--------|-------|
| Je dors. | Jeg sover. |
| Je fais mes devoirs. | Jeg gjoer lekser. |
| Je lis. | Jeg leser. |
| Je joue. | Jeg leker/spiller. |
| J'ecoute de la musique. | Jeg hoerer paa musikk. |
| Je me repose. | Jeg slapper av. |`,
    },
    {
      id: 'fransk-1-6-3-example-3',
      type: 'example',
      title: 'Eksempel 3: En beskrivelse av rommet',
      problem: `Skriv en kort beskrivelse av rommet ditt paa fransk (minst 4 setninger).`,
      solution: `**Eksempel paa loesning:**

Ma chambre n'est pas tres grande, mais elle est confortable. Les murs sont bleu clair. Dans ma chambre, il y a un lit et un bureau. Sur le mur, il y a beaucoup de posters. J'ai aussi une bibliotheque avec beaucoup de livres. Dans ma chambre, je fais mes devoirs et j'ecoute de la musique.

(Rommet mitt er ikke veldig stort, men det er komfortabelt. Veggene er lyseblaa. I rommet mitt er det en seng og et skrivebord. Paa veggen er det mange plakater. Jeg har ogsaa en bokhylle med mange boeker. Paa rommet mitt gjoer jeg lekser og hoerer paa musikk.)`,
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
          { label: 'b', task: 'Paa rommet mitt leser jeg boeker.', solution: 'Dans ma chambre, je lis des livres.' },
          { label: 'c', task: 'Rommet mitt er koselig.', solution: 'Ma chambre est confortable.' },
        ],
        solution: 'a) Dans ma chambre, il y a un lit. b) Dans ma chambre, je lis des livres. c) Ma chambre est confortable.',
        hints: ['il y a = det er/finnes', 'dans ma chambre = i rommet mitt'],
      },
    },
    {
      id: 'fransk-1-6-3-tip-1',
      type: 'tip',
      content: `**Tips for aa beskrive rommet:**

1. Start med stoerrelse og form
2. Nevn fargene paa vegger og moebler
3. Bruk "il y a" for aa si hva som finnes i rommet
4. Fortell hva du gjoer paa rommet
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
  description: 'Laer om hvordan folk bor i Frankrike.',
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

I Frankrike bor folk paa ulike maater:

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
| Ou habites-tu ? / Tu habites ou ? | Hvor bor du? |
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
      problem: `Si paa fransk:

a) Jeg bor i Oslo.
b) Jeg bor i et hus.
c) Jeg bor med familien min.`,
      solution: `**Loesning:**

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
          { label: 'b', task: 'Hvor bor du?', solution: 'Ou habites-tu ? / Tu habites ou ?' },
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
      problem: `Si paa fransk:

a) Leiligheten har 4 rom.
b) Det er en balkong.
c) Huset har en hage.`,
      solution: `**Loesning:**

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
| a la campagne | paa landet |
| pres de... | i naerheten av... |
| dans le centre-ville | i sentrum |
| en banlieue | i forstaden |
| dans un quartier | i en bydel |`,
    },
    {
      id: 'fransk-1-6-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Hvor ligger boligen?',
      problem: `Si paa fransk:

a) Jeg bor i byen.
b) Vi bor paa landet.
c) Huset ligger i naerheten av skolen.`,
      solution: `**Loesning:**

a) **J'habite en ville.**

b) **Nous habitons a la campagne.**

c) **La maison est pres de l'ecole.**`,
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
          { label: 'b', task: 'De bor paa landet.', solution: 'Ils habitent a la campagne.' },
          { label: 'c', task: 'Leiligheten er i forstaden.', solution: "L'appartement est en banlieue." },
        ],
        solution: "a) J'habite dans le centre-ville. b) Ils habitent a la campagne. c) L'appartement est en banlieue.",
        hints: ['centre-ville = sentrum', 'a la campagne = paa landet'],
      },
    },
    {
      id: 'fransk-1-6-4-note-1',
      type: 'note',
      content: `**Visste du?**

- I Frankrike er det svart vanlig aa bo i leilighet, spesielt i storbyene
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
