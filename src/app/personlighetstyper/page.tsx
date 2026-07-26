import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Zap, Eye, Heart, Compass, Clock, BarChart3, Sparkles, AlertTriangle, Users } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "16 Personlighetstyper - Hvilken type er du?",
  description: "Finn din personlighetstype basert på Jungs typeteori. Mål 4 dimensjoner: Ekstrovert/Introvert, Sansende/Intuitiv, Tenkende/Følende, Dømmende/Oppfattende.",
  openGraph: {
    title: "16 Personlighetstyper - Hvilken type er du?",
    description: "Finn din personlighetstype med 48 påstander og AI-analyse. ISTJ, ENFP, INFJ eller en av 13 andre typer?",
    url: "https://skolesaga.no/personlighetstyper",
    type: "website",
  },
};

const dimensions = [
  {
    icon: Zap,
    title: "Ekstrovert / Introvert",
    description: "Hvor du henter energi",
    gradient: "from-orange-500 to-amber-600",
  },
  {
    icon: Eye,
    title: "Sansende / Intuitiv",
    description: "Hvordan du tar inn informasjon",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Heart,
    title: "Tenkende / Følende",
    description: "Hvordan du tar beslutninger",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    icon: Compass,
    title: "Dømmende / Oppfattende",
    description: "Hvordan du forholder deg til verden",
    gradient: "from-violet-500 to-purple-600",
  },
];

export default function PersonlighetsTyperPage() {
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
                <BreadcrumbPage>16 Personlighetstyper</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <section className="container pb-12">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="rounded-lg bg-gradient-to-br from-orange-500 to-rose-600 p-3">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                16 Personlighetstyper
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Basert på Jungs typeteori. Finn hvilken av 16 personlighetstyper som passer deg best — INFJ, ENTP, ISFP eller en annen?
            </p>

            {/* Info-kort */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
              <Card className="border-0 shadow-md">
                <CardContent className="p-4 text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-950">
                    <Clock className="h-5 w-5 text-orange-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold">Ca. 8 minutter</h2>
                  <p className="text-sm text-muted-foreground">48 påstander på en skala</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-4 text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-950">
                    <BarChart3 className="h-5 w-5 text-orange-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold">4 dimensjoner</h2>
                  <p className="text-sm text-muted-foreground">Gir én av 16 unike typer</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-4 text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-950">
                    <Sparkles className="h-5 w-5 text-orange-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold">AI-analyse</h2>
                  <p className="text-sm text-muted-foreground">Personlig beskrivelse av din type</p>
                </CardContent>
              </Card>
            </div>

            {/* Dimensjoner */}
            <h2 className="text-xl font-bold text-center mb-4">Testen måler 4 dimensjoner:</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
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
              <Link href="/personlighetstyper/test" className="group block">
                <Card className="bg-gradient-to-br from-orange-500 to-rose-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center space-y-2">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm">
                      <Users className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Finn din type</h3>
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
                      Denne testen er inspirert av Jungs typeteori og gir en indikasjon på dine preferanser.
                      Den er ikke en offisiell MBTI-test og bør ikke brukes til diagnostiske formål.
                      Personlighetstyper er forenklinger — du er mer nyansert enn fire bokstaver.
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
