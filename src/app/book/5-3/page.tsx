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

export default function Chapter53Page() {
  useKeyboardNavigation('5-3');

  return (
    <BookLayout currentChapterId="5-3">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="5-3" />
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">Lærebok</Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 5.3</span>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <Calculator className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 5.3</p>
                  <Badge variant="outline" className="text-blue-600">1P</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">Lån og renter</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Lær å beregne renter, se hvordan penger vokser over tid, og forstå forskjellen mellom sparing og lån.
            </p>
          </div>

          {/* Section 1: Hva er rente? */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Hva er rente?</h2>

            <p className="text-lg mb-6">
              Rente er prisen du betaler for å låne penger, eller penger du får for å spare.
              Rentesatsen oppgis som prosent per år.
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <p><strong>Sparekonto</strong>: Du får renter på pengene du sparer</p>
                  <p><strong>Lån</strong>: Du betaler renter på pengene du låner</p>
                  <p><strong>Rentesats</strong>: Hvor mange prosent rente per år (f.eks. 4%)</p>
                  <p><strong>Enkel rente</strong>: Renter beregnes kun på hovedstolen</p>
                </div>
              </CardContent>
            </Card>

            <InfoBox type="info" title="Formel for enkel rente">
              <code>rente = hovedstol * (rentesats / 100) * antall_år</code>
            </InfoBox>

            <div className="mt-6">
              <PythonRunner
                title="Beregne enkel rente"
                initialCode={`# Beregne rente på sparekonto
saldo = 10000        # Hvor mye du har spart
rentesats = 4        # 4% rente per år
år = 1

# Beregn renter for ett år
rente = saldo * (rentesats / 100) * år

print(f"Saldo: {saldo} kr")
print(f"Rentesats: {rentesats}%")
print(f"Renter etter {år} år: {rente} kr")
print(f"Ny saldo: {saldo + rente} kr")

# Eksempel over flere år
print("\\nUtvikling over 5 år:")
for år in range(1, 6):
    rente_beløp = saldo * (rentesats / 100) * år
    total = saldo + rente_beløp
    print(f"År {år}: {total:.2f} kr")`}
                height="350px"
                storageKey="5-3-enkel-rente"
              />
            </div>
          </section>

          {/* Section 2: Sammensatt rente */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Sammensatt rente og vekst</h2>

            <p className="text-lg mb-6">
              I praksis får du ofte <strong>sammensatte renter</strong>, der rentene legges til
              saldoen hvert år, og du får renter på rentene. Dette gjør at pengene vokser raskere.
            </p>

            <InfoBox type="tip" title="Vekstfaktor">
              Hvis rentesatsen er 4%, multipliserer vi med 1.04 hvert år.
              <br />Etter n år: <code>ny_saldo = saldo * (1 + rente/100)**n</code>
            </InfoBox>

            <div className="mt-6">
              <PythonRunner
                title="Sammensatt rente med for-løkke"
                initialCode={`# Sparekonto med sammensatt rente
saldo = 10000
rentesats = 4
år = 10

print(f"Startsaldo: {saldo} kr")
print(f"Rentesats: {rentesats}% per år")
print("=" * 40)

# Simuler år for år
for i in range(1, år + 1):
    renter = saldo * (rentesats / 100)
    saldo = saldo + renter  # Legg renter til saldoen
    print(f"År {i}: {saldo:.2f} kr (renter: {renter:.2f} kr)")

print("=" * 40)
print(f"Total vekst: {saldo - 10000:.2f} kr")

# Alternativ formel (direkte beregning)
saldo_formel = 10000 * (1 + rentesats/100)**år
print(f"\\nKontroll med formel: {saldo_formel:.2f} kr")`}
                height="420px"
                storageKey="5-3-sammensatt-rente"
              />
            </div>
          </section>

          {/* Section 3: Lån og nedbetaling */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Lån og nedbetaling</h2>

            <p className="text-lg mb-6">
              Når du tar opp lån, må du betale renter på gjenstående beløp.
              Jo raskere du nedbetaler, jo mindre renter betaler du totalt.
            </p>

            <PythonRunner
              title="Simuler lån med nedbetaling"
              initialCode={`# Lån og nedbetaling
lånebeløp = 50000
rentesats = 6          # 6% rente per år
månedlig_nedbetaling = 2000

saldo = lånebeløp
måned = 0
total_renter = 0

print(f"Lånebeløp: {lånebeløp} kr")
print(f"Rente: {rentesats}% per år")
print(f"Månedlig nedbetaling: {månedlig_nedbetaling} kr")
print("=" * 50)

# Månedlig rente (årlig rente / 12)
månedlig_rente = rentesats / 12 / 100

while saldo > 0:
    måned += 1

    # Beregn renter for denne måneden
    rente = saldo * månedlig_rente
    total_renter += rente

    # Trekk nedbetaling
    if saldo + rente <= månedlig_nedbetaling:
        # Siste betaling
        betaling = saldo + rente
        saldo = 0
    else:
        betaling = månedlig_nedbetaling
        saldo = saldo + rente - månedlig_nedbetaling

    if måned <= 3 or saldo == 0:  # Vis første 3 og siste
        print(f"Mnd {måned:2}: Rente {rente:6.2f} kr | Gjenstår {saldo:8.2f} kr")

    if måned == 4 and saldo > 0:
        print("...")

print("=" * 50)
print(f"Nedbetalt på {måned} måneder ({måned/12:.1f} år)")
print(f"Totale renter: {total_renter:.2f} kr")`}
              height="500px"
              storageKey="5-3-lån-nedbetaling"
            />
          </section>

          {/* Exercises */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Oppgaver</h2>

            <div className="mb-8">
              <Exercise
                title="Oppgave 5.3.1: Enkel rente"
                description={`Du setter 5000 kr på sparekonto med 3% rente.
Hvor mye renter får du etter 1 år?`}
                initialCode={`saldo = 5000
rentesats = 3

rente = saldo * (rentesats / 100)

print(f"Renter: {rente} kr")
print(f"Ny saldo: {saldo + rente} kr")`}
                difficulty="lett"
                testCases={[
                  { expectedOutput: "150", matchMode: 'contains' },
                  { expectedOutput: "5150", matchMode: 'contains' }
                ]}
                hints={["3% av 5000 = 5000 * 0.03"]}
                storageKey="5-3-ex1"
                chapterId="5-3"
                exerciseId="5-3-1"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 5.3.2: Sparing over tid"
                description={`Du sparer 20000 kr med 5% årlig rente (sammensatt).
Hvor mye har du etter 5 år?`}
                initialCode={`saldo = 20000
rentesats = 5
år = 5

# Simuler år for år
for i in range(år):
    renter = saldo * (rentesats / 100)
    saldo = saldo + renter

print(f"Saldo etter {år} år: {saldo:.2f} kr")`}
                difficulty="medium"
                testCases={[
                  { expectedOutput: "25525", matchMode: 'contains' }
                ]}
                hints={["Sammensatt rente: legg renter til saldoen hvert år"]}
                storageKey="5-3-ex2"
                chapterId="5-3"
                exerciseId="5-3-2"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 5.3.3: Sammenlign renter"
                description={`Du har 10000 kr. Sammenlign:
- Sparekonto A: 3% rente i 10 år
- Sparekonto B: 5% rente i 10 år
Hvor mye mer tjener du på konto B?`}
                initialCode={`startbeløp = 10000
år = 10

# Konto A (3%)
saldo_A = startbeløp
for i in range(år):
    saldo_A = saldo_A * 1.03

# Konto B (5%)
saldo_B = startbeløp
for i in range(år):
    saldo_B = saldo_B * 1.05

# Differanse
forskjell = saldo_B - saldo_A

print(f"Konto A (3%): {saldo_A:.2f} kr")
print(f"Konto B (5%): {saldo_B:.2f} kr")
print(f"Forskjell: {forskjell:.2f} kr")`}
                difficulty="medium"
                testCases={[
                  { expectedOutput: "13439", matchMode: 'contains' },
                  { expectedOutput: "16288", matchMode: 'contains' }
                ]}
                hints={["Bruk vekstfaktor: saldo = saldo * 1.03 for 3%"]}
                storageKey="5-3-ex3"
                chapterId="5-3"
                exerciseId="5-3-3"
              />
            </div>
          </section>

          <section className="mb-12">
            <Card className="bg-blue-500/5 border-blue-500/20">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Oppsummering</h2>
                <div className="space-y-2">
                  <p>✓ <strong>Rente</strong>: Prisen for å låne penger (eller gevinst ved sparing)</p>
                  <p>✓ <strong>Enkel rente</strong>: Renter beregnes på hovedstol</p>
                  <p>✓ <strong>Sammensatt rente</strong>: Renter på renter - vokser raskere</p>
                  <p>✓ <strong>For-løkke</strong>: Praktisk for å simulere år for år</p>
                  <p>✓ <strong>Vekstfaktor</strong>: saldo * (1 + rente/100) for hvert år</p>
                </div>
              </CardContent>
            </Card>
          </section>

          <ChapterNavigation currentChapterId="5-3" />
        </div>
      </div>
    </BookLayout>
  );
}
