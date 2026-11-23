import type { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

/** Felles byggeklosser for trafikksiden (/dashboard/admin/trafikk) og Skolebruk-panelet. */

export const tall = (n: number | undefined) => (n ?? 0).toLocaleString("nb-NO");
export const prosent = (del: number, av: number) => (av > 0 ? `${Math.round((del / av) * 100)} %` : "–");

export function Nokkeltall({ tittel, verdi, under }: { tittel: string; verdi: string; under?: ReactNode }) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="text-xs text-muted-foreground">{tittel}</div>
        <div className="text-2xl font-semibold tabular-nums">{verdi}</div>
        {under && <div className="mt-1 text-xs text-muted-foreground">{under}</div>}
      </CardContent>
    </Card>
  );
}

/** Liste med en liggende stolpe bak hver rad — leses på mobil uten sidelengs scroll. */
export function Stolpeliste({
  rader,
}: {
  rader: Array<{ nokkel: string; navn: ReactNode; under?: ReactNode; verdi: number; tekst: string }>;
}) {
  const maks = Math.max(1, ...rader.map((r) => r.verdi));
  if (rader.length === 0) return <p className="text-sm text-muted-foreground">Ingen data i perioden.</p>;
  return (
    <ul className="space-y-1.5">
      {rader.map((r) => (
        <li key={r.nokkel} className="relative overflow-hidden rounded-md">
          <div
            className="absolute inset-y-0 left-0 bg-primary/10"
            style={{ width: `${(r.verdi / maks) * 100}%` }}
            aria-hidden
          />
          <div className="relative flex items-baseline justify-between gap-3 px-2 py-1.5">
            <div className="min-w-0">
              <div className="truncate text-sm">{r.navn}</div>
              {r.under && <div className="truncate text-xs text-muted-foreground">{r.under}</div>}
            </div>
            <div className="shrink-0 text-sm tabular-nums">{r.tekst}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
