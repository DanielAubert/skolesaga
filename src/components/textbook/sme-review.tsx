'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { MainNav } from '@/components/navigation/main-nav';
import { Footer } from '@/components/layout/footer';
import { ContentBlockRenderer } from '@/components/textbook/content-block-renderer';
import { getSupabase } from '@/lib/supabase/client';
import { useFocusTrap } from '@/components/accessibility/skip-nav';
import { useUser } from '@/lib/auth/hooks';
import type { TextbookChapter, TextbookContentBlock } from '@/lib/types/textbook';
import { ChevronLeft, ChevronRight, Flag, Languages, X } from 'lucide-react';

export interface SpellFlag {
  word: string;
  suggestions: string[];
  count: number;
  blocks: string[];
  level?: 'orange' | 'red' | null;
}

export interface GrammarNote {
  blockId: string;
  error: string;
  suggestions: string[];
}

export interface NavLink {
  id: string;
  title: string;
}

interface Props {
  courseId: string;
  chapterId: string;
  courseTitle: string;
  chapterTitle: string;
  sme: TextbookChapter;
  nb?: TextbookChapter;
  flags?: SpellFlag[];
  grammar?: GrammarNote[];
  prev?: NavLink | null;
  next?: NavLink | null;
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

export function SmeReview({ courseId, chapterId, courseTitle, chapterTitle, sme, nb, flags = [], grammar = [], prev = null, next = null }: Props) {
  const [showNo, setShowNo] = useState(false);
  const [showUncertainty, setShowUncertainty] = useState(true);
  const [ctx, setCtx] = useState<Ctx | null>(null);
  const [status, setStatus] = useState<{ msg: string; ok: boolean } | null>(null);
  const selBtn = useRef<HTMLButtonElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const { user } = useUser();

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
    // Auto-fyll med innlogget brukers e-post; ellers sist brukte navn.
    setReviewer(user?.email ?? localStorage.getItem('sme-reviewer') ?? '');
    if (selBtn.current) selBtn.current.style.display = 'none';
  }, [user]);

  // UI-etikett-overlegg: bytt ut hardkodede norske knappe-/UI-tekster i
  // kapittelviseren med nordsamiske (kun innenfor innholdsområdet). Strengene
  // er verifisert mot Divvun-stavekontrollen. Rører ikke delte komponenter.
  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;
    const dict: Record<string, string> = {
      'Vis hint': 'Čájet veahki', 'Skjul hint': 'Čiega veahki',
      'Vis tips': 'Čájet rávvaga', 'Skjul tips': 'Čiega rávvaga',
      'Vis oppgaver': 'Čájet bihtáid', 'Skjul oppgaver': 'Čiega bihtáid',
      'Vis løsning': 'Čájet čoavddus', 'Skjul løsning': 'Čiega čoavddus',
      'Vis fasit': 'Čájet čoavddus', 'Løsning': 'Čoavddus', 'Fasit': 'Čoavddus',
      'Løsningsforslag': 'Čoavddusevttohus',
      'Sjekk svar': 'Dárkkis vástádusa', 'Sjekk': 'Dárkkis', 'Svar': 'Vástádus',
      'Se videoløsning': 'Geahča video', 'Se videogjennomgang': 'Geahča video',
      'Vis video': 'Čájet video', 'Skjul video': 'Čiega video',
      'Tegning': 'Sárgun', 'Tekstsvar': 'Teakstavástádus',
      'Eksempel': 'Ovdamearka', 'Bevis': 'Duođaštus',
      'Forrige': 'Ovddit', 'Neste': 'Boahtte', 'Send inn': 'Sádde',
      'Oppgave': 'Bihttá', 'Oppgaver': 'Bihtát',
      // Oppgave-/svar-knapper i kapittelviseren
      'Last opp bilde': 'Sádde gova', 'Last opp': 'Sádde',
      'Tegn løsning': 'Sárgo čovdosa', 'Tegn': 'Sárgo',
      'Skriv svar': 'Čále vástádusa', 'Skriv': 'Čále',
      'Løs oppgaven': 'Čoavdde bihtá', 'Løs oppgave': 'Čoavdde bihtá',
      'Tren': 'Hárjehala', 'Øv': 'Hárjehala',
      'Vis fasiten': 'Čájet čoavddus', 'Prøv igjen': 'Geahččal fas',
    };
    const fix = (node: Text) => {
      const t = node.nodeValue ?? '';
      const key = t.trim();
      if (!key) return;
      if (dict[key]) { node.nodeValue = t.replace(key, dict[key]); return; }
      // Håndter teller-suffiks som «Vis hint (2)» → «Čájet veahki (2)».
      const m = key.match(/^(.*?)(\s*\(\d+\))$/);
      if (m && dict[m[1]]) node.nodeValue = t.replace(key, dict[m[1]] + m[2]);
    };
    const fixTree = (root: Node) => {
      const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const nodes: Text[] = [];
      let n: Node | null;
      while ((n = w.nextNode())) {
        const p = (n as Text).parentElement;
        if (p && !p.closest('input,textarea')) nodes.push(n as Text);
      }
      nodes.forEach(fix);
    };
    fixTree(el);
    const obs = new MutationObserver((muts) => {
      for (const m of muts) {
        m.addedNodes.forEach((nd) => {
          if (nd.nodeType === 1) fixTree(nd);
          else if (nd.nodeType === 3) fix(nd as Text);
        });
      }
    });
    obs.observe(el, { childList: true, subtree: true });
    return () => obs.disconnect();
  }, []);

  // Usikkerhets-fargekoding: marker ord i den samiske teksten etter Divvun-nivå
  // (orange = litt usikker / bøyingsform, red = svært usikker / konstruert) samt
  // «(no: …)»-flagg (red). Rører kun innholdsblokkene ([data-segid]), ikke matte
  // (.katex), skjema eller norsk-blokken. Manipulerer DOM direkte (utenfor React),
  // derfor rydder vi alltid opp først så av/på-bryteren virker.
  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;
    // 1) Fjern tidligere markeringer (gjør av/på idempotent)
    el.querySelectorAll('span.sme-uncertain').forEach((s) => {
      const t = document.createTextNode(s.textContent ?? '');
      s.parentNode?.replaceChild(t, s);
    });
    if (!showUncertainty) return;

    const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const red = [...new Set(flags.filter((f) => f.level === 'red').map((f) => f.word))].sort((a, b) => b.length - a.length);
    const orange = [...new Set(flags.filter((f) => f.level === 'orange').map((f) => f.word))].sort((a, b) => b.length - a.length);
    const parts = ['(?<no>\\(no:[^)]*\\))'];
    if (red.length) parts.push('(?<red>(?<!\\p{L})(?:' + red.map(esc).join('|') + ')(?!\\p{L}))');
    if (orange.length) parts.push('(?<orange>(?<!\\p{L})(?:' + orange.map(esc).join('|') + ')(?!\\p{L}))');
    let re: RegExp;
    try {
      re = new RegExp(parts.join('|'), 'gu');
    } catch {
      return;
    }

    const STYLE = {
      red: { background: 'rgba(239,68,68,0.16)', borderBottom: '2px solid rgb(220,38,38)' },
      orange: { background: 'rgba(251,146,60,0.18)', borderBottom: '2px solid rgb(234,88,12)' },
    } as const;
    const TITLE = {
      red: 'Svært usikker – konstruert/ubekreftet, bør verifiseres av nordsamisktalende',
      orange: 'Litt usikker – bøyings-/kasusform Divvun ikke kjenner, bør sjekkes',
    } as const;

    const highlight = (node: Text) => {
      const p = node.parentElement;
      if (!p || p.closest('.sme-uncertain, .katex, input, textarea')) return;
      if (!p.closest('[data-segid]')) return; // kun selve innholdet
      const text = node.nodeValue ?? '';
      re.lastIndex = 0;
      if (!re.test(text)) return;
      re.lastIndex = 0;
      const frag = document.createDocumentFragment();
      let last = 0;
      let m: RegExpExecArray | null;
      while ((m = re.exec(text))) {
        if (m[0].length === 0) { re.lastIndex++; continue; }
        if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
        const level: 'red' | 'orange' = m.groups?.orange ? 'orange' : 'red';
        const span = document.createElement('span');
        span.className = 'sme-uncertain';
        Object.assign(span.style, STYLE[level], { borderRadius: '2px', padding: '0 1px', cursor: 'help' });
        span.title = TITLE[level];
        span.textContent = m[0];
        frag.appendChild(span);
        last = m.index + m[0].length;
      }
      if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
      node.parentNode?.replaceChild(frag, node);
    };
    const scan = (root: Node) => {
      const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const nodes: Text[] = [];
      let n: Node | null;
      while ((n = w.nextNode())) nodes.push(n as Text);
      nodes.forEach(highlight);
    };
    scan(el);
    const obs = new MutationObserver((muts) => {
      for (const mu of muts) {
        mu.addedNodes.forEach((nd) => {
          if (nd.nodeType === 1 && !(nd as Element).closest?.('.sme-uncertain')) scan(nd);
          else if (nd.nodeType === 3) highlight(nd as Text);
        });
      }
    });
    obs.observe(el, { childList: true, subtree: true });
    return () => obs.disconnect();
  }, [showUncertainty, flags]);

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

  // Tilgjengelighet for modalen: fokusfelle + lukk på Escape
  const modalRef = useRef<HTMLDivElement>(null);
  useFocusTrap(modalRef, !!ctx);
  useEffect(() => {
    if (!ctx) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setCtx(null);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [ctx]);

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

  // Navigasjon mellom oversatte delkapitler (samiske etiketter: Ovddit/Boahtte).
  const navBar = (prev || next) ? (
    <nav className="flex items-stretch justify-between gap-3 my-6">
      {prev ? (
        <Link
          href={`/sme-review/${courseId}/${prev.id}`}
          className="group flex flex-1 items-center gap-2 rounded-lg border p-3 text-sm hover:bg-muted"
        >
          <ChevronLeft className="h-4 w-4 shrink-0" />
          <span className="min-w-0">
            <span className="block text-xs text-muted-foreground">Ovddit</span>
            <span className="block truncate font-medium">{prev.title}</span>
          </span>
        </Link>
      ) : <span className="flex-1" />}
      {next ? (
        <Link
          href={`/sme-review/${courseId}/${next.id}`}
          className="group flex flex-1 items-center justify-end gap-2 rounded-lg border p-3 text-right text-sm hover:bg-muted"
        >
          <span className="min-w-0">
            <span className="block text-xs text-muted-foreground">Boahtte</span>
            <span className="block truncate font-medium">{next.title}</span>
          </span>
          <ChevronRight className="h-4 w-4 shrink-0" />
        </Link>
      ) : <span className="flex-1" />}
    </nav>
  ) : null;

  // Automatisk språksjekk-panel (flyttet til bunnen – mest nyttig som referanse,
  // ikke det første en revisor skal møte).
  const langCheck = flags.length > 0 ? (
    <details className="rounded-lg border border-orange-300 bg-orange-50 dark:bg-orange-950/20 p-4 mt-8 text-sm">
      <summary className="font-semibold cursor-pointer">
        🔎 Automatisk språksjekk (Divvun stavekontroll): {flags.length} ord ikke funnet i nordsamisk ordbok
      </summary>
      <p className="mt-2 text-muted-foreground">
        Sannsynlig oppdiktede eller feilstavede ord. NB: fanger ikke «gyldig form, feil ord»,
        og engelske ord (f.eks. fra PEMDAS-huskeregelen) kan også dukke opp.
      </p>
      <ul className="mt-2 space-y-1">
        {flags.map((f) => (
          <li key={f.word} className="flex flex-wrap items-baseline gap-x-2">
            <code className="font-semibold text-orange-800 dark:text-orange-300">{f.word}</code>
            <span className="text-xs text-muted-foreground">({f.count}×)</span>
            {f.suggestions.length > 0 && (
              <span className="text-xs">forslag: {f.suggestions.slice(0, 4).join(', ')}</span>
            )}
            <button
              onClick={() => openModal({ segid: f.blocks[0] ?? '', no: '', wrong: f.word })}
              className="text-xs text-red-700 underline"
            >
              rapporter
            </button>
          </li>
        ))}
      </ul>
      {grammar.length > 0 && (
        <div className="mt-3 border-t border-orange-200 pt-2">
          <div className="font-semibold">GramDivvun grammatikk-forslag ({grammar.length})</div>
          <p className="text-xs text-muted-foreground">Kan stride med den offisielle termbasen (f.eks. nubbi-/nuppi-) — vurder, ikke automatisk fasit.</p>
          <ul className="mt-1 space-y-0.5">
            {grammar.map((g, i) => (
              <li key={i} className="text-xs">
                <code>{g.error}</code> → {g.suggestions.slice(0, 3).join(', ') || '—'}
              </li>
            ))}
          </ul>
        </div>
      )}
    </details>
  ) : null;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <MainNav />
      <main ref={mainRef} id="main-content" className="flex-1 container mx-auto max-w-4xl px-4 py-8">
        <div className="mb-4 text-sm text-muted-foreground">Nordsamisk review</div>
        {/* Siden har ingen synlig tittel-overskrift — <h1> for skjermlesere */}
        <h1 className="sr-only">Nordsamisk review: {courseTitle} — {chapterTitle}</h1>
        <div className="rounded-lg border bg-amber-50 dark:bg-amber-950/30 p-4 mb-6 text-sm">
          <p className="font-semibold mb-1">Nordsamisk review · {courseTitle} — {chapterTitle}</p>
          <p>
            Maskinutkast som <b>må</b> kvalitetssjekkes av nordsamisktalende. Marker tekst hvor som helst →
            «Rapporter», eller bruk ⚑ i hvert avsnitt. Bruk «Vis norsk (bokmål)» for å se originalen.
            Rettinger lagres i feildatabasen og brukes til å forbedre senere kapitler.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-amber-200 pt-3">
            <span className="font-semibold">Usikkerhet:</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="inline-block h-3 w-5 rounded" style={{ background: 'rgba(251,146,60,0.18)', borderBottom: '2px solid rgb(234,88,12)' }} />
              litt usikker (bøying/form)
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="inline-block h-3 w-5 rounded" style={{ background: 'rgba(239,68,68,0.16)', borderBottom: '2px solid rgb(220,38,38)' }} />
              svært usikker (konstruert / «(no: …)»)
            </span>
            <label className="inline-flex items-center gap-1.5 cursor-pointer">
              <input type="checkbox" checked={showUncertainty} onChange={(e) => setShowUncertainty(e.target.checked)} />
              vis markering
            </label>
          </div>
        </div>

        {navBar}

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

        {navBar}
        {langCheck}
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
          <div ref={modalRef} role="dialog" aria-modal="true" aria-labelledby="sme-modal-title" className="w-full max-w-lg max-h-[90vh] overflow-auto rounded-2xl bg-background p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-1">
              <h2 id="sme-modal-title" className="text-lg font-bold">Rapporter feil</h2>
              <button onClick={() => setCtx(null)} aria-label="Lukk"><X className="h-5 w-5" /></button>
            </div>
            <div className="mb-3 rounded-lg bg-muted p-2 text-xs text-muted-foreground">
              Avsnitt: {ctx.segid || '?'}{ctx.no ? ` · Norsk: "${ctx.no.slice(0, 90)}"` : ''}
            </div>
            <label htmlFor="sme-wrong" className="block text-sm font-semibold mb-1">Feil (nordsamisk)</label>
            <input id="sme-wrong" lang="se" className="w-full rounded-lg border p-2 mb-2 bg-background" value={wrong} onChange={(e) => setWrong(e.target.value)} placeholder="t.d. gerdojuvvon" />
            <label htmlFor="sme-correct" className="block text-sm font-semibold mb-1">Riktig (nordsamisk)</label>
            <input id="sme-correct" lang="se" className="w-full rounded-lg border p-2 mb-2 bg-background" value={correct} onChange={(e) => setCorrect(e.target.value)} placeholder="slik det skal være" />
            <label htmlFor="sme-category" className="block text-sm font-semibold mb-1">Kategori</label>
            <select id="sme-category" className="w-full rounded-lg border p-2 mb-2 bg-background" value={category} onChange={(e) => setCategory(e.target.value)}>
              {CATEGORIES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
            </select>
            <label className="flex items-start gap-2 text-sm mb-2">
              <input type="checkbox" className="mt-1" checked={global} onChange={(e) => setGlobal(e.target.checked)} />
              <span><b>Gjelder globalt</b> – samme retting kan brukes automatisk overalt (kun faste ord/termer, ikke setningsspesifikt).</span>
            </label>
            <label htmlFor="sme-rule" className="block text-sm font-semibold mb-1">Regel / lærdom (valgfritt)</label>
            <textarea id="sme-rule" className="w-full rounded-lg border p-2 mb-2 bg-background" value={rule} onChange={(e) => setRule(e.target.value)} />
            <label htmlFor="sme-note" className="block text-sm font-semibold mb-1">Notat (valgfritt)</label>
            <textarea id="sme-note" className="w-full rounded-lg border p-2 mb-2 bg-background" value={note} onChange={(e) => setNote(e.target.value)} />
            <label htmlFor="sme-reviewer" className="block text-sm font-semibold mb-1">Ditt navn / e-post</label>
            <input id="sme-reviewer" className="w-full rounded-lg border p-2 mb-4 bg-background" value={reviewer} onChange={(e) => setReviewer(e.target.value)} />
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
