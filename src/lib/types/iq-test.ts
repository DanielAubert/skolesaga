export type CognitiveDomain =
  | 'tallresonnering'
  | 'verbal'
  | 'logisk'
  | 'monstergjenkjenning'
  | 'romlig'
  | 'arbeidsminne';

export interface IQQuestion {
  id: string;
  domain: CognitiveDomain;
  difficulty: number; // IRT b-parameter (-3 til +3)
  question: string;
  options: string[];
  correctIndex: number; // 0-3
  explanation: string;
}

export interface IQAnswer {
  questionId: string;
  domain: CognitiveDomain;
  difficulty: number;
  selectedIndex: number;
  correct: boolean;
  timeSpent: number; // sekunder
}

export interface CATState {
  theta: number;
  se: number;
  answeredQuestions: IQAnswer[];
  remainingQuestionIds: string[];
  domainCounts: Record<CognitiveDomain, number>;
}

export interface DomainScore {
  correct: number;
  total: number;
  avgDifficulty: number;
  percentile: number;
}

export interface IQResult {
  estimatedIQ: number;
  confidenceInterval: { low: number; high: number };
  se: number;
  totalQuestions: number;
  correctCount: number;
  domainScores: Record<CognitiveDomain, DomainScore>;
  answers: IQAnswer[];
  completedAt: string;
  aiAnalysis?: string;
}

export const DOMAIN_LABELS: Record<CognitiveDomain, string> = {
  tallresonnering: 'Tallresonnering',
  verbal: 'Verbal resonnering',
  logisk: 'Logisk resonnering',
  monstergjenkjenning: 'Mønstergjenkjenning',
  romlig: 'Romlig resonnering',
  arbeidsminne: 'Arbeidsminne',
};

export const DOMAIN_COLORS: Record<CognitiveDomain, string> = {
  tallresonnering: 'from-blue-500 to-indigo-600',
  verbal: 'from-emerald-500 to-teal-600',
  logisk: 'from-purple-500 to-violet-600',
  monstergjenkjenning: 'from-amber-500 to-orange-600',
  romlig: 'from-rose-500 to-pink-600',
  arbeidsminne: 'from-cyan-500 to-sky-600',
};
