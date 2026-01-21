export type { Challenge, ChallengePlayer, ChallengeType, ChallengeStatus, ChallengeProblem } from '@/lib/supabase/types'

export interface PlayerProgress {
  playerId: string
  playerName: string
  currentProblem: number
  isFinished: boolean
  timeMs: number | null
}

export interface ChallengeState {
  challenge: import('@/lib/supabase/types').Challenge | null
  players: import('@/lib/supabase/types').ChallengePlayer[]
  currentPlayerId: string | null
  isLoading: boolean
  error: string | null
}
