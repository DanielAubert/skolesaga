'use client';

import { useState, useEffect } from 'react';

interface SkipLink {
  href: string;
  label: string;
}

const defaultSkipLinks: SkipLink[] = [
  { href: '#main-content', label: 'Hopp til hovedinnhold' },
  { href: '#navigation', label: 'Hopp til navigasjon' },
];

interface SkipNavProps {
  links?: SkipLink[];
}

export function SkipNav({ links = defaultSkipLinks }: SkipNavProps) {
  const [availableLinks, setAvailableLinks] = useState<SkipLink[]>([]);

  useEffect(() => {
    // Sjekk hvilke lenker som faktisk finnes på siden
    const available = links.filter(link => {
      const id = link.href.replace('#', '');
      return document.getElementById(id) !== null;
    });
    setAvailableLinks(available.length > 0 ? available : [links[0]]);
  }, [links]);

  return (
    <div className="skip-nav-container">
      {availableLinks.map((link, index) => (
        <a
          key={link.href}
          href={link.href}
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:shadow-lg"
          style={{ top: `${1 + index * 3}rem`, left: '1rem' }}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

// Visuelt skjult tekst for skjermlesere
export function VisuallyHidden({ children }: { children: React.ReactNode }) {
  return (
    <span className="sr-only">
      {children}
    </span>
  );
}

// Live-region for dynamiske oppdateringer
export function LiveRegion({
  children,
  politeness = 'polite',
  atomic = true,
}: {
  children: React.ReactNode;
  politeness?: 'polite' | 'assertive' | 'off';
  atomic?: boolean;
}) {
  return (
    <div
      role="status"
      aria-live={politeness}
      aria-atomic={atomic}
      className="sr-only"
    >
      {children}
    </div>
  );
}

// Fokus-trap for modaler og dialoger
export function useFocusTrap(containerRef: React.RefObject<HTMLElement | null>, isActive: boolean) {
  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const focusableElements = container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    // Fokuser første element når trap aktiveres
    firstElement?.focus();

    container.addEventListener('keydown', handleKeyDown);
    return () => container.removeEventListener('keydown', handleKeyDown);
  }, [containerRef, isActive]);
}

// Announce for skjermlesere
export function useAnnounce() {
  const announce = (message: string, politeness: 'polite' | 'assertive' = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', politeness);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);

    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  return announce;
}
