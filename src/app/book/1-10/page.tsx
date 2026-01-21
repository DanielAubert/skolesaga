"use client";

import { BookLayout } from "@/components/book/book-layout";
import { PythonRunner } from "@/components/book/python-runner";
import { Exercise } from "@/components/book/exercise";
import { VideoLink } from "@/components/book/video-link";
import { ChapterNavigation } from "@/components/book/chapter-navigation";
import { ChapterProgressBar } from "@/components/book/chapter-progress-bar";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";
import Link from "next/link";
import { BookOpen } from "lucide-react";


export default function Chapter110Page() {
  useKeyboardNavigation('1-10');

  return (
    <BookLayout currentChapterId="1-10">
      <div className="container max-w-4xl mx-auto py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          {/* Progress Bar */}
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="1-10" />
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">
              Lærebok
            </Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 1.10</span>
          </div>

          {/* Chapter Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Kapittel 1.10</p>
                <h1 className="text-3xl md:text-4xl font-bold">
                  and, or og elif
                </h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              I dette kapitlet skal du lære om and, or og elif i Python.
            </p>
          </div>

          {/* Video Introduction */}
          <section className="mb-12">
            <VideoLink
              url="http://pythonhefte0110.studenthjelp.no/"
              youtubeId="DAC4fpVwhEw"
              title="Kapittel 1.10: and, or og elif"
              description="Se denne videoen før du starter med kapitlet for en best mulig introduksjon."
            />
          </section>

          {/* Content */}
            <p className="text-lg mb-4">
              Vi skal nå utvide litt på det vi det vi lærte om i <strong>1.5 Sammenlikningsoperatorer og if/else – setninger.</strong>
Noen ganger ønsker vi å sjekke om fler vilkår er oppfylt samtidig eller om minst ett av vilkårene vi oppgir er oppfylt. Da kan vi bruke de logiske operatorene <strong>and</strong> og <strong>or</strong><strong>.</strong>
            </p>

            <div className="mb-8">
              <Exercise
                title="Oppgave 1.39 (konsolloppgave)"
                description={`I denne oppgaven skal du bruke Python-konsollen for å gjennomføre koden. Sett x = 8 (Allerede skrevet i koden)

a) Som svar på koden x < 6 and x < 10 tror du vi vil få True eller False? Test påstanden i konsollen.

b) Prøv deretter x < 6 or x < 10. Hva tror du vi får? True eller False?

c) Forklar hva som er forskjellen på and og or.`}
                initialCode={`# x = 8 (Allerede skrevet)
x = 8

# Oppgave a)


# Oppgave b)


# Oppgave c) - Forklar med ord eller test flere eksempler

`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "False\nTrue",
                    description: "a) False, b) True",
                    matchMode: 'lines'
                  }
                ]}
                hints={[
                  "Med 'and' må BEGGE vilkår være sanne for å få True",
                  "Med 'or' trengs bare ÉTT vilkår å være sant for å få True",
                  "x < 6 er False når x=8, men x < 10 er True når x=8"
                ]}
                storageKey="1-10-exercise-1-39"
                chapterId="1-10"
                exerciseId="1-10-exercise-1-39"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0139.studenthjelp.no/"
                  youtubeId="GJhovXPp8J8"
                  title="Løsningsforslag Oppgave 1.39"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>

            <div className="mb-6 space-y-4">
              <PythonRunner
                title="Eksempel 25: or og and operatorer"
                initialCode={`# or-operatoren (eller)
x = 8

if x < 6 or x < 10:
    print("Minst ett av vilkårene er oppfylt")
else:
    print("Ingen av vilkårene er oppfylt")

print()

# and-operatoren (og)
if x < 6 and x < 10:
    print("Begge vilkårene er oppfylt")
else:
    print("Minst ett av vilkårene er ikke oppfylt")`}
                height="350px"
                storageKey="1-10-example-1"
              />
            </div>

            <div className="mb-6 space-y-4">
              <PythonRunner
                title="Eksempel 26: and med flere variabler"
                initialCode={`# Flere variabler med and
x = 8
y = 12

if x > 5 and y > 10:
    print("Begge vilkårene er oppfylt")
    print(f"x ({x}) er større enn 5")
    print(f"y ({y}) er større enn 10")
else:
    print("Minst ett av vilkårene er ikke oppfylt")`}
                height="280px"
                storageKey="1-10-example-2"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 1.40 (x_and_or_y.py)"
                description={`Gi x verdien 3 og y verdien 5. (Allerede skrevet i koden)

a) Lag en if-test som skriver ut 'Begge tallene er større enn 4' om både x og (and) y er større enn 4. La programmet skrive ut 'Minst ett av tallene er mindre eller lik 4' om minst ett av tallene er mindre eller lik 4.

b) Test med forskjellige verdier av x og y.

c) Lag et program som er likt, men som bruker or istedenfor.`}
                initialCode={`# x og y (Allerede skrevet)
x = 3
y = 5

# Oppgave a)


# Oppgave b)


# Oppgave c)

`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "Minst ett av tallene er mindre eller lik 4",
                    description: "x=3, y=5 med 'and' skal gi denne meldingen",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Bruk: if x > 4 and y > 4:",
                  "Med 'and' må begge være sanne",
                  "Med 'or' trengs bare én å være sann"
                ]}
                storageKey="1-10-exercise-1-40"
                chapterId="1-10"
                exerciseId="1-10-exercise-1-40"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0140.studenthjelp.no/"
                  youtubeId="XT1Zc2-furk"
                  title="Løsningsforslag Oppgave 1.40"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 1.41 (kino.py)"
                description={`Elise og storesøsteren Marie skal på kino. Filmen de skal på har aldersgrense 15 år. Sett Elise = 14 og Marie = 18. (Allerede skrevet i koden)

a) Skriv en if-setning som skriver ut 'Begge får sett filmen.' om begge jentene er 15 år eller eldre. La programmet skrive ut 'De kom seg dessverre ikke inn.' om minst én av dem er under 15.

b) Bonusoppgave: Filmer med aldersgrense 15 kan sees av barn som er yngre enn 15 om de følger en voksen (person som er 18 år eller mer). La programmet skrive ut 'De kom kun inn fordi Marie er voksen' om Elise er mellom 12-14 år og Marie er 18 år eller mer. (Se gjennom informasjonsboksen over dersom du ikke får denne til.)`}
                initialCode={`# Elise og Marie skal på kino (Allerede skrevet)
Elise = 14
Marie = 18

# Lag en if-test som sjekker om BEGGE er 15 år eller eldre
# Skriv ut "Begge får sett filmen." hvis begge er gamle nok


# Ellers skal programmet skrive "De kom seg dessverre ikke inn."


# BONUSOPPGAVE:
# Legg til en ny if-test i else-blokken:
# Hvis Elise >= 12 og Marie >= 18, skriv "De kom kun inn fordi Marie er voksen"
`}
                difficulty="medium"
                testCases={[
                  {
                    expectedOutput: "De kom kun inn fordi Marie er voksen",
                    description: "Elise=14, Marie=18 - Kommer inn med voksen følge (bonusregel)"
                  }
                ]}
                hints={[
                  "Bruk 'and' for å sjekke om BEGGE er >= 15",
                  "if Elise >= 15 and Marie >= 15:",
                  "For bonusoppgaven: Legg til 'elif' i else-blokken",
                  "elif Elise >= 12 and Marie >= 18:"
                ]}
                storageKey="1-10-exercise-1-41"
                chapterId="1-10"
                exerciseId="1-10-exercise-1-41"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0141.studenthjelp.no/"
                  youtubeId="8h_D2bG13wE"
                  title="Løsningsforslag Oppgave 1.41"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">elif (else if) setninger:</h2>

            <p className="text-lg mb-4">
              Nå skal vi utvide <strong>if</strong>/<strong>else</strong> konseptet. Vi innfører <strong>elif</strong>. 
            </p>

            <div className="mb-6 space-y-4">
              <PythonRunner
                title="Eksempel 27: elif (else if)"
                initialCode={`x = 9

if x > 10:
    print("x er større enn 10")
elif x > 8:
    print("x er større enn 8, men ikke større enn 10")
else:
    print("x er 8 eller mindre")

# Prøv å endre x til forskjellige verdier
print(f"\\nVerdien av x er: {x}")`}
                height="280px"
                storageKey="1-10-example-3"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 1.42 (elif_kopi.py)"
                description="Kopier koden ifra eksempelet like over. Kjør deretter koden for forskjellige verdier av x for å passe på at koden virker slik den skal."
                initialCode={`x = 9

if x > 10:
    print("x er større enn 10")
elif x > 8:
    print("x er større enn 8, men ikke større enn 10")
else:
    print("x er 8 eller mindre")

# Prøv å endre x til forskjellige verdier
print(f"\\nVerdien av x er: {x}")

# Test med x = 11, hva skriver programmet ut?
# Test med x = 9, hva skriver programmet ut?
# Test med x = 5, hva skriver programmet ut?
`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "x er større enn 8, men ikke større enn 10",
                    description: "x=9 skal gi denne meldingen",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Prøv å endre verdien av x på linje 1",
                  "elif kjøres bare hvis if-testen er False",
                  "else kjøres bare hvis både if og elif er False"
                ]}
                storageKey="1-10-exercise-1-42"
                chapterId="1-10"
                exerciseId="1-10-exercise-1-42"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0142.studenthjelp.no/"
                  youtubeId="DUClkb6HPdM"
                  title="Løsningsforslag Oppgave 1.42"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 1.43 (karakter_elif.py)"
                description={`En ungdomsskole holder på med ett prøveprosjekt hvor læreren istedenfor karakterer skal gi en tilbakemelding om måloppnåelsen til eleven er høy, middels eller lav. Dersom karakteren er 5 eller 6 (x >= 5) så er måloppnåelsen høy. Dersom karakteren er 3 eller 4 (x >= 3, men x < 5) så er måloppnåelsen middels. Dersom karakteren er 1 eller 2 så er måloppnåelsen lav. Sett x = 5 (Allerede skrevet i koden)

a) Lag programmet slik at dersom x >= 5 så er utskriften: Måloppnåelsen er høy

b) Lag programmet slik at dersom x >= 3, men x < 5 så er utskriften: Måloppnåelsen er middels

c) Lag programmet slik at dersom x < 3 så er utskriften: Måloppnåelsen er lav

d) Sjekk at programmet ditt gir riktig tilbakemelding for forskjellige verdier av x. (Dette vil du kunne gjøre ved å endre verdien til x og så kjøre programmet på nytt)

e) Vanskelig bonusoppgave: Lag en while-løkke som tar imot karakterinnput med int(input('Skriv inn en karakter: ')) helt til eleven taster inn en verdi som ikke er en karakter.`}
                initialCode={`# x = 5 (Allerede skrevet)
x = 5

# Oppgave a)


# Oppgave b)


# Oppgave c)


# Oppgave d) - Test med forskjellige verdier


# Oppgave e) - Bonusoppgave (vanskelig)

`}
                difficulty="medium"
                testCases={[
                  {
                    expectedOutput: "Måloppnåelsen er høy",
                    description: "x=5 skal gi 'høy måloppnåelse'",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Del b: if x >= 5:",
                  "Del c: elif x >= 3:",
                  "Del d: else:",
                  "For while-løkken: while x >= 1 and x <= 6:",
                  "Inne i while-løkken: Først få ny input, deretter kjør if/elif/else testen"
                ]}
                storageKey="1-10-exercise-1-43"
                chapterId="1-10"
                exerciseId="1-10-exercise-1-43"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0143.studenthjelp.no/"
                  youtubeId="400Nc90exGo"
                  title="Løsningsforslag Oppgave 1.43"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>

          </section>


          {/* Navigation */}
          <ChapterNavigation currentChapterId="1-10" />
        </div>
      </div>
    </BookLayout>
  );
}
