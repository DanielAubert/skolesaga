'use client';

import { useState } from 'react';

/** «Få beskjed når hele boka åpnes» — lagres som tilbakemelding med kategori «interesse» (Daniel 17.9.2026). */
export function VarsleMeg({ courseId, courseTitle, kompakt = false }: { courseId: string; courseTitle: string; kompakt?: boolean }) {
  const [epost, setEpost] = useState('');
  const [status, setStatus] = useState<'klar' | 'sender' | 'sendt' | 'feil'>('klar');
  const [melding, setMelding] = useState('');

  async function send(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(epost)) { setStatus('feil'); setMelding('Skriv inn en gyldig e-postadresse.'); return; }
    setStatus('sender');
    try {
      const r = await fetch('/api/feedback', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category: 'interesse', message: `Vil ha beskjed når hele boka «${courseTitle}» åpnes.`, courseId, email: epost, url: typeof window !== 'undefined' ? window.location.href : '' }),
      });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(d.message || `Feil ${r.status}`);
      setStatus('sendt'); setMelding('Takk! Du får en e-post når hele boka er åpen.');
    } catch (err) {
      setStatus('feil'); setMelding((err as Error).message);
    }
  }

  if (status === 'sendt') return <p className="text-sm text-green-700 dark:text-green-300">{melding}</p>;
  return (
    <form onSubmit={send} className={`flex flex-col sm:flex-row gap-2 ${kompakt ? '' : 'mt-2'}`}>
      <label htmlFor={`varsle-${courseId}`} className="sr-only">E-post</label>
      <input id={`varsle-${courseId}`} type="email" required value={epost} onChange={(e) => setEpost(e.target.value)}
        placeholder="din@epost.no" className="flex-1 rounded-md border bg-background px-3 py-2 text-sm" />
      <button type="submit" disabled={status === 'sender'}
        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:opacity-50">
        {status === 'sender' ? 'Sender …' : 'Få beskjed når hele boka åpnes'}
      </button>
      {status === 'feil' && <span className="text-sm text-red-600 self-center">{melding}</span>}
    </form>
  );
}
