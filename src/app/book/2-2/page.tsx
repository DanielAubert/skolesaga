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

export default function Chapter22Page() {
  useKeyboardNavigation('2-2');

  return (
    <BookLayout currentChapterId="2-2">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          {/* Progress Bar */}
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="2-2" />
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">
              Lærebok
            </Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 2.2</span>
          </div>

          {/* Chapter Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <Code className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 2.2</p>
                  <Badge variant="outline" className="text-green-600 border-green-600">8. klasse</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Input og beregninger
                </h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              I dette kapitlet lærer du hvordan du kan få informasjon fra brukeren
              og bruke den til å gjøre beregninger.
            </p>
          </div>

          {/* Section 1: input() */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Få input fra brukeren med input()</h2>

            <p className="text-lg mb-6">
              Til nå har vi bare brukt verdier som vi har skrevet inn i koden selv.
              Men hva hvis vi vil at brukeren skal kunne skrive inn verdier?
              Da bruker vi <code className="bg-muted px-1 rounded">input()</code>.
            </p>

            <Card className="mb-6 bg-muted/50">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Slik fungerer input():</h3>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Programmet stopper og venter</li>
                  <li>Brukeren skriver noe og trykker Enter</li>
                  <li>Det brukeren skrev blir lagret i en variabel</li>
                </ol>
              </CardContent>
            </Card>

            <PythonRunner
              title="Eksempel: Spør om navn"
              initialCode={`# Spør brukeren om navnet sitt
navn = input("Hva heter du? ")

# Skriv ut en hilsen
print("Hei", navn, "!")
print("Hyggelig å møte deg!")`}
              height="200px"
              storageKey="2-2-input-eksempel"
            />

            <div className="mt-6">
              <InfoBox type="tip" title="Viktig å vite">
                <code className="bg-muted px-1 rounded">input()</code> gir alltid <strong>tekst</strong> tilbake,
                selv om brukeren skriver inn et tall. Hvis du vil bruke det som et tall,
                må du gjøre det om (se neste seksjon).
              </InfoBox>
            </div>
          </section>

          {/* Section 2: int() */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Gjøre tekst om til tall med int()</h2>

            <p className="text-lg mb-6">
              Når brukeren skriver inn et tall med <code className="bg-muted px-1 rounded">input()</code>,
              får vi det som tekst. For å kunne gjøre matematikk med tallet, må vi bruke{' '}
              <code className="bg-muted px-1 rounded">int()</code> for å gjøre det om til et heltall.
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold mb-2">Uten int() - Får tekst:</p>
                    <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                      alder = input(&quot;Hvor gammel er du? &quot;)<br />
                      <span className="text-muted-foreground"># alder er nå tekst, f.eks. &quot;14&quot;</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Med int() - Får tall:</p>
                    <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                      alder = int(input(&quot;Hvor gammel er du? &quot;))<br />
                      <span className="text-muted-foreground"># alder er nå et tall, f.eks. 14</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <PythonRunner
              title="Eksempel: Input som tall"
              initialCode={`# Spør om alder og gjør svaret om til tall
alder = int(input("Hvor gammel er du? "))

# Beregn alder neste år
neste_aar = alder + 1

print("Du er", alder, "år gammel nå")
print("Neste år blir du", neste_aar, "år")`}
              height="240px"
              storageKey="2-2-int-eksempel"
            />
          </section>

          {/* Section 3: Regneoperasjoner */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Regneoperasjoner</h2>

            <p className="text-lg mb-6">
              Nå som vi kan få tall fra brukeren, kan vi gjøre alle slags beregninger!
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">De fire regneartene:</h3>
                <div className="space-y-2 font-mono text-sm">
                  <div className="flex items-center gap-3">
                    <code className="bg-muted px-2 py-1 rounded">+</code>
                    <span>Pluss (addisjon) - Legge sammen</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <code className="bg-muted px-2 py-1 rounded">-</code>
                    <span>Minus (subtraksjon) - Trekke fra</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <code className="bg-muted px-2 py-1 rounded">*</code>
                    <span>Gange (multiplikasjon) - Multiplisere</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <code className="bg-muted px-2 py-1 rounded">/</code>
                    <span>Dele (divisjon) - Dividere</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <PythonRunner
              title="Eksempel: Summer to tall"
              initialCode={`# Få to tall fra brukeren
tall1 = int(input("Skriv inn første tall: "))
tall2 = int(input("Skriv inn andre tall: "))

# Beregn summen
summen = tall1 + tall2

# Skriv ut resultatet
print("Sum:", tall1, "+", tall2, "=", summen)`}
              height="240px"
              storageKey="2-2-sum-eksempel"
            />
          </section>

          {/* Section 4: Praktiske eksempler */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Praktiske eksempler</h2>

            <p className="text-lg mb-6">
              La oss se på noen hverdagslige eksempler hvor vi bruker input og beregninger.
            </p>

            <PythonRunner
              title="Eksempel: Beregn totalpris"
              initialCode={`# Spør om pris per vare og antall varer
pris = int(input("Hva koster hver vare? "))
antall = int(input("Hvor mange vil du kjøpe? "))

# Beregn totalpris
totalt = pris * antall

# Skriv ut resultatet
print("Du må betale", totalt, "kroner")`}
              height="240px"
              storageKey="2-2-totalpris"
            />

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Dele likt"
                initialCode={`# Hvor mange pizza-slices skal deles på venner?
slices = int(input("Hvor mange pizza-slices har dere? "))
venner = int(input("Hvor mange venner er dere? "))

# Hvor mange slices får hver?
per_person = slices / venner

print("Hver person får", per_person, "slices")`}
                height="240px"
                storageKey="2-2-dele-likt"
              />
            </div>
          </section>

          {/* Section 5: Flere beregninger på rad */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Flere beregninger på rad</h2>

            <p className="text-lg mb-6">
              Du kan bruke resultatet fra én beregning i neste beregning.
            </p>

            <PythonRunner
              title="Eksempel: Spar penger over tid"
              initialCode={`# Spør om sparing per måned
per_maaned = int(input("Hvor mye sparer du per måned? "))

# Beregn hvor mye du sparer på ulike tidsrom
tre_maaneder = per_maaned * 3
seks_maaneder = per_maaned * 6
ett_aar = per_maaned * 12

# Skriv ut resultatene
print("Om 3 måneder har du", tre_maaneder, "kroner")
print("Om 6 måneder har du", seks_maaneder, "kroner")
print("Om 1 år har du", ett_aar, "kroner")`}
              height="280px"
              storageKey="2-2-sparing"
            />
          </section>

          {/* Exercises */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Oppgaver</h2>

            {/* Exercise 2.2.1 */}
            <div className="mb-8">
              <Exercise
                title="Oppgave 2.2.1: Spør om to tall"
                description={`Lag et program som:

a) Spør brukeren om to tall
b) Regner ut produktet (tall1 * tall2)
c) Skriver ut: "Produkt: [tall1] * [tall2] = [resultat]"

Tips: Husk å bruke int() for å gjøre input om til tall.`}
                initialCode={`# Få to tall fra brukeren



# Beregn produktet


# Skriv ut resultatet
`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "",
                    description: "Programmet skal kjøre uten feil",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "tall1 = int(input('Skriv inn første tall: '))",
                  "tall2 = int(input('Skriv inn andre tall: '))",
                  "produkt = tall1 * tall2",
                  "print('Produkt:', tall1, '*', tall2, '=', produkt)"
                ]}
                storageKey="2-2-exercise-1"
                chapterId="2-2"
                exerciseId="2-2-1"
              />
            </div>

            {/* Exercise 2.2.2 */}
            <div className="mb-8">
              <Exercise
                title="Oppgave 2.2.2: Alder om 10 år"
                description={`Lag et program som:

a) Spør brukeren om alderen deres
b) Beregner hvor gammel de blir om 10 år
c) Skriver ut: "Om 10 år blir du [alder] år"`}
                initialCode={`# Spør om alder


# Beregn alder om 10 år


# Skriv ut resultatet
`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "",
                    description: "Programmet skal kjøre uten feil",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "alder = int(input('Hvor gammel er du? '))",
                  "framtidig_alder = alder + 10",
                  "print('Om 10 år blir du', framtidig_alder, 'år')"
                ]}
                storageKey="2-2-exercise-2"
                chapterId="2-2"
                exerciseId="2-2-2"
              />
            </div>

            {/* Exercise 2.2.3 */}
            <div className="mb-8">
              <Exercise
                title="Oppgave 2.2.3: Gjennomsnitt av tre tall"
                description={`Lag et program som:

a) Spør brukeren om tre tall
b) Beregner gjennomsnittet (sum delt på 3)
c) Skriver ut: "Gjennomsnittet er [resultat]"

Gjennomsnitt = (tall1 + tall2 + tall3) / 3`}
                initialCode={`# Få tre tall fra brukeren




# Beregn gjennomsnitt


# Skriv ut resultatet
`}
                difficulty="medium"
                testCases={[
                  {
                    expectedOutput: "",
                    description: "Programmet skal kjøre uten feil",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Spør om tre tall med input() og int()",
                  "Legg sammen alle tre tallene først",
                  "Del summen på 3 for å få gjennomsnittet"
                ]}
                storageKey="2-2-exercise-3"
                chapterId="2-2"
                exerciseId="2-2-3"
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
                    <span><strong>input()</strong> får tekst fra brukeren</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>int()</strong> gjør tekst om til tall</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Regneoperasjoner: <strong>+ - * /</strong></span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Du kan bruke resultater fra beregninger i nye beregninger</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <ChapterNavigation currentChapterId="2-2" />
        </div>
      </div>
    </BookLayout>
  );
}
