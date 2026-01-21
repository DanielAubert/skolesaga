import Link from "next/link";
import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Divide, BookOpen, Swords } from "lucide-react";
import type { Metadata } from "next";
import { brokregningExercises } from "@/lib/data/hoderegning-exercises";
import { ExerciseCards } from "@/components/hoderegning/exercise-cards";

export const metadata: Metadata = {
  title: "Brøkregning - Hoderegning",
  description: "Øv på brøkregning med hoderegning. Lær å multiplisere, dividere, forkorte og addere brøker.",
};

export default function BrokregningPage() {
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
                <BreadcrumbPage>Brøkregning</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <section className="container pb-12">
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 p-3">
                <Divide className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Brøkregning
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Velg en oppgave for å trene på brøkregning
            </p>
            <div className="mt-6">
              <Link href="/hoderegning/gh-brokregning/challenge">
                <Button size="lg" className="bg-gradient-to-br from-blue-500 to-cyan-600 hover:opacity-90">
                  <Swords className="mr-2 h-5 w-5" />
                  Spill Challenge
                </Button>
              </Link>
            </div>
          </div>

          {/* Brøkregning-oppgaver */}
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 p-2">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">
                Brøker og forenkling
              </h2>
            </div>
            <p className="text-center text-muted-foreground mb-6">
              Brøkoppgaver med interaktiv svarsjekk
            </p>
            <ExerciseCards
              exercises={brokregningExercises}
              basePath="/hoderegning/gh-brokregning/trening"
              gridCols="lg:grid-cols-5"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
