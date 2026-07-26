import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Brain, Hash, MessageSquare, GitBranch, Eye, Boxes, MemoryStick, Clock, BarChart3, Sparkles, AlertTriangle } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IQ-test - Test din kognitive evne",
  description: "Ta en adaptiv IQ-test som tilpasser seg ditt nivå. Testen måler 6 kognitive domener: tallresonnering, verbal resonnering, logisk resonnering, mønstergjenkjenning, romlig resonnering og arbeidsminne.",
  openGraph: {
    title: "IQ-test - Test din kognitive evne",
    description: "Adaptiv IQ-test med AI-analyse. Finn dine kognitive styrker og svakheter.",
    url: "https://www.skolesaga.no/iq-test",
    type: "website",
  },
};

const domains = [
  {
    icon: Hash,
    title: "Tallresonnering",
    description: "Tallrekker, mønster og aritmetikk",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: MessageSquare,
    title: "Verbal resonnering",
    description: "Analogier, ordforståelse og klassifisering",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: GitBranch,
    title: "Logisk resonnering",
    description: "Syllogismer, deduksjon og betingelser",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: Eye,
    title: "Mønstergjenkjenning",
    description: "Abstrakte regler og sekvenser",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: Boxes,
    title: "Romlig resonnering",
    description: "Rotasjon, speilbilder og folding",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    icon: MemoryStick,
    title: "Arbeidsminne",
    description: "Sekvensmanipulasjon og reversering",
    gradient: "from-cyan-500 to-sky-600",
  },
];

export default function IQTestPage() {
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
                <BreadcrumbPage>IQ-test</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <section className="container pb-12">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="rounded-lg bg-gradient-to-br from-violet-500 to-purple-700 p-3">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                IQ-test
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              En adaptiv test som tilpasser seg ditt nivå. Spørsmålene blir vanskeligere eller enklere basert på dine svar.
            </p>

            {/* Info-kort */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
              <Card className="border-0 shadow-md">
                <CardContent className="p-4 text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-violet-100 dark:bg-violet-950">
                    <Clock className="h-5 w-5 text-violet-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold">15–20 minutter</h2>
                  <p className="text-sm text-muted-foreground">Ca. 30–35 spørsmål tilpasset ditt nivå</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-4 text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-violet-100 dark:bg-violet-950">
                    <BarChart3 className="h-5 w-5 text-violet-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold">6 kognitive domener</h2>
                  <p className="text-sm text-muted-foreground">Detaljert nedbrytning av styrker og svakheter</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-4 text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-violet-100 dark:bg-violet-950">
                    <Sparkles className="h-5 w-5 text-violet-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold">AI-analyse</h2>
                  <p className="text-sm text-muted-foreground">Personlig analyse av dine kognitive evner</p>
                </CardContent>
              </Card>
            </div>

            {/* Domener */}
            <h2 className="text-xl font-bold text-center mb-4">Testen måler 6 kognitive domener:</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto mb-10">
              {domains.map((domain) => (
                <Card key={domain.title} className={`bg-gradient-to-br ${domain.gradient} border-0 shadow-lg`}>
                  <CardContent className="p-3 text-center space-y-1">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <domain.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white">{domain.title}</h3>
                    <p className="text-xs text-white/90">{domain.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Start-knapp */}
            <div className="max-w-md mx-auto">
              <Link href="/iq-test/test" className="group block">
                <Card className="bg-gradient-to-br from-violet-500 to-purple-700 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center space-y-2">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm">
                      <Brain className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Start IQ-test</h3>
                    <p className="text-sm text-white/90">
                      Flervalg · Adaptiv · Ca. 15–20 min
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
                      Dette er ikke en klinisk IQ-test og kan ikke erstatte en profesjonell psykologisk vurdering.
                      Resultatet gir en indikasjon på kognitive styrker og svakheter, men bør ikke brukes til diagnostiske formål.
                      For en offisiell IQ-vurdering, kontakt en autorisert psykolog.
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
