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

export default function Chapter33Page() {
  useKeyboardNavigation('3-3');

  return (
    <BookLayout currentChapterId="3-3">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          {/* Progress Bar */}
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="3-3" />
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">
              Lærebok
            </Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 3.3</span>
          </div>

          {/* Chapter Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-600/10 rounded-lg">
                <Code className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 3.3</p>
                  <Badge variant="outline" className="text-green-600">9. klasse</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Statistikk med lister
                </h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Bruk lister til å beregne statistiske mål som gjennomsnitt, minimum og maksimum.
              Dette er viktige verktøy for å analysere data!
            </p>
          </div>

          {/* Section 1: Antall elementer - len() */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">len() - Antall elementer</h2>

            <p className="text-lg mb-6">
              Du har allerede lært <code>len()</code> i forrige kapittel.
              Dette er funksjonen som forteller oss hvor mange elementer det er i en liste.
            </p>

            <PythonRunner
              title="Eksempel: Bruk len()"
              initialCode={`# En liste med karakterer
karakterer = [5, 4, 6, 5, 4, 6, 5]

# Finn antall karakterer
antall = len(karakterer)

print("Karakterer:", karakterer)
print(f"Antall karakterer: {antall}")`}
              height="250px"
              storageKey="3-3-len"
            />

            <InfoBox type="note" title="Husk">
              <code>len(liste)</code> returnerer antall elementer i listen som et heltall.
            </InfoBox>
          </section>

          {/* Section 2: Summere alle tall - sum() */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">sum() - Summere alle tall</h2>

            <p className="text-lg mb-6">
              Funksjonen <code>sum()</code> legger sammen alle tallene i en liste.
              Dette er veldig nyttig når vi skal regne ut gjennomsnitt!
            </p>

            <PythonRunner
              title="Eksempel: Bruk sum()"
              initialCode={`# En liste med poeng
poeng = [10, 15, 12, 18, 14]

# Summer alle poengene
total = sum(poeng)

print("Poeng:", poeng)
print(f"Total sum: {total}")

# Sjekk med vanlig addisjon
sjekk = 10 + 15 + 12 + 18 + 14
print(f"Kontroll: {sjekk}")`}
              height="300px"
              storageKey="3-3-sum"
            />
          </section>

          {/* Section 3: Gjennomsnitt */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Beregne gjennomsnitt</h2>

            <p className="text-lg mb-6">
              <strong>Gjennomsnitt</strong> (eller <em>gjennomsnittet</em>) finner vi ved å
              dele summen på antall elementer:
            </p>

            <Card className="mb-6 bg-muted/50">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3 text-center">Formel for gjennomsnitt:</h3>
                <p className="font-mono text-center text-lg">
                  Gjennomsnitt = sum(liste) / len(liste)
                </p>
              </CardContent>
            </Card>

            <PythonRunner
              title="Eksempel: Beregn gjennomsnittskarakter"
              initialCode={`# Karakterer fra prøver
karakterer = [5, 4, 6, 5, 4, 6, 5]

# Beregn gjennomsnitt
sum_karakterer = sum(karakterer)
antall_karakterer = len(karakterer)
gjennomsnitt = sum_karakterer / antall_karakterer

print("Karakterer:", karakterer)
print(f"Sum: {sum_karakterer}")
print(f"Antall: {antall_karakterer}")
print(f"Gjennomsnitt: {gjennomsnitt:.2f}")

# Kort versjon på én linje
snitt = sum(karakterer) / len(karakterer)
print(f"Sjekk: {snitt:.2f}")`}
              height="350px"
              storageKey="3-3-gjennomsnitt"
            />

            <InfoBox type="tip" title="Formatering med :.2f">
              <code>:.2f</code> i f-string gir 2 desimaler: <code>f&quot;{'{'}tall:.2f{'}'}&quot;</code>
            </InfoBox>
          </section>

          {/* Section 4: Minimum og maksimum */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">min() og max() - Minste og største verdi</h2>

            <p className="text-lg mb-6">
              <code>min()</code> finner det minste tallet i listen, mens <code>max()</code> finner
              det største.
            </p>

            <PythonRunner
              title="Eksempel: Finn høyeste og laveste temperatur"
              initialCode={`# Temperaturer i en uke (grader Celsius)
temperaturer = [15, 18, 12, 20, 17, 16, 14]

# Finn minste og største verdi
lavest = min(temperaturer)
hoyest = max(temperaturer)

print("Temperaturer i uken:", temperaturer)
print(f"Laveste temperatur: {lavest}°C")
print(f"Høyeste temperatur: {hoyest}°C")

# Finn forskjellen
forskjell = hoyest - lavest
print(f"Temperaturforskjell: {forskjell}°C")`}
              height="300px"
              storageKey="3-3-min-max"
            />
          </section>

          {/* Section 5: Kombinere alt */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Kombinere alle statistiske mål</h2>

            <p className="text-lg mb-6">
              La oss lage et program som viser alle de viktigste statistiske målene for en
              liste med tall!
            </p>

            <PythonRunner
              title="Eksempel: Fullstendig statistisk analyse"
              initialCode={`# Resultater fra en test (poeng fra 0-100)
resultater = [85, 72, 90, 68, 95, 78, 82, 88, 91, 76]

# Beregn alle statistiske mål
antall = len(resultater)
total_sum = sum(resultater)
gjennomsnitt = total_sum / antall
lavest = min(resultater)
hoyest = max(resultater)
spredning = hoyest - lavest

# Vis resultatene pent formatert
print("=" * 40)
print("STATISTISK ANALYSE")
print("=" * 40)
print(f"Resultater: {resultater}")
print(f"\\nAntall: {antall}")
print(f"Sum: {total_sum}")
print(f"Gjennomsnitt: {gjennomsnitt:.1f}")
print(f"Laveste: {lavest}")
print(f"Høyeste: {hoyest}")
print(f"Spredning: {spredning}")
print("=" * 40)`}
              height="450px"
              storageKey="3-3-fullstendig"
            />

            <InfoBox type="info" title="Spredning">
              <strong>Spredning</strong> (variasjonsbredde) er forskjellen mellom høyeste
              og laveste verdi. Den viser hvor spredt dataene er.
            </InfoBox>
          </section>

          {/* Exercises */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Oppgaver</h2>

            {/* Exercise 3.3.1 */}
            <div className="mb-8">
              <Exercise
                title="Oppgave 3.3.1: Beregn sum"
                description={`Gitt listen: \`tall = [12, 18, 15, 20, 14]\`

Bruk \`sum()\` til å finne summen av alle tallene.
Skriv ut: "Summen er: [sum]"`}
                initialCode={`tall = [12, 18, 15, 20, 14]

# Beregn sum


# Skriv ut resultatet
`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "79",
                    description: "Summen er 79",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Bruk sum(tall)",
                  "total = sum(tall)",
                  "12 + 18 + 15 + 20 + 14 = 79"
                ]}
                storageKey="3-3-exercise-1"
                chapterId="3-3"
                exerciseId="3-3-1"
              />
            </div>

            {/* Exercise 3.3.2 */}
            <div className="mb-8">
              <Exercise
                title="Oppgave 3.3.2: Beregn gjennomsnitt"
                description={`Gitt listen: \`karakterer = [5, 4, 6, 5, 5, 6]\`

Beregn gjennomsnittskarakteren.
Skriv ut: "Gjennomsnitt: [verdi]" (med 2 desimaler)`}
                initialCode={`karakterer = [5, 4, 6, 5, 5, 6]

# Beregn gjennomsnitt


# Skriv ut med 2 desimaler
`}
                difficulty="medium"
                testCases={[
                  {
                    expectedOutput: "5.17",
                    description: "Gjennomsnittet er 5.17",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "gjennomsnitt = sum(karakterer) / len(karakterer)",
                  "Bruk :.2f for 2 desimaler",
                  "31 / 6 = 5.166... ≈ 5.17"
                ]}
                storageKey="3-3-exercise-2"
                chapterId="3-3"
                exerciseId="3-3-2"
              />
            </div>

            {/* Exercise 3.3.3 */}
            <div className="mb-8">
              <Exercise
                title="Oppgave 3.3.3: Finn høyeste og laveste"
                description={`Gitt listen: \`priser = [199, 149, 299, 179, 249]\`

Finn laveste og høyeste pris.
Skriv ut begge verdiene.`}
                initialCode={`priser = [199, 149, 299, 179, 249]

# Finn laveste og høyeste


# Skriv ut
`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "149",
                    description: "Laveste er 149",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "299",
                    description: "Høyeste er 299",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Bruk min(priser) og max(priser)",
                  "laveste = min(priser)",
                  "hoyeste = max(priser)"
                ]}
                storageKey="3-3-exercise-3"
                chapterId="3-3"
                exerciseId="3-3-3"
              />
            </div>

            {/* Exercise 3.3.4 */}
            <div className="mb-8">
              <Exercise
                title="Oppgave 3.3.4: Beregn spredning"
                description={`Gitt listen: \`temperaturer = [18, 22, 16, 25, 20, 19]\`

Finn spredningen (forskjellen mellom høyeste og laveste temperatur).
Skriv ut: "Spredning: [verdi]°C"`}
                initialCode={`temperaturer = [18, 22, 16, 25, 20, 19]

# Finn høyeste og laveste


# Beregn spredning


# Skriv ut
`}
                difficulty="medium"
                testCases={[
                  {
                    expectedOutput: "9",
                    description: "Spredningen er 9",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "spredning = max(temperaturer) - min(temperaturer)",
                  "25 - 16 = 9",
                  "Husk °C i utskriften"
                ]}
                storageKey="3-3-exercise-4"
                chapterId="3-3"
                exerciseId="3-3-4"
              />
            </div>

            {/* Exercise 3.3.5 */}
            <div className="mb-8">
              <Exercise
                title="Oppgave 3.3.5: Fullstendig analyse"
                description={`Gitt listen: \`poeng = [45, 67, 52, 78, 61, 59, 72]\`

Lag et program som viser:
- Antall resultater
- Gjennomsnitt (1 desimal)
- Laveste poeng
- Høyeste poeng

Formater utskriften pent.`}
                initialCode={`poeng = [45, 67, 52, 78, 61, 59, 72]

# Beregn alle verdier




# Skriv ut resultatene
print("Antall:", antall)
print(f"Gjennomsnitt: {gjennomsnitt:.1f}")
print(f"Laveste: {laveste}")
print(f"Høyeste: {hoyeste}")`}
                difficulty="medium"
                testCases={[
                  {
                    expectedOutput: "7",
                    description: "7 resultater",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "62.0",
                    description: "Gjennomsnitt 62.0",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "45",
                    description: "Laveste 45",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "78",
                    description: "Høyeste 78",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "antall = len(poeng)",
                  "gjennomsnitt = sum(poeng) / len(poeng)",
                  "laveste = min(poeng), hoyeste = max(poeng)",
                  "434 / 7 = 62.0"
                ]}
                storageKey="3-3-exercise-5"
                chapterId="3-3"
                exerciseId="3-3-5"
              />
            </div>
          </section>

          {/* Summary */}
          <section className="mb-12">
            <Card className="bg-green-600/5 border-green-600/20">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Oppsummering</h2>
                <div className="space-y-3">
                  <p className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>len(liste)</strong> - antall elementer</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>sum(liste)</strong> - summerer alle tall</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Gjennomsnitt</strong> - sum / len</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>min() og max()</strong> - minste og største verdi</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Spredning</strong> - max - min</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <ChapterNavigation currentChapterId="3-3" />
        </div>
      </div>
    </BookLayout>
  );
}
