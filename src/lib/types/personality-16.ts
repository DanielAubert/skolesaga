export type Dimension = 'EI' | 'SN' | 'TF' | 'JP';

export type TypeLetter = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

export type PersonalityType = string; // e.g. "INFJ"

export interface P16Item {
  id: string;
  dimension: Dimension;
  text: string;
  /** Which pole does agreeing favor? E.g. 'E' means agreeing = more E */
  pole: TypeLetter;
}

export interface P16Answer {
  itemId: string;
  dimension: Dimension;
  pole: TypeLetter;
  score: number; // 1-5
  timeSpent: number;
}

export interface DimensionScore {
  dimension: Dimension;
  poleA: TypeLetter;
  poleB: TypeLetter;
  scoreA: number; // 0-100 percentage
  scoreB: number;
  winner: TypeLetter;
}

export interface P16Result {
  type: string; // e.g. "INFJ"
  dimensions: Record<Dimension, DimensionScore>;
  answers: P16Answer[];
  completedAt: string;
  aiAnalysis?: string;
}

export const DIMENSION_LABELS: Record<Dimension, [string, string]> = {
  EI: ['Ekstrovert (E)', 'Introvert (I)'],
  SN: ['Sansende (S)', 'Intuitiv (N)'],
  TF: ['Tenkende (T)', 'Følende (F)'],
  JP: ['Dømmende (J)', 'Oppfattende (P)'],
};

export const DIMENSION_DESCRIPTIONS: Record<Dimension, string> = {
  EI: 'Hvor du henter energi — fra mennesker eller fra alenetid',
  SN: 'Hvordan du tar inn informasjon — konkret eller abstrakt',
  TF: 'Hvordan du tar beslutninger — med logikk eller følelser',
  JP: 'Hvordan du forholder deg til verden — strukturert eller fleksibelt',
};

export const DIMENSION_COLORS: Record<Dimension, string> = {
  EI: 'from-orange-500 to-amber-600',
  SN: 'from-emerald-500 to-teal-600',
  TF: 'from-rose-500 to-pink-600',
  JP: 'from-violet-500 to-purple-600',
};

export const DIMENSION_CHART_COLORS: Record<Dimension, [string, string]> = {
  EI: ['#f97316', '#6366f1'],
  SN: ['#10b981', '#8b5cf6'],
  TF: ['#3b82f6', '#f43f5e'],
  JP: ['#a855f7', '#22c55e'],
};

export const DIMENSION_ORDER: Dimension[] = ['EI', 'SN', 'TF', 'JP'];

export const TYPE_NICKNAMES: Record<string, string> = {
  ISTJ: 'Inspektøren',
  ISFJ: 'Beskytteren',
  INFJ: 'Advokaten',
  INTJ: 'Arkitekten',
  ISTP: 'Virtuosen',
  ISFP: 'Eventyreren',
  INFP: 'Mediatoren',
  INTP: 'Tenkeren',
  ESTP: 'Entreprenøren',
  ESFP: 'Underholdaren',
  ENFP: 'Aktivisten',
  ENTP: 'Debattanten',
  ESTJ: 'Direktøren',
  ESFJ: 'Konsulen',
  ENFJ: 'Protagonisten',
  ENTJ: 'Kommandøren',
};

export const TYPE_DESCRIPTIONS: Record<string, string> = {
  ISTJ: 'Pålitelig, grundig og ansvarlig. Verdsetter tradisjon og orden.',
  ISFJ: 'Varm, hensynsfull og lojal. Beskytter de rundt seg med omsorg.',
  INFJ: 'Idealistisk, innsiktsfull og bestemt. Drives av sterke verdier.',
  INTJ: 'Strategisk, uavhengig og visjonær. Ser mønstre andre ikke ser.',
  ISTP: 'Praktisk, analytisk og tilpasningsdyktig. Mestrer verktøy og systemer.',
  ISFP: 'Følsom, kreativ og jordnær. Lever i øyeblikket med sterke verdier.',
  INFP: 'Idealistisk, empatisk og kreativ. Søker mening og autentisitet.',
  INTP: 'Logisk, oppfinnsom og nysgjerrig. Elsker å løse komplekse problemer.',
  ESTP: 'Energisk, pragmatisk og modig. Lever for action og spenning.',
  ESFP: 'Spontan, sjenerøs og underholdende. Sprer glede overalt.',
  ENFP: 'Entusiastisk, kreativ og sosial. Ser muligheter overalt.',
  ENTP: 'Skarpsinnig, oppfinnsom og utfordrende. Elsker intellektuelle debatter.',
  ESTJ: 'Organisert, besluttsom og direkte. Naturlig leder som får ting gjort.',
  ESFJ: 'Omsorgsfull, sosial og samvittighetsfull. Skaper harmoni rundt seg.',
  ENFJ: 'Karismatisk, empatisk og inspirerende. Motiverer andre til å vokse.',
  ENTJ: 'Ambisiøs, strategisk og selvsikker. Født leder med visjon.',
};
