/**
 * MODULAR FEATURE: Keyboard Shortcuts
 * Can be easily removed by:
 * 1. Delete this file
 * 2. Remove useKeyboardShortcuts calls from pages
 * 3. Remove KeyboardShortcutsHelp component
 */

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface ShortcutConfig {
  key: string;
  ctrl?: boolean;
  shift?: boolean;
  alt?: boolean;
  action: () => void;
  description: string;
}

export function useKeyboardShortcuts(shortcuts: ShortcutConfig[]) {
  const _router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const matchingShortcut = shortcuts.find((shortcut) => {
        const keyMatches = event.key.toLowerCase() === shortcut.key.toLowerCase();
        const ctrlMatches = !!shortcut.ctrl === (event.ctrlKey || event.metaKey);
        const shiftMatches = !!shortcut.shift === event.shiftKey;
        const altMatches = !!shortcut.alt === event.altKey;

        return keyMatches && ctrlMatches && shiftMatches && altMatches;
      });

      if (matchingShortcut) {
        event.preventDefault();
        matchingShortcut.action();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [shortcuts]);
}

// Common shortcuts that can be used across pages
export function useCommonShortcuts() {
  const router = useRouter();

  useKeyboardShortcuts([
    {
      key: 'h',
      ctrl: true,
      description: 'Gå til forsiden',
      action: () => router.push('/'),
    },
    {
      key: 's',
      ctrl: true,
      description: 'Åpne søk',
      action: () => router.push('/sok'),
    },
    {
      key: 'k',
      ctrl: true,
      description: 'Vis hurtigtaster',
      action: () => {
        // This will be handled by the KeyboardShortcutsHelp component
        window.dispatchEvent(new CustomEvent('toggle-shortcuts-help'));
      },
    },
  ]);
}
