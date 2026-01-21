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

export default function Chapter92Page() {
  useKeyboardNavigation('9-2');

  return (
    <BookLayout currentChapterId="9-2">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="9-2" />
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">Lærebok</Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 9.2</span>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-600/10 rounded-lg">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 9.2</p>
                  <Badge variant="outline" className="text-purple-600 border-purple-600">R1</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">Ekstremalpunkter</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Finn topp- og bunnpunkter på funksjoner ved å bruke den deriverte.
            </p>
          </div>

          {/* Section 1: Hva er ekstremalpunkter? */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Hva er ekstremalpunkter?</h2>

            <p className="text-lg mb-6">
              Et ekstremalpunkt er et punkt hvor funksjonen har et lokalt maksimum eller minimum.
              Dette er punkter hvor funksjonen &quot;snur&quot; - den går fra å stige til å synke, eller omvendt.
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">Viktig regel:</h3>
                <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg">
                  <p className="text-lg">
                    Ved et ekstremalpunkt er den deriverte lik null: <strong>f&apos;(x) = 0</strong>
                  </p>
                </div>
                <p className="text-muted-foreground mt-3">
                  Dette gir oss en metode for å finne ekstremalpunkter: Løs ligningen f&apos;(x) = 0
                </p>
              </CardContent>
            </Card>

            <InfoBox type="info" title="Hvorfor er f'(x) = 0?">
              Den deriverte forteller hvor raskt funksjonen endrer seg. Ved et toppunkt eller
              bunnpunkt er funksjonen &quot;flat&quot; i et kort øyeblikk - den endrer seg ikke.
              Derfor er f&apos;(x) = 0 akkurat i det punktet.
            </InfoBox>

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Finn ekstremalpunkt for f(x) = x² - 4x + 3"
                initialCode={`def f(x):
    return x**2 - 4*x + 3

def derivert(f, x):
    h = 0.0001
    return (f(x + h) - f(x)) / h

# Sjekk deriverten rundt x = 2
for x in [1.5, 1.9, 2.0, 2.1, 2.5]:
    print(f"f'({x}) = {derivert(f, x):.4f}")

print(f"\\nf(2) = {f(2)}")
print("x = 2 er et bunnpunkt!")`}
                height="350px"
                storageKey="9-2-ekstremalpunkt-example"
              />
            </div>

            <p className="text-lg mt-6">
              Vi ser at f&apos;(x) går fra negativ til positiv når vi passerer x = 2.
              Dette betyr at x = 2 er et bunnpunkt (minimum).
            </p>
          </section>

          {/* Section 2: Finne ekstremalpunkter systematisk */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Finne ekstremalpunkter systematisk</h2>

            <p className="text-lg mb-6">
              For å finne ekstremalpunkter numerisk kan vi:
            </p>

            <ol className="list-decimal list-inside space-y-2 text-lg mb-6 ml-4">
              <li>Beregne f&apos;(x) for mange x-verdier</li>
              <li>Lete etter steder hvor f&apos;(x) skifter fortegn (fra + til - eller omvendt)</li>
              <li>Undersøke om det er et maksimum eller minimum</li>
            </ol>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Fortegnsskifte:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Maksimum:</strong> f&apos;(x) går fra positiv til negativ (funksjonen stiger først, så synker)</li>
                  <li><strong className="text-foreground">Minimum:</strong> f&apos;(x) går fra negativ til positiv (funksjonen synker først, så stiger)</li>
                </ul>
              </CardContent>
            </Card>

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Finn alle ekstremalpunkter"
                initialCode={`def f(x):
    return -x**3 + 3*x**2 + 9*x - 2

def derivert(f, x):
    h = 0.0001
    return (f(x + h) - f(x)) / h

# Søk i intervallet [-2, 5]
print("x    f'(x)    fortegn")
print("-" * 25)

forrige_fortegn = None
for i in range(-20, 51, 2):
    x = i / 10
    fprim = derivert(f, x)
    fortegn = "+" if fprim > 0 else "-"

    # Sjekk om fortegn skifter
    if forrige_fortegn and forrige_fortegn != fortegn:
        print(f"→ Ekstremalpunkt ved x ≈ {x:.1f}")

    print(f"{x:4.1f} {fprim:7.2f}    {fortegn}")
    forrige_fortegn = fortegn`}
                height="400px"
                storageKey="9-2-systematisk-sok"
              />
            </div>
          </section>

          {/* Exercise 9.4 */}
          <div className="mt-8">
            <Exercise
              title="Oppgave 9.4: Finn ekstremalpunkter"
              description={`For funksjonen \`g(x) = x³ - 6x² + 9x + 1\`:

a) Lag funksjonen g(x) og en derivert-funksjon.

b) Søk gjennom x-verdier fra 0 til 4 og finn hvor f'(x) ≈ 0.

c) Hvilken x-verdi gir ekstremalpunkt? Hva er verdien g(x) i dette punktet?`}
              initialCode={`def g(x):
    # Din kode her
    pass

def derivert(f, x):
    h = 0.0001
    return (f(x + h) - f(x)) / h

# Søk etter ekstremalpunkter
for i in range(0, 41):
    x = i / 10
    fprim = derivert(g, x)
    print(f"x={x:.1f}: g'(x)={fprim:.4f}")`}
              difficulty="medium"
              testCases={[
                {
                  expectedOutput: "0.0000",
                  description: "Skal finne punkt hvor deriverten er nær 0",
                  matchMode: 'contains'
                }
              ]}
              hints={[
                "g(x) = x**3 - 6*x**2 + 9*x + 1",
                "Ekstremalpunktet er ved x = 1 og x = 3",
                "Sjekk hvor g'(x) er nærmest 0"
              ]}
              storageKey="9-2-exercise-1"
              chapterId="9-2"
              exerciseId="9-2-exercise-1"
            />
          </div>

          {/* Exercise 9.5 */}
          <div className="mt-8">
            <Exercise
              title="Oppgave 9.5: Maksimum eller minimum?"
              description={`For funksjonen \`h(x) = -2x² + 8x - 3\`:

a) Finn ekstremalpunktet ved å søke gjennom x-verdier fra 0 til 5.

b) Er dette et maksimum eller minimum? (Sjekk fortegnskiftet til h'(x))

c) Hva er den høyeste/laveste verdien funksjonen når?`}
              initialCode={`def h(x):
    return -2*x**2 + 8*x - 3

def derivert(f, x):
    h = 0.0001
    return (f(x + h) - f(x)) / h

# Søk etter ekstremalpunkt
forrige_fortegn = None
for i in range(0, 51):
    x = i / 10
    fprim = derivert(h, x)
    fortegn = "+" if fprim > 0 else "-"

    if abs(fprim) < 0.01:
        print(f"Ekstremalpunkt ved x = {x}")
        print(f"h({x}) = {h(x)}")

    if forrige_fortegn and forrige_fortegn != fortegn:
        if forrige_fortegn == "+" and fortegn == "-":
            print(f"Maksimum ved x ≈ {x}")
        else:
            print(f"Minimum ved x ≈ {x}")

    forrige_fortegn = fortegn`}
              difficulty="medium"
              testCases={[
                {
                  expectedOutput: "2",
                  description: "Ekstremalpunktet er ved x = 2",
                  matchMode: 'contains'
                },
                {
                  expectedOutput: "Maksimum",
                  description: "Det skal være et maksimum",
                  matchMode: 'contains'
                }
              ]}
              hints={[
                "Ekstremalpunktet er ved x = 2",
                "Siden a = -2 er negativ, åpner parabelen nedover (maksimum)",
                "h(2) = -2(4) + 8(2) - 3 = 5"
              ]}
              storageKey="9-2-exercise-2"
              chapterId="9-2"
              exerciseId="9-2-exercise-2"
            />
          </div>

          {/* Exercise 9.6 */}
          <div className="mt-8">
            <Exercise
              title="Oppgave 9.6: Flere ekstremalpunkter"
              description={`For funksjonen \`p(x) = x⁴ - 4x³ + 4x² + 1\`:

a) Finn alle ekstremalpunkter i intervallet [-1, 4].

b) Hvor mange ekstremalpunkter finner du?

c) Hvilke av dem er maksimum og hvilke er minimum?`}
              initialCode={`def p(x):
    return x**4 - 4*x**3 + 4*x**2 + 1

def derivert(f, x):
    h = 0.0001
    return (f(x + h) - f(x)) / h

# Søk etter ekstremalpunkter
forrige_fortegn = None
ekstremalpunkter = []

for i in range(-10, 41):
    x = i / 10
    fprim = derivert(p, x)
    fortegn = "+" if fprim > 0 else "-"

    if forrige_fortegn and forrige_fortegn != fortegn:
        type_ekst = "Maks" if forrige_fortegn == "+" else "Min"
        print(f"{type_ekst} ved x ≈ {x:.1f}, p(x) = {p(x):.2f}")
        ekstremalpunkter.append(x)

    forrige_fortegn = fortegn

print(f"\\nTotalt {len(ekstremalpunkter)} ekstremalpunkter")`}
              difficulty="vanskelig"
              testCases={[
                {
                  expectedOutput: "ekstremalpunkter",
                  description: "Skal finne flere ekstremalpunkter",
                  matchMode: 'contains'
                }
              ]}
              hints={[
                "Denne funksjonen har 3 ekstremalpunkter",
                "De er ved x = 0, x = 1, og x = 2",
                "x = 0 og x = 2 er minimum, x = 1 er maksimum"
              ]}
              storageKey="9-2-exercise-3"
              chapterId="9-2"
              exerciseId="9-2-exercise-3"
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
                    <span>Ved ekstremalpunkter er f&apos;(x) = 0</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>Maksimum: f&apos;(x) går fra + til - (funksjonen stiger, så synker)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>Minimum: f&apos;(x) går fra - til + (funksjonen synker, så stiger)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>Vi finner ekstremalpunkter ved å søke etter fortegnsskifte i f&apos;(x)</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <ChapterNavigation currentChapterId="9-2" />
        </div>
      </div>
    </BookLayout>
  );
}
