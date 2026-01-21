'use client';

import { BookLayout } from "@/components/book/book-layout";
import { PythonRunner } from "@/components/book/python-runner";
import { Exercise } from "@/components/book/exercise";
import { InfoBox } from "@/components/book/info-box";
import { ChapterNavigation } from "@/components/book/chapter-navigation";
import { ChapterProgressBar } from "@/components/book/chapter-progress-bar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Code } from "lucide-react";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";

export default function Chapter42Page() {
  useKeyboardNavigation('4-2');

  return (
    <BookLayout currentChapterId="4-2">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="4-2" />
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">Lærebok</Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 4.2</span>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-700/10 rounded-lg">
                <Code className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 4.2</p>
                  <Badge variant="outline" className="text-green-700">10. klasse</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">Matematisk modellering</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Vi lærer å modellere lineære funksjoner i Python og bruke dem til å løse praktiske problemer.
            </p>
          </div>

          {/* Section 1: Lineære funksjoner */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Lineære funksjoner</h2>

            <p className="text-lg mb-6">
              En lineær funksjon har formen <strong>f(x) = ax + b</strong>, der:
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  <li><strong>a</strong> er stigningstallet (hvor bratt grafen er)</li>
                  <li><strong>b</strong> er konstantleddet (hvor grafen krysser y-aksen)</li>
                  <li><strong>x</strong> er inndata (input)</li>
                  <li><strong>f(x)</strong> er utdata (output)</li>
                </ul>
              </CardContent>
            </Card>

            <InfoBox type="info" title="Eksempel">
              f(x) = 2x + 3
              <br />
              Her er a = 2 (stigning) og b = 3 (konstantledd)
            </InfoBox>
          </section>

          {/* Section 2: Implementere lineær funksjon */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Lage funksjoner i Python</h2>

            <p className="text-lg mb-6">
              La oss implementere en lineær funksjon i Python:
            </p>

            <PythonRunner
              title="Lineær funksjon: f(x) = 2x + 3"
              initialCode={`def f(x):
    """Lineær funksjon: f(x) = 2x + 3"""
    return 2 * x + 3

# Beregn funksjonsverdier
print("x  | f(x)")
print("---|-----")
for x in range(-2, 6):
    y = f(x)
    print(f"{x:2} | {y:3}")`}
              height="300px"
              storageKey="4-2-linear"
            />

            <div className="mt-6">
              <PythonRunner
                title="Generell lineær funksjon"
                initialCode={`def lineær_funksjon(x, a, b):
    """
    Generell lineær funksjon: f(x) = ax + b

    x: innverdi
    a: stigningstall
    b: konstantledd
    """
    return a * x + b

# Eksempel: f(x) = -3x + 5
a = -3
b = 5

print(f"f(x) = {a}x + {b}")
print()
print("x  | f(x)")
print("---|-----")
for x in range(0, 6):
    y = lineær_funksjon(x, a, b)
    print(f"{x:2} | {y:3}")`}
                height="380px"
                storageKey="4-2-general"
              />
            </div>
          </section>

          {/* Section 3: Praktisk eksempel - Avstand og tid */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Eksempel: Avstand og tid</h2>

            <p className="text-lg mb-6">
              En bil kjører med konstant hastighet på 80 km/t. Vi kan modellere
              sammenhengen mellom tid og avstand med en lineær funksjon.
            </p>

            <Card className="mb-6 bg-muted/50">
              <CardContent className="pt-6">
                <p className="font-semibold mb-2">Modell:</p>
                <p className="font-mono text-center text-lg">
                  avstand = hastighet × tid
                </p>
                <p className="font-mono text-center text-lg">
                  s(t) = 80t
                </p>
                <p className="text-center mt-2 text-muted-foreground text-sm">
                  (Her er a = 80 og b = 0)
                </p>
              </CardContent>
            </Card>

            <PythonRunner
              title="Modell: Bil som kjører 80 km/t"
              initialCode={`def avstand(tid):
    """
    Beregner kjørt avstand.
    s(t) = 80t
    """
    hastighet = 80  # km/t
    return hastighet * tid

# Vis kjørt avstand for ulike tider
print("Tid (t) | Avstand (km)")
print("--------|-------------")
for t in [0, 0.5, 1, 1.5, 2, 3, 4]:
    s = avstand(t)
    print(f"{t:7.1f} | {s:11.0f}")

# Hvor langt har bilen kjørt etter 2.5 timer?
print(f"\\nEtter 2.5 timer: {avstand(2.5)} km")`}
              height="380px"
              storageKey="4-2-avstand"
            />

            <InfoBox type="tip" title="Tolkning">
              Stigningstallet (80) forteller oss hvor mange kilometer bilen
              kjører per time. Konstantleddet (0) er startposisjonen.
            </InfoBox>
          </section>

          {/* Exercises */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Oppgaver</h2>

            <div className="mb-8">
              <Exercise
                title="Oppgave 4.2.1: Implementer lineær funksjon"
                description={`Lag en funksjon for f(x) = 5x - 2.

Beregn f(4) og f(10).`}
                initialCode={`def f(x):
    # Din kode her
    return

# Test
print(f"f(4) = {f(4)}")
print(f"f(10) = {f(10)}")`}
                difficulty="lett"
                testCases={[
                  { expectedOutput: "f(4) = 18", matchMode: 'contains' },
                  { expectedOutput: "f(10) = 48", matchMode: 'contains' }
                ]}
                hints={[
                  "f(x) = 5x - 2",
                  "return 5 * x - 2"
                ]}
                storageKey="4-2-ex1"
                chapterId="4-2"
                exerciseId="4-2-1"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 4.2.2: Finn y-verdier"
                description={`Lag en funksjon g(x) = -2x + 8.

Lag en løkke som skriver ut x og g(x) for x fra 0 til 5.`}
                initialCode={`def g(x):
    return -2 * x + 8

# Skriv ut tabell
print("x | g(x)")
print("--|-----")
for x in range(0, 6):
    y = g(x)
    print(f"{x} | {y}")`}
                difficulty="lett"
                testCases={[
                  { expectedOutput: "0 | 8", matchMode: 'contains' },
                  { expectedOutput: "5 | -2", matchMode: 'contains' }
                ]}
                hints={[
                  "Bruk range(0, 6) for x fra 0 til 5",
                  "g(0) = 8, g(5) = -2"
                ]}
                storageKey="4-2-ex2"
                chapterId="4-2"
                exerciseId="4-2-2"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 4.2.3: Modeller temperatur"
                description={`Temperaturen synker med 2°C per time. Starttemperaturen er 15°C.

Lag en funksjon T(t) som gir temperaturen etter t timer.

Hva er temperaturen etter 3 timer? Etter 6 timer?`}
                initialCode={`def T(t):
    """
    Temperatur som funksjon av tid.
    Synker 2°C per time, starter på 15°C.
    """
    # Din kode her
    return

# Test
print(f"Etter 3 timer: {T(3)}°C")
print(f"Etter 6 timer: {T(6)}°C")`}
                difficulty="medium"
                testCases={[
                  { expectedOutput: "Etter 3 timer: 9°C", matchMode: 'contains' },
                  { expectedOutput: "Etter 6 timer: 3°C", matchMode: 'contains' }
                ]}
                hints={[
                  "T(t) = 15 - 2t",
                  "Negativt stigningstall fordi det synker",
                  "T(3) = 15 - 2×3 = 9"
                ]}
                storageKey="4-2-ex3"
                chapterId="4-2"
                exerciseId="4-2-3"
              />
            </div>
          </section>

          <section className="mb-12">
            <Card className="bg-green-700/5 border-green-700/20">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Oppsummering</h2>
                <div className="space-y-2">
                  <p>✓ <strong>Lineær funksjon</strong>: f(x) = ax + b</p>
                  <p>✓ <strong>a</strong> er stigningstallet</p>
                  <p>✓ <strong>b</strong> er konstantleddet</p>
                  <p>✓ <strong>Modellering</strong>: bruk funksjoner til å beskrive sammenhenger</p>
                  <p>✓ <strong>Beregn funksjonsverdier</strong> for ulike x-verdier</p>
                </div>
              </CardContent>
            </Card>
          </section>

          <ChapterNavigation currentChapterId="4-2" />
        </div>
      </div>
    </BookLayout>
  );
}
