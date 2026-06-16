/**
 * Målform (bokmål / nynorsk) — felles konstanter og server-helper.
 *
 * Valget lagres i en cookie ("malform") slik at server-komponenter kan
 * rendre riktig språk ved SSR. Klienten setter cookien via toggle-knappen.
 */
import { cookies } from 'next/headers';
import type { Malform } from '@/lib/data/textbook-content';

export type { Malform };

export const MALFORM_COOKIE = 'malform';

export function isMalform(v: unknown): v is Malform {
  return v === 'nb' || v === 'nn';
}

/** Les valgt målform fra cookie (server-komponenter). Default: bokmål. */
export async function getMalform(): Promise<Malform> {
  const store = await cookies();
  const v = store.get(MALFORM_COOKIE)?.value;
  return isMalform(v) ? v : 'nb';
}
