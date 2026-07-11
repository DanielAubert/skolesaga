import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ChevronRight,
  Archive,
  FileCheck,
  BookOpen,
  AlertTriangle,
  Sparkles,
} from 'lucide-react';
import { getCourse } from '@/lib/data/textbook-courses';
import { getKildegrunnlag, type KildeGruppe } from '@/lib/data/kildegrunnlag';
import { TextbookHeader } from '@/components/textbook/textbook-header';
import { BreadcrumbHomeLink } from '@/components/book/breadcrumb-home-link';

/**
 * Kildegrunnlag-side per høyskolebok: hvilke eksamenssett, sensorveiledninger
 * og andre kilder boka er bygget på — med ærlige forbehold om hull i arkivet.
 * Innholdet kommer fra src/lib/data/kildegrunnlag.ts (destillert fra bokas
 * EKSAMENSANALYSE §8) og skal aldri påstå kilder som ikke finnes.
 */

interface PageProps {
  params: Promise<{ courseId: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { courseId } = await params;
  const course = getCourse(courseId);
  if (!course || !getKildegrunnlag(courseId)) {
    return { title: 'Kildegrunnlag ikke funnet' };
  }
  return {
    title: `Kildegrunnlag — ${course.title} | Skolesaga`,
    description: `Hvilke eksamenssett, sensorveiledninger og andre kilder boka for ${course.title} er bygget på.`,
  };
}

function KildeListe({ grupper }: { grupper: KildeGruppe[] }) {
  return (
    <ul className="space-y-3">
      {grupper.map((g) => (
        <li key={g.tittel} className="rounded-lg border bg-card px-4 py-3">
          <p className="font-medium">{g.tittel}</p>
          <p className="mt-1 text-sm text-muted-foreground">{g.detalj}</p>
        </li>
      ))}
    </ul>
  );
}

export default async function KildegrunnlagPage({ params }: PageProps) {
  const { courseId } = await params;
  const course = getCourse(courseId);
  const kilder = getKildegrunnlag(courseId);

  if (!course || !kilder) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <TextbookHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-3xl">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <BreadcrumbHomeLink className="hover:text-foreground" />
            <ChevronRight className="h-4 w-4" />
            <Link href={`/bok/${courseId}`} className="hover:text-foreground">
              {course.title}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Kildegrunnlag</span>
          </nav>

          <div className="mb-8">
            <h1 className="flex items-center gap-3 text-3xl font-bold">
              <Archive className="h-7 w-7 text-primary" aria-hidden="true" />
              Kildegrunnlag
            </h1>
            <p className="mt-2 text-muted-foreground">
              Dette er kildene boka for <span className="font-medium text-foreground">{course.title}</span>{' '}
              faktisk er bygget på — og like viktig: hullene i arkivet, deklarert ærlig.
            </p>
          </div>

          {/* Sammendrag */}
          <div className="mb-8 rounded-lg border bg-muted/40 px-4 py-4">
            <p className="text-sm sm:text-base">{kilder.sammendrag}</p>
            <p className="mt-3 text-xs text-muted-foreground">
              Arkiv: {kilder.institusjon}. Eksamensanalysen ble gjennomført {kilder.analysedato}.
            </p>
          </div>

          {/* Eksamenssett */}
          <section className="mb-8">
            <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold">
              <FileCheck className="h-5 w-5 text-primary" aria-hidden="true" />
              Eksamenssett
            </h2>
            <KildeListe grupper={kilder.eksamenssett} />
          </section>

          {/* Sensorveiledninger */}
          <section className="mb-8">
            <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold">
              <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" />
              Sensorveiledninger
            </h2>
            <KildeListe grupper={kilder.sensorveiledninger} />
          </section>

          {/* Andre kilder */}
          <section className="mb-8">
            <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold">
              <Archive className="h-5 w-5 text-primary" aria-hidden="true" />
              Andre kilder
            </h2>
            <KildeListe grupper={kilder.andreKilder} />
          </section>

          {/* Forbehold */}
          <section className="mb-8">
            <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-500" aria-hidden="true" />
              Forbehold og hull i arkivet
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {kilder.forbehold.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>

          {/* Slik er stoffet laget */}
          <section className="mb-8 rounded-lg border px-4 py-4">
            <h2 className="mb-2 flex items-center gap-2 text-lg font-semibold">
              <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" />
              Slik er stoffet laget
            </h2>
            <p className="text-sm text-muted-foreground">
              Kildene over er analysert av KI, og boka er skrevet av Anthropics toppmodeller (Claude
              Opus og Claude Fable) med uavhengige KI-agenter til kvalitetskontroll. Alle oppgaver,
              eksempler og modellbesvarelser er nyskrevne — arkivet brukes som mønster for sjangre,
              temavekting og vurderingskrav, aldri ordrett. Les mer i{' '}
              <Link href="/vilkar" className="underline hover:text-foreground">
                KI-deklarasjonen i vilkårene
              </Link>
              .
            </p>
          </section>

          <Link
            href={`/bok/${courseId}`}
            className="inline-flex items-center gap-2 rounded-lg border border-input bg-background px-4 py-2 font-medium text-foreground transition-colors hover:bg-muted"
          >
            Tilbake til boka
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
