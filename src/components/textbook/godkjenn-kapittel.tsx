'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

/** Godkjenningsknapp øverst i kapittelet (Daniel 17.9.2026). Vises bare på den lokale vurderingsserveren. */
export function GodkjennKapittel({ chapterId, chapterLabel }: { chapterId: string; chapterLabel: string }) {
  const [godkjent, setGodkjent] = useState<boolean | null>(null);
  const [dato, setDato] = useState<string | undefined>();
  const [kan, setKan] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [feil, setFeil] = useState<string | null>(null);
  const [jobber, setJobber] = useState(false);

  useEffect(() => {
    fetch(`/api/kapittel-godkjenning?chapterId=${encodeURIComponent(chapterId)}`)
      .then((r) => r.json())
      .then((d) => { setGodkjent(!!d.godkjent); setDato(d.detaljer?.dato); setKan(!!d.kanGodkjenne); setAdmin(!!d.erAdmin); })
      .catch(() => setFeil('Kunne ikke lese godkjenningsstatus'));
  }, [chapterId]);

  async function sett(ny: boolean) {
    setJobber(true); setFeil(null);
    try {
      const r = await fetch('/api/kapittel-godkjenning', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ chapterId, godkjent: ny }) });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error || `Feil ${r.status}`);
      setGodkjent(ny); setDato(d.detaljer?.dato);
    } catch (e) {
      setFeil((e as Error).message);
    } finally {
      setJobber(false);
    }
  }

  if ((!kan && !admin) || godkjent === null) return null;
  return (
    <div className={`container mx-auto px-4 mt-4 flex flex-wrap items-center gap-3 rounded-lg border px-4 py-2 text-sm ${godkjent ? 'border-green-300 bg-green-50 dark:bg-green-950/30' : 'border-amber-300 bg-amber-50 dark:bg-amber-950/30'}`}>
      {godkjent ? <CheckCircle2 className="h-5 w-5 text-green-600" /> : <Circle className="h-5 w-5 text-amber-600" />}
      <span className="font-medium">
        {godkjent ? `Godkjent for visning${dato ? ` · ${dato}` : ''}` : `Ikke godkjent — ${chapterLabel} er skjult for lærerne`}
      </span>
      {!kan && <span className="text-xs text-muted-foreground">(godkjennes på den lokale vurderingsserveren)</span>}
      {kan && <button
        type="button"
        onClick={() => sett(!godkjent)}
        disabled={jobber}
        className={`ml-auto rounded-md px-3 py-1 text-sm font-medium text-white disabled:opacity-50 ${godkjent ? 'bg-slate-500 hover:bg-slate-600' : 'bg-green-600 hover:bg-green-700'}`}
      >
        {jobber ? 'Lagrer …' : godkjent ? 'Trekk godkjenning' : 'Godkjenn kapittel'}
      </button>}
      {feil && <span className="text-red-600">{feil}</span>}
    </div>
  );
}
