/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Økonomistyring (VG2) - Del 5
 * Seksjon 5: Likviditet og finansiering
 * Følger LK20 læreplan (NOK02-03)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

/**
 * KAPITTEL 5.1: Likviditetsstyring
 * Lærer elevene om likviditet, betalingsevne og nøkkeltall for likviditet
 */
const CHAPTER_OKONOMISTYRING_5_1: TextbookChapter = {
  id: 'oks-5-1',
  title: 'Likviditetsstyring',
  subject: 'okonomistyring',
  level: 'vg2',
  section: 5,
  chapter: 1,
  estimatedMinutes: 20,
  content: [
    {
      type: 'text',
      id: 'oks-5-1-intro',
      content: `# Likviditetsstyring

En virksomhet kan ha gode resultater og positiv egenkapital, men likevel gå konkurs. Hvordan? Svaret ligger i **likviditet** – evnen til å betale regningene når de forfaller. God likviditetsstyring er avgjørende for alle bedrifter.`
    },
    {
      type: 'text',
      id: 'oks-5-1-hva-er',
      content: `## Hva er likviditet?

**Likviditet** beskriver hvor raskt eiendeler kan gjøres om til kontanter, eller hvor lett en bedrift kan betale sine kortsiktige forpliktelser.

**Høy likviditet:** Bedriften har mye kontanter eller omløpsmidler som raskt kan omsettes til kontanter (kundefordringer, varelager).

**Lav likviditet:** Bedriften har lite kontanter og mange anleggsmidler som ikke kan selges raskt (bygninger, maskiner).`
    },
    {
      type: 'example',
      id: 'oks-5-1-ex-kafe',
      content: `**Eksempel: Likviditetsproblem**

**Kafe Hygge AS** har et årlig overskudd på 500 000 kr og egenkapital på 2 millioner kr. Balansen ser slik ut:

**Eiendeler:**
- Lokale og inventar: 3 000 000 kr
- Varelager: 100 000 kr
- Kundefordringer: 50 000 kr
- Bankinnskudd: 20 000 kr

**Gjeld og egenkapital:**
- Egenkapital: 2 000 000 kr
- Leverandørgjeld (forfaller nå): 800 000 kr
- Banklån: 370 000 kr

Kafeen har kun 20 000 kr på konto, men skal betale 800 000 kr til leverandører. Selv om bedriften er lønnsom, har den et akutt likviditetsproblem.`
    },
    {
      type: 'text',
      id: 'oks-5-1-betalingsevne',
      content: `## Betalingsevne

**Betalingsevne** er bedriftens evne til å betale sine forpliktelser når de forfaller. Dette måles ved å sammenligne omløpsmidler (som raskt kan bli kontanter) med kortsiktig gjeld.

**God betalingsevne:** Omløpsmidler > Kortsiktig gjeld
**Dårlig betalingsevne:** Omløpsmidler < Kortsiktig gjeld

For å vurdere betalingsevnen bruker vi **likviditetstall** (nøkkeltall).`
    },
    {
      type: 'text',
      id: 'oks-5-1-likviditetsgrad1',
      content: `## Likviditetsgrad 1

**Likviditetsgrad 1** (LG1) viser forholdet mellom alle omløpsmidler og kortsiktig gjeld:

$$\\text{Likviditetsgrad 1} = \\frac{\\text{Omløpsmidler}}{\\text{Kortsiktig gjeld}} \\times 100\\%$$

**Tommelfingerregel:**
- LG1 > 200%: Svært god likviditet
- LG1 = 150-200%: God likviditet
- LG1 = 100-150%: Akseptabel likviditet
- LG1 < 100%: Dårlig likviditet (fare for betalingsproblemer)

En LG1 på 200% betyr at bedriften har dobbelt så mye omløpsmidler som kortsiktig gjeld.`
    },
    {
      type: 'example',
      id: 'oks-5-1-ex-lg1',
      content: `**Eksempel: Beregning av likviditetsgrad 1**

**Møbelbutikk Tre AS** har følgende tall fra balansen:

**Omløpsmidler:**
- Varelager: 800 000 kr
- Kundefordringer: 400 000 kr
- Bank: 200 000 kr
- Sum omløpsmidler: 1 400 000 kr

**Kortsiktig gjeld:**
- Leverandørgjeld: 600 000 kr
- Skattetrekk: 100 000 kr
- Sum kortsiktig gjeld: 700 000 kr

$$\\text{LG1} = \\frac{1\\,400\\,000}{700\\,000} \\times 100\\% = 200\\%$$

Møbelbutikken har god likviditet – den har dobbelt så mye omløpsmidler som kortsiktig gjeld.`
    },
    {
      type: 'text',
      id: 'oks-5-1-likviditetsgrad2',
      content: `## Likviditetsgrad 2

**Likviditetsgrad 2** (LG2) gir et strengere mål på likviditet ved å ekskludere varelager. Varelager kan være vanskelig å selge raskt, særlig i dårlige tider.

$$\\text{Likviditetsgrad 2} = \\frac{\\text{Omløpsmidler} - \\text{Varelager}}{\\text{Kortsiktig gjeld}} \\times 100\\%$$

**Tommelfingerregel:**
- LG2 > 100%: God likviditet
- LG2 = 80-100%: Akseptabel likviditet
- LG2 < 80%: Svak likviditet

LG2 kalles også **«syretest»** fordi den tester om bedriften tåler et «surt» marked der varer ikke selges.`
    },
    {
      type: 'example',
      id: 'oks-5-1-ex-lg2',
      content: `**Eksempel: Sammenligning av LG1 og LG2**

Vi fortsetter med **Møbelbutikk Tre AS:**

**LG1:** 200% (beregnet over)

**LG2:**
$$\\text{LG2} = \\frac{1\\,400\\,000 - 800\\,000}{700\\,000} \\times 100\\% = \\frac{600\\,000}{700\\,000} \\times 100\\% = 85,7\\%$$

Selv om LG1 er god, viser LG2 at likviditeten er mer usikker hvis varelageret ikke kan selges raskt. Butikken bør derfor overvåke varelageret nøye.`
    },
    {
      type: 'text',
      id: 'oks-5-1-tolkning',
      content: `## Tolkning av likviditetstall

Likviditetstall må tolkes i kontekst:

**Bransjeavhengig:** Dagligvarebutikker kan operere med lavere likviditet fordi de selger varer svært raskt. Entreprenørfirmaer trenger høyere likviditet fordi de ofte må vente lenge på betaling.

**Sesongvariasjoner:** Mange bedrifter har store svingninger i likviditet gjennom året (julesalg, byggesommer).

**Vekstfase:** Oppstartsbedrifter har ofte lavere likviditet fordi de investerer mye.

**Trend:** En synkende likviditet over tid er et varselsignal, selv om tallene fortsatt er akseptable.`
    },
    {
      type: 'text',
      id: 'oks-5-1-forbedre',
      content: `## Hvordan forbedre likviditeten?

**Kortsiktige tiltak:**
- Raskere innkreving av kundefordringer
- Redusere varelageret
- Utsette betalinger til leverandører (innenfor betalingsfristene)
- Ta opp kortsiktig lån (kassakreditt)

**Langsiktige tiltak:**
- Øke egenkapitalen (nye eiere, tilbakeholdt overskudd)
- Refinansiere kortsiktig gjeld til langsiktig gjeld
- Selge unødvendige anleggsmidler
- Forbedre lønnsomheten`
    }
  ],
  exercises: [
    {
      type: 'multiple-choice',
      id: 'oks-5-1-mc1',
      content: 'En bedrift har omløpsmidler på 800 000 kr og kortsiktig gjeld på 500 000 kr. Hva er likviditetsgrad 1?',
      options: [
        '62,5%',
        '100%',
        '160%',
        '200%'
      ],
      correctAnswer: 2,
      explanation: 'LG1 = (800 000 / 500 000) × 100% = 160%'
    },
    {
      type: 'classic',
      id: 'oks-5-1-c1',
      content: `**Sport & Fritid AS** har følgende omløpsmidler og kortsiktig gjeld:

- Varelager: 600 000 kr
- Kundefordringer: 300 000 kr
- Bank: 100 000 kr
- Leverandørgjeld: 400 000 kr
- Annen kortsiktig gjeld: 100 000 kr

Beregn likviditetsgrad 1 og likviditetsgrad 2. Vurder bedriftens likviditet.`,
      solution: `**Beregning av LG1:**
Sum omløpsmidler = 600 000 + 300 000 + 100 000 = 1 000 000 kr
Sum kortsiktig gjeld = 400 000 + 100 000 = 500 000 kr

LG1 = (1 000 000 / 500 000) × 100% = 200%

**Beregning av LG2:**
Omløpsmidler uten varelager = 1 000 000 - 600 000 = 400 000 kr

LG2 = (400 000 / 500 000) × 100% = 80%

**Vurdering:**
- LG1 på 200% er svært god likviditet
- LG2 på 80% er i nedre grense av akseptabel likviditet
- Bedriften er avhengig av å selge varelageret for å ha god betalingsevne
- Bør overvåke varelageret nøye`
    },
    {
      type: 'multiple-choice',
      id: 'oks-5-1-mc2',
      content: 'Hvilken av disse bedriftene har størst behov for høy likviditet?',
      options: [
        'Dagligvarebutikk med daglig varesalg',
        'Byggefirma som venter lenge på betaling fra kunder',
        'Nettbank med få fysiske eiendeler',
        'Serveringsbedrift med kun kontantsalg'
      ],
      correctAnswer: 1,
      explanation: 'Byggefirmaer må ofte finansiere materialer og lønn lenge før de får betalt fra kunder, og trenger derfor høy likviditet for å dekke løpende utgifter.'
    },
    {
      type: 'classic',
      id: 'oks-5-1-c2',
      content: 'Forklar forskjellen mellom lønnsomhet og likviditet. Hvorfor kan en lønnsom bedrift gå konkurs?',
      solution: `**Lønnsomhet** handler om at inntektene er høyere enn kostnadene over tid. En bedrift kan ha godt overskudd og være lønnsom.

**Likviditet** handler om å ha nok kontanter til å betale regningene når de forfaller. Dette er en kortsiktig betalingsevne.

**Hvorfor kan en lønnsom bedrift gå konkurs?**

En lønnsom bedrift kan gå konkurs hvis den ikke har nok kontanter til å betale sine forpliktelser. Eksempel:

- Bedriften selger varer på kreditt (kundefordringer)
- Bedriften må betale leverandører kontant
- Selv om salget gir overskudd, mangler bedriften kontanter nå
- Hvis bedriften ikke kan betale leverandørene, kan den bli slått konkurs

Dette kalles «konkurs på toppen» – bedriften går konkurs mens den har god lønnsomhet, men dårlig likviditetsstyring.`
    },
    {
      type: 'classic',
      id: 'oks-5-1-c3',
      content: `**Elektro Service AS** hadde LG1 på 180% for to år siden og 120% i fjor. I år er LG1 på 95%.

Hva forteller denne utviklingen? Hvilke tiltak bør bedriften vurdere?`,
      solution: `**Vurdering av utviklingen:**
- Fallende likviditet over tre år (180% → 120% → 95%)
- LG1 er nå under 100%, som betyr at kortsiktig gjeld er større enn omløpsmidler
- Dette er et alvorlig varselsignal om betalingsproblemer

**Mulige årsaker:**
- Økende varelager (varer som ikke selges)
- Økende kundefordringer (kunder betaler ikke)
- Synkende bankinnskudd
- Økende kortsiktig gjeld

**Tiltak bedriften bør vurdere:**

Kortsiktig:
- Intensiv innkreving av kundefordringer
- Redusere innkjøp for å få ned varelager
- Forhandle om betalingsutsettelse med leverandører
- Søke om kassakreditt for akutt likviditet

Langsiktig:
- Refinansiere kortsiktig gjeld til langsiktig lån
- Tilføre egenkapital
- Forbedre lønnsomheten
- Stramme inn kredittvurdering av kunder`
    },
    // --- Samleoppgaver ---
    {
      type: 'classic',
      id: 'oks-5-1-s1',
      content: `**Interiør Design AS** har følgende balanseposter:

**EIENDELER**
- Inventar og utstyr: 500 000 kr
- Varelager: 450 000 kr
- Kundefordringer: 280 000 kr
- Bank: 70 000 kr

**GJELD OG EGENKAPITAL**
- Egenkapital: 600 000 kr
- Langsiktig gjeld: 300 000 kr
- Leverandørgjeld: 320 000 kr
- Skattetrekk: 80 000 kr

a) Beregn likviditetsgrad 1 og 2
b) Vurder bedriftens likviditet
c) Foreslå to konkrete tiltak for å forbedre likviditeten`,
      solution: `**a) Beregning av likviditetstall:**

Omløpsmidler = 450 000 + 280 000 + 70 000 = 800 000 kr
Kortsiktig gjeld = 320 000 + 80 000 = 400 000 kr

LG1 = (800 000 / 400 000) × 100% = 200%
LG2 = (800 000 - 450 000) / 400 000 × 100% = 87,5%

**b) Vurdering:**
- LG1 på 200% er svært god likviditet
- LG2 på 87,5% er akseptabel, men i nedre grense
- Bedriften er ganske avhengig av varelageret (som utgjør mer enn halvparten av omløpsmidlene)
- Bankinnskuddet er relativt lavt (70 000 kr)

**c) Tiltak for å forbedre likviditeten:**

1. **Redusere varelager:**
   - Gjennomgå varelageret og identifiser varer som selges langsomt
   - Kjør salg/kampanjer på disse varene
   - Bestill mindre kvanta framover

2. **Forbedre kredittrutiner:**
   - Følg opp kundefordringene tettere (purre tidligere)
   - Tilby betalingsrabatt ved rask betaling (2% ved 10 dager)
   - Vurder å kreve forskuddsbetaling fra nye kunder`
    },
    {
      type: 'classic',
      id: 'oks-5-1-s2',
      content: `Du er økonomirådgiver og får to kunder:

**Bedrift A:** LG1 = 250%, LG2 = 180%, lønnsomhet (rentabilitet) = 5%
**Bedrift B:** LG1 = 110%, LG2 = 70%, lønnsomhet (rentabilitet) = 18%

Hvilken bedrift er i best økonomisk tilstand? Begrunn svaret grundig.`,
      solution: `**Analyse:**

**Bedrift A:**
- Utmerket likviditet (både LG1 og LG2 meget gode)
- Lav lønnsomhet (5% er svakt)
- Bedriften har god betalingsevne på kort sikt
- Men lav lønnsomhet truer bedriften på lang sikt

**Bedrift B:**
- Svak likviditet (LG1 på 110% er i nedre grense, LG2 på 70% er svak)
- Meget god lønnsomhet (18% er sterkt)
- Bedriften er lønnsom, men kan få betalingsproblemer

**Vurdering:**

Det er vanskelig å si at én bedrift er klart best – de har motsatte utfordringer:

**Kortsiktig perspektiv (0-1 år):**
Bedrift A er sikrest fordi den har god betalingsevne og liten konkursrisiko.

**Langsiktig perspektiv (3-5 år):**
Bedrift B har bedre fremtidsutsikter fordi lønnsomheten er god. Likviditetsproblemer kan løses med:
- Tilførsel av egenkapital
- Refinansiering av gjeld
- Stramme inn kredittstyringen

Bedrift A må imidlertid forbedre lønnsomheten, ellers vil den gradvis tape verdier.

**Konklusjon:**
Ideelt sett trenger begge bedrifter å balansere likviditet og lønnsomhet. Men hvis jeg må velge: **Bedrift B** har best langsiktig potensial, fordi lønnsomhet er grunnmuren i enhver virksomhet. Likviditetsproblemer kan løses hvis grunnvirksomheten er lønnsom.`
    }
  ]
};

/**
 * KAPITTEL 5.2: Kontantstrøm og arbeidskapital
 * Lærer elevene om kontantstrømoppstilling og arbeidskapital
 */
const CHAPTER_OKONOMISTYRING_5_2: TextbookChapter = {
  id: 'oks-5-2',
  title: 'Kontantstrøm og arbeidskapital',
  subject: 'okonomistyring',
  level: 'vg2',
  section: 5,
  chapter: 2,
  estimatedMinutes: 20,
  content: [
    {
      type: 'text',
      id: 'oks-5-2-intro',
      content: `# Kontantstrøm og arbeidskapital

Resultatregnskapet viser lønnsomheten, balansen viser den økonomiske stillingen. Men ingen av dem viser hvordan **kontantene** faktisk flyter inn og ut av bedriften. Det gjør **kontantstrømoppstillingen**.`
    },
    {
      type: 'text',
      id: 'oks-5-2-kontantstrøm',
      content: `## Hva er kontantstrøm?

**Kontantstrøm** (cash flow) er inn- og utbetalinger av kontanter i en periode. Det er forskjell på inntekter/kostnader (resultatregnskap) og inn-/utbetalinger (kontantstrøm):

**Inntekt ≠ Innbetaling:**
- En kunde kjøper varer på kreditt → Inntekt nå, men ingen innbetaling ennå
- Kunden betaler etter 30 dager → Innbetaling

**Kostnad ≠ Utbetaling:**
- Bedriften kjøper en maskin → Utbetaling nå
- Avskrivning over 5 år → Kostnad fordeles over tid

Dette er grunnen til at en lønnsom bedrift kan ha likviditetsproblemer – den har inntekter, men mangler innbetalinger.`
    },
    {
      type: 'text',
      id: 'oks-5-2-kontantstrømoppstilling',
      content: `## Kontantstrømoppstilling

Kontantstrømoppstillingen viser endring i kontanter og deles i tre områder:

**1. Operasjonelle aktiviteter** (den daglige driften):
- Innbetaling fra kunder
- Utbetaling til leverandører, ansatte, offentlige avgifter

**2. Investeringsaktiviteter:**
- Kjøp/salg av varige driftsmidler (maskiner, bygninger)
- Kjøp/salg av aksjer og andre investeringer

**3. Finansieringsaktiviteter:**
- Tilførsel av egenkapital
- Opptak og nedbetaling av lån
- Utbytte til eiere

Sum av disse tre gir **endring i kontanter** i perioden.`
    },
    {
      type: 'example',
      id: 'oks-5-2-ex-kontantstrøm',
      content: `**Eksempel: Kontantstrømoppstilling**

**Blomster & Design AS** – kontantstrømoppstilling for 2024:

**Operasjonelle aktiviteter:**
+ Innbetaling fra kunder: 2 400 000 kr
− Utbetaling til leverandører: −1 200 000 kr
− Lønnsutbetalinger: −800 000 kr
− Betalt skatt og avgifter: −150 000 kr
= **Kontantstrøm fra drift: 250 000 kr**

**Investeringsaktiviteter:**
− Kjøp av varebil: −300 000 kr
= **Kontantstrøm fra investeringer: −300 000 kr**

**Finansieringsaktiviteter:**
+ Opptak av banklån: 200 000 kr
− Nedbetaling på lån: −50 000 kr
= **Kontantstrøm fra finansiering: 150 000 kr**

**Endring i kontanter: 100 000 kr**
+ Bank 1.1.2024: 80 000 kr
= **Bank 31.12.2024: 180 000 kr**

Selv om bedriften har god kontantstrøm fra driften (250 000 kr), er den totale endringen bare 100 000 kr på grunn av investeringen i varebil.`
    },
    {
      type: 'text',
      id: 'oks-5-2-tolkning',
      content: `## Tolkning av kontantstrøm

**Positiv kontantstrøm fra drift:** Godt tegn – driften genererer kontanter.

**Negativ kontantstrøm fra drift:** Dårlig tegn – driften bruker mer kontanter enn den genererer. Kan aksepteres i oppstartsfaser, men ikke over tid.

**Negativ kontantstrøm fra investeringer:** Vanlig og ofte positivt – bedriften investerer i framtiden.

**Positiv kontantstrøm fra finansiering:** Bedriften tar opp lån eller tilføres egenkapital. Kan være nødvendig, men øker gjeld.

**Ideell situasjon:** Positiv kontantstrøm fra drift som dekker investeringer og nedbetaling av gjeld.`
    },
    {
      type: 'text',
      id: 'oks-5-2-arbeidskapital',
      content: `## Arbeidskapital

**Arbeidskapital** er differansen mellom omløpsmidler og kortsiktig gjeld:

$$\\text{Arbeidskapital} = \\text{Omløpsmidler} - \\text{Kortsiktig gjeld}$$

Arbeidskapital viser hvor mye kapital som er bundet i den daglige driften. Det er kapital som «arbeider» i virksomheten.

**Positiv arbeidskapital:** Omløpsmidler > Kortsiktig gjeld (godt tegn)
**Negativ arbeidskapital:** Omløpsmidler < Kortsiktig gjeld (dårlig tegn)

En høy arbeidskapital gir bedre betalingsevne, men betyr også at mye kapital er bundet.`
    },
    {
      type: 'example',
      id: 'oks-5-2-ex-arbeidskapital',
      content: `**Eksempel: Beregning av arbeidskapital**

**Tech Support AS** har følgende tall:

**Omløpsmidler:**
- Varelager: 300 000 kr
- Kundefordringer: 400 000 kr
- Bank: 150 000 kr
- Sum: 850 000 kr

**Kortsiktig gjeld:**
- Leverandørgjeld: 250 000 kr
- Skattetrekk: 50 000 kr
- Sum: 300 000 kr

Arbeidskapital = 850 000 − 300 000 = **550 000 kr**

Bedriften har 550 000 kr i arbeidskapital, som er bundet i den daglige driften. Dette er et sunt nivå som gir god betalingsevne.`
    },
    {
      type: 'text',
      id: 'oks-5-2-endring-arbeidskapital',
      content: `## Endring i arbeidskapital

Endring i arbeidskapital påvirker kontantstrømmen:

**Økning i arbeidskapital = Negativ kontantstrøm**
Eksempel: Økt varelager eller kundefordringer binder mer kontanter.

**Reduksjon i arbeidskapital = Positiv kontantstrøm**
Eksempel: Redusert varelager eller raskere innbetaling frigjør kontanter.

En voksende bedrift trenger ofte økende arbeidskapital, som kan skape likviditetsproblemer selv om virksomheten er lønnsom.`
    },
    {
      type: 'text',
      id: 'oks-5-2-omløpshastighet',
      content: `## Omløpshastighet

**Omløpshastighet** måler hvor raskt eiendeler omsettes til kontanter:

**Omløpshastighet varelager:**
$$\\text{Omløpshastighet} = \\frac{\\text{Vareforbruk}}{\\text{Gjennomsnittlig varelager}}$$

Viser hvor mange ganger varelageret «roterer» i løpet av et år.

**Omløpshastighet kundefordringer:**
$$\\text{Omløpshastighet} = \\frac{\\text{Kreditsalg}}{\\text{Gjennomsnittlige kundefordringer}}$$

**Omløpstid** er hvor lang tid det tar:
$$\\text{Omløpstid (dager)} = \\frac{365}{\\text{Omløpshastighet}}$$

Høy omløpshastighet er positivt – det betyr rask omsetning og mindre kapitalbinding.`
    },
    {
      type: 'example',
      id: 'oks-5-2-ex-omløp',
      content: `**Eksempel: Omløpshastighet varelager**

**Dagligvare AS** har:
- Vareforbruk (innkjøpte varer): 3 600 000 kr
- Gjennomsnittlig varelager: 300 000 kr

Omløpshastighet = 3 600 000 / 300 000 = **12 ganger per år**

Omløpstid = 365 / 12 = **30 dager**

Varelageret fornyes i gjennomsnitt hver 30. dag, som er normalt for en dagligvarebutikk. Ferske varer krever rask omsetning.`
    },
    {
      type: 'text',
      id: 'oks-5-2-styring',
      content: `## Styring av arbeidskapital

For å forbedre kontantstrømmen og redusere arbeidskapitalen kan bedriften:

**Varelager:**
- Redusere lagerbeholdningen (bestille mindre, oftere)
- Selge ut varer som ligger lenge på lager
- Just-in-time leveranser

**Kundefordringer:**
- Stramme inn kredittvilkår (kortere betalingsfrist)
- Raskere purring og inkasso
- Betalingsrabatt ved rask betaling

**Leverandørgjeld:**
- Utnytte betalingsfristen maksimalt (men ikke for sent!)
- Forhandle lengre betalingsfrist

Målet er å frigjøre kontanter uten å skade kundeforhold eller leverandørforhold.`
    }
  ],
  exercises: [
    {
      type: 'multiple-choice',
      id: 'oks-5-2-mc1',
      content: 'En bedrift har omløpsmidler på 600 000 kr og kortsiktig gjeld på 400 000 kr. Hva er arbeidskapitalen?',
      options: [
        '200 000 kr',
        '400 000 kr',
        '600 000 kr',
        '1 000 000 kr'
      ],
      correctAnswer: 0,
      explanation: 'Arbeidskapital = Omløpsmidler − Kortsiktig gjeld = 600 000 − 400 000 = 200 000 kr'
    },
    {
      type: 'classic',
      id: 'oks-5-2-c1',
      content: 'Forklar forskjellen mellom inntekt (i resultatregnskapet) og innbetaling (i kontantstrømoppstillingen). Gi et konkret eksempel.',
      solution: `**Forskjellen:**

**Inntekt** er verdien av solgte varer/tjenester, og føres i resultatregnskapet når salget skjer – uavhengig av når betaling mottas.

**Innbetaling** er faktiske kontanter som kommer inn på bankkonto, og føres i kontantstrømoppstillingen når betalingen skjer.

**Eksempel:**

**Snekkerfirma Berg AS** leverer et kjøkken til kunde 15. november for 150 000 kr:

- **15. november:** Fakturerer 150 000 kr med 30 dagers betalingsfrist
  - Resultatregnskap: Inntekt 150 000 kr (føres nå)
  - Kontantstrøm: Ingen innbetaling ennå

- **15. desember:** Kunden betaler fakturaen
  - Resultatregnskap: Ingen endring (inntekten ble ført i november)
  - Kontantstrøm: Innbetaling 150 000 kr (føres nå)

Dette viser hvordan en lønnsom bedrift kan mangle kontanter – den har inntekter, men venter på innbetalinger.`
    },
    {
      type: 'classic',
      id: 'oks-5-2-c2',
      content: `**Motebutikk Stil AS** har vareforbruk på 2 400 000 kr i året og gjennomsnittlig varelager på 400 000 kr.

Beregn omløpshastighet og omløpstid for varelageret. Hva betyr disse tallene?`,
      solution: `**Beregning:**

Omløpshastighet = Vareforbruk / Gjennomsnittlig varelager
= 2 400 000 / 400 000 = 6 ganger per år

Omløpstid = 365 / Omløpshastighet
= 365 / 6 = 60,8 dager ≈ 61 dager

**Tolkning:**

Varelageret fornyes 6 ganger i året, eller i gjennomsnitt hver 61. dag. Dette betyr at:

- En vare ligger i snitt 61 dager på lager før den selges
- Motebutikken har relativt langsom omsetning
- For en motebutikk kan dette være i høyeste laget – moter endres raskt
- Det kan tyde på at noe varelager er vanskelig å selge (gammel kolleksjon)

**Forbedringsmuligheter:**
- Kjør salg på varer som ligger lenge
- Bestill mindre kvanta, men oftere
- Følg med på trendings bedre for å unngå innkjøp av varer som ikke selges`
    },
    {
      type: 'multiple-choice',
      id: 'oks-5-2-mc2',
      content: 'Hva skjer med kontantstrømmen når en bedrift øker varelageret sitt?',
      options: [
        'Positiv kontantstrøm – bedriften får mer penger',
        'Negativ kontantstrøm – bedriften bruker kontanter til å kjøpe varer',
        'Ingen effekt – varelageret påvirker ikke kontantstrøm',
        'Det kommer an på om varene selges'
      ],
      correctAnswer: 1,
      explanation: 'Når varelageret øker, betyr det at bedriften har kjøpt inn mer varer, som gir utbetaling og derfor negativ kontantstrøm. Når varene senere selges, kommer innbetaling.'
    },
    {
      type: 'classic',
      id: 'oks-5-2-c3',
      content: `**Service & Vask AS** har følgende kontantstrømoppstilling:

**Operasjonelle aktiviteter:**
- Innbetaling fra kunder: 1 800 000 kr
- Utbetaling til leverandører og ansatte: −1 600 000 kr
- Kontantstrøm fra drift: 200 000 kr

**Investeringsaktiviteter:**
- Kjøp av vaskemaskiner: −400 000 kr

**Finansieringsaktiviteter:**
- Opptak av lån: 250 000 kr
- Nedbetaling på lån: −30 000 kr
- Kontantstrøm fra finansiering: 220 000 kr

Beregn endring i kontanter. Vurder bedriftens kontantstrøm.`,
      solution: `**Beregning:**

Endring i kontanter = Kontantstrøm fra drift + Kontantstrøm fra investering + Kontantstrøm fra finansiering

= 200 000 + (−400 000) + 220 000
= 20 000 kr

**Vurdering:**

**Positivt:**
- Driften genererer positiv kontantstrøm (200 000 kr) – godt tegn
- Bedriften investerer i nye vaskemaskiner (400 000 kr) – tyder på vekst
- Totalt positiv kontantstrøm (20 000 kr)

**Utfordringer:**
- Investeringen er betydelig større enn kontantstrøm fra drift
- Bedriften må ta opp lån (250 000 kr) for å finansiere investeringen
- Dette øker gjelden og framtidige rentekostnader

**Anbefaling:**
Bedriften må sørge for at de nye vaskemaskinene øker inntektene nok til å dekke lånekostnadene. Det er viktig å overvåke kontantstrømmen framover for å sikre at driften kan håndtere økt gjeld.`
    },
    // --- Samleoppgaver ---
    {
      type: 'classic',
      id: 'oks-5-2-s1',
      content: `**IT-Drift AS** har følgende balanseposter ved årsskiftet:

**31.12.2023:**
- Varelager: 400 000 kr
- Kundefordringer: 300 000 kr
- Bank: 100 000 kr
- Kortsiktig gjeld: 500 000 kr

**31.12.2024:**
- Varelager: 500 000 kr
- Kundefordringer: 450 000 kr
- Bank: 80 000 kr
- Kortsiktig gjeld: 600 000 kr

a) Beregn arbeidskapitalen for 2023 og 2024
b) Beregn endringen i arbeidskapital
c) Hva forteller dette om kontantstrømmen?
d) Hva kan være årsaken til utviklingen?`,
      solution: `**a) Arbeidskapital:**

**2023:**
Omløpsmidler = 400 000 + 300 000 + 100 000 = 800 000 kr
Arbeidskapital = 800 000 − 500 000 = 300 000 kr

**2024:**
Omløpsmidler = 500 000 + 450 000 + 80 000 = 1 030 000 kr
Arbeidskapital = 1 030 000 − 600 000 = 430 000 kr

**b) Endring i arbeidskapital:**
430 000 − 300 000 = 130 000 kr økning

**c) Hva forteller dette om kontantstrømmen?**

Økningen i arbeidskapital på 130 000 kr betyr at mer kontanter er bundet i driften. Dette gir **negativ effekt på kontantstrømmen** – bedriften har brukt kontanter på:
- Økt varelager: +100 000 kr
- Økte kundefordringer: +150 000 kr
- Økt kortsiktig gjeld: −100 000 kr (demper effekten)

Samtidig har bankinnskuddet gått ned med 20 000 kr.

**d) Mulige årsaker:**

1. **Vekst:** Bedriften vokser og trenger mer varelager og har flere kunder (kundefordringer)

2. **Svekkede rutiner:**
   - Varelageret øker fordi varer ikke selges raskt nok
   - Kundefordringer øker fordi kunder betaler senere

3. **Likviditetsproblemer:** Kortsiktig gjeld øker, mens bank synker – tegn på at bedriften sliter med å betale regningene

**Anbefaling:**
Bedriften bør stramme inn styringen av varelager og kundefordringer for å frigjøre kontanter.`
    },
    {
      type: 'classic',
      id: 'oks-5-2-s2',
      content: `Du er økonomikonsulent og får i oppdrag å hjelpe to bedrifter:

**Bedrift X:**
- Resultat: +500 000 kr (godt overskudd)
- Kontantstrøm fra drift: −200 000 kr (negativ)
- Arbeidskapital: Økt med 400 000 kr

**Bedrift Y:**
- Resultat: +100 000 kr (lite overskudd)
- Kontantstrøm fra drift: +300 000 kr (positiv)
- Arbeidskapital: Redusert med 150 000 kr

Analyser situasjonen for begge bedriftene. Hvilken bedrift er mest bekymringsfull, og hvorfor?`,
      solution: `**Analyse av Bedrift X:**

Bedriften har godt overskudd (500 000 kr), men negativ kontantstrøm fra drift (−200 000 kr). Hvorfor?

- Arbeidskapitalen har økt med 400 000 kr
- Dette betyr at overskuddet er bundet i økt varelager og kundefordringer
- Bedriften «tjener penger på papiret», men har ikke kontanter

**Eksempel på hva som kan ha skjedd:**
- Salg på kreditt gir inntekter (resultat), men ikke innbetalinger ennå
- Innkjøp av store varelager gir utbetalinger, men ikke kostnader før varer selges
- Resultat: Godt overskudd, men ingen kontanter

**Konsekvens:** Bedrift X kan få likviditetsproblemer selv med god lønnsomhet.

---

**Analyse av Bedrift Y:**

Bedriften har lite overskudd (100 000 kr), men god kontantstrøm fra drift (+300 000 kr). Hvorfor?

- Arbeidskapitalen har blitt redusert med 150 000 kr
- Dette betyr at bedriften har frigjort kontanter fra varelager og kundefordringer
- Bedriften kan ha solgt ut varelager eller fått inn gamle kundefordringer

**Konsekvens:** Bedrift Y har god likviditet på kort sikt.

---

**Hvilken bedrift er mest bekymringsfull?**

**Bedrift X er mest bekymringsfull på kort sikt:**
- Negativ kontantstrøm kan føre til likviditetskrise
- Bedriften kan ikke betale regningene selv med godt overskudd
- Trenger tiltak nå (innkreving, redusere lager, lån)

**Men Bedrift Y har også utfordringer på sikt:**
- Lav lønnsomhet er ikke bærekraftig over tid
- Reduksjon i arbeidskapital kan bety at bedriften selger seg «tom»
- Hvis varelageret blir for lavt, kan bedriften ikke betjene kundene

**Konklusjon:**
Bedrift X trenger akutte likviditetstiltak, men har en sunn grunnvirksomhet (lønnsom). Bedrift Y må jobbe med å forbedre lønnsomheten over tid. På kort sikt er Bedrift X mest kritisk.`
    }
  ]
};

/**
 * KAPITTEL 5.3: Finansieringskilder
 * Lærer elevene om ulike måter å finansiere en virksomhet på
 */
const CHAPTER_OKONOMISTYRING_5_3: TextbookChapter = {
  id: 'oks-5-3',
  title: 'Finansieringskilder',
  subject: 'okonomistyring',
  level: 'vg2',
  section: 5,
  chapter: 3,
  estimatedMinutes: 25,
  content: [
    {
      type: 'text',
      id: 'oks-5-3-intro',
      content: `# Finansieringskilder

Alle bedrifter trenger kapital for å drive virksomheten – til å kjøpe utstyr, varelager, betale lønn og andre utgifter. Det finnes mange måter å skaffe kapital på, og valget påvirker både risiko og kostnader.`
    },
    {
      type: 'text',
      id: 'oks-5-3-oversikt',
      content: `## Oversikt over finansieringskilder

Finansiering kan deles inn i to hovedkategorier:

**1. Egenkapitalfinansiering:**
- Penger fra eierne (aksjekapital)
- Tilbakeholdt overskudd
- Ingen forpliktelse til tilbakebetaling
- Eierne tar risikoen

**2. Fremmedkapitalfinansiering (gjeld):**
- Penger fra eksterne långivere
- Må betales tilbake med renter
- Banklån, obligasjoner, leverandørkreditt
- Eierne beholder kontrollen, men tar på seg forpliktelser

Balansen mellom egenkapital og gjeld kalles **kapitalstruktur**.`
    },
    {
      type: 'text',
      id: 'oks-5-3-egenkapital',
      content: `## Egenkapitalfinansiering

**Aksjekapital** er penger som eierne (aksjonærene) skyter inn i selskapet:

**Fordeler:**
- Ingen forpliktelse til å betale tilbake
- Ingen rentekostnader
- Styrker soliditeten (egenkapitalandelen)
- Reduserer risikoen for konkurs

**Ulemper:**
- Nye eiere betyr deling av kontroll og framtidig overskudd
- Kan være vanskelig å finne investorer
- Utbytte er ikke skattefradragsberettiget (renter er det)

**Tilbakeholdt overskudd** er resultat som ikke deles ut som utbytte, men blir stående i selskapet. Dette er «gratis» finansiering fordi det ikke koster renter eller fortynner eierskapet.`
    },
    {
      type: 'text',
      id: 'oks-5-3-banklån',
      content: `## Banklån

**Banklån** er den vanligste formen for fremmedkapital. Bedriften låner penger fra en bank og betaler tilbake med renter over en avtalt periode.

**Typer banklån:**

**Driftskreditt (kassakreditt):**
- Kortsiktig lån for å dekke svingninger i likviditet
- Fleksibelt – bedriften kan trekke og betale tilbake etter behov
- Høyere rente enn vanlige lån

**Byggel lån:**
- Langsiktig lån med fast nedbetalingsplan
- Brukes til kjøp av bygninger, maskiner, inventar
- Lavere rente enn kassakreditt
- Ofte sikret med pant i eiendeler

**Fordeler med lån:**
- Eierne beholder kontrollen
- Rentekostnader er skattefradragsberettiget
- «Giring» – lånefinansiering kan øke avkastningen på egenkapitalen

**Ulemper:**
- Må betales tilbake uansett hvordan det går med bedriften
- Rentekostnader reduserer overskuddet
- Høy gjeld øker konkursrisikoen`
    },
    {
      type: 'example',
      id: 'oks-5-3-ex-lån',
      content: `**Eksempel: Finansiering av utstyr**

**Bygg & Anlegg AS** skal kjøpe en gravemaskin til 1 000 000 kr. To alternativer:

**Alternativ 1: Egenkapitalfinansiering**
- Eierne skyter inn 1 000 000 kr
- Ingen rentekostnader
- Egenkapitalen øker med 1 000 000 kr

**Alternativ 2: Lånefinansiering**
- Bedriften tar opp lån på 1 000 000 kr til 6% rente
- Årlige rentekostnader: 60 000 kr
- Gjelden øker med 1 000 000 kr

**Vurdering:**
- Hvis bedriften har god likviditet, kan egenkapital være best (slipper renter)
- Hvis eierne ikke har penger, eller vil beholde kontanter til annet, er lån nødvendig
- Lån gir skattefradrag for rentene, som reduserer den reelle kostnaden`
    },
    {
      type: 'text',
      id: 'oks-5-3-leasing',
      content: `## Leasing

**Leasing** er å leie en eiendel over en periode, istedenfor å kjøpe den. Det er et alternativ til lånefinansiering.

**Finansiell leasing:**
- Langsiktig leieavtale (ofte hele eiendelens levetid)
- Bedriften har bruksrett og står for vedlikehold
- Ligner på lån – eiendelen føres i balansen som om den var kjøpt
- Utleieres (leasingselskap) eier eiendelen formelt

**Operasjonell leasing:**
- Kortsiktig leieavtale (kortere enn eiendelens levetid)
- Utleier står for vedlikehold og service
- Mer fleksibelt – kan bytte ut utstyr
- Føres ikke i balansen (kun som kostnad)

**Fordeler:**
- Krever ikke stor startkapital
- Enklere enn lånefinansiering (mindre papirarbeid)
- Fleksibilitet (ved operasjonell leasing)

**Ulemper:**
- Dyrere enn å kjøpe (totalt over tid)
- Bedriften eier ikke eiendelen
- Bindingstid kan være ugunstig`
    },
    {
      type: 'example',
      id: 'oks-5-3-ex-leasing',
      content: `**Eksempel: Leasing av firmabil**

**Rørlegger Hansen** trenger en varebil. To alternativer:

**Alternativ 1: Kjøpe**
- Pris: 400 000 kr (egenkapital eller lån)
- Avskrivning: 80 000 kr per år i 5 år
- Vedlikehold og forsikring: 20 000 kr per år
- Eier bilen etter 5 år (restverdi 50 000 kr)

**Alternativ 2: Leasing (operasjonell)**
- Månedsleie: 6 500 kr (78 000 kr per år)
- Inkluderer vedlikehold, forsikring, dekkskift
- Eier ikke bilen – leveres tilbake etter 5 år

**Sammenligning (5 år):**
- Kjøp: 400 000 − 50 000 (restverdi) + 100 000 (vedlikehold) = 450 000 kr
- Leasing: 78 000 × 5 = 390 000 kr

Leasing kan være billigere hvis man regner med alt vedlikehold, og gir dessuten fleksibilitet til å bytte bil.`
    },
    {
      type: 'text',
      id: 'oks-5-3-leverandør',
      content: `## Leverandørkreditt

**Leverandørkreditt** er når bedriften kjøper varer/tjenester og får betalingsfrist (f.eks. 30 eller 60 dager). Dette er en form for kortsiktig finansiering.

**Fordeler:**
- «Gratis» lån hvis det ikke beregnes renter
- Enkelt å få – ingen søknadsprosess
- Forbedrer likviditeten (utsetter utbetalinger)

**Ulemper:**
- Kortsiktig – må betales innen fristen
- Kan koste dyrt hvis man ikke betaler i tide (purregebyr, inkasso)
- Går ofte glipp av kontantrabatt

**Eksempel:**
En faktura på 100 000 kr med betalingsbetingelser «2% 10 dager netto 30» betyr:
- Betal innen 10 dager → 2% rabatt (betaler 98 000 kr)
- Betal innen 30 dager → full pris (100 000 kr)

Å ikke benytte rabatten koster 2 000 kr for 20 dagers utsettelse, som tilsvarer svært høy effektiv rente (over 40% årlig!).`
    },
    {
      type: 'text',
      id: 'oks-5-3-factoring',
      content: `## Factoring

**Factoring** er salg av kundefordringer til et factoringselskap. Bedriften får kontanter umiddelbart istedenfor å vente på at kundene betaler.

**Hvordan fungerer det:**
1. Bedriften selger varer til kunde på kreditt (f.eks. 30 dagers betalingsfrist)
2. Bedriften selger fakturaen til factoringselskapet
3. Factoringselskapet betaler bedriften umiddelbart (f.eks. 90% av fakturabeløpet)
4. Når kunden betaler, får bedriften de resterende 10% minus factoringsgebyr

**Fordeler:**
- Bedrer likviditeten raskt
- Slipper å drive inkasso
- Reduserer risikoen for tap på kundefordringer

**Ulemper:**
- Kostbart (gebyr på 1-5% av fakturabeløpet)
- Kunden får vite at bedriften bruker factoring (kan virke svakt)

**Når brukes factoring:**
- Når bedriften har likviditetsproblemer
- Eksportbedrifter med lang kredittid til utenlandske kunder
- Bedrifter med mange små kunder (høy inkassokostnad)`
    },
    {
      type: 'example',
      id: 'oks-5-3-ex-factoring',
      content: `**Eksempel: Factoring**

**IT-Service AS** har fakturert en stor kunde 500 000 kr med 60 dagers betalingsfrist. Bedriften trenger kontanter nå og bruker factoring:

1. IT-Service selger fakturaen til Factorselskapet
2. Factorselskapet betaler umiddelbart 90% = 450 000 kr
3. Etter 60 dager betaler kunden 500 000 kr til Factorselskapet
4. Factorselskapet betaler resterende 10% til IT-Service, minus gebyr:
   - Resterende: 50 000 kr
   - Gebyr (2%): 10 000 kr
   - Utbetaling til IT-Service: 40 000 kr

**Resultat:**
- IT-Service får totalt 490 000 kr (450 000 + 40 000)
- Kostnaden for factoring: 10 000 kr (2%)
- Gevinsten: Kontanter umiddelbart istedenfor å vente 60 dager`
    },
    {
      type: 'text',
      id: 'oks-5-3-valg',
      content: `## Valg av finansieringskilde

Valget av finansiering avhenger av:

**Formål:**
- Langsiktige investeringer (bygninger, maskiner) → Langsiktig finansiering (lån, egenkapital)
- Kortsiktige behov (varelager, likviditet) → Kortsiktig finansiering (kassakreditt, leverandørkreditt)

**Tilgjengelighet:**
- Har eierne kapital til å skyte inn?
- Vil banken låne ut (soliditet, sikkerhet)?

**Kostnad:**
- Rente på lån
- Fortynning av eierskap (nye aksjonærer)
- Gebyrer (factoring, leasing)

**Risiko:**
- Høy gjeld øker konkursrisikoen
- Egenkapital gir tryggere kapitalstruktur

**Fleksibilitet:**
- Leasing og kassakreditt er mer fleksibelt enn store lån

**Tommelfingerregel:** Finansier langsiktige eiendeler med langsiktig kapital (egenkapital og langsiktige lån). Finansier kortsiktige behov med kortsiktig kapital (kassakreditt, leverandørkreditt).`
    }
  ],
  exercises: [
    {
      type: 'multiple-choice',
      id: 'oks-5-3-mc1',
      content: 'Hva er fordelen med egenkapitalfinansiering sammenlignet med lånefinansiering?',
      options: [
        'Egenkapital gir skattefradrag',
        'Egenkapital må ikke betales tilbake',
        'Egenkapital er alltid billigere',
        'Egenkapital gir høyere avkastning'
      ],
      correctAnswer: 1,
      explanation: 'Egenkapital trenger ikke betales tilbake og har ingen rentekostnader, men gir ikke skattefradrag (det gjør renter på lån).'
    },
    {
      type: 'classic',
      id: 'oks-5-3-c1',
      content: 'Forklar forskjellen mellom finansiell leasing og operasjonell leasing. Gi et eksempel på når hver type er hensiktsmessig.',
      solution: `**Finansiell leasing:**
- Langsiktig leieavtale (ofte hele eiendelens levetid)
- Bedriften står for vedlikehold
- Eiendelen føres i balansen som om den var kjøpt
- Ligner på lånefinansiering

**Operasjonell leasing:**
- Kortsiktig leieavtale (kortere enn eiendelens levetid)
- Utleier står for vedlikehold
- Føres ikke i balansen (kun som kostnad)
- Mer fleksibelt

**Eksempel – Finansiell leasing:**
Et byggefirma leaser en stor gravemaskin for 8 år (maskinens forventede levetid). Bedriften trenger maskinen kontinuerlig og vil ha full kontroll. Finansiell leasing passer.

**Eksempel – Operasjonell leasing:**
Et reklamebureau leaser kontormøbler og IT-utstyr for 3 år. De vil ha fleksibilitet til å bytte ut utstyr når det kommer nye modeller, og slipper å tenke på vedlikehold. Operasjonell leasing passer.`
    },
    {
      type: 'multiple-choice',
      id: 'oks-5-3-mc2',
      content: 'En faktura har betalingsbetingelser «3% 10 dager netto 30». Hva betyr dette?',
      options: [
        'Betal innen 10 dager og få 30% rabatt',
        'Betal innen 30 dager og få 3% rabatt',
        'Betal innen 10 dager og få 3% rabatt, ellers fullt beløp innen 30 dager',
        'Renten er 3% per 10 dager'
      ],
      correctAnswer: 2,
      explanation: 'Dette er en vanlig kontantrabatt: 3% rabatt hvis man betaler innen 10 dager, ellers fullt beløp innen 30 dager.'
    },
    {
      type: 'classic',
      id: 'oks-5-3-c2',
      content: `**Café Solvind** mottar en faktura på 50 000 kr med betalingsbetingelser «2% 10 dager netto 30».

a) Hvor mye må kafeen betale hvis de betaler innen 10 dager?
b) Hvor mye sparer de ved å betale tidlig?
c) Hvis kafeen ikke har kontanter, bør de ta opp kassakreditt til 8% årlig rente for å betale tidlig? Begrunn.`,
      solution: `**a) Betaling innen 10 dager:**
Kontantrabatt: 50 000 × 2% = 1 000 kr
Betaling: 50 000 − 1 000 = 49 000 kr

**b) Besparelse:**
De sparer 1 000 kr ved å betale 20 dager tidligere (dag 10 vs. dag 30).

**c) Bør de ta opp kassakreditt?**

La oss beregne kostnaden av kassakreditt for 20 dager:

Kassakreditt: 49 000 kr i 20 dager
Årlig rente: 8%
Daglig rente: 8% / 365 = 0,0219% per dag
Rentekostnad for 20 dager: 49 000 × 0,0219% × 20 = 215 kr

**Sammenligning:**
- Besparelse ved kontantrabatt: 1 000 kr
- Kostnad kassakreditt: 215 kr
- Netto gevinst: 1 000 − 215 = 785 kr

**Konklusjon:**
Ja, de bør ta opp kassakreditt for å betale tidlig. De sparer 785 kr netto, selv etter rentekostnad. Kontantrabatten er svært lønnsom – den tilsvarer over 40% effektiv årlig rente!`
    },
    {
      type: 'classic',
      id: 'oks-5-3-c3',
      content: `**Tekstilimport AS** har mange kundefordringer med lang kredittid (60 dager). Bedriften vurderer å bruke factoring for å forbedre likviditeten.

Factorselskapet tilbyr:
- Umiddelbar utbetaling av 85% av fakturabeløpet
- Resterende 15% utbetales når kunde betaler, minus gebyr på 2,5%

Bedriften har kundefordringer på til sammen 800 000 kr.

a) Hvor mye får bedriften umiddelbart?
b) Hvor mye får bedriften til slutt når alle kunder har betalt?
c) Hva er den totale kostnaden for factoring?
d) Når er factoring en god løsning?`,
      solution: `**a) Umiddelbar utbetaling:**
85% av 800 000 kr = 680 000 kr

**b) Totalt når alle har betalt:**

Resterende: 15% av 800 000 kr = 120 000 kr
Gebyr: 2,5% av 800 000 kr = 20 000 kr
Restutbetaling: 120 000 − 20 000 = 100 000 kr

Totalt: 680 000 + 100 000 = 780 000 kr

**c) Total kostnad:**
800 000 − 780 000 = 20 000 kr (2,5% av fakturabeløpet)

**d) Når er factoring en god løsning?**

Factoring er hensiktsmessig når:

1. **Akutt likviditetsbehov:** Bedriften trenger kontanter nå og kan ikke vente 60 dager

2. **Høye inkassokostnader:** Bedriften har mange små kunder og bruker mye tid på purring og inkasso

3. **Risiko for tap:** Kundene kan være usikre betalere, og factorselskapet tar over kredittrisikoen

4. **Eksportbedrifter:** Lang kredittid til utenlandske kunder gjør factoring attraktivt

I dette tilfellet får bedriften 680 000 kr umiddelbart istedenfor å vente, til en kostnad på 20 000 kr. Hvis bedriften trenger kontantene for å betale leverandører eller lønninger, kan dette være verdt kostnaden.`
    },
    // --- Samleoppgaver ---
    {
      type: 'classic',
      id: 'oks-5-3-s1',
      content: `**Møbelprodusent Nordtre AS** skal investere i en ny CNC-fres til 2 000 000 kr. Bedriften vurderer fire finansieringsalternativer:

**Alternativ 1:** Egenkapital – eierne skyter inn 2 000 000 kr

**Alternativ 2:** Banklån – 2 000 000 kr til 5% rente, nedbetales over 10 år

**Alternativ 3:** Leasing – månedsleie 22 000 kr i 10 år (totalt 2 640 000 kr), inkluderer service

**Alternativ 4:** 50% egenkapital + 50% banklån (5% rente)

Vurder fordeler og ulemper ved hvert alternativ. Hvilket vil du anbefale, og hvorfor?`,
      solution: `**Alternativ 1: Egenkapital (2 000 000 kr)**

Fordeler:
- Ingen rentekostnader
- Ingen forpliktelser til å betale tilbake
- Styrker soliditeten og kredittverdigheten
- Enklest administrativt

Ulemper:
- Krever at eierne har 2 millioner kr tilgjengelig
- Eierne kan miste alternativ avkastning (hvis pengene kunne investeres andre steder)
- Ingen skattefradrag (renter gir fradrag)

Totalkostnad: 2 000 000 kr

---

**Alternativ 2: Banklån (2 000 000 kr, 5% rente, 10 år)**

Fordeler:
- Eierne trenger ikke egne midler
- Rentekostnader er skattefradragsberettiget (reduserer reell kostnad)
- «Giring» – hvis avkastningen på investeringen > 5%, er lån lønnsomt

Ulemper:
- Årlige rentekostnader (ca. 100 000 kr første år, synker over tid)
- Fast forpliktelse til nedbetaling
- Øker gjeldsgraden (svekker soliditeten)
- Krever sikkerhet (pant)

Totalkostnad: Ca. 2 500 000 kr (lån + renter over 10 år)

---

**Alternativ 3: Leasing (22 000 kr/mnd i 10 år)**

Fordeler:
- Ingen stor startinvestering
- Inkluderer service (reduserer driftskostnader)
- Enklere enn lån (mindre papirarbeid)
- Kostnadene er skattefradragsberettiget

Ulemper:
- Dyrest alternativ (2 640 000 kr totalt)
- Bedriften eier ikke maskinen
- Bindingstid på 10 år

Totalkostnad: 2 640 000 kr

---

**Alternativ 4: 50% egenkapital + 50% lån**

Egenkapital: 1 000 000 kr
Lån: 1 000 000 kr til 5% rente

Fordeler:
- Balanse mellom sikkerhet (egenkapital) og skattefradrag (lånerenter)
- Moderat gjeldsgrad
- Lavere risiko enn fullt lån

Ulemper:
- Krever fortsatt 1 million fra eierne
- Noe rentekostnader (ca. 50 000 kr første år)

Totalkostnad: Ca. 1 250 000 kr (egenkapital) + 1 250 000 kr (lån + renter) = 2 500 000 kr

---

**Anbefaling:**

Jeg vil anbefale **Alternativ 4 (50% egenkapital + 50% lån)**, fordi:

1. Det gir en sunn balanse mellom sikkerhet og kostnadseffektivitet
2. Skattefradrag på renter reduserer kostnaden
3. Soliditeten forblir akseptabel (egenkapitalandelen svekkes ikke for mye)
4. Eierne beholder kontroll, og trenger ikke binde all kapital i maskinen

Hvis eierne ikke har 1 million tilgjengelig, er **Alternativ 2 (fullt lån)** nest best – det er rimeligere enn leasing og gir fleksibilitet. Leasing bør kun velges hvis service og vedlikehold er viktig, eller hvis bedriften vil unngå å binde kapital i anleggsmidler.`
    },
    {
      type: 'classic',
      id: 'oks-5-3-s2',
      content: `Du er rådgiver for en oppstartsbedrift som trenger 5 millioner kr i finansiering. Grunnlegger har 1 million selv.

**Alternativ A:**
- Grunnlegger skyter inn 1 million
- Ekstern investor skyter inn 4 millioner og får 50% eierskap
- Total egenkapital: 5 millioner

**Alternativ B:**
- Grunnlegger skyter inn 1 million (100% eierskap)
- Banklån 4 millioner til 6% rente
- Egenkapital 1 million, gjeld 4 millioner

Analyser fordeler og ulemper ved begge alternativene. Hvilken kapitalstruktur er mest risikabel, og for hvem?`,
      solution: `**Alternativ A: Ekstern investor (50/50 eierskap)**

Fordeler:
- Ingen gjeld eller rentekostnader
- Sterk egenkapital (5 millioner) gir høy soliditet
- Investoren kan bidra med kompetanse og nettverk
- Lav konkursrisiko

Ulemper:
- Grunnlegger mister 50% av eierskap og kontroll
- Må dele framtidig overskudd 50/50
- Investoren kan ha andre interesser/strategi
- Hvis bedriften blir vellykket, har grunnlegger gitt bort mye verdi

**For grunnlegger:** Trygt, men han/hun eier bare halvparten
**For investor:** Moderat risiko (50% av bedriften)

---

**Alternativ B: Banklån (100% eierskap)**

Fordeler:
- Grunnlegger beholder 100% eierskap og kontroll
- All framtidig verdiøkning tilfaller grunnlegger
- Rentekostnader er skattefradragsberettiget

Ulemper:
- Høy gjeld (4 millioner) og høy gjeldsgrad (80%)
- Årlige rentekostnader: 240 000 kr
- Fast forpliktelse til nedbetaling uansett resultat
- Høy konkursrisiko hvis virksomheten ikke går som planlagt
- Banken krever sikkerhet (personlig kausjon?)

**For grunnlegger:** Høy risiko, men stor potensiell gevinst
**For banken:** Moderat risiko (sikret med pant)

---

**Hvilken kapitalstruktur er mest risikabel, og for hvem?**

**Alternativ B (lån) er mest risikabelt for grunnlegger:**

1. **Konkursrisiko:** Med 80% gjeldsgrad kan bedriften gå konkurs hvis den ikke klarer å betjene gjelden
2. **Personlig ansvar:** Banken krever sannsynligvis personlig kausjon, som betyr at grunnlegger risikerer private eiendeler
3. **Likviditetspress:** Rentekostnader på 240 000 kr per år må betales uansett resultat
4. **Begrenset buffer:** Kun 1 million i egenkapital gir lite rom for feil

**Alternativ A er tryggere:**
- Ingen gjeld eller betalingsforpliktelser
- Investoren tar på seg risiko sammen med grunnlegger
- Selv om bedriften taper penger, er det ingen konkursrisiko

---

**Anbefaling:**

For en **oppstartsbedrift** er Alternativ A (investor) ofte smartest:
- Oppstartsbedrifter har høy risiko – mange mislykkes
- Med investor deles risikoen, og grunnlegger risikerer ikke personlig økonomi
- Investoren kan bidra med erfaring og nettverk

Hvis bedriften blir svært vellykket, vil grunnlegger angre på at han/hun ga bort 50%. Men sannsynligheten for å lykkes øker med solid finansiering og erfaren medaktør.

**Konklusjon:** Alternativ A er tryggere for grunnlegger. Alternativ B gir høyere potensiell gevinst, men med betydelig høyere risiko.`
    }
  ]
};

/**
 * KAPITTEL 5.4: Lån, renter og kreditt
 * Lærer elevene om ulike lånetyper og renteberegninger
 */
const CHAPTER_OKONOMISTYRING_5_4: TextbookChapter = {
  id: 'oks-5-4',
  title: 'Lån, renter og kreditt',
  subject: 'okonomistyring',
  level: 'vg2',
  section: 5,
  chapter: 4,
  estimatedMinutes: 25,
  content: [
    {
      type: 'text',
      id: 'oks-5-4-intro',
      content: `# Lån, renter og kreditt

Når bedrifter eller privatpersoner tar opp lån, må de betale **rente** – en kostnad for å låne andres penger. Det finnes ulike typer lån med forskjellige nedbetalingsformer, og det er viktig å forstå hvordan de fungerer.`
    },
    {
      type: 'text',
      id: 'oks-5-4-annuitet',
      content: `## Annuitetslån

**Annuitetslån** er det vanligste lånet for privatpersoner (boliglån). Kjennetegn:

- **Like store terminbeløp** hver måned/år
- Terminbeløpet består av renter og avdrag
- Først betaler du mye renter, lite avdrag
- Etter hvert betaler du mer avdrag, mindre renter

**Formel for terminbeløp:**
$$T = L \\cdot \\frac{r(1+r)^n}{(1+r)^n - 1}$$

Der:
- $T$ = terminbeløp (betaling per periode)
- $L$ = lånebeløp
- $r$ = rente per periode (årlig rente delt på antall terminer per år)
- $n$ = antall terminer totalt

**Fordeler:**
- Forutsigbart – samme beløp hver måned
- Enklere å budsjettere

**Ulemper:**
- Totalt betaler du mer renter enn på serielån
- Gjelden går sakte ned i starten`
    },
    {
      type: 'example',
      id: 'oks-5-4-ex-annuitet',
      content: `**Eksempel: Annuitetslån**

Du tar opp et lån på 500 000 kr til 5% årlig rente, nedbetales over 5 år med årlige terminer.

**Beregning av årlig terminbeløp:**

$L = 500\\,000$ kr
$r = 0,05$ (5%)
$n = 5$ år

$$T = 500\\,000 \\cdot \\frac{0,05(1,05)^5}{(1,05)^5 - 1}$$
$$T = 500\\,000 \\cdot \\frac{0,05 \\cdot 1,2763}{1,2763 - 1}$$
$$T = 500\\,000 \\cdot \\frac{0,0638}{0,2763} = 500\\,000 \\cdot 0,2310 = 115\\,487 \\text{ kr}$$

Du betaler ca. 115 500 kr per år i 5 år.

**År 1:**
- Renter: 500 000 × 5% = 25 000 kr
- Avdrag: 115 500 − 25 000 = 90 500 kr
- Restgjeld: 500 000 − 90 500 = 409 500 kr

**År 2:**
- Renter: 409 500 × 5% = 20 475 kr
- Avdrag: 115 500 − 20 475 = 95 025 kr
- Restgjeld: 409 500 − 95 025 = 314 475 kr

Og slik fortsetter det. Hver termin betaler du samme beløp, men avdragsdelen øker og rentedelen synker.`
    },
    {
      type: 'text',
      id: 'oks-5-4-serie',
      content: `## Serielån

**Serielån** er vanlig for bedriftslån og noen boliglån. Kjennetegn:

- **Like store avdrag** hver måned/år
- Terminbeløpet (avdrag + renter) synker over tid
- Du betaler mye i starten, mindre mot slutten
- Totalt betaler du mindre renter enn på annuitetslån

**Beregning:**
$$\\text{Avdrag per termin} = \\frac{\\text{Lånebeløp}}{\\text{Antall terminer}}$$

Renter beregnes av restgjelden hver gang.

**Fordeler:**
- Lavere totale rentekostnader
- Raskere nedbetaling av gjeld

**Ulemper:**
- Høye betalinger i starten (kan være tungt for privatpersoner)
- Vanskeligere å budsjettere (varierende terminbeløp)`
    },
    {
      type: 'example',
      id: 'oks-5-4-ex-serie',
      content: `**Eksempel: Serielån**

Samme lån som over: 500 000 kr til 5% rente over 5 år.

**Avdrag per år:**
$$\\text{Avdrag} = \\frac{500\\,000}{5} = 100\\,000 \\text{ kr per år}$$

**År 1:**
- Renter: 500 000 × 5% = 25 000 kr
- Avdrag: 100 000 kr
- Terminbeløp: 125 000 kr
- Restgjeld: 400 000 kr

**År 2:**
- Renter: 400 000 × 5% = 20 000 kr
- Avdrag: 100 000 kr
- Terminbeløp: 120 000 kr
- Restgjeld: 300 000 kr

**År 3:**
- Renter: 300 000 × 5% = 15 000 kr
- Terminbeløp: 115 000 kr
- Restgjeld: 200 000 kr

**År 4:**
- Renter: 200 000 × 5% = 10 000 kr
- Terminbeløp: 110 000 kr
- Restgjeld: 100 000 kr

**År 5:**
- Renter: 100 000 × 5% = 5 000 kr
- Terminbeløp: 105 000 kr
- Restgjeld: 0 kr

**Totale rentekostnader:**
25 000 + 20 000 + 15 000 + 10 000 + 5 000 = **75 000 kr**

(Dette er mindre enn annuitetslånet, som har høyere totale rentekostnader.)`
    },
    {
      type: 'text',
      id: 'oks-5-4-sammenligning',
      content: `## Sammenligning: Annuitet vs. Serie

**Annuitetslån:**
- Like store terminbeløp
- Enklere å planlegge
- Høyere totale rentekostnader
- Godt for privatpersoner med stabil økonomi

**Serielån:**
- Synkende terminbeløp
- Lavere totale rentekostnader
- Tungt i starten
- Godt for de som har råd til høye betalinger tidlig

**Hvilket lån er best?**
Det kommer an på:
- **Økonomi nå:** Har du råd til høye betalinger? → Serielån
- **Forutsigbarhet:** Vil du vite nøyaktig hva du betaler? → Annuitetslån
- **Total kostnad:** Vil du minimere rentene? → Serielån`
    },
    {
      type: 'text',
      id: 'oks-5-4-effektiv',
      content: `## Effektiv rente

**Nominell rente** er den oppgitte renten på lånet (f.eks. 5% per år).

**Effektiv rente** inkluderer alle kostnader (etableringsgebyr, termingebyr, fakturagebyr) og viser den reelle kostnaden av lånet.

**Hvorfor er dette viktig?**
To lån kan ha samme nominelle rente, men forskjellige gebyrer. Den effektive renten viser hvilken som faktisk er billigst.

**Beregning:**
Effektiv rente beregnes ved å finne internrenten av alle inn- og utbetalinger. Banker er pålagt å oppgi effektiv rente på lån.

**Eksempel:**
- Lån: 100 000 kr
- Nominell rente: 5%
- Etableringsgebyr: 2 000 kr
- Termingebyr: 50 kr per termin (12 terminer per år)

Den effektive renten blir høyere enn 5% på grunn av gebyrene.`
    },
    {
      type: 'text',
      id: 'oks-5-4-kreditt',
      content: `## Kassakreditt og kredittkort

**Kassakreditt** er en kredittramme på bankkonto der bedriften kan trekke penger etter behov:

- Fleksibelt – trekk og betal tilbake når som helst
- Høyere rente enn vanlige lån (ofte 8-12%)
- Brukes til kortsiktige likviditetsbehov
- Renter betales kun på trukket beløp

**Kredittkort** fungerer på samme måte for privatpersoner:
- Rentefri kreditt i ca. 45 dager (ved full betaling)
- Svært høy rente hvis man ikke betaler full saldo (ofte 20-30%)
- Tilleggsgebyrer (årsgebyr, uttak)

**Viktig:** Kredittkort er dyrt hvis man ikke betaler hele beløpet hver måned. Den effektive renten kan være svært høy.`
    },
    {
      type: 'example',
      id: 'oks-5-4-ex-kreditt',
      content: `**Eksempel: Kredittkort**

Du bruker 10 000 kr på kredittkort og betaler ikke hele beløpet. Banken krever:

- Minimum månedlig betaling: 500 kr
- Rente: 25% årlig (effektiv)

**Måned 1:**
- Saldo: 10 000 kr
- Renter: 10 000 × (25% / 12) = 208 kr
- Betaling: 500 kr
- Ny saldo: 10 000 + 208 − 500 = 9 708 kr

**Måned 2:**
- Saldo: 9 708 kr
- Renter: 9 708 × (25% / 12) = 202 kr
- Betaling: 500 kr
- Ny saldo: 9 708 + 202 − 500 = 9 410 kr

Hvis du fortsetter å betale kun 500 kr per måned, tar det **24 måneder** å betale ned gjelden, og du betaler totalt **2 600 kr i renter**.

Dette viser hvor dyrt det er å ikke betale full saldo på kredittkort!`
    },
    {
      type: 'text',
      id: 'oks-5-4-kredittverdig',
      content: `## Kredittvurdering

Når en bedrift søker om lån, vurderer banken **kredittevnen** og **kredittverdigheten**:

**Kredittevne** (kan bedriften betjene lånet?):
- Inntjening og kontantstrøm
- Nok overskudd til å betale renter og avdrag?

**Kredittverdighet** (hvor trygt er det å låne til bedriften?):
- Soliditet (egenkapitalandel)
- Likviditet
- Historikk (har bedriften betalt regninger før?)
- Sikkerhet (pant i eiendeler)

**Sikkerhet:**
Banken krever ofte **pant** i eiendeler (bygninger, maskiner) eller **personlig kausjon** fra eiere. Hvis bedriften ikke kan betale, kan banken ta eiendelene.`
    },
    {
      type: 'text',
      id: 'oks-5-4-tips',
      content: `## Lånestrategi for bedrifter

**Tilpass lånetypen til formålet:**
- Langsiktige investeringer → Langsiktige lån (bygg, maskiner)
- Kortsiktig likviditet → Kassakreditt
- Vekstkapital → Egenkapital eller langsiktig lån

**Forhandl renten:**
Bedrifter med god soliditet og kreditthistorikk kan forhandle om lavere rente.

**Vurder refinansiering:**
Hvis renten har falt, kan det lønne seg å refinansiere gamle lån til lavere rente.

**Unngå for høy gjeldsgrad:**
Høy gjeld øker konkursrisikoen. Balanser gjeld og egenkapital.

**Betal ned dyr gjeld først:**
Hvis bedriften har flere lån, prioriter å betale ned lånet med høyest rente (kassakreditt, kredittkort).`
    }
  ],
  exercises: [
    {
      type: 'multiple-choice',
      id: 'oks-5-4-mc1',
      content: 'Hva er forskjellen mellom annuitetslån og serielån?',
      options: [
        'Annuitetslån har like store avdrag, serielån har like store terminbeløp',
        'Annuitetslån har like store terminbeløp, serielån har like store avdrag',
        'Annuitetslån har lavere rente enn serielån',
        'Serielån kan bare brukes av privatpersoner'
      ],
      correctAnswer: 1,
      explanation: 'Annuitetslån har like store terminbeløp (renter + avdrag), mens serielån har like store avdrag (terminbeløpet synker over tid).'
    },
    {
      type: 'classic',
      id: 'oks-5-4-c1',
      content: `**Snikkerverksted AS** tar opp et serielån på 600 000 kr til 6% rente, nedbetales over 4 år med årlige terminer.

a) Beregn avdrag per år
b) Beregn terminbeløp (renter + avdrag) for år 1 og år 2
c) Hvor mye totale renter betaler bedriften over 4 år?`,
      solution: `**a) Avdrag per år:**

Avdrag = Lånebeløp / Antall år
= 600 000 / 4 = 150 000 kr per år

**b) Terminbeløp år 1 og 2:**

**År 1:**
Restgjeld start: 600 000 kr
Renter: 600 000 × 6% = 36 000 kr
Avdrag: 150 000 kr
Terminbeløp: 36 000 + 150 000 = 186 000 kr
Restgjeld slutt: 600 000 − 150 000 = 450 000 kr

**År 2:**
Restgjeld start: 450 000 kr
Renter: 450 000 × 6% = 27 000 kr
Avdrag: 150 000 kr
Terminbeløp: 27 000 + 150 000 = 177 000 kr
Restgjeld slutt: 450 000 − 150 000 = 300 000 kr

**c) Totale renter over 4 år:**

År 1: 600 000 × 6% = 36 000 kr
År 2: 450 000 × 6% = 27 000 kr
År 3: 300 000 × 6% = 18 000 kr
År 4: 150 000 × 6% = 9 000 kr

Totalt: 36 000 + 27 000 + 18 000 + 9 000 = 90 000 kr`
    },
    {
      type: 'multiple-choice',
      id: 'oks-5-4-mc2',
      content: 'Hvorfor er effektiv rente viktigere enn nominell rente når man sammenligner lån?',
      options: [
        'Effektiv rente er alltid lavere',
        'Effektiv rente inkluderer alle kostnader og gebyrer',
        'Nominell rente gjelder bare for bedriftslån',
        'Effektiv rente bestemmes av Stortinget'
      ],
      correctAnswer: 1,
      explanation: 'Effektiv rente inkluderer både renter og alle gebyrer (etablering, termingebyrer osv.) og viser den reelle kostnaden av lånet.'
    },
    {
      type: 'classic',
      id: 'oks-5-4-c2',
      content: `Du har 5 000 kr på kredittkort med 24% effektiv årlig rente. Du betaler minimum 200 kr per måned.

a) Hvor mye renter påløper første måned?
b) Hvor stor del av betalingen går til avdrag?
c) Hvorfor er det smart å betale mer enn minimumsbeløpet?`,
      solution: `**a) Renter første måned:**

Månedlig rente = 24% / 12 = 2% per måned
Renter = 5 000 × 2% = 100 kr

**b) Avdrag:**

Betaling: 200 kr
Renter: 100 kr
Avdrag: 200 − 100 = 100 kr

Kun halvparten (100 kr) går til å betale ned gjelden!

**c) Hvorfor betale mer?**

1. **Renter er svært høye:** 24% årlig rente er ekstremt dyrt
2. **Langsom nedbetaling:** Med kun 200 kr månedlig tar det veldig lang tid å betale ned gjelden
3. **Mer går til avdrag:** Hvis du betaler mer, går en større del til å faktisk redusere gjelden
4. **Spar rentekostnader:** Jo raskere du betaler, desto mindre totale renter

**Eksempel:**
Hvis du betaler 500 kr istedenfor 200 kr:
- Renter: 100 kr
- Avdrag: 400 kr (fire ganger så mye!)
- Gjelden betales ned mye raskere`
    },
    {
      type: 'classic',
      id: 'oks-5-4-c3',
      content: `**Elektro AS** vurderer to lånetilbud for 1 000 000 kr over 5 år:

**Tilbud A:**
- Nominell rente: 5,0%
- Etableringsgebyr: 5 000 kr
- Ingen termingebyrer

**Tilbud B:**
- Nominell rente: 4,8%
- Etableringsgebyr: 0 kr
- Termingebyr: 200 kr per termin (12 terminer per år)

Hvilket tilbud virker billigst? Hva bør bedriften vurdere?`,
      solution: `**Analyse:**

**Tilbud A:**
- Nominell rente: 5,0%
- Etablering: 5 000 kr (engangsgebyr)
- Termingebyrer over 5 år: 0 kr
- Sum gebyrer: 5 000 kr

**Tilbud B:**
- Nominell rente: 4,8% (litt lavere)
- Etablering: 0 kr
- Termingebyrer: 200 kr × 12 × 5 = 12 000 kr
- Sum gebyrer: 12 000 kr

**Foreløpig vurdering:**
Selv om Tilbud B har lavere nominell rente (4,8% vs 5,0%), har det mye høyere totale gebyrer (12 000 kr vs 5 000 kr).

**Hva bør bedriften vurdere:**

1. **Effektiv rente:** Be banken om effektiv rente på begge lån. Dette inkluderer alle kostnader og gjør sammenligning enkel.

2. **Rentekostnader:** Med 1 000 000 kr betyr 0,2% renteforskjell ca. 2 000 kr per år i renter (avhengig av nedbetalingsform). Over 5 år er det ca. 10 000 kr.

3. **Total kostnad:**
   - Tilbud A: Høyere rente, men lavere gebyrer
   - Tilbud B: Lavere rente, men høye gebyrer

**Estimat:**
- Tilbud A: 5 000 kr gebyrer + høyere renter
- Tilbud B: 12 000 kr gebyrer − rentebesparelse ca. 10 000 kr ≈ 2 000 kr dyrere

**Anbefaling:**
Tilbud A virker billigst totalt sett. Men bedriften må sjekke den effektive renten for å være sikker. Den effektive renten tar hensyn til alt og gjør valget enkelt.`
    },
    // --- Samleoppgaver ---
    {
      type: 'classic',
      id: 'oks-5-4-s1',
      content: `**Transport AS** tar opp et lån på 800 000 kr til kjøp av varebil. To alternativer:

**Alternativ 1: Annuitetslån**
- 6% rente, 4 års løpetid
- Like store årlige terminbeløp: 230 944 kr

**Alternativ 2: Serielån**
- 6% rente, 4 års løpetid
- Like store avdrag

a) Beregn terminbeløp for serielånet i år 1 og år 4
b) Beregn totale rentekostnader for begge lån
c) Hvilken låneform vil du anbefale, og hvorfor?`,
      solution: `**a) Serielån – terminbeløp:**

Avdrag per år = 800 000 / 4 = 200 000 kr

**År 1:**
Restgjeld start: 800 000 kr
Renter: 800 000 × 6% = 48 000 kr
Avdrag: 200 000 kr
Terminbeløp: 48 000 + 200 000 = 248 000 kr

**År 2:**
Restgjeld: 600 000 kr
Renter: 600 000 × 6% = 36 000 kr
Terminbeløp: 236 000 kr

**År 3:**
Restgjeld: 400 000 kr
Renter: 400 000 × 6% = 24 000 kr
Terminbeløp: 224 000 kr

**År 4:**
Restgjeld: 200 000 kr
Renter: 200 000 × 6% = 12 000 kr
Terminbeløp: 212 000 kr

**b) Totale rentekostnader:**

**Serielån:**
48 000 + 36 000 + 24 000 + 12 000 = 120 000 kr

**Annuitetslån:**
Total betaling: 230 944 × 4 = 923 776 kr
Lånebeløp: 800 000 kr
Rentekostnader: 923 776 − 800 000 = 123 776 kr

**c) Anbefaling:**

**Serielån:**
- Lavere totale renter (120 000 kr vs 123 776 kr)
- Høyere betalinger i starten (248 000 kr første år)
- Synkende terminbeløp gir økende likviditet over tid

**Annuitetslån:**
- Forutsigbare betalinger (230 944 kr hvert år)
- Litt høyere totale renter (3 776 kr mer)
- Enklere å budsjettere

**Anbefaling:**
Hvis Transport AS har god likviditet og kan håndtere 248 000 kr første år, er **serielån** best. Bedriften sparer 3 776 kr i renter, og betalingene synker hvert år.

Hvis bedriften har stram økonomi og trenger forutsigbarhet, er **annuitetslån** tryggere. Forskjellen i rentekostnader er liten (under 4 000 kr totalt).`
    },
    {
      type: 'classic',
      id: 'oks-5-4-s2',
      content: `**Oppstartsbedrift Innovasjon AS** har følgende gjeld:

- Banklån: 500 000 kr til 5% rente
- Kassakreditt (trukket): 150 000 kr til 10% rente
- Kredittkort (bedriftskort): 30 000 kr til 22% rente

Bedriften får uventet inn 100 000 kr fra en kunde og vil bruke pengene til å betale ned gjeld.

a) Beregn årlige rentekostnader på hver gjeld
b) Hvilken gjeld bør bedriften betale ned først? Begrunn.
c) Hvor mye sparer bedriften årlig i renter ved å følge din anbefaling?`,
      solution: `**a) Årlige rentekostnader:**

**Banklån:**
500 000 × 5% = 25 000 kr per år

**Kassakreditt:**
150 000 × 10% = 15 000 kr per år

**Kredittkort:**
30 000 × 22% = 6 600 kr per år

**Total rentekostnad per år:** 25 000 + 15 000 + 6 600 = 46 600 kr

**b) Nedbetalingsstrategi:**

**Prinsipp:** Betal ned den dyreste gjelden først (høyest rente).

**Rekkefølge:**
1. **Kredittkort (22%):** Betal ned 30 000 kr
2. **Kassakreditt (10%):** Betal ned 70 000 kr (av de resterende 100 000 − 30 000)
3. **Banklån (5%):** Betal sist (lavest rente)

**Nedbetaling:**
- Kredittkort: 30 000 kr (helt nedbetalt)
- Kassakreditt: 70 000 kr (restgjeld 80 000 kr)
- Banklån: 0 kr (ingen nedbetaling ennå)

**c) Besparelse i rentekostnader:**

**Før nedbetaling:**
- Kredittkort: 30 000 × 22% = 6 600 kr
- Kassakreditt: 150 000 × 10% = 15 000 kr
- Sum: 21 600 kr per år

**Etter nedbetaling:**
- Kredittkort: 0 × 22% = 0 kr (nedbetalt)
- Kassakreditt: 80 000 × 10% = 8 000 kr
- Sum: 8 000 kr per år

**Årlig besparelse:** 21 600 − 8 000 = 13 600 kr

Ved å betale ned de dyreste lånene først sparer bedriften **13 600 kr per år** i rentekostnader!

**Alternativ strategi (feil):**
Hvis bedriften hadde betalt ned banklånet (lavest rente) ville besparelsen vært:
100 000 × 5% = 5 000 kr per år

Dette viser viktigheten av å prioritere dyr gjeld.`
    }
  ]
};

/**
 * KAPITTEL 5.5: Investering og lønnsomhetsberegninger
 * Lærer elevene å vurdere investeringer ved hjelp av nåverdi og internrente
 */
const CHAPTER_OKONOMISTYRING_5_5: TextbookChapter = {
  id: 'oks-5-5',
  title: 'Investering og lønnsomhetsberegninger',
  subject: 'okonomistyring',
  level: 'vg2',
  section: 5,
  chapter: 5,
  estimatedMinutes: 20,
  content: [
    {
      type: 'text',
      id: 'oks-5-5-intro',
      content: `# Investering og lønnsomhetsberegninger

Når en bedrift vurderer å investere i maskiner, bygninger eller andre prosjekter, må den beregne om investeringen er **lønnsom**. Dette krever metoder for å sammenligne kostnader nå med framtidig inntjening.`
    },
    {
      type: 'text',
      id: 'oks-5-5-nåverdi',
      content: `## Nåverdi (NPV)

**Nåverdi** (Net Present Value, NPV) beregner verdien av framtidige kontantstrømmer i dagens kroner.

**Hvorfor trenger vi nåverdi?**
1 000 kr i dag er mer verdt enn 1 000 kr om 5 år, fordi:
- Pengene kan investeres og gi avkastning
- Inflasjon reduserer kjøpekraften

**Nåverdiformel:**
$$\\text{NV} = \\frac{K_1}{(1+r)^1} + \\frac{K_2}{(1+r)^2} + \\ldots + \\frac{K_n}{(1+r)^n} - I_0$$

Der:
- $K_1, K_2, \\ldots, K_n$ = kontantstrømmer (inntekter minus kostnader) i år 1, 2, ..., n
- $r$ = kalkulasjonsrente (avkastningskrav)
- $n$ = antall år
- $I_0$ = investeringsbeløp

**Tommelfingerregel:**
- NV > 0: Investeringen er lønnsom
- NV = 0: Investeringen går i null
- NV < 0: Investeringen er ulønnsom`
    },
    {
      type: 'example',
      id: 'oks-5-5-ex-nv',
      content: `**Eksempel: Nåverdi**

**Snekkerverksted AS** vurderer å kjøpe en høvlemaskin for 200 000 kr. Maskinen gir følgende netto kontantstrøm (inntekter minus driftskostnader):

- År 1: 80 000 kr
- År 2: 80 000 kr
- År 3: 60 000 kr
- År 4: 40 000 kr

Kalkulasjonsrenten er 8% (bedriftens avkastningskrav).

**Beregning:**

$$\\text{NV} = \\frac{80\\,000}{1,08^1} + \\frac{80\\,000}{1,08^2} + \\frac{60\\,000}{1,08^3} + \\frac{40\\,000}{1,08^4} - 200\\,000$$

$$= \\frac{80\\,000}{1,08} + \\frac{80\\,000}{1,1664} + \\frac{60\\,000}{1,2597} + \\frac{40\\,000}{1,3605} - 200\\,000$$

$$= 74\\,074 + 68\\,587 + 47\\,625 + 29\\,399 - 200\\,000$$

$$= 219\\,685 - 200\\,000 = 19\\,685 \\text{ kr}$$

**Konklusjon:**
Nåverdien er **positiv** (19 685 kr), så investeringen er lønnsom. Bedriften bør kjøpe maskinen.`
    },
    {
      type: 'text',
      id: 'oks-5-5-internrente',
      content: `## Internrente (IRR)

**Internrente** (Internal Rate of Return, IRR) er den renten som gir nåverdi lik null. Det er investeringens **avkastning**.

**Hvordan bruker vi internrente?**
Sammenlign internrenten med kalkulasjonsrenten (avkastningskravet):

- IRR > kalkulasjonsrente: Investeringen er lønnsom
- IRR = kalkulasjonsrente: Investeringen går i null
- IRR < kalkulasjonsrente: Investeringen er ulønnsom

**Beregning:**
Internrenten finnes ved prøving og feiling, eller med finanskalkulator/Excel-funksjonen IRR().

**Fordel:** Lett å sammenligne med andre investeringer (f.eks. bankinnskudd, aksjer).`
    },
    {
      type: 'example',
      id: 'oks-5-5-ex-irr',
      content: `**Eksempel: Internrente**

Vi fortsetter med høvlemaskinen fra forrige eksempel:

- Investering: 200 000 kr
- Kontantstrøm: 80 000, 80 000, 60 000, 40 000 kr

**Beregning av internrente:**

Vi setter opp ligningen for NV = 0 og løser for $r$:

$$0 = \\frac{80\\,000}{(1+r)^1} + \\frac{80\\,000}{(1+r)^2} + \\frac{60\\,000}{(1+r)^3} + \\frac{40\\,000}{(1+r)^4} - 200\\,000$$

Ved prøving (eller med kalkulator):

**Test r = 10%:**
NV = 220 981 − 200 000 = 20 981 kr (for høy NV)

**Test r = 12%:**
NV = 213 419 − 200 000 = 13 419 kr (fortsatt for høy)

**Test r = 15%:**
NV = 202 836 − 200 000 = 2 836 kr (nesten null)

**Test r = 16%:**
NV = 199 824 − 200 000 = −176 kr (negativ)

**Internrenten er ca. 15,9%**

**Tolkning:**
Investeringen gir en avkastning på ca. 16% per år. Dette er mye høyere enn kalkulasjonsrenten (8%), så investeringen er svært lønnsom.`
    },
    {
      type: 'text',
      id: 'oks-5-5-tilbake',
      content: `## Tilbakebetalingstid

**Tilbakebetalingstid** (payback period) er hvor lang tid det tar før investeringen er tjent inn.

**Beregning:**
Tell antall år før summen av kontantstrømmer = investeringsbeløp.

**Fordeler:**
- Enkel å beregne
- Lett å forstå
- Viser risiko (kort tilbakebetalingstid = lavere risiko)

**Ulemper:**
- Tar ikke hensyn til tidsverdien av penger
- Ignorerer kontantstrømmer etter tilbakebetalingstid
- Ikke et fullstendig lønnsomhetsmål

**Brukes ofte som supplement** til nåverdi og internrente.`
    },
    {
      type: 'example',
      id: 'oks-5-5-ex-tilbake',
      content: `**Eksempel: Tilbakebetalingstid**

Høvlemaskinen fra eksempelet:

- Investering: 200 000 kr
- Kontantstrøm: 80 000, 80 000, 60 000, 40 000 kr

**Beregning:**

**Etter år 1:** 80 000 kr (akkumulert)
**Etter år 2:** 80 000 + 80 000 = 160 000 kr
**Etter år 3:** 160 000 + 60 000 = 220 000 kr

Investeringen (200 000 kr) er tjent inn mellom år 2 og år 3.

**Mer nøyaktig:**
Etter år 2 mangler: 200 000 − 160 000 = 40 000 kr
År 3 gir: 60 000 kr
Del av år 3: 40 000 / 60 000 = 0,67 år ≈ 8 måneder

**Tilbakebetalingstid:** Ca. 2 år og 8 måneder

**Tolkning:**
Etter knapt 3 år er investeringen tjent inn. Dette er akseptabelt for de fleste bedrifter.`
    },
    {
      type: 'text',
      id: 'oks-5-5-sammenligning',
      content: `## Sammenligning av metoder

**Nåverdi (NV):**
- Viser investeringens verdi i kroner
- Tar hensyn til tidsverdien av penger
- Krever kalkulasjonsrente
- **Anbefales** for investeringsbeslutninger

**Internrente (IRR):**
- Viser investeringens avkastning i prosent
- Lett å sammenligne med andre investeringer
- Kan gi feil svar ved uvanlige kontantstrømmer
- God for å kommunisere lønnsomhet

**Tilbakebetalingstid:**
- Enkel og intuitiv
- Viser risiko
- Ignorerer tidsverdien av penger
- Brukes som supplement

**Anbefaling:**
Bruk **nåverdi** som hovedmetode. Bruk internrente og tilbakebetalingstid som tilleggsinformasjon.`
    },
    {
      type: 'text',
      id: 'oks-5-5-kalkulasjonsrente',
      content: `## Valg av kalkulasjonsrente

**Kalkulasjonsrenten** (diskonteringsrenten) representerer bedriftens **avkastningskrav** – den minste avkastningen bedriften krever for å investere.

**Hvordan bestemme kalkulasjonsrente?**

**Metode 1: Alternativkostnad**
Hva kunne pengene gitt i alternativ investering?
- Bankinnskudd: 3-4%
- Aksjer: 8-10%
- Annen investering i bedriften: varierer

**Metode 2: Kapitalkostnad (WACC)**
Veid gjennomsnitt av kostnaden på egenkapital og lånekapital.

**Metode 3: Risikojustert rente**
Legge risikopremie til risikofri rente:
- Trygg investering: Lav kalkulasjonsrente (5-8%)
- Risikabel investering: Høy kalkulasjonsrente (10-15%)

**Tommelfingerregel:**
De fleste bedrifter bruker 8-12% kalkulasjonsrente for vanlige investeringer.`
    },
    {
      type: 'text',
      id: 'oks-5-5-andre',
      content: `## Andre faktorer i investeringsbeslutninger

Selv om en investering er lønnsom (positiv NV), må bedriften vurdere:

**Likviditet:**
Har bedriften råd til investeringen uten å få likviditetsproblemer?

**Strategi:**
Passer investeringen inn i bedriftens langsiktige planer?

**Risiko:**
Hvor sikre er de framtidige kontantstrømmene? Hva hvis markedet endres?

**Ikke-økonomiske faktorer:**
- Miljøhensyn
- Arbeidsmiljø
- Omdømme
- Teknologisk utvikling

**Konkurransesituasjonen:**
Vil konkurrentene investere? Må vi investere for å henge med?

Økonomiske beregninger er viktige, men ikke det eneste grunnlaget for investeringsbeslutninger.`
    }
  ],
  exercises: [
    {
      type: 'multiple-choice',
      id: 'oks-5-5-mc1',
      content: 'Hva betyr det hvis en investering har positiv nåverdi (NV > 0)?',
      options: [
        'Investeringen går i null',
        'Investeringen er ulønnsom',
        'Investeringen er lønnsom',
        'Investeringen har for høy risiko'
      ],
      correctAnswer: 2,
      explanation: 'Positiv nåverdi betyr at investeringen gir mer avkastning enn kalkulasjonsrenten krever, og er derfor lønnsom.'
    },
    {
      type: 'classic',
      id: 'oks-5-5-c1',
      content: `**Gartner AS** vurderer å investere i et drivhus for 150 000 kr. Drivhuset vil gi følgende netto kontantstrøm:

- År 1: 50 000 kr
- År 2: 60 000 kr
- År 3: 70 000 kr

Beregn tilbakebetalingstid for investeringen.`,
      solution: `**Beregning av tilbakebetalingstid:**

**Etter år 1:**
Akkumulert kontantstrøm: 50 000 kr

**Etter år 2:**
Akkumulert kontantstrøm: 50 000 + 60 000 = 110 000 kr

**Etter år 3:**
Akkumulert kontantstrøm: 110 000 + 70 000 = 180 000 kr

Investeringen (150 000 kr) er tjent inn i løpet av år 3.

**Mer nøyaktig:**
Etter år 2 mangler: 150 000 − 110 000 = 40 000 kr
År 3 gir: 70 000 kr
Del av år 3: 40 000 / 70 000 = 0,57 år ≈ 7 måneder

**Tilbakebetalingstid:** 2 år og 7 måneder

**Tolkning:**
Investeringen er tjent inn på knapt 3 år. Dette er en akseptabel tilbakebetalingstid for de fleste bedrifter.`
    },
    {
      type: 'classic',
      id: 'oks-5-5-c2',
      content: `**IT-Konsulent AS** vurderer å investere 100 000 kr i ny programvare. Programvaren gir følgende kontantstrøm:

- År 1: 40 000 kr
- År 2: 50 000 kr
- År 3: 30 000 kr

Kalkulasjonsrenten er 10%.

a) Beregn nåverdien av investeringen
b) Er investeringen lønnsom?`,
      solution: `**a) Beregning av nåverdi:**

$$\\text{NV} = \\frac{40\\,000}{1,10^1} + \\frac{50\\,000}{1,10^2} + \\frac{30\\,000}{1,10^3} - 100\\,000$$

År 1: 40 000 / 1,10 = 36 364 kr
År 2: 50 000 / 1,21 = 41 322 kr
År 3: 30 000 / 1,331 = 22 537 kr

Sum nåverdi av kontantstrømmer: 36 364 + 41 322 + 22 537 = 100 223 kr

Nåverdi: 100 223 − 100 000 = **223 kr**

**b) Er investeringen lønnsom?**

Ja, investeringen er (marginalt) lønnsom fordi nåverdien er positiv (223 kr > 0).

**Vurdering:**
Nåverdien er svært lav (223 kr). Dette betyr at investeringen akkurat så vidt oppfyller avkastningskravet på 10%. Bedriften bør vurdere:

- Er kontantstrømmene sikre? Små endringer kan gjøre investeringen ulønnsom
- Finnes det bedre investeringsalternativer?
- Er det andre fordeler (effektivisering, kvalitet) som ikke fanges opp i tall?

Med så lav nåverdi er dette en grensecase.`
    },
    {
      type: 'multiple-choice',
      id: 'oks-5-5-mc2',
      content: 'Hva er forskjellen mellom nåverdi (NV) og internrente (IRR)?',
      options: [
        'NV måles i kroner, IRR måles i prosent',
        'NV brukes for lån, IRR brukes for investeringer',
        'NV krever kalkulasjonsrente, IRR krever ikke det',
        'NV og IRR er samme beregning'
      ],
      correctAnswer: 0,
      explanation: 'NV viser investeringens verdi i kroner, mens IRR viser investeringens avkastning i prosent. Begge brukes for investeringsbeslutninger.'
    },
    {
      type: 'classic',
      id: 'oks-5-5-c3',
      content: 'Forklar hvorfor 100 000 kr i dag er mer verdt enn 100 000 kr om 5 år. Gi minst to grunner.',
      solution: `**Hvorfor er 100 000 kr i dag mer verdt enn 100 000 kr om 5 år?**

**1. Alternativkostnad / Avkastningsmulighet:**
Hvis du har 100 000 kr i dag, kan du investere dem og få avkastning. For eksempel:
- Bankinnskudd til 4% gir etter 5 år: 100 000 × 1,04^5 = 121 665 kr
- Aksjer til 8% gir etter 5 år: 100 000 × 1,08^5 = 146 933 kr

Så 100 000 kr i dag kan bli til 120 000-150 000 kr om 5 år, avhengig av investeringen.

**2. Inflasjon:**
Inflasjon reduserer kjøpekraften over tid. Hvis inflasjonen er 2% per år:
- 100 000 kr i dag har kjøpekraft som 100 000 kr
- 100 000 kr om 5 år har kjøpekraft som 100 000 / 1,02^5 ≈ 90 573 kr

Du kan kjøpe mindre for pengene om 5 år.

**3. Usikkerhet:**
Det er usikkerhet knyttet til framtiden:
- Vil du faktisk få pengene om 5 år?
- Kan den som skal betale gå konkurs?
- Kan det skje uforutsette hendelser?

Penger i dag er sikre, penger i framtiden er usikre.

**Konklusjon:**
Derfor må vi **diskontere** (redusere) framtidige kontantstrømmer når vi beregner nåverdi – for å ta hensyn til at penger i dag er mer verdt enn penger i framtiden.`
    },
    // --- Samleoppgaver ---
    {
      type: 'classic',
      id: 'oks-5-5-s1',
      content: `**Bakeri AS** vurderer å kjøpe en ny stekeovn for 300 000 kr. Ovnen har en levetid på 5 år og vil gi følgende netto kontantstrøm (inntekter minus driftskostnader):

- År 1: 80 000 kr
- År 2: 90 000 kr
- År 3: 90 000 kr
- År 4: 70 000 kr
- År 5: 50 000 kr

Kalkulasjonsrenten er 9%.

a) Beregn nåverdien av investeringen
b) Beregn tilbakebetalingstid
c) Basert på disse beregningene, bør bakeriet investere? Begrunn svaret.`,
      solution: `**a) Beregning av nåverdi:**

$$\\text{NV} = \\frac{80\\,000}{1,09^1} + \\frac{90\\,000}{1,09^2} + \\frac{90\\,000}{1,09^3} + \\frac{70\\,000}{1,09^4} + \\frac{50\\,000}{1,09^5} - 300\\,000$$

År 1: 80 000 / 1,09 = 73 394 kr
År 2: 90 000 / 1,1881 = 75 754 kr
År 3: 90 000 / 1,2950 = 69 498 kr
År 4: 70 000 / 1,4116 = 49 590 kr
År 5: 50 000 / 1,5386 = 32 496 kr

Sum nåverdi av kontantstrømmer: 73 394 + 75 754 + 69 498 + 49 590 + 32 496 = 300 732 kr

Nåverdi: 300 732 − 300 000 = **732 kr**

**b) Tilbakebetalingstid:**

**Etter år 1:** 80 000 kr
**Etter år 2:** 80 000 + 90 000 = 170 000 kr
**Etter år 3:** 170 000 + 90 000 = 260 000 kr
**Etter år 4:** 260 000 + 70 000 = 330 000 kr

Investeringen (300 000 kr) er tjent inn i løpet av år 4.

**Mer nøyaktig:**
Etter år 3 mangler: 300 000 − 260 000 = 40 000 kr
År 4 gir: 70 000 kr
Del av år 4: 40 000 / 70 000 = 0,57 år ≈ 7 måneder

**Tilbakebetalingstid:** 3 år og 7 måneder

**c) Bør bakeriet investere?**

**Argumenter for investering:**
- Nåverdien er positiv (732 kr), så investeringen er teknisk sett lønnsom
- Tilbakebetalingstiden er akseptabel (under 4 år av 5 års levetid)
- Ovnen vil gi kontantstrøm i hele levetiden

**Argumenter mot / forsiktighet:**
- Nåverdien er svært lav (732 kr av 300 000 kr investering = 0,24%)
- Dette betyr at investeringen akkurat så vidt oppfyller avkastningskravet
- Små endringer i kontantstrømmer eller rente kan gjøre investeringen ulønnsom
- Risiko: Hvis kontantstrømmene blir 1-2% lavere, blir NV negativ

**Anbefaling:**
Økonomisk er dette en grensecase. Bakeriet bør vurdere:

1. **Er tallene realistiske?** Kan ovnen virkelig gi disse kontantstrømmene?
2. **Finnes det bedre alternativer?** Andre ovner eller investeringer?
3. **Andre fordeler:** Bedre brødkvalitet, mer kapasitet, arbeidsmiljø?
4. **Nødvendighet:** Må de gamle ovnene byttes ut uansett?

Hvis ovnen er nødvendig og tallene er konservative (forsiktige), bør de investere. Hvis det finnes usikkerhet, bør de vurdere andre alternativer.`
    },
    {
      type: 'classic',
      id: 'oks-5-5-s2',
      content: `**Transport Service AS** sammenligner to varebiler:

**Varebil A:**
- Pris: 400 000 kr
- Driftskostnader: 60 000 kr per år
- Levetid: 5 år
- Salgsverdi etter 5 år: 100 000 kr

**Varebil B:**
- Pris: 500 000 kr
- Driftskostnader: 40 000 kr per år (lavere fordi den er mer moderne)
- Levetid: 5 år
- Salgsverdi etter 5 år: 150 000 kr

Begge bilene gir samme inntekter. Kalkulasjonsrenten er 8%.

Hvilken bil bør bedriften velge? Bruk nåverdiberegning til å begrunne svaret.`,
      solution: `**Analyse:**

Siden begge bilene gir samme inntekter, sammenligner vi kun **kostnadene**. Vi beregner nåverdien av totale kostnader for hver bil.

**Varebil A:**

**Investeringskostnad:** 400 000 kr (år 0)

**Driftskostnader:** 60 000 kr per år i 5 år
Nåverdi av driftskostnader:
- År 1: 60 000 / 1,08 = 55 556 kr
- År 2: 60 000 / 1,1664 = 51 440 kr
- År 3: 60 000 / 1,2597 = 47 630 kr
- År 4: 60 000 / 1,3605 = 44 102 kr
- År 5: 60 000 / 1,4693 = 40 835 kr
- Sum: 239 563 kr

**Salgsverdi år 5:** 100 000 kr
Nåverdi: 100 000 / 1,4693 = 68 058 kr

**Total nåverdi av kostnader:**
400 000 + 239 563 − 68 058 = **571 505 kr**

---

**Varebil B:**

**Investeringskostnad:** 500 000 kr (år 0)

**Driftskostnader:** 40 000 kr per år i 5 år
Nåverdi av driftskostnader:
- År 1: 40 000 / 1,08 = 37 037 kr
- År 2: 40 000 / 1,1664 = 34 294 kr
- År 3: 40 000 / 1,2597 = 31 753 kr
- År 4: 40 000 / 1,3605 = 29 401 kr
- År 5: 40 000 / 1,4693 = 27 223 kr
- Sum: 159 708 kr

**Salgsverdi år 5:** 150 000 kr
Nåverdi: 150 000 / 1,4693 = 102 088 kr

**Total nåverdi av kostnader:**
500 000 + 159 708 − 102 088 = **557 620 kr**

---

**Sammenligning:**

Varebil A: 571 505 kr (nåverdi av kostnader)
Varebil B: 557 620 kr (nåverdi av kostnader)

**Forskjell:** 571 505 − 557 620 = 13 885 kr

**Konklusjon:**

**Varebil B er billigst** når vi tar hensyn til tidsverdien av penger. Selv om den koster 100 000 kr mer å kjøpe, sparer bedriften:
- 20 000 kr per år i driftskostnader (5 år = 100 000 kr)
- 50 000 kr høyere salgsverdi etter 5 år

Når dette diskonteres til nåverdi, er Varebil B ca. 14 000 kr billigere totalt sett.

**Anbefaling:**
Bedriften bør velge **Varebil B**. Den er mer moderne, billigere i drift, og har lavere totalkostnad over levetiden.`
    }
  ]
};

export const OKONOMISTYRING_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_OKONOMISTYRING_5_1,
  CHAPTER_OKONOMISTYRING_5_2,
  CHAPTER_OKONOMISTYRING_5_3,
  CHAPTER_OKONOMISTYRING_5_4,
  CHAPTER_OKONOMISTYRING_5_5,
];
