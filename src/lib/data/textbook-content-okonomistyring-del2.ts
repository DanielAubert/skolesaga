/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Økonomistyring (VG2) - Del 2
 * Seksjon 2: Resultat og balanse
 * Følger LK20 læreplan (NOK02-03)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1: Resultatregnskapet
// ============================================================================

const CHAPTER_OKONOMISTYRING_2_1: TextbookChapter = {
  id: 'okonomistyring-2-1',
  chapterNumber: '2.1',
  title: 'Resultatregnskapet',
  subject: 'Økonomistyring',
  level: 'VG2',
  duration: '25 min',
  content: [
    {
      id: 'oks-2-1-intro',
      type: 'text',
      title: 'Innledning',
      content: `Resultatregnskapet er en oversikt over bedriftens inntekter og kostnader i en bestemt periode, vanligvis ett år. Det viser om bedriften har gått med overskudd eller underskudd.

Formålet med resultatregnskapet er å gi et bilde av bedriftens lønnsomhet og vise hvordan bedriften har prestert i løpet av året.`,
    },
    {
      id: 'oks-2-1-driftsinntekter',
      type: 'text',
      title: 'Driftsinntekter',
      content: `Driftsinntekter er inntekter som kommer fra bedriftens hovedvirksomhet. For de fleste bedrifter er dette salgsinntekter.

**Vanlige driftsinntekter:**
- Salgsinntekter (omsetning)
- Andre driftsinntekter (f.eks. leieinntekter)

Salgsinntekter måles som:
$$\\text{Salgsinntekter} = \\text{Antall solgte enheter} \\times \\text{Pris per enhet}$$

For eksempel: En butikk som selger 1000 enheter à kr 250 får salgsinntekter på kr 250 000.`,
    },
    {
      id: 'oks-2-1-driftskostnader',
      type: 'text',
      title: 'Driftskostnader',
      content: `Driftskostnader er kostnader knyttet til bedriftens hovedvirksomhet. Disse deles ofte inn i flere kategorier:

**Vanlige driftskostnader:**
- Varekostnad (hva bedriften betaler for varene den selger)
- Lønnskostnad (lønn til ansatte)
- Avskrivninger (verdifall på maskiner og utstyr)
- Andre driftskostnader (husleie, strøm, reklame, forsikring, osv.)

Varekostnaden beregnes slik:
$$\\text{Varekostnad} = \\text{Beholdning} + \\text{Innkjøp} - \\text{Slutt beholdning}$$`,
    },
    {
      id: 'oks-2-1-driftsresultat',
      type: 'text',
      title: 'Driftsresultat',
      content: `Driftsresultatet viser om bedriftens kjernevirksomhet går med overskudd eller underskudd.

$$\\text{Driftsresultat} = \\text{Driftsinntekter} - \\text{Driftskostnader}$$

Et positivt driftsresultat betyr at bedriften tjener penger på sin hovedvirksomhet. Et negativt driftsresultat betyr at bedriften taper penger på driften.`,
    },
    {
      id: 'oks-2-1-ex1',
      type: 'exercise',
      title: 'Oppgave 1: Beregn driftsresultat',
      content: 'En bedrift har salgsinntekter på kr 800 000, varekostnad på kr 400 000, lønnskostnad på kr 200 000 og andre driftskostnader på kr 150 000. Hva er driftsresultatet?',
      difficulty: 'medium',
      exerciseType: 'classic',
      subject: 'Økonomistyring',
      level: 'VG2',
      solution: {
        content: `**Løsning:**

Driftsinntekter: kr 800 000

Driftskostnader:
- Varekostnad: kr 400 000
- Lønnskostnad: kr 200 000
- Andre driftskostnader: kr 150 000
- Sum driftskostnader: kr 750 000

$$\\text{Driftsresultat} = 800\\,000 - 750\\,000 = 50\\,000$$

Driftsresultatet er kr 50 000 (overskudd).`,
      },
    },
    {
      id: 'oks-2-1-finansposter',
      type: 'text',
      title: 'Finansposter',
      content: `Finansposter er inntekter og kostnader som ikke kommer fra bedriftens kjernevirksomhet, men fra finansielle aktiviteter.

**Finansinntekter:**
- Renteinntekter (på bankinnskudd)
- Utbytte (fra aksjer bedriften eier)

**Finanskostnader:**
- Rentekostnader (på lån)

$$\\text{Finansresultat} = \\text{Finansinntekter} - \\text{Finanskostnader}$$`,
    },
    {
      id: 'oks-2-1-aarsresultat',
      type: 'text',
      title: 'Årsresultat',
      content: `Årsresultatet er bedriftens totale overskudd eller underskudd for året.

$$\\text{Årsresultat} = \\text{Driftsresultat} + \\text{Finansresultat}$$

Årsresultatet viser den totale verdiskapningen i bedriften og overføres til egenkapitalen i balansen.`,
    },
    {
      id: 'oks-2-1-ex2',
      type: 'exercise',
      title: 'Oppgave 2: Finansposter',
      content: 'En bedrift har driftsresultat på kr 120 000, renteinntekter på kr 5 000 og rentekostnader på kr 18 000. Hva er årsresultatet?',
      difficulty: 'medium',
      exerciseType: 'multiple-choice',
      subject: 'Økonomistyring',
      level: 'VG2',
      question: 'Hva er årsresultatet?',
      options: [
        'kr 97 000',
        'kr 107 000',
        'kr 125 000',
        'kr 143 000',
      ],
      correctAnswer: 0,
      solution: {
        content: `**Løsning:**

Driftsresultat: kr 120 000

Finansresultat:
- Renteinntekter: kr 5 000
- Rentekostnader: kr -18 000
- Finansresultat: kr -13 000

$$\\text{Årsresultat} = 120\\,000 + (-13\\,000) = 107\\,000$$

Årsresultatet er kr 107 000.

**Svar: kr 107 000**`,
      },
    },
    {
      id: 'oks-2-1-oppstilling',
      type: 'text',
      title: 'Oppstillingsplan',
      content: `Resultatregnskapet følger en standardisert oppstilling:

**Resultatregnskap for [Bedriftsnavn] [År]**

| Post | Beløp (kr) |
|------|------------|
| Salgsinntekter | xxx |
| Varekostnad | -xxx |
| **Bruttofortjeneste** | **xxx** |
| Lønnskostnad | -xxx |
| Avskrivninger | -xxx |
| Andre driftskostnader | -xxx |
| **Driftsresultat** | **xxx** |
| Renteinntekter | xxx |
| Rentekostnader | -xxx |
| **Årsresultat** | **xxx** |

Bruttofortjenesten er forskjellen mellom salgsinntekter og varekostnad.`,
    },
    {
      id: 'oks-2-1-ex3',
      type: 'exercise',
      title: 'Oppgave 3: Bruttofortjeneste',
      content: 'En butikk har salgsinntekter på kr 500 000 og varekostnad på kr 320 000. Hva er bruttofortjenesten i prosent av omsetningen?',
      difficulty: 'medium',
      exerciseType: 'classic',
      subject: 'Økonomistyring',
      level: 'VG2',
      solution: {
        content: `**Løsning:**

$$\\text{Bruttofortjeneste} = 500\\,000 - 320\\,000 = 180\\,000$$

$$\\text{Bruttofortjeneste i \\%} = \\frac{180\\,000}{500\\,000} \\times 100\\% = 36\\%$$

Bruttofortjenesten er 36 % av omsetningen.`,
      },
    },
    {
      id: 'oks-2-1-ex4',
      type: 'exercise',
      title: 'Oppgave 4: Identifiser posttype',
      content: 'Hvilken type post er "husleie for butikklokale"?',
      difficulty: 'easy',
      exerciseType: 'multiple-choice',
      subject: 'Økonomistyring',
      level: 'VG2',
      question: 'Hvilken kategori hører husleie til?',
      options: [
        'Driftsinntekt',
        'Varekostnad',
        'Annen driftskostnad',
        'Finanskostnad',
      ],
      correctAnswer: 2,
      solution: {
        content: `**Løsning:**

Husleie for butikklokale er en kostnad knyttet til bedriftens drift, men det er ikke varekostnad eller lønnskostnad. Det klassifiseres derfor som "annen driftskostnad".

**Svar: Annen driftskostnad**`,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'oks-2-1-ex5',
      type: 'exercise',
      title: 'Oppgave 5: Komplett resultatregnskap',
      content: 'Bedriften AS har følgende tall for 2024: Salgsinntekter kr 2 400 000, varekostnad kr 1 200 000, lønnskostnad kr 600 000, avskrivninger kr 80 000, andre driftskostnader kr 320 000, renteinntekter kr 12 000, rentekostnader kr 45 000. Sett opp resultatregnskapet og finn årsresultatet.',
      difficulty: 'hard',
      exerciseType: 'classic',
      subject: 'Økonomistyring',
      level: 'VG2',
      solution: {
        content: `**Løsning:**

**Resultatregnskap for Bedriften AS 2024**

| Post | Beløp (kr) |
|------|------------|
| Salgsinntekter | 2 400 000 |
| Varekostnad | -1 200 000 |
| **Bruttofortjeneste** | **1 200 000** |
| Lønnskostnad | -600 000 |
| Avskrivninger | -80 000 |
| Andre driftskostnader | -320 000 |
| **Driftsresultat** | **200 000** |
| Renteinntekter | 12 000 |
| Rentekostnader | -45 000 |
| **Årsresultat** | **167 000** |

Årsresultatet er kr 167 000.`,
      },
    },
    {
      id: 'oks-2-1-ex6',
      type: 'exercise',
      title: 'Oppgave 6: Analyse av lønnsomhet',
      content: 'To bedrifter har begge omsetning på kr 1 000 000. Bedrift A har driftsresultat på kr 150 000, mens Bedrift B har driftsresultat på kr 80 000. Hvilken bedrift har best lønnsomhet målt i driftsmargin?',
      difficulty: 'hard',
      exerciseType: 'classic',
      subject: 'Økonomistyring',
      level: 'VG2',
      solution: {
        content: `**Løsning:**

Driftsmargin beregnes som:
$$\\text{Driftsmargin} = \\frac{\\text{Driftsresultat}}{\\text{Omsetning}} \\times 100\\%$$

**Bedrift A:**
$$\\text{Driftsmargin A} = \\frac{150\\,000}{1\\,000\\,000} \\times 100\\% = 15\\%$$

**Bedrift B:**
$$\\text{Driftsmargin B} = \\frac{80\\,000}{1\\,000\\,000} \\times 100\\% = 8\\%$$

Bedrift A har best lønnsomhet med en driftsmargin på 15 %, mot Bedrift B sine 8 %.`,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.2: Balansen
// ============================================================================

const CHAPTER_OKONOMISTYRING_2_2: TextbookChapter = {
  id: 'okonomistyring-2-2',
  chapterNumber: '2.2',
  title: 'Balansen',
  subject: 'Økonomistyring',
  level: 'VG2',
  duration: '25 min',
  content: [
    {
      id: 'oks-2-2-intro',
      type: 'text',
      title: 'Innledning',
      content: `Balansen er en oversikt over bedriftens økonomiske stilling på et bestemt tidspunkt, vanligvis ved årsslutt (31. desember). Den viser hva bedriften eier (eiendeler) og hvordan dette er finansiert (egenkapital og gjeld).

Balansen følger den grunnleggende ligningen:
$$\\text{Eiendeler} = \\text{Egenkapital} + \\text{Gjeld}$$`,
    },
    {
      id: 'oks-2-2-eiendeler',
      type: 'text',
      title: 'Eiendeler',
      content: `Eiendeler er alt bedriften eier som har økonomisk verdi. Eiendeler deles inn i to hovedkategorier:

**Anleggsmidler** - eiendeler bedriften skal ha i mer enn ett år:
- Varige driftsmidler (bygninger, maskiner, inventar, biler)
- Finansielle anleggsmidler (langsiktige investeringer, aksjer)

**Omløpsmidler** - eiendeler som normalt omsettes i løpet av ett år:
- Varelager (varer for salg)
- Kundefordringer (penger kunder skylder oss)
- Bankinnskudd (kontanter i banken)`,
    },
    {
      id: 'oks-2-2-ex1',
      type: 'exercise',
      title: 'Oppgave 1: Klassifiser eiendeler',
      content: 'Er "varelageret" et anleggsmiddel eller et omløpsmiddel?',
      difficulty: 'easy',
      exerciseType: 'multiple-choice',
      subject: 'Økonomistyring',
      level: 'VG2',
      question: 'Hvilken kategori tilhører varelageret?',
      options: [
        'Varige driftsmidler',
        'Finansielle anleggsmidler',
        'Omløpsmidler',
        'Kortsiktig gjeld',
      ],
      correctAnswer: 2,
      solution: {
        content: `**Løsning:**

Varelageret er varer som skal selges, og omsetningen skjer normalt i løpet av året. Derfor er varelager et omløpsmiddel.

**Svar: Omløpsmidler**`,
      },
    },
    {
      id: 'oks-2-2-gjeld',
      type: 'text',
      title: 'Gjeld',
      content: `Gjeld er forpliktelser bedriften har til andre. Gjeld deles inn i to kategorier:

**Langsiktig gjeld** - forpliktelser som skal betales om mer enn ett år:
- Banklån (f.eks. huslån, investeringslån)
- Obligasjonslån

**Kortsiktig gjeld** - forpliktelser som skal betales innen ett år:
- Leverandørgjeld (penger vi skylder leverandører)
- Skyldige offentlige avgifter (moms, skatt)
- Annen kortsiktig gjeld (påløpte kostnader)`,
    },
    {
      id: 'oks-2-2-egenkapital',
      type: 'text',
      title: 'Egenkapital',
      content: `Egenkapitalen er bedriftens nettoverdi - differansen mellom eiendeler og gjeld.

$$\\text{Egenkapital} = \\text{Eiendeler} - \\text{Gjeld}$$

For et enkeltpersonforetak består egenkapitalen av:
- Innskutt kapital (eierens kapitalinnskudd)
- Opptjent egenkapital (akkumulert overskudd/underskudd)

Årsresultatet fra resultatregnskapet legges til egenkapitalen. Ved underskudd reduseres egenkapitalen.`,
    },
    {
      id: 'oks-2-2-ex2',
      type: 'exercise',
      title: 'Oppgave 2: Beregn egenkapital',
      content: 'En bedrift har eiendeler på kr 850 000 og gjeld på kr 320 000. Hva er egenkapitalen?',
      difficulty: 'easy',
      exerciseType: 'classic',
      subject: 'Økonomistyring',
      level: 'VG2',
      solution: {
        content: `**Løsning:**

$$\\text{Egenkapital} = \\text{Eiendeler} - \\text{Gjeld}$$

$$\\text{Egenkapital} = 850\\,000 - 320\\,000 = 530\\,000$$

Egenkapitalen er kr 530 000.`,
      },
    },
    {
      id: 'oks-2-2-balanseoppstilling',
      type: 'text',
      title: 'Balanseoppstilling',
      content: `Balansen stilles opp med eiendeler på venstre side og egenkapital/gjeld på høyre side:

**Balanse per 31.12.2024**

| **EIENDELER** | **Beløp (kr)** | **EGENKAPITAL OG GJELD** | **Beløp (kr)** |
|---------------|----------------|--------------------------|----------------|
| **Anleggsmidler** | | **Egenkapital** | |
| Varige driftsmidler | xxx | Innskutt kapital | xxx |
| | | Opptjent egenkapital | xxx |
| **Sum anleggsmidler** | **xxx** | **Sum egenkapital** | **xxx** |
| | | | |
| **Omløpsmidler** | | **Gjeld** | |
| Varelager | xxx | Langsiktig gjeld | xxx |
| Kundefordringer | xxx | Kortsiktig gjeld | xxx |
| Bankinnskudd | xxx | | |
| **Sum omløpsmidler** | **xxx** | **Sum gjeld** | **xxx** |
| | | | |
| **Sum eiendeler** | **xxx** | **Sum EK og gjeld** | **xxx** |

Sum eiendeler må alltid være lik sum egenkapital og gjeld.`,
    },
    {
      id: 'oks-2-2-ex3',
      type: 'exercise',
      title: 'Oppgave 3: Balansekontroll',
      content: 'En balanse viser eiendeler på kr 1 200 000, egenkapital på kr 750 000 og langsiktig gjeld på kr 300 000. Hva må kortsiktig gjeld være for at balansen skal stemme?',
      difficulty: 'medium',
      exerciseType: 'classic',
      subject: 'Økonomistyring',
      level: 'VG2',
      solution: {
        content: `**Løsning:**

Balanseprinsippet:
$$\\text{Eiendeler} = \\text{Egenkapital} + \\text{Gjeld}$$

$$1\\,200\\,000 = 750\\,000 + 300\\,000 + \\text{Kortsiktig gjeld}$$

$$\\text{Kortsiktig gjeld} = 1\\,200\\,000 - 750\\,000 - 300\\,000 = 150\\,000$$

Kortsiktig gjeld må være kr 150 000.`,
      },
    },
    {
      id: 'oks-2-2-likviditet',
      type: 'text',
      title: 'Likviditet og soliditet',
      content: `To viktige mål på bedriftens finansielle stilling:

**Likviditet** - bedriftens evne til å betale kortsiktige forpliktelser:
$$\\text{Likviditetsgrad 2} = \\frac{\\text{Omløpsmidler}}{\\text{Kortsiktig gjeld}}$$

En likviditetsgrad over 2 regnes som god.

**Soliditet** - bedriftens langsiktige finansielle styrke:
$$\\text{Egenkapitalandel} = \\frac{\\text{Egenkapital}}{\\text{Sum eiendeler}} \\times 100\\%$$

En egenkapitalandel over 40 % regnes som solid.`,
    },
    {
      id: 'oks-2-2-ex4',
      type: 'exercise',
      title: 'Oppgave 4: Beregn likviditet',
      content: 'En bedrift har omløpsmidler på kr 400 000 og kortsiktig gjeld på kr 180 000. Hva er likviditetsgraden, og er den tilfredsstillende?',
      difficulty: 'medium',
      exerciseType: 'classic',
      subject: 'Økonomistyring',
      level: 'VG2',
      solution: {
        content: `**Løsning:**

$$\\text{Likviditetsgrad 2} = \\frac{400\\,000}{180\\,000} = 2.22$$

Likviditetsgraden er 2,22, som er over 2. Dette betyr at bedriften har god likviditet og kan enkelt betale sine kortsiktige forpliktelser.`,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'oks-2-2-ex5',
      type: 'exercise',
      title: 'Oppgave 5: Sett opp balanse',
      content: 'Bedriften har følgende poster per 31.12.2024: Varelager kr 120 000, kundefordringer kr 85 000, bankinnskudd kr 65 000, maskiner kr 450 000, inventar kr 130 000, leverandørgjeld kr 95 000, banklån (langsiktig) kr 400 000, egenkapital kr 355 000. Sett opp balansen og kontroller at den stemmer.',
      difficulty: 'hard',
      exerciseType: 'classic',
      subject: 'Økonomistyring',
      level: 'VG2',
      solution: {
        content: `**Løsning:**

**Balanse per 31.12.2024**

| **EIENDELER** | **Beløp (kr)** | **EGENKAPITAL OG GJELD** | **Beløp (kr)** |
|---------------|----------------|--------------------------|----------------|
| **Anleggsmidler** | | **Egenkapital** | 355 000 |
| Maskiner | 450 000 | | |
| Inventar | 130 000 | | |
| **Sum anleggsmidler** | **580 000** | | |
| | | **Gjeld** | |
| **Omløpsmidler** | | Langsiktig gjeld | 400 000 |
| Varelager | 120 000 | Kortsiktig gjeld | 95 000 |
| Kundefordringer | 85 000 | **Sum gjeld** | **495 000** |
| Bankinnskudd | 65 000 | | |
| **Sum omløpsmidler** | **270 000** | | |
| | | | |
| **Sum eiendeler** | **850 000** | **Sum EK og gjeld** | **850 000** |

Balansen stemmer: 850 000 = 850 000.`,
      },
    },
    {
      id: 'oks-2-2-ex6',
      type: 'exercise',
      title: 'Oppgave 6: Analyse av soliditet',
      content: 'En bedrift har sum eiendeler på kr 2 000 000 og egenkapital på kr 900 000. Beregn egenkapitalandelen og vurder soliditeten.',
      difficulty: 'medium',
      exerciseType: 'classic',
      subject: 'Økonomistyring',
      level: 'VG2',
      solution: {
        content: `**Løsning:**

$$\\text{Egenkapitalandel} = \\frac{900\\,000}{2\\,000\\,000} \\times 100\\% = 45\\%$$

Egenkapitalandelen er 45 %, som er over 40 %. Dette betyr at bedriften har god soliditet og er robust mot økonomiske nedgangstider. Over halvparten av eiendelene er finansiert med gjeld, men egenkapitalandelen er likevel tilfredsstillende.`,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.3: Sammenhengen mellom resultat og balanse
// ============================================================================

const CHAPTER_OKONOMISTYRING_2_3: TextbookChapter = {
  id: 'okonomistyring-2-3',
  chapterNumber: '2.3',
  title: 'Sammenhengen mellom resultat og balanse',
  subject: 'Økonomistyring',
  level: 'VG2',
  duration: '20 min',
  content: [
    {
      id: 'oks-2-3-intro',
      type: 'text',
      title: 'Innledning',
      content: `Resultatregnskapet og balansen henger tett sammen. Resultatregnskapet viser hva som har skjedd i løpet av året, mens balansen viser situasjonen på ett bestemt tidspunkt.

Den viktigste sammenhengen er at årsresultatet fra resultatregnskapet påvirker egenkapitalen i balansen.`,
    },
    {
      id: 'oks-2-3-resultat-egenkapital',
      type: 'text',
      title: 'Hvordan resultatet påvirker egenkapitalen',
      content: `Egenkapitalen endres fra år til år basert på:
1. Årsresultatet
2. Kapitalinnskudd eller uttak fra eier

**Egenkapitalendring:**
$$\\text{EK slutt} = \\text{EK start} + \\text{Årsresultat} + \\text{Innskudd} - \\text{Uttak}$$

**Overskudd** øker egenkapitalen, mens **underskudd** reduserer den.

**Eksempel:**
- Egenkapital 1.1.2024: kr 500 000
- Årsresultat 2024: kr 85 000 (overskudd)
- Eier tar ut: kr 40 000
- Egenkapital 31.12.2024: kr 500 000 + 85 000 - 40 000 = kr 545 000`,
    },
    {
      id: 'oks-2-3-ex1',
      type: 'exercise',
      title: 'Oppgave 1: Beregn egenkapital ved årsslutt',
      content: 'En bedrift har egenkapital ved årets start på kr 650 000. Årsresultatet er kr 120 000, og eier har tatt ut kr 60 000. Hva er egenkapitalen ved årsslutt?',
      difficulty: 'easy',
      exerciseType: 'classic',
      subject: 'Økonomistyring',
      level: 'VG2',
      solution: {
        content: `**Løsning:**

$$\\text{EK slutt} = \\text{EK start} + \\text{Årsresultat} - \\text{Uttak}$$

$$\\text{EK slutt} = 650\\,000 + 120\\,000 - 60\\,000 = 710\\,000$$

Egenkapitalen ved årsslutt er kr 710 000.`,
      },
    },
    {
      id: 'oks-2-3-kontant-vs-opptjening',
      type: 'text',
      title: 'Kontantprinsipp vs opptjeningsprinsipp',
      content: `Det er en viktig forskjell mellom når inntekter/kostnader registreres i regnskapet og når pengene faktisk betales:

**Opptjeningsprinsippet** (for resultatregnskapet):
- Inntekter registreres når de er **opptjent**, ikke nødvendigvis når pengene mottas
- Kostnader registreres når de er **pådratt**, ikke nødvendigvis når de betales

**Kontantprinsippet** (for kontantstrøm):
- Registrerer når pengene faktisk går inn eller ut av bedriften

**Eksempel:**
En bedrift selger varer for kr 100 000 på kreditt i desember.
- Resultatregnskapet: kr 100 000 i salgsinntekt (opptjent i desember)
- Bankkontoen: kr 0 (hvis kunden betaler i januar neste år)
- Balansen: kr 100 000 i kundefordringer`,
    },
    {
      id: 'oks-2-3-ex2',
      type: 'exercise',
      title: 'Oppgave 2: Opptjening vs kontant',
      content: 'En bedrift fakturerer en kunde kr 50 000 i desember 2024, men får betalt i januar 2025. I hvilket år skal inntekten registreres i resultatregnskapet?',
      difficulty: 'easy',
      exerciseType: 'multiple-choice',
      subject: 'Økonomistyring',
      level: 'VG2',
      question: 'Når skal inntekten registreres?',
      options: [
        'I 2024 (når fakturaen sendes)',
        'I 2025 (når betalingen mottas)',
        'Delt mellom 2024 og 2025',
        'Valgfritt for bedriften',
      ],
      correctAnswer: 0,
      solution: {
        content: `**Løsning:**

Ifølge opptjeningsprinsippet skal inntekten registreres når den er opptjent, altså når varen eller tjenesten er levert. Selv om betalingen kommer i 2025, ble inntekten opptjent i 2024.

I balansen per 31.12.2024 vil de kr 50 000 stå som kundefordring.

**Svar: I 2024 (når fakturaen sendes)**`,
      },
    },
    {
      id: 'oks-2-3-aarsoppgjoer',
      type: 'text',
      title: 'Årsoppgjørsdisposisjoner',
      content: `Ved årsoppgjøret gjøres det flere justeringer for å sikre at regnskapet følger opptjeningsprinsippet:

**Typiske årsoppgjørsdisposisjoner:**
1. **Avskrivninger** - fordeling av anskaffelseskost over levetiden
2. **Varetelling** - justering av varelager
3. **Periodisering** - fordeling av kostnader/inntekter på riktig periode
4. **Nedskrivninger** - verdifall på eiendeler
5. **Avsetninger** - for forventede kostnader

Disse disposisjonene sikrer at resultatregnskapet gir et riktig bilde av årets resultat.`,
    },
    {
      id: 'oks-2-3-ex3',
      type: 'exercise',
      title: 'Oppgave 3: Effekt på resultat og balanse',
      content: 'En bedrift kjøper varer for kr 200 000 på kreditt. Halvparten selges umiddelbart for kr 150 000 kontant. Hvordan påvirker dette resultatet og balansen?',
      difficulty: 'hard',
      exerciseType: 'classic',
      subject: 'Økonomistyring',
      level: 'VG2',
      solution: {
        content: `**Løsning:**

**Effekt på resultatregnskapet:**
- Salgsinntekter: +kr 150 000
- Varekostnad: -kr 100 000 (halvparten av innkjøpet)
- Effekt på resultat: +kr 50 000

**Effekt på balansen:**
- Bankinnskudd: +kr 150 000 (fra salg)
- Varelager: +kr 100 000 (den halvparten som ikke er solgt)
- Leverandørgjeld: +kr 200 000 (kjøpet på kreditt)
- Egenkapital: +kr 50 000 (fra årsresultatet)

Sum endring eiendeler: 150 000 + 100 000 = 250 000
Sum endring EK og gjeld: 50 000 + 200 000 = 250 000

Balansen stemmer.`,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'oks-2-3-ex4',
      type: 'exercise',
      title: 'Oppgave 4: Underskudd og egenkapital',
      content: 'En bedrift har egenkapital på kr 300 000 ved årets start. Bedriften går med underskudd på kr 85 000, og eier skyter inn kr 50 000 ny kapital. Hva er egenkapitalen ved årsslutt?',
      difficulty: 'medium',
      exerciseType: 'classic',
      subject: 'Økonomistyring',
      level: 'VG2',
      solution: {
        content: `**Løsning:**

Underskudd reduserer egenkapitalen, mens kapitalinnskudd øker den.

$$\\text{EK slutt} = \\text{EK start} + \\text{Årsresultat} + \\text{Innskudd}$$

$$\\text{EK slutt} = 300\\,000 + (-85\\,000) + 50\\,000 = 265\\,000$$

Egenkapitalen ved årsslutt er kr 265 000.`,
      },
    },
    {
      id: 'oks-2-3-ex5',
      type: 'exercise',
      title: 'Oppgave 5: Periodisering',
      content: 'En bedrift betaler forsikringspremie for hele 2025 i desember 2024, totalt kr 36 000. Hvordan skal dette behandles i regnskapet for 2024?',
      difficulty: 'hard',
      exerciseType: 'classic',
      subject: 'Økonomistyring',
      level: 'VG2',
      solution: {
        content: `**Løsning:**

Forsikringen gjelder for 2025, så kostnaden skal ikke belaste 2024s resultat i sin helhet.

**I resultatregnskapet for 2024:**
- Ingen forsikringskostnad (eller bare desember-andelen hvis forsikringen starter i desember)

**I balansen per 31.12.2024:**
- Forskuddsbetalt kostnad (omløpsmiddel): kr 36 000

I 2025 vil denne forskuddsbetalte kostnaden gradvis føres som kostnad i resultatregnskapet etter hvert som året går.

Dette er et eksempel på periodisering etter opptjeningsprinsippet - kostnaden føres i den perioden den gjelder, ikke når den betales.`,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.4: Årsoppgjør og årsregnskap
// ============================================================================

const CHAPTER_OKONOMISTYRING_2_4: TextbookChapter = {
  id: 'okonomistyring-2-4',
  chapterNumber: '2.4',
  title: 'Årsoppgjør og årsregnskap',
  subject: 'Økonomistyring',
  level: 'VG2',
  duration: '25 min',
  content: [
    {
      id: 'oks-2-4-intro',
      type: 'text',
      title: 'Innledning',
      content: `Årsoppgjøret er prosessen der bedriften avslutter regnskapet for året og utarbeider årsregnskapet. Dette innebærer en rekke justeringer og kontroller for å sikre at regnskapet gir et riktig og fullstendig bilde av bedriftens økonomiske situasjon.

**Årsregnskapet består av:**
1. Resultatregnskap
2. Balanse
3. Noteopplysninger
4. Årsberetning (for større foretak)`,
    },
    {
      id: 'oks-2-4-avslutning',
      type: 'text',
      title: 'Avslutning av regnskapet',
      content: `Ved årsoppgjøret gjennomføres en systematisk prosess:

**Steg 1: Kontroll og avstemming**
- Avstem alle kontoer (spesielt bank, kunder, leverandører)
- Kontroller at alle transaksjoner er ført
- Gjennomgå usikre poster

**Steg 2: Årsoppgjørsdisposisjoner**
- Avskrivninger på driftsmidler
- Varetelling og justering av varelager
- Periodisering av inntekter og kostnader
- Avsetninger og nedskrivninger

**Steg 3: Resultatførsel**
- Avslutte inntekts- og kostnadskontoer
- Beregne årsresultat
- Overføre resultat til egenkapital

**Steg 4: Dokumentasjon**
- Utarbeide resultatregnskap og balanse
- Skrive noteopplysninger
- Eventuelt utarbeide årsberetning`,
    },
    {
      id: 'oks-2-4-avskrivninger',
      type: 'text',
      title: 'Avskrivninger',
      content: `Avskrivninger er den årlige kostnadsføringen av verdifall på varige driftsmidler (maskiner, inventar, biler osv.).

**Formålet med avskrivninger:**
- Fordele anskaffelseskost over eiendelens levetid
- Gi et riktig bilde av årets resultat
- Vise reell verdi av eiendeler i balansen

**Lineære avskrivninger (mest vanlig):**
$$\\text{Årlig avskrivning} = \\frac{\\text{Anskaffelseskost}}{\\text{Levetid i år}}$$

**Eksempel:**
En maskin kjøpes for kr 100 000 og har forventet levetid på 5 år.
$$\\text{Årlig avskrivning} = \\frac{100\\,000}{5} = 20\\,000\\text{ kr/år}$$

Avskrivningen føres som kostnad i resultatregnskapet og reduserer verdien av eiendelen i balansen.`,
    },
    {
      id: 'oks-2-4-ex1',
      type: 'exercise',
      title: 'Oppgave 1: Beregn avskrivning',
      content: 'En bedrift kjøper en varebil for kr 350 000. Varebilen skal avskrives lineært over 7 år. Hva er den årlige avskrivningen?',
      difficulty: 'easy',
      exerciseType: 'classic',
      subject: 'Økonomistyring',
      level: 'VG2',
      solution: {
        content: `**Løsning:**

$$\\text{Årlig avskrivning} = \\frac{350\\,000}{7} = 50\\,000$$

Den årlige avskrivningen er kr 50 000.`,
      },
    },
    {
      id: 'oks-2-4-varetelling',
      type: 'text',
      title: 'Varetelling og varekostnad',
      content: `Ved årets slutt må bedriften telle varelageret for å beregne riktig varekostnad.

**Beregning av varekostnad:**
$$\\text{Varekostnad} = \\text{IB varelager} + \\text{Varekjøp} - \\text{UB varelager}$$

Der:
- IB = Inngående beholdning (varelager ved årets start)
- UB = Utgående beholdning (varelager ved årets slutt)

**Eksempel:**
- Varelager 1.1: kr 150 000
- Varekjøp i året: kr 800 000
- Varelager 31.12: kr 180 000

$$\\text{Varekostnad} = 150\\,000 + 800\\,000 - 180\\,000 = 770\\,000$$

Varelageret ved årsslutt føres som eiendel i balansen.`,
    },
    {
      id: 'oks-2-4-ex2',
      type: 'exercise',
      title: 'Oppgave 2: Varekostnad',
      content: 'En butikk har varelager ved årets start på kr 95 000. I løpet av året kjøpes varer for kr 650 000. Ved årets slutt er varelageret kr 110 000. Hva er varekostnaden?',
      difficulty: 'medium',
      exerciseType: 'classic',
      subject: 'Økonomistyring',
      level: 'VG2',
      solution: {
        content: `**Løsning:**

$$\\text{Varekostnad} = \\text{IB varelager} + \\text{Varekjøp} - \\text{UB varelager}$$

$$\\text{Varekostnad} = 95\\,000 + 650\\,000 - 110\\,000 = 635\\,000$$

Varekostnaden er kr 635 000.`,
      },
    },
    {
      id: 'oks-2-4-periodisering',
      type: 'text',
      title: 'Periodisering',
      content: `Periodisering sikrer at inntekter og kostnader føres i riktig regnskapsperiode.

**Forskuddsbetalte kostnader:**
Kostnader betalt i inneværende år, men som gjelder neste år.
- Føres som omløpsmiddel i balansen
- Eksempel: Forsikring betalt på forskudd

**Påløpte kostnader:**
Kostnader som gjelder inneværende år, men betales neste år.
- Føres som kortsiktig gjeld i balansen
- Eksempel: Strømregning for desember som kommer i januar

**Forskuddsbetalt inntekt:**
Inntekt mottatt i inneværende år, men som gjelder neste år.
- Føres som kortsiktig gjeld i balansen
- Eksempel: Leie mottatt på forskudd

**Påløpt inntekt:**
Inntekt opptjent i inneværende år, men mottas neste år.
- Føres som omløpsmiddel (fordring) i balansen
- Eksempel: Renteinntekt opptjent men ikke mottatt`,
    },
    {
      id: 'oks-2-4-ex3',
      type: 'exercise',
      title: 'Oppgave 3: Periodisering',
      content: 'En bedrift mottar kr 48 000 i husleie 1. desember 2024 for perioden desember 2024 til mai 2025 (6 måneder). Hvor mye av dette skal føres som inntekt i 2024?',
      difficulty: 'medium',
      exerciseType: 'multiple-choice',
      subject: 'Økonomistyring',
      level: 'VG2',
      question: 'Hvor mye skal føres som inntekt i 2024?',
      options: [
        'kr 8 000',
        'kr 16 000',
        'kr 24 000',
        'kr 48 000',
      ],
      correctAnswer: 0,
      solution: {
        content: `**Løsning:**

Husleien gjelder 6 måneder, men bare desember 2024 skal føres som inntekt i 2024.

$$\\text{Leieinntekt per måned} = \\frac{48\\,000}{6} = 8\\,000$$

I resultatregnskapet for 2024: kr 8 000 (leieinntekt for desember)

I balansen per 31.12.2024: kr 40 000 (forskuddsbetalt inntekt - kortsiktig gjeld)

**Svar: kr 8 000**`,
      },
    },
    {
      id: 'oks-2-4-aarsberetning',
      type: 'text',
      title: 'Årsberetning',
      content: `Årsberetningen er en tekstlig fremstilling som utfyller tallene i regnskapet. For større foretak er dette lovpålagt.

**Innhold i årsberetningen:**
1. Redegjørelse for virksomheten
2. Kommentarer til resultatet
3. Kommentarer til balansen og likviditeten
4. Vesentlige hendelser etter årsslutt
5. Vurdering av fortsatt drift
6. Planer for fremtiden

Årsberetningen gir en helhetlig forståelse av bedriftens situasjon utover det som fremgår av tallene.`,
    },
    {
      id: 'oks-2-4-ex4',
      type: 'exercise',
      title: 'Oppgave 4: Avskrivning over flere år',
      content: 'En maskin kjøpes for kr 240 000 og skal avskrives lineært over 6 år. Hva er bokført verdi (restverdi) etter 4 år?',
      difficulty: 'hard',
      exerciseType: 'classic',
      subject: 'Økonomistyring',
      level: 'VG2',
      solution: {
        content: `**Løsning:**

Årlig avskrivning:
$$\\text{Årlig avskrivning} = \\frac{240\\,000}{6} = 40\\,000$$

Avskrivning etter 4 år:
$$\\text{Akkumulert avskrivning} = 40\\,000 \\times 4 = 160\\,000$$

Bokført verdi:
$$\\text{Bokført verdi} = \\text{Anskaffelseskost} - \\text{Akkumulert avskrivning}$$
$$\\text{Bokført verdi} = 240\\,000 - 160\\,000 = 80\\,000$$

Bokført verdi etter 4 år er kr 80 000.`,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'oks-2-4-ex5',
      type: 'exercise',
      title: 'Oppgave 5: Komplett varekostnad og avskrivning',
      content: 'En bedrift har følgende tall for 2024: Varelager 1.1 kr 85 000, varekjøp kr 520 000, varelager 31.12 kr 95 000. Bedriften har maskiner med anskaffelseskost kr 300 000 som avskrives lineært over 10 år. Beregn total varekostnad og avskrivning for året.',
      difficulty: 'hard',
      exerciseType: 'classic',
      subject: 'Økonomistyring',
      level: 'VG2',
      solution: {
        content: `**Løsning:**

**Varekostnad:**
$$\\text{Varekostnad} = 85\\,000 + 520\\,000 - 95\\,000 = 510\\,000$$

**Avskrivning:**
$$\\text{Årlig avskrivning} = \\frac{300\\,000}{10} = 30\\,000$$

Total varekostnad: kr 510 000
Total avskrivning: kr 30 000

Begge disse postene føres som kostnader i resultatregnskapet for 2024.`,
      },
    },
    {
      id: 'oks-2-4-ex6',
      type: 'exercise',
      title: 'Oppgave 6: Periodisering og resultateffekt',
      content: 'En bedrift betaler forsikring kr 24 000 for perioden 1.10.2024 til 30.9.2025. Bedriften mottar også depositum på kr 15 000 fra en leietaker i desember 2024 (skal tilbakebetales ved utflytting). Hvordan påvirker dette resultatregnskapet og balansen for 2024?',
      difficulty: 'hard',
      exerciseType: 'classic',
      subject: 'Økonomistyring',
      level: 'VG2',
      solution: {
        content: `**Løsning:**

**Forsikring (forskuddsbetalt kostnad):**
Gjelder 12 måneder, hvorav 3 måneder (okt-des) i 2024.
$$\\text{Forsikringskostnad 2024} = \\frac{24\\,000}{12} \\times 3 = 6\\,000$$

I resultatregnskapet 2024: kr 6 000 (forsikringskostnad)
I balansen 31.12.2024: kr 18 000 (forskuddsbetalt kostnad - omløpsmiddel)

**Depositum:**
Depositum er ingen inntekt, bare en kortsiktig forpliktelse som skal tilbakebetales.

I resultatregnskapet 2024: kr 0 (ingen inntekt)
I balansen 31.12.2024: kr 15 000 (mottatt depositum - kortsiktig gjeld)

**Oppsummering:**
- Resultateffekt 2024: -kr 6 000 (kostnad)
- Balanse omløpsmidler: +kr 18 000
- Balanse kortsiktig gjeld: +kr 15 000`,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.5: Regelverk og rapportering
// ============================================================================

const CHAPTER_OKONOMISTYRING_2_5: TextbookChapter = {
  id: 'okonomistyring-2-5',
  chapterNumber: '2.5',
  title: 'Regelverk og rapportering',
  subject: 'Økonomistyring',
  level: 'VG2',
  duration: '20 min',
  content: [
    {
      id: 'oks-2-5-intro',
      type: 'text',
      title: 'Innledning',
      content: `Bedrifter i Norge må følge strenge regler for hvordan de skal føre regnskap og rapportere til det offentlige. Dette sikrer at regnskapene er sammenlignbare og pålitelige.

**Tre hovedområder:**
1. Regnskapsloven - lover for regnskapsføring
2. God regnskapsskikk (GRS) - standarder og retningslinjer
3. Skattemessig rapportering - rapportering til Skatteetaten`,
    },
    {
      id: 'oks-2-5-regnskapsloven',
      type: 'text',
      title: 'Regnskapsloven',
      content: `Regnskapsloven er den viktigste loven for regnskapsføring i Norge. Den gjelder for de fleste bedrifter.

**Hovedkrav i regnskapsloven:**
- **Bokføringsplikten** - alle virksomheter skal føre regnskap
- **Oppbevaringsplikten** - regnskapsdata skal oppbevares i minst 5 år
- **Dokumentasjonsplikten** - alle transaksjoner skal dokumenteres med bilag
- **Årsregnskapsplikten** - årsregnskap skal utarbeides årlig

**Grunnleggende regnskapsprinsipper:**
1. **Transaksjonsprinsippet** - hver transaksjon skal dokumenteres
2. **Opptjeningsprinsippet** - inntekter/kostnader føres når de opptjenes/påløper
3. **Sammenstillingsprinsippet** - kostnader føres sammen med tilhørende inntekter
4. **Forsiktighetsprinsippet** - ikke overvurder eiendeler eller inntekter
5. **Fortsatt drift-prinsippet** - regnskapet baseres på at bedriften fortsetter`,
    },
    {
      id: 'oks-2-5-ex1',
      type: 'exercise',
      title: 'Oppgave 1: Regnskapsprinsipper',
      content: 'Hvilket regnskapsprinsipp sier at man skal føre inntekter når de er opptjent, ikke når pengene mottas?',
      difficulty: 'easy',
      exerciseType: 'multiple-choice',
      subject: 'Økonomistyring',
      level: 'VG2',
      question: 'Hvilket prinsipp?',
      options: [
        'Transaksjonsprinsippet',
        'Opptjeningsprinsippet',
        'Forsiktighetsprinsippet',
        'Sammenstillingsprinsippet',
      ],
      correctAnswer: 1,
      solution: {
        content: `**Løsning:**

Opptjeningsprinsippet sier at inntekter skal føres når de er opptjent (når varen/tjenesten er levert), uavhengig av når betalingen mottas. Tilsvarende skal kostnader føres når de påløper, uavhengig av når de betales.

**Svar: Opptjeningsprinsippet**`,
      },
    },
    {
      id: 'oks-2-5-grs',
      type: 'text',
      title: 'God regnskapsskikk (GRS)',
      content: `God regnskapsskikk er normer og standarder for hvordan regnskapet skal føres. GRS utfyller regnskapsloven med mer detaljerte regler.

**Kilder til GRS:**
- Norsk RegnskapsStiftelse (NRS) - utgir regnskapsstandarder
- Regnskapsloven og forskrifter
- Etablert praksis i regnskapsbransjen

**Eksempler på GRS-standarder:**
- Hvordan verdisette varelager
- Hvordan beregne avskrivninger
- Hvordan klassifisere poster i balansen
- Krav til noteopplysninger

GRS sikrer ensartet praksis og gjør regnskapene sammenlignbare på tvers av bedrifter.`,
    },
    {
      id: 'oks-2-5-skattemelding',
      type: 'text',
      title: 'Skattemessig rapportering',
      content: `Bedrifter må rapportere til Skatteetaten og betale skatt av overskuddet.

**Viktige rapporteringsoppgaver:**

1. **Skattemelding for næringsdrivende**
   - Leveres årlig (innen 31. mai)
   - Baseres på årsregnskapet
   - Inneholder resultatregnskap og balanse
   - Beregner skattepliktig inntekt

2. **Forskjell mellom regnskapsmessig og skattemessig resultat:**
   - Noen kostnader er fradragsberettiget i regnskapet, men ikke skattemessig
   - Ulike avskrivningsregler
   - Skattemessig resultat danner grunnlag for skatt

3. **Skattesatser (2024):**
   - Enkeltpersonforetak: Alminnelig inntekt 22 %
   - Aksjeselskap: 22 % selskapsskatt`,
    },
    {
      id: 'oks-2-5-ex2',
      type: 'exercise',
      title: 'Oppgave 2: Beregn skatt',
      content: 'Et enkeltpersonforetak har et skattepliktig overskudd på kr 450 000. Skatten er 22 %. Hvor mye skatt skal bedriften betale?',
      difficulty: 'easy',
      exerciseType: 'classic',
      subject: 'Økonomistyring',
      level: 'VG2',
      solution: {
        content: `**Løsning:**

$$\\text{Skatt} = \\text{Skattepliktig inntekt} \\times \\text{Skattesats}$$

$$\\text{Skatt} = 450\\,000 \\times 0.22 = 99\\,000$$

Bedriften skal betale kr 99 000 i skatt.`,
      },
    },
    {
      id: 'oks-2-5-digital',
      type: 'text',
      title: 'Digital rapportering',
      content: `Myndighetene krever i økende grad digital rapportering.

**Altinn - nasjonal digital portal:**
- Innlevering av skattemelding
- Innlevering av årsregnskap til Regnskapsregisteret
- Innrapportering av mva (merverdiavgift)
- Kommunikasjon med offentlige myndigheter

**SAF-T (Standard Audit File - Tax):**
- Standardisert format for regnskapsdata
- Skatteetaten kan be om fullt regnskapsmateriale i SAF-T-format
- Gir skattemyndighetene bedre kontrollmuligheter

**A-meldingen:**
- Månedlig rapportering av lønn og arbeidsgiveravgift
- Digital innlevering via Altinn

Digital rapportering gjør prosessene mer effektive og reduserer feil.`,
    },
    {
      id: 'oks-2-5-ex3',
      type: 'exercise',
      title: 'Oppgave 3: Oppbevaringsplikt',
      content: 'Hvor lenge må en bedrift oppbevare regnskapsdata etter regnskapsloven?',
      difficulty: 'easy',
      exerciseType: 'multiple-choice',
      subject: 'Økonomistyring',
      level: 'VG2',
      question: 'Oppbevaringstid?',
      options: [
        '3 år',
        '5 år',
        '7 år',
        '10 år',
      ],
      correctAnswer: 1,
      solution: {
        content: `**Løsning:**

Etter regnskapsloven skal regnskapsdata (bilag, kontoutskrifter, årsregnskap osv.) oppbevares i minst 5 år etter regnskapsårets slutt.

**Svar: 5 år**`,
      },
    },
    {
      id: 'oks-2-5-brudd',
      type: 'text',
      title: 'Konsekvenser ved brudd på regelverket',
      content: `Brudd på regnskapsloven og skatteloven kan få alvorlige konsekvenser:

**Regnskapsmessige brudd:**
- Manglende eller feil regnskapsføring
- Brudd på oppbevaringsplikten
- Manglende levering av årsregnskap

**Konsekvenser:**
- Bøter og gebyrer
- Tvangsmulkt fra Regnskapsregisteret
- Straffansvar for grovere overtredelser
- Tapt tillit hos banker, kunder og leverandører

**Skattemessige brudd:**
- Feil i skattemeldingen
- Unnlatelse av å betale skatt
- Skatteunndragelse (bevisst fusk)

**Konsekvenser:**
- Tilleggsskatt (opptil 60 % av det man skulle betalt)
- Bøter
- Fengsel ved grov skatteunndragelse

Det lønner seg alltid å følge regelverket!`,
    },
    // --- Samleoppgaver ---
    {
      id: 'oks-2-5-ex4',
      type: 'exercise',
      title: 'Oppgave 4: Skatt etter kostnader',
      content: 'En bedrift har inntekter på kr 800 000 og kostnader på kr 520 000. Skatten er 22 %. Hvor mye skatt skal bedriften betale?',
      difficulty: 'medium',
      exerciseType: 'classic',
      subject: 'Økonomistyring',
      level: 'VG2',
      solution: {
        content: `**Løsning:**

Først beregner vi skattepliktig inntekt (overskudd):
$$\\text{Skattepliktig inntekt} = 800\\,000 - 520\\,000 = 280\\,000$$

Deretter beregner vi skatten:
$$\\text{Skatt} = 280\\,000 \\times 0.22 = 61\\,600$$

Bedriften skal betale kr 61 600 i skatt.`,
      },
    },
    {
      id: 'oks-2-5-ex5',
      type: 'exercise',
      title: 'Oppgave 5: Regelverk og prinsipper',
      content: 'En bedrift har en kunde som skylder kr 80 000, men det er usikkert om kunden vil betale. I henhold til forsiktighetsprinsippet, hvordan bør bedriften behandle denne kundefordringen i balansen?',
      difficulty: 'hard',
      exerciseType: 'classic',
      subject: 'Økonomistyring',
      level: 'VG2',
      solution: {
        content: `**Løsning:**

Forsiktighetsprinsippet sier at man ikke skal overvurdere eiendeler eller inntekter. Hvis det er usikkert om kunden vil betale, bør bedriften:

1. Vurdere å nedskrive kundefordringen i balansen
2. Eventuelt føre et tap på usikre fordringer i resultatregnskapet

**Eksempel på behandling:**
- Hvis man anser det som 50 % sjanse for betaling, kan man nedskrive fordringen til kr 40 000 i balansen
- Tapet på kr 40 000 føres som kostnad i resultatregnskapet

**Alternativt:**
- Hvis det er svært usikkert, kan hele fordringen avskrives (kr 80 000)
- Får man betaling senere, føres det som inntekt det året

Dette sikrer at balansen viser en realistisk (forsiktig) verdi av eiendelene.`,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Export
// ============================================================================

export const OKONOMISTYRING_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_OKONOMISTYRING_2_1,
  CHAPTER_OKONOMISTYRING_2_2,
  CHAPTER_OKONOMISTYRING_2_3,
  CHAPTER_OKONOMISTYRING_2_4,
  CHAPTER_OKONOMISTYRING_2_5,
];
