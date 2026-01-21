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

export default function Chapter91Page() {
  useKeyboardNavigation('9-1');

  return (
    <BookLayout currentChapterId="9-1">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="9-1" />
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">Lærebok</Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 9.1</span>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-600/10 rounded-lg">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 9.1</p>
                  <Badge variant="outline" className="text-purple-600 border-purple-600">R1</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">Numerisk derivasjon</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Lær å beregne den deriverte av en funksjon numerisk ved hjelp av Python.
            </p>
          </div>

          {/* Section 1: Hva er den deriverte? */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Hva er den deriverte?</h2>

            <p className="text-lg mb-6">
              Den deriverte av en funksjon forteller oss hvor raskt funksjonen endrer seg.
              I matematikk skriver vi f&apos;(x) for den deriverte av f(x).
            </p>

            <p className="text-lg mb-6">
              Den deriverte kan defineres som grenseverdien:
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="text-center text-xl mb-4">
                  <code>f&apos;(x) = lim<sub>h→0</sub> (f(x+h) - f(x)) / h</code>
                </div>
                <p className="text-muted-foreground text-center">
                  Når h blir veldig liten, får vi den eksakte deriverte
                </p>
              </CardContent>
            </Card>

            <InfoBox type="info" title="Numerisk tilnærming">
              I Python kan vi ikke regne ut grenseverdier direkte, men vi kan bruke en veldig
              liten verdi for h (for eksempel 0.0001) for å få en god tilnærming til den deriverte.
            </InfoBox>

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Derivert av f(x) = x²"
                initialCode={`def f(x):
    return x**2

def derivert(f, x):
    h = 0.0001
    return (f(x + h) - f(x)) / h

# Test i punktet x = 3
x = 3
print(f"f'({x}) ≈", derivert(f, x))
print(f"Eksakt verdi: {2*x}")
print(f"Feil:", abs(derivert(f, x) - 2*x))`}
                height="300px"
                storageKey="9-1-derivert-example"
              />
            </div>

            <p className="text-lg mt-6">
              For f(x) = x² vet vi at den eksakte deriverte er f&apos;(x) = 2x.
              Ved x = 3 får vi f&apos;(3) = 6. Vår numeriske metode gir nesten samme resultat!
            </p>
          </section>

          {/* Section 2: Lage en derivert-funksjon */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Lage en derivert-funksjon</h2>

            <p className="text-lg mb-6">
              Vi kan lage en generell funksjon som tar inn en funksjon f og et punkt x,
              og returnerer den deriverte i det punktet.
            </p>

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Teste på flere funksjoner"
                initialCode={`def derivert(f, x):
    h = 0.0001
    return (f(x + h) - f(x)) / h

# Test på f(x) = x³
def f1(x):
    return x**3

# Test på f(x) = 2x² + 3x - 1
def f2(x):
    return 2*x**2 + 3*x - 1

x = 2
print("f1'(2) ≈", derivert(f1, x))
print("Eksakt: 3*2² =", 3*2**2)
print()
print("f2'(2) ≈", derivert(f2, x))
print("Eksakt: 4*2 + 3 =", 4*2 + 3)`}
                height="350px"
                storageKey="9-1-generell-derivert"
              />
            </div>

            <InfoBox type="tip">
              Velger du h for stor (f.eks. 0.1), blir tilnærmingen dårlig.
              Velger du h for liten (f.eks. 10⁻¹⁵), kan du få avrundingsfeil.
              En god verdi er ofte h ≈ 0.0001.
            </InfoBox>
          </section>

          {/* Exercise 9.1 */}
          <div className="mt-8">
            <Exercise
              title="Oppgave 9.1: Beregn deriverte"
              description={`a) Lag en funksjon \`g(x) = x² + 2x + 1\` og en \`derivert(f, x)\` funksjon som før.

b) Bruk funksjonen til å beregne g'(1), g'(2), og g'(3).

c) Den eksakte deriverte er g'(x) = 2x + 2. Sammenlign dine numeriske verdier med de eksakte.`}
              initialCode={`def g(x):
    # Din kode her
    pass

def derivert(f, x):
    # Din kode her
    pass

# Test verdiene
print("g'(1) ≈", derivert(g, 1))
print("g'(2) ≈", derivert(g, 2))
print("g'(3) ≈", derivert(g, 3))`}
              difficulty="medium"
              testCases={[
                {
                  expectedOutput: "4",
                  description: "g'(1) skal være omtrent 4",
                  matchMode: 'contains'
                },
                {
                  expectedOutput: "6",
                  description: "g'(2) skal være omtrent 6",
                  matchMode: 'contains'
                },
                {
                  expectedOutput: "8",
                  description: "g'(3) skal være omtrent 8",
                  matchMode: 'contains'
                }
              ]}
              hints={[
                "g(x) = x**2 + 2*x + 1",
                "derivert skal bruke h = 0.0001",
                "Formelen er (f(x+h) - f(x)) / h",
                "Den eksakte deriverte er g'(x) = 2x + 2"
              ]}
              storageKey="9-1-exercise-1"
              chapterId="9-1"
              exerciseId="9-1-exercise-1"
            />
          </div>

          {/* Exercise 9.2 */}
          <div className="mt-8">
            <Exercise
              title="Oppgave 9.2: Derivert av sin(x)"
              description={`Python har innebygde matematiske funksjoner i \`math\`-modulen.

a) Importer \`math\` og lag en funksjon \`h(x) = math.sin(x)\`.

b) Beregn den deriverte av sin(x) i punktet x = 0 (radianer).

c) Den eksakte deriverte av sin(x) er cos(x). Hva gir cos(0)? Stemmer det med din tilnærming?`}
              initialCode={`import math

def h(x):
    # Din kode her
    pass

def derivert(f, x):
    h = 0.0001
    return (f(x + h) - f(x)) / h

# Beregn derivert
x = 0
print("h'(0) ≈", derivert(h, x))
print("cos(0) =", math.cos(x))`}
              difficulty="medium"
              testCases={[
                {
                  expectedOutput: "1.0",
                  description: "Deriverten av sin(0) skal være omtrent 1.0",
                  matchMode: 'contains'
                }
              ]}
              hints={[
                "h(x) skal returnere math.sin(x)",
                "cos(0) = 1",
                "Din numeriske derivert skal gi noe veldig nær 1.0"
              ]}
              storageKey="9-1-exercise-2"
              chapterId="9-1"
              exerciseId="9-1-exercise-2"
            />
          </div>

          {/* Exercise 9.3 */}
          <div className="mt-8">
            <Exercise
              title="Oppgave 9.3: Visualiser funksjonen og dens deriverte"
              description={`a) Lag en funksjon \`f(x) = 0.5*x² - 2*x + 1\`.

b) Lag en liste med x-verdier fra -2 til 6 (bruk en løkke eller range).

c) Beregn både f(x) og f'(x) for hver x-verdi og skriv dem ut.`}
              initialCode={`def f(x):
    return 0.5*x**2 - 2*x + 1

def derivert(f, x):
    h = 0.0001
    return (f(x + h) - f(x)) / h

# Lag x-verdier fra -2 til 6
for x in range(-2, 7):
    # Beregn f(x) og f'(x)
    y = f(x)
    dy = derivert(f, x)
    print(f"x={x}: f(x)={y:.2f}, f'(x)={dy:.2f}")`}
              difficulty="medium"
              testCases={[
                {
                  expectedOutput: "x=0",
                  description: "Skal skrive ut verdier for x=0",
                  matchMode: 'contains'
                },
                {
                  expectedOutput: "f'(x)",
                  description: "Skal skrive ut deriverte verdier",
                  matchMode: 'contains'
                }
              ]}
              hints={[
                "Bruk range(-2, 7) for å få x-verdier fra -2 til 6",
                "Kall f(x) og derivert(f, x) for hver x",
                "Bruk f-string med :.2f for to desimaler"
              ]}
              storageKey="9-1-exercise-3"
              chapterId="9-1"
              exerciseId="9-1-exercise-3"
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
                    <span>Den deriverte f&apos;(x) forteller hvor raskt funksjonen endrer seg</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>Numerisk derivasjon: f&apos;(x) ≈ (f(x+h) - f(x)) / h hvor h er liten</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>En god verdi for h er ofte 0.0001</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>Vi kan lage en generell derivert-funksjon som virker for alle funksjoner</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <ChapterNavigation currentChapterId="9-1" />
        </div>
      </div>
    </BookLayout>
  );
}
