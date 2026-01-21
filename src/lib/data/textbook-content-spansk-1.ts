/**
 * Spansk nivå 1 - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for fremmedspråk nivå 1
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Hola - Hilsener og presentasjon
// ============================================================================

export const CHAPTER_SPANSK_1_1_1: TextbookChapter = {
  id: 'spansk-1-1-1',
  courseId: 'spansk-1',
  chapterNumber: '1.1',
  title: '¡Hola! - Hilsener',
  description: 'Lær grunnleggende hilsener og høflighetsfraser på spansk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke enkle hilsener og høflighetsuttrykk',
  ],
  content: [
    {
      id: 'spansk-1-1-1-intro',
      type: 'text',
      content: `Spansk er verdens nest mest talte morsmål og snakkes av over 500 millioner mennesker. La oss starte med de viktigste hilsenene!`,
    },
    {
      id: 'spansk-1-1-1-text-1',
      type: 'text',
      content: `**Hilsener (Saludos)**

| Spansk | Norsk |
|--------|-------|
| ¡Hola! | Hei! |
| Buenos días | God morgen/dag |
| Buenas tardes | God ettermiddag |
| Buenas noches | God kveld/natt |
| ¿Qué tal? | Hvordan går det? |
| ¿Cómo estás? | Hvordan har du det? (uformelt) |
| ¿Cómo está usted? | Hvordan har De det? (formelt) |`,
    },
    {
      id: 'spansk-1-1-1-text-2',
      type: 'text',
      content: `**Svar på hilsener**

| Spansk | Norsk |
|--------|-------|
| Muy bien, gracias | Veldig bra, takk |
| Bien, gracias | Bra, takk |
| Regular | Sånn passe |
| Mal | Dårlig |
| ¿Y tú? | Og du? (uformelt) |
| ¿Y usted? | Og De? (formelt) |`,
    },
    {
      id: 'spansk-1-1-1-def-1',
      type: 'definition',
      title: 'Tú vs. Usted',
      content: `På spansk skiller man mellom uformell (tú) og formell (usted) tiltale. Bruk "tú" med venner og jevnaldrende, og "usted" med voksne du ikke kjenner godt, lærere osv.`,
    },
    {
      id: 'spansk-1-1-1-text-3',
      type: 'text',
      content: `**Avskjed (Despedidas)**

| Spansk | Norsk |
|--------|-------|
| Adiós | Ha det |
| Hasta luego | Vi sees |
| Hasta mañana | Vi sees i morgen |
| Hasta pronto | Vi sees snart |
| Chao | Ha det (uformelt) |`,
    },
  ],
  exercises: [
    {
      id: 'spansk-1-1-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "¡Hola!"?',
      options: [
        { id: 'a', text: 'Ha det', isCorrect: false, feedback: '"Ha det" er "Adiós".' },
        { id: 'b', text: 'Hei', isCorrect: true },
        { id: 'c', text: 'Takk', isCorrect: false, feedback: '"Takk" er "Gracias".' },
        { id: 'd', text: 'Vær så god', isCorrect: false, feedback: '"Vær så god" er "De nada".' },
      ],
      solution: '¡Hola! betyr "Hei!" og er den vanligste hilsenen på spansk.',
    },
    {
      id: 'spansk-1-1-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan sier du "God morgen" på spansk?',
      options: [
        { id: 'a', text: 'Buenas noches', isCorrect: false, feedback: 'Det betyr "God kveld/natt".' },
        { id: 'b', text: 'Buenos días', isCorrect: true },
        { id: 'c', text: 'Buenas tardes', isCorrect: false, feedback: 'Det betyr "God ettermiddag".' },
        { id: 'd', text: 'Hasta luego', isCorrect: false, feedback: 'Det betyr "Vi sees".' },
      ],
      solution: '"Buenos días" betyr "God morgen" eller "God dag".',
    },
    {
      id: 'spansk-1-1-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Når bruker du "usted" i stedet for "tú"?',
      options: [
        { id: 'a', text: 'Med venner', isCorrect: false, feedback: 'Med venner bruker du "tú".' },
        { id: 'b', text: 'Med voksne du ikke kjenner godt', isCorrect: true },
        { id: 'c', text: 'Med søsken', isCorrect: false, feedback: 'Med søsken bruker du "tú".' },
        { id: 'd', text: 'Med kjæledyr', isCorrect: false, feedback: 'Med kjæledyr bruker du "tú".' },
      ],
      solution: '"Usted" er formell tiltale som brukes med voksne du ikke kjenner godt, lærere, eldre osv.',
    },
    {
      id: 'spansk-1-1-1-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva svarer du på "¿Cómo estás?"',
      options: [
        { id: 'a', text: 'Adiós', isCorrect: false, feedback: 'Det er en avskjedshilsen.' },
        { id: 'b', text: 'Muy bien, gracias', isCorrect: true },
        { id: 'c', text: 'Buenos días', isCorrect: false, feedback: 'Det er en hilsen, ikke et svar.' },
        { id: 'd', text: 'Hasta luego', isCorrect: false, feedback: 'Det er en avskjedshilsen.' },
      ],
      solution: 'På "¿Cómo estás?" (Hvordan har du det?) svarer du f.eks. "Muy bien, gracias" (Veldig bra, takk).',
    },
  ],
};

export const CHAPTER_SPANSK_1_1_2: TextbookChapter = {
  id: 'spansk-1-1-2',
  courseId: 'spansk-1',
  chapterNumber: '1.2',
  title: 'Me llamo... - Presentere seg',
  description: 'Lær å presentere deg selv og spørre om navn.',
  estimatedMinutes: 45,
  competenceGoals: [
    'presentere seg selv og andre',
  ],
  content: [
    {
      id: 'spansk-1-1-2-intro',
      type: 'text',
      content: `Å kunne presentere seg er grunnleggende i ethvert språk. La oss lære å si hvem vi er og hvor vi kommer fra!`,
    },
    {
      id: 'spansk-1-1-2-text-1',
      type: 'text',
      content: `**Presentere seg (Presentarse)**

| Spansk | Norsk |
|--------|-------|
| Me llamo... | Jeg heter... |
| Soy... | Jeg er... |
| ¿Cómo te llamas? | Hva heter du? (uformelt) |
| ¿Cómo se llama usted? | Hva heter De? (formelt) |
| Mucho gusto | Hyggelig å møte deg |
| Encantado/a | Fornøyd (å møte deg) |`,
    },
    {
      id: 'spansk-1-1-2-text-2',
      type: 'text',
      content: `**Hvor kommer du fra? (¿De dónde eres?)**

| Spansk | Norsk |
|--------|-------|
| ¿De dónde eres? | Hvor kommer du fra? |
| Soy de Noruega | Jeg er fra Norge |
| Soy noruego/a | Jeg er norsk |
| Vivo en Oslo | Jeg bor i Oslo |

**Land og nasjonaliteter:**
- España - español/española (Spania - spansk)
- México - mexicano/a (Mexico - meksikansk)
- Argentina - argentino/a (Argentina - argentinsk)`,
    },
    {
      id: 'spansk-1-1-2-def-1',
      type: 'definition',
      title: 'Kjønn i spansk',
      content: `Spanske adjektiver endres etter kjønn. Menn sier "noruego", kvinner sier "noruega". Endelsen -o er hankjønn, -a er hunkjønn.`,
    },
    {
      id: 'spansk-1-1-2-example-1',
      type: 'example',
      title: 'En samtale',
      content: `- ¡Hola! ¿Cómo te llamas?
- Me llamo María. ¿Y tú?
- Me llamo Pedro. ¿De dónde eres?
- Soy de España. ¿Y tú?
- Soy de Noruega. Mucho gusto.
- Encantada.`,
    },
  ],
  exercises: [
    {
      id: 'spansk-1-1-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvordan sier du "Jeg heter Anna"?',
      options: [
        { id: 'a', text: 'Soy Anna', isCorrect: false, feedback: '"Soy" betyr "Jeg er".' },
        { id: 'b', text: 'Me llamo Anna', isCorrect: true },
        { id: 'c', text: 'Tengo Anna', isCorrect: false, feedback: '"Tengo" betyr "Jeg har".' },
        { id: 'd', text: 'Hola Anna', isCorrect: false, feedback: '"Hola" betyr bare "Hei".' },
      ],
      solution: '"Me llamo Anna" betyr "Jeg heter Anna". "Llamo" kommer fra verbet "llamarse" (å hete).',
    },
    {
      id: 'spansk-1-1-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan spør du "Hvor kommer du fra?" på spansk?',
      options: [
        { id: 'a', text: '¿Cómo te llamas?', isCorrect: false, feedback: 'Det betyr "Hva heter du?".' },
        { id: 'b', text: '¿De dónde eres?', isCorrect: true },
        { id: 'c', text: '¿Qué tal?', isCorrect: false, feedback: 'Det betyr "Hvordan går det?".' },
        { id: 'd', text: '¿Cuántos años tienes?', isCorrect: false, feedback: 'Det betyr "Hvor gammel er du?".' },
      ],
      solution: '"¿De dónde eres?" betyr "Hvor kommer du fra?"',
    },
    {
      id: 'spansk-1-1-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'En norsk gutt sier at han er norsk. Hva sier han?',
      options: [
        { id: 'a', text: 'Soy noruega', isCorrect: false, feedback: 'Det er hunkjønnsformen.' },
        { id: 'b', text: 'Soy noruego', isCorrect: true },
        { id: 'c', text: 'Soy Noruega', isCorrect: false, feedback: '"Noruega" er landet Norge.' },
        { id: 'd', text: 'Soy de noruego', isCorrect: false, feedback: 'Setningen er grammatisk feil.' },
      ],
      solution: 'En gutt sier "Soy noruego" (-o for hankjønn). En jente sier "Soy noruega" (-a for hunkjønn).',
    },
    {
      id: 'spansk-1-1-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva betyr "Mucho gusto"?',
      options: [
        { id: 'a', text: 'Ha det bra', isCorrect: false, feedback: 'Det betyr "Adiós".' },
        { id: 'b', text: 'Hyggelig å møte deg', isCorrect: true },
        { id: 'c', text: 'God appetitt', isCorrect: false, feedback: 'Det er "Buen provecho".' },
        { id: 'd', text: 'Tusen takk', isCorrect: false, feedback: 'Det er "Muchas gracias".' },
      ],
      solution: '"Mucho gusto" betyr bokstavelig "mye glede" og brukes som "Hyggelig å møte deg".',
    },
  ],
};

// ============================================================================
// Kapittel 2: Los números y colores - Tall og farger
// ============================================================================

export const CHAPTER_SPANSK_1_2_1: TextbookChapter = {
  id: 'spansk-1-2-1',
  courseId: 'spansk-1',
  chapterNumber: '2.1',
  title: 'Los números - Tallene',
  description: 'Lær å telle og bruke tall på spansk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke tall i daglige situasjoner',
  ],
  content: [
    {
      id: 'spansk-1-2-1-intro',
      type: 'text',
      content: `Tall er viktige i dagliglivet - for å handle, si alder, oppgi telefonnummer og mye mer. La oss lære de spanske tallene!`,
    },
    {
      id: 'spansk-1-2-1-text-1',
      type: 'text',
      content: `**Tallene 0-15**

| Tall | Spansk | Tall | Spansk |
|------|--------|------|--------|
| 0 | cero | 8 | ocho |
| 1 | uno | 9 | nueve |
| 2 | dos | 10 | diez |
| 3 | tres | 11 | once |
| 4 | cuatro | 12 | doce |
| 5 | cinco | 13 | trece |
| 6 | seis | 14 | catorce |
| 7 | siete | 15 | quince |`,
    },
    {
      id: 'spansk-1-2-1-text-2',
      type: 'text',
      content: `**Tallene 16-30**

| Tall | Spansk | Tall | Spansk |
|------|--------|------|--------|
| 16 | dieciséis | 21 | veintiuno |
| 17 | diecisiete | 22 | veintidós |
| 18 | dieciocho | 23 | veintitrés |
| 19 | diecinueve | 24 | veinticuatro |
| 20 | veinte | 30 | treinta |

**Fra 31 og oppover:**
31 = treinta y uno, 32 = treinta y dos osv.`,
    },
    {
      id: 'spansk-1-2-1-text-3',
      type: 'text',
      content: `**Tierene og hundre**

| Tall | Spansk |
|------|--------|
| 40 | cuarenta |
| 50 | cincuenta |
| 60 | sesenta |
| 70 | setenta |
| 80 | ochenta |
| 90 | noventa |
| 100 | cien/ciento |

Eksempel: 47 = cuarenta y siete, 83 = ochenta y tres`,
    },
    {
      id: 'spansk-1-2-1-tip-1',
      type: 'tip',
      title: 'Uno blir un',
      content: `Foran hankjønnsord forkortes "uno" til "un": un libro (en bok), veintiún años (21 år).`,
    },
  ],
  exercises: [
    {
      id: 'spansk-1-2-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er "siete" på norsk?',
      options: [
        { id: 'a', text: '6', isCorrect: false, feedback: '6 er "seis".' },
        { id: 'b', text: '7', isCorrect: true },
        { id: 'c', text: '8', isCorrect: false, feedback: '8 er "ocho".' },
        { id: 'd', text: '9', isCorrect: false, feedback: '9 er "nueve".' },
      ],
      solution: '"Siete" betyr 7.',
    },
    {
      id: 'spansk-1-2-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan sier du 15 på spansk?',
      options: [
        { id: 'a', text: 'Catorce', isCorrect: false, feedback: 'Det er 14.' },
        { id: 'b', text: 'Quince', isCorrect: true },
        { id: 'c', text: 'Dieciséis', isCorrect: false, feedback: 'Det er 16.' },
        { id: 'd', text: 'Cinco', isCorrect: false, feedback: 'Det er 5.' },
      ],
      solution: '15 på spansk er "quince".',
    },
    {
      id: 'spansk-1-2-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan sier du 25 på spansk?',
      options: [
        { id: 'a', text: 'Veinte y cinco', isCorrect: false, feedback: 'For 21-29 skrives det i ett ord.' },
        { id: 'b', text: 'Veinticinco', isCorrect: true },
        { id: 'c', text: 'Veinte cinco', isCorrect: false, feedback: 'Det mangler "y" eller skal skrives i ett.' },
        { id: 'd', text: 'Vinticinco', isCorrect: false, feedback: 'Stavemåten er feil.' },
      ],
      solution: '25 er "veinticinco" - skrevet i ett ord for tallene 21-29.',
    },
    {
      id: 'spansk-1-2-1-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvordan sier du 47 på spansk?',
      options: [
        { id: 'a', text: 'Cuatro siete', isCorrect: false, feedback: 'Det er ikke riktig måte å si tosifrede tall.' },
        { id: 'b', text: 'Cuarenta y siete', isCorrect: true },
        { id: 'c', text: 'Cuarentaisiete', isCorrect: false, feedback: 'Fra 31 skrives det med "y" mellom.' },
        { id: 'd', text: 'Cuarenta siete', isCorrect: false, feedback: 'Det mangler "y" mellom.' },
      ],
      solution: '47 er "cuarenta y siete" - tier + y + ener.',
    },
  ],
};

export const CHAPTER_SPANSK_1_2_2: TextbookChapter = {
  id: 'spansk-1-2-2',
  courseId: 'spansk-1',
  chapterNumber: '2.2',
  title: 'Los colores - Fargene',
  description: 'Lær fargene og hvordan de brukes på spansk.',
  estimatedMinutes: 40,
  competenceGoals: [
    'beskrive ting med farger',
  ],
  content: [
    {
      id: 'spansk-1-2-2-intro',
      type: 'text',
      content: `Farger brukes til å beskrive alt rundt oss. På spansk må farger ofte bøyes etter kjønn og tall på substantivet de beskriver.`,
    },
    {
      id: 'spansk-1-2-2-text-1',
      type: 'text',
      content: `**Fargene (Los colores)**

| Spansk | Norsk |
|--------|-------|
| rojo/a | rød |
| azul | blå |
| amarillo/a | gul |
| verde | grønn |
| naranja | oransje |
| negro/a | svart |
| blanco/a | hvit |
| marrón | brun |
| rosa | rosa |
| morado/a | lilla |
| gris | grå |`,
    },
    {
      id: 'spansk-1-2-2-def-1',
      type: 'definition',
      title: 'Fargers bøyning',
      content: `Farger som ender på -o bøyes: rojo/roja, blanco/blanca. Farger som ender på -e eller konsonant bøyes ikke i kjønn: verde, azul, gris.`,
    },
    {
      id: 'spansk-1-2-2-text-2',
      type: 'text',
      content: `**Eksempler**

- El coche **rojo** (Den røde bilen - hankjønn)
- La casa **roja** (Det røde huset - hunkjønn)
- El libro **verde** (Den grønne boken)
- La puerta **azul** (Den blå døren)

**Flertall:**
- Los coches rojos (De røde bilene)
- Las casas rojas (De røde husene)`,
    },
    {
      id: 'spansk-1-2-2-tip-1',
      type: 'tip',
      title: '¿De qué color es?',
      content: `For å spørre om farge: "¿De qué color es?" (Hvilken farge er det?). Svar: "Es rojo" (Det er rødt).`,
    },
  ],
  exercises: [
    {
      id: 'spansk-1-2-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "azul"?',
      options: [
        { id: 'a', text: 'Rød', isCorrect: false, feedback: 'Rød er "rojo".' },
        { id: 'b', text: 'Blå', isCorrect: true },
        { id: 'c', text: 'Grønn', isCorrect: false, feedback: 'Grønn er "verde".' },
        { id: 'd', text: 'Gul', isCorrect: false, feedback: 'Gul er "amarillo".' },
      ],
      solution: '"Azul" betyr blå.',
    },
    {
      id: 'spansk-1-2-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan sier du "den hvite boken" (la = hunkjønn)?',
      options: [
        { id: 'a', text: 'El libro blanco', isCorrect: false, feedback: '"El libro" er hankjønn.' },
        { id: 'b', text: 'La libro blanca', isCorrect: false, feedback: '"Libro" er hankjønn, bruker "el".' },
        { id: 'c', text: 'La puerta blanca', isCorrect: true },
        { id: 'd', text: 'La puerta blanco', isCorrect: false, feedback: 'Fargen må være hunkjønn: "blanca".' },
      ],
      solution: '"La puerta blanca" - hunkjønnssubstantiv tar hunkjønnsform av adjektivet.',
    },
    {
      id: 'spansk-1-2-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken farge bøyes IKKE etter kjønn?',
      options: [
        { id: 'a', text: 'Rojo', isCorrect: false, feedback: 'Rojo blir roja i hunkjønn.' },
        { id: 'b', text: 'Verde', isCorrect: true },
        { id: 'c', text: 'Blanco', isCorrect: false, feedback: 'Blanco blir blanca i hunkjønn.' },
        { id: 'd', text: 'Amarillo', isCorrect: false, feedback: 'Amarillo blir amarilla i hunkjønn.' },
      ],
      solution: '"Verde" (grønn) ender på -e og bøyes ikke i kjønn. Det heter "verde" for både hankjønn og hunkjønn.',
    },
    {
      id: 'spansk-1-2-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvordan spør du "Hvilken farge er det?"',
      options: [
        { id: 'a', text: '¿Qué es color?', isCorrect: false, feedback: 'Ordstillingen er feil.' },
        { id: 'b', text: '¿De qué color es?', isCorrect: true },
        { id: 'c', text: '¿Cómo color es?', isCorrect: false, feedback: '"Cómo" betyr "hvordan".' },
        { id: 'd', text: '¿Cuál color?', isCorrect: false, feedback: 'Setningen er ufullstendig.' },
      ],
      solution: '"¿De qué color es?" betyr "Hvilken farge er det?" - bokstavelig "Av hvilken farge er det?"',
    },
  ],
};

// ============================================================================
// Kapittel 3: La familia - Familien
// ============================================================================

export const CHAPTER_SPANSK_1_3_1: TextbookChapter = {
  id: 'spansk-1-3-1',
  courseId: 'spansk-1',
  chapterNumber: '3.1',
  title: 'La familia - Familien',
  description: 'Lær ord for familiemedlemmer på spansk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'fortelle om familie og venner',
  ],
  content: [
    {
      id: 'spansk-1-3-1-intro',
      type: 'text',
      content: `Familie er viktig i spansktalende kulturer. La oss lære ordene for familiemedlemmer!`,
    },
    {
      id: 'spansk-1-3-1-text-1',
      type: 'text',
      content: `**Nærmeste familie**

| Spansk | Norsk |
|--------|-------|
| la madre | moren |
| el padre | faren |
| los padres | foreldrene |
| la hermana | søsteren |
| el hermano | broren |
| los hermanos | søsknene |
| la hija | datteren |
| el hijo | sønnen |
| los hijos | barna |`,
    },
    {
      id: 'spansk-1-3-1-text-2',
      type: 'text',
      content: `**Utvidet familie**

| Spansk | Norsk |
|--------|-------|
| la abuela | bestemoren |
| el abuelo | bestefaren |
| los abuelos | besteforeldrene |
| la tía | tanten |
| el tío | onkelen |
| la prima | kusinen (jente) |
| el primo | fetteren (gutt) |
| la sobrina | niesen |
| el sobrino | nevøen |`,
    },
    {
      id: 'spansk-1-3-1-def-1',
      type: 'definition',
      title: 'Eiendomsord',
      content: `"Mi" betyr "min/mitt", "tu" betyr "din/ditt", "su" betyr "hans/hennes/deres". Eksempel: mi madre (moren min), tu hermano (broren din).`,
    },
    {
      id: 'spansk-1-3-1-example-1',
      type: 'example',
      title: 'Beskrive familien',
      content: `Mi familia es grande. Tengo una hermana y dos hermanos. Mi madre se llama María y mi padre se llama José. Mis abuelos viven en Madrid.

(Familien min er stor. Jeg har en søster og to brødre. Moren min heter María og faren min heter José. Besteforeldrene mine bor i Madrid.)`,
    },
  ],
  exercises: [
    {
      id: 'spansk-1-3-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "la madre"?',
      options: [
        { id: 'a', text: 'Faren', isCorrect: false, feedback: 'Faren er "el padre".' },
        { id: 'b', text: 'Moren', isCorrect: true },
        { id: 'c', text: 'Søsteren', isCorrect: false, feedback: 'Søsteren er "la hermana".' },
        { id: 'd', text: 'Broren', isCorrect: false, feedback: 'Broren er "el hermano".' },
      ],
      solution: '"La madre" betyr moren.',
    },
    {
      id: 'spansk-1-3-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan sier du "broren min"?',
      options: [
        { id: 'a', text: 'Tu hermano', isCorrect: false, feedback: 'Det betyr "broren din".' },
        { id: 'b', text: 'Mi hermano', isCorrect: true },
        { id: 'c', text: 'Su hermano', isCorrect: false, feedback: 'Det betyr "hans/hennes bror".' },
        { id: 'd', text: 'El hermano', isCorrect: false, feedback: 'Det betyr bare "broren".' },
      ],
      solution: '"Mi hermano" betyr "broren min". "Mi" = min/mitt.',
    },
    {
      id: 'spansk-1-3-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "los abuelos"?',
      options: [
        { id: 'a', text: 'Foreldrene', isCorrect: false, feedback: 'Foreldrene er "los padres".' },
        { id: 'b', text: 'Besteforeldrene', isCorrect: true },
        { id: 'c', text: 'Søsknene', isCorrect: false, feedback: 'Søsknene er "los hermanos".' },
        { id: 'd', text: 'Barna', isCorrect: false, feedback: 'Barna er "los hijos".' },
      ],
      solution: '"Los abuelos" betyr besteforeldrene (bestefar + bestemor).',
    },
    {
      id: 'spansk-1-3-1-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er forskjellen på "el primo" og "la prima"?',
      options: [
        { id: 'a', text: 'De betyr det samme', isCorrect: false, feedback: 'De har ulikt kjønn.' },
        { id: 'b', text: 'Primo er fetter, prima er kusine', isCorrect: true },
        { id: 'c', text: 'Primo er nevø, prima er niese', isCorrect: false, feedback: 'Nevø er "sobrino", niese er "sobrina".' },
        { id: 'd', text: 'Primo er bror, prima er søster', isCorrect: false, feedback: 'Bror er "hermano", søster er "hermana".' },
      ],
      solution: '"El primo" er fetter (gutt), "la prima" er kusine (jente).',
    },
  ],
};

export const CHAPTER_SPANSK_1_3_2: TextbookChapter = {
  id: 'spansk-1-3-2',
  courseId: 'spansk-1',
  chapterNumber: '3.2',
  title: 'Describir personas - Beskrive personer',
  description: 'Lær å beskrive utseende og personlighet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive personer og seg selv',
  ],
  content: [
    {
      id: 'spansk-1-3-2-intro',
      type: 'text',
      content: `For å beskrive mennesker trenger vi adjektiver for utseende og personlighet. Husk at adjektiver må bøyes etter kjønn!`,
    },
    {
      id: 'spansk-1-3-2-text-1',
      type: 'text',
      content: `**Utseende (El aspecto físico)**

| Spansk | Norsk |
|--------|-------|
| alto/a | høy |
| bajo/a | lav |
| delgado/a | tynn |
| gordo/a | tykk |
| guapo/a | pen/kjekk |
| feo/a | stygg |
| joven | ung |
| viejo/a | gammel |`,
    },
    {
      id: 'spansk-1-3-2-text-2',
      type: 'text',
      content: `**Hår og øyne**

| Spansk | Norsk |
|--------|-------|
| el pelo rubio | blondt hår |
| el pelo moreno | mørkt hår |
| el pelo castaño | brunt hår |
| el pelo pelirrojo | rødt hår |
| el pelo largo | langt hår |
| el pelo corto | kort hår |
| los ojos azules | blå øyne |
| los ojos verdes | grønne øyne |
| los ojos marrones | brune øyne |`,
    },
    {
      id: 'spansk-1-3-2-text-3',
      type: 'text',
      content: `**Personlighet (La personalidad)**

| Spansk | Norsk |
|--------|-------|
| simpático/a | hyggelig |
| antipático/a | uhyggelig |
| inteligente | intelligent |
| divertido/a | morsom |
| aburrido/a | kjedelig |
| tímido/a | sjenert |
| extrovertido/a | utadvendt |
| amable | snill |`,
    },
    {
      id: 'spansk-1-3-2-example-1',
      type: 'example',
      title: 'Beskrive noen',
      content: `Mi hermana es alta y delgada. Tiene el pelo largo y rubio. Tiene los ojos azules. Es muy simpática y divertida.

(Søsteren min er høy og tynn. Hun har langt og blondt hår. Hun har blå øyne. Hun er veldig hyggelig og morsom.)`,
    },
  ],
  exercises: [
    {
      id: 'spansk-1-3-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "alto"?',
      options: [
        { id: 'a', text: 'Lav', isCorrect: false, feedback: 'Lav er "bajo".' },
        { id: 'b', text: 'Høy', isCorrect: true },
        { id: 'c', text: 'Tynn', isCorrect: false, feedback: 'Tynn er "delgado".' },
        { id: 'd', text: 'Ung', isCorrect: false, feedback: 'Ung er "joven".' },
      ],
      solution: '"Alto" betyr høy.',
    },
    {
      id: 'spansk-1-3-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan sier du "brunt hår"?',
      options: [
        { id: 'a', text: 'El pelo rubio', isCorrect: false, feedback: 'Det er blondt hår.' },
        { id: 'b', text: 'El pelo castaño', isCorrect: true },
        { id: 'c', text: 'El pelo moreno', isCorrect: false, feedback: 'Det er mørkt hår (svart).' },
        { id: 'd', text: 'El pelo pelirrojo', isCorrect: false, feedback: 'Det er rødt hår.' },
      ],
      solution: '"El pelo castaño" betyr brunt hår. "Castaño" kommer fra "castaña" (kastanje).',
    },
    {
      id: 'spansk-1-3-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'En jente er hyggelig. Hva sier du?',
      options: [
        { id: 'a', text: 'Es simpático', isCorrect: false, feedback: 'Det er hankjønnsformen.' },
        { id: 'b', text: 'Es simpática', isCorrect: true },
        { id: 'c', text: 'Es inteligente', isCorrect: false, feedback: 'Det betyr intelligent.' },
        { id: 'd', text: 'Es divertido', isCorrect: false, feedback: 'Det er hankjønn og betyr morsom.' },
      ],
      solution: 'For en jente bruker vi hunkjønnsformen: "Es simpática".',
    },
    {
      id: 'spansk-1-3-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvordan sier du "Hun har blå øyne"?',
      options: [
        { id: 'a', text: 'Tiene ojos azul', isCorrect: false, feedback: 'Adjektivet må være i flertall.' },
        { id: 'b', text: 'Tiene los ojos azules', isCorrect: true },
        { id: 'c', text: 'Es ojos azules', isCorrect: false, feedback: 'Vi bruker "tiene" (har), ikke "es" (er).' },
        { id: 'd', text: 'Tiene el ojo azul', isCorrect: false, feedback: 'Vi har to øyne, så flertall.' },
      ],
      solution: '"Tiene los ojos azules" - "tiene" betyr "har", "los ojos" er øynene i flertall, "azules" er flertall av "azul".',
    },
  ],
};

// ============================================================================
// Kapittel 4: El tiempo y las actividades - Tid og aktiviteter
// ============================================================================

export const CHAPTER_SPANSK_1_4_1: TextbookChapter = {
  id: 'spansk-1-4-1',
  courseId: 'spansk-1',
  chapterNumber: '4.1',
  title: 'La hora y los días - Tid og dager',
  description: 'Lær å si hva klokken er og ukedagene.',
  estimatedMinutes: 50,
  competenceGoals: [
    'uttrykke tid og snakke om daglige rutiner',
  ],
  content: [
    {
      id: 'spansk-1-4-1-intro',
      type: 'text',
      content: `Å kunne si hva klokken er og bruke ukedagene er viktig for å planlegge og snakke om hverdagen.`,
    },
    {
      id: 'spansk-1-4-1-text-1',
      type: 'text',
      content: `**Klokkeslett (La hora)**

| Spansk | Norsk |
|--------|-------|
| ¿Qué hora es? | Hva er klokken? |
| Es la una | Klokken er ett |
| Son las dos | Klokken er to |
| Son las tres | Klokken er tre |
| ... y media | ... halv |
| ... y cuarto | ... kvart over |
| ... menos cuarto | ... kvart på |

**Eksempler:**
- Son las cuatro y media = Klokken er halv fem
- Son las seis y cuarto = Klokken er kvart over seks
- Son las ocho menos cuarto = Klokken er kvart på åtte`,
    },
    {
      id: 'spansk-1-4-1-def-1',
      type: 'definition',
      title: 'Es la vs. Son las',
      content: `"Es la" brukes bare for klokken ett (entall). "Son las" brukes for alle andre klokkeslett (flertall).`,
    },
    {
      id: 'spansk-1-4-1-text-2',
      type: 'text',
      content: `**Ukedagene (Los días de la semana)**

| Spansk | Norsk |
|--------|-------|
| lunes | mandag |
| martes | tirsdag |
| miércoles | onsdag |
| jueves | torsdag |
| viernes | fredag |
| sábado | lørdag |
| domingo | søndag |

**Merk:** Ukedagene skrives med liten forbokstav på spansk!`,
    },
    {
      id: 'spansk-1-4-1-tip-1',
      type: 'tip',
      title: 'Uken starter på mandag',
      content: `I spansktalende land starter uken på mandag, ikke søndag som i noen andre kulturer.`,
    },
  ],
  exercises: [
    {
      id: 'spansk-1-4-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvordan spør du "Hva er klokken?"',
      options: [
        { id: 'a', text: '¿Cómo es la hora?', isCorrect: false, feedback: 'Det er ikke riktig uttrykksmåte.' },
        { id: 'b', text: '¿Qué hora es?', isCorrect: true },
        { id: 'c', text: '¿Cuánto es la hora?', isCorrect: false, feedback: '"Cuánto" brukes om pris.' },
        { id: 'd', text: '¿Dónde es la hora?', isCorrect: false, feedback: '"Dónde" betyr hvor.' },
      ],
      solution: '"¿Qué hora es?" er den vanlige måten å spørre om klokkeslettet.',
    },
    {
      id: 'spansk-1-4-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan sier du "Klokken er tre"?',
      options: [
        { id: 'a', text: 'Es las tres', isCorrect: false, feedback: '"Es" brukes bare for klokken ett.' },
        { id: 'b', text: 'Son las tres', isCorrect: true },
        { id: 'c', text: 'Es la tres', isCorrect: false, feedback: '"Es la" brukes bare for klokken ett.' },
        { id: 'd', text: 'Son la tres', isCorrect: false, feedback: 'Det må være "las tres" i flertall.' },
      ],
      solution: '"Son las tres" - vi bruker "son" (flertall) for alle klokkeslett unntatt ett.',
    },
    {
      id: 'spansk-1-4-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "miércoles"?',
      options: [
        { id: 'a', text: 'Mandag', isCorrect: false, feedback: 'Mandag er "lunes".' },
        { id: 'b', text: 'Tirsdag', isCorrect: false, feedback: 'Tirsdag er "martes".' },
        { id: 'c', text: 'Onsdag', isCorrect: true },
        { id: 'd', text: 'Torsdag', isCorrect: false, feedback: 'Torsdag er "jueves".' },
      ],
      solution: '"Miércoles" betyr onsdag.',
    },
    {
      id: 'spansk-1-4-1-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva betyr "Son las cinco y media"?',
      options: [
        { id: 'a', text: 'Klokken er fem', isCorrect: false, feedback: 'Det mangler "y media".' },
        { id: 'b', text: 'Klokken er halv fem', isCorrect: false, feedback: 'Halv fem ville være "las cuatro y media".' },
        { id: 'c', text: 'Klokken er halv seks', isCorrect: true },
        { id: 'd', text: 'Klokken er kvart over fem', isCorrect: false, feedback: 'Det ville være "y cuarto".' },
      ],
      solution: '"Son las cinco y media" = klokken er 5:30 (halv seks på norsk). "Y media" betyr "og en halv".',
    },
  ],
};

export const CHAPTER_SPANSK_1_4_2: TextbookChapter = {
  id: 'spansk-1-4-2',
  courseId: 'spansk-1',
  chapterNumber: '4.2',
  title: 'Las actividades - Aktiviteter',
  description: 'Lær vanlige verb og aktiviteter.',
  estimatedMinutes: 50,
  competenceGoals: [
    'snakke om fritidsaktiviteter og hobbyer',
  ],
  content: [
    {
      id: 'spansk-1-4-2-intro',
      type: 'text',
      content: `For å snakke om hva vi gjør, trenger vi verb. Spanske verb bøyes etter person, og de fleste følger faste mønstre.`,
    },
    {
      id: 'spansk-1-4-2-text-1',
      type: 'text',
      content: `**Vanlige aktiviteter**

| Spansk | Norsk |
|--------|-------|
| hablar | å snakke |
| comer | å spise |
| beber | å drikke |
| leer | å lese |
| escribir | å skrive |
| escuchar música | å høre på musikk |
| ver la televisión | å se på TV |
| jugar al fútbol | å spille fotball |
| estudiar | å studere |
| trabajar | å jobbe |`,
    },
    {
      id: 'spansk-1-4-2-text-2',
      type: 'text',
      content: `**Bøying av verb på -ar (hablar)**

| Person | Bøyning |
|--------|---------|
| yo | hablo (jeg snakker) |
| tú | hablas (du snakker) |
| él/ella/usted | habla (han/hun snakker) |
| nosotros | hablamos (vi snakker) |
| ellos/ellas/ustedes | hablan (de snakker) |

**Samme mønster for:** estudiar, trabajar, escuchar, jugar*`,
    },
    {
      id: 'spansk-1-4-2-def-1',
      type: 'definition',
      title: 'Infinitiv',
      content: `Infinitiv er verbets grunnform, som på norsk "å snakke". På spansk ender verb i -ar, -er eller -ir: hablar, comer, vivir.`,
    },
    {
      id: 'spansk-1-4-2-example-1',
      type: 'example',
      title: 'Snakke om aktiviteter',
      content: `- ¿Qué haces en tu tiempo libre? (Hva gjør du på fritiden?)
- Me gusta escuchar música y leer libros. (Jeg liker å høre på musikk og lese bøker.)
- También juego al fútbol con mis amigos. (Jeg spiller også fotball med vennene mine.)`,
    },
  ],
  exercises: [
    {
      id: 'spansk-1-4-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "leer"?',
      options: [
        { id: 'a', text: 'Å skrive', isCorrect: false, feedback: 'Å skrive er "escribir".' },
        { id: 'b', text: 'Å lese', isCorrect: true },
        { id: 'c', text: 'Å spise', isCorrect: false, feedback: 'Å spise er "comer".' },
        { id: 'd', text: 'Å snakke', isCorrect: false, feedback: 'Å snakke er "hablar".' },
      ],
      solution: '"Leer" betyr "å lese".',
    },
    {
      id: 'spansk-1-4-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan sier du "Jeg snakker"?',
      options: [
        { id: 'a', text: 'Hablar', isCorrect: false, feedback: 'Det er infinitiven (å snakke).' },
        { id: 'b', text: 'Hablo', isCorrect: true },
        { id: 'c', text: 'Hablas', isCorrect: false, feedback: 'Det er "du snakker".' },
        { id: 'd', text: 'Habla', isCorrect: false, feedback: 'Det er "han/hun snakker".' },
      ],
      solution: '"Yo hablo" = Jeg snakker. Endelsen -o brukes for "jeg" i presens.',
    },
    {
      id: 'spansk-1-4-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er riktig bøyning av "estudiar" for "du"?',
      options: [
        { id: 'a', text: 'Estudio', isCorrect: false, feedback: 'Det er "jeg studerer".' },
        { id: 'b', text: 'Estudias', isCorrect: true },
        { id: 'c', text: 'Estudia', isCorrect: false, feedback: 'Det er "han/hun studerer".' },
        { id: 'd', text: 'Estudiamos', isCorrect: false, feedback: 'Det er "vi studerer".' },
      ],
      solution: '"Tú estudias" = Du studerer. Endelsen -as brukes for "du" i -ar-verb.',
    },
    {
      id: 'spansk-1-4-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva betyr "Escuchamos música"?',
      options: [
        { id: 'a', text: 'Jeg hører på musikk', isCorrect: false, feedback: 'Jeg ville være "Escucho".' },
        { id: 'b', text: 'Vi hører på musikk', isCorrect: true },
        { id: 'c', text: 'De hører på musikk', isCorrect: false, feedback: 'De ville være "Escuchan".' },
        { id: 'd', text: 'Du hører på musikk', isCorrect: false, feedback: 'Du ville være "Escuchas".' },
      ],
      solution: '"Escuchamos" har endelsen -amos som betyr "vi". "Escuchamos música" = Vi hører på musikk.',
    },
  ],
};

// ============================================================================
// Kapittel 5: La comida - Mat
// ============================================================================

export const CHAPTER_SPANSK_1_5_1: TextbookChapter = {
  id: 'spansk-1-5-1',
  courseId: 'spansk-1',
  chapterNumber: '5.1',
  title: 'La comida y bebida - Mat og drikke',
  description: 'Lær ord for mat og drikke på spansk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'snakke om mat og måltider',
  ],
  content: [
    {
      id: 'spansk-1-5-1-intro',
      type: 'text',
      content: `Mat er en viktig del av spansk kultur. La oss lære ordene for vanlig mat og drikke!`,
    },
    {
      id: 'spansk-1-5-1-text-1',
      type: 'text',
      content: `**Mat (La comida)**

| Spansk | Norsk |
|--------|-------|
| el pan | brød |
| el queso | ost |
| el jamón | skinke |
| la carne | kjøtt |
| el pollo | kylling |
| el pescado | fisk |
| el arroz | ris |
| la pasta | pasta |
| la ensalada | salat |
| la fruta | frukt |`,
    },
    {
      id: 'spansk-1-5-1-text-2',
      type: 'text',
      content: `**Frukt og grønnsaker**

| Spansk | Norsk |
|--------|-------|
| la manzana | eple |
| la naranja | appelsin |
| el plátano | banan |
| la fresa | jordbær |
| el tomate | tomat |
| la patata | potet |
| la cebolla | løk |
| el ajo | hvitløk |`,
    },
    {
      id: 'spansk-1-5-1-text-3',
      type: 'text',
      content: `**Drikke (Las bebidas)**

| Spansk | Norsk |
|--------|-------|
| el agua | vann |
| la leche | melk |
| el zumo | juice |
| el café | kaffe |
| el té | te |
| el refresco | brus |

**Måltider:**
- el desayuno (frokost)
- el almuerzo (lunsj)
- la cena (middag)`,
    },
    {
      id: 'spansk-1-5-1-tip-1',
      type: 'tip',
      title: 'Me gusta',
      content: `For å si du liker noe: "Me gusta el queso" (Jeg liker ost). For flertall: "Me gustan las manzanas" (Jeg liker epler).`,
    },
  ],
  exercises: [
    {
      id: 'spansk-1-5-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "el pan"?',
      options: [
        { id: 'a', text: 'Ost', isCorrect: false, feedback: 'Ost er "el queso".' },
        { id: 'b', text: 'Brød', isCorrect: true },
        { id: 'c', text: 'Kjøtt', isCorrect: false, feedback: 'Kjøtt er "la carne".' },
        { id: 'd', text: 'Fisk', isCorrect: false, feedback: 'Fisk er "el pescado".' },
      ],
      solution: '"El pan" betyr brød.',
    },
    {
      id: 'spansk-1-5-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan sier du "eple" på spansk?',
      options: [
        { id: 'a', text: 'La naranja', isCorrect: false, feedback: 'Det er appelsin.' },
        { id: 'b', text: 'La manzana', isCorrect: true },
        { id: 'c', text: 'El plátano', isCorrect: false, feedback: 'Det er banan.' },
        { id: 'd', text: 'La fresa', isCorrect: false, feedback: 'Det er jordbær.' },
      ],
      solution: '"La manzana" betyr eple.',
    },
    {
      id: 'spansk-1-5-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er "el desayuno"?',
      options: [
        { id: 'a', text: 'Lunsj', isCorrect: false, feedback: 'Lunsj er "el almuerzo".' },
        { id: 'b', text: 'Frokost', isCorrect: true },
        { id: 'c', text: 'Middag', isCorrect: false, feedback: 'Middag er "la cena".' },
        { id: 'd', text: 'Kveldsmat', isCorrect: false, feedback: '"Desayuno" er dagens første måltid.' },
      ],
      solution: '"El desayuno" betyr frokost.',
    },
    {
      id: 'spansk-1-5-1-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvordan sier du "Jeg liker fisk"?',
      options: [
        { id: 'a', text: 'Gusto el pescado', isCorrect: false, feedback: 'Strukturen er feil.' },
        { id: 'b', text: 'Me gusta el pescado', isCorrect: true },
        { id: 'c', text: 'Me gustan el pescado', isCorrect: false, feedback: '"Gustan" brukes for flertall.' },
        { id: 'd', text: 'Yo gusto pescado', isCorrect: false, feedback: 'Strukturen er feil på spansk.' },
      ],
      solution: '"Me gusta el pescado" - bokstavelig "Fisken behager meg". "Me gusta" + entall substantiv.',
    },
  ],
};

export const CHAPTER_SPANSK_1_5_2: TextbookChapter = {
  id: 'spansk-1-5-2',
  courseId: 'spansk-1',
  chapterNumber: '5.2',
  title: 'En el restaurante - På restauranten',
  description: 'Lær å bestille mat og drikke på spansk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kommunisere i enkle hverdagssituasjoner',
  ],
  content: [
    {
      id: 'spansk-1-5-2-intro',
      type: 'text',
      content: `Å kunne bestille mat på restauranter er nyttig når du reiser til spansktalende land. La oss lære de viktigste uttrykkene!`,
    },
    {
      id: 'spansk-1-5-2-text-1',
      type: 'text',
      content: `**Nyttige uttrykk**

| Spansk | Norsk |
|--------|-------|
| ¿Qué desea? | Hva ønsker du? |
| Quiero... | Jeg vil ha... |
| Quisiera... | Jeg vil gjerne ha... (høflig) |
| Para mí... | Til meg... |
| ¿Tienen...? | Har dere...? |
| La cuenta, por favor | Regningen, takk |
| ¿Cuánto cuesta? | Hvor mye koster det? |`,
    },
    {
      id: 'spansk-1-5-2-text-2',
      type: 'text',
      content: `**På restauranten**

| Spansk | Norsk |
|--------|-------|
| el menú / la carta | menyen |
| el plato del día | dagens rett |
| el primer plato | forrett |
| el segundo plato | hovedrett |
| el postre | dessert |
| la propina | tips (drikkepenger) |`,
    },
    {
      id: 'spansk-1-5-2-example-1',
      type: 'example',
      title: 'Dialog på restaurant',
      content: `Camarero: ¡Buenas tardes! ¿Qué desean?
Cliente: Quisiera una ensalada, por favor.
Camarero: ¿Y para beber?
Cliente: Un agua mineral, por favor.
Camarero: Muy bien.
(Etter måltidet)
Cliente: La cuenta, por favor.
Camarero: Son quince euros.
Cliente: Aquí tiene. Gracias.`,
    },
    {
      id: 'spansk-1-5-2-tip-1',
      type: 'tip',
      title: 'Por favor og Gracias',
      content: `Bruk alltid "por favor" (vær så snill) når du bestiller, og "gracias" (takk) når du får noe. Det viser god høflighet!`,
    },
  ],
  exercises: [
    {
      id: 'spansk-1-5-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvordan ber du om regningen?',
      options: [
        { id: 'a', text: 'El menú, por favor', isCorrect: false, feedback: 'Det er å be om menyen.' },
        { id: 'b', text: 'La cuenta, por favor', isCorrect: true },
        { id: 'c', text: 'El postre, por favor', isCorrect: false, feedback: 'Det er å be om dessert.' },
        { id: 'd', text: 'El agua, por favor', isCorrect: false, feedback: 'Det er å be om vann.' },
      ],
      solution: '"La cuenta, por favor" betyr "Regningen, takk".',
    },
    {
      id: 'spansk-1-5-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "Quisiera una pizza"?',
      options: [
        { id: 'a', text: 'Har du pizza?', isCorrect: false, feedback: 'Det ville være "¿Tiene pizza?".' },
        { id: 'b', text: 'Jeg vil gjerne ha en pizza', isCorrect: true },
        { id: 'c', text: 'Pizzaen er god', isCorrect: false, feedback: 'Det ville være "La pizza es buena".' },
        { id: 'd', text: 'Jeg liker pizza', isCorrect: false, feedback: 'Det ville være "Me gusta la pizza".' },
      ],
      solution: '"Quisiera" er en høflig måte å si "Jeg vil gjerne ha" på.',
    },
    {
      id: 'spansk-1-5-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er "el plato del día"?',
      options: [
        { id: 'a', text: 'Menyen', isCorrect: false, feedback: 'Menyen er "el menú" eller "la carta".' },
        { id: 'b', text: 'Dagens rett', isCorrect: true },
        { id: 'c', text: 'Desserten', isCorrect: false, feedback: 'Dessert er "el postre".' },
        { id: 'd', text: 'Regningen', isCorrect: false, feedback: 'Regningen er "la cuenta".' },
      ],
      solution: '"El plato del día" betyr dagens rett - en spesiell rett som tilbys den dagen.',
    },
    {
      id: 'spansk-1-5-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvordan spør du "Hvor mye koster det?"',
      options: [
        { id: 'a', text: '¿Qué es esto?', isCorrect: false, feedback: 'Det betyr "Hva er dette?".' },
        { id: 'b', text: '¿Cuánto cuesta?', isCorrect: true },
        { id: 'c', text: '¿Dónde está?', isCorrect: false, feedback: 'Det betyr "Hvor er det?".' },
        { id: 'd', text: '¿Cómo está?', isCorrect: false, feedback: 'Det betyr "Hvordan har du det?".' },
      ],
      solution: '"¿Cuánto cuesta?" betyr "Hvor mye koster det?". "Cuánto" = hvor mye, "cuesta" = koster.',
    },
  ],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const SPANSK_1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SPANSK_1_1_1,
  CHAPTER_SPANSK_1_1_2,
  CHAPTER_SPANSK_1_2_1,
  CHAPTER_SPANSK_1_2_2,
  CHAPTER_SPANSK_1_3_1,
  CHAPTER_SPANSK_1_3_2,
  CHAPTER_SPANSK_1_4_1,
  CHAPTER_SPANSK_1_4_2,
  CHAPTER_SPANSK_1_5_1,
  CHAPTER_SPANSK_1_5_2,
];
