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


export default function Chapter111Page() {
  useKeyboardNavigation('1-11');

  return (
    <BookLayout currentChapterId="1-11">
      <div className="container max-w-4xl mx-auto py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          {/* Progress Bar */}
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="1-11" />
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">
              Lærebok
            </Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 1.11</span>
          </div>

          {/* Chapter Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Kapittel 1.11</p>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Enkel bibliotek import og random-modulen
                </h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              I dette kapitlet skal du lære om enkel bibliotek import og random-modulen i Python.
            </p>
          </div>

          {/* Video Introduction */}
          <section className="mb-12">
            <VideoLink
              url="http://pythonhefte0111.studenthjelp.no/"
              youtubeId="CLLr-aIX-sA"
              title="Kapittel 1.11: Bibliotek import og random-modulen"
              description="Se denne videoen før du starter med kapitlet for en best mulig introduksjon."
            />
          </section>

          {/* Content */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Enkel stjerneimport</h2>

            <div className="bg-muted p-4 rounded-lg mb-4">
              <p className="text-sm">Vi skal nå lære om hvordan vi importerer biblioteker i Python. Den enkleste importen for introduksjonsformål er en såkalt stjerneimport. Det er verdt å nevne at det å benytte en slik import ofte ikke er sett på som &quot;god skikk&quot;. Dette er blant annet fordi denne typen import ofte importerer mer enn nødvendig og at alternativet ofte gjøre koden vår mer oversiktlig. Vi begynner med å importere <strong>random-modulen</strong><strong> direkte til konsollen</strong>. For funksjonene under skal virke må du først skrive inn:
<strong>from random import </strong><em><strong> </strong>i <strong>konsollen</strong> og trykke <strong>Enter</strong></em><strong>.</strong>*<em><strong> </strong></em></p>
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 1.44 (konsolloppgave)"
                description="Skriv inn i konsollen from random import *, trykk Enter. Du har nå lastet inn random modulen til konsollen.\n\nSimuler ett terningkast ved å skrive randint(1,6) inn i konsollen, trykk Enter. Du skal nå få et tilfeldig tall mellom 1 og 6.\n\nSimuler ett myntkast ved å skrive randint(0,1) inn i konsollen, trykk Enter. Du skal få et tilfeldig tall mellom 0 og 1. La 0 representere kron og 1 representere mynt.\n\nSimuler et tilfeldig desimaltall mellom 0 og 1 med 2 desimaler med round(uniform(0,1),2)\n\nSkriv navn = ['Susanne','Tormod','Ricardo'] inn i konsollen og trykk Enter. Skriv deretter choice(navn) inn i konsollen slik at du tilfeldig velger ett av navnene. Bruk choice() til å simulere terningkast og myntkast. (Du må definere terninger og myntkast som lister først) Sett terningkast = choice([1,2,3,4,5,6]) og myntkast = choice([0,1]) Skriv deretter print(terningkast) og print(myntkast)"
                initialCode={`from random import *

# a) Simuler ett terningkast (1-6)


# b) Simuler ett myntkast (0=kron, 1=mynt)


# c) Generer et tilfeldig desimaltall mellom 0 og 1 med 2 desimaler
# Hint: round(uniform(0,1),2)


# d) Velg et tilfeldig navn fra listen
navn = ["Susanne", "Tormod", "Ricardo"]


# e) Bruk choice() til å simulere myntkast og terningkast

`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "",
                    description: "Kjør programmet flere ganger og se at resultatene varierer"
                  }
                ]}
                hints={[
                  "a) Bruk randint(1, 6) for terningkast",
                  "b) Bruk randint(0, 1) for myntkast",
                  "c) Bruk round(uniform(0, 1), 2)",
                  "d) Bruk choice(navn)",
                  "e) Bruk choice([\"Kron\", \"Mynt\"]) og choice(range(1, 7))"
                ]}
                storageKey="1-11-exercise-1-44"
                chapterId="1-11"
                exerciseId="1-11-exercise-1-44"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0144.studenthjelp.no/"
                  youtubeId="5Jc-zIjpQfI"
                  title="Løsningsforslag Oppgave 1.44"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>

            <div className="mb-6 space-y-4">
              <PythonRunner
                title="Eksempel 28: Terningkast med random"
                initialCode={`from random import *

# Sara og Lars kaster 2 terninger hver
sara_kast1 = randint(1, 6)
sara_kast2 = randint(1, 6)
sara_sum = sara_kast1 + sara_kast2

lars_kast1 = randint(1, 6)
lars_kast2 = randint(1, 6)
lars_sum = lars_kast1 + lars_kast2

print(f"Sara kastet: {sara_kast1} og {sara_kast2} = {sara_sum}")
print(f"Lars kastet: {lars_kast1} og {lars_kast2} = {lars_sum}")

if sara_sum > lars_sum:
    print("\\nSara vinner!")
elif lars_sum > sara_sum:
    print("\\nLars vinner!")
else:
    print("\\nDet ble uavgjort!")`}
                height="420px"
                storageKey="1-11-example-1"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 1.45 (random_kopi.py)"
                description="Kopier koden ifra eksempelet like over. \n\nSara og Lars bestemmer seg for å isteden ha en konkurranse om hvem som får best sammenlagt resultat på 2 fiktive terninger med 100 sider hver, der sidene har verdiene (1,2,3,4, … ,98,99,100). Endre koden slik at de kaster to slike terninger hver (altså isteden for terninger med 6 sider). \n\nSara og Lars bestemmer seg isteden for å ha en konkurranse med to tilfeldige desimaltall (flyttall). Hvordan disse tallene genereres er uten betydning, de kan ikke se noe mønster i dem. Hver terning kan gi alle verdier i mellom 0 og 1 (terningene kan altså for eksempel vise 0.0, 0.5, 0.9995, 0.543, 0.11, 0.0002, osv.). Lag et program der de får 2 slike 'terninger' hver, og den med høyest sum vinner konkurransen."
                initialCode={`from random import *

# Sara og Lars kaster 2 terninger hver
# Del a) Endre til 100-siders terninger (1-100)
sara_kast1 = randint(1, 6)  # Endre til 100-sider
sara_kast2 = randint(1, 6)  # Endre til 100-sider
sara_sum = sara_kast1 + sara_kast2

lars_kast1 = randint(1, 6)  # Endre til 100-sider
lars_kast2 = randint(1, 6)  # Endre til 100-sider
lars_sum = lars_kast1 + lars_kast2

print(f"Sara kastet: {sara_kast1} og {sara_kast2} = {sara_sum}")
print(f"Lars kastet: {lars_kast1} og {lars_kast2} = {lars_sum}")

if sara_sum > lars_sum:
    print("\\nSara vinner!")
elif lars_sum > sara_sum:
    print("\\nLars vinner!")
else:
    print("\\nDet ble uavgjort!")

# Del b) Endre til desimaltall 0-100 med 2 desimaler
# Bruk uniform(0, 100) og round() i stedet for randint
`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "",
                    description: "Sjekk at verdiene er mellom 1 og 100"
                  }
                ]}
                hints={[
                  "Del a: Endre randint(1, 6) til randint(1, 100)",
                  "Del b: Bruk round(uniform(0, 100), 2) i stedet for randint",
                  "uniform() gir desimaltall, round() runder til 2 desimaler"
                ]}
                storageKey="1-11-exercise-1-45"
                chapterId="1-11"
                exerciseId="1-11-exercise-1-45"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0145.studenthjelp.no/"
                  youtubeId="tQYJFCFx-GE"
                  title="Løsningsforslag Oppgave 1.45"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>

          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Import av enkeltfunksjoner fra biblioteker</h2>

            <p className="text-lg mb-4">
              Vi har frem til nå lært hvordan vi importerer alle funksjonene i et pythonbibliotek. Vi skal nå se på hvordan vi kan importere funksjoner enkeltvis ifra biblioteker. For å gjøre dette ersatter vi * i importkommandoen vår med funksjonsnavn. Ønsker vi å importere fler funksjoner så setter vi komma imellom slik vist i eksempelet under.
            </p>

            <div className="mb-6 space-y-4">
              <PythonRunner
                title="Eksempel 29: Import av spesifikke funksjoner"
                initialCode={`from random import randint, choice

# Velg en tilfeldig terningfarge
terninger = ["rød", "blå", "grønn", "gul"]
valgt_terning = choice(terninger)

print(f"Valgt terning: {valgt_terning}\\n")

# Kast 1000 terninger hver
sara_sum = 0
lars_sum = 0

for i in range(1000):
    sara_sum += randint(1, 6)
    lars_sum += randint(1, 6)

print(f"Sara sin sum: {sara_sum}")
print(f"Lars sin sum: {lars_sum}")

if sara_sum > lars_sum:
    print("\\nSara vinner!")
elif lars_sum > sara_sum:
    print("\\nLars vinner!")
else:
    print("\\nDet ble uavgjort!")`}
                height="500px"
                storageKey="1-11-example-2"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 1.46 (random_kast.py)"
                description="NB: Husk å importere det du trenger ifra random modulen enkeltvis.\n\nLag et program som simulerer et terningkast. Lagre verdien i en variabel du kaller terning_1.\n\nLag enda et terningkast lagre verdien i variabelen terning_2. Skriv ut det høyeste terningkastet av de to. Det skal skrives ut uansett hvilket av terningkastene som var høyest."
                initialCode={`# Importer bare randint fra random
from random import randint

# a) Simuler første terningkast og lagre i terning_1


# b) Skriv ut resultatet


# c) Simuler andre terningkast og lagre i terning_2


# d) Skriv ut resultatet


# e) Lag if/else for å skrive ut den høyeste terningen
# Hvis de er like, skriv ut en av dem

`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "",
                    description: "Programmet skal skrive ut begge kast og den høyeste"
                  }
                ]}
                hints={[
                  "Import: from random import randint",
                  "a) terning_1 = randint(1, 6)",
                  "c) terning_2 = randint(1, 6)",
                  "e) if terning_1 > terning_2: ... elif terning_1 < terning_2: ... else: ...",
                  "Når de er like kan du skrive ut enten terning_1 eller terning_2"
                ]}
                storageKey="1-11-exercise-1-46"
                chapterId="1-11"
                exerciseId="1-11-exercise-1-46"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0146.studenthjelp.no/"
                  youtubeId="Oq5qJUvzq7E"
                  title="Løsningsforslag Oppgave 1.46"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>

          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Import av enkeltfunksjoner med egenvalgte navn (alias)</h2>

            <div className="bg-muted p-4 rounded-lg mb-4">
              <p className="text-sm">Vi har muligheten til å endre navnene på funksjonene vi importerer imens vi importerer de. Dette kalles å importere funksjoner under et alias. Som tidligere spesifiserer vi funksjonene vi ønsker å importere, men vi skriver <strong>as nyttnavn</strong> ved siden av. Vi kan gjøre dette for å korte ned det vi trenger å skrive når vi lager koden vår, eller vi kan gjøre det av nødvendighet fordi vi allerede har importert andre funksjoner med samme navn.</p>
            </div>

            <div className="mb-6 space-y-4">
              <PythonRunner
                title="Eksempel 30: Import med alias (as)"
                initialCode={`from random import randint as ri, uniform as uni

# Bruk randint med alias 'ri'
terningkast = ri(1, 6)
print(f"Terningkast: {terningkast}")

# Bruk uniform med alias 'uni'
tilfeldig_tall = round(uni(0, 100), 2)
print(f"Tilfeldig tall mellom 0 og 100: {tilfeldig_tall}")`}
                height="250px"
                storageKey="1-11-example-3"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 1.47 (random_alias.py)"
                description="Skriv from random import randint i begynnelsen av koden.\nBruk randint til å simulere et myntkast der 0 representer mynt og 1 representerer kron. La programmet skrive ut ordet 'Kron' om utfallet er 1, og la programmet skrive ut ordet 'Mynt' om utfallet er 0.\n\nDu kan også importere med alias. Det vil si at du kan bytte ut navnet til funksjonen.\nImporter uniform som uni slik: from random import randint, uniform as uni\nBruk uni til å finne et tilfeldig tall i mellom 0 og 100 med 2 desimaler. Bruk round() funksjonen."
                initialCode={`# a) Importer randint fra random
from random import randint

# b) Simuler myntkast: 0=mynt, 1=kron
myntkast = randint(0, 1)

# c) Skriv ut 'Kron' eller 'Mynt'


# d) Endre importen til å også inkludere uniform som 'uni'
# Hint: from random import randint, uniform as uni

# e) Bruk uni til å finne tilfeldig tall mellom 0 og 100 med 2 desimaler

`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "",
                    description: "Programmet skal skrive ut Kron/Mynt og et desimaltall"
                  }
                ]}
                hints={[
                  "a) from random import randint",
                  "b) myntkast = randint(0, 1)",
                  "c) if myntkast == 0: print('Mynt') else: print('Kron')",
                  "d) from random import randint, uniform as uni",
                  "e) tilfeldig = round(uni(0, 100), 2)"
                ]}
                storageKey="1-11-exercise-1-47"
                chapterId="1-11"
                exerciseId="1-11-exercise-1-47"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0147.studenthjelp.no/"
                  youtubeId="QsC-AhBv-6M"
                  title="Løsningsforslag Oppgave 1.47"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>

          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Import og bruk av &quot;klasser&quot; som funksjoner</h2>

            <div className="bg-muted p-4 rounded-lg mb-4">
              <p className="text-sm">Vi introduserer enda en vanlig import av funksjoner.  I dette tilfellet importerer vi hele biblioteket som et eget bibliotekobjekt altså en &quot;klasse&quot;. Vi kan benytte oss av dette objektet direkte når vi skal kalle på bibliotekets funksjoner. Teknisk sett er disse funksjonene ikke lengre funksjoner som vi er vant med ifra tidligere, men klasse/objekt metoder.</p>
            </div>

            <div className="mb-6 space-y-4">
              <PythonRunner
                title="Eksempel 31: Import av hele biblioteket"
                initialCode={`import random

# Bruk random som et objekt med metoder
terningkast = random.randint(1, 6)
print(f"Terningkast: {terningkast}")

myntkast = random.choice(["Kron", "Mynt"])
print(f"Myntkast: {myntkast}")

tilfeldig_desimal = round(random.uniform(0, 1), 3)
print(f"Tilfeldig desimal: {tilfeldig_desimal}")`}
                height="280px"
                storageKey="1-11-example-4"
              />
            </div>

          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Endring av navn på importerte klasser</h2>

            <div className="bg-muted p-4 rounded-lg mb-4">
              <p className="text-sm">Vi kan også importere <strong>bibliotek</strong><strong> (/klasser)</strong> med et andre navn (random kan for eksempel erstattes med <strong>rnd</strong><strong>)</strong>. Dette gjøres noen ganger for å korte ned koden. Vi skriver da <strong>import biblioteknavn as nyttnavn</strong><strong>.</strong></p>
            </div>

            <div className="mb-6 space-y-4">
              <PythonRunner
                title="Eksempel 32: Import av bibliotek med alias"
                initialCode={`import random as rnd

# Bruk rnd som alias for random
terningkast = rnd.randint(1, 6)
print(f"Terningkast: {terningkast}")

myntkast = rnd.choice(["Kron", "Mynt"])
print(f"Myntkast: {myntkast}")

tilfeldig_tall = round(rnd.uniform(10, 20), 2)
print(f"Tilfeldig tall mellom 10 og 20: {tilfeldig_tall}")`}
                height="280px"
                storageKey="1-11-example-5"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 1.48 (random_import.py)"
                description="Skriv import random i toppen av koden din.\nBruk random.randint til å generere et tilfeldig heltall i området [3,10]\nBruk random.uniform(a,b) til å finne et tilfeldig desimaltall i området [2,4]\n\nDu kan også importere hele biblioteket med alias. Det vil si at du kan bytte ut navnet på biblioteket til hva du vil.\nPrøv import random as rnd, og bruk da rnd.randint(a,b), rnd.uniform(a,b) osv."
                initialCode={`# a) Importer hele random-biblioteket
import random

# b) Generer tilfeldig heltall mellom 3 og 10


# c) Generer tilfeldig desimaltall mellom 2 og 4


# d) Endre importen til å bruke alias 'rnd'
# Hint: import random as rnd
# Husk å endre random.randint til rnd.randint osv.

`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "",
                    description: "Programmet skal generere tilfeldige tall"
                  }
                ]}
                hints={[
                  "a) import random",
                  "b) heltall = random.randint(3, 10)",
                  "c) desimal = random.uniform(2, 4)",
                  "d) import random as rnd, deretter rnd.randint(3, 10)",
                  "Etter å ha endret til 'rnd', må du endre ALLE steder random brukes"
                ]}
                storageKey="1-11-exercise-1-48"
                chapterId="1-11"
                exerciseId="1-11-exercise-1-48"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0148.studenthjelp.no/"
                  youtubeId="nhrFWfuk6zM"
                  title="Løsningsforslag Oppgave 1.48"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>

            <p className="text-lg mb-4">
              Oppgavesamling Kapittel 1
            </p>

            <div className="bg-muted p-4 rounded-lg mb-4">
              <p className="text-sm">Husk å lagre programmene du lager i en egen mappe. Dette er spesielt viktig for oppgavene med filnavn med dette utseendet:<strong> </strong><strong>oppgavenavn</strong><strong>_1. </strong>Disse oppgavene bygger vi nemlig videre på i senere delkapitler.</p>
            </div>

          </section>


          {/* Navigation */}
          <ChapterNavigation currentChapterId="1-11" />
        </div>
      </div>
    </BookLayout>
  );
}
