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
import { Dices } from "lucide-react";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";

export default function Chapter73Page() {
  useKeyboardNavigation('7-3');

  return (
    <BookLayout currentChapterId="7-3">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="7-3" />
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">Lærebok</Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 7.3</span>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-500/10 rounded-lg">
                <Dices className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 7.3</p>
                  <Badge variant="outline" className="text-orange-600">2P</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">Simulering</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Lær å simulere tilfeldige hendelser med random-biblioteket.
            </p>
          </div>

          {/* Section 1: random-biblioteket */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">random-biblioteket</h2>

            <p className="text-lg mb-6">
              For å simulere tilfeldige hendelser bruker vi <code>random</code>-biblioteket.
              Den viktigste funksjonen er <code>random.randint(a, b)</code> som gir et
              tilfeldig heltall mellom a og b (inklusiv).
            </p>

            <PythonRunner
              title="random.randint()"
              initialCode={`import random

# Simuler terningkast
print("10 terningkast:")
for i in range(10):
    kast = random.randint(1, 6)
    print(f"Kast {i+1}: {kast}")

print()

# Myntkast (0 = mynt, 1 = kron)
print("5 myntkast:")
for i in range(5):
    mynt = random.randint(0, 1)
    resultat = "Mynt" if mynt == 0 else "Kron"
    print(f"Kast {i+1}: {resultat}")`}
              height="340px"
              storageKey="7-3-random"
            />

            <InfoBox type="info" title="random.randint(a, b)">
              <code>random.randint(1, 6)</code> gir et tilfeldig tall fra 1 til 6 (begge inkludert).
              Perfekt for å simulere terningkast!
            </InfoBox>
          </section>

          {/* Section 2: Telle utfall */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Telle utfall med løkke</h2>

            <p className="text-lg mb-6">
              Vi kan bruke en løkke til å simulere mange forsøk og telle hvor ofte
              hvert utfall forekommer.
            </p>

            <PythonRunner
              title="Simuler 1000 terningkast"
              initialCode={`import random

# Antall kast
antall_kast = 1000

# Tell hver side (1-6)
tellinger = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0}

# Simuler
for _ in range(antall_kast):
    resultat = random.randint(1, 6)
    tellinger[resultat] += 1

# Skriv ut resultater
print(f"Simulering av {antall_kast} terningkast:")
print("-" * 40)
for øyne, antall in tellinger.items():
    prosent = (antall / antall_kast) * 100
    print(f"  {øyne}: {antall:3} ganger ({prosent:5.2f}%)")

print()
print("Forventet: 16.67% for hver side")`}
              height="380px"
              storageKey="7-3-telle"
            />
          </section>

          {/* Section 3: Store talls lov */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Store talls lov</h2>

            <p className="text-lg mb-6">
              Når vi øker antall simuleringer, vil den observerte frekvensen nærme seg
              den teoretiske sannsynligheten. Dette kalles store talls lov.
            </p>

            <PythonRunner
              title="Konvergens mot teoretisk sannsynlighet"
              initialCode={`import random

def simuler_terning(antall):
    seksere = 0
    for _ in range(antall):
        if random.randint(1, 6) == 6:
            seksere += 1
    return seksere / antall

# Test med ulike antall kast
forsok = [10, 100, 1000, 10000, 100000]

print("Simulering av P(6) med terning:")
print("-" * 45)
for n in forsok:
    andel = simuler_terning(n)
    print(f"{n:6} kast: P(6) ≈ {andel:.4f}")

print()
print(f"Teoretisk P(6) = {1/6:.4f} = 16.67%")`}
              height="360px"
              storageKey="7-3-store-talls-lov"
            />

            <InfoBox type="tip">
              Jo flere simuleringer vi kjører, desto nærmere kommer vi den teoretiske
              sannsynligheten. Med 100 000 kast får vi vanligvis veldig nær 1/6 ≈ 0.1667.
            </InfoBox>
          </section>

          {/* Exercises */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Oppgaver</h2>

            <div className="mb-8">
              <Exercise
                title="Oppgave 7.3.1: Simuler myntkast"
                description={`Simuler 1000 myntkast. Tell hvor mange mynt (heads) og kron (tails) du får.
Bruk 0 for mynt og 1 for kron.`}
                initialCode={`import random

antall_kast = 1000
mynt = 0
kron = 0

for _ in range(antall_kast):
    resultat = random.randint(0, 1)
    if resultat == 0:
        mynt += 1
    else:
        kron += 1

print(f"Myntkast ({antall_kast} kast):")
print(f"Mynt: {mynt} ({mynt/antall_kast*100:.1f}%)")
print(f"Kron: {kron} ({kron/antall_kast*100:.1f}%)")`}
                difficulty="lett"
                testCases={[
                  { expectedOutput: "Mynt:", matchMode: 'contains' },
                  { expectedOutput: "Kron:", matchMode: 'contains' }
                ]}
                hints={["random.randint(0, 1) gir enten 0 eller 1"]}
                storageKey="7-3-ex1"
                chapterId="7-3"
                exerciseId="7-3-1"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 7.3.2: To terninger"
                description={`Simuler 10 000 kast med to terninger. Tell hvor mange ganger summen blir 7.
Teoretisk sannsynlighet: P(sum=7) = 6/36 ≈ 16.67%`}
                initialCode={`import random

antall_kast = 10000
sum_7 = 0

for _ in range(antall_kast):
    terning1 = random.randint(1, 6)
    terning2 = random.randint(1, 6)
    if terning1 + terning2 == 7:
        sum_7 += 1

andel = sum_7 / antall_kast

print(f"Simulering: {antall_kast} kast med to terninger")
print(f"Sum = 7: {sum_7} ganger")
print(f"Andel: {andel:.4f} = {andel*100:.2f}%")
print(f"Teoretisk: {6/36:.4f} = 16.67%")`}
                difficulty="medium"
                testCases={[
                  { expectedOutput: "Sum = 7:", matchMode: 'contains' },
                  { expectedOutput: "16.67%", matchMode: 'contains' }
                ]}
                hints={[
                  "6 kombinasjoner gir sum 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1)"
                ]}
                storageKey="7-3-ex2"
                chapterId="7-3"
                exerciseId="7-3-2"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 7.3.3: Trekke kort"
                description={`Simuler trekking av 5000 kort fra en kortstokk (1-13).
Tell hvor mange ess (1) og konger (13) du får.`}
                initialCode={`import random

antall_trekk = 5000
ess = 0
konger = 0

for _ in range(antall_trekk):
    kort = random.randint(1, 13)
    if kort == 1:
        ess += 1
    elif kort == 13:
        konger += 1

print(f"Trekk {antall_trekk} kort:")
print(f"Ess (1): {ess} ({ess/antall_trekk*100:.2f}%)")
print(f"Konger (13): {konger} ({konger/antall_trekk*100:.2f}%)")
print(f"Teoretisk: {1/13*100:.2f}%")`}
                difficulty="medium"
                testCases={[
                  { expectedOutput: "Ess (1):", matchMode: 'contains' },
                  { expectedOutput: "Konger (13):", matchMode: 'contains' }
                ]}
                hints={["Sannsynligheten for hvert kort er 1/13 ≈ 7.69%"]}
                storageKey="7-3-ex3"
                chapterId="7-3"
                exerciseId="7-3-3"
              />
            </div>
          </section>

          <section className="mb-12">
            <Card className="bg-orange-500/5 border-orange-500/20">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Oppsummering</h2>
                <div className="space-y-2">
                  <p>✓ <strong>random.randint(a, b)</strong>: tilfeldig heltall fra a til b</p>
                  <p>✓ <strong>Simulering</strong>: bruk løkker til å gjenta forsøk</p>
                  <p>✓ <strong>Telle utfall</strong>: bruk dictionary eller tellere</p>
                  <p>✓ <strong>Store talls lov</strong>: flere simuleringer → mer nøyaktig</p>
                  <p>✓ Sammenlign simulert med teoretisk sannsynlighet</p>
                </div>
              </CardContent>
            </Card>
          </section>

          <ChapterNavigation currentChapterId="7-3" />
        </div>
      </div>
    </BookLayout>
  );
}
