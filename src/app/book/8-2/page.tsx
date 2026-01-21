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
import { Coins } from "lucide-react";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";

export default function Chapter82Page() {
  useKeyboardNavigation('8-2');

  return (
    <BookLayout currentChapterId="8-2">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="8-2" />
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">Lærebok</Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 8.2</span>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <Coins className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 8.2</p>
                  <Badge variant="outline" className="text-purple-600">S1</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">Binomialfordeling</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Lær om binomialkoeffisienter og beregning av sannsynligheter.
            </p>
          </div>

          {/* Section 1: Binomialkoeffisient */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Binomialkoeffisient C(n,k)</h2>

            <p className="text-lg mb-6">
              Binomialkoeffisienten C(n,k) (leses &quot;n over k&quot;) er antall måter å velge
              k objekter fra n objekter når <strong>rekkefølge ikke betyr noe</strong>.
              <br />
              Formelen er: C(n,k) = n! / (k! × (n-k)!)
            </p>

            <PythonRunner
              title="Beregne binomialkoeffisient"
              initialCode={`def fakultet(n):
    if n <= 1:
        return 1
    resultat = 1
    for i in range(2, n + 1):
        resultat *= i
    return resultat

def binomial(n, k):
    """Binomialkoeffisient C(n,k) = n! / (k! * (n-k)!)"""
    return fakultet(n) // (fakultet(k) * fakultet(n - k))

# Eksempel: Velge 3 personer fra 5
n, k = 5, 3
C = binomial(n, k)

print(f"C({n},{k}) = {n}! / ({k}! × {n-k}!)")
print(f"C({n},{k}) = {fakultet(n)} / ({fakultet(k)} × {fakultet(n-k)})")
print(f"C({n},{k}) = {C}")

print()
print("Flere eksempler:")
print(f"C(10,3) = {binomial(10, 3)}")
print(f"C(8,5) = {binomial(8, 5)}")`}
              height="380px"
              storageKey="8-2-binomial"
            />

            <InfoBox type="info" title="C(n,k) vs P(n,k)">
              C(n,k) brukes når rekkefølge IKKE betyr noe (kombinasjoner).
              P(n,k) brukes når rekkefølge betyr noe (permutasjoner).
              C(n,k) = P(n,k) / k!
            </InfoBox>
          </section>

          {/* Section 2: Beregne sannsynlighet */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Binomialsannsynlighet</h2>

            <p className="text-lg mb-6">
              I binomialfordelingen gjør vi n uavhengige forsøk, hver med sannsynlighet p
              for suksess. Sannsynligheten for nøyaktig k suksesser er:
              <br />
              P(X = k) = C(n,k) × p^k × (1-p)^(n-k)
            </p>

            <PythonRunner
              title="Binomialsannsynlighet"
              initialCode={`def fakultet(n):
    if n <= 1:
        return 1
    resultat = 1
    for i in range(2, n + 1):
        resultat *= i
    return resultat

def binomial(n, k):
    return fakultet(n) // (fakultet(k) * fakultet(n - k))

def binomial_sannsynlighet(n, k, p):
    """P(X = k) i binomialfordeling med n forsøk og sannsynlighet p"""
    C = binomial(n, k)
    return C * (p ** k) * ((1 - p) ** (n - k))

# Eksempel: 10 myntkast, P(nøyaktig 6 mynt)
n = 10      # Antall kast
k = 6       # Ønsket antall suksesser
p = 0.5     # Sannsynlighet per kast

P = binomial_sannsynlighet(n, k, p)

print(f"10 myntkast, P(nøyaktig 6 mynt):")
print(f"P(X = {k}) = C({n},{k}) × {p}^{k} × {1-p}^{n-k}")
print(f"P(X = {k}) = {binomial(n,k)} × {p**k:.6f} × {(1-p)**(n-k):.6f}")
print(f"P(X = {k}) = {P:.4f} = {P*100:.2f}%")`}
              height="400px"
              storageKey="8-2-sannsynlighet"
            />
          </section>

          {/* Section 3: P(X = k) for flere verdier */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Sannsynlighetsfordeling</h2>

            <p className="text-lg mb-6">
              La oss beregne sannsynligheten for alle mulige utfall i en binomialfordeling.
            </p>

            <PythonRunner
              title="Komplett binomialfordeling"
              initialCode={`def fakultet(n):
    if n <= 1:
        return 1
    resultat = 1
    for i in range(2, n + 1):
        resultat *= i
    return resultat

def binomial(n, k):
    return fakultet(n) // (fakultet(k) * fakultet(n - k))

def binomial_sannsynlighet(n, k, p):
    C = binomial(n, k)
    return C * (p ** k) * ((1 - p) ** (n - k))

# 8 myntkast
n = 8
p = 0.5

print(f"Binomialfordeling: {n} myntkast")
print("-" * 40)

total = 0
for k in range(n + 1):
    P_k = binomial_sannsynlighet(n, k, p)
    total += P_k
    bar = "█" * int(P_k * 200)  # Tekstbar
    print(f"P(X={k}) = {P_k:.4f} {bar}")

print("-" * 40)
print(f"Sum: {total:.4f} (skal være 1.0)")`}
              height="400px"
              storageKey="8-2-fordeling"
            />

            <InfoBox type="tip">
              Summen av alle sannsynlighetene skal alltid bli 1.0, siden ett av
              utfallene må inntreffe!
            </InfoBox>
          </section>

          {/* Exercises */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Oppgaver</h2>

            <div className="mb-8">
              <Exercise
                title="Oppgave 8.2.1: Beregn C(7,3)"
                description={`Beregn binomialkoeffisienten C(7,3).
Dette er antall måter å velge 3 personer fra en gruppe på 7.`}
                initialCode={`def fakultet(n):
    if n <= 1:
        return 1
    resultat = 1
    for i in range(2, n + 1):
        resultat *= i
    return resultat

def binomial(n, k):
    return fakultet(n) // (fakultet(k) * fakultet(n - k))

n, k = 7, 3
resultat = binomial(n, k)

print(f"C({n},{k}) = {resultat}")`}
                difficulty="lett"
                testCases={[
                  { expectedOutput: "C(7,3) = 35", matchMode: 'contains' }
                ]}
                hints={["C(7,3) = 7!/(3!×4!) = 5040/(6×24) = 35"]}
                storageKey="8-2-ex1"
                chapterId="8-2"
                exerciseId="8-2-1"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 8.2.2: Terningkast"
                description={`Kast en terning 12 ganger. Hva er sannsynligheten for å få nøyaktig 2 seksere?
(p = 1/6 for sekser)`}
                initialCode={`def fakultet(n):
    if n <= 1:
        return 1
    resultat = 1
    for i in range(2, n + 1):
        resultat *= i
    return resultat

def binomial(n, k):
    return fakultet(n) // (fakultet(k) * fakultet(n - k))

def binomial_sannsynlighet(n, k, p):
    C = binomial(n, k)
    return C * (p ** k) * ((1 - p) ** (n - k))

n = 12      # Antall kast
k = 2       # Ønsket antall seksere
p = 1/6     # Sannsynlighet for sekser

P = binomial_sannsynlighet(n, k, p)

print(f"P(nøyaktig {k} seksere på {n} kast):")
print(f"P(X = {k}) = {P:.4f} = {P*100:.2f}%")`}
                difficulty="medium"
                testCases={[
                  { expectedOutput: "0.29", matchMode: 'contains' }
                ]}
                hints={["P(X=2) = C(12,2) × (1/6)² × (5/6)¹⁰ ≈ 0.2961"]}
                storageKey="8-2-ex2"
                chapterId="8-2"
                exerciseId="8-2-2"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 8.2.3: Flervalgstest"
                description={`En test har 10 flervalgsoppgaver med 4 alternativ hver.
Hvis du gjetter tilfeldig på alle, hva er sannsynligheten for å få nøyaktig 5 riktige?
(p = 0.25 per oppgave)`}
                initialCode={`def fakultet(n):
    if n <= 1:
        return 1
    resultat = 1
    for i in range(2, n + 1):
        resultat *= i
    return resultat

def binomial(n, k):
    return fakultet(n) // (fakultet(k) * fakultet(n - k))

def binomial_sannsynlighet(n, k, p):
    C = binomial(n, k)
    return C * (p ** k) * ((1 - p) ** (n - k))

n = 10      # Antall oppgaver
k = 5       # Ønsket antall riktige
p = 0.25    # Sannsynlighet per oppgave

P = binomial_sannsynlighet(n, k, p)

print(f"Flervalgstest: {n} oppgaver, gjetter tilfeldig")
print(f"P(nøyaktig {k} riktige) = {P:.4f} = {P*100:.2f}%")`}
                difficulty="medium"
                testCases={[
                  { expectedOutput: "0.05", matchMode: 'contains' }
                ]}
                hints={[
                  "P(X=5) = C(10,5) × 0.25⁵ × 0.75⁵ ≈ 0.0584"
                ]}
                storageKey="8-2-ex3"
                chapterId="8-2"
                exerciseId="8-2-3"
              />
            </div>
          </section>

          <section className="mb-12">
            <Card className="bg-purple-500/5 border-purple-500/20">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Oppsummering</h2>
                <div className="space-y-2">
                  <p>✓ <strong>Binomialkoeffisient</strong>: C(n,k) = n! / (k! × (n-k)!)</p>
                  <p>✓ <strong>Binomialsannsynlighet</strong>: P(X=k) = C(n,k) × p^k × (1-p)^(n-k)</p>
                  <p>✓ Brukes for n uavhengige forsøk med to utfall</p>
                  <p>✓ Summen av alle P(X=k) er alltid 1.0</p>
                  <p>✓ C(n,k) brukes når rekkefølge ikke betyr noe</p>
                </div>
              </CardContent>
            </Card>
          </section>

          <ChapterNavigation currentChapterId="8-2" />
        </div>
      </div>
    </BookLayout>
  );
}
