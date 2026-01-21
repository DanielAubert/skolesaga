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

export default function Chapter111Page() {
  useKeyboardNavigation('11-1');
  return (
    <BookLayout currentChapterId="11-1">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          {/* Progress Bar */}
          <div className="mb-4 sm:mb-6 space-y-3 sm:space-y-4">
            <ChapterProgressBar currentChapterId="11-1" />
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
            <Link href="/book" className="hover:text-foreground">
              Lærebok
            </Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 11.1</span>
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
                <p className="text-xs sm:text-sm font-medium text-muted-foreground">Kapittel 11.1</p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Numerisk integrasjon
                </h1>
              </div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              I dette kapitlet skal du lære hvordan du kan beregne arealet under en kurve ved hjelp av
              numeriske metoder og Riemann-summer.
            </p>
          </div>

          {/* Section 1: Arealet under en kurve */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Arealet under en kurve</h2>

            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Når vi skal finne arealet under en funksjonskurve, bruker vi integrasjon. I matematikk kan vi
              ofte bruke antiderivasjon, men med Python kan vi bruke <strong>numerisk integrasjon</strong> -
              det vil si at vi tilnærmer arealet ved hjelp av beregninger.
            </p>

            <InfoBox type="info" title="Hva er numerisk integrasjon?">
              Numerisk integrasjon er en metode for å beregne arealet under en kurve ved å dele området
              inn i mange små deler (som rektangler eller trapeser) og summere arealene til disse delene.
            </InfoBox>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">Integralnotasjon</h3>
                <p className="mb-4">
                  Vi skriver integralet fra a til b av funksjonen f(x) som:
                </p>
                <div className="bg-muted p-4 rounded-lg text-center text-lg font-mono mb-4">
                  ∫<sub>a</sub><sup>b</sup> f(x) dx
                </div>
                <p className="text-muted-foreground">
                  Dette betyr: arealet mellom kurven y = f(x) og x-aksen, fra x = a til x = b.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section 2: Riemann-sum */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Riemann-sum: Dele i rektangler</h2>

            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Den enkleste måten å tilnærme et integral på er å dele området under kurven inn i
              <strong> n rektangler</strong> med lik bredde. Dette kalles en <strong>Riemann-sum</strong>.
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">Slik fungerer det</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Del intervallet [a, b] inn i n like brede deler</li>
                  <li>Bredden på hvert rektangel: Δx = (b - a) / n</li>
                  <li>Høyden bestemmes av funksjonsverdien f(x)</li>
                  <li>Summer arealet av alle rektanglene</li>
                </ol>
              </CardContent>
            </Card>

            <InfoBox type="tip">
              Jo flere rektangler vi bruker (større n), jo mer nøyaktig blir tilnærmingen!
            </InfoBox>
          </section>

          {/* Section 3: Venstre og høyre sum */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Venstre og høyre sum</h2>

            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Det finnes to hovedmåter å velge høyden på rektanglene:
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h3 className="font-semibold text-lg mb-2">Venstre sum</h3>
                    <p className="text-muted-foreground mb-2">
                      Bruk funksjonsverdien ved venstre kant av hvert rektangel
                    </p>
                    <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                      Høyde = f(x<sub>i</sub>) der x<sub>i</sub> er venstre punkt
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Høyre sum</h3>
                    <p className="text-muted-foreground mb-2">
                      Bruk funksjonsverdien ved høyre kant av hvert rektangel
                    </p>
                    <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                      Høyde = f(x<sub>i+1</sub>) der x<sub>i+1</sub> er høyre punkt
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Riemann-sum (venstre sum)"
                initialCode={`# Beregn areal under f(x) = x**2 fra 0 til 1
# Bruk venstre sum med n rektangler

def f(x):
    return x**2

# Grenser
a = 0
b = 1
n = 10  # Antall rektangler

# Bredde på hvert rektangel
dx = (b - a) / n

# Beregn areal (venstre sum)
areal = 0
for i in range(n):
    x_venstre = a + i * dx
    areal += f(x_venstre) * dx

print(f"Tilnærmet areal: {areal:.4f}")
print(f"Eksakt areal: {1/3:.4f}")`}
                height="350px"
                storageKey="11-1-riemann-left"
              />
            </div>

            <div className="mt-6">
              <PythonRunner
                title="Sammenligning: Venstre vs høyre sum"
                initialCode={`def f(x):
    return x**2

a, b, n = 0, 1, 20

dx = (b - a) / n

# Venstre sum
venstre_sum = sum(f(a + i*dx) * dx for i in range(n))

# Høyre sum
hoyre_sum = sum(f(a + (i+1)*dx) * dx for i in range(n))

# Gjennomsnitt (bedre tilnærming!)
gjennomsnitt = (venstre_sum + hoyre_sum) / 2

print(f"Venstre sum: {venstre_sum:.5f}")
print(f"Høyre sum:   {hoyre_sum:.5f}")
print(f"Gjennomsnitt: {gjennomsnitt:.5f}")
print(f"Eksakt:      {1/3:.5f}")`}
                height="350px"
                storageKey="11-1-left-vs-right"
              />
            </div>
          </section>

          {/* Section 4: Praktisk eksempel */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Eksempel: ∫₀¹ x² dx</h2>

            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              La oss beregne det berømte integralet ∫₀¹ x² dx. Vi vet fra analytisk matematikk at
              det eksakte svaret er <strong>1/3 ≈ 0.3333</strong>.
            </p>

            <div className="mt-6">
              <PythonRunner
                title="Beregn integral med ulike antall rektangler"
                initialCode={`def integral_riemann(f, a, b, n):
    """Beregn integral med Riemann-sum (midtpunkt)"""
    dx = (b - a) / n
    areal = 0

    for i in range(n):
        # Bruk midtpunktet i rektangelet
        x_mid = a + (i + 0.5) * dx
        areal += f(x_mid) * dx

    return areal

# Funksjonen vi skal integrere
def f(x):
    return x**2

# Test med ulike verdier av n
for n in [10, 100, 1000, 10000]:
    resultat = integral_riemann(f, 0, 1, n)
    feil = abs(resultat - 1/3)
    print(f"n = {n:5d}: {resultat:.6f}  (feil: {feil:.6f})")`}
                height="400px"
                storageKey="11-1-example-x-squared"
              />
            </div>

            <InfoBox type="note" title="Merk">
              Når vi dobler antall rektangler (n), blir feilen omtrent 4 ganger mindre!
              Dette er typisk for Riemann-summer.
            </InfoBox>
          </section>

          {/* Exercises */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Oppgaver</h2>

            <div className="space-y-8">
              <Exercise
                title="Oppgave 11.1: Beregn areal med venstre sum"
                description={`Lag en funksjon som beregner ∫₀² x³ dx ved hjelp av venstre sum.

a) Bruk n = 50 rektangler
b) Sammenlign med det eksakte svaret: 4 (siden ∫x³dx = x⁴/4, så ∫₀² x³dx = 16/4 = 4)
c) Hvor mange prosent feil er tilnærmingen din?`}
                initialCode={`def f(x):
    return x**3

# Grenser og antall rektangler
a = 0
b = 2
n = 50

# Din kode her:
dx =

areal = 0
for i in range(n):



print(f"Tilnærmet areal: {areal:.4f}")
print(f"Eksakt areal: 4.0000")
print(f"Feil: {abs(areal - 4)/4 * 100:.2f}%")`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "3.8",
                    description: "Tilnærmet areal skal være rundt 3.8",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Bredden: dx = (b - a) / n",
                  "Venstre punkt: x_i = a + i * dx",
                  "Legg til: f(x_i) * dx til arealet i hver iterasjon"
                ]}
                storageKey="11-1-exercise-1"
                chapterId="11-1"
                exerciseId="11-1-exercise-1"
              />

              <Exercise
                title="Oppgave 11.2: Høyre sum for sinus"
                description={`Beregn ∫₀^π sin(x) dx ved hjelp av høyre sum med n = 100.

Husk: Du må importere sin fra math-biblioteket.
Det eksakte svaret er 2.0 (siden ∫sin(x)dx = -cos(x), så ∫₀^π sin(x)dx = -cos(π) - (-cos(0)) = 1 - (-1) = 2)`}
                initialCode={`from math import sin, pi

def f(x):
    return sin(x)

a = 0
b = pi
n = 100

# Din kode her (bruk høyre sum):



print(f"Tilnærmet areal: {areal:.4f}")
print(f"Eksakt areal: 2.0000")`}
                difficulty="medium"
                hints={[
                  "Høyre punkt: x_høyre = a + (i+1) * dx",
                  "Loop fra i = 0 til i = n-1",
                  "Bruk f(x_høyre) * dx"
                ]}
                storageKey="11-1-exercise-2"
                chapterId="11-1"
                exerciseId="11-1-exercise-2"
              />

              <Exercise
                title="Oppgave 11.3: Generaliser Riemann-sum"
                description={`Lag en funksjon riemann_sum(f, a, b, n, metode) som kan beregne både venstre, høyre og midtpunkt-sum.

Parametere:
- f: funksjonen som skal integreres
- a, b: grensene
- n: antall rektangler
- metode: "venstre", "hoyre" eller "midtpunkt"

Test funksjonen med f(x) = x² fra 0 til 1 med n = 100 for alle tre metodene.`}
                initialCode={`def riemann_sum(f, a, b, n, metode):
    """Beregn Riemann-sum med valgt metode"""
    dx = (b - a) / n
    areal = 0

    for i in range(n):
        # Din kode her - velg x basert på metode
        if metode == "venstre":

        elif metode == "hoyre":

        else:  # midtpunkt


        areal += f(x) * dx

    return areal

# Test
def f(x):
    return x**2

for metode in ["venstre", "hoyre", "midtpunkt"]:
    resultat = riemann_sum(f, 0, 1, 100, metode)
    print(f"{metode:10s}: {resultat:.6f}")`}
                difficulty="vanskelig"
                hints={[
                  "Venstre: x = a + i * dx",
                  "Høyre: x = a + (i + 1) * dx",
                  "Midtpunkt: x = a + (i + 0.5) * dx"
                ]}
                storageKey="11-1-exercise-3"
                chapterId="11-1"
                exerciseId="11-1-exercise-3"
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
                    <span>Numerisk integrasjon beregner arealet under en kurve ved tilnærming</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">✓</span>
                    <span>Riemann-summer deler området i rektangler med bredde Δx = (b-a)/n</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">✓</span>
                    <span>Venstre sum bruker f(x<sub>i</sub>), høyre sum bruker f(x<sub>i+1</sub>)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">✓</span>
                    <span>Midtpunktsregel gir ofte bedre nøyaktighet enn venstre/høyre sum</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">✓</span>
                    <span>Flere rektangler (større n) = mer nøyaktig resultat</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <ChapterNavigation currentChapterId="11-1" />
        </div>
      </div>
    </BookLayout>
  );
}
