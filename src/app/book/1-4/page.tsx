"use client";

import { BookLayout } from "@/components/book/book-layout";
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

export default function Chapter14Page() {
  useKeyboardNavigation('1-4');
  return (
    <BookLayout currentChapterId="1-4">
      <div className="container max-w-4xl mx-auto py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          {/* Progress Bar */}
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="1-4" />
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">
              Lærebok
            </Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 1.4</span>
          </div>

          {/* Chapter Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Kapittel 1.4</p>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Input fra bruker
                </h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              I dette kapitlet skal du lære å ta imot input fra brukeren og konvertere
              mellom ulike datatyper for å lage interaktive programmer.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/book-images/image38.png"
              alt="Input fra bruker"
              width={305}
              height={426}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Video Introduction */}
          <section className="mb-12">
            <VideoLink
              url="http://pythonhefte0104.studenthjelp.no/"
              youtubeId="2Rzj9s4RgOQ"
              title="Kapittel 1.4: Input fra bruker"
              description="Se denne videoen før du starter med kapitlet for en best mulig introduksjon."
            />
          </section>

          {/* Section 1: input() funksjonen */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">input()-funksjonen</h2>

            <p className="text-lg mb-6">
              Til nå har alle programmene våre vært statiske - de gjør det samme hver gang.
              Med <code>input()</code>-funksjonen kan vi lage interaktive programmer som
              reagerer på brukerens valg!
            </p>

            <InfoBox type="info" title="Hva er input()?">
              <code>input()</code> funksjonen stopper programmet og venter på at brukeren skal
              skrive inn noe tekst. Når brukeren trykker Enter, returnerer funksjonen teksten
              som en streng (str).
            </InfoBox>

            <div className="mt-6">
              <PythonInputRunner
                title="Eksempel: Enkel input"
                initialCode={`# Be om brukerens navn
navn = input("Hva heter du? ")
print("Hei,", navn, "!")

# Be om favorittfarge
farge = input("Hva er favorittfargen din? ")
print("Jeg liker også", farge)`}
                height="200px"
                storageKey="1-4-input-example"
              />
            </div>

            <div className="mt-6">
              <InfoBox type="warning">
                <code>input()</code> returnerer alltid en streng (str), selv om brukeren
                skriver inn tall! Hvis du vil bruke tallet i beregninger, må du konvertere
                det først.
              </InfoBox>
            </div>
          </section>

          {/* Section 2: Typekonvertering */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Typekonvertering</h2>

            <p className="text-lg mb-6">
              Siden <code>input()</code> alltid returnerer en streng, må vi konvertere
              til andre datatyper når vi skal jobbe med tall eller andre verdier.
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <code className="bg-muted px-3 py-1 rounded font-mono">int()</code>
                    <span>Konverterer til heltall (integer)</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <code className="bg-muted px-3 py-1 rounded font-mono">float()</code>
                    <span>Konverterer til desimaltall (float)</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <code className="bg-muted px-3 py-1 rounded font-mono">str()</code>
                    <span>Konverterer til tekststreng (string)</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <code className="bg-muted px-3 py-1 rounded font-mono">bool()</code>
                    <span>Konverterer til boolsk verdi (True/False)</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <code className="bg-muted px-3 py-1 rounded font-mono">type()</code>
                    <span>Viser datatypen til en verdi</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <PythonInputRunner
              title="Eksempel: Konvertering av input"
              initialCode={`# Input som streng
alder_str = input("Hvor gammel er du? ")
print("Type:", type(alder_str))  # <class 'str'>

# Konverter til heltall
alder_int = int(alder_str)
print("Type:", type(alder_int))  # <class 'int'>

# Nå kan vi regne med tallet
om_10_aar = alder_int + 10
print("Om 10 år er du", om_10_aar, "år")

# Eller gjør alt på én linje:
hoyde = float(input("Hvor høy er du (i meter)? "))
print("Du er", hoyde, "meter høy")`}
              height="300px"
              storageKey="1-4-type-conversion"
            />

            <div className="mt-6">
              <InfoBox type="tip" title="Typekonvertering på én linje">
                Du kan konvertere input direkte:
                <br />
                <code>alder = int(input(&quot;Alder: &quot;))</code>
                <br />
                Dette er kortere enn å først lagre strengen og deretter konvertere.
              </InfoBox>
            </div>

            {/* Exercise 1.9 */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.9: Regning med input (dataendring.py)"
                description={`a) Lag et program som ber brukeren om å skrive inn det første tallet. Koden for dette er allerede skrevet: tall1 = int(input("Skriv inn første tall: ")). Legg merke til hvordan vi bruker int(input()) for å både få input OG konvertere til heltall på samme linje.\n\nb) Be brukeren om å skrive inn det andre tallet. Bruk samme teknikk som i del a). Lagre det i en variabel som heter tall2.\n\nc) Regn ut summen av tall1 og tall2, og skriv ut "Summen er: " etterfulgt av summen.`}
                initialCode={`# Oppgave a) Be om første tall
tall1 = int(input("Skriv inn første tall: "))

# Oppgave b) Be om andre tall


# Oppgave c) Regn ut og skriv ut summen
`}
                difficulty="lett"
                testCases={[
                  {
                    input: "15\n27",
                    expectedOutput: "42",
                    description: "Test med 15 + 27 = 42",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Bruk int(input()) for å få tall direkte",
                  "Legg sammen de to tallene med +",
                  "Bruk print() for å skrive ut resultatet"
                ]}
                storageKey="1-4-exercise-1-9"
                chapterId="1-4"
                exerciseId="1.9"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0109.studenthjelp.no/"
                  youtubeId="6BCISOzTDhY"
                  title="Løsningsforslag Oppgave 1.9"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>
          </section>

          {/* Section 3: Praktiske eksempler */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Praktiske eksempler</h2>

            <p className="text-lg mb-6">
              La oss se på noen praktiske eksempler hvor vi kombinerer input, konvertering
              og utregninger.
            </p>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">Eksempel: Alderskalkulator</h3>
                  <PythonInputRunner
                    title="Hvor gammel blir du i år?"
                    initialCode={`# Hent fødselsår
fodselsaar = int(input("Hvilket år er du født? "))

# Dagens år (2025)
dette_aar = 2025

# Regn ut alder
alder = dette_aar - fodselsaar

print("Du er", alder, "år gammel (eller blir det i år)!")`}
                    height="250px"
                    storageKey="1-4-age-calculator"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">Eksempel: Arealberegning</h3>
                  <PythonInputRunner
                    title="Beregn arealet av et rektangel"
                    initialCode={`# Hent lengde og bredde
lengde = float(input("Lengde (i meter): "))
bredde = float(input("Bredde (i meter): "))

# Regn ut areal
areal = lengde * bredde

print("Arealet er", areal, "kvadratmeter")`}
                    height="250px"
                    storageKey="1-4-area-calculator"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Example for Exercise 1.10 */}
            <Card className="mt-8 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800/30">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3">Eksempel: Input og addisjon</h3>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono">
                  <code>{`a = 5                              # Vi gir variabelen a heltallsverdien 5.
b = input("Skriv inn et tall: ")   # Vi ber brukeren om en verdi. (Streng)
b = int(b)                         # Vi gjør om inputten til heltall
print(b)                           # Skriver ut det vi nettopp skrev inn.
print(a+b)                         # Vi finner summen av a og b`}</code>
                </pre>
              </CardContent>
            </Card>

            {/* Exercise 1.10 */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.10 (input_kopi.py)"
                description={`Kopier det ferdige programmet i eksempelet ovenfor inn i kodevinduet under. Kjør programmet. Skriv inn tallet 3 til høyre for Skriv inn et tall: trykk deretter ENTER.

Du har fullført oppgaven når utskriften i konsollen din er lik den i eksempelet.`}
                initialCode=""
                difficulty="lett"
                testCases={[
                  {
                    input: "3",
                    expectedOutput: "3\n8",
                    description: "Tester med input 3: Skal skrive ut 3 og deretter 8 (5+3)",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Kopier koden linje for linje fra eksempelet",
                  "Du trenger ikke kopiere kommentarene (teksten etter #)",
                  "Når du kjører programmet, skriv inn tallet 3"
                ]}
                storageKey="1-4-exercise-1-10"
                chapterId="1-4"
                exerciseId="1.10"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0110.studenthjelp.no/"
                  youtubeId="TkbHr2_3k50"
                  title="Løsningsforslag Oppgave 1.10"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>

            {/* Exercise 1.11 */}
            <div className="mt-8">
              <InfoBox type="note" title="NB: Om testing">
                Kun den ferdige løsningen (etter deloppgave e) vil bestå &quot;Test løsning&quot;.
                Bruk &quot;Kjør interaktivt&quot; for å teste underveis.
              </InfoBox>
              <Exercise
                title="Oppgave 1.11: Skriv selv (input_selv.py)"
                description={`NB: Du skal nå skrive selv og altså ikke kopiere programmet i forrige oppgave.

a) Sett \`a = input("Skriv inn ett heltall: ")\` og \`b = 3.2\`

b) Skriv nå \`a = int(a)\` under det du skrev i oppgave a) for å gjøre om strengobjektet som blir lagret i a om til et heltallsobjekt som kan brukes til å regne med.

c) Skriv \`print(a+b)\` nederst i koden din og kjør så programmet. Husk at du må skrive inn ett tall og trykke ENTER når koden spør deg om et tall.

d) Gjør en endring i programmet slik at \`b = input("Skriv inn ett flyttall: ")\` istedenfor 3.2. Prøv å kjøre programmet, du vil nå få en feilmelding etter du har skrevet inn egenvalgte tall i konsollen. Hvorfor?

e) For å løse problemet ifra oppgave d) gjør nok en endring på b og skriv \`b = float(b)\` i linjen like under \`b = input("Skriv inn ett flyttall: ")\`. Her er det viktig at denne linjen kommer før \`print(a+b)\`.`}
                initialCode={`# Oppgave a) Skriv koden for a og b her


# Oppgave b) Konverter a til heltall


# Oppgave c) Skriv ut summen

`}
                difficulty="medium"
                testCases={[
                  {
                    input: "5\n2.5",
                    expectedOutput: "7.5",
                    description: "Test med heltall 5 og flyttall 2.5: Skal gi 7.5",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "I del a): a = input(\"Skriv inn ett heltall: \") og b = 3.2",
                  "I del b): a = int(a) konverterer strengen til heltall",
                  "I del d): Når b kommer fra input(), er det en streng - du kan ikke legge sammen tall og streng",
                  "I del e): b = float(b) konverterer strengen til desimaltall"
                ]}
                storageKey="1-4-exercise-1-11"
                chapterId="1-4"
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

            {/* Bonus Exercise 1.12 */}
            <div className="mt-8">
              <Exercise
                title="Bonusoppgave 1.12: Fruktkiosk (input_fruktkiosk.py)"
                description={`Knut jobber i en kiosk som selger epler og bananer. Eplene koster 60 kr/kg og bananene kun 45 kr/kg. Knut veier frukten ved disken, men han tuller hele tiden med å huske alle prisene. Han har bestemt seg for å løse problemet ved å be deg lage et lite program som gjør jobben hans enklere.

Programmet skal motta informasjon om hvor mange kilo epler og hvor mange kilo bananer en kunde ønsker å kjøpe. Programmet skal deretter returnere hvor mye det koster for eplene, hvor mye det koster for bananene og hvor mye det koster til sammen. (På en oversiktlig måte)

NB: Under beskrives en mer skritt for skritt oppgavedeling på denne problemstillingen. Men om du ønsker kan du allerede nå prøve deg på denne oppgaven (Dette vil øke utfordringen og derfor læringen). Du oppfordres uansett til å ta en titt under når du er ferdig.

a) Lag variabler pris_kg_eple og pris_kg_banan der du lagrer relevante kilopriser.

b) Bruk input()-funksjonen til å motta antall kilo epler og antall kilo bananer og legg informasjonen i variablene kg_eple og kg_banan. NB: Husk å gjøre om til flyttall.

c) Sett kostnad_epler = kg_eple*pris_kg_eple og gjør tilsvarende med banan.

d) Skriv print("Eplene koster til sammen:", kostnad_epler) for å få en svarsetning for hvor mye eplene koster. Gjør det samme for bananer og den samlede prisen.`}
                initialCode={`# Oppgave a) Sett kilopriser
pris_kg_eple = 60
pris_kg_banan = 45

# Oppgave b) Hent antall kilo fra bruker (husk float!)


# Oppgave c) Regn ut kostnad for hver frukt


# Oppgave d) Skriv ut resultatene

`}
                difficulty="vanskelig"
                testCases={[
                  {
                    input: "2\n3",
                    expectedOutput: "120",
                    description: "2 kg epler (2*60=120)",
                    matchMode: 'contains'
                  },
                  {
                    input: "2\n3",
                    expectedOutput: "135",
                    description: "3 kg bananer (3*45=135)",
                    matchMode: 'contains'
                  },
                  {
                    input: "2\n3",
                    expectedOutput: "255",
                    description: "Total (120+135=255)",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Del a): pris_kg_eple = 60 og pris_kg_banan = 45",
                  "Del b): kg_eple = float(input(\"Hvor mange kg epler? \"))",
                  "Del c): kostnad_epler = kg_eple * pris_kg_eple",
                  "Del d): Husk å også skrive ut total = kostnad_epler + kostnad_banan"
                ]}
                storageKey="1-4-exercise-1-12"
                chapterId="1-4"
                exerciseId="1.12"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0112.studenthjelp.no/"
                  youtubeId="4zEpmTY6vkQ"
                  title="Løsningsforslag Oppgave 1.12"
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
                    <span>input() brukes for å få input fra brukeren</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>input() returnerer alltid en streng (str)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>int() konverterer til heltall, float() til desimaltall</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Du kan kombinere input() og konvertering på én linje</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Husk å konvertere input før du bruker det i beregninger</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <ChapterNavigation currentChapterId="1-4" />
        </div>
      </div>
    </BookLayout>
  );
}
