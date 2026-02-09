export type EQDimension = 'selfAwareness' | 'selfRegulation' | 'motivation' | 'empathy' | 'socialSkills';

export interface EQItem {
  id: string;
  dimension: EQDimension;
  text: string;
  reversed: boolean;
}

export interface EQAnswer {
  itemId: string;
  dimension: EQDimension;
  score: number; // 1-5
  effectiveScore: number;
  timeSpent: number;
}

export interface DimensionScore {
  dimension: EQDimension;
  rawMean: number;
  percentile: number;
  label: string;
}

export interface EQResult {
  dimensionScores: Record<EQDimension, DimensionScore>;
  totalEQ: number; // overall percentile
  dominantDimension: EQDimension;
  answers: EQAnswer[];
  completedAt: string;
  aiAnalysis?: string;
}

export const DIMENSION_LABELS: Record<EQDimension, string> = {
  selfAwareness: 'Selvbevissthet',
  selfRegulation: 'Selvregulering',
  motivation: 'Motivasjon',
  empathy: 'Empati',
  socialSkills: 'Sosiale ferdigheter',
};

export const DIMENSION_DESCRIPTIONS: Record<EQDimension, string> = {
  selfAwareness: 'Evnen til å gjenkjenne og forstå egne følelser, styrker og svakheter',
  selfRegulation: 'Evnen til å kontrollere impulser, håndtere stress og tilpasse seg endring',
  motivation: 'Indre drivkraft til å sette mål, vise initiativ og stå på tross av motgang',
  empathy: 'Evnen til å forstå andres følelser, perspektiver og behov',
  socialSkills: 'Evnen til å bygge relasjoner, samarbeide, kommunisere og løse konflikter',
};

export const DIMENSION_COLORS: Record<EQDimension, string> = {
  selfAwareness: 'from-violet-500 to-purple-600',
  selfRegulation: 'from-blue-500 to-indigo-600',
  motivation: 'from-amber-500 to-orange-600',
  empathy: 'from-rose-500 to-pink-600',
  socialSkills: 'from-emerald-500 to-teal-600',
};

export const DIMENSION_CHART_COLORS: Record<EQDimension, string> = {
  selfAwareness: '#8b5cf6',
  selfRegulation: '#3b82f6',
  motivation: '#f59e0b',
  empathy: '#f43f5e',
  socialSkills: '#10b981',
};

export const DIMENSION_TIPS: Record<EQDimension, string[]> = {
  selfAwareness: [
    'Skriv dagbok om følelsene dine — hva utløser dem?',
    'Be om ærlig tilbakemelding fra venner og familie',
    'Øv på å sette ord på følelsene dine i øyeblikket',
    'Reflekter over dine reaksjoner i utfordrende situasjoner',
  ],
  selfRegulation: [
    'Prøv pusteøvelser når du kjenner frustrasjon',
    'Telle til 10 før du reagerer i stressende situasjoner',
    'Identifiser dine triggere og lag en plan for å håndtere dem',
    'Øv på mindfulness eller meditasjon regelmessig',
  ],
  motivation: [
    'Sett konkrete, målbare mål for deg selv',
    'Feire små seire underveis — ikke bare det store målet',
    'Finn en mentor eller forbilder som inspirerer deg',
    'Koble oppgaver til dine personlige verdier og interesser',
  ],
  empathy: [
    'Øv på aktiv lytting — gjenta det den andre sier med egne ord',
    'Les skjønnlitteratur for å leve deg inn i andres perspektiver',
    'Still åpne spørsmål for å forstå andres opplevelse',
    'Observer kroppsspråk og ansiktsuttrykk i samtaler',
  ],
  socialSkills: [
    'Øv på å gi konstruktive tilbakemeldinger',
    'Delta i gruppeaktiviteter og frivillig arbeid',
    'Lær deg å håndtere uenigheter uten å bli defensiv',
    'Vis genuin interesse for andres historier og erfaringer',
  ],
};

export const DIMENSION_ORDER: EQDimension[] = [
  'selfAwareness', 'selfRegulation', 'motivation', 'empathy', 'socialSkills',
];
