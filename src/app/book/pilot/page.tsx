'use client';

import { BookLayout } from "@/components/book/book-layout";
import { PythonRunner } from "@/components/book/python-runner";
import { Exercise } from "@/components/book/exercise";
import { VideoLink } from "@/components/book/video-link";
import { InfoBox } from "@/components/book/info-box";
import { ChapterNavigation } from "@/components/book/chapter-navigation";
import { ChapterProgressBar } from "@/components/book/chapter-progress-bar";
import { ReadingTimeBadge } from "@/components/book/reading-time-badge";
import { getChapterById } from "@/lib/data/book-chapters";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { BookOpen } from "lucide-react";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";

export default function PilotChapterPage() {
  useKeyboardNavigation('1-1');
  const chapter = getChapterById('1-1');

  return (
    <BookLayout currentChapterId="1-1">
      <div className="container max-w-4xl mx-auto py-8">
          {/* Progress Bar */}
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="1-1" />
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">
              Lærebok
            </Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 1.1</span>
          </div>

          {/* Chapter Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-muted-foreground">Kapittel 1.1</p>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Kommentarer, print() og feilmeldinger
                </h1>
              </div>
              {chapter && (
                <div className="no-print">
                  <ReadingTimeBadge minutes={chapter.readingTimeMinutes} />
                </div>
              )}
            </div>
            <p className="text-lg text-muted-foreground">
              I dette kapitlet skal du lære om grunnleggende konsepter i Python: hvordan skrive kommentarer,
              bruke print()-funksjonen, og forstå feilmeldinger.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/book-images/image6.png"
              alt="Kommentarer i Python"
              width={350}
              height={263}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Video Introduction */}
          <section className="mb-12">
            <VideoLink
              url="http://pythonhefte0101.studenthjelp.no/"
              youtubeId="8BZXuo_QTco"
              title="Kapittel 1.1: Kommentarer, print() og feilmeldinger"
              description="Se denne videoen før du starter med kapitlet for en best mulig introduksjon."
            />
          </section>

          {/* Section 1: Kommentarer */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">To typer kommentarer</h2>

            <p className="text-lg mb-6">
              Når vi skriver programkode i Python så ønsker vi å gjøre den forståelig for oss selv
              og andre som leser koden i ettertid. Det er derfor nyttig å kunne skrive forklarende
              tekst ved siden av koden i programmet. Det å kunne skrive kommentarer er derfor viktig.
            </p>

            <InfoBox type="info" title="Hva er en kommentar?">
              Når du skriver en kommentar skriver du en tekst i koden som ikke utføres som vanlig
              programkode. Python ignorerer kommentarer når programmet kjøres.
            </InfoBox>

            <div className="mt-6 space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">1. Hash (#)</h3>
                <p className="mb-4">
                  For å skrive en kommentar i Python så bruker vi normalt å sette hash (#) foran det
                  vi ønsker å kommentere. Dersom vi skriver # så vil Python ikke lenger lese det som
                  kommer etter på samme linje i koden.
                </p>

                <PythonRunner
                  title="Eksempel: Hash-kommentarer"
                  initialCode={`# Dette er en kommentar - Python leser ikke denne
print("Hei!")  # Dette er også en kommentar

# print("Dette blir ikke skrevet ut")
print("Men dette blir skrevet ut!")`}
                  height="200px"
                  storageKey="1-1-hash-example"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">2. Trippel anførselstegn (&quot;&quot;&quot;)</h3>
                <p className="mb-4">
                  En annen måte å kommentere på er ved å bruke trippel anførselstegn (&quot;&quot;&quot;) foran
                  og bak det du skriver. Gjør du dette kan du kommentere over flere linjer.
                </p>

                <PythonRunner
                  title="Eksempel: Flerlinjes kommentarer"
                  initialCode={`"""
Dette er en kommentar
som går over flere linjer.
Python leser ikke dette!
"""

print("Hei fra Python!")`}
                  height="200px"
                  storageKey="1-1-multiline-example"
                />
              </div>
            </div>

            {/* Exercise 1.1 */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.1: Kommentarer (kommentar.py)"
                description={`a) Skriv # Python leser ikke kommentarer på den første linjen i programmet ditt. (NB: Husk å kjøre programmet, du vil ikke få noen utskrift.)

b) Lag en kommentar over flere linjer ved å bruke trippel anførselstegn (""") som i eksempel 1. Skriv din egen tekst.`}
                initialCode={`"""
Her kan du skrive din flerlinjes kommentar
for oppgave b)
"""

# Oppgave a)
# Python leser ikke kommentarer på den første linjen i programmet ditt.
`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "",
                    description: "Programmet skal ikke ha noen utskrift"
                  }
                ]}
                hints={[
                  "Bruk # for en enkeltlinjes kommentar",
                  "Plasser \"\"\" kommentaren helt øverst i filen",
                  "Eller bruk # på hver linje i stedet",
                  "Husk at kommentarer ikke gir noen utskrift"
                ]}
                storageKey="1-1-exercise-1"
                chapterId="1-1"
                exerciseId="1-1-exercise-1"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0101.studenthjelp.no/"
                  youtubeId="B4Yti2z050c"
                  title="Løsningsforslag Oppgave 1.1"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>
          </section>

          {/* Section 2: print() funksjonen */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">print()-funksjonen</h2>

            <p className="text-lg mb-6">
              print() funksjonen er utrolig viktig når du skriver i Python. Det er nemlig denne
              funksjonen du vil bruke til å få en utskrift i konsollen. print() funksjonen kan
              ta ett eller flere &quot;argumenter&quot;/&quot;verdier&quot; inn samtidig. Ved flere argumenter setter
              du komma imellom.
            </p>

            <InfoBox type="tip">
              Tekst må alltid ha anførselstegn rundt seg i print(), mens tall kan skrives direkte.
            </InfoBox>

            <div className="mt-6">
              <PythonRunner
                title="Eksempel: print()-funksjonen"
                initialCode={`# Print med tekst
print("Hei verden!")

# Print med tall
print(42)
print(3.14)

# Print med flere argumenter
print("Svaret er:", 42)
print("3 + 2 =", 5)`}
                height="250px"
                storageKey="1-1-print-example"
              />
            </div>

            {/* Exercise 1.2 */}
            <div className="mt-8">
              <Exercise
                title="Oppgave 1.2: print()-funksjonen (print.py)"
                description={`a) Skriv print("Jeg har laget mitt første program") i kodefeltet. Husk anførselstegn inne i print()-funksjonen. Prøvekjør programmet.

b) Bruk print()-funksjonen til å skrive ut tallet 71. Her trenger du ikke bruke anførselstegn siden det kun er et heltall.

c) Nederst i eksempelet over ser du at vi har brukt fler "argumenter" inne i print()-funksjonen. Skriv én print()-funksjon med "3 + 2 =" og 5 som argumentene. Husk å sette komma imellom argumentene.`}
                initialCode={`# Oppgave a)


# Oppgave b)


# Oppgave c)

`}
                difficulty="lett"
                testCases={[
                  {
                    expectedOutput: "Jeg har laget mitt første program\n71\n3 + 2 = 5",
                    matchMode: 'lines'
                  }
                ]}
                hints={[
                  "Tekst må ha anførselstegn: print(\"tekst\")",
                  "Tall trenger ikke anførselstegn: print(71)",
                  "Flere argumenter: print(\"tekst\", tall)"
                ]}
                storageKey="1-1-exercise-2"
                chapterId="1-1"
                exerciseId="1-1-exercise-2"
              />
              <div className="mt-4">
                <VideoLink
                  url="http://pyløs0102.studenthjelp.no/"
                  youtubeId="j0sH0iKrQIo"
                  title="Løsningsforslag Oppgave 1.2"
                  description="Se videoløsning for denne oppgaven."
                />
              </div>
            </div>
          </section>

          {/* Section 3: Feilmeldinger */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Feilmeldinger</h2>

            <p className="text-lg mb-6">
              Når du lager din egen kode så vil du utvilsomt møte på feilmeldinger. Det kan virke
              skummelt å møte på en feilmelding første gang, men vit at det er helt naturlig å kode
              feil en gang i blant. Dersom du får en feilmelding så vil oftest Python fortelle deg
              akkurat hvor feilen er i koden din.
            </p>

            <InfoBox type="warning" title="Viktig om feilmeldinger">
              Python kjører koden kronologisk fra topp til bunn. Når programmet møter på en feil,
              stopper det - selv om koden under er helt korrekt!
            </InfoBox>

            <div className="mt-6 space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">Eksempel: En vanlig feil</h3>
                  <p className="mb-4">
                    Her mangler det anførselstegn rundt &quot;Verden&quot;. Python vil gi en NameError fordi
                    den tror &quot;Verden&quot; er en variabel som ikke er definert.
                  </p>
                  <PythonRunner
                    title="Prøv denne koden (den har en feil!)"
                    initialCode={`print("Hei")
# Kommentar
print("Dette")
print(Verden)  # Mangler anførselstegn!
print("Ferdig")`}
                    height="200px"
                    storageKey="1-1-error-example"
                  />
                </CardContent>
              </Card>

              <InfoBox type="note" title="Vanlige feiltyper">
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li><strong>SyntaxError:</strong> Python forstår ikke syntaksen din</li>
                  <li><strong>NameError:</strong> Du bruker noe som ikke er definert</li>
                  <li><strong>IndentationError:</strong> Feil innrykk (mellomrom) i koden</li>
                </ul>
              </InfoBox>

              {/* Exercise 1.3 */}
              <div className="mt-8">
                <Exercise
                  title="Oppgave 1.3: Feilmeldinger (feilmeldinger.py)"
                  description={`a) Kopier koden som står under Kode i eksempelet ovenfor. Kjøre koden og pass på at du får samme utskrift. (Inkluder alt i koden). NB: Du har nå fått en NameError. Denne feilmeldingen kommer vanligvis når noe ikke har blitt riktig definert. Hva å definere noe betyr kommer vi tilbake til i neste delkapittel.

b) Vi skal nå rette opp koden vi skriv i oppgave a) dette gjør vi ved å sette anførselstegn rundt Verden. Det skal altså stå print("Verden"). Kjør programmet og pass på at du nå får en utskrift uten feilmeldinger.

c) Prøv å fjerne # i den øverste kommentaren du kopierte i oppgave a) for så å kjøre programmet. Du får nå enten en SyntaxError eller en IndentationError.

d) Om du får en IndentationError så er det fordi du har et mellomrom imellom starten av linjen og koden din. Et slikt mellomrommet har en spesiell oppgave i Python som vi skal komme tilbake til senere. Du får en SyntaxError når Python ikke klare å tolke det du skriver.`}
                  initialCode={`print("Hei")
# Kommentar
print("Dette")
print(Verden)  # Mangler anførselstegn!
print("Ferdig")`}
                  difficulty="lett"
                  testCases={[
                    {
                      expectedOutput: "Hei\nDette\nVerden\nFerdig",
                      description: "Alle print-setninger skal fungere etter at Verden er fikset"
                    }
                  ]}
                  hints={[
                    "Tekst må alltid ha anførselstegn rundt seg",
                    "Det skal være print(\"Verden\") med anførselstegn",
                    "Husk både start- og slutt-anførselstegn"
                  ]}
                  storageKey="1-1-exercise-feilmeldinger"
                  chapterId="1-1"
                  exerciseId="1-1-exercise-feilmeldinger"
                />
                <div className="mt-4">
                  <VideoLink
                    url="http://pyløs0103.studenthjelp.no/"
                    youtubeId="_1OfWSELGis"
                    title="Løsningsforslag Oppgave 1.3"
                    description="Se videoløsning for denne oppgaven."
                  />
                </div>
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
                    <span>Kommentarer med # for en linje, eller &quot;&quot;&quot; for flere linjer</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>print() funksjonen brukes for å skrive ut til konsollen</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Tekst må ha anførselstegn, tall kan skrives direkte</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span>Feilmeldinger er normale og hjelper deg å finne problemer</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <ChapterNavigation currentChapterId="1-1" />
      </div>
    </BookLayout>
  );
}
