import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Percent, BookOpen } from "lucide-react";
import type { Metadata } from "next";
import { rasjonaleUttrykkExercises } from "@/lib/data/hoderegning-exercises";
import { ExerciseCards } from "@/components/hoderegning/exercise-cards";

export const metadata: Metadata = {
  title: "Rasjonale uttrykk - Hoderegning",
  description: "Øv på rasjonale uttrykk. Lær å forkorte, multiplisere, dividere og trekke sammen algebraiske brøker.",
};

export default function RasjonaleUttrykkPage() {
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
                <BreadcrumbPage>Rasjonale uttrykk</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <section className="container pb-12">
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 p-3">
                <Percent className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                Rasjonale uttrykk
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Velg en oppgave for å trene på rasjonale uttrykk
            </p>
          </div>

          {/* Rasjonale uttrykk-oppgaver */}
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 p-2">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">
                Algebraiske brøker
              </h2>
            </div>
            <p className="text-center text-muted-foreground mb-6">
              Algebraiske brøkoppgaver med interaktiv svarsjekk
            </p>
            <ExerciseCards
              exercises={rasjonaleUttrykkExercises}
              basePath="/hoderegning/gh-rasjonale-uttrykk/trening"
              gridCols="lg:grid-cols-3"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
