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
import { BarChart3 } from "lucide-react";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";

export default function Chapter102Page() {
  useKeyboardNavigation('10-2');

  return (
    <BookLayout currentChapterId="10-2">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="10-2" />
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">Lærebok</Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 10.2</span>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-700/10 rounded-lg">
                <BarChart3 className="h-6 w-6 text-purple-700" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 10.2</p>
                  <Badge variant="outline" className="text-purple-700 border-purple-700">S2</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">Konfidensintervall</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Lær hvordan du lager konfidensintervaller for å estimere populasjonsparametre.
            </p>
          </div>

          {/* Section 1: Hva er et konfidensintervall? */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Hva er et konfidensintervall?</h2>

            <p className="text-lg mb-6">
              Et konfidensintervall gir oss et område hvor vi tror den sanne verdien i
              populasjonen ligger. Vi kan aldri være 100% sikre, men vi kan si med en
              viss sikkerhet (vanligvis 95%) at verdien ligger i intervallet.
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">Eksempel:</h3>
                <p className="text-muted-foreground mb-3">
                  Vi måler høyden til 50 studenter og finner gjennomsnitt x̄ = 175 cm.
                  Vi kan ikke være sikre på at gjennomsnittshøyden til ALLE studenter
                  er nøyaktig 175 cm, men vi kan si:
                </p>
                <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg">
                  <p className="text-center">
                    &quot;Med 95% sikkerhet ligger den sanne gjennomsnittshøyden mellom 172 og 178 cm&quot;
                  </p>
                </div>
              </CardContent>
            </Card>

            <InfoBox type="info" title="Konfidensgrad">
              95% konfidensgrad betyr: Hvis vi gjentok undersøkelsen 100 ganger,
              ville intervallet inneholde den sanne verdien i omtrent 95 av gangene.
            </InfoBox>
          </section>

          {/* Section 2: Standardfeil */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Standardfeil (SE)</h2>

            <p className="text-lg mb-6">
              Standardfeilen måler hvor mye gjennomsnittet i utvalget varierer fra
              det sanne gjennomsnittet i populasjonen.
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">Formel for standardfeil:</h3>
                <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg text-center">
                  <p className="text-xl mb-2">
                    SE = σ / √n
                  </p>
                  <p className="text-sm text-muted-foreground">
                    der σ = standardavvik i populasjonen, n = utvalgsstørrelse
                  </p>
                </div>
                <p className="text-muted-foreground mt-3">
                  Ofte kjenner vi ikke σ, så vi bruker standardavviket s fra utvalget som estimat.
                </p>
              </CardContent>
            </Card>

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Beregne standardfeil"
                initialCode={`import math

# Data fra utvalg
data = [172, 168, 180, 175, 177, 165, 182, 170, 176, 174]
n = len(data)

# Beregn gjennomsnitt
gjennomsnitt = sum(data) / n

# Beregn standardavvik
avvik = [(x - gjennomsnitt)**2 for x in data]
varians = sum(avvik) / (n - 1)  # Bruker n-1 for utvalgsvarians
s = math.sqrt(varians)

# Beregn standardfeil
SE = s / math.sqrt(n)

print(f"Utvalgsstørrelse: n = {n}")
print(f"Gjennomsnitt: x̄ = {gjennomsnitt:.2f}")
print(f"Standardavvik: s = {s:.2f}")
print(f"Standardfeil: SE = {SE:.2f}")
print(f"\\nStandardfeilen er mye mindre enn standardavviket!")`}
                height="400px"
                storageKey="10-2-se-example"
              />
            </div>

            <InfoBox type="tip">
              Jo større utvalgsstørrelse (n), jo mindre standardfeil og jo smalere konfidensintervall.
              Dette er intuitivt: Flere målinger gir mer presise estimater.
            </InfoBox>
          </section>

          {/* Section 3: 95% Konfidensintervall */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">95% Konfidensintervall</h2>

            <p className="text-lg mb-6">
              For en normalfordelt variabel kan vi beregne et 95% konfidensintervall med denne formelen:
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg text-center">
                  <p className="text-xl mb-2">
                    x̄ ± 1.96 × SE
                  </p>
                  <p className="text-sm text-muted-foreground mt-3">
                    Nedre grense: x̄ - 1.96 × SE<br />
                    Øvre grense: x̄ + 1.96 × SE
                  </p>
                </div>
                <p className="text-muted-foreground mt-3">
                  Tallet 1.96 kommer fra normalfordelingen og gir 95% konfidensgrad.
                </p>
              </CardContent>
            </Card>

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Beregne 95% konfidensintervall"
                initialCode={`import math

# Data: høyder i cm
data = [175, 180, 172, 168, 177, 182, 170, 174, 176, 179,
        173, 178, 171, 169, 181, 176, 174, 177, 175, 180]

n = len(data)

# Gjennomsnitt
x_bar = sum(data) / n

# Standardavvik
avvik = [(x - x_bar)**2 for x in data]
s = math.sqrt(sum(avvik) / (n - 1))

# Standardfeil
SE = s / math.sqrt(n)

# 95% konfidensintervall
nedre = x_bar - 1.96 * SE
ovre = x_bar + 1.96 * SE

print(f"Utvalgsstørrelse: n = {n}")
print(f"Gjennomsnitt: x̄ = {x_bar:.2f} cm")
print(f"Standardavvik: s = {s:.2f} cm")
print(f"Standardfeil: SE = {SE:.2f} cm")
print(f"\\n95% konfidensintervall:")
print(f"[{nedre:.2f}, {ovre:.2f}] cm")
print(f"\\nTolkning: Med 95% sikkerhet ligger den sanne")
print(f"gjennomsnittshøyden mellom {nedre:.1f} og {ovre:.1f} cm")`}
                height="450px"
                storageKey="10-2-ki-example"
              />
            </div>
          </section>

          {/* Exercise 10.4 */}
          <div className="mt-8">
            <Exercise
              title="Oppgave 10.4: Beregn standardfeil"
              description={`Et utvalg på 25 målinger har standardavvik s = 10.

a) Beregn standardfeilen.

b) Hva skjer med standardfeilen hvis vi hadde hatt 100 målinger i stedet?

c) Hvor mange målinger trengs for å halvere standardfeilen?`}
              initialCode={`import math

# Oppgave a)
s = 10
n1 = 25
SE1 = s / math.sqrt(n1)
print(f"a) n = {n1}: SE = {SE1:.2f}")

# Oppgave b)
n2 = 100
SE2 = # Din kode her
print(f"b) n = {n2}: SE = {SE2:.2f}")

# Oppgave c)
# For å halvere SE må √n dobles
# Hvis √n dobles, må n firedobles
n3 = # Din kode her
SE3 = s / math.sqrt(n3)
print(f"c) For å halvere SE: n = {n3}, SE = {SE3:.2f}")`}
              difficulty="medium"
              testCases={[
                {
                  expectedOutput: "2.00",
                  description: "SE for n=25 skal være 2.00",
                  matchMode: 'contains'
                },
                {
                  expectedOutput: "1.00",
                  description: "SE for n=100 skal være 1.00",
                  matchMode: 'contains'
                },
                {
                  expectedOutput: "100",
                  description: "For å halvere SE må n firedobles til 100",
                  matchMode: 'contains'
                }
              ]}
              hints={[
                "SE = s / √n",
                "SE for n=100: SE = 10 / √100 = 10 / 10 = 1",
                "For å halvere SE må √n dobles, så n må firedobles: 25 × 4 = 100"
              ]}
              storageKey="10-2-exercise-1"
              chapterId="10-2"
              exerciseId="10-2-exercise-1"
            />
          </div>

          {/* Exercise 10.5 */}
          <div className="mt-8">
            <Exercise
              title="Oppgave 10.5: Lag konfidensintervall"
              description={`Du har målt vekten til 30 epler og funnet:
- Gjennomsnitt: x̄ = 180 gram
- Standardavvik: s = 15 gram

a) Beregn standardfeilen.

b) Lag et 95% konfidensintervall for gjennomsnittsvekten.

c) Tolke resultatet: Hva betyr intervallet?`}
              initialCode={`import math

# Data
x_bar = 180
s = 15
n = 30

# Oppgave a)
SE = # Din kode her
print(f"Standardfeil: SE = {SE:.2f} gram")

# Oppgave b)
nedre = # Din kode her
ovre = # Din kode her

print(f"\\n95% konfidensintervall: [{nedre:.2f}, {ovre:.2f}] gram")

# Oppgave c)
print(f"\\nTolkning:")
print(f"Med 95% sikkerhet ligger den sanne gjennomsnittsvekten")
print(f"av alle epler mellom {nedre:.1f} og {ovre:.1f} gram")`}
              difficulty="medium"
              testCases={[
                {
                  expectedOutput: "2.74",
                  description: "Standardfeilen skal være omtrent 2.74",
                  matchMode: 'contains'
                },
                {
                  expectedOutput: "174",
                  description: "Nedre grense skal være omtrent 174.6",
                  matchMode: 'contains'
                },
                {
                  expectedOutput: "185",
                  description: "Øvre grense skal være omtrent 185.4",
                  matchMode: 'contains'
                }
              ]}
              hints={[
                "SE = s / √n = 15 / √30 ≈ 2.74",
                "Nedre grense = x̄ - 1.96 × SE",
                "Øvre grense = x̄ + 1.96 × SE"
              ]}
              storageKey="10-2-exercise-2"
              chapterId="10-2"
              exerciseId="10-2-exercise-2"
            />
          </div>

          {/* Exercise 10.6 */}
          <div className="mt-8">
            <Exercise
              title="Oppgave 10.6: Analysere utvalg"
              description={`Gitt følgende datasett med poengsum fra en test:

\`data = [72, 85, 68, 90, 78, 82, 75, 88, 70, 92, 76, 84, 79, 87, 73]\`

a) Beregn gjennomsnitt, standardavvik og standardfeil.

b) Lag et 95% konfidensintervall for gjennomsnittlig poengsum.

c) Hvis læreren hevder at gjennomsnittlig poengsum er 75, er dette konsistent med dataene?`}
              initialCode={`import math

data = [72, 85, 68, 90, 78, 82, 75, 88, 70, 92, 76, 84, 79, 87, 73]
n = len(data)

# Oppgave a)
x_bar = sum(data) / n
avvik = [(x - x_bar)**2 for x in data]
s = math.sqrt(sum(avvik) / (n - 1))
SE = s / math.sqrt(n)

print(f"Gjennomsnitt: x̄ = {x_bar:.2f}")
print(f"Standardavvik: s = {s:.2f}")
print(f"Standardfeil: SE = {SE:.2f}")

# Oppgave b)
nedre = x_bar - 1.96 * SE
ovre = x_bar + 1.96 * SE

print(f"\\n95% konfidensintervall: [{nedre:.2f}, {ovre:.2f}]")

# Oppgave c)
pastand = 75
if nedre <= pastand <= ovre:
    print(f"\\n{pastand} ligger INNENFOR intervallet")
    print("Påstanden er konsistent med dataene")
else:
    print(f"\\n{pastand} ligger UTENFOR intervallet")
    print("Påstanden er IKKE konsistent med dataene")`}
              difficulty="vanskelig"
              testCases={[
                {
                  expectedOutput: "79",
                  description: "Gjennomsnittet skal være omtrent 79.9",
                  matchMode: 'contains'
                },
                {
                  expectedOutput: "UTENFOR",
                  description: "75 skal ligge utenfor intervallet",
                  matchMode: 'contains'
                }
              ]}
              hints={[
                "x̄ = sum(data) / n",
                "s = √(Σ(x - x̄)² / (n-1))",
                "Intervallet blir omtrent [77.5, 82.3]",
                "75 ligger utenfor dette intervallet"
              ]}
              storageKey="10-2-exercise-3"
              chapterId="10-2"
              exerciseId="10-2-exercise-3"
            />
          </div>

          {/* Summary */}
          <section className="mb-12 mt-12">
            <Card className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Oppsummering</h2>
                <div className="space-y-3">
                  <p className="flex items-start gap-2">
                    <span className="text-purple-700 font-bold">✓</span>
                    <span>Konfidensintervall gir et område hvor den sanne verdien sannsynligvis ligger</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-700 font-bold">✓</span>
                    <span>Standardfeil: SE = σ / √n måler usikkerhet i estimatet</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-700 font-bold">✓</span>
                    <span>95% konfidensintervall: x̄ ± 1.96 × SE</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-purple-700 font-bold">✓</span>
                    <span>Større utvalg gir smalere intervall og mer presise estimater</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <ChapterNavigation currentChapterId="10-2" />
        </div>
      </div>
    </BookLayout>
  );
}
