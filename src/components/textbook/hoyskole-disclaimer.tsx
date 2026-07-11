import Link from 'next/link';
import { Scale, ShieldAlert } from 'lucide-react';
import { INSTITUSJONER } from '@/app/bok/trinn/hoyere/institusjoner';

/**
 * Juridiske deklarasjoner for høyskole-/universitetsbøker (plattformnivå —
 * dekker automatisk alle nåværende og fremtidige emner registrert i
 * institusjoner.ts):
 *  1. Uavhengighet: Skolesaga er ikke tilknyttet/godkjent av institusjonen;
 *     emnekoden brukes kun for identifikasjon (varemerke-/villedningsvern).
 *  2. Ikke offisielt studiemateriell: pensum/eksamenskrav kan endres.
 *  3. Fagspesifikt: jus-emner ≠ juridisk rådgivning (sjekk Lovdata);
 *     helse-emner ≠ helse-/medisinske råd.
 */

interface InstitusjonInfo {
  fullName: string;
  fagNavn: string; // «JUS1111 Privatrett I»
}

function findInstitusjonForCourse(courseId: string): InstitusjonInfo | undefined {
  for (const inst of INSTITUSJONER) {
    const fag = inst.subjects.find((s) => s.courseId === courseId);
    if (fag) return { fullName: inst.fullName, fagNavn: fag.name };
  }
  return undefined;
}

// Fagspesifikke ansvarslinjer. Heuristikk på id/tittel; utvid ved behov.
function erJus(courseId: string, title: string): boolean {
  return /^jus/i.test(courseId) || /\brett(s\w*)?\b|juridisk/i.test(title);
}

function erHelse(courseId: string, title: string): boolean {
  // ^psy fanger psykologi-emnekodene (PSY1010, PSYC1201 …) der tittelen
  // ikke inneholder «psykologi» (f.eks. «Innføring i metode»).
  return (
    /^psy/i.test(courseId) ||
    /sykepl|medisin|farmako|anatomi|fysiologi|helse|psykolog|odontolog|tannlege/i.test(
      `${courseId} ${title}`
    )
  );
}

interface HoyskoleDisclaimerProps {
  courseId: string;
  courseTitle: string;
  /** Kompakt variant (én linje + lenke) til kapittelsider. */
  compact?: boolean;
}

export function HoyskoleDisclaimer({ courseId, courseTitle, compact }: HoyskoleDisclaimerProps) {
  const inst = findInstitusjonForCourse(courseId);
  const instNavn = inst?.fullName ?? 'den aktuelle utdanningsinstitusjonen';
  const jus = erJus(courseId, courseTitle);
  const helse = erHelse(courseId, courseTitle);

  if (compact) {
    return (
      <div className="mt-4 p-3 bg-muted/40 border rounded-lg text-xs text-muted-foreground flex items-start gap-2">
        <ShieldAlert className="h-3.5 w-3.5 mt-0.5 shrink-0" />
        <p>
          Skolesaga er en uavhengig læringsressurs og er ikke tilknyttet eller godkjent av{' '}
          {instNavn}. Dette er ikke offisielt studiemateriell.
          {jus && ' Innholdet er læringsstoff, ikke juridisk rådgivning — sjekk Lovdata for gjeldende rett.'}
          {helse && ' Innholdet er læringsstoff, ikke helse- eller medisinske råd.'}{' '}
          <Link href="/vilkar#uavhengighet" className="underline hover:text-foreground">
            Les mer
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8 p-4 bg-muted/40 border rounded-lg text-sm text-muted-foreground space-y-2">
      <div className="flex items-start gap-2">
        <ShieldAlert className="h-4 w-4 mt-0.5 shrink-0" />
        <p>
          <strong className="text-foreground">Uavhengig læringsressurs:</strong> Skolesaga er
          ikke tilknyttet, godkjent av eller utarbeidet i samarbeid med {instNavn}. Emnekoden
          brukes kun for å identifisere hvilket emne stoffet er rettet mot. Dette er ikke
          offisielt studiemateriell — pensum og eksamensordning kan endres, så sjekk alltid
          emnets offisielle sider.
        </p>
      </div>
      {jus && (
        <div className="flex items-start gap-2">
          <Scale className="h-4 w-4 mt-0.5 shrink-0" />
          <p>
            <strong className="text-foreground">Ikke juridisk rådgivning:</strong> Innholdet er
            læringsstoff til eksamensforberedelse. Lover og forskrifter endres — sjekk alltid{' '}
            <a
              href="https://lovdata.no"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              Lovdata
            </a>{' '}
            for gjeldende rett før du bruker reglene på virkelige situasjoner.
          </p>
        </div>
      )}
      {helse && (
        <div className="flex items-start gap-2">
          <ShieldAlert className="h-4 w-4 mt-0.5 shrink-0" />
          <p>
            <strong className="text-foreground">Ikke helseråd:</strong> Innholdet er
            læringsstoff og erstatter ikke helsefaglig veiledning eller medisinske råd.
          </p>
        </div>
      )}
      <p className="pl-6">
        <Link href="/vilkar#uavhengighet" className="underline hover:text-foreground">
          Les mer i vilkårene
        </Link>
        .
      </p>
    </div>
  );
}
