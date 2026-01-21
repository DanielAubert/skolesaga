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
import { Target } from "lucide-react";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";

export default function Chapter84Page() {
  useKeyboardNavigation('8-4');

  return (
    <BookLayout currentChapterId="8-4">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="8-4" />
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">Lærebok</Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 8.4</span>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <Target className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 8.4</p>
                  <Badge variant="outline" className="text-purple-600">S1</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">Prosjekt - Monte Carlo</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Bruk Monte Carlo-metoden til å estimere π og beregne areal under kurver.
            </p>
          </div>

          {/* Section 1: Estimere π */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Estimere π med tilfeldige punkter</h2>

            <p className="text-lg mb-6">
              Vi kan estimere π ved å kaste tilfeldige punkter i en enhetsfirkant (1×1)
              og telle hvor mange som lander inni en kvart sirkel med radius 1.
              <br />
              Forholdet mellom areal av kvart sirkel og firkant er π/4.
            </p>

            <PythonRunner
              title="Monte Carlo estimering av π"
              initialCode={`import random
import math

def estimer_pi(antall_punkter):
    """Estimer π ved Monte Carlo-metode"""
    inne_i_sirkel = 0

    for _ in range(antall_punkter):
        # Tilfeldig punkt i enhetsfirkant
        x = random.random()
        y = random.random()

        # Sjekk om punktet er inni kvart sirkel
        avstand = math.sqrt(x**2 + y**2)
        if avstand <= 1:
            inne_i_sirkel += 1

    # π ≈ 4 × (antall_inne / totalt)
    pi_estimat = 4 * inne_i_sirkel / antall_punkter
    return pi_estimat

# Test med ulike antall punkter
forsok = [100, 1000, 10000, 100000, 1000000]

print("Estimering av π:")
print("-" * 50)
print("Punkter      | Estimat  | Feil")
print("-" * 50)

for n in forsok:
    estimat = estimer_pi(n)
    feil = abs(estimat - math.pi)
    print(f"{n:12} | {estimat:.6f} | {feil:.6f}")

print("-" * 50)
print(f"Ekte verdi:  | {math.pi:.6f}")`}
              height="460px"
              storageKey="8-4-monte-carlo-pi"
            />

            <InfoBox type="info" title="Monte Carlo-metoden">
              Monte Carlo er en statistisk metode som bruker tilfeldige tall til å
              løse problemer som er vanskelige å løse analytisk. Metoden er oppkalt
              etter kasinoet i Monaco.
            </InfoBox>
          </section>

          {/* Section 2: Areal under kurve */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Areal under kurve</h2>

            <p className="text-lg mb-6">
              Vi kan bruke Monte Carlo til å estimere arealet under en kurve, for eksempel
              f(x) = x² fra x=0 til x=1.
            </p>

            <PythonRunner
              title="Areal under f(x) = x²"
              initialCode={`import random

def f(x):
    """Funksjonen f(x) = x²"""
    return x ** 2

def monte_carlo_areal(funksjonsverdi, a, b, maks_y, punkter):
    """Estimer areal under kurve med Monte Carlo"""
    under_kurve = 0

    for _ in range(punkter):
        # Tilfeldig punkt i rektangel [a,b] × [0,maks_y]
        x = random.uniform(a, b)
        y = random.uniform(0, maks_y)

        # Sjekk om punktet er under kurven
        if y <= funksjonsverdi(x):
            under_kurve += 1

    # Areal = (andel under kurve) × (areal av rektangel)
    rektangel_areal = (b - a) * maks_y
    estimat = (under_kurve / punkter) * rektangel_areal
    return estimat

# Estimer areal under f(x) = x² fra 0 til 1
a, b = 0, 1
maks_y = 1  # f(1) = 1² = 1

print("Estimering av areal under f(x) = x² fra 0 til 1")
print("-" * 55)

for n in [1000, 10000, 100000, 1000000]:
    estimat = monte_carlo_areal(f, a, b, maks_y, n)
    print(f"{n:7} punkter: Areal ≈ {estimat:.6f}")

print("-" * 55)
print(f"Eksakt verdi: Areal = 1/3 ≈ {1/3:.6f}")`}
              height="460px"
              storageKey="8-4-areal"
            />

            <InfoBox type="tip">
              Eksakt areal under f(x) = x² fra 0 til 1 er ∫₀¹ x² dx = [x³/3]₀¹ = 1/3 ≈ 0.333333
            </InfoBox>
          </section>

          {/* Section 3: Avansert Monte Carlo */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Avansert: Volumberegning</h2>

            <p className="text-lg mb-6">
              Monte Carlo kan også brukes til å estimere volum av 3D-objekter,
              som en kule med radius 1.
            </p>

            <PythonRunner
              title="Volum av enhetskule"
              initialCode={`import random
import math

def estimer_kule_volum(antall_punkter):
    """Estimer volum av kule med radius 1"""
    inne_i_kule = 0

    for _ in range(antall_punkter):
        # Tilfeldig punkt i kube [-1,1] × [-1,1] × [-1,1]
        x = random.uniform(-1, 1)
        y = random.uniform(-1, 1)
        z = random.uniform(-1, 1)

        # Sjekk om punktet er inni kule
        avstand = math.sqrt(x**2 + y**2 + z**2)
        if avstand <= 1:
            inne_i_kule += 1

    # Volum av kube = 2³ = 8
    kube_volum = 8
    volum_estimat = (inne_i_kule / antall_punkter) * kube_volum
    return volum_estimat

# Test
print("Estimering av volum for enhetskule (radius = 1)")
print("-" * 55)
print("Punkter      | Estimat  | Feil")
print("-" * 55)

eksakt_volum = (4/3) * math.pi  # V = 4πr³/3 med r=1

for n in [1000, 10000, 100000, 1000000]:
    estimat = estimer_kule_volum(n)
    feil = abs(estimat - eksakt_volum)
    print(f"{n:12} | {estimat:.6f} | {feil:.6f}")

print("-" * 55)
print(f"Eksakt volum: V = 4π/3 ≈ {eksakt_volum:.6f}")`}
              height="460px"
              storageKey="8-4-volum"
            />
          </section>

          {/* Exercises */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Prosjektoppgaver</h2>

            <div className="mb-8">
              <Exercise
                title="Oppgave 8.4.1: Estimer π med 500 000 punkter"
                description={`Lag et program som estimerer π ved å kaste 500 000 tilfeldige punkter.
Sammenlign med den eksakte verdien av π.`}
                initialCode={`import random
import math

antall_punkter = 500000
inne_i_sirkel = 0

for _ in range(antall_punkter):
    x = random.random()
    y = random.random()

    if math.sqrt(x**2 + y**2) <= 1:
        inne_i_sirkel += 1

pi_estimat = 4 * inne_i_sirkel / antall_punkter

print(f"Punkter: {antall_punkter:,}")
print(f"Estimat: π ≈ {pi_estimat:.6f}")
print(f"Eksakt:  π = {math.pi:.6f}")
print(f"Feil: {abs(pi_estimat - math.pi):.6f}")`}
                difficulty="medium"
                testCases={[
                  { expectedOutput: "Estimat:", matchMode: 'contains' },
                  { expectedOutput: "3.14", matchMode: 'contains' }
                ]}
                hints={["Med 500 000 punkter bør feilen være under 0.01"]}
                storageKey="8-4-ex1"
                chapterId="8-4"
                exerciseId="8-4-1"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 8.4.2: Areal under f(x) = sin(x)"
                description={`Estimer arealet under f(x) = sin(x) fra x=0 til x=π ved Monte Carlo.
Teoretisk verdi: ∫₀^π sin(x)dx = 2`}
                initialCode={`import random
import math

def f(x):
    return math.sin(x)

# Parametere
a = 0
b = math.pi
maks_y = 1      # sin(x) ≤ 1
punkter = 100000

# Monte Carlo
under_kurve = 0
for _ in range(punkter):
    x = random.uniform(a, b)
    y = random.uniform(0, maks_y)

    if y <= f(x):
        under_kurve += 1

rektangel_areal = (b - a) * maks_y
estimat = (under_kurve / punkter) * rektangel_areal

print(f"Areal under sin(x) fra 0 til π:")
print(f"Estimat: {estimat:.6f}")
print(f"Eksakt: 2.000000")
print(f"Feil: {abs(estimat - 2):.6f}")`}
                difficulty="vanskelig"
                testCases={[
                  { expectedOutput: "Estimat:", matchMode: 'contains' },
                  { expectedOutput: "Eksakt: 2", matchMode: 'contains' }
                ]}
                hints={["∫₀^π sin(x)dx = [-cos(x)]₀^π = -cos(π) + cos(0) = 1 + 1 = 2"]}
                storageKey="8-4-ex2"
                chapterId="8-4"
                exerciseId="8-4-2"
              />
            </div>
          </section>

          <section className="mb-12">
            <Card className="bg-purple-500/5 border-purple-500/20">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Oppsummering</h2>
                <div className="space-y-2">
                  <p>✓ <strong>Monte Carlo</strong>: bruk tilfeldige tall til å løse problemer</p>
                  <p>✓ <strong>Estimere π</strong>: kast punkter i firkant med inneskrevet sirkel</p>
                  <p>✓ <strong>Areal under kurve</strong>: tell punkter under graf</p>
                  <p>✓ <strong>Volumberegning</strong>: kan utvides til 3D-objekter</p>
                  <p>✓ Flere punkter → mer nøyaktig estimat</p>
                </div>
              </CardContent>
            </Card>
          </section>

          <ChapterNavigation currentChapterId="8-4" />
        </div>
      </div>
    </BookLayout>
  );
}
