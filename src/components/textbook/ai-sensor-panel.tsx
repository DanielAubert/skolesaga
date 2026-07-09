'use client';

/**
 * AI-sensor-panel: skriv/lim inn besvarelsen, trykk én knapp, få vurdering.
 * SKJULT: rendres kun når NEXT_PUBLIC_AI_SENSOR_ENABLED === 'true'
 * (og API-ruta krever i tillegg AI_SENSOR_ENABLED=true server-side).
 */

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Loader2 } from 'lucide-react';

interface Verdict {
  karakter: string;
  kortDom: string;
  styrker: string[];
  mangler: string[];
  forbedring: string;
}

interface AiSensorPanelProps {
  courseId: string;
  chapterId: string;
  exerciseId: string;
}

export function aiSensorEnabled(): boolean {
  return process.env.NEXT_PUBLIC_AI_SENSOR_ENABLED === 'true';
}

export function AiSensorPanel({ courseId, chapterId, exerciseId }: AiSensorPanelProps) {
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [verdict, setVerdict] = useState<Verdict | null>(null);
  const [raw, setRaw] = useState<string | null>(null);

  async function submit() {
    setLoading(true);
    setError(null);
    setVerdict(null);
    setRaw(null);
    try {
      const res = await fetch('/api/ai-sensor', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ courseId, chapterId, exerciseId, answer }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Noe gikk galt.');
      } else if (data.verdict) {
        setVerdict(data.verdict as Verdict);
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

  return (
    <Card className="mt-3 border-dashed">
      <CardContent className="pt-4 space-y-3">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Sparkles className="h-4 w-4 text-primary" />
          KI-vurdering av svaret ditt
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
                <Sparkles className="h-4 w-4 mr-2" /> Vurder med KI
              </>
            )}
          </Button>
          <span className="text-xs text-muted-foreground">
            Vurderes mot oppgaven og pensum du har møtt så langt i boka.
          </span>
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}

        {verdict && (
          <div className="space-y-2 text-sm border rounded-md p-3 bg-muted/40">
            <p>
              <span className="font-semibold">Vurdering:</span> {verdict.karakter}
            </p>
            <p>{verdict.kortDom}</p>
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
          </div>
        )}

        {raw && (
          <div className="text-sm border rounded-md p-3 bg-muted/40 whitespace-pre-wrap">{raw}</div>
        )}
      </CardContent>
    </Card>
  );
}
