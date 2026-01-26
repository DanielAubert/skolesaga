import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { TextbookHeader } from '@/components/textbook/textbook-header';

export const metadata: Metadata = {
  title: 'Interaktive Lærebøker',
  description: 'Komplette interaktive lærebøker for alle fag fra 5. klasse til VG3 med GeoGebra, Python og AI-tilbakemelding.',
};

interface GradeCardProps {
  href: string;
  grade: string;
  subtitle: string;
  gradient: string;
  textColor?: string;
  image?: string;
}

function GradeCard({ href, grade, subtitle, gradient, textColor = 'text-white', image }: GradeCardProps) {
  if (image) {
    return (
      <Link href={href} className="group block">
        <div
          className="relative shadow-md transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl"
          style={{ borderRadius: '1.5rem', overflow: 'hidden' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={grade}
            className="w-full h-auto object-cover block transition-transform duration-500 group-hover:scale-105"
            style={{ display: 'block' }}
          />
        </div>
      </Link>
    );
  }

  return (
    <Link href={href} className="group block">
      <div
        className={`relative ${gradient} h-32 shadow-md transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl`}
        style={{ borderRadius: '1.5rem', overflow: 'hidden' }}
      >
        {/* Content */}
        <div className={`relative z-10 h-full flex flex-col justify-center items-center text-center p-4 ${textColor}`}>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight">{grade}</h3>
          <p className="text-xs opacity-80 mt-1">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}

export default function TextbookOverviewPage() {
  return (
    <div className="min-h-screen bg-background">
      <TextbookHeader />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <Image
          src="/home/interaktive-lareboker.jpg"
          alt="Interaktive lærebøker"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="relative container mx-auto px-4 py-16 md:py-24 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Interaktive lærebøker
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Velg ditt klassetrinn og utforsk lærebøker tilpasset LK20
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">

          {/* Barneskole */}
          <section>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-8 bg-gradient-to-r from-lime-400 to-green-500 rounded-full" />
              <h2 className="text-xl font-bold text-foreground">Barneskole</h2>
              <div className="h-1 w-8 bg-gradient-to-r from-lime-400 to-green-500 rounded-full" />
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="w-56">
                <GradeCard
                  href="/bok/trinn/5"
                  grade="5. klasse"
                  subtitle="10–11 år"
                  gradient="bg-gradient-to-br from-lime-400 to-green-500"
                  image="/images/grades/5-klasse.jpg"
                />
              </div>
              <div className="w-56">
                <GradeCard
                  href="/bok/trinn/6"
                  grade="6. klasse"
                  subtitle="11–12 år"
                  gradient="bg-gradient-to-br from-green-400 to-emerald-500"
                  image="/images/grades/6-klasse.jpg"
                />
              </div>
              <div className="w-56">
                <GradeCard
                  href="/bok/trinn/7"
                  grade="7. klasse"
                  subtitle="12–13 år"
                  gradient="bg-gradient-to-br from-emerald-400 to-teal-500"
                  image="/images/grades/7-klasse.jpg"
                />
              </div>
            </div>
          </section>

          {/* Ungdomsskole */}
          <section>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-8 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full" />
              <h2 className="text-xl font-bold text-foreground">Ungdomsskole</h2>
              <div className="h-1 w-8 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full" />
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="w-56">
                <GradeCard
                  href="/bok/trinn/8"
                  grade="8. klasse"
                  subtitle="13–14 år"
                  gradient="bg-gradient-to-br from-sky-400 to-blue-500"
                  image="/images/grades/8-klasse.png"
                />
              </div>
              <div className="w-56">
                <GradeCard
                  href="/bok/trinn/9"
                  grade="9. klasse"
                  subtitle="14–15 år"
                  gradient="bg-gradient-to-br from-blue-400 to-indigo-500"
                  image="/images/grades/9-klasse.png"
                />
              </div>
              <div className="w-56">
                <GradeCard
                  href="/bok/trinn/10"
                  grade="10. klasse"
                  subtitle="15–16 år"
                  gradient="bg-gradient-to-br from-indigo-400 to-violet-500"
                  image="/images/grades/10-klasse.jpg"
                />
              </div>
            </div>
          </section>

          {/* Videregående */}
          <section>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full" />
              <h2 className="text-xl font-bold text-foreground">Videregående</h2>
              <div className="h-1 w-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full" />
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="w-56">
                <GradeCard
                  href="/bok/trinn/vg1"
                  grade="VG1"
                  subtitle="16–17 år"
                  gradient="bg-gradient-to-br from-purple-400 to-fuchsia-500"
                  image="/images/grades/vg1.png"
                />
              </div>
              <div className="w-56">
                <GradeCard
                  href="/bok/trinn/vg2"
                  grade="VG2"
                  subtitle="17–18 år"
                  gradient="bg-gradient-to-br from-fuchsia-400 to-pink-500"
                  image="/images/grades/vg2.png"
                />
              </div>
              <div className="w-56">
                <GradeCard
                  href="/bok/trinn/vg3"
                  grade="VG3"
                  subtitle="18–19 år"
                  gradient="bg-gradient-to-br from-pink-400 to-rose-500"
                  image="/images/grades/vg3.png"
                />
              </div>
            </div>
          </section>

          {/* Høyere utdanning */}
          <section>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full" />
              <h2 className="text-xl font-bold text-foreground">Høyere utdanning</h2>
              <div className="h-1 w-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full" />
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="w-56">
                <GradeCard
                  href="/bok/trinn/hoyere"
                  grade="Universitet"
                  subtitle="19+ år"
                  gradient="bg-gradient-to-br from-amber-400 to-orange-500"
                />
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Features */}
      <div className="border-t border-border/50 bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            <FeatureItem icon="📊" title="GeoGebra" description="Interaktive grafer" />
            <FeatureItem icon="🐍" title="Python" description="Programmering" />
            <FeatureItem icon="✏️" title="Håndskrift" description="Tegn løsninger" />
            <FeatureItem icon="🤖" title="AI-hjelp" description="Smart tilbakemelding" />
            <FeatureItem icon="📈" title="Fremgang" description="Spor utviklingen" />
            <FeatureItem icon="👨‍🏫" title="Lærerverktøy" description="For klasserom" />
          </div>
        </div>
      </div>

    </div>
  );
}

function FeatureItem({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl mb-2">{icon}</div>
      <div className="font-medium text-sm">{title}</div>
      <div className="text-xs text-muted-foreground">{description}</div>
    </div>
  );
}
