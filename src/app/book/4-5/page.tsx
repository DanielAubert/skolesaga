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
import { Sigma } from "lucide-react";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";

export default function Chapter45Page() {
  useKeyboardNavigation('4-5');

  return (
    <BookLayout currentChapterId="4-5">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="4-5" />
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">Lærebok</Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 4.5</span>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <Sigma className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 4.5</p>
                  <Badge variant="outline" className="text-purple-600">R2</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">Numerisk integrasjon og rekursjon</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Lær å beregne integraler numerisk med Riemann-summer, trapesmetoden og Simpsons regel, samt rekursive sammenhenger.
            </p>
          </div>

          {/* Section 1: Riemann-summer */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Riemann-summer</h2>

            <PythonRunner
              title="Venstre og høyre Riemann-sum"
              initialCode={`def riemann_venstre(f, a, b, n):
    """Venstre Riemann-sum"""
    dx = (b - a) / n
    total = 0
    for i in range(n):
        x = a + i * dx
        total += f(x) * dx
    return total

def riemann_hoyre(f, a, b, n):
    """Høyre Riemann-sum"""
    dx = (b - a) / n
    total = 0
    for i in range(1, n + 1):
        x = a + i * dx
        total += f(x) * dx
    return total

# Eksempel: ∫₀¹ x² dx = 1/3
def f(x):
    return x ** 2

a, b = 0, 1
eksakt = 1/3

print("∫₀¹ x² dx = 1/3 ≈ 0.3333...")
print("-" * 50)
print(f"{'n':<10} {'Venstre':<15} {'Høyre':<15} {'Snitt':<15}")

for n in [10, 100, 1000, 10000]:
    venstre = riemann_venstre(f, a, b, n)
    hoyre = riemann_hoyre(f, a, b, n)
    snitt = (venstre + hoyre) / 2
    print(f"{n:<10} {venstre:<15.8f} {hoyre:<15.8f} {snitt:<15.8f}")`}
              height="400px"
              storageKey="4-5-riemann"
            />

            <InfoBox type="info" title="Riemann-summer">
              Riemann-summer tilnærmer integralet ved å dele intervallet i n rektangler.
              Venstre-sum bruker funksjonsverdien i venstre endepunkt, høyre-sum bruker høyre.
            </InfoBox>
          </section>

          {/* Section 2: Trapesmetoden */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Trapesmetoden</h2>

            <PythonRunner
              title="Numerisk integrasjon med trapeser"
              initialCode={`def trapesmetoden(f, a, b, n):
    """
    Trapesmetoden:
    ∫f(x)dx ≈ (dx/2) * [f(x₀) + 2f(x₁) + 2f(x₂) + ... + 2f(xₙ₋₁) + f(xₙ)]
    """
    dx = (b - a) / n
    total = f(a) + f(b)  # Endepunktene

    for i in range(1, n):
        x = a + i * dx
        total += 2 * f(x)

    return (dx / 2) * total

import math

# Eksempel 1: ∫₀¹ x² dx = 1/3
def f1(x):
    return x ** 2

# Eksempel 2: ∫₀^π sin(x) dx = 2
def f2(x):
    return math.sin(x)

print("Trapesmetoden:")
print("-" * 50)

print("\\n∫₀¹ x² dx (eksakt: 0.3333...)")
for n in [10, 100, 1000]:
    resultat = trapesmetoden(f1, 0, 1, n)
    feil = abs(resultat - 1/3)
    print(f"  n = {n:4}: {resultat:.10f} (feil: {feil:.2e})")

print("\\n∫₀^π sin(x) dx (eksakt: 2)")
for n in [10, 100, 1000]:
    resultat = trapesmetoden(f2, 0, math.pi, n)
    feil = abs(resultat - 2)
    print(f"  n = {n:4}: {resultat:.10f} (feil: {feil:.2e})")`}
              height="420px"
              storageKey="4-5-trapes"
            />
          </section>

          {/* Section 3: Simpsons regel */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Simpsons regel</h2>

            <PythonRunner
              title="Simpsons regel"
              initialCode={`def simpson(f, a, b, n):
    """
    Simpsons regel (n må være partall):
    ∫f(x)dx ≈ (dx/3) * [f(x₀) + 4f(x₁) + 2f(x₂) + 4f(x₃) + ... + f(xₙ)]
    """
    if n % 2 != 0:
        n += 1  # Sørg for partall

    dx = (b - a) / n
    total = f(a) + f(b)

    for i in range(1, n):
        x = a + i * dx
        if i % 2 == 1:
            total += 4 * f(x)
        else:
            total += 2 * f(x)

    return (dx / 3) * total

import math

# Sammenlign metoder
def f(x):
    return x ** 3

a, b = 0, 2
eksakt = 4.0  # ∫₀² x³ dx = [x⁴/4]₀² = 4

print("∫₀² x³ dx = 4")
print("-" * 60)
print(f"{'n':<8} {'Trapes':<18} {'Simpson':<18} {'Feil (Simpson)'}")

for n in [4, 8, 16, 32]:
    # Trapesmetoden
    dx = (b - a) / n
    trapes = (f(a) + f(b))
    for i in range(1, n):
        trapes += 2 * f(a + i * dx)
    trapes *= dx / 2

    # Simpson
    simp = simpson(f, a, b, n)
    feil = abs(simp - eksakt)

    print(f"{n:<8} {trapes:<18.12f} {simp:<18.12f} {feil:.2e}")`}
              height="420px"
              storageKey="4-5-simpson"
            />

            <InfoBox type="tip" title="Simpsons regel">
              Simpsons regel bruker paraboler i stedet for rette linjer mellom punktene,
              og gir mye bedre nøyaktighet enn trapesmetoden for samme antall intervaller.
            </InfoBox>
          </section>

          {/* Section 4: Rekursive følger */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Rekursive følger</h2>

            <PythonRunner
              title="Fibonacci og andre følger"
              initialCode={`def fibonacci(n):
    """Genererer Fibonacci-følgen iterativt"""
    if n <= 0:
        return []
    if n == 1:
        return [0]

    folge = [0, 1]
    for i in range(2, n):
        folge.append(folge[-1] + folge[-2])
    return folge

def rekursiv_folge(a1, formel, n):
    """
    Genererer følge fra rekursiv formel
    formel er en funksjon: f(a_n, n) -> a_{n+1}
    """
    folge = [a1]
    for i in range(1, n):
        neste = formel(folge[-1], i)
        folge.append(neste)
    return folge

# Fibonacci
print("Fibonacci-følgen (første 15 ledd):")
fib = fibonacci(15)
print(fib)
print()

# Forholdet mellom påfølgende ledd (gylne snitt)
print("Forhold mellom påfølgende ledd:")
for i in range(2, 12):
    forhold = fib[i] / fib[i-1]
    print(f"  {fib[i]}/{fib[i-1]} = {forhold:.10f}")

phi = (1 + 5**0.5) / 2
print(f"\\nGylne snitt φ = {phi:.10f}")`}
              height="420px"
              storageKey="4-5-fibonacci"
            />
          </section>

          {/* Section 5: Rekursive funksjoner */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Rekursive funksjoner</h2>

            <PythonRunner
              title="Rekursjon i Python"
              initialCode={`def fakultet_rekursiv(n):
    """n! beregnet rekursivt"""
    if n <= 1:
        return 1
    return n * fakultet_rekursiv(n - 1)

def fibonacci_rekursiv(n):
    """n-te Fibonacci-tall rekursivt (ineffektiv)"""
    if n <= 1:
        return n
    return fibonacci_rekursiv(n-1) + fibonacci_rekursiv(n-2)

def sum_rekursiv(liste):
    """Summer en liste rekursivt"""
    if len(liste) == 0:
        return 0
    return liste[0] + sum_rekursiv(liste[1:])

# Test fakultet
print("Fakultet (rekursivt):")
for n in range(8):
    print(f"  {n}! = {fakultet_rekursiv(n)}")

print()

# Test sum
data = [1, 2, 3, 4, 5]
print(f"Sum av {data}: {sum_rekursiv(data)}")

print()

# Test Fibonacci (liten n pga ineffektivitet)
print("Fibonacci (rekursivt):")
for n in range(12):
    print(f"  F({n}) = {fibonacci_rekursiv(n)}")`}
              height="420px"
              storageKey="4-5-rekursjon"
            />

            <InfoBox type="warning" title="Rekursjon og effektivitet">
              Rekursive funksjoner kan være elegante, men ofte ineffektive.
              Fibonacci-funksjonen ovenfor har eksponentiell tidskompleksitet.
              Bruk memoization eller iterasjon for bedre ytelse.
            </InfoBox>
          </section>

          {/* Exercises */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Oppgaver</h2>

            <div className="mb-8">
              <Exercise
                title="Oppgave 4.5.1: Riemann-sum"
                description={`Beregn ∫₀² x dx med venstre Riemann-sum og n = 4.
Eksakt svar: 2`}
                initialCode={`def riemann_venstre(f, a, b, n):
    dx = (b - a) / n
    total = 0
    for i in range(n):
        x = a + i * dx
        total += f(x) * dx
    return total

def f(x):
    return x

resultat = riemann_venstre(f, 0, 2, 4)
print(f"∫₀² x dx ≈ {resultat}")`}
                difficulty="lett"
                testCases={[{ expectedOutput: "1.5", matchMode: 'contains' }]}
                hints={["Med n=4 og venstre-sum: dx=0.5, sum = 0×0.5 + 0.5×0.5 + 1×0.5 + 1.5×0.5 = 1.5"]}
                storageKey="4-5-ex1"
                chapterId="4-5"
                exerciseId="4-5-1"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 4.5.2: Trapesmetoden"
                description={`Beregn ∫₀¹ e^x dx med trapesmetoden og n = 100.
Eksakt svar: e - 1 ≈ 1.7183`}
                initialCode={`import math

def trapesmetoden(f, a, b, n):
    dx = (b - a) / n
    total = f(a) + f(b)
    for i in range(1, n):
        total += 2 * f(a + i * dx)
    return (dx / 2) * total

def f(x):
    return math.exp(x)

resultat = trapesmetoden(f, 0, 1, 100)
eksakt = math.e - 1

print(f"∫₀¹ e^x dx ≈ {resultat:.6f}")
print(f"Eksakt: {eksakt:.6f}")`}
                difficulty="medium"
                testCases={[{ expectedOutput: "1.718", matchMode: 'contains' }]}
                hints={["∫e^x dx = e^x, så ∫₀¹ e^x dx = e¹ - e⁰ = e - 1"]}
                storageKey="4-5-ex2"
                chapterId="4-5"
                exerciseId="4-5-2"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 4.5.3: Simpson"
                description={`Beregn ∫₀^π sin(x) dx med Simpsons regel og n = 10.
Eksakt svar: 2`}
                initialCode={`import math

def simpson(f, a, b, n):
    if n % 2 != 0:
        n += 1
    dx = (b - a) / n
    total = f(a) + f(b)
    for i in range(1, n):
        x = a + i * dx
        total += (4 if i % 2 == 1 else 2) * f(x)
    return (dx / 3) * total

def f(x):
    return math.sin(x)

resultat = simpson(f, 0, math.pi, 10)
print(f"∫₀^π sin(x) dx ≈ {resultat:.6f}")`}
                difficulty="medium"
                testCases={[{ expectedOutput: "2.00", matchMode: 'contains' }]}
                hints={["∫sin(x) dx = -cos(x), [-cos(π)] - [-cos(0)] = 1 + 1 = 2"]}
                storageKey="4-5-ex3"
                chapterId="4-5"
                exerciseId="4-5-3"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 4.5.4: Fibonacci"
                description={`Finn det 20. Fibonacci-tallet F(19) (med F(0)=0, F(1)=1).`}
                initialCode={`def fibonacci(n):
    if n <= 1:
        return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b

resultat = fibonacci(19)
print(f"F(19) = {resultat}")`}
                difficulty="lett"
                testCases={[{ expectedOutput: "4181", matchMode: 'contains' }]}
                hints={["F(19) = 4181"]}
                storageKey="4-5-ex4"
                chapterId="4-5"
                exerciseId="4-5-4"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 4.5.5: Rekursiv følge"
                description={`Gitt følgen a₁ = 2, aₙ₊₁ = 2aₙ - 1.
Finn a₅.`}
                initialCode={`a = 2  # a_1

for n in range(2, 6):
    a = 2 * a - 1
    print(f"a_{n} = {a}")`}
                difficulty="medium"
                testCases={[{ expectedOutput: "a_5 = 17", matchMode: 'contains' }]}
                hints={["a₂ = 3, a₃ = 5, a₄ = 9, a₅ = 17"]}
                storageKey="4-5-ex5"
                chapterId="4-5"
                exerciseId="4-5-5"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 4.5.6: Arealet under normalfordelingen"
                description={`Beregn ∫₋₁¹ e^(-x²) dx numerisk.
Dette er relatert til normalfordelingen. Teoretisk ≈ 1.4936`}
                initialCode={`import math

def simpson(f, a, b, n):
    if n % 2 != 0:
        n += 1
    dx = (b - a) / n
    total = f(a) + f(b)
    for i in range(1, n):
        x = a + i * dx
        total += (4 if i % 2 == 1 else 2) * f(x)
    return (dx / 3) * total

def f(x):
    return math.exp(-x ** 2)

resultat = simpson(f, -1, 1, 100)
print(f"∫₋₁¹ e^(-x²) dx ≈ {resultat:.6f}")`}
                difficulty="vanskelig"
                testCases={[{ expectedOutput: "1.49", matchMode: 'contains' }]}
                hints={["Bruk Simpson med n = 100 for god nøyaktighet"]}
                storageKey="4-5-ex6"
                chapterId="4-5"
                exerciseId="4-5-6"
              />
            </div>
          </section>

          <section className="mb-12">
            <Card className="bg-purple-500/5 border-purple-500/20">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Oppsummering</h2>
                <div className="space-y-2">
                  <p>✓ <strong>Riemann-sum</strong>: Tilnærmer integral med rektangler</p>
                  <p>✓ <strong>Trapesmetoden</strong>: Bruker trapeser, feil ~ O(1/n²)</p>
                  <p>✓ <strong>Simpsons regel</strong>: Bruker parabler, feil ~ O(1/n⁴)</p>
                  <p>✓ <strong>Rekursive følger</strong>: aₙ₊₁ = f(aₙ, n)</p>
                  <p>✓ <strong>Rekursive funksjoner</strong>: Funksjoner som kaller seg selv</p>
                  <p>✓ <strong>Fibonacci</strong>: F(n) = F(n-1) + F(n-2), F(0)=0, F(1)=1</p>
                </div>
              </CardContent>
            </Card>
          </section>

          <ChapterNavigation currentChapterId="4-5" />
        </div>
      </div>
    </BookLayout>
  );
}
