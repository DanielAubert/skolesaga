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
import { TrendingUp } from "lucide-react";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";

export default function Chapter72Page() {
  useKeyboardNavigation('7-2');

  return (
    <BookLayout currentChapterId="7-2">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="7-2" />
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">Lærebok</Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 7.2</span>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-500/10 rounded-lg">
                <TrendingUp className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 7.2</p>
                  <Badge variant="outline" className="text-orange-600">2P</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">Standardavvik</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Lær om spredning, varians og standardavvik med Python og math-biblioteket.
            </p>
          </div>

          {/* Section 1: Hva er spredning */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Hva er spredning?</h2>

            <p className="text-lg mb-6">
              Spredning beskriver hvor mye dataene varierer rundt gjennomsnittet. To datasett
              kan ha samme gjennomsnitt, men helt forskjellig spredning.
            </p>

            <PythonRunner
              title="Sammenligne spredning"
              initialCode={`# To datasett med samme gjennomsnitt
datasett1 = [48, 49, 50, 51, 52]  # Lav spredning
datasett2 = [10, 30, 50, 70, 90]  # Høy spredning

snitt1 = sum(datasett1) / len(datasett1)
snitt2 = sum(datasett2) / len(datasett2)

print("Datasett 1:", datasett1)
print(f"Gjennomsnitt: {snitt1}")
print()
print("Datasett 2:", datasett2)
print(f"Gjennomsnitt: {snitt2}")
print()
print("Begge har samme gjennomsnitt,")
print("men datasett 2 har mye større spredning!")`}
              height="320px"
              storageKey="7-2-spredning"
            />

            <InfoBox type="info">
              Standardavvik er det vanligste målet på spredning. Det forteller hvor langt
              verdiene typisk ligger fra gjennomsnittet.
            </InfoBox>
          </section>

          {/* Section 2: Varians og standardavvik */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Beregne varians og standardavvik</h2>

            <p className="text-lg mb-6">
              <strong>Varians</strong> er gjennomsnittlig kvadratavstand fra snittet:
              σ² = Σ(x - μ)² / n
              <br />
              <strong>Standardavvik</strong> er kvadratroten av variansen:
              σ = √(varians)
            </p>

            <PythonRunner
              title="Beregne standardavvik"
              initialCode={`import math

def standardavvik(data):
    n = len(data)
    snitt = sum(data) / n

    # Beregn varians
    varians = sum((x - snitt)**2 for x in data) / n

    # Standardavvik er kvadratroten av varians
    std = math.sqrt(varians)

    return snitt, varians, std

# Testdata: Testresultater
poeng = [72, 85, 68, 90, 78, 82, 75]

snitt, var, std = standardavvik(poeng)

print(f"Data: {poeng}")
print(f"Gjennomsnitt: {snitt:.2f}")
print(f"Varians: {var:.2f}")
print(f"Standardavvik: {std:.2f}")`}
              height="360px"
              storageKey="7-2-standardavvik"
            />
          </section>

          {/* Section 3: math.sqrt() */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">math-biblioteket</h2>

            <p className="text-lg mb-6">
              For å beregne kvadratrot bruker vi <code>math.sqrt()</code> fra math-biblioteket.
              Dette må importeres først.
            </p>

            <PythonRunner
              title="Bruke math.sqrt()"
              initialCode={`import math

# Eksempler på math.sqrt()
tall = [4, 9, 16, 25, 100]

print("Kvadratrøtter:")
for t in tall:
    rot = math.sqrt(t)
    print(f"√{t} = {rot}")

print()
print("Andre nyttige math-funksjoner:")
print(f"math.pi = {math.pi:.4f}")
print(f"math.e = {math.e:.4f}")
print(f"math.pow(2, 3) = {math.pow(2, 3)}")`}
              height="320px"
              storageKey="7-2-math-sqrt"
            />

            <InfoBox type="tip" title="import math">
              Biblioteket <code>math</code> inneholder mange matematiske funksjoner:
              sqrt(), pow(), sin(), cos(), log(), osv.
            </InfoBox>
          </section>

          {/* Exercises */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Oppgaver</h2>

            <div className="mb-8">
              <Exercise
                title="Oppgave 7.2.1: Beregn standardavvik"
                description={`For datasettet [2, 4, 4, 4, 5, 5, 7, 9], beregn:
- Gjennomsnitt
- Varians
- Standardavvik`}
                initialCode={`import math

data = [2, 4, 4, 4, 5, 5, 7, 9]
n = len(data)
snitt = sum(data) / n

# Beregn varians
varians = sum((x - snitt)**2 for x in data) / n

# Beregn standardavvik
stdavvik = math.sqrt(varians)

print(f"Gjennomsnitt: {snitt}")
print(f"Varians: {varians}")
print(f"Standardavvik: {stdavvik:.2f}")`}
                difficulty="medium"
                testCases={[
                  { expectedOutput: "Gjennomsnitt: 5", matchMode: 'contains' },
                  { expectedOutput: "Varians: 4", matchMode: 'contains' },
                  { expectedOutput: "Standardavvik: 2.00", matchMode: 'contains' }
                ]}
                hints={[
                  "Snitt = 5",
                  "Varians = ((2-5)² + (4-5)² + ... + (9-5)²) / 8 = 4",
                  "Standardavvik = √4 = 2"
                ]}
                storageKey="7-2-ex1"
                chapterId="7-2"
                exerciseId="7-2-1"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 7.2.2: Sammenlign to grupper"
                description={`To grupper tok samme test:
Gruppe A: [65, 68, 70, 72, 75]
Gruppe B: [50, 60, 70, 80, 90]

Beregn gjennomsnitt og standardavvik for begge. Hvilken gruppe har mest stabil prestasjon?`}
                initialCode={`import math

def analyser(data, navn):
    n = len(data)
    snitt = sum(data) / n
    varians = sum((x - snitt)**2 for x in data) / n
    std = math.sqrt(varians)
    print(f"{navn}:")
    print(f"  Gjennomsnitt: {snitt:.1f}")
    print(f"  Standardavvik: {std:.2f}")
    print()

gruppe_a = [65, 68, 70, 72, 75]
gruppe_b = [50, 60, 70, 80, 90]

analyser(gruppe_a, "Gruppe A")
analyser(gruppe_b, "Gruppe B")

print("Gruppe A har lavere standardavvik = mer stabil")`}
                difficulty="medium"
                testCases={[
                  { expectedOutput: "70.0", matchMode: 'contains' },
                  { expectedOutput: "stabil", matchMode: 'contains' }
                ]}
                hints={["Lavere standardavvik = mindre spredning = mer stabil"]}
                storageKey="7-2-ex2"
                chapterId="7-2"
                exerciseId="7-2-2"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 7.2.3: Variasjonskoeffisient"
                description={`Variasjonskoeffisienten er CV = (std/snitt) × 100%.
Den brukes til å sammenligne spredning når datasettene har ulike størrelser.

Beregn CV for datasettet [100, 110, 120, 130].`}
                initialCode={`import math

data = [100, 110, 120, 130]
n = len(data)
snitt = sum(data) / n
varians = sum((x - snitt)**2 for x in data) / n
std = math.sqrt(varians)

# Variasjonskoeffisient
cv = (std / snitt) * 100

print(f"Gjennomsnitt: {snitt:.1f}")
print(f"Standardavvik: {std:.2f}")
print(f"Variasjonskoeffisient: {cv:.2f}%")`}
                difficulty="vanskelig"
                testCases={[
                  { expectedOutput: "115.0", matchMode: 'contains' },
                  { expectedOutput: "Variasjonskoeffisient:", matchMode: 'contains' }
                ]}
                hints={["CV = (std/snitt) × 100"]}
                storageKey="7-2-ex3"
                chapterId="7-2"
                exerciseId="7-2-3"
              />
            </div>
          </section>

          <section className="mb-12">
            <Card className="bg-orange-500/5 border-orange-500/20">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Oppsummering</h2>
                <div className="space-y-2">
                  <p>✓ <strong>Spredning</strong>: mål på variasjon i data</p>
                  <p>✓ <strong>Varians</strong>: σ² = Σ(x - μ)² / n</p>
                  <p>✓ <strong>Standardavvik</strong>: σ = √(varians)</p>
                  <p>✓ <strong>math.sqrt()</strong>: beregner kvadratrot</p>
                  <p>✓ Lavt standardavvik = data nær gjennomsnittet</p>
                </div>
              </CardContent>
            </Card>
          </section>

          <ChapterNavigation currentChapterId="7-2" />
        </div>
      </div>
    </BookLayout>
  );
}
