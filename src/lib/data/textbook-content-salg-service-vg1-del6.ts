/**
 * Salg, service og reiseliv VG1 - Del 6: Økonomi og drift
 * Kapittel 6.1-6.7
 *
 * Dekker LK20 kompetansemål:
 * - beskrive administrative funksjoner og rutiner i en virksomhet og drøfte hvordan disse påvirker kvaliteten og servicenivået
 * - utforske og vurdere verdikjeder i bransjen i et bærekraftsperspektiv
 * - gjøre rede for relevant regelverk og drøfte hvordan det påvirker drift av virksomheter
 * - gjøre rede for grunnleggende økonomiske prinsipper i en virksomhet
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 6.1: Grunnleggende økonomi for servicenæringen
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_6_1: TextbookChapter = {
  id: 'salg-service-vg1-6-1',
  courseId: 'salg-service-vg1',
  chapterNumber: '6.1',
  title: 'Grunnleggende økonomi for servicenæringen',
  description: 'En innføring i grunnleggende økonomiske begreper og prinsipper for virksomheter i salg, service og reiseliv. Du lærer om inntekter, kostnader og lønnsomhet.',
  estimatedMinutes: 45,
  competenceGoals: ['gjøre rede for grunnleggende økonomiske prinsipper i en virksomhet'],
  content: [
    {
      id: 'salg-service-vg1-6-1-intro',
      type: 'text',
      content: `## Økonomi - grunnlaget for drift

For at en virksomhet skal overleve og skape verdier, ma den tjene penger. Det høres enkelt ut, men krever forståelse av hvordan inntekter og kostnader henger sammen. I dette kapittelet lærer du de grunnleggende økonomiske prinsippene som ligger til grunn for all forretningsdrift.

I dette kapittelet skal du lære:
- Forskjellen mellom inntekter og kostnader
- Hva lønnsomhet betyr
- Viktige økonomiske begreper
- Særtrekk ved økonomi i servicenæringen`,
    },
    {
      id: 'salg-service-vg1-6-1-def-1',
      type: 'definition',
      title: 'Inntekter',
      content: `**Inntekter** er verdien av det en virksomhet selger. I en butikk er det salg av varer, pa et hotell er det salg av overnatting, i en restaurant er det salg av mat og drikke. Inntektene beregnes som: Antall solgte enheter x pris per enhet.`,
    },
    {
      id: 'salg-service-vg1-6-1-def-2',
      type: 'definition',
      title: 'Kostnader',
      content: `**Kostnader** er verdien av det en virksomhet bruker for a drive og produsere. Dette inkluderer varekjøp, lønn, husleie, strøm, markedsføring og mye mer. Kostnadene trekkes fra inntektene for å finne resultatet.`,
    },
    {
      id: 'salg-service-vg1-6-1-text-1',
      type: 'text',
      content: `### Den grunnleggende ligningen

**Resultat = Inntekter - Kostnader**

| Resultat | Betydning |
|----------|-----------|
| Positivt (overskudd) | Virksomheten tjener penger |
| Null | Virksomheten gar i balanse |
| Negativt (underskudd) | Virksomheten taper penger |

**Eksempel:**
En restaurant har i en maned:
- Inntekter: 500 000 kr
- Kostnader: 450 000 kr
- Resultat: 50 000 kr (overskudd)

For a øke resultatet kan virksomheten enten øke inntektene eller redusere kostnadene - eller begge deler.`,
    },
    {
      id: 'salg-service-vg1-6-1-text-2',
      type: 'text',
      content: `### Typer kostnader

**Faste kostnader:**
- Paløper uansett aktivitetsniva
- Eksempler: Husleie, forsikring, noen lønnskostnader
- Endres lite pa kort sikt

**Variable kostnader:**
- Øker og synker med aktiviteten
- Eksempler: Varekjøp, provisjoner, strøm (delvis)
- Følger salget

**Eksempel fra hotell:**
| Type | Eksempler | Endres med belegg? |
|------|-----------|-------------------|
| Fast | Husleie, forsikring, lederlønninger | Nei |
| Variabel | Renhold per rom, sengetøyvask, frokostkostnader | Ja |

**Hvorfor er dette viktig?**
- Ved lavt salg tynger faste kostnader mer
- Ved høyt salg gir lave variable kostnader bedre margin
- Forstaelse av kostnadsstruktur hjelper med prissetting`,
    },
    {
      id: 'salg-service-vg1-6-1-def-3',
      type: 'definition',
      title: 'Dekningsbidrag',
      content: `**Dekningsbidrag** er det som blir igjen av salgsinntekten nar variable kostnader er trukket fra. Dekningsbidraget skal dekke faste kostnader og gi overskudd. Formel: Dekningsbidrag = Salgsinntekt - Variable kostnader.`,
    },
    {
      id: 'salg-service-vg1-6-1-text-3',
      type: 'text',
      content: `### Særtrekk ved økonomien i servicenæringen

**1. Tjenester kan ikke lagres**
- Et tomt hotellrom i natt er tapt inntekt for alltid
- Yield management (dynamisk prising) er viktig
- Kapasitetsutnyttelse er nøkkelen

**2. Høy andel faste kostnader**
- Lokaler, utstyr og fast personale koster mye
- Ma ha nok aktivitet til a dekke faste kostnader
- Høyt volum er ofte nødvendig

**3. Personalintensivt**
- Service krever mennesker
- Lønnskostnader er ofte største kostnad
- Effektivitet vs. servicekvalitet

**4. Sesongvariasjoner**
- Store svingninger i etterspørsel
- Utfordringer med a matche kostnader og inntekter
- Behov for god planlegging`,
    },
    {
      id: 'salg-service-vg1-6-1-tip-1',
      type: 'tip',
      title: 'Kapasitetsutnyttelse',
      content: `I servicenæringen er kapasitetsutnyttelse avgjørende for lønnsomheten. Et hotell med 70% belegg har mye høyere lønnsomhet enn et med 40% belegg - selv om de faste kostnadene er de samme. Derfor jobber hoteller og flyselskaper aktivt med prising for a fylle opp kapasiteten.`,
    },
    {
      id: 'salg-service-vg1-6-1-example-1',
      type: 'example',
      title: 'Eksempel: Beregne lønnsomhet for en kafé',
      problem: 'En kafé selger 100 kopper kaffe per dag til 45 kr. Varekostnaden per kopp er 10 kr. Faste kostnader per maned er 40 000 kr (husleie, lønn, utstyr). Er kafeen lønnsom?',
      solution: `**Beregning per maned (30 dager):**

**Inntekter:**
- 100 kopper x 45 kr x 30 dager = 135 000 kr

**Variable kostnader:**
- 100 kopper x 10 kr x 30 dager = 30 000 kr

**Dekningsbidrag:**
- 135 000 - 30 000 = 105 000 kr

**Faste kostnader:**
- 40 000 kr

**Resultat:**
- 105 000 - 40 000 = 65 000 kr (overskudd)

**Dekningsbidrag per kopp:**
- 45 - 10 = 35 kr

**Nullpunktomsetning:**
- 40 000 / 35 = 1 143 kopper per maned
- Ca. 38 kopper per dag for a ga i null

Kafeen er lønnsom fordi den selger mer enn nullpunktet.`,
    },
    {
      id: 'salg-service-vg1-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-1-ex-1',
        number: '6.1.1',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom faste og variable kostnader?',
        options: [
          { id: 'a', text: 'Faste kostnader er alltid høyere enn variable', isCorrect: false },
          { id: 'b', text: 'Faste kostnader paløper uansett aktivitet, variable følger salget', isCorrect: true },
          { id: 'c', text: 'Variable kostnader kan ikke endres', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
        ],
        solution: 'Faste kostnader (som husleie) paløper uansett hvor mye du selger. Variable kostnader (som varekjøp) øker og synker med salgsvolmet.',
      },
    },
    {
      id: 'salg-service-vg1-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-1-ex-2',
        number: '6.1.2',
        type: 'classic',
        task: 'Hvorfor er kapasitetsutnyttelse spesielt viktig i servicenæringen?',
        hints: ['Tenk pa at tjenester ikke kan lagres'],
        solution: 'Fordi tjenester ikke kan lagres - et tomt hotellrom eller en tom restaurantstol i dag kan ikke selges i morgen. Samtidig er mange kostnader faste. Høy kapasitetsutnyttelse betyr at inntektene dekker de faste kostnadene bedre, og alt over dekningsbidraget blir overskudd.',
      },
    },
    {
      id: 'salg-service-vg1-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-1-ex-3',
        number: '6.1.3',
        type: 'classic',
        task: 'En butikk har følgende tall for en maned: Salgsinntekter 200 000 kr, varekostnader 80 000 kr, lønn 60 000 kr, husleie 30 000 kr, andre kostnader 15 000 kr. Beregn resultatet.',
        solution: 'Inntekter: 200 000 kr. Kostnader: 80 000 + 60 000 + 30 000 + 15 000 = 185 000 kr. Resultat: 200 000 - 185 000 = 15 000 kr (overskudd).',
      },
    },
    {
      id: 'salg-service-vg1-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-1-ex-4',
        number: '6.1.4',
        type: 'classic',
        task: 'Klassifiser følgende kostnader som faste eller variable for et hotell: a) Husleie, b) Varekost frokost, c) Renhold per rom, d) Lederlønninger, e) Strøm til oppvarming, f) Provisjon til bookingnettsteder.',
        solution: 'a) Husleie: Fast. b) Varekost frokost: Variabel (avhenger av antall gjester). c) Renhold per rom: Variabel (avhenger av solgte rom). d) Lederlønninger: Fast. e) Strøm til oppvarming: Delvis fast/variabel (grunnkostnad + variabel del). f) Provisjon til bookingnettsteder: Variabel (prosent av salg).',
      },
    },
    {
      id: 'salg-service-vg1-6-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-1-ex-5',
        number: '6.1.5',
        type: 'classic',
        task: 'En restaurant selger en rett til 250 kr. Varekostnaden er 75 kr. Faste kostnader er 100 000 kr per maned. Hvor mange retter ma de selge for a ga i null?',
        solution: 'Dekningsbidrag per rett: 250 - 75 = 175 kr. Nullpunktomsetning: 100 000 / 175 = 571,4. Restauranten ma selge minst 572 retter per maned for a dekke de faste kostnadene (ga i null). Alt over dette gir overskudd.',
      },
    },
    {
      id: 'salg-service-vg1-6-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Resultat** = Inntekter - Kostnader
- **Faste kostnader** paløper uansett aktivitetsniva
- **Variable kostnader** følger salget
- **Dekningsbidrag** skal dekke faste kostnader og gi overskudd
- **Kapasitetsutnyttelse** er nøkkelen i servicenæringen

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Faste kostnader | Kostnader som ikke varierer med salget |
| Variable kostnader | Kostnader som følger salget |
| Dekningsbidrag | Salgsinntekt minus variable kostnader |
| Nullpunkt | Salgsniva der inntekter = kostnader |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.2: Budsjett og regnskap
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_6_2: TextbookChapter = {
  id: 'salg-service-vg1-6-2',
  courseId: 'salg-service-vg1',
  chapterNumber: '6.2',
  title: 'Budsjett og regnskap',
  description: 'Hva budsjett og regnskap er og hvordan de brukes til a styre og kontrollere økonomien i en virksomhet. Du lærer om ulike budsjettyper og grunnleggende regnskapsprinsipper.',
  estimatedMinutes: 45,
  competenceGoals: ['gjøre rede for grunnleggende økonomiske prinsipper i en virksomhet'],
  content: [
    {
      id: 'salg-service-vg1-6-2-intro',
      type: 'text',
      content: `## Planlegge og kontrollere

Et budsjett er en plan for fremtiden, mens regnskapet viser hva som faktisk skjedde. Sammen gir de verktøy for a styre økonomien og ta gode beslutninger. Alle virksomheter, fra de minste til de største, trenger budsjetter og regnskap.

I dette kapittelet skal du lære:
- Hva et budsjett er og hvorfor det er viktig
- Ulike typer budsjetter
- Grunnleggende om regnskap
- Hvordan sammenligne budsjett og regnskap`,
    },
    {
      id: 'salg-service-vg1-6-2-def-1',
      type: 'definition',
      title: 'Budsjett',
      content: `Et **budsjett** er en tallfestet plan for en fremtidig periode. Det viser forventede inntekter og kostnader og det planlagte resultatet. Budsjettet brukes til a sette mal, fordele ressurser og kontrollere at man er pa rett vei.`,
    },
    {
      id: 'salg-service-vg1-6-2-text-1',
      type: 'text',
      content: `### Hvorfor budsjettere?

**Planlegging:**
- Tenke gjennom fremtiden
- Forutse utfordringer
- Sette realistiske mal
- Prioritere ressurser

**Koordinering:**
- Alle vet hva som forventes
- Samordne avdelinger
- Unnga overraskelser
- Felles retning

**Kontroll:**
- Male faktisk mot plan
- Oppdage avvik tidlig
- Korrigere kursen
- Lære til neste periode

**Motivasjon:**
- Tydelige mal a strekke seg mot
- Mulighet til a male suksess
- Ansvar og myndighet`,
    },
    {
      id: 'salg-service-vg1-6-2-text-2',
      type: 'text',
      content: `### Typer budsjetter

**Resultatbudsjett:**
- Viser forventede inntekter og kostnader
- Gir forventet overskudd/underskudd
- Det vanligste budsjettet

**Likviditetsbudsjett:**
- Viser inn- og utbetalinger
- Sikrer at man har penger nar regninger skal betales
- Viktig for a unnga likviditetsproblemer

**Investeringsbudsjett:**
- Planlagt kjøp av utstyr, maskiner, etc.
- Store engangskjøp
- Langsiktig planlegging

**Salgsbudsjett:**
- Forventet salg fordelt pa produkter/perioder
- Grunnlag for andre budsjetter
- Utgangspunkt for planlegging

**Periodelengde:**
- Arsbudsjett (vanligst)
- Maneds- eller kvartalsbudsjett
- Rullerenede budsjett (oppdateres løpende)`,
    },
    {
      id: 'salg-service-vg1-6-2-def-2',
      type: 'definition',
      title: 'Regnskap',
      content: `**Regnskap** er den systematiske registreringen av alle økonomiske hendelser i en virksomhet. Regnskapet gir oversikt over eiendeler, gjeld, inntekter og kostnader. Alle virksomheter er lovpålagt a føre regnskap.`,
    },
    {
      id: 'salg-service-vg1-6-2-text-3',
      type: 'text',
      content: `### Grunnleggende om regnskap

**Resultatregnskapet:**
- Viser inntekter og kostnader i en periode
- Arets resultat (overskudd/underskudd)
- Tilsvarer resultatbudsjettet

**Balansen:**
- Viser eiendeler og finansiering
- Hva eier bedriften? (eiendeler)
- Hvordan er det finansiert? (gjeld + egenkapital)
- Et øyeblikksbilde

**Viktige begreper:**
| Begrep | Forklaring |
|--------|------------|
| Omsetning | Salgsinntekter |
| Bruttofortjeneste | Omsetning minus varekost |
| Driftsresultat | Overskudd fra selve driften |
| Årsresultat | Endelig resultat etter alt |

**Hvem fører regnskapet?**
- Regnskapsfører eller regnskapsbyrå
- Interne økonomiavdelinger
- Regnskapsprogrammer (Fiken, Tripletex, etc.)`,
    },
    {
      id: 'salg-service-vg1-6-2-text-4',
      type: 'text',
      content: `### Budsjettoppfølging

**Avviksanalyse:**
Sammenligning av budsjett og regnskap:
- Positivt avvik: Bedre enn budsjett
- Negativt avvik: Dårligere enn budsjett

**Eksempel:**
| Post | Budsjett | Regnskap | Avvik |
|------|----------|----------|-------|
| Inntekter | 500 000 | 480 000 | -20 000 |
| Varekost | 200 000 | 190 000 | +10 000 |
| Lønn | 150 000 | 160 000 | -10 000 |
| Resultat | 150 000 | 130 000 | -20 000 |

**Handlinger ved avvik:**
- Analysere årsakene
- Vurdere tiltak
- Justere budsjett om nødvendig
- Lære til neste periode`,
    },
    {
      id: 'salg-service-vg1-6-2-tip-1',
      type: 'tip',
      title: 'Budsjettering i servicenæringen',
      content: `I service og reiseliv er det viktig å ta hensyn til sesongvariasjoner i budsjettet. Et hotell vil ha høyere inntekter i juli enn i november. Budsjettet bør fordeles pa maneder basert pa forventet sesongmønster, ikke fordeles jevnt over året.`,
    },
    {
      id: 'salg-service-vg1-6-2-example-1',
      type: 'example',
      title: 'Eksempel: Enkelt resultatbudsjett for en butikk',
      problem: 'Lag et arsbudsjett for en liten klesbutikk.',
      solution: `**Resultatbudsjett 2024:**

**Inntekter:**
| Post | Beløp |
|------|-------|
| Salg klær | 1 500 000 |
| Salg tilbehør | 200 000 |
| **Sum inntekter** | **1 700 000** |

**Kostnader:**
| Post | Beløp |
|------|-------|
| Varekjøp | 800 000 |
| Lønn | 450 000 |
| Husleie | 180 000 |
| Strøm/varme | 30 000 |
| Markedsføring | 50 000 |
| Forsikring | 15 000 |
| Andre kostnader | 25 000 |
| **Sum kostnader** | **1 550 000** |

**Resultat:** 1 700 000 - 1 550 000 = **150 000 kr**

Budsjettet viser et forventet overskudd pa 150 000 kr, som tilsvarer ca. 9% av omsetningen.`,
    },
    {
      id: 'salg-service-vg1-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-2-ex-1',
        number: '6.2.1',
        type: 'multiple-choice',
        task: 'Hva er hovedformalet med et budsjett?',
        options: [
          { id: 'a', text: 'A vise hva som har skjedd', isCorrect: false },
          { id: 'b', text: 'A planlegge og sette mal for fremtiden', isCorrect: true },
          { id: 'c', text: 'A betale skatt', isCorrect: false },
          { id: 'd', text: 'A søke lan', isCorrect: false },
        ],
        solution: 'Et budsjett er en plan for fremtiden som setter mal og hjelper med a styre økonomien. Regnskapet viser hva som faktisk har skjedd.',
      },
    },
    {
      id: 'salg-service-vg1-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-2-ex-2',
        number: '6.2.2',
        type: 'classic',
        task: 'Hva er forskjellen mellom et resultatbudsjett og et likviditetsbudsjett?',
        hints: ['Tenk pa hva de viser og nar'],
        solution: 'Resultatbudsjettet viser forventede inntekter og kostnader - altsadet økonomiske resultatet. Likviditetsbudsjettet viser inn- og utbetalinger - altsa nar pengene faktisk kommer inn og gar ut. Du kan ha overskudd i resultatbudsjettet, men likevel fa likviditetsproblemer hvis kundene betaler sent.',
      },
    },
    {
      id: 'salg-service-vg1-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-2-ex-3',
        number: '6.2.3',
        type: 'classic',
        task: 'En kafé har budsjettert med 80 000 kr i inntekter og 60 000 kr i kostnader for januar. Regnskapet viser 75 000 kr i inntekter og 58 000 kr i kostnader. Beregn avvikene og kommenter resultatet.',
        solution: 'Budsjett resultat: 80 000 - 60 000 = 20 000 kr. Regnskap resultat: 75 000 - 58 000 = 17 000 kr. Inntektsavvik: 75 000 - 80 000 = -5 000 kr (negativt, lavere enn budsjett). Kostnadsavvik: 58 000 - 60 000 = -2 000 kr (positivt, lavere kostnader). Resultatavvik: 17 000 - 20 000 = -3 000 kr. Konklusjon: Lavere inntekter, men ogsa lavere kostnader. Nettoresultat er 3 000 kr under budsjett.',
      },
    },
    {
      id: 'salg-service-vg1-6-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-2-ex-4',
        number: '6.2.4',
        type: 'classic',
        task: 'Hvorfor er det viktig a følge opp budsjettet gjennom aret?',
        solution: 'Ved a sammenligne budsjett og regnskap løpende kan man: 1) Oppdage avvik tidlig og reagere. 2) Justere strategien om nødvendig. 3) Lære hva som fungerer og ikke. 4) Unnga overraskelser ved arsoppgjøret. 5) Holde organisasjonen fokusert pa malene. 6) Ta bedre beslutninger basert pa oppdatert informasjon.',
      },
    },
    {
      id: 'salg-service-vg1-6-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-2-ex-5',
        number: '6.2.5',
        type: 'classic',
        task: 'Lag et forenklet mandsbudsjett for en liten restaurant med følgende forutsetninger: 600 gjester, gjennomsnittlig nota 350 kr, varekostnad 35% av omsetning, lønn 120 000 kr, husleie 25 000 kr, andre kostnader 15 000 kr.',
        solution: 'Omsetning: 600 x 350 = 210 000 kr. Varekostnad: 210 000 x 35% = 73 500 kr. Lønn: 120 000 kr. Husleie: 25 000 kr. Andre kostnader: 15 000 kr. Sum kostnader: 73 500 + 120 000 + 25 000 + 15 000 = 233 500 kr. Resultat: 210 000 - 233 500 = -23 500 kr (underskudd). Kommentar: Restauranten gar med underskudd - ma enten øke antall gjester/nota eller redusere kostnader.',
      },
    },
    {
      id: 'salg-service-vg1-6-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Budsjett** er en tallfestet plan for fremtiden
- **Regnskap** viser hva som faktisk skjedde
- **Avviksanalyse** sammenligner budsjett og regnskap
- **Oppfølging** er nødvendig for god økonomistyring

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Resultatbudsjett | Plan for inntekter og kostnader |
| Likviditetsbudsjett | Plan for inn- og utbetalinger |
| Avvik | Forskjell mellom plan og virkelighet |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.3: Prissetting og kalkulasjon
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_6_3: TextbookChapter = {
  id: 'salg-service-vg1-6-3',
  courseId: 'salg-service-vg1',
  chapterNumber: '6.3',
  title: 'Prissetting og kalkulasjon',
  description: 'Hvordan priser settes i salg, service og reiseliv. Du lærer om ulike prissettingsmetoder, kalkulasjon og faktorer som pagerker prisene.',
  estimatedMinutes: 45,
  competenceGoals: ['gjøre rede for grunnleggende økonomiske prinsipper i en virksomhet'],
  content: [
    {
      id: 'salg-service-vg1-6-3-intro',
      type: 'text',
      content: `## A finne riktig pris

Prisen er et av de viktigste konkurransemidlene og har direkte påvirkning pa lønnsomheten. For høy pris kan skremme bort kunder, for lav pris gir dårlig lønnsomhet. A finne riktig pris krever analyse av kostnader, marked og konkurrenter.

I dette kapittelet skal du lære:
- Grunnleggende om prissetting
- Kostplussprising og kalkulasjon
- Markedsbasert prising
- Dynamisk prising i servicenæringen`,
    },
    {
      id: 'salg-service-vg1-6-3-def-1',
      type: 'definition',
      title: 'Prissetting',
      content: `**Prissetting** er prosessen med a bestemme prisen pa et produkt eller en tjeneste. Prisen ma dekke kostnader og gi fortjeneste, men ogsa være akseptabel for kundene og konkurransedyktig i markedet. Det finnes flere metoder for prissetting.`,
    },
    {
      id: 'salg-service-vg1-6-3-text-1',
      type: 'text',
      content: `### Prissettingsmetoder

**1. Kostnadsbasert prising (kostpluss)**
- Beregn alle kostnader
- Legg pa ønsket fortjenestemargin
- Enkel og sikrer dekning
- Tar ikke hensyn til hva markedet vil betale

**2. Markedsbasert prising**
- Se hva konkurrenter tar
- Vurder hva kundene er villige til å betale
- Tilpass til posisjonering (premium vs. lavpris)
- Krever god markedskunnskap

**3. Verdibasert prising**
- Pris etter verdien for kunden
- Ikke bare kostnader
- Kan gi høyere marginer
- Krever god forståelse av kundens behov

**4. Dynamisk prising**
- Prisen endres etter etterspørsel
- Brukes mye i reiseliv (fly, hotell)
- Maksimerer inntekter
- Kan irritere kunder hvis upaforsiktigt`,
    },
    {
      id: 'salg-service-vg1-6-3-def-2',
      type: 'definition',
      title: 'Kalkulasjon',
      content: `**Kalkulasjon** er beregningen av hva et produkt eller en tjeneste koster a produsere/levere. Kalkulasjonen er grunnlaget for prissetting og inkluderer alle kostnader som kan henføres til produktet - bade direkte og indirekte.`,
    },
    {
      id: 'salg-service-vg1-6-3-text-2',
      type: 'text',
      content: `### Kalkyle i varehandel

**Enkel varekalkyle:**
| Post | Beløp |
|------|-------|
| Innkjøpspris | 200 kr |
| + Frakt | 20 kr |
| = Varekostnad | 220 kr |
| + Avanse (100%) | 220 kr |
| = Utsalgspris ekskl. mva | 440 kr |
| + MVA (25%) | 110 kr |
| = Utsalgspris inkl. mva | 550 kr |

**Viktige begreper:**
- **Avanse**: Paslag pa varekost for a dekke kostnader og gi fortjeneste
- **Bruttofortjeneste**: Utsalgspris minus varekostnad
- **Fortjenestemargin**: Bruttofortjeneste i prosent av utsalgspris

**Eksempel:**
- Varekost: 220 kr
- Utsalgspris ekskl. mva: 440 kr
- Bruttofortjeneste: 440 - 220 = 220 kr
- Fortjenestemargin: 220/440 = 50%`,
    },
    {
      id: 'salg-service-vg1-6-3-text-3',
      type: 'text',
      content: `### Prissetting i servicenæringen

**Hotell (yield management):**
- Prisen varierer med belegg og etterspørsel
- Høyere pris i høysesong og helger
- Lavere pris for a fylle i lavsesong
- Booking tidlig vs. sent påvirker pris

**Restaurant:**
- Varekostnad typisk 25-35% av utsalgspris
- Ma ogsa dekke lønn, lokale og gi overskudd
- Vurdere konkurrenters priser
- Premium-posisjonering vs. volum

**Opplevelser:**
- Pris etter opplevd verdi
- Sesongvariasjoner
- Gruppepris vs. individuell
- Pakkepriser for flere tjenester`,
    },
    {
      id: 'salg-service-vg1-6-3-tip-1',
      type: 'tip',
      title: 'Psykologisk prising',
      content: `Priser som slutter pa 9 (199 kr i stedet for 200 kr) oppfattes ofte som lavere enn de er. Runde priser (500 kr) signaliserer kvalitet og enkelhet. Pakkepriser (hotell + frokost) gjør det vanskeligere a sammenligne og kan gi høyere totalpris.`,
    },
    {
      id: 'salg-service-vg1-6-3-example-1',
      type: 'example',
      title: 'Eksempel: Kalkulasjon av en rett pa restaurant',
      problem: 'Regn ut prisen pa en pastarett basert pa følgende: Ravarer 45 kr, ønsket varekostprosent 30%.',
      solution: `**Beregning:**

Ønsket varekostprosent: 30%
Varekostnad (ravarer): 45 kr

Formel: Utsalgspris = Varekostnad / Varekostprosent
Utsalgspris ekskl. mva = 45 kr / 0,30 = 150 kr

MVA (15% pa mat): 150 x 0,15 = 22,50 kr
Utsalgspris inkl. mva = 150 + 22,50 = 172,50 kr

**Avrundet pris: 175 kr**

**Kontroll:**
- Varekostnad: 45 kr
- Utsalgspris ekskl. mva: ca. 152 kr (175/1,15)
- Varekostprosent: 45/152 = 29,6% (ca. 30%)

Resten (105 kr ekskl. mva) skal dekke lønn, lokale, og gi overskudd.`,
    },
    {
      id: 'salg-service-vg1-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-3-ex-1',
        number: '6.3.1',
        type: 'multiple-choice',
        task: 'Hva er dynamisk prising?',
        options: [
          { id: 'a', text: 'Prisen er alltid den samme', isCorrect: false },
          { id: 'b', text: 'Prisen endres basert pa etterspørsel og tidspunkt', isCorrect: true },
          { id: 'c', text: 'Prisen settes av staten', isCorrect: false },
          { id: 'd', text: 'Prisen er hemmelig', isCorrect: false },
        ],
        solution: 'Dynamisk prising betyr at prisen endres basert pa faktorer som etterspørsel, tidspunkt og kapasitet. Det brukes mye i fly- og hotellbransjen.',
      },
    },
    {
      id: 'salg-service-vg1-6-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-3-ex-2',
        number: '6.3.2',
        type: 'classic',
        task: 'Hvorfor er dynamisk prising vanlig i hotellbransjen?',
        hints: ['Tenk pa at rom ikke kan lagres'],
        solution: 'Hotellrom kan ikke lagres - et usolgt rom i natt er tapt inntekt for alltid. Dynamisk prising hjelper hotellet a maksimere inntektene ved å ta høy pris nar etterspørselen er stor (helger, sesonger) og lavere pris for a fylle opp nar etterspørselen er lav. Ma det til å velge mellom et tomt rom og et billig solgt rom, er det bedre å selge billig.',
      },
    },
    {
      id: 'salg-service-vg1-6-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-3-ex-3',
        number: '6.3.3',
        type: 'classic',
        task: 'En butikk kjøper inn et produkt for 300 kr. Frakt er 30 kr. De ønsker 80% avanse. Beregn utsalgspris ekskl. og inkl. mva (25%).',
        solution: 'Varekostnad: 300 + 30 = 330 kr. Avanse 80%: 330 x 0,80 = 264 kr. Utsalgspris ekskl. mva: 330 + 264 = 594 kr. MVA 25%: 594 x 0,25 = 148,50 kr. Utsalgspris inkl. mva: 594 + 148,50 = 742,50 kr (kan avrundes til 749 kr).',
      },
    },
    {
      id: 'salg-service-vg1-6-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-3-ex-4',
        number: '6.3.4',
        type: 'classic',
        task: 'En restaurant har ravarekostnad pa 60 kr for en rett. De ønsker maksimalt 28% varekostnad. Hva bør utsalgsprisen være ekskl. mva?',
        solution: 'Formel: Utsalgspris = Varekostnad / Varekostprosent. Utsalgspris ekskl. mva = 60 / 0,28 = 214,29 kr. Avrundet: 215 kr ekskl. mva. Med 15% mva pa mat blir dette: 215 x 1,15 = 247,25 kr, kan avrundes til 249 kr inkl. mva.',
      },
    },
    {
      id: 'salg-service-vg1-6-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-3-ex-5',
        number: '6.3.5',
        type: 'classic',
        task: 'Forklar tre fordeler og tre ulemper med dynamisk prising.',
        solution: 'Fordeler: 1) Maksimerer inntektene ved å tilpasse pris til etterspørsel. 2) Fyller kapasitet i lavsesong med lavere priser. 3) Belønner kunder som booker tidlig eller er fleksible. Ulemper: 1) Kan irritere kunder som oppdager at andre har betalt mindre. 2) Krever systemer og kompetanse for a fungere. 3) Kan skade omdømmet hvis det oppleves som urettferdig.',
      },
    },
    {
      id: 'salg-service-vg1-6-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Kostnadsbasert prising** legger paslag pa kostnadene
- **Markedsbasert prising** ser pa konkurrenter og kunder
- **Dynamisk prising** endrer pris etter etterspørsel
- **Kalkulasjon** beregner hva produktet koster

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Avanse | Paslag pa varekost |
| Bruttofortjeneste | Salgspris minus varekost |
| Dynamisk prising | Pris som varierer med etterspørsel |
| Varekostprosent | Varekost i prosent av utsalgspris |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.4: Verdikjeden og bærekraftig utvikling
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_6_4: TextbookChapter = {
  id: 'salg-service-vg1-6-4',
  courseId: 'salg-service-vg1',
  chapterNumber: '6.4',
  title: 'Verdikjeden og bærekraftig utvikling',
  description: 'Hvordan verdikjeder fungerer i servicenæringen og hvordan bærekraft kan integreres i alle ledd. Du lærer om ansvarlige innkjøp, miljøhensyn og sosial bærekraft.',
  estimatedMinutes: 40,
  competenceGoals: ['utforske og vurdere verdikjeder i bransjen i et bærekraftsperspektiv'],
  content: [
    {
      id: 'salg-service-vg1-6-4-intro',
      type: 'text',
      content: `## Fra ravare til kunde

Alt vi kjøper har en historie - fra ravarer til ferdig produkt hos kunden. Verdikjeden viser alle stegene og aktørene involvert. I et bærekraftsperspektiv er det viktig a forstå og påvirke hele verdikjeden, ikke bare var egen virksomhet.

I dette kapittelet skal du lære:
- Hva en verdikjede er
- Verdikjeder i servicenæringen
- Bærekraft i verdikjeden
- Hvordan ta ansvarlige valg`,
    },
    {
      id: 'salg-service-vg1-6-4-def-1',
      type: 'definition',
      title: 'Verdikjede',
      content: `En **verdikjede** beskriver alle aktivitetene fra ravarer til ferdig produkt i hendene pa kunden. Hvert ledd i kjeden legger til verdi. Verdikjeden inkluderer leverandører, produksjon, distribusjon, salg og ettermarked.`,
    },
    {
      id: 'salg-service-vg1-6-4-text-1',
      type: 'text',
      content: `### Verdikjeden i servicenæringen

**Eksempel: Restaurant**
1. **Ravarer:** Gard/hav → produsent
2. **Grossist/distribusjon:** Lagring, transport
3. **Restaurantens kjøkken:** Tilberedning
4. **Servering:** Opplevelse for gjesten
5. **Ettermarked:** Tilbakemelding, lojalitet

**Eksempel: Hotell**
1. **Leverandører:** Sengetøy, mat, renhold
2. **Bygning/lokale:** Eiendom, vedlikehold
3. **Drift:** Resepsjon, housekeeping, F&B
4. **Salg/booking:** Markedsføring, OTAs
5. **Gjesteopplevelse:** Service, opphold
6. **Ettermarked:** Anmeldelser, gjenkjøp

**Verdiskaping i hvert ledd:**
Hvert ledd tilfører verdi som kunden til slutt betaler for. Effektive verdikjeder minimerer kostnader og maksimerer verdi.`,
    },
    {
      id: 'salg-service-vg1-6-4-text-2',
      type: 'text',
      content: `### Bærekraft i verdikjeden

**Miljømessig bærekraft:**
- Kortreiste ravarer (mindre transport)
- Miljøvennlig emballasje
- Energieffektiv produksjon
- Minimal avfall i alle ledd

**Sosial bærekraft:**
- Rettferdige arbeidsforhold hos leverandører
- Ingen barnearbeid eller utnyttelse
- Levelig lønn i hele kjeden
- Respekt for lokalsamfunn

**Økonomisk bærekraft:**
- Langsiktige leverandørforhold
- Rettferdig fordeling av verdiskaping
- Stabile priser og avtaler
- Investering i utvikling`,
    },
    {
      id: 'salg-service-vg1-6-4-def-2',
      type: 'definition',
      title: 'Ansvarlige innkjøp',
      content: `**Ansvarlige innkjøp** betyr å velge leverandører og produkter basert pa miljømessige og sosiale kriterier i tillegg til pris og kvalitet. Det handler om å ta ansvar for hele verdikjeden, ikke bare egen virksomhet.`,
    },
    {
      id: 'salg-service-vg1-6-4-text-3',
      type: 'text',
      content: `### Sertifiseringer og merkeordninger

**Matrelaterte:**
- Debio (økologisk)
- Fairtrade (rettferdig handel)
- MSC (bærekraftig sjømat)
- Nyt Norge (norsk mat)

**Miljømerker:**
- Svanemerket
- EU Ecolabel
- FSC (bærekraftig skog)

**Hva sertifiseringer gir:**
- Dokumentasjon av bærekraft
- Lettere valg for innkjøper
- Troverdighet overfor kunder
- Ofte bedre sporbarhet

**Utfordringer:**
- Kan være dyrere
- Mange ulike merker
- Ikke alle produkter er sertifisert
- Ma vurdere hva som er viktigst`,
    },
    {
      id: 'salg-service-vg1-6-4-tip-1',
      type: 'tip',
      title: 'Transparens i verdikjeden',
      content: `Stadig flere kunder ønsker a vite hvor produktene kommer fra. Restauranter som forteller om gardene de kjøper fra, hoteller som viser sine miljøtiltak, og butikker som kan spore produktenes opprinnelse - dette bygger tillit og kan rettferdiggjøre høyere priser.`,
    },
    {
      id: 'salg-service-vg1-6-4-example-1',
      type: 'example',
      title: 'Eksempel: Bærekraftig verdikjede for en kafé',
      problem: 'Hvordan kan en kafé gjøre verdikjeden mer bærekraftig?',
      solution: `**Kaffe:**
- Velge Fairtrade-sertifisert kaffe (sosial bærekraft)
- Kjøpe fra brenneri som jobber direkte med bønder
- Økologisk kaffe der mulig (miljø)

**Melk og bakervarer:**
- Lokale leverandører (kortreist)
- Økologisk melk
- Emballasje som kan resirkuleres

**Drift:**
- Energieffektive kaffemaskiner
- LED-belysning
- Kildesortering av avfall
- Gjenbrukbare kopper til her-gjester

**Emballasje for takeaway:**
- Nedbrytbare kopper og lokk
- Papirsugerør
- Belønne kunder som har med egen kopp

**Resultat:**
- Høyere troverdighet hos miljøbevisste kunder
- Kan ta høyere pris for "bærekraftig kaffe"
- Bidrar til en bedre verdikjede
- Lavere miljøavtrykk totalt`,
    },
    {
      id: 'salg-service-vg1-6-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-4-ex-1',
        number: '6.4.1',
        type: 'multiple-choice',
        task: 'Hva betyr "ansvarlige innkjøp"?',
        options: [
          { id: 'a', text: 'A kjøpe det billigste alltid', isCorrect: false },
          { id: 'b', text: 'A velge leverandører basert pa miljø og sosiale kriterier i tillegg til pris', isCorrect: true },
          { id: 'c', text: 'A bare kjøpe norske produkter', isCorrect: false },
          { id: 'd', text: 'A la sjefen bestemme alt', isCorrect: false },
        ],
        solution: 'Ansvarlige innkjøp handler om å ta hensyn til bærekraft (miljø og sosiale forhold) i tillegg til pris og kvalitet nar man velger leverandører og produkter.',
      },
    },
    {
      id: 'salg-service-vg1-6-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-4-ex-2',
        number: '6.4.2',
        type: 'classic',
        task: 'Hva er Fairtrade, og hvorfor velger noen virksomheter Fairtrade-produkter?',
        hints: ['Tenk pa forhold for produsenter'],
        solution: 'Fairtrade er en sertifisering som garanterer at produsenter (ofte i utviklingsland) far en rettferdig pris og gode arbeidsforhold. Virksomheter velger Fairtrade for a støtte sosial bærekraft, møte kundenes ønsker om etisk handel, og vise at de tar samfunnsansvar.',
      },
    },
    {
      id: 'salg-service-vg1-6-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-4-ex-3',
        number: '6.4.3',
        type: 'classic',
        task: 'Beskriv verdikjeden for en fiskemiddag fra hav til gjest pa restaurant.',
        solution: '1) Hav: Fisken fanges (eller oppdrett). 2) Landing/slakting: Fisken bringes i land og behandles. 3) Distribusjon: Transport til grossist/marked. 4) Grossist: Lagring, videre distribusjon til restauranter. 5) Restaurant kjøkken: Mottak, lagring, tilberedning. 6) Servering: Fiskeretten serveres til gjesten. 7) Ettermarked: Gjestens opplevelse, tilbakemelding, eventuell gjenkjøp.',
      },
    },
    {
      id: 'salg-service-vg1-6-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-4-ex-4',
        number: '6.4.4',
        type: 'classic',
        task: 'Gi tre eksempler pa hvordan et hotell kan gjøre sine innkjøp mer bærekraftige.',
        solution: '1) Mat: Velge lokale og sesongbaserte ravarer til frokost, bruke økologisk der mulig, ha MSC-sertifisert sjømat. 2) Rengjøringsprodukter: Velge miljømerkede produkter (Svanemerket), unnga sterke kjemikalier. 3) Tekstiler: Kjøpe sengetøy og handklær fra leverandører med miljøsertifisering, velge holdbare materialer for a redusere utskiftning.',
      },
    },
    {
      id: 'salg-service-vg1-6-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-4-ex-5',
        number: '6.4.5',
        type: 'classic',
        task: 'Hvorfor er det viktig a tenke pa hele verdikjeden, ikke bare egen virksomhet, nar man jobber med bærekraft?',
        solution: 'Fordi det totale miljøavtrykket og de sosiale konsekvensene oppstår i hele kjeden. Et hotell kan være aldri sa miljøvennlig i egen drift, men hvis maten kommer fra leverandører med dårlige arbeidsforhold eller høye utslipp, er det totale bidraget ikke bærekraftig. Kunder og samfunnet ser pa helheten. Dessuten kan man ofte gjøre størst forskjell ved a påvirke leverandører som har mange kunder.',
      },
    },
    {
      id: 'salg-service-vg1-6-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Verdikjeden** viser alle ledd fra ravare til kunde
- **Bærekraft** ma vurderes i hele kjeden
- **Ansvarlige innkjøp** tar hensyn til miljø og sosiale forhold
- **Sertifiseringer** dokumenterer bærekraft

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Verdikjede | Alle ledd fra ravare til kunde |
| Ansvarlige innkjøp | Hensyn til bærekraft ved innkjøp |
| Fairtrade | Sertifisering for rettferdig handel |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.5: Lover og regler for drift av virksomhet
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_6_5: TextbookChapter = {
  id: 'salg-service-vg1-6-5',
  courseId: 'salg-service-vg1',
  chapterNumber: '6.5',
  title: 'Lover og regler for drift av virksomhet',
  description: 'En oversikt over viktige lover og regler som gjelder for virksomheter i salg, service og reiseliv. Du lærer om HMS, arbeidsmiljø, bevillinger og forbrukervern.',
  estimatedMinutes: 45,
  competenceGoals: ['gjøre rede for relevant regelverk og drøfte hvordan det påvirker drift av virksomheter'],
  content: [
    {
      id: 'salg-service-vg1-6-5-intro',
      type: 'text',
      content: `## Rammene for drift

Alle virksomheter ma forholde seg til et sett med lover og regler. Disse beskytter ansatte, kunder, miljø og samfunn. A kjenne regelverket er nødvendig for a drive lovlig og unnga sanksjoner.

I dette kapittelet skal du lære:
- Viktige lover for servicenæringen
- HMS og arbeidsmiljø
- Bevillinger og tillatelser
- Forbrukervern og kundenes rettigheter`,
    },
    {
      id: 'salg-service-vg1-6-5-def-1',
      type: 'definition',
      title: 'HMS',
      content: `**HMS** star for Helse, Miljø og Sikkerhet. HMS-arbeid handler om a forebygge skader og ulykker, sikre et godt arbeidsmiljø og ta vare pa det ytre miljøet. Alle virksomheter er lovpålagt a ha systematisk HMS-arbeid.`,
    },
    {
      id: 'salg-service-vg1-6-5-text-1',
      type: 'text',
      content: `### Arbeidsmiljøloven

**Hovedformål:**
- Sikre et godt og trygt arbeidsmiljø
- Beskytte arbeidstakere mot skade
- Sikre rettferdige arbeidsvilkar

**Viktige omrader:**

**Arbeidstid:**
- Normalarbeidsdag: 9 timer
- Normalarbeidsuke: 40 timer
- Overtidsgrenser og kompensasjon
- Hviletid mellom vakter

**Ansettelse:**
- Skriftlig arbeidskontrakt
- Prøvetid og oppsigelse
- Midlertidig ansettelse (begrensninger)
- Diskrimineringsvern

**Arbeidsmiljø:**
- Fysisk tilrettelegging
- Psykososialt miljø
- Verneombud og AMU
- Varsling av kritikkverdige forhold`,
    },
    {
      id: 'salg-service-vg1-6-5-text-2',
      type: 'text',
      content: `### Bevillinger og tillatelser

**Serveringsbevilling:**
- Krav for a servere mat og drikke
- Søkes hos kommunen
- Krav til ansvarlig person
- Kan trekkes tilbake ved brudd

**Skjenkebevilling:**
- Tillatelse til å selge/servere alkohol
- Strenge krav og kontroller
- Skjenketider settes av kommunen
- Aldersgrenser og ID-kontroll

**Andre tillatelser:**
| Type | Gjelder |
|------|---------|
| Mattilsynet | Godkjenning av mathåndtering |
| Brannvern | Godkjenning av lokaler |
| Arbeidstilsynet | Godkjenning av arbeidsforhold |
| Politiet | Arrangementer, nattklubber |`,
    },
    {
      id: 'salg-service-vg1-6-5-text-3',
      type: 'text',
      content: `### Forbrukervern

**Forbrukerkjøpsloven:**
- Gjelder kjøp mellom forbruker og næringsdrivende
- 2-5 ars reklamasjonsrett
- Krav om mangelfrie varer
- Retting, omlevering eller pengene tilbake

**Angrerettloven:**
- 14 dagers angrefrist ved fjernsalg
- Gjelder netthandel, telefonsalg, dørsalg
- Informasjonsplikt for selger
- Unntak for visse varer/tjenester

**Markedsføringsloven:**
- Forbud mot villedende markedsføring
- Krav om korrekt prisinformasjon
- Regler for kampanjer og konkurranser
- Personvern i markedsføring`,
    },
    {
      id: 'salg-service-vg1-6-5-warning-1',
      type: 'warning',
      title: 'Konsekvenser av brudd',
      content: `Brudd pa lover og regler kan fa alvorlige konsekvenser: Bøter og gebyrer, tap av bevillinger, stenging av virksomhet, erstatningskrav, og i verste fall straffeansvar. Det lønner seg alltid a sette seg inn i regelverket og følge det.`,
    },
    {
      id: 'salg-service-vg1-6-5-text-4',
      type: 'text',
      content: `### GDPR og personvern

**Hva er GDPR?**
- EUs personvernforordning (General Data Protection Regulation)
- Gjelder i Norge gjennom personopplysningsloven
- Beskytter personopplysninger

**Viktig for servicenæringen:**
- Behandling av kundedata (CRM)
- Booking og reservasjoner
- Kameraovervåking
- Markedsføring og nyhetsbrev

**Krav:**
- Lovlig grunnlag for behandling
- Samtykke eller annet grunnlag
- Rett til innsyn og sletting
- Sikker lagring av data
- Meldeplikt ved brudd`,
    },
    {
      id: 'salg-service-vg1-6-5-example-1',
      type: 'example',
      title: 'Eksempel: HMS pa en restaurant',
      problem: 'Hvilke HMS-tiltak ma en restaurant ha pa plass?',
      solution: `**Systematisk HMS-arbeid:**
- HMS-handbok
- Risikovurdering
- Handlingsplaner
- Årlig gjennomgang

**Fysisk arbeidsmiljø:**
- Ergonomiske arbeidsstasjoner
- Ventilasjon og temperatur
- Sklisikre gulv
- Verneutstyr (hansker, sko)

**Mattrygghet:**
- HACCP-system
- Temperaturkontroll
- Hygieneopplæring
- Allergenmerking

**Brannvern:**
- Brannslokker og rømningsveier
- Brannøvelser
- Ansvarlig for brannvern
- Dokumenterte kontroller

**Opplæring:**
- Alle ansatte kjenner HMS-rutiner
- Dokumentert opplæring
- Førstehjelpskurs
- Brannvernopplæring`,
    },
    {
      id: 'salg-service-vg1-6-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-5-ex-1',
        number: '6.5.1',
        type: 'multiple-choice',
        task: 'Hva star HMS for?',
        options: [
          { id: 'a', text: 'Handel, Markedsføring, Salg', isCorrect: false },
          { id: 'b', text: 'Helse, Miljø, Sikkerhet', isCorrect: true },
          { id: 'c', text: 'Hotell, Mat, Service', isCorrect: false },
          { id: 'd', text: 'Høflighet, Motivasjon, Samarbeid', isCorrect: false },
        ],
        solution: 'HMS star for Helse, Miljø og Sikkerhet. Det handler om a sikre et trygt arbeidsmiljø og forebygge skader.',
      },
    },
    {
      id: 'salg-service-vg1-6-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-5-ex-2',
        number: '6.5.2',
        type: 'classic',
        task: 'Hva er forskjellen pa serveringsbevilling og skjenkebevilling?',
        hints: ['Tenk pa hva som serveres'],
        solution: 'Serveringsbevilling gir tillatelse til a drive serveringssted (servere mat og drikke). Skjenkebevilling er en tilleggsbevilling som gir tillatelse til å selge og servere alkoholholdige drikkevarer. Man trenger serveringsbevilling for a drive kafé/restaurant, og i tillegg skjenkebevilling hvis man skal servere alkohol.',
      },
    },
    {
      id: 'salg-service-vg1-6-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-5-ex-3',
        number: '6.5.3',
        type: 'classic',
        task: 'Nevn tre viktige omrader arbeidsmiljøloven regulerer.',
        solution: '1) Arbeidstid: Grenser for daglig og ukentlig arbeidstid, overtid, hviletid. 2) Ansettelsesforhold: Krav om arbeidskontrakt, regler for prøvetid og oppsigelse. 3) Arbeidsmiljø: Krav til fysisk og psykososialt miljø, verneombud, varsling.',
      },
    },
    {
      id: 'salg-service-vg1-6-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-5-ex-4',
        number: '6.5.4',
        type: 'classic',
        task: 'Hvordan påvirker GDPR/personvern servicenæringen?',
        solution: 'Servicenæringen behandler mye persondata (kunderegistre, bookinger, betalingsinformasjon). GDPR krever: 1) Lovlig grunnlag for a lagre data (samtykke eller annet). 2) Sikker lagring og begrenset tilgang. 3) Kundene har rett til innsyn og sletting. 4) Virksomheten ma melde fra ved databrudd. 5) Markedsføring krever samtykke.',
      },
    },
    {
      id: 'salg-service-vg1-6-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-5-ex-5',
        number: '6.5.5',
        type: 'classic',
        task: 'En butikk vil starte med netthandel. Hvilke lover og regler ma de spesielt være oppmerksomme pa?',
        solution: '1) Angrerettloven: 14 dagers angrefrist, informasjonsplikt. 2) Forbrukerkjøpsloven: Reklamasjonsrett, produktansvar. 3) Markedsføringsloven: Korrekt prisinformasjon, ikke villedende reklame. 4) GDPR: Behandling av kundedata, samtykke til markedsføring, sikker lagring. 5) E-handelsloven: Informasjonskrav, ordrebekreftelse.',
      },
    },
    {
      id: 'salg-service-vg1-6-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **HMS** handler om helse, miljø og sikkerhet pa arbeidsplassen
- **Arbeidsmiljøloven** beskytter arbeidstakere
- **Bevillinger** kreves for servering og alkohol
- **Forbrukervern** gir kundene rettigheter
- **GDPR** regulerer behandling av persondata

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| HMS | Helse, Miljø, Sikkerhet |
| Serveringsbevilling | Tillatelse til a drive serveringssted |
| Skjenkebevilling | Tillatelse til å selge alkohol |
| GDPR | Personvernforordningen |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.6: Organisering og roller i virksomheten
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_6_6: TextbookChapter = {
  id: 'salg-service-vg1-6-6',
  courseId: 'salg-service-vg1',
  chapterNumber: '6.6',
  title: 'Organisering og roller i virksomheten',
  description: 'Hvordan virksomheter i servicenæringen er organisert og hvilke roller og ansvarsomrader som finnes. Du lærer om organisasjonsstruktur, ledelse og samarbeid.',
  estimatedMinutes: 40,
  competenceGoals: ['beskrive administrative funksjoner og rutiner i en virksomhet og drøfte hvordan disse påvirker kvaliteten og servicenivået'],
  content: [
    {
      id: 'salg-service-vg1-6-6-intro',
      type: 'text',
      content: `## Hvem gjør hva?

For at en virksomhet skal fungere godt, ma det være tydelig hvem som har ansvar for hva. Organisasjonsstrukturen viser hvordan bedriften er bygget opp, og rollene definerer hva hver enkelt skal bidra med.

I dette kapittelet skal du lære:
- Hvordan virksomheter organiseres
- Ulike roller og ansvarsomrader
- Betydningen av god organisering
- Hvordan organisering påvirker service`,
    },
    {
      id: 'salg-service-vg1-6-6-def-1',
      type: 'definition',
      title: 'Organisasjonsstruktur',
      content: `**Organisasjonsstruktur** beskriver hvordan en virksomhet er bygget opp - hvilke avdelinger som finnes, hvem som rapporterer til hvem, og hvordan oppgaver er fordelt. Strukturen kan vises i et organisasjonskart.`,
    },
    {
      id: 'salg-service-vg1-6-6-text-1',
      type: 'text',
      content: `### Organisering av en virksomhet

**Typiske organisasjonsnivåer:**

**Toppledelse:**
- Daglig leder/direktør
- Strategiske beslutninger
- Overordnet ansvar
- Kontakt med eiere/styre

**Mellomledelse:**
- Avdelingsledere
- Daglig drift av avdelingen
- Personalansvar
- Rapporterer til toppledelse

**Medarbeidere:**
- Utfører det daglige arbeidet
- Kundekontakt
- Rapporterer til avdelingsleder

**Støttefunksjoner:**
- Økonomi/regnskap
- HR/personal
- IT
- Markedsføring`,
    },
    {
      id: 'salg-service-vg1-6-6-text-2',
      type: 'text',
      content: `### Roller i servicenæringen

**Hotell:**
| Rolle | Ansvar |
|-------|--------|
| Hotelldirektør | Lede hele hotellet, økonomi, strategi |
| Front Office Manager | Lede resepsjonen, gjestetilfredshet |
| Housekeeping Manager | Lede renholdsavdelingen |
| F&B Manager | Lede mat og drikke-avdelingen |
| Revenue Manager | Optimalisere priser og belegg |
| Resepsjonist | Innsjekking, service, informasjon |
| Stuepike | Romrengjøring |

**Restaurant:**
| Rolle | Ansvar |
|-------|--------|
| Daglig leder | Overordnet drift og økonomi |
| Kjøkkensjef | Lede kjøkkenet, meny, kvalitet |
| Hovmester | Lede servitørene, gjesteopplevelse |
| Kokk | Tilberede maten |
| Servitør | Servere gjester |`,
    },
    {
      id: 'salg-service-vg1-6-6-text-3',
      type: 'text',
      content: `### Ansvarsfordeling

**Formelt ansvar:**
- Tydelig definert i stillingsbeskrivelse
- Hvem som beslutter hva
- Hvem som rapporterer til hvem
- Budsjetfullmakter

**Myndighet:**
- Rett til å ta beslutninger
- Ma matche ansvaret
- "Ansvar uten myndighet" fungerer ikke

**Delegering:**
- Gi ansvar og myndighet nedover
- Frigjør tid for leder
- Utvikler medarbeidere
- Krever oppfølging

**Teamarbeid:**
- Tverrfaglig samarbeid
- Felles mal og ansvar
- Utfyller hverandre
- Viktig i servicenæringen`,
    },
    {
      id: 'salg-service-vg1-6-6-tip-1',
      type: 'tip',
      title: 'Empowerment',
      content: `Empowerment betyr å gi medarbeidere myndighet til å ta beslutninger for a løse kundens problemer der og da - uten a ma spørre leder først. I servicenæringen er dette viktig fordi kunden ikke vil vente. Et hotell som lar resepsjonisten gi en oppgradering nar noe gar galt, løser problemet raskere og bedre.`,
    },
    {
      id: 'salg-service-vg1-6-6-text-4',
      type: 'text',
      content: `### Organisering og servicekvalitet

**Flat vs. hierarkisk struktur:**

**Flat struktur:**
- Færre lederniva
- Raskere beslutninger
- Mer ansvar til medarbeidere
- Passer ofte sma/mellomstore bedrifter

**Hierarkisk struktur:**
- Flere lederniva
- Tydeligere kommandolinjer
- Kan være tregere
- Passer store organisasjoner

**Pavirkning pa service:**
- Tydelige roller = bedre service
- Empowerment = raskere problemløsning
- God kommunikasjon mellom avdelinger
- Alle vet hva som forventes`,
    },
    {
      id: 'salg-service-vg1-6-6-example-1',
      type: 'example',
      title: 'Eksempel: Organisasjonskart for et hotell',
      problem: 'Tegn et forenklet organisasjonskart for et mellomstort hotell.',
      solution: `**Hotell "Fjordview" - Organisasjonskart:**

\`\`\`
                 Hotelldirektør
                      |
    ----------------------------------------
    |           |            |             |
Front Office  House-      F&B         Økonomi/
Manager      keeping     Manager       Admin
    |        Manager        |
    |           |           |
Resepsjon-   Stuepiker   Kjøkkensjef
ister                    Servitører
Nattportier              Bartendere
\`\`\`

**Roller og ansvar:**
- **Hotelldirektør:** Overordnet ansvar, strategi, økonomi
- **Front Office Manager:** Resepsjon, booking, gjestetilfredshet
- **Housekeeping Manager:** Renhold, rom, tekstiler
- **F&B Manager:** Restaurant, bar, frokost, arrangementer
- **Økonomi/Admin:** Regnskap, lønn, administrasjon

Mellomlederne har daglig ansvar for sine omrader og rapporterer til direktøren.`,
    },
    {
      id: 'salg-service-vg1-6-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-6-ex-1',
        number: '6.6.1',
        type: 'multiple-choice',
        task: 'Hva er empowerment i servicenæringen?',
        options: [
          { id: 'a', text: 'A gi medarbeidere høyere lønn', isCorrect: false },
          { id: 'b', text: 'A gi medarbeidere myndighet til å ta beslutninger', isCorrect: true },
          { id: 'c', text: 'A ha færre ansatte', isCorrect: false },
          { id: 'd', text: 'A automatisere alle oppgaver', isCorrect: false },
        ],
        solution: 'Empowerment betyr å gi medarbeidere myndighet til å ta beslutninger for a løse kundens problemer uten a ma ga til leder først. Dette gir raskere og bedre service.',
      },
    },
    {
      id: 'salg-service-vg1-6-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-6-ex-2',
        number: '6.6.2',
        type: 'classic',
        task: 'Hvorfor er tydelig ansvarsfordeling viktig for servicekvaliteten?',
        hints: ['Tenk pa hva som skjer nar ingen vet hvem som skal gjøre hva'],
        solution: 'Nar alle vet hva de har ansvar for, faller ingenting mellom stolene. Kunden far hjelp raskt fordi riktig person tar tak. Det blir mindre forvirring og frustrasjon. Uten tydelig ansvar kan alle tro at "noen andre gjør det", og ingenting blir gjort - eller ting blir gjort dobbelt.',
      },
    },
    {
      id: 'salg-service-vg1-6-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-6-ex-3',
        number: '6.6.3',
        type: 'classic',
        task: 'Beskriv tre typiske roller i en restaurant og hva de har ansvar for.',
        solution: '1) Daglig leder: Overordnet ansvar for drift og økonomi, personalledelse, kontakt med leverandører, sikre lønnsomhet. 2) Kjøkkensjef: Lede kjøkkenet, utvikle menyer, bestille ravarer, kvalitetskontroll, lede kokkene. 3) Servitør: Ta imot og betjene gjester, ta bestillinger, servere mat og drikke, kassehåndtering.',
      },
    },
    {
      id: 'salg-service-vg1-6-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-6-ex-4',
        number: '6.6.4',
        type: 'classic',
        task: 'Hva er forskjellen pa en flat og en hierarkisk organisasjonsstruktur?',
        solution: 'Flat struktur: Færre lederniva, kortere vei fra medarbeider til toppleder, raskere beslutninger, mer ansvar til den enkelte. Passer ofte mindre bedrifter. Hierarkisk struktur: Flere lederniva, tydeligere kommandolinjer, mer kontroll, kan være tregere beslutninger. Passer ofte større organisasjoner med mange ansatte.',
      },
    },
    {
      id: 'salg-service-vg1-6-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-6-ex-5',
        number: '6.6.5',
        type: 'classic',
        task: 'Tenk deg at du er leder for resepsjonen pa et hotell. Hvilke ansvarsomrader har du?',
        solution: 'Som Front Office Manager har du ansvar for: 1) Ledelse av resepsjonistene (vakter, opplæring, oppfølging). 2) Gjestetilfredshet (løse problemer, handtere klager). 3) Booking og reservasjoner (overbooking, kapasitet). 4) Samarbeid med andre avdelinger (housekeeping, F&B). 5) Rapportering til hotelldirektør (belegg, gjestetilbakemeldinger). 6) Daglig drift av resepsjonsomradet.',
      },
    },
    {
      id: 'salg-service-vg1-6-6-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Organisasjonsstruktur** viser hvordan bedriften er bygget opp
- **Roller og ansvar** ma være tydelig definert
- **Empowerment** gir medarbeidere myndighet til a løse problemer
- **God organisering** er grunnlaget for god service

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Organisasjonsstruktur | Hvordan bedriften er bygget opp |
| Empowerment | Gi medarbeidere beslutningsmyndighet |
| Delegering | Gi ansvar og myndighet til andre |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.7: Administrative funksjoner og kvalitet
// ============================================================================

export const CHAPTER_SALG_SERVICE_VG1_6_7: TextbookChapter = {
  id: 'salg-service-vg1-6-7',
  courseId: 'salg-service-vg1',
  chapterNumber: '6.7',
  title: 'Administrative funksjoner og kvalitet',
  description: 'Hvordan administrative funksjoner støtter driften og sikrer kvalitet i servicenæringen. Du lærer om rutiner, systemer og kvalitetsstyring.',
  estimatedMinutes: 40,
  competenceGoals: ['beskrive administrative funksjoner og rutiner i en virksomhet og drøfte hvordan disse påvirker kvaliteten og servicenivået'],
  content: [
    {
      id: 'salg-service-vg1-6-7-intro',
      type: 'text',
      content: `## Systemene bak servicen

God service skjer ikke tilfeldig - det krever gode systemer og rutiner. Administrative funksjoner sikrer at alt fungerer smidig, fra booking til betaling, fra varebestilling til lønnsutbetaling. I dette kapittelet ser vi pa hvordan administrasjon støtter kvalitet.

I dette kapittelet skal du lære:
- Hva administrative funksjoner er
- Viktige rutiner i servicenæringen
- Kvalitetsstyring og forbedring
- Hvordan systemer påvirker service`,
    },
    {
      id: 'salg-service-vg1-6-7-def-1',
      type: 'definition',
      title: 'Administrative funksjoner',
      content: `**Administrative funksjoner** er de støttefunksjonene som holder en virksomhet i gang, men som ikke direkte produserer varene eller tjenestene. Eksempler er økonomi/regnskap, HR/personal, IT, innkjøp og dokumentasjon.`,
    },
    {
      id: 'salg-service-vg1-6-7-text-1',
      type: 'text',
      content: `### Viktige administrative funksjoner

**Økonomi og regnskap:**
- Fakturering og betalinger
- Lønn til ansatte
- Rapportering og analyse
- Budsjett og oppfølging

**HR/Personal:**
- Rekruttering og ansettelse
- Opplæring og utvikling
- Arbeidskontrakter
- Turnusplanlegging

**Innkjøp:**
- Bestilling av varer
- Leverandørkontakt
- Lagerstyring
- Prisforhandlinger

**IT/Systemer:**
- Kassesystemer
- Bookingsystemer
- Nettverk og infrastruktur
- Datasikkerhet`,
    },
    {
      id: 'salg-service-vg1-6-7-text-2',
      type: 'text',
      content: `### Rutiner og prosedyrer

**Hva er en rutine?**
- Fast fremgangsmate for a utføre en oppgave
- Sikrer at ting gjøres likt hver gang
- Reduserer feil og variasjon
- Letter opplæring av nye

**Eksempler pa rutiner i servicenæringen:**

**Hotell:**
- Sjekk-inn-prosedyre
- Morgenrutine for housekeeping
- Handtering av funn pa rom
- Nattrevisjon

**Restaurant:**
- Åpnings- og stengerutiner
- Mottak av vareleveranser
- Hygienekontroller
- Handtering av allergier

**Butikk:**
- Kassaoppgjør
- Varemottak
- Returhåndtering
- Ordrebestilling`,
    },
    {
      id: 'salg-service-vg1-6-7-def-2',
      type: 'definition',
      title: 'Kvalitetsstyring',
      content: `**Kvalitetsstyring** er systematisk arbeid for a sikre og forbedre kvaliteten pa produkter og tjenester. Det inkluderer a sette standarder, male ytelse, identifisere avvik og iverksette forbedringer.`,
    },
    {
      id: 'salg-service-vg1-6-7-text-3',
      type: 'text',
      content: `### Kvalitetsstyring i praksis

**Elementer i kvalitetsstyring:**

**1. Standarder**
- Definere hva som er "god nok" kvalitet
- Beskrive hvordan ting skal gjøres
- Sjekklister og maler
- Servicestandarder

**2. Måling**
- Gjestetilfredshet (spørreundersøkelser)
- Mystery shopping
- Interne kontroller
- Nøkkeltall (KPIer)

**3. Avvikshandtering**
- Fange opp nar noe gar galt
- Analysere årsaker
- Rette opp feilen
- Hindre gjentakelse

**4. Kontinuerlig forbedring**
- Alltid se etter forbedringsmuligheter
- Lære av feil og suksesser
- Involvere medarbeiderne
- Justere rutiner og standarder`,
    },
    {
      id: 'salg-service-vg1-6-7-tip-1',
      type: 'tip',
      title: 'PDCA-sirkelen',
      content: `PDCA (Plan-Do-Check-Act) er en modell for kontinuerlig forbedring: Plan (planlegg forbedringen), Do (gjennomfør), Check (mål resultatet), Act (juster og standardiser det som fungerer). Sirkelen gjentas kontinuerlig for stadig a bli bedre.`,
    },
    {
      id: 'salg-service-vg1-6-7-text-4',
      type: 'text',
      content: `### Systemer i servicenæringen

**Bookingsystemer:**
- Mottar og behandler reservasjoner
- Holder oversikt over kapasitet
- Sender bekreftelser
- Integreres med andre systemer

**Kassesystemer (POS):**
- Registrerer salg
- Beregner beløp og mva
- Aksepterer betaling
- Lagrer data for analyse

**CRM-systemer:**
- Lagrer kundeinformasjon
- Historikk og preferanser
- Grunnlag for markedsføring
- Personlig service

**Hvordan systemer påvirker kvalitet:**
- Reduserer feil
- Frigjør tid til service
- Gir bedre oversikt
- Muliggjør analyse og forbedring`,
    },
    {
      id: 'salg-service-vg1-6-7-example-1',
      type: 'example',
      title: 'Eksempel: Sjekk-inn-rutine pa hotell',
      problem: 'Lag en sjekk-inn-rutine som sikrer lik kvalitet hver gang.',
      solution: `**Sjekk-inn-rutine:**

**1. Forberedelse:**
- [ ] Sjekk dagens ankomstliste
- [ ] Forbered nøkkelkort
- [ ] Vær oppdatert pa spesielle ønsker

**2. Mottak (under 30 sekunder):**
- [ ] Øyekontakt og smil
- [ ] "Velkommen til [hotellnavn]!"
- [ ] Spør om reservasjon

**3. Registrering:**
- [ ] Be om navn og bekreft reservasjon
- [ ] Sjekk ID ved behov
- [ ] Bekreft romtype og pris
- [ ] Registrer betalingsmetode
- [ ] Spør om eventuelle ønsker

**4. Informasjon:**
- [ ] Forklar frokosttider og sted
- [ ] Informer om WiFi
- [ ] Pek ut heis/trapper
- [ ] Fortell om checkout-tid

**5. Avslutning:**
- [ ] Overrekk nøkkelkort
- [ ] "Rommet er i X etasje, rom Y"
- [ ] "Ha et fint opphold - gi beskjed om det er noe!"

**Tid totalt:** 2-3 minutter

Rutinen sikrer at alle gjester far samme informasjon og opplevelse.`,
    },
    {
      id: 'salg-service-vg1-6-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-7-ex-1',
        number: '6.7.1',
        type: 'multiple-choice',
        task: 'Hvorfor er rutiner viktige i servicenæringen?',
        options: [
          { id: 'a', text: 'For a gjøre jobben kjedelig', isCorrect: false },
          { id: 'b', text: 'For a sikre lik kvalitet og redusere feil', isCorrect: true },
          { id: 'c', text: 'For a ha mer papirarbeid', isCorrect: false },
          { id: 'd', text: 'For å bruke mer tid', isCorrect: false },
        ],
        solution: 'Rutiner sikrer at oppgaver utføres likt hver gang, uansett hvem som gjør jobben. Dette gir jevn kvalitet og reduserer feil.',
      },
    },
    {
      id: 'salg-service-vg1-6-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-7-ex-2',
        number: '6.7.2',
        type: 'classic',
        task: 'Hva star PDCA for, og hvordan brukes det?',
        hints: ['Det er en syklus for forbedring'],
        solution: 'PDCA star for Plan-Do-Check-Act. Det er en modell for kontinuerlig forbedring: Plan (planlegg hva du vil forbedre), Do (gjennomfør tiltaket), Check (mal resultatet - fungerte det?), Act (standardiser det som fungerer eller juster og prøv igjen). Sirkelen gjentas for stadig a bli bedre.',
      },
    },
    {
      id: 'salg-service-vg1-6-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-7-ex-3',
        number: '6.7.3',
        type: 'classic',
        task: 'Nevn fire viktige administrative funksjoner og forklar kort hva de gjør.',
        solution: '1) Økonomi/regnskap: Håndterer fakturaer, lønn, rapportering og budsjett. 2) HR/personal: Rekruttering, ansettelser, opplæring, turnusplanlegging. 3) Innkjøp: Bestiller varer, forhandler med leverandører, styrer lager. 4) IT/systemer: Kasse- og bookingsystemer, nettverk, datasikkerhet.',
      },
    },
    {
      id: 'salg-service-vg1-6-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-7-ex-4',
        number: '6.7.4',
        type: 'classic',
        task: 'Hvordan kan en restaurant male kvaliteten pa servicen?',
        solution: 'Metoder for a male servicekvalitet: 1) Gjestetilfredshetsskjemaer (papir eller digital). 2) Anmeldelser pa TripAdvisor og Google. 3) Mystery shopping (testkjøpere som evaluerer). 4) Gjenkjøpsrate (kommer gjestene tilbake?). 5) Klagestatistikk. 6) Observasjon og tilbakemelding fra ledere. 7) Medarbeidersamtaler om hva som fungerer.',
      },
    },
    {
      id: 'salg-service-vg1-6-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-7-ex-5',
        number: '6.7.5',
        type: 'classic',
        task: 'Lag en enkel rutine for stenging av en kafé ved arbeidsdagens slutt.',
        solution: 'Stengerutine for kafé: 1) Siste bestillinger 30 min før stengetid. 2) Begynn a rydde tomme bord. 3) Slukk skilt og informer siste gjester. 4) Tøm og rengjør kaffemaskiner. 5) Vask disker og bord. 6) Feie/moppe gulv. 7) Tøm søppel. 8) Gjør opp kassen og tell kontanter. 9) Sjekk at vinduer og bakdør er lukket. 10) Slukk lys og las hoveddøren. 11) Sett pa alarm om det er slikt system.',
      },
    },
    {
      id: 'salg-service-vg1-6-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'salg-service-vg1-6-7-ex-6',
        number: '6.7.6',
        type: 'classic',
        task: 'Forklar hvordan et kassesystem påvirker servicekvaliteten i en butikk.',
        solution: 'Et godt kassesystem påvirker service positivt ved: 1) Raskere betjening (scanner, kort) = kortere kø. 2) Færre feil i prisberegning = fornøyde kunder. 3) Enkel retur/bytte = god kundeservice. 4) Oversikt over lager = kan svare pa sporsmål om varene. 5) Salgsdata = kan analysere og forbedre sortiment. 6) Lojalitetsprogram = personlig service og tilbud. Et dårlig system skaper frustrasjon for bade ansatte og kunder.',
      },
    },
    {
      id: 'salg-service-vg1-6-7-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Administrative funksjoner** støtter driften (økonomi, HR, IT, innkjøp)
- **Rutiner** sikrer lik kvalitet og reduserer feil
- **Kvalitetsstyring** handler om standarder, maling og forbedring
- **Gode systemer** frigjør tid og reduserer feil

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Administrative funksjoner | Støttefunksjoner som økonomi, HR, IT |
| Rutine | Fast fremgangsmate for oppgaver |
| Kvalitetsstyring | Systematisk arbeid for a sikre kvalitet |
| PDCA | Plan-Do-Check-Act - modell for forbedring |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const SALG_SERVICE_VG1_DEL6_CHAPTERS = [
  CHAPTER_SALG_SERVICE_VG1_6_1,
  CHAPTER_SALG_SERVICE_VG1_6_2,
  CHAPTER_SALG_SERVICE_VG1_6_3,
  CHAPTER_SALG_SERVICE_VG1_6_4,
  CHAPTER_SALG_SERVICE_VG1_6_5,
  CHAPTER_SALG_SERVICE_VG1_6_6,
  CHAPTER_SALG_SERVICE_VG1_6_7,
];
