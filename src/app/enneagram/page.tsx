import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Clock, BarChart3, Sparkles, AlertTriangle, CircleDot } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enneagramtest - Finn din personlighetstype",
  description: "Finn din enneagramtype med denne vitenskapelige testen. 9 personlighetstyper som avdekker dine grunnleggende motivasjoner og vekstmuligheter.",
  openGraph: {
    title: "Enneagramtest - Finn din personlighetstype",
    description: "Oppdag din enneagramtype og forstå dine dypeste motivasjoner. 9 unike personlighetstyper.",
    url: "https://www.skolesaga.no/enneagram",
    type: "website",
  },
};

const types = [
  { num: 1, title: "Reformatoren", desc: "Prinsipper og forbedring", gradient: "from-sky-500 to-blue-600" },
  { num: 2, title: "Hjelperen", desc: "Omsorg og generøsitet", gradient: "from-rose-400 to-pink-600" },
  { num: 3, title: "Prestereren", desc: "Ambisjon og resultater", gradient: "from-amber-400 to-yellow-600" },
  { num: 4, title: "Individualisten", desc: "Kreativitet og dybde", gradient: "from-purple-500 to-violet-600" },
  { num: 5, title: "Observatøren", desc: "Analyse og kunnskap", gradient: "from-cyan-500 to-teal-600" },
  { num: 6, title: "Lojallisten", desc: "Lojalitet og planlegging", gradient: "from-indigo-400 to-blue-600" },
  { num: 7, title: "Entusiasten", desc: "Optimisme og eventyr", gradient: "from-orange-400 to-amber-600" },
  { num: 8, title: "Utfordreren", desc: "Styrke og handlekraft", gradient: "from-red-500 to-rose-600" },
  { num: 9, title: "Fredsmakeren", desc: "Harmoni og tålmodighet", gradient: "from-emerald-400 to-green-600" },
];

export default function EnneagramPage() {
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
                <BreadcrumbLink href="/test-deg-selv">Test deg selv</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Enneagramtest</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <section className="container pb-12">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="rounded-lg bg-gradient-to-br from-amber-500 to-rose-600 p-3">
                <CircleDot className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                Enneagramtest
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Finn din enneagramtype og forstå dine grunnleggende motivasjoner, styrker og vekstmuligheter.
            </p>

            {/* Info-kort */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
              <Card className="border-0 shadow-md">
                <CardContent className="p-4 text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-950">
                    <Clock className="h-5 w-5 text-amber-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold">Ca. 10 minutter</h2>
                  <p className="text-sm text-muted-foreground">54 påstander om din personlighet</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-4 text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-950">
                    <BarChart3 className="h-5 w-5 text-amber-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold">9 typer + vinge</h2>
                  <p className="text-sm text-muted-foreground">Din type med tilhørende vinge</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-4 text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-950">
                    <Sparkles className="h-5 w-5 text-amber-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold">AI-analyse</h2>
                  <p className="text-sm text-muted-foreground">Personlig vekst og utvikling</p>
                </CardContent>
              </Card>
            </div>

            {/* Typer */}
            <h2 className="text-xl font-bold text-center mb-4">Testen måler 9 enneagramtyper:</h2>
            <div className="grid grid-cols-3 gap-3 max-w-3xl mx-auto mb-10">
              {types.map((type) => (
                <Card key={type.num} className={`bg-gradient-to-br ${type.gradient} border-0 shadow-lg`}>
                  <CardContent className="p-3 text-center space-y-1">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <span className="text-lg font-bold text-white">{type.num}</span>
                    </div>
                    <h3 className="text-sm font-bold text-white">{type.title}</h3>
                    <p className="text-xs text-white/90">{type.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Start-knapp */}
            <div className="max-w-md mx-auto">
              <Link href="/enneagram/test" className="group block">
                <Card className="bg-gradient-to-br from-amber-500 to-rose-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center space-y-2">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm">
                      <CircleDot className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Finn din enneagramtype</h3>
                    <p className="text-sm text-white/90">
                      54 påstander · Likert-skala · Ca. 10 min
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
                      Enneagrammet er et personlighetsverktøy for selvutvikling. Resultatet viser dine tendenser,
                      men alle har trekk fra flere typer. Bruk resultatet som et utgangspunkt for refleksjon og vekst.
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
