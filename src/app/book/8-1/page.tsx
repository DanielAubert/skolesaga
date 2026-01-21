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
import { Calculator } from "lucide-react";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";

export default function Chapter81Page() {
  useKeyboardNavigation('8-1');

  return (
    <BookLayout currentChapterId="8-1">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="8-1" />
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">Lærebok</Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 8.1</span>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <Calculator className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 8.1</p>
                  <Badge variant="outline" className="text-purple-600">S1</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">Kombinatorikk</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Lær om fakultet, permutasjoner og kombinasjoner med Python.
            </p>
          </div>

          {/* Section 1: Fakultet */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Fakultet (n!)</h2>

            <p className="text-lg mb-6">
              Fakultet (factorial) er produktet av alle positive heltall opp til n.
              Vi skriver det som n! (n fakultet).
              <br />
              Eksempel: 5! = 5 × 4 × 3 × 2 × 1 = 120
            </p>

            <PythonRunner
              title="Beregne fakultet"
              initialCode={`def fakultet(n):
    """Beregner n! = n × (n-1) × ... × 2 × 1"""
    resultat = 1
    for i in range(1, n + 1):
        resultat *= i
    return resultat

# Test
for n in range(6):
    print(f"{n}! = {fakultet(n)}")

print()
print(f"10! = {fakultet(10)}")
print(f"12! = {fakultet(12):,}")`}
              height="300px"
              storageKey="8-1-fakultet"
            />

            <InfoBox type="info" title="Spesialtilfelle">
              0! er definert til å være 1. Dette er nyttig i mange formler.
            </InfoBox>
          </section>

          {/* Section 2: Lage funksjon for fakultet */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Rekursiv fakultetsfunksjon</h2>

            <p className="text-lg mb-6">
              Vi kan også definere fakultet rekursivt: n! = n × (n-1)!
              Dette gir en mer elegant løsning.
            </p>

            <PythonRunner
              title="Rekursiv fakultet"
              initialCode={`def fakultet_rekursiv(n):
    """Rekursiv versjon av fakultet"""
    if n == 0 or n == 1:
        return 1
    else:
        return n * fakultet_rekursiv(n - 1)

# Sammenlign med iterativ versjon
def fakultet_iterativ(n):
    resultat = 1
    for i in range(1, n + 1):
        resultat *= i
    return resultat

# Test begge
n = 8
print(f"Rekursiv: {n}! = {fakultet_rekursiv(n)}")
print(f"Iterativ: {n}! = {fakultet_iterativ(n)}")

# Større tall
print()
print(f"20! = {fakultet_iterativ(20):,}")`}
              height="340px"
              storageKey="8-1-rekursiv"
            />

            <InfoBox type="tip">
              Python har også en innebygd <code>math.factorial(n)</code> funksjon,
              men det er nyttig å forstå hvordan den fungerer!
            </InfoBox>
          </section>

          {/* Section 3: Permutasjoner */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Permutasjoner</h2>

            <p className="text-lg mb-6">
              Permutasjon er antall måter å ordne n objekter på r plasser.
              Formelen er: P(n,r) = n! / (n-r)!
            </p>

            <PythonRunner
              title="Beregne permutasjoner"
              initialCode={`def fakultet(n):
    if n <= 1:
        return 1
    resultat = 1
    for i in range(2, n + 1):
        resultat *= i
    return resultat

def permutasjon(n, r):
    """Antall måter å ordne n objekter på r plasser"""
    return fakultet(n) // fakultet(n - r)

# Eksempel: 5 personer, 3 plasser
n, r = 5, 3
P = permutasjon(n, r)
print(f"P({n},{r}) = {n}! / ({n}-{r})!")
print(f"P({n},{r}) = {fakultet(n)} / {fakultet(n-r)}")
print(f"P({n},{r}) = {P}")

print()
print("Andre eksempler:")
print(f"P(10,2) = {permutasjon(10, 2)}")
print(f"P(8,3) = {permutasjon(8, 3)}")`}
              height="380px"
              storageKey="8-1-permutasjon"
            />

            <InfoBox type="info">
              Permutasjoner brukis når <strong>rekkefølge betyr noe</strong>.
              Eksempel: På hvor mange måter kan 3 personer vinne gull, sølv og bronse
              i et løp med 10 deltakere? P(10,3) = 720
            </InfoBox>
          </section>

          {/* Exercises */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Oppgaver</h2>

            <div className="mb-8">
              <Exercise
                title="Oppgave 8.1.1: Beregn fakultet"
                description={`Lag en funksjon som beregner 7! og 9!`}
                initialCode={`def fakultet(n):
    resultat = 1
    for i in range(1, n + 1):
        resultat *= i
    return resultat

print(f"7! = {fakultet(7)}")
print(f"9! = {fakultet(9):,}")`}
                difficulty="lett"
                testCases={[
                  { expectedOutput: "7! = 5040", matchMode: 'contains' },
                  { expectedOutput: "9! = 362,880", matchMode: 'contains' }
                ]}
                hints={["7! = 5040", "9! = 362880"]}
                storageKey="8-1-ex1"
                chapterId="8-1"
                exerciseId="8-1-1"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 8.1.2: Permutasjoner i fotballkamp"
                description={`Et fotballag har 11 spillere, men må velge 1 kaptein, 1 visekapein og 1 frikspark-taker.
På hvor mange måter kan dette gjøres? (Bruk P(11,3))`}
                initialCode={`def fakultet(n):
    if n <= 1:
        return 1
    resultat = 1
    for i in range(2, n + 1):
        resultat *= i
    return resultat

def permutasjon(n, r):
    return fakultet(n) // fakultet(n - r)

n = 11  # Antall spillere
r = 3   # Antall roller

antall_mater = permutasjon(n, r)

print(f"Antall måter å velge kaptein, visekaptein og")
print(f"frisparktaker blant {n} spillere:")
print(f"P({n},{r}) = {antall_mater}")`}
                difficulty="medium"
                testCases={[
                  { expectedOutput: "990", matchMode: 'contains' }
                ]}
                hints={["P(11,3) = 11! / 8! = 11 × 10 × 9 = 990"]}
                storageKey="8-1-ex2"
                chapterId="8-1"
                exerciseId="8-1-2"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 8.1.3: Kodeordsanalyse"
                description={`Et passord består av 4 unike bokstaver fra alfabetet (26 bokstaver).
Hvor mange mulige passord finnes? (Bruk P(26,4))`}
                initialCode={`def fakultet(n):
    if n <= 1:
        return 1
    resultat = 1
    for i in range(2, n + 1):
        resultat *= i
    return resultat

def permutasjon(n, r):
    return fakultet(n) // fakultet(n - r)

bokstaver = 26
lengde = 4

antall_passord = permutasjon(bokstaver, lengde)

print(f"Passord: {lengde} unike bokstaver")
print(f"Mulige passord: P({bokstaver},{lengde}) = {antall_passord:,}")`}
                difficulty="medium"
                testCases={[
                  { expectedOutput: "358,800", matchMode: 'contains' }
                ]}
                hints={["P(26,4) = 26 × 25 × 24 × 23 = 358,800"]}
                storageKey="8-1-ex3"
                chapterId="8-1"
                exerciseId="8-1-3"
              />
            </div>
          </section>

          <section className="mb-12">
            <Card className="bg-purple-500/5 border-purple-500/20">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Oppsummering</h2>
                <div className="space-y-2">
                  <p>✓ <strong>Fakultet</strong>: n! = n × (n-1) × ... × 2 × 1</p>
                  <p>✓ <strong>0!</strong> = 1 (spesialtilfelle)</p>
                  <p>✓ <strong>Permutasjon</strong>: P(n,r) = n! / (n-r)!</p>
                  <p>✓ Permutasjoner brukes når rekkefølge betyr noe</p>
                  <p>✓ Rekursjon kan brukes for elegante løsninger</p>
                </div>
              </CardContent>
            </Card>
          </section>

          <ChapterNavigation currentChapterId="8-1" />
        </div>
      </div>
    </BookLayout>
  );
}
