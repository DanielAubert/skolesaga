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
import { TrendingUp } from "lucide-react";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";

export default function Chapter93Page() {
  useKeyboardNavigation('9-3');

  return (
    <BookLayout currentChapterId="9-3">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="9-3" />
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">Lærebok</Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 9.3</span>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-600/10 rounded-lg">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 9.3</p>
                  <Badge variant="outline" className="text-purple-600 border-purple-600">R1</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">Newtons metode</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Bruk derivasjon til å finne nullpunkter av funksjoner med Newtons metode.
            </p>
          </div>

          {/* Section 1: Hva er Newtons metode? */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Hva er Newtons metode?</h2>

            <p className="text-lg mb-6">
              Newtons metode er en kraftig måte å finne nullpunkter på - altså punkter hvor f(x) = 0.
              Metoden bruker den deriverte til å &quot;gjette&quot; seg fram til løsningen.
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">Newtons formel:</h3>
                <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg text-center">
                  <p className="text-xl">
                    x<sub>ny</sub> = x - f(x) / f&apos;(x)
                  </p>
                </div>
                <p className="text-muted-foreground mt-3">
                  Vi starter med et gjett (x) og regner ut en bedre tilnærming (x<sub>ny</sub>).
                  Dette gjentas til vi har funnet nullpunktet.
                </p>
              </CardContent>
            </Card>

            <InfoBox type="info" title="Hvordan virker det?">
              Forestill deg at du står på grafen til funksjonen. Newtons metode trekker en
              tangent (stigningstall = f&apos;(x)) og finner hvor denne tangenten krysser x-aksen.
              Dette gir en bedre tilnærming til nullpunktet.
            </InfoBox>

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Finn nullpunkt for f(x) = x² - 2"
                initialCode={`def f(x):
    return x**2 - 2

def derivert(f, x):
    h = 0.0001
    return (f(x + h) - f(x)) / h

# Start med gjett x = 1
x = 1.0

print("Iterasjon | x         | f(x)")
print("-" * 35)

for i in range(6):
    fx = f(x)
    print(f"{i:9} | {x:.7f} | {fx:.7f}")

    # Newtons formel
    x = x - fx / derivert(f, x)

print(f"\\nSvar: x ≈ {x:.7f}")
print(f"√2 = {2**0.5:.7f}")
print(f"Feil: {abs(x - 2**0.5):.10f}")`}
                height="400px"
                storageKey="9-3-newton-example"
              />
            </div>

            <p className="text-lg mt-6">
              Vi søker nullpunktet til f(x) = x² - 2, som er det samme som å løse x² = 2,
              altså finne √2. Newtons metode finner svaret med fantastisk presisjon på bare noen få iterasjoner!
            </p>
          </section>

          {/* Section 2: Implementere Newtons metode */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Implementere Newtons metode</h2>

            <p className="text-lg mb-6">
              La oss lage en generell funksjon som bruker Newtons metode til å finne nullpunkter:
            </p>

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Generell Newton-funksjon"
                initialCode={`def derivert(f, x):
    h = 0.0001
    return (f(x + h) - f(x)) / h

def newton(f, x_start, iterasjoner=10):
    x = x_start
    for i in range(iterasjoner):
        x = x - f(x) / derivert(f, x)
        if abs(f(x)) < 0.000001:
            print(f"Konvergerte etter {i+1} iterasjoner")
            return x
    return x

# Test 1: Finn √3
def f1(x):
    return x**2 - 3

rot = newton(f1, 1.0)
print(f"√3 ≈ {rot:.7f}")
print(f"Sjekk: {rot**2:.7f}\\n")

# Test 2: Finn √5
def f2(x):
    return x**2 - 5

rot = newton(f2, 2.0)
print(f"√5 ≈ {rot:.7f}")
print(f"Sjekk: {rot**2:.7f}")`}
                height="450px"
                storageKey="9-3-generell-newton"
              />
            </div>

            <InfoBox type="tip">
              Valg av startverdi er viktig! Hvis du starter for langt fra nullpunktet,
              kan metoden konvergere til et annet nullpunkt eller ikke konvergere i det hele tatt.
            </InfoBox>
          </section>

          {/* Exercise 9.7 */}
          <div className="mt-8">
            <Exercise
              title="Oppgave 9.7: Finn kubikkrot"
              description={`Bruk Newtons metode til å finne ∛10 (kubikkroten av 10).

a) Lag en funksjon \`g(x) = x³ - 10\`. Nullpunktet er ∛10.

b) Bruk newton-funksjonen med startverdi x = 2.

c) Sjekk svaret ved å regne ut x³.`}
              initialCode={`def derivert(f, x):
    h = 0.0001
    return (f(x + h) - f(x)) / h

def newton(f, x_start, iterasjoner=10):
    x = x_start
    for i in range(iterasjoner):
        x = x - f(x) / derivert(f, x)
    return x

def g(x):
    # Din kode her
    pass

# Finn kubikkroten av 10
rot = newton(g, 2.0)
print(f"∛10 ≈ {rot:.7f}")
print(f"Sjekk: {rot}³ = {rot**3:.7f}")`}
              difficulty="medium"
              testCases={[
                {
                  expectedOutput: "2.15",
                  description: "∛10 skal være omtrent 2.154",
                  matchMode: 'contains'
                },
                {
                  expectedOutput: "10.0",
                  description: "Sjekk skal vise at x³ ≈ 10",
                  matchMode: 'contains'
                }
              ]}
              hints={[
                "g(x) = x**3 - 10",
                "∛10 ≈ 2.154434690",
                "Bruk newton(g, 2.0) som startverdi"
              ]}
              storageKey="9-3-exercise-1"
              chapterId="9-3"
              exerciseId="9-3-exercise-1"
            />
          </div>

          {/* Exercise 9.8 */}
          <div className="mt-8">
            <Exercise
              title="Oppgave 9.8: Løs ligning"
              description={`Løs ligningen \`x³ - 2x - 5 = 0\` med Newtons metode.

a) Lag funksjonen h(x) = x³ - 2x - 5.

b) Prøv startverdi x = 2 og finn nullpunktet.

c) Sjekk ved å sette x-verdien inn i ligningen.`}
              initialCode={`def derivert(f, x):
    h = 0.0001
    return (f(x + h) - f(x)) / h

def newton(f, x_start, iterasjoner=10):
    x = x_start
    for i in range(iterasjoner):
        x_ny = x - f(x) / derivert(f, x)
        if abs(x_ny - x) < 0.000001:
            return x_ny
        x = x_ny
    return x

def h(x):
    # Din kode her
    pass

# Finn nullpunktet
x = newton(h, 2.0)
print(f"x ≈ {x:.7f}")
print(f"Sjekk: h({x:.7f}) = {h(x):.10f}")`}
              difficulty="medium"
              testCases={[
                {
                  expectedOutput: "2.09",
                  description: "Løsningen skal være omtrent x ≈ 2.094",
                  matchMode: 'contains'
                }
              ]}
              hints={[
                "h(x) = x**3 - 2*x - 5",
                "Løsningen er x ≈ 2.0945514815",
                "Sjekk: 2.0945³ - 2(2.0945) - 5 ≈ 0"
              ]}
              storageKey="9-3-exercise-2"
              chapterId="9-3"
              exerciseId="9-3-exercise-2"
            />
          </div>

          {/* Exercise 9.9 */}
          <div className="mt-8">
            <Exercise
              title="Oppgave 9.9: Finn skjæringspunkt"
              description={`Finn skjæringspunktet mellom funksjonene f(x) = x² og g(x) = 2x + 1.

Hint: Skjæringspunktet er der f(x) = g(x), altså der f(x) - g(x) = 0.

a) Lag en funksjon h(x) = x² - 2x - 1.

b) Bruk Newtons metode med startverdi x = 3 for å finne det positive skjæringspunktet.

c) Hva er y-verdien i dette punktet?`}
              initialCode={`def derivert(f, x):
    h = 0.0001
    return (f(x + h) - f(x)) / h

def newton(f, x_start, iterasjoner=15):
    x = x_start
    for i in range(iterasjoner):
        x = x - f(x) / derivert(f, x)
    return x

def h(x):
    # Differansen mellom funksjonene
    return x**2 - 2*x - 1

# Finn skjæringspunktet
x = newton(h, 3.0)
y = x**2  # eller 2*x + 1

print(f"Skjæringspunkt: ({x:.4f}, {y:.4f})")

# Sjekk at begge funksjoner gir samme y
print(f"f({x:.4f}) = {x**2:.4f}")
print(f"g({x:.4f}) = {2*x + 1:.4f}")`}
              difficulty="vanskelig"
              testCases={[
                {
                  expectedOutput: "2.73",
                  description: "x-verdien skal være omtrent 2.732",
                  matchMode: 'contains'
                },
                {
                  expectedOutput: "7.4",
                  description: "y-verdien skal være omtrent 7.46",
                  matchMode: 'contains'
                }
              ]}
              hints={[
                "h(x) = x**2 - 2*x - 1",
                "Løsningen er x ≈ 2.732 (eller x ≈ -0.732 for det negative skjæringspunktet)",
                "y = x² = 2.732² ≈ 7.46"
              ]}
              storageKey="9-3-exercise-3"
              chapterId="9-3"
              exerciseId="9-3-exercise-3"
            />
          </div>

          {/* Summary */}
          <section className="mb-12 mt-12">
            <Card className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Oppsummering</h2>
                <div className="space-y-3">
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>Newtons metode finner nullpunkter: x<sub>ny</sub> = x - f(x) / f&apos;(x)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>Metoden konvergerer raskt når startverdien er god</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>Kan brukes til å finne røtter (√x, ∛x) og løse ligninger</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>Itererer til løsningen er god nok (f(x) ≈ 0)</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <ChapterNavigation currentChapterId="9-3" />
        </div>
      </div>
    </BookLayout>
  );
}
