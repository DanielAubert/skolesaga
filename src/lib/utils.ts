import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Scroll-oppførsel som respekterer «prefers-reduced-motion» (WCAG 2.3.3).
 *
 * CSS-regelen i globals.css setter `scroll-behavior: auto`, men den slår ikke
 * gjennom når JS sender `behavior: 'smooth'` eksplisitt til scrollTo/
 * scrollIntoView — options-verdien vinner over CSS. Bruk denne i stedet.
 */
export function scrollBehavior(): ScrollBehavior {
  if (typeof window === "undefined" || !window.matchMedia) return "smooth"
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth"
}
