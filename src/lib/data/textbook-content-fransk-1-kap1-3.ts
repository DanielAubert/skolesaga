/* eslint-disable */
// @ts-nocheck
/**
 * Fransk niva 1 - Tekstbokinnhold kapittel 1-3
 *
 * Dekker LK20 lareplan for fremmedsprak niva 1
 * Struktur: teori -> eksempel -> oppgave (gjentatt)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Bonjour! - Hilsener
// ============================================================================

export const CHAPTER_FRANSK_1_1_1: TextbookChapter = {
  id: 'fransk-1-1-1',
  courseId: 'fransk-1',
  chapterNumber: '1.1',
  title: 'Bonjour! - Hilsener',
  description: 'Grunnleggende hilsener og hoflighetsfraser pa fransk.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke enkle hilsener og hoflighetsuttrykk',
  ],
  content: [
    {
      id: 'fransk-1-1-1-intro',
      type: 'text',
      content: `## Hilsener pa fransk

Fransk er et verdenssprak som snakkes av over 300 millioner mennesker pa fem kontinenter. Det er offisielt sprak i 29 land og et av de offisielle sprakene i FN, EU og mange internasjonale organisasjoner. La oss starte med de viktigste hilsenene!

I Frankrike er hilsener svart viktige for hoflighet. Det er vanlig a hilse pa alle nar man kommer inn et sted, selv fremmede i en butikk eller pa en restaurant.`,
    },
    {
      id: 'fransk-1-1-1-text-1',
      type: 'text',
      content: `**Grunnleggende hilsener**

| Fransk | Norsk |
|--------|-------|
| Bonjour | God dag / Hei |
| Bonsoir | God kveld |
| Bonne nuit | God natt |
| Salut | Hei (uformelt) |
| Coucou | Hei (veldig uformelt) |`,
    },
    {
      id: 'fransk-1-1-1-def-1',
      type: 'definition',
      title: 'Formell vs. uformell',
      content: `Pa fransk skiller man mellom formell (vous) og uformell (tu) tiltale:
- **Tu**: Brukes med venner, familie og jevnaldrende
- **Vous**: Brukes med voksne du ikke kjenner, laerere, i butikker osv.

"Vous" brukes ogsa som flertallsform for "dere", uansett formalitet.`,
    },
    {
      id: 'fransk-1-1-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Hilsener gjennom dagen',
      problem: `Oversett til fransk:
a) God dag
b) God kveld
c) God natt`,
      solution: `a) Bonjour
b) Bonsoir
c) Bonne nuit

**Huskeregel**: "Bon" betyr "god" og brukes med "jour" (dag), "soir" (kveld). "Bonne" er hunkjonnsformen og brukes med "nuit" (natt).`,
    },
    {
      id: 'fransk-1-1-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-1-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett folgende hilsener til fransk:',
        subTasks: [
          { label: 'a', task: 'God dag', solution: 'Bonjour' },
          { label: 'b', task: 'God kveld', solution: 'Bonsoir' },
          { label: 'c', task: 'Hei (uformelt)', solution: 'Salut' },
        ],
        solution: 'a) Bonjour\nb) Bonsoir\nc) Salut',
        hints: ['Se tabellen med grunnleggende hilsener'],
      },
    },
    {
      id: 'fransk-1-1-1-text-2',
      type: 'text',
      content: `**Avskjedshilsener**

| Fransk | Norsk |
|--------|-------|
| Au revoir | Pa gjensyn (formelt) |
| Salut | Ha det (uformelt) |
| A bientot | Vi sees snart |
| A demain | Vi sees i morgen |
| A plus tard | Vi sees senere |
| Bonne journee | Ha en fin dag |
| Bonne soiree | Ha en fin kveld |`,
    },
    {
      id: 'fransk-1-1-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Formell vs. uformell avskjed',
      problem: `Hvilken avskjedshilsen passer best?
a) Til en venn: ___
b) Til en laerer: ___`,
      solution: `a) Til en venn: **Salut** eller **A bientot**
b) Til en laerer: **Au revoir**

"Salut" er uformelt og brukes med venner. "Au revoir" er formelt og mer hoflig.`,
    },
    {
      id: 'fransk-1-1-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-1-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett folgende avskjedshilsener til fransk:',
        subTasks: [
          { label: 'a', task: 'Pa gjensyn', solution: 'Au revoir' },
          { label: 'b', task: 'Vi sees i morgen', solution: 'A demain' },
          { label: 'c', task: 'Vi sees snart', solution: 'A bientot' },
        ],
        solution: 'a) Au revoir\nb) A demain\nc) A bientot',
        hints: ['Se tabellen med avskjedshilsener'],
      },
    },
    {
      id: 'fransk-1-1-1-text-3',
      type: 'text',
      content: `**Hoflighetsuttrykk**

| Fransk | Norsk |
|--------|-------|
| S'il vous plait | Vaer sa snill (formelt) |
| S'il te plait | Vaer sa snill (uformelt) |
| Merci | Takk |
| Merci beaucoup | Tusen takk |
| De rien | Ingen arsak |
| Je vous en prie | Vaer sa god (formelt) |
| Excusez-moi | Unnskyld meg (formelt) |
| Excuse-moi | Unnskyld meg (uformelt) |
| Pardon | Unnskyld |`,
    },
    {
      id: 'fransk-1-1-1-tip-1',
      type: 'tip',
      content: `"S'il vous plait" betyr bokstavelig "om det behager Dem" og er det viktigste hoflighetsuttrykket pa fransk. Bruk det alltid nar du ber om noe! Forkortelsen er ofte "svp" i skriftlig sprak.`,
    },
    {
      id: 'fransk-1-1-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Takk og svar',
      problem: `Hva svarer du nar noen sier "Merci"?`,
      solution: `Du kan svare:
- **De rien** (Ingen arsak)
- **Je vous en prie** (Vaer sa god - formelt)
- **Il n'y a pas de quoi** (Ikke noe a takke for)`,
    },
    {
      id: 'fransk-1-1-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-1-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett folgende hoflighetsuttrykk til fransk:',
        subTasks: [
          { label: 'a', task: 'Takk', solution: 'Merci' },
          { label: 'b', task: 'Unnskyld (formelt)', solution: 'Excusez-moi' },
          { label: 'c', task: 'Tusen takk', solution: 'Merci beaucoup' },
          { label: 'd', task: 'Vaer sa snill (formelt)', solution: "S'il vous plait" },
        ],
        solution: "a) Merci\nb) Excusez-moi\nc) Merci beaucoup\nd) S'il vous plait",
        hints: ['Husk forskjellen mellom formelt (vous) og uformelt (tu)'],
      },
    },
    {
      id: 'fransk-1-1-1-note-1',
      type: 'note',
      content: `**Kulturell kontekst**: I Frankrike er det vanlig a gi "la bise" (kyssehilsen pa kinnet) nar man hilser pa venner og familie. Antall kyss varierer fra region til region - fra ett til fire! I formelle situasjoner gir man heller handen.`,
    },
    {
      id: 'fransk-1-1-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-1-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg riktig hilsen for hver situasjon:',
        subTasks: [
          { label: 'a', task: 'Du moter en venn pa skolen om morgenen', solution: 'Salut eller Bonjour' },
          { label: 'b', task: 'Du gar inn i en butikk', solution: 'Bonjour' },
          { label: 'c', task: 'Du sier ha det til vennen din', solution: 'Salut eller A bientot' },
          { label: 'd', task: 'Du sier ha det til laereren', solution: 'Au revoir' },
        ],
        solution: 'a) Salut/Bonjour\nb) Bonjour\nc) Salut/A bientot\nd) Au revoir',
        hints: ['Tenk pa om situasjonen er formell eller uformell'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.2: Je m'appelle... - Presentere seg
// ============================================================================

export const CHAPTER_FRANSK_1_1_2: TextbookChapter = {
  id: 'fransk-1-1-2',
  courseId: 'fransk-1',
  chapterNumber: '1.2',
  title: "Je m'appelle... - Presentere seg",
  description: "Laer a presentere deg selv med navn og verbene etre og s'appeler.",
  estimatedMinutes: 45,
  competenceGoals: [
    'presentere seg selv og andre',
    'bruke grunnleggende verb i presens',
  ],
  content: [
    {
      id: 'fransk-1-1-2-intro',
      type: 'text',
      content: `## Presentere seg selv

A kunne presentere seg er grunnleggende i ethvert sprak. Pa fransk bruker vi verbene **s'appeler** (a hete) og **etre** (a vaere) for a fortelle hvem vi er.`,
    },
    {
      id: 'fransk-1-1-2-text-1',
      type: 'text',
      content: `**Presentere seg selv**

| Fransk | Norsk |
|--------|-------|
| Je m'appelle... | Jeg heter... |
| Je suis... | Jeg er... |
| Mon nom est... | Navnet mitt er... |
| J'ai ... ans | Jeg er ... ar gammel |`,
    },
    {
      id: 'fransk-1-1-2-def-1',
      type: 'definition',
      title: 'Verbet "etre" (a vaere)',
      content: `**Etre** er et uregelmessig verb og ma laeres utenat:

| Person | Fransk | Norsk |
|--------|--------|-------|
| je | suis | jeg er |
| tu | es | du er |
| il/elle/on | est | han/hun/man er |
| nous | sommes | vi er |
| vous | etes | dere er / De er |
| ils/elles | sont | de er |`,
    },
    {
      id: 'fransk-1-1-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Presentasjon med etre',
      problem: `Fullfar setningene med riktig form av "etre":
a) Je ___ Anna.
b) Tu ___ Max.
c) Il ___ professeur.`,
      solution: `a) Je **suis** Anna. (Jeg er Anna.)
b) Tu **es** Max. (Du er Max.)
c) Il **est** professeur. (Han er laerer.)`,
    },
    {
      id: 'fransk-1-1-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-1-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av verbet "etre":',
        subTasks: [
          { label: 'a', task: 'Je ___ Erik.', solution: 'suis' },
          { label: 'b', task: 'Tu ___ gentil.', solution: 'es' },
          { label: 'c', task: 'Elle ___ Marie.', solution: 'est' },
          { label: 'd', task: 'Nous ___ amis.', solution: 'sommes' },
        ],
        solution: 'a) suis\nb) es\nc) est\nd) sommes',
        hints: ['Se tabellen over boying av etre'],
      },
    },
    {
      id: 'fransk-1-1-2-def-2',
      type: 'definition',
      title: "Verbet \"s'appeler\" (a hete)",
      content: `**S'appeler** er et refleksivt verb:

| Person | Fransk | Norsk |
|--------|--------|-------|
| je | m'appelle | jeg heter |
| tu | t'appelles | du heter |
| il/elle/on | s'appelle | han/hun/man heter |
| nous | nous appelons | vi heter |
| vous | vous appelez | dere heter / De heter |
| ils/elles | s'appellent | de heter |`,
    },
    {
      id: 'fransk-1-1-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Sporsmaal og svar',
      problem: `Lag en kort dialog der du spor om navn og svarer:`,
      solution: `**Dialog:**
- A: Bonjour! Comment tu t'appelles? (Hei! Hva heter du?)
- B: Je m'appelle Marie. Et toi? (Jeg heter Marie. Og du?)
- A: Je m'appelle Thomas. (Jeg heter Thomas.)`,
    },
    {
      id: 'fransk-1-1-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-1-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Jeg heter...', solution: "Je m'appelle..." },
          { label: 'b', task: 'Hva heter du?', solution: "Comment tu t'appelles?" },
          { label: 'c', task: 'Hun heter Sara.', solution: "Elle s'appelle Sara." },
        ],
        solution: "a) Je m'appelle...\nb) Comment tu t'appelles?\nc) Elle s'appelle Sara.",
        hints: ["Bruk verbet s'appeler"],
      },
    },
    {
      id: 'fransk-1-1-2-text-2',
      type: 'text',
      content: `**Sporre om andres navn**

| Fransk | Norsk |
|--------|-------|
| Comment tu t'appelles? | Hva heter du? (uformelt) |
| Comment vous appelez-vous? | Hva heter De? (formelt) |
| Qui es-tu? | Hvem er du? |
| Et toi? | Og du? (uformelt) |
| Et vous? | Og Dem? (formelt) |`,
    },
    {
      id: 'fransk-1-1-2-tip-1',
      type: 'tip',
      content: `Pa fransk kan du bruke bade "Je m'appelle..." og "Je suis..." for a presentere deg. "Mon nom est..." er litt mer formelt. Legg merke til at "j'ai ... ans" brukes for alder - pa fransk "har" man ar, man "er" ikke ar gammel!`,
    },
    {
      id: 'fransk-1-1-2-example-3',
      type: 'example',
      title: 'Eksempel 3: En fullstendig presentasjon',
      problem: `Skriv en kort presentasjon pa fransk:`,
      solution: `**Eksempel:**
Bonjour! Je m'appelle Lisa. J'ai seize ans. Je suis eleve.

(Hei! Jeg heter Lisa. Jeg er 16 ar gammel. Jeg er elev.)`,
    },
    {
      id: 'fransk-1-1-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-1-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: "Fyll inn riktig form av verbet (etre eller s'appeler):",
        subTasks: [
          { label: 'a', task: "Comment tu ___? (hete)", solution: "t'appelles" },
          { label: 'b', task: 'Je ___ eleve. (vaere)', solution: 'suis' },
          { label: 'c', task: "Il ___ Paul. (hete)", solution: "s'appelle" },
          { label: 'd', task: 'Nous ___ norvegiens. (vaere)', solution: 'sommes' },
        ],
        solution: "a) t'appelles\nb) suis\nc) s'appelle\nd) sommes",
        hints: ['Tenk pa hvilket verb som passer best i sammenhengen'],
      },
    },
    {
      id: 'fransk-1-1-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-1-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: "Skriv en kort presentasjon av deg selv pa fransk (3-4 setninger). Bruk ordene: s'appeler, etre, avoir ... ans.",
        solution: "Eksempel: Bonjour! Je m'appelle [navn]. J'ai [alder] ans. Je suis eleve.",
        hints: ['Start med Bonjour!', "Bruk \"Je m'appelle...\" for navnet", 'Bruk "J\'ai... ans" for alder'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.3: D'ou viens-tu? - Hvor kommer du fra
// ============================================================================

export const CHAPTER_FRANSK_1_1_3: TextbookChapter = {
  id: 'fransk-1-1-3',
  courseId: 'fransk-1',
  chapterNumber: '1.3',
  title: "D'ou viens-tu? - Hvor kommer du fra",
  description: 'Laer a fortelle hvor du kommer fra og snakke om nasjonalitet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'fortelle hvor man kommer fra',
    'bruke landnavn og nasjonaliteter',
  ],
  content: [
    {
      id: 'fransk-1-1-3-intro',
      type: 'text',
      content: `## Hvor kommer du fra?

Nar du moter nye mennesker, er det vanlig a sporre hvor de kommer fra. La oss laere hvordan vi snakker om land og nasjonalitet pa fransk!`,
    },
    {
      id: 'fransk-1-1-3-text-1',
      type: 'text',
      content: `**Viktige fraser**

| Fransk | Norsk |
|--------|-------|
| D'ou viens-tu? | Hvor kommer du fra? (uformelt) |
| D'ou venez-vous? | Hvor kommer De fra? (formelt) |
| Je viens de... | Jeg kommer fra... |
| J'habite a... | Jeg bor i... |`,
    },
    {
      id: 'fransk-1-1-3-def-1',
      type: 'definition',
      title: 'Verbet "venir" (a komme)',
      content: `**Venir** er et uregelmessig verb:

| Person | Fransk | Norsk |
|--------|--------|-------|
| je | viens | jeg kommer |
| tu | viens | du kommer |
| il/elle/on | vient | han/hun/man kommer |
| nous | venons | vi kommer |
| vous | venez | dere kommer / De kommer |
| ils/elles | viennent | de kommer |`,
    },
    {
      id: 'fransk-1-1-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Sporre og svare',
      problem: `Lag en kort dialog om hvor man kommer fra:`,
      solution: `**Dialog:**
- A: D'ou viens-tu? (Hvor kommer du fra?)
- B: Je viens de Norvege. Et toi? (Jeg kommer fra Norge. Og du?)
- A: Je viens de France. (Jeg kommer fra Frankrike.)`,
    },
    {
      id: 'fransk-1-1-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-1-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av verbet "venir":',
        subTasks: [
          { label: 'a', task: 'Je ___ de Norvege.', solution: 'viens' },
          { label: 'b', task: "D'ou ___-tu?", solution: 'viens' },
          { label: 'c', task: 'Il ___ de France.', solution: 'vient' },
          { label: 'd', task: 'Nous ___ de Suede.', solution: 'venons' },
        ],
        solution: 'a) viens\nb) viens\nc) vient\nd) venons',
        hints: ['Se boyingstabellen for venir'],
      },
    },
    {
      id: 'fransk-1-1-3-text-2',
      type: 'text',
      content: `**Land i Europa**

| Fransk | Norsk | Kjonn |
|--------|-------|-------|
| la France | Frankrike | f |
| la Norvege | Norge | f |
| la Suede | Sverige | f |
| le Danemark | Danmark | m |
| la Finlande | Finland | f |
| l'Allemagne | Tyskland | f |
| la Suisse | Sveits | f |
| l'Angleterre | England | f |
| l'Espagne | Spania | f |
| l'Italie | Italia | f |
| les Etats-Unis | USA | fl |`,
    },
    {
      id: 'fransk-1-1-3-note-1',
      type: 'note',
      content: `Pa fransk har alle land kjonn! De fleste land som slutter pa -e er hunkjonn (la France, la Norvege). Land som ikke slutter pa -e er som regel hankjonn (le Danemark, le Portugal). Preposisjonen endres: "en France" (i Frankrike, hunkjonn), "au Danemark" (i Danmark, hankjonn), "aux Etats-Unis" (i USA, flertall).`,
    },
    {
      id: 'fransk-1-1-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Land og preposisjoner',
      problem: `Oversett til fransk:
a) Jeg kommer fra Norge.
b) Hun kommer fra Sveits.`,
      solution: `a) Je viens de Norvege.
b) Elle vient de Suisse.

Merk at "de" brukes med hunkjonnsland: "de France", "de Norvege". Med hankjonnsland brukes "du": "du Danemark".`,
    },
    {
      id: 'fransk-1-1-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-1-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett landnavnene til fransk:',
        subTasks: [
          { label: 'a', task: 'Norge', solution: 'la Norvege' },
          { label: 'b', task: 'Frankrike', solution: 'la France' },
          { label: 'c', task: 'Sverige', solution: 'la Suede' },
          { label: 'd', task: 'Tyskland', solution: "l'Allemagne" },
        ],
        solution: "a) la Norvege\nb) la France\nc) la Suede\nd) l'Allemagne",
        hints: ['Se tabellen over europeiske land'],
      },
    },
    {
      id: 'fransk-1-1-3-text-3',
      type: 'text',
      content: `**Nasjonaliteter**

| Maskulin | Feminin | Norsk |
|----------|---------|-------|
| norvegien | norvegienne | norsk |
| francais | francaise | fransk |
| suedois | suedoise | svensk |
| danois | danoise | dansk |
| allemand | allemande | tysk |
| anglais | anglaise | engelsk |
| espagnol | espagnole | spansk |
| italien | italienne | italiensk |
| americain | americaine | amerikansk |`,
    },
    {
      id: 'fransk-1-1-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Nasjonalitet',
      problem: `Fullfar setningene:
a) Erik vient de Norvege. Il est ___.
b) Anna vient de France. Elle est ___.`,
      solution: `a) Erik vient de Norvege. Il est **norvegien**. (Han er norsk.)
b) Anna vient de France. Elle est **francaise**. (Hun er fransk.)

Pa fransk boyes nasjonaliteten etter kjonn: maskulin/feminin.`,
    },
    {
      id: 'fransk-1-1-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-1-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig nasjonalitet:',
        subTasks: [
          { label: 'a', task: 'Je viens de Norvege. Je suis ___ (mann).', solution: 'norvegien' },
          { label: 'b', task: 'Elle vient de Suede. Elle est ___.', solution: 'suedoise' },
          { label: 'c', task: 'Il vient de France. Il est ___.', solution: 'francais' },
          { label: 'd', task: 'Je viens d\'Allemagne. Je suis ___ (kvinne).', solution: 'allemande' },
        ],
        solution: 'a) norvegien\nb) suedoise\nc) francais\nd) allemande',
        hints: ['Husk at nasjonalitet boyes etter kjonn'],
      },
    },
    {
      id: 'fransk-1-1-3-text-4',
      type: 'text',
      content: `**Sprak**

| Fransk | Norsk |
|--------|-------|
| le francais | fransk |
| le norvegien | norsk |
| l'anglais | engelsk |
| l'allemand | tysk |
| l'espagnol | spansk |

**Eksempel:** Je parle francais et anglais. (Jeg snakker fransk og engelsk.)`,
    },
    {
      id: 'fransk-1-1-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-1-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv fullstendige setninger pa fransk:',
        subTasks: [
          { label: 'a', task: 'Jeg kommer fra Norge.', solution: 'Je viens de Norvege.' },
          { label: 'b', task: 'Han er tysk.', solution: 'Il est allemand.' },
          { label: 'c', task: 'Hun snakker norsk og fransk.', solution: 'Elle parle norvegien et francais.' },
        ],
        solution: 'a) Je viens de Norvege.\nb) Il est allemand.\nc) Elle parle norvegien et francais.',
        hints: ['Bruk verbet parler (snakke) - je parle, tu parles, il/elle parle'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.4: Premieres conversations - Forste samtaler
// ============================================================================

export const CHAPTER_FRANSK_1_1_4: TextbookChapter = {
  id: 'fransk-1-1-4',
  courseId: 'fransk-1',
  chapterNumber: '1.4',
  title: 'Premieres conversations - Forste samtaler',
  description: 'Laer a fore enkle samtaler og dialoger pa fransk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'fore enkle samtaler',
    'bruke sporsmalsord',
  ],
  content: [
    {
      id: 'fransk-1-1-4-intro',
      type: 'text',
      content: `## Forste samtaler

Na har du laert hilsener, presentasjon og a fortelle hvor du kommer fra. La oss sette alt sammen til enkle samtaler!`,
    },
    {
      id: 'fransk-1-1-4-text-1',
      type: 'text',
      content: `**Sporsmalsord**

| Fransk | Norsk |
|--------|-------|
| Qui? | Hvem? |
| Quoi? / Que? | Hva? |
| Ou? | Hvor? |
| D'ou? | Hvorfra? |
| Comment? | Hvordan? |
| Pourquoi? | Hvorfor? |
| Quand? | Nar? |
| Combien? | Hvor mye/mange? |`,
    },
    {
      id: 'fransk-1-1-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Bruk av sporsmalsord',
      problem: `Hvilke sporsmalsord passer?
a) ___ tu t'appelles? (Hva heter du?)
b) ___ viens-tu? (Hvor kommer du fra?)
c) ___ habites-tu? (Hvor bor du?)`,
      solution: `a) **Comment** tu t'appelles?
b) **D'ou** viens-tu?
c) **Ou** habites-tu?

Merk forskjellen: "Ou" = hvor (sted), "D'ou" = hvorfra (opprinnelse).`,
    },
    {
      id: 'fransk-1-1-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-1-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig sporsmalsord:',
        subTasks: [
          { label: 'a', task: '___ est-ce? (Hvem er det?)', solution: 'Qui' },
          { label: 'b', task: '___ as-tu? (Hvor gammel er du?)', solution: 'Quel age' },
          { label: 'c', task: "___ est ton nom? (Hva er navnet ditt?)", solution: 'Quel' },
          { label: 'd', task: '___ vas-tu? (Hvor skal du?)', solution: 'Ou' },
        ],
        solution: 'a) Qui\nb) Quel age\nc) Quel\nd) Ou',
        hints: ['Se tabellen over sporsmalsord'],
      },
    },
    {
      id: 'fransk-1-1-4-text-2',
      type: 'text',
      content: `**Hvordan har du det?**

| Fransk | Norsk |
|--------|-------|
| Comment vas-tu? | Hvordan har du det? (uformelt) |
| Comment allez-vous? | Hvordan har De det? (formelt) |
| Ca va? | Gar det bra? (uformelt) |
| Je vais bien, merci. | Jeg har det bra, takk. |
| Ca va bien. | Det gar bra. |
| Pas mal. | Ikke darlig. |
| Comme ci, comme ca. | Sa som sa. |
| Ca va mal. | Det gar darlig. |
| Super! / Genial! | Kjempebra! |
| Et toi? | Og du? (uformelt) |`,
    },
    {
      id: 'fransk-1-1-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Dialog - Hvordan har du det?',
      problem: `Lag en dialog med sporsmalet "Comment vas-tu?"`,
      solution: `**Dialog:**
- A: Salut! Comment vas-tu?
- B: Je vais bien, merci! Et toi?
- A: Super! Merci.

(Hei! Hvordan har du det? - Jeg har det bra, takk! Og du? - Kjempebra! Takk.)`,
    },
    {
      id: 'fransk-1-1-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-1-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Hvordan har du det?', solution: 'Comment vas-tu?' },
          { label: 'b', task: 'Jeg har det bra.', solution: 'Je vais bien.' },
          { label: 'c', task: 'Takk, og du?', solution: 'Merci, et toi?' },
        ],
        solution: 'a) Comment vas-tu?\nb) Je vais bien.\nc) Merci, et toi?',
        hints: ['Bruk "je vais bien" for "jeg har det bra"'],
      },
    },
    {
      id: 'fransk-1-1-4-text-3',
      type: 'text',
      content: `**Alder**

| Fransk | Norsk |
|--------|-------|
| Quel age as-tu? | Hvor gammel er du? |
| J'ai ... ans. | Jeg er ... ar gammel. |
| J'ai 15 ans. | Jeg er 15 ar gammel. |
| Il a 20 ans. | Han er 20 ar gammel. |
| Elle a 18 ans. | Hun er 18 ar gammel. |

Merk: Pa fransk bruker man verbet **avoir** (a ha) for alder, ikke "etre" (a vaere). Man sier bokstavelig "Jeg har 15 ar".`,
    },
    {
      id: 'fransk-1-1-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Fullstendig dialog',
      problem: `Les og forsta denne dialogen:`,
      solution: `**Dialog mellom Lisa og Marc:**

Lisa: Bonjour! Je m'appelle Lisa. Comment tu t'appelles?
Marc: Bonjour Lisa! Je m'appelle Marc.
Lisa: D'ou viens-tu, Marc?
Marc: Je viens de France. Et toi?
Lisa: Je viens de Norvege. Quel age as-tu?
Marc: J'ai seize ans. Et toi?
Lisa: J'ai aussi seize ans. Comment vas-tu?
Marc: Je vais bien, merci! Au revoir!
Lisa: Au revoir, Marc!`,
    },
    {
      id: 'fransk-1-1-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-1-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Svar pa sporsmalene pa fransk:',
        subTasks: [
          { label: 'a', task: "Comment tu t'appelles?", solution: "Je m'appelle [ditt navn]." },
          { label: 'b', task: "D'ou viens-tu?", solution: 'Je viens de Norvege.' },
          { label: 'c', task: 'Quel age as-tu?', solution: "J'ai [alder] ans." },
          { label: 'd', task: 'Comment vas-tu?', solution: 'Je vais bien.' },
        ],
        solution: "a) Je m'appelle...\nb) Je viens de Norvege.\nc) J'ai... ans.\nd) Je vais bien.",
        hints: ['Bruk dine egne opplysninger'],
      },
    },
    {
      id: 'fransk-1-1-4-tip-1',
      type: 'tip',
      content: `Nar du over pa fransk, prov a ha korte samtaler med deg selv eller en venn. Start med enkle sporsmaal og svar, og bygg gradvis opp lengre dialoger. Det uformelle "Ca va?" er kanskje den vanligste hilsenen du horer i Frankrike!`,
    },
    {
      id: 'fransk-1-1-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-1-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort dialog (6-8 setninger) mellom to personer som moter hverandre for forste gang. Bruk hilsener, presentasjon, land og alder.',
        solution: "Eksempel:\nA: Bonjour! Comment tu t'appelles?\nB: Je m'appelle Anna. Et toi?\nA: Je m'appelle Pierre. D'ou viens-tu?\nB: Je viens de Suede. Et toi?\nA: Je viens de France. Quel age as-tu?\nB: J'ai quinze ans.\nA: J'ai aussi quinze ans! Au revoir!\nB: Au revoir!",
        hints: ["Bruk sporsmalsordene Comment, D'ou, Quel age", 'Husk a inkludere hilsen og avskjed'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.1: Les nombres 0-20 - Tallene 0-20
// ============================================================================

export const CHAPTER_FRANSK_1_2_1: TextbookChapter = {
  id: 'fransk-1-2-1',
  courseId: 'fransk-1',
  chapterNumber: '2.1',
  title: 'Les nombres 0-20 - Tallene 0-20',
  description: 'Laer tallene fra 0 til 20 pa fransk.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke tall i kommunikasjon',
    'telle pa fransk',
  ],
  content: [
    {
      id: 'fransk-1-2-1-intro',
      type: 'text',
      content: `## Tallene 0-20

Tall er viktige for a snakke om alder, priser, telefonnummer og mye mer. La oss laere de grunnleggende tallene pa fransk!`,
    },
    {
      id: 'fransk-1-2-1-text-1',
      type: 'text',
      content: `**Tallene 0-12**

| Tall | Fransk | Uttale |
|------|--------|--------|
| 0 | zero | [se-ro] |
| 1 | un | [an] |
| 2 | deux | [do] |
| 3 | trois | [trwa] |
| 4 | quatre | [katr] |
| 5 | cinq | [sank] |
| 6 | six | [sis] |
| 7 | sept | [set] |
| 8 | huit | [yit] |
| 9 | neuf | [nof] |
| 10 | dix | [dis] |
| 11 | onze | [onz] |
| 12 | douze | [duz] |`,
    },
    {
      id: 'fransk-1-2-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Telle til 10',
      problem: `Tell hoyt fra 1 til 10 pa fransk:`,
      solution: `un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix

**Tips**: Ov pa uttalen! Mange tall uttales annerledes enn de skrives. For eksempel uttales "cinq" som [sank] og "huit" som [yit].`,
    },
    {
      id: 'fransk-1-2-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-2-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv tallene pa fransk:',
        subTasks: [
          { label: 'a', task: '3', solution: 'trois' },
          { label: 'b', task: '7', solution: 'sept' },
          { label: 'c', task: '5', solution: 'cinq' },
          { label: 'd', task: '10', solution: 'dix' },
        ],
        solution: 'a) trois\nb) sept\nc) cinq\nd) dix',
        hints: ['Se tabellen over tallene 0-12'],
      },
    },
    {
      id: 'fransk-1-2-1-text-2',
      type: 'text',
      content: `**Tallene 13-20**

| Tall | Fransk | Monster |
|------|--------|---------|
| 13 | treize | tre- + -ze |
| 14 | quatorze | quator- + -ze |
| 15 | quinze | quin- + -ze |
| 16 | seize | sei- + -ze |
| 17 | dix-sept | dix + sept |
| 18 | dix-huit | dix + huit |
| 19 | dix-neuf | dix + neuf |
| 20 | vingt | [van] |`,
    },
    {
      id: 'fransk-1-2-1-note-1',
      type: 'note',
      content: `Tallene 13-16 har egne former som ma laeres utenat. Fra 17 til 19 folger de monsteret "dix" + enertall. 20 (vingt) ma ogsa laeres for seg.`,
    },
    {
      id: 'fransk-1-2-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Monsteret for tallene 17-19',
      problem: `Hvordan dannes tallet 17 pa fransk?`,
      solution: `17 = dix + sept = **dix-sept**

Monsteret er: "dix" + enertall
- 17 = dix-sept
- 18 = dix-huit
- 19 = dix-neuf`,
    },
    {
      id: 'fransk-1-2-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-2-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv tallene pa fransk:',
        subTasks: [
          { label: 'a', task: '14', solution: 'quatorze' },
          { label: 'b', task: '17', solution: 'dix-sept' },
          { label: 'c', task: '20', solution: 'vingt' },
          { label: 'd', task: '16', solution: 'seize' },
        ],
        solution: 'a) quatorze\nb) dix-sept\nc) vingt\nd) seize',
        hints: ['Husk at 13-16 har spesielle former, mens 17-19 folger et monster'],
      },
    },
    {
      id: 'fransk-1-2-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Alder med tall',
      problem: `Oversett til fransk:
a) Jeg er 15 ar.
b) Hun er 18 ar.`,
      solution: `a) J'ai quinze ans.
b) Elle a dix-huit ans.

**Struktur**: [Person] + ai/a + [tall] + ans`,
    },
    {
      id: 'fransk-1-2-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-2-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv setningene pa fransk:',
        subTasks: [
          { label: 'a', task: 'Jeg er 16 ar.', solution: "J'ai seize ans." },
          { label: 'b', task: 'Han er 14 ar.', solution: 'Il a quatorze ans.' },
          { label: 'c', task: 'Hun er 19 ar.', solution: 'Elle a dix-neuf ans.' },
        ],
        solution: "a) J'ai seize ans.\nb) Il a quatorze ans.\nc) Elle a dix-neuf ans.",
        hints: ['Bruk monsteret: ai/a + tall + ans'],
      },
    },
    {
      id: 'fransk-1-2-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-2-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv det neste tallet i rekken pa fransk:',
        subTasks: [
          { label: 'a', task: 'cinq, six, ___', solution: 'sept' },
          { label: 'b', task: 'douze, treize, ___', solution: 'quatorze' },
          { label: 'c', task: 'dix-sept, dix-huit, ___', solution: 'dix-neuf' },
          { label: 'd', task: 'zero, un, ___', solution: 'deux' },
        ],
        solution: 'a) sept\nb) quatorze\nc) dix-neuf\nd) deux',
        hints: ['Tell i rekkefolge'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.2: Les nombres 21-100 - Tallene 21-100
// ============================================================================

export const CHAPTER_FRANSK_1_2_2: TextbookChapter = {
  id: 'fransk-1-2-2',
  courseId: 'fransk-1',
  chapterNumber: '2.2',
  title: 'Les nombres 21-100 - Tallene 21-100',
  description: 'Laer tallene fra 21 til 100 pa fransk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke storre tall i kommunikasjon',
  ],
  content: [
    {
      id: 'fransk-1-2-2-intro',
      type: 'text',
      content: `## Tallene 21-100

Pa fransk har de hoyere tallene noen spesielle monstre. Spesielt tallene 70, 80 og 90 er annerledes enn i mange andre sprak!`,
    },
    {
      id: 'fransk-1-2-2-text-1',
      type: 'text',
      content: `**Tierne**

| Tall | Fransk |
|------|--------|
| 20 | vingt |
| 30 | trente |
| 40 | quarante |
| 50 | cinquante |
| 60 | soixante |
| 70 | soixante-dix (60+10) |
| 80 | quatre-vingts (4x20) |
| 90 | quatre-vingt-dix (4x20+10) |
| 100 | cent |`,
    },
    {
      id: 'fransk-1-2-2-note-1',
      type: 'note',
      content: `De franske tallene 70, 80 og 90 er spesielle! **70 = soixante-dix** (seksti-ti), **80 = quatre-vingts** (fire-tjue), **90 = quatre-vingt-dix** (fire-tjue-ti). Dette kalles et tjuetallssystem (vigesimalt system) og stammer fra gallisk tradisjon.`,
    },
    {
      id: 'fransk-1-2-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Tierne',
      problem: `Skriv tallene pa fransk:
a) 30
b) 50
c) 70`,
      solution: `a) 30 = **trente**
b) 50 = **cinquante**
c) 70 = **soixante-dix**`,
    },
    {
      id: 'fransk-1-2-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-2-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv tierne pa fransk:',
        subTasks: [
          { label: 'a', task: '40', solution: 'quarante' },
          { label: 'b', task: '60', solution: 'soixante' },
          { label: 'c', task: '80', solution: 'quatre-vingts' },
          { label: 'd', task: '100', solution: 'cent' },
        ],
        solution: 'a) quarante\nb) soixante\nc) quatre-vingts\nd) cent',
        hints: ['Husk de spesielle formene for 70, 80 og 90'],
      },
    },
    {
      id: 'fransk-1-2-2-def-1',
      type: 'definition',
      title: 'Sammensatte tall (21-99)',
      content: `Pa fransk legger man enertallet etter titallet med bindestrek. Tallet 21, 31, 41, 51, 61 bruker "et un" (og en):

**Monster**:
- 21 = vingt **et un** (tjue og en)
- 22 = vingt-**deux** (tjue-to)
- 34 = trente-**quatre** (tretti-fire)
- 71 = soixante **et onze** (seksti og elleve)
- 81 = quatre-vingt-**un** (fire-tjue-en)
- 95 = quatre-vingt-**quinze** (fire-tjue-femten)`,
    },
    {
      id: 'fransk-1-2-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Sammensatte tall',
      problem: `Skriv tallene pa fransk:
a) 25
b) 42
c) 67`,
      solution: `a) 25 = **vingt-cinq** (tjue-fem)
b) 42 = **quarante-deux** (forti-to)
c) 67 = **soixante-sept** (seksti-syv)

**Tips**: For 20-69 folger tallene et logisk monster!`,
    },
    {
      id: 'fransk-1-2-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-2-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv tallene pa fransk:',
        subTasks: [
          { label: 'a', task: '23', solution: 'vingt-trois' },
          { label: 'b', task: '45', solution: 'quarante-cinq' },
          { label: 'c', task: '78', solution: 'soixante-dix-huit' },
          { label: 'd', task: '91', solution: 'quatre-vingt-onze' },
        ],
        solution: 'a) vingt-trois\nb) quarante-cinq\nc) soixante-dix-huit\nd) quatre-vingt-onze',
        hints: ['Husk: 70-79 = soixante + 10-19, 80-89 = quatre-vingt + 0-9, 90-99 = quatre-vingt + 10-19'],
      },
    },
    {
      id: 'fransk-1-2-2-tip-1',
      type: 'tip',
      content: `For a huske de franske tallene over 70: Tenk pa det som matte! 75 = soixante-quinze (60+15), 83 = quatre-vingt-trois (4x20+3), 97 = quatre-vingt-dix-sept (4x20+17).`,
    },
    {
      id: 'fransk-1-2-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Priser',
      problem: `Skriv prisene pa fransk:
"Det koster 35 euro."`,
      solution: `Ca coute trente-cinq euros.

**Nyttige ord:**
- Ca coute... = Det koster...
- euro(s) = euro
- centime(s) = cent (euroens underenhet)`,
    },
    {
      id: 'fransk-1-2-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-2-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett prisene til fransk (bruk "Ca coute..."):',
        subTasks: [
          { label: 'a', task: 'Det koster 27 euro.', solution: 'Ca coute vingt-sept euros.' },
          { label: 'b', task: 'Det koster 53 euro.', solution: 'Ca coute cinquante-trois euros.' },
          { label: 'c', task: 'Det koster 84 euro.', solution: 'Ca coute quatre-vingt-quatre euros.' },
        ],
        solution: 'a) Ca coute vingt-sept euros.\nb) Ca coute cinquante-trois euros.\nc) Ca coute quatre-vingt-quatre euros.',
        hints: ['Husk monsteret for tall over 70'],
      },
    },
    {
      id: 'fransk-1-2-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-2-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv tallene som ord pa fransk:',
        subTasks: [
          { label: 'a', task: '99', solution: 'quatre-vingt-dix-neuf' },
          { label: 'b', task: '66', solution: 'soixante-six' },
          { label: 'c', task: '37', solution: 'trente-sept' },
          { label: 'd', task: '100', solution: 'cent' },
        ],
        solution: 'a) quatre-vingt-dix-neuf\nb) soixante-six\nc) trente-sept\nd) cent',
        hints: ['Ov pa de spesielle formene: soixante-dix, quatre-vingts, quatre-vingt-dix'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.3: Les couleurs - Fargene
// ============================================================================

export const CHAPTER_FRANSK_1_2_3: TextbookChapter = {
  id: 'fransk-1-2-3',
  courseId: 'fransk-1',
  chapterNumber: '2.3',
  title: 'Les couleurs - Fargene',
  description: 'Laer fargene pa fransk og adjektivsamsvar med kjonn.',
  estimatedMinutes: 35,
  competenceGoals: [
    'beskrive ting med farger',
  ],
  content: [
    {
      id: 'fransk-1-2-3-intro',
      type: 'text',
      content: `## Fargene

Farger er nyttige for a beskrive ting og gjenstander. La oss laere de vanligste fargene pa fransk! Pa fransk ma fargeadjektiver samsvare med kjonnet til substantivet de beskriver.`,
    },
    {
      id: 'fransk-1-2-3-text-1',
      type: 'text',
      content: `**Grunnleggende farger**

| Maskulin | Feminin | Norsk |
|----------|---------|-------|
| rouge | rouge | rod |
| bleu | bleue | bla |
| jaune | jaune | gul |
| vert | verte | gronn |
| blanc | blanche | hvit |
| noir | noire | svart |
| marron | marron | brun |
| orange | orange | oransje |
| rose | rose | rosa |
| violet | violette | lilla |
| gris | grise | gra |`,
    },
    {
      id: 'fransk-1-2-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Grunnleggende farger',
      problem: `Oversett til fransk:
a) rod
b) bla
c) gronn`,
      solution: `a) **rouge** (endres ikke med kjonn)
b) **bleu** / **bleue** (endres med kjonn)
c) **vert** / **verte** (endres med kjonn)`,
    },
    {
      id: 'fransk-1-2-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-2-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett fargene til fransk (maskulin form):',
        subTasks: [
          { label: 'a', task: 'gul', solution: 'jaune' },
          { label: 'b', task: 'svart', solution: 'noir' },
          { label: 'c', task: 'hvit', solution: 'blanc' },
          { label: 'd', task: 'brun', solution: 'marron' },
        ],
        solution: 'a) jaune\nb) noir\nc) blanc\nd) marron',
        hints: ['Se tabellen over grunnleggende farger'],
      },
    },
    {
      id: 'fransk-1-2-3-text-2',
      type: 'text',
      content: `**Beskrive ting med farger**

| Fransk | Norsk |
|--------|-------|
| C'est rouge. | Det er rodt. |
| Le ballon est bleu. | Ballen er bla. |
| La fleur est jaune. | Blomsten er gul. |
| Ma couleur preferee est... | Favorittfargen min er... |`,
    },
    {
      id: 'fransk-1-2-3-def-1',
      type: 'definition',
      title: 'Farger og kjonnssamsvar',
      content: `Pa fransk ma fargeadjektiv samsvare med substantivets kjonn og tall:

- **le** livre **rouge** (den rode boken - hankjonn)
- **la** voiture **rouge** (den rode bilen - hunkjonn)
- **les** livres **rouges** (de rode bokene - flertall)

Noen farger endres med kjonn:
- bleu -> bleue, vert -> verte, blanc -> blanche, noir -> noire, gris -> grise, violet -> violette

**Unntak**: "marron" og "orange" endres ALDRI!`,
    },
    {
      id: 'fransk-1-2-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Beskrive farger',
      problem: `Oversett til fransk:
a) Himmelen er bla.
b) Blomsten er gronn.`,
      solution: `a) Le ciel est **bleu**. (Himmelen er bla - hankjonn.)
b) La fleur est **verte**. (Blomsten er gronn - hunkjonn.)

Merk at fargen boyes etter substantivets kjonn!`,
    },
    {
      id: 'fransk-1-2-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-2-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fullfar setningene med riktig farge pa fransk (husk kjonnssamsvar):',
        subTasks: [
          { label: 'a', task: 'Le soleil est ___. (gul)', solution: 'jaune' },
          { label: 'b', task: 'La neige est ___. (hvit)', solution: 'blanche' },
          { label: 'c', task: 'La nuit est ___. (svart)', solution: 'noire' },
          { label: 'd', task: 'La tomate est ___. (rod)', solution: 'rouge' },
        ],
        solution: 'a) jaune\nb) blanche\nc) noire\nd) rouge',
        hints: ['Husk at noen farger endrer form i hunkjonn: blanc -> blanche, noir -> noire'],
      },
    },
    {
      id: 'fransk-1-2-3-text-3',
      type: 'text',
      content: `**Nyanser**

| Fransk | Norsk |
|--------|-------|
| bleu clair | lyseblatt |
| bleu fonce | morkeblatt |
| vert clair | lysegront |
| vert fonce | morkegront |
| rouge clair | lyserodt |
| rouge fonce | morkerodt |`,
    },
    {
      id: 'fransk-1-2-3-tip-1',
      type: 'tip',
      content: `**clair** = lys, **fonce** = mork. Kombiner disse med farger for a lage nyanser: bleu + clair = bleu clair (lyseblatt). Disse nyansene er uforanderlige - de boyes ikke!`,
    },
    {
      id: 'fransk-1-2-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Favorittfarge',
      problem: `Hvordan sier du favorittfargen din pa fransk?`,
      solution: `**Ma couleur preferee est le bleu.**
(Favorittfargen min er bla.)

Sporre: **Quelle est ta couleur preferee?**
(Hva er favorittfargen din?)`,
    },
    {
      id: 'fransk-1-2-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-2-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Favorittfargen min er gronn.', solution: 'Ma couleur preferee est le vert.' },
          { label: 'b', task: 'Hva er favorittfargen din?', solution: 'Quelle est ta couleur preferee?' },
          { label: 'c', task: 'Himmelen er lyseblaa.', solution: 'Le ciel est bleu clair.' },
        ],
        solution: 'a) Ma couleur preferee est le vert.\nb) Quelle est ta couleur preferee?\nc) Le ciel est bleu clair.',
        hints: ['couleur preferee = favorittfarge'],
      },
    },
    {
      id: 'fransk-1-2-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-2-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva er fargene pa det franske flagget? Skriv pa fransk.',
        solution: 'bleu, blanc, rouge',
        hints: ['Flagget har tre vertikale striper'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.4: Faire les courses avec des nombres - Handle med tall
// ============================================================================

export const CHAPTER_FRANSK_1_2_4: TextbookChapter = {
  id: 'fransk-1-2-4',
  courseId: 'fransk-1',
  chapterNumber: '2.4',
  title: 'Faire les courses avec des nombres - Handle med tall',
  description: 'Laer a bruke tall nar du handler.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kommunisere i enkle handelssituasjoner',
    'bruke tall praktisk',
  ],
  content: [
    {
      id: 'fransk-1-2-4-intro',
      type: 'text',
      content: `## Handle med tall

Na skal vi bruke tallene i praktiske situasjoner - som a handle i en butikk eller sporre om priser i Frankrike!`,
    },
    {
      id: 'fransk-1-2-4-text-1',
      type: 'text',
      content: `**Nyttige handelsfraser**

| Fransk | Norsk |
|--------|-------|
| Ca coute combien? | Hva koster det? |
| Combien ca coute? | Hvor mye koster det? |
| Ca coute... euros | Det koster... euro |
| Je voudrais... | Jeg vil gjerne ha... |
| Je prends... | Jeg tar... |
| Est-ce que vous avez...? | Har De...? |
| L'addition, s'il vous plait | Regningen, takk |`,
    },
    {
      id: 'fransk-1-2-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Sporre om pris',
      problem: `Lag en kort dialog om a sporre om pris:`,
      solution: `**Dialog i butikken:**
- Client: Excusez-moi, ca coute combien, le t-shirt?
- Vendeur: Ca coute vingt-cinq euros.
- Client: Merci!

(Unnskyld, hva koster T-skjorten? - Den koster 25 euro. - Takk!)`,
    },
    {
      id: 'fransk-1-2-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-2-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Hva koster det?', solution: 'Ca coute combien?' },
          { label: 'b', task: 'Det koster 15 euro.', solution: 'Ca coute quinze euros.' },
          { label: 'c', task: 'Jeg vil gjerne ha...', solution: 'Je voudrais...' },
        ],
        solution: 'a) Ca coute combien?\nb) Ca coute quinze euros.\nc) Je voudrais...',
        hints: ['Se tabellen med handelsfraser'],
      },
    },
    {
      id: 'fransk-1-2-4-text-2',
      type: 'text',
      content: `**Penger og betaling**

| Fransk | Norsk |
|--------|-------|
| l'euro (m) | euroen |
| le centime | centimen |
| l'argent (m) | pengene |
| payer | betale |
| payer en especes | betale kontant |
| payer par carte | betale med kort |
| la monnaie | vekslepenger |`,
    },
    {
      id: 'fransk-1-2-4-def-1',
      type: 'definition',
      title: 'Euro og centimes',
      content: `Priser med euro og centimes:
- 3,50 EUR = trois euros cinquante (centimes)
- 12,99 EUR = douze euros quatre-vingt-dix-neuf
- 0,50 EUR = cinquante centimes

Merk: Pa fransk brukes komma (ikke punktum) for desimaler, akkurat som pa norsk.`,
    },
    {
      id: 'fransk-1-2-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Priser med centimes',
      problem: `Hvordan sier du disse prisene pa fransk?
a) 4,50 EUR
b) 7,99 EUR`,
      solution: `a) quatre euros cinquante (centimes)
b) sept euros quatre-vingt-dix-neuf

Man sier ofte bare "quatre cinquante" i dagligtale.`,
    },
    {
      id: 'fransk-1-2-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-2-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv prisene pa fransk:',
        subTasks: [
          { label: 'a', task: '2,50 EUR', solution: 'deux euros cinquante' },
          { label: 'b', task: '9,99 EUR', solution: 'neuf euros quatre-vingt-dix-neuf' },
          { label: 'c', task: '15,75 EUR', solution: 'quinze euros soixante-quinze' },
        ],
        solution: 'a) deux euros cinquante\nb) neuf euros quatre-vingt-dix-neuf\nc) quinze euros soixante-quinze',
        hints: ['Euro + centimebelopet'],
      },
    },
    {
      id: 'fransk-1-2-4-text-3',
      type: 'text',
      content: `**Mengdeord**

| Fransk | Norsk |
|--------|-------|
| un/une | en/ei/et |
| deux | to |
| un kilo de... | en kilo... |
| un litre de... | en liter... |
| une bouteille de... | en flaske... |
| un sac de... | en pose... |
| un morceau de... | et stykke... |`,
    },
    {
      id: 'fransk-1-2-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Bestille med mengde',
      problem: `Lag en bestilling pa fransk:`,
      solution: `**Bestilling:**
- Je voudrais un kilo de pommes, s'il vous plait.
(Jeg vil gjerne ha en kilo epler, takk.)

- Je prends deux bouteilles d'eau.
(Jeg tar to flasker vann.)`,
    },
    {
      id: 'fransk-1-2-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-2-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett bestillingene til fransk:',
        subTasks: [
          { label: 'a', task: 'Jeg vil gjerne ha en flaske melk.', solution: "Je voudrais une bouteille de lait." },
          { label: 'b', task: 'Jeg tar tre epler.', solution: 'Je prends trois pommes.' },
          { label: 'c', task: "Et stykke kake, takk.", solution: "Un morceau de gateau, s'il vous plait." },
        ],
        solution: "a) Je voudrais une bouteille de lait.\nb) Je prends trois pommes.\nc) Un morceau de gateau, s'il vous plait.",
        hints: ['Bruk "Je voudrais" eller "Je prends"'],
      },
    },
    {
      id: 'fransk-1-2-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-2-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort dialog i en butikk (6-8 setninger). Inkluder hilsen, sporre om pris, bestille og betale.',
        solution: "Eksempel:\nClient: Bonjour!\nVendeur: Bonjour! Je peux vous aider?\nClient: Ca coute combien, le t-shirt?\nVendeur: Ca coute dix-neuf euros quatre-vingt-dix-neuf.\nClient: Je le prends.\nVendeur: Ca fait dix-neuf euros quatre-vingt-dix-neuf.\nClient: Voila. (gir penger)\nVendeur: Merci! Au revoir!\nClient: Au revoir!",
        hints: ['Start med hilsen', 'Spor om pris med "Ca coute combien...?"', 'Avslutt med betaling og avskjed'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.1: La famille - Familien
// ============================================================================

export const CHAPTER_FRANSK_1_3_1: TextbookChapter = {
  id: 'fransk-1-3-1',
  courseId: 'fransk-1',
  chapterNumber: '3.1',
  title: 'La famille - Familien',
  description: 'Laer ord for familiemedlemmer pa fransk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'fortelle om familien sin',
  ],
  content: [
    {
      id: 'fransk-1-3-1-intro',
      type: 'text',
      content: `## Familie

Familie er et viktig tema i alle sprak. La oss laere ordene for familiemedlemmer pa fransk!`,
    },
    {
      id: 'fransk-1-3-1-text-1',
      type: 'text',
      content: `**Naer familie**

| Fransk | Norsk | Kjonn |
|--------|-------|-------|
| la mere | moren | f |
| le pere | faren | m |
| les parents | foreldrene | fl |
| la soeur | sosteren | f |
| le frere | broren | m |
| les freres et soeurs | sosknene | fl |
| l'enfant (m/f) | barnet | m/f |
| les enfants | barna | fl |`,
    },
    {
      id: 'fransk-1-3-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Naer familie',
      problem: `Oversett til fransk:
a) mor
b) far
c) soster`,
      solution: `a) la mere
b) le pere
c) la soeur

Merk at alle substantiv pa fransk har kjonn (le/la), og artikkelen er viktig a huske.`,
    },
    {
      id: 'fransk-1-3-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-3-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett familieordene til fransk (med artikkel):',
        subTasks: [
          { label: 'a', task: 'broren', solution: 'le frere' },
          { label: 'b', task: 'sosteren', solution: 'la soeur' },
          { label: 'c', task: 'foreldrene', solution: 'les parents' },
          { label: 'd', task: 'barnet', solution: "l'enfant" },
        ],
        solution: "a) le frere\nb) la soeur\nc) les parents\nd) l'enfant",
        hints: ['Husk artikkelen: le (m), la (f), les (fl)'],
      },
    },
    {
      id: 'fransk-1-3-1-text-2',
      type: 'text',
      content: `**Besteforeldre og barnebarn**

| Fransk | Norsk | Kjonn |
|--------|-------|-------|
| la grand-mere / mamie | bestemoren | f |
| le grand-pere / papi | bestefaren | m |
| les grands-parents | besteforeldrene | fl |
| le petit-fils | barnebarnet (gutt) | m |
| la petite-fille | barnebarnet (jente) | f |
| les petits-enfants | barnebarna | fl |`,
    },
    {
      id: 'fransk-1-3-1-tip-1',
      type: 'tip',
      content: `**Mamie** og **papi** er uformelle ord for bestemor og bestefar, akkurat som "bestemor" og "bestefar" pa norsk. De brukes mye i dagligtale. Andre varianter er "mamy/papy" og "meme/pepe".`,
    },
    {
      id: 'fransk-1-3-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Besteforeldre',
      problem: `Hvordan sier du:
"Jeg har en bestemor og en bestefar."`,
      solution: `J'ai une grand-mere et un grand-pere.
eller uformelt:
J'ai une mamie et un papi.`,
    },
    {
      id: 'fransk-1-3-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-3-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'bestemor (uformelt)', solution: 'mamie' },
          { label: 'b', task: 'bestefar (uformelt)', solution: 'papi' },
          { label: 'c', task: 'besteforeldrene', solution: 'les grands-parents' },
        ],
        solution: 'a) mamie\nb) papi\nc) les grands-parents',
        hints: ['Mamie og papi er de uformelle formene'],
      },
    },
    {
      id: 'fransk-1-3-1-text-3',
      type: 'text',
      content: `**Utvidet familie**

| Fransk | Norsk | Kjonn |
|--------|-------|-------|
| la tante | tanten | f |
| l'oncle (m) | onkelen | m |
| la cousine | kusinen | f |
| le cousin | fetteren | m |
| la niece | niesen | f |
| le neveu | nevoen | m |`,
    },
    {
      id: 'fransk-1-3-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Beskrive familien',
      problem: `Beskriv familien din pa fransk:`,
      solution: `**Eksempel:**
J'ai une grande famille. J'ai une mere, un pere, une soeur et un frere. Mes grands-parents habitent a Oslo.

(Jeg har en stor familie. Jeg har en mor, en far, en soster og en bror. Besteforeldrene mine bor i Oslo.)`,
    },
    {
      id: 'fransk-1-3-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-3-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'tanten', solution: 'la tante' },
          { label: 'b', task: 'onkelen', solution: "l'oncle" },
          { label: 'c', task: 'fetteren', solution: 'le cousin' },
          { label: 'd', task: 'kusinen', solution: 'la cousine' },
        ],
        solution: "a) la tante\nb) l'oncle\nc) le cousin\nd) la cousine",
        hints: ['Cousin (maskulin) og cousine (feminin) skiller kjonn med endelsen'],
      },
    },
    {
      id: 'fransk-1-3-1-def-1',
      type: 'definition',
      title: 'Verbet "avoir" (a ha)',
      content: `**Avoir** brukes for a si hva du har (og for alder!):

| Person | Fransk | Norsk |
|--------|--------|-------|
| j' | ai | jeg har |
| tu | as | du har |
| il/elle/on | a | han/hun/man har |
| nous | avons | vi har |
| vous | avez | dere har / De har |
| ils/elles | ont | de har |`,
    },
    {
      id: 'fransk-1-3-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-3-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig form av "avoir" og oversett:',
        subTasks: [
          { label: 'a', task: "J'___ une soeur.", solution: 'ai' },
          { label: 'b', task: 'Il ___ deux freres.', solution: 'a' },
          { label: 'c', task: 'Nous ___ beaucoup de cousins.', solution: 'avons' },
          { label: 'd', task: '___-tu des freres et soeurs?', solution: 'As' },
        ],
        solution: "a) ai (Jeg har en soster.)\nb) a (Han har to brodre.)\nc) avons (Vi har mange fettere.)\nd) As (Har du sosken?)",
        hints: ['Se boyingstabellen for avoir'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.2: Les adjectifs possessifs - Eiendomsord
// ============================================================================

export const CHAPTER_FRANSK_1_3_2: TextbookChapter = {
  id: 'fransk-1-3-2',
  courseId: 'fransk-1',
  chapterNumber: '3.2',
  title: 'Les adjectifs possessifs - Eiendomsord',
  description: 'Laer eiendomsordene mon, ma, mes, ton, ta, tes, son, sa, ses.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke eiendomsord riktig',
  ],
  content: [
    {
      id: 'fransk-1-3-2-intro',
      type: 'text',
      content: `## Eiendomsord

Eiendomsord (adjectifs possessifs) brukes for a vise hvem noe tilhorer, som "min", "din", "hans" osv. Pa fransk ma eiendomsordene samsvare med kjonnet til substantivet de star foran - ikke kjonnet til eieren!`,
    },
    {
      id: 'fransk-1-3-2-text-1',
      type: 'text',
      content: `**Eiendomsordene**

| Person | Maskulin | Feminin | Flertall | Norsk |
|--------|----------|---------|----------|-------|
| je | mon | ma | mes | min/mi/mitt/mine |
| tu | ton | ta | tes | din/di/ditt/dine |
| il/elle | son | sa | ses | hans/hennes/sin |
| nous | notre | notre | nos | var/vart/vare |
| vous | votre | votre | vos | deres/Deres |
| ils/elles | leur | leur | leurs | deres |`,
    },
    {
      id: 'fransk-1-3-2-def-1',
      type: 'definition',
      title: 'Samsvar med substantivet',
      content: `Eiendomsord samsvarer med substantivet, IKKE med eieren:

**Med "mon/ma/mes" som eksempel:**
| Kjonn | Eiendomsord | Eksempel |
|-------|-------------|----------|
| maskulin | mon | mon pere (min far) |
| feminin | ma | ma mere (min mor) |
| flertall | mes | mes parents (mine foreldre) |

**Viktig**: Foran hunkjonnsord som begynner med vokal eller stum h, brukes **mon/ton/son** i stedet for ma/ta/sa:
- mon amie (min venninne) - IKKE "ma amie"`,
    },
    {
      id: 'fransk-1-3-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Mon, ma og mes',
      problem: `Fyll inn mon, ma eller mes:
a) ___ frere
b) ___ soeur
c) ___ enfant
d) ___ parents`,
      solution: `a) **mon** frere (min bror - maskulin)
b) **ma** soeur (min soster - feminin)
c) **mon** enfant (mitt barn - begynner med vokal!)
d) **mes** parents (mine foreldre - flertall)`,
    },
    {
      id: 'fransk-1-3-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-3-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av "mon/ma/mes":',
        subTasks: [
          { label: 'a', task: '___ pere est gentil.', solution: 'Mon' },
          { label: 'b', task: '___ mere est professeur.', solution: 'Ma' },
          { label: 'c', task: '___ maison est grande.', solution: 'Ma' },
          { label: 'd', task: '___ freres et soeurs habitent ici.', solution: 'Mes' },
        ],
        solution: 'a) Mon\nb) Ma\nc) Ma\nd) Mes',
        hints: ['Maskulin = mon, feminin = ma, flertall = mes'],
      },
    },
    {
      id: 'fransk-1-3-2-text-2',
      type: 'text',
      content: `**Alle eiendomsord i oversikt**

| | Maskulin | Feminin | Flertall |
|--|----------|---------|----------|
| min | mon | ma | mes |
| din | ton | ta | tes |
| hans/hennes | son | sa | ses |
| var | notre | notre | nos |
| deres/Deres | votre | votre | vos |
| deres (fl.) | leur | leur | leurs |`,
    },
    {
      id: 'fransk-1-3-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Ton og son',
      problem: `Oversett til fransk:
a) din bror
b) hans soster
c) hennes foreldre`,
      solution: `a) **ton** frere (din bror)
b) **sa** soeur (hans soster)
c) **ses** parents (hennes foreldre)

Viktig: "son/sa/ses" betyr BADE "hans" og "hennes"! Pa fransk bestemmes formen av substantivet, ikke av eierens kjonn.`,
    },
    {
      id: 'fransk-1-3-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-3-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig eiendomsord:',
        subTasks: [
          { label: 'a', task: "C'est ___ chien. (hans)", solution: 'son' },
          { label: 'b', task: '___ chat est noir. (hennes)', solution: 'Son' },
          { label: 'c', task: 'Ou est ___ sac? (din)', solution: 'ton' },
          { label: 'd', task: '___ parents sont gentils. (vare)', solution: 'Nos' },
        ],
        solution: 'a) son\nb) Son\nc) ton\nd) Nos',
        hints: ['Tenk pa kjonnet til substantivet, ikke eieren'],
      },
    },
    {
      id: 'fransk-1-3-2-note-1',
      type: 'note',
      content: `Pass pa! "Son" kan bety bade "hans" og "hennes". Det er substantivets kjonn som bestemmer, ikke eierens. "Son pere" betyr bade "hans far" og "hennes far"!`,
    },
    {
      id: 'fransk-1-3-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Snakke om familie',
      problem: `Beskriv familiemedlemmer med eiendomsord:`,
      solution: `**Eksempler:**
- Mon pere s'appelle Erik. (Faren min heter Erik.)
- Ma mere est medecin. (Moren min er lege.)
- Ma soeur a 12 ans. (Sosteren min er 12 ar.)
- Mon frere habite a Paris. (Broren min bor i Paris.)`,
    },
    {
      id: 'fransk-1-3-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-3-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: "Min mor heter Anna.", solution: "Ma mere s'appelle Anna." },
          { label: 'b', task: 'Hans far er laerer.', solution: 'Son pere est professeur.' },
          { label: 'c', task: 'Hennes bror er 15 ar.', solution: 'Son frere a 15 ans.' },
        ],
        solution: "a) Ma mere s'appelle Anna.\nb) Son pere est professeur.\nc) Son frere a 15 ans.",
        hints: ['Husk samsvar med substantivet'],
      },
    },
    {
      id: 'fransk-1-3-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-3-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Fullfar teksten med riktige eiendomsord:',
        subTasks: [
          { label: 'a', task: "Je m'appelle Marc. ___ soeur s'appelle Lisa.", solution: 'Ma' },
          { label: 'b', task: 'Lisa a 14 ans. ___ couleur preferee est le bleu.', solution: 'Sa' },
          { label: 'c', task: "Nous avons un chien. ___ chien s'appelle Rex.", solution: 'Notre' },
        ],
        solution: 'a) Ma\nb) Sa\nc) Notre',
        hints: ['Tenk pa hvem som eier og substantivets kjonn'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.3: Decrire les personnes - Beskrive personer
// ============================================================================

export const CHAPTER_FRANSK_1_3_3: TextbookChapter = {
  id: 'fransk-1-3-3',
  courseId: 'fransk-1',
  chapterNumber: '3.3',
  title: 'Decrire les personnes - Beskrive personer',
  description: 'Laer a beskrive utseende og personlighet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive mennesker',
    'bruke adjektiv',
  ],
  content: [
    {
      id: 'fransk-1-3-3-intro',
      type: 'text',
      content: `## Beskrive personer

For a fortelle om familien din eller venner, er det nyttig a kunne beskrive hvordan de ser ut og hvordan de er. Pa fransk ma adjektiver samsvare med kjonnet og tallet til substantivet.`,
    },
    {
      id: 'fransk-1-3-3-text-1',
      type: 'text',
      content: `**Utseende - Har**

| Fransk | Norsk |
|--------|-------|
| les cheveux (m.pl.) | haret |
| les cheveux blonds | blondt har |
| les cheveux bruns / chatains | brunt har |
| les cheveux noirs | svart har |
| les cheveux roux | rodt har |
| les cheveux gris | gratt har |
| les cheveux longs | langt har |
| les cheveux courts | kort har |
| les cheveux boucles | krollete har |
| les cheveux raides | glatt har |`,
    },
    {
      id: 'fransk-1-3-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Beskrive har',
      problem: `Beskriv haret til en person:`,
      solution: `**Eksempler:**
- Il a les cheveux blonds. (Han har blondt har.)
- Elle a les cheveux longs et bruns. (Hun har langt, brunt har.)
- Mon pere a les cheveux courts et gris. (Faren min har kort, gratt har.)

Merk: Pa fransk sier man "les cheveux" (flertall), ikke entall som pa norsk.`,
    },
    {
      id: 'fransk-1-3-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-3-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Han har brunt har.', solution: 'Il a les cheveux bruns.' },
          { label: 'b', task: 'Hun har langt har.', solution: 'Elle a les cheveux longs.' },
          { label: 'c', task: 'Jeg har kort har.', solution: "J'ai les cheveux courts." },
        ],
        solution: "a) Il a les cheveux bruns.\nb) Elle a les cheveux longs.\nc) J'ai les cheveux courts.",
        hints: ['Bruk "a/ai" + "les cheveux" + adjektiv'],
      },
    },
    {
      id: 'fransk-1-3-3-text-2',
      type: 'text',
      content: `**Utseende - Oyne og kropp**

| Fransk | Norsk |
|--------|-------|
| les yeux (m.pl.) | oynene |
| les yeux bleus | bla oyne |
| les yeux verts | gronne oyne |
| les yeux marron | brune oyne |
| grand(e) | hoy/stor |
| petit(e) | liten/lav |
| mince | slank |
| gros(se) | tykk |
| jeune | ung |
| vieux / vieille | gammel |`,
    },
    {
      id: 'fransk-1-3-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Beskrive oyne og kropp',
      problem: `Lag setninger om utseende:`,
      solution: `**Eksempler:**
- Il a les yeux bleus. (Han har bla oyne.)
- Elle est grande et mince. (Hun er hoy og slank.)
- Mon grand-pere est vieux. (Bestefaren min er gammel.)

Merk: "marron" (brun) endres aldri, selv i flertall: les yeux marron.`,
    },
    {
      id: 'fransk-1-3-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-3-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Hun har gronne oyne.', solution: 'Elle a les yeux verts.' },
          { label: 'b', task: 'Han er hoy.', solution: 'Il est grand.' },
          { label: 'c', task: 'Min bror er ung.', solution: 'Mon frere est jeune.' },
        ],
        solution: 'a) Elle a les yeux verts.\nb) Il est grand.\nc) Mon frere est jeune.',
        hints: ['Bruk "a" for oyne og "est" for egenskaper'],
      },
    },
    {
      id: 'fransk-1-3-3-text-3',
      type: 'text',
      content: `**Personlighet**

| Maskulin | Feminin | Norsk |
|----------|---------|-------|
| gentil | gentille | snill |
| sympa(thique) | sympa(thique) | vennlig |
| drole | drole | morsom |
| serieux | serieuse | serios |
| intelligent | intelligente | intelligent |
| travailleur | travailleuse | flittig |
| paresseux | paresseuse | lat |
| timide | timide | sjenert |
| courageux | courageuse | modig |
| calme | calme | rolig |
| bavard | bavarde | pratsom |`,
    },
    {
      id: 'fransk-1-3-3-def-1',
      type: 'definition',
      title: 'Adjektiv og kjonnssamsvar',
      content: `Pa fransk boyes adjektiv etter kjonnet til substantivet:
- Il est **gentil**. (Han er snill.)
- Elle est **gentille**. (Hun er snill.)
- Ils sont **gentils**. (De er snille - maskulin flertall.)
- Elles sont **gentilles**. (De er snille - feminin flertall.)

Generell regel: Legg til -e for hunkjonn, -s for flertall, -es for hunkjonn flertall.`,
    },
    {
      id: 'fransk-1-3-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Beskrive personlighet',
      problem: `Beskriv personligheten til noen:`,
      solution: `**Eksempler:**
- Ma mere est tres gentille. (Moren min er veldig snill.)
- Mon frere est drole. (Broren min er morsom.)
- Ma soeur est intelligente et travailleuse. (Sosteren min er intelligent og flittig.)`,
    },
    {
      id: 'fransk-1-3-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-3-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Min mor er vennlig.', solution: 'Ma mere est sympathique.' },
          { label: 'b', task: 'Hans bror er morsom.', solution: 'Son frere est drole.' },
          { label: 'c', task: 'Hun er sjenert men snill.', solution: 'Elle est timide mais gentille.' },
        ],
        solution: 'a) Ma mere est sympathique.\nb) Son frere est drole.\nc) Elle est timide mais gentille.',
        hints: ['Husk a boye adjektivet etter kjonnet'],
      },
    },
    {
      id: 'fransk-1-3-3-tip-1',
      type: 'tip',
      content: `Bruk "tres" (veldig) for a forsterke adjektiver: tres gentil (veldig snill), tres grand (veldig hoy). "Vraiment" (virkelig) er et annet nyttig forsterkningsord.`,
    },
    {
      id: 'fransk-1-3-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-3-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en beskrivelse av et familiemedlem pa fransk (4-5 setninger). Inkluder navn, alder, utseende og personlighet.',
        solution: "Eksempel:\nMa soeur s'appelle Lisa. Elle a 14 ans. Elle a les cheveux longs et blonds et les yeux bleus. Elle est grande et mince. Lisa est tres gentille et drole.",
        hints: ['Start med navn og alder', 'Beskriv har og oyne', 'Beskriv personlighet med adjektiver'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.4: Presenter ma famille - Presentere familien
// ============================================================================

export const CHAPTER_FRANSK_1_3_4: TextbookChapter = {
  id: 'fransk-1-3-4',
  courseId: 'fransk-1',
  chapterNumber: '3.4',
  title: 'Presenter ma famille - Presentere familien',
  description: 'Laer a presentere familien din pa fransk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'presentere familien sin sammenhengende',
    'kombinere ordforrad og grammatikk',
  ],
  content: [
    {
      id: 'fransk-1-3-4-intro',
      type: 'text',
      content: `## Presentere familien

Na skal vi sette sammen alt vi har laert! Du skal kunne presentere familien din - fortelle om familiemedlemmer, beskrive dem og bruke eiendomsord riktig.`,
    },
    {
      id: 'fransk-1-3-4-text-1',
      type: 'text',
      content: `**Nyttige fraser**

| Fransk | Norsk |
|--------|-------|
| Je voudrais presenter ma famille. | Jeg vil gjerne presentere familien min. |
| Ma famille se compose de... | Familien min bestar av... |
| Nous sommes ... personnes. | Vi er ... personer. |
| J'ai... | Jeg har... |
| ... et moi, on s'entend bien. | ... og jeg kommer godt overens. |`,
    },
    {
      id: 'fransk-1-3-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Apningsfrase',
      problem: `Hvordan begynner du a presentere familien?`,
      solution: `**Gode apninger:**
- Je voudrais presenter ma famille.
(Jeg vil gjerne presentere familien min.)

- Ma famille est petite/grande.
(Familien min er liten/stor.)

- Nous sommes cinq personnes.
(Vi er fem personer.)`,
    },
    {
      id: 'fransk-1-3-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-3-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Familien min er stor.', solution: 'Ma famille est grande.' },
          { label: 'b', task: 'Vi er fire personer.', solution: 'Nous sommes quatre personnes.' },
          { label: 'c', task: 'Jeg har to sosken.', solution: "J'ai deux freres et soeurs." },
        ],
        solution: "a) Ma famille est grande.\nb) Nous sommes quatre personnes.\nc) J'ai deux freres et soeurs.",
        hints: ['Bruk "Ma famille" og tall'],
      },
    },
    {
      id: 'fransk-1-3-4-text-2',
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
      id: 'fransk-1-3-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Beskrive et familiemedlem',
      problem: `Skriv en fullstendig beskrivelse av moren din:`,
      solution: `**Eksempel:**
Ma mere s'appelle Karin. Elle a 45 ans. Elle a les cheveux courts et bruns et les yeux verts. Ma mere est tres gentille et sympathique. Elle est professeur. On s'entend bien.

(Moren min heter Karin. Hun er 45 ar gammel. Hun har kort, brunt har og gronne oyne. Moren min er veldig snill og vennlig. Hun er laerer. Vi kommer godt overens.)`,
    },
    {
      id: 'fransk-1-3-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-3-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fullfar beskrivelsen pa fransk:',
        subTasks: [
          { label: 'a', task: 'Faren min heter ___. (Per)', solution: "Mon pere s'appelle Per." },
          { label: 'b', task: 'Han er ___ ar gammel. (50)', solution: 'Il a cinquante ans.' },
          { label: 'c', task: 'Han har ___ har. (kort, gratt)', solution: 'Il a les cheveux courts et gris.' },
        ],
        solution: "a) Mon pere s'appelle Per.\nb) Il a cinquante ans.\nc) Il a les cheveux courts et gris.",
        hints: ['Bruk de riktige eiendomsordene og adjektivene'],
      },
    },
    {
      id: 'fransk-1-3-4-text-3',
      type: 'text',
      content: `**Yrker**

| Maskulin | Feminin | Norsk |
|----------|---------|-------|
| professeur | professeure | laereren |
| medecin | medecin | legen |
| ingenieur | ingenieure | ingenioren |
| infirmier | infirmiere | sykepleieren |
| policier | policiere | politibetjenten |
| cuisinier | cuisiniere | kokken |
| chomeur | chomeuse | arbeidslos |
| retraite | retraitee | pensjonist |`,
    },
    {
      id: 'fransk-1-3-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Nevne yrke',
      problem: `Hvordan sier du hva noen jobber som?`,
      solution: `**Eksempler:**
- Mon pere est ingenieur. (Faren min er ingenior.)
- Ma mere est medecin. (Moren min er lege.)
- Mon grand-pere est retraite. (Bestefaren min er pensjonist.)

Merk: Pa fransk bruker man ikke artikkel foran yrkestitler etter "etre": "Il est medecin" (ikke "Il est un medecin").`,
    },
    {
      id: 'fransk-1-3-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-3-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Min mor er sykepleier.', solution: 'Ma mere est infirmiere.' },
          { label: 'b', task: 'Min far er laerer.', solution: 'Mon pere est professeur.' },
          { label: 'c', task: 'Min bestemor er pensjonist.', solution: 'Ma grand-mere est retraitee.' },
        ],
        solution: 'a) Ma mere est infirmiere.\nb) Mon pere est professeur.\nc) Ma grand-mere est retraitee.',
        hints: ['Husk a bruke femininformen for kvinner'],
      },
    },
    {
      id: 'fransk-1-3-4-text-4',
      type: 'text',
      content: `**Fullstendig familiepresentasjon - struktur**

1. **Innledning**: Storrelse pa familien
2. **Foreldre**: Navn, alder, utseende, yrke
3. **Sosken**: Navn, alder, beskrivelse
4. **Eventuelt**: Besteforeldre, kjaeledyr
5. **Avslutning**: Hva dere liker a gjore sammen`,
    },
    {
      id: 'fransk-1-3-4-example-4',
      type: 'example',
      title: 'Eksempel 4: Fullstendig presentasjon',
      problem: `Les en fullstendig familiepresentasjon:`,
      solution: `**Ma famille**

Ma famille n'est pas tres grande. Nous sommes quatre personnes: mes parents, ma soeur et moi.

Mon pere s'appelle Erik. Il a 48 ans. Il a les cheveux courts et bruns et les yeux bleus. Il est ingenieur. Mon pere est tres gentil et drole.

Ma mere s'appelle Anne. Elle a 45 ans. Elle a les cheveux longs et blonds et les yeux verts. Elle est professeure. Ma mere est sympathique et intelligente.

Ma soeur s'appelle Lisa. Elle a 12 ans. Elle a les cheveux longs et bruns. Lisa est timide mais tres gentille.

Le week-end, nous jouons souvent a des jeux ensemble. J'aime ma famille!`,
    },
    {
      id: 'fransk-1-3-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-3-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en presentasjon av din egen familie pa fransk (minst 8-10 setninger). Inkluder: familiestorrelse, minst to familiemedlemmer med navn, alder, utseende og personlighet.',
        solution: "Se eksemplet i teksten for inspirasjon. Husk a bruke alle elementene: eiendomsord (mon/ma/mes), verbene etre og avoir, adjektiver for utseende og personlighet, og tall for alder.",
        hints: [
          'Begynn med "Ma famille est..."',
          'Beskriv hvert familiemedlem systematisk',
          'Bruk adjektiver for utseende og personlighet',
          'Avslutt med noe positivt om familien',
        ],
      },
    },
    {
      id: 'fransk-1-3-4-tip-1',
      type: 'tip',
      content: `Nar du skriver en lengre tekst pa fransk, bruk bindeord som **et** (og), **mais** (men), **aussi** (ogsa), **parce que** (fordi) for a variere setningene.`,
    },
    {
      id: 'fransk-1-3-4-note-1',
      type: 'note',
      content: `**Gratulerer!** Du har na laert grunnleggende om hilsener, presentasjon, tall, farger og familie pa fransk. Ov pa a bruke disse kunnskapene i samtaler! Fransk er et vakkert sprak med en rik kultur - bonne continuation! (Lykke til videre!)`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const FRANSK_1_CHAPTERS_1_3: TextbookChapter[] = [
  CHAPTER_FRANSK_1_1_1,
  CHAPTER_FRANSK_1_1_2,
  CHAPTER_FRANSK_1_1_3,
  CHAPTER_FRANSK_1_1_4,
  CHAPTER_FRANSK_1_2_1,
  CHAPTER_FRANSK_1_2_2,
  CHAPTER_FRANSK_1_2_3,
  CHAPTER_FRANSK_1_2_4,
  CHAPTER_FRANSK_1_3_1,
  CHAPTER_FRANSK_1_3_2,
  CHAPTER_FRANSK_1_3_3,
  CHAPTER_FRANSK_1_3_4,
];
