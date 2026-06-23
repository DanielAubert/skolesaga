import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import {
  Brain, Fingerprint, Users, GraduationCap, Lightbulb, Sparkles,
  Clock, ArrowRight, CircleDot, Heart, Calculator,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test deg selv - Personlighetstester og mer",
  description: "Utforsk deg selv med vitenskapelige tester: IQ-test, Big Five, Enneagram, EQ-test, 16 personlighetstyper, yrkesinteressetest og læringstiltest.",
  openGraph: {
    title: "Test deg selv - Personlighetstester og mer",
    description: "IQ-test, personlighetstest, yrkesinteresser og læringstil. Finn dine styrker og interesser.",
    url: "https://skolesaga.no/test-deg-selv",
    type: "website",
  },
};

const tests = [
  {
    href: "/iq-test",
    icon: Brain,
    title: "IQ-test",
    description: "Adaptiv test som måler 6 kognitive domener. Tilpasser seg ditt nivå med stadig vanskeligere spørsmål.",
    gradient: "from-violet-500 to-purple-700",
    duration: "15–20 min",
    items: "~30 spørsmål",
    tag: "Kognitiv evne",
  },
  {
    href: "/personlighetstest",
    icon: Fingerprint,
    title: "Big Five personlighetstest",
    description: "Den mest anerkjente modellen i psykologien. Mål åpenhet, planmessighet, ekstroversjon, medmenneskelighet og nevrotisisme.",
    gradient: "from-teal-500 to-emerald-700",
    duration: "10 min",
    items: "60 påstander",
    tag: "Personlighet",
  },
  {
    href: "/enneagram",
    icon: CircleDot,
    title: "Enneagramtest",
    description: "9 personlighetstyper som avdekker dine grunnleggende motivasjoner, styrker og vekstmuligheter.",
    gradient: "from-amber-500 to-rose-600",
    duration: "10 min",
    items: "54 påstander",
    tag: "Enneagram",
  },
  {
    href: "/eq-test",
    icon: Heart,
    title: "EQ-test",
    description: "Mål din emosjonelle intelligens: selvbevissthet, selvregulering, motivasjon, empati og sosiale ferdigheter.",
    gradient: "from-rose-500 to-violet-600",
    duration: "10 min",
    items: "50 påstander",
    tag: "Emosjonell intelligens",
  },
  {
    href: "/personlighetstyper",
    icon: Users,
    title: "16 Personlighetstyper",
    description: "Basert på Jungs typeteori. Finn din type — INFJ, ENTP, ISFP eller en av 13 andre unike personlighetstyper.",
    gradient: "from-orange-500 to-rose-600",
    duration: "8 min",
    items: "48 påstander",
    tag: "Personlighetstype",
  },
  {
    href: "/yrkesinteresser",
    icon: GraduationCap,
    title: "Yrkesinteressetest (RIASEC)",
    description: "Basert på Hollands modell. Finn dine sterkeste interesseområder og yrker som passer for deg.",
    gradient: "from-blue-500 to-emerald-600",
    duration: "8 min",
    items: "48 påstander",
    tag: "Karriere",
  },
  {
    href: "/laeringsstil",
    icon: Lightbulb,
    title: "Læringstiltest (VARK)",
    description: "Finn din læringstil — visuell, auditiv, lese/skrive eller kinestetisk. Få personlige studietips.",
    gradient: "from-indigo-500 to-cyan-600",
    duration: "8 min",
    items: "48 påstander",
    tag: "Læring",
  },
  {
    href: "/poengkalkulator",
    icon: Calculator,
    title: "Poengkalkulator",
    description: "Beregn dine skolepoeng og konkurransepoeng for Samordna opptak. Karaktersnitt, realfag, tillegg og mer.",
    gradient: "from-blue-500 to-cyan-600",
    duration: "2 min",
    items: "Interaktiv kalkulator",
    tag: "Verktøy",
  },
];

export default function TestDegSelvPage() {
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
                <BreadcrumbPage>Test deg selv</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <section className="container pb-12">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="rounded-lg bg-gradient-to-br from-violet-500 to-emerald-600 p-3">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-emerald-600 bg-clip-text text-transparent">
                Test deg selv
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Utforsk deg selv med vitenskapelige tester. Alle testene gir personlig AI-analyse og er helt gratis.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {tests.map((test) => (
              <Link key={test.href} href={test.href} className="group block">
                <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden h-full">
                  <CardContent className="p-0 flex flex-col h-full">
                    {/* Gradient header */}
                    <div className={`bg-gradient-to-br ${test.gradient} px-5 py-6 flex items-center gap-3`}>
                      <test.icon className="h-7 w-7 text-white shrink-0" />
                      <h2 className="font-bold text-white text-lg leading-tight">{test.title}</h2>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col">
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground w-fit mb-3">
                        {test.tag}
                      </span>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                        {test.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {test.duration}
                          </span>
                          <span>{test.items}</span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
