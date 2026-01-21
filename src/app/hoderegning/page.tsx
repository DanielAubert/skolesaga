import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Brain, Plus, Minus, X, Divide, Swords, Zap, Variable, Layers, Percent, Equal } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { StatsCounter } from "@/components/hoderegning/stats-counter";

export const metadata: Metadata = {
  title: "Hoderegning - Tren mental matematikk",
  description: "Øv på hoderegning med interaktive oppgaver. Addisjon, subtraksjon, multiplikasjon, divisjon, negative tall og mer. Perfekt for å bli raskere i mental matematikk.",
  openGraph: {
    title: "Hoderegning - Tren mental matematikk",
    description: "Øv på hoderegning med interaktive oppgaver. Bli raskere i mental matematikk med våre treningsmoduler.",
    url: "https://skolesaga.no/hoderegning",
    type: "website",
  },
  twitter: {
    title: "Hoderegning - Tren mental matematikk",
    description: "Øv på hoderegning med interaktive oppgaver. Bli raskere i mental matematikk.",
  },
};

export default function HoderegningPage() {

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
                <BreadcrumbPage>Hoderegning</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <section className="container pb-12">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 p-3">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Hoderegning
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              Tren rask hoderegning! Velg en modul nedenfor og kom i gang.
            </p>

            <StatsCounter className="mx-auto w-fit mb-8" />

            {/* Grunnleggende Hoderegning */}
            <h2 className="text-xl font-bold text-center mb-4">Grunnleggende Hoderegning:</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
              <Link href="/hoderegning/gh-pluss-minus" className="group">
                <Card className="h-full bg-gradient-to-br from-green-400 to-emerald-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-3 text-center space-y-1">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <Plus className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white">Pluss & Minus</h3>
                    <p className="text-xs text-white/90">Addisjon og subtraksjon</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/hoderegning/gh-tallfolgere-ganging-kvadratrot" className="group">
                <Card className="h-full bg-gradient-to-br from-blue-400 to-indigo-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-3 text-center space-y-1">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <X className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white">Tallfølger & Ganging</h3>
                    <p className="text-xs text-white/90">Multiplikasjon og kvadratrot</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/hoderegning/gh-divisjon-brok" className="group">
                <Card className="h-full bg-gradient-to-br from-orange-400 to-red-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-3 text-center space-y-1">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <Divide className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white">Divisjon & Brøk</h3>
                    <p className="text-xs text-white/90">Deling og desimaltall</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/hoderegning/gh-negative-tall-regnerekkefolge" className="group">
                <Card className="h-full bg-gradient-to-br from-purple-400 to-pink-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-3 text-center space-y-1">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <Minus className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white">Negative tall</h3>
                    <p className="text-xs text-white/90">Negative tall og regnerekkefølge</p>
                  </CardContent>
                </Card>
              </Link>
            </div>

            {/* Matematisk grunnmur */}
            <h2 className="text-xl font-bold text-center mb-4 mt-10">Matematisk grunnmur:</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
              <Link href="/hoderegning/gh-potenser" className="group">
                <Card className="h-full bg-gradient-to-br from-amber-400 to-orange-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-3 text-center space-y-1">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white">Potenser</h3>
                    <p className="text-xs text-white/90">Potensregning</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/hoderegning/gh-algebra" className="group">
                <Card className="h-full bg-gradient-to-br from-cyan-400 to-blue-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-3 text-center space-y-1">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <Variable className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white">Algebra</h3>
                    <p className="text-xs text-white/90">Bokstavregning</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/hoderegning/gh-brokregning" className="group">
                <Card className="h-full bg-gradient-to-br from-blue-400 to-cyan-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-3 text-center space-y-1">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <Divide className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white">Brøkregning</h3>
                    <p className="text-xs text-white/90">Brøker og forenkling</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/hoderegning/gh-faktorisering" className="group">
                <Card className="h-full bg-gradient-to-br from-violet-400 to-purple-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-3 text-center space-y-1">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <Layers className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white">Faktorisering</h3>
                    <p className="text-xs text-white/90">Kvadratsetningene</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/hoderegning/gh-rasjonale-uttrykk" className="group">
                <Card className="h-full bg-gradient-to-br from-sky-400 to-blue-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-3 text-center space-y-1">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <Percent className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white">Rasjonale uttr.</h3>
                    <p className="text-xs text-white/90">Algebraiske brøker</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/hoderegning/gh-likninger" className="group">
                <Card className="h-full bg-gradient-to-br from-emerald-400 to-teal-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-3 text-center space-y-1">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <Equal className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white">Likninger</h3>
                    <p className="text-xs text-white/90">Grunnleggende likninger</p>
                  </CardContent>
                </Card>
              </Link>
            </div>

            {/* Challenge Mode */}
            <div className="mt-8 max-w-md mx-auto">
              <h2 className="text-xl font-bold text-center mb-4">Spill og utfordringer:</h2>
              <Link href="/hoderegning/challenge" className="group block">
                <Card className="bg-gradient-to-br from-rose-400 to-red-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-4 text-center space-y-2">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm">
                      <Swords className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Challenge Mode</h3>
                    <p className="text-sm text-white/90">
                      Utfordre vennene dine! Konkurrer om hvem som løser 15 oppgaver raskest.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}