export interface Exam {
  id: string;
  subject: string;
  subjectCode: string;
  level: string;
  year: number;
  semester: "vår" | "høst";
  parts: ExamPart[];
  curriculum: "LK20" | "LK06";
  status: "draft" | "published" | "quality-checked";
  gradeLevel?: "10" | "VG1" | "VG2" | "VG3";
  isExample?: boolean;
  exampleNumber?: number;
  onlineExamUrl?: string;
}

export interface SolutionAuthor {
  name: string;
  url?: string;
}

export interface ExamPart {
  partNumber: 1 | 2;
  type: "uten-hjelpemidler" | "med-hjelpemidler" | "komplett" | "muntlig-praktisk" | "muntlig" | "skriftlig" | "online";
  pdfUrl?: string;
  externalUrl?: string;
  isOnlineExam?: boolean;
  solutionAvailable?: boolean;
  solutionPdfUrl?: string;
  solutionHtmlUrl?: string; // For inline HTML solution display
  solutionAuthor?: SolutionAuthor;
  solutionContent?: string; // For LaTeX/markdown content
  examGuidanceUrl?: string;
  assessmentFormUrl?: string;
  questions?: Question[];
  solutions?: Solution[];
}

export interface Question {
  id: string;
  examId: string;
  partNumber: number;
  questionNumber: string;
  content: string;
  points?: number;
  topic?: string;
}

export interface Solution {
  id: string;
  questionId: string;
  content: string;
  qualityChecked: boolean;
  explanation?: string;
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  levels: Level[];
  description?: string;
  icon?: string;
  color?: string;
}

export interface Level {
  id: string;
  name: string;
  subjectId: string;
  yearLevel: 1 | 2 | 3 | 10;
  curriculum: string[];
  description?: string;
  examType?: 'written' | 'oral-practical';
  oralPracticalInfoUrl?: string;
}

export interface SubjectGroup {
  name: string;
  subjects: Subject[];
}