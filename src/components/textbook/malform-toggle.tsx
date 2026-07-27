'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MalformToggleProps {
  malform: 'nb' | 'nn';
  /** Finnes det en nynorsk-versjon av dette kapittelet? */
  available?: boolean;
}

/**
 * Veksler mellom bokmål og nynorsk.
 *
 * NAVIGERER til den andre målformens adresse — den er ikke lenger bare et
 * cookie-bytte. Fra 27. juli 2026 ligger nynorsk på /nn/…, og URL-en er
 * autoritativ (se src/lib/i18n/malform.ts). Ble bare cookien satt, ville
 * adressen si bokmål mens innholdet var nynorsk, og både canonical og hreflang
 * på siden ville pekt feil.
 *
 * Cookien settes fortsatt, så valget følger leseren til neste side.
 */
export function MalformToggle({ malform, available = true }: MalformToggleProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [pending, startTransition] = useTransition();

  function setMalform(next: 'nb' | 'nn') {
    if (next === malform) return;
    // Ett år, hele domenet — husker valget på tvers av sider
    document.cookie = `malform=${next}; path=/; max-age=31536000; samesite=lax`;

    const bar = pathname.replace(/^\/nn(?=\/|$)/, '') || '/';
    const mål = next === 'nn' ? `/nn${bar === '/' ? '' : bar}` : bar;
    startTransition(() => router.push(mål));
  }

  const showNn = available || malform === 'nn';

  return (
    <div className="flex items-center gap-1">
      <Languages className="h-4 w-4 text-muted-foreground" aria-hidden />
      <div className="flex rounded-md border bg-background p-0.5" role="group" aria-label="Målform">
        <button
          type="button"
          onClick={() => setMalform('nb')}
          disabled={pending}
          aria-pressed={malform === 'nb'}
          className={`rounded px-2 py-0.5 text-xs font-medium transition-colors ${
            malform === 'nb'
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Bokmål
        </button>
        <button
          type="button"
          onClick={() => setMalform('nn')}
          disabled={pending || !showNn}
          aria-pressed={malform === 'nn'}
          title={showNn ? undefined : 'Nynorsk-versjon kommer'}
          className={`rounded px-2 py-0.5 text-xs font-medium transition-colors ${
            malform === 'nn'
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          } ${!showNn ? 'cursor-not-allowed opacity-40' : ''}`}
        >
          Nynorsk
        </button>
      </div>
    </div>
  );
}
