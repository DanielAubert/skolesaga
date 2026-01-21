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

export default function Chapter31Page() {
  useKeyboardNavigation('3-1');

  return (
    <BookLayout currentChapterId="3-1">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          {/* Progress Bar */}
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="3-1" />
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">
              Lærebok
            </Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 3.1</span>
          </div>

          {/* Chapter Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-600/10 rounded-lg">
                <Code className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 3.1</p>
                  <Badge variant="outline" className="text-green-600">9. klasse</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Funksjoner
                </h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              I dette kapitlet lærer du å lage dine egne funksjoner for å organisere koden din bedre
              og gjenbruke kode på en smart måte.
            </p>
          </div>

          {/* Section 1: Hva er funksjoner? */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Hva er en funksjon?</h2>

            <p className="text-lg mb-6">
              Hittil har du brukt ferdiglagde funksjoner som <code>print()</code>, <code>input()</code>
              og <code>len()</code>. Nå skal du lære å lage dine egne funksjoner!
            </p>

            <p className="text-lg mb-6">
              En funksjon er som en oppskrift. Den inneholder en serie med instruksjoner som kan
              kjøres når du kaller på funksjonen. Dette gjør koden mer oversiktlig og du slipper
              å skrive samme kode flere ganger.
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Fordeler med funksjoner:</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Gjenbruke kode - skriv én gang, bruk mange ganger</li>
                  <li>Lettere å finne feil - isolerer kode i mindre biter</li>
                  <li>Mer oversiktlig - gir koden struktur</li>
                  <li>Enklere å dele kode med andre</li>
                </ul>
              </CardContent>
            </Card>

            <InfoBox type="info" title="Repetisjon fra 8. klasse">
              Du har allerede lært om variabler, if-setninger og løkker. Nå skal vi kombinere
              dette i funksjoner for å lage mer avanserte programmer!
            </InfoBox>
          </section>

          {/* Section 2: Lage en enkel funksjon */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Lage din første funksjon</h2>

            <p className="text-lg mb-6">
              Vi bruker nøkkelordet <code>def</code> (definere) for å lage en funksjon:
            </p>

            <Card className="mb-6 bg-muted/50">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Oppbygning av en funksjon:</h3>
                <pre className="text-sm p-4 bg-background rounded">
{`def funksjonsnavn():
    # Kode som skal kjøres
    print("Dette er en funksjon!")

# Kalle på funksjonen
funksjonsnavn()`}
                </pre>
              </CardContent>
            </Card>

            <PythonRunner
              title="Eksempel: En enkel hilsen"
              initialCode={`# Definer en funksjon
def si_hei():
    print("Hei!")
    print("Hvordan har du det?")

# Kall på funksjonen
si_hei()

# Vi kan kalle på den flere ganger
print()
si_hei()`}
              height="250px"
              storageKey="3-1-enkel-funksjon"
            />
          </section>

          {/* Section 3: Funksjoner med parametre */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Funksjoner med input (parametre)</h2>

            <p className="text-lg mb-6">
              En funksjon blir mye nyttigere når den kan ta imot verdier. Disse verdiene
              kalles <strong>parametre</strong> eller <strong>argumenter</strong>.
            </p>

            <PythonRunner
              title="Eksempel: Funksjon med parameter"
              initialCode={`# Funksjon som tar imot et navn
def si_hei_til(navn):
    print(f"Hei, {navn}!")
    print(f"Koselig å møte deg, {navn}!")

# Kall på funksjonen med forskjellige navn
si_hei_til("Anna")
si_hei_til("Erik")
si_hei_til("Sofie")`}
              height="280px"
              storageKey="3-1-parameter"
            />

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Doble et tall"
                initialCode={`# Funksjon som dobler et tall
def doble(tall):
    resultat = tall * 2
    print(f"{tall} dobbelt er {resultat}")

# Test funksjonen
doble(5)
doble(12)
doble(100)`}
                height="250px"
                storageKey="3-1-doble"
              />
            </div>

            <InfoBox type="tip" title="Flere parametre">
              En funksjon kan ha flere parametre! Skill dem med komma:
              <pre className="mt-2 text-sm">
{`def legg_sammen(tall1, tall2):
    sum = tall1 + tall2
    print(sum)`}
              </pre>
            </InfoBox>
          </section>

          {/* Section 4: Return - gi tilbake en verdi */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Return - gi tilbake en verdi</h2>

            <p className="text-lg mb-6">
              Ofte vil vi at en funksjon skal beregne noe og <strong>returnere</strong> resultatet,
              slik at vi kan bruke det videre i programmet.
            </p>

            <Card className="mb-6 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Forskjell på print og return:</h3>
                <ul className="space-y-2">
                  <li><code>print()</code> - viser tekst på skjermen</li>
                  <li><code>return</code> - sender en verdi tilbake til programmet</li>
                </ul>
              </CardContent>
            </Card>

            <PythonRunner
              title="Eksempel: Return-verdi"
              initialCode={`# Funksjon som returnerer et resultat
def doble(tall):
    return tall * 2

# Nå kan vi lagre resultatet i en variabel
resultat = doble(5)
print(f"Resultatet er: {resultat}")

# Eller bruke det direkte i en beregning
svar = doble(3) + doble(4)
print(f"3*2 + 4*2 = {svar}")`}
              height="300px"
              storageKey="3-1-return"
            />

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Enkel kalkulator"
                initialCode={`# Funksjon for å addere to tall
def legg_sammen(a, b):
    return a + b

# Funksjon for å subtrahere
def trekk_fra(a, b):
    return a - b

# Test funksjonene
print("5 + 3 =", legg_sammen(5, 3))
print("10 - 4 =", trekk_fra(10, 4))

# Bruk resultatene videre
sum1 = legg_sammen(5, 3)
sum2 = legg_sammen(2, 7)
total = legg_sammen(sum1, sum2)
print(f"Total: {total}")`}
              height="350px"
              storageKey="3-1-kalkulator"
            />
          </div>
          </section>

          {/* Exercises */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Oppgaver</h2>

            {/* Exercise 3.1.1 */}
            <div className="mb-8">
              <Exercise
                title="Oppgave 3.1.1: Lag din første funksjon"
                description={`Lag en funksjon som heter \`si_hei()\` som skriver ut "Hallo, verden!".

Kall på funksjonen én gang.`}
                initialCode={`# Lag funksjonen her
def si_hei():
    # Din kode her


# Kall på funksjonen
`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "Hallo, verden!",
                    description: "Funksjonen skriver ut hilsen",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Bruk print() inne i funksjonen",
                  "Husk å kalle på funksjonen med si_hei()"
                ]}
                storageKey="3-1-exercise-1"
                chapterId="3-1"
                exerciseId="3-1-1"
              />
            </div>

            {/* Exercise 3.1.2 */}
            <div className="mb-8">
              <Exercise
                title="Oppgave 3.1.2: Funksjon med parameter"
                description={`Lag en funksjon \`si_hei_til(navn)\` som tar imot et navn og skriver ut:
"Hei, [navn]!"

Test med navnet "Maria".`}
                initialCode={`# Lag funksjonen
def si_hei_til(navn):
    # Din kode her


# Test funksjonen
si_hei_til("Maria")`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "Hei, Maria!",
                    description: "Funksjonen hilser på Maria",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Bruk f-string: print(f'Hei, {navn}!')",
                  "Eller: print('Hei,', navn, '!')"
                ]}
                storageKey="3-1-exercise-2"
                chapterId="3-1"
                exerciseId="3-1-2"
              />
            </div>

            {/* Exercise 3.1.3 */}
            <div className="mb-8">
              <Exercise
                title="Oppgave 3.1.3: Funksjon med return"
                description={`Lag en funksjon \`tredoble(tall)\` som returnerer tallet multiplisert med 3.

Test funksjonen med tallet 7 og skriv ut resultatet.`}
                initialCode={`# Lag funksjonen
def tredoble(tall):
    # Din kode her


# Test funksjonen
resultat = tredoble(7)
print(f"7 × 3 = {resultat}")`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "21",
                    description: "Funksjonen tredobler tallet",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Bruk return tall * 3",
                  "7 × 3 = 21"
                ]}
                storageKey="3-1-exercise-3"
                chapterId="3-1"
                exerciseId="3-1-3"
              />
            </div>

            {/* Exercise 3.1.4 */}
            <div className="mb-8">
              <Exercise
                title="Oppgave 3.1.4: Areal av rektangel"
                description={`Lag en funksjon \`areal(lengde, bredde)\` som beregner og returnerer arealet
av et rektangel (lengde × bredde).

Test med lengde=5 og bredde=8.`}
                initialCode={`# Lag funksjonen
def areal(lengde, bredde):
    # Din kode her


# Test funksjonen
resultat = areal(5, 8)
print(f"Areal: {resultat}")`}
                difficulty="medium"
                testCases={[
                  {
                    expectedOutput: "40",
                    description: "Beregner areal korrekt",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Areal = lengde × bredde",
                  "return lengde * bredde",
                  "5 × 8 = 40"
                ]}
                storageKey="3-1-exercise-4"
                chapterId="3-1"
                exerciseId="3-1-4"
              />
            </div>

            {/* Exercise 3.1.5 */}
            <div className="mb-8">
              <Exercise
                title="Oppgave 3.1.5: Sjekk om tall er positivt"
                description={`Lag en funksjon \`er_positivt(tall)\` som returnerer True hvis tallet er
positivt (større enn 0), og False ellers.

Test med tallene 5, -3 og 0.`}
                initialCode={`# Lag funksjonen
def er_positivt(tall):
    # Din kode her


# Test funksjonen
print(f"Er 5 positivt? {er_positivt(5)}")
print(f"Er -3 positivt? {er_positivt(-3)}")
print(f"Er 0 positivt? {er_positivt(0)}")`}
                difficulty="medium"
                testCases={[
                  {
                    expectedOutput: "True",
                    description: "5 er positivt",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "False",
                    description: "-3 og 0 er ikke positive",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Bruk en if-setning: if tall > 0",
                  "return True hvis positiv, ellers return False",
                  "Eller kort: return tall > 0"
                ]}
                storageKey="3-1-exercise-5"
                chapterId="3-1"
                exerciseId="3-1-5"
              />
            </div>
          </section>

          {/* Summary */}
          <section className="mb-12">
            <Card className="bg-green-600/5 border-green-600/20">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Oppsummering</h2>
                <div className="space-y-3">
                  <p className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>def</strong> - brukes for å definere en funksjon</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Parametre</strong> - input til funksjonen</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>return</strong> - sender en verdi tilbake</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Gjenbruk</strong> - skriv kode én gang, bruk mange ganger</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <ChapterNavigation currentChapterId="3-1" />
        </div>
      </div>
    </BookLayout>
  );
}
