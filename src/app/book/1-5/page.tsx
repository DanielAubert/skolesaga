"use client";

import { BookLayout } from "@/components/book/book-layout";
import { PythonRunner } from "@/components/book/python-runner";
import { PythonInputRunner } from "@/components/book/python-input-runner";
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

export default function Chapter15Page() {
  useKeyboardNavigation('1-5');

  return (
    <BookLayout currentChapterId="1-5">
      <div className="container max-w-4xl mx-auto py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          {/* Progress Bar */}
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="1-5" />
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">
              Lærebok
            </Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 1.5</span>
          </div>

          {/* Chapter Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Kapittel 1.5</p>
                <h1 className="text-3xl md:text-4xl font-bold">
                  If-setninger og logiske operatorer
                </h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              I dette kapitlet skal du lære om betingelser, if-elif-else, sammenligningsoperatorer
              og logiske operatorer for å lage programmer som tar beslutninger.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/book-images/image55.png"
              alt="Sammenligningsoperatorer"
              width={280}
              height={373}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Video Introduction */}
          <section className="mb-12">
            <VideoLink
              url="http://pythonhefte0105.studenthjelp.no/"
              youtubeId="iMlXajspheQ"
              title="Kapittel 1.5: If-setninger og logiske operatorer"
              description="Se denne videoen før du starter med kapitlet for en best mulig introduksjon."
            />
          </section>

          {/* Section 1: Sammenligningsoperatorer */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Sammenligningsoperatorer</h2>

            <p className="text-lg mb-6">
              Før vi lærer om if-setninger, må vi forstå hvordan vi sammenligner verdier.
              Sammenligningsoperatorer gir oss en boolsk verdi (True eller False).
            </p>

            <Card className="mb-6 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-green-100 dark:bg-green-900/30">
                      <th className="px-4 py-3 text-left font-bold border-b border-green-200 dark:border-green-800">
                        De vanligste sammenlikningsoperatorene
                      </th>
                      <th className="px-4 py-3 text-left font-bold border-b border-green-200 dark:border-green-800">
                        Eksempel ifra konsollen
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-4 py-3">
                        <code className="text-red-600 dark:text-red-400 font-mono font-bold" style={{fontVariantLigatures: 'none'}}>{"=="}</code>
                        <span className="ml-2">→ Sjekker om variabler, tall eller annet <strong>er like</strong> hverandre.</span>
                      </td>
                      <td className="px-4 py-3 font-mono text-sm bg-muted/30" style={{fontVariantLigatures: 'none'}}>
                        <div><span className="text-blue-600 dark:text-blue-400">In [1]:</span> <span className="text-red-600 dark:text-red-400">{"2 == 2"}</span></div>
                        <div><span className="text-red-600 dark:text-red-400">Out[1]:</span> True</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">
                        <code className="text-red-600 dark:text-red-400 font-mono font-bold" style={{fontVariantLigatures: 'none'}}>{"!="}</code>
                        <span className="ml-2">→ Sjekker om noe <strong>ikke er likt</strong> noe annet og gir False kun hvis noe er likt.</span>
                      </td>
                      <td className="px-4 py-3 font-mono text-sm bg-muted/30" style={{fontVariantLigatures: 'none'}}>
                        <div><span className="text-blue-600 dark:text-blue-400">In [2]:</span> <span className="text-red-600 dark:text-red-400">{"2 != 3"}</span></div>
                        <div><span className="text-red-600 dark:text-red-400">Out[2]:</span> True</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">
                        <code className="text-red-600 dark:text-red-400 font-mono font-bold" style={{fontVariantLigatures: 'none'}}>{"<"}</code>
                        <span className="ml-2">→ Sjekker om noe er <strong>mindre enn</strong> noe annet.</span>
                      </td>
                      <td className="px-4 py-3 font-mono text-sm bg-muted/30" style={{fontVariantLigatures: 'none'}}>
                        <div><span className="text-blue-600 dark:text-blue-400">In [3]:</span> <span className="text-red-600 dark:text-red-400">{"5 < 2"}</span></div>
                        <div><span className="text-red-600 dark:text-red-400">Out[3]:</span> False</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">
                        <code className="text-red-600 dark:text-red-400 font-mono font-bold" style={{fontVariantLigatures: 'none'}}>{">"}</code>
                        <span className="ml-2">→ Sjekker om noe er <strong>større enn</strong> noe annet.</span>
                      </td>
                      <td className="px-4 py-3 font-mono text-sm bg-muted/30" style={{fontVariantLigatures: 'none'}}>
                        <div><span className="text-blue-600 dark:text-blue-400">In [4]:</span> <span className="text-red-600 dark:text-red-400">{"5 > 2"}</span></div>
                        <div><span className="text-red-600 dark:text-red-400">Out[4]:</span> True</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">
                        <code className="text-red-600 dark:text-red-400 font-mono font-bold" style={{fontVariantLigatures: 'none'}}>{"<="}</code>
                        <span className="ml-2">→ Sjekker om noe er <strong>mindre enn eller lik</strong> noe annet.</span>
                      </td>
                      <td className="px-4 py-3 font-mono text-sm bg-muted/30" style={{fontVariantLigatures: 'none'}}>
                        <div><span className="text-blue-600 dark:text-blue-400">In [5]:</span> <span className="text-red-600 dark:text-red-400">{"2 <= 2"}</span></div>
                        <div><span className="text-red-600 dark:text-red-400">Out[5]:</span> True</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">
                        <code className="text-red-600 dark:text-red-400 font-mono font-bold" style={{fontVariantLigatures: 'none'}}>{">="}</code>
                        <span className="ml-2">→ Sjekker om noe er <strong>større eller lik</strong> noe annet.</span>
                      </td>
                      <td className="px-4 py-3 font-mono text-sm bg-muted/30" style={{fontVariantLigatures: 'none'}}>
                        <div><span className="text-blue-600 dark:text-blue-400">In [6]:</span> <span className="text-red-600 dark:text-red-400">{"3 >= 3"}</span></div>
                        <div><span className="text-red-600 dark:text-red-400">Out[6]:</span> True</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            <InfoBox type="warning">
              Merk forskjellen: <code>=</code> er tilordning (assignment), mens <code>==</code> er
              sammenligning (comparison). <code>x = 5</code> gir x verdien 5, mens <code>x == 5</code>{" "}
              sjekker om x er lik 5.
            </InfoBox>

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Sammenligningsoperatorer"
                initialCode={`# Sammenligne tall
print("5 == 5:", 5 == 5)    # True
print("5 != 3:", 5 != 3)    # True
print("10 > 7:", 10 > 7)    # True
print("4 < 2:", 4 < 2)      # False
print("5 >= 5:", 5 >= 5)    # True
print("3 <= 2:", 3 <= 2)    # False

# Sammenligne strenger
print("'Hei' == 'Hei':", "Hei" == "Hei")  # True
print("'hei' == 'Hei':", "hei" == "Hei")  # False (case-sensitive)`}
                height="300px"
                storageKey="1-5-example-1"
              />
            </div>
            {/* Exercise 1.13 - Konsolloppgave */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.13 (konsolloppgave)"
                description={`I denne oppgaven skal du bruke Python-konsollen for å gjennomføre.

a) Skriv inn 3==4 i konsollen. Se hva slags resultat du nå får. Prøv deretter igjen med 3==3.

b) Prøv å finn ut om de følgende utsagnene gir TRUE eller FALSE uten å skrive de inn i konsollen. Sjekk svarene dine ved å skrive de inn i konsollen.
1) "Hei" != 3
2) 5 != 9
3) 4 > 4
4) 4 <= 8
5) 99 != 98+1
6) 100 + 33 >= 98+35`}
                initialCode={`# Oppgave a) - Test sammenligningsoperatorer
# Skriv 3==4 og trykk kjør, deretter 3==3

3==4

# Oppgave b) - Test utsagnene
# "Hei" != 3
# 5 != 9
# 4 > 4
# 4 <= 8
# 99 != 98+1
# 100 + 33 >= 98+35

`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "False",
                    description: "3==4 gir False",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "== sjekker om to verdier er like",
                  "!= sjekker om to verdier er ulike",
                  "Husk at Python evaluerer uttrykk på høyre side først"
                ]}
                storageKey="1-5-exercise-1-13"
                chapterId="1-5"
                exerciseId="1.13"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0113.studenthjelp.no/"
                  youtubeId="7SUbusieh1w"
                  title="Løsningsforslag Oppgave 1.13"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>
          </section>

          {/* Section 2: If-setninger */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">If-setninger</h2>

            <p className="text-lg mb-6">
              En if-setning lar oss kjøre kode kun når en betingelse er sann (True).
              Koden som skal kjøres må ha innrykk (indent) - vanligvis 4 mellomrom eller 1 tab.
            </p>

            <InfoBox type="info" title="If-setning syntaks">
              <code>if betingelse:</code>
              <br />
              <code>&nbsp;&nbsp;&nbsp;&nbsp;# Kode som kjøres hvis betingelse er True</code>
            </InfoBox>

            <div className="mt-6">
              <PythonInputRunner
                title="Eksempel: Enkel if-setning"
                initialCode={`alder = 18

if alder >= 18:
    print("Du er myndig!")

if alder < 18:
    print("Du er ikke myndig ennå")

# If-setning med input
temperatur = int(input("Temperatur i grader: "))

if temperatur > 20:
    print("Det er varmt ute!")

if temperatur < 0:
    print("Det fryser!")`}
                height="300px"
                storageKey="1-5-example-2"
              />
            </div>

            {/* Exercise 1.11 */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.11: Sjekk partall eller oddetall (input_selv.py)"
                description={'Lag et program som sjekker om et tall er partall eller oddetall.\n\nKoden har allerede linje 1: tall = int(input("Skriv inn et tall: "))\n\nDu skal bruke modulo-operatoren (%) for å sjekke om tallet er delelig på 2.\n\n- Hvis tall % 2 == 0, er tallet et partall. Print "Tallet er et partall"\n- Hvis tall % 2 == 1, er tallet et oddetall. Print "Tallet er et oddetall"\n\nBruk if og else for å sjekke begge tilfellene.'}
                initialCode={`# Be om et tall
tall = int(input("Skriv inn et tall: "))

# Sjekk om det er partall

`}
                difficulty="lett"
                testCases={[
                  {
                    input: "8",
                    expectedOutput: "Skriv inn et tall: Tallet er et partall",
                    description: "Test med partall"
                  }
                ]}
                hints={[
                  "Bruk modulo: tall % 2",
                  "Hvis tall % 2 == 0, er tallet et partall",
                  "Bruk if-setning med innrykk"
                ]}
                storageKey="1-5-exercise-1-11"
                chapterId="1-5"
                exerciseId="1.11"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0111.studenthjelp.no/"
                  youtubeId="IKHuZSqIxH0"
                  title="Løsningsforslag Oppgave 1.11"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>
          </section>

          {/* Section 3: If-else */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">If-else</h2>

            <p className="text-lg mb-6">
              Med <code>else</code> kan vi kjøre alternativ kode når betingelsen er usann (False).
              Dette gir oss to valgmuligheter: hvis betingelsen er sann, gjør dette - ellers gjør det.
            </p>

            <PythonInputRunner
              title="Eksempel: If-else"
              initialCode={`alder = int(input("Hvor gammel er du? "))

if alder >= 18:
    print("Du er myndig!")
else:
    print("Du er ikke myndig ennå")

# Sjekke passord
passord = input("Skriv inn passord: ")

if passord == "hemmelig123":
    print("Riktig passord! Tilgang innvilget.")
else:
    print("Feil passord! Tilgang nektet.")`}
              height="300px"
                storageKey="1-5-example-3"
            />

            {/* Exercise 1.12 */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.12: Positivt eller negativt?"
                description="Lag et program som ber om et tall. Hvis tallet er større enn 0, skriv 'Tallet er positivt'. Ellers skriv 'Tallet er negativt eller null'."
                initialCode={`# Be om et tall
tall = int(input("Skriv inn et tall: "))

# Sjekk om positivt eller ikke

`}
                difficulty="lett"
                testCases={[
                  {
                    input: "5",
                    expectedOutput: "Skriv inn et tall: Tallet er positivt",
                    description: "Test med positivt tall"
                  },
                  {
                    input: "-3",
                    expectedOutput: "Skriv inn et tall: Tallet er negativt eller null",
                    description: "Test med negativt tall"
                  }
                ]}
                hints={[
                  "Bruk if tall > 0:",
                  "Bruk else: for alternativet",
                  "Husk innrykk på begge blokkene"
                ]}
                storageKey="1-5-exercise-1-12"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0112.studenthjelp.no/"
                  youtubeId="Iyj2YblIBYY"
                  title="Løsningsforslag Oppgave 1.12"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>
          </section>

          {/* Section 4: If-elif-else */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">If-elif-else</h2>

            <p className="text-lg mb-6">
              Når vi har flere enn to alternativer, bruker vi <code>elif</code> (else if).
              Python sjekker betingelsene i rekkefølge og kjører den første som er sann.
            </p>

            <InfoBox type="tip">
              Du kan ha så mange <code>elif</code>-blokker du vil, men bare én <code>if</code>{" "}
              og én <code>else</code>.
            </InfoBox>

            <div className="mt-6">
              <PythonInputRunner
                title="Eksempel: If-elif-else"
                initialCode={`poeng = int(input("Hvor mange poeng fikk du? "))

if poeng >= 90:
    print("Karakter: A - Utmerket!")
elif poeng >= 80:
    print("Karakter: B - Meget bra")
elif poeng >= 70:
    print("Karakter: C - Bra")
elif poeng >= 60:
    print("Karakter: D - Bestått")
else:
    print("Karakter: F - Ikke bestått")

# Aldersgrupper
alder = int(input("Alder: "))

if alder < 13:
    print("Du er et barn")
elif alder < 20:
    print("Du er en tenåring")
elif alder < 65:
    print("Du er en voksen")
else:
    print("Du er en senior")`}
                height="350px"
                storageKey="1-5-example-4"
              />
            </div>

            {/* Exercise 1.13 */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.14: Temperaturvurdering"
                description="Lag et program som ber om temperaturen. Hvis temp > 25: 'Varmt', hvis temp > 15: 'Behagelig', hvis temp > 0: 'Kjølig', ellers: 'Kaldt'."
                initialCode={`# Be om temperatur
temp = int(input("Temperatur i grader: "))

# Vurder temperaturen

`}
                difficulty="medium"
                testCases={[
                  {
                    input: "30",
                    expectedOutput: "Temperatur i grader: Varmt",
                    description: "Test varm temperatur"
                  },
                  {
                    input: "20",
                    expectedOutput: "Temperatur i grader: Behagelig",
                    description: "Test behagelig temperatur"
                  },
                  {
                    input: "5",
                    expectedOutput: "Temperatur i grader: Kjølig",
                    description: "Test kjølig temperatur"
                  },
                  {
                    input: "-5",
                    expectedOutput: "Temperatur i grader: Kaldt",
                    description: "Test kald temperatur"
                  }
                ]}
                hints={[
                  "Bruk if temp > 25:",
                  "Deretter elif temp > 15:",
                  "Fortsett med elif temp > 0:",
                  "Avslutt med else:"
                ]}
                storageKey="1-5-exercise-1-13"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0113.studenthjelp.no/"
                  youtubeId="7YF3SHIrxoo"
                  title="Løsningsforslag Oppgave 1.14"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>
          </section>

          {/* Section 5: Logiske operatorer */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Logiske operatorer</h2>

            <p className="text-lg mb-6">
              Logiske operatorer lar oss kombinere flere betingelser i en if-setning.
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <code className="bg-muted px-3 py-1 rounded font-mono text-lg">and</code>
                    <span className="ml-4">Begge betingelser må være sanne</span>
                    <div className="mt-2 ml-8 text-muted-foreground">
                      <code>True and True = True</code>
                      <br />
                      <code>True and False = False</code>
                    </div>
                  </div>
                  <div>
                    <code className="bg-muted px-3 py-1 rounded font-mono text-lg">or</code>
                    <span className="ml-4">Minst én betingelse må være sann</span>
                    <div className="mt-2 ml-8 text-muted-foreground">
                      <code>True or False = True</code>
                      <br />
                      <code>False or False = False</code>
                    </div>
                  </div>
                  <div>
                    <code className="bg-muted px-3 py-1 rounded font-mono text-lg">not</code>
                    <span className="ml-4">Negerer/snur en betingelse</span>
                    <div className="mt-2 ml-8 text-muted-foreground">
                      <code>not True = False</code>
                      <br />
                      <code>not False = True</code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <PythonRunner
              title="Eksempel: Logiske operatorer"
              initialCode={`# AND - begge må være sanne
alder = 20
har_sertifikat = True

if alder >= 18 and har_sertifikat:
    print("Du kan kjøre bil!")

# OR - minst én må være sann
dag = "lørdag"

if dag == "lørdag" or dag == "søndag":
    print("Det er helg!")

# NOT - negerer betingelsen
regner = False

if not regner:
    print("Du trenger ikke paraply")

# Kombinere flere
temperatur = 22
sol = True

if temperatur > 20 and sol and not regner:
    print("Perfekt dag for å være ute!")`}
              height="400px"
                storageKey="1-5-example-5"
            />

            {/* Exercise 1.14 */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.15: Adgangskontroll"
                description="Lag et program som sjekker alder og medlemskap. Be om alder (int) og medlemskap (ja/nei). Hvis alder >= 18 AND medlemskap == 'ja', skriv 'Velkommen inn!', ellers 'Ingen adgang'."
                initialCode={`# Be om informasjon
alder = int(input("Alder: "))
medlemskap = input("Medlemskap (ja/nei): ")

# Sjekk adgang

`}
                difficulty="medium"
                testCases={[
                  {
                    input: "25\nja",
                    expectedOutput: "Velkommen inn!",
                    description: "Test med gyldig adgang",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Bruk and for å kombinere to betingelser",
                  "Sjekk: alder >= 18 and medlemskap == 'ja'",
                  "Bruk if-else for to alternativer"
                ]}
                storageKey="1-5-exercise-1-14"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0114.studenthjelp.no/"
                  youtubeId="OLQUDZFNHVo"
                  title="Løsningsforslag Oppgave 1.15"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>

            {/* Exercise 1.15 */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.16: Helg eller ukedag?"
                description="Lag et program som ber om en dag (string). Hvis dag er 'lørdag' OR 'søndag', skriv 'Det er helg!', ellers skriv 'Det er ukedag'."
                initialCode={`# Be om dag
dag = input("Hvilken dag er det? ")

# Sjekk helg eller ukedag

`}
                difficulty="lett"
                testCases={[
                  {
                    input: "lørdag",
                    expectedOutput: "Hvilken dag er det? Det er helg!",
                    description: "Test med lørdag"
                  },
                  {
                    input: "søndag",
                    expectedOutput: "Hvilken dag er det? Det er helg!",
                    description: "Test med søndag"
                  },
                  {
                    input: "mandag",
                    expectedOutput: "Hvilken dag er det? Det er ukedag",
                    description: "Test med ukedag"
                  }
                ]}
                hints={[
                  "Bruk or for å kombinere to betingelser",
                  "Sjekk: dag == 'lørdag' or dag == 'søndag'",
                  "Husk if-else for to alternativer"
                ]}
                storageKey="1-5-exercise-1-15"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0115.studenthjelp.no/"
                  youtubeId="3QUbHTvN3X4"
                  title="Løsningsforslag Oppgave 1.16"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>

            {/* Exercise 1.16 */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.17 (if_else_vq.py)"
                description={'Sett v = 400 og q = 900.\nLag en if-setning der koden: print("q er størst") utløses dersom q > v.\nNB: Her er det greit å merke seg at vi ikke må ha en else-setning som utløses om det ikke er sant. Kjør programmet.\nLegg til en else-setning som utløser koden: print("q er mindre enn eller lik v") dersom ikke if setningen utløses.\nKjør programmet for forskjellige verdier av v og q.'}
                initialCode={`# Sett variablene
v = 400
q = 900

# Lag if-setning

`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "q er størst",
                    description: "Når q > v"
                  }
                ]}
                hints={[
                  "Bruk if q > v:",
                  "Print meldingen med innrykk",
                  "Legg til else: for alternativet"
                ]}
                storageKey="1-5-exercise-1-16"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0116.studenthjelp.no/"
                  youtubeId="eBXxwumkJrA"
                  title="Løsningsforslag Oppgave 1.17"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>

            {/* Exercise 1.17 */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.18 (if_fin_dag.py)"
                description={'Sett x = "Ja", lag deretter en if-setning som utløser koden: print("Det var godt å høre.") dersom x == "Ja".\nLag en else-setning som utløser koden print("Det var trist.") dersom if-setningen ikke utløses. (Altså ellers)\nErstatt nå x = "Ja" med x = input("Har du en fin dag? Svar: "). Kjør programmet. Husk å skrive inn Ja i konsollen med stor forbokstav når du prøver å utløse if-setningen.'}
                initialCode={`# Sett x
x = "Ja"

# Lag if-else setning

`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "Det var godt å høre.",
                    description: "Når x er 'Ja'"
                  }
                ]}
                hints={[
                  "Bruk if x == 'Ja':",
                  "Husk anførselstegn rundt 'Ja'",
                  "else: for alternativet"
                ]}
                storageKey="1-5-exercise-1-17"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0117.studenthjelp.no/"
                  youtubeId="9m01oWFnuv0"
                  title="Løsningsforslag Oppgave 1.18"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>

            {/* Exercise 1.18 */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.19 (penger.py)"
                description={'Sett penger = 200 og pris = 150.\nLag en if-setning som utløses dersom penger > pris. Den skal utløse koden: print("Einar har råd til den dyreste fotballen og har ", penger - pris, " kroner igjen.")\nLag en else-setning som utløses dersom ikke if-setningen utløses. Koden som utløses skal være: print("Einar mangler ", pris-penger," kroner for å ha råd til fotballen.")\nKjør programmet for forskjellige verdier av penger og pris.\nI starten av koden din bruk en print()-funksjon slik at programmet skriver ut følgende: Lille Einar skal på lekebutikken for å kjøpe seg en fotball. Han får litt penger av foreldrene sine. Han er ganske liten og vet verken hva de forskjellige fotballene koster eller hvor mye han har. Han går med en fotball og pengene til kassen. \nErstatt nå penger = 200 med penger = int(input("Mannen i kassa ser at Einar har fått (Skriv inn antall kroner): "))\nDu kan nå skrive inn beløpet Einar har fått selv.\nErstatt nå pris = 150 med pris = int(input("Ballen har en pris på (Skriv inn antall kroner): "))\nPrisen på ballen kan du nå også bestemme selv.'}
                initialCode={`# Sett variablene
penger = 200
pris = 150

# Lag if-else setning

`}
                difficulty="medium"
                testCases={[
                  {
                    expectedOutput: "50",
                    description: "Når penger > pris, har Einar 50 kr igjen",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Bruk if penger > pris:",
                  "Regn ut differansen: penger - pris",
                  'Bruk f-string for pen formatering: f"...har {penger - pris} kroner..."'
                ]}
                storageKey="1-5-exercise-1-18"
                chapterId="1-5"
                exerciseId="1.18"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0118.studenthjelp.no/"
                  youtubeId="eC_d3BiFXqw"
                  title="Løsningsforslag Oppgave 1.19"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>

            {/* Exercise 1.19 */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.20: Egen if-setning (funksjon_test.py)"
                description={'Lag ditt eget program med if-setninger.\n\nVelg ett av følgende:\na) Lag et program som sjekker om en person er gammel nok til å kjøre bil (alder >= 18)\nb) Lag et program som sjekker om et tall er positivt eller negativt\nc) Lag et program som sjekker om brukeren har skrevet inn riktig passord\n\nProgrammet skal bruke input() og if-else setninger.'}
                initialCode={`# Lag ditt eget program her
# Velg ett av alternativene a), b) eller c) fra oppgaveteksten

`}
                difficulty="lett"
                testCases={[]}
                hints={[
                  "Bruk input() for å få data fra brukeren",
                  "Bruk if og else for å sjekke betingelser",
                  "Husk int() eller float() hvis du sammenligner tall"
                ]}
                storageKey="1-5-exercise-1-19"
                chapterId="1-5"
                exerciseId="1.19"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0119.studenthjelp.no/"
                  youtubeId="zLr6bEfxnns"
                  title="Løsningsforslag Oppgave 1.20"
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
                    <span>Sammenligningsoperatorer: ==, !=, &gt;, &lt;, &gt;=, &lt;=</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>If-setninger kjører kode når en betingelse er sann</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Else gir et alternativ når betingelsen er usann</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Elif brukes for flere alternativer</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Logiske operatorer: and (begge), or (minst én), not (negate)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Husk innrykk (4 mellomrom) i if-blokker</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <ChapterNavigation currentChapterId="1-5" />
        </div>
      </div>
    </BookLayout>
  );
}
