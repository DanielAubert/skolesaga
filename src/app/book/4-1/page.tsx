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

export default function Chapter41Page() {
  useKeyboardNavigation('4-1');

  return (
    <BookLayout currentChapterId="4-1">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="4-1" />
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">Lærebok</Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 4.1</span>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-700/10 rounded-lg">
                <Code className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 4.1</p>
                  <Badge variant="outline" className="text-green-700">10. klasse</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">Repetisjon og funksjoner</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Vi repeterer grunnleggende Python og lærer hvordan funksjoner returnerer verdier.
            </p>
          </div>

          {/* Section 1: Kort repetisjon */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Repetisjon: Grunnleggende Python</h2>

            <p className="text-lg mb-6">
              La oss repetere det viktigste fra 8. og 9. klasse: variabler, if-setninger,
              løkker, funksjoner og lister.
            </p>

            <PythonRunner
              title="Repetisjon av grunnleggende konsepter"
              initialCode={`# Variabler
tall = 10
navn = "Per"

# If-setning
if tall > 5:
    print(f"{navn}, tallet er større enn 5")

# Løkke
print("Tall fra 1 til 5:")
for i in range(1, 6):
    print(i, end=" ")

# Liste
tall_liste = [2, 4, 6, 8, 10]
print(f"\\nListen: {tall_liste}")
print(f"Første element: {tall_liste[0]}")`}
              height="350px"
              storageKey="4-1-repetisjon"
            />

            <InfoBox type="info" title="Viktig å huske">
              <ul className="list-disc list-inside space-y-1">
                <li>Variabler lagrer verdier</li>
                <li>if-setninger sjekker betingelser</li>
                <li>Løkker gjentar kode flere ganger</li>
                <li>Lister samler flere verdier</li>
              </ul>
            </InfoBox>
          </section>

          {/* Section 2: Funksjoner som returnerer verdier */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Funksjoner som returnerer verdier</h2>

            <p className="text-lg mb-6">
              I 9. klasse lærte du funksjoner som print() ut resultater. Nå lærer du
              funksjoner som <strong>returnerer</strong> verdier med <code>return</code>.
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Forskjell på print og return:</h3>
                <ul className="space-y-2">
                  <li><strong>print()</strong> - Skriver ut til skjermen</li>
                  <li><strong>return</strong> - Sender verdi tilbake til funksjonskallet</li>
                </ul>
              </CardContent>
            </Card>

            <PythonRunner
              title="Funksjoner med return"
              initialCode={`def adder(a, b):
    """Adderer to tall og returnerer summen"""
    return a + b

def multipliser(x, y):
    """Multipliserer to tall"""
    return x * y

# Bruk funksjonene
resultat1 = adder(5, 3)
resultat2 = multipliser(4, 7)

print(f"5 + 3 = {resultat1}")
print(f"4 × 7 = {resultat2}")

# Vi kan bruke resultatet videre
total = adder(resultat1, resultat2)
print(f"Total: {total}")`}
              height="350px"
              storageKey="4-1-return"
            />
          </section>

          {/* Section 3: Praktisk eksempel - Areal av rektangel */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Eksempel: Areal av rektangel</h2>

            <p className="text-lg mb-6">
              La oss lage en funksjon som beregner arealet av et rektangel.
            </p>

            <PythonRunner
              title="Arealberegning"
              initialCode={`def areal_rektangel(lengde, bredde):
    """
    Beregner arealet av et rektangel.
    A = lengde × bredde
    """
    areal = lengde * bredde
    return areal

def omkrets_rektangel(lengde, bredde):
    """
    Beregner omkretsen av et rektangel.
    O = 2 × (lengde + bredde)
    """
    omkrets = 2 * (lengde + bredde)
    return omkrets

# Test funksjonene
l = 8
b = 5

a = areal_rektangel(l, b)
o = omkrets_rektangel(l, b)

print(f"Rektangel med lengde {l} og bredde {b}:")
print(f"Areal: {a} cm²")
print(f"Omkrets: {o} cm")`}
              height="420px"
              storageKey="4-1-rektangel"
            />
          </section>

          {/* Exercises */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Oppgaver</h2>

            <div className="mb-8">
              <Exercise
                title="Oppgave 4.1.1: Funksjon for gjennomsnitt"
                description={`Lag en funksjon som tar to tall som input og returnerer gjennomsnittet.

Formel: gjennomsnitt = (a + b) / 2

Test med tallene 6 og 10.`}
                initialCode={`def gjennomsnitt(a, b):
    # Din kode her
    return

# Test funksjonen
resultat = gjennomsnitt(6, 10)
print(f"Gjennomsnitt av 6 og 10: {resultat}")`}
                difficulty="lett"
                testCases={[
                  { expectedOutput: "8", matchMode: 'contains' }
                ]}
                hints={[
                  "Gjennomsnitt = (a + b) / 2",
                  "Husk å returnere resultatet"
                ]}
                storageKey="4-1-ex1"
                chapterId="4-1"
                exerciseId="4-1-1"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 4.1.2: Funksjon for volum av kube"
                description={`Lag en funksjon som beregner volumet av en kube.

Formel: V = side³

Test med side = 4.`}
                initialCode={`def volum_kube(side):
    # Din kode her
    return

# Test
v = volum_kube(4)
print(f"Volum av kube med side 4: {v} cm³")`}
                difficulty="lett"
                testCases={[
                  { expectedOutput: "64", matchMode: 'contains' }
                ]}
                hints={[
                  "Volum = side * side * side",
                  "Eller: volum = side ** 3"
                ]}
                storageKey="4-1-ex2"
                chapterId="4-1"
                exerciseId="4-1-2"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 4.1.3: Funksjon med if-setning"
                description={`Lag en funksjon som sjekker om et tall er positivt, negativt eller null.

Funksjonen skal returnere:
- "positivt" hvis tallet er større enn 0
- "negativt" hvis tallet er mindre enn 0
- "null" hvis tallet er 0

Test med tallene -5, 0 og 7.`}
                initialCode={`def sjekk_tall(tall):
    if tall > 0:
        return "positivt"
    elif tall < 0:
        return "negativt"
    else:
        return "null"

# Test
print(sjekk_tall(-5))
print(sjekk_tall(0))
print(sjekk_tall(7))`}
                difficulty="medium"
                testCases={[
                  { expectedOutput: "negativt", matchMode: 'contains' },
                  { expectedOutput: "null", matchMode: 'contains' },
                  { expectedOutput: "positivt", matchMode: 'contains' }
                ]}
                hints={[
                  "Bruk if, elif og else",
                  "Husk å returnere strengverdier med anførselstegn"
                ]}
                storageKey="4-1-ex3"
                chapterId="4-1"
                exerciseId="4-1-3"
              />
            </div>
          </section>

          <section className="mb-12">
            <Card className="bg-green-700/5 border-green-700/20">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Oppsummering</h2>
                <div className="space-y-2">
                  <p>✓ <strong>Variabler</strong> lagrer verdier</p>
                  <p>✓ <strong>if-setninger</strong> sjekker betingelser</p>
                  <p>✓ <strong>Løkker</strong> gjentar kode</p>
                  <p>✓ <strong>Funksjoner med return</strong> sender verdier tilbake</p>
                  <p>✓ <strong>Lister</strong> samler flere verdier</p>
                </div>
              </CardContent>
            </Card>
          </section>

          <ChapterNavigation currentChapterId="4-1" />
        </div>
      </div>
    </BookLayout>
  );
}
