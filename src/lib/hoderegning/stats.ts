"use client";

const STATS_KEY = "hoderegning-stats";

interface HoderegningStats {
  totalProblems: number;
  dailyProblems: number;
  lastDate: string; // ISO date string (YYYY-MM-DD)
}

function getTodayDate(): string {
  return new Date().toISOString().split("T")[0];
}

function getDefaultStats(): HoderegningStats {
  return {
    totalProblems: 0,
    dailyProblems: 0,
    lastDate: getTodayDate(),
  };
}

export function getStats(): HoderegningStats {
  if (typeof window === "undefined") {
    return getDefaultStats();
  }

  try {
    const stored = localStorage.getItem(STATS_KEY);
    if (!stored) {
      return getDefaultStats();
    }

    const stats: HoderegningStats = JSON.parse(stored);
    const today = getTodayDate();

    // Reset daily count if it's a new day
    if (stats.lastDate !== today) {
      stats.dailyProblems = 0;
      stats.lastDate = today;
      saveStats(stats);
    }

    return stats;
  } catch {
    return getDefaultStats();
  }
}

export function saveStats(stats: HoderegningStats): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch {
    // Ignore storage errors
  }
}

export function incrementProblems(count: number = 1): HoderegningStats {
  const stats = getStats();
  stats.totalProblems += count;
  stats.dailyProblems += count;
  stats.lastDate = getTodayDate();
  saveStats(stats);
  return stats;
}

// React hook for using stats with automatic updates
import { useState, useEffect, useCallback } from "react";

export function useHoderegningStats() {
  const [stats, setStats] = useState<HoderegningStats>(getDefaultStats());

  useEffect(() => {
    setStats(getStats());
  }, []);

  const increment = useCallback((count: number = 1) => {
    const newStats = incrementProblems(count);
    setStats(newStats);
    return newStats;
  }, []);

  const refresh = useCallback(() => {
    setStats(getStats());
  }, []);

  return {
    totalProblems: stats.totalProblems,
    dailyProblems: stats.dailyProblems,
    increment,
    refresh,
  };
}
