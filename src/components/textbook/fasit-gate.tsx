'use client';

/**
 * FasitGate: målt mur rundt fullstendige løsningsforslag.
 * SKJULT: uten NEXT_PUBLIC_FASIT_MUR_ENABLED=true rendres barna direkte
 * (dagens oppførsel, ingen endring for brukere).
 *
 * Med flagget på: Pluss-brukere ser alt; gratisbrukere har GRATIS_PER_UKE
 * opplåsninger per uke (én per oppgave), deretter Pluss-CTA.
 */

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Lock, Sparkles } from 'lucide-react';
import {
  fasitMurEnabled,
  hasPlusAccess,
  remainingFreeViews,
  alreadyUnlocked,
  consumeFreeView,
  GRATIS_PER_UKE,
} from '@/lib/fasit/gate';

interface FasitGateProps {
  exerciseId: string;
  children: React.ReactNode;
}

export function FasitGate({ exerciseId, children }: FasitGateProps) {
  // Alle hooks først (rules-of-hooks); flagg-sjekken skjer i render-logikken.
  const [unlocked, setUnlocked] = useState(() => alreadyUnlocked(exerciseId));
  const [remaining, setRemaining] = useState(() => remainingFreeViews());

  if (!fasitMurEnabled() || hasPlusAccess() || unlocked) {
    return <>{children}</>;
  }

  const canUnlock = remaining > 0;

  return (
    <div className="mt-3 p-4 rounded-lg border border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 space-y-3">
      <div className="flex items-center gap-2 text-sm font-medium text-amber-800 dark:text-amber-200">
        <Lock className="h-4 w-4" />
        Fullstendig løsningsforslag
      </div>
      {canUnlock ? (
        <>
          <p className="text-sm text-muted-foreground">
            Du har {remaining} av {GRATIS_PER_UKE} gratis løsningsforslag igjen denne uka.
          </p>
          <Button
            size="sm"
            onClick={() => {
              if (consumeFreeView(exerciseId)) {
                setUnlocked(true);
                setRemaining(remainingFreeViews());
              } else {
                setRemaining(0);
              }
            }}
          >
            Lås opp dette løsningsforslaget
          </Button>
        </>
      ) : (
        <>
          <p className="text-sm text-muted-foreground">
            Du har brukt ukas {GRATIS_PER_UKE} gratis løsningsforslag. Med{' '}
            <span className="font-semibold">Pluss (49 kr/mnd)</span> får du alle
            løsningsforslag, full quiz og smart repetisjon — ubegrenset.
          </p>
          <Button size="sm" asChild>
            {/* TODO før lansering: pek på ekte kjøpsside */}
            <a href="/priser">
              <Sparkles className="h-4 w-4 mr-2" />
              Få Pluss — 49 kr/mnd
            </a>
          </Button>
        </>
      )}
    </div>
  );
}
