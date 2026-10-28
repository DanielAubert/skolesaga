'use client';

/**
 * «Gjør dette i GeoGebra» — statisk instruksjonsboks som erstatter de innbygde GeoGebra-appletene.
 *
 * Daniel 28.10.2026: «Da fjerner vi alle spor av GeoGebra integrasjon ifra sidene». GeoGebras lisens
 * (geogebra.org/license) krever spesiallisens for kommersiell bruk, også i lærebøker og kurs mot betaling.
 * Derfor bygger vi ikke inn GeoGebra (ingen applet, iframe, deployggb.js eller Apps API). Eleven får
 * kommandoene som tekst og en vanlig lenke til GeoGebra i ny fane — lenking er ikke innbygging.
 *
 * Pyntekommandoene (farge, etikett, linjestil …) fantes bare for at appleten skulle se ryddig ut; de
 * filtreres bort så eleven bare ser det som faktisk lager objektene.
 */

import { useState } from 'react';
import { Check, Copy, ExternalLink } from 'lucide-react';
import { LatexRenderer } from '@/components/textbook/latex-renderer';
import { cn } from '@/lib/utils';

export const GEOGEBRA_LENKE = 'https://www.geogebra.org/calculator';

const PYNTEKOMMANDOER = new Set([
  'SetColor', 'SetCaption', 'SetLineStyle', 'SetLineThickness', 'SetPointSize', 'SetPointStyle',
  'SetLabelMode', 'ShowLabel', 'SetAxisLabels', 'SetFilling', 'SetDecoration', 'SetFixed',
  'SetTooltipMode', 'SetBackgroundColor', 'SetVisibleInView', 'ShowAxes', 'ShowGrid', 'SetLayer',
  'SetConditionToShowObject', 'SetDynamicColor', 'SetTrace', 'SetLevelOfDetail',
]);

// Viser beskrivelsen til farger eller stiplede linjer («den blå grafen»), beholdes farge- og linjestilkommandoene,
// ellers ville eleven fått andre farger enn teksten snakker om (bokmål og nynorsk).
const FARGEORD = /blå|rød|raud|grønn|grøn|oransje|lilla|svart|grå|gul|rosa|brun|stipl|farge/i;
const FARGEKOMMANDOER = new Set(['SetColor', 'SetLineStyle']);

/** Kommandoene eleven skal skrive inn: uten pynt og tomme linjer. */
export function elevkommandoer(kommandoer: string[] | undefined, beskrivelse?: string): string[] {
  const behold = beskrivelse && FARGEORD.test(beskrivelse) ? FARGEKOMMANDOER : new Set<string>();
  return (kommandoer ?? [])
    .map((k) => k.trim())
    .filter((k) => {
      if (!k) return false;
      const navn = k.match(/^([A-Za-z]+)\s*[([]/)?.[1];
      return !(navn && PYNTEKOMMANDOER.has(navn) && !behold.has(navn));
    });
}

interface GjorIGeoGebraProps {
  tittel?: string;
  beskrivelse?: string;
  kommandoer?: string[];
  /** Overskrift over kommandolista. */
  kommandoOverskrift?: string;
  /** Tekst rundt boksen (f.eks. oppgaveteksten) som kan nevne farger; styrer om fargekommandoene beholdes. */
  kontekst?: string;
  className?: string;
}

export function GjorIGeoGebra({
  tittel,
  beskrivelse,
  kommandoer,
  kommandoOverskrift = 'Skriv inn én linje om gangen i inntastingsfeltet:',
  kontekst,
  className,
}: GjorIGeoGebraProps) {
  const linjer = elevkommandoer(kommandoer, [tittel, beskrivelse, kontekst].filter(Boolean).join(' '));
  const [kopiert, setKopiert] = useState(false);

  const kopier = async () => {
    try {
      await navigator.clipboard.writeText(linjer.join('\n'));
      setKopiert(true);
      setTimeout(() => setKopiert(false), 2000);
    } catch {
      /* utklippstavla er ikke tilgjengelig (f.eks. uten https) — kommandoene står uansett synlig */
    }
  };

  return (
    <section
      className={cn(
        'my-6 rounded-xl border border-sky-200 bg-sky-50/60 p-4 sm:p-5 dark:border-sky-900/60 dark:bg-sky-950/30',
        className,
      )}
      aria-label={tittel ? `Gjør dette i GeoGebra: ${tittel}` : 'Gjør dette i GeoGebra'}
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-300">
        Gjør dette i GeoGebra
      </p>
      {tittel && (
        <h4 className="mt-1 text-base font-semibold text-foreground">
          <LatexRenderer content={tittel} inline />
        </h4>
      )}
      {beskrivelse && (
        <div className="mt-2 text-sm text-muted-foreground">
          <LatexRenderer content={beskrivelse} inline />
        </div>
      )}
      {!tittel && !beskrivelse && linjer.length === 0 && (
        <p className="mt-2 text-sm text-muted-foreground">Løs oppgaven i GeoGebra i en ny fane.</p>
      )}

      {linjer.length > 0 && (
        <div className="mt-3">
          <div className="mb-1.5 flex items-center justify-between gap-2">
            <p className="text-sm text-foreground">{kommandoOverskrift}</p>
            <button
              type="button"
              onClick={kopier}
              className="inline-flex shrink-0 items-center gap-1 rounded-md px-2 py-1 text-xs text-sky-700 hover:bg-sky-100 dark:text-sky-300 dark:hover:bg-sky-900/40"
            >
              {kopiert ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              {kopiert ? 'Kopiert' : 'Kopier'}
            </button>
          </div>
          <pre className="overflow-x-auto whitespace-pre-wrap break-words rounded-lg border border-sky-200 bg-white p-3 font-mono text-sm leading-relaxed text-slate-900 dark:border-sky-900/60 dark:bg-slate-950 dark:text-slate-100">
            {linjer.join('\n')}
          </pre>
          <p className="mt-1.5 text-xs text-muted-foreground">
            Med språket satt til norsk forstår GeoGebra kommandonavnene både på norsk og engelsk.
          </p>
        </div>
      )}

      <a
        href={GEOGEBRA_LENKE}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex min-h-[44px] items-center gap-1.5 rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
      >
        Åpne GeoGebra
        <ExternalLink className="h-4 w-4" aria-hidden />
        <span className="sr-only">(åpnes i ny fane)</span>
      </a>
    </section>
  );
}
