import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Brain, BookOpen } from "lucide-react";
import type { Metadata } from "next";
import { potenserExercises } from "@/lib/data/hoderegning-exercises";
import { PotenserModuleCards, PotenserExerciseCards } from "@/components/hoderegning/potenser-cards";

export const metadata: Metadata = {
  title: "Potenser - Hoderegning",
  description: "Øv på potensregning med hoderegning. Lær å regne ut potenser, produkter av potenser og mer.",
};

// Bruk lokale oppgaver fra hoderegning-exercises.ts
// (potenserExercises importert øverst)

export default function PotenserPage() {
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
                <BreadcrumbPage>Potenser</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <section className="container pb-12">
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 p-3">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Potenser
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Velg en oppgave for å trene på potensregning
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <PotenserModuleCards />
          </div>

          {/* Potensregler - lokale oppgaver */}
          <div className="max-w-6xl mx-auto mt-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 p-2">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">
                Potensregler
              </h2>
            </div>
            <p className="text-center text-muted-foreground mb-6">
              Algebraiske potensoppgaver med interaktiv svarsjekk
            </p>
            <PotenserExerciseCards exercises={potenserExercises} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
