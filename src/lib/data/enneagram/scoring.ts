import type { EnneagramType, EnneagramAnswer, TypeScore, EnneagramResult } from '@/lib/types/enneagram';
import { ENNEAGRAM_ORDER } from '@/lib/types/enneagram';

const NORMS: Record<EnneagramType, { mean: number; sd: number }> = {
  1: { mean: 3.30, sd: 0.70 },
  2: { mean: 3.50, sd: 0.72 },
  3: { mean: 3.20, sd: 0.75 },
  4: { mean: 3.00, sd: 0.80 },
  5: { mean: 3.10, sd: 0.78 },
  6: { mean: 3.25, sd: 0.72 },
  7: { mean: 3.40, sd: 0.75 },
  8: { mean: 3.05, sd: 0.80 },
  9: { mean: 3.45, sd: 0.70 },
};

function normalCDF(x: number): number {
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;

  const sign = x < 0 ? -1 : 1;
  const absX = Math.abs(x);
  const t = 1.0 / (1.0 + p * absX);
  const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-absX * absX / 2);

  return 0.5 * (1.0 + sign * y);
}

function getPercentile(mean: number, type: EnneagramType): number {
  const norm = NORMS[type];
  const z = (mean - norm.mean) / norm.sd;
  return Math.round(normalCDF(z) * 100);
}

function getLabel(percentile: number): string {
  if (percentile >= 85) return 'Svært høy';
  if (percentile >= 65) return 'Høy';
  if (percentile >= 35) return 'Gjennomsnittlig';
  if (percentile >= 15) return 'Lav';
  return 'Svært lav';
}

export function getEffectiveScore(rawScore: number, reversed: boolean): number {
  return reversed ? 6 - rawScore : rawScore;
}

function getWing(dominantType: EnneagramType, typeScores: Record<EnneagramType, TypeScore>): EnneagramType {
  // Wings are the two adjacent types on the Enneagram circle
  const wingA = dominantType === 1 ? 9 : (dominantType - 1) as EnneagramType;
  const wingB = dominantType === 9 ? 1 : (dominantType + 1) as EnneagramType;

  return typeScores[wingA].rawMean >= typeScores[wingB].rawMean ? wingA : wingB;
}

export function calculateEnneagramResult(answers: EnneagramAnswer[]): EnneagramResult {
  const typeScores = {} as Record<EnneagramType, TypeScore>;

  for (const type of ENNEAGRAM_ORDER) {
    const typeAnswers = answers.filter(a => a.type === type);
    const rawMean = typeAnswers.length > 0
      ? typeAnswers.reduce((sum, a) => sum + a.effectiveScore, 0) / typeAnswers.length
      : 3;
    const percentile = getPercentile(rawMean, type);

    typeScores[type] = {
      type,
      rawMean: Math.round(rawMean * 100) / 100,
      percentile,
      label: getLabel(percentile),
    };
  }

  // Dominant type = highest rawMean
  const sorted = ENNEAGRAM_ORDER
    .map(t => typeScores[t])
    .sort((a, b) => b.rawMean - a.rawMean);
  const dominantType = sorted[0].type;
  const wing = getWing(dominantType, typeScores);

  return {
    typeScores,
    dominantType,
    wing,
    answers,
    completedAt: new Date().toISOString(),
  };
}
