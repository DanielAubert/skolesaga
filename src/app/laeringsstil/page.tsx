import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Eye, Ear, BookOpen, Hand, Clock, BarChart3, Sparkles, AlertTriangle, GraduationCap } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Læringstiltest (VARK) - Finn din læringstil",
  description: "Finn din læringstil med VARK-modellen. Er du visuell, auditiv, lese/skrive eller kinestetisk? Få personlige studietips basert på din profil.",
  openGraph: {
    title: "Læringstiltest (VARK) - Finn din læringstil",
    description: "Finn hvordan du lærer best med denne vitenskapelige testen. Visuell, auditiv, lese/skrive eller kinestetisk?",
    url: "https://skolesaga.no/laeringsstil",
    type: "website",
  },
};

const styles = [
  {
    icon: Eye,
    title: "Visuell",
    description: "Bilder, diagrammer og kart",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: Ear,
    title: "Auditiv",
    description: "Lytting, diskusjoner og forklaringer",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: BookOpen,
    title: "Lese/skrive",
    description: "Tekst, notater og sammendrag",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: Hand,
    title: "Kinestetisk",
    description: "Praksis, eksperimenter og bevegelse",
    gradient: "from-orange-500 to-amber-600",
  },
];

export default function LaeringsstilPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main id="main-content" className="flex-1">
        <div className="container py-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Hjem</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Læringstiltest</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <section className="container pb-12">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-600 p-3">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                Læringstiltest
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Basert på VARK-modellen. Finn ut hvordan du lærer best — visuelt, auditivt, gjennom lesing/skriving eller kinestetisk.
            </p>

            {/* Info-kort */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
              <Card className="border-0 shadow-md">
                <CardContent className="p-4 text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-950">
                    <Clock className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold">Ca. 8 minutter</h2>
                  <p className="text-sm text-muted-foreground">48 påstander om hvordan du lærer</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-4 text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-950">
                    <BarChart3 className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold">4 læringstiler</h2>
                  <p className="text-sm text-muted-foreground">Profil med studietips for deg</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-4 text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-950">
                    <Sparkles className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold">AI-analyse</h2>
                  <p className="text-sm text-muted-foreground">Personlige studiestrategier</p>
                </CardContent>
              </Card>
            </div>

            {/* Stiler */}
            <h2 className="text-xl font-bold text-center mb-4">Testen måler 4 læringstiler:</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
              {styles.map((style) => (
                <Card key={style.title} className={`bg-gradient-to-br ${style.gradient} border-0 shadow-lg`}>
                  <CardContent className="p-3 text-center space-y-1">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <style.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white">{style.title}</h3>
                    <p className="text-xs text-white/90">{style.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Start-knapp */}
            <div className="max-w-md mx-auto">
              <Link href="/laeringsstil/test" className="group block">
                <Card className="bg-gradient-to-br from-indigo-500 to-cyan-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center space-y-2">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm">
                      <GraduationCap className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Finn din læringstil</h3>
                    <p className="text-sm text-white/90">
                      48 påstander · Likert-skala · Ca. 8 min
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 max-w-2xl mx-auto">
              <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/20">
                <CardContent className="p-4 flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                  <div className="text-left">
                    <h4 className="font-semibold text-sm mb-1">Viktig informasjon</h4>
                    <p className="text-sm text-muted-foreground">
                      De fleste bruker en kombinasjon av læringstiler. Resultatet viser dine preferanser,
                      men det betyr ikke at du kun kan lære på én måte. Bruk resultatene som inspirasjon
                      til å prøve nye studieteknikker.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
