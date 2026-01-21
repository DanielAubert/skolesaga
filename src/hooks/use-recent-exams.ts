/**
 * MODULAR FEATURE: Recent Exams Tracking
 * Can be easily removed by:
 * 1. Delete this file
 * 2. Remove useRecentExams calls from components
 * 3. Remove RecentExams UI component
 */

'use client';

import { useEffect, useState } from 'react';

export interface RecentExam {
  id: string;
  subject: string;
  level: string;
  year: number;
  semester: string;
  timestamp: number;
}

const STORAGE_KEY = 'eksamenssett-recent-exams';
const MAX_RECENT = 10;

export function useRecentExams() {
  const [recentExams, setRecentExams] = useState<RecentExam[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setRecentExams(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Failed to load recent exams:', error);
    }
  }, []);

  const addRecentExam = (exam: Omit<RecentExam, 'timestamp'>) => {
    const newExam: RecentExam = {
      ...exam,
      timestamp: Date.now(),
    };

    setRecentExams((prev) => {
      // Remove duplicate if exists
      const filtered = prev.filter((e) => e.id !== exam.id);
      // Add to front and limit to MAX_RECENT
      const updated = [newExam, ...filtered].slice(0, MAX_RECENT);

      // Save to localStorage
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (error) {
        console.error('Failed to save recent exams:', error);
      }

      return updated;
    });
  };

  const clearRecentExams = () => {
    setRecentExams([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Failed to clear recent exams:', error);
    }
  };

  return {
    recentExams,
    addRecentExam,
    clearRecentExams,
  };
}
