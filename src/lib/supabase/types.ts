export type ChallengeType =
  | 'pluss-minus'
  | 'tallfolgere'
  | 'divisjon'
  | 'negative'
  | 'blandet'
  // Pluss & Minus module-specific types (10 oppgaver)
  | 'pluss-minus-1'  // Grunnleggende
  | 'pluss-minus-2'  // Ligninger
  | 'pluss-minus-3'  // Addisjon til 10
  | 'pluss-minus-4'  // Addisjon over 10
  | 'pluss-minus-5'  // To-sifrede tall
  | 'pluss-minus-6'  // Til nærmeste tier
  | 'pluss-minus-7'  // Addisjon uten mente
  | 'pluss-minus-8'  // Addisjon med mente
  | 'pluss-minus-9'  // Subtraksjon uten mente
  | 'pluss-minus-10' // Subtraksjon med mente
  // Ganging & Kvadratrot module-specific types (14 oppgaver)
  | 'tallfolgere-1'  // Tallfølger
  | 'tallfolgere-2'  // Tallfølger +
  | 'tallfolgere-3'  // Avanserte tallfølger
  | 'tallfolgere-4'  // Ganging
  | 'tallfolgere-5'  // Blandet regning
  | 'tallfolgere-6'  // Gangestykke
  | 'tallfolgere-7'  // Multiplikasjon 10/100/1000
  | 'tallfolgere-8'  // Gangestykke med 10
  | 'tallfolgere-9'  // Ganging med 5
  | 'tallfolgere-10' // Ganging med 5 (avansert)
  | 'tallfolgere-11' // Ganging 6-14
  | 'tallfolgere-12' // Kvadratrøtter
  | 'tallfolgere-13' // Store tall
  | 'tallfolgere-14' // To-sifret ganging
  // Divisjon & Brøk module-specific types (8 oppgaver)
  | 'divisjon-1'  // Grunnleggende divisjon
  | 'divisjon-2'  // Multiplikasjonsligninger
  | 'divisjon-3'  // Faktorisering
  | 'divisjon-4'  // Divisjon og brøk
  | 'divisjon-5'  // Brøkforenkling
  | 'divisjon-6'  // Desimaltall-addisjon
  | 'divisjon-7'  // Desimaltall-subtraksjon
  | 'divisjon-8'  // Desimaltall-multiplikasjon
  // Negative tall module-specific types (7 oppgaver)
  | 'negative-1'  // Grunnleggende
  | 'negative-2'  // Ligninger
  | 'negative-3'  // Multiplikasjon
  | 'negative-4'  // Regnerekkefølge
  | 'negative-5'  // Divisjon
  | 'negative-6'  // Desimaltall
  | 'negative-7'  // Vanskelig
  // Potenser module-specific types (4 oppgaver)
  | 'potenser'     // Alle potens-oppgaver
  | 'potenser-1'   // Grunnleggende potenser
  | 'potenser-2'   // Potens ganger tall
  | 'potenser-3'   // Produkt av potenser
  | 'potenser-4'   // Blandet potensregning
  // Algebra module-specific types (8 oppgaver)
  | 'algebra'
  | 'algebra-1'    // Addisjon av ledd
  | 'algebra-2'    // Subtraksjon av ledd
  | 'algebra-3'    // Multiplikasjon med tall
  | 'algebra-4'    // Parenteser
  | 'algebra-5'    // Flere parenteser
  | 'algebra-6'    // Blandet bokstavregning
  | 'algebra-7'    // Kvadratsetninger
  | 'algebra-8'    // Avansert
  // Brøkregning module-specific types (5 oppgaver)
  | 'brokregning'
  | 'brokregning-1'  // Multiplikasjon av brøker
  | 'brokregning-2'  // Divisjon av brøker
  | 'brokregning-3'  // Forkorting av brøker
  | 'brokregning-4'  // Addisjon av brøker
  | 'brokregning-5'  // Blandet brøkregning
  // Faktorisering module-specific types (4 oppgaver)
  | 'faktorisering'
  | 'faktorisering-1'  // Første kvadratsetning
  | 'faktorisering-2'  // Andre kvadratsetning
  | 'faktorisering-3'  // Konjugatsetningen
  | 'faktorisering-4'  // Blandet faktorisering
  // Likninger module-specific types (13 oppgaver)
  | 'likninger'
  | 'likninger-1'   // Enkle likninger
  | 'likninger-2'   // Variabel begge sider
  | 'likninger-3'   // Multiplikasjon
  | 'likninger-4'   // Mult. og addisjon
  | 'likninger-5'   // Negativ koeffisient
  | 'likninger-6'   // Divisjon
  | 'likninger-7'   // Brøk i likning
  | 'likninger-8'   // Brøk (avansert)
  | 'likninger-9'   // x i nevner
  | 'likninger-10'  // Komplekse brøker
  | 'likninger-11'  // Parenteser
  | 'likninger-12'  // Flere parenteser
  | 'likninger-13'  // Avanserte parenteser
export type ChallengeStatus = 'waiting' | 'ready' | 'playing' | 'finished'

export interface ChallengeProblem {
  id: number
  expression: string
  answer: number
  answers?: number[] // For problems with multiple answers
}

export interface Challenge {
  id: string
  code: string
  challenge_type: ChallengeType
  status: ChallengeStatus
  problems: ChallengeProblem[]
  host_id: string
  created_at: string
  started_at: string | null
  finished_at: string | null
}

export interface ChallengePlayer {
  id: string
  challenge_id: string
  player_name: string
  player_id: string
  is_host: boolean
  is_ready: boolean
  current_problem: number
  finished_at: string | null
  time_ms: number | null
  created_at: string
}

// Database types for Supabase
export interface Database {
  public: {
    Tables: {
      challenges: {
        Row: Challenge
        Insert: Omit<Challenge, 'id' | 'created_at'> & { id?: string; created_at?: string }
        Update: Partial<Challenge>
      }
      challenge_players: {
        Row: ChallengePlayer
        Insert: Omit<ChallengePlayer, 'id' | 'created_at'> & { id?: string; created_at?: string }
        Update: Partial<ChallengePlayer>
      }
    }
  }
}
