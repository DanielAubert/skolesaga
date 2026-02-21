/**
 * Tekstbok kapitler for s2 - Kapittel 8 (Økonomiske anvendelser)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_S2_8_1: TextbookChapter = {
  id: 's2-8-1',
  courseId: 's2',
  chapterNumber: '8.1',
  title: 'Kostnads- og inntektsfunksjoner',
  description: 'Lær om totalkostnad, gjennomsnittskostnad, marginalkostnad, totalinntekt og grenseinntekt i matematisk analyse av bedriftsøkonomi.',
  estimatedMinutes: 60,
  competenceGoals: [
    'modellere og analysere økonomiske problemstillinger ved hjelp av funksjoner og derivasjon',
    'tolke den deriverte i praktiske sammenhenger, spesielt i økonomi'
  ],
  content: [
    {
      id: 's2-8-1-intro',
      type: 'text',
      content: `## Matematiske modeller i økonomi

I S2 bruker vi matematisk analyse til å modellere og forstå økonomiske sammenhenger. En bedrift har **kostnader** knyttet til produksjon og **inntekter** fra salg. Ved å beskrive disse som funksjoner av antall produserte enheter $x$, kan vi bruke derivasjon til å analysere bedriftens økonomi.

Vi starter med de grunnleggende kostnadsbegrepene og bygger opp et rammeverk som lar oss finne optimale produksjonsnivåer og analysere lønnsomhet.`
    },
    {
      id: 's2-8-1-def-1',
      type: 'definition',
      title: 'Kostnadsfunksjoner',
      content: `La $K(x)$ være **totalkostnaden** ved å produsere $x$ enheter av en være.

- **Faste kostnader**: $K(0)$ - kostnader som påløper uavhengig av produksjon (husleie, forsikring, etc.)
- **Variable kostnader**: $K(x) - K(0)$ - kostnader som avhenger av produksjonsmengden

Vi kan skrive:
$$K(x) = \\text{faste kostnader} + \\text{variable kostnader}$$

For eksempel: $K(x) = 0{,}01x^3 - 0{,}6x^2 + 15x + 100$

Her er $100$ de faste kostnadene og $0{,}01x^3 - 0{,}6x^2 + 15x$ de variable kostnadene.`
    },
    {
      id: 's2-8-1-def-2',
      type: 'definition',
      title: 'Enhetskostnad og marginalkostnad',
      content: `**Enhetskostnad** (gjennomsnittskostnad) er den gjennomsnittlige kostnaden per enhet:
$$E(x) = \\frac{K(x)}{x}$$

**Marginalkostnad** er den deriverte av totalkostnaden:
$$K'(x) = \\frac{dK}{dx}$$

Marginalkostnaden gir tilnærmet kostnaden ved å produsere én enhet til:
$$K'(x) \\approx K(x+1) - K(x)$$

Marginalkostnaden forteller altså hvor mye det koster å øke produksjonen med én enhet fra nivået $x$.`
    },
    {
      id: 's2-8-1-theorem-1',
      type: 'theorem',
      title: 'Minimumspunkt for enhetskostnaden',
      content: `Enhetskostnaden $E(x) = \\frac{K(x)}{x}$ har minimum der:

$$E'(x) = 0 \\quad \\Leftrightarrow \\quad \\frac{K'(x) \\cdot x - K(x)}{x^2} = 0 \\quad \\Leftrightarrow \\quad K'(x) = \\frac{K(x)}{x} = E(x)$$

Altså: **Enhetskostnaden er minst der marginalkostnaden er lik enhetskostnaden.**

Dette er et viktig resultat: Når $K'(x) < E(x)$ synker enhetskostnaden, og når $K'(x) > E(x)$ stiger den. Skjæringspunktet mellom $K'(x)$ og $E(x)$ gir minimum enhetskostnad.`
    },
    {
      id: 's2-8-1-example-1',
      type: 'example',
      title: 'Kostnadsfunksjon for en bedrift',
      problem: `En bedrift har totalkostnaden $K(x) = 0{,}01x^3 - 0{,}6x^2 + 15x + 200$ kroner, der $x$ er antall enheter produsert.

a) Finn de faste kostnadene.
b) Finn marginalkostnaden $K'(x)$ og beregn $K'(20)$. Tolk svaret.
c) Finn enhetskostnaden $E(x)$ og bestem for hvilken $x$ enhetskostnaden er minst.`,
      solution: `**a) Faste kostnader:**
$K(0) = 200$ kroner.

**b) Marginalkostnad:**
$$K'(x) = 0{,}03x^2 - 1{,}2x + 15$$

$$K'(20) = 0{,}03 \\cdot 400 - 1{,}2 \\cdot 20 + 15 = 12 - 24 + 15 = 3$$

**Tolkning:** Når bedriften produserer 20 enheter, koster det omtrent 3 kroner å produsere én enhet til.

**c) Enhetskostnad:**
$$E(x) = \\frac{K(x)}{x} = 0{,}01x^2 - 0{,}6x + 15 + \\frac{200}{x}$$

Vi setter $E'(x) = 0$:
$$E'(x) = 0{,}02x - 0{,}6 - \\frac{200}{x^2} = 0$$

Alternativt bruker vi at $E(x)$ er minst når $K'(x) = E(x)$:
$$0{,}03x^2 - 1{,}2x + 15 = 0{,}01x^2 - 0{,}6x + 15 + \\frac{200}{x}$$

$$0{,}02x^2 - 0{,}6x = \\frac{200}{x}$$

$$0{,}02x^3 - 0{,}6x^2 = 200$$

$$x^3 - 30x^2 = 10000$$

Ved numerisk løsning (eller CAS) får vi $x \\approx 38{,}7$.

Enhetskostnaden er altså minst ved produksjon av ca. 39 enheter.`
    },
    {
      id: 's2-8-1-text-inntekt',
      type: 'text',
      content: `## Inntektsfunksjoner

Når en bedrift selger $x$ enheter til en pris $p(x)$ per enhet, får vi:

**Totalinntekt:**
$$I(x) = p(x) \\cdot x$$

Hvis prisen er konstant (fullkommen konkurranse), er $p(x) = p$ og $I(x) = px$, som gir $I'(x) = p$.

Ofte er prisen avhengig av mengden (etterspørselsfunksjon). Dersom etterspørselen er gitt ved $p(x) = a - bx$, får vi:
$$I(x) = (a - bx) \\cdot x = ax - bx^2$$

**Grenseinntekt** (marginalinntekt) er den deriverte av totalinntekten:
$$I'(x) = \\frac{dI}{dx}$$

Grenseinntekten gir tilnærmet inntektsøkningen ved å selge én enhet til.`
    },
    {
      id: 's2-8-1-def-3',
      type: 'definition',
      title: 'Grenseinntekt',
      content: `**Grenseinntekten** (marginalinntekten) er den deriverte av totalinntekten:
$$I'(x) = \\frac{dI}{dx}$$

For en lineær etterspørselsfunksjon $p(x) = a - bx$ er:
$$I(x) = ax - bx^2 \\quad \\Rightarrow \\quad I'(x) = a - 2bx$$

Legg merke til at grenseinntekten avtar dobbelt så raskt som prisen. Grafisk betyr dette at grenseinntektskurven har dobbelt så bratt helning som etterspørselskurven.`
    },
    {
      id: 's2-8-1-example-2',
      type: 'example',
      title: 'Inntektsfunksjon med lineær etterspørsel',
      problem: `En bedrift har etterspørselsfunksjonen $p(x) = 120 - 2x$ der $p$ er prisen i kroner og $x$ er antall enheter solgt.

a) Finn totalinntekten $I(x)$.
b) Finn grenseinntekten $I'(x)$ og beregn $I'(25)$. Tolk svaret.
c) For hvilken $x$ er totalinntekten størst?`,
      solution: `**a) Totalinntekt:**
$$I(x) = p(x) \\cdot x = (120 - 2x) \\cdot x = 120x - 2x^2$$

**b) Grenseinntekt:**
$$I'(x) = 120 - 4x$$

$$I'(25) = 120 - 100 = 20$$

**Tolkning:** Når bedriften selger 25 enheter, vil salg av én enhet til gi omtrent 20 kroner i ekstra inntekt.

**c) Maksimal totalinntekt:**
$$I'(x) = 0 \\quad \\Rightarrow \\quad 120 - 4x = 0 \\quad \\Rightarrow \\quad x = 30$$

$I''(x) = -4 < 0$, så $x = 30$ gir maksimum.

$$I(30) = 120 \\cdot 30 - 2 \\cdot 900 = 3600 - 1800 = 1800 \\text{ kroner}$$

Totalinntekten er størst ved salg av 30 enheter, og den maksimale inntekten er 1800 kroner.`
    },
    {
      id: 's2-8-1-example-3',
      type: 'example',
      title: 'Sammenligning av marginalkostnad og grenseinntekt',
      problem: `En bedrift har kostnadsfunksjonen $K(x) = 0{,}5x^2 + 10x + 500$ og inntektsfunksjonen $I(x) = 80x - 0{,}5x^2$. Finn marginalkostnaden og grenseinntekten, og bestem for hvilken $x$ de er like.`,
      solution: `**Marginalkostnad:**
$$K'(x) = x + 10$$

**Grenseinntekt:**
$$I'(x) = 80 - x$$

**Sett dem like:**
$$K'(x) = I'(x)$$
$$x + 10 = 80 - x$$
$$2x = 70$$
$$x = 35$$

Når $x = 35$ er marginalkostnaden lik grenseinntekten. Som vi skal se i neste kapittel, er dette det optimale produksjonsnivået for profittmaksimering.

Vi kan verifisere: $K'(35) = 45$ og $I'(35) = 45$. Begge er 45 kroner.`
    },
    {
      id: 's2-8-1-text-tolkning',
      type: 'text',
      content: `## Tolkning av marginalstørrelser

Marginalstørrelsene i økonomi har en viktig praktisk tolkning:

- $K'(x) \\approx K(x+1) - K(x)$: tilnærmet kostnad for å produsere enhet nr. $x+1$
- $I'(x) \\approx I(x+1) - I(x)$: tilnærmet ekstrainntekt ved å selge enhet nr. $x+1$
- $E'(x) = 0$: der enhetskostnaden er på sitt laveste

Denne tilnærmingen er god når $x$ er stor. For små verdier av $x$ kan avviket mellom $K'(x)$ og den faktiske ekstrakostnaden $K(x+1)-K(x)$ være merkbart.

**Viktig:** I S2 bruker vi den deriverte som modell for marginalkostnad. I virkeligheten kan $x$ bare ta heltallsverdier, men vi behandler funksjonene som kontinuerlige for å kunne bruke analysens verktøy.`
    },
    {
      id: 's2-8-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-8-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En bedrift har kostnadsfunksjonen $K(x) = 2x^2 + 50x + 1000$. Finn de faste kostnadene og de variable kostnadene.', solution: 'Faste kostnader: $K(0) = 1000$ kroner. Variable kostnader: $V(x) = 2x^2 + 50x$.' },
          { label: 'b', task: 'Finn marginalkostnaden $K\'(x)$ og beregn $K\'(10)$. Tolk svaret.', solution: '$K\'(x) = 4x + 50$. $K\'(10) = 90$ kr. Det koster omtrent 90 kr å produsere den 11. enheten.' }
        ]
      }
    },
    {
      id: 's2-8-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-8-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn enhetskostnaden $E(x)$ for kostnadsfunksjonen $K(x) = 0{,}5x^2 + 20x + 800$.', solution: '$E(x) = \\frac{K(x)}{x} = 0{,}5x + 20 + \\frac{800}{x}$.' },
          { label: 'b', task: 'Finn $E\'(x)$ og bestem for hvilken $x$ enhetskostnaden er minst.', solution: '$E\'(x) = 0{,}5 - \\frac{800}{x^2} = 0 \\Rightarrow x^2 = 1600 \\Rightarrow x = 40$. Minimum enhetskostnad ved $x = 40$. $E(40) = 20 + 20 + 20 = 60$ kr.' }
        ]
      }
    },
    {
      id: 's2-8-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-8-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En være selges til fast pris $p = 50$ kroner per enhet. Finn totalinntekten $I(x)$ og grenseinntekten $I\'(x)$.', solution: '$I(x) = 50x$. $I\'(x) = 50$. Grenseinntekten er konstant og lik prisen.' },
          { label: 'b', task: 'Etterspørselen etter en annen være er $p(x) = 200 - 5x$. Finn $I(x)$ og $I\'(x)$.', solution: '$I(x) = (200-5x)x = 200x - 5x^2$. $I\'(x) = 200 - 10x$.' }
        ]
      }
    },
    {
      id: 's2-8-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-8-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En bedrift har $K(x) = 0{,}02x^3 - x^2 + 30x + 500$. Finn $K\'(x)$ og avgjør for hvilken $x$ marginalkostnaden er minst.', solution: '$K\'(x) = 0{,}06x^2 - 2x + 30$. $K\'\'(x) = 0{,}12x - 2 = 0 \\Rightarrow x \\approx 16{,}7$. Minimum marginalkostnad ved ca. 17 enheter.' },
          { label: 'b', task: 'Beregn den minimale marginalkostnaden.', solution: '$K\'(16{,}7) = 0{,}06 \\cdot 278{,}9 - 2 \\cdot 16{,}7 + 30 \\approx 16{,}73 - 33{,}33 + 30 = 13{,}4$ kr.' }
        ]
      }
    },
    {
      id: 's2-8-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-8-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En bedrift har $K(x) = x^2 + 40x + 900$. Vis at enhetskostnaden er minst når $K\'(x) = E(x)$.', solution: '$E(x) = x + 40 + \\frac{900}{x}$. $K\'(x) = 2x + 40$. $K\'(x) = E(x)$: $2x + 40 = x + 40 + \\frac{900}{x} \\Rightarrow x = \\frac{900}{x} \\Rightarrow x^2 = 900 \\Rightarrow x = 30$. $E\'(x) = 1 - \\frac{900}{x^2} = 0$ gir $x = 30$. Samme svar.' },
          { label: 'b', task: 'Finn den minimale enhetskostnaden.', solution: '$E(30) = 30 + 40 + 30 = 100$ kroner per enhet.' }
        ]
      }
    },
    {
      id: 's2-8-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-8-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Etterspørselen er gitt ved $p(x) = 100 - 0{,}5x$. For hvilken $x$ er totalinntekten størst? Hva er den maksimale inntekten?', solution: '$I(x) = 100x - 0{,}5x^2$. $I\'(x) = 100 - x = 0 \\Rightarrow x = 100$. $I(100) = 10000 - 5000 = 5000$ kr.' },
          { label: 'b', task: 'Finn prisen per enhet ved maksimal totalinntekt.', solution: '$p(100) = 100 - 50 = 50$ kroner. Prisen er halvparten av den maksimale prisen $p(0) = 100$.' }
        ]
      }
    },
    {
      id: 's2-8-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-8-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn den eksakte forskjellen $K(21) - K(20)$ for $K(x) = 0{,}01x^3 + 2x + 100$.', solution: '$K(21) = 0{,}01 \\cdot 9261 + 42 + 100 = 92{,}61 + 42 + 100 = 234{,}61$. $K(20) = 0{,}01 \\cdot 8000 + 40 + 100 = 220$. $K(21) - K(20) = 14{,}61$ kr.' },
          { label: 'b', task: 'Sammenlign med marginalkostnaden $K\'(20)$. Hvor god er tilnærmingen?', solution: '$K\'(x) = 0{,}03x^2 + 2$. $K\'(20) = 0{,}03 \\cdot 400 + 2 = 14$ kr. Avviket er $14{,}61 - 14 = 0{,}61$ kr, altså ca. 4\\% feil.' }
        ]
      }
    },
    {
      id: 's2-8-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-8-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En bedrift har $K(x) = 0{,}005x^3 - 0{,}3x^2 + 12x + 400$ og selger varen til fast pris $p = 20$ kroner. Finn $K\'(x)$ og $I\'(x)$.', solution: '$K\'(x) = 0{,}015x^2 - 0{,}6x + 12$. $I(x) = 20x$, så $I\'(x) = 20$.' },
          { label: 'b', task: 'For hvilke verdier av $x$ er grenseinntekten større enn marginalkostnaden? Hva betyr dette for bedriften?', solution: '$I\'(x) > K\'(x)$: $20 > 0{,}015x^2 - 0{,}6x + 12 \\Rightarrow 0{,}015x^2 - 0{,}6x - 8 < 0$. Løsning: $x \\in (\\text{ca. } {-}10{,}5, \\ 50{,}5)$. For $x > 0$: når $x < 50{,}5$ lønner det seg å øke produksjonen, for da gir hver ekstra enhet mer inntekt enn den koster.' }
        ]
      }
    },
    {
      id: 's2-8-1-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-8-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En bedrift har kostnadsfunksjonen $K(x) = 0{,}002x^3 - 0{,}3x^2 + 20x + 2000$. Finn uttrykket for enhetskostnaden $E(x)$.', solution: '$E(x) = 0{,}002x^2 - 0{,}3x + 20 + \\frac{2000}{x}$.' },
          { label: 'b', task: 'Vis at minimum enhetskostnad oppnås når $0{,}002x^3 - 0{,}15x^2 = 1000$, og løs likningen numerisk.', solution: '$E\'(x) = 0{,}004x - 0{,}3 - \\frac{2000}{x^2} = 0 \\Rightarrow 0{,}004x^3 - 0{,}3x^2 - 2000 = 0 \\Rightarrow 0{,}002x^3 - 0{,}15x^2 = 1000$. Numerisk løsning gir $x \\approx 99{,}2$. Minimum enhetskostnad ved ca. 99 enheter.' }
        ]
      }
    },
    {
      id: 's2-8-1-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-8-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En bedrift produserer varer med kostnad $K(x) = 0{,}1x^2 + 5x + 300$. Etterspørselen er $p(x) = 45 - 0{,}1x$. Finn totalinntekten og grenseinntekten.', solution: '$I(x) = (45 - 0{,}1x)x = 45x - 0{,}1x^2$. $I\'(x) = 45 - 0{,}2x$.' },
          { label: 'b', task: 'Finn det produksjonsnivået der marginalkostnad er lik grenseinntekt. Hvilken pris selges varen til da?', solution: '$K\'(x) = I\'(x)$: $0{,}2x + 5 = 45 - 0{,}2x \\Rightarrow 0{,}4x = 40 \\Rightarrow x = 100$. $p(100) = 45 - 10 = 35$ kr per enhet.' }
        ]
      }
    },
    {
      id: 's2-8-1-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-8-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En kostnadsfunksjon er gitt ved $K(x) = ax^2 + bx + c$. Vis at minimum enhetskostnad alltid oppnås ved $x = \\sqrt{\\frac{c}{a}}$.', solution: '$E(x) = ax + b + \\frac{c}{x}$. $E\'(x) = a - \\frac{c}{x^2} = 0 \\Rightarrow x^2 = \\frac{c}{a} \\Rightarrow x = \\sqrt{\\frac{c}{a}}$. $E\'\'(x) = \\frac{2c}{x^3} > 0$, så dette er et minimum.' },
          { label: 'b', task: 'Vis at den minimale enhetskostnaden er $b + 2\\sqrt{ac}$.', solution: '$E\\left(\\sqrt{\\frac{c}{a}}\\right) = a\\sqrt{\\frac{c}{a}} + b + \\frac{c}{\\sqrt{\\frac{c}{a}}} = \\sqrt{ac} + b + \\sqrt{ac} = b + 2\\sqrt{ac}$.' }
        ]
      }
    },
    {
      id: 's2-8-1-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-8-1-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En bedrift har kostnadsfunksjonen $K(x) = 0{,}01x^3 - 0{,}9x^2 + 30x + 1000$ for $0 \\leq x \\leq 80$. Finn for hvilken $x$ marginalkostnaden er minst, og beregn den minimale marginalkostnaden.', solution: '$K\'(x) = 0{,}03x^2 - 1{,}8x + 30$. $K\'\'(x) = 0{,}06x - 1{,}8 = 0 \\Rightarrow x = 30$. $K\'(30) = 0{,}03 \\cdot 900 - 54 + 30 = 27 - 54 + 30 = 3$ kr.' },
          { label: 'b', task: 'Finn for hvilken $x$ enhetskostnaden er minst, og beregn den minimale enhetskostnaden.', solution: '$E(x) = 0{,}01x^2 - 0{,}9x + 30 + \\frac{1000}{x}$. $E\'(x) = 0{,}02x - 0{,}9 - \\frac{1000}{x^2} = 0$. Numerisk: $x \\approx 50{,}9$. $E(50{,}9) \\approx 0{,}01 \\cdot 2591 - 45{,}8 + 30 + 19{,}6 \\approx 29{,}7$ kr per enhet.' }
        ]
      }
    },
    {
      id: 's2-8-1-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 's2-8-1-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Forklar forskjellen mellom marginalkostnad og enhetskostnad med egne ord.', solution: 'Marginalkostnaden $K\'(x)$ er kostnaden ved å produsere én enhet til (den deriverte). Enhetskostnaden $E(x) = K(x)/x$ er gjennomsnittlig kostnad per enhet for hele produksjonen.' },
          { label: 'b', task: 'Forklar hvorfor det er logisk at enhetskostnaden synker så lenge marginalkostnaden er lavere enn enhetskostnaden.', solution: 'Dersom den neste enheten koster mindre å produsere enn gjennomsnittet (marginalkostnad < enhetskostnad), vil gjennomsnittet trekkes ned. Tilsvarende som at gjennomsnittskarakteren synker hvis du får en karakter lavere enn snittet.' }
        ]
      }
    },
    {
      id: 's2-8-1-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 's2-8-1-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En bedrift har etterspørselsfunksjonen $p(x) = 80 - 0{,}4x$ og kostnadsfunksjonen $K(x) = 0{,}2x^2 + 10x + 600$. Finn uttrykket for totalinntekten $I(x)$ og profittfunksjonen $P(x) = I(x) - K(x)$.', solution: '$I(x) = (80-0{,}4x)x = 80x - 0{,}4x^2$. $P(x) = 80x - 0{,}4x^2 - 0{,}2x^2 - 10x - 600 = -0{,}6x^2 + 70x - 600$.' },
          { label: 'b', task: 'Finn $K\'(x)$ og $I\'(x)$, og bestem for hvilken $x$ de er like.', solution: '$K\'(x) = 0{,}4x + 10$, $I\'(x) = 80 - 0{,}8x$. $K\'(x) = I\'(x)$: $0{,}4x + 10 = 80 - 0{,}8x \\Rightarrow 1{,}2x = 70 \\Rightarrow x \\approx 58{,}3$.' }
        ]
      }
    },
    {
      id: 's2-8-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Kostnadsfunksjoner:**
- $K(x)$ = totalkostnad ved $x$ enheter
- $K(0)$ = faste kostnader
- $E(x) = \\frac{K(x)}{x}$ = enhetskostnad (gjennomsnittskostnad)
- $K'(x)$ = marginalkostnad (tilnærmet kostnad for enhet nr. $x+1$)
- Enhetskostnaden er minst der $K'(x) = E(x)$

**Inntektsfunksjoner:**
- $I(x) = p(x) \\cdot x$ = totalinntekt
- $I'(x)$ = grenseinntekt (tilnærmet ekstrainntekt ved salg av enhet nr. $x+1$)
- For lineær etterspørsel $p(x) = a - bx$: $I(x) = ax - bx^2$ og $I'(x) = a - 2bx$

**Viktig sammenheng:** Marginalstørrelsene $K'(x)$ og $I'(x)$ er nøkkelen til å finne optimale produksjonsnivåer.`
    }
  ],
  exercises: []
};

export const CHAPTER_S2_8_2: TextbookChapter = {
  id: 's2-8-2',
  courseId: 's2',
  chapterNumber: '8.2',
  title: 'Profittoptimering',
  description: 'Lær om profittmaksimering, MR=MC-prinsippet og hvordan man finner optimalt produksjonsnivå med derivasjon.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke derivasjon til å optimere økonomiske størrelser',
    'tolke den deriverte i praktiske sammenhenger, spesielt i økonomi'
  ],
  content: [
    {
      id: 's2-8-2-intro',
      type: 'text',
      content: `## Profitt og optimering

**Profitt** (overskudd) er forskjellen mellom inntekt og kostnad. En bedrift ønsker å maksimere profitten, og vi kan bruke derivasjon til å finne det produksjonsnivået som gir størst profitt.

Profittfunksjonen er definert som:
$$P(x) = I(x) - K(x)$$

der $I(x)$ er totalinntekten og $K(x)$ er totalkostnaden. Profittmaksimering er kanskje den viktigste anvendelsen av derivasjon i økonomisk analyse.`
    },
    {
      id: 's2-8-2-def-1',
      type: 'definition',
      title: 'Profittfunksjonen',
      content: `**Profittfunksjonen** $P(x)$ er gitt ved:
$$P(x) = I(x) - K(x)$$

der:
- $I(x)$ er totalinntekten ved salg av $x$ enheter
- $K(x)$ er totalkostnaden ved produksjon av $x$ enheter

Profitt kalles også **overskudd** eller **resultat**. Dersom $P(x) < 0$ har bedriften **underskudd** (tap).`
    },
    {
      id: 's2-8-2-theorem-1',
      type: 'theorem',
      title: 'MR = MC-prinsippet (profittmaksimering)',
      content: `Profitten $P(x) = I(x) - K(x)$ er størst når:

$$P'(x) = 0 \\quad \\Leftrightarrow \\quad I'(x) - K'(x) = 0 \\quad \\Leftrightarrow \\quad I'(x) = K'(x)$$

Det vil si: **Profitten er maksimal der grenseinntekten (MR) er lik marginalkostnaden (MC).**

I tillegg må vi ha $P''(x) < 0$, altså $I''(x) < K''(x)$ for at det skal være et maksimum.

**MR = MC-prinsippet** (Marginal Revenue = Marginal Cost):
- Så lenge $I'(x) > K'(x)$: hver ekstra enhet gir mer inntekt enn den koster $\\Rightarrow$ øk produksjonen
- Når $I'(x) < K'(x)$: hver ekstra enhet koster mer enn den gir i inntekt $\\Rightarrow$ reduser produksjonen
- Optimalt: $I'(x) = K'(x)$`
    },
    {
      id: 's2-8-2-example-1',
      type: 'example',
      title: 'Profittmaksimering med fast pris',
      problem: `En bedrift selger en være til fast pris $p = 60$ kroner per enhet. Kostnadsfunksjonen er $K(x) = 0{,}02x^3 - 1{,}5x^2 + 50x + 400$.

a) Finn profittfunksjonen $P(x)$.
b) Finn det optimale produksjonsnivået.
c) Beregn den maksimale profitten.`,
      solution: `**a) Profittfunksjon:**
$$I(x) = 60x$$
$$P(x) = I(x) - K(x) = 60x - 0{,}02x^3 + 1{,}5x^2 - 50x - 400$$
$$P(x) = -0{,}02x^3 + 1{,}5x^2 + 10x - 400$$

**b) Optimalt produksjonsnivå:**
$$P'(x) = -0{,}06x^2 + 3x + 10 = 0$$

Alternativt: $I'(x) = K'(x)$:
$$60 = 0{,}06x^2 - 3x + 50$$
$$0{,}06x^2 - 3x - 10 = 0$$

Med abc-formelen:
$$x = \\frac{3 \\pm \\sqrt{9 + 2{,}4}}{0{,}12} = \\frac{3 \\pm \\sqrt{11{,}4}}{0{,}12}$$

$$x = \\frac{3 + 3{,}376}{0{,}12} \\approx 53{,}1 \\quad \\text{(forkaster negativ løsning)}$$

Optimalt produksjonsnivå: ca. 53 enheter.

**c) Maksimal profitt:**
Vi verifiserer at $P''(53{,}1) = -0{,}12 \\cdot 53{,}1 + 3 = -3{,}37 < 0$. Det er maksimum.

$$P(53) = -0{,}02 \\cdot 148877 + 1{,}5 \\cdot 2809 + 530 - 400$$
$$\\approx -2977{,}5 + 4213{,}5 + 530 - 400 = 1366 \\text{ kroner}$$

Maksimal profitt er ca. 1366 kroner.`
    },
    {
      id: 's2-8-2-text-grafisk',
      type: 'text',
      content: `## Grafisk tolkning av profittmaksimering

Grafisk kan vi forstå profittmaksimering på to måter:

**1. Profittfunksjonen $P(x)$:**
Profittmaksimum er toppunktet på grafen til $P(x)$. Vi finner det ved å sette $P'(x) = 0$.

**2. Kostnad og inntekt i samme koordinatsystem:**
Profitten $P(x) = I(x) - K(x)$ er den vertikale avstanden mellom inntektskurven og kostnadskurven. Denne avstanden er størst der tangentene til $I(x)$ og $K(x)$ er parallelle, altså der $I'(x) = K'(x)$.

**Nullpunktsproduksjon (break-even):**
Bedriften har overskudd ($P(x) > 0$) i det intervallet der $I(x) > K(x)$. Nullpunktene til $P(x)$ kalles **break-even-punkter** og angir produksjonsnivåene der inntekten akkurat dekker kostnadene.`
    },
    {
      id: 's2-8-2-def-2',
      type: 'definition',
      title: 'Break-even (nullpunktsproduksjon)',
      content: `**Break-even** (nullpunktsproduksjon) er produksjonsnivåene der profitten er null:

$$P(x) = 0 \\quad \\Leftrightarrow \\quad I(x) = K(x)$$

Bedriften har overskudd for produksjonsnivåer mellom break-even-punktene (dersom det finnes to).

Break-even-analysen besvarer spørsmålet: *Hvor mange enheter må vi selge for å gå i null?*`
    },
    {
      id: 's2-8-2-example-2',
      type: 'example',
      title: 'Profittmaksimering med variabel pris',
      problem: `En bedrift har kostnadsfunksjonen $K(x) = x^2 + 20x + 200$ og etterspørselsfunksjonen $p(x) = 100 - x$.

a) Finn profittfunksjonen $P(x)$.
b) Finn det produksjonsnivået som gir størst profitt.
c) Finn break-even-punktene.`,
      solution: `**a) Profittfunksjon:**
$$I(x) = (100 - x)x = 100x - x^2$$
$$P(x) = 100x - x^2 - x^2 - 20x - 200 = -2x^2 + 80x - 200$$

**b) Profittmaksimering:**
$$P'(x) = -4x + 80 = 0 \\quad \\Rightarrow \\quad x = 20$$

$P''(x) = -4 < 0$, så $x = 20$ gir maksimum.

Alternativt med MR = MC:
$$I'(x) = K'(x) \\quad \\Rightarrow \\quad 100 - 2x = 2x + 20 \\quad \\Rightarrow \\quad x = 20$$

$$P(20) = -2 \\cdot 400 + 80 \\cdot 20 - 200 = -800 + 1600 - 200 = 600 \\text{ kroner}$$

Optimal produksjon er 20 enheter med profitt 600 kroner. Prisen blir $p(20) = 80$ kr.

**c) Break-even:**
$$P(x) = 0: \\quad -2x^2 + 80x - 200 = 0 \\quad \\Rightarrow \\quad x^2 - 40x + 100 = 0$$

$$x = \\frac{40 \\pm \\sqrt{1600 - 400}}{2} = \\frac{40 \\pm \\sqrt{1200}}{2} = 20 \\pm 10\\sqrt{3}$$

$$x_1 \\approx 2{,}7 \\quad \\text{og} \\quad x_2 \\approx 37{,}3$$

Bedriften har overskudd for $2{,}7 < x < 37{,}3$, altså ved produksjon mellom 3 og 37 enheter.`
    },
    {
      id: 's2-8-2-theorem-2',
      type: 'theorem',
      title: 'Profittmaksimering ved fast pris',
      content: `Dersom en bedrift selger til fast pris $p$ (fullkommen konkurranse), er $I(x) = px$ og $I'(x) = p$.

MR = MC gir:
$$p = K'(x)$$

**Profitten er maksimal der prisen er lik marginalkostnaden.**

Andrederivert-kravet: $P''(x) = -K''(x) < 0$, altså $K''(x) > 0$, som betyr at marginalkostnaden skal være voksende i det optimale punktet.`
    },
    {
      id: 's2-8-2-example-3',
      type: 'example',
      title: 'Break-even og profitt med tredjegradskostnad',
      problem: `En bedrift har $K(x) = 0{,}01x^3 - 0{,}6x^2 + 20x + 300$ og selger til fast pris $p = 20$. Finn det produksjonsnivået som gir størst profitt.`,
      solution: `**Profittfunksjon:**
$$P(x) = 20x - (0{,}01x^3 - 0{,}6x^2 + 20x + 300)$$
$$P(x) = -0{,}01x^3 + 0{,}6x^2 - 300$$

**MR = MC:**
$$20 = 0{,}03x^2 - 1{,}2x + 20$$
$$0{,}03x^2 - 1{,}2x = 0$$
$$0{,}03x(x - 40) = 0$$
$$x = 0 \\quad \\text{eller} \\quad x = 40$$

$P''(x) = -0{,}06x + 1{,}2$. $P''(40) = -2{,}4 + 1{,}2 = -1{,}2 < 0$: maksimum.
$P''(0) = 1{,}2 > 0$: minimum.

Optimalt produksjonsnivå er $x = 40$.

$$P(40) = -0{,}01 \\cdot 64000 + 0{,}6 \\cdot 1600 - 300 = -640 + 960 - 300 = 20 \\text{ kroner}$$`
    },
    {
      id: 's2-8-2-text-oppsett',
      type: 'text',
      content: `## Strategi for profittoppgaver på eksamen

**Fremgangsmåte:**
1. Sett opp $P(x) = I(x) - K(x)$
2. Deriver: $P'(x) = I'(x) - K'(x)$
3. Løs $P'(x) = 0$ (eller $I'(x) = K'(x)$)
4. Sjekk at $P''(x) < 0$ for å bekrefte maksimum
5. Beregn $P(x)$ i det optimale punktet

**Husk:** Oppgaven kan be om ulike ting:
- «Finn optimalt produksjonsnivå» $\\Rightarrow$ finn $x$ der $P'(x) = 0$
- «Finn den maksimale profitten» $\\Rightarrow$ beregn $P(x)$ i optimalt punkt
- «Finn prisen ved optimal produksjon» $\\Rightarrow$ sett $x$ inn i $p(x)$
- «Finn break-even» $\\Rightarrow$ løs $P(x) = 0$`
    },
    {
      id: 's2-8-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-8-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En bedrift har $K(x) = x^2 + 10x + 100$ og selger til fast pris $p = 50$. Sett opp profittfunksjonen $P(x)$.', solution: '$I(x) = 50x$. $P(x) = 50x - x^2 - 10x - 100 = -x^2 + 40x - 100$.' },
          { label: 'b', task: 'Finn det optimale produksjonsnivået og den maksimale profitten.', solution: '$P\'(x) = -2x + 40 = 0 \\Rightarrow x = 20$. $P(20) = -400 + 800 - 100 = 300$ kr.' }
        ]
      }
    },
    {
      id: 's2-8-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-8-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Bruk MR = MC-prinsippet til å finne optimalt produksjonsnivå for $K(x) = 2x^2 + 8x + 200$ med fast pris $p = 40$.', solution: '$K\'(x) = p$: $4x + 8 = 40 \\Rightarrow x = 8$. Optimalt: 8 enheter.' },
          { label: 'b', task: 'Beregn profitten ved optimalt produksjonsnivå.', solution: '$P(8) = 40 \\cdot 8 - 2 \\cdot 64 - 64 - 200 = 320 - 128 - 64 - 200 = -72$ kr. Bedriften har underskudd.' }
        ]
      }
    },
    {
      id: 's2-8-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-8-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Forklar med egne ord hvorfor profitten er maksimal der $I\'(x) = K\'(x)$.', solution: 'Så lenge grenseinntekten er større enn marginalkostnaden ($I\'(x) > K\'(x)$), gir hver ekstra enhet mer inntekt enn den koster, og profitten øker. Når marginalkostnaden overstiger grenseinntekten, taper bedriften på å produsere mer. Profitten er derfor størst akkurat der de to er like.' },
          { label: 'b', task: 'Hva er forskjellen mellom å maksimere inntekten og å maksimere profitten? Gi et eksempel.', solution: 'Maksimal inntekt ($I\'(x) = 0$) og maksimal profitt ($I\'(x) = K\'(x)$) oppnås ved ulike produksjonsnivåer. Profittmaksimum ligger alltid ved lavere produksjon enn inntektsmaksimum fordi marginalkostnaden $K\'(x) > 0$.' }
        ]
      }
    },
    {
      id: 's2-8-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-8-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn break-even-punktene for $P(x) = -x^2 + 30x - 200$.', solution: '$-x^2 + 30x - 200 = 0 \\Rightarrow x^2 - 30x + 200 = 0 \\Rightarrow x = \\frac{30 \\pm \\sqrt{900-800}}{2} = 15 \\pm 5$. Break-even: $x = 10$ og $x = 20$.' },
          { label: 'b', task: 'For hvilke produksjonsnivåer har bedriften overskudd?', solution: 'Bedriften har overskudd for $10 < x < 20$, altså ved produksjon mellom 10 og 20 enheter.' }
        ]
      }
    },
    {
      id: 's2-8-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-8-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En bedrift har etterspørsel $p(x) = 200 - 4x$ og kostnad $K(x) = 2x^2 + 40x + 100$. Finn profittfunksjonen og optimalt produksjonsnivå.', solution: '$I(x) = 200x - 4x^2$. $P(x) = -6x^2 + 160x - 100$. $P\'(x) = -12x + 160 = 0 \\Rightarrow x \\approx 13{,}3$. Altså ca. 13 enheter.' },
          { label: 'b', task: 'Finn den maksimale profitten og prisen ved optimal produksjon.', solution: '$P(13{,}3) \\approx -6 \\cdot 177{,}8 + 160 \\cdot 13{,}3 - 100 \\approx -1066{,}7 + 2133{,}3 - 100 \\approx 966{,}7$ kr. $p(13{,}3) \\approx 200 - 53{,}3 = 146{,}7$ kr.' }
        ]
      }
    },
    {
      id: 's2-8-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-8-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En bedrift har $K(x) = 0{,}05x^3 - 3x^2 + 80x + 500$ og fast pris $p = 50$. Sett opp profittfunksjonen og finn stasjonære punkter.', solution: '$P(x) = 50x - 0{,}05x^3 + 3x^2 - 80x - 500 = -0{,}05x^3 + 3x^2 - 30x - 500$. $P\'(x) = -0{,}15x^2 + 6x - 30 = 0 \\Rightarrow x^2 - 40x + 200 = 0 \\Rightarrow x = 20 \\pm \\sqrt{200} \\approx 20 \\pm 14{,}1$. Altså $x \\approx 5{,}9$ og $x \\approx 34{,}1$.' },
          { label: 'b', task: 'Avgjør hvilken løsning som gir profittmaksimum, og beregn profitten.', solution: '$P\'\'(x) = -0{,}3x + 6$. $P\'\'(5{,}9) = 4{,}23 > 0$: minimum. $P\'\'(34{,}1) = -4{,}23 < 0$: maksimum. $P(34{,}1) \\approx -0{,}05 \\cdot 39651 + 3 \\cdot 1163 - 1023 - 500 \\approx -1982{,}6 + 3489 - 1023 - 500 \\approx -16{,}6$ kr. Bedriften går ikke i overskudd med denne prisen.' }
        ]
      }
    },
    {
      id: 's2-8-2-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-8-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En bedrift har $K(x) = 0{,}5x^2 + 20x + 450$ og etterspørsel $p(x) = 80 - 0{,}5x$. Finn break-even-punktene.', solution: '$I(x) = 80x - 0{,}5x^2$. $P(x) = -x^2 + 60x - 450 = 0 \\Rightarrow x^2 - 60x + 450 = 0 \\Rightarrow x = 30 \\pm \\sqrt{900-450} = 30 \\pm \\sqrt{450} \\approx 30 \\pm 21{,}2$. Break-even: $x \\approx 8{,}8$ og $x \\approx 51{,}2$.' },
          { label: 'b', task: 'Finn det optimale produksjonsnivået og vis at det ligger mellom break-even-punktene.', solution: '$P\'(x) = -2x + 60 = 0 \\Rightarrow x = 30$. $8{,}8 < 30 < 51{,}2$ \\checkmark. $P(30) = -900 + 1800 - 450 = 450$ kr.' }
        ]
      }
    },
    {
      id: 's2-8-2-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-8-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En bedrift har $K(x) = 3x^2 + 30x + c$ og selger til fast pris $p = 90$. Finn den verdien av $c$ (faste kostnader) som gjør at den maksimale profitten er akkurat null.', solution: '$P(x) = 90x - 3x^2 - 30x - c = -3x^2 + 60x - c$. $P\'(x) = -6x + 60 = 0 \\Rightarrow x = 10$. $P(10) = -300 + 600 - c = 300 - c$. $P(10) = 0 \\Rightarrow c = 300$.' }
        ]
      }
    },
    {
      id: 's2-8-2-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-8-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En monopolist har etterspørsel $p(x) = 150 - 3x$ og kostnad $K(x) = 0{,}5x^3 - 10x^2 + 80x + 100$. Finn det profittmaksimerende produksjonsnivået.', solution: '$I(x) = 150x - 3x^2$. $I\'(x) = 150 - 6x$. $K\'(x) = 1{,}5x^2 - 20x + 80$. MR = MC: $150 - 6x = 1{,}5x^2 - 20x + 80 \\Rightarrow 1{,}5x^2 - 14x - 70 = 0 \\Rightarrow 3x^2 - 28x - 140 = 0$. $x = \\frac{28 + \\sqrt{784+1680}}{6} = \\frac{28 + \\sqrt{2464}}{6} \\approx \\frac{28+49{,}6}{6} \\approx 12{,}9$.' },
          { label: 'b', task: 'Beregn den maksimale profitten og monopolistens pris.', solution: '$p(12{,}9) \\approx 150 - 38{,}7 = 111{,}3$ kr. $I(12{,}9) \\approx 1435{,}8$. $K(12{,}9) \\approx 0{,}5 \\cdot 2146{,}7 - 10 \\cdot 166{,}4 + 1032 + 100 \\approx 1073{,}3 - 1664 + 1132 = 541{,}3$. $P \\approx 1435{,}8 - 541{,}3 \\approx 894{,}5$ kr.' }
        ]
      }
    },
    {
      id: 's2-8-2-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-8-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En bedrift med kostnad $K(x) = 2x^2 + bx + 500$ selger til pris $p = 100$. Optimalt produksjonsnivå er $x = 20$. Bestem $b$.', solution: 'MR = MC: $100 = K\'(20) = 4 \\cdot 20 + b = 80 + b$. $b = 20$.' },
          { label: 'b', task: 'Finn break-even-punktene med den funne $b$-verdien.', solution: '$P(x) = 100x - 2x^2 - 20x - 500 = -2x^2 + 80x - 500 = 0 \\Rightarrow x^2 - 40x + 250 = 0 \\Rightarrow x = 20 \\pm \\sqrt{150} \\approx 20 \\pm 12{,}2$. Break-even: $x \\approx 7{,}8$ og $x \\approx 32{,}2$.' }
        ]
      }
    },
    {
      id: 's2-8-2-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-8-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En bedrift har $K(x) = 0{,}01x^3 - 0{,}6x^2 + 15x + 200$ og etterspørsel $p(x) = 35 - 0{,}2x$. Sett opp profittfunksjonen.', solution: '$I(x) = 35x - 0{,}2x^2$. $P(x) = 35x - 0{,}2x^2 - 0{,}01x^3 + 0{,}6x^2 - 15x - 200 = -0{,}01x^3 + 0{,}4x^2 + 20x - 200$.' },
          { label: 'b', task: 'Finn det optimale produksjonsnivået med MR = MC.', solution: '$I\'(x) = 35 - 0{,}4x$. $K\'(x) = 0{,}03x^2 - 1{,}2x + 15$. MR = MC: $35 - 0{,}4x = 0{,}03x^2 - 1{,}2x + 15 \\Rightarrow 0{,}03x^2 - 0{,}8x - 20 = 0 \\Rightarrow 3x^2 - 80x - 2000 = 0$. $x = \\frac{80 + \\sqrt{6400+24000}}{6} = \\frac{80+\\sqrt{30400}}{6} \\approx \\frac{80+174{,}4}{6} \\approx 42{,}4$. Optimalt: ca. 42 enheter.' }
        ]
      }
    },
    {
      id: 's2-8-2-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-8-2-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Vis at for en bedrift med andregradskostnad $K(x) = ax^2 + bx + c$ og lineær etterspørsel $p(x) = d - ex$, er det profittmaksimerende produksjonsnivået $x = \\frac{d-b}{2(a+e)}$.', solution: '$I(x) = dx - ex^2$. $P(x) = -(a+e)x^2 + (d-b)x - c$. $P\'(x) = -2(a+e)x + (d-b) = 0 \\Rightarrow x = \\frac{d-b}{2(a+e)}$.' },
          { label: 'b', task: 'Vis at den maksimale profitten er $P_{\\max} = \\frac{(d-b)^2}{4(a+e)} - c$.', solution: '$P\\left(\\frac{d-b}{2(a+e)}\\right) = -(a+e)\\frac{(d-b)^2}{4(a+e)^2} + (d-b)\\frac{d-b}{2(a+e)} - c = -\\frac{(d-b)^2}{4(a+e)} + \\frac{(d-b)^2}{2(a+e)} - c = \\frac{(d-b)^2}{4(a+e)} - c$.' }
        ]
      }
    },
    {
      id: 's2-8-2-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 's2-8-2-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En bedrift har $I(x) = 60x$ og $K(x) = 0{,}5x^2 + 10x + 200$. Tegn grafene til $I(x)$ og $K(x)$ i CAS og finn break-even-punktene grafisk.', solution: '$P(x) = -0{,}5x^2 + 50x - 200 = 0 \\Rightarrow x^2 - 100x + 400 = 0 \\Rightarrow x = 50 \\pm \\sqrt{2100} \\approx 50 \\pm 45{,}8$. Break-even: $x \\approx 4{,}2$ og $x \\approx 95{,}8$.' },
          { label: 'b', task: 'Finn optimalt produksjonsnivå og maksimal profitt.', solution: '$P\'(x) = -x + 50 = 0 \\Rightarrow x = 50$. $P(50) = -1250 + 2500 - 200 = 1050$ kr.' }
        ]
      }
    },
    {
      id: 's2-8-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Profittfunksjonen:**
$$P(x) = I(x) - K(x)$$

**MR = MC-prinsippet:**
Profitten er maksimal der grenseinntekten er lik marginalkostnaden:
$$I'(x) = K'(x)$$

Sjekk at $P''(x) < 0$ for å bekrefte at det er et maksimumspunkt.

**Ved fast pris $p$:**
$$p = K'(x) \\quad \\text{(pris = marginalkostnad)}$$

**Break-even (nullpunktsproduksjon):**
$$P(x) = 0 \\quad \\Leftrightarrow \\quad I(x) = K(x)$$

Bedriften har overskudd i intervallet mellom break-even-punktene.

**Strategi:** Bruk MR = MC som hovedverktøy. Det er ofte enklere enn å derivere hele profittfunksjonen.`
    }
  ],
  exercises: []
};

export const CHAPTER_S2_8_3: TextbookChapter = {
  id: 's2-8-3',
  courseId: 's2',
  chapterNumber: '8.3',
  title: 'Tilbud og etterspørsel',
  description: 'Lær om likevektsanalyse, priselastisitet, skattepåvirkning og markedsmekanismer analysert med matematiske verktøy.',
  estimatedMinutes: 55,
  competenceGoals: [
    'modellere og analysere økonomiske problemstillinger ved hjelp av funksjoner og derivasjon',
    'bruke matematiske modeller til å beskrive markedsmekanismer'
  ],
  content: [
    {
      id: 's2-8-3-intro',
      type: 'text',
      content: `## Markedslikevekt

I et marked bestemmes prisen av samspillet mellom **tilbud** og **etterspørsel**. Etterspørselsfunksjonen beskriver hvor mye forbrukerne ønsker å kjøpe ved ulike priser, mens tilbudsfunksjonen beskriver hvor mye produsentene ønsker å tilby.

Markedslikevekt oppstår der tilbudt mengde er lik etterspurt mengde. Matematisk finner vi dette skjæringspunktet mellom tilbuds- og etterspørselskurvene.`
    },
    {
      id: 's2-8-3-def-1',
      type: 'definition',
      title: 'Tilbuds- og etterspørselsfunksjoner',
      content: `**Etterspørselsfunksjonen** $p_E(x)$ gir prisen som funksjon av mengden $x$ som etterspørres. Etterspørselen er vanligvis avtagende: høyere pris gir lavere etterspurt mengde.

Typisk form: $p_E(x) = a - bx$ der $a, b > 0$.

**Tilbudsfunksjonen** $p_T(x)$ gir prisen produsentene krever for å tilby mengden $x$. Tilbudet er vanligvis voksende: høyere pris gir større tilbudt mengde.

Typisk form: $p_T(x) = c + dx$ der $c \\geq 0, d > 0$.`
    },
    {
      id: 's2-8-3-def-2',
      type: 'definition',
      title: 'Markedslikevekt',
      content: `**Markedslikevekt** oppstår der tilbudt mengde er lik etterspurt mengde:
$$p_E(x) = p_T(x)$$

Løsningen gir **likevektsmengden** $x^*$ og **likevektsprisen** $p^* = p_E(x^*) = p_T(x^*)$.

I likevekt er det ingen tendens til at prisen endres:
- Dersom prisen er høyere enn $p^*$: overskuddstilbud (pris presses ned)
- Dersom prisen er lavere enn $p^*$: overskuddsetterspørsel (pris presses opp)`
    },
    {
      id: 's2-8-3-example-1',
      type: 'example',
      title: 'Finne markedslikevekt',
      problem: `Etterspørselen etter en være er gitt ved $p_E(x) = 120 - 2x$ og tilbudet er $p_T(x) = 20 + x$, der $p$ er pris i kroner og $x$ er antall tusen enheter.

a) Finn likevektsmengden og likevektsprisen.
b) Hva skjer dersom prisen settes til 80 kroner?`,
      solution: `**a) Likevekt:**
$$p_E(x) = p_T(x)$$
$$120 - 2x = 20 + x$$
$$100 = 3x$$
$$x^* = \\frac{100}{3} \\approx 33{,}3 \\text{ tusen enheter}$$

$$p^* = 20 + \\frac{100}{3} = \\frac{160}{3} \\approx 53{,}3 \\text{ kroner}$$

**b) Pris = 80 kr:**
Etterspurt mengde: $80 = 120 - 2x \\Rightarrow x_E = 20$ tusen enheter.
Tilbudt mengde: $80 = 20 + x \\Rightarrow x_T = 60$ tusen enheter.

Det er **overskuddstilbud** på $60 - 20 = 40$ tusen enheter. Prisen er for høy og vil presses nedover mot likevektsprisen.`
    },
    {
      id: 's2-8-3-text-elastisitet',
      type: 'text',
      content: `## Priselastisitet

**Priselastisiteten** måler hvor følsom etterspørselen er for prisendringer. Den forteller oss den prosentvise endringen i etterspurt mengde per prosent prisendring.

I S2 bruker vi den deriverte til å beregne priselastisiteten punktvis:

$$E_p = \\frac{\\frac{dx}{x}}{\\frac{dp}{p}} = \\frac{p}{x} \\cdot \\frac{dx}{dp}$$

Siden etterspørselen vanligvis er avtagende, er $\\frac{dx}{dp} < 0$, og elastisiteten er negativ. Vi bruker ofte absoluttverdien $|E_p|$.`
    },
    {
      id: 's2-8-3-def-3',
      type: 'definition',
      title: 'Priselastisitet',
      content: `**Priselastisiteten** for etterspørsel er definert som:
$$E_p = \\frac{p}{x} \\cdot \\frac{dx}{dp}$$

Tolkning av $|E_p|$:
- $|E_p| > 1$: **elastisk etterspørsel** - prosentvis mengdeendring er større enn prosentvis prisendring. Prisøkning gir lavere inntekt.
- $|E_p| = 1$: **enhetselastisk** - prosentvis mengdeendring er lik prosentvis prisendring. Inntekten er maksimal.
- $|E_p| < 1$: **uelastisk etterspørsel** - prosentvis mengdeendring er mindre enn prosentvis prisendring. Prisøkning gir høyere inntekt.`
    },
    {
      id: 's2-8-3-theorem-1',
      type: 'theorem',
      title: 'Elastisitet og inntektsmaksimum',
      content: `For en lineær etterspørselsfunksjon $p(x) = a - bx$ er:

$$E_p = \\frac{p}{x} \\cdot \\frac{1}{-b} = \\frac{a - bx}{-bx} = \\frac{a}{-bx} + 1$$

**Totalinntekten er maksimal der $|E_p| = 1$.**

Bevis: $I(x) = px = (a-bx)x$. $I'(x) = a - 2bx = 0 \\Rightarrow x = \\frac{a}{2b}$.

Da er $p = a - b \\cdot \\frac{a}{2b} = \\frac{a}{2}$ og $E_p = \\frac{a/2}{a/(2b)} \\cdot \\frac{1}{-b} = -1$.

Altså er $|E_p| = 1$ nøyaktig i inntektsmaksimum.`
    },
    {
      id: 's2-8-3-example-2',
      type: 'example',
      title: 'Priselastisitet',
      problem: `Etterspørselen etter en være er gitt ved $x = 100 - 2p$ der $x$ er antall enheter og $p$ er pris i kroner.

a) Beregn priselastisiteten når $p = 20$.
b) Er etterspørselen elastisk eller uelastisk ved denne prisen?
c) For hvilken pris er totalinntekten maksimal?`,
      solution: `**a) Priselastisitet:**
Vi har $\\frac{dx}{dp} = -2$.

Når $p = 20$: $x = 100 - 40 = 60$.

$$E_p = \\frac{p}{x} \\cdot \\frac{dx}{dp} = \\frac{20}{60} \\cdot (-2) = -\\frac{2}{3}$$

**b) Tolkning:**
$|E_p| = \\frac{2}{3} < 1$, altså er etterspørselen **uelastisk**. En prisøkning på 1 % gir bare ca. 0,67 % nedgang i etterspurt mengde. Bedriften kan øke inntekten ved å heve prisen.

**c) Maksimal totalinntekt:**
$|E_p| = 1$ gir: $\\frac{p}{100-2p} \\cdot 2 = 1 \\Rightarrow 2p = 100 - 2p \\Rightarrow p = 25$.

Alternativt: $I(p) = p(100-2p) = 100p - 2p^2$. $I'(p) = 100 - 4p = 0 \\Rightarrow p = 25$.

Totalinntekten er maksimal ved pris 25 kroner, med $x = 50$ enheter og $I = 1250$ kroner.`
    },
    {
      id: 's2-8-3-text-skatt',
      type: 'text',
      content: `## Avgifter og skatt

Når myndighetene legger en avgift $t$ kroner per enhet på en være, endres markedslikevekten. Vi kan analysere dette matematisk.

**Avgift på produsentene** gjør at tilbudskurven skifter oppover med $t$:
$$p_T^{\\text{ny}}(x) = p_T(x) + t$$

Det nye likevektspunktet finnes ved å løse:
$$p_E(x) = p_T(x) + t$$

Viktig resultat: Avgiften deles mellom produsent og forbruker. Hvor mye hver bærer avhenger av elastisitetene. Den parten med mest uelastisk kurve bærer størst andel av avgiften.`
    },
    {
      id: 's2-8-3-example-3',
      type: 'example',
      title: 'Virkningen av en avgift',
      problem: `I et marked er etterspørselen $p_E(x) = 100 - x$ og tilbudet $p_T(x) = 10 + 2x$, der $p$ er i kroner og $x$ i tusen enheter.

a) Finn likevektspris og likevektsmengde uten avgift.
b) Staten innfører en avgift på 15 kroner per enhet. Finn ny likevektsmengde og de prisene forbrukeren og produsenten betaler/mottar.`,
      solution: `**a) Uten avgift:**
$$100 - x = 10 + 2x \\quad \\Rightarrow \\quad 3x = 90 \\quad \\Rightarrow \\quad x^* = 30$$
$$p^* = 100 - 30 = 70 \\text{ kr}$$

**b) Med avgift $t = 15$ kr:**
Ny tilbudskurve: $p_T^{\\text{ny}}(x) = 10 + 2x + 15 = 25 + 2x$

Ny likevekt:
$$100 - x = 25 + 2x \\quad \\Rightarrow \\quad 3x = 75 \\quad \\Rightarrow \\quad x^{**} = 25$$

Forbrukerpris: $p_F = 100 - 25 = 75$ kr (forbrukeren betaler 5 kr mer enn før)
Produsentpris: $p_P = 75 - 15 = 60$ kr (produsenten mottar 10 kr mindre enn før)

Avgiften på 15 kr deles slik: forbrukeren bærer 5 kr og produsenten bærer 10 kr. Produsenten bærer mer fordi tilbudskurven er brattere (mer uelastisk i dette tilfellet).

Mengden synker fra 30 til 25 tusen enheter.`
    },
    {
      id: 's2-8-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-8-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Etterspørselen er $p_E(x) = 80 - 4x$ og tilbudet er $p_T(x) = 20 + 2x$. Finn likevektsmengden og likevektsprisen.', solution: '$80 - 4x = 20 + 2x \\Rightarrow 6x = 60 \\Rightarrow x^* = 10$. $p^* = 80 - 40 = 40$ kr.' },
          { label: 'b', task: 'Hva er overskuddstilbudet dersom prisen settes til 60 kr?', solution: 'Etterspurt: $60 = 80 - 4x \\Rightarrow x_E = 5$. Tilbudt: $60 = 20 + 2x \\Rightarrow x_T = 20$. Overskuddstilbud: $20 - 5 = 15$ enheter.' }
        ]
      }
    },
    {
      id: 's2-8-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-8-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Etterspørselen er $p_E(x) = 150 - 3x$ og tilbudet er $p_T(x) = 30 + x$. Finn likevekt.', solution: '$150 - 3x = 30 + x \\Rightarrow 4x = 120 \\Rightarrow x^* = 30$. $p^* = 150 - 90 = 60$ kr.' },
          { label: 'b', task: 'Dersom prisen settes til 40 kr, er det overskuddstilbud eller overskuddsetterspørsel?', solution: 'Etterspurt: $40 = 150 - 3x \\Rightarrow x_E \\approx 36{,}7$. Tilbudt: $40 = 30 + x \\Rightarrow x_T = 10$. Overskuddsetterspørsel: $36{,}7 - 10 = 26{,}7$ enheter.' }
        ]
      }
    },
    {
      id: 's2-8-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-8-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Etterspørselen er $x = 200 - 4p$. Beregn priselastisiteten $E_p$ når $p = 30$.', solution: '$\\frac{dx}{dp} = -4$. Når $p = 30$: $x = 80$. $E_p = \\frac{30}{80} \\cdot (-4) = -1{,}5$. $|E_p| = 1{,}5 > 1$: elastisk.' },
          { label: 'b', task: 'For hvilken pris er etterspørselen enhetselastisk?', solution: '$|E_p| = 1$: $\\frac{p}{200-4p} \\cdot 4 = 1 \\Rightarrow 4p = 200 - 4p \\Rightarrow p = 25$ kr.' }
        ]
      }
    },
    {
      id: 's2-8-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-8-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Forklar med egne ord hva det betyr at etterspørselen er elastisk.', solution: 'Elastisk etterspørsel ($|E_p| > 1$) betyr at forbrukerne er svært prisfølsomme. En liten prisøkning gir en relativt stor nedgang i etterspurt mengde. Luksusgjenstander har ofte elastisk etterspørsel.' },
          { label: 'b', task: 'Gi et eksempel på en være med uelastisk etterspørsel og forklar hvorfor.', solution: 'Bensin har uelastisk etterspørsel ($|E_p| < 1$) fordi folk er avhengige av bil for jobb og transport. En prisøkning på 10 % reduserer forbruket med mindre enn 10 % fordi det er vanskelig å finne alternativer på kort sikt.' }
        ]
      }
    },
    {
      id: 's2-8-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-8-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Etterspørselen er $p_E(x) = 200 - 5x$ og tilbudet er $p_T(x) = 50 + 5x$. Staten innfører en avgift på 20 kr per enhet. Finn ny likevekt.', solution: 'Uten avgift: $200 - 5x = 50 + 5x \\Rightarrow x^* = 15$, $p^* = 125$ kr. Med avgift: $200 - 5x = 70 + 5x \\Rightarrow 10x = 130 \\Rightarrow x^{**} = 13$. $p_F = 200 - 65 = 135$ kr, $p_P = 135 - 20 = 115$ kr.' },
          { label: 'b', task: 'Hvor mye av avgiften bæres av forbrukeren og hvor mye av produsenten?', solution: 'Forbrukeren: $135 - 125 = 10$ kr. Produsenten: $125 - 115 = 10$ kr. Avgiften deles likt fordi tilbuds- og etterspørselskurvene har like store helninger i absoluttverdi.' }
        ]
      }
    },
    {
      id: 's2-8-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-8-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Etterspørselen er $x = 500 - 10p$. Totalinntekten er $I = px$. Vis at $I(p) = 500p - 10p^2$ og finn prisen som gir størst inntekt.', solution: '$I(p) = p(500-10p) = 500p - 10p^2$. $I\'(p) = 500 - 20p = 0 \\Rightarrow p = 25$ kr. $I(25) = 12500 - 6250 = 6250$ kr.' },
          { label: 'b', task: 'Vis at $|E_p| = 1$ ved denne prisen.', solution: 'Når $p = 25$: $x = 250$. $E_p = \\frac{25}{250} \\cdot (-10) = -1$. $|E_p| = 1$ \\checkmark.' }
        ]
      }
    },
    {
      id: 's2-8-3-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-8-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Etterspørselen etter en være er $p(x) = 60e^{-0{,}02x}$. Finn priselastisiteten som funksjon av $x$.', solution: '$\\frac{dp}{dx} = -1{,}2e^{-0{,}02x}$. $\\frac{dx}{dp} = \\frac{1}{-1{,}2e^{-0{,}02x}}$. $E_p = \\frac{p}{x} \\cdot \\frac{dx}{dp} = \\frac{60e^{-0{,}02x}}{x} \\cdot \\frac{1}{-1{,}2e^{-0{,}02x}} = \\frac{-50}{x}$.' },
          { label: 'b', task: 'For hvilken $x$ er etterspørselen enhetselastisk? Finn tilhørende pris.', solution: '$|E_p| = 1$: $\\frac{50}{x} = 1 \\Rightarrow x = 50$. $p(50) = 60e^{-1} \\approx 22{,}07$ kr.' }
        ]
      }
    },
    {
      id: 's2-8-3-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-8-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Etterspørselen er $p_E(x) = 100 - 2x$ og tilbudet er $p_T(x) = 10 + x$. En avgift på $t$ kroner innføres. Finn den nye likevektsmengden som funksjon av $t$.', solution: '$100 - 2x = 10 + x + t \\Rightarrow 3x = 90 - t \\Rightarrow x(t) = 30 - \\frac{t}{3}$.' },
          { label: 'b', task: 'Statens avgiftsinntekt er $T = t \\cdot x(t)$. Finn avgiften $t$ som maksimerer statens inntekt.', solution: '$T(t) = t\\left(30 - \\frac{t}{3}\\right) = 30t - \\frac{t^2}{3}$. $T\'(t) = 30 - \\frac{2t}{3} = 0 \\Rightarrow t = 45$ kr. $T(45) = 1350 - 675 = 675$ kr per tusen enheter.' }
        ]
      }
    },
    {
      id: 's2-8-3-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-8-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Etterspørselen er $p_E(x) = \\frac{400}{x+5}$ og tilbudet er $p_T(x) = 2x + 10$. Finn likevektsmengden.', solution: '$\\frac{400}{x+5} = 2x+10 \\Rightarrow 400 = (2x+10)(x+5) = 2x^2 + 20x + 50 \\Rightarrow 2x^2 + 20x - 350 = 0 \\Rightarrow x^2 + 10x - 175 = 0$. $x = \\frac{-10+\\sqrt{100+700}}{2} = \\frac{-10+\\sqrt{800}}{2} \\approx \\frac{-10+28{,}3}{2} \\approx 9{,}1$.' },
          { label: 'b', task: 'Finn likevektsprisen og beregn priselastisiteten i likevektspunktet.', solution: '$p^* = 2 \\cdot 9{,}1 + 10 \\approx 28{,}3$ kr. Fra etterspørselen: $\\frac{dp}{dx} = \\frac{-400}{(x+5)^2}$. $\\frac{dx}{dp} = \\frac{-(x+5)^2}{400}$. $E_p = \\frac{p}{x} \\cdot \\frac{-(x+5)^2}{400} = \\frac{28{,}3}{9{,}1} \\cdot \\frac{-(14{,}1)^2}{400} \\approx 3{,}11 \\cdot (-0{,}497) \\approx -1{,}55$. Elastisk.' }
        ]
      }
    },
    {
      id: 's2-8-3-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-8-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'For en lineær etterspørselsfunksjon $p = a - bx$, vis at priselastisiteten er $E_p = \\frac{bx - a}{bx}$.', solution: '$\\frac{dx}{dp} = -\\frac{1}{b}$. $E_p = \\frac{p}{x} \\cdot \\left(-\\frac{1}{b}\\right) = \\frac{a-bx}{x} \\cdot \\left(-\\frac{1}{b}\\right) = \\frac{-(a-bx)}{bx} = \\frac{bx-a}{bx}$.' },
          { label: 'b', task: 'Vis at etterspørselen er elastisk ($|E_p| > 1$) for $x < \\frac{a}{2b}$ og uelastisk for $x > \\frac{a}{2b}$.', solution: '$|E_p| = \\frac{a-bx}{bx} > 1 \\Rightarrow a - bx > bx \\Rightarrow a > 2bx \\Rightarrow x < \\frac{a}{2b}$. Tilsvarende: $|E_p| < 1$ for $x > \\frac{a}{2b}$. Midtpunktet $x = \\frac{a}{2b}$ gir $|E_p| = 1$.' }
        ]
      }
    },
    {
      id: 's2-8-3-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-8-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Tilbudet er $p_T(x) = 5 + 0{,}5x$ og etterspørselen er $p_E(x) = 80 - x$. En avgift $t = 12$ innføres. Beregn dødvektstapet (effektivitetstapet), altså den tapte handelen målt som areal av trekanten mellom gammel og ny likevekt.', solution: 'Uten avgift: $80-x=5+0{,}5x \\Rightarrow x^*=50$, $p^*=30$. Med avgift: $80-x=17+0{,}5x \\Rightarrow x^{**}=42$. Dødvektstapet er arealet av trekanten med grunnlinje $t=12$ og høyde $x^*-x^{**}=8$: $\\frac{1}{2} \\cdot 12 \\cdot 8 = 48$ kroner.' }
        ]
      }
    },
    {
      id: 's2-8-3-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-8-3-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En bedrift har etterspørsel $p(x) = 300 - 0{,}5x$. Vis at bedriftens inntekt øker ved prisøkning dersom $x > 300$, og at inntekten synker ved prisøkning dersom $x < 300$.', solution: '$I(x) = 300x - 0{,}5x^2$. $I\'(x) = 300 - x$. For $x < 300$: $I\'(x) > 0$, inntekten øker med mengde, altså synker med prisøkning (lavere $x$). For $x > 300$: $I\'(x) < 0$, inntekten avtar med mengde, altså øker med prisøkning. Merk at ved $x = 300$ er $|E_p| = 1$.' }
        ]
      }
    },
    {
      id: 's2-8-3-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 's2-8-3-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En være har etterspørsel $x = 1000p^{-2}$. Vis at priselastisiteten er konstant og lik $-2$ for alle priser.', solution: '$\\frac{dx}{dp} = -2000p^{-3}$. $E_p = \\frac{p}{x} \\cdot \\frac{dx}{dp} = \\frac{p}{1000p^{-2}} \\cdot (-2000p^{-3}) = \\frac{p^3}{1000} \\cdot \\frac{-2000}{p^3} = -2$.' },
          { label: 'b', task: 'Hva betyr det at en være har konstant priselastisitet lik $-2$?', solution: 'Det betyr at en prisøkning på 1 % alltid gir 2 % nedgang i etterspurt mengde, uansett prisnivå. Funksjoner på formen $x = Ap^k$ har konstant elastisitet lik $k$.' }
        ]
      }
    },
    {
      id: 's2-8-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Markedslikevekt:** Sett $p_E(x) = p_T(x)$ og løs for $x^*$ (likevektsmengde) og $p^*$ (likevektspris).

**Priselastisitet:**
$$E_p = \\frac{p}{x} \\cdot \\frac{dx}{dp}$$
- $|E_p| > 1$: elastisk (mengden er prisfølsom)
- $|E_p| = 1$: enhetselastisk (totalinntekt er maksimal)
- $|E_p| < 1$: uelastisk (mengden er lite prisfølsom)

**Avgifter:** Skifter tilbudskurven oppover med $t$. Ny likevekt: $p_E(x) = p_T(x) + t$. Avgiften deles mellom forbruker og produsent avhengig av elastisitetene.

**Tommelfingerregel:** Den parten med mest uelastisk kurve bærer størst del av avgiften.`
    }
  ],
  exercises: []
};

export const CHAPTER_S2_8_4: TextbookChapter = {
  id: 's2-8-4',
  courseId: 's2',
  chapterNumber: '8.4',
  title: 'Konsument- og produsentoverskudd',
  description: 'Lær om konsumentoverskudd, produsentoverskudd, totaloverskudd og beregning av disse med integrasjon.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke integrasjon til å beregne konsument- og produsentoverskudd',
    'tolke bestemt integral i økonomiske sammenhenger'
  ],
  content: [
    {
      id: 's2-8-4-intro',
      type: 'text',
      content: `## Overskudd i et marked

I et marked med likevektspris $p^*$ og likevektsmengde $x^*$ er det noen forbrukere som ville vært villige til å betale *mer* enn $p^*$, og noen produsenter som kunne produsert til *lavere* kostnad enn $p^*$.

Denne ekstra nytten for forbrukere og produsenter kalles **konsumentoverskudd** og **produsentoverskudd**. Vi kan beregne disse ved hjelp av bestemt integral, noe som er en sentral anvendelse av integrasjon i S2.`
    },
    {
      id: 's2-8-4-def-1',
      type: 'definition',
      title: 'Konsumentoverskudd (KO)',
      content: `**Konsumentoverskuddet** er den totale gevinsten forbrukerne oppnår ved å kjøpe varen til markedsprisen i stedet for den maksimale prisen de var villige til å betale.

Grafisk er konsumentoverskuddet arealet mellom etterspørselskurven og likevektsprisen:

$$KO = \\int_0^{x^*} p_E(x) \\, dx - p^* \\cdot x^*$$

Alternativt:
$$KO = \\int_0^{x^*} \\big(p_E(x) - p^*\\big) \\, dx$$

Konsumentoverskuddet er altså arealet av området mellom etterspørselskurven og den horisontale linjen $p = p^*$, fra $x = 0$ til $x = x^*$.`
    },
    {
      id: 's2-8-4-def-2',
      type: 'definition',
      title: 'Produsentoverskudd (PO)',
      content: `**Produsentoverskuddet** er den totale gevinsten produsentene oppnår ved å selge til markedsprisen i stedet for den laveste prisen de var villige til å akseptere.

Grafisk er produsentoverskuddet arealet mellom likevektsprisen og tilbudskurven:

$$PO = p^* \\cdot x^* - \\int_0^{x^*} p_T(x) \\, dx$$

Alternativt:
$$PO = \\int_0^{x^*} \\big(p^* - p_T(x)\\big) \\, dx$$

**Totaloverskuddet** (samfunnsøkonomisk overskudd) er:
$$TO = KO + PO = \\int_0^{x^*} \\big(p_E(x) - p_T(x)\\big) \\, dx$$`
    },
    {
      id: 's2-8-4-theorem-1',
      type: 'theorem',
      title: 'Beregning av overskudd med integrasjon',
      content: `For lineære tilbuds- og etterspørselsfunksjoner med likevektsmengde $x^*$ og likevektspris $p^*$:

**Konsumentoverskudd:**
$$KO = \\int_0^{x^*} p_E(x) \\, dx - p^* \\cdot x^* = \\frac{1}{2} \\cdot x^* \\cdot \\big(p_E(0) - p^*\\big)$$

**Produsentoverskudd:**
$$PO = p^* \\cdot x^* - \\int_0^{x^*} p_T(x) \\, dx = \\frac{1}{2} \\cdot x^* \\cdot \\big(p^* - p_T(0)\\big)$$

For lineære funksjoner er overskuddene altså trekantsarealer. For ikke-lineære funksjoner må vi bruke integrasjon.`
    },
    {
      id: 's2-8-4-example-1',
      type: 'example',
      title: 'KO og PO med lineære funksjoner',
      problem: `I et marked er etterspørselen $p_E(x) = 120 - 3x$ og tilbudet $p_T(x) = 30 + 2x$.

a) Finn likevektspris og likevektsmengde.
b) Beregn konsumentoverskuddet og produsentoverskuddet.
c) Finn totaloverskuddet.`,
      solution: `**a) Likevekt:**
$$120 - 3x = 30 + 2x \\quad \\Rightarrow \\quad 5x = 90 \\quad \\Rightarrow \\quad x^* = 18$$
$$p^* = 120 - 54 = 66 \\text{ kr}$$

**b) Konsumentoverskudd:**
$$KO = \\int_0^{18} (120 - 3x) \\, dx - 66 \\cdot 18$$

$$= \\left[120x - \\frac{3x^2}{2}\\right]_0^{18} - 1188 = (2160 - 486) - 1188 = 1674 - 1188 = 486$$

Alternativt: $KO = \\frac{1}{2} \\cdot 18 \\cdot (120 - 66) = \\frac{1}{2} \\cdot 18 \\cdot 54 = 486$ kr.

**Produsentoverskudd:**
$$PO = 66 \\cdot 18 - \\int_0^{18} (30 + 2x) \\, dx$$

$$= 1188 - \\left[30x + x^2\\right]_0^{18} = 1188 - (540 + 324) = 1188 - 864 = 324$$

Alternativt: $PO = \\frac{1}{2} \\cdot 18 \\cdot (66 - 30) = \\frac{1}{2} \\cdot 18 \\cdot 36 = 324$ kr.

**c) Totaloverskudd:**
$$TO = KO + PO = 486 + 324 = 810 \\text{ kr}$$`
    },
    {
      id: 's2-8-4-text-ikkelinear',
      type: 'text',
      content: `## Ikke-lineære funksjoner

Når etterspørsels- eller tilbudsfunksjonen ikke er lineær, kan vi ikke bruke trekantformelen. Da må vi beregne integralet direkte.

Typiske eksempler:
- Eksponentiell etterspørsel: $p_E(x) = ae^{-bx}$
- Kvadratisk tilbud: $p_T(x) = c + dx^2$
- Rasjonell etterspørsel: $p_E(x) = \\frac{a}{x + b}$

I alle tilfeller bruker vi de samme formlene:
$$KO = \\int_0^{x^*} p_E(x) \\, dx - p^* \\cdot x^*$$
$$PO = p^* \\cdot x^* - \\int_0^{x^*} p_T(x) \\, dx$$`
    },
    {
      id: 's2-8-4-example-2',
      type: 'example',
      title: 'KO med ikke-lineær etterspørsel',
      problem: `Etterspørselen er $p_E(x) = \\frac{200}{x+2}$ og tilbudet er $p_T(x) = 10 + 2x$. Likevektsmengden er $x^* = 8$ og likevektsprisen er $p^* = 20$ kr (verifiser gjerne dette).

Beregn konsumentoverskuddet.`,
      solution: `Vi verifiserer først: $p_E(8) = \\frac{200}{10} = 20$ og $p_T(8) = 10 + 16 = 26 \\neq 20$.

La oss korrigere: $p_T(x) = 2 + 2x$. Da er $p_T(8) = 18 \\neq 20$. Vi bruker $p_T(x) = 4 + 2x$: $p_T(8) = 20$ \\checkmark.

**Konsumentoverskudd:**
$$KO = \\int_0^{8} \\frac{200}{x+2} \\, dx - 20 \\cdot 8$$

$$= 200 \\Big[\\ln(x+2)\\Big]_0^{8} - 160$$

$$= 200\\big(\\ln 10 - \\ln 2\\big) - 160$$

$$= 200 \\ln 5 - 160$$

$$\\approx 200 \\cdot 1{,}609 - 160 = 321{,}9 - 160 = 161{,}9 \\text{ kr}$$

Konsumentoverskuddet er ca. 162 kroner.`
    },
    {
      id: 's2-8-4-theorem-2',
      type: 'theorem',
      title: 'Virkning av avgift på overskuddene',
      content: `Når en avgift $t$ innføres, endres likevekten og overskuddene omfordeles:

1. **Konsumentoverskuddet synker** (forbrukerne betaler mer)
2. **Produsentoverskuddet synker** (produsentene mottar mindre)
3. **Staten får avgiftsinntekt** $T = t \\cdot x^{**}$
4. Det oppstår et **dødvektstap** (effektivitetstap)

$$\\text{Dødvektstap} = TO_{\\text{uten avgift}} - TO_{\\text{med avgift}} - T$$

Dødvektstapet representerer verdiskapning som går tapt fordi handelen reduseres. Det er samfunnsøkonomisk kostnad ved avgiften.`
    },
    {
      id: 's2-8-4-example-3',
      type: 'example',
      title: 'Totaloverskudd med og uten avgift',
      problem: `Etterspørselen er $p_E(x) = 100 - 2x$ og tilbudet er $p_T(x) = 20 + x$. Staten innfører en avgift $t = 12$ kr.

a) Beregn totaloverskuddet uten avgift.
b) Beregn totaloverskuddet med avgift og statens avgiftsinntekt.
c) Finn dødvektstapet.`,
      solution: `**a) Uten avgift:**
$100 - 2x = 20 + x \\Rightarrow x^* = \\frac{80}{3} \\approx 26{,}67$, $p^* = \\frac{140}{3} \\approx 46{,}67$ kr.

$$TO = \\int_0^{80/3} \\big((100-2x)-(20+x)\\big) \\, dx = \\int_0^{80/3} (80-3x) \\, dx$$

$$= \\left[80x - \\frac{3x^2}{2}\\right]_0^{80/3} = 80 \\cdot \\frac{80}{3} - \\frac{3}{2} \\cdot \\frac{6400}{9} = \\frac{6400}{3} - \\frac{3200}{3} = \\frac{3200}{3} \\approx 1066{,}7 \\text{ kr}$$

**b) Med avgift:**
$100 - 2x = 32 + x \\Rightarrow 3x = 68 \\Rightarrow x^{**} = \\frac{68}{3} \\approx 22{,}67$.

$p_F = 100 - 2 \\cdot \\frac{68}{3} = \\frac{164}{3} \\approx 54{,}67$ kr (forbrukerpris).

$$TO_{\\text{ny}} = \\int_0^{68/3} (80-3x) \\, dx = \\left[80x - \\frac{3x^2}{2}\\right]_0^{68/3} = \\frac{5440}{3} - \\frac{6936}{9} = \\frac{5440}{3} - \\frac{2312}{3} = \\frac{3128}{3} \\approx 1042{,}7 \\text{ kr}$$

Statens avgiftsinntekt: $T = 12 \\cdot \\frac{68}{3} = 272$ kr.

**c) Dødvektstap:**
$$\\text{Dødvektstap} = TO_{\\text{gammel}} - TO_{\\text{ny}} = \\frac{3200}{3} - \\frac{3128}{3} = \\frac{72}{3} = 24 \\text{ kr}$$

Kontroll: $\\frac{1}{2} \\cdot 12 \\cdot (\\frac{80}{3} - \\frac{68}{3}) = \\frac{1}{2} \\cdot 12 \\cdot 4 = 24$ kr \\checkmark.`
    },
    {
      id: 's2-8-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-8-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Etterspørselen er $p_E(x) = 60 - 2x$ og likevektsprisen er $p^* = 20$. Finn likevektsmengden $x^*$.', solution: '$20 = 60 - 2x \\Rightarrow x^* = 20$.' },
          { label: 'b', task: 'Beregn konsumentoverskuddet.', solution: '$KO = \\frac{1}{2} \\cdot 20 \\cdot (60 - 20) = \\frac{1}{2} \\cdot 20 \\cdot 40 = 400$ kr.' }
        ]
      }
    },
    {
      id: 's2-8-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-8-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Tilbudet er $p_T(x) = 10 + 3x$ og likevektspunktet er $(x^*, p^*) = (10, 40)$. Beregn produsentoverskuddet.', solution: '$PO = \\frac{1}{2} \\cdot 10 \\cdot (40 - 10) = \\frac{1}{2} \\cdot 10 \\cdot 30 = 150$ kr.' },
          { label: 'b', task: 'Verifiser svaret med integrasjon: $PO = p^* \\cdot x^* - \\int_0^{x^*} p_T(x) \\, dx$.', solution: '$PO = 40 \\cdot 10 - \\int_0^{10}(10+3x)\\,dx = 400 - [10x + \\frac{3x^2}{2}]_0^{10} = 400 - (100+150) = 400 - 250 = 150$ kr. \\checkmark' }
        ]
      }
    },
    {
      id: 's2-8-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-8-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Forklar med egne ord hva konsumentoverskudd representerer.', solution: 'Konsumentoverskuddet er den samlede gevinsten forbrukerne oppnår fordi de betaler mindre enn det de maksimalt var villige til å betale. Det representerer den ekstra nytten (velferden) markedet gir forbrukerne.' },
          { label: 'b', task: 'Hvorfor er totaloverskuddet størst i den frie markedslikevekten (uten avgifter)?', solution: 'I likevekt handles alle enheter der forbrukernes betalingsvillighet overstiger produsentenes kostnad. En avgift fjerner noen av disse lønnsomme transaksjonene (mengden synker), og den verdiskapningen som ville kommet fra disse transaksjonene, går tapt (dødvektstapet).' }
        ]
      }
    },
    {
      id: 's2-8-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-8-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Etterspørselen er $p_E(x) = 80 - x$ og tilbudet er $p_T(x) = 20 + x$. Finn likevekt og beregn KO og PO.', solution: '$80-x = 20+x \\Rightarrow x^* = 30$, $p^* = 50$. $KO = \\frac{1}{2} \\cdot 30 \\cdot 30 = 450$ kr. $PO = \\frac{1}{2} \\cdot 30 \\cdot 30 = 450$ kr.' },
          { label: 'b', task: 'Finn totaloverskuddet.', solution: '$TO = 450 + 450 = 900$ kr. Alternativt: $TO = \\int_0^{30}(60-2x)\\,dx = [60x-x^2]_0^{30} = 1800-900 = 900$ kr.' }
        ]
      }
    },
    {
      id: 's2-8-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-8-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Etterspørselen er $p_E(x) = 100 - x^2$ og tilbudet er $p_T(x) = 10 + 2x$. Finn likevektsmengden. (Hint: $x^2 + 2x - 90 = 0$)', solution: '$100-x^2 = 10+2x \\Rightarrow x^2+2x-90=0 \\Rightarrow x = \\frac{-2+\\sqrt{4+360}}{2} = \\frac{-2+\\sqrt{364}}{2} \\approx \\frac{-2+19{,}08}{2} \\approx 8{,}54$. $p^* \\approx 10 + 17{,}1 = 27{,}1$.' },
          { label: 'b', task: 'Beregn konsumentoverskuddet med integrasjon.', solution: '$KO = \\int_0^{8{,}54}(100-x^2)\\,dx - 27{,}1 \\cdot 8{,}54 = [100x - \\frac{x^3}{3}]_0^{8{,}54} - 231{,}4 \\approx (854 - 207{,}6) - 231{,}4 \\approx 646{,}4 - 231{,}4 = 415$ kr.' }
        ]
      }
    },
    {
      id: 's2-8-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-8-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Etterspørselen er $p_E(x) = 50e^{-0{,}1x}$ og likevektspunktet er $(10, 50e^{-1})$. Beregn KO med integrasjon.', solution: '$p^* = 50e^{-1} \\approx 18{,}39$. $KO = \\int_0^{10}50e^{-0{,}1x}\\,dx - 18{,}39 \\cdot 10 = [-500e^{-0{,}1x}]_0^{10} - 183{,}9 = -500e^{-1}+500-183{,}9 = 500 - 183{,}9 - 183{,}9 \\approx 132{,}1$ kr.' }
        ]
      }
    },
    {
      id: 's2-8-4-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-8-4-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Etterspørselen er $p_E(x) = 90 - 3x$ og tilbudet er $p_T(x) = 10 + x$. En avgift $t = 8$ innføres. Finn gammel og ny likevekt.', solution: 'Uten avgift: $90-3x = 10+x \\Rightarrow x^* = 20$, $p^* = 30$. Med avgift: $90-3x = 18+x \\Rightarrow x^{**} = 18$, $p_F = 36$, $p_P = 28$.' },
          { label: 'b', task: 'Beregn dødvektstapet.', solution: 'Dødvektstap $= \\frac{1}{2} \\cdot t \\cdot (x^*-x^{**}) = \\frac{1}{2} \\cdot 8 \\cdot 2 = 8$ kr.' }
        ]
      }
    },
    {
      id: 's2-8-4-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-8-4-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Tilbudet er $p_T(x) = x^2 + 5$ og likevektspunktet er $(4, 21)$. Beregn PO med integrasjon.', solution: '$PO = 21 \\cdot 4 - \\int_0^{4}(x^2+5)\\,dx = 84 - [\\frac{x^3}{3}+5x]_0^4 = 84 - (\\frac{64}{3}+20) = 84 - 41{,}33 = 42{,}67$ kr.' },
          { label: 'b', task: 'Sammenlign med trekantformelen. Hvorfor gir trekantformelen feil svar her?', solution: 'Trekantformelen gir $\\frac{1}{2} \\cdot 4 \\cdot (21-5) = 32$ kr, som er feil. Trekantformelen fungerer bare for lineære funksjoner. For $p_T(x) = x^2+5$ er tilbudskurven buet, og vi må bruke integrasjon.' }
        ]
      }
    },
    {
      id: 's2-8-4-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-8-4-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Etterspørselen er $p_E(x) = \\frac{100}{\\sqrt{x+1}}$ og tilbudet er $p_T(x) = 5 + x$. Vis at likevektsmengden oppfyller $x^2 + 11x + 30 = \\frac{10000}{x+1}$.', solution: 'Likevekt: $\\frac{100}{\\sqrt{x+1}} = 5+x$. Kvadrerer: $\\frac{10000}{x+1} = (5+x)^2 = x^2+10x+25$. Altså $(x+1)(x^2+10x+25) = 10000$, som gir $x^3+11x^2+35x+25 = 10000$. Omskriving: $x^2+11x+30 = \\frac{10000}{x+1} + 5$. (Direkte fra likningsoppsett.)' },
          { label: 'b', task: 'Bruk CAS eller numerisk metode til å finne $x^*$ og beregn KO.', solution: 'Numerisk: $x^* \\approx 15$. $p^* = \\frac{100}{4} = 25$. $KO = \\int_0^{15}\\frac{100}{\\sqrt{x+1}}\\,dx - 25 \\cdot 15 = [200\\sqrt{x+1}]_0^{15} - 375 = 200(4-1) - 375 = 600-375 = 225$ kr.' }
        ]
      }
    },
    {
      id: 's2-8-4-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-8-4-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Etterspørselen er $p_E(x) = 80 - 2x$ og tilbudet $p_T(x) = 20 + x$. Beregn KO, PO og TO uten avgift.', solution: '$80-2x=20+x \\Rightarrow x^*=20$, $p^*=40$. $KO = \\frac{1}{2} \\cdot 20 \\cdot 40 = 400$. $PO = \\frac{1}{2} \\cdot 20 \\cdot 20 = 200$. $TO = 600$ kr.' },
          { label: 'b', task: 'En avgift $t = 9$ innføres. Beregn nye KO, PO, statens inntekt og dødvektstap.', solution: 'Ny likevekt: $80-2x = 29+x \\Rightarrow x^{**}=17$. $p_F = 46$, $p_P = 37$. $KO_{ny} = \\frac{1}{2} \\cdot 17 \\cdot 34 = 289$. $PO_{ny} = \\frac{1}{2} \\cdot 17 \\cdot 17 = 144{,}5$. Statens inntekt: $9 \\cdot 17 = 153$. $TO_{ny} = 289 + 144{,}5 + 153 = 586{,}5$. Dødvektstap: $600 - 586{,}5 = 13{,}5$. Kontroll: $\\frac{1}{2} \\cdot 9 \\cdot 3 = 13{,}5$ \\checkmark.' }
        ]
      }
    },
    {
      id: 's2-8-4-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-8-4-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En monopolist har etterspørsel $p(x) = 100 - 2x$ og kostnad $K(x) = x^2 + 20x$. Finn profittmaksimerende mengde og pris.', solution: '$I(x) = 100x - 2x^2$. $I\'(x) = 100-4x$. $K\'(x) = 2x+20$. MR=MC: $100-4x = 2x+20 \\Rightarrow x_m = \\frac{80}{6} \\approx 13{,}3$. $p_m \\approx 73{,}3$.' },
          { label: 'b', task: 'Beregn konsumentoverskuddet ved monopolprisen og sammenlign med KO ved fri konkurranse (der $p = K\'(x)$, altså $100-2x = 2x+20$).', solution: 'Fri konkurranse: $x_{FK} = 20$, $p_{FK} = 60$. $KO_{FK} = \\frac{1}{2} \\cdot 20 \\cdot 40 = 400$. Monopol: $KO_m = \\frac{1}{2} \\cdot 13{,}3 \\cdot 26{,}7 \\approx 177{,}8$. Monopolet reduserer KO med ca. $222$ kr.' }
        ]
      }
    },
    {
      id: 's2-8-4-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-8-4-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Vis at for lineære tilbuds- og etterspørselsfunksjoner $p_E(x) = a - bx$ og $p_T(x) = c + dx$ er totaloverskuddet $TO = \\frac{(a-c)^2}{2(b+d)}$.', solution: '$x^* = \\frac{a-c}{b+d}$. $TO = \\int_0^{x^*}((a-bx)-(c+dx))\\,dx = \\int_0^{x^*}(a-c-(b+d)x)\\,dx = [(a-c)x - \\frac{(b+d)x^2}{2}]_0^{x^*} = (a-c) \\cdot \\frac{a-c}{b+d} - \\frac{(b+d)}{2} \\cdot \\frac{(a-c)^2}{(b+d)^2} = \\frac{(a-c)^2}{b+d} - \\frac{(a-c)^2}{2(b+d)} = \\frac{(a-c)^2}{2(b+d)}$.' }
        ]
      }
    },
    {
      id: 's2-8-4-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 's2-8-4-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Etterspørselen er $p_E(x) = 120 - 4x$ og tilbudet er $p_T(x) = 2x$. Finn likevekt og beregn KO, PO og TO.', solution: '$120-4x = 2x \\Rightarrow x^* = 20$, $p^* = 40$. $KO = \\frac{1}{2} \\cdot 20 \\cdot 80 = 800$. $PO = \\frac{1}{2} \\cdot 20 \\cdot 40 = 400$. $TO = 1200$ kr.' },
          { label: 'b', task: 'Staten innfører en avgift $t = 18$. Beregn dødvektstapet og statens inntekt.', solution: '$120-4x = 2x+18 \\Rightarrow x^{**} = 17$. Statens inntekt: $18 \\cdot 17 = 306$ kr. Dødvektstap: $\\frac{1}{2} \\cdot 18 \\cdot 3 = 27$ kr.' }
        ]
      }
    },
    {
      id: 's2-8-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Konsumentoverskudd (KO):** Arealet mellom etterspørselskurven og likevektsprisen:
$$KO = \\int_0^{x^*} p_E(x) \\, dx - p^* \\cdot x^*$$

**Produsentoverskudd (PO):** Arealet mellom likevektsprisen og tilbudskurven:
$$PO = p^* \\cdot x^* - \\int_0^{x^*} p_T(x) \\, dx$$

**Totaloverskudd:** $TO = KO + PO = \\int_0^{x^*} (p_E(x) - p_T(x)) \\, dx$

**For lineære funksjoner:** Overskuddene er trekantsarealer: $\\frac{1}{2} \\cdot \\text{grunnlinje} \\cdot \\text{høyde}$

**Avgift:** Reduserer KO og PO, gir statsinntekt $T = t \\cdot x^{**}$, og skaper dødvektstap $= \\frac{1}{2} t (x^* - x^{**})$.`
    }
  ],
  exercises: []
};

export const CHAPTER_S2_8_5: TextbookChapter = {
  id: 's2-8-5',
  courseId: 's2',
  chapterNumber: '8.5',
  title: 'Vekstmodeller i økonomi',
  description: 'Lær om eksponentiell og logistisk vekst, kapitalakkumulering, nåverdi, realverdier og økonomiske vekstmodeller.',
  estimatedMinutes: 60,
  competenceGoals: [
    'modellere vekst og endring med eksponentialfunksjoner og differensiallikninger',
    'bruke matematiske modeller til å analysere økonomisk utvikling over tid'
  ],
  content: [
    {
      id: 's2-8-5-intro',
      type: 'text',
      content: `## Økonomisk vekst

Mange økonomiske størrelser endrer seg over tid: BNP, befolkning, aksjeverdier, gjeld. For å beskrive og forutsi slik utvikling bruker vi **vekstmodeller** basert på eksponentialfunksjoner og differensiallikninger.

I dette kapitlet knytter vi sammen det vi har lært om eksponentialfunksjoner, derivasjon og integrasjon med praktiske økonomiske problemstillinger som rentes rente, inflasjon og bærekraftig vekst.`
    },
    {
      id: 's2-8-5-def-1',
      type: 'definition',
      title: 'Eksponentiell vekst og rentes rente',
      content: `**Rentes rente** med årlig rente $r$ (som desimaltall) gir kapitalen etter $t$ år:
$$K(t) = K_0 \\cdot (1 + r)^t$$

der $K_0$ er startkapitalen.

Ved **kontinuerlig forrentning** (rentes rente med uendelig mange renteperioder) er:
$$K(t) = K_0 \\cdot e^{rt}$$

Sammenhengen er: $(1+r)^t = e^{\\ln(1+r) \\cdot t}$, altså er den kontinuerlige renten $r_k = \\ln(1+r)$.

**Veksthastigheten** er den deriverte:
$$K'(t) = r_k \\cdot K_0 e^{r_k t} = r_k \\cdot K(t)$$

Altså: $\\frac{K'(t)}{K(t)} = r_k$ (den relative vekstraten er konstant).`
    },
    {
      id: 's2-8-5-theorem-1',
      type: 'theorem',
      title: 'Doblingstid og halveringstid',
      content: `For eksponentiell vekst $K(t) = K_0 \\cdot e^{rt}$ med $r > 0$ er **doblingstiden**:
$$T_2 = \\frac{\\ln 2}{r} \\approx \\frac{0{,}693}{r}$$

For eksponentiell vekst $K(t) = K_0 \\cdot (1+r)^t$ er doblingstiden:
$$T_2 = \\frac{\\ln 2}{\\ln(1+r)}$$

**Tilnærmingsformel (72-regelen):** $T_2 \\approx \\frac{72}{r \\cdot 100}$ der $r$ er renten i prosent.

Eksempel: Med 6 % rente er doblingstiden ca. $\\frac{72}{6} = 12$ år.

**Halveringstid** (for $r < 0$): $T_{1/2} = \\frac{\\ln 2}{|r|}$`
    },
    {
      id: 's2-8-5-example-1',
      type: 'example',
      title: 'Sparekonto med rentes rente',
      problem: `Du setter inn 50 000 kr på en konto med 4 % årlig rente.

a) Sett opp en modell for kapitalen $K(t)$ etter $t$ år.
b) Hvor mye har du etter 10 år?
c) Finn doblingstiden.
d) Hvor lang tid tar det å nå 100 000 kr?`,
      solution: `**a) Modell:**
$$K(t) = 50\\,000 \\cdot 1{,}04^t$$

**b) Etter 10 år:**
$$K(10) = 50\\,000 \\cdot 1{,}04^{10} = 50\\,000 \\cdot 1{,}4802 \\approx 74\\,012 \\text{ kr}$$

**c) Doblingstid:**
$$T_2 = \\frac{\\ln 2}{\\ln 1{,}04} = \\frac{0{,}6931}{0{,}03922} \\approx 17{,}7 \\text{ år}$$

72-regelen: $\\frac{72}{4} = 18$ år (god tilnærming).

**d) Tid til 100 000 kr:**
$$50\\,000 \\cdot 1{,}04^t = 100\\,000$$
$$1{,}04^t = 2$$
$$t = \\frac{\\ln 2}{\\ln 1{,}04} \\approx 17{,}7 \\text{ år}$$

(Samme som doblingstiden, naturligvis.)`
    },
    {
      id: 's2-8-5-text-nåverdi',
      type: 'text',
      content: `## Nåverdi og realverdi

**Nåverdi** er verdien i dag av en fremtidig utbetaling, diskontert med en kalkulasjonsrente.

Dersom du skal motta beløpet $B$ om $t$ år og kalkulasjonsrenten er $r$, er nåverdien:
$$NV = \\frac{B}{(1+r)^t} = B \\cdot (1+r)^{-t}$$

**Nåverdi av en betalingsrekke** $a_1, a_2, \\ldots, a_n$ mottatt etter 1, 2, ..., $n$ år:
$$NV = \\sum_{k=1}^{n} \\frac{a_k}{(1+r)^k}$$

For like betalinger $a$ i $n$ år (annuitet):
$$NV = a \\cdot \\frac{1 - (1+r)^{-n}}{r}$$

**Realverdi** tar hensyn til inflasjon. Med inflasjon $i$ er realrenten ca. $r_{\\text{real}} \\approx r - i$ (eksakt: $r_{\\text{real}} = \\frac{1+r}{1+i} - 1$).`
    },
    {
      id: 's2-8-5-def-2',
      type: 'definition',
      title: 'Nåverdi',
      content: `**Nåverdien** av et beløp $B$ som mottas om $t$ år med kalkulasjonsrente $r$ er:
$$NV = \\frac{B}{(1+r)^t}$$

Nåverdien svarer på: *Hva er $B$ kroner om $t$ år verdt i dag?*

For kontinuerlig diskontering:
$$NV = B \\cdot e^{-rt}$$

**Nåverdiprinsippet:** En investering er lønnsom dersom nåverdien av fremtidige inntekter overstiger investeringskostnaden.`
    },
    {
      id: 's2-8-5-example-2',
      type: 'example',
      title: 'Nåverdi av investering',
      problem: `En bedrift vurderer en investering på 500 000 kr som gir følgende inntekter:
- År 1: 150 000 kr
- År 2: 200 000 kr
- År 3: 250 000 kr

Kalkulasjonsrenten er 8 %. Er investeringen lønnsom?`,
      solution: `**Nåverdi av inntektene:**
$$NV = \\frac{150\\,000}{1{,}08^1} + \\frac{200\\,000}{1{,}08^2} + \\frac{250\\,000}{1{,}08^3}$$

$$= \\frac{150\\,000}{1{,}08} + \\frac{200\\,000}{1{,}1664} + \\frac{250\\,000}{1{,}2597}$$

$$\\approx 138\\,889 + 171\\,468 + 198\\,456 = 508\\,813 \\text{ kr}$$

**Netto nåverdi (NNV):**
$$NNV = 508\\,813 - 500\\,000 = 8\\,813 \\text{ kr}$$

Siden $NNV > 0$ er investeringen lønnsom (men bare marginalt). Den gir en avkastning litt over 8 %.`
    },
    {
      id: 's2-8-5-text-logistisk',
      type: 'text',
      content: `## Logistisk vekst

Eksponentiell vekst er urealistisk over lang tid fordi den antar ubegrenset vekst. I praksis begrenses veksten av ressurser, markedsstørrelse eller kapasitet.

**Logistisk vekst** modellerer begrenset vekst:
$$P(t) = \\frac{L}{1 + ae^{-kt}}$$

der:
- $L$ er bæreevnen (øvre grense / metningsverdi)
- $a = \\frac{L - P_0}{P_0}$ bestemmes av startverdien $P_0 = P(0)$
- $k > 0$ er vekstkonstanten

Egenskaper:
- $P(t) \\to L$ når $t \\to \\infty$ (nærmer seg bæreevnen)
- Veksten er raskest når $P = \\frac{L}{2}$ (vendepunktet)
- S-formet kurve (sigmoid)`
    },
    {
      id: 's2-8-5-def-3',
      type: 'definition',
      title: 'Logistisk vekstmodell',
      content: `Den **logistiske vekstmodellen** er gitt ved:
$$P(t) = \\frac{L}{1 + ae^{-kt}}$$

**Differensiallikningen** som gir logistisk vekst er:
$$P'(t) = kP(t)\\left(1 - \\frac{P(t)}{L}\\right)$$

Tolkning: Vekstraten $P'(t)$ er proporsjonal med både $P(t)$ (jo flere, jo mer vekst) og $(1 - P/L)$ (jo nærmere metning, jo mindre vekst).

**Vendepunktet** (raskest vekst) inntreffer når $P = \\frac{L}{2}$, ved tid:
$$t_v = \\frac{\\ln a}{k}$$`
    },
    {
      id: 's2-8-5-example-3',
      type: 'example',
      title: 'Logistisk vekst i markedspenetrasjon',
      problem: `Antall brukere av en ny app modelleres med $P(t) = \\frac{100\\,000}{1 + 99e^{-0{,}5t}}$ der $t$ er antall måneder etter lansering.

a) Hvor mange brukere er det ved lansering ($t = 0$)?
b) Hva er det maksimale antall brukere?
c) Når er veksten raskest, og hvor mange nye brukere per måned får appen da?`,
      solution: `**a) Ved lansering:**
$$P(0) = \\frac{100\\,000}{1 + 99} = \\frac{100\\,000}{100} = 1000 \\text{ brukere}$$

**b) Maksimalt antall:**
$$\\lim_{t \\to \\infty} P(t) = \\frac{100\\,000}{1 + 0} = 100\\,000 \\text{ brukere}$$

Bæreevnen er $L = 100\\,000$.

**c) Raskest vekst:**
Vendepunktet er der $P = \\frac{L}{2} = 50\\,000$.

Tidspunktet: $t_v = \\frac{\\ln 99}{0{,}5} = \\frac{4{,}595}{0{,}5} \\approx 9{,}2$ måneder.

Veksthastigheten i vendepunktet:
$$P'(t_v) = kP\\left(1 - \\frac{P}{L}\\right) = 0{,}5 \\cdot 50\\,000 \\cdot \\left(1 - \\frac{50\\,000}{100\\,000}\\right) = 0{,}5 \\cdot 50\\,000 \\cdot 0{,}5 = 12\\,500$$

Appen vokser raskest etter ca. 9,2 måneder med ca. 12 500 nye brukere per måned.`
    },
    {
      id: 's2-8-5-theorem-2',
      type: 'theorem',
      title: 'Kontinuerlig inntektsstrøm (nåverdi med integral)',
      content: `Dersom en investering gir en **kontinuerlig inntektsstrøm** $R(t)$ kroner per år i $T$ år, og kalkulasjonsrenten er $r$ (kontinuerlig), er nåverdien:

$$NV = \\int_0^T R(t) \\cdot e^{-rt} \\, dt$$

**Spesialtilfelle:** Konstant inntekt $R(t) = R$:
$$NV = R \\int_0^T e^{-rt} \\, dt = R \\cdot \\frac{1 - e^{-rT}}{r}$$

Når $T \\to \\infty$ (evig inntektsstrøm):
$$NV = \\frac{R}{r}$$

Dette kalles **kapitaliseringsformelen**.`
    },
    {
      id: 's2-8-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-8-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Du setter inn 100 000 kr med 5 % årlig rente. Hvor mye har du etter 15 år?', solution: '$K(15) = 100\\,000 \\cdot 1{,}05^{15} = 100\\,000 \\cdot 2{,}0789 \\approx 207\\,893$ kr.' },
          { label: 'b', task: 'Finn doblingstiden med 72-regelen og med den eksakte formelen.', solution: '72-regelen: $T_2 \\approx \\frac{72}{5} = 14{,}4$ år. Eksakt: $T_2 = \\frac{\\ln 2}{\\ln 1{,}05} = \\frac{0{,}693}{0{,}0488} \\approx 14{,}2$ år.' }
        ]
      }
    },
    {
      id: 's2-8-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-8-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn nåverdien av 200 000 kr som mottas om 5 år med kalkulasjonsrente 6 %.', solution: '$NV = \\frac{200\\,000}{1{,}06^5} = \\frac{200\\,000}{1{,}3382} \\approx 149\\,451$ kr.' },
          { label: 'b', task: 'Hva er nåverdien av 50 000 kr per år i 3 år med 8 % rente?', solution: '$NV = \\frac{50000}{1{,}08} + \\frac{50000}{1{,}08^2} + \\frac{50000}{1{,}08^3} \\approx 46296 + 42867 + 39692 = 128\\,855$ kr.' }
        ]
      }
    },
    {
      id: 's2-8-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-8-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En kapital vokser ifølge $K(t) = 80\\,000 \\cdot e^{0{,}06t}$. Finn startkapitalen og den kontinuerlige renten.', solution: '$K_0 = 80\\,000$ kr. Kontinuerlig rente: $r = 0{,}06 = 6\\,\\%$.' },
          { label: 'b', task: 'Hva er den tilsvarende årlige renten?', solution: '$1 + r_{\\text{årlig}} = e^{0{,}06} \\approx 1{,}0618$. Årlig rente: $r_{\\text{årlig}} \\approx 6{,}18\\,\\%$.' }
        ]
      }
    },
    {
      id: 's2-8-5-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-8-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Renten på en sparekonto er 3 % og inflasjonen er 2 %. Hva er realrenten?', solution: 'Tilnærmet: $r_{\\text{real}} \\approx 3\\% - 2\\% = 1\\%$. Eksakt: $r_{\\text{real}} = \\frac{1{,}03}{1{,}02} - 1 \\approx 0{,}0098 = 0{,}98\\%$.' },
          { label: 'b', task: 'Du har 500 000 kr. Hva er realverdien etter 10 år med 3 % nominell rente og 2 % inflasjon?', solution: 'Nominell verdi: $500\\,000 \\cdot 1{,}03^{10} \\approx 671\\,958$ kr. Realverdi: $\\frac{671\\,958}{1{,}02^{10}} = \\frac{671\\,958}{1{,}2190} \\approx 551\\,237$ kr. Alternativt: $500\\,000 \\cdot 1{,}0098^{10} \\approx 551\\,237$ kr.' }
        ]
      }
    },
    {
      id: 's2-8-5-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-8-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Antall abonnenter på en strømmetjeneste modelleres med $P(t) = \\frac{500\\,000}{1 + 49e^{-0{,}3t}}$ der $t$ er i måneder. Finn $P(0)$ og bæreevnen $L$.', solution: '$P(0) = \\frac{500\\,000}{50} = 10\\,000$. $L = 500\\,000$.' },
          { label: 'b', task: 'Når har tjenesten 250 000 abonnenter? Hva er veksten per måned da?', solution: '$P = \\frac{L}{2} = 250\\,000$ i vendepunktet: $t_v = \\frac{\\ln 49}{0{,}3} = \\frac{3{,}892}{0{,}3} \\approx 13{,}0$ mnd. $P\'(t_v) = 0{,}3 \\cdot 250000 \\cdot 0{,}5 = 37\\,500$ nye abonnenter per måned.' }
        ]
      }
    },
    {
      id: 's2-8-5-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-8-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En bedrift gir en konstant inntektsstrøm på 80 000 kr per år i 10 år. Finn nåverdien med kontinuerlig diskontering og rente $r = 0{,}05$.', solution: '$NV = 80000 \\cdot \\frac{1-e^{-0{,}5}}{0{,}05} = 80000 \\cdot \\frac{1-0{,}6065}{0{,}05} = 80000 \\cdot \\frac{0{,}3935}{0{,}05} = 80000 \\cdot 7{,}87 \\approx 629\\,600$ kr.' },
          { label: 'b', task: 'Hva ville nåverdien vært dersom inntektsstrømmen varte evig?', solution: '$NV = \\frac{R}{r} = \\frac{80000}{0{,}05} = 1\\,600\\,000$ kr.' }
        ]
      }
    },
    {
      id: 's2-8-5-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-8-5-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En investering på 1 000 000 kr gir inntektsstrøm $R(t) = 200\\,000 e^{-0{,}02t}$ kr/år i 10 år. Finn nåverdien med $r = 0{,}06$.', solution: '$NV = \\int_0^{10} 200000 e^{-0{,}02t} \\cdot e^{-0{,}06t} \\, dt = 200000 \\int_0^{10} e^{-0{,}08t} \\, dt = 200000 \\cdot \\frac{1-e^{-0{,}8}}{0{,}08} = 200000 \\cdot \\frac{1-0{,}4493}{0{,}08} = 200000 \\cdot 6{,}883 \\approx 1\\,376\\,600$ kr.' },
          { label: 'b', task: 'Er investeringen lønnsom?', solution: '$NNV = 1\\,376\\,600 - 1\\,000\\,000 = 376\\,600$ kr $> 0$. Ja, investeringen er lønnsom.' }
        ]
      }
    },
    {
      id: 's2-8-5-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-8-5-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Norges BNP i 2020 var ca. 3500 milliarder kr. Anta en årlig vekst på 2 %. Sett opp en modell og finn BNP i 2030.', solution: '$BNP(t) = 3500 \\cdot 1{,}02^t$ (milliarder kr, $t$ år etter 2020). $BNP(10) = 3500 \\cdot 1{,}02^{10} \\approx 3500 \\cdot 1{,}219 \\approx 4267$ mrd kr.' },
          { label: 'b', task: 'Når dobler BNP seg?', solution: '$T_2 = \\frac{\\ln 2}{\\ln 1{,}02} = \\frac{0{,}693}{0{,}0198} \\approx 35$ år. 72-regelen: $\\frac{72}{2} = 36$ år.' }
        ]
      }
    },
    {
      id: 's2-8-5-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-8-5-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Vis at løsningen av differensiallikningen $K\'(t) = rK(t)$ med $K(0) = K_0$ er $K(t) = K_0 e^{rt}$.', solution: 'Vi separerer variable: $\\frac{dK}{K} = r \\, dt$. Integrerer: $\\ln|K| = rt + C$. $K(t) = Ae^{rt}$. $K(0) = A = K_0$. Altså $K(t) = K_0 e^{rt}$.' },
          { label: 'b', task: 'En konto har kontinuerlig forrentning med $r = 0{,}04$ og du gjør også løpende innskudd på $s$ kr per år. Sett opp differensiallikningen og finn $K(t)$.', solution: '$K\'(t) = rK(t) + s = 0{,}04K + s$. Dette er en lineær DL. Løsning: $K(t) = Ce^{0{,}04t} - \\frac{s}{0{,}04}$. $K(0) = K_0$: $C = K_0 + \\frac{s}{0{,}04}$. $K(t) = \\left(K_0 + \\frac{s}{0{,}04}\\right)e^{0{,}04t} - \\frac{s}{0{,}04}$.' }
        ]
      }
    },
    {
      id: 's2-8-5-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-8-5-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Et salgsmarked er modellert med $S(t) = \\frac{2000}{1 + 19e^{-0{,}4t}}$ enheter per uke. Finn tidspunktet for raskest salgsvekst og den maksimale vekstraten.', solution: 'Raskest vekst ved vendepunktet $S = L/2 = 1000$: $\\frac{2000}{1+19e^{-0{,}4t}} = 1000 \\Rightarrow 1+19e^{-0{,}4t} = 2 \\Rightarrow e^{-0{,}4t} = \\frac{1}{19} \\Rightarrow t = \\frac{\\ln 19}{0{,}4} \\approx 7{,}4$ uker. Maks vekstrate: $S\'(t_v) = 0{,}4 \\cdot 1000 \\cdot 0{,}5 = 200$ enheter/uke.' },
          { label: 'b', task: 'Vis at $S\'(t) = 0{,}4 S(t)(1 - S(t)/2000)$ ved å derivere $S(t)$.', solution: '$S(t) = 2000(1+19e^{-0{,}4t})^{-1}$. $S\'(t) = 2000 \\cdot 19 \\cdot 0{,}4 \\cdot e^{-0{,}4t} \\cdot (1+19e^{-0{,}4t})^{-2}$. $\\frac{S(t)}{2000} = \\frac{1}{1+19e^{-0{,}4t}}$, $1 - \\frac{S}{2000} = \\frac{19e^{-0{,}4t}}{1+19e^{-0{,}4t}}$. $0{,}4 \\cdot S \\cdot (1-S/2000) = 0{,}4 \\cdot \\frac{2000}{1+19e^{-0{,}4t}} \\cdot \\frac{19e^{-0{,}4t}}{1+19e^{-0{,}4t}} = \\frac{0{,}4 \\cdot 2000 \\cdot 19 e^{-0{,}4t}}{(1+19e^{-0{,}4t})^2} = S\'(t)$. \\checkmark' }
        ]
      }
    },
    {
      id: 's2-8-5-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-8-5-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Du vurderer to investeringer med rente $r = 0{,}05$. A: 100 000 kr nå. B: 110 000 kr om 2 år. Hvilken er best (basert på nåverdi)?', solution: 'NV(A) = 100 000 kr. NV(B) = $\\frac{110000}{1{,}05^2} = \\frac{110000}{1{,}1025} \\approx 99\\,773$ kr. Investering A har høyest nåverdi og er marginalt best.' },
          { label: 'b', task: 'For hvilken rente $r$ er de to investeringene likeverdige?', solution: '$100000 = \\frac{110000}{(1+r)^2} \\Rightarrow (1+r)^2 = 1{,}1 \\Rightarrow 1+r = \\sqrt{1{,}1} \\approx 1{,}0488 \\Rightarrow r \\approx 4{,}88\\%$.' }
        ]
      }
    },
    {
      id: 's2-8-5-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-8-5-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En bedrift har årlig inntektsstrøm $R(t) = 100\\,000(1 + 0{,}03t)$ kr/år (lineært voksende). Finn nåverdien over 5 år med $r = 0{,}06$ (kontinuerlig).', solution: '$NV = \\int_0^5 100000(1+0{,}03t)e^{-0{,}06t}\\,dt = 100000\\int_0^5 e^{-0{,}06t}\\,dt + 3000\\int_0^5 te^{-0{,}06t}\\,dt$. Første integral: $\\frac{1-e^{-0{,}3}}{0{,}06} \\approx 4{,}3512$. Andre integral (delvis integrasjon): $[-\\frac{t}{0{,}06}e^{-0{,}06t}]_0^5 + \\frac{1}{0{,}06}\\int_0^5 e^{-0{,}06t}\\,dt \\approx -61{,}65 + 72{,}52 = 10{,}87$. $NV \\approx 100000 \\cdot 4{,}351 + 3000 \\cdot 10{,}87 \\approx 435\\,100 + 32\\,610 \\approx 467\\,710$ kr.' }
        ]
      }
    },
    {
      id: 's2-8-5-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 's2-8-5-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Forklar forskjellen mellom eksponentiell og logistisk vekst med egne ord.', solution: 'Eksponentiell vekst ($K = K_0 e^{rt}$) vokser ubegrenset med konstant prosentvis rate. Logistisk vekst ($P = L/(1+ae^{-kt})$) bremser når den nærmer seg bæreevnen $L$, og gir en S-formet kurve. Logistisk vekst er mer realistisk for markeder med begrenset størrelse.' },
          { label: 'b', task: 'Nevn to eksempler på økonomiske fenomener som passer best med logistisk vekst.', solution: 'Markedspenetrasjon av et nytt produkt (begrenset av markedsstørrelse). Adopsjon av ny teknologi (begrenset av total populasjon). Salg av en trend-være som etterhvert mettes. Befolkningsvekst i et land med begrenset areal og ressurser.' }
        ]
      }
    },
    {
      id: 's2-8-5-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 's2-8-5-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En kapital vokser med kontinuerlig rente 7 %. Finn den eksakte årlige renten.', solution: '$r_{\\text{årlig}} = e^{0{,}07} - 1 \\approx 1{,}0725 - 1 = 0{,}0725 = 7{,}25\\%$.' },
          { label: 'b', task: 'En investering gir 4 % årlig avkastning. Finn den kontinuerlige renten.', solution: '$r_k = \\ln(1{,}04) \\approx 0{,}03922 = 3{,}92\\%$.' }
        ]
      }
    },
    {
      id: 's2-8-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Eksponentiell vekst:** $K(t) = K_0(1+r)^t$ eller $K(t) = K_0 e^{r_k t}$
- Doblingstid: $T_2 = \\frac{\\ln 2}{\\ln(1+r)}$ (72-regelen: $\\approx \\frac{72}{r \\cdot 100}$)

**Nåverdi:** $NV = \\frac{B}{(1+r)^t}$ (verdien i dag av et fremtidig beløp)
- Kontinuerlig inntektsstrøm: $NV = \\int_0^T R(t) e^{-rt} \\, dt$
- Evig konstant inntekt: $NV = \\frac{R}{r}$

**Logistisk vekst:** $P(t) = \\frac{L}{1 + ae^{-kt}}$
- S-formet kurve med bæreevne $L$
- Raskest vekst ved $P = L/2$

**Realverdi:** $r_{\\text{real}} \\approx r_{\\text{nominell}} - \\text{inflasjon}$

**Sammenheng:** $(1+r)^t = e^{t \\ln(1+r)}$, altså er kontinuerlig rente $r_k = \\ln(1+r)$.`
    }
  ],
  exercises: []
};

export const S2_KAP8_CHAPTERS: TextbookChapter[] = [CHAPTER_S2_8_1, CHAPTER_S2_8_2, CHAPTER_S2_8_3, CHAPTER_S2_8_4, CHAPTER_S2_8_5];
