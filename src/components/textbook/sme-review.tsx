'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { MainNav } from '@/components/navigation/main-nav';
import { Footer } from '@/components/layout/footer';
import { ContentBlockRenderer } from '@/components/textbook/content-block-renderer';
import { getSupabase } from '@/lib/supabase/client';
import type { TextbookChapter, TextbookContentBlock } from '@/lib/types/textbook';
import { Flag, Languages, X } from 'lucide-react';

interface Props {
  courseId: string;
  chapterId: string;
  courseTitle: string;
  chapterTitle: string;
  sme: TextbookChapter;
  nb?: TextbookChapter;
}

interface Ctx {
  segid: string;
  no: string;
  wrong?: string;
}

/** Plukk ut lesbar norsk tekst fra en blokk (kontekst i feilrapport). */
function extractText(block?: TextbookContentBlock): string {
  if (!block) return '';
  const b = block as Record<string, unknown>;
  const parts: string[] = [];
  for (const key of ['title', 'content', 'problem', 'solution', 'task', 'buttonText']) {
    const v = b[key];
    if (typeof v === 'string') parts.push(v);
  }
  if (b.exercise && typeof b.exercise === 'object') {
    const ex = b.exercise as Record<string, unknown>;
    if (typeof ex.task === 'string') parts.push(ex.task);
  }
  return parts.join(' — ').replace(/\s+/g, ' ').trim();
}

const CATEGORIES = [
  ['terminologi', 'Terminologi (fagord)'],
  ['staving', 'Staving / diakritikk'],
  ['morfologi', 'Morfologi (bøying/gradering)'],
  ['sammensetning', 'Sammensetning'],
  ['syntaks', 'Syntaks / ordstilling'],
  ['ordvalg', 'Ordvalg'],
  ['annet', 'Annet'],
];

export function SmeReview({ courseId, chapterId, courseTitle, chapterTitle, sme, nb }: Props) {
  const [showNo, setShowNo] = useState(false);
  const [ctx, setCtx] = useState<Ctx | null>(null);
  const [status, setStatus] = useState<{ msg: string; ok: boolean } | null>(null);
  const selBtn = useRef<HTMLButtonElement>(null);

  // form-felt
  const [wrong, setWrong] = useState('');
  const [correct, setCorrect] = useState('');
  const [category, setCategory] = useState('terminologi');
  const [global, setGlobal] = useState(false);
  const [rule, setRule] = useState('');
  const [note, setNote] = useState('');
  const [reviewer, setReviewer] = useState('');

  // norsk-blokk pr. id
  const nbById = new Map<string, TextbookContentBlock>();
  (nb?.content ?? []).forEach((b) => nbById.set(b.id, b));

  const openModal = useCallback((c: Ctx) => {
    setCtx(c);
    setWrong(c.wrong ?? '');
    setCorrect('');
    setCategory('terminologi');
    setGlobal(false);
    setRule('');
    setNote('');
    setReviewer(localStorage.getItem('sme-reviewer') ?? '');
    if (selBtn.current) selBtn.current.style.display = 'none';
  }, []);

  // markering hvor som helst -> flytende knapp
  useEffect(() => {
    const onMouseUp = () => {
      setTimeout(() => {
        const sel = window.getSelection();
        const txt = sel?.toString().trim() ?? '';
        const node = sel?.anchorNode?.parentElement;
        const seg = node?.closest('[data-segid]') as HTMLElement | null;
        const btn = selBtn.current;
        if (!btn) return;
        if (txt && txt.length < 200 && seg && sel) {
          const r = sel.getRangeAt(0).getBoundingClientRect();
          btn.style.left = Math.min(r.left, window.innerWidth - 180) + 'px';
          btn.style.top = r.bottom + window.scrollY + 8 + 'px';
          btn.style.display = 'block';
          btn.dataset.segid = seg.dataset.segid ?? '';
          btn.dataset.no = seg.dataset.no ?? '';
          btn.dataset.wrong = txt;
        } else {
          btn.style.display = 'none';
        }
      }, 10);
    };
    document.addEventListener('mouseup', onMouseUp);
    return () => document.removeEventListener('mouseup', onMouseUp);
  }, []);

  async function submit() {
    if (!correct.trim()) {
      alert('Fyll inn riktig nordsamisk form.');
      return;
    }
    localStorage.setItem('sme-reviewer', reviewer.trim());
    const rec = {
      book: courseId,
      chapter: chapterId,
      segment_id: ctx?.segid ?? null,
      source_no: ctx?.no ?? null,
      wrong_sme: wrong.trim() || null,
      correct_sme: correct.trim(),
      category,
      scope: global ? 'term' : 'sentence',
      apply_global: global,
      rule: rule.trim() || null,
      note: note.trim() || null,
      reviewer: reviewer.trim() || null,
      status: 'proposed',
    };
    try {
      const { error } = await getSupabase().from('sme_corrections').insert([rec]);
      if (error) {
        setStatus({ msg: 'Feil ved innsending: ' + error.message, ok: false });
      } else {
        setStatus({ msg: 'Takk! Feilen er sendt inn.', ok: true });
        setCtx(null);
      }
    } catch (e) {
      setStatus({ msg: 'Nettverksfeil: ' + (e as Error).message, ok: false });
    }
    setTimeout(() => setStatus(null), 3500);
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <MainNav />
      <main className="flex-1 container mx-auto max-w-4xl px-4 py-8">
        <div className="mb-4 text-sm text-muted-foreground">Nordsamisk review</div>
        <div className="rounded-lg border bg-amber-50 dark:bg-amber-950/30 p-4 mb-6 text-sm">
          <p className="font-semibold mb-1">Nordsamisk review · {courseTitle} — {chapterTitle}</p>
          <p>
            Maskinutkast som <b>må</b> kvalitetssjekkes av nordsamisktalende. Marker tekst hvor som helst →
            «Rapporter», eller bruk ⚑ i hvert avsnitt. Bruk «Vis norsk (bokmål)» for å se originalen.
            Rettinger lagres i feildatabasen og brukes til å forbedre senere kapitler.
          </p>
        </div>

        {sme.content.map((block) => {
          const nbBlock = nbById.get(block.id);
          return (
            <div
              key={block.id}
              data-segid={block.id}
              data-no={extractText(nbBlock)}
              className="relative group mb-2 rounded-md border border-transparent hover:border-border p-2"
            >
              <button
                onClick={() => openModal({ segid: block.id, no: extractText(nbBlock) })}
                title="Rapporter feil i dette avsnittet"
                className="absolute top-1 right-1 z-10 opacity-30 group-hover:opacity-100 rounded bg-red-100 text-red-700 p-1.5 transition"
              >
                <Flag className="h-4 w-4" />
              </button>
              <ContentBlockRenderer block={block} chapterId={chapterId} courseId={courseId} />
              {showNo && nbBlock && (
                <div className="mt-2 border-t border-dashed border-green-400 pt-2">
                  <div className="text-xs font-semibold text-green-700 mb-1">🇳🇴 Norsk (bokmål)</div>
                  <ContentBlockRenderer block={nbBlock} chapterId={chapterId} courseId={courseId} />
                </div>
              )}
            </div>
          );
        })}
      </main>
      <Footer />

      {/* Flytende «Vis norsk»-knapp – synlig uansett hvor du er */}
      <button
        onClick={() => setShowNo((v) => !v)}
        className="fixed right-5 bottom-6 z-[100] flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 font-semibold text-white shadow-lg hover:bg-green-700"
      >
        <Languages className="h-5 w-5" /> {showNo ? 'Skjul norsk (bokmål)' : 'Vis norsk (bokmål)'}
      </button>

      {/* Flytende «rapporter utvalg»-knapp */}
      <button
        ref={selBtn}
        style={{ display: 'none', position: 'absolute' }}
        onClick={() => openModal({
          segid: selBtn.current?.dataset.segid ?? '',
          no: selBtn.current?.dataset.no ?? '',
          wrong: selBtn.current?.dataset.wrong ?? '',
        })}
        className="z-[150] rounded-lg bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-lg"
      >
        ⚑ Rapporter utvalg
      </button>

      {status && (
        <div
          className={`fixed left-1/2 bottom-20 z-[400] -translate-x-1/2 rounded-lg px-5 py-3 text-white shadow-lg ${status.ok ? 'bg-emerald-700' : 'bg-red-800'}`}
        >
          {status.msg}
        </div>
      )}

      {/* Modal */}
      {ctx && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/45 p-4" onClick={() => setCtx(null)}>
          <div className="w-full max-w-lg max-h-[90vh] overflow-auto rounded-2xl bg-background p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-lg font-bold">Rapporter feil</h2>
              <button onClick={() => setCtx(null)}><X className="h-5 w-5" /></button>
            </div>
            <div className="mb-3 rounded-lg bg-muted p-2 text-xs text-muted-foreground">
              Avsnitt: {ctx.segid || '?'}{ctx.no ? ` · Norsk: "${ctx.no.slice(0, 90)}"` : ''}
            </div>
            <label className="block text-sm font-semibold mb-1">Feil (nordsamisk)</label>
            <input className="w-full rounded-lg border p-2 mb-2 bg-background" value={wrong} onChange={(e) => setWrong(e.target.value)} placeholder="t.d. gerdojuvvon" />
            <label className="block text-sm font-semibold mb-1">Riktig (nordsamisk)</label>
            <input className="w-full rounded-lg border p-2 mb-2 bg-background" value={correct} onChange={(e) => setCorrect(e.target.value)} placeholder="slik det skal være" />
            <label className="block text-sm font-semibold mb-1">Kategori</label>
            <select className="w-full rounded-lg border p-2 mb-2 bg-background" value={category} onChange={(e) => setCategory(e.target.value)}>
              {CATEGORIES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
            </select>
            <label className="flex items-start gap-2 text-sm mb-2">
              <input type="checkbox" className="mt-1" checked={global} onChange={(e) => setGlobal(e.target.checked)} />
              <span><b>Gjelder globalt</b> – samme retting kan brukes automatisk overalt (kun faste ord/termer, ikke setningsspesifikt).</span>
            </label>
            <label className="block text-sm font-semibold mb-1">Regel / lærdom (valgfritt)</label>
            <textarea className="w-full rounded-lg border p-2 mb-2 bg-background" value={rule} onChange={(e) => setRule(e.target.value)} />
            <label className="block text-sm font-semibold mb-1">Notat (valgfritt)</label>
            <textarea className="w-full rounded-lg border p-2 mb-2 bg-background" value={note} onChange={(e) => setNote(e.target.value)} />
            <label className="block text-sm font-semibold mb-1">Ditt navn</label>
            <input className="w-full rounded-lg border p-2 mb-4 bg-background" value={reviewer} onChange={(e) => setReviewer(e.target.value)} />
            <div className="flex gap-3">
              <button onClick={submit} className="rounded-lg bg-red-700 px-4 py-2 font-semibold text-white">Send inn</button>
              <button onClick={() => setCtx(null)} className="rounded-lg bg-muted px-4 py-2 font-semibold">Avbryt</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
