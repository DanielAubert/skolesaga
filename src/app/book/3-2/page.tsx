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

export default function Chapter32Page() {
  useKeyboardNavigation('3-2');

  return (
    <BookLayout currentChapterId="3-2">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          {/* Progress Bar */}
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="3-2" />
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">
              Lærebok
            </Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 3.2</span>
          </div>

          {/* Chapter Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-600/10 rounded-lg">
                <Code className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 3.2</p>
                  <Badge variant="outline" className="text-green-600">9. klasse</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Lister
                </h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Lær å bruke lister for å lagre og behandle flere verdier samtidig.
              Dette er et kraftig verktøy for å jobbe med mye data!
            </p>
          </div>

          {/* Section 1: Hva er en liste? */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Hva er en liste?</h2>

            <p className="text-lg mb-6">
              En <strong>liste</strong> er en variabel som kan inneholde flere verdier samtidig.
              I stedet for å lage mange separate variabler, kan vi samle alt i én liste!
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Uten liste (tungvint):</h3>
                <pre className="text-sm p-4 bg-muted rounded mb-4">
{`karakter1 = 5
karakter2 = 4
karakter3 = 6
karakter4 = 5`}
                </pre>
                <h3 className="font-semibold mb-3">Med liste (smart!):</h3>
                <pre className="text-sm p-4 bg-muted rounded">
{`karakterer = [5, 4, 6, 5]`}
                </pre>
              </CardContent>
            </Card>

            <InfoBox type="info" title="Repetisjon">
              Du har sett lister før i kapittel 1. Nå skal vi lære å jobbe mer aktivt med dem!
            </InfoBox>
          </section>

          {/* Section 2: Lage og bruke lister */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Lage og bruke lister</h2>

            <p className="text-lg mb-6">
              Vi lager en liste ved å skrive verdier mellom hakeparenteser <code>[ ]</code>,
              og skiller verdiene med komma.
            </p>

            <PythonRunner
              title="Eksempel: Lage en liste"
              initialCode={`# Lage en liste med tall
tall = [5, 10, 15, 20, 25]
print("Liste med tall:", tall)

# Lage en liste med navn
navn = ["Anna", "Erik", "Sofie", "Lars"]
print("Liste med navn:", navn)

# Lage en tom liste
tom_liste = []
print("Tom liste:", tom_liste)`}
              height="280px"
              storageKey="3-2-lage-liste"
            />

            <div className="mt-6">
              <Card className="bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Viktig å huske:</h3>
                  <ul className="space-y-2">
                    <li>Lister starter med <code>[</code> og slutter med <code>]</code></li>
                    <li>Verdiene skilles med komma: <code>[1, 2, 3]</code></li>
                    <li>En liste kan inneholde tall, tekst eller blandet</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 3: Hente ut elementer fra liste */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Hente ut elementer fra liste</h2>

            <p className="text-lg mb-6">
              Hvert element i en liste har en <strong>indeks</strong> (posisjon).
              Viktig: Python starter å telle fra 0!
            </p>

            <Card className="mb-6 bg-muted/50">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Indeksering i Python:</h3>
                <pre className="text-sm p-4 bg-background rounded">
{`Liste:   ["Anna", "Erik", "Sofie", "Lars"]
Indeks:     0       1        2        3`}
                </pre>
              </CardContent>
            </Card>

            <PythonRunner
              title="Eksempel: Hente ut elementer"
              initialCode={`# En liste med navn
navn = ["Anna", "Erik", "Sofie", "Lars"]

# Hent første element (indeks 0)
print("Første navn:", navn[0])

# Hent andre element (indeks 1)
print("Andre navn:", navn[1])

# Hent siste element (indeks 3)
print("Siste navn:", navn[3])

# Negativt indeks - tell bakfra!
print("Siste navn (bakfra):", navn[-1])
print("Nest siste navn:", navn[-2])`}
              height="320px"
              storageKey="3-2-indeks"
            />

            <InfoBox type="tip" title="Negativt indeks">
              Du kan bruke negativt indeks for å telle bakfra: <code>liste[-1]</code> gir siste element!
            </InfoBox>
          </section>

          {/* Section 4: Legge til elementer */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Legge til elementer med append()</h2>

            <p className="text-lg mb-6">
              Vi bruker <code>append()</code> for å legge til nye elementer på slutten av en liste.
            </p>

            <PythonRunner
              title="Eksempel: Bruk append()"
              initialCode={`# Start med en tom liste
karakterer = []
print("Start:", karakterer)

# Legg til karakterer
karakterer.append(5)
print("Etter første:", karakterer)

karakterer.append(4)
print("Etter andre:", karakterer)

karakterer.append(6)
print("Etter tredje:", karakterer)

# Legg til flere
karakterer.append(5)
karakterer.append(6)
print("Endelig liste:", karakterer)`}
              height="350px"
              storageKey="3-2-append"
            />

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Samle inn data"
                initialCode={`# Samle inn favorittall
favorittall = []

# Simuler input (i ekte program bruker vi input())
tall1 = 7
tall2 = 13
tall3 = 21

favorittall.append(tall1)
favorittall.append(tall2)
favorittall.append(tall3)

print("Dine favorittall:", favorittall)
print(f"Du har {len(favorittall)} favorittall")`}
                height="300px"
                storageKey="3-2-samle-data"
              />
            </div>
          </section>

          {/* Section 5: Andre nyttige listeoperasjoner */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Nyttige listeoperasjoner</h2>

            <PythonRunner
              title="Eksempel: Operasjoner på lister"
              initialCode={`# En liste med tall
tall = [10, 20, 30, 40, 50]

# len() - finn antall elementer
print("Antall tall:", len(tall))

# Endre et element
tall[0] = 15  # Endre første element
print("Etter endring:", tall)

# Sjekk om element finnes
if 30 in tall:
    print("30 finnes i listen!")

# Fjern et element
tall.remove(30)  # Fjern verdien 30
print("Etter fjerning:", tall)

# Sortere listen
tall.sort()
print("Sortert:", tall)`}
              height="380px"
              storageKey="3-2-operasjoner"
            />
          </section>

          {/* Exercises */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Oppgaver</h2>

            {/* Exercise 3.2.1 */}
            <div className="mb-8">
              <Exercise
                title="Oppgave 3.2.1: Lag en liste"
                description={`Lag en liste som heter \`frukter\` med verdiene: "eple", "banan", "appelsin"

Skriv ut hele listen.`}
                initialCode={`# Lag listen
frukter =

# Skriv ut
print(frukter)`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "eple",
                    description: "Listen inneholder 'eple'",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "banan",
                    description: "Listen inneholder 'banan'",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "appelsin",
                    description: "Listen inneholder 'appelsin'",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Bruk hakeparenteser: []",
                  "frukter = ['eple', 'banan', 'appelsin']",
                  "Husk anførselstegn rundt tekst"
                ]}
                storageKey="3-2-exercise-1"
                chapterId="3-2"
                exerciseId="3-2-1"
              />
            </div>

            {/* Exercise 3.2.2 */}
            <div className="mb-8">
              <Exercise
                title="Oppgave 3.2.2: Hent element fra liste"
                description={`Gitt listen \`dyr = ["hund", "katt", "kanin", "hamster"]\`

Skriv ut det andre dyret i listen (indeks 1).`}
                initialCode={`dyr = ["hund", "katt", "kanin", "hamster"]

# Skriv ut andre dyr
print(dyr[  ])`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "katt",
                    description: "Skriver ut 'katt'",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Andre element har indeks 1",
                  "Bruk dyr[1]",
                  "Husk: Python starter å telle fra 0!"
                ]}
                storageKey="3-2-exercise-2"
                chapterId="3-2"
                exerciseId="3-2-2"
              />
            </div>

            {/* Exercise 3.2.3 */}
            <div className="mb-8">
              <Exercise
                title="Oppgave 3.2.3: Legg til med append"
                description={`Start med en tom liste \`tall = []\`

Legg til tallene 10, 20 og 30 i listen.
Skriv ut listen.`}
                initialCode={`tall = []

# Legg til tallene


# Skriv ut listen
print(tall)`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "10",
                    description: "Listen inneholder 10",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "20",
                    description: "Listen inneholder 20",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "30",
                    description: "Listen inneholder 30",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Bruk tall.append(10)",
                  "Gjør det samme for 20 og 30",
                  "Husk: append() legger til på slutten"
                ]}
                storageKey="3-2-exercise-3"
                chapterId="3-2"
                exerciseId="3-2-3"
              />
            </div>

            {/* Exercise 3.2.4 */}
            <div className="mb-8">
              <Exercise
                title="Oppgave 3.2.4: Antall elementer"
                description={`Gitt listen \`farger = ["rød", "blå", "grønn", "gul", "lilla"]\`

Bruk \`len()\` til å finne hvor mange farger det er.
Skriv ut: "Det er [antall] farger"`}
                initialCode={`farger = ["rød", "blå", "grønn", "gul", "lilla"]

# Finn antall farger


# Skriv ut resultatet
`}
                difficulty="medium"
                testCases={[
                  {
                    expectedOutput: "5",
                    description: "Det er 5 farger",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Bruk len(farger)",
                  "antall = len(farger)",
                  "print(f'Det er {antall} farger')"
                ]}
                storageKey="3-2-exercise-4"
                chapterId="3-2"
                exerciseId="3-2-4"
              />
            </div>

            {/* Exercise 3.2.5 */}
            <div className="mb-8">
              <Exercise
                title="Oppgave 3.2.5: Bygg en handleliste"
                description={`Lag et program som bygger en handleliste:

1. Start med en tom liste \`handleliste\`
2. Legg til "melk", "brød", "egg" og "ost"
3. Skriv ut hvor mange varer som er på listen
4. Skriv ut hele listen`}
                initialCode={`# Lag tom liste
handleliste = []

# Legg til varer




# Skriv ut antall varer
print(f"Antall varer: {len(handleliste)}")

# Skriv ut listen
print("Handleliste:", handleliste)`}
                difficulty="medium"
                testCases={[
                  {
                    expectedOutput: "4",
                    description: "Det er 4 varer",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "melk",
                    description: "Listen inneholder melk",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "ost",
                    description: "Listen inneholder ost",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Bruk append() fire ganger",
                  "handleliste.append('melk')",
                  "len(handleliste) gir antall varer"
                ]}
                storageKey="3-2-exercise-5"
                chapterId="3-2"
                exerciseId="3-2-5"
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
                    <span><strong>Liste</strong> - lagrer flere verdier: <code>[1, 2, 3]</code></span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Indeks</strong> - henter element: <code>liste[0]</code> (starter fra 0)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>append()</strong> - legger til element på slutten</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>len()</strong> - finner antall elementer</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <ChapterNavigation currentChapterId="3-2" />
        </div>
      </div>
    </BookLayout>
  );
}
