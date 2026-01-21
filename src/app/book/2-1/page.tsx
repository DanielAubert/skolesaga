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

export default function Chapter21Page() {
  useKeyboardNavigation('2-1');

  return (
    <BookLayout currentChapterId="2-1">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          {/* Progress Bar */}
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="2-1" />
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">
              Lærebok
            </Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 2.1</span>
          </div>

          {/* Chapter Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <Code className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 2.1</p>
                  <Badge variant="outline" className="text-green-600 border-green-600">8. klasse</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Variabler og print
                </h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              I dette kapitlet lærer du hva en variabel er, hvordan du lagrer verdier,
              og hvordan du skriver ut informasjon til skjermen.
            </p>
          </div>

          {/* Section 1: Hva er en variabel? */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Hva er en variabel?</h2>

            <p className="text-lg mb-6">
              En <strong>variabel</strong> er som en boks hvor du kan lagre en verdi.
              Du gir boksen et navn, og kan da hente ut verdien senere ved å bruke navnet.
            </p>

            <Card className="mb-6 bg-muted/50">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Tenk på det som en skoeske:</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Du skriver et navn på esken (variabelnavnet)</li>
                  <li>Du legger noe oppi (verdien)</li>
                  <li>Du kan åpne esken og se hva som er inni når du vil</li>
                  <li>Du kan bytte ut innholdet med noe nytt</li>
                </ul>
              </CardContent>
            </Card>

            <p className="text-lg mb-6">
              I Python lager vi en variabel ved å skrive navnet, deretter et likhetstegn (=),
              og til slutt verdien vi vil lagre.
            </p>

            <PythonRunner
              title="Eksempel: Lage variabler"
              initialCode={`# Lage en variabel som lagrer et navn
navn = "Ole"

# Lage en variabel som lagrer en alder
alder = 14

# Skrive ut variablene
print(navn)
print(alder)`}
              height="240px"
              storageKey="2-1-variabler-eksempel"
            />

            <InfoBox type="tip" title="Viktig å huske">
              Tekst må ha anførselstegn rundt seg (&quot;Ole&quot; eller &apos;Ole&apos;),
              men tall skal IKKE ha anførselstegn.
            </InfoBox>
          </section>

          {/* Section 2: print() */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Skrive ut med print()</h2>

            <p className="text-lg mb-6">
              For å vise noe på skjermen bruker vi <code className="bg-muted px-1 rounded">print()</code>.
              Vi skriver det vi vil vise mellom parentesene.
            </p>

            <PythonRunner
              title="Eksempel: Bruke print()"
              initialCode={`# Skrive ut tekst direkte
print("Hei!")
print("Jeg lærer Python")

# Skrive ut tall
print(42)
print(100)`}
              height="240px"
              storageKey="2-1-print-eksempel"
            />

            <div className="mt-6">
              <InfoBox type="info" title="Skrive ut flere ting på samme linje">
                Du kan skrive ut flere ting samtidig ved å skille dem med komma:
                <div className="mt-2 bg-muted p-3 rounded-lg font-mono text-sm">
                  print(&quot;Jeg heter&quot;, &quot;Ole&quot;, &quot;og er&quot;, 14, &quot;år&quot;)
                </div>
              </InfoBox>
            </div>

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Print flere verdier"
                initialCode={`navn = "Kari"
alder = 13
sted = "Oslo"

# Skrive ut flere verdier på samme linje
print("Jeg heter", navn)
print("Jeg er", alder, "år gammel")
print("Jeg bor i", sted)`}
                height="240px"
                storageKey="2-1-print-flere"
              />
            </div>
          </section>

          {/* Section 3: Tall og tekst */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Tall og tekst</h2>

            <p className="text-lg mb-6">
              I Python har vi to viktige typer verdier du må kjenne til:
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h3 className="font-semibold text-lg mb-2">Tall (int)</h3>
                    <p className="text-muted-foreground mb-2">
                      Hele tall uten anførselstegn
                    </p>
                    <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                      <code>alder = 14</code><br />
                      <code>antall = 100</code><br />
                      <code>poeng = -5</code>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Tekst (str)</h3>
                    <p className="text-muted-foreground mb-2">
                      Tekst med anførselstegn rundt
                    </p>
                    <div className="bg-muted p-3 rounded-lg font-mono text-sm">
                      <code>navn = &quot;Ole&quot;</code><br />
                      <code>favorittfarge = &quot;blå&quot;</code><br />
                      <code>melding = &apos;Hei på deg!&apos;</code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <PythonRunner
              title="Eksempel: Tall og tekst sammen"
              initialCode={`# Variabler med forskjellige typer
navn = "Emma"
alder = 13
hobby = "fotball"
lommepenger = 50

# Skrive ut en liten historie
print(navn, "er", alder, "år gammel")
print("Hun liker å spille", hobby)
print("Hun får", lommepenger, "kroner i lommepenger")`}
              height="280px"
              storageKey="2-1-tall-tekst"
            />
          </section>

          {/* Section 4: Enkle beregninger */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Enkle beregninger med tall</h2>

            <p className="text-lg mb-6">
              Du kan gjøre matematikk med tall i Python. Resultatet kan lagres i en variabel.
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Regneoperasjoner:</h3>
                <div className="space-y-2 font-mono text-sm">
                  <div className="flex items-center gap-3">
                    <code className="bg-muted px-2 py-1 rounded">+</code>
                    <span>Pluss (addisjon)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <code className="bg-muted px-2 py-1 rounded">-</code>
                    <span>Minus (subtraksjon)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <code className="bg-muted px-2 py-1 rounded">*</code>
                    <span>Gange (multiplikasjon)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <code className="bg-muted px-2 py-1 rounded">/</code>
                    <span>Dele (divisjon)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <PythonRunner
              title="Eksempel: Regneoperasjoner"
              initialCode={`# Enkle beregninger
a = 10
b = 3

sum_tall = a + b
differanse = a - b
produkt = a * b
kvotient = a / b

print("a =", a)
print("b =", b)
print("Sum:", sum_tall)
print("Differanse:", differanse)
print("Produkt:", produkt)
print("Kvotient:", kvotient)`}
              height="320px"
              storageKey="2-1-beregninger"
            />
          </section>

          {/* Exercises */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Oppgaver</h2>

            {/* Exercise 2.1.1 */}
            <div className="mb-8">
              <Exercise
                title="Oppgave 2.1.1: Lag dine første variabler"
                description={`Lag et program som:

a) Lager en variabel \`mitt_navn\` med ditt navn
b) Lager en variabel \`min_alder\` med din alder
c) Skriver ut begge variablene med print()`}
                initialCode={`# Lag variablene dine her
mitt_navn =
min_alder =

# Skriv ut variablene

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
                  "Husk anførselstegn rundt tekst: mitt_navn = 'Ole'",
                  "Tall skal IKKE ha anførselstegn: min_alder = 14",
                  "Bruk print(mitt_navn) og print(min_alder) for å skrive ut"
                ]}
                storageKey="2-1-exercise-1"
                chapterId="2-1"
                exerciseId="2-1-1"
              />
            </div>

            {/* Exercise 2.1.2 */}
            <div className="mb-8">
              <Exercise
                title="Oppgave 2.1.2: Lommepenger"
                description={`Ole får 100 kroner i lommepenger hver uke.

Lag et program som:
a) Lagrer 100 i variabelen \`lommepenger_per_uke\`
b) Beregner hvor mye han får på 4 uker
c) Skriver ut: "Ole får 400 kroner på 4 uker"`}
                initialCode={`# Lommepenger per uke
lommepenger_per_uke =

# Beregn totalt på 4 uker
totalt =

# Skriv ut resultatet
print("Ole får", totalt, "kroner på 4 uker")`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "Ole får 400 kroner på 4 uker",
                    description: "Beregner lommepenger korrekt",
                    matchMode: 'exact'
                  }
                ]}
                hints={[
                  "lommepenger_per_uke = 100",
                  "totalt = lommepenger_per_uke * 4",
                  "Gange 100 med 4 gir 400"
                ]}
                storageKey="2-1-exercise-2"
                chapterId="2-1"
                exerciseId="2-1-2"
              />
            </div>

            {/* Exercise 2.1.3 */}
            <div className="mb-8">
              <Exercise
                title="Oppgave 2.1.3: Presentasjon"
                description={`Lag et program som presenterer deg selv.

Bruk minst 3 variabler (navn, alder, hobby) og skriv ut en fin presentasjon.

Eksempel på output:
"Hei! Jeg heter Kari"
"Jeg er 13 år gammel"
"Min hobby er fotball"`}
                initialCode={`# Dine variabler
navn =
alder =
hobby =

# Skriv ut presentasjonen



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
                  "Bruk print('Hei! Jeg heter', navn)",
                  "Du kan skrive ut på flere linjer med flere print()",
                  "Husk anførselstegn rundt tekst, ikke rundt tall"
                ]}
                storageKey="2-1-exercise-3"
                chapterId="2-1"
                exerciseId="2-1-3"
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
                    <span>En <strong>variabel</strong> er en boks som lagrer en verdi</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>print()</strong> viser informasjon på skjermen</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Tekst</strong> må ha anførselstegn, <strong>tall</strong> skal ikke ha det</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Du kan gjøre <strong>beregninger</strong> med + - * /</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <ChapterNavigation currentChapterId="2-1" />
        </div>
      </div>
    </BookLayout>
  );
}
