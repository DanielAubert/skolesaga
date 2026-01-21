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


export default function Chapter17Page() {
  useKeyboardNavigation('1-7');

  return (
    <BookLayout currentChapterId="1-7">
      <div className="container max-w-4xl mx-auto py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          {/* Progress Bar */}
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="1-7" />
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">
              Lærebok
            </Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 1.7</span>
          </div>

          {/* Chapter Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Kapittel 1.7</p>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Lister og listeoperasjoner
                </h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              I dette kapitlet skal du lære om lister og listeoperasjoner i Python.
            </p>
          </div>

          {/* Video Introduction */}
          <section className="mb-12">
            <VideoLink
              url="http://pythonhefte0107.studenthjelp.no/"
              youtubeId="gthnDWj4Kcw"
              title="Kapittel 1.7: Lister og listeoperasjoner"
              description="Se denne videoen før du starter med kapitlet for en best mulig introduksjon."
            />
          </section>

          {/* Content */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Å trekke elementer ut ifra en liste:</h2>

            <p className="text-lg mb-4">
              Om vi ønsker å trekke ut det første elementet i listen vi har kalt <strong>liste_</strong><strong>eksempel</strong> så må vi skrive <strong>liste_</strong><strong>eksempel</strong><strong>[0]</strong><strong>.</strong> For å trekke ut det andre elementet må vi skrive <strong>liste_</strong><strong>eksempel</strong><strong>[1]</strong>. Vi trekker ut element nummer <strong>n</strong> i listen ved å skrive <strong>liste_</strong><strong>eksempel</strong><strong>[n-1]</strong>. Skal vi trekke ut det tredje elementet i listen skriver vi <strong>liste_eksempel[3-1]</strong> altså <strong>liste_eksempel[2]</strong>.
            </p>

            <div className="mb-6 space-y-4">
              <PythonRunner
                title="Eksempel 16: Hente elementer fra liste"
                initialCode={`# Lag noen eksempel-lister
liste_eksempel = ["eple", "banan", "pære", "appelsin", "kiwi"]
liste_tall = [10, 20, 30, 40, 50]

# Hent første element (indeks 0)
print("Første element:", liste_eksempel[0])

# Hent andre element (indeks 1)
print("Andre element:", liste_eksempel[1])

# Hent tredje element (indeks 2)
print("Tredje element:", liste_eksempel[2])

# Hent siste element (indeks -1)
print("Siste element:", liste_eksempel[-1])

# Hent nest siste element (indeks -2)
print("Nest siste element:", liste_eksempel[-2])

# Eksempler med tall
print("\\nFra liste_tall:")
print("liste_tall[0] =", liste_tall[0])
print("liste_tall[-1] =", liste_tall[-1])`}
                height="450px"
                storageKey="1-7-example-1"
              />
            </div>

            <p className="text-lg mb-4">
              Vi kan også trekke ut det siste elementet i listen ved å skrive <strong>liste_</strong><strong>eksempel</strong><strong>[-1]</strong>, det nest siste elementet ved å skrive <strong>liste_</strong><strong>eksempel</strong><strong>[-2]</strong> etc. Vi trekker ut element nummer n ifra slutte av listen ved å skrive <strong>liste_</strong><strong>eksempel</strong><strong>[-n]</strong>.
            </p>

            <div className="mb-8">
              <Exercise
                title="Oppgave 1.25 (liste.py)"
                description={`Sett liste_1 = [1,2,3,4,5] og liste_2 = [6,7,8,9] (Allerede skrevet i koden)

a) Hva tror du liste_1[2] blir? Skriv print(liste_1[2]) inn i kodefeltet.

b) Hva tror du liste_2[-2] blir? Skriv print(liste_2[-2]) inn i kodefeltet.

c) Bruk print(liste_1) og print(liste_2) til å skrive ut hele listen på hver sin linje.

d) Skriv liste_1.reverse() og print(liste_1). Hva skjer?`}
                initialCode={`# Opprett listene (Allerede skrevet)
liste_1 = [1, 2, 3, 4, 5]
liste_2 = [6, 7, 8, 9]

# Oppgave a)


# Oppgave b)


# Oppgave c)


# Oppgave d)

`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "3\n8\n[1, 2, 3, 4, 5]\n[6, 7, 8, 9]\n[5, 4, 3, 2, 1]",
                    description: "Tester alle deloppgaver a-d)",
                    matchMode: 'lines'
                  }
                ]}
                hints={[
                  "a) liste_1[2] gir det tredje elementet (indeks starter på 0)",
                  "b) liste_2[-2] gir nest siste element",
                  "c) Bruk print(liste_1) og print(liste_2)",
                  "d) reverse() snur listen, og endrer den originale listen"
                ]}
                storageKey="1-7-exercise-1-25"
                chapterId="1-7"
                exerciseId="1-7-exercise-1-25"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0125.studenthjelp.no/"
                  youtubeId="JCTYEOQZDs8"
                  title="Løsningsforslag Oppgave 1.25"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>

          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Å legge sammen lister med (+)-operatoren</h2>

            <p className="text-lg mb-4">
              Vi kan legge sammen to lister ved å bruke (<strong>+</strong>) – operatoren.  <strong>Liste_1 + Liste_2</strong> vil gi listen som begynner med alle elementene i <strong>Liste_1 </strong>og fortsetter med alle elementene i <strong>Liste_2</strong>
            </p>

            <div className="mb-6 space-y-4">
              <PythonRunner
                title="Eksempel 17: Legge sammen lister med +"
                initialCode={`# Lag noen lister
liste_a = [1, 2, 3]
liste_b = [4, 5, 6]
liste_c = ["a", "b", "c"]

# Legg sammen lister med + operatoren
ny_liste = liste_a + liste_b
print("liste_a + liste_b =", ny_liste)

# Kan også legge sammen forskjellige typer lister
blandet = liste_a + liste_c
print("liste_a + liste_c =", blandet)

# Legge sammen tre lister
alle_sammen = liste_a + liste_b + liste_c
print("Alle sammen:", alle_sammen)

# Liste multiplikasjon
repetert = liste_c * 3
print("liste_c * 3 =", repetert)`}
                height="380px"
                storageKey="1-7-example-2"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 1.26 (listeaddisjon.py)"
                description={`Sett x = ['Lister', 'er'] og y = ['gøy!']. (Allerede skrevet i koden)

a) Sett z = x + y bruk deretter print()-funksjonen til å skrive ut resultatet.

b) Finn z[0] og skriv ut verdien.

c) Finn z[-3] og skriv ut verdien.

d) Skriv ut 3*x. Hva skjer når vi multipliserer en liste?`}
                initialCode={`# Opprett listene (Allerede skrevet)
x = ["Lister", "er"]
y = ["gøy!"]

# Oppgave a)


# Oppgave b)


# Oppgave c)


# Oppgave d)

`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "Lister",
                    description: "Sjekker at z[0] og z[-3] gir 'Lister'",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "a) z = x + y, deretter print(z)",
                  "b) print(z[0]) gir første element",
                  "c) z[-3] gir tredje element fra slutten (som er z[0])",
                  "d) 3*x repeterer listen x tre ganger"
                ]}
                storageKey="1-7-exercise-1-26"
                chapterId="1-7"
                exerciseId="1-7-exercise-1-26"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0126.studenthjelp.no/"
                  youtubeId="dSbIu8adjcc"
                  title="Løsningsforslag Oppgave 1.26"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>

          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">.append() - metoden:</h2>

            <div className="bg-muted p-4 rounded-lg mb-4">
              <p className="text-sm"><strong>.append()</strong> er en liste-metode som brukes til å legge til enkeltelementer til en liste. Dette er første gang vi støter på &quot;metoder&quot; som er et eget tema innenfor programmering. Vi fordyper oss ikke i dette på nåværende tidspunkt, men fokuserer heller på hvordan vi kan bruke denne ene metoden.</p>
            </div>

            <div className="mb-6 space-y-4">
              <PythonRunner
                title="Eksempel 18: .append() metoden"
                initialCode={`# Start med en tom liste
min_liste = []
print("Tom liste:", min_liste)

# Legg til elementer med .append()
min_liste.append(1)
print("Etter append(1):", min_liste)

min_liste.append(2)
print("Etter append(2):", min_liste)

min_liste.append("hei")
print("Etter append('hei'):", min_liste)

# .append() legger til ETT element
tall_liste = [10, 20, 30]
print("\\nOpprinelig liste:", tall_liste)

tall_liste.append(40)
print("Etter append(40):", tall_liste)

# OBS! Hvis du legger til en liste med .append(), blir den et nestet element
tall_liste.append([50, 60])
print("Etter append([50, 60]):", tall_liste)
print("Siste element:", tall_liste[-1])`}
                height="480px"
                storageKey="1-7-example-3"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 1.27 (listception.py)"
                description={`Sett liste_1 = [2,'fire',3.14] (Allerede skrevet i koden)

a) Skriv liste_1.append(5) for å legge til 5 i listen. Skriv ut liste_1.

b) Sett liste_2 = ['Enda','en','liste'] (Allerede skrevet i koden)

c) Skriv liste_2.append(liste_1) for å legge til liste_1 i liste_2. Skriv ut liste_2.

d) Skriv ut liste_2[-1]. Hva får du?

e) Skriv ut liste_2[-1][1]. Forklar hvorfor du får en annen utskrift enn i d).`}
                initialCode={`# Opprett liste_1 (Allerede skrevet)
liste_1 = [2, "fire", 3.14]

# Oppgave a)


# Opprett liste_2 (Allerede skrevet)
liste_2 = ["Enda", "en", "liste"]

# Oppgave b) - liste_2 er allerede opprettet ovenfor

# Oppgave c)


# Oppgave d)


# Oppgave e)

`}
                difficulty="medium"
                testCases={[
                  {
                    expectedOutput: "fire",
                    description: "Sjekker at liste_2[-1][1] gir 'fire'",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "a) liste_1.append(5), deretter print(liste_1)",
                  "c) liste_2.append(liste_1), deretter print(liste_2)",
                  "d) print(liste_2[-1]) viser siste element (som er liste_1)",
                  "e) liste_2[-1][1] aksesserer element [1] i den nestede listen"
                ]}
                storageKey="1-7-exercise-1-27"
                chapterId="1-7"
                exerciseId="1-7-exercise-1-27"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0127.studenthjelp.no/"
                  youtubeId="hczrJCV5uMc"
                  title="Løsningsforslag Oppgave 1.27"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>

          </section>


          {/* Navigation */}
          <ChapterNavigation currentChapterId="1-7" />
        </div>
      </div>
    </BookLayout>
  );
}
