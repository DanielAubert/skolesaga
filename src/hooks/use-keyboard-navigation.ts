'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getAdjacentChapters } from '@/lib/data/book-chapters';

/**
 * Hook for keyboard navigation between chapters
 * Enables arrow keys (← →) to navigate prev/next
 */
export function useKeyboardNavigation(currentChapterId: string) {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ignore if user is typing in an input/textarea/editor
      const target = event.target as HTMLElement;
      const isEditing =
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.contentEditable === 'true' ||
        target.closest('.monaco-editor'); // Monaco editor

      if (isEditing) return;

      const { prev, next } = getAdjacentChapters(currentChapterId);

      // Left arrow - previous chapter
      if (event.key === 'ArrowLeft' && prev) {
        event.preventDefault();
        router.push(prev.url);
      }

      // Right arrow - next chapter
      if (event.key === 'ArrowRight' && next) {
        event.preventDefault();
        router.push(next.url);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentChapterId, router]);
}
