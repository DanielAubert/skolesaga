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

export default function Chapter34Page() {
  useKeyboardNavigation('3-4');

  return (
    <BookLayout currentChapterId="3-4">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          {/* Progress Bar */}
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="3-4" />
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">
              Lærebok
            </Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 3.4</span>
          </div>

          {/* Chapter Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-600/10 rounded-lg">
                <Code className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 3.4</p>
                  <Badge variant="outline" className="text-green-600">9. klasse</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  Prosjekt - Dataanalyse
                </h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Nå skal du kombinere alt du har lært om funksjoner, lister og statistikk
              til å lage et fullstendig dataanalyse-program!
            </p>
          </div>

          {/* Project Overview */}
          <section className="mb-12">
            <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Prosjektbeskrivelse</h2>
                <p className="mb-4">
                  Du skal lage et program som:
                </p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Tar imot data (temperaturer, karakterer, etc.)</li>
                  <li>Lagrer dataene i en liste</li>
                  <li>Bruker funksjoner til å beregne statistikk</li>
                  <li>Viser resultatene pent formatert</li>
                </ol>
              </CardContent>
            </Card>
          </section>

          {/* Section 1: Planlegging */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Steg 1: Planlegg programmet</h2>

            <p className="text-lg mb-6">
              Før vi starter å kode, må vi planlegge. Hva trenger programmet vårt?
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Funksjoner vi trenger:</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li><code>beregn_gjennomsnitt(liste)</code> - returnerer gjennomsnittet</li>
                  <li><code>finn_min_max(liste)</code> - returnerer minste og største verdi</li>
                  <li><code>vis_statistikk(liste)</code> - viser alle resultater</li>
                </ul>
              </CardContent>
            </Card>

            <InfoBox type="tip" title="God praksis">
              Del programmet opp i små funksjoner. Dette gjør det lettere å teste
              og finne feil!
            </InfoBox>
          </section>

          {/* Section 2: Bygge funksjonene */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Steg 2: Lag funksjonene</h2>

            <PythonRunner
              title="Eksempel: Statistikkfunksjoner"
              initialCode={`def beregn_gjennomsnitt(data):
    """Beregner gjennomsnittet av tallene i listen"""
    if len(data) == 0:
        return 0
    return sum(data) / len(data)

def finn_min_max(data):
    """Finner minste og største verdi"""
    if len(data) == 0:
        return 0, 0
    return min(data), max(data)

def finn_spredning(data):
    """Finner spredningen (variasjonsbredde)"""
    if len(data) == 0:
        return 0
    lavest, hoyest = finn_min_max(data)
    return hoyest - lavest

# Test funksjonene
testdata = [85, 72, 90, 68, 95, 78, 82]

snitt = beregn_gjennomsnitt(testdata)
lavest, hoyest = finn_min_max(testdata)
spredning = finn_spredning(testdata)

print(f"Gjennomsnitt: {snitt:.1f}")
print(f"Laveste: {lavest}, Høyeste: {hoyest}")
print(f"Spredning: {spredning}")`}
              height="500px"
              storageKey="3-4-funksjoner"
            />

            <InfoBox type="note" title="Docstring">
              Teksten mellom <code>&quot;&quot;&quot;</code> kalles en <strong>docstring</strong>.
              Den forklarer hva funksjonen gjør. Dette er god programmeringspraksis!
            </InfoBox>
          </section>

          {/* Section 3: Komplett program */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Steg 3: Sett sammen hele programmet</h2>

            <PythonRunner
              title="Eksempel: Fullstendig dataanalyse-program"
              initialCode={`# === FUNKSJONER ===

def beregn_gjennomsnitt(data):
    """Beregner gjennomsnitt"""
    return sum(data) / len(data)

def finn_statistikk(data):
    """Finner alle statistiske mål"""
    antall = len(data)
    gjennomsnitt = beregn_gjennomsnitt(data)
    lavest = min(data)
    hoyest = max(data)
    spredning = hoyest - lavest

    return antall, gjennomsnitt, lavest, hoyest, spredning

def vis_rapport(data, tittel):
    """Viser en pent formatert rapport"""
    antall, snitt, lavest, hoyest, spredning = finn_statistikk(data)

    print("=" * 50)
    print(f"  {tittel}")
    print("=" * 50)
    print(f"Data: {data}")
    print()
    print(f"Antall målinger:  {antall}")
    print(f"Gjennomsnitt:     {snitt:.2f}")
    print(f"Laveste verdi:    {lavest}")
    print(f"Høyeste verdi:    {hoyest}")
    print(f"Spredning:        {spredning}")
    print("=" * 50)

# === HOVEDPROGRAM ===

# Temperaturdata for en uke
temperaturer = [15, 18, 12, 20, 17, 16, 14]
vis_rapport(temperaturer, "TEMPERATURANALYSE")

print()

# Karakterdata
karakterer = [5, 4, 6, 5, 4, 6, 5, 6]
vis_rapport(karakterer, "KARAKTERANALYSE")`}
              height="600px"
              storageKey="3-4-komplett"
            />
          </section>

          {/* Section 4: Utvide programmet */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Steg 4: Legg til mer funksjonalitet</h2>

            <p className="text-lg mb-6">
              La oss utvide programmet med å legge til nye datapunkter og sortere listen.
            </p>

            <PythonRunner
              title="Eksempel: Interaktiv databehandling"
              initialCode={`def legg_til_data(liste, nye_verdier):
    """Legger til nye verdier i listen"""
    for verdi in nye_verdier:
        liste.append(verdi)
    return liste

def sorter_data(data):
    """Returnerer sortert kopi av data"""
    sortert = data.copy()  # Lag en kopi
    sortert.sort()
    return sortert

def finn_median(data):
    """Finner medianen (midtverdien)"""
    sortert = sorter_data(data)
    n = len(sortert)

    if n % 2 == 1:
        # Oddetall: returner midterste
        return sortert[n // 2]
    else:
        # Partall: returner gjennomsnittet av to midterste
        midten1 = sortert[n // 2 - 1]
        midten2 = sortert[n // 2]
        return (midten1 + midten2) / 2

# Test
data = [23, 45, 12, 67, 34, 56, 28]

print("Original data:", data)
print("Sortert data:", sorter_data(data))
print(f"Median: {finn_median(data)}")

# Legg til mer data
nye_verdier = [78, 41]
data = legg_til_data(data, nye_verdier)
print("\\nEtter å ha lagt til nye verdier:", data)
print(f"Ny median: {finn_median(data)}")`}
              height="500px"
              storageKey="3-4-utvid"
            />

            <InfoBox type="info" title="Hva er median?">
              <strong>Median</strong> er midtverdien når dataene er sortert.
              Med tallene [1, 3, 5, 7, 9] er medianen 5.
            </InfoBox>
          </section>

          {/* Exercises */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Oppgaver</h2>

            {/* Exercise 3.4.1 */}
            <div className="mb-8">
              <Exercise
                title="Oppgave 3.4.1: Lag en analysefunksjon"
                description={`Lag en funksjon \`analyser(data)\` som tar imot en liste og returnerer
en tuppel (tuple) med: (antall, gjennomsnitt, lavest, hoyest)

Test med listen: [10, 20, 15, 25, 18]`}
                initialCode={`def analyser(data):
    # Din kode her



# Test
testdata = [10, 20, 15, 25, 18]
antall, snitt, lavest, hoyest = analyser(testdata)

print(f"Antall: {antall}")
print(f"Gjennomsnitt: {snitt:.1f}")
print(f"Laveste: {lavest}")
print(f"Høyeste: {hoyest}")`}
                difficulty="medium"
                testCases={[
                  {
                    expectedOutput: "5",
                    description: "Antall er 5",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "17.6",
                    description: "Gjennomsnitt er 17.6",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "10",
                    description: "Laveste er 10",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "25",
                    description: "Høyeste er 25",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "return len(data), sum(data)/len(data), min(data), max(data)",
                  "Bruk komma for å returnere flere verdier",
                  "88 / 5 = 17.6"
                ]}
                storageKey="3-4-exercise-1"
                chapterId="3-4"
                exerciseId="3-4-1"
              />
            </div>

            {/* Exercise 3.4.2 */}
            <div className="mb-8">
              <Exercise
                title="Oppgave 3.4.2: Tell opp karakterer"
                description={`Lag en funksjon \`tell_karakterer(karakterer, karakter)\` som teller
hvor mange ganger en bestemt karakter forekommer.

Test med listen [5, 4, 6, 5, 4, 6, 5] og karakter 5.`}
                initialCode={`def tell_karakterer(karakterer, karakter):
    # Din kode her


# Test
karakterliste = [5, 4, 6, 5, 4, 6, 5]
antall_femmere = tell_karakterer(karakterliste, 5)

print(f"Antall 5-ere: {antall_femmere}")`}
                difficulty="medium"
                testCases={[
                  {
                    expectedOutput: "3",
                    description: "Det er 3 femmere",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Bruk .count() metoden",
                  "return karakterer.count(karakter)",
                  "Eller bruk en løkke og tell manuelt"
                ]}
                storageKey="3-4-exercise-2"
                chapterId="3-4"
                exerciseId="3-4-2"
              />
            </div>

            {/* Exercise 3.4.3 */}
            <div className="mb-8">
              <Exercise
                title="Oppgave 3.4.3: Finn alle over gjennomsnitt"
                description={`Lag en funksjon \`over_snitt(data)\` som returnerer en ny liste
med bare verdiene som er over gjennomsnittet.

Test med [10, 20, 15, 25, 5]`}
                initialCode={`def over_snitt(data):
    snitt = sum(data) / len(data)
    resultat = []

    # Din kode her: legg til verdier over snittet


    return resultat

# Test
tall = [10, 20, 15, 25, 5]
over = over_snitt(tall)

print(f"Gjennomsnitt: {sum(tall)/len(tall)}")
print(f"Verdier over snitt: {over}")`}
                difficulty="vanskelig"
                testCases={[
                  {
                    expectedOutput: "20",
                    description: "20 er over snittet",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "25",
                    description: "25 er over snittet",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "Bruk en for-løkke: for tall in data:",
                  "if tall > snitt: resultat.append(tall)",
                  "Snittet er 15, så 20 og 25 er over"
                ]}
                storageKey="3-4-exercise-3"
                chapterId="3-4"
                exerciseId="3-4-3"
              />
            </div>

            {/* Exercise 3.4.4 */}
            <div className="mb-8">
              <Exercise
                title="Oppgave 3.4.4: Komplett analyseverktøy"
                description={`Lag et komplett program som:

1. Har en liste med temperaturdata
2. Bruker funksjoner til å beregne statistikk
3. Viser en pent formatert rapport

Bruk listen: [16, 18, 14, 20, 17, 15, 19]`}
                initialCode={`def beregn_statistikk(data):
    """Returnerer (antall, snitt, min, max, spredning)"""
    # Din kode her



def vis_rapport(data):
    """Viser formatert rapport"""
    antall, snitt, lavest, hoyest, spredning = beregn_statistikk(data)

    print("=" * 40)
    print("TEMPERATURRAPPORT")
    print("=" * 40)
    print(f"Antall målinger: {antall}")
    print(f"Gjennomsnitt: {snitt:.1f}°C")
    print(f"Laveste: {lavest}°C")
    print(f"Høyeste: {hoyest}°C")
    print(f"Spredning: {spredning}°C")
    print("=" * 40)

# Temperaturdata
temp = [16, 18, 14, 20, 17, 15, 19]
vis_rapport(temp)`}
                difficulty="vanskelig"
                testCases={[
                  {
                    expectedOutput: "7",
                    description: "7 målinger",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "17.0",
                    description: "Gjennomsnitt 17.0",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "14",
                    description: "Laveste 14",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "20",
                    description: "Høyeste 20",
                    matchMode: 'contains'
                  },
                  {
                    expectedOutput: "6",
                    description: "Spredning 6",
                    matchMode: 'contains'
                  }
                ]}
                hints={[
                  "antall = len(data)",
                  "snitt = sum(data) / len(data)",
                  "lavest, hoyest = min(data), max(data)",
                  "spredning = hoyest - lavest",
                  "return antall, snitt, lavest, hoyest, spredning"
                ]}
                storageKey="3-4-exercise-4"
                chapterId="3-4"
                exerciseId="3-4-4"
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
                    <span><strong>Planlegging</strong> - tenk gjennom programmet før du koder</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Funksjoner</strong> - del opp koden i små, gjenbrukbare deler</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Lister</strong> - lagre og behandle data effektivt</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Statistikk</strong> - analyser data med matematiske funksjoner</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Formatering</strong> - presenter resultater på en tydelig måte</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Congratulations Box */}
          <section className="mb-12">
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 border-green-200 dark:border-green-800">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-400">
                  Gratulerer! 🎉
                </h2>
                <p className="text-lg mb-4">
                  Du har nå fullført kapittel 3 for 9. klasse og kan:
                </p>
                <ul className="space-y-2 list-disc list-inside mb-4">
                  <li>Lage dine egne funksjoner med parametre og return</li>
                  <li>Jobbe med lister - lage, endre og hente ut data</li>
                  <li>Beregne statistiske mål som gjennomsnitt, min og max</li>
                  <li>Kombinere alt til komplette dataanalyse-programmer</li>
                </ul>
                <p className="text-lg font-semibold">
                  Dette er viktige ferdigheter som du vil bruke i mange sammenhenger
                  fremover - både i skolen og i arbeidslivet!
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Navigation */}
          <ChapterNavigation currentChapterId="3-4" />
        </div>
      </div>
    </BookLayout>
  );
}
