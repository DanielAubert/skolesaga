/**
 * Målform (bokmål / nynorsk) — felles konstanter og server-helper.
 *
 * MÅLFORMEN LIGGER I URL-EN, ikke bare i en cookie:
 *
 *     /1t/1t-1-1        bokmål
 *     /nn/1t/1t-1-1     nynorsk
 *
 * Fram til 27. juli 2026 var cookien eneste kilde. Det gjorde hele
 * nynorskutgaven — 10 509 kapitler, et halvt års oversettelsesarbeid — usynlig
 * for søkemotorer: Googlebot setter ikke cookies, så den så bare bokmål, og det
 * fantes ingen adresse å indeksere nynorsk på.
 *
 * `src/middleware.ts` skriver om `/nn/<sti>` til `<sti>` og setter headeren
 * `x-malform`. Cookien beholdes for besøkende som har valgt målform tidligere,
 * men URL-en vinner alltid — ellers kunne adressen si nynorsk mens innholdet
 * var bokmål, og da lyver både canonical og hreflang.
 */
import { cookies, headers } from 'next/headers';
import type { Malform } from '@/lib/data/textbook-content';

export type { Malform };

export const MALFORM_COOKIE = 'malform';
export const MALFORM_HEADER = 'x-malform';

/** Stiprefiks per målform. Bokmål er umerket — det er standardutgaven. */
export const MALFORM_PREFIKS: Record<string, string> = {
  nb: '',
  nn: '/nn',
};

export function isMalform(v: unknown): v is Malform {
  return v === 'nb' || v === 'nn';
}

/**
 * Les målform for gjeldende forespørsel.
 *
 * Rekkefølgen er bindende: URL (via middleware-headeren) → cookie → bokmål.
 */
export async function getMalform(): Promise<Malform> {
  const h = await headers();
  const fraUrl = h.get(MALFORM_HEADER);
  if (isMalform(fraUrl)) return fraUrl;

  const store = await cookies();
  const v = store.get(MALFORM_COOKIE)?.value;
  return isMalform(v) ? v : 'nb';
}

/** Bygg adressen til samme side i en annen målform. */
export function malformSti(sti: string, malform: Malform): string {
  const bar = sti.replace(/^\/nn(?=\/|$)/, '') || '/';
  const p = MALFORM_PREFIKS[malform] ?? '';
  return p ? `${p}${bar === '/' ? '' : bar}` : bar;
}
