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

export default function Chapter64Page() {
  useKeyboardNavigation('6-4');
  return (
    <BookLayout currentChapterId="6-4">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          {/* Progress Bar */}
          <div className="mb-4 sm:mb-6 space-y-3 sm:space-y-4">
            <ChapterProgressBar currentChapterId="6-4" />
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
            <Link href="/book" className="hover:text-foreground">
              Lærebok
            </Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 6.4</span>
          </div>

          {/* Chapter Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-start sm:items-center gap-3 mb-3 sm:mb-4">
              <div className="p-2 bg-blue-600/10 rounded-lg shrink-0">
                <FunctionSquare className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground">Kapittel 6.4</p>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-600/10 text-blue-600">
                    1T
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Prosjekt: Funksjonsanalyse
                </h1>
              </div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              I dette kapitlet skal du kombinere alt du har lært om funksjoner i Python
              til å lage et komplett program for funksjonsanalyse.
            </p>
          </div>

          {/* Section 1: Hva er funksjonsanalyse? */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Hva er funksjonsanalyse?</h2>

            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Funksjonsanalyse handler om å undersøke egenskapene til en matematisk funksjon.
              Vi er ofte interessert i:
            </p>

            <Card className="mb-4 sm:mb-6">
              <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <div>
                      <strong>Nullpunkter:</strong> Hvor krysser funksjonen x-aksen? (f(x) = 0)
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <div>
                      <strong>Toppunkt/bunnpunkt:</strong> Hvor har funksjonen lokale maksimum/minimum?
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <div>
                      <strong>Verditabell:</strong> Hvilke y-verdier gir funksjonen for forskjellige x-verdier?
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <div>
                      <strong>Funksjonsverdier:</strong> f(a) for spesifikke verdier a
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <InfoBox type="info" title="Ekstremalpunkter">
              Et toppunkt (maksimum) eller bunnpunkt (minimum) kalles også ekstremalpunkter.
              For andregradsuttrykk ax² + bx + c ligger ekstremalpunktet ved x = -b/(2a).
            </InfoBox>
          </section>

          {/* Section 2: Komplett analyse av andregradsfunksjon */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Komplett analyse</h2>

            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Her er et eksempel på et program som analyserer en andregradsfunksjon:
            </p>

            <PythonRunner
              title="Eksempel: Komplett funksjonsanalyse"
              initialCode={`import math

def f(x):
    """f(x) = x² - 4x + 3"""
    return x**2 - 4*x + 3

# Koeffisienter
a, b, c = 1, -4, 3

print("=== FUNKSJONSANALYSE ===")
print(f"Funksjon: f(x) = x² - 4x + 3")
print()

# 1. Nullpunkter (abc-formelen)
print("--- Nullpunkter ---")
diskriminant = b**2 - 4*a*c
if diskriminant >= 0:
    x1 = (-b + math.sqrt(diskriminant)) / (2*a)
    x2 = (-b - math.sqrt(diskriminant)) / (2*a)
    print(f"x₁ = {x1}")
    print(f"x₂ = {x2}")
else:
    print("Ingen reelle nullpunkter")
print()

# 2. Ekstremalpunkt (topp/bunn)
print("--- Ekstremalpunkt ---")
x_ekstr = -b / (2*a)
y_ekstr = f(x_ekstr)
print(f"x = {x_ekstr}")
print(f"f({x_ekstr}) = {y_ekstr}")
print(f"Type: {'Bunnpunkt' if a > 0 else 'Toppunkt'}")
print()

# 3. Verditabell
print("--- Verditabell ---")
print("x  | f(x)")
print("---|-----")
for x in range(0, 5):
    print(f"{x}  | {f(x)}")`}
              height="450px"
              storageKey="6-4-complete-analysis"
            />

            <InfoBox type="tip">
              Dette programmet viser alle de viktige egenskapene til funksjonen på en
              oversiktlig måte. Det er lett å endre koeffisientene for å analysere andre funksjoner.
            </InfoBox>
          </section>

          {/* Section 3: Interaktiv analyse */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Interaktiv funksjonsanalyse</h2>

            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Vi kan også lage et program som finner ekstremalpunkter numerisk ved å
              søke etter steder der funksjonen har høyest eller lavest verdi i et intervall:
            </p>

            <PythonRunner
              title="Eksempel: Finn ekstremalpunkt numerisk"
              initialCode={`def f(x):
    """En tredjegradsfunksjon"""
    return x**3 - 6*x**2 + 9*x + 1

def finn_minimum(f, a, b, steg=0.01):
    """Finn minimum i intervallet [a, b]"""
    x_min = a
    y_min = f(a)

    x = a
    while x <= b:
        if f(x) < y_min:
            y_min = f(x)
            x_min = x
        x += steg

    return x_min, y_min

def finn_maksimum(f, a, b, steg=0.01):
    """Finn maksimum i intervallet [a, b]"""
    x_max = a
    y_max = f(a)

    x = a
    while x <= b:
        if f(x) > y_max:
            y_max = f(x)
            x_max = x
        x += steg

    return x_max, y_max

# Analyser funksjonen
print("Funksjon: f(x) = x³ - 6x² + 9x + 1")
print()

x_min, y_min = finn_minimum(f, 0, 4)
print(f"Minimum: ({x_min:.2f}, {y_min:.2f})")

x_max, y_max = finn_maksimum(f, 0, 4)
print(f"Maksimum: ({x_max:.2f}, {y_max:.2f})")`}
              height="400px"
              storageKey="6-4-numerical-extrema"
            />
          </section>

          {/* Project Exercises */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Prosjektoppgaver</h2>

            <div className="space-y-8">
              {/* Exercise 1 */}
              <Exercise
                title="Prosjekt 6.4a: Analyser en andregradsfunksjon"
                description="Lag et komplett analyseprogram for funksjonen g(x) = 2x² - 8x + 6. Programmet skal finne og skrive ut: 1) Nullpunkter, 2) Ekstremalpunkt, 3) Verditabell for x fra -1 til 5."
                initialCode={`import math

def g(x):
    return 2*x**2 - 8*x + 6

# Koeffisienter
a, b, c = 2, -8, 6

print("=== FUNKSJONSANALYSE ===")
print("Funksjon: g(x) = 2x² - 8x + 6")
print()

# 1. Nullpunkter


# 2. Ekstremalpunkt


# 3. Verditabell

`}
                difficulty="medium"
                testCases={[
                  {
                    expectedOutput: "3.0",
                    description: "Ett nullpunkt skal være 3.0",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "1.0",
                    description: "Ett nullpunkt skal være 1.0",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "x = 2.0",
                    description: "Ekstremalpunkt ved x = 2.0",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Bruk abc-formelen for nullpunkter",
                  "Ekstremalpunkt: x = -b/(2*a)",
                  "Beregn f(ekstremalpunkt) for y-verdien",
                  "Bruk en for-løkke for verditabellen: for x in range(-1, 6)"
                ]}
                storageKey="6-4-exercise-1"
                chapterId="6-4"
                exerciseId="6-4-exercise-1"
              />

              {/* Exercise 2 */}
              <Exercise
                title="Prosjekt 6.4b: Analyser med halveringsmetoden"
                description="Lag et program som analyserer funksjonen h(x) = x³ - 3x + 1. Bruk halveringsmetoden til å finne nullpunktet i intervallet [0, 1]. Finn også minimum i intervallet [-2, 0] numerisk."
                initialCode={`import math

def h(x):
    return x**3 - 3*x + 1

def halvering(f, a, b, toleranse=0.0001):
    # Implementer halveringsmetoden


def finn_minimum(f, a, b, steg=0.01):
    # Implementer minimum-søk


print("=== FUNKSJONSANALYSE ===")
print("Funksjon: h(x) = x³ - 3x + 1")
print()

# Finn nullpunkt


# Finn minimum


`}
                difficulty="vanskelig"
                testCases={[
                  {
                    expectedOutput: "0.34",
                    description: "Nullpunkt ca. 0.347",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "-1.0",
                    description: "Minimum ved ca. x = -1.0",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Kopier halveringsfunksjonen fra kapittel 6.3",
                  "Kopier finn_minimum funksjonen fra eksempelet",
                  "Skriv ut resultatene med passende tekst",
                  "Verifiser ved å beregne h(nullpunkt) - skal være nær 0"
                ]}
                storageKey="6-4-exercise-2"
                chapterId="6-4"
                exerciseId="6-4-exercise-2"
              />

              {/* Exercise 3 */}
              <Exercise
                title="Prosjekt 6.4c: Komplett analyseverktøy"
                description="Lag et komplett analyseverktøy for andregradsfunksjoner. Programmet skal ta inn koeffisienter a, b, c og utføre fullstendig analyse med pen formatering."
                initialCode={`import math

def analyser_andregradsfunksjon(a, b, c):
    """
    Utfører komplett analyse av f(x) = ax² + bx + c
    """
    def f(x):
        return a*x**2 + b*x + c

    print("=" * 40)
    print("FUNKSJONSANALYSE")
    print("=" * 40)
    print(f"Funksjon: f(x) = {a}x² + {b}x + {c}")
    print()

    # Implementer analysen her:
    # 1. Nullpunkter (med abc-formelen)


    # 2. Ekstremalpunkt


    # 3. Verditabell (x fra -3 til 3)


    print("=" * 40)

# Test programmet
analyser_andregradsfunksjon(1, -2, -3)
print()
analyser_andregradsfunksjon(2, 4, -6)`}
                difficulty="vanskelig"
                testCases={[
                  {
                    expectedOutput: "x₁ = 3.0",
                    description: "Første funksjon har nullpunkt x = 3.0",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "x₁ = 1.0",
                    description: "Andre funksjon har nullpunkt x = 1.0",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Bruk samme struktur som i det første eksempelet",
                  "Sjekk diskriminanten før du beregner røtter",
                  "Ekstremalpunkt: x = -b/(2*a), y = f(x)",
                  "Bruk f-strings for pen formatering"
                ]}
                storageKey="6-4-exercise-3"
                chapterId="6-4"
                exerciseId="6-4-exercise-3"
              />
            </div>
          </section>

          {/* Summary */}
          <section className="mb-12">
            <Card className="bg-blue-600/5 border-blue-600/20">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Oppsummering - Kapittel 6</h2>
                <div className="space-y-3">
                  <p className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Python-funksjoner defineres med <code>def</code> og kan representere matematiske funksjoner</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Andregradsuttrykk har formen ax² + bx + c</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Abc-formelen brukes til å finne nullpunkter analytisk</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Halveringsmetoden finner nullpunkter numerisk for alle funksjoner</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Ekstremalpunkter kan finnes med formelen x = -b/(2a) eller numerisk</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Verditabeller gir oversikt over funksjonens verdier</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Kombinasjon av analytiske og numeriske metoder gir kraftige analyseverktøy</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <ChapterNavigation currentChapterId="6-4" />
        </div>
      </div>
    </BookLayout>
  );
}
