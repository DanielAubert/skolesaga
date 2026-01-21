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

export default function Chapter23Page() {
  useKeyboardNavigation('2-3');

  return (
    <BookLayout currentChapterId="2-3">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          {/* Progress Bar */}
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="2-3" />
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">
              Lærebok
            </Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 2.3</span>
          </div>

          {/* Chapter Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <Code className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 2.3</p>
                  <Badge variant="outline" className="text-green-600 border-green-600">8. klasse</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  If-setninger
                </h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              I dette kapitlet lærer du hvordan programmet kan ta valg basert på
              om noe er sant eller usant.
            </p>
          </div>

          {/* Section 1: Sammenligning */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Sammenligne verdier</h2>

            <p className="text-lg mb-6">
              Før vi kan ta valg i programmet, må vi kunne sammenligne verdier.
              Er et tall større enn et annet? Er to tall like?
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Sammenligningsoperatorer:</h3>
                <div className="space-y-2 font-mono text-sm">
                  <div className="flex items-center gap-3">
                    <code className="bg-muted px-2 py-1 rounded w-12">==</code>
                    <span>Er lik (to likhetstegn!)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <code className="bg-muted px-2 py-1 rounded w-12">&gt;</code>
                    <span>Større enn</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <code className="bg-muted px-2 py-1 rounded w-12">&lt;</code>
                    <span>Mindre enn</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <code className="bg-muted px-2 py-1 rounded w-12">&gt;=</code>
                    <span>Større enn eller lik</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <code className="bg-muted px-2 py-1 rounded w-12">&lt;=</code>
                    <span>Mindre enn eller lik</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <code className="bg-muted px-2 py-1 rounded w-12">!=</code>
                    <span>Ikke lik</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <InfoBox type="warning" title="Viktig!">
              For å sjekke om to ting er like bruker vi <strong>to</strong> likhetstegn (==),
              ikke ett (=). Ett likhetstegn brukes for å lagre verdier i variabler.
            </InfoBox>

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Sammenligning"
                initialCode={`# Sammenligne tall
tall = 15

print(tall == 15)  # Er tall lik 15? Ja = True
print(tall > 10)   # Er tall større enn 10? Ja = True
print(tall < 10)   # Er tall mindre enn 10? Nei = False
print(tall >= 15)  # Er tall større eller lik 15? Ja = True`}
                height="240px"
                storageKey="2-3-sammenligning"
              />
            </div>
          </section>

          {/* Section 2: if-setning */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">if-setning</h2>

            <p className="text-lg mb-6">
              En <code className="bg-muted px-1 rounded">if</code>-setning lar programmet
              gjøre noe <strong>bare hvis</strong> en betingelse er sann.
            </p>

            <Card className="mb-6 bg-muted/50">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Slik fungerer en if-setning:</h3>
                <div className="font-mono text-sm bg-background p-4 rounded-lg">
                  <code>if betingelse:</code><br />
                  <code className="ml-4">    # Dette kjøres BARE hvis betingelsen er sann</code>
                </div>
              </CardContent>
            </Card>

            <InfoBox type="tip" title="Innrykk er viktig!">
              Koden som skal kjøres hvis betingelsen er sann må ha <strong>innrykk</strong> (4 mellomrom).
              Python bruker innrykk for å vite hvilken kode som hører til if-setningen.
            </InfoBox>

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Enkel if-setning"
                initialCode={`# Sjekk om et tall er positivt
tall = 5

if tall > 0:
    print("Tallet er positivt!")
    print("Det er større enn 0")

print("Dette kjører alltid")`}
                height="240px"
                storageKey="2-3-if-eksempel"
              />
            </div>

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Sjekk alder"
                initialCode={`# Sjekk om noen er gammel nok for å kjøre moped
alder = 16

if alder >= 16:
    print("Du er gammel nok til å kjøre moped!")

print("Programmet fortsetter...")`}
                height="200px"
                storageKey="2-3-alder-moped"
              />
            </div>
          </section>

          {/* Section 3: if-else */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">if-else: Valg mellom to alternativ</h2>

            <p className="text-lg mb-6">
              Med <code className="bg-muted px-1 rounded">else</code> kan vi si hva som skal
              skje hvis betingelsen <strong>ikke</strong> er sann.
            </p>

            <Card className="mb-6 bg-muted/50">
              <CardContent className="pt-6">
                <div className="font-mono text-sm bg-background p-4 rounded-lg">
                  <code>if betingelse:</code><br />
                  <code className="ml-4">    # Dette kjøres hvis betingelsen er sann</code><br />
                  <code>else:</code><br />
                  <code className="ml-4">    # Dette kjøres hvis betingelsen er usann</code>
                </div>
              </CardContent>
            </Card>

            <PythonRunner
              title="Eksempel: Positiv eller negativ"
              initialCode={`# Sjekk om tall er positivt eller negativt
tall = -3

if tall > 0:
    print("Tallet er positivt")
else:
    print("Tallet er negativt eller null")`}
              height="200px"
              storageKey="2-3-if-else-eksempel"
            />

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Bestått eller ikke bestått"
                initialCode={`# Sjekk karakter
karakter = 4

if karakter >= 2:
    print("Gratulerer! Du har bestått!")
else:
    print("Dessverre, du har ikke bestått.")`}
                height="200px"
                storageKey="2-3-bestatt"
              />
            </div>
          </section>

          {/* Section 4: Flere eksempler */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Praktiske eksempler</h2>

            <PythonRunner
              title="Eksempel: Partall eller oddetall"
              initialCode={`# Sjekk om et tall er partall eller oddetall
tall = 7

if tall % 2 == 0:
    print(tall, "er et partall")
else:
    print(tall, "er et oddetall")

# % er modulo - resten ved divisjon
# Partall har rest 0 når de deles på 2`}
              height="260px"
              storageKey="2-3-partall"
            />

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Rabatt i butikken"
                initialCode={`# Gi rabatt hvis kunden handler for over 200 kr
pris = 250

if pris > 200:
    rabatt = pris * 0.1  # 10% rabatt
    ny_pris = pris - rabatt
    print("Du får 10% rabatt!")
    print("Ny pris:", ny_pris, "kroner")
else:
    print("Pris:", pris, "kroner")`}
                height="280px"
                storageKey="2-3-rabatt"
              />
            </div>

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Tilbakemelding på karakter"
                initialCode={`# Gi tilbakemelding basert på karakter
karakter = 5

if karakter == 6:
    print("Utmerket!")
else:
    if karakter >= 4:
        print("Bra jobbet!")
    else:
        print("Du må jobbe litt mer")`}
                height="240px"
                storageKey="2-3-tilbakemelding"
              />
            </div>
          </section>

          {/* Exercises */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Oppgaver</h2>

            {/* Exercise 2.3.1 */}
            <div className="mb-8">
              <Exercise
                title="Oppgave 2.3.1: Sjekk om tall er positivt"
                description={`Lag et program som:

a) Setter variabelen \`tall = -5\`
b) Sjekker om tallet er større enn 0
c) Hvis ja: skriv ut "Tallet er positivt"

Programmet skal kun skrive ut noe hvis tallet er positivt.`}
                initialCode={`# Sett variabelen
tall = -5

# Sjekk om tallet er positivt

`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "",
                    description: "Ingenting skal skrives ut siden -5 er negativt",
                    matchMode: 'exact'
                  }
                ]}
                hints={[
                  "Bruk if tall > 0:",
                  "Husk innrykk (4 mellomrom) før print()",
                  "Siden -5 er negativt, skal ingenting skrives ut"
                ]}
                storageKey="2-3-exercise-1"
                chapterId="2-3"
                exerciseId="2-3-1"
              />
            </div>

            {/* Exercise 2.3.2 */}
            <div className="mb-8">
              <Exercise
                title="Oppgave 2.3.2: Gammel nok for å stemme"
                description={`I Norge må man være 18 år for å stemme.

Lag et program som:
a) Setter \`alder = 20\`
b) Sjekker om personen er 18 år eller eldre
c) Hvis ja: skriv "Du kan stemme!"
d) Hvis nei: skriv "Du er for ung til å stemme"`}
                initialCode={`# Sett alder
alder = 20

# Sjekk om personen kan stemme


`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "Du kan stemme!",
                    description: "Siden 20 >= 18, skal programmet si at personen kan stemme",
                    matchMode: 'exact'
                  }
                ]}
                hints={[
                  "Bruk if alder >= 18:",
                  "Bruk else: for alternativet",
                  "Husk innrykk på begge print()-setningene"
                ]}
                storageKey="2-3-exercise-2"
                chapterId="2-3"
                exerciseId="2-3-2"
              />
            </div>

            {/* Exercise 2.3.3 */}
            <div className="mb-8">
              <Exercise
                title="Oppgave 2.3.3: Vurder temperatur"
                description={`Lag et program som gir beskjed om været basert på temperatur.

a) Sett \`temperatur = 25\`
b) Hvis temperatur er over 20: skriv "Det er varmt ute!"
c) Ellers: skriv "Det er kjølig ute"`}
                initialCode={`# Sett temperatur
temperatur = 25

# Sjekk temperaturen og gi beskjed


`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "Det er varmt ute!",
                    description: "Siden 25 > 20, skal programmet si at det er varmt",
                    matchMode: 'exact'
                  }
                ]}
                hints={[
                  "if temperatur > 20:",
                  "else:",
                  "Husk innrykk"
                ]}
                storageKey="2-3-exercise-3"
                chapterId="2-3"
                exerciseId="2-3-3"
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
                    <span>Sammenligningsoperatorer: <strong>== &gt; &lt; &gt;= &lt;= !=</strong></span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>if</strong>-setning kjører kode bare hvis betingelsen er sann</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>else</strong> kjører kode når betingelsen er usann</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span><strong>Innrykk</strong> (4 mellomrom) er viktig i Python</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <ChapterNavigation currentChapterId="2-3" />
        </div>
      </div>
    </BookLayout>
  );
}
