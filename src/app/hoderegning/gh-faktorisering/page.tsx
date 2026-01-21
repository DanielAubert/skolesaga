import Link from "next/link";
import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Layers, BookOpen, Swords } from "lucide-react";
import type { Metadata } from "next";
import { faktoriseringExercises } from "@/lib/data/hoderegning-exercises";
import { ExerciseCards } from "@/components/hoderegning/exercise-cards";

export const metadata: Metadata = {
  title: "Faktorisering - Hoderegning",
  description: "Øv på faktorisering og kvadratsetningene. Lær primtallsfaktorisering, faktorisering av uttrykk og bruk av kvadratsetningene.",
};

export default function FaktoriseringPage() {
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
                <BreadcrumbPage>Faktorisering</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <section className="container pb-12">
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 p-3">
                <Layers className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Faktorisering
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Velg en oppgave for å trene på faktorisering og kvadratsetningene
            </p>
            <div className="mt-6">
              <Link href="/hoderegning/gh-faktorisering/challenge">
                <Button size="lg" className="bg-gradient-to-br from-violet-500 to-purple-600 hover:opacity-90">
                  <Swords className="mr-2 h-5 w-5" />
                  Spill Challenge
                </Button>
              </Link>
            </div>
          </div>

          {/* Faktorisering-oppgaver */}
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 p-2">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">
                Kvadratsetningene
              </h2>
            </div>
            <p className="text-center text-muted-foreground mb-6">
              Faktoriseringsoppgaver med interaktiv svarsjekk
            </p>
            <ExerciseCards
              exercises={faktoriseringExercises}
              basePath="/hoderegning/gh-faktorisering/trening"
              gridCols="lg:grid-cols-4"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
