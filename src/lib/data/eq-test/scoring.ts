import type { EQDimension, EQAnswer, DimensionScore, EQResult } from '@/lib/types/eq-test';
import { DIMENSION_ORDER } from '@/lib/types/eq-test';

const NORMS: Record<EQDimension, { mean: number; sd: number }> = {
  selfAwareness: { mean: 3.20, sd: 0.75 },
  selfRegulation: { mean: 3.00, sd: 0.80 },
  motivation: { mean: 3.40, sd: 0.72 },
  empathy: { mean: 3.35, sd: 0.73 },
  socialSkills: { mean: 3.25, sd: 0.78 },
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

function getPercentile(mean: number, dimension: EQDimension): number {
  const norm = NORMS[dimension];
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

export function calculateEQResult(answers: EQAnswer[]): EQResult {
  const dimensionScores = {} as Record<EQDimension, DimensionScore>;

  for (const dim of DIMENSION_ORDER) {
    const dimAnswers = answers.filter(a => a.dimension === dim);
    const rawMean = dimAnswers.length > 0
      ? dimAnswers.reduce((sum, a) => sum + a.effectiveScore, 0) / dimAnswers.length
      : 3;
    const percentile = getPercentile(rawMean, dim);

    dimensionScores[dim] = {
      dimension: dim,
      rawMean: Math.round(rawMean * 100) / 100,
      percentile,
      label: getLabel(percentile),
    };
  }

  // Total EQ = average of all dimension percentiles
  const totalEQ = Math.round(
    DIMENSION_ORDER.reduce((sum, d) => sum + dimensionScores[d].percentile, 0) / DIMENSION_ORDER.length
  );

  // Dominant dimension = highest percentile
  const sorted = DIMENSION_ORDER
    .map(d => dimensionScores[d])
    .sort((a, b) => b.percentile - a.percentile);
  const dominantDimension = sorted[0].dimension;

  return {
    dimensionScores,
    totalEQ,
    dominantDimension,
    answers,
    completedAt: new Date().toISOString(),
  };
}
