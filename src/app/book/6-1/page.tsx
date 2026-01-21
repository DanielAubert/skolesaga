'use client';

import { BookLayout } from "@/components/book/book-layout";
import { PythonRunner } from "@/components/book/python-runner";
import { Exercise } from "@/components/book/exercise";
import { InfoBox } from "@/components/book/info-box";
import { ChapterNavigation } from "@/components/book/chapter-navigation";
import { ChapterProgressBar } from "@/components/book/chapter-progress-bar";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { FunctionSquare } from "lucide-react";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";

export default function Chapter61Page() {
  useKeyboardNavigation('6-1');
  return (
    <BookLayout currentChapterId="6-1">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          {/* Progress Bar */}
          <div className="mb-4 sm:mb-6 space-y-3 sm:space-y-4">
            <ChapterProgressBar currentChapterId="6-1" />
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
            <Link href="/book" className="hover:text-foreground">
              Lærebok
            </Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 6.1</span>
          </div>

          {/* Chapter Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-start sm:items-center gap-3 mb-3 sm:mb-4">
              <div className="p-2 bg-blue-600/10 rounded-lg shrink-0">
                <FunctionSquare className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground">Kapittel 6.1</p>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-600/10 text-blue-600">
                    1T
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Funksjoner i Python
                </h1>
              </div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              I dette kapitlet skal du lære hvordan matematiske funksjoner kan skrives som
              Python-funksjoner, og hvordan du beregner funksjonsverdier.
            </p>
          </div>

          {/* Section 1: Matematiske funksjoner */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Matematiske funksjoner</h2>

            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              I matematikken skriver vi funksjoner som f(x) = 2x + 3. Dette betyr at funksjonen
              f tar en verdi x som input, og gir tilbake en verdi 2x + 3 som output.
            </p>

            <Card className="mb-4 sm:mb-6">
              <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-2">Eksempel:</h3>
                    <p className="text-sm sm:text-base mb-2">
                      For funksjonen f(x) = 2x + 3:
                    </p>
                    <div className="bg-muted p-3 rounded-lg space-y-2">
                      <div>f(0) = 2·0 + 3 = 3</div>
                      <div>f(1) = 2·1 + 3 = 5</div>
                      <div>f(5) = 2·5 + 3 = 13</div>
                      <div>f(-2) = 2·(-2) + 3 = -1</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <InfoBox type="info" title="Funksjoner i matematikk">
              En funksjon tar en input-verdi (x) og gir tilbake en output-verdi.
              Funksjonen beskriver en sammenheng mellom input og output.
            </InfoBox>
          </section>

          {/* Section 2: Funksjoner i Python */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Funksjoner i Python</h2>

            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              I Python kan vi definere funksjoner ved å bruke nøkkelordet <code>def</code>.
              En funksjon f(x) = 2x + 3 kan skrives slik:
            </p>

            <div className="bg-muted p-4 rounded-lg mb-6 font-mono text-sm">
              <div>def f(x):</div>
              <div className="ml-4">return 2*x + 3</div>
            </div>

            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Nå kan vi bruke funksjonen til å beregne funksjonsverdier:
            </p>

            <PythonRunner
              title="Eksempel: En enkel funksjon"
              initialCode={`# Definer funksjonen f(x) = 2x + 3
def f(x):
    return 2*x + 3

# Beregn funksjonsverdier
print("f(0) =", f(0))
print("f(1) =", f(1))
print("f(5) =", f(5))
print("f(-2) =", f(-2))`}
              height="250px"
              storageKey="6-1-simple-function"
            />

            <InfoBox type="note" title="Syntaks for funksjoner">
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li><code>def</code> starter funksjonsdefinisjonen</li>
                <li>Funksjonsnavnet kommer etter (f.eks. <code>f</code>)</li>
                <li>Parameteren står i parenteser (f.eks. <code>x</code>)</li>
                <li>Innholdet i funksjonen må være innrykket</li>
                <li><code>return</code> angir hva funksjonen skal gi tilbake</li>
              </ul>
            </InfoBox>
          </section>

          {/* Section 3: Mer komplekse funksjoner */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Mer komplekse funksjoner</h2>

            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Vi kan definere mer komplekse funksjoner på samme måte. Her er noen eksempler:
            </p>

            <PythonRunner
              title="Eksempel: Ulike funksjoner"
              initialCode={`# g(x) = x²
def g(x):
    return x**2

# h(x) = x² - 4x + 3
def h(x):
    return x**2 - 4*x + 3

# k(x) = 1/x
def k(x):
    return 1/x

# Test funksjonene
print("g(3) =", g(3))
print("h(2) =", h(2))
print("k(4) =", k(4))`}
              height="300px"
              storageKey="6-1-complex-functions"
            />

            <InfoBox type="tip">
              Husk at potenser i Python skrives med dobbel stjerne: x**2 betyr x².
            </InfoBox>
          </section>

          {/* Exercises */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Oppgaver</h2>

            <div className="space-y-8">
              {/* Exercise 1 */}
              <Exercise
                title="Oppgave 6.1a: Lineær funksjon"
                description="Lag en funksjon f(x) = 3x - 5 og beregn funksjonsverdiene f(0), f(2) og f(10). Skriv ut resultatene."
                initialCode={`# Definer funksjonen f(x) = 3x - 5
def f(x):
    # Din kode her

# Beregn og skriv ut funksjonsverdier
print("f(0) =", f(0))
print("f(2) =", f(2))
print("f(10) =", f(10))`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "f(0) = -5",
                    description: "f(0) skal være -5",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "f(2) = 1",
                    description: "f(2) skal være 1",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "f(10) = 25",
                    description: "f(10) skal være 25",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Funksjonen skal være: return 3*x - 5",
                  "Husk å bruke return for å gi tilbake verdien"
                ]}
                storageKey="6-1-exercise-1"
                chapterId="6-1"
                exerciseId="6-1-exercise-1"
              />

              {/* Exercise 2 */}
              <Exercise
                title="Oppgave 6.1b: Andregradsfunksjon"
                description="Lag en funksjon g(x) = x² + 2x - 8 og beregn g(-3), g(0) og g(4). Skriv ut resultatene."
                initialCode={`# Definer funksjonen g(x) = x² + 2x - 8


# Beregn og skriv ut funksjonsverdier


`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "g(-3) = -5",
                    description: "g(-3) skal være -5",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "g(0) = -8",
                    description: "g(0) skal være -8",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "g(4) = 16",
                    description: "g(4) skal være 16",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Bruk x**2 for x²",
                  "Funksjonen skal være: return x**2 + 2*x - 8",
                  "Husk å definere funksjonen med def g(x):"
                ]}
                storageKey="6-1-exercise-2"
                chapterId="6-1"
                exerciseId="6-1-exercise-2"
              />

              {/* Exercise 3 */}
              <Exercise
                title="Oppgave 6.1c: Tabell med funksjonsverdier"
                description="Lag en funksjon h(x) = 2x² - x + 1. Bruk en løkke til å skrive ut funksjonsverdiene for x = 0, 1, 2, 3, 4, 5."
                initialCode={`# Definer funksjonen h(x) = 2x² - x + 1


# Skriv ut funksjonsverdier for x fra 0 til 5
for x in range(6):
    # Din kode her
    `}
                difficulty="medium"
                testCases={[
                  {
                    expectedOutput: "h(0) = 1",
                    description: "h(0) skal være 1",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "h(2) = 7",
                    description: "h(2) skal være 7",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "h(5) = 46",
                    description: "h(5) skal være 46",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Definer funksjonen: def h(x): return 2*x**2 - x + 1",
                  "I løkken: print(f'h({x}) = {h(x)}')",
                  "range(6) gir tallene 0, 1, 2, 3, 4, 5"
                ]}
                storageKey="6-1-exercise-3"
                chapterId="6-1"
                exerciseId="6-1-exercise-3"
              />
            </div>
          </section>

          {/* Summary */}
          <section className="mb-12">
            <Card className="bg-blue-600/5 border-blue-600/20">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Oppsummering</h2>
                <div className="space-y-3">
                  <p className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Matematiske funksjoner kan skrives som Python-funksjoner med <code>def</code></span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>En funksjon tar input (parameter) og gir tilbake output med <code>return</code></span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Vi kan beregne funksjonsverdier ved å kalle funksjonen med forskjellige verdier</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Løkker kan brukes til å beregne mange funksjonsverdier effektivt</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <ChapterNavigation currentChapterId="6-1" />
        </div>
      </div>
    </BookLayout>
  );
}
