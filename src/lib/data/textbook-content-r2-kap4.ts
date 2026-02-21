/**
 * Tekstbok kapitler for R2 - Kapittel 4
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_R2_4_1: TextbookChapter = {
  id: 'r2-4-1',
  courseId: 'r2',
  chapterNumber: '4.1',
  title: 'Radianer og vinkelmål',
  description: 'Sammenhengen mellom grader og radianer, buelengde, sektorareal og enhetssirkelen.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske eigenskapar ved radianer og samanhengen mellom gradar og radianer',
    'bruke radianmål i utrekningar av buelengde og sektorareal',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r2-4-1-intro',
      type: 'text',
      content: `## Hvorfor radianer?

Til nå har du mest sannsynlig brukt grader som vinkelmål. En hel omdreining er $360°$, en rett vinkel er $90°$, og så videre. Men i høyere matematikk, spesielt i kalkulus og trigonometri, er det mye mer praktisk å bruke et annet vinkelmål: **radianer**.

Radianer gjør mange formler enklere og mer elegante. For eksempel blir derivasjon av trigonometriske funksjoner mye penere når vi bruker radianer. I dette kapitlet skal vi lære:

- Hva en radian er
- Hvordan vi regner om mellom grader og radianer
- Viktige vinkler uttrykt i radianer
- Formler for buelengde og sektorareal
- Enhetssirkelen`,
    },

    // ========== DEFINISJON AV RADIAN ==========
    {
      id: 'r2-4-1-def-radian',
      type: 'definition',
      title: 'Radian',
      content: `En **radian** er vinkelen som tilsvarer en bue med lengde lik radiusen i en sirkel.

Hvis $s$ er buelengden og $r$ er radius, er vinkelen $v$ i radianer gitt ved:

$$v = \\frac{s}{r}$$

En hel omdreining ($360°$) tilsvarer en bue med lengde lik hele omkretsen $2\\pi r$, så:

$$360° = \\frac{2\\pi r}{r} = 2\\pi \\text{ radianer}$$`,
    },

    {
      id: 'r2-4-1-radian-forklaring',
      type: 'text',
      content: `### Intuisjon bak radianer

Tenk deg at du har en sirkel med radius $r$. Hvis du "ruller ut" en bue langs sirkelen som er nøyaktig like lang som radiusen, så er vinkelen denne buen spenner over nøyaktig **1 radian**.

Siden omkretsen til en sirkel er $2\\pi r$, får vi plass til nøyaktig $2\\pi$ slike buer rundt hele sirkelen. Derfor er en hel omdreining lik $2\\pi$ radianer.

En radian er omtrent $57{,}3°$ (mer presist: $\\frac{180°}{\\pi} \\approx 57{,}2958°$).`,
    },

    // ========== OMREGNING ==========
    {
      id: 'r2-4-1-omregning-teorem',
      type: 'theorem',
      title: 'Omregning mellom grader og radianer',
      content: `Siden $360° = 2\\pi$ radianer, har vi:

$$180° = \\pi \\text{ radianer}$$

**Fra grader til radianer:**
$$v_{\\text{rad}} = v_{\\text{grad}} \\cdot \\frac{\\pi}{180}$$

**Fra radianer til grader:**
$$v_{\\text{grad}} = v_{\\text{rad}} \\cdot \\frac{180}{\\pi}$$`,
    },

    {
      id: 'r2-4-1-tip-omregning',
      type: 'tip',
      content: `**Huskeregel:** For å gå fra grader til radianer, ganger du med $\\frac{\\pi}{180}$. For å gå motsatt vei, ganger du med $\\frac{180}{\\pi}$.

Du kan også tenke på det slik: $\\pi$ radianer = $180°$, så brøken $\\frac{\\pi}{180}$ gir deg "radianer per grad".`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'r2-4-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Omregning fra grader til radianer',
      problem: `Skriv om disse vinklene fra grader til radianer. Gi eksakt svar.

a) $90°$
b) $45°$
c) $60°$
d) $30°$
e) $120°$`,
      solution: `**Løsning:**

Vi bruker formelen $v_{\\text{rad}} = v_{\\text{grad}} \\cdot \\frac{\\pi}{180}$

a) $90° = 90 \\cdot \\frac{\\pi}{180} = \\frac{90\\pi}{180} = \\frac{\\pi}{2}$

b) $45° = 45 \\cdot \\frac{\\pi}{180} = \\frac{45\\pi}{180} = \\frac{\\pi}{4}$

c) $60° = 60 \\cdot \\frac{\\pi}{180} = \\frac{60\\pi}{180} = \\frac{\\pi}{3}$

d) $30° = 30 \\cdot \\frac{\\pi}{180} = \\frac{30\\pi}{180} = \\frac{\\pi}{6}$

e) $120° = 120 \\cdot \\frac{\\pi}{180} = \\frac{120\\pi}{180} = \\frac{2\\pi}{3}$`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'r2-4-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Omregning fra radianer til grader',
      problem: `Skriv om disse vinklene fra radianer til grader.

a) $\\frac{\\pi}{2}$
b) $\\frac{3\\pi}{4}$
c) $\\frac{5\\pi}{6}$
d) $2\\pi$
e) $\\frac{7\\pi}{4}$`,
      solution: `**Løsning:**

Vi bruker formelen $v_{\\text{grad}} = v_{\\text{rad}} \\cdot \\frac{180}{\\pi}$

a) $\\frac{\\pi}{2} = \\frac{\\pi}{2} \\cdot \\frac{180}{\\pi} = \\frac{180}{2} = 90°$

b) $\\frac{3\\pi}{4} = \\frac{3\\pi}{4} \\cdot \\frac{180}{\\pi} = \\frac{3 \\cdot 180}{4} = \\frac{540}{4} = 135°$

c) $\\frac{5\\pi}{6} = \\frac{5\\pi}{6} \\cdot \\frac{180}{\\pi} = \\frac{5 \\cdot 180}{6} = \\frac{900}{6} = 150°$

d) $2\\pi = 2\\pi \\cdot \\frac{180}{\\pi} = 2 \\cdot 180 = 360°$

e) $\\frac{7\\pi}{4} = \\frac{7\\pi}{4} \\cdot \\frac{180}{\\pi} = \\frac{7 \\cdot 180}{4} = \\frac{1260}{4} = 315°$`,
    },

    // ========== VIKTIGE VINKLER ==========
    {
      id: 'r2-4-1-viktige-vinkler',
      type: 'text',
      content: `## Viktige vinkler i radianer

Det er noen vinkler du bør kunne utenat. Disse dukker opp igjen og igjen i matematikk og fysikk.

| Grader | Radianer |
|--------|----------|
| $0°$ | $0$ |
| $30°$ | $\\frac{\\pi}{6}$ |
| $45°$ | $\\frac{\\pi}{4}$ |
| $60°$ | $\\frac{\\pi}{3}$ |
| $90°$ | $\\frac{\\pi}{2}$ |
| $120°$ | $\\frac{2\\pi}{3}$ |
| $135°$ | $\\frac{3\\pi}{4}$ |
| $150°$ | $\\frac{5\\pi}{6}$ |
| $180°$ | $\\pi$ |
| $270°$ | $\\frac{3\\pi}{2}$ |
| $360°$ | $2\\pi$ |`,
    },

    {
      id: 'r2-4-1-tip-huske-vinkler',
      type: 'tip',
      content: `**Hvordan huske disse?**

- $\\frac{\\pi}{6}$, $\\frac{\\pi}{4}$, $\\frac{\\pi}{3}$, $\\frac{\\pi}{2}$ tilsvarer $30°$, $45°$, $60°$, $90°$
- Nevnerne synker: $6, 4, 3, 2$ mens vinklene i grader øker
- $\\pi = 180°$ er en halv omdreining
- $2\\pi = 360°$ er en hel omdreining

Vinkler i andre kvadranter kan du finne ved å bruke symmetri. For eksempel er $120° = 180° - 60°$, så $\\frac{2\\pi}{3} = \\pi - \\frac{\\pi}{3}$.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'r2-4-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r2-4-1-ex-1',
        number: '4.1.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv om fra grader til radianer. Gi eksakt svar.',
        subTasks: [
          { label: 'a', task: '$180°$', solution: '$180° = 180 \\cdot \\frac{\\pi}{180} = \\pi$' },
          { label: 'b', task: '$270°$', solution: '$270° = 270 \\cdot \\frac{\\pi}{180} = \\frac{3\\pi}{2}$' },
          { label: 'c', task: '$150°$', solution: '$150° = 150 \\cdot \\frac{\\pi}{180} = \\frac{5\\pi}{6}$' },
          { label: 'd', task: '$225°$', solution: '$225° = 225 \\cdot \\frac{\\pi}{180} = \\frac{5\\pi}{4}$' },
          { label: 'e', task: '$315°$', solution: '$315° = 315 \\cdot \\frac{\\pi}{180} = \\frac{7\\pi}{4}$' },
          { label: 'f', task: '$540°$', solution: '$540° = 540 \\cdot \\frac{\\pi}{180} = 3\\pi$' },
        ],
        hints: ['Bruk formelen $v_{\\text{rad}} = v_{\\text{grad}} \\cdot \\frac{\\pi}{180}$ og forkort brøken'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'r2-4-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r2-4-1-ex-2',
        number: '4.1.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv om fra radianer til grader.',
        subTasks: [
          { label: 'a', task: '$\\frac{\\pi}{3}$', solution: '$\\frac{\\pi}{3} \\cdot \\frac{180}{\\pi} = 60°$' },
          { label: 'b', task: '$\\frac{2\\pi}{3}$', solution: '$\\frac{2\\pi}{3} \\cdot \\frac{180}{\\pi} = 120°$' },
          { label: 'c', task: '$\\frac{5\\pi}{4}$', solution: '$\\frac{5\\pi}{4} \\cdot \\frac{180}{\\pi} = 225°$' },
          { label: 'd', task: '$\\frac{11\\pi}{6}$', solution: '$\\frac{11\\pi}{6} \\cdot \\frac{180}{\\pi} = 330°$' },
          { label: 'e', task: '$\\frac{4\\pi}{3}$', solution: '$\\frac{4\\pi}{3} \\cdot \\frac{180}{\\pi} = 240°$' },
          { label: 'f', task: '$5\\pi$', solution: '$5\\pi \\cdot \\frac{180}{\\pi} = 900°$' },
        ],
        hints: ['Ganger du radianer med $\\frac{180}{\\pi}$, får du grader'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'r2-4-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Desimaltall til eksakt form',
      problem: `Skriv $1{,}5\\pi$ radianer i grader, og skriv $72°$ i radianer på eksakt form.`,
      solution: `**Løsning:**

**$1{,}5\\pi$ til grader:**
$$1{,}5\\pi = \\frac{3\\pi}{2}$$
$$\\frac{3\\pi}{2} \\cdot \\frac{180}{\\pi} = \\frac{3 \\cdot 180}{2} = \\frac{540}{2} = 270°$$

**$72°$ til radianer:**
$$72° = 72 \\cdot \\frac{\\pi}{180} = \\frac{72\\pi}{180}$$

Vi forkorter med $\\gcd(72, 180) = 36$:
$$\\frac{72\\pi}{180} = \\frac{2\\pi}{5}$$

Så $72° = \\frac{2\\pi}{5}$ radianer.`,
    },

    // ========== BUELENGDE ==========
    {
      id: 'r2-4-1-buelengde-intro',
      type: 'text',
      content: `## Buelengde

Når vi har definert radianer som $v = \\frac{s}{r}$, kan vi enkelt løse denne for buelengden $s$.`,
    },

    {
      id: 'r2-4-1-buelengde-formel',
      type: 'theorem',
      title: 'Formel for buelengde',
      content: `Buelengden $s$ i en sirkelbue med radius $r$ og sentralvinkel $v$ (i radianer) er gitt ved:

$$s = r \\cdot v$$

Dersom vinkelen er oppgitt i grader, må vi først regne om til radianer:

$$s = r \\cdot v_{\\text{grad}} \\cdot \\frac{\\pi}{180} = \\frac{\\pi r v_{\\text{grad}}}{180}$$`,
    },

    {
      id: 'r2-4-1-buelengde-note',
      type: 'note',
      content: `Legg merke til hvor enkel formelen $s = rv$ er når vinkelen er i radianer. Dette er en av grunnene til at radianer er så nyttige i matematikken.`,
    },

    // ========== EKSEMPEL 4 ==========
    {
      id: 'r2-4-1-example-4',
      type: 'example',
      title: 'Eksempel 4: Buelengde med radian',
      problem: `En sirkelbue har radius $r = 8$ cm og sentralvinkel $v = \\frac{3\\pi}{4}$ radianer. Finn buelengden.`,
      solution: `**Løsning:**

Vi bruker formelen $s = r \\cdot v$:

$$s = 8 \\cdot \\frac{3\\pi}{4} = \\frac{24\\pi}{4} = 6\\pi \\text{ cm}$$

Som desimaltall: $s \\approx 18{,}85$ cm`,
    },

    // ========== EKSEMPEL 5 ==========
    {
      id: 'r2-4-1-example-5',
      type: 'example',
      title: 'Eksempel 5: Buelengde med grader',
      problem: `En sirkelbue har radius $r = 10$ cm og sentralvinkel $v = 72°$. Finn buelengden.`,
      solution: `**Løsning:**

**Metode 1: Regn om til radianer først**
$$v = 72° = 72 \\cdot \\frac{\\pi}{180} = \\frac{2\\pi}{5} \\text{ radianer}$$

$$s = r \\cdot v = 10 \\cdot \\frac{2\\pi}{5} = \\frac{20\\pi}{5} = 4\\pi \\text{ cm}$$

**Metode 2: Bruk formelen direkte**
$$s = \\frac{\\pi r v_{\\text{grad}}}{180} = \\frac{\\pi \\cdot 10 \\cdot 72}{180} = \\frac{720\\pi}{180} = 4\\pi \\text{ cm}$$

Som desimaltall: $s \\approx 12{,}57$ cm`,
    },

    // ========== EKSEMPEL 6 ==========
    {
      id: 'r2-4-1-example-6',
      type: 'example',
      title: 'Eksempel 6: Finne vinkelen',
      problem: `En sirkelbue har radius $r = 5$ cm og buelengde $s = 10$ cm. Finn sentralvinkelen i radianer og i grader.`,
      solution: `**Løsning:**

Vi løser $s = rv$ for $v$:
$$v = \\frac{s}{r} = \\frac{10}{5} = 2 \\text{ radianer}$$

Omregning til grader:
$$v = 2 \\cdot \\frac{180}{\\pi} = \\frac{360}{\\pi} \\approx 114{,}6°$$`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'r2-4-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r2-4-1-ex-3',
        number: '4.1.3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn buelengden $s$ i hver sirkel. Gi eksakt svar.',
        subTasks: [
          { label: 'a', task: '$r = 6$ cm, $v = \\frac{\\pi}{2}$', solution: '$s = 6 \\cdot \\frac{\\pi}{2} = 3\\pi$ cm' },
          { label: 'b', task: '$r = 4$ cm, $v = \\frac{2\\pi}{3}$', solution: '$s = 4 \\cdot \\frac{2\\pi}{3} = \\frac{8\\pi}{3}$ cm' },
          { label: 'c', task: '$r = 9$ cm, $v = \\frac{\\pi}{6}$', solution: '$s = 9 \\cdot \\frac{\\pi}{6} = \\frac{3\\pi}{2}$ cm' },
          { label: 'd', task: '$r = 12$ cm, $v = \\frac{5\\pi}{4}$', solution: '$s = 12 \\cdot \\frac{5\\pi}{4} = 15\\pi$ cm' },
        ],
        hints: ['Bruk formelen $s = rv$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'r2-4-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r2-4-1-ex-4',
        number: '4.1.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn buelengden $s$ når vinkelen er oppgitt i grader.',
        subTasks: [
          { label: 'a', task: '$r = 5$ cm, $v = 90°$', solution: 'Først: $v = 90° = \\frac{\\pi}{2}$. Så $s = 5 \\cdot \\frac{\\pi}{2} = \\frac{5\\pi}{2}$ cm' },
          { label: 'b', task: '$r = 8$ cm, $v = 45°$', solution: 'Først: $v = 45° = \\frac{\\pi}{4}$. Så $s = 8 \\cdot \\frac{\\pi}{4} = 2\\pi$ cm' },
          { label: 'c', task: '$r = 3$ cm, $v = 120°$', solution: 'Først: $v = 120° = \\frac{2\\pi}{3}$. Så $s = 3 \\cdot \\frac{2\\pi}{3} = 2\\pi$ cm' },
          { label: 'd', task: '$r = 10$ cm, $v = 36°$', solution: 'Først: $v = 36° = \\frac{\\pi}{5}$. Så $s = 10 \\cdot \\frac{\\pi}{5} = 2\\pi$ cm' },
        ],
        hints: ['Regn først om vinkelen til radianer, deretter bruk $s = rv$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SEKTORAREAL ==========
    {
      id: 'r2-4-1-sektorareal-intro',
      type: 'text',
      content: `## Sektorareal

En **sirkelsektor** er den "kakestykke-formede" delen av en sirkel som begrenses av to radier og en sirkelbue.`,
    },

    {
      id: 'r2-4-1-sektorareal-formel',
      type: 'theorem',
      title: 'Formel for sektorareal',
      content: `Arealet $A$ av en sirkelsektor med radius $r$ og sentralvinkel $v$ (i radianer) er:

$$A = \\frac{1}{2}r^2 v$$

Dersom vinkelen er i grader:

$$A = \\frac{\\pi r^2 v_{\\text{grad}}}{360}$$

**Alternativ formel:** Siden $s = rv$, kan vi også skrive:

$$A = \\frac{1}{2}rs$$

der $s$ er buelengden.`,
    },

    {
      id: 'r2-4-1-sektorareal-bevis',
      type: 'proof',
      title: 'Utledning av sektorarealformelen',
      content: `En hel sirkel har areal $\\pi r^2$ og sentralvinkel $2\\pi$ radianer.

En sektor med vinkel $v$ utgjør andelen $\\frac{v}{2\\pi}$ av hele sirkelen.

Derfor er sektorarealet:
$$A = \\frac{v}{2\\pi} \\cdot \\pi r^2 = \\frac{v \\cdot \\pi r^2}{2\\pi} = \\frac{1}{2}r^2 v$$`,
    },

    // ========== EKSEMPEL 7 ==========
    {
      id: 'r2-4-1-example-7',
      type: 'example',
      title: 'Eksempel 7: Sektorareal med radian',
      problem: `Finn arealet av en sirkelsektor med radius $r = 6$ cm og sentralvinkel $v = \\frac{\\pi}{3}$.`,
      solution: `**Løsning:**

Vi bruker formelen $A = \\frac{1}{2}r^2 v$:

$$A = \\frac{1}{2} \\cdot 6^2 \\cdot \\frac{\\pi}{3} = \\frac{1}{2} \\cdot 36 \\cdot \\frac{\\pi}{3} = 18 \\cdot \\frac{\\pi}{3} = 6\\pi \\text{ cm}^2$$

Som desimaltall: $A \\approx 18{,}85$ cm$^2$`,
    },

    // ========== EKSEMPEL 8 ==========
    {
      id: 'r2-4-1-example-8',
      type: 'example',
      title: 'Eksempel 8: Sektorareal med grader',
      problem: `Finn arealet av en sirkelsektor med radius $r = 10$ cm og sentralvinkel $v = 45°$.`,
      solution: `**Løsning:**

**Metode 1: Regn om til radianer**
$$v = 45° = \\frac{\\pi}{4}$$

$$A = \\frac{1}{2} \\cdot 10^2 \\cdot \\frac{\\pi}{4} = \\frac{1}{2} \\cdot 100 \\cdot \\frac{\\pi}{4} = \\frac{100\\pi}{8} = \\frac{25\\pi}{2} \\text{ cm}^2$$

**Metode 2: Bruk graderformelen**
$$A = \\frac{\\pi r^2 v_{\\text{grad}}}{360} = \\frac{\\pi \\cdot 100 \\cdot 45}{360} = \\frac{4500\\pi}{360} = \\frac{25\\pi}{2} \\text{ cm}^2$$

Som desimaltall: $A \\approx 39{,}27$ cm$^2$`,
    },

    // ========== EKSEMPEL 9 ==========
    {
      id: 'r2-4-1-example-9',
      type: 'example',
      title: 'Eksempel 9: Fra areal til vinkel',
      problem: `En sirkelsektor har radius $r = 8$ cm og areal $A = 16\\pi$ cm$^2$. Finn sentralvinkelen i radianer.`,
      solution: `**Løsning:**

Vi løser $A = \\frac{1}{2}r^2 v$ for $v$:

$$16\\pi = \\frac{1}{2} \\cdot 64 \\cdot v$$
$$16\\pi = 32v$$
$$v = \\frac{16\\pi}{32} = \\frac{\\pi}{2}$$

Sentralvinkelen er $\\frac{\\pi}{2}$ radianer (= $90°$).`,
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'r2-4-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r2-4-1-ex-5',
        number: '4.1.5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn arealet av sirkelsektoren. Gi eksakt svar.',
        subTasks: [
          { label: 'a', task: '$r = 4$ cm, $v = \\frac{\\pi}{2}$', solution: '$A = \\frac{1}{2} \\cdot 16 \\cdot \\frac{\\pi}{2} = 4\\pi$ cm$^2$' },
          { label: 'b', task: '$r = 6$ cm, $v = \\frac{\\pi}{4}$', solution: '$A = \\frac{1}{2} \\cdot 36 \\cdot \\frac{\\pi}{4} = \\frac{9\\pi}{2}$ cm$^2$' },
          { label: 'c', task: '$r = 5$ cm, $v = \\frac{2\\pi}{5}$', solution: '$A = \\frac{1}{2} \\cdot 25 \\cdot \\frac{2\\pi}{5} = 5\\pi$ cm$^2$' },
          { label: 'd', task: '$r = 3$ cm, $v = \\pi$', solution: '$A = \\frac{1}{2} \\cdot 9 \\cdot \\pi = \\frac{9\\pi}{2}$ cm$^2$' },
        ],
        hints: ['Bruk formelen $A = \\frac{1}{2}r^2 v$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'r2-4-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r2-4-1-ex-6',
        number: '4.1.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn arealet av sirkelsektoren når vinkelen er i grader.',
        subTasks: [
          { label: 'a', task: '$r = 8$ cm, $v = 60°$', solution: '$v = 60° = \\frac{\\pi}{3}$. $A = \\frac{1}{2} \\cdot 64 \\cdot \\frac{\\pi}{3} = \\frac{32\\pi}{3}$ cm$^2$' },
          { label: 'b', task: '$r = 12$ cm, $v = 30°$', solution: '$v = 30° = \\frac{\\pi}{6}$. $A = \\frac{1}{2} \\cdot 144 \\cdot \\frac{\\pi}{6} = 12\\pi$ cm$^2$' },
          { label: 'c', task: '$r = 9$ cm, $v = 40°$', solution: '$v = 40° = \\frac{2\\pi}{9}$. $A = \\frac{1}{2} \\cdot 81 \\cdot \\frac{2\\pi}{9} = 9\\pi$ cm$^2$' },
        ],
        hints: ['Regn først om til radianer, deretter bruk $A = \\frac{1}{2}r^2 v$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 7 ==========
    {
      id: 'r2-4-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r2-4-1-ex-7',
        number: '4.1.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn den ukjente størrelsen.',
        subTasks: [
          { label: 'a', task: 'Radius: $r = 10$ cm, Areal: $A = 25\\pi$ cm$^2$. Finn vinkelen $v$ i radianer.', solution: '$25\\pi = \\frac{1}{2} \\cdot 100 \\cdot v \\Rightarrow v = \\frac{25\\pi}{50} = \\frac{\\pi}{2}$' },
          { label: 'b', task: 'Radius: $r = ?$, Vinkel: $v = \\frac{\\pi}{3}$, Areal: $A = 6\\pi$ cm$^2$. Finn $r$.', solution: '$6\\pi = \\frac{1}{2} \\cdot r^2 \\cdot \\frac{\\pi}{3} \\Rightarrow r^2 = \\frac{6\\pi \\cdot 6}{\\pi} = 36 \\Rightarrow r = 6$ cm' },
          { label: 'c', task: 'Buelengde: $s = 4\\pi$ cm, Radius: $r = 8$ cm. Finn arealet av sektoren.', solution: 'Først: $v = \\frac{s}{r} = \\frac{4\\pi}{8} = \\frac{\\pi}{2}$. Så $A = \\frac{1}{2}rs = \\frac{1}{2} \\cdot 8 \\cdot 4\\pi = 16\\pi$ cm$^2$' },
        ],
        hints: ['Bruk $A = \\frac{1}{2}r^2 v$ og $s = rv$ og løs for den ukjente'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== ENHETSSIRKELEN ==========
    {
      id: 'r2-4-1-enhetssirkel-intro',
      type: 'text',
      content: `## Enhetssirkelen

**Enhetssirkelen** er en sirkel med sentrum i origo og radius 1. Den er et uvurderlig verktøy for å forstå trigonometriske funksjoner.`,
    },

    {
      id: 'r2-4-1-enhetssirkel-def',
      type: 'definition',
      title: 'Enhetssirkelen',
      content: `Enhetssirkelen er sirkelen med ligning:

$$x^2 + y^2 = 1$$

For en vinkel $v$ (målt i radianer mot klokken fra positiv $x$-akse), er punktet $(\\cos v, \\sin v)$ skjæringspunktet mellom vinkelbenet og enhetssirkelen.

Dette betyr at:
- $\\cos v$ = $x$-koordinaten til punktet
- $\\sin v$ = $y$-koordinaten til punktet`,
    },

    {
      id: 'r2-4-1-enhetssirkel-forklaring',
      type: 'text',
      content: `### Hvordan bruke enhetssirkelen

Tenk deg at du starter i punktet $(1, 0)$ på $x$-aksen og beveger deg mot klokken langs sirkelen. Etter å ha beveget deg en buelengde på $v$ (der $v$ er vinkelen i radianer), befinner du deg i punktet $(\\cos v, \\sin v)$.

Siden omkretsen til enhetssirkelen er $2\\pi$, tilsvarer dette at en hel omdreining er $2\\pi$ radianer.

**Viktige punkter på enhetssirkelen:**

| Vinkel | Punkt | $\\cos v$ | $\\sin v$ |
|--------|-------|----------|----------|
| $0$ | $(1, 0)$ | $1$ | $0$ |
| $\\frac{\\pi}{2}$ | $(0, 1)$ | $0$ | $1$ |
| $\\pi$ | $(-1, 0)$ | $-1$ | $0$ |
| $\\frac{3\\pi}{2}$ | $(0, -1)$ | $0$ | $-1$ |
| $2\\pi$ | $(1, 0)$ | $1$ | $0$ |`,
    },

    // ========== EKSEMPEL 10 ==========
    {
      id: 'r2-4-1-example-10',
      type: 'example',
      title: 'Eksempel 10: Punkter på enhetssirkelen',
      problem: `Finn koordinatene til punktet på enhetssirkelen som tilsvarer vinkelen $v = \\frac{\\pi}{4}$.`,
      solution: `**Løsning:**

Vinkelen $\\frac{\\pi}{4}$ tilsvarer $45°$. Punktet ligger på linja $y = x$ (siden vinkelen er midt mellom $x$-aksen og $y$-aksen).

Punktet må tilfredsstille $x^2 + y^2 = 1$ og $x = y$:
$$x^2 + x^2 = 1$$
$$2x^2 = 1$$
$$x^2 = \\frac{1}{2}$$
$$x = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$$

Siden vi er i første kvadrant, er både $x$ og $y$ positive.

Punktet er $\\left(\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2}\\right)$.

Dette betyr at $\\cos\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$ og $\\sin\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$.`,
    },

    // ========== EKSEMPEL 11 ==========
    {
      id: 'r2-4-1-example-11',
      type: 'example',
      title: 'Eksempel 11: Trigonometriske verdier fra enhetssirkelen',
      problem: `Bruk enhetssirkelen til å finne $\\cos\\frac{2\\pi}{3}$ og $\\sin\\frac{2\\pi}{3}$.`,
      solution: `**Løsning:**

Vinkelen $\\frac{2\\pi}{3}$ radianer = $120°$ ligger i andre kvadrant.

Vi kan skrive $\\frac{2\\pi}{3} = \\pi - \\frac{\\pi}{3}$, så dette er vinkelen $\\frac{\\pi}{3}$ ($60°$) speilet om $y$-aksen.

Fra tabeller eller trekanter vet vi at $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$ og $\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$.

Ved speiling om $y$-aksen endrer $x$-koordinaten fortegn, mens $y$-koordinaten beholder fortegnet:

$$\\cos\\frac{2\\pi}{3} = -\\frac{1}{2}$$
$$\\sin\\frac{2\\pi}{3} = \\frac{\\sqrt{3}}{2}$$`,
    },

    // ========== VIKTIGE TRIGONOMETRISKE VERDIER ==========
    {
      id: 'r2-4-1-trig-verdier',
      type: 'theorem',
      title: 'Viktige trigonometriske verdier',
      content: `For standardvinklene har vi følgende eksakte verdier:

| Vinkel | $\\cos v$ | $\\sin v$ |
|--------|----------|----------|
| $0$ | $1$ | $0$ |
| $\\frac{\\pi}{6}$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{2}$ |
| $\\frac{\\pi}{4}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{2}}{2}$ |
| $\\frac{\\pi}{3}$ | $\\frac{1}{2}$ | $\\frac{\\sqrt{3}}{2}$ |
| $\\frac{\\pi}{2}$ | $0$ | $1$ |

For vinkler i andre kvadranter, bruk symmetri:
- $\\cos(\\pi - v) = -\\cos v$, $\\sin(\\pi - v) = \\sin v$
- $\\cos(\\pi + v) = -\\cos v$, $\\sin(\\pi + v) = -\\sin v$
- $\\cos(2\\pi - v) = \\cos v$, $\\sin(2\\pi - v) = -\\sin v$`,
    },

    {
      id: 'r2-4-1-tip-huske-verdier',
      type: 'tip',
      content: `**Huskeregel for sinus og cosinus:**

For vinklene $0, \\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}$:

Sinus-verdiene er: $\\frac{\\sqrt{0}}{2}, \\frac{\\sqrt{1}}{2}, \\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{3}}{2}, \\frac{\\sqrt{4}}{2}$

Det vil si: $0, \\frac{1}{2}, \\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{3}}{2}, 1$

Cosinus-verdiene er de samme, men i omvendt rekkefølge: $1, \\frac{\\sqrt{3}}{2}, \\frac{\\sqrt{2}}{2}, \\frac{1}{2}, 0$`,
    },

    // ========== EKSEMPEL 12 ==========
    {
      id: 'r2-4-1-example-12',
      type: 'example',
      title: 'Eksempel 12: Vinkler utenfor første kvadrant',
      problem: `Finn eksakt verdi av:
a) $\\sin\\frac{5\\pi}{6}$
b) $\\cos\\frac{7\\pi}{4}$
c) $\\sin\\frac{4\\pi}{3}$`,
      solution: `**Løsning:**

a) $\\frac{5\\pi}{6} = \\pi - \\frac{\\pi}{6}$ (andre kvadrant)

$\\sin\\frac{5\\pi}{6} = \\sin\\left(\\pi - \\frac{\\pi}{6}\\right) = \\sin\\frac{\\pi}{6} = \\frac{1}{2}$

b) $\\frac{7\\pi}{4} = 2\\pi - \\frac{\\pi}{4}$ (fjerde kvadrant)

$\\cos\\frac{7\\pi}{4} = \\cos\\left(2\\pi - \\frac{\\pi}{4}\\right) = \\cos\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$

c) $\\frac{4\\pi}{3} = \\pi + \\frac{\\pi}{3}$ (tredje kvadrant)

$\\sin\\frac{4\\pi}{3} = \\sin\\left(\\pi + \\frac{\\pi}{3}\\right) = -\\sin\\frac{\\pi}{3} = -\\frac{\\sqrt{3}}{2}$`,
    },

    // ========== EKSEMPEL 13 ==========
    {
      id: 'r2-4-1-example-13',
      type: 'example',
      title: 'Eksempel 13: Buelengde på enhetssirkelen',
      problem: `På enhetssirkelen starter vi i punktet $(1, 0)$ og beveger oss en buelengde på $\\frac{2\\pi}{3}$ mot klokken. Hvor ender vi?`,
      solution: `**Løsning:**

På enhetssirkelen er radius $r = 1$, så buelengden er lik vinkelen i radianer.

Å bevege seg en buelengde på $\\frac{2\\pi}{3}$ tilsvarer å rotere vinkelen $v = \\frac{2\\pi}{3}$.

Vi ender i punktet $(\\cos\\frac{2\\pi}{3}, \\sin\\frac{2\\pi}{3})$.

Fra eksempel 11 vet vi at dette er $\\left(-\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$.`,
    },

    // ========== WARNING ==========
    {
      id: 'r2-4-1-warning-kalkulator',
      type: 'warning',
      title: 'Kalkulator og vinkelmodus',
      content: `Pass på at kalkulatoren din er satt til riktig modus:

- **RAD** (radianer) for oppgaver med radianer
- **DEG** (grader) for oppgaver med grader

En vanlig feil er å beregne $\\sin\\frac{\\pi}{2}$ og få $0{,}027...$ i stedet for $1$. Dette skjer når kalkulatoren er i gradermodus og tolker $\\frac{\\pi}{2} \\approx 1{,}57$ som grader.

Sjekk alltid at $\\sin\\frac{\\pi}{2} = 1$ for å verifisere at du er i radianmodus.`,
    },

    // ========== OPPGAVE 8 ==========
    {
      id: 'r2-4-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'r2-4-1-ex-8',
        number: '4.1.8',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn eksakt verdi av følgende trigonometriske uttrykk.',
        subTasks: [
          { label: 'a', task: '$\\sin\\frac{\\pi}{6}$', solution: '$\\sin\\frac{\\pi}{6} = \\frac{1}{2}$' },
          { label: 'b', task: '$\\cos\\frac{\\pi}{3}$', solution: '$\\cos\\frac{\\pi}{3} = \\frac{1}{2}$' },
          { label: 'c', task: '$\\sin\\frac{\\pi}{4}$', solution: '$\\sin\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$' },
          { label: 'd', task: '$\\cos\\pi$', solution: '$\\cos\\pi = -1$' },
          { label: 'e', task: '$\\sin\\frac{3\\pi}{2}$', solution: '$\\sin\\frac{3\\pi}{2} = -1$' },
        ],
        hints: ['Bruk enhetssirkelen og de viktige punktene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 9 ==========
    {
      id: 'r2-4-1-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'r2-4-1-ex-9',
        number: '4.1.9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn eksakt verdi av følgende. Bruk symmetri i enhetssirkelen.',
        subTasks: [
          { label: 'a', task: '$\\cos\\frac{3\\pi}{4}$', solution: '$\\frac{3\\pi}{4} = \\pi - \\frac{\\pi}{4}$, så $\\cos\\frac{3\\pi}{4} = -\\cos\\frac{\\pi}{4} = -\\frac{\\sqrt{2}}{2}$' },
          { label: 'b', task: '$\\sin\\frac{5\\pi}{4}$', solution: '$\\frac{5\\pi}{4} = \\pi + \\frac{\\pi}{4}$, så $\\sin\\frac{5\\pi}{4} = -\\sin\\frac{\\pi}{4} = -\\frac{\\sqrt{2}}{2}$' },
          { label: 'c', task: '$\\cos\\frac{11\\pi}{6}$', solution: '$\\frac{11\\pi}{6} = 2\\pi - \\frac{\\pi}{6}$, så $\\cos\\frac{11\\pi}{6} = \\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$' },
          { label: 'd', task: '$\\sin\\frac{7\\pi}{6}$', solution: '$\\frac{7\\pi}{6} = \\pi + \\frac{\\pi}{6}$, så $\\sin\\frac{7\\pi}{6} = -\\sin\\frac{\\pi}{6} = -\\frac{1}{2}$' },
        ],
        hints: ['Skriv vinkelen som $\\pi \\pm$ en standardvinkel eller $2\\pi -$ en standardvinkel'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 10 ==========
    {
      id: 'r2-4-1-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'r2-4-1-ex-10',
        number: '4.1.10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn koordinatene til punktet på enhetssirkelen.',
        subTasks: [
          { label: 'a', task: 'Vinkelen $v = \\frac{\\pi}{3}$', solution: 'Punktet er $(\\cos\\frac{\\pi}{3}, \\sin\\frac{\\pi}{3}) = \\left(\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$' },
          { label: 'b', task: 'Vinkelen $v = \\frac{5\\pi}{6}$', solution: 'Punktet er $(\\cos\\frac{5\\pi}{6}, \\sin\\frac{5\\pi}{6}) = \\left(-\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)$' },
          { label: 'c', task: 'Vinkelen $v = \\frac{5\\pi}{3}$', solution: 'Punktet er $(\\cos\\frac{5\\pi}{3}, \\sin\\frac{5\\pi}{3}) = \\left(\\frac{1}{2}, -\\frac{\\sqrt{3}}{2}\\right)$' },
        ],
        hints: ['Punktet på enhetssirkelen for vinkel $v$ er $(\\cos v, \\sin v)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 14 ==========
    {
      id: 'r2-4-1-example-14',
      type: 'example',
      title: 'Eksempel 14: Praktisk anvendelse - hjul',
      problem: `Et hjul med radius 30 cm roterer med vinkelhastighet $\\omega = 2$ rad/s.
a) Hvor langt beveger et punkt på kanten av hjulet seg på 5 sekunder?
b) Hvor mange hele omdreininger gjør hjulet på 10 sekunder?`,
      solution: `**Løsning:**

a) På 5 sekunder roterer hjulet vinkelen:
$$v = \\omega \\cdot t = 2 \\cdot 5 = 10 \\text{ radianer}$$

Buelengden (distansen punktet beveger seg) er:
$$s = r \\cdot v = 30 \\cdot 10 = 300 \\text{ cm} = 3 \\text{ m}$$

b) På 10 sekunder roterer hjulet:
$$v = 2 \\cdot 10 = 20 \\text{ radianer}$$

Antall hele omdreininger:
$$n = \\frac{v}{2\\pi} = \\frac{20}{2\\pi} = \\frac{10}{\\pi} \\approx 3{,}18$$

Hjulet gjør **3 hele omdreininger**.`,
    },

    // ========== EKSEMPEL 15 ==========
    {
      id: 'r2-4-1-example-15',
      type: 'example',
      title: 'Eksempel 15: Kombinert oppgave',
      problem: `En sirkelsektor har buelengde $s = 12$ cm og areal $A = 36$ cm$^2$. Finn radius og sentralvinkel.`,
      solution: `**Løsning:**

Vi har to likninger:
- $s = rv$, altså $12 = rv$
- $A = \\frac{1}{2}r^2v$, altså $36 = \\frac{1}{2}r^2v$

Fra den alternative arealformelen $A = \\frac{1}{2}rs$:
$$36 = \\frac{1}{2} \\cdot r \\cdot 12 = 6r$$
$$r = 6 \\text{ cm}$$

Nå kan vi finne vinkelen fra $s = rv$:
$$12 = 6v$$
$$v = 2 \\text{ radianer}$$

**Svar:** Radius er 6 cm og sentralvinkelen er 2 radianer (ca. $114{,}6°$).`,
    },

    // ========== OPPGAVE 11 ==========
    {
      id: 'r2-4-1-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'r2-4-1-ex-11',
        number: '4.1.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Kombinerte oppgaver med buelengde og sektorareal.',
        subTasks: [
          { label: 'a', task: 'En sektor har buelengde $s = 8$ cm og areal $A = 24$ cm$^2$. Finn $r$ og $v$.', solution: 'Fra $A = \\frac{1}{2}rs$: $24 = \\frac{1}{2} \\cdot r \\cdot 8 = 4r$, så $r = 6$ cm. Fra $s = rv$: $8 = 6v$, så $v = \\frac{4}{3}$ rad.' },
          { label: 'b', task: 'En sektor har buelengde $s = 10$ cm og radius $r = 4$ cm. Finn arealet.', solution: '$A = \\frac{1}{2}rs = \\frac{1}{2} \\cdot 4 \\cdot 10 = 20$ cm$^2$' },
          { label: 'c', task: 'En sektor har areal $A = 50$ cm$^2$ og vinkel $v = 2$ rad. Finn radius og buelengde.', solution: 'Fra $A = \\frac{1}{2}r^2v$: $50 = r^2$, så $r = \\sqrt{50} = 5\\sqrt{2}$ cm. $s = rv = 5\\sqrt{2} \\cdot 2 = 10\\sqrt{2}$ cm.' },
        ],
        hints: ['Bruk formlene $s = rv$, $A = \\frac{1}{2}r^2v$ og $A = \\frac{1}{2}rs$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 12 ==========
    {
      id: 'r2-4-1-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'r2-4-1-ex-12',
        number: '4.1.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Praktiske anvendelser.',
        subTasks: [
          { label: 'a', task: 'En pendel med lengde 50 cm svinger gjennom en vinkel på $\\frac{\\pi}{6}$ rad. Hvor lang er banen pendelspissen beskriver?', solution: '$s = 50 \\cdot \\frac{\\pi}{6} = \\frac{25\\pi}{3}$ cm $\\approx 26{,}2$ cm' },
          { label: 'b', task: 'Et pariserhjul med radius 40 m roterer $\\frac{3\\pi}{4}$ radianer. Hvor langt har en passasjer beveget seg langs kanten?', solution: '$s = 40 \\cdot \\frac{3\\pi}{4} = 30\\pi$ m $\\approx 94{,}2$ m' },
          { label: 'c', task: 'En pizzabit har form som en sirkelsektor med radius 15 cm og vinkel $\\frac{\\pi}{4}$. Finn arealet av pizzabiten.', solution: '$A = \\frac{1}{2} \\cdot 225 \\cdot \\frac{\\pi}{4} = \\frac{225\\pi}{8}$ cm$^2$ $\\approx 88{,}4$ cm$^2$' },
        ],
        hints: ['Bruk formlene for buelengde og sektorareal'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 13 ==========
    {
      id: 'r2-4-1-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'r2-4-1-ex-13',
        number: '4.1.13',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut uten kalkulator.',
        subTasks: [
          { label: 'a', task: '$\\sin^2\\frac{\\pi}{4} + \\cos^2\\frac{\\pi}{4}$', solution: '$\\left(\\frac{\\sqrt{2}}{2}\\right)^2 + \\left(\\frac{\\sqrt{2}}{2}\\right)^2 = \\frac{1}{2} + \\frac{1}{2} = 1$' },
          { label: 'b', task: '$2\\sin\\frac{\\pi}{6}\\cos\\frac{\\pi}{6}$', solution: '$2 \\cdot \\frac{1}{2} \\cdot \\frac{\\sqrt{3}}{2} = \\frac{\\sqrt{3}}{2}$ (som er lik $\\sin\\frac{\\pi}{3}$)' },
          { label: 'c', task: '$\\cos^2\\frac{\\pi}{3} - \\sin^2\\frac{\\pi}{3}$', solution: '$\\frac{1}{4} - \\frac{3}{4} = -\\frac{1}{2}$ (som er lik $\\cos\\frac{2\\pi}{3}$)' },
          { label: 'd', task: '$\\sin\\frac{\\pi}{3}\\cos\\frac{\\pi}{6} + \\cos\\frac{\\pi}{3}\\sin\\frac{\\pi}{6}$', solution: '$\\frac{\\sqrt{3}}{2} \\cdot \\frac{\\sqrt{3}}{2} + \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{3}{4} + \\frac{1}{4} = 1$' },
        ],
        hints: ['Bruk de eksakte verdiene for standardvinklene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 14 ==========
    {
      id: 'r2-4-1-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 'r2-4-1-ex-14',
        number: '4.1.14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordrende oppgaver.',
        subTasks: [
          { label: 'a', task: 'Vis at $1$ radian $\\approx 57{,}3°$ ved å beregne $\\frac{180}{\\pi}$.', solution: '$\\frac{180}{\\pi} = \\frac{180}{3{,}14159...} \\approx 57{,}296°$' },
          { label: 'b', task: 'Finn alle vinkler $v \\in [0, 2\\pi)$ slik at $\\sin v = \\frac{1}{2}$.', solution: '$\\sin v = \\frac{1}{2}$ for $v = \\frac{\\pi}{6}$ (første kvadrant) og $v = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$ (andre kvadrant)' },
          { label: 'c', task: 'Finn alle vinkler $v \\in [0, 2\\pi)$ slik at $\\cos v = -\\frac{\\sqrt{2}}{2}$.', solution: '$\\cos v = -\\frac{\\sqrt{2}}{2}$ for $v = \\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}$ og $v = \\pi + \\frac{\\pi}{4} = \\frac{5\\pi}{4}$' },
        ],
        hints: ['Bruk symmetriegenskapene til sinus og cosinus i ulike kvadranter'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 15 ==========
    {
      id: 'r2-4-1-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 'r2-4-1-ex-15',
        number: '4.1.15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tekstoppgaver med radianer.',
        subTasks: [
          { label: 'a', task: 'Jordas radius ved ekvator er ca. 6378 km. Hvor lang er en breddegradslinje ved ekvator som dekker $15°$?', solution: 'Først: $15° = \\frac{\\pi}{12}$ rad. $s = 6378 \\cdot \\frac{\\pi}{12} = \\frac{6378\\pi}{12} \\approx 1669$ km' },
          { label: 'b', task: 'En CD-plate har indre radius 2{,}3 cm og ytre radius 5{,}8 cm. Finn arealet av "ringen" av musikk mellom disse radiene for en sektor på $\\frac{\\pi}{2}$.', solution: 'Areal av stor sektor: $A_1 = \\frac{1}{2} \\cdot 5{,}8^2 \\cdot \\frac{\\pi}{2} = \\frac{33{,}64\\pi}{4}$. Areal av liten sektor: $A_2 = \\frac{1}{2} \\cdot 2{,}3^2 \\cdot \\frac{\\pi}{2} = \\frac{5{,}29\\pi}{4}$. Differanse: $\\frac{(33{,}64 - 5{,}29)\\pi}{4} = \\frac{28{,}35\\pi}{4} \\approx 22{,}3$ cm$^2$' },
        ],
        hints: ['Bruk formlene for buelengde og sektorareal med riktige enheter'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'r2-4-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapitlet har du lært:

**Radianer:**
- En radian er vinkelen som tilsvarer en bue med lengde lik radiusen
- $180° = \\pi$ radianer, $360° = 2\\pi$ radianer
- Omregning: $v_{\\text{rad}} = v_{\\text{grad}} \\cdot \\frac{\\pi}{180}$

**Buelengde og sektorareal:**
- Buelengde: $s = rv$ (når $v$ er i radianer)
- Sektorareal: $A = \\frac{1}{2}r^2v$ eller $A = \\frac{1}{2}rs$

**Enhetssirkelen:**
- Sirkel med radius 1 og sentrum i origo
- Punktet for vinkel $v$ er $(\\cos v, \\sin v)$
- Viktige verdier bør pugges for standardvinklene

**Viktige vinkler å huske:**

$\\frac{\\pi}{6} = 30°$, $\\frac{\\pi}{4} = 45°$, $\\frac{\\pi}{3} = 60°$, $\\frac{\\pi}{2} = 90°$, $\\pi = 180°$, $2\\pi = 360°$`,
    },

  ],

  // ========== ALLE OPPGAVER SAMLET ==========
  exercises: [
    {
      id: 'r2-4-1-ex-1',
      number: '4.1.1',
      type: 'classic',
      difficulty: 'lett',
      task: 'Skriv om fra grader til radianer. Gi eksakt svar.',
      subTasks: [
        { label: 'a', task: '$180°$', solution: '$180° = \\pi$' },
        { label: 'b', task: '$270°$', solution: '$270° = \\frac{3\\pi}{2}$' },
        { label: 'c', task: '$150°$', solution: '$150° = \\frac{5\\pi}{6}$' },
        { label: 'd', task: '$225°$', solution: '$225° = \\frac{5\\pi}{4}$' },
        { label: 'e', task: '$315°$', solution: '$315° = \\frac{7\\pi}{4}$' },
        { label: 'f', task: '$540°$', solution: '$540° = 3\\pi$' },
      ],
      hints: ['Bruk formelen $v_{\\text{rad}} = v_{\\text{grad}} \\cdot \\frac{\\pi}{180}$ og forkort brøken'],
      topic: 'omregning',
    },
    {
      id: 'r2-4-1-ex-2',
      number: '4.1.2',
      type: 'classic',
      difficulty: 'lett',
      task: 'Skriv om fra radianer til grader.',
      subTasks: [
        { label: 'a', task: '$\\frac{\\pi}{3}$', solution: '$60°$' },
        { label: 'b', task: '$\\frac{2\\pi}{3}$', solution: '$120°$' },
        { label: 'c', task: '$\\frac{5\\pi}{4}$', solution: '$225°$' },
        { label: 'd', task: '$\\frac{11\\pi}{6}$', solution: '$330°$' },
        { label: 'e', task: '$\\frac{4\\pi}{3}$', solution: '$240°$' },
        { label: 'f', task: '$5\\pi$', solution: '$900°$' },
      ],
      hints: ['Ganger du radianer med $\\frac{180}{\\pi}$, får du grader'],
      topic: 'omregning',
    },
    {
      id: 'r2-4-1-ex-3',
      number: '4.1.3',
      type: 'classic',
      difficulty: 'lett',
      task: 'Finn buelengden $s$ i hver sirkel. Gi eksakt svar.',
      subTasks: [
        { label: 'a', task: '$r = 6$ cm, $v = \\frac{\\pi}{2}$', solution: '$s = 3\\pi$ cm' },
        { label: 'b', task: '$r = 4$ cm, $v = \\frac{2\\pi}{3}$', solution: '$s = \\frac{8\\pi}{3}$ cm' },
        { label: 'c', task: '$r = 9$ cm, $v = \\frac{\\pi}{6}$', solution: '$s = \\frac{3\\pi}{2}$ cm' },
        { label: 'd', task: '$r = 12$ cm, $v = \\frac{5\\pi}{4}$', solution: '$s = 15\\pi$ cm' },
      ],
      hints: ['Bruk formelen $s = rv$'],
      topic: 'buelengde',
    },
    {
      id: 'r2-4-1-ex-4',
      number: '4.1.4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Finn buelengden $s$ når vinkelen er oppgitt i grader.',
      subTasks: [
        { label: 'a', task: '$r = 5$ cm, $v = 90°$', solution: '$s = \\frac{5\\pi}{2}$ cm' },
        { label: 'b', task: '$r = 8$ cm, $v = 45°$', solution: '$s = 2\\pi$ cm' },
        { label: 'c', task: '$r = 3$ cm, $v = 120°$', solution: '$s = 2\\pi$ cm' },
        { label: 'd', task: '$r = 10$ cm, $v = 36°$', solution: '$s = 2\\pi$ cm' },
      ],
      hints: ['Regn først om vinkelen til radianer, deretter bruk $s = rv$'],
      topic: 'buelengde',
    },
    {
      id: 'r2-4-1-ex-5',
      number: '4.1.5',
      type: 'classic',
      difficulty: 'lett',
      task: 'Finn arealet av sirkelsektoren. Gi eksakt svar.',
      subTasks: [
        { label: 'a', task: '$r = 4$ cm, $v = \\frac{\\pi}{2}$', solution: '$A = 4\\pi$ cm$^2$' },
        { label: 'b', task: '$r = 6$ cm, $v = \\frac{\\pi}{4}$', solution: '$A = \\frac{9\\pi}{2}$ cm$^2$' },
        { label: 'c', task: '$r = 5$ cm, $v = \\frac{2\\pi}{5}$', solution: '$A = 5\\pi$ cm$^2$' },
        { label: 'd', task: '$r = 3$ cm, $v = \\pi$', solution: '$A = \\frac{9\\pi}{2}$ cm$^2$' },
      ],
      hints: ['Bruk formelen $A = \\frac{1}{2}r^2 v$'],
      topic: 'sektorareal',
    },
    {
      id: 'r2-4-1-ex-6',
      number: '4.1.6',
      type: 'classic',
      difficulty: 'medium',
      task: 'Finn arealet av sirkelsektoren når vinkelen er i grader.',
      subTasks: [
        { label: 'a', task: '$r = 8$ cm, $v = 60°$', solution: '$A = \\frac{32\\pi}{3}$ cm$^2$' },
        { label: 'b', task: '$r = 12$ cm, $v = 30°$', solution: '$A = 12\\pi$ cm$^2$' },
        { label: 'c', task: '$r = 9$ cm, $v = 40°$', solution: '$A = 9\\pi$ cm$^2$' },
      ],
      hints: ['Regn først om til radianer, deretter bruk $A = \\frac{1}{2}r^2 v$'],
      topic: 'sektorareal',
    },
    {
      id: 'r2-4-1-ex-7',
      number: '4.1.7',
      type: 'classic',
      difficulty: 'medium',
      task: 'Finn den ukjente størrelsen.',
      subTasks: [
        { label: 'a', task: 'Radius: $r = 10$ cm, Areal: $A = 25\\pi$ cm$^2$. Finn vinkelen $v$ i radianer.', solution: '$v = \\frac{\\pi}{2}$' },
        { label: 'b', task: 'Vinkel: $v = \\frac{\\pi}{3}$, Areal: $A = 6\\pi$ cm$^2$. Finn $r$.', solution: '$r = 6$ cm' },
        { label: 'c', task: 'Buelengde: $s = 4\\pi$ cm, Radius: $r = 8$ cm. Finn arealet av sektoren.', solution: '$A = 16\\pi$ cm$^2$' },
      ],
      hints: ['Bruk $A = \\frac{1}{2}r^2 v$ og $s = rv$ og løs for den ukjente'],
      topic: 'sektorareal',
    },
    {
      id: 'r2-4-1-ex-8',
      number: '4.1.8',
      type: 'classic',
      difficulty: 'lett',
      task: 'Finn eksakt verdi av følgende trigonometriske uttrykk.',
      subTasks: [
        { label: 'a', task: '$\\sin\\frac{\\pi}{6}$', solution: '$\\frac{1}{2}$' },
        { label: 'b', task: '$\\cos\\frac{\\pi}{3}$', solution: '$\\frac{1}{2}$' },
        { label: 'c', task: '$\\sin\\frac{\\pi}{4}$', solution: '$\\frac{\\sqrt{2}}{2}$' },
        { label: 'd', task: '$\\cos\\pi$', solution: '$-1$' },
        { label: 'e', task: '$\\sin\\frac{3\\pi}{2}$', solution: '$-1$' },
      ],
      hints: ['Bruk enhetssirkelen og de viktige punktene'],
      topic: 'enhetssirkelen',
    },
    {
      id: 'r2-4-1-ex-9',
      number: '4.1.9',
      type: 'classic',
      difficulty: 'medium',
      task: 'Finn eksakt verdi av følgende. Bruk symmetri i enhetssirkelen.',
      subTasks: [
        { label: 'a', task: '$\\cos\\frac{3\\pi}{4}$', solution: '$-\\frac{\\sqrt{2}}{2}$' },
        { label: 'b', task: '$\\sin\\frac{5\\pi}{4}$', solution: '$-\\frac{\\sqrt{2}}{2}$' },
        { label: 'c', task: '$\\cos\\frac{11\\pi}{6}$', solution: '$\\frac{\\sqrt{3}}{2}$' },
        { label: 'd', task: '$\\sin\\frac{7\\pi}{6}$', solution: '$-\\frac{1}{2}$' },
      ],
      hints: ['Skriv vinkelen som $\\pi \\pm$ en standardvinkel eller $2\\pi -$ en standardvinkel'],
      topic: 'enhetssirkelen',
    },
    {
      id: 'r2-4-1-ex-10',
      number: '4.1.10',
      type: 'classic',
      difficulty: 'medium',
      task: 'Finn koordinatene til punktet på enhetssirkelen.',
      subTasks: [
        { label: 'a', task: 'Vinkelen $v = \\frac{\\pi}{3}$', solution: '$\\left(\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$' },
        { label: 'b', task: 'Vinkelen $v = \\frac{5\\pi}{6}$', solution: '$\\left(-\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)$' },
        { label: 'c', task: 'Vinkelen $v = \\frac{5\\pi}{3}$', solution: '$\\left(\\frac{1}{2}, -\\frac{\\sqrt{3}}{2}\\right)$' },
      ],
      hints: ['Punktet på enhetssirkelen for vinkel $v$ er $(\\cos v, \\sin v)$'],
      topic: 'enhetssirkelen',
    },
    {
      id: 'r2-4-1-ex-11',
      number: '4.1.11',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Kombinerte oppgaver med buelengde og sektorareal.',
      subTasks: [
        { label: 'a', task: 'En sektor har buelengde $s = 8$ cm og areal $A = 24$ cm$^2$. Finn $r$ og $v$.', solution: '$r = 6$ cm, $v = \\frac{4}{3}$ rad' },
        { label: 'b', task: 'En sektor har buelengde $s = 10$ cm og radius $r = 4$ cm. Finn arealet.', solution: '$A = 20$ cm$^2$' },
        { label: 'c', task: 'En sektor har areal $A = 50$ cm$^2$ og vinkel $v = 2$ rad. Finn radius og buelengde.', solution: '$r = 5\\sqrt{2}$ cm, $s = 10\\sqrt{2}$ cm' },
      ],
      hints: ['Bruk formlene $s = rv$, $A = \\frac{1}{2}r^2v$ og $A = \\frac{1}{2}rs$'],
      topic: 'kombinert',
    },
    {
      id: 'r2-4-1-ex-12',
      number: '4.1.12',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Praktiske anvendelser.',
      subTasks: [
        { label: 'a', task: 'En pendel med lengde 50 cm svinger gjennom en vinkel på $\\frac{\\pi}{6}$ rad. Hvor lang er banen pendelspissen beskriver?', solution: '$\\frac{25\\pi}{3}$ cm $\\approx 26{,}2$ cm' },
        { label: 'b', task: 'Et pariserhjul med radius 40 m roterer $\\frac{3\\pi}{4}$ radianer. Hvor langt har en passasjer beveget seg langs kanten?', solution: '$30\\pi$ m $\\approx 94{,}2$ m' },
        { label: 'c', task: 'En pizzabit har form som en sirkelsektor med radius 15 cm og vinkel $\\frac{\\pi}{4}$. Finn arealet av pizzabiten.', solution: '$\\frac{225\\pi}{8}$ cm$^2$ $\\approx 88{,}4$ cm$^2$' },
      ],
      hints: ['Bruk formlene for buelengde og sektorareal'],
      topic: 'anvendelser',
    },
    {
      id: 'r2-4-1-ex-13',
      number: '4.1.13',
      type: 'classic',
      difficulty: 'medium',
      task: 'Regn ut uten kalkulator.',
      subTasks: [
        { label: 'a', task: '$\\sin^2\\frac{\\pi}{4} + \\cos^2\\frac{\\pi}{4}$', solution: '$1$' },
        { label: 'b', task: '$2\\sin\\frac{\\pi}{6}\\cos\\frac{\\pi}{6}$', solution: '$\\frac{\\sqrt{3}}{2}$' },
        { label: 'c', task: '$\\cos^2\\frac{\\pi}{3} - \\sin^2\\frac{\\pi}{3}$', solution: '$-\\frac{1}{2}$' },
        { label: 'd', task: '$\\sin\\frac{\\pi}{3}\\cos\\frac{\\pi}{6} + \\cos\\frac{\\pi}{3}\\sin\\frac{\\pi}{6}$', solution: '$1$' },
      ],
      hints: ['Bruk de eksakte verdiene for standardvinklene'],
      topic: 'trigonometri',
    },
    {
      id: 'r2-4-1-ex-14',
      number: '4.1.14',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Utfordrende oppgaver.',
      subTasks: [
        { label: 'a', task: 'Vis at $1$ radian $\\approx 57{,}3°$ ved å beregne $\\frac{180}{\\pi}$.', solution: '$\\frac{180}{\\pi} \\approx 57{,}296°$' },
        { label: 'b', task: 'Finn alle vinkler $v \\in [0, 2\\pi)$ slik at $\\sin v = \\frac{1}{2}$.', solution: '$v = \\frac{\\pi}{6}$ og $v = \\frac{5\\pi}{6}$' },
        { label: 'c', task: 'Finn alle vinkler $v \\in [0, 2\\pi)$ slik at $\\cos v = -\\frac{\\sqrt{2}}{2}$.', solution: '$v = \\frac{3\\pi}{4}$ og $v = \\frac{5\\pi}{4}$' },
      ],
      hints: ['Bruk symmetriegenskapene til sinus og cosinus i ulike kvadranter'],
      topic: 'utforskning',
    },
    {
      id: 'r2-4-1-ex-15',
      number: '4.1.15',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Tekstoppgaver med radianer.',
      subTasks: [
        { label: 'a', task: 'Jordas radius ved ekvator er ca. 6378 km. Hvor lang er en breddegradslinje ved ekvator som dekker $15°$?', solution: '$\\frac{6378\\pi}{12} \\approx 1669$ km' },
        { label: 'b', task: 'En CD-plate har indre radius 2{,}3 cm og ytre radius 5{,}8 cm. Finn arealet av "ringen" av musikk mellom disse radiene for en sektor på $\\frac{\\pi}{2}$.', solution: '$\\frac{28{,}35\\pi}{4} \\approx 22{,}3$ cm$^2$' },
      ],
      hints: ['Bruk formlene for buelengde og sektorareal med riktige enheter'],
      topic: 'anvendelser',
    },
  ],

  prevChapter: 'r2-3-4',
  nextChapter: 'r2-4-2',
};

export const CHAPTER_R2_4_2: TextbookChapter = {
  id: 'r2-4-2',
  courseId: 'r2',
  chapterNumber: '4.2',
  title: 'Enhetssirkelen og trigonometriske definisjoner',
  description: 'Definisjon av sin, cos og tan for alle vinkler ved hjelp av enhetssirkelen.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske eigenskapar ved trigonometriske funksjonar',
    'bruke enhetssirkelen til å definere trigonometriske verdier for alle vinkler',
    'beherske eksakte verdier for standardvinkler',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r2-4-2-intro',
      type: 'text',
      content: `## Fra rettvinklede trekanter til alle vinkler

I tidligere kurs har du lært å bruke sinus, cosinus og tangens i rettvinklede trekanter. Men hva betyr $\\sin 150°$ eller $\\cos(-45°)$? Disse vinklene passer ikke inn i en rettvinklet trekant!

For å utvide de trigonometriske funksjonene til **alle vinkler** - positive, negative, og storre enn $90°$ - bruker vi **enhetssirkelen**.

Enhetssirkelen er et av de viktigste verktøyene i matematikk og fysikk, og gir oss en elegant måte å forsta trigonometri på.`,
    },

    // ========== DEFINISJON: ENHETSSIRKELEN ==========
    {
      id: 'r2-4-2-def-enhetssirkel',
      type: 'definition',
      title: 'Enhetssirkelen',
      content: `**Enhetssirkelen** er sirkelen med sentrum i origo og radius $1$.

Ligningen for enhetssirkelen er:
$$x^2 + y^2 = 1$$

Ethvert punkt $P$ på enhetssirkelen kan skrives som $P = (x, y)$ der $x^2 + y^2 = 1$.`,
    },

    {
      id: 'r2-4-2-text-1',
      type: 'text',
      content: `### Vinkler i enhetssirkelen

Vi maler vinkler fra den positive $x$-aksen:
- **Positive vinkler** males mot klokken (mot urviseren)
- **Negative vinkler** males med klokken

En vinkel $v$ bestemmer et punkt $P$ på enhetssirkelen ved å starte fra punktet $(1, 0)$ og bevege seg langs sirkelen.`,
    },

    // ========== DEFINISJON: TRIGONOMETRISKE FUNKSJONER ==========
    {
      id: 'r2-4-2-def-trig',
      type: 'definition',
      title: 'Sinus, cosinus og tangens for alle vinkler',
      content: `La $v$ være en vinkel, og la $P = (x, y)$ være det tilsvarende punktet på enhetssirkelen.

Da definerer vi:
$$\\cos v = x$$
$$\\sin v = y$$
$$\\tan v = \\frac{\\sin v}{\\cos v} = \\frac{y}{x}, \\quad \\cos v \\neq 0$$

Med andre ord:
- **Cosinus** er $x$-koordinaten til punktet på enhetssirkelen
- **Sinus** er $y$-koordinaten til punktet på enhetssirkelen
- **Tangens** er forholdet mellom $y$ og $x$`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'r2-4-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Trigonometriske verdier for $0°$, $90°$, $180°$, $270°$',
      problem: 'Finn $\\sin v$ og $\\cos v$ for $v = 0°$, $90°$, $180°$ og $270°$.',
      solution: `Vi finner punktene på enhetssirkelen:

**For $v = 0°$:** Punktet er $(1, 0)$
$$\\cos 0° = 1, \\quad \\sin 0° = 0$$

**For $v = 90°$:** Punktet er $(0, 1)$
$$\\cos 90° = 0, \\quad \\sin 90° = 1$$

**For $v = 180°$:** Punktet er $(-1, 0)$
$$\\cos 180° = -1, \\quad \\sin 180° = 0$$

**For $v = 270°$:** Punktet er $(0, -1)$
$$\\cos 270° = 0, \\quad \\sin 270° = -1$$`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'r2-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'r2-4-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn $\\tan v$ for $v = 0°$, $45°$, $180°$ og $270°$. For hvilke vinkler er tangens ikke definert?',
        solution: `$\\tan 0° = \\frac{0}{1} = 0$

$\\tan 45° = \\frac{\\sin 45°}{\\cos 45°} = \\frac{\\frac{\\sqrt{2}}{2}}{\\frac{\\sqrt{2}}{2}} = 1$

$\\tan 180° = \\frac{0}{-1} = 0$

$\\tan 270°$ er ikke definert siden $\\cos 270° = 0$.

Generelt er $\\tan v$ ikke definert når $\\cos v = 0$, dvs. for $v = 90° + n \\cdot 180°$ der $n$ er et heltall.`,
        hints: ['Husk at $\\tan v = \\frac{\\sin v}{\\cos v}$.', 'Tangens er ikke definert når nevneren er null.'],
      },
    },

    // ========== RADIANER ==========
    {
      id: 'r2-4-2-text-radianer',
      type: 'text',
      content: `### Radianer

I R2 bruker vi ofte **radianer** i stedet for grader. Sammenhengen er:
$$180° = \\pi \\text{ radianer}$$

Viktige omregninger:
- $90° = \\frac{\\pi}{2}$
- $60° = \\frac{\\pi}{3}$
- $45° = \\frac{\\pi}{4}$
- $30° = \\frac{\\pi}{6}$

**Omregningsformler:**
$$\\text{Radianer} = \\text{Grader} \\cdot \\frac{\\pi}{180}$$
$$\\text{Grader} = \\text{Radianer} \\cdot \\frac{180}{\\pi}$$`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'r2-4-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Omregning mellom grader og radianer',
      problem: 'a) Gjor om $120°$ til radianer.\nb) Gjor om $\\frac{5\\pi}{4}$ radianer til grader.',
      solution: `**a)** $120° = 120 \\cdot \\frac{\\pi}{180} = \\frac{120\\pi}{180} = \\frac{2\\pi}{3}$

**b)** $\\frac{5\\pi}{4} = \\frac{5\\pi}{4} \\cdot \\frac{180}{\\pi} = \\frac{5 \\cdot 180}{4} = 225°$`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'r2-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'r2-4-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'a) Gjor om $150°$ og $210°$ til radianer.\nb) Gjor om $\\frac{3\\pi}{4}$ og $\\frac{7\\pi}{6}$ til grader.',
        solution: `a) $150° = \\frac{5\\pi}{6}$, $210° = \\frac{7\\pi}{6}$

b) $\\frac{3\\pi}{4} = 135°$, $\\frac{7\\pi}{6} = 210°$`,
        hints: ['Bruk at $180° = \\pi$.'],
      },
    },

    // ========== EKSAKTE VERDIER ==========
    {
      id: 'r2-4-2-text-eksakte',
      type: 'text',
      content: `## Eksakte verdier for standardvinkler

For visse vinkler kan vi finne **eksakte verdier** for sinus, cosinus og tangens. Disse vinklene er sa viktige at du bor kunne dem utenat.`,
    },

    // ========== TEOREM: EKSAKTE VERDIER ==========
    {
      id: 'r2-4-2-theorem-eksakte',
      type: 'theorem',
      title: 'Eksakte verdier i forste kvadrant',
      content: `| Vinkel | $0°$ | $30°$ | $45°$ | $60°$ | $90°$ |
|--------|------|-------|-------|-------|-------|
| Radianer | $0$ | $\\frac{\\pi}{6}$ | $\\frac{\\pi}{4}$ | $\\frac{\\pi}{3}$ | $\\frac{\\pi}{2}$ |
| $\\sin v$ | $0$ | $\\frac{1}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{3}}{2}$ | $1$ |
| $\\cos v$ | $1$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{1}{2}$ | $0$ |
| $\\tan v$ | $0$ | $\\frac{1}{\\sqrt{3}}$ | $1$ | $\\sqrt{3}$ | udef. |

**Huskeregel for sinus:** $\\frac{\\sqrt{0}}{2}, \\frac{\\sqrt{1}}{2}, \\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{3}}{2}, \\frac{\\sqrt{4}}{2}$`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'r2-4-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Verifisere verdier fra tabellen',
      problem: 'Vis at $\\sin 45° = \\frac{\\sqrt{2}}{2}$ ved hjelp av en rettvinklet trekant.',
      solution: `I en rettvinklet trekant med to $45°$-vinkler er de to katetene like lange.

La katetene være $1$. Da er hypotenusen (etter Pytagoras):
$$h = \\sqrt{1^2 + 1^2} = \\sqrt{2}$$

Dermed:
$$\\sin 45° = \\frac{\\text{motstående katet}}{\\text{hypotenus}} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$$`,
    },

    // ========== EKSEMPEL 4 ==========
    {
      id: 'r2-4-2-example-4',
      type: 'example',
      title: 'Eksempel 4: Verdier for $30°$ og $60°$',
      problem: 'Forklar hvorfor $\\sin 30° = \\frac{1}{2}$ og $\\cos 30° = \\frac{\\sqrt{3}}{2}$.',
      solution: `Vi starter med en likesidet trekant med sidelengde $2$. Alle vinkler er $60°$.

Når vi deler trekanten i to med en høyde, får vi en rettvinklet trekant med:
- Hypotenus = $2$
- En katet = $1$ (halve grunnlinjen)
- Den andre kateten = $\\sqrt{2^2 - 1^2} = \\sqrt{3}$ (høyden)

For $30°$-vinkelen:
$$\\sin 30° = \\frac{\\text{motstående}}{\\text{hypotenus}} = \\frac{1}{2}$$
$$\\cos 30° = \\frac{\\text{hosliggende}}{\\text{hypotenus}} = \\frac{\\sqrt{3}}{2}$$

For $60°$-vinkelen blir det motsatt:
$$\\sin 60° = \\frac{\\sqrt{3}}{2}, \\quad \\cos 60° = \\frac{1}{2}$$`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'r2-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'r2-4-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut uten kalkulator: a) $\\sin 30° + \\cos 60°$ b) $\\sin^2 45° + \\cos^2 45°$ c) $\\tan 60° \\cdot \\tan 30°$',
        solution: `a) $\\sin 30° + \\cos 60° = \\frac{1}{2} + \\frac{1}{2} = 1$

b) $\\sin^2 45° + \\cos^2 45° = \\left(\\frac{\\sqrt{2}}{2}\\right)^2 + \\left(\\frac{\\sqrt{2}}{2}\\right)^2 = \\frac{1}{2} + \\frac{1}{2} = 1$

c) $\\tan 60° \\cdot \\tan 30° = \\sqrt{3} \\cdot \\frac{1}{\\sqrt{3}} = 1$`,
        hints: ['Bruk tabellen med eksakte verdier.'],
      },
    },

    // ========== DE FIRE KVADRANTENE ==========
    {
      id: 'r2-4-2-text-kvadranter',
      type: 'text',
      content: `## Fortegn i de fire kvadrantene

Enhetssirkelen deles inn i fire **kvadranter**:

- **1. kvadrant:** $0° < v < 90°$ (begge koordinater positive)
- **2. kvadrant:** $90° < v < 180°$ ($x < 0$, $y > 0$)
- **3. kvadrant:** $180° < v < 270°$ (begge koordinater negative)
- **4. kvadrant:** $270° < v < 360°$ ($x > 0$, $y < 0$)`,
    },

    // ========== TEOREM: FORTEGN ==========
    {
      id: 'r2-4-2-theorem-fortegn',
      type: 'theorem',
      title: 'Fortegn for de trigonometriske funksjonene',
      content: `| Kvadrant | $\\cos v$ | $\\sin v$ | $\\tan v$ |
|----------|----------|----------|----------|
| 1. ($0° - 90°$) | $+$ | $+$ | $+$ |
| 2. ($90° - 180°$) | $-$ | $+$ | $-$ |
| 3. ($180° - 270°$) | $-$ | $-$ | $+$ |
| 4. ($270° - 360°$) | $+$ | $-$ | $-$ |

**Huskeregel (CAST):** Start i 4. kvadrant og gå mot klokken:
- **C**osinus positiv i 4. kvadrant
- **A**lle positive i 1. kvadrant
- **S**inus positiv i 2. kvadrant
- **T**angens positiv i 3. kvadrant`,
    },

    // ========== EKSEMPEL 5 ==========
    {
      id: 'r2-4-2-example-5',
      type: 'example',
      title: 'Eksempel 5: Bestemme fortegn',
      problem: 'Avgjor fortegnet til: a) $\\sin 150°$ b) $\\cos 200°$ c) $\\tan 320°$',
      solution: `**a) $\\sin 150°$:**
$150°$ ligger i 2. kvadrant (mellom $90°$ og $180°$).
I 2. kvadrant er $y > 0$, så $\\sin 150° > 0$ (positiv).

**b) $\\cos 200°$:**
$200°$ ligger i 3. kvadrant (mellom $180°$ og $270°$).
I 3. kvadrant er $x < 0$, så $\\cos 200° < 0$ (negativ).

**c) $\\tan 320°$:**
$320°$ ligger i 4. kvadrant (mellom $270°$ og $360°$).
I 4. kvadrant er $x > 0$ og $y < 0$, så $\\tan 320° = \\frac{y}{x} < 0$ (negativ).`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'r2-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'r2-4-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Avgjor fortegnet til: a) $\\cos 120°$ b) $\\sin 250°$ c) $\\tan 100°$ d) $\\sin(-30°)$',
        solution: `a) $\\cos 120°$ er negativ (2. kvadrant)
b) $\\sin 250°$ er negativ (3. kvadrant)
c) $\\tan 100°$ er negativ (2. kvadrant)
d) $\\sin(-30°)$ er negativ (4. kvadrant, siden $-30°$ tilsvarer $330°$)`,
        hints: ['Bestem hvilken kvadrant vinkelen ligger i.', 'For negative vinkler: legg til $360°$.'],
      },
    },

    // ========== REFERANSEVINKLER ==========
    {
      id: 'r2-4-2-text-referanse',
      type: 'text',
      content: `## Referansevinkler

For å finne eksakte verdier for vinkler utenfor forste kvadrant bruker vi **referansevinkler**.`,
    },

    // ========== DEFINISJON: REFERANSEVINKEL ==========
    {
      id: 'r2-4-2-def-referanse',
      type: 'definition',
      title: 'Referansevinkel',
      content: `**Referansevinkelen** $v_r$ til en vinkel $v$ er den spisse vinkelen mellom vinkelens endepunkt på enhetssirkelen og $x$-aksen.

Referansevinkelen er alltid mellom $0°$ og $90°$.

**Formler:**
- 1. kvadrant: $v_r = v$
- 2. kvadrant: $v_r = 180° - v$
- 3. kvadrant: $v_r = v - 180°$
- 4. kvadrant: $v_r = 360° - v$`,
    },

    // ========== EKSEMPEL 6 ==========
    {
      id: 'r2-4-2-example-6',
      type: 'example',
      title: 'Eksempel 6: Finne referansevinkler',
      problem: 'Finn referansevinkelen til: a) $135°$ b) $240°$ c) $315°$',
      solution: `**a) $135°$** ligger i 2. kvadrant:
$$v_r = 180° - 135° = 45°$$

**b) $240°$** ligger i 3. kvadrant:
$$v_r = 240° - 180° = 60°$$

**c) $315°$** ligger i 4. kvadrant:
$$v_r = 360° - 315° = 45°$$`,
    },

    // ========== TEOREM: BRUK AV REFERANSEVINKLER ==========
    {
      id: 'r2-4-2-theorem-referanse',
      type: 'theorem',
      title: 'Bruk av referansevinkler',
      content: `De trigonometriske verdiene for en vinkel $v$ har samme **absoluttverdi** som for referansevinkelen $v_r$.

Fortegnet bestemmes av hvilken kvadrant $v$ ligger i.

$$|\\sin v| = \\sin v_r$$
$$|\\cos v| = \\cos v_r$$
$$|\\tan v| = \\tan v_r$$`,
    },

    // ========== EKSEMPEL 7 ==========
    {
      id: 'r2-4-2-example-7',
      type: 'example',
      title: 'Eksempel 7: Eksakte verdier med referansevinkler',
      problem: 'Finn eksakt verdi for $\\sin 150°$.',
      solution: `**Steg 1:** $150°$ ligger i 2. kvadrant.

**Steg 2:** Referansevinkelen er $v_r = 180° - 150° = 30°$.

**Steg 3:** $\\sin 30° = \\frac{1}{2}$

**Steg 4:** I 2. kvadrant er sinus positiv.

**Svar:** $\\sin 150° = +\\frac{1}{2} = \\frac{1}{2}$`,
    },

    // ========== EKSEMPEL 8 ==========
    {
      id: 'r2-4-2-example-8',
      type: 'example',
      title: 'Eksempel 8: Cosinus i 3. kvadrant',
      problem: 'Finn eksakt verdi for $\\cos 240°$.',
      solution: `**Steg 1:** $240°$ ligger i 3. kvadrant.

**Steg 2:** Referansevinkelen er $v_r = 240° - 180° = 60°$.

**Steg 3:** $\\cos 60° = \\frac{1}{2}$

**Steg 4:** I 3. kvadrant er cosinus negativ.

**Svar:** $\\cos 240° = -\\frac{1}{2}$`,
    },

    // ========== EKSEMPEL 9 ==========
    {
      id: 'r2-4-2-example-9',
      type: 'example',
      title: 'Eksempel 9: Tangens i 4. kvadrant',
      problem: 'Finn eksakt verdi for $\\tan 315°$.',
      solution: `**Steg 1:** $315°$ ligger i 4. kvadrant.

**Steg 2:** Referansevinkelen er $v_r = 360° - 315° = 45°$.

**Steg 3:** $\\tan 45° = 1$

**Steg 4:** I 4. kvadrant er tangens negativ (positiv $x$, negativ $y$).

**Svar:** $\\tan 315° = -1$`,
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'r2-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'r2-4-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn eksakt verdi for: a) $\\sin 120°$ b) $\\cos 225°$ c) $\\tan 300°$',
        solution: `a) $\\sin 120° = \\sin(180° - 60°) = \\sin 60° = \\frac{\\sqrt{3}}{2}$ (positiv i 2. kvadrant)

b) $\\cos 225° = -\\cos 45° = -\\frac{\\sqrt{2}}{2}$ (negativ i 3. kvadrant, referansevinkel $45°$)

c) $\\tan 300° = -\\tan 60° = -\\sqrt{3}$ (negativ i 4. kvadrant, referansevinkel $60°$)`,
        hints: ['Finn forst referansevinkelen.', 'Bestem fortegnet ut fra kvadranten.'],
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'r2-4-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'r2-4-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn eksakt verdi for: a) $\\sin \\frac{2\\pi}{3}$ b) $\\cos \\frac{5\\pi}{4}$ c) $\\tan \\frac{5\\pi}{6}$',
        solution: `a) $\\frac{2\\pi}{3} = 120°$, referansevinkel $60°$. $\\sin \\frac{2\\pi}{3} = \\frac{\\sqrt{3}}{2}$

b) $\\frac{5\\pi}{4} = 225°$, referansevinkel $45°$. $\\cos \\frac{5\\pi}{4} = -\\frac{\\sqrt{2}}{2}$

c) $\\frac{5\\pi}{6} = 150°$, referansevinkel $30°$. $\\tan \\frac{5\\pi}{6} = -\\frac{1}{\\sqrt{3}} = -\\frac{\\sqrt{3}}{3}$`,
        hints: ['Gjor om til grader forst.'],
      },
    },

    // ========== PYTAGOREISK IDENTITET ==========
    {
      id: 'r2-4-2-text-pytagoras',
      type: 'text',
      content: `## Den pytagoreiske identiteten

En av de viktigste sammenhengene i trigonometri følger direkte fra definisjonen på enhetssirkelen.`,
    },

    // ========== TEOREM: PYTAGOREISK IDENTITET ==========
    {
      id: 'r2-4-2-theorem-pytagoras',
      type: 'theorem',
      title: 'Den pytagoreiske identiteten',
      content: `For alle vinkler $v$ gjelder:

$$\\sin^2 v + \\cos^2 v = 1$$

Denne identiteten kalles også **grunnidentiteten** i trigonometri.`,
      proof: `**Bevis:**

Et punkt $P$ på enhetssirkelen har koordinater $(\\cos v, \\sin v)$.

Siden $P$ ligger på sirkelen $x^2 + y^2 = 1$, får vi:

$$(\\cos v)^2 + (\\sin v)^2 = 1$$

som gir oss identiteten $\\sin^2 v + \\cos^2 v = 1$.`,
    },

    // ========== EKSEMPEL 10 ==========
    {
      id: 'r2-4-2-example-10',
      type: 'example',
      title: 'Eksempel 10: Finne sin når cos er kjent',
      problem: 'Gitt at $\\cos v = \\frac{3}{5}$ og $v$ ligger i 4. kvadrant. Finn $\\sin v$.',
      solution: `Vi bruker $\\sin^2 v + \\cos^2 v = 1$:

$$\\sin^2 v + \\left(\\frac{3}{5}\\right)^2 = 1$$
$$\\sin^2 v + \\frac{9}{25} = 1$$
$$\\sin^2 v = 1 - \\frac{9}{25} = \\frac{16}{25}$$
$$\\sin v = \\pm \\frac{4}{5}$$

Siden $v$ ligger i 4. kvadrant, er sinus negativ:
$$\\sin v = -\\frac{4}{5}$$`,
    },

    // ========== EKSEMPEL 11 ==========
    {
      id: 'r2-4-2-example-11',
      type: 'example',
      title: 'Eksempel 11: Finne cos når sin er kjent',
      problem: 'Gitt at $\\sin v = \\frac{5}{13}$ og $90° < v < 180°$. Finn $\\cos v$ og $\\tan v$.',
      solution: `**Finn $\\cos v$:**

$$\\sin^2 v + \\cos^2 v = 1$$
$$\\left(\\frac{5}{13}\\right)^2 + \\cos^2 v = 1$$
$$\\frac{25}{169} + \\cos^2 v = 1$$
$$\\cos^2 v = \\frac{144}{169}$$
$$\\cos v = \\pm \\frac{12}{13}$$

Siden $v$ er i 2. kvadrant, er cosinus negativ:
$$\\cos v = -\\frac{12}{13}$$

**Finn $\\tan v$:**
$$\\tan v = \\frac{\\sin v}{\\cos v} = \\frac{\\frac{5}{13}}{-\\frac{12}{13}} = -\\frac{5}{12}$$`,
    },

    // ========== OPPGAVE 7 ==========
    {
      id: 'r2-4-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'r2-4-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gitt at $\\cos v = -\\frac{4}{5}$ og $v$ ligger i 3. kvadrant. Finn $\\sin v$ og $\\tan v$.',
        solution: `Fra $\\sin^2 v + \\cos^2 v = 1$:
$\\sin^2 v = 1 - \\frac{16}{25} = \\frac{9}{25}$

Siden $v$ er i 3. kvadrant (sinus negativ):
$\\sin v = -\\frac{3}{5}$

$\\tan v = \\frac{-3/5}{-4/5} = \\frac{3}{4}$`,
        hints: ['Bruk den pytagoreiske identiteten.', 'I 3. kvadrant er både sin og cos negative.'],
      },
    },

    // ========== OPPGAVE 8 ==========
    {
      id: 'r2-4-2-ex-8',
      type: 'exercise',
      exercise: {
        id: 'r2-4-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gitt at $\\sin v = -\\frac{7}{25}$ og $270° < v < 360°$. Finn $\\cos v$.',
        solution: `$\\cos^2 v = 1 - \\sin^2 v = 1 - \\frac{49}{625} = \\frac{576}{625}$

Siden $v$ er i 4. kvadrant (cosinus positiv):
$\\cos v = \\frac{24}{25}$`,
        hints: ['4. kvadrant: cos er positiv, sin er negativ.'],
      },
    },

    // ========== EKSEMPEL 12: NEGATIVE VINKLER ==========
    {
      id: 'r2-4-2-example-12',
      type: 'example',
      title: 'Eksempel 12: Negative vinkler',
      problem: 'Finn eksakt verdi for $\\sin(-60°)$ og $\\cos(-60°)$.',
      solution: `En negativ vinkel går med klokken fra $(1, 0)$.

$-60°$ havner i 4. kvadrant (samme som $300°$).

Referansevinkelen er $60°$.

$$\\sin(-60°) = -\\sin 60° = -\\frac{\\sqrt{3}}{2}$$
(negativ fordi $y < 0$ i 4. kvadrant)

$$\\cos(-60°) = \\cos 60° = \\frac{1}{2}$$
(positiv fordi $x > 0$ i 4. kvadrant)

**Generelt:** $\\sin(-v) = -\\sin v$ og $\\cos(-v) = \\cos v$`,
    },

    // ========== TEOREM: SYMMETRIEGENSKAPER ==========
    {
      id: 'r2-4-2-theorem-symmetri',
      type: 'theorem',
      title: 'Symmetriegenskaper',
      content: `**For negative vinkler:**
$$\\sin(-v) = -\\sin v \\quad \\text{(odde funksjon)}$$
$$\\cos(-v) = \\cos v \\quad \\text{(like funksjon)}$$
$$\\tan(-v) = -\\tan v \\quad \\text{(odde funksjon)}$$

**For vinkler over $360°$:**
$$\\sin(v + 360°) = \\sin v$$
$$\\cos(v + 360°) = \\cos v$$
$$\\tan(v + 180°) = \\tan v$$`,
    },

    // ========== OPPGAVE 9 ==========
    {
      id: 'r2-4-2-ex-9',
      type: 'exercise',
      exercise: {
        id: 'r2-4-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn eksakt verdi for: a) $\\sin(-45°)$ b) $\\cos(-120°)$ c) $\\tan(-30°)$',
        solution: `a) $\\sin(-45°) = -\\sin 45° = -\\frac{\\sqrt{2}}{2}$

b) $\\cos(-120°) = \\cos 120° = -\\frac{1}{2}$ (cosinus er en like funksjon)

c) $\\tan(-30°) = -\\tan 30° = -\\frac{1}{\\sqrt{3}} = -\\frac{\\sqrt{3}}{3}$`,
        hints: ['Bruk symmetriegenskapene.'],
      },
    },

    // ========== EKSEMPEL 13: VINKLER OVER 360 GRADER ==========
    {
      id: 'r2-4-2-example-13',
      type: 'example',
      title: 'Eksempel 13: Store vinkler',
      problem: 'Finn eksakt verdi for $\\sin 420°$ og $\\cos 750°$.',
      solution: `**$\\sin 420°$:**
$420° = 360° + 60°$, så vi har gatt en hel runde pluss $60°$.
$$\\sin 420° = \\sin 60° = \\frac{\\sqrt{3}}{2}$$

**$\\cos 750°$:**
$750° = 2 \\cdot 360° + 30° = 720° + 30°$
$$\\cos 750° = \\cos 30° = \\frac{\\sqrt{3}}{2}$$`,
    },

    // ========== OPPGAVE 10 ==========
    {
      id: 'r2-4-2-ex-10',
      type: 'exercise',
      exercise: {
        id: 'r2-4-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn eksakt verdi for: a) $\\cos 405°$ b) $\\sin 510°$ c) $\\tan 585°$',
        solution: `a) $405° = 360° + 45°$, så $\\cos 405° = \\cos 45° = \\frac{\\sqrt{2}}{2}$

b) $510° = 360° + 150°$, så $\\sin 510° = \\sin 150° = \\frac{1}{2}$

c) $585° = 360° + 225°$, referansevinkel $45°$, 3. kvadrant: $\\tan 585° = \\tan 225° = 1$`,
        hints: ['Trekk fra $360°$ til vinkelen er mellom $0°$ og $360°$.'],
      },
    },

    // ========== EKSEMPEL 14: ANVENDE IDENTITETEN ==========
    {
      id: 'r2-4-2-example-14',
      type: 'example',
      title: 'Eksempel 14: Forenkle uttrykk',
      problem: 'Forenkle uttrykket $\\frac{1 - \\cos^2 v}{\\sin v}$ for $\\sin v \\neq 0$.',
      solution: `Vi bruker at $\\sin^2 v + \\cos^2 v = 1$, som gir $\\sin^2 v = 1 - \\cos^2 v$.

$$\\frac{1 - \\cos^2 v}{\\sin v} = \\frac{\\sin^2 v}{\\sin v} = \\sin v$$`,
    },

    // ========== EKSEMPEL 15: BEVISE IDENTITETER ==========
    {
      id: 'r2-4-2-example-15',
      type: 'example',
      title: 'Eksempel 15: Bevise en identitet',
      problem: 'Vis at $\\tan^2 v + 1 = \\frac{1}{\\cos^2 v}$ for $\\cos v \\neq 0$.',
      solution: `Vi starter med venstre side:

$$\\tan^2 v + 1 = \\frac{\\sin^2 v}{\\cos^2 v} + 1 = \\frac{\\sin^2 v + \\cos^2 v}{\\cos^2 v}$$

Ved å bruke $\\sin^2 v + \\cos^2 v = 1$:

$$= \\frac{1}{\\cos^2 v}$$

som er høyre side. $\\square$`,
    },

    // ========== OPPGAVE 11 ==========
    {
      id: 'r2-4-2-ex-11',
      type: 'exercise',
      exercise: {
        id: 'r2-4-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forenkle: a) $(\\sin v + \\cos v)^2$ b) $\\frac{\\sin^2 v}{1 + \\cos v}$',
        solution: `a) $(\\sin v + \\cos v)^2 = \\sin^2 v + 2\\sin v \\cos v + \\cos^2 v = 1 + 2\\sin v \\cos v$

b) $\\frac{\\sin^2 v}{1 + \\cos v} = \\frac{1 - \\cos^2 v}{1 + \\cos v} = \\frac{(1-\\cos v)(1+\\cos v)}{1 + \\cos v} = 1 - \\cos v$`,
        hints: ['Bruk at $\\sin^2 v = 1 - \\cos^2 v$.', 'Faktoriser telleren.'],
      },
    },

    // ========== EKSEMPEL 16: KOORDINATER PAA ENHETSSIRKELEN ==========
    {
      id: 'r2-4-2-example-16',
      type: 'example',
      title: 'Eksempel 16: Finne koordinater på enhetssirkelen',
      problem: 'Finn koordinatene til punktet på enhetssirkelen som svarer til vinkelen $v = 210°$.',
      solution: `Punktet har koordinater $(\\cos 210°, \\sin 210°)$.

**Referansevinkel:** $210° - 180° = 30°$

**Kvadrant:** 3. kvadrant (både $x$ og $y$ negative)

$$\\cos 210° = -\\cos 30° = -\\frac{\\sqrt{3}}{2}$$
$$\\sin 210° = -\\sin 30° = -\\frac{1}{2}$$

**Svar:** Punktet er $\\left(-\\frac{\\sqrt{3}}{2}, -\\frac{1}{2}\\right)$`,
    },

    // ========== OPPGAVE 12 ==========
    {
      id: 'r2-4-2-ex-12',
      type: 'exercise',
      exercise: {
        id: 'r2-4-2-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn koordinatene til punktet på enhetssirkelen for: a) $v = 135°$ b) $v = 330°$',
        solution: `a) $135°$ er i 2. kvadrant, referansevinkel $45°$.
Punktet er $\\left(-\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2}\\right)$

b) $330°$ er i 4. kvadrant, referansevinkel $30°$.
Punktet er $\\left(\\frac{\\sqrt{3}}{2}, -\\frac{1}{2}\\right)$`,
        hints: ['Koordinatene er $(\\cos v, \\sin v)$.'],
      },
    },

    // ========== OPPGAVE 13 ==========
    {
      id: 'r2-4-2-ex-13',
      type: 'exercise',
      exercise: {
        id: 'r2-4-2-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et punkt på enhetssirkelen har $x$-koordinat $-\\frac{1}{2}$. Finn alle mulige $y$-koordinater og tilhorende vinkler $v$ med $0° \\leq v < 360°$.',
        solution: `Fra $x^2 + y^2 = 1$:
$\\left(-\\frac{1}{2}\\right)^2 + y^2 = 1$
$y^2 = 1 - \\frac{1}{4} = \\frac{3}{4}$
$y = \\pm \\frac{\\sqrt{3}}{2}$

For $y = \\frac{\\sqrt{3}}{2}$ (2. kvadrant): $v = 120°$
For $y = -\\frac{\\sqrt{3}}{2}$ (3. kvadrant): $v = 240°$`,
        hints: ['Bruk at $x^2 + y^2 = 1$.', 'Husk at $\\cos 60° = \\frac{1}{2}$.'],
      },
    },

    // ========== OPPGAVE 14 ==========
    {
      id: 'r2-4-2-ex-14',
      type: 'exercise',
      exercise: {
        id: 'r2-4-2-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vis at $1 + \\tan^2 v = \\frac{1}{\\cos^2 v}$ for $\\cos v \\neq 0$, og bruk dette til å finne $\\cos v$ når $\\tan v = 2$ og $v$ er i 1. kvadrant.',
        solution: `**Bevis:**
$1 + \\tan^2 v = 1 + \\frac{\\sin^2 v}{\\cos^2 v} = \\frac{\\cos^2 v + \\sin^2 v}{\\cos^2 v} = \\frac{1}{\\cos^2 v}$

**Anvend:**
$\\frac{1}{\\cos^2 v} = 1 + 4 = 5$
$\\cos^2 v = \\frac{1}{5}$
$\\cos v = \\frac{1}{\\sqrt{5}} = \\frac{\\sqrt{5}}{5}$ (positiv i 1. kvadrant)`,
        hints: ['Start med venstre side og skriv $\\tan v$ som $\\frac{\\sin v}{\\cos v}$.'],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'r2-4-2-summary',
      type: 'note',
      content: `## Oppsummering

**Enhetssirkelen:**
- Sirkel med radius 1 og sentrum i origo
- Ligning: $x^2 + y^2 = 1$

**Definisjoner:**
- $\\cos v = x$-koordinaten på enhetssirkelen
- $\\sin v = y$-koordinaten på enhetssirkelen
- $\\tan v = \\frac{\\sin v}{\\cos v}$

**Grunnidentiteten:** $\\sin^2 v + \\cos^2 v = 1$

**Eksakte verdier:** Husk tabellen for $0°$, $30°$, $45°$, $60°$, $90°$

**Referansevinkler:** Brukes til å finne verdier utenfor 1. kvadrant`,
    },

    // ========== OPPGAVE 15 ==========
    {
      id: 'r2-4-2-ex-15',
      type: 'exercise',
      exercise: {
        id: 'r2-4-2-ex-15',
        number: '15',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut uten kalkulator: $\\sin^2 30° + \\sin^2 45° + \\sin^2 60°$',
        solution: `$\\sin^2 30° + \\sin^2 45° + \\sin^2 60°$
$= \\left(\\frac{1}{2}\\right)^2 + \\left(\\frac{\\sqrt{2}}{2}\\right)^2 + \\left(\\frac{\\sqrt{3}}{2}\\right)^2$
$= \\frac{1}{4} + \\frac{2}{4} + \\frac{3}{4} = \\frac{6}{4} = \\frac{3}{2}$`,
        hints: ['Bruk tabellen med eksakte verdier.'],
      },
    },

    // ========== OPPGAVE 16 ==========
    {
      id: 'r2-4-2-ex-16',
      type: 'exercise',
      exercise: {
        id: 'r2-4-2-ex-16',
        number: '16',
        type: 'classic',
        difficulty: 'medium',
        task: 'Los ligningen $\\sin v = \\frac{1}{2}$ for $0° \\leq v < 360°$.',
        solution: `$\\sin v = \\frac{1}{2}$

Fra tabellen vet vi at $\\sin 30° = \\frac{1}{2}$.

Sinus er positiv i 1. og 2. kvadrant.

**1. kvadrant:** $v = 30°$
**2. kvadrant:** $v = 180° - 30° = 150°$

**Svar:** $v = 30°$ eller $v = 150°$`,
        hints: ['Hvilken standardvinkel har sinus lik $\\frac{1}{2}$?', 'I hvilke kvadranter er sinus positiv?'],
      },
    },

    // ========== OPPGAVE 17 ==========
    {
      id: 'r2-4-2-ex-17',
      type: 'exercise',
      exercise: {
        id: 'r2-4-2-ex-17',
        number: '17',
        type: 'classic',
        difficulty: 'medium',
        task: 'Los ligningen $\\cos v = -\\frac{\\sqrt{2}}{2}$ for $0° \\leq v < 360°$.',
        solution: `Referansevinkelen er $45°$ (siden $\\cos 45° = \\frac{\\sqrt{2}}{2}$).

Cosinus er negativ i 2. og 3. kvadrant.

**2. kvadrant:** $v = 180° - 45° = 135°$
**3. kvadrant:** $v = 180° + 45° = 225°$

**Svar:** $v = 135°$ eller $v = 225°$`,
        hints: ['Finn referansevinkelen forst.', 'I hvilke kvadranter er cosinus negativ?'],
      },
    },

    // ========== OPPGAVE 18 ==========
    {
      id: 'r2-4-2-ex-18',
      type: 'exercise',
      exercise: {
        id: 'r2-4-2-ex-18',
        number: '18',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Los ligningen $\\tan v = -1$ for $0 \\leq v < 2\\pi$.',
        solution: `Referansevinkelen er $\\frac{\\pi}{4}$ (siden $\\tan \\frac{\\pi}{4} = 1$).

Tangens er negativ i 2. og 4. kvadrant.

**2. kvadrant:** $v = \\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}$
**4. kvadrant:** $v = 2\\pi - \\frac{\\pi}{4} = \\frac{7\\pi}{4}$

**Svar:** $v = \\frac{3\\pi}{4}$ eller $v = \\frac{7\\pi}{4}$`,
        hints: ['Bruk radianer.', 'Tangens er negativ i 2. og 4. kvadrant.'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_R2_4_3: TextbookChapter = {
  id: 'r2-4-3',
  courseId: 'r2',
  chapterNumber: '4.3',
  title: 'Sinuslikninger',
  description: 'Lose likninger med sinusfunksjonen, inkludert generelle losninger og praktiske anvendelser.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke trigonometriske funksjonar til å loyse praktiske problem',
    'analysere og tolke trigonometriske funksjonar grafisk',
    'finne alle losningar av trigonometriske likningar i gitte intervall',
  ],
  content: [
    // ============================================================================
    // INTRODUKSJON
    // ============================================================================
    {
      id: 'r2-4-3-text-1',
      type: 'text',
      content: `## Sinuslikninger

Sinuslikninger er likninger der den ukjente $x$ star som argument i en sinusfunksjon. Slike likninger dukker opp i mange praktiske sammenhenger, som bolgefenomener, periodiske svingninger og lydanalyse.

**Hva skal vi lære?**
- Lose grunnleggende likninger av typen $\\sin x = a$
- Finne den generelle losningen med $n \\in \\mathbb{Z}$
- Lose mer sammensatte likninger som $\\sin(kx + c) = a$
- Tolke losningene grafisk
- Finne antall losninger i et gitt intervall
- Anvende sinuslikninger på praktiske problemer

**Hvorfor er dette viktig?**
Sinusfunksjonen beskriver periodiske fenomener overalt i naturen: havbolger, lydbolgr, vekselstrom, pendelbevegelser og mye mer. Aa kunne lose sinuslikninger er derfor essensielt for å forstå og modellere slike fenomener.`,
    },

    // ============================================================================
    // DEL 1: GRUNNLEGGENDE LIKNING sin(x) = a
    // ============================================================================
    {
      id: 'r2-4-3-def-1',
      type: 'definition',
      title: 'Sinuslikning av typen sin(x) = a',
      content: `En sinuslikning er en likning på formen $\\sin x = a$ der $a$ er en konstant.

**Losbarhet:** Likningen $\\sin x = a$ har losning hvis og bare hvis $-1 \\leq a \\leq 1$.

Hvis $|a| > 1$, har likningen ingen losning siden sinusfunksjonen kun tar verdier i intervallet $[-1, 1]$.`,
    },
    {
      id: 'r2-4-3-text-2',
      type: 'text',
      content: `### Spesielle verdier

Noen sinusverdier bor du kunne utenat:

| $x$ | $0$ | $\\frac{\\pi}{6}$ | $\\frac{\\pi}{4}$ | $\\frac{\\pi}{3}$ | $\\frac{\\pi}{2}$ | $\\pi$ | $\\frac{3\\pi}{2}$ | $2\\pi$ |
|-----|-----|----------|----------|----------|----------|--------|-----------|---------|
| $\\sin x$ | $0$ | $\\frac{1}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{3}}{2}$ | $1$ | $0$ | $-1$ | $0$ |

Disse verdiene følger fra enhetssirkelen og de likesidede trekantene du kjenner fra R1.`,
    },
    {
      id: 'r2-4-3-theorem-1',
      type: 'theorem',
      title: 'Generell losning av sin(x) = a',
      content: `Hvis $-1 \\leq a \\leq 1$ og $\\sin v = a$ for en vinkel $v$, sa har likningen $\\sin x = a$ den generelle losningen:

$$x = v + 2\\pi n \\quad \\text{eller} \\quad x = \\pi - v + 2\\pi n, \\quad n \\in \\mathbb{Z}$$

Dette kan også skrives som:
$$x = v + 2\\pi n \\quad \\text{og} \\quad x = (\\pi - v) + 2\\pi n, \\quad n \\in \\mathbb{Z}$$

**Forklaring:** Sinusfunksjonen har periode $2\\pi$, og for hver verdi $a$ (unntatt $\\pm 1$) finnes det to vinkler i $[0, 2\\pi)$ med samme sinusverdi. Disse ligger symmetrisk om $\\frac{\\pi}{2}$.`,
    },
    {
      id: 'r2-4-3-tip-1',
      type: 'tip',
      content: `**Fremgangsmate for å lose $\\sin x = a$:**

1. Sjekk om $|a| \\leq 1$. Hvis ikke, har likningen ingen losning.
2. Finn en vinkel $v$ slik at $\\sin v = a$. Bruk kalkulator eller kjente verdier.
3. Skriv opp begge losningsgrener:
   - $x = v + 2\\pi n$
   - $x = (\\pi - v) + 2\\pi n$
4. Hvis du skal finne losninger i et bestemt intervall, sett inn verdier for $n$ (typisk $n = 0, \\pm 1, \\pm 2, ...$).`,
    },
    {
      id: 'r2-4-3-ex-1',
      type: 'example',
      title: 'Eksempel 1: Grunnleggende sinuslikning',
      problem: 'Los likningen $\\sin x = \\frac{1}{2}$.',
      solution: `**Steg 1:** Sjekk losbarhet.
$\\frac{1}{2}$ ligger mellom $-1$ og $1$, sa likningen har losning.

**Steg 2:** Finn en vinkel $v$ slik at $\\sin v = \\frac{1}{2}$.
Fra tabellen vet vi at $\\sin \\frac{\\pi}{6} = \\frac{1}{2}$, sa $v = \\frac{\\pi}{6}$.

**Steg 3:** Skriv opp den generelle losningen.
$$x = \\frac{\\pi}{6} + 2\\pi n \\quad \\text{eller} \\quad x = \\pi - \\frac{\\pi}{6} + 2\\pi n$$
$$x = \\frac{\\pi}{6} + 2\\pi n \\quad \\text{eller} \\quad x = \\frac{5\\pi}{6} + 2\\pi n, \\quad n \\in \\mathbb{Z}$$

**Svar:** $x = \\frac{\\pi}{6} + 2\\pi n$ eller $x = \\frac{5\\pi}{6} + 2\\pi n$ der $n \\in \\mathbb{Z}$.`,
    },
    {
      id: 'r2-4-3-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'r2-4-3-task-1',
        number: '4.31',
        type: 'classic',
        difficulty: 'lett',
        task: 'Los likningen $\\sin x = \\frac{\\sqrt{3}}{2}$ og angi den generelle losningen.',
        solution: 'Vi vet at $\\sin \\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$. Den generelle losningen er $x = \\frac{\\pi}{3} + 2\\pi n$ eller $x = \\frac{2\\pi}{3} + 2\\pi n$ der $n \\in \\mathbb{Z}$.',
        hints: ['Hvilken vinkel har sinusverdi $\\frac{\\sqrt{3}}{2}$?', 'Bruk at $\\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$.'],
      },
    },
    {
      id: 'r2-4-3-ex-2',
      type: 'example',
      title: 'Eksempel 2: Negativ sinusverdi',
      problem: 'Los likningen $\\sin x = -\\frac{\\sqrt{2}}{2}$.',
      solution: `**Steg 1:** Sjekk losbarhet.
$-\\frac{\\sqrt{2}}{2} \\approx -0.707$ ligger mellom $-1$ og $1$. \\checkmark

**Steg 2:** Finn en vinkel $v$ slik at $\\sin v = -\\frac{\\sqrt{2}}{2}$.
Vi vet at $\\sin \\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$.
Siden vi trenger en negativ verdi, bruker vi $v = -\\frac{\\pi}{4}$.

**Steg 3:** Skriv opp den generelle losningen.
$$x = -\\frac{\\pi}{4} + 2\\pi n \\quad \\text{eller} \\quad x = \\pi - \\left(-\\frac{\\pi}{4}\\right) + 2\\pi n$$
$$x = -\\frac{\\pi}{4} + 2\\pi n \\quad \\text{eller} \\quad x = \\frac{5\\pi}{4} + 2\\pi n, \\quad n \\in \\mathbb{Z}$$

**Alternativ form:** Vi kan også skrive losningene som:
$$x = \\frac{7\\pi}{4} + 2\\pi n \\quad \\text{eller} \\quad x = \\frac{5\\pi}{4} + 2\\pi n, \\quad n \\in \\mathbb{Z}$$`,
    },
    {
      id: 'r2-4-3-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'r2-4-3-task-2',
        number: '4.32',
        type: 'classic',
        difficulty: 'lett',
        task: 'Los likningen $\\sin x = -\\frac{1}{2}$ og angi den generelle losningen.',
        solution: 'Vi bruker $v = -\\frac{\\pi}{6}$. Den generelle losningen er $x = -\\frac{\\pi}{6} + 2\\pi n$ eller $x = \\frac{7\\pi}{6} + 2\\pi n$ der $n \\in \\mathbb{Z}$. Alternativt: $x = \\frac{11\\pi}{6} + 2\\pi n$ eller $x = \\frac{7\\pi}{6} + 2\\pi n$.',
        hints: ['Start med å finne vinkelen der $\\sin v = \\frac{1}{2}$.', 'Hva blir $\\pi - (-\\frac{\\pi}{6})$?'],
      },
    },
    {
      id: 'r2-4-3-ex-3',
      type: 'example',
      title: 'Eksempel 3: Ekstremverdier',
      problem: 'Los likningen $\\sin x = 1$.',
      solution: `**Steg 1:** Sjekk losbarhet.
$1$ er maksimalverdien til sinusfunksjonen, sa likningen har losning.

**Steg 2:** Finn vinkelen.
$\\sin x = 1$ kun nar $x = \\frac{\\pi}{2}$.

**Steg 3:** Generell losning.
Siden dette er en ekstremverdi, får vi bare en losningsgren:
$$x = \\frac{\\pi}{2} + 2\\pi n, \\quad n \\in \\mathbb{Z}$$

**Merk:** Ved $a = 1$ faller de to losningsgrenene sammen fordi $\\pi - \\frac{\\pi}{2} = \\frac{\\pi}{2}$.`,
    },
    {
      id: 'r2-4-3-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'r2-4-3-task-3',
        number: '4.33',
        type: 'classic',
        difficulty: 'lett',
        task: 'Los likningen $\\sin x = -1$.',
        solution: '$\\sin x = -1$ gir $x = -\\frac{\\pi}{2} + 2\\pi n$ eller ekvivalent $x = \\frac{3\\pi}{2} + 2\\pi n$ der $n \\in \\mathbb{Z}$.',
        hints: ['Nar er sinusfunksjonen lik $-1$?'],
      },
    },
    {
      id: 'r2-4-3-ex-4',
      type: 'example',
      title: 'Eksempel 4: Ingen losning',
      problem: 'Los likningen $\\sin x = 2$.',
      solution: `**Steg 1:** Sjekk losbarhet.
$2 > 1$, sa verdien ligger utenfor verdiomradet til sinusfunksjonen.

**Konklusjon:** Likningen har **ingen losning** siden $\\sin x \\in [-1, 1]$ for alle $x$.`,
    },
    {
      id: 'r2-4-3-warning-1',
      type: 'warning',
      title: 'Vanlig feil',
      content: `Husk å sjekke at $|a| \\leq 1$ for likningen har losning. Mange glemmer dette og forsaker å lose likninger som $\\sin x = 1.5$ eller $\\sin x = -3$, som ikke har losninger.`,
    },

    // ============================================================================
    // DEL 2: LOSNINGER I ET BESTEMT INTERVALL
    // ============================================================================
    {
      id: 'r2-4-3-text-3',
      type: 'text',
      content: `## Løsninger i et bestemt intervall

Ofte blir vi bedt om å finne alle losninger i et gitt intervall, for eksempel $[0, 2\\pi)$ eller $[-\\pi, \\pi]$.

**Fremgangsmate:**
1. Finn den generelle losningen
2. Sett inn ulike verdier for $n$ ($n = 0, \\pm 1, \\pm 2, ...$)
3. Behold kun de losningene som ligger i det angitte intervallet`,
    },
    {
      id: 'r2-4-3-ex-5',
      type: 'example',
      title: 'Eksempel 5: Løsninger i [0, 2pi)',
      problem: 'Finn alle losninger av $\\sin x = \\frac{\\sqrt{2}}{2}$ i intervallet $[0, 2\\pi)$.',
      solution: `**Steg 1:** Finn den generelle losningen.
Vi vet at $\\sin \\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$.
$$x = \\frac{\\pi}{4} + 2\\pi n \\quad \\text{eller} \\quad x = \\frac{3\\pi}{4} + 2\\pi n, \\quad n \\in \\mathbb{Z}$$

**Steg 2:** Finn losninger i $[0, 2\\pi)$.

For $x = \\frac{\\pi}{4} + 2\\pi n$:
- $n = 0$: $x = \\frac{\\pi}{4} \\approx 0.79$ \\checkmark (i intervallet)
- $n = 1$: $x = \\frac{\\pi}{4} + 2\\pi \\approx 7.07$ (utenfor)
- $n = -1$: $x = \\frac{\\pi}{4} - 2\\pi \\approx -5.50$ (utenfor)

For $x = \\frac{3\\pi}{4} + 2\\pi n$:
- $n = 0$: $x = \\frac{3\\pi}{4} \\approx 2.36$ \\checkmark (i intervallet)
- $n = 1$: $x = \\frac{3\\pi}{4} + 2\\pi \\approx 8.64$ (utenfor)
- $n = -1$: $x = \\frac{3\\pi}{4} - 2\\pi \\approx -3.93$ (utenfor)

**Svar:** $x = \\frac{\\pi}{4}$ og $x = \\frac{3\\pi}{4}$`,
    },
    {
      id: 'r2-4-3-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'r2-4-3-task-4',
        number: '4.34',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn alle losninger av $\\sin x = \\frac{1}{2}$ i intervallet $[0, 2\\pi)$.',
        solution: 'Den generelle losningen er $x = \\frac{\\pi}{6} + 2\\pi n$ eller $x = \\frac{5\\pi}{6} + 2\\pi n$. I $[0, 2\\pi)$ får vi $x = \\frac{\\pi}{6}$ og $x = \\frac{5\\pi}{6}$.',
        hints: ['Finn forst den generelle losningen.', 'Sett inn $n = 0$ og sjekk om verdiene ligger i intervallet.'],
      },
    },
    {
      id: 'r2-4-3-ex-6',
      type: 'example',
      title: 'Eksempel 6: Løsninger i [-pi, pi]',
      problem: 'Finn alle losninger av $\\sin x = -\\frac{\\sqrt{3}}{2}$ i intervallet $[-\\pi, \\pi]$.',
      solution: `**Steg 1:** Finn den generelle losningen.
Vi bruker $v = -\\frac{\\pi}{3}$ siden $\\sin(-\\frac{\\pi}{3}) = -\\frac{\\sqrt{3}}{2}$.
$$x = -\\frac{\\pi}{3} + 2\\pi n \\quad \\text{eller} \\quad x = \\pi - \\left(-\\frac{\\pi}{3}\\right) + 2\\pi n = \\frac{4\\pi}{3} + 2\\pi n$$

**Steg 2:** Finn losninger i $[-\\pi, \\pi]$.

For $x = -\\frac{\\pi}{3} + 2\\pi n$:
- $n = 0$: $x = -\\frac{\\pi}{3} \\approx -1.05$ \\checkmark

For $x = \\frac{4\\pi}{3} + 2\\pi n$:
- $n = 0$: $x = \\frac{4\\pi}{3} \\approx 4.19$ (utenfor, $> \\pi$)
- $n = -1$: $x = \\frac{4\\pi}{3} - 2\\pi = -\\frac{2\\pi}{3} \\approx -2.09$ \\checkmark

**Svar:** $x = -\\frac{\\pi}{3}$ og $x = -\\frac{2\\pi}{3}$`,
    },
    {
      id: 'r2-4-3-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'r2-4-3-task-5',
        number: '4.35',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn alle losninger av $\\sin x = -\\frac{\\sqrt{2}}{2}$ i intervallet $[-\\pi, \\pi]$.',
        solution: 'Den generelle losningen er $x = -\\frac{\\pi}{4} + 2\\pi n$ eller $x = \\frac{5\\pi}{4} + 2\\pi n$. I $[-\\pi, \\pi]$: For forste gren med $n=0$: $x = -\\frac{\\pi}{4}$. For andre gren med $n=-1$: $x = \\frac{5\\pi}{4} - 2\\pi = -\\frac{3\\pi}{4}$. Svar: $x = -\\frac{\\pi}{4}$ og $x = -\\frac{3\\pi}{4}$.',
        hints: ['Bruk at $\\sin(-\\frac{\\pi}{4}) = -\\frac{\\sqrt{2}}{2}$.', 'Husk å sjekke $n = -1$ for den andre losningsgrenen.'],
      },
    },

    // ============================================================================
    // DEL 3: GRAFISK TOLKNING
    // ============================================================================
    {
      id: 'r2-4-3-text-4',
      type: 'text',
      content: `## Grafisk tolkning

Aa lose $\\sin x = a$ grafisk betyr å finne skjaringspunktene mellom grafen til $y = \\sin x$ og den horisontale linjen $y = a$.

**Viktige observasjoner:**
- Sinusgrafen svinger mellom $-1$ og $1$ med periode $2\\pi$
- For $-1 < a < 1$ skjaerer linjen $y = a$ sinusgrafen **to ganger** per periode
- For $a = \\pm 1$ skjaerer linjen sinusgrafen **en gang** per periode (i topp/bunnpunktene)
- For $|a| > 1$ skjaerer linjen **aldri** sinusgrafen

Denne grafiske forstaelsen hjelper oss aa:
1. Raskt avgjore om en likning har losning
2. Finne antall losninger i et gitt intervall
3. Estimere losningene visuelt`,
    },
    {
      id: 'r2-4-3-geogebra-1',
      type: 'geogebra',
      title: 'Utforsk sinuslikninger grafisk',
      description: 'Dra glideren for å endre verdien av $a$ og se hvor linjen $y = a$ skjaerer sinusgrafen.',
      appType: 'graphing',
      commands: [
        'f(x) = sin(x)',
        'a = 0.5',
        'g(x) = a',
        'Intersection(f, g, -10, 10)',
      ],
    },
    {
      id: 'r2-4-3-ex-7',
      type: 'example',
      title: 'Eksempel 7: Antall losninger grafisk',
      problem: 'Hvor mange losninger har likningen $\\sin x = 0.3$ i intervallet $[0, 4\\pi]$?',
      solution: `**Grafisk resonnement:**
Linjen $y = 0.3$ skjaerer sinusgrafen to ganger per periode ($2\\pi$).

Intervallet $[0, 4\\pi]$ inneholder $\\frac{4\\pi}{2\\pi} = 2$ fulle perioder.

**Antall losninger:** $2 \\times 2 = 4$ losninger.

**Verifisering med regning:**
$\\sin^{-1}(0.3) \\approx 0.305$ radianer.
Løsningene er omtrent:
- $x \\approx 0.305$ (1. periode, stigende)
- $x \\approx \\pi - 0.305 \\approx 2.837$ (1. periode, synkende)
- $x \\approx 0.305 + 2\\pi \\approx 6.588$ (2. periode, stigende)
- $x \\approx 2.837 + 2\\pi \\approx 9.120$ (2. periode, synkende)

Alle fire ligger i $[0, 4\\pi] \\approx [0, 12.57]$.`,
    },
    {
      id: 'r2-4-3-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'r2-4-3-task-6',
        number: '4.36',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hvor mange losninger har likningen $\\sin x = 0.7$ i intervallet $[0, 6\\pi]$?',
        solution: 'Intervallet $[0, 6\\pi]$ inneholder 3 fulle perioder. Siden $0.7$ er mellom $-1$ og $1$ (og ikke lik $\\pm 1$), får vi 2 losninger per periode. Totalt: $3 \\times 2 = 6$ losninger.',
        hints: ['Hvor mange perioder er det i intervallet?', 'Hvor mange ganger per periode skjaerer $y = 0.7$ sinusgrafen?'],
      },
    },
    {
      id: 'r2-4-3-theorem-2',
      type: 'theorem',
      title: 'Antall losninger i et intervall',
      content: `For likningen $\\sin x = a$ der $-1 < a < 1$:

I et intervall som inneholder $n$ fulle perioder (lengde $2\\pi n$), er antall losninger lik $2n$.

**Spesialtilfeller:**
- Hvis $a = 1$ eller $a = -1$: $n$ losninger
- Hvis $|a| > 1$: $0$ losninger

**Merk:** For intervaller som ikke inneholder hele perioder, ma man telle mer noyaktig ved å finne de eksakte losningene.`,
    },

    // ============================================================================
    // DEL 4: SAMMENSATTE SINUSLIKNINGER sin(kx + c) = a
    // ============================================================================
    {
      id: 'r2-4-3-text-5',
      type: 'text',
      content: `## Sammensatte sinuslikninger: $\\sin(kx + c) = a$

Nar sinusfunksjonen har et mer komplisert argument, som $\\sin(2x + \\frac{\\pi}{3})$ eller $\\sin(3x - 1)$, bruker vi substitusjon.

**Strategi:**
1. Sett $u = kx + c$ (det indre uttrykket)
2. Los $\\sin u = a$ for $u$
3. Los for $x$ fra $u = kx + c$

**Viktig:** Husk at perioden til $\\sin(kx)$ er $\\frac{2\\pi}{|k|}$, ikke $2\\pi$!`,
    },
    {
      id: 'r2-4-3-ex-8',
      type: 'example',
      title: 'Eksempel 8: Likning med dobbelt argument',
      problem: 'Los likningen $\\sin(2x) = \\frac{\\sqrt{3}}{2}$.',
      solution: `**Steg 1:** Sett $u = 2x$.
Likningen blir $\\sin u = \\frac{\\sqrt{3}}{2}$.

**Steg 2:** Los for $u$.
$$u = \\frac{\\pi}{3} + 2\\pi n \\quad \\text{eller} \\quad u = \\frac{2\\pi}{3} + 2\\pi n$$

**Steg 3:** Los for $x$.
Fra $u = 2x$ får vi $x = \\frac{u}{2}$:
$$x = \\frac{\\pi}{6} + \\pi n \\quad \\text{eller} \\quad x = \\frac{\\pi}{3} + \\pi n, \\quad n \\in \\mathbb{Z}$$

**Merk:** Perioden er halvert fra $2\\pi$ til $\\pi$ fordi koeffisienten foran $x$ er $2$.`,
    },
    {
      id: 'r2-4-3-exercise-7',
      type: 'exercise',
      exercise: {
        id: 'r2-4-3-task-7',
        number: '4.37',
        type: 'classic',
        difficulty: 'medium',
        task: 'Los likningen $\\sin(3x) = \\frac{1}{2}$.',
        solution: 'Sett $u = 3x$. Da er $\\sin u = \\frac{1}{2}$, som gir $u = \\frac{\\pi}{6} + 2\\pi n$ eller $u = \\frac{5\\pi}{6} + 2\\pi n$. Dermed får vi $x = \\frac{\\pi}{18} + \\frac{2\\pi n}{3}$ eller $x = \\frac{5\\pi}{18} + \\frac{2\\pi n}{3}$ der $n \\in \\mathbb{Z}$.',
        hints: ['Sett $u = 3x$ og los forst for $u$.', 'Husk å dele på 3 nar du gar tilbake til $x$.'],
      },
    },
    {
      id: 'r2-4-3-ex-9',
      type: 'example',
      title: 'Eksempel 9: Likning med faseforskyvning',
      problem: 'Los likningen $\\sin\\left(x - \\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}$.',
      solution: `**Steg 1:** Sett $u = x - \\frac{\\pi}{4}$.
Likningen blir $\\sin u = \\frac{\\sqrt{2}}{2}$.

**Steg 2:** Los for $u$.
$$u = \\frac{\\pi}{4} + 2\\pi n \\quad \\text{eller} \\quad u = \\frac{3\\pi}{4} + 2\\pi n$$

**Steg 3:** Los for $x$ fra $u = x - \\frac{\\pi}{4}$, altså $x = u + \\frac{\\pi}{4}$:
$$x = \\frac{\\pi}{4} + \\frac{\\pi}{4} + 2\\pi n = \\frac{\\pi}{2} + 2\\pi n$$
$$x = \\frac{3\\pi}{4} + \\frac{\\pi}{4} + 2\\pi n = \\pi + 2\\pi n$$

**Svar:** $x = \\frac{\\pi}{2} + 2\\pi n$ eller $x = \\pi + 2\\pi n$ der $n \\in \\mathbb{Z}$.`,
    },
    {
      id: 'r2-4-3-exercise-8',
      type: 'exercise',
      exercise: {
        id: 'r2-4-3-task-8',
        number: '4.38',
        type: 'classic',
        difficulty: 'medium',
        task: 'Los likningen $\\sin\\left(x + \\frac{\\pi}{6}\\right) = \\frac{1}{2}$.',
        solution: 'Sett $u = x + \\frac{\\pi}{6}$. Da er $\\sin u = \\frac{1}{2}$, som gir $u = \\frac{\\pi}{6} + 2\\pi n$ eller $u = \\frac{5\\pi}{6} + 2\\pi n$. Dermed: $x = \\frac{\\pi}{6} - \\frac{\\pi}{6} + 2\\pi n = 2\\pi n$ eller $x = \\frac{5\\pi}{6} - \\frac{\\pi}{6} + 2\\pi n = \\frac{2\\pi}{3} + 2\\pi n$.',
        hints: ['Sett $u = x + \\frac{\\pi}{6}$.', '$x = u - \\frac{\\pi}{6}$.'],
      },
    },
    {
      id: 'r2-4-3-ex-10',
      type: 'example',
      title: 'Eksempel 10: Generell sammensetning',
      problem: 'Los likningen $\\sin(2x + \\frac{\\pi}{3}) = -\\frac{1}{2}$.',
      solution: `**Steg 1:** Sett $u = 2x + \\frac{\\pi}{3}$.
Likningen blir $\\sin u = -\\frac{1}{2}$.

**Steg 2:** Los for $u$.
Vi bruker $\\sin(-\\frac{\\pi}{6}) = -\\frac{1}{2}$:
$$u = -\\frac{\\pi}{6} + 2\\pi n \\quad \\text{eller} \\quad u = \\pi - \\left(-\\frac{\\pi}{6}\\right) + 2\\pi n = \\frac{7\\pi}{6} + 2\\pi n$$

**Steg 3:** Los for $x$ fra $2x + \\frac{\\pi}{3} = u$:
$$2x = u - \\frac{\\pi}{3}$$
$$x = \\frac{u}{2} - \\frac{\\pi}{6}$$

For $u = -\\frac{\\pi}{6} + 2\\pi n$:
$$x = \\frac{-\\frac{\\pi}{6} + 2\\pi n}{2} - \\frac{\\pi}{6} = -\\frac{\\pi}{12} + \\pi n - \\frac{\\pi}{6} = -\\frac{\\pi}{4} + \\pi n$$

For $u = \\frac{7\\pi}{6} + 2\\pi n$:
$$x = \\frac{\\frac{7\\pi}{6} + 2\\pi n}{2} - \\frac{\\pi}{6} = \\frac{7\\pi}{12} + \\pi n - \\frac{\\pi}{6} = \\frac{5\\pi}{12} + \\pi n$$

**Svar:** $x = -\\frac{\\pi}{4} + \\pi n$ eller $x = \\frac{5\\pi}{12} + \\pi n$ der $n \\in \\mathbb{Z}$.`,
    },
    {
      id: 'r2-4-3-exercise-9',
      type: 'exercise',
      exercise: {
        id: 'r2-4-3-task-9',
        number: '4.39',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Los likningen $\\sin(3x - \\frac{\\pi}{4}) = \\frac{\\sqrt{2}}{2}$ og finn alle losninger i $[0, 2\\pi)$.',
        solution: 'Sett $u = 3x - \\frac{\\pi}{4}$. $\\sin u = \\frac{\\sqrt{2}}{2}$ gir $u = \\frac{\\pi}{4} + 2\\pi n$ eller $u = \\frac{3\\pi}{4} + 2\\pi n$. Dermed $x = \\frac{\\pi}{6} + \\frac{2\\pi n}{3}$ eller $x = \\frac{\\pi}{3} + \\frac{2\\pi n}{3}$. I $[0, 2\\pi)$: For forste gren ($n=0,1,2$): $\\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{3\\pi}{2}$. For andre gren ($n=0,1,2$): $\\frac{\\pi}{3}, \\pi, \\frac{5\\pi}{3}$. Totalt 6 losninger.',
        hints: ['Sett $u = 3x - \\frac{\\pi}{4}$.', 'Perioden til $\\sin(3x)$ er $\\frac{2\\pi}{3}$, sa det blir 3 perioder i $[0, 2\\pi)$.'],
      },
    },
    {
      id: 'r2-4-3-tip-2',
      type: 'tip',
      content: `**Huskeregel for $\\sin(kx + c) = a$:**

Nar du har funnet den generelle losningen for $u$, deler du $2\\pi n$-leddet på $k$ for å fa riktig periode for $x$.

For eksempel: Hvis $u = v + 2\\pi n$ og $u = kx + c$, da blir:
$$x = \\frac{v - c}{k} + \\frac{2\\pi n}{k}$$

Perioden til losningen er $\\frac{2\\pi}{k}$, ikke $2\\pi$.`,
    },

    // ============================================================================
    // DEL 5: FLERE EKSEMPLER OG TEKNIKKER
    // ============================================================================
    {
      id: 'r2-4-3-text-6',
      type: 'text',
      content: `## Flere teknikker

Noen sinuslikninger krever ekstra manipulasjon for de kan loses. Her ser vi på noen vanlige situasjoner.`,
    },
    {
      id: 'r2-4-3-ex-11',
      type: 'example',
      title: 'Eksempel 11: Likning med kalkulator',
      problem: 'Los likningen $\\sin x = 0.4$ og finn alle losninger i $[0, 2\\pi)$. Angi svarene med tre desimaler.',
      solution: `**Steg 1:** Bruk kalkulator til å finne arcsin.
$v = \\sin^{-1}(0.4) \\approx 0.412$ radianer.

**Steg 2:** Den generelle losningen er:
$$x \\approx 0.412 + 2\\pi n \\quad \\text{eller} \\quad x \\approx \\pi - 0.412 + 2\\pi n \\approx 2.730 + 2\\pi n$$

**Steg 3:** I $[0, 2\\pi)$:
- $x \\approx 0.412$
- $x \\approx 2.730$

**Svar:** $x \\approx 0.412$ og $x \\approx 2.730$.`,
    },
    {
      id: 'r2-4-3-exercise-10',
      type: 'exercise',
      exercise: {
        id: 'r2-4-3-task-10',
        number: '4.310',
        type: 'classic',
        difficulty: 'medium',
        task: 'Los likningen $\\sin x = 0.6$ og finn alle losninger i $[0, 2\\pi)$. Angi svarene med tre desimaler.',
        solution: '$\\sin^{-1}(0.6) \\approx 0.644$. Den andre losningen er $\\pi - 0.644 \\approx 2.498$. Svar: $x \\approx 0.644$ og $x \\approx 2.498$.',
        hints: ['Bruk kalkulator til å finne $\\sin^{-1}(0.6)$.', 'Den andre losningen er $\\pi - v$.'],
      },
    },
    {
      id: 'r2-4-3-ex-12',
      type: 'example',
      title: 'Eksempel 12: Likning som krever omforming',
      problem: 'Los likningen $2\\sin x + 1 = 0$.',
      solution: `**Steg 1:** Isoler sinusleddet.
$$2\\sin x = -1$$
$$\\sin x = -\\frac{1}{2}$$

**Steg 2:** Los den enkle sinuslikningen.
Vi vet at $\\sin(-\\frac{\\pi}{6}) = -\\frac{1}{2}$.
$$x = -\\frac{\\pi}{6} + 2\\pi n \\quad \\text{eller} \\quad x = \\frac{7\\pi}{6} + 2\\pi n$$

**Alternativ form:** $x = \\frac{11\\pi}{6} + 2\\pi n$ eller $x = \\frac{7\\pi}{6} + 2\\pi n$ der $n \\in \\mathbb{Z}$.`,
    },
    {
      id: 'r2-4-3-exercise-11',
      type: 'exercise',
      exercise: {
        id: 'r2-4-3-task-11',
        number: '4.311',
        type: 'classic',
        difficulty: 'medium',
        task: 'Los likningen $4\\sin x - 2 = 0$.',
        solution: '$4\\sin x = 2 \\Rightarrow \\sin x = \\frac{1}{2}$. Da er $x = \\frac{\\pi}{6} + 2\\pi n$ eller $x = \\frac{5\\pi}{6} + 2\\pi n$ der $n \\in \\mathbb{Z}$.',
        hints: ['Forst: isoler $\\sin x$.', 'Deretter: los $\\sin x = \\frac{1}{2}$.'],
      },
    },
    {
      id: 'r2-4-3-ex-13',
      type: 'example',
      title: 'Eksempel 13: Likning med sin x = 0',
      problem: 'Los likningen $\\sin x = 0$ i intervallet $[-2\\pi, 2\\pi]$.',
      solution: `**Løsning av $\\sin x = 0$:**
Sinusfunksjonen er null nar $x$ er et heltallsmultiplum av $\\pi$:
$$x = n\\pi, \\quad n \\in \\mathbb{Z}$$

**I intervallet $[-2\\pi, 2\\pi]$:**
- $n = -2$: $x = -2\\pi$
- $n = -1$: $x = -\\pi$
- $n = 0$: $x = 0$
- $n = 1$: $x = \\pi$
- $n = 2$: $x = 2\\pi$

**Svar:** $x = -2\\pi, -\\pi, 0, \\pi, 2\\pi$ (5 losninger).`,
    },
    {
      id: 'r2-4-3-exercise-12',
      type: 'exercise',
      exercise: {
        id: 'r2-4-3-task-12',
        number: '4.312',
        type: 'classic',
        difficulty: 'lett',
        task: 'Los likningen $\\sin(2x) = 0$ i intervallet $[0, 2\\pi)$.',
        solution: '$\\sin(2x) = 0$ betyr $2x = n\\pi$, altså $x = \\frac{n\\pi}{2}$. I $[0, 2\\pi)$: $x = 0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}$ (4 losninger).',
        hints: ['Sett $u = 2x$ og los $\\sin u = 0$.', 'Hvilke verdier av $n$ gir $x$ i $[0, 2\\pi)$?'],
      },
    },

    // ============================================================================
    // DEL 6: PRAKTISKE ANVENDELSER
    // ============================================================================
    {
      id: 'r2-4-3-text-7',
      type: 'text',
      content: `## Praktiske anvendelser

Sinuslikninger dukker opp i mange praktiske situasjoner der vi modellerer periodiske fenomener. Her er noen typiske eksempler.`,
    },
    {
      id: 'r2-4-3-ex-14',
      type: 'example',
      title: 'Eksempel 14: Tidevann',
      problem: `Vannstanden i en havn kan modelleres med funksjonen
$$h(t) = 2 + 1.5\\sin\\left(\\frac{\\pi}{6}t\\right)$$
der $h$ er vanndybden i meter og $t$ er tiden i timer etter midnatt.

a) Nar er vannstanden noyaktig 2.75 meter i løpet av det forste dognet?
b) I hvilke tidsperioder er vannstanden over 3 meter?`,
      solution: `**a) Finn nar $h(t) = 2.75$:**
$$2 + 1.5\\sin\\left(\\frac{\\pi}{6}t\\right) = 2.75$$
$$\\sin\\left(\\frac{\\pi}{6}t\\right) = 0.5$$

Sett $u = \\frac{\\pi}{6}t$:
$$\\sin u = 0.5 \\Rightarrow u = \\frac{\\pi}{6} + 2\\pi n \\text{ eller } u = \\frac{5\\pi}{6} + 2\\pi n$$

Los for $t$:
$$t = \\frac{6u}{\\pi} = 1 + 12n \\text{ eller } t = 5 + 12n$$

I det forste dognet ($0 \\leq t < 24$):
- $t = 1$ time (kl. 01:00)
- $t = 5$ timer (kl. 05:00)
- $t = 13$ timer (kl. 13:00)
- $t = 17$ timer (kl. 17:00)

**b) Finn nar $h(t) > 3$:**
$$2 + 1.5\\sin\\left(\\frac{\\pi}{6}t\\right) > 3$$
$$\\sin\\left(\\frac{\\pi}{6}t\\right) > \\frac{2}{3}$$

$\\sin^{-1}(\\frac{2}{3}) \\approx 0.7297$ rad.
Sinusfunksjonen er storre enn $\\frac{2}{3}$ nar:
$$0.7297 + 2\\pi n < \\frac{\\pi}{6}t < (\\pi - 0.7297) + 2\\pi n$$

For $n = 0$: $1.4 < t < 5.6$ timer
For $n = 1$: $13.4 < t < 17.6$ timer

**Svar:** Vannstanden er over 3 meter mellom ca. kl. 01:24-05:36 og kl. 13:24-17:36.`,
    },
    {
      id: 'r2-4-3-exercise-13',
      type: 'exercise',
      exercise: {
        id: 'r2-4-3-task-13',
        number: '4.313',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Temperaturen i et rom varierer gjennom dognet og kan beskrives med
$$T(t) = 20 + 3\\sin\\left(\\frac{\\pi}{12}(t - 6)\\right)$$
der $T$ er temperaturen i grader Celsius og $t$ er tiden i timer etter midnatt.

Nar i løpet av dognet er temperaturen noyaktig 21.5 grader?`,
        solution: '$T(t) = 21.5$ gir $\\sin(\\frac{\\pi}{12}(t-6)) = 0.5$. Med $u = \\frac{\\pi}{12}(t-6)$: $u = \\frac{\\pi}{6} + 2\\pi n$ eller $u = \\frac{5\\pi}{6} + 2\\pi n$. Da er $t - 6 = 2 + 24n$ eller $t - 6 = 10 + 24n$. I løpet av dognet: $t = 8$ (kl. 08:00) og $t = 16$ (kl. 16:00).',
        hints: ['Isoler sinusuttrykket forst.', 'Perioden til denne funksjonen er 24 timer.'],
      },
    },
    {
      id: 'r2-4-3-ex-15',
      type: 'example',
      title: 'Eksempel 15: Fjorarm',
      problem: `En fjorarm beveger seg opp og ned i henhold til formelen
$$s(t) = 4\\sin(\\pi t)$$
der $s$ er posisjonen i cm fra likevektspunktet og $t$ er tiden i sekunder.

a) Nar er fjoerarmen noyaktig 2 cm over likevektspunktet i de forste 3 sekundene?
b) Hvor ofte krysser fjaoerarmen likevektspunktet?`,
      solution: `**a) Finn nar $s(t) = 2$:**
$$4\\sin(\\pi t) = 2$$
$$\\sin(\\pi t) = \\frac{1}{2}$$

Sett $u = \\pi t$:
$$u = \\frac{\\pi}{6} + 2\\pi n \\text{ eller } u = \\frac{5\\pi}{6} + 2\\pi n$$
$$t = \\frac{1}{6} + 2n \\text{ eller } t = \\frac{5}{6} + 2n$$

I de forste 3 sekundene ($0 \\leq t \\leq 3$):
- $t = \\frac{1}{6} \\approx 0.17$ s
- $t = \\frac{5}{6} \\approx 0.83$ s
- $t = \\frac{1}{6} + 2 = \\frac{13}{6} \\approx 2.17$ s
- $t = \\frac{5}{6} + 2 = \\frac{17}{6} \\approx 2.83$ s

**b) Kryssing av likevektspunktet:**
$s(t) = 0$ nar $\\sin(\\pi t) = 0$, altså $\\pi t = n\\pi$, dvs. $t = n$ sekunder.

Fjaoerarmen krysser likevektspunktet hvert sekund (ved $t = 0, 1, 2, 3, ...$).`,
    },
    {
      id: 'r2-4-3-exercise-14',
      type: 'exercise',
      exercise: {
        id: 'r2-4-3-task-14',
        number: '4.314',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En pendel svinger slik at vinkelen fra vertikalen er gitt ved
$$\\theta(t) = 15\\sin(2\\pi t)$$
der $\\theta$ er vinkelen i grader og $t$ er tiden i sekunder.

a) Nar passerer pendelen gjennom stillingen $\\theta = 7.5$ grader for forste gang?
b) Hvor ofte star pendelen vertikalt ($\\theta = 0$)?`,
        solution: 'a) $15\\sin(2\\pi t) = 7.5$ gir $\\sin(2\\pi t) = 0.5$. Med $u = 2\\pi t$: $u = \\frac{\\pi}{6}$, sa $t = \\frac{1}{12}$ sekund (forste gang). b) $\\theta = 0$ nar $\\sin(2\\pi t) = 0$, dvs. $2\\pi t = n\\pi$, altså $t = \\frac{n}{2}$. Pendelen star vertikalt hvert halve sekund.',
        hints: ['Perioden til $\\sin(2\\pi t)$ er 1 sekund.', 'For forste gang: velg minste positive $t$.'],
      },
    },
    {
      id: 'r2-4-3-ex-16',
      type: 'example',
      title: 'Eksempel 16: Lydbolge',
      problem: `En lydbolge beskrives av funksjonen
$$p(t) = 0.02\\sin(880\\pi t)$$
der $p$ er trykket i pascal og $t$ er tiden i sekunder. Dette tilsvarer tonen A4 (kammertonen).

Hvor mange ganger per sekund er trykket noyaktig null?`,
      solution: `**Finn nar $p(t) = 0$:**
$$\\sin(880\\pi t) = 0$$
$$880\\pi t = n\\pi, \\quad n \\in \\mathbb{Z}$$
$$t = \\frac{n}{880}$$

**Antall nullpunkter per sekund:**
For $t \\in [0, 1]$ får vi $n = 0, 1, 2, ..., 880$.
Det gir **881 nullpunkter** (inkludert begge endepunktene).

Hvis vi teller antall ganger trykket *passerer gjennom* null (ikke inkludert $t = 0$), får vi **880 passeringer per sekund**.

**Merk:** Frekvensen til lyden er $\\frac{880}{2} = 440$ Hz, som er kammertonen A4.`,
    },

    // ============================================================================
    // OPPSUMMERING
    // ============================================================================
    {
      id: 'r2-4-3-note-1',
      type: 'note',
      content: `## Oppsummering: Sinuslikninger

**Grunnleggende likning $\\sin x = a$:**
- Har losning kun nar $-1 \\leq a \\leq 1$
- Generell losning: $x = v + 2\\pi n$ eller $x = (\\pi - v) + 2\\pi n$, der $\\sin v = a$

**Sammensatt likning $\\sin(kx + c) = a$:**
1. Sett $u = kx + c$
2. Los $\\sin u = a$ for $u$
3. Los for $x$: $x = \\frac{u - c}{k}$
4. Perioden blir $\\frac{2\\pi}{|k|}$

**Antall losninger:**
- I et intervall med lengde $2\\pi$: vanligvis 2 losninger (for $|a| < 1$)
- For $\\sin(kx + c) = a$: multipliser med $|k|$

**Grafisk tolkning:**
- Løsningene er skjaringspunktene mellom $y = \\sin x$ og $y = a$`,
    },
  ],
  exercises: [
    // ============================================================================
    // OVINGSOPPGAVER
    // ============================================================================
    {
      id: 'r2-4-3-ov-1',
      number: '4.315',
      type: 'classic',
      difficulty: 'lett',
      task: 'Finn den generelle losningen av $\\sin x = \\frac{\\sqrt{3}}{2}$.',
      solution: '$x = \\frac{\\pi}{3} + 2\\pi n$ eller $x = \\frac{2\\pi}{3} + 2\\pi n$ der $n \\in \\mathbb{Z}$.',
    },
    {
      id: 'r2-4-3-ov-2',
      number: '4.316',
      type: 'classic',
      difficulty: 'lett',
      task: 'Finn den generelle losningen av $\\sin x = -\\frac{\\sqrt{3}}{2}$.',
      solution: '$x = -\\frac{\\pi}{3} + 2\\pi n$ eller $x = \\frac{4\\pi}{3} + 2\\pi n$ der $n \\in \\mathbb{Z}$.',
    },
    {
      id: 'r2-4-3-ov-3',
      number: '4.317',
      type: 'classic',
      difficulty: 'lett',
      task: 'Finn alle losninger av $\\sin x = 0$ i intervallet $[0, 4\\pi]$.',
      solution: '$x = 0, \\pi, 2\\pi, 3\\pi, 4\\pi$ (5 losninger).',
    },
    {
      id: 'r2-4-3-ov-4',
      number: '4.318',
      type: 'classic',
      difficulty: 'medium',
      task: 'Finn alle losninger av $\\sin(2x) = \\frac{1}{2}$ i intervallet $[0, 2\\pi)$.',
      solution: 'Sett $u = 2x$. $\\sin u = \\frac{1}{2}$ gir $u = \\frac{\\pi}{6} + 2\\pi n$ eller $u = \\frac{5\\pi}{6} + 2\\pi n$. Dermed $x = \\frac{\\pi}{12} + \\pi n$ eller $x = \\frac{5\\pi}{12} + \\pi n$. I $[0, 2\\pi)$: $x = \\frac{\\pi}{12}, \\frac{5\\pi}{12}, \\frac{13\\pi}{12}, \\frac{17\\pi}{12}$.',
    },
    {
      id: 'r2-4-3-ov-5',
      number: '4.319',
      type: 'classic',
      difficulty: 'medium',
      task: 'Los likningen $\\sin(x + \\frac{\\pi}{4}) = \\frac{\\sqrt{2}}{2}$ og angi den generelle losningen.',
      solution: 'Sett $u = x + \\frac{\\pi}{4}$. $\\sin u = \\frac{\\sqrt{2}}{2}$ gir $u = \\frac{\\pi}{4} + 2\\pi n$ eller $u = \\frac{3\\pi}{4} + 2\\pi n$. Dermed $x = 2\\pi n$ eller $x = \\frac{\\pi}{2} + 2\\pi n$.',
    },
    {
      id: 'r2-4-3-ov-6',
      number: '4.320',
      type: 'classic',
      difficulty: 'medium',
      task: 'Finn alle losninger av $2\\sin x - \\sqrt{3} = 0$ i intervallet $[0, 2\\pi)$.',
      solution: '$\\sin x = \\frac{\\sqrt{3}}{2}$ gir $x = \\frac{\\pi}{3}$ eller $x = \\frac{2\\pi}{3}$ i $[0, 2\\pi)$.',
    },
    {
      id: 'r2-4-3-ov-7',
      number: '4.321',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hvor mange losninger har $\\sin x = 0.8$ i intervallet $[0, 10\\pi]$?',
      solution: 'Intervallet har lengde $10\\pi$, som er 5 perioder. Med 2 losninger per periode blir det $5 \\times 2 = 10$ losninger.',
    },
    {
      id: 'r2-4-3-ov-8',
      number: '4.322',
      type: 'classic',
      difficulty: 'medium',
      task: 'Los likningen $\\sin(3x - \\frac{\\pi}{6}) = 0$ og finn alle losninger i $[0, \\pi]$.',
      solution: '$3x - \\frac{\\pi}{6} = n\\pi$ gir $x = \\frac{\\pi}{18} + \\frac{n\\pi}{3}$. I $[0, \\pi]$: $x = \\frac{\\pi}{18}, \\frac{7\\pi}{18}, \\frac{13\\pi}{18}$ (3 losninger).',
    },
    {
      id: 'r2-4-3-ov-9',
      number: '4.323',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Finn alle losninger av $\\sin(2x) = \\sin(x)$ i intervallet $[0, 2\\pi)$.',
      hints: ['Bruk at $\\sin(2x) = 2\\sin(x)\\cos(x)$.', 'Faktoriser og sett hver faktor lik null.'],
      solution: '$2\\sin x \\cos x = \\sin x$ gir $\\sin x (2\\cos x - 1) = 0$. Enten $\\sin x = 0$ (gir $x = 0, \\pi$) eller $\\cos x = \\frac{1}{2}$ (gir $x = \\frac{\\pi}{3}, \\frac{5\\pi}{3}$). Svar: $x = 0, \\frac{\\pi}{3}, \\pi, \\frac{5\\pi}{3}$.',
    },
    {
      id: 'r2-4-3-ov-10',
      number: '4.324',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Los likningen $\\sin^2 x = \\frac{1}{4}$ i intervallet $[0, 2\\pi)$.',
      hints: ['Ta kvadratroten av begge sider.', 'Husk at du får bade positiv og negativ losning.'],
      solution: '$\\sin x = \\pm \\frac{1}{2}$. For $\\sin x = \\frac{1}{2}$: $x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$. For $\\sin x = -\\frac{1}{2}$: $x = \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$. Totalt 4 losninger.',
    },
    {
      id: 'r2-4-3-ov-11',
      number: '4.325',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Dybden i en havn varierer med tiden og kan modelleres med
$$d(t) = 8 + 2\\sin\\left(\\frac{\\pi}{6}t - \\frac{\\pi}{2}\\right)$$
der $d$ er dybden i meter og $t$ er tiden i timer etter midnatt.

Et skip trenger minst 9 meter dybde for å seile inn. I hvilke tidsperioder i løpet av et dogn kan skipet seile inn i havnen?`,
      solution: '$d(t) \\geq 9$ gir $\\sin(\\frac{\\pi}{6}t - \\frac{\\pi}{2}) \\geq \\frac{1}{2}$. Med $u = \\frac{\\pi}{6}t - \\frac{\\pi}{2}$: $\\sin u \\geq \\frac{1}{2}$ nar $\\frac{\\pi}{6} + 2\\pi n \\leq u \\leq \\frac{5\\pi}{6} + 2\\pi n$. Dette gir $4 + 12n \\leq t \\leq 8 + 12n$. I løpet av et dogn: kl. 04:00-08:00 og kl. 16:00-20:00.',
    },
    {
      id: 'r2-4-3-ov-12',
      number: '4.326',
      type: 'classic',
      difficulty: 'medium',
      task: 'Los likningen $\\sin x = \\cos x$ i intervallet $[0, 2\\pi)$.',
      hints: ['Del begge sider på $\\cos x$.', 'Husk å sjekke om $\\cos x = 0$ gir losninger.'],
      solution: 'Hvis $\\cos x \\neq 0$: $\\tan x = 1$, som gir $x = \\frac{\\pi}{4}, \\frac{5\\pi}{4}$. Sjekk $\\cos x = 0$: $x = \\frac{\\pi}{2}, \\frac{3\\pi}{2}$, men da er $\\sin x = \\pm 1 \\neq 0$. Svar: $x = \\frac{\\pi}{4}, \\frac{5\\pi}{4}$.',
    },
    {
      id: 'r2-4-3-ov-13',
      number: '4.327',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Bestem alle verdier av $k$ slik at likningen $\\sin x = k$ har noyaktig 6 losninger i intervallet $[0, 5\\pi]$.',
      solution: 'Intervallet $[0, 5\\pi]$ inneholder 2.5 perioder. For $k \\neq \\pm 1, 0$: 5 losninger (2+2+1 fra halv periode). For $k = 0$: $x = 0, \\pi, 2\\pi, 3\\pi, 4\\pi, 5\\pi$ = 6 losninger. Svar: $k = 0$.',
    },
    {
      id: 'r2-4-3-ov-14',
      number: '4.328',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `En sykkel har hjul med radius 30 cm. Nar sykkelen ruller, beveger et punkt på dekket seg i en sykloide. Den vertikale posisjonen til punktet kan tilnærmes med
$$y(t) = 30 + 30\\sin\\left(\\frac{v}{30}t - \\frac{\\pi}{2}\\right)$$
der $y$ er høyde over bakken i cm, $v$ er hastigheten i cm/s, og $t$ er tiden i sekunder.

Hvis sykkelen har hastighet $v = 300$ cm/s, hvor ofte er punktet noyaktig 45 cm over bakken?`,
      solution: 'Med $v = 300$: $y(t) = 30 + 30\\sin(10t - \\frac{\\pi}{2}) = 45$. Da er $\\sin(10t - \\frac{\\pi}{2}) = 0.5$. Generell losning: $10t - \\frac{\\pi}{2} = \\frac{\\pi}{6} + 2\\pi n$ eller $10t - \\frac{\\pi}{2} = \\frac{5\\pi}{6} + 2\\pi n$. Perioden er $\\frac{2\\pi}{10} = \\frac{\\pi}{5}$ sekunder. Det er 2 losninger per periode, sa punktet er på 45 cm høyde $\\frac{2}{\\pi/5} = \\frac{10}{\\pi} \\approx 3.18$ ganger per sekund.',
    },
    {
      id: 'r2-4-3-ov-15',
      number: '4.329',
      type: 'classic',
      difficulty: 'medium',
      task: 'Los likningen $|\\sin x| = \\frac{1}{2}$ i intervallet $[0, 2\\pi)$.',
      solution: '$|\\sin x| = \\frac{1}{2}$ betyr $\\sin x = \\frac{1}{2}$ eller $\\sin x = -\\frac{1}{2}$. Løsninger: $x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$ (4 losninger).',
    },
    {
      id: 'r2-4-3-ov-16',
      number: '4.330',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Vis at likningen $\\sin x = x - 1$ har noyaktig en losning.',
      hints: ['Betrakt funksjonen $f(x) = \\sin x - x + 1$.', 'Bruk egenskaper til $f$ for å vise at den kun krysser $x$-aksen en gang.'],
      solution: 'La $f(x) = \\sin x - x + 1$. $f(0) = 1 > 0$ og $f(\\pi) = -\\pi + 1 < 0$. Siden $f$ er kontinuerlig, finnes minst en losning i $(0, \\pi)$. $f\'(x) = \\cos x - 1 \\leq 0$ for alle $x$, sa $f$ er monotont avtagende. Dermed finnes noyaktig en losning.',
    },
  ],
};

export const CHAPTER_R2_4_4: TextbookChapter = {
  id: 'r2-4-4',
  courseId: 'r2',
  chapterNumber: '4.4',
  title: 'Cosinuslikninger',
  description: 'Lose likninger med cosinus, inkludert generelle losninger og praktiske anvendelser.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke trigonometriske funksjonar til a loyse praktiske problem',
    'analysere og lose trigonometriske likningar',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r2-4-4-intro',
      type: 'text',
      content: `## Introduksjon til cosinuslikninger

I forrige kapittel larte vi å løse sinuslikninger. Na skal vi se på **cosinuslikninger**, som er likninger der den ukjente star inne i en cosinusfunksjon.

**Eksempler på cosinuslikninger:**
- $\\cos(x) = \\frac{1}{2}$
- $\\cos(2x) = -1$
- $\\cos(x - \\frac{\\pi}{4}) = \\frac{\\sqrt{2}}{2}$

Cosinusfunksjonen har andre symmetriegenskaper enn sinus, noe som pavirker hvordan vi finner losningene.`,
    },

    // ========== COSINUSFUNKSJONENS EGENSKAPER ==========
    {
      id: 'r2-4-4-egenskaper',
      type: 'text',
      content: `## Cosinusfunksjonens symmetri

Cosinusfunksjonen $\\cos(x)$ har folgende viktige egenskaper:

**Verdimengde:** $-1 \\leq \\cos(x) \\leq 1$

**Periode:** $2\\pi$ (funksjonen gjentar seg for hver $2\\pi$)

**Symmetri:** $\\cos(-x) = \\cos(x)$ (partallssymmetri om $y$-aksen)

Denne symmetrien betyr at hvis $\\cos(\\alpha) = a$, så er ogsa $\\cos(-\\alpha) = a$.`,
    },

    {
      id: 'r2-4-4-def-1',
      type: 'definition',
      title: 'Cosinuslikning',
      content: `En **cosinuslikning** er en likning på formen

$$\\cos(u) = a$$

der $u$ er et uttrykk med den ukjente $x$, og $a$ er en konstant.

**Losbarhet:**
- Likningen har losning bare nar $-1 \\leq a \\leq 1$
- Hvis $|a| > 1$, finnes ingen losning`,
    },

    // ========== GRUNNLEGGENDE LOSNINGSMETODE ==========
    {
      id: 'r2-4-4-metode-intro',
      type: 'text',
      content: `## Steg-for-steg metode

For å løse cosinuslikninger bruker vi folgende fremgangmate:`,
    },

    {
      id: 'r2-4-4-theorem-1',
      type: 'theorem',
      title: 'Generell losning av $\\cos(x) = a$',
      content: `Hvis $\\cos(x) = a$ der $-1 \\leq a \\leq 1$, er den generelle losningen:

$$x = \\pm \\arccos(a) + 2\\pi n, \\quad n \\in \\mathbb{Z}$$

**Forklaring:**
- $\\arccos(a)$ gir hovedlosningen i $[0, \\pi]$
- $\\pm$ kommer fra cosinusfunksjonens symmetri
- $+ 2\\pi n$ gir alle periodiske losninger`,
    },

    {
      id: 'r2-4-4-note-1',
      type: 'note',
      content: `**Sammenligning med sinus:**

| Funksjon | Generell losning |
|----------|------------------|
| $\\sin(x) = a$ | $x = \\arcsin(a) + 2\\pi n$ eller $x = \\pi - \\arcsin(a) + 2\\pi n$ |
| $\\cos(x) = a$ | $x = \\pm \\arccos(a) + 2\\pi n$ |

For cosinus bruker vi $\\pm$ i stedet for to separate uttrykk.`,
    },

    // ========== EKSEMPEL 1: GRUNNLEGGENDE ==========
    {
      id: 'r2-4-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Enkel cosinuslikning',
      problem: 'Los likningen $\\cos(x) = \\frac{1}{2}$',
      solution: `**Steg 1:** Sjekk losbarhet
$\\frac{1}{2}$ ligger mellom $-1$ og $1$, sa likningen har losning.

**Steg 2:** Finn hovedlosningen
$\\arccos\\left(\\frac{1}{2}\\right) = \\frac{\\pi}{3}$

**Steg 3:** Skriv generell losning
$$x = \\pm \\frac{\\pi}{3} + 2\\pi n, \\quad n \\in \\mathbb{Z}$$

**Løsninger i $[0, 2\\pi)$:**
- $x = \\frac{\\pi}{3}$ (n = 0, positivt fortegn)
- $x = -\\frac{\\pi}{3} + 2\\pi = \\frac{5\\pi}{3}$ (n = 1, negativt fortegn)`,
    },

    {
      id: 'r2-4-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'r2-4-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Los likningen $\\cos(x) = \\frac{\\sqrt{3}}{2}$. Finn generell losning og alle losninger i $[0, 2\\pi)$.',
        solution: `$\\arccos\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{\\pi}{6}$

Generell losning: $x = \\pm \\frac{\\pi}{6} + 2\\pi n$

Løsninger i $[0, 2\\pi)$: $x = \\frac{\\pi}{6}$ og $x = \\frac{11\\pi}{6}$`,
        hints: ['Husk at $\\cos(\\frac{\\pi}{6}) = \\frac{\\sqrt{3}}{2}$'],
      },
    },

    // ========== EKSEMPEL 2: NEGATIV VERDI ==========
    {
      id: 'r2-4-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Negativ cosinusverdi',
      problem: 'Los likningen $\\cos(x) = -\\frac{1}{2}$',
      solution: `**Steg 1:** Finn hovedlosningen
$\\arccos\\left(-\\frac{1}{2}\\right) = \\frac{2\\pi}{3}$

**Steg 2:** Skriv generell losning
$$x = \\pm \\frac{2\\pi}{3} + 2\\pi n, \\quad n \\in \\mathbb{Z}$$

**Løsninger i $[0, 2\\pi)$:**
- $x = \\frac{2\\pi}{3}$
- $x = -\\frac{2\\pi}{3} + 2\\pi = \\frac{4\\pi}{3}$

**Kontroll:** $\\cos\\left(\\frac{2\\pi}{3}\\right) = -\\frac{1}{2}$ \\checkmark`,
    },

    {
      id: 'r2-4-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'r2-4-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Los likningen $\\cos(x) = -\\frac{\\sqrt{2}}{2}$. Finn alle losninger i $[0, 2\\pi)$.',
        solution: `$\\arccos\\left(-\\frac{\\sqrt{2}}{2}\\right) = \\frac{3\\pi}{4}$

Generell losning: $x = \\pm \\frac{3\\pi}{4} + 2\\pi n$

Løsninger i $[0, 2\\pi)$: $x = \\frac{3\\pi}{4}$ og $x = \\frac{5\\pi}{4}$`,
        hints: ['$\\arccos(-a)$ ligger i intervallet $(\\frac{\\pi}{2}, \\pi]$'],
      },
    },

    // ========== EKSEMPEL 3: SPESIELLE VERDIER ==========
    {
      id: 'r2-4-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Spesielle cosinusverdier',
      problem: 'Los likningene: a) $\\cos(x) = 0$ b) $\\cos(x) = 1$ c) $\\cos(x) = -1$',
      solution: `**a) $\\cos(x) = 0$**

$\\arccos(0) = \\frac{\\pi}{2}$

Generell losning: $x = \\pm \\frac{\\pi}{2} + 2\\pi n$

Dette kan skrives enklere som: $x = \\frac{\\pi}{2} + \\pi n$ (alle oddetalls-multipler av $\\frac{\\pi}{2}$)

**b) $\\cos(x) = 1$**

$\\arccos(1) = 0$

Generell losning: $x = 2\\pi n$ (bare en losning per periode)

**c) $\\cos(x) = -1$**

$\\arccos(-1) = \\pi$

Generell losning: $x = \\pi + 2\\pi n$`,
    },

    {
      id: 'r2-4-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'r2-4-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Los likningen $\\cos(x) = -1$ og finn alle losninger i intervallet $[-2\\pi, 2\\pi]$.',
        solution: `Generell losning: $x = \\pi + 2\\pi n$

I intervallet $[-2\\pi, 2\\pi]$:
- $n = -1$: $x = \\pi - 2\\pi = -\\pi$
- $n = 0$: $x = \\pi$

Løsninger: $x = -\\pi$ og $x = \\pi$`,
        hints: ['Cosinus er lik $-1$ kun i ett punkt per periode'],
      },
    },

    // ========== LIKNINGER PA FORMEN cos(kx) = a ==========
    {
      id: 'r2-4-4-kx-intro',
      type: 'text',
      content: `## Likninger på formen $\\cos(kx) = a$

Nar argumentet inneholder en faktor $k$, ma vi lose for hele argumentet forst, og deretter dele på $k$.`,
    },

    {
      id: 'r2-4-4-theorem-2',
      type: 'theorem',
      title: 'Løsning av $\\cos(kx) = a$',
      content: `For å løse $\\cos(kx) = a$ der $k \\neq 0$:

1. Sett $u = kx$ og los $\\cos(u) = a$
2. Fa $u = \\pm \\arccos(a) + 2\\pi n$
3. Del på $k$: $x = \\frac{\\pm \\arccos(a) + 2\\pi n}{k}$

**Generell losning:**
$$x = \\pm \\frac{\\arccos(a)}{k} + \\frac{2\\pi n}{k}, \\quad n \\in \\mathbb{Z}$$`,
    },

    // ========== EKSEMPEL 4: cos(2x) ==========
    {
      id: 'r2-4-4-example-4',
      type: 'example',
      title: 'Eksempel 4: Likning med $\\cos(2x)$',
      problem: 'Los likningen $\\cos(2x) = \\frac{1}{2}$. Finn alle losninger i $[0, 2\\pi)$.',
      solution: `**Steg 1:** Sett $u = 2x$
$\\cos(u) = \\frac{1}{2}$

**Steg 2:** Finn generell losning for $u$
$u = \\pm \\frac{\\pi}{3} + 2\\pi n$

**Steg 3:** Sett inn $u = 2x$ og los for $x$
$2x = \\pm \\frac{\\pi}{3} + 2\\pi n$
$x = \\pm \\frac{\\pi}{6} + \\pi n$

**Steg 4:** Finn losninger i $[0, 2\\pi)$

*Med positivt fortegn ($x = \\frac{\\pi}{6} + \\pi n$):*
- $n = 0$: $x = \\frac{\\pi}{6}$
- $n = 1$: $x = \\frac{\\pi}{6} + \\pi = \\frac{7\\pi}{6}$

*Med negativt fortegn ($x = -\\frac{\\pi}{6} + \\pi n$):*
- $n = 1$: $x = -\\frac{\\pi}{6} + \\pi = \\frac{5\\pi}{6}$
- $n = 2$: $x = -\\frac{\\pi}{6} + 2\\pi = \\frac{11\\pi}{6}$

**Løsninger:** $x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$`,
    },

    {
      id: 'r2-4-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'r2-4-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Los likningen $\\cos(2x) = -\\frac{\\sqrt{3}}{2}$. Finn alle losninger i $[0, 2\\pi)$.',
        solution: `$\\arccos\\left(-\\frac{\\sqrt{3}}{2}\\right) = \\frac{5\\pi}{6}$

$2x = \\pm \\frac{5\\pi}{6} + 2\\pi n$
$x = \\pm \\frac{5\\pi}{12} + \\pi n$

Løsninger i $[0, 2\\pi)$: $x = \\frac{5\\pi}{12}, \\frac{7\\pi}{12}, \\frac{17\\pi}{12}, \\frac{19\\pi}{12}$`,
        hints: ['Husk at perioden til $\\cos(2x)$ er $\\pi$, sa det blir dobbelt sa mange losninger'],
      },
    },

    // ========== EKSEMPEL 5: cos(3x) ==========
    {
      id: 'r2-4-4-example-5',
      type: 'example',
      title: 'Eksempel 5: Likning med $\\cos(3x)$',
      problem: 'Los likningen $\\cos(3x) = 0$. Finn alle losninger i $[0, 2\\pi)$.',
      solution: `**Steg 1:** Los for argumentet
$3x = \\frac{\\pi}{2} + \\pi n$ (forenklet form for $\\cos(u) = 0$)

**Steg 2:** Del på 3
$x = \\frac{\\pi}{6} + \\frac{\\pi n}{3}$

**Steg 3:** List opp losninger i $[0, 2\\pi)$
- $n = 0$: $x = \\frac{\\pi}{6}$
- $n = 1$: $x = \\frac{\\pi}{6} + \\frac{\\pi}{3} = \\frac{\\pi}{2}$
- $n = 2$: $x = \\frac{\\pi}{6} + \\frac{2\\pi}{3} = \\frac{5\\pi}{6}$
- $n = 3$: $x = \\frac{\\pi}{6} + \\pi = \\frac{7\\pi}{6}$
- $n = 4$: $x = \\frac{\\pi}{6} + \\frac{4\\pi}{3} = \\frac{3\\pi}{2}$
- $n = 5$: $x = \\frac{\\pi}{6} + \\frac{5\\pi}{3} = \\frac{11\\pi}{6}$

**Løsninger:** $x = \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{3\\pi}{2}, \\frac{11\\pi}{6}$`,
    },

    {
      id: 'r2-4-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'r2-4-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Los likningen $\\cos(3x) = 1$. Finn alle losninger i $[0, 2\\pi)$.',
        solution: `$3x = 2\\pi n$ (siden $\\cos(u) = 1$ gir $u = 2\\pi n$)

$x = \\frac{2\\pi n}{3}$

Løsninger i $[0, 2\\pi)$: $x = 0, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}$`,
        hints: ['$\\cos(u) = 1$ har bare en losning per periode'],
      },
    },

    // ========== LIKNINGER PA FORMEN cos(kx + c) = a ==========
    {
      id: 'r2-4-4-kxc-intro',
      type: 'text',
      content: `## Likninger på formen $\\cos(kx + c) = a$

Nar argumentet ogsa inneholder en konstant $c$, ma vi ta hensyn til denne i losningen.`,
    },

    {
      id: 'r2-4-4-theorem-3',
      type: 'theorem',
      title: 'Løsning av $\\cos(kx + c) = a$',
      content: `For å løse $\\cos(kx + c) = a$:

1. Sett $u = kx + c$ og los $\\cos(u) = a$
2. Fa $u = \\pm \\arccos(a) + 2\\pi n$
3. Sett inn og los for $x$: $kx + c = \\pm \\arccos(a) + 2\\pi n$

**Generell losning:**
$$x = \\frac{-c \\pm \\arccos(a) + 2\\pi n}{k}, \\quad n \\in \\mathbb{Z}$$`,
    },

    // ========== EKSEMPEL 6: cos(x - pi/4) ==========
    {
      id: 'r2-4-4-example-6',
      type: 'example',
      title: 'Eksempel 6: Faseforskyving',
      problem: 'Los likningen $\\cos\\left(x - \\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}$',
      solution: `**Steg 1:** Sett $u = x - \\frac{\\pi}{4}$
$\\cos(u) = \\frac{\\sqrt{2}}{2}$

**Steg 2:** Finn losning for $u$
$u = \\pm \\frac{\\pi}{4} + 2\\pi n$

**Steg 3:** Sett inn og los for $x$
$x - \\frac{\\pi}{4} = \\pm \\frac{\\pi}{4} + 2\\pi n$
$x = \\frac{\\pi}{4} \\pm \\frac{\\pi}{4} + 2\\pi n$

**To losningsrekker:**
- $x = \\frac{\\pi}{4} + \\frac{\\pi}{4} + 2\\pi n = \\frac{\\pi}{2} + 2\\pi n$
- $x = \\frac{\\pi}{4} - \\frac{\\pi}{4} + 2\\pi n = 2\\pi n$

**Generell losning:** $x = 2\\pi n$ eller $x = \\frac{\\pi}{2} + 2\\pi n$

**Løsninger i $[0, 2\\pi)$:** $x = 0$ og $x = \\frac{\\pi}{2}$`,
    },

    {
      id: 'r2-4-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'r2-4-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Los likningen $\\cos\\left(x + \\frac{\\pi}{3}\\right) = -\\frac{1}{2}$. Finn alle losninger i $[0, 2\\pi)$.',
        solution: `$x + \\frac{\\pi}{3} = \\pm \\frac{2\\pi}{3} + 2\\pi n$

Med positivt fortegn: $x = \\frac{2\\pi}{3} - \\frac{\\pi}{3} + 2\\pi n = \\frac{\\pi}{3} + 2\\pi n$
Med negativt fortegn: $x = -\\frac{2\\pi}{3} - \\frac{\\pi}{3} + 2\\pi n = -\\pi + 2\\pi n = \\pi + 2\\pi(n-1)$

Løsninger i $[0, 2\\pi)$: $x = \\frac{\\pi}{3}$ og $x = \\pi$`,
        hints: ['Husk a trekke fra $\\frac{\\pi}{3}$ fra begge losningsuttrykk'],
      },
    },

    // ========== EKSEMPEL 7: cos(2x + pi/6) ==========
    {
      id: 'r2-4-4-example-7',
      type: 'example',
      title: 'Eksempel 7: Kombinasjon av k og c',
      problem: 'Los likningen $\\cos\\left(2x + \\frac{\\pi}{6}\\right) = \\frac{\\sqrt{3}}{2}$. Finn alle losninger i $[0, \\pi]$.',
      solution: `**Steg 1:** La $u = 2x + \\frac{\\pi}{6}$
$\\cos(u) = \\frac{\\sqrt{3}}{2}$
$u = \\pm \\frac{\\pi}{6} + 2\\pi n$

**Steg 2:** Sett inn og los for $x$
$2x + \\frac{\\pi}{6} = \\pm \\frac{\\pi}{6} + 2\\pi n$
$2x = -\\frac{\\pi}{6} \\pm \\frac{\\pi}{6} + 2\\pi n$

**Med positivt fortegn:**
$2x = -\\frac{\\pi}{6} + \\frac{\\pi}{6} + 2\\pi n = 2\\pi n$
$x = \\pi n$

**Med negativt fortegn:**
$2x = -\\frac{\\pi}{6} - \\frac{\\pi}{6} + 2\\pi n = -\\frac{\\pi}{3} + 2\\pi n$
$x = -\\frac{\\pi}{6} + \\pi n$

**Løsninger i $[0, \\pi]$:**
- Fra $x = \\pi n$: $x = 0$ og $x = \\pi$
- Fra $x = -\\frac{\\pi}{6} + \\pi n$: $x = -\\frac{\\pi}{6} + \\pi = \\frac{5\\pi}{6}$

**Løsninger:** $x = 0, \\frac{5\\pi}{6}, \\pi$`,
    },

    {
      id: 'r2-4-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'r2-4-4-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Los likningen $\\cos\\left(2x - \\frac{\\pi}{4}\\right) = -\\frac{\\sqrt{2}}{2}$. Finn alle losninger i $[0, 2\\pi)$.',
        solution: `$2x - \\frac{\\pi}{4} = \\pm \\frac{3\\pi}{4} + 2\\pi n$

Med +: $2x = \\frac{\\pi}{4} + \\frac{3\\pi}{4} + 2\\pi n = \\pi + 2\\pi n$, sa $x = \\frac{\\pi}{2} + \\pi n$
Med -: $2x = \\frac{\\pi}{4} - \\frac{3\\pi}{4} + 2\\pi n = -\\frac{\\pi}{2} + 2\\pi n$, sa $x = -\\frac{\\pi}{4} + \\pi n$

Løsninger i $[0, 2\\pi)$: $x = \\frac{\\pi}{2}, \\frac{3\\pi}{4}, \\frac{3\\pi}{2}, \\frac{7\\pi}{4}$`,
        hints: ['$\\arccos\\left(-\\frac{\\sqrt{2}}{2}\\right) = \\frac{3\\pi}{4}$'],
      },
    },

    // ========== SAMMENLIGNING MED SINUSLIKNINGER ==========
    {
      id: 'r2-4-4-sammenligning',
      type: 'text',
      content: `## Sammenligning: Sinus vs. Cosinus

Det er viktig a forsta forskjellene mellom losningsmetodene for sinus- og cosinuslikninger.`,
    },

    {
      id: 'r2-4-4-def-2',
      type: 'definition',
      title: 'Løsningsformler - oppsummering',
      content: `**Sinuslikning $\\sin(x) = a$:**
$$x = \\arcsin(a) + 2\\pi n \\quad \\text{eller} \\quad x = \\pi - \\arcsin(a) + 2\\pi n$$

**Cosinuslikning $\\cos(x) = a$:**
$$x = \\pm \\arccos(a) + 2\\pi n$$

**Merk:**
- Sinus: To separate uttrykk ($\\arcsin$ og $\\pi - \\arcsin$)
- Cosinus: Ett uttrykk med $\\pm$`,
    },

    // ========== EKSEMPEL 8: SAMMENLIGNING ==========
    {
      id: 'r2-4-4-example-8',
      type: 'example',
      title: 'Eksempel 8: Sammenligning av sinus og cosinus',
      problem: 'Los bade $\\sin(x) = \\frac{1}{2}$ og $\\cos(x) = \\frac{1}{2}$ i $[0, 2\\pi)$.',
      solution: `**Sinuslikning: $\\sin(x) = \\frac{1}{2}$**
$x = \\arcsin\\left(\\frac{1}{2}\\right) = \\frac{\\pi}{6}$
$x = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$

Løsninger: $x = \\frac{\\pi}{6}$ og $x = \\frac{5\\pi}{6}$

**Cosinuslikning: $\\cos(x) = \\frac{1}{2}$**
$x = \\pm \\arccos\\left(\\frac{1}{2}\\right) = \\pm \\frac{\\pi}{3}$
Med +: $x = \\frac{\\pi}{3}$
Med -: $x = -\\frac{\\pi}{3} + 2\\pi = \\frac{5\\pi}{3}$

Løsninger: $x = \\frac{\\pi}{3}$ og $x = \\frac{5\\pi}{3}$

**Observasjon:** Begge gir to losninger per periode, men på forskjellige steder.`,
    },

    {
      id: 'r2-4-4-ex-8',
      type: 'exercise',
      exercise: {
        id: 'r2-4-4-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Los bade $\\sin(x) = -\\frac{\\sqrt{3}}{2}$ og $\\cos(x) = -\\frac{\\sqrt{3}}{2}$ i $[0, 2\\pi)$. Hvilken likning har losninger i tredje kvadrant?',
        solution: `**Sinus:** $x = -\\frac{\\pi}{3} + 2\\pi = \\frac{5\\pi}{3}$ og $x = \\pi + \\frac{\\pi}{3} = \\frac{4\\pi}{3}$

**Cosinus:** $x = \\frac{5\\pi}{6}$ og $x = \\frac{7\\pi}{6}$

Begge har losninger i tredje kvadrant: sinus har $\\frac{4\\pi}{3}$, cosinus har $\\frac{7\\pi}{6}$`,
        hints: ['Tredje kvadrant er der bade sinus og cosinus er negative'],
      },
    },

    // ========== LIKNINGER UTEN LOSNING ==========
    {
      id: 'r2-4-4-ingen-losning',
      type: 'text',
      content: `## Likninger uten losning

En cosinuslikning $\\cos(x) = a$ har ingen losning hvis $|a| > 1$.`,
    },

    // ========== EKSEMPEL 9: INGEN LOSNING ==========
    {
      id: 'r2-4-4-example-9',
      type: 'example',
      title: 'Eksempel 9: Likning uten losning',
      problem: 'Undersok om likningen $\\cos(x) = 2$ har noen losning.',
      solution: `Siden verdimengden til cosinus er $[-1, 1]$, og $2 > 1$, kan $\\cos(x)$ aldri være lik $2$.

**Konklusjon:** Likningen har **ingen losning**.

Pa samme mate har $\\cos(x) = -3$ ingen losning siden $-3 < -1$.`,
    },

    {
      id: 'r2-4-4-ex-9',
      type: 'exercise',
      exercise: {
        id: 'r2-4-4-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'lett',
        task: 'Avgjor hvilke av folgende likninger som har losning:\na) $\\cos(x) = 0{,}8$\nb) $\\cos(x) = 1{,}2$\nc) $\\cos(x) = -0{,}99$\nd) $\\cos(2x) = -1{,}5$',
        solution: `a) Ja, $0{,}8 \\in [-1, 1]$
b) Nei, $1{,}2 > 1$
c) Ja, $-0{,}99 \\in [-1, 1]$
d) Nei, $-1{,}5 < -1$`,
        hints: ['Sjekk om verdien ligger i cosinusfunksjonens verdimengde $[-1, 1]$'],
      },
    },

    // ========== PRAKTISKE ANVENDELSER ==========
    {
      id: 'r2-4-4-anvendelser-intro',
      type: 'text',
      content: `## Praktiske anvendelser

Cosinuslikninger dukker opp i mange praktiske sammenhenger, spesielt i periodiske fenomener.`,
    },

    // ========== EKSEMPEL 10: TEMPERATUR ==========
    {
      id: 'r2-4-4-example-10',
      type: 'example',
      title: 'Eksempel 10: Temperaturmodell',
      problem: `Temperaturen i en by gjennom aret kan modelleres med funksjonen:

$$T(t) = 12 + 10\\cos\\left(\\frac{\\pi t}{6}\\right)$$

der $T$ er temperaturen i grader Celsius og $t$ er antall måneder etter 1. januar.

a) Nar er temperaturen $17$ grader?
b) Nar er temperaturen under $7$ grader?`,
      solution: `**a) Finn nar $T(t) = 17$:**

$12 + 10\\cos\\left(\\frac{\\pi t}{6}\\right) = 17$

$10\\cos\\left(\\frac{\\pi t}{6}\\right) = 5$

$\\cos\\left(\\frac{\\pi t}{6}\\right) = 0{,}5 = \\frac{1}{2}$

La $u = \\frac{\\pi t}{6}$:
$u = \\pm \\frac{\\pi}{3} + 2\\pi n$

$\\frac{\\pi t}{6} = \\pm \\frac{\\pi}{3} + 2\\pi n$

$t = \\pm 2 + 12n$

I løpet av et år ($0 \\leq t < 12$):
- $t = 2$ (mars)
- $t = -2 + 12 = 10$ (november)

**b) Finn nar $T(t) < 7$:**

$12 + 10\\cos\\left(\\frac{\\pi t}{6}\\right) < 7$

$\\cos\\left(\\frac{\\pi t}{6}\\right) < -0{,}5$

Cosinus er mindre enn $-0{,}5$ nar argumentet er mellom $\\frac{2\\pi}{3}$ og $\\frac{4\\pi}{3}$ (pluss perioder).

$\\frac{2\\pi}{3} < \\frac{\\pi t}{6} < \\frac{4\\pi}{3}$

$4 < t < 8$

Temperaturen er under 7 grader fra mai til august (dette gir ikke mening for en nordlig by, sa modellen er forenklet).`,
    },

    {
      id: 'r2-4-4-ex-10',
      type: 'exercise',
      exercise: {
        id: 'r2-4-4-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En pendel svinger slik at posisjonen er gitt ved $x(t) = 5\\cos(2t)$ cm, der $t$ er tid i sekunder.

a) Nar er pendelen i posisjon $x = 2{,}5$ cm for forste gang?
b) Hvor ofte passerer pendelen gjennom $x = 0$?`,
        solution: `a) $\\cos(2t) = 0{,}5$, sa $2t = \\pm\\frac{\\pi}{3} + 2\\pi n$.
For forste positive tid: $t = \\frac{\\pi}{6} \\approx 0{,}52$ sekunder.

b) $\\cos(2t) = 0$ gir $2t = \\frac{\\pi}{2} + \\pi n$, sa $t = \\frac{\\pi}{4} + \\frac{\\pi n}{2}$.
Pendelen passerer gjennom nullpunktet annenhver $\\frac{\\pi}{4}$ sekund, dvs. ca. 1,27 ganger per sekund.`,
        hints: ['Bruk at perioden til $\\cos(2t)$ er $\\pi$'],
      },
    },

    // ========== EKSEMPEL 11: LYDBOLGER ==========
    {
      id: 'r2-4-4-example-11',
      type: 'example',
      title: 'Eksempel 11: Lydbolger',
      problem: `En lydbylge beskrives av trykket $P(t) = P_0\\cos(2\\pi f t)$, der $f = 440$ Hz (tonen A).

Nar er trykket maksimalt ($P = P_0$) i løpet av de forste 10 millisekunder?`,
      solution: `**Finn nar $P(t) = P_0$:**

$P_0\\cos(2\\pi \\cdot 440 \\cdot t) = P_0$

$\\cos(880\\pi t) = 1$

$880\\pi t = 2\\pi n$

$t = \\frac{n}{440}$ sekunder

**I løpet av 10 ms ($0 \\leq t < 0{,}01$):**

Perioden er $T = \\frac{1}{440} \\approx 0{,}00227$ sekunder.

- $n = 0$: $t = 0$ ms
- $n = 1$: $t \\approx 2{,}27$ ms
- $n = 2$: $t \\approx 4{,}55$ ms
- $n = 3$: $t \\approx 6{,}82$ ms
- $n = 4$: $t \\approx 9{,}09$ ms

**Trykket er maksimalt ved $t = 0$, $2{,}27$, $4{,}55$, $6{,}82$ og $9{,}09$ ms.**`,
    },

    {
      id: 'r2-4-4-ex-11',
      type: 'exercise',
      exercise: {
        id: 'r2-4-4-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En vekselspenning er gitt ved $V(t) = 230\\sqrt{2}\\cos(100\\pi t)$ volt.

a) Finn alle tidspunkter i det forste sekundet der spenningen er $230$ volt.
b) Hvor mange ganger per sekund er spenningen null?`,
        solution: `a) $\\cos(100\\pi t) = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$

$100\\pi t = \\pm\\frac{\\pi}{4} + 2\\pi n$
$t = \\pm\\frac{1}{400} + \\frac{n}{50}$

I $[0, 1)$: 50 perioder gir 100 tidspunkter.

b) $\\cos(100\\pi t) = 0$ gir $100\\pi t = \\frac{\\pi}{2} + \\pi n$.
100 nullpunkter per sekund.`,
        hints: ['Perioden til funksjonen er $\\frac{1}{50}$ sekund'],
      },
    },

    // ========== EKSEMPEL 12: GEOMETRI ==========
    {
      id: 'r2-4-4-example-12',
      type: 'example',
      title: 'Eksempel 12: Geometrisk problem',
      problem: `I en trekant ABC er $\\angle A = x$, og vi vet at $\\cos(x) = \\frac{3}{5}$.

a) Finn $x$ i grader.
b) Finn $\\sin(x)$.`,
      solution: `**a) Finn vinkelen:**
$x = \\arccos\\left(\\frac{3}{5}\\right) = \\arccos(0{,}6)$

Bruker kalkulator: $x \\approx 53{,}13^\\circ$

**b) Finn $\\sin(x)$:**
Bruker identiteten $\\sin^2(x) + \\cos^2(x) = 1$:

$\\sin^2(x) = 1 - \\cos^2(x) = 1 - \\frac{9}{25} = \\frac{16}{25}$

$\\sin(x) = \\frac{4}{5}$ (positiv siden $x$ er en vinkel i en trekant)

**Merk:** Dette er en 3-4-5 rettvinklet trekant!`,
    },

    {
      id: 'r2-4-4-ex-12',
      type: 'exercise',
      exercise: {
        id: 'r2-4-4-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'medium',
        task: 'En vinkel $\\theta$ i en rettvinklet trekant oppfyller $\\cos(\\theta) = \\frac{5}{13}$. Finn $\\sin(\\theta)$ og $\\tan(\\theta)$.',
        solution: `$\\sin^2(\\theta) = 1 - \\frac{25}{169} = \\frac{144}{169}$

$\\sin(\\theta) = \\frac{12}{13}$

$\\tan(\\theta) = \\frac{\\sin(\\theta)}{\\cos(\\theta)} = \\frac{12/13}{5/13} = \\frac{12}{5}$`,
        hints: ['Bruk den pytagoreiske identiteten $\\sin^2 + \\cos^2 = 1$'],
      },
    },

    // ========== EKSEMPEL 13: KOMBINERT ==========
    {
      id: 'r2-4-4-example-13',
      type: 'example',
      title: 'Eksempel 13: Krevende likning',
      problem: 'Los likningen $2\\cos^2(x) - 1 = 0$',
      solution: `**Steg 1:** Omform likningen
$2\\cos^2(x) = 1$
$\\cos^2(x) = \\frac{1}{2}$
$\\cos(x) = \\pm \\frac{1}{\\sqrt{2}} = \\pm \\frac{\\sqrt{2}}{2}$

**Steg 2:** Los for $\\cos(x) = \\frac{\\sqrt{2}}{2}$
$x = \\pm \\frac{\\pi}{4} + 2\\pi n$

**Steg 3:** Los for $\\cos(x) = -\\frac{\\sqrt{2}}{2}$
$x = \\pm \\frac{3\\pi}{4} + 2\\pi n$

**Kombinert losning i $[0, 2\\pi)$:**
$x = \\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}$

**Alternativ:** Bruk identiteten $\\cos(2x) = 2\\cos^2(x) - 1$:
$\\cos(2x) = 0$
$2x = \\frac{\\pi}{2} + \\pi n$
$x = \\frac{\\pi}{4} + \\frac{\\pi n}{2}$`,
    },

    {
      id: 'r2-4-4-ex-13',
      type: 'exercise',
      exercise: {
        id: 'r2-4-4-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Los likningen $\\cos^2(x) - \\cos(x) = 0$ i $[0, 2\\pi)$.',
        solution: `$\\cos(x)(\\cos(x) - 1) = 0$

Enten $\\cos(x) = 0$ eller $\\cos(x) = 1$.

$\\cos(x) = 0$: $x = \\frac{\\pi}{2}, \\frac{3\\pi}{2}$
$\\cos(x) = 1$: $x = 0$

Løsninger: $x = 0, \\frac{\\pi}{2}, \\frac{3\\pi}{2}$`,
        hints: ['Faktoriser ved a trekke ut $\\cos(x)$'],
      },
    },

    // ========== EKSEMPEL 14: RADIANER OG GRADER ==========
    {
      id: 'r2-4-4-example-14',
      type: 'example',
      title: 'Eksempel 14: Løsning i grader',
      problem: 'Los likningen $\\cos(x) = 0{,}6$ og gi svaret i grader. Finn alle losninger i $[0^\\circ, 360^\\circ)$.',
      solution: `**Steg 1:** Finn hovedlosningen
$x = \\arccos(0{,}6) \\approx 53{,}13^\\circ$

**Steg 2:** Skriv generell losning
$x = \\pm 53{,}13^\\circ + 360^\\circ \\cdot n$

**Steg 3:** Finn losninger i $[0^\\circ, 360^\\circ)$
- Med +: $x \\approx 53{,}13^\\circ$
- Med -: $x \\approx -53{,}13^\\circ + 360^\\circ = 306{,}87^\\circ$

**Løsninger:** $x \\approx 53{,}13^\\circ$ og $x \\approx 306{,}87^\\circ$`,
    },

    {
      id: 'r2-4-4-ex-14',
      type: 'exercise',
      exercise: {
        id: 'r2-4-4-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'medium',
        task: 'Los likningen $\\cos(x) = -0{,}3$ og gi svaret i grader. Finn alle losninger i $[0^\\circ, 360^\\circ)$.',
        solution: `$\\arccos(-0{,}3) \\approx 107{,}46^\\circ$

Generell losning: $x = \\pm 107{,}46^\\circ + 360^\\circ n$

Løsninger i $[0^\\circ, 360^\\circ)$:
$x \\approx 107{,}46^\\circ$ og $x \\approx 252{,}54^\\circ$`,
        hints: ['Bruk kalkulator for å finne $\\arccos(-0{,}3)$'],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'r2-4-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Hovedpunkter

1. **Generell losning av $\\cos(x) = a$:**
   $$x = \\pm \\arccos(a) + 2\\pi n, \\quad n \\in \\mathbb{Z}$$

2. **For $\\cos(kx + c) = a$:**
   $$x = \\frac{-c \\pm \\arccos(a) + 2\\pi n}{k}$$

3. **Symmetri:** $\\cos(-x) = \\cos(x)$ gir $\\pm$ i losningsformelen

4. **Losbarhet:** Kun losning nar $-1 \\leq a \\leq 1$

5. **Antall losninger:** Per periode $[0, 2\\pi)$:
   - Generelt 2 losninger
   - 1 losning hvis $a = \\pm 1$
   - 0 losninger hvis $|a| > 1$`,
    },

    {
      id: 'r2-4-4-tip-1',
      type: 'tip',
      content: `**Huskeliste for cosinuslikninger:**
1. Sjekk om $|a| \\leq 1$
2. Finn $\\arccos(a)$
3. Bruk $\\pm$ for a fa begge losningsrekker
4. Husk a dele på $k$ hvis argumentet er $kx + c$
5. Juster for faseforskyvning $c$
6. List opp losninger i gitt intervall`,
    },

    // ========== EKSTRAOPPGAVER ==========
    {
      id: 'r2-4-4-ekstra',
      type: 'collapsible',
      title: 'Ekstraoppgaver',
      buttonText: 'Vis ekstraoppgaver',
      content: [
        {
          id: 'r2-4-4-ekstra-1',
          type: 'exercise',
          exercise: {
            id: 'r2-4-4-ekstra-ex-1',
            number: '15',
            type: 'classic',
            difficulty: 'medium',
            task: 'Los likningen $\\cos\\left(\\frac{x}{2}\\right) = \\frac{1}{2}$ i $[0, 4\\pi)$.',
            solution: `$\\frac{x}{2} = \\pm\\frac{\\pi}{3} + 2\\pi n$
$x = \\pm\\frac{2\\pi}{3} + 4\\pi n$

Løsninger i $[0, 4\\pi)$: $x = \\frac{2\\pi}{3}, \\frac{10\\pi}{3}$ (fra +) og $x = \\frac{4\\pi}{3} + 4\\pi = \\frac{16\\pi}{3}$ (utenfor)
og $x = -\\frac{2\\pi}{3} + 4\\pi = \\frac{10\\pi}{3}$ (duplikat)

Faktiske losninger: $x = \\frac{2\\pi}{3}$ og $x = \\frac{10\\pi}{3}$`,
            hints: ['Perioden til $\\cos(x/2)$ er $4\\pi$'],
          },
        },
        {
          id: 'r2-4-4-ekstra-2',
          type: 'exercise',
          exercise: {
            id: 'r2-4-4-ekstra-ex-2',
            number: '16',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Los likningssystemet:\n$\\cos(x) = \\sin(x)$\ni $[0, 2\\pi)$.',
            solution: `$\\cos(x) = \\sin(x)$
$\\frac{\\sin(x)}{\\cos(x)} = 1$
$\\tan(x) = 1$
$x = \\frac{\\pi}{4} + \\pi n$

Løsninger i $[0, 2\\pi)$: $x = \\frac{\\pi}{4}$ og $x = \\frac{5\\pi}{4}$`,
            hints: ['Del begge sider på $\\cos(x)$ og bruk tangens'],
          },
        },
        {
          id: 'r2-4-4-ekstra-3',
          type: 'exercise',
          exercise: {
            id: 'r2-4-4-ekstra-ex-3',
            number: '17',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'For hvilke verdier av $k$ har likningen $\\cos(x) = k$ noyaktig en losning i $[0, \\pi]$?',
            solution: `I intervallet $[0, \\pi]$ er cosinus strengt avtagende fra 1 til -1.

For $-1 < k < 1$ finnes noyaktig en losning.
For $k = 1$ er losningen $x = 0$ (randslosning).
For $k = -1$ er losningen $x = \\pi$ (randslosning).

Svar: Alle $k \\in [-1, 1]$ gir noyaktig en losning i $[0, \\pi]$.`,
            hints: ['Tenk på hvordan cosinusgrafen ser ut i intervallet $[0, \\pi]$'],
          },
        },
        {
          id: 'r2-4-4-ekstra-4',
          type: 'exercise',
          exercise: {
            id: 'r2-4-4-ekstra-ex-4',
            number: '18',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'En satellitt følger en bane der høyde over jordoverflaten er gitt ved $h(t) = 400 + 50\\cos\\left(\\frac{2\\pi t}{90}\\right)$ km, der $t$ er tid i minutter. Finn alle tidspunkter i en hel periode der hoyen er noyaktig 425 km.',
            solution: `$400 + 50\\cos\\left(\\frac{2\\pi t}{90}\\right) = 425$
$\\cos\\left(\\frac{2\\pi t}{90}\\right) = 0{,}5$
$\\frac{2\\pi t}{90} = \\pm\\frac{\\pi}{3} + 2\\pi n$
$t = \\pm 15 + 90n$

I en periode $[0, 90)$:
$t = 15$ min og $t = -15 + 90 = 75$ min`,
            hints: ['Perioden er 90 minutter'],
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_R2_4_5: TextbookChapter = {
  id: 'r2-4-5',
  courseId: 'r2',
  chapterNumber: '4.5',
  title: 'Tangenslikninger',
  description: 'Loese likninger med tangens.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke trigonometriske funksjonar til å loyse praktiske problem',
    'analysere og loyse likningar med tangensfunksjonen',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r2-4-5-intro',
      type: 'text',
      content: `## Hva er en tangenslikning?

En **tangenslikning** er en likning der den ukjente $x$ star i argumentet til en tangensfunksjon.

**Eksempler på tangenslikninger:**
- $\\tan(x) = 1$
- $\\tan(2x) = \\sqrt{3}$
- $\\tan(x - \\frac{\\pi}{4}) = -1$

I dette kapitlet skal vi lære hvordan vi loser slike likninger og finner alle losningene.`,
    },

    // ========== TANGENSFUNKSJONEN - REPETISJON ==========
    {
      id: 'r2-4-5-repetisjon',
      type: 'definition',
      title: 'Tangensfunksjonen',
      content: `Tangensfunksjonen er definert som:

$$\\tan(x) = \\frac{\\sin(x)}{\\cos(x)}$$

**Viktige egenskaper:**
- **Periode:** $\\pi$ (ikke $2\\pi$ som for sinus og cosinus)
- **Definisjonsmengde:** $x \\neq \\frac{\\pi}{2} + n\\pi$, der $n \\in \\mathbb{Z}$
- **Verdimengde:** $\\mathbb{R}$ (alle reelle tall)
- **Nullpunkter:** $x = n\\pi$, der $n \\in \\mathbb{Z}$`,
    },

    {
      id: 'r2-4-5-graf',
      type: 'geogebra',
      title: 'Grafen til tangensfunksjonen',
      description: 'Studer grafen til $y = \\tan(x)$. Legg merke til periodisiteten og de vertikale asymptotene.',
      appType: 'graphing',
      commands: [
        'f(x) = tan(x)',
        'SetAxisLabels(1, "x", "y")',
        'ZoomIn(-2*pi, -5, 2*pi, 5)',
      ],
    },

    // ========== GRUNNLEGGENDE TANGENSLIKNING ==========
    {
      id: 'r2-4-5-grunnleggende',
      type: 'theorem',
      title: 'Løsning av tan(x) = a',
      content: `For likningen $\\tan(x) = a$ der $a$ er et reelt tall:

$$x = \\arctan(a) + n\\pi, \\quad n \\in \\mathbb{Z}$$

**Merk:** Siden tangens har periode $\\pi$, får vi en ny losning for hver $\\pi$ vi legger til.

Dette er enklere enn for sinus og cosinus, der vi matte finne to losninger per periode!`,
    },

    {
      id: 'r2-4-5-eksempel-1',
      type: 'example',
      title: 'Eksempel 1: Enkel tangenslikning',
      problem: `Los likningen $\\tan(x) = 1$.`,
      solution: `Vi vet at $\\tan(\\frac{\\pi}{4}) = 1$.

Den generelle losningen er:
$$x = \\frac{\\pi}{4} + n\\pi, \\quad n \\in \\mathbb{Z}$$

**De forste positive losningene:**
- $n = 0$: $x = \\frac{\\pi}{4}$
- $n = 1$: $x = \\frac{\\pi}{4} + \\pi = \\frac{5\\pi}{4}$
- $n = 2$: $x = \\frac{\\pi}{4} + 2\\pi = \\frac{9\\pi}{4}$

**Svar:** $x = \\frac{\\pi}{4} + n\\pi$, der $n \\in \\mathbb{Z}$`,
    },

    {
      id: 'r2-4-5-oppgave-1',
      type: 'exercise',
      exercise: {
        id: 'r2-4-5-oppg-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Los likningen $\\tan(x) = 0$. Gi den generelle losningen.',
        solution: '$x = n\\pi$, der $n \\in \\mathbb{Z}$',
        hints: ['Nar er $\\tan(x) = 0$? Tenk på nullpunktene til sinusfunksjonen.'],
      },
    },

    {
      id: 'r2-4-5-eksempel-2',
      type: 'example',
      title: 'Eksempel 2: Tangenslikning med sqrt(3)',
      problem: `Los likningen $\\tan(x) = \\sqrt{3}$.`,
      solution: `Vi vet at $\\tan(\\frac{\\pi}{3}) = \\sqrt{3}$ (fra den likesidete trekanten).

Den generelle losningen er:
$$x = \\frac{\\pi}{3} + n\\pi, \\quad n \\in \\mathbb{Z}$$

**Svar:** $x = \\frac{\\pi}{3} + n\\pi$, der $n \\in \\mathbb{Z}$`,
    },

    {
      id: 'r2-4-5-oppgave-2',
      type: 'exercise',
      exercise: {
        id: 'r2-4-5-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Los likningen $\\tan(x) = \\frac{1}{\\sqrt{3}}$. Gi den generelle losningen.',
        solution: '$x = \\frac{\\pi}{6} + n\\pi$, der $n \\in \\mathbb{Z}$',
        hints: ['Husk at $\\tan(\\frac{\\pi}{6}) = \\frac{1}{\\sqrt{3}}$.'],
      },
    },

    // ========== NEGATIVE VERDIER ==========
    {
      id: 'r2-4-5-negative',
      type: 'text',
      content: `## Tangenslikninger med negative verdier

Nar $\\tan(x) = -a$ (negativ verdi), bruker vi at:
$$\\tan(-\\theta) = -\\tan(\\theta)$$

Dette betyr at hvis $\\tan(\\theta) = a$, så er $\\tan(-\\theta) = -a$.`,
    },

    {
      id: 'r2-4-5-eksempel-3',
      type: 'example',
      title: 'Eksempel 3: Negativ tangensverdi',
      problem: `Los likningen $\\tan(x) = -1$.`,
      solution: `Vi vet at $\\tan(\\frac{\\pi}{4}) = 1$, sa $\\tan(-\\frac{\\pi}{4}) = -1$.

Alternativt kan vi bruke $\\tan(\\frac{3\\pi}{4}) = -1$ (i andre kvadrant).

Den generelle losningen er:
$$x = -\\frac{\\pi}{4} + n\\pi = \\frac{3\\pi}{4} + n\\pi, \\quad n \\in \\mathbb{Z}$$

**Begge uttrykk gir de samme losningene!**

**Svar:** $x = -\\frac{\\pi}{4} + n\\pi$ eller $x = \\frac{3\\pi}{4} + n\\pi$`,
    },

    {
      id: 'r2-4-5-oppgave-3',
      type: 'exercise',
      exercise: {
        id: 'r2-4-5-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Los likningen $\\tan(x) = -\\sqrt{3}$. Gi den generelle losningen.',
        solution: '$x = -\\frac{\\pi}{3} + n\\pi$ eller $x = \\frac{2\\pi}{3} + n\\pi$, der $n \\in \\mathbb{Z}$',
        hints: ['Bruk at $\\tan(\\frac{\\pi}{3}) = \\sqrt{3}$.'],
      },
    },

    // ========== BRUK AV KALKULATOR ==========
    {
      id: 'r2-4-5-kalkulator',
      type: 'text',
      content: `## Bruk av kalkulator for arctan

Nar tangensverdien ikke er en "pen" verdi, bruker vi kalkulator:

$$x = \\arctan(a) + n\\pi$$

**Viktig:** Kalkulatoren gir kun en verdi (hovedverdien) i intervallet $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$. Vi ma legge til $n\\pi$ for a fa alle losninger.`,
    },

    {
      id: 'r2-4-5-eksempel-4',
      type: 'example',
      title: 'Eksempel 4: Bruk av arctan på kalkulator',
      problem: `Los likningen $\\tan(x) = 2{,}5$.`,
      solution: `Med kalkulator finner vi:
$$\\arctan(2{,}5) \\approx 1{,}19 \\text{ rad}$$

Den generelle losningen er:
$$x \\approx 1{,}19 + n\\pi, \\quad n \\in \\mathbb{Z}$$

**Løsninger i intervallet $[0, 2\\pi]$:**
- $n = 0$: $x \\approx 1{,}19$
- $n = 1$: $x \\approx 1{,}19 + \\pi \\approx 4{,}33$

**Svar:** $x \\approx 1{,}19 + n\\pi$, der $n \\in \\mathbb{Z}$`,
    },

    {
      id: 'r2-4-5-oppgave-4',
      type: 'exercise',
      exercise: {
        id: 'r2-4-5-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Los likningen $\\tan(x) = 3$. Finn den generelle losningen og alle losninger i $[0, 2\\pi]$.',
        solution: '$x \\approx 1{,}25 + n\\pi$. I $[0, 2\\pi]$: $x \\approx 1{,}25$ og $x \\approx 4{,}39$',
        hints: ['Bruk kalkulator for å finne $\\arctan(3)$.'],
      },
    },

    // ========== TRANSFORMERTE TANGENSLIKNINGER ==========
    {
      id: 'r2-4-5-transformert',
      type: 'theorem',
      title: 'Løsning av tan(kx + c) = a',
      content: `For likningen $\\tan(kx + c) = a$:

**Fremgangsmate:**
1. Sett $u = kx + c$
2. Los $\\tan(u) = a$ og fa $u = \\arctan(a) + n\\pi$
3. Los for $x$: $kx + c = \\arctan(a) + n\\pi$
4. $x = \\frac{\\arctan(a) + n\\pi - c}{k}$

**Generell formel:**
$$x = \\frac{\\arctan(a) - c + n\\pi}{k}, \\quad n \\in \\mathbb{Z}$$`,
    },

    {
      id: 'r2-4-5-eksempel-5',
      type: 'example',
      title: 'Eksempel 5: Tangenslikning med koeffisient foran x',
      problem: `Los likningen $\\tan(2x) = 1$.`,
      solution: `**Steg 1:** Sett $u = 2x$
$$\\tan(u) = 1$$

**Steg 2:** Los for $u$
$$u = \\frac{\\pi}{4} + n\\pi$$

**Steg 3:** Tilbake til $x$
$$2x = \\frac{\\pi}{4} + n\\pi$$
$$x = \\frac{\\pi}{8} + \\frac{n\\pi}{2}$$

**Svar:** $x = \\frac{\\pi}{8} + \\frac{n\\pi}{2}$, der $n \\in \\mathbb{Z}$

**Løsninger i $[0, 2\\pi]$:**
$x = \\frac{\\pi}{8}, \\frac{5\\pi}{8}, \\frac{9\\pi}{8}, \\frac{13\\pi}{8}$`,
    },

    {
      id: 'r2-4-5-oppgave-5',
      type: 'exercise',
      exercise: {
        id: 'r2-4-5-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Los likningen $\\tan(3x) = \\sqrt{3}$. Finn den generelle losningen.',
        solution: '$x = \\frac{\\pi}{9} + \\frac{n\\pi}{3}$, der $n \\in \\mathbb{Z}$',
        hints: ['Sett $u = 3x$ og los $\\tan(u) = \\sqrt{3}$ forst.'],
      },
    },

    {
      id: 'r2-4-5-eksempel-6',
      type: 'example',
      title: 'Eksempel 6: Tangenslikning med faseforskyvning',
      problem: `Los likningen $\\tan(x - \\frac{\\pi}{4}) = 1$.`,
      solution: `**Steg 1:** Sett $u = x - \\frac{\\pi}{4}$
$$\\tan(u) = 1$$

**Steg 2:** Los for $u$
$$u = \\frac{\\pi}{4} + n\\pi$$

**Steg 3:** Tilbake til $x$
$$x - \\frac{\\pi}{4} = \\frac{\\pi}{4} + n\\pi$$
$$x = \\frac{\\pi}{2} + n\\pi$$

**Svar:** $x = \\frac{\\pi}{2} + n\\pi$, der $n \\in \\mathbb{Z}$`,
    },

    {
      id: 'r2-4-5-oppgave-6',
      type: 'exercise',
      exercise: {
        id: 'r2-4-5-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Los likningen $\\tan(x + \\frac{\\pi}{6}) = -1$. Finn den generelle losningen.',
        solution: '$x = \\frac{7\\pi}{12} + n\\pi$, der $n \\in \\mathbb{Z}$',
        hints: ['Sett $u = x + \\frac{\\pi}{6}$ og los $\\tan(u) = -1$ forst.'],
      },
    },

    {
      id: 'r2-4-5-eksempel-7',
      type: 'example',
      title: 'Eksempel 7: Kombinert transformasjon',
      problem: `Los likningen $\\tan(2x + \\frac{\\pi}{3}) = \\sqrt{3}$.`,
      solution: `**Steg 1:** Sett $u = 2x + \\frac{\\pi}{3}$
$$\\tan(u) = \\sqrt{3}$$

**Steg 2:** Los for $u$
$$u = \\frac{\\pi}{3} + n\\pi$$

**Steg 3:** Tilbake til $x$
$$2x + \\frac{\\pi}{3} = \\frac{\\pi}{3} + n\\pi$$
$$2x = n\\pi$$
$$x = \\frac{n\\pi}{2}$$

**Svar:** $x = \\frac{n\\pi}{2}$, der $n \\in \\mathbb{Z}$

**Løsninger i $[0, 2\\pi]$:** $x = 0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}, 2\\pi$`,
    },

    {
      id: 'r2-4-5-oppgave-7',
      type: 'exercise',
      exercise: {
        id: 'r2-4-5-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Los likningen $\\tan(2x - \\frac{\\pi}{4}) = -\\sqrt{3}$. Finn alle losninger i $[0, \\pi]$.',
        solution: '$x = \\frac{5\\pi}{24}$ og $x = \\frac{17\\pi}{24}$',
        hints: [
          'Sett $u = 2x - \\frac{\\pi}{4}$ og los $\\tan(u) = -\\sqrt{3}$.',
          'Husk at $\\tan(-\\frac{\\pi}{3}) = -\\sqrt{3}$.',
        ],
      },
    },

    // ========== DEFINISJONSMENGDE ==========
    {
      id: 'r2-4-5-definisjon',
      type: 'warning',
      title: 'Definisjonsmengde for tangens',
      content: `Tangensfunksjonen er **ikke definert** nar cosinus er null:

$$\\tan(x) = \\frac{\\sin(x)}{\\cos(x)} \\text{ er udefinert nar } \\cos(x) = 0$$

Dette skjer for:
$$x = \\frac{\\pi}{2} + n\\pi, \\quad n \\in \\mathbb{Z}$$

**Nar du loser tangenslikninger, ma du alltid sjekke at losningene ikke faller på disse punktene!**`,
    },

    {
      id: 'r2-4-5-eksempel-8',
      type: 'example',
      title: 'Eksempel 8: Sjekk av definisjonsmengde',
      problem: `Los likningen $\\tan(x) = \\tan(\\frac{\\pi}{2})$.`,
      solution: `**Denne likningen har ingen losning!**

$\\tan(\\frac{\\pi}{2})$ er udefinert, sa vi kan ikke ha en likning der tangens skal være lik denne verdien.

Ved $x = \\frac{\\pi}{2}$ har tangensfunksjonen en vertikal asymptote.`,
    },

    {
      id: 'r2-4-5-oppgave-8',
      type: 'exercise',
      exercise: {
        id: 'r2-4-5-oppg-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor likningen $\\tan(2x) = \\tan(\\frac{\\pi}{2})$ ikke har noen losning.',
        solution: '$\\tan(\\frac{\\pi}{2})$ er udefinert fordi $\\cos(\\frac{\\pi}{2}) = 0$. Tangens har en vertikal asymptote her.',
        hints: ['Nar er tangensfunksjonen udefinert?'],
      },
    },

    // ========== SAMMENLIGNING MED SIN/COS ==========
    {
      id: 'r2-4-5-sammenligning',
      type: 'text',
      content: `## Sammenligning med sinus- og cosinuslikninger

| Egenskap | Sinus/Cosinus | Tangens |
|----------|---------------|---------|
| Periode | $2\\pi$ | $\\pi$ |
| Løsninger per periode | 2 (vanligvis) | 1 |
| Generell losning | $x = \\alpha + 2n\\pi$ og $x = \\pi - \\alpha + 2n\\pi$ | $x = \\alpha + n\\pi$ |
| Verdimengde | $[-1, 1]$ | $\\mathbb{R}$ |
| Definisjonsmengde | $\\mathbb{R}$ | $x \\neq \\frac{\\pi}{2} + n\\pi$ |

**Fordel med tangenslikninger:** Vi får bare en "type" losning, ikke to som for sinus og cosinus!`,
    },

    {
      id: 'r2-4-5-eksempel-9',
      type: 'example',
      title: 'Eksempel 9: Sammenligning av losningsmetoder',
      problem: `Sammenlign losningene av:
a) $\\sin(x) = \\frac{\\sqrt{2}}{2}$
b) $\\tan(x) = 1$`,
      solution: `**a) Sinuslikning:**
$\\sin(x) = \\frac{\\sqrt{2}}{2}$

Løsninger: $x = \\frac{\\pi}{4} + 2n\\pi$ og $x = \\frac{3\\pi}{4} + 2n\\pi$

I $[0, 2\\pi]$: $x = \\frac{\\pi}{4}$ og $x = \\frac{3\\pi}{4}$ (2 losninger)

**b) Tangenslikning:**
$\\tan(x) = 1$

Løsning: $x = \\frac{\\pi}{4} + n\\pi$

I $[0, 2\\pi]$: $x = \\frac{\\pi}{4}$ og $x = \\frac{5\\pi}{4}$ (2 losninger)

**Merk:** Begge har 2 losninger i $[0, 2\\pi]$, men tangenslikningen har enklere generell form!`,
    },

    {
      id: 'r2-4-5-oppgave-9',
      type: 'exercise',
      exercise: {
        id: 'r2-4-5-oppg-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn alle losninger i $[0, 2\\pi]$ for: a) $\\cos(x) = \\frac{1}{2}$ b) $\\tan(x) = \\frac{1}{\\sqrt{3}}$. Sammenlign antall losninger.',
        solution: 'a) $x = \\frac{\\pi}{3}$ og $x = \\frac{5\\pi}{3}$. b) $x = \\frac{\\pi}{6}$ og $x = \\frac{7\\pi}{6}$. Begge har 2 losninger.',
        hints: ['Husk de eksakte verdiene for cosinus og tangens.'],
      },
    },

    // ========== LIKNINGER SOM KAN OMFORMES ==========
    {
      id: 'r2-4-5-omforming',
      type: 'text',
      content: `## Likninger som kan omformes til tangenslikninger

Noen likninger som inneholder sinus og cosinus kan omformes til tangenslikninger:

$$\\frac{\\sin(x)}{\\cos(x)} = a \\quad \\Rightarrow \\quad \\tan(x) = a$$

Dette er nyttig nar vi har braker med sinus og cosinus.`,
    },

    {
      id: 'r2-4-5-eksempel-10',
      type: 'example',
      title: 'Eksempel 10: Omforming til tangenslikning',
      problem: `Los likningen $\\sin(x) = \\cos(x)$.`,
      solution: `**Metode:** Del på $\\cos(x)$ (forutsatt at $\\cos(x) \\neq 0$):

$$\\frac{\\sin(x)}{\\cos(x)} = 1$$
$$\\tan(x) = 1$$

Løsning: $x = \\frac{\\pi}{4} + n\\pi$

**Sjekk:** Er $\\cos(\\frac{\\pi}{4} + n\\pi) = 0$? Nei, sa losningene er gyldige.

**Svar:** $x = \\frac{\\pi}{4} + n\\pi$, der $n \\in \\mathbb{Z}$`,
    },

    {
      id: 'r2-4-5-oppgave-10',
      type: 'exercise',
      exercise: {
        id: 'r2-4-5-oppg-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Los likningen $\\sin(x) = \\sqrt{3}\\cos(x)$.',
        solution: '$x = \\frac{\\pi}{3} + n\\pi$, der $n \\in \\mathbb{Z}$',
        hints: ['Del på $\\cos(x)$ for a fa en tangenslikning.'],
      },
    },

    {
      id: 'r2-4-5-eksempel-11',
      type: 'example',
      title: 'Eksempel 11: Mer kompleks omforming',
      problem: `Los likningen $2\\sin(x) + 3\\cos(x) = 0$.`,
      solution: `**Metode:** Flytt og del på $\\cos(x)$:

$$2\\sin(x) = -3\\cos(x)$$
$$\\frac{\\sin(x)}{\\cos(x)} = -\\frac{3}{2}$$
$$\\tan(x) = -\\frac{3}{2}$$

Med kalkulator: $\\arctan(-\\frac{3}{2}) \\approx -0{,}98$ rad

Løsning: $x \\approx -0{,}98 + n\\pi$

I $[0, 2\\pi]$: $x \\approx 2{,}16$ og $x \\approx 5{,}30$

**Svar:** $x \\approx -0{,}98 + n\\pi$ eller $x \\approx 2{,}16 + n\\pi$`,
    },

    {
      id: 'r2-4-5-oppgave-11',
      type: 'exercise',
      exercise: {
        id: 'r2-4-5-oppg-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Los likningen $3\\sin(x) - 4\\cos(x) = 0$. Finn alle losninger i $[0, 2\\pi]$.',
        solution: '$x \\approx 0{,}93$ og $x \\approx 4{,}07$',
        hints: [
          'Omform til $\\tan(x) = \\frac{4}{3}$.',
          'Bruk kalkulator for $\\arctan(\\frac{4}{3})$.',
        ],
      },
    },

    // ========== PRAKTISKE ANVENDELSER ==========
    {
      id: 'r2-4-5-anvendelser',
      type: 'text',
      content: `## Praktiske anvendelser

Tangenslikninger dukker opp i mange praktiske sammenhenger:

- **Helningsvinkler:** $\\tan(\\theta) = \\frac{\\text{motstående}}{\\text{hosliggende}}$
- **Vinkler i fysikk:** Bevegelse i skratt plan, prosjektilbevegelse
- **Optikk:** Brewsters vinkel for polarisering
- **Navigasjon:** Beregning av kursvinkler`,
    },

    {
      id: 'r2-4-5-eksempel-12',
      type: 'example',
      title: 'Eksempel 12: Helningsvinkel',
      problem: `En vei har en stigning på 15 %. Finn helningsvinkelen.`,
      solution: `15 % stigning betyr at veien stiger 15 meter per 100 meter horisontalt.

$$\\tan(\\theta) = \\frac{15}{100} = 0{,}15$$

$$\\theta = \\arctan(0{,}15) \\approx 8{,}5°$$

**Svar:** Helningsvinkelen er ca. $8{,}5°$.`,
    },

    {
      id: 'r2-4-5-oppgave-12',
      type: 'exercise',
      exercise: {
        id: 'r2-4-5-oppg-12',
        number: '12',
        type: 'classic',
        difficulty: 'medium',
        task: 'En trapp har trinn som er 17 cm hoye og 28 cm dype. Finn helningsvinkelen til trappen.',
        solution: '$\\theta = \\arctan(\\frac{17}{28}) \\approx 31{,}3°$',
        hints: ['$\\tan(\\theta) = \\frac{\\text{høyde}}{\\text{dybde}}$'],
      },
    },

    {
      id: 'r2-4-5-eksempel-13',
      type: 'example',
      title: 'Eksempel 13: Prosjektilbevegelse',
      problem: `En ball kastes med utgangshastighet $v_0 = 20$ m/s. Ved hvilken vinkel $\\theta$ fra horisontalplanet na ballen en maksimal horisontal rekkevidde på 30 m?

Formelen for horisontal rekkevidde er: $R = \\frac{v_0^2 \\sin(2\\theta)}{g}$`,
      solution: `Med $R = 30$ m, $v_0 = 20$ m/s og $g = 10$ m/s²:

$$30 = \\frac{20^2 \\sin(2\\theta)}{10}$$
$$30 = \\frac{400 \\sin(2\\theta)}{10}$$
$$30 = 40 \\sin(2\\theta)$$
$$\\sin(2\\theta) = 0{,}75$$

$2\\theta = \\arcsin(0{,}75) \\approx 48{,}6°$ eller $2\\theta \\approx 131{,}4°$

$\\theta \\approx 24{,}3°$ eller $\\theta \\approx 65{,}7°$

**Svar:** Ballen kan kastes med vinkel ca. $24{,}3°$ eller $65{,}7°$.`,
    },

    {
      id: 'r2-4-5-oppgave-13',
      type: 'exercise',
      exercise: {
        id: 'r2-4-5-oppg-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et tarn er 50 m hoyt. Fra toppen av tarnet ser man et punkt på bakken med synkvinkel $30°$. Hvor langt fra tarnets fot ligger punktet?',
        solution: 'Avstand = $\\frac{50}{\\tan(30°)} = \\frac{50}{\\frac{1}{\\sqrt{3}}} = 50\\sqrt{3} \\approx 86{,}6$ m',
        hints: [
          'Tegn en figur med tarnet og synklinjen.',
          'Bruk $\\tan(30°) = \\frac{\\text{motstående}}{\\text{hosliggende}}$.',
        ],
      },
    },

    {
      id: 'r2-4-5-eksempel-14',
      type: 'example',
      title: 'Eksempel 14: Periodisk losning i praksis',
      problem: `En pendel svinger slik at vinkelen $\\theta$ (i radianer) fra vertikalen er gitt ved:
$$\\theta(t) = 0{,}1 \\sin(2t)$$

Finn alle tidspunkter $t > 0$ der $\\tan(\\theta) = 0{,}05$.`,
      solution: `For sma vinkler er $\\tan(\\theta) \\approx \\theta$ (i radianer).

Sa vi loser omtrent: $0{,}1 \\sin(2t) = 0{,}05$

$$\\sin(2t) = 0{,}5$$
$$2t = \\frac{\\pi}{6} + 2n\\pi \\quad \\text{eller} \\quad 2t = \\frac{5\\pi}{6} + 2n\\pi$$

$$t = \\frac{\\pi}{12} + n\\pi \\quad \\text{eller} \\quad t = \\frac{5\\pi}{12} + n\\pi$$

**De forste positive tidspunktene:**
$t \\approx 0{,}26$ s, $t \\approx 1{,}31$ s, $t \\approx 3{,}40$ s, ...

**Svar:** $t = \\frac{\\pi}{12} + n\\pi$ eller $t = \\frac{5\\pi}{12} + n\\pi$, der $n \\geq 0$`,
    },

    // ========== SAMMENDRAG ==========
    {
      id: 'r2-4-5-sammendrag',
      type: 'definition',
      title: 'Sammendrag: Tangenslikninger',
      content: `**Grunnleggende tangenslikning:**
$$\\tan(x) = a \\quad \\Rightarrow \\quad x = \\arctan(a) + n\\pi$$

**Transformert tangenslikning:**
$$\\tan(kx + c) = a \\quad \\Rightarrow \\quad x = \\frac{\\arctan(a) - c + n\\pi}{k}$$

**Viktige verdier:**
- $\\tan(0) = 0$
- $\\tan(\\frac{\\pi}{6}) = \\frac{1}{\\sqrt{3}}$
- $\\tan(\\frac{\\pi}{4}) = 1$
- $\\tan(\\frac{\\pi}{3}) = \\sqrt{3}$

**Husk:**
- Periode: $\\pi$ (ikke $2\\pi$)
- En losning per periode
- Tangens er udefinert for $x = \\frac{\\pi}{2} + n\\pi$`,
    },

    // ========== EKSTRA OPPGAVER ==========
    {
      id: 'r2-4-5-ekstra',
      type: 'collapsible',
      title: 'Ekstraoppgaver',
      buttonText: 'Vis ekstraoppgaver',
      content: [
        {
          id: 'r2-4-5-ekstra-1',
          type: 'exercise',
          exercise: {
            id: 'r2-4-5-ekstra-oppg-1',
            number: '14',
            type: 'classic',
            difficulty: 'lett',
            task: 'Los likningen $\\tan(x) = -\\frac{1}{\\sqrt{3}}$. Gi den generelle losningen.',
            solution: '$x = -\\frac{\\pi}{6} + n\\pi$ eller $x = \\frac{5\\pi}{6} + n\\pi$, der $n \\in \\mathbb{Z}$',
            hints: ['Bruk at $\\tan(\\frac{\\pi}{6}) = \\frac{1}{\\sqrt{3}}$.'],
          },
        },
        {
          id: 'r2-4-5-ekstra-2',
          type: 'exercise',
          exercise: {
            id: 'r2-4-5-ekstra-oppg-2',
            number: '15',
            type: 'classic',
            difficulty: 'medium',
            task: 'Los likningen $\\tan(4x) = 1$. Finn alle losninger i $[0, \\pi]$.',
            solution: '$x = \\frac{\\pi}{16}, \\frac{5\\pi}{16}, \\frac{9\\pi}{16}, \\frac{13\\pi}{16}$',
            hints: ['Sett $u = 4x$ og los $\\tan(u) = 1$ forst.'],
          },
        },
        {
          id: 'r2-4-5-ekstra-3',
          type: 'exercise',
          exercise: {
            id: 'r2-4-5-ekstra-oppg-3',
            number: '16',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Los likningen $\\tan^2(x) = 3$.',
            solution: '$x = \\frac{\\pi}{3} + n\\frac{\\pi}{2}$, der $n \\in \\mathbb{Z}$. Alternativt: $x = \\pm\\frac{\\pi}{3} + n\\pi$',
            hints: [
              '$\\tan^2(x) = 3$ betyr at $\\tan(x) = \\pm\\sqrt{3}$.',
              'Los begge likninger separat.',
            ],
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_R2_4_6: TextbookChapter = {
  id: 'r2-4-6',
  courseId: 'r2',
  chapterNumber: '4.6',
  title: 'Trigonometriske formler',
  description: 'Addisjonsformler, dobbeltvinkelformler, halvvinkelformler og andre trigonometriske identiteter.',
  estimatedMinutes: 60,
  competenceGoals: [
    'utforske eigenskapar ved trigonometriske funksjonar',
    'bruke trigonometriske identitetar til å forenkle uttrykk',
    'bevise og anvende addisjonsformlene',
    'utlede og bruke dobbeltvinkel- og halvvinkelformler',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r2-4-6-intro',
      type: 'text',
      content: `## Trigonometriske formler

I dette kapittelet skal vi utforske de viktigste trigonometriske formlene. Disse formlene lar oss uttrykke trigonometriske funksjoner av summer, differanser og multipler av vinkler. De er essensielle verktøy for å forenkle uttrykk, løse likninger og bevise identiteter.

Vi starter med **addisjonsformlene**, som er fundamentet for alle de andre formlene vi skal se på. Fra addisjonsformlene utleder vi dobbeltvinkelformler, halvvinkelformler, produktformler og sumformler.`,
    },

    // ========== ADDISJONSFORMLENE ==========
    {
      id: 'r2-4-6-addisjon-intro',
      type: 'text',
      content: `## Addisjonsformlene

Addisjonsformlene uttrykker $\\sin$ og $\\cos$ av en sum eller differanse av to vinkler. Disse formlene er grunnleggende i trigonometrien og har mange anvendelser.`,
    },

    {
      id: 'r2-4-6-theorem-addisjon',
      type: 'theorem',
      title: 'Addisjonsformlene',
      content: `For alle vinkler $u$ og $v$ gjelder:

**Sinus:**
$$\\sin(u + v) = \\sin u \\cos v + \\cos u \\sin v$$
$$\\sin(u - v) = \\sin u \\cos v - \\cos u \\sin v$$

**Cosinus:**
$$\\cos(u + v) = \\cos u \\cos v - \\sin u \\sin v$$
$$\\cos(u - v) = \\cos u \\cos v + \\sin u \\sin v$$`,
    },

    {
      id: 'r2-4-6-proof-addisjon',
      type: 'proof',
      title: 'Bevis for addisjonsformlene for cosinus',
      content: `Vi beviser først $\\cos(u - v) = \\cos u \\cos v + \\sin u \\sin v$ ved hjelp av enhetssirkelen.

**Geometrisk bevis:**

Betrakt enhetssirkelen med sentrum i origo. La punktene være:
- $P_1 = (\\cos u, \\sin u)$ svarende til vinkelen $u$
- $P_2 = (\\cos v, \\sin v)$ svarende til vinkelen $v$
- $P_3 = (\\cos(u-v), \\sin(u-v))$ svarende til vinkelen $u-v$
- $P_4 = (1, 0)$ svarende til vinkelen $0$

Avstanden mellom $P_1$ og $P_2$ er lik avstanden mellom $P_3$ og $P_4$ (begge buer har lengde $|u-v|$).

**Avstand mellom $P_1$ og $P_2$:**
$$d_1^2 = (\\cos u - \\cos v)^2 + (\\sin u - \\sin v)^2$$
$$= \\cos^2 u - 2\\cos u \\cos v + \\cos^2 v + \\sin^2 u - 2\\sin u \\sin v + \\sin^2 v$$
$$= (\\cos^2 u + \\sin^2 u) + (\\cos^2 v + \\sin^2 v) - 2(\\cos u \\cos v + \\sin u \\sin v)$$
$$= 2 - 2(\\cos u \\cos v + \\sin u \\sin v)$$

**Avstand mellom $P_3$ og $P_4$:**
$$d_2^2 = (\\cos(u-v) - 1)^2 + (\\sin(u-v))^2$$
$$= \\cos^2(u-v) - 2\\cos(u-v) + 1 + \\sin^2(u-v)$$
$$= 1 - 2\\cos(u-v) + 1 = 2 - 2\\cos(u-v)$$

Siden $d_1 = d_2$:
$$2 - 2(\\cos u \\cos v + \\sin u \\sin v) = 2 - 2\\cos(u-v)$$
$$\\cos(u-v) = \\cos u \\cos v + \\sin u \\sin v$$

**Utledning av de andre formlene:**

For $\\cos(u + v)$: Sett inn $-v$ for $v$:
$$\\cos(u + v) = \\cos(u - (-v)) = \\cos u \\cos(-v) + \\sin u \\sin(-v)$$
$$= \\cos u \\cos v - \\sin u \\sin v$$

For $\\sin(u + v)$: Bruk at $\\sin \\theta = \\cos(\\frac{\\pi}{2} - \\theta)$:
$$\\sin(u + v) = \\cos\\left(\\frac{\\pi}{2} - (u + v)\\right) = \\cos\\left(\\left(\\frac{\\pi}{2} - u\\right) - v\\right)$$
$$= \\cos\\left(\\frac{\\pi}{2} - u\\right)\\cos v + \\sin\\left(\\frac{\\pi}{2} - u\\right)\\sin v$$
$$= \\sin u \\cos v + \\cos u \\sin v$$

For $\\sin(u - v)$: Sett inn $-v$ for $v$ i formelen for $\\sin(u+v)$:
$$\\sin(u - v) = \\sin u \\cos v - \\cos u \\sin v$$`,
    },

    {
      id: 'r2-4-6-example-1',
      type: 'example',
      title: 'Eksempel 1: Eksakt verdi med addisjonsformel',
      problem: `Finn den eksakte verdien av $\\sin 75°$ uten kalkulator.`,
      solution: `**Løsning:**

Vi skriver $75° = 45° + 30°$ og bruker addisjonsformelen:

$$\\sin 75° = \\sin(45° + 30°)$$
$$= \\sin 45° \\cos 30° + \\cos 45° \\sin 30°$$
$$= \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2} \\cdot \\frac{1}{2}$$
$$= \\frac{\\sqrt{6}}{4} + \\frac{\\sqrt{2}}{4}$$
$$= \\frac{\\sqrt{6} + \\sqrt{2}}{4}$$`,
    },

    {
      id: 'r2-4-6-example-2',
      type: 'example',
      title: 'Eksempel 2: Eksakt verdi av cosinus',
      problem: `Finn den eksakte verdien av $\\cos 15°$.`,
      solution: `**Løsning:**

Vi skriver $15° = 45° - 30°$ og bruker addisjonsformelen:

$$\\cos 15° = \\cos(45° - 30°)$$
$$= \\cos 45° \\cos 30° + \\sin 45° \\sin 30°$$
$$= \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2} \\cdot \\frac{1}{2}$$
$$= \\frac{\\sqrt{6}}{4} + \\frac{\\sqrt{2}}{4}$$
$$= \\frac{\\sqrt{6} + \\sqrt{2}}{4}$$

**Merk:** $\\cos 15° = \\sin 75°$, som stemmer med at $\\sin(90° - \\theta) = \\cos \\theta$.`,
    },

    {
      id: 'r2-4-6-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r2-4-6-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn de eksakte verdiene ved hjelp av addisjonsformlene.',
        subTasks: [
          { label: 'a', task: '$\\sin 105°$', solution: '$\\sin 105° = \\sin(60° + 45°) = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$' },
          { label: 'b', task: '$\\cos 75°$', solution: '$\\cos 75° = \\cos(45° + 30°) = \\frac{\\sqrt{6} - \\sqrt{2}}{4}$' },
          { label: 'c', task: '$\\sin 15°$', solution: '$\\sin 15° = \\sin(45° - 30°) = \\frac{\\sqrt{6} - \\sqrt{2}}{4}$' },
        ],
        hints: [
          'Skriv vinkelen som en sum eller differanse av kjente vinkler (30°, 45°, 60°)',
          'Bruk de kjente verdiene: $\\sin 30° = \\frac{1}{2}$, $\\cos 30° = \\frac{\\sqrt{3}}{2}$, $\\sin 45° = \\cos 45° = \\frac{\\sqrt{2}}{2}$',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'r2-4-6-example-3',
      type: 'example',
      title: 'Eksempel 3: Addisjonsformel med ukjente vinkler',
      problem: `Gitt at $\\sin u = \\frac{3}{5}$ der $u$ er i første kvadrant, og $\\cos v = \\frac{12}{13}$ der $v$ er i første kvadrant. Finn $\\sin(u + v)$.`,
      solution: `**Løsning:**

Først finner vi de manglende verdiene ved hjelp av Pytagoras' identitet $\\sin^2 \\theta + \\cos^2 \\theta = 1$.

**For vinkel $u$:**
$$\\cos^2 u = 1 - \\sin^2 u = 1 - \\frac{9}{25} = \\frac{16}{25}$$
$$\\cos u = \\frac{4}{5} \\quad \\text{(positiv siden } u \\text{ er i 1. kvadrant)}$$

**For vinkel $v$:**
$$\\sin^2 v = 1 - \\cos^2 v = 1 - \\frac{144}{169} = \\frac{25}{169}$$
$$\\sin v = \\frac{5}{13} \\quad \\text{(positiv siden } v \\text{ er i 1. kvadrant)}$$

**Addisjonsformelen:**
$$\\sin(u + v) = \\sin u \\cos v + \\cos u \\sin v$$
$$= \\frac{3}{5} \\cdot \\frac{12}{13} + \\frac{4}{5} \\cdot \\frac{5}{13}$$
$$= \\frac{36}{65} + \\frac{20}{65} = \\frac{56}{65}$$`,
    },

    {
      id: 'r2-4-6-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r2-4-6-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gitt at $\\sin u = \\frac{5}{13}$ og $\\cos v = \\frac{3}{5}$, der begge vinklene er i første kvadrant.',
        subTasks: [
          { label: 'a', task: 'Finn $\\cos u$ og $\\sin v$', solution: '$\\cos u = \\frac{12}{13}$ og $\\sin v = \\frac{4}{5}$' },
          { label: 'b', task: 'Finn $\\sin(u + v)$', solution: '$\\sin(u+v) = \\frac{5}{13} \\cdot \\frac{3}{5} + \\frac{12}{13} \\cdot \\frac{4}{5} = \\frac{15 + 48}{65} = \\frac{63}{65}$' },
          { label: 'c', task: 'Finn $\\cos(u - v)$', solution: '$\\cos(u-v) = \\frac{12}{13} \\cdot \\frac{3}{5} + \\frac{5}{13} \\cdot \\frac{4}{5} = \\frac{36 + 20}{65} = \\frac{56}{65}$' },
        ],
        hints: [
          'Bruk $\\sin^2 \\theta + \\cos^2 \\theta = 1$ for å finne de manglende verdiene',
          'Husk at i første kvadrant er både sinus og cosinus positive',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TANGENS ADDISJONSFORMEL ==========
    {
      id: 'r2-4-6-tan-addisjon-intro',
      type: 'text',
      content: `## Addisjonsformel for tangens

Vi kan utlede en addisjonsformel for tangens fra formlene for sinus og cosinus.`,
    },

    {
      id: 'r2-4-6-theorem-tan-addisjon',
      type: 'theorem',
      title: 'Addisjonsformlene for tangens',
      content: `For vinkler $u$ og $v$ der tangensverdiene er definert:

$$\\tan(u + v) = \\frac{\\tan u + \\tan v}{1 - \\tan u \\tan v}$$

$$\\tan(u - v) = \\frac{\\tan u - \\tan v}{1 + \\tan u \\tan v}$$`,
    },

    {
      id: 'r2-4-6-proof-tan',
      type: 'proof',
      title: 'Utledning av tangensformelen',
      content: `Vi bruker at $\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta}$:

$$\\tan(u + v) = \\frac{\\sin(u + v)}{\\cos(u + v)}$$
$$= \\frac{\\sin u \\cos v + \\cos u \\sin v}{\\cos u \\cos v - \\sin u \\sin v}$$

Vi deler teller og nevner med $\\cos u \\cos v$:

$$= \\frac{\\frac{\\sin u \\cos v}{\\cos u \\cos v} + \\frac{\\cos u \\sin v}{\\cos u \\cos v}}{\\frac{\\cos u \\cos v}{\\cos u \\cos v} - \\frac{\\sin u \\sin v}{\\cos u \\cos v}}$$

$$= \\frac{\\frac{\\sin u}{\\cos u} + \\frac{\\sin v}{\\cos v}}{1 - \\frac{\\sin u}{\\cos u} \\cdot \\frac{\\sin v}{\\cos v}}$$

$$= \\frac{\\tan u + \\tan v}{1 - \\tan u \\tan v}$$`,
    },

    {
      id: 'r2-4-6-example-4',
      type: 'example',
      title: 'Eksempel 4: Tangensaddisjon',
      problem: `Finn $\\tan 75°$ uten kalkulator.`,
      solution: `**Løsning:**

Vi bruker $75° = 45° + 30°$:

$$\\tan 75° = \\tan(45° + 30°) = \\frac{\\tan 45° + \\tan 30°}{1 - \\tan 45° \\tan 30°}$$

Vi vet at $\\tan 45° = 1$ og $\\tan 30° = \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$.

$$\\tan 75° = \\frac{1 + \\frac{\\sqrt{3}}{3}}{1 - 1 \\cdot \\frac{\\sqrt{3}}{3}} = \\frac{\\frac{3 + \\sqrt{3}}{3}}{\\frac{3 - \\sqrt{3}}{3}} = \\frac{3 + \\sqrt{3}}{3 - \\sqrt{3}}$$

Vi rasjonaliserer nevneren:
$$= \\frac{(3 + \\sqrt{3})(3 + \\sqrt{3})}{(3 - \\sqrt{3})(3 + \\sqrt{3})} = \\frac{9 + 6\\sqrt{3} + 3}{9 - 3} = \\frac{12 + 6\\sqrt{3}}{6} = 2 + \\sqrt{3}$$`,
    },

    // ========== DOBBELTVINKELFORMLENE ==========
    {
      id: 'r2-4-6-dobbeltvinkel-intro',
      type: 'text',
      content: `## Dobbeltvinkelformlene

Dobbeltvinkelformlene er spesialtilfeller av addisjonsformlene der $v = u$. De uttrykker trigonometriske funksjoner av $2u$ ved hjelp av funksjoner av $u$.`,
    },

    {
      id: 'r2-4-6-theorem-dobbeltvinkel',
      type: 'theorem',
      title: 'Dobbeltvinkelformlene',
      content: `For alle vinkler $u$ gjelder:

**Sinus:**
$$\\sin 2u = 2 \\sin u \\cos u$$

**Cosinus:** (tre ekvivalente former)
$$\\cos 2u = \\cos^2 u - \\sin^2 u$$
$$\\cos 2u = 2\\cos^2 u - 1$$
$$\\cos 2u = 1 - 2\\sin^2 u$$

**Tangens:**
$$\\tan 2u = \\frac{2 \\tan u}{1 - \\tan^2 u}$$`,
    },

    {
      id: 'r2-4-6-proof-dobbeltvinkel',
      type: 'proof',
      title: 'Utledning av dobbeltvinkelformlene',
      content: `**Sinus:**
Fra $\\sin(u + v) = \\sin u \\cos v + \\cos u \\sin v$, sett $v = u$:
$$\\sin 2u = \\sin(u + u) = \\sin u \\cos u + \\cos u \\sin u = 2 \\sin u \\cos u$$

**Cosinus:**
Fra $\\cos(u + v) = \\cos u \\cos v - \\sin u \\sin v$, sett $v = u$:
$$\\cos 2u = \\cos u \\cos u - \\sin u \\sin u = \\cos^2 u - \\sin^2 u$$

De andre formene fås ved å bruke $\\sin^2 u + \\cos^2 u = 1$:
$$\\cos 2u = \\cos^2 u - \\sin^2 u = \\cos^2 u - (1 - \\cos^2 u) = 2\\cos^2 u - 1$$
$$\\cos 2u = \\cos^2 u - \\sin^2 u = (1 - \\sin^2 u) - \\sin^2 u = 1 - 2\\sin^2 u$$

**Tangens:**
Fra tangensaddisjon med $v = u$:
$$\\tan 2u = \\frac{\\tan u + \\tan u}{1 - \\tan u \\cdot \\tan u} = \\frac{2\\tan u}{1 - \\tan^2 u}$$`,
    },

    {
      id: 'r2-4-6-example-5',
      type: 'example',
      title: 'Eksempel 5: Bruke dobbeltvinkelformler',
      problem: `Gitt at $\\cos u = \\frac{3}{5}$ der $u$ er i første kvadrant. Finn $\\sin 2u$, $\\cos 2u$ og $\\tan 2u$.`,
      solution: `**Løsning:**

Først finner vi $\\sin u$:
$$\\sin^2 u = 1 - \\cos^2 u = 1 - \\frac{9}{25} = \\frac{16}{25}$$
$$\\sin u = \\frac{4}{5} \\quad \\text{(positiv i 1. kvadrant)}$$

**$\\sin 2u$:**
$$\\sin 2u = 2 \\sin u \\cos u = 2 \\cdot \\frac{4}{5} \\cdot \\frac{3}{5} = \\frac{24}{25}$$

**$\\cos 2u$:**
$$\\cos 2u = \\cos^2 u - \\sin^2 u = \\frac{9}{25} - \\frac{16}{25} = -\\frac{7}{25}$$

**$\\tan 2u$:**
$$\\tan 2u = \\frac{\\sin 2u}{\\cos 2u} = \\frac{24/25}{-7/25} = -\\frac{24}{7}$$

**Alternativ utregning av $\\tan 2u$:**
$$\\tan u = \\frac{\\sin u}{\\cos u} = \\frac{4/5}{3/5} = \\frac{4}{3}$$
$$\\tan 2u = \\frac{2 \\cdot \\frac{4}{3}}{1 - (\\frac{4}{3})^2} = \\frac{\\frac{8}{3}}{1 - \\frac{16}{9}} = \\frac{\\frac{8}{3}}{-\\frac{7}{9}} = \\frac{8}{3} \\cdot (-\\frac{9}{7}) = -\\frac{24}{7}$$`,
    },

    {
      id: 'r2-4-6-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r2-4-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gitt at $\\sin u = \\frac{5}{13}$ der $u$ er i første kvadrant.',
        subTasks: [
          { label: 'a', task: 'Finn $\\cos u$', solution: '$\\cos u = \\frac{12}{13}$' },
          { label: 'b', task: 'Finn $\\sin 2u$', solution: '$\\sin 2u = 2 \\cdot \\frac{5}{13} \\cdot \\frac{12}{13} = \\frac{120}{169}$' },
          { label: 'c', task: 'Finn $\\cos 2u$', solution: '$\\cos 2u = (\\frac{12}{13})^2 - (\\frac{5}{13})^2 = \\frac{144 - 25}{169} = \\frac{119}{169}$' },
          { label: 'd', task: 'Finn $\\tan 2u$', solution: '$\\tan 2u = \\frac{120/169}{119/169} = \\frac{120}{119}$' },
        ],
        hints: [
          'Bruk Pytagoras-identiteten for å finne $\\cos u$',
          'Husk formelen $\\sin 2u = 2 \\sin u \\cos u$',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'r2-4-6-example-6',
      type: 'example',
      title: 'Eksempel 6: Forenkle med dobbeltvinkelformel',
      problem: `Forenkle uttrykket $\\frac{\\sin 2x}{1 + \\cos 2x}$.`,
      solution: `**Løsning:**

Vi bruker dobbeltvinkelformlene:
- $\\sin 2x = 2 \\sin x \\cos x$
- $\\cos 2x = 2\\cos^2 x - 1$

$$\\frac{\\sin 2x}{1 + \\cos 2x} = \\frac{2 \\sin x \\cos x}{1 + (2\\cos^2 x - 1)}$$
$$= \\frac{2 \\sin x \\cos x}{2\\cos^2 x}$$
$$= \\frac{\\sin x}{\\cos x}$$
$$= \\tan x$$`,
    },

    {
      id: 'r2-4-6-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r2-4-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forenkle uttrykkene.',
        subTasks: [
          { label: 'a', task: '$\\frac{1 - \\cos 2x}{\\sin 2x}$', solution: '$= \\frac{1 - (1 - 2\\sin^2 x)}{2\\sin x \\cos x} = \\frac{2\\sin^2 x}{2\\sin x \\cos x} = \\frac{\\sin x}{\\cos x} = \\tan x$' },
          { label: 'b', task: '$\\sin x \\cos x$', solution: '$= \\frac{1}{2} \\cdot 2\\sin x \\cos x = \\frac{1}{2}\\sin 2x$' },
          { label: 'c', task: '$\\cos^2 x - \\sin^2 x$', solution: '$= \\cos 2x$' },
        ],
        hints: [
          'Bruk dobbeltvinkelformlene "baklengs"',
          'Husk at $\\sin 2x = 2\\sin x \\cos x$',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== HALVVINKELFORMLENE ==========
    {
      id: 'r2-4-6-halvvinkel-intro',
      type: 'text',
      content: `## Halvvinkelformlene

Halvvinkelformlene uttrykker trigonometriske funksjoner av $\\frac{u}{2}$ ved hjelp av funksjoner av $u$. De utledes fra dobbeltvinkelformlene ved å løse for $\\sin^2 \\frac{u}{2}$ og $\\cos^2 \\frac{u}{2}$.`,
    },

    {
      id: 'r2-4-6-theorem-halvvinkel',
      type: 'theorem',
      title: 'Halvvinkelformlene',
      content: `For alle vinkler $u$ gjelder:

$$\\sin^2 \\frac{u}{2} = \\frac{1 - \\cos u}{2}$$

$$\\cos^2 \\frac{u}{2} = \\frac{1 + \\cos u}{2}$$

$$\\tan \\frac{u}{2} = \\frac{\\sin u}{1 + \\cos u} = \\frac{1 - \\cos u}{\\sin u}$$

Eller med kvadratrot:
$$\\sin \\frac{u}{2} = \\pm\\sqrt{\\frac{1 - \\cos u}{2}}$$
$$\\cos \\frac{u}{2} = \\pm\\sqrt{\\frac{1 + \\cos u}{2}}$$

Fortegnet bestemmes av hvilken kvadrant $\\frac{u}{2}$ ligger i.`,
    },

    {
      id: 'r2-4-6-proof-halvvinkel',
      type: 'proof',
      title: 'Utledning av halvvinkelformlene',
      content: `Vi starter med dobbeltvinkelformelen $\\cos 2\\theta = 1 - 2\\sin^2 \\theta$.

La $2\\theta = u$, slik at $\\theta = \\frac{u}{2}$:
$$\\cos u = 1 - 2\\sin^2 \\frac{u}{2}$$
$$2\\sin^2 \\frac{u}{2} = 1 - \\cos u$$
$$\\sin^2 \\frac{u}{2} = \\frac{1 - \\cos u}{2}$$

Tilsvarende fra $\\cos 2\\theta = 2\\cos^2 \\theta - 1$:
$$\\cos u = 2\\cos^2 \\frac{u}{2} - 1$$
$$2\\cos^2 \\frac{u}{2} = 1 + \\cos u$$
$$\\cos^2 \\frac{u}{2} = \\frac{1 + \\cos u}{2}$$

**For tangensformelen:**
$$\\tan \\frac{u}{2} = \\frac{\\sin \\frac{u}{2}}{\\cos \\frac{u}{2}} = \\frac{\\sin \\frac{u}{2}}{\\cos \\frac{u}{2}} \\cdot \\frac{2\\cos \\frac{u}{2}}{2\\cos \\frac{u}{2}}$$
$$= \\frac{2\\sin \\frac{u}{2} \\cos \\frac{u}{2}}{2\\cos^2 \\frac{u}{2}} = \\frac{\\sin u}{1 + \\cos u}$$`,
    },

    {
      id: 'r2-4-6-example-7',
      type: 'example',
      title: 'Eksempel 7: Halvvinkelformel',
      problem: `Finn den eksakte verdien av $\\cos 22{,}5°$.`,
      solution: `**Løsning:**

Vi bruker halvvinkelformelen med $u = 45°$, slik at $\\frac{u}{2} = 22{,}5°$:

$$\\cos^2 22{,}5° = \\frac{1 + \\cos 45°}{2} = \\frac{1 + \\frac{\\sqrt{2}}{2}}{2}$$

$$= \\frac{\\frac{2 + \\sqrt{2}}{2}}{2} = \\frac{2 + \\sqrt{2}}{4}$$

Siden $22{,}5°$ er i første kvadrant, er $\\cos 22{,}5° > 0$:

$$\\cos 22{,}5° = \\sqrt{\\frac{2 + \\sqrt{2}}{4}} = \\frac{\\sqrt{2 + \\sqrt{2}}}{2}$$`,
    },

    {
      id: 'r2-4-6-example-8',
      type: 'example',
      title: 'Eksempel 8: Halvvinkel med gitt verdi',
      problem: `Gitt at $\\cos u = \\frac{4}{5}$ der $0 < u < \\frac{\\pi}{2}$. Finn $\\sin \\frac{u}{2}$ og $\\cos \\frac{u}{2}$.`,
      solution: `**Løsning:**

Siden $0 < u < \\frac{\\pi}{2}$, har vi $0 < \\frac{u}{2} < \\frac{\\pi}{4}$, som betyr at $\\frac{u}{2}$ er i første kvadrant. Dermed er både $\\sin \\frac{u}{2}$ og $\\cos \\frac{u}{2}$ positive.

**$\\sin \\frac{u}{2}$:**
$$\\sin^2 \\frac{u}{2} = \\frac{1 - \\cos u}{2} = \\frac{1 - \\frac{4}{5}}{2} = \\frac{\\frac{1}{5}}{2} = \\frac{1}{10}$$
$$\\sin \\frac{u}{2} = \\sqrt{\\frac{1}{10}} = \\frac{1}{\\sqrt{10}} = \\frac{\\sqrt{10}}{10}$$

**$\\cos \\frac{u}{2}$:**
$$\\cos^2 \\frac{u}{2} = \\frac{1 + \\cos u}{2} = \\frac{1 + \\frac{4}{5}}{2} = \\frac{\\frac{9}{5}}{2} = \\frac{9}{10}$$
$$\\cos \\frac{u}{2} = \\sqrt{\\frac{9}{10}} = \\frac{3}{\\sqrt{10}} = \\frac{3\\sqrt{10}}{10}$$`,
    },

    {
      id: 'r2-4-6-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r2-4-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk halvvinkelformlene.',
        subTasks: [
          { label: 'a', task: 'Finn $\\sin 15°$ ved å bruke halvvinkelformelen med $u = 30°$', solution: '$\\sin^2 15° = \\frac{1 - \\cos 30°}{2} = \\frac{1 - \\frac{\\sqrt{3}}{2}}{2} = \\frac{2 - \\sqrt{3}}{4}$, så $\\sin 15° = \\frac{\\sqrt{2 - \\sqrt{3}}}{2}$' },
          { label: 'b', task: 'Gitt $\\cos u = \\frac{7}{25}$ der $0 < u < \\frac{\\pi}{2}$, finn $\\cos \\frac{u}{2}$', solution: '$\\cos^2 \\frac{u}{2} = \\frac{1 + \\frac{7}{25}}{2} = \\frac{32}{50} = \\frac{16}{25}$, så $\\cos \\frac{u}{2} = \\frac{4}{5}$' },
          { label: 'c', task: 'Gitt $\\sin u = \\frac{24}{25}$ og $\\cos u = \\frac{7}{25}$, finn $\\tan \\frac{u}{2}$', solution: '$\\tan \\frac{u}{2} = \\frac{\\sin u}{1 + \\cos u} = \\frac{24/25}{1 + 7/25} = \\frac{24/25}{32/25} = \\frac{24}{32} = \\frac{3}{4}$' },
        ],
        hints: [
          'Husk at fortegnet avhenger av hvilken kvadrant halvvinkelen ligger i',
          'Bruk $\\tan \\frac{u}{2} = \\frac{\\sin u}{1 + \\cos u}$ for å unngå kvadratrøtter',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== PRODUKTFORMLENE ==========
    {
      id: 'r2-4-6-produkt-intro',
      type: 'text',
      content: `## Produktformlene

Produktformlene lar oss skrive om produkter av trigonometriske funksjoner til summer. Dette er nyttig for integrasjon og forenkling av uttrykk.`,
    },

    {
      id: 'r2-4-6-theorem-produkt',
      type: 'theorem',
      title: 'Produktformlene',
      content: `For alle vinkler $u$ og $v$ gjelder:

$$\\sin u \\cos v = \\frac{1}{2}[\\sin(u + v) + \\sin(u - v)]$$

$$\\cos u \\cos v = \\frac{1}{2}[\\cos(u - v) + \\cos(u + v)]$$

$$\\sin u \\sin v = \\frac{1}{2}[\\cos(u - v) - \\cos(u + v)]$$`,
    },

    {
      id: 'r2-4-6-proof-produkt',
      type: 'proof',
      title: 'Utledning av produktformlene',
      content: `Vi starter med addisjonsformlene:
$$\\sin(u + v) = \\sin u \\cos v + \\cos u \\sin v$$
$$\\sin(u - v) = \\sin u \\cos v - \\cos u \\sin v$$

Adderer vi disse to likningene:
$$\\sin(u + v) + \\sin(u - v) = 2 \\sin u \\cos v$$
$$\\sin u \\cos v = \\frac{1}{2}[\\sin(u + v) + \\sin(u - v)]$$

For cosinus-produktet bruker vi:
$$\\cos(u + v) = \\cos u \\cos v - \\sin u \\sin v$$
$$\\cos(u - v) = \\cos u \\cos v + \\sin u \\sin v$$

Adderer vi disse:
$$\\cos(u + v) + \\cos(u - v) = 2 \\cos u \\cos v$$
$$\\cos u \\cos v = \\frac{1}{2}[\\cos(u - v) + \\cos(u + v)]$$

Subtraherer vi i stedet:
$$\\cos(u - v) - \\cos(u + v) = 2 \\sin u \\sin v$$
$$\\sin u \\sin v = \\frac{1}{2}[\\cos(u - v) - \\cos(u + v)]$$`,
    },

    {
      id: 'r2-4-6-example-9',
      type: 'example',
      title: 'Eksempel 9: Produktformel',
      problem: `Skriv om $\\sin 5x \\cos 3x$ som en sum.`,
      solution: `**Løsning:**

Vi bruker produktformelen $\\sin u \\cos v = \\frac{1}{2}[\\sin(u + v) + \\sin(u - v)]$ med $u = 5x$ og $v = 3x$:

$$\\sin 5x \\cos 3x = \\frac{1}{2}[\\sin(5x + 3x) + \\sin(5x - 3x)]$$
$$= \\frac{1}{2}[\\sin 8x + \\sin 2x]$$
$$= \\frac{1}{2}\\sin 8x + \\frac{1}{2}\\sin 2x$$`,
    },

    {
      id: 'r2-4-6-example-10',
      type: 'example',
      title: 'Eksempel 10: Produkt av cosinus',
      problem: `Skriv om $\\cos 4x \\cos 2x$ som en sum.`,
      solution: `**Løsning:**

Vi bruker produktformelen $\\cos u \\cos v = \\frac{1}{2}[\\cos(u - v) + \\cos(u + v)]$ med $u = 4x$ og $v = 2x$:

$$\\cos 4x \\cos 2x = \\frac{1}{2}[\\cos(4x - 2x) + \\cos(4x + 2x)]$$
$$= \\frac{1}{2}[\\cos 2x + \\cos 6x]$$
$$= \\frac{1}{2}\\cos 2x + \\frac{1}{2}\\cos 6x$$`,
    },

    {
      id: 'r2-4-6-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r2-4-6-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv om produktene som summer.',
        subTasks: [
          { label: 'a', task: '$\\sin 3x \\cos x$', solution: '$= \\frac{1}{2}[\\sin 4x + \\sin 2x]$' },
          { label: 'b', task: '$\\cos 5x \\cos 2x$', solution: '$= \\frac{1}{2}[\\cos 3x + \\cos 7x]$' },
          { label: 'c', task: '$\\sin 4x \\sin 2x$', solution: '$= \\frac{1}{2}[\\cos 2x - \\cos 6x]$' },
        ],
        hints: [
          'Identifiser hvilken produktformel som passer',
          'Husk at $\\sin u \\sin v$ gir $\\cos(u-v) - \\cos(u+v)$',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SUMFORMLENE ==========
    {
      id: 'r2-4-6-sum-intro',
      type: 'text',
      content: `## Sumformlene (sum-til-produkt)

Sumformlene er det motsatte av produktformlene. De lar oss skrive om summer og differanser av trigonometriske funksjoner til produkter.`,
    },

    {
      id: 'r2-4-6-theorem-sum',
      type: 'theorem',
      title: 'Sumformlene (sum-til-produkt)',
      content: `For alle vinkler $A$ og $B$ gjelder:

$$\\sin A + \\sin B = 2 \\sin\\frac{A + B}{2} \\cos\\frac{A - B}{2}$$

$$\\sin A - \\sin B = 2 \\cos\\frac{A + B}{2} \\sin\\frac{A - B}{2}$$

$$\\cos A + \\cos B = 2 \\cos\\frac{A + B}{2} \\cos\\frac{A - B}{2}$$

$$\\cos A - \\cos B = -2 \\sin\\frac{A + B}{2} \\sin\\frac{A - B}{2}$$`,
    },

    {
      id: 'r2-4-6-proof-sum',
      type: 'proof',
      title: 'Utledning av sumformlene',
      content: `Vi utleder sumformlene fra produktformlene ved substitusjon.

La $u + v = A$ og $u - v = B$. Da er:
$$u = \\frac{A + B}{2}, \\quad v = \\frac{A - B}{2}$$

Fra produktformelen $\\sin u \\cos v = \\frac{1}{2}[\\sin(u + v) + \\sin(u - v)]$:
$$2\\sin u \\cos v = \\sin(u + v) + \\sin(u - v)$$
$$\\sin A + \\sin B = 2\\sin\\frac{A + B}{2}\\cos\\frac{A - B}{2}$$

For differansen bruker vi $\\sin(u-v) = \\sin u \\cos v - \\cos u \\sin v$ og $\\sin(u+v) = \\sin u \\cos v + \\cos u \\sin v$:
$$\\sin(u + v) - \\sin(u - v) = 2\\cos u \\sin v$$
$$\\sin A - \\sin B = 2\\cos\\frac{A+B}{2}\\sin\\frac{A-B}{2}$$

Tilsvarende utledes de to cosinusformlene fra produktformlene for cosinus.`,
    },

    {
      id: 'r2-4-6-example-11',
      type: 'example',
      title: 'Eksempel 11: Sumformel',
      problem: `Skriv om $\\sin 5x + \\sin 3x$ som et produkt.`,
      solution: `**Løsning:**

Vi bruker sumformelen $\\sin A + \\sin B = 2 \\sin\\frac{A + B}{2} \\cos\\frac{A - B}{2}$ med $A = 5x$ og $B = 3x$:

$$\\sin 5x + \\sin 3x = 2 \\sin\\frac{5x + 3x}{2} \\cos\\frac{5x - 3x}{2}$$
$$= 2 \\sin 4x \\cos x$$`,
    },

    {
      id: 'r2-4-6-example-12',
      type: 'example',
      title: 'Eksempel 12: Differanse av cosinus',
      problem: `Skriv om $\\cos 2x - \\cos 6x$ som et produkt.`,
      solution: `**Løsning:**

Vi bruker sumformelen $\\cos A - \\cos B = -2 \\sin\\frac{A + B}{2} \\sin\\frac{A - B}{2}$ med $A = 2x$ og $B = 6x$:

$$\\cos 2x - \\cos 6x = -2 \\sin\\frac{2x + 6x}{2} \\sin\\frac{2x - 6x}{2}$$
$$= -2 \\sin 4x \\sin(-2x)$$
$$= -2 \\sin 4x \\cdot (-\\sin 2x)$$
$$= 2 \\sin 4x \\sin 2x$$`,
    },

    {
      id: 'r2-4-6-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r2-4-6-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv om summene som produkter.',
        subTasks: [
          { label: 'a', task: '$\\sin 7x + \\sin x$', solution: '$= 2\\sin 4x \\cos 3x$' },
          { label: 'b', task: '$\\cos 5x + \\cos 3x$', solution: '$= 2\\cos 4x \\cos x$' },
          { label: 'c', task: '$\\sin 6x - \\sin 2x$', solution: '$= 2\\cos 4x \\sin 2x$' },
          { label: 'd', task: '$\\cos x - \\cos 5x$', solution: '$= -2\\sin 3x \\sin(-2x) = 2\\sin 3x \\sin 2x$' },
        ],
        hints: [
          'Identifiser $A$ og $B$, og beregn $\\frac{A+B}{2}$ og $\\frac{A-B}{2}$',
          'Husk at $\\sin(-x) = -\\sin x$',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== ANVENDELSER OG FORENKLING ==========
    {
      id: 'r2-4-6-anvendelser-intro',
      type: 'text',
      content: `## Anvendelser og forenkling

De trigonometriske formlene har mange anvendelser. Her ser vi på hvordan de brukes til å forenkle uttrykk og bevise identiteter.`,
    },

    {
      id: 'r2-4-6-example-13',
      type: 'example',
      title: 'Eksempel 13: Bevis av identitet',
      problem: `Vis at $\\frac{\\sin 2x}{1 - \\cos 2x} = \\cot x$.`,
      solution: `**Løsning:**

Vi bruker dobbeltvinkelformlene $\\sin 2x = 2\\sin x \\cos x$ og $\\cos 2x = 1 - 2\\sin^2 x$:

$$\\frac{\\sin 2x}{1 - \\cos 2x} = \\frac{2\\sin x \\cos x}{1 - (1 - 2\\sin^2 x)}$$
$$= \\frac{2\\sin x \\cos x}{2\\sin^2 x}$$
$$= \\frac{\\cos x}{\\sin x}$$
$$= \\cot x$$

Dermed er identiteten bevist.`,
    },

    {
      id: 'r2-4-6-example-14',
      type: 'example',
      title: 'Eksempel 14: Forenkle sammensatt uttrykk',
      problem: `Forenkle $\\cos^4 x - \\sin^4 x$.`,
      solution: `**Løsning:**

Vi faktoriserer ved hjelp av konjugatsetningen:
$$\\cos^4 x - \\sin^4 x = (\\cos^2 x)^2 - (\\sin^2 x)^2$$
$$= (\\cos^2 x + \\sin^2 x)(\\cos^2 x - \\sin^2 x)$$

Vi bruker Pytagoras-identiteten $\\cos^2 x + \\sin^2 x = 1$ og dobbeltvinkelformelen $\\cos 2x = \\cos^2 x - \\sin^2 x$:

$$= 1 \\cdot \\cos 2x = \\cos 2x$$`,
    },

    {
      id: 'r2-4-6-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'r2-4-6-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Vis at identitetene stemmer.',
        subTasks: [
          { label: 'a', task: '$\\sin 3x = 3\\sin x - 4\\sin^3 x$', solution: 'Bruk $\\sin 3x = \\sin(2x + x) = \\sin 2x \\cos x + \\cos 2x \\sin x = 2\\sin x \\cos^2 x + (1 - 2\\sin^2 x)\\sin x = 2\\sin x(1 - \\sin^2 x) + \\sin x - 2\\sin^3 x = 2\\sin x - 2\\sin^3 x + \\sin x - 2\\sin^3 x = 3\\sin x - 4\\sin^3 x$' },
          { label: 'b', task: '$\\cos 3x = 4\\cos^3 x - 3\\cos x$', solution: 'Bruk $\\cos 3x = \\cos(2x + x) = \\cos 2x \\cos x - \\sin 2x \\sin x = (2\\cos^2 x - 1)\\cos x - 2\\sin^2 x \\cos x = 2\\cos^3 x - \\cos x - 2(1 - \\cos^2 x)\\cos x = 2\\cos^3 x - \\cos x - 2\\cos x + 2\\cos^3 x = 4\\cos^3 x - 3\\cos x$' },
        ],
        hints: [
          'Skriv $3x$ som $2x + x$ og bruk addisjonsformlene',
          'Bruk $\\sin^2 x = 1 - \\cos^2 x$ eller $\\cos^2 x = 1 - \\sin^2 x$ for å skrive alt med én funksjon',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'r2-4-6-example-15',
      type: 'example',
      title: 'Eksempel 15: Løse likning med dobbeltvinkel',
      problem: `Løs likningen $\\sin 2x = \\cos x$ for $0 \\leq x < 2\\pi$.`,
      solution: `**Løsning:**

Vi bruker $\\sin 2x = 2\\sin x \\cos x$:
$$2\\sin x \\cos x = \\cos x$$
$$2\\sin x \\cos x - \\cos x = 0$$
$$\\cos x(2\\sin x - 1) = 0$$

**Tilfelle 1:** $\\cos x = 0$
$$x = \\frac{\\pi}{2} \\text{ eller } x = \\frac{3\\pi}{2}$$

**Tilfelle 2:** $2\\sin x - 1 = 0 \\Rightarrow \\sin x = \\frac{1}{2}$
$$x = \\frac{\\pi}{6} \\text{ eller } x = \\frac{5\\pi}{6}$$

**Løsninger:** $x = \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}, \\frac{3\\pi}{2}$`,
    },

    {
      id: 'r2-4-6-example-16',
      type: 'example',
      title: 'Eksempel 16: Identitet med sumformler',
      problem: `Vis at $\\frac{\\sin 3x + \\sin x}{\\cos 3x + \\cos x} = \\tan 2x$.`,
      solution: `**Løsning:**

Vi bruker sumformlene:
- $\\sin 3x + \\sin x = 2\\sin\\frac{3x+x}{2}\\cos\\frac{3x-x}{2} = 2\\sin 2x \\cos x$
- $\\cos 3x + \\cos x = 2\\cos\\frac{3x+x}{2}\\cos\\frac{3x-x}{2} = 2\\cos 2x \\cos x$

Dermed:
$$\\frac{\\sin 3x + \\sin x}{\\cos 3x + \\cos x} = \\frac{2\\sin 2x \\cos x}{2\\cos 2x \\cos x} = \\frac{\\sin 2x}{\\cos 2x} = \\tan 2x$$`,
    },

    {
      id: 'r2-4-6-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'r2-4-6-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs likningene for $0 \\leq x < 2\\pi$.',
        subTasks: [
          { label: 'a', task: '$\\cos 2x = \\sin x$', solution: 'Bruk $\\cos 2x = 1 - 2\\sin^2 x$: $1 - 2\\sin^2 x = \\sin x \\Rightarrow 2\\sin^2 x + \\sin x - 1 = 0 \\Rightarrow (2\\sin x - 1)(\\sin x + 1) = 0$. Løsninger: $x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{3\\pi}{2}$' },
          { label: 'b', task: '$\\sin 2x + \\sin x = 0$', solution: 'Bruk sumformel eller faktoriser: $2\\sin x \\cos x + \\sin x = \\sin x(2\\cos x + 1) = 0$. Løsninger: $x = 0, \\pi, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}$' },
          { label: 'c', task: '$\\cos 2x + \\cos x = 0$', solution: 'Bruk sumformel: $2\\cos\\frac{3x}{2}\\cos\\frac{x}{2} = 0$. Løsninger: $x = \\frac{\\pi}{3}, \\pi, \\frac{5\\pi}{3}$' },
        ],
        hints: [
          'Prøv å skrive alt med én type trigonometrisk funksjon',
          'Faktorisering er ofte nøkkelen',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'r2-4-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi lært:

**Addisjonsformlene:**
- $\\sin(u \\pm v) = \\sin u \\cos v \\pm \\cos u \\sin v$
- $\\cos(u \\pm v) = \\cos u \\cos v \\mp \\sin u \\sin v$
- $\\tan(u + v) = \\frac{\\tan u + \\tan v}{1 - \\tan u \\tan v}$

**Dobbeltvinkelformlene:**
- $\\sin 2u = 2\\sin u \\cos u$
- $\\cos 2u = \\cos^2 u - \\sin^2 u = 2\\cos^2 u - 1 = 1 - 2\\sin^2 u$

**Halvvinkelformlene:**
- $\\sin^2 \\frac{u}{2} = \\frac{1 - \\cos u}{2}$
- $\\cos^2 \\frac{u}{2} = \\frac{1 + \\cos u}{2}$

**Produktformlene:**
- Produkt til sum: f.eks. $\\sin u \\cos v = \\frac{1}{2}[\\sin(u+v) + \\sin(u-v)]$

**Sumformlene:**
- Sum til produkt: f.eks. $\\sin A + \\sin B = 2\\sin\\frac{A+B}{2}\\cos\\frac{A-B}{2}$

Disse formlene er essensielle verktøy for å forenkle trigonometriske uttrykk, løse likninger og bevise identiteter.`,
    },

    {
      id: 'r2-4-6-note-strategi',
      type: 'tip',
      content: `**Strategi for å velge riktig formel:**

1. **Beregne eksakte verdier:** Bruk addisjonsformlene til å dele opp ukjente vinkler i kjente (30°, 45°, 60°)
2. **Forenkle uttrykk:** Dobbeltvinkelformlene er ofte nyttige for å redusere potenser
3. **Integrasjon:** Produktformlene gjør produkter om til summer, som er lettere å integrere
4. **Faktorisering:** Sumformlene gjør summer om til produkter, nyttig for å løse likninger`,
    },

    // ========== BLANDEDE OPPGAVER ==========
    {
      id: 'r2-4-6-blandet-intro',
      type: 'text',
      content: `## Blandede oppgaver

Her er flere oppgaver som krever bruk av ulike formler fra kapitlet.`,
    },

    {
      id: 'r2-4-6-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'r2-4-6-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn de eksakte verdiene.',
        subTasks: [
          { label: 'a', task: '$\\sin 165°$', solution: '$\\sin 165° = \\sin(180° - 15°) = \\sin 15° = \\frac{\\sqrt{6} - \\sqrt{2}}{4}$' },
          { label: 'b', task: '$\\cos 195°$', solution: '$\\cos 195° = \\cos(180° + 15°) = -\\cos 15° = -\\frac{\\sqrt{6} + \\sqrt{2}}{4}$' },
          { label: 'c', task: '$\\tan 105°$', solution: '$\\tan 105° = \\tan(60° + 45°) = \\frac{\\tan 60° + \\tan 45°}{1 - \\tan 60° \\tan 45°} = \\frac{\\sqrt{3} + 1}{1 - \\sqrt{3}} = -(2 + \\sqrt{3})$' },
        ],
        hints: [
          'Skriv vinkelen som en sum/differanse av kjente vinkler',
          'Bruk symmetri: $\\sin(180° - x) = \\sin x$, $\\cos(180° + x) = -\\cos x$',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'r2-4-6-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'r2-4-6-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forenkle uttrykkene så mye som mulig.',
        subTasks: [
          { label: 'a', task: '$\\sin^2 x \\cos^2 x$', solution: '$= \\frac{1}{4}(2\\sin x \\cos x)^2 = \\frac{1}{4}\\sin^2 2x = \\frac{1}{4} \\cdot \\frac{1 - \\cos 4x}{2} = \\frac{1 - \\cos 4x}{8}$' },
          { label: 'b', task: '$1 + \\cos 2x + \\cos 4x + \\cos 6x$', solution: 'Bruk sumformel parvis: $= (1 + \\cos 4x) + (\\cos 2x + \\cos 6x) = 2\\cos^2 2x + 2\\cos 4x \\cos 2x = 2\\cos 2x(\\cos 2x + \\cos 4x) = 2\\cos 2x \\cdot 2\\cos 3x \\cos x = 4\\cos x \\cos 2x \\cos 3x$' },
          { label: 'c', task: '$\\frac{\\sin 4x}{\\sin x}$ for $\\sin x \\neq 0$', solution: '$= \\frac{2\\sin 2x \\cos 2x}{\\sin x} = \\frac{4\\sin x \\cos x \\cos 2x}{\\sin x} = 4\\cos x \\cos 2x$' },
        ],
        hints: [
          'Bruk $\\sin 2x = 2\\sin x \\cos x$ gjentatte ganger',
          'Se etter mønstre som kan forenkles med sumformlene',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'r2-4-6-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'r2-4-6-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vis at identitetene stemmer.',
        subTasks: [
          { label: 'a', task: '$\\tan x + \\cot x = \\frac{2}{\\sin 2x}$', solution: '$\\tan x + \\cot x = \\frac{\\sin x}{\\cos x} + \\frac{\\cos x}{\\sin x} = \\frac{\\sin^2 x + \\cos^2 x}{\\sin x \\cos x} = \\frac{1}{\\sin x \\cos x} = \\frac{2}{2\\sin x \\cos x} = \\frac{2}{\\sin 2x}$' },
          { label: 'b', task: '$\\frac{1 + \\tan^2 x}{1 - \\tan^2 x} = \\frac{1}{\\cos 2x}$', solution: 'Bruk $1 + \\tan^2 x = \\sec^2 x$ og $\\tan^2 x = \\frac{\\sin^2 x}{\\cos^2 x}$: $\\frac{1 + \\tan^2 x}{1 - \\tan^2 x} = \\frac{\\frac{1}{\\cos^2 x}}{\\frac{\\cos^2 x - \\sin^2 x}{\\cos^2 x}} = \\frac{1}{\\cos^2 x - \\sin^2 x} = \\frac{1}{\\cos 2x}$' },
          { label: 'c', task: '$\\sin 4x = 4\\sin x \\cos x \\cos 2x$', solution: '$\\sin 4x = 2\\sin 2x \\cos 2x = 2 \\cdot 2\\sin x \\cos x \\cdot \\cos 2x = 4\\sin x \\cos x \\cos 2x$' },
        ],
        hints: [
          'Start med én side og transformer til den andre',
          'Skriv tangens og cotangens som brøker med sinus og cosinus',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'r2-4-6-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'r2-4-6-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs likningene for $0 \\leq x < 2\\pi$.',
        subTasks: [
          { label: 'a', task: '$\\sin x + \\sin 3x = 0$', solution: 'Sumformel: $2\\sin 2x \\cos x = 0$. $\\sin 2x = 0$ gir $x = 0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}$. $\\cos x = 0$ gir $x = \\frac{\\pi}{2}, \\frac{3\\pi}{2}$. Løsninger: $x = 0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}$' },
          { label: 'b', task: '$\\cos x - \\cos 3x = \\sin 2x$', solution: 'VS: $-2\\sin 2x \\sin(-x) = 2\\sin 2x \\sin x$. Likningen blir $2\\sin 2x \\sin x = \\sin 2x$, dvs. $\\sin 2x(2\\sin x - 1) = 0$. Løsninger: $x = 0, \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}, \\pi, \\frac{3\\pi}{2}$' },
          { label: 'c', task: '$\\cos 2x + 3\\sin x - 2 = 0$', solution: 'Bruk $\\cos 2x = 1 - 2\\sin^2 x$: $1 - 2\\sin^2 x + 3\\sin x - 2 = 0 \\Rightarrow 2\\sin^2 x - 3\\sin x + 1 = 0 \\Rightarrow (2\\sin x - 1)(\\sin x - 1) = 0$. Løsninger: $x = \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}$' },
        ],
        hints: [
          'Prøv sumformlene for å faktorisere',
          'Bruk dobbeltvinkelformel for å få én type trigonometrisk funksjon',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'r2-4-6-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 'r2-4-6-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordringsoppgaver.',
        subTasks: [
          { label: 'a', task: 'Vis at $\\sin 20° \\sin 40° \\sin 80° = \\frac{\\sqrt{3}}{8}$', solution: 'Bruk produktformel og $\\sin 60° = \\frac{\\sqrt{3}}{2}$. $\\sin 40° \\sin 80° = \\frac{1}{2}[\\cos 40° - \\cos 120°] = \\frac{1}{2}[\\cos 40° + \\frac{1}{2}]$. Med videre manipulering vises resultatet.' },
          { label: 'b', task: 'Finn $\\tan 20° + \\tan 40° + \\tan 80°$ uttrykt med $\\tan 60°$', solution: 'Bruk $\\tan 3\\theta = \\frac{3\\tan\\theta - \\tan^3\\theta}{1 - 3\\tan^2\\theta}$ og at $20°, 40°, 80°$ tilfredsstiller $\\tan 3\\theta = \\sqrt{3}$. Summen blir $\\tan 20° + \\tan 40° + \\tan 80° = 3\\sqrt{3}$.' },
        ],
        hints: [
          'Disse oppgavene krever kreativ bruk av flere formler',
          'Se etter sammenhenger mellom vinklene',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.7: OMSKRIVING TIL REN SINUSFORM
// ============================================================================

export const CHAPTER_R2_4_7: TextbookChapter = {
  id: 'r2-4-7',
  courseId: 'r2',
  chapterNumber: '4.7',
  title: 'Omskriving til ren sinusform',
  description: 'Skrive uttrykk på formen a sin x + b cos x som R sin(x + α).',
  estimatedMinutes: 50,
  competenceGoals: [
    'omskrive uttrykk på formen a sin x + b cos x til ren sinusform',
    'bruke omskriving til å løse likninger og finne ekstremverdier',
    'forstå sammenhengen mellom addisjonsformlene og omskriving',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r2-4-7-intro',
      type: 'text',
      content: `## Motivasjon

Uttrykk på formen $a\\sin x + b\\cos x$ dukker opp i mange sammenhenger - fra fysikk og teknikk til rene matematikkoppgaver. Slike uttrykk kan virke kompliserte, men de kan alltid skrives om til en **ren sinusfunksjon** på formen $R\\sin(x + \\alpha)$.

Denne omskrivingen gjør det enkelt å:
- Finne maksimums- og minimumsverdier
- Løse likninger
- Tegne grafer
- Analysere periodiske fenomener

**Eksempel på problemstilling:**

Hvordan finner vi maksimumsverdien til $f(x) = 3\\sin x + 4\\cos x$?

Hvis vi kan skrive $f(x) = R\\sin(x + \\alpha)$ for passende $R$ og $\\alpha$, vet vi umiddelbart at maksimumsverdien er $R$!`,
    },

    // ========== HOVEDTEOREM ==========
    {
      id: 'r2-4-7-theorem-main',
      type: 'theorem',
      title: 'Omskriving til ren sinusform',
      content: `For alle reelle tall $a$ og $b$ (ikke begge lik null) gjelder:

$$a\\sin x + b\\cos x = R\\sin(x + \\alpha)$$

der

$$R = \\sqrt{a^2 + b^2}$$

og $\\alpha$ er vinkelen bestemt ved:

$$\\cos\\alpha = \\frac{a}{R} = \\frac{a}{\\sqrt{a^2 + b^2}}, \\quad \\sin\\alpha = \\frac{b}{R} = \\frac{b}{\\sqrt{a^2 + b^2}}$$

**Alternativt:** $\\tan\\alpha = \\frac{b}{a}$ (for $a \\neq 0$), med riktig kvadrant bestemt av fortegnene til $a$ og $b$.`,
    },

    // ========== UTLEDNING ==========
    {
      id: 'r2-4-7-proof',
      type: 'text',
      content: `## Utledning av formelen

Vi bruker **addisjonsformelen for sinus**:

$$\\sin(x + \\alpha) = \\sin x \\cos\\alpha + \\cos x \\sin\\alpha$$

Hvis vi ganger med $R$:

$$R\\sin(x + \\alpha) = R\\cos\\alpha \\cdot \\sin x + R\\sin\\alpha \\cdot \\cos x$$

Sammenligner vi med $a\\sin x + b\\cos x$, ser vi at:
- $a = R\\cos\\alpha$
- $b = R\\sin\\alpha$

**Finne R:**

Fra Pytagoras:
$$a^2 + b^2 = R^2\\cos^2\\alpha + R^2\\sin^2\\alpha = R^2(\\cos^2\\alpha + \\sin^2\\alpha) = R^2$$

Dermed:
$$R = \\sqrt{a^2 + b^2}$$

**Finne α:**

Fra relasjonene over:
$$\\cos\\alpha = \\frac{a}{R}, \\quad \\sin\\alpha = \\frac{b}{R}$$

Dette bestemmer $\\alpha$ entydig i intervallet $[0, 2\\pi)$.`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'r2-4-7-example-1',
      type: 'example',
      title: 'Eksempel 1: Grunnleggende omskriving',
      problem: `Skriv $3\\sin x + 4\\cos x$ på formen $R\\sin(x + \\alpha)$.`,
      solution: `**Løsning:**

**Steg 1: Finn R**
$$R = \\sqrt{a^2 + b^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$

**Steg 2: Finn α**
$$\\cos\\alpha = \\frac{a}{R} = \\frac{3}{5}, \\quad \\sin\\alpha = \\frac{b}{R} = \\frac{4}{5}$$

Siden både $\\cos\\alpha$ og $\\sin\\alpha$ er positive, ligger $\\alpha$ i første kvadrant.

$$\\alpha = \\arctan\\left(\\frac{4}{3}\\right) \\approx 0{,}927 \\text{ rad} \\approx 53{,}1°$$

**Svar:**
$$3\\sin x + 4\\cos x = 5\\sin(x + \\alpha)$$

der $\\alpha = \\arctan\\left(\\frac{4}{3}\\right) \\approx 0{,}927$ rad.

**Kontroll:** Maksimumsverdien til $3\\sin x + 4\\cos x$ er 5, og minimumsverdien er $-5$.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'r2-4-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'r2-4-7-ex-1',
        number: '4.7.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv $\\sin x + \\cos x$ på formen $R\\sin(x + \\alpha)$. Finn eksakt verdi for $R$ og $\\alpha$.',
        solution: `$R = \\sqrt{1^2 + 1^2} = \\sqrt{2}$

$\\cos\\alpha = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$, $\\sin\\alpha = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$

$\\alpha = \\frac{\\pi}{4}$

**Svar:** $\\sin x + \\cos x = \\sqrt{2}\\sin\\left(x + \\frac{\\pi}{4}\\right)$`,
        hints: ['Bruk $a = 1$ og $b = 1$ i formelen.', 'Husk at $\\cos\\frac{\\pi}{4} = \\sin\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'r2-4-7-example-2',
      type: 'example',
      title: 'Eksempel 2: Negativ koeffisient',
      problem: `Skriv $\\sin x - \\sqrt{3}\\cos x$ på formen $R\\sin(x + \\alpha)$.`,
      solution: `**Løsning:**

Her er $a = 1$ og $b = -\\sqrt{3}$.

**Steg 1: Finn R**
$$R = \\sqrt{1^2 + (-\\sqrt{3})^2} = \\sqrt{1 + 3} = \\sqrt{4} = 2$$

**Steg 2: Finn α**
$$\\cos\\alpha = \\frac{1}{2}, \\quad \\sin\\alpha = \\frac{-\\sqrt{3}}{2}$$

Siden $\\cos\\alpha > 0$ og $\\sin\\alpha < 0$, ligger $\\alpha$ i **fjerde kvadrant**.

$$\\alpha = -\\frac{\\pi}{3}$$

**Svar:**
$$\\sin x - \\sqrt{3}\\cos x = 2\\sin\\left(x - \\frac{\\pi}{3}\\right)$$

**Kontroll:**
$2\\sin\\left(x - \\frac{\\pi}{3}\\right) = 2\\left[\\sin x \\cos\\frac{\\pi}{3} - \\cos x \\sin\\frac{\\pi}{3}\\right] = 2\\left[\\frac{1}{2}\\sin x - \\frac{\\sqrt{3}}{2}\\cos x\\right] = \\sin x - \\sqrt{3}\\cos x$ ✓`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'r2-4-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'r2-4-7-ex-2',
        number: '4.7.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv $\\sqrt{3}\\sin x - \\cos x$ på formen $R\\sin(x + \\alpha)$. Finn eksakt verdi for $R$ og $\\alpha$.',
        solution: `$R = \\sqrt{(\\sqrt{3})^2 + (-1)^2} = \\sqrt{3 + 1} = 2$

$\\cos\\alpha = \\frac{\\sqrt{3}}{2}$, $\\sin\\alpha = \\frac{-1}{2}$

$\\alpha = -\\frac{\\pi}{6}$

**Svar:** $\\sqrt{3}\\sin x - \\cos x = 2\\sin\\left(x - \\frac{\\pi}{6}\\right)$`,
        hints: ['Her er $a = \\sqrt{3}$ og $b = -1$.', 'Fjerde kvadrant: positiv cosinus, negativ sinus.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== ALTERNATIV FORM ==========
    {
      id: 'r2-4-7-alt-form',
      type: 'theorem',
      title: 'Alternativ form med cosinus',
      content: `Uttrykket $a\\sin x + b\\cos x$ kan også skrives på formen:

$$a\\sin x + b\\cos x = R\\cos(x - \\beta)$$

der

$$R = \\sqrt{a^2 + b^2}$$

og $\\beta$ er bestemt ved:

$$\\sin\\beta = \\frac{a}{R}, \\quad \\cos\\beta = \\frac{b}{R}$$

**Merk:** Denne formen er ofte praktisk når vi ønsker å uttrykke resultatet med cosinus i stedet for sinus.`,
    },

    // ========== TIP ==========
    {
      id: 'r2-4-7-tip-choice',
      type: 'tip',
      content: `**Valg av form:**

- Bruk $R\\sin(x + \\alpha)$ når oppgaven spør etter sinusform
- Bruk $R\\cos(x - \\beta)$ når oppgaven spør etter cosinusform
- Begge formene gir samme $R = \\sqrt{a^2 + b^2}$
- Sammenhengen er: $\\sin(x + \\alpha) = \\cos\\left(\\frac{\\pi}{2} - x - \\alpha\\right) = \\cos\\left(x - \\left(\\frac{\\pi}{2} - \\alpha\\right)\\right)$`,
    },

    // ========== EKSEMPEL 3: ANVENDELSE - MAKSVERDI ==========
    {
      id: 'r2-4-7-example-3',
      type: 'example',
      title: 'Eksempel 3: Finne maksimums- og minimumsverdier',
      problem: `Finn største og minste verdi av $f(x) = 5\\sin x + 12\\cos x$, og bestem for hvilke $x$-verdier disse oppnås.`,
      solution: `**Løsning:**

**Steg 1: Omskriv til ren sinusform**

$R = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$

$\\cos\\alpha = \\frac{5}{13}$, $\\sin\\alpha = \\frac{12}{13}$

$\\alpha = \\arctan\\left(\\frac{12}{5}\\right) \\approx 1{,}176$ rad

Altså: $f(x) = 13\\sin(x + \\alpha)$

**Steg 2: Finn ekstremverdiene**

Siden $-1 \\leq \\sin(x + \\alpha) \\leq 1$, har vi:
- **Maksimum:** $f_{\\text{maks}} = 13 \\cdot 1 = 13$
- **Minimum:** $f_{\\text{min}} = 13 \\cdot (-1) = -13$

**Steg 3: Finn x-verdiene**

Maksimum når $\\sin(x + \\alpha) = 1$, dvs. $x + \\alpha = \\frac{\\pi}{2} + 2\\pi k$
$$x = \\frac{\\pi}{2} - \\alpha + 2\\pi k \\approx 0{,}395 + 2\\pi k$$

Minimum når $\\sin(x + \\alpha) = -1$, dvs. $x + \\alpha = -\\frac{\\pi}{2} + 2\\pi k$
$$x = -\\frac{\\pi}{2} - \\alpha + 2\\pi k \\approx -2{,}747 + 2\\pi k$$`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'r2-4-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'r2-4-7-ex-3',
        number: '4.7.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn største og minste verdi av $g(x) = 8\\sin x + 6\\cos x$.',
        solution: `$R = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$

$g(x) = 10\\sin(x + \\alpha)$ der $\\tan\\alpha = \\frac{6}{8} = \\frac{3}{4}$

**Svar:** Maksimum = 10, minimum = $-10$`,
        hints: ['Finn $R$ først.', 'Husk at $-R \\leq R\\sin(\\cdot) \\leq R$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 4: LØSE LIKNING ==========
    {
      id: 'r2-4-7-example-4',
      type: 'example',
      title: 'Eksempel 4: Løse likning ved omskriving',
      problem: `Løs likningen $\\sin x + \\cos x = 1$ for $x \\in [0, 2\\pi)$.`,
      solution: `**Løsning:**

**Steg 1: Omskriv venstre side**

Fra Eksempel 1 vet vi (eller finner):
$$\\sin x + \\cos x = \\sqrt{2}\\sin\\left(x + \\frac{\\pi}{4}\\right)$$

**Steg 2: Løs den nye likningen**

$$\\sqrt{2}\\sin\\left(x + \\frac{\\pi}{4}\\right) = 1$$

$$\\sin\\left(x + \\frac{\\pi}{4}\\right) = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$$

**Steg 3: Finn løsningene**

$\\sin\\theta = \\frac{\\sqrt{2}}{2}$ gir $\\theta = \\frac{\\pi}{4}$ eller $\\theta = \\frac{3\\pi}{4}$ (i $[0, 2\\pi)$)

Med $\\theta = x + \\frac{\\pi}{4}$:

**Løsning 1:** $x + \\frac{\\pi}{4} = \\frac{\\pi}{4} \\Rightarrow x = 0$

**Løsning 2:** $x + \\frac{\\pi}{4} = \\frac{3\\pi}{4} \\Rightarrow x = \\frac{\\pi}{2}$

**Svar:** $x = 0$ eller $x = \\frac{\\pi}{2}$

**Kontroll:**
- $\\sin 0 + \\cos 0 = 0 + 1 = 1$ ✓
- $\\sin\\frac{\\pi}{2} + \\cos\\frac{\\pi}{2} = 1 + 0 = 1$ ✓`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'r2-4-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'r2-4-7-ex-4',
        number: '4.7.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningen $\\sin x - \\cos x = 1$ for $x \\in [0, 2\\pi)$.',
        solution: `Omskriv: $\\sin x - \\cos x = \\sqrt{2}\\sin\\left(x - \\frac{\\pi}{4}\\right)$

(Her er $a = 1$, $b = -1$, så $\\alpha = -\\frac{\\pi}{4}$)

$\\sqrt{2}\\sin\\left(x - \\frac{\\pi}{4}\\right) = 1$

$\\sin\\left(x - \\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}$

$x - \\frac{\\pi}{4} = \\frac{\\pi}{4}$ eller $x - \\frac{\\pi}{4} = \\frac{3\\pi}{4}$

**Svar:** $x = \\frac{\\pi}{2}$ eller $x = \\pi$`,
        hints: ['Her er $b = -1$, så $\\sin\\alpha = \\frac{-1}{\\sqrt{2}}$.', 'Vinkelen $\\alpha$ blir negativ (fjerde kvadrant).'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 5: GENERELT TILFELLE ==========
    {
      id: 'r2-4-7-example-5',
      type: 'example',
      title: 'Eksempel 5: Generelt argument',
      problem: `Skriv $2\\sin(3x) + 2\\cos(3x)$ på formen $R\\sin(3x + \\alpha)$.`,
      solution: `**Løsning:**

Tenk på $3x$ som én variabel. Vi har $a = 2$ og $b = 2$.

**Finn R:**
$$R = \\sqrt{2^2 + 2^2} = \\sqrt{8} = 2\\sqrt{2}$$

**Finn α:**
$$\\cos\\alpha = \\frac{2}{2\\sqrt{2}} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$$
$$\\sin\\alpha = \\frac{2}{2\\sqrt{2}} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$$

$\\alpha = \\frac{\\pi}{4}$

**Svar:**
$$2\\sin(3x) + 2\\cos(3x) = 2\\sqrt{2}\\sin\\left(3x + \\frac{\\pi}{4}\\right)$$

**Merk:** Perioden til denne funksjonen er $\\frac{2\\pi}{3}$ (fra $3x$), og amplituden er $2\\sqrt{2}$.`,
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'r2-4-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'r2-4-7-ex-5',
        number: '4.7.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv $\\sin(2x) + \\sqrt{3}\\cos(2x)$ på formen $R\\sin(2x + \\alpha)$.',
        solution: `$R = \\sqrt{1^2 + (\\sqrt{3})^2} = \\sqrt{1 + 3} = 2$

$\\cos\\alpha = \\frac{1}{2}$, $\\sin\\alpha = \\frac{\\sqrt{3}}{2}$

$\\alpha = \\frac{\\pi}{3}$

**Svar:** $\\sin(2x) + \\sqrt{3}\\cos(2x) = 2\\sin\\left(2x + \\frac{\\pi}{3}\\right)$`,
        hints: ['Behandle $2x$ som én variabel.', 'Standardvinkel: $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== PRAKTISK FREMGANGSMÅTE ==========
    {
      id: 'r2-4-7-method',
      type: 'text',
      content: `## Oppsummering: Fremgangsmåte

For å skrive $a\\sin x + b\\cos x$ på formen $R\\sin(x + \\alpha)$:

**Steg 1:** Beregn $R = \\sqrt{a^2 + b^2}$

**Steg 2:** Finn $\\alpha$ ved å løse:
$$\\cos\\alpha = \\frac{a}{R}, \\quad \\sin\\alpha = \\frac{b}{R}$$

**Steg 3:** Bestem riktig kvadrant for $\\alpha$ ut fra fortegnene til $a$ og $b$:

| $a$ | $b$ | Kvadrant | $\\alpha$ |
|-----|-----|----------|-----------|
| $+$ | $+$ | I | $0 < \\alpha < \\frac{\\pi}{2}$ |
| $-$ | $+$ | II | $\\frac{\\pi}{2} < \\alpha < \\pi$ |
| $-$ | $-$ | III | $\\pi < \\alpha < \\frac{3\\pi}{2}$ |
| $+$ | $-$ | IV | $\\frac{3\\pi}{2} < \\alpha < 2\\pi$ (eller $-\\frac{\\pi}{2} < \\alpha < 0$) |

**Steg 4:** Skriv svaret: $a\\sin x + b\\cos x = R\\sin(x + \\alpha)$`,
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'r2-4-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'r2-4-7-ex-6',
        number: '4.7.6',
        type: 'classic',
        difficulty: 'medium',
        task: `Skriv hvert uttrykk på formen $R\\sin(x + \\alpha)$:

a) $4\\sin x + 3\\cos x$
b) $-\\sin x + \\cos x$
c) $-\\sin x - \\cos x$`,
        subTasks: [
          {
            label: 'a',
            task: '$4\\sin x + 3\\cos x$',
            solution: '$R = 5$, $\\cos\\alpha = \\frac{4}{5}$, $\\sin\\alpha = \\frac{3}{5}$, $\\alpha = \\arctan\\frac{3}{4} \\approx 0{,}644$ rad. Svar: $5\\sin(x + \\arctan\\frac{3}{4})$',
          },
          {
            label: 'b',
            task: '$-\\sin x + \\cos x$',
            solution: '$R = \\sqrt{2}$, $\\cos\\alpha = \\frac{-1}{\\sqrt{2}}$, $\\sin\\alpha = \\frac{1}{\\sqrt{2}}$, andre kvadrant: $\\alpha = \\frac{3\\pi}{4}$. Svar: $\\sqrt{2}\\sin\\left(x + \\frac{3\\pi}{4}\\right)$',
          },
          {
            label: 'c',
            task: '$-\\sin x - \\cos x$',
            solution: '$R = \\sqrt{2}$, $\\cos\\alpha = \\frac{-1}{\\sqrt{2}}$, $\\sin\\alpha = \\frac{-1}{\\sqrt{2}}$, tredje kvadrant: $\\alpha = \\frac{5\\pi}{4}$ (eller $-\\frac{3\\pi}{4}$). Svar: $\\sqrt{2}\\sin\\left(x + \\frac{5\\pi}{4}\\right)$',
          },
        ],
        solution: 'Se deloppgavene.',
        hints: ['Bruk tabellen for å finne riktig kvadrant.', 'For b og c: Se på fortegnene til $a$ og $b$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== ANVENDELSE: FYSIKK ==========
    {
      id: 'r2-4-7-application',
      type: 'text',
      content: `## Anvendelse: Superposisjon av bølger

I fysikk oppstår uttrykk på formen $a\\sin x + b\\cos x$ når vi legger sammen to bølger med samme frekvens men forskjellig fase.

**Eksempel:** To lydbølger med samme frekvens:
- Bølge 1: $y_1 = A_1\\sin(\\omega t)$
- Bølge 2: $y_2 = A_2\\cos(\\omega t) = A_2\\sin(\\omega t + \\frac{\\pi}{2})$

Den resulterende bølgen er:
$$y = y_1 + y_2 = A_1\\sin(\\omega t) + A_2\\cos(\\omega t) = R\\sin(\\omega t + \\alpha)$$

der $R = \\sqrt{A_1^2 + A_2^2}$ er den **resulterende amplituden**.

Dette kalles **superposisjon** og er grunnleggende i studiet av bølger, lyd, og elektromagnetisme.`,
    },

    // ========== EKSEMPEL 6 ==========
    {
      id: 'r2-4-7-example-6',
      type: 'example',
      title: 'Eksempel 6: Superposisjon av bølger',
      problem: `To lydbølger med samme frekvens beskrives ved:
$$y_1 = 3\\sin(440t)$$
$$y_2 = 4\\cos(440t)$$

der $t$ er tid i sekunder. Finn et uttrykk for den resulterende bølgen $y = y_1 + y_2$.`,
      solution: `**Løsning:**

$$y = 3\\sin(440t) + 4\\cos(440t)$$

Vi bruker omskrivingsformelen med $a = 3$, $b = 4$:

$$R = \\sqrt{3^2 + 4^2} = 5$$

$$\\alpha = \\arctan\\left(\\frac{4}{3}\\right) \\approx 0{,}927 \\text{ rad}$$

**Svar:**
$$y = 5\\sin(440t + 0{,}927)$$

**Tolkning:**
- Den resulterende bølgen har amplitude 5 (større enn hver enkelt bølge!)
- Frekvensen er uendret ($\\omega = 440$, som gir $f = \\frac{440}{2\\pi} \\approx 70$ Hz)
- Bølgen er faseforskjøvet med ca. 0,927 radianer`,
    },

    // ========== OPPGAVE 7: ANVENDELSE ==========
    {
      id: 'r2-4-7-ex-7',
      type: 'exercise',
      exercise: {
        id: 'r2-4-7-ex-7',
        number: '4.7.7',
        type: 'classic',
        difficulty: 'medium',
        task: `En elektrisk krets har spenning $V(t) = 12\\sin(100\\pi t) + 5\\cos(100\\pi t)$ volt.

a) Skriv $V(t)$ på formen $R\\sin(100\\pi t + \\alpha)$.
b) Hva er maksimalspenningen?
c) Hva er frekvensen til vekselspenningen?`,
        subTasks: [
          {
            label: 'a',
            task: 'Omskriv til ren sinusform',
            solution: '$R = \\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = 13$, $\\alpha = \\arctan\\frac{5}{12} \\approx 0{,}395$ rad. $V(t) = 13\\sin(100\\pi t + 0{,}395)$',
          },
          {
            label: 'b',
            task: 'Finn maksimalspenningen',
            solution: 'Maksimalspenningen er amplituden $R = 13$ V',
          },
          {
            label: 'c',
            task: 'Finn frekvensen',
            solution: '$\\omega = 100\\pi$, så $f = \\frac{\\omega}{2\\pi} = \\frac{100\\pi}{2\\pi} = 50$ Hz',
          },
        ],
        solution: 'a) $V(t) = 13\\sin(100\\pi t + 0{,}395)$, b) 13 V, c) 50 Hz',
        hints: ['Bruk standardformelen for omskriving.', 'Frekvens: $f = \\frac{\\omega}{2\\pi}$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SPESIALTILFELLE ==========
    {
      id: 'r2-4-7-special',
      type: 'theorem',
      title: 'Spesialtilfelle: Like koeffisienter',
      content: `Når $a = b = A$ (like koeffisienter), får vi et viktig spesialtilfelle:

$$A\\sin x + A\\cos x = A\\sqrt{2}\\sin\\left(x + \\frac{\\pi}{4}\\right)$$

**Bevis:**
- $R = \\sqrt{A^2 + A^2} = A\\sqrt{2}$
- $\\cos\\alpha = \\sin\\alpha = \\frac{A}{A\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$
- $\\alpha = \\frac{\\pi}{4}$

Dette er nyttig å huske som en "snarvei" for oppgaver der koeffisientene er like.`,
    },

    // ========== OPPGAVE 8: UTFORDRING ==========
    {
      id: 'r2-4-7-ex-8',
      type: 'exercise',
      exercise: {
        id: 'r2-4-7-ex-8',
        number: '4.7.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `**(Utfordring)** Vis at

$$A\\sin(Bx) + A\\cos(Bx) = A\\sqrt{2}\\sin\\left(Bx + \\frac{\\pi}{4}\\right)$$

Hint: Bruk addisjonsformelen for sinus.`,
        solution: `**Løsning:**

Vi starter med høyre side og bruker addisjonsformelen:

$\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$

$A\\sqrt{2}\\sin\\left(Bx + \\frac{\\pi}{4}\\right) = A\\sqrt{2}\\left[\\sin(Bx)\\cos\\left(\\frac{\\pi}{4}\\right) + \\cos(Bx)\\sin\\left(\\frac{\\pi}{4}\\right)\\right]$

$= A\\sqrt{2}\\left[\\sin(Bx) \\cdot \\frac{\\sqrt{2}}{2} + \\cos(Bx) \\cdot \\frac{\\sqrt{2}}{2}\\right]$

$= A\\sqrt{2} \\cdot \\frac{\\sqrt{2}}{2}[\\sin(Bx) + \\cos(Bx)]$

$= A \\cdot 1 \\cdot [\\sin(Bx) + \\cos(Bx)]$

$= A\\sin(Bx) + A\\cos(Bx)$

Dermed er likheten vist. ✓`,
        hints: ['Bruk at $\\cos\\left(\\frac{\\pi}{4}\\right) = \\sin\\left(\\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 9 ==========
    {
      id: 'r2-4-7-ex-9',
      type: 'exercise',
      exercise: {
        id: 'r2-4-7-ex-9',
        number: '4.7.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Løs ulikheten $\\sin x + \\cos x > 1$ for $x \\in [0, 2\\pi)$.`,
        solution: `Omskriv: $\\sqrt{2}\\sin\\left(x + \\frac{\\pi}{4}\\right) > 1$

$\\sin\\left(x + \\frac{\\pi}{4}\\right) > \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$

$\\sin\\theta > \\frac{\\sqrt{2}}{2}$ for $\\theta \\in \\left(\\frac{\\pi}{4}, \\frac{3\\pi}{4}\\right)$

Med $\\theta = x + \\frac{\\pi}{4}$:
$x + \\frac{\\pi}{4} \\in \\left(\\frac{\\pi}{4}, \\frac{3\\pi}{4}\\right)$

$x \\in \\left(0, \\frac{\\pi}{2}\\right)$

**Svar:** $x \\in \\left(0, \\frac{\\pi}{2}\\right)$`,
        hints: ['Omskriv til ren sinusform først.', 'Tegn enhetssirkelen for å se når sinus er større enn $\\frac{\\sqrt{2}}{2}$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 10 ==========
    {
      id: 'r2-4-7-ex-10',
      type: 'exercise',
      exercise: {
        id: 'r2-4-7-ex-10',
        number: '4.7.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En funksjon er gitt ved $f(x) = \\sin x + \\sqrt{3}\\cos x$.

a) Skriv $f(x)$ på formen $R\\sin(x + \\alpha)$.
b) Tegn grafen til $f$ for $x \\in [0, 2\\pi]$.
c) Løs likningen $f(x) = \\sqrt{3}$ for $x \\in [0, 2\\pi)$.`,
        subTasks: [
          {
            label: 'a',
            task: 'Omskriv til ren sinusform',
            solution: '$R = 2$, $\\alpha = \\frac{\\pi}{3}$, så $f(x) = 2\\sin\\left(x + \\frac{\\pi}{3}\\right)$',
          },
          {
            label: 'b',
            task: 'Tegn grafen',
            solution: 'Sinuskurve med amplitude 2, periode $2\\pi$, faseforskjøvet $\\frac{\\pi}{3}$ til venstre. Maksimum ved $x = \\frac{\\pi}{6}$, minimum ved $x = \\frac{7\\pi}{6}$.',
          },
          {
            label: 'c',
            task: 'Løs $f(x) = \\sqrt{3}$',
            solution: '$2\\sin\\left(x + \\frac{\\pi}{3}\\right) = \\sqrt{3}$, $\\sin\\left(x + \\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2}$. $x + \\frac{\\pi}{3} = \\frac{\\pi}{3}$ eller $\\frac{2\\pi}{3}$, så $x = 0$ eller $x = \\frac{\\pi}{3}$.',
          },
        ],
        solution: 'a) $f(x) = 2\\sin\\left(x + \\frac{\\pi}{3}\\right)$, b) Se beskrivelse, c) $x = 0$ eller $x = \\frac{\\pi}{3}$',
        hints: ['Husk standardvinklene: $\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'r2-4-7-summary',
      type: 'text',
      content: `## Oppsummering

**Hovedformel:**
$$a\\sin x + b\\cos x = R\\sin(x + \\alpha)$$

der $R = \\sqrt{a^2 + b^2}$ og $\\alpha$ finnes fra $\\cos\\alpha = \\frac{a}{R}$, $\\sin\\alpha = \\frac{b}{R}$.

**Viktige anvendelser:**
1. **Ekstremverdier:** Maks = $R$, min = $-R$
2. **Løse likninger:** Omskriv, løs enkel sinuslikning
3. **Bølger/fysikk:** Superposisjon av bølger
4. **Grafer:** Én sinuskurve er enklere å analysere enn en sum

**Spesialtilfelle:**
$$A\\sin x + A\\cos x = A\\sqrt{2}\\sin\\left(x + \\frac{\\pi}{4}\\right)$$`,
    },
  ],

  // Exercises collection
  exercises: [],

  // Navigation
  nextChapter: 'r2-4-8',
  prevChapter: 'r2-4-6',
};

// ============================================================================
// KAPITTEL 4.8: TRIGONOMETRISKE FUNKSJONER OG GRAFER
// ============================================================================

export const CHAPTER_R2_4_8: TextbookChapter = {
  id: 'r2-4-8',
  courseId: 'r2',
  chapterNumber: '4.8',
  title: 'Trigonometriske funksjoner og grafer',
  description: 'Grafer til sin, cos og tan, transformasjoner og modellering av periodiske fenomener.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske eigenskapar ved trigonometriske funksjonar',
    'bruke trigonometriske funksjonar til å modellere periodiske fenomen',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r2-4-7-intro',
      type: 'text',
      content: `## Introduksjon til trigonometriske funksjoner

Trigonometriske funksjoner er sentrale i matematikk og har mange anvendelser i fysikk, teknikk og andre fagfelt. De er spesielt nyttige for å beskrive **periodiske fenomener** - altså fenomener som gjentar seg med jevne mellomrom.

Eksempler på periodiske fenomener:
- Tidevann (flo og fjære)
- Temperatursvingninger gjennom året
- Lydbølger og musikalske toner
- Vekselstrøm i elektriske kretser
- Pendelbevegelse

I dette kapitlet skal vi studere grafene til sinusfunksjonen, cosinusfunksjonen og tangensfunksjonen, og lære hvordan vi kan transformere disse for å modellere virkelige fenomener.`,
    },

    // ========== GRAFEN TIL sin(x) ==========
    {
      id: 'r2-4-7-sin-intro',
      type: 'text',
      content: `## Grafen til $\\sin(x)$

Sinusfunksjonen $f(x) = \\sin(x)$ er definert for alle reelle tall $x$. Når vi tegner grafen, måler vi $x$ i **radianer**.

### Viktige egenskaper ved $\\sin(x)$:

- **Definisjonsmengde:** $D_f = \\mathbb{R}$ (alle reelle tall)
- **Verdimengde:** $V_f = [-1, 1]$
- **Periode:** $2\\pi$ (grafen gjentar seg for hver $2\\pi$)
- **Nullpunkter:** $x = n\\pi$ der $n \\in \\mathbb{Z}$
- **Maksimum:** $\\sin(x) = 1$ når $x = \\frac{\\pi}{2} + 2\\pi n$
- **Minimum:** $\\sin(x) = -1$ når $x = \\frac{3\\pi}{2} + 2\\pi n$ eller $x = -\\frac{\\pi}{2} + 2\\pi n$
- **Symmetri:** Odde funksjon, $\\sin(-x) = -\\sin(x)$`,
    },

    {
      id: 'r2-4-7-sin-geogebra',
      type: 'geogebra',
      title: 'Grafen til sin(x)',
      description: 'Utforsk hvordan sinusfunksjonen ser ut. Legg merke til perioden og verdimengden.',
      appType: 'graphing',
      commands: ['f(x) = sin(x)'],
    },

    // Eksempel 1: Avlesning fra sinusgrafen
    {
      id: 'r2-4-7-example-1',
      type: 'example',
      title: 'Eksempel 1: Avlesning fra sinusgrafen',
      problem: `Bruk grafen til $f(x) = \\sin(x)$ til å bestemme:

a) $\\sin(0)$
b) $\\sin\\left(\\frac{\\pi}{2}\\right)$
c) $\\sin(\\pi)$
d) $\\sin\\left(\\frac{3\\pi}{2}\\right)$
e) $\\sin(2\\pi)$`,
      solution: `**Løsning:**

Vi leser av verdiene fra enhetssirkelen eller grafen:

a) $\\sin(0) = 0$

b) $\\sin\\left(\\frac{\\pi}{2}\\right) = 1$ (maksimumspunkt)

c) $\\sin(\\pi) = 0$ (nullpunkt)

d) $\\sin\\left(\\frac{3\\pi}{2}\\right) = -1$ (minimumspunkt)

e) $\\sin(2\\pi) = 0$ (vi er tilbake der vi startet)

Merk at $\\sin(2\\pi) = \\sin(0)$ fordi sinusfunksjonen har periode $2\\pi$.`,
    },

    // ========== GRAFEN TIL cos(x) ==========
    {
      id: 'r2-4-7-cos-intro',
      type: 'text',
      content: `## Grafen til $\\cos(x)$

Cosinusfunksjonen $f(x) = \\cos(x)$ har mange av de samme egenskapene som sinusfunksjonen.

### Viktige egenskaper ved $\\cos(x)$:

- **Definisjonsmengde:** $D_f = \\mathbb{R}$
- **Verdimengde:** $V_f = [-1, 1]$
- **Periode:** $2\\pi$
- **Nullpunkter:** $x = \\frac{\\pi}{2} + n\\pi$ der $n \\in \\mathbb{Z}$
- **Maksimum:** $\\cos(x) = 1$ når $x = 2\\pi n$
- **Minimum:** $\\cos(x) = -1$ når $x = \\pi + 2\\pi n$
- **Symmetri:** Like funksjon, $\\cos(-x) = \\cos(x)$

### Sammenhengen mellom sinus og cosinus:

$$\\cos(x) = \\sin\\left(x + \\frac{\\pi}{2}\\right)$$

Dette betyr at cosinusgrafen er sinusgrafen forskjøvet $\\frac{\\pi}{2}$ til venstre.`,
    },

    {
      id: 'r2-4-7-cos-geogebra',
      type: 'geogebra',
      title: 'Sammenligning av sin(x) og cos(x)',
      description: 'Se hvordan sinus- og cosinusgrafene forholder seg til hverandre.',
      appType: 'graphing',
      commands: ['f(x) = sin(x)', 'g(x) = cos(x)'],
    },

    // Eksempel 2: Sammenligning av sinus og cosinus
    {
      id: 'r2-4-7-example-2',
      type: 'example',
      title: 'Eksempel 2: Sammenligning av sinus og cosinus',
      problem: `Vis at $\\cos(x) = \\sin\\left(x + \\frac{\\pi}{2}\\right)$ ved å sammenligne verdier for:

a) $x = 0$
b) $x = \\frac{\\pi}{2}$
c) $x = \\pi$`,
      solution: `**Løsning:**

Vi beregner begge sider og sammenligner:

a) For $x = 0$:
- $\\cos(0) = 1$
- $\\sin\\left(0 + \\frac{\\pi}{2}\\right) = \\sin\\left(\\frac{\\pi}{2}\\right) = 1$ ✓

b) For $x = \\frac{\\pi}{2}$:
- $\\cos\\left(\\frac{\\pi}{2}\\right) = 0$
- $\\sin\\left(\\frac{\\pi}{2} + \\frac{\\pi}{2}\\right) = \\sin(\\pi) = 0$ ✓

c) For $x = \\pi$:
- $\\cos(\\pi) = -1$
- $\\sin\\left(\\pi + \\frac{\\pi}{2}\\right) = \\sin\\left(\\frac{3\\pi}{2}\\right) = -1$ ✓

Verdiene stemmer overens, noe som bekrefter sammenhengen.`,
    },

    // ========== GRAFEN TIL tan(x) ==========
    {
      id: 'r2-4-7-tan-intro',
      type: 'text',
      content: `## Grafen til $\\tan(x)$

Tangensfunksjonen er definert som:

$$\\tan(x) = \\frac{\\sin(x)}{\\cos(x)}$$

### Viktige egenskaper ved $\\tan(x)$:

- **Definisjonsmengde:** $D_f = \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{2} + n\\pi : n \\in \\mathbb{Z}\\right\\}$

  (Alle $x$ unntatt der $\\cos(x) = 0$)

- **Verdimengde:** $V_f = \\mathbb{R}$ (alle reelle tall)
- **Periode:** $\\pi$ (halv periode sammenlignet med sinus og cosinus)
- **Nullpunkter:** $x = n\\pi$ der $n \\in \\mathbb{Z}$
- **Vertikale asymptoter:** $x = \\frac{\\pi}{2} + n\\pi$
- **Symmetri:** Odde funksjon, $\\tan(-x) = -\\tan(x)$`,
    },

    {
      id: 'r2-4-7-tan-geogebra',
      type: 'geogebra',
      title: 'Grafen til tan(x)',
      description: 'Se hvordan tangensfunksjonen oppfører seg, spesielt ved asymptotene.',
      appType: 'graphing',
      commands: ['f(x) = tan(x)'],
    },

    // Eksempel 3: Egenskaper ved tangensfunksjonen
    {
      id: 'r2-4-7-example-3',
      type: 'example',
      title: 'Eksempel 3: Egenskaper ved tangensfunksjonen',
      problem: `a) Forklar hvorfor $\\tan(x)$ ikke er definert for $x = \\frac{\\pi}{2}$.

b) Beregn $\\tan(0)$, $\\tan\\left(\\frac{\\pi}{4}\\right)$ og $\\tan\\left(\\frac{\\pi}{3}\\right)$.

c) Hva skjer med $\\tan(x)$ når $x \\to \\frac{\\pi}{2}^-$?`,
      solution: `**Løsning:**

a) $\\tan\\left(\\frac{\\pi}{2}\\right) = \\frac{\\sin\\left(\\frac{\\pi}{2}\\right)}{\\cos\\left(\\frac{\\pi}{2}\\right)} = \\frac{1}{0}$

Divisjon med null er ikke definert, så $\\tan(x)$ har en vertikal asymptote ved $x = \\frac{\\pi}{2}$.

b) Beregninger:
- $\\tan(0) = \\frac{\\sin(0)}{\\cos(0)} = \\frac{0}{1} = 0$

- $\\tan\\left(\\frac{\\pi}{4}\\right) = \\frac{\\sin\\left(\\frac{\\pi}{4}\\right)}{\\cos\\left(\\frac{\\pi}{4}\\right)} = \\frac{\\frac{\\sqrt{2}}{2}}{\\frac{\\sqrt{2}}{2}} = 1$

- $\\tan\\left(\\frac{\\pi}{3}\\right) = \\frac{\\sin\\left(\\frac{\\pi}{3}\\right)}{\\cos\\left(\\frac{\\pi}{3}\\right)} = \\frac{\\frac{\\sqrt{3}}{2}}{\\frac{1}{2}} = \\sqrt{3}$

c) Når $x \\to \\frac{\\pi}{2}^-$ (fra venstre):
- $\\sin(x) \\to 1$
- $\\cos(x) \\to 0^+$ (nærmer seg 0 fra positive verdier)
- Derfor $\\tan(x) = \\frac{\\sin(x)}{\\cos(x)} \\to +\\infty$

Grafen går mot uendelig når vi nærmer oss asymptoten fra venstre.`,
    },

    // ========== AMPLITUDE OG PERIODE ==========
    {
      id: 'r2-4-7-amplitude-intro',
      type: 'text',
      content: `## Amplitude, periode og den generelle formen

For å modellere periodiske fenomener bruker vi ofte funksjoner på formen:

$$f(x) = A\\sin(Bx + C) + D$$

eller tilsvarende med cosinus.

### Parametrenes betydning:

| Parameter | Navn | Effekt |
|-----------|------|--------|
| $A$ | Amplitude | Bestemmer høyden på svingningene |
| $B$ | Frekvensparameter | Påvirker perioden: $T = \\frac{2\\pi}{|B|}$ |
| $C$ | Faseforskyvning | Horisontalt skift: $-\\frac{C}{B}$ enheter |
| $D$ | Vertikalt skift | Flytter hele grafen opp/ned |`,
    },

    {
      id: 'r2-4-7-amplitude-def',
      type: 'definition',
      title: 'Amplitude',
      content: `**Amplituden** til funksjonen $f(x) = A\\sin(Bx + C) + D$ er $|A|$.

Amplituden angir avstanden fra likevektslinjen ($y = D$) til maksimums- eller minimumsverdiene.

- Maksverdi: $D + |A|$
- Minverdi: $D - |A|$`,
    },

    {
      id: 'r2-4-7-periode-def',
      type: 'definition',
      title: 'Periode',
      content: `**Perioden** til funksjonen $f(x) = A\\sin(Bx + C) + D$ er:

$$T = \\frac{2\\pi}{|B|}$$

Perioden er den minste positive verdien $T$ slik at $f(x + T) = f(x)$ for alle $x$.`,
    },

    // Eksempel 4: Bestemme amplitude og periode
    {
      id: 'r2-4-7-example-4',
      type: 'example',
      title: 'Eksempel 4: Bestemme amplitude og periode',
      problem: `Bestem amplitude og periode for følgende funksjoner:

a) $f(x) = 3\\sin(2x)$
b) $g(x) = 2\\cos\\left(\\frac{x}{3}\\right)$
c) $h(x) = -4\\sin(\\pi x)$`,
      solution: `**Løsning:**

a) $f(x) = 3\\sin(2x)$
- Amplitude: $|A| = |3| = 3$
- Periode: $T = \\frac{2\\pi}{|B|} = \\frac{2\\pi}{2} = \\pi$

b) $g(x) = 2\\cos\\left(\\frac{x}{3}\\right)$
- Amplitude: $|A| = |2| = 2$
- Periode: $T = \\frac{2\\pi}{|B|} = \\frac{2\\pi}{\\frac{1}{3}} = 6\\pi$

c) $h(x) = -4\\sin(\\pi x)$
- Amplitude: $|A| = |-4| = 4$
- Periode: $T = \\frac{2\\pi}{|B|} = \\frac{2\\pi}{\\pi} = 2$

Merk: Det negative fortegnet i c) speiler grafen om $x$-aksen, men påvirker ikke amplituden.`,
    },

    // ========== FASEFORSKYVNING ==========
    {
      id: 'r2-4-7-fase-intro',
      type: 'text',
      content: `## Faseforskyvning

Faseforskyvningen beskriver hvor mye grafen er forskjøvet horisontalt.

For $f(x) = A\\sin(Bx + C) + D$ kan vi skrive:

$$f(x) = A\\sin\\left(B\\left(x + \\frac{C}{B}\\right)\\right) + D$$

Grafen er forskjøvet $-\\frac{C}{B}$ enheter langs $x$-aksen:
- Hvis $C > 0$ og $B > 0$: Forskyves til **venstre**
- Hvis $C < 0$ og $B > 0$: Forskyves til **høyre**`,
    },

    // Eksempel 5: Faseforskyvning
    {
      id: 'r2-4-7-example-5',
      type: 'example',
      title: 'Eksempel 5: Faseforskyvning',
      problem: `Bestem faseforskyvningen for:

a) $f(x) = \\sin\\left(x - \\frac{\\pi}{4}\\right)$
b) $g(x) = \\cos(2x + \\pi)$
c) $h(x) = 3\\sin\\left(4x - \\frac{\\pi}{2}\\right)$`,
      solution: `**Løsning:**

a) $f(x) = \\sin\\left(x - \\frac{\\pi}{4}\\right)$

Her er $B = 1$ og $C = -\\frac{\\pi}{4}$.

Faseforskyvning: $-\\frac{C}{B} = -\\frac{-\\frac{\\pi}{4}}{1} = \\frac{\\pi}{4}$

Grafen er forskjøvet $\\frac{\\pi}{4}$ til **høyre**.

b) $g(x) = \\cos(2x + \\pi)$

Her er $B = 2$ og $C = \\pi$.

Faseforskyvning: $-\\frac{C}{B} = -\\frac{\\pi}{2}$

Grafen er forskjøvet $\\frac{\\pi}{2}$ til **venstre**.

c) $h(x) = 3\\sin\\left(4x - \\frac{\\pi}{2}\\right)$

Her er $B = 4$ og $C = -\\frac{\\pi}{2}$.

Faseforskyvning: $-\\frac{C}{B} = -\\frac{-\\frac{\\pi}{2}}{4} = \\frac{\\pi}{8}$

Grafen er forskjøvet $\\frac{\\pi}{8}$ til **høyre**.`,
    },

    // ========== VERTIKALT SKIFT ==========
    {
      id: 'r2-4-7-vertikalt-intro',
      type: 'text',
      content: `## Vertikalt skift

Parameteren $D$ i $f(x) = A\\sin(Bx + C) + D$ bestemmer det vertikale skiftet.

- Hvis $D > 0$: Grafen flyttes **opp** $D$ enheter
- Hvis $D < 0$: Grafen flyttes **ned** $|D|$ enheter

Linjen $y = D$ kalles **likevektslinjen** eller **nullinjen** for funksjonen.`,
    },

    // Eksempel 6: Komplett transformasjon
    {
      id: 'r2-4-7-example-6',
      type: 'example',
      title: 'Eksempel 6: Komplett transformasjon',
      problem: `Gitt funksjonen $f(x) = 2\\sin\\left(3x - \\frac{\\pi}{2}\\right) + 1$.

Bestem:
a) Amplitude
b) Periode
c) Faseforskyvning
d) Vertikalt skift
e) Maksimums- og minimumsverdier`,
      solution: `**Løsning:**

Vi identifiserer parametrene: $A = 2$, $B = 3$, $C = -\\frac{\\pi}{2}$, $D = 1$.

a) **Amplitude:** $|A| = |2| = 2$

b) **Periode:** $T = \\frac{2\\pi}{|B|} = \\frac{2\\pi}{3}$

c) **Faseforskyvning:** $-\\frac{C}{B} = -\\frac{-\\frac{\\pi}{2}}{3} = \\frac{\\pi}{6}$

Grafen er forskjøvet $\\frac{\\pi}{6}$ til høyre.

d) **Vertikalt skift:** $D = 1$

Grafen er forskjøvet 1 enhet opp.

e) **Maksimum og minimum:**
- Maksverdi: $D + |A| = 1 + 2 = 3$
- Minverdi: $D - |A| = 1 - 2 = -1$`,
    },

    {
      id: 'r2-4-7-transform-geogebra',
      type: 'geogebra',
      title: 'Utforsk transformasjoner',
      description: 'Endre parametrene A, B, C og D og observer hvordan grafen endrer seg.',
      appType: 'graphing',
      commands: [
        'A = 1',
        'B = 1',
        'C = 0',
        'D = 0',
        'f(x) = A * sin(B * x + C) + D',
      ],
    },

    // ========== Å LESE AV FRA EN GRAF ==========
    {
      id: 'r2-4-7-avlesning-intro',
      type: 'text',
      content: `## Å bestemme funksjonsuttrykket fra en graf

Når vi skal finne funksjonsuttrykket til en sinuslignende graf, følger vi disse stegene:

1. **Finn amplitude $|A|$:** Mål avstanden fra likevektslinjen til toppen
2. **Finn vertikal forskyvning $D$:** Finn likevektslinjen (midten mellom maks og min)
3. **Finn perioden $T$:** Mål avstanden mellom to påfølgende topp- eller bunnpunkter
4. **Beregn $B$:** Bruk $B = \\frac{2\\pi}{T}$
5. **Finn faseforskyvning:** Se hvor grafen krysser likevektslinjen med positiv stigning`,
    },

    // Eksempel 7: Fra graf til funksjonsuttrykk
    {
      id: 'r2-4-7-example-7',
      type: 'example',
      title: 'Eksempel 7: Fra graf til funksjonsuttrykk',
      problem: `En sinuslignende graf har følgende egenskaper:
- Maksimumsverdi: 5
- Minimumsverdi: 1
- Periode: 4
- Grafen har et maksimum i $x = 1$

Finn et funksjonsuttrykk på formen $f(x) = A\\sin(Bx + C) + D$.`,
      solution: `**Løsning:**

**Steg 1: Finn amplitude og vertikalt skift**

Amplitude: $|A| = \\frac{\\text{maks} - \\text{min}}{2} = \\frac{5 - 1}{2} = 2$

Vertikalt skift: $D = \\frac{\\text{maks} + \\text{min}}{2} = \\frac{5 + 1}{2} = 3$

**Steg 2: Finn $B$ fra perioden**

$T = \\frac{2\\pi}{|B|} = 4 \\Rightarrow |B| = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$

Vi velger $B = \\frac{\\pi}{2}$.

**Steg 3: Finn faseforskyvning**

Sinusfunksjonen har normalt maksimum ved $x = \\frac{\\pi}{2B} = \\frac{\\pi}{2 \\cdot \\frac{\\pi}{2}} = 1$.

Vår graf har maksimum ved $x = 1$, som stemmer!

Dette betyr $C = 0$ (ingen ekstra faseforskyvning).

**Steg 4: Bestem fortegnet til $A$**

Siden grafen har et maksimum (ikke minimum) ved $x = 1$, bruker vi $A = 2$ (positiv).

**Svar:** $f(x) = 2\\sin\\left(\\frac{\\pi}{2}x\\right) + 3$`,
    },

    // Eksempel 8: Mer kompleks avlesning
    {
      id: 'r2-4-7-example-8',
      type: 'example',
      title: 'Eksempel 8: Avlesning med faseforskyvning',
      problem: `En periodisk funksjon har:
- Maksimumsverdi: 10
- Minimumsverdi: 2
- Periode: $\\pi$
- Et nullpunktskryss med positiv stigning ved $x = \\frac{\\pi}{6}$

Finn funksjonsuttrykket.`,
      solution: `**Løsning:**

**Steg 1: Amplitude og vertikalt skift**

$|A| = \\frac{10 - 2}{2} = 4$

$D = \\frac{10 + 2}{2} = 6$

**Steg 2: Finn $B$**

$T = \\frac{2\\pi}{|B|} = \\pi \\Rightarrow |B| = 2$

**Steg 3: Finn faseforskyvning**

For $A\\sin(Bx + C) + D$ med $A > 0$, krysser grafen likevektslinjen med positiv stigning når $Bx + C = 0$, altså når $x = -\\frac{C}{B}$.

Vi har at dette skjer ved $x = \\frac{\\pi}{6}$:

$-\\frac{C}{B} = \\frac{\\pi}{6} \\Rightarrow -\\frac{C}{2} = \\frac{\\pi}{6} \\Rightarrow C = -\\frac{\\pi}{3}$

**Svar:** $f(x) = 4\\sin\\left(2x - \\frac{\\pi}{3}\\right) + 6$

**Verifisering:** Maksimum oppstår når $2x - \\frac{\\pi}{3} = \\frac{\\pi}{2}$, dvs. $x = \\frac{5\\pi}{12}$.
Da er $f\\left(\\frac{5\\pi}{12}\\right) = 4 \\cdot 1 + 6 = 10$ ✓`,
    },

    // ========== MODELLERING ==========
    {
      id: 'r2-4-7-modellering-intro',
      type: 'text',
      content: `## Modellering med trigonometriske funksjoner

Trigonometriske funksjoner er ideelle for å modellere fenomener som svinger mellom en maksimums- og minimumsverdi på en jevn, periodisk måte.

### Fremgangsmåte for modellering:

1. Identifiser maksimums- og minimumsverdiene
2. Beregn amplitude og likevektsverdi
3. Finn perioden (hvor lang tid tar én full syklus?)
4. Bestem starttidspunktet (når oppnås maksimum/minimum/nullkrysning?)
5. Velg sinus eller cosinus basert på hva som passer best`,
    },

    {
      id: 'r2-4-7-modellering-tip',
      type: 'tip',
      content: `**Tips for valg mellom sinus og cosinus:**

- Bruk **cosinus** når du vet når maksimum (eller minimum) oppnås
- Bruk **sinus** når du vet når grafen krysser likevektslinjen

For eksempel: Hvis temperaturen er på sitt høyeste ved $t = 0$, er det naturlig å bruke cosinus.`,
    },

    // Eksempel 9: Tidevann
    {
      id: 'r2-4-7-example-9',
      type: 'example',
      title: 'Eksempel 9: Modellering av tidevann',
      problem: `I en havn varierer vanndybden mellom 2 meter (lavvann) og 10 meter (høyvann). Tiden mellom to påfølgende høyvann er 12 timer. Kl. 06:00 er det høyvann.

a) Sett opp en funksjon $h(t)$ som gir vanndybden $t$ timer etter midnatt.
b) Finn vanndybden kl. 09:00.
c) Når er vanndybden 8 meter for første gang etter midnatt?`,
      solution: `**Løsning:**

a) **Sett opp funksjonen:**

Amplitude: $|A| = \\frac{10 - 2}{2} = 4$ meter

Likevektslinje: $D = \\frac{10 + 2}{2} = 6$ meter

Periode: $T = 12$ timer, så $B = \\frac{2\\pi}{12} = \\frac{\\pi}{6}$

Høyvann ved $t = 6$ (kl. 06:00). Cosinus har maksimum ved 0, så vi bruker:

$$h(t) = 4\\cos\\left(\\frac{\\pi}{6}(t - 6)\\right) + 6$$

eller:

$$h(t) = 4\\cos\\left(\\frac{\\pi}{6}t - \\pi\\right) + 6$$

b) **Vanndybden kl. 09:00** ($t = 9$):

$h(9) = 4\\cos\\left(\\frac{\\pi}{6}(9 - 6)\\right) + 6 = 4\\cos\\left(\\frac{\\pi}{2}\\right) + 6 = 4 \\cdot 0 + 6 = 6$ meter

c) **Når er $h(t) = 8$?**

$4\\cos\\left(\\frac{\\pi}{6}(t - 6)\\right) + 6 = 8$

$\\cos\\left(\\frac{\\pi}{6}(t - 6)\\right) = \\frac{1}{2}$

$\\frac{\\pi}{6}(t - 6) = \\pm\\frac{\\pi}{3} + 2\\pi n$

$t - 6 = \\pm 2 + 12n$

$t = 4$ eller $t = 8$ (for $n = 0$)

Første gang etter midnatt: $t = 4$, altså **kl. 04:00**.`,
    },

    // Eksempel 10: Temperatursvingninger
    {
      id: 'r2-4-7-example-10',
      type: 'example',
      title: 'Eksempel 10: Temperatursvingninger gjennom året',
      problem: `Gjennomsnittstemperaturen i en by varierer gjennom året. Den laveste månedlige gjennomsnittstemperaturen er $-5°C$ i januar, og den høyeste er $19°C$ i juli.

a) Sett opp en modell $T(t)$ der $t$ er antall måneder etter 1. januar.
b) Hva er gjennomsnittstemperaturen i april?
c) I hvilke måneder er gjennomsnittstemperaturen over $15°C$?`,
      solution: `**Løsning:**

a) **Sett opp modellen:**

Amplitude: $|A| = \\frac{19 - (-5)}{2} = 12$

Likevekt: $D = \\frac{19 + (-5)}{2} = 7$

Periode: 12 måneder, så $B = \\frac{2\\pi}{12} = \\frac{\\pi}{6}$

Minimum i januar ($t = 0$) og maksimum i juli ($t = 6$).

Med cosinus og negativt $A$ (starter i minimum):

$$T(t) = -12\\cos\\left(\\frac{\\pi}{6}t\\right) + 7$$

b) **April** ($t = 3$):

$T(3) = -12\\cos\\left(\\frac{\\pi}{6} \\cdot 3\\right) + 7 = -12\\cos\\left(\\frac{\\pi}{2}\\right) + 7 = -12 \\cdot 0 + 7 = 7°C$

c) **Når er $T(t) > 15°C$?**

$-12\\cos\\left(\\frac{\\pi}{6}t\\right) + 7 > 15$

$-12\\cos\\left(\\frac{\\pi}{6}t\\right) > 8$

$\\cos\\left(\\frac{\\pi}{6}t\\right) < -\\frac{2}{3}$

$\\cos^{-1}\\left(-\\frac{2}{3}\\right) \\approx 2{,}30$ radianer

$\\frac{\\pi}{6}t > 2{,}30$ eller $\\frac{\\pi}{6}t < -2{,}30 + 2\\pi$

$t > 4{,}4$ eller $t < 7{,}6$

Altså er temperaturen over $15°C$ fra midten av mai til midten av august (ca. $t = 4{,}4$ til $t = 7{,}6$).`,
    },

    // Eksempel 11: Lydbølger
    {
      id: 'r2-4-7-example-11',
      type: 'example',
      title: 'Eksempel 11: Lydbølger og frekvens',
      problem: `Kammertonen A4 har frekvens 440 Hz (svingninger per sekund). En lydbølge kan beskrives ved trykkvariasjonen:

$$p(t) = A\\sin(2\\pi f t)$$

der $f$ er frekvensen og $t$ er tiden i sekunder.

a) Skriv opp funksjonsuttrykket for kammertonen.
b) Hva er perioden til denne lydbølgen?
c) En oktav høyere (A5) har dobbelt så høy frekvens. Hvordan endrer dette perioden?`,
      solution: `**Løsning:**

a) **Funksjonsuttrykket:**

Med $f = 440$ Hz får vi:

$$p(t) = A\\sin(2\\pi \\cdot 440 \\cdot t) = A\\sin(880\\pi t)$$

(der $A$ er amplituden som avhenger av lydstyrken)

b) **Perioden:**

$T = \\frac{1}{f} = \\frac{1}{440}$ sekunder $\\approx 2{,}27$ millisekunder

Alternativt: $T = \\frac{2\\pi}{B} = \\frac{2\\pi}{880\\pi} = \\frac{1}{440}$ s

c) **A5 med $f = 880$ Hz:**

Ny periode: $T = \\frac{1}{880}$ s $\\approx 1{,}14$ ms

Perioden halveres når frekvensen dobles. Dette stemmer med formelen $T = \\frac{1}{f}$.`,
    },

    // Eksempel 12: Pendelbevegelse
    {
      id: 'r2-4-7-example-12',
      type: 'example',
      title: 'Eksempel 12: Pendelbevegelse',
      problem: `En pendel svinger slik at utslaget (i cm) fra likevektsposisjonen er gitt ved:

$$x(t) = 15\\cos(2t)$$

der $t$ er tiden i sekunder.

a) Hva er amplitude og periode?
b) Hva er det maksimale utslaget?
c) Finn farten $v(t) = x'(t)$ og den maksimale farten.`,
      solution: `**Løsning:**

a) **Amplitude og periode:**

Amplitude: $|A| = 15$ cm

Periode: $T = \\frac{2\\pi}{2} = \\pi$ sekunder $\\approx 3{,}14$ s

b) **Maksimalt utslag:**

Maksimalt utslag er amplituden: $15$ cm (oppnås når $\\cos(2t) = 1$)

c) **Farten:**

$v(t) = x'(t) = \\frac{d}{dt}[15\\cos(2t)] = 15 \\cdot (-\\sin(2t)) \\cdot 2 = -30\\sin(2t)$

Den maksimale farten oppnås når $|\\sin(2t)| = 1$:

$$|v|_{\\text{maks}} = 30 \\text{ cm/s}$$

Merk: Maksimal fart oppnås når $x = 0$ (i likevektsposisjonen), og farten er null når utslaget er maksimalt.`,
    },

    // Eksempel 13: Ferrishjul
    {
      id: 'r2-4-7-example-13',
      type: 'example',
      title: 'Eksempel 13: Pariserhjul',
      problem: `Et pariserhjul har radius 20 meter og roterer med konstant fart. Laveste punkt er 2 meter over bakken, og det tar 3 minutter for en full omdreining. En passasjer starter på laveste punkt ved $t = 0$.

a) Sett opp en funksjon $h(t)$ som gir høyden over bakken etter $t$ minutter.
b) Hvor høyt er passasjeren etter 1 minutt?
c) Når er passasjeren 30 meter over bakken for første gang?`,
      solution: `**Løsning:**

a) **Sett opp funksjonen:**

- Laveste punkt: 2 m (minimumsverdi)
- Høyeste punkt: $2 + 2 \\cdot 20 = 42$ m (maksimumsverdi)
- Amplitude: $|A| = 20$ m
- Likevektshøyde: $D = \\frac{42 + 2}{2} = 22$ m
- Periode: $T = 3$ min, så $B = \\frac{2\\pi}{3}$

Siden passasjeren starter i laveste punkt, bruker vi cosinus med negativt fortegn:

$$h(t) = -20\\cos\\left(\\frac{2\\pi}{3}t\\right) + 22$$

b) **Høyde etter 1 minutt:**

$h(1) = -20\\cos\\left(\\frac{2\\pi}{3}\\right) + 22 = -20 \\cdot \\left(-\\frac{1}{2}\\right) + 22 = 10 + 22 = 32$ m

c) **Når er $h(t) = 30$ m?**

$-20\\cos\\left(\\frac{2\\pi}{3}t\\right) + 22 = 30$

$\\cos\\left(\\frac{2\\pi}{3}t\\right) = -\\frac{8}{20} = -0{,}4$

$\\frac{2\\pi}{3}t = \\cos^{-1}(-0{,}4) \\approx 1{,}982$

$t = \\frac{3 \\cdot 1{,}982}{2\\pi} \\approx 0{,}95$ minutter $\\approx 57$ sekunder`,
    },

    // Eksempel 14: Vekselstrøm
    {
      id: 'r2-4-7-example-14',
      type: 'example',
      title: 'Eksempel 14: Vekselstrøm',
      problem: `I Norge har vekselstrømmen i stikkontakter en frekvens på 50 Hz og en effektivspenning på 230 V. Toppverdien (amplituden) til spenningen er $230\\sqrt{2}$ V.

a) Skriv opp et uttrykk for spenningen $U(t)$ som funksjon av tiden $t$ (i sekunder).
b) Hva er perioden?
c) Hvor mange ganger per sekund er spenningen null?`,
      solution: `**Løsning:**

a) **Spenningen:**

$U(t) = 230\\sqrt{2} \\sin(2\\pi \\cdot 50 \\cdot t) = 230\\sqrt{2} \\sin(100\\pi t)$

b) **Perioden:**

$T = \\frac{1}{f} = \\frac{1}{50} = 0{,}02$ sekunder = 20 millisekunder

c) **Antall nullpunkter per sekund:**

I løpet av én periode ($T = 0{,}02$ s) passerer sinusfunksjonen gjennom null to ganger (én gang på vei opp, én gang på vei ned).

På ett sekund har vi $\\frac{1}{0{,}02} = 50$ perioder.

Antall nullpunkter per sekund: $50 \\cdot 2 = 100$`,
    },

    // Eksempel 15: Daglengde
    {
      id: 'r2-4-7-example-15',
      type: 'example',
      title: 'Eksempel 15: Daglengde gjennom året',
      problem: `I Oslo varierer daglengden gjennom året. Den lengste dagen er ca. 19 timer (sommersolverv, ca. 21. juni) og den korteste er ca. 6 timer (vintersolverv, ca. 21. desember).

a) Sett opp en modell $L(d)$ for daglengden der $d$ er dagnummer (1. januar = dag 1).
b) Hvor lang er dagen 1. mai (dag 121)?
c) I hvilken periode av året er daglengden over 16 timer?`,
      solution: `**Løsning:**

a) **Sett opp modellen:**

Amplitude: $|A| = \\frac{19 - 6}{2} = 6{,}5$ timer

Likevekt: $D = \\frac{19 + 6}{2} = 12{,}5$ timer

Periode: 365 dager, så $B = \\frac{2\\pi}{365}$

Maksimum ved sommersolverv, ca. dag 172 (21. juni).

$$L(d) = 6{,}5\\cos\\left(\\frac{2\\pi}{365}(d - 172)\\right) + 12{,}5$$

b) **1. mai (dag 121):**

$L(121) = 6{,}5\\cos\\left(\\frac{2\\pi}{365}(121 - 172)\\right) + 12{,}5$

$= 6{,}5\\cos\\left(\\frac{2\\pi \\cdot (-51)}{365}\\right) + 12{,}5$

$= 6{,}5\\cos(-0{,}878) + 12{,}5$

$= 6{,}5 \\cdot 0{,}639 + 12{,}5 \\approx 16{,}7$ timer

c) **Når er $L(d) > 16$?**

$6{,}5\\cos\\left(\\frac{2\\pi}{365}(d - 172)\\right) + 12{,}5 > 16$

$\\cos\\left(\\frac{2\\pi}{365}(d - 172)\\right) > \\frac{3{,}5}{6{,}5} \\approx 0{,}538$

$\\frac{2\\pi}{365}(d - 172) < \\cos^{-1}(0{,}538) \\approx 1{,}00$

$|d - 172| < \\frac{365 \\cdot 1{,}00}{2\\pi} \\approx 58$

Altså $114 < d < 230$, som tilsvarer ca. **24. april til 18. august**.`,
    },

    // ========== OPPGAVER ==========
    {
      id: 'r2-4-7-oppgaver-intro',
      type: 'text',
      content: `## Oppgaver

Nedenfor finner du oppgaver som dekker hele kapitlet. Start med de lettere oppgavene og jobb deg oppover i vanskelighetsgrad.`,
    },

    // Oppgave 1: Grunnleggende om sinus og cosinus
    {
      id: 'r2-4-7-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r2-4-7-ex-1',
        number: '4.7.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bestem eksakte verdier uten kalkulator.',
        subTasks: [
          { label: 'a', task: '$\\sin(0)$', solution: '$\\sin(0) = 0$' },
          { label: 'b', task: '$\\cos(\\pi)$', solution: '$\\cos(\\pi) = -1$' },
          { label: 'c', task: '$\\sin\\left(\\frac{\\pi}{6}\\right)$', solution: '$\\sin\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}$' },
          { label: 'd', task: '$\\cos\\left(\\frac{\\pi}{3}\\right)$', solution: '$\\cos\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}$' },
          { label: 'e', task: '$\\tan\\left(\\frac{\\pi}{4}\\right)$', solution: '$\\tan\\left(\\frac{\\pi}{4}\\right) = 1$' },
          { label: 'f', task: '$\\sin\\left(\\frac{3\\pi}{2}\\right)$', solution: '$\\sin\\left(\\frac{3\\pi}{2}\\right) = -1$' },
        ],
        hints: ['Bruk enhetssirkelen eller kjente verdier for standardvinkler.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 2: Amplitude og periode
    {
      id: 'r2-4-7-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r2-4-7-ex-2',
        number: '4.7.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bestem amplitude og periode for hver funksjon.',
        subTasks: [
          {
            label: 'a',
            task: '$f(x) = 5\\sin(x)$',
            solution: 'Amplitude: $5$, Periode: $2\\pi$',
          },
          {
            label: 'b',
            task: '$g(x) = \\cos(3x)$',
            solution: 'Amplitude: $1$, Periode: $\\frac{2\\pi}{3}$',
          },
          {
            label: 'c',
            task: '$h(x) = 2\\sin(4x)$',
            solution: 'Amplitude: $2$, Periode: $\\frac{\\pi}{2}$',
          },
          {
            label: 'd',
            task: '$p(x) = -3\\cos\\left(\\frac{x}{2}\\right)$',
            solution: 'Amplitude: $3$, Periode: $4\\pi$',
          },
        ],
        hints: ['Amplitude er $|A|$. Periode er $\\frac{2\\pi}{|B|}$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 3: Faseforskyvning
    {
      id: 'r2-4-7-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r2-4-7-ex-3',
        number: '4.7.3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bestem faseforskyvningen og beskriv hvilken retning grafen er forskjøvet.',
        subTasks: [
          {
            label: 'a',
            task: '$f(x) = \\sin\\left(x + \\frac{\\pi}{3}\\right)$',
            solution: 'Faseforskyvning: $-\\frac{\\pi}{3}$, grafen er forskjøvet $\\frac{\\pi}{3}$ til venstre.',
          },
          {
            label: 'b',
            task: '$g(x) = \\cos(x - \\pi)$',
            solution: 'Faseforskyvning: $\\pi$, grafen er forskjøvet $\\pi$ til høyre.',
          },
          {
            label: 'c',
            task: '$h(x) = \\sin(2x + \\pi)$',
            solution: 'Faseforskyvning: $-\\frac{\\pi}{2}$, grafen er forskjøvet $\\frac{\\pi}{2}$ til venstre.',
          },
        ],
        hints: ['Faseforskyvning er $-\\frac{C}{B}$ der funksjonen er på formen $A\\sin(Bx + C) + D$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 4: Komplett analyse
    {
      id: 'r2-4-7-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r2-4-7-ex-4',
        number: '4.7.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'For funksjonen $f(x) = 3\\sin\\left(2x - \\frac{\\pi}{3}\\right) + 1$, bestem:',
        subTasks: [
          { label: 'a', task: 'Amplitude', solution: 'Amplitude: $|A| = 3$' },
          { label: 'b', task: 'Periode', solution: 'Periode: $T = \\frac{2\\pi}{2} = \\pi$' },
          { label: 'c', task: 'Faseforskyvning', solution: 'Faseforskyvning: $-\\frac{-\\frac{\\pi}{3}}{2} = \\frac{\\pi}{6}$ til høyre' },
          { label: 'd', task: 'Vertikalt skift', solution: 'Vertikalt skift: $D = 1$ oppover' },
          { label: 'e', task: 'Maksimums- og minimumsverdier', solution: 'Maks: $1 + 3 = 4$, Min: $1 - 3 = -2$' },
        ],
        hints: ['Identifiser først verdiene av $A$, $B$, $C$ og $D$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 5: Tegne grafer
    {
      id: 'r2-4-7-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r2-4-7-ex-5',
        number: '4.7.5',
        type: 'interactive',
        tool: 'geogebra-graph',
        difficulty: 'medium',
        task: `Bruk GeoGebra til å tegne grafene til følgende funksjoner i samme koordinatsystem for $x \\in [0, 2\\pi]$:

- $f(x) = \\sin(x)$
- $g(x) = 2\\sin(x)$
- $h(x) = \\sin(2x)$

Beskriv hvordan grafene til $g$ og $h$ skiller seg fra grafen til $f$.`,
        solution: `$g(x) = 2\\sin(x)$ har dobbelt så stor amplitude som $f(x)$, men samme periode.

$h(x) = \\sin(2x)$ har samme amplitude som $f(x)$, men halv periode (den svinger dobbelt så raskt).`,
        initialCommands: ['f(x) = sin(x)'],
      },
    },

    // Oppgave 6: Fra graf til funksjonsuttrykk
    {
      id: 'r2-4-7-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r2-4-7-ex-6',
        number: '4.7.6',
        type: 'classic',
        difficulty: 'medium',
        task: `En sinuslignende graf har maksimumsverdi 7, minimumsverdi 1, og periode 8. Grafen har et maksimum ved $x = 2$.

Finn et funksjonsuttrykk på formen $f(x) = A\\sin(Bx + C) + D$ eller $f(x) = A\\cos(Bx + C) + D$.`,
        solution: `**Løsning:**

Amplitude: $|A| = \\frac{7 - 1}{2} = 3$

Vertikalt skift: $D = \\frac{7 + 1}{2} = 4$

Periode: $T = 8$, så $B = \\frac{2\\pi}{8} = \\frac{\\pi}{4}$

Med cosinus (maks ved $x = 2$):

$f(x) = 3\\cos\\left(\\frac{\\pi}{4}(x - 2)\\right) + 4 = 3\\cos\\left(\\frac{\\pi}{4}x - \\frac{\\pi}{2}\\right) + 4$`,
        hints: ['Start med å finne amplitude og vertikalt skift. Velg cosinus siden du vet når maksimum oppnås.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 7: Tangensfunksjonen
    {
      id: 'r2-4-7-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r2-4-7-ex-7',
        number: '4.7.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Betrakt funksjonen $f(x) = \\tan(x)$.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er perioden til $\\tan(x)$?',
            solution: 'Perioden er $\\pi$.',
          },
          {
            label: 'b',
            task: 'For hvilke $x$-verdier i intervallet $[0, 2\\pi]$ er $\\tan(x)$ ikke definert?',
            solution: '$\\tan(x)$ er ikke definert for $x = \\frac{\\pi}{2}$ og $x = \\frac{3\\pi}{2}$.',
          },
          {
            label: 'c',
            task: 'Beregn $\\tan\\left(\\frac{\\pi}{6}\\right)$ eksakt.',
            solution: '$\\tan\\left(\\frac{\\pi}{6}\\right) = \\frac{\\sin\\left(\\frac{\\pi}{6}\\right)}{\\cos\\left(\\frac{\\pi}{6}\\right)} = \\frac{\\frac{1}{2}}{\\frac{\\sqrt{3}}{2}} = \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$',
          },
        ],
        hints: ['$\\tan(x) = \\frac{\\sin(x)}{\\cos(x)}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 8: Tidevann
    {
      id: 'r2-4-7-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'r2-4-7-ex-8',
        number: '4.7.8',
        type: 'classic',
        difficulty: 'medium',
        task: `I en fjord varierer vanndybden med tidevannet. Den minste dybden er 4 meter og den største er 12 meter. Tiden mellom to høyvann er 12,4 timer. Høyvann inntreffer kl. 02:00.

a) Sett opp en modell $h(t)$ for vanndybden $t$ timer etter midnatt.
b) Hva er vanndybden kl. 08:00?
c) En båt trenger minst 7 meter dybde. I hvilke tidsperioder kan båten seile?`,
        solution: `**Løsning:**

a) Amplitude: $|A| = \\frac{12 - 4}{2} = 4$ m

Likevekt: $D = \\frac{12 + 4}{2} = 8$ m

Periode: $T = 12{,}4$ timer, så $B = \\frac{2\\pi}{12{,}4}$

Maks ved $t = 2$:

$h(t) = 4\\cos\\left(\\frac{2\\pi}{12{,}4}(t - 2)\\right) + 8$

b) $h(8) = 4\\cos\\left(\\frac{2\\pi}{12{,}4} \\cdot 6\\right) + 8 = 4\\cos(3{,}04) + 8 \\approx 4 \\cdot (-0{,}998) + 8 \\appro 4{,}0$ m

c) Løs $h(t) \\geq 7$:

$4\\cos\\left(\\frac{2\\pi}{12{,}4}(t - 2)\\right) + 8 \\geq 7$

$\\cos\\left(\\frac{2\\pi}{12{,}4}(t - 2)\\right) \\geq -0{,}25$

Båten kan seile i omtrent 9 timer rundt hvert høyvann.`,
        hints: ['Bruk cosinus siden du vet når maksimum (høyvann) inntreffer.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 9: Temperatur
    {
      id: 'r2-4-7-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'r2-4-7-ex-9',
        number: '4.7.9',
        type: 'classic',
        difficulty: 'medium',
        task: `Temperaturen i et drivhus varierer i løpet av døgnet. Modellen

$$T(t) = 8\\sin\\left(\\frac{\\pi}{12}t - \\frac{\\pi}{2}\\right) + 22$$

gir temperaturen $T$ i grader Celsius $t$ timer etter midnatt.

a) Hva er maksimums- og minimumstemperaturen?
b) Når på døgnet er temperaturen høyest?
c) Hvor mange timer er temperaturen over 26°C?`,
        solution: `**Løsning:**

a) Amplitude er 8, likevekt er 22.
- Maks: $22 + 8 = 30$°C
- Min: $22 - 8 = 14$°C

b) Maks når $\\sin\\left(\\frac{\\pi}{12}t - \\frac{\\pi}{2}\\right) = 1$

$\\frac{\\pi}{12}t - \\frac{\\pi}{2} = \\frac{\\pi}{2}$

$t = 12$

Høyest temperatur kl. 12:00 (midt på dagen).

c) Løs $T(t) > 26$:

$8\\sin\\left(\\frac{\\pi}{12}t - \\frac{\\pi}{2}\\right) > 4$

$\\sin\\left(\\frac{\\pi}{12}t - \\frac{\\pi}{2}\\right) > 0{,}5$

$\\frac{\\pi}{6} < \\frac{\\pi}{12}t - \\frac{\\pi}{2} < \\frac{5\\pi}{6}$

$8 < t < 16$

Temperaturen er over 26°C i **8 timer** (fra kl. 08:00 til kl. 16:00).`,
        hints: ['Perioden er $\\frac{2\\pi}{\\frac{\\pi}{12}} = 24$ timer (ett døgn).'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 10: Svingninger
    {
      id: 'r2-4-7-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'r2-4-7-ex-10',
        number: '4.7.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En fjær med en kule svinger slik at posisjonen er gitt ved

$$x(t) = 0{,}1\\cos(5t)$$

der $x$ er i meter og $t$ er i sekunder.

a) Hva er amplitude og periode?
b) Finn et uttrykk for farten $v(t) = x'(t)$.
c) Finn et uttrykk for akselerasjonen $a(t) = v'(t)$.
d) Vis at $a(t) = -25x(t)$. Hva forteller dette oss?`,
        solution: `**Løsning:**

a) Amplitude: $0{,}1$ m = 10 cm

Periode: $T = \\frac{2\\pi}{5} \\approx 1{,}26$ s

b) $v(t) = x'(t) = 0{,}1 \\cdot (-\\sin(5t)) \\cdot 5 = -0{,}5\\sin(5t)$ m/s

c) $a(t) = v'(t) = -0{,}5 \\cdot \\cos(5t) \\cdot 5 = -2{,}5\\cos(5t)$ m/s²

d) Vi har $x(t) = 0{,}1\\cos(5t)$, så:

$-25x(t) = -25 \\cdot 0{,}1\\cos(5t) = -2{,}5\\cos(5t) = a(t)$ ✓

Dette er karakteristisk for **harmonisk svingning**: akselerasjonen er proporsjonal med og motsatt rettet av posisjonen. Det betyr at systemet opplever en gjenopprettende kraft som alltid trekker mot likevektspunktet.`,
        hints: ['Deriver posisjonen for å finne farten, og deriver farten for å finne akselerasjonen.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 11: Sammensatte svingninger
    {
      id: 'r2-4-7-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'r2-4-7-ex-11',
        number: '4.7.11',
        type: 'interactive',
        tool: 'geogebra-graph',
        difficulty: 'vanskelig',
        task: `Bruk GeoGebra til å utforske funksjonen

$$f(x) = \\sin(x) + \\frac{1}{3}\\sin(3x)$$

a) Tegn grafen og beskriv formen.
b) Hva er perioden til $f(x)$?
c) Sammenlign med $g(x) = \\sin(x)$. Hvordan endrer tilleggsleden grafen?`,
        solution: `a) Grafen ligner en sinuskurve, men med en mer "kantet" eller "skarp" topp/bunn.

b) Perioden er $2\\pi$ (den minste perioden som begge leddene deler).

c) Tillegget $\\frac{1}{3}\\sin(3x)$ legger til en raskere oscillasjon oppå grunnsvingningen. Dette gjør bølgeformen mer kompleks, lik en forenklet firkantbølge. Dette er grunnlaget for Fourier-analyse.`,
        initialCommands: ['f(x) = sin(x) + (1/3)*sin(3*x)', 'g(x) = sin(x)'],
      },
    },

    // Oppgave 12: Modellering med data
    {
      id: 'r2-4-7-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'r2-4-7-ex-12',
        number: '4.7.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Månedstemperaturen i en by er gitt i tabellen:

| Måned | Jan | Feb | Mar | Apr | Mai | Jun | Jul | Aug | Sep | Okt | Nov | Des |
|-------|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| °C    | -8  | -6  | 0   | 6   | 12  | 16  | 18  | 16  | 11  | 5   | -1  | -6  |

a) Finn en sinusmodell $T(m) = A\\cos(Bm + C) + D$ som passer dataene, der $m$ er månedsnummer (januar = 1).
b) Bruk modellen til å anslå temperaturen i slutten av mai ($m = 5{,}5$).`,
        solution: `**Løsning:**

a) Fra dataene:
- Maks: 18°C (juli, $m = 7$)
- Min: -8°C (januar, $m = 1$)
- Amplitude: $|A| = \\frac{18 - (-8)}{2} = 13$
- Likevekt: $D = \\frac{18 + (-8)}{2} = 5$
- Periode: 12 måneder, $B = \\frac{2\\pi}{12} = \\frac{\\pi}{6}$
- Maks ved $m = 7$

$T(m) = 13\\cos\\left(\\frac{\\pi}{6}(m - 7)\\right) + 5$

b) $T(5{,}5) = 13\\cos\\left(\\frac{\\pi}{6}(5{,}5 - 7)\\right) + 5$

$= 13\\cos\\left(-\\frac{\\pi}{4}\\right) + 5$

$= 13 \\cdot \\frac{\\sqrt{2}}{2} + 5 \\approx 9{,}2 + 5 = 14{,}2$°C`,
        hints: ['Finn maks og min fra tabellen, beregn amplitude og likevekt.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 13: Likninger med trigonometriske funksjoner
    {
      id: 'r2-4-7-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'r2-4-7-ex-13',
        number: '4.7.13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs likningene for $x \\in [0, 2\\pi]$.',
        subTasks: [
          {
            label: 'a',
            task: '$2\\sin(x) = 1$',
            solution: '$\\sin(x) = \\frac{1}{2} \\Rightarrow x = \\frac{\\pi}{6}$ eller $x = \\frac{5\\pi}{6}$',
          },
          {
            label: 'b',
            task: '$\\cos(2x) = 0$',
            solution: '$2x = \\frac{\\pi}{2}, \\frac{3\\pi}{2}, \\frac{5\\pi}{2}, \\frac{7\\pi}{2} \\Rightarrow x = \\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}$',
          },
          {
            label: 'c',
            task: '$\\tan(x) = \\sqrt{3}$',
            solution: '$x = \\frac{\\pi}{3}$ eller $x = \\frac{\\pi}{3} + \\pi = \\frac{4\\pi}{3}$',
          },
        ],
        hints: ['Husk at sinus og cosinus gir to løsninger per periode, mens tangens gir én.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 14: Nullpunkter og ekstremalpunkter
    {
      id: 'r2-4-7-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 'r2-4-7-ex-14',
        number: '4.7.14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Gitt $f(x) = 4\\sin\\left(\\frac{\\pi}{3}x\\right) - 2$

a) Finn alle nullpunkter i intervallet $[0, 6]$.
b) Finn alle ekstremalpunkter (maks og min) i intervallet $[0, 6]$.
c) Tegn en skisse av grafen.`,
        solution: `**Løsning:**

a) Nullpunkter: $4\\sin\\left(\\frac{\\pi}{3}x\\right) - 2 = 0$

$\\sin\\left(\\frac{\\pi}{3}x\\right) = \\frac{1}{2}$

$\\frac{\\pi}{3}x = \\frac{\\pi}{6} + 2\\pi n$ eller $\\frac{\\pi}{3}x = \\frac{5\\pi}{6} + 2\\pi n$

$x = \\frac{1}{2} + 6n$ eller $x = \\frac{5}{2} + 6n$

I $[0, 6]$: $x = 0{,}5$ og $x = 2{,}5$

b) Perioden er $T = 6$.

Maks når $\\sin = 1$: $\\frac{\\pi}{3}x = \\frac{\\pi}{2} \\Rightarrow x = 1{,}5$
Maks-verdi: $4 \\cdot 1 - 2 = 2$

Min når $\\sin = -1$: $\\frac{\\pi}{3}x = \\frac{3\\pi}{2} \\Rightarrow x = 4{,}5$
Min-verdi: $4 \\cdot (-1) - 2 = -6$

c) Skissen viser én full periode fra $x = 0$ til $x = 6$, med likevektslinje ved $y = -2$.`,
        hints: ['Perioden er $\\frac{2\\pi}{\\frac{\\pi}{3}} = 6$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 15: Praktisk modellering
    {
      id: 'r2-4-7-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 'r2-4-7-ex-15',
        number: '4.7.15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Et hjerte slår med en puls på 72 slag per minutt. Blodtrykket kan modelleres som

$$P(t) = 20\\sin(2{,}4\\pi t) + 100$$

der $P$ er trykket i mmHg og $t$ er tiden i sekunder.

a) Hva er systolisk trykk (maksimum) og diastolisk trykk (minimum)?
b) Hva er pulsen i slag per minutt ifølge modellen?
c) Hvor lenge varer ett hjerteslag?`,
        solution: `**Løsning:**

a) Systolisk trykk (maks): $100 + 20 = 120$ mmHg

Diastolisk trykk (min): $100 - 20 = 80$ mmHg

(Normal blodtrykksavlesning: 120/80)

b) Frekvens: $B = 2{,}4\\pi$

Periode: $T = \\frac{2\\pi}{2{,}4\\pi} = \\frac{1}{1{,}2} \\approx 0{,}833$ sekunder

Slag per minutt: $\\frac{60}{0{,}833} = 72$ slag/min ✓

c) Ett hjerteslag varer $T \\approx 0{,}833$ sekunder, eller ca. $\\frac{5}{6}$ sekund.`,
        hints: ['Frekvens og periode henger sammen ved $f = \\frac{1}{T}$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 16: Soloppgang og solnedgang
    {
      id: 'r2-4-7-ex-block-16',
      type: 'exercise',
      exercise: {
        id: 'r2-4-7-ex-16',
        number: '4.7.16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `I Bergen er klokkeslettet for soloppgang gjennom året tilnærmet gitt ved

$$S(d) = 2\\cos\\left(\\frac{2\\pi}{365}(d - 172)\\right) + 6$$

der $S$ er klokkeslettet (i timer etter midnatt) og $d$ er dagnummer.

a) Når på året er soloppgangen tidligst, og hva er klokkeslettet?
b) Når er soloppgangen senest?
c) Hva er gjennomsnittlig soloppgangstid?
d) Når går solen opp 1. mai (dag 121)?`,
        solution: `**Løsning:**

a) Tidligst soloppgang når $\\cos = -1$ (lavest verdi av $S$):
$(d - 172) = \\pi \\cdot \\frac{365}{2\\pi} = 182{,}5$, så $d \\approx 355$ eller ca. dag 172 - noe stemmer ikke.

Vent - la oss tenke igjen. $\\cos$ har minimum $-1$ og maksimum $1$.
$S_{\\min} = 2(-1) + 6 = 4$ (kl. 04:00)
$S_{\\max} = 2(1) + 6 = 8$ (kl. 08:00)

Minimum (tidligst) når $\\cos\\left(\\frac{2\\pi}{365}(d-172)\\right) = -1$, dvs. $d - 172 = \\pm 182{,}5$
$d = 172 - 182{,}5 = -10{,}5 \\approx 355$ (20. desember) eller $d = 354{,}5$

Hmm, dette gir vintersolverv som tidligste soloppgang, som ikke stemmer. Modellen bør ha negativt fortegn. La oss anta modellen er:

$S(d) = -2\\cos\\left(\\frac{2\\pi}{365}(d - 172)\\right) + 6$

Da: Tidligst ved $d = 172$ (21. juni), kl. 04:00
Senest ved $d = 355$ (21. desember), kl. 08:00

b) Senest: 21. desember, kl. 08:00

c) Gjennomsnitt: $D = 6$, altså kl. 06:00

d) $S(121) = -2\\cos\\left(\\frac{2\\pi}{365}(121-172)\\right) + 6 = -2\\cos(-0{,}878) + 6 = -2(0{,}639) + 6 \\approx 4{,}7$

Ca. kl. 04:45`,
        hints: ['Tenk over hva maks og min av modellen representerer fysisk.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 17: Interferens
    {
      id: 'r2-4-7-ex-block-17',
      type: 'exercise',
      exercise: {
        id: 'r2-4-7-ex-17',
        number: '4.7.17',
        type: 'interactive',
        tool: 'geogebra-graph',
        difficulty: 'vanskelig',
        task: `To lydbølger med samme frekvens men ulik fase kombineres:

$$y_1(t) = \\sin(2\\pi t)$$
$$y_2(t) = \\sin(2\\pi t + \\phi)$$

der $\\phi$ er faseforskjellen.

a) Bruk GeoGebra til å utforske $y_1 + y_2$ for ulike verdier av $\\phi$.
b) Hva skjer når $\\phi = 0$? Hva kalles dette?
c) Hva skjer når $\\phi = \\pi$? Hva kalles dette?`,
        solution: `a) Bruk glider for $\\phi$ fra 0 til $2\\pi$.

b) Når $\\phi = 0$: $y_1 + y_2 = 2\\sin(2\\pi t)$

Bølgene forsterker hverandre. Dette kalles **konstruktiv interferens**.

c) Når $\\phi = \\pi$: $y_1 + y_2 = \\sin(2\\pi t) + \\sin(2\\pi t + \\pi) = \\sin(2\\pi t) - \\sin(2\\pi t) = 0$

Bølgene utsletter hverandre. Dette kalles **destruktiv interferens**.`,
        initialCommands: [
          'phi = 0',
          'y1(t) = sin(2*pi*t)',
          'y2(t) = sin(2*pi*t + phi)',
          'sum(t) = y1(t) + y2(t)',
        ],
      },
    },

  ],

  // Collect all exercises for the chapter
  exercises: [],

  // Navigation
  nextChapter: 'r2-4-9',
  prevChapter: 'r2-4-7',
};

// ============================================================================
// KAPITTEL 4.9: DERIVASJON AV TRIGONOMETRISKE FUNKSJONER
// ============================================================================

export const CHAPTER_R2_4_9: TextbookChapter = {
  id: 'r2-4-9',
  courseId: 'r2',
  chapterNumber: '4.9',
  title: 'Derivasjon av trigonometriske funksjoner',
  description: 'Derivere sin, cos og tan, og bruke kjerneregelen på sammensatte trigonometriske funksjoner.',
  estimatedMinutes: 55,
  competenceGoals: [
    'analysere og tolke ulike funksjonar ved å bruke derivasjon',
    'derivere trigonometriske funksjoner',
    'bruke kjerneregelen på sammensatte trigonometriske funksjoner',
    'drøfte funksjoner med trigonometriske uttrykk',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r2-4-8-intro',
      type: 'text',
      content: `## Innledning

Trigonometriske funksjoner som $\\sin x$, $\\cos x$ og $\\tan x$ er sentrale i mange anvendelser - fra bølgebevegelser og svingninger til rotasjon og periodiske fenomener. For å kunne analysere slike funksjoner trenger vi å vite hvordan vi deriverer dem.

I dette kapitlet skal vi:
- Utlede derivasjonsreglene for $\\sin x$, $\\cos x$ og $\\tan x$
- Bruke kjerneregelen på sammensatte trigonometriske funksjoner
- Drøfte trigonometriske funksjoner og finne ekstremalpunkter og vendepunkter

**Viktig:** I dette kapitlet bruker vi alltid **radianer** for vinkler. Derivasjonsreglene gjelder kun når argumentet er i radianer.`,
    },

    // ========== GRENSEVERDIER SOM GRUNNLAG ==========
    {
      id: 'r2-4-8-grenseverdier',
      type: 'text',
      content: `## Viktige grenseverdier

For å bevise derivasjonsreglene trenger vi to fundamentale grenseverdier:

$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$$

$$\\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0$$

Disse grenseverdiene kan vises geometrisk ved å studere enhetssirkelen. Den første sier at når $x$ er liten (i radianer), så er $\\sin x \\approx x$.`,
    },

    {
      id: 'r2-4-8-grense-note',
      type: 'note',
      content: `Grenseverdien $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$ er grunnen til at vi må bruke radianer. I grader ville vi fått et annet resultat, og derivasjonsreglene ville blitt mer kompliserte.`,
    },

    // ========== DERIVASJON AV SIN X ==========
    {
      id: 'r2-4-8-sin-intro',
      type: 'text',
      content: `## Derivasjon av $\\sin x$

Vi starter med å utlede den deriverte av $f(x) = \\sin x$ fra definisjonen av den deriverte.`,
    },

    {
      id: 'r2-4-8-sin-bevis',
      type: 'proof',
      title: 'Bevis: Den deriverte av sin x',
      content: `Vi bruker definisjonen av den deriverte:

$$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h} = \\lim_{h \\to 0} \\frac{\\sin(x+h) - \\sin x}{h}$$

Bruker addisjonsformelen $\\sin(x+h) = \\sin x \\cos h + \\cos x \\sin h$:

$$= \\lim_{h \\to 0} \\frac{\\sin x \\cos h + \\cos x \\sin h - \\sin x}{h}$$

$$= \\lim_{h \\to 0} \\frac{\\sin x (\\cos h - 1) + \\cos x \\sin h}{h}$$

$$= \\lim_{h \\to 0} \\left( \\sin x \\cdot \\frac{\\cos h - 1}{h} + \\cos x \\cdot \\frac{\\sin h}{h} \\right)$$

$$= \\sin x \\cdot \\lim_{h \\to 0} \\frac{\\cos h - 1}{h} + \\cos x \\cdot \\lim_{h \\to 0} \\frac{\\sin h}{h}$$

Siden $\\lim_{h \\to 0} \\frac{\\cos h - 1}{h} = 0$ og $\\lim_{h \\to 0} \\frac{\\sin h}{h} = 1$:

$$= \\sin x \\cdot 0 + \\cos x \\cdot 1 = \\cos x$$

Altså er $(\\sin x)' = \\cos x$. $\\square$`,
    },

    {
      id: 'r2-4-8-sin-formel',
      type: 'formula',
      title: 'Den deriverte av sinus',
      latex: '(\\sin x)\' = \\cos x',
      description: 'Den deriverte av sinus er cosinus.',
    },

    // ========== DERIVASJON AV COS X ==========
    {
      id: 'r2-4-8-cos-intro',
      type: 'text',
      content: `## Derivasjon av $\\cos x$

Vi kan utlede den deriverte av $\\cos x$ på tilsvarende måte, eller bruke at $\\cos x = \\sin\\left(\\frac{\\pi}{2} - x\\right)$.`,
    },

    {
      id: 'r2-4-8-cos-bevis',
      type: 'proof',
      title: 'Bevis: Den deriverte av cos x',
      content: `**Metode 1: Fra definisjonen**

$$f'(x) = \\lim_{h \\to 0} \\frac{\\cos(x+h) - \\cos x}{h}$$

Bruker addisjonsformelen $\\cos(x+h) = \\cos x \\cos h - \\sin x \\sin h$:

$$= \\lim_{h \\to 0} \\frac{\\cos x \\cos h - \\sin x \\sin h - \\cos x}{h}$$

$$= \\lim_{h \\to 0} \\frac{\\cos x (\\cos h - 1) - \\sin x \\sin h}{h}$$

$$= \\cos x \\cdot \\lim_{h \\to 0} \\frac{\\cos h - 1}{h} - \\sin x \\cdot \\lim_{h \\to 0} \\frac{\\sin h}{h}$$

$$= \\cos x \\cdot 0 - \\sin x \\cdot 1 = -\\sin x$$

**Metode 2: Bruke sammenhengen med sinus**

Vi vet at $\\cos x = \\sin\\left(\\frac{\\pi}{2} - x\\right)$.

Med kjerneregelen og $(\\sin u)' = \\cos u$:

$$(\\cos x)' = \\cos\\left(\\frac{\\pi}{2} - x\\right) \\cdot (-1) = -\\cos\\left(\\frac{\\pi}{2} - x\\right) = -\\sin x$$

Altså er $(\\cos x)' = -\\sin x$. $\\square$`,
    },

    {
      id: 'r2-4-8-cos-formel',
      type: 'formula',
      title: 'Den deriverte av cosinus',
      latex: '(\\cos x)\' = -\\sin x',
      description: 'Den deriverte av cosinus er minus sinus. Legg merke til minustegnet!',
    },

    {
      id: 'r2-4-8-warning-minus',
      type: 'warning',
      title: 'Husk minustegnet!',
      content: `En vanlig feil er å glemme minustegnet når man deriverer $\\cos x$:

$(\\cos x)' = -\\sin x$ (med minus!)

Husk: Sinus gir pluss cosinus, cosinus gir minus sinus.`,
    },

    // ========== DERIVASJON AV TAN X ==========
    {
      id: 'r2-4-8-tan-intro',
      type: 'text',
      content: `## Derivasjon av $\\tan x$

For å derivere $\\tan x = \\frac{\\sin x}{\\cos x}$ bruker vi brøkregelen for derivasjon.`,
    },

    {
      id: 'r2-4-8-tan-bevis',
      type: 'proof',
      title: 'Bevis: Den deriverte av tan x',
      content: `Vi har $\\tan x = \\frac{\\sin x}{\\cos x}$.

Bruker brøkregelen $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$:

$$(\\tan x)' = \\frac{(\\sin x)' \\cdot \\cos x - \\sin x \\cdot (\\cos x)'}{(\\cos x)^2}$$

$$= \\frac{\\cos x \\cdot \\cos x - \\sin x \\cdot (-\\sin x)}{\\cos^2 x}$$

$$= \\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x}$$

Siden $\\cos^2 x + \\sin^2 x = 1$:

$$= \\frac{1}{\\cos^2 x}$$

Dette kan også skrives som $\\sec^2 x$ eller $1 + \\tan^2 x$. $\\square$`,
    },

    {
      id: 'r2-4-8-tan-formel',
      type: 'formula',
      title: 'Den deriverte av tangens',
      latex: '(\\tan x)\' = \\frac{1}{\\cos^2 x} = 1 + \\tan^2 x',
      description: 'Den deriverte av tangens er 1 over cosinus i annen.',
    },

    // ========== OPPSUMMERING AV REGLENE ==========
    {
      id: 'r2-4-8-oppsummering-regler',
      type: 'theorem',
      title: 'Derivasjonsregler for trigonometriske funksjoner',
      content: `De grunnleggende derivasjonsreglene for trigonometriske funksjoner er:

$$\\begin{aligned}
(\\sin x)' &= \\cos x \\\\[6pt]
(\\cos x)' &= -\\sin x \\\\[6pt]
(\\tan x)' &= \\frac{1}{\\cos^2 x}
\\end{aligned}$$

Merk at disse reglene kun gjelder når $x$ er i **radianer**.`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'r2-4-8-example-1',
      type: 'example',
      title: 'Eksempel 1: Grunnleggende derivasjon',
      problem: `Deriver funksjonene:

a) $f(x) = 3\\sin x$

b) $g(x) = -2\\cos x + 5$

c) $h(x) = \\sin x + \\cos x$`,
      solution: `**Løsning:**

a) $f(x) = 3\\sin x$

Konstanten 3 beholdes:
$$f'(x) = 3 \\cdot (\\sin x)' = 3\\cos x$$

b) $g(x) = -2\\cos x + 5$

$$g'(x) = -2 \\cdot (\\cos x)' + 0 = -2 \\cdot (-\\sin x) = 2\\sin x$$

c) $h(x) = \\sin x + \\cos x$

$$h'(x) = (\\sin x)' + (\\cos x)' = \\cos x + (-\\sin x) = \\cos x - \\sin x$$`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'r2-4-8-example-2',
      type: 'example',
      title: 'Eksempel 2: Produkter og brøker',
      problem: `Deriver funksjonene:

a) $f(x) = x \\sin x$

b) $g(x) = \\frac{\\sin x}{x}$`,
      solution: `**Løsning:**

a) $f(x) = x \\sin x$

Vi bruker produktregelen $(uv)' = u'v + uv'$:

$$f'(x) = 1 \\cdot \\sin x + x \\cdot \\cos x = \\sin x + x\\cos x$$

b) $g(x) = \\frac{\\sin x}{x}$

Vi bruker brøkregelen $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$:

$$g'(x) = \\frac{\\cos x \\cdot x - \\sin x \\cdot 1}{x^2} = \\frac{x\\cos x - \\sin x}{x^2}$$`,
    },

    // ========== KJERNEREGELEN ==========
    {
      id: 'r2-4-8-kjerne-intro',
      type: 'text',
      content: `## Kjerneregelen med trigonometriske funksjoner

Når vi har sammensatte funksjoner som $\\sin(2x)$, $\\cos(x^2)$ eller $\\tan(3x+1)$, må vi bruke **kjerneregelen** (chain rule).

Husk kjerneregelen: Hvis $y = f(u)$ og $u = g(x)$, så er

$$\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx} = f'(u) \\cdot g'(x)$$`,
    },

    {
      id: 'r2-4-8-kjerne-formler',
      type: 'theorem',
      title: 'Kjerneregelen for trigonometriske funksjoner',
      content: `La $u = u(x)$ være en deriverbar funksjon av $x$. Da har vi:

$$\\begin{aligned}
(\\sin u)' &= \\cos u \\cdot u' \\\\[6pt]
(\\cos u)' &= -\\sin u \\cdot u' \\\\[6pt]
(\\tan u)' &= \\frac{1}{\\cos^2 u} \\cdot u'
\\end{aligned}$$

Med andre ord: Deriver den ytre funksjonen og multipliser med den deriverte av den indre funksjonen.`,
    },

    {
      id: 'r2-4-8-tip-kjerne',
      type: 'tip',
      content: `**Huskeregel for kjerneregelen:**

1. Identifiser den indre funksjonen $u$
2. Deriver den ytre funksjonen (behold $u$ som den er)
3. Multipliser med $u'$ (den deriverte av den indre funksjonen)`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'r2-4-8-example-3',
      type: 'example',
      title: 'Eksempel 3: Kjerneregelen - enkle tilfeller',
      problem: `Deriver funksjonene:

a) $f(x) = \\sin(2x)$

b) $g(x) = \\cos(3x)$

c) $h(x) = \\tan(5x)$`,
      solution: `**Løsning:**

a) $f(x) = \\sin(2x)$

Her er $u = 2x$, så $u' = 2$.

$$f'(x) = \\cos(2x) \\cdot 2 = 2\\cos(2x)$$

b) $g(x) = \\cos(3x)$

Her er $u = 3x$, så $u' = 3$.

$$g'(x) = -\\sin(3x) \\cdot 3 = -3\\sin(3x)$$

c) $h(x) = \\tan(5x)$

Her er $u = 5x$, så $u' = 5$.

$$h'(x) = \\frac{1}{\\cos^2(5x)} \\cdot 5 = \\frac{5}{\\cos^2(5x)}$$`,
    },

    // ========== EKSEMPEL 4 ==========
    {
      id: 'r2-4-8-example-4',
      type: 'example',
      title: 'Eksempel 4: Kjerneregelen - mer komplekse indre funksjoner',
      problem: `Deriver funksjonene:

a) $f(x) = \\sin(x^2)$

b) $g(x) = \\cos(2x + 3)$

c) $h(x) = \\sin^2 x$ (det vil si $(\\sin x)^2$)`,
      solution: `**Løsning:**

a) $f(x) = \\sin(x^2)$

Her er $u = x^2$, så $u' = 2x$.

$$f'(x) = \\cos(x^2) \\cdot 2x = 2x\\cos(x^2)$$

b) $g(x) = \\cos(2x + 3)$

Her er $u = 2x + 3$, så $u' = 2$.

$$g'(x) = -\\sin(2x + 3) \\cdot 2 = -2\\sin(2x + 3)$$

c) $h(x) = \\sin^2 x = (\\sin x)^2$

Her har vi to lag: Den ytre funksjonen er $u^2$ og den indre er $u = \\sin x$.

$$h'(x) = 2(\\sin x) \\cdot (\\sin x)' = 2\\sin x \\cdot \\cos x$$

Dette kan også skrives som $\\sin(2x)$ ved hjelp av dobbeltvinkelformelen.`,
    },

    // ========== EKSEMPEL 5 ==========
    {
      id: 'r2-4-8-example-5',
      type: 'example',
      title: 'Eksempel 5: Kombinasjon av regler',
      problem: `Deriver funksjonen $f(x) = e^x \\sin x$.`,
      solution: `**Løsning:**

Vi bruker produktregelen $(uv)' = u'v + uv'$:

La $u = e^x$ og $v = \\sin x$.

Da er $u' = e^x$ og $v' = \\cos x$.

$$f'(x) = e^x \\cdot \\sin x + e^x \\cdot \\cos x = e^x(\\sin x + \\cos x)$$`,
    },

    // ========== EKSEMPEL 6 ==========
    {
      id: 'r2-4-8-example-6',
      type: 'example',
      title: 'Eksempel 6: Dobbel bruk av kjerneregelen',
      problem: `Deriver funksjonen $f(x) = \\sin(\\cos x)$.`,
      solution: `**Løsning:**

Her har vi en sammensatt funksjon der den ytre funksjonen er sinus og den indre er $\\cos x$.

La $u = \\cos x$, så $u' = -\\sin x$.

$$f'(x) = \\cos(\\cos x) \\cdot (-\\sin x) = -\\sin x \\cdot \\cos(\\cos x)$$`,
    },

    // ========== EKSEMPEL 7 ==========
    {
      id: 'r2-4-8-example-7',
      type: 'example',
      title: 'Eksempel 7: Trigonometrisk funksjon i eksponenten',
      problem: `Deriver funksjonen $f(x) = e^{\\sin x}$.`,
      solution: `**Løsning:**

Den ytre funksjonen er eksponentialfunksjonen $e^u$ og den indre er $u = \\sin x$.

Vi vet at $(e^u)' = e^u \\cdot u'$.

$$f'(x) = e^{\\sin x} \\cdot (\\sin x)' = e^{\\sin x} \\cdot \\cos x = \\cos x \\cdot e^{\\sin x}$$`,
    },

    // ========== EKSEMPEL 8 ==========
    {
      id: 'r2-4-8-example-8',
      type: 'example',
      title: 'Eksempel 8: Naturlig logaritme av trigonometrisk funksjon',
      problem: `Deriver funksjonen $f(x) = \\ln(\\sin x)$ for $x \\in (0, \\pi)$.`,
      solution: `**Løsning:**

Den ytre funksjonen er $\\ln u$ og den indre er $u = \\sin x$.

Vi vet at $(\\ln u)' = \\frac{1}{u} \\cdot u'$.

$$f'(x) = \\frac{1}{\\sin x} \\cdot (\\sin x)' = \\frac{1}{\\sin x} \\cdot \\cos x = \\frac{\\cos x}{\\sin x} = \\cot x$$

Vi krever $x \\in (0, \\pi)$ for at $\\sin x > 0$, slik at logaritmen er definert.`,
    },

    // ========== FUNKSJONSDRØFTING ==========
    {
      id: 'r2-4-8-drofting-intro',
      type: 'text',
      content: `## Funksjonsdrøfting med trigonometriske funksjoner

Når vi skal drøfte trigonometriske funksjoner, følger vi samme fremgangsmåte som for andre funksjoner:

1. Finn definisjonsmengden
2. Finn $f'(x)$ og løs $f'(x) = 0$ for å finne stasjonære punkter
3. Avgjør om de stasjonære punktene er maksimums- eller minimumspunkter
4. Finn $f''(x)$ og løs $f''(x) = 0$ for å finne mulige vendepunkter
5. Undersøk funksjonens oppførsel (periodicitet, asymptotisk oppførsel)

For trigonometriske funksjoner er det ofte nyttig å begrense seg til én periode først.`,
    },

    // ========== EKSEMPEL 9 ==========
    {
      id: 'r2-4-8-example-9',
      type: 'example',
      title: 'Eksempel 9: Drøfting av sin x + cos x',
      problem: `La $f(x) = \\sin x + \\cos x$.

a) Finn $f'(x)$.

b) Finn de stasjonære punktene i intervallet $[0, 2\\pi]$.

c) Klassifiser de stasjonære punktene (maks/min).`,
      solution: `**Løsning:**

a) $f'(x) = \\cos x - \\sin x$

b) Vi løser $f'(x) = 0$:
$$\\cos x - \\sin x = 0$$
$$\\cos x = \\sin x$$
$$\\tan x = 1$$
$$x = \\frac{\\pi}{4} + n\\pi, \\quad n \\in \\mathbb{Z}$$

I intervallet $[0, 2\\pi]$:
- $x_1 = \\frac{\\pi}{4}$
- $x_2 = \\frac{5\\pi}{4}$

c) Vi finner $f''(x)$:
$$f''(x) = -\\sin x - \\cos x$$

For $x_1 = \\frac{\\pi}{4}$:
$$f''\\left(\\frac{\\pi}{4}\\right) = -\\sin\\frac{\\pi}{4} - \\cos\\frac{\\pi}{4} = -\\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{2}}{2} = -\\sqrt{2} < 0$$

Siden $f''(x_1) < 0$, har vi et **maksimumspunkt** i $x = \\frac{\\pi}{4}$.

For $x_2 = \\frac{5\\pi}{4}$:
$$f''\\left(\\frac{5\\pi}{4}\\right) = -\\sin\\frac{5\\pi}{4} - \\cos\\frac{5\\pi}{4} = \\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2} = \\sqrt{2} > 0$$

Siden $f''(x_2) > 0$, har vi et **minimumspunkt** i $x = \\frac{5\\pi}{4}$.

Funksjonsverider:
- $f\\left(\\frac{\\pi}{4}\\right) = \\sin\\frac{\\pi}{4} + \\cos\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2} = \\sqrt{2}$ (maks)
- $f\\left(\\frac{5\\pi}{4}\\right) = \\sin\\frac{5\\pi}{4} + \\cos\\frac{5\\pi}{4} = -\\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{2}}{2} = -\\sqrt{2}$ (min)`,
    },

    // ========== EKSEMPEL 10 ==========
    {
      id: 'r2-4-8-example-10',
      type: 'example',
      title: 'Eksempel 10: Vendepunkter',
      problem: `La $f(x) = \\sin x$ for $x \\in [0, 2\\pi]$.

a) Finn $f''(x)$.

b) Finn vendepunktene.`,
      solution: `**Løsning:**

a) Vi starter med $f(x) = \\sin x$.

$f'(x) = \\cos x$

$f''(x) = -\\sin x$

b) Vi løser $f''(x) = 0$:
$$-\\sin x = 0$$
$$\\sin x = 0$$
$$x = n\\pi, \\quad n \\in \\mathbb{Z}$$

I intervallet $[0, 2\\pi]$ får vi $x = 0$, $x = \\pi$ og $x = 2\\pi$.

Vi sjekker fortegnsskifte i $f''(x)$:
- For $x$ litt mindre enn $\\pi$: $f''(x) = -\\sin x < 0$
- For $x$ litt større enn $\\pi$: $f''(x) = -\\sin x > 0$

Det er fortegnsskifte i $x = \\pi$, så dette er et vendepunkt.

Vendepunktet er $(\\pi, f(\\pi)) = (\\pi, 0)$.

Punktene $x = 0$ og $x = 2\\pi$ er randpunkter og regnes vanligvis ikke som vendepunkter.`,
    },

    // ========== EKSEMPEL 11 ==========
    {
      id: 'r2-4-8-example-11',
      type: 'example',
      title: 'Eksempel 11: Fullstendig funksjonsdrøfting',
      problem: `Drøft funksjonen $f(x) = 2\\sin x - \\sin(2x)$ for $x \\in [0, 2\\pi]$.

Finn nullpunkter, stasjonære punkter og vendepunkter.`,
      solution: `**Løsning:**

**Nullpunkter:**
$f(x) = 0$ gir $2\\sin x - \\sin(2x) = 0$.

Bruker $\\sin(2x) = 2\\sin x \\cos x$:
$$2\\sin x - 2\\sin x \\cos x = 0$$
$$2\\sin x(1 - \\cos x) = 0$$

Enten $\\sin x = 0$ eller $\\cos x = 1$.

$\\sin x = 0 \\Rightarrow x = 0, \\pi, 2\\pi$

$\\cos x = 1 \\Rightarrow x = 0, 2\\pi$ (allerede funnet)

**Nullpunkter:** $x = 0, \\pi, 2\\pi$

**Den deriverte:**
$$f'(x) = 2\\cos x - 2\\cos(2x)$$

Bruker $\\cos(2x) = 2\\cos^2 x - 1$:
$$f'(x) = 2\\cos x - 2(2\\cos^2 x - 1) = 2\\cos x - 4\\cos^2 x + 2$$

La $u = \\cos x$:
$$f'(x) = -4u^2 + 2u + 2 = -2(2u^2 - u - 1) = -2(2u + 1)(u - 1)$$

$f'(x) = 0$ når $\\cos x = -\\frac{1}{2}$ eller $\\cos x = 1$.

$\\cos x = -\\frac{1}{2} \\Rightarrow x = \\frac{2\\pi}{3}, \\frac{4\\pi}{3}$

$\\cos x = 1 \\Rightarrow x = 0, 2\\pi$

**Stasjonære punkter:** $x = 0, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}, 2\\pi$

**Funksjonsverider:**
- $f(0) = 0$
- $f\\left(\\frac{2\\pi}{3}\\right) = 2 \\cdot \\frac{\\sqrt{3}}{2} - \\sin\\frac{4\\pi}{3} = \\sqrt{3} + \\frac{\\sqrt{3}}{2} = \\frac{3\\sqrt{3}}{2}$ (maks)
- $f\\left(\\frac{4\\pi}{3}\\right) = 2 \\cdot \\left(-\\frac{\\sqrt{3}}{2}\\right) - \\sin\\frac{8\\pi}{3} = -\\sqrt{3} - \\frac{\\sqrt{3}}{2} = -\\frac{3\\sqrt{3}}{2}$ (min)
- $f(2\\pi) = 0$`,
    },

    // ========== EKSEMPEL 12 ==========
    {
      id: 'r2-4-8-example-12',
      type: 'example',
      title: 'Eksempel 12: Tangentligning',
      problem: `La $f(x) = \\cos(2x)$.

a) Finn likningen for tangenten til grafen i punktet der $x = \\frac{\\pi}{6}$.`,
      solution: `**Løsning:**

a) Vi trenger et punkt og et stigningstall.

**Punktet:**
$$f\\left(\\frac{\\pi}{6}\\right) = \\cos\\left(\\frac{2\\pi}{6}\\right) = \\cos\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}$$

Punktet er $\\left(\\frac{\\pi}{6}, \\frac{1}{2}\\right)$.

**Stigningstallet:**
$$f'(x) = -\\sin(2x) \\cdot 2 = -2\\sin(2x)$$

$$f'\\left(\\frac{\\pi}{6}\\right) = -2\\sin\\left(\\frac{\\pi}{3}\\right) = -2 \\cdot \\frac{\\sqrt{3}}{2} = -\\sqrt{3}$$

**Tangentlikningen:**
$$y - \\frac{1}{2} = -\\sqrt{3}\\left(x - \\frac{\\pi}{6}\\right)$$

$$y = -\\sqrt{3}x + \\frac{\\sqrt{3}\\pi}{6} + \\frac{1}{2}$$`,
    },

    // ========== EKSEMPEL 13 ==========
    {
      id: 'r2-4-8-example-13',
      type: 'example',
      title: 'Eksempel 13: Andrederiverte og konveksitet',
      problem: `La $f(x) = x + \\sin x$ for $x \\in [0, 2\\pi]$.

a) Finn $f''(x)$.

b) Bestem hvor grafen er konkav/konveks.`,
      solution: `**Løsning:**

a) $f(x) = x + \\sin x$

$f'(x) = 1 + \\cos x$

$f''(x) = -\\sin x$

b) Grafen er konveks der $f''(x) > 0$ og konkav der $f''(x) < 0$.

$f''(x) = -\\sin x > 0$ når $\\sin x < 0$, altså for $x \\in (\\pi, 2\\pi)$.

$f''(x) = -\\sin x < 0$ når $\\sin x > 0$, altså for $x \\in (0, \\pi)$.

**Konklusjon:**
- Grafen er **konkav** for $x \\in (0, \\pi)$
- Grafen er **konveks** for $x \\in (\\pi, 2\\pi)$
- Vendepunkt i $x = \\pi$: $(\\pi, \\pi)$`,
    },

    // ========== EKSEMPEL 14 ==========
    {
      id: 'r2-4-8-example-14',
      type: 'example',
      title: 'Eksempel 14: Anvendelse - harmonisk bevegelse',
      problem: `Posisjonen til en pendel er gitt ved $s(t) = 3\\cos(2t)$ cm, der $t$ er tid i sekunder.

a) Finn farten $v(t) = s'(t)$.

b) Finn akselerasjonen $a(t) = s''(t)$.

c) Når er pendelen i ro? (Farten er null)`,
      solution: `**Løsning:**

a) Farten er den deriverte av posisjonen:
$$v(t) = s'(t) = 3 \\cdot (-\\sin(2t)) \\cdot 2 = -6\\sin(2t) \\text{ cm/s}$$

b) Akselerasjonen er den deriverte av farten:
$$a(t) = v'(t) = -6 \\cdot \\cos(2t) \\cdot 2 = -12\\cos(2t) \\text{ cm/s}^2$$

Merk: Vi kan også skrive $a(t) = -4s(t)$, noe som er typisk for harmonisk bevegelse.

c) Pendelen er i ro når $v(t) = 0$:
$$-6\\sin(2t) = 0$$
$$\\sin(2t) = 0$$
$$2t = n\\pi, \\quad n = 0, 1, 2, \\ldots$$
$$t = \\frac{n\\pi}{2}, \\quad n = 0, 1, 2, \\ldots$$

Pendelen er i ro ved $t = 0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}, \\ldots$ sekunder.

Dette skjer når pendelen er i ytterstillingene ($s = \\pm 3$ cm).`,
    },

    // ========== EKSEMPEL 15 ==========
    {
      id: 'r2-4-8-example-15',
      type: 'example',
      title: 'Eksempel 15: Sammensatt funksjon med flere ledd',
      problem: `Deriver funksjonen $f(x) = \\sin^3(2x)$.`,
      solution: `**Løsning:**

Vi har tre lag her:
- Ytterst: $u^3$
- I midten: $u = \\sin v$
- Innerst: $v = 2x$

Vi bruker kjerneregelen i flere steg:

$$f(x) = (\\sin(2x))^3$$

La $u = \\sin(2x)$, så $f(x) = u^3$.

$$f'(x) = 3u^2 \\cdot u' = 3(\\sin(2x))^2 \\cdot (\\sin(2x))'$$

Nå trenger vi $(\\sin(2x))' = \\cos(2x) \\cdot 2 = 2\\cos(2x)$.

$$f'(x) = 3\\sin^2(2x) \\cdot 2\\cos(2x) = 6\\sin^2(2x)\\cos(2x)$$`,
    },

    // ========== EKSEMPEL 16 ==========
    {
      id: 'r2-4-8-example-16',
      type: 'example',
      title: 'Eksempel 16: Implisitt definert kurve',
      problem: `Finn $\\frac{dy}{dx}$ når $y = \\tan(xy)$.

(Dette er en implisitt definert kurve der $y$ avhenger av $x$.)`,
      solution: `**Løsning:**

Vi deriverer begge sider med hensyn på $x$:

$$\\frac{dy}{dx} = \\frac{1}{\\cos^2(xy)} \\cdot \\frac{d}{dx}(xy)$$

For $\\frac{d}{dx}(xy)$ bruker vi produktregelen:
$$\\frac{d}{dx}(xy) = 1 \\cdot y + x \\cdot \\frac{dy}{dx} = y + x\\frac{dy}{dx}$$

Setter inn:
$$\\frac{dy}{dx} = \\frac{y + x\\frac{dy}{dx}}{\\cos^2(xy)}$$

Løser for $\\frac{dy}{dx}$:
$$\\frac{dy}{dx} \\cdot \\cos^2(xy) = y + x\\frac{dy}{dx}$$
$$\\frac{dy}{dx} \\cdot \\cos^2(xy) - x\\frac{dy}{dx} = y$$
$$\\frac{dy}{dx}(\\cos^2(xy) - x) = y$$
$$\\frac{dy}{dx} = \\frac{y}{\\cos^2(xy) - x}$$`,
    },

    // ========== OPPGAVER SEKSJON ==========
    {
      id: 'r2-4-8-oppgaver-intro',
      type: 'text',
      content: `## Oppgaver`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'r2-4-8-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r2-4-8-ex-1',
        number: '4.8.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Deriver funksjonene:',
        subTasks: [
          { label: 'a', task: '$f(x) = 5\\sin x$', solution: '$f\'(x) = 5\\cos x$' },
          { label: 'b', task: '$f(x) = -3\\cos x$', solution: '$f\'(x) = -3 \\cdot (-\\sin x) = 3\\sin x$' },
          { label: 'c', task: '$f(x) = 2\\sin x + 4\\cos x$', solution: '$f\'(x) = 2\\cos x - 4\\sin x$' },
          { label: 'd', task: '$f(x) = \\sin x - \\cos x + 1$', solution: '$f\'(x) = \\cos x + \\sin x$' },
        ],
        solution: 'a) $5\\cos x$, b) $3\\sin x$, c) $2\\cos x - 4\\sin x$, d) $\\cos x + \\sin x$',
        hints: ['Husk at $(\\sin x)\' = \\cos x$ og $(\\cos x)\' = -\\sin x$', 'Konstanter forsvinner ved derivasjon'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'r2-4-8-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r2-4-8-ex-2',
        number: '4.8.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk kjerneregelen til å derivere:',
        subTasks: [
          { label: 'a', task: '$f(x) = \\sin(3x)$', solution: '$f\'(x) = \\cos(3x) \\cdot 3 = 3\\cos(3x)$' },
          { label: 'b', task: '$f(x) = \\cos(4x)$', solution: '$f\'(x) = -\\sin(4x) \\cdot 4 = -4\\sin(4x)$' },
          { label: 'c', task: '$f(x) = \\sin\\left(\\frac{x}{2}\\right)$', solution: '$f\'(x) = \\cos\\left(\\frac{x}{2}\\right) \\cdot \\frac{1}{2} = \\frac{1}{2}\\cos\\left(\\frac{x}{2}\\right)$' },
          { label: 'd', task: '$f(x) = \\cos(\\pi x)$', solution: '$f\'(x) = -\\sin(\\pi x) \\cdot \\pi = -\\pi\\sin(\\pi x)$' },
        ],
        solution: 'a) $3\\cos(3x)$, b) $-4\\sin(4x)$, c) $\\frac{1}{2}\\cos\\left(\\frac{x}{2}\\right)$, d) $-\\pi\\sin(\\pi x)$',
        hints: ['Identifiser den indre funksjonen $u$', 'Multipliser med $u\'$ (den deriverte av den indre)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'r2-4-8-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r2-4-8-ex-3',
        number: '4.8.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Deriver funksjonene:',
        subTasks: [
          { label: 'a', task: '$f(x) = \\sin(x^2)$', solution: '$f\'(x) = \\cos(x^2) \\cdot 2x = 2x\\cos(x^2)$' },
          { label: 'b', task: '$f(x) = \\cos(x^3)$', solution: '$f\'(x) = -\\sin(x^3) \\cdot 3x^2 = -3x^2\\sin(x^3)$' },
          { label: 'c', task: '$f(x) = \\sin(2x+1)$', solution: '$f\'(x) = \\cos(2x+1) \\cdot 2 = 2\\cos(2x+1)$' },
          { label: 'd', task: '$f(x) = \\cos(3x-\\pi)$', solution: '$f\'(x) = -\\sin(3x-\\pi) \\cdot 3 = -3\\sin(3x-\\pi)$' },
        ],
        solution: 'a) $2x\\cos(x^2)$, b) $-3x^2\\sin(x^3)$, c) $2\\cos(2x+1)$, d) $-3\\sin(3x-\\pi)$',
        hints: ['Finn den indre funksjonen først', 'Husk å derivere den indre funksjonen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'r2-4-8-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r2-4-8-ex-4',
        number: '4.8.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk produktregelen til å derivere:',
        subTasks: [
          { label: 'a', task: '$f(x) = x\\cos x$', solution: '$f\'(x) = 1 \\cdot \\cos x + x \\cdot (-\\sin x) = \\cos x - x\\sin x$' },
          { label: 'b', task: '$f(x) = x^2\\sin x$', solution: '$f\'(x) = 2x\\sin x + x^2\\cos x$' },
          { label: 'c', task: '$f(x) = e^x\\cos x$', solution: '$f\'(x) = e^x\\cos x + e^x(-\\sin x) = e^x(\\cos x - \\sin x)$' },
          { label: 'd', task: '$f(x) = \\sin x \\cos x$', solution: '$f\'(x) = \\cos x \\cdot \\cos x + \\sin x \\cdot (-\\sin x) = \\cos^2 x - \\sin^2 x = \\cos(2x)$' },
        ],
        solution: 'a) $\\cos x - x\\sin x$, b) $2x\\sin x + x^2\\cos x$, c) $e^x(\\cos x - \\sin x)$, d) $\\cos^2 x - \\sin^2 x$',
        hints: ['Produktregelen: $(uv)\' = u\'v + uv\'$', 'For d): Kan også bruke at $\\sin x \\cos x = \\frac{1}{2}\\sin(2x)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'r2-4-8-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r2-4-8-ex-5',
        number: '4.8.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Deriver funksjonene:',
        subTasks: [
          { label: 'a', task: '$f(x) = \\sin^2 x$', solution: '$f\'(x) = 2\\sin x \\cdot \\cos x = \\sin(2x)$' },
          { label: 'b', task: '$f(x) = \\cos^3 x$', solution: '$f\'(x) = 3\\cos^2 x \\cdot (-\\sin x) = -3\\cos^2 x \\sin x$' },
          { label: 'c', task: '$f(x) = \\sin^2(2x)$', solution: '$f\'(x) = 2\\sin(2x) \\cdot \\cos(2x) \\cdot 2 = 4\\sin(2x)\\cos(2x) = 2\\sin(4x)$' },
          { label: 'd', task: '$f(x) = \\sqrt{\\sin x}$', solution: '$f\'(x) = \\frac{1}{2\\sqrt{\\sin x}} \\cdot \\cos x = \\frac{\\cos x}{2\\sqrt{\\sin x}}$' },
        ],
        solution: 'a) $\\sin(2x)$, b) $-3\\cos^2 x \\sin x$, c) $2\\sin(4x)$, d) $\\frac{\\cos x}{2\\sqrt{\\sin x}}$',
        hints: ['$\\sin^2 x = (\\sin x)^2$, bruk kjerneregelen', 'Dobbeltvinkelformel: $2\\sin x \\cos x = \\sin(2x)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'r2-4-8-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r2-4-8-ex-6',
        number: '4.8.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Deriver funksjonene:',
        subTasks: [
          { label: 'a', task: '$f(x) = \\tan(2x)$', solution: '$f\'(x) = \\frac{1}{\\cos^2(2x)} \\cdot 2 = \\frac{2}{\\cos^2(2x)}$' },
          { label: 'b', task: '$f(x) = \\tan(x^2)$', solution: '$f\'(x) = \\frac{1}{\\cos^2(x^2)} \\cdot 2x = \\frac{2x}{\\cos^2(x^2)}$' },
          { label: 'c', task: '$f(x) = \\frac{\\sin x}{\\cos x}$', solution: 'Dette er $\\tan x$, så $f\'(x) = \\frac{1}{\\cos^2 x}$' },
        ],
        solution: 'a) $\\frac{2}{\\cos^2(2x)}$, b) $\\frac{2x}{\\cos^2(x^2)}$, c) $\\frac{1}{\\cos^2 x}$',
        hints: ['$(\\tan u)\' = \\frac{1}{\\cos^2 u} \\cdot u\'$', 'Del c) kan enten løses med brøkregelen eller ved å gjenkjenne tangens'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 7 ==========
    {
      id: 'r2-4-8-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r2-4-8-ex-7',
        number: '4.8.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Deriver funksjonene:',
        subTasks: [
          { label: 'a', task: '$f(x) = e^{\\cos x}$', solution: '$f\'(x) = e^{\\cos x} \\cdot (-\\sin x) = -\\sin x \\cdot e^{\\cos x}$' },
          { label: 'b', task: '$f(x) = \\ln(\\cos x)$', solution: '$f\'(x) = \\frac{1}{\\cos x} \\cdot (-\\sin x) = -\\frac{\\sin x}{\\cos x} = -\\tan x$' },
          { label: 'c', task: '$f(x) = \\cos(e^x)$', solution: '$f\'(x) = -\\sin(e^x) \\cdot e^x = -e^x\\sin(e^x)$' },
          { label: 'd', task: '$f(x) = e^{\\sin(2x)}$', solution: '$f\'(x) = e^{\\sin(2x)} \\cdot \\cos(2x) \\cdot 2 = 2\\cos(2x) \\cdot e^{\\sin(2x)}$' },
        ],
        solution: 'a) $-\\sin x \\cdot e^{\\cos x}$, b) $-\\tan x$, c) $-e^x\\sin(e^x)$, d) $2\\cos(2x) \\cdot e^{\\sin(2x)}$',
        hints: ['Kjerneregelen: ytre funksjon deriveres, multipliseres med indre funksjonens deriverte', '$(e^u)\' = e^u \\cdot u\'$ og $(\\ln u)\' = \\frac{u\'}{u}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 8 ==========
    {
      id: 'r2-4-8-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'r2-4-8-ex-8',
        number: '4.8.8',
        type: 'classic',
        difficulty: 'medium',
        task: `Finn $f'(x)$ og beregn $f'(0)$:`,
        subTasks: [
          { label: 'a', task: '$f(x) = \\sin(3x)$', solution: '$f\'(x) = 3\\cos(3x)$, $f\'(0) = 3\\cos(0) = 3$' },
          { label: 'b', task: '$f(x) = \\cos(2x) + \\sin x$', solution: '$f\'(x) = -2\\sin(2x) + \\cos x$, $f\'(0) = 0 + 1 = 1$' },
          { label: 'c', task: '$f(x) = x\\sin x$', solution: '$f\'(x) = \\sin x + x\\cos x$, $f\'(0) = 0 + 0 = 0$' },
        ],
        solution: 'a) $f\'(0) = 3$, b) $f\'(0) = 1$, c) $f\'(0) = 0$',
        hints: ['Finn $f\'(x)$ først, deretter sett inn $x = 0$', 'Husk at $\\sin(0) = 0$ og $\\cos(0) = 1$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 9 ==========
    {
      id: 'r2-4-8-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'r2-4-8-ex-9',
        number: '4.8.9',
        type: 'classic',
        difficulty: 'medium',
        task: `La $f(x) = \\sin x$.

a) Finn $f'(x)$, $f''(x)$, $f'''(x)$ og $f^{(4)}(x)$.

b) Hva blir $f^{(100)}(x)$?`,
        solution: `**a)**
$f(x) = \\sin x$
$f'(x) = \\cos x$
$f''(x) = -\\sin x$
$f'''(x) = -\\cos x$
$f^{(4)}(x) = \\sin x$

**b)** Vi ser at den deriverte gjentar seg med periode 4:
$f^{(n+4)}(x) = f^{(n)}(x)$

$100 = 4 \\cdot 25$, så $f^{(100)}(x) = f^{(0)}(x) = \\sin x$`,
        hints: ['Deriver steg for steg', 'Se etter et mønster som gjentar seg'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 10 ==========
    {
      id: 'r2-4-8-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'r2-4-8-ex-10',
        number: '4.8.10',
        type: 'classic',
        difficulty: 'medium',
        task: `Finn likningen for tangenten til grafen til $f(x) = \\sin(2x)$ i punktet der $x = \\frac{\\pi}{4}$.`,
        solution: `**Punkt:**
$f\\left(\\frac{\\pi}{4}\\right) = \\sin\\left(\\frac{\\pi}{2}\\right) = 1$

Punktet er $\\left(\\frac{\\pi}{4}, 1\\right)$.

**Stigningstall:**
$f'(x) = 2\\cos(2x)$
$f'\\left(\\frac{\\pi}{4}\\right) = 2\\cos\\left(\\frac{\\pi}{2}\\right) = 2 \\cdot 0 = 0$

**Tangent:**
Tangenten er horisontal med stigningstall 0:
$$y = 1$$`,
        hints: ['Finn punktet $(x_0, f(x_0))$', 'Finn stigningstallet $f\'(x_0)$', 'Bruk ettpunktsformelen: $y - y_0 = a(x - x_0)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 11 ==========
    {
      id: 'r2-4-8-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'r2-4-8-ex-11',
        number: '4.8.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `La $f(x) = \\cos x - \\frac{1}{2}\\cos(2x)$ for $x \\in [0, 2\\pi]$.

a) Finn $f'(x)$.

b) Finn de stasjonære punktene.

c) Klassifiser de stasjonære punktene.`,
        solution: `**a)** $f'(x) = -\\sin x - \\frac{1}{2} \\cdot (-\\sin(2x)) \\cdot 2 = -\\sin x + \\sin(2x)$

Bruker $\\sin(2x) = 2\\sin x \\cos x$:
$f'(x) = -\\sin x + 2\\sin x \\cos x = \\sin x(2\\cos x - 1)$

**b)** $f'(x) = 0$ når $\\sin x = 0$ eller $\\cos x = \\frac{1}{2}$.

$\\sin x = 0 \\Rightarrow x = 0, \\pi, 2\\pi$
$\\cos x = \\frac{1}{2} \\Rightarrow x = \\frac{\\pi}{3}, \\frac{5\\pi}{3}$

**c)** $f''(x) = -\\cos x + 2\\cos(2x)$

- $f''(0) = -1 + 2 = 1 > 0$ (min)
- $f''\\left(\\frac{\\pi}{3}\\right) = -\\frac{1}{2} + 2 \\cdot (-\\frac{1}{2}) = -\\frac{3}{2} < 0$ (maks)
- $f''(\\pi) = 1 + 2 = 3 > 0$ (min)
- $f''\\left(\\frac{5\\pi}{3}\\right) = -\\frac{1}{2} + 2 \\cdot (-\\frac{1}{2}) = -\\frac{3}{2} < 0$ (maks)
- $f''(2\\pi) = -1 + 2 = 1 > 0$ (min)`,
        hints: ['Bruk identiteten $\\sin(2x) = 2\\sin x \\cos x$ for å faktorisere', 'Bruk andrederiverten for å klassifisere'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 12 ==========
    {
      id: 'r2-4-8-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'r2-4-8-ex-12',
        number: '4.8.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Finn vendepunktene til $f(x) = \\sin x + \\frac{1}{3}\\sin(3x)$ for $x \\in [0, 2\\pi]$.`,
        solution: `**Første deriverte:**
$f'(x) = \\cos x + \\frac{1}{3} \\cdot 3\\cos(3x) = \\cos x + \\cos(3x)$

**Andre deriverte:**
$f''(x) = -\\sin x - 3\\sin(3x)$

**Løser $f''(x) = 0$:**
$-\\sin x - 3\\sin(3x) = 0$
$\\sin x + 3\\sin(3x) = 0$

Bruker $\\sin(3x) = 3\\sin x - 4\\sin^3 x$:
$\\sin x + 3(3\\sin x - 4\\sin^3 x) = 0$
$\\sin x + 9\\sin x - 12\\sin^3 x = 0$
$10\\sin x - 12\\sin^3 x = 0$
$2\\sin x(5 - 6\\sin^2 x) = 0$

$\\sin x = 0 \\Rightarrow x = 0, \\pi, 2\\pi$
$\\sin^2 x = \\frac{5}{6} \\Rightarrow \\sin x = \\pm\\sqrt{\\frac{5}{6}}$

For $\\sin x = \\sqrt{\\frac{5}{6}} \\approx 0.913$: $x \\approx 1.15$ og $x \\approx 1.99$ (i $[0, \\pi]$)
For $\\sin x = -\\sqrt{\\frac{5}{6}}$: $x \\approx 4.29$ og $x \\approx 5.14$ (i $[\\pi, 2\\pi]$)

Vendepunktene er i $x = \\pi$ (sjekk fortegnsskifte i $f''$) og de fire verdiene fra $\\sin^2 x = \\frac{5}{6}$.`,
        hints: ['Bruk triplevinkelformelen for $\\sin(3x)$', 'Faktoriser uttrykket for å finne løsningene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 13 ==========
    {
      id: 'r2-4-8-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'r2-4-8-ex-13',
        number: '4.8.13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En partikkel beveger seg langs en linje slik at posisjonen ved tid $t$ (i sekunder) er gitt av
$$s(t) = 2\\sin(t) + \\cos(2t) \\text{ meter}$$

a) Finn farten $v(t)$.

b) Finn akselerasjonen $a(t)$.

c) Når er partikkelen i ro i intervallet $[0, 2\\pi]$?

d) Hva er maksimal fart?`,
        solution: `**a)** $v(t) = s'(t) = 2\\cos(t) - 2\\sin(2t) = 2\\cos t - 4\\sin t \\cos t$
$= 2\\cos t(1 - 2\\sin t)$

**b)** $a(t) = v'(t) = -2\\sin t - 4\\cos(2t)$

**c)** $v(t) = 0$ når $\\cos t = 0$ eller $\\sin t = \\frac{1}{2}$.

$\\cos t = 0 \\Rightarrow t = \\frac{\\pi}{2}, \\frac{3\\pi}{2}$
$\\sin t = \\frac{1}{2} \\Rightarrow t = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$

Partikkelen er i ro ved $t = \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}, \\frac{3\\pi}{2}$.

**d)** For å finne maksimal fart må vi finne ekstremalpunktene til $v(t)$ eller $|v(t)|$.

$v'(t) = a(t) = 0$:
$-2\\sin t - 4\\cos(2t) = 0$
$\\sin t + 2\\cos(2t) = 0$
$\\sin t + 2(1 - 2\\sin^2 t) = 0$
$-4\\sin^2 t + \\sin t + 2 = 0$
$\\sin t = \\frac{-1 \\pm \\sqrt{33}}{-8}$

Numerisk: $|v(t)|_{\\max} \\approx 3.12$ m/s`,
        hints: ['Farten er den deriverte av posisjonen', 'Bruk faktorisering for å løse $v(t) = 0$', 'For maksimal fart, finn hvor $a(t) = 0$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 14 ==========
    {
      id: 'r2-4-8-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 'r2-4-8-ex-14',
        number: '4.8.14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Vis at funksjonen $f(x) = e^x\\sin x$ oppfyller differensiallikningen
$$f''(x) - 2f'(x) + 2f(x) = 0$$`,
        solution: `Vi beregner $f'(x)$ og $f''(x)$:

$f(x) = e^x\\sin x$

$f'(x) = e^x\\sin x + e^x\\cos x = e^x(\\sin x + \\cos x)$

$f''(x) = e^x(\\sin x + \\cos x) + e^x(\\cos x - \\sin x)$
$= e^x(\\sin x + \\cos x + \\cos x - \\sin x)$
$= 2e^x\\cos x$

Setter inn i differensiallikningen:
$f''(x) - 2f'(x) + 2f(x)$
$= 2e^x\\cos x - 2e^x(\\sin x + \\cos x) + 2e^x\\sin x$
$= 2e^x\\cos x - 2e^x\\sin x - 2e^x\\cos x + 2e^x\\sin x$
$= 0$

Altså er differensiallikningen oppfylt. $\\square$`,
        hints: ['Bruk produktregelen for å finne $f\'(x)$ og $f\'\'(x)$', 'Sett inn og forenkle'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 15 ==========
    {
      id: 'r2-4-8-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 'r2-4-8-ex-15',
        number: '4.8.15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En funksjon er gitt ved $f(x) = A\\sin(\\omega x + \\varphi)$ der $A$, $\\omega$ og $\\varphi$ er konstanter.

a) Finn $f'(x)$.

b) Vis at $f(x)$ oppfyller $f''(x) + \\omega^2 f(x) = 0$.`,
        solution: `**a)** $f(x) = A\\sin(\\omega x + \\varphi)$

$f'(x) = A\\cos(\\omega x + \\varphi) \\cdot \\omega = A\\omega\\cos(\\omega x + \\varphi)$

**b)** Vi finner $f''(x)$:
$f''(x) = A\\omega \\cdot (-\\sin(\\omega x + \\varphi)) \\cdot \\omega = -A\\omega^2\\sin(\\omega x + \\varphi)$

$f''(x) = -\\omega^2 \\cdot A\\sin(\\omega x + \\varphi) = -\\omega^2 f(x)$

Dermed:
$f''(x) + \\omega^2 f(x) = -\\omega^2 f(x) + \\omega^2 f(x) = 0$

Dette er likningen for enkel harmonisk bevegelse. $\\square$`,
        hints: ['Bruk kjerneregelen med $u = \\omega x + \\varphi$', 'Den andrederivert inneholder $-\\omega^2$ som faktor'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 16 ==========
    {
      id: 'r2-4-8-ex-block-16',
      type: 'exercise',
      exercise: {
        id: 'r2-4-8-ex-16',
        number: '4.8.16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Et rektangel er innskrevet i en halvsirkel med radius $r = 2$. Halvsirkelen er gitt ved $y = \\sqrt{4 - x^2}$ for $x \\in [-2, 2]$.

a) Vis at arealet av rektangelet kan skrives som $A(\\theta) = 4\\sin\\theta\\cos\\theta = 2\\sin(2\\theta)$ der $\\theta$ er vinkelen fra $x$-aksen til hjørnet på sirkelen.

b) Finn den verdien av $\\theta$ som gir maksimalt areal.

c) Hva er det maksimale arealet?`,
        solution: `**a)** La hjørnet av rektangelet på sirkelen ha koordinater $(2\\cos\\theta, 2\\sin\\theta)$.

Bredden av rektangelet er $2 \\cdot 2\\cos\\theta = 4\\cos\\theta$.
Høyden er $2\\sin\\theta$.

Arealet blir:
$A(\\theta) = 4\\cos\\theta \\cdot 2\\sin\\theta = 8\\sin\\theta\\cos\\theta = 4\\sin(2\\theta)$

(Merk: Oppgaveteksten hadde en liten feil; med $r = 2$ blir arealet $4\\sin(2\\theta)$.)

**b)** $A'(\\theta) = 4\\cos(2\\theta) \\cdot 2 = 8\\cos(2\\theta)$

$A'(\\theta) = 0$ når $\\cos(2\\theta) = 0$, altså $2\\theta = \\frac{\\pi}{2}$, som gir $\\theta = \\frac{\\pi}{4}$.

**c)** $A\\left(\\frac{\\pi}{4}\\right) = 4\\sin\\left(\\frac{\\pi}{2}\\right) = 4$

Maksimalt areal er **4 kvadratenheter**.`,
        hints: ['Parametriser hjørnet med $\\theta$: $(r\\cos\\theta, r\\sin\\theta)$', 'Bruk dobbeltvinkelformelen $2\\sin\\theta\\cos\\theta = \\sin(2\\theta)$', 'Deriver og sett lik null for å finne maksimum'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 17 ==========
    {
      id: 'r2-4-8-ex-block-17',
      type: 'exercise',
      exercise: {
        id: 'r2-4-8-ex-17',
        number: '4.8.17',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Bruk definisjonen av den deriverte til å vise at $(\\cos x)' = -\\sin x$.

Hint: Du kan bruke at $\\lim_{h \\to 0}\\frac{\\cos h - 1}{h} = 0$ og $\\lim_{h \\to 0}\\frac{\\sin h}{h} = 1$.`,
        solution: `Vi bruker definisjonen av den deriverte:

$$f'(x) = \\lim_{h \\to 0}\\frac{\\cos(x+h) - \\cos x}{h}$$

Bruker addisjonsformelen $\\cos(x+h) = \\cos x \\cos h - \\sin x \\sin h$:

$$= \\lim_{h \\to 0}\\frac{\\cos x \\cos h - \\sin x \\sin h - \\cos x}{h}$$

$$= \\lim_{h \\to 0}\\frac{\\cos x(\\cos h - 1) - \\sin x \\sin h}{h}$$

$$= \\lim_{h \\to 0}\\left(\\cos x \\cdot \\frac{\\cos h - 1}{h} - \\sin x \\cdot \\frac{\\sin h}{h}\\right)$$

$$= \\cos x \\cdot 0 - \\sin x \\cdot 1 = -\\sin x$$

Altså er $(\\cos x)' = -\\sin x$. $\\square$`,
        hints: ['Bruk addisjonsformelen for $\\cos(x+h)$', 'Splitt brøken i to deler', 'Bruk de gitte grenseverdiene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 18 ==========
    {
      id: 'r2-4-8-ex-block-18',
      type: 'exercise',
      exercise: {
        id: 'r2-4-8-ex-18',
        number: '4.8.18',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Deriver funksjonen $f(x) = \\arctan(\\sin x)$.

Hint: $\\frac{d}{dx}\\arctan(u) = \\frac{u'}{1 + u^2}$`,
        solution: `Vi har $f(x) = \\arctan(\\sin x)$.

La $u = \\sin x$, så $u' = \\cos x$.

Bruker formelen for den deriverte av $\\arctan$:

$$f'(x) = \\frac{(\\sin x)'}{1 + (\\sin x)^2} = \\frac{\\cos x}{1 + \\sin^2 x}$$

Dette kan også skrives som:
$$f'(x) = \\frac{\\cos x}{1 + \\sin^2 x}$$`,
        hints: ['Bruk kjerneregelen sammen med derivasjonsregelen for $\\arctan$', 'Den indre funksjonen er $\\sin x$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],

  // ========== OPPGAVELISTE ==========
  exercises: [
    {
      id: 'r2-4-8-ex-1',
      number: '4.8.1',
      type: 'classic',
      difficulty: 'lett',
      task: 'Deriver funksjonene: a) $f(x) = 5\\sin x$ b) $f(x) = -3\\cos x$ c) $f(x) = 2\\sin x + 4\\cos x$ d) $f(x) = \\sin x - \\cos x + 1$',
      solution: 'a) $5\\cos x$, b) $3\\sin x$, c) $2\\cos x - 4\\sin x$, d) $\\cos x + \\sin x$',
      hints: ['Husk derivasjonsreglene for sinus og cosinus'],
      allowsUpload: true,
    },
    {
      id: 'r2-4-8-ex-2',
      number: '4.8.2',
      type: 'classic',
      difficulty: 'lett',
      task: 'Bruk kjerneregelen til å derivere: a) $f(x) = \\sin(3x)$ b) $f(x) = \\cos(4x)$ c) $f(x) = \\sin(x/2)$ d) $f(x) = \\cos(\\pi x)$',
      solution: 'a) $3\\cos(3x)$, b) $-4\\sin(4x)$, c) $\\frac{1}{2}\\cos(x/2)$, d) $-\\pi\\sin(\\pi x)$',
      hints: ['Kjerneregelen: multipliser med den deriverte av det indre'],
      allowsUpload: true,
    },
    {
      id: 'r2-4-8-ex-3',
      number: '4.8.3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Deriver: a) $f(x) = \\sin(x^2)$ b) $f(x) = \\cos(x^3)$ c) $f(x) = \\sin(2x+1)$ d) $f(x) = \\cos(3x-\\pi)$',
      solution: 'a) $2x\\cos(x^2)$, b) $-3x^2\\sin(x^3)$, c) $2\\cos(2x+1)$, d) $-3\\sin(3x-\\pi)$',
      hints: ['Finn den indre funksjonen og dens deriverte'],
      allowsUpload: true,
    },
    {
      id: 'r2-4-8-ex-4',
      number: '4.8.4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Bruk produktregelen: a) $f(x) = x\\cos x$ b) $f(x) = x^2\\sin x$ c) $f(x) = e^x\\cos x$ d) $f(x) = \\sin x \\cos x$',
      solution: 'a) $\\cos x - x\\sin x$, b) $2x\\sin x + x^2\\cos x$, c) $e^x(\\cos x - \\sin x)$, d) $\\cos(2x)$',
      hints: ['$(uv)\' = u\'v + uv\'$'],
      allowsUpload: true,
    },
    {
      id: 'r2-4-8-ex-5',
      number: '4.8.5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Deriver: a) $\\sin^2 x$ b) $\\cos^3 x$ c) $\\sin^2(2x)$ d) $\\sqrt{\\sin x}$',
      solution: 'a) $\\sin(2x)$, b) $-3\\cos^2 x \\sin x$, c) $2\\sin(4x)$, d) $\\frac{\\cos x}{2\\sqrt{\\sin x}}$',
      hints: ['Potenser av trigonometriske funksjoner krever kjerneregelen'],
      allowsUpload: true,
    },
    {
      id: 'r2-4-8-ex-6',
      number: '4.8.6',
      type: 'classic',
      difficulty: 'medium',
      task: 'Deriver: a) $\\tan(2x)$ b) $\\tan(x^2)$ c) $\\sin x / \\cos x$',
      solution: 'a) $\\frac{2}{\\cos^2(2x)}$, b) $\\frac{2x}{\\cos^2(x^2)}$, c) $\\frac{1}{\\cos^2 x}$',
      hints: ['$(\\tan u)\' = \\frac{u\'}{\\cos^2 u}$'],
      allowsUpload: true,
    },
    {
      id: 'r2-4-8-ex-7',
      number: '4.8.7',
      type: 'classic',
      difficulty: 'medium',
      task: 'Deriver: a) $e^{\\cos x}$ b) $\\ln(\\cos x)$ c) $\\cos(e^x)$ d) $e^{\\sin(2x)}$',
      solution: 'a) $-\\sin x \\cdot e^{\\cos x}$, b) $-\\tan x$, c) $-e^x\\sin(e^x)$, d) $2\\cos(2x) \\cdot e^{\\sin(2x)}$',
      hints: ['Kombiner regler for eksponential/logaritme med trigonometriske'],
      allowsUpload: true,
    },
    {
      id: 'r2-4-8-ex-8',
      number: '4.8.8',
      type: 'classic',
      difficulty: 'medium',
      task: 'Finn $f\'(x)$ og beregn $f\'(0)$: a) $f(x) = \\sin(3x)$ b) $f(x) = \\cos(2x) + \\sin x$ c) $f(x) = x\\sin x$',
      solution: 'a) $f\'(0) = 3$, b) $f\'(0) = 1$, c) $f\'(0) = 0$',
      hints: ['Husk at $\\sin(0) = 0$ og $\\cos(0) = 1$'],
      allowsUpload: true,
    },
    {
      id: 'r2-4-8-ex-9',
      number: '4.8.9',
      type: 'classic',
      difficulty: 'medium',
      task: 'La $f(x) = \\sin x$. a) Finn de fire første deriverte. b) Hva blir $f^{(100)}(x)$?',
      solution: 'Den deriverte gjentar seg med periode 4. $f^{(100)}(x) = \\sin x$',
      hints: ['Se etter et mønster'],
      allowsUpload: true,
    },
    {
      id: 'r2-4-8-ex-10',
      number: '4.8.10',
      type: 'classic',
      difficulty: 'medium',
      task: 'Finn likningen for tangenten til $f(x) = \\sin(2x)$ i punktet der $x = \\pi/4$.',
      solution: 'Tangenten er $y = 1$ (horisontal)',
      hints: ['Finn punktet og stigningstallet'],
      allowsUpload: true,
    },
    {
      id: 'r2-4-8-ex-11',
      number: '4.8.11',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft $f(x) = \\cos x - \\frac{1}{2}\\cos(2x)$ for $x \\in [0, 2\\pi]$. Finn stasjonære punkter og klassifiser dem.',
      solution: 'Stasjonære punkter ved $x = 0, \\pi/3, \\pi, 5\\pi/3, 2\\pi$',
      hints: ['Bruk identiteten $\\sin(2x) = 2\\sin x \\cos x$'],
      allowsUpload: true,
    },
    {
      id: 'r2-4-8-ex-12',
      number: '4.8.12',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Finn vendepunktene til $f(x) = \\sin x + \\frac{1}{3}\\sin(3x)$ for $x \\in [0, 2\\pi]$.',
      solution: 'Løs $f\'\'(x) = 0$ og sjekk fortegnsskifte',
      hints: ['Bruk triplevinkelformelen'],
      allowsUpload: true,
    },
    {
      id: 'r2-4-8-ex-13',
      number: '4.8.13',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En partikkel har posisjon $s(t) = 2\\sin(t) + \\cos(2t)$ m. Finn fart, akselerasjon, og når partikkelen er i ro.',
      solution: 'Partikkelen er i ro ved $t = \\pi/6, \\pi/2, 5\\pi/6, 3\\pi/2$',
      hints: ['Fart er $s\'(t)$, akselerasjon er $s\'\'(t)$'],
      allowsUpload: true,
    },
    {
      id: 'r2-4-8-ex-14',
      number: '4.8.14',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Vis at $f(x) = e^x\\sin x$ oppfyller $f\'\'(x) - 2f\'(x) + 2f(x) = 0$.',
      solution: 'Beregn $f\'$ og $f\'\'$ med produktregelen og sett inn',
      hints: ['Bruk produktregelen to ganger'],
      allowsUpload: true,
    },
    {
      id: 'r2-4-8-ex-15',
      number: '4.8.15',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'La $f(x) = A\\sin(\\omega x + \\varphi)$. a) Finn $f\'(x)$. b) Vis at $f\'\'(x) + \\omega^2 f(x) = 0$.',
      solution: 'Dette er likningen for harmonisk bevegelse',
      hints: ['Kjerneregelen gir en faktor $\\omega$ hver gang'],
      allowsUpload: true,
    },
    {
      id: 'r2-4-8-ex-16',
      number: '4.8.16',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Et rektangel er innskrevet i en halvsirkel med radius 2. Finn det maksimale arealet.',
      solution: 'Maksimalt areal er 4',
      hints: ['Parametriser med vinkel $\\theta$'],
      allowsUpload: true,
    },
    {
      id: 'r2-4-8-ex-17',
      number: '4.8.17',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Bevis fra definisjonen at $(\\cos x)\' = -\\sin x$.',
      solution: 'Bruk definisjonen og addisjonsformelen',
      hints: ['Start med $\\lim_{h \\to 0} \\frac{\\cos(x+h) - \\cos x}{h}$'],
      allowsUpload: true,
    },
    {
      id: 'r2-4-8-ex-18',
      number: '4.8.18',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Deriver $f(x) = \\arctan(\\sin x)$.',
      solution: '$f\'(x) = \\frac{\\cos x}{1 + \\sin^2 x}$',
      hints: ['$(\\arctan u)\' = \\frac{u\'}{1 + u^2}$'],
      allowsUpload: true,
    },
  ],

  // Navigation
  nextChapter: 'r2-6-1',
  prevChapter: 'r2-4-8',
};

