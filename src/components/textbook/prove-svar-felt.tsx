'use client';

/**
 * Svarfelt for prøver: eleven skriver besvarelsen sin i et eget felt under
 * prøveoppgaven, og kan — når KI-sensoren er aktivert — be om KI-vurdering.
 *
 * Lagring: alltid lokalt (localStorage, per prøve). Innloggede brukere synkes
 * i tillegg til kontoen (/api/textbook/prove-svar) så svaret følger dem på
 * tvers av enheter. Grensesnittet sier ærlig hvilken av delene som gjelder.
 *
 * Studentpanel-krav bakt inn: bestått-fag får bestått-gradering (ikke
 * bokstav), valgfri «skjul karakteren»-modus, og «kalibrert mot bokas
 * kriterier»-merking under vurderingen.
 */

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { PenLine, Sparkles, Loader2, Check, Eye } from 'lucide-react';
import { aiSensorEnabled } from './ai-sensor-panel';
import { useUser } from '@/lib/auth/hooks';

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
  const { user } = useUser();
  const [answer, setAnswer] = useState('');
  const [saved, setSaved] = useState(false);
  const [tier, setTier] = useState<1 | 2>(1);
  const [skjulKarakter, setSkjulKarakter] = useState(false);
  const [karakterVist, setKarakterVist] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [verdict, setVerdict] = useState<Verdict | null>(null);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Last inn lagret svar: lokalt først; innlogget uten lokalt svar → hent fra konto.
  useEffect(() => {
    let lokalt = '';
    try {
      lokalt = localStorage.getItem(storageKey) ?? '';
    } catch {
      /* localStorage utilgjengelig */
    }
    if (lokalt) {
      setAnswer(lokalt);
      return;
    }
    if (user?.id) {
      const params = new URLSearchParams({ courseId, chapterId, prove: proveTittel });
      fetch(`/api/textbook/prove-svar?${params}`)
        .then((r) => (r.ok ? r.json() : null))
        .then((d) => {
          if (d?.text) setAnswer(d.text as string);
        })
        .catch(() => {});
    }
  }, [storageKey, user?.id, courseId, chapterId, proveTittel]);

  // Autolagre (debounce): alltid lokalt, + kontosynk når innlogget.
  function onChange(v: string) {
    setAnswer(v);
    setSaved(false);
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      try {
        localStorage.setItem(storageKey, v);
      } catch {
        /* ignorer */
      }
      setSaved(true);
      if (user?.id) {
        fetch('/api/textbook/prove-svar', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ courseId, chapterId, prove: proveTittel, text: v }),
        }).catch(() => {});
      }
    }, 800);
  }

  async function vurder() {
    setLoading(true);
    setError(null);
    setVerdict(null);
    setKarakterVist(false);
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

  const visGrade = verdict && (!skjulKarakter || karakterVist);

  return (
    <div className="mt-4 rounded-md border border-primary/20 bg-primary/[0.02] p-4 space-y-3">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-sm font-medium">
          <PenLine className="h-4 w-4 text-primary" />
          Skriv besvarelsen din her
        </div>
        {saved && (
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <Check className="h-3 w-3 text-green-600" />
            {user
              ? 'Lagret — synkes til kontoen din'
              : 'Lagret kun på denne enheten — logg inn for å ta svaret med deg'}
          </span>
        )}
      </div>
      <textarea
        className="w-full min-h-40 rounded-md border bg-background p-3 text-sm"
        placeholder="Skriv svaret ditt før du åpner løsningsforslaget — det er slik du finner ut hva du faktisk kan. Svaret lagres automatisk."
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
            <Button size="sm" onClick={vurder} disabled={loading || answer.trim().length < 20}>
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
          {/* Karakterfri modus: «noen dager tåler jeg bare hvorfor-et, ikke bokstaven» */}
          <label className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer">
            <input
              type="checkbox"
              checked={skjulKarakter}
              onChange={(e) => {
                setSkjulKarakter(e.target.checked);
                setKarakterVist(false);
              }}
              disabled={loading}
              className="h-3.5 w-3.5"
            />
            Skjul karakteren — vis bare vurderingen (du kan hente den frem etterpå)
          </label>
          {error && <p className="text-sm text-destructive">{error}</p>}
          {verdict && (
            <div className="space-y-3 text-sm border rounded-md p-4 bg-muted/40">
              <div className="flex items-center gap-4">
                {visGrade ? (
                  verdict.karakterBokstav ? (
                    <div
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border-2 border-primary bg-background text-4xl font-bold text-primary"
                      aria-label={`Karakter: ${verdict.karakterBokstav}`}
                    >
                      {verdict.karakterBokstav}
                    </div>
                  ) : (
                    // Bestått/ikke bestått-fag: gradering i stedet for bokstav
                    <div className="shrink-0 rounded-lg border-2 border-primary bg-background px-4 py-3 text-lg font-bold text-primary">
                      {verdict.karakter}
                    </div>
                  )
                ) : (
                  <button
                    type="button"
                    onClick={() => setKarakterVist(true)}
                    className="flex h-16 shrink-0 items-center gap-2 rounded-lg border-2 border-dashed px-4 text-sm text-muted-foreground hover:text-foreground"
                  >
                    <Eye className="h-4 w-4" /> Vis karakter
                  </button>
                )}
                <div>
                  {visGrade && verdict.karakterBokstav && (
                    <p className="font-semibold">{verdict.karakter}</p>
                  )}
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
              <p className="border-t pt-2 text-xs text-muted-foreground">
                Vurderingen er kalibrert mot bokas kriterier og pensum så langt — veiledende,
                ikke en garanti for sensors dom.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
