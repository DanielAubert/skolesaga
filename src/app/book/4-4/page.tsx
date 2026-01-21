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

export default function Chapter44Page() {
  useKeyboardNavigation('4-4');

  return (
    <BookLayout currentChapterId="4-4">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="4-4" />
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">Lærebok</Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 4.4</span>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-700/10 rounded-lg">
                <Code className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 4.4</p>
                  <Badge variant="outline" className="text-green-700">10. klasse</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">Prosjekt - Modellering</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Vi bruker alt vi har lært til å modellere og løse et reelt problem.
            </p>
          </div>

          {/* Section 1: Introduksjon til prosjektet */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Modellering av populasjonsvekst</h2>

            <p className="text-lg mb-6">
              La oss modellere hvordan en populasjon vokser over tid. Vi starter med
              en enkel modell hvor populasjonen øker med en fast prosent hvert år.
            </p>

            <Card className="mb-6 bg-muted/50">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Modell for populasjonsvekst:</h3>
                <p className="font-mono text-center text-lg mb-2">
                  P(t) = P₀ × (1 + r)ᵗ
                </p>
                <div className="text-sm space-y-1">
                  <p><strong>P₀</strong> = startpopulasjon</p>
                  <p><strong>r</strong> = vekstrate (prosent som desimaltall)</p>
                  <p><strong>t</strong> = tid i år</p>
                </div>
              </CardContent>
            </Card>

            <PythonRunner
              title="Enkel populasjonsmodell"
              initialCode={`def populasjon(P0, r, t):
    """
    Beregner populasjon etter t år.

    P0: startpopulasjon
    r: årlig vekstrate (f.eks. 0.03 for 3%)
    t: tid i år
    """
    return P0 * (1 + r) ** t

# Eksempel:By med 50 000 innbyggere, 2% årlig vekst
P0 = 50000
r = 0.02  # 2% = 0.02

print(f"Startpopulasjon: {P0} innbyggere")
print(f"Årlig vekst: {r*100}%")
print("-" * 40)
print("År | Populasjon")
print("---|------------")

for t in range(0, 11):
    P = populasjon(P0, r, t)
    print(f"{t:2} | {P:12,.0f}")`}
              height="400px"
              storageKey="4-4-populasjon"
            />
          </section>

          {/* Section 2: Når når vi et mål? */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Når når vi et mål?</h2>

            <p className="text-lg mb-6">
              La oss finne ut når populasjonen dobles ved å bruke en løkke.
            </p>

            <PythonRunner
              title="Når dobles populasjonen?"
              initialCode={`def populasjon(P0, r, t):
    return P0 * (1 + r) ** t

P0 = 50000
r = 0.02
mal = P0 * 2  # Dobbelt så mange

print(f"Mål: {mal:,.0f} innbyggere (dobbel populasjon)")
print("-" * 40)

# Søk etter når vi når målet
t = 0
while populasjon(P0, r, t) < mal:
    t += 1

print(f"\\nPopulasjonen dobles etter ca. {t} år")
print(f"Populasjon etter {t} år: {populasjon(P0, r, t):,.0f}")

# 72-regelen: 72 / vekstprosent ≈ doblingtid
print(f"\\n72-regelen: 72 / {r*100} = {72/(r*100):.0f} år")`}
              height="380px"
              storageKey="4-4-dobling"
            />

            <InfoBox type="tip" title="72-regelen">
              En tommelfingerregel sier at doblingtiden er omtrent 72 delt på vekstprosenten.
              Med 2% vekst: 72 / 2 = 36 år.
            </InfoBox>
          </section>

          {/* Section 3: Mer realistisk modell */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Begrenset vekst</h2>

            <p className="text-lg mb-6">
              I virkeligheten kan ikke populasjoner vokse evig. Vi legger til en
              grense (bæreevne) som bremser veksten.
            </p>

            <PythonRunner
              title="Logistisk vekstmodell"
              initialCode={`def logistisk_vekst(P0, r, K, aar):
    """
    Logistisk vekstmodell med bæreevne K.

    P0: startpopulasjon
    r: vekstrate
    K: bæreevne (maksimal populasjon)
    aar: antall år å simulere
    """
    P = P0
    populasjoner = [P]

    for t in range(aar):
        # Vekst bremses når P nærmer seg K
        vekst = r * P * (1 - P / K)
        P = P + vekst
        populasjoner.append(P)

    return populasjoner

# Parametre
P0 = 1000
r = 0.1  # 10% vekst når populasjonen er liten
K = 10000  # Maks 10 000 individer

populasjoner = logistisk_vekst(P0, r, K, 50)

print("År | Populasjon")
print("---|------------")
for t in [0, 10, 20, 30, 40, 50]:
    print(f"{t:2} | {populasjoner[t]:12,.0f}")`}
              height="420px"
              storageKey="4-4-logistisk"
            />
          </section>

          {/* Exercises */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Prosjektoppgaver</h2>

            <div className="mb-8">
              <Exercise
                title="Oppgave 4.4.1: Modeller bankinnskudd"
                description={`Du setter inn 10 000 kr på en konto med 4% årlig rente.

Lag en funksjon som beregner saldoen etter t år.

Skriv ut saldoen hvert 5. år fra 0 til 30 år.`}
                initialCode={`def saldo(start, rente, t):
    """Beregner saldo med rentes rente"""
    return start * (1 + rente) ** t

start = 10000
rente = 0.04

print("År | Saldo (kr)")
print("---|------------")
for t in range(0, 31, 5):
    s = saldo(start, rente, t)
    print(f"{t:2} | {s:12,.2f}")`}
                difficulty="lett"
                testCases={[
                  { expectedOutput: "10 | 14", matchMode: 'contains' }
                ]}
                hints={[
                  "Bruk formelen P(t) = P₀ × (1 + r)ᵗ",
                  "range(0, 31, 5) gir 0, 5, 10, ..., 30"
                ]}
                storageKey="4-4-ex1"
                chapterId="4-4"
                exerciseId="4-4-1"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 4.4.2: Når er pengene tredoblet?"
                description={`Du har 5000 kr på konto med 5% rente.

Bruk en while-løkke til å finne etter hvor mange år pengene har tredoblet seg.`}
                initialCode={`def saldo(start, rente, t):
    return start * (1 + rente) ** t

start = 5000
rente = 0.05
mal = start * 3  # Tredoblet

t = 0
while saldo(start, rente, t) < mal:
    t += 1

print(f"Pengene tredobles etter {t} år")
print(f"Saldo: {saldo(start, rente, t):.2f} kr")`}
                difficulty="medium"
                testCases={[
                  { expectedOutput: "23 år", matchMode: 'contains' }
                ]}
                hints={[
                  "Start med t = 0",
                  "Øk t til saldoen >= 3 × start"
                ]}
                storageKey="4-4-ex2"
                chapterId="4-4"
                exerciseId="4-4-2"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 4.4.3: Sammenlign to sparestrategier"
                description={`Strategi A: 10 000 kr med 3% rente
Strategi B: 8 000 kr med 5% rente

Etter hvor mange år er strategi B bedre enn strategi A?`}
                initialCode={`def saldo(start, rente, t):
    return start * (1 + rente) ** t

# Strategi A
A_start = 10000
A_rente = 0.03

# Strategi B
B_start = 8000
B_rente = 0.05

# Finn når B > A
for t in range(1, 31):
    A = saldo(A_start, A_rente, t)
    B = saldo(B_start, B_rente, t)
    if B > A:
        print(f"Etter {t} år:")
        print(f"  Strategi A: {A:,.2f} kr")
        print(f"  Strategi B: {B:,.2f} kr")
        print(f"\\nStrategi B er bedre etter {t} år")
        break`}
                difficulty="medium"
                testCases={[
                  { expectedOutput: "11 år", matchMode: 'contains' }
                ]}
                hints={[
                  "Sammenlign saldoene år for år",
                  "Break når B > A"
                ]}
                storageKey="4-4-ex3"
                chapterId="4-4"
                exerciseId="4-4-3"
              />
            </div>
          </section>

          <section className="mb-12">
            <Card className="bg-green-700/5 border-green-700/20">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Oppsummering</h2>
                <div className="space-y-2">
                  <p>✓ <strong>Modellering</strong>: Bruk matematikk og Python til å beskrive virkeligheten</p>
                  <p>✓ <strong>Eksponentiell vekst</strong>: P(t) = P₀ × (1 + r)ᵗ</p>
                  <p>✓ <strong>Løkker</strong>: Finn når en modell når et mål</p>
                  <p>✓ <strong>Sammenligning</strong>: Test ulike strategier og parametre</p>
                  <p>✓ <strong>Realisme</strong>: Legg til begrensninger for mer realistiske modeller</p>
                </div>
              </CardContent>
            </Card>
          </section>

          <ChapterNavigation currentChapterId="4-4" />
        </div>
      </div>
    </BookLayout>
  );
}
