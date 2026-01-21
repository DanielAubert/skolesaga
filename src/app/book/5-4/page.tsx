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

export default function Chapter54Page() {
  useKeyboardNavigation('5-4');

  return (
    <BookLayout currentChapterId="5-4">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
          <div className="mb-6 space-y-4">
            <ChapterProgressBar currentChapterId="5-4" />
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/book" className="hover:text-foreground">Lærebok</Link>
            <span>/</span>
            <span className="text-foreground">Kapittel 5.4</span>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <Calculator className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-muted-foreground">Kapittel 5.4</p>
                  <Badge variant="outline" className="text-blue-600">1P</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">Prosjekt: Økonomiplanlegger</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Lag et fullstendig program som kombinerer budsjett, prosent og sparing med renter.
            </p>
          </div>

          {/* Section 1: Planlegge prosjektet */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Hva skal programmet gjøre?</h2>

            <p className="text-lg mb-6">
              Vi skal lage et program som hjelper deg med å planlegge økonomien din.
              Programmet skal kunne:
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <ol className="space-y-3 list-decimal list-inside">
                  <li>Vise et månedlig budsjett med inntekter og utgifter</li>
                  <li>Beregne hvor mye du kan spare hver måned</li>
                  <li>Vise hvordan sparepengene vokser over tid med renter</li>
                  <li>Sammenligne ulike sparescenarier</li>
                </ol>
              </CardContent>
            </Card>

            <InfoBox type="tip" title="Tips til prosjektet">
              Bruk funksjoner for å strukturere koden. Det gjør programmet lettere å lese og endre.
            </InfoBox>
          </section>

          {/* Section 2: Delprosjekt 1 - Budsjett */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Del 1: Budsjettfunksjon</h2>

            <p className="text-lg mb-6">
              Først lager vi en funksjon som beregner månedlig overskudd.
            </p>

            <PythonRunner
              title="Budsjettfunksjon"
              initialCode={`def beregn_budsjett(inntekter, utgifter):
    """Beregner månedlig budsjett"""
    total_inn = sum(inntekter.values())
    total_ut = sum(utgifter.values())
    overskudd = total_inn - total_ut

    print("MÅNEDLIG BUDSJETT")
    print("=" * 40)

    print("\\nInntekter:")
    for navn, beløp in inntekter.items():
        print(f"  {navn:.<25} {beløp:>8} kr")
    print(f"  {'TOTAL':.<25} {total_inn:>8} kr")

    print("\\nUtgifter:")
    for navn, beløp in utgifter.items():
        print(f"  {navn:.<25} {beløp:>8} kr")
    print(f"  {'TOTAL':.<25} {total_ut:>8} kr")

    print("\\n" + "=" * 40)
    print(f"MÅNEDLIG OVERSKUDD: {overskudd} kr")
    print("=" * 40)

    return overskudd

# Test funksjonen
inntekter = {"Lønn": 25000, "Stipend": 5000}
utgifter = {
    "Husleie": 8000,
    "Mat": 4000,
    "Transport": 1500,
    "Diverse": 2000
}

månedlig_sparing = beregn_budsjett(inntekter, utgifter)`}
              height="500px"
              storageKey="5-4-budsjett-funksjon"
            />
          </section>

          {/* Section 3: Delprosjekt 2 - Sparing */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Del 2: Sparesimulator</h2>

            <p className="text-lg mb-6">
              Nå lager vi en funksjon som simulerer hvordan sparingen vokser over tid.
            </p>

            <PythonRunner
              title="Sparefunksjon med renter"
              initialCode={`def simuler_sparing(månedlig_beløp, rentesats, antall_år):
    """Simulerer sparing med månedlige innskudd og årlige renter"""
    saldo = 0
    totalt_innsatt = 0

    print(f"\\nSPARESIMULERING")
    print(f"Månedlig sparing: {månedlig_beløp} kr")
    print(f"Rentesats: {rentesats}% per år")
    print(f"Periode: {antall_år} år")
    print("=" * 50)
    print(f"{'År':>3} | {'Innsatt':>10} | {'Renter':>10} | {'Saldo':>12}")
    print("-" * 50)

    for år in range(1, antall_år + 1):
        # Legg til månedlige innskudd
        årlig_innskudd = månedlig_beløp * 12
        saldo += årlig_innskudd
        totalt_innsatt += årlig_innskudd

        # Beregn renter på slutten av året
        renter = saldo * (rentesats / 100)
        saldo += renter

        print(f"{år:3} | {årlig_innskudd:>10} | {renter:>10.2f} | {saldo:>12.2f}")

    print("=" * 50)
    print(f"Totalt innsatt: {totalt_innsatt} kr")
    print(f"Renteinntekter: {saldo - totalt_innsatt:.2f} kr")
    print(f"Sluttbeløp: {saldo:.2f} kr")

    return saldo

# Test
simuler_sparing(månedlig_beløp=1000, rentesats=4, antall_år=10)`}
              height="520px"
              storageKey="5-4-spare-simulator"
            />
          </section>

          {/* Section 4: Fullt program */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Del 3: Fullstendig økonomiplanlegger</h2>

            <p className="text-lg mb-6">
              Nå kombinerer vi alt til et komplett program!
            </p>

            <PythonRunner
              title="Komplett økonomiplanlegger"
              initialCode={`def økonomiplanlegger():
    """Hovedprogram for økonomisk planlegging"""

    print("╔════════════════════════════════════════╗")
    print("║     PERSONLIG ØKONOMIPLANLEGGER       ║")
    print("╚════════════════════════════════════════╝")

    # --- DEL 1: BUDSJETT ---
    print("\\n📊 BUDSJETTANALYSE")
    print("=" * 45)

    inntekter = {
        "Lønn": 28000,
        "Ekstrajobb": 3000
    }

    utgifter = {
        "Husleie": 9000,
        "Mat": 4500,
        "Transport": 1200,
        "Mobil": 399,
        "Strøm": 900,
        "Fritid": 1500,
        "Diverse": 800
    }

    total_inn = sum(inntekter.values())
    total_ut = sum(utgifter.values())
    månedlig_overskudd = total_inn - total_ut

    print(f"Totale inntekter:  {total_inn:>10} kr/mnd")
    print(f"Totale utgifter:   {total_ut:>10} kr/mnd")
    print(f"Månedlig overskudd: {månedlig_overskudd:>9} kr")

    sparing_prosent = (månedlig_overskudd / total_inn) * 100
    print(f"Spareandel:        {sparing_prosent:>10.1f}%")

    # --- DEL 2: SPAREMÅL ---
    print("\\n💰 SPAREMÅL OG PROGNOSER")
    print("=" * 45)

    sparemål = {
        "Ferie": 15000,
        "Ny laptop": 12000,
        "Buffer": 30000
    }

    print("Dine sparemål:")
    totalt_sparemål = 0
    for mål, beløp in sparemål.items():
        måneder = beløp / månedlig_overskudd
        totalt_sparemål += beløp
        print(f"  {mål}: {beløp} kr (ca. {måneder:.1f} mnd)")

    print(f"\\nTotalt sparemål: {totalt_sparemål} kr")
    måneder_totalt = totalt_sparemål / månedlig_overskudd
    print(f"Tid til målet: {måneder_totalt:.1f} måneder ({måneder_totalt/12:.1f} år)")

    # --- DEL 3: LANGSIKTIG SPARING ---
    print("\\n📈 LANGSIKTIG SPARING MED RENTER")
    print("=" * 45)

    rentesats = 4.5
    år = 15

    saldo = 0
    totalt_innsatt = 0

    print(f"Sparer {månedlig_overskudd} kr/mnd i {år} år")
    print(f"Rentesats: {rentesats}%\\n")

    # Vis utvalgte år
    for år_nr in range(1, år + 1):
        # Legg til månedlige innskudd
        årlig_innskudd = månedlig_overskudd * 12
        saldo += årlig_innskudd
        totalt_innsatt += årlig_innskudd

        # Renter
        renter = saldo * (rentesats / 100)
        saldo += renter

        # Vis kun hvert 5. år + første og siste
        if år_nr == 1 or år_nr % 5 == 0 or år_nr == år:
            print(f"År {år_nr:2}: {saldo:>12,.2f} kr")

    print("=" * 45)
    print(f"Du har satt inn:   {totalt_innsatt:>12,.2f} kr")
    print(f"Renteinntekter:    {saldo - totalt_innsatt:>12,.2f} kr")
    print(f"Totalt beløp:      {saldo:>12,.2f} kr")

    # --- DEL 4: SAMMENDRAG ---
    print("\\n✅ SAMMENDRAG")
    print("=" * 45)
    print(f"• Du sparer {sparing_prosent:.1f}% av inntekten")
    print(f"• Måned for måned: +{månedlig_overskudd} kr")
    print(f"• Over {år} år: {saldo:,.0f} kr (inkl. renter)")
    print(f"• Renteinntekter: {saldo - totalt_innsatt:,.0f} kr")

# Kjør programmet
økonomiplanlegger()`}
              height="650px"
              storageKey="5-4-fullstendig-program"
            />
          </section>

          {/* Exercises */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Prosjektoppgaver</h2>

            <div className="mb-8">
              <Exercise
                title="Oppgave 5.4.1: Tilpass programmet"
                description={`Endre økonomiplanleggeren til å bruke DINE tall:
- Dine inntekter
- Dine utgifter
- Dine sparemål
Kjør programmet og se hva du får!`}
                initialCode={`# Skriv ditt eget budsjett her
mine_inntekter = {
    "Lommepenger": 1000,
    "Ekstrajobb": 2000
}

mine_utgifter = {
    "Mobil": 300,
    "Transport": 500,
    "Fritid": 800
}

# Beregn overskudd
total_inn = sum(mine_inntekter.values())
total_ut = sum(mine_utgifter.values())
overskudd = total_inn - total_ut

print(f"Månedlig overskudd: {overskudd} kr")

# Hvor lang tid til første sparemål?
sparemål = 5000  # F.eks. ny telefon
måneder = sparemål / overskudd if overskudd > 0 else 0
print(f"Tid til sparemål på {sparemål} kr: {måneder:.1f} måneder")`}
                difficulty="lett"
                testCases={[
                  { expectedOutput: "Månedlig overskudd:", matchMode: 'contains' }
                ]}
                hints={["Endre tallene til dine egne", "Sett inn et realistisk sparemål"]}
                storageKey="5-4-ex1"
                chapterId="5-4"
                exerciseId="5-4-1"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 5.4.2: Sammenlign sparescenarier"
                description={`Lag et program som sammenligner to sparestrategier:
1. Spare 500 kr/mnd i 20 år med 4% rente
2. Spare 1000 kr/mnd i 10 år med 4% rente
Hvilken strategi gir mest penger?`}
                initialCode={`def beregn_sparing(månedlig, år, rente):
    """Beregner total sparing over tid"""
    saldo = 0
    for år_nr in range(år):
        saldo += månedlig * 12  # Årlig innskudd
        saldo += saldo * (rente / 100)  # Renter
    return saldo

# Strategi 1
strategi1 = beregn_sparing(500, 20, 4)

# Strategi 2
strategi2 = beregn_sparing(1000, 10, 4)

print(f"Strategi 1 (500 kr/mnd i 20 år): {strategi1:.2f} kr")
print(f"Strategi 2 (1000 kr/mnd i 10 år): {strategi2:.2f} kr")

if strategi1 > strategi2:
    print("\\nStrategi 1 er best!")
else:
    print("\\nStrategi 2 er best!")`}
                difficulty="medium"
                testCases={[
                  { expectedOutput: "Strategi 1", matchMode: 'contains' },
                  { expectedOutput: "Strategi 2", matchMode: 'contains' }
                ]}
                hints={["Strategi 1: Lav innskudd, lang tid = mer renter"]}
                storageKey="5-4-ex2"
                chapterId="5-4"
                exerciseId="5-4-2"
              />
            </div>

            <div className="mb-8">
              <Exercise
                title="Oppgave 5.4.3: Utvidet rapport"
                description={`Utvid økonomiplanleggeren til å også vise:
- Hvor mye du bruker på hver utgiftskategori i prosent
- Hvilke utgifter som kan kuttes for å spare mer`}
                initialCode={`utgifter = {
    "Mat": 4500,
    "Transport": 1200,
    "Mobil": 399,
    "Fritid": 1500
}

total = sum(utgifter.values())

print("UTGIFTSFORDELING:")
print("=" * 40)

for kategori, beløp in utgifter.items():
    prosent = (beløp / total) * 100
    print(f"{kategori:.<20} {beløp:>6} kr ({prosent:>5.1f}%)")

print("=" * 40)
print(f"TOTALT: {total} kr")

# Finn dyreste kategori
dyreste = max(utgifter, key=utgifter.get)
print(f"\\nDyreste kategori: {dyreste} ({utgifter[dyreste]} kr)")
print(f"Hvis du kutter 20% her, sparer du {utgifter[dyreste] * 0.2:.0f} kr/mnd")`}
                difficulty="medium"
                testCases={[
                  { expectedOutput: "UTGIFTSFORDELING", matchMode: 'contains' },
                  { expectedOutput: "%", matchMode: 'contains' }
                ]}
                hints={["Prosent = (beløp / total) * 100", "Bruk max() for å finne høyeste verdi"]}
                storageKey="5-4-ex3"
                chapterId="5-4"
                exerciseId="5-4-3"
              />
            </div>
          </section>

          <section className="mb-12">
            <Card className="bg-blue-500/5 border-blue-500/20">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Gratulerer!</h2>
                <div className="space-y-3">
                  <p>Du har nå fullført kapittel 5 om økonomi og Python! 🎉</p>
                  <p className="text-lg font-semibold">Du kan nå:</p>
                  <div className="space-y-2 ml-4">
                    <p>✓ Beregne prosent, rabatter og moms</p>
                    <p>✓ Lage personlige budsjetter</p>
                    <p>✓ Forstå hvordan renter fungerer</p>
                    <p>✓ Simulere sparing over tid</p>
                    <p>✓ Kombinere flere konsepter i ett program</p>
                  </div>
                  <p className="mt-4 text-muted-foreground italic">
                    Disse ferdighetene er nyttige både i hverdagen og i praktisk matematikk (1P)!
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <ChapterNavigation currentChapterId="5-4" />
        </div>
      </div>
    </BookLayout>
  );
}
