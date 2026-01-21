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
import { Code } from "lucide-react";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";

export default function Chapter24Page() {
  useKeyboardNavigation('2-4');

  return (
    <BookLayout currentChapterId="2-4">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          {/* Progress Bar */}
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="2-4" />
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">
              Lærebok
            </Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 2.4</span>
          </div>

          {/* Chapter Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <Code className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 2.4</p>
                  <Badge variant="outline" className="text-green-600 border-green-600">8. klasse</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Løkker
                </h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              I dette kapitlet lærer du hvordan du kan få programmet til å gjenta
              kode mange ganger uten å skrive den om og om igjen.
            </p>
          </div>

          {/* Section 1: Hva er en løkke? */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Hva er en løkke?</h2>

            <p className="text-lg mb-6">
              En <strong>løkke</strong> er en måte å gjenta kode flere ganger.
              I stedet for å skrive samme kode 10 ganger, kan vi bruke en løkke
              som sier &quot;gjør dette 10 ganger&quot;.
            </p>

            <Card className="mb-6 bg-muted/50">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Uten løkke (mye skriving):</h3>
                <div className="bg-background p-3 rounded-lg font-mono text-sm">
                  <code>print(&quot;Hei!&quot;)</code><br />
                  <code>print(&quot;Hei!&quot;)</code><br />
                  <code>print(&quot;Hei!&quot;)</code><br />
                  <code>print(&quot;Hei!&quot;)</code><br />
                  <code>print(&quot;Hei!&quot;)</code><br />
                  <span className="text-muted-foreground">... og så videre ...</span>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6 bg-muted/50">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Med løkke (smart!):</h3>
                <div className="bg-background p-3 rounded-lg font-mono text-sm">
                  <code>for i in range(10):</code><br />
                  <code className="ml-4">    print(&quot;Hei!&quot;)</code>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 2: for-løkke med range() */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">for-løkke med range()</h2>

            <p className="text-lg mb-6">
              Den vanligste måten å lage en løkke på er med{' '}
              <code className="bg-muted px-1 rounded">for</code> og{' '}
              <code className="bg-muted px-1 rounded">range()</code>.
            </p>

            <PythonRunner
              title="Eksempel: Telle fra 1 til 10"
              initialCode={`# Telle fra 1 til 10
for tall in range(1, 11):
    print(tall)

print("Ferdig med å telle!")`}
              height="240px"
              storageKey="2-4-telle-1-10"
            />

            <div className="mt-6">
              <InfoBox type="info" title="Hvordan range() fungerer">
                <ul className="list-disc list-inside space-y-1">
                  <li><code>range(5)</code> - Tallene 0, 1, 2, 3, 4 (5 tall)</li>
                  <li><code>range(1, 6)</code> - Tallene 1, 2, 3, 4, 5</li>
                  <li><code>range(0, 10, 2)</code> - Tallene 0, 2, 4, 6, 8 (steg på 2)</li>
                </ul>
              </InfoBox>
            </div>

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Forskjellige range()-varianter"
                initialCode={`# Fra 0 til 4
print("range(5):")
for i in range(5):
    print(i)

print()

# Fra 10 til 15
print("range(10, 16):")
for i in range(10, 16):
    print(i)

print()

# Partall fra 0 til 10
print("range(0, 11, 2):")
for i in range(0, 11, 2):
    print(i)`}
                height="360px"
                storageKey="2-4-range-varianter"
              />
            </div>
          </section>

          {/* Section 3: Bruke løkker til beregninger */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Bruke løkker til beregninger</h2>

            <p className="text-lg mb-6">
              Løkker er nyttige for å gjøre mange beregninger.
            </p>

            <PythonRunner
              title="Eksempel: Summer tall fra 1 til n"
              initialCode={`# Summer alle tall fra 1 til 10
n = 10
summen = 0

for tall in range(1, n + 1):
    summen = summen + tall
    print(f"Legger til {tall}, summen er nå {summen}")

print()
print("Total sum:", summen)`}
              height="280px"
              storageKey="2-4-sum-tall"
            />

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Gangetabellen"
                initialCode={`# Skrive ut 5-gangen
tall = 5

print(f"Gangetabellen for {tall}:")
print("-" * 20)

for i in range(1, 11):
    resultat = tall * i
    print(f"{tall} × {i} = {resultat}")`}
                height="280px"
                storageKey="2-4-gangetabell"
              />
            </div>
          </section>

          {/* Section 4: while-løkke */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">while-løkke (kort intro)</h2>

            <p className="text-lg mb-6">
              En <code className="bg-muted px-1 rounded">while</code>-løkke gjentar kode
              så lenge en betingelse er sann. Den er som en if-setning som gjentar seg selv.
            </p>

            <Card className="mb-6 bg-muted/50">
              <CardContent className="pt-6">
                <div className="font-mono text-sm bg-background p-4 rounded-lg">
                  <code>while betingelse:</code><br />
                  <code className="ml-4">    # Dette gjentas så lenge betingelsen er sann</code>
                </div>
              </CardContent>
            </Card>

            <PythonRunner
              title="Eksempel: Telle ned fra 5"
              initialCode={`# Nedtelling
tall = 5

while tall > 0:
    print(tall)
    tall = tall - 1  # Trekk fra 1

print("Start!")`}
              height="220px"
              storageKey="2-4-while-nedtelling"
            />

            <div className="mt-6">
              <InfoBox type="warning" title="Pass på uendelige løkker!">
                Hvis betingelsen alltid er sann, vil løkken aldri stoppe. Sørg alltid for
                at betingelsen kan bli usann!
              </InfoBox>
            </div>
          </section>

          {/* Section 5: Praktiske eksempler */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Praktiske eksempler</h2>

            <PythonRunner
              title="Eksempel: Beregn renter over flere år"
              initialCode={`# Sparing med rente
startbelop = 1000
rente = 5  # prosent

print(f"Startbeløp: {startbelop} kr")
print(f"Rente: {rente}%")
print("-" * 30)

belop = startbelop

for ar in range(1, 6):
    # Legg til renter
    belop = belop * (1 + rente/100)
    print(f"År {ar}: {belop:.2f} kr")`}
              height="320px"
              storageKey="2-4-renter"
            />

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Finn alle partall mellom 1 og 20"
                initialCode={`# Finn alle partall
print("Partall mellom 1 og 20:")

for tall in range(1, 21):
    if tall % 2 == 0:
        print(tall)`}
                height="220px"
                storageKey="2-4-partall"
              />
            </div>
          </section>

          {/* Exercises */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Oppgaver</h2>

            {/* Exercise 2.4.1 */}
            <div className="mb-8">
              <Exercise
                title="Oppgave 2.4.1: Telle fra 1 til 5"
                description={`Lag et program som teller fra 1 til 5 og skriver ut hvert tall.

Bruk en for-løkke med range().`}
                initialCode={`# Tell fra 1 til 5

`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "1\n2\n3\n4\n5",
                    description: "Teller fra 1 til 5",
                    matchMode: 'exact'
                  }
                ]}
                hints={[
                  "for tall in range(1, 6):",
                  "print(tall)",
                  "Husk innrykk!"
                ]}
                storageKey="2-4-exercise-1"
                chapterId="2-4"
                exerciseId="2-4-1"
              />
            </div>

            {/* Exercise 2.4.2 */}
            <div className="mb-8">
              <Exercise
                title="Oppgave 2.4.2: Skriv ut gangetabellen"
                description={`Lag et program som skriver ut 3-gangen fra 1 til 10.

Output skal være:
3 × 1 = 3
3 × 2 = 6
... og så videre til 3 × 10 = 30`}
                initialCode={`# Gangetabellen for 3
tall = 3

for i in range(1, 11):
    # Beregn og skriv ut
`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "3 × 1 = 3",
                    description: "Første linje",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "3 × 10 = 30",
                    description: "Siste linje",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "resultat = tall * i",
                  "print(f\"{tall} × {i} = {resultat}\")",
                  "Bruk f-string for fin formatering"
                ]}
                storageKey="2-4-exercise-2"
                chapterId="2-4"
                exerciseId="2-4-2"
              />
            </div>

            {/* Exercise 2.4.3 */}
            <div className="mb-8">
              <Exercise
                title="Oppgave 2.4.3: Summer tall fra 1 til n"
                description={`Lag et program som summerer alle tall fra 1 til 10.

Skriv ut: "Summen av tall fra 1 til 10 er: 55"`}
                initialCode={`# Summer tall fra 1 til 10
n = 10
summen = 0

# Bruk en løkke for å legge sammen tallene


# Skriv ut resultatet
print(f"Summen av tall fra 1 til {n} er: {summen}")`}
                difficulty="medium"
                testCases={[
                  {
                    expectedOutput: "Summen av tall fra 1 til 10 er: 55",
                    description: "Beregner summen korrekt",
                    matchMode: 'exact'
                  }
                ]}
                hints={[
                  "for i in range(1, n + 1):",
                  "summen = summen + i",
                  "1+2+3+4+5+6+7+8+9+10 = 55"
                ]}
                storageKey="2-4-exercise-3"
                chapterId="2-4"
                exerciseId="2-4-3"
              />
            </div>
          </section>

          {/* Summary */}
          <section className="mb-12">
            <Card className="bg-green-500/5 border-green-500/20">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Oppsummering</h2>
                <div className="space-y-3">
                  <p className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Løkker</strong> lar oss gjenta kode mange ganger</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>for-løkke</strong> med range() er den vanligste</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>range(n)</strong> gir tallene fra 0 til n-1</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>while-løkke</strong> gjentar så lenge en betingelse er sann</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <ChapterNavigation currentChapterId="2-4" />
        </div>
      </div>
    </BookLayout>
  );
}
