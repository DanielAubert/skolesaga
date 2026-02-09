import type { LearningStyle, LearningAnswer, StyleScore, LearningResult } from '@/lib/types/learning-style';
import { STYLE_ORDER } from '@/lib/types/learning-style';

const NORMS: Record<LearningStyle, { mean: number; sd: number }> = {
  visual: { mean: 3.30, sd: 0.70 },
  auditory: { mean: 3.15, sd: 0.75 },
  readwrite: { mean: 3.20, sd: 0.70 },
  kinesthetic: { mean: 3.25, sd: 0.75 },
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

function getPercentile(mean: number, style: LearningStyle): number {
  const norm = NORMS[style];
  const z = (mean - norm.mean) / norm.sd;
  return Math.round(normalCDF(z) * 100);
}

function getLabel(percentile: number): string {
  if (percentile >= 85) return 'Svært sterk';
  if (percentile >= 65) return 'Sterk';
  if (percentile >= 35) return 'Moderat';
  if (percentile >= 15) return 'Svak';
  return 'Svært svak';
}

export function getEffectiveScore(rawScore: number, reversed: boolean): number {
  return reversed ? 6 - rawScore : rawScore;
}

export function calculateLearningResult(answers: LearningAnswer[]): LearningResult {
  const styleScores = {} as Record<LearningStyle, StyleScore>;

  for (const style of STYLE_ORDER) {
    const styleAnswers = answers.filter(a => a.style === style);
    const rawMean = styleAnswers.length > 0
      ? styleAnswers.reduce((sum, a) => sum + a.effectiveScore, 0) / styleAnswers.length
      : 3;
    const percentile = getPercentile(rawMean, style);

    styleScores[style] = {
      style,
      rawMean: Math.round(rawMean * 100) / 100,
      percentile,
      label: getLabel(percentile),
    };
  }

  const sorted = STYLE_ORDER
    .map(s => styleScores[s])
    .sort((a, b) => b.percentile - a.percentile);

  return {
    styleScores,
    dominantStyle: sorted[0].style,
    secondaryStyle: sorted[1].style,
    answers,
    completedAt: new Date().toISOString(),
  };
}
