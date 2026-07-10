"use client";

/**
 * Admin: refusjonsforespørsler for KI-sensor-vurderinger.
 * Viser studentens svar + KI-vurderingen + begrunnelsen, med godkjenn/avvis.
 * (Godkjent = klipp tilbakeføres når betalingsløsningen er koblet på; frem til
 * da er statusen kvitteringen.)
 */

import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RefreshCw, Check, X, Sparkles } from "lucide-react";

interface Verdict {
  karakterBokstav?: string;
  karakter?: string;
  kortDom?: string;
  styrker?: string[];
  mangler?: string[];
  forbedring?: string;
  rubrikk?: string[];
  omskriving?: string;
  nesteOvelse?: string;
}

interface Forespørsel {
  id: string;
  user_id: string | null;
  course_id: string;
  chapter_id: string;
  exercise_id: string | null;
  tier: number;
  model: string;
  question: string;
  answer: string;
  karakter_bokstav: string;
  verdict: Verdict | null;
  klipp_kostnad: number;
  refusjon_status: string;
  refusjon_begrunnelse: string | null;
  refusjon_svar: string | null;
  created_at: string;
}

const STATUS_LABELS: Record<string, string> = {
  forespurt: "Venter",
  godkjent: "Godkjent",
  avvist: "Avvist",
};

export default function AdminKiSensorPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [items, setItems] = useState<Forespørsel[]>([]);
  const [filter, setFilter] = useState("forespurt");
  const [loading, setLoading] = useState(false);
  const [svarTekst, setSvarTekst] = useState<Record<string, string>>({});

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/ai-sensor/refusjon?status=${filter}`);
      if (res.ok) {
        const data = await res.json();
        setItems(data.forespørsler ?? []);
      }
    } finally {
      setLoading(false);
    }
  }, [filter]);

  useEffect(() => {
    if (status === "loading") return;
    if (!session?.user || session.user.role !== "admin") {
      router.push("/");
      return;
    }
    load();
  }, [session, status, router, load]);

  async function avgjor(id: string, avgjorelse: "godkjent" | "avvist") {
    const res = await fetch("/api/ai-sensor/refusjon", {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id, avgjorelse, svar: svarTekst[id] ?? "" }),
    });
    if (res.ok) load();
  }

  if (status === "loading" || session?.user?.role !== "admin") {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Sparkles className="h-6 w-6" /> KI-sensor: refusjonsforespørsler
          </h1>
          <div className="flex items-center gap-2">
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-36">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="forespurt">Venter</SelectItem>
                <SelectItem value="godkjent">Godkjent</SelectItem>
                <SelectItem value="avvist">Avvist</SelectItem>
                <SelectItem value="alle">Alle</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon" onClick={load} disabled={loading}>
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            </Button>
          </div>
        </div>

        {items.length === 0 && (
          <p className="text-muted-foreground">Ingen forespørsler i denne kategorien.</p>
        )}

        <div className="space-y-4">
          {items.map((f) => (
            <Card key={f.id}>
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex flex-wrap items-center gap-2">
                  <Badge variant="outline">{STATUS_LABELS[f.refusjon_status] ?? f.refusjon_status}</Badge>
                  <span>
                    {f.course_id} / {f.chapter_id}
                  </span>
                  <Badge variant="secondary">
                    Nivå {f.tier} · {f.klipp_kostnad} klipp
                  </Badge>
                  {f.karakter_bokstav && (
                    <Badge className="text-base font-bold">{f.karakter_bokstav}</Badge>
                  )}
                  <span className="ml-auto text-xs font-normal text-muted-foreground">
                    {new Date(f.created_at).toLocaleString("nb-NO")}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-xs uppercase text-muted-foreground">Studentens begrunnelse</p>
                  <p className="border-l-2 pl-3">{f.refusjon_begrunnelse}</p>
                </div>
                <details>
                  <summary className="cursor-pointer text-xs text-muted-foreground">
                    Vis oppgave, svar og KI-vurdering
                  </summary>
                  <div className="mt-2 space-y-2">
                    <div>
                      <p className="font-medium text-xs uppercase text-muted-foreground">Oppgave</p>
                      <p className="whitespace-pre-wrap">{f.question}</p>
                    </div>
                    <div>
                      <p className="font-medium text-xs uppercase text-muted-foreground">Studentens svar</p>
                      <p className="whitespace-pre-wrap">{f.answer}</p>
                    </div>
                    {f.verdict && (
                      <div>
                        <p className="font-medium text-xs uppercase text-muted-foreground">KI-vurderingen</p>
                        <p>
                          <strong>{f.verdict.karakter}</strong> — {f.verdict.kortDom}
                        </p>
                        {f.verdict.mangler && f.verdict.mangler.length > 0 && (
                          <ul className="list-disc pl-5">
                            {f.verdict.mangler.map((m, i) => (
                              <li key={i}>{m}</li>
                            ))}
                          </ul>
                        )}
                        {f.verdict.forbedring && <p>{f.verdict.forbedring}</p>}
                      </div>
                    )}
                  </div>
                </details>

                {f.refusjon_status === "forespurt" ? (
                  <div className="space-y-2 border-t pt-3">
                    <textarea
                      className="w-full min-h-16 rounded-md border bg-background p-2 text-sm"
                      placeholder="Valgfritt svar til studenten (lagres på saken) …"
                      value={svarTekst[f.id] ?? ""}
                      onChange={(e) => setSvarTekst((s) => ({ ...s, [f.id]: e.target.value }))}
                    />
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => avgjor(f.id, "godkjent")}>
                        <Check className="h-4 w-4 mr-1" /> Godkjenn refusjon
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => avgjor(f.id, "avvist")}>
                        <X className="h-4 w-4 mr-1" /> Avvis
                      </Button>
                    </div>
                  </div>
                ) : (
                  f.refusjon_svar && (
                    <p className="border-t pt-3 text-xs text-muted-foreground">
                      Svar: {f.refusjon_svar}
                    </p>
                  )
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
