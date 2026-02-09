import type { RIASECArea, RIASECAnswer, AreaScore, RIASECResult } from '@/lib/types/riasec';
import { AREA_ORDER } from '@/lib/types/riasec';

// Approximate norms for RIASEC (1-5 Likert scale)
const NORMS: Record<RIASECArea, { mean: number; sd: number }> = {
  R: { mean: 2.90, sd: 0.85 },
  I: { mean: 3.20, sd: 0.75 },
  A: { mean: 3.10, sd: 0.80 },
  S: { mean: 3.50, sd: 0.70 },
  E: { mean: 3.00, sd: 0.80 },
  C: { mean: 3.05, sd: 0.75 },
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

function getPercentile(mean: number, area: RIASECArea): number {
  const norm = NORMS[area];
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

export function calculateRIASECResult(answers: RIASECAnswer[]): RIASECResult {
  const areaScores = {} as Record<RIASECArea, AreaScore>;

  for (const area of AREA_ORDER) {
    const areaAnswers = answers.filter(a => a.area === area);
    const rawMean = areaAnswers.length > 0
      ? areaAnswers.reduce((sum, a) => sum + a.effectiveScore, 0) / areaAnswers.length
      : 3;
    const percentile = getPercentile(rawMean, area);

    areaScores[area] = {
      area,
      rawMean: Math.round(rawMean * 100) / 100,
      percentile,
      label: getLabel(percentile),
    };
  }

  // Holland code = top 3 areas by percentile
  const sorted = AREA_ORDER
    .map(a => areaScores[a])
    .sort((a, b) => b.percentile - a.percentile);
  const hollandCode = sorted.slice(0, 3).map(s => s.area).join('');

  return {
    areaScores,
    hollandCode,
    answers,
    completedAt: new Date().toISOString(),
  };
}
