import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  BookOpen,
  GraduationCap,
  Brain,
  Code,
  ChartLine,
  Users,
  ArrowRight,
  Calculator,
  School,
  Backpack,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HomeHeader } from '@/components/home/home-header';
import { DashboardBanner } from '@/components/home/dashboard-banner';

export const metadata: Metadata = {
  title: 'Skolesaga - Eksamensrettede lærebøker for høyskole og skole',
  description:
    'Komplette, interaktive lærebøker for ungdomsskole, videregående og høyskole – teori, eksempler og oppgaver i én løkke, med quiz og flashcards innebygd. Gratis å lese.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:bg-none dark:bg-black" />
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

        <HomeHeader />

        <div className="relative container mx-auto max-w-5xl px-6 pt-10 pb-16 md:pt-16 md:pb-24">
          <DashboardBanner />
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-5">
              <BookOpen className="h-3.5 w-3.5" />
              Fra 8. trinn til universitetet
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Lærebøker som er bygget for eksamen
            </h1>
            <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-2xl">
              Komplette, interaktive lærebøker for ungdomsskole, videregående
              og høyskole: teori, eksempler og oppgaver i én løkke — med quiz,
              flashcards og prøver innebygd. Gratis å lese, rett i nettleseren.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="text-base px-8">
                <Link href="/bok">
                  Finn faget ditt
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base px-8 bg-background/60 backdrop-blur-sm">
                <Link href="/bok/trinn/hoyere#slik-virker-det">Student? Se hvordan det virker</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Målgrupper */}
      <section className="container mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Hvor er du i utdanningen?</h2>
        <p className="text-muted-foreground mb-8">
          Velg nivå – hver bok er bygget rundt eksamen du faktisk skal opp i.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Høyskole/universitet */}
          <AudienceCard
            href="/bok/trinn/hoyere"
            icon={<GraduationCap className="h-6 w-6" />}
            title="Høyskole og universitet"
            description="Emne for emne, lærested for lærested – med tidligere eksamener og, der de finnes, sensorveiledninger som ryggrad."
            chips={[
              { label: 'EXPHIL03', href: '/bok/exphil03' },
              { label: 'JUS1111', href: '/bok/jus1111' },
              { label: 'ECON1310', href: '/bok/econ1310' },
              { label: 'STV1100', href: '/bok/stv1100' },
            ]}
            linkLabel="Finn emnet ditt"
          />
          {/* Videregående */}
          <AudienceCard
            href="/bok"
            icon={<School className="h-6 w-6" />}
            title="Videregående"
            description="Fellesfag og programfag med teori, eksempler og eksamensrettede oppgaver – fra 1P til R2."
            chips={[
              { label: 'VG1', href: '/bok/trinn/vg1' },
              { label: 'VG2', href: '/bok/trinn/vg2' },
              { label: 'VG3', href: '/bok/trinn/vg3' },
            ]}
            linkLabel="Se fagene"
          />
          {/* Ungdomsskole */}
          <AudienceCard
            href="/bok"
            icon={<Backpack className="h-6 w-6" />}
            title="Ungdomsskole"
            description="Alle fag for 8.–10. trinn, med øvingsoppgaver og forberedelse til eksamen i 10. klasse."
            chips={[
              { label: '8. trinn', href: '/bok/trinn/8' },
              { label: '9. trinn', href: '/bok/trinn/9' },
              { label: '10. trinn', href: '/bok/trinn/10' },
            ]}
            linkLabel="Se fagene"
          />
        </div>

        {/* Verktøy */}
        <div className="mt-6">
          <Link
            href="/poengkalkulator"
            className="group flex items-center gap-4 rounded-2xl border bg-card p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="rounded-xl bg-primary/10 p-3 shrink-0 text-primary">
              <Calculator className="h-6 w-6" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold">Poengkalkulator</h3>
              <p className="text-sm text-muted-foreground">Beregn dine opptakspoeng</p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all shrink-0" />
          </Link>
        </div>
      </section>


      {/* Utforsk – illustrasjoner */}
      <section className="container mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Utforsk Skolesaga</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/bok" className="block group">
            <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow aspect-[16/10]">
              <Image
                src="/home/interaktive-lareboker.jpg"
                alt="Interaktive lærebøker"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center justify-between">
                <div className="text-white">
                  <h3 className="font-semibold text-lg">Interaktive lærebøker</h3>
                  <p className="text-sm text-white/80">5. klasse til høyskole</p>
                </div>
                <ArrowRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
          <Link href="/quiz" className="block group">
            <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow aspect-[16/10] grayscale-[40%] opacity-90">
              <Image
                src="/home/prove-quiz.jpg"
                alt="Prøve og quiz"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center justify-between">
                <div className="text-white">
                  <h3 className="font-semibold text-lg">Quiz og prøver</h3>
                  <p className="text-sm text-white/80">Kommer snart</p>
                </div>
                <ArrowRight className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Alt du trenger for å lære
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <FeatureCard
              icon={<BookOpen className="h-8 w-8" />}
              title="140+ lærebøker"
              description="Komplette lærebøker for matematikk, naturfag, norsk, engelsk og mange flere fag."
            />
            <FeatureCard
              icon={<Brain className="h-8 w-8" />}
              title="30 000+ oppgaver"
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
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klar til å begynne?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Velg fag eller emne og kom i gang – det er gratis å lese.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link href="/bok">
              Finn faget ditt
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
            Eksamensrettede lærebøker for norsk skole og høyere utdanning
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground mb-4">
            <Link href="/test-deg-selv" className="hover:text-foreground transition-colors">
              Test deg selv
            </Link>
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
          <p className="text-xs text-muted-foreground mt-2">
            Innholdet er skrevet av KI og kvalitetskontrollert av KI-agenter — foreløpig ikke manuelt gjennomgått –{' '}
            <Link href="/vilkar#ki-deklarasjon" className="underline underline-offset-2 hover:text-foreground transition-colors">
              les KI-deklarasjonen
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}

function AudienceCard({
  href,
  icon,
  title,
  description,
  chips,
  linkLabel,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  chips: { label: string; href: string }[];
  linkLabel: string;
}) {
  return (
    <div className="relative flex flex-col rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="rounded-xl bg-primary/10 p-3 w-fit text-primary mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2">
        <Link href={href} className="after:absolute after:inset-0 hover:text-primary transition-colors">
          {title}
        </Link>
      </h3>
      <p className="text-sm text-muted-foreground mb-4 flex-1">{description}</p>
      <div className="relative z-10 flex flex-wrap gap-2 mb-4">
        {chips.map((chip) => (
          <Link
            key={chip.label}
            href={chip.href}
            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
          >
            {chip.label}
          </Link>
        ))}
      </div>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
        {linkLabel}
        <ArrowRight className="h-4 w-4" />
      </span>
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
