/**
 * Singleton for ComputeEngine fra @cortex-js/compute-engine
 * Brukes for symbolsk matematikk i ReAct AI-læreren
 */

import { ComputeEngine } from '@cortex-js/compute-engine';

let ce: ComputeEngine | null = null;

/**
 * Hent singleton-instans av ComputeEngine.
 * Oppretter ny instans hvis den ikke eksisterer.
 */
export function getComputeEngine(): ComputeEngine {
  if (!ce) {
    ce = new ComputeEngine();
    // Sett desimalseparator til komma for norsk format
    ce.decimalSeparator = '{,}';
  }
  return ce;
}

/**
 * Reset ComputeEngine (for testing)
 */
export function resetComputeEngine(): void {
  ce = null;
}
