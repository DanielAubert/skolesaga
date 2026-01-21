import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { GraduationCap, Swords, Brain, Target, Trophy, Award } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const currentModules = [
  { id: 1, name: "Grunnleggende", description: "Addisjon og subtraksjon (1-18)", gradient: "from-blue-400 to-blue-600", icon: Target },
  { id: 2, name: "Ligninger", description: "Enkle ligninger", gradient: "from-purple-400 to-purple-600", icon: Trophy },
  { id: 3, name: "Addisjon til 10", description: "Addisjon med sum til 10", gradient: "from-green-400 to-green-600", icon: Target },
  { id: 4, name: "Addisjon over 10", description: "Begge tall under 10, sum over 10", gradient: "from-orange-400 to-orange-600", icon: Target },
  { id: 5, name: "To-sifrede tall", description: "Addisjon og subtraksjon", gradient: "from-indigo-400 to-indigo-600", icon: Trophy },
  { id: 6, name: "Til nærmeste tier", description: "Til nærmeste tier", gradient: "from-pink-400 to-pink-600", icon: Trophy },
  { id: 7, name: "Addisjon uten mente", description: "Addisjon uten mente (siffer < 10)", gradient: "from-red-400 to-red-600", icon: Trophy },
  { id: 8, name: "Addisjon med mente", description: "Addisjon med mente (siffer > 10)", gradient: "from-yellow-400 to-yellow-600", icon: Brain },
  { id: 9, name: "Subtraksjon uten mente", description: "Subtraksjon uten mente", gradient: "from-cyan-400 to-cyan-600", icon: Trophy },
  { id: 10, name: "Subtraksjon med mente", description: "Subtraksjon med mente", gradient: "from-violet-400 to-violet-600", icon: Award },
];

function getModuleFromSlug(slug: string) {
  const match = slug.match(/^oppgave-(\d+)$/);
  if (!match) return null;
  const id = parseInt(match[1]);
  return currentModules.find(m => m.id === id) || null;
}

interface OppgavePageProps {
  params: Promise<{ oppgave: string }>;
}

export async function generateMetadata({ params }: OppgavePageProps): Promise<Metadata> {
  const { oppgave } = await params;
  const currentModule = getModuleFromSlug(oppgave);

  if (!currentModule) {
    return { title: "Oppgave ikke funnet" };
  }

  return {
    title: `Oppgave ${currentModule.id}: ${currentModule.name} - Pluss & Minus`,
    description: `Velg mellom oppgavetrening eller challenge mode for ${currentModule.name.toLowerCase()}.`,
  };
}

export default async function OppgavePage({ params }: OppgavePageProps) {
  const { oppgave } = await params;
  const currentModule = getModuleFromSlug(oppgave);

  if (!currentModule) {
    notFound();
  }

  const IconComponent = currentModule.icon;

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main className="flex-1">
        <div className="container py-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Hjem</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/hoderegning">Hoderegning</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/hoderegning/gh-pluss-minus">Pluss & Minus</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Oppgave {currentModule.id}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <section className="container pb-12">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className={`rounded-lg bg-gradient-to-br ${currentModule.gradient} p-3`}>
                <IconComponent className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold">
                Oppgave {currentModule.id}: {currentModule.name}
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              {currentModule.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Oppgavetrening */}
              <Link href={`/hoderegning/gh-pluss-minus/${oppgave}/trening`} className="group block">
                <Card className="h-full bg-gradient-to-br from-green-400 to-emerald-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-3">
                      <GraduationCap className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Oppgavetrening</h3>
                    <p className="text-base text-white/90">
                      Tren i ditt eget tempo. Løs 15 oppgaver og se din tid og poengsum.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              {/* Challenge Mode */}
              <Link href={`/hoderegning/gh-pluss-minus/${oppgave}/challenge`} className="group block">
                <Card className="h-full bg-gradient-to-br from-rose-400 to-red-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-3">
                      <Swords className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Challenge Mode</h3>
                    <p className="text-base text-white/90">
                      Utfordre vennene dine! Konkurrer om hvem som løser 15 oppgaver raskest.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export function generateStaticParams() {
  return currentModules.map((currentModule) => ({
    oppgave: `oppgave-${currentModule.id}`,
  }));
}
