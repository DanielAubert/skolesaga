/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 8. klasse - Narrativ versjon Del 1
 *
 * Kapittel 1.1: Heltall og regnerekkefølge
 * Kapittel 1.2: Brøk
 * Kapittel 1.3: Desimaltall
 * Kapittel 1.4: Prosent
 * Kapittel 1.5: Potenser
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1 NARRATIV: Heltall og regnerekkefølge
// ============================================================================

export const CHAPTER_8_1_1_NARRATIV: TextbookChapter = {
  id: '8-1-1-narrativ',
  courseId: '8',
  chapterNumber: '1.1',
  title: 'Heltall og regnerekkefølge',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av heltall og regnerekkefølge -- fra negative tall på termometeret til reglene som bestemmer hvilken operasjon du gjør først.',
  estimatedMinutes: 30,
  competenceGoals: [
    'utforske og beskrive strukturar og endringar i geometriske mønster og tallmønster med figurar, ord og formlar',
  ],
  linkedChapterId: '8-1-1',
  content: [
    {
      id: '8-1-1-n-intro',
      type: 'text',
      content: `## Tall som forteller historier

Tenk deg at du står ute en kald vinterdag. Termometeret viser $-12$ grader. Været er iskaldt! Så sier værmeldingen at det skal bli $5$ grader varmere i morgen. Hva blir temperaturen da?

$$-12 + 5 = -7$$

Fortsatt kaldt, men litt bedre! Negative tall er ikke bare noe matematikere har funnet på -- de er overalt rundt oss. Temperaturer under null, bankkonto i minus, etasjer under bakkeplan i et parkeringshus, og høyde under havnivå.

I dette kapittelet skal vi bli trygge på å regne med **heltall** -- altså alle de positive tallene, null, og de negative tallene -- og vi skal lære reglene for hvilken rekkefølge vi gjør beregninger i.`,
    },

    {
      id: '8-1-1-n-section1',
      type: 'text',
      content: `## Tallinja -- tallenes kart

Forestill deg en lang linje som strekker seg uendelig langt i begge retninger. I midten plasserer vi $0$. Til høyre går de positive tallene: $1, 2, 3, \\ldots$ Til venstre går de negative: $-1, -2, -3, \\ldots$

$$\\ldots, -4, -3, -2, -1, \\; 0, \\; 1, 2, 3, 4, \\ldots$$

Tallinja hjelper oss å forstå heltall:
- **Addisjon** er å flytte seg til **høyre**: $-3 + 5$ betyr «start på $-3$, gå $5$ steg til høyre» $= 2$
- **Subtraksjon** er å flytte seg til **venstre**: $2 - 7$ betyr «start på $2$, gå $7$ steg til venstre» $= -5$

Et nyttig triks: Å **subtrahere** et tall er det samme som å **addere** det motsatte tallet:

$$a - b = a + (-b)$$

For eksempel: $3 - 8 = 3 + (-8) = -5$.

Og å **subtrahere et negativt tall** er det samme som å **addere**:

$$a - (-b) = a + b$$

For eksempel: $2 - (-6) = 2 + 6 = 8$. Tenk på det som «to minustegn slår hverandre ut».`,
    },

    {
      id: '8-1-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-1-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på regning med negative tall:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-1-1-n-quiz1-q0',
            task: 'Hva er $-7 + 3$?',
            options: [
              { id: 'a', text: '$-10$', isCorrect: false },
              { id: 'b', text: '$-4$', isCorrect: true },
              { id: 'c', text: '$4$', isCorrect: false },
              { id: 'd', text: '$10$', isCorrect: false },
            ],
            solution: 'Start på $-7$ og gå $3$ steg til høyre på tallinja. Du ender på $-4$.',
          },
          {
            id: '8-1-1-n-quiz1-q1',
            task: 'Hva er $5 - (-3)$?',
            options: [
              { id: 'a', text: '$2$', isCorrect: false },
              { id: 'b', text: '$-8$', isCorrect: false },
              { id: 'c', text: '$8$', isCorrect: true },
              { id: 'd', text: '$-2$', isCorrect: false },
            ],
            solution: '$5 - (-3) = 5 + 3 = 8$. Å subtrahere et negativt tall er det samme som å addere det tilsvarende positive tallet.',
          },
          {
            id: '8-1-1-n-quiz1-q2',
            task: 'Temperaturen er $-15°$C. Det blir $20$ grader varmere. Hva er temperaturen nå?',
            options: [
              { id: 'a', text: '$-35°$C', isCorrect: false },
              { id: 'b', text: '$35°$C', isCorrect: false },
              { id: 'c', text: '$5°$C', isCorrect: true },
              { id: 'd', text: '$-5°$C', isCorrect: false },
            ],
            solution: '$-15 + 20 = 5$. Vi starter på $-15$ og går $20$ steg til høyre, forbi null, og ender på $5°$C.',
          },
        ],
      },
    },

    {
      id: '8-1-1-n-section2',
      type: 'text',
      content: `## Multiplikasjon og divisjon med negative tall

Å gange og dele med negative tall har klare fortegnsregler. Tenk på det slik:

**Fortegnsregler for multiplikasjon og divisjon:**
- **Pluss** $\\times$ **pluss** $=$ **pluss**: $3 \\times 4 = 12$
- **Minus** $\\times$ **pluss** $=$ **minus**: $(-3) \\times 4 = -12$
- **Pluss** $\\times$ **minus** $=$ **minus**: $3 \\times (-4) = -12$
- **Minus** $\\times$ **minus** $=$ **pluss**: $(-3) \\times (-4) = 12$

En enkel huskeregel: **likt fortegn gir pluss, ulikt fortegn gir minus.**

Hvorfor gir minus ganger minus pluss? Tenk på det slik: $(-3) \\times (-4)$ kan bety «fjern $3$ grupper med $-4$ kroner i gjeld». Å fjerne gjeld er det samme som å tjene penger -- du sitter igjen med $12$ kroner!

De samme reglene gjelder for divisjon:
- $(-20) \\div 5 = -4$ (ulikt fortegn gir minus)
- $(-20) \\div (-5) = 4$ (likt fortegn gir pluss)
- $18 \\div (-3) = -6$ (ulikt fortegn gir minus)`,
    },

    {
      id: '8-1-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-1-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på fortegnsreglene:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-1-1-n-quiz2-q0',
            task: 'Hva er $(-6) \\times (-7)$?',
            options: [
              { id: 'a', text: '$-42$', isCorrect: false },
              { id: 'b', text: '$42$', isCorrect: true },
              { id: 'c', text: '$-13$', isCorrect: false },
              { id: 'd', text: '$13$', isCorrect: false },
            ],
            solution: 'Minus ganger minus gir pluss: $(-6) \\times (-7) = 42$.',
          },
          {
            id: '8-1-1-n-quiz2-q1',
            task: 'Hva er $(-36) \\div (-9)$?',
            options: [
              { id: 'a', text: '$-4$', isCorrect: false },
              { id: 'b', text: '$-27$', isCorrect: false },
              { id: 'c', text: '$4$', isCorrect: true },
              { id: 'd', text: '$27$', isCorrect: false },
            ],
            solution: 'Likt fortegn gir pluss: $(-36) \\div (-9) = 4$.',
          },
          {
            id: '8-1-1-n-quiz2-q2',
            task: 'Hva er $(-5) \\times 8$?',
            options: [
              { id: 'a', text: '$40$', isCorrect: false },
              { id: 'b', text: '$-40$', isCorrect: true },
              { id: 'c', text: '$-13$', isCorrect: false },
              { id: 'd', text: '$3$', isCorrect: false },
            ],
            solution: 'Ulikt fortegn gir minus: $(-5) \\times 8 = -40$.',
          },
        ],
      },
    },

    {
      id: '8-1-1-n-section3',
      type: 'text',
      content: `## Regnerekkefølge -- hvem kommer først?

Se på dette regnestykket: $2 + 3 \\times 4$. Er svaret $20$ eller $14$?

Hvis vi regner fra venstre til høyre: $(2 + 3) \\times 4 = 5 \\times 4 = 20$.
Men den riktige måten: $2 + (3 \\times 4) = 2 + 12 = 14$.

For at alle skal få samme svar, har matematikere blitt enige om en **regnerekkefølge**. Du kan huske den med bokstavene **PEMDAS** eller den norske varianten:

**1. Parenteser** -- regn ut det som står i parenteser først
**2. Potenser** (og røtter) -- deretter potenser
**3. Multiplikasjon og divisjon** -- fra venstre til høyre
**4. Addisjon og subtraksjon** -- fra venstre til høyre

Et eksempel med alle stegene:

$$3 + 2 \\times (4 + 1)^2 - 6$$

Steg 1 (parentes): $3 + 2 \\times 5^2 - 6$

Steg 2 (potens): $3 + 2 \\times 25 - 6$

Steg 3 (multiplikasjon): $3 + 50 - 6$

Steg 4 (addisjon/subtraksjon): $53 - 6 = 47$

Parenteser er som VIP-billetter -- de slipper alltid til først! Trenger du å endre den vanlige rekkefølgen, setter du bare en parentes rundt det du vil gjøre først.`,
    },

    {
      id: '8-1-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-1-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på regnerekkefølge:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-1-1-n-quiz3-q0',
            task: 'Hva er $4 + 6 \\times 2$?',
            options: [
              { id: 'a', text: '$20$', isCorrect: false },
              { id: 'b', text: '$16$', isCorrect: true },
              { id: 'c', text: '$12$', isCorrect: false },
              { id: 'd', text: '$48$', isCorrect: false },
            ],
            solution: 'Multiplikasjon kommer før addisjon: $4 + 6 \\times 2 = 4 + 12 = 16$.',
          },
          {
            id: '8-1-1-n-quiz3-q1',
            task: 'Hva er $20 - 3 \\times (2 + 4)$?',
            options: [
              { id: 'a', text: '$102$', isCorrect: false },
              { id: 'b', text: '$2$', isCorrect: true },
              { id: 'c', text: '$14$', isCorrect: false },
              { id: 'd', text: '$-16$', isCorrect: false },
            ],
            solution: 'Parentes først: $2 + 4 = 6$. Deretter multiplikasjon: $3 \\times 6 = 18$. Til slutt subtraksjon: $20 - 18 = 2$.',
          },
          {
            id: '8-1-1-n-quiz3-q2',
            task: 'Hva er $5 \\times 2^3 + 1$?',
            options: [
              { id: 'a', text: '$1001$', isCorrect: false },
              { id: 'b', text: '$81$', isCorrect: false },
              { id: 'c', text: '$41$', isCorrect: true },
              { id: 'd', text: '$21$', isCorrect: false },
            ],
            solution: 'Potens først: $2^3 = 8$. Deretter multiplikasjon: $5 \\times 8 = 40$. Til slutt addisjon: $40 + 1 = 41$.',
          },
        ],
      },
    },

    {
      id: '8-1-1-n-section4',
      type: 'text',
      content: `## Sammensatte regnestykker

Nå som du kan regnerekkefølgen, la oss se på noen litt mer utfordrende eksempler med negative tall:

**Eksempel 1:** $(-3) \\times 4 + (-2) \\times (-5)$

Steg 1 (multiplikasjoner): $(-12) + 10$
Steg 2 (addisjon): $-2$

**Eksempel 2:** $-2 \\times (3 - 7) + 4$

Steg 1 (parentes): $-2 \\times (-4) + 4$
Steg 2 (multiplikasjon): $8 + 4$
Steg 3 (addisjon): $12$

**Eksempel 3:** $\\frac{(-6) + 10}{-2}$

Brøkstreken fungerer som en parentes -- vi regner ut teller og nevner hver for seg:
Teller: $(-6) + 10 = 4$
Så: $\\frac{4}{-2} = -2$

Husk: Brøkstreken er som en usynlig parentes rundt hele telleren og hele nevneren!`,
    },

    {
      id: '8-1-1-n-summary',
      type: 'text',
      content: `## Oppsummering

**Heltall** er tallene $\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots$

**Regning med negative tall:**
- $a - (-b) = a + b$ (minus og minus blir pluss)
- Likt fortegn i ganging/deling gir pluss
- Ulikt fortegn i ganging/deling gir minus

**Regnerekkefølge (PEMDAS):**
| Prioritet | Operasjon |
|-----------|-----------|
| 1. | Parenteser |
| 2. | Potenser |
| 3. | Multiplikasjon og divisjon (fra venstre) |
| 4. | Addisjon og subtraksjon (fra venstre) |

Brøkstreken fungerer som en parentes -- regn ut teller og nevner hver for seg.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.2 NARRATIV: Brøk
// ============================================================================

export const CHAPTER_8_1_2_NARRATIV: TextbookChapter = {
  id: '8-1-2-narrativ',
  courseId: '8',
  chapterNumber: '1.2',
  title: 'Brøk',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av brøk -- fra pizzastykker og sjokoladeruter til de fire regneartene med brøk, med konkrete eksempler som gjør brøk til noe håndgripelig.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utvikle og bruke metodar for hovudrekning, overslagsrekning og skriftleg rekning',
  ],
  linkedChapterId: '8-1-2',
  content: [
    {
      id: '8-1-2-n-intro',
      type: 'text',
      content: `## Å dele rettferdig

Tenk deg at du og to venner skal dele en pizza. Pizzaen er delt i $8$ stykker, og dere er $3$ personer. Hvor mye pizza får hver?

Det er her brøk kommer inn. Brøk handler om å dele ting i like store deler. Når vi skriver $\\frac{8}{3}$, sier vi «åtte delt på tre». Hver person får $\\frac{8}{3} = 2\\frac{2}{3}$ stykker.

Men brøk er mye mer enn bare deling. Brøk er en helt egen type tall -- et tall som uttrykker en **del av en helhet**. Brøken $\\frac{3}{4}$ betyr «3 av 4 like store deler». Toppstallet kalles **telleren** (den teller antall deler vi har), og bunnstallet kalles **nevneren** (den nevner hvor mange deler helheten er delt i).`,
    },

    {
      id: '8-1-2-n-section1',
      type: 'text',
      content: `## Utvidelse og forkorting -- brøkens superkrefter

En viktig egenskap ved brøk er at samme verdi kan skrives på mange måter:

$$\\frac{1}{2} = \\frac{2}{4} = \\frac{3}{6} = \\frac{4}{8} = \\frac{50}{100}$$

Alle disse brøkene er **likeverdige** -- de representerer nøyaktig samme mengde. En halv pizza er det samme om du deler den i $2$, $4$, $6$ eller $8$ stykker.

**Utvide** en brøk betyr å gange teller og nevner med samme tall:
$$\\frac{3}{5} = \\frac{3 \\times 4}{5 \\times 4} = \\frac{12}{20}$$

**Forkorte** en brøk betyr å dele teller og nevner med samme tall:
$$\\frac{12}{18} = \\frac{12 \\div 6}{18 \\div 6} = \\frac{2}{3}$$

Å forkorte er som å rydde -- vi fjerner unødvendige detaljer og finner den enkleste formen. En brøk er **fullt forkortet** når teller og nevner ikke har noen felles faktor annet enn $1$.

For eksempel: $\\frac{24}{36}$. Hva er den største felles faktoren? $12$! Så: $\\frac{24}{36} = \\frac{24 \\div 12}{36 \\div 12} = \\frac{2}{3}$.`,
    },

    {
      id: '8-1-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-1-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på utvidelse og forkorting:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-1-2-n-quiz1-q0',
            task: 'Hvilken brøk er likeverdig med $\\frac{3}{7}$?',
            options: [
              { id: 'a', text: '$\\frac{6}{14}$', isCorrect: true },
              { id: 'b', text: '$\\frac{6}{7}$', isCorrect: false },
              { id: 'c', text: '$\\frac{3}{14}$', isCorrect: false },
              { id: 'd', text: '$\\frac{9}{14}$', isCorrect: false },
            ],
            solution: '$\\frac{3}{7} = \\frac{3 \\times 2}{7 \\times 2} = \\frac{6}{14}$. Vi ganger teller og nevner med $2$.',
          },
          {
            id: '8-1-2-n-quiz1-q1',
            task: 'Forkort $\\frac{15}{25}$ så mye som mulig.',
            options: [
              { id: 'a', text: '$\\frac{5}{5}$', isCorrect: false },
              { id: 'b', text: '$\\frac{3}{5}$', isCorrect: true },
              { id: 'c', text: '$\\frac{1}{5}$', isCorrect: false },
              { id: 'd', text: '$\\frac{15}{5}$', isCorrect: false },
            ],
            solution: 'SFF av $15$ og $25$ er $5$. $\\frac{15}{25} = \\frac{15 \\div 5}{25 \\div 5} = \\frac{3}{5}$.',
          },
          {
            id: '8-1-2-n-quiz1-q2',
            task: 'Forkort $\\frac{36}{48}$ så mye som mulig.',
            options: [
              { id: 'a', text: '$\\frac{9}{12}$', isCorrect: false },
              { id: 'b', text: '$\\frac{6}{8}$', isCorrect: false },
              { id: 'c', text: '$\\frac{3}{4}$', isCorrect: true },
              { id: 'd', text: '$\\frac{18}{24}$', isCorrect: false },
            ],
            solution: 'SFF av $36$ og $48$ er $12$. $\\frac{36}{48} = \\frac{36 \\div 12}{48 \\div 12} = \\frac{3}{4}$.',
          },
        ],
      },
    },

    {
      id: '8-1-2-n-section2',
      type: 'text',
      content: `## Addisjon og subtraksjon av brøk

For å legge sammen eller trekke fra brøker, må de ha **lik nevner**. Tenk deg at du skal legge sammen $\\frac{1}{4}$ pizza og $\\frac{1}{3}$ pizza -- du kan ikke bare si «$2$ stykker», for stykkene er ulike store!

**Lik nevner -- bare legg sammen tellerne:**
$$\\frac{2}{7} + \\frac{3}{7} = \\frac{2 + 3}{7} = \\frac{5}{7}$$

**Ulik nevner -- finn fellesnevner først:**

$$\\frac{1}{4} + \\frac{1}{3}$$

Vi trenger en fellesnevner. Den minste fellesnevneren er det minste tallet begge nevnere går opp i, altså $12$:

$$\\frac{1}{4} + \\frac{1}{3} = \\frac{1 \\times 3}{4 \\times 3} + \\frac{1 \\times 4}{3 \\times 4} = \\frac{3}{12} + \\frac{4}{12} = \\frac{7}{12}$$

**Et større eksempel:**

$$\\frac{5}{6} - \\frac{2}{9}$$

Fellesnevner: $18$ (minste tall delelig med både $6$ og $9$)

$$\\frac{5 \\times 3}{6 \\times 3} - \\frac{2 \\times 2}{9 \\times 2} = \\frac{15}{18} - \\frac{4}{18} = \\frac{11}{18}$$

**Tips:** Du kan alltid finne en fellesnevner ved å gange de to nevnerne, men det er ofte lurere å finne den **minste** fellesnevneren for å unngå store tall.`,
    },

    {
      id: '8-1-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-1-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på addisjon og subtraksjon av brøk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-1-2-n-quiz2-q0',
            task: 'Hva er $\\frac{2}{5} + \\frac{1}{3}$?',
            options: [
              { id: 'a', text: '$\\frac{3}{8}$', isCorrect: false },
              { id: 'b', text: '$\\frac{11}{15}$', isCorrect: true },
              { id: 'c', text: '$\\frac{7}{15}$', isCorrect: false },
              { id: 'd', text: '$\\frac{3}{15}$', isCorrect: false },
            ],
            solution: 'Fellesnevner er $15$. $\\frac{2}{5} + \\frac{1}{3} = \\frac{6}{15} + \\frac{5}{15} = \\frac{11}{15}$.',
          },
          {
            id: '8-1-2-n-quiz2-q1',
            task: 'Hva er $\\frac{3}{4} - \\frac{1}{6}$?',
            options: [
              { id: 'a', text: '$\\frac{2}{2}$', isCorrect: false },
              { id: 'b', text: '$\\frac{7}{12}$', isCorrect: true },
              { id: 'c', text: '$\\frac{5}{12}$', isCorrect: false },
              { id: 'd', text: '$\\frac{1}{3}$', isCorrect: false },
            ],
            solution: 'Fellesnevner er $12$. $\\frac{3}{4} - \\frac{1}{6} = \\frac{9}{12} - \\frac{2}{12} = \\frac{7}{12}$.',
          },
        ],
      },
    },

    {
      id: '8-1-2-n-section3',
      type: 'text',
      content: `## Multiplikasjon og divisjon av brøk

**Multiplikasjon av brøk** er overraskende enkelt -- bare gang teller med teller og nevner med nevner:

$$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$$

For eksempel: $\\frac{2}{3} \\times \\frac{4}{5} = \\frac{2 \\times 4}{3 \\times 5} = \\frac{8}{15}$

Hva betyr dette? $\\frac{2}{3}$ av $\\frac{4}{5}$ betyr «to tredjedeler av fire femtedeler». Forestill deg en sjokoladeplate: ta $\\frac{4}{5}$ av den, og spis deretter $\\frac{2}{3}$ av det du tok. Da har du spist $\\frac{8}{15}$ av hele plata.

**Tips:** Du kan forkorte **på tvers** før du ganger for å unngå store tall:
$$\\frac{3}{8} \\times \\frac{4}{9} = \\frac{\\cancel{3}^{1}}{\\cancel{8}_{2}} \\times \\frac{\\cancel{4}^{1}}{\\cancel{9}_{3}} = \\frac{1}{2} \\times \\frac{1}{3} = \\frac{1}{6}$$

**Divisjon med brøk** bruker et smart triks: å dele med en brøk er det samme som å gange med den **omvendte** brøken:

$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$$

For eksempel: $\\frac{3}{4} \\div \\frac{2}{5} = \\frac{3}{4} \\times \\frac{5}{2} = \\frac{15}{8} = 1\\frac{7}{8}$

Hvorfor? Tenk deg at du har $\\frac{3}{4}$ liter saft og skal fylle glass som rommer $\\frac{2}{5}$ liter. «Hvor mange glass?» er et delestykke: $\\frac{3}{4} \\div \\frac{2}{5} = \\frac{15}{8} = 1\\frac{7}{8}$ glass.`,
    },

    {
      id: '8-1-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-1-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på ganging og deling av brøk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-1-2-n-quiz3-q0',
            task: 'Hva er $\\frac{3}{5} \\times \\frac{2}{7}$?',
            options: [
              { id: 'a', text: '$\\frac{5}{12}$', isCorrect: false },
              { id: 'b', text: '$\\frac{6}{35}$', isCorrect: true },
              { id: 'c', text: '$\\frac{6}{12}$', isCorrect: false },
              { id: 'd', text: '$\\frac{21}{10}$', isCorrect: false },
            ],
            solution: '$\\frac{3}{5} \\times \\frac{2}{7} = \\frac{3 \\times 2}{5 \\times 7} = \\frac{6}{35}$.',
          },
          {
            id: '8-1-2-n-quiz3-q1',
            task: 'Hva er $\\frac{4}{9} \\div \\frac{2}{3}$?',
            options: [
              { id: 'a', text: '$\\frac{8}{27}$', isCorrect: false },
              { id: 'b', text: '$\\frac{2}{3}$', isCorrect: true },
              { id: 'c', text: '$\\frac{6}{9}$', isCorrect: false },
              { id: 'd', text: '$\\frac{12}{18}$', isCorrect: false },
            ],
            solution: '$\\frac{4}{9} \\div \\frac{2}{3} = \\frac{4}{9} \\times \\frac{3}{2} = \\frac{12}{18} = \\frac{2}{3}$. Snu den andre brøken og gang.',
          },
          {
            id: '8-1-2-n-quiz3-q2',
            task: 'Hva er $\\frac{5}{6} \\times \\frac{3}{10}$?',
            options: [
              { id: 'a', text: '$\\frac{15}{60}$', isCorrect: false },
              { id: 'b', text: '$\\frac{1}{4}$', isCorrect: true },
              { id: 'c', text: '$\\frac{8}{16}$', isCorrect: false },
              { id: 'd', text: '$\\frac{1}{2}$', isCorrect: false },
            ],
            solution: '$\\frac{5}{6} \\times \\frac{3}{10} = \\frac{15}{60} = \\frac{1}{4}$. Vi forkorter med $15$.',
          },
        ],
      },
    },

    {
      id: '8-1-2-n-summary',
      type: 'text',
      content: `## Oppsummering

**Brøk** $\\frac{a}{b}$ betyr «$a$ av $b$ like store deler». $a$ er telleren, $b$ er nevneren.

**Utvidelse og forkorting:**
- Utvide: gang teller og nevner med samme tall
- Forkorte: del teller og nevner med samme tall

**De fire regneartene med brøk:**
| Operasjon | Regel |
|-----------|-------|
| Addisjon | Finn fellesnevner, legg sammen tellerne: $\\frac{a}{c} + \\frac{b}{c} = \\frac{a+b}{c}$ |
| Subtraksjon | Finn fellesnevner, trekk fra tellerne: $\\frac{a}{c} - \\frac{b}{c} = \\frac{a-b}{c}$ |
| Multiplikasjon | Gang teller med teller, nevner med nevner: $\\frac{a}{b} \\times \\frac{c}{d} = \\frac{ac}{bd}$ |
| Divisjon | Gang med den omvendte: $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$ |

Husk: Du kan alltid forkorte svaret etterpå!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.3 NARRATIV: Desimaltall
// ============================================================================

export const CHAPTER_8_1_3_NARRATIV: TextbookChapter = {
  id: '8-1-3-narrativ',
  courseId: '8',
  chapterNumber: '1.3',
  title: 'Desimaltall',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av desimaltall -- fra prislapper i butikken til omregning mellom brøk og desimaltall, med vekt på avrunding og presisjon.',
  estimatedMinutes: 30,
  competenceGoals: [
    'utvikle og bruke metodar for hovudrekning, overslagsrekning og skriftleg rekning',
  ],
  linkedChapterId: '8-1-3',
  content: [
    {
      id: '8-1-3-n-intro',
      type: 'text',
      content: `## Tall med komma

Du møter desimaltall hele tiden: prisen på melk er $19{,}90$ kr, du løper $100$ meter på $13{,}45$ sekunder, og telefonen veier $0{,}174$ kg. Desimaltall er rett og slett en praktisk måte å skrive tall som ikke er hele.

Men hva betyr egentlig sifrene etter kommaet? La oss bryte det ned:

$$3{,}725 = 3 + \\frac{7}{10} + \\frac{2}{100} + \\frac{5}{1000}$$

Hvert siffer har sin **plassverdi**:
- $3$ er **enere**
- $7$ er **tideler** (tiendedeler)
- $2$ er **hundredeler** (hundredeler)
- $5$ er **tusendeler** (tusendeler)

Systemet er logisk: til venstre for kommaet ganger vi med $10$ for hvert steg ($1, 10, 100, \\ldots$). Til høyre for kommaet deler vi med $10$ for hvert steg ($0{,}1, \\; 0{,}01, \\; 0{,}001, \\ldots$).`,
    },

    {
      id: '8-1-3-n-section1',
      type: 'text',
      content: `## Regning med desimaltall

**Addisjon og subtraksjon** -- sett kommaene under hverandre:

$$\\begin{align} &12{,}35 \\\\ +\\; &\\;4{,}7\\phantom{0} \\\\ \\hline &17{,}05 \\end{align}$$

Husk: $4{,}7$ er det samme som $4{,}70$. Du kan alltid legge til nuller bak kommaet uten å endre verdien.

**Multiplikasjon med desimaltall** -- et smart triks:

Gang som om det ikke finnes komma, og sett deretter kommaet i svaret. Antall desimaler i svaret = summen av antall desimaler i faktorene.

$2{,}3 \\times 1{,}4$: Regn $23 \\times 14 = 322$. Totalt $2$ desimaler, så svaret er $3{,}22$.

**Multiplikasjon og divisjon med $10$, $100$, $1000$:**
- Gang med $10$: flytt kommaet én plass til høyre: $3{,}45 \\times 10 = 34{,}5$
- Gang med $100$: flytt kommaet to plasser: $3{,}45 \\times 100 = 345$
- Del med $10$: flytt kommaet én plass til venstre: $3{,}45 \\div 10 = 0{,}345$

**Divisjon med desimaltall:** Gjør divisoren til et helt tall ved å flytte kommaet like mange plasser i begge tall:

$$6{,}3 \\div 0{,}9 = \\frac{6{,}3}{0{,}9} = \\frac{63}{9} = 7$$`,
    },

    {
      id: '8-1-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-1-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på regning med desimaltall:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-1-3-n-quiz1-q0',
            task: 'Hva er $3{,}7 + 12{,}85$?',
            options: [
              { id: 'a', text: '$15{,}55$', isCorrect: false },
              { id: 'b', text: '$16{,}55$', isCorrect: true },
              { id: 'c', text: '$16{,}22$', isCorrect: false },
              { id: 'd', text: '$15{,}92$', isCorrect: false },
            ],
            solution: '$3{,}70 + 12{,}85 = 16{,}55$. Husk å sette kommaene under hverandre.',
          },
          {
            id: '8-1-3-n-quiz1-q1',
            task: 'Hva er $0{,}6 \\times 0{,}4$?',
            options: [
              { id: 'a', text: '$2{,}4$', isCorrect: false },
              { id: 'b', text: '$0{,}24$', isCorrect: true },
              { id: 'c', text: '$0{,}024$', isCorrect: false },
              { id: 'd', text: '$24$', isCorrect: false },
            ],
            solution: '$6 \\times 4 = 24$. Totalt $2$ desimaler ($1 + 1$), så svaret er $0{,}24$.',
          },
          {
            id: '8-1-3-n-quiz1-q2',
            task: 'Hva er $5{,}6 \\div 0{,}8$?',
            options: [
              { id: 'a', text: '$0{,}7$', isCorrect: false },
              { id: 'b', text: '$4{,}8$', isCorrect: false },
              { id: 'c', text: '$7$', isCorrect: true },
              { id: 'd', text: '$70$', isCorrect: false },
            ],
            solution: 'Flytt kommaet: $\\frac{5{,}6}{0{,}8} = \\frac{56}{8} = 7$.',
          },
        ],
      },
    },

    {
      id: '8-1-3-n-section2',
      type: 'text',
      content: `## Omregning mellom brøk og desimaltall

Brøk og desimaltall er to måter å skrive det samme tallet på. Å veksle mellom dem er en nyttig ferdighet.

**Fra brøk til desimaltall:** Del telleren på nevneren.
- $\\frac{3}{4} = 3 \\div 4 = 0{,}75$
- $\\frac{1}{3} = 1 \\div 3 = 0{,}333\\ldots = 0{,}\\overline{3}$
- $\\frac{5}{8} = 5 \\div 8 = 0{,}625$

Noen brøker gir desimaltall som «aldri tar slutt». Disse kalles **periodiske desimaltall** og skrives med strek over den gjentakende delen.

**Fra desimaltall til brøk:** Bruk plassverdien.
- $0{,}7 = \\frac{7}{10}$
- $0{,}25 = \\frac{25}{100} = \\frac{1}{4}$
- $0{,}125 = \\frac{125}{1000} = \\frac{1}{8}$

**Nyttige brøk-desimaltall å huske:**
| Brøk | Desimaltall |
|------|-------------|
| $\\frac{1}{2}$ | $0{,}5$ |
| $\\frac{1}{4}$ | $0{,}25$ |
| $\\frac{3}{4}$ | $0{,}75$ |
| $\\frac{1}{5}$ | $0{,}2$ |
| $\\frac{1}{8}$ | $0{,}125$ |
| $\\frac{1}{3}$ | $0{,}\\overline{3}$ |`,
    },

    {
      id: '8-1-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-1-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på omregning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-1-3-n-quiz2-q0',
            task: 'Hva er $\\frac{3}{8}$ som desimaltall?',
            options: [
              { id: 'a', text: '$0{,}35$', isCorrect: false },
              { id: 'b', text: '$0{,}375$', isCorrect: true },
              { id: 'c', text: '$0{,}38$', isCorrect: false },
              { id: 'd', text: '$0{,}3$', isCorrect: false },
            ],
            solution: '$\\frac{3}{8} = 3 \\div 8 = 0{,}375$.',
          },
          {
            id: '8-1-3-n-quiz2-q1',
            task: 'Skriv $0{,}45$ som en forkortet brøk.',
            options: [
              { id: 'a', text: '$\\frac{45}{10}$', isCorrect: false },
              { id: 'b', text: '$\\frac{4}{5}$', isCorrect: false },
              { id: 'c', text: '$\\frac{9}{20}$', isCorrect: true },
              { id: 'd', text: '$\\frac{45}{1000}$', isCorrect: false },
            ],
            solution: '$0{,}45 = \\frac{45}{100} = \\frac{45 \\div 5}{100 \\div 5} = \\frac{9}{20}$.',
          },
        ],
      },
    },

    {
      id: '8-1-3-n-section3',
      type: 'text',
      content: `## Avrunding

I praksis trenger vi ofte ikke alle desimalene. Når du handler og prisen er $49{,}937$ kr, betaler du $49{,}94$ kr (avrundet til nærmeste hundredel) eller $50$ kr (avrundet til nærmeste krone).

**Reglene for avrunding:**
1. Se på sifferet **etter** plassen du runder av til
2. Er det $0, 1, 2, 3$ eller $4$: **rund ned** (sifferet beholdes)
3. Er det $5, 6, 7, 8$ eller $9$: **rund opp** (sifferet økes med $1$)

**Eksempler:**
- $3{,}742$ avrundet til én desimal: sifferet etter er $4$ (rund ned) $\\rightarrow 3{,}7$
- $3{,}762$ avrundet til én desimal: sifferet etter er $6$ (rund opp) $\\rightarrow 3{,}8$
- $12{,}8503$ avrundet til to desimaler: sifferet etter er $0$ (rund ned) $\\rightarrow 12{,}85$
- $0{,}9951$ avrundet til to desimaler: sifferet etter er $5$ (rund opp) $\\rightarrow 1{,}00$

Det siste eksempelet viser at avrunding noen ganger kan endre sifferet foran kommaet!`,
    },

    {
      id: '8-1-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-1-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på avrunding:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-1-3-n-quiz3-q0',
            task: 'Rund av $7{,}348$ til én desimal.',
            options: [
              { id: 'a', text: '$7{,}4$', isCorrect: false },
              { id: 'b', text: '$7{,}3$', isCorrect: true },
              { id: 'c', text: '$7{,}35$', isCorrect: false },
              { id: 'd', text: '$7$', isCorrect: false },
            ],
            solution: 'Sifferet etter tiendedelen er $4$ (rund ned). Altså $7{,}3$.',
          },
          {
            id: '8-1-3-n-quiz3-q1',
            task: 'Rund av $12{,}965$ til to desimaler.',
            options: [
              { id: 'a', text: '$12{,}96$', isCorrect: false },
              { id: 'b', text: '$12{,}97$', isCorrect: true },
              { id: 'c', text: '$13{,}00$', isCorrect: false },
              { id: 'd', text: '$12{,}95$', isCorrect: false },
            ],
            solution: 'Sifferet etter hundredelen er $5$ (rund opp). $12{,}96$ blir $12{,}97$.',
          },
          {
            id: '8-1-3-n-quiz3-q2',
            task: 'Rund av $0{,}0473$ til to desimaler.',
            options: [
              { id: 'a', text: '$0{,}04$', isCorrect: false },
              { id: 'b', text: '$0{,}05$', isCorrect: true },
              { id: 'c', text: '$0{,}047$', isCorrect: false },
              { id: 'd', text: '$0{,}50$', isCorrect: false },
            ],
            solution: 'To desimaler betyr hundredeler. Hundredelen er $4$, sifferet etter er $7$ (rund opp). Altså $0{,}05$.',
          },
        ],
      },
    },

    {
      id: '8-1-3-n-summary',
      type: 'text',
      content: `## Oppsummering

**Desimaltall** bruker komma for å vise deler av hele tall. Plassverdiene til høyre for komma er tideler, hundredeler, tusendeler, osv.

**Regning med desimaltall:**
- Addisjon/subtraksjon: sett kommaene under hverandre
- Multiplikasjon: regn uten komma, tell desimaler etterpå
- Gang/del med $10$: flytt kommaet
- Divisjon med desimaltall: gjør divisoren til et helt tall

**Omregning:**
- Brøk til desimaltall: del teller med nevner
- Desimaltall til brøk: bruk plassverdien og forkort

**Avrunding:**
- Se på sifferet etter plassen du runder til
- $0$--$4$: rund ned, $5$--$9$: rund opp`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.4 NARRATIV: Prosent
// ============================================================================

export const CHAPTER_8_1_4_NARRATIV: TextbookChapter = {
  id: '8-1-4-narrativ',
  courseId: '8',
  chapterNumber: '1.4',
  title: 'Prosent',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av prosent -- fra tilbudspriser i butikken til vekstfaktor og prosentvis endring, med mange hverdagseksempler.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og argumentere for korleis rekne med forhold, prosent og vekstfaktor',
  ],
  linkedChapterId: '8-1-4',
  content: [
    {
      id: '8-1-4-n-intro',
      type: 'text',
      content: `## Hundredeler overalt

Du ser prosent overalt: «30 % rabatt!», «Battteri: 74 %», «Renta er 3{,}5 %». Men hva betyr egentlig prosent?

Ordet «prosent» kommer fra latin: *pro centum* = «per hundre». Altså:

$$1\\% = \\frac{1}{100} = 0{,}01$$

Når butikken sier «30 % rabatt», mener de at du sparer $30$ av hver $100$ kroner. Og når telefonen viser «74 % batteri», betyr det at $74$ hundredeler av batteriet er igjen.

Prosent er egentlig bare en annen måte å skrive brøk eller desimaltall på -- men det er en spesielt praktisk måte fordi vi er vant til å tenke i hundredeler. Det er lettere å sammenligne $45\\%$ og $52\\%$ enn $\\frac{9}{20}$ og $\\frac{13}{25}$, selv om det er de samme tallene!`,
    },

    {
      id: '8-1-4-n-section1',
      type: 'text',
      content: `## Omregning mellom prosent, brøk og desimaltall

Disse tre er nært beslektet -- de er bare ulike måter å uttrykke det samme tallet:

**Fra prosent til desimaltall:** Del med $100$ (flytt kommaet to plasser til venstre):
- $45\\% = 0{,}45$
- $7\\% = 0{,}07$
- $125\\% = 1{,}25$
- $0{,}5\\% = 0{,}005$

**Fra desimaltall til prosent:** Gang med $100$ (flytt kommaet to plasser til høyre):
- $0{,}38 = 38\\%$
- $0{,}6 = 60\\%$
- $1{,}5 = 150\\%$

**Fra prosent til brøk:** Skriv prosenten over $100$ og forkort:
- $25\\% = \\frac{25}{100} = \\frac{1}{4}$
- $60\\% = \\frac{60}{100} = \\frac{3}{5}$
- $33{,}3\\% \\approx \\frac{1}{3}$

**Nyttige verdier å huske:**
| Prosent | Brøk | Desimaltall |
|---------|-------|-------------|
| $10\\%$ | $\\frac{1}{10}$ | $0{,}1$ |
| $20\\%$ | $\\frac{1}{5}$ | $0{,}2$ |
| $25\\%$ | $\\frac{1}{4}$ | $0{,}25$ |
| $50\\%$ | $\\frac{1}{2}$ | $0{,}5$ |
| $75\\%$ | $\\frac{3}{4}$ | $0{,}75$ |
| $100\\%$ | $1$ | $1{,}0$ |`,
    },

    {
      id: '8-1-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-1-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på omregning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-1-4-n-quiz1-q0',
            task: 'Hva er $35\\%$ som desimaltall?',
            options: [
              { id: 'a', text: '$3{,}5$', isCorrect: false },
              { id: 'b', text: '$0{,}35$', isCorrect: true },
              { id: 'c', text: '$0{,}035$', isCorrect: false },
              { id: 'd', text: '$35{,}0$', isCorrect: false },
            ],
            solution: '$35\\% = \\frac{35}{100} = 0{,}35$. Del med $100$.',
          },
          {
            id: '8-1-4-n-quiz1-q1',
            task: 'Hva er $\\frac{3}{8}$ som prosent?',
            options: [
              { id: 'a', text: '$38\\%$', isCorrect: false },
              { id: 'b', text: '$3{,}8\\%$', isCorrect: false },
              { id: 'c', text: '$37{,}5\\%$', isCorrect: true },
              { id: 'd', text: '$375\\%$', isCorrect: false },
            ],
            solution: '$\\frac{3}{8} = 3 \\div 8 = 0{,}375 = 37{,}5\\%$.',
          },
          {
            id: '8-1-4-n-quiz1-q2',
            task: 'Hva er $0{,}04$ som prosent?',
            options: [
              { id: 'a', text: '$40\\%$', isCorrect: false },
              { id: 'b', text: '$0{,}4\\%$', isCorrect: false },
              { id: 'c', text: '$4\\%$', isCorrect: true },
              { id: 'd', text: '$0{,}04\\%$', isCorrect: false },
            ],
            solution: '$0{,}04 \\times 100 = 4\\%$. Gang med $100$.',
          },
        ],
      },
    },

    {
      id: '8-1-4-n-section2',
      type: 'text',
      content: `## Prosentregning -- finne delen

Det vanligste prosentstykket er: «Hva er X prosent av Y?» Svaret finner du ved å gange:

$$X\\% \\text{ av } Y = \\frac{X}{100} \\times Y$$

**Eksempel 1:** Hva er $15\\%$ av $400$ kr?
$$15\\% \\text{ av } 400 = 0{,}15 \\times 400 = 60 \\text{ kr}$$

**Eksempel 2:** En jakke koster $800$ kr og har $25\\%$ rabatt. Hva er rabatten?
$$25\\% \\text{ av } 800 = 0{,}25 \\times 800 = 200 \\text{ kr}$$
Ny pris: $800 - 200 = 600$ kr.

**Eksempel 3:** I en klasse med $28$ elever fikk $75\\%$ bestått på prøven. Hvor mange bestod?
$$75\\% \\text{ av } 28 = 0{,}75 \\times 28 = 21 \\text{ elever}$$

Men noen ganger vet vi delen og vil finne prosenten: «Hvor mange prosent er X av Y?»

$$\\text{Prosent} = \\frac{X}{Y} \\times 100\\%$$

**Eksempel 4:** Du fikk $18$ av $24$ poeng på en prøve. Hvor mange prosent er det?
$$\\frac{18}{24} \\times 100\\% = 0{,}75 \\times 100\\% = 75\\%$$`,
    },

    {
      id: '8-1-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-1-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på prosentregning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-1-4-n-quiz2-q0',
            task: 'Hva er $20\\%$ av $350$ kr?',
            options: [
              { id: 'a', text: '$35$ kr', isCorrect: false },
              { id: 'b', text: '$70$ kr', isCorrect: true },
              { id: 'c', text: '$7$ kr', isCorrect: false },
              { id: 'd', text: '$175$ kr', isCorrect: false },
            ],
            solution: '$20\\%$ av $350 = 0{,}20 \\times 350 = 70$ kr.',
          },
          {
            id: '8-1-4-n-quiz2-q1',
            task: 'Du fikk $15$ av $20$ poeng. Hvor mange prosent er det?',
            options: [
              { id: 'a', text: '$60\\%$', isCorrect: false },
              { id: 'b', text: '$75\\%$', isCorrect: true },
              { id: 'c', text: '$80\\%$', isCorrect: false },
              { id: 'd', text: '$15\\%$', isCorrect: false },
            ],
            solution: '$\\frac{15}{20} \\times 100\\% = 0{,}75 \\times 100\\% = 75\\%$.',
          },
          {
            id: '8-1-4-n-quiz2-q2',
            task: 'En bukse koster $600$ kr og har $30\\%$ rabatt. Hva betaler du?',
            options: [
              { id: 'a', text: '$180$ kr', isCorrect: false },
              { id: 'b', text: '$570$ kr', isCorrect: false },
              { id: 'c', text: '$420$ kr', isCorrect: true },
              { id: 'd', text: '$200$ kr', isCorrect: false },
            ],
            solution: 'Rabatt: $30\\%$ av $600 = 180$ kr. Ny pris: $600 - 180 = 420$ kr.',
          },
        ],
      },
    },

    {
      id: '8-1-4-n-section3',
      type: 'text',
      content: `## Vekstfaktor -- den smarte snarveien

Når en pris øker eller synker med en prosent, kan vi bruke en **vekstfaktor** i stedet for å regne i to steg.

**Prisøkning:** En vare koster $500$ kr og øker med $8\\%$.
- Lang metode: $500 + 8\\% \\cdot 500 = 500 + 40 = 540$ kr
- Vekstfaktor: $500 \\times 1{,}08 = 540$ kr

Vekstfaktoren er $1 + \\frac{8}{100} = 1{,}08$. Vi beholder $100\\%$ av prisen **pluss** legger til $8\\%$.

**Prisreduksjon:** En vare koster $500$ kr og reduseres med $20\\%$.
- Lang metode: $500 - 20\\% \\cdot 500 = 500 - 100 = 400$ kr
- Vekstfaktor: $500 \\times 0{,}80 = 400$ kr

Vekstfaktoren er $1 - \\frac{20}{100} = 0{,}80$. Vi beholder bare $80\\%$ av prisen.

**Generelt:**
| Endring | Vekstfaktor |
|---------|-------------|
| Økning på $p\\%$ | $1 + \\frac{p}{100}$ |
| Reduksjon på $p\\%$ | $1 - \\frac{p}{100}$ |

**Eksempler på vekstfaktorer:**
- $15\\%$ økning $\\rightarrow 1{,}15$
- $30\\%$ rabatt $\\rightarrow 0{,}70$
- $6\\%$ rente $\\rightarrow 1{,}06$
- $50\\%$ salg $\\rightarrow 0{,}50$`,
    },

    {
      id: '8-1-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-1-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på vekstfaktor:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-1-4-n-quiz3-q0',
            task: 'Hva er vekstfaktoren for en prisøkning på $12\\%$?',
            options: [
              { id: 'a', text: '$0{,}12$', isCorrect: false },
              { id: 'b', text: '$1{,}12$', isCorrect: true },
              { id: 'c', text: '$0{,}88$', isCorrect: false },
              { id: 'd', text: '$12$', isCorrect: false },
            ],
            solution: 'Vekstfaktor for økning: $1 + \\frac{12}{100} = 1{,}12$.',
          },
          {
            id: '8-1-4-n-quiz3-q1',
            task: 'En sykkel koster $4\\,500$ kr. Prisen øker med $10\\%$. Hva er den nye prisen?',
            options: [
              { id: 'a', text: '$4\\,550$ kr', isCorrect: false },
              { id: 'b', text: '$4\\,950$ kr', isCorrect: true },
              { id: 'c', text: '$5\\,400$ kr', isCorrect: false },
              { id: 'd', text: '$4\\,050$ kr', isCorrect: false },
            ],
            solution: '$4\\,500 \\times 1{,}10 = 4\\,950$ kr.',
          },
          {
            id: '8-1-4-n-quiz3-q2',
            task: 'En ting var $200$ kr og ble satt ned $40\\%$. Hva er vekstfaktoren og ny pris?',
            options: [
              { id: 'a', text: 'Vekstfaktor $0{,}40$, ny pris $80$ kr', isCorrect: false },
              { id: 'b', text: 'Vekstfaktor $1{,}40$, ny pris $280$ kr', isCorrect: false },
              { id: 'c', text: 'Vekstfaktor $0{,}60$, ny pris $120$ kr', isCorrect: true },
              { id: 'd', text: 'Vekstfaktor $0{,}60$, ny pris $80$ kr', isCorrect: false },
            ],
            solution: 'Vekstfaktor: $1 - 0{,}40 = 0{,}60$. Ny pris: $200 \\times 0{,}60 = 120$ kr.',
          },
        ],
      },
    },

    {
      id: '8-1-4-n-summary',
      type: 'text',
      content: `## Oppsummering

**Prosent** betyr «per hundre»: $1\\% = \\frac{1}{100} = 0{,}01$.

**Omregning:**
- Prosent til desimaltall: del med $100$
- Desimaltall til prosent: gang med $100$
- Prosent til brøk: skriv over $100$ og forkort

**Prosentregning:**
- $X\\%$ av $Y = \\frac{X}{100} \\times Y$
- Hvor mange prosent er $X$ av $Y$: $\\frac{X}{Y} \\times 100\\%$

**Vekstfaktor:**
| Endring | Vekstfaktor | Eksempel |
|---------|-------------|----------|
| Økning $p\\%$ | $1 + \\frac{p}{100}$ | $8\\%$ økning $\\rightarrow 1{,}08$ |
| Reduksjon $p\\%$ | $1 - \\frac{p}{100}$ | $25\\%$ rabatt $\\rightarrow 0{,}75$ |

Vekstfaktor er den raskeste måten å beregne ny verdi: $\\text{ny verdi} = \\text{gammel verdi} \\times \\text{vekstfaktor}$.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.5 NARRATIV: Potenser
// ============================================================================

export const CHAPTER_8_1_5_NARRATIV: TextbookChapter = {
  id: '8-1-5-narrativ',
  courseId: '8',
  chapterNumber: '1.5',
  title: 'Potenser',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av potenser -- fra gjentatt ganging til potensregler, med eksempler fra papirfolding, bakterievekst og store tall.',
  estimatedMinutes: 30,
  competenceGoals: [
    'utforske og bruke eigenskapane ved potensar og røter i berekningar og i praktiske situasjonar',
  ],
  linkedChapterId: '8-1-5',
  content: [
    {
      id: '8-1-5-n-intro',
      type: 'text',
      content: `## Når ganging gjentar seg

Tenk deg at du legger et papirark dobbelt. Nå har du $2$ lag. Legg det dobbelt igjen -- $4$ lag. Enda en gang -- $8$ lag. For hvert brett dobles antallet:

$$2, \\quad 2 \\times 2, \\quad 2 \\times 2 \\times 2, \\quad 2 \\times 2 \\times 2 \\times 2, \\quad \\ldots$$

Det blir fort mange gangetegn! Heldigvis har matematikere en elegant forkortelse for gjentatt multiplikasjon: **potenser**. I stedet for å skrive $2 \\times 2 \\times 2 \\times 2 \\times 2$, skriver vi:

$$2^5 = 32$$

Det lille tallet oppe til høyre forteller hvor mange ganger vi ganger. Etter $10$ brett har papiret $2^{10} = 1024$ lag. Etter $20$ brett: $2^{20} = 1\\,048\\,576$ lag. Potenser vokser utrolig fort!`,
    },

    {
      id: '8-1-5-n-section1',
      type: 'text',
      content: `## Grunntall og eksponent

Når vi skriver $a^n$, har uttrykket to deler:
- $a$ kalles **grunntallet** (det tallet vi ganger)
- $n$ kalles **eksponenten** (hvor mange ganger vi ganger)

$$a^n = \\underbrace{a \\times a \\times a \\times \\cdots \\times a}_{n \\text{ faktorer}}$$

La oss se på noen eksempler:
- $3^4 = 3 \\times 3 \\times 3 \\times 3 = 81$
- $5^3 = 5 \\times 5 \\times 5 = 125$
- $10^2 = 10 \\times 10 = 100$ (vi sier «ti i andre» eller «ti opphøyd i to»)
- $10^6 = 1\\,000\\,000$ (en million!)

**Spesialtilfeller å huske:**
- $a^1 = a$ -- et tall opphøyd i $1$ er seg selv
- $a^0 = 1$ for alle $a \\neq 0$ -- et tall opphøyd i $0$ er alltid $1$
- $1^n = 1$ -- $1$ opphøyd i hva som helst er $1$

Hvorfor er $a^0 = 1$? Tenk slik: $\\frac{a^3}{a^3} = 1$ (alt delt på seg selv er $1$). Men med potensregler: $\\frac{a^3}{a^3} = a^{3-3} = a^0$. Altså må $a^0 = 1$.`,
    },

    {
      id: '8-1-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-1-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på potenser:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-1-5-n-quiz1-q0',
            task: 'Hva er $4^3$?',
            options: [
              { id: 'a', text: '$12$', isCorrect: false },
              { id: 'b', text: '$64$', isCorrect: true },
              { id: 'c', text: '$43$', isCorrect: false },
              { id: 'd', text: '$81$', isCorrect: false },
            ],
            solution: '$4^3 = 4 \\times 4 \\times 4 = 16 \\times 4 = 64$. Husk: potens er gjentatt ganging, ikke ganging med eksponenten!',
          },
          {
            id: '8-1-5-n-quiz1-q1',
            task: 'Hva er $10^4$?',
            options: [
              { id: 'a', text: '$40$', isCorrect: false },
              { id: 'b', text: '$1\\,000$', isCorrect: false },
              { id: 'c', text: '$10\\,000$', isCorrect: true },
              { id: 'd', text: '$100\\,000$', isCorrect: false },
            ],
            solution: '$10^4 = 10 \\times 10 \\times 10 \\times 10 = 10\\,000$. For $10$-potenser teller eksponenten antall nuller.',
          },
          {
            id: '8-1-5-n-quiz1-q2',
            task: 'Hva er $5^0$?',
            options: [
              { id: 'a', text: '$0$', isCorrect: false },
              { id: 'b', text: '$5$', isCorrect: false },
              { id: 'c', text: '$1$', isCorrect: true },
              { id: 'd', text: 'Udefinert', isCorrect: false },
            ],
            solution: 'Ethvert tall (unntatt $0$) opphøyd i $0$ er lik $1$. Altså er $5^0 = 1$.',
          },
        ],
      },
    },

    {
      id: '8-1-5-n-section2',
      type: 'text',
      content: `## Potenser med negative grunntall

Pass på -- det er en viktig forskjell mellom $(-3)^2$ og $-3^2$!

**$(-3)^2$:** Hele $(-3)$ opphøyes:
$$(-3)^2 = (-3) \\times (-3) = 9$$
Minus ganger minus gir pluss!

**$-3^2$:** Bare $3$ opphøyes, og minustegnet settes foran etterpå:
$$-3^2 = -(3^2) = -(9) = -9$$

**Generell regel for negative grunntall:**
- **Partall-eksponent** $\\rightarrow$ positivt svar: $(-2)^4 = 16$
- **Oddetall-eksponent** $\\rightarrow$ negativt svar: $(-2)^3 = -8$

Hvorfor? Fordi et partall par av minustegn «slår hverandre ut»:
$$(-2)^4 = (-2) \\times (-2) \\times (-2) \\times (-2) = \\underbrace{(+4)}_{\\text{par 1}} \\times \\underbrace{(+4)}_{\\text{par 2}} = 16$$

Men med et oddetall gjenstår ett minustegn:
$$(-2)^3 = (-2) \\times (-2) \\times (-2) = (+4) \\times (-2) = -8$$`,
    },

    {
      id: '8-1-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-1-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på potenser med negative grunntall:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-1-5-n-quiz2-q0',
            task: 'Hva er $(-5)^2$?',
            options: [
              { id: 'a', text: '$-25$', isCorrect: false },
              { id: 'b', text: '$25$', isCorrect: true },
              { id: 'c', text: '$-10$', isCorrect: false },
              { id: 'd', text: '$10$', isCorrect: false },
            ],
            solution: '$(-5)^2 = (-5) \\times (-5) = 25$. Partall-eksponent gir positivt svar.',
          },
          {
            id: '8-1-5-n-quiz2-q1',
            task: 'Hva er $(-2)^5$?',
            options: [
              { id: 'a', text: '$32$', isCorrect: false },
              { id: 'b', text: '$-32$', isCorrect: true },
              { id: 'c', text: '$-10$', isCorrect: false },
              { id: 'd', text: '$10$', isCorrect: false },
            ],
            solution: '$(-2)^5 = -32$. Oddetall-eksponent gir negativt svar.',
          },
          {
            id: '8-1-5-n-quiz2-q2',
            task: 'Hva er forskjellen mellom $(-4)^2$ og $-4^2$?',
            options: [
              { id: 'a', text: 'Begge er lik $16$', isCorrect: false },
              { id: 'b', text: 'Begge er lik $-16$', isCorrect: false },
              { id: 'c', text: '$(-4)^2 = 16$ og $-4^2 = -16$', isCorrect: true },
              { id: 'd', text: '$(-4)^2 = -16$ og $-4^2 = 16$', isCorrect: false },
            ],
            solution: '$(-4)^2 = (-4) \\times (-4) = 16$ (hele uttrykket opphøyes). $-4^2 = -(4^2) = -16$ (kun $4$ opphøyes).',
          },
        ],
      },
    },

    {
      id: '8-1-5-n-section3',
      type: 'text',
      content: `## De viktigste potensreglene

Potenser følger noen elegante regler som gjør det lett å forenkle uttrykk:

**Regel 1 -- Multiplikasjon med samme grunntall:**
$$a^m \\times a^n = a^{m+n}$$
Eksempel: $2^3 \\times 2^4 = 2^{3+4} = 2^7 = 128$

Logikken: $\\underbrace{2 \\times 2 \\times 2}_{3 \\text{ stk}} \\times \\underbrace{2 \\times 2 \\times 2 \\times 2}_{4 \\text{ stk}} = \\underbrace{2 \\times 2 \\times \\cdots \\times 2}_{7 \\text{ stk}}$

**Regel 2 -- Divisjon med samme grunntall:**
$$a^m \\div a^n = a^{m-n}$$
Eksempel: $5^6 \\div 5^2 = 5^{6-2} = 5^4 = 625$

**Regel 3 -- Potens av potens:**
$$(a^m)^n = a^{m \\cdot n}$$
Eksempel: $(3^2)^3 = 3^{2 \\cdot 3} = 3^6 = 729$

**Regel 4 -- Potens av produkt:**
$$(a \\cdot b)^n = a^n \\cdot b^n$$
Eksempel: $(2 \\cdot 5)^3 = 2^3 \\cdot 5^3 = 8 \\cdot 125 = 1000$

**Viktig:** Regel 1 og 2 gjelder bare når **grunntallene er like**. Du kan ikke forenkle $2^3 \\times 3^4$ med disse reglene!`,
    },

    {
      id: '8-1-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-1-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på potensregler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-1-5-n-quiz3-q0',
            task: 'Forenkle $4^3 \\times 4^2$.',
            options: [
              { id: 'a', text: '$4^6$', isCorrect: false },
              { id: 'b', text: '$4^5$', isCorrect: true },
              { id: 'c', text: '$16^5$', isCorrect: false },
              { id: 'd', text: '$4^1$', isCorrect: false },
            ],
            solution: 'Multiplikasjon med samme grunntall: $4^3 \\times 4^2 = 4^{3+2} = 4^5$.',
          },
          {
            id: '8-1-5-n-quiz3-q1',
            task: 'Forenkle $(2^4)^3$.',
            options: [
              { id: 'a', text: '$2^7$', isCorrect: false },
              { id: 'b', text: '$2^{12}$', isCorrect: true },
              { id: 'c', text: '$2^{64}$', isCorrect: false },
              { id: 'd', text: '$6^4$', isCorrect: false },
            ],
            solution: 'Potens av potens: $(2^4)^3 = 2^{4 \\cdot 3} = 2^{12}$.',
          },
          {
            id: '8-1-5-n-quiz3-q2',
            task: 'Hva er $\\frac{7^8}{7^5}$?',
            options: [
              { id: 'a', text: '$7^{40}$', isCorrect: false },
              { id: 'b', text: '$7^{13}$', isCorrect: false },
              { id: 'c', text: '$7^3$', isCorrect: true },
              { id: 'd', text: '$1^3$', isCorrect: false },
            ],
            solution: 'Divisjon med samme grunntall: $\\frac{7^8}{7^5} = 7^{8-5} = 7^3 = 343$.',
          },
        ],
      },
    },

    {
      id: '8-1-5-n-section4',
      type: 'text',
      content: `## Tier-potenser og store tall

Potenser med grunntall $10$ er spesielt nyttige fordi de tilsvarer antall nuller:

$$10^1 = 10, \\quad 10^2 = 100, \\quad 10^3 = 1\\,000, \\quad 10^6 = 1\\,000\\,000$$

Dette gjør det enkelt å skrive store tall:
- Jordens omløpsbane rundt solen: ca. $9{,}4 \\times 10^{8}$ km
- Antall sand-korn på jorden: ca. $7{,}5 \\times 10^{18}$
- Antall stjerner i universet: ca. $10^{24}$

Å skrive tall med tier-potenser kalles **titallsform** (eller standardform). Formen er:

$$a \\times 10^n \\quad \\text{der } 1 \\leq a < 10$$

For eksempel: $45\\,000 = 4{,}5 \\times 10^4$ og $0{,}003 = 3 \\times 10^{-3}$.

Tier-potenser gjør det lett å sammenligne store tall. Hva er størst: $3 \\times 10^7$ eller $9 \\times 10^6$? Svaret er $3 \\times 10^7 = 30\\,000\\,000$, mens $9 \\times 10^6 = 9\\,000\\,000$. Eksponenten er viktigst!`,
    },

    {
      id: '8-1-5-n-summary',
      type: 'text',
      content: `## Oppsummering

**Potenser** er en forkortelse for gjentatt multiplikasjon: $a^n$ betyr $a$ ganget med seg selv $n$ ganger.

**Spesialtilfeller:** $a^1 = a$, $\\quad a^0 = 1$ (for $a \\neq 0$)

**Negative grunntall:**
- Partall-eksponent gir positivt svar: $(-3)^2 = 9$
- Oddetall-eksponent gir negativt svar: $(-3)^3 = -27$
- $(-a)^n \\neq -a^n$ når $n$ er partall!

**Potensregler:**
| Regel | Formel |
|-------|--------|
| Multiplikasjon | $a^m \\times a^n = a^{m+n}$ |
| Divisjon | $a^m \\div a^n = a^{m-n}$ |
| Potens av potens | $(a^m)^n = a^{m \\cdot n}$ |
| Potens av produkt | $(ab)^n = a^n \\cdot b^n$ |

**Tier-potenser:** $10^n$ gir et $1$-tall fulgt av $n$ nuller. Nyttig for store og små tall.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport
// ============================================================================

export const MATEMATIKK_8_NARRATIV_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_8_1_1_NARRATIV,
  CHAPTER_8_1_2_NARRATIV,
  CHAPTER_8_1_3_NARRATIV,
  CHAPTER_8_1_4_NARRATIV,
  CHAPTER_8_1_5_NARRATIV,
];
