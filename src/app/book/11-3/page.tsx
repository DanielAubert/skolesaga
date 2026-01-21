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

export default function Chapter113Page() {
  useKeyboardNavigation('11-3');
  return (
    <BookLayout currentChapterId="11-3">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          {/* Progress Bar */}
          <div className="mb-4 sm:mb-6 space-y-3 sm:space-y-4">
            <ChapterProgressBar currentChapterId="11-3" />
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
            <Link href="/book" className="hover:text-foreground">
              Lærebok
            </Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 11.3</span>
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
                <p className="text-xs sm:text-sm font-medium text-muted-foreground">Kapittel 11.3</p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Rekursive følger
                </h1>
              </div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              I dette kapitlet skal du lære om rekursjon - når et ledd i en følge avhenger av
              de foregående leddene.
            </p>
          </div>

          {/* Section 1: Hva er rekursjon */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Hva er rekursjon?</h2>

            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              En <strong>rekursiv følge</strong> er en følge der hvert ledd defineres ut fra ett eller
              flere tidligere ledd. Dette kalles også en <strong>rekursiv definisjon</strong>.
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">Generell form</h3>
                <div className="bg-muted p-4 rounded-lg space-y-3">
                  <div>
                    <p className="font-mono">a<sub>n+1</sub> = f(a<sub>n</sub>)</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Der neste ledd avhenger av forrige ledd
                    </p>
                  </div>
                  <div>
                    <p className="font-mono">a₀ = [startverdi]</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Vi må alltid ha en startverdi (første ledd)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <InfoBox type="info" title="Eksempel på rekursjon i hverdagen">
              Tenk på en kontosaldo: Neste måneds saldo = forrige måneds saldo + renter.
              Dette er et praktisk eksempel på en rekursiv sammenheng!
            </InfoBox>

            <div className="mt-6">
              <PythonRunner
                title="Enkel rekursiv følge"
                initialCode={`# Følgen a(n+1) = a(n) + 3, med a(0) = 2
# Dette gir følgen: 2, 5, 8, 11, 14, ...

a = 2  # Startverdi

print("De første 10 leddene:")
for n in range(10):
    print(f"a({n}) = {a}")
    a = a + 3  # Rekursiv formel`}
                height="300px"
                storageKey="11-3-simple-recursion"
              />
            </div>
          </section>

          {/* Section 2: Fibonacci-følgen */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Fibonacci-følgen</h2>

            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Den berømte <strong>Fibonacci-følgen</strong> er kanskje det mest kjente eksemplet på
              en rekursiv følge. Hvert ledd er summen av de to foregående leddene.
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">Fibonacci-definisjonen</h3>
                <div className="bg-muted p-4 rounded-lg space-y-2">
                  <p className="font-mono">F₀ = 0</p>
                  <p className="font-mono">F₁ = 1</p>
                  <p className="font-mono">Fₙ = Fₙ₋₁ + Fₙ₋₂ (for n ≥ 2)</p>
                  <p className="text-sm text-muted-foreground mt-3">
                    Dette gir følgen: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6">
              <PythonRunner
                title="Fibonacci med løkke"
                initialCode={`# Generer de første 15 Fibonacci-tallene
n = 15

# Startverdier
a = 0
b = 1

print(f"F(0) = {a}")
print(f"F(1) = {b}")

# Beregn resten
for i in range(2, n):
    neste = a + b  # Summen av to foregående
    print(f"F({i}) = {neste}")

    # Oppdater verdiene
    a = b
    b = neste`}
                height="400px"
                storageKey="11-3-fibonacci-loop"
              />
            </div>

            <InfoBox type="tip" title="Fibonacci i naturen">
              Fibonacci-tall dukker opp overalt i naturen: spiraler i kongler, solsikker,
              nautilus-skjell, og til og med i fordelingen av blader på planter!
            </InfoBox>

            <div className="mt-6">
              <PythonRunner
                title="Fibonacci med liste"
                initialCode={`# Mer elegant: bruk liste
def fibonacci(n):
    """Generer de første n Fibonacci-tallene"""
    if n <= 0:
        return []
    elif n == 1:
        return [0]

    # Start med to første verdier
    fib = [0, 1]

    # Beregn resten
    for i in range(2, n):
        fib.append(fib[i-1] + fib[i-2])

    return fib

# Test
tall = fibonacci(20)
print("De første 20 Fibonacci-tallene:")
for i, f in enumerate(tall):
    print(f"F({i}) = {f}")`}
                height="450px"
                storageKey="11-3-fibonacci-list"
              />
            </div>
          </section>

          {/* Section 3: Generell rekursiv følge */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Generell form: aₙ₊₁ = f(aₙ)</h2>

            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Vi kan lage mange interessante følger ved å definere forskjellige funksjoner f(aₙ).
              La oss se på noen eksempler:
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">Eksempler på rekursive følger</h3>
                <div className="space-y-4">
                  <div className="border-b pb-3">
                    <p className="font-mono mb-1">aₙ₊₁ = 2·aₙ (geometrisk følge)</p>
                    <p className="text-sm text-muted-foreground">Med a₀ = 1: 1, 2, 4, 8, 16, ...</p>
                  </div>
                  <div className="border-b pb-3">
                    <p className="font-mono mb-1">aₙ₊₁ = aₙ² (kvadratisk vekst)</p>
                    <p className="text-sm text-muted-foreground">Med a₀ = 2: 2, 4, 16, 256, ...</p>
                  </div>
                  <div>
                    <p className="font-mono mb-1">aₙ₊₁ = √aₙ (kvadratrot)</p>
                    <p className="text-sm text-muted-foreground">Med a₀ = 256: 256, 16, 4, 2, √2, ...</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6">
              <PythonRunner
                title="Utforsk ulike rekursive følger"
                initialCode={`from math import sqrt

def rekursiv_folge(f, a0, n):
    """
    Generer n ledd i en rekursiv følge
    f: funksjonen som definerer neste ledd
    a0: startverdi
    n: antall ledd
    """
    a = a0
    print(f"a(0) = {a:.6f}")

    for i in range(1, n):
        a = f(a)
        print(f"a({i}) = {a:.6f}")

# Test 1: Geometrisk følge (dobling)
print("Geometrisk følge (a(n+1) = 2*a(n)):")
rekursiv_folge(lambda x: 2*x, 1, 8)

print("\\nKvadratisk vekst (a(n+1) = a(n)²):")
rekursiv_folge(lambda x: x**2, 1.5, 5)

print("\\nKvadratrot (a(n+1) = √a(n)):")
rekursiv_folge(lambda x: sqrt(x), 256, 10)`}
                height="450px"
                storageKey="11-3-general-recursion"
              />
            </div>

            <InfoBox type="warning">
              Pass på divergens! Noen rekursive følger vokser veldig raskt (eksploderer),
              mens andre konvergerer mot en grenseverdi.
            </InfoBox>
          </section>

          {/* Section 4: Geometrisk rekke */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Geometrisk rekke</h2>

            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              En <strong>geometrisk følge</strong> er en spesiell type rekursiv følge der vi multipliserer
              med samme tall (kvotienten k) hver gang:
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">Geometrisk følge</h3>
                <div className="bg-muted p-4 rounded-lg space-y-2">
                  <p className="font-mono">aₙ₊₁ = k · aₙ</p>
                  <p className="font-mono">a₀ = [startverdi]</p>
                  <p className="text-sm text-muted-foreground mt-3">
                    Dette gir følgen: a₀, k·a₀, k²·a₀, k³·a₀, ...
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Eller eksplisitt: aₙ = a₀ · kⁿ
                  </p>
                </div>
              </CardContent>
            </Card>

            <InfoBox type="info" title="Summen av en geometrisk rekke">
              Summen av de første n leddene i en geometrisk følge er:
              <div className="mt-2 p-3 bg-white dark:bg-gray-800 rounded font-mono text-sm">
                Sₙ = a₀ · (1 - kⁿ) / (1 - k)  (for k ≠ 1)
              </div>
            </InfoBox>

            <div className="mt-6">
              <PythonRunner
                title="Geometrisk følge og sum"
                initialCode={`def geometrisk_folge(a0, k, n):
    """Generer geometrisk følge og beregn sum"""
    folge = []
    a = a0

    for i in range(n):
        folge.append(a)
        a = k * a

    return folge

def geometrisk_sum(a0, k, n):
    """Beregn sum av geometrisk følge (formel)"""
    if k == 1:
        return a0 * n
    return a0 * (1 - k**n) / (1 - k)

# Test med a0 = 2, k = 0.5
a0 = 2
k = 0.5
n = 10

folge = geometrisk_folge(a0, k, n)
print("Geometrisk følge:")
for i, verdi in enumerate(folge):
    print(f"a({i}) = {verdi:.6f}")

sum_numerisk = sum(folge)
sum_formel = geometrisk_sum(a0, k, n)

print(f"\\nSum (numerisk): {sum_numerisk:.6f}")
print(f"Sum (formel):   {sum_formel:.6f}")`}
                height="500px"
                storageKey="11-3-geometric-series"
              />
            </div>

            <InfoBox type="tip" title="Renter og investering">
              Geometriske følger brukes ofte i økonomi. Hvis du setter inn 1000 kr med 5% rente,
              er din formue etter n år: aₙ = 1000 · (1.05)ⁿ
            </InfoBox>
          </section>

          {/* Exercises */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Oppgaver</h2>

            <div className="space-y-8">
              <Exercise
                title="Oppgave 11.7: Beregn Fibonacci-tall"
                description={`Lag en funksjon som returnerer det n-te Fibonacci-tallet.

Test funksjonen ved å finne F(30).`}
                initialCode={`def fibonacci(n):
    """Returner det n-te Fibonacci-tallet"""
    if n == 0:
        return 0
    elif n == 1:
        return 1

    # Din kode her


# Test
print(f"F(10) = {fibonacci(10)}")
print(f"F(20) = {fibonacci(20)}")
print(f"F(30) = {fibonacci(30)}")`}
                difficulty="lett"
                hints={[
                  "Bruk to variabler a og b for å holde styr på de to siste verdiene",
                  "Loop fra 2 til n",
                  "Beregn neste = a + b, og oppdater a og b"
                ]}
                storageKey="11-3-exercise-1"
                chapterId="11-3"
                exerciseId="11-3-exercise-1"
              />

              <Exercise
                title="Oppgave 11.8: Konvergens av rekursiv følge"
                description={`Følgen aₙ₊₁ = √(2 + aₙ) med a₀ = 0 konvergerer mot 2.

Lag et program som:
a) Beregner de første 20 leddene
b) Viser hvor raskt følgen nærmer seg 2
c) Stopper når |aₙ - 2| < 0.0001`}
                initialCode={`from math import sqrt

# Startverdi
a = 0

print("n    a(n)         Avstand til 2")
print("-" * 40)

# Din kode her



`}
                difficulty="medium"
                hints={[
                  "Bruk en for-løkke for å beregne leddene",
                  "Avstand til 2: abs(a - 2)",
                  "For å stoppe tidlig, bruk en while-løkke eller break"
                ]}
                storageKey="11-3-exercise-2"
                chapterId="11-3"
                exerciseId="11-3-exercise-2"
              />

              <Exercise
                title="Oppgave 11.9: Sammensatt rente med rekursjon"
                description={`Du setter inn 10 000 kr på en konto med 4% årlig rente.

Lag et program som bruker rekursjon til å:
a) Beregne din formue hvert år i 20 år
b) Finn hvilket år du passerer 20 000 kr
c) Sammenlign med den eksplisitte formelen: aₙ = 10000 · (1.04)ⁿ`}
                initialCode={`# Startkapital og rente
a0 = 10000
rente = 0.04

# Rekursiv beregning
a = a0

print("År  Formue (rekursiv)  Formue (eksplisitt)")
print("-" * 50)

for n in range(21):
    # Eksplisitt formel


    # Vis resultat


    # Oppdater for neste år (rekursiv)


`}
                difficulty="vanskelig"
                hints={[
                  "Rekursiv: aₙ₊₁ = aₙ · (1 + rente)",
                  "Eksplisitt: a0 · (1 + rente)**n",
                  "For å finne når du passerer 20000, bruk en if-sjekk"
                ]}
                storageKey="11-3-exercise-3"
                chapterId="11-3"
                exerciseId="11-3-exercise-3"
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
                    <span>Rekursive følger defineres ved aₙ₊₁ = f(aₙ) med en startverdi a₀</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">✓</span>
                    <span>Fibonacci-følgen: Fₙ = Fₙ₋₁ + Fₙ₋₂ med F₀ = 0, F₁ = 1</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">✓</span>
                    <span>Geometrisk følge: aₙ₊₁ = k·aₙ gir aₙ = a₀·kⁿ</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">✓</span>
                    <span>Sum av geometrisk rekke: Sₙ = a₀·(1 - kⁿ)/(1 - k)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">✓</span>
                    <span>Rekursive følger kan konvergere (nærme seg en verdi) eller divergere</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <ChapterNavigation currentChapterId="11-3" />
        </div>
      </div>
    </BookLayout>
  );
}
