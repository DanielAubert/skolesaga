'use client';

import { BookLayout } from "@/components/book/book-layout";
import { PythonRunner } from "@/components/book/python-runner";
import { Exercise } from "@/components/book/exercise";
import { VideoLink } from "@/components/book/video-link";
import { InfoBox } from "@/components/book/info-box";
import { ChapterNavigation } from "@/components/book/chapter-navigation";
import { ChapterProgressBar } from "@/components/book/chapter-progress-bar";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { BookOpen } from "lucide-react";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";

export default function Chapter12Page() {
  useKeyboardNavigation('1-2');
  return (
    <BookLayout currentChapterId="1-2">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          {/* Progress Bar */}
          <div className="mb-4 sm:mb-6 space-y-3 sm:space-y-4">
            <ChapterProgressBar currentChapterId="1-2" />
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
            <Link href="/book" className="hover:text-foreground">
              Lærebok
            </Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 1.2</span>
          </div>

          {/* Chapter Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-start sm:items-center gap-3 mb-3 sm:mb-4">
              <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-medium text-muted-foreground">Kapittel 1.2</p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Variabeltyper og datatyper
                </h1>
              </div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground">
              I dette kapitlet skal du lære om ulike datatyper i Python og hvordan du
              oppretter og bruker variabler.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <Image
              src="/book-images/image19.png"
              alt="Variabler og datatyper i Python"
              width={800}
              height={238}
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>

          {/* Video Introduction */}
          <section className="mb-8 sm:mb-12">
            <VideoLink
              url="http://pythonhefte0102.studenthjelp.no/"
              youtubeId="ijOryic_6YE"
              title="Kapittel 1.2: Variabeltyper og datatyper"
              description="Se denne videoen før du starter med kapitlet for en best mulig introduksjon."
            />
          </section>

          {/* Section 1: Datatyper */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Datatyper i Python</h2>

            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              I Python har vi flere vanlige datatyper. De mest brukte i matematikk pensum er:
            </p>

            <Card className="mb-4 sm:mb-6">
              <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h3 className="font-semibold text-base sm:text-lg mb-2">Heltall (int)</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-2">
                      På engelsk: integer eller int forkortet.
                    </p>
                    <div className="bg-muted p-2 sm:p-3 rounded-lg text-sm sm:text-base">
                      <code>2, -3, 200, 0, -1000</code>
                    </div>
                  </div>

                  <div className="border-b pb-4">
                    <h3 className="font-semibold text-base sm:text-lg mb-2">Flyttall (float)</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-2">
                      Desimaltall. På engelsk: floating point number eller bare float.
                    </p>
                    <div className="bg-muted p-2 sm:p-3 rounded-lg text-sm sm:text-base">
                      <code>0.125, 2.355, 3.14, -0.5</code>
                    </div>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-3 sm:p-4 mb-4">
                    <p className="text-sm sm:text-base text-amber-800 dark:text-amber-200">
                      <strong>Viktig:</strong> I Python bruker vi <strong>punktum</strong> som desimaltegn, ikke komma.
                      Komma brukes til å skille elementer i lister og funksjonsargumenter.
                    </p>
                    <div className="mt-2 text-sm text-amber-700 dark:text-amber-300">
                      <code>3.14</code> ✓ riktig &nbsp;&nbsp; <code>3,14</code> ✗ feil
                    </div>
                  </div>

                  <div className="border-b pb-4">
                    <h3 className="font-semibold text-base sm:text-lg mb-2">Strengverdier (str)</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-2">
                      En tekststreng. På engelsk: string eller str forkortet.
                    </p>
                    <div className="bg-muted p-2 sm:p-3 rounded-lg text-sm sm:text-base break-all">
                      <code>&quot;Hei&quot;, &quot;God morgen fru Nilsen&quot;, &apos;Python er gøy&apos;</code>
                    </div>
                  </div>

                  <div className="border-b pb-4">
                    <h3 className="font-semibold text-base sm:text-lg mb-2">Lister (list)</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-2">
                      En datatype som samler data. I en liste kan det være flere forskjellige
                      datatyper samtidig.
                    </p>
                    <div className="bg-muted p-2 sm:p-3 rounded-lg text-sm sm:text-base space-y-1 break-all">
                      <code>[2, 3, 4, 5, 6]</code> - En liste med kun heltall
                      <br />
                      <code>[3, &quot;Hei&quot;, 3.0]</code> - En liste med flere datatyper
                    </div>
                  </div>

                  <div className="border-b pb-4">
                    <h3 className="font-semibold text-base sm:text-lg mb-2">Arrayer</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-2">
                      Likner lister, men er mer egnet for matematiske operasjoner.
                    </p>
                    <div className="bg-muted p-2 sm:p-3 rounded-lg text-sm sm:text-base">
                      <code>Se kapittel 2 for mer om arrayer</code>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-2">Boolske verdier (bool)</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-2">
                      På engelsk: boolean, bool forkortet.
                    </p>
                    <div className="bg-muted p-3 rounded-lg">
                      <code>True, False</code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <InfoBox type="tip">
              Husk at Python er case-sensitive! <code>True</code> er ikke det samme som <code>true</code>.
              Boolske verdier må skrives med stor forbokstav.
            </InfoBox>
          </section>

          {/* Section 2: Variabler */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Variabler</h2>

            <p className="text-lg mb-6">
              Ved å skrive <code>a = 2</code> så har vi opprettet vår første variabel i Python.
              Her har vi tilordnet (gitt) variabelen <code>a</code> heltallsverdien 2. Om vi da senere i
              programmet skriver <code>a</code> for seg selv (og ikke for eksempel i en tekststreng)
              så vet Python at vi egentlig mener 2 og programmet vil handle deretter.
            </p>

            <p className="text-lg mb-6">
              Vi kan også gi en variabel en verdi av en annen datatype. Skriver vi{" "}
              <code>b = &quot;Jeg er en tekst&quot;</code> så har vi opprettet et streng-objekt med verdi
              &quot;Jeg er en tekst&quot;.
            </p>

            <InfoBox type="info" title="Hva er en variabel?">
              En variabel er som en boks hvor du kan lagre verdier. Du gir boksen et navn
              (variabelnavnet), og kan da bruke dette navnet senere i programmet for å hente
              ut verdien.
            </InfoBox>

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Variabler"
                initialCode={`# Opprette variabler av forskjellige typer
a = 2                    # Heltall
b = 3.14                 # Flyttall
c = "Hei Python!"        # Streng
d = [1, 2, 3]           # Liste
e = True                 # Boolsk verdi

# Skrive ut variablene
print("a =", a)
print("b =", b)
print("c =", c)
print("d =", d)
print("e =", e)`}
                height="300px"
                storageKey="1-2-variables-example"
              />
            </div>

            <div className="mt-6">
              <InfoBox type="note" title="Variabelnavn">
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Variabelnavn må starte med en bokstav eller underscore (_)</li>
                  <li>Kan inneholde bokstaver, tall og underscore</li>
                  <li>Kan ikke inneholde mellomrom eller spesialtegn</li>
                  <li>Bruk beskrivende navn: <code>alder</code> er bedre enn <code>x</code></li>
                </ul>
              </InfoBox>
            </div>

            {/* Exercise 1.4 */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.4: Variabler (variabler.py)"
                description={`a) Lag et program hvor du gir variabelen \`a\` heltallsverdien 4, \`b\` flyttalsverdien 47.35, og \`c\` strengverdien "Dette er gøy".

b) Under dette lag en ny variabel \`d\` = [\`a\`,\`b\`,\`c\`] (et listeobjekt).

c) Bruk print() på \`a\`, \`b\`, \`c\` og \`d\` hver for seg.`}
                initialCode={`# Oppgave a)
a =
b =
c =

# Oppgave b)


# Oppgave c)
print(a)
print(b)
print(c)`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "4\n47.35\nDette er gøy",
                    description: "Deloppgave a): Variablene a, b og c",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "[4, 47.35, 'Dette er gøy']",
                    description: "Deloppgave b) og c): Listen d",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Heltall skrives uten anførselstegn: a = 4",
                  "Flyttall bruker punktum: b = 47.35",
                  "Strenger må ha anførselstegn: c = 'Dette er gøy'",
                  "Liste lages med hakeparenteser: d = [a, b, c]"
                ]}
                storageKey="1-2-exercise-1-4"
                chapterId="1-2"
                exerciseId="1-2-exercise-1-4"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0104.studenthjelp.no/"
                  youtubeId="dCOprfMMk60"
                  title="Løsningsforslag Oppgave 1.4"
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
                    <span>Python har flere datatyper: int, float, str, list, bool</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Variabler lagrer verdier som kan brukes senere i programmet</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Bruk = for å tilordne verdier til variabler</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Lister kan inneholde flere verdier av forskjellige typer</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <ChapterNavigation currentChapterId="1-2" />
        </div>
      </div>
    </BookLayout>
  );
}
