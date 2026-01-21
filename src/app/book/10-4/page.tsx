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

export default function Chapter104Page() {
  useKeyboardNavigation('10-4');

  return (
    <BookLayout currentChapterId="10-4">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="10-4" />
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">Lærebok</Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 10.4</span>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-700/10 rounded-lg">
                <BarChart3 className="h-6 w-6 text-purple-700" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 10.4</p>
                  <Badge variant="outline" className="text-purple-700 border-purple-700">S2</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">Prosjekt: Statistisk inferens</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Gjennomfør komplette statistiske analyser med konfidensintervaller og hypotesetester.
            </p>
          </div>

          {/* Section 1: Komplett statistisk analyse */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Komplett statistisk analyse</h2>

            <p className="text-lg mb-6">
              I virkelige situasjoner kombinerer vi ofte flere statistiske metoder for å
              få en fullstendig forståelse av dataene. Dette inkluderer:
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <ol className="list-decimal list-inside space-y-3">
                  <li><strong>Deskriptiv statistikk:</strong> Beregne gjennomsnitt, standardavvik, etc.</li>
                  <li><strong>Visualisering:</strong> Lage grafer for å se mønstre i dataene</li>
                  <li><strong>Konfidensintervall:</strong> Estimere populasjonsparametre med usikkerhet</li>
                  <li><strong>Hypotesetesting:</strong> Teste spesifikke påstander om dataene</li>
                  <li><strong>Konklusjon:</strong> Tolke resultatene i kontekst</li>
                </ol>
              </CardContent>
            </Card>

            <InfoBox type="info" title="Arbeidsflyt">
              En god arbeidsflyt er: Først utforsk dataene (deskriptiv statistikk), deretter
              estimer (konfidensintervall), og til slutt test påstander (hypotesetesting).
            </InfoBox>
          </section>

          {/* Section 2: Eksempel - Komplett analyse */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Eksempel: Analyse av batterilevetid</h2>

            <p className="text-lg mb-6">
              En produsent hevder at batteriene deres varer 1000 timer i gjennomsnitt.
              Vi tester et utvalg på 20 batterier.
            </p>

            <div className="mt-6">
              <PythonRunner
                title="Fullstendig statistisk analyse"
                initialCode={`import math

# Data: batterilevetid i timer
data = [985, 1020, 995, 1010, 980, 1015, 990, 1005, 1000, 1025,
        970, 1030, 995, 1010, 985, 1020, 1005, 990, 1015, 980]

print("=" * 50)
print("KOMPLETT STATISTISK ANALYSE")
print("=" * 50)

# 1. DESKRIPTIV STATISTIKK
n = len(data)
x_bar = sum(data) / n
avvik = [(x - x_bar)**2 for x in data]
s = math.sqrt(sum(avvik) / (n - 1))
SE = s / math.sqrt(n)

print("\\n1. DESKRIPTIV STATISTIKK")
print("-" * 50)
print(f"Utvalgsstørrelse: n = {n}")
print(f"Gjennomsnitt: x̄ = {x_bar:.2f} timer")
print(f"Standardavvik: s = {s:.2f} timer")
print(f"Standardfeil: SE = {SE:.2f} timer")
print(f"Minimum: {min(data)} timer")
print(f"Maksimum: {max(data)} timer")

# 2. KONFIDENSINTERVALL
nedre = x_bar - 1.96 * SE
ovre = x_bar + 1.96 * SE

print("\\n2. KONFIDENSINTERVALL (95%)")
print("-" * 50)
print(f"Intervall: [{nedre:.2f}, {ovre:.2f}] timer")
print(f"Tolkning: Med 95% sikkerhet ligger den sanne")
print(f"gjennomsnittlige levetiden mellom {nedre:.1f} og {ovre:.1f} timer")

# 3. HYPOTESETEST
mu_0 = 1000
z = (x_bar - mu_0) / SE

print("\\n3. HYPOTESETEST")
print("-" * 50)
print(f"H₀: μ = {mu_0} timer (produsentens påstand)")
print(f"H₁: μ ≠ {mu_0} timer")
print(f"Z-verdi: z = {z:.2f}")
print(f"Kritisk verdi: ±1.96 (α = 0.05)")

if abs(z) > 1.96:
    print(f"\\nKonklusjon: |{z:.2f}| > 1.96")
    print("Vi FORKASTER H₀")
    print(f"Batteriene varer signifikant forskjellig fra {mu_0} timer")
else:
    print(f"\\nKonklusjon: |{z:.2f}| < 1.96")
    print("Vi kan IKKE forkaste H₀")
    print(f"Dataene er konsistente med påstanden om {mu_0} timer")

print("\\n" + "=" * 50)`}
                height="600px"
                storageKey="10-4-full-analysis"
              />
            </div>
          </section>

          {/* Exercise 10.10 */}
          <div className="mt-8">
            <Exercise
              title="Oppgave 10.10: Analyse av internettfart"
              description={`En internettleverandør lover 100 Mbps nedlastingshastighet.
Du måler hastigheten 15 ganger (i Mbps):

\`data = [95, 102, 98, 105, 93, 100, 97, 103, 99, 101, 96, 104, 98, 100, 102]\`

a) Beregn deskriptiv statistikk (x̄, s, SE).

b) Lag et 95% konfidensintervall for den sanne hastigheten.

c) Test om den faktiske hastigheten er 100 Mbps (α = 0.05).

d) Hva er din konklusjon?`}
              initialCode={`import math

data = [95, 102, 98, 105, 93, 100, 97, 103, 99, 101, 96, 104, 98, 100, 102]

print("INTERNETTFART ANALYSE")
print("=" * 50)

# Oppgave a)
n = len(data)
x_bar = sum(data) / n
avvik = [(x - x_bar)**2 for x in data]
s = math.sqrt(sum(avvik) / (n - 1))
SE = s / math.sqrt(n)

print(f"\\nDeskriptiv statistikk:")
print(f"Gjennomsnitt: {x_bar:.2f} Mbps")
print(f"Standardavvik: {s:.2f} Mbps")
print(f"Standardfeil: {SE:.2f} Mbps")

# Oppgave b)
nedre = x_bar - 1.96 * SE
ovre = x_bar + 1.96 * SE

print(f"\\n95% konfidensintervall: [{nedre:.2f}, {ovre:.2f}] Mbps")

# Oppgave c)
mu_0 = 100
z = (x_bar - mu_0) / SE

print(f"\\nHypotesetest (H₀: μ = {mu_0}):")
print(f"Z-verdi: {z:.2f}")

# Oppgave d)
if abs(z) > 1.96:
    print("Konklusjon: Hastigheten er signifikant forskjellig fra 100 Mbps")
else:
    print("Konklusjon: Hastigheten er konsistent med 100 Mbps")`}
              difficulty="medium"
              testCases={[
                {
                  expectedOutput: "99",
                  description: "Gjennomsnittet skal være omtrent 99",
                  matchMode: 'contains'
                },
                {
                  expectedOutput: "konfidensintervall",
                  description: "Skal lage konfidensintervall",
                  matchMode: 'contains'
                },
                {
                  expectedOutput: "konsistent",
                  description: "Skal konkludere at 100 er konsistent med dataene",
                  matchMode: 'contains'
                }
              ]}
              hints={[
                "x̄ ≈ 99.27 Mbps",
                "s ≈ 3.49 Mbps",
                "z ≈ -0.81, som er mindre enn 1.96"
              ]}
              storageKey="10-4-exercise-1"
              chapterId="10-4"
              exerciseId="10-4-exercise-1"
            />
          </div>

          {/* Exercise 10.11 */}
          <div className="mt-8">
            <Exercise
              title="Oppgave 10.11: Sammenligne to grupper"
              description={`Sammenlign testresultater fra to klasser:

Klasse A: \`[78, 82, 75, 88, 80, 85, 79, 83, 81, 86]\`
Klasse B: \`[72, 76, 70, 80, 74, 78, 73, 77, 75, 79]\`

a) Beregn gjennomsnitt og standardavvik for begge klasser.

b) Lag 95% konfidensintervaller for begge.

c) Overlapper intervallene? Hva betyr det?`}
              initialCode={`import math

klasse_a = [78, 82, 75, 88, 80, 85, 79, 83, 81, 86]
klasse_b = [72, 76, 70, 80, 74, 78, 73, 77, 75, 79]

print("SAMMENLIGNING AV TO KLASSER")
print("=" * 50)

# Klasse A
n_a = len(klasse_a)
x_a = sum(klasse_a) / n_a
avvik_a = [(x - x_a)**2 for x in klasse_a]
s_a = math.sqrt(sum(avvik_a) / (n_a - 1))
SE_a = s_a / math.sqrt(n_a)

nedre_a = x_a - 1.96 * SE_a
ovre_a = x_a + 1.96 * SE_a

print(f"\\nKlasse A:")
print(f"  Gjennomsnitt: {x_a:.2f}")
print(f"  Standardavvik: {s_a:.2f}")
print(f"  95% KI: [{nedre_a:.2f}, {ovre_a:.2f}]")

# Klasse B
n_b = len(klasse_b)
x_b = sum(klasse_b) / n_b
avvik_b = [(x - x_b)**2 for x in klasse_b]
s_b = math.sqrt(sum(avvik_b) / (n_b - 1))
SE_b = s_b / math.sqrt(n_b)

nedre_b = x_b - 1.96 * SE_b
ovre_b = x_b + 1.96 * SE_b

print(f"\\nKlasse B:")
print(f"  Gjennomsnitt: {x_b:.2f}")
print(f"  Standardavvik: {s_b:.2f}")
print(f"  95% KI: [{nedre_b:.2f}, {ovre_b:.2f}]")

# Sjekk overlapp
if ovre_b >= nedre_a:
    print("\\nIntervallene OVERLAPPER")
    print("Vi kan ikke konkludere at klassene er signifikant forskjellige")
else:
    print("\\nIntervallene OVERLAPPER IKKE")
    print("Klasse A presterer signifikant bedre enn klasse B")`}
              difficulty="vanskelig"
              testCases={[
                {
                  expectedOutput: "81.7",
                  description: "Klasse A gjennomsnitt skal være 81.7",
                  matchMode: 'contains'
                },
                {
                  expectedOutput: "75.4",
                  description: "Klasse B gjennomsnitt skal være 75.4",
                  matchMode: 'contains'
                },
                {
                  expectedOutput: "OVERLAPPER IKKE",
                  description: "Intervallene skal ikke overlappe",
                  matchMode: 'contains'
                }
              ]}
              hints={[
                "Klasse A: x̄ = 81.7, s ≈ 4.0",
                "Klasse B: x̄ = 75.4, s ≈ 3.3",
                "Hvis intervallene ikke overlapper, er forskjellen signifikant"
              ]}
              storageKey="10-4-exercise-2"
              chapterId="10-4"
              exerciseId="10-4-exercise-2"
            />
          </div>

          {/* Exercise 10.12 */}
          <div className="mt-8">
            <Exercise
              title="Oppgave 10.12: Fritt prosjekt - Vekttap"
              description={`En vekttapsklinikk hevder at pasienter taper i gjennomsnitt 5 kg på 8 uker.
Her er vekttap (i kg) for 18 pasienter:

\`data = [4.2, 5.8, 3.9, 6.1, 4.5, 5.2, 4.8, 5.5, 3.7, 6.3,
       4.9, 5.1, 4.3, 5.9, 4.6, 5.4, 4.1, 5.7]\`

Gjennomfør en komplett statistisk analyse:

1. Beregn all relevant deskriptiv statistikk
2. Lag et 95% konfidensintervall
3. Test om gjennomsnittlig vekttap er 5 kg
4. Skriv en kort konklusjon basert på analysene

Bruk formatet fra eksemplet i kapitlet!`}
              initialCode={`import math

data = [4.2, 5.8, 3.9, 6.1, 4.5, 5.2, 4.8, 5.5, 3.7, 6.3,
        4.9, 5.1, 4.3, 5.9, 4.6, 5.4, 4.1, 5.7]

print("=" * 50)
print("VEKTTAP ANALYSE")
print("=" * 50)

# Din fullstendige analyse her
n = len(data)
x_bar = sum(data) / n
avvik = [(x - x_bar)**2 for x in data]
s = math.sqrt(sum(avvik) / (n - 1))
SE = s / math.sqrt(n)

print("\\n1. DESKRIPTIV STATISTIKK")
print("-" * 50)
print(f"Antall pasienter: n = {n}")
print(f"Gjennomsnittlig vekttap: {x_bar:.2f} kg")
print(f"Standardavvik: {s:.2f} kg")
print(f"Standardfeil: {SE:.2f} kg")
print(f"Minimum vekttap: {min(data)} kg")
print(f"Maksimum vekttap: {max(data)} kg")

print("\\n2. KONFIDENSINTERVALL (95%)")
print("-" * 50)
nedre = x_bar - 1.96 * SE
ovre = x_bar + 1.96 * SE
print(f"Intervall: [{nedre:.2f}, {ovre:.2f}] kg")

print("\\n3. HYPOTESETEST")
print("-" * 50)
mu_0 = 5
z = (x_bar - mu_0) / SE
print(f"H₀: μ = {mu_0} kg")
print(f"Z-verdi: {z:.2f}")

if abs(z) > 1.96:
    print("Konklusjon: Vi FORKASTER H₀")
else:
    print("Konklusjon: Vi kan IKKE forkaste H₀")
    print(f"Dataene er konsistente med {mu_0} kg vekttap")

print("\\n" + "=" * 50)`}
              difficulty="vanskelig"
              testCases={[
                {
                  expectedOutput: "5.0",
                  description: "Gjennomsnittet skal være nær 5",
                  matchMode: 'contains'
                },
                {
                  expectedOutput: "IKKE forkaste",
                  description: "Skal ikke forkaste H₀",
                  matchMode: 'contains'
                },
                {
                  expectedOutput: "konsistente",
                  description: "Skal konkludere at dataene er konsistente med 5 kg",
                  matchMode: 'contains'
                }
              ]}
              hints={[
                "Følg strukturen fra eksemplet",
                "x̄ ≈ 5.0 kg",
                "z-verdien vil være veldig nær 0",
                "Dataene støtter klinikkens påstand"
              ]}
              storageKey="10-4-exercise-3"
              chapterId="10-4"
              exerciseId="10-4-exercise-3"
            />
          </div>

          {/* Summary */}
          <section className="mb-12 mt-12">
            <Card className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Oppsummering - Kapittel 10</h2>
                <div className="space-y-3">
                  <p className="flex items-start gap-2">
                    <span className="text-purple-700 font-bold">✓</span>
                    <span>Normalfordelingen beskriver mange naturlige fenomener</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-700 font-bold">✓</span>
                    <span>Konfidensintervaller estimerer usikkerhet i våre estimater</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-700 font-bold">✓</span>
                    <span>Hypotesetesting lar oss teste påstander om populasjoner</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-700 font-bold">✓</span>
                    <span>Statistisk inferens kombinerer disse verktøyene til robuste analyser</span>
                  </p>
                </div>
                <div className="mt-6 p-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <p className="font-semibold mb-2">Gratulerer!</p>
                  <p className="text-sm">
                    Du har nå lært grunnleggende statistisk inferens og kan bruke Python til
                    å analysere data, lage konfidensintervaller og utføre hypotesetester.
                    Disse ferdighetene er essensielle i S2 matematikk og i mange praktiske anvendelser!
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <ChapterNavigation currentChapterId="10-4" />
        </div>
      </div>
    </BookLayout>
  );
}
