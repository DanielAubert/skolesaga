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
import { FlaskConical } from "lucide-react";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";

export default function Chapter83Page() {
  useKeyboardNavigation('8-3');

  return (
    <BookLayout currentChapterId="8-3">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="8-3" />
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">Lærebok</Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 8.3</span>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <FlaskConical className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 8.3</p>
                  <Badge variant="outline" className="text-purple-600">S1</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">Simulering av forsøk</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Simuler binomialforsøk og sammenlign med teoretiske beregninger.
            </p>
          </div>

          {/* Section 1: Simulere myntkast */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Simulere myntkast</h2>

            <p className="text-lg mb-6">
              Vi kan simulere binomialforsøk (som myntkast) og sammenligne resultatet
              med teoretisk sannsynlighet.
            </p>

            <PythonRunner
              title="Simuler 1000 serier med 10 myntkast"
              initialCode={`import random

def simuler_myntkast(n_kast, n_simuleringer):
    """Simuler n_simuleringer serier med n_kast myntkast hver"""
    resultater = []

    for _ in range(n_simuleringer):
        mynt = 0
        for _ in range(n_kast):
            if random.randint(0, 1) == 0:
                mynt += 1
        resultater.append(mynt)

    return resultater

# Simuler
n_kast = 10
n_sim = 1000

resultater = simuler_myntkast(n_kast, n_sim)

# Tell frekvenser
frekvenser = {}
for r in resultater:
    frekvenser[r] = frekvenser.get(r, 0) + 1

print(f"Simulert {n_sim} serier med {n_kast} myntkast:")
print("-" * 40)
for k in sorted(frekvenser.keys()):
    antall = frekvenser[k]
    prosent = (antall / n_sim) * 100
    print(f"{k} mynt: {antall:3} ganger ({prosent:5.2f}%)")`}
              height="420px"
              storageKey="8-3-simuler-mynt"
            />
          </section>

          {/* Section 2: Sammenlign med teori */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Sammenlign med teori</h2>

            <p className="text-lg mb-6">
              La oss sammenligne simulert sannsynlighet med teoretisk binomialsannsynlighet.
            </p>

            <PythonRunner
              title="Simulert vs teoretisk"
              initialCode={`import random

def fakultet(n):
    if n <= 1:
        return 1
    resultat = 1
    for i in range(2, n + 1):
        resultat *= i
    return resultat

def binomial(n, k):
    return fakultet(n) // (fakultet(k) * fakultet(n - k))

def teoretisk_P(n, k, p):
    return binomial(n, k) * (p ** k) * ((1 - p) ** (n - k))

# Simuler
n = 10
p = 0.5
simuleringer = 10000

resultater = []
for _ in range(simuleringer):
    mynt = sum(random.randint(0, 1) == 0 for _ in range(n))
    resultater.append(mynt)

print(f"Sammenligning (n={n}, {simuleringer} simuleringer):")
print("-" * 55)
print("k  | Simulert | Teoretisk | Differanse")
print("-" * 55)

for k in range(n + 1):
    simulert = resultater.count(k) / simuleringer
    teoretisk = teoretisk_P(n, k, p)
    diff = abs(simulert - teoretisk)
    print(f"{k:2} | {simulert:.4f}   | {teoretisk:.4f}    | {diff:.4f}")`}
              height="460px"
              storageKey="8-3-sammenlign"
            />

            <InfoBox type="info">
              Med mange simuleringer (10 000+) blir simulert sannsynlighet
              veldig nær den teoretiske verdien.
            </InfoBox>
          </section>

          {/* Section 3: Store talls lov */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Store talls lov</h2>

            <p className="text-lg mb-6">
              Store talls lov sier at gjennomsnittlig utfall konvergerer mot forventet
              verdi når antall forsøk øker.
            </p>

            <PythonRunner
              title="Konvergens mot forventet verdi"
              initialCode={`import random

def forventet_verdi_binomial(n, p):
    """Forventet verdi: E(X) = n × p"""
    return n * p

# 20 myntkast (forventet: 10 mynt)
n = 20
p = 0.5
forventet = forventet_verdi_binomial(n, p)

print(f"Binomial: n={n}, p={p}")
print(f"Forventet antall mynt: {forventet}")
print()
print("Simuleringer | Gjennomsnitt | Avvik")
print("-" * 45)

for antall_sim in [10, 100, 1000, 10000, 100000]:
    summer = 0
    for _ in range(antall_sim):
        mynt = sum(random.randint(0, 1) == 0 for _ in range(n))
        summer += mynt

    gjennomsnitt = summer / antall_sim
    avvik = abs(gjennomsnitt - forventet)

    print(f"{antall_sim:12} | {gjennomsnitt:12.4f} | {avvik:.4f}")`}
              height="420px"
              storageKey="8-3-store-talls-lov"
            />

            <InfoBox type="tip">
              Forventet verdi i binomialfordeling: E(X) = n × p
              <br />
              For myntkast: E(X) = 20 × 0.5 = 10
            </InfoBox>
          </section>

          {/* Exercises */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Oppgaver</h2>

            <div className="mb-8">
              <Exercise
                title="Oppgave 8.3.1: Simuler terningkast"
                description={`Simuler 5000 serier hvor du kaster en terning 6 ganger.
Tell hvor mange serier som gir nøyaktig 1 sekser.
Sammenlign med teoretisk: P(X=1) med n=6, p=1/6.`}
                initialCode={`import random

def fakultet(n):
    if n <= 1:
        return 1
    resultat = 1
    for i in range(2, n + 1):
        resultat *= i
    return resultat

def binomial(n, k):
    return fakultet(n) // (fakultet(k) * fakultet(n - k))

n = 6       # Antall kast per serie
k = 1       # Ønsket antall seksere
p = 1/6     # Sannsynlighet for sekser
simuleringer = 5000

# Simuler
trefninger = 0
for _ in range(simuleringer):
    seksere = sum(random.randint(1, 6) == 6 for _ in range(n))
    if seksere == k:
        trefninger += 1

simulert_P = trefninger / simuleringer
teoretisk_P = binomial(n, k) * (p ** k) * ((1 - p) ** (n - k))

print(f"Simulert P(X={k}): {simulert_P:.4f}")
print(f"Teoretisk P(X={k}): {teoretisk_P:.4f}")`}
                difficulty="medium"
                testCases={[
                  { expectedOutput: "Simulert", matchMode: 'contains' },
                  { expectedOutput: "Teoretisk", matchMode: 'contains' }
                ]}
                hints={["Teoretisk P(X=1) = C(6,1) × (1/6)¹ × (5/6)⁵ ≈ 0.4019"]}
                storageKey="8-3-ex1"
                chapterId="8-3"
                exerciseId="8-3-1"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 8.3.2: Forventet verdi"
                description={`Simuler 20 000 serier med 15 myntkast hver.
Beregn gjennomsnittlig antall mynt og sammenlign med forventet verdi E(X) = n×p.`}
                initialCode={`import random

n = 15              # Kast per serie
p = 0.5             # Sannsynlighet for mynt
simuleringer = 20000

# Simuler
total_mynt = 0
for _ in range(simuleringer):
    mynt = sum(random.randint(0, 1) == 0 for _ in range(n))
    total_mynt += mynt

gjennomsnitt = total_mynt / simuleringer
forventet = n * p

print(f"Simuleringer: {simuleringer}")
print(f"Gjennomsnittlig antall mynt: {gjennomsnitt:.4f}")
print(f"Forventet verdi E(X) = n×p = {forventet}")
print(f"Differanse: {abs(gjennomsnitt - forventet):.4f}")`}
                difficulty="lett"
                testCases={[
                  { expectedOutput: "7.5", matchMode: 'contains' },
                  { expectedOutput: "Forventet verdi", matchMode: 'contains' }
                ]}
                hints={["E(X) = 15 × 0.5 = 7.5"]}
                storageKey="8-3-ex2"
                chapterId="8-3"
                exerciseId="8-3-2"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 8.3.3: Usannsynlig hendelse"
                description={`Kast 20 mynter 10 000 ganger. Tell hvor ofte du får 15 eller flere mynt.
Dette er en usannsynlig hendelse - hvor sjelden skjer det?`}
                initialCode={`import random

n = 20              # Antall mynter
grense = 15         # 15 eller flere mynt
simuleringer = 10000

# Simuler
usannsynlig = 0
for _ in range(simuleringer):
    mynt = sum(random.randint(0, 1) == 0 for _ in range(n))
    if mynt >= grense:
        usannsynlig += 1

sannsynlighet = usannsynlig / simuleringer

print(f"Kastet {n} mynter {simuleringer} ganger")
print(f"Antall ganger med {grense}+ mynt: {usannsynlig}")
print(f"Sannsynlighet: {sannsynlighet:.4f} = {sannsynlighet*100:.2f}%")
print()
if sannsynlighet < 0.05:
    print("Dette er en sjelden hendelse (< 5%)!")`}
                difficulty="medium"
                testCases={[
                  { expectedOutput: "Sannsynlighet:", matchMode: 'contains' }
                ]}
                hints={["P(X ≥ 15) = P(X=15) + P(X=16) + ... + P(X=20) ≈ 0.0207 = 2%"]}
                storageKey="8-3-ex3"
                chapterId="8-3"
                exerciseId="8-3-3"
              />
            </div>
          </section>

          <section className="mb-12">
            <Card className="bg-purple-500/5 border-purple-500/20">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Oppsummering</h2>
                <div className="space-y-2">
                  <p>✓ Simulering validerer teoretiske beregninger</p>
                  <p>✓ <strong>Store talls lov</strong>: flere simuleringer → mer nøyaktig</p>
                  <p>✓ <strong>Forventet verdi</strong>: E(X) = n × p</p>
                  <p>✓ Sammenlign simulert og teoretisk sannsynlighet</p>
                  <p>✓ Med 10 000+ simuleringer får vi god tilnærming</p>
                </div>
              </CardContent>
            </Card>
          </section>

          <ChapterNavigation currentChapterId="8-3" />
        </div>
      </div>
    </BookLayout>
  );
}
