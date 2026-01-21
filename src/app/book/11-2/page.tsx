'use client';

import { BookLayout } from "@/components/book/book-layout";
import { PythonRunner } from "@/components/book/python-runner";
import { Exercise } from "@/components/book/exercise";
import { InfoBox } from "@/components/book/info-box";
import { ChapterNavigation } from "@/components/book/chapter-navigation";
import { ChapterProgressBar } from "@/components/book/chapter-progress-bar";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Sigma } from "lucide-react";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";

export default function Chapter112Page() {
  useKeyboardNavigation('11-2');
  return (
    <BookLayout currentChapterId="11-2">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          {/* Progress Bar */}
          <div className="mb-4 sm:mb-6 space-y-3 sm:space-y-4">
            <ChapterProgressBar currentChapterId="11-2" />
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
            <Link href="/book" className="hover:text-foreground">
              Lærebok
            </Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 11.2</span>
          </div>

          {/* Chapter Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-start sm:items-center gap-3 mb-3 sm:mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg shrink-0">
                <Sigma className="h-5 w-5 sm:h-6 sm:w-6 text-purple-800 dark:text-purple-300" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <span className="inline-block px-2 py-1 text-xs font-semibold rounded-md bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200">
                    R2 - Integrasjon
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-muted-foreground">Kapittel 11.2</p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Trapesmetoden og Simpson
                </h1>
              </div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              I dette kapitlet skal du lære om mer nøyaktige metoder for numerisk integrasjon:
              trapesmetoden og Simpsons regel.
            </p>
          </div>

          {/* Section 1: Trapesmetoden */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Trapesmetoden</h2>

            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              I forrige kapittel brukte vi rektangler for å tilnærme arealet. Trapesmetoden gir
              <strong> bedre nøyaktighet</strong> ved å bruke <strong>trapeser</strong> i stedet for rektangler.
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">Hvorfor er trapeser bedre?</h3>
                <p className="mb-4">
                  Et trapes følger kurven bedre enn et rektangel fordi toppen er skrå i stedet for flat.
                </p>
                <div className="bg-muted p-4 rounded-lg space-y-2">
                  <p className="font-mono text-sm">
                    Areal av ett trapes = (h₁ + h₂) / 2 · Δx
                  </p>
                  <p className="text-muted-foreground text-sm">
                    der h₁ = f(x<sub>i</sub>) og h₂ = f(x<sub>i+1</sub>) er høydene ved venstre og høyre kant
                  </p>
                </div>
              </CardContent>
            </Card>

            <InfoBox type="info" title="Trapesformel">
              For n intervaller blir den totale formelen:
              <div className="mt-2 p-3 bg-white dark:bg-gray-800 rounded font-mono text-sm">
                ∫ₐᵇ f(x)dx ≈ Δx/2 · [f(x₀) + 2f(x₁) + 2f(x₂) + ... + 2f(xₙ₋₁) + f(xₙ)]
              </div>
              <p className="mt-2 text-sm">
                Merk at alle indre punkter teller dobbelt, mens endepunktene teller enkelt.
              </p>
            </InfoBox>

            <div className="mt-6">
              <PythonRunner
                title="Trapesmetoden implementert"
                initialCode={`def trapes_metoden(f, a, b, n):
    """Beregn integral med trapesmetoden"""
    dx = (b - a) / n

    # Første og siste punkt teller enkelt
    areal = f(a) + f(b)

    # Indre punkter teller dobbelt
    for i in range(1, n):
        x = a + i * dx
        areal += 2 * f(x)

    # Multipliser med dx/2
    areal *= dx / 2

    return areal

# Test med f(x) = x²
def f(x):
    return x**2

resultat = trapes_metoden(f, 0, 1, 100)
print(f"Trapesmetoden: {resultat:.6f}")
print(f"Eksakt verdi:  {1/3:.6f}")
print(f"Feil: {abs(resultat - 1/3):.6f}")`}
                height="450px"
                storageKey="11-2-trapezoid"
              />
            </div>
          </section>

          {/* Section 2: Sammenlign metodene */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Sammenligning av metodene</h2>

            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              La oss sammenligne Riemann-sum (midtpunkt) og trapesmetoden for samme funksjon:
            </p>

            <div className="mt-6">
              <PythonRunner
                title="Riemann vs Trapes"
                initialCode={`def riemann_midtpunkt(f, a, b, n):
    dx = (b - a) / n
    return sum(f(a + (i + 0.5) * dx) * dx for i in range(n))

def trapes_metoden(f, a, b, n):
    dx = (b - a) / n
    areal = f(a) + f(b)
    for i in range(1, n):
        areal += 2 * f(a + i * dx)
    return areal * dx / 2

# Test begge metoder
def f(x):
    return x**2

eksakt = 1/3

print("n     Riemann       Trapes        Riemann feil  Trapes feil")
print("-" * 60)
for n in [10, 50, 100, 500]:
    r = riemann_midtpunkt(f, 0, 1, n)
    t = trapes_metoden(f, 0, 1, n)
    print(f"{n:4d}  {r:.8f}  {t:.8f}  {abs(r-eksakt):.2e}  {abs(t-eksakt):.2e}")`}
                height="450px"
                storageKey="11-2-comparison"
              />
            </div>

            <InfoBox type="note" title="Observasjon">
              For noen funksjoner er midtpunktsregelen bedre, for andre er trapesmetoden bedre.
              Generelt gir begge metodene god nøyaktighet med nok intervaller.
            </InfoBox>
          </section>

          {/* Section 3: Simpsons regel */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Simpsons regel (kort intro)</h2>

            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Simpsons regel er en enda mer nøyaktig metode som bruker <strong>paraboler</strong> (andregradspolynom)
              i stedet for rette linjer for å tilnærme kurven.
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">Simpsons formel</h3>
                <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                  ∫ₐᵇ f(x)dx ≈ Δx/3 · [f(x₀) + 4f(x₁) + 2f(x₂) + 4f(x₃) + ... + f(xₙ)]
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Merknad: Simpsons regel krever at n er partall (jevnt antall intervaller).
                </p>
              </CardContent>
            </Card>

            <div className="mt-6">
              <PythonRunner
                title="Simpsons regel"
                initialCode={`def simpsons_regel(f, a, b, n):
    """Simpsons regel - krever n partall"""
    if n % 2 != 0:
        print("Advarsel: n må være partall!")
        n += 1

    dx = (b - a) / n
    areal = f(a) + f(b)

    # Odde indekser får vekt 4
    for i in range(1, n, 2):
        areal += 4 * f(a + i * dx)

    # Partall indekser får vekt 2
    for i in range(2, n, 2):
        areal += 2 * f(a + i * dx)

    return areal * dx / 3

# Test
def f(x):
    return x**2

resultat = simpsons_regel(f, 0, 1, 100)
print(f"Simpsons regel: {resultat:.10f}")
print(f"Eksakt verdi:   {1/3:.10f}")
print(f"Feil: {abs(resultat - 1/3):.2e}")`}
                height="450px"
                storageKey="11-2-simpson"
              />
            </div>

            <InfoBox type="tip">
              Simpsons regel gir fantastisk nøyaktighet! Ofte kan vi bruke færre intervaller
              og likevel få bedre presisjon enn med trapesmetoden.
            </InfoBox>
          </section>

          {/* Section 4: Beregn π */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Eksempel: Beregn π med integrasjon</h2>

            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Vi vet at arealet av en sirkel med radius 1 er π. Ved å integrere funksjonen
              f(x) = √(1 - x²) fra -1 til 1 får vi arealet av halvsirkelen, som er π/2.
              Derfor: 2 · ∫₋₁¹ √(1 - x²) dx = π
            </p>

            <div className="mt-6">
              <PythonRunner
                title="Beregn π med alle tre metodene"
                initialCode={`from math import sqrt, pi

def f(x):
    """Halvsirkel: y = sqrt(1 - x²)"""
    return sqrt(1 - x**2)

def trapes_metoden(f, a, b, n):
    dx = (b - a) / n
    areal = f(a) + f(b)
    for i in range(1, n):
        areal += 2 * f(a + i * dx)
    return areal * dx / 2

def simpsons_regel(f, a, b, n):
    if n % 2 != 0:
        n += 1
    dx = (b - a) / n
    areal = f(a) + f(b)
    for i in range(1, n, 2):
        areal += 4 * f(a + i * dx)
    for i in range(2, n, 2):
        areal += 2 * f(a + i * dx)
    return areal * dx / 3

n = 1000

# Beregn halvsirkel, gang med 2 for å få π
trapes = 2 * trapes_metoden(f, -1, 1, n)
simpson = 2 * simpsons_regel(f, -1, 1, n)

print(f"Trapesmetoden:  π ≈ {trapes:.8f}")
print(f"Simpsons regel: π ≈ {simpson:.8f}")
print(f"Faktisk π:          {pi:.8f}")
print(f"\\nFeil (trapes):  {abs(trapes - pi):.2e}")
print(f"Feil (Simpson): {abs(simpson - pi):.2e}")`}
                height="500px"
                storageKey="11-2-calculate-pi"
              />
            </div>

            <InfoBox type="success">
              Se hvordan Simpsons regel gir mye bedre nøyaktighet! Dette er et eksempel på
              hvordan numeriske metoder kan brukes til å beregne viktige matematiske konstanter.
            </InfoBox>
          </section>

          {/* Exercises */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Oppgaver</h2>

            <div className="space-y-8">
              <Exercise
                title="Oppgave 11.4: Implementer trapesmetoden"
                description={`Bruk trapesmetoden til å beregne ∫₁³ 1/x dx.

Det eksakte svaret er ln(3) ≈ 1.0986. Bruk n = 100 intervaller.

Husk: ln(x) i Python er log(x) fra math-biblioteket.`}
                initialCode={`from math import log

def f(x):
    return 1/x

# Implementer trapesmetoden her
def trapes_metoden(f, a, b, n):
    dx = (b - a) / n


    return areal

resultat = trapes_metoden(f, 1, 3, 100)
eksakt = log(3)

print(f"Trapesmetoden: {resultat:.6f}")
print(f"Eksakt (ln 3): {eksakt:.6f}")
print(f"Feil: {abs(resultat - eksakt):.6f}")`}
                difficulty="lett"
                hints={[
                  "Start med areal = f(a) + f(b)",
                  "Loop fra i = 1 til n-1 og legg til 2*f(a + i*dx)",
                  "Til slutt multipliser med dx/2"
                ]}
                storageKey="11-2-exercise-1"
                chapterId="11-2"
                exerciseId="11-2-exercise-1"
              />

              <Exercise
                title="Oppgave 11.5: Simpsons regel for e^x"
                description={`Bruk Simpsons regel til å beregne ∫₀¹ eˣ dx.

Det eksakte svaret er e - 1 ≈ 1.71828. Bruk n = 100 (eller 101, siden n må være partall).`}
                initialCode={`from math import exp, e

def f(x):
    return exp(x)  # e^x

# Implementer Simpsons regel her
def simpsons_regel(f, a, b, n):



    return areal

resultat = simpsons_regel(f, 0, 1, 100)
eksakt = e - 1

print(f"Simpsons regel: {resultat:.8f}")
print(f"Eksakt (e - 1): {eksakt:.8f}")
print(f"Feil: {abs(resultat - eksakt):.2e}")`}
                difficulty="medium"
                hints={[
                  "Sjekk om n er partall, hvis ikke legg til 1",
                  "Start med areal = f(a) + f(b)",
                  "Loop for odde i: vekt 4",
                  "Loop for partall i: vekt 2",
                  "Multipliser med dx/3"
                ]}
                storageKey="11-2-exercise-2"
                chapterId="11-2"
                exerciseId="11-2-exercise-2"
              />

              <Exercise
                title="Oppgave 11.6: Sammenlign alle metodene"
                description={`Lag et program som sammenligner alle tre metodene for funksjonen f(x) = sin(x) på intervallet [0, π].

Beregn feilen for hver metode med n = 10, 50, 100, 500 og 1000.
Det eksakte svaret er 2.0.

Hvilken metode gir best nøyaktighet?`}
                initialCode={`from math import sin, pi

def f(x):
    return sin(x)

def riemann_midtpunkt(f, a, b, n):
    # Din kode

def trapes_metoden(f, a, b, n):
    # Din kode

def simpsons_regel(f, a, b, n):
    # Din kode

# Test alle metodene
eksakt = 2.0

print("n      Riemann       Trapes        Simpson")
print("-" * 55)
for n in [10, 50, 100, 500, 1000]:
    r = riemann_midtpunkt(f, 0, pi, n)
    t = trapes_metoden(f, 0, pi, n)
    s = simpsons_regel(f, 0, pi, n)
    print(f"{n:4d}  {abs(r-eksakt):.2e}  {abs(t-eksakt):.2e}  {abs(s-eksakt):.2e}")`}
                difficulty="vanskelig"
                hints={[
                  "Kopier implementasjonene fra tidligere eksempler",
                  "Husk at Simpsons regel krever partall n",
                  "Bruk format-strengen :.2e for vitenskapelig notasjon"
                ]}
                storageKey="11-2-exercise-3"
                chapterId="11-2"
                exerciseId="11-2-exercise-3"
              />
            </div>
          </section>

          {/* Summary */}
          <section className="mb-12">
            <Card className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Oppsummering</h2>
                <div className="space-y-3">
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">✓</span>
                    <span>Trapesmetoden bruker trapeser og gir bedre nøyaktighet enn rektangler</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">✓</span>
                    <span>Formelen: Δx/2 · [f(x₀) + 2f(x₁) + 2f(x₂) + ... + f(xₙ)]</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">✓</span>
                    <span>Simpsons regel bruker paraboler og gir enda bedre nøyaktighet</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">✓</span>
                    <span>Simpsons regel krever partall antall intervaller (n må være partall)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">✓</span>
                    <span>Numerisk integrasjon kan brukes til å beregne π og andre konstanter</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <ChapterNavigation currentChapterId="11-2" />
        </div>
      </div>
    </BookLayout>
  );
}
