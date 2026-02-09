import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Eye, ShieldCheck, Flame, HeartHandshake, Users, Clock, BarChart3, Sparkles, AlertTriangle, Heart } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EQ-test - Mål din emosjonelle intelligens",
  description: "Test din emosjonelle intelligens med denne EQ-testen. Mål selvbevissthet, selvregulering, motivasjon, empati og sosiale ferdigheter.",
  openGraph: {
    title: "EQ-test - Mål din emosjonelle intelligens",
    description: "Finn ut hvor god du er på å forstå og håndtere følelser. 5 dimensjoner av emosjonell intelligens.",
    url: "https://skolesaga.no/eq-test",
    type: "website",
  },
};

const dimensions = [
  {
    icon: Eye,
    title: "Selvbevissthet",
    description: "Forstå egne følelser og styrker",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: ShieldCheck,
    title: "Selvregulering",
    description: "Kontrollere impulser og stress",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: Flame,
    title: "Motivasjon",
    description: "Indre drivkraft og utholdenhet",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: HeartHandshake,
    title: "Empati",
    description: "Forstå andres følelser og behov",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    icon: Users,
    title: "Sosiale ferdigheter",
    description: "Samarbeid og kommunikasjon",
    gradient: "from-emerald-500 to-teal-600",
  },
];

export default function EQTestPage() {
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
                <BreadcrumbLink href="/test-deg-selv">Test deg selv</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>EQ-test</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <section className="container pb-12">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="rounded-lg bg-gradient-to-br from-rose-500 to-violet-600 p-3">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-violet-600 bg-clip-text text-transparent">
                EQ-test
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Mål din emosjonelle intelligens. Hvor god er du til å forstå og håndtere følelser — både egne og andres?
            </p>

            {/* Info-kort */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
              <Card className="border-0 shadow-md">
                <CardContent className="p-4 text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-950">
                    <Clock className="h-5 w-5 text-rose-600" />
                  </div>
                  <h3 className="font-semibold">Ca. 10 minutter</h3>
                  <p className="text-sm text-muted-foreground">50 påstander om følelser og relasjoner</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-4 text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-950">
                    <BarChart3 className="h-5 w-5 text-rose-600" />
                  </div>
                  <h3 className="font-semibold">5 dimensjoner</h3>
                  <p className="text-sm text-muted-foreground">EQ-profil med radardiagram</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-4 text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-950">
                    <Sparkles className="h-5 w-5 text-rose-600" />
                  </div>
                  <h3 className="font-semibold">AI-analyse</h3>
                  <p className="text-sm text-muted-foreground">Personlige utviklingstips</p>
                </CardContent>
              </Card>
            </div>

            {/* Dimensjoner */}
            <h2 className="text-xl font-bold text-center mb-4">Testen måler 5 EQ-dimensjoner:</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-4xl mx-auto mb-10">
              {dimensions.map((dim) => (
                <Card key={dim.title} className={`bg-gradient-to-br ${dim.gradient} border-0 shadow-lg`}>
                  <CardContent className="p-3 text-center space-y-1">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <dim.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white">{dim.title}</h3>
                    <p className="text-xs text-white/90">{dim.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Start-knapp */}
            <div className="max-w-md mx-auto">
              <Link href="/eq-test/test" className="group block">
                <Card className="bg-gradient-to-br from-rose-500 to-violet-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center space-y-2">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm">
                      <Heart className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Test din EQ</h3>
                    <p className="text-sm text-white/90">
                      50 påstander · Likert-skala · Ca. 10 min
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
                      Emosjonell intelligens kan trenes og utvikles over tid. Resultatet viser ditt nåværende nivå,
                      men EQ er ikke fastlåst — med bevisst innsats kan du styrke alle dimensjonene.
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
