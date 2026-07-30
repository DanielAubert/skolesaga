import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';
import { TextbookHeader } from '@/components/textbook/textbook-header';
import { TEXTBOOK_COURSES } from '@/lib/data/textbook-courses';
import { INSTITUSJONER } from './institusjoner';
import { pageMetadata } from '@/lib/seo';

const HOYERE_TITLE = 'Høyskole/universitet | Interaktive Lærebøker';
const HOYERE_DESCRIPTION =
  'Vi har lest eksamensarkivet for deg: eksamensrettede lærebøker per emne, bygget på tidligere eksamener og – der de finnes – sensorveiledninger. Velg institusjon for å se fagene.';

export const metadata: Metadata = {
  title: HOYERE_TITLE,
  description: HOYERE_DESCRIPTION,
  ...pageMetadata({
    path: '/trinn/hoyere',
    title: HOYERE_TITLE,
    description: HOYERE_DESCRIPTION,
  }),
};

function countAvailable(subjects: { courseId: string }[]) {
  return subjects.filter((s) => {
    const course = TEXTBOOK_COURSES.find((c) => c.id === s.courseId);
    return course && course.chapters.filter((ch) => !ch.isNarrativeVersion).length > 0;
  }).length;
}

export default function HoyerePage() {
  return (
    <div className="min-h-screen bg-background">
      <TextbookHeader />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-amber-400 to-orange-500">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/20 blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-black/10 blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative container mx-auto px-4 py-12 md:py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Tilbake til alle trinn</span>
          </Link>

          <div className="text-white">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-full bg-white/20 text-sm font-medium">
                Høyere utdanning
              </span>
              <span className="px-3 py-1 rounded-full bg-white/20 text-sm font-medium">
                19+ år
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
              Vi har lest eksamens&shy;arkivet for deg
            </h1>
            <p className="text-xl text-white/85 max-w-2xl">
              Eksamensrettede lærebøker per emne, bygget på fagets eksamensarkiv
              — tidligere eksamener og, der de finnes, sensorveiledninger:
              frekvensanalyse av hva som faktisk kommer, sensornøkler for hva
              som gir poeng, og modellbesvarelser du kan måle deg mot. Hver bok
              oppgir kildene sine. Velg institusjon for å se fagene.
            </p>
          </div>
        </div>
      </div>

      {/* Institutions Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Velg institusjon</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSTITUSJONER.map((inst) => {
              const available = countAvailable(inst.subjects);
              return (
                <Link key={inst.slug} href={`/trinn/hoyere/${inst.slug}`} className="group block">
                  <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${inst.color} h-48 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-black/20`}>
                    {inst.image ? (
                      <>
                        <Image
                          src={inst.image}
                          alt=""
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover object-right"
                          priority={false}
                        />
                        {/* Skygge nede til venstre, der teksten står. Illustrasjonene
                            er komponert med rolig flate der, men navnet må være
                            lesbart uansett hvor lyst bildet er. */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/55 via-black/15 to-transparent" />
                      </>
                    ) : (
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-white/30 blur-2xl" />
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-black/20 blur-2xl" />
                      </div>
                    )}
                    <div className="relative z-10 h-full flex flex-col justify-between text-white p-6">
                      <div className="flex items-start justify-between">
                        <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">{inst.icon}</div>
                        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-black/30 text-xs font-medium backdrop-blur-sm">
                          <span>{available} {available === 1 ? 'fag' : 'fag'}</span>
                        </div>
                      </div>
                      <div>
                        {/* Har kortet bilde, står kortnavnet ALT i illustrasjonen.
                            Da vises bare fullName her — ellers leser man «UiO» to
                            ganger. fullName blir stående uansett, slik at navnet
                            finnes som ekte tekst for skjermlesere og søk. */}
                        {!inst.image && <h3 className="text-2xl font-bold mb-1">{inst.name}</h3>}
                        <p className={inst.image ? 'text-base font-semibold drop-shadow' : 'text-sm opacity-80'}>
                          {inst.fullName}
                        </p>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Slik virker det (flyttet fra forsiden — dette er høyskolebøkenes metodikk) */}
      <section id="slik-virker-det" className="py-12 md:py-16 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Slik virker det</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">
              Alle andre forteller deg hva pensum sier. Vi viser deg hva sensor
              gir poeng for.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  step: '1',
                  title: 'KI leser hele eksamensarkivet',
                  description:
                    'KI-agentene våre leser fagets tidligere eksamener og lager frekvensanalyse av hva som faktisk kommer – så du prioriterer temaene som gir uttelling, ikke de som tilfeldigvis står først i pensumboka.',
                },
                {
                  step: '2',
                  title: 'Sensorkravene – oversatt til bruksanvisning',
                  description:
                    'Der arkivet har sensorveiledninger, destillerer KI-en dem til sensornøkler per tema: hva som må med for å bestå, og hva som skiller en C fra en A. Hver bok oppgir kildene sine i kapittel 0.',
                },
                {
                  step: '3',
                  title: 'Bygget med Anthropics toppmodeller',
                  description:
                    'Claude Opus og Claude Fable — toppmodellene til Anthropic — skriver kapitlene og nyskrevne modellbesvarelser på ulike nivåer, side om side: også en som misser mye og likevel består. Gulvet er nåbart, og veien til toppen er beskrevet som håndverk, ikke talent.',
                },
                {
                  step: '4',
                  title: 'Teori, eksempel og oppgave – i én løkke',
                  description:
                    'Du leser aldri lenge uten å bruke stoffet: hver bit teori følges av gjennomregnede eksempler og oppgaver med umiddelbar tilbakemelding.',
                },
              ].map((c) => (
                <div key={c.step} className="rounded-2xl border bg-card p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {c.step}
                    </span>
                    <h3 className="font-semibold">{c.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{c.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm font-medium max-w-2xl">
              Velg læreboka som kontinuerlig blir bedre: mellom semestrene
              oppdaterer vi bøkene med nyere modeller og friskere eksamensanalyser
              — og holder dem stabile mens du leser. Alvorlige feil rettes
              selvsagt fortløpende.
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              <Link
                href="/vilkar#ki-deklarasjon"
                className="underline underline-offset-2 hover:text-foreground"
              >
                Les KI-deklarasjonen
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
