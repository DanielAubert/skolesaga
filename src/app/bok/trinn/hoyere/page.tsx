import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { TextbookHeader } from '@/components/textbook/textbook-header';
import { TEXTBOOK_COURSES } from '@/lib/data/textbook-courses';
import { INSTITUSJONER } from './institusjoner';

export const metadata: Metadata = {
  title: 'Høyskole/universitet | Interaktive Lærebøker',
  description: 'Eksamensrettede lærebøker for høyskole- og universitetsemner. Velg institusjon for å se fagene.',
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
            href="/bok"
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
              Høyskole/universitet
            </h1>
            <p className="text-xl text-white/80 max-w-xl">
              Eksamensrettede lærebøker per emne. Velg institusjon for å se fagene.
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
                <Link key={inst.slug} href={`/bok/trinn/hoyere/${inst.slug}`} className="group block">
                  <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${inst.color} h-48 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-black/20`}>
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-white/30 blur-2xl" />
                      <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-black/20 blur-2xl" />
                    </div>
                    <div className="relative z-10 h-full flex flex-col justify-between text-white p-6">
                      <div className="flex items-start justify-between">
                        <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">{inst.icon}</div>
                        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/20 text-xs font-medium backdrop-blur-sm">
                          <span>{available} {available === 1 ? 'fag' : 'fag'}</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{inst.name}</h3>
                        <p className="text-sm opacity-80">{inst.fullName}</p>
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
    </div>
  );
}
