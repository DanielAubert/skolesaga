import type { CATState, CognitiveDomain, IQAnswer, IQQuestion, IQResult, DomainScore } from '@/lib/types/iq-test';

const ALL_DOMAINS: CognitiveDomain[] = [
  'tallresonnering', 'verbal', 'logisk',
  'monstergjenkjenning', 'romlig', 'arbeidsminne',
];

const MAX_QUESTIONS = 35;
const SE_THRESHOLD = 0.3;

/** Initialiser CAT-state */
export function initCAT(allQuestions: IQQuestion[]): CATState {
  const domainCounts = {} as Record<CognitiveDomain, number>;
  for (const d of ALL_DOMAINS) domainCounts[d] = 0;

  return {
    theta: 0,
    se: 3.0,
    answeredQuestions: [],
    remainingQuestionIds: allQuestions.map(q => q.id),
    domainCounts,
  };
}

/** Velg neste spørsmål — nærmest theta, balansert domene */
export function selectNextQuestion(
  state: CATState,
  allQuestions: IQQuestion[],
): IQQuestion | null {
  const remaining = allQuestions.filter(q =>
    state.remainingQuestionIds.includes(q.id)
  );
  if (remaining.length === 0) return null;

  // Finn domene med færrest besvarte spørsmål
  const minCount = Math.min(...ALL_DOMAINS.map(d => state.domainCounts[d]));
  const underrepresentedDomains = ALL_DOMAINS.filter(
    d => state.domainCounts[d] === minCount
  );

  // Filtrer til underrepresenterte domener hvis mulig
  let candidates = remaining.filter(q =>
    underrepresentedDomains.includes(q.domain)
  );
  if (candidates.length === 0) candidates = remaining;

  // Velg spørsmål med difficulty nærmest theta (maks informasjon)
  candidates.sort((a, b) =>
    Math.abs(a.difficulty - state.theta) - Math.abs(b.difficulty - state.theta)
  );

  // Legg til litt randomisering blant topp 3 for variasjon
  const topN = Math.min(3, candidates.length);
  const idx = Math.floor(Math.random() * topN);
  return candidates[idx];
}

/** Oppdater theta med Newton-Raphson MLE */
export function updateTheta(
  state: CATState,
  question: IQQuestion,
  correct: boolean,
  timeSpent: number,
): CATState {
  const answer: IQAnswer = {
    questionId: question.id,
    domain: question.domain,
    difficulty: question.difficulty,
    selectedIndex: -1, // settes av caller
    correct,
    timeSpent,
  };

  const newAnswers = [...state.answeredQuestions, answer];
  const newRemaining = state.remainingQuestionIds.filter(id => id !== question.id);
  const newDomainCounts = { ...state.domainCounts };
  newDomainCounts[question.domain]++;

  // Newton-Raphson MLE for theta
  let theta = state.theta;
  const MAX_ITER = 50;
  const EPSILON = 0.001;

  for (let iter = 0; iter < MAX_ITER; iter++) {
    let firstDerivative = 0;
    let secondDerivative = 0;

    for (const ans of newAnswers) {
      const p = irtProbability(theta, ans.difficulty);
      const u = ans.correct ? 1 : 0;
      firstDerivative += (u - p);
      secondDerivative -= p * (1 - p);
    }

    if (Math.abs(secondDerivative) < 1e-10) break;

    const delta = firstDerivative / secondDerivative;
    theta -= delta;

    // Begrens theta til rimelig range
    theta = Math.max(-4, Math.min(4, theta));

    if (Math.abs(delta) < EPSILON) break;
  }

  // Beregn standard error
  let fisher = 0;
  for (const ans of newAnswers) {
    const p = irtProbability(theta, ans.difficulty);
    fisher += p * (1 - p);
  }
  const se = fisher > 0 ? 1 / Math.sqrt(fisher) : 3.0;

  return {
    theta,
    se,
    answeredQuestions: newAnswers,
    remainingQuestionIds: newRemaining,
    domainCounts: newDomainCounts,
  };
}

/** Sjekk om testen bør stoppe */
export function shouldStop(state: CATState): boolean {
  if (state.answeredQuestions.length >= MAX_QUESTIONS) return true;
  if (state.answeredQuestions.length >= 10 && state.se < SE_THRESHOLD) return true;
  return false;
}

/** IRT 1PL sannsynlighet (eksportert alias) */
export function irtProbability(theta: number, b: number): number {
  return 1 / (1 + Math.exp(-(theta - b)));
}

/** Konverter theta til IQ-poeng */
function thetaToIQ(theta: number): number {
  return Math.round(100 + 15 * theta);
}

/** Normalfordeling CDF (tilnærming) */
function normalCDF(x: number): number {
  const t = 1 / (1 + 0.2316419 * Math.abs(x));
  const d = 0.3989422804014327;
  const p = d * Math.exp(-x * x / 2) *
    (t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274)))));
  return x > 0 ? 1 - p : p;
}

/** Beregn endelig resultat */
export function calculateResult(state: CATState): IQResult {
  const iq = thetaToIQ(state.theta);
  const ciMargin = 1.96 * 15 * state.se;

  // Domenescorer
  const domainScores = {} as Record<CognitiveDomain, DomainScore>;

  for (const domain of ALL_DOMAINS) {
    const domainAnswers = state.answeredQuestions.filter(a => a.domain === domain);
    const correct = domainAnswers.filter(a => a.correct).length;
    const total = domainAnswers.length;

    let avgDifficulty = 0;
    if (total > 0) {
      avgDifficulty = domainAnswers.reduce((sum, a) => sum + a.difficulty, 0) / total;
    }

    // Domene-theta: gjennomsnittlig difficulty av riktige svar
    let domainTheta = 0;
    const correctAnswers = domainAnswers.filter(a => a.correct);
    if (correctAnswers.length > 0) {
      domainTheta = correctAnswers.reduce((sum, a) => sum + a.difficulty, 0) / correctAnswers.length;
    }

    // Konverter til persentil (basert på normalfordeling)
    const percentile = Math.round(normalCDF(domainTheta) * 100);

    domainScores[domain] = { correct, total, avgDifficulty, percentile };
  }

  const correctCount = state.answeredQuestions.filter(a => a.correct).length;

  return {
    estimatedIQ: iq,
    confidenceInterval: {
      low: Math.round(iq - ciMargin),
      high: Math.round(iq + ciMargin),
    },
    se: state.se,
    totalQuestions: state.answeredQuestions.length,
    correctCount,
    domainScores,
    answers: state.answeredQuestions,
    completedAt: new Date().toISOString(),
  };
}
