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
import { Calculator } from "lucide-react";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";

export default function Chapter51Page() {
  useKeyboardNavigation('5-1');

  return (
    <BookLayout currentChapterId="5-1">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="5-1" />
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">Lærebok</Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 5.1</span>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <Calculator className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 5.1</p>
                  <Badge variant="outline" className="text-blue-600">1P</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">Prosentregning</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Lær å beregne prosent, finne rabatter og prosentvis endring med Python.
            </p>
          </div>

          {/* Section 1: Prosent som desimaltall */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Prosent som desimaltall</h2>

            <p className="text-lg mb-6">
              Prosent betyr &quot;per hundre&quot;. For å regne med prosent i Python må vi omgjøre
              prosent til desimaltall. Dette gjør vi ved å dele på 100.
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <p><strong>50%</strong> = 50 / 100 = <strong>0.5</strong></p>
                  <p><strong>25%</strong> = 25 / 100 = <strong>0.25</strong></p>
                  <p><strong>10%</strong> = 10 / 100 = <strong>0.1</strong></p>
                  <p><strong>100%</strong> = 100 / 100 = <strong>1.0</strong></p>
                </div>
              </CardContent>
            </Card>

            <PythonRunner
              title="Omgjøre prosent til desimaltall"
              initialCode={`# Omgjøre prosent til desimaltall
prosent = 25
desimal = prosent / 100

print(f"{prosent}% = {desimal}")

# Flere eksempler
prosentverdier = [10, 20, 50, 75, 100]

for p in prosentverdier:
    d = p / 100
    print(f"{p}% = {d}")`}
              height="280px"
              storageKey="5-1-prosent-desimal"
            />
          </section>

          {/* Section 2: Beregne prosent av et tall */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Beregne prosent av et tall</h2>

            <p className="text-lg mb-6">
              For å finne hvor mye X% av et tall er, ganger vi tallet med desimaltallet.
            </p>

            <InfoBox type="info" title="Formel">
              <code>resultat = tall * (prosent / 100)</code>
            </InfoBox>

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Beregne prosent"
                initialCode={`# Beregne 20% av 500 kroner
beløp = 500
prosent = 20

resultat = beløp * (prosent / 100)

print(f"{prosent}% av {beløp} kr = {resultat} kr")

# Praktisk eksempel: Tips på restaurant
regning = 350
tips_prosent = 15
tips_beløp = regning * (tips_prosent / 100)
totalt = regning + tips_beløp

print(f"\\nRegning: {regning} kr")
print(f"Tips ({tips_prosent}%): {tips_beløp} kr")
print(f"Totalt: {totalt} kr")`}
                height="320px"
                storageKey="5-1-prosent-av-tall"
              />
            </div>
          </section>

          {/* Section 3: Rabatt på varer */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Rabatt på varer</h2>

            <p className="text-lg mb-6">
              Når en vare har rabatt, trekker vi rabattbeløpet fra originalprisen.
            </p>

            <PythonRunner
              title="Beregne rabattpris"
              initialCode={`# Beregne pris etter rabatt
originalpris = 800
rabatt_prosent = 25

# Finn rabattbeløp
rabatt_beløp = originalpris * (rabatt_prosent / 100)

# Finn ny pris
ny_pris = originalpris - rabatt_beløp

print(f"Originalpris: {originalpris} kr")
print(f"Rabatt ({rabatt_prosent}%): -{rabatt_beløp} kr")
print(f"Ny pris: {ny_pris} kr")

# Alternativ metode: beregne direkte
# Hvis 25% rabatt, betaler du 75% av prisen
betaler_prosent = 100 - rabatt_prosent
ny_pris_alt = originalpris * (betaler_prosent / 100)
print(f"\\nAlternativ beregning: {ny_pris_alt} kr")`}
              height="350px"
              storageKey="5-1-rabatt"
            />
          </section>

          {/* Section 4: Prosentvis endring */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Prosentvis endring</h2>

            <p className="text-lg mb-6">
              For å finne prosentvis endring mellom to tall bruker vi formelen:
            </p>

            <InfoBox type="info" title="Formel for prosentvis endring">
              <code>prosentvis_endring = ((ny_verdi - gammel_verdi) / gammel_verdi) * 100</code>
            </InfoBox>

            <div className="mt-6">
              <PythonRunner
                title="Beregne prosentvis endring"
                initialCode={`# Eksempel: Prisendring på bensin
gammel_pris = 18.50
ny_pris = 20.35

# Beregn endring i kroner
endring = ny_pris - gammel_pris

# Beregn prosentvis endring
prosent_endring = (endring / gammel_pris) * 100

print(f"Gammel pris: {gammel_pris} kr/liter")
print(f"Ny pris: {ny_pris} kr/liter")
print(f"Endring: {endring:.2f} kr")
print(f"Prosentvis økning: {prosent_endring:.1f}%")

# Eksempel 2: Nedgang i pris
gammel_befolkning = 5000
ny_befolkning = 4650
endring = ny_befolkning - gammel_befolkning
prosent = (endring / gammel_befolkning) * 100

print(f"\\nBefolkningsendring: {prosent:.1f}%")`}
                height="380px"
                storageKey="5-1-prosent-endring"
              />
            </div>
          </section>

          {/* Exercises */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Oppgaver</h2>

            <div className="mb-8">
              <Exercise
                title="Oppgave 5.1.1: Rabatt på sko"
                description={`Et par sko koster 1200 kr. De er på 30% salg.
Beregn rabattbeløpet og den nye prisen.`}
                initialCode={`# Originalpris og rabatt
pris = 1200
rabatt = 30

# Beregn rabattbeløp og ny pris
rabatt_belop = pris * (rabatt / 100)
ny_pris = pris - rabatt_belop

print(f"Rabatt: {rabatt_belop} kr")
print(f"Ny pris: {ny_pris} kr")`}
                difficulty="lett"
                testCases={[
                  { expectedOutput: "360", matchMode: 'contains' },
                  { expectedOutput: "840", matchMode: 'contains' }
                ]}
                hints={["30% av 1200 = 1200 * 0.30 = 360"]}
                storageKey="5-1-ex1"
                chapterId="5-1"
                exerciseId="5-1-1"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 5.1.2: Moms"
                description={`En vare koster 250 kr uten moms. Moms er 25%.
Beregn momsbeløpet og totalprisen med moms.`}
                initialCode={`# Pris uten moms
pris_uten_moms = 250
moms_prosent = 25

# Beregn moms og totalpris
moms_belop = pris_uten_moms * (moms_prosent / 100)
totalpris = pris_uten_moms + moms_belop

print(f"Moms: {moms_belop} kr")
print(f"Totalpris: {totalpris} kr")`}
                difficulty="lett"
                testCases={[
                  { expectedOutput: "62.5", matchMode: 'contains' },
                  { expectedOutput: "312.5", matchMode: 'contains' }
                ]}
                hints={["Momsbeløp = 250 * 0.25", "Totalpris = pris + moms"]}
                storageKey="5-1-ex2"
                chapterId="5-1"
                exerciseId="5-1-2"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 5.1.3: Prisøkning"
                description={`Et strømabonnement kostet 450 kr/måned i fjor.
I år koster det 495 kr/måned. Hvor mange prosent har prisen økt?`}
                initialCode={`# Gammel og ny pris
gammel_pris = 450
ny_pris = 495

# Beregn prosentvis økning
endring = ny_pris - gammel_pris
prosent_okning = (endring / gammel_pris) * 100

print(f"Prisøkning: {prosent_okning:.1f}%")`}
                difficulty="medium"
                testCases={[
                  { expectedOutput: "10", matchMode: 'contains' }
                ]}
                hints={["Endring = 495 - 450 = 45 kr", "45 / 450 = 0.1 = 10%"]}
                storageKey="5-1-ex3"
                chapterId="5-1"
                exerciseId="5-1-3"
              />
            </div>
          </section>

          <section className="mb-12">
            <Card className="bg-blue-500/5 border-blue-500/20">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Oppsummering</h2>
                <div className="space-y-2">
                  <p>✓ <strong>Prosent til desimal</strong>: del på 100</p>
                  <p>✓ <strong>X% av et tall</strong>: tall * (prosent / 100)</p>
                  <p>✓ <strong>Rabattpris</strong>: originalpris - (originalpris * rabatt/100)</p>
                  <p>✓ <strong>Prosentvis endring</strong>: ((ny - gammel) / gammel) * 100</p>
                </div>
              </CardContent>
            </Card>
          </section>

          <ChapterNavigation currentChapterId="5-1" />
        </div>
      </div>
    </BookLayout>
  );
}
