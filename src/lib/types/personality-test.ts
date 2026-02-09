export type PersonalityTrait =
  | 'openness'
  | 'conscientiousness'
  | 'extraversion'
  | 'agreeableness'
  | 'neuroticism';

export type Facet =
  // Åpenhet
  | 'imagination'
  | 'artistic_interests'
  | 'intellectual_curiosity'
  // Planmessighet
  | 'self_discipline'
  | 'orderliness'
  | 'achievement_striving'
  // Ekstroversjon
  | 'sociability'
  | 'assertiveness'
  | 'positive_emotions'
  // Medmenneskelighet
  | 'trust'
  | 'cooperation'
  | 'empathy'
  // Nevrotisisme
  | 'anxiety'
  | 'emotional_volatility'
  | 'self_consciousness';

export interface PersonalityItem {
  id: string;
  trait: PersonalityTrait;
  facet: Facet;
  text: string;
  reversed: boolean;
}

export interface PersonalityAnswer {
  itemId: string;
  trait: PersonalityTrait;
  facet: Facet;
  rawScore: number; // 1-5
  effectiveScore: number; // reversert om nødvendig
  timeSpent: number; // sekunder
}

export interface FacetScore {
  facet: Facet;
  mean: number;
  items: number;
}

export interface TraitScore {
  trait: PersonalityTrait;
  rawMean: number; // 1-5
  percentile: number; // 0-100
  facetScores: FacetScore[];
  label: string;
}

export interface PersonalityResult {
  traitScores: Record<PersonalityTrait, TraitScore>;
  answers: PersonalityAnswer[];
  completedAt: string;
  aiAnalysis?: string;
}

export const TRAIT_LABELS: Record<PersonalityTrait, string> = {
  openness: 'Åpenhet',
  conscientiousness: 'Planmessighet',
  extraversion: 'Ekstroversjon',
  agreeableness: 'Medmenneskelighet',
  neuroticism: 'Nevrotisisme',
};

export const TRAIT_COLORS: Record<PersonalityTrait, string> = {
  openness: 'from-sky-500 to-cyan-600',
  conscientiousness: 'from-emerald-500 to-green-600',
  extraversion: 'from-amber-500 to-yellow-600',
  agreeableness: 'from-rose-500 to-pink-600',
  neuroticism: 'from-indigo-500 to-blue-600',
};

export const TRAIT_CHART_COLORS: Record<PersonalityTrait, string> = {
  openness: '#0ea5e9',
  conscientiousness: '#10b981',
  extraversion: '#f59e0b',
  agreeableness: '#f43f5e',
  neuroticism: '#6366f1',
};

export const FACET_LABELS: Record<Facet, string> = {
  imagination: 'Fantasi',
  artistic_interests: 'Estetisk sans',
  intellectual_curiosity: 'Intellektuell nysgjerrighet',
  self_discipline: 'Selvdisiplin',
  orderliness: 'Orden og struktur',
  achievement_striving: 'Målrettethet',
  sociability: 'Sosialitet',
  assertiveness: 'Selvhevdelse',
  positive_emotions: 'Positive følelser',
  trust: 'Tillit',
  cooperation: 'Samarbeidsvilje',
  empathy: 'Empati',
  anxiety: 'Engstelse',
  emotional_volatility: 'Emosjonell ustabilitet',
  self_consciousness: 'Selvbevissthet',
};

export const LIKERT_LABELS = [
  'Helt uenig',
  'Litt uenig',
  'Nøytral',
  'Litt enig',
  'Helt enig',
] as const;

export const TRAIT_DESCRIPTIONS: Record<PersonalityTrait, string> = {
  openness: 'Kreativitet, nysgjerrighet og åpenhet for nye ideer og opplevelser',
  conscientiousness: 'Organisering, selvdisiplin og evne til å jobbe mot mål',
  extraversion: 'Sosialitet, energi og tendens til å søke stimulering fra andre',
  agreeableness: 'Tillit, samarbeid og omsorg for andre mennesker',
  neuroticism: 'Tendens til å oppleve negative følelser som stress og bekymring',
};

export const TRAIT_ORDER: PersonalityTrait[] = [
  'openness',
  'conscientiousness',
  'extraversion',
  'agreeableness',
  'neuroticism',
];
