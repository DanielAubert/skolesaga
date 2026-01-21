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
import { TrendingUp } from "lucide-react";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";

export default function Chapter94Page() {
  useKeyboardNavigation('9-4');

  return (
    <BookLayout currentChapterId="9-4">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="9-4" />
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">Lærebok</Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 9.4</span>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-600/10 rounded-lg">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 9.4</p>
                  <Badge variant="outline" className="text-purple-600 border-purple-600">R1</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">Prosjekt: Optimering</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Bruk derivasjon til å løse praktiske optimeringsproblemer.
            </p>
          </div>

          {/* Section 1: Hva er optimering? */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Hva er optimering?</h2>

            <p className="text-lg mb-6">
              Optimering handler om å finne den beste løsningen på et problem. I matematikk
              betyr det ofte å finne maksimum eller minimum av en funksjon.
            </p>

            <p className="text-lg mb-6">
              Eksempler på optimeringsproblemer:
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span><strong>Økonomi:</strong> Maksimere profitt eller minimere kostnader</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span><strong>Produksjon:</strong> Finne den mest effektive måten å produsere varer på</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span><strong>Geometri:</strong> Finne største volum eller minste overflateareal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">•</span>
                    <span><strong>Fysikk:</strong> Finne korteste tid eller laveste energiforbruk</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <InfoBox type="info" title="Fremgangsmåte">
              <ol className="list-decimal list-inside space-y-2 mt-2">
                <li>Sett opp en funksjon som beskriver det du vil optimere</li>
                <li>Finn den deriverte av funksjonen</li>
                <li>Finn ekstremalpunkter (hvor f&apos;(x) = 0)</li>
                <li>Sjekk om det er maksimum eller minimum</li>
                <li>Svar på problemet med konkrete verdier</li>
              </ol>
            </InfoBox>
          </section>

          {/* Section 2: Eksempel - Maksimere areal */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Eksempel: Maksimere areal av rektangel</h2>

            <p className="text-lg mb-6">
              <strong>Problem:</strong> Du har 40 meter gjerde og skal lage et rektangulært
              område. Hva er det største arealet du kan lage?
            </p>

            <p className="text-lg mb-6">
              La x = bredden. Da er lengden = (40 - 2x) / 2 = 20 - x.
              <br />
              Arealet er: A(x) = x · (20 - x) = 20x - x²
            </p>

            <div className="mt-6">
              <PythonRunner
                title="Løsning: Finn maksimalt areal"
                initialCode={`def A(x):
    """Arealet som funksjon av bredden x"""
    return 20*x - x**2

def derivert(f, x):
    h = 0.0001
    return (f(x + h) - f(x)) / h

# Finn ekstremalpunkt
print("Søker etter ekstremalpunkt...")
forrige_fortegn = None

for i in range(0, 201):
    x = i / 10
    fprim = derivert(A, x)
    fortegn = "+" if fprim > 0 else "-"

    if forrige_fortegn and forrige_fortegn != fortegn:
        print(f"\\nEkstremalpunkt ved x = {x}")
        bredde = x
        lengde = 20 - x
        areal = A(x)
        print(f"Bredde: {bredde} m")
        print(f"Lengde: {lengde} m")
        print(f"Maksimalt areal: {areal} m²")

    forrige_fortegn = fortegn`}
                height="450px"
                storageKey="9-4-areal-optimering"
              />
            </div>

            <p className="text-lg mt-6">
              Løsningen er at rektangelet skal være en kvadrat med sider på 10 meter,
              som gir et areal på 100 m².
            </p>
          </section>

          {/* Exercise 9.10 */}
          <div className="mt-8">
            <Exercise
              title="Oppgave 9.10: Optimere produktfunksjon"
              description={`To positive tall x og y skal ha sum 50 (altså x + y = 50).

a) Uttrykk produktet P = x · y som en funksjon av bare x.
   Hint: Siden x + y = 50, er y = 50 - x.

b) Finn hvilket x som gir maksimalt produkt.

c) Hva er de to tallene og hva er produktet deres?`}
              initialCode={`def P(x):
    """Produktet x·y der x + y = 50"""
    # y = 50 - x, så P = x * (50 - x)
    return x * (50 - x)

def derivert(f, x):
    h = 0.0001
    return (f(x + h) - f(x)) / h

# Finn ekstremalpunkt
forrige_fortegn = None

for i in range(0, 501):
    x = i / 10
    fprim = derivert(P, x)
    fortegn = "+" if fprim > 0 else "-"

    if forrige_fortegn and forrige_fortegn != fortegn:
        y = 50 - x
        produkt = P(x)
        print(f"x = {x}")
        print(f"y = {y}")
        print(f"Maksimalt produkt: {produkt}")

    forrige_fortegn = fortegn`}
              difficulty="medium"
              testCases={[
                {
                  expectedOutput: "25",
                  description: "Begge tallene skal være 25",
                  matchMode: 'contains'
                },
                {
                  expectedOutput: "625",
                  description: "Produktet skal være 625",
                  matchMode: 'contains'
                }
              ]}
              hints={[
                "P(x) = x * (50 - x) = 50x - x²",
                "Ekstremalpunktet er ved x = 25",
                "De to tallene er x = 25 og y = 25, produkt = 625"
              ]}
              storageKey="9-4-exercise-1"
              chapterId="9-4"
              exerciseId="9-4-exercise-1"
            />
          </div>

          {/* Exercise 9.11 */}
          <div className="mt-8">
            <Exercise
              title="Oppgave 9.11: Minimere materialbruk"
              description={`En åpen boks skal lages av et rektangulært stykke papp som er 24 cm × 18 cm.
Man klipper ut kvadrater i hjørnene og bretter opp sidene.

Hvis siden i kvadratene er x cm, blir volumet:
V(x) = x · (24 - 2x) · (18 - 2x)

a) Lag funksjonen V(x).

b) Finn hvilket x som gir maksimalt volum (søk i intervallet [0, 9]).

c) Hva er det maksimale volumet?`}
              initialCode={`def V(x):
    """Volum av boks som funksjon av x"""
    return x * (24 - 2*x) * (18 - 2*x)

def derivert(f, x):
    h = 0.0001
    return (f(x + h) - f(x)) / h

# Finn ekstremalpunkt i [0, 9]
maks_volum = 0
beste_x = 0

for i in range(0, 91):
    x = i / 10
    volum = V(x)

    if volum > maks_volum:
        maks_volum = volum
        beste_x = x

print(f"Optimal x: {beste_x} cm")
print(f"Maksimalt volum: {maks_volum:.1f} cm³")
print(f"\\nBoksens mål:")
print(f"Høyde: {beste_x} cm")
print(f"Lengde: {24 - 2*beste_x} cm")
print(f"Bredde: {18 - 2*beste_x} cm")`}
              difficulty="vanskelig"
              testCases={[
                {
                  expectedOutput: "3",
                  description: "Optimal x skal være omtrent 3 cm",
                  matchMode: 'contains'
                },
                {
                  expectedOutput: "648",
                  description: "Maksimalt volum skal være omtrent 648 cm³",
                  matchMode: 'contains'
                }
              ]}
              hints={[
                "V(x) = x * (24 - 2*x) * (18 - 2*x)",
                "Optimal x ≈ 3 cm",
                "Maksimalt volum ≈ 648 cm³"
              ]}
              storageKey="9-4-exercise-2"
              chapterId="9-4"
              exerciseId="9-4-exercise-2"
            />
          </div>

          {/* Exercise 9.12 */}
          <div className="mt-8">
            <Exercise
              title="Oppgave 9.12: Profittmaksimering"
              description={`Et firma produserer x enheter av et produkt. Profitten er gitt ved:

P(x) = -0.01x² + 8x - 100

der P er profitt i kroner og x er antall enheter.

a) Finn hvor mange enheter firmaet skal produsere for å maksimere profitten.

b) Hva er den maksimale profitten?

c) Hvor stor er profitten hvis de produserer 300 enheter? 500 enheter?`}
              initialCode={`def P(x):
    """Profitt som funksjon av antall enheter"""
    return -0.01*x**2 + 8*x - 100

def derivert(f, x):
    h = 0.0001
    return (f(x + h) - f(x)) / h

# Finn ekstremalpunkt
forrige_fortegn = None

for i in range(0, 1001, 10):
    x = i
    fprim = derivert(P, x)
    fortegn = "+" if fprim > 0 else "-"

    if forrige_fortegn and forrige_fortegn != fortegn:
        print(f"Optimal produksjon: {x} enheter")
        print(f"Maksimal profitt: {P(x):.2f} kr")
        break

    forrige_fortegn = fortegn

# Test andre verdier
print(f"\\nProfitt ved 300 enheter: {P(300):.2f} kr")
print(f"Profitt ved 500 enheter: {P(500):.2f} kr")`}
              difficulty="medium"
              testCases={[
                {
                  expectedOutput: "400",
                  description: "Optimal produksjon er 400 enheter",
                  matchMode: 'contains'
                },
                {
                  expectedOutput: "1500",
                  description: "Maksimal profitt skal være 1500 kr",
                  matchMode: 'contains'
                }
              ]}
              hints={[
                "P(x) = -0.01x² + 8x - 100",
                "Ekstremalpunkt ved x = 400",
                "Maksimal profitt P(400) = 1500 kr"
              ]}
              storageKey="9-4-exercise-3"
              chapterId="9-4"
              exerciseId="9-4-exercise-3"
            />
          </div>

          {/* Summary */}
          <section className="mb-12 mt-12">
            <Card className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Oppsummering - Kapittel 9</h2>
                <div className="space-y-3">
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>Numerisk derivasjon gir tilnærmede verdier for f&apos;(x)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>Ekstremalpunkter finnes ved å søke etter f&apos;(x) = 0</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>Newtons metode finner nullpunkter raskt og presist</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>Optimering bruker derivasjon til å løse praktiske problemer</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <ChapterNavigation currentChapterId="9-4" />
        </div>
      </div>
    </BookLayout>
  );
}
