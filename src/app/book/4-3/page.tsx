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

export default function Chapter43Page() {
  useKeyboardNavigation('4-3');

  return (
    <BookLayout currentChapterId="4-3">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="4-3" />
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">Lærebok</Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 4.3</span>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-700/10 rounded-lg">
                <Code className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 4.3</p>
                  <Badge variant="outline" className="text-green-700">10. klasse</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">Løse likninger numerisk</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Vi lærer å finne løsninger på likninger ved hjelp av prøve-og-feile metode og løkker.
            </p>
          </div>

          {/* Section 1: Prøve og feile */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Prøve-og-feile metode</h2>

            <p className="text-lg mb-6">
              Noen ganger er det vanskelig å løse en likning algebraisk. Da kan vi bruke
              Python til å <strong>prøve oss frem</strong> med ulike verdier.
            </p>

            <PythonRunner
              title="Finne nullpunkt ved å prøve verdier"
              initialCode={`def f(x):
    """f(x) = x² - 4"""
    return x ** 2 - 4

# Prøv verdier fra -3 til 3
print("x  | f(x)")
print("---|-----")
for x in range(-3, 4):
    y = f(x)
    print(f"{x:2} | {y:3}")

# Vi ser at f(2) = 0 og f(-2) = 0
print("\\nNullpunktene er x = -2 og x = 2")`}
              height="320px"
              storageKey="4-3-prove"
            />

            <InfoBox type="info" title="Nullpunkt">
              Et nullpunkt er en x-verdi der f(x) = 0. Det er der grafen krysser x-aksen.
            </InfoBox>
          </section>

          {/* Section 2: Bruke løkke til å finne nullpunkt */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Finne nullpunkt med løkke</h2>

            <p className="text-lg mb-6">
              Vi kan bruke en løkke til å systematisk søke etter nullpunkt.
              Hvis funksjonen skifter fortegn, må det være et nullpunkt imellom.
            </p>

            <PythonRunner
              title="Søk etter nullpunkt med løkke"
              initialCode={`def f(x):
    """f(x) = x² - 5"""
    return x ** 2 - 5

# Søk etter nullpunkt mellom 0 og 3
print("Søker etter nullpunkt der f(x) = 0:")
print("-" * 40)

for x in range(0, 31):  # 0.0 til 3.0 i steg på 0.1
    x_verdi = x / 10  # Del på 10 for å få desimaltall
    y = f(x_verdi)

    # Er vi nær null?
    if abs(y) < 0.1:
        print(f"x ≈ {x_verdi:.1f}, f(x) = {y:.3f}")

print("\\nNøyaktig svar: √5 ≈ 2.236")`}
              height="380px"
              storageKey="4-3-lokke"
            />
          </section>

          {/* Section 3: Finne når to funksjoner er like */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Når er to funksjoner like?</h2>

            <p className="text-lg mb-6">
              Vi kan finne hvor to funksjoner krysser hverandre ved å finne
              nullpunktet til differansen: f(x) - g(x) = 0
            </p>

            <PythonRunner
              title="Når krysser f(x) og g(x)?"
              initialCode={`def f(x):
    """f(x) = 2x + 1"""
    return 2 * x + 1

def g(x):
    """g(x) = -x + 7"""
    return -x + 7

# Finn x der f(x) = g(x)
print("x  | f(x) | g(x) | Differanse")
print("---|------|------|------------")

for x in range(0, 8):
    fx = f(x)
    gx = g(x)
    diff = fx - gx
    print(f"{x:2} | {fx:4} | {gx:4} | {diff:6}")

    if abs(diff) < 0.1:
        print(f"\\nDe krysser ved x = {x}")

# Sjekk algebraisk: 2x + 1 = -x + 7
# 3x = 6, x = 2`}
              height="380px"
              storageKey="4-3-krysser"
            />

            <InfoBox type="tip" title="Algebraisk løsning">
              2x + 1 = -x + 7
              <br />
              3x = 6
              <br />
              x = 2
              <br />
              <br />
              Python bekrefter den algebraiske løsningen!
            </InfoBox>
          </section>

          {/* Exercises */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Oppgaver</h2>

            <div className="mb-8">
              <Exercise
                title="Oppgave 4.3.1: Finn nullpunkt"
                description={`Finn nullpunktet til f(x) = x - 3.

Bruk en løkke som prøver verdier fra 0 til 5.`}
                initialCode={`def f(x):
    return x - 3

# Søk etter nullpunkt
for x in range(0, 6):
    if f(x) == 0:
        print(f"Nullpunkt: x = {x}")`}
                difficulty="lett"
                testCases={[
                  { expectedOutput: "x = 3", matchMode: 'contains' }
                ]}
                hints={[
                  "x - 3 = 0 gir x = 3",
                  "Bruk if f(x) == 0:"
                ]}
                storageKey="4-3-ex1"
                chapterId="4-3"
                exerciseId="4-3-1"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 4.3.2: Finn tilnærmet nullpunkt"
                description={`Finn tilnærmet nullpunkt til f(x) = x² - 10.

Søk mellom 0 og 5 med steg på 0.1. Skriv ut når |f(x)| < 0.1`}
                initialCode={`def f(x):
    return x ** 2 - 10

# Søk med små steg
for i in range(0, 51):  # 0.0 til 5.0
    x = i / 10
    if abs(f(x)) < 0.1:
        print(f"x ≈ {x:.1f}, f(x) = {f(x):.3f}")`}
                difficulty="medium"
                testCases={[
                  { expectedOutput: "3.1", matchMode: 'contains' }
                ]}
                hints={[
                  "√10 ≈ 3.162",
                  "Søk nær x = 3"
                ]}
                storageKey="4-3-ex2"
                chapterId="4-3"
                exerciseId="4-3-2"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 4.3.3: Finn skjæringspunkt"
                description={`Finn hvor f(x) = 3x - 2 og g(x) = x + 4 krysser.

Prøv verdier fra 0 til 10 og finn hvor f(x) = g(x).`}
                initialCode={`def f(x):
    return 3 * x - 2

def g(x):
    return x + 4

# Finn x der f(x) = g(x)
for x in range(0, 11):
    if f(x) == g(x):
        print(f"Krysser ved x = {x}")
        print(f"f({x}) = {f(x)}")
        print(f"g({x}) = {g(x)}")`}
                difficulty="medium"
                testCases={[
                  { expectedOutput: "x = 3", matchMode: 'contains' }
                ]}
                hints={[
                  "3x - 2 = x + 4",
                  "2x = 6",
                  "x = 3"
                ]}
                storageKey="4-3-ex3"
                chapterId="4-3"
                exerciseId="4-3-3"
              />
            </div>
          </section>

          <section className="mb-12">
            <Card className="bg-green-700/5 border-green-700/20">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Oppsummering</h2>
                <div className="space-y-2">
                  <p>✓ <strong>Nullpunkt</strong>: f(x) = 0</p>
                  <p>✓ <strong>Prøve-og-feile</strong>: Systematisk søk med løkke</p>
                  <p>✓ <strong>Fortegnsskifte</strong>: Nullpunkt ligger mellom positiv og negativ verdi</p>
                  <p>✓ <strong>Skjæringspunkt</strong>: Løs f(x) = g(x) eller finn nullpunkt til f(x) - g(x)</p>
                </div>
              </CardContent>
            </Card>
          </section>

          <ChapterNavigation currentChapterId="4-3" />
        </div>
      </div>
    </BookLayout>
  );
}
