"use client";

import { useState } from "react";
import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Play, CheckCircle2, GraduationCap, School, Calculator, Construction } from "lucide-react";
import { getChaptersByCategory, getLevelDisplayName, type ChapterCategory } from "@/lib/data/book-chapters";

// Category styling with colors matching the image
const categoryStyles: Record<ChapterCategory, { color: string; bgColor: string; icon: React.ReactNode }> = {
  "grunnleggende": {
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-500",
    icon: <BookOpen className="h-5 w-5" />
  },
  "8-klasse": {
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-500",
    icon: <School className="h-5 w-5" />
  },
  "9-klasse": {
    color: "text-sky-600 dark:text-sky-400",
    bgColor: "bg-sky-500",
    icon: <School className="h-5 w-5" />
  },
  "10-klasse": {
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-500",
    icon: <School className="h-5 w-5" />
  },
  "1P": {
    color: "text-teal-600 dark:text-teal-400",
    bgColor: "bg-teal-500",
    icon: <GraduationCap className="h-5 w-5" />
  },
  "1T": {
    color: "text-teal-700 dark:text-teal-300",
    bgColor: "bg-teal-600",
    icon: <GraduationCap className="h-5 w-5" />
  },
  "2P": {
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-500",
    icon: <Calculator className="h-5 w-5" />
  },
  "S1": {
    color: "text-red-600 dark:text-red-400",
    bgColor: "bg-red-500",
    icon: <Calculator className="h-5 w-5" />
  },
  "R1": {
    color: "text-red-700 dark:text-red-300",
    bgColor: "bg-red-600",
    icon: <Calculator className="h-5 w-5" />
  },
  "S2": {
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-500",
    icon: <Calculator className="h-5 w-5" />
  },
  "R2": {
    color: "text-orange-700 dark:text-orange-300",
    bgColor: "bg-orange-600",
    icon: <Calculator className="h-5 w-5" />
  }
};

// Category descriptions
const categoryDescriptions: Record<ChapterCategory, string> = {
  "grunnleggende": "Start her for å lære grunnleggende Python-programmering. Disse kapitlene dekker alt du trenger for å komme i gang.",
  "8-klasse": "Introduksjon til programmering med variabler, input/output og enkle programmer.",
  "9-klasse": "Funksjoner, lister og databehandling med statistikk.",
  "10-klasse": "Matematisk modellering og numeriske metoder.",
  "1P": "Praktisk matematikk med fokus på økonomi, prosent og budsjett.",
  "1T": "Funksjoner, polynomer og numeriske metoder som halveringsmetoden.",
  "2P": "Statistikk, standardavvik og simulering av hendelser.",
  "S1": "Kombinatorikk, binomialfordeling og Monte Carlo-simuleringer.",
  "R1": "Numerisk derivasjon, ekstremalpunkter og Newtons metode.",
  "S2": "Normalfordeling, konfidensintervall og hypotesetesting.",
  "R2": "Numerisk integrasjon, trapesmetoden og rekursive følger."
};

// Category labels
const categoryLabels: Record<ChapterCategory, string> = {
  "grunnleggende": "Grunnleggende ferdigheter",
  "8-klasse": "8. klasse",
  "9-klasse": "9. klasse",
  "10-klasse": "10. klasse",
  "1P": "1P",
  "1T": "1T",
  "2P": "2P",
  "S1": "S1",
  "R1": "R1",
  "S2": "S2",
  "R2": "R2"
};

// Grade levels (excluding grunnleggende)
const gradeLevels: ChapterCategory[] = [
  "8-klasse", "9-klasse", "10-klasse", "1P", "1T", "2P", "S1", "R1", "S2", "R2"
];

export default function BookIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<ChapterCategory>("8-klasse");
  const chapters = getChaptersByCategory(selectedCategory);

  return (
    <div className="flex min-h-screen flex-col bg-gray-100 dark:bg-gradient-to-b dark:from-background dark:via-background dark:to-muted/5">
      <MainNav />

      <main className="flex-1">
        <div className="container max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
            {/* Hero Section */}
            <div className="mb-8 text-center">
              <div className="inline-block mb-6">
                <Image
                  src="/book-images/image1.png"
                  alt="Python logo"
                  width={120}
                  height={120}
                  className="mx-auto"
                />
              </div>
              <h1 className="mb-4 text-4xl md:text-5xl font-bold">
                Python for ungdomsskole og VGS
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Interaktiv lærebok med videogjennomganger, øvelser med automatisk retting,
                og praktiske eksempler tilpasset hvert klassetrinn.
              </p>
            </div>

            {/* Grunnleggende ferdigheter - separate button */}
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setSelectedCategory("grunnleggende")}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === "grunnleggende"
                    ? "bg-green-500 text-white shadow-lg scale-105"
                    : "bg-green-500 text-white hover:opacity-90"
                }`}
              >
                Grunnleggende ferdigheter
              </button>
            </div>

            {/* Grade Level Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {gradeLevels.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? `${categoryStyles[category].bgColor} text-white shadow-lg scale-105`
                      : `${categoryStyles[category].bgColor} text-white hover:opacity-90`
                  }`}
                >
                  {categoryLabels[category]}
                </button>
              ))}
            </div>

            {/* Selected Category Content */}
            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${categoryStyles[selectedCategory].bgColor} text-white`}>
                  {categoryStyles[selectedCategory].icon}
                </div>
                <h2 className="text-3xl font-bold">{categoryLabels[selectedCategory]}</h2>
                <Badge variant="secondary">{chapters.length} kapitler</Badge>
              </div>

              <p className="text-muted-foreground mb-6">
                {categoryDescriptions[selectedCategory]}
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {chapters.map((chapter) => (
                  <Link key={chapter.id} href={chapter.url}>
                    <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex gap-2 flex-wrap">
                            <Badge className={categoryStyles[selectedCategory].bgColor}>
                              {chapter.number}
                            </Badge>
                            {chapter.level !== "grunnleggende" && (
                              <Badge variant="outline" className={categoryStyles[selectedCategory].color}>
                                {getLevelDisplayName(chapter.level)}
                              </Badge>
                            )}
                            {chapter.wip && (
                              <Badge variant="outline" className="text-amber-600 border-amber-500 bg-amber-50 dark:bg-amber-950/50">
                                <Construction className="h-3 w-3 mr-1" />
                                Under arbeid
                              </Badge>
                            )}
                          </div>
                          <CheckCircle2 className={`h-5 w-5 ${categoryStyles[selectedCategory].color}`} />
                        </div>
                        <CardTitle className="text-xl">{chapter.title}</CardTitle>
                        <CardDescription>{chapter.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {chapter.videoUrl && (
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Play className="h-4 w-4" />
                              <span>Video-gjennomgang inkludert</span>
                            </div>
                          )}
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <BookOpen className="h-4 w-4" />
                            <span>{chapter.exercises} interaktive øvelser</span>
                          </div>
                          <Button className={`w-full mt-4 ${categoryStyles[selectedCategory].bgColor} hover:opacity-90`}>
                            Start kapittel {chapter.number}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
