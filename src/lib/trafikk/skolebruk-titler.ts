import { getCourse } from "@/lib/data/textbook-courses";
import { beregnSkolebruk, parseUtvalg, type Skolebruk } from "./skolebruk";

/**
 * Fra svaret til skolesaga_skolebruk(...) (migrasjon 126) til det Skolebruk-panelet viser: regner ut med
 * beregnSkolebruk og legger på bok- og kapitteltitler fra kurskatalogen. Brukes av /api/admin/trafikk/skolebruk
 * og av forhåndsvisningen /dev/skolebruk (bare i utvikling).
 */

function bokTittel(id: string | null): string | null {
  if (!id) return null;
  return getCourse(id)?.title ?? id;
}

function kapittelTittel(bok: string | null, kapittel: string | null): string | null {
  if (!bok || !kapittel) return null;
  const kapitler = getCourse(bok)?.chapters ?? [];
  // Narrativ versjon av et kapittel har id-en «<kapittel>-narrativ» og står ikke selv i katalogen.
  const narrativ = kapittel.endsWith("-narrativ");
  const k = kapitler.find((c) => c.id === kapittel) ?? (narrativ ? kapitler.find((c) => c.id === kapittel.slice(0, -9)) : undefined);
  if (!k) return kapittel;
  const tittel = narrativ && k.id !== kapittel ? `${k.title} (lesevennlig)` : k.title;
  const nr = (k as { number?: string | number }).number;
  return nr != null && nr !== "" ? `${nr} ${tittel}` : tittel;
}

export type SkolebrukMedTitler = Omit<Skolebruk, "perBok" | "landingssider" | "klasseOkter"> & {
  perBok: Array<Skolebruk["perBok"][number] & { tittel: string }>;
  landingssider: Array<Skolebruk["landingssider"][number] & { bokTittel: string | null; kapittelTittel: string | null }>;
  klasseOkter: Array<Skolebruk["klasseOkter"][number] & { bokTittel: string | null; kapittelTittel: string | null }>;
};

/** Kapittel-id fra stien når loggen ikke har kapittel (f.eks. /nn/naturfag-7/naturfag-7-1-1-narrativ). */
function kapittelFraSti(bok: string | null, sti: string): string | null {
  if (!bok) return null;
  const siste = sti.split("/").filter(Boolean).find((d) => d.startsWith(`${bok}-`));
  return siste ?? null;
}

export function skolebrukFraSql(data: unknown): SkolebrukMedTitler {
  const d = (data ?? {}) as { okter?: number; okter_per_uke?: Array<[string, number]>; utvalg?: unknown };
  const r = beregnSkolebruk({ okter: Number(d.okter ?? 0), okterPerUke: d.okter_per_uke ?? [], utvalg: parseUtvalg(d.utvalg) });
  return {
    ...r,
    perBok: r.perBok.map((b) => ({ ...b, tittel: b.bok.startsWith("(") ? b.bok : (bokTittel(b.bok) ?? b.bok) })),
    landingssider: r.landingssider.map((s) => ({ ...s, bokTittel: bokTittel(s.bok), kapittelTittel: kapittelTittel(s.bok, s.kapittel ?? kapittelFraSti(s.bok, s.sti)) })),
    klasseOkter: r.klasseOkter.map((k) => ({ ...k, bokTittel: bokTittel(k.bok), kapittelTittel: kapittelTittel(k.bok, k.kapittel ?? kapittelFraSti(k.bok, k.sti)) })),
  };
}
