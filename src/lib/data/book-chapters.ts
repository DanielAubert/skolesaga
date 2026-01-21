/**
 * Book chapters data structure
 * Used for navigation and progress tracking
 */

export type ChapterLevel =
  | "grunnleggende"  // Kapittel 1.x - Grunnleggende ferdigheter
  | "8-klasse"       // Kapittel 2.1
  | "9-klasse"       // Kapittel 2.2
  | "10-klasse"      // Kapittel 2.3
  | "1P"             // Kapittel 3.1
  | "1T"             // Kapittel 3.2
  | "2P"             // Kapittel 4.1
  | "S1"             // Kapittel 4.2
  | "R1"             // Kapittel 4.3
  | "S2"             // Kapittel 4.4
  | "R2";            // Kapittel 4.5

export type ChapterCategory =
  | "grunnleggende"
  | "8-klasse"
  | "9-klasse"
  | "10-klasse"
  | "1P"
  | "1T"
  | "2P"
  | "S1"
  | "R1"
  | "S2"
  | "R2";

export interface BookChapter {
  id: string;
  number: string;
  title: string;
  description: string;
  videoUrl: string;
  exercises: number;
  url: string;
  readingTimeMinutes: number;
  level: ChapterLevel;
  category: ChapterCategory;
  wip?: boolean; // Under arbeid - vises som badge på kortet
}

export const BOOK_CHAPTERS: BookChapter[] = [
  // ===== GRUNNLEGGENDE FERDIGHETER (Kapittel 1.x) =====
  {
    id: "1-1",
    number: "1.1",
    title: "Kommentarer, print() og feilmeldinger",
    description: "Lær om kommentarer, print()-funksjonen og hvordan tolke feilmeldinger.",
    videoUrl: "http://pythonhefte0101.studenthjelp.no/",
    exercises: 3,
    url: "/book/pilot",
    readingTimeMinutes: 8,
    level: "grunnleggende",
    category: "grunnleggende",
    wip: true
  },
  {
    id: "1-2",
    number: "1.2",
    title: "Variabeltyper og datatyper",
    description: "Forstå heltall, flyttall, strenger, lister og boolske verdier i Python.",
    videoUrl: "http://pythonhefte0102.studenthjelp.no/",
    exercises: 1,
    url: "/book/1-2",
    readingTimeMinutes: 12,
    level: "grunnleggende",
    category: "grunnleggende",
    wip: true
  },
  {
    id: "1-3",
    number: "1.3",
    title: "Regneoperatorer",
    description: "Pluss, minus, gange, dele, eksponenter, heltallsdivisjon og modulo.",
    videoUrl: "http://pythonhefte0103.studenthjelp.no/",
    exercises: 4,
    url: "/book/1-3",
    readingTimeMinutes: 15,
    level: "grunnleggende",
    category: "grunnleggende",
    wip: true
  },
  {
    id: "1-4",
    number: "1.4",
    title: "Input fra bruker",
    description: "Lær å ta imot input fra brukeren og konvertere datatyper.",
    videoUrl: "http://pythonhefte0104.studenthjelp.no/",
    exercises: 3,
    url: "/book/1-4",
    readingTimeMinutes: 10,
    level: "grunnleggende",
    category: "grunnleggende",
    wip: true
  },
  {
    id: "1-5",
    number: "1.5",
    title: "If-setninger og logiske operatorer",
    description: "Betingelser, if-elif-else og sammenligning av verdier.",
    videoUrl: "http://pythonhefte0105.studenthjelp.no/",
    exercises: 5,
    url: "/book/1-5",
    readingTimeMinutes: 15,
    level: "grunnleggende",
    category: "grunnleggende",
    wip: true
  },
  {
    id: "1-6",
    number: "1.6",
    title: "Funksjoner",
    description: "Definere egne funksjoner, parametere og return-verdier.",
    videoUrl: "http://pythonhefte0108.studenthjelp.no/",
    exercises: 6,
    url: "/book/1-6",
    readingTimeMinutes: 20,
    level: "grunnleggende",
    category: "grunnleggende",
    wip: true
  },
  {
    id: "1-7",
    number: "1.7",
    title: "Lister og listeoperasjoner",
    description: "Trekke ut elementer, legge sammen lister og bruke .append()-metoden.",
    videoUrl: "http://pythonhefte0107.studenthjelp.no/",
    exercises: 2,
    url: "/book/1-7",
    readingTimeMinutes: 12,
    level: "grunnleggende",
    category: "grunnleggende",
    wip: true
  },
  {
    id: "1-8",
    number: "1.8",
    title: "While-løkker",
    description: "Repetisjon med while-løkker og break/continue.",
    videoUrl: "http://pythonhefte0106.studenthjelp.no/",
    exercises: 4,
    url: "/book/1-8",
    readingTimeMinutes: 15,
    level: "grunnleggende",
    category: "grunnleggende",
    wip: true
  },
  {
    id: "1-9",
    number: "1.9",
    title: "For-løkker og range()",
    description: "Iterering med for-løkker, range() og list comprehension.",
    videoUrl: "http://pythonhefte0107.studenthjelp.no/",
    exercises: 5,
    url: "/book/1-9",
    readingTimeMinutes: 18,
    level: "grunnleggende",
    category: "grunnleggende",
    wip: true
  },
  {
    id: "1-10",
    number: "1.10",
    title: "and, or og elif",
    description: "Logiske operatorer og utvidede if-setninger med elif.",
    videoUrl: "http://pythonhefte0110.studenthjelp.no/",
    exercises: 1,
    url: "/book/1-10",
    readingTimeMinutes: 10,
    level: "grunnleggende",
    category: "grunnleggende",
    wip: true
  },
  {
    id: "1-11",
    number: "1.11",
    title: "Bibliotek import og random-modulen",
    description: "Importere biblioteker og bruke random-funksjoner i Python.",
    videoUrl: "http://pythonhefte0111.studenthjelp.no/",
    exercises: 5,
    url: "/book/1-11",
    readingTimeMinutes: 15,
    level: "grunnleggende",
    category: "grunnleggende",
    wip: true
  },

  // ===== KAPITTEL 2: 8. KLASSE =====
  {
    id: "2-1",
    number: "2.1",
    title: "Variabler og print",
    description: "Lær å bruke variabler og print-funksjonen for å skrive enkle programmer.",
    videoUrl: "",
    exercises: 4,
    url: "/book/2-1",
    readingTimeMinutes: 15,
    level: "8-klasse",
    category: "8-klasse",
    wip: true
  },
  {
    id: "2-2",
    number: "2.2",
    title: "Input og beregninger",
    description: "Ta imot input fra brukeren og gjør enkle beregninger.",
    videoUrl: "",
    exercises: 4,
    url: "/book/2-2",
    readingTimeMinutes: 15,
    level: "8-klasse",
    category: "8-klasse",
    wip: true
  },
  {
    id: "2-3",
    number: "2.3",
    title: "If-setninger",
    description: "Bruk if-setninger for å lage programmer som tar beslutninger.",
    videoUrl: "",
    exercises: 4,
    url: "/book/2-3",
    readingTimeMinutes: 18,
    level: "8-klasse",
    category: "8-klasse",
    wip: true
  },
  {
    id: "2-4",
    number: "2.4",
    title: "Løkker",
    description: "Repeter kode med while- og for-løkker.",
    videoUrl: "",
    exercises: 4,
    url: "/book/2-4",
    readingTimeMinutes: 18,
    level: "8-klasse",
    category: "8-klasse",
    wip: true
  },
  {
    id: "2-5",
    number: "2.5",
    title: "Prosjekt - Enkel kalkulator",
    description: "Lag en enkel kalkulator som kan utføre grunnleggende regneoperasjoner.",
    videoUrl: "",
    exercises: 3,
    url: "/book/2-5",
    readingTimeMinutes: 25,
    level: "8-klasse",
    category: "8-klasse",
    wip: true
  },

  // ===== KAPITTEL 3: 9. KLASSE =====
  {
    id: "3-1",
    number: "3.1",
    title: "Funksjoner",
    description: "Definer egne funksjoner for å organisere koden din bedre.",
    videoUrl: "",
    exercises: 5,
    url: "/book/3-1",
    readingTimeMinutes: 20,
    level: "9-klasse",
    category: "9-klasse",
    wip: true
  },
  {
    id: "3-2",
    number: "3.2",
    title: "Lister",
    description: "Bruk lister for å lagre og behandle flere verdier.",
    videoUrl: "",
    exercises: 5,
    url: "/book/3-2",
    readingTimeMinutes: 18,
    level: "9-klasse",
    category: "9-klasse",
    wip: true
  },
  {
    id: "3-3",
    number: "3.3",
    title: "Statistikk med lister",
    description: "Beregn gjennomsnitt, median og visualiser data med lister.",
    videoUrl: "",
    exercises: 5,
    url: "/book/3-3",
    readingTimeMinutes: 22,
    level: "9-klasse",
    category: "9-klasse",
    wip: true
  },
  {
    id: "3-4",
    number: "3.4",
    title: "Prosjekt - Dataanalyse",
    description: "Analyser et datasett og visualiser resultatene.",
    videoUrl: "",
    exercises: 4,
    url: "/book/3-4",
    readingTimeMinutes: 30,
    level: "9-klasse",
    category: "9-klasse",
    wip: true
  },

  // ===== KAPITTEL 4: 10. KLASSE =====
  {
    id: "4-1",
    number: "4.1",
    title: "Repetisjon og funksjoner",
    description: "Repeter grunnleggende konsepter og utvid kunnskapen om funksjoner.",
    videoUrl: "",
    exercises: 5,
    url: "/book/4-1",
    readingTimeMinutes: 20,
    level: "10-klasse",
    category: "10-klasse",
    wip: true
  },
  {
    id: "4-2",
    number: "4.2",
    title: "Matematisk modellering",
    description: "Bruk Python til å modellere matematiske problemer fra virkeligheten.",
    videoUrl: "",
    exercises: 5,
    url: "/book/4-2",
    readingTimeMinutes: 25,
    level: "10-klasse",
    category: "10-klasse",
    wip: true
  },
  {
    id: "4-3",
    number: "4.3",
    title: "Løse likninger numerisk",
    description: "Lær å løse likninger numerisk med halveringsmetoden.",
    videoUrl: "",
    exercises: 5,
    url: "/book/4-3",
    readingTimeMinutes: 25,
    level: "10-klasse",
    category: "10-klasse",
    wip: true
  },
  {
    id: "4-4",
    number: "4.4",
    title: "Prosjekt - Modellering",
    description: "Løs et større modelleringsproblem med Python.",
    videoUrl: "",
    exercises: 4,
    url: "/book/4-4",
    readingTimeMinutes: 35,
    level: "10-klasse",
    category: "10-klasse",
    wip: true
  },

  // ===== KAPITTEL 5: 1P =====
  {
    id: "5-1",
    number: "5.1",
    title: "Prosentregning",
    description: "Bruk Python til å løse oppgaver med prosentregning.",
    videoUrl: "",
    exercises: 4,
    url: "/book/5-1",
    readingTimeMinutes: 18,
    level: "1P",
    category: "1P",
    wip: true
  },
  {
    id: "5-2",
    number: "5.2",
    title: "Økonomi og budsjett",
    description: "Lag programmer for å planlegge og analysere personlig økonomi.",
    videoUrl: "",
    exercises: 4,
    url: "/book/5-2",
    readingTimeMinutes: 20,
    level: "1P",
    category: "1P",
    wip: true
  },
  {
    id: "5-3",
    number: "5.3",
    title: "Lån og renter",
    description: "Beregn lån, renter og avdrag med Python.",
    videoUrl: "",
    exercises: 5,
    url: "/book/5-3",
    readingTimeMinutes: 22,
    level: "1P",
    category: "1P",
    wip: true
  },
  {
    id: "5-4",
    number: "5.4",
    title: "Prosjekt - Økonomiplanlegger",
    description: "Lag en komplett økonomiplanlegger med Python.",
    videoUrl: "",
    exercises: 3,
    url: "/book/5-4",
    readingTimeMinutes: 30,
    level: "1P",
    category: "1P",
    wip: true
  },

  // ===== KAPITTEL 6: 1T =====
  {
    id: "6-1",
    number: "6.1",
    title: "Funksjoner i Python",
    description: "Utforsk matematiske funksjoner og plott dem med Python.",
    videoUrl: "",
    exercises: 5,
    url: "/book/6-1",
    readingTimeMinutes: 20,
    level: "1T",
    category: "1T",
    wip: true
  },
  {
    id: "6-2",
    number: "6.2",
    title: "Polynomer og nullpunkter",
    description: "Analyser polynomfunksjoner og finn nullpunkter.",
    videoUrl: "",
    exercises: 5,
    url: "/book/6-2",
    readingTimeMinutes: 22,
    level: "1T",
    category: "1T",
    wip: true
  },
  {
    id: "6-3",
    number: "6.3",
    title: "Halveringsmetoden",
    description: "Løs likninger numerisk med halveringsmetoden.",
    videoUrl: "",
    exercises: 5,
    url: "/book/6-3",
    readingTimeMinutes: 25,
    level: "1T",
    category: "1T",
    wip: true
  },
  {
    id: "6-4",
    number: "6.4",
    title: "Prosjekt - Funksjonsanalyse",
    description: "Analyser komplekse funksjoner med Python.",
    videoUrl: "",
    exercises: 4,
    url: "/book/6-4",
    readingTimeMinutes: 30,
    level: "1T",
    category: "1T",
    wip: true
  },

  // ===== KAPITTEL 7: 2P =====
  {
    id: "7-1",
    number: "7.1",
    title: "Statistiske mål",
    description: "Beregn gjennomsnitt, median, typetall og variasjonsbredde.",
    videoUrl: "",
    exercises: 5,
    url: "/book/7-1",
    readingTimeMinutes: 20,
    level: "2P",
    category: "2P",
    wip: true
  },
  {
    id: "7-2",
    number: "7.2",
    title: "Standardavvik",
    description: "Beregn varians og standardavvik for datasett.",
    videoUrl: "",
    exercises: 5,
    url: "/book/7-2",
    readingTimeMinutes: 22,
    level: "2P",
    category: "2P",
    wip: true
  },
  {
    id: "7-3",
    number: "7.3",
    title: "Simulering",
    description: "Simuler tilfeldige hendelser og beregn sannsynligheter.",
    videoUrl: "",
    exercises: 5,
    url: "/book/7-3",
    readingTimeMinutes: 25,
    level: "2P",
    category: "2P",
    wip: true
  },
  {
    id: "7-4",
    number: "7.4",
    title: "Prosjekt - Statistisk analyse",
    description: "Gjennomfør en komplett statistisk analyse av et datasett.",
    videoUrl: "",
    exercises: 4,
    url: "/book/7-4",
    readingTimeMinutes: 35,
    level: "2P",
    category: "2P",
    wip: true
  },

  // ===== KAPITTEL 8: S1 =====
  {
    id: "8-1",
    number: "8.1",
    title: "Kombinatorikk",
    description: "Beregn permutasjoner og kombinasjoner med Python.",
    videoUrl: "",
    exercises: 5,
    url: "/book/8-1",
    readingTimeMinutes: 22,
    level: "S1",
    category: "S1",
    wip: true
  },
  {
    id: "8-2",
    number: "8.2",
    title: "Binomialfordeling",
    description: "Bruk binomialfordelingen til å løse sannsynlighetsproblemer.",
    videoUrl: "",
    exercises: 5,
    url: "/book/8-2",
    readingTimeMinutes: 25,
    level: "S1",
    category: "S1",
    wip: true
  },
  {
    id: "8-3",
    number: "8.3",
    title: "Simulering av forsøk",
    description: "Simuler binomiske forsøk og andre statistiske eksperimenter.",
    videoUrl: "",
    exercises: 5,
    url: "/book/8-3",
    readingTimeMinutes: 25,
    level: "S1",
    category: "S1",
    wip: true
  },
  {
    id: "8-4",
    number: "8.4",
    title: "Prosjekt - Monte Carlo",
    description: "Bruk Monte Carlo-simuleringer til å løse komplekse problemer.",
    videoUrl: "",
    exercises: 4,
    url: "/book/8-4",
    readingTimeMinutes: 35,
    level: "S1",
    category: "S1",
    wip: true
  },

  // ===== KAPITTEL 9: R1 =====
  {
    id: "9-1",
    number: "9.1",
    title: "Numerisk derivasjon",
    description: "Beregn den deriverte av funksjoner numerisk.",
    videoUrl: "",
    exercises: 5,
    url: "/book/9-1",
    readingTimeMinutes: 25,
    level: "R1",
    category: "R1",
    wip: true
  },
  {
    id: "9-2",
    number: "9.2",
    title: "Ekstremalpunkter",
    description: "Finn maksimum- og minimumspunkter til funksjoner.",
    videoUrl: "",
    exercises: 5,
    url: "/book/9-2",
    readingTimeMinutes: 25,
    level: "R1",
    category: "R1",
    wip: true
  },
  {
    id: "9-3",
    number: "9.3",
    title: "Newtons metode",
    description: "Bruk Newtons metode for å finne nullpunkter.",
    videoUrl: "",
    exercises: 5,
    url: "/book/9-3",
    readingTimeMinutes: 28,
    level: "R1",
    category: "R1",
    wip: true
  },
  {
    id: "9-4",
    number: "9.4",
    title: "Prosjekt - Optimering",
    description: "Løs optimeringsproblemer med derivasjon og Python.",
    videoUrl: "",
    exercises: 4,
    url: "/book/9-4",
    readingTimeMinutes: 35,
    level: "R1",
    category: "R1",
    wip: true
  },

  // ===== KAPITTEL 10: S2 =====
  {
    id: "10-1",
    number: "10.1",
    title: "Normalfordeling",
    description: "Arbeide med normalfordelingen og beregne sannsynligheter.",
    videoUrl: "",
    exercises: 5,
    url: "/book/10-1",
    readingTimeMinutes: 25,
    level: "S2",
    category: "S2",
    wip: true
  },
  {
    id: "10-2",
    number: "10.2",
    title: "Konfidensintervall",
    description: "Beregn konfidensintervaller for estimater.",
    videoUrl: "",
    exercises: 5,
    url: "/book/10-2",
    readingTimeMinutes: 28,
    level: "S2",
    category: "S2",
    wip: true
  },
  {
    id: "10-3",
    number: "10.3",
    title: "Hypotesetesting",
    description: "Gjennomfør hypotesetester med Python.",
    videoUrl: "",
    exercises: 5,
    url: "/book/10-3",
    readingTimeMinutes: 30,
    level: "S2",
    category: "S2",
    wip: true
  },
  {
    id: "10-4",
    number: "10.4",
    title: "Prosjekt - Statistisk inferens",
    description: "Gjennomfør en komplett statistisk undersøkelse.",
    videoUrl: "",
    exercises: 4,
    url: "/book/10-4",
    readingTimeMinutes: 40,
    level: "S2",
    category: "S2",
    wip: true
  },

  // ===== KAPITTEL 11: R2 =====
  {
    id: "11-1",
    number: "11.1",
    title: "Numerisk integrasjon",
    description: "Beregn bestemte integraler numerisk med Python.",
    videoUrl: "",
    exercises: 5,
    url: "/book/11-1",
    readingTimeMinutes: 25,
    level: "R2",
    category: "R2",
    wip: true
  },
  {
    id: "11-2",
    number: "11.2",
    title: "Trapesmetoden og Simpson",
    description: "Bruk trapesmetoden og Simpsons regel for integrasjon.",
    videoUrl: "",
    exercises: 5,
    url: "/book/11-2",
    readingTimeMinutes: 28,
    level: "R2",
    category: "R2",
    wip: true
  },
  {
    id: "11-3",
    number: "11.3",
    title: "Rekursive følger",
    description: "Arbeide med rekursive følger og differensiallikninger.",
    videoUrl: "",
    exercises: 5,
    url: "/book/11-3",
    readingTimeMinutes: 30,
    level: "R2",
    category: "R2",
    wip: true
  },
  {
    id: "11-4",
    number: "11.4",
    title: "Prosjekt - Arealer og volum",
    description: "Beregn arealer og volum med numerisk integrasjon.",
    videoUrl: "",
    exercises: 4,
    url: "/book/11-4",
    readingTimeMinutes: 40,
    level: "R2",
    category: "R2",
    wip: true
  }
];

/**
 * Get chapter by ID
 */
export function getChapterById(id: string): BookChapter | undefined {
  return BOOK_CHAPTERS.find(ch => ch.id === id);
}

/**
 * Get previous and next chapters for navigation
 */
export function getAdjacentChapters(currentId: string): {
  prev: BookChapter | null;
  next: BookChapter | null;
} {
  const currentIndex = BOOK_CHAPTERS.findIndex(ch => ch.id === currentId);

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: currentIndex > 0 ? BOOK_CHAPTERS[currentIndex - 1] : null,
    next: currentIndex < BOOK_CHAPTERS.length - 1 ? BOOK_CHAPTERS[currentIndex + 1] : null,
  };
}

/**
 * Exercise progress tracking
 */
export interface ExerciseProgress {
  [chapterId: string]: string[]; // chapterId -> array of completed exerciseIds
}

const EXERCISE_PROGRESS_KEY = 'book-exercise-progress';

/**
 * Get completed exercises from localStorage
 */
export function getCompletedExercises(): ExerciseProgress {
  if (typeof window === 'undefined') return {};

  try {
    const saved = localStorage.getItem(EXERCISE_PROGRESS_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch (error) {
    console.error('Failed to load exercise progress:', error);
    return {};
  }
}

/**
 * Save exercise as completed
 */
export function markExerciseCompleted(chapterId: string, exerciseId: string): void {
  if (typeof window === 'undefined') return;

  const progress = getCompletedExercises();

  if (!progress[chapterId]) {
    progress[chapterId] = [];
  }

  if (!progress[chapterId].includes(exerciseId)) {
    progress[chapterId].push(exerciseId);
    localStorage.setItem(EXERCISE_PROGRESS_KEY, JSON.stringify(progress));
  }
}

/**
 * Check if an exercise is completed
 */
export function isExerciseCompleted(chapterId: string, exerciseId: string): boolean {
  const progress = getCompletedExercises();
  return progress[chapterId]?.includes(exerciseId) || false;
}

/**
 * Get chapter completion percentage based on exercises
 */
export function getChapterCompletionPercentage(chapterId: string): number {
  const chapter = getChapterById(chapterId);
  if (!chapter || chapter.exercises === 0) return 0;

  const progress = getCompletedExercises();
  const completedCount = progress[chapterId]?.length || 0;

  return Math.round((completedCount / chapter.exercises) * 100);
}

/**
 * Get overall progress percentage based on all exercises
 */
export function getOverallProgressPercentage(): number {
  const totalExercises = BOOK_CHAPTERS.reduce((sum, ch) => sum + ch.exercises, 0);
  if (totalExercises === 0) return 0;

  const progress = getCompletedExercises();
  const completedExercises = Object.values(progress).reduce(
    (sum, exercises) => sum + exercises.length,
    0
  );

  return Math.round((completedExercises / totalExercises) * 100);
}

/**
 * Get number of completed exercises for a chapter
 */
export function getCompletedExercisesCount(chapterId: string): number {
  const progress = getCompletedExercises();
  return progress[chapterId]?.length || 0;
}

/**
 * Reset all exercise progress
 */
export function resetExerciseProgress(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(EXERCISE_PROGRESS_KEY);
}

/**
 * Get chapter progress percentage (deprecated - use exercise-based progress instead)
 */
export function getProgressPercentage(completedChapterIds: string[]): number {
  return Math.round((completedChapterIds.length / BOOK_CHAPTERS.length) * 100);
}

/**
 * Get chapters by category
 */
export function getChaptersByCategory(category: ChapterCategory): BookChapter[] {
  return BOOK_CHAPTERS.filter(ch => ch.category === category);
}

/**
 * Get chapters by level
 */
export function getChaptersByLevel(level: ChapterLevel): BookChapter[] {
  return BOOK_CHAPTERS.filter(ch => ch.level === level);
}

/**
 * Get all categories with their chapters
 */
export function getAllCategoriesWithChapters(): { category: ChapterCategory; label: string; chapters: BookChapter[] }[] {
  return [
    {
      category: "grunnleggende",
      label: "Grunnleggende ferdigheter",
      chapters: getChaptersByCategory("grunnleggende")
    },
    {
      category: "8-klasse",
      label: "8. klasse",
      chapters: getChaptersByCategory("8-klasse")
    },
    {
      category: "9-klasse",
      label: "9. klasse",
      chapters: getChaptersByCategory("9-klasse")
    },
    {
      category: "10-klasse",
      label: "10. klasse",
      chapters: getChaptersByCategory("10-klasse")
    },
    {
      category: "1P",
      label: "1P",
      chapters: getChaptersByCategory("1P")
    },
    {
      category: "1T",
      label: "1T",
      chapters: getChaptersByCategory("1T")
    },
    {
      category: "2P",
      label: "2P",
      chapters: getChaptersByCategory("2P")
    },
    {
      category: "S1",
      label: "S1",
      chapters: getChaptersByCategory("S1")
    },
    {
      category: "R1",
      label: "R1",
      chapters: getChaptersByCategory("R1")
    },
    {
      category: "S2",
      label: "S2",
      chapters: getChaptersByCategory("S2")
    },
    {
      category: "R2",
      label: "R2",
      chapters: getChaptersByCategory("R2")
    }
  ];
}

/**
 * Get level display name
 */
export function getLevelDisplayName(level: ChapterLevel): string {
  const displayNames: Record<ChapterLevel, string> = {
    "grunnleggende": "Grunnleggende",
    "8-klasse": "8. klasse",
    "9-klasse": "9. klasse",
    "10-klasse": "10. klasse",
    "1P": "1P",
    "1T": "1T",
    "2P": "2P",
    "S1": "S1",
    "R1": "R1",
    "S2": "S2",
    "R2": "R2"
  };
  return displayNames[level];
}
