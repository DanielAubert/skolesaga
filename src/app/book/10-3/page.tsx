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

export default function Chapter103Page() {
  useKeyboardNavigation('10-3');

  return (
    <BookLayout currentChapterId="10-3">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="10-3" />
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">Lærebok</Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 10.3</span>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-700/10 rounded-lg">
                <BarChart3 className="h-6 w-6 text-purple-700" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 10.3</p>
                  <Badge variant="outline" className="text-purple-700 border-purple-700">S2</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">Hypotesetesting</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Lær hvordan du tester påstander om populasjoner ved hjelp av statistiske hypotesetester.
            </p>
          </div>

          {/* Section 1: Hva er hypotesetesting? */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Hva er hypotesetesting?</h2>

            <p className="text-lg mb-6">
              Hypotesetesting er en metode for å avgjøre om en påstand om en populasjon
              er rimelig basert på data fra et utvalg. Vi bruker dette til å teste om
              en observert forskjell er reell eller bare tilfeldig.
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">De to hypotesene:</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Nullhypotese (H₀)</p>
                    <p className="text-muted-foreground">
                      Påstanden vi tester - ofte at det ikke er noen effekt eller forskjell.
                      Eksempel: &quot;Gjennomsnittet er lik 100&quot;
                    </p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Alternativ hypotese (H₁)</p>
                    <p className="text-muted-foreground">
                      Det vi tror kan være sant hvis H₀ er feil.
                      Eksempel: &quot;Gjennomsnittet er forskjellig fra 100&quot;
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <InfoBox type="info" title="Eksempel">
              En lærer hevder at gjennomsnittlig poengsum på en test er 75.
              Vi tar et utvalg og finner gjennomsnitt 82. Er dette bare tilfeldig variasjon,
              eller er den virkelige gjennomsnittspoengsum høyere enn 75?
            </InfoBox>
          </section>

          {/* Section 2: Z-verdi for hypotesetesting */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Beregne z-verdi</h2>

            <p className="text-lg mb-6">
              For å teste hypotesen beregner vi en z-verdi som måler hvor mange
              standardfeil observasjonen er fra det hypotesen påstår:
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">Formel for z-verdi:</h3>
                <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg text-center">
                  <p className="text-xl mb-2">
                    z = (x̄ - μ₀) / SE
                  </p>
                  <p className="text-sm text-muted-foreground">
                    der x̄ = observert gjennomsnitt<br />
                    μ₀ = hypotesens påstand<br />
                    SE = standardfeil = s / √n
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Teste om gjennomsnitt er 75"
                initialCode={`import math

# Data fra utvalg
data = [82, 78, 85, 80, 77, 83, 79, 84, 81, 86]
n = len(data)

# Beregn statistikk
x_bar = sum(data) / n
avvik = [(x - x_bar)**2 for x in data]
s = math.sqrt(sum(avvik) / (n - 1))
SE = s / math.sqrt(n)

# Nullhypotese
mu_0 = 75  # Påstanden vi tester

# Beregn z-verdi
z = (x_bar - mu_0) / SE

print(f"Utvalg: n = {n}")
print(f"Observert gjennomsnitt: x̄ = {x_bar:.2f}")
print(f"Standardavvik: s = {s:.2f}")
print(f"Standardfeil: SE = {SE:.2f}")
print(f"\\nNullhypotese: μ = {mu_0}")
print(f"Z-verdi: z = {z:.2f}")
print(f"\\nObservasjonen er {z:.2f} standardfeil fra hypotesen")`}
                height="450px"
                storageKey="10-3-z-test-example"
              />
            </div>

            <InfoBox type="tip">
              Jo større |z|, jo mer usannsynlig er nullhypotesen.
              En z-verdi over 2 eller under -2 regnes som statistisk signifikant.
            </InfoBox>
          </section>

          {/* Section 3: Kritisk verdi og konklusjon */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Kritisk verdi og konklusjon</h2>

            <p className="text-lg mb-6">
              For en tosidig test med 5% signifikansnivå (95% konfidensgrad) er
              de kritiske verdiene ±1.96. Dette betyr:
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Hvis |z| &lt; 1.96:</strong> Vi kan IKKE forkaste H₀ (dataene er konsistente med hypotesen)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span><strong>Hvis |z| &gt; 1.96:</strong> Vi FORKASTER H₀ (dataene tyder på at hypotesen er feil)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Fullstendig hypotesetest"
                initialCode={`import math

# Data
data = [82, 78, 85, 80, 77, 83, 79, 84, 81, 86]
n = len(data)

# Beregn statistikk
x_bar = sum(data) / n
avvik = [(x - x_bar)**2 for x in data]
s = math.sqrt(sum(avvik) / (n - 1))
SE = s / math.sqrt(n)

# Hypotese
mu_0 = 75
alpha = 0.05  # Signifikansnivå
kritisk_verdi = 1.96  # For tosidig test

# Beregn z
z = (x_bar - mu_0) / SE

print("HYPOTESETEST")
print("=" * 40)
print(f"H₀: μ = {mu_0}")
print(f"H₁: μ ≠ {mu_0}")
print(f"Signifikansnivå: α = {alpha}")
print()
print(f"Observert: x̄ = {x_bar:.2f}, s = {s:.2f}")
print(f"Z-verdi: z = {z:.2f}")
print(f"Kritisk verdi: ±{kritisk_verdi}")
print()

if abs(z) > kritisk_verdi:
    print(f"Konklusjon: |{z:.2f}| > {kritisk_verdi}")
    print("Vi FORKASTER H₀")
    print(f"Det er statistisk signifikant at μ ≠ {mu_0}")
else:
    print(f"Konklusjon: |{z:.2f}| < {kritisk_verdi}")
    print("Vi kan IKKE forkaste H₀")
    print(f"Dataene er konsistente med μ = {mu_0}")`}
                height="500px"
                storageKey="10-3-full-test"
              />
            </div>
          </section>

          {/* Exercise 10.7 */}
          <div className="mt-8">
            <Exercise
              title="Oppgave 10.7: Beregn z-verdi"
              description={`En fabrikk hevder at gjennomsnittvekten på produktene deres er 500 gram.
Du tar et utvalg på 25 produkter og finner:
- x̄ = 510 gram
- s = 20 gram

a) Beregn standardfeilen.

b) Beregn z-verdien for å teste om gjennomsnittsvekten virkelig er 500 gram.

c) Er forskjellen statistisk signifikant (α = 0.05)?`}
              initialCode={`import math

# Data
x_bar = 510
s = 20
n = 25
mu_0 = 500

# Oppgave a)
SE = # Din kode her
print(f"Standardfeil: SE = {SE:.2f}")

# Oppgave b)
z = # Din kode her
print(f"Z-verdi: z = {z:.2f}")

# Oppgave c)
kritisk_verdi = 1.96
print(f"\\nKritisk verdi: ±{kritisk_verdi}")

if abs(z) > kritisk_verdi:
    print("Konklusjon: Forskjellen ER statistisk signifikant")
    print("Vi forkaster H₀")
else:
    print("Konklusjon: Forskjellen er IKKE statistisk signifikant")
    print("Vi kan ikke forkaste H₀")`}
              difficulty="medium"
              testCases={[
                {
                  expectedOutput: "4.00",
                  description: "Standardfeilen skal være 4.00",
                  matchMode: 'contains'
                },
                {
                  expectedOutput: "2.50",
                  description: "Z-verdien skal være 2.50",
                  matchMode: 'contains'
                },
                {
                  expectedOutput: "statistisk signifikant",
                  description: "Skal konkludere at forskjellen er signifikant",
                  matchMode: 'contains'
                }
              ]}
              hints={[
                "SE = s / √n = 20 / √25 = 20 / 5 = 4",
                "z = (x̄ - μ₀) / SE = (510 - 500) / 4 = 2.5",
                "2.5 > 1.96, så forskjellen er signifikant"
              ]}
              storageKey="10-3-exercise-1"
              chapterId="10-3"
              exerciseId="10-3-exercise-1"
            />
          </div>

          {/* Exercise 10.8 */}
          <div className="mt-8">
            <Exercise
              title="Oppgave 10.8: Fullstendig test"
              description={`En skole hevder at gjennomsnittlig karakteren deres er 4.0.
Et utvalg på 40 elever gir:
- x̄ = 3.7
- s = 0.8

Utfør en hypotesetest på 5% signifikansnivå.`}
              initialCode={`import math

# Data
x_bar = 3.7
s = 0.8
n = 40
mu_0 = 4.0

# Beregn SE og z
SE = s / math.sqrt(n)
z = (x_bar - mu_0) / SE

print("HYPOTESETEST")
print("=" * 40)
print(f"H₀: μ = {mu_0}")
print(f"H₁: μ ≠ {mu_0}")
print(f"\\nObservert: x̄ = {x_bar}, s = {s}, n = {n}")
print(f"Standardfeil: SE = {SE:.4f}")
print(f"Z-verdi: z = {z:.2f}")
print(f"Kritisk verdi: ±1.96")
print()

# Din konklusjon her
if abs(z) > 1.96:
    print("Konklusjon: Vi FORKASTER H₀")
    print("Gjennomsnittskarakteren er signifikant lavere enn 4.0")
else:
    print("Konklusjon: Vi kan IKKE forkaste H₀")
    print("Dataene er konsistente med μ = 4.0")`}
              difficulty="medium"
              testCases={[
                {
                  expectedOutput: "-2.37",
                  description: "Z-verdien skal være omtrent -2.37",
                  matchMode: 'contains'
                },
                {
                  expectedOutput: "FORKASTER",
                  description: "Skal forkaste nullhypotesen",
                  matchMode: 'contains'
                }
              ]}
              hints={[
                "SE = 0.8 / √40 ≈ 0.126",
                "z = (3.7 - 4.0) / 0.126 ≈ -2.37",
                "|-2.37| > 1.96, så vi forkaster H₀"
              ]}
              storageKey="10-3-exercise-2"
              chapterId="10-3"
              exerciseId="10-3-exercise-2"
            />
          </div>

          {/* Exercise 10.9 */}
          <div className="mt-8">
            <Exercise
              title="Oppgave 10.9: Analyse av datasett"
              description={`Gitt følgende reaksjonstider (i millisekunder):

\`data = [245, 238, 252, 241, 248, 255, 239, 250, 244, 247, 251, 242]\`

Test om gjennomsnittlig reaksjonstid er 250 ms.

a) Beregn x̄, s, og SE.

b) Beregn z-verdien.

c) Konkluder ved α = 0.05.`}
              initialCode={`import math

data = [245, 238, 252, 241, 248, 255, 239, 250, 244, 247, 251, 242]
n = len(data)
mu_0 = 250

# Oppgave a)
x_bar = sum(data) / n
avvik = [(x - x_bar)**2 for x in data]
s = math.sqrt(sum(avvik) / (n - 1))
SE = s / math.sqrt(n)

print(f"Gjennomsnitt: x̄ = {x_bar:.2f} ms")
print(f"Standardavvik: s = {s:.2f} ms")
print(f"Standardfeil: SE = {SE:.2f} ms")

# Oppgave b)
z = (x_bar - mu_0) / SE

print(f"\\nH₀: μ = {mu_0} ms")
print(f"Z-verdi: z = {z:.2f}")

# Oppgave c)
if abs(z) > 1.96:
    print(f"\\n|{z:.2f}| > 1.96")
    print("Vi FORKASTER H₀")
    print(f"Reaksjonstiden er signifikant forskjellig fra {mu_0} ms")
else:
    print(f"\\n|{z:.2f}| < 1.96")
    print("Vi kan IKKE forkaste H₀")
    print(f"Dataene er konsistente med μ = {mu_0} ms")`}
              difficulty="vanskelig"
              testCases={[
                {
                  expectedOutput: "246",
                  description: "Gjennomsnittet skal være omtrent 246",
                  matchMode: 'contains'
                },
                {
                  expectedOutput: "IKKE forkaste",
                  description: "Skal ikke forkaste H₀",
                  matchMode: 'contains'
                }
              ]}
              hints={[
                "x̄ ≈ 246 ms",
                "s ≈ 5.2 ms",
                "z ≈ -2.67",
                "|-2.67| > 1.96, så vi forkaster H₀"
              ]}
              storageKey="10-3-exercise-3"
              chapterId="10-3"
              exerciseId="10-3-exercise-3"
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
                    <span>Hypotesetesting tester om en påstand (H₀) er rimelig</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-700 font-bold">✓</span>
                    <span>Z-verdi: z = (x̄ - μ₀) / SE måler avstand fra hypotesen</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-700 font-bold">✓</span>
                    <span>Hvis |z| &gt; 1.96, forkaster vi H₀ (5% signifikansnivå)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-700 font-bold">✓</span>
                    <span>Statistisk signifikans betyr at forskjellen neppe skyldes tilfeldigheter</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <ChapterNavigation currentChapterId="10-3" />
        </div>
      </div>
    </BookLayout>
  );
}
