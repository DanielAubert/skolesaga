/**
 * Fransk nivå 1 - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for fremmedspråk nivå 1
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
  description: 'Lær grunnleggende hilsener og høflighetsfraser på fransk.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke enkle hilsener og høflighetsuttrykk',
  ],
  content: [
    {
      id: 'fransk-1-1-1-intro',
      type: 'text',
      content: `Fransk er et av verdens mest talte språk og er offisielt språk i over 29 land. La oss starte med de viktigste hilsenene!`,
    },
    {
      id: 'fransk-1-1-1-text-1',
      type: 'text',
      content: `**Hilsener (Salutations)**

| Fransk | Norsk |
|--------|-------|
| Bonjour | God dag / Hei |
| Bonsoir | God kveld |
| Bonne nuit | God natt |
| Salut | Hei (uformelt) |
| Coucou | Hei (veldig uformelt) |`,
    },
    {
      id: 'fransk-1-1-1-text-2',
      type: 'text',
      content: `**Avskjed (Au revoir)**

| Fransk | Norsk |
|--------|-------|
| Au revoir | På gjensyn |
| Salut | Ha det (uformelt) |
| À bientôt | Vi sees snart |
| À demain | Vi sees i morgen |
| Bonne journée | Ha en fin dag |`,
    },
    {
      id: 'fransk-1-1-1-def-1',
      type: 'definition',
      title: 'Tu vs. Vous',
      content: `På fransk skiller man mellom uformell (tu) og formell (vous) tiltale. Bruk "tu" med venner og jevnaldrende, og "vous" med voksne du ikke kjenner godt, lærere, i butikker osv. "Vous" brukes også i flertall (dere).`,
    },
    {
      id: 'fransk-1-1-1-text-3',
      type: 'text',
      content: `**Høflighetsuttrykk**

| Fransk | Norsk |
|--------|-------|
| S'il vous plaît | Vær så snill (formelt) |
| S'il te plaît | Vær så snill (uformelt) |
| Merci | Takk |
| Merci beaucoup | Tusen takk |
| De rien | Ingen årsak |
| Excusez-moi | Unnskyld (formelt) |
| Pardon | Unnskyld |`,
    },
    {
      id: 'fransk-1-1-1-tip-1',
      type: 'tip',
      content: `"Bonjour" brukes om dagen frem til ca. kl. 18, deretter sier man "Bonsoir".`,
    },
  ],
  exercises: [
    {
      id: 'fransk-1-1-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "Bonjour" på norsk?',
      options: [
        { id: 'a', text: 'God natt', isCorrect: false, feedback: '"God natt" er "Bonne nuit".' },
        { id: 'b', text: 'God dag / Hei', isCorrect: true },
        { id: 'c', text: 'God kveld', isCorrect: false, feedback: '"God kveld" er "Bonsoir".' },
        { id: 'd', text: 'Ha det', isCorrect: false, feedback: '"Ha det" er "Au revoir" eller "Salut".' },
      ],
      solution: '"Bonjour" betyr "God dag" eller "Hei" på norsk og brukes om dagen.',
    },
    {
      id: 'fransk-1-1-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken hilsen er mest uformell?',
      options: [
        { id: 'a', text: 'Bonjour', isCorrect: false, feedback: '"Bonjour" er nøytral/formell.' },
        { id: 'b', text: 'Bonsoir', isCorrect: false, feedback: '"Bonsoir" er formell.' },
        { id: 'c', text: 'Salut', isCorrect: true },
        { id: 'd', text: 'Au revoir', isCorrect: false, feedback: '"Au revoir" er en avskjedshilsen.' },
      ],
      solution: '"Salut" er den mest uformelle hilsenen og brukes mellom venner.',
    },
    {
      id: 'fransk-1-1-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva sier du når du vil takke noen høflig på fransk?',
      options: [
        { id: 'a', text: 'De rien', isCorrect: false, feedback: '"De rien" betyr "ingen årsak".' },
        { id: 'b', text: 'Pardon', isCorrect: false, feedback: '"Pardon" betyr "unnskyld".' },
        { id: 'c', text: 'Merci beaucoup', isCorrect: true },
        { id: 'd', text: 'Salut', isCorrect: false, feedback: '"Salut" betyr "hei" eller "ha det".' },
      ],
      solution: '"Merci beaucoup" betyr "tusen takk" og er en høflig måte å takke på.',
    },
    {
      id: 'fransk-1-1-1-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Når bruker du "vous" i stedet for "tu"?',
      options: [
        { id: 'a', text: 'Med venner', isCorrect: false, feedback: 'Med venner bruker du "tu".' },
        { id: 'b', text: 'Med voksne du ikke kjenner godt', isCorrect: true },
        { id: 'c', text: 'Med søsken', isCorrect: false, feedback: 'Med søsken bruker du "tu".' },
        { id: 'd', text: 'Med kjæledyr', isCorrect: false, feedback: 'Med kjæledyr bruker du "tu".' },
      ],
      solution: '"Vous" er formell tiltale som brukes med voksne du ikke kjenner godt, lærere, i butikker osv.',
    },
  ],
};

// ============================================================================
// Kapittel 1.2: Je m'appelle... - Presentere seg
// ============================================================================

export const CHAPTER_FRANSK_1_1_2: TextbookChapter = {
  id: 'fransk-1-1-2',
  courseId: 'fransk-1',
  chapterNumber: '1.2',
  title: 'Je m\'appelle... - Presentere seg',
  description: 'Lær å presentere deg selv og stille spørsmål.',
  estimatedMinutes: 45,
  competenceGoals: [
    'presentere seg selv og andre',
  ],
  content: [
    {
      id: 'fransk-1-1-2-intro',
      type: 'text',
      content: `Å kunne presentere seg er grunnleggende i ethvert språk. La oss lære å si hvem vi er og hvor vi kommer fra!`,
    },
    {
      id: 'fransk-1-1-2-text-1',
      type: 'text',
      content: `**Presentere seg selv**

| Fransk | Norsk |
|--------|-------|
| Je m'appelle... | Jeg heter... |
| Je suis... | Jeg er... |
| J'ai ... ans | Jeg er ... år gammel |
| Je viens de... | Jeg kommer fra... |
| J'habite à... | Jeg bor i... |`,
    },
    {
      id: 'fransk-1-1-2-example-1',
      type: 'example',
      content: `**Eksempel på presentasjon:**

Bonjour! Je m'appelle Marie. Je viens de Norvège. J'ai quinze ans.
*(Hei! Jeg heter Marie. Jeg kommer fra Norge. Jeg er femten år gammel.)*`,
    },
    {
      id: 'fransk-1-1-2-text-2',
      type: 'text',
      content: `**Spørre om andres identitet**

| Fransk | Norsk |
|--------|-------|
| Comment tu t'appelles? | Hva heter du? (uformelt) |
| Comment vous appelez-vous? | Hva heter De? (formelt) |
| Tu viens d'où? | Hvor kommer du fra? |
| Tu as quel âge? | Hvor gammel er du? |`,
    },
    {
      id: 'fransk-1-1-2-def-1',
      type: 'definition',
      title: 'Verbet "être" (å være)',
      content: `je suis - jeg er
tu es - du er
il/elle est - han/hun er
nous sommes - vi er
vous êtes - dere er / De er
ils/elles sont - de er`,
    },
    {
      id: 'fransk-1-1-2-def-2',
      type: 'definition',
      title: 'Verbet "avoir" (å ha)',
      content: `j'ai - jeg har
tu as - du har
il/elle a - han/hun har
nous avons - vi har
vous avez - dere har / De har
ils/elles ont - de har`,
    },
    {
      id: 'fransk-1-1-2-tip-1',
      type: 'tip',
      content: `På fransk sier man "J'ai quinze ans" (Jeg har femten år) for å si alderen, ikke "Jeg er femten år".`,
    },
  ],
  exercises: [
    {
      id: 'fransk-1-1-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvordan sier du "Jeg heter Erik" på fransk?',
      options: [
        { id: 'a', text: 'Je suis Erik', isCorrect: false, feedback: '"Je suis" betyr "Jeg er".' },
        { id: 'b', text: 'Je m\'appelle Erik', isCorrect: true },
        { id: 'c', text: 'Je viens Erik', isCorrect: false, feedback: '"Je viens" betyr "Jeg kommer".' },
        { id: 'd', text: 'J\'ai Erik', isCorrect: false, feedback: '"J\'ai" betyr "Jeg har".' },
      ],
      solution: '"Je m\'appelle Erik" betyr "Jeg heter Erik".',
    },
    {
      id: 'fransk-1-1-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "Tu viens d\'où?"',
      options: [
        { id: 'a', text: 'Hvor gammel er du?', isCorrect: false, feedback: 'Det er "Tu as quel âge?"' },
        { id: 'b', text: 'Hvor bor du?', isCorrect: false, feedback: 'Det er "Tu habites où?"' },
        { id: 'c', text: 'Hvor kommer du fra?', isCorrect: true },
        { id: 'd', text: 'Hva heter du?', isCorrect: false, feedback: 'Det er "Comment tu t\'appelles?"' },
      ],
      solution: '"Tu viens d\'où?" betyr "Hvor kommer du fra?"',
    },
    {
      id: 'fransk-1-1-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken form av "être" brukes med "je"?',
      options: [
        { id: 'a', text: 'est', isCorrect: false, feedback: '"Est" brukes med il/elle.' },
        { id: 'b', text: 'es', isCorrect: false, feedback: '"Es" brukes med "tu".' },
        { id: 'c', text: 'suis', isCorrect: true },
        { id: 'd', text: 'sont', isCorrect: false, feedback: '"Sont" brukes med ils/elles.' },
      ],
      solution: 'Med "je" bruker vi "suis": "Je suis" (Jeg er).',
    },
    {
      id: 'fransk-1-1-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan sier du "Jeg er 16 år" på fransk?',
      options: [
        { id: 'a', text: 'Je suis seize ans', isCorrect: false, feedback: 'På fransk bruker man "avoir" for alder.' },
        { id: 'b', text: 'J\'ai seize ans', isCorrect: true },
        { id: 'c', text: 'Je seize ans', isCorrect: false, feedback: 'Det mangler et verb.' },
        { id: 'd', text: 'J\'est seize ans', isCorrect: false, feedback: 'Feil verb og form.' },
      ],
      solution: 'På fransk bruker man "avoir" (å ha) for alder: "J\'ai seize ans".',
    },
  ],
};

// ============================================================================
// Kapittel 2.1: Les nombres - Tallene
// ============================================================================

export const CHAPTER_FRANSK_1_2_1: TextbookChapter = {
  id: 'fransk-1-2-1',
  courseId: 'fransk-1',
  chapterNumber: '2.1',
  title: 'Les nombres - Tallene',
  description: 'Lær tallene 0-100 på fransk.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke tall i kommunikasjon',
  ],
  content: [
    {
      id: 'fransk-1-2-1-intro',
      type: 'text',
      content: `Å kunne tallene er viktig for å snakke om alder, priser, telefonnummer og mye mer.`,
    },
    {
      id: 'fransk-1-2-1-text-1',
      type: 'text',
      content: `**Tallene 0-12**

| Tall | Fransk |
|------|--------|
| 0 | zéro |
| 1 | un |
| 2 | deux |
| 3 | trois |
| 4 | quatre |
| 5 | cinq |
| 6 | six |
| 7 | sept |
| 8 | huit |
| 9 | neuf |
| 10 | dix |
| 11 | onze |
| 12 | douze |`,
    },
    {
      id: 'fransk-1-2-1-text-2',
      type: 'text',
      content: `**Tallene 13-19**

| Tall | Fransk |
|------|--------|
| 13 | treize |
| 14 | quatorze |
| 15 | quinze |
| 16 | seize |
| 17 | dix-sept |
| 18 | dix-huit |
| 19 | dix-neuf |`,
    },
    {
      id: 'fransk-1-2-1-text-3',
      type: 'text',
      content: `**Tierne 20-100**

| Tall | Fransk |
|------|--------|
| 20 | vingt |
| 30 | trente |
| 40 | quarante |
| 50 | cinquante |
| 60 | soixante |
| 70 | soixante-dix |
| 80 | quatre-vingts |
| 90 | quatre-vingt-dix |
| 100 | cent |`,
    },
    {
      id: 'fransk-1-2-1-note-1',
      type: 'note',
      content: `70 er "soixante-dix" (60+10), 80 er "quatre-vingts" (4×20), og 90 er "quatre-vingt-dix" (4×20+10). Dette er spesielt for fransk!`,
    },
    {
      id: 'fransk-1-2-1-example-1',
      type: 'example',
      content: `**Sammensatte tall:**
- 21 = vingt et un
- 22 = vingt-deux
- 71 = soixante et onze
- 81 = quatre-vingt-un
- 91 = quatre-vingt-onze`,
    },
    {
      id: 'fransk-1-2-1-tip-1',
      type: 'tip',
      content: `"Et" (og) brukes bare med 21, 31, 41, 51, 61, 71. Ellers brukes bindestrek: vingt-deux, vingt-trois...`,
    },
  ],
  exercises: [
    {
      id: 'fransk-1-2-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er "sept" på norsk?',
      options: [
        { id: 'a', text: 'Seks', isCorrect: false, feedback: '"Seks" er "six".' },
        { id: 'b', text: 'Syv', isCorrect: true },
        { id: 'c', text: 'Åtte', isCorrect: false, feedback: '"Åtte" er "huit".' },
        { id: 'd', text: 'Ni', isCorrect: false, feedback: '"Ni" er "neuf".' },
      ],
      solution: '"Sept" betyr "syv" på norsk.',
    },
    {
      id: 'fransk-1-2-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvordan sier du 15 på fransk?',
      options: [
        { id: 'a', text: 'Cinquante', isCorrect: false, feedback: '"Cinquante" er 50.' },
        { id: 'b', text: 'Quinze', isCorrect: true },
        { id: 'c', text: 'Cinq', isCorrect: false, feedback: '"Cinq" er 5.' },
        { id: 'd', text: 'Quatorze', isCorrect: false, feedback: '"Quatorze" er 14.' },
      ],
      solution: '15 på fransk er "quinze".',
    },
    {
      id: 'fransk-1-2-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan sier du 70 på fransk?',
      options: [
        { id: 'a', text: 'Septante', isCorrect: false, feedback: '"Septante" brukes i Belgia og Sveits.' },
        { id: 'b', text: 'Soixante-dix', isCorrect: true },
        { id: 'c', text: 'Soixante', isCorrect: false, feedback: '"Soixante" er 60.' },
        { id: 'd', text: 'Sept-dix', isCorrect: false, feedback: 'Det er ikke riktig form.' },
      ],
      solution: '70 på fransk er "soixante-dix" (60+10).',
    },
    {
      id: 'fransk-1-2-1-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "quatre-vingts"?',
      options: [
        { id: 'a', text: '40', isCorrect: false, feedback: '40 er "quarante".' },
        { id: 'b', text: '80', isCorrect: true },
        { id: 'c', text: '84', isCorrect: false, feedback: '84 er "quatre-vingt-quatre".' },
        { id: 'd', text: '24', isCorrect: false, feedback: '24 er "vingt-quatre".' },
      ],
      solution: '"Quatre-vingts" = 4×20 = 80.',
    },
  ],
};

// ============================================================================
// Kapittel 2.2: Les couleurs - Fargene
// ============================================================================

export const CHAPTER_FRANSK_1_2_2: TextbookChapter = {
  id: 'fransk-1-2-2',
  courseId: 'fransk-1',
  chapterNumber: '2.2',
  title: 'Les couleurs - Fargene',
  description: 'Lær fargene og hvordan de bøyes.',
  estimatedMinutes: 35,
  competenceGoals: [
    'beskrive ting med farger',
  ],
  content: [
    {
      id: 'fransk-1-2-2-intro',
      type: 'text',
      content: `Fargene er nyttige for å beskrive ting og gjenstander på fransk.`,
    },
    {
      id: 'fransk-1-2-2-text-1',
      type: 'text',
      content: `**Grunnleggende farger**

| Fransk | Norsk |
|--------|-------|
| rouge | rød |
| bleu(e) | blå |
| jaune | gul |
| vert(e) | grønn |
| blanc(he) | hvit |
| noir(e) | svart |
| brun(e) / marron | brun |
| orange | oransje |
| rose | rosa |
| violet(te) | lilla |
| gris(e) | grå |`,
    },
    {
      id: 'fransk-1-2-2-def-1',
      type: 'definition',
      title: 'Farger bøyes etter kjønn',
      content: `De fleste farger bøyes etter substantivets kjønn:
- un livre **bleu** (en blå bok - hankjønn)
- une voiture **bleue** (en blå bil - hunkjønn)

Farger som slutter på -e endres ikke: rouge, jaune, rose, orange`,
    },
    {
      id: 'fransk-1-2-2-example-1',
      type: 'example',
      content: `**Bruk av farger:**
- La maison est blanche. *(Huset er hvitt.)*
- Le ciel est bleu. *(Himmelen er blå.)*
- La fleur est jaune. *(Blomsten er gul.)*`,
    },
    {
      id: 'fransk-1-2-2-note-1',
      type: 'note',
      content: `"Marron" (brun) og "orange" er uforanderlige - de endres aldri: des chaussures marron, des fleurs orange.`,
    },
  ],
  exercises: [
    {
      id: 'fransk-1-2-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "vert" på norsk?',
      options: [
        { id: 'a', text: 'Grå', isCorrect: false, feedback: '"Grå" er "gris".' },
        { id: 'b', text: 'Grønn', isCorrect: true },
        { id: 'c', text: 'Gul', isCorrect: false, feedback: '"Gul" er "jaune".' },
        { id: 'd', text: 'Brun', isCorrect: false, feedback: '"Brun" er "brun" eller "marron".' },
      ],
      solution: '"Vert" betyr "grønn" på norsk.',
    },
    {
      id: 'fransk-1-2-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvordan sier du "hvit" på fransk?',
      options: [
        { id: 'a', text: 'Vite', isCorrect: false, feedback: '"Vite" betyr "raskt".' },
        { id: 'b', text: 'Blanc', isCorrect: true },
        { id: 'c', text: 'Bleu', isCorrect: false, feedback: '"Bleu" betyr "blå".' },
        { id: 'd', text: 'Brun', isCorrect: false, feedback: '"Brun" betyr "brun".' },
      ],
      solution: '"Hvit" på fransk er "blanc" (hankjønn) eller "blanche" (hunkjønn).',
    },
    {
      id: 'fransk-1-2-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan sier du "en blå bil" på fransk? (bil = voiture, hunkjønn)',
      options: [
        { id: 'a', text: 'Une voiture bleu', isCorrect: false, feedback: 'Fargen må bøyes til hunkjønn.' },
        { id: 'b', text: 'Une voiture bleue', isCorrect: true },
        { id: 'c', text: 'Un voiture bleu', isCorrect: false, feedback: '"Voiture" er hunkjønn.' },
        { id: 'd', text: 'Une bleue voiture', isCorrect: false, feedback: 'Fargen kommer etter substantivet.' },
      ],
      solution: '"Une voiture bleue" - fargen "bleu" får -e i hunkjønn.',
    },
    {
      id: 'fransk-1-2-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken farge endres IKKE etter kjønn?',
      options: [
        { id: 'a', text: 'Bleu', isCorrect: false, feedback: '"Bleu" blir "bleue" i hunkjønn.' },
        { id: 'b', text: 'Vert', isCorrect: false, feedback: '"Vert" blir "verte" i hunkjønn.' },
        { id: 'c', text: 'Jaune', isCorrect: true },
        { id: 'd', text: 'Blanc', isCorrect: false, feedback: '"Blanc" blir "blanche" i hunkjønn.' },
      ],
      solution: '"Jaune" slutter allerede på -e og endres derfor ikke.',
    },
  ],
};

// ============================================================================
// Kapittel 3.1: La famille - Familien
// ============================================================================

export const CHAPTER_FRANSK_1_3_1: TextbookChapter = {
  id: 'fransk-1-3-1',
  courseId: 'fransk-1',
  chapterNumber: '3.1',
  title: 'La famille - Familien',
  description: 'Lær ord for familiemedlemmer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'fortelle om familien sin',
  ],
  content: [
    {
      id: 'fransk-1-3-1-intro',
      type: 'text',
      content: `Familie er et viktig tema i alle språk. La oss lære ordene for familiemedlemmer på fransk!`,
    },
    {
      id: 'fransk-1-3-1-text-1',
      type: 'text',
      content: `**Nær familie**

| Fransk | Norsk |
|--------|-------|
| la mère | moren |
| le père | faren |
| les parents | foreldrene |
| la sœur | søsteren |
| le frère | broren |
| les frères et sœurs | søsknene |`,
    },
    {
      id: 'fransk-1-3-1-text-2',
      type: 'text',
      content: `**Besteforeldre og barnebarn**

| Fransk | Norsk |
|--------|-------|
| la grand-mère | bestemoren |
| le grand-père | bestefaren |
| les grands-parents | besteforeldrene |
| le petit-fils | barnebarnet (gutt) |
| la petite-fille | barnebarnet (jente) |`,
    },
    {
      id: 'fransk-1-3-1-text-3',
      type: 'text',
      content: `**Utvidet familie**

| Fransk | Norsk |
|--------|-------|
| la tante | tanten |
| l'oncle | onkelen |
| la cousine | kusinen |
| le cousin | fetteren |`,
    },
    {
      id: 'fransk-1-3-1-def-1',
      type: 'definition',
      title: 'Eiendomsord',
      content: `mon/ma/mes - min/mi/mine
ton/ta/tes - din/di/dine
son/sa/ses - hans/hennes/sin

Eksempel: mon frère (min bror), ma sœur (min søster), mes parents (mine foreldre)`,
    },
    {
      id: 'fransk-1-3-1-example-1',
      type: 'example',
      content: `**Eksempel:**
Ma famille est grande. J'ai deux sœurs et un frère.
*(Familien min er stor. Jeg har to søstre og en bror.)*`,
    },
    {
      id: 'fransk-1-3-1-note-1',
      type: 'note',
      content: `Foran hunkjønnsord som begynner med vokal bruker man "mon" i stedet for "ma": mon amie (min venninne).`,
    },
  ],
  exercises: [
    {
      id: 'fransk-1-3-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "la mère" på norsk?',
      options: [
        { id: 'a', text: 'Faren', isCorrect: false, feedback: '"Faren" er "le père".' },
        { id: 'b', text: 'Moren', isCorrect: true },
        { id: 'c', text: 'Søsteren', isCorrect: false, feedback: '"Søsteren" er "la sœur".' },
        { id: 'd', text: 'Broren', isCorrect: false, feedback: '"Broren" er "le frère".' },
      ],
      solution: '"La mère" betyr "moren" på norsk.',
    },
    {
      id: 'fransk-1-3-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvordan sier du "bestefar" på fransk?',
      options: [
        { id: 'a', text: 'La grand-mère', isCorrect: false, feedback: 'Det betyr "bestemor".' },
        { id: 'b', text: 'Le grand-père', isCorrect: true },
        { id: 'c', text: 'Les grands-parents', isCorrect: false, feedback: 'Det betyr "besteforeldrene".' },
        { id: 'd', text: 'Le petit-fils', isCorrect: false, feedback: 'Det betyr "barnebarnet (gutt)".' },
      ],
      solution: '"Bestefar" på fransk er "le grand-père".',
    },
    {
      id: 'fransk-1-3-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "J\'ai une sœur"?',
      options: [
        { id: 'a', text: 'Jeg har en bror', isCorrect: false, feedback: '"Bror" er "frère".' },
        { id: 'b', text: 'Jeg har en søster', isCorrect: true },
        { id: 'c', text: 'Jeg har en kusine', isCorrect: false, feedback: '"Kusine" er "cousine".' },
        { id: 'd', text: 'Jeg har en tante', isCorrect: false, feedback: '"Tante" er "tante".' },
      ],
      solution: '"J\'ai une sœur" betyr "Jeg har en søster".',
    },
    {
      id: 'fransk-1-3-1-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket eiendomsord brukes med "frère" (hankjønn)?',
      options: [
        { id: 'a', text: 'ma', isCorrect: false, feedback: '"Ma" brukes med hunkjønnsord.' },
        { id: 'b', text: 'mes', isCorrect: false, feedback: '"Mes" brukes med flertall.' },
        { id: 'c', text: 'mon', isCorrect: true },
        { id: 'd', text: 'sa', isCorrect: false, feedback: '"Sa" er tredjeperson hunkjønn.' },
      ],
      solution: '"Mon" brukes med hankjønnsord: "mon frère" (min bror).',
    },
  ],
};

// ============================================================================
// Kapittel 3.2: Décrire les personnes - Beskrive personer
// ============================================================================

export const CHAPTER_FRANSK_1_3_2: TextbookChapter = {
  id: 'fransk-1-3-2',
  courseId: 'fransk-1',
  chapterNumber: '3.2',
  title: 'Décrire les personnes - Beskrive personer',
  description: 'Lær å beskrive utseende og personlighet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive mennesker',
  ],
  content: [
    {
      id: 'fransk-1-3-2-intro',
      type: 'text',
      content: `Lær å beskrive hvordan personer ser ut og hvordan de er.`,
    },
    {
      id: 'fransk-1-3-2-text-1',
      type: 'text',
      content: `**Utseende - Hår**

| Fransk | Norsk |
|--------|-------|
| les cheveux longs | langt hår |
| les cheveux courts | kort hår |
| les cheveux blonds | blondt hår |
| les cheveux bruns | brunt hår |
| les cheveux noirs | svart hår |
| les cheveux roux | rødt hår |
| les cheveux bouclés | krøllete hår |
| les cheveux raides | glatt hår |`,
    },
    {
      id: 'fransk-1-3-2-text-2',
      type: 'text',
      content: `**Utseende - Øyne og kropp**

| Fransk | Norsk |
|--------|-------|
| les yeux bleus | blå øyne |
| les yeux marron | brune øyne |
| les yeux verts | grønne øyne |
| grand(e) | høy/stor |
| petit(e) | liten/lav |
| mince | slank |`,
    },
    {
      id: 'fransk-1-3-2-example-1',
      type: 'example',
      content: `**Eksempel:**
Mon frère est grand et il a les cheveux courts et bruns. Il a les yeux bleus.
*(Broren min er høy og har kort, brunt hår. Han har blå øyne.)*`,
    },
    {
      id: 'fransk-1-3-2-text-3',
      type: 'text',
      content: `**Personlighet**

| Fransk | Norsk |
|--------|-------|
| gentil(le) | snill |
| sympa(thique) | hyggelig |
| drôle | morsom |
| sérieux/-euse | seriøs |
| intelligent(e) | intelligent |
| travailleur/-euse | flittig |
| paresseux/-euse | lat |
| timide | sjenert |
| courageux/-euse | modig |`,
    },
    {
      id: 'fransk-1-3-2-tip-1',
      type: 'tip',
      content: `Bruk "très" (veldig) for å forsterke adjektiver: très grand (veldig høy), très sympa (veldig hyggelig).`,
    },
  ],
  exercises: [
    {
      id: 'fransk-1-3-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "les cheveux blonds"?',
      options: [
        { id: 'a', text: 'Brunt hår', isCorrect: false, feedback: '"Brunt hår" er "les cheveux bruns".' },
        { id: 'b', text: 'Blondt hår', isCorrect: true },
        { id: 'c', text: 'Svart hår', isCorrect: false, feedback: '"Svart hår" er "les cheveux noirs".' },
        { id: 'd', text: 'Rødt hår', isCorrect: false, feedback: '"Rødt hår" er "les cheveux roux".' },
      ],
      solution: '"Les cheveux blonds" betyr "blondt hår".',
    },
    {
      id: 'fransk-1-3-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "sympa"?',
      options: [
        { id: 'a', text: 'Morsom', isCorrect: false, feedback: '"Morsom" er "drôle".' },
        { id: 'b', text: 'Seriøs', isCorrect: false, feedback: '"Seriøs" er "sérieux".' },
        { id: 'c', text: 'Hyggelig', isCorrect: true },
        { id: 'd', text: 'Sjenert', isCorrect: false, feedback: '"Sjenert" er "timide".' },
      ],
      solution: '"Sympa" (forkortelse for sympathique) betyr "hyggelig".',
    },
    {
      id: 'fransk-1-3-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan sier du "Hun er høy" på fransk?',
      options: [
        { id: 'a', text: 'Elle est petit', isCorrect: false, feedback: 'Det betyr "Hun er liten" og mangler hunkjønnsform.' },
        { id: 'b', text: 'Elle est grande', isCorrect: true },
        { id: 'c', text: 'Il est grand', isCorrect: false, feedback: '"Il" er hankjønn (han).' },
        { id: 'd', text: 'Elle a grande', isCorrect: false, feedback: 'Feil verb - bruk "est" ikke "a".' },
      ],
      solution: '"Elle est grande" betyr "Hun er høy".',
    },
    {
      id: 'fransk-1-3-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "Il a les yeux verts"?',
      options: [
        { id: 'a', text: 'Han har blå øyne', isCorrect: false, feedback: '"Blå øyne" er "les yeux bleus".' },
        { id: 'b', text: 'Han har brune øyne', isCorrect: false, feedback: '"Brune øyne" er "les yeux marron".' },
        { id: 'c', text: 'Han har grønne øyne', isCorrect: true },
        { id: 'd', text: 'Hun har grønne øyne', isCorrect: false, feedback: '"Hun" er "elle", ikke "il".' },
      ],
      solution: '"Il a les yeux verts" betyr "Han har grønne øyne".',
    },
  ],
};

// ============================================================================
// Kapittel 4.1: L'heure et les jours - Tid og dager
// ============================================================================

export const CHAPTER_FRANSK_1_4_1: TextbookChapter = {
  id: 'fransk-1-4-1',
  courseId: 'fransk-1',
  chapterNumber: '4.1',
  title: 'L\'heure et les jours - Tid og dager',
  description: 'Lær å si klokken og ukedagene.',
  estimatedMinutes: 45,
  competenceGoals: [
    'uttrykke tid og dato',
  ],
  content: [
    {
      id: 'fransk-1-4-1-intro',
      type: 'text',
      content: `Å kunne snakke om tid er viktig i dagliglivet. La oss lære klokken, ukedager og måneder!`,
    },
    {
      id: 'fransk-1-4-1-text-1',
      type: 'text',
      content: `**Spørre om klokken**

| Fransk | Norsk |
|--------|-------|
| Quelle heure est-il? | Hva er klokken? |
| Il est quelle heure? | Hva er klokken? (uformelt) |
| À quelle heure? | Når? / Klokken hva? |`,
    },
    {
      id: 'fransk-1-4-1-def-1',
      type: 'definition',
      title: 'Si klokken',
      content: `Il est une heure - Klokken er ett
Il est deux heures - Klokken er to
Il est midi - Klokken er tolv (midt på dagen)
Il est minuit - Klokken er tolv (midnatt)
Il est trois heures et demie - Klokken er halv fire (3:30)
Il est quatre heures et quart - Klokken er kvart over fire
Il est cinq heures moins le quart - Klokken er kvart på fem`,
    },
    {
      id: 'fransk-1-4-1-note-1',
      type: 'note',
      content: `På fransk er "et demie" (halv) ETTER timen: "trois heures et demie" = 3:30, ikke 2:30!`,
    },
    {
      id: 'fransk-1-4-1-text-2',
      type: 'text',
      content: `**Ukedagene**

| Fransk | Norsk |
|--------|-------|
| lundi | mandag |
| mardi | tirsdag |
| mercredi | onsdag |
| jeudi | torsdag |
| vendredi | fredag |
| samedi | lørdag |
| dimanche | søndag |`,
    },
    {
      id: 'fransk-1-4-1-text-3',
      type: 'text',
      content: `**Månedene**

janvier, février, mars, avril, mai, juin, juillet, août, septembre, octobre, novembre, décembre`,
    },
    {
      id: 'fransk-1-4-1-example-1',
      type: 'example',
      content: `**Eksempel:**
- Le cours est lundi à dix heures. *(Kurset er på mandag klokken ti.)*
- Mon anniversaire est en mai. *(Bursdagen min er i mai.)*`,
    },
  ],
  exercises: [
    {
      id: 'fransk-1-4-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "mercredi"?',
      options: [
        { id: 'a', text: 'Mandag', isCorrect: false, feedback: '"Mandag" er "lundi".' },
        { id: 'b', text: 'Tirsdag', isCorrect: false, feedback: '"Tirsdag" er "mardi".' },
        { id: 'c', text: 'Onsdag', isCorrect: true },
        { id: 'd', text: 'Torsdag', isCorrect: false, feedback: '"Torsdag" er "jeudi".' },
      ],
      solution: '"Mercredi" betyr "onsdag".',
    },
    {
      id: 'fransk-1-4-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "Il est trois heures et demie"?',
      options: [
        { id: 'a', text: 'Klokken er 2:30', isCorrect: false, feedback: 'På fransk er "demie" ETTER timen.' },
        { id: 'b', text: 'Klokken er 3:30', isCorrect: true },
        { id: 'c', text: 'Klokken er 3:00', isCorrect: false, feedback: 'Det ville vært "Il est trois heures".' },
        { id: 'd', text: 'Klokken er 3:15', isCorrect: false, feedback: 'Det ville vært "trois heures et quart".' },
      ],
      solution: '"Trois heures et demie" betyr 3:30 på fransk.',
    },
    {
      id: 'fransk-1-4-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvordan spør du "Hva er klokken?" på fransk?',
      options: [
        { id: 'a', text: 'Où est l\'heure?', isCorrect: false, feedback: '"Où" betyr "hvor".' },
        { id: 'b', text: 'Quelle heure est-il?', isCorrect: true },
        { id: 'c', text: 'Quand est l\'heure?', isCorrect: false, feedback: '"Quand" betyr "når".' },
        { id: 'd', text: 'Comment est l\'heure?', isCorrect: false, feedback: '"Comment" betyr "hvordan".' },
      ],
      solution: '"Quelle heure est-il?" betyr "Hva er klokken?"',
    },
    {
      id: 'fransk-1-4-1-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "moins le quart"?',
      options: [
        { id: 'a', text: 'Kvart over', isCorrect: false, feedback: '"Kvart over" er "et quart".' },
        { id: 'b', text: 'Kvart på', isCorrect: true },
        { id: 'c', text: 'Halv', isCorrect: false, feedback: '"Halv" er "et demie".' },
        { id: 'd', text: 'Hel', isCorrect: false, feedback: 'Det er bare "heures".' },
      ],
      solution: '"Moins le quart" betyr "kvart på" (minus et kvarter).',
    },
  ],
};

// ============================================================================
// Kapittel 4.2: Les activités - Aktiviteter
// ============================================================================

export const CHAPTER_FRANSK_1_4_2: TextbookChapter = {
  id: 'fransk-1-4-2',
  courseId: 'fransk-1',
  chapterNumber: '4.2',
  title: 'Les activités - Aktiviteter',
  description: 'Lær om daglige aktiviteter og hobbyer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'fortelle om aktiviteter og interesser',
  ],
  content: [
    {
      id: 'fransk-1-4-2-intro',
      type: 'text',
      content: `Lær ord for aktiviteter og hobbyer, og hvordan du snakker om hva du gjør.`,
    },
    {
      id: 'fransk-1-4-2-text-1',
      type: 'text',
      content: `**Vanlige aktiviteter**

| Fransk | Norsk |
|--------|-------|
| jouer | spille/leke |
| lire | lese |
| écrire | skrive |
| écouter | høre/lytte |
| regarder | se på |
| apprendre | lære |
| travailler | arbeide |
| dormir | sove |`,
    },
    {
      id: 'fransk-1-4-2-text-2',
      type: 'text',
      content: `**Sport og hobbyer**

| Fransk | Norsk |
|--------|-------|
| jouer au football | spille fotball |
| jouer au tennis | spille tennis |
| nager | svømme |
| courir | løpe |
| danser | danse |
| chanter | synge |
| cuisiner | lage mat |
| dessiner | tegne |`,
    },
    {
      id: 'fransk-1-4-2-def-1',
      type: 'definition',
      title: 'Verb som slutter på -er (1. gruppe)',
      content: `De fleste verb følger dette mønsteret med "jouer" (spille):
je joue - jeg spiller
tu joues - du spiller
il/elle joue - han/hun spiller
nous jouons - vi spiller
vous jouez - dere spiller
ils/elles jouent - de spiller`,
    },
    {
      id: 'fransk-1-4-2-tip-1',
      type: 'tip',
      content: `Bruk "aimer" + infinitiv for å si at du liker å gjøre noe: "J'aime nager" (Jeg liker å svømme).`,
    },
    {
      id: 'fransk-1-4-2-text-3',
      type: 'text',
      content: `**Tidsuttrykk**

| Fransk | Norsk |
|--------|-------|
| aujourd'hui | i dag |
| demain | i morgen |
| hier | i går |
| le matin | om morgenen |
| le soir | om kvelden |
| le week-end | i helgen |`,
    },
    {
      id: 'fransk-1-4-2-example-1',
      type: 'example',
      content: `**Eksempel:**
- J'aime jouer au football. *(Jeg liker å spille fotball.)*
- Le week-end, je lis des livres. *(I helgen leser jeg bøker.)*`,
    },
  ],
  exercises: [
    {
      id: 'fransk-1-4-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "nager"?',
      options: [
        { id: 'a', text: 'Løpe', isCorrect: false, feedback: '"Løpe" er "courir".' },
        { id: 'b', text: 'Svømme', isCorrect: true },
        { id: 'c', text: 'Danse', isCorrect: false, feedback: '"Danse" er "danser".' },
        { id: 'd', text: 'Sove', isCorrect: false, feedback: '"Sove" er "dormir".' },
      ],
      solution: '"Nager" betyr "svømme".',
    },
    {
      id: 'fransk-1-4-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan sier du "Jeg spiller fotball" på fransk?',
      options: [
        { id: 'a', text: 'Je jouer au football', isCorrect: false, feedback: 'Verbet må bøyes: "joue".' },
        { id: 'b', text: 'Je joue football', isCorrect: false, feedback: 'Det mangler "au" foran football.' },
        { id: 'c', text: 'Je joue au football', isCorrect: true },
        { id: 'd', text: 'Je joues au football', isCorrect: false, feedback: '"Joues" brukes med "tu".' },
      ],
      solution: 'Med "je" bruker vi "joue": "Je joue au football".',
    },
    {
      id: 'fransk-1-4-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "J\'aime lire des livres"?',
      options: [
        { id: 'a', text: 'Jeg leser bøker nå', isCorrect: false, feedback: 'Det ville vært "Je lis des livres".' },
        { id: 'b', text: 'Jeg liker å lese bøker', isCorrect: true },
        { id: 'c', text: 'Jeg har lest bøker', isCorrect: false, feedback: 'Det er ikke fortid.' },
        { id: 'd', text: 'Jeg må lese bøker', isCorrect: false, feedback: '"Må" ville vært "dois".' },
      ],
      solution: '"J\'aime" betyr "jeg liker". "J\'aime lire" = Jeg liker å lese.',
    },
    {
      id: 'fransk-1-4-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "le week-end"?',
      options: [
        { id: 'a', text: 'I morgen', isCorrect: false, feedback: '"I morgen" er "demain".' },
        { id: 'b', text: 'I går', isCorrect: false, feedback: '"I går" er "hier".' },
        { id: 'c', text: 'I helgen', isCorrect: true },
        { id: 'd', text: 'Om kvelden', isCorrect: false, feedback: '"Om kvelden" er "le soir".' },
      ],
      solution: '"Le week-end" betyr "i helgen".',
    },
  ],
};

// ============================================================================
// Kapittel 5.1: La nourriture et les boissons - Mat og drikke
// ============================================================================

export const CHAPTER_FRANSK_1_5_1: TextbookChapter = {
  id: 'fransk-1-5-1',
  courseId: 'fransk-1',
  chapterNumber: '5.1',
  title: 'La nourriture et les boissons - Mat og drikke',
  description: 'Lær ord for mat, drikke og måltider.',
  estimatedMinutes: 45,
  competenceGoals: [
    'uttrykke hva du liker å spise',
  ],
  content: [
    {
      id: 'fransk-1-5-1-intro',
      type: 'text',
      content: `Mat og drikke er et viktig tema - spesielt i Frankrike! La oss lære ordene for måltider og vanlige matvarer.`,
    },
    {
      id: 'fransk-1-5-1-text-1',
      type: 'text',
      content: `**Måltider**

| Fransk | Norsk |
|--------|-------|
| le petit-déjeuner | frokosten |
| le déjeuner | lunsjen |
| le dîner | middagen |
| le goûter | mellommåltidet |`,
    },
    {
      id: 'fransk-1-5-1-text-2',
      type: 'text',
      content: `**Mat**

| Fransk | Norsk |
|--------|-------|
| le pain | brødet |
| le croissant | croissanten |
| le fromage | osten |
| la viande | kjøttet |
| l'œuf / les œufs | egget / eggene |
| le poulet | kyllingen |
| le poisson | fisken |
| les légumes | grønnsakene |
| les fruits | fruktene |`,
    },
    {
      id: 'fransk-1-5-1-text-3',
      type: 'text',
      content: `**Drikke**

| Fransk | Norsk |
|--------|-------|
| l'eau | vannet |
| le jus | juicen |
| le lait | melken |
| le café | kaffen |
| le thé | teen |
| la limonade | brusen |`,
    },
    {
      id: 'fransk-1-5-1-def-1',
      type: 'definition',
      title: 'Verbet "aimer" (å like)',
      content: `j'aime - jeg liker
tu aimes - du liker
il/elle aime - han/hun liker
nous aimons - vi liker
vous aimez - dere liker
ils/elles aiment - de liker`,
    },
    {
      id: 'fransk-1-5-1-example-1',
      type: 'example',
      content: `**Eksempel:**
- J'aime le fromage. *(Jeg liker ost.)*
- Au petit-déjeuner, je mange du pain. *(Til frokost spiser jeg brød.)*
- J'aime boire du café. *(Jeg liker å drikke kaffe.)*`,
    },
    {
      id: 'fransk-1-5-1-tip-1',
      type: 'tip',
      content: `Bruk "manger" (spise) og "boire" (drikke): Je mange du pain. Je bois de l'eau.`,
    },
  ],
  exercises: [
    {
      id: 'fransk-1-5-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "le petit-déjeuner"?',
      options: [
        { id: 'a', text: 'Lunsjen', isCorrect: false, feedback: '"Lunsjen" er "le déjeuner".' },
        { id: 'b', text: 'Frokosten', isCorrect: true },
        { id: 'c', text: 'Middagen', isCorrect: false, feedback: '"Middagen" er "le dîner".' },
        { id: 'd', text: 'Mellommåltidet', isCorrect: false, feedback: '"Mellommåltidet" er "le goûter".' },
      ],
      solution: '"Le petit-déjeuner" betyr "frokosten".',
    },
    {
      id: 'fransk-1-5-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvordan sier du "melk" på fransk?',
      options: [
        { id: 'a', text: 'Le lait', isCorrect: true },
        { id: 'b', text: 'L\'eau', isCorrect: false, feedback: '"L\'eau" betyr "vann".' },
        { id: 'c', text: 'Le jus', isCorrect: false, feedback: '"Le jus" betyr "juice".' },
        { id: 'd', text: 'Le café', isCorrect: false, feedback: '"Le café" betyr "kaffe".' },
      ],
      solution: '"Melk" på fransk er "le lait".',
    },
    {
      id: 'fransk-1-5-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "J\'aime les fruits"?',
      options: [
        { id: 'a', text: 'Jeg spiser frukt', isCorrect: false, feedback: '"Spiser" er "mange".' },
        { id: 'b', text: 'Jeg liker frukt', isCorrect: true },
        { id: 'c', text: 'Jeg kjøper frukt', isCorrect: false, feedback: '"Kjøper" er "achète".' },
        { id: 'd', text: 'Jeg har frukt', isCorrect: false, feedback: '"Har" er "ai".' },
      ],
      solution: '"J\'aime" betyr "jeg liker". "J\'aime les fruits" = Jeg liker frukt.',
    },
    {
      id: 'fransk-1-5-1-ex-4',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "Je bois de l\'eau"?',
      options: [
        { id: 'a', text: 'Jeg liker vann', isCorrect: false, feedback: '"Liker" er "aime".' },
        { id: 'b', text: 'Jeg har vann', isCorrect: false, feedback: '"Har" er "ai".' },
        { id: 'c', text: 'Jeg drikker vann', isCorrect: true },
        { id: 'd', text: 'Jeg vil ha vann', isCorrect: false, feedback: '"Vil ha" er "veux".' },
      ],
      solution: '"Boire" betyr "å drikke". "Je bois de l\'eau" = Jeg drikker vann.',
    },
  ],
};

// ============================================================================
// Kapittel 5.2: Au restaurant - På restauranten
// ============================================================================

export const CHAPTER_FRANSK_1_5_2: TextbookChapter = {
  id: 'fransk-1-5-2',
  courseId: 'fransk-1',
  chapterNumber: '5.2',
  title: 'Au restaurant - På restauranten',
  description: 'Lær å bestille mat og snakke på restaurant.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kommunisere i enkle hverdagssituasjoner',
  ],
  content: [
    {
      id: 'fransk-1-5-2-intro',
      type: 'text',
      content: `Frankrike er berømt for sin matkultur! Å kunne bestille mat på restaurant er en praktisk ferdighet.`,
    },
    {
      id: 'fransk-1-5-2-text-1',
      type: 'text',
      content: `**Nyttige fraser for bestilling**

| Fransk | Norsk |
|--------|-------|
| Je voudrais... | Jeg vil gjerne ha... |
| Je vais prendre... | Jeg tar... |
| Est-ce que je peux avoir...? | Kan jeg få...? |
| La carte, s'il vous plaît | Menyen, takk |
| L'addition, s'il vous plaît | Regningen, takk |`,
    },
    {
      id: 'fransk-1-5-2-example-1',
      type: 'example',
      content: `**Eksempel på bestilling:**
Serveur: Vous avez choisi?
*(Har De valgt?)*

Client: Oui, je voudrais une pizza et un verre d'eau, s'il vous plaît.
*(Ja, jeg vil gjerne ha en pizza og et glass vann, takk.)*`,
    },
    {
      id: 'fransk-1-5-2-text-2',
      type: 'text',
      content: `**Spørsmål fra servitøren**

| Fransk | Norsk |
|--------|-------|
| Vous avez choisi? | Har De valgt? |
| Qu'est-ce que vous prenez? | Hva tar De? |
| Vous désirez boire quelque chose? | Ønsker De noe å drikke? |
| Ça vous a plu? | Likte De det? |`,
    },
    {
      id: 'fransk-1-5-2-text-3',
      type: 'text',
      content: `**Svar og uttrykk**

| Fransk | Norsk |
|--------|-------|
| Oui, c'était très bon! | Ja, det var veldig godt! |
| C'était délicieux | Det var deilig |
| L'addition, s'il vous plaît | Regningen, takk |
| Gardez la monnaie | Behold vekslepengene (tips) |`,
    },
    {
      id: 'fransk-1-5-2-note-1',
      type: 'note',
      content: `I Frankrike er tips vanligvis inkludert i prisen (service compris), men det er vanlig å runde opp eller gi litt ekstra for god service.`,
    },
    {
      id: 'fransk-1-5-2-tip-1',
      type: 'tip',
      content: `Bruk "Je voudrais" (jeg vil gjerne ha) for høflige bestillinger. Det er høfligere enn bare "Je veux" (jeg vil).`,
    },
  ],
  exercises: [
    {
      id: 'fransk-1-5-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvordan ber du høflig om menyen?',
      options: [
        { id: 'a', text: 'Donne-moi la carte!', isCorrect: false, feedback: 'Det er uhøflig og kommanderende.' },
        { id: 'b', text: 'La carte, s\'il vous plaît', isCorrect: true },
        { id: 'c', text: 'Où est la carte?', isCorrect: false, feedback: 'Det betyr "Hvor er menyen?"' },
        { id: 'd', text: 'Je veux la carte', isCorrect: false, feedback: '"Je veux" er mindre høflig.' },
      ],
      solution: '"La carte, s\'il vous plaît" er en høflig måte å be om menyen.',
    },
    {
      id: 'fransk-1-5-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "L\'addition, s\'il vous plaît"?',
      options: [
        { id: 'a', text: 'Menyen, takk', isCorrect: false, feedback: '"Menyen" er "la carte".' },
        { id: 'b', text: 'Regningen, takk', isCorrect: true },
        { id: 'c', text: 'Vannet, takk', isCorrect: false, feedback: '"Vannet" er "l\'eau".' },
        { id: 'd', text: 'Maten, takk', isCorrect: false, feedback: '"Maten" er "la nourriture".' },
      ],
      solution: '"L\'addition, s\'il vous plaît" betyr "Regningen, takk".',
    },
    {
      id: 'fransk-1-5-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan sier du "Jeg vil gjerne ha en kaffe"?',
      options: [
        { id: 'a', text: 'Je veux un café', isCorrect: false, feedback: '"Je veux" er mindre høflig.' },
        { id: 'b', text: 'Je voudrais un café', isCorrect: true },
        { id: 'c', text: 'J\'ai un café', isCorrect: false, feedback: 'Det betyr "Jeg har en kaffe".' },
        { id: 'd', text: 'Je suis un café', isCorrect: false, feedback: 'Feil - "Je suis" betyr "Jeg er".' },
      ],
      solution: '"Je voudrais un café" er den høflige måten å bestille på.',
    },
    {
      id: 'fransk-1-5-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "Ça vous a plu?"',
      options: [
        { id: 'a', text: 'Hva vil du ha?', isCorrect: false, feedback: 'Det er "Qu\'est-ce que vous voulez?"' },
        { id: 'b', text: 'Er du ferdig?', isCorrect: false, feedback: 'Det er "Vous avez fini?"' },
        { id: 'c', text: 'Likte De det?', isCorrect: true },
        { id: 'd', text: 'Vil du ha mer?', isCorrect: false, feedback: 'Det er "Vous en voulez encore?"' },
      ],
      solution: '"Ça vous a plu?" betyr "Likte De det?" og spørres ofte av servitøren.',
    },
  ],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const FRANSK_1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_FRANSK_1_1_1,
  CHAPTER_FRANSK_1_1_2,
  CHAPTER_FRANSK_1_2_1,
  CHAPTER_FRANSK_1_2_2,
  CHAPTER_FRANSK_1_3_1,
  CHAPTER_FRANSK_1_3_2,
  CHAPTER_FRANSK_1_4_1,
  CHAPTER_FRANSK_1_4_2,
  CHAPTER_FRANSK_1_5_1,
  CHAPTER_FRANSK_1_5_2,
];
