import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Palette, ListChecks, Users, Heart, CloudLightning, Clock, BarChart3, Sparkles, AlertTriangle, Fingerprint } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Big Five personlighetstest - Finn dine personlighetstrekk",
  description: "Ta en vitenskapelig personlighetstest basert på Big Five-modellen (OCEAN). Mål 5 personlighetstrekk med 60 påstander og få AI-analyse av din personlighetsprofil.",
  openGraph: {
    title: "Big Five personlighetstest - Finn dine personlighetstrekk",
    description: "Vitenskapelig personlighetstest med AI-analyse. Mål åpenhet, planmessighet, ekstroversjon, medmenneskelighet og nevrotisisme.",
    url: "https://skolesaga.no/personlighetstest",
    type: "website",
  },
};

const traits = [
  {
    icon: Palette,
    title: "Åpenhet",
    description: "Kreativitet, nysgjerrighet og nye ideer",
    gradient: "from-sky-500 to-cyan-600",
  },
  {
    icon: ListChecks,
    title: "Planmessighet",
    description: "Organisering, selvdisiplin og målrettethet",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: Users,
    title: "Ekstroversjon",
    description: "Sosialitet, energi og selvhevdelse",
    gradient: "from-amber-500 to-yellow-600",
  },
  {
    icon: Heart,
    title: "Medmenneskelighet",
    description: "Tillit, samarbeid og empati",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    icon: CloudLightning,
    title: "Nevrotisisme",
    description: "Emosjonell reaktivitet og stressrespons",
    gradient: "from-indigo-500 to-blue-600",
  },
];

export default function PersonlighetsTestPage() {
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
                <BreadcrumbPage>Personlighetstest</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <section className="container pb-12">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="rounded-lg bg-gradient-to-br from-teal-500 to-emerald-700 p-3">
                <Fingerprint className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Personlighetstest
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              En vitenskapelig test basert på Big Five-modellen. Finn ut hvordan du scorer på fem grunnleggende personlighetstrekk.
            </p>

            {/* Info-kort */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
              <Card className="border-0 shadow-md">
                <CardContent className="p-4 text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-950">
                    <Clock className="h-5 w-5 text-teal-600" />
                  </div>
                  <h3 className="font-semibold">Ca. 10 minutter</h3>
                  <p className="text-sm text-muted-foreground">60 påstander du vurderer på en skala</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-4 text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-950">
                    <BarChart3 className="h-5 w-5 text-teal-600" />
                  </div>
                  <h3 className="font-semibold">5 personlighetstrekk</h3>
                  <p className="text-sm text-muted-foreground">Radardiagram og detaljert profil</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-4 text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-950">
                    <Sparkles className="h-5 w-5 text-teal-600" />
                  </div>
                  <h3 className="font-semibold">AI-analyse</h3>
                  <p className="text-sm text-muted-foreground">Personlig analyse av din profil</p>
                </CardContent>
              </Card>
            </div>

            {/* Trekk */}
            <h2 className="text-xl font-bold text-center mb-4">Testen måler 5 personlighetstrekk:</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-4xl mx-auto mb-10">
              {traits.map((trait) => (
                <Card key={trait.title} className={`bg-gradient-to-br ${trait.gradient} border-0 shadow-lg`}>
                  <CardContent className="p-3 text-center space-y-1">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <trait.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white">{trait.title}</h3>
                    <p className="text-xs text-white/90">{trait.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Start-knapp */}
            <div className="max-w-md mx-auto">
              <Link href="/personlighetstest/test" className="group block">
                <Card className="bg-gradient-to-br from-teal-500 to-emerald-700 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center space-y-2">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm">
                      <Fingerprint className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Start personlighetstest</h3>
                    <p className="text-sm text-white/90">
                      60 påstander · Likert-skala · Ca. 10 min
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
                      Dette er ikke en klinisk personlighetsvurdering og kan ikke erstatte en profesjonell psykologisk evaluering.
                      Resultatet gir en indikasjon på dine personlighetstrekk basert på Big Five-modellen, men bør ikke brukes til diagnostiske formål.
                      Big Five-modellen er den mest anerkjente vitenskapelige modellen for personlighet innen psykologien.
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
