import type {
  PersonalityTrait,
  PersonalityAnswer,
  TraitScore,
  FacetScore,
  Facet,
  PersonalityResult,
} from '@/lib/types/personality-test';
import { TRAIT_ORDER } from '@/lib/types/personality-test';

// IPIP normative data (approximate means and SDs for 1-5 scale)
const NORMS: Record<PersonalityTrait, { mean: number; sd: number }> = {
  openness: { mean: 3.55, sd: 0.60 },
  conscientiousness: { mean: 3.45, sd: 0.65 },
  extraversion: { mean: 3.25, sd: 0.70 },
  agreeableness: { mean: 3.65, sd: 0.55 },
  neuroticism: { mean: 2.85, sd: 0.70 },
};

// Facets grouped by trait
const TRAIT_FACETS: Record<PersonalityTrait, Facet[]> = {
  openness: ['imagination', 'artistic_interests', 'intellectual_curiosity'],
  conscientiousness: ['self_discipline', 'orderliness', 'achievement_striving'],
  extraversion: ['sociability', 'assertiveness', 'positive_emotions'],
  agreeableness: ['trust', 'cooperation', 'empathy'],
  neuroticism: ['anxiety', 'emotional_volatility', 'self_consciousness'],
};

/**
 * Normal CDF approximation (Abramowitz & Stegun)
 */
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

function getPercentile(mean: number, trait: PersonalityTrait): number {
  const norm = NORMS[trait];
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

export function calculatePersonalityResult(answers: PersonalityAnswer[]): PersonalityResult {
  const traitScores = {} as Record<PersonalityTrait, TraitScore>;

  for (const trait of TRAIT_ORDER) {
    const traitAnswers = answers.filter(a => a.trait === trait);

    // Calculate trait mean
    const rawMean = traitAnswers.length > 0
      ? traitAnswers.reduce((sum, a) => sum + a.effectiveScore, 0) / traitAnswers.length
      : 3;

    // Calculate percentile
    const percentile = getPercentile(rawMean, trait);

    // Calculate facet scores
    const facetScores: FacetScore[] = TRAIT_FACETS[trait].map(facet => {
      const facetAnswers = traitAnswers.filter(a => a.facet === facet);
      const facetMean = facetAnswers.length > 0
        ? facetAnswers.reduce((sum, a) => sum + a.effectiveScore, 0) / facetAnswers.length
        : 3;
      return {
        facet,
        mean: Math.round(facetMean * 100) / 100,
        items: facetAnswers.length,
      };
    });

    traitScores[trait] = {
      trait,
      rawMean: Math.round(rawMean * 100) / 100,
      percentile,
      facetScores,
      label: getLabel(percentile),
    };
  }

  return {
    traitScores,
    answers,
    completedAt: new Date().toISOString(),
  };
}

/**
 * Calculate effective score for a single item.
 * Reversed items: effectiveScore = 6 - rawScore
 */
export function getEffectiveScore(rawScore: number, reversed: boolean): number {
  return reversed ? 6 - rawScore : rawScore;
}
