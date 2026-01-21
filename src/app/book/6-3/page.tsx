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

export default function Chapter63Page() {
  useKeyboardNavigation('6-3');
  return (
    <BookLayout currentChapterId="6-3">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          {/* Progress Bar */}
          <div className="mb-4 sm:mb-6 space-y-3 sm:space-y-4">
            <ChapterProgressBar currentChapterId="6-3" />
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
            <Link href="/book" className="hover:text-foreground">
              Lærebok
            </Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 6.3</span>
          </div>

          {/* Chapter Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-start sm:items-center gap-3 mb-3 sm:mb-4">
              <div className="p-2 bg-blue-600/10 rounded-lg shrink-0">
                <FunctionSquare className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground">Kapittel 6.3</p>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-600/10 text-blue-600">
                    1T
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Halveringsmetoden
                </h1>
              </div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              I dette kapitlet skal du lære en numerisk metode for å finne nullpunkter
              når abc-formelen ikke fungerer eller er vanskelig å bruke.
            </p>
          </div>

          {/* Section 1: Hva er halveringsmetoden? */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Hva er halveringsmetoden?</h2>

            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Halveringsmetoden (biseksjonsmetoden) er en numerisk metode for å finne nullpunkter.
              Metoden baserer seg på å dele intervallet i to og finne ut hvilken halvdel
              nullpunktet ligger i.
            </p>

            <Card className="mb-4 sm:mb-6">
              <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
                <h3 className="font-semibold text-base sm:text-lg mb-3">Fremgangsmåte:</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Finn et intervall [a, b] der funksjonen skifter fortegn</li>
                  <li>Finn midtpunktet m = (a + b) / 2</li>
                  <li>Sjekk hvilken halvdel nullpunktet ligger i</li>
                  <li>Gjenta med det nye, mindre intervallet</li>
                  <li>Stopp når intervallet er lite nok</li>
                </ol>
              </CardContent>
            </Card>

            <InfoBox type="info" title="Fortegnskifte">
              Hvis f(a) og f(b) har forskjellig fortegn (en positiv og en negativ),
              må funksjonen krysse x-aksen et sted mellom a og b. Det betyr at det
              finnes et nullpunkt i intervallet [a, b].
            </InfoBox>
          </section>

          {/* Section 2: Enkelt eksempel */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Enkelt eksempel: Finne √2</h2>

            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              La oss bruke halveringsmetoden til å finne √2, ved å løse likningen x² - 2 = 0.
              Vi definerer f(x) = x² - 2 og leter etter nullpunktet.
            </p>

            <PythonRunner
              title="Eksempel: Finne √2 med halveringsmetoden"
              initialCode={`# Definer funksjonen f(x) = x² - 2
def f(x):
    return x**2 - 2

# Startintervall [a, b]
a = 1
b = 2

# Toleranse (nøyaktighet)
toleranse = 0.001

print(f"Starter med intervall [{a}, {b}]")
print(f"f({a}) = {f(a)}")
print(f"f({b}) = {f(b)}")
print()

# Halveringsmetoden
while (b - a) > toleranse:
    m = (a + b) / 2  # Midtpunkt

    if f(m) * f(a) < 0:
        b = m  # Nullpunkt i [a, m]
    else:
        a = m  # Nullpunkt i [m, b]

    print(f"Nytt intervall: [{a:.4f}, {b:.4f}], m = {m:.4f}")

# Tilnærming til √2
resultat = (a + b) / 2
print(f"\\nTilnærming til √2: {resultat:.6f}")`}
              height="350px"
              storageKey="6-3-bisection-sqrt2"
            />

            <InfoBox type="note" title="Hvordan fungerer sjekken?">
              <code>f(m) * f(a) &lt; 0</code> betyr at f(m) og f(a) har forskjellig fortegn.
              Hvis produktet av to tall er negativt, må ett være positivt og ett negativt.
              Da vet vi at nullpunktet ligger mellom a og m.
            </InfoBox>
          </section>

          {/* Section 3: Generell implementasjon */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Generell implementasjon</h2>

            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Vi kan lage en generell funksjon for halveringsmetoden som fungerer for
              alle typer funksjoner:
            </p>

            <PythonRunner
              title="Eksempel: Generell halveringsmetode"
              initialCode={`def halvering(f, a, b, toleranse=0.0001):
    """
    Finner nullpunkt til f i intervallet [a, b]
    """
    if f(a) * f(b) > 0:
        print("Ingen fortegnskifte i intervallet!")
        return None

    while (b - a) > toleranse:
        m = (a + b) / 2

        if f(m) * f(a) < 0:
            b = m
        else:
            a = m

    return (a + b) / 2

# Test med forskjellige funksjoner
def f1(x):
    return x**2 - 2

def f2(x):
    return x**3 - x - 2

nullpunkt1 = halvering(f1, 1, 2)
print(f"Nullpunkt til x² - 2: {nullpunkt1:.6f}")
print(f"(√2 = {nullpunkt1:.6f})")

nullpunkt2 = halvering(f2, 1, 2)
print(f"\\nNullpunkt til x³ - x - 2: {nullpunkt2:.6f}")`}
              height="350px"
              storageKey="6-3-general-bisection"
            />

            <InfoBox type="tip">
              Halveringsmetoden er spesielt nyttig for funksjoner der vi ikke har
              en eksakt formel for å finne nullpunkter, som for eksempel x³ - x - 2 = 0.
            </InfoBox>
          </section>

          {/* Exercises */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Oppgaver</h2>

            <div className="space-y-8">
              {/* Exercise 1 */}
              <Exercise
                title="Oppgave 6.3a: Finne √3"
                description="Bruk halveringsmetoden til å finne √3 ved å løse x² - 3 = 0. Start med intervallet [1, 2] og bruk toleranse 0.001."
                initialCode={`# Definer funksjonen f(x) = x² - 3


# Startintervall
a = 1
b = 2
toleranse = 0.001

# Halveringsmetoden


# Skriv ut resultatet

`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "1.73",
                    description: "Resultatet skal være ca. 1.732",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Definer funksjonen: def f(x): return x**2 - 3",
                  "Bruk en while-løkke: while (b - a) > toleranse:",
                  "Beregn midtpunkt: m = (a + b) / 2",
                  "Sjekk fortegn: if f(m) * f(a) < 0: b = m else: a = m"
                ]}
                storageKey="6-3-exercise-1"
                chapterId="6-3"
                exerciseId="6-3-exercise-1"
              />

              {/* Exercise 2 */}
              <Exercise
                title="Oppgave 6.3b: Tredjegradsfunksjon"
                description="Finn nullpunktet til funksjonen g(x) = x³ - 5 i intervallet [1, 2] med toleranse 0.0001. Skriv ut antall iterasjoner (gjentakelser)."
                initialCode={`def g(x):
    return x**3 - 5

# Startintervall
a = 1
b = 2
toleranse = 0.0001
iterasjoner = 0

# Halveringsmetoden


# Skriv ut resultat og antall iterasjoner


`}
                difficulty="medium"
                testCases={[
                  {
                    expectedOutput: "1.70",
                    description: "Nullpunktet skal være ca. 1.710",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Øk iterasjoner med 1 for hver runde i løkken",
                  "Bruk samme metode som i eksempelet",
                  "Skriv ut både nullpunktet og antall iterasjoner"
                ]}
                storageKey="6-3-exercise-2"
                chapterId="6-3"
                exerciseId="6-3-exercise-2"
              />

              {/* Exercise 3 */}
              <Exercise
                title="Oppgave 6.3c: Funksjonsanalyse"
                description="Funksjonen h(x) = x³ - 2x - 5 har et nullpunkt i intervallet [2, 3]. Bruk halveringsmetoden til å finne det med toleranse 0.00001. Verifiser ved å beregne h(nullpunkt)."
                initialCode={`def h(x):
    return x**3 - 2*x - 5

def halvering(f, a, b, toleranse):
    # Implementer halveringsmetoden her


# Finn nullpunktet
nullpunkt = halvering(h, 2, 3, 0.00001)

# Verifiser resultatet


`}
                difficulty="medium"
                testCases={[
                  {
                    expectedOutput: "2.094",
                    description: "Nullpunktet skal være ca. 2.0946",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Kopier halveringsfunksjonen fra eksempelet",
                  "Sjekk først om det er fortegnskifte: if f(a) * f(b) > 0",
                  "Verifiser ved å skrive ut h(nullpunkt) - dette skal være nær 0",
                  "Bruk return (a + b) / 2 til slutt"
                ]}
                storageKey="6-3-exercise-3"
                chapterId="6-3"
                exerciseId="6-3-exercise-3"
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
                    <span>Halveringsmetoden finner nullpunkter numerisk ved å dele intervaller i to</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Metoden krever et startintervall der funksjonen skifter fortegn</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Vi sjekker fortegn med <code>f(m) * f(a) &lt; 0</code></span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Toleransen bestemmer hvor nøyaktig svaret skal være</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Metoden fungerer for alle kontinuerlige funksjoner</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <ChapterNavigation currentChapterId="6-3" />
        </div>
      </div>
    </BookLayout>
  );
}
