'use client';

/**
 * Svarfelt for prøver: eleven skriver besvarelsen sin i et eget felt under
 * prøveoppgaven (lagres automatisk lokalt, per prøve), og kan — når KI-sensoren
 * er aktivert (NEXT_PUBLIC_AI_SENSOR_ENABLED) — be om KI-vurdering av
 * besvarelsen med samme modellstige som oppgave-panelet.
 *
 * Rendres automatisk i prøve-collapsibles (se content-block-renderer).
 */

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { PenLine, Sparkles, Loader2, Check } from 'lucide-react';
import { aiSensorEnabled } from './ai-sensor-panel';

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

const TIERS = [
  { id: 1, navn: 'Karakter + hvorfor', klipp: 1 },
  { id: 2, navn: 'Ditt avsnitt til A', klipp: 3 },
] as const;

interface ProveSvarFeltProps {
  courseId: string;
  chapterId: string;
  proveTittel: string;
  oppgaveTekst: string;
}

export function ProveSvarFelt({ courseId, chapterId, proveTittel, oppgaveTekst }: ProveSvarFeltProps) {
  const storageKey = `prove-svar:${courseId}:${chapterId}:${proveTittel}`;
  const [answer, setAnswer] = useState('');
  const [saved, setSaved] = useState(false);
  const [tier, setTier] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [verdict, setVerdict] = useState<Verdict | null>(null);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Last inn lagret svar
  useEffect(() => {
    try {
      const lagret = localStorage.getItem(storageKey);
      if (lagret) setAnswer(lagret);
    } catch {
      /* localStorage utilgjengelig — feltet virker fortsatt, bare uten lagring */
    }
  }, [storageKey]);

  // Autolagre (debounce)
  function onChange(v: string) {
    setAnswer(v);
    setSaved(false);
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      try {
        localStorage.setItem(storageKey, v);
        setSaved(true);
      } catch {
        /* ignorer */
      }
    }, 600);
  }

  async function vurder() {
    setLoading(true);
    setError(null);
    setVerdict(null);
    try {
      const res = await fetch('/api/ai-sensor', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          courseId,
          chapterId,
          question: `${proveTittel}\n\n${oppgaveTekst}`.slice(0, 6000),
          answer,
          tier,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Noe gikk galt.');
      } else if (data.verdict) {
        setVerdict(data.verdict as Verdict);
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
    <div className="mt-4 rounded-md border border-primary/20 bg-primary/[0.02] p-4 space-y-3">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-sm font-medium">
          <PenLine className="h-4 w-4 text-primary" />
          Skriv besvarelsen din her
        </div>
        {saved && (
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <Check className="h-3 w-3 text-green-600" /> Lagret på denne enheten
          </span>
        )}
      </div>
      <textarea
        className="w-full min-h-40 rounded-md border bg-background p-3 text-sm"
        placeholder="Skriv svaret ditt før du åpner løsningsforslaget — det er slik du finner ut hva du faktisk kan. Svaret lagres automatisk på denne enheten."
        value={answer}
        onChange={(e) => onChange(e.target.value)}
      />

      {aiSensorEnabled() && (
        <div className="space-y-3 border-t pt-3">
          <div className="flex flex-wrap items-center gap-2">
            {TIERS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTier(t.id as 1 | 2)}
                disabled={loading}
                className={`rounded-md border px-3 py-1.5 text-xs transition-colors ${
                  tier === t.id ? 'border-primary bg-primary/5 font-medium' : 'hover:bg-muted/50'
                }`}
              >
                {t.navn} · {t.klipp} klipp
              </button>
            ))}
            <Button
              size="sm"
              onClick={vurder}
              disabled={loading || answer.trim().length < 20}
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Vurderer …
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" /> Få KI-vurdering
                </>
              )}
            </Button>
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          {verdict && (
            <div className="space-y-3 text-sm border rounded-md p-4 bg-muted/40">
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
            </div>
          )}
        </div>
      )}
    </div>
  );
}
