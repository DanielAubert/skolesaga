/**
 * Tysk nivå 1 - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for fremmedspråk nivå 1
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
  description: 'Lær grunnleggende hilsener og høflighetsfraser på tysk.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke enkle hilsener og høflighetsuttrykk',
  ],
  content: [
    {
      id: 'tysk-1-1-1-intro',
      type: 'text',
      content: `Tysk er et av de mest talte språkene i Europa og er offisielt språk i Tyskland, Østerrike, Sveits og flere andre land. La oss starte med de viktigste hilsenene!`,
    },
    {
      id: 'tysk-1-1-1-text-1',
      type: 'text',
      content: `**Hilsener (Begrüßungen)**

| Tysk | Norsk |
|------|-------|
| Hallo | Hallo (uformell) |
| Guten Tag | God dag (formell) |
| Guten Morgen | God morgen |
| Guten Abend | God kveld |
| Gute Nacht | God natt |`,
    },
    {
      id: 'tysk-1-1-1-text-2',
      type: 'text',
      content: `**Avskjed (Verabschiedung)**

| Tysk | Norsk |
|------|-------|
| Auf Wiedersehen | På gjensyn (formell) |
| Tschüss | Ha det (uformell) |
| Bis bald | Vi sees snart |
| Bis morgen | Vi sees i morgen |`,
    },
    {
      id: 'tysk-1-1-1-def-1',
      type: 'definition',
      title: 'Du vs. Sie',
      content: `På tysk skiller man mellom uformell (du) og formell (Sie) tiltale. Bruk "du" med venner og jevnaldrende, og "Sie" med voksne du ikke kjenner godt, lærere, i butikker osv.`,
    },
    {
      id: 'tysk-1-1-1-text-3',
      type: 'text',
      content: `**Høflighetsuttrykk**

| Tysk | Norsk |
|------|-------|
| Bitte | Vær så snill / Vær så god |
| Danke | Takk |
| Danke schön | Tusen takk |
| Bitte schön | Vær så god |
| Entschuldigung | Unnskyld |`,
    },
    {
      id: 'tysk-1-1-1-tip-1',
      type: 'tip',
      content: `"Bitte" brukes både når du ber om noe (vær så snill) og når du gir noe til noen (vær så god).`,
    },
  ],
  exercises: [
    {
      id: 'tysk-1-1-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "Guten Morgen" på norsk?',
      options: [
        { id: 'a', text: 'God natt', isCorrect: false, feedback: '"God natt" er "Gute Nacht".' },
        { id: 'b', text: 'God morgen', isCorrect: true },
        { id: 'c', text: 'God kveld', isCorrect: false, feedback: '"God kveld" er "Guten Abend".' },
        { id: 'd', text: 'God dag', isCorrect: false, feedback: '"God dag" er "Guten Tag".' },
      ],
      solution: '"Guten Morgen" betyr "God morgen" på norsk.',
    },
    {
      id: 'tysk-1-1-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken hilsen er mest formell?',
      options: [
        { id: 'a', text: 'Hallo', isCorrect: false, feedback: '"Hallo" er uformelt.' },
        { id: 'b', text: 'Tschüss', isCorrect: false, feedback: '"Tschüss" er en uformell avskjedshilsen.' },
        { id: 'c', text: 'Guten Tag', isCorrect: true },
        { id: 'd', text: 'Hi', isCorrect: false, feedback: '"Hi" er veldig uformelt.' },
      ],
      solution: '"Guten Tag" er den mest formelle hilsenen og brukes i profesjonelle sammenhenger.',
    },
    {
      id: 'tysk-1-1-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva sier du når du vil takke noen høflig på tysk?',
      options: [
        { id: 'a', text: 'Bitte', isCorrect: false, feedback: '"Bitte" betyr "vær så snill/god".' },
        { id: 'b', text: 'Entschuldigung', isCorrect: false, feedback: '"Entschuldigung" betyr "unnskyld".' },
        { id: 'c', text: 'Danke schön', isCorrect: true },
        { id: 'd', text: 'Tschüss', isCorrect: false, feedback: '"Tschüss" betyr "ha det".' },
      ],
      solution: '"Danke schön" betyr "tusen takk" og er en høflig måte å takke på.',
    },
    {
      id: 'tysk-1-1-1-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "Auf Wiedersehen"?',
      options: [
        { id: 'a', text: 'God morgen', isCorrect: false, feedback: '"God morgen" er "Guten Morgen".' },
        { id: 'b', text: 'Ha det bra', isCorrect: false, feedback: 'Nærme, men "Auf Wiedersehen" er mer formelt.' },
        { id: 'c', text: 'På gjensyn', isCorrect: true },
        { id: 'd', text: 'Vær så god', isCorrect: false, feedback: '"Vær så god" er "Bitte".' },
      ],
      solution: '"Auf Wiedersehen" betyr "på gjensyn" og er en formell måte å si ha det på.',
    },
  ],
};

// ============================================================================
// Kapittel 1.2: Ich heiße... - Presentere seg
// ============================================================================

export const CHAPTER_TYSK_1_1_2: TextbookChapter = {
  id: 'tysk-1-1-2',
  courseId: 'tysk-1',
  chapterNumber: '1.2',
  title: 'Ich heiße... - Presentere seg',
  description: 'Lær å presentere deg selv og stille spørsmål.',
  estimatedMinutes: 45,
  competenceGoals: [
    'presentere seg selv og andre',
  ],
  content: [
    {
      id: 'tysk-1-1-2-intro',
      type: 'text',
      content: `Å kunne presentere seg er grunnleggende i ethvert språk. La oss lære å si hvem vi er og hvor vi kommer fra!`,
    },
    {
      id: 'tysk-1-1-2-text-1',
      type: 'text',
      content: `**Presentere seg selv**

| Tysk | Norsk |
|------|-------|
| Ich heiße... | Jeg heter... |
| Ich bin... | Jeg er... |
| Mein Name ist... | Mitt navn er... |
| Ich komme aus... | Jeg kommer fra... |
| Ich bin ... Jahre alt | Jeg er ... år gammel |`,
    },
    {
      id: 'tysk-1-1-2-example-1',
      type: 'example',
      content: `**Eksempel på presentasjon:**

Hallo! Ich heiße Anna. Ich komme aus Norwegen. Ich bin fünfzehn Jahre alt.
*(Hallo! Jeg heter Anna. Jeg kommer fra Norge. Jeg er femten år gammel.)*`,
    },
    {
      id: 'tysk-1-1-2-text-2',
      type: 'text',
      content: `**Spørre om andres identitet**

| Tysk | Norsk |
|------|-------|
| Wie heißt du? | Hva heter du? (uformelt) |
| Wie heißen Sie? | Hva heter De? (formelt) |
| Woher kommst du? | Hvor kommer du fra? |
| Wie alt bist du? | Hvor gammel er du? |`,
    },
    {
      id: 'tysk-1-1-2-def-1',
      type: 'definition',
      title: 'Verbet "heißen" (å hete)',
      content: `ich heiße - jeg heter
du heißt - du heter
er/sie heißt - han/hun heter
wir heißen - vi heter
ihr heißt - dere heter
sie/Sie heißen - de/De heter`,
    },
    {
      id: 'tysk-1-1-2-def-2',
      type: 'definition',
      title: 'Verbet "sein" (å være)',
      content: `ich bin - jeg er
du bist - du er
er/sie/es ist - han/hun/det er
wir sind - vi er
ihr seid - dere er
sie/Sie sind - de/De er`,
    },
    {
      id: 'tysk-1-1-2-tip-1',
      type: 'tip',
      content: `På tysk har substantiver alltid stor forbokstav, uansett om de står først i setningen eller ikke.`,
    },
  ],
  exercises: [
    {
      id: 'tysk-1-1-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvordan sier du "Jeg heter Erik" på tysk?',
      options: [
        { id: 'a', text: 'Ich bin Erik', isCorrect: false, feedback: '"Ich bin" betyr "Jeg er", men kan også brukes.' },
        { id: 'b', text: 'Ich heiße Erik', isCorrect: true },
        { id: 'c', text: 'Ich komme Erik', isCorrect: false, feedback: '"Ich komme" betyr "Jeg kommer".' },
        { id: 'd', text: 'Ich habe Erik', isCorrect: false, feedback: '"Ich habe" betyr "Jeg har".' },
      ],
      solution: '"Ich heiße Erik" betyr "Jeg heter Erik".',
    },
    {
      id: 'tysk-1-1-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "Woher kommst du?"',
      options: [
        { id: 'a', text: 'Hvor gammel er du?', isCorrect: false, feedback: 'Det er "Wie alt bist du?"' },
        { id: 'b', text: 'Hvor bor du?', isCorrect: false, feedback: 'Det er "Wo wohnst du?"' },
        { id: 'c', text: 'Hvor kommer du fra?', isCorrect: true },
        { id: 'd', text: 'Hva heter du?', isCorrect: false, feedback: 'Det er "Wie heißt du?"' },
      ],
      solution: '"Woher kommst du?" betyr "Hvor kommer du fra?"',
    },
    {
      id: 'tysk-1-1-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken form av "sein" brukes med "ich"?',
      options: [
        { id: 'a', text: 'ist', isCorrect: false, feedback: '"Ist" brukes med er/sie/es.' },
        { id: 'b', text: 'bist', isCorrect: false, feedback: '"Bist" brukes med "du".' },
        { id: 'c', text: 'bin', isCorrect: true },
        { id: 'd', text: 'sind', isCorrect: false, feedback: '"Sind" brukes med wir/sie/Sie.' },
      ],
      solution: 'Med "ich" bruker vi "bin": "Ich bin" (Jeg er).',
    },
    {
      id: 'tysk-1-1-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan spør du formelt "Hva heter De?"',
      options: [
        { id: 'a', text: 'Wie heißt du?', isCorrect: false, feedback: 'Det er uformelt.' },
        { id: 'b', text: 'Wie heißen Sie?', isCorrect: true },
        { id: 'c', text: 'Wie bist du?', isCorrect: false, feedback: 'Det er ikke riktig grammatikk.' },
        { id: 'd', text: 'Wer sind Sie?', isCorrect: false, feedback: 'Det betyr "Hvem er De?"' },
      ],
      solution: '"Wie heißen Sie?" er den formelle måten å spørre om navn på.',
    },
  ],
};

// ============================================================================
// Kapittel 2.1: Die Zahlen - Tallene
// ============================================================================

export const CHAPTER_TYSK_1_2_1: TextbookChapter = {
  id: 'tysk-1-2-1',
  courseId: 'tysk-1',
  chapterNumber: '2.1',
  title: 'Die Zahlen - Tallene',
  description: 'Lær tallene 0-100 på tysk.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke tall i kommunikasjon',
  ],
  content: [
    {
      id: 'tysk-1-2-1-intro',
      type: 'text',
      content: `Å kunne tallene er viktig for å snakke om alder, priser, telefonnummer og mye mer.`,
    },
    {
      id: 'tysk-1-2-1-text-1',
      type: 'text',
      content: `**Tallene 0-12**

| Tall | Tysk |
|------|------|
| 0 | null |
| 1 | eins |
| 2 | zwei |
| 3 | drei |
| 4 | vier |
| 5 | fünf |
| 6 | sechs |
| 7 | sieben |
| 8 | acht |
| 9 | neun |
| 10 | zehn |
| 11 | elf |
| 12 | zwölf |`,
    },
    {
      id: 'tysk-1-2-1-text-2',
      type: 'text',
      content: `**Tallene 13-19**

| Tall | Tysk |
|------|------|
| 13 | dreizehn |
| 14 | vierzehn |
| 15 | fünfzehn |
| 16 | sechzehn |
| 17 | siebzehn |
| 18 | achtzehn |
| 19 | neunzehn |`,
    },
    {
      id: 'tysk-1-2-1-note-1',
      type: 'note',
      content: `Legg merke til at 16 er "sechzehn" (ikke "sechszehn") og 17 er "siebzehn" (ikke "siebenzehn").`,
    },
    {
      id: 'tysk-1-2-1-text-3',
      type: 'text',
      content: `**Tierne 20-100**

| Tall | Tysk |
|------|------|
| 20 | zwanzig |
| 30 | dreißig |
| 40 | vierzig |
| 50 | fünfzig |
| 60 | sechzig |
| 70 | siebzig |
| 80 | achtzig |
| 90 | neunzig |
| 100 | hundert |`,
    },
    {
      id: 'tysk-1-2-1-tip-1',
      type: 'tip',
      content: `På tysk sier man enerne før tierne: 21 = einundzwanzig (en-og-tjue), 45 = fünfundvierzig (fem-og-førti).`,
    },
    {
      id: 'tysk-1-2-1-example-1',
      type: 'example',
      content: `**Sammensatte tall:**
- 23 = dreiundzwanzig (drei + und + zwanzig)
- 47 = siebenundvierzig
- 89 = neunundachtzig`,
    },
  ],
  exercises: [
    {
      id: 'tysk-1-2-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er "sieben" på norsk?',
      options: [
        { id: 'a', text: 'Seks', isCorrect: false, feedback: '"Seks" er "sechs".' },
        { id: 'b', text: 'Syv', isCorrect: true },
        { id: 'c', text: 'Åtte', isCorrect: false, feedback: '"Åtte" er "acht".' },
        { id: 'd', text: 'Ni', isCorrect: false, feedback: '"Ni" er "neun".' },
      ],
      solution: '"Sieben" betyr "syv" på norsk.',
    },
    {
      id: 'tysk-1-2-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvordan sier du 15 på tysk?',
      options: [
        { id: 'a', text: 'Fünfzig', isCorrect: false, feedback: '"Fünfzig" er 50.' },
        { id: 'b', text: 'Fünfzehn', isCorrect: true },
        { id: 'c', text: 'Funfzehn', isCorrect: false, feedback: 'Feil stavemåte - det skal være "fünfzehn".' },
        { id: 'd', text: 'Füfzehn', isCorrect: false, feedback: 'Feil stavemåte.' },
      ],
      solution: '15 på tysk er "fünfzehn".',
    },
    {
      id: 'tysk-1-2-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan sier du 34 på tysk?',
      options: [
        { id: 'a', text: 'Dreiundvierzig', isCorrect: false, feedback: 'Det er 43.' },
        { id: 'b', text: 'Vierunddreißig', isCorrect: true },
        { id: 'c', text: 'Dreißigvier', isCorrect: false, feedback: 'På tysk kommer eneren før tieren.' },
        { id: 'd', text: 'Dreivierzig', isCorrect: false, feedback: 'Det mangler "und" og riktig tier.' },
      ],
      solution: '34 = vierunddreißig (fire-og-tretti). På tysk kommer eneren før tieren.',
    },
    {
      id: 'tysk-1-2-1-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "siebenundachtzig"?',
      options: [
        { id: 'a', text: '78', isCorrect: false, feedback: '78 er "achtundsiebzig".' },
        { id: 'b', text: '87', isCorrect: true },
        { id: 'c', text: '68', isCorrect: false, feedback: '68 er "achtundsechzig".' },
        { id: 'd', text: '86', isCorrect: false, feedback: '86 er "sechsundachtzig".' },
      ],
      solution: '"Siebenundachtzig" = sieben (7) + und + achtzig (80) = 87.',
    },
  ],
};

// ============================================================================
// Kapittel 2.2: Die Farben - Fargene
// ============================================================================

export const CHAPTER_TYSK_1_2_2: TextbookChapter = {
  id: 'tysk-1-2-2',
  courseId: 'tysk-1',
  chapterNumber: '2.2',
  title: 'Die Farben - Fargene',
  description: 'Lær fargene og hvordan de brukes.',
  estimatedMinutes: 35,
  competenceGoals: [
    'beskrive ting med farger',
  ],
  content: [
    {
      id: 'tysk-1-2-2-intro',
      type: 'text',
      content: `Fargene er nyttige for å beskrive ting og gjenstander på tysk.`,
    },
    {
      id: 'tysk-1-2-2-text-1',
      type: 'text',
      content: `**Grunnleggende farger**

| Tysk | Norsk |
|------|-------|
| rot | rød |
| blau | blå |
| gelb | gul |
| grün | grønn |
| weiß | hvit |
| schwarz | svart |
| braun | brun |
| orange | oransje |
| rosa | rosa |
| lila | lilla |
| grau | grå |`,
    },
    {
      id: 'tysk-1-2-2-example-1',
      type: 'example',
      content: `**Bruk av farger:**
- Das Auto ist rot. *(Bilen er rød.)*
- Der Himmel ist blau. *(Himmelen er blå.)*
- Die Blume ist gelb. *(Blomsten er gul.)*`,
    },
    {
      id: 'tysk-1-2-2-note-1',
      type: 'note',
      content: `Når fargen står etter verbet "sein" (være), bøyes den ikke: "Der Apfel ist rot."`,
    },
    {
      id: 'tysk-1-2-2-text-2',
      type: 'text',
      content: `**Nyanser**

| Tysk | Norsk |
|------|-------|
| hell | lys (hellblau = lyseblå) |
| dunkel | mørk (dunkelgrün = mørkegrønn) |`,
    },
  ],
  exercises: [
    {
      id: 'tysk-1-2-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "grün" på norsk?',
      options: [
        { id: 'a', text: 'Grå', isCorrect: false, feedback: '"Grå" er "grau".' },
        { id: 'b', text: 'Grønn', isCorrect: true },
        { id: 'c', text: 'Gul', isCorrect: false, feedback: '"Gul" er "gelb".' },
        { id: 'd', text: 'Brun', isCorrect: false, feedback: '"Brun" er "braun".' },
      ],
      solution: '"Grün" betyr "grønn" på norsk.',
    },
    {
      id: 'tysk-1-2-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvordan sier du "hvit" på tysk?',
      options: [
        { id: 'a', text: 'Weit', isCorrect: false, feedback: '"Weit" betyr "vid/langt".' },
        { id: 'b', text: 'Weiß', isCorrect: true },
        { id: 'c', text: 'Wais', isCorrect: false, feedback: 'Feil stavemåte.' },
        { id: 'd', text: 'Weiss', isCorrect: false, feedback: 'I moderne tysk brukes "ß".' },
      ],
      solution: '"Hvit" på tysk er "weiß".',
    },
    {
      id: 'tysk-1-2-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "Das Haus ist gelb"?',
      options: [
        { id: 'a', text: 'Huset er grønt', isCorrect: false, feedback: '"Grønt" er "grün".' },
        { id: 'b', text: 'Huset er gult', isCorrect: true },
        { id: 'c', text: 'Huset er rødt', isCorrect: false, feedback: '"Rødt" er "rot".' },
        { id: 'd', text: 'Huset er hvitt', isCorrect: false, feedback: '"Hvitt" er "weiß".' },
      ],
      solution: '"Das Haus ist gelb" betyr "Huset er gult".',
    },
    {
      id: 'tysk-1-2-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "dunkelblau"?',
      options: [
        { id: 'a', text: 'Lyseblå', isCorrect: false, feedback: '"Lyseblå" er "hellblau".' },
        { id: 'b', text: 'Mørkeblå', isCorrect: true },
        { id: 'c', text: 'Himmelblå', isCorrect: false, feedback: 'Det ville vært "himmelblau".' },
        { id: 'd', text: 'Grønnblå', isCorrect: false, feedback: 'Det ville vært "grünblau".' },
      ],
      solution: '"Dunkel" betyr mørk, så "dunkelblau" betyr "mørkeblå".',
    },
  ],
};

// ============================================================================
// Kapittel 3.1: Die Familie - Familien
// ============================================================================

export const CHAPTER_TYSK_1_3_1: TextbookChapter = {
  id: 'tysk-1-3-1',
  courseId: 'tysk-1',
  chapterNumber: '3.1',
  title: 'Die Familie - Familien',
  description: 'Lær ord for familiemedlemmer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'fortelle om familien sin',
  ],
  content: [
    {
      id: 'tysk-1-3-1-intro',
      type: 'text',
      content: `Familie er et viktig tema i alle språk. La oss lære ordene for familiemedlemmer på tysk!`,
    },
    {
      id: 'tysk-1-3-1-text-1',
      type: 'text',
      content: `**Nær familie**

| Tysk | Norsk |
|------|-------|
| die Mutter | moren |
| der Vater | faren |
| die Eltern | foreldrene |
| die Schwester | søsteren |
| der Bruder | broren |
| die Geschwister | søsknene |`,
    },
    {
      id: 'tysk-1-3-1-text-2',
      type: 'text',
      content: `**Besteforeldre og barnebarn**

| Tysk | Norsk |
|------|-------|
| die Großmutter / die Oma | bestemoren |
| der Großvater / der Opa | bestefaren |
| die Großeltern | besteforeldrene |
| der Enkel | barnebarnet (gutt) |
| die Enkelin | barnebarnet (jente) |`,
    },
    {
      id: 'tysk-1-3-1-text-3',
      type: 'text',
      content: `**Utvidet familie**

| Tysk | Norsk |
|------|-------|
| die Tante | tanten |
| der Onkel | onkelen |
| die Kusine / die Cousine | kusinen |
| der Cousin | fetteren |`,
    },
    {
      id: 'tysk-1-3-1-def-1',
      type: 'definition',
      title: 'Eiendomsord',
      content: `mein/meine - min/mi/mitt
dein/deine - din/di/ditt
sein/seine - hans/sin
ihr/ihre - hennes/sin

Eksempel: mein Bruder (min bror), meine Schwester (min søster)`,
    },
    {
      id: 'tysk-1-3-1-def-2',
      type: 'definition',
      title: 'Verbet "haben" (å ha)',
      content: `ich habe - jeg har
du hast - du har
er/sie hat - han/hun har
wir haben - vi har
ihr habt - dere har
sie/Sie haben - de/De har`,
    },
    {
      id: 'tysk-1-3-1-example-1',
      type: 'example',
      content: `**Eksempel:**
Meine Familie ist groß. Ich habe zwei Schwestern und einen Bruder.
*(Familien min er stor. Jeg har to søstre og en bror.)*`,
    },
  ],
  exercises: [
    {
      id: 'tysk-1-3-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "die Mutter" på norsk?',
      options: [
        { id: 'a', text: 'Faren', isCorrect: false, feedback: '"Faren" er "der Vater".' },
        { id: 'b', text: 'Moren', isCorrect: true },
        { id: 'c', text: 'Søsteren', isCorrect: false, feedback: '"Søsteren" er "die Schwester".' },
        { id: 'd', text: 'Broren', isCorrect: false, feedback: '"Broren" er "der Bruder".' },
      ],
      solution: '"Die Mutter" betyr "moren" på norsk.',
    },
    {
      id: 'tysk-1-3-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvordan sier du "bestefar" på tysk?',
      options: [
        { id: 'a', text: 'Die Großmutter', isCorrect: false, feedback: 'Det betyr "bestemor".' },
        { id: 'b', text: 'Der Großvater', isCorrect: true },
        { id: 'c', text: 'Die Großeltern', isCorrect: false, feedback: 'Det betyr "besteforeldrene".' },
        { id: 'd', text: 'Der Enkel', isCorrect: false, feedback: 'Det betyr "barnebarnet".' },
      ],
      solution: '"Bestefar" på tysk er "der Großvater" eller "der Opa".',
    },
    {
      id: 'tysk-1-3-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "Ich habe eine Schwester"?',
      options: [
        { id: 'a', text: 'Jeg har en bror', isCorrect: false, feedback: '"Bror" er "Bruder".' },
        { id: 'b', text: 'Jeg har en søster', isCorrect: true },
        { id: 'c', text: 'Jeg har en kusine', isCorrect: false, feedback: '"Kusine" er "Cousine".' },
        { id: 'd', text: 'Jeg har en tante', isCorrect: false, feedback: '"Tante" er "Tante".' },
      ],
      solution: '"Ich habe eine Schwester" betyr "Jeg har en søster".',
    },
    {
      id: 'tysk-1-3-1-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken form av "haben" brukes med "er"?',
      options: [
        { id: 'a', text: 'habe', isCorrect: false, feedback: '"Habe" brukes med "ich".' },
        { id: 'b', text: 'hast', isCorrect: false, feedback: '"Hast" brukes med "du".' },
        { id: 'c', text: 'hat', isCorrect: true },
        { id: 'd', text: 'haben', isCorrect: false, feedback: '"Haben" brukes med wir/sie/Sie.' },
      ],
      solution: 'Med "er" (han) bruker vi "hat": "Er hat" (Han har).',
    },
  ],
};

// ============================================================================
// Kapittel 3.2: Menschen beschreiben - Beskrive personer
// ============================================================================

export const CHAPTER_TYSK_1_3_2: TextbookChapter = {
  id: 'tysk-1-3-2',
  courseId: 'tysk-1',
  chapterNumber: '3.2',
  title: 'Menschen beschreiben - Beskrive personer',
  description: 'Lær å beskrive utseende og personlighet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive mennesker',
  ],
  content: [
    {
      id: 'tysk-1-3-2-intro',
      type: 'text',
      content: `Lær å beskrive hvordan personer ser ut og hvordan de er.`,
    },
    {
      id: 'tysk-1-3-2-text-1',
      type: 'text',
      content: `**Utseende - Hår**

| Tysk | Norsk |
|------|-------|
| lange Haare | langt hår |
| kurze Haare | kort hår |
| blonde Haare | blondt hår |
| braune Haare | brunt hår |
| schwarze Haare | svart hår |
| rote Haare | rødt hår |
| lockige Haare | krøllete hår |
| glatte Haare | glatt hår |`,
    },
    {
      id: 'tysk-1-3-2-text-2',
      type: 'text',
      content: `**Utseende - Øyne og kropp**

| Tysk | Norsk |
|------|-------|
| blaue Augen | blå øyne |
| braune Augen | brune øyne |
| grüne Augen | grønne øyne |
| groß | høy/stor |
| klein | liten/lav |
| schlank | slank |`,
    },
    {
      id: 'tysk-1-3-2-example-1',
      type: 'example',
      content: `**Eksempel:**
Mein Bruder ist groß und hat kurze, braune Haare. Er hat blaue Augen.
*(Broren min er høy og har kort, brunt hår. Han har blå øyne.)*`,
    },
    {
      id: 'tysk-1-3-2-text-3',
      type: 'text',
      content: `**Personlighet**

| Tysk | Norsk |
|------|-------|
| nett | hyggelig |
| freundlich | vennlig |
| lustig | morsom |
| ernst | seriøs |
| intelligent | intelligent |
| fleißig | flittig |
| faul | lat |
| schüchtern | sjenert |
| mutig | modig |`,
    },
    {
      id: 'tysk-1-3-2-tip-1',
      type: 'tip',
      content: `Bruk "sehr" (veldig) for å forsterke adjektiver: sehr groß (veldig høy), sehr freundlich (veldig vennlig).`,
    },
  ],
  exercises: [
    {
      id: 'tysk-1-3-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "blonde Haare"?',
      options: [
        { id: 'a', text: 'Brunt hår', isCorrect: false, feedback: '"Brunt hår" er "braune Haare".' },
        { id: 'b', text: 'Blondt hår', isCorrect: true },
        { id: 'c', text: 'Svart hår', isCorrect: false, feedback: '"Svart hår" er "schwarze Haare".' },
        { id: 'd', text: 'Rødt hår', isCorrect: false, feedback: '"Rødt hår" er "rote Haare".' },
      ],
      solution: '"Blonde Haare" betyr "blondt hår".',
    },
    {
      id: 'tysk-1-3-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "freundlich"?',
      options: [
        { id: 'a', text: 'Morsom', isCorrect: false, feedback: '"Morsom" er "lustig".' },
        { id: 'b', text: 'Seriøs', isCorrect: false, feedback: '"Seriøs" er "ernst".' },
        { id: 'c', text: 'Vennlig', isCorrect: true },
        { id: 'd', text: 'Sjenert', isCorrect: false, feedback: '"Sjenert" er "schüchtern".' },
      ],
      solution: '"Freundlich" betyr "vennlig".',
    },
    {
      id: 'tysk-1-3-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan sier du "Hun er høy" på tysk?',
      options: [
        { id: 'a', text: 'Sie ist klein', isCorrect: false, feedback: 'Det betyr "Hun er lav/liten".' },
        { id: 'b', text: 'Sie ist groß', isCorrect: true },
        { id: 'c', text: 'Er ist groß', isCorrect: false, feedback: '"Er" er hankjønn (han).' },
        { id: 'd', text: 'Sie hat groß', isCorrect: false, feedback: 'Feil grammatikk - bruk "ist" ikke "hat".' },
      ],
      solution: '"Sie ist groß" betyr "Hun er høy".',
    },
    {
      id: 'tysk-1-3-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "Er hat grüne Augen"?',
      options: [
        { id: 'a', text: 'Han har blå øyne', isCorrect: false, feedback: '"Blå øyne" er "blaue Augen".' },
        { id: 'b', text: 'Han har brune øyne', isCorrect: false, feedback: '"Brune øyne" er "braune Augen".' },
        { id: 'c', text: 'Han har grønne øyne', isCorrect: true },
        { id: 'd', text: 'Hun har grønne øyne', isCorrect: false, feedback: '"Hun" er "sie", ikke "er".' },
      ],
      solution: '"Er hat grüne Augen" betyr "Han har grønne øyne".',
    },
  ],
};

// ============================================================================
// Kapittel 4.1: Die Uhrzeit und die Tage - Tid og dager
// ============================================================================

export const CHAPTER_TYSK_1_4_1: TextbookChapter = {
  id: 'tysk-1-4-1',
  courseId: 'tysk-1',
  chapterNumber: '4.1',
  title: 'Die Uhrzeit und die Tage - Tid og dager',
  description: 'Lær å si klokken og ukedagene.',
  estimatedMinutes: 45,
  competenceGoals: [
    'uttrykke tid og dato',
  ],
  content: [
    {
      id: 'tysk-1-4-1-intro',
      type: 'text',
      content: `Å kunne snakke om tid er viktig i dagliglivet. La oss lære klokken, ukedager og måneder!`,
    },
    {
      id: 'tysk-1-4-1-text-1',
      type: 'text',
      content: `**Spørre om klokken**

| Tysk | Norsk |
|------|-------|
| Wie spät ist es? | Hva er klokken? |
| Wie viel Uhr ist es? | Hva er klokken? |
| Um wie viel Uhr? | Når? / Klokken hva? |`,
    },
    {
      id: 'tysk-1-4-1-def-1',
      type: 'definition',
      title: 'Si klokken',
      content: `Es ist ein Uhr - Klokken er ett
Es ist zwei Uhr - Klokken er to
Es ist halb drei - Klokken er halv tre (2:30)
Es ist Viertel nach vier - Klokken er kvart over fire
Es ist Viertel vor fünf - Klokken er kvart på fem`,
    },
    {
      id: 'tysk-1-4-1-warning-1',
      type: 'warning',
      content: `På tysk refererer "halb" til den kommende timen: "halb drei" = halv tre (2:30), ikke halv to!`,
    },
    {
      id: 'tysk-1-4-1-text-2',
      type: 'text',
      content: `**Ukedagene**

| Tysk | Norsk |
|------|-------|
| Montag | mandag |
| Dienstag | tirsdag |
| Mittwoch | onsdag |
| Donnerstag | torsdag |
| Freitag | fredag |
| Samstag / Sonnabend | lørdag |
| Sonntag | søndag |`,
    },
    {
      id: 'tysk-1-4-1-text-3',
      type: 'text',
      content: `**Månedene**

Januar, Februar, März, April, Mai, Juni, Juli, August, September, Oktober, November, Dezember`,
    },
    {
      id: 'tysk-1-4-1-example-1',
      type: 'example',
      content: `**Eksempel:**
- Der Kurs ist am Montag um zehn Uhr. *(Kurset er på mandag klokken ti.)*
- Mein Geburtstag ist im Mai. *(Bursdagen min er i mai.)*`,
    },
  ],
  exercises: [
    {
      id: 'tysk-1-4-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "Mittwoch"?',
      options: [
        { id: 'a', text: 'Mandag', isCorrect: false, feedback: '"Mandag" er "Montag".' },
        { id: 'b', text: 'Tirsdag', isCorrect: false, feedback: '"Tirsdag" er "Dienstag".' },
        { id: 'c', text: 'Onsdag', isCorrect: true },
        { id: 'd', text: 'Torsdag', isCorrect: false, feedback: '"Torsdag" er "Donnerstag".' },
      ],
      solution: '"Mittwoch" betyr "onsdag" (midten av uken).',
    },
    {
      id: 'tysk-1-4-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "Es ist halb sieben"?',
      options: [
        { id: 'a', text: 'Klokken er 6:30', isCorrect: true },
        { id: 'b', text: 'Klokken er 7:30', isCorrect: false, feedback: '"Halb" refererer til den kommende timen.' },
        { id: 'c', text: 'Klokken er 7:00', isCorrect: false, feedback: 'Det ville vært "Es ist sieben Uhr".' },
        { id: 'd', text: 'Klokken er 6:00', isCorrect: false, feedback: 'Det ville vært "Es ist sechs Uhr".' },
      ],
      solution: '"Halb sieben" betyr 6:30 (halv syv) på tysk.',
    },
    {
      id: 'tysk-1-4-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvordan spør du "Hva er klokken?" på tysk?',
      options: [
        { id: 'a', text: 'Was ist Uhr?', isCorrect: false, feedback: 'Feil grammatikk.' },
        { id: 'b', text: 'Wie spät ist es?', isCorrect: true },
        { id: 'c', text: 'Wann ist es?', isCorrect: false, feedback: '"Wann" betyr "når".' },
        { id: 'd', text: 'Wo ist die Uhr?', isCorrect: false, feedback: 'Det betyr "Hvor er klokken?"' },
      ],
      solution: '"Wie spät ist es?" betyr "Hva er klokken?"',
    },
    {
      id: 'tysk-1-4-1-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "Viertel vor acht"?',
      options: [
        { id: 'a', text: 'Kvart over åtte', isCorrect: false, feedback: '"Kvart over" er "Viertel nach".' },
        { id: 'b', text: 'Kvart på åtte', isCorrect: true },
        { id: 'c', text: 'Halv åtte', isCorrect: false, feedback: '"Halv åtte" er "halb acht".' },
        { id: 'd', text: 'Åtte', isCorrect: false, feedback: '"Åtte" er "acht Uhr".' },
      ],
      solution: '"Viertel vor acht" betyr "kvart på åtte" (7:45).',
    },
  ],
};

// ============================================================================
// Kapittel 4.2: Die Aktivitäten - Aktiviteter
// ============================================================================

export const CHAPTER_TYSK_1_4_2: TextbookChapter = {
  id: 'tysk-1-4-2',
  courseId: 'tysk-1',
  chapterNumber: '4.2',
  title: 'Die Aktivitäten - Aktiviteter',
  description: 'Lær om daglige aktiviteter og hobbyer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'fortelle om aktiviteter og interesser',
  ],
  content: [
    {
      id: 'tysk-1-4-2-intro',
      type: 'text',
      content: `Lær ord for aktiviteter og hobbyer, og hvordan du snakker om hva du gjør.`,
    },
    {
      id: 'tysk-1-4-2-text-1',
      type: 'text',
      content: `**Vanlige aktiviteter**

| Tysk | Norsk |
|------|-------|
| spielen | spille/leke |
| lesen | lese |
| schreiben | skrive |
| hören | høre |
| sehen / fernsehen | se / se på TV |
| lernen | lære |
| arbeiten | arbeide |
| schlafen | sove |`,
    },
    {
      id: 'tysk-1-4-2-text-2',
      type: 'text',
      content: `**Sport og hobbyer**

| Tysk | Norsk |
|------|-------|
| Fußball spielen | spille fotball |
| Tennis spielen | spille tennis |
| schwimmen | svømme |
| laufen | løpe |
| tanzen | danse |
| singen | synge |
| kochen | lage mat |
| malen | male |`,
    },
    {
      id: 'tysk-1-4-2-def-1',
      type: 'definition',
      title: 'Regelmessige verb i presens',
      content: `De fleste verb følger dette mønsteret med "spielen" (spille):
ich spiele - jeg spiller
du spielst - du spiller
er/sie spielt - han/hun spiller
wir spielen - vi spiller
ihr spielt - dere spiller
sie spielen - de spiller`,
    },
    {
      id: 'tysk-1-4-2-tip-1',
      type: 'tip',
      content: `Bruk "gern" etter verbet for å si at du liker å gjøre noe: "Ich schwimme gern" (Jeg liker å svømme).`,
    },
    {
      id: 'tysk-1-4-2-text-3',
      type: 'text',
      content: `**Tidsuttrykk**

| Tysk | Norsk |
|------|-------|
| heute | i dag |
| morgen | i morgen |
| gestern | i går |
| am Morgen | om morgenen |
| am Abend | om kvelden |
| am Wochenende | i helgen |`,
    },
    {
      id: 'tysk-1-4-2-example-1',
      type: 'example',
      content: `**Eksempel:**
- Ich spiele gern Fußball. *(Jeg liker å spille fotball.)*
- Am Wochenende lese ich Bücher. *(I helgen leser jeg bøker.)*`,
    },
  ],
  exercises: [
    {
      id: 'tysk-1-4-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "schwimmen"?',
      options: [
        { id: 'a', text: 'Løpe', isCorrect: false, feedback: '"Løpe" er "laufen".' },
        { id: 'b', text: 'Svømme', isCorrect: true },
        { id: 'c', text: 'Danse', isCorrect: false, feedback: '"Danse" er "tanzen".' },
        { id: 'd', text: 'Sove', isCorrect: false, feedback: '"Sove" er "schlafen".' },
      ],
      solution: '"Schwimmen" betyr "svømme".',
    },
    {
      id: 'tysk-1-4-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan sier du "Jeg spiller fotball" på tysk?',
      options: [
        { id: 'a', text: 'Ich spielen Fußball', isCorrect: false, feedback: 'Med "ich" bruker vi "spiele".' },
        { id: 'b', text: 'Ich spielt Fußball', isCorrect: false, feedback: '"Spielt" brukes med er/sie.' },
        { id: 'c', text: 'Ich spiele Fußball', isCorrect: true },
        { id: 'd', text: 'Ich spiel Fußball', isCorrect: false, feedback: 'Verbet mangler endelse.' },
      ],
      solution: 'Med "ich" bruker vi "spiele": "Ich spiele Fußball".',
    },
    {
      id: 'tysk-1-4-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "Ich lese gern Bücher"?',
      options: [
        { id: 'a', text: 'Jeg leser bøker nå', isCorrect: false, feedback: '"Nå" ville vært "jetzt".' },
        { id: 'b', text: 'Jeg liker å lese bøker', isCorrect: true },
        { id: 'c', text: 'Jeg har lest bøker', isCorrect: false, feedback: 'Det er ikke fortid.' },
        { id: 'd', text: 'Jeg må lese bøker', isCorrect: false, feedback: '"Må" ville vært "muss".' },
      ],
      solution: '"Gern" betyr at man liker å gjøre noe. "Ich lese gern" = Jeg liker å lese.',
    },
    {
      id: 'tysk-1-4-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "am Wochenende"?',
      options: [
        { id: 'a', text: 'I morgen', isCorrect: false, feedback: '"I morgen" er "morgen".' },
        { id: 'b', text: 'I går', isCorrect: false, feedback: '"I går" er "gestern".' },
        { id: 'c', text: 'I helgen', isCorrect: true },
        { id: 'd', text: 'Om kvelden', isCorrect: false, feedback: '"Om kvelden" er "am Abend".' },
      ],
      solution: '"Am Wochenende" betyr "i helgen".',
    },
  ],
};

// ============================================================================
// Kapittel 5.1: Essen und Trinken - Mat og drikke
// ============================================================================

export const CHAPTER_TYSK_1_5_1: TextbookChapter = {
  id: 'tysk-1-5-1',
  courseId: 'tysk-1',
  chapterNumber: '5.1',
  title: 'Essen und Trinken - Mat og drikke',
  description: 'Lær ord for mat, drikke og måltider.',
  estimatedMinutes: 45,
  competenceGoals: [
    'uttrykke hva du liker å spise',
  ],
  content: [
    {
      id: 'tysk-1-5-1-intro',
      type: 'text',
      content: `Mat og drikke er et viktig tema! La oss lære ordene for måltider og vanlige matvarer.`,
    },
    {
      id: 'tysk-1-5-1-text-1',
      type: 'text',
      content: `**Måltider**

| Tysk | Norsk |
|------|-------|
| das Frühstück | frokosten |
| das Mittagessen | lunsjen |
| das Abendessen | middagen |
| der Snack | snacken/mellommåltidet |`,
    },
    {
      id: 'tysk-1-5-1-text-2',
      type: 'text',
      content: `**Mat**

| Tysk | Norsk |
|------|-------|
| das Brot | brødet |
| das Brötchen | rundstykket |
| der Käse | osten |
| die Wurst | pølsen |
| das Ei / die Eier | egget / eggene |
| das Fleisch | kjøttet |
| der Fisch | fisken |
| das Gemüse | grønnsakene |
| das Obst | frukten |`,
    },
    {
      id: 'tysk-1-5-1-text-3',
      type: 'text',
      content: `**Drikke**

| Tysk | Norsk |
|------|-------|
| das Wasser | vannet |
| der Saft | juicen |
| die Milch | melken |
| der Kaffee | kaffen |
| der Tee | teen |
| die Limonade | brusen |`,
    },
    {
      id: 'tysk-1-5-1-def-1',
      type: 'definition',
      title: 'Verbet "mögen" (å like)',
      content: `ich mag - jeg liker
du magst - du liker
er/sie mag - han/hun liker
wir mögen - vi liker
ihr mögt - dere liker
sie mögen - de liker`,
    },
    {
      id: 'tysk-1-5-1-example-1',
      type: 'example',
      content: `**Eksempel:**
- Ich mag Käse. *(Jeg liker ost.)*
- Zum Frühstück esse ich Brot mit Käse. *(Til frokost spiser jeg brød med ost.)*
- Ich trinke gern Kaffee. *(Jeg liker å drikke kaffe.)*`,
    },
    {
      id: 'tysk-1-5-1-tip-1',
      type: 'tip',
      content: `Bruk "essen" (spise) og "trinken" (drikke): Ich esse Brot. Ich trinke Wasser.`,
    },
  ],
  exercises: [
    {
      id: 'tysk-1-5-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "das Frühstück"?',
      options: [
        { id: 'a', text: 'Lunsjen', isCorrect: false, feedback: '"Lunsjen" er "das Mittagessen".' },
        { id: 'b', text: 'Frokosten', isCorrect: true },
        { id: 'c', text: 'Middagen', isCorrect: false, feedback: '"Middagen" er "das Abendessen".' },
        { id: 'd', text: 'Snacken', isCorrect: false, feedback: '"Snacken" er "der Snack".' },
      ],
      solution: '"Das Frühstück" betyr "frokosten".',
    },
    {
      id: 'tysk-1-5-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvordan sier du "melk" på tysk?',
      options: [
        { id: 'a', text: 'Der Milch', isCorrect: false, feedback: '"Milch" er hunkjønn.' },
        { id: 'b', text: 'Das Milch', isCorrect: false, feedback: '"Milch" er hunkjønn.' },
        { id: 'c', text: 'Die Milch', isCorrect: true },
        { id: 'd', text: 'Den Milch', isCorrect: false, feedback: '"Den" er ikke en tysk artikkel.' },
      ],
      solution: '"Melk" på tysk er "die Milch" (hunkjønn).',
    },
    {
      id: 'tysk-1-5-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "Ich mag Obst"?',
      options: [
        { id: 'a', text: 'Jeg spiser frukt', isCorrect: false, feedback: '"Spiser" er "esse".' },
        { id: 'b', text: 'Jeg liker frukt', isCorrect: true },
        { id: 'c', text: 'Jeg kjøper frukt', isCorrect: false, feedback: '"Kjøper" er "kaufe".' },
        { id: 'd', text: 'Jeg har frukt', isCorrect: false, feedback: '"Har" er "habe".' },
      ],
      solution: '"Ich mag" betyr "jeg liker". "Ich mag Obst" = Jeg liker frukt.',
    },
    {
      id: 'tysk-1-5-1-ex-4',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "Ich trinke Wasser"?',
      options: [
        { id: 'a', text: 'Jeg liker vann', isCorrect: false, feedback: '"Liker" er "mag".' },
        { id: 'b', text: 'Jeg har vann', isCorrect: false, feedback: '"Har" er "habe".' },
        { id: 'c', text: 'Jeg drikker vann', isCorrect: true },
        { id: 'd', text: 'Jeg vil ha vann', isCorrect: false, feedback: '"Vil ha" er "möchte".' },
      ],
      solution: '"Trinken" betyr "å drikke". "Ich trinke Wasser" = Jeg drikker vann.',
    },
  ],
};

// ============================================================================
// Kapittel 5.2: Im Restaurant - På restauranten
// ============================================================================

export const CHAPTER_TYSK_1_5_2: TextbookChapter = {
  id: 'tysk-1-5-2',
  courseId: 'tysk-1',
  chapterNumber: '5.2',
  title: 'Im Restaurant - På restauranten',
  description: 'Lær å bestille mat og snakke på restaurant.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kommunisere i enkle hverdagssituasjoner',
  ],
  content: [
    {
      id: 'tysk-1-5-2-intro',
      type: 'text',
      content: `Å kunne bestille mat på restaurant er en praktisk ferdighet. La oss lære de viktigste frasene!`,
    },
    {
      id: 'tysk-1-5-2-text-1',
      type: 'text',
      content: `**Nyttige fraser for bestilling**

| Tysk | Norsk |
|------|-------|
| Ich hätte gern... | Jeg vil gjerne ha... |
| Ich möchte... | Jeg ønsker... |
| Kann ich bitte... haben? | Kan jeg få...? |
| Die Speisekarte, bitte | Menyen, takk |
| Die Rechnung, bitte | Regningen, takk |`,
    },
    {
      id: 'tysk-1-5-2-example-1',
      type: 'example',
      content: `**Eksempel på bestilling:**
Kellner: Was möchten Sie bestellen?
*(Hva ønsker De å bestille?)*

Gast: Ich hätte gern eine Pizza und ein Glas Wasser, bitte.
*(Jeg vil gjerne ha en pizza og et glass vann, takk.)*`,
    },
    {
      id: 'tysk-1-5-2-text-2',
      type: 'text',
      content: `**Spørsmål fra servitøren**

| Tysk | Norsk |
|------|-------|
| Was möchten Sie bestellen? | Hva ønsker De å bestille? |
| Möchten Sie etwas trinken? | Ønsker De noe å drikke? |
| Hat es geschmeckt? | Smakte det? |
| Zusammen oder getrennt? | Sammen eller hver for seg? |`,
    },
    {
      id: 'tysk-1-5-2-text-3',
      type: 'text',
      content: `**Svar og uttrykk**

| Tysk | Norsk |
|------|-------|
| Ja, sehr gut! | Ja, veldig godt! |
| Es war lecker | Det var deilig |
| Zusammen, bitte | Sammen, takk |
| Getrennt, bitte | Hver for seg, takk |
| Stimmt so | Behold resten (tips) |`,
    },
    {
      id: 'tysk-1-5-2-note-1',
      type: 'note',
      content: `I Tyskland er det vanlig å gi ca. 5-10% tips. Man kan si "Stimmt so" (behold resten) eller runde opp beløpet.`,
    },
    {
      id: 'tysk-1-5-2-tip-1',
      type: 'tip',
      content: `Bruk "Ich hätte gern" (jeg vil gjerne ha) for høflige bestillinger. Det er høfligere enn bare "Ich will" (jeg vil).`,
    },
  ],
  exercises: [
    {
      id: 'tysk-1-5-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvordan ber du høflig om menyen?',
      options: [
        { id: 'a', text: 'Gib mir die Speisekarte!', isCorrect: false, feedback: 'Det er uhøflig og kommanderende.' },
        { id: 'b', text: 'Die Speisekarte, bitte', isCorrect: true },
        { id: 'c', text: 'Wo ist die Speisekarte?', isCorrect: false, feedback: 'Det betyr "Hvor er menyen?"' },
        { id: 'd', text: 'Ich will die Speisekarte', isCorrect: false, feedback: '"Ich will" er mindre høflig.' },
      ],
      solution: '"Die Speisekarte, bitte" er en høflig måte å be om menyen.',
    },
    {
      id: 'tysk-1-5-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "Die Rechnung, bitte"?',
      options: [
        { id: 'a', text: 'Menyen, takk', isCorrect: false, feedback: '"Menyen" er "die Speisekarte".' },
        { id: 'b', text: 'Regningen, takk', isCorrect: true },
        { id: 'c', text: 'Vannet, takk', isCorrect: false, feedback: '"Vannet" er "das Wasser".' },
        { id: 'd', text: 'Maten, takk', isCorrect: false, feedback: '"Maten" er "das Essen".' },
      ],
      solution: '"Die Rechnung, bitte" betyr "Regningen, takk".',
    },
    {
      id: 'tysk-1-5-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan sier du "Jeg vil gjerne ha en kaffe"?',
      options: [
        { id: 'a', text: 'Ich will einen Kaffee', isCorrect: false, feedback: '"Ich will" er mindre høflig.' },
        { id: 'b', text: 'Ich hätte gern einen Kaffee', isCorrect: true },
        { id: 'c', text: 'Ich habe einen Kaffee', isCorrect: false, feedback: 'Det betyr "Jeg har en kaffe".' },
        { id: 'd', text: 'Ich bin einen Kaffee', isCorrect: false, feedback: 'Feil grammatikk.' },
      ],
      solution: '"Ich hätte gern einen Kaffee" er den høflige måten å bestille på.',
    },
    {
      id: 'tysk-1-5-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "Hat es geschmeckt?"',
      options: [
        { id: 'a', text: 'Hva vil du ha?', isCorrect: false, feedback: 'Det er "Was möchten Sie?"' },
        { id: 'b', text: 'Er du ferdig?', isCorrect: false, feedback: 'Det er "Sind Sie fertig?"' },
        { id: 'c', text: 'Smakte det?', isCorrect: true },
        { id: 'd', text: 'Vil du ha mer?', isCorrect: false, feedback: 'Det er "Möchten Sie mehr?"' },
      ],
      solution: '"Hat es geschmeckt?" betyr "Smakte det?" og spørres ofte av servitøren.',
    },
  ],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const TYSK_1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TYSK_1_1_1,
  CHAPTER_TYSK_1_1_2,
  CHAPTER_TYSK_1_2_1,
  CHAPTER_TYSK_1_2_2,
  CHAPTER_TYSK_1_3_1,
  CHAPTER_TYSK_1_3_2,
  CHAPTER_TYSK_1_4_1,
  CHAPTER_TYSK_1_4_2,
  CHAPTER_TYSK_1_5_1,
  CHAPTER_TYSK_1_5_2,
];
