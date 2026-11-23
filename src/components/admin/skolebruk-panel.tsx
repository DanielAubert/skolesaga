"use client";

import { useCallback, useEffect, useState } from "react";
import { RefreshCw, School, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { SkolebrukMedTitler } from "@/lib/trafikk/skolebruk-titler";
import { Nokkeltall, Stolpeliste, prosent, tall } from "./trafikk-deler";

/**
 * Skolebruk-panelet på /dashboard/admin/trafikk (Daniel 23.11.2026, «Kjør på med 1,2»). Data fra
 * /api/admin/trafikk/skolebruk (migrasjon 126 + src/lib/trafikk/skolebruk.ts).
 */

export type SkolebrukSvar = Partial<SkolebrukMedTitler> & {
  periode?: string;
  land?: string | null;
  mangler?: string;
  ms?: number;
};

const UKEDAGER = ["man", "tir", "ons", "tor", "fre", "lør", "søn"];

/** Henter og viser panelet for valgt periode og land. `oppdatert` endres av «Oppdater»-knappen på siden. */
export function SkolebrukPanel({ periode, land, oppdatert }: { periode: string; land: "NO" | "alle"; oppdatert: number }) {
  const [svar, setSvar] = useState<SkolebrukSvar | null>(null);
  const [feil, setFeil] = useState<string | null>(null);
  const [laster, setLaster] = useState(false);

  const hent = useCallback(async () => {
    setLaster(true);
    setFeil(null);
    try {
      const res = await fetch(`/api/admin/trafikk/skolebruk?periode=${periode}&land=${land}`, { cache: "no-store" });
      const json = await res.json().catch(() => null);
      if (!res.ok) throw new Error(json?.message ?? `HTTP ${res.status}`);
      setSvar(json);
    } catch (e) {
      setSvar(null);
      setFeil(e instanceof Error ? e.message : "Ukjent feil");
    } finally {
      setLaster(false);
    }
  }, [periode, land]);

  useEffect(() => {
    void hent();
  }, [hent, oppdatert]);

  return <SkolebrukVisning svar={svar} feil={feil} laster={laster} />;
}

function Forklaring() {
  return (
    <details className="rounded-md border bg-muted/40 px-3 py-2 text-sm">
      <summary className="cursor-pointer font-medium">Slik telles det</summary>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
        <li>
          <b className="text-foreground">Økt fra skoleplattform:</b> minst én visning kom fra Teams, Google Classroom,
          itslearning, Canvas, Skooler, SharePoint, Office på nett, Showbie o.l.
        </li>
        <li>
          <b className="text-foreground">Klasseøkt:</b> minst 5 økter som lander på samme side og starter innen 20
          minutter.
        </li>
        <li>Tid er norsk tid. Uke = mandag–søndag.</li>
        <li>
          Dette er en indikator, ikke en fasit. En klasseøkt uten synlig skolekilde er bare <i>sannsynlig</i> klassebruk.
        </li>
      </ul>
    </details>
  );
}

/** Ren visning — brukes også av forhåndsvisningen /dev/skolebruk med testdata. */
export function SkolebrukVisning({ svar, feil, laster }: { svar: SkolebrukSvar | null; feil: string | null; laster?: boolean }) {
  const [visAlle, setVisAlle] = useState(false);

  if (feil) {
    return (
      <Card className="border-red-300 dark:border-red-900">
        <CardContent className="p-4 text-sm text-red-700 dark:text-red-300">Kunne ikke hente skolebruken: {feil}</CardContent>
      </Card>
    );
  }
  if (svar?.mangler) {
    return (
      <Card className="border-amber-300 dark:border-amber-800">
        <CardContent className="space-y-1 p-4 text-sm">
          <p className="font-medium">{svar.mangler}.</p>
          <p className="text-muted-foreground">
            Skolebruk-panelet trenger SQL-funksjonen skolesaga_skolebruk. Resten av trafikksiden virker som før.
          </p>
        </CardContent>
      </Card>
    );
  }
  if (!svar?.totalt) {
    return (
      <div className="flex items-center gap-2 py-8 text-sm text-muted-foreground">
        <RefreshCw className={`h-4 w-4 ${laster ? "animate-spin" : ""}`} />
        Henter skolebruk …
      </div>
    );
  }

  const t = svar.totalt;
  const uker = svar.perUke ?? [];
  const maksUke = Math.max(1, ...uker.map((u) => u.skoleOkter));
  const klasser = svar.klasseOkter ?? [];
  const synlige = visAlle ? klasser : klasser.slice(0, 15);

  return (
    <div className="space-y-6">
      <Forklaring />

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <Nokkeltall
          tittel="Økter fra skoleplattform"
          verdi={tall(t.skoleOkter)}
          under={<>{prosent(t.skoleOkter, t.okter)} av {tall(t.okter)} økter</>}
        />
        <Nokkeltall
          tittel="Klasseøkter"
          verdi={tall(t.klasseOkter)}
          under={<>{tall(t.okterIKlasseokter)} økter i dem</>}
        />
        <Nokkeltall
          tittel="Klasseøkter med skolekilde"
          verdi={`${tall(t.klasseOkterMedSkolekilde)} av ${tall(t.klasseOkter)}`}
          under={<>{tall(t.klasseOkterUtenSkolekilde)} uten synlig kilde</>}
        />
        <Nokkeltall
          tittel="Nynorsk"
          verdi={prosent(t.skoleOkterNynorsk, t.skoleOkter)}
          under={<>{tall(t.skoleOkterNynorsk)} av skoleøktene</>}
        />
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Uke for uke</CardTitle>
        </CardHeader>
        <CardContent>
          {uker.length === 0 ? (
            <p className="text-sm text-muted-foreground">Ingen økter i perioden.</p>
          ) : (
            <table className="w-full table-fixed text-sm">
              <thead>
                <tr className="text-left text-xs text-muted-foreground">
                  <th className="w-[30%] pb-1 font-normal">Uke</th>
                  <th className="pb-1 text-right font-normal">Fra skole</th>
                  <th className="pb-1 text-right font-normal">Klasseøkter</th>
                  <th className="pb-1 text-right font-normal">Økter i dem</th>
                </tr>
              </thead>
              <tbody>
                {uker.map((u) => (
                  <tr key={u.uke} className="border-t">
                    <td className="py-1.5">
                      <div>Uke {u.ukenr}</div>
                      <div className="text-xs text-muted-foreground">fra {u.uke.slice(8, 10)}.{u.uke.slice(5, 7)}.</div>
                    </td>
                    <td className="relative py-1.5 text-right tabular-nums">
                      <div
                        className="absolute inset-y-1 right-0 rounded bg-primary/10"
                        style={{ width: `${(u.skoleOkter / maksUke) * 100}%` }}
                        aria-hidden
                      />
                      <span className="relative pr-1">{tall(u.skoleOkter)}</span>
                    </td>
                    <td className="py-1.5 text-right tabular-nums">{tall(u.klasseOkter)}</td>
                    <td className="py-1.5 text-right tabular-nums">{tall(u.okterIKlasseokter)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2 [&>*]:min-w-0">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <School className="h-4 w-4" />
              Plattformer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Stolpeliste
              rader={(svar.perPlattform ?? []).map((p) => ({
                nokkel: p.navn,
                navn: p.navn,
                under: p.verter.map((v) => (p.verter.length > 1 ? `${v.vert} ${tall(v.okter)}` : v.vert)).join(" · "),
                verdi: p.okter,
                tekst: tall(p.okter),
              }))}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Bøker</CardTitle>
            <p className="text-xs text-muted-foreground">Økter fra skoleplattform · økter i klasseøkter</p>
          </CardHeader>
          <CardContent>
            <Stolpeliste
              rader={(svar.perBok ?? []).slice(0, 20).map((b) => ({
                nokkel: b.bok,
                navn: b.tittel,
                under: b.klasseOkter
                  ? `${tall(b.klasseOkter)} klasseøkt${b.klasseOkter === 1 ? "" : "er"} (${tall(b.okterIKlasseokter)} økter)`
                  : "ingen klasseøkter",
                verdi: b.skoleOkter + b.okterIKlasseokter,
                tekst: `${tall(b.skoleOkter)} · ${tall(b.okterIKlasseokter)}`,
              }))}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Landingssider</CardTitle>
            <p className="text-xs text-muted-foreground">Økter fra skoleplattform · økter i klasseøkter</p>
          </CardHeader>
          <CardContent>
            <Stolpeliste
              rader={(svar.landingssider ?? []).map((s) => ({
                nokkel: s.sti,
                navn: s.sti === "/" || s.sti === "/nn" ? "Forsiden" : (s.kapittelTittel ?? s.bokTittel ?? s.sti),
                under: (
                  <a href={s.sti} target="_blank" rel="noreferrer" className="hover:underline">
                    {s.sti}
                  </a>
                ),
                verdi: s.skoleOkter + s.okterIKlasseokter,
                tekst: `${tall(s.skoleOkter)} · ${tall(s.okterIKlasseokter)}`,
              }))}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Når på dagen</CardTitle>
            <p className="text-xs text-muted-foreground">Økter fra skoleplattform, norsk tid</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Soyler verdier={svar.ukedager ?? []} etiketter={UKEDAGER} />
            <Soyler
              verdier={svar.klokketimer ?? []}
              etiketter={Array.from({ length: 24 }, (_, i) => (i % 3 === 0 ? String(i) : ""))}
              tittel={(i, n) => `kl. ${i}–${i + 1}: ${tall(n)} økter`}
            />
            <p className="text-xs text-muted-foreground">
              {tall(t.skoleOkterAktive)} av skoleøktene ({prosent(t.skoleOkterAktive, t.skoleOkter)}) gikk til quiz,
              oppgave eller trening.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base">
            <Users className="h-4 w-4" />
            Klasseøktene
          </CardTitle>
          <p className="text-xs text-muted-foreground">Nyeste først. Antall økter, så hvor de kom fra.</p>
        </CardHeader>
        <CardContent>
          {klasser.length === 0 ? (
            <p className="text-sm text-muted-foreground">Ingen klasseøkter i perioden.</p>
          ) : (
            <ul className="divide-y">
              {synlige.map((k) => (
                <li key={`${k.start}-${k.sti}`} className="py-2.5">
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="text-lg font-semibold tabular-nums">{k.okter}</span>
                    <span className="text-sm">
                      økter · {k.ukedag} {k.dato} kl. {k.kl}
                    </span>
                    <span className="text-xs text-muted-foreground">over {k.minutter} min</span>
                  </div>
                  <div className="min-w-0 text-sm">
                    <span className="font-medium">
                      {k.sti === "/" || k.sti === "/nn" ? "Forsiden" : (k.bokTittel ?? "Uten bok")}
                    </span>
                    {k.kapittelTittel && <span className="text-muted-foreground"> · {k.kapittelTittel}</span>}
                  </div>
                  <a
                    href={k.sti}
                    target="_blank"
                    rel="noreferrer"
                    className="block truncate text-xs text-muted-foreground hover:underline"
                  >
                    {k.sti}
                  </a>
                  <div className="mt-1 flex flex-wrap gap-1.5 text-xs">
                    <Merke sterk={k.fraSkole > 0}>
                      Skole {k.fraSkole}
                      {k.plattform ? ` (${k.plattform})` : ""}
                    </Merke>
                    <Merke>Direkte {k.direkte}</Merke>
                    <Merke>Søk {k.sok}</Merke>
                    {k.annen > 0 && <Merke>Annet {k.annen}</Merke>}
                    <Merke>{k.malform === "nn" ? "Nynorsk" : k.malform === "blandet" ? "Bokmål og nynorsk" : "Bokmål"}</Merke>
                    <Merke>Til quiz/oppgave: {k.aktive}</Merke>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {klasser.length > synlige.length && (
            <Button variant="outline" size="sm" className="mt-3" onClick={() => setVisAlle(true)}>
              Vis alle {klasser.length}
            </Button>
          )}
        </CardContent>
      </Card>

      {svar.ms != null && (
        <p className="text-xs text-muted-foreground">Hentet på {tall(svar.ms)} ms. Ingen økt-id eller brukerdata sendes til siden.</p>
      )}
    </div>
  );
}

function Merke({ children, sterk }: { children: React.ReactNode; sterk?: boolean }) {
  return (
    <span
      className={`rounded px-1.5 py-0.5 ${sterk ? "bg-primary/15 font-medium text-foreground" : "bg-muted text-muted-foreground"}`}
    >
      {children}
    </span>
  );
}

function Soyler({
  verdier,
  etiketter,
  tittel,
}: {
  verdier: number[];
  etiketter: string[];
  tittel?: (i: number, n: number) => string;
}) {
  const maks = Math.max(1, ...verdier);
  return (
    <div>
      <div className="flex h-24 items-end gap-[2px]">
        {verdier.map((n, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-primary/70"
            style={{ height: `${Math.max(n > 0 ? 3 : 1, (n / maks) * 100)}%` }}
            title={tittel ? tittel(i, n) : `${etiketter[i]}: ${tall(n)} økter`}
          />
        ))}
      </div>
      <div className="mt-1 flex gap-[2px] text-[10px] text-muted-foreground">
        {etiketter.map((e, i) => (
          <span key={i} className="flex-1 text-center">
            {e}
          </span>
        ))}
      </div>
    </div>
  );
}
