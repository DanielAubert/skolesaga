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

export default function Chapter62Page() {
  useKeyboardNavigation('6-2');
  return (
    <BookLayout currentChapterId="6-2">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          {/* Progress Bar */}
          <div className="mb-4 sm:mb-6 space-y-3 sm:space-y-4">
            <ChapterProgressBar currentChapterId="6-2" />
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
            <Link href="/book" className="hover:text-foreground">
              Lærebok
            </Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 6.2</span>
          </div>

          {/* Chapter Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-start sm:items-center gap-3 mb-3 sm:mb-4">
              <div className="p-2 bg-blue-600/10 rounded-lg shrink-0">
                <FunctionSquare className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground">Kapittel 6.2</p>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-600/10 text-blue-600">
                    1T
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Polynomer og nullpunkter
                </h1>
              </div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              I dette kapitlet skal du lære hvordan du arbeider med andregradsuttrykk,
              plotter verdier og finner nullpunkter ved hjelp av abc-formelen.
            </p>
          </div>

          {/* Section 1: Andregradsuttrykk */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Andregradsuttrykk</h2>

            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Et andregradsuttrykk (polynom av grad 2) har formen:
            </p>

            <Card className="mb-4 sm:mb-6">
              <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
                <div className="text-center text-lg font-mono mb-4">
                  f(x) = ax² + bx + c
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  der a, b og c er konstanter og a ≠ 0.
                </p>
              </CardContent>
            </Card>

            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Eksempel: f(x) = x² - 4x + 3, her er a = 1, b = -4 og c = 3.
            </p>

            <PythonRunner
              title="Eksempel: Andregradsfunksjon"
              initialCode={`# Definer en andregradsfunksjon
def f(x):
    return x**2 - 4*x + 3

# Beregn noen verdier
for x in range(-1, 6):
    print(f"f({x}) = {f(x)}")`}
              height="200px"
              storageKey="6-2-quadratic-function"
            />

            <InfoBox type="info" title="Andregradsuttrykk">
              Et andregradsuttrykk gir en parabel når vi plotter den. Nullpunktene
              er de x-verdiene der funksjonen krysser x-aksen (der f(x) = 0).
            </InfoBox>
          </section>

          {/* Section 2: Verditabell */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Lage verditabell</h2>

            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Vi kan bruke Python til å lage en oversiktlig verditabell for en funksjon:
            </p>

            <PythonRunner
              title="Eksempel: Verditabell"
              initialCode={`# Definer funksjonen
def f(x):
    return x**2 - 4*x + 3

# Lag verditabell
print("x  | f(x)")
print("---|-----")
for x in range(0, 5):
    print(f"{x}  | {f(x)}")`}
              height="250px"
              storageKey="6-2-value-table"
            />

            <InfoBox type="tip">
              Fra verditabellen kan vi se at funksjonen har verdier nær null når x = 1 og x = 3.
              Dette gir oss hint om hvor nullpunktene er.
            </InfoBox>
          </section>

          {/* Section 3: ABC-formelen */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Finne nullpunkter med abc-formelen</h2>

            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              For å finne nullpunktene til f(x) = ax² + bx + c bruker vi abc-formelen:
            </p>

            <Card className="mb-4 sm:mb-6">
              <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
                <div className="text-center text-lg font-mono mb-4">
                  x = (-b ± √(b² - 4ac)) / (2a)
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Uttrykket under rottegnet (b² - 4ac) kalles diskriminanten.
                </p>
              </CardContent>
            </Card>

            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              I Python må vi importere <code>math</code>-modulen for å bruke kvadratrot:
            </p>

            <PythonRunner
              title="Eksempel: Finne nullpunkter"
              initialCode={`import math

# Funksjon: f(x) = x² - 4x + 3
a = 1
b = -4
c = 3

# Beregn diskriminanten
diskriminant = b**2 - 4*a*c
print(f"Diskriminant: {diskriminant}")

# Finn nullpunktene
x1 = (-b + math.sqrt(diskriminant)) / (2*a)
x2 = (-b - math.sqrt(diskriminant)) / (2*a)

print(f"Nullpunkt 1: x = {x1}")
print(f"Nullpunkt 2: x = {x2}")`}
              height="300px"
              storageKey="6-2-abc-formula"
            />

            <InfoBox type="note" title="Diskriminanten">
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Hvis diskriminant &gt; 0: To nullpunkter</li>
                <li>Hvis diskriminant = 0: Ett nullpunkt (dobbeltrot)</li>
                <li>Hvis diskriminant &lt; 0: Ingen reelle nullpunkter</li>
              </ul>
            </InfoBox>
          </section>

          {/* Exercises */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Oppgaver</h2>

            <div className="space-y-8">
              {/* Exercise 1 */}
              <Exercise
                title="Oppgave 6.2a: Verditabell"
                description="Lag en verditabell for funksjonen g(x) = x² - 6x + 5 for x = 0, 1, 2, 3, 4, 5, 6. Bruk samme format som i eksempelet."
                initialCode={`# Definer funksjonen g(x) = x² - 6x + 5


# Lag verditabell
print("x  | g(x)")
print("---|-----")

`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "0  | 5",
                    description: "g(0) skal være 5",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "3  | -4",
                    description: "g(3) skal være -4",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "6  | 5",
                    description: "g(6) skal være 5",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Definer funksjonen: def g(x): return x**2 - 6*x + 5",
                  "Bruk en for-løkke: for x in range(0, 7):",
                  "Print hver rad: print(f'{x}  | {g(x)}')"
                ]}
                storageKey="6-2-exercise-1"
                chapterId="6-2"
                exerciseId="6-2-exercise-1"
              />

              {/* Exercise 2 */}
              <Exercise
                title="Oppgave 6.2b: Nullpunkter"
                description="Finn nullpunktene til funksjonen h(x) = x² + 2x - 8 ved hjelp av abc-formelen. Skriv ut diskriminanten og begge nullpunktene."
                initialCode={`import math

# Koeffisienter for h(x) = x² + 2x - 8
a = 1
b = 2
c = -8

# Beregn diskriminanten


# Finn nullpunktene


`}
                difficulty="medium"
                testCases={[
                  {
                    expectedOutput: "36",
                    description: "Diskriminanten skal være 36",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "2.0",
                    description: "Ett nullpunkt skal være 2.0",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "-4.0",
                    description: "Ett nullpunkt skal være -4.0",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Diskriminant: diskriminant = b**2 - 4*a*c",
                  "x1 = (-b + math.sqrt(diskriminant)) / (2*a)",
                  "x2 = (-b - math.sqrt(diskriminant)) / (2*a)",
                  "Husk å skrive ut resultatene med print()"
                ]}
                storageKey="6-2-exercise-2"
                chapterId="6-2"
                exerciseId="6-2-exercise-2"
              />

              {/* Exercise 3 */}
              <Exercise
                title="Oppgave 6.2c: Nullpunktsprogram"
                description="Lag et program som finner nullpunktene til funksjonen k(x) = 2x² - 8x + 6. Programmet skal sjekke diskriminanten og skrive ut passende melding om antall nullpunkter."
                initialCode={`import math

# Koeffisienter for k(x) = 2x² - 8x + 6
a = 2
b = -8
c = 6

# Beregn diskriminanten
diskriminant = b**2 - 4*a*c

# Sjekk diskriminanten og finn nullpunkter
if diskriminant > 0:
    # To nullpunkter


elif diskriminant == 0:
    # Ett nullpunkt

else:
    # Ingen reelle nullpunkter
    print("Ingen reelle nullpunkter")`}
                difficulty="medium"
                testCases={[
                  {
                    expectedOutput: "16",
                    description: "Diskriminanten skal være 16",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "3.0",
                    description: "Ett nullpunkt skal være 3.0",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "1.0",
                    description: "Ett nullpunkt skal være 1.0",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Diskriminanten er 16, så det er to nullpunkter",
                  "Beregn x1 og x2 inne i if-blokken",
                  "Bruk formelen: x = (-b ± math.sqrt(diskriminant)) / (2*a)"
                ]}
                storageKey="6-2-exercise-3"
                chapterId="6-2"
                exerciseId="6-2-exercise-3"
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
                    <span>Andregradsuttrykk har formen ax² + bx + c</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Verditabeller hjelper oss å forstå funksjonen</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Abc-formelen brukes til å finne nullpunkter: x = (-b ± √(b² - 4ac)) / (2a)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Diskriminanten bestemmer antall reelle nullpunkter</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>I Python bruker vi <code>math.sqrt()</code> for å beregne kvadratrot</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <ChapterNavigation currentChapterId="6-2" />
        </div>
      </div>
    </BookLayout>
  );
}
