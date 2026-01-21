/**
 * Tekstbok datamodeller og typer
 *
 * Disse typene brukes for å strukturere innholdet i interaktive matematikkbøker
 * fra 5. klasse til VG3.
 */

import type { ExerciseValidation } from '@/lib/geogebra/validation-types';

// ============================================================================
// Kursstruktur
// ============================================================================

export interface TextbookCourse {
  id: string;                    // f.eks. "1t", "1p", "s1", "r1"
  title: string;                 // f.eks. "Matematikk 1T"
  level: string;                 // f.eks. "VG1", "8. klasse"
  description: string;
  chapters: TextbookChapterMeta[];
  curriculum: 'LK20' | 'LK06';
  icon?: string;                 // Emoji eller ikon
  coverImage?: string;           // Forsidebilde for kurset
}

export interface TextbookChapterMeta {
  id: string;                    // f.eks. "1t-1-1"
  number: string;                // f.eks. "1.1"
  title: string;
  description: string;
  estimatedMinutes: number;
  exerciseCount: number;
  topics: string[];
  prerequisites?: string[];      // Andre kapittel-IDer
  competenceGoals?: string[];    // LK20-kompetansemål
  wip?: boolean;                 // Under arbeid
  coverImage?: string;           // Unsplash-bilde URL for kapittel
  auraColor?: string;            // Farge for tekst-aura (rgba format), matcher bakgrunnsbildet
}

// ============================================================================
// Kapittelinnhold
// ============================================================================

export interface TextbookChapter {
  id: string;
  courseId: string;
  chapterNumber: string;
  title: string;
  description: string;
  content: TextbookContentBlock[];
  exercises: TextbookExercise[];
  estimatedMinutes: number;
  prerequisites?: string[];
  competenceGoals?: string[];
  nextChapter?: string;
  prevChapter?: string;
}

// Union type for alle innholdsblokker
export type TextbookContentBlock =
  | TextContentBlock
  | DefinitionBlock
  | TheoremBlock
  | ExampleBlock
  | ProofBlock
  | NoteBlock
  | WarningBlock
  | TipBlock
  | VideoBlock
  | GeoGebraBlock
  | ImageBlock
  | FormulaBlock
  | ExerciseBlock
  | QuizBlock
  | CollapsibleBlock
  | SignDiagramBlock
  | IllustrationBlock;

// Basis for alle innholdsblokker
interface BaseContentBlock {
  id: string;
}

export interface TextContentBlock extends BaseContentBlock {
  type: 'text';
  title?: string;                // Valgfri overskrift
  content: string;               // Støtter Markdown og LaTeX ($...$)
}

export interface DefinitionBlock extends BaseContentBlock {
  type: 'definition';
  title: string;
  content: string;
}

export interface TheoremBlock extends BaseContentBlock {
  type: 'theorem';
  title: string;
  content: string;
  proof?: string;
}

export interface ProofBlock extends BaseContentBlock {
  type: 'proof';
  title?: string;
  content: string;
}

export interface ExampleBlock extends BaseContentBlock {
  type: 'example';
  title?: string;
  problem?: string;              // Oppgavetekst (bruk sammen med solution)
  solution?: string;             // Løsningsforslag (bruk sammen med problem)
  content?: string;              // Alternativ: kombinert oppgave og løsning i én streng
  solutionContent?: ExampleSolutionBlock[];  // Løsning med nestede blokker (f.eks. fortegnsskjema)
  steps?: string[];              // Stegvis løsning
  solutionVideo?: string;        // YouTube video ID
}

// Innholdsblokker som kan brukes i eksempel-løsninger
export type ExampleSolutionBlock =
  | { type: 'text'; content: string }
  | { type: 'sign-diagram'; title?: string; criticalPoints: string[]; factors: SignDiagramFactor[]; resultLabel?: string };

export interface NoteBlock extends BaseContentBlock {
  type: 'note';
  title?: string;
  content: string;
}

export interface WarningBlock extends BaseContentBlock {
  type: 'warning';
  title?: string;
  content: string;
}

export interface TipBlock extends BaseContentBlock {
  type: 'tip';
  title?: string;
  content: string;
}

export interface VideoBlock extends BaseContentBlock {
  type: 'video';
  title?: string;
  youtubeId: string;
  description?: string;
}

export interface GeoGebraBlock extends BaseContentBlock {
  type: 'geogebra';
  title?: string;
  description?: string;
  materialId?: string;           // GeoGebra material ID
  commands?: string[];           // Initielle kommandoer
  appType?: 'graphing' | 'geometry' | 'classic' | '3d' | 'cas' | 'scientific';
}

export interface ImageBlock extends BaseContentBlock {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
  width?: number;
}

export interface FormulaBlock extends BaseContentBlock {
  type: 'formula';
  title?: string;
  latex?: string;                // LaTeX-formel (anbefalt)
  content?: string;              // Alternativ til latex
  description?: string;
}

export interface ExerciseBlock extends BaseContentBlock {
  type: 'exercise';
  title?: string;                // Valgfri tittel for oppgaveblokken
  exercise?: TextbookExercise;   // Innebygd oppgave i innholdsstrømmen
  // Alternativ struktur - direkte oppgaveegenskaper på blokken:
  task?: string;
  problem?: string;              // Alternativ til task
  difficulty?: ExerciseDifficulty | string;
  hints?: (string | { answer: string; explanation: string })[];
  solution?: string | { answer: string; explanation: string };
  options?: (string | { id: string; text: string; isCorrect?: boolean })[];
  correctAnswer?: string | number;
  answer?: string | number;
  // Fleksible ekstra-egenskaper for ulike innholdsformater
  exerciseType?: string;
  interactiveType?: string;
  estimatedMinutes?: number;
  content?: {
    task?: string;
    options?: (string | { id: string; text: string; isCorrect?: boolean })[];
    answer?: string | number;
    hint?: string;
    feedback?: string;
    solution?: string;
    [key: string]: unknown;
  };
  [key: string]: unknown;        // Allow additional properties
}

// Quiz-blokk for innebygde oppgaver med enklere struktur (brukt i kjemi2)
// Fleksibel type som tillater ulike strukturvarianter
export interface QuizBlock extends BaseContentBlock {
  type: 'quiz';
  title?: string;
  problem?: string;
  solution?: string;
  hint?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  content?: {
    question?: string;
    solution?: string;
    hints?: string[];
    allowsCanvasDrawing?: boolean;
    parts?: {
      label: string;
      task: string;
      solution?: string;
      answer?: string | number;
    }[];
    [key: string]: unknown;  // Allow additional properties
  };
  [key: string]: unknown;  // Allow additional top-level properties
}

export interface CollapsibleBlock extends BaseContentBlock {
  type: 'collapsible';
  title: string;
  buttonText?: string;           // Tekst på knappen (default: "Vis")
  content: TextbookContentBlock[];  // Innhold som vises når åpnet
}

export interface SignDiagramBlock extends BaseContentBlock {
  type: 'sign-diagram';
  title?: string;
  criticalPoints: string[];      // Kritiske punkter, f.eks. ["-3", "6"]
  factors: SignDiagramFactor[];  // Faktorer med fortegn
  resultLabel?: string;          // Label for resultatraden (default: "f(x)")
}

export interface SignDiagramFactor {
  label: string;                 // LaTeX for faktoren, f.eks. "(x-6)"
  signs: string;                 // Fortegn som streng, f.eks. "- 0 +" eller "-0+"
}

export interface IllustrationBlock extends BaseContentBlock {
  type: 'illustration';
  illustrationId: string | InlineIllustration;  // ID eller inline definisjon
  caption?: string;              // Bildetekst
}

// For inline SVG-illustrasjoner
export interface InlineIllustration {
  id: string;
  type: 'svg';
  description?: string;
  labels?: Array<{ key: string; description: string }>;
  width?: number;
  height?: number;
  svgContent: string;
}

// ============================================================================
// Oppgavetyper
// ============================================================================

export type ExerciseType = 'interactive' | 'classic' | 'upload' | 'multiple-choice' | 'exercise';
export type ExerciseTool = 'geogebra-graph' | 'geogebra-cas' | 'geogebra-geometry' | 'geogebra-3d' | 'python' | 'none';
export type ExerciseDifficulty = 'lett' | 'medium' | 'vanskelig';

export interface TextbookExercise {
  id: string;
  number?: string;               // f.eks. "1.1.3"
  type: ExerciseType;
  difficulty?: ExerciseDifficulty;

  // Oppgavetekst
  task: string;                  // Markdown/LaTeX støttet
  subTasks?: SubTask[];          // a), b), c) osv.

  // Illustrasjon
  image?: string;                // Sti til illustrasjon (f.eks. '/images/geometry/pytagoras.svg')

  // Verktøy
  tool?: ExerciseTool;

  // For interaktive oppgaver
  initialCode?: string;          // For Python
  initialCommands?: string[];    // For GeoGebra
  geogebraAppType?: 'graphing' | 'geometry' | 'classic' | '3d' | 'cas' | 'scientific';

  // Validering
  validation?: ExerciseValidation[];
  testCases?: TestCase[];        // For Python

  // Flervalg
  options?: (MultipleChoiceOption | string)[];

  // Hjelp
  hints?: string[];
  solution?: string;
  explanation?: string;          // Ekstra forklaring utover løsningen
  solutionSteps?: string[];
  solutionVideo?: string;        // YouTube video ID for løsningsforslag
  hideInlineSolution?: boolean;  // Skjul "Vis løsning"-knappen (for repetisjonsoppgaver)

  // Innlevering
  allowsUpload?: boolean;        // Bildeopplasting
  allowsCanvasDrawing?: boolean; // Tegning på nettbrett
  aiGradingEnabled?: boolean;    // AI-tilbakemelding

  // Metadata
  topic?: string;
  points?: number;

  // Korrekt svar for automatisk sjekk (for oppgaver uten deloppgaver)
  answer?: number | number[] | string;
  correctAnswer?: string | number;     // Alternativ til answer (for multiple-choice)

  // For classic exercises - multiple choice alternatives for training mode
  multipleChoiceOptions?: string[];    // Flervalgsalternativer (første er alltid riktig)
}

export interface SubTask {
  label: string;                 // "a", "b", "c"
  task: string;
  solution?: string;
  answer?: number | number[] | string;    // Korrekt svar for automatisk sjekk
  expressionAnswer?: string | string[];  // Algebraisk svar for automatisk sjekk (f.eks. "x^5", "a^8*b^2")
  multipleChoiceOptions?: string[];      // Flervalgsalternativer for tekstsvar (første er alltid riktig)
}

export interface TestCase {
  input?: string;
  expectedOutput: string;
  description?: string;
  matchMode?: 'exact' | 'contains' | 'lines';
}

export interface MultipleChoiceOption {
  id: string;
  text: string;
  isCorrect?: boolean;           // Kan utelates når correctAnswer brukes på oppgaven
  feedback?: string;             // Vises når valgt
}

// ============================================================================
// Elevbesvarelser
// ============================================================================

export type SubmissionType = 'code' | 'geogebra-xml' | 'image' | 'canvas-drawing' | 'text' | 'multiple-choice';

export interface StudentSubmission {
  id: string;
  exerciseId: string;
  chapterId: string;
  courseId: string;
  studentId: string;

  type: SubmissionType;
  content: string;               // Kode, tekst, eller base64 for bilder
  imageUrl?: string;             // URL til opplastet bilde

  submittedAt: Date;
  updatedAt?: Date;

  // Validering (automatisk)
  isCorrect?: boolean;
  validationResults?: ValidationResultItem[];

  // AI-tilbakemelding
  aiGrade?: AIGradeResult;

  // Lærer-tilbakemelding
  teacherGrade?: TeacherGrade;
}

export interface ValidationResultItem {
  validationId: string;
  passed: boolean;
  message?: string;
}

export interface AIGradeResult {
  score: number;                 // 0-100
  isCorrect: boolean;
  feedback: string;
  suggestions: string[];
  strengths?: string[];
  gradedAt: Date;
}

export interface TeacherGrade {
  score?: number;                // 0-100 eller annen skala
  grade?: string;                // f.eks. "6", "5+", "Bestått"
  feedback: string;
  gradedAt: Date;
  gradedBy: string;              // Lærer-ID
}

// ============================================================================
// Fremgang
// ============================================================================

export interface StudentProgress {
  studentId: string;
  courseId: string;

  // Per kapittel
  chapters: Record<string, ChapterProgress>;

  // Totalt
  totalExercisesCompleted: number;
  totalExercises: number;
  lastAccessedAt: Date;
  startedAt: Date;
  completedAt?: Date;
}

export interface ChapterProgress {
  chapterId: string;
  exercisesCompleted: string[];  // Liste med exercise-IDer
  exercisesTotal: number;
  lastAccessedAt: Date;
  startedAt?: Date;
  completedAt?: Date;
}

// ============================================================================
// Hjelpefunksjoner for type guards
// ============================================================================

export function isTextContent(block: TextbookContentBlock): block is TextContentBlock {
  return block.type === 'text';
}

export function isDefinition(block: TextbookContentBlock): block is DefinitionBlock {
  return block.type === 'definition';
}

export function isTheorem(block: TextbookContentBlock): block is TheoremBlock {
  return block.type === 'theorem';
}

export function isExample(block: TextbookContentBlock): block is ExampleBlock {
  return block.type === 'example';
}

export function isVideo(block: TextbookContentBlock): block is VideoBlock {
  return block.type === 'video';
}

export function isGeoGebra(block: TextbookContentBlock): block is GeoGebraBlock {
  return block.type === 'geogebra';
}

export function isInteractiveExercise(exercise: TextbookExercise): boolean {
  return exercise.type === 'interactive' && exercise.tool !== 'none';
}

export function isUploadExercise(exercise: TextbookExercise): boolean {
  return exercise.type === 'upload' || exercise.allowsUpload === true || exercise.allowsCanvasDrawing === true;
}
