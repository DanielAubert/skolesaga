import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Brain, Target, Trophy, Award, Play, Swords } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const modules = [
  { id: 1, name: "Grunnleggende potenser", description: "Enkle potenser som 2³ og 5²", examples: ["2³ = 8", "5² = 25"], gradient: "from-amber-400 to-orange-600", icon: Target },
  { id: 2, name: "Potens ganger tall", description: "Potens multiplisert med tall", examples: ["4 · 3² = 36", "2 · 5³ = 250"], gradient: "from-orange-400 to-red-600", icon: Trophy },
  { id: 3, name: "Produkt av potenser", description: "To potenser ganget sammen", examples: ["2² · 3² = 36", "2³ · 5² = 200"], gradient: "from-red-400 to-rose-600", icon: Award },
  { id: 4, name: "Blandet potensregning", description: "Kombinasjon av alle typer", examples: ["3² · 2 = 18", "2² · 3² = 36"], gradient: "from-rose-400 to-pink-600", icon: Brain },
];

function getModuleFromSlug(slug: string) {
  const match = slug.match(/^oppgave-(\d+)$/);
  if (!match) return null;
  const id = parseInt(match[1]);
  return modules.find(m => m.id === id) || null;
}

type Props = {
  params: Promise<{ oppgave: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { oppgave } = await params;
  const potensModule = getModuleFromSlug(oppgave);
  if (!potensModule) return { title: "Oppgave ikke funnet" };
  return {
    title: `Oppgave ${potensModule.id}: ${potensModule.name} - Potenser - Hoderegning`,
    description: potensModule.description,
  };
}

export default async function OppgavePage({ params }: Props) {
  const { oppgave } = await params;
  const potensModule = getModuleFromSlug(oppgave);

  if (!potensModule) {
    notFound();
  }

  const IconComponent = potensModule.icon;

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
                <BreadcrumbLink href="/hoderegning/gh-potenser">Potenser</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Oppgave {potensModule.id}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <section className="container pb-12">
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className={`rounded-lg bg-gradient-to-br ${potensModule.gradient} p-3`}>
                <IconComponent className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold">
                Oppgave {potensModule.id}: {potensModule.name}
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">{potensModule.description}</p>
          </div>

          <div className="max-w-md mx-auto">
            <Card className={`bg-gradient-to-br ${potensModule.gradient} border-0 shadow-lg`}>
              <CardContent className="p-6 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white">
                  {potensModule.name}
                </h3>

                <p className="text-white/90">
                  {potensModule.description}
                </p>

                <div className="text-sm font-mono bg-white/20 backdrop-blur-sm p-3 rounded text-white">
                  Eksempler:<br />
                  {potensModule.examples[0]}<br />
                  {potensModule.examples[1]}
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <Link href={`/hoderegning/gh-potenser/oppgave-${potensModule.id}/trening`}>
                    <Button size="lg" className="w-full bg-white text-amber-600 hover:bg-white/90">
                      <Play className="mr-2 h-5 w-5" />
                      Trening
                    </Button>
                  </Link>
                  <Link href={`/hoderegning/gh-potenser/oppgave-${potensModule.id}/challenge`}>
                    <Button size="lg" variant="outline" className="w-full bg-white/20 text-white border-white/40 hover:bg-white/30">
                      <Swords className="mr-2 h-5 w-5" />
                      Challenge
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
