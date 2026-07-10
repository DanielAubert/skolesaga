'use client';

/**
 * AI-sensor-panel: skriv/lim inn besvarelsen, velg nivå, få vurdering med
 * bokstavkarakter. Vurderinger lagres server-side; er man misfornøyd kan man
 * be om refusjon (går til admin-gjennomgang).
 *
 * SKJULT: rendres kun når NEXT_PUBLIC_AI_SENSOR_ENABLED === 'true'
 * (og API-ruta krever i tillegg AI_SENSOR_ENABLED=true server-side).
 */

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Loader2, Flag, Check } from 'lucide-react';

interface Verdict {
  karakterBokstav: string;
  karakter: string;
  kortDom: string;
  styrker: string[];
  mangler: string[];
  forbedring: string;
  rubrikk?: string[];
  omskriving?: string;
  nesteOvelse?: string;
}

interface AiSensorPanelProps {
  courseId: string;
  chapterId: string;
  exerciseId: string;
}

// Speiler src/lib/ai-sensor/tiers.ts (klienten trenger bare visningsdata).
const TIERS = [
  {
    id: 1,
    navn: 'Karakter + hvorfor',
    klipp: 1,
    kort: 'Bokstavkarakter + vurdering som siterer dine formuleringer',
  },
  {
    id: 2,
    navn: 'Ditt avsnitt til A',
    klipp: 3,
    kort: '+ A-stresstest, ett av dine avsnitt omskrevet til toppnivå, neste øvelse',
  },
] as const;

const RUBRIKK_SPORSMAL = [
  'Sterkeste innvending med?',
  'Betingelsen som snur konklusjonen?',
  'Gjør drøftingen arbeid?',
  'Posisjon eller balanseøvelse?',
];

export function aiSensorEnabled(): boolean {
  return process.env.NEXT_PUBLIC_AI_SENSOR_ENABLED === 'true';
}

export function AiSensorPanel({ courseId, chapterId, exerciseId }: AiSensorPanelProps) {
  const [answer, setAnswer] = useState('');
  const [tier, setTier] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [verdict, setVerdict] = useState<Verdict | null>(null);
  const [vurderingId, setVurderingId] = useState<string | null>(null);
  const [raw, setRaw] = useState<string | null>(null);
  // Refusjon
  const [visRefusjon, setVisRefusjon] = useState(false);
  const [refBegrunnelse, setRefBegrunnelse] = useState('');
  const [refStatus, setRefStatus] = useState<'ingen' | 'sender' | 'sendt' | 'feil'>('ingen');
  const [refFeil, setRefFeil] = useState<string | null>(null);

  async function submit() {
    setLoading(true);
    setError(null);
    setVerdict(null);
    setVurderingId(null);
    setRaw(null);
    setVisRefusjon(false);
    setRefStatus('ingen');
    setRefBegrunnelse('');
    try {
      const res = await fetch('/api/ai-sensor', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ courseId, chapterId, exerciseId, answer, tier }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Noe gikk galt.');
      } else if (data.verdict) {
        setVerdict(data.verdict as Verdict);
        setVurderingId((data.vurderingId as string) ?? null);
      } else if (data.raw) {
        setRaw(data.raw as string);
      } else {
        setError('Uventet svar fra tjenesten.');
      }
    } catch {
      setError('Nettverksfeil — prøv igjen.');
    } finally {
      setLoading(false);
    }
  }

  async function sendRefusjon() {
    if (!vurderingId) return;
    setRefStatus('sender');
    setRefFeil(null);
    try {
      const res = await fetch('/api/ai-sensor/refusjon', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ vurderingId, begrunnelse: refBegrunnelse }),
      });
      const data = await res.json();
      if (!res.ok) {
        setRefStatus('feil');
        setRefFeil(data.error || 'Kunne ikke sende forespørselen.');
      } else {
        setRefStatus('sendt');
      }
    } catch {
      setRefStatus('feil');
      setRefFeil('Nettverksfeil — prøv igjen.');
    }
  }

  return (
    <Card className="mt-3 border-dashed">
      <CardContent className="pt-4 space-y-3">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Sparkles className="h-4 w-4 text-primary" />
          KI-vurdering av svaret ditt
        </div>

        {/* Nivåvelger */}
        <div className="grid gap-2 sm:grid-cols-2">
          {TIERS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTier(t.id as 1 | 2)}
              disabled={loading}
              className={`rounded-md border p-3 text-left text-sm transition-colors ${
                tier === t.id ? 'border-primary bg-primary/5' : 'hover:bg-muted/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{t.navn}</span>
                <span className="text-xs text-muted-foreground">{t.klipp} klipp</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{t.kort}</p>
            </button>
          ))}
        </div>

        <textarea
          className="w-full min-h-32 rounded-md border bg-background p-3 text-sm"
          placeholder="Skriv eller lim inn besvarelsen din her …"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          disabled={loading}
        />
        <div className="flex items-center gap-3">
          <Button onClick={submit} disabled={loading || answer.trim().length < 20} size="sm">
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Vurderer …
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4 mr-2" /> Vurder med KI ({TIERS[tier - 1].klipp} klipp)
              </>
            )}
          </Button>
          <span className="text-xs text-muted-foreground">
            Vurderes mot oppgaven og pensum du har møtt så langt i boka.
          </span>
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}

        {verdict && (
          <div className="space-y-3 text-sm border rounded-md p-4 bg-muted/40">
            {/* Bokstavkarakter — eget, stort felt */}
            <div className="flex items-center gap-4">
              {verdict.karakterBokstav && (
                <div
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border-2 border-primary bg-background text-4xl font-bold text-primary"
                  aria-label={`Karakter: ${verdict.karakterBokstav}`}
                >
                  {verdict.karakterBokstav}
                </div>
              )}
              <div>
                <p className="font-semibold">{verdict.karakter}</p>
                <p className="text-muted-foreground">{verdict.kortDom}</p>
              </div>
            </div>

            {verdict.styrker.length > 0 && (
              <div>
                <p className="font-medium">Styrker</p>
                <ul className="list-disc pl-5">
                  {verdict.styrker.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            )}
            {verdict.mangler.length > 0 && (
              <div>
                <p className="font-medium">Mangler</p>
                <ul className="list-disc pl-5">
                  {verdict.mangler.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            )}
            {verdict.forbedring && (
              <p>
                <span className="font-medium">Slik forbedrer du deg:</span> {verdict.forbedring}
              </p>
            )}

            {/* Premium-felter (nivå 2) */}
            {verdict.rubrikk && verdict.rubrikk.length > 0 && (
              <div>
                <p className="font-medium">A-stresstest</p>
                <ul className="list-disc pl-5">
                  {verdict.rubrikk.map((s, i) => (
                    <li key={i}>
                      <span className="font-medium">{RUBRIKK_SPORSMAL[i] ?? ''}</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {verdict.omskriving && (
              <div>
                <p className="font-medium">Ditt avsnitt — omskrevet til A-nivå</p>
                <blockquote className="border-l-2 pl-3 italic text-muted-foreground">
                  {verdict.omskriving}
                </blockquote>
              </div>
            )}
            {verdict.nesteOvelse && (
              <p>
                <span className="font-medium">Neste øvelse:</span> {verdict.nesteOvelse}
              </p>
            )}

            {/* Refusjon */}
            {vurderingId && refStatus !== 'sendt' && (
              <div className="border-t pt-3">
                {!visRefusjon ? (
                  <button
                    type="button"
                    onClick={() => setVisRefusjon(true)}
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground underline hover:text-foreground"
                  >
                    <Flag className="h-3 w-3" />
                    Ikke fornøyd med vurderingen? Meld den inn og be om refusjon
                  </button>
                ) : (
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">
                      Fortell kort hva som var galt (feil fakta, traff ikke oppgaven, for
                      generisk …). En admin ser på saken; godkjennes den, tilbakeføres klippene.
                    </p>
                    <textarea
                      className="w-full min-h-20 rounded-md border bg-background p-2 text-sm"
                      placeholder="Hva var galt med vurderingen?"
                      value={refBegrunnelse}
                      onChange={(e) => setRefBegrunnelse(e.target.value)}
                      disabled={refStatus === 'sender'}
                    />
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={sendRefusjon}
                        disabled={refStatus === 'sender' || refBegrunnelse.trim().length < 10}
                      >
                        {refStatus === 'sender' ? (
                          <>
                            <Loader2 className="h-3 w-3 mr-1 animate-spin" /> Sender …
                          </>
                        ) : (
                          'Send inn'
                        )}
                      </Button>
                      <Button size="sm" variant="ghost" onClick={() => setVisRefusjon(false)}>
                        Avbryt
                      </Button>
                    </div>
                    {refFeil && <p className="text-xs text-destructive">{refFeil}</p>}
                  </div>
                )}
              </div>
            )}
            {refStatus === 'sendt' && (
              <p className="inline-flex items-center gap-1 border-t pt-3 text-xs text-muted-foreground">
                <Check className="h-3 w-3 text-green-600" />
                Forespørselen er sendt inn — en admin ser på den. Takk for tilbakemeldingen!
              </p>
            )}
          </div>
        )}

        {raw && (
          <div className="text-sm border rounded-md p-3 bg-muted/40 whitespace-pre-wrap">{raw}</div>
        )}
      </CardContent>
    </Card>
  );
}
