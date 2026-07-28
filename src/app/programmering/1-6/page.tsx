"use client";

import { BookLayout } from "@/components/book/book-layout";
import { PythonRunner } from "@/components/book/python-runner";
import { Exercise } from "@/components/book/exercise";
import { VideoLink } from "@/components/book/video-link";
import { InfoBox } from "@/components/book/info-box";
import { Card, CardContent } from "@/components/ui/card";
import { ChapterNavigation } from "@/components/book/chapter-navigation";
import { ChapterProgressBar } from "@/components/book/chapter-progress-bar";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";
import Link from "next/link";
import Image from "next/image";
import { BookOpen } from "lucide-react";


export default function Chapter16Page() {
  useKeyboardNavigation('1-6');

  return (
    <BookLayout currentChapterId="1-6">
      <div className="container max-w-4xl mx-auto py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          {/* Progress Bar */}
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="1-6" />
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/programmering" className="hover:text-foreground">
              Lærebok
            </Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 1.6</span>
          </div>

          {/* Chapter Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Kapittel 1.6</p>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Funksjoner
                </h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              I dette kapitlet skal du lære å definere egne funksjoner, bruke parametere,
              return-verdier og forstå variable scope.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/book-images/image78.png"
              alt="Funksjoner i Python"
              width={280}
              height={373}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Video Introduction */}
          <section className="mb-12">
            <VideoLink
              url="http://pythonhefte0106.studenthjelp.no/"
              youtubeId="HS6G6wbeC1o"
              title="Kapittel 1.6: Funksjoner"
              description="Se denne videoen før du starter med kapitlet for en best mulig introduksjon."
            />
          </section>

          {/* Section 1: Definere funksjoner */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Hva er en funksjon?</h2>

            <p className="text-lg mb-6">
              En funksjon er en navngitt blokk med kode som kan gjenbrukes. I stedet for
              å skrive den samme koden flere ganger, definerer vi en funksjon og kaller
              den når vi trenger den.
            </p>

            <InfoBox type="info" title="Funksjon syntaks">
              <code>def funksjons_navn():</code>
              <br />
              <code>&nbsp;&nbsp;&nbsp;&nbsp;# Kode som kjøres når funksjonen kalles</code>
              <br />
              <br />
              <code># Kalle funksjonen:</code>
              <br />
              <code>funksjons_navn()</code>
            </InfoBox>

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Enkel funksjon"
                initialCode={`# Definere en funksjon
def si_hei():
    print("Hei!")
    print("Velkommen til Python")

# Kalle funksjonen
si_hei()

print()

# Funksjon for å tegne en linje
def tegn_linje():
    print("-" * 30)

# Bruke funksjonen flere ganger
tegn_linje()
print("Dette er en overskrift")
tegn_linje()`}
                height="320px"
                storageKey="1-6-example-1"
              />
            </div>

            <div className="mt-6">
              <InfoBox type="tip">
                Funksjoner må <strong>defineres</strong> før de <strong>kalles</strong>.
                Python må kjenne til funksjonen før du kan bruke den.
              </InfoBox>
            </div>

            {/* Exercise 1.20 */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.20 (funksjon_test2.py)"
                description={'Kopier koden i eksempelet ovenfor og kjør programmet. \nNB: Dersom du fjerner print() funksjonen rundt gladmelding() så vil fremdeles programmet kjøre, men det vil ikke komme noen utskrift. \nIstedenfor return resultat skriv return "Du er superflink" og kjør programmet.'}
                initialCode={`# Definer funksjonen


# Kall funksjonen

`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "Du er superflink",
                    description: "Funksjonen returnerer en streng"
                  }
                ]}
                hints={[
                  "def gladmelding():",
                  "return 'Du er superflink'",
                  "print(gladmelding())"
                ]}
                storageKey="1-6-exercise-1-20"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0120.studenthjelp.no/"
                  youtubeId="ON7USATHes4"
                  title="Løsningsforslag Oppgave 1.20"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>
          </section>

          {/* Section 2: Parametere */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Funksjoner med parametere</h2>

            <p className="text-lg mb-6">
              Parametere (også kalt argumenter) lar oss sende informasjon til funksjonen.
              Dette gjør funksjoner mye mer fleksible og gjenbrukbare.
            </p>

            <InfoBox type="info" title="Parametere syntaks">
              <code>def funksjons_navn(parameter1, parameter2):</code>
              <br />
              <code>&nbsp;&nbsp;&nbsp;&nbsp;# Bruk parameter1 og parameter2</code>
              <br />
              <br />
              <code># Kalle med argumenter:</code>
              <br />
              <code>funksjons_navn(verdi1, verdi2)</code>
            </InfoBox>

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Funksjoner med parametere"
                initialCode={`# Funksjon med én parameter
def si_hei_til(navn):
    print(f"Hei, {navn}!")

si_hei_til("Anna")
si_hei_til("Bjørn")

print()

# Funksjon med flere parametere
def presenter(fornavn, alder):
    print(f"Jeg heter {fornavn} og er {alder} år gammel")

presenter("Clara", 16)
presenter("David", 17)

print()

# Funksjon som regner
def legg_sammen(a, b):
    summen = a + b
    print(f"{a} + {b} = {summen}")

legg_sammen(5, 3)
legg_sammen(10, 25)`}
                height="450px"
                storageKey="1-6-example-2"
              />
            </div>

            <div className="mt-6">
              <InfoBox type="note" title="Default-verdier">
                Du kan gi parametere standardverdier:
                <br />
                <code>def si_hei(navn=&quot;venn&quot;):</code>
                <br />
                <code>&nbsp;&nbsp;&nbsp;&nbsp;print(f&quot;Hei, {'{'}navn{'}'}!&quot;)</code>
                <br />
                <br />
                Nå kan du kalle både <code>si_hei()</code> og <code>si_hei(&quot;Anna&quot;)</code>
              </InfoBox>
            </div>

            {/* Exercise 1.21 */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.21 (funksjon.py)"
                description={'Definer en funksjon du kaller femplussto(). Husk kolon (:)\nI funksjonen skal du sette resultat = 5 + 2\nReturner resultat.\nKall på funksjonen inne i en print()-funksjon.'}
                initialCode={`# Definer funksjonen


# Kall funksjonen

`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "7",
                    description: "5 + 2 = 7"
                  }
                ]}
                hints={[
                  "def femplussto():",
                  "resultat = 5 + 2",
                  "return resultat",
                  "print(femplussto())"
                ]}
                storageKey="1-6-exercise-1-21"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0121.studenthjelp.no/"
                  youtubeId="f7H8VsTk7Ps"
                  title="Løsningsforslag Oppgave 1.21"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>
          </section>

          {/* Section 3: Return-verdier */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Return-verdier</h2>

            <p className="text-lg mb-6">
              Med <code>return</code> kan en funksjon gi tilbake (returnere) en verdi.
              Dette lar oss bruke resultatet fra funksjonen i resten av programmet.
            </p>

            <InfoBox type="info" title="Forskjell på print og return">
              <strong>print()</strong> viser tekst i konsollen
              <br />
              <strong>return</strong> gir en verdi tilbake som kan lagres eller brukes videre
            </InfoBox>

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Return-verdier"
                initialCode={`# Funksjon som returnerer en verdi
def legg_sammen(a, b):
    return a + b

# Lagre resultatet
resultat = legg_sammen(5, 3)
print("Summen er:", resultat)

# Bruk direkte i en utregning
total = legg_sammen(10, 20) + legg_sammen(5, 15)
print("Total:", total)

print()

# Funksjon som sjekker om tall er partall
def er_partall(tall):
    if tall % 2 == 0:
        return True
    else:
        return False

print("Er 8 partall?", er_partall(8))
print("Er 7 partall?", er_partall(7))

print()

# Funksjon med flere return-stier
def absolutt_verdi(tall):
    if tall < 0:
        return -tall
    return tall

print("Absoluttverdien av -5:", absolutt_verdi(-5))
print("Absoluttverdien av 3:", absolutt_verdi(3))`}
                height="500px"
                storageKey="1-6-example-3"
              />
            </div>

            <div className="mt-6">
              <InfoBox type="tip" title="Return avslutter funksjonen">
                Når Python møter <code>return</code>, avsluttes funksjonen umiddelbart.
                Kode etter return-setningen blir ikke kjørt.
              </InfoBox>
            </div>

            {/* Exercise 1.22 */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.22 (funksjon_argument.py)"
                description={'Definer en funksjon kalt x_pluss_3 som tar imot argumentet x. Her må du altså skrive x_pluss_3(x).\nI funksjonen sett resultat lik x+3. \nReturner resultatet.\nKall på funksjonen med x verdi 2 inne i en print()-funksjon (altså skriv: print(x_pluss_3(2)) ). (Allerede skrevet i koden) Kjør programmet.'}
                initialCode={`# Definer funksjonen


# Kall funksjonen
print(x_pluss_3(2))`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "5",
                    description: "2 + 3 = 5"
                  }
                ]}
                hints={[
                  "def x_pluss_3(x):",
                  "resultat = x + 3",
                  "return resultat"
                ]}
                storageKey="1-6-exercise-1-22"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0122.studenthjelp.no/"
                  youtubeId="rOGpz0_MmKE"
                  title="Løsningsforslag Oppgave 1.22"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>

            {/* Exercise 1.23 */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.23 (fler_argumenter.py)"
                description={'Lag en funksjon kalt x_ganger_y la funksjonen ta imot 2 argumenter x og y. La funksjonen returnere x*y.\n\nTest funksjonen først ved å kalle print(x_ganger_y(3, 4)). Du skal få 12.\n\nGjør deretter en modifikasjon i funksjonen din. Legg nå til en tredje variabel z. Funksjonen skal nå returnere x*y*z.\n\nKall funksjonen med print(x_ganger_y(3, 4, 2)). Du skal få 24.'}
                initialCode={`# Definer funksjonen med to parametere (x, y)


# Test med to parametere
print(x_ganger_y(3, 4))

# Modifiser funksjonen til å ta tre parametere (x, y, z)


# Test med tre parametere
print(x_ganger_y(3, 4, 2))
`}
                difficulty="medium"
                testCases={[
                  {
                    expectedOutput: "12\n24",
                    description: "Først 3*4=12, deretter 3*4*2=24"
                  }
                ]}
                hints={[
                  "Del 1: def x_ganger_y(x, y): return x * y",
                  "Del 2: def x_ganger_y(x, y, z): return x * y * z",
                  "Husk å definere funksjonen før du kaller den",
                  "Du må skrive funksjonen to ganger (først med 2 parametere, så med 3)"
                ]}
                storageKey="1-6-exercise-1-23"
                chapterId="1-6"
                exerciseId="1.23"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0123.studenthjelp.no/"
                  youtubeId="Ho9WgJoeTO4"
                  title="Løsningsforslag Oppgave 1.23"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>

            {/* Exercise 1.24 */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.24 (valgfri_funk.py)"
                description={'Lag en funksjon hvor du selv bestemmer funksjonsnavn, antall argumenter som skal inn og ikke minst hva funksjonen skal returnere. Kjør funksjonen. \n\nLag gjerne flere funksjoner!'}
                initialCode={`# Lag din egen funksjon


# Test funksjonen

`}
                difficulty="medium"
                testCases={[
                  {
                    expectedOutput: "",
                    description: "Åpen oppgave - lag din egen funksjon"
                  }
                ]}
                hints={[
                  "Velg et beskrivende funksjonsnavn",
                  "Bestem hva funksjonen skal gjøre",
                  "Husk return hvis funksjonen skal gi tilbake en verdi",
                  "Test funksjonen ved å kalle den"
                ]}
                storageKey="1-6-exercise-1-24"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0124.studenthjelp.no/"
                  youtubeId="qkOVJIxlQRc"
                  title="Løsningsforslag Oppgave 1.24"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>
          </section>

          {/* Section 4: Docstrings og best practices */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Docstrings og best practices</h2>

            <p className="text-lg mb-6">
              En docstring er en beskrivelse av hva funksjonen gjør. Den skrives med
              trippel anførselstegn rett etter funksjonsdefinisjonen.
            </p>

            <PythonRunner
              title="Eksempel: Docstrings"
              initialCode={`def beregn_sirkel_areal(radius):
    """
    Beregner arealet av en sirkel.

    Parametere:
        radius: Radiusen til sirkelen

    Returnerer:
        Arealet av sirkelen (pi * r²)
    """
    pi = 3.14159
    return pi * radius ** 2

# Bruke funksjonen
areal = beregn_sirkel_areal(5)
print(f"Areal: {areal:.2f}")

# Se docstring
print("\\nDokumentasjon:")
print(beregn_sirkel_areal.__doc__)`}
              height="400px"
                storageKey="1-6-example-4"
            />

            <div className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">Best practices for funksjoner</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Bruk beskrivende funksjons- og parameternavn</li>
                    <li>Én funksjon skal gjøre én ting (Single Responsibility)</li>
                    <li>Legg til docstrings for å forklare funksjonens formål</li>
                    <li>Hold funksjoner korte og oversiktlige</li>
                    <li>Unngå å endre globale variabler inne i funksjoner</li>
                    <li>Bruk return i stedet for print når funksjonen skal gi en verdi</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

          </section>

          {/* Summary */}
          <section className="mb-12">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Oppsummering</h2>
                <div className="space-y-3">
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Funksjoner defineres med def funksjons_navn():</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Parametere lar oss sende informasjon til funksjonen</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>return gir en verdi tilbake fra funksjonen</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Docstrings dokumenterer hva funksjonen gjør</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Funksjoner gjør kode gjenbrukbar og lettere å vedlikeholde</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Bruk beskrivende navn og hold funksjoner fokuserte</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Completion message */}
          <section className="mb-12">
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardContent className="pt-6 text-center">
                <div className="mb-4">
                  <div className="inline-block p-3 bg-green-100 rounded-full">
                    <BookOpen className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-3 text-green-900">
                  Gratulerer! 🎉
                </h2>
                <p className="text-lg text-green-800 mb-4">
                  Du har fullført alle 8 kapitler i Kapittel 1: Grunnleggende Python!
                </p>
                <p className="text-muted-foreground mb-6">
                  Du har nå lært det grunnleggende om Python-programmering: variabler, datatyper,
                  operatorer, input, betingelser, løkker og funksjoner. Dette er fundamentet for
                  alt videre arbeid med Python!
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <ChapterNavigation currentChapterId="1-6" />
        </div>
      </div>
    </BookLayout>
  );
}
