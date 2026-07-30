import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MetodePaneler } from '@/components/hoyskole/metode-paneler';
import { notFound } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { TextbookHeader } from '@/components/textbook/textbook-header';
import { TEXTBOOK_COURSES } from '@/lib/data/textbook-courses';
import { AddCourseButton } from '@/components/student/add-course-button';
import { mediaUrl } from '@/lib/media';
import { INSTITUSJONER, getInstitusjon } from '../institusjoner';
import { pageMetadata } from '@/lib/seo';

interface PageProps {
  params: Promise<{ institusjon: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { institusjon } = await params;
  const inst = getInstitusjon(institusjon);

  // Fail fast når innholdet ikke finnes — se soft-404-merknaden i
  // [chapterId]/page.tsx for hvorfor statuskoden er skjør her.
  if (!inst) {
    notFound();
  }

  const title = `${inst.name} | Høyskole/universitet | Interaktive Lærebøker`;
  const description = `Eksamensrettede lærebøker for emner ved ${inst.fullName}.`;

  return {
    title,
    description,
    ...pageMetadata({ path: `/trinn/hoyere/${institusjon}`, title, description }),
  };
}

export function generateStaticParams() {
  return INSTITUSJONER.map((inst) => ({ institusjon: inst.slug }));
}

/** Stryker emnekoden fra starten av et fagnavn.
 *
 * «IN2010 Algoritmer og datastrukturer» → «Algoritmer og datastrukturer».
 * Brukes bare når kortet har forsidebilde, for da står koden i illustrasjonen
 * og ville stått to ganger — den lange tittelen brøt dessuten over to linjer og
 * la seg oppå koden i bildet.
 *
 * Fag uten kode («Matematikk for økonomer») er urørt: mønsteret krever minst to
 * STORE bokstaver først, og «Matematikk» har bare én.
 *
 * ⚠ To siffer, ikke tre: EXPHIL03 slapp gjennom med {3,4} og sto med koden to
 * ganger.
 */
function utenEmnekode(navn: string) {
  return navn.replace(/^[A-ZÆØÅ]{2,8}\d{2,4}\s+/, '');
}

function getCourseStats(courseId: string) {
  const course = TEXTBOOK_COURSES.find((c) => c.id === courseId);
  if (!course) return { chapters: 0, exercises: 0 };
  const mainChapters = course.chapters.filter((ch) => !ch.isNarrativeVersion);
  const totalExercises = mainChapters.reduce((sum, ch) => sum + ch.exerciseCount, 0);
  return {
    chapters: mainChapters.length,
    exercises: totalExercises,
  };
}

function SubjectCard({ courseId, name, icon, color, image }: {
  courseId: string;
  name: string;
  icon: string;
  color: string;
  image?: string;
}) {
  const stats = getCourseStats(courseId);
  const isAvailable = stats.chapters > 0;

  if (!image) {
    const course = TEXTBOOK_COURSES.find((c) => c.id === courseId);
    if (course?.coverImage) {
      image = course.coverImage;
    }
  }

  if (!isAvailable) {
    return (
      <div className="group relative">
        <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${color} p-6 h-48 opacity-40`}>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-white/30 blur-2xl" />
          </div>
          <div className="relative z-10 h-full flex flex-col justify-between text-white">
            <div className="text-4xl">{icon}</div>
            <div>
              <h3 className="text-xl font-bold">{name}</h3>
              <p className="text-sm opacity-80 mt-1">Kommer snart</p>
            </div>
          </div>
        </div>
        <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
          Kommer
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      <AddCourseButton courseId={courseId} />

      <Link href={`/${courseId}`} className="block">
        <div className={`relative overflow-hidden rounded-2xl ${image ? '' : `bg-gradient-to-br ${color}`} h-48 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-black/20`}>
          {image && (
            /* next/image framfor <img>: bildet er 2400 px for å være skarpt som
               hero på fagsiden, men kortet er ~430 px bredt. Med <img> lastet
               kortrutenettet full oppløsning — ni kort à 100 kB. Supabase
               Storage ligger i `remotePatterns`, så Next lager mindre varianter
               selv og `sizes` velger riktig. Én fil dekker begge bruk. */
            <Image
              src={mediaUrl(image)}
              alt={name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          )}

          {!image && (
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-white/30 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-black/20 blur-2xl" />
            </div>
          )}

          {/* Skygge nederst. Illustrasjonene varierer fra nesten svarte til
              nesten hvite — SOSANT1000 er lys sand — og hvit tittel forsvant
              helt på de lyseste. Bare der det ER bilde; gradientkortene har
              kontrast fra før. */}
          {image && (
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
          )}

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </div>

          <div className="relative z-10 h-full flex flex-col justify-between text-white p-6">
            <div className="flex items-start justify-between">
              {!image && <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">{icon}</div>}
              {image && <div />}
              <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/20 text-xs font-medium backdrop-blur-sm mr-10">
                <span>{stats.chapters} kapitler</span>
              </div>
            </div>
            <div>
              {/* Har kortet forsidebilde, står emnekoden ALT i illustrasjonen —
                  da strykes den fra tittelen. Uten dette leste kortet
                  «IN2010 Algoritmer …» rett oppå «IN2010» i bildet. */}
              <h3 className="text-xl font-bold mb-1 drop-shadow-md">
                {image ? utenEmnekode(name) : name}
              </h3>
              <div className="flex items-center gap-3 text-sm opacity-80">
                {!image && <span>{stats.exercises} oppgaver</span>}
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default async function InstitusjonPage({ params }: PageProps) {
  const { institusjon } = await params;
  const inst = getInstitusjon(institusjon);

  if (!inst) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <TextbookHeader />

      {/* Hero Section */}
      <div className={`relative overflow-hidden bg-gradient-to-br ${inst.color}`}>
        {inst.imageHero ? (
          /* Illustrasjonen ligger til HØYRE og tones ut mot venstre med en
             maske, ikke med et fargelag. En maske er fargeuavhengig: gradienten
             under skinner gjennom uansett hvilken farge institusjonen har, så
             overskriften til venstre står på ren flate og forblir lesbar.
             `<h1>{inst.name}</h1>` blir stående — den er sidens hovedoverskrift
             for søk og skjermlesere, og skal ikke erstattes av et bilde. */
          <div className="absolute inset-y-0 right-0 w-full md:w-[68%] pointer-events-none select-none [mask-image:linear-gradient(to_right,transparent_0%,black_45%)]">
            <Image
              src={inst.imageHero}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 68vw"
              className="object-cover object-center opacity-90"
              priority
            />
          </div>
        ) : (
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/20 blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-black/10 blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>
        )}

        <div className="relative container mx-auto px-4 py-12 md:py-20">
          <Link
            href="/trinn/hoyere"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Tilbake til institusjoner</span>
          </Link>

          <div className="text-white">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-full bg-white/20 text-sm font-medium">
                Høyskole/universitet
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
              {inst.name}
            </h1>
            <p className="text-xl text-white/80 max-w-xl">
              {inst.fullName}. {inst.subjects.length} fag tilgjengelig — eksamensrettede lærebøker per emne.
            </p>
          </div>
        </div>
      </div>

      {/* Subjects Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Forklaringen på hva bøkene er bygd på, og hvordan. Sto tidligere
              på /trinn/hoyere — men etter at forsiden lenker rett hit, er den
              siden et mellomsteg de fleste hopper over. Lukket som standard, så
              den som bare skal finne emnet sitt ikke må scrolle forbi. */}
          <MetodePaneler />
          <Link
            href="/trinn/hoyere"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ChevronLeft className="w-4 h-4" />
            Se andre institusjoner
          </Link>
          <h2 className="text-2xl font-bold mb-8">Velg fag</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {inst.subjects.map((subject) => (
              <SubjectCard key={subject.courseId} {...subject} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
