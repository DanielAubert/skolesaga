"use client";

import { BookLayout } from "@/components/book/book-layout";
import { PythonRunner } from "@/components/book/python-runner";
import { Exercise } from "@/components/book/exercise";
import { VideoLink } from "@/components/book/video-link";
import { InfoBox } from "@/components/book/info-box";
import { Card, CardContent } from "@/components/ui/card";
import { ChapterNavigation } from "@/components/book/chapter-navigation";
import { ChapterProgressBar } from "@/components/book/chapter-progress-bar";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";
import Link from "next/link";
import Image from "next/image";
import { BookOpen } from "lucide-react";


export default function Chapter19Page() {
  useKeyboardNavigation('1-9');

  return (
    <BookLayout currentChapterId="1-9">
      <div className="container max-w-4xl mx-auto py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          {/* Progress Bar */}
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="1-9" />
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">
              Lærebok
            </Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 1.9</span>
          </div>

          {/* Chapter Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Kapittel 1.9</p>
                <h1 className="text-3xl md:text-4xl font-bold">
                  For-løkker og range()
                </h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              I dette kapitlet skal du lære om for-løkker, range()-funksjonen, iterering
              over lister, og list comprehension.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/book-images/image87.png"
              alt="Lister og for-løkker"
              width={240}
              height={320}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Video Introduction */}
          <section className="mb-12">
            <VideoLink
              url="http://pythonhefte0107.studenthjelp.no/"
              youtubeId="XoaDfU0NukY"
              title="Kapittel 1.9: For-løkker og range()"
              description="Se denne videoen før du starter med kapitlet for en best mulig introduksjon."
            />
          </section>

          {/* Section 1: For-løkker grunnleggende */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Hva er en for-løkke?</h2>

            <p className="text-lg mb-6">
              En for-løkke brukes til å iterere (gå gjennom) elementer i en sekvens,
              som en liste, streng eller range. For-løkker er ofte enklere å bruke enn
              while-løkker når vi vet hvor mange ganger vi skal gjenta noe.
            </p>

            <InfoBox type="info" title="For-løkke syntaks">
              <code>for variabel in sekvens:</code>
              <br />
              <code>&nbsp;&nbsp;&nbsp;&nbsp;# Kode som kjøres for hvert element</code>
            </InfoBox>

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: For-løkke med liste"
                initialCode={`# Iterere over en liste
frukter = ["eple", "banan", "appelsin"]

for frukt in frukter:
    print("Jeg liker", frukt)

# Iterere over tall
tall = [1, 2, 3, 4, 5]

for t in tall:
    print(t * 2)

# Iterere over en streng
navn = "Python"

for bokstav in navn:
    print(bokstav)`}
                height="350px"
                storageKey="1-9-example-1"
              />
            </div>
          </section>

          {/* Section 2: range() funksjonen */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">range()-funksjonen</h2>

            <p className="text-lg mb-6">
              <code>range()</code> genererer en sekvens av tall. Dette er perfekt for
              for-løkker når vi vil gjenta noe et bestemt antall ganger.
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div>
                    <code className="bg-muted px-3 py-1 rounded font-mono">range(stopp)</code>
                    <div className="mt-2 ml-8 text-muted-foreground">
                      Tall fra 0 til (ikke med) stopp
                      <br />
                      <code>range(5)</code> gir: 0, 1, 2, 3, 4
                    </div>
                  </div>
                  <div>
                    <code className="bg-muted px-3 py-1 rounded font-mono">range(start, stopp)</code>
                    <div className="mt-2 ml-8 text-muted-foreground">
                      Tall fra start til (ikke med) stopp
                      <br />
                      <code>range(2, 6)</code> gir: 2, 3, 4, 5
                    </div>
                  </div>
                  <div>
                    <code className="bg-muted px-3 py-1 rounded font-mono">range(start, stopp, steg)</code>
                    <div className="mt-2 ml-8 text-muted-foreground">
                      Tall fra start til stopp med gitt steg
                      <br />
                      <code>range(0, 10, 2)</code> gir: 0, 2, 4, 6, 8
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <InfoBox type="tip">
              Husk at range() stopper <strong>før</strong> stopptallet. <code>range(5)</code>{" "}
              inkluderer ikke 5 selv!
            </InfoBox>

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: range()-funksjonen"
                initialCode={`# Enkel range (0 til 4)
for i in range(5):
    print(i)

print()

# Med start og stopp (2 til 6)
for i in range(2, 7):
    print("Tall:", i)

print()

# Med steg (partall)
for i in range(0, 11, 2):
    print(i)

print()

# Nedtelling (negativt steg)
for i in range(10, 0, -1):
    print(i)

print("Lift off!")`}
                height="400px"
                storageKey="1-9-example-2"
              />
            </div>

            {/* Exercise 1.33 */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.33 (for_kopi.py)"
                description={'Kopier koden i det øverste eksempelet på forrige side og kjør koden. Pass på at utskriften blir den samme.\nLegg til et ekstra element i listen som skrives ut. Kjør koden.\nGjør en endring på ordet element i koden slik at det istedenfor element står i. Pass på å bytte ut begge steder det står element før du nok engang kjører koden.'}
                initialCode={`# Skriv koden her

`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "",
                    description: "Kopier og modifiser eksempelet"
                  }
                ]}
                hints={[
                  "Kopier for-løkken fra eksempelet",
                  "Legg til et element i listen",
                  "Bytt variabelnavn fra 'element' til 'i'"
                ]}
                storageKey="1-9-exercise-1-33"
                chapterId="1-9"
                exerciseId="1-9-exercise-1-33"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0133.studenthjelp.no/"
                  youtubeId="bVDaq4ozFuo"
                  title="Løsningsforslag Oppgave 1.33"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>
          </section>

          {/* Section 3: Iterere over lister */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Iterere over lister med indeks</h2>

            <p className="text-lg mb-6">
              Ofte trenger vi både elementet og posisjonen (indeksen) når vi itererer.
              Vi kan bruke <code>enumerate()</code> eller <code>range(len())</code> for dette.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Med range(len())</h3>
                <PythonRunner
                  title="Eksempel: range(len())"
                  initialCode={`# Liste med navn
navn = ["Anna", "Bjørn", "Clara", "David"]

# Iterere med indeks
for i in range(len(navn)):
    print(f"Person {i+1}: {navn[i]}")

print()

# Endre elementer i liste
tall = [1, 2, 3, 4, 5]

for i in range(len(tall)):
    tall[i] = tall[i] * 2

print("Doble tall:", tall)`}
                  height="300px"
                storageKey="1-9-example-3"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Med enumerate()</h3>
                <PythonRunner
                  title="Eksempel: enumerate()"
                  initialCode={`# enumerate() gir både indeks og verdi
frukter = ["eple", "banan", "appelsin"]

for indeks, frukt in enumerate(frukter):
    print(f"{indeks}: {frukt}")

print()

# Starte indeks fra 1
for nummer, frukt in enumerate(frukter, 1):
    print(f"{nummer}. {frukt}")`}
                  height="280px"
                storageKey="1-9-example-4"
                />
              </div>
            </div>

            {/* Exercise 1.34 */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.34 (priser.py)"
                description={`Definer x = 1, samlet_pris = 0 og listen priser = [34,80,20,19,128] (Allerede skrevet i koden)

a) Lag en for løkke (for pris in priser:) som kjører koden:
   print("Varenummer:", x, "koster", pris, "kroner.")
   samlet_pris = samlet_pris + pris
   x = x+1

b) Når koden har blitt kjørt, skriv ut samlet_pris sammen med en passende svarsetning.`}
                initialCode={`# Definer variablene (Allerede skrevet)
x = 1
samlet_pris = 0
priser = [34, 80, 20, 19, 128]

# Oppgave a)


# Oppgave b)

`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "Varenummer: 1 koster 34 kroner.\nVarenummer: 2 koster 80 kroner.\nVarenummer: 3 koster 20 kroner.\nVarenummer: 4 koster 19 kroner.\nVarenummer: 5 koster 128 kroner.\nSamlet pris: 281 kroner",
                    description: "Liste priser og summer",
                    matchMode: 'lines'
                  }
                ]}
                hints={[
                  "for pris in priser:",
                  "Print varenummer, pris",
                  "Oppdater samlet_pris og x",
                  "Print samlet_pris til slutt"
                ]}
                storageKey="1-9-exercise-1-34"
                chapterId="1-9"
                exerciseId="1-9-exercise-1-34"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0134.studenthjelp.no/"
                  youtubeId="s8Syv-7tEUU"
                  title="Løsningsforslag Oppgave 1.34"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>
          </section>

          {/* Section 4: List comprehension */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">List comprehension</h2>

            <p className="text-lg mb-6">
              List comprehension er en elegant måte å lage lister på i Python. I stedet
              for å bruke en vanlig for-løkke, kan vi skrive alt på én linje.
            </p>

            <InfoBox type="info" title="List comprehension syntaks">
              <code>[uttrykk for variabel in sekvens]</code>
              <br />
              <code>[uttrykk for variabel in sekvens if betingelse]</code>
            </InfoBox>

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: List comprehension"
                initialCode={`# Tradisjonell måte: doble tall
tall = [1, 2, 3, 4, 5]
doble = []

for t in tall:
    doble.append(t * 2)

print("Tradisjonell:", doble)

# Med list comprehension
doble = [t * 2 for t in tall]
print("Comprehension:", doble)

# Kvadrattall
kvadrater = [x**2 for x in range(1, 6)]
print("Kvadrater:", kvadrater)

# Med betingelse (partall)
partall = [x for x in range(1, 11) if x % 2 == 0]
print("Partall:", partall)

# Konvertere til store bokstaver
navn = ["anna", "bjørn", "clara"]
store = [n.upper() for n in navn]
print("Store bokstaver:", store)`}
                height="450px"
                storageKey="1-9-example-5"
              />
            </div>

            {/* Exercise 1.35 */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.35 (for_funk.py)"
                description={`a) Definer funksjonen f(x) slik at den returnerer x**2 (x i andre).

b) Sett x = [0,1,2,3,4] og lag en tom liste y = [] (utenfor funksjonen).

c) Lag en for-løkke (for i in x:) som kjører koden y.append(f(i))

d) Når koden er utført, skriv ut resultatet (y).`}
                initialCode={`# Oppgave a)


# Oppgave b)


# Oppgave c)


# Oppgave d)

`}
                difficulty="medium"
                testCases={[
                  {
                    expectedOutput: "",
                    description: "Anvend funksjon på liste"
                  }
                ]}
                hints={[
                  "def f(x): return ...",
                  "for i in x:",
                  "y.append(f(i))",
                  "print(y)"
                ]}
                storageKey="1-9-exercise-1-35"
                chapterId="1-9"
                exerciseId="1-9-exercise-1-35"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0135.studenthjelp.no/"
                  youtubeId="xGb-bD1yt_g"
                  title="Løsningsforslag Oppgave 1.35"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>

            {/* Exercise 1.36 */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.36 (range.py)"
                description={`a) Sett r_1 = range(5). Hva blir de 3 første elementene i r_1? Det siste? Test antagelsen din ved å skrive print(r_1[0], r_1[1], r_1[2], r_1[-1])

b) Sett r_2 = range(3,10). Hva blir de 3 første elementene i r_2? Det siste? Test antagelsen din ved å skrive print(r_2[0], r_2[1], r_2[2], r_2[-1])

c) Sett r_3 = range(4,20,3). Hva tror du vil være de 3 første elementene i r_3? Hva med det siste? Test antagelsen din ved å skrive print(r_3[0], r_3[1], r_3[2], r_3[-1])`}
                initialCode={`# Oppgave a)


# Oppgave b)


# Oppgave c)

`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "",
                    description: "Utforsk range-funksjonen"
                  }
                ]}
                hints={[
                  "range(5) gir 0, 1, 2, 3, 4",
                  "range(3,10) gir 3, 4, 5, ..., 9",
                  "range(4,20,3) gir 4, 7, 10, 13, 16, 19"
                ]}
                storageKey="1-9-exercise-1-36"
                chapterId="1-9"
                exerciseId="1-9-exercise-1-36"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0136.studenthjelp.no/"
                  youtubeId="DSEbIf6EkpY"
                  title="Løsningsforslag Oppgave 1.36"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>

            {/* Exercise 1.37 */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.37 (varer_priser.py)"
                description={'I denne koden har vi med en liste med varer og i en annen liste så har vi prisene til disse varene lagret (i riktig rekkefølge selvsagt). Husk at len()-funksjonen returnerer lengden til en liste.\nLag listene vare = ["Eple", "Brød", "Skinke"] og pris = [10,20,25]\nSkriv for i in range(len(vare)): for å kjøre koden\nprint(vare[i], " koster ",pris[i], " kroner")\nKjør koden.\nNB: Her kunne vi også bruk 3 istedenfor len(varer), men da må vi i så fall endre koden vår om vi ønsker å forlenge listene.\nVi får vite at en Paprika koster 12 kroner på denne butikken. Legg til informasjonen på relevante steder i listene og kjør koden igjen'}
                initialCode={`# Definer listene


# For-løkke med range(len())

`}
                difficulty="medium"
                testCases={[
                  {
                    expectedOutput: "",
                    description: "Iterer over to lister parallelt"
                  }
                ]}
                hints={[
                  "vare = ['Eple', 'Brød', 'Skinke']",
                  "pris = [10, 20, 25]",
                  "for i in range(len(vare)):",
                  "print(vare[i], 'koster', pris[i], 'kroner')"
                ]}
                storageKey="1-9-exercise-1-37"
                chapterId="1-9"
                exerciseId="1-9-exercise-1-37"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0137.studenthjelp.no/"
                  youtubeId="RAtPeon1jpo"
                  title="Løsningsforslag Oppgave 1.37"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>

            {/* Exercise 1.38 */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.38 (for_range_funk.py)"
                description={'Definer funksjonen  og sett den lik . Sett x = [] og y = []\nBruk range(start, stopp, skritt) til å lage en for-løkke som lagrer alle tallene 10,20,30,...,100 i x.\nModifiser for-løkken slik at den samtidig lagrer f(10), f(20)...f(100) i y\nVed hjelp av en ny for-løkken la programmet skrive ut (10,f(10)), (20,f(20))...(100,f(100))'}
                initialCode={`# Definer funksjonen


# Tom lister


# For-løkke


# Print resultatet
`}
                difficulty="vanskelig"
                testCases={[
                  {
                    expectedOutput: "",
                    description: "Kombiner range, funksjon og lister"
                  }
                ]}
                hints={[
                  "def f(x): return ...",
                  "for i in range(10, 101, 10):",
                  "x.append(i) og y.append(f(i))",
                  "Print med for-løkke"
                ]}
                storageKey="1-9-exercise-1-38"
                chapterId="1-9"
                exerciseId="1-9-exercise-1-38"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0138.studenthjelp.no/"
                  youtubeId="f3VhE0H0NqU"
                  title="Løsningsforslag Oppgave 1.38"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>
          </section>

          {/* Summary */}
          <section className="mb-12">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Oppsummering</h2>
                <div className="space-y-3">
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>For-løkker itererer over sekvenser (lister, strenger, range)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>range() genererer tallsekvenser: range(stopp), range(start, stopp), range(start, stopp, steg)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>enumerate() gir både indeks og verdi ved iterering</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>List comprehension: [uttrykk for variabel in sekvens if betingelse]</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>For-løkker er ofte enklere enn while når antall iterasjoner er kjent</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <ChapterNavigation currentChapterId="1-9" />
        </div>
      </div>
    </BookLayout>
  );
}
