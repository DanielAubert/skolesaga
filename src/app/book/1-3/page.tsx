'use client';

import { BookLayout } from "@/components/book/book-layout";
import { PythonRunner } from "@/components/book/python-runner";
import { PythonConsole } from "@/components/book/python-console";
import { Exercise } from "@/components/book/exercise";
import { VideoLink } from "@/components/book/video-link";
import { InfoBox } from "@/components/book/info-box";
import { ChapterNavigation } from "@/components/book/chapter-navigation";
import { ChapterProgressBar } from "@/components/book/chapter-progress-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { BookOpen } from "lucide-react";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";

export default function Chapter13Page() {
  useKeyboardNavigation('1-3');
  return (
    <BookLayout currentChapterId="1-3">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          {/* Progress Bar */}
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="1-3" />
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">
              Lærebok
            </Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 1.3</span>
          </div>

          {/* Chapter Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Kapittel 1.3</p>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Regneoperatorer
                </h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              I dette kapitlet skal du lære om alle regneoperatorene i Python: pluss, minus,
              gange, dele, eksponenter, heltallsdivisjon og modulo.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/book-images/image23.png"
              alt="Regneoperatorer i Python"
              width={260}
              height={480}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Video Introduction */}
          <section className="mb-12">
            <VideoLink
              url="http://pythonhefte0103.studenthjelp.no/"
              youtubeId="FWrpSUOk5tc"
              title="Kapittel 1.3: Regneoperatorer"
              description="Se denne videoen før du starter med kapitlet for en best mulig introduksjon."
            />
          </section>

          {/* Section 1: Grunnleggende operatorer */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Pluss, minus, gange og dele</h2>

            <p className="text-lg mb-6">
              Om du hadde mistanker om at de vanlige regneoperasjonene ville være enkle å
              gjennomføre i Python, ja da hadde du rett!
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <code className="bg-muted px-3 py-1 rounded font-mono text-lg">+</code>
                    <span>Addisjon (pluss)</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <code className="bg-muted px-3 py-1 rounded font-mono text-lg">-</code>
                    <span>Subtraksjon (minus)</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <code className="bg-muted px-3 py-1 rounded font-mono text-lg">*</code>
                    <span>Multiplikasjon (gange)</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <code className="bg-muted px-3 py-1 rounded font-mono text-lg">/</code>
                    <span>Divisjon (dele)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <PythonRunner
              title="Eksempel: Grunnleggende regneoperatorer"
              initialCode={`# Addisjon
print("5 + 3 =", 5 + 3)

# Subtraksjon
print("10 - 4 =", 10 - 4)

# Multiplikasjon
print("6 * 7 =", 6 * 7)

# Divisjon
print("20 / 4 =", 20 / 4)
print("7 / 2 =", 7 / 2)  # Gir desimaltall`}
              height="250px"
              storageKey="1-3-basic-operators"
            />

            {/* Exercise 1.5 */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.5: Regneoperatorer (regneoperatorer.py)"
                description={`a) Sett a = 4 og b = 5.

b) Gi c verdien a + b (altså skriv c = a + b). Skriv nå print(c) og kjør programmet for å se resultatet.

c) Gi d verdien a – b.

d) Gi e verdien a*b.

e) Gi f verdien b/a.

f) Bruk print()-funksjonen på d, på e og på f.`}
                initialCode={`# Sett variablene
a =
b =

# Regn ut verdiene


# Print resultatene
print(c)
print(d)
print(e)
print(f)`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "9\n-1\n20\n1.25",
                    description: "Sjekker at alle beregninger er korrekte",
                    matchMode: 'lines'
                  }
                ]}
                hints={[
                  "c = a + b (addisjon)",
                  "d = a - b (subtraksjon)",
                  "e = a * b (multiplikasjon)",
                  "f = b / a (divisjon)"
                ]}
                storageKey="1-3-exercise-1-5"
                chapterId="1-3"
                exerciseId="1-3-exercise-1-5"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0105.studenthjelp.no/"
                  youtubeId="Y3T9G-IwYz0"
                  title="Løsningsforslag Oppgave 1.5"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>
          </section>

          {/* Section 2: Strenger */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Å legge sammen og gange streng-elementer</h2>

            <p className="text-lg mb-6">
              Vi kan faktisk også bruke pluss (+) og gange (*) på tekststrenger! Om vi for eksempel
              skriver <code>&quot;hal&quot; + &quot;lo&quot;</code> får vi <code>&quot;hallo&quot;</code>, og om vi skriver{" "}
              <code>&quot;ha&quot; * 3</code> får vi <code>&quot;hahaha&quot;</code>.
            </p>

            <InfoBox type="warning">
              Vi kan <strong>ikke</strong> bruke minus (-) og dele (/) operatorene på tekststrenger.
              Python vil gi en feilmelding om du prøver.
            </InfoBox>

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Operatorer på strenger"
                initialCode={`# Legge sammen strenger
print("hal" + "lo")
print("God" + " " + "dag")

# Gange strenger (repetisjon)
print("ha" * 3)
print("Python! " * 5)

# Kombinere variabler
fornavn = "Ola"
etternavn = "Nordmann"
fullt_navn = fornavn + " " + etternavn
print(fullt_navn)`}
                height="280px"
                storageKey="1-3-string-operators"
              />
            </div>

            {/* Exercise 1.6 */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.6: Streng-operasjoner (streng_pluss_gange.py)"
                description={`Sett a = "Å legge sammen", b = " " (her er det et mellomrom imellom anførselstegnene), c = "tekststrenger er litt rart." (Allerede skrevet i koden)

a) Skriv print(a+c) og print(a+b+c) på hver sin linje og kjør programmet.

b) Skriv nå print(5*c) og kjør programmet.

c) Prøv nå å skrive print("Nå"+"programmerer"+"jeg."), kjør programmet.

d) Gjør nødvendige endringer i koden fra oppgave c) for å få en penere utskrift.`}
                initialCode={`# Variabler (Allerede skrevet)
a = "Å legge sammen"
b = " "
c = "tekststrenger er litt rart."

# Oppgave a)


# Oppgave b)


# Oppgave c)


# Oppgave d)

`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "Å legge sammentekststrenger er litt rart.\nÅ legge sammen tekststrenger er litt rart.\ntekststrenger er litt rart.tekststrenger er litt rart.tekststrenger er litt rart.tekststrenger er litt rart.tekststrenger er litt rart.\nNåprogrammererjeg.\nNå programmerer jeg.",
                    description: "Tester alle deloppgaver a-d)",
                    matchMode: 'lines'
                  }
                ]}
                hints={[
                  "a) print(a+c) uten mellomrom, print(a+b+c) med mellomrom",
                  "b) print(5*c) repeterer c fem ganger",
                  "c) Uten mellomrom: print(\"Nå\"+\"programmerer\"+\"jeg.\")",
                  "d) Med mellomrom: print(\"Nå \"+\"programmerer \"+\"jeg.\")"
                ]}
                storageKey="1-3-exercise-1-6"
                chapterId="1-3"
                exerciseId="1-3-exercise-1-6"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0106.studenthjelp.no/"
                  youtubeId="WB6t0H3tWBU"
                  title="Løsningsforslag Oppgave 1.6"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>
          </section>

          {/* Section 3: Avanserte operatorer */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Eksponenter, heltallsdivisjon og modulo</h2>

            <p className="text-lg mb-6">
              Eksponenter bør du allerede være kjent med, men modulo og heltallsdivisjon er
              kanskje nytt?
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <code className="bg-muted px-3 py-1 rounded font-mono text-lg">**</code>
                    <span className="ml-4">Eksponent (opphøyd i)</span>
                    <div className="mt-2 ml-8 text-muted-foreground">
                      Eksempel: <code>3 ** 4</code> betyr 3<sup>4</sup> = 81
                    </div>
                  </div>
                  <div>
                    <code className="bg-muted px-3 py-1 rounded font-mono text-lg">{'//'}</code>
                    <span className="ml-4">Heltallsdivisjon</span>
                    <div className="mt-2 ml-8 text-muted-foreground">
                      Hvor mange <strong>hele ganger</strong> går nevneren i telleren?
                      <br />
                      Eksempel: <code>7 // 2</code> = 3 (fordi 2 går 3 hele ganger i 7)
                    </div>
                  </div>
                  <div>
                    <code className="bg-muted px-3 py-1 rounded font-mono text-lg">%</code>
                    <span className="ml-4">Modulo (rest)</span>
                    <div className="mt-2 ml-8 text-muted-foreground">
                      Hva blir <strong>resten</strong> etter heltallsdivisjon?
                      <br />
                      Eksempel: <code>7 % 2</code> = 1 (fordi 7 - 3*2 = 1)
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <InfoBox type="tip" title="Når bruker vi modulo?">
              Modulo er nyttig for å sjekke om et tall er partall eller oddetall:
              <ul className="list-disc list-inside mt-2">
                <li><code>x % 2 == 0</code> betyr at x er et partall</li>
                <li><code>x % 2 == 1</code> betyr at x er et oddetall</li>
              </ul>
            </InfoBox>

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Eksponenter, heltallsdivisjon og modulo"
                initialCode={`# Eksponenter
print("3 ** 4 =", 3 ** 4)
print("2 ** 8 =", 2 ** 8)

# Heltallsdivisjon
print("7 // 2 =", 7 // 2)   # 3 hele ganger
print("9 // 4 =", 9 // 4)   # 2 hele ganger

# Modulo (rest)
print("7 % 2 =", 7 % 2)     # Rest: 1
print("9 % 4 =", 9 % 4)     # Rest: 1

# Sammenligning: vanlig divisjon vs heltallsdivisjon
print("9 / 4 =", 9 / 4)     # 2.25
print("9 // 4 =", 9 // 4)   # 2`}
                height="300px"
                storageKey="1-3-advanced-operators"
              />
            </div>

            {/* Exercise 1.7 */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.7: Eksponenter, heltallsdivisjon og modulo (eksponenter_heltall_mod.py)"
                description={`a) Skriv print(5**3) og print(2**8) for å finne ut hva 5³ og hva 2⁸ blir.\n\nb) Skriv print(9 // 4) for å finne ut av heltallsdivisjonen 9//4 blir.\n\nc) Bruk print(9 % 4) for å finne ut resten i divisjonen over (altså modulo)`}
                initialCode={`# Oppgave a)


# Oppgave b)


# Oppgave c)

`}
                difficulty="medium"
                testCases={[
                  {
                    expectedOutput: "125\n256\n2\n1",
                    description: "Sjekker eksponenter, heltallsdivisjon og modulo",
                    matchMode: 'lines'
                  }
                ]}
                hints={[
                  "5**3 betyr 5 opphøyd i 3 (5×5×5)",
                  "2**8 betyr 2 opphøyd i 8",
                  "9 // 4 gir hvor mange hele ganger 4 går i 9",
                  "9 % 4 gir resten når 9 deles på 4"
                ]}
                storageKey="1-3-exercise-1-7"
                chapterId="1-3"
                exerciseId="1-3-exercise-1-7"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0107.studenthjelp.no/"
                  youtubeId="SiK7epQfPRo"
                  title="Løsningsforslag Oppgave 1.7"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>

            {/* Exercise 1.8 - Console Exercise */}
            <div className="mt-8">
              <Card className="border-2">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg sm:text-xl">Oppgave 1.8: Programmering i konsollen</CardTitle>
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 shrink-0">
                          Lett
                        </Badge>
                      </div>
                      <div className="space-y-3">
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          Det går også an å programmere direkte i konsollen. Dette gjøres noen ganger når vi ønsker å teste kode vi ikke har brukt før, eller om vi kun ønsker å gjøre noe raskt. Forskjellen er at koden kjøres hver gang vi skriver en ny linje og Python husker det som har blitt kjørt tidligere i konsollen.
                        </p>
                        <div className="space-y-2.5">
                          <div className="flex gap-3 p-3 rounded-lg bg-muted/30 border border-muted-foreground/10">
                            <Badge variant="outline" className="shrink-0 h-6 w-6 flex items-center justify-center rounded-full font-semibold">
                              a
                            </Badge>
                            <p className="text-sm sm:text-base text-foreground leading-relaxed flex-1">
                              Bruk konsollen nedenfor til å teste de følgende kommandoene.
                            </p>
                          </div>
                          <div className="flex gap-3 p-3 rounded-lg bg-muted/30 border border-muted-foreground/10">
                            <Badge variant="outline" className="shrink-0 h-6 w-6 flex items-center justify-center rounded-full font-semibold">
                              b
                            </Badge>
                            <p className="text-sm sm:text-base text-foreground leading-relaxed flex-1">
                              Skriv <code className="px-1.5 py-0.5 bg-muted rounded text-sm font-mono">print(&quot;Hallo verden&quot;)</code> inn i konsollen. Trykk ENTER. Da vil koden kjøre.
                            </p>
                          </div>
                          <div className="flex gap-3 p-3 rounded-lg bg-muted/30 border border-muted-foreground/10">
                            <Badge variant="outline" className="shrink-0 h-6 w-6 flex items-center justify-center rounded-full font-semibold">
                              c
                            </Badge>
                            <p className="text-sm sm:text-base text-foreground leading-relaxed flex-1">
                              Skriv <code className="px-1.5 py-0.5 bg-muted rounded text-sm font-mono">5 + 3</code> inn i konsollen. Trykk ENTER. Vi trenger ofte ikke å bruke print()-funksjonen i python for å få et svar i konsollen.
                            </p>
                          </div>
                          <div className="flex gap-3 p-3 rounded-lg bg-muted/30 border border-muted-foreground/10">
                            <Badge variant="outline" className="shrink-0 h-6 w-6 flex items-center justify-center rounded-full font-semibold">
                              d
                            </Badge>
                            <p className="text-sm sm:text-base text-foreground leading-relaxed flex-1">
                              Skriv <code className="px-1.5 py-0.5 bg-muted rounded text-sm font-mono">a = 5</code> i konsollen. Trykk ENTER. Skriv så <code className="px-1.5 py-0.5 bg-muted rounded text-sm font-mono">a + 5</code>. Trykk ENTER. Her kan vi se at a fremdeles har verdien 5 også når vi kjører neste linje kode.
                            </p>
                          </div>
                          <div className="flex gap-3 p-3 rounded-lg bg-muted/30 border border-muted-foreground/10">
                            <Badge variant="outline" className="shrink-0 h-6 w-6 flex items-center justify-center rounded-full font-semibold">
                              e
                            </Badge>
                            <p className="text-sm sm:text-base text-foreground leading-relaxed flex-1">
                              Finn ut hva <code className="px-1.5 py-0.5 bg-muted rounded text-sm font-mono">4**2</code> (altså 4²) blir ved å bruke konsollen.
                            </p>
                          </div>
                          <div className="flex gap-3 p-3 rounded-lg bg-muted/30 border border-muted-foreground/10">
                            <Badge variant="outline" className="shrink-0 h-6 w-6 flex items-center justify-center rounded-full font-semibold">
                              f
                            </Badge>
                            <p className="text-sm sm:text-base text-foreground leading-relaxed flex-1">
                              Hva blir 20 heltallsdividert med 3 for noe? (altså <code className="px-1.5 py-0.5 bg-muted rounded text-sm font-mono">20//3</code>). Bruk konsollen.
                            </p>
                          </div>
                          <div className="flex gap-3 p-3 rounded-lg bg-muted/30 border border-muted-foreground/10">
                            <Badge variant="outline" className="shrink-0 h-6 w-6 flex items-center justify-center rounded-full font-semibold">
                              g
                            </Badge>
                            <p className="text-sm sm:text-base text-foreground leading-relaxed flex-1">
                              Hva blir restleddet i heltallsdivisjonen ovenfor? (altså <code className="px-1.5 py-0.5 bg-muted rounded text-sm font-mono">20%3</code>)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 p-4 sm:p-6">
                  <PythonConsole
                    title="Interaktiv Python Konsoll"
                    height="400px"
                    storageKey="1-3-console-exercise-1-8"
                    chapterId="1-3"
                    exerciseId="1-8"
                  />
                  <InfoBox type="tip" title="Tips for konsollbruk">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Trykk ENTER for å kjøre koden du har skrevet</li>
                      <li>Bruk ↑ og ↓ piltaster for å navigere i historikken</li>
                      <li>Konsollen husker variabler mellom kommandoer</li>
                      <li>Du trenger ikke print() for å se resultatet av et uttrykk</li>
                    </ul>
                  </InfoBox>
                </CardContent>
              </Card>
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0108.studenthjelp.no/"
                  youtubeId="k7k74KjGl6k"
                  title="Løsningsforslag Oppgave 1.8"
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
                    <span>Grunnleggende: + (pluss), - (minus), * (gange), / (dele)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Strenger kan bruke + for sammensetting og * for repetisjon</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>** for eksponenter (opphøyd i)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>{'//'} for heltallsdivisjon (hvor mange hele ganger)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>% for modulo (rest etter divisjon)</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <ChapterNavigation currentChapterId="1-3" />
        </div>
      </div>
    </BookLayout>
  );
}
