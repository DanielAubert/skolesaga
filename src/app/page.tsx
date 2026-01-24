import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, GraduationCap, Brain, Code, ChartLine, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HomeHeader } from '@/components/home/home-header';

export const metadata: Metadata = {
  title: 'Skolesaga - Interaktive lærebøker for norsk skole',
  description: 'Interaktive lærebøker med øvingsoppgaver, quiz og fremgangsregistrering for alle fag fra 5. klasse til VG3.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:bg-none dark:bg-black" />
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

        <HomeHeader />

        {/* Lærebøker og Quiz - Hovedseksjon */}
        <div className="relative container mx-auto px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Lærebøker-kort */}
            <Link href="/bok" className="block group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all hover:scale-[1.02] duration-300 aspect-square">
                <Image
                  src="/home/interaktive-lareboker.jpg"
                  alt="Interaktive lærebøker"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-0 left-0 right-0 p-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-sm font-medium text-gray-800">
                    <BookOpen className="w-4 h-4" />
                    5. klasse til VG3
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-white/90 text-lg px-8 shadow-lg">
                    Utforsk lærebøker
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Link>

            {/* Quiz-kort */}
            <Link href="/quiz" className="block group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all hover:scale-[1.02] duration-300 aspect-square">
                <Image
                  src="/home/prove-quiz.jpg"
                  alt="Prøve Quiz"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90 text-lg px-8 shadow-lg">
                    Start quiz nå
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Alt du trenger for å lære
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FeatureCard
              icon={<BookOpen className="h-8 w-8" />}
              title="60+ lærebøker"
              description="Komplette lærebøker for matematikk, naturfag, norsk, engelsk og mange flere fag."
            />
            <FeatureCard
              icon={<Brain className="h-8 w-8" />}
              title="5000+ oppgaver"
              description="Interaktive øvingsoppgaver med umiddelbar tilbakemelding og AI-støtte."
            />
            <FeatureCard
              icon={<Code className="h-8 w-8" />}
              title="Python & GeoGebra"
              description="Integrerte verktøy for programmering og visualisering rett i læreboken."
            />
            <FeatureCard
              icon={<ChartLine className="h-8 w-8" />}
              title="Spor fremgang"
              description="Følg med på utviklingen din og se hva du har mestret."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8" />}
              title="Lærerverktøy"
              description="Dashbord for lærere med oversikt over klassens fremgang."
            />
            <FeatureCard
              icon={<GraduationCap className="h-8 w-8" />}
              title="LK20-tilpasset"
              description="Alt innhold er tilpasset gjeldende læreplan for norsk skole."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klar til å begynne?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Velg ditt klassetrinn og start å lære med interaktive lærebøker.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link href="/bok">
              Finn din lærebok
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <Link href="/" className="inline-flex items-center space-x-2 group mb-4">
            <div className="rounded-lg bg-primary/10 p-1.5 transition-all group-hover:bg-primary/20">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <span className="font-bold text-lg">Skolesaga</span>
          </Link>
          <p className="text-sm text-muted-foreground mb-4">
            Interaktive lærebøker for norsk skole
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground mb-4">
            <Link href="/personvern" className="hover:text-foreground transition-colors">
              Personvern
            </Link>
            <Link href="/vilkar" className="hover:text-foreground transition-colors">
              Vilkår
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 Skolesaga · Alle rettigheter forbeholdt
          </p>
          <p className="text-xs text-muted-foreground/70 mt-2">
            Deler av innholdet er utviklet med hjelp av AI-verktøy
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-background rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
