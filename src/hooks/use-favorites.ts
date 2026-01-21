/**
 * MODULAR FEATURE: Favorites/Bookmarks
 * Can be easily removed by:
 * 1. Delete this file
 * 2. Remove useFavorites calls from components
 * 3. Remove Favorites UI components
 */

'use client';

import { useEffect, useState } from 'react';
import { useToast } from '@/components/ui/toast';

export interface FavoriteExam {
  id: string;
  subject: string;
  level: string;
  year: number;
  semester: string;
  addedAt: number;
}

const STORAGE_KEY = 'eksamenssett-favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteExam[]>([]);
  const { addToast } = useToast();

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Failed to load favorites:', error);
    }
  }, []);

  const isFavorite = (examId: string) => {
    return favorites.some((fav) => fav.id === examId);
  };

  const toggleFavorite = (exam: Omit<FavoriteExam, 'addedAt'>) => {
    setFavorites((prev) => {
      const exists = prev.some((fav) => fav.id === exam.id);

      let updated: FavoriteExam[];
      if (exists) {
        // Remove from favorites
        updated = prev.filter((fav) => fav.id !== exam.id);
        addToast('Fjernet fra favoritter', 'info');
      } else {
        // Add to favorites
        const newFavorite: FavoriteExam = {
          ...exam,
          addedAt: Date.now(),
        };
        updated = [...prev, newFavorite];
        addToast('Lagt til i favoritter', 'success');
      }

      // Save to localStorage
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (error) {
        console.error('Failed to save favorites:', error);
        addToast('Kunne ikke lagre favoritt', 'error');
      }

      return updated;
    });
  };

  const clearFavorites = () => {
    setFavorites([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
      addToast('Alle favoritter fjernet', 'info');
    } catch (error) {
      console.error('Failed to clear favorites:', error);
    }
  };

  return {
    favorites,
    isFavorite,
    toggleFavorite,
    clearFavorites,
  };
}
