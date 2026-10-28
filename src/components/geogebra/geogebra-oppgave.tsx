'use client';

/**
 * GeoGebra-øvelse uten innbygd GeoGebra (lisens, Daniel 28.10.2026: «Da fjerner vi alle spor av GeoGebra
 * integrasjon ifra sidene»). Tidligere ble svaret sjekket automatisk i en innbygd applet. Nå løser eleven
 * oppgaven i GeoGebra i egen fane og sammenligner med fasiten, som er hentet fra øvelsens egne sjekkpunkter
 * (beskrivelsene «x skal være 7» osv.). Hintene kommer fra de samme sjekkpunktene.
 */

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, HelpCircle, ListChecks } from 'lucide-react';
import { GjorIGeoGebra } from './gjor-i-geogebra';
import type { ValidatedExercise } from '@/lib/geogebra/validation-types';

interface GeoGebraOppgaveProps {
  exercise: ValidatedExercise;
  isCompleted?: boolean;
  onComplete?: (exerciseId: string) => void;
}

export function GeoGebraOppgave({ exercise, isCompleted = false, onComplete }: GeoGebraOppgaveProps) {
  const [visHint, setVisHint] = useState(false);
  const [visFasit, setVisFasit] = useState(false);

  // ZoomIn var bare oppsett av applet-vinduet; resten (gitte punkter, funksjoner) skal eleven skrive inn selv.
  const startkommandoer = (exercise.initialCommands ?? []).filter((k) => !/^\s*ZoomIn\s*[([]/.test(k));
  const hint = exercise.validations.map((v) => v.hint).filter((h): h is string => !!h);
  const fasit = exercise.validations.map((v) => v.description).filter(Boolean);

  return (
    <Card className="p-4 space-y-3">
      {startkommandoer.length > 0 ? (
        <GjorIGeoGebra
          className="my-0"
          kommandoer={startkommandoer}
          kommandoOverskrift="Start med å skrive inn dette, én linje om gangen:"
        />
      ) : (
        <GjorIGeoGebra className="my-0" />
      )}

      <div className="flex flex-wrap gap-2">
        {hint.length > 0 && (
          <Button variant="outline" size="sm" onClick={() => setVisHint(!visHint)} aria-expanded={visHint}>
            <HelpCircle className="h-4 w-4 mr-1" />
            {visHint ? 'Skjul hint' : 'Vis hint'}
          </Button>
        )}
        {fasit.length > 0 && (
          <Button variant="outline" size="sm" onClick={() => setVisFasit(!visFasit)} aria-expanded={visFasit}>
            <ListChecks className="h-4 w-4 mr-1" />
            {visFasit ? 'Skjul fasit' : 'Vis fasit'}
          </Button>
        )}
        {onComplete && (
          <Button
            size="sm"
            variant={isCompleted ? 'secondary' : 'default'}
            disabled={isCompleted}
            onClick={() => onComplete(exercise.id)}
          >
            <CheckCircle2 className="h-4 w-4 mr-1" />
            {isCompleted ? 'Gjort' : 'Merk som gjort'}
          </Button>
        )}
      </div>

      {visHint && (
        <ul className="list-disc space-y-1 rounded-lg bg-blue-50 p-3 pl-7 text-sm text-blue-800 dark:bg-blue-900/20 dark:text-blue-200">
          {hint.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      )}
      {visFasit && (
        <div className="rounded-lg bg-green-50 p-3 text-sm text-green-800 dark:bg-green-900/20 dark:text-green-200">
          <p className="font-semibold mb-1">Fasit</p>
          <ul className="list-disc space-y-1 pl-5">
            {fasit.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
}
