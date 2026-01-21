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
import { BarChart3 } from "lucide-react";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";

export default function Chapter101Page() {
  useKeyboardNavigation('10-1');

  return (
    <BookLayout currentChapterId="10-1">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="10-1" />
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">Lærebok</Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 10.1</span>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-700/10 rounded-lg">
                <BarChart3 className="h-6 w-6 text-purple-700" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 10.1</p>
                  <Badge variant="outline" className="text-purple-700 border-purple-700">S2</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">Normalfordeling</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Lær om normalfordelingen og hvordan du kan bruke den til å analysere data.
            </p>
          </div>

          {/* Section 1: Hva er normalfordeling? */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Hva er normalfordeling?</h2>

            <p className="text-lg mb-6">
              Normalfordelingen er en av de viktigste fordelingene i statistikk. Den beskriver
              hvordan mange naturlige fenomener er fordelt: høyde, vekt, testresultater, målefeil, osv.
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">Egenskaper ved normalfordelingen:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-700 font-bold">•</span>
                    <span>Klokkeformet kurve - symmetrisk rundt gjennomsnittet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-700 font-bold">•</span>
                    <span>Definert av to parametre: gjennomsnitt (μ) og standardavvik (σ)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-700 font-bold">•</span>
                    <span>Omtrent 68% av verdiene ligger innenfor ±1σ fra gjennomsnittet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-700 font-bold">•</span>
                    <span>Omtrent 95% av verdiene ligger innenfor ±2σ fra gjennomsnittet</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <InfoBox type="info" title="Forenklet tetthetsfunksjon">
              Den komplette formelen for normalfordelingen er avansert, men vi kan bruke
              Python til å regne ut verdier. Funksjonen involverer eksponentialfunksjonen
              e^x som vi får fra math.exp().
            </InfoBox>
          </section>

          {/* Section 2: Z-score */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Z-score: Standardisering</h2>

            <p className="text-lg mb-6">
              Z-score forteller oss hvor mange standardavvik en verdi er fra gjennomsnittet.
              Dette er veldig nyttig for å sammenligne verdier fra forskjellige datasett.
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">Formel for Z-score:</h3>
                <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg text-center">
                  <p className="text-xl">
                    z = (x - μ) / σ
                  </p>
                </div>
                <p className="text-muted-foreground mt-3 text-center">
                  der x = observert verdi, μ = gjennomsnitt, σ = standardavvik
                </p>
              </CardContent>
            </Card>

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Beregne Z-score"
                initialCode={`# IQ-tester har μ = 100 og σ = 15
mu = 100       # gjennomsnitt
sigma = 15     # standardavvik

# Personen har IQ = 130
x = 130

# Beregn Z-score
z = (x - mu) / sigma
print(f"IQ = {x}")
print(f"Gjennomsnitt = {mu}")
print(f"Standardavvik = {sigma}")
print(f"\\nZ-score = {z:.2f}")
print(f"\\nTolkning: IQ er {z:.2f} standardavvik over gjennomsnittet")

# Test flere verdier
verdier = [85, 100, 115, 130, 145]
print("\\nZ-scores for flere IQ-verdier:")
for iq in verdier:
    z = (iq - mu) / sigma
    print(f"IQ {iq}: z = {z:+.2f}")`}
                height="400px"
                storageKey="10-1-zscore-example"
              />
            </div>

            <InfoBox type="tip">
              <strong>Tolkning av Z-score:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>z = 0: Verdien er lik gjennomsnittet</li>
                <li>z = 1: Verdien er 1 standardavvik over gjennomsnittet</li>
                <li>z = -1: Verdien er 1 standardavvik under gjennomsnittet</li>
                <li>|z| &gt; 2: Verdien er uvanlig (mer enn 2σ fra gjennomsnittet)</li>
              </ul>
            </InfoBox>
          </section>

          {/* Section 3: Normalfordelingsfunksjonen */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Beregne sannsynligheter</h2>

            <p className="text-lg mb-6">
              Vi kan bruke en forenklet versjon av normalfordelingens tetthetsfunksjon
              til å visualisere fordelingen:
            </p>

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Tetthetsfunksjon"
                initialCode={`import math

def normal_pdf(x, mu, sigma):
    """Forenklet tetthetsfunksjon for normalfordeling"""
    z = (x - mu) / sigma
    return (1 / (sigma * math.sqrt(2 * math.pi))) * math.exp(-0.5 * z**2)

# Test med μ = 0 og σ = 1 (standard normalfordeling)
mu = 0
sigma = 1

print("x     f(x)")
print("-" * 20)

for i in range(-30, 31, 5):
    x = i / 10
    fx = normal_pdf(x, mu, sigma)
    stjerner = "*" * int(fx * 50)
    print(f"{x:4.1f}  {stjerner}")`}
                height="400px"
                storageKey="10-1-pdf-example"
              />
            </div>

            <p className="text-lg mt-6">
              Grafen viser den karakteristiske klokkeformen. Mest sannsynlige verdier
              er nær gjennomsnittet (x = 0).
            </p>
          </section>

          {/* Exercise 10.1 */}
          <div className="mt-8">
            <Exercise
              title="Oppgave 10.1: Beregn Z-scores"
              description={`Høyden til norske menn er normalfordelt med μ = 179 cm og σ = 7 cm.

a) Beregn Z-score for en mann som er 186 cm høy.

b) Beregn Z-score for en mann som er 165 cm høy.

c) Hvilken høyde tilsvarer z = 2?`}
              initialCode={`mu = 179      # gjennomsnittshøyde
sigma = 7     # standardavvik

# Oppgave a)
x1 = 186
z1 = (x1 - mu) / sigma
print(f"a) Høyde {x1} cm: z = {z1:.2f}")

# Oppgave b)
x2 = 165
z2 = # Din kode her
print(f"b) Høyde {x2} cm: z = {z2:.2f}")

# Oppgave c)
z3 = 2
x3 = # Løs for x når z = (x - mu) / sigma
print(f"c) z = {z3} tilsvarer høyde {x3} cm")`}
              difficulty="lett"
              testCases={[
                {
                  expectedOutput: "1.00",
                  description: "Z-score for 186 cm skal være 1.00",
                  matchMode: 'contains'
                },
                {
                  expectedOutput: "-2.00",
                  description: "Z-score for 165 cm skal være -2.00",
                  matchMode: 'contains'
                },
                {
                  expectedOutput: "193",
                  description: "z = 2 tilsvarer 193 cm",
                  matchMode: 'contains'
                }
              ]}
              hints={[
                "z = (x - mu) / sigma",
                "For oppgave b): z = (165 - 179) / 7 = -2",
                "For oppgave c): x = mu + z * sigma = 179 + 2 * 7 = 193"
              ]}
              storageKey="10-1-exercise-1"
              chapterId="10-1"
              exerciseId="10-1-exercise-1"
            />
          </div>

          {/* Exercise 10.2 */}
          <div className="mt-8">
            <Exercise
              title="Oppgave 10.2: Tetthetsfunksjon"
              description={`Lag en tetthetsfunksjon for normalfordeling og test den.

a) Implementer \`normal_pdf(x, mu, sigma)\` funksjonen.

b) Test med μ = 10, σ = 2 for verdier fra 6 til 14.

c) Hva er verdien av funksjonen ved x = μ (gjennomsnittet)?`}
              initialCode={`import math

def normal_pdf(x, mu, sigma):
    """Tetthetsfunksjon for normalfordeling"""
    z = (x - mu) / sigma
    # Din kode her
    return

# Test
mu = 10
sigma = 2

print("x     f(x)")
print("-" * 25)

for i in range(60, 141, 10):
    x = i / 10
    fx = normal_pdf(x, mu, sigma)
    print(f"{x:4.1f}  {fx:.4f}")

# Sjekk maksimumsverdien
x_max = mu
f_max = normal_pdf(x_max, mu, sigma)
print(f"\\nMaks ved x = {x_max}: f(x) = {f_max:.4f}")`}
              difficulty="medium"
              testCases={[
                {
                  expectedOutput: "0.19",
                  description: "Maksimumsverdien skal være omtrent 0.199",
                  matchMode: 'contains'
                }
              ]}
              hints={[
                "Formelen: (1 / (sigma * sqrt(2π))) * e^(-0.5 * z²)",
                "Bruk math.sqrt() for kvadratrot",
                "Bruk math.pi for π og math.exp() for e^x",
                "Ved x = μ er z = 0, så f(μ) = 1/(σ√(2π))"
              ]}
              storageKey="10-1-exercise-2"
              chapterId="10-1"
              exerciseId="10-1-exercise-2"
            />
          </div>

          {/* Exercise 10.3 */}
          <div className="mt-8">
            <Exercise
              title="Oppgave 10.3: Sammenligne fordelinger"
              description={`Sammenlign to normalfordelinger:
- Fordeling A: μ = 100, σ = 10
- Fordeling B: μ = 100, σ = 20

a) Lag tetthetsfunksjonen.

b) Beregn f(100) for begge fordelinger.

c) Hvilken fordeling er "høyere" og "smalere"? Hvorfor?`}
              initialCode={`import math

def normal_pdf(x, mu, sigma):
    z = (x - mu) / sigma
    return (1 / (sigma * math.sqrt(2 * math.pi))) * math.exp(-0.5 * z**2)

# Fordeling A
mu_a = 100
sigma_a = 10

# Fordeling B
mu_b = 100
sigma_b = 20

# Beregn ved gjennomsnittet
x = 100
f_a = normal_pdf(x, mu_a, sigma_a)
f_b = normal_pdf(x, mu_b, sigma_b)

print("Ved x = 100 (gjennomsnittet):")
print(f"Fordeling A (σ={sigma_a}): f(x) = {f_a:.4f}")
print(f"Fordeling B (σ={sigma_b}): f(x) = {f_b:.4f}")

if f_a > f_b:
    print("\\nFordeling A er høyere og smalere")
else:
    print("\\nFordeling B er høyere og smalere")

print("\\nJo mindre standardavvik, jo smalere og høyere fordeling")`}
              difficulty="medium"
              testCases={[
                {
                  expectedOutput: "Fordeling A",
                  description: "Fordeling A skal være høyere",
                  matchMode: 'contains'
                },
                {
                  expectedOutput: "smalere",
                  description: "Skal forklare at mindre σ gir smalere fordeling",
                  matchMode: 'contains'
                }
              ]}
              hints={[
                "Mindre standardavvik = smalere og høyere kurve",
                "Større standardavvik = bredere og lavere kurve",
                "Arealet under kurven er alltid 1"
              ]}
              storageKey="10-1-exercise-3"
              chapterId="10-1"
              exerciseId="10-1-exercise-3"
            />
          </div>

          {/* Summary */}
          <section className="mb-12 mt-12">
            <Card className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Oppsummering</h2>
                <div className="space-y-3">
                  <p className="flex items-start gap-2">
                    <span className="text-purple-700 font-bold">✓</span>
                    <span>Normalfordelingen er klokkeformet og symmetrisk</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-700 font-bold">✓</span>
                    <span>Z-score: z = (x - μ) / σ måler avstand fra gjennomsnittet</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-700 font-bold">✓</span>
                    <span>68% av verdiene er innenfor ±1σ, 95% innenfor ±2σ</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-700 font-bold">✓</span>
                    <span>Tetthetsfunksjonen beskriver fordelingens form</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <ChapterNavigation currentChapterId="10-1" />
        </div>
      </div>
    </BookLayout>
  );
}
