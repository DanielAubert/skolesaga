import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Wrench, Microscope, Palette, Heart, TrendingUp, ClipboardList, Clock, BarChart3, Sparkles, AlertTriangle, GraduationCap } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yrkesinteressetest (RIASEC) - Finn yrker som passer deg",
  description: "Ta en yrkesinteressetest basert på Hollands RIASEC-modell. Finn ut hvilke interesseområder og karrierer som passer best for deg.",
  openGraph: {
    title: "Yrkesinteressetest (RIASEC) - Finn yrker som passer deg",
    description: "Finn dine sterkeste interesseområder og yrker som passer deg med denne vitenskapelige testen.",
    url: "https://skolesaga.no/yrkesinteresser",
    type: "website",
  },
};

const areas = [
  {
    icon: Wrench,
    title: "Realistisk",
    description: "Praktisk arbeid, verktøy og maskiner",
    gradient: "from-orange-500 to-red-600",
  },
  {
    icon: Microscope,
    title: "Utforskende",
    description: "Forskning, analyse og problemløsing",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: Palette,
    title: "Kunstnerisk",
    description: "Kreativitet, kunst og selvuttrykk",
    gradient: "from-purple-500 to-fuchsia-600",
  },
  {
    icon: Heart,
    title: "Sosial",
    description: "Hjelpe, undervise og ta vare på andre",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: TrendingUp,
    title: "Entreprenant",
    description: "Ledelse, salg og forretning",
    gradient: "from-amber-500 to-yellow-600",
  },
  {
    icon: ClipboardList,
    title: "Konvensjonell",
    description: "Organisering, data og systematikk",
    gradient: "from-slate-500 to-gray-600",
  },
];

export default function YrkesinteresserPage() {
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
                <BreadcrumbPage>Yrkesinteressetest</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <section className="container pb-12">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="rounded-lg bg-gradient-to-br from-blue-500 to-emerald-600 p-3">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Yrkesinteressetest
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Basert på Hollands RIASEC-modell. Finn dine sterkeste interesseområder og yrker som passer for deg.
            </p>

            {/* Info-kort */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
              <Card className="border-0 shadow-md">
                <CardContent className="p-4 text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-950">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold">Ca. 8 minutter</h3>
                  <p className="text-sm text-muted-foreground">48 påstander om dine interesser</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-4 text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-950">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold">6 interesseområder</h3>
                  <p className="text-sm text-muted-foreground">Radardiagram + Holland-kode</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-4 text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-950">
                    <Sparkles className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold">Karriereforslag</h3>
                  <p className="text-sm text-muted-foreground">Yrker som passer din profil</p>
                </CardContent>
              </Card>
            </div>

            {/* Områder */}
            <h2 className="text-xl font-bold text-center mb-4">Testen måler 6 interesseområder:</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto mb-10">
              {areas.map((area) => (
                <Card key={area.title} className={`bg-gradient-to-br ${area.gradient} border-0 shadow-lg`}>
                  <CardContent className="p-3 text-center space-y-1">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                      <area.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white">{area.title}</h3>
                    <p className="text-xs text-white/90">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Start-knapp */}
            <div className="max-w-md mx-auto">
              <Link href="/yrkesinteresser/test" className="group block">
                <Card className="bg-gradient-to-br from-blue-500 to-emerald-600 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center space-y-2">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm">
                      <GraduationCap className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Start yrkesinteressetest</h3>
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
                      Denne testen gir en indikasjon på dine interesseområder basert på Hollands RIASEC-modell.
                      Resultatet bør ses som et utgangspunkt for utforsking, ikke en endelig karriereveiledning.
                      For profesjonell karriereveiledning, kontakt en rådgiver.
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
