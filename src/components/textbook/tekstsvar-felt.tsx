'use client';

/**
 * Svarfelt for deloppgaver med TEKSTFASIT (språkfag) på oppgavesiden. Vanlig tekstfelt med mobilens eget tastatur
 * (ikke det numeriske regnetastaturet), og en tegnrad for språkets spesialtegn (é ç ß ñ ¿ …), så eleven kan skrive
 * riktig også på et tastatur uten dem. Sjekken ligger i `src/lib/textbook/tekstsvar.ts`.
 * Daniel 23.11.2026: «Undersøk også aksentene og slikt og rett kontrolleren.»
 */

import type { RefObject } from 'react';
import { Input } from '@/components/ui/input';
import { LatexRenderer } from './latex-renderer';
import { TEGNRAD, type Lang } from '@/lib/textbook/tekstsvar';

interface TekstsvarFeltProps {
  oppgave: string;
  verdi: string;
  lang: Lang;
  feil: boolean;
  aktiv: boolean;
  inputRef: RefObject<HTMLInputElement | null>;
  onEndre: (verdi: string) => void;
  onSend: () => void;
}

export function TekstsvarFelt({ oppgave, verdi, lang, feil, aktiv, inputRef, onEndre, onSend }: TekstsvarFeltProps) {
  const settInn = (tegn: string) => {
    const el = inputRef.current;
    const start = el?.selectionStart ?? verdi.length;
    const slutt = el?.selectionEnd ?? verdi.length;
    onEndre(verdi.slice(0, start) + tegn + verdi.slice(slutt));
    setTimeout(() => {
      el?.focus();
      el?.setSelectionRange(start + tegn.length, start + tegn.length);
    }, 10);
  };
  const tegn = TEGNRAD[lang] ?? [];
  return (
    <div className="w-full max-w-xl space-y-3">
      <div className="text-lg md:text-xl font-medium text-center break-words">
        <LatexRenderer content={oppgave} />
      </div>
      <Input
        ref={inputRef}
        type="text"
        inputMode="text"
        lang={lang === 'nb' ? 'nb' : lang}
        autoCapitalize="off"
        autoCorrect="off"
        autoComplete="off"
        spellCheck={false}
        value={verdi}
        onChange={(e) => onEndre(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter') onSend(); }}
        disabled={!aktiv}
        aria-label="Svaret ditt"
        placeholder="Skriv svaret her"
        className={`h-12 text-lg border-2 ${feil ? 'border-red-500 bg-red-50 dark:bg-red-950/30' : 'border-blue-300 focus:border-blue-500'}`}
      />
      {tegn.length > 0 && (
        <div className="flex flex-wrap justify-center gap-1.5" aria-label="Spesialtegn">
          {tegn.map((t) => (
            <button
              key={t}
              type="button"
              disabled={!aktiv}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => settInn(t)}
              className="min-w-10 h-10 px-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-lg hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-50"
              aria-label={`Sett inn ${t}`}
            >
              {t}
            </button>
          ))}
        </div>
      )}
      <div className="flex justify-center">
        <button
          type="button"
          onClick={onSend}
          disabled={!aktiv || !verdi.trim()}
          className="h-11 px-6 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-50"
        >
          Sjekk svaret
        </button>
      </div>
    </div>
  );
}
