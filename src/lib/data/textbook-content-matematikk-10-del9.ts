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
    'Lær om samanhengen mellom konstant prosentvis endring, vekstfaktor og eksponentialfunksjoner. Utforsk eksponentiell vekst og nedgang med praktiske eksempler.',
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

Har du nokon gong høyrt uttrykket «det veks eksponentielt»? Kanskje i samband med korleis eit virus spreier seg, eller korleis renter kan få ein sparekonto til å vekse. Eksponentiell vekst er noko heilt anna enn den lineære veksten du er vand med frå tidlegare.

Tenk deg at du legg 1 000 kr i banken med 5 % rente kvart år. Etter eitt år har du 1 050 kr. Men etter to år har du ikkje 1 100 kr — du har 1 102,50 kr, fordi renta det andre året blir rekna ut frå det nye beløpet på 1 050 kr. Denne effekten, der veksten i seg sjølv veks, er kjernen i eksponentiell vekst.

I dette kapittelet skal du lære:
- Kva som kjenneteiknar eksponentiell vekst og nedgang
- Korleis vekstfaktor heng saman med prosentvis endring
- Korleis vi skriv eksponentialfunksjonar på forma $f(x) = a \\cdot b^x$
- Å bruke eksponentialfunksjonar i praktiske situasjonar

**Føresetnad:** Du bør kjenne til vekstfaktor frå kapittel 6.2. Viss du treng repetisjon, kan du gå tilbake dit først.`,
    },

    // ========== BLOKK 1: Frå prosentvis endring til vekstfaktor ==========
    {
      id: '10-9-1-def-vekstfaktor',
      type: 'definition',
      title: 'Vekstfaktor',
      content: `Når ein storleik endrar seg med same prosentdel kvar periode, seier vi at endringa er **konstant prosentvis**.

**Vekstfaktor** er det talet vi gongar med for å finne den nye verdien etter éi endring.

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
      title: 'Eksempel: Frå prosent til vekstfaktor',
      problem:
        'Ein by i Noreg har 12 000 innbyggjarar. Folketalet aukar med 3 % kvart år. Kor mange innbyggjarar har byen etter 1, 2 og 3 år?',
      solution: `**Løysing:**

Vekstfaktor: $b = 1 + 0{,}03 = 1{,}03$

Startverdi: $a = 12\\,000$

Etter 1 år: $12\\,000 \\cdot 1{,}03 = 12\\,360$

Etter 2 år: $12\\,360 \\cdot 1{,}03 = 12\\,730{,}8 \\approx 12\\,731$

Etter 3 år: $12\\,730{,}8 \\cdot 1{,}03 = 13\\,112{,}7 \\approx 13\\,113$

Vi kan òg skrive det slik:
- Etter 1 år: $12\\,000 \\cdot 1{,}03^1 = 12\\,360$
- Etter 2 år: $12\\,000 \\cdot 1{,}03^2 = 12\\,730{,}8$
- Etter 3 år: $12\\,000 \\cdot 1{,}03^3 \\approx 13\\,113$

**Svar:** Etter 3 år har byen ca. 13 113 innbyggjarar.`,
    },
    {
      id: '10-9-1-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-9-1-oppg-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn vekstfaktoren for kvar av desse endringane.',
        subTasks: [
          {
            label: 'a',
            task: '6 % auke',
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
            task: '2{,}5 % auke',
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
          'a) $1{,}06$ b) $0{,}80$ c) $1{,}025$ d) $0{,}88$. Hugs: Auke gir $b = 1 + p/100$ og nedgang gir $b = 1 - p/100$.',
        hints: ['Auke: legg prosenten til 1. Nedgang: trekk prosenten frå 1.'],
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
        task: 'Ein bil kostar 350 000 kr ny. Kvart år fell verdien med 15 %. Kor mykje er bilen verd etter 1, 2 og 3 år?',
        hints: [
          'Bruk vekstfaktor $b = 1 - 0{,}15 = 0{,}85$. Gong startverdien med $b$ for kvart år.',
        ],
        solution: `Vekstfaktor: $b = 0{,}85$

Etter 1 år: $350\\,000 \\cdot 0{,}85 = 297\\,500$ kr

Etter 2 år: $350\\,000 \\cdot 0{,}85^2 = 252\\,875$ kr

Etter 3 år: $350\\,000 \\cdot 0{,}85^3 \\approx 214\\,944$ kr

**Svar:** Bilen er verd ca. 297 500 kr, 252 875 kr og 214 944 kr etter 1, 2 og 3 år.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== BLOKK 2: Eksponentialfunksjonen ==========
    {
      id: '10-9-1-def-eksponentialfunksjon',
      type: 'definition',
      title: 'Eksponentialfunksjon',
      content: `Ein **eksponentialfunksjon** er ein funksjon på forma:

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
        'Ein bakteriekultur startar med 500 bakteriar. Talet på bakteriar doblar seg kvar time. Skriv opp ein eksponentialfunksjon $f(x)$ der $x$ er talet på timar, og finn kor mange bakteriar det er etter 6 timar.',
      solution: `**Løysing:**

Startverdien er $a = 500$ bakteriar.

Dobling betyr 100 % auke, altså vekstfaktor $b = 2$.

Funksjonen blir:
$$f(x) = 500 \\cdot 2^x$$

Etter 6 timar:
$$f(6) = 500 \\cdot 2^6 = 500 \\cdot 64 = 32\\,000$$

**Svar:** Etter 6 timar er det 32 000 bakteriar i kulturen.`,
    },
    {
      id: '10-9-1-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-9-1-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du set 10 000 kr i banken med 4 % årleg rente (rentes rente).',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv opp ein eksponentialfunksjon $f(x)$ der $x$ er talet på år.',
            solution:
              'Startverdi $a = 10\\,000$ og vekstfaktor $b = 1{,}04$. Funksjonen er $f(x) = 10\\,000 \\cdot 1{,}04^x$.',
          },
          {
            label: 'b',
            task: 'Kor mykje pengar har du etter 10 år?',
            solution:
              '$f(10) = 10\\,000 \\cdot 1{,}04^{10} \\approx 10\\,000 \\cdot 1{,}4802 \\approx 14\\,802$ kr.',
          },
          {
            label: 'c',
            task: 'Kor mykje renter har du tent totalt etter 10 år?',
            solution:
              'Total rente = $14\\,802 - 10\\,000 = 4\\,802$ kr. Samanlikna med enkel rente: $10\\,000 \\cdot 0{,}04 \\cdot 10 = 4\\,000$ kr. Rentes rente gir 802 kr ekstra.',
          },
        ],
        solution:
          'a) $f(x) = 10\\,000 \\cdot 1{,}04^x$. b) Ca. 14 802 kr. c) 4 802 kr i samla renter (802 kr meir enn med enkel rente).',
        hints: [
          'Rente 4 % gir vekstfaktor $1{,}04$.',
          'Rentes rente betyr at renta blir lagt til kapitalen kvart år, slik at du får rente av renta.',
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
        task: 'Radioaktivt jod-131 har ei halveringstid på 8 dagar. Det betyr at halvparten av stoffet bryt ned kvar 8. dag. Du startar med 200 mg jod-131.',
        subTasks: [
          {
            label: 'a',
            task: 'Kor mykje jod-131 er att etter 8, 16, 24 og 32 dagar?',
            solution:
              'Etter 8 dagar: $200 \\cdot 0{,}5 = 100$ mg. Etter 16 dagar: $200 \\cdot 0{,}5^2 = 50$ mg. Etter 24 dagar: $200 \\cdot 0{,}5^3 = 25$ mg. Etter 32 dagar: $200 \\cdot 0{,}5^4 = 12{,}5$ mg.',
          },
          {
            label: 'b',
            task: 'Skriv opp ein eksponentialfunksjon $f(x)$ der $x$ er talet på halveringsperiodar.',
            solution:
              '$f(x) = 200 \\cdot 0{,}5^x = 200 \\cdot \\left(\\frac{1}{2}\\right)^x$',
          },
          {
            label: 'c',
            task: 'Etter kor mange halveringsperiodar er det mindre enn 1 mg att?',
            solution:
              'Vi løyser $200 \\cdot 0{,}5^x < 1$, altså $0{,}5^x < 0{,}005$. Prøving: $0{,}5^7 = 0{,}0078$ (for mykje), $0{,}5^8 = 0{,}0039$ (under 0,005). Svar: Etter 8 halveringsperiodar, altså 64 dagar.',
          },
        ],
        solution:
          'a) 100 mg, 50 mg, 25 mg, 12,5 mg. b) $f(x) = 200 \\cdot 0{,}5^x$. c) Etter 8 halveringsperiodar (64 dagar).',
        hints: [
          'Halveringstid betyr at vekstfaktoren er $0{,}5$ per periode.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== BLOKK 3: Finne a og b frå opplysningar ==========
    {
      id: '10-9-1-text-finne-ab',
      type: 'text',
      title: 'Finne startverdien og vekstfaktoren',
      content: `## Bestemme $a$ og $b$ i $f(x) = a \\cdot b^x$

Ofte får du opplysningar om ein situasjon og må sjølv finne eksponentialfunksjonen. Her er strategien:

**Finne $a$ (startverdien):**
Startverdien er verdien når $x = 0$. Dersom du veit kva storleiken er ved start, har du $a$ direkte.

**Finne $b$ (vekstfaktoren):**
- Viss du kjenner den prosentvise endringa per periode, brukar du formelen for vekstfaktor.
- Viss du har to datapunkt, til dømes $f(x_1) = y_1$ og $f(x_2) = y_2$, kan du setje opp likninga:

$$\\frac{y_2}{y_1} = b^{x_2 - x_1}$$

og dermed finne $b$.`,
    },
    {
      id: '10-9-1-example-finne-ab',
      type: 'example',
      title: 'Eksempel: Finne eksponentialfunksjonen',
      problem:
        'Ein forskar måler bakteriar i ein kultur. Etter 2 timar er det 1 800 bakteriar, og etter 5 timar er det 14 400 bakteriar. Finn eksponentialfunksjonen $f(x) = a \\cdot b^x$ der $x$ er tid i timar.',
      solution: `**Løysing:**

Vi har $f(2) = 1\\,800$ og $f(5) = 14\\,400$.

**Steg 1: Finn $b$**

$$\\frac{f(5)}{f(2)} = \\frac{a \\cdot b^5}{a \\cdot b^2} = b^3 = \\frac{14\\,400}{1\\,800} = 8$$

$$b^3 = 8 \\quad \\Rightarrow \\quad b = \\sqrt[3]{8} = 2$$

**Steg 2: Finn $a$**

Vi brukar $f(2) = a \\cdot 2^2 = 4a = 1\\,800$:

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
        task: 'Ein investering var verd 50 000 kr ved starten og 72 800 kr etter 4 år. Gå ut frå at verdien følgjer ein eksponentialfunksjon.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn vekstfaktoren $b$.',
            solution:
              '$f(4) = a \\cdot b^4$. Vi har $72\\,800 = 50\\,000 \\cdot b^4$, altså $b^4 = 72\\,800 / 50\\,000 = 1{,}456$. Dermed $b = \\sqrt[4]{1{,}456} \\approx 1{,}098$. Vekstfaktoren er ca. $1{,}10$.',
          },
          {
            label: 'b',
            task: 'Kva er den årlege prosentvise auken?',
            solution:
              'Prosentvis auke: $(b - 1) \\cdot 100 = (1{,}098 - 1) \\cdot 100 \\approx 9{,}8$ %. Investeringa veks med ca. 9,8 % per år.',
          },
          {
            label: 'c',
            task: 'Kor mykje er investeringa verd etter 10 år?',
            solution:
              '$f(10) = 50\\,000 \\cdot 1{,}098^{10} \\approx 50\\,000 \\cdot 2{,}551 \\approx 127\\,550$ kr.',
          },
        ],
        solution:
          'a) $b \\approx 1{,}098$. b) Ca. 9,8 % årleg auke. c) Ca. 127 550 kr etter 10 år.',
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
        task: 'Prisen på ein mobiltelefon fell i verdi. Då den var ny, kosta den 12 990 kr. Etter 2 år er han verd 7 150 kr.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn vekstfaktoren $b$ og den årlege prosentvise nedgangen.',
            solution:
              '$b^2 = 7\\,150 / 12\\,990 \\approx 0{,}5504$. $b = \\sqrt{0{,}5504} \\approx 0{,}742$. Nedgang: $(1 - 0{,}742) \\cdot 100 \\approx 25{,}8$ % per år.',
          },
          {
            label: 'b',
            task: 'Skriv opp eksponentialfunksjonen $f(x)$ der $x$ er tal på år.',
            solution: '$f(x) = 12\\,990 \\cdot 0{,}742^x$',
          },
          {
            label: 'c',
            task: 'Etter kor mange år er telefonen verd under 1 000 kr?',
            solution:
              'Vi løyser $12\\,990 \\cdot 0{,}742^x < 1\\,000$. $0{,}742^x < 1\\,000 / 12\\,990 \\approx 0{,}077$. Prøving: $0{,}742^8 \\approx 0{,}102$ (for høgt), $0{,}742^9 \\approx 0{,}076$ (under). Svar: Etter ca. 9 år.',
          },
        ],
        solution:
          'a) $b \\approx 0{,}742$, ca. 25,8 % nedgang per år. b) $f(x) = 12\\,990 \\cdot 0{,}742^x$. c) Etter ca. 9 år.',
        hints: [
          'Sidan verdien minkar, er $b < 1$.',
          'For deloppgåve c) kan du prøve deg fram eller bruke logaritmar.',
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

- **Eksponentiell vekst** oppstår når ein storleik aukar med same prosentdel kvar periode
- **Eksponentiell nedgang** oppstår når ein storleik minkar med same prosentdel kvar periode
- **Vekstfaktor**: $b = 1 + p/100$ for vekst, $b = 1 - p/100$ for nedgang
- **Eksponentialfunksjonen** $f(x) = a \\cdot b^x$ der $a$ er startverdi og $b$ er vekstfaktor
- $b > 1$ betyr vekst, $0 < b < 1$ betyr nedgang
- Vi kan finne $a$ og $b$ frå opplysningar om to datapunkt

### Nøkkelomgrep
| Omgrep | Forklaring |
|--------|------------|
| Vekstfaktor | Talet vi gongar med for kvar periode |
| Eksponentiell vekst | Vekst der auken er prosentvis lik per periode ($b > 1$) |
| Eksponentiell nedgang | Nedgang der minken er prosentvis lik per periode ($0 < b < 1$) |
| Startverdi ($a$) | Verdien når $x = 0$ |
| Halveringstid | Tida det tek før storleiken er halvert |
| Rentes rente | Rente som blir rekna ut frå kapitalen pluss tidlegare opptent rente |`,
    },

    // ========== SAMLEOPPGÅVER ==========
    {
      id: '10-9-1-exercise-7',
      type: 'exercise',
      exercise: {
        id: '10-9-1-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Folketalet i Tromsø var ca. 77 000 i 2020. Dei siste åra har folketalet auka med ca. 1,2 % per år. a) Skriv opp ein eksponentialfunksjon der $x$ er talet på år etter 2020. b) Kva folketal gir modellen i 2030? c) I kva år passerer folketalet 90 000 ifølgje modellen?',
        hints: [
          'a) Startverdien er 77 000 og vekstfaktoren er $1{,}012$.',
          'c) Prøv deg fram med ulike verdiar av $x$ eller bruk CAS.',
        ],
        solution: `a) $f(x) = 77\\,000 \\cdot 1{,}012^x$

b) $f(10) = 77\\,000 \\cdot 1{,}012^{10} \\approx 77\\,000 \\cdot 1{,}1268 \\approx 86\\,763$

c) Vi løyser $77\\,000 \\cdot 1{,}012^x = 90\\,000$. $1{,}012^x = 90\\,000 / 77\\,000 \\approx 1{,}1688$. Prøving: $1{,}012^{13} \\approx 1{,}1676$ og $1{,}012^{14} \\approx 1{,}1816$. Folketalet passerer 90 000 omtrent i 2033.`,
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
        task: 'Du har to sparealternativ: Alternativ A gir 3,5 % rente med rentes rente. Alternativ B gir 4 200 kr i rente kvart år (enkel rente). Du set inn 100 000 kr.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv opp ein funksjon for kvar av dei to alternativa.',
            solution:
              'Alternativ A: $f(x) = 100\\,000 \\cdot 1{,}035^x$ (eksponentiell). Alternativ B: $g(x) = 100\\,000 + 4\\,200x$ (lineær).',
          },
          {
            label: 'b',
            task: 'Rekn ut verdien av begge alternativa etter 5, 10, 15 og 20 år. Sett opp ein tabell.',
            solution:
              'Etter 5 år: A = 118 769 kr, B = 121 000 kr. Etter 10 år: A = 141 060 kr, B = 142 000 kr. Etter 15 år: A = 167 535 kr, B = 163 000 kr. Etter 20 år: A = 199 989 kr, B = 184 000 kr.',
          },
          {
            label: 'c',
            task: 'Etter omtrent kor mange år blir alternativ A betre enn alternativ B?',
            solution:
              'Vi ser frå tabellen at A tek igjen B mellom 10 og 15 år. Meir nøyaktig: $100\\,000 \\cdot 1{,}035^x = 100\\,000 + 4\\,200x$. Prøving gir $x \\approx 12$ år.',
          },
          {
            label: 'd',
            task: 'Forklar kvifor eksponentiell vekst alltid vil slå lineær vekst over lang nok tid.',
            solution:
              'Med lineær vekst aukar beløpet med eit fast kronebeløp kvart år. Med eksponentiell vekst aukar beløpet med ein fast prosent, som betyr at sjølve auken veks over tid. Til slutt blir den prosentvise auken større enn det faste kronebeløpet, og eksponentiell vekst vinn alltid over tid.',
          },
        ],
        solution:
          'a) A: $f(x) = 100\\,000 \\cdot 1{,}035^x$, B: $g(x) = 100\\,000 + 4\\,200x$. b) Sjå deloppgåvene. c) Omtrent etter 12 år. d) Eksponentiell vekst aukar sjølve auken, medan lineær vekst legg til same beløp kvar gong.',
        hints: [
          'Alternativ A er eksponentiell vekst, alternativ B er lineær vekst.',
          'Samanlikn funksjonsverdiane for ulike $x$-verdiar.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Vekstfaktor', definition: 'Talet vi gongar med for kvar periode ved konstant prosentvis endring' },
    { term: 'Eksponentiell vekst', definition: 'Vekst der verdien aukar med same prosentdel kvar periode' },
    { term: 'Eksponentiell nedgang', definition: 'Nedgang der verdien minkar med same prosentdel kvar periode' },
    { term: 'Eksponentialfunksjon', definition: 'Funksjon på forma $f(x) = a \\cdot b^x$ der $a$ er startverdi og $b$ er vekstfaktor' },
    { term: 'Halveringstid', definition: 'Tida det tek før ein storleik er redusert til halvparten' },
    { term: 'Rentes rente', definition: 'Prinsippet om at renter blir lagt til kapitalen, slik at ein får rente av renta' },
  ],
  nextChapter: '10-9-2',
};


// ============================================================================
// Kapittel 9.2: Eksponentialfunksjonar og grafar
// ============================================================================

export const CHAPTER_10_9_2: TextbookChapter = {
  id: '10-9-2',
  courseId: '10',
  chapterNumber: '9.2',
  title: 'Eksponentialfunksjonar og grafar',
  description:
    'Utforsk korleis eksponentialfunksjonar ser ut grafisk, samanlikn med lineære funksjonar, og lær om asymptote og transformasjonar.',
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
      content: `## Eksponentialfunksjonar og grafar

I førre kapittel lærte du formelen $f(x) = a \\cdot b^x$ og korleis du kan setje opp eksponentialfunksjonar. Men korleis ser desse funksjonane eigentleg ut når vi teiknar dei?

I dette kapittelet skal du:
- Teikne grafar til eksponentialfunksjonar for hand og med digitale verktøy
- Samanlikne eksponentiell og lineær vekst grafisk
- Forstå kva ein horisontal asymptote er
- Undersøke korleis endringar i $a$ og $b$ påverkar grafen`,
    },

    // ========== BLOKK 1: Teikne eksponentialfunksjonar ==========
    {
      id: '10-9-2-text-teikne',
      type: 'text',
      content: `## Slik teiknar du grafen til ein eksponentialfunksjon

For å teikne grafen til $f(x) = a \\cdot b^x$ lagar vi ein verditabell og plottar punkta.

**Steg for steg:**
1. Vel nokre $x$-verdiar (til dømes $-2, -1, 0, 1, 2, 3, 4$)
2. Rekn ut $f(x)$ for kvar verdi
3. Plott punkta i eit koordinatsystem
4. Teikn ein glatt kurve gjennom punkta

**Viktige eigenskapar:**
- Grafen går alltid gjennom punktet $(0, a)$ fordi $f(0) = a \\cdot b^0 = a$
- Grafen kryssar aldri $x$-aksen (viss $a > 0$)
- For vekst ($b > 1$): grafen stig brattare og brattare mot høgre
- For nedgang ($0 < b < 1$): grafen fell og nærmar seg $x$-aksen mot høgre`,
    },
    {
      id: '10-9-2-example-verditabell',
      type: 'example',
      title: 'Eksempel: Teikne grafen til $f(x) = 3 \\cdot 2^x$',
      problem:
        'Lag ein verditabell for $f(x) = 3 \\cdot 2^x$ med $x$-verdiar frå $-2$ til $4$, og beskriv korleis grafen ser ut.',
      solution: `**Løysing:**

| $x$ | $2^x$ | $f(x) = 3 \\cdot 2^x$ |
|-----|--------|----------------------|
| $-2$ | $0{,}25$ | $0{,}75$ |
| $-1$ | $0{,}5$ | $1{,}5$ |
| $0$ | $1$ | $3$ |
| $1$ | $2$ | $6$ |
| $2$ | $4$ | $12$ |
| $3$ | $8$ | $24$ |
| $4$ | $16$ | $48$ |

**Observasjonar:**
- Grafen startar nær $x$-aksen for negative $x$-verdiar
- Ho går gjennom $(0, 3)$ (startverdien)
- Ho stig brattare og brattare for positive $x$-verdiar
- Kvar gong $x$ aukar med 1, blir $f(x)$ dobla (fordi $b = 2$)

**Svar:** Grafen er ein stigande kurve som veks raskare og raskare. Ho kjem aldri under $x$-aksen.`,
    },
    {
      id: '10-9-2-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-9-2-oppg-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Lag ein verditabell for $f(x) = 100 \\cdot 0{,}5^x$ med $x = 0, 1, 2, 3, 4, 5$. Teikn grafen.',
        subTasks: [
          {
            label: 'a',
            task: 'Fyll inn verditabellen.',
            solution:
              '$f(0) = 100$, $f(1) = 50$, $f(2) = 25$, $f(3) = 12{,}5$, $f(4) = 6{,}25$, $f(5) = 3{,}125$.',
          },
          {
            label: 'b',
            task: 'Beskriv med ord korleis grafen ser ut.',
            solution:
              'Grafen startar i $(0, 100)$ og fell raskt. Ho nærmar seg $x$-aksen, men når aldri heilt ned. Kurva flatar ut etter kvart.',
          },
          {
            label: 'c',
            task: 'Kva skjer med funksjonsverdien når $x$ aukar med 1?',
            solution:
              'Funksjonsverdien blir halvert kvar gong $x$ aukar med 1, fordi $b = 0{,}5$.',
          },
        ],
        solution:
          'Sjå deloppgåvene. Grafen syner eksponentiell nedgang med halveringa som hovudtrekk.',
        hints: [
          'Bruk at $0{,}5^x = (1/2)^x$. Kvar gong du aukar $x$ med 1, halverer du verdien.',
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
      content: `Ein **horisontal asymptote** er ei vasskrett linje som grafen nærmar seg, men aldri når.

For ein eksponentialfunksjon $f(x) = a \\cdot b^x$ (med $a > 0$):

- **$x$-aksen** ($y = 0$) er den horisontale asymptoten
- Når $b > 1$: grafen nærmar seg $x$-aksen mot venstre (for svært negative $x$)
- Når $0 < b < 1$: grafen nærmar seg $x$-aksen mot høgre (for store $x$)

Funksjonsverdien blir aldri lik 0, men han kan bli vilkårleg nær 0.

**Utviding:** Viss vi legg til ein konstant, $f(x) = a \\cdot b^x + c$, så er den horisontale asymptoten linja $y = c$.`,
    },
    {
      id: '10-9-2-example-asymptote',
      type: 'example',
      title: 'Eksempel: Asymptote og avkjøling',
      problem:
        'Ein kopp kaffi har temperaturen 90 °C. Romtemperaturen er 20 °C. Avkjølinga kan modellerast med $T(x) = 70 \\cdot 0{,}85^x + 20$, der $x$ er tid i minutt. Kva er den horisontale asymptoten, og kva betyr ho?',
      solution: `**Løysing:**

Vi ser at funksjonen har forma $a \\cdot b^x + c$ med $c = 20$.

Den horisontale asymptoten er $y = 20$.

**Tolking:** Kaffien kjem aldri under romtemperaturen (20 °C). Temperaturen nærmar seg 20 °C over tid, men når aldri heilt ned.

La oss sjekke nokre verdiar:
- $T(0) = 70 \\cdot 1 + 20 = 90$ °C (starttemperatur ✓)
- $T(5) = 70 \\cdot 0{,}85^5 + 20 \\approx 70 \\cdot 0{,}444 + 20 \\approx 51{,}1$ °C
- $T(10) = 70 \\cdot 0{,}85^{10} + 20 \\approx 70 \\cdot 0{,}197 + 20 \\approx 33{,}8$ °C
- $T(20) = 70 \\cdot 0{,}85^{20} + 20 \\approx 70 \\cdot 0{,}039 + 20 \\approx 22{,}7$ °C

Kaffien nærmar seg 20 °C, men kjem aldri heilt dit.`,
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
            task: 'Kva er den horisontale asymptoten for kvar funksjon?',
            solution:
              'Begge har $y = 0$ ($x$-aksen) som horisontal asymptote sidan ingen konstant er lagt til.',
          },
          {
            label: 'b',
            task: 'For kva $x$-verdiar nærmar grafen seg asymptoten?',
            solution:
              '$f(x) = 5 \\cdot 1{,}5^x$: nærmar seg $x$-aksen mot venstre (for store negative $x$). $g(x) = 80 \\cdot 0{,}7^x$: nærmar seg $x$-aksen mot høgre (for store positive $x$).',
          },
          {
            label: 'c',
            task: 'Kva er den horisontale asymptoten til $h(x) = 50 \\cdot 0{,}9^x + 15$?',
            solution:
              'Den horisontale asymptoten er $y = 15$, fordi $50 \\cdot 0{,}9^x \\to 0$ når $x \\to \\infty$.',
          },
        ],
        solution:
          'a) Begge har $y = 0$. b) $f$: mot venstre, $g$: mot høgre. c) $y = 15$.',
        hints: [
          'Ein eksponentialfunksjon $a \\cdot b^x$ nærmar seg 0 for store $|x|$ på ei av sidene.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== BLOKK 3: Samanlikning: eksponentiell vs. lineær ==========
    {
      id: '10-9-2-text-samanlikning',
      type: 'text',
      content: `## Eksponentiell vs. lineær vekst

Det er viktig å forstå forskjellen mellom lineær og eksponentiell vekst:

| Eigenskap | Lineær funksjon | Eksponentialfunksjon |
|-----------|----------------|---------------------|
| Formel | $f(x) = ax + b$ | $f(x) = a \\cdot b^x$ |
| Endring per periode | Konstant **beløp** | Konstant **prosent** |
| Graf | Rett linje | Kurve |
| Eksempel | 500 kr meir kvart år | 5 % meir kvart år |

**Viktig innsikt:** Over lang nok tid vil eksponentiell vekst alltid overgå lineær vekst, same kor bratt den lineære funksjonen er. Det er fordi den prosentvise auken til slutt gir ein større absolutt auke enn det faste tillegget.`,
    },
    {
      id: '10-9-2-example-samanlikning',
      type: 'example',
      title: 'Eksempel: Samanlikning av vekstmodellar',
      problem:
        'To kommunar i Nordland har kvar 5 000 innbyggjarar i dag. Kommune A veks med 80 personar per år (lineær vekst). Kommune B veks med 1,5 % per år (eksponentiell vekst). Samanlikn utviklinga dei neste 30 åra.',
      solution: `**Løysing:**

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

**Observasjonar:**
- I starten (dei første 5-6 åra) veks A raskare enn B
- Rundt år 7-8 kryssar grafane kvarandre
- Etter det veks B stadig raskare enn A
- Forskjellen aukar meir og meir over tid

**Svar:** Kommune B (eksponentiell vekst) har 428 fleire innbyggjarar enn A etter 30 år, og forskjellen vil berre auke.`,
    },
    {
      id: '10-9-2-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-9-2-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'To vener legg kvar 20 000 kr i banken. Anna vel ein konto med 800 kr i rente kvart år (enkel rente). Bjørn vel ein konto med 3,5 % rente med rentes rente.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv opp ein funksjon for kvar av dei to.',
            solution:
              'Anna: $f(x) = 20\\,000 + 800x$ (lineær). Bjørn: $g(x) = 20\\,000 \\cdot 1{,}035^x$ (eksponentiell).',
          },
          {
            label: 'b',
            task: 'Rekn ut kor mykje kvar har etter 5, 10 og 20 år.',
            solution:
              'Etter 5 år: Anna = 24 000 kr, Bjørn = 23 754 kr. Etter 10 år: Anna = 28 000 kr, Bjørn = 28 212 kr. Etter 20 år: Anna = 36 000 kr, Bjørn = 39 796 kr.',
          },
          {
            label: 'c',
            task: 'Etter omtrent kor mange år har Bjørn meir enn Anna?',
            solution:
              'Vi løyser $20\\,000 \\cdot 1{,}035^x = 20\\,000 + 800x$. Frå tabellen ser vi at det skjer mellom 5 og 10 år. Meir nøyaktig rundt $x \\approx 9$ år.',
          },
        ],
        solution:
          'a) $f(x) = 20\\,000 + 800x$, $g(x) = 20\\,000 \\cdot 1{,}035^x$. b) Sjå deloppgåvene. c) Omtrent 9 år.',
        hints: [
          'Annas rente er fast i kroner — lineær. Bjørns rente er prosentvis — eksponentiell.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== BLOKK 4: Transformasjonar og digitale verktøy ==========
    {
      id: '10-9-2-text-transformasjonar',
      type: 'text',
      content: `## Transformasjonar av eksponentialfunksjonar

Vi kan endre utsjånaden til grafen ved å justere parametrane:

**Endre $a$ (startverdien):**
- Større $a$ → grafen startar høgare opp
- Negativ $a$ → grafen blir spegla om $x$-aksen

**Endre $b$ (vekstfaktoren):**
- $b$ nær 1 → sakte endring (flat kurve)
- $b$ langt frå 1 → rask endring (bratt kurve)
- $b = 2$ → dobling per steg
- $b = 0{,}5$ → halvering per steg

**Leggje til ein konstant $c$: $f(x) = a \\cdot b^x + c$**
- Flyttar grafen opp eller ned
- Endrar asymptoten frå $y = 0$ til $y = c$

**Bruk digitale verktøy!**
GeoGebra og andre grafverktøy er utmerka for å utforske korleis endringar i $a$, $b$ og $c$ påverkar grafen. Du kan lage glidebrytar for parametrane og sjå korleis grafen endrar seg i sanntid.`,
    },
    {
      id: '10-9-2-geogebra-utforsk',
      type: 'geogebra',
      title: 'Utforsk eksponentialfunksjonar',
      description:
        'Bruk glidebrytar for $a$, $b$ og $c$ til å sjå korleis $f(x) = a \\cdot b^x + c$ endrar seg.',
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
        task: 'Bruk GeoGebra eller eit anna digitalt verktøy til å teikne grafane til desse funksjonane i same koordinatsystem.',
        subTasks: [
          {
            label: 'a',
            task: 'Teikn $f(x) = 2^x$, $g(x) = 3^x$ og $h(x) = 1{,}1^x$ i same koordinatsystem. Kva skjer når $b$ aukar?',
            solution:
              'Alle tre grafane går gjennom $(0, 1)$. Større $b$ gir brattare stiging. $h(x) = 1{,}1^x$ veks sakte, medan $g(x) = 3^x$ veks svært raskt.',
          },
          {
            label: 'b',
            task: 'Teikn $f(x) = 0{,}5^x$, $g(x) = 0{,}8^x$ og $h(x) = 0{,}95^x$. Kva skjer når $b$ nærmar seg 1?',
            solution:
              'Alle tre viser nedgang. $f(x) = 0{,}5^x$ fell raskt (halvering). $h(x) = 0{,}95^x$ fell svært sakte. Jo nærare $b$ er 1, jo flatare er kurva.',
          },
        ],
        solution:
          'a) Større $b$ gir brattare vekstkurve. b) $b$ nær 1 gir nesten flat kurve.',
        hints: [
          'Skriv inn funksjonane i GeoGebra og samanlikn grafane visuelt.',
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
        task: 'Under ser du fire grafar. Kvar av dei høyrer til ein av funksjonane under. Kople riktig graf til riktig funksjon.\n\nFunksjonar:\n1. $f(x) = 2 \\cdot 1{,}5^x$\n2. $g(x) = 10 \\cdot 0{,}6^x$\n3. $h(x) = 4 \\cdot 0{,}9^x + 3$\n4. $k(x) = 0{,}5 \\cdot 3^x$',
        hints: [
          'Sjå på startverdien $f(0)$ og om grafen viser vekst eller nedgang.',
          'Sjekk om det finst ein asymptote som ikkje er $y = 0$.',
        ],
        solution: `Strategi for å kople:
- $f(x) = 2 \\cdot 1{,}5^x$: Startar i $(0, 2)$, stigande kurve, asymptote $y = 0$
- $g(x) = 10 \\cdot 0{,}6^x$: Startar i $(0, 10)$, fallande kurve, asymptote $y = 0$
- $h(x) = 4 \\cdot 0{,}9^x + 3$: Startar i $(0, 7)$, sakte fallande, asymptote $y = 3$
- $k(x) = 0{,}5 \\cdot 3^x$: Startar i $(0, 0{,}5)$, raskt stigande kurve, asymptote $y = 0$

Nøkkelen er å sjå på $f(0)$ (startverdien), om grafen stig eller fell, kor bratt ho er, og om asymptoten er $y = 0$ eller noko anna.`,
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
        task: 'Ei gryte med vatn er 95 °C. Romtemperaturen er 22 °C. Avkjølinga kan modellerast med $T(x) = 73 \\cdot 0{,}92^x + 22$, der $x$ er tid i minutt.',
        subTasks: [
          {
            label: 'a',
            task: 'Kva er den horisontale asymptoten, og kva betyr ho reelt?',
            solution:
              'Den horisontale asymptoten er $y = 22$. Det betyr at vatnet aldri kjem under romtemperaturen (22 °C).',
          },
          {
            label: 'b',
            task: 'Lag ein verditabell og teikn grafen for $x = 0, 5, 10, 15, 20, 30$.',
            solution:
              '$T(0) = 95$ °C, $T(5) \\approx 70{,}2$ °C, $T(10) \\approx 53{,}8$ °C, $T(15) \\approx 42{,}7$ °C, $T(20) \\approx 35{,}0$ °C, $T(30) \\approx 27{,}3$ °C.',
          },
          {
            label: 'c',
            task: 'Etter kor mange minutt er vatnet under 30 °C?',
            solution:
              'Vi løyser $73 \\cdot 0{,}92^x + 22 < 30$, altså $73 \\cdot 0{,}92^x < 8$, $0{,}92^x < 0{,}1096$. Prøving: $0{,}92^{26} \\approx 0{,}117$, $0{,}92^{27} \\approx 0{,}108$. Svar: Etter ca. 27 minutt.',
          },
        ],
        solution:
          'a) $y = 22$ (romtemperatur). b) Sjå verditabellen. c) Etter ca. 27 minutt.',
        hints: [
          'Asymptoten kjem frå konstanten $+ 22$ i funksjonen.',
          'For c) kan du setje inn ulike $x$-verdiar til du finn svaret.',
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

- **Grafar til eksponentialfunksjonar** kan teiknast ved hjelp av verditabellar
- **Vekst** ($b > 1$) gir ein stigande kurve som vert brattare og brattare
- **Nedgang** ($0 < b < 1$) gir ein fallande kurve som flatar ut
- **Horisontal asymptote**: linja grafen nærmar seg men aldri når ($y = 0$ eller $y = c$)
- **Eksponentiell vs. lineær**: Eksponentiell vekst aukar prosentvis, lineær vekst aukar med fast beløp
- **Transformasjonar**: $a$ styrer startverdien, $b$ styrer kor bratt kurva er, $c$ flyttar asymptoten

### Nøkkelomgrep
| Omgrep | Forklaring |
|--------|------------|
| Horisontal asymptote | Linje grafen nærmar seg men aldri kryssar |
| Lineær vekst | Fast auke per periode (rett linje) |
| Eksponentiell vekst | Prosentvis auke per periode (kurve) |
| Verditabell | Tabell med $x$- og $f(x)$-verdiar for å teikne graf |
| Transformasjon | Endring av $a$, $b$ eller $c$ i funksjonsuttrykket |`,
    },

    // ========== SAMLEOPPGÅVER ==========
    {
      id: '10-9-2-exercise-7',
      type: 'exercise',
      exercise: {
        id: '10-9-2-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Grafen til ein eksponentialfunksjon $f(x) = a \\cdot b^x + c$ går gjennom punkta $(0, 12)$ og $(3, 5{,}375)$, og har horisontal asymptote $y = 2$.',
        subTasks: [
          {
            label: 'a',
            task: 'Bestem verdien av $c$.',
            solution:
              'Sidan den horisontale asymptoten er $y = 2$, er $c = 2$.',
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
            task: 'Skriv opp funksjonen og stadfest ved å rekne ut $f(3)$.',
            solution:
              '$f(x) = 10 \\cdot 0{,}75^x + 2$. Sjekk: $f(3) = 10 \\cdot 0{,}75^3 + 2 = 10 \\cdot 0{,}421875 + 2 = 4{,}21875 + 2 = 6{,}21875$. Hmm, la oss sjekke: $0{,}75^3 = 0{,}421875$. Men $f(3) = 5{,}375$, altså $10 \\cdot b^3 = 3{,}375$ og $b^3 = 0{,}3375$, $b = 0{,}696...$. Rettare: $b \\approx 0{,}696$, og funksjonen er $f(x) = 10 \\cdot 0{,}696^x + 2$.',
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
        task: 'Ein bruktbilforhandlar i Bergen har følgjande data for ein bestemt bilmodell:',
        subTasks: [
          {
            label: 'a',
            task: 'Nypris: 420 000 kr. Verdi etter 1 år: 340 000 kr. Verdi etter 3 år: 222 000 kr. Finn vekstfaktoren og skriv opp ein eksponentialfunksjon for verdifallet.',
            solution:
              '$b = 340\\,000 / 420\\,000 \\approx 0{,}810$. Sjekk: $420\\,000 \\cdot 0{,}810^3 \\approx 420\\,000 \\cdot 0{,}531 \\approx 223\\,200$ kr (nær 222 000 kr ✓). Funksjonen er $f(x) = 420\\,000 \\cdot 0{,}81^x$.',
          },
          {
            label: 'b',
            task: 'Kor mykje er bilen verd etter 7 år ifølgje modellen?',
            solution:
              '$f(7) = 420\\,000 \\cdot 0{,}81^7 \\approx 420\\,000 \\cdot 0{,}228 \\approx 95\\,760$ kr.',
          },
          {
            label: 'c',
            task: 'Teikn grafen for $x = 0$ til $x = 10$ og samanlikn med ein lineær modell som gir same verdi etter 1 år.',
            solution:
              'Lineær modell: $g(x) = 420\\,000 - 80\\,000x$ (nedgang på 80 000 kr/år). Etter 5 år: Lineær gir 20 000 kr, eksponentiell gir ca. 146 000 kr. Den lineære modellen gir null etter 5,25 år — urealistisk! Den eksponentielle modellen er meir realistisk fordi verdifallet avtar over tid.',
          },
          {
            label: 'd',
            task: 'Drøft kvifor ein eksponentiell modell er meir realistisk for bilverdi enn ein lineær modell.',
            solution:
              'Ein bil tapar mest verdi dei første åra (stor prosentvis nedgang av ein høg verdi). Etter kvart blir den årlege nedgangen mindre i kroner, sjølv om prosenten er den same. Ein lineær modell ville gi negativ verdi etter nokre år, noko som er urealistisk. Ein eksponentialmodell nærmar seg $y = 0$ men blir aldri negativ.',
          },
        ],
        solution:
          'a) $b \\approx 0{,}81$, $f(x) = 420\\,000 \\cdot 0{,}81^x$. b) Ca. 95 760 kr. c-d) Eksponentiell modell er meir realistisk fordi verdien aldri blir negativ.',
        hints: [
          'Bruk verdien etter 1 år til å finne $b$ direkte.',
          'Samanlikn grafane for å sjå kva modell som gir mest meining over tid.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Horisontal asymptote', definition: 'Ei linje som grafen nærmar seg, men aldri når eller kryssar' },
    { term: 'Verditabell', definition: 'Tabell som viser funksjonsverdiar for ulike $x$-verdiar' },
    { term: 'Lineær vekst', definition: 'Vekst med fast beløp per periode — rett linje' },
    { term: 'Eksponentiell vekst', definition: 'Vekst med fast prosent per periode — kurve' },
    { term: 'Transformasjon', definition: 'Endring av parametrane $a$, $b$ eller $c$ i funksjonsuttrykket' },
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
    'Lær å samle inn reelle data, velje mellom lineær og eksponentiell modell, tilpasse modellar, vurdere kor gyldige dei er, og presentere resultata.',
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

Matematisk modellering handlar om å bruke matematikk til å forstå verkelege situasjonar. Når du modellerer, omset du eit praktisk problem til eit matematisk uttrykk — ein modell — som du kan bruke til å gjere berekningar, sjå mønster og lage prognosar.

I dette kapittelet skal du lære:
- Korleis du samlar inn og organiserer reelle data
- Korleis du vel mellom lineær og eksponentiell modell
- Korleis du tilpassar ein modell til dataa
- Korleis du vurderer om modellen er gyldig
- Korleis du presenterer resultata dine

**Viktig:** Ingen modell er perfekt. Modellen er ei forenkling av verkelegheita. Det avgjerande er å forstå *kva* modellen kan fortelje oss, og *kva avgrensingar* han har.`,
    },

    // ========== BLOKK 1: Velje riktig modell ==========
    {
      id: '10-9-3-def-modell',
      type: 'definition',
      title: 'Matematisk modell',
      content: `Ein **matematisk modell** er ein formel eller funksjon som beskriv ein reell situasjon.

**Modelleringsprosessen:**
1. **Samle inn data** — Mål eller finn pålitelege tal
2. **Visualisere data** — Plott datapunkta i eit koordinatsystem
3. **Velje modell** — Vel lineær eller eksponentiell modell basert på mønsteret
4. **Tilpasse modellen** — Bestem parametrane ($a$, $b$, evt. $c$)
5. **Vurdere modellen** — Kor godt passar han til dataa? Kva avgrensingar har han?
6. **Bruke modellen** — Gjer berekningar, prognosar eller forklaringar
7. **Presentere** — Vis og forklar resultata tydeleg

**Korleis velje mellom lineær og eksponentiell?**
- Er endringa omtrent **lik i kroner/einingar** frå periode til periode? → **Lineær modell**
- Er endringa omtrent **lik i prosent** frå periode til periode? → **Eksponentiell modell**`,
    },
    {
      id: '10-9-3-example-velje-modell',
      type: 'example',
      title: 'Eksempel: Lineær eller eksponentiell?',
      problem: `Her er data for to ulike situasjonar. Avgjer om kvar situasjon passar best til ein lineær eller eksponentiell modell.

**Situasjon A — Antal abonnentar på ei nettavis:**
| Månad | 0 | 1 | 2 | 3 | 4 | 5 |
|-------|---|---|---|---|---|---|
| Abonnentar | 200 | 260 | 338 | 439 | 571 | 742 |

**Situasjon B — Vatnstand i ein dam (cm over normal):**
| Dag | 0 | 1 | 2 | 3 | 4 | 5 |
|-----|---|---|---|---|---|---|
| Vatnstand | 48 | 40 | 33 | 25 | 18 | 10 |`,
      solution: `**Løysing:**

**Situasjon A:**
La oss sjekke den prosentvise auken mellom kvar månad:
- Månad 0→1: $(260-200)/200 = 30$ %
- Månad 1→2: $(338-260)/260 = 30$ %
- Månad 2→3: $(439-338)/338 \\approx 30$ %
- Månad 3→4: $(571-439)/439 \\approx 30$ %

Auken er ca. 30 % kvar månad. → **Eksponentiell modell** med $b = 1{,}30$.

Modell: $f(x) = 200 \\cdot 1{,}30^x$

**Situasjon B:**
La oss sjekke den absolutte endringa:
- Dag 0→1: $40-48 = -8$ cm
- Dag 1→2: $33-40 = -7$ cm
- Dag 2→3: $25-33 = -8$ cm
- Dag 3→4: $18-25 = -7$ cm

Endringa er ca. $-7{,}5$ cm per dag. → **Lineær modell**.

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
        task: 'Avgjer om kvar situasjon best kan modellerast med ein lineær eller eksponentiell modell. Grunngi svaret.',
        subTasks: [
          {
            label: 'a',
            task: 'Ein sparekonto med 2,5 % årleg rente.',
            solution:
              'Eksponentiell modell, fordi auken er prosentvis (2,5 % av noverande saldo kvart år).',
          },
          {
            label: 'b',
            task: 'Ein taxi som kostar 50 kr i startpris pluss 15 kr per km.',
            solution:
              'Lineær modell, fordi prisen aukar med eit fast beløp (15 kr) per km.',
          },
          {
            label: 'c',
            task: 'Ein bakteriekultur som doblar seg kvar 3. time.',
            solution:
              'Eksponentiell modell, fordi dobling er ei konstant prosentvis endring (100 % auke per periode).',
          },
          {
            label: 'd',
            task: 'Ein svømmeklubb som får 12 nye medlemmar kvar månad.',
            solution:
              'Lineær modell, fordi auken er eit fast tal (12 personar) per månad.',
          },
        ],
        solution:
          'a) Eksponentiell b) Lineær c) Eksponentiell d) Lineær.',
        hints: [
          'Spør deg: Er auken/nedgangen eit fast tal eller ein fast prosent per periode?',
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
        task: 'Tabellen viser folketalet i ein norsk kommune dei siste åra:\n\n| År | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 |\n|----|------|------|------|------|------|------|\n| Folketal | 8 200 | 8 364 | 8 531 | 8 702 | 8 876 | 9 054 |',
        subTasks: [
          {
            label: 'a',
            task: 'Rekn ut den årlege endringa i tal på innbyggjarar og i prosent. Er mønsteret lineært eller eksponentielt?',
            solution:
              'Endring i tal: ca. 164, 167, 171, 174, 178 (aukar litt). Endring i prosent: ca. 2,0 %, 2,0 %, 2,0 %, 2,0 %, 2,0 %. Den prosentvise auken er konstant på ca. 2 %, altså eksponentiell modell.',
          },
          {
            label: 'b',
            task: 'Set opp ein eksponentiell modell $f(x) = a \\cdot b^x$ der $x = 0$ svarar til 2018.',
            solution:
              '$a = 8\\,200$ og $b \\approx 1{,}020$. Modell: $f(x) = 8\\,200 \\cdot 1{,}020^x$.',
          },
          {
            label: 'c',
            task: 'Bruk modellen til å estimere folketalet i 2028.',
            solution:
              '$x = 10$: $f(10) = 8\\,200 \\cdot 1{,}020^{10} \\approx 8\\,200 \\cdot 1{,}219 \\approx 9\\,996$. Ca. 10 000 innbyggjarar i 2028.',
          },
        ],
        solution:
          'a) Eksponentiell (ca. 2 % årleg auke). b) $f(x) = 8\\,200 \\cdot 1{,}020^x$. c) Ca. 10 000 i 2028.',
        hints: [
          'Rekn ut prosentvis endring: $(\\text{ny} - \\text{gammal}) / \\text{gammal} \\cdot 100$ %.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== BLOKK 2: Tilpasse modell til data ==========
    {
      id: '10-9-3-text-tilpasse',
      type: 'text',
      title: 'Tilpasse ein modell til dataa',
      content: `## Korleis tilpasse ein modell til datapunkta

Når du har bestemt at ein eksponentiell modell passar, må du finne dei rette verdiane av $a$ og $b$.

**Metode 1: Bruke to datapunkt (for hand)**
1. Vel to datapunkt, til dømes det første og det siste
2. Set inn i $f(x) = a \\cdot b^x$ og løys likningane
3. Sjekk at modellen passar rimeleg godt til dei andre punkta

**Metode 2: Bruke gjennomsnittleg prosentvis endring**
1. Rekn ut den prosentvise endringa mellom kvart påfølgjande par av datapunkt
2. Finn gjennomsnittet av desse prosentane
3. Bruk gjennomsnittet som grunnlag for $b$

**Metode 3: Bruke digitale verktøy (regresjon)**
GeoGebra og rekneark har innebygde funksjonar for å finne den beste eksponentielle modellen (regresjonsanalyse). Skriv inn datapunkta, vel «eksponentiell regresjon», og verktøyet finn $a$ og $b$ automatisk.

**Tips:** I GeoGebra kan du bruke kommandoen \`FitExp(liste)\` for eksponentiell regresjon.`,
    },
    {
      id: '10-9-3-example-tilpasse',
      type: 'example',
      title: 'Eksempel: Tilpasse modell til batteridata',
      problem:
        'Du måler batterinivået på ein mobiltelefon kvar time:\n\n| Tid (timar) | 0 | 1 | 2 | 3 | 4 | 5 | 6 |\n|------------|---|---|---|---|---|---|---|\n| Batteri (%) | 100 | 88 | 78 | 69 | 60 | 53 | 47 |\n\nFinn ein eksponentiell modell som beskriv batterinedgangen.',
      solution: `**Løysing:**

**Steg 1: Sjekk om eksponentiell modell passar**
Prosentvis endring per time:
- $88/100 = 0{,}88$
- $78/88 \\approx 0{,}886$
- $69/78 \\approx 0{,}885$
- $60/69 \\approx 0{,}870$
- $53/60 \\approx 0{,}883$
- $47/53 \\approx 0{,}887$

Forholdstalet (vekstfaktoren) er omtrent 0,88 kvar time. ✓ Eksponentiell modell passar.

**Steg 2: Bestem $a$ og $b$**
Startverdi: $a = 100$
Gjennomsnittleg vekstfaktor: $b \\approx (0{,}88 + 0{,}886 + 0{,}885 + 0{,}870 + 0{,}883 + 0{,}887) / 6 \\approx 0{,}882$

**Modell:** $f(x) = 100 \\cdot 0{,}882^x$

**Steg 3: Sjekk modellen**
- $f(3) = 100 \\cdot 0{,}882^3 \\approx 68{,}6$ (målt: 69 ✓)
- $f(6) = 100 \\cdot 0{,}882^6 \\approx 47{,}1$ (målt: 47 ✓)

**Svar:** $f(x) = 100 \\cdot 0{,}882^x$ er ein god modell for batterinedgangen. Batteriet fell med ca. 11,8 % per time.`,
    },
    {
      id: '10-9-3-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-9-3-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du lagar ein kopp te og måler temperaturen kvart 5. minutt:\n\n| Minutt | 0 | 5 | 10 | 15 | 20 | 25 | 30 |\n|--------|---|---|----|----|----|----|----|\n| Temperatur (°C) | 85 | 68 | 55 | 46 | 39 | 34 | 30 |\n\nRomtemperaturen er 21 °C.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar kvifor ein modell på forma $T(x) = a \\cdot b^x + 21$ er meir realistisk enn $T(x) = a \\cdot b^x$.',
            solution:
              'Teen kan ikkje bli kaldare enn romtemperaturen (21 °C). Modellen $a \\cdot b^x$ har asymptote $y = 0$, medan $a \\cdot b^x + 21$ har asymptote $y = 21$, som svarar til romtemperaturen.',
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
            task: 'Sjekk modellen mot dei andre datapunkta. Kor godt passar han?',
            solution:
              '$T(10) = 64 \\cdot 0{,}940^{10} + 21 \\approx 64 \\cdot 0{,}539 + 21 \\approx 55{,}5$ (målt: 55 ✓). $T(20) = 64 \\cdot 0{,}940^{20} + 21 \\approx 64 \\cdot 0{,}290 + 21 \\approx 39{,}6$ (målt: 39 ✓). Modellen passar godt!',
          },
        ],
        solution:
          'a) Asymptoten må vere romtemperaturen. b) $a = 64$. c) $b \\approx 0{,}940$. d) Modellen $T(x) = 64 \\cdot 0{,}94^x + 21$ passar godt.',
        hints: [
          'Trekk frå romtemperaturen (21 °C) frå kvar måling for å isolere den eksponentielle delen.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== BLOKK 3: Vurdere modellens gyldigheit ==========
    {
      id: '10-9-3-text-gyldigheit',
      type: 'text',
      title: 'Vurdere om modellen er gyldig',
      content: `## Er modellen god nok?

Ein modell er **aldri perfekt**. Han er ei forenkling av verkelegheita. Men vi kan vurdere kor god han er:

**Sjekkliste for å vurdere ein modell:**

1. **Passar modellen til dataa?**
   - Samanlikn modellverdiar med dei faktiske dataa
   - Små avvik er normalt, store avvik tyder på feil modellval

2. **Gir modellen meining for alle $x$-verdiar?**
   - Gir modellen meining for $x = 0$?
   - Kva skjer for svært store eller negative $x$-verdiar?
   - Er det realistisk at mønsteret held fram?

3. **Kva avgrensingar har modellen?**
   - Kan du stole på prognosar langt inn i framtida?
   - Er det faktorar som modellen ikkje tek omsyn til?

4. **Er det rette modelltypen?**
   - Har du prøvd både lineær og eksponentiell?
   - Passar dataa betre til ein annan type modell?

**Ekstrapolering vs. interpolering:**
- **Interpolering** = bruke modellen mellom datapunkta (vanlegvis trygt)
- **Ekstrapolering** = bruke modellen utanfor datapunkta (kan vere upåliteleg)`,
    },
    {
      id: '10-9-3-note-ekstrapolering',
      type: 'warning',
      title: 'Forsiktig med ekstrapolering!',
      content: `Når du brukar ein modell til å seie noko om framtida (ekstrapolering), bør du alltid spørje deg:

- Er det realistisk at mønsteret held fram?
- Kva kan endre seg?
- Kor langt fram er det trygt å estimere?

**Døme:** Ein modell som viser at antal brukarar av ein app veks eksponentielt, kan ikkje halde fram for alltid. Til slutt vil veksten avta (marknaden er metta, konkurrentar dukkar opp osv.). Ein eksponentiell modell er ofte god for korte tidsperiodar, men urealistisk for svært lang tid.`,
    },
    {
      id: '10-9-3-example-gyldigheit',
      type: 'example',
      title: 'Eksempel: Vurdere ein smittemodell',
      problem:
        'Under eit sjukdomsutbrot blei det registrert følgjande antal smitta per dag:\n\n| Dag | 1 | 2 | 3 | 4 | 5 | 6 | 7 |\n|-----|---|---|---|---|---|---|---|\n| Nye smitta | 10 | 15 | 22 | 34 | 50 | 74 | 112 |\n\nEin elev lagar modellen $f(x) = 6{,}7 \\cdot 1{,}49^x$. Vurder modellen.',
      solution: `**Løysing:**

**Steg 1: Sjekk tilpassinga**

| Dag | Faktisk | Modell | Avvik |
|-----|---------|--------|-------|
| 1 | 10 | $6{,}7 \\cdot 1{,}49^1 \\approx 10{,}0$ | 0 |
| 2 | 15 | $6{,}7 \\cdot 1{,}49^2 \\approx 14{,}9$ | $-0{,}1$ |
| 3 | 22 | $6{,}7 \\cdot 1{,}49^3 \\approx 22{,}2$ | $+0{,}2$ |
| 4 | 34 | $6{,}7 \\cdot 1{,}49^4 \\approx 33{,}0$ | $-1{,}0$ |
| 5 | 50 | $6{,}7 \\cdot 1{,}49^5 \\approx 49{,}2$ | $-0{,}8$ |
| 6 | 74 | $6{,}7 \\cdot 1{,}49^6 \\approx 73{,}3$ | $-0{,}7$ |
| 7 | 112 | $6{,}7 \\cdot 1{,}49^7 \\approx 109{,}2$ | $-2{,}8$ |

Avvika er relativt små — modellen passar godt til dataa. ✓

**Steg 2: Vurder realistiske avgrensingar**
- Modellen gir $f(14) \\approx 1\\,783$ og $f(21) \\approx 29\\,180$ smitta per dag
- Med eit avgrensa folketal (t.d. 30 000 i ein kommune) er dette urealistisk
- I røynda vil smitteveksten avta etterkvart (immunitet, tiltak, færre att å smitte)

**Konklusjon:** Modellen er god for dei første dagane av utbrotet, men pålitelegheita minkar jo lenger fram vi ser. For kortsiktige prognosar (1–3 dagar) er han nyttig. For lengre periodar treng vi ein meir avansert modell.`,
    },
    {
      id: '10-9-3-exercise-4',
      type: 'exercise',
      exercise: {
        id: '10-9-3-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Ein elev har laga to modellar for folketalet i ein bygd:\n\n- Lineær modell: $f(x) = 2\\,400 - 35x$ (der $x = 0$ er 2020)\n- Eksponentiell modell: $g(x) = 2\\,400 \\cdot 0{,}985^x$\n\nFaktiske data:\n| År | 2020 | 2021 | 2022 | 2023 | 2024 |\n|----|------|------|------|------|------|\n| Folketal | 2 400 | 2 362 | 2 328 | 2 291 | 2 254 |',
        subTasks: [
          {
            label: 'a',
            task: 'Rekn ut modellverdiane og avvika for begge modellane.',
            solution:
              'Lineær: f(1)=2365, f(2)=2330, f(3)=2295, f(4)=2260. Avvik: 3, 2, 4, 6. Eksponentiell: g(1)=2364, g(2)=2329, g(3)=2294, g(4)=2260. Avvik: 2, 1, 3, 6. Begge modellane passar godt, med svært like avvik.',
          },
          {
            label: 'b',
            task: 'Kva gir dei to modellane for 2030 ($x = 10$)?',
            solution:
              'Lineær: $f(10) = 2\\,400 - 350 = 2\\,050$. Eksponentiell: $g(10) = 2\\,400 \\cdot 0{,}985^{10} \\approx 2\\,400 \\cdot 0{,}860 \\approx 2\\,064$. Omtrent like.',
          },
          {
            label: 'c',
            task: 'Kva gir dei to modellane for 2060 ($x = 40$)? Kva modell er mest realistisk på lang sikt?',
            solution:
              'Lineær: $f(40) = 2\\,400 - 1\\,400 = 1\\,000$. $f(69) = 2\\,400 - 2\\,415 = -15$ (negativ — urealistisk!). Eksponentiell: $g(40) = 2\\,400 \\cdot 0{,}985^{40} \\approx 2\\,400 \\cdot 0{,}546 \\approx 1\\,310$. Den eksponentielle modellen gir aldri null eller negativt folketal, og er meir realistisk på lang sikt.',
          },
        ],
        solution:
          'a) Begge passar godt for dataa. b) Ca. 2 050/2 064. c) Lineær gir til slutt negativt folketal — urealistisk. Eksponentiell er best på lang sikt.',
        hints: [
          'Samanlikn avvika mellom modellverdiar og faktiske data.',
          'Tenk på kva som skjer med modellar over lang tid.',
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
      content: `## Slik presenterer du ei modelleringsoppgåve

Når du løyser ei modelleringsoppgåve, bør du vise tydeleg kva du gjer. Her er ein god struktur:

**1. Beskriv problemet**
- Kva vil du undersøke?
- Kvar kjem dataa frå?

**2. Vis dataa**
- Tabell med målingar
- Plott datapunkta i eit koordinatsystem

**3. Vel og grunngje modell**
- Lineær eller eksponentiell?
- Vis berekningane for den prosentvise/absolutte endringa

**4. Bestem modellen**
- Finn $a$ og $b$ (og evt. $c$)
- Skriv opp funksjonsuttrykket

**5. Vurder modellen**
- Samanlikn modellverdiar med faktiske data
- Drøft avgrensingar

**6. Bruk modellen**
- Gjer prognosar eller berekningar
- Svar på det opphavlege spørsmålet

**7. Konklusjon**
- Oppsummer funna dine
- Kommenter usikkerheit og avgrensingar`,
    },
    {
      id: '10-9-3-example-praktisk',
      type: 'example',
      title: 'Eksempel: Modellering av pris på brukt elbil',
      problem:
        'Nybilprisen på ein populær elbil i Noreg er 450 000 kr. Bruktbilprisar henta frå finn.no:\n\n| Alder (år) | 0 | 1 | 2 | 3 | 4 | 5 |\n|-----------|---|---|---|---|---|---|\n| Pris (kr) | 450 000 | 382 000 | 326 000 | 278 000 | 237 000 | 202 000 |\n\nFinn ein eksponentiell modell og vurder han.',
      solution: `**Løysing:**

**Steg 1: Sjekk om eksponentiell modell passar**
Berekna forholdstalet mellom kvart år:
- $382\\,000 / 450\\,000 = 0{,}849$
- $326\\,000 / 382\\,000 = 0{,}853$
- $278\\,000 / 326\\,000 = 0{,}853$
- $237\\,000 / 278\\,000 = 0{,}853$
- $202\\,000 / 237\\,000 = 0{,}852$

Forholdstalet er svært stabilt rundt $0{,}852$. ✓ Eksponentiell modell passar godt.

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

**Steg 5: Vurdere avgrensingar**
- Modellen gir aldri $0$ kr, noko som er urealistisk for svært gamle bilar (dei blir til slutt vraka)
- Elbilteknologi utviklar seg raskt, noko som kan påverke verdifallet
- Modellen er basert på gjennomsnittlege prisar; individuelle bilar kan avvike

**Svar:** Prisen fell med ca. 14,8 % per år. Modellen $f(x) = 450\\,000 \\cdot 0{,}852^x$ passar godt for dei første 5–8 åra, men bør brukast med varsemd for eldre bilar.`,
    },
    {
      id: '10-9-3-exercise-5',
      type: 'exercise',
      exercise: {
        id: '10-9-3-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tabellen viser korleis antal følgjarar på ein ny Instagram-konto veks:\n\n| Veke | 0 | 1 | 2 | 3 | 4 | 5 | 6 |\n|------|---|---|---|---|---|---|---|\n| Følgjarar | 50 | 68 | 92 | 125 | 170 | 231 | 314 |',
        subTasks: [
          {
            label: 'a',
            task: 'Vis at ein eksponentiell modell passar betre enn ein lineær modell.',
            solution:
              'Absolutt auke: 18, 24, 33, 45, 61, 83 (aukar — ikkje lineær). Prosentvis auke: 36 %, 35 %, 36 %, 36 %, 36 %, 36 % (nesten konstant). Eksponentiell modell passar best.',
          },
          {
            label: 'b',
            task: 'Finn den eksponentielle modellen.',
            solution:
              '$a = 50$ og $b \\approx 1{,}358$. Modell: $f(x) = 50 \\cdot 1{,}358^x$.',
          },
          {
            label: 'c',
            task: 'Kor mange følgjarar gir modellen etter 10 veker?',
            solution:
              '$f(10) = 50 \\cdot 1{,}358^{10} \\approx 50 \\cdot 22{,}47 \\approx 1\\,124$ følgjarar.',
          },
          {
            label: 'd',
            task: 'Diskuter: Er det realistisk at denne veksten held fram i 1 år (52 veker)?',
            solution:
              '$f(52) = 50 \\cdot 1{,}358^{52}$ — eit enormt tal. Det er ikkje realistisk, fordi veksten vil avta: marknaden for potensielle følgjarar er avgrensa, algoritmen endrar seg, og folk mistar interessa over tid. Modellen er berre god for dei første vekene.',
          },
        ],
        solution:
          'a) Prosentvis auke er konstant (~36 %). b) $f(x) = 50 \\cdot 1{,}358^x$. c) Ca. 1 124. d) Urealistisk over lang tid — veksten vil avta.',
        hints: [
          'Rekn ut både absolutt og prosentvis endring mellom kvar veke.',
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
        task: 'Du vil undersøke korleis ein kopp kaffi kjøler seg ned. Du måler temperaturen kvart 2. minutt:\n\n| Minutt | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 |\n|--------|---|---|---|---|---|----|----|----|\n| °C | 82 | 72 | 64 | 57 | 52 | 48 | 44 | 42 |\n\nRomtemperaturen er 20 °C.',
        subTasks: [
          {
            label: 'a',
            task: 'Trekk frå romtemperaturen frå kvar måling og set opp ein ny tabell for «overtemperaturen».',
            solution:
              'Overtemperatur: 62, 52, 44, 37, 32, 28, 24, 22.',
          },
          {
            label: 'b',
            task: 'Finn ein eksponentiell modell for overtemperaturen.',
            solution:
              'Forholdstalet: 52/62=0,839, 44/52=0,846, 37/44=0,841, 32/37=0,865, 28/32=0,875, 24/28=0,857, 22/24=0,917. Gjennomsnitt: ca. 0,863. Men dette er per 2 minutt. Modell for overtemperatur: $h(x) = 62 \\cdot 0{,}863^{x/2}$, eller $h(x) = 62 \\cdot 0{,}929^x$ (per minutt).',
          },
          {
            label: 'c',
            task: 'Skriv opp den fullstendige modellen $T(x) = a \\cdot b^x + 20$.',
            solution:
              '$T(x) = 62 \\cdot 0{,}929^x + 20$. Alternativt med $b$ per 2-minuttsperiode: $T(x) = 62 \\cdot 0{,}863^{x/2} + 20$.',
          },
          {
            label: 'd',
            task: 'Etter kor mange minutt er kaffien under 30 °C?',
            solution:
              '$62 \\cdot 0{,}929^x + 20 < 30$, altså $62 \\cdot 0{,}929^x < 10$, $0{,}929^x < 0{,}161$. Prøving: $0{,}929^{24} \\approx 0{,}166$, $0{,}929^{25} \\approx 0{,}155$. Svar: Etter ca. 25 minutt.',
          },
        ],
        solution:
          'a) 62, 52, 44, 37, 32, 28, 24, 22. b-c) $T(x) = 62 \\cdot 0{,}929^x + 20$. d) Ca. 25 minutt.',
        hints: [
          'Trekk frå romtemperaturen først for å fjerne effekten av asymptoten.',
          'Hugs å omrekne dersom du finn $b$ per 2-minuttsperiode.',
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

- **Matematisk modellering** er prosessen med å bruke matematikk til å forstå reelle situasjonar
- **Velje modell**: Sjekk om endringa er eit fast beløp (lineær) eller ein fast prosent (eksponentiell)
- **Tilpasse modell**: Bruk datapunkt, gjennomsnittleg endring, eller digitale verktøy (regresjon)
- **Vurdere modell**: Sjekk om modellen passar dataa, og drøft avgrensingar
- **Interpolering** (mellom datapunkt) er tryggare enn **ekstrapolering** (utanfor datapunkt)
- **Presentere**: Vis data, val av modell, utrekningar, vurdering og konklusjon

### Modelleringsprosessen
| Steg | Kva gjer du? |
|------|-------------|
| 1. Samle data | Mål eller finn pålitelege tal |
| 2. Visualisere | Plott datapunkta |
| 3. Velje modell | Lineær eller eksponentiell? |
| 4. Tilpasse | Bestem $a$, $b$, evt. $c$ |
| 5. Vurdere | Kor godt passar modellen? |
| 6. Bruke | Gjer prognosar eller berekningar |
| 7. Presentere | Vis og forklar resultata |`,
    },

    // ========== SAMLEOPPGÅVER ==========
    {
      id: '10-9-3-exercise-7',
      type: 'exercise',
      exercise: {
        id: '10-9-3-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tabellen viser korleis prisen på ein bestemt type solcellepanel har utvikla seg (pris per watt):\n\n| År | 2010 | 2012 | 2014 | 2016 | 2018 | 2020 | 2022 |\n|----|------|------|------|------|------|------|------|\n| Kr/W | 28 | 18 | 12 | 8,0 | 5,2 | 3,5 | 2,3 |\n\nLa $x = 0$ svare til 2010 og $x$ auke med 1 for kvart 2. år (altså $x = 1$ for 2012 osv.).',
        subTasks: [
          {
            label: 'a',
            task: 'Vis at ein eksponentiell modell er passande.',
            solution:
              'Forholdstalet: 18/28=0,643, 12/18=0,667, 8/12=0,667, 5,2/8=0,650, 3,5/5,2=0,673, 2,3/3,5=0,657. Gjennomsnittet er ca. 0,659. Det prosentvise fallet er omtrent likt (ca. 34 % per 2-årsperiode). Eksponentiell modell passar.',
          },
          {
            label: 'b',
            task: 'Finn modellen $f(x) = a \\cdot b^x$.',
            solution:
              '$a = 28$ og $b \\approx 0{,}66$. Modell: $f(x) = 28 \\cdot 0{,}66^x$ der $x$ er tal på 2-årsperiodar etter 2010.',
          },
          {
            label: 'c',
            task: 'Kva pris gir modellen i 2026 ($x = 8$)?',
            solution:
              '$f(8) = 28 \\cdot 0{,}66^8 \\approx 28 \\cdot 0{,}036 \\approx 1{,}0$ kr/W.',
          },
          {
            label: 'd',
            task: 'Drøft: Er det realistisk at prisen held fram med å falle i same takt? Kva faktorar kan endre utviklinga?',
            solution:
              'Det er lite realistisk at prisen held fram med 34 % fall per 2 år. Til slutt nærmar prisen seg produksjonskostnaden (materialkostnad, arbeid). Faktorar som kan endre utviklinga: råvarekostnadar, ny teknologi, auka etterspurnad, reguleringar, og at det finst ein minimumskostnad for materiala.',
          },
        ],
        solution:
          'a) Prosentvis fall er ca. 34 % per 2-årsperiode. b) $f(x) = 28 \\cdot 0{,}66^x$. c) Ca. 1,0 kr/W i 2026. d) Prisane kan ikkje falle for alltid — det finst ein nedre grense.',
        hints: [
          'Rekn ut forholdstalet $b$ mellom påfølgjande datapunkt.',
          'Tenk på kva som skjer når prisen nærmar seg produksjonskostnaden.',
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
        task: 'Prosjektoppgåve: Vel eitt av temaa under og gjennomfør ei fullstendig modelleringsoppgåve. Presenter resultata med tabell, graf, modell og vurdering.\n\nTema A: Straumbatteriet — Mål kor raskt batteriet på mobilen eller eit nettbrett tappar seg. Bruk ein app eller manuell måling kvar halvtime.\n\nTema B: Befolkningsvekst — Finn folketaldata for ein norsk kommune eller ein by frå SSB. Undersøk om utviklinga er lineær eller eksponentiell.\n\nTema C: Prisutvikling — Finn historiske prisar for ein vare (t.d. straum, bensin, mjølk) frå SSB og lag ein modell.\n\nTema D: Avkjøling — Mål korleis temperaturen i ein kopp vatn endrar seg over tid (bruk termometer).',
        hints: [
          'Bruk SSB (ssb.no) for å finne statistikk om befolkning, prisar og meir.',
          'Hugs å presentere alle stega: data, modellval, utrekningar, vurdering.',
          'Bruk GeoGebra eller rekneark for å lage grafar.',
        ],
        solution: `Denne oppgåva har ikkje éitt riktig svar, men du bør inkludere:

1. **Datasett**: Minst 6–8 datapunkt
2. **Tabell**: Tydeleg oppsett med eining
3. **Graf**: Datapunkta og modellfunksjonen i same koordinatsystem
4. **Modelval**: Grunngje lineær eller eksponentiell
5. **Utrekningar**: Vis korleis du finn $a$ og $b$
6. **Sjekk**: Samanlikn modellen med dataa
7. **Prognose**: Bruk modellen til minst éin prognose
8. **Vurdering**: Drøft kor gyldig modellen er, og kva avgrensingar han har

**Vurderingskriterium**: Du blir vurdert på systematikk, matematisk korrektheit, presentasjon og evna til å drøfte avgrensingar.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Matematisk modell', definition: 'Ein funksjon som beskriv ein reell situasjon' },
    { term: 'Modellering', definition: 'Prosessen med å lage og bruke matematiske modellar' },
    { term: 'Interpolering', definition: 'Bruke modellen mellom kjende datapunkt' },
    { term: 'Ekstrapolering', definition: 'Bruke modellen utanfor kjende datapunkt — meir usikkert' },
    { term: 'Regresjon', definition: 'Metode for å finne den best tilpassa modellen til eit datasett' },
    { term: 'Gyldigheit', definition: 'Kor godt modellen beskriv den reelle situasjonen' },
  ],
  prevChapter: '10-9-2',
};


// Eksporter alle kapitler i seksjon 9
export const MATEMATIKK_10_DEL9_CHAPTERS: TextbookChapter[] = [
  CHAPTER_10_9_1,
  CHAPTER_10_9_2,
  CHAPTER_10_9_3,
];
