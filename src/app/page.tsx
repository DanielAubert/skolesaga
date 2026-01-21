import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, GraduationCap, Brain, Code, ChartLine, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HomeHeader } from '@/components/home/home-header';

export const metadata: Metadata = {
  title: 'Skolesaga - Interaktive lærebøker for norsk skole',
  description: 'Gratis interaktive lærebøker med øvingsoppgaver, quiz og fremgangsregistrering for alle fag fra 5. klasse til VG3.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/30 dark:via-indigo-950/30 dark:to-purple-950/30" />
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

        <HomeHeader />

        <div className="relative container mx-auto px-4 py-20 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Interaktive lærebøker
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              for alle fag
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Gratis lærebøker med øvingsoppgaver, quiz og fremgangsregistrering.
            Tilpasset LK20 for alle klassetrinn fra 5. klasse til VG3.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/bok">
                <BookOpen className="mr-2 h-5 w-5" />
                Utforsk lærebøker
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link href="/book">
                <Code className="mr-2 h-5 w-5" />
                Python-lærebok
              </Link>
            </Button>
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
            Velg ditt klassetrinn og start å lære med interaktive lærebøker - helt gratis.
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
            Gratis interaktive lærebøker for norsk skole
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
