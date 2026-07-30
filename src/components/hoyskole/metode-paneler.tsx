'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * De to forklaringspanelene som står øverst på institusjonssidene, rett under
 * heroet: hva bøkene er bygd på, og hvordan de lages.
 *
 * Teksten sto tidligere som et langt heroavsnitt på /trinn/hoyere pluss en
 * «Slik virker det»-seksjon. Etter at forsiden begynte å lenke rett til hver
 * institusjon, ble den siden et mellomsteg de fleste hopper over — og da sto
 * forklaringen på en side ingen leste. Panelene er lukket som standard, så de
 * ikke skyver fagene ned for den som bare skal finne emnet sitt.
 */

const TRINN = [
  {
    n: '1',
    tittel: 'KI leser hele eksamensarkivet',
    tekst:
      'KI-agentene våre leser fagets tidligere eksamener og lager frekvensanalyse av hva som faktisk kommer – så du prioriterer temaene som gir uttelling, ikke de som tilfeldigvis står først i pensumboka.',
  },
  {
    n: '2',
    tittel: 'Sensorkravene – oversatt til bruksanvisning',
    tekst:
      'Der arkivet har sensorveiledninger, destillerer KI-en dem til sensornøkler per tema: hva som må med for å bestå, og hva som skiller en C fra en A. Hver bok oppgir kildene sine i kapittel 0.',
  },
  {
    n: '3',
    tittel: 'Bygget med Anthropics toppmodeller',
    tekst:
      'Claude Opus og Claude Fable — toppmodellene til Anthropic — skriver kapitlene og nyskrevne modellbesvarelser på ulike nivåer, side om side: også en som misser mye og likevel består. Gulvet er nåbart, og veien til toppen er beskrevet som håndverk, ikke talent.',
  },
  {
    n: '4',
    tittel: 'Teori, eksempel og oppgave – i én løkke',
    tekst:
      'Du leser aldri lenge uten å bruke stoffet: hver bit teori følges av gjennomregnede eksempler og oppgaver med umiddelbar tilbakemelding.',
  },
];

function Panel({
  tittel,
  undertittel,
  children,
}: {
  tittel: string;
  undertittel: string;
  children: React.ReactNode;
}) {
  const [apen, setApen] = useState(false);
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <button
        type="button"
        onClick={() => setApen((v) => !v)}
        aria-expanded={apen}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-muted/50 transition-colors"
      >
        <span>
          <span className="block font-semibold">{tittel}</span>
          <span className="block text-sm text-muted-foreground">{undertittel}</span>
        </span>
        <ChevronDown
          className={`w-5 h-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
            apen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {/* Innholdet rendres ALLTID og skjules med `hidden`, ikke med betinget
          rendering. Med `{apen && …}` lå teksten ikke i HTML-en før noen klikket,
          og da ser hverken søkemotorer eller skjermlesere den. «Slik virker det»
          var indeksert innhold før flyttingen, og skal fortsatt være det. */}
      <div hidden={!apen} className="px-5 pb-5 pt-1 border-t border-border/60">
        {children}
      </div>
    </div>
  );
}

export function MetodePaneler() {
  return (
    <div className="space-y-3 mb-10">
      <Panel
        tittel="Vi har lest eksamensarkivet for deg"
        undertittel="Hva bøkene er bygd på"
      >
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          Eksamensrettede lærebøker per emne, bygget på fagets eksamensarkiv —
          tidligere eksamener og, der de finnes, sensorveiledninger:
          frekvensanalyse av hva som faktisk kommer, sensornøkler for hva som gir
          poeng, og modellbesvarelser du kan måle deg mot. Hver bok oppgir
          kildene sine.
        </p>
      </Panel>

      <Panel
        tittel="Slik virker det"
        undertittel="Alle andre forteller deg hva pensum sier. Vi viser deg hva sensor gir poeng for."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
          {TRINN.map((t) => (
            <div key={t.n} className="flex gap-3">
              <span className="shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center mt-0.5">
                {t.n}
              </span>
              <div>
                <h3 className="font-semibold mb-1">{t.tittel}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.tekst}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-6 max-w-3xl">
          Velg læreboka som kontinuerlig blir bedre: mellom semestrene oppdaterer
          vi bøkene med nyere modeller og friskere eksamensanalyser — og holder
          dem stabile mens du leser. Alvorlige feil rettes selvsagt fortløpende.{' '}
          <a href="/vilkar#ki-deklarasjon" className="underline underline-offset-2 hover:text-foreground">
            Les KI-deklarasjonen
          </a>
        </p>
      </Panel>
    </div>
  );
}
