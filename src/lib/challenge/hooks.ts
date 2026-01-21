'use client'

import { useEffect, useState, useCallback } from 'react'
import { supabase } from '@/lib/supabase/client'
import type { Challenge, ChallengePlayer } from '@/lib/supabase/types'

// Get or create player ID from localStorage
export function usePlayerId() {
  const [playerId, setPlayerId] = useState<string | null>(null)

  useEffect(() => {
    let id = localStorage.getItem('challenge-player-id')
    if (!id) {
      id = crypto.randomUUID()
      localStorage.setItem('challenge-player-id', id)
    }
    setPlayerId(id)
  }, [])

  return playerId
}

// Get or set player name
export function usePlayerName() {
  const [playerName, setPlayerNameState] = useState<string>('')

  useEffect(() => {
    const name = localStorage.getItem('challenge-player-name') || ''
    setPlayerNameState(name)
  }, [])

  const setPlayerName = useCallback((name: string) => {
    localStorage.setItem('challenge-player-name', name)
    setPlayerNameState(name)
  }, [])

  return [playerName, setPlayerName] as const
}

// Subscribe to challenge updates
export function useChallengeSubscription(challengeId: string | null) {
  const [challenge, setChallenge] = useState<Challenge | null>(null)
  const [players, setPlayers] = useState<ChallengePlayer[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!challengeId) {
      setIsLoading(false)
      return
    }

    // Initial fetch
    const fetchData = async () => {
      setIsLoading(true)
      setError(null)

      try {
        // Fetch challenge
        const { data: challengeData, error: challengeError } = await supabase
          .from('challenges')
          .select('*')
          .eq('id', challengeId)
          .single()

        if (challengeError) throw challengeError
        setChallenge(challengeData as Challenge)

        // Fetch players
        const { data: playersData, error: playersError } = await supabase
          .from('challenge_players')
          .select('*')
          .eq('challenge_id', challengeId)
          .order('created_at', { ascending: true })

        if (playersError) throw playersError
        setPlayers(playersData as ChallengePlayer[])
      } catch (err) {
        setError(err instanceof Error ? err.message : 'En feil oppstod')
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()

    // Subscribe to realtime updates
    const challengeChannel = supabase
      .channel(`challenge-${challengeId}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'challenges',
          filter: `id=eq.${challengeId}`,
        },
        (payload) => {
          if (payload.eventType === 'UPDATE') {
            setChallenge(payload.new as Challenge)
          }
        }
      )
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'challenge_players',
          filter: `challenge_id=eq.${challengeId}`,
        },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setPlayers((prev) => [...prev, payload.new as ChallengePlayer])
          } else if (payload.eventType === 'UPDATE') {
            setPlayers((prev) =>
              prev.map((p) =>
                p.id === (payload.new as ChallengePlayer).id
                  ? (payload.new as ChallengePlayer)
                  : p
              )
            )
          } else if (payload.eventType === 'DELETE') {
            setPlayers((prev) =>
              prev.filter((p) => p.id !== (payload.old as ChallengePlayer).id)
            )
          }
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(challengeChannel)
    }
  }, [challengeId])

  return { challenge, players, isLoading, error, setChallenge, setPlayers }
}

// Find challenge by code
export async function findChallengeByCode(code: string): Promise<Challenge | null> {
  const { data, error } = await supabase
    .from('challenges')
    .select('*')
    .eq('code', code.toUpperCase())
    .single()

  if (error || !data) return null
  return data as Challenge
}

// Create a new challenge
export async function createChallenge(
  challengeType: Challenge['challenge_type'],
  problems: Challenge['problems'],
  code: string,
  hostId: string
): Promise<Challenge | null> {
  const { data, error } = await supabase
    .from('challenges')
    .insert({
      code,
      challenge_type: challengeType,
      status: 'waiting',
      problems,
      host_id: hostId,
    })
    .select()
    .single()

  if (error) {
    console.error('Error creating challenge:', error)
    return null
  }
  return data as Challenge
}

// Join a challenge
export async function joinChallenge(
  challengeId: string,
  playerId: string,
  playerName: string,
  isHost: boolean = false
): Promise<ChallengePlayer | null> {
  const { data, error } = await supabase
    .from('challenge_players')
    .insert({
      challenge_id: challengeId,
      player_id: playerId,
      player_name: playerName,
      is_host: isHost,
      is_ready: false,
      current_problem: 0,
    })
    .select()
    .single()

  if (error) {
    console.error('Error joining challenge:', error)
    return null
  }
  return data as ChallengePlayer
}

// Update player ready status
export async function setPlayerReady(
  playerId: string,
  challengeId: string,
  isReady: boolean
): Promise<boolean> {
  const { error } = await supabase
    .from('challenge_players')
    .update({ is_ready: isReady })
    .eq('player_id', playerId)
    .eq('challenge_id', challengeId)

  return !error
}

// Start the challenge (host only)
export async function startChallenge(challengeId: string): Promise<boolean> {
  const { error } = await supabase
    .from('challenges')
    .update({
      status: 'playing',
      started_at: new Date().toISOString(),
    })
    .eq('id', challengeId)

  return !error
}

// Update player progress
export async function updatePlayerProgress(
  playerId: string,
  challengeId: string,
  currentProblem: number
): Promise<boolean> {
  const { error } = await supabase
    .from('challenge_players')
    .update({ current_problem: currentProblem })
    .eq('player_id', playerId)
    .eq('challenge_id', challengeId)

  return !error
}

// Finish the challenge for a player
// timeMs can be null if the player gave up
export async function finishChallenge(
  playerId: string,
  challengeId: string,
  timeMs: number | null,
  currentProblem?: number
): Promise<boolean> {
  const { error } = await supabase
    .from('challenge_players')
    .update({
      current_problem: currentProblem ?? 15,
      finished_at: new Date().toISOString(),
      time_ms: timeMs,
    })
    .eq('player_id', playerId)
    .eq('challenge_id', challengeId)

  return !error
}

// Mark challenge as finished
export async function markChallengeFinished(challengeId: string): Promise<boolean> {
  const { error } = await supabase
    .from('challenges')
    .update({
      status: 'finished',
      finished_at: new Date().toISOString(),
    })
    .eq('id', challengeId)

  return !error
}
