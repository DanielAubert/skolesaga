/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 9. klasse - Narrativ versjon Del 2
 *
 * Kapittel 2.1: Faktorisering
 * Kapittel 2.2: Kvadratsetningene
 * Kapittel 2.3: Likninger med brøk
 * Kapittel 2.4: Ulikheter
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1 NARRATIV: Faktorisering
// ============================================================================

export const CHAPTER_9_2_1_NARRATIV: TextbookChapter = {
  id: '9-2-1-narrativ',
  courseId: '9',
  chapterNumber: '2.1',
  title: 'Faktorisering',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av faktorisering -- kunsten å bryte ned algebraiske uttrykk i faktorer, fra å finne felles faktor til å faktorisere trinomer, med konkrete eksempler og analogier.',
  estimatedMinutes: 35,
  competenceGoals: [
    'handtere algebraiske uttrykk, bruke faktorisering og forkorting av brøkuttrykk',
  ],
  linkedChapterId: '9-2-1',
  content: [
    {
      id: '9-2-1-n-intro',
      type: 'text',
      content: `## Å pakke ut og pakke inn

I algebra lærer vi tidlig å **multiplisere ut** parenteser: $3(x + 2) = 3x + 6$. Men hva om vi vil gå **den andre veien**? Hva om vi starter med $3x + 6$ og vil finne ut at det egentlig er $3(x + 2)$?

Denne «omvendte» operasjonen kalles **faktorisering**. Å faktorisere betyr å skrive et uttrykk som et **produkt av faktorer**. Det er som å pakke inn en gave: i stedet for å se alle delene spredt utover, pakker vi dem pent sammen i en «pakke» (en parentes) multiplisert med noe.

Faktorisering er et av de viktigste verktøyene i algebra. Det hjelper oss å:
- Forenkle brøkuttrykk
- Løse likninger
- Finne nullpunkter til funksjoner
- Se strukturen i matematiske uttrykk`,
    },

    {
      id: '9-2-1-n-section1',
      type: 'text',
      content: `## Felles faktor -- det første steget

Den enkleste formen for faktorisering er å **trekke ut en felles faktor**. Hvis alle leddene i et uttrykk har noe til felles, kan vi «løfte det ut» foran en parentes.

**Eksempel 1:** $6x + 9$

Begge leddene er delelige med $3$:
$$6x + 9 = 3 \\cdot 2x + 3 \\cdot 3 = 3(2x + 3)$$

**Eksempel 2:** $4x^2 + 10x$

Her er den felles faktoren $2x$ (både $4x^2$ og $10x$ er delelige med $2x$):
$$4x^2 + 10x = 2x \\cdot 2x + 2x \\cdot 5 = 2x(2x + 5)$$

**Eksempel 3:** $12a^3b - 8a^2b^2 + 4ab$

Den største felles faktoren er $4ab$:
$$12a^3b - 8a^2b^2 + 4ab = 4ab(3a^2 - 2ab + 1)$$

Fremgangsmåten er:
1. Finn den **største felles faktoren (SFF)** for alle koeffisientene (tallene foran)
2. Finn den **laveste potensen** av hver variabel som forekommer i alle ledd
3. Del hvert ledd på den felles faktoren -- resultatet havner inni parentesen

**Tips:** Du kan alltid sjekke svaret ved å multiplisere ut igjen! Hvis $2x(2x + 5) = 4x^2 + 10x$, vet du at faktoriseringen er riktig.`,
    },

    {
      id: '9-2-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-2-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på felles faktor:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-2-1-n-quiz1-q0',
            task: 'Faktoriser $15x + 25$.',
            options: [
              { id: 'a', text: '$5(3x + 5)$', isCorrect: true },
              { id: 'b', text: '$3(5x + 25)$', isCorrect: false },
              { id: 'c', text: '$15(x + 25)$', isCorrect: false },
              { id: 'd', text: '$5(3x + 25)$', isCorrect: false },
            ],
            solution: 'SFF av $15$ og $25$ er $5$. $15x \\div 5 = 3x$ og $25 \\div 5 = 5$. Altså $5(3x + 5)$.',
          },
          {
            id: '9-2-1-n-quiz1-q1',
            task: 'Faktoriser $6x^3 - 9x^2$.',
            options: [
              { id: 'a', text: '$3x(2x^2 - 3x)$', isCorrect: false },
              { id: 'b', text: '$3x^2(2x - 3)$', isCorrect: true },
              { id: 'c', text: '$x^2(6x - 9)$', isCorrect: false },
              { id: 'd', text: '$9x^2(\\frac{2}{3}x - 1)$', isCorrect: false },
            ],
            solution: 'SFF er $3x^2$: $6x^3 = 3x^2 \\cdot 2x$ og $9x^2 = 3x^2 \\cdot 3$. Altså $3x^2(2x - 3)$. Alternativ a) er ikke fullt faktorisert.',
          },
          {
            id: '9-2-1-n-quiz1-q2',
            task: 'Faktoriser $8ab + 12a^2$.',
            options: [
              { id: 'a', text: '$4a(2b + 3a)$', isCorrect: true },
              { id: 'b', text: '$2a(4b + 6a)$', isCorrect: false },
              { id: 'c', text: '$4(2ab + 3a^2)$', isCorrect: false },
              { id: 'd', text: '$8a(b + \\frac{3}{2}a)$', isCorrect: false },
            ],
            solution: 'SFF er $4a$: $8ab = 4a \\cdot 2b$ og $12a^2 = 4a \\cdot 3a$. Altså $4a(2b + 3a)$.',
          },
        ],
      },
    },

    {
      id: '9-2-1-n-section2',
      type: 'text',
      content: `## Faktorisering av $x^2 + bx + c$

Nå tar vi et steg videre. Kan vi faktorisere uttrykk som $x^2 + 5x + 6$? Ja! Vi leter etter to tall som:
- **multiplisert** gir $c$ (konstantleddet)
- **addert** gir $b$ (koeffisienten foran $x$)

For $x^2 + 5x + 6$: Vi trenger to tall med produkt $6$ og sum $5$. Svaret er $2$ og $3$:

$$x^2 + 5x + 6 = (x + 2)(x + 3)$$

**Sjekk:** $(x + 2)(x + 3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6$ ✓

La oss se på noen flere eksempler:

**$x^2 - 7x + 12$:** Produkt $= 12$, sum $= -7$. Tallene er $-3$ og $-4$:
$$x^2 - 7x + 12 = (x - 3)(x - 4)$$

**$x^2 + 2x - 15$:** Produkt $= -15$, sum $= 2$. Tallene er $5$ og $-3$:
$$x^2 + 2x - 15 = (x + 5)(x - 3)$$

**$x^2 - 9$:** Dette er et spesialtilfelle! Vi kan skrive det som $x^2 + 0x - 9$. Produkt $= -9$, sum $= 0$. Tallene er $3$ og $-3$:
$$x^2 - 9 = (x + 3)(x - 3)$$

Dette er et eksempel på **konjugatsetningen**: $a^2 - b^2 = (a + b)(a - b)$. Denne er så nyttig at den er verdt å huske som en egen formel!

Her er en systematisk fremgangsmåte:
1. List opp alle faktorpar av $|c|$
2. Bestem fortegnene ut fra $b$ og $c$:
   - $c > 0$ og $b > 0$: begge tall er positive
   - $c > 0$ og $b < 0$: begge tall er negative
   - $c < 0$: ett tall er positivt, ett er negativt
3. Finn paret som gir riktig sum`,
    },

    {
      id: '9-2-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-2-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på faktorisering av andregraduttrykk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-2-1-n-quiz2-q0',
            task: 'Faktoriser $x^2 + 7x + 10$.',
            options: [
              { id: 'a', text: '$(x + 1)(x + 10)$', isCorrect: false },
              { id: 'b', text: '$(x + 2)(x + 5)$', isCorrect: true },
              { id: 'c', text: '$(x + 3)(x + 4)$', isCorrect: false },
              { id: 'd', text: '$(x - 2)(x - 5)$', isCorrect: false },
            ],
            solution: 'Vi trenger to tall med produkt $10$ og sum $7$. Det er $2$ og $5$. Altså $(x + 2)(x + 5)$.',
          },
          {
            id: '9-2-1-n-quiz2-q1',
            task: 'Faktoriser $x^2 - 4x - 21$.',
            options: [
              { id: 'a', text: '$(x - 7)(x + 3)$', isCorrect: true },
              { id: 'b', text: '$(x + 7)(x - 3)$', isCorrect: false },
              { id: 'c', text: '$(x - 7)(x - 3)$', isCorrect: false },
              { id: 'd', text: '$(x + 7)(x + 3)$', isCorrect: false },
            ],
            solution: 'Produkt $= -21$, sum $= -4$. Tallene er $-7$ og $3$ (fordi $-7 \\times 3 = -21$ og $-7 + 3 = -4$). Altså $(x - 7)(x + 3)$.',
          },
          {
            id: '9-2-1-n-quiz2-q2',
            task: 'Faktoriser $x^2 - 25$.',
            options: [
              { id: 'a', text: '$(x - 5)^2$', isCorrect: false },
              { id: 'b', text: '$(x + 5)(x - 5)$', isCorrect: true },
              { id: 'c', text: '$(x + 25)(x - 1)$', isCorrect: false },
              { id: 'd', text: 'Kan ikke faktoriseres', isCorrect: false },
            ],
            solution: 'Dette er en differanse av kvadrater: $x^2 - 25 = x^2 - 5^2 = (x + 5)(x - 5)$. Konjugatsetningen!',
          },
        ],
      },
    },

    {
      id: '9-2-1-n-section3',
      type: 'text',
      content: `## Faktorisering i flere steg

Noen ganger krever faktorisering at du kombinerer flere teknikker. Alltid start med å **trekke ut felles faktor** før du prøver andre metoder.

**Eksempel 1:** $2x^2 + 10x + 12$

Steg 1: Trekk ut felles faktor $2$:
$$2x^2 + 10x + 12 = 2(x^2 + 5x + 6)$$

Steg 2: Faktoriser trinomen $x^2 + 5x + 6$. Produkt $= 6$, sum $= 5$. Tallene er $2$ og $3$:
$$2(x^2 + 5x + 6) = 2(x + 2)(x + 3)$$

**Eksempel 2:** $3x^2 - 27$

Steg 1: Trekk ut felles faktor $3$:
$$3x^2 - 27 = 3(x^2 - 9)$$

Steg 2: Bruk konjugatsetningen:
$$3(x^2 - 9) = 3(x + 3)(x - 3)$$

**Eksempel 3:** $5x^3 + 10x^2 - 15x$

Steg 1: Felles faktor $5x$:
$$5x^3 + 10x^2 - 15x = 5x(x^2 + 2x - 3)$$

Steg 2: Faktoriser trinomen. Produkt $= -3$, sum $= 2$. Tallene er $3$ og $-1$:
$$5x(x^2 + 2x - 3) = 5x(x + 3)(x - 1)$$

**Tommelfingerregel:** Et uttrykk er fullt faktorisert når ingen av faktorene kan faktoriseres videre.`,
    },

    {
      id: '9-2-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-2-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på faktorisering i flere steg:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-2-1-n-quiz3-q0',
            task: 'Faktoriser $4x^2 - 16$ fullstendig.',
            options: [
              { id: 'a', text: '$4(x^2 - 4)$', isCorrect: false },
              { id: 'b', text: '$(2x + 4)(2x - 4)$', isCorrect: false },
              { id: 'c', text: '$4(x + 2)(x - 2)$', isCorrect: true },
              { id: 'd', text: '$2(2x^2 - 8)$', isCorrect: false },
            ],
            solution: 'Først: $4x^2 - 16 = 4(x^2 - 4)$. Deretter konjugatsetningen: $4(x + 2)(x - 2)$. Alternativ a) er ikke fullt faktorisert.',
          },
          {
            id: '9-2-1-n-quiz3-q1',
            task: 'Faktoriser $3x^2 + 12x + 9$ fullstendig.',
            options: [
              { id: 'a', text: '$3(x + 1)(x + 3)$', isCorrect: true },
              { id: 'b', text: '$(3x + 3)(x + 3)$', isCorrect: false },
              { id: 'c', text: '$3(x^2 + 4x + 3)$', isCorrect: false },
              { id: 'd', text: '$(x + 1)(3x + 9)$', isCorrect: false },
            ],
            solution: 'Felles faktor $3$: $3(x^2 + 4x + 3)$. Produkt $= 3$, sum $= 4$: tallene er $1$ og $3$. Fullt faktorisert: $3(x + 1)(x + 3)$.',
          },
          {
            id: '9-2-1-n-quiz3-q2',
            task: 'Hvilken faktorisering er korrekt for $x^3 - 4x$?',
            options: [
              { id: 'a', text: '$x(x^2 - 4)$', isCorrect: false },
              { id: 'b', text: '$x(x + 4)(x - 4)$', isCorrect: false },
              { id: 'c', text: '$x(x + 2)(x - 2)$', isCorrect: true },
              { id: 'd', text: '$(x - 2)(x^2 + 2x)$', isCorrect: false },
            ],
            solution: 'Felles faktor $x$: $x(x^2 - 4)$. Konjugatsetningen: $x(x + 2)(x - 2)$. Alternativ a) er ikke fullt faktorisert.',
          },
        ],
      },
    },

    {
      id: '9-2-1-n-summary',
      type: 'text',
      content: `## Oppsummering

**Faktorisering** er det omvendte av å multiplisere ut parenteser. Vi skriver et uttrykk som et produkt av faktorer.

**Tre hovedteknikker:**

| Teknikk | Eksempel |
|---------|---------|
| Felles faktor | $6x + 9 = 3(2x + 3)$ |
| Trinom $x^2 + bx + c$ | $x^2 + 5x + 6 = (x + 2)(x + 3)$ |
| Konjugatsetningen | $x^2 - 16 = (x + 4)(x - 4)$ |

**Fremgangsmåte:**
1. Start alltid med å trekke ut felles faktor
2. Se om du gjenkjenner et mønster (trinom, konjugat)
3. Sjekk at ingen faktor kan faktoriseres videre
4. Kontroller ved å multiplisere ut!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.2 NARRATIV: Kvadratsetningene
// ============================================================================

export const CHAPTER_9_2_2_NARRATIV: TextbookChapter = {
  id: '9-2-2-narrativ',
  courseId: '9',
  chapterNumber: '2.2',
  title: 'Kvadratsetningene',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende utforskning av de tre algebraiske identitetene -- første og andre kvadratsetning og konjugatsetningen -- med geometriske tolkninger og praktiske eksempler.',
  estimatedMinutes: 35,
  competenceGoals: [
    'handtere algebraiske uttrykk, bruke faktorisering og forkorting av brøkuttrykk',
  ],
  linkedChapterId: '9-2-2',
  content: [
    {
      id: '9-2-2-n-intro',
      type: 'text',
      content: `## Tre formler som forandrer alt

I algebra finnes det noen formler som er så nyttige at de er verdt å pugge. De kalles **kvadratsetningene** (eller «de tre algebraiske identitetene»), og de dukker opp overalt -- fra enkel forenkting til avansert matematikk.

De tre formlene er:
- **Første kvadratsetning:** $(a + b)^2 = a^2 + 2ab + b^2$
- **Andre kvadratsetning:** $(a - b)^2 = a^2 - 2ab + b^2$
- **Konjugatsetningen:** $(a + b)(a - b) = a^2 - b^2$

Disse er ikke bare abstrakte formler -- de har en vakker geometrisk tolkning, og de gjør mange regnestykker mye raskere. La oss utforske dem en om gangen.`,
    },

    {
      id: '9-2-2-n-section1',
      type: 'text',
      content: `## Første kvadratsetning: $(a + b)^2$

La oss starte med det mest grunnleggende: hva er $(a + b)^2$?

Mange gjør feilen å tro at $(a + b)^2 = a^2 + b^2$. Men det stemmer ikke! Husk at $(a + b)^2$ betyr $(a + b)(a + b)$. Når vi multipliserer ut:

$$(a + b)^2 = (a + b)(a + b) = a^2 + ab + ba + b^2 = a^2 + 2ab + b^2$$

Det avgjørende leddet er $2ab$ -- **dobbeltproduktet**. Det dukker alltid opp!

**Geometrisk forklaring:** Tenk på et kvadrat med sidelengde $a + b$. Arealet er $(a + b)^2$. Hvis vi deler siden i to deler ($a$ og $b$), får vi fire rektangler:
- Et kvadrat med side $a$: areal $a^2$
- Et kvadrat med side $b$: areal $b^2$
- To rektangler med sider $a$ og $b$: areal $2 \\times ab$

Totalt areal: $a^2 + 2ab + b^2$. Formelen er bekreftet!

**Eksempler:**
- $(x + 3)^2 = x^2 + 2 \\cdot x \\cdot 3 + 3^2 = x^2 + 6x + 9$
- $(2y + 5)^2 = (2y)^2 + 2 \\cdot 2y \\cdot 5 + 5^2 = 4y^2 + 20y + 25$
- $(3a + 4b)^2 = 9a^2 + 24ab + 16b^2$

**Regnetriks:** $53^2 = (50 + 3)^2 = 2500 + 300 + 9 = 2809$. Raskere enn å gange $53 \\times 53$ for hånd!`,
    },

    {
      id: '9-2-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-2-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på første kvadratsetning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-2-2-n-quiz1-q0',
            task: 'Hva er $(x + 4)^2$?',
            options: [
              { id: 'a', text: '$x^2 + 16$', isCorrect: false },
              { id: 'b', text: '$x^2 + 4x + 16$', isCorrect: false },
              { id: 'c', text: '$x^2 + 8x + 16$', isCorrect: true },
              { id: 'd', text: '$2x + 8$', isCorrect: false },
            ],
            solution: '$(x + 4)^2 = x^2 + 2 \\cdot x \\cdot 4 + 4^2 = x^2 + 8x + 16$. Dobbeltproduktet er $2 \\cdot x \\cdot 4 = 8x$.',
          },
          {
            id: '9-2-2-n-quiz1-q1',
            task: 'Hva er $(3x + 2)^2$?',
            options: [
              { id: 'a', text: '$9x^2 + 4$', isCorrect: false },
              { id: 'b', text: '$9x^2 + 6x + 4$', isCorrect: false },
              { id: 'c', text: '$9x^2 + 12x + 4$', isCorrect: true },
              { id: 'd', text: '$3x^2 + 12x + 4$', isCorrect: false },
            ],
            solution: '$(3x + 2)^2 = (3x)^2 + 2 \\cdot 3x \\cdot 2 + 2^2 = 9x^2 + 12x + 4$.',
          },
          {
            id: '9-2-2-n-quiz1-q2',
            task: 'Regn ut $102^2$ ved hjelp av første kvadratsetning.',
            options: [
              { id: 'a', text: '$10\\,200$', isCorrect: false },
              { id: 'b', text: '$10\\,404$', isCorrect: true },
              { id: 'c', text: '$10\\,204$', isCorrect: false },
              { id: 'd', text: '$10\\,004$', isCorrect: false },
            ],
            solution: '$102^2 = (100 + 2)^2 = 10\\,000 + 400 + 4 = 10\\,404$.',
          },
        ],
      },
    },

    {
      id: '9-2-2-n-section2',
      type: 'text',
      content: `## Andre kvadratsetning: $(a - b)^2$

Andre kvadratsetning er nesten identisk med den første, men med **minus** foran $b$:

$$(a - b)^2 = a^2 - 2ab + b^2$$

Merk at resultatet har $-2ab$ (minus dobbeltprodukt), men $+b^2$ (pluss $b^2$, fordi minus ganger minus er pluss!).

**Bevis:** $(a - b)^2 = (a - b)(a - b) = a^2 - ab - ba + b^2 = a^2 - 2ab + b^2$

**En vanlig feil:** Noen skriver $(a - b)^2 = a^2 - b^2$. Det er galt! $(a - b)^2$ er et **kvadrat** som alltid er positivt (eller null), mens $a^2 - b^2$ kan være negativt. Dessuten mangler dobbeltproduktet.

**Eksempler:**
- $(x - 5)^2 = x^2 - 2 \\cdot x \\cdot 5 + 5^2 = x^2 - 10x + 25$
- $(4y - 1)^2 = 16y^2 - 8y + 1$
- $(2a - 3b)^2 = 4a^2 - 12ab + 9b^2$

**Regnetriks:** $97^2 = (100 - 3)^2 = 10\\,000 - 600 + 9 = 9\\,409$.

**Faktorisering med andre kvadratsetning:** Hvis du ser et uttrykk som $x^2 - 10x + 25$, sjekk om det er et perfekt kvadrat:
- Er første og siste ledd perfekte kvadrater? $x^2 = (x)^2$ ✓, $25 = (5)^2$ ✓
- Er mellomleddet lik $2 \\cdot x \\cdot 5 = 10x$? ✓

Da er $x^2 - 10x + 25 = (x - 5)^2$.`,
    },

    {
      id: '9-2-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-2-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på andre kvadratsetning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-2-2-n-quiz2-q0',
            task: 'Hva er $(x - 7)^2$?',
            options: [
              { id: 'a', text: '$x^2 - 49$', isCorrect: false },
              { id: 'b', text: '$x^2 - 7x + 49$', isCorrect: false },
              { id: 'c', text: '$x^2 - 14x + 49$', isCorrect: true },
              { id: 'd', text: '$x^2 + 14x + 49$', isCorrect: false },
            ],
            solution: '$(x - 7)^2 = x^2 - 2 \\cdot x \\cdot 7 + 7^2 = x^2 - 14x + 49$.',
          },
          {
            id: '9-2-2-n-quiz2-q1',
            task: 'Er $4x^2 - 20x + 25$ et perfekt kvadrat?',
            options: [
              { id: 'a', text: 'Ja, $(2x - 5)^2$', isCorrect: true },
              { id: 'b', text: 'Ja, $(4x - 5)^2$', isCorrect: false },
              { id: 'c', text: 'Nei, det er ikke et perfekt kvadrat', isCorrect: false },
              { id: 'd', text: 'Ja, $(2x + 5)^2$', isCorrect: false },
            ],
            solution: '$4x^2 = (2x)^2$ og $25 = 5^2$. Dobbeltprodukt: $2 \\cdot 2x \\cdot 5 = 20x$. Stemmer! Altså $(2x - 5)^2$.',
          },
          {
            id: '9-2-2-n-quiz2-q2',
            task: 'Regn ut $48^2$ med andre kvadratsetning.',
            options: [
              { id: 'a', text: '$2\\,304$', isCorrect: true },
              { id: 'b', text: '$2\\,204$', isCorrect: false },
              { id: 'c', text: '$2\\,404$', isCorrect: false },
              { id: 'd', text: '$2\\,296$', isCorrect: false },
            ],
            solution: '$48^2 = (50 - 2)^2 = 2\\,500 - 200 + 4 = 2\\,304$.',
          },
        ],
      },
    },

    {
      id: '9-2-2-n-section3',
      type: 'text',
      content: `## Konjugatsetningen: $(a + b)(a - b)$

Den tredje identiteten handler om produktet av en **sum** og en **differanse** med de samme leddene:

$$(a + b)(a - b) = a^2 - b^2$$

**Bevis:** $(a + b)(a - b) = a^2 - ab + ba - b^2 = a^2 - b^2$

Dobbeltproduktet forsvinner fordi $-ab + ba = 0$! Resultatet er bare differansen av kvadratene.

$(a + b)$ og $(a - b)$ kalles **konjugerte** uttrykk.

**Eksempler:**
- $(x + 6)(x - 6) = x^2 - 36$
- $(3y + 2)(3y - 2) = 9y^2 - 4$
- $(5 + \\sqrt{3})(5 - \\sqrt{3}) = 25 - 3 = 22$

**Konjugatsetningen brukt «baklengs» (faktorisering):**
- $x^2 - 49 = (x + 7)(x - 7)$
- $4a^2 - 9b^2 = (2a + 3b)(2a - 3b)$
- $100 - y^2 = (10 + y)(10 - y)$

**Regnetriks:** $43 \\times 37 = (40 + 3)(40 - 3) = 1600 - 9 = 1591$. Mye raskere enn å gange for hånd!

**Viktig advarsel:** Konjugatsetningen gjelder bare for **differansen** av kvadrater ($a^2 - b^2$). Summen $a^2 + b^2$ kan **ikke** faktoriseres med reelle tall. Altså: $x^2 + 9$ kan ikke faktoriseres videre.`,
    },

    {
      id: '9-2-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-2-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på konjugatsetningen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-2-2-n-quiz3-q0',
            task: 'Hva er $(x + 8)(x - 8)$?',
            options: [
              { id: 'a', text: '$x^2 + 64$', isCorrect: false },
              { id: 'b', text: '$x^2 - 16x + 64$', isCorrect: false },
              { id: 'c', text: '$x^2 - 64$', isCorrect: true },
              { id: 'd', text: '$2x^2 - 64$', isCorrect: false },
            ],
            solution: 'Konjugatsetningen: $(x + 8)(x - 8) = x^2 - 8^2 = x^2 - 64$.',
          },
          {
            id: '9-2-2-n-quiz3-q1',
            task: 'Faktoriser $9x^2 - 16$.',
            options: [
              { id: 'a', text: '$(9x + 4)(x - 4)$', isCorrect: false },
              { id: 'b', text: '$(3x + 4)(3x - 4)$', isCorrect: true },
              { id: 'c', text: '$(3x - 4)^2$', isCorrect: false },
              { id: 'd', text: 'Kan ikke faktoriseres', isCorrect: false },
            ],
            solution: '$9x^2 = (3x)^2$ og $16 = 4^2$. Konjugatsetningen: $(3x + 4)(3x - 4)$.',
          },
          {
            id: '9-2-2-n-quiz3-q2',
            task: 'Regn ut $52 \\times 48$ raskt.',
            options: [
              { id: 'a', text: '$2\\,496$', isCorrect: true },
              { id: 'b', text: '$2\\,500$', isCorrect: false },
              { id: 'c', text: '$2\\,504$', isCorrect: false },
              { id: 'd', text: '$2\\,400$', isCorrect: false },
            ],
            solution: '$52 \\times 48 = (50 + 2)(50 - 2) = 2\\,500 - 4 = 2\\,496$.',
          },
        ],
      },
    },

    {
      id: '9-2-2-n-section4',
      type: 'text',
      content: `## Gjenkjenning og valg av riktig setning

I praksis handler det om å **gjenkjenne** hvilken setning som passer:

**Ser du $(a + b)^2$ eller $a^2 + 2ab + b^2$?** $\\to$ Første kvadratsetning

**Ser du $(a - b)^2$ eller $a^2 - 2ab + b^2$?** $\\to$ Andre kvadratsetning

**Ser du $(a + b)(a - b)$ eller $a^2 - b^2$?** $\\to$ Konjugatsetningen

**Sjekkliste for å gjenkjenne et perfekt kvadrat ($a^2 \\pm 2ab + b^2$):**
1. Er første ledd et perfekt kvadrat? ($x^2$, $4y^2$, $9a^2$, ...)
2. Er siste ledd et perfekt kvadrat? ($4$, $25$, $16b^2$, ...)
3. Er mellomleddet dobbeltproduktet ($2 \\times \\sqrt{\\text{første}} \\times \\sqrt{\\text{siste}}$)?

**Eksempel:** Er $x^2 + 12x + 36$ et perfekt kvadrat?
- $x^2$ er et perfekt kvadrat (av $x$)
- $36 = 6^2$ ✓
- Dobbeltprodukt: $2 \\cdot x \\cdot 6 = 12x$ ✓
- Altså: $x^2 + 12x + 36 = (x + 6)^2$

**Eksempel:** Er $x^2 + 10x + 20$ et perfekt kvadrat?
- Dobbeltprodukt av $x$ og $\\sqrt{20}$ ville vært $2x\\sqrt{20}$, som ikke er $10x$.
- Nei! Dette er ikke et perfekt kvadrat. (Men det kan faktoriseres med andre metoder.)`,
    },

    {
      id: '9-2-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '9-2-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på gjenkjenning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-2-2-n-quiz4-q0',
            task: 'Hvilken identitet passer for $25x^2 - 10x + 1$?',
            options: [
              { id: 'a', text: 'Første kvadratsetning: $(5x + 1)^2$', isCorrect: false },
              { id: 'b', text: 'Andre kvadratsetning: $(5x - 1)^2$', isCorrect: true },
              { id: 'c', text: 'Konjugatsetningen: $(5x + 1)(5x - 1)$', isCorrect: false },
              { id: 'd', text: 'Ingen av dem', isCorrect: false },
            ],
            solution: '$25x^2 = (5x)^2$, $1 = 1^2$, og $2 \\cdot 5x \\cdot 1 = 10x$. Med $-10x$: andre kvadratsetning $(5x - 1)^2$.',
          },
          {
            id: '9-2-2-n-quiz4-q1',
            task: 'Forenkle $(x + 3)^2 - (x - 3)^2$.',
            options: [
              { id: 'a', text: '$0$', isCorrect: false },
              { id: 'b', text: '$18$', isCorrect: false },
              { id: 'c', text: '$12x$', isCorrect: true },
              { id: 'd', text: '$6x$', isCorrect: false },
            ],
            solution: '$(x + 3)^2 = x^2 + 6x + 9$ og $(x - 3)^2 = x^2 - 6x + 9$. Differansen: $(x^2 + 6x + 9) - (x^2 - 6x + 9) = 12x$.',
          },
          {
            id: '9-2-2-n-quiz4-q2',
            task: 'Kan $x^2 + 4$ faktoriseres med reelle tall?',
            options: [
              { id: 'a', text: 'Ja, $(x + 2)(x + 2)$', isCorrect: false },
              { id: 'b', text: 'Ja, $(x + 2)(x - 2)$', isCorrect: false },
              { id: 'c', text: 'Nei, det kan ikke faktoriseres', isCorrect: true },
              { id: 'd', text: 'Ja, $(x + 4)(x - 4)$', isCorrect: false },
            ],
            solution: '$x^2 + 4$ er en sum av kvadrater. Denne kan ikke faktoriseres med reelle tall. Konjugatsetningen gjelder bare for differanse ($a^2 - b^2$).',
          },
        ],
      },
    },

    {
      id: '9-2-2-n-summary',
      type: 'text',
      content: `## Oppsummering

De tre algebraiske identitetene:

| Navn | Formel |
|------|--------|
| 1. kvadratsetning | $(a + b)^2 = a^2 + 2ab + b^2$ |
| 2. kvadratsetning | $(a - b)^2 = a^2 - 2ab + b^2$ |
| Konjugatsetningen | $(a + b)(a - b) = a^2 - b^2$ |

**Husk:**
- $(a + b)^2 \\neq a^2 + b^2$ (dobbeltproduktet mangler!)
- $(a - b)^2$ gir $+b^2$, ikke $-b^2$ (minus ganger minus er pluss)
- $a^2 + b^2$ kan **ikke** faktoriseres med reelle tall
- Disse formlene fungerer begge veier: til utregning og til faktorisering`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.3 NARRATIV: Likninger med brøk
// ============================================================================

export const CHAPTER_9_2_3_NARRATIV: TextbookChapter = {
  id: '9-2-3-narrativ',
  courseId: '9',
  chapterNumber: '2.3',
  title: 'Likninger med brøk',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av likninger som inneholder brøker -- fra enkle brøklikninger til mer avanserte teknikker med fellesnevner, med steg-for-steg-forklaringer og praktiske eksempler.',
  estimatedMinutes: 35,
  competenceGoals: [
    'løyse likningar og ulikskapar av første og andre grad og likningssystem med to ukjende og bruke det i praktiske situasjonar',
  ],
  linkedChapterId: '9-2-3',
  content: [
    {
      id: '9-2-3-n-intro',
      type: 'text',
      content: `## Når brøker invaderer likningene

Du vet allerede hvordan du løser en likning som $2x + 3 = 11$. Men hva skjer når det dukker opp brøker?

$$\\frac{x}{3} + \\frac{x}{4} = 7$$

Mange elever gruer seg til slike oppgaver. Men det finnes et elegant triks: **gang hele likningen med fellesnevneren**. Da forsvinner alle brøkene, og du står igjen med en vanlig likning som du allerede kan løse!

Tenk på det som å «rydde vekk» brøkene -- som å tørke bort støv fra et speil, slik at du ser det klare bildet under.`,
    },

    {
      id: '9-2-3-n-section1',
      type: 'text',
      content: `## Grunnprinsippet: gang med fellesnevner

**Steg 1:** Finn fellesnevneren til alle brøkene i likningen.
**Steg 2:** Gang **alle ledd** på **begge sider** med fellesnevneren.
**Steg 3:** Forenkle -- brøkene forsvinner!
**Steg 4:** Løs den vanlige likningen.

**Eksempel 1:** $\\frac{x}{3} + \\frac{x}{4} = 7$

Fellesnevner av $3$ og $4$ er $12$. Gang alle ledd med $12$:

$$12 \\cdot \\frac{x}{3} + 12 \\cdot \\frac{x}{4} = 12 \\cdot 7$$

$$4x + 3x = 84$$

$$7x = 84$$

$$x = 12$$

**Sjekk:** $\\frac{12}{3} + \\frac{12}{4} = 4 + 3 = 7$ ✓

**Eksempel 2:** $\\frac{2x - 1}{5} = \\frac{x + 3}{2}$

Fellesnevner av $5$ og $2$ er $10$. Gang med $10$:

$$10 \\cdot \\frac{2x - 1}{5} = 10 \\cdot \\frac{x + 3}{2}$$

$$2(2x - 1) = 5(x + 3)$$

$$4x - 2 = 5x + 15$$

$$4x - 5x = 15 + 2$$

$$-x = 17$$

$$x = -17$$

**Sjekk:** $\\frac{2(-17) - 1}{5} = \\frac{-35}{5} = -7$ og $\\frac{-17 + 3}{2} = \\frac{-14}{2} = -7$ ✓`,
    },

    {
      id: '9-2-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-2-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på enkle brøklikninger:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-2-3-n-quiz1-q0',
            task: 'Løs $\\frac{x}{2} + \\frac{x}{5} = 14$.',
            options: [
              { id: 'a', text: '$x = 10$', isCorrect: false },
              { id: 'b', text: '$x = 20$', isCorrect: true },
              { id: 'c', text: '$x = 7$', isCorrect: false },
              { id: 'd', text: '$x = 35$', isCorrect: false },
            ],
            solution: 'Fellesnevner $10$: $5x + 2x = 140$, altså $7x = 140$, $x = 20$. Sjekk: $\\frac{20}{2} + \\frac{20}{5} = 10 + 4 = 14$ ✓',
          },
          {
            id: '9-2-3-n-quiz1-q1',
            task: 'Løs $\\frac{3x}{4} = 9$.',
            options: [
              { id: 'a', text: '$x = 3$', isCorrect: false },
              { id: 'b', text: '$x = 27$', isCorrect: false },
              { id: 'c', text: '$x = 12$', isCorrect: true },
              { id: 'd', text: '$x = 36$', isCorrect: false },
            ],
            solution: 'Gang med $4$: $3x = 36$. Del på $3$: $x = 12$. Sjekk: $\\frac{3 \\cdot 12}{4} = \\frac{36}{4} = 9$ ✓',
          },
          {
            id: '9-2-3-n-quiz1-q2',
            task: 'Hva er fellesnevneren når vi har brøkene $\\frac{x}{6}$ og $\\frac{x}{8}$ i en likning?',
            options: [
              { id: 'a', text: '$48$', isCorrect: false },
              { id: 'b', text: '$14$', isCorrect: false },
              { id: 'c', text: '$24$', isCorrect: true },
              { id: 'd', text: '$2$', isCorrect: false },
            ],
            solution: 'MFF (minste felles multiplum) av $6$ og $8$: $6 = 2 \\times 3$, $8 = 2^3$. MFF $= 2^3 \\times 3 = 24$.',
          },
        ],
      },
    },

    {
      id: '9-2-3-n-section2',
      type: 'text',
      content: `## Likninger med $x$ i nevneren

Noen likninger har den ukjente $x$ i **nevneren**:

$$\\frac{6}{x} = 2$$

Her ganger vi begge sider med $x$ (og krysser fingrene for at $x \\neq 0$):

$$6 = 2x \\quad \\Rightarrow \\quad x = 3$$

Men det kan bli mer komplisert:

**Eksempel:** $\\frac{3}{x} + \\frac{1}{2} = \\frac{5}{x}$

Fellesnevner av $x$ og $2$ er $2x$. Gang alle ledd med $2x$:

$$2x \\cdot \\frac{3}{x} + 2x \\cdot \\frac{1}{2} = 2x \\cdot \\frac{5}{x}$$

$$6 + x = 10$$

$$x = 4$$

**Sjekk:** $\\frac{3}{4} + \\frac{1}{2} = \\frac{3}{4} + \\frac{2}{4} = \\frac{5}{4}$ og $\\frac{5}{4}$ ✓

**Viktig regel:** Når $x$ står i nevneren, må vi sjekke at svaret **ikke gir null i nevneren**. Hvis vi får $x = 0$ som svar (eller en annen verdi som gir null i en av nevnerne), er dette en **falsk løsning** som vi må forkaste.

**Eksempel på falsk løsning:** $\\frac{x}{x - 2} = \\frac{2}{x - 2} + 1$

Fellesnevner $x - 2$. Gang med $(x - 2)$:

$$x = 2 + (x - 2) = x$$

Vi ender med $x = x$, som er sant for alle $x$. Men vent -- $x = 2$ gir null i nevneren! Altså har likningen **ingen løsning**.`,
    },

    {
      id: '9-2-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-2-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på likninger med $x$ i nevneren:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-2-3-n-quiz2-q0',
            task: 'Løs $\\frac{12}{x} = 4$.',
            options: [
              { id: 'a', text: '$x = 48$', isCorrect: false },
              { id: 'b', text: '$x = 3$', isCorrect: true },
              { id: 'c', text: '$x = 8$', isCorrect: false },
              { id: 'd', text: '$x = \\frac{1}{3}$', isCorrect: false },
            ],
            solution: 'Gang med $x$: $12 = 4x$. Del på $4$: $x = 3$. Sjekk: $\\frac{12}{3} = 4$ ✓',
          },
          {
            id: '9-2-3-n-quiz2-q1',
            task: 'Løs $\\frac{2}{x + 1} = \\frac{1}{3}$.',
            options: [
              { id: 'a', text: '$x = 5$', isCorrect: true },
              { id: 'b', text: '$x = 7$', isCorrect: false },
              { id: 'c', text: '$x = 3$', isCorrect: false },
              { id: 'd', text: '$x = 2$', isCorrect: false },
            ],
            solution: 'Kryss-multipliser: $2 \\cdot 3 = 1 \\cdot (x + 1)$. $6 = x + 1$. $x = 5$. Sjekk: $\\frac{2}{6} = \\frac{1}{3}$ ✓',
          },
          {
            id: '9-2-3-n-quiz2-q2',
            task: 'Hvorfor er det viktig å sjekke svaret når $x$ står i nevneren?',
            options: [
              { id: 'a', text: 'For å øve på brøkregning', isCorrect: false },
              { id: 'b', text: 'Fordi svaret kan gi null i nevneren (falsk løsning)', isCorrect: true },
              { id: 'c', text: 'Fordi likningen alltid har to løsninger', isCorrect: false },
              { id: 'd', text: 'Fordi negative svar alltid er feil', isCorrect: false },
            ],
            solution: 'Når vi ganger med et uttrykk som inneholder $x$, kan vi introdusere falske løsninger. Vi må sjekke at svaret ikke gir $0$ i noen nevner.',
          },
        ],
      },
    },

    {
      id: '9-2-3-n-section3',
      type: 'text',
      content: `## Mer avanserte brøklikninger

La oss se på noen litt mer utfordrende eksempler.

**Eksempel 1: Flere brøkledd**

$$\\frac{x + 1}{3} - \\frac{x - 2}{4} = 2$$

Fellesnevner er $12$. Gang alle ledd:

$$4(x + 1) - 3(x - 2) = 24$$

$$4x + 4 - 3x + 6 = 24$$

$$x + 10 = 24$$

$$x = 14$$

**Eksempel 2: Brøk på begge sider**

$$\\frac{2x + 1}{6} = \\frac{3x - 5}{4}$$

Fellesnevner er $12$:

$$2(2x + 1) = 3(3x - 5)$$

$$4x + 2 = 9x - 15$$

$$-5x = -17$$

$$x = \\frac{17}{5} = 3{,}4$$

**Eksempel 3: Brøk med algebraisk nevner**

$$\\frac{5}{x - 1} + 3 = \\frac{2x}{x - 1}$$

Fellesnevner er $(x - 1)$. Gang med $(x - 1)$:

$$5 + 3(x - 1) = 2x$$

$$5 + 3x - 3 = 2x$$

$$3x + 2 = 2x$$

$$x = -2$$

Sjekk: $x - 1 = -3 \\neq 0$ ✓. Og: $\\frac{5}{-3} + 3 = -\\frac{5}{3} + \\frac{9}{3} = \\frac{4}{3}$ og $\\frac{2(-2)}{-3} = \\frac{-4}{-3} = \\frac{4}{3}$ ✓`,
    },

    {
      id: '9-2-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-2-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på avanserte brøklikninger:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-2-3-n-quiz3-q0',
            task: 'Løs $\\frac{x + 2}{3} - \\frac{x - 1}{6} = 1$.',
            options: [
              { id: 'a', text: '$x = 1$', isCorrect: true },
              { id: 'b', text: '$x = 3$', isCorrect: false },
              { id: 'c', text: '$x = -1$', isCorrect: false },
              { id: 'd', text: '$x = 5$', isCorrect: false },
            ],
            solution: 'Fellesnevner $6$: $2(x + 2) - (x - 1) = 6$. $2x + 4 - x + 1 = 6$. $x + 5 = 6$. $x = 1$.',
          },
          {
            id: '9-2-3-n-quiz3-q1',
            task: 'Løs $\\frac{x}{3} + \\frac{x}{4} + \\frac{x}{6} = 15$.',
            options: [
              { id: 'a', text: '$x = 12$', isCorrect: false },
              { id: 'b', text: '$x = 20$', isCorrect: true },
              { id: 'c', text: '$x = 18$', isCorrect: false },
              { id: 'd', text: '$x = 15$', isCorrect: false },
            ],
            solution: 'Fellesnevner $12$: $4x + 3x + 2x = 180$. $9x = 180$. $x = 20$. Sjekk: $\\frac{20}{3} + \\frac{20}{4} + \\frac{20}{6} = \\frac{40 + 30 + 20}{6} \\cdot \\frac{1}{2}$... La oss sjekke: $\\frac{20}{3} + 5 + \\frac{10}{3} = \\frac{30}{3} + 5 = 10 + 5 = 15$ ✓',
          },
          {
            id: '9-2-3-n-quiz3-q2',
            task: 'Hva er det første steget for å løse $\\frac{2}{x + 3} = \\frac{4}{x - 1}$?',
            options: [
              { id: 'a', text: 'Legge sammen brøkene', isCorrect: false },
              { id: 'b', text: 'Kryss-multiplisere: $2(x - 1) = 4(x + 3)$', isCorrect: true },
              { id: 'c', text: 'Sette $x = 0$', isCorrect: false },
              { id: 'd', text: 'Forkorte begge brøkene', isCorrect: false },
            ],
            solution: 'Kryss-multiplikasjon: $2(x - 1) = 4(x + 3)$. Deretter løser vi den vanlige likningen.',
          },
        ],
      },
    },

    {
      id: '9-2-3-n-summary',
      type: 'text',
      content: `## Oppsummering

**Likninger med brøk** løses ved å gange med fellesnevneren:

| Steg | Hva du gjør |
|------|-------------|
| 1 | Finn fellesnevneren |
| 2 | Gang alle ledd på begge sider med fellesnevneren |
| 3 | Forenkle (brøkene forsvinner) |
| 4 | Løs den vanlige likningen |
| 5 | **Sjekk svaret** (spesielt viktig når $x$ er i nevneren!) |

**Viktige huskeregler:**
- Kryss-multiplikasjon er en snarvei: $\\frac{a}{b} = \\frac{c}{d}$ gir $ad = bc$
- Når $x$ er i nevneren, kan du få falske løsninger
- Sjekk alltid at svaret ikke gir null i noen nevner`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.4 NARRATIV: Ulikheter
// ============================================================================

export const CHAPTER_9_2_4_NARRATIV: TextbookChapter = {
  id: '9-2-4-narrativ',
  courseId: '9',
  chapterNumber: '2.4',
  title: 'Ulikheter',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av ulikheter -- fra de grunnleggende symbolene til løsning av lineære ulikheter, med den viktige regelen om å snu tegnet ved divisjon med negativt tall.',
  estimatedMinutes: 35,
  competenceGoals: [
    'løyse likningar og ulikskapar av første og andre grad og likningssystem med to ukjende og bruke det i praktiske situasjonar',
  ],
  linkedChapterId: '9-2-4',
  content: [
    {
      id: '9-2-4-n-intro',
      type: 'text',
      content: `## Mer enn bare «lik»

I matematikk handler ikke alt om at to ting er like. Ofte vil vi uttrykke at noe er **større enn**, **mindre enn**, eller at det finnes en hel rekke med mulige verdier. Det er her **ulikheter** kommer inn.

Tenk på en berg-og-dal-bane som krever at du er **minst** $120$ cm høy. Da er kravet: $h \\geq 120$. Eller en butikk som har tilbud bare hvis du handler for **mer enn** $500$ kr: $\\text{beløp} > 500$.

I en likning er svaret vanligvis ett bestemt tall. I en ulikhet er svaret et helt **intervall** av tall -- mange verdier som alle oppfyller kravet.`,
    },

    {
      id: '9-2-4-n-section1',
      type: 'text',
      content: `## Symbolene og hva de betyr

Det finnes fire ulikhetssymboler:

| Symbol | Betydning | Eksempel |
|--------|-----------|----------|
| $<$ | strengt mindre enn | $3 < 5$ |
| $>$ | strengt større enn | $7 > 2$ |
| $\\leq$ | mindre enn eller lik | $x \\leq 10$ |
| $\\geq$ | større enn eller lik | $x \\geq 0$ |

**Strengt** ($<$, $>$) betyr at verdien **ikke** kan være lik grensen. For eksempel betyr $x < 5$ at $x$ kan være $4{,}99$ eller $4$ eller $-100$, men **ikke** $5$.

**Ikke-strengt** ($\\leq$, $\\geq$) betyr at verdien **kan** være lik grensen. $x \\leq 5$ betyr at $x$ kan være alt opp til og med $5$.

Vi kan skrive løsningen på en **tallinje**: bruk en **åpen sirkel** ($\\circ$) for strenge ulikheter og en **fylt sirkel** ($\\bullet$) for ikke-strenge. Skraver linjen i retningen av de gyldige verdiene.

Vi kan også bruke **intervallnotasjon**:
- $x > 3$: skrives $(3, \\infty)$ -- åpen parentes betyr at $3$ ikke er inkludert
- $x \\leq 5$: skrives $(-\\infty, 5]$ -- hakeparentes betyr at $5$ er inkludert
- $2 < x \\leq 7$: skrives $(2, 7]$`,
    },

    {
      id: '9-2-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-2-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på ulikhetssymboler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-2-4-n-quiz1-q0',
            task: 'Hvilken ulikhet beskriver «$x$ er minst $15$»?',
            options: [
              { id: 'a', text: '$x > 15$', isCorrect: false },
              { id: 'b', text: '$x < 15$', isCorrect: false },
              { id: 'c', text: '$x \\geq 15$', isCorrect: true },
              { id: 'd', text: '$x \\leq 15$', isCorrect: false },
            ],
            solution: '«Minst $15$» betyr $15$ eller mer, altså $x \\geq 15$. $x > 15$ ville bety «mer enn $15$» (ikke inkludert $15$ selv).',
          },
          {
            id: '9-2-4-n-quiz1-q1',
            task: 'Hvis $x < 4$, er $x = 4$ en gyldig verdi?',
            options: [
              { id: 'a', text: 'Ja', isCorrect: false },
              { id: 'b', text: 'Nei', isCorrect: true },
              { id: 'c', text: 'Bare hvis $x$ er et helt tall', isCorrect: false },
              { id: 'd', text: 'Bare hvis $x$ er positivt', isCorrect: false },
            ],
            solution: '$x < 4$ betyr strengt mindre enn $4$. Altså er $x = 4$ ikke en gyldig verdi. Hadde det stått $x \\leq 4$, ville $4$ vært inkludert.',
          },
          {
            id: '9-2-4-n-quiz1-q2',
            task: 'Hva er intervallnotasjon for $-2 \\leq x < 5$?',
            options: [
              { id: 'a', text: '$(-2, 5)$', isCorrect: false },
              { id: 'b', text: '$[-2, 5]$', isCorrect: false },
              { id: 'c', text: '$[-2, 5)$', isCorrect: true },
              { id: 'd', text: '$(-2, 5]$', isCorrect: false },
            ],
            solution: 'Hakeparentes $[$ ved $-2$ fordi $-2$ er inkludert ($\\leq$). Vanlig parentes $)$ ved $5$ fordi $5$ ikke er inkludert ($<$).',
          },
        ],
      },
    },

    {
      id: '9-2-4-n-section2',
      type: 'text',
      content: `## Løsning av lineære ulikheter

Å løse en ulikhet er nesten det samme som å løse en likning. Du kan:
- **Legge til** eller **trekke fra** det samme tallet på begge sider
- **Gange** eller **dele** begge sider med et **positivt** tall

**MEN** -- og dette er den store forskjellen -- når du ganger eller deler med et **negativt tall**, må du **snu ulikhetstegnet**!

Hvorfor? Tenk på tallinja. Vi vet at $2 < 5$. Ganger vi begge sider med $-1$, får vi $-2$ og $-5$. Men $-2 > -5$! Multiplikasjon med negativt tall speiler tallene, og rekkefølgen snur.

**Eksempel 1:** $3x + 7 < 22$

$$3x < 22 - 7$$
$$3x < 15$$
$$x < 5$$

Vi deler med positivt tall ($3$), så tegnet beholdes. Løsningen er alle tall mindre enn $5$.

**Eksempel 2:** $-2x + 4 \\geq 10$

$$-2x \\geq 10 - 4$$
$$-2x \\geq 6$$

Nå deler vi med $-2$ (negativt!), og **snur tegnet**:
$$x \\leq -3$$

Løsningen er alle tall som er $-3$ eller mindre.

**Eksempel 3:** $5 - 3x > 2x + 20$

Samle $x$-leddene:
$$5 - 3x - 2x > 20$$
$$5 - 5x > 20$$
$$-5x > 15$$

Del med $-5$ og **snu tegnet**:
$$x < -3$$`,
    },

    {
      id: '9-2-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-2-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på å løse ulikheter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-2-4-n-quiz2-q0',
            task: 'Løs $4x - 3 > 13$.',
            options: [
              { id: 'a', text: '$x > 4$', isCorrect: true },
              { id: 'b', text: '$x > \\frac{10}{4}$', isCorrect: false },
              { id: 'c', text: '$x < 4$', isCorrect: false },
              { id: 'd', text: '$x \\geq 4$', isCorrect: false },
            ],
            solution: '$4x > 16$, altså $x > 4$. Vi deler med positivt tall, så tegnet beholdes.',
          },
          {
            id: '9-2-4-n-quiz2-q1',
            task: 'Løs $-3x \\leq 12$.',
            options: [
              { id: 'a', text: '$x \\leq -4$', isCorrect: false },
              { id: 'b', text: '$x \\geq -4$', isCorrect: true },
              { id: 'c', text: '$x \\leq 4$', isCorrect: false },
              { id: 'd', text: '$x \\geq 4$', isCorrect: false },
            ],
            solution: 'Del med $-3$ og **snu tegnet**: $x \\geq -4$. Mange glemmer å snu!',
          },
          {
            id: '9-2-4-n-quiz2-q2',
            task: 'Løs $7 - 2x < 1$.',
            options: [
              { id: 'a', text: '$x < 3$', isCorrect: false },
              { id: 'b', text: '$x > 3$', isCorrect: true },
              { id: 'c', text: '$x > -3$', isCorrect: false },
              { id: 'd', text: '$x < -3$', isCorrect: false },
            ],
            solution: '$-2x < 1 - 7 = -6$. Del med $-2$ og snu: $x > 3$.',
          },
        ],
      },
    },

    {
      id: '9-2-4-n-section3',
      type: 'text',
      content: `## Doble ulikheter og sammensatte ulikheter

Noen ganger har vi en **dobbel ulikhet** som $-3 < 2x + 1 \\leq 9$. Den sier at $2x + 1$ er mellom $-3$ og $9$. Vi løser den ved å gjøre det samme med **alle tre delene**:

$$-3 < 2x + 1 \\leq 9$$

Trekk fra $1$ overalt:

$$-4 < 2x \\leq 8$$

Del på $2$ overalt (positivt tall, så tegnet beholdes):

$$-2 < x \\leq 4$$

Løsningen er at $x$ er strengt større enn $-2$ og mindre enn eller lik $4$. I intervallnotasjon: $(-2, 4]$.

**Praktiske eksempler på ulikheter:**

**Budsjett:** Du har $500$ kr og kjøper en bok til $150$ kr. Resten skal brukes på matpakker til $35$ kr stykket. Hvor mange matpakker har du råd til?
$$150 + 35n \\leq 500$$
$$35n \\leq 350$$
$$n \\leq 10$$
Du har råd til **høyst $10$** matpakker.

**Karakterkrav:** For å få karakter $5$ trenger du minst $72$ poeng på prøven. Du har fått $18$, $16$ og $20$ poeng på de tre første delene. Hvor mange poeng trenger du på siste del?
$$18 + 16 + 20 + x \\geq 72$$
$$54 + x \\geq 72$$
$$x \\geq 18$$
Du trenger minst $18$ poeng på siste del.`,
    },

    {
      id: '9-2-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-2-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på doble ulikheter og praktiske oppgaver:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-2-4-n-quiz3-q0',
            task: 'Løs $1 \\leq 3x - 2 < 10$.',
            options: [
              { id: 'a', text: '$1 \\leq x < 4$', isCorrect: true },
              { id: 'b', text: '$1 < x \\leq 4$', isCorrect: false },
              { id: 'c', text: '$-\\frac{1}{3} \\leq x < \\frac{8}{3}$', isCorrect: false },
              { id: 'd', text: '$3 \\leq x < 12$', isCorrect: false },
            ],
            solution: 'Legg til $2$: $3 \\leq 3x < 12$. Del på $3$: $1 \\leq x < 4$.',
          },
          {
            id: '9-2-4-n-quiz3-q1',
            task: 'Du har $200$ kr. En busstur koster $38$ kr. Hvor mange turer har du råd til?',
            options: [
              { id: 'a', text: 'Høyst $4$ turer', isCorrect: false },
              { id: 'b', text: 'Høyst $5$ turer', isCorrect: true },
              { id: 'c', text: 'Høyst $6$ turer', isCorrect: false },
              { id: 'd', text: 'Nøyaktig $5$ turer', isCorrect: false },
            ],
            solution: '$38n \\leq 200 \\Rightarrow n \\leq 5{,}26\\ldots$. Siden $n$ må være et helt tall: $n \\leq 5$, altså høyst $5$ turer.',
          },
          {
            id: '9-2-4-n-quiz3-q2',
            task: 'Hvilken ulikhet gir $x \\in [-1, 3)$?',
            options: [
              { id: 'a', text: '$-1 < x \\leq 3$', isCorrect: false },
              { id: 'b', text: '$-1 \\leq x < 3$', isCorrect: true },
              { id: 'c', text: '$-1 < x < 3$', isCorrect: false },
              { id: 'd', text: '$-1 \\leq x \\leq 3$', isCorrect: false },
            ],
            solution: 'Hakeparentes $[$ ved $-1$ betyr $\\leq$, vanlig parentes $)$ ved $3$ betyr $<$. Altså $-1 \\leq x < 3$.',
          },
        ],
      },
    },

    {
      id: '9-2-4-n-section4',
      type: 'text',
      content: `## Vanlige feil å unngå

Her er de vanligste feilene elever gjør med ulikheter:

**Feil 1: Glemmer å snu tegnet ved negativt tall**

$-4x > 12$ betyr **ikke** $x > -3$!

Riktig: $x < -3$ (vi deler med $-4$ og snur).

**Feil 2: Snur tegnet ved addisjon/subtraksjon**

$x - 5 > 3$ betyr $x > 8$, **ikke** $x < 8$. Du snur bare tegnet ved multiplikasjon/divisjon med negativt tall.

**Feil 3: Behandler $\\leq$ og $<$ likt**

Forskjellen er viktig! $x \\leq 5$ inkluderer $5$, mens $x < 5$ gjør det ikke.

**Feil 4: Glemmer å sjekke ved praktiske oppgaver**

Hvis svaret er $n \\leq 5{,}3$ og $n$ må være et helt tall, er svaret $n \\leq 5$ (ikke $n \\leq 6$!).

**Huskeregel for tegnsnu:**
Tenk på det som et speil. Når du ganger med et negativt tall, speiler du tallinja. Alt som var til høyre havner til venstre, og omvendt. Derfor snur ulikhetstegnet.`,
    },

    {
      id: '9-2-4-n-summary',
      type: 'text',
      content: `## Oppsummering

**Ulikheter** uttrykker at noe er større eller mindre enn noe annet, og har gjerne mange løsninger.

**Løsningsregler:**
| Operasjon | Hva skjer med tegnet? |
|-----------|----------------------|
| Legge til / trekke fra | Beholdes |
| Gange / dele med positivt tall | Beholdes |
| Gange / dele med **negativt** tall | **SNUR** |

**Doble ulikheter** ($a < bx + c \\leq d$): Gjør det samme med alle tre deler.

**Intervallnotasjon:**
- $[$ og $]$: endepunktet er inkludert ($\\leq$ eller $\\geq$)
- $($ og $)$: endepunktet er ikke inkludert ($<$ eller $>$)

**Praktiske oppgaver:** Sett opp ulikheten, løs den, og sjekk om svaret gir mening i konteksten (f.eks. hele tall, positive verdier).`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport
// ============================================================================

export const MATEMATIKK_9_NARRATIV_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_9_2_1_NARRATIV,
  CHAPTER_9_2_2_NARRATIV,
  CHAPTER_9_2_3_NARRATIV,
  CHAPTER_9_2_4_NARRATIV,
];
