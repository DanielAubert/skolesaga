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

export default function Chapter25Page() {
  useKeyboardNavigation('2-5');

  return (
    <BookLayout currentChapterId="2-5">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          {/* Progress Bar */}
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="2-5" />
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">
              Lærebok
            </Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 2.5</span>
          </div>

          {/* Chapter Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <Code className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 2.5</p>
                  <Badge variant="outline" className="text-green-600 border-green-600">8. klasse</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Prosjekt: Enkel kalkulator
                </h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              I dette kapitlet skal du lage et eget prosjekt som kombinerer alt du har lært
              i kapittel 2: variabler, input, if-setninger og løkker.
            </p>
          </div>

          {/* Section 1: Planlegging */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Planlegging av kalkulatoren</h2>

            <p className="text-lg mb-6">
              Før vi begynner å kode, la oss planlegge hva kalkulatoren skal kunne gjøre.
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Krav til kalkulatoren:</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Be brukeren om to tall</li>
                  <li>Be brukeren om hvilken operasjon de vil utføre (+, -, *, /)</li>
                  <li>Utfør beregningen</li>
                  <li>Vis resultatet til brukeren</li>
                  <li>Spør om brukeren vil gjøre en ny beregning</li>
                </ol>
              </CardContent>
            </Card>

            <InfoBox type="info" title="Tips for prosjektet">
              Bygg programmet steg for steg. Test hver del før du går videre til neste.
              Det er helt normalt å møte på feil underveis - det er slik vi lærer!
            </InfoBox>
          </section>

          {/* Section 2: Steg 1 - Grunnleggende kalkulator */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Steg 1: Grunnleggende kalkulator</h2>

            <p className="text-lg mb-6">
              La oss starte med en enkel versjon som tar inn to tall og en operasjon.
            </p>

            <PythonRunner
              title="Versjon 1: Enkel kalkulator"
              initialCode={`# Enkel kalkulator
print("=== Enkel kalkulator ===")
print()

# Få input fra brukeren
tall1 = int(input("Skriv inn første tall: "))
tall2 = int(input("Skriv inn andre tall: "))
operasjon = input("Velg operasjon (+, -, *, /): ")

# Utfør beregningen
if operasjon == "+":
    resultat = tall1 + tall2
elif operasjon == "-":
    resultat = tall1 - tall2
elif operasjon == "*":
    resultat = tall1 * tall2
elif operasjon == "/":
    resultat = tall1 / tall2
else:
    print("Ugyldig operasjon!")
    resultat = None

# Vis resultatet
if resultat is not None:
    print()
    print(f"{tall1} {operasjon} {tall2} = {resultat}")`}
              height="480px"
              storageKey="2-5-kalkulator-v1"
            />

            <div className="mt-6">
              <InfoBox type="tip" title="elif - ny for deg?">
                <code className="bg-muted px-1 rounded">elif</code> er kort for &quot;else if&quot;.
                Det lar oss sjekke flere betingelser etter hverandre.
              </InfoBox>
            </div>
          </section>

          {/* Section 3: Steg 2 - Legg til løkke */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Steg 2: Legg til løkke</h2>

            <p className="text-lg mb-6">
              La oss gjøre kalkulatoren bedre ved å la brukeren gjøre flere beregninger
              uten å starte programmet på nytt.
            </p>

            <PythonRunner
              title="Versjon 2: Kalkulator med løkke"
              initialCode={`# Kalkulator med løkke
print("=== Kalkulator ===")
print()

fortsett = "ja"

while fortsett == "ja":
    # Få input fra brukeren
    tall1 = int(input("Skriv inn første tall: "))
    tall2 = int(input("Skriv inn andre tall: "))
    operasjon = input("Velg operasjon (+, -, *, /): ")

    # Utfør beregningen
    if operasjon == "+":
        resultat = tall1 + tall2
    elif operasjon == "-":
        resultat = tall1 - tall2
    elif operasjon == "*":
        resultat = tall1 * tall2
    elif operasjon == "/":
        resultat = tall1 / tall2
    else:
        print("Ugyldig operasjon!")
        resultat = None

    # Vis resultatet
    if resultat is not None:
        print()
        print(f"{tall1} {operasjon} {tall2} = {resultat}")
        print()

    # Spør om brukeren vil fortsette
    fortsett = input("Vil du gjøre en ny beregning? (ja/nei): ")

print()
print("Takk for at du brukte kalkulatoren!")`}
              height="580px"
              storageKey="2-5-kalkulator-v2"
            />
          </section>

          {/* Section 4: Steg 3 - Forbedringer */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Steg 3: Forbedringer</h2>

            <p className="text-lg mb-6">
              La oss legge til noen forbedringer, som å håndtere divisjon med 0.
            </p>

            <PythonRunner
              title="Versjon 3: Forbedret kalkulator"
              initialCode={`# Forbedret kalkulator
print("=== Avansert kalkulator ===")
print()

fortsett = "ja"
antall_beregninger = 0

while fortsett == "ja":
    # Få input fra brukeren
    tall1 = int(input("Skriv inn første tall: "))
    tall2 = int(input("Skriv inn andre tall: "))
    operasjon = input("Velg operasjon (+, -, *, /): ")

    # Utfør beregningen
    if operasjon == "+":
        resultat = tall1 + tall2
    elif operasjon == "-":
        resultat = tall1 - tall2
    elif operasjon == "*":
        resultat = tall1 * tall2
    elif operasjon == "/":
        if tall2 == 0:
            print("Feil: Kan ikke dele på 0!")
            resultat = None
        else:
            resultat = tall1 / tall2
    else:
        print("Ugyldig operasjon!")
        resultat = None

    # Vis resultatet
    if resultat is not None:
        print()
        print(f"{tall1} {operasjon} {tall2} = {resultat}")
        print()
        antall_beregninger += 1

    # Spør om brukeren vil fortsette
    fortsett = input("Vil du gjøre en ny beregning? (ja/nei): ")

print()
print(f"Du gjorde {antall_beregninger} beregninger.")
print("Takk for at du brukte kalkulatoren!")`}
              height="640px"
              storageKey="2-5-kalkulator-v3"
            />
          </section>

          {/* Section 5: Ditt eget prosjekt */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Ditt eget prosjekt</h2>

            <p className="text-lg mb-6">
              Nå er det din tur! Bruk det du har lært til å lage din egen kalkulator.
            </p>

            <Card className="mb-6 bg-muted/50">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Forslag til ekstra funksjoner:</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Legg til potens (opphøyd i): **</li>
                  <li>Legg til en meny som viser tilgjengelige operasjoner</li>
                  <li>Lagre alle beregninger og vis dem til slutt</li>
                  <li>Legg til flere matematiske operasjoner (kvadratrot, prosent, osv.)</li>
                  <li>Lag en penere utskrift med linjer og mellomrom</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Exercises */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Prosjektoppgave</h2>

            {/* Main Project Exercise */}
            <div className="mb-8">
              <Exercise
                title="Prosjekt: Lag din egen kalkulator"
                description={`Lag en fungerende kalkulator som:

1. Tar inn to tall fra brukeren
2. Tar inn en operasjon (+, -, *, /)
3. Beregner og viser resultatet
4. Gjentar så brukeren kan gjøre flere beregninger

Minimum krav:
- Må håndtere alle fire regneartene
- Må kunne gjøre minst én beregning
- Må vise resultatet på en fin måte

Bonuspoeng for:
- Løkke som lar brukeren gjøre flere beregninger
- Sjekk for divisjon med 0
- Telling av antall beregninger
- Fin formatering av output`}
                initialCode={`# Din kalkulator
print("=== Min kalkulator ===")
print()

# Skriv din kode her...






`}
                difficulty="vanskelig"
                testCases={[
                  {
                    expectedOutput: "",
                    description: "Test at programmet kjører uten feil",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Start med å få input: tall1, tall2, operasjon",
                  "Bruk if/elif for å sjekke hvilken operasjon",
                  "Vis resultatet med print()",
                  "Bruk en while-løkke for å gjenta",
                  "Husk å sjekke for divisjon med 0!"
                ]}
                storageKey="2-5-project"
                chapterId="2-5"
                exerciseId="2-5-project"
              />
            </div>
          </section>

          {/* Summary */}
          <section className="mb-12">
            <Card className="bg-green-500/5 border-green-500/20">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Gratulerer!</h2>
                <p className="text-lg mb-4">
                  Du har nå fullført kapittel 2 og laget ditt første større Python-program!
                </p>
                <div className="space-y-3">
                  <p className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Du kan bruke <strong>variabler</strong> for å lagre verdier</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Du kan få <strong>input</strong> fra brukeren</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Du kan bruke <strong>if-setninger</strong> for å ta valg</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Du kan bruke <strong>løkker</strong> for å gjenta kode</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>Du kan <strong>kombinere</strong> alt dette i et større program!</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <ChapterNavigation currentChapterId="2-5" />
        </div>
      </div>
    </BookLayout>
  );
}
