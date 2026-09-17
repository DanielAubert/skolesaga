/**
 * Kapittelgodkjenning (Daniel 17.9.2026): de nye bøkene vises fram for matematikklærere kapittel for kapittel.
 * Daniel godkjenner på den lokale vurderingsserveren (knapp øverst i kapittelet); bare godkjente kapitler
 * er synlige på nettsiden. Lagring: src/lib/data/kapittel-godkjenning.json (leses ved hver forespørsel).
 */
import * as fs from 'fs';
import * as path from 'path';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/config';

export const GODKJENNINGSSTYRTE_KURS = ['statistikk', 'matematikk-okonomi'] as const;

export interface Godkjenning { godkjent: boolean; dato?: string; av?: string; merknad?: string }
interface Fil { _info?: string; kapitler: Record<string, Godkjenning> }

const STI = path.join(process.cwd(), 'src', 'lib', 'data', 'kapittel-godkjenning.json');

export function lesGodkjenninger(): Fil {
  try {
    const d = JSON.parse(fs.readFileSync(STI, 'utf-8')) as Fil;
    return { ...d, kapitler: d.kapitler ?? {} };
  } catch {
    return { kapitler: {} };
  }
}

export function skrivGodkjenning(chapterId: string, g: Godkjenning): Fil {
  const d = lesGodkjenninger();
  d.kapitler[chapterId] = g;
  const tmp = STI + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(d, null, 2) + '\n', 'utf-8');
  fs.renameSync(tmp, STI);
  return d;
}

export function godkjenningStyrt(courseId: string): boolean {
  return (GODKJENNINGSSTYRTE_KURS as readonly string[]).includes(courseId);
}

/** Lokal vurderingsserver: alle kapitler vises, og godkjenningsknappen er aktiv. */
export function lokalGodkjenningsmodus(): boolean {
  return process.env.SKOLESAGA_GODKJENNING_LOKAL === '1';
}

export function erGodkjent(chapterId: string): boolean {
  return lesGodkjenninger().kapitler[chapterId]?.godkjent === true;
}

/** Innlogget admin ser alle kapitler også på nettsiden (Daniel 17.9: «uten å logge seg inn via admin»). */
export async function erAdminSesjon(): Promise<boolean> {
  try {
    const s = await getServerSession(authOptions);
    return (s?.user as { role?: string } | undefined)?.role === 'admin';
  } catch {
    return false;
  }
}

/** MERKE-MODUS (Daniel 17/9 kveld: «bytt og publiser med en gang»): ingen kapitler sperres. Godkjente kapitler får
 *  merket «Kvalitetssikret», resten «Utkast». Sett MERKEMODUS = false for å gå tilbake til sperring + smakebit. */
export const MERKEMODUS = true;

/** Sant når kapittelet skal holdes skjult (bare når MERKEMODUS er av: styrt kurs, ikke godkjent, ikke lokal, ikke admin). */
export function kapittelLaast(courseId: string, chapterId: string, erAdmin = false): boolean {
  if (MERKEMODUS) return false;
  return godkjenningStyrt(courseId) && !lokalGodkjenningsmodus() && !erAdmin && !erGodkjent(chapterId);
}

export type KapittelMerke = 'kvalitetssikret' | 'utkast' | null;
/** Merket som vises for alle besøkende i de nye bøkene. */
export function kapittelMerke(courseId: string, chapterId: string): KapittelMerke {
  if (!godkjenningStyrt(courseId)) return null;
  return erGodkjent(chapterId) ? 'kvalitetssikret' : 'utkast';
}

/** Lokal markering (Daniel 17/9): hvor mye kapittelet bygger på Daniels typemetoder — målt av
 *  laerebok/nyematte/maal_inspirasjon.py, lagret i src/lib/data/kapittel-inspirasjon.json. Vises bare lokalt. */
export type InspirasjonsGrad = 'gronn' | 'gul' | 'rod';
export interface Inspirasjon { grad: InspirasjonsGrad; per_1000: number; rang: string; typemetoder: string[] }
export function lesInspirasjon(chapterId: string): Inspirasjon | null {
  if (!lokalGodkjenningsmodus()) return null;
  try {
    const d = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src', 'lib', 'data', 'kapittel-inspirasjon.json'), 'utf-8'));
    const r = d.kapitler?.[chapterId];
    return r ? { grad: r.grad, per_1000: r.per_1000, rang: r.rang, typemetoder: r.typemetoder ?? [] } : null;
  } catch {
    return null;
  }
}
export const INSPIRASJON_FARGE: Record<InspirasjonsGrad, string> = {
  gronn: 'bg-green-500', gul: 'bg-yellow-400', rod: 'bg-red-500',
};
export const INSPIRASJON_TEKST: Record<InspirasjonsGrad, string> = {
  gronn: 'mest inspirert av Daniels typemetoder', gul: 'middels inspirert', rod: 'minst inspirert (ingen typemetode dekker emnet)',
};

/** Tekst mot lærerne om sperrede kapitler (Daniel 17/9: «Kapittel for kapittel gjennom høsten, hele boka klar til nyttår»). */
export const AAPNINGSPLAN = 'Boka ble skrevet det første døgnet etter at læreplanen kom, og kvalitetssikres nå kapittel for kapittel gjennom høsten 2026. Kapitler merket «Kvalitetssikret» er gjennomgått; resten er utkast du gjerne må lese og melde fra om.';
export function antallGodkjente(chapterIds: string[]): number {
  const k = lesGodkjenninger().kapitler;
  return chapterIds.filter((id) => k[id]?.godkjent).length;
}
