"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BarChart3, BookOpen, RefreshCw } from "lucide-react";

/* Typer — speiler src/app/api/admin/trafikk/route.ts og skolesaga_trafikk (migrasjon 115) */
type Periode = "dag" | "uke" | "maned" | "3mnd";
type LandValg = "NO" | "alle";

interface Svar {
  periode: Periode;
  bucket: "time" | "dag" | "uke";
  mangler?: string;
  total?: {
    visninger: number;
    okter: number;
    innlogget_visninger: number;
    unike_innloggede: number;
    mobil: number;
    nynorsk: number;
    boker: number;
  };
  forrige?: { visninger: number; okter: number; unike_innloggede: number };
  serie?: Array<{ t: string; visninger: number; okter: number }>;
  per_bok?: Array<{ bok: string; tittel: string; visninger: number; okter: number; innloggede: number; kapitler: number; nynorsk: number }>;
  per_kapittel?: Array<{ bok: string; bokTittel: string; kapittel: string; tittel: string; visninger: number; okter: number }>;
  per_sidetype?: Array<{ sidetype: string; visninger: number; okter: number }>;
  topp_stier?: Array<{ sti: string; visninger: number; okter: number }>;
  topp_kilder?: Array<{ kilde: string; okter: number }>;
  per_land?: Array<{ land: string | null; okter: number }>;
  ogsa_eksamenssett?: number;
  aktivitet?: Array<{ bok: string; tittel: string; fullforte: number; innleveringer: number; elever: number }>;
}

const PERIODER: Array<{ nokkel: Periode; navn: string; forrige: string }> = [
  { nokkel: "dag", navn: "Døgn", forrige: "forrige døgn" },
  { nokkel: "uke", navn: "Uke", forrige: "forrige uke" },
  { nokkel: "maned", navn: "Måned", forrige: "forrige 30 døgn" },
  { nokkel: "3mnd", navn: "3 måneder", forrige: "forrige 13 uker" },
];

const SIDETYPE_NAVN: Record<string, string> = {
  forside: "Forside",
  bok: "Bokforside",
  kapittel: "Kapittel",
  oppgave: "Oppgave",
  quiz: "Kapittelquiz",
  trening: "Trening",
  flashcards: "Flashcards",
  eksamen: "Eksamen",
  trinn: "Trinnoversikt",
  test: "Tester (IQ, personlighet …)",
  verktoy: "Verktøy (hoderegning, quiz …)",
  konto: "Innlogging og konto",
  annet: "Annet",
};

const tall = (n: number | undefined) => (n ?? 0).toLocaleString("nb-NO");
const prosent = (del: number, av: number) => (av > 0 ? `${Math.round((del / av) * 100)} %` : "–");

function Endring({ naa, for: foer }: { naa: number; for: number }) {
  if (!foer) return <span className="text-xs text-muted-foreground">ingen data før</span>;
  const p = Math.round(((naa - foer) / foer) * 100);
  const farge = p > 0 ? "text-green-600" : p < 0 ? "text-red-600" : "text-muted-foreground";
  return <span className={`text-xs ${farge}`}>{p > 0 ? "+" : ""}{p} %</span>;
}

function Nokkeltall({ tittel, verdi, under }: { tittel: string; verdi: string; under?: React.ReactNode }) {
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
function Stolpeliste({
  rader,
}: {
  rader: Array<{ nokkel: string; navn: React.ReactNode; under?: React.ReactNode; verdi: number; tekst: string }>;
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

function Serie({ serie, bucket }: { serie: NonNullable<Svar["serie"]>; bucket: Svar["bucket"] }) {
  if (serie.length === 0) return <p className="text-sm text-muted-foreground">Ingen visninger i perioden.</p>;
  const maks = Math.max(1, ...serie.map((p) => p.visninger));
  const etikett = (t: string) => {
    const d = new Date(t);
    return bucket === "time"
      ? d.toLocaleTimeString("nb-NO", { hour: "2-digit", minute: "2-digit" })
      : d.toLocaleDateString("nb-NO", { day: "numeric", month: "short" });
  };
  return (
    <div>
      <div className="flex h-40 items-end gap-[2px]">
        {serie.map((p) => (
          <div
            key={p.t}
            className="flex-1 rounded-t bg-primary/70 hover:bg-primary"
            style={{ height: `${Math.max(2, (p.visninger / maks) * 100)}%` }}
            title={`${etikett(p.t)}: ${tall(p.visninger)} visninger, ${tall(p.okter)} økter`}
          />
        ))}
      </div>
      <div className="mt-1 flex justify-between text-xs text-muted-foreground">
        <span>{etikett(serie[0].t)}</span>
        <span>{etikett(serie[serie.length - 1].t)}</span>
      </div>
    </div>
  );
}

export default function TrafikkSide() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [periode, setPeriode] = useState<Periode>("uke");
  const [land, setLand] = useState<LandValg>("NO");
  const [svar, setSvar] = useState<Svar | null>(null);
  const [laster, setLaster] = useState(false);
  const [feil, setFeil] = useState<string | null>(null);

  const erAdmin = session?.user?.role === "admin";

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login?callbackUrl=/dashboard/admin/trafikk");
    else if (status === "authenticated" && !erAdmin) router.push("/dashboard");
  }, [status, erAdmin, router]);

  const hent = useCallback(async () => {
    setLaster(true);
    setFeil(null);
    try {
      const res = await fetch(`/api/admin/trafikk?periode=${periode}&land=${land}`, { cache: "no-store" });
      if (!res.ok) throw new Error((await res.json().catch(() => ({})))?.message ?? `HTTP ${res.status}`);
      setSvar(await res.json());
    } catch (e) {
      setFeil(e instanceof Error ? e.message : "Ukjent feil");
    } finally {
      setLaster(false);
    }
  }, [periode, land]);

  useEffect(() => {
    if (erAdmin) void hent();
  }, [erAdmin, hent]);

  if (status === "loading" || !erAdmin) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <RefreshCw className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  const valgt = PERIODER.find((p) => p.nokkel === periode)!;
  const t = svar?.total;
  const f = svar?.forrige;

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="container mx-auto flex-1 space-y-6 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link href="/dashboard/admin/users">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-1 h-4 w-4" />
                Admin
              </Button>
            </Link>
            <h1 className="flex items-center gap-2 text-2xl font-bold">
              <BarChart3 className="h-6 w-6" />
              Trafikk og bøker
            </h1>
          </div>
          <Button variant="outline" size="sm" onClick={hent} disabled={laster}>
            <RefreshCw className={`mr-2 h-4 w-4 ${laster ? "animate-spin" : ""}`} />
            Oppdater
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          {PERIODER.map((p) => (
            <Button key={p.nokkel} size="sm" variant={p.nokkel === periode ? "default" : "outline"} onClick={() => setPeriode(p.nokkel)}>
              {p.navn}
            </Button>
          ))}
          <span className="mx-1 hidden w-px bg-border sm:block" />
          <Button size="sm" variant={land === "NO" ? "default" : "outline"} onClick={() => setLand("NO")}>
            Bare Norge
          </Button>
          <Button size="sm" variant={land === "alle" ? "default" : "outline"} onClick={() => setLand("alle")}>
            Alle land
          </Button>
        </div>

        {feil && <p className="text-sm text-red-600">Kunne ikke hente trafikken: {feil}</p>}
        {svar?.mangler && (
          <Card>
            <CardContent className="p-4 text-sm">
              {svar.mangler}. Når den er kjørt, begynner Skolesaga å logge sidevisninger, og tallene dukker opp her.
            </CardContent>
          </Card>
        )}

        {t && f && (
          <>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              <Nokkeltall
                tittel="Sidevisninger"
                verdi={tall(t.visninger)}
                under={<>{tall(f.visninger)} {valgt.forrige} · <Endring naa={t.visninger} for={f.visninger} /></>}
              />
              <Nokkeltall
                tittel="Økter (besøk)"
                verdi={tall(t.okter)}
                under={<>{tall(f.okter)} {valgt.forrige} · <Endring naa={t.okter} for={f.okter} /></>}
              />
              <Nokkeltall
                tittel="Unike innloggede"
                verdi={tall(t.unike_innloggede)}
                under={<>{tall(svar?.ogsa_eksamenssett)} av dem også på eksamenssett.no</>}
              />
              <Nokkeltall tittel="Bøker i bruk" verdi={tall(t.boker)} under={<>{prosent(t.innlogget_visninger, t.visninger)} av visningene innlogget</>} />
              <Nokkeltall tittel="Mobil" verdi={prosent(t.mobil, t.visninger)} under="av sidevisningene" />
              <Nokkeltall tittel="Nynorsk" verdi={prosent(t.nynorsk, t.visninger)} under="av sidevisningene" />
              <Nokkeltall
                tittel="Sider per besøk"
                verdi={t.okter ? (t.visninger / t.okter).toLocaleString("nb-NO", { maximumFractionDigits: 1 }) : "–"}
              />
            </div>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Sidevisninger over tid</CardTitle>
              </CardHeader>
              <CardContent>
                <Serie serie={svar?.serie ?? []} bucket={svar!.bucket} />
              </CardContent>
            </Card>

            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <BookOpen className="h-4 w-4" />
                    Bøker
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Stolpeliste
                    rader={(svar?.per_bok ?? []).map((b) => ({
                      nokkel: b.bok,
                      navn: b.tittel,
                      under: `${tall(b.okter)} økter · ${tall(b.innloggede)} innloggede · ${tall(b.kapitler)} kapitler${b.nynorsk ? ` · ${prosent(b.nynorsk, b.visninger)} nynorsk` : ""}`,
                      verdi: b.visninger,
                      tekst: tall(b.visninger),
                    }))}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Mest leste kapitler</CardTitle>
                </CardHeader>
                <CardContent>
                  <Stolpeliste
                    rader={(svar?.per_kapittel ?? []).map((k) => ({
                      nokkel: `${k.bok}/${k.kapittel}`,
                      navn: k.tittel,
                      under: `${k.bokTittel} · ${tall(k.okter)} økter`,
                      verdi: k.visninger,
                      tekst: tall(k.visninger),
                    }))}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Sidetyper</CardTitle>
                </CardHeader>
                <CardContent>
                  <Stolpeliste
                    rader={(svar?.per_sidetype ?? []).map((s) => ({
                      nokkel: s.sidetype,
                      navn: SIDETYPE_NAVN[s.sidetype] ?? s.sidetype,
                      under: `${tall(s.okter)} økter`,
                      verdi: s.visninger,
                      tekst: tall(s.visninger),
                    }))}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Hvor besøkene kommer fra</CardTitle>
                </CardHeader>
                <CardContent>
                  <Stolpeliste
                    rader={(svar?.topp_kilder ?? []).map((k) => ({
                      nokkel: k.kilde,
                      navn: k.kilde,
                      verdi: k.okter,
                      tekst: `${tall(k.okter)} økter`,
                    }))}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Aktivitet blant innloggede</CardTitle>
                  <p className="text-xs text-muted-foreground">
                    Fullførte oppgaver og innleveringer per bok — lagret fra før trafikkloggen kom.
                  </p>
                </CardHeader>
                <CardContent>
                  <Stolpeliste
                    rader={(svar?.aktivitet ?? []).map((a) => ({
                      nokkel: a.bok,
                      navn: a.tittel,
                      under: `${tall(a.fullforte)} fullførte · ${tall(a.innleveringer)} innleveringer`,
                      verdi: a.fullforte + a.innleveringer,
                      tekst: `${tall(a.elever)} elever`,
                    }))}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Mest besøkte sider</CardTitle>
                </CardHeader>
                <CardContent>
                  <Stolpeliste
                    rader={(svar?.topp_stier ?? []).map((s) => ({
                      nokkel: s.sti,
                      navn: (
                        <a href={s.sti} target="_blank" rel="noreferrer" className="hover:underline">
                          {s.sti}
                        </a>
                      ),
                      verdi: s.visninger,
                      tekst: tall(s.visninger),
                    }))}
                  />
                </CardContent>
              </Card>

              {land === "alle" && (
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Land</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Stolpeliste
                      rader={(svar?.per_land ?? []).map((l) => ({
                        nokkel: l.land ?? "ukjent",
                        navn: l.land ?? "Ukjent",
                        verdi: l.okter,
                        tekst: `${tall(l.okter)} økter`,
                      }))}
                    />
                  </CardContent>
                </Card>
              )}
            </div>

            <p className="text-xs text-muted-foreground">
              Egen logg uten cookies og uten IP: én økt varer til fanen lukkes. «Unike innloggede» telles med en
              pseudonym nøkkel som er lik på eksamenssett.no, slik at overlappen kan telles uten at bruker-id lagres.
              Botter og crawlere er filtrert bort.
            </p>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
