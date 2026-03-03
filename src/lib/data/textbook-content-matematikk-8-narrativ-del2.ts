/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 8. klasse - Narrativ versjon Del 2
 *
 * Kapittel 2.1: Bokstavregning
 * Kapittel 2.2: Parenteser og regning
 * Kapittel 2.3: Likninger - introduksjon
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1 NARRATIV: Bokstavregning
// ============================================================================

export const CHAPTER_8_2_1_NARRATIV: TextbookChapter = {
  id: '8-2-1-narrativ',
  courseId: '8',
  chapterNumber: '2.1',
  title: 'Bokstavregning',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av bokstavregning -- fra formler du allerede kjenner til å lage og forenkle algebraiske uttrykk, med eksempler fra hverdagen.',
  estimatedMinutes: 30,
  competenceGoals: [
    'bruke variablar og formlar til å uttrykkje samanhengar i praktiske situasjonar',
  ],
  linkedChapterId: '8-2-1',
  content: [
    {
      id: '8-2-1-n-intro',
      type: 'text',
      content: `## Bokstaver som står for tall

Du har egentlig brukt algebra i årevis uten å tenke på det. Da du lærte formelen for arealet av et rektangel, skrev du kanskje:

$$A = l \\times b$$

Her er $A$, $l$ og $b$ bokstaver som **står for tall** -- lengden og bredden kan ha ulike verdier avhengig av rektangelet. Bokstavene kalles **variabler** fordi verdien kan variere.

Algebra handler om å bruke bokstaver i stedet for tall for å uttrykke generelle sammenhenger. I stedet for å si «et tall pluss det samme tallet er det dobbelte av tallet», skriver vi elegant:

$$x + x = 2x$$

Dette gjelder uansett hva $x$ er! Enten $x$ er $3$, $100$ eller $0{,}5$ -- summen av to like tall er alltid det dobbelte. Det er kraften i algebra: én formel dekker uendelig mange tilfeller.`,
    },

    {
      id: '8-2-1-n-section1',
      type: 'text',
      content: `## Algebraiske uttrykk -- spillereglene

I algebra har vi noen viktige regler for hvordan vi skriver:

**Gangetegnet forsvinner:** I stedet for $3 \\times x$ skriver vi bare $3x$. Og $a \\times b$ blir $ab$.
- $5 \\times y = 5y$
- $x \\times x = x^2$ (x i andre)
- $2 \\times a \\times b = 2ab$

**Tall foran bokstav:** Tallet foran variabelen kalles **koeffisienten**:
- I $7x$ er $7$ koeffisienten og $x$ variabelen
- I $-3y$ er $-3$ koeffisienten
- I $x$ (uten synlig tall) er koeffisienten $1$: $x = 1 \\cdot x$

**Ledd:** Delene av et uttrykk som er skilt med $+$ eller $-$ kalles **ledd**:
- I uttrykket $3x + 5y - 2$ har vi tre ledd: $3x$, $5y$ og $-2$
- $3x$ og $5y$ er **variabelledd** (de inneholder en variabel)
- $-2$ er et **konstantledd** (et fast tall uten variabel)

**Like ledd:** Ledd med **samme variabel opphøyd i samme potens** kalles like ledd:
- $3x$ og $7x$ er like ledd (begge har $x$)
- $2x^2$ og $5x^2$ er like ledd (begge har $x^2$)
- $3x$ og $3x^2$ er **ikke** like ledd (ulik potens)
- $4x$ og $4y$ er **ikke** like ledd (ulik variabel)`,
    },

    {
      id: '8-2-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-2-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på algebraiske uttrykk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-2-1-n-quiz1-q0',
            task: 'Hvordan skriver vi $4 \\times a \\times b$ i algebraisk form?',
            options: [
              { id: 'a', text: '$4 + ab$', isCorrect: false },
              { id: 'b', text: '$4ab$', isCorrect: true },
              { id: 'c', text: '$a4b$', isCorrect: false },
              { id: 'd', text: '$4(a + b)$', isCorrect: false },
            ],
            solution: 'I algebra dropper vi gangetegnet: $4 \\times a \\times b = 4ab$. Tallet skrives først.',
          },
          {
            id: '8-2-1-n-quiz1-q1',
            task: 'Hvilke av disse er like ledd?',
            options: [
              { id: 'a', text: '$3x$ og $3y$', isCorrect: false },
              { id: 'b', text: '$5x^2$ og $-2x^2$', isCorrect: true },
              { id: 'c', text: '$4x$ og $4x^2$', isCorrect: false },
              { id: 'd', text: '$7$ og $7x$', isCorrect: false },
            ],
            solution: '$5x^2$ og $-2x^2$ er like ledd fordi begge har variabelen $x$ opphøyd i $2$.',
          },
          {
            id: '8-2-1-n-quiz1-q2',
            task: 'Hva er koeffisienten i leddet $-9y$?',
            options: [
              { id: 'a', text: '$9$', isCorrect: false },
              { id: 'b', text: '$y$', isCorrect: false },
              { id: 'c', text: '$-9$', isCorrect: true },
              { id: 'd', text: '$-9y$', isCorrect: false },
            ],
            solution: 'Koeffisienten er tallet foran variabelen, inkludert fortegnet. I $-9y$ er koeffisienten $-9$.',
          },
        ],
      },
    },

    {
      id: '8-2-1-n-section2',
      type: 'text',
      content: `## Å forenkle uttrykk -- rydde i algebraen

Å forenkle et algebraisk uttrykk betyr å **slå sammen like ledd**. Tenk på det som å rydde: alle epler for seg, alle pærer for seg.

**Eksempel 1:** $3x + 5x = 8x$
Tre x-er pluss fem x-er gir åtte x-er. Enkelt!

**Eksempel 2:** $7a - 2a + 4a = 9a$
$(7 - 2 + 4) \\cdot a = 9a$

**Eksempel 3:** $5x + 3y + 2x - y$
Samle like ledd: $(5x + 2x) + (3y - y) = 7x + 2y$

Her kan vi ikke forenkle videre -- $7x$ og $2y$ er ulike ledd, like lite som du kan legge sammen $7$ epler og $2$ pærer og få $9$ eplerpærer!

**Eksempel 4:** $4x^2 + 3x - x^2 + 5x$
Samle like ledd: $(4x^2 - x^2) + (3x + 5x) = 3x^2 + 8x$

**Eksempel 5:** $2a + 3b - a + 4b - 5$
Samle like ledd: $(2a - a) + (3b + 4b) + (-5) = a + 7b - 5$

**Tips:** Stryk under like ledd med ulike farger for å holde oversikten!`,
    },

    {
      id: '8-2-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-2-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på forenkling:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-2-1-n-quiz2-q0',
            task: 'Forenkle $6x + 4 - 2x + 7$.',
            options: [
              { id: 'a', text: '$4x + 11$', isCorrect: true },
              { id: 'b', text: '$8x + 11$', isCorrect: false },
              { id: 'c', text: '$4x + 3$', isCorrect: false },
              { id: 'd', text: '$15x$', isCorrect: false },
            ],
            solution: 'Like ledd: $(6x - 2x) + (4 + 7) = 4x + 11$.',
          },
          {
            id: '8-2-1-n-quiz2-q1',
            task: 'Forenkle $3a + 5b - a - 2b$.',
            options: [
              { id: 'a', text: '$2a + 3b$', isCorrect: true },
              { id: 'b', text: '$4a + 7b$', isCorrect: false },
              { id: 'c', text: '$5ab$', isCorrect: false },
              { id: 'd', text: '$2a + 7b$', isCorrect: false },
            ],
            solution: '$(3a - a) + (5b - 2b) = 2a + 3b$. Vi kan ikke forenkle mer fordi $a$ og $b$ er ulike variabler.',
          },
          {
            id: '8-2-1-n-quiz2-q2',
            task: 'Forenkle $x^2 + 3x + 2x^2 - x$.',
            options: [
              { id: 'a', text: '$3x^2 + 2x$', isCorrect: true },
              { id: 'b', text: '$6x^3$', isCorrect: false },
              { id: 'c', text: '$3x^2 + 4x$', isCorrect: false },
              { id: 'd', text: '$5x^2$', isCorrect: false },
            ],
            solution: '$(x^2 + 2x^2) + (3x - x) = 3x^2 + 2x$. Husk: $x^2$ og $x$ er ulike ledd.',
          },
        ],
      },
    },

    {
      id: '8-2-1-n-section3',
      type: 'text',
      content: `## Å sette inn tall -- verdien av et uttrykk

Når vi kjenner verdien av variablene, kan vi **sette inn** (substituere) tallene og beregne:

**Eksempel 1:** Finn verdien av $3x + 7$ når $x = 4$.

$$3 \\cdot 4 + 7 = 12 + 7 = 19$$

**Eksempel 2:** Finn verdien av $2a^2 - 3a + 1$ når $a = 3$.

$$2 \\cdot 3^2 - 3 \\cdot 3 + 1 = 2 \\cdot 9 - 9 + 1 = 18 - 9 + 1 = 10$$

Husk regnerekkefølgen! Potenser kommer før ganging, som kommer før addisjon/subtraksjon.

**Eksempel 3:** Omkretsen av et rektangel er $O = 2l + 2b$. Finn omkretsen når $l = 8$ cm og $b = 5$ cm.

$$O = 2 \\cdot 8 + 2 \\cdot 5 = 16 + 10 = 26 \\text{ cm}$$

**Tips for innsetting med negative tall:** Bruk parentes rundt det negative tallet!
Finn $x^2 + 2x$ når $x = -3$:
$$(-3)^2 + 2 \\cdot (-3) = 9 + (-6) = 9 - 6 = 3$$

Uten parentesen kan du lett gjøre feil, spesielt med $x^2$ der $(-3)^2 = 9$, men $-3^2 = -9$.`,
    },

    {
      id: '8-2-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-2-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på innsetting:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-2-1-n-quiz3-q0',
            task: 'Hva er verdien av $5x - 3$ når $x = 4$?',
            options: [
              { id: 'a', text: '$2$', isCorrect: false },
              { id: 'b', text: '$17$', isCorrect: true },
              { id: 'c', text: '$23$', isCorrect: false },
              { id: 'd', text: '$8$', isCorrect: false },
            ],
            solution: '$5 \\cdot 4 - 3 = 20 - 3 = 17$.',
          },
          {
            id: '8-2-1-n-quiz3-q1',
            task: 'Hva er verdien av $a^2 + b$ når $a = -2$ og $b = 5$?',
            options: [
              { id: 'a', text: '$1$', isCorrect: false },
              { id: 'b', text: '$9$', isCorrect: true },
              { id: 'c', text: '$-9$', isCorrect: false },
              { id: 'd', text: '$-1$', isCorrect: false },
            ],
            solution: '$(-2)^2 + 5 = 4 + 5 = 9$. Husk: $(-2)^2 = 4$, ikke $-4$.',
          },
          {
            id: '8-2-1-n-quiz3-q2',
            task: 'En billett koster $(80 + 15n)$ kr, der $n$ er antall ekstra soner. Hva koster en billett med $3$ ekstra soner?',
            options: [
              { id: 'a', text: '$95$ kr', isCorrect: false },
              { id: 'b', text: '$125$ kr', isCorrect: true },
              { id: 'c', text: '$285$ kr', isCorrect: false },
              { id: 'd', text: '$240$ kr', isCorrect: false },
            ],
            solution: '$80 + 15 \\cdot 3 = 80 + 45 = 125$ kr.',
          },
        ],
      },
    },

    {
      id: '8-2-1-n-section4',
      type: 'text',
      content: `## Å lage egne uttrykk

En viktig ferdighet er å **oversette** hverdagssituasjoner til algebraiske uttrykk. Her er noen eksempler:

**Situasjon 1:** «Emma er $3$ år eldre enn Sara. Sara er $x$ år gammel.»
Emmas alder: $x + 3$

**Situasjon 2:** «En kinobillett koster $k$ kroner. Du kjøper $4$ billetter og popcorn til $65$ kr.»
Totalpris: $4k + 65$

**Situasjon 3:** «Et rektangel har lengde $x$ og bredde som er $3$ mindre enn lengden.»
Bredde: $x - 3$
Areal: $x(x - 3) = x^2 - 3x$
Omkrets: $2x + 2(x - 3) = 2x + 2x - 6 = 4x - 6$

**Situasjon 4:** «Du sparer $p$ kroner i måneden. Etter $m$ måneder har du spart:»
$p \\cdot m$ kroner (eller bare $pm$)

Legg merke til at algebra lar oss uttrykke sammenhenger uten å vite de eksakte tallene. Formelen $4k + 65$ fungerer uansett om kinobilletten koster $100$ kr, $130$ kr eller $150$ kr.`,
    },

    {
      id: '8-2-1-n-summary',
      type: 'text',
      content: `## Oppsummering

**Variabler** er bokstaver som representerer tall. De gjør at vi kan uttrykke generelle sammenhenger.

**Nøkkelbegreper:**
| Begrep | Forklaring | Eksempel |
|--------|-----------|----------|
| Variabel | Bokstav som representerer et tall | $x$, $y$, $a$ |
| Koeffisient | Tallet foran variabelen | $7$ i $7x$ |
| Ledd | Deler skilt med $+$ / $-$ | $3x$, $5y$, $-2$ i $3x + 5y - 2$ |
| Konstantledd | Ledd uten variabel | $-2$ i $3x - 2$ |
| Like ledd | Ledd med samme variabel i samme potens | $3x$ og $7x$ |

**Forenkling:** Slå sammen like ledd: $5x + 3y + 2x - y = 7x + 2y$

**Innsetting:** Bytt ut variabelen med tallet og regn ut: $3x + 7$ med $x = 4$ gir $3 \\cdot 4 + 7 = 19$

Husk parenteser rundt negative tall ved innsetting!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.2 NARRATIV: Parenteser og regning
// ============================================================================

export const CHAPTER_8_2_2_NARRATIV: TextbookChapter = {
  id: '8-2-2-narrativ',
  courseId: '8',
  chapterNumber: '2.2',
  title: 'Parenteser og regning',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av parenteser i algebra -- fra å multiplisere ut enkle parenteser til å håndtere minustegn foran parenteser, med mange steg-for-steg-eksempler.',
  estimatedMinutes: 30,
  competenceGoals: [
    'bruke variablar og formlar til å uttrykkje samanhengar i praktiske situasjonar',
  ],
  linkedChapterId: '8-2-2',
  content: [
    {
      id: '8-2-2-n-intro',
      type: 'text',
      content: `## Å pakke ut en parentes

Forestill deg at du kjøper $3$ identiske gavesett. Hvert sett inneholder en bok til $x$ kroner og en penn til $25$ kroner. Totalprisen blir:

$$3 \\times (x + 25) = 3x + 75$$

Det du nettopp gjorde kalles å **multiplisere ut** en parentes. Du ganget tallet utenfor ($3$) med **hvert ledd** inni parentesen ($x$ og $25$). Dette er den **distributive loven**:

$$a(b + c) = ab + ac$$

Denne regelen er grunnleggende i algebra. Den lar oss fjerne parenteser og omforme uttrykk. Og den fungerer begge veier -- å gå fra $3x + 75$ tilbake til $3(x + 25)$ kalles **faktorisering** (som vi skal se mer av senere).`,
    },

    {
      id: '8-2-2-n-section1',
      type: 'text',
      content: `## Å gange inn i parenteser

La oss se på flere eksempler på å multiplisere ut parenteser:

**Eksempel 1:** $5(x + 3)$
$$5 \\cdot x + 5 \\cdot 3 = 5x + 15$$

**Eksempel 2:** $4(2a - 7)$
$$4 \\cdot 2a + 4 \\cdot (-7) = 8a - 28$$

**Eksempel 3:** $-3(x + 4)$
$$(-3) \\cdot x + (-3) \\cdot 4 = -3x - 12$$

Pass spesielt på når det er et **negativt tall** foran parentesen! Minus ganger pluss gir minus, og minus ganger minus gir pluss.

**Eksempel 4:** $-2(3y - 5)$
$$(-2) \\cdot 3y + (-2) \\cdot (-5) = -6y + 10$$

**Eksempel 5:** $x(x + 4)$
$$x \\cdot x + x \\cdot 4 = x^2 + 4x$$

Her ganger vi variabelen $x$ inn i parentesen. Husk at $x \\cdot x = x^2$.

**Eksempel 6:** $3a(2a - b + 1)$
$$3a \\cdot 2a + 3a \\cdot (-b) + 3a \\cdot 1 = 6a^2 - 3ab + 3a$$

Regelen gjelder uansett hvor mange ledd det er i parentesen -- du ganger med **hvert eneste ledd**.`,
    },

    {
      id: '8-2-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-2-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på å multiplisere ut parenteser:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-2-2-n-quiz1-q0',
            task: 'Multipliser ut $6(x - 2)$.',
            options: [
              { id: 'a', text: '$6x - 2$', isCorrect: false },
              { id: 'b', text: '$6x - 12$', isCorrect: true },
              { id: 'c', text: '$6x + 12$', isCorrect: false },
              { id: 'd', text: '$x - 12$', isCorrect: false },
            ],
            solution: '$6(x - 2) = 6 \\cdot x + 6 \\cdot (-2) = 6x - 12$.',
          },
          {
            id: '8-2-2-n-quiz1-q1',
            task: 'Multipliser ut $-4(y + 3)$.',
            options: [
              { id: 'a', text: '$-4y + 3$', isCorrect: false },
              { id: 'b', text: '$-4y + 12$', isCorrect: false },
              { id: 'c', text: '$-4y - 12$', isCorrect: true },
              { id: 'd', text: '$4y - 12$', isCorrect: false },
            ],
            solution: '$-4(y + 3) = (-4) \\cdot y + (-4) \\cdot 3 = -4y - 12$. Minus ganger pluss gir minus.',
          },
          {
            id: '8-2-2-n-quiz1-q2',
            task: 'Multipliser ut $x(x - 5)$.',
            options: [
              { id: 'a', text: '$x^2 - 5$', isCorrect: false },
              { id: 'b', text: '$x^2 - 5x$', isCorrect: true },
              { id: 'c', text: '$2x - 5$', isCorrect: false },
              { id: 'd', text: '$x - 5x$', isCorrect: false },
            ],
            solution: '$x(x - 5) = x \\cdot x + x \\cdot (-5) = x^2 - 5x$.',
          },
        ],
      },
    },

    {
      id: '8-2-2-n-section2',
      type: 'text',
      content: `## Pluss og minus foran parenteser

Hva skjer når det står et **plusstegn** eller **minustegn** foran en parentes uten noe tall?

**Pluss foran parentes -- ingenting endres:**
$$+(3x - 5) = 3x - 5$$

Plusstegnet er «usynlig» -- parentesen kan bare fjernes.

**Minus foran parentes -- alle fortegn snur:**
$$-(3x - 5) = -3x + 5$$

Tenk på det som å gange med $-1$: $-1 \\cdot (3x - 5) = -3x + 5$.

Dette er en veldig vanlig feilkilde! La oss se det i sammenheng:

**Eksempel 1:** $7x + (2x - 3)$
$$= 7x + 2x - 3 = 9x - 3$$

**Eksempel 2:** $7x - (2x - 3)$
$$= 7x - 2x + 3 = 5x + 3$$

Se forskjellen? I det første eksempelet beholder vi fortegnene. I det andre snur vi fortegnene fordi det er minus foran parentesen: $-2x$ og $+3$.

**Eksempel 3:** $4a + 3b - (2a - b + 5)$
$$= 4a + 3b - 2a + b - 5 = 2a + 4b - 5$$

Alle tre leddene i parentesen skifter fortegn: $+2a \\to -2a$, $-b \\to +b$, $+5 \\to -5$.`,
    },

    {
      id: '8-2-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-2-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på pluss og minus foran parenteser:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-2-2-n-quiz2-q0',
            task: 'Forenkle $5x - (3x + 4)$.',
            options: [
              { id: 'a', text: '$2x + 4$', isCorrect: false },
              { id: 'b', text: '$2x - 4$', isCorrect: true },
              { id: 'c', text: '$8x + 4$', isCorrect: false },
              { id: 'd', text: '$8x - 4$', isCorrect: false },
            ],
            solution: 'Minus foran parentesen snur fortegnene: $5x - 3x - 4 = 2x - 4$.',
          },
          {
            id: '8-2-2-n-quiz2-q1',
            task: 'Forenkle $3a + 2b - (a - 4b)$.',
            options: [
              { id: 'a', text: '$2a - 2b$', isCorrect: false },
              { id: 'b', text: '$2a + 6b$', isCorrect: true },
              { id: 'c', text: '$4a + 6b$', isCorrect: false },
              { id: 'd', text: '$4a - 2b$', isCorrect: false },
            ],
            solution: '$3a + 2b - a + 4b = 2a + 6b$. Minustegnet snur: $-a$ og $+4b$.',
          },
          {
            id: '8-2-2-n-quiz2-q2',
            task: 'Forenkle $10 - (3x - 7)$.',
            options: [
              { id: 'a', text: '$3 - 3x$', isCorrect: false },
              { id: 'b', text: '$-3x + 17$', isCorrect: true },
              { id: 'c', text: '$-3x + 3$', isCorrect: false },
              { id: 'd', text: '$3x + 17$', isCorrect: false },
            ],
            solution: '$10 - 3x + 7 = -3x + 17$. Minus foran parentesen: $-(3x) = -3x$ og $-(-7) = +7$.',
          },
        ],
      },
    },

    {
      id: '8-2-2-n-section3',
      type: 'text',
      content: `## Sammensatte uttrykk med parenteser

Nå som du mestrer de grunnleggende ferdighetene, la oss sette dem sammen i mer sammensatte oppgaver:

**Eksempel 1:** $3(x + 2) + 2(x - 5)$

Steg 1 -- Multipliser ut begge parentesene:
$$3x + 6 + 2x - 10$$

Steg 2 -- Slå sammen like ledd:
$$5x - 4$$

**Eksempel 2:** $4(2a - 1) - 3(a + 2)$

Steg 1 -- Multipliser ut:
$$8a - 4 - 3a - 6$$

Steg 2 -- Slå sammen like ledd:
$$5a - 10$$

**Eksempel 3:** $2x(x + 3) - x(x - 1)$

Steg 1 -- Multipliser ut:
$$2x^2 + 6x - x^2 + x$$

Steg 2 -- Slå sammen like ledd:
$$x^2 + 7x$$

Oppskriften er alltid den samme:
1. **Multipliser ut** alle parenteser
2. **Slå sammen** like ledd

Sjekk alltid svaret ditt ved å sette inn et tall. Hvis $x = 1$: Originaluttrykk: $2 \\cdot 1 \\cdot (1+3) - 1 \\cdot (1-1) = 8 - 0 = 8$. Forenklet: $1 + 7 = 8$. Det stemmer!`,
    },

    {
      id: '8-2-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-2-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på sammensatte uttrykk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-2-2-n-quiz3-q0',
            task: 'Forenkle $2(x + 4) + 3(x - 1)$.',
            options: [
              { id: 'a', text: '$5x + 5$', isCorrect: true },
              { id: 'b', text: '$5x + 3$', isCorrect: false },
              { id: 'c', text: '$5x + 11$', isCorrect: false },
              { id: 'd', text: '$6x + 5$', isCorrect: false },
            ],
            solution: '$2x + 8 + 3x - 3 = 5x + 5$.',
          },
          {
            id: '8-2-2-n-quiz3-q1',
            task: 'Forenkle $5(a - 2) - 2(a + 3)$.',
            options: [
              { id: 'a', text: '$3a - 4$', isCorrect: false },
              { id: 'b', text: '$3a - 16$', isCorrect: true },
              { id: 'c', text: '$7a - 16$', isCorrect: false },
              { id: 'd', text: '$3a + 4$', isCorrect: false },
            ],
            solution: '$5a - 10 - 2a - 6 = 3a - 16$.',
          },
          {
            id: '8-2-2-n-quiz3-q2',
            task: 'Forenkle $x(x + 2) - x(x - 3)$.',
            options: [
              { id: 'a', text: '$5x$', isCorrect: true },
              { id: 'b', text: '$2x^2 - x$', isCorrect: false },
              { id: 'c', text: '$-x$', isCorrect: false },
              { id: 'd', text: '$5x^2$', isCorrect: false },
            ],
            solution: '$x^2 + 2x - x^2 + 3x = 5x$. $x^2$-leddene forsvinner!',
          },
        ],
      },
    },

    {
      id: '8-2-2-n-section4',
      type: 'text',
      content: `## Faktorisering -- å sette utenfor parentes

Faktorisering er det **motsatte** av å multiplisere ut. Vi leter etter en **felles faktor** i alle leddene og «trekker den ut» foran en parentes.

**Eksempel 1:** $6x + 9$
Felles faktor er $3$: $6x + 9 = 3(2x + 3)$

**Eksempel 2:** $4x^2 - 10x$
Felles faktor er $2x$: $4x^2 - 10x = 2x(2x - 5)$

**Eksempel 3:** $15ab + 20a$
Felles faktor er $5a$: $15ab + 20a = 5a(3b + 4)$

Slik gjør du det:
1. Finn det **største tallet** som deler alle koeffisientene
2. Finn den **høyeste potensen** av variablene som finnes i alle ledd
3. Del hvert ledd med den felles faktoren -- resultatet skrives i parentesen

Du kan alltid **sjekke** ved å multiplisere ut igjen: $3(2x + 3) = 6x + 9$. Stemmer det med originalen? Da er faktoriseringen riktig!`,
    },

    {
      id: '8-2-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '8-2-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på faktorisering:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-2-2-n-quiz4-q0',
            task: 'Faktoriser $12x + 8$.',
            options: [
              { id: 'a', text: '$2(6x + 4)$', isCorrect: false },
              { id: 'b', text: '$4(3x + 2)$', isCorrect: true },
              { id: 'c', text: '$12(x + 8)$', isCorrect: false },
              { id: 'd', text: '$8(4x + 1)$', isCorrect: false },
            ],
            solution: 'SFF er $4$: $12x + 8 = 4(3x + 2)$. Alternativ a) er ikke fullstendig faktorisert.',
          },
          {
            id: '8-2-2-n-quiz4-q1',
            task: 'Faktoriser $6x^2 + 3x$.',
            options: [
              { id: 'a', text: '$3(2x^2 + x)$', isCorrect: false },
              { id: 'b', text: '$3x(2x + 1)$', isCorrect: true },
              { id: 'c', text: '$x(6x + 3)$', isCorrect: false },
              { id: 'd', text: '$6x(x + 3)$', isCorrect: false },
            ],
            solution: 'SFF er $3x$: $6x^2 = 3x \\cdot 2x$ og $3x = 3x \\cdot 1$. Altså $3x(2x + 1)$.',
          },
        ],
      },
    },

    {
      id: '8-2-2-n-summary',
      type: 'text',
      content: `## Oppsummering

**Multiplisere ut parenteser (distributiv lov):**
$$a(b + c) = ab + ac$$

**Fortegn foran parentes:**
- $+(\\ldots)$: beholder alle fortegn
- $-(\\ldots)$: snur alle fortegn

**Sammensatte uttrykk:**
1. Multipliser ut alle parenteser
2. Slå sammen like ledd

**Faktorisering** (det motsatte):
- Finn felles faktor og sett den utenfor parentes
- Sjekk ved å multiplisere ut igjen

| Retning | Eksempel |
|---------|----------|
| Multiplisere ut | $3(x + 5) = 3x + 15$ |
| Faktorisere | $3x + 15 = 3(x + 5)$ |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.3 NARRATIV: Likninger - introduksjon
// ============================================================================

export const CHAPTER_8_2_3_NARRATIV: TextbookChapter = {
  id: '8-2-3-narrativ',
  courseId: '8',
  chapterNumber: '2.3',
  title: 'Likninger - introduksjon',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av likninger -- fra «gjett tallet» til systematisk løsning med vektskålprinsippet, der du lærer å finne det ukjente tallet steg for steg.',
  estimatedMinutes: 35,
  competenceGoals: [
    'løyse likningar og ulikskapar og forklare kva det vil seie at ein storleik er ukjend',
  ],
  linkedChapterId: '8-2-3',
  content: [
    {
      id: '8-2-3-n-intro',
      type: 'text',
      content: `## Hva er det ukjente tallet?

«Jeg tenker på et tall. Hvis jeg dobler det og legger til $3$, får jeg $15$. Hvilket tall tenker jeg på?»

Du har kanskje allerede funnet svaret: $6$. Men hvordan skriver vi dette matematisk? Med en **likning**:

$$2x + 3 = 15$$

En likning er et utsagn om at to ting er **like**. Likhetstegnet $=$ er som en vektskål i balanse -- det som er på venstre side veier like mye som det som er på høyre side.

Å **løse** en likning betyr å finne verdien av $x$ (det ukjente tallet) som gjør at likheten stemmer. I eksempelet over er $x = 6$, fordi $2 \\cdot 6 + 3 = 12 + 3 = 15$. Vi sier at $x = 6$ er **løsningen** av likningen.`,
    },

    {
      id: '8-2-3-n-section1',
      type: 'text',
      content: `## Vektskålprinsippet -- grunnregelen

Tenk deg en vektskål i perfekt balanse. Hva skjer hvis du legger til $5$ kg på venstre side? Den vipper! Men hvis du legger til $5$ kg på **begge** sider, er den fortsatt i balanse.

Dette er grunnprinsippet for å løse likninger:

**Du kan gjøre hva du vil med en likning, så lenge du gjør det samme på begge sider.**

- Legge til det samme tallet på begge sider
- Trekke fra det samme tallet på begge sider
- Gange begge sider med det samme tallet
- Dele begge sider med det samme tallet (bortsett fra $0$)

**Målet** er å få $x$ alene på den ene siden. La oss se hvordan:

**Eksempel:** Løs $x + 7 = 12$

Vi vil ha $x$ alene, så vi trekker fra $7$ på begge sider:
$$x + 7 - 7 = 12 - 7$$
$$x = 5$$

**Sjekk:** $5 + 7 = 12$ ✓

Lett! Vi «flyttet» $7$-tallet til den andre siden, og det skiftet fortegn fra $+7$ til $-7$.`,
    },

    {
      id: '8-2-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-2-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på enkle likninger:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-2-3-n-quiz1-q0',
            task: 'Løs $x + 9 = 14$.',
            options: [
              { id: 'a', text: '$x = 23$', isCorrect: false },
              { id: 'b', text: '$x = 5$', isCorrect: true },
              { id: 'c', text: '$x = -5$', isCorrect: false },
              { id: 'd', text: '$x = 4$', isCorrect: false },
            ],
            solution: 'Trekk fra $9$ på begge sider: $x = 14 - 9 = 5$. Sjekk: $5 + 9 = 14$ ✓.',
          },
          {
            id: '8-2-3-n-quiz1-q1',
            task: 'Løs $x - 4 = 11$.',
            options: [
              { id: 'a', text: '$x = 7$', isCorrect: false },
              { id: 'b', text: '$x = -7$', isCorrect: false },
              { id: 'c', text: '$x = 15$', isCorrect: true },
              { id: 'd', text: '$x = 44$', isCorrect: false },
            ],
            solution: 'Legg til $4$ på begge sider: $x = 11 + 4 = 15$. Sjekk: $15 - 4 = 11$ ✓.',
          },
          {
            id: '8-2-3-n-quiz1-q2',
            task: 'Løs $3x = 18$.',
            options: [
              { id: 'a', text: '$x = 15$', isCorrect: false },
              { id: 'b', text: '$x = 21$', isCorrect: false },
              { id: 'c', text: '$x = 54$', isCorrect: false },
              { id: 'd', text: '$x = 6$', isCorrect: true },
            ],
            solution: 'Del begge sider med $3$: $x = \\frac{18}{3} = 6$. Sjekk: $3 \\cdot 6 = 18$ ✓.',
          },
        ],
      },
    },

    {
      id: '8-2-3-n-section2',
      type: 'text',
      content: `## Likninger med flere steg

De fleste likninger krever mer enn ett steg. Oppskriften er:

1. **Flytt alle ledd med $x$** til den ene siden
2. **Flytt alle tall** (konstantledd) til den andre siden
3. **Del** med koeffisienten foran $x$

**Eksempel 1:** $2x + 3 = 15$

Steg 1: Trekk fra $3$ på begge sider: $2x = 15 - 3 = 12$
Steg 2: Del med $2$: $x = \\frac{12}{2} = 6$
Sjekk: $2 \\cdot 6 + 3 = 12 + 3 = 15$ ✓

**Eksempel 2:** $5x - 8 = 22$

Steg 1: Legg til $8$: $5x = 22 + 8 = 30$
Steg 2: Del med $5$: $x = \\frac{30}{5} = 6$
Sjekk: $5 \\cdot 6 - 8 = 30 - 8 = 22$ ✓

**Eksempel 3:** $4x + 7 = 2x + 15$

Her er det $x$ på **begge sider**. Vi samler dem:

Steg 1: Trekk fra $2x$ på begge sider: $4x - 2x + 7 = 15$, altså $2x + 7 = 15$
Steg 2: Trekk fra $7$: $2x = 8$
Steg 3: Del med $2$: $x = 4$
Sjekk: VS: $4 \\cdot 4 + 7 = 23$. HS: $2 \\cdot 4 + 15 = 23$ ✓`,
    },

    {
      id: '8-2-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-2-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på likninger med flere steg:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-2-3-n-quiz2-q0',
            task: 'Løs $3x + 5 = 26$.',
            options: [
              { id: 'a', text: '$x = 7$', isCorrect: true },
              { id: 'b', text: '$x = 10$', isCorrect: false },
              { id: 'c', text: '$x = 9$', isCorrect: false },
              { id: 'd', text: '$x = 21$', isCorrect: false },
            ],
            solution: '$3x = 26 - 5 = 21$. Deretter $x = \\frac{21}{3} = 7$. Sjekk: $3 \\cdot 7 + 5 = 26$ ✓.',
          },
          {
            id: '8-2-3-n-quiz2-q1',
            task: 'Løs $6x - 10 = 2x + 14$.',
            options: [
              { id: 'a', text: '$x = 1$', isCorrect: false },
              { id: 'b', text: '$x = 4$', isCorrect: false },
              { id: 'c', text: '$x = 6$', isCorrect: true },
              { id: 'd', text: '$x = 3$', isCorrect: false },
            ],
            solution: '$6x - 2x = 14 + 10 \\Rightarrow 4x = 24 \\Rightarrow x = 6$. Sjekk: $36 - 10 = 26$ og $12 + 14 = 26$ ✓.',
          },
          {
            id: '8-2-3-n-quiz2-q2',
            task: 'Løs $7x + 2 = 4x + 17$.',
            options: [
              { id: 'a', text: '$x = 3$', isCorrect: false },
              { id: 'b', text: '$x = 5$', isCorrect: true },
              { id: 'c', text: '$x = 15$', isCorrect: false },
              { id: 'd', text: '$x = 7$', isCorrect: false },
            ],
            solution: '$7x - 4x = 17 - 2 \\Rightarrow 3x = 15 \\Rightarrow x = 5$. Sjekk: $37 = 37$ ✓.',
          },
        ],
      },
    },

    {
      id: '8-2-3-n-section3',
      type: 'text',
      content: `## Likninger med parenteser

Noen likninger har parenteser. Da må vi **multiplisere ut** parentesene først, og deretter løse som vanlig.

**Eksempel 1:** $3(x + 4) = 21$

Steg 1 -- Multipliser ut: $3x + 12 = 21$
Steg 2 -- Trekk fra $12$: $3x = 9$
Steg 3 -- Del med $3$: $x = 3$
Sjekk: $3(3 + 4) = 3 \\cdot 7 = 21$ ✓

**Eksempel 2:** $2(x - 3) = x + 5$

Steg 1 -- Multipliser ut: $2x - 6 = x + 5$
Steg 2 -- Trekk fra $x$: $x - 6 = 5$
Steg 3 -- Legg til $6$: $x = 11$
Sjekk: VS: $2(11 - 3) = 2 \\cdot 8 = 16$. HS: $11 + 5 = 16$ ✓

**Eksempel 3:** $5(x + 1) - 2(x - 3) = 20$

Steg 1 -- Multipliser ut: $5x + 5 - 2x + 6 = 20$
Steg 2 -- Slå sammen like ledd: $3x + 11 = 20$
Steg 3 -- Trekk fra $11$: $3x = 9$
Steg 4 -- Del med $3$: $x = 3$
Sjekk: $5 \\cdot 4 - 2 \\cdot 0 = 20$ ✓

Husk: Vær spesielt nøye med **minustegn foran parenteser**! I eksempel 3 gir $-2(x-3)$ oss $-2x + 6$, ikke $-2x - 6$.`,
    },

    {
      id: '8-2-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-2-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på likninger med parenteser:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-2-3-n-quiz3-q0',
            task: 'Løs $4(x - 2) = 20$.',
            options: [
              { id: 'a', text: '$x = 3$', isCorrect: false },
              { id: 'b', text: '$x = 7$', isCorrect: true },
              { id: 'c', text: '$x = 5$', isCorrect: false },
              { id: 'd', text: '$x = 28$', isCorrect: false },
            ],
            solution: '$4x - 8 = 20 \\Rightarrow 4x = 28 \\Rightarrow x = 7$. Sjekk: $4(7-2) = 4 \\cdot 5 = 20$ ✓.',
          },
          {
            id: '8-2-3-n-quiz3-q1',
            task: 'Løs $3(x + 2) = 2(x + 7)$.',
            options: [
              { id: 'a', text: '$x = 8$', isCorrect: true },
              { id: 'b', text: '$x = 2$', isCorrect: false },
              { id: 'c', text: '$x = 4$', isCorrect: false },
              { id: 'd', text: '$x = 20$', isCorrect: false },
            ],
            solution: '$3x + 6 = 2x + 14 \\Rightarrow 3x - 2x = 14 - 6 \\Rightarrow x = 8$. Sjekk: $30 = 30$ ✓.',
          },
          {
            id: '8-2-3-n-quiz3-q2',
            task: 'Løs $2(3x - 1) - (x + 3) = 10$.',
            options: [
              { id: 'a', text: '$x = 1$', isCorrect: false },
              { id: 'b', text: '$x = 3$', isCorrect: true },
              { id: 'c', text: '$x = 2$', isCorrect: false },
              { id: 'd', text: '$x = 5$', isCorrect: false },
            ],
            solution: '$6x - 2 - x - 3 = 10 \\Rightarrow 5x - 5 = 10 \\Rightarrow 5x = 15 \\Rightarrow x = 3$. Sjekk: $2 \\cdot 8 - 6 = 10$ ✓.',
          },
        ],
      },
    },

    {
      id: '8-2-3-n-section4',
      type: 'text',
      content: `## Likninger i praksis -- tekstoppgaver

Algebra er spesielt nyttig for å løse praktiske problemer. Oppskriften for tekstoppgaver:

1. **Les** oppgaven nøye
2. **Definer** variabelen: «La $x$ være ...»
3. **Sett opp** likningen
4. **Løs** likningen
5. **Svar** med en setning og sjekk at svaret gir mening

**Eksempel 1:** Emma er $5$ år eldre enn Sara. Til sammen er de $27$ år. Hvor gamle er de?

La $x$ = Saras alder.
Da er Emmas alder $x + 5$.
Likning: $x + (x + 5) = 27$
$2x + 5 = 27$
$2x = 22$
$x = 11$

Sara er $11$ år og Emma er $16$ år. Sjekk: $11 + 16 = 27$ ✓

**Eksempel 2:** En rektangulær hage har omkrets $36$ meter. Lengden er dobbelt så stor som bredden. Finn lengden og bredden.

La $x$ = bredden.
Da er lengden $2x$.
Omkrets: $2 \\cdot 2x + 2 \\cdot x = 36$
$4x + 2x = 36$
$6x = 36$
$x = 6$

Bredden er $6$ m og lengden er $12$ m. Sjekk: $2 \\cdot 12 + 2 \\cdot 6 = 24 + 12 = 36$ m ✓`,
    },

    {
      id: '8-2-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '8-2-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på tekstoppgaver:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-2-3-n-quiz4-q0',
            task: 'Jonas har dobbelt så mange penger som Mia. Til sammen har de $450$ kr. Hvor mye har Mia?',
            options: [
              { id: 'a', text: '$225$ kr', isCorrect: false },
              { id: 'b', text: '$150$ kr', isCorrect: true },
              { id: 'c', text: '$300$ kr', isCorrect: false },
              { id: 'd', text: '$100$ kr', isCorrect: false },
            ],
            solution: 'La $x$ = Mias penger. Jonas: $2x$. $x + 2x = 450 \\Rightarrow 3x = 450 \\Rightarrow x = 150$. Mia har $150$ kr.',
          },
          {
            id: '8-2-3-n-quiz4-q1',
            task: 'Et tall pluss det tredobbelte av tallet er $44$. Hva er tallet?',
            options: [
              { id: 'a', text: '$22$', isCorrect: false },
              { id: 'b', text: '$11$', isCorrect: true },
              { id: 'c', text: '$14{,}67$', isCorrect: false },
              { id: 'd', text: '$44$', isCorrect: false },
            ],
            solution: '$x + 3x = 44 \\Rightarrow 4x = 44 \\Rightarrow x = 11$. Sjekk: $11 + 33 = 44$ ✓.',
          },
        ],
      },
    },

    {
      id: '8-2-3-n-summary',
      type: 'text',
      content: `## Oppsummering

**En likning** er et utsagn om at to uttrykk er like: $\\text{VS} = \\text{HS}$.

**Vektskålprinsippet:** Gjør det samme på begge sider for å holde balansen.

**Oppskrift for å løse likninger:**
1. Multipliser ut eventuelle parenteser
2. Slå sammen like ledd på hver side
3. Flytt $x$-ledd til den ene siden (fortegnet skifter!)
4. Flytt konstantledd til den andre siden
5. Del med koeffisienten foran $x$
6. **Sjekk** svaret ved å sette inn i den opprinnelige likningen

| Operasjon i likningen | Eksempel |
|-----------------------|----------|
| Flytte ledd | $x + 7 = 12 \\Rightarrow x = 12 - 7 = 5$ |
| Dele med koeffisient | $3x = 21 \\Rightarrow x = 7$ |
| Parenteser først | $2(x+3) = 14 \\Rightarrow 2x + 6 = 14$ |

**Tekstoppgaver:** Definer variabel, sett opp likning, løs, svar med setning og sjekk.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport
// ============================================================================

export const MATEMATIKK_8_NARRATIV_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_8_2_1_NARRATIV,
  CHAPTER_8_2_2_NARRATIV,
  CHAPTER_8_2_3_NARRATIV,
];
