'use client';

import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Brain, Target, Trophy, Award, Play, Swords } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MathExampleBox } from "@/components/hoderegning/math-example-box";

const modules = [
  { id: 1, name: "Grunnleggende", description: "Addisjon og subtraksjon (1-18)", examples: ["3 + 2 = __", "8 - 4 = __"], gradient: "from-blue-400 to-blue-600", icon: Target, textColor: "text-blue-600" },
  { id: 2, name: "Ligninger", description: "Enkle ligninger", examples: ["10 = 4 + __", "15 = __ - 3"], gradient: "from-purple-400 to-purple-600", icon: Trophy, textColor: "text-purple-600" },
  { id: 3, name: "Addisjon til 10", description: "Addisjon med sum til 10", examples: ["6 + __ = 10", "__ + 3 = 10"], gradient: "from-green-400 to-green-600", icon: Target, textColor: "text-green-600" },
  { id: 4, name: "Addisjon over 10", description: "Begge tall under 10, sum over 10", examples: ["7 + 5 = __", "6 + 8 = __"], gradient: "from-orange-400 to-orange-600", icon: Target, textColor: "text-orange-600" },
  { id: 5, name: "To-sifrede tall", description: "Addisjon og subtraksjon", examples: ["20 + 30 = __", "80 - 30 = __"], gradient: "from-indigo-400 to-indigo-600", icon: Trophy, textColor: "text-indigo-600" },
  { id: 6, name: "Til nærmeste tier", description: "Til nærmeste tier", examples: ["22 + __ = 30", "29 - __ = 20"], gradient: "from-pink-400 to-pink-600", icon: Trophy, textColor: "text-pink-600" },
  { id: 7, name: "Addisjon uten mente", description: "Addisjon uten mente (siffer < 10)", examples: ["23 + 14 = __", "132 + 245 = __"], gradient: "from-red-400 to-red-600", icon: Trophy, textColor: "text-red-600" },
  { id: 8, name: "Addisjon med mente", description: "Addisjon med mente (siffer > 10)", examples: ["57 + 24 = __", "168 + 247 = __"], gradient: "from-yellow-400 to-yellow-600", icon: Brain, textColor: "text-yellow-700" },
  { id: 9, name: "Subtraksjon uten mente", description: "Subtraksjon uten mente", examples: ["86 - 23 = __", "587 - 234 = __"], gradient: "from-cyan-400 to-cyan-600", icon: Trophy, textColor: "text-cyan-600" },
  { id: 10, name: "Subtraksjon med mente", description: "Subtraksjon med mente", examples: ["52 - 38 = __", "423 - 157 = __"], gradient: "from-violet-400 to-violet-600", icon: Award, textColor: "text-violet-600" },
];

export default function PlussMinusPage() {
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
                <BreadcrumbPage>Pluss & Minus</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <section className="container pb-12">
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 p-3">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Pluss & Minus
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Velg en oppgave for å trene eller utfordre vennene dine
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {modules.map((module) => {
                const IconComponent = module.icon;
                return (
                  <Card key={module.id} className={`bg-gradient-to-br ${module.gradient} border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full`}>
                    <CardContent className="p-3 text-center space-y-1.5">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                        <IconComponent className="h-4 w-4 text-white" />
                      </div>
                      <h3 className="text-sm font-bold text-white leading-tight">
                        Oppgave {module.id}: {module.name}
                      </h3>
                      <p className="text-xs text-white/80 leading-tight">
                        {module.description}
                      </p>
                      <MathExampleBox examples={module.examples} />
                      <div className="grid grid-cols-2 gap-1 pt-1">
                        <Link href={`/hoderegning/gh-pluss-minus/oppgave-${module.id}/trening`}>
                          <Button size="sm" className={`w-full bg-white ${module.textColor} hover:bg-white/90 h-7 text-xs px-2`}>
                            <Play className="mr-1 h-3 w-3" />
                            Trening
                          </Button>
                        </Link>
                        <Link href={`/hoderegning/gh-pluss-minus/oppgave-${module.id}/challenge`}>
                          <Button size="sm" variant="outline" className="w-full bg-white/20 text-white border-white/40 hover:bg-white/30 h-7 text-xs px-2">
                            <Swords className="mr-1 h-3 w-3" />
                            Challenge
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
