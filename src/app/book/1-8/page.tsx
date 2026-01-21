"use client";

import { BookLayout } from "@/components/book/book-layout";
import { PythonRunner } from "@/components/book/python-runner";
import { PythonInputRunner } from "@/components/book/python-input-runner";
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


export default function Chapter18Page() {
  useKeyboardNavigation('1-8');

  return (
    <BookLayout currentChapterId="1-8">
      <div className="container max-w-4xl mx-auto py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          {/* Progress Bar */}
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="1-8" />
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">
              Lærebok
            </Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 1.8</span>
          </div>

          {/* Chapter Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Kapittel 1.8</p>
                <h1 className="text-3xl md:text-4xl font-bold">
                  While-løkker
                </h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              I dette kapitlet skal du lære om repetisjon med while-løkker, og hvordan du
              bruker break og continue for å kontrollere løkkeflyt.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/book-images/image59.png"
              alt="While-løkker"
              width={280}
              height={373}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Video Introduction */}
          <section className="mb-12">
            <VideoLink
              url="http://pythonhefte0108.studenthjelp.no/"
              youtubeId="x9VFVeQzejI"
              title="Kapittel 1.8: While-løkker"
              description="Se denne videoen før du starter med kapitlet for en best mulig introduksjon."
            />
          </section>

          {/* Section 1: While-løkker grunnleggende */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Hva er en while-løkke?</h2>

            <p className="text-lg mb-6">
              En while-løkke lar oss gjenta kode så lenge en betingelse er sann. Dette er
              nyttig når vi ikke vet på forhånd hvor mange ganger vi må gjenta noe.
            </p>

            <InfoBox type="info" title="While-løkke syntaks">
              <code>while betingelse:</code>
              <br />
              <code>&nbsp;&nbsp;&nbsp;&nbsp;# Kode som gjentas</code>
              <br />
              <code>&nbsp;&nbsp;&nbsp;&nbsp;# så lenge betingelse er True</code>
            </InfoBox>

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: Enkel while-løkke"
                initialCode={`# Telle fra 1 til 5
teller = 1

while teller <= 5:
    print("Teller:", teller)
    teller = teller + 1

print("Ferdig!")

# Doble tall
tall = 2

while tall <= 16:
    print(tall)
    tall = tall * 2`}
                height="280px"
                storageKey="1-8-example-1"
              />
            </div>

            <div className="mt-6">
              <InfoBox type="warning" title="Uendelige løkker">
                Pass på at betingelsen til slutt blir usann! Hvis ikke vil løkken kjøre
                for alltid (uendelig løkke). Eksempel på uendelig løkke:
                <br />
                <code>while True:</code>
                <br />
                <code>&nbsp;&nbsp;&nbsp;&nbsp;print(&quot;Dette stopper aldri!&quot;)</code>
              </InfoBox>
            </div>

            {/* Exercise 1.28 */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.28 (while_kopi.py)"
                description={'Kopier koden i eksempelet over og kjør koden slik at du får samme utskrift som i eksempelet.\nSe nøye på bildet i starten av delkapittelet. Bruk bildet til å forstå hvordan while-løkken fungerer.'}
                initialCode={`# Skriv koden her

`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "",
                    description: "Kopier eksempel-koden"
                  }
                ]}
                hints={[
                  "Kopier koden fra eksempelet",
                  "Sjekk syntaksen nøye",
                  "Husk innrykk i while-løkken"
                ]}
                storageKey="1-8-exercise-1-28"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0128.studenthjelp.no/"
                  youtubeId="mEzWbA00agE"
                  title="Løsningsforslag Oppgave 1.28"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>
          </section>

          {/* Section 2: While med input */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">While-løkker med brukerinput</h2>

            <p className="text-lg mb-6">
              While-løkker er perfekte for programmer som skal fortsette til brukeren
              sier stopp, for eksempel menyer eller spill.
            </p>

            <PythonInputRunner
              title="Eksempel: Meny med while-løkke"
              initialCode={`# Enkel meny
valg = ""

while valg != "avslutt":
    print("\\nMeny:")
    print("1. Si hei")
    print("2. Si hade")
    print("Skriv 'avslutt' for å avslutte")

    valg = input("Ditt valg: ")

    if valg == "1":
        print("Hei!")
    elif valg == "2":
        print("Hade!")
    elif valg == "avslutt":
        print("Avslutter programmet...")
    else:
        print("Ugyldig valg")

print("Programmet er avsluttet")`}
              height="400px"
                storageKey="1-8-example-2"
            />

            {/* Exercise 1.29 */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.29 (while.py)"
                description={'Begynn med å definere a = 0. \nLag deretter en while-løkke som går så lenge a < 7. I løkken skriv ut "Dette er gøy" hver gang løkken kjører. La a øke med 2 for hver gjennomgang av løkken.'}
                initialCode={`# Definer variabelen
a = 0

# While-løkke

`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "Dette er gøy\nDette er gøy\nDette er gøy\nDette er gøy",
                    description: "Løkken kjører 4 ganger (a = 0, 2, 4, 6)"
                  }
                ]}
                hints={[
                  "Bruk while a < 7:",
                  "Print meldingen inne i løkken",
                  "Øk a med 2: a = a + 2"
                ]}
                storageKey="1-8-exercise-1-29"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0129.studenthjelp.no/"
                  youtubeId="Hkwfns6JIj4"
                  title="Løsningsforslag Oppgave 1.29"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>
          </section>

          {/* Section 3: Break og Continue */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Break og continue</h2>

            <p className="text-lg mb-6">
              <code>break</code> og <code>continue</code> gir oss mer kontroll over løkker.
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <code className="bg-muted px-3 py-1 rounded font-mono text-lg">break</code>
                    <div className="mt-2 ml-8 text-muted-foreground">
                      Avslutter løkken umiddelbart, selv om betingelsen fortsatt er sann.
                      Brukes når vi har funnet det vi leter etter.
                    </div>
                  </div>
                  <div>
                    <code className="bg-muted px-3 py-1 rounded font-mono text-lg">continue</code>
                    <div className="mt-2 ml-8 text-muted-foreground">
                      Hopper over resten av denne iterasjonen og går til neste.
                      Brukes når vi vil hoppe over visse verdier.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Break - Avslutt løkken</h3>
                <PythonInputRunner
                  title="Eksempel: Break"
                  initialCode={`# Finn første tall delelig på 7
tall = 1

while tall <= 100:
    if tall % 7 == 0:
        print("Første tall delelig på 7:", tall)
        break  # Avslutt løkken
    tall = tall + 1

# Med begrensning på forsøk
forsok = 0
maks_forsok = 3

while forsok < maks_forsok:
    passord = input("Passord: ")
    forsok = forsok + 1

    if passord == "hemmelig":
        print("Innlogget!")
        break  # Vellykket - avslutt
    else:
        print(f"Feil! {maks_forsok - forsok} forsøk igjen")

if forsok == maks_forsok and passord != "hemmelig":
    print("For mange feil forsøk!")`}
                  height="400px"
                storageKey="1-8-example-3"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Continue - Hopp over</h3>
                <PythonInputRunner
                  title="Eksempel: Continue"
                  initialCode={`# Skriv ut oddetall fra 1 til 10
tall = 0

while tall < 10:
    tall = tall + 1

    if tall % 2 == 0:
        continue  # Hopp over partall

    print(tall)

# Hopp over negative tall
print("\\nSkriv tall (0 for å avslutte):")
while True:
    tall = int(input("Tall: "))

    if tall == 0:
        break  # Avslutt

    if tall < 0:
        print("Hopper over negative tall")
        continue  # Hopp til neste iterasjon

    print("Du skrev:", tall)`}
                  height="350px"
                storageKey="1-8-example-4"
                />
              </div>
            </div>

            {/* Exercise 1.30 */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.30 (while_evig.py)"
                description={`a) Lag din egen uendelige løkke. Når du kjører programmet husk at ctrl+c bryter kjøringen (Du må klikke deg inn på konsollen før du trykker).

b) Gjør en endring i programmet ditt slik at vilkåret blir oppfylt etter løkken har kjørt 3 ganger.`}
                initialCode={`# Oppgave a)


# Oppgave b)

`}
                difficulty="medium"
                testCases={[
                  {
                    expectedOutput: "",
                    description: "Lag en løkke som kjører 3 ganger"
                  }
                ]}
                hints={[
                  "Start med en teller: teller = 0",
                  "Bruk while teller < 3:",
                  "Øk telleren: teller = teller + 1"
                ]}
                storageKey="1-8-exercise-1-30"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0130.studenthjelp.no/"
                  youtubeId="0dY6kniqwNc"
                  title="Løsningsforslag Oppgave 1.30"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>

            {/* Exercise 1.31 */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.31 (dobling_kopi.py)"
                description={`(Utfordring)

a) Skriv av eksempelet ovenfor og prøvekjør programmet for å sjekke at det virker som det skal.

b) Gjør en endring i koden slik at programmet skriver ut hvor mange ganger ett lite tall må triples før det er større enn eller lik det store tallet.

c) Gjør endringer i programmet slik at du nå ser hvor mange ganger et stort tall må halveres for å få det mindre enn et lite tall.`}
                initialCode={`# Oppgave a)


# Oppgave b)


# Oppgave c)

`}
                difficulty="vanskelig"
                testCases={[
                  {
                    expectedOutput: "",
                    description: "Utfordringsoppgave"
                  }
                ]}
                hints={[
                  "Bruk en teller for antall ganger",
                  "For tripling: tall = tall * 3",
                  "For halvering: tall = tall / 2"
                ]}
                storageKey="1-8-exercise-1-31"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0131.studenthjelp.no/"
                  youtubeId="f-N1nq0v4KQ"
                  title="Løsningsforslag Oppgave 1.31"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>

            {/* Exercise 1.32 */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.32 (while_epsilon.py)"
                description={`(Utfordring +)

a) Sett x = 0, epsilon = 1 og definer en funksjon f(x) som returnerer funksjonen -5*x+302.

b) Vi ønsker først å finne ut hva x minst må være for at funksjonen skal bli mindre enn eller lik 0. Lag en while-løkke som kjører så lenge f(x) ≥ 0. Inne i while løkken kan du la verdien av x øke med epsilon for hver gang løkken kjøres.

c) Etter while løkken bryter la programmet skrive ut: "Funksjonen har ett nullpunkt imellom", (x - epsilon), "og", (x)

d) Sett nå epsilon = 0.5 og kjør programmet igjen. Er svaret nå annerledes? Prøv med epsilon = 0.1, 0.01 og 0.001.`}
                initialCode={`# Oppgave a)


# Oppgave b)


# Oppgave c)


# Oppgave d)

`}
                difficulty="vanskelig"
                testCases={[
                  {
                    expectedOutput: "",
                    description: "Utfordringsoppgave med numerisk metode"
                  }
                ]}
                hints={[
                  "def f(x): return -5*x + 302",
                  "Bruk while f(x) >= 0:",
                  "Øk x med epsilon i hver iterasjon",
                  "Print intervallet etter løkken"
                ]}
                storageKey="1-8-exercise-1-32"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0132.studenthjelp.no/"
                  youtubeId="Ur923J-Ear4"
                  title="Løsningsforslag Oppgave 1.32"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
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
                    <span>While-løkker gjentar kode så lenge betingelsen er sann</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Pass på at løkken til slutt stopper (ikke uendelig løkke)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>break avslutter løkken umiddelbart</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>continue hopper til neste iterasjon</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>While-løkker er perfekte for menyer og gjentatt input</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <ChapterNavigation currentChapterId="1-8" />
        </div>
      </div>
    </BookLayout>
  );
}
