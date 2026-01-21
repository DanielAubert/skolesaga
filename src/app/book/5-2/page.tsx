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
import { Calculator } from "lucide-react";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";

export default function Chapter52Page() {
  useKeyboardNavigation('5-2');

  return (
    <BookLayout currentChapterId="5-2">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="5-2" />
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">Lærebok</Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 5.2</span>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <Calculator className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 5.2</p>
                  <Badge variant="outline" className="text-blue-600">1P</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">Økonomi og budsjett</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Lær å lage enkle budsjetter, beregne inntekter og utgifter med Python.
            </p>
          </div>

          {/* Section 1: Inntekter og utgifter */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Inntekter og utgifter</h2>

            <p className="text-lg mb-6">
              Et budsjett viser oversikt over inntekter (penger inn) og utgifter (penger ut).
              Differansen mellom inntekter og utgifter kalles overskudd eller underskudd.
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <p><strong>Inntekter</strong>: Lønn, gave, stipend, lommepenger</p>
                  <p><strong>Utgifter</strong>: Husleie, mat, transport, mobilabonnement</p>
                  <p><strong>Overskudd</strong>: Inntekter - Utgifter &gt; 0</p>
                  <p><strong>Underskudd</strong>: Inntekter - Utgifter &lt; 0</p>
                </div>
              </CardContent>
            </Card>

            <PythonRunner
              title="Enkelt budsjett"
              initialCode={`# Månedlige inntekter
lønn = 25000
stipend = 5000

# Månedlige utgifter
husleie = 8000
mat = 4000
transport = 1500
mobilabonnement = 300
strøm = 800

# Beregn totaler
totale_inntekter = lønn + stipend
totale_utgifter = husleie + mat + transport + mobilabonnement + strøm
resultat = totale_inntekter - totale_utgifter

print("BUDSJETT")
print("=" * 40)
print(f"Inntekter: {totale_inntekter} kr")
print(f"Utgifter: {totale_utgifter} kr")
print("-" * 40)
print(f"Resultat: {resultat} kr")

if resultat > 0:
    print(f"Overskudd! Du sparer {resultat} kr.")
else:
    print(f"Underskudd! Du går {-resultat} kr i minus.")`}
              height="380px"
              storageKey="5-2-enkelt-budsjett"
            />
          </section>

          {/* Section 2: Bruk lister for budsjett */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Bruk lister for budsjett</h2>

            <p className="text-lg mb-6">
              Når vi har mange inntekter eller utgifter, er det praktisk å bruke lister.
              Da kan vi enkelt legge til eller fjerne poster, og bruke sum() for å regne totalt.
            </p>

            <InfoBox type="tip" title="sum()-funksjonen">
              <code>sum([10, 20, 30])</code> gir 60. sum() legger sammen alle tallene i en liste.
            </InfoBox>

            <div className="mt-6">
              <PythonRunner
                title="Budsjett med lister"
                initialCode={`# Inntekter som liste
inntekter = [25000, 5000, 2000]  # Lønn, stipend, ekstrajobb
inntekts_navn = ["Lønn", "Stipend", "Ekstrajobb"]

# Utgifter som liste
utgifter = [8000, 4000, 1500, 300, 800, 600]
utgifts_navn = ["Husleie", "Mat", "Transport", "Mobil", "Strøm", "Fritid"]

# Vis inntekter
print("INNTEKTER:")
for i in range(len(inntekter)):
    print(f"  {inntekts_navn[i]}: {inntekter[i]} kr")
print(f"TOTALT: {sum(inntekter)} kr\\n")

# Vis utgifter
print("UTGIFTER:")
for i in range(len(utgifter)):
    print(f"  {utgifts_navn[i]}: {utgifter[i]} kr")
print(f"TOTALT: {sum(utgifter)} kr\\n")

# Resultat
resultat = sum(inntekter) - sum(utgifter)
print(f"RESULTAT: {resultat} kr")`}
                height="420px"
                storageKey="5-2-budsjett-lister"
              />
            </div>
          </section>

          {/* Section 3: Månedsbudsjett */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Lage et månedsbudsjett</h2>

            <p className="text-lg mb-6">
              La oss lage et komplett månedsbudsjett som viser alle poster på en oversiktlig måte.
            </p>

            <PythonRunner
              title="Fullstendig månedsbudsjett"
              initialCode={`def vis_budsjett(inntekter_dict, utgifter_dict):
    """Viser et komplett budsjett"""
    print("=" * 50)
    print("MÅNEDLIG BUDSJETT".center(50))
    print("=" * 50)

    # Inntekter
    print("\\nINNTEKTER:")
    totale_inntekter = 0
    for kategori, beløp in inntekter_dict.items():
        print(f"  {kategori:.<25} {beløp:>10} kr")
        totale_inntekter += beløp
    print(f"  {'TOTAL INNTEKT':.<25} {totale_inntekter:>10} kr")

    # Utgifter
    print("\\nUTGIFTER:")
    totale_utgifter = 0
    for kategori, beløp in utgifter_dict.items():
        print(f"  {kategori:.<25} {beløp:>10} kr")
        totale_utgifter += beløp
    print(f"  {'TOTAL UTGIFT':.<25} {totale_utgifter:>10} kr")

    # Resultat
    resultat = totale_inntekter - totale_utgifter
    print("\\n" + "=" * 50)
    print(f"  {'RESULTAT':.<25} {resultat:>10} kr")
    print("=" * 50)

    return resultat

# Eksempel
inntekter = {
    "Lønn": 28000,
    "Stipend": 6000
}

utgifter = {
    "Husleie": 9000,
    "Mat": 4500,
    "Transport": 1200,
    "Mobil": 399,
    "Strøm": 900,
    "Fritid": 1500,
    "Diverse": 500
}

resultat = vis_budsjett(inntekter, utgifter)

if resultat > 0:
    sparing_prosent = (resultat / sum(inntekter.values())) * 100
    print(f"\\nDu sparer {sparing_prosent:.1f}% av inntekten!")`}
              height="500px"
              storageKey="5-2-manedsbudsjett"
            />
          </section>

          {/* Exercises */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Oppgaver</h2>

            <div className="mb-8">
              <Exercise
                title="Oppgave 5.2.1: Ditt eget budsjett"
                description={`Lag et budsjett for deg selv med minst 2 inntekter og 4 utgifter.
Beregn om du får overskudd eller underskudd.`}
                initialCode={`# Dine inntekter
lommepenger = 1000
ekstrajobb = 2500

# Dine utgifter
mobilabonnement = 300
buss_kort = 600
Netflix = 129
kino_og_kafé = 800

# Beregn totaler
inntekter = lommepenger + ekstrajobb
utgifter = mobilabonnement + buss_kort + Netflix + kino_og_kafé
resultat = inntekter - utgifter

print(f"Inntekter: {inntekter} kr")
print(f"Utgifter: {utgifter} kr")
print(f"Resultat: {resultat} kr")`}
                difficulty="lett"
                testCases={[
                  { expectedOutput: "Inntekter:", matchMode: 'contains' },
                  { expectedOutput: "Utgifter:", matchMode: 'contains' },
                  { expectedOutput: "Resultat:", matchMode: 'contains' }
                ]}
                hints={["Summér alle inntekter og utgifter", "Trekk utgifter fra inntekter"]}
                storageKey="5-2-ex1"
                chapterId="5-2"
                exerciseId="5-2-1"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 5.2.2: Spareandel"
                description={`En person tjener 30000 kr/måned og har 24000 kr i utgifter.
Hvor mange prosent av inntekten sparer personen?`}
                initialCode={`inntekt = 30000
utgift = 24000

sparing = inntekt - utgift
sparing_prosent = (sparing / inntekt) * 100

print(f"Sparing: {sparing} kr")
print(f"Spareandel: {sparing_prosent:.1f}%")`}
                difficulty="medium"
                testCases={[
                  { expectedOutput: "6000", matchMode: 'contains' },
                  { expectedOutput: "20", matchMode: 'contains' }
                ]}
                hints={["Sparing = inntekt - utgift", "6000 / 30000 = 0.2 = 20%"]}
                storageKey="5-2-ex2"
                chapterId="5-2"
                exerciseId="5-2-2"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 5.2.3: Budsjett med lister"
                description={`Bruk lister til å beregne totale utgifter.
Utgifter: Mat (4500), Strøm (800), Vann (400), Forsikring (600)`}
                initialCode={`# Utgifter som liste
utgifter = [4500, 800, 400, 600]
utgifts_navn = ["Mat", "Strøm", "Vann", "Forsikring"]

# Vis alle utgifter
for i in range(len(utgifter)):
    print(f"{utgifts_navn[i]}: {utgifter[i]} kr")

# Beregn total
totalt = sum(utgifter)
print(f"\\nTotale utgifter: {totalt} kr")`}
                difficulty="lett"
                testCases={[
                  { expectedOutput: "6300", matchMode: 'contains' }
                ]}
                hints={["Bruk sum(utgifter) for å legge sammen"]}
                storageKey="5-2-ex3"
                chapterId="5-2"
                exerciseId="5-2-3"
              />
            </div>
          </section>

          <section className="mb-12">
            <Card className="bg-blue-500/5 border-blue-500/20">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Oppsummering</h2>
                <div className="space-y-2">
                  <p>✓ <strong>Budsjett</strong>: Oversikt over inntekter og utgifter</p>
                  <p>✓ <strong>Overskudd</strong>: Inntekter &gt; Utgifter</p>
                  <p>✓ <strong>Lister</strong>: Effektiv måte å håndtere flere poster</p>
                  <p>✓ <strong>sum()</strong>: Legger sammen alle tall i en liste</p>
                </div>
              </CardContent>
            </Card>
          </section>

          <ChapterNavigation currentChapterId="5-2" />
        </div>
      </div>
    </BookLayout>
  );
}
