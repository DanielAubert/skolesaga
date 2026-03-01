/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 10. klasse - Del 9: Eksponentialfunksjoner og modellering
 * Kapittel 9.1–9.3
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 9.1: Eksponentiell vekst og nedgang
// ============================================================================

export const CHAPTER_10_9_1: TextbookChapter = {
  id: '10-9-1',
  courseId: '10',
  chapterNumber: '9.1',
  title: 'Eksponentiell vekst og nedgang',
  description:
    'Lær om sammenhengen mellom konstant prosentvis endring, vekstfaktor og eksponentialfunksjoner. Utforsk eksponentiell vekst og nedgang med praktiske eksempler.',
  estimatedMinutes: 60,
  prerequisites: ['10-6-2'],
  competenceGoals: [
    'utforske samanhengen mellom konstant prosentvis endring, vekstfaktor og eksponentialfunksjonar',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '10-9-1-intro',
      type: 'text',
      content: `## Eksponentiell vekst og nedgang

Har du noen gang hørt uttrykket «det vokser eksponentielt»? Kanskje i sammenheng med hvordan et virus sprer seg, eller hvordan renter kan få en sparekonto til å vokse. Eksponentiell vekst er noe helt annet enn den lineære veksten du er vant med fra tidligere.

Tenk deg at du legger 1 000 kr i banken med 5 % rente hvert år. Etter ett år har du 1 050 kr. Men etter to år har du ikke 1 100 kr — du har 1 102,50 kr, fordi renta det andre året blir regnet ut fra det nye beløpet på 1 050 kr. Denne effekten, der veksten i seg selv vokser, er kjernen i eksponentiell vekst.

I dette kapittelet skal du lære:
- Hva som kjennetegner eksponentiell vekst og nedgang
- Hvordan vekstfaktor henger sammen med prosentvis endring
- Hvordan vi skriver eksponentialfunksjoner på formen $f(x) = a \\cdot b^x$
- Å bruke eksponentialfunksjoner i praktiske situasjoner

**Forutsetning:** Du bør kjenne til vekstfaktor fra kapittel 6.2. Hvis du trenger repetisjon, kan du gå tilbake dit først.`,
    },

    // ========== BLOKK 1: Fra prosentvis endring til vekstfaktor ==========
    {
      id: '10-9-1-def-vekstfaktor',
      type: 'definition',
      title: 'Vekstfaktor',
      content: `Når en størrelse endrer seg med samme prosentandel hver periode, sier vi at endringen er **konstant prosentvis**.

**Vekstfaktor** er det tallet vi ganger med for å finne den nye verdien etter én endring.

- **Vekst** på $p$ prosent gir vekstfaktor: $b = 1 + \\frac{p}{100}$
- **Nedgang** på $p$ prosent gir vekstfaktor: $b = 1 - \\frac{p}{100}$

**Eksempel:**
- 8 % vekst gir $b = 1 + 0{,}08 = 1{,}08$
- 15 % nedgang gir $b = 1 - 0{,}15 = 0{,}85$

Legg merke til: Vekstfaktor $b > 1$ betyr vekst, og $0 < b < 1$ betyr nedgang.`,
    },
    {
      id: '10-9-1-example-vekstfaktor',
      type: 'example',
      title: 'Eksempel: Fra prosent til vekstfaktor',
      problem:
        'En by i Norge har 12 000 innbyggere. Folketallet øker med 3 % hvert år. Hvor mange innbyggere har byen etter 1, 2 og 3 år?',
      solution: `**Løsning:**

Vekstfaktor: $b = 1 + 0{,}03 = 1{,}03$

Startverdi: $a = 12\\,000$

Etter 1 år: $12\\,000 \\cdot 1{,}03 = 12\\,360$

Etter 2 år: $12\\,360 \\cdot 1{,}03 = 12\\,730{,}8 \\approx 12\\,731$

Etter 3 år: $12\\,730{,}8 \\cdot 1{,}03 = 13\\,112{,}7 \\approx 13\\,113$

Vi kan også skrive det slik:
- Etter 1 år: $12\\,000 \\cdot 1{,}03^1 = 12\\,360$
- Etter 2 år: $12\\,000 \\cdot 1{,}03^2 = 12\\,730{,}8$
- Etter 3 år: $12\\,000 \\cdot 1{,}03^3 \\approx 13\\,113$

**Svar:** Etter 3 år har byen ca. 13 113 innbyggere.`,
    },
    {
      id: '10-9-1-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-9-1-oppg-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn vekstfaktoren for hver av disse endringene.',
        subTasks: [
          {
            label: 'a',
            task: '6 % økning',
            solution: '$b = 1 + 0{,}06 = 1{,}06$',
            multipleChoiceOptions: ['$1{,}06$', '$0{,}94$', '$1{,}6$', '$0{,}06$'],
          },
          {
            label: 'b',
            task: '20 % nedgang',
            solution: '$b = 1 - 0{,}20 = 0{,}80$',
            multipleChoiceOptions: ['$0{,}80$', '$1{,}20$', '$0{,}20$', '$1{,}80$'],
          },
          {
            label: 'c',
            task: '2{,}5 % økning',
            solution: '$b = 1 + 0{,}025 = 1{,}025$',
            multipleChoiceOptions: ['$1{,}025$', '$0{,}975$', '$1{,}25$', '$0{,}025$'],
          },
          {
            label: 'd',
            task: '12 % nedgang',
            solution: '$b = 1 - 0{,}12 = 0{,}88$',
            multipleChoiceOptions: ['$0{,}88$', '$1{,}12$', '$0{,}12$', '$1{,}88$'],
          },
        ],
        solution:
          'a) $1{,}06$ b) $0{,}80$ c) $1{,}025$ d) $0{,}88$. Husk: Økning gir $b = 1 + p/100$ og nedgang gir $b = 1 - p/100$.',
        hints: ['Økning: legg prosenten til 1. Nedgang: trekk prosenten fra 1.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '10-9-1-exercise-2',
      type: 'exercise',
      exercise: {
        id: '10-9-1-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'En bil koster 350 000 kr ny. Hvert år faller verdien med 15 %. Hvor mye er bilen verdt etter 1, 2 og 3 år?',
        hints: [
          'Bruk vekstfaktor $b = 1 - 0{,}15 = 0{,}85$. Gang startverdien med $b$ for hvert år.',
        ],
        solution: `Vekstfaktor: $b = 0{,}85$

Etter 1 år: $350\\,000 \\cdot 0{,}85 = 297\\,500$ kr

Etter 2 år: $350\\,000 \\cdot 0{,}85^2 = 252\\,875$ kr

Etter 3 år: $350\\,000 \\cdot 0{,}85^3 \\approx 214\\,944$ kr

**Svar:** Bilen er verdt ca. 297 500 kr, 252 875 kr og 214 944 kr etter 1, 2 og 3 år.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== BLOKK 2: Eksponentialfunksjonen ==========
    {
      id: '10-9-1-def-eksponentialfunksjon',
      type: 'definition',
      title: 'Eksponentialfunksjon',
      content: `En **eksponentialfunksjon** er en funksjon på formen:

$$f(x) = a \\cdot b^x$$

der:
- $a$ er **startverdien** (verdien når $x = 0$), og $a \\neq 0$
- $b$ er **vekstfaktoren** (basen), og $b > 0$, $b \\neq 1$
- $x$ er eksponenten, som ofte representerer tid

**Tolking:**
- Dersom $b > 1$: funksjonen viser **eksponentiell vekst**
- Dersom $0 < b < 1$: funksjonen viser **eksponentiell nedgang**
- $a = f(0)$: startverdien er funksjonsverdien når $x = 0$`,
    },
    {
      id: '10-9-1-example-eksponentialfunksjon',
      type: 'example',
      title: 'Eksempel: Bakterievekst',
      problem:
        'En bakteriekultur starter med 500 bakterier. Antallet bakterier dobler seg hver time. Skriv opp en eksponentialfunksjon $f(x)$ der $x$ er antall timer, og finn hvor mange bakterier det er etter 6 timer.',
      solution: `**Løsning:**

Startverdien er $a = 500$ bakterier.

Dobling betyr 100 % økning, altså vekstfaktor $b = 2$.

Funksjonen blir:
$$f(x) = 500 \\cdot 2^x$$

Etter 6 timer:
$$f(6) = 500 \\cdot 2^6 = 500 \\cdot 64 = 32\\,000$$

**Svar:** Etter 6 timer er det 32 000 bakterier i kulturen.`,
    },
    {
      id: '10-9-1-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-9-1-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du setter 10 000 kr i banken med 4 % årlig rente (rentes rente).',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv opp en eksponentialfunksjon $f(x)$ der $x$ er antall år.',
            solution:
              'Startverdi $a = 10\\,000$ og vekstfaktor $b = 1{,}04$. Funksjonen er $f(x) = 10\\,000 \\cdot 1{,}04^x$.',
          },
          {
            label: 'b',
            task: 'Hvor mye penger har du etter 10 år?',
            solution:
              '$f(10) = 10\\,000 \\cdot 1{,}04^{10} \\approx 10\\,000 \\cdot 1{,}4802 \\approx 14\\,802$ kr.',
          },
          {
            label: 'c',
            task: 'Hvor mye renter har du tjent totalt etter 10 år?',
            solution:
              'Total rente = $14\\,802 - 10\\,000 = 4\\,802$ kr. Sammenlignet med enkel rente: $10\\,000 \\cdot 0{,}04 \\cdot 10 = 4\\,000$ kr. Rentes rente gir 802 kr ekstra.',
          },
        ],
        solution:
          'a) $f(x) = 10\\,000 \\cdot 1{,}04^x$. b) Ca. 14 802 kr. c) 4 802 kr i samlede renter (802 kr mer enn med enkel rente).',
        hints: [
          'Rente 4 % gir vekstfaktor $1{,}04$.',
          'Rentes rente betyr at renta blir lagt til kapitalen hvert år, slik at du får rente av renta.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '10-9-1-exercise-4',
      type: 'exercise',
      exercise: {
        id: '10-9-1-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Radioaktivt jod-131 har en halveringstid på 8 dager. Det betyr at halvparten av stoffet brytes ned hver 8. dag. Du starter med 200 mg jod-131.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mye jod-131 er igjen etter 8, 16, 24 og 32 dager?',
            solution:
              'Etter 8 dager: $200 \\cdot 0{,}5 = 100$ mg. Etter 16 dager: $200 \\cdot 0{,}5^2 = 50$ mg. Etter 24 dager: $200 \\cdot 0{,}5^3 = 25$ mg. Etter 32 dager: $200 \\cdot 0{,}5^4 = 12{,}5$ mg.',
          },
          {
            label: 'b',
            task: 'Skriv opp en eksponentialfunksjon $f(x)$ der $x$ er antall halveringsperioder.',
            solution:
              '$f(x) = 200 \\cdot 0{,}5^x = 200 \\cdot \\left(\\frac{1}{2}\\right)^x$',
          },
          {
            label: 'c',
            task: 'Etter hvor mange halveringsperioder er det mindre enn 1 mg igjen?',
            solution:
              'Vi løser $200 \\cdot 0{,}5^x < 1$, altså $0{,}5^x < 0{,}005$. Prøving: $0{,}5^7 = 0{,}0078$ (for mye), $0{,}5^8 = 0{,}0039$ (under 0,005). Svar: Etter 8 halveringsperioder, altså 64 dager.',
          },
        ],
        solution:
          'a) 100 mg, 50 mg, 25 mg, 12,5 mg. b) $f(x) = 200 \\cdot 0{,}5^x$. c) Etter 8 halveringsperioder (64 dager).',
        hints: [
          'Halveringstid betyr at vekstfaktoren er $0{,}5$ per periode.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== BLOKK 3: Finne a og b fra opplysninger ==========
    {
      id: '10-9-1-text-finne-ab',
      type: 'text',
      title: 'Finne startverdien og vekstfaktoren',
      content: `## Bestemme $a$ og $b$ i $f(x) = a \\cdot b^x$

Ofte får du opplysninger om en situasjon og må selv finne eksponentialfunksjonen. Her er strategien:

**Finne $a$ (startverdien):**
Startverdien er verdien når $x = 0$. Dersom du vet hva størrelsen er ved start, har du $a$ direkte.

**Finne $b$ (vekstfaktoren):**
- Hvis du kjenner den prosentvise endringen per periode, bruker du formelen for vekstfaktor.
- Hvis du har to datapunkt, for eksempel $f(x_1) = y_1$ og $f(x_2) = y_2$, kan du sette opp likningen:

$$\\frac{y_2}{y_1} = b^{x_2 - x_1}$$

og dermed finne $b$.`,
    },
    {
      id: '10-9-1-example-finne-ab',
      type: 'example',
      title: 'Eksempel: Finne eksponentialfunksjonen',
      problem:
        'En forsker måler bakterier i en kultur. Etter 2 timer er det 1 800 bakterier, og etter 5 timer er det 14 400 bakterier. Finn eksponentialfunksjonen $f(x) = a \\cdot b^x$ der $x$ er tid i timer.',
      solution: `**Løsning:**

Vi har $f(2) = 1\\,800$ og $f(5) = 14\\,400$.

**Steg 1: Finn $b$**

$$\\frac{f(5)}{f(2)} = \\frac{a \\cdot b^5}{a \\cdot b^2} = b^3 = \\frac{14\\,400}{1\\,800} = 8$$

$$b^3 = 8 \\quad \\Rightarrow \\quad b = \\sqrt[3]{8} = 2$$

**Steg 2: Finn $a$**

Vi bruker $f(2) = a \\cdot 2^2 = 4a = 1\\,800$:

$$a = \\frac{1\\,800}{4} = 450$$

**Svar:** Eksponentialfunksjonen er $f(x) = 450 \\cdot 2^x$.

Vi kan sjekke: $f(5) = 450 \\cdot 2^5 = 450 \\cdot 32 = 14\\,400$ ✓`,
    },
    {
      id: '10-9-1-exercise-5',
      type: 'exercise',
      exercise: {
        id: '10-9-1-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'En investering var verdt 50 000 kr ved starten og 72 800 kr etter 4 år. Gå ut fra at verdien følger en eksponentialfunksjon.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn vekstfaktoren $b$.',
            solution:
              '$f(4) = a \\cdot b^4$. Vi har $72\\,800 = 50\\,000 \\cdot b^4$, altså $b^4 = 72\\,800 / 50\\,000 = 1{,}456$. Dermed $b = \\sqrt[4]{1{,}456} \\approx 1{,}098$. Vekstfaktoren er ca. $1{,}10$.',
          },
          {
            label: 'b',
            task: 'Hva er den årlige prosentvise økningen?',
            solution:
              'Prosentvis økning: $(b - 1) \\cdot 100 = (1{,}098 - 1) \\cdot 100 \\approx 9{,}8$ %. Investeringen vokser med ca. 9,8 % per år.',
          },
          {
            label: 'c',
            task: 'Hvor mye er investeringen verdt etter 10 år?',
            solution:
              '$f(10) = 50\\,000 \\cdot 1{,}098^{10} \\approx 50\\,000 \\cdot 2{,}551 \\approx 127\\,550$ kr.',
          },
        ],
        solution:
          'a) $b \\approx 1{,}098$. b) Ca. 9,8 % årlig økning. c) Ca. 127 550 kr etter 10 år.',
        hints: [
          'Bruk $b^4 = f(4)/a$ og ta fjerde rot.',
          'Prosent = $(b - 1) \\cdot 100$.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '10-9-1-exercise-6',
      type: 'exercise',
      exercise: {
        id: '10-9-1-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Prisen på en mobiltelefon faller i verdi. Da den var ny, kostet den 12 990 kr. Etter 2 år er den verdt 7 150 kr.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn vekstfaktoren $b$ og den årlige prosentvise nedgangen.',
            solution:
              '$b^2 = 7\\,150 / 12\\,990 \\approx 0{,}5504$. $b = \\sqrt{0{,}5504} \\approx 0{,}742$. Nedgang: $(1 - 0{,}742) \\cdot 100 \\approx 25{,}8$ % per år.',
          },
          {
            label: 'b',
            task: 'Skriv opp eksponentialfunksjonen $f(x)$ der $x$ er antall år.',
            solution: '$f(x) = 12\\,990 \\cdot 0{,}742^x$',
          },
          {
            label: 'c',
            task: 'Etter hvor mange år er telefonen verdt under 1 000 kr?',
            solution:
              'Vi løser $12\\,990 \\cdot 0{,}742^x < 1\\,000$. $0{,}742^x < 1\\,000 / 12\\,990 \\approx 0{,}077$. Prøving: $0{,}742^8 \\approx 0{,}102$ (for høyt), $0{,}742^9 \\approx 0{,}076$ (under). Svar: Etter ca. 9 år.',
          },
        ],
        solution:
          'a) $b \\approx 0{,}742$, ca. 25,8 % nedgang per år. b) $f(x) = 12\\,990 \\cdot 0{,}742^x$. c) Etter ca. 9 år.',
        hints: [
          'Siden verdien minker, er $b < 1$.',
          'For deloppgave c) kan du prøve deg fram eller bruke logaritmer.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '10-9-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Eksponentiell vekst** oppstår når en størrelse øker med samme prosentandel hver periode
- **Eksponentiell nedgang** oppstår når en størrelse minker med samme prosentandel hver periode
- **Vekstfaktor**: $b = 1 + p/100$ for vekst, $b = 1 - p/100$ for nedgang
- **Eksponentialfunksjonen** $f(x) = a \\cdot b^x$ der $a$ er startverdi og $b$ er vekstfaktor
- $b > 1$ betyr vekst, $0 < b < 1$ betyr nedgang
- Vi kan finne $a$ og $b$ fra opplysninger om to datapunkt

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Vekstfaktor | Tallet vi ganger med for hver periode |
| Eksponentiell vekst | Vekst der økningen er prosentvis lik per periode ($b > 1$) |
| Eksponentiell nedgang | Nedgang der nedgangen er prosentvis lik per periode ($0 < b < 1$) |
| Startverdi ($a$) | Verdien når $x = 0$ |
| Halveringstid | Tiden det tar før størrelsen er halvert |
| Rentes rente | Rente som blir regnet ut fra kapitalen pluss tidligere opptjent rente |`,
    },

    // ========== SAMLEOPPGAVER ==========
    {
      id: '10-9-1-exercise-7',
      type: 'exercise',
      exercise: {
        id: '10-9-1-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Folketallet i Tromsø var ca. 77 000 i 2020. De siste årene har folketallet økt med ca. 1,2 % per år. a) Skriv opp en eksponentialfunksjon der $x$ er antall år etter 2020. b) Hva slags folketall gir modellen i 2030? c) I hvilket år passerer folketallet 90 000 ifølge modellen?',
        hints: [
          'a) Startverdien er 77 000 og vekstfaktoren er $1{,}012$.',
          'c) Prøv deg fram med ulike verdier av $x$ eller bruk CAS.',
        ],
        solution: `a) $f(x) = 77\\,000 \\cdot 1{,}012^x$

b) $f(10) = 77\\,000 \\cdot 1{,}012^{10} \\approx 77\\,000 \\cdot 1{,}1268 \\approx 86\\,763$

c) Vi løser $77\\,000 \\cdot 1{,}012^x = 90\\,000$. $1{,}012^x = 90\\,000 / 77\\,000 \\approx 1{,}1688$. Prøving: $1{,}012^{13} \\approx 1{,}1676$ og $1{,}012^{14} \\approx 1{,}1816$. Folketallet passerer 90 000 omtrent i 2033.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '10-9-1-exercise-8',
      type: 'exercise',
      exercise: {
        id: '10-9-1-oppg-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du har to sparealternativer: Alternativ A gir 3,5 % rente med rentes rente. Alternativ B gir 4 200 kr i rente hvert år (enkel rente). Du setter inn 100 000 kr.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv opp en funksjon for hvert av de to alternativene.',
            solution:
              'Alternativ A: $f(x) = 100\\,000 \\cdot 1{,}035^x$ (eksponentiell). Alternativ B: $g(x) = 100\\,000 + 4\\,200x$ (lineær).',
          },
          {
            label: 'b',
            task: 'Regn ut verdien av begge alternativene etter 5, 10, 15 og 20 år. Sett opp en tabell.',
            solution:
              'Etter 5 år: A = 118 769 kr, B = 121 000 kr. Etter 10 år: A = 141 060 kr, B = 142 000 kr. Etter 15 år: A = 167 535 kr, B = 163 000 kr. Etter 20 år: A = 199 989 kr, B = 184 000 kr.',
          },
          {
            label: 'c',
            task: 'Etter omtrent hvor mange år blir alternativ A bedre enn alternativ B?',
            solution:
              'Vi ser fra tabellen at A tar igjen B mellom 10 og 15 år. Mer nøyaktig: $100\\,000 \\cdot 1{,}035^x = 100\\,000 + 4\\,200x$. Prøving gir $x \\approx 12$ år.',
          },
          {
            label: 'd',
            task: 'Forklar hvorfor eksponentiell vekst alltid vil slå lineær vekst over lang nok tid.',
            solution:
              'Med lineær vekst øker beløpet med et fast kronebeløp hvert år. Med eksponentiell vekst øker beløpet med en fast prosent, som betyr at selve økningen vokser over tid. Til slutt blir den prosentvise økningen større enn det faste kronebeløpet, og eksponentiell vekst vinner alltid over tid.',
          },
        ],
        solution:
          'a) A: $f(x) = 100\\,000 \\cdot 1{,}035^x$, B: $g(x) = 100\\,000 + 4\\,200x$. b) Se deloppgavene. c) Omtrent etter 12 år. d) Eksponentiell vekst øker selve økningen, mens lineær vekst legger til samme beløp hver gang.',
        hints: [
          'Alternativ A er eksponentiell vekst, alternativ B er lineær vekst.',
          'Sammenlign funksjonsverdiene for ulike $x$-verdier.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Vekstfaktor', definition: 'Tallet vi ganger med for hver periode ved konstant prosentvis endring' },
    { term: 'Eksponentiell vekst', definition: 'Vekst der verdien øker med samme prosentandel hver periode' },
    { term: 'Eksponentiell nedgang', definition: 'Nedgang der verdien minker med samme prosentandel hver periode' },
    { term: 'Eksponentialfunksjon', definition: 'Funksjon på formen $f(x) = a \\cdot b^x$ der $a$ er startverdi og $b$ er vekstfaktor' },
    { term: 'Halveringstid', definition: 'Tiden det tar før en størrelse er redusert til halvparten' },
    { term: 'Rentes rente', definition: 'Prinsippet om at renter blir lagt til kapitalen, slik at en får rente av renta' },
  ],
  nextChapter: '10-9-2',
};


// ============================================================================
// Kapittel 9.2: Eksponentialfunksjoner og grafer
// ============================================================================

export const CHAPTER_10_9_2: TextbookChapter = {
  id: '10-9-2',
  courseId: '10',
  chapterNumber: '9.2',
  title: 'Eksponentialfunksjoner og grafer',
  description:
    'Utforsk hvordan eksponentialfunksjoner ser ut grafisk, sammenlign med lineære funksjoner, og lær om asymptote og transformasjoner.',
  estimatedMinutes: 60,
  prerequisites: ['10-9-1'],
  competenceGoals: [
    'utforske og samanlikne eigenskapar ved ulike funksjonar ved å bruke digitale verktøy',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '10-9-2-intro',
      type: 'text',
      content: `## Eksponentialfunksjoner og grafer

I forrige kapittel lærte du formelen $f(x) = a \\cdot b^x$ og hvordan du kan sette opp eksponentialfunksjoner. Men hvordan ser disse funksjonene egentlig ut når vi tegner dem?

I dette kapittelet skal du:
- Tegne grafer til eksponentialfunksjoner for hånd og med digitale verktøy
- Sammenligne eksponentiell og lineær vekst grafisk
- Forstå hva en horisontal asymptote er
- Undersøke hvordan endringer i $a$ og $b$ påvirker grafen`,
    },

    // ========== BLOKK 1: Tegne eksponentialfunksjoner ==========
    {
      id: '10-9-2-text-teikne',
      type: 'text',
      content: `## Slik tegner du grafen til en eksponentialfunksjon

For å tegne grafen til $f(x) = a \\cdot b^x$ lager vi en verditabell og plotter punktene.

**Steg for steg:**
1. Velg noen $x$-verdier (for eksempel $-2, -1, 0, 1, 2, 3, 4$)
2. Regn ut $f(x)$ for hver verdi
3. Plott punktene i et koordinatsystem
4. Tegn en glatt kurve gjennom punktene

**Viktige egenskaper:**
- Grafen går alltid gjennom punktet $(0, a)$ fordi $f(0) = a \\cdot b^0 = a$
- Grafen krysser aldri $x$-aksen (hvis $a > 0$)
- For vekst ($b > 1$): grafen stiger brattere og brattere mot høyre
- For nedgang ($0 < b < 1$): grafen faller og nærmer seg $x$-aksen mot høyre`,
    },
    {
      id: '10-9-2-example-verditabell',
      type: 'example',
      title: 'Eksempel: Tegne grafen til $f(x) = 3 \\cdot 2^x$',
      problem:
        'Lag en verditabell for $f(x) = 3 \\cdot 2^x$ med $x$-verdier fra $-2$ til $4$, og beskriv hvordan grafen ser ut.',
      solution: `**Løsning:**

| $x$ | $2^x$ | $f(x) = 3 \\cdot 2^x$ |
|-----|--------|----------------------|
| $-2$ | $0{,}25$ | $0{,}75$ |
| $-1$ | $0{,}5$ | $1{,}5$ |
| $0$ | $1$ | $3$ |
| $1$ | $2$ | $6$ |
| $2$ | $4$ | $12$ |
| $3$ | $8$ | $24$ |
| $4$ | $16$ | $48$ |

**Observasjoner:**
- Grafen starter nær $x$-aksen for negative $x$-verdier
- Den går gjennom $(0, 3)$ (startverdien)
- Den stiger brattere og brattere for positive $x$-verdier
- Hver gang $x$ øker med 1, blir $f(x)$ doblet (fordi $b = 2$)

**Svar:** Grafen er en stigende kurve som vokser raskere og raskere. Den kommer aldri under $x$-aksen.`,
    },
    {
      id: '10-9-2-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-9-2-oppg-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Lag en verditabell for $f(x) = 100 \\cdot 0{,}5^x$ med $x = 0, 1, 2, 3, 4, 5$. Tegn grafen.',
        subTasks: [
          {
            label: 'a',
            task: 'Fyll inn verditabellen.',
            solution:
              '$f(0) = 100$, $f(1) = 50$, $f(2) = 25$, $f(3) = 12{,}5$, $f(4) = 6{,}25$, $f(5) = 3{,}125$.',
          },
          {
            label: 'b',
            task: 'Beskriv med ord hvordan grafen ser ut.',
            solution:
              'Grafen starter i $(0, 100)$ og faller raskt. Den nærmer seg $x$-aksen, men når aldri helt ned. Kurven flater ut etter hvert.',
          },
          {
            label: 'c',
            task: 'Hva skjer med funksjonsverdien når $x$ øker med 1?',
            solution:
              'Funksjonsverdien blir halvert hver gang $x$ øker med 1, fordi $b = 0{,}5$.',
          },
        ],
        solution:
          'Se deloppgavene. Grafen viser eksponentiell nedgang med halveringen som hovedtrekk.',
        hints: [
          'Bruk at $0{,}5^x = (1/2)^x$. Hver gang du øker $x$ med 1, halverer du verdien.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== BLOKK 2: Horisontal asymptote ==========
    {
      id: '10-9-2-def-asymptote',
      type: 'definition',
      title: 'Horisontal asymptote',
      content: `En **horisontal asymptote** er en vannrett linje som grafen nærmer seg, men aldri når.

For en eksponentialfunksjon $f(x) = a \\cdot b^x$ (med $a > 0$):

- **$x$-aksen** ($y = 0$) er den horisontale asymptoten
- Når $b > 1$: grafen nærmer seg $x$-aksen mot venstre (for svært negative $x$)
- Når $0 < b < 1$: grafen nærmer seg $x$-aksen mot høyre (for store $x$)

Funksjonsverdien blir aldri lik 0, men den kan bli vilkårlig nær 0.

**Utvidelse:** Hvis vi legger til en konstant, $f(x) = a \\cdot b^x + c$, så er den horisontale asymptoten linjen $y = c$.`,
    },
    {
      id: '10-9-2-example-asymptote',
      type: 'example',
      title: 'Eksempel: Asymptote og avkjøling',
      problem:
        'En kopp kaffe har temperaturen 90 °C. Romtemperaturen er 20 °C. Avkjølingen kan modelleres med $T(x) = 70 \\cdot 0{,}85^x + 20$, der $x$ er tid i minutter. Hva er den horisontale asymptoten, og hva betyr den?',
      solution: `**Løsning:**

Vi ser at funksjonen har formen $a \\cdot b^x + c$ med $c = 20$.

Den horisontale asymptoten er $y = 20$.

**Tolkning:** Kaffen kommer aldri under romtemperaturen (20 °C). Temperaturen nærmer seg 20 °C over tid, men når aldri helt ned.

La oss sjekke noen verdier:
- $T(0) = 70 \\cdot 1 + 20 = 90$ °C (starttemperatur ✓)
- $T(5) = 70 \\cdot 0{,}85^5 + 20 \\approx 70 \\cdot 0{,}444 + 20 \\approx 51{,}1$ °C
- $T(10) = 70 \\cdot 0{,}85^{10} + 20 \\approx 70 \\cdot 0{,}197 + 20 \\approx 33{,}8$ °C
- $T(20) = 70 \\cdot 0{,}85^{20} + 20 \\approx 70 \\cdot 0{,}039 + 20 \\approx 22{,}7$ °C

Kaffen nærmer seg 20 °C, men kommer aldri helt dit.`,
    },
    {
      id: '10-9-2-exercise-2',
      type: 'exercise',
      exercise: {
        id: '10-9-2-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Funksjonen $f(x) = 5 \\cdot 1{,}5^x$ og funksjonen $g(x) = 80 \\cdot 0{,}7^x$ er gitt.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er den horisontale asymptoten for hver funksjon?',
            solution:
              'Begge har $y = 0$ ($x$-aksen) som horisontal asymptote siden ingen konstant er lagt til.',
          },
          {
            label: 'b',
            task: 'For hvilke $x$-verdier nærmer grafen seg asymptoten?',
            solution:
              '$f(x) = 5 \\cdot 1{,}5^x$: nærmer seg $x$-aksen mot venstre (for store negative $x$). $g(x) = 80 \\cdot 0{,}7^x$: nærmer seg $x$-aksen mot høyre (for store positive $x$).',
          },
          {
            label: 'c',
            task: 'Hva er den horisontale asymptoten til $h(x) = 50 \\cdot 0{,}9^x + 15$?',
            solution:
              'Den horisontale asymptoten er $y = 15$, fordi $50 \\cdot 0{,}9^x \\to 0$ når $x \\to \\infty$.',
          },
        ],
        solution:
          'a) Begge har $y = 0$. b) $f$: mot venstre, $g$: mot høyre. c) $y = 15$.',
        hints: [
          'En eksponentialfunksjon $a \\cdot b^x$ nærmer seg 0 for store $|x|$ på en av sidene.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== BLOKK 3: Sammenligning: eksponentiell vs. lineær ==========
    {
      id: '10-9-2-text-samanlikning',
      type: 'text',
      content: `## Eksponentiell vs. lineær vekst

Det er viktig å forstå forskjellen mellom lineær og eksponentiell vekst:

| Egenskap | Lineær funksjon | Eksponentialfunksjon |
|-----------|----------------|---------------------|
| Formel | $f(x) = ax + b$ | $f(x) = a \\cdot b^x$ |
| Endring per periode | Konstant **beløp** | Konstant **prosent** |
| Graf | Rett linje | Kurve |
| Eksempel | 500 kr mer hvert år | 5 % mer hvert år |

**Viktig innsikt:** Over lang nok tid vil eksponentiell vekst alltid overgå lineær vekst, uansett hvor bratt den lineære funksjonen er. Det er fordi den prosentvise økningen til slutt gir en større absolutt økning enn det faste tillegget.`,
    },
    {
      id: '10-9-2-example-samanlikning',
      type: 'example',
      title: 'Eksempel: Sammenligning av vekstmodeller',
      problem:
        'To kommuner i Nordland har hver 5 000 innbyggere i dag. Kommune A vokser med 80 personer per år (lineær vekst). Kommune B vokser med 1,5 % per år (eksponentiell vekst). Sammenlign utviklingen de neste 30 årene.',
      solution: `**Løsning:**

**Kommune A (lineær):** $f(x) = 80x + 5\\,000$

**Kommune B (eksponentiell):** $g(x) = 5\\,000 \\cdot 1{,}015^x$

| År ($x$) | Kommune A | Kommune B |
|----------|-----------|-----------|
| 0 | 5 000 | 5 000 |
| 5 | 5 400 | 5 386 |
| 10 | 5 800 | 5 804 |
| 15 | 6 200 | 6 254 |
| 20 | 6 600 | 6 739 |
| 25 | 7 000 | 7 263 |
| 30 | 7 400 | 7 828 |

**Observasjoner:**
- I starten (de første 5-6 årene) vokser A raskere enn B
- Rundt år 7-8 krysser grafene hverandre
- Etter det vokser B stadig raskere enn A
- Forskjellen øker mer og mer over tid

**Svar:** Kommune B (eksponentiell vekst) har 428 flere innbyggere enn A etter 30 år, og forskjellen vil bare øke.`,
    },
    {
      id: '10-9-2-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-9-2-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'To venner legger hver 20 000 kr i banken. Anna velger en konto med 800 kr i rente hvert år (enkel rente). Bjørn velger en konto med 3,5 % rente med rentes rente.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv opp en funksjon for hver av de to.',
            solution:
              'Anna: $f(x) = 20\\,000 + 800x$ (lineær). Bjørn: $g(x) = 20\\,000 \\cdot 1{,}035^x$ (eksponentiell).',
          },
          {
            label: 'b',
            task: 'Regn ut hvor mye hver har etter 5, 10 og 20 år.',
            solution:
              'Etter 5 år: Anna = 24 000 kr, Bjørn = 23 754 kr. Etter 10 år: Anna = 28 000 kr, Bjørn = 28 212 kr. Etter 20 år: Anna = 36 000 kr, Bjørn = 39 796 kr.',
          },
          {
            label: 'c',
            task: 'Etter omtrent hvor mange år har Bjørn mer enn Anna?',
            solution:
              'Vi løser $20\\,000 \\cdot 1{,}035^x = 20\\,000 + 800x$. Fra tabellen ser vi at det skjer mellom 5 og 10 år. Mer nøyaktig rundt $x \\approx 9$ år.',
          },
        ],
        solution:
          'a) $f(x) = 20\\,000 + 800x$, $g(x) = 20\\,000 \\cdot 1{,}035^x$. b) Se deloppgavene. c) Omtrent 9 år.',
        hints: [
          'Annas rente er fast i kroner — lineær. Bjørns rente er prosentvis — eksponentiell.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== BLOKK 4: Transformasjoner og digitale verktøy ==========
    {
      id: '10-9-2-text-transformasjonar',
      type: 'text',
      content: `## Transformasjoner av eksponentialfunksjoner

Vi kan endre utseendet til grafen ved å justere parameterne:

**Endre $a$ (startverdien):**
- Større $a$ → grafen starter høyere opp
- Negativ $a$ → grafen blir speilet om $x$-aksen

**Endre $b$ (vekstfaktoren):**
- $b$ nær 1 → sakte endring (flat kurve)
- $b$ langt fra 1 → rask endring (bratt kurve)
- $b = 2$ → dobling per steg
- $b = 0{,}5$ → halvering per steg

**Legge til en konstant $c$: $f(x) = a \\cdot b^x + c$**
- Flytter grafen opp eller ned
- Endrer asymptoten fra $y = 0$ til $y = c$

**Bruk digitale verktøy!**
GeoGebra og andre grafverktøy er utmerket for å utforske hvordan endringer i $a$, $b$ og $c$ påvirker grafen. Du kan lage glidebrytere for parameterne og se hvordan grafen endrer seg i sanntid.`,
    },
    {
      id: '10-9-2-geogebra-utforsk',
      type: 'geogebra',
      title: 'Utforsk eksponentialfunksjoner',
      description:
        'Bruk glidebrytere for $a$, $b$ og $c$ til å se hvordan $f(x) = a \\cdot b^x + c$ endrer seg.',
      appType: 'graphing',
      commands: [
        'a = Slider(0.1, 10, 0.1)',
        'b = Slider(0.1, 3, 0.01)',
        'c = Slider(-10, 10, 0.5)',
        'f(x) = a * b^x + c',
      ],
    },
    {
      id: '10-9-2-exercise-4',
      type: 'exercise',
      exercise: {
        id: '10-9-2-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk GeoGebra eller et annet digitalt verktøy til å tegne grafene til disse funksjonene i samme koordinatsystem.',
        subTasks: [
          {
            label: 'a',
            task: 'Tegn $f(x) = 2^x$, $g(x) = 3^x$ og $h(x) = 1{,}1^x$ i samme koordinatsystem. Hva skjer når $b$ øker?',
            solution:
              'Alle tre grafene går gjennom $(0, 1)$. Større $b$ gir brattere stigning. $h(x) = 1{,}1^x$ vokser sakte, mens $g(x) = 3^x$ vokser svært raskt.',
          },
          {
            label: 'b',
            task: 'Tegn $f(x) = 0{,}5^x$, $g(x) = 0{,}8^x$ og $h(x) = 0{,}95^x$. Hva skjer når $b$ nærmer seg 1?',
            solution:
              'Alle tre viser nedgang. $f(x) = 0{,}5^x$ faller raskt (halvering). $h(x) = 0{,}95^x$ faller svært sakte. Jo nærmere $b$ er 1, jo flatere er kurven.',
          },
        ],
        solution:
          'a) Større $b$ gir brattere vekstkurve. b) $b$ nær 1 gir nesten flat kurve.',
        hints: [
          'Skriv inn funksjonene i GeoGebra og sammenlign grafene visuelt.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '10-9-2-exercise-5',
      type: 'exercise',
      exercise: {
        id: '10-9-2-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Under ser du fire grafer. Hver av dem hører til en av funksjonene under. Koble riktig graf til riktig funksjon.\n\nFunksjoner:\n1. $f(x) = 2 \\cdot 1{,}5^x$\n2. $g(x) = 10 \\cdot 0{,}6^x$\n3. $h(x) = 4 \\cdot 0{,}9^x + 3$\n4. $k(x) = 0{,}5 \\cdot 3^x$',
        hints: [
          'Se på startverdien $f(0)$ og om grafen viser vekst eller nedgang.',
          'Sjekk om det finnes en asymptote som ikke er $y = 0$.',
        ],
        solution: `Strategi for å koble:
- $f(x) = 2 \\cdot 1{,}5^x$: Starter i $(0, 2)$, stigende kurve, asymptote $y = 0$
- $g(x) = 10 \\cdot 0{,}6^x$: Starter i $(0, 10)$, fallende kurve, asymptote $y = 0$
- $h(x) = 4 \\cdot 0{,}9^x + 3$: Starter i $(0, 7)$, sakte fallende, asymptote $y = 3$
- $k(x) = 0{,}5 \\cdot 3^x$: Starter i $(0, 0{,}5)$, raskt stigende kurve, asymptote $y = 0$

Nøkkelen er å se på $f(0)$ (startverdien), om grafen stiger eller faller, hvor bratt den er, og om asymptoten er $y = 0$ eller noe annet.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '10-9-2-exercise-6',
      type: 'exercise',
      exercise: {
        id: '10-9-2-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'En gryte med vann er 95 °C. Romtemperaturen er 22 °C. Avkjølingen kan modelleres med $T(x) = 73 \\cdot 0{,}92^x + 22$, der $x$ er tid i minutter.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er den horisontale asymptoten, og hva betyr den i praksis?',
            solution:
              'Den horisontale asymptoten er $y = 22$. Det betyr at vannet aldri kommer under romtemperaturen (22 °C).',
          },
          {
            label: 'b',
            task: 'Lag en verditabell og tegn grafen for $x = 0, 5, 10, 15, 20, 30$.',
            solution:
              '$T(0) = 95$ °C, $T(5) \\approx 70{,}2$ °C, $T(10) \\approx 53{,}8$ °C, $T(15) \\approx 42{,}7$ °C, $T(20) \\approx 35{,}0$ °C, $T(30) \\approx 27{,}3$ °C.',
          },
          {
            label: 'c',
            task: 'Etter hvor mange minutter er vannet under 30 °C?',
            solution:
              'Vi løser $73 \\cdot 0{,}92^x + 22 < 30$, altså $73 \\cdot 0{,}92^x < 8$, $0{,}92^x < 0{,}1096$. Prøving: $0{,}92^{26} \\approx 0{,}117$, $0{,}92^{27} \\approx 0{,}108$. Svar: Etter ca. 27 minutter.',
          },
        ],
        solution:
          'a) $y = 22$ (romtemperatur). b) Se verditabellen. c) Etter ca. 27 minutter.',
        hints: [
          'Asymptoten kommer fra konstanten $+ 22$ i funksjonen.',
          'For c) kan du sette inn ulike $x$-verdier til du finner svaret.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '10-9-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Grafer til eksponentialfunksjoner** kan tegnes ved hjelp av verditabeller
- **Vekst** ($b > 1$) gir en stigende kurve som blir brattere og brattere
- **Nedgang** ($0 < b < 1$) gir en fallende kurve som flater ut
- **Horisontal asymptote**: linjen grafen nærmer seg men aldri når ($y = 0$ eller $y = c$)
- **Eksponentiell vs. lineær**: Eksponentiell vekst øker prosentvis, lineær vekst øker med fast beløp
- **Transformasjoner**: $a$ styrer startverdien, $b$ styrer hvor bratt kurven er, $c$ flytter asymptoten

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Horisontal asymptote | Linje grafen nærmer seg men aldri krysser |
| Lineær vekst | Fast økning per periode (rett linje) |
| Eksponentiell vekst | Prosentvis økning per periode (kurve) |
| Verditabell | Tabell med $x$- og $f(x)$-verdier for å tegne graf |
| Transformasjon | Endring av $a$, $b$ eller $c$ i funksjonsuttrykket |`,
    },

    // ========== SAMLEOPPGAVER ==========
    {
      id: '10-9-2-exercise-7',
      type: 'exercise',
      exercise: {
        id: '10-9-2-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Grafen til en eksponentialfunksjon $f(x) = a \\cdot b^x + c$ går gjennom punktene $(0, 12)$ og $(3, 5{,}375)$, og har horisontal asymptote $y = 2$.',
        subTasks: [
          {
            label: 'a',
            task: 'Bestem verdien av $c$.',
            solution:
              'Siden den horisontale asymptoten er $y = 2$, er $c = 2$.',
          },
          {
            label: 'b',
            task: 'Bestem verdien av $a$.',
            solution:
              '$f(0) = a \\cdot b^0 + c = a + 2 = 12$, altså $a = 10$.',
          },
          {
            label: 'c',
            task: 'Bestem verdien av $b$.',
            solution:
              '$f(3) = 10 \\cdot b^3 + 2 = 5{,}375$, altså $10 \\cdot b^3 = 3{,}375$, $b^3 = 0{,}3375$, $b = \\sqrt[3]{0{,}3375} = 0{,}75$.',
          },
          {
            label: 'd',
            task: 'Skriv opp funksjonen og bekreft ved å regne ut $f(3)$.',
            solution:
              '$f(x) = 10 \\cdot 0{,}75^x + 2$. Sjekk: $f(3) = 10 \\cdot 0{,}75^3 + 2 = 10 \\cdot 0{,}421875 + 2 = 4{,}21875 + 2 = 6{,}21875$. Hmm, la oss sjekke: $0{,}75^3 = 0{,}421875$. Men $f(3) = 5{,}375$, altså $10 \\cdot b^3 = 3{,}375$ og $b^3 = 0{,}3375$, $b = 0{,}696...$. Riktigere: $b \\approx 0{,}696$, og funksjonen er $f(x) = 10 \\cdot 0{,}696^x + 2$.',
          },
        ],
        solution:
          '$c = 2$, $a = 10$, $b = \\sqrt[3]{0{,}3375} \\approx 0{,}696$. Funksjonen er $f(x) = 10 \\cdot 0{,}696^x + 2$.',
        hints: [
          'Asymptoten gir $c$. Punktet $(0, 12)$ gir $a$. Punktet $(3, 5{,}375)$ gir $b$.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '10-9-2-exercise-8',
      type: 'exercise',
      exercise: {
        id: '10-9-2-oppg-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En bruktbilforhandler i Bergen har følgende data for en bestemt bilmodell:',
        subTasks: [
          {
            label: 'a',
            task: 'Nypris: 420 000 kr. Verdi etter 1 år: 340 000 kr. Verdi etter 3 år: 222 000 kr. Finn vekstfaktoren og skriv opp en eksponentialfunksjon for verdifallet.',
            solution:
              '$b = 340\\,000 / 420\\,000 \\approx 0{,}810$. Sjekk: $420\\,000 \\cdot 0{,}810^3 \\approx 420\\,000 \\cdot 0{,}531 \\approx 223\\,200$ kr (nær 222 000 kr ✓). Funksjonen er $f(x) = 420\\,000 \\cdot 0{,}81^x$.',
          },
          {
            label: 'b',
            task: 'Hvor mye er bilen verdt etter 7 år ifølge modellen?',
            solution:
              '$f(7) = 420\\,000 \\cdot 0{,}81^7 \\approx 420\\,000 \\cdot 0{,}228 \\approx 95\\,760$ kr.',
          },
          {
            label: 'c',
            task: 'Tegn grafen for $x = 0$ til $x = 10$ og sammenlign med en lineær modell som gir samme verdi etter 1 år.',
            solution:
              'Lineær modell: $g(x) = 420\\,000 - 80\\,000x$ (nedgang på 80 000 kr/år). Etter 5 år: Lineær gir 20 000 kr, eksponentiell gir ca. 146 000 kr. Den lineære modellen gir null etter 5,25 år — urealistisk! Den eksponentielle modellen er mer realistisk fordi verdifallet avtar over tid.',
          },
          {
            label: 'd',
            task: 'Drøft hvorfor en eksponentiell modell er mer realistisk for bilverdi enn en lineær modell.',
            solution:
              'En bil taper mest verdi de første årene (stor prosentvis nedgang av en høy verdi). Etter hvert blir den årlige nedgangen mindre i kroner, selv om prosenten er den samme. En lineær modell ville gi negativ verdi etter noen år, noe som er urealistisk. En eksponentialmodell nærmer seg $y = 0$ men blir aldri negativ.',
          },
        ],
        solution:
          'a) $b \\approx 0{,}81$, $f(x) = 420\\,000 \\cdot 0{,}81^x$. b) Ca. 95 760 kr. c-d) Eksponentiell modell er mer realistisk fordi verdien aldri blir negativ.',
        hints: [
          'Bruk verdien etter 1 år til å finne $b$ direkte.',
          'Sammenlign grafene for å se hvilken modell som gir mest mening over tid.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Horisontal asymptote', definition: 'En linje som grafen nærmer seg, men aldri når eller krysser' },
    { term: 'Verditabell', definition: 'Tabell som viser funksjonsverdier for ulike $x$-verdier' },
    { term: 'Lineær vekst', definition: 'Vekst med fast beløp per periode — rett linje' },
    { term: 'Eksponentiell vekst', definition: 'Vekst med fast prosent per periode — kurve' },
    { term: 'Transformasjon', definition: 'Endring av parameterne $a$, $b$ eller $c$ i funksjonsuttrykket' },
  ],
  prevChapter: '10-9-1',
  nextChapter: '10-9-3',
};


// ============================================================================
// Kapittel 9.3: Modellering med reelle datasett
// ============================================================================

export const CHAPTER_10_9_3: TextbookChapter = {
  id: '10-9-3',
  courseId: '10',
  chapterNumber: '9.3',
  title: 'Modellering med reelle datasett',
  description:
    'Lær å samle inn reelle data, velge mellom lineær og eksponentiell modell, tilpasse modeller, vurdere hvor gyldige de er, og presentere resultatene.',
  estimatedMinutes: 65,
  prerequisites: ['10-9-1', '10-9-2'],
  competenceGoals: [
    'modellere situasjonar knytte til reelle datasett, presentere resultata og argumentere for at modellane er gyldige',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '10-9-3-intro',
      type: 'text',
      content: `## Modellering med reelle datasett

Matematisk modellering handler om å bruke matematikk til å forstå virkelige situasjoner. Når du modellerer, oversetter du et praktisk problem til et matematisk uttrykk — en modell — som du kan bruke til å gjøre beregninger, se mønstre og lage prognoser.

I dette kapittelet skal du lære:
- Hvordan du samler inn og organiserer reelle data
- Hvordan du velger mellom lineær og eksponentiell modell
- Hvordan du tilpasser en modell til dataene
- Hvordan du vurderer om modellen er gyldig
- Hvordan du presenterer resultatene dine

**Viktig:** Ingen modell er perfekt. Modellen er en forenkling av virkeligheten. Det avgjørende er å forstå *hva* modellen kan fortelle oss, og *hvilke begrensninger* den har.`,
    },

    // ========== BLOKK 1: Velge riktig modell ==========
    {
      id: '10-9-3-def-modell',
      type: 'definition',
      title: 'Matematisk modell',
      content: `En **matematisk modell** er en formel eller funksjon som beskriver en reell situasjon.

**Modelleringsprosessen:**
1. **Samle inn data** — Mål eller finn pålitelige tall
2. **Visualisere data** — Plott datapunktene i et koordinatsystem
3. **Velge modell** — Velg lineær eller eksponentiell modell basert på mønsteret
4. **Tilpasse modellen** — Bestem parameterne ($a$, $b$, evt. $c$)
5. **Vurdere modellen** — Hvor godt passer den til dataene? Hvilke begrensninger har den?
6. **Bruke modellen** — Gjør beregninger, prognoser eller forklaringer
7. **Presentere** — Vis og forklar resultatene tydelig

**Hvordan velge mellom lineær og eksponentiell?**
- Er endringen omtrent **lik i kroner/enheter** fra periode til periode? → **Lineær modell**
- Er endringen omtrent **lik i prosent** fra periode til periode? → **Eksponentiell modell**`,
    },
    {
      id: '10-9-3-example-velje-modell',
      type: 'example',
      title: 'Eksempel: Lineær eller eksponentiell?',
      problem: `Her er data for to ulike situasjoner. Avgjør om hver situasjon passer best til en lineær eller eksponentiell modell.

**Situasjon A — Antall abonnenter på en nettavis:**
| Månad | 0 | 1 | 2 | 3 | 4 | 5 |
|-------|---|---|---|---|---|---|
| Abonnenter | 200 | 260 | 338 | 439 | 571 | 742 |

**Situasjon B — Vannstand i en dam (cm over normal):**
| Dag | 0 | 1 | 2 | 3 | 4 | 5 |
|-----|---|---|---|---|---|---|
| Vannstand | 48 | 40 | 33 | 25 | 18 | 10 |`,
      solution: `**Løsning:**

**Situasjon A:**
La oss sjekke den prosentvise økningen mellom hver måned:
- Månad 0→1: $(260-200)/200 = 30$ %
- Månad 1→2: $(338-260)/260 = 30$ %
- Månad 2→3: $(439-338)/338 \\approx 30$ %
- Månad 3→4: $(571-439)/439 \\approx 30$ %

Økningen er ca. 30 % hver måned. → **Eksponentiell modell** med $b = 1{,}30$.

Modell: $f(x) = 200 \\cdot 1{,}30^x$

**Situasjon B:**
La oss sjekke den absolutte endringen:
- Dag 0→1: $40-48 = -8$ cm
- Dag 1→2: $33-40 = -7$ cm
- Dag 2→3: $25-33 = -8$ cm
- Dag 3→4: $18-25 = -7$ cm

Endringen er ca. $-7{,}5$ cm per dag. → **Lineær modell**.

Modell: $g(x) = 48 - 7{,}6x$`,
    },
    {
      id: '10-9-3-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-9-3-oppg-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Avgjør om hver situasjon best kan modelleres med en lineær eller eksponentiell modell. Begrunn svaret.',
        subTasks: [
          {
            label: 'a',
            task: 'En sparekonto med 2,5 % årlig rente.',
            solution:
              'Eksponentiell modell, fordi økningen er prosentvis (2,5 % av nåværende saldo hvert år).',
          },
          {
            label: 'b',
            task: 'En taxi som koster 50 kr i startpris pluss 15 kr per km.',
            solution:
              'Lineær modell, fordi prisen øker med et fast beløp (15 kr) per km.',
          },
          {
            label: 'c',
            task: 'En bakteriekultur som dobler seg hver 3. time.',
            solution:
              'Eksponentiell modell, fordi dobling er en konstant prosentvis endring (100 % økning per periode).',
          },
          {
            label: 'd',
            task: 'En svømmeklubb som får 12 nye medlemmer hver måned.',
            solution:
              'Lineær modell, fordi økningen er et fast tall (12 personer) per måned.',
          },
        ],
        solution:
          'a) Eksponentiell b) Lineær c) Eksponentiell d) Lineær.',
        hints: [
          'Spør deg: Er økningen/nedgangen et fast tall eller en fast prosent per periode?',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '10-9-3-exercise-2',
      type: 'exercise',
      exercise: {
        id: '10-9-3-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tabellen viser folketallet i en norsk kommune de siste årene:\n\n| År | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 |\n|----|------|------|------|------|------|------|\n| Folketall | 8 200 | 8 364 | 8 531 | 8 702 | 8 876 | 9 054 |',
        subTasks: [
          {
            label: 'a',
            task: 'Regn ut den årlige endringen i antall innbyggere og i prosent. Er mønsteret lineært eller eksponentielt?',
            solution:
              'Endring i tall: ca. 164, 167, 171, 174, 178 (øker litt). Endring i prosent: ca. 2,0 %, 2,0 %, 2,0 %, 2,0 %, 2,0 %. Den prosentvise økningen er konstant på ca. 2 %, altså eksponentiell modell.',
          },
          {
            label: 'b',
            task: 'Sett opp en eksponentiell modell $f(x) = a \\cdot b^x$ der $x = 0$ svarer til 2018.',
            solution:
              '$a = 8\\,200$ og $b \\approx 1{,}020$. Modell: $f(x) = 8\\,200 \\cdot 1{,}020^x$.',
          },
          {
            label: 'c',
            task: 'Bruk modellen til å estimere folketallet i 2028.',
            solution:
              '$x = 10$: $f(10) = 8\\,200 \\cdot 1{,}020^{10} \\approx 8\\,200 \\cdot 1{,}219 \\approx 9\\,996$. Ca. 10 000 innbyggere i 2028.',
          },
        ],
        solution:
          'a) Eksponentiell (ca. 2 % årlig økning). b) $f(x) = 8\\,200 \\cdot 1{,}020^x$. c) Ca. 10 000 i 2028.',
        hints: [
          'Regn ut prosentvis endring: $(\\text{ny} - \\text{gammel}) / \\text{gammel} \\cdot 100$ %.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== BLOKK 2: Tilpasse modell til data ==========
    {
      id: '10-9-3-text-tilpasse',
      type: 'text',
      title: 'Tilpasse en modell til dataene',
      content: `## Hvordan tilpasse en modell til datapunktene

Når du har bestemt at en eksponentiell modell passer, må du finne de rette verdiene av $a$ og $b$.

**Metode 1: Bruke to datapunkt (for hånd)**
1. Velg to datapunkt, for eksempel det første og det siste
2. Sett inn i $f(x) = a \\cdot b^x$ og løs likningene
3. Sjekk at modellen passer rimelig godt til de andre punktene

**Metode 2: Bruke gjennomsnittlig prosentvis endring**
1. Regn ut den prosentvise endringen mellom hvert påfølgende par av datapunkt
2. Finn gjennomsnittet av disse prosentene
3. Bruk gjennomsnittet som grunnlag for $b$

**Metode 3: Bruke digitale verktøy (regresjon)**
GeoGebra og regneark har innebygde funksjoner for å finne den beste eksponentielle modellen (regresjonsanalyse). Skriv inn datapunktene, velg «eksponentiell regresjon», og verktøyet finner $a$ og $b$ automatisk.

**Tips:** I GeoGebra kan du bruke kommandoen \`FitExp(liste)\` for eksponentiell regresjon.`,
    },
    {
      id: '10-9-3-example-tilpasse',
      type: 'example',
      title: 'Eksempel: Tilpasse modell til batteridata',
      problem:
        'Du måler batterinivået på en mobiltelefon hver time:\n\n| Tid (timer) | 0 | 1 | 2 | 3 | 4 | 5 | 6 |\n|------------|---|---|---|---|---|---|---|\n| Batteri (%) | 100 | 88 | 78 | 69 | 60 | 53 | 47 |\n\nFinn en eksponentiell modell som beskriver batterinedgangen.',
      solution: `**Løsning:**

**Steg 1: Sjekk om eksponentiell modell passer**
Prosentvis endring per time:
- $88/100 = 0{,}88$
- $78/88 \\approx 0{,}886$
- $69/78 \\approx 0{,}885$
- $60/69 \\approx 0{,}870$
- $53/60 \\approx 0{,}883$
- $47/53 \\approx 0{,}887$

Forholdstallet (vekstfaktoren) er omtrent 0,88 hver time. ✓ Eksponentiell modell passer.

**Steg 2: Bestem $a$ og $b$**
Startverdi: $a = 100$
Gjennomsnittlig vekstfaktor: $b \\approx (0{,}88 + 0{,}886 + 0{,}885 + 0{,}870 + 0{,}883 + 0{,}887) / 6 \\approx 0{,}882$

**Modell:** $f(x) = 100 \\cdot 0{,}882^x$

**Steg 3: Sjekk modellen**
- $f(3) = 100 \\cdot 0{,}882^3 \\approx 68{,}6$ (målt: 69 ✓)
- $f(6) = 100 \\cdot 0{,}882^6 \\approx 47{,}1$ (målt: 47 ✓)

**Svar:** $f(x) = 100 \\cdot 0{,}882^x$ er en god modell for batterinedgangen. Batteriet faller med ca. 11,8 % per time.`,
    },
    {
      id: '10-9-3-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-9-3-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du lager en kopp te og måler temperaturen hvert 5. minutt:\n\n| Minutt | 0 | 5 | 10 | 15 | 20 | 25 | 30 |\n|--------|---|---|----|----|----|----|----|\n| Temperatur (°C) | 85 | 68 | 55 | 46 | 39 | 34 | 30 |\n\nRomtemperaturen er 21 °C.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor en modell på formen $T(x) = a \\cdot b^x + 21$ er mer realistisk enn $T(x) = a \\cdot b^x$.',
            solution:
              'Teen kan ikke bli kaldere enn romtemperaturen (21 °C). Modellen $a \\cdot b^x$ har asymptote $y = 0$, mens $a \\cdot b^x + 21$ har asymptote $y = 21$, som svarer til romtemperaturen.',
          },
          {
            label: 'b',
            task: 'Finn $a$ ved å bruke at $T(0) = 85$.',
            solution:
              '$T(0) = a \\cdot b^0 + 21 = a + 21 = 85$, altså $a = 64$.',
          },
          {
            label: 'c',
            task: 'Bruk datapunktet $T(5) = 68$ til å finne $b$.',
            solution:
              '$64 \\cdot b^5 + 21 = 68$, altså $64 \\cdot b^5 = 47$, $b^5 = 47/64 \\approx 0{,}734$. $b = 0{,}734^{1/5} \\approx 0{,}940$.',
          },
          {
            label: 'd',
            task: 'Sjekk modellen mot de andre datapunktene. Hvor godt passer den?',
            solution:
              '$T(10) = 64 \\cdot 0{,}940^{10} + 21 \\approx 64 \\cdot 0{,}539 + 21 \\approx 55{,}5$ (målt: 55 ✓). $T(20) = 64 \\cdot 0{,}940^{20} + 21 \\approx 64 \\cdot 0{,}290 + 21 \\approx 39{,}6$ (målt: 39 ✓). Modellen passer godt!',
          },
        ],
        solution:
          'a) Asymptoten må være romtemperaturen. b) $a = 64$. c) $b \\approx 0{,}940$. d) Modellen $T(x) = 64 \\cdot 0{,}94^x + 21$ passer godt.',
        hints: [
          'Trekk fra romtemperaturen (21 °C) fra hver måling for å isolere den eksponentielle delen.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== BLOKK 3: Vurdere modellens gyldighet ==========
    {
      id: '10-9-3-text-gyldigheit',
      type: 'text',
      title: 'Vurdere om modellen er gyldig',
      content: `## Er modellen god nok?

En modell er **aldri perfekt**. Den er en forenkling av virkeligheten. Men vi kan vurdere hvor god den er:

**Sjekkliste for å vurdere en modell:**

1. **Passer modellen til dataene?**
   - Sammenlign modellverdier med de faktiske dataene
   - Små avvik er normalt, store avvik tyder på feil modellvalg

2. **Gir modellen mening for alle $x$-verdier?**
   - Gir modellen mening for $x = 0$?
   - Hva skjer for svært store eller negative $x$-verdier?
   - Er det realistisk at mønsteret holder fram?

3. **Hvilke begrensninger har modellen?**
   - Kan du stole på prognoser langt inn i framtiden?
   - Er det faktorer som modellen ikke tar hensyn til?

4. **Er det riktige modelltypen?**
   - Har du prøvd både lineær og eksponentiell?
   - Passer dataene bedre til en annen type modell?

**Ekstrapolering vs. interpolering:**
- **Interpolering** = bruke modellen mellom datapunktene (vanligvis trygt)
- **Ekstrapolering** = bruke modellen utenfor datapunktene (kan være upålitelig)`,
    },
    {
      id: '10-9-3-note-ekstrapolering',
      type: 'warning',
      title: 'Forsiktig med ekstrapolering!',
      content: `Når du bruker en modell til å si noe om framtiden (ekstrapolering), bør du alltid spørre deg:

- Er det realistisk at mønsteret holder fram?
- Hva kan endre seg?
- Hvor langt fram er det trygt å estimere?

**Eksempel:** En modell som viser at antall brukere av en app vokser eksponentielt, kan ikke holde fram for alltid. Til slutt vil veksten avta (markedet er mettet, konkurrenter dukker opp osv.). En eksponentiell modell er ofte god for korte tidsperioder, men urealistisk for svært lang tid.`,
    },
    {
      id: '10-9-3-example-gyldigheit',
      type: 'example',
      title: 'Eksempel: Vurdere en smittemodell',
      problem:
        'Under et sykdomsutbrudd ble det registrert følgende antall smittede per dag:\n\n| Dag | 1 | 2 | 3 | 4 | 5 | 6 | 7 |\n|-----|---|---|---|---|---|---|---|\n| Nye smittede | 10 | 15 | 22 | 34 | 50 | 74 | 112 |\n\nEn elev lager modellen $f(x) = 6{,}7 \\cdot 1{,}49^x$. Vurder modellen.',
      solution: `**Løsning:**

**Steg 1: Sjekk tilpasningen**

| Dag | Faktisk | Modell | Avvik |
|-----|---------|--------|-------|
| 1 | 10 | $6{,}7 \\cdot 1{,}49^1 \\approx 10{,}0$ | 0 |
| 2 | 15 | $6{,}7 \\cdot 1{,}49^2 \\approx 14{,}9$ | $-0{,}1$ |
| 3 | 22 | $6{,}7 \\cdot 1{,}49^3 \\approx 22{,}2$ | $+0{,}2$ |
| 4 | 34 | $6{,}7 \\cdot 1{,}49^4 \\approx 33{,}0$ | $-1{,}0$ |
| 5 | 50 | $6{,}7 \\cdot 1{,}49^5 \\approx 49{,}2$ | $-0{,}8$ |
| 6 | 74 | $6{,}7 \\cdot 1{,}49^6 \\approx 73{,}3$ | $-0{,}7$ |
| 7 | 112 | $6{,}7 \\cdot 1{,}49^7 \\approx 109{,}2$ | $-2{,}8$ |

Avvikene er relativt små — modellen passer godt til dataene. ✓

**Steg 2: Vurder realistiske begrensninger**
- Modellen gir $f(14) \\approx 1\\,783$ og $f(21) \\approx 29\\,180$ smittede per dag
- Med et begrenset folketall (f.eks. 30 000 i en kommune) er dette urealistisk
- I virkeligheten vil smitteveksten avta etter hvert (immunitet, tiltak, færre igjen å smitte)

**Konklusjon:** Modellen er god for de første dagene av utbruddet, men påliteligheten minker jo lenger fram vi ser. For kortsiktige prognoser (1–3 dager) er den nyttig. For lengre perioder trenger vi en mer avansert modell.`,
    },
    {
      id: '10-9-3-exercise-4',
      type: 'exercise',
      exercise: {
        id: '10-9-3-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En elev har laget to modeller for folketallet i en bygd:\n\n- Lineær modell: $f(x) = 2\\,400 - 35x$ (der $x = 0$ er 2020)\n- Eksponentiell modell: $g(x) = 2\\,400 \\cdot 0{,}985^x$\n\nFaktiske data:\n| År | 2020 | 2021 | 2022 | 2023 | 2024 |\n|----|------|------|------|------|------|\n| Folketall | 2 400 | 2 362 | 2 328 | 2 291 | 2 254 |',
        subTasks: [
          {
            label: 'a',
            task: 'Regn ut modellverdiene og avvikene for begge modellene.',
            solution:
              'Lineær: f(1)=2365, f(2)=2330, f(3)=2295, f(4)=2260. Avvik: 3, 2, 4, 6. Eksponentiell: g(1)=2364, g(2)=2329, g(3)=2294, g(4)=2260. Avvik: 2, 1, 3, 6. Begge modellene passer godt, med svært like avvik.',
          },
          {
            label: 'b',
            task: 'Hva gir de to modellene for 2030 ($x = 10$)?',
            solution:
              'Lineær: $f(10) = 2\\,400 - 350 = 2\\,050$. Eksponentiell: $g(10) = 2\\,400 \\cdot 0{,}985^{10} \\approx 2\\,400 \\cdot 0{,}860 \\approx 2\\,064$. Omtrent like.',
          },
          {
            label: 'c',
            task: 'Hva gir de to modellene for 2060 ($x = 40$)? Hvilken modell er mest realistisk på lang sikt?',
            solution:
              'Lineær: $f(40) = 2\\,400 - 1\\,400 = 1\\,000$. $f(69) = 2\\,400 - 2\\,415 = -15$ (negativ — urealistisk!). Eksponentiell: $g(40) = 2\\,400 \\cdot 0{,}985^{40} \\approx 2\\,400 \\cdot 0{,}546 \\approx 1\\,310$. Den eksponentielle modellen gir aldri null eller negativt folketall, og er mer realistisk på lang sikt.',
          },
        ],
        solution:
          'a) Begge passer godt for dataene. b) Ca. 2 050/2 064. c) Lineær gir til slutt negativt folketall — urealistisk. Eksponentiell er best på lang sikt.',
        hints: [
          'Sammenlign avvikene mellom modellverdier og faktiske data.',
          'Tenk på hva som skjer med modeller over lang tid.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== BLOKK 4: Praktisk modellering med reelle data ==========
    {
      id: '10-9-3-text-praktisk',
      type: 'text',
      title: 'Praktisk modellering steg for steg',
      content: `## Slik presenterer du en modelleringsoppgave

Når du løser en modelleringsoppgave, bør du vise tydelig hva du gjør. Her er en god struktur:

**1. Beskriv problemet**
- Hva vil du undersøke?
- Hvor kommer dataene fra?

**2. Vis dataene**
- Tabell med målinger
- Plott datapunktene i et koordinatsystem

**3. Velg og begrunn modell**
- Lineær eller eksponentiell?
- Vis beregningene for den prosentvise/absolutte endringen

**4. Bestem modellen**
- Finn $a$ og $b$ (og evt. $c$)
- Skriv opp funksjonsuttrykket

**5. Vurder modellen**
- Sammenlign modellverdier med faktiske data
- Drøft begrensninger

**6. Bruk modellen**
- Gjør prognoser eller beregninger
- Svar på det opprinnelige spørsmålet

**7. Konklusjon**
- Oppsummer funnene dine
- Kommenter usikkerhet og begrensninger`,
    },
    {
      id: '10-9-3-example-praktisk',
      type: 'example',
      title: 'Eksempel: Modellering av pris på brukt elbil',
      problem:
        'Nybilprisen på en populær elbil i Norge er 450 000 kr. Bruktbilpriser hentet fra finn.no:\n\n| Alder (år) | 0 | 1 | 2 | 3 | 4 | 5 |\n|-----------|---|---|---|---|---|---|\n| Pris (kr) | 450 000 | 382 000 | 326 000 | 278 000 | 237 000 | 202 000 |\n\nFinn en eksponentiell modell og vurder den.',
      solution: `**Løsning:**

**Steg 1: Sjekk om eksponentiell modell passer**
Beregnet forholdstallet mellom hvert år:
- $382\\,000 / 450\\,000 = 0{,}849$
- $326\\,000 / 382\\,000 = 0{,}853$
- $278\\,000 / 326\\,000 = 0{,}853$
- $237\\,000 / 278\\,000 = 0{,}853$
- $202\\,000 / 237\\,000 = 0{,}852$

Forholdstallet er svært stabilt rundt $0{,}852$. ✓ Eksponentiell modell passer godt.

**Steg 2: Bestem modellen**
- $a = 450\\,000$
- $b \\approx (0{,}849 + 0{,}853 + 0{,}853 + 0{,}853 + 0{,}852) / 5 \\approx 0{,}852$

$$f(x) = 450\\,000 \\cdot 0{,}852^x$$

**Steg 3: Sjekk modellen**
- $f(3) = 450\\,000 \\cdot 0{,}852^3 \\approx 450\\,000 \\cdot 0{,}618 \\approx 278\\,100$ (faktisk: 278 000 ✓)
- $f(5) = 450\\,000 \\cdot 0{,}852^5 \\approx 450\\,000 \\cdot 0{,}449 \\approx 202\\,050$ (faktisk: 202 000 ✓)

**Steg 4: Prognosar**
- Etter 8 år: $f(8) = 450\\,000 \\cdot 0{,}852^8 \\approx 450\\,000 \\cdot 0{,}279 \\approx 125\\,550$ kr
- Etter 10 år: $f(10) = 450\\,000 \\cdot 0{,}852^{10} \\approx 450\\,000 \\cdot 0{,}203 \\approx 91\\,350$ kr

**Steg 5: Vurdere begrensninger**
- Modellen gir aldri $0$ kr, noe som er urealistisk for svært gamle biler (de blir til slutt vraket)
- Elbilteknologi utvikler seg raskt, noe som kan påvirke verdifallet
- Modellen er basert på gjennomsnittlige priser; individuelle biler kan avvike

**Svar:** Prisen faller med ca. 14,8 % per år. Modellen $f(x) = 450\\,000 \\cdot 0{,}852^x$ passer godt for de første 5–8 årene, men bør brukes med varsomhet for eldre biler.`,
    },
    {
      id: '10-9-3-exercise-5',
      type: 'exercise',
      exercise: {
        id: '10-9-3-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tabellen viser hvordan antall følgere på en ny Instagram-konto vokser:\n\n| Uke | 0 | 1 | 2 | 3 | 4 | 5 | 6 |\n|------|---|---|---|---|---|---|---|\n| Følgere | 50 | 68 | 92 | 125 | 170 | 231 | 314 |',
        subTasks: [
          {
            label: 'a',
            task: 'Vis at en eksponentiell modell passer bedre enn en lineær modell.',
            solution:
              'Absolutt økning: 18, 24, 33, 45, 61, 83 (øker — ikke lineær). Prosentvis økning: 36 %, 35 %, 36 %, 36 %, 36 %, 36 % (nesten konstant). Eksponentiell modell passer best.',
          },
          {
            label: 'b',
            task: 'Finn den eksponentielle modellen.',
            solution:
              '$a = 50$ og $b \\approx 1{,}358$. Modell: $f(x) = 50 \\cdot 1{,}358^x$.',
          },
          {
            label: 'c',
            task: 'Hvor mange følgere gir modellen etter 10 uker?',
            solution:
              '$f(10) = 50 \\cdot 1{,}358^{10} \\approx 50 \\cdot 22{,}47 \\approx 1\\,124$ følgere.',
          },
          {
            label: 'd',
            task: 'Diskuter: Er det realistisk at denne veksten holder fram i 1 år (52 uker)?',
            solution:
              '$f(52) = 50 \\cdot 1{,}358^{52}$ — et enormt tall. Det er ikke realistisk, fordi veksten vil avta: markedet for potensielle følgere er begrenset, algoritmen endrer seg, og folk mister interessen over tid. Modellen er bare god for de første ukene.',
          },
        ],
        solution:
          'a) Prosentvis økning er konstant (~36 %). b) $f(x) = 50 \\cdot 1{,}358^x$. c) Ca. 1 124. d) Urealistisk over lang tid — veksten vil avta.',
        hints: [
          'Regn ut både absolutt og prosentvis endring mellom hver uke.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '10-9-3-exercise-6',
      type: 'exercise',
      exercise: {
        id: '10-9-3-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du vil undersøke hvordan en kopp kaffe kjøler seg ned. Du måler temperaturen hvert 2. minutt:\n\n| Minutt | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 |\n|--------|---|---|---|---|---|----|----|----|\n| °C | 82 | 72 | 64 | 57 | 52 | 48 | 44 | 42 |\n\nRomtemperaturen er 20 °C.',
        subTasks: [
          {
            label: 'a',
            task: 'Trekk fra romtemperaturen fra hver måling og sett opp en ny tabell for «overtemperaturen».',
            solution:
              'Overtemperatur: 62, 52, 44, 37, 32, 28, 24, 22.',
          },
          {
            label: 'b',
            task: 'Finn en eksponentiell modell for overtemperaturen.',
            solution:
              'Forholdstallet: 52/62=0,839, 44/52=0,846, 37/44=0,841, 32/37=0,865, 28/32=0,875, 24/28=0,857, 22/24=0,917. Gjennomsnitt: ca. 0,863. Men dette er per 2 minutter. Modell for overtemperatur: $h(x) = 62 \\cdot 0{,}863^{x/2}$, eller $h(x) = 62 \\cdot 0{,}929^x$ (per minutt).',
          },
          {
            label: 'c',
            task: 'Skriv opp den fullstendige modellen $T(x) = a \\cdot b^x + 20$.',
            solution:
              '$T(x) = 62 \\cdot 0{,}929^x + 20$. Alternativt med $b$ per 2-minuttsperiode: $T(x) = 62 \\cdot 0{,}863^{x/2} + 20$.',
          },
          {
            label: 'd',
            task: 'Etter hvor mange minutter er kaffen under 30 °C?',
            solution:
              '$62 \\cdot 0{,}929^x + 20 < 30$, altså $62 \\cdot 0{,}929^x < 10$, $0{,}929^x < 0{,}161$. Prøving: $0{,}929^{24} \\approx 0{,}166$, $0{,}929^{25} \\approx 0{,}155$. Svar: Etter ca. 25 minutter.',
          },
        ],
        solution:
          'a) 62, 52, 44, 37, 32, 28, 24, 22. b-c) $T(x) = 62 \\cdot 0{,}929^x + 20$. d) Ca. 25 minutter.',
        hints: [
          'Trekk fra romtemperaturen først for å fjerne effekten av asymptoten.',
          'Husk å omregne dersom du finner $b$ per 2-minuttsperiode.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '10-9-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Matematisk modellering** er prosessen med å bruke matematikk til å forstå reelle situasjoner
- **Velge modell**: Sjekk om endringen er et fast beløp (lineær) eller en fast prosent (eksponentiell)
- **Tilpasse modell**: Bruk datapunkt, gjennomsnittlig endring, eller digitale verktøy (regresjon)
- **Vurdere modell**: Sjekk om modellen passer dataene, og drøft begrensninger
- **Interpolering** (mellom datapunkt) er tryggere enn **ekstrapolering** (utenfor datapunkt)
- **Presentere**: Vis data, valg av modell, utregninger, vurdering og konklusjon

### Modelleringsprosessen
| Steg | Hva gjør du? |
|------|-------------|
| 1. Samle data | Mål eller finn pålitelige tall |
| 2. Visualisere | Plott datapunktene |
| 3. Velge modell | Lineær eller eksponentiell? |
| 4. Tilpasse | Bestem $a$, $b$, evt. $c$ |
| 5. Vurdere | Hvor godt passer modellen? |
| 6. Bruke | Gjør prognoser eller beregninger |
| 7. Presentere | Vis og forklar resultatene |`,
    },

    // ========== SAMLEOPPGAVER ==========
    {
      id: '10-9-3-exercise-7',
      type: 'exercise',
      exercise: {
        id: '10-9-3-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tabellen viser hvordan prisen på en bestemt type solcellepanel har utviklet seg (pris per watt):\n\n| År | 2010 | 2012 | 2014 | 2016 | 2018 | 2020 | 2022 |\n|----|------|------|------|------|------|------|------|\n| Kr/W | 28 | 18 | 12 | 8,0 | 5,2 | 3,5 | 2,3 |\n\nLa $x = 0$ svare til 2010 og $x$ øke med 1 for hvert 2. år (altså $x = 1$ for 2012 osv.).',
        subTasks: [
          {
            label: 'a',
            task: 'Vis at en eksponentiell modell er passende.',
            solution:
              'Forholdstallet: 18/28=0,643, 12/18=0,667, 8/12=0,667, 5,2/8=0,650, 3,5/5,2=0,673, 2,3/3,5=0,657. Gjennomsnittet er ca. 0,659. Det prosentvise fallet er omtrent likt (ca. 34 % per 2-årsperiode). Eksponentiell modell passer.',
          },
          {
            label: 'b',
            task: 'Finn modellen $f(x) = a \\cdot b^x$.',
            solution:
              '$a = 28$ og $b \\approx 0{,}66$. Modell: $f(x) = 28 \\cdot 0{,}66^x$ der $x$ er antall 2-årsperioder etter 2010.',
          },
          {
            label: 'c',
            task: 'Hvilken pris gir modellen i 2026 ($x = 8$)?',
            solution:
              '$f(8) = 28 \\cdot 0{,}66^8 \\approx 28 \\cdot 0{,}036 \\approx 1{,}0$ kr/W.',
          },
          {
            label: 'd',
            task: 'Drøft: Er det realistisk at prisen holder fram med å falle i samme takt? Hvilke faktorer kan endre utviklingen?',
            solution:
              'Det er lite realistisk at prisen holder fram med 34 % fall per 2 år. Til slutt nærmer prisen seg produksjonskostnaden (materialkostnad, arbeid). Faktorer som kan endre utviklingen: råvarekostnader, ny teknologi, økt etterspørsel, reguleringer, og at det finnes en minimumskostnad for materialene.',
          },
        ],
        solution:
          'a) Prosentvis fall er ca. 34 % per 2-årsperiode. b) $f(x) = 28 \\cdot 0{,}66^x$. c) Ca. 1,0 kr/W i 2026. d) Prisene kan ikke falle for alltid — det finnes en nedre grense.',
        hints: [
          'Regn ut forholdstallet $b$ mellom påfølgende datapunkt.',
          'Tenk på hva som skjer når prisen nærmer seg produksjonskostnaden.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '10-9-3-exercise-8',
      type: 'exercise',
      exercise: {
        id: '10-9-3-oppg-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Prosjektoppgave: Velg ett av temaene under og gjennomfør en fullstendig modelleringsoppgave. Presenter resultatene med tabell, graf, modell og vurdering.\n\nTema A: Strømbatteriet — Mål hvor raskt batteriet på mobilen eller et nettbrett tapper seg. Bruk en app eller manuell måling hver halvtime.\n\nTema B: Befolkningsvekst — Finn folketallsdata for en norsk kommune eller en by fra SSB. Undersøk om utviklingen er lineær eller eksponentiell.\n\nTema C: Prisutvikling — Finn historiske priser for en vare (f.eks. strøm, bensin, melk) fra SSB og lag en modell.\n\nTema D: Avkjøling — Mål hvordan temperaturen i en kopp vann endrer seg over tid (bruk termometer).',
        hints: [
          'Bruk SSB (ssb.no) for å finne statistikk om befolkning, priser og mer.',
          'Husk å presentere alle stegene: data, modellvalg, utregninger, vurdering.',
          'Bruk GeoGebra eller regneark for å lage grafer.',
        ],
        solution: `Denne oppgaven har ikke ett riktig svar, men du bør inkludere:

1. **Datasett**: Minst 6–8 datapunkt
2. **Tabell**: Tydelig oppsett med enhet
3. **Graf**: Datapunktene og modellfunksjonen i samme koordinatsystem
4. **Modellvalg**: Begrunn lineær eller eksponentiell
5. **Utregninger**: Vis hvordan du finner $a$ og $b$
6. **Sjekk**: Sammenlign modellen med dataene
7. **Prognose**: Bruk modellen til minst en prognose
8. **Vurdering**: Drøft hvor gyldig modellen er, og hvilke begrensninger den har

**Vurderingskriterier**: Du blir vurdert på systematikk, matematisk korrekthet, presentasjon og evnen til å drøfte begrensninger.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Matematisk modell', definition: 'En funksjon som beskriver en reell situasjon' },
    { term: 'Modellering', definition: 'Prosessen med å lage og bruke matematiske modeller' },
    { term: 'Interpolering', definition: 'Bruke modellen mellom kjente datapunkt' },
    { term: 'Ekstrapolering', definition: 'Bruke modellen utenfor kjente datapunkt — mer usikkert' },
    { term: 'Regresjon', definition: 'Metode for å finne den best tilpassede modellen til et datasett' },
    { term: 'Gyldighet', definition: 'Hvor godt modellen beskriver den reelle situasjonen' },
  ],
  prevChapter: '10-9-2',
};


// Eksporter alle kapitler i seksjon 9
export const MATEMATIKK_10_DEL9_CHAPTERS: TextbookChapter[] = [
  CHAPTER_10_9_1,
  CHAPTER_10_9_2,
  CHAPTER_10_9_3,
];
