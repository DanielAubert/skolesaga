/**
 * Matematikk 8. klasse - Del 7: Hoderegning og tallforståelse (KM208)
 *
 * Følger LK20 læreplan for matematikk ungdomstrinn.
 * Kapittel 6.1: Hoderegningsstrategier – addisjon og subtraksjon
 * Kapittel 6.2: Hoderegningsstrategier – multiplikasjon og divisjon
 * Kapittel 6.3: Overslagsregning og avrundingsstrategier
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 6.1: Hoderegningsstrategier – addisjon og subtraksjon
// LK20 KM208: Utvikle og bruke metodar for hovudrekning, overslagsrekning
//              og skriftleg rekning
// ============================================================================

export const CHAPTER_8_6_1: TextbookChapter = {
  id: '8-6-1',
  courseId: '8',
  chapterNumber: '6.1',
  title: 'Hoderegningsstrategier – addisjon og subtraksjon',
  description: 'Lær smarte strategier for å addere og subtrahere tall i hodet, blant annet å bruke vennlige tall, kompensasjonsmetoden og tallinja.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utvikle og bruke metodar for hovudrekning, overslagsrekning og skriftleg rekning',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '8-6-1-intro',
      type: 'text',
      content: `## Hoderegningsstrategier – addisjon og subtraksjon

Har du noen gang stått i butikken og lurt på om du har nok penger til det du vil kjøpe? Eller regnet ut hvor lang tid det er til bussen kommer? Da har du brukt hoderegning!

Hoderegning betyr at vi regner uten å bruke kalkulator, penn eller papir. Det handler ikke om å huske masse regler, men om å bruke **smarte strategier** som gjør tallene enklere å jobbe med.

Noen mennesker tror at hoderegning handler om å være «flink i matte», men egentlig handler det om å velge den **strategien** som passer best for oppgaven du skal løse. Når du kjenner flere strategier, kan du velge den som er raskest og enklest.

I dette kapittelet skal du lære å:
- Legge til og trekke fra 10-ere og 100-ere for å forenkle utregninger
- Bruke **vennlige tall** (runde opp eller ned til nærmeste tier)
- Bruke **kompensasjonsmetoden** for addisjon og subtraksjon
- Bruke **tallinja** som et hjelpemiddel i hodet`,
    },

    // ========== DEFINISJON: VENNLIGE TALL ==========
    {
      id: '8-6-1-def-1',
      type: 'definition',
      title: 'Vennlige tall',
      content: `**Vennlige tall** er tall som er lette å regne med i hodet. De vanligste vennlige tallene er **hele tiere** ($10, 20, 30, \\ldots$) og **hele hundre** ($100, 200, 300, \\ldots$).

Strategien går ut på å **runde et tall opp eller ned** til nærmeste vennlige tall, og deretter **justere** svaret.

**Addisjon med vennlige tall:**

$47 + 38$

Vi runder $38$ opp til $40$:

$$47 + 40 = 87$$

Men vi la til $2$ for mye, så vi trekker fra:

$$87 - 2 = 85$$

Altså: $47 + 38 = 85$

**Subtraksjon med vennlige tall:**

$83 - 27$

Vi runder $27$ opp til $30$:

$$83 - 30 = 53$$

Men vi trakk fra $3$ for mye, så vi legger til:

$$53 + 3 = 56$$

Altså: $83 - 27 = 56$`,
    },

    // ========== DEFINISJON: KOMPENSASJONSMETODEN ==========
    {
      id: '8-6-1-def-2',
      type: 'definition',
      title: 'Kompensasjonsmetoden',
      content: `**Kompensasjonsmetoden** bygger på ideen om at vi kan flytte tall mellom leddene i et regnestykke uten å endre svaret.

**For addisjon:** Vi kan flytte fra det ene tallet til det andre. Hvis vi legger til noe på det ene, trekker vi like mye fra det andre.

$$a + b = (a + k) + (b - k)$$

**Eksempel:** $68 + 45$

Vi flytter $2$ fra $45$ til $68$:

$$68 + 45 = 70 + 43 = 113$$

**For subtraksjon:** Vi kan legge til (eller trekke fra) det **samme** på begge tallene uten å endre differansen.

$$a - b = (a + k) - (b + k)$$

**Eksempel:** $72 - 38$

Vi legger til $2$ på begge tall:

$$72 - 38 = 74 - 40 = 34$$

Denne metoden er spesielt nyttig når vi kan gjøre ett av tallene til et «vennlig tall».`,
    },

    // ========== DEFINISJON: TALLINJA SOM HJELPEMIDDEL ==========
    {
      id: '8-6-1-def-3',
      type: 'definition',
      title: 'Tallinja som hjelpemiddel',
      content: `**Tallinja** er et nyttig verktøy for hoderegning. Vi kan «hoppe» langs tallinja for å addere eller subtrahere.

**Strategi for addisjon med tallinja:**

$56 + 37$

Vi starter på $56$ og hopper:

1. Først hopper vi $+30$ (til $86$)
2. Så hopper vi $+7$ (til $93$)

$$56 \\xrightarrow{+30} 86 \\xrightarrow{+7} 93$$

**Strategi for subtraksjon med tallinja:**

$91 - 45$

Vi starter på $91$ og hopper bakover:

1. Først hopper vi $-40$ (til $51$)
2. Så hopper vi $-5$ (til $46$)

$$91 \\xrightarrow{-40} 51 \\xrightarrow{-5} 46$$

**Tips:** Det er smart å dele opp hopp i **tiere** og **enere**. Da holder vi orden på tallene og gjør færre feil.

Vi kan også hoppe fra det ene tallet til det andre og telle avstanden. For eksempel, for $91 - 45$:

$$45 \\xrightarrow{+5} 50 \\xrightarrow{+40} 90 \\xrightarrow{+1} 91$$

Summen av hoppene: $5 + 40 + 1 = 46$`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '8-6-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Vennlige tall i addisjon',
      problem: 'Regn ut $276 + 198$ i hodet ved å bruke vennlige tall.',
      solution: `Vi ser at $198$ er nesten $200$. Vi runder opp:

$$276 + 200 = 476$$

Men vi la til $2$ for mye (fordi $200 - 198 = 2$), så vi trekker fra:

$$476 - 2 = 474$$

**Svar:** $276 + 198 = 474$

**Alternativ strategi:** Vi kan også runde $276$ opp til $280$:

$$280 + 198 = 478$$

Vi la til $4$ for mye:

$$478 - 4 = 474$

Begge strategiene gir samme svar, men den første var enklere fordi $198$ er veldig nær $200$.`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '8-6-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Kompensasjonsmetoden i subtraksjon',
      problem: 'Regn ut $145 - 67$ i hodet ved å bruke kompensasjonsmetoden.',
      solution: `Vi ønsker å gjøre $67$ om til et vennlig tall. Vi legger til $3$ på begge:

$$145 - 67 = 148 - 70$$

Nå er det lett å regne:

$$148 - 70 = 78$$

**Svar:** $145 - 67 = 78$

**Kontroll:** Vi kan sjekke svaret med addisjon: $67 + 78 = 67 + 80 - 2 = 147 - 2 = 145$ \\checkmark`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '8-6-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Dele opp med tallinja',
      problem: 'Sara har 325 kr. Hun kjøper noe som koster 178 kr. Hvor mye har hun igjen? Bruk tallinja-strategien.',
      solution: `Vi skal regne ut $325 - 178$.

Vi hopper bakover langs tallinja:

$$325 \\xrightarrow{-100} 225 \\xrightarrow{-70} 155 \\xrightarrow{-8} 147$$

**Svar:** Sara har **147 kr** igjen.

**Alternativ: Hoppe framover fra 178 til 325:**

$$178 \\xrightarrow{+2} 180 \\xrightarrow{+20} 200 \\xrightarrow{+100} 300 \\xrightarrow{+25} 325$$

Vi summerer hoppene: $2 + 20 + 100 + 25 = 147$ kr.

Denne metoden kalles også **tenke-addisjon** – i stedet for å subtrahere, tenker vi: «Hva må jeg legge til 178 for å komme til 325?»`,
    },

    // ========== OPPGAVER ==========

    {
      id: '8-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-6-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut i hodet. Bruk strategien med vennlige tall.',
        subTasks: [
          {
            label: 'a',
            task: '$47 + 38$',
            solution: '$47 + 40 - 2 = 87 - 2 = 85$',
            answer: 85,
          },
          {
            label: 'b',
            task: '$63 + 29$',
            solution: '$63 + 30 - 1 = 93 - 1 = 92$',
            answer: 92,
          },
          {
            label: 'c',
            task: '$156 + 97$',
            solution: '$156 + 100 - 3 = 256 - 3 = 253$',
            answer: 253,
          },
          {
            label: 'd',
            task: '$285 + 199$',
            solution: '$285 + 200 - 1 = 485 - 1 = 484$',
            answer: 484,
          },
        ],
        solution: 'a) $85$ b) $92$ c) $253$ d) $484$',
        hints: ['Rund det ene tallet opp til nærmeste tier eller hundrer, og juster svaret etterpå.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-6-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut i hodet. Bruk strategien med vennlige tall.',
        subTasks: [
          {
            label: 'a',
            task: '$82 - 39$',
            solution: '$82 - 40 + 1 = 42 + 1 = 43$',
            answer: 43,
          },
          {
            label: 'b',
            task: '$135 - 48$',
            solution: '$135 - 50 + 2 = 85 + 2 = 87$',
            answer: 87,
          },
          {
            label: 'c',
            task: '$500 - 197$',
            solution: '$500 - 200 + 3 = 300 + 3 = 303$',
            answer: 303,
          },
          {
            label: 'd',
            task: '$723 - 298$',
            solution: '$723 - 300 + 2 = 423 + 2 = 425$',
            answer: 425,
          },
        ],
        solution: 'a) $43$ b) $87$ c) $303$ d) $425$',
        hints: ['Rund tallet du trekker fra opp til nærmeste tier eller hundrer. Husk å legge tilbake det du trakk fra for mye!'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-6-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk kompensasjonsmetoden til å regne ut i hodet.',
        subTasks: [
          {
            label: 'a',
            task: '$67 + 45$',
            solution: 'Flytt $3$ fra $45$ til $67$: $70 + 42 = 112$',
            answer: 112,
          },
          {
            label: 'b',
            task: '$84 + 57$',
            solution: 'Flytt $6$ fra $84$ til $57$: $78 + 63 = ?$ Enklere: Flytt $3$ fra $57$ til $84$: $87 + 54 = ?$ Eller: $84 + 57 = 84 + 60 - 3 = 141$',
            answer: 141,
          },
          {
            label: 'c',
            task: '$93 - 56$',
            solution: 'Legg til $4$ på begge: $97 - 60 = 37$',
            answer: 37,
          },
          {
            label: 'd',
            task: '$152 - 87$',
            solution: 'Legg til $3$ på begge: $155 - 90 = 65$',
            answer: 65,
          },
        ],
        solution: 'a) $112$ b) $141$ c) $37$ d) $65$',
        hints: [
          'For addisjon: Flytt litt fra det ene tallet til det andre slik at ett av dem blir et vennlig tall.',
          'For subtraksjon: Legg til det samme på begge tallene slik at tallet du trekker fra blir et vennlig tall.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-6-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk tallinja-strategien (dele opp i tiere og enere) til å regne ut.',
        subTasks: [
          {
            label: 'a',
            task: '$64 + 78$',
            solution: '$64 \\xrightarrow{+70} 134 \\xrightarrow{+8} 142$. Svar: $142$',
            answer: 142,
          },
          {
            label: 'b',
            task: '$253 + 168$',
            solution: '$253 \\xrightarrow{+100} 353 \\xrightarrow{+60} 413 \\xrightarrow{+8} 421$. Svar: $421$',
            answer: 421,
          },
          {
            label: 'c',
            task: '$182 - 95$',
            solution: '$182 \\xrightarrow{-90} 92 \\xrightarrow{-5} 87$. Svar: $87$',
            answer: 87,
          },
          {
            label: 'd',
            task: '$401 - 236$',
            solution: '$401 \\xrightarrow{-200} 201 \\xrightarrow{-30} 171 \\xrightarrow{-6} 165$. Svar: $165$',
            answer: 165,
          },
        ],
        solution: 'a) $142$ b) $421$ c) $87$ d) $165$',
        hints: ['Del opp det ene tallet i hundrere, tiere og enere. Legg til eller trekk fra én del om gangen.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-6-1-ex-5',
      type: 'exercise',
      exercise: {
        id: '8-6-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg selv den strategien du synes passer best, og forklar hvordan du tenker.',
        subTasks: [
          {
            label: 'a',
            task: '$999 + 456$',
            solution: 'Vennlige tall: $1000 + 456 - 1 = 1455$. Vi runder $999$ opp til $1000$ og trekker fra $1$.',
            answer: 1455,
          },
          {
            label: 'b',
            task: '$1003 - 597$',
            solution: 'Kompensasjonsmetoden: Legg til $3$ på begge: $1006 - 600 = 406$.',
            answer: 406,
          },
          {
            label: 'c',
            task: '$347 + 265 + 53$',
            solution: 'Vennlige tall: $347 + 53 = 400$ (fordi $47 + 53 = 100$), deretter $400 + 265 = 665$.',
            answer: 665,
          },
          {
            label: 'd',
            task: 'Marius har 1250 kr. Han bruker 389 kr på en bok og 275 kr på mat. Hvor mye har han igjen?',
            solution: '$1250 - 389 - 275$. Først: $389 + 275 = 664$ (bruk $389 + 275 = 390 + 274 = 664$). Deretter: $1250 - 664 = 1250 - 650 - 14 = 600 - 14 = 586$ kr.',
            answer: 586,
          },
        ],
        solution: 'a) $1455$ b) $406$ c) $665$ d) $586$ kr',
        hints: [
          'Velg en strategi som gjør regnestykket enklere. Det finnes flere riktige måter!',
          'I oppgave c) kan du prøve å finne to tall som til sammen gir et vennlig tall.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '8-6-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Strategier for hoderegning med addisjon og subtraksjon

**Vennlige tall:**
- Rund opp eller ned til nærmeste tier/hundrer
- Juster svaret etterpå
- Eksempel: $47 + 38 = 47 + 40 - 2 = 85$

**Kompensasjonsmetoden:**
- Addisjon: Flytt fra det ene tallet til det andre: $(a + k) + (b - k) = a + b$
- Subtraksjon: Legg til det samme på begge: $(a + k) - (b + k) = a - b$
- Eksempel: $72 - 38 = 74 - 40 = 34$

**Tallinja:**
- Del opp i hundrere, tiere og enere
- Hopp langs tallinja steg for steg
- Eksempel: $56 + 37 = 56 + 30 + 7 = 93$

### Tips
- Velg den strategien som gjør oppgaven **enklest**
- Se etter tall som er nesten et vennlig tall (f.eks. $99, 198, 501$)
- Se etter tall som til sammen gir et vennlig tall (f.eks. $47 + 53 = 100$)`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.2: Hoderegningsstrategier – multiplikasjon og divisjon
// LK20 KM208: Utvikle og bruke metodar for hovudrekning, overslagsrekning
//              og skriftleg rekning
// ============================================================================

export const CHAPTER_8_6_2: TextbookChapter = {
  id: '8-6-2',
  courseId: '8',
  chapterNumber: '6.2',
  title: 'Hoderegningsstrategier – multiplikasjon og divisjon',
  description: 'Lær strategier for å gange og dele tall i hodet, som dobling og halvering, oppdeling av faktorer og bruk av gangetabellen.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utvikle og bruke metodar for hovudrekning, overslagsrekning og skriftleg rekning',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '8-6-2-intro',
      type: 'text',
      content: `## Hoderegningsstrategier – multiplikasjon og divisjon

Multiplikasjon og divisjon kan virke vanskeligere enn addisjon og subtraksjon når vi skal gjøre det i hodet. Men med de rette strategiene er det overraskende mye vi kan klare uten kalkulator!

**Gangetabellen** er grunnmuren for all hoderegning med multiplikasjon og divisjon. Når du kan gangetabellen godt, kan du bygge videre med smarte strategier for å takle større tall.

I dette kapittelet skal du lære å:
- Bruke **dobling og halvering** for å forenkle multiplikasjon
- **Bryte opp faktorer** for å gjøre gangestykker enklere
- Bruke **distributiv lov** (å dele opp et gangestykke)
- Dele opp divisjon i håndterbare steg
- Bruke disse strategiene i praktiske situasjoner med penger og tid`,
    },

    // ========== DEFINISJON: DOBLING OG HALVERING ==========
    {
      id: '8-6-2-def-1',
      type: 'definition',
      title: 'Dobling og halvering',
      content: `**Dobling og halvering** utnytter at hvis vi dobler den ene faktoren og halverer den andre, forblir produktet det samme:

$$a \\times b = (a \\times 2) \\times (b \\div 2)$$

Denne strategien er spesielt nyttig når en av faktorene er et partall.

**Eksempel:** $25 \\times 16$

Vi halverer $16$ og dobler $25$:

$$25 \\times 16 = 50 \\times 8 = 100 \\times 4 = 400$$

Vi kan gjenta prosessen så mange ganger vi vil!

**Eksempel:** $15 \\times 8$

$$15 \\times 8 = 30 \\times 4 = 60 \\times 2 = 120$$

**Når er dette nyttig?** Når en faktor er 2, 4, 8, 16, ... eller den andre er 5, 25, 50, 250, ...`,
    },

    // ========== DEFINISJON: BRYTE OPP FAKTORER ==========
    {
      id: '8-6-2-def-2',
      type: 'definition',
      title: 'Bryte opp faktorer (distributiv lov)',
      content: `Vi kan **bryte opp** en faktor i enklere deler og gange hver del for seg. Dette kalles **distributiv lov**:

$$a \\times (b + c) = a \\times b + a \\times c$$

**Eksempel:** $7 \\times 13$

Vi deler opp $13 = 10 + 3$:

$$7 \\times 13 = 7 \\times 10 + 7 \\times 3 = 70 + 21 = 91$$

**Eksempel:** $6 \\times 98$

Vi skriver $98 = 100 - 2$:

$$6 \\times 98 = 6 \\times 100 - 6 \\times 2 = 600 - 12 = 588$$

**Tips:** Vi kan også bryte opp i faktorer i stedet for å bruke addisjon:

$12 \\times 15 = 12 \\times 5 \\times 3 = 60 \\times 3 = 180$

eller

$12 \\times 15 = 4 \\times 3 \\times 15 = 4 \\times 45 = 180$`,
    },

    // ========== DEFINISJON: DIVISJONSSTRATEGIER ==========
    {
      id: '8-6-2-def-3',
      type: 'definition',
      title: 'Divisjonsstrategier i hodet',
      content: `For divisjon i hodet kan vi bruke flere strategier:

**1. Dele opp dividenden:**

$96 \\div 4$

Vi deler opp $96 = 80 + 16$:

$$96 \\div 4 = 80 \\div 4 + 16 \\div 4 = 20 + 4 = 24$$

**2. Halvering gjentatte ganger (når divisor er 2, 4, 8, ...):**

$168 \\div 4$

Vi halverer to ganger (fordi $4 = 2 \\times 2$):

$$168 \\div 2 = 84 \\qquad 84 \\div 2 = 42$$

Altså: $168 \\div 4 = 42$

**3. Bruke gangetabellen baklengs:**

$132 \\div 12$

Vi spør: «Hva ganger $12$ gir $132$?»

$12 \\times 10 = 120$, og $132 - 120 = 12$, altså $12 \\times 11 = 132$.

Svar: $132 \\div 12 = 11$

**4. Dele opp divisor i faktorer:**

$180 \\div 12 = 180 \\div 3 \\div 4 = 60 \\div 4 = 15$`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '8-6-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Dobling og halvering i praksis',
      problem: 'En klasse med 25 elever skal betale 36 kr hver for en felles gave. Hva blir totalsummen? Regn ut i hodet.',
      solution: `Vi skal regne ut $25 \\times 36$.

**Strategi: Dobling og halvering**

Vi dobler $25$ og halverer $36$:

$$25 \\times 36 = 50 \\times 18 = 100 \\times 9 = 900$$

**Svar:** Totalsummen blir **900 kr**.

**Kontroll med oppdeling:**

$25 \\times 36 = 25 \\times 4 \\times 9 = 100 \\times 9 = 900$ \\checkmark`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '8-6-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Bryte opp faktorer',
      problem: 'En butikk selger 8 pakker med klistremerker. Hver pakke koster 47 kr. Hva er totalprisen? Bruk distributiv lov.',
      solution: `Vi skal regne ut $8 \\times 47$.

**Strategi: Bryte opp $47$ i $50 - 3$:**

$$8 \\times 47 = 8 \\times 50 - 8 \\times 3 = 400 - 24 = 376$$

**Svar:** Totalprisen er **376 kr**.

**Alternativ oppdeling ($47 = 40 + 7$):**

$$8 \\times 47 = 8 \\times 40 + 8 \\times 7 = 320 + 56 = 376$$ \\checkmark`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '8-6-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Divisjon i en praktisk situasjon',
      problem: 'Fire venner deler på en regning på 372 kr. Hvor mye skal hver betale? Regn ut i hodet.',
      solution: `Vi skal regne ut $372 \\div 4$.

**Strategi 1: Dele opp dividenden**

$372 = 360 + 12$

$$372 \\div 4 = 360 \\div 4 + 12 \\div 4 = 90 + 3 = 93$$

**Strategi 2: Halvering gjentatte ganger**

$$372 \\div 2 = 186$$
$$186 \\div 2 = 93$$

**Svar:** Hver venn skal betale **93 kr**.

**Kontroll:** $93 \\times 4 = 93 \\times 2 \\times 2 = 186 \\times 2 = 372$ \\checkmark`,
    },

    // ========== OPPGAVER ==========

    {
      id: '8-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-6-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk dobling og halvering til å regne ut i hodet.',
        subTasks: [
          {
            label: 'a',
            task: '$5 \\times 18$',
            solution: '$10 \\times 9 = 90$',
            answer: 90,
          },
          {
            label: 'b',
            task: '$25 \\times 12$',
            solution: '$50 \\times 6 = 300$',
            answer: 300,
          },
          {
            label: 'c',
            task: '$15 \\times 16$',
            solution: '$30 \\times 8 = 240$',
            answer: 240,
          },
          {
            label: 'd',
            task: '$50 \\times 14$',
            solution: '$100 \\times 7 = 700$',
            answer: 700,
          },
        ],
        solution: 'a) $90$ b) $300$ c) $240$ d) $700$',
        hints: ['Doble den ene faktoren og halver den andre. Gjenta til du får tall som er lette å gange.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-6-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk distributiv lov til å bryte opp gangestykket og regn ut i hodet.',
        subTasks: [
          {
            label: 'a',
            task: '$6 \\times 23$',
            solution: '$6 \\times 20 + 6 \\times 3 = 120 + 18 = 138$',
            answer: 138,
          },
          {
            label: 'b',
            task: '$9 \\times 15$',
            solution: '$9 \\times 10 + 9 \\times 5 = 90 + 45 = 135$',
            answer: 135,
          },
          {
            label: 'c',
            task: '$7 \\times 99$',
            solution: '$7 \\times 100 - 7 \\times 1 = 700 - 7 = 693$',
            answer: 693,
          },
          {
            label: 'd',
            task: '$4 \\times 52$',
            solution: '$4 \\times 50 + 4 \\times 2 = 200 + 8 = 208$',
            answer: 208,
          },
        ],
        solution: 'a) $138$ b) $135$ c) $693$ d) $208$',
        hints: ['Del opp den ene faktoren i tiere og enere, eller i et vennlig tall pluss/minus noe.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-6-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut divisjonene i hodet. Velg en passende strategi.',
        subTasks: [
          {
            label: 'a',
            task: '$84 \\div 4$',
            solution: 'Halvere to ganger: $84 \\div 2 = 42$, $42 \\div 2 = 21$. Svar: $21$',
            answer: 21,
          },
          {
            label: 'b',
            task: '$175 \\div 5$',
            solution: 'Dele opp: $150 \\div 5 + 25 \\div 5 = 30 + 5 = 35$. Svar: $35$',
            answer: 35,
          },
          {
            label: 'c',
            task: '$108 \\div 6$',
            solution: 'Dele opp dividenden: $108 = 60 + 48$. $60 \\div 6 + 48 \\div 6 = 10 + 8 = 18$. Svar: $18$',
            answer: 18,
          },
          {
            label: 'd',
            task: '$256 \\div 8$',
            solution: 'Halvere tre ganger: $256 \\div 2 = 128$, $128 \\div 2 = 64$, $64 \\div 2 = 32$. Svar: $32$',
            answer: 32,
          },
        ],
        solution: 'a) $21$ b) $35$ c) $18$ d) $32$',
        hints: [
          'For divisjon med 4: Halver to ganger.',
          'For divisjon med 8: Halver tre ganger.',
          'For divisjon med 5 eller 6: Del opp dividenden i deler som er lette å dele.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-6-2-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-6-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk hoderegning til å løse disse praktiske oppgavene.',
        subTasks: [
          {
            label: 'a',
            task: 'En kinobillett koster 125 kr. Hva koster 8 billetter?',
            solution: '$125 \\times 8 = 250 \\times 4 = 500 \\times 2 = 1000$ kr',
            answer: 1000,
          },
          {
            label: 'b',
            task: 'Tre venner deler en pizza som koster 249 kr likt. Hvor mye betaler hver?',
            solution: '$249 \\div 3 = 240 \\div 3 + 9 \\div 3 = 80 + 3 = 83$ kr',
            answer: 83,
          },
          {
            label: 'c',
            task: 'En buss bruker 45 minutter på en tur. Hvor mange minutter bruker den på 6 turer?',
            solution: '$45 \\times 6 = 45 \\times 2 \\times 3 = 90 \\times 3 = 270$ minutter',
            answer: 270,
          },
          {
            label: 'd',
            task: 'Et hotellopphold koster totalt 3500 kr for 5 netter. Hva er prisen per natt?',
            solution: '$3500 \\div 5 = 3000 \\div 5 + 500 \\div 5 = 600 + 100 = 700$ kr',
            answer: 700,
          },
        ],
        solution: 'a) $1000$ kr b) $83$ kr c) $270$ minutter d) $700$ kr per natt',
        hints: ['Bruk den strategien som passer best. Noen ganger er dobling/halvering best, andre ganger er oppdeling lettere.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-6-2-ex-5',
      type: 'exercise',
      exercise: {
        id: '8-6-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg selv den beste strategien og regn ut i hodet. Forklar fremgangsmåten din.',
        subTasks: [
          {
            label: 'a',
            task: '$12 \\times 15$',
            solution: 'Bryte opp: $12 \\times 15 = 12 \\times 10 + 12 \\times 5 = 120 + 60 = 180$. Eller: $12 \\times 15 = 6 \\times 30 = 180$.',
            answer: 180,
          },
          {
            label: 'b',
            task: '$35 \\times 14$',
            solution: 'Dobling/halvering: $70 \\times 7 = 490$. Eller: $35 \\times 14 = 35 \\times 10 + 35 \\times 4 = 350 + 140 = 490$.',
            answer: 490,
          },
          {
            label: 'c',
            task: '$624 \\div 12$',
            solution: 'Dele divisor: $624 \\div 4 \\div 3 = 156 \\div 3 = 52$. Eller: $624 \\div 12$: $12 \\times 50 = 600$, $624 - 600 = 24$, $24 \\div 12 = 2$. Svar: $52$.',
            answer: 52,
          },
          {
            label: 'd',
            task: 'En skoletur koster 175 kr per elev. Det er 24 elever i klassen. Hva er totalprisen?',
            solution: '$175 \\times 24 = 175 \\times 4 \\times 6 = 700 \\times 6 = 4200$ kr. Eller: $175 \\times 24 = 175 \\times 25 - 175 = 4375 - 175 = 4200$ kr.',
            answer: 4200,
          },
        ],
        solution: 'a) $180$ b) $490$ c) $52$ d) $4200$ kr',
        hints: [
          'Tenk gjennom hvilken strategi som passer best for hvert regnestykke.',
          'For store gangestykker: Kan du dele opp i faktorer du kjenner igjen?',
          'For divisjon: Kan du dele divisor i mindre faktorer?',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '8-6-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Strategier for hoderegning med multiplikasjon

**Dobling og halvering:**
- Doble én faktor og halver den andre: $a \\times b = (2a) \\times (b/2)$
- Nyttig når én faktor er 5, 25, 50 eller et partall
- Eksempel: $25 \\times 16 = 50 \\times 8 = 100 \\times 4 = 400$

**Bryte opp faktorer (distributiv lov):**
- Del opp i tiere og enere: $7 \\times 13 = 7 \\times 10 + 7 \\times 3 = 91$
- Bruk nærliggende vennlige tall: $6 \\times 98 = 6 \\times 100 - 6 \\times 2 = 588$
- Del opp i kjente faktorer: $12 \\times 15 = 4 \\times 3 \\times 15 = 4 \\times 45 = 180$

### Strategier for hoderegning med divisjon

**Dele opp dividenden:**
- $96 \\div 4 = 80 \\div 4 + 16 \\div 4 = 24$

**Gjentatt halvering:**
- Deling med 4: Halver to ganger
- Deling med 8: Halver tre ganger

**Gangetabellen baklengs og oppdeling av divisor:**
- Spør: «Hva ganger divisor gir dividenden?»
- Del divisor i faktorer: $180 \\div 12 = 180 \\div 3 \\div 4 = 15$`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.3: Overslagsregning og avrundingsstrategier
// LK20 KM208: Utvikle og bruke metodar for hovudrekning, overslagsrekning
//              og skriftleg rekning
// ============================================================================

export const CHAPTER_8_6_3: TextbookChapter = {
  id: '8-6-3',
  courseId: '8',
  chapterNumber: '6.3',
  title: 'Overslagsregning og avrundingsstrategier',
  description: 'Lær å bruke overslag og avrunding for å raskt vurdere om et svar er rimelig, og når overslag er nyttig i hverdagen.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utvikle og bruke metodar for hovudrekning, overslagsrekning og skriftleg rekning',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '8-6-3-intro',
      type: 'text',
      content: `## Overslagsregning og avrundingsstrategier

Trenger du alltid det nøyaktige svaret? Nei, ikke alltid!

Tenk deg at du er i butikken og har lagt fire varer i handlekurven: 38 kr, 72 kr, 14 kr og 51 kr. Du har 200 kr. Trenger du å vite nøyaktig hva summen er, eller holder det å vite at du har nok penger?

**Overslagsregning** betyr å finne et tilnærmet svar – et svar som er «godt nok». Vi gjør dette ved å **avrunde** tallene til enklere tall og deretter regne med de avrundede tallene.

Overslagsregning er nyttig til:
- Sjekke om du har nok penger i butikken
- Kontrollere om et svar fra kalkulatoren er rimelig
- Raskt anslå tidsbruk, avstander eller mengder
- Planlegge og budsjettere

I dette kapittelet skal du lære:
- Reglene for avrunding
- Hvordan du gjør overslag med de fire regneartene
- Når overslag gir for høyt eller for lavt svar
- Praktiske situasjoner der overslag er nyttig`,
    },

    // ========== DEFINISJON: AVRUNDINGSREGLER ==========
    {
      id: '8-6-3-def-1',
      type: 'definition',
      title: 'Avrundingsregler',
      content: `**Avrunding** betyr å erstatte et tall med det nærmeste «vennlige» tallet. Reglene er:

**Til nærmeste tier:**
- Se på enersiffer
- $0, 1, 2, 3, 4$ → rund **ned**
- $5, 6, 7, 8, 9$ → rund **opp**

**Eksempler:**
- $43 \\approx 40$ (sifferet $3 < 5$, runder ned)
- $67 \\approx 70$ (sifferet $7 \\geq 5$, runder opp)
- $85 \\approx 90$ (sifferet $5 \\geq 5$, runder opp)

**Til nærmeste hundrer:**
- Se på tiersiffer
- $347 \\approx 300$ (sifferet $4 < 5$)
- $672 \\approx 700$ (sifferet $7 \\geq 5$)
- $850 \\approx 900$ (sifferet $5 \\geq 5$)

**Til nærmeste tusen:**
- Se på hundrersiffer
- $2\\,340 \\approx 2\\,000$ (sifferet $3 < 5$)
- $7\\,819 \\approx 8\\,000$ (sifferet $8 \\geq 5$)

Vi bruker symbolet $\\approx$ som betyr «er omtrent lik».`,
    },

    // ========== DEFINISJON: OVERSLAG MED AVRUNDING ==========
    {
      id: '8-6-3-def-2',
      type: 'definition',
      title: 'Overslag med avrunding',
      content: `Et **overslag** er et tilnærmet svar vi finner ved å avrunde tallene før vi regner.

**Fremgangsmåte:**
1. Avrund hvert tall til et vennlig tall
2. Regn med de avrundede tallene
3. Svaret er et **overslag** – ikke et nøyaktig svar

**Addisjon:**
$347 + 518 + 229$

Overslag: $350 + 520 + 230 = 1100$

(Nøyaktig svar: $1094$)

**Multiplikasjon:**
$38 \\times 52$

Overslag: $40 \\times 50 = 2000$

(Nøyaktig svar: $1976$)

**Subtraksjon:**
$843 - 378$

Overslag: $840 - 380 = 460$

(Nøyaktig svar: $465$)

**Divisjon:**
$391 \\div 8$

Overslag: $400 \\div 8 = 50$

(Nøyaktig svar: $48{,}875$)`,
    },

    // ========== DEFINISJON: OVERESTIMERING OG UNDERESTIMERING ==========
    {
      id: '8-6-3-def-3',
      type: 'definition',
      title: 'Overestimering og underestimering',
      content: `Når vi gjør et overslag, kan svaret bli **høyere** eller **lavere** enn det nøyaktige svaret. Det er nyttig å vite dette!

**Overestimering** (overslaget er for høyt):
- Skjer når vi runder **opp** i addisjon eller multiplikasjon
- Nyttig når vi vil være sikre på at vi har **nok** (f.eks. nok penger)

**Underestimering** (overslaget er for lavt):
- Skjer når vi runder **ned** i addisjon eller multiplikasjon
- Nyttig når vi vil vite **minimum** (f.eks. minst mulig tid)

**Eksempel – shopping:**
Du kjøper varer til $47, 33, 82$ og $21$ kr.

- **Overestimering** (rund opp): $50 + 40 + 90 + 30 = 210$ kr
  → «Jeg trenger **høyst** 210 kr»

- **Underestimering** (rund ned): $40 + 30 + 80 + 20 = 170$ kr
  → «Det koster **minst** 170 kr»

Det nøyaktige svaret ($183$ kr) ligger mellom disse.`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '8-6-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Overslag i butikken',
      problem: 'Lise er i butikken og har 500 kr. Hun legger følgende varer i handlekurven: brød (42 kr), melk (23 kr), ost (89 kr), pasta (18 kr), saus (37 kr) og frukt (56 kr). Har hun nok penger?',
      solution: `**Vi gjør et overslag ved å avrunde til nærmeste tier:**

| Vare   | Pris | Avrundet |
|--------|------|----------|
| Brød   | 42 kr | 40 kr   |
| Melk   | 23 kr | 20 kr   |
| Ost    | 89 kr | 90 kr   |
| Pasta  | 18 kr | 20 kr   |
| Saus   | 37 kr | 40 kr   |
| Frukt  | 56 kr | 60 kr   |

**Overslag:** $40 + 20 + 90 + 20 + 40 + 60 = 270$ kr

Overslaget er $270$ kr, som er godt under $500$ kr. Lise har nok penger.

**Nøyaktig sum:** $42 + 23 + 89 + 18 + 37 + 56 = 265$ kr

Overslaget ($270$ kr) var veldig nær det nøyaktige svaret ($265$ kr).`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '8-6-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Kontrollere et svar',
      problem: 'Ole bruker kalkulatoren og regner ut $47 \\times 63 = 5961$. Men han er usikker på om han tastet riktig. Bruk overslag for å sjekke om svaret er rimelig.',
      solution: `**Overslag:**

Vi avrunder: $47 \\approx 50$ og $63 \\approx 60$

$$50 \\times 60 = 3000$$

Men vent – Oles svar er $5961$, som er nesten dobbelt så mye som overslaget vårt! La oss sjekke en gang til.

Et mer nøyaktig overslag: $47 \\approx 47$ og $63 \\approx 63$.

$50 \\times 63 = 3150$

Oles svar på $5961$ virker altfor høyt. Kanskje han tastet feil?

**Nøyaktig:** $47 \\times 63 = 2961$

Ole tastet sannsynligvis $47 \\times 63 =$ og fikk et feil resultat. Det riktige svaret er $2961$, som stemmer godt med overslaget på $3000$.

**Lærdom:** Overslag er en god måte å avdekke tastefeil på kalkulatoren!`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '8-6-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Overslag med tid',
      problem: 'En familie skal kjøre fra Oslo til Trondheim. Avstanden er ca. 490 km, og de regner med å kjøre i gjennomsnitt 78 km/t. Omtrent hvor lang tid tar turen?',
      solution: `**Vi gjør et overslag:**

Avrunding: $490 \\approx 500$ km og $78 \\approx 80$ km/t

$$\\text{Tid} \\approx \\frac{500}{80} = \\frac{50}{8} = 6{,}25 \\text{ timer}$$

$6{,}25$ timer $= 6$ timer og $15$ minutter.

**Alternativt overslag:**

$490 \\approx 480$ og $78 \\approx 80$:

$$\\frac{480}{80} = 6 \\text{ timer}$$

**Svar:** Turen tar omtrent **6 til 6,5 timer** (pluss eventuelle pauser).

Nøyaktig: $490 \\div 78 \\approx 6{,}28$ timer $\\approx 6$ timer og $17$ minutter.

Begge overslagene ga en god tilnærming!`,
    },

    // ========== OPPGAVER ==========

    {
      id: '8-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-6-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Avrund tallene til nærmeste tier.',
        subTasks: [
          {
            label: 'a',
            task: '$34$',
            solution: '$34 \\approx 30$',
            answer: 30,
          },
          {
            label: 'b',
            task: '$87$',
            solution: '$87 \\approx 90$',
            answer: 90,
          },
          {
            label: 'c',
            task: '$145$',
            solution: '$145 \\approx 150$',
            answer: 150,
          },
          {
            label: 'd',
            task: '$552$',
            solution: '$552 \\approx 550$',
            answer: 550,
          },
          {
            label: 'e',
            task: '$1\\,275$',
            solution: '$1\\,275 \\approx 1\\,280$',
            answer: 1280,
          },
        ],
        solution: 'a) $30$ b) $90$ c) $150$ d) $550$ e) $1\\,280$',
        hints: ['Se på enersifferet. Er det 0–4, rund ned. Er det 5–9, rund opp.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-6-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-6-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Gjør et overslag ved å avrunde hvert tall til nærmeste tier, og regn ut.',
        subTasks: [
          {
            label: 'a',
            task: '$43 + 67$',
            solution: '$40 + 70 = 110$ (nøyaktig: $110$)',
            answer: 110,
          },
          {
            label: 'b',
            task: '$82 - 37$',
            solution: '$80 - 40 = 40$ (nøyaktig: $45$)',
            answer: 40,
          },
          {
            label: 'c',
            task: '$19 \\times 6$',
            solution: '$20 \\times 6 = 120$ (nøyaktig: $114$)',
            answer: 120,
          },
          {
            label: 'd',
            task: '$123 + 288 + 56$',
            solution: '$120 + 290 + 60 = 470$ (nøyaktig: $467$)',
            answer: 470,
          },
        ],
        solution: 'a) $\\approx 110$ b) $\\approx 40$ c) $\\approx 120$ d) $\\approx 470$',
        hints: ['Avrund hvert tall for seg til nærmeste tier, og regn deretter med de avrundede tallene.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-6-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-6-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk overslag til å avgjøre om hvert svar er rimelig. Skriv om det virker riktig eller feil.',
        subTasks: [
          {
            label: 'a',
            task: '$34 \\times 21 = 714$',
            solution: 'Overslag: $30 \\times 20 = 600$. Svaret $714$ er i nærheten og virker **rimelig**. (Nøyaktig: $714$ \\checkmark)',
          },
          {
            label: 'b',
            task: '$58 \\times 43 = 3494$',
            solution: 'Overslag: $60 \\times 40 = 2400$. Svaret $3494$ er altfor høyt og virker **feil**. (Nøyaktig: $2494$)',
          },
          {
            label: 'c',
            task: '$891 \\div 9 = 99$',
            solution: 'Overslag: $900 \\div 9 = 100$. Svaret $99$ er i nærheten og virker **rimelig**. (Nøyaktig: $99$ \\checkmark)',
          },
          {
            label: 'd',
            task: '$245 + 378 + 189 = 912$',
            solution: 'Overslag: $250 + 380 + 190 = 820$. Svaret $912$ er noe høyt, men la oss sjekke. Nøyaktig: $812$. Svaret virker **feil**.',
          },
        ],
        solution: 'a) Rimelig b) Feil (nøyaktig: $2494$) c) Rimelig d) Feil (nøyaktig: $812$)',
        hints: ['Gjør et raskt overslag og sammenlign med det oppgitte svaret. Er det i nærheten?'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-6-3-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-6-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør overslag for å svare på spørsmålene. Du trenger ikke finne nøyaktig svar.',
        subTasks: [
          {
            label: 'a',
            task: 'En klasse har 28 elever som skal betale 185 kr hver for en klassetur. Er 5000 kr nok til å dekke alle?',
            solution: 'Overslag: $30 \\times 200 = 6000$ kr. Nei, $5000$ kr er **ikke nok**. (Nøyaktig: $28 \\times 185 = 5180$ kr)',
          },
          {
            label: 'b',
            task: 'Du har 1000 kr og skal kjøpe 7 bøker som koster 129 kr hver. Har du nok?',
            solution: 'Overslag: $7 \\times 130 = 910$ kr. Ja, $1000$ kr er nok. (Nøyaktig: $7 \\times 129 = 903$ kr)',
          },
          {
            label: 'c',
            task: 'En løper springer 42 km maraton på 3 timer og 47 minutter. Omtrent hvor mange km springer hun per time?',
            solution: 'Overslag: $42 \\div 4 \\approx 10{,}5$ km/t. (Nøyaktig: $42 \\div 3{,}78 \\approx 11{,}1$ km/t)',
          },
        ],
        solution: 'a) Nei, trenger ca. 5200 kr. b) Ja, koster ca. 903 kr. c) Ca. 10–11 km/t.',
        hints: ['Avrund tallene til noe som er lett å regne med. Det viktigste er å finne ut «nok eller ikke nok», ikke den nøyaktige summen.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-6-3-ex-5',
      type: 'exercise',
      exercise: {
        id: '8-6-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'I disse oppgavene skal du bruke overestimering og underestimering.',
        subTasks: [
          {
            label: 'a',
            task: 'Du skal kjøpe bursdagsgaver til 5 venner. Gavene koster 87 kr, 124 kr, 63 kr, 99 kr og 146 kr. Finn et overestimat og et underestimat for totalprisen.',
            solution: 'Overestimat (rund opp): $90 + 130 + 70 + 100 + 150 = 540$ kr. Underestimat (rund ned): $80 + 120 + 60 + 90 + 140 = 490$ kr. Nøyaktig: $87 + 124 + 63 + 99 + 146 = 519$ kr (som ligger mellom 490 og 540).',
          },
          {
            label: 'b',
            task: 'Et rektangulært rom er $4{,}7$ m langt og $3{,}2$ m bredt. Finn et overestimat og et underestimat for arealet.',
            solution: 'Overestimat: $5 \\times 4 = 20$ m$^2$. Underestimat: $4 \\times 3 = 12$ m$^2$. Bedre overslag: $5 \\times 3 = 15$ m$^2$. Nøyaktig: $4{,}7 \\times 3{,}2 = 15{,}04$ m$^2$.',
          },
          {
            label: 'c',
            task: 'Forklar hvorfor det i noen situasjoner er smartere å overestimere enn å underestimere.',
            solution: 'Når vi handler og vil sjekke om vi har nok penger, er det smartere å overestimere. Da vet vi at den virkelige prisen er lavere enn overslaget, og vi kan være trygge på at pengene rekker. Hvis vi underestimerer, risikerer vi å stå ved kassen med for lite penger.',
          },
        ],
        solution: 'a) Mellom 490 kr og 540 kr (nøyaktig: 519 kr). b) Mellom 12 og 20 m$^2$ (nøyaktig: 15,04 m$^2$). c) Ved innkjøp er det smartere å overestimere for å sikre at man har nok penger.',
        hints: [
          'Overestimat: Rund alle tall opp. Underestimat: Rund alle tall ned.',
          'Tenk på situasjoner der det er viktig å ha «nok» versus å vite «minst».',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '8-6-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Avrundingsregler
- Se på sifferet **etter** den plassen du runder til
- $0, 1, 2, 3, 4$ → rund ned
- $5, 6, 7, 8, 9$ → rund opp
- Symbolet $\\approx$ betyr «er omtrent lik»

### Overslag
- Avrund tallene til vennlige tall
- Regn med de avrundede tallene
- Resultatet er et **tilnærmet** svar

### Overestimering og underestimering
- **Overestimering**: Rund opp → svaret er for høyt → nyttig for å sjekke om man har nok
- **Underestimering**: Rund ned → svaret er for lavt → nyttig for å finne minimumsverdi
- Det nøyaktige svaret ligger mellom over- og underestimatet

### Når er overslag nyttig?
- Sjekke om du har nok penger i butikken
- Kontrollere kalkulatorsvar
- Anslå tid, avstand og mengder
- Planlegge og budsjettere
- Alle situasjoner der det nøyaktige svaret ikke er nødvendig`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler i del 7
// ============================================================================

export const MATEMATIKK_8_DEL7_CHAPTERS = [
  CHAPTER_8_6_1,
  CHAPTER_8_6_2,
  CHAPTER_8_6_3,
];
