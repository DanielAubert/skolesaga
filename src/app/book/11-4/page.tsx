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

export default function Chapter114Page() {
  useKeyboardNavigation('11-4');
  return (
    <BookLayout currentChapterId="11-4">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          {/* Progress Bar */}
          <div className="mb-4 sm:mb-6 space-y-3 sm:space-y-4">
            <ChapterProgressBar currentChapterId="11-4" />
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
            <Link href="/book" className="hover:text-foreground">
              Lærebok
            </Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 11.4</span>
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
                <p className="text-xs sm:text-sm font-medium text-muted-foreground">Kapittel 11.4</p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Prosjekt - Arealer og volum
                </h1>
              </div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              I dette prosjektkapitlet skal du kombinere numerisk integrasjon og rekursjon
              for å løse praktiske problemer med arealer og volum.
            </p>
          </div>

          {/* Section 1: Beregn areal under kurve */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Prosjekt 1: Areal under komplekse kurver</h2>

            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Nå skal vi bruke våre integrasjonsmetoder til å beregne arealet under mer komplekse
              funksjoner som ikke har enkle analytiske løsninger.
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">Oppgave: Normalfordelingskurven</h3>
                <p className="mb-3">
                  Normalfordelingen (Gauss-kurven) er gitt ved:
                </p>
                <div className="bg-muted p-3 rounded-lg font-mono text-sm mb-3">
                  f(x) = (1/√(2π)) · e^(-x²/2)
                </div>
                <p className="text-muted-foreground">
                  Arealet under hele kurven er 1. Vi skal beregne arealet fra -1 til 1
                  (omtrent 68% av totalarealet).
                </p>
              </CardContent>
            </Card>

            <div className="mt-6">
              <PythonRunner
                title="Normalfordeling: Areal fra -1 til 1"
                initialCode={`from math import exp, sqrt, pi

def normalfordeling(x):
    """Gauss-kurven (standardnormalfordeling)"""
    return (1 / sqrt(2 * pi)) * exp(-x**2 / 2)

def simpsons_regel(f, a, b, n):
    """Simpsons regel for numerisk integrasjon"""
    if n % 2 != 0:
        n += 1
    dx = (b - a) / n
    areal = f(a) + f(b)

    for i in range(1, n, 2):
        areal += 4 * f(a + i * dx)
    for i in range(2, n, 2):
        areal += 2 * f(a + i * dx)

    return areal * dx / 3

# Beregn areal fra -1 til 1
areal_1 = simpsons_regel(normalfordeling, -1, 1, 1000)
print(f"Areal fra -1 til 1: {areal_1:.6f}")
print(f"Dette er {areal_1*100:.2f}% av totalarealet")

# Beregn også for -2 til 2 og -3 til 3
areal_2 = simpsons_regel(normalfordeling, -2, 2, 1000)
areal_3 = simpsons_regel(normalfordeling, -3, 3, 1000)

print(f"\\nAreal fra -2 til 2: {areal_2:.6f} ({areal_2*100:.2f}%)")
print(f"Areal fra -3 til 3: {areal_3:.6f} ({areal_3*100:.2f}%)")`}
                height="500px"
                storageKey="11-4-normal-distribution"
              />
            </div>

            <InfoBox type="success" title="68-95-99.7 regelen">
              Resultatene skal være omtrent: 68% innenfor 1σ, 95% innenfor 2σ, og 99.7% innenfor 3σ.
              Dette kalles 68-95-99.7 regelen i statistikk!
            </InfoBox>
          </section>

          {/* Section 2: Volum ved rotasjon */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Prosjekt 2: Volum ved rotasjon</h2>

            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Når vi roterer en kurve rundt x-aksen, får vi et rotasjonslegeme. Volumet av dette
              legemet kan beregnes med formelen:
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">Volumformel</h3>
                <div className="bg-muted p-4 rounded-lg space-y-2">
                  <p className="font-mono text-center">V = π · ∫ₐᵇ [f(x)]² dx</p>
                  <p className="text-sm text-muted-foreground">
                    Vi integrerer tverrsnittsarealet π·r² = π·[f(x)]² langs x-aksen
                  </p>
                </div>
              </CardContent>
            </Card>

            <InfoBox type="info" title="Eksempel: Kule">
              En kule med radius R kan lages ved å rotere halvsirkelen f(x) = √(R² - x²) rundt x-aksen.
              Volumet skal bli (4/3)πR³.
            </InfoBox>

            <div className="mt-6">
              <PythonRunner
                title="Beregn volum av kule"
                initialCode={`from math import pi, sqrt

def halvsirkel(x, R):
    """Halvsirkel med radius R"""
    return sqrt(R**2 - x**2)

def volum_rotasjon(f, a, b, n):
    """
    Beregn volum av rotasjonslegeme med Simpsons regel
    V = π · ∫ f(x)² dx
    """
    if n % 2 != 0:
        n += 1
    dx = (b - a) / n

    # Integrer f(x)²
    areal = f(a)**2 + f(b)**2

    for i in range(1, n, 2):
        areal += 4 * f(a + i * dx)**2
    for i in range(2, n, 2):
        areal += 2 * f(a + i * dx)**2

    integral = areal * dx / 3

    # Gang med π
    return pi * integral

# Beregn volum av kule med radius 5
R = 5
volum_numerisk = volum_rotasjon(lambda x: halvsirkel(x, R), -R, R, 1000)
volum_eksakt = (4/3) * pi * R**3

print(f"Numerisk volum: {volum_numerisk:.6f}")
print(f"Eksakt volum:   {volum_eksakt:.6f}")
print(f"Feil: {abs(volum_numerisk - volum_eksakt):.6f}")
print(f"Feil i %: {abs(volum_numerisk - volum_eksakt)/volum_eksakt * 100:.4f}%")`}
                height="550px"
                storageKey="11-4-sphere-volume"
              />
            </div>
          </section>

          {/* Section 3: Kombiner integrasjon og rekursjon */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Prosjekt 3: Rekursiv integrasjon</h2>

            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Vi kan bruke rekursjon til å forbedre integrasjonsnøyaktigheten gradvis.
              Dette kalles <strong>adaptiv integrasjon</strong>.
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">Adaptiv integrasjon</h3>
                <p className="mb-3">
                  Ideen er å doble antall intervaller til vi når ønsket nøyaktighet:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Start med n intervaller</li>
                  <li>Beregn integralet I₁</li>
                  <li>Doble n og beregn integralet I₂</li>
                  <li>Hvis |I₂ - I₁| &lt; toleranse, stopp. Ellers gjenta fra steg 3</li>
                </ol>
              </CardContent>
            </Card>

            <div className="mt-6">
              <PythonRunner
                title="Adaptiv integrasjon med rekursjon"
                initialCode={`from math import sin, pi

def trapes_metoden(f, a, b, n):
    """Trapesmetoden"""
    dx = (b - a) / n
    areal = f(a) + f(b)
    for i in range(1, n):
        areal += 2 * f(a + i * dx)
    return areal * dx / 2

def adaptiv_integrasjon(f, a, b, toleranse=1e-6, n_start=10):
    """
    Beregn integral med adaptiv presisjon
    Dobler antall intervaller til nøyaktighet er oppnådd
    """
    n = n_start
    I_forrige = trapes_metoden(f, a, b, n)

    iterasjon = 1
    print(f"{'Iter':<6} {'n':<8} {'Integral':<15} {'Endring':<12}")
    print("-" * 50)
    print(f"{iterasjon:<6} {n:<8} {I_forrige:<15.10f} {'---':<12}")

    while True:
        n *= 2
        I_ny = trapes_metoden(f, a, b, n)
        endring = abs(I_ny - I_forrige)

        iterasjon += 1
        print(f"{iterasjon:<6} {n:<8} {I_ny:<15.10f} {endring:<12.2e}")

        if endring < toleranse:
            print(f"\\nKonvergert! Brukte {n} intervaller")
            return I_ny

        I_forrige = I_ny

        if n > 100000:
            print("\\nAdvarsel: Maks iterasjoner nådd")
            return I_ny

# Test med sin(x) fra 0 til π
print("Beregner ∫₀^π sin(x) dx (eksakt = 2.0)\\n")
resultat = adaptiv_integrasjon(sin, 0, pi, toleranse=1e-8)
print(f"\\nSluttresultat: {resultat:.10f}")
print(f"Feil: {abs(resultat - 2.0):.2e}")`}
                height="600px"
                storageKey="11-4-adaptive-integration"
              />
            </div>

            <InfoBox type="tip">
              Adaptiv integrasjon er veldig effektiv! Den bruker bare så mange intervaller
              som nødvendig for å oppnå ønsket presisjon.
            </InfoBox>
          </section>

          {/* Prosjektoppgaver */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Prosjektoppgaver</h2>

            <div className="space-y-8">
              <Exercise
                title="Prosjekt 11.1: Areal mellom to kurver"
                description={`Beregn arealet mellom kurvene f(x) = x² og g(x) = √x fra x = 0 til x = 1.

Arealet mellom to kurver er: A = ∫ₐᵇ |f(x) - g(x)| dx

Siden √x > x² på intervallet [0, 1], kan vi beregne: ∫₀¹ (√x - x²) dx

Det eksakte svaret er 1/3.`}
                initialCode={`from math import sqrt

def f(x):
    return x**2

def g(x):
    return sqrt(x)

def simpsons_regel(f, a, b, n):
    # Din kode her




# Beregn arealet
def areal_mellom(x):
    return g(x) - f(x)

areal = simpsons_regel(areal_mellom, 0, 1, 1000)
print(f"Areal mellom kurvene: {areal:.6f}")
print(f"Eksakt verdi: {1/3:.6f}")`}
                difficulty="lett"
                hints={[
                  "Implementer Simpsons regel som i tidligere kapitler",
                  "Lag en ny funksjon som returnerer g(x) - f(x)",
                  "Integrer denne differansen"
                ]}
                storageKey="11-4-exercise-1"
                chapterId="11-4"
                exerciseId="11-4-exercise-1"
              />

              <Exercise
                title="Prosjekt 11.2: Volum av kjeglen"
                description={`En kjeglen med radius R og høyde H kan lages ved å rotere linjen f(x) = (R/H)·x
rundt x-aksen fra x = 0 til x = H.

Beregn volumet numerisk og sammenlign med den kjente formelen: V = (1/3)πR²H

Test med R = 3 og H = 5.`}
                initialCode={`from math import pi

def kjeglelinje(x, R, H):
    """Linjen som danner kjeglens overflate"""
    return (R / H) * x

def volum_rotasjon(f, a, b, n):
    """Beregn volum ved rotasjon: V = π·∫f(x)² dx"""
    # Din kode her (bruk Simpsons regel)




# Test med R = 3, H = 5
R = 3
H = 5

volum_numerisk =
volum_eksakt = (1/3) * pi * R**2 * H

print(f"Numerisk volum: {volum_numerisk:.6f}")
print(f"Eksakt volum:   {volum_eksakt:.6f}")
print(f"Feil: {abs(volum_numerisk - volum_eksakt):.6f}")`}
                difficulty="medium"
                hints={[
                  "Volum ved rotasjon: V = π · ∫ₐᵇ [f(x)]² dx",
                  "Integrer f(x)² med Simpsons regel",
                  "Gang resultatet med π"
                ]}
                storageKey="11-4-exercise-2"
                chapterId="11-4"
                exerciseId="11-4-exercise-2"
              />

              <Exercise
                title="Prosjekt 11.3: Fibonacci-spiralen"
                description={`Lag en visualisering av Fibonacci-spiralen ved å:

1. Generere de første 15 Fibonacci-tallene
2. For hvert Fibonacci-tall Fₙ, beregn arealet av kvadratet med sidelengde Fₙ
3. Summer alle kvadratarealene
4. Sammenlign med tilnærmingen basert på det gyldne snitt φ = (1+√5)/2

Areal av Fibonacci-kvadratene ≈ (Fₙ · Fₙ₊₁)`}
                initialCode={`from math import sqrt

def fibonacci(n):
    """Generer de første n Fibonacci-tallene"""
    if n <= 0:
        return []
    elif n == 1:
        return [0]

    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[i-1] + fib[i-2])
    return fib

# Generer Fibonacci-tall
fib_tall = fibonacci(15)

# Beregn arealer
print("n    Fₙ      Areal (Fₙ²)  Kumulativt areal")
print("-" * 50)

kumulativt = 0
for i, f in enumerate(fib_tall):
    areal = f * f
    kumulativt += areal
    print(f"{i:<4} {f:<7} {areal:<12} {kumulativt:<15}")

# Siste to Fibonacci-tall
F_n = fib_tall[-1]
F_n1 = fib_tall[-2]

# Tilnærming
tilnaerming = F_n * F_n1

print(f"\\nKumulativt areal: {kumulativt}")
print(f"Tilnærming Fₙ·Fₙ₊₁: {tilnaerming}")
print(f"Disse skal være omtrent like!")

# Det gyldne snitt
phi = (1 + sqrt(5)) / 2
print(f"\\nDet gyldne snitt φ = {phi:.6f}")`}
                difficulty="vanskelig"
                hints={[
                  "Bruk fibonacci-funksjonen fra kapittel 11.3",
                  "Loop gjennom tallene og beregn f*f",
                  "Hold styr på kumulativ sum"
                ]}
                storageKey="11-4-exercise-3"
                chapterId="11-4"
                exerciseId="11-4-exercise-3"
              />
            </div>
          </section>

          {/* Utfordring */}
          <section className="mb-8 sm:mb-12">
            <Card className="border-2 border-purple-300 dark:border-purple-700">
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🏆</span>
                  Ekstra utfordring: Monte Carlo-integrasjon
                </h2>
                <p className="mb-4">
                  Monte Carlo-integrasjon bruker tilfeldige punkter for å estimere arealer.
                  Dette er en helt annen metode enn Riemann-summer og trapesmetoden!
                </p>

                <div className="bg-muted p-4 rounded-lg mb-4">
                  <h3 className="font-semibold mb-2">Slik fungerer det:</h3>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Generer N tilfeldige punkter (x, y) i et rektangel som inneholder kurven</li>
                    <li>Tell hvor mange punkter som ligger under kurven</li>
                    <li>Areal ≈ (antall under kurven / totalt antall) · areal av rektangel</li>
                  </ol>
                </div>

                <PythonRunner
                  title="Monte Carlo: Beregn π"
                  initialCode={`import random

def monte_carlo_pi(N):
    """Estimer π ved å kaste punkter i en sirkel"""
    innenfor = 0

    for _ in range(N):
        # Tilfeldige punkter i kvadrat [-1, 1] × [-1, 1]
        x = random.uniform(-1, 1)
        y = random.uniform(-1, 1)

        # Sjekk om punktet er i enhetssirkelen
        if x**2 + y**2 <= 1:
            innenfor += 1

    # Areal av sirkel / areal av kvadrat = π/4
    return 4 * innenfor / N

# Test med ulike antall punkter
for N in [100, 1000, 10000, 100000, 1000000]:
    pi_estimat = monte_carlo_pi(N)
    from math import pi
    feil = abs(pi_estimat - pi)
    print(f"N = {N:7d}: π ≈ {pi_estimat:.6f}  (feil: {feil:.6f})")`}
                  height="500px"
                  storageKey="11-4-monte-carlo"
                />

                <InfoBox type="note" title="Merk">
                  Monte Carlo-metoder er spesielt nyttige for høydimensjonale integraler
                  der tradisjonelle metoder blir for trege!
                </InfoBox>
              </CardContent>
            </Card>
          </section>

          {/* Summary */}
          <section className="mb-12">
            <Card className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Oppsummering av kapittel 11</h2>
                <div className="space-y-3">
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">✓</span>
                    <span>Numerisk integrasjon: Riemann-sum, trapes, Simpson</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">✓</span>
                    <span>Simpsons regel gir best nøyaktighet for glatte funksjoner</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">✓</span>
                    <span>Rekursive følger: aₙ₊₁ = f(aₙ), inkludert Fibonacci og geometriske følger</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">✓</span>
                    <span>Volum ved rotasjon: V = π·∫[f(x)]² dx</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">✓</span>
                    <span>Adaptiv integrasjon og Monte Carlo-metoder for avanserte problemer</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <ChapterNavigation currentChapterId="11-4" />
        </div>
      </div>
    </BookLayout>
  );
}
