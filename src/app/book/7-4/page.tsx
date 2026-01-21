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
import { FileSpreadsheet } from "lucide-react";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";

export default function Chapter74Page() {
  useKeyboardNavigation('7-4');

  return (
    <BookLayout currentChapterId="7-4">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="7-4" />
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">Lærebok</Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 7.4</span>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-500/10 rounded-lg">
                <FileSpreadsheet className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 7.4</p>
                  <Badge variant="outline" className="text-orange-600">2P</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">Prosjekt - Statistisk analyse</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Kombiner alt du har lært: analyser datasett og simuler eksperimenter.
            </p>
          </div>

          {/* Section 1: Komplett dataanalyse */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Analyser et datasett</h2>

            <p className="text-lg mb-6">
              Her kombinerer vi alle statistiske mål vi har lært: gjennomsnitt, median,
              typetall, varians og standardavvik.
            </p>

            <PythonRunner
              title="Komplett statistikkanalyse"
              initialCode={`import math

def full_analyse(data, navn="Data"):
    n = len(data)
    sortert = sorted(data)

    # Gjennomsnitt
    snitt = sum(data) / n

    # Median
    if n % 2 == 1:
        median = sortert[n // 2]
    else:
        median = (sortert[n//2 - 1] + sortert[n//2]) / 2

    # Typetall
    frekvenser = {}
    for v in data:
        frekvenser[v] = frekvenser.get(v, 0) + 1
    typetall = max(frekvenser, key=frekvenser.get)

    # Standardavvik
    varians = sum((x - snitt)**2 for x in data) / n
    std = math.sqrt(varians)

    # Skriv ut
    print(f"=== Analyse av {navn} ===")
    print(f"Datasett: {data}")
    print(f"Antall verdier: {n}")
    print(f"Minimum: {min(data)}")
    print(f"Maksimum: {max(data)}")
    print(f"Gjennomsnitt: {snitt:.2f}")
    print(f"Median: {median}")
    print(f"Typetall: {typetall}")
    print(f"Standardavvik: {std:.2f}")

# Testdata: Daglig temperatur
temp = [18, 21, 19, 23, 20, 22, 19, 21, 20, 19]
full_analyse(temp, "Temperatur (°C)")`}
              height="480px"
              storageKey="7-4-full-analyse"
            />
          </section>

          {/* Section 2: Simulering av eksperiment */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Simuler et eksperiment</h2>

            <p className="text-lg mb-6">
              La oss simulere et komplekst eksperiment: kaste 3 terninger 10 000 ganger
              og analysere summen.
            </p>

            <PythonRunner
              title="Eksperiment med 3 terninger"
              initialCode={`import random

def simuler_tre_terninger(antall):
    summer = []

    for _ in range(antall):
        t1 = random.randint(1, 6)
        t2 = random.randint(1, 6)
        t3 = random.randint(1, 6)
        summer.append(t1 + t2 + t3)

    # Analyser resultater
    snitt = sum(summer) / len(summer)

    # Tell frekvenser
    frekvenser = {}
    for s in summer:
        frekvenser[s] = frekvenser.get(s, 0) + 1

    print(f"Simulert {antall} kast med 3 terninger")
    print(f"Gjennomsnittlig sum: {snitt:.2f}")
    print(f"Teoretisk snitt: 10.5")
    print()
    print("Frekvenser (topp 5):")
    for sum_verdi, antall in sorted(frekvenser.items(),
                                    key=lambda x: x[1],
                                    reverse=True)[:5]:
        prosent = (antall / len(summer)) * 100
        print(f"  Sum {sum_verdi}: {prosent:.2f}%")

simuler_tre_terninger(10000)`}
              height="440px"
              storageKey="7-4-tre-terninger"
            />

            <InfoBox type="info">
              Med 3 terninger er summen 10 og 11 mest sannsynlig (ca. 12.5% hver),
              mens 3 og 18 er sjeldnest (ca. 0.46% hver).
            </InfoBox>
          </section>

          {/* Section 3: Kombinert prosjekt */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Storprosjekt: Sammenlign to strategier</h2>

            <PythonRunner
              title="Sammenlign myntkast-strategier"
              initialCode={`import random
import math

def strategi_1(antall):
    """Sats på mynt hver gang"""
    vunnet = 0
    for _ in range(antall):
        kast = random.randint(0, 1)
        if kast == 0:  # Mynt
            vunnet += 1
    return vunnet

def strategi_2(antall):
    """Bytt mellom mynt og kron"""
    vunnet = 0
    for i in range(antall):
        kast = random.randint(0, 1)
        gjett = i % 2  # Bytt hver gang
        if kast == gjett:
            vunnet += 1
    return vunnet

# Simuler begge strategier 1000 ganger
antall_kast = 100
simuleringer = 1000

resultater_s1 = []
resultater_s2 = []

for _ in range(simuleringer):
    resultater_s1.append(strategi_1(antall_kast))
    resultater_s2.append(strategi_2(antall_kast))

# Analyser
snitt_s1 = sum(resultater_s1) / len(resultater_s1)
snitt_s2 = sum(resultater_s2) / len(resultater_s2)

print(f"Simulert {simuleringer} ganger, {antall_kast} kast hver")
print(f"Strategi 1 (alltid mynt): {snitt_s1:.2f} vunnet i snitt")
print(f"Strategi 2 (bytt): {snitt_s2:.2f} vunnet i snitt")
print()
print("Konklusjon: Begge strategier gir ca. 50% vinst!")`}
              height="460px"
              storageKey="7-4-strategier"
            />
          </section>

          {/* Exercises */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Prosjektoppgaver</h2>

            <div className="mb-8">
              <Exercise
                title="Oppgave 7.4.1: Analyser eksamensresultater"
                description={`En klasse fikk disse poengene på eksamen:
[45, 52, 68, 72, 55, 88, 91, 63, 77, 81, 59, 70, 84, 66, 75]

Lag en fullstendig analyse med alle statistiske mål.`}
                initialCode={`import math

poeng = [45, 52, 68, 72, 55, 88, 91, 63, 77, 81, 59, 70, 84, 66, 75]

n = len(poeng)
snitt = sum(poeng) / n
sortert = sorted(poeng)
median = sortert[n // 2]

varians = sum((x - snitt)**2 for x in poeng) / n
std = math.sqrt(varians)

print("=== Eksamensanalyse ===")
print(f"Antall elever: {n}")
print(f"Gjennomsnitt: {snitt:.2f}")
print(f"Median: {median}")
print(f"Minimum: {min(poeng)}")
print(f"Maksimum: {max(poeng)}")
print(f"Standardavvik: {std:.2f}")`}
                difficulty="medium"
                testCases={[
                  { expectedOutput: "Gjennomsnitt: 69.73", matchMode: 'contains' },
                  { expectedOutput: "Standardavvik:", matchMode: 'contains' }
                ]}
                hints={["Bruk formelen for standardavvik: √(Σ(x-μ)²/n)"]}
                storageKey="7-4-ex1"
                chapterId="7-4"
                exerciseId="7-4-1"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 7.4.2: Simuler lotteri"
                description={`Simuler et lotteri hvor du trekker 5 tall fra 1-20.
Du vinner hvis du får minst 3 like tall. Kjør 10 000 simuleringer.
Hva er sannsynligheten for å vinne?`}
                initialCode={`import random

def trekk_lotteri():
    """Trekk 5 tall fra 1-20"""
    trekk = [random.randint(1, 20) for _ in range(5)]

    # Tell frekvenser
    frekvenser = {}
    for tall in trekk:
        frekvenser[tall] = frekvenser.get(tall, 0) + 1

    # Sjekk om noen tall kom minst 3 ganger
    return max(frekvenser.values()) >= 3

# Simuler
antall = 10000
vinn = 0

for _ in range(antall):
    if trekk_lotteri():
        vinn += 1

sannsynlighet = vinn / antall

print(f"Simulert {antall} lotterier")
print(f"Vunnet: {vinn} ganger")
print(f"Sannsynlighet: {sannsynlighet:.4f} = {sannsynlighet*100:.2f}%")`}
                difficulty="vanskelig"
                testCases={[
                  { expectedOutput: "Simulert 10000", matchMode: 'contains' },
                  { expectedOutput: "Sannsynlighet:", matchMode: 'contains' }
                ]}
                hints={["Bruk max() på frekvenser for å sjekke om noe kom 3+ ganger"]}
                storageKey="7-4-ex2"
                chapterId="7-4"
                exerciseId="7-4-2"
              />
            </div>
          </section>

          <section className="mb-12">
            <Card className="bg-orange-500/5 border-orange-500/20">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Oppsummering</h2>
                <div className="space-y-2">
                  <p>✓ Kombiner alle statistiske mål i én analyse</p>
                  <p>✓ Bruk funksjoner for gjenbrukbar kode</p>
                  <p>✓ Simuler komplekse eksperimenter med løkker</p>
                  <p>✓ Sammenlign simulert med teoretisk sannsynlighet</p>
                  <p>✓ Dokumenter resultatene med tydelige print-setninger</p>
                </div>
              </CardContent>
            </Card>
          </section>

          <ChapterNavigation currentChapterId="7-4" />
        </div>
      </div>
    </BookLayout>
  );
}
