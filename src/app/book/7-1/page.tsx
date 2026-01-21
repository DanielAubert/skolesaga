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

export default function Chapter71Page() {
  useKeyboardNavigation('7-1');

  return (
    <BookLayout currentChapterId="7-1">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="7-1" />
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">Lærebok</Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 7.1</span>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-500/10 rounded-lg">
                <BarChart3 className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 7.1</p>
                  <Badge variant="outline" className="text-orange-600">2P</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">Statistiske mål</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Lær å beregne gjennomsnitt, median og typetall (modus) med Python.
            </p>
          </div>

          {/* Section 1: Gjennomsnitt */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Gjennomsnitt</h2>

            <p className="text-lg mb-6">
              Gjennomsnittet (arithmetic mean) er summen av alle verdiene delt på antallet verdier.
              I Python kan vi bruke <code>sum()</code> og <code>len()</code> funksjonene.
            </p>

            <PythonRunner
              title="Beregne gjennomsnitt"
              initialCode={`# Data: Temperaturer i grader Celsius
temperaturer = [15, 18, 22, 19, 17, 21, 20]

# Beregn gjennomsnitt
snitt = sum(temperaturer) / len(temperaturer)

print(f"Temperaturer: {temperaturer}")
print(f"Antall målinger: {len(temperaturer)}")
print(f"Gjennomsnittstemperatur: {snitt:.1f}°C")`}
              height="280px"
              storageKey="7-1-gjennomsnitt"
            />

            <InfoBox type="info" title="sum() og len()">
              <code>sum(liste)</code> summerer alle tallene i en liste.
              <code>len(liste)</code> gir antall elementer i listen.
            </InfoBox>
          </section>

          {/* Section 2: Median */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Median</h2>

            <p className="text-lg mb-6">
              Medianen er den midterste verdien når dataene er sortert. Hvis det er et partall
              verdier, tar vi gjennomsnittet av de to midterste.
            </p>

            <PythonRunner
              title="Beregne median"
              initialCode={`def median(data):
    sortert = sorted(data)
    n = len(sortert)

    if n % 2 == 1:
        # Oddetall: midterste verdi
        return sortert[n // 2]
    else:
        # Partall: gjennomsnitt av to midterste
        midten1 = sortert[n // 2 - 1]
        midten2 = sortert[n // 2]
        return (midten1 + midten2) / 2

# Testdata
poeng_odde = [85, 72, 90, 68, 95]
poeng_par = [85, 72, 90, 68, 95, 88]

print(f"Oddetall: {poeng_odde}")
print(f"Median: {median(poeng_odde)}")
print()
print(f"Partall: {poeng_par}")
print(f"Median: {median(poeng_par)}")`}
              height="340px"
              storageKey="7-1-median"
            />
          </section>

          {/* Section 3: Typetall (Modus) */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Typetall (Modus)</h2>

            <p className="text-lg mb-6">
              Typetallet (modus) er verdien som forekommer oftest i datasettet.
            </p>

            <PythonRunner
              title="Finne typetall"
              initialCode={`def typetall(data):
    # Tell frekvenser
    frekvenser = {}
    for verdi in data:
        if verdi in frekvenser:
            frekvenser[verdi] += 1
        else:
            frekvenser[verdi] = 1

    # Finn høyeste frekvens
    maks_frekvens = max(frekvenser.values())

    # Finn alle verdier med høyeste frekvens
    typer = [v for v, f in frekvenser.items() if f == maks_frekvens]
    return typer

# Karakterer på en prøve
karakterer = [4, 5, 3, 5, 4, 5, 3, 4, 5, 6, 5]

print(f"Karakterer: {karakterer}")
print(f"Typetall: {typetall(karakterer)}")
print(f"Forekomster av 5: {karakterer.count(5)}")`}
              height="340px"
              storageKey="7-1-typetall"
            />

            <InfoBox type="tip">
              Et datasett kan ha flere typetall hvis flere verdier forekommer like ofte.
              Dette kalles bimodal (2 typer) eller multimodal (flere typer).
            </InfoBox>
          </section>

          {/* Exercises */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Oppgaver</h2>

            <div className="mb-8">
              <Exercise
                title="Oppgave 7.1.1: Beregn alle statistiske mål"
                description={`Gitt datasettet [12, 15, 18, 12, 20, 12, 16], beregn:
- Gjennomsnitt
- Median
- Typetall`}
                initialCode={`data = [12, 15, 18, 12, 20, 12, 16]

# Gjennomsnitt
snitt = sum(data) / len(data)

# Median
sortert = sorted(data)
n = len(sortert)
median = sortert[n // 2]

# Typetall
frekvenser = {}
for verdi in data:
    frekvenser[verdi] = frekvenser.get(verdi, 0) + 1
typetall = max(frekvenser, key=frekvenser.get)

print(f"Gjennomsnitt: {snitt:.2f}")
print(f"Median: {median}")
print(f"Typetall: {typetall}")`}
                difficulty="medium"
                testCases={[
                  { expectedOutput: "15.00", matchMode: 'contains' },
                  { expectedOutput: "Median: 15", matchMode: 'contains' },
                  { expectedOutput: "Typetall: 12", matchMode: 'contains' }
                ]}
                hints={[
                  "Gjennomsnitt = sum(data) / len(data)",
                  "Median er midterste verdi i sortert liste",
                  "Typetall er verdien som forekommer oftest"
                ]}
                storageKey="7-1-ex1"
                chapterId="7-1"
                exerciseId="7-1-1"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 7.1.2: Sammenlign gjennomsnitt og median"
                description={`For datasettet [10, 12, 13, 15, 100], beregn gjennomsnitt og median.
Forklar forskjellen med en print-setning.`}
                initialCode={`data = [10, 12, 13, 15, 100]

snitt = sum(data) / len(data)
sortert = sorted(data)
median = sortert[len(sortert) // 2]

print(f"Gjennomsnitt: {snitt:.1f}")
print(f"Median: {median}")
print("Gjennomsnittet påvirkes sterkt av ekstremverdier")`}
                difficulty="lett"
                testCases={[
                  { expectedOutput: "30.0", matchMode: 'contains' },
                  { expectedOutput: "Median: 13", matchMode: 'contains' }
                ]}
                hints={["Ekstremverdien 100 trekker gjennomsnittet opp"]}
                storageKey="7-1-ex2"
                chapterId="7-1"
                exerciseId="7-1-2"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 7.1.3: Analyse av klassekarakter"
                description={`En klasse har fått karakterene [3, 4, 4, 5, 3, 4, 5, 4, 3, 4, 5, 6, 4].
Finn gjennomsnitt, median og typetall. Hvilken karakter er mest vanlig?`}
                initialCode={`karakterer = [3, 4, 4, 5, 3, 4, 5, 4, 3, 4, 5, 6, 4]

# Gjennomsnitt
snitt = sum(karakterer) / len(karakterer)

# Median
sortert = sorted(karakterer)
median = sortert[len(sortert) // 2]

# Typetall
frekvenser = {}
for k in karakterer:
    frekvenser[k] = frekvenser.get(k, 0) + 1
typetall = max(frekvenser, key=frekvenser.get)

print(f"Gjennomsnitt: {snitt:.2f}")
print(f"Median: {median}")
print(f"Typetall (mest vanlig): {typetall}")
print(f"Karakter {typetall} fikk {frekvenser[typetall]} elever")`}
                difficulty="medium"
                testCases={[
                  { expectedOutput: "4.08", matchMode: 'contains' },
                  { expectedOutput: "Typetall (mest vanlig): 4", matchMode: 'contains' }
                ]}
                hints={["Karakter 4 forekommer 6 ganger"]}
                storageKey="7-1-ex3"
                chapterId="7-1"
                exerciseId="7-1-3"
              />
            </div>
          </section>

          <section className="mb-12">
            <Card className="bg-orange-500/5 border-orange-500/20">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Oppsummering</h2>
                <div className="space-y-2">
                  <p>✓ <strong>Gjennomsnitt</strong>: sum(data) / len(data)</p>
                  <p>✓ <strong>Median</strong>: midterste verdi i sortert liste</p>
                  <p>✓ <strong>Typetall</strong>: verdien som forekommer oftest</p>
                  <p>✓ <strong>sorted()</strong>: sorterer en liste</p>
                  <p>✓ Median er robust mot ekstremverdier</p>
                </div>
              </CardContent>
            </Card>
          </section>

          <ChapterNavigation currentChapterId="7-1" />
        </div>
      </div>
    </BookLayout>
  );
}
