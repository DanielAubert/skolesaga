/**
 * Tekstbok kapitler for 9
 * Autogenerert fra textbook-content.ts
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_9_1_1: TextbookChapter = {
  id: '9-1-1',
  courseId: '9',
  chapterNumber: '1.1',
  title: 'Potenser og røtter',
  description: 'Potensregler, kvadratrøtter og enkle røtter.',
  estimatedMinutes: 50,
  competenceGoals: ['utvikle og bruke metodar for hovudrekning, overslagsrekning og skriftleg rekning'],
  content: [
    {
      id: '9-1-1-intro',
      type: 'text',
      content: `## Repetisjon av potenser

En **potens** er gjentatt multiplikasjon:
$$a^n = \\underbrace{a \\cdot a \\cdot a \\cdots a}_{n \\text{ faktorer}}$$

hvor $a$ er **grunntallet** og $n$ er **eksponenten**.`,
    },
    {
      id: '9-1-1-def-1',
      type: 'definition',
      title: 'Potensregler',
      content: `For alle $a \\neq 0$ og heltall $m$, $n$:

1. $a^m \\cdot a^n = a^{m+n}$ (produktregelen)
2. $\\frac{a^m}{a^n} = a^{m-n}$ (kvotientregelen)
3. $(a^m)^n = a^{m \\cdot n}$ (potens av potens)
4. $(ab)^n = a^n \\cdot b^n$ (potens av produkt)
5. $a^0 = 1$ (nullte potens)
6. $a^{-n} = \\frac{1}{a^n}$ (negativ eksponent)`,
    },
    {
      id: '9-1-1-potenser-bilde',
      type: 'image',
      src: '/images/9-klasse/potenser-intro.svg',
      alt: 'Illustrasjon av potensreglene med eksempler',
      caption: 'Oversikt over de viktigste potensreglene',
    },
    {
      id: '9-1-1-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: `Forenkle ved hjelp av potensreglene:

a) $2^3 \\cdot 2^4$
b) $\\frac{5^7}{5^3}$
c) $(3^2)^4$
d) $4^{-2}$`,
      solution: `**Løsning:**

a) $2^3 \\cdot 2^4 = 2^{3+4} = 2^7 = 128$

b) $\\frac{5^7}{5^3} = 5^{7-3} = 5^4 = 625$

c) $(3^2)^4 = 3^{2 \\cdot 4} = 3^8 = 6561$

d) $4^{-2} = \\frac{1}{4^2} = \\frac{1}{16}$`,
    },
    {
      id: '9-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '9-1-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forenkle ved hjelp av potensreglene',
        subTasks: [
          { label: 'a', task: '$3^2 \\cdot 3^5$', solution: '$3^7 = 2187$' },
          { label: 'b', task: '$\\frac{7^6}{7^2}$', solution: '$7^4 = 2401$' },
          { label: 'c', task: '$(2^3)^3$', solution: '$2^9 = 512$' },
          { label: 'd', task: '$5^{-3}$', solution: '$\\frac{1}{125}$' },
          { label: 'e', task: '$10^4 \\cdot 10^{-2}$', solution: '$10^2 = 100$' },
        ],
        solution: 'a) 2187, b) 2401, c) 512, d) 1/125, e) 100',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-1-text-2',
      type: 'text',
      content: `## Kvadratrøtter

**Kvadratroten** av et tall $a$ er det positive tallet som ganget med seg selv gir $a$:
$$\\sqrt{a} = b \\quad \\text{betyr at} \\quad b^2 = a$$

For eksempel: $\\sqrt{25} = 5$ fordi $5^2 = 25$.`,
    },
    {
      id: '9-1-1-def-2',
      type: 'definition',
      title: 'Rotregler',
      content: `For $a \\geq 0$ og $b > 0$:

1. $\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}$
2. $\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$
3. $\\sqrt{a^2} = a$ (for $a \\geq 0$)
4. $(\\sqrt{a})^2 = a$`,
    },
    {
      id: '9-1-1-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: `Forenkle:

a) $\\sqrt{36}$
b) $\\sqrt{8} \\cdot \\sqrt{2}$
c) $\\sqrt{50}$
d) $\\frac{\\sqrt{48}}{\\sqrt{3}}$`,
      solution: `**Løsning:**

a) $\\sqrt{36} = 6$

b) $\\sqrt{8} \\cdot \\sqrt{2} = \\sqrt{8 \\cdot 2} = \\sqrt{16} = 4$

c) $\\sqrt{50} = \\sqrt{25 \\cdot 2} = \\sqrt{25} \\cdot \\sqrt{2} = 5\\sqrt{2}$

d) $\\frac{\\sqrt{48}}{\\sqrt{3}} = \\sqrt{\\frac{48}{3}} = \\sqrt{16} = 4$`,
    },
    {
      id: '9-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '9-1-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forenkle',
        subTasks: [
          { label: 'a', task: '$\\sqrt{81}$', solution: '$9$' },
          { label: 'b', task: '$\\sqrt{5} \\cdot \\sqrt{20}$', solution: '$\\sqrt{100} = 10$' },
          { label: 'c', task: '$\\sqrt{72}$', solution: '$\\sqrt{36 \\cdot 2} = 6\\sqrt{2}$' },
          { label: 'd', task: '$\\sqrt{18}$', solution: '$\\sqrt{9 \\cdot 2} = 3\\sqrt{2}$' },
          { label: 'e', task: '$\\frac{\\sqrt{75}}{\\sqrt{3}}$', solution: '$\\sqrt{25} = 5$' },
        ],
        solution: 'a) 9, b) 10, c) 6√2, d) 3√2, e) 5',
        hints: ['Se etter kvadrattall som faktor under rottegnet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-1-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: `Skriv som potens:

a) $\\sqrt{a}$
b) $\\sqrt[3]{b}$ (kubikkrot)
c) $\\frac{1}{\\sqrt{x}}$`,
      solution: `**Løsning:**

a) $\\sqrt{a} = a^{\\frac{1}{2}}$

b) $\\sqrt[3]{b} = b^{\\frac{1}{3}}$

c) $\\frac{1}{\\sqrt{x}} = x^{-\\frac{1}{2}}$`,
    },
    {
      id: '9-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '9-1-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv som potens',
        subTasks: [
          { label: 'a', task: '$\\sqrt{x}$', solution: '$x^{1/2}$' },
          { label: 'b', task: '$\\sqrt[4]{a}$', solution: '$a^{1/4}$' },
          { label: 'c', task: '$\\sqrt{x^3}$', solution: '$x^{3/2}$' },
          { label: 'd', task: '$\\frac{1}{\\sqrt[3]{y}}$', solution: '$y^{-1/3}$' },
        ],
        solution: 'a) x^(1/2), b) a^(1/4), c) x^(3/2), d) y^(-1/3)',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-1-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: `Regn ut uten kalkulator:

a) $16^{\\frac{1}{2}}$
b) $27^{\\frac{1}{3}}$
c) $8^{\\frac{2}{3}}$`,
      solution: `**Løsning:**

a) $16^{\\frac{1}{2}} = \\sqrt{16} = 4$

b) $27^{\\frac{1}{3}} = \\sqrt[3]{27} = 3$ (fordi $3^3 = 27$)

c) $8^{\\frac{2}{3}} = (8^{\\frac{1}{3}})^2 = (\\sqrt[3]{8})^2 = 2^2 = 4$`,
    },
    {
      id: '9-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '9-1-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Regn ut uten kalkulator',
        subTasks: [
          { label: 'a', task: '$25^{\\frac{1}{2}}$', solution: '$5$' },
          { label: 'b', task: '$64^{\\frac{1}{3}}$', solution: '$4$' },
          { label: 'c', task: '$4^{\\frac{3}{2}}$', solution: '$(\\sqrt{4})^3 = 2^3 = 8$' },
          { label: 'd', task: '$27^{\\frac{2}{3}}$', solution: '$(\\sqrt[3]{27})^2 = 3^2 = 9$' },
        ],
        solution: 'a) 5, b) 4, c) 8, d) 9',
        hints: ['Brøkeksponent: nevneren er rot, telleren er potens'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: '9-1-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forenkle potensuttrykkene',
        subTasks: [
          { label: 'a', task: '$2^5 \\cdot 2^3$', solution: '$2^8 = 256$' },
          { label: 'b', task: '$\\frac{4^6}{4^4}$', solution: '$4^2 = 16$' },
          { label: 'c', task: '$(5^2)^3$', solution: '$5^6 = 15625$' },
          { label: 'd', task: '$3^0$', solution: '$1$' },
          { label: 'e', task: '$6^{-1}$', solution: '$\\frac{1}{6}$' },
        ],
        solution: 'a) 256, b) 16, c) 15625, d) 1, e) 1/6',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-1-ex-6',
      type: 'exercise',
      exercise: {
        id: '9-1-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forenkle ved å bruke flere potensregler',
        subTasks: [
          { label: 'a', task: '$\\frac{3^5 \\cdot 3^2}{3^4}$', solution: '$3^{5+2-4} = 3^3 = 27$' },
          { label: 'b', task: '$(2^3)^2 \\cdot 2^{-4}$', solution: '$2^6 \\cdot 2^{-4} = 2^2 = 4$' },
          { label: 'c', task: '$\\frac{5^4 \\cdot 5^{-2}}{5^3}$', solution: '$5^{4-2-3} = 5^{-1} = \\frac{1}{5}$' },
          { label: 'd', task: '$(4^2)^3 \\div 4^5$', solution: '$4^6 \\div 4^5 = 4$' },
        ],
        solution: 'a) 27, b) 4, c) 1/5, d) 4',
        hints: ['Bruk potensreglene steg for steg'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-1-ex-7',
      type: 'exercise',
      exercise: {
        id: '9-1-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut kvadratrøttene',
        subTasks: [
          { label: 'a', task: '$\\sqrt{49}$', solution: '$7$' },
          { label: 'b', task: '$\\sqrt{144}$', solution: '$12$' },
          { label: 'c', task: '$\\sqrt{196}$', solution: '$14$' },
          { label: 'd', task: '$\\sqrt{0{,}25}$', solution: '$0{,}5$' },
          { label: 'e', task: '$\\sqrt{\\frac{9}{16}}$', solution: '$\\frac{3}{4}$' },
        ],
        solution: 'a) 7, b) 12, c) 14, d) 0,5, e) 3/4',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-1-ex-8',
      type: 'exercise',
      exercise: {
        id: '9-1-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv på enkleste form (trekk ut av rottegnet)',
        subTasks: [
          { label: 'a', task: '$\\sqrt{32}$', solution: '$\\sqrt{16 \\cdot 2} = 4\\sqrt{2}$' },
          { label: 'b', task: '$\\sqrt{45}$', solution: '$\\sqrt{9 \\cdot 5} = 3\\sqrt{5}$' },
          { label: 'c', task: '$\\sqrt{98}$', solution: '$\\sqrt{49 \\cdot 2} = 7\\sqrt{2}$' },
          { label: 'd', task: '$\\sqrt{125}$', solution: '$\\sqrt{25 \\cdot 5} = 5\\sqrt{5}$' },
          { label: 'e', task: '$\\sqrt{200}$', solution: '$\\sqrt{100 \\cdot 2} = 10\\sqrt{2}$' },
        ],
        solution: 'a) 4√2, b) 3√5, c) 7√2, d) 5√5, e) 10√2',
        hints: ['Finn det største kvadrattallet som er faktor'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-1-ex-9',
      type: 'exercise',
      exercise: {
        id: '9-1-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk rotreglene til å forenkle',
        subTasks: [
          { label: 'a', task: '$\\sqrt{3} \\cdot \\sqrt{12}$', solution: '$\\sqrt{36} = 6$' },
          { label: 'b', task: '$\\sqrt{2} \\cdot \\sqrt{8}$', solution: '$\\sqrt{16} = 4$' },
          { label: 'c', task: '$\\frac{\\sqrt{50}}{\\sqrt{2}}$', solution: '$\\sqrt{25} = 5$' },
          { label: 'd', task: '$\\sqrt{7} \\cdot \\sqrt{7}$', solution: '$7$' },
          { label: 'e', task: '$\\frac{\\sqrt{72}}{\\sqrt{8}}$', solution: '$\\sqrt{9} = 3$' },
        ],
        solution: 'a) 6, b) 4, c) 5, d) 7, e) 3',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-1-ex-10',
      type: 'exercise',
      exercise: {
        id: '9-1-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forenkle uttrykkene med røtter',
        subTasks: [
          { label: 'a', task: '$\\sqrt{12} + \\sqrt{27}$', solution: '$2\\sqrt{3} + 3\\sqrt{3} = 5\\sqrt{3}$' },
          { label: 'b', task: '$\\sqrt{50} - \\sqrt{8}$', solution: '$5\\sqrt{2} - 2\\sqrt{2} = 3\\sqrt{2}$' },
          { label: 'c', task: '$2\\sqrt{18} + 3\\sqrt{2}$', solution: '$6\\sqrt{2} + 3\\sqrt{2} = 9\\sqrt{2}$' },
          { label: 'd', task: '$\\sqrt{45} + \\sqrt{20} - \\sqrt{5}$', solution: '$3\\sqrt{5} + 2\\sqrt{5} - \\sqrt{5} = 4\\sqrt{5}$' },
        ],
        solution: 'a) 5√3, b) 3√2, c) 9√2, d) 4√5',
        hints: ['Forenkle hver rot først, så slå sammen like røtter'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-1-ex-11',
      type: 'exercise',
      exercise: {
        id: '9-1-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Regn ut med brøkeksponenter',
        subTasks: [
          { label: 'a', task: '$81^{\\frac{1}{4}}$', solution: '$3$ (fordi $3^4 = 81$)' },
          { label: 'b', task: '$32^{\\frac{1}{5}}$', solution: '$2$ (fordi $2^5 = 32$)' },
          { label: 'c', task: '$16^{\\frac{3}{4}}$', solution: '$(16^{\\frac{1}{4}})^3 = 2^3 = 8$' },
          { label: 'd', task: '$125^{\\frac{2}{3}}$', solution: '$(125^{\\frac{1}{3}})^2 = 5^2 = 25$' },
          { label: 'e', task: '$9^{\\frac{3}{2}}$', solution: '$(\\sqrt{9})^3 = 3^3 = 27$' },
        ],
        solution: 'a) 3, b) 2, c) 8, d) 25, e) 27',
        hints: ['Brøkeksponent: nevneren angir rot, telleren angir potens'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-1-ex-12',
      type: 'exercise',
      exercise: {
        id: '9-1-1-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammensatte oppgaver med potenser og røtter',
        subTasks: [
          { label: 'a', task: '$\\sqrt{2^6}$', solution: '$2^3 = 8$' },
          { label: 'b', task: '$(\\sqrt{5})^4$', solution: '$5^2 = 25$' },
          { label: 'c', task: '$\\sqrt{4^3}$', solution: '$\\sqrt{64} = 8$' },
          { label: 'd', task: '$2^{\\frac{1}{2}} \\cdot 2^{\\frac{3}{2}}$', solution: '$2^2 = 4$' },
          { label: 'e', task: '$\\frac{3^{\\frac{5}{2}}}{3^{\\frac{1}{2}}}$', solution: '$3^2 = 9$' },
        ],
        solution: 'a) 8, b) 25, c) 8, d) 4, e) 9',
        hints: ['Kombiner potens- og rotregler'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ========== NYE OPPGAVER MED ILLUSTRASJONER ==========
    {
      id: '9-1-1-ill-potenser',
      type: 'image',
      src: '/images/9-klasse/potenser-intro.svg',
      alt: 'Potenser - grunntall og eksponent med visuell forklaring',
      caption: 'En potens bestar av et grunntall og en eksponent',
    },
    {
      id: '9-1-1-ex-13',
      type: 'exercise',
      exercise: {
        id: '9-1-1-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'lett',
        task: 'Se pa figuren over som viser $2^3 = 2 \\times 2 \\times 2 = 8$. Bruk samme metode til a regne ut folgende potenser:',
        image: '/images/9-klasse/potenser-intro.svg',
        subTasks: [
          { label: 'a', task: '$3^4$ (skriv ut som gjentatt multiplikasjon forst)', solution: '$3^4 = 3 \\times 3 \\times 3 \\times 3 = 81$' },
          { label: 'b', task: '$5^3$', solution: '$5^3 = 5 \\times 5 \\times 5 = 125$' },
          { label: 'c', task: '$2^5$', solution: '$2^5 = 2 \\times 2 \\times 2 \\times 2 \\times 2 = 32$' },
        ],
        solution: 'a) 81, b) 125, c) 32',
        hints: ['Eksponenten forteller hvor mange ganger grunntallet skal ganges med seg selv'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-1-ex-14',
      type: 'exercise',
      exercise: {
        id: '9-1-1-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fra figuren ser vi at grunntallet er tallet som ganges, og eksponenten forteller hvor mange ganger. Hva er grunntallet og eksponenten i folgende potenser?',
        image: '/images/9-klasse/potenser-intro.svg',
        subTasks: [
          { label: 'a', task: '$7^2$', solution: 'Grunntall: 7, Eksponent: 2. Verdi: $7 \\times 7 = 49$' },
          { label: 'b', task: '$4^5$', solution: 'Grunntall: 4, Eksponent: 5. Verdi: $4^5 = 1024$' },
          { label: 'c', task: '$10^4$', solution: 'Grunntall: 10, Eksponent: 4. Verdi: $10^4 = 10000$' },
        ],
        solution: 'a) Grunntall 7, eksponent 2, verdi 49. b) Grunntall 4, eksponent 5, verdi 1024. c) Grunntall 10, eksponent 4, verdi 10000.',
        hints: ['Grunntallet star nede, eksponenten star oppe til hoyre'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-1-1-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '9-1-1-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-1-1-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Forenkle ved hjelp av potensreglene.',
            subTasks: [
              { label: 'a', task: '$4^2 \\cdot 4^3$', solution: '$4^{2+3} = 4^5 = 1024$' },
              { label: 'b', task: '$\\frac{6^5}{6^2}$', solution: '$6^{5-2} = 6^3 = 216$' },
              { label: 'c', task: '$(5^3)^2$', solution: '$5^{3 \\cdot 2} = 5^6 = 15625$' },
              { label: 'd', task: '$7^0$', solution: '$1$' },
              { label: 'e', task: '$2^{-3}$', solution: '$\\frac{1}{2^3} = \\frac{1}{8}$' },
              { label: 'f', task: '$(3 \\cdot 2)^4$', solution: '$3^4 \\cdot 2^4 = 81 \\cdot 16 = 1296$' },
            ],
            solution: 'a) 1024, b) 216, c) 15625, d) 1, e) $\\frac{1}{8}$, f) 1296',
            hideInlineSolution: true,
            hints: ['Bruk potensreglene: $a^m \\cdot a^n = a^{m+n}$, $\\frac{a^m}{a^n} = a^{m-n}$, $(a^m)^n = a^{mn}$'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-1-1-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-1-1-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Regn ut kvadratrøtter.',
            subTasks: [
              { label: 'a', task: '$\\sqrt{49}$', solution: '$7$' },
              { label: 'b', task: '$\\sqrt{144}$', solution: '$12$' },
              { label: 'c', task: '$\\sqrt{81}$', solution: '$9$' },
              { label: 'd', task: '$\\sqrt{0{,}25}$', solution: '$0{,}5$' },
              { label: 'e', task: '$\\sqrt{\\frac{9}{16}}$', solution: '$\\frac{3}{4}$' },
              { label: 'f', task: '$\\sqrt{400}$', solution: '$20$' },
            ],
            solution: 'a) 7, b) 12, c) 9, d) 0,5, e) $\\frac{3}{4}$, f) 20',
            hideInlineSolution: true,
            hints: ['Finn det tallet som ganget med seg selv gir tallet under rottegnet'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-1-1-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-1-1-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Forenkle uttrykk med potenser.',
            subTasks: [
              { label: 'a', task: '$3^2 \\cdot 3^{-1}$', solution: '$3^{2-1} = 3^1 = 3$' },
              { label: 'b', task: '$\\frac{10^6}{10^4}$', solution: '$10^{6-4} = 10^2 = 100$' },
              { label: 'c', task: '$(2^2)^3 \\cdot 2^{-4}$', solution: '$2^6 \\cdot 2^{-4} = 2^2 = 4$' },
              { label: 'd', task: '$\\frac{5^3 \\cdot 5^2}{5^4}$', solution: '$\\frac{5^5}{5^4} = 5^1 = 5$' },
              { label: 'e', task: '$(4^{-1})^2$', solution: '$4^{-2} = \\frac{1}{16}$' },
              { label: 'f', task: '$\\frac{8^3}{8^3}$', solution: '$8^0 = 1$' },
            ],
            solution: 'a) 3, b) 100, c) 4, d) 5, e) $\\frac{1}{16}$, f) 1',
            hideInlineSolution: true,
            hints: ['Kombiner potensreglene steg for steg, og forenkle eksponentene'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-1-1-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-1-1-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Sammensatte oppgaver med potenser og røtter.',
            subTasks: [
              { label: 'a', task: 'Forenkle $\\frac{2^5 \\cdot 3^2}{2^3 \\cdot 3}$', solution: '$2^{5-3} \\cdot 3^{2-1} = 2^2 \\cdot 3 = 4 \\cdot 3 = 12$' },
              { label: 'b', task: 'Forenkle $(\\frac{2}{3})^3$', solution: '$\\frac{2^3}{3^3} = \\frac{8}{27}$' },
              { label: 'c', task: 'Regn ut $\\sqrt{9 \\cdot 16}$', solution: '$\\sqrt{144} = 12$ (eller $\\sqrt{9} \\cdot \\sqrt{16} = 3 \\cdot 4 = 12$)' },
              { label: 'd', task: 'Regn ut $\\sqrt{\\frac{49}{25}}$', solution: '$\\frac{\\sqrt{49}}{\\sqrt{25}} = \\frac{7}{5}$' },
              { label: 'e', task: 'Forenkle $2^3 + 2^3$', solution: '$8 + 8 = 16 = 2^4$ (merk: $2^3 + 2^3 = 2 \\cdot 2^3 = 2^4$)' },
              { label: 'f', task: 'Forenkle $\\frac{(3^2)^3}{3^4 \\cdot 3}$', solution: '$\\frac{3^6}{3^5} = 3^1 = 3$' },
            ],
            solution: 'a) 12, b) $\\frac{8}{27}$, c) 12, d) $\\frac{7}{5}$, e) $2^4 = 16$, f) 3',
            hideInlineSolution: true,
            hints: ['Bruk at $\\sqrt{ab} = \\sqrt{a} \\cdot \\sqrt{b}$ og $(\\frac{a}{b})^n = \\frac{a^n}{b^n}$'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-1-1-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-1-1-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Skriv som potens med gitt grunntall.',
            subTasks: [
              { label: 'a', task: 'Skriv $8$ som en potens med grunntall $2$.', solution: '$8 = 2^3$' },
              { label: 'b', task: 'Skriv $27$ som en potens med grunntall $3$.', solution: '$27 = 3^3$' },
              { label: 'c', task: 'Skriv $\\frac{1}{16}$ som en potens med grunntall $2$.', solution: '$\\frac{1}{16} = 2^{-4}$' },
              { label: 'd', task: 'Skriv $\\frac{1}{125}$ som en potens med grunntall $5$.', solution: '$\\frac{1}{125} = 5^{-3}$' },
              { label: 'e', task: 'Forenkle $\\frac{4^3 \\cdot 8^2}{2^{10}}$ ved å skrive alt med grunntall $2$.', solution: '$\\frac{(2^2)^3 \\cdot (2^3)^2}{2^{10}} = \\frac{2^6 \\cdot 2^6}{2^{10}} = \\frac{2^{12}}{2^{10}} = 2^2 = 4$' },
              { label: 'f', task: 'Forenkle $\\frac{9^2 \\cdot 27}{3^7}$ ved å skrive alt med grunntall $3$.', solution: '$\\frac{(3^2)^2 \\cdot 3^3}{3^7} = \\frac{3^4 \\cdot 3^3}{3^7} = \\frac{3^7}{3^7} = 1$' },
            ],
            solution: 'a) $2^3$, b) $3^3$, c) $2^{-4}$, d) $5^{-3}$, e) $4$, f) $1$',
            hideInlineSolution: true,
            hints: ['Skriv alle tall som potenser av det ønskede grunntallet, og bruk potensreglene til å forenkle'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-1-1-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-1-1-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Krevende potens- og rotoppgaver.',
            subTasks: [
              { label: 'a', task: 'Finn $x$ dersom $2^x = 64$.', solution: '$64 = 2^6$, så $x = 6$' },
              { label: 'b', task: 'Forenkle $\\frac{\\sqrt{50}}{\\sqrt{2}}$.', solution: '$\\sqrt{\\frac{50}{2}} = \\sqrt{25} = 5$' },
              { label: 'c', task: 'Vis at $\\sqrt{a^2} = |a|$ for alle reelle tall $a$. Hva er $\\sqrt{(-5)^2}$?', solution: '$\\sqrt{(-5)^2} = \\sqrt{25} = 5 = |-5|$. Kvadratroten gir alltid positiv verdi.' },
              { label: 'd', task: 'Forenkle $\\frac{(2^n)^3 \\cdot 4^n}{8^n \\cdot 2^n}$. Uttrykk svaret som en potens av $2$.', solution: '$\\frac{2^{3n} \\cdot 2^{2n}}{2^{3n} \\cdot 2^n} = \\frac{2^{5n}}{2^{4n}} = 2^n$' },
            ],
            solution: 'a) $x=6$, b) $5$, c) $5$, d) $2^n$',
            hideInlineSolution: true,
            hints: ['Skriv alle tall med samme grunntall og bruk potensreglene for eksponentene'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_9_1_2: TextbookChapter = {
  id: '9-1-2',
  courseId: '9',
  chapterNumber: '1.2',
  title: 'Brøkregning',
  description: 'Multiplikasjon og divisjon med brøker, samt sammensatte uttrykk.',
  estimatedMinutes: 55,
  competenceGoals: ['utvikle og bruke metodar for hovudrekning, overslagsrekning og skriftleg rekning'],
  content: [
    {
      id: '9-1-2-intro',
      type: 'text',
      content: `## Repetisjon av brøkregning

En brøk $\\frac{a}{b}$ representerer $a$ delt på $b$, der $a$ er telleren og $b$ er nevneren.`,
    },
    {
      id: '9-1-2-def-1',
      type: 'definition',
      title: 'Regneregler for brøker',
      content: `**Addisjon/Subtraksjon:** Må ha lik nevner
$$\\frac{a}{c} + \\frac{b}{c} = \\frac{a+b}{c}$$

**Multiplikasjon:** Gang teller med teller, nevner med nevner
$$\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{a \\cdot c}{b \\cdot d}$$

**Divisjon:** Gang med den omvendte brøken
$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c}$$`,
    },
    {
      id: '9-1-2-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: `Regn ut og forkort:

a) $\\frac{2}{3} \\cdot \\frac{5}{4}$
b) $\\frac{3}{4} \\div \\frac{9}{8}$
c) $\\frac{5}{6} \\cdot \\frac{3}{10}$`,
      solution: `**Løsning:**

a) $\\frac{2}{3} \\cdot \\frac{5}{4} = \\frac{2 \\cdot 5}{3 \\cdot 4} = \\frac{10}{12} = \\frac{5}{6}$

b) $\\frac{3}{4} \\div \\frac{9}{8} = \\frac{3}{4} \\cdot \\frac{8}{9} = \\frac{24}{36} = \\frac{2}{3}$

c) $\\frac{5}{6} \\cdot \\frac{3}{10} = \\frac{5 \\cdot 3}{6 \\cdot 10} = \\frac{15}{60} = \\frac{1}{4}$`,
    },
    {
      id: '9-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '9-1-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut og forkort',
        subTasks: [
          { label: 'a', task: '$\\frac{3}{5} \\cdot \\frac{2}{3}$', solution: '$\\frac{6}{15} = \\frac{2}{5}$' },
          { label: 'b', task: '$\\frac{4}{7} \\cdot \\frac{14}{8}$', solution: '$\\frac{56}{56} = 1$' },
          { label: 'c', task: '$\\frac{5}{6} \\div \\frac{5}{3}$', solution: '$\\frac{5}{6} \\cdot \\frac{3}{5} = \\frac{1}{2}$' },
          { label: 'd', task: '$\\frac{2}{9} \\div \\frac{4}{3}$', solution: '$\\frac{2}{9} \\cdot \\frac{3}{4} = \\frac{1}{6}$' },
        ],
        solution: 'a) 2/5, b) 1, c) 1/2, d) 1/6',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-2-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: `Regn ut:

a) $\\frac{2}{3} + \\frac{1}{4}$
b) $\\frac{5}{6} - \\frac{2}{9}$`,
      solution: `**Løsning:**

a) Fellesnevner: 12
   $\\frac{2}{3} + \\frac{1}{4} = \\frac{8}{12} + \\frac{3}{12} = \\frac{11}{12}$

b) Fellesnevner: 18
   $\\frac{5}{6} - \\frac{2}{9} = \\frac{15}{18} - \\frac{4}{18} = \\frac{11}{18}$`,
    },
    {
      id: '9-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '9-1-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$\\frac{3}{4} + \\frac{2}{5}$', solution: '$\\frac{15}{20} + \\frac{8}{20} = \\frac{23}{20}$' },
          { label: 'b', task: '$\\frac{7}{8} - \\frac{1}{3}$', solution: '$\\frac{21}{24} - \\frac{8}{24} = \\frac{13}{24}$' },
          { label: 'c', task: '$\\frac{2}{3} + \\frac{5}{6} - \\frac{1}{2}$', solution: '$\\frac{4}{6} + \\frac{5}{6} - \\frac{3}{6} = 1$' },
        ],
        solution: 'a) 23/20, b) 13/24, c) 1',
        hints: ['Finn fellesnevner først'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-2-text-3',
      type: 'text',
      content: `## Sammensatte brøkuttrykk

Når vi har brøker i teller eller nevner, løser vi opp ved å gange teller og nevner med samme tall (ofte fellesnevneren).`,
    },
    {
      id: '9-1-2-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: `Forenkle:

a) $\\frac{\\frac{1}{2} + \\frac{1}{3}}{\\frac{1}{6}}$

b) $\\frac{2}{\\frac{3}{4}}$`,
      solution: `**Løsning:**

a) Først: $\\frac{1}{2} + \\frac{1}{3} = \\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$

   Så: $\\frac{\\frac{5}{6}}{\\frac{1}{6}} = \\frac{5}{6} \\div \\frac{1}{6} = \\frac{5}{6} \\cdot \\frac{6}{1} = 5$

b) $\\frac{2}{\\frac{3}{4}} = 2 \\div \\frac{3}{4} = 2 \\cdot \\frac{4}{3} = \\frac{8}{3}$`,
    },
    {
      id: '9-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '9-1-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forenkle',
        subTasks: [
          { label: 'a', task: '$\\frac{\\frac{2}{3}}{\\frac{4}{9}}$', solution: '$\\frac{2}{3} \\cdot \\frac{9}{4} = \\frac{3}{2}$' },
          { label: 'b', task: '$\\frac{3}{\\frac{6}{5}}$', solution: '$3 \\cdot \\frac{5}{6} = \\frac{5}{2}$' },
          { label: 'c', task: '$\\frac{\\frac{1}{2} + \\frac{1}{4}}{\\frac{3}{4}}$', solution: '$\\frac{\\frac{3}{4}}{\\frac{3}{4}} = 1$' },
        ],
        solution: 'a) 3/2, b) 5/2, c) 1',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-2-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: `I en klasse er $\\frac{2}{5}$ av elevene gutter. $\\frac{3}{4}$ av guttene spiller fotball. Hvor stor andel av klassen er gutter som spiller fotball?`,
      solution: `**Løsning:**

Andel = $\\frac{2}{5} \\cdot \\frac{3}{4} = \\frac{6}{20} = \\frac{3}{10}$

$\\frac{3}{10}$ av klassen er gutter som spiller fotball.`,
    },
    {
      id: '9-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: '9-1-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs tekstoppgavene',
        subTasks: [
          { label: 'a', task: '$\\frac{3}{4}$ av en pizza spises. Deretter spises $\\frac{2}{3}$ av det som er igjen. Hvor mye er igjen nå?', solution: 'Igjen først: $\\frac{1}{4}$. Spist: $\\frac{2}{3} \\cdot \\frac{1}{4} = \\frac{1}{6}$. Igjen: $\\frac{1}{4} - \\frac{1}{6} = \\frac{1}{12}$' },
          { label: 'b', task: 'En tank er $\\frac{2}{3}$ full. Etter påfylling er den $\\frac{5}{6}$ full. Hvor mye ble fylt på?', solution: '$\\frac{5}{6} - \\frac{2}{3} = \\frac{5}{6} - \\frac{4}{6} = \\frac{1}{6}$' },
        ],
        solution: 'a) 1/12, b) 1/6',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: '9-1-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Multipliser brøkene og forkort',
        subTasks: [
          { label: 'a', task: '$\\frac{2}{7} \\cdot \\frac{7}{4}$', solution: '$\\frac{14}{28} = \\frac{1}{2}$' },
          { label: 'b', task: '$\\frac{5}{8} \\cdot \\frac{4}{15}$', solution: '$\\frac{20}{120} = \\frac{1}{6}$' },
          { label: 'c', task: '$\\frac{9}{10} \\cdot \\frac{5}{6}$', solution: '$\\frac{45}{60} = \\frac{3}{4}$' },
          { label: 'd', task: '$\\frac{3}{8} \\cdot \\frac{16}{9}$', solution: '$\\frac{48}{72} = \\frac{2}{3}$' },
        ],
        solution: 'a) 1/2, b) 1/6, c) 3/4, d) 2/3',
        hints: ['Forkort før du ganger for enklere regning'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-2-ex-6',
      type: 'exercise',
      exercise: {
        id: '9-1-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Divider brøkene og forkort',
        subTasks: [
          { label: 'a', task: '$\\frac{3}{5} \\div \\frac{6}{7}$', solution: '$\\frac{3}{5} \\cdot \\frac{7}{6} = \\frac{21}{30} = \\frac{7}{10}$' },
          { label: 'b', task: '$\\frac{8}{9} \\div \\frac{4}{3}$', solution: '$\\frac{8}{9} \\cdot \\frac{3}{4} = \\frac{24}{36} = \\frac{2}{3}$' },
          { label: 'c', task: '$\\frac{5}{12} \\div \\frac{10}{9}$', solution: '$\\frac{5}{12} \\cdot \\frac{9}{10} = \\frac{45}{120} = \\frac{3}{8}$' },
          { label: 'd', task: '$\\frac{7}{8} \\div \\frac{21}{16}$', solution: '$\\frac{7}{8} \\cdot \\frac{16}{21} = \\frac{112}{168} = \\frac{2}{3}$' },
        ],
        solution: 'a) 7/10, b) 2/3, c) 3/8, d) 2/3',
        hints: ['Husk: Divider = gang med omvendt brøk'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-2-ex-7',
      type: 'exercise',
      exercise: {
        id: '9-1-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn fellesnevner og regn ut',
        subTasks: [
          { label: 'a', task: '$\\frac{1}{3} + \\frac{1}{6}$', solution: '$\\frac{2}{6} + \\frac{1}{6} = \\frac{3}{6} = \\frac{1}{2}$' },
          { label: 'b', task: '$\\frac{5}{8} - \\frac{1}{4}$', solution: '$\\frac{5}{8} - \\frac{2}{8} = \\frac{3}{8}$' },
          { label: 'c', task: '$\\frac{2}{5} + \\frac{3}{10}$', solution: '$\\frac{4}{10} + \\frac{3}{10} = \\frac{7}{10}$' },
          { label: 'd', task: '$\\frac{7}{12} - \\frac{1}{3}$', solution: '$\\frac{7}{12} - \\frac{4}{12} = \\frac{3}{12} = \\frac{1}{4}$' },
        ],
        solution: 'a) 1/2, b) 3/8, c) 7/10, d) 1/4',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-2-ex-8',
      type: 'exercise',
      exercise: {
        id: '9-1-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut med flere brøker',
        subTasks: [
          { label: 'a', task: '$\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6}$', solution: '$\\frac{3}{6} + \\frac{2}{6} + \\frac{1}{6} = \\frac{6}{6} = 1$' },
          { label: 'b', task: '$\\frac{3}{4} - \\frac{1}{2} + \\frac{1}{8}$', solution: '$\\frac{6}{8} - \\frac{4}{8} + \\frac{1}{8} = \\frac{3}{8}$' },
          { label: 'c', task: '$\\frac{5}{6} + \\frac{2}{3} - \\frac{1}{2}$', solution: '$\\frac{5}{6} + \\frac{4}{6} - \\frac{3}{6} = 1$' },
          { label: 'd', task: '$1 - \\frac{2}{5} - \\frac{1}{4}$', solution: '$\\frac{20}{20} - \\frac{8}{20} - \\frac{5}{20} = \\frac{7}{20}$' },
        ],
        solution: 'a) 1, b) 3/8, c) 1, d) 7/20',
        hints: ['Finn minste felles nevner først'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-2-ex-9',
      type: 'exercise',
      exercise: {
        id: '9-1-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forenkle de sammensatte brøkuttrykkene',
        subTasks: [
          { label: 'a', task: '$\\frac{\\frac{3}{4}}{\\frac{9}{8}}$', solution: '$\\frac{3}{4} \\cdot \\frac{8}{9} = \\frac{24}{36} = \\frac{2}{3}$' },
          { label: 'b', task: '$\\frac{\\frac{2}{3} + \\frac{1}{2}}{\\frac{7}{6}}$', solution: '$\\frac{\\frac{7}{6}}{\\frac{7}{6}} = 1$' },
          { label: 'c', task: '$\\frac{5}{\\frac{10}{3}}$', solution: '$5 \\cdot \\frac{3}{10} = \\frac{15}{10} = \\frac{3}{2}$' },
          { label: 'd', task: '$\\frac{\\frac{1}{2} - \\frac{1}{4}}{\\frac{3}{8}}$', solution: '$\\frac{\\frac{1}{4}}{\\frac{3}{8}} = \\frac{1}{4} \\cdot \\frac{8}{3} = \\frac{2}{3}$' },
        ],
        solution: 'a) 2/3, b) 1, c) 3/2, d) 2/3',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-2-ex-10',
      type: 'exercise',
      exercise: {
        id: '9-1-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tekstoppgaver med brøker',
        subTasks: [
          { label: 'a', task: 'Kari har lest $\\frac{2}{5}$ av en bok som har 350 sider. Hvor mange sider har hun lest?', solution: '$\\frac{2}{5} \\cdot 350 = \\frac{700}{5} = 140$ sider' },
          { label: 'b', task: 'Ole brukte $\\frac{3}{4}$ time på mattelekser og $\\frac{1}{2}$ time på norsk. Hvor lang tid brukte han totalt?', solution: '$\\frac{3}{4} + \\frac{1}{2} = \\frac{3}{4} + \\frac{2}{4} = \\frac{5}{4} = 1\\frac{1}{4}$ time' },
          { label: 'c', task: 'En pose inneholder 24 kuler. $\\frac{1}{3}$ er røde og $\\frac{1}{4}$ er blå. Hvor mange kuler er hverken røde eller blå?', solution: 'Røde: $8$, Blå: $6$. Resten: $24 - 8 - 6 = 10$ kuler' },
        ],
        solution: 'a) 140 sider, b) 1 1/4 time, c) 10 kuler',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-2-ex-11',
      type: 'exercise',
      exercise: {
        id: '9-1-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Kombinerte oppgaver',
        subTasks: [
          { label: 'a', task: '$\\frac{2}{3} \\cdot \\frac{3}{4} + \\frac{1}{2}$', solution: '$\\frac{1}{2} + \\frac{1}{2} = 1$' },
          { label: 'b', task: '$\\frac{5}{6} - \\frac{1}{3} \\cdot \\frac{1}{2}$', solution: '$\\frac{5}{6} - \\frac{1}{6} = \\frac{4}{6} = \\frac{2}{3}$' },
          { label: 'c', task: '$(\\frac{1}{2} + \\frac{1}{3}) \\cdot \\frac{6}{5}$', solution: '$\\frac{5}{6} \\cdot \\frac{6}{5} = 1$' },
          { label: 'd', task: '$\\frac{3}{4} \\div (\\frac{1}{2} + \\frac{1}{4})$', solution: '$\\frac{3}{4} \\div \\frac{3}{4} = 1$' },
        ],
        solution: 'a) 1, b) 2/3, c) 1, d) 1',
        hints: ['Følg regnerekkefølgen: parenteser, gange/dele, pluss/minus'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-2-ex-12',
      type: 'exercise',
      exercise: {
        id: '9-1-2-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordringsoppgaver',
        subTasks: [
          { label: 'a', task: 'Finn $x$ når $\\frac{x}{3} = \\frac{2}{5}$', solution: '$x = \\frac{2}{5} \\cdot 3 = \\frac{6}{5}$' },
          { label: 'b', task: 'Finn $x$ når $\\frac{3}{x} = \\frac{9}{12}$', solution: '$\\frac{3}{x} = \\frac{3}{4}$, så $x = 4$' },
          { label: 'c', task: 'Hvilken brøk ligger midt mellom $\\frac{1}{4}$ og $\\frac{1}{2}$?', solution: 'Gjennomsnitt: $\\frac{\\frac{1}{4} + \\frac{1}{2}}{2} = \\frac{\\frac{3}{4}}{2} = \\frac{3}{8}$' },
          { label: 'd', task: 'Forenkle $\\frac{1}{1 + \\frac{1}{2}}$', solution: '$\\frac{1}{\\frac{3}{2}} = \\frac{2}{3}$' },
        ],
        solution: 'a) 6/5, b) 4, c) 3/8, d) 2/3',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-1-2-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '9-1-2-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-1-2-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Multipliser brøker.',
            subTasks: [
              { label: 'a', task: '$\\frac{2}{3} \\cdot \\frac{4}{5}$', solution: '$\\frac{8}{15}$' },
              { label: 'b', task: '$\\frac{3}{7} \\cdot \\frac{2}{9}$', solution: '$\\frac{6}{63} = \\frac{2}{21}$' },
              { label: 'c', task: '$\\frac{5}{6} \\cdot \\frac{3}{10}$', solution: '$\\frac{15}{60} = \\frac{1}{4}$' },
              { label: 'd', task: '$\\frac{4}{9} \\cdot \\frac{3}{8}$', solution: '$\\frac{12}{72} = \\frac{1}{6}$' },
              { label: 'e', task: '$\\frac{7}{4} \\cdot \\frac{2}{3}$', solution: '$\\frac{14}{12} = \\frac{7}{6}$' },
              { label: 'f', task: '$3 \\cdot \\frac{5}{8}$', solution: '$\\frac{15}{8}$' },
            ],
            solution: 'a) $\\frac{8}{15}$, b) $\\frac{2}{21}$, c) $\\frac{1}{4}$, d) $\\frac{1}{6}$, e) $\\frac{7}{6}$, f) $\\frac{15}{8}$',
            hideInlineSolution: true,
            hints: ['Gang teller med teller og nevner med nevner: $\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{ac}{bd}$'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-1-2-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-1-2-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Divider brøker.',
            subTasks: [
              { label: 'a', task: '$\\frac{3}{4} \\div \\frac{1}{2}$', solution: '$\\frac{3}{4} \\cdot \\frac{2}{1} = \\frac{6}{4} = \\frac{3}{2}$' },
              { label: 'b', task: '$\\frac{5}{6} \\div \\frac{5}{3}$', solution: '$\\frac{5}{6} \\cdot \\frac{3}{5} = \\frac{15}{30} = \\frac{1}{2}$' },
              { label: 'c', task: '$\\frac{2}{3} \\div \\frac{4}{9}$', solution: '$\\frac{2}{3} \\cdot \\frac{9}{4} = \\frac{18}{12} = \\frac{3}{2}$' },
              { label: 'd', task: '$\\frac{7}{8} \\div \\frac{7}{4}$', solution: '$\\frac{7}{8} \\cdot \\frac{4}{7} = \\frac{28}{56} = \\frac{1}{2}$' },
              { label: 'e', task: '$4 \\div \\frac{2}{3}$', solution: '$4 \\cdot \\frac{3}{2} = \\frac{12}{2} = 6$' },
              { label: 'f', task: '$\\frac{9}{10} \\div 3$', solution: '$\\frac{9}{10} \\cdot \\frac{1}{3} = \\frac{9}{30} = \\frac{3}{10}$' },
            ],
            solution: 'a) $\\frac{3}{2}$, b) $\\frac{1}{2}$, c) $\\frac{3}{2}$, d) $\\frac{1}{2}$, e) $6$, f) $\\frac{3}{10}$',
            hideInlineSolution: true,
            hints: ['Divisjon med brøk = multiplikasjon med den omvendte brøken: $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c}$'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-1-2-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-1-2-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Adder og subtraher brøker.',
            subTasks: [
              { label: 'a', task: '$\\frac{2}{5} + \\frac{1}{5}$', solution: '$\\frac{3}{5}$' },
              { label: 'b', task: '$\\frac{3}{4} - \\frac{1}{4}$', solution: '$\\frac{2}{4} = \\frac{1}{2}$' },
              { label: 'c', task: '$\\frac{1}{3} + \\frac{1}{6}$', solution: '$\\frac{2}{6} + \\frac{1}{6} = \\frac{3}{6} = \\frac{1}{2}$' },
              { label: 'd', task: '$\\frac{2}{3} + \\frac{3}{4}$', solution: '$\\frac{8}{12} + \\frac{9}{12} = \\frac{17}{12}$' },
              { label: 'e', task: '$\\frac{5}{6} - \\frac{1}{3}$', solution: '$\\frac{5}{6} - \\frac{2}{6} = \\frac{3}{6} = \\frac{1}{2}$' },
              { label: 'f', task: '$\\frac{7}{8} - \\frac{3}{4}$', solution: '$\\frac{7}{8} - \\frac{6}{8} = \\frac{1}{8}$' },
            ],
            solution: 'a) $\\frac{3}{5}$, b) $\\frac{1}{2}$, c) $\\frac{1}{2}$, d) $\\frac{17}{12}$, e) $\\frac{1}{2}$, f) $\\frac{1}{8}$',
            hideInlineSolution: true,
            hints: ['Finn fellesnevner før du adderer eller subtraherer tellerne'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-1-2-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-1-2-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Sammensatte brøkuttrykk.',
            subTasks: [
              { label: 'a', task: 'Regn ut $\\frac{1}{2} + \\frac{1}{3} \\cdot \\frac{3}{4}$', solution: '$\\frac{1}{2} + \\frac{3}{12} = \\frac{1}{2} + \\frac{1}{4} = \\frac{3}{4}$' },
              { label: 'b', task: 'Regn ut $\\frac{2}{3} \\cdot (\\frac{1}{2} + \\frac{1}{4})$', solution: '$\\frac{2}{3} \\cdot \\frac{3}{4} = \\frac{6}{12} = \\frac{1}{2}$' },
              { label: 'c', task: 'Regn ut $\\frac{5}{6} - \\frac{1}{2} \\cdot \\frac{2}{3}$', solution: '$\\frac{5}{6} - \\frac{2}{6} = \\frac{5}{6} - \\frac{1}{3} = \\frac{5}{6} - \\frac{2}{6} = \\frac{3}{6} = \\frac{1}{2}$' },
              { label: 'd', task: 'Regn ut $(\\frac{3}{4})^2$', solution: '$\\frac{9}{16}$' },
              { label: 'e', task: 'Regn ut $\\frac{\\frac{2}{3}}{\\frac{4}{5}}$', solution: '$\\frac{2}{3} \\cdot \\frac{5}{4} = \\frac{10}{12} = \\frac{5}{6}$' },
              { label: 'f', task: 'Regn ut $\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6}$', solution: '$\\frac{3}{6} + \\frac{2}{6} + \\frac{1}{6} = \\frac{6}{6} = 1$' },
            ],
            solution: 'a) $\\frac{3}{4}$, b) $\\frac{1}{2}$, c) $\\frac{1}{2}$, d) $\\frac{9}{16}$, e) $\\frac{5}{6}$, f) $1$',
            hideInlineSolution: true,
            hints: ['Husk regnerekkefølgen: potens, multiplikasjon/divisjon, addisjon/subtraksjon'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-1-2-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-1-2-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Brøkregning med variabler og praktiske oppgaver.',
            subTasks: [
              { label: 'a', task: 'Forenkle $\\frac{2x}{3} \\cdot \\frac{9}{4x}$ (for $x \\neq 0$)', solution: '$\\frac{18x}{12x} = \\frac{3}{2}$' },
              { label: 'b', task: 'Forenkle $\\frac{x}{4} + \\frac{x}{6}$', solution: '$\\frac{3x}{12} + \\frac{2x}{12} = \\frac{5x}{12}$' },
              { label: 'c', task: 'En kake deles i 8 biter. Marte spiser $\\frac{3}{8}$ og Nils spiser $\\frac{1}{4}$. Hvor mye er igjen?', solution: 'Spist: $\\frac{3}{8} + \\frac{2}{8} = \\frac{5}{8}$. Igjen: $1 - \\frac{5}{8} = \\frac{3}{8}$' },
              { label: 'd', task: 'Et oppdrag tar $\\frac{2}{3}$ time for én person. To personer deler jobben likt. Hvor lang tid bruker de?', solution: '$\\frac{2}{3} \\div 2 = \\frac{2}{3} \\cdot \\frac{1}{2} = \\frac{1}{3}$ time = 20 min' },
            ],
            solution: 'a) $\\frac{3}{2}$, b) $\\frac{5x}{12}$, c) $\\frac{3}{8}$, d) $\\frac{1}{3}$ time',
            hideInlineSolution: true,
            hints: ['Forkort like faktorer i teller og nevner. For tekstoppgaver: sett opp brøkuttrykket først.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-1-2-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-1-2-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Krevende brøkoppgaver.',
            subTasks: [
              { label: 'a', task: 'Forenkle $\\frac{1}{1 - \\frac{1}{3}}$', solution: '$\\frac{1}{\\frac{2}{3}} = \\frac{3}{2}$' },
              { label: 'b', task: 'Forenkle $\\frac{\\frac{1}{2} + \\frac{1}{3}}{\\frac{1}{4}}$', solution: '$\\frac{\\frac{5}{6}}{\\frac{1}{4}} = \\frac{5}{6} \\cdot 4 = \\frac{20}{6} = \\frac{10}{3}$' },
              { label: 'c', task: 'Finn $x$ når $\\frac{x}{x+2} = \\frac{3}{5}$ (for $x \\neq -2$)', solution: '$5x = 3(x+2) \\Rightarrow 5x = 3x + 6 \\Rightarrow 2x = 6 \\Rightarrow x = 3$' },
              { label: 'd', task: 'Vis at $\\frac{1}{n} - \\frac{1}{n+1} = \\frac{1}{n(n+1)}$ for alle $n \\neq 0$.', solution: '$\\frac{1}{n} - \\frac{1}{n+1} = \\frac{n+1 - n}{n(n+1)} = \\frac{1}{n(n+1)}$ ✓' },
            ],
            solution: 'a) $\\frac{3}{2}$, b) $\\frac{10}{3}$, c) $x = 3$, d) Se bevis',
            hideInlineSolution: true,
            hints: ['For sammensatte brøker: regn ut teller og nevner separat, og divider deretter'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_9_1_3: TextbookChapter = {
  id: '9-1-3',
  courseId: '9',
  chapterNumber: '1.3',
  title: 'Prosent og prosentvis endring',
  description: 'Prosentvis økning og nedgang, vekstfaktor.',
  estimatedMinutes: 50,
  competenceGoals: ['utforske og argumentere for korleis rekne med forhold, prosent og vekstfaktor'],
  content: [
    {
      id: '9-1-3-intro',
      type: 'text',
      content: `## Repetisjon av prosent

**Prosent** betyr "per hundre":
$$p\\% = \\frac{p}{100}$$

For eksempel: $25\\% = \\frac{25}{100} = 0{,}25$`,
    },
    {
      id: '9-1-3-def-1',
      type: 'definition',
      title: 'Vekstfaktor',
      content: `**Vekstfaktoren** brukes til å beregne ny verdi etter prosentvis endring:

- **Økning på $p\\%$**: Vekstfaktor $= 1 + \\frac{p}{100}$
- **Nedgang på $p\\%$**: Vekstfaktor $= 1 - \\frac{p}{100}$

Ny verdi $=$ Gammel verdi $\\times$ Vekstfaktor`,
    },
    {
      id: '9-1-3-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: `a) En vare koster 800 kr og øker med 15%. Finn ny pris.
b) En bukse på tilbud reduseres med 30%. Opprinnelig pris var 600 kr. Finn salgsprisen.`,
      solution: `**Løsning:**

a) Vekstfaktor: $1 + 0{,}15 = 1{,}15$
   Ny pris: $800 \\cdot 1{,}15 = 920$ kr

b) Vekstfaktor: $1 - 0{,}30 = 0{,}70$
   Salgspris: $600 \\cdot 0{,}70 = 420$ kr`,
    },
    {
      id: '9-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '9-1-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn ny verdi',
        subTasks: [
          { label: 'a', task: '500 kr øker med 20%', solution: '$500 \\cdot 1{,}20 = 600$ kr' },
          { label: 'b', task: '1200 kr reduseres med 25%', solution: '$1200 \\cdot 0{,}75 = 900$ kr' },
          { label: 'c', task: '450 kr øker med 8%', solution: '$450 \\cdot 1{,}08 = 486$ kr' },
          { label: 'd', task: '980 kr reduseres med 15%', solution: '$980 \\cdot 0{,}85 = 833$ kr' },
        ],
        solution: 'a) 600 kr, b) 900 kr, c) 486 kr, d) 833 kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-3-text-2',
      type: 'text',
      content: `## Finne prosentvis endring

$$\\text{Prosentvis endring} = \\frac{\\text{Ny verdi} - \\text{Gammel verdi}}{\\text{Gammel verdi}} \\times 100\\%$$

Eller med vekstfaktor:
$$\\text{Vekstfaktor} = \\frac{\\text{Ny verdi}}{\\text{Gammel verdi}}$$`,
    },
    {
      id: '9-1-3-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: `En aksjekurs stiger fra 250 kr til 300 kr. Finn prosentvis økning.`,
      solution: `**Løsning:**

Metode 1 (med formel):
$\\frac{300 - 250}{250} \\times 100\\% = \\frac{50}{250} \\times 100\\% = 20\\%$

Metode 2 (med vekstfaktor):
$\\frac{300}{250} = 1{,}20 = 120\\%$

Økningen er $120\\% - 100\\% = 20\\%$.`,
    },
    {
      id: '9-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '9-1-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn prosentvis endring',
        subTasks: [
          { label: 'a', task: 'Fra 400 til 500', solution: '$\\frac{100}{400} = 25\\%$ økning' },
          { label: 'b', task: 'Fra 800 til 600', solution: '$\\frac{-200}{800} = -25\\%$ (25% nedgang)' },
          { label: 'c', task: 'Fra 150 til 180', solution: '$\\frac{30}{150} = 20\\%$ økning' },
          { label: 'd', task: 'Fra 1000 til 850', solution: '$\\frac{-150}{1000} = -15\\%$ (15% nedgang)' },
        ],
        solution: 'a) 25% økning, b) 25% nedgang, c) 20% økning, d) 15% nedgang',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-3-text-3',
      type: 'text',
      content: `## Finne opprinnelig verdi

Når vi vet ny verdi og vekstfaktor:
$$\\text{Gammel verdi} = \\frac{\\text{Ny verdi}}{\\text{Vekstfaktor}}$$`,
    },
    {
      id: '9-1-3-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: `Etter 20% økning koster en vare 480 kr. Hva var opprinnelig pris?`,
      solution: `**Løsning:**

Vekstfaktor: $1{,}20$

Opprinnelig pris: $\\frac{480}{1{,}20} = 400$ kr`,
    },
    {
      id: '9-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '9-1-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn opprinnelig verdi',
        subTasks: [
          { label: 'a', task: 'Etter 25% økning: 750 kr', solution: '$\\frac{750}{1{,}25} = 600$ kr' },
          { label: 'b', task: 'Etter 30% rabatt: 560 kr', solution: '$\\frac{560}{0{,}70} = 800$ kr' },
          { label: 'c', task: 'Etter 10% økning: 1100 kr', solution: '$\\frac{1100}{1{,}10} = 1000$ kr' },
        ],
        solution: 'a) 600 kr, b) 800 kr, c) 1000 kr',
        hints: ['Del ny verdi på vekstfaktoren'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-3-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: `En pris øker først med 10%, deretter med 20%. Hva er total prosentvis økning?`,
      solution: `**Løsning:**

Total vekstfaktor: $1{,}10 \\cdot 1{,}20 = 1{,}32$

Total økning: $32\\%$ (ikke 30%!)`,
    },
    {
      id: '9-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: '9-1-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn total prosentvis endring',
        subTasks: [
          { label: 'a', task: 'Først 20% økning, så 10% økning', solution: '$1{,}20 \\cdot 1{,}10 = 1{,}32 \\Rightarrow 32\\%$ økning' },
          { label: 'b', task: 'Først 25% rabatt, så 20% rabatt', solution: '$0{,}75 \\cdot 0{,}80 = 0{,}60 \\Rightarrow 40\\%$ rabatt' },
          { label: 'c', task: 'Først 30% økning, så 20% nedgang', solution: '$1{,}30 \\cdot 0{,}80 = 1{,}04 \\Rightarrow 4\\%$ økning' },
        ],
        solution: 'a) 32%, b) 40%, c) 4%',
        hints: ['Gang vekstfaktorene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: '9-1-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn vekstfaktor og ny verdi',
        subTasks: [
          { label: 'a', task: '350 kr øker med 12%', solution: 'Vekstfaktor: $1{,}12$. Ny verdi: $350 \\cdot 1{,}12 = 392$ kr' },
          { label: 'b', task: '840 kr reduseres med 35%', solution: 'Vekstfaktor: $0{,}65$. Ny verdi: $840 \\cdot 0{,}65 = 546$ kr' },
          { label: 'c', task: '1500 kr øker med 5%', solution: 'Vekstfaktor: $1{,}05$. Ny verdi: $1500 \\cdot 1{,}05 = 1575$ kr' },
          { label: 'd', task: '620 kr reduseres med 45%', solution: 'Vekstfaktor: $0{,}55$. Ny verdi: $620 \\cdot 0{,}55 = 341$ kr' },
        ],
        solution: 'a) 392 kr, b) 546 kr, c) 1575 kr, d) 341 kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-3-ex-6',
      type: 'exercise',
      exercise: {
        id: '9-1-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn prosentvis endring (avrund til én desimal)',
        subTasks: [
          { label: 'a', task: 'Fra 240 til 300', solution: '$\\frac{300-240}{240} \\times 100 = 25\\%$ økning' },
          { label: 'b', task: 'Fra 580 til 493', solution: '$\\frac{493-580}{580} \\times 100 = -15\\%$ (15% nedgang)' },
          { label: 'c', task: 'Fra 125 til 145', solution: '$\\frac{145-125}{125} \\times 100 = 16\\%$ økning' },
          { label: 'd', task: 'Fra 720 til 540', solution: '$\\frac{540-720}{720} \\times 100 = -25\\%$ (25% nedgang)' },
        ],
        solution: 'a) 25% økning, b) 15% nedgang, c) 16% økning, d) 25% nedgang',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-3-ex-7',
      type: 'exercise',
      exercise: {
        id: '9-1-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn opprinnelig verdi',
        subTasks: [
          { label: 'a', task: 'Etter 15% økning: 460 kr', solution: '$\\frac{460}{1{,}15} = 400$ kr' },
          { label: 'b', task: 'Etter 40% rabatt: 360 kr', solution: '$\\frac{360}{0{,}60} = 600$ kr' },
          { label: 'c', task: 'Etter 8% økning: 540 kr', solution: '$\\frac{540}{1{,}08} = 500$ kr' },
          { label: 'd', task: 'Etter 20% rabatt: 480 kr', solution: '$\\frac{480}{0{,}80} = 600$ kr' },
        ],
        solution: 'a) 400 kr, b) 600 kr, c) 500 kr, d) 600 kr',
        hints: ['Opprinnelig verdi = Ny verdi ÷ Vekstfaktor'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-3-ex-8',
      type: 'exercise',
      exercise: {
        id: '9-1-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Beregn total prosentvis endring etter flere endringer',
        subTasks: [
          { label: 'a', task: 'Først 15% økning, deretter 10% nedgang', solution: '$1{,}15 \\cdot 0{,}90 = 1{,}035 \\Rightarrow 3{,}5\\%$ økning' },
          { label: 'b', task: 'Først 40% økning, deretter 25% nedgang', solution: '$1{,}40 \\cdot 0{,}75 = 1{,}05 \\Rightarrow 5\\%$ økning' },
          { label: 'c', task: 'Først 20% nedgang, deretter 20% økning', solution: '$0{,}80 \\cdot 1{,}20 = 0{,}96 \\Rightarrow 4\\%$ nedgang (ikke 0%!)' },
          { label: 'd', task: 'Tre påfølgende rabatter: 10%, 20%, 10%', solution: '$0{,}90 \\cdot 0{,}80 \\cdot 0{,}90 = 0{,}648 \\Rightarrow 35{,}2\\%$ total rabatt' },
        ],
        solution: 'a) 3,5% økning, b) 5% økning, c) 4% nedgang, d) 35,2% rabatt',
        hints: ['Gang vekstfaktorene sammen. Merk: 20% ned og 20% opp gir ikke 0%!'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-3-ex-9',
      type: 'exercise',
      exercise: {
        id: '9-1-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs praktiske prosentoppgaver',
        subTasks: [
          { label: 'a', task: 'En jakke koster 1200 kr. Den settes ned 30% i salg. Hva er salgsprisen?', solution: '$1200 \\cdot 0{,}70 = 840$ kr' },
          { label: 'b', task: 'Strømprisen øker med 18%. Før økningen betalte familien 1500 kr/mnd. Hva blir ny regning?', solution: '$1500 \\cdot 1{,}18 = 1770$ kr' },
          { label: 'c', task: 'Husprisen steg fra 3 200 000 kr til 3 680 000 kr. Finn prosentvis økning.', solution: '$\\frac{480000}{3200000} \\times 100 = 15\\%$' },
          { label: 'd', task: 'En bil synker 12% i verdi per år. Ny pris var 350 000 kr. Hva er verdien etter 1 år?', solution: '$350000 \\cdot 0{,}88 = 308000$ kr' },
        ],
        solution: 'a) 840 kr, b) 1770 kr, c) 15%, d) 308 000 kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-3-ex-10',
      type: 'exercise',
      exercise: {
        id: '9-1-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjentatt prosentvis endring (eksponentiell vekst)',
        subTasks: [
          { label: 'a', task: 'Et beløp på 10 000 kr vokser med 5% per år i 3 år. Hva blir sluttbeløpet?', solution: '$10000 \\cdot 1{,}05^3 = 10000 \\cdot 1{,}157625 = 11576{,}25$ kr' },
          { label: 'b', task: 'En bil synker 15% i verdi per år. Ny pris: 400 000 kr. Hva er verdien etter 2 år?', solution: '$400000 \\cdot 0{,}85^2 = 400000 \\cdot 0{,}7225 = 289000$ kr' },
          { label: 'c', task: 'Befolkningen i en by øker med 2% per år. Nå bor det 50 000 der. Hvor mange bor der om 4 år?', solution: '$50000 \\cdot 1{,}02^4 = 50000 \\cdot 1{,}0824 \\approx 54122$' },
        ],
        solution: 'a) 11 576,25 kr, b) 289 000 kr, c) ca. 54 122 innbyggere',
        hints: ['Bruk formelen: Sluttverdi = Startverdi × (vekstfaktor)^n'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-3-ex-11',
      type: 'exercise',
      exercise: {
        id: '9-1-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tekstoppgaver med prosent',
        subTasks: [
          { label: 'a', task: 'Etter at en butikk hadde 25% salg, kostet en genser 450 kr. Hva var opprinnelig pris?', solution: '$\\frac{450}{0{,}75} = 600$ kr' },
          { label: 'b', task: 'Jonas fikk 8% lønnsøkning. Ny lønn er 27 000 kr/mnd. Hva var lønnen før?', solution: '$\\frac{27000}{1{,}08} = 25000$ kr' },
          { label: 'c', task: 'Aksjekursen falt 12%, og er nå 440 kr. Hva var kursen før fallet?', solution: '$\\frac{440}{0{,}88} = 500$ kr' },
        ],
        solution: 'a) 600 kr, b) 25 000 kr, c) 500 kr',
        hints: ['Finn vekstfaktoren, deretter del på den'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-3-ex-12',
      type: 'exercise',
      exercise: {
        id: '9-1-3-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordringsoppgaver',
        subTasks: [
          { label: 'a', task: 'Prisen på en vare økte først med 20%, deretter ble den satt ned med 20%. Er prisen nå den samme som før? Begrunn svaret.', solution: 'Nei! $1{,}20 \\cdot 0{,}80 = 0{,}96$, altså 4% lavere enn opprinnelig.' },
          { label: 'b', task: 'En pris skal økes med 50%. Med hvor mange prosent må den deretter reduseres for å komme tilbake til opprinnelig pris?', solution: 'Etter 50% økning er vekstfaktor $1{,}50$. For å komme tilbake: $\\frac{1}{1{,}50} = 0{,}\\overline{6}$, altså 33,3% reduksjon.' },
          { label: 'c', task: 'En aksje stiger 25% én dag og faller 20% neste dag. Hva er total prosentvis endring?', solution: '$1{,}25 \\cdot 0{,}80 = 1{,}00$. Ingen endring! Tilbake til utgangspunktet.' },
        ],
        solution: 'a) 4% lavere, b) 33,3% reduksjon, c) 0% endring',
        hints: ['Gang vekstfaktorene og analyser resultatet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-1-3-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '9-1-3-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-1-3-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Regn ut prosent av et tall.',
            subTasks: [
              { label: 'a', task: 'Hva er $25\\%$ av $200$?', solution: '$0{,}25 \\cdot 200 = 50$' },
              { label: 'b', task: 'Hva er $10\\%$ av $450$?', solution: '$0{,}10 \\cdot 450 = 45$' },
              { label: 'c', task: 'Hva er $75\\%$ av $80$?', solution: '$0{,}75 \\cdot 80 = 60$' },
              { label: 'd', task: 'Hva er $5\\%$ av $600$?', solution: '$0{,}05 \\cdot 600 = 30$' },
              { label: 'e', task: 'Hva er $150\\%$ av $40$?', solution: '$1{,}50 \\cdot 40 = 60$' },
              { label: 'f', task: 'Hva er $33{,}3\\%$ av $90$?', solution: '$0{,}333 \\cdot 90 \\approx 30$' },
            ],
            solution: 'a) 50, b) 45, c) 60, d) 30, e) 60, f) 30',
            hideInlineSolution: true,
            hints: ['Gjør om prosent til desimaltall ved å dele på 100, og gang deretter med tallet'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-1-3-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-1-3-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Finn prosentandeler og prosentvis endring.',
            subTasks: [
              { label: 'a', task: 'Hvor mange prosent er $15$ av $60$?', solution: '$\\frac{15}{60} \\cdot 100\\% = 25\\%$' },
              { label: 'b', task: 'Hvor mange prosent er $45$ av $180$?', solution: '$\\frac{45}{180} \\cdot 100\\% = 25\\%$' },
              { label: 'c', task: 'Prisen gikk fra $200$ kr til $250$ kr. Hva er den prosentvise økningen?', solution: '$\\frac{250-200}{200} \\cdot 100\\% = 25\\%$' },
              { label: 'd', task: 'Prisen gikk fra $500$ kr til $400$ kr. Hva er den prosentvise nedgangen?', solution: '$\\frac{500-400}{500} \\cdot 100\\% = 20\\%$' },
              { label: 'e', task: 'En vare som kostet $300$ kr får $15\\%$ avslag. Hva er ny pris?', solution: '$300 \\cdot 0{,}85 = 255$ kr' },
              { label: 'f', task: 'En lønn på $25\\,000$ kr økes med $4\\%$. Hva er ny lønn?', solution: '$25\\,000 \\cdot 1{,}04 = 26\\,000$ kr' },
            ],
            solution: 'a) 25%, b) 25%, c) 25%, d) 20%, e) 255 kr, f) 26 000 kr',
            hideInlineSolution: true,
            hints: ['Prosentvis endring = $\\frac{\\text{endring}}{\\text{opprinnelig verdi}} \\cdot 100\\%$'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-1-3-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-1-3-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Bestem vekstfaktorer.',
            subTasks: [
              { label: 'a', task: 'Hva er vekstfaktoren for en økning på $20\\%$?', solution: '$1 + 0{,}20 = 1{,}20$' },
              { label: 'b', task: 'Hva er vekstfaktoren for en nedgang på $15\\%$?', solution: '$1 - 0{,}15 = 0{,}85$' },
              { label: 'c', task: 'Hva er vekstfaktoren for en økning på $8\\%$?', solution: '$1 + 0{,}08 = 1{,}08$' },
              { label: 'd', task: 'Hva er vekstfaktoren for en nedgang på $30\\%$?', solution: '$1 - 0{,}30 = 0{,}70$' },
              { label: 'e', task: 'Vekstfaktoren er $1{,}12$. Hvor stor er den prosentvise økningen?', solution: '$1{,}12 - 1 = 0{,}12 = 12\\%$ økning' },
              { label: 'f', task: 'Vekstfaktoren er $0{,}65$. Hvor stor er den prosentvise nedgangen?', solution: '$1 - 0{,}65 = 0{,}35 = 35\\%$ nedgang' },
            ],
            solution: 'a) 1,20, b) 0,85, c) 1,08, d) 0,70, e) 12%, f) 35%',
            hideInlineSolution: true,
            hints: ['Økning: vekstfaktor $= 1 + \\frac{p}{100}$. Nedgang: vekstfaktor $= 1 - \\frac{p}{100}$'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-1-3-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-1-3-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Bruk vekstfaktor til å løse prosentoppgaver.',
            subTasks: [
              { label: 'a', task: 'En jakke koster $800$ kr. Den settes ned $25\\%$. Hva er ny pris? Bruk vekstfaktor.', solution: '$800 \\cdot 0{,}75 = 600$ kr' },
              { label: 'b', task: 'En aksje steg $12\\%$ i verdi. Den var verdt $5000$ kr. Hva er den verdt nå?', solution: '$5000 \\cdot 1{,}12 = 5600$ kr' },
              { label: 'c', task: 'Etter $20\\%$ rabatt koster en vare $320$ kr. Hva var opprinnelig pris?', solution: '$\\text{Pris} \\cdot 0{,}80 = 320 \\Rightarrow \\text{Pris} = \\frac{320}{0{,}80} = 400$ kr' },
              { label: 'd', task: 'Etter en lønnsøkning på $5\\%$ tjener Kari $31\\,500$ kr. Hva var lønnen før?', solution: '$\\text{Lønn} \\cdot 1{,}05 = 31\\,500 \\Rightarrow \\text{Lønn} = \\frac{31\\,500}{1{,}05} = 30\\,000$ kr' },
              { label: 'e', task: 'Et innskudd på $10\\,000$ kr får $3\\%$ rente per år. Hva er beløpet etter 2 år?', solution: '$10\\,000 \\cdot 1{,}03^2 = 10\\,000 \\cdot 1{,}0609 = 10\\,609$ kr' },
              { label: 'f', task: 'En befolkning på $50\\,000$ vokser med $2\\%$ per år. Hva er befolkningen etter 3 år?', solution: '$50\\,000 \\cdot 1{,}02^3 = 50\\,000 \\cdot 1{,}0612 \\approx 53\\,060$' },
            ],
            solution: 'a) 600 kr, b) 5600 kr, c) 400 kr, d) 30 000 kr, e) 10 609 kr, f) ca. 53 060',
            hideInlineSolution: true,
            hints: ['For å finne opprinnelig pris: del på vekstfaktoren. For gjentatt endring: opphøy vekstfaktoren.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-1-3-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-1-3-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Sammensatte prosentoppgaver.',
            subTasks: [
              { label: 'a', task: 'En vare øker først $10\\%$ i pris, deretter $10\\%$ til. Hva er den totale prosentvise økningen?', solution: '$1{,}10 \\cdot 1{,}10 = 1{,}21$, altså $21\\%$ økning (ikke $20\\%$!)' },
              { label: 'b', task: 'En vare settes ned $20\\%$, og deretter settes den opp $20\\%$. Er prisen tilbake til utgangspunktet?', solution: '$0{,}80 \\cdot 1{,}20 = 0{,}96$. Nei, prisen er $4\\%$ lavere enn opprinnelig.' },
              { label: 'c', task: 'MVA er $25\\%$. En vare koster $500$ kr uten mva. Hva koster den med mva?', solution: '$500 \\cdot 1{,}25 = 625$ kr' },
              { label: 'd', task: 'En vare koster $750$ kr inkludert $25\\%$ mva. Hva er prisen uten mva?', solution: '$\\frac{750}{1{,}25} = 600$ kr' },
            ],
            solution: 'a) 21%, b) Nei, 4% lavere, c) 625 kr, d) 600 kr',
            hideInlineSolution: true,
            hints: ['Gang vekstfaktorene for å finne samlet endring ved gjentatte prosentvise endringer'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-1-3-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-1-3-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Krevende prosentoppgaver.',
            subTasks: [
              { label: 'a', task: 'En vare har blitt satt ned $30\\%$ og koster nå $420$ kr. Butikken ønsker å sette den tilbake til opprinnelig pris. Hvor mange prosent må prisen økes?', solution: 'Opprinnelig: $\\frac{420}{0{,}70} = 600$ kr. Økning: $\\frac{600-420}{420} \\cdot 100\\% \\approx 42{,}9\\%$' },
              { label: 'b', task: 'Et lån på $100\\,000$ kr har $5\\%$ rente per år. Etter 3 år har man betalt kun renter. Hvor mye skylder man totalt?', solution: '$100\\,000 \\cdot 1{,}05^3 = 100\\,000 \\cdot 1{,}1576 = 115\\,762{,}50$ kr' },
              { label: 'c', task: 'En by hadde 80 000 innbyggere. Befolkningen vokste med $x\\%$ per år. Etter 5 år var det 88 000 innbyggere. Finn $x$.', solution: '$80\\,000 \\cdot (1 + \\frac{x}{100})^5 = 88\\,000 \\Rightarrow (1+\\frac{x}{100})^5 = 1{,}1 \\Rightarrow 1+\\frac{x}{100} = 1{,}1^{1/5} \\approx 1{,}0192 \\Rightarrow x \\approx 1{,}9\\%$' },
              { label: 'd', task: 'En vare øker $p\\%$ og settes deretter ned $p\\%$. Vis at den endelige prisen alltid er lavere enn startprisen.', solution: 'Vekstfaktor: $(1+\\frac{p}{100})(1-\\frac{p}{100}) = 1 - (\\frac{p}{100})^2 < 1$ for alle $p > 0$.' },
            ],
            solution: 'a) ca. 42,9%, b) 115 762,50 kr, c) ca. 1,9%, d) Se bevis',
            hideInlineSolution: true,
            hints: ['For å finne opprinnelig verdi: del på vekstfaktoren for nedgangen. For gjentatt vekst: bruk potens av vekstfaktor.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_9_1_4: TextbookChapter = {
  id: '9-1-4',
  courseId: '9',
  chapterNumber: '1.4',
  title: 'Standardform',
  description: 'Skrive tall på standardform og regne med store og små tall.',
  estimatedMinutes: 40,
  competenceGoals: ['utvikle og bruke metodar for hovudrekning, overslagsrekning og skriftleg rekning'],
  content: [
    {
      id: '9-1-4-intro',
      type: 'text',
      content: `## Hva er standardform?

**Standardform** (vitenskapelig notasjon) brukes til å skrive veldig store eller veldig små tall på en kompakt måte.

Et tall på standardform skrives som:
$$a \\times 10^n$$
der $1 \\leq a < 10$ og $n$ er et heltall.`,
    },
    {
      id: '9-1-4-def-1',
      type: 'definition',
      title: 'Regler for standardform',
      content: `- **Store tall**: $n > 0$ (flytt desimalkomma til venstre)
- **Små tall**: $n < 0$ (flytt desimalkomma til høyre)
- $n$ = antall plasser desimalkomma flyttes`,
    },
    {
      id: '9-1-4-standardform-bilde',
      type: 'image',
      src: '/images/9-klasse/standardform.svg',
      alt: 'Illustrasjon av standardform med store og sma tall',
      caption: 'Standardform brukes for veldig store og veldig sma tall',
    },
    {
      id: '9-1-4-eksempler-text',
      type: 'text',
      content: `### Eksempler

Eksempler:
- $4500000 = 4{,}5 \\times 10^6$
- $0{,}00032 = 3{,}2 \\times 10^{-4}$`,
    },
    {
      id: '9-1-4-example-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: `Skriv på standardform:

a) 5 800 000
b) 0,000 047
c) 320 000 000`,
      solution: `**Løsning:**

a) $5800000 = 5{,}8 \\times 10^6$ (flytt 6 plasser til venstre)

b) $0{,}000047 = 4{,}7 \\times 10^{-5}$ (flytt 5 plasser til høyre)

c) $320000000 = 3{,}2 \\times 10^8$`,
    },
    {
      id: '9-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: '9-1-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv på standardform',
        subTasks: [
          { label: 'a', task: '7 300 000', solution: '$7{,}3 \\times 10^6$' },
          { label: 'b', task: '0,000 082', solution: '$8{,}2 \\times 10^{-5}$' },
          { label: 'c', task: '45 000 000 000', solution: '$4{,}5 \\times 10^{10}$' },
          { label: 'd', task: '0,000 000 91', solution: '$9{,}1 \\times 10^{-7}$' },
        ],
        solution: 'a) 7,3×10⁶, b) 8,2×10⁻⁵, c) 4,5×10¹⁰, d) 9,1×10⁻⁷',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-4-example-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: `Skriv som vanlig tall:

a) $3{,}5 \\times 10^4$
b) $6{,}2 \\times 10^{-3}$`,
      solution: `**Løsning:**

a) $3{,}5 \\times 10^4 = 35000$ (flytt 4 plasser til høyre)

b) $6{,}2 \\times 10^{-3} = 0{,}0062$ (flytt 3 plasser til venstre)`,
    },
    {
      id: '9-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: '9-1-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv som vanlig tall',
        subTasks: [
          { label: 'a', task: '$2{,}4 \\times 10^5$', solution: '240 000' },
          { label: 'b', task: '$8{,}1 \\times 10^{-4}$', solution: '0,000 81' },
          { label: 'c', task: '$5{,}67 \\times 10^7$', solution: '56 700 000' },
          { label: 'd', task: '$1{,}9 \\times 10^{-6}$', solution: '0,000 001 9' },
        ],
        solution: 'a) 240000, b) 0,00081, c) 56700000, d) 0,0000019',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-4-text-3',
      type: 'text',
      content: `## Regning med standardform

Når vi ganger tall på standardform, bruker vi potensreglene:
$$(a \\times 10^m) \\cdot (b \\times 10^n) = (a \\cdot b) \\times 10^{m+n}$$`,
    },
    {
      id: '9-1-4-example-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: `Regn ut og skriv svaret på standardform:

a) $(3 \\times 10^4) \\cdot (2 \\times 10^5)$
b) $\\frac{8 \\times 10^9}{4 \\times 10^3}$`,
      solution: `**Løsning:**

a) $(3 \\times 10^4) \\cdot (2 \\times 10^5) = 6 \\times 10^{4+5} = 6 \\times 10^9$

b) $\\frac{8 \\times 10^9}{4 \\times 10^3} = 2 \\times 10^{9-3} = 2 \\times 10^6$`,
    },
    {
      id: '9-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: '9-1-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut og skriv svaret på standardform',
        subTasks: [
          { label: 'a', task: '$(4 \\times 10^3) \\cdot (5 \\times 10^6)$', solution: '$2 \\times 10^{10}$' },
          { label: 'b', task: '$(6 \\times 10^8) \\div (3 \\times 10^2)$', solution: '$2 \\times 10^6$' },
          { label: 'c', task: '$(2{,}5 \\times 10^4) \\cdot (4 \\times 10^{-2})$', solution: '$1 \\times 10^3 = 10^3$' },
          { label: 'd', task: '$(9 \\times 10^{-3}) \\div (3 \\times 10^{-7})$', solution: '$3 \\times 10^4$' },
        ],
        solution: 'a) 2×10¹⁰, b) 2×10⁶, c) 10³, d) 3×10⁴',
        hints: ['Husk å justere hvis a blir ≥10 eller <1'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-4-example-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: `Avstanden fra jorden til solen er ca. $1{,}5 \\times 10^8$ km. Lyset beveger seg med hastighet $3 \\times 10^5$ km/s. Hvor lang tid bruker lyset fra solen til jorden?`,
      solution: `**Løsning:**

$t = \\frac{s}{v} = \\frac{1{,}5 \\times 10^8}{3 \\times 10^5} = 0{,}5 \\times 10^3 = 5 \\times 10^2 = 500$ sekunder

Lyset bruker ca. 8 minutter og 20 sekunder.`,
    },
    {
      id: '9-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: '9-1-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene med standardform',
        subTasks: [
          { label: 'a', task: 'Jordens masse er $6 \\times 10^{24}$ kg. Månens masse er $7{,}3 \\times 10^{22}$ kg. Hvor mange ganger tyngre er jorden?', solution: '$\\frac{6 \\times 10^{24}}{7{,}3 \\times 10^{22}} \\approx 82$ ganger' },
          { label: 'b', task: 'En bakterie er $2 \\times 10^{-6}$ m lang. Hvor mange bakterier på rad får plass på 1 cm?', solution: '$\\frac{10^{-2}}{2 \\times 10^{-6}} = 5 \\times 10^3 = 5000$' },
        ],
        solution: 'a) ca. 82 ganger, b) 5000 bakterier',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: '9-1-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv på standardform',
        subTasks: [
          { label: 'a', task: '12 500 000', solution: '$1{,}25 \\times 10^7$' },
          { label: 'b', task: '0,000 000 45', solution: '$4{,}5 \\times 10^{-7}$' },
          { label: 'c', task: '890 000', solution: '$8{,}9 \\times 10^5$' },
          { label: 'd', task: '0,000 067', solution: '$6{,}7 \\times 10^{-5}$' },
          { label: 'e', task: '3 450 000 000', solution: '$3{,}45 \\times 10^9$' },
        ],
        solution: 'a) 1,25×10⁷, b) 4,5×10⁻⁷, c) 8,9×10⁵, d) 6,7×10⁻⁵, e) 3,45×10⁹',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-4-ex-6',
      type: 'exercise',
      exercise: {
        id: '9-1-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv som vanlig tall',
        subTasks: [
          { label: 'a', task: '$4{,}2 \\times 10^6$', solution: '4 200 000' },
          { label: 'b', task: '$7{,}5 \\times 10^{-5}$', solution: '0,000 075' },
          { label: 'c', task: '$1{,}23 \\times 10^8$', solution: '123 000 000' },
          { label: 'd', task: '$9{,}1 \\times 10^{-3}$', solution: '0,009 1' },
          { label: 'e', task: '$6{,}02 \\times 10^{23}$', solution: '602 000 000 000 000 000 000 000 (Avogadros tall!)' },
        ],
        solution: 'a) 4200000, b) 0,000075, c) 123000000, d) 0,0091, e) 6,02×10²³',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-4-ex-7',
      type: 'exercise',
      exercise: {
        id: '9-1-4-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Ranger tallene fra minst til størst',
        subTasks: [
          { label: 'a', task: '$3{,}2 \\times 10^5$, $4{,}1 \\times 10^4$, $2{,}9 \\times 10^6$', solution: '$4{,}1 \\times 10^4 < 3{,}2 \\times 10^5 < 2{,}9 \\times 10^6$' },
          { label: 'b', task: '$5{,}5 \\times 10^{-3}$, $8{,}2 \\times 10^{-4}$, $1{,}1 \\times 10^{-2}$', solution: '$8{,}2 \\times 10^{-4} < 5{,}5 \\times 10^{-3} < 1{,}1 \\times 10^{-2}$' },
          { label: 'c', task: '$6 \\times 10^7$, $9 \\times 10^6$, $5{,}5 \\times 10^7$', solution: '$9 \\times 10^6 < 5{,}5 \\times 10^7 < 6 \\times 10^7$' },
        ],
        solution: 'Se deloppgavene',
        hints: ['Sammenlign eksponentene først. Hvis de er like, sammenlign koeffisientene.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-4-ex-8',
      type: 'exercise',
      exercise: {
        id: '9-1-4-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut og skriv svaret på standardform',
        subTasks: [
          { label: 'a', task: '$(5 \\times 10^4) \\cdot (3 \\times 10^5)$', solution: '$15 \\times 10^9 = 1{,}5 \\times 10^{10}$' },
          { label: 'b', task: '$(8 \\times 10^{-2}) \\cdot (4 \\times 10^{-3})$', solution: '$32 \\times 10^{-5} = 3{,}2 \\times 10^{-4}$' },
          { label: 'c', task: '$(1{,}2 \\times 10^7) \\div (4 \\times 10^2)$', solution: '$0{,}3 \\times 10^5 = 3 \\times 10^4$' },
          { label: 'd', task: '$(6{,}4 \\times 10^{-5}) \\div (8 \\times 10^{-9})$', solution: '$0{,}8 \\times 10^4 = 8 \\times 10^3$' },
        ],
        solution: 'a) 1,5×10¹⁰, b) 3,2×10⁻⁴, c) 3×10⁴, d) 8×10³',
        hints: ['Husk å justere slik at koeffisienten er mellom 1 og 10'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-4-ex-9',
      type: 'exercise',
      exercise: {
        id: '9-1-4-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Addisjon og subtraksjon med standardform',
        subTasks: [
          { label: 'a', task: '$(3 \\times 10^5) + (2 \\times 10^5)$', solution: '$5 \\times 10^5$' },
          { label: 'b', task: '$(5{,}2 \\times 10^7) - (1{,}2 \\times 10^7)$', solution: '$4 \\times 10^7$' },
          { label: 'c', task: '$(4 \\times 10^6) + (3 \\times 10^5)$', solution: '$4 \\times 10^6 + 0{,}3 \\times 10^6 = 4{,}3 \\times 10^6$' },
          { label: 'd', task: '$(8 \\times 10^{-3}) - (5 \\times 10^{-4})$', solution: '$8 \\times 10^{-3} - 0{,}5 \\times 10^{-3} = 7{,}5 \\times 10^{-3}$' },
        ],
        solution: 'a) 5×10⁵, b) 4×10⁷, c) 4,3×10⁶, d) 7,5×10⁻³',
        hints: ['Ved addisjon/subtraksjon må eksponentene være like først!'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-4-ex-10',
      type: 'exercise',
      exercise: {
        id: '9-1-4-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Praktiske oppgaver med standardform',
        subTasks: [
          { label: 'a', task: 'Avstanden til nærmeste stjerne (Proxima Centauri) er ca. $4 \\times 10^{13}$ km. Lyset har hastighet $3 \\times 10^5$ km/s. Hvor mange sekunder bruker lyset?', solution: '$\\frac{4 \\times 10^{13}}{3 \\times 10^5} \\approx 1{,}33 \\times 10^8$ sekunder (ca. 4,2 år)' },
          { label: 'b', task: 'Et virus har diameter $1{,}2 \\times 10^{-7}$ m. Hvor mange virus på rad får plass på 1 mm?', solution: '$\\frac{10^{-3}}{1{,}2 \\times 10^{-7}} \\approx 8{,}3 \\times 10^3 \\approx 8333$ virus' },
          { label: 'c', task: 'Jordens overflate er $5{,}1 \\times 10^8$ km². Havet dekker 71%. Hvor stort er havets areal?', solution: '$5{,}1 \\times 10^8 \\times 0{,}71 \\approx 3{,}6 \\times 10^8$ km²' },
        ],
        solution: 'a) ca. 1,33×10⁸ sek, b) ca. 8333 virus, c) ca. 3,6×10⁸ km²',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-4-ex-11',
      type: 'exercise',
      exercise: {
        id: '9-1-4-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: 'Astronomi og biologi med standardform',
        subTasks: [
          { label: 'a', task: 'Solens diameter er ca. $1{,}4 \\times 10^6$ km. Jordens diameter er ca. $1{,}3 \\times 10^4$ km. Hvor mange ganger større er solen?', solution: '$\\frac{1{,}4 \\times 10^6}{1{,}3 \\times 10^4} \\approx 1{,}08 \\times 10^2 \\approx 108$ ganger' },
          { label: 'b', task: 'Antall røde blodceller i kroppen er ca. $2{,}5 \\times 10^{13}$. Hver celle lever i ca. 120 dager. Hvor mange celler dør per dag?', solution: '$\\frac{2{,}5 \\times 10^{13}}{120} \\approx 2{,}1 \\times 10^{11}$ celler' },
          { label: 'c', task: 'Et menneskehår er ca. $8 \\times 10^{-5}$ m tykt. Et atom er ca. $1 \\times 10^{-10}$ m. Hvor mange atomer på rad i et hårstrås bredde?', solution: '$\\frac{8 \\times 10^{-5}}{1 \\times 10^{-10}} = 8 \\times 10^5 = 800000$ atomer' },
        ],
        solution: 'a) ca. 108 ganger, b) ca. 2,1×10¹¹ celler, c) 800 000 atomer',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-1-4-ex-12',
      type: 'exercise',
      exercise: {
        id: '9-1-4-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordringsoppgaver',
        subTasks: [
          { label: 'a', task: 'Regn ut: $\\frac{(4 \\times 10^8) \\cdot (6 \\times 10^{-3})}{(8 \\times 10^2)}$', solution: '$\\frac{24 \\times 10^5}{8 \\times 10^2} = 3 \\times 10^3$' },
          { label: 'b', task: 'Hva er $(5 \\times 10^4)^2$ på standardform?', solution: '$25 \\times 10^8 = 2{,}5 \\times 10^9$' },
          { label: 'c', task: 'Finn $\\sqrt{9 \\times 10^8}$ på standardform', solution: '$\\sqrt{9} \\times \\sqrt{10^8} = 3 \\times 10^4$' },
          { label: 'd', task: 'Regn ut: $(2 \\times 10^3)^3 \\div (4 \\times 10^5)$', solution: '$\\frac{8 \\times 10^9}{4 \\times 10^5} = 2 \\times 10^4$' },
        ],
        solution: 'a) 3×10³, b) 2,5×10⁹, c) 3×10⁴, d) 2×10⁴',
        hints: ['Bruk potensreglene: $(a^m)^n = a^{mn}$ og $\\sqrt{a^n} = a^{n/2}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-1-4-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '9-1-4-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-1-4-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Skriv tallene på standardform.',
            subTasks: [
              { label: 'a', task: 'Skriv $3400$ på standardform.', solution: '$3{,}4 \\times 10^3$' },
              { label: 'b', task: 'Skriv $670\\,000$ på standardform.', solution: '$6{,}7 \\times 10^5$' },
              { label: 'c', task: 'Skriv $0{,}0052$ på standardform.', solution: '$5{,}2 \\times 10^{-3}$' },
              { label: 'd', task: 'Skriv $0{,}000089$ på standardform.', solution: '$8{,}9 \\times 10^{-5}$' },
              { label: 'e', task: 'Skriv $45\\,000\\,000$ på standardform.', solution: '$4{,}5 \\times 10^7$' },
              { label: 'f', task: 'Skriv $0{,}71$ på standardform.', solution: '$7{,}1 \\times 10^{-1}$' },
            ],
            solution: 'a) $3{,}4 \\times 10^3$, b) $6{,}7 \\times 10^5$, c) $5{,}2 \\times 10^{-3}$, d) $8{,}9 \\times 10^{-5}$, e) $4{,}5 \\times 10^7$, f) $7{,}1 \\times 10^{-1}$',
            hideInlineSolution: true,
            hints: ['Flytt desimalkommaet slik at det står ett siffer (ikke null) foran kommaet. Antall plasser du flytter blir eksponenten.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-1-4-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-1-4-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Skriv om fra standardform til vanlig tall.',
            subTasks: [
              { label: 'a', task: 'Skriv $2{,}5 \\times 10^4$ som vanlig tall.', solution: '$25\\,000$' },
              { label: 'b', task: 'Skriv $8{,}1 \\times 10^6$ som vanlig tall.', solution: '$8\\,100\\,000$' },
              { label: 'c', task: 'Skriv $3{,}7 \\times 10^{-2}$ som vanlig tall.', solution: '$0{,}037$' },
              { label: 'd', task: 'Skriv $9{,}03 \\times 10^{-4}$ som vanlig tall.', solution: '$0{,}000903$' },
              { label: 'e', task: 'Skriv $1{,}2 \\times 10^0$ som vanlig tall.', solution: '$1{,}2$' },
              { label: 'f', task: 'Skriv $6{,}022 \\times 10^{23}$ som vanlig tall (Avogadros tall). Beskriv størrelsen.', solution: '$602\\,200\\,000\\,000\\,000\\,000\\,000\\,000$. Et enormt stort tall brukt i kjemi.' },
            ],
            solution: 'a) $25\\,000$, b) $8\\,100\\,000$, c) $0{,}037$, d) $0{,}000903$, e) $1{,}2$, f) Se svar',
            hideInlineSolution: true,
            hints: ['Positiv eksponent: flytt kommaet til høyre. Negativ eksponent: flytt kommaet til venstre.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-1-4-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-1-4-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Sorter tallene etter størrelse.',
            subTasks: [
              { label: 'a', task: 'Sorter fra minst til størst: $3{,}2 \\times 10^4$, $5{,}1 \\times 10^3$, $9{,}8 \\times 10^4$', solution: '$5{,}1 \\times 10^3 < 3{,}2 \\times 10^4 < 9{,}8 \\times 10^4$' },
              { label: 'b', task: 'Sorter fra minst til størst: $2{,}3 \\times 10^{-2}$, $4{,}5 \\times 10^{-3}$, $1{,}1 \\times 10^{-1}$', solution: '$4{,}5 \\times 10^{-3} < 2{,}3 \\times 10^{-2} < 1{,}1 \\times 10^{-1}$' },
              { label: 'c', task: 'Hvilket tall er størst: $8{,}9 \\times 10^5$ eller $1{,}2 \\times 10^6$?', solution: '$1{,}2 \\times 10^6 = 12 \\times 10^5 > 8{,}9 \\times 10^5$. $1{,}2 \\times 10^6$ er størst.' },
              { label: 'd', task: 'Sorter: $7 \\times 10^2$, $70$, $7 \\times 10^3$, $0{,}7 \\times 10^4$', solution: '$70 < 700 < 7000 = 7000$. De to siste er like! $70 < 7 \\times 10^2 < 7 \\times 10^3 = 0{,}7 \\times 10^4$' },
              { label: 'e', task: 'Er $35 \\times 10^2$ på standardform? Hvis ikke, skriv riktig.', solution: 'Nei, koeffisienten må være mellom 1 og 10. Riktig: $3{,}5 \\times 10^3$' },
              { label: 'f', task: 'Er $0{,}5 \\times 10^{-3}$ på standardform? Hvis ikke, skriv riktig.', solution: 'Nei, $0{,}5 < 1$. Riktig: $5 \\times 10^{-4}$' },
            ],
            solution: 'a-d) Se sortering, e) $3{,}5 \\times 10^3$, f) $5 \\times 10^{-4}$',
            hideInlineSolution: true,
            hints: ['Sammenlign eksponentene først. Tallene med høyest eksponent er størst (for positive tall).'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-1-4-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-1-4-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Regn med tall på standardform.',
            subTasks: [
              { label: 'a', task: 'Regn ut $(3 \\times 10^4) \\cdot (2 \\times 10^3)$ og skriv svaret på standardform.', solution: '$6 \\times 10^7$' },
              { label: 'b', task: 'Regn ut $(8 \\times 10^5) \\div (4 \\times 10^2)$ og skriv svaret på standardform.', solution: '$2 \\times 10^3$' },
              { label: 'c', task: 'Regn ut $(5 \\times 10^3) + (3 \\times 10^3)$ og skriv svaret på standardform.', solution: '$8 \\times 10^3$' },
              { label: 'd', task: 'Regn ut $(4 \\times 10^6) \\cdot (5 \\times 10^{-2})$ og skriv svaret på standardform.', solution: '$20 \\times 10^4 = 2 \\times 10^5$' },
              { label: 'e', task: 'Regn ut $\\frac{6 \\times 10^8}{3 \\times 10^{-2}}$ og skriv svaret på standardform.', solution: '$2 \\times 10^{10}$' },
              { label: 'f', task: 'Regn ut $(7 \\times 10^3) + (5 \\times 10^4)$ og skriv svaret på standardform.', solution: '$0{,}7 \\times 10^4 + 5 \\times 10^4 = 5{,}7 \\times 10^4$' },
            ],
            solution: 'a) $6 \\times 10^7$, b) $2 \\times 10^3$, c) $8 \\times 10^3$, d) $2 \\times 10^5$, e) $2 \\times 10^{10}$, f) $5{,}7 \\times 10^4$',
            hideInlineSolution: true,
            hints: ['Ved multiplikasjon/divisjon: regn med koeffisientene og legg sammen/trekk fra eksponentene. Ved addisjon: gjør eksponentene like først.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-1-4-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-1-4-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Bruk standardform i praktiske sammenhenger.',
            subTasks: [
              { label: 'a', task: 'Avstanden fra jorda til sola er ca. $1{,}5 \\times 10^8$ km. Lyset bruker ca. $5 \\times 10^2$ sekunder. Hva er lysets hastighet i km/s?', solution: '$\\frac{1{,}5 \\times 10^8}{5 \\times 10^2} = 3 \\times 10^5$ km/s' },
              { label: 'b', task: 'En celle har diameter $8 \\times 10^{-6}$ m. Hvor mange celler kan ligge etter hverandre på 1 mm ($10^{-3}$ m)?', solution: '$\\frac{10^{-3}}{8 \\times 10^{-6}} = \\frac{1}{8} \\times 10^3 = 125$ celler' },
              { label: 'c', task: 'Jordens masse er ca. $6 \\times 10^{24}$ kg og månens masse er ca. $7{,}3 \\times 10^{22}$ kg. Hvor mange ganger tyngre er jorda?', solution: '$\\frac{6 \\times 10^{24}}{7{,}3 \\times 10^{22}} \\approx 0{,}82 \\times 10^2 \\approx 82$ ganger' },
              { label: 'd', task: 'Et bakterie-DNA har lengde $1{,}6 \\times 10^{-3}$ m og en viruspartikkel har diameter $3 \\times 10^{-8}$ m. Hvor mange virus passer langs DNA-et?', solution: '$\\frac{1{,}6 \\times 10^{-3}}{3 \\times 10^{-8}} \\approx 5{,}3 \\times 10^4 \\approx 53\\,000$ virus' },
            ],
            solution: 'a) $3 \\times 10^5$ km/s, b) 125 celler, c) ca. 82 ganger, d) ca. 53 000 virus',
            hideInlineSolution: true,
            hints: ['Bruk divisjon for «hvor mange ganger» eller «hvor mange passer i»'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-1-4-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-1-4-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Sammensatte oppgaver med standardform.',
            subTasks: [
              { label: 'a', task: 'Regn ut $\\frac{(4 \\times 10^5) \\cdot (3 \\times 10^{-2})}{6 \\times 10^4}$ og skriv svaret på standardform.', solution: '$\\frac{12 \\times 10^3}{6 \\times 10^4} = 2 \\times 10^{-1}$' },
              { label: 'b', task: 'Vis at $(2 \\times 10^3)^3 = 8 \\times 10^9$.', solution: '$2^3 \\times (10^3)^3 = 8 \\times 10^9$ ✓' },
              { label: 'c', task: 'Et vannmolekyl veier $3 \\times 10^{-26}$ kg. Hvor mange vannmolekyler er det i 1 gram ($10^{-3}$ kg)?', solution: '$\\frac{10^{-3}}{3 \\times 10^{-26}} = \\frac{1}{3} \\times 10^{23} \\approx 3{,}3 \\times 10^{22}$ molekyler' },
              { label: 'd', task: 'Regn ut $\\sqrt{9 \\times 10^{10}}$ og skriv svaret på standardform.', solution: '$\\sqrt{9} \\times \\sqrt{10^{10}} = 3 \\times 10^5$' },
            ],
            solution: 'a) $2 \\times 10^{-1}$, b) Se bevis, c) $\\approx 3{,}3 \\times 10^{22}$, d) $3 \\times 10^5$',
            hideInlineSolution: true,
            hints: ['Bruk potensreglene sammen med standardform: $(a \\times 10^n)^k = a^k \\times 10^{nk}$'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_9_2_1: TextbookChapter = {
  id: '9-2-1',
  courseId: '9',
  chapterNumber: '2.1',
  title: 'Faktorisering',
  description: 'Faktorisere tall og enkle algebraiske uttrykk.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke faktorisering og primtall i berekningar'],
  content: [
    {
      id: '9-2-1-intro',
      type: 'text',
      content: `Å **faktorisere** betyr å skrive et uttrykk som et produkt av faktorer. Dette er motsatt av å multiplisere ut parenteser. Faktorisering er nyttig for å forenkle brøker og løse likninger.`,
    },
    {
      id: '9-2-1-def-1',
      type: 'definition',
      title: 'Faktorisering',
      content: `**Faktorisering** betyr å skrive et uttrykk som et produkt av faktorer.

For tall: $12 = 2 \\cdot 2 \\cdot 3 = 2^2 \\cdot 3$

For algebraiske uttrykk: $6x + 9 = 3(2x + 3)$`,
    },
    {
      id: '9-2-1-ex-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'Faktoriser $12x + 18$',
      solution: `Vi finner største felles faktor i tallene: SFF(12, 18) = 6

$12x + 18 = 6 \\cdot 2x + 6 \\cdot 3 = 6(2x + 3)$

**Kontroll**: $6(2x + 3) = 12x + 18$ ✓`,
    },
    {
      id: '9-2-1-ex-1-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Faktoriser ved å trekke ut felles faktor',
        subTasks: [
          { label: 'a', task: '$8x + 12$', solution: '$4(2x + 3)$' },
          { label: 'b', task: '$15y - 20$', solution: '$5(3y - 4)$' },
          { label: 'c', task: '$21a + 14$', solution: '$7(3a + 2)$' },
        ],
        solution: 'a) $4(2x + 3)$, b) $5(3y - 4)$, c) $7(3a + 2)$',
        hints: ['Finn den største faktoren som går opp i begge ledd'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-1-def-2',
      type: 'definition',
      title: 'Primtallsfaktorisering',
      content: `**Primtallsfaktorisering** betyr å skrive et tall som et produkt av bare primtall.

**Metode**: Del tallet gjentatte ganger på primtall til du står igjen med 1.

$60 = 2 \\cdot 30 = 2 \\cdot 2 \\cdot 15 = 2 \\cdot 2 \\cdot 3 \\cdot 5 = 2^2 \\cdot 3 \\cdot 5$`,
    },
    {
      id: '9-2-1-ex-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'Primtallsfaktoriser 84',
      solution: `$84 = 2 \\cdot 42 = 2 \\cdot 2 \\cdot 21 = 2 \\cdot 2 \\cdot 3 \\cdot 7 = 2^2 \\cdot 3 \\cdot 7$

Faktortreet:
- 84 ÷ 2 = 42
- 42 ÷ 2 = 21
- 21 ÷ 3 = 7
- 7 er et primtall`,
    },
    {
      id: '9-2-1-ex-2-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Primtallsfaktoriser tallene',
        subTasks: [
          { label: 'a', task: '36', solution: '$2^2 \\cdot 3^2$' },
          { label: 'b', task: '90', solution: '$2 \\cdot 3^2 \\cdot 5$' },
          { label: 'c', task: '120', solution: '$2^3 \\cdot 3 \\cdot 5$' },
        ],
        solution: 'a) $2^2 \\cdot 3^2$, b) $2 \\cdot 3^2 \\cdot 5$, c) $2^3 \\cdot 3 \\cdot 5$',
        hints: ['Begynn med å dele på 2 hvis tallet er partall'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-1-text-2',
      type: 'text',
      content: `### Faktorisering med variabel som felles faktor

Når alle ledd inneholder samme variabel, må vi også trekke ut variabelen.`,
    },
    {
      id: '9-2-1-ex-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'Faktoriser $x^2 + 5x$',
      solution: `Begge ledd inneholder $x$ som faktor:
- $x^2 = x \\cdot x$
- $5x = 5 \\cdot x$

Felles faktor er $x$:

$x^2 + 5x = x(x + 5)$`,
    },
    {
      id: '9-2-1-ex-3-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Faktoriser uttrykkene',
        subTasks: [
          { label: 'a', task: '$y^2 - 4y$', solution: '$y(y - 4)$' },
          { label: 'b', task: '$3x^2 + 9x$', solution: '$3x(x + 3)$' },
          { label: 'c', task: '$2a^2 - 6a$', solution: '$2a(a - 3)$' },
        ],
        solution: 'a) $y(y - 4)$, b) $3x(x + 3)$, c) $2a(a - 3)$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-1-ex-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'Faktoriser $6x^2 - 15x$',
      solution: `Vi finner felles faktor for både tall og variabel:
- SFF(6, 15) = 3
- Begge ledd har $x$

Felles faktor er $3x$:

$6x^2 - 15x = 3x \\cdot 2x - 3x \\cdot 5 = 3x(2x - 5)$`,
    },
    {
      id: '9-2-1-ex-4-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Faktoriser uttrykkene fullstendig',
        subTasks: [
          { label: 'a', task: '$12x^2 + 18x$', solution: '$6x(2x + 3)$' },
          { label: 'b', task: '$10y^2 - 25y$', solution: '$5y(2y - 5)$' },
          { label: 'c', task: '$8a^3 + 12a^2$', solution: '$4a^2(2a + 3)$' },
        ],
        solution: 'a) $6x(2x + 3)$, b) $5y(2y - 5)$, c) $4a^2(2a + 3)$',
        hints: ['I oppgave c er felles faktor $4a^2$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-1-ex-5-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Faktoriser ved å trekke ut felles faktor',
        subTasks: [
          { label: 'a', task: '$16x + 24$', solution: '$8(2x + 3)$' },
          { label: 'b', task: '$35y - 28$', solution: '$7(5y - 4)$' },
          { label: 'c', task: '$42a + 63$', solution: '$21(2a + 3)$' },
          { label: 'd', task: '$54b - 36$', solution: '$18(3b - 2)$' },
        ],
        solution: 'a) $8(2x + 3)$, b) $7(5y - 4)$, c) $21(2a + 3)$, d) $18(3b - 2)$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-1-ex-6-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Primtallsfaktoriser tallene',
        subTasks: [
          { label: 'a', task: '144', solution: '$2^4 \\cdot 3^2$' },
          { label: 'b', task: '180', solution: '$2^2 \\cdot 3^2 \\cdot 5$' },
          { label: 'c', task: '252', solution: '$2^2 \\cdot 3^2 \\cdot 7$' },
          { label: 'd', task: '300', solution: '$2^2 \\cdot 3 \\cdot 5^2$' },
        ],
        solution: 'a) $2^4 \\cdot 3^2$, b) $2^2 \\cdot 3^2 \\cdot 5$, c) $2^2 \\cdot 3^2 \\cdot 7$, d) $2^2 \\cdot 3 \\cdot 5^2$',
        hints: ['Bruk faktortre eller gjentatt divisjon med primtall'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-1-ex-7-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Faktoriser uttrykk med tre ledd',
        subTasks: [
          { label: 'a', task: '$6x + 9y + 12$', solution: '$3(2x + 3y + 4)$' },
          { label: 'b', task: '$10a - 15b + 20$', solution: '$5(2a - 3b + 4)$' },
          { label: 'c', task: '$8x^2 + 12x + 4$', solution: '$4(2x^2 + 3x + 1)$' },
          { label: 'd', task: '$14y^2 - 21y + 7$', solution: '$7(2y^2 - 3y + 1)$' },
        ],
        solution: 'a) $3(2x + 3y + 4)$, b) $5(2a - 3b + 4)$, c) $4(2x^2 + 3x + 1)$, d) $7(2y^2 - 3y + 1)$',
        hints: ['Finn felles faktor for alle tre ledd'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-1-ex-8-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Faktoriser uttrykk med høyere potenser',
        subTasks: [
          { label: 'a', task: '$x^3 + x^2$', solution: '$x^2(x + 1)$' },
          { label: 'b', task: '$6y^4 - 9y^3$', solution: '$3y^3(2y - 3)$' },
          { label: 'c', task: '$4a^3 - 8a^2 + 12a$', solution: '$4a(a^2 - 2a + 3)$' },
          { label: 'd', task: '$15x^4 + 25x^3 - 10x^2$', solution: '$5x^2(3x^2 + 5x - 2)$' },
        ],
        solution: 'a) $x^2(x + 1)$, b) $3y^3(2y - 3)$, c) $4a(a^2 - 2a + 3)$, d) $5x^2(3x^2 + 5x - 2)$',
        hints: ['Den felles variabelfaktoren har laveste eksponent som finnes i alle ledd'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-1-ex-9-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk faktorisering til å forenkle brøkene',
        subTasks: [
          { label: 'a', task: '$\\frac{6x + 12}{6}$', solution: '$\\frac{6(x + 2)}{6} = x + 2$' },
          { label: 'b', task: '$\\frac{8y - 4}{4}$', solution: '$\\frac{4(2y - 1)}{4} = 2y - 1$' },
          { label: 'c', task: '$\\frac{15a + 10}{5}$', solution: '$\\frac{5(3a + 2)}{5} = 3a + 2$' },
          { label: 'd', task: '$\\frac{x^2 + 3x}{x}$', solution: '$\\frac{x(x + 3)}{x} = x + 3$' },
        ],
        solution: 'a) $x + 2$, b) $2y - 1$, c) $3a + 2$, d) $x + 3$',
        hints: ['Faktoriser telleren, så forkorte med nevneren'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-1-ex-10-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn største felles faktor (SFF) og faktoriser',
        subTasks: [
          { label: 'a', task: 'SFF(24, 36) og faktoriser $24x + 36$', solution: 'SFF = 12, $24x + 36 = 12(2x + 3)$' },
          { label: 'b', task: 'SFF(45, 75) og faktoriser $45y - 75$', solution: 'SFF = 15, $45y - 75 = 15(3y - 5)$' },
          { label: 'c', task: 'SFF(48, 64, 80) og faktoriser $48a + 64b - 80$', solution: 'SFF = 16, $48a + 64b - 80 = 16(3a + 4b - 5)$' },
        ],
        solution: 'a) SFF=12, 12(2x+3), b) SFF=15, 15(3y-5), c) SFF=16, 16(3a+4b-5)',
        hints: ['Bruk primtallsfaktorisering for å finne SFF'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-1-ex-11-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: 'Praktiske oppgaver med faktorisering',
        subTasks: [
          { label: 'a', task: 'Arealet av et rektangel er $A = 4x + 12$. Uttrykk dette som et produkt av lengde og bredde hvis bredden er 4.', solution: '$A = 4(x + 3)$, så lengden er $x + 3$' },
          { label: 'b', task: 'Omkretsen av en figur er $O = 6a + 18$. Hvis dette er tre like sider, hva er lengden av hver side?', solution: '$O = 3(2a + 6)$, så hver side er $2a + 6$' },
          { label: 'c', task: 'Kostnaden for $n$ varer er $K = 15n + 45$ kr. Faktoriser og forklar hva faktorene representerer.', solution: '$K = 15(n + 3)$. Mulig tolkning: 15 kr per enhet, +45 kr fast kostnad (som 3 ekstra enheter)' },
        ],
        solution: 'a) lengde = x+3, b) side = 2a+6, c) K = 15(n+3)',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-1-ex-12-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-1-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordringsoppgaver',
        subTasks: [
          { label: 'a', task: 'Faktoriser $xy + xz + 2y + 2z$ ved gruppering', solution: '$x(y + z) + 2(y + z) = (x + 2)(y + z)$' },
          { label: 'b', task: 'Faktoriser $2x^2y + 4xy^2 - 6xy$', solution: '$2xy(x + 2y - 3)$' },
          { label: 'c', task: 'Forenkle $\\frac{x^2 - 4x}{x^2 - 2x}$', solution: '$\\frac{x(x - 4)}{x(x - 2)} = \\frac{x - 4}{x - 2}$' },
          { label: 'd', task: 'Finn alle verdier av $n$ slik at $12n + 18$ er delelig med 6', solution: '$12n + 18 = 6(2n + 3)$, som alltid er delelig med 6 for alle heltall $n$' },
        ],
        solution: 'a) $(x+2)(y+z)$, b) $2xy(x+2y-3)$, c) $\\frac{x-4}{x-2}$, d) alle heltall',
        hints: ['a) Grupper to og to ledd. c) Faktoriser teller og nevner separat'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ========== NYE OPPGAVER MED ILLUSTRASJONER ==========
    {
      id: '9-2-1-ill-likninger',
      type: 'image',
      src: '/images/9-klasse/likninger-balanse.svg',
      alt: 'Likninger som balanse - balansemetoden visualisert',
      caption: 'En likning er som en vekt i balanse - det som gjores pa den ene siden, ma gjores pa den andre',
    },
    {
      id: '9-2-1-ex-13-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-1-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'medium',
        task: 'Studer figuren over som viser likningen $2x + 3 = 7$ som en balansevekt. Bruk samme metode til a lose disse likningene:',
        image: '/images/9-klasse/likninger-balanse.svg',
        subTasks: [
          { label: 'a', task: '$3x + 5 = 14$', solution: 'Trekk fra 5 pa begge sider: $3x = 9$. Del pa 3: $x = 3$' },
          { label: 'b', task: '$4x - 2 = 10$', solution: 'Legg til 2 pa begge sider: $4x = 12$. Del pa 4: $x = 3$' },
          { label: 'c', task: '$5x + 8 = 23$', solution: 'Trekk fra 8 pa begge sider: $5x = 15$. Del pa 5: $x = 3$' },
        ],
        solution: 'a) $x = 3$, b) $x = 3$, c) $x = 3$',
        hints: ['Gjor alltid samme operasjon pa begge sider av likhetstegnet for a bevare balansen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-1-ex-14-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-1-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Fra figuren ser vi at likningen $2x + 3 = 7$ loses ved forst a trekke fra 3, deretter dele pa 2. Forklar med egne ord hvorfor vi ma gjore samme operasjon pa begge sider.',
        image: '/images/9-klasse/likninger-balanse.svg',
        solution: `Forklaring: En likning er som en vekt i perfekt balanse. Hvis vi legger til eller fjerner noe fra kun den ene siden, vil vekten vippe og balansen odeelegges.

For a holde likevekten (og dermed likhetstegnet gyldig), ma vi alltid gjore noyaktig samme operasjon pa begge sider.

I eksempelet $2x + 3 = 7$:
1. Vi trekker fra 3 fra **begge** sider (ikke bare venstre!) for a fjerne konstantleddet
2. Vi deler **begge** sider pa 2 for a finne verdien av en enkelt $x$

Dette prinsippet sikrer at $x = 2$ faktisk er losningen.`,
        hints: ['Tenk pa likhetstegnet som en vekt i balanse'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-2-1-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '9-2-1-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-2-1-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Trekk ut felles faktor.',
            subTasks: [
              { label: 'a', task: 'Faktoriser $6x + 12$', solution: '$6(x + 2)$' },
              { label: 'b', task: 'Faktoriser $8x - 4$', solution: '$4(2x - 1)$' },
              { label: 'c', task: 'Faktoriser $15x + 10$', solution: '$5(3x + 2)$' },
              { label: 'd', task: 'Faktoriser $3x^2 + 9x$', solution: '$3x(x + 3)$' },
              { label: 'e', task: 'Faktoriser $12x - 18$', solution: '$6(2x - 3)$' },
              { label: 'f', task: 'Faktoriser $20x + 30$', solution: '$10(2x + 3)$' },
            ],
            solution: 'a) $6(x+2)$, b) $4(2x-1)$, c) $5(3x+2)$, d) $3x(x+3)$, e) $6(2x-3)$, f) $10(2x+3)$',
            hideInlineSolution: true,
            hints: ['Finn den største felles faktoren for alle leddene og sett den utenfor parentesen'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-2-1-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-2-1-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Faktoriser uttrykk med variabler.',
            subTasks: [
              { label: 'a', task: 'Faktoriser $x^2 + 5x$', solution: '$x(x + 5)$' },
              { label: 'b', task: 'Faktoriser $4x^2 - 2x$', solution: '$2x(2x - 1)$' },
              { label: 'c', task: 'Faktoriser $6x^3 + 3x^2$', solution: '$3x^2(2x + 1)$' },
              { label: 'd', task: 'Faktoriser $x^2y + xy^2$', solution: '$xy(x + y)$' },
              { label: 'e', task: 'Faktoriser $10x^2 - 15x$', solution: '$5x(2x - 3)$' },
              { label: 'f', task: 'Faktoriser $8x^3 - 12x^2 + 4x$', solution: '$4x(2x^2 - 3x + 1)$' },
            ],
            solution: 'a) $x(x+5)$, b) $2x(2x-1)$, c) $3x^2(2x+1)$, d) $xy(x+y)$, e) $5x(2x-3)$, f) $4x(2x^2-3x+1)$',
            hideInlineSolution: true,
            hints: ['Se etter den høyeste potensen av $x$ som er felles for alle ledd'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-2-1-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-2-1-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Primtallsfaktorisering.',
            subTasks: [
              { label: 'a', task: 'Skriv $36$ som produkt av primtall.', solution: '$36 = 2^2 \\cdot 3^2$' },
              { label: 'b', task: 'Skriv $60$ som produkt av primtall.', solution: '$60 = 2^2 \\cdot 3 \\cdot 5$' },
              { label: 'c', task: 'Skriv $84$ som produkt av primtall.', solution: '$84 = 2^2 \\cdot 3 \\cdot 7$' },
              { label: 'd', task: 'Finn største felles faktor (SFF) for $24$ og $36$.', solution: '$24 = 2^3 \\cdot 3$, $36 = 2^2 \\cdot 3^2$. SFF $= 2^2 \\cdot 3 = 12$' },
              { label: 'e', task: 'Finn SFF for $18$ og $45$.', solution: '$18 = 2 \\cdot 3^2$, $45 = 3^2 \\cdot 5$. SFF $= 3^2 = 9$' },
              { label: 'f', task: 'Finn minste felles multiplum (MFM) for $12$ og $8$.', solution: '$12 = 2^2 \\cdot 3$, $8 = 2^3$. MFM $= 2^3 \\cdot 3 = 24$' },
            ],
            solution: 'a) $2^2 \\cdot 3^2$, b) $2^2 \\cdot 3 \\cdot 5$, c) $2^2 \\cdot 3 \\cdot 7$, d) 12, e) 9, f) 24',
            hideInlineSolution: true,
            hints: ['Del tallet på det minste primtallet som går opp, og gjenta til du bare har primtall igjen'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-2-1-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-2-1-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Faktoriser sammensatte uttrykk.',
            subTasks: [
              { label: 'a', task: 'Faktoriser $2x(x+3) + 5(x+3)$', solution: '$(x+3)(2x+5)$' },
              { label: 'b', task: 'Faktoriser $x(x-1) - 3(x-1)$', solution: '$(x-1)(x-3)$' },
              { label: 'c', task: 'Faktoriser $4x^2 - 16$', solution: '$4(x^2-4) = 4(x+2)(x-2)$' },
              { label: 'd', task: 'Faktoriser $3x^2 - 27$', solution: '$3(x^2-9) = 3(x+3)(x-3)$' },
              { label: 'e', task: 'Faktoriser $2x^3 - 8x$', solution: '$2x(x^2-4) = 2x(x+2)(x-2)$' },
              { label: 'f', task: 'Faktoriser $5x^2y - 10xy + 5y$', solution: '$5y(x^2 - 2x + 1) = 5y(x-1)^2$' },
            ],
            solution: 'a) $(x+3)(2x+5)$, b) $(x-1)(x-3)$, c) $4(x+2)(x-2)$, d) $3(x+3)(x-3)$, e) $2x(x+2)(x-2)$, f) $5y(x-1)^2$',
            hideInlineSolution: true,
            hints: ['Trekk ut felles faktor først, og se deretter om resultatet kan faktoriseres videre'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-2-1-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-2-1-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Bruk faktorisering til å forenkle brøker.',
            subTasks: [
              { label: 'a', task: 'Forenkle $\\frac{6x + 12}{6}$', solution: '$\\frac{6(x+2)}{6} = x + 2$' },
              { label: 'b', task: 'Forenkle $\\frac{x^2 + 3x}{x}$ (for $x \\neq 0$)', solution: '$\\frac{x(x+3)}{x} = x + 3$' },
              { label: 'c', task: 'Forenkle $\\frac{4x^2 - 8x}{4x}$ (for $x \\neq 0$)', solution: '$\\frac{4x(x-2)}{4x} = x - 2$' },
              { label: 'd', task: 'Forenkle $\\frac{x^2 - 9}{x + 3}$ (for $x \\neq -3$)', solution: '$\\frac{(x+3)(x-3)}{x+3} = x - 3$' },
              { label: 'e', task: 'Forenkle $\\frac{2x^2 + 6x}{x^2 + 3x}$ (for $x \\neq 0$ og $x \\neq -3$)', solution: '$\\frac{2x(x+3)}{x(x+3)} = 2$' },
            ],
            solution: 'a) $x+2$, b) $x+3$, c) $x-2$, d) $x-3$, e) $2$',
            hideInlineSolution: true,
            hints: ['Faktoriser teller og nevner separat, og forkort deretter like faktorer'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-2-1-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-2-1-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Krevende faktoriseringsoppgaver.',
            subTasks: [
              { label: 'a', task: 'Faktoriser $x^3 - x$ fullstendig.', solution: '$x(x^2-1) = x(x+1)(x-1)$' },
              { label: 'b', task: 'Faktoriser $2x^4 - 32$ fullstendig.', solution: '$2(x^4-16) = 2(x^2+4)(x^2-4) = 2(x^2+4)(x+2)(x-2)$' },
              { label: 'c', task: 'Vis at $n^2 - n$ alltid er et partall for alle naturlige tall $n$.', solution: '$n^2 - n = n(n-1)$. Av to påfølgende tall er alltid ett partall, så produktet er alltid et partall.' },
              { label: 'd', task: 'Forenkle $\\frac{x^3 - 4x}{x^2 - 4x + 4}$ for $x \\neq 2$.', solution: '$\\frac{x(x^2-4)}{(x-2)^2} = \\frac{x(x+2)(x-2)}{(x-2)^2} = \\frac{x(x+2)}{x-2}$' },
            ],
            solution: 'a) $x(x+1)(x-1)$, b) $2(x^2+4)(x+2)(x-2)$, c) Se bevis, d) $\\frac{x(x+2)}{x-2}$',
            hideInlineSolution: true,
            hints: ['Trekk ut felles faktor, bruk konjugatsetningen, og gjenta til du ikke kan faktorisere mer'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_9_2_2: TextbookChapter = {
  id: '9-2-2',
  courseId: '9',
  chapterNumber: '2.2',
  title: 'Kvadratsetningene',
  description: 'De tre kvadratsetningene og deres anvendelser.',
  estimatedMinutes: 55,
  competenceGoals: ['bruke variablar og formlar til å uttrykkje samanhengar i praktiske situasjonar'],
  content: [
    {
      id: '9-2-2-intro',
      type: 'text',
      content: `**Kvadratsetningene** er tre viktige formler som brukes for å multiplisere ut og faktorisere spesielle algebraiske uttrykk. De kalles også for de algebraiske identitetene.`,
    },
    {
      id: '9-2-2-def-1',
      type: 'definition',
      title: 'Første kvadratsetning',
      content: `**Første kvadratsetning**:

$$(a + b)^2 = a^2 + 2ab + b^2$$

*Kvadratet av en sum er lik summen av kvadratene pluss det dobbelte av produktet.*`,
    },
    {
      id: '9-2-2-ex-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'Bruk første kvadratsetning til å regne ut $(x + 3)^2$',
      solution: `$(x + 3)^2$ med $a = x$ og $b = 3$:

$(x + 3)^2 = x^2 + 2 \\cdot x \\cdot 3 + 3^2 = x^2 + 6x + 9$`,
    },
    {
      id: '9-2-2-ex-1-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk første kvadratsetning',
        subTasks: [
          { label: 'a', task: '$(x + 4)^2$', solution: '$x^2 + 8x + 16$' },
          { label: 'b', task: '$(y + 5)^2$', solution: '$y^2 + 10y + 25$' },
          { label: 'c', task: '$(2a + 1)^2$', solution: '$4a^2 + 4a + 1$' },
        ],
        solution: 'a) $x^2 + 8x + 16$, b) $y^2 + 10y + 25$, c) $4a^2 + 4a + 1$',
        hints: ['Husk formelen: $(a+b)^2 = a^2 + 2ab + b^2$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-2-def-2',
      type: 'definition',
      title: 'Andre kvadratsetning',
      content: `**Andre kvadratsetning**:

$$(a - b)^2 = a^2 - 2ab + b^2$$

*Kvadratet av en differanse er lik summen av kvadratene minus det dobbelte av produktet.*`,
    },
    {
      id: '9-2-2-ex-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'Bruk andre kvadratsetning til å regne ut $(x - 7)^2$',
      solution: `$(x - 7)^2$ med $a = x$ og $b = 7$:

$(x - 7)^2 = x^2 - 2 \\cdot x \\cdot 7 + 7^2 = x^2 - 14x + 49$`,
    },
    {
      id: '9-2-2-ex-2-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk andre kvadratsetning',
        subTasks: [
          { label: 'a', task: '$(x - 3)^2$', solution: '$x^2 - 6x + 9$' },
          { label: 'b', task: '$(y - 6)^2$', solution: '$y^2 - 12y + 36$' },
          { label: 'c', task: '$(3b - 2)^2$', solution: '$9b^2 - 12b + 4$' },
        ],
        solution: 'a) $x^2 - 6x + 9$, b) $y^2 - 12y + 36$, c) $9b^2 - 12b + 4$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-2-def-3',
      type: 'definition',
      title: 'Konjugatsetningen',
      content: `**Konjugatsetningen** (tredje kvadratsetning):

$$(a + b)(a - b) = a^2 - b^2$$

*Produktet av en sum og en differanse er lik differansen av kvadratene.*`,
    },
    {
      id: '9-2-2-ex-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'Bruk konjugatsetningen til å regne ut $(x + 4)(x - 4)$',
      solution: `$(x + 4)(x - 4)$ med $a = x$ og $b = 4$:

$(x + 4)(x - 4) = x^2 - 4^2 = x^2 - 16$`,
    },
    {
      id: '9-2-2-ex-3-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk konjugatsetningen',
        subTasks: [
          { label: 'a', task: '$(x + 5)(x - 5)$', solution: '$x^2 - 25$' },
          { label: 'b', task: '$(2y + 3)(2y - 3)$', solution: '$4y^2 - 9$' },
          { label: 'c', task: '$(a + 9)(a - 9)$', solution: '$a^2 - 81$' },
        ],
        solution: 'a) $x^2 - 25$, b) $4y^2 - 9$, c) $a^2 - 81$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-2-text-2',
      type: 'text',
      content: `### Faktorisering med kvadratsetningene

Kvadratsetningene kan også brukes "baklengs" for å faktorisere uttrykk.`,
    },
    {
      id: '9-2-2-ex-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'Faktoriser uttrykkene:\na) $x^2 + 10x + 25$\nb) $y^2 - 16$',
      solution: `**a)** $x^2 + 10x + 25$

Vi gjenkjenner mønsteret $a^2 + 2ab + b^2$ der $a = x$ og $b = 5$:
$x^2 + 10x + 25 = (x + 5)^2$

**b)** $y^2 - 16$

Vi gjenkjenner mønsteret $a^2 - b^2$ der $a = y$ og $b = 4$:
$y^2 - 16 = (y + 4)(y - 4)$`,
    },
    {
      id: '9-2-2-ex-4-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Faktoriser uttrykkene ved hjelp av kvadratsetningene',
        subTasks: [
          { label: 'a', task: '$x^2 + 8x + 16$', solution: '$(x + 4)^2$' },
          { label: 'b', task: '$y^2 - 6y + 9$', solution: '$(y - 3)^2$' },
          { label: 'c', task: '$4a^2 - 49$', solution: '$(2a + 7)(2a - 7)$' },
        ],
        solution: 'a) $(x + 4)^2$, b) $(y - 3)^2$, c) $(2a + 7)(2a - 7)$',
        hints: ['Sjekk om det er et fullstendig kvadrat eller en differanse av kvadrater'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-2-ex-5-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk første kvadratsetning til å multiplisere ut',
        subTasks: [
          { label: 'a', task: '$(x + 2)^2$', solution: '$x^2 + 4x + 4$' },
          { label: 'b', task: '$(y + 7)^2$', solution: '$y^2 + 14y + 49$' },
          { label: 'c', task: '$(a + 10)^2$', solution: '$a^2 + 20a + 100$' },
          { label: 'd', task: '$(3x + 2)^2$', solution: '$9x^2 + 12x + 4$' },
        ],
        solution: 'a) $x^2 + 4x + 4$, b) $y^2 + 14y + 49$, c) $a^2 + 20a + 100$, d) $9x^2 + 12x + 4$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-2-ex-6-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk andre kvadratsetning til å multiplisere ut',
        subTasks: [
          { label: 'a', task: '$(x - 5)^2$', solution: '$x^2 - 10x + 25$' },
          { label: 'b', task: '$(y - 8)^2$', solution: '$y^2 - 16y + 64$' },
          { label: 'c', task: '$(a - 1)^2$', solution: '$a^2 - 2a + 1$' },
          { label: 'd', task: '$(4x - 3)^2$', solution: '$16x^2 - 24x + 9$' },
        ],
        solution: 'a) $x^2 - 10x + 25$, b) $y^2 - 16y + 64$, c) $a^2 - 2a + 1$, d) $16x^2 - 24x + 9$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-2-ex-7-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk konjugatsetningen til å multiplisere ut',
        subTasks: [
          { label: 'a', task: '$(x + 8)(x - 8)$', solution: '$x^2 - 64$' },
          { label: 'b', task: '$(3y + 4)(3y - 4)$', solution: '$9y^2 - 16$' },
          { label: 'c', task: '$(5a + 2)(5a - 2)$', solution: '$25a^2 - 4$' },
          { label: 'd', task: '$(2x + 7y)(2x - 7y)$', solution: '$4x^2 - 49y^2$' },
        ],
        solution: 'a) $x^2 - 64$, b) $9y^2 - 16$, c) $25a^2 - 4$, d) $4x^2 - 49y^2$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-2-ex-8-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Faktoriser ved hjelp av konjugatsetningen ($a^2 - b^2$)',
        subTasks: [
          { label: 'a', task: '$x^2 - 36$', solution: '$(x + 6)(x - 6)$' },
          { label: 'b', task: '$y^2 - 100$', solution: '$(y + 10)(y - 10)$' },
          { label: 'c', task: '$9a^2 - 25$', solution: '$(3a + 5)(3a - 5)$' },
          { label: 'd', task: '$16x^2 - 81$', solution: '$(4x + 9)(4x - 9)$' },
        ],
        solution: 'a) $(x + 6)(x - 6)$, b) $(y + 10)(y - 10)$, c) $(3a + 5)(3a - 5)$, d) $(4x + 9)(4x - 9)$',
        hints: ['Gjenkjenn mønsteret $a^2 - b^2$ og finn $a$ og $b$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-2-ex-9-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Faktoriser fullstendige kvadrater',
        subTasks: [
          { label: 'a', task: '$x^2 + 12x + 36$', solution: '$(x + 6)^2$' },
          { label: 'b', task: '$y^2 - 14y + 49$', solution: '$(y - 7)^2$' },
          { label: 'c', task: '$4a^2 + 20a + 25$', solution: '$(2a + 5)^2$' },
          { label: 'd', task: '$9b^2 - 24b + 16$', solution: '$(3b - 4)^2$' },
        ],
        solution: 'a) $(x + 6)^2$, b) $(y - 7)^2$, c) $(2a + 5)^2$, d) $(3b - 4)^2$',
        hints: ['Sjekk om konstantleddet er et perfekt kvadrat og mellomleddet er $\\pm 2ab$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-2-ex-10-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Regn ut ved hjelp av kvadratsetningene',
        subTasks: [
          { label: 'a', task: '$101^2$ (hint: skriv som $(100+1)^2$)', solution: '$(100+1)^2 = 10000 + 200 + 1 = 10201$' },
          { label: 'b', task: '$99^2$ (hint: skriv som $(100-1)^2$)', solution: '$(100-1)^2 = 10000 - 200 + 1 = 9801$' },
          { label: 'c', task: '$52 \\cdot 48$ (hint: bruk konjugatsetningen)', solution: '$(50+2)(50-2) = 2500 - 4 = 2496$' },
          { label: 'd', task: '$203 \\cdot 197$', solution: '$(200+3)(200-3) = 40000 - 9 = 39991$' },
        ],
        solution: 'a) 10201, b) 9801, c) 2496, d) 39991',
        hints: ['Skriv tallene slik at de passer inn i en av kvadratsetningene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-2-ex-11-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bestem hvilken kvadratsetning som passer, og multipliser ut eller faktoriser',
        subTasks: [
          { label: 'a', task: '$(2x + 5)^2$', solution: 'Første: $4x^2 + 20x + 25$' },
          { label: 'b', task: '$x^2 - 18x + 81$', solution: 'Andre baklengs: $(x - 9)^2$' },
          { label: 'c', task: '$(7 + y)(7 - y)$', solution: 'Konjugat: $49 - y^2$' },
          { label: 'd', task: '$25a^2 - 64b^2$', solution: 'Konjugat baklengs: $(5a + 8b)(5a - 8b)$' },
        ],
        solution: 'a) $4x^2 + 20x + 25$, b) $(x - 9)^2$, c) $49 - y^2$, d) $(5a + 8b)(5a - 8b)$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-2-ex-12-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-2-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordringsoppgaver med kvadratsetningene',
        subTasks: [
          { label: 'a', task: 'Forenkle $(x + 3)^2 - (x - 3)^2$', solution: '$(x^2 + 6x + 9) - (x^2 - 6x + 9) = 12x$' },
          { label: 'b', task: 'Faktoriser $x^4 - 16$ fullstendig', solution: '$(x^2 + 4)(x^2 - 4) = (x^2 + 4)(x + 2)(x - 2)$' },
          { label: 'c', task: 'Vis at $(a + b)^2 + (a - b)^2 = 2a^2 + 2b^2$', solution: '$(a^2 + 2ab + b^2) + (a^2 - 2ab + b^2) = 2a^2 + 2b^2$' },
          { label: 'd', task: 'Forenkle $\\frac{x^2 - 9}{x + 3}$', solution: '$\\frac{(x+3)(x-3)}{x+3} = x - 3$ (for $x \\neq -3$)' },
        ],
        solution: 'a) $12x$, b) $(x^2 + 4)(x + 2)(x - 2)$, c) Se løsning, d) $x - 3$',
        hints: ['a) Multipliser ut begge parentesene først. b) Bruk konjugat to ganger.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-2-2-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '9-2-2-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-2-2-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Bruk 1. kvadratsetning: $(a+b)^2 = a^2 + 2ab + b^2$.',
            subTasks: [
              { label: 'a', task: 'Utvid $(x + 3)^2$', solution: '$x^2 + 6x + 9$' },
              { label: 'b', task: 'Utvid $(x + 5)^2$', solution: '$x^2 + 10x + 25$' },
              { label: 'c', task: 'Utvid $(x + 1)^2$', solution: '$x^2 + 2x + 1$' },
              { label: 'd', task: 'Utvid $(2x + 3)^2$', solution: '$4x^2 + 12x + 9$' },
              { label: 'e', task: 'Utvid $(x + 7)^2$', solution: '$x^2 + 14x + 49$' },
              { label: 'f', task: 'Utvid $(3x + 2)^2$', solution: '$9x^2 + 12x + 4$' },
            ],
            solution: 'a) $x^2+6x+9$, b) $x^2+10x+25$, c) $x^2+2x+1$, d) $4x^2+12x+9$, e) $x^2+14x+49$, f) $9x^2+12x+4$',
            hideInlineSolution: true,
            hints: ['Bruk formelen $(a+b)^2 = a^2 + 2ab + b^2$, husk at $2ab$ er dobbelt produkt'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-2-2-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-2-2-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Bruk 2. kvadratsetning: $(a-b)^2 = a^2 - 2ab + b^2$.',
            subTasks: [
              { label: 'a', task: 'Utvid $(x - 4)^2$', solution: '$x^2 - 8x + 16$' },
              { label: 'b', task: 'Utvid $(x - 2)^2$', solution: '$x^2 - 4x + 4$' },
              { label: 'c', task: 'Utvid $(x - 6)^2$', solution: '$x^2 - 12x + 36$' },
              { label: 'd', task: 'Utvid $(3x - 1)^2$', solution: '$9x^2 - 6x + 1$' },
              { label: 'e', task: 'Utvid $(x - 10)^2$', solution: '$x^2 - 20x + 100$' },
              { label: 'f', task: 'Utvid $(2x - 5)^2$', solution: '$4x^2 - 20x + 25$' },
            ],
            solution: 'a) $x^2-8x+16$, b) $x^2-4x+4$, c) $x^2-12x+36$, d) $9x^2-6x+1$, e) $x^2-20x+100$, f) $4x^2-20x+25$',
            hideInlineSolution: true,
            hints: ['Bruk formelen $(a-b)^2 = a^2 - 2ab + b^2$, merk at siste ledd alltid er positivt'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-2-2-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-2-2-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Bruk konjugatsetningen: $(a+b)(a-b) = a^2 - b^2$.',
            subTasks: [
              { label: 'a', task: 'Utvid $(x+4)(x-4)$', solution: '$x^2 - 16$' },
              { label: 'b', task: 'Utvid $(x+7)(x-7)$', solution: '$x^2 - 49$' },
              { label: 'c', task: 'Utvid $(3x+2)(3x-2)$', solution: '$9x^2 - 4$' },
              { label: 'd', task: 'Utvid $(5+x)(5-x)$', solution: '$25 - x^2$' },
              { label: 'e', task: 'Utvid $(2x+3y)(2x-3y)$', solution: '$4x^2 - 9y^2$' },
              { label: 'f', task: 'Bruk konjugatsetningen til å regne ut $51 \\cdot 49$ i hodet.', solution: '$(50+1)(50-1) = 50^2 - 1^2 = 2500 - 1 = 2499$' },
            ],
            solution: 'a) $x^2-16$, b) $x^2-49$, c) $9x^2-4$, d) $25-x^2$, e) $4x^2-9y^2$, f) $2499$',
            hideInlineSolution: true,
            hints: ['Konjugatsetningen gir differansen mellom kvadratene, $(a+b)(a-b) = a^2 - b^2$'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-2-2-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-2-2-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Faktoriser ved hjelp av kvadratsetningene.',
            subTasks: [
              { label: 'a', task: 'Faktoriser $x^2 + 8x + 16$', solution: '$(x + 4)^2$' },
              { label: 'b', task: 'Faktoriser $x^2 - 10x + 25$', solution: '$(x - 5)^2$' },
              { label: 'c', task: 'Faktoriser $x^2 - 36$', solution: '$(x+6)(x-6)$' },
              { label: 'd', task: 'Faktoriser $4x^2 + 12x + 9$', solution: '$(2x + 3)^2$' },
              { label: 'e', task: 'Faktoriser $9x^2 - 25$', solution: '$(3x+5)(3x-5)$' },
              { label: 'f', task: 'Faktoriser $x^2 - 14x + 49$', solution: '$(x - 7)^2$' },
            ],
            solution: 'a) $(x+4)^2$, b) $(x-5)^2$, c) $(x+6)(x-6)$, d) $(2x+3)^2$, e) $(3x+5)(3x-5)$, f) $(x-7)^2$',
            hideInlineSolution: true,
            hints: ['Se etter mønsteret $a^2 \\pm 2ab + b^2$ for kvadratsetningene, eller $a^2 - b^2$ for konjugat'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-2-2-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-2-2-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Forenkle uttrykk med kvadratsetningene.',
            subTasks: [
              { label: 'a', task: 'Forenkle $(x+2)^2 - (x-2)^2$', solution: '$(x^2+4x+4) - (x^2-4x+4) = 8x$' },
              { label: 'b', task: 'Forenkle $(x+5)^2 - x^2$', solution: '$x^2+10x+25 - x^2 = 10x + 25$' },
              { label: 'c', task: 'Forenkle $(x+3)^2 + (x-3)^2$', solution: '$(x^2+6x+9)+(x^2-6x+9) = 2x^2 + 18$' },
              { label: 'd', task: 'Forenkle $\\frac{x^2 - 4}{x - 2}$ (for $x \\neq 2$)', solution: '$\\frac{(x+2)(x-2)}{x-2} = x + 2$' },
              { label: 'e', task: 'Regn ut $103^2$ ved hjelp av 1. kvadratsetning.', solution: '$(100+3)^2 = 10000 + 600 + 9 = 10609$' },
            ],
            solution: 'a) $8x$, b) $10x+25$, c) $2x^2+18$, d) $x+2$, e) $10609$',
            hideInlineSolution: true,
            hints: ['Multipliser ut begge uttrykkene og trekk sammen like ledd'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-2-2-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-2-2-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Avanserte oppgaver med kvadratsetningene.',
            subTasks: [
              { label: 'a', task: 'Faktoriser $x^4 - 81$ fullstendig.', solution: '$(x^2+9)(x^2-9) = (x^2+9)(x+3)(x-3)$' },
              { label: 'b', task: 'Vis at $(a+b)^2 - (a-b)^2 = 4ab$ for alle verdier av $a$ og $b$.', solution: '$(a^2+2ab+b^2)-(a^2-2ab+b^2) = 4ab$ ✓' },
              { label: 'c', task: 'Forenkle $\\frac{(x+3)^2 - 9}{x}$ for $x \\neq 0$.', solution: '$\\frac{x^2+6x+9-9}{x} = \\frac{x^2+6x}{x} = \\frac{x(x+6)}{x} = x + 6$' },
              { label: 'd', task: 'Finn $x$ dersom $(x+5)^2 = (x+3)^2 + 32$.', solution: '$x^2+10x+25 = x^2+6x+9+32 \\Rightarrow 10x+25 = 6x+41 \\Rightarrow 4x = 16 \\Rightarrow x = 4$' },
            ],
            solution: 'a) $(x^2+9)(x+3)(x-3)$, b) Se bevis, c) $x+6$, d) $x=4$',
            hideInlineSolution: true,
            hints: ['a) Bruk konjugat gjentatte ganger. c) Multipliser ut og forenkle teller først.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_9_2_3: TextbookChapter = {
  id: '9-2-3',
  courseId: '9',
  chapterNumber: '2.3',
  title: 'Likninger med brøk',
  description: 'Løse likninger som inneholder brøker.',
  estimatedMinutes: 50,
  competenceGoals: ['løyse likningar og ulikskapar og forklare kva det vil seie at ein storleik er ukjend'],
  content: [
    {
      id: '9-2-3-intro',
      type: 'text',
      content: `Når en likning inneholder brøker, kan vi ofte forenkle den ved å multiplisere begge sider med fellesnevneren. Da forsvinner brøkene og likningen blir lettere å løse.`,
    },
    {
      id: '9-2-3-def-1',
      type: 'definition',
      title: 'Løsning av brøklikninger',
      content: `**Metode for å løse likninger med brøk:**

1. Finn fellesnevneren til alle brøkene
2. Multipliser alle ledd på begge sider med fellesnevneren
3. Løs den nye likningen uten brøker
4. Kontroller svaret`,
    },
    {
      id: '9-2-3-ex-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'Løs likningen $\\frac{x}{3} = 4$',
      solution: `Vi multipliserer begge sider med 3:

$\\frac{x}{3} \\cdot 3 = 4 \\cdot 3$

$x = 12$

**Kontroll**: $\\frac{12}{3} = 4$ ✓`,
    },
    {
      id: '9-2-3-ex-1-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$\\frac{x}{5} = 3$', solution: '$x = 15$' },
          { label: 'b', task: '$\\frac{y}{4} = 7$', solution: '$y = 28$' },
          { label: 'c', task: '$\\frac{a}{6} = -2$', solution: '$a = -12$' },
        ],
        solution: 'a) $x = 15$, b) $y = 28$, c) $a = -12$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-3-ex-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'Løs likningen $\\frac{x}{2} + \\frac{x}{3} = 5$',
      solution: `Fellesnevneren er 6. Vi multipliserer alle ledd med 6:

$6 \\cdot \\frac{x}{2} + 6 \\cdot \\frac{x}{3} = 6 \\cdot 5$

$3x + 2x = 30$

$5x = 30$

$x = 6$

**Kontroll**: $\\frac{6}{2} + \\frac{6}{3} = 3 + 2 = 5$ ✓`,
    },
    {
      id: '9-2-3-ex-2-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene ved å multiplisere med fellesnevneren',
        subTasks: [
          { label: 'a', task: '$\\frac{x}{2} + \\frac{x}{4} = 6$', solution: '$x = 8$' },
          { label: 'b', task: '$\\frac{y}{3} - \\frac{y}{6} = 2$', solution: '$y = 12$' },
          { label: 'c', task: '$\\frac{a}{5} + \\frac{a}{10} = 9$', solution: '$a = 30$' },
        ],
        solution: 'a) $x = 8$, b) $y = 12$, c) $a = 30$',
        hints: ['Finn fellesnevneren først'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-3-ex-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'Løs likningen $\\frac{2x + 1}{3} = 5$',
      solution: `Vi multipliserer begge sider med 3:

$2x + 1 = 15$

$2x = 14$

$x = 7$

**Kontroll**: $\\frac{2 \\cdot 7 + 1}{3} = \\frac{15}{3} = 5$ ✓`,
    },
    {
      id: '9-2-3-ex-3-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$\\frac{3x - 2}{4} = 4$', solution: '$x = 6$' },
          { label: 'b', task: '$\\frac{5y + 3}{2} = 9$', solution: '$y = 3$' },
          { label: 'c', task: '$\\frac{2a - 7}{5} = 1$', solution: '$a = 6$' },
        ],
        solution: 'a) $x = 6$, b) $y = 3$, c) $a = 6$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-3-ex-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'Løs likningen $\\frac{x - 1}{2} = \\frac{x + 3}{4}$',
      solution: `Fellesnevneren er 4. Vi multipliserer alle ledd med 4:

$4 \\cdot \\frac{x - 1}{2} = 4 \\cdot \\frac{x + 3}{4}$

$2(x - 1) = x + 3$

$2x - 2 = x + 3$

$2x - x = 3 + 2$

$x = 5$

**Kontroll**: $\\frac{5-1}{2} = \\frac{4}{2} = 2$ og $\\frac{5+3}{4} = \\frac{8}{4} = 2$ ✓`,
    },
    {
      id: '9-2-3-ex-4-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$\\frac{x + 2}{3} = \\frac{x - 1}{2}$', solution: '$x = 7$' },
          { label: 'b', task: '$\\frac{2y - 1}{4} = \\frac{y + 2}{3}$', solution: '$y = 11$' },
          { label: 'c', task: '$\\frac{3a}{5} - 1 = \\frac{a + 4}{2}$', solution: '$a = 30$' },
        ],
        solution: 'a) $x = 7$, b) $y = 11$, c) $a = 30$',
        hints: ['Multipliser med fellesnevneren på begge sider'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-3-ex-5-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$\\frac{x}{7} = 5$', solution: '$x = 35$' },
          { label: 'b', task: '$\\frac{2y}{3} = 8$', solution: '$y = 12$' },
          { label: 'c', task: '$\\frac{3a}{4} = 9$', solution: '$a = 12$' },
          { label: 'd', task: '$\\frac{5b}{6} = 10$', solution: '$b = 12$' },
        ],
        solution: 'a) $x = 35$, b) $y = 12$, c) $a = 12$, d) $b = 12$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-3-ex-6-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene med flere brøkledd',
        subTasks: [
          { label: 'a', task: '$\\frac{x}{2} + \\frac{x}{5} = 7$', solution: 'Fellesnevner 10: $5x + 2x = 70 \\Rightarrow x = 10$' },
          { label: 'b', task: '$\\frac{y}{3} + \\frac{y}{4} = 14$', solution: 'Fellesnevner 12: $4y + 3y = 168 \\Rightarrow y = 24$' },
          { label: 'c', task: '$\\frac{a}{6} - \\frac{a}{8} = 1$', solution: 'Fellesnevner 24: $4a - 3a = 24 \\Rightarrow a = 24$' },
          { label: 'd', task: '$\\frac{2x}{3} - \\frac{x}{4} = 5$', solution: 'Fellesnevner 12: $8x - 3x = 60 \\Rightarrow x = 12$' },
        ],
        solution: 'a) $x = 10$, b) $y = 24$, c) $a = 24$, d) $x = 12$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-3-ex-7-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene med uttrykk i teller',
        subTasks: [
          { label: 'a', task: '$\\frac{4x + 5}{3} = 7$', solution: '$4x + 5 = 21 \\Rightarrow x = 4$' },
          { label: 'b', task: '$\\frac{2y - 9}{5} = 3$', solution: '$2y - 9 = 15 \\Rightarrow y = 12$' },
          { label: 'c', task: '$\\frac{3a + 7}{4} = 10$', solution: '$3a + 7 = 40 \\Rightarrow a = 11$' },
          { label: 'd', task: '$\\frac{6 - 2b}{3} = -2$', solution: '$6 - 2b = -6 \\Rightarrow b = 6$' },
        ],
        solution: 'a) $x = 4$, b) $y = 12$, c) $a = 11$, d) $b = 6$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-3-ex-8-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs likningene med brøk på begge sider',
        subTasks: [
          { label: 'a', task: '$\\frac{x + 5}{4} = \\frac{2x - 1}{3}$', solution: 'Gang med 12: $3(x+5) = 4(2x-1) \\Rightarrow 3x+15 = 8x-4 \\Rightarrow x = \\frac{19}{5}$' },
          { label: 'b', task: '$\\frac{3y + 2}{5} = \\frac{y + 6}{2}$', solution: 'Gang med 10: $2(3y+2) = 5(y+6) \\Rightarrow 6y+4 = 5y+30 \\Rightarrow y = 26$' },
          { label: 'c', task: '$\\frac{2a - 3}{6} = \\frac{a + 1}{4}$', solution: 'Gang med 12: $2(2a-3) = 3(a+1) \\Rightarrow 4a-6 = 3a+3 \\Rightarrow a = 9$' },
        ],
        solution: 'a) $x = \\frac{19}{5}$, b) $y = 26$, c) $a = 9$',
        hints: ['Gang begge sider med MFN (minste felles nevner)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-3-ex-9-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene med blandede tall',
        subTasks: [
          { label: 'a', task: '$\\frac{x}{3} + 2 = 5$', solution: '$\\frac{x}{3} = 3 \\Rightarrow x = 9$' },
          { label: 'b', task: '$4 - \\frac{y}{2} = 1$', solution: '$-\\frac{y}{2} = -3 \\Rightarrow y = 6$' },
          { label: 'c', task: '$\\frac{2a + 1}{5} - 3 = 0$', solution: '$\\frac{2a+1}{5} = 3 \\Rightarrow 2a + 1 = 15 \\Rightarrow a = 7$' },
          { label: 'd', task: '$2 + \\frac{3x - 4}{2} = 7$', solution: '$\\frac{3x-4}{2} = 5 \\Rightarrow 3x - 4 = 10 \\Rightarrow x = \\frac{14}{3}$' },
        ],
        solution: 'a) $x = 9$, b) $y = 6$, c) $a = 7$, d) $x = \\frac{14}{3}$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-3-ex-10-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs likningene med tre brøkledd',
        subTasks: [
          { label: 'a', task: '$\\frac{x}{2} + \\frac{x}{3} + \\frac{x}{6} = 12$', solution: 'Fellesnevner 6: $3x + 2x + x = 72 \\Rightarrow 6x = 72 \\Rightarrow x = 12$' },
          { label: 'b', task: '$\\frac{y}{4} - \\frac{y}{6} + \\frac{y}{3} = 5$', solution: 'Fellesnevner 12: $3y - 2y + 4y = 60 \\Rightarrow 5y = 60 \\Rightarrow y = 12$' },
          { label: 'c', task: '$\\frac{a+1}{2} + \\frac{a-1}{3} = \\frac{5a}{6}$', solution: 'Gang med 6: $3(a+1) + 2(a-1) = 5a \\Rightarrow 3a+3+2a-2 = 5a \\Rightarrow 1 = 0$, ingen løsning!' },
        ],
        solution: 'a) $x = 12$, b) $y = 12$, c) Ingen løsning',
        hints: ['Finn fellesnevner for alle tre brøker'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-3-ex-11-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tekstoppgaver med brøklikninger',
        subTasks: [
          { label: 'a', task: 'En tredjedel av et tall pluss 5 er lik 11. Finn tallet.', solution: '$\\frac{x}{3} + 5 = 11 \\Rightarrow x = 18$' },
          { label: 'b', task: 'To femtedeler av et tall minus 4 er lik 6. Finn tallet.', solution: '$\\frac{2x}{5} - 4 = 6 \\Rightarrow x = 25$' },
          { label: 'c', task: 'Summen av halvparten og en fjerdedel av et tall er 15. Finn tallet.', solution: '$\\frac{x}{2} + \\frac{x}{4} = 15 \\Rightarrow x = 20$' },
        ],
        solution: 'a) 18, b) 25, c) 20',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-3-ex-12-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-3-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordringsoppgaver',
        subTasks: [
          { label: 'a', task: '$\\frac{x+1}{x-1} = 3$ (for $x \\neq 1$)', solution: '$x + 1 = 3(x - 1) \\Rightarrow x + 1 = 3x - 3 \\Rightarrow x = 2$' },
          { label: 'b', task: '$\\frac{2}{x} + \\frac{3}{x} = 1$ (for $x \\neq 0$)', solution: '$\\frac{5}{x} = 1 \\Rightarrow x = 5$' },
          { label: 'c', task: '$\\frac{x}{2} + \\frac{x-4}{3} = \\frac{x+2}{4}$', solution: 'Gang med 12: $6x + 4(x-4) = 3(x+2) \\Rightarrow 10x - 16 = 3x + 6 \\Rightarrow x = \\frac{22}{7}$' },
          { label: 'd', task: '$\\frac{3x - 1}{2} - \\frac{2x + 3}{5} = \\frac{x}{10}$', solution: 'Gang med 10: $5(3x-1) - 2(2x+3) = x \\Rightarrow 15x-5-4x-6 = x \\Rightarrow 10x = 11 \\Rightarrow x = 1{,}1$' },
        ],
        solution: 'a) $x = 2$, b) $x = 5$, c) $x = \\frac{22}{7}$, d) $x = 1{,}1$',
        hints: ['Pass på at nevneren ikke blir 0 i a) og b)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-2-3-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '9-2-3-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-2-3-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Løs enkle likninger med brøk.',
            subTasks: [
              { label: 'a', task: 'Løs $\\frac{x}{2} = 5$', solution: '$x = 10$' },
              { label: 'b', task: 'Løs $\\frac{x}{3} = 4$', solution: '$x = 12$' },
              { label: 'c', task: 'Løs $\\frac{x}{5} + 1 = 3$', solution: '$\\frac{x}{5} = 2 \\Rightarrow x = 10$' },
              { label: 'd', task: 'Løs $\\frac{2x}{3} = 8$', solution: '$2x = 24 \\Rightarrow x = 12$' },
              { label: 'e', task: 'Løs $\\frac{x+1}{4} = 3$', solution: '$x + 1 = 12 \\Rightarrow x = 11$' },
              { label: 'f', task: 'Løs $\\frac{3x}{4} = 6$', solution: '$3x = 24 \\Rightarrow x = 8$' },
            ],
            solution: 'a) $x=10$, b) $x=12$, c) $x=10$, d) $x=12$, e) $x=11$, f) $x=8$',
            hideInlineSolution: true,
            hints: ['Gang begge sider med nevneren for å bli kvitt brøken'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-2-3-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-2-3-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Løs likninger med brøk på begge sider.',
            subTasks: [
              { label: 'a', task: 'Løs $\\frac{x}{2} = \\frac{3}{4}$', solution: 'Gang med 4: $2x = 3 \\Rightarrow x = \\frac{3}{2}$' },
              { label: 'b', task: 'Løs $\\frac{x}{3} = \\frac{5}{6}$', solution: 'Gang med 6: $2x = 5 \\Rightarrow x = \\frac{5}{2}$' },
              { label: 'c', task: 'Løs $\\frac{2x}{5} = \\frac{4}{5}$', solution: '$2x = 4 \\Rightarrow x = 2$' },
              { label: 'd', task: 'Løs $\\frac{x-1}{3} = \\frac{2}{3}$', solution: '$x - 1 = 2 \\Rightarrow x = 3$' },
              { label: 'e', task: 'Løs $\\frac{x}{4} = \\frac{x-2}{2}$', solution: 'Gang med 4: $x = 2(x-2) \\Rightarrow x = 2x - 4 \\Rightarrow x = 4$' },
              { label: 'f', task: 'Løs $\\frac{x+3}{6} = \\frac{x}{3}$', solution: 'Gang med 6: $x + 3 = 2x \\Rightarrow x = 3$' },
            ],
            solution: 'a) $x=\\frac{3}{2}$, b) $x=\\frac{5}{2}$, c) $x=2$, d) $x=3$, e) $x=4$, f) $x=3$',
            hideInlineSolution: true,
            hints: ['Finn fellesnevner og gang begge sider med den'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-2-3-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-2-3-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Finn fellesnevner og løs.',
            subTasks: [
              { label: 'a', task: 'Løs $\\frac{x}{2} + \\frac{x}{3} = 5$', solution: 'Fellesnevner 6: $\\frac{3x + 2x}{6} = 5 \\Rightarrow 5x = 30 \\Rightarrow x = 6$' },
              { label: 'b', task: 'Løs $\\frac{x}{4} + \\frac{x}{2} = 6$', solution: 'Fellesnevner 4: $\\frac{x + 2x}{4} = 6 \\Rightarrow 3x = 24 \\Rightarrow x = 8$' },
              { label: 'c', task: 'Løs $\\frac{x}{3} - \\frac{x}{6} = 2$', solution: 'Fellesnevner 6: $\\frac{2x - x}{6} = 2 \\Rightarrow x = 12$' },
              { label: 'd', task: 'Løs $\\frac{x}{5} + \\frac{x}{10} = 3$', solution: 'Fellesnevner 10: $\\frac{2x + x}{10} = 3 \\Rightarrow 3x = 30 \\Rightarrow x = 10$' },
              { label: 'e', task: 'Løs $\\frac{2x}{3} + \\frac{x}{6} = 5$', solution: 'Fellesnevner 6: $\\frac{4x + x}{6} = 5 \\Rightarrow 5x = 30 \\Rightarrow x = 6$' },
              { label: 'f', task: 'Løs $\\frac{x}{2} - \\frac{x}{4} + \\frac{x}{8} = 3$', solution: 'Fellesnevner 8: $\\frac{4x - 2x + x}{8} = 3 \\Rightarrow 3x = 24 \\Rightarrow x = 8$' },
            ],
            solution: 'a) $x=6$, b) $x=8$, c) $x=12$, d) $x=10$, e) $x=6$, f) $x=8$',
            hideInlineSolution: true,
            hints: ['Finn fellesnevner (minste felles multiplum av nevnerne) og gang alle ledd med den'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-2-3-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-2-3-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Løs likninger med brøk og parenteser.',
            subTasks: [
              { label: 'a', task: 'Løs $\\frac{x+2}{3} + \\frac{x-1}{2} = 4$', solution: 'Gang med 6: $2(x+2) + 3(x-1) = 24 \\Rightarrow 2x+4+3x-3 = 24 \\Rightarrow 5x = 23 \\Rightarrow x = \\frac{23}{5}$' },
              { label: 'b', task: 'Løs $\\frac{3x-2}{4} = \\frac{x+1}{2}$', solution: 'Gang med 4: $3x-2 = 2(x+1) \\Rightarrow 3x-2 = 2x+2 \\Rightarrow x = 4$' },
              { label: 'c', task: 'Løs $\\frac{2(x+3)}{5} = \\frac{x}{2} + 1$', solution: 'Gang med 10: $4(x+3) = 5x + 10 \\Rightarrow 4x+12 = 5x+10 \\Rightarrow x = 2$' },
              { label: 'd', task: 'Løs $\\frac{x-3}{4} - \\frac{x+1}{6} = \\frac{1}{12}$', solution: 'Gang med 12: $3(x-3) - 2(x+1) = 1 \\Rightarrow 3x-9-2x-2 = 1 \\Rightarrow x = 12$' },
              { label: 'e', task: 'Løs $\\frac{5x+1}{3} - \\frac{2x-3}{6} = 3$', solution: 'Gang med 6: $2(5x+1) - (2x-3) = 18 \\Rightarrow 10x+2-2x+3 = 18 \\Rightarrow 8x = 13 \\Rightarrow x = \\frac{13}{8}$' },
            ],
            solution: 'a) $x=\\frac{23}{5}$, b) $x=4$, c) $x=2$, d) $x=12$, e) $x=\\frac{13}{8}$',
            hideInlineSolution: true,
            hints: ['Finn fellesnevneren, gang gjennom, og multipliser ut alle parenteser'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-2-3-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-2-3-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Sett opp og løs likninger med brøk fra tekst.',
            subTasks: [
              { label: 'a', task: 'Halvparten av et tall pluss en tredjedel av samme tall er 25. Finn tallet.', solution: '$\\frac{x}{2} + \\frac{x}{3} = 25 \\Rightarrow \\frac{5x}{6} = 25 \\Rightarrow x = 30$' },
              { label: 'b', task: 'En fjerdedel av et tall er 3 mer enn en sjettedel av tallet. Finn tallet.', solution: '$\\frac{x}{4} = \\frac{x}{6} + 3 \\Rightarrow \\frac{3x - 2x}{12} = 3 \\Rightarrow x = 36$' },
              { label: 'c', task: 'Tre femtedeler av et tall minus to er lik en tredjedel av tallet. Finn tallet.', solution: '$\\frac{3x}{5} - 2 = \\frac{x}{3}$. Gang med 15: $9x - 30 = 5x \\Rightarrow 4x = 30 \\Rightarrow x = 7{,}5$' },
              { label: 'd', task: 'Marte er dobbelt så gammel som Nils. Om 5 år er hun $\\frac{5}{3}$ ganger så gammel som ham. Hvor gamle er de nå?', solution: 'Nils: $x$, Marte: $2x$. Om 5 år: $2x+5 = \\frac{5}{3}(x+5) \\Rightarrow 6x+15 = 5x+25 \\Rightarrow x = 10$. Nils: 10, Marte: 20.' },
            ],
            solution: 'a) $x=30$, b) $x=36$, c) $x=7{,}5$, d) Nils 10, Marte 20',
            hideInlineSolution: true,
            hints: ['Oversett teksten til en likning med brøk, og finn deretter fellesnevneren'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-2-3-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-2-3-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Krevende likninger med brøk.',
            subTasks: [
              { label: 'a', task: 'Løs $\\frac{2}{x} + \\frac{3}{x} = 1$ (for $x \\neq 0$)', solution: '$\\frac{5}{x} = 1 \\Rightarrow x = 5$' },
              { label: 'b', task: 'Løs $\\frac{x+1}{x-1} = 2$ (for $x \\neq 1$)', solution: '$x + 1 = 2(x-1) \\Rightarrow x + 1 = 2x - 2 \\Rightarrow x = 3$' },
              { label: 'c', task: 'Løs $\\frac{3}{x-2} = \\frac{1}{x-4}$ (for $x \\neq 2$ og $x \\neq 4$)', solution: '$3(x-4) = x-2 \\Rightarrow 3x-12 = x-2 \\Rightarrow 2x = 10 \\Rightarrow x = 5$' },
              { label: 'd', task: 'Løs $\\frac{x}{x+2} + \\frac{1}{x+2} = 1$ (for $x \\neq -2$)', solution: '$\\frac{x+1}{x+2} = 1 \\Rightarrow x+1 = x+2 \\Rightarrow 1 = 2$. Ingen løsning!' },
            ],
            solution: 'a) $x=5$, b) $x=3$, c) $x=5$, d) Ingen løsning',
            hideInlineSolution: true,
            hints: ['Når $x$ står i nevneren, husk å sjekke at løsningen ikke gir null i nevneren'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_9_2_4: TextbookChapter = {
  id: '9-2-4',
  courseId: '9',
  chapterNumber: '2.4',
  title: 'Ulikheter',
  description: 'Løse enkle ulikheter og fremstille løsningen grafisk.',
  estimatedMinutes: 45,
  competenceGoals: ['løyse likningar og ulikskapar og forklare kva det vil seie at ein storleik er ukjend'],
  content: [
    {
      id: '9-2-4-intro',
      type: 'text',
      content: `En **ulikhet** er et matematisk utsagn som sier at to størrelser ikke er like. Vi bruker symbolene $<$, $>$, $\\leq$ og $\\geq$ for å uttrykke ulikheter.`,
    },
    {
      id: '9-2-4-def-1',
      type: 'definition',
      title: 'Ulikhetstegn',
      content: `**Symboler:**
- $<$ betyr "mindre enn"
- $>$ betyr "større enn"
- $\\leq$ betyr "mindre enn eller lik"
- $\\geq$ betyr "større enn eller lik"

**Viktig regel**: Når vi multipliserer eller dividerer med et negativt tall, må vi **snu ulikhetstegnet**.`,
    },
    {
      id: '9-2-4-ex-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'Løs ulikheten $x + 3 > 7$',
      solution: `$x + 3 > 7$

$x > 7 - 3$

$x > 4$

**Løsning**: Alle tall større enn 4.

På tallinje: ○---→ fra 4 mot høyre (åpen sirkel ved 4)`,
    },
    {
      id: '9-2-4-ex-1-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs ulikhetene',
        subTasks: [
          { label: 'a', task: '$x + 5 > 9$', solution: '$x > 4$' },
          { label: 'b', task: '$y - 2 < 6$', solution: '$y < 8$' },
          { label: 'c', task: '$a + 7 \\leq 10$', solution: '$a \\leq 3$' },
        ],
        solution: 'a) $x > 4$, b) $y < 8$, c) $a \\leq 3$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-4-ex-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'Løs ulikheten $3x \\leq 12$',
      solution: `$3x \\leq 12$

$x \\leq \\frac{12}{3}$

$x \\leq 4$

**Løsning**: Alle tall mindre enn eller lik 4.

På tallinje: ←---● ved 4 (fylt sirkel fordi lik er inkludert)`,
    },
    {
      id: '9-2-4-ex-2-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs ulikhetene',
        subTasks: [
          { label: 'a', task: '$2x < 10$', solution: '$x < 5$' },
          { label: 'b', task: '$5y \\geq 25$', solution: '$y \\geq 5$' },
          { label: 'c', task: '$4a > 20$', solution: '$a > 5$' },
        ],
        solution: 'a) $x < 5$, b) $y \\geq 5$, c) $a > 5$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-4-text-2',
      type: 'text',
      content: `### Snu ulikhetstegnet

Når vi multipliserer eller dividerer med et **negativt tall**, må vi snu ulikhetstegnet!`,
    },
    {
      id: '9-2-4-ex-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'Løs ulikheten $-2x > 8$',
      solution: `$-2x > 8$

Vi dividerer med $-2$ og snur ulikhetstegnet:

$x < \\frac{8}{-2}$

$x < -4$

**Merk**: Vi snudde $>$ til $<$ fordi vi delte med et negativt tall.`,
    },
    {
      id: '9-2-4-ex-3-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs ulikhetene. Husk å snu tegnet når du deler med negativt tall!',
        subTasks: [
          { label: 'a', task: '$-3x < 15$', solution: '$x > -5$' },
          { label: 'b', task: '$-4y \\geq 20$', solution: '$y \\leq -5$' },
          { label: 'c', task: '$-5a > -25$', solution: '$a < 5$' },
        ],
        solution: 'a) $x > -5$, b) $y \\leq -5$, c) $a < 5$',
        hints: ['Husk å snu ulikhetstegnet!'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-4-ex-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'Løs ulikheten $2x - 5 < 3x + 2$',
      solution: `$2x - 5 < 3x + 2$

Samle $x$-leddene på venstre side:

$2x - 3x < 2 + 5$

$-x < 7$

Dividere med $-1$ og snu tegnet:

$x > -7$`,
    },
    {
      id: '9-2-4-ex-4-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs ulikhetene',
        subTasks: [
          { label: 'a', task: '$3x + 4 > x + 10$', solution: '$x > 3$' },
          { label: 'b', task: '$5y - 3 \\leq 2y + 9$', solution: '$y \\leq 4$' },
          { label: 'c', task: '$4 - 2a < 3a - 6$', solution: '$a > 2$' },
        ],
        solution: 'a) $x > 3$, b) $y \\leq 4$, c) $a > 2$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-4-ex-5-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs ulikhetene',
        subTasks: [
          { label: 'a', task: '$x - 8 > 2$', solution: '$x > 10$' },
          { label: 'b', task: '$y + 4 \\leq 9$', solution: '$y \\leq 5$' },
          { label: 'c', task: '$a - 3 < -1$', solution: '$a < 2$' },
          { label: 'd', task: '$b + 7 \\geq 12$', solution: '$b \\geq 5$' },
        ],
        solution: 'a) $x > 10$, b) $y \\leq 5$, c) $a < 2$, d) $b \\geq 5$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-4-ex-6-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs ulikhetene (positiv koeffisient)',
        subTasks: [
          { label: 'a', task: '$6x > 42$', solution: '$x > 7$' },
          { label: 'b', task: '$3y \\leq 27$', solution: '$y \\leq 9$' },
          { label: 'c', task: '$8a < 56$', solution: '$a < 7$' },
          { label: 'd', task: '$\\frac{x}{4} \\geq 3$', solution: '$x \\geq 12$' },
        ],
        solution: 'a) $x > 7$, b) $y \\leq 9$, c) $a < 7$, d) $x \\geq 12$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-4-ex-7-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-4-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs ulikhetene. Husk å snu tegnet ved negativ koeffisient!',
        subTasks: [
          { label: 'a', task: '$-6x > 18$', solution: '$x < -3$' },
          { label: 'b', task: '$-2y \\leq 14$', solution: '$y \\geq -7$' },
          { label: 'c', task: '$-\\frac{x}{3} < 4$', solution: '$x > -12$' },
          { label: 'd', task: '$-8a \\geq -24$', solution: '$a \\leq 3$' },
        ],
        solution: 'a) $x < -3$, b) $y \\geq -7$, c) $x > -12$, d) $a \\leq 3$',
        hints: ['Snu tegnet når du deler med negativt tall!'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-4-ex-8-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-4-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs totrinnsulikhetene',
        subTasks: [
          { label: 'a', task: '$2x + 5 > 11$', solution: '$2x > 6 \\Rightarrow x > 3$' },
          { label: 'b', task: '$3y - 7 \\leq 8$', solution: '$3y \\leq 15 \\Rightarrow y \\leq 5$' },
          { label: 'c', task: '$4a + 3 < 19$', solution: '$4a < 16 \\Rightarrow a < 4$' },
          { label: 'd', task: '$5b - 2 \\geq 13$', solution: '$5b \\geq 15 \\Rightarrow b \\geq 3$' },
        ],
        solution: 'a) $x > 3$, b) $y \\leq 5$, c) $a < 4$, d) $b \\geq 3$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-4-ex-9-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-4-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs ulikhetene med x på begge sider',
        subTasks: [
          { label: 'a', task: '$5x - 2 > 2x + 7$', solution: '$3x > 9 \\Rightarrow x > 3$' },
          { label: 'b', task: '$7y + 3 \\leq 4y + 18$', solution: '$3y \\leq 15 \\Rightarrow y \\leq 5$' },
          { label: 'c', task: '$2a - 9 < 5a - 3$', solution: '$-3a < 6 \\Rightarrow a > -2$' },
          { label: 'd', task: '$6 - 3b \\geq 2b - 4$', solution: '$10 \\geq 5b \\Rightarrow b \\leq 2$' },
        ],
        solution: 'a) $x > 3$, b) $y \\leq 5$, c) $a > -2$, d) $b \\leq 2$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-4-ex-10-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-4-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Angi hvilke heltall som oppfyller ulikheten',
        subTasks: [
          { label: 'a', task: '$x > 2$ og $x \\leq 7$', solution: 'Heltallene 3, 4, 5, 6, 7' },
          { label: 'b', task: '$-3 < y < 4$', solution: 'Heltallene $-2, -1, 0, 1, 2, 3$' },
          { label: 'c', task: '$a \\geq -2$ og $a < 3$', solution: 'Heltallene $-2, -1, 0, 1, 2$' },
          { label: 'd', task: '$|x| \\leq 3$', solution: 'Heltallene $-3, -2, -1, 0, 1, 2, 3$' },
        ],
        solution: 'a) 3-7, b) -2 til 3, c) -2 til 2, d) -3 til 3',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-4-ex-11-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-4-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tekstoppgaver med ulikheter',
        subTasks: [
          { label: 'a', task: 'Tre ganger et tall pluss 5 er mindre enn 20. Finn de mulige verdiene for tallet.', solution: '$3x + 5 < 20 \\Rightarrow x < 5$' },
          { label: 'b', task: 'Halvparten av et tall minus 2 er større enn eller lik 4. Finn ulikheten.', solution: '$\\frac{x}{2} - 2 \\geq 4 \\Rightarrow x \\geq 12$' },
          { label: 'c', task: 'En butikk må selge minst 50 varer per dag for å gå i pluss. Hvis de har solgt 32 varer så langt, hvor mange må de selge mer?', solution: '$32 + x \\geq 50 \\Rightarrow x \\geq 18$' },
        ],
        solution: 'a) $x < 5$, b) $x \\geq 12$, c) minst 18 til',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-2-4-ex-12-exercise',
      type: 'exercise',
      exercise: {
        id: '9-2-4-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordringsoppgaver med ulikheter',
        subTasks: [
          { label: 'a', task: 'Løs $\\frac{2x - 1}{3} > 5$', solution: '$2x - 1 > 15 \\Rightarrow 2x > 16 \\Rightarrow x > 8$' },
          { label: 'b', task: 'Løs $4(x - 2) \\leq 3(x + 1)$', solution: '$4x - 8 \\leq 3x + 3 \\Rightarrow x \\leq 11$' },
          { label: 'c', task: 'Løs $-2(3 - x) > 4$', solution: '$-6 + 2x > 4 \\Rightarrow 2x > 10 \\Rightarrow x > 5$' },
          { label: 'd', task: 'Finn alle heltall som oppfyller $2x - 3 < 7$ og $x + 4 \\geq 2$', solution: '$x < 5$ og $x \\geq -2$, heltall: $-2, -1, 0, 1, 2, 3, 4$' },
        ],
        solution: 'a) $x > 8$, b) $x \\leq 11$, c) $x > 5$, d) $-2$ til $4$',
        hints: ['a) Gang med 3 først. b,c) Multipliser ut parentesene først'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-2-4-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '9-2-4-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-2-4-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Løs enkle ulikheter.',
            subTasks: [
              { label: 'a', task: 'Løs $x + 3 > 7$', solution: '$x > 4$' },
              { label: 'b', task: 'Løs $x - 5 \\leq 2$', solution: '$x \\leq 7$' },
              { label: 'c', task: 'Løs $2x < 10$', solution: '$x < 5$' },
              { label: 'd', task: 'Løs $3x \\geq 18$', solution: '$x \\geq 6$' },
              { label: 'e', task: 'Løs $x + 7 < 3$', solution: '$x < -4$' },
              { label: 'f', task: 'Løs $\\frac{x}{4} > 2$', solution: '$x > 8$' },
            ],
            solution: 'a) $x>4$, b) $x \\leq 7$, c) $x<5$, d) $x \\geq 6$, e) $x<-4$, f) $x>8$',
            hideInlineSolution: true,
            hints: ['Løs ulikheten som en vanlig likning, men husk at ulikhetstegnet beholdes'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-2-4-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-2-4-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Løs ulikheter og angi løsningsmengden.',
            subTasks: [
              { label: 'a', task: 'Løs $2x + 1 > 9$', solution: '$2x > 8 \\Rightarrow x > 4$' },
              { label: 'b', task: 'Løs $5x - 3 \\leq 12$', solution: '$5x \\leq 15 \\Rightarrow x \\leq 3$' },
              { label: 'c', task: 'Løs $4 - x < 7$', solution: '$-x < 3 \\Rightarrow x > -3$' },
              { label: 'd', task: 'Løs $3x + 4 \\geq x + 10$', solution: '$2x \\geq 6 \\Rightarrow x \\geq 3$' },
              { label: 'e', task: 'Løs $7 - 2x > 1$', solution: '$-2x > -6 \\Rightarrow x < 3$' },
              { label: 'f', task: 'Løs $\\frac{x}{3} + 2 \\leq 5$', solution: '$\\frac{x}{3} \\leq 3 \\Rightarrow x \\leq 9$' },
            ],
            solution: 'a) $x>4$, b) $x \\leq 3$, c) $x>-3$, d) $x \\geq 3$, e) $x<3$, f) $x \\leq 9$',
            hideInlineSolution: true,
            hints: ['Husk å snu ulikhetstegnet når du ganger eller deler med et negativt tall'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-2-4-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-2-4-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Marker løsningsmengden på tallinje.',
            subTasks: [
              { label: 'a', task: 'Marker $x > 2$ på en tallinje. Bruk åpen eller lukket sirkel.', solution: 'Åpen sirkel ved $2$, pil mot høyre. (Åpen fordi $2$ ikke er med.)' },
              { label: 'b', task: 'Marker $x \\leq 5$ på en tallinje.', solution: 'Lukket (fylt) sirkel ved $5$, pil mot venstre. ($5$ er inkludert.)' },
              { label: 'c', task: 'Marker $-1 < x \\leq 4$ på en tallinje.', solution: 'Åpen sirkel ved $-1$, lukket sirkel ved $4$, markert linje mellom dem.' },
              { label: 'd', task: 'Skriv ulikheten som passer til: lukket sirkel ved $-3$, pil mot høyre.', solution: '$x \\geq -3$' },
              { label: 'e', task: 'Hva er forskjellen mellom $<$ og $\\leq$?', solution: '$<$ betyr strengt mindre enn (verdien er IKKE med), $\\leq$ betyr mindre enn eller lik (verdien ER med).' },
              { label: 'f', task: 'Finn alle heltall som oppfyller $-2 \\leq x < 3$.', solution: 'Heltallene: $-2, -1, 0, 1, 2$' },
            ],
            solution: 'a) Åpen ved 2, pil høyre, b) Lukket ved 5, pil venstre, c) Åpen $-1$, lukket $4$, d) $x \\geq -3$, e) Se forklaring, f) $\\{-2,-1,0,1,2\\}$',
            hideInlineSolution: true,
            hints: ['Åpen sirkel = verdien er ikke med ($<$, $>$). Lukket sirkel = verdien er med ($\\leq$, $\\geq$)'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-2-4-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-2-4-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Løs ulikheter med parenteser og brøker.',
            subTasks: [
              { label: 'a', task: 'Løs $3(x - 2) > 9$', solution: '$3x - 6 > 9 \\Rightarrow 3x > 15 \\Rightarrow x > 5$' },
              { label: 'b', task: 'Løs $2(x + 4) \\leq 5x - 1$', solution: '$2x + 8 \\leq 5x - 1 \\Rightarrow 9 \\leq 3x \\Rightarrow x \\geq 3$' },
              { label: 'c', task: 'Løs $\\frac{x - 1}{2} < 3$', solution: '$x - 1 < 6 \\Rightarrow x < 7$' },
              { label: 'd', task: 'Løs $\\frac{2x + 3}{4} \\geq \\frac{x}{2}$', solution: '$2x + 3 \\geq 2x \\Rightarrow 3 \\geq 0$. Alltid sant, alle $x$ er løsning.' },
              { label: 'e', task: 'Løs $-2(x - 3) > 4$', solution: '$-2x + 6 > 4 \\Rightarrow -2x > -2 \\Rightarrow x < 1$' },
              { label: 'f', task: 'Løs $5 - 3(2x + 1) \\leq 8$', solution: '$5 - 6x - 3 \\leq 8 \\Rightarrow 2 - 6x \\leq 8 \\Rightarrow -6x \\leq 6 \\Rightarrow x \\geq -1$' },
            ],
            solution: 'a) $x>5$, b) $x \\geq 3$, c) $x<7$, d) Alle $x$, e) $x<1$, f) $x \\geq -1$',
            hideInlineSolution: true,
            hints: ['Multipliser ut parenteser først, og pass på fortegnet når du ganger med negativt tall'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-2-4-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-2-4-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Doble ulikheter og praktiske oppgaver.',
            subTasks: [
              { label: 'a', task: 'Løs $1 < 2x - 3 \\leq 9$', solution: '$1 < 2x - 3 \\Rightarrow 2x > 4 \\Rightarrow x > 2$. $2x - 3 \\leq 9 \\Rightarrow x \\leq 6$. Svar: $2 < x \\leq 6$' },
              { label: 'b', task: 'Finn alle heltall i løsningsmengden fra oppgave a).', solution: '$x = 3, 4, 5, 6$' },
              { label: 'c', task: 'Et rom skal ha temperatur mellom $18\\,°C$ og $24\\,°C$. Temperaturen gis av $T = 2t + 10$ der $t$ er timer. Finn intervallet for $t$.', solution: '$18 \\leq 2t + 10 \\leq 24 \\Rightarrow 8 \\leq 2t \\leq 14 \\Rightarrow 4 \\leq t \\leq 7$' },
              { label: 'd', task: 'En elev trenger minst 40 poeng på en prøve for å bestå. Hvert spørsmål gir 5 poeng. Hvor mange spørsmål må eleven svare riktig?', solution: '$5x \\geq 40 \\Rightarrow x \\geq 8$ spørsmål' },
            ],
            solution: 'a) $2 < x \\leq 6$, b) $3, 4, 5, 6$, c) $4 \\leq t \\leq 7$, d) Minst 8 spørsmål',
            hideInlineSolution: true,
            hints: ['Doble ulikheter løses ved å splitte i to og finne fellesområdet'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-2-4-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-2-4-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Sammensatte ulikhetsoppgaver.',
            subTasks: [
              { label: 'a', task: 'Løs $\\frac{3x-1}{2} - \\frac{x+2}{3} > 1$ og angi løsningen som intervall.', solution: 'Gang med 6: $3(3x-1) - 2(x+2) > 6 \\Rightarrow 9x-3-2x-4 > 6 \\Rightarrow 7x > 13 \\Rightarrow x > \\frac{13}{7}$' },
              { label: 'b', task: 'Finn alle heltall $x$ slik at $x^2 < 20$ og $x > 0$.', solution: '$x = 1, 2, 3, 4$ (fordi $4^2 = 16 < 20$, men $5^2 = 25 > 20$)' },
              { label: 'c', task: 'En butikk gir 20% rabatt. Etter rabatten skal prisen være mellom 200 kr og 400 kr. Hva var den opprinnelige prisen?', solution: '$200 \\leq 0{,}8p \\leq 400 \\Rightarrow 250 \\leq p \\leq 500$' },
              { label: 'd', task: 'To ulikheter: $2x + 1 > 5$ og $3x - 4 < 11$. Finn verdiene av $x$ som oppfyller begge.', solution: '$2x + 1 > 5 \\Rightarrow x > 2$. $3x - 4 < 11 \\Rightarrow x < 5$. Felles: $2 < x < 5$' },
            ],
            solution: 'a) $x > \\frac{13}{7}$, b) $\\{1,2,3,4\\}$, c) $250 \\leq p \\leq 500$, d) $2 < x < 5$',
            hideInlineSolution: true,
            hints: ['Finn fellesnevner for brøker, og løs begge ulikhetene separat for doble betingelser'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_9_3_1: TextbookChapter = {
  id: '9-3-1',
  courseId: '9',
  chapterNumber: '3.1',
  title: 'Lineære funksjoner',
  description: 'Funksjonsuttrykk, grafer og egenskaper til lineære funksjoner.',
  estimatedMinutes: 55,
  competenceGoals: ['utforske og beskrive funksjonar knytte til praktiske situasjonar'],
  content: [
    {
      id: '9-3-1-intro',
      type: 'text',
      content: `En **lineær funksjon** er en funksjon der grafen er en rett linje. Lineære funksjoner kan brukes til å beskrive mange praktiske sammenhenger, for eksempel pris som en funksjon av antall, eller temperatur som en funksjon av tid.`,
    },
    {
      id: '9-3-1-def-1',
      type: 'definition',
      title: 'Lineær funksjon',
      content: `En **lineær funksjon** har formen:

$$f(x) = ax + b$$

der:
- $a$ er **stigningstallet** (hvor bratt linjen er)
- $b$ er **konstantleddet** (der linjen krysser $y$-aksen)`,
    },
    {
      id: '9-3-1-lineaer-bilde',
      type: 'image',
      src: '/images/9-klasse/lineaer-funksjon-intro.svg',
      alt: 'Graf av en lineaer funksjon med stigningstall og konstantledd markert',
      caption: 'En lineaer funksjon med stigningstall a og konstantledd b',
    },
    {
      id: '9-3-1-ex-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'Bestem $f(2)$ og $f(-1)$ når $f(x) = 3x + 1$',
      solution: `Vi setter inn verdiene for $x$:

$f(2) = 3 \\cdot 2 + 1 = 6 + 1 = 7$

$f(-1) = 3 \\cdot (-1) + 1 = -3 + 1 = -2$`,
    },
    {
      id: '9-3-1-ex-1-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut funksjonsverdiene',
        subTasks: [
          { label: 'a', task: '$f(x) = 2x + 4$. Finn $f(3)$', solution: '$f(3) = 2 \\cdot 3 + 4 = 10$' },
          { label: 'b', task: '$g(x) = -x + 5$. Finn $g(2)$', solution: '$g(2) = -2 + 5 = 3$' },
          { label: 'c', task: '$h(x) = 4x - 3$. Finn $h(-2)$', solution: '$h(-2) = 4 \\cdot (-2) - 3 = -11$' },
        ],
        solution: 'a) 10, b) 3, c) -11',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-3-1-text-2',
      type: 'text',
      content: `### Tegne grafen til en lineær funksjon

For å tegne grafen til en lineær funksjon, trenger vi minst to punkter. Vi kan finne punkter ved å sette inn ulike verdier for $x$.`,
    },
    {
      id: '9-3-1-ex-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'Tegn grafen til $f(x) = 2x - 1$',
      solution: `Vi lager en verditabell:

| $x$ | $f(x) = 2x - 1$ |
|-----|-----------------|
| -1  | $2(-1) - 1 = -3$ |
| 0   | $2(0) - 1 = -1$ |
| 2   | $2(2) - 1 = 3$ |

Vi plotter punktene $(-1, -3)$, $(0, -1)$ og $(2, 3)$ og trekker en rett linje gjennom dem.`,
    },
    {
      id: '9-3-1-ex-2-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag verditabell og tegn grafen',
        subTasks: [
          { label: 'a', task: '$f(x) = x + 2$ for $x = -2, 0, 2$', solution: 'Punkter: $(-2, 0)$, $(0, 2)$, $(2, 4)$' },
          { label: 'b', task: '$g(x) = -2x + 3$ for $x = -1, 0, 2$', solution: 'Punkter: $(-1, 5)$, $(0, 3)$, $(2, -1)$' },
        ],
        solution: 'a) Punkter: (-2,0), (0,2), (2,4), b) Punkter: (-1,5), (0,3), (2,-1)',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-3-1-ex-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'Finn funksjonsuttrykket når grafen går gjennom punktene $(0, 4)$ og $(2, 8)$',
      solution: `Siden linjen går gjennom $(0, 4)$, er konstantleddet $b = 4$.

Stigningstallet finner vi:
$$a = \\frac{\\Delta y}{\\Delta x} = \\frac{8 - 4}{2 - 0} = \\frac{4}{2} = 2$$

Funksjonsuttrykket er $f(x) = 2x + 4$`,
    },
    {
      id: '9-3-1-ex-3-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn funksjonsuttrykket',
        subTasks: [
          { label: 'a', task: 'Grafen går gjennom $(0, 3)$ og $(2, 7)$', solution: '$f(x) = 2x + 3$' },
          { label: 'b', task: 'Grafen går gjennom $(0, 5)$ og $(4, 1)$', solution: '$f(x) = -x + 5$' },
        ],
        solution: 'a) $f(x) = 2x + 3$, b) $f(x) = -x + 5$',
        hints: ['Konstantleddet er $y$-verdien når $x = 0$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-3-1-ex-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'Et taxiselskap tar 50 kr i oppstartsgebyr og 15 kr per km. Skriv opp en funksjon for prisen $P(x)$ der $x$ er antall km.',
      solution: `La $x$ være antall kilometer.

Prisen består av:
- Fast gebyr: 50 kr
- Variabel kostnad: 15 kr per km

$P(x) = 15x + 50$

**Eksempel**: En tur på 8 km koster:
$P(8) = 15 \\cdot 8 + 50 = 120 + 50 = 170$ kr`,
    },
    {
      id: '9-3-1-ex-4-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sett opp funksjonsuttrykk for praktiske situasjoner',
        subTasks: [
          { label: 'a', task: 'Et treningssenter koster 200 kr i innmeldingsgebyr pluss 400 kr per måned. Skriv en funksjon $K(m)$ for totalkostnaden etter $m$ måneder.', solution: '$K(m) = 400m + 200$' },
          { label: 'b', task: 'Hva koster det etter 6 måneder?', solution: '$K(6) = 400 \\cdot 6 + 200 = 2600$ kr' },
        ],
        solution: 'a) $K(m) = 400m + 200$, b) 2600 kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-3-1-ex-5-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut funksjonsverdiene',
        subTasks: [
          { label: 'a', task: '$f(x) = 3x + 1$. Finn $f(0)$, $f(2)$, $f(-1)$', solution: '$f(0) = 1$, $f(2) = 7$, $f(-1) = -2$' },
          { label: 'b', task: '$g(x) = -2x + 5$. Finn $g(0)$, $g(3)$, $g(-2)$', solution: '$g(0) = 5$, $g(3) = -1$, $g(-2) = 9$' },
          { label: 'c', task: '$h(x) = 4x - 3$. Finn $h(1)$, $h(5)$, $h(-3)$', solution: '$h(1) = 1$, $h(5) = 17$, $h(-3) = -15$' },
        ],
        solution: 'a) 1, 7, -2, b) 5, -1, 9, c) 1, 17, -15',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-3-1-ex-6-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Tegn grafene i et koordinatsystem',
        subTasks: [
          { label: 'a', task: '$f(x) = x + 2$', solution: 'Linje med stigning 1 gjennom $(0, 2)$' },
          { label: 'b', task: '$g(x) = 2x - 1$', solution: 'Linje med stigning 2 gjennom $(0, -1)$' },
          { label: 'c', task: '$h(x) = -x + 3$', solution: 'Linje med stigning $-1$ gjennom $(0, 3)$' },
        ],
        solution: 'Tegn koordinatsystem og plott linjene',
        hints: ['Finn to punkter på hver linje ved å velge $x$-verdier'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-3-1-ex-7-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn funksjonsuttrykket',
        subTasks: [
          { label: 'a', task: 'Grafen går gjennom $(0, 4)$ og $(3, 10)$', solution: 'Stigning: $\\frac{10-4}{3-0} = 2$. $f(x) = 2x + 4$' },
          { label: 'b', task: 'Grafen går gjennom $(0, 6)$ og $(2, 0)$', solution: 'Stigning: $\\frac{0-6}{2-0} = -3$. $f(x) = -3x + 6$' },
          { label: 'c', task: 'Grafen går gjennom $(1, 5)$ og $(3, 11)$', solution: 'Stigning: $\\frac{11-5}{3-1} = 3$. Med $(1,5)$: $5 = 3 \\cdot 1 + b \\Rightarrow b = 2$. $f(x) = 3x + 2$' },
        ],
        solution: 'a) $f(x) = 2x + 4$, b) $f(x) = -3x + 6$, c) $f(x) = 3x + 2$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-3-1-ex-8-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les av funksjonsuttrykket fra grafen',
        subTasks: [
          { label: 'a', task: 'Linje gjennom $(0, 1)$ og $(2, 5)$', solution: '$f(x) = 2x + 1$' },
          { label: 'b', task: 'Linje gjennom $(0, 4)$ og $(4, 0)$', solution: '$f(x) = -x + 4$' },
          { label: 'c', task: 'Horisontal linje gjennom $(0, 3)$', solution: '$f(x) = 3$ (konstant funksjon)' },
        ],
        solution: 'a) $f(x) = 2x + 1$, b) $f(x) = -x + 4$, c) $f(x) = 3$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-3-1-ex-9-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn nullpunktet (der grafen krysser x-aksen)',
        subTasks: [
          { label: 'a', task: '$f(x) = 2x - 6$', solution: '$2x - 6 = 0 \\Rightarrow x = 3$' },
          { label: 'b', task: '$g(x) = -3x + 9$', solution: '$-3x + 9 = 0 \\Rightarrow x = 3$' },
          { label: 'c', task: '$h(x) = 4x + 12$', solution: '$4x + 12 = 0 \\Rightarrow x = -3$' },
          { label: 'd', task: '$k(x) = \\frac{x}{2} - 4$', solution: '$\\frac{x}{2} - 4 = 0 \\Rightarrow x = 8$' },
        ],
        solution: 'a) $x = 3$, b) $x = 3$, c) $x = -3$, d) $x = 8$',
        hints: ['Sett $f(x) = 0$ og løs likningen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-3-1-ex-10-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Praktiske lineære funksjoner',
        subTasks: [
          { label: 'a', task: 'En vannbeholder inneholder 200 liter. Det tappes 5 liter per minutt. Skriv en funksjon $V(t)$ for vannmengden etter $t$ minutter.', solution: '$V(t) = 200 - 5t$' },
          { label: 'b', task: 'Hvor mye vann er igjen etter 20 minutter?', solution: '$V(20) = 200 - 5 \\cdot 20 = 100$ liter' },
          { label: 'c', task: 'Når er beholderen tom?', solution: '$200 - 5t = 0 \\Rightarrow t = 40$ minutter' },
        ],
        solution: 'a) $V(t) = 200 - 5t$, b) 100 L, c) 40 min',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-3-1-ex-11-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn skjæringspunktet mellom to linjer',
        subTasks: [
          { label: 'a', task: '$f(x) = 2x + 1$ og $g(x) = x + 4$', solution: '$2x + 1 = x + 4 \\Rightarrow x = 3$, $y = 7$. Punkt: $(3, 7)$' },
          { label: 'b', task: '$f(x) = 3x - 2$ og $g(x) = -x + 6$', solution: '$3x - 2 = -x + 6 \\Rightarrow 4x = 8 \\Rightarrow x = 2$, $y = 4$. Punkt: $(2, 4)$' },
          { label: 'c', task: '$f(x) = -2x + 5$ og $g(x) = x - 4$', solution: '$-2x + 5 = x - 4 \\Rightarrow 9 = 3x \\Rightarrow x = 3$, $y = -1$. Punkt: $(3, -1)$' },
        ],
        solution: 'a) $(3, 7)$, b) $(2, 4)$, c) $(3, -1)$',
        hints: ['Sett funksjonene lik hverandre og løs for $x$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-3-1-ex-12-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-1-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordringsoppgaver med lineære funksjoner',
        subTasks: [
          { label: 'a', task: 'To mobilabonnementer: A koster 99 kr + 0,50 kr/min, B koster 199 kr med fri ringing. Ved hvor mange minutter er de like dyre?', solution: '$99 + 0{,}5t = 199 \\Rightarrow t = 200$ minutter' },
          { label: 'b', task: 'Finn en lineær funksjon som går gjennom $(-2, 8)$ og $(4, -4)$', solution: 'Stigning: $\\frac{-4-8}{4-(-2)} = \\frac{-12}{6} = -2$. Med $(-2, 8)$: $8 = -2 \\cdot (-2) + b \\Rightarrow b = 4$. $f(x) = -2x + 4$' },
          { label: 'c', task: 'For hvilke verdier av $x$ er $f(x) = 3x - 2$ større enn $g(x) = x + 4$?', solution: '$3x - 2 > x + 4 \\Rightarrow 2x > 6 \\Rightarrow x > 3$' },
        ],
        solution: 'a) 200 min, b) $f(x) = -2x + 4$, c) $x > 3$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-3-1-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '9-3-1-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-3-1-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Beregn funksjonsverdier for lineære funksjoner.',
            subTasks: [
              { label: 'a', task: 'Gitt $f(x) = 2x + 3$. Finn $f(0)$, $f(1)$ og $f(5)$.', solution: '$f(0) = 3$, $f(1) = 5$, $f(5) = 13$' },
              { label: 'b', task: 'Gitt $g(x) = -3x + 12$. Finn $g(0)$, $g(2)$ og $g(4)$.', solution: '$g(0) = 12$, $g(2) = 6$, $g(4) = 0$' },
              { label: 'c', task: 'Gitt $h(x) = \\frac{1}{2}x - 1$. Finn $h(0)$, $h(4)$ og $h(-2)$.', solution: '$h(0) = -1$, $h(4) = 1$, $h(-2) = -2$' },
              { label: 'd', task: 'For hvilken verdi av $x$ er $f(x) = 2x + 3$ lik $11$?', solution: '$2x + 3 = 11 \\Rightarrow 2x = 8 \\Rightarrow x = 4$' },
              { label: 'e', task: 'For hvilken verdi av $x$ er $g(x) = -3x + 12$ lik $0$?', solution: '$-3x + 12 = 0 \\Rightarrow x = 4$' },
              { label: 'f', task: 'Finn $x$ slik at $h(x) = \\frac{1}{2}x - 1 = 3$.', solution: '$\\frac{1}{2}x - 1 = 3 \\Rightarrow \\frac{1}{2}x = 4 \\Rightarrow x = 8$' },
            ],
            solution: 'a) 3, 5, 13, b) 12, 6, 0, c) $-1$, 1, $-2$, d) $x=4$, e) $x=4$, f) $x=8$',
            hideInlineSolution: true,
            hints: ['Sett inn verdien av $x$ i funksjonsuttrykket og regn ut'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-3-1-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-3-1-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Identifiser stigningstall og konstantledd og beskriv grafen.',
            subTasks: [
              { label: 'a', task: 'Oppgi stigningstall og konstantledd for $f(x) = 4x - 2$.', solution: 'Stigningstall $a = 4$, konstantledd $b = -2$' },
              { label: 'b', task: 'Oppgi stigningstall og konstantledd for $g(x) = -x + 6$.', solution: 'Stigningstall $a = -1$, konstantledd $b = 6$' },
              { label: 'c', task: 'Hva forteller stigningstallet om grafens retning?', solution: 'Positivt stigningstall: grafen stiger. Negativt stigningstall: grafen synker.' },
              { label: 'd', task: 'Hva forteller konstantleddet om grafens plassering?', solution: 'Konstantleddet er $y$-verdien der grafen skjærer $y$-aksen (når $x = 0$).' },
              { label: 'e', task: 'Skriv funksjonsuttrykket for en linje med stigningstall $3$ som skjærer $y$-aksen i $y = -5$.', solution: '$f(x) = 3x - 5$' },
              { label: 'f', task: 'Skisser grafene til $f(x) = x + 1$ og $g(x) = x + 4$. Hva er forskjellen?', solution: 'Begge stiger like bratt ($a = 1$), men $g$ ligger 3 enheter høyere. De er parallelle.' },
            ],
            solution: 'a) $a=4, b=-2$, b) $a=-1, b=6$, c) Positiv: stiger, negativ: synker, d) $y$-skjæring, e) $f(x)=3x-5$, f) Parallelle, $g$ er 3 over $f$',
            hideInlineSolution: true,
            hints: ['I $f(x) = ax + b$ er $a$ stigningstallet og $b$ konstantleddet'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-3-1-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-3-1-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Lag verditabeller og finn nullpunkt.',
            subTasks: [
              { label: 'a', task: 'Lag en verditabell for $f(x) = 2x - 4$ med $x = 0, 1, 2, 3, 4$.', solution: '$f(0)=-4$, $f(1)=-2$, $f(2)=0$, $f(3)=2$, $f(4)=4$' },
              { label: 'b', task: 'Hva er nullpunktet til $f(x) = 2x - 4$?', solution: '$2x - 4 = 0 \\Rightarrow x = 2$. Nullpunkt: $(2, 0)$' },
              { label: 'c', task: 'Finn nullpunktet til $g(x) = -5x + 15$.', solution: '$-5x + 15 = 0 \\Rightarrow x = 3$. Nullpunkt: $(3, 0)$' },
              { label: 'd', task: 'Finn nullpunktet til $h(x) = \\frac{3}{4}x - 6$.', solution: '$\\frac{3}{4}x = 6 \\Rightarrow x = 8$. Nullpunkt: $(8, 0)$' },
              { label: 'e', task: 'Hvor skjærer $f(x) = 3x + 9$ $y$-aksen og $x$-aksen?', solution: '$y$-aksen: $(0, 9)$. $x$-aksen: $3x + 9 = 0 \\Rightarrow x = -3$, altså $(-3, 0)$' },
              { label: 'f', task: 'En funksjon har nullpunkt i $x = 5$ og skjærer $y$-aksen i $y = 10$. Finn uttrykket.', solution: '$f(0) = 10 \\Rightarrow b = 10$. $f(5) = 0 \\Rightarrow 5a + 10 = 0 \\Rightarrow a = -2$. $f(x) = -2x + 10$' },
            ],
            solution: 'a) Se tabell, b) $(2,0)$, c) $(3,0)$, d) $(8,0)$, e) $(0,9)$ og $(-3,0)$, f) $f(x)=-2x+10$',
            hideInlineSolution: true,
            hints: ['Nullpunktet er der $f(x) = 0$, altså der grafen krysser $x$-aksen'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-3-1-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-3-1-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Finn funksjonsuttrykk fra graf eller punkter.',
            subTasks: [
              { label: 'a', task: 'En rett linje går gjennom $(0, 3)$ og $(2, 7)$. Finn funksjonsuttrykket.', solution: '$a = \\frac{7-3}{2-0} = 2$, $b = 3$. $f(x) = 2x + 3$' },
              { label: 'b', task: 'En rett linje går gjennom $(1, 5)$ og $(4, 14)$. Finn funksjonsuttrykket.', solution: '$a = \\frac{14-5}{4-1} = 3$. $5 = 3 \\cdot 1 + b \\Rightarrow b = 2$. $f(x) = 3x + 2$' },
              { label: 'c', task: 'En rett linje går gjennom $(-1, 7)$ og $(3, -1)$. Finn funksjonsuttrykket.', solution: '$a = \\frac{-1-7}{3-(-1)} = \\frac{-8}{4} = -2$. $7 = -2 \\cdot (-1) + b \\Rightarrow b = 5$. $f(x) = -2x + 5$' },
              { label: 'd', task: 'En linje har stigningstall $\\frac{2}{3}$ og går gjennom $(6, 8)$. Finn konstantleddet.', solution: '$8 = \\frac{2}{3} \\cdot 6 + b \\Rightarrow 8 = 4 + b \\Rightarrow b = 4$' },
              { label: 'e', task: 'Finn skjæringspunktet mellom $f(x) = x + 2$ og $g(x) = -2x + 8$.', solution: '$x + 2 = -2x + 8 \\Rightarrow 3x = 6 \\Rightarrow x = 2$, $y = 4$. Skjæringspunkt $(2, 4)$' },
            ],
            solution: 'a) $f(x)=2x+3$, b) $f(x)=3x+2$, c) $f(x)=-2x+5$, d) $b=4$, e) $(2,4)$',
            hideInlineSolution: true,
            hints: ['Regn ut stigningstallet med $a = \\frac{y_2-y_1}{x_2-x_1}$ og sett inn i $y = ax + b$'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-3-1-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-3-1-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Sett opp lineære funksjoner fra praktiske situasjoner.',
            subTasks: [
              { label: 'a', task: 'En svømmer svømmer med 1,5 m/s. Skriv en funksjon $d(t)$ for distansen i meter etter $t$ sekunder.', solution: '$d(t) = 1{,}5t$' },
              { label: 'b', task: 'Et stearinlys er 25 cm og brenner ned 2 cm per time. Skriv en funksjon $h(t)$ for høyden etter $t$ timer.', solution: '$h(t) = -2t + 25$' },
              { label: 'c', task: 'Etter hvor mange timer er stearinlyset i oppgave b) helt nedbrent?', solution: '$-2t + 25 = 0 \\Rightarrow t = 12{,}5$ timer' },
              { label: 'd', task: 'Et leiebilselskap tar 500 kr + 4 kr/km. Skriv funksjonsuttrykk og finn prisen for 200 km.', solution: '$f(x) = 4x + 500$. $f(200) = 800 + 500 = 1300$ kr' },
              { label: 'e', task: 'To taxiselskaper: A: 60 kr + 12 kr/km, B: 100 kr + 8 kr/km. Finn antall km der prisen er lik.', solution: '$60 + 12x = 100 + 8x \\Rightarrow 4x = 40 \\Rightarrow x = 10$ km' },
              { label: 'f', task: 'Hvilket taxiselskap i oppgave e) er billigst for en tur på 15 km?', solution: 'A: $60 + 12 \\cdot 15 = 240$ kr. B: $100 + 8 \\cdot 15 = 220$ kr. B er billigst.' },
            ],
            solution: 'a) $d(t)=1{,}5t$, b) $h(t)=-2t+25$, c) $12{,}5$ t, d) 1300 kr, e) 10 km, f) B er billigst (220 kr)',
            hideInlineSolution: true,
            hints: ['Identifiser startverdi (konstantledd) og endring per enhet (stigningstall)'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-3-1-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-3-1-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Krevende oppgaver med lineære funksjoner.',
            subTasks: [
              { label: 'a', task: 'Vis at punktene $(1, 4)$, $(3, 10)$ og $(5, 16)$ ligger på en rett linje. Finn funksjonsuttrykket.', solution: 'Stigning $(1,4)$ til $(3,10)$: $\\frac{10-4}{3-1} = 3$. Stigning $(3,10)$ til $(5,16)$: $\\frac{16-10}{5-3} = 3$. Lik stigning, altså rett linje. $f(x) = 3x + 1$' },
              { label: 'b', task: 'To linjer: $f(x) = ax + 2$ og $g(x) = 3x + b$ skjærer hverandre i $(1, 5)$. Finn $a$ og $b$.', solution: '$f(1) = a + 2 = 5 \\Rightarrow a = 3$. $g(1) = 3 + b = 5 \\Rightarrow b = 2$. Linjene er identiske: $f = g = 3x + 2$.' },
              { label: 'c', task: 'En rektangulær hage har omkrets 40 m. Bredden er $x$ m. Skriv lengden $l$ som funksjon av $x$, og finn arealet $A(x)$.', solution: '$2x + 2l = 40 \\Rightarrow l = 20 - x$. $A(x) = x(20-x) = 20x - x^2$. (Merk: arealet er ikke lineært.)' },
              { label: 'd', task: 'Tre venner samler penger. Etter $t$ uker har de: Anna: $f(t) = 50t + 200$, Bo: $g(t) = 75t + 100$, Cleo: $h(t) = 100t$. Hvem har mest etter 5 uker? Når har Bo og Cleo like mye?', solution: '$f(5) = 450$, $g(5) = 475$, $h(5) = 500$. Cleo har mest. $75t + 100 = 100t \\Rightarrow t = 4$ uker.' },
            ],
            solution: 'a) $f(x)=3x+1$, b) $a=3, b=2$, c) $A(x)=20x-x^2$ (ikke lineær), d) Cleo, $t=4$',
            hideInlineSolution: true,
            hints: ['Bruk egenskapen at stigningstallet er konstant for alle punktpar på en rett linje'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_9_3_2: TextbookChapter = {
  id: '9-3-2',
  courseId: '9',
  chapterNumber: '3.2',
  title: 'Stigningstall og konstantledd',
  description: 'Tolke og finne stigningstall og konstantledd fra grafer og funksjonsuttrykk.',
  estimatedMinutes: 50,
  competenceGoals: ['utforske og beskrive funksjonar knytte til praktiske situasjonar'],
  content: [
    {
      id: '9-3-2-intro',
      type: 'text',
      content: `**Stigningstallet** $a$ forteller hvor bratt en linje er og om den stiger eller synker. **Konstantleddet** $b$ er det punktet der linjen krysser $y$-aksen.`,
    },
    {
      id: '9-3-2-def-1',
      type: 'definition',
      title: 'Stigningstall',
      content: `**Stigningstallet** $a$ i en lineær funksjon $f(x) = ax + b$ forteller:

- Hvor mye $y$ endrer seg når $x$ øker med 1
- Positiv $a$: linjen stiger mot høyre
- Negativ $a$: linjen synker mot høyre
- $a = 0$: horisontal linje

$$a = \\frac{\\text{endring i } y}{\\text{endring i } x} = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}$$`,
    },
    {
      id: '9-3-2-ex-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'Finn stigningstallet til linjen som går gjennom punktene $(1, 3)$ og $(4, 9)$',
      solution: `$$a = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{9 - 3}{4 - 1} = \\frac{6}{3} = 2$$

Stigningstallet er 2, som betyr at $y$ øker med 2 når $x$ øker med 1.`,
    },
    {
      id: '9-3-2-ex-1-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn stigningstallet til linjen gjennom punktene',
        subTasks: [
          { label: 'a', task: '$(0, 2)$ og $(3, 8)$', solution: '$a = \\frac{8-2}{3-0} = 2$' },
          { label: 'b', task: '$(1, 5)$ og $(4, 2)$', solution: '$a = \\frac{2-5}{4-1} = -1$' },
          { label: 'c', task: '$(-2, 1)$ og $(2, 9)$', solution: '$a = \\frac{9-1}{2-(-2)} = 2$' },
        ],
        solution: 'a) $a = 2$, b) $a = -1$, c) $a = 2$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-3-2-def-2',
      type: 'definition',
      title: 'Konstantledd',
      content: `**Konstantleddet** $b$ i en lineær funksjon $f(x) = ax + b$ er:

- $y$-verdien når $x = 0$
- Punktet der grafen krysser $y$-aksen
- Også kalt skjæringspunktet med $y$-aksen`,
    },
    {
      id: '9-3-2-ex-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'Finn stigningstall og konstantledd fra funksjonsuttrykket $f(x) = -3x + 7$',
      solution: `Vi sammenligner med $f(x) = ax + b$:

$f(x) = -3x + 7$

- Stigningstall: $a = -3$
- Konstantledd: $b = 7$

Linjen synker (negativ $a$) og krysser $y$-aksen i $(0, 7)$.`,
    },
    {
      id: '9-3-2-ex-2-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn stigningstall og konstantledd',
        subTasks: [
          { label: 'a', task: '$f(x) = 4x - 2$', solution: '$a = 4$, $b = -2$' },
          { label: 'b', task: '$g(x) = -x + 6$', solution: '$a = -1$, $b = 6$' },
          { label: 'c', task: '$h(x) = \\frac{1}{2}x + 3$', solution: '$a = \\frac{1}{2}$, $b = 3$' },
        ],
        solution: 'a) $a=4, b=-2$, b) $a=-1, b=6$, c) $a=\\frac{1}{2}, b=3$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-3-2-text-2',
      type: 'text',
      content: `### Finne funksjonsuttrykk fra graf

For å finne funksjonsuttrykket fra en graf, må vi bestemme både $a$ og $b$.`,
    },
    {
      id: '9-3-2-ex-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'En graf går gjennom $(2, 5)$ og $(4, 11)$. Finn funksjonsuttrykket.',
      solution: `**Steg 1**: Finn stigningstallet
$$a = \\frac{11 - 5}{4 - 2} = \\frac{6}{2} = 3$$

**Steg 2**: Finn konstantleddet ved å bruke et punkt
$y = ax + b$
$5 = 3 \\cdot 2 + b$
$5 = 6 + b$
$b = -1$

**Svar**: $f(x) = 3x - 1$`,
    },
    {
      id: '9-3-2-ex-3-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn funksjonsuttrykket til linjen gjennom punktene',
        subTasks: [
          { label: 'a', task: '$(1, 4)$ og $(3, 10)$', solution: '$f(x) = 3x + 1$' },
          { label: 'b', task: '$(2, 6)$ og $(5, 0)$', solution: '$f(x) = -2x + 10$' },
        ],
        solution: 'a) $f(x) = 3x + 1$, b) $f(x) = -2x + 10$',
        hints: ['Finn $a$ først, så $b$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-3-2-ex-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'Avgjør om linjene $f(x) = 2x + 3$ og $g(x) = 2x - 1$ er parallelle.',
      solution: `To linjer er **parallelle** hvis de har samme stigningstall.

$f(x) = 2x + 3$ har $a = 2$
$g(x) = 2x - 1$ har $a = 2$

Siden begge har $a = 2$, er linjene parallelle.

De har forskjellige konstantledd ($b = 3$ og $b = -1$), så de krysser ikke hverandre.`,
    },
    {
      id: '9-3-2-ex-4-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Avgjør om linjene er parallelle',
        subTasks: [
          { label: 'a', task: '$f(x) = 3x + 2$ og $g(x) = 3x - 5$', solution: 'Ja, parallelle ($a = 3$ for begge)' },
          { label: 'b', task: '$f(x) = -2x + 1$ og $g(x) = 2x + 1$', solution: 'Nei, ikke parallelle ($a = -2$ og $a = 2$)' },
          { label: 'c', task: 'Finn $k$ slik at $f(x) = 4x + 1$ og $g(x) = kx - 3$ er parallelle', solution: '$k = 4$' },
        ],
        solution: 'a) Ja, b) Nei, c) $k = 4$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-3-2-ex-5-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn stigningstallet til linjen gjennom punktene',
        subTasks: [
          { label: 'a', task: '$(0, 3)$ og $(2, 9)$', solution: '$a = \\frac{9-3}{2-0} = 3$' },
          { label: 'b', task: '$(1, 7)$ og $(5, 3)$', solution: '$a = \\frac{3-7}{5-1} = -1$' },
          { label: 'c', task: '$(-1, 4)$ og $(3, 4)$', solution: '$a = \\frac{4-4}{3-(-1)} = 0$ (horisontal linje)' },
          { label: 'd', task: '$(2, -1)$ og $(6, 11)$', solution: '$a = \\frac{11-(-1)}{6-2} = 3$' },
        ],
        solution: 'a) 3, b) -1, c) 0, d) 3',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-3-2-ex-6-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn stigningstall og konstantledd',
        subTasks: [
          { label: 'a', task: '$f(x) = 5x + 3$', solution: '$a = 5$, $b = 3$' },
          { label: 'b', task: '$g(x) = -4x - 1$', solution: '$a = -4$, $b = -1$' },
          { label: 'c', task: '$h(x) = \\frac{2}{3}x - 5$', solution: '$a = \\frac{2}{3}$, $b = -5$' },
          { label: 'd', task: '$k(x) = 7 - 2x$', solution: '$a = -2$, $b = 7$ (skriv om: $-2x + 7$)' },
        ],
        solution: 'a) a=5, b=3, b) a=-4, b=-1, c) a=2/3, b=-5, d) a=-2, b=7',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-3-2-ex-7-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn funksjonsuttrykket når du kjenner stigningstallet og ett punkt',
        subTasks: [
          { label: 'a', task: '$a = 2$ og går gjennom $(3, 8)$', solution: '$8 = 2 \\cdot 3 + b \\Rightarrow b = 2$. $f(x) = 2x + 2$' },
          { label: 'b', task: '$a = -1$ og går gjennom $(4, 1)$', solution: '$1 = -1 \\cdot 4 + b \\Rightarrow b = 5$. $f(x) = -x + 5$' },
          { label: 'c', task: '$a = 3$ og går gjennom $(-2, -4)$', solution: '$-4 = 3 \\cdot (-2) + b \\Rightarrow b = 2$. $f(x) = 3x + 2$' },
        ],
        solution: 'a) $f(x) = 2x + 2$, b) $f(x) = -x + 5$, c) $f(x) = 3x + 2$',
        hints: ['Bruk $y = ax + b$ og sett inn for å finne $b$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-3-2-ex-8-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn funksjonsuttrykket til linjen gjennom punktene',
        subTasks: [
          { label: 'a', task: '$(0, 5)$ og $(4, 13)$', solution: '$a = 2$, $b = 5$. $f(x) = 2x + 5$' },
          { label: 'b', task: '$(2, 7)$ og $(6, 3)$', solution: '$a = -1$, $b = 9$. $f(x) = -x + 9$' },
          { label: 'c', task: '$(-3, -5)$ og $(1, 7)$', solution: '$a = 3$, $b = 4$. $f(x) = 3x + 4$' },
        ],
        solution: 'a) $f(x) = 2x + 5$, b) $f(x) = -x + 9$, c) $f(x) = 3x + 4$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-3-2-ex-9-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tolk stigningstallet i praktiske situasjoner',
        subTasks: [
          { label: 'a', task: 'Taxipris: $P(x) = 15x + 50$. Hva betyr tallet 15?', solution: 'Prisen øker med 15 kr per kilometer' },
          { label: 'b', task: 'Vannstand: $V(t) = -3t + 100$. Hva betyr tallet $-3$?', solution: 'Vannstanden synker med 3 liter per minutt' },
          { label: 'c', task: 'Sparing: $S(m) = 500m + 1000$. Hva betyr tallene 500 og 1000?', solution: '500 kr spares per måned, 1000 kr var startbeløpet' },
        ],
        solution: 'a) 15 kr/km, b) -3 L/min, c) 500 kr/mnd, startbeløp 1000 kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-3-2-ex-10-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Avgjør om linjene er parallelle, og begrunn',
        subTasks: [
          { label: 'a', task: '$f(x) = 5x - 2$ og $g(x) = 5x + 8$', solution: 'Parallelle, samme $a = 5$' },
          { label: 'b', task: '$f(x) = 2x + 3$ og $g(x) = 4 + 2x$', solution: 'Parallelle, begge har $a = 2$' },
          { label: 'c', task: '$f(x) = -3x + 1$ og $g(x) = 3x - 1$', solution: 'Ikke parallelle, $a = -3$ vs $a = 3$' },
        ],
        solution: 'a) Parallelle, b) Parallelle, c) Ikke parallelle',
        hints: ['Parallelle linjer har samme stigningstall'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-3-2-ex-11-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les av stigningstall og konstantledd fra graf (beskriv linjen)',
        subTasks: [
          { label: 'a', task: 'Linje gjennom $(0, 2)$ med stigning 3 per enhet i $x$', solution: '$f(x) = 3x + 2$' },
          { label: 'b', task: 'Linje gjennom $(0, -1)$ som synker 2 per enhet i $x$', solution: '$f(x) = -2x - 1$' },
          { label: 'c', task: 'Horisontal linje gjennom $y = 4$', solution: '$f(x) = 4$ (stigningstall 0)' },
        ],
        solution: 'a) $f(x) = 3x + 2$, b) $f(x) = -2x - 1$, c) $f(x) = 4$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-3-2-ex-12-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-2-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordringsoppgaver',
        subTasks: [
          { label: 'a', task: 'Finn $k$ slik at linjen $f(x) = kx + 5$ går gjennom punktet $(2, 11)$', solution: '$11 = 2k + 5 \\Rightarrow k = 3$' },
          { label: 'b', task: 'Finn likningen til linjen som er parallell med $f(x) = 4x - 1$ og går gjennom $(1, 3)$', solution: 'Parallell: $a = 4$. $3 = 4 \\cdot 1 + b \\Rightarrow b = -1$. $g(x) = 4x - 1$... men dette er samme linje! Rett: $(1,3)$ gir $g(x) = 4x - 1$ bare hvis punktet ligger på $f$. Sjekk: $f(1) = 3$ ✓' },
          { label: 'c', task: 'To linjer har stigningstall 2 og $-\\frac{1}{2}$. Er de vinkelrette?', solution: 'Ja! Produktet av stigningstallene er $2 \\cdot (-\\frac{1}{2}) = -1$, som betyr vinkelrette linjer.' },
        ],
        solution: 'a) $k = 3$, b) $g(x) = 4x - 1$, c) Ja, vinkelrette',
        hints: ['c) Vinkelrette linjer har $a_1 \\cdot a_2 = -1$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-3-2-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '9-3-2-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-3-2-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Finn stigningstall og konstantledd.',
            subTasks: [
              { label: 'a', task: 'Hva er stigningstallet og konstantleddet i $f(x) = 3x + 7$?', solution: 'Stigningstall $a = 3$, konstantledd $b = 7$' },
              { label: 'b', task: 'Hva er stigningstallet og konstantleddet i $g(x) = -2x + 5$?', solution: 'Stigningstall $a = -2$, konstantledd $b = 5$' },
              { label: 'c', task: 'Hva er stigningstallet og konstantleddet i $h(x) = \\frac{1}{2}x - 4$?', solution: 'Stigningstall $a = \\frac{1}{2}$, konstantledd $b = -4$' },
              { label: 'd', task: 'Hva er stigningstallet og konstantleddet i $p(x) = -x$?', solution: 'Stigningstall $a = -1$, konstantledd $b = 0$' },
              { label: 'e', task: 'Hva er stigningstallet og konstantleddet i $q(x) = 8$?', solution: 'Stigningstall $a = 0$, konstantledd $b = 8$ (horisontal linje)' },
              { label: 'f', task: 'Skriv om $2y = 6x - 10$ på formen $y = ax + b$ og oppgi $a$ og $b$.', solution: '$y = 3x - 5$. Stigningstall $a = 3$, konstantledd $b = -5$' },
            ],
            solution: 'a) $a=3, b=7$, b) $a=-2, b=5$, c) $a=\\frac{1}{2}, b=-4$, d) $a=-1, b=0$, e) $a=0, b=8$, f) $a=3, b=-5$',
            hideInlineSolution: true,
            hints: ['I $f(x) = ax + b$ er $a$ stigningstallet og $b$ konstantleddet'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-3-2-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-3-2-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Beregn stigningstall fra to punkter.',
            subTasks: [
              { label: 'a', task: 'Finn stigningstallet til linjen gjennom $(1, 3)$ og $(4, 12)$.', solution: '$a = \\frac{12 - 3}{4 - 1} = \\frac{9}{3} = 3$' },
              { label: 'b', task: 'Finn stigningstallet til linjen gjennom $(0, 5)$ og $(10, 0)$.', solution: '$a = \\frac{0 - 5}{10 - 0} = \\frac{-5}{10} = -\\frac{1}{2}$' },
              { label: 'c', task: 'Finn stigningstallet til linjen gjennom $(-2, 4)$ og $(2, 4)$.', solution: '$a = \\frac{4 - 4}{2 - (-2)} = \\frac{0}{4} = 0$ (horisontal linje)' },
              { label: 'd', task: 'Finn stigningstallet til linjen gjennom $(3, -1)$ og $(5, 7)$.', solution: '$a = \\frac{7 - (-1)}{5 - 3} = \\frac{8}{2} = 4$' },
              { label: 'e', task: 'Finn stigningstallet til linjen gjennom $(-3, 6)$ og $(1, -2)$.', solution: '$a = \\frac{-2 - 6}{1 - (-3)} = \\frac{-8}{4} = -2$' },
              { label: 'f', task: 'En linje har stigningstall $\\frac{3}{4}$. Hvis den går gjennom $(0, 2)$, hva er $y$ når $x = 8$?', solution: '$y = \\frac{3}{4} \\cdot 8 + 2 = 6 + 2 = 8$' },
            ],
            solution: 'a) 3, b) $-\\frac{1}{2}$, c) 0, d) 4, e) $-2$, f) 8',
            hideInlineSolution: true,
            hints: ['Bruk formelen $a = \\frac{y_2 - y_1}{x_2 - x_1}$'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-3-2-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-3-2-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Avgjør om linjer er parallelle.',
            subTasks: [
              { label: 'a', task: 'Er $f(x) = 2x + 3$ og $g(x) = 2x - 1$ parallelle? Begrunn.', solution: 'Ja, begge har stigningstall $a = 2$, altså er de parallelle.' },
              { label: 'b', task: 'Er $f(x) = 3x + 1$ og $g(x) = -3x + 1$ parallelle?', solution: 'Nei, stigningstallene er ulike ($3 \\neq -3$).' },
              { label: 'c', task: 'Finn $k$ slik at $f(x) = kx + 4$ er parallell med $g(x) = 5x - 2$.', solution: '$k = 5$ (parallelle linjer har likt stigningstall)' },
              { label: 'd', task: 'Er $f(x) = \\frac{1}{3}x + 2$ og $g(x) = \\frac{2}{6}x - 7$ parallelle?', solution: 'Ja, $\\frac{2}{6} = \\frac{1}{3}$, begge har stigningstall $\\frac{1}{3}$.' },
              { label: 'e', task: 'To parallelle linjer har stigningstall $-4$. En av dem passerer gjennom $(0, 3)$. Skriv funksjonsuttrykket.', solution: '$f(x) = -4x + 3$' },
              { label: 'f', task: 'Linjen $f(x) = 2x + 5$ og en parallell linje som går gjennom $(3, 1)$. Finn den parallelle linjens uttrykk.', solution: '$a = 2$ (parallell). $1 = 2 \\cdot 3 + b \\Rightarrow b = -5$. $g(x) = 2x - 5$' },
            ],
            solution: 'a) Ja, b) Nei, c) $k=5$, d) Ja, e) $f(x)=-4x+3$, f) $g(x)=2x-5$',
            hideInlineSolution: true,
            hints: ['Parallelle linjer har samme stigningstall'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-3-2-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-3-2-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Finn funksjonsuttrykk fra opplysninger om linjen.',
            subTasks: [
              { label: 'a', task: 'Finn funksjonsuttrykket til linjen gjennom $(1, 4)$ og $(3, 10)$.', solution: '$a = \\frac{10-4}{3-1} = 3$. $4 = 3 \\cdot 1 + b \\Rightarrow b = 1$. $f(x) = 3x + 1$' },
              { label: 'b', task: 'Finn funksjonsuttrykket til linjen med stigningstall $-2$ som går gjennom $(5, 1)$.', solution: '$1 = -2 \\cdot 5 + b \\Rightarrow b = 11$. $f(x) = -2x + 11$' },
              { label: 'c', task: 'En linje skjærer $y$-aksen i $y = 6$ og $x$-aksen i $x = 3$. Finn uttrykket.', solution: 'Punkter: $(0, 6)$ og $(3, 0)$. $a = \\frac{0-6}{3-0} = -2$. $f(x) = -2x + 6$' },
              { label: 'd', task: 'Linjen gjennom $(-2, -3)$ og $(4, 9)$. Finn uttrykket og $y$-verdien når $x = 10$.', solution: '$a = \\frac{9-(-3)}{4-(-2)} = 2$. $-3 = 2 \\cdot (-2) + b \\Rightarrow b = 1$. $f(x) = 2x+1$. $f(10) = 21$' },
              { label: 'e', task: 'To linjer: $f(x) = x + 3$ og $g(x) = -x + 7$. Finn skjæringspunktet.', solution: '$x + 3 = -x + 7 \\Rightarrow 2x = 4 \\Rightarrow x = 2$, $y = 5$. Skjæringspunkt $(2, 5)$' },
              { label: 'f', task: 'Finn skjæringspunktet mellom $f(x) = 3x - 4$ og $g(x) = x + 2$.', solution: '$3x - 4 = x + 2 \\Rightarrow 2x = 6 \\Rightarrow x = 3$, $y = 5$. Skjæringspunkt $(3, 5)$' },
            ],
            solution: 'a) $f(x)=3x+1$, b) $f(x)=-2x+11$, c) $f(x)=-2x+6$, d) $f(x)=2x+1$, $f(10)=21$, e) $(2,5)$, f) $(3,5)$',
            hideInlineSolution: true,
            hints: ['Bruk $a = \\frac{y_2 - y_1}{x_2 - x_1}$ og sett inn ett punkt for å finne $b$'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-3-2-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-3-2-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Bestem stigningstall, konstantledd og skjæringspunkter i praktiske situasjoner.',
            subTasks: [
              { label: 'a', task: 'En mobilplan koster 99 kr/mnd + 1,50 kr/min. Skriv opp funksjonsuttrykket. Hva er konstantleddet og stigningstallet?', solution: '$f(x) = 1{,}5x + 99$. Konstantledd: 99 (fastpris). Stigningstall: 1,50 (pris per minutt).' },
              { label: 'b', task: 'En annen mobilplan koster 249 kr/mnd med fri ringing. Ved hvor mange minutter er planene like dyre?', solution: '$1{,}5x + 99 = 249 \\Rightarrow 1{,}5x = 150 \\Rightarrow x = 100$ minutter' },
              { label: 'c', task: 'Linjen $f(x) = 4x - 8$ skjærer $x$-aksen i nullpunktet. Finn nullpunktet.', solution: '$4x - 8 = 0 \\Rightarrow x = 2$. Nullpunkt: $(2, 0)$' },
              { label: 'd', task: 'Linjen $g(x) = -\\frac{3}{2}x + 9$ skjærer $x$-aksen. Finn nullpunktet.', solution: '$-\\frac{3}{2}x + 9 = 0 \\Rightarrow x = 6$. Nullpunkt: $(6, 0)$' },
            ],
            solution: 'a) $f(x)=1{,}5x+99$, b) 100 min, c) $(2,0)$, d) $(6,0)$',
            hideInlineSolution: true,
            hints: ['Nullpunktet finner du ved å sette $f(x) = 0$ og løse for $x$'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-3-2-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-3-2-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Sammensatte oppgaver med stigningstall, parallelle linjer og skjæringspunkter.',
            subTasks: [
              { label: 'a', task: 'Finn likningen til linjen som er parallell med $f(x) = -3x + 2$ og går gjennom skjæringspunktet mellom $g(x) = x + 4$ og $h(x) = 2x + 1$.', solution: 'Skjæring $g$ og $h$: $x + 4 = 2x + 1 \\Rightarrow x = 3$, $y = 7$. Parallell med $f$: $a = -3$. $7 = -3 \\cdot 3 + b \\Rightarrow b = 16$. Linjen er $y = -3x + 16$.' },
              { label: 'b', task: 'Trekanten dannet av $f(x) = 2x$, $g(x) = -x + 6$ og $x$-aksen. Finn hjørnene og arealet.', solution: 'Hjørner: $f \\cap g$: $2x = -x+6 \\Rightarrow x=2, y=4$, altså $(2,4)$. $f \\cap x$-akse: $(0,0)$. $g \\cap x$-akse: $(6,0)$. Grunnlinje $= 6$, høyde $= 4$. $A = \\frac{1}{2} \\cdot 6 \\cdot 4 = 12$' },
              { label: 'c', task: 'En linje går gjennom $(a, 2a+1)$ og $(a+2, 3a-1)$ med stigningstall 3. Finn $a$.', solution: '$\\frac{(3a-1)-(2a+1)}{(a+2)-a} = \\frac{a-2}{2} = 3 \\Rightarrow a - 2 = 6 \\Rightarrow a = 8$' },
              { label: 'd', task: 'Vis at de tre linjene $f(x) = 2x + 1$, $g(x) = -x + 7$ og $h(x) = \\frac{1}{2}x + 3$ møtes i samme punkt.', solution: '$f \\cap g$: $2x+1 = -x+7 \\Rightarrow 3x=6 \\Rightarrow x=2, y=5$. Sjekk $h$: $h(2) = 1+3 = 4 \\neq 5$. De møtes IKKE i samme punkt.' },
            ],
            solution: 'a) $y=-3x+16$, b) Areal $= 12$, c) $a = 8$, d) De møtes ikke i samme punkt',
            hideInlineSolution: true,
            hints: ['Finn skjæringspunktene først, og bruk dem til å bygge videre'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_9_3_3: TextbookChapter = {
  id: '9-3-3',
  courseId: '9',
  chapterNumber: '3.3',
  title: 'Grafer og tolkning',
  description: 'Tolke og lage grafer fra praktiske situasjoner.',
  estimatedMinutes: 45,
  competenceGoals: ['representere funksjonar på ulike måtar og veksle mellom representasjonane'],
  content: [
    {
      id: '9-3-3-intro',
      type: 'text',
      content: `Grafer kan fortelle oss mye om praktiske situasjoner. Ved å lese av grafer kan vi finne verdier, og ved å tolke formen på grafen kan vi forstå sammenhengen mellom størrelser.`,
    },
    {
      id: '9-3-3-def-1',
      type: 'definition',
      title: 'Tolke grafer',
      content: `Når vi tolker en graf, ser vi på:

- **Stigende del**: verdien øker
- **Synkende del**: verdien minker
- **Flat del**: verdien er konstant
- **Bratt del**: rask endring
- **Slak del**: langsom endring`,
    },
    {
      id: '9-3-3-ex-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'En graf viser temperaturen i en stekeovn. Den stiger raskt fra 20°C til 200°C de første 10 minuttene, holder seg på 200°C i 30 minutter, og synker deretter til 50°C på 20 minutter. Beskriv grafen.',
      solution: `Grafen har tre deler:

1. **0-10 min**: Bratt stigende linje fra (0, 20) til (10, 200)
2. **10-40 min**: Horisontal linje på 200°C
3. **40-60 min**: Synkende linje fra (40, 200) til (60, 50)

Formen viser at oppvarming er raskere enn avkjøling.`,
    },
    {
      id: '9-3-3-ex-1-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beskriv hva som skjer i situasjonen basert på grafen',
        subTasks: [
          { label: 'a', task: 'En graf viser høyden til en ball som kastes opp. Hva skjer når grafen er flat på toppen?', solution: 'Ballen stopper et øyeblikk i det høyeste punktet' },
          { label: 'b', task: 'En graf viser antall elever på en skole. Grafen er flat i helgene. Forklar hvorfor.', solution: 'Det er ingen elever på skolen i helgene - antallet er konstant (0)' },
        ],
        solution: 'a) Ballen stopper på toppen, b) Ingen elever i helgene',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-3-3-ex-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'Les av verdier fra en graf som viser sammenhengen mellom kjørelengde ($x$ km) og drivstofforbruk ($y$ liter). Grafen er en rett linje gjennom $(0, 0)$ og $(100, 8)$.',
      solution: `**a) Finn forbruket etter 50 km**
Siden linjen er lineær og går gjennom origo:
- Stigningstallet: $a = \\frac{8}{100} = 0{,}08$ liter/km
- Ved 50 km: $y = 0{,}08 \\cdot 50 = 4$ liter

**b) Hvor langt kan du kjøre på 12 liter?**
$12 = 0{,}08 \\cdot x$
$x = \\frac{12}{0{,}08} = 150$ km`,
    },
    {
      id: '9-3-3-ex-2-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'En graf viser sammenhengen mellom tid ($t$ timer) og avstand ($s$ km) for en bil. Linjen går gjennom $(0, 0)$ og $(2, 160)$.',
        subTasks: [
          { label: 'a', task: 'Finn farten til bilen', solution: '$v = \\frac{160}{2} = 80$ km/t' },
          { label: 'b', task: 'Hvor langt har bilen kjørt etter 3 timer?', solution: '$s = 80 \\cdot 3 = 240$ km' },
          { label: 'c', task: 'Hvor lang tid tar det å kjøre 400 km?', solution: '$t = \\frac{400}{80} = 5$ timer' },
        ],
        solution: 'a) 80 km/t, b) 240 km, c) 5 timer',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-3-3-ex-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'Lag en graf for følgende situasjon: En person går hjemmefra, stopper på butikken i 10 minutter, og går videre til parken.',
      solution: `La $x$-aksen vise tid og $y$-aksen vise avstand fra hjemmet.

Grafen:
1. **Stigende linje**: Person går fra hjem (0) mot butikken
2. **Horisontal linje** i 10 min: Person er på butikken (avstand konstant)
3. **Stigende linje**: Person går fra butikken til parken

Hvis personen gikk hjem igjen, ville linjen synke tilbake mot 0.`,
    },
    {
      id: '9-3-3-ex-3-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skisser en graf for situasjonen',
        subTasks: [
          { label: 'a', task: 'En sykkeltur: 20 min til toppen av en bakke, 5 min pause, 10 min ned igjen.', solution: 'Stigende linje (20 min), horisontal linje (5 min), synkende linje (10 min) - brattere ned' },
          { label: 'b', task: 'Vannstanden i et badekar: fyller opp (5 min), bader (15 min), tapper ut (3 min).', solution: 'Stigende linje, horisontal linje, synkende linje - raskest å tappe ut' },
        ],
        solution: 'a) Stig-flat-synk, b) Stig-flat-synk',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-3-3-ex-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'To linjer viser kostnadene for to strømleverandører. Leverandør A: $f(x) = 0{,}80x + 100$ (80 øre/kWh + 100 kr fast). Leverandør B: $g(x) = 1{,}00x + 50$ (1 kr/kWh + 50 kr fast). Når er A billigere?',
      solution: `Vi finner når kostnadene er like:
$0{,}80x + 100 = 1{,}00x + 50$
$100 - 50 = 1{,}00x - 0{,}80x$
$50 = 0{,}20x$
$x = 250$ kWh

**Tolkning**:
- Under 250 kWh: B er billigst (lavere fastpris)
- Over 250 kWh: A er billigst (lavere kWh-pris)
- Ved 250 kWh: samme pris (150 kr)`,
    },
    {
      id: '9-3-3-ex-4-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign de to tilbudene',
        subTasks: [
          { label: 'a', task: 'Mobilabonnement A: 200 kr/mnd + 0,50 kr/min. Abonnement B: 100 kr/mnd + 1,00 kr/min. Når lønner det seg med A?', solution: 'Ved $200 + 0{,}5x = 100 + 1x$, dvs. $x = 200$ min. A lønner seg ved mer enn 200 min/mnd' },
          { label: 'b', task: 'Hva koster A hvis du ringer 300 minutter?', solution: '$200 + 0{,}5 \\cdot 300 = 350$ kr' },
        ],
        solution: 'a) Over 200 minutter, b) 350 kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-3-3-ex-5-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Les av verdier fra grafen',
        subTasks: [
          { label: 'a', task: 'En graf viser temperatur som funksjon av tid. Ved tid 0 er temperaturen 10°C, ved tid 4 timer er den 18°C. Hva er stigningstallet?', solution: '$a = \\frac{18-10}{4-0} = 2$°C per time' },
          { label: 'b', task: 'Samme graf: Hva var temperaturen etter 2 timer?', solution: '$T(2) = 2 \\cdot 2 + 10 = 14$°C' },
          { label: 'c', task: 'Når nådde temperaturen 16°C?', solution: '$16 = 2t + 10 \\Rightarrow t = 3$ timer' },
        ],
        solution: 'a) 2°C/time, b) 14°C, c) 3 timer',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-3-3-ex-6-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Tolk grafen',
        subTasks: [
          { label: 'a', task: 'En vannbeholder tømmes. Grafen synker fra 50 L til 0 L på 10 minutter. Hva betyr stigningstallet?', solution: '$a = -5$ L/min betyr at 5 liter tappes per minutt' },
          { label: 'b', task: 'Når var det 20 liter igjen?', solution: '$20 = 50 - 5t \\Rightarrow t = 6$ minutter' },
          { label: 'c', task: 'Hva skjer når grafen treffer x-aksen?', solution: 'Beholderen er tom' },
        ],
        solution: 'a) -5 L/min, b) 6 min, c) Tom beholder',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-3-3-ex-7-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skisser graf for situasjonen og forklar',
        subTasks: [
          { label: 'a', task: 'Biltur: Kjører jevnt i 1 time, stopper i 30 min, kjører tilbake.', solution: 'Stigende linje, horisontal, synkende til start' },
          { label: 'b', task: 'Temperatur: Varm kaffe på 80°C avkjøles til romtemperatur (20°C).', solution: 'Raskt synkende først, så saktere - kurven flater ut mot 20°C' },
          { label: 'c', task: 'Sparekonto: Setter inn 1000 kr hver måned.', solution: 'Stigende rett linje med stigning 1000 kr/mnd' },
        ],
        solution: 'Se beskrivelsene over',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-3-3-ex-8-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'To personer går mot hverandre',
        subTasks: [
          { label: 'a', task: 'Person A starter ved posisjon 0 og går 5 km/t. Skriv funksjonen $f(t)$.', solution: '$f(t) = 5t$' },
          { label: 'b', task: 'Person B starter ved posisjon 20 km og går 4 km/t mot A. Skriv funksjonen $g(t)$.', solution: '$g(t) = 20 - 4t$' },
          { label: 'c', task: 'Når møtes de?', solution: '$5t = 20 - 4t \\Rightarrow 9t = 20 \\Rightarrow t = \\frac{20}{9} \\approx 2{,}2$ timer' },
        ],
        solution: 'a) $f(t) = 5t$, b) $g(t) = 20 - 4t$, c) Etter ca. 2,2 timer',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-3-3-ex-9-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign grafene og tolk',
        subTasks: [
          { label: 'a', task: 'To grafer viser prisen på pizza: $f(x) = 50x$ (lokal pizzeria) og $g(x) = 30x + 80$ (levering). Når lønner levering seg?', solution: '$50x > 30x + 80$ når $x > 4$. Ved 5+ pizza lønner levering seg.' },
          { label: 'b', task: 'Tegn begge grafene og merk skjæringspunktet.', solution: 'Skjæringspunkt ved $(4, 200)$' },
        ],
        solution: 'a) 5+ pizza, b) Skjæring i (4, 200)',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-3-3-ex-10-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Analyser vekst og sammenligning',
        subTasks: [
          { label: 'a', task: 'Firma A har 100 ansatte og ansetter 5 per år. Firma B har 50 ansatte og ansetter 10 per år. Når har de like mange?', solution: '$100 + 5t = 50 + 10t \\Rightarrow 50 = 5t \\Rightarrow t = 10$ år' },
          { label: 'b', task: 'Hvor mange ansatte har hvert firma da?', solution: '$100 + 5 \\cdot 10 = 150$ ansatte' },
          { label: 'c', task: 'Skisser begge grafene.', solution: 'To linjer som starter på forskjellige høyder og krysser ved t=10' },
        ],
        solution: 'a) 10 år, b) 150 ansatte, c) Kryssende linjer',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-3-3-ex-11-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bratt, flat eller synkende?',
        subTasks: [
          { label: 'a', task: 'Ranger grafene etter hvor bratt de stiger: $f(x) = 2x$, $g(x) = 5x$, $h(x) = x$', solution: '$g$ brattest ($a=5$), deretter $f$ ($a=2$), deretter $h$ ($a=1$)' },
          { label: 'b', task: 'Hvilke av disse grafene synker? $f(x) = 3x - 1$, $g(x) = -2x + 4$, $h(x) = 5 - x$', solution: '$g$ og $h$ synker (negative stigningstall: $-2$ og $-1$)' },
        ],
        solution: 'a) g > f > h, b) g og h synker',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-3-3-ex-12-exercise',
      type: 'exercise',
      exercise: {
        id: '9-3-3-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordringsoppgaver med grafer',
        subTasks: [
          { label: 'a', task: 'En bil kjører fra A til B (100 km) med 80 km/t, venter 30 min i B, og kjører tilbake med 100 km/t. Skisser graf for avstand fra A.', solution: 'Stigende linje (75 min), flat linje (30 min), synkende linje (60 min)' },
          { label: 'b', task: 'To lån: Lån A: 10000 kr med 500 kr/mnd nedbetaling. Lån B: 8000 kr med 400 kr/mnd. Hvilket betales først ned?', solution: 'A: $\\frac{10000}{500} = 20$ mnd. B: $\\frac{8000}{400} = 20$ mnd. Samme tid!' },
          { label: 'c', task: 'Lag en situasjon som passer til en graf som stiger, er flat, stiger mer bratt, så er flat igjen.', solution: 'Eks: Gåtur oppover bakke, pause, brattere parti, nytt utsiktspunkt' },
        ],
        solution: 'a) Se beskrivelse, b) Begge 20 mnd, c) Kreativ oppgave',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-3-3-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '9-3-3-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-3-3-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Les av grafene og svar på spørsmålene.',
            subTasks: [
              { label: 'a', task: 'En graf viser temperatur gjennom et døgn. Kl. 06 er det $5\\,°C$ og kl. 14 er det $17\\,°C$. Hva er temperaturøkningen?', solution: '$17 - 5 = 12\\,°C$' },
              { label: 'b', task: 'Grafen til $f(x) = 2x + 1$ passerer gjennom et punkt der $x = 3$. Hva er $y$-verdien?', solution: '$f(3) = 2 \\cdot 3 + 1 = 7$' },
              { label: 'c', task: 'En graf er flat (horisontal) i et intervall. Hva betyr det i praksis?', solution: 'Det betyr at verdien er konstant, det skjer ingen endring i det tidsrommet.' },
              { label: 'd', task: 'Grafen viser avstand fra hjemmet over tid. Etter 2 timer er avstanden 80 km. Hva er gjennomsnittsfarten?', solution: '$\\frac{80}{2} = 40$ km/t' },
              { label: 'e', task: 'En lineær graf skjærer $y$-aksen i $y = 3$ og $x$-aksen i $x = 6$. Hva er stigningstallet?', solution: '$a = \\frac{0 - 3}{6 - 0} = -\\frac{1}{2}$' },
              { label: 'f', task: 'En graf synker bratt og deretter svakt. Hva forteller det om endringen?', solution: 'Endringen er stor i starten (rask nedgang) og liten mot slutten (langsom nedgang).' },
            ],
            solution: 'a) 12°C, b) 7, c) Konstant verdi, d) 40 km/t, e) $-\\frac{1}{2}$, f) Rask så langsom nedgang',
            hideInlineSolution: true,
            hints: ['Les av verdier direkte fra grafen og bruk formelen stigning = $\\frac{\\Delta y}{\\Delta x}$'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-3-3-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-3-3-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Tolk grafene i praktiske situasjoner.',
            subTasks: [
              { label: 'a', task: 'En graf viser vannstanden i et badekar: den stiger jevnt, er flat en stund, og synker deretter. Hva skjer i de tre fasene?', solution: 'Fase 1: Vannet fylles. Fase 2: Man bader (konstant nivå). Fase 3: Vannet tappes ut.' },
              { label: 'b', task: 'En graf viser fart over tid: flat linje på 60 km/t i 30 min. Hvor langt kjører bilen?', solution: '$60 \\cdot \\frac{30}{60} = 30$ km' },
              { label: 'c', task: 'En graf stiger lineært fra $(0, 200)$ til $(10, 700)$. Hva er den konstante økningen per enhet?', solution: '$\\frac{700 - 200}{10 - 0} = \\frac{500}{10} = 50$ per enhet' },
              { label: 'd', task: 'En temperaturkurve viser $-5\\,°C$ kl. 06 og $10\\,°C$ kl. 12. Hva er gjennomsnittlig temperaturøkning per time?', solution: '$\\frac{10 - (-5)}{12 - 6} = \\frac{15}{6} = 2{,}5\\,°C$ per time' },
              { label: 'e', task: 'To grafer krysser hverandre i punktet $(4, 12)$. Hva betyr det?', solution: 'Ved $x = 4$ har begge funksjonene samme verdi, nemlig $12$.' },
              { label: 'f', task: 'En lineær graf med negativ stigning modellerer gjenværende bensin i en tank. Hva forteller stigningstallet?', solution: 'Stigningstallet forteller forbruket av bensin per tidsenhet (f.eks. liter per time).' },
            ],
            solution: 'a) Fyller, bader, tapper. b) 30 km, c) 50 per enhet, d) 2,5°C/t, e) Lik verdi ved $x=4$, f) Forbruk per tid',
            hideInlineSolution: true,
            hints: ['Tenk på hva $x$-aksen og $y$-aksen representerer i den gitte sammenhengen'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-3-3-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-3-3-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Sett opp funksjonsuttrykk fra praktiske beskrivelser.',
            subTasks: [
              { label: 'a', task: 'En taxi tar 50 kr i startpris og 15 kr per km. Skriv en funksjon $f(x)$ for totalprisen.', solution: '$f(x) = 15x + 50$' },
              { label: 'b', task: 'Et vannbasseng inneholder 500 liter. Det tappes 20 liter per minutt. Skriv $V(t)$ for vannmengden.', solution: '$V(t) = 500 - 20t$' },
              { label: 'c', task: 'Hva er konstantleddet i funksjonen fra oppgave a)? Hva betyr det?', solution: 'Konstantleddet er $50$. Det er startprisen man betaler uansett.' },
              { label: 'd', task: 'Etter hvor mange minutter er bassenget i oppgave b) tomt?', solution: '$500 - 20t = 0 \\Rightarrow t = 25$ minutter' },
              { label: 'e', task: 'En lineær modell gir $f(0) = 100$ og $f(5) = 175$. Finn funksjonsuttrykket.', solution: '$a = \\frac{175 - 100}{5} = 15$, så $f(x) = 15x + 100$' },
              { label: 'f', task: 'En telefon mister 8% batteri per time fra 100%. Er dette en lineær modell? Skriv uttrykket.', solution: 'Tilnærmet lineær: $B(t) = 100 - 8t$ (i prosent). Gyldig så lenge $t \\leq 12{,}5$.' },
            ],
            solution: 'a) $f(x)=15x+50$, b) $V(t)=500-20t$, c) 50, startpris, d) 25 min, e) $f(x)=15x+100$, f) $B(t)=100-8t$',
            hideInlineSolution: true,
            hints: ['Bruk formen $f(x) = ax + b$ der $a$ er endring per enhet og $b$ er startverdien'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-3-3-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-3-3-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Modeller og tolk praktiske situasjoner med lineære funksjoner.',
            subTasks: [
              { label: 'a', task: 'Et treningssenter har to abonnementer: A: 300 kr/mnd + 50 kr per besøk, B: 800 kr/mnd med frie besøk. Sett opp funksjoner og finn når de er like dyre.', solution: '$A(x) = 50x + 300$, $B(x) = 800$. $50x + 300 = 800 \\Rightarrow x = 10$ besøk.' },
              { label: 'b', task: 'En bil kjører fra by X mot by Y. Etter 1 time har den kjørt 80 km, etter 3 timer 240 km. Finn funksjonsuttrykk og tolk stigningstallet.', solution: '$a = \\frac{240 - 80}{3 - 1} = 80$ km/t. $f(t) = 80t$. Stigningstallet er farten.' },
              { label: 'c', task: 'En bonde plukker epler. Etter 2 timer har han 150 epler, etter 5 timer har han 375 epler. Hvor mange epler plukker han per time?', solution: '$\\frac{375 - 150}{5 - 2} = \\frac{225}{3} = 75$ epler per time' },
              { label: 'd', task: 'Hvis bonden i oppgave c) hadde 0 epler da han startet, finn funksjonsuttrykket og sjekk at det stemmer.', solution: '$f(t) = 75t$. Sjekk: $f(2) = 150$ ✓ og $f(5) = 375$ ✓' },
              { label: 'e', task: 'En campingplass koster 200 kr per døgn pluss 75 kr per person. En familie på 4 betaler for 3 netter. Hva er totalkostnaden?', solution: 'Per døgn: $200 + 75 \\cdot 4 = 500$ kr. Totalt: $500 \\cdot 3 = 1500$ kr' },
            ],
            solution: 'a) 10 besøk, b) $f(t)=80t$, fart 80 km/t, c) 75 epler/t, d) $f(t)=75t$, e) 1500 kr',
            hideInlineSolution: true,
            hints: ['Identifiser hva som er fast kostnad (konstantledd) og hva som varierer (stigningstall)'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-3-3-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-3-3-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Analyser og sammenlign grafer.',
            subTasks: [
              { label: 'a', task: 'To løpere starter samtidig. Løper A: $d_A(t) = 8t$, Løper B: $d_B(t) = 6t + 10$ (i meter). Hvem har løpt lengst etter 3 sekunder?', solution: '$d_A(3) = 24$ m, $d_B(3) = 28$ m. Løper B har løpt lengst.' },
              { label: 'b', task: 'Når tar Løper A igjen Løper B?', solution: '$8t = 6t + 10 \\Rightarrow 2t = 10 \\Rightarrow t = 5$ sek. Etter 5 sekunder.' },
              { label: 'c', task: 'En graf for $f(x) = -3x + 15$ modellerer vannstanden (i cm) i et kar. Hva er startnivået, og når er karet tomt?', solution: 'Startnivå: $f(0) = 15$ cm. Tomt: $-3x + 15 = 0 \\Rightarrow x = 5$ (etter 5 min).' },
              { label: 'd', task: 'Skisser grafen fra oppgave c) og marker nullpunktet, $y$-skjæringspunktet og beskriv hva grafen viser mellom disse.', solution: '$y$-skjæring $(0, 15)$, nullpunkt $(5, 0)$. Rett linje med jevn synking, vannstanden minker med 3 cm per minutt.' },
              { label: 'e', task: 'En butikk selger is. Salget modelleres med $S(t) = 200t - 50$ for $t$ i timer fra åpning. Hva betyr det at $S(0) = -50$?', solution: 'Det betyr modellen gir $-50$ ved åpning, noe som kan tolkes som at modellen ikke passer for $t = 0$, eller at butikken hadde et underskudd før salget startet.' },
              { label: 'f', task: 'Finn $t$ slik at issalget i oppgave e) er 550 enheter.', solution: '$200t - 50 = 550 \\Rightarrow 200t = 600 \\Rightarrow t = 3$ timer etter åpning' },
            ],
            solution: 'a) Løper B, b) $t=5$ sek, c) 15 cm, tomt etter 5 min, d) Se beskrivelse, e) Modellen passer ikke ved $t=0$, f) $t=3$ timer',
            hideInlineSolution: true,
            hints: ['Sett funksjonene lik hverandre for å finne skjæringspunkt'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-3-3-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-3-3-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Sammensatte modelleringsoppgaver med lineære funksjoner.',
            subTasks: [
              { label: 'a', task: 'Et tog og en bil starter samtidig fra samme sted. Toget: $d_T(t) = 120t$. Bilen: $d_B(t) = 90t + 60$ (km, timer). Hvem kommer først til en by 360 km unna?', solution: 'Toget: $120t = 360 \\Rightarrow t = 3$ timer. Bilen: $90t + 60 = 360 \\Rightarrow t = \\frac{10}{3} \\approx 3{,}33$ timer. Toget kommer først.' },
              { label: 'b', task: 'En bedrift har faste kostnader på 50 000 kr og variable kostnader på 200 kr per enhet. Inntekten er 350 kr per enhet. Finn funksjoner for kostnad og inntekt, og bestem break-even.', solution: '$K(x) = 200x + 50\\,000$, $I(x) = 350x$. Break-even: $350x = 200x + 50\\,000 \\Rightarrow x = \\frac{50\\,000}{150} \\approx 333{,}3$, altså 334 enheter.' },
              { label: 'c', task: 'En temperaturmodell i en fabrikk er $T(t) = -2t + 80$ der $t$ er timer og $T$ er grader. Etter hvor lang tid er temperaturen under $30\\,°C$? Sett opp ulikhet og løs.', solution: '$-2t + 80 < 30 \\Rightarrow -2t < -50 \\Rightarrow t > 25$. Etter mer enn 25 timer.' },
              { label: 'd', task: 'Grafene til $f(x) = 3x - 2$ og $g(x) = -x + 10$ skjærer hverandre. Finn skjæringspunktet og arealet av trekanten som dannes mellom grafene og $x$-aksen.', solution: 'Skjæring: $3x - 2 = -x + 10 \\Rightarrow 4x = 12 \\Rightarrow x = 3$, $y = 7$. Nullpunkter: $f$: $x = \\frac{2}{3}$, $g$: $x = 10$. Grunnlinje = $10 - \\frac{2}{3} = \\frac{28}{3}$. Høyde = $7$. Areal = $\\frac{1}{2} \\cdot \\frac{28}{3} \\cdot 7 = \\frac{98}{3} \\approx 32{,}7$' },
            ],
            solution: 'a) Toget (3 t), b) 334 enheter, c) $t > 25$ timer, d) $(3, 7)$, areal $\\approx 32{,}7$',
            hideInlineSolution: true,
            hints: ['Sett opp funksjonsuttrykk for begge situasjonene og sett dem lik hverandre'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_9_4_1: TextbookChapter = {
  id: '9-4-1',
  courseId: '9',
  chapterNumber: '4.1',
  title: 'Pytagoras\' setning',
  description: 'Bruke Pytagoras\' setning til å finne sider i rettvinklede trekanter.',
  estimatedMinutes: 50,
  competenceGoals: ['utforske og argumentere for formlar for areal og volum'],
  content: [
    {
      id: '9-4-1-intro',
      type: 'text',
      content: `**Pytagoras' setning** er en av de viktigste setningene i matematikk. Den beskriver sammenhengen mellom sidene i en rettvinklet trekant og brukes mye i praktiske beregninger.`,
    },
    {
      id: '9-4-1-def-1',
      type: 'definition',
      title: 'Pytagoras\' setning',
      content: `I en **rettvinklet trekant** gjelder:

$$a^2 + b^2 = c^2$$

der:
- $c$ er **hypotenusen** (den lengste siden, mot den rette vinkelen)
- $a$ og $b$ er **katetene** (sidene ved den rette vinkelen)`,
    },
    {
      id: '9-4-1-ex-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'En rettvinklet trekant har kateter på 3 cm og 4 cm. Finn hypotenusen.',
      solution: `Vi bruker Pytagoras' setning med $a = 3$ og $b = 4$:

$c^2 = a^2 + b^2 = 3^2 + 4^2 = 9 + 16 = 25$

$c = \\sqrt{25} = 5$ cm

Hypotenusen er 5 cm.`,
    },
    {
      id: '9-4-1-ex-1-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn hypotenusen i de rettvinklede trekantene',
        subTasks: [
          { label: 'a', task: 'Katetene er 6 cm og 8 cm', solution: '$c = \\sqrt{36 + 64} = \\sqrt{100} = 10$ cm' },
          { label: 'b', task: 'Katetene er 5 cm og 12 cm', solution: '$c = \\sqrt{25 + 144} = \\sqrt{169} = 13$ cm' },
          { label: 'c', task: 'Katetene er 8 cm og 15 cm', solution: '$c = \\sqrt{64 + 225} = \\sqrt{289} = 17$ cm' },
        ],
        solution: 'a) 10 cm, b) 13 cm, c) 17 cm',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-1-text-2',
      type: 'text',
      content: `### Finne en katet

Vi kan også bruke Pytagoras' setning til å finne en katet når vi kjenner hypotenusen og den andre kateten.`,
    },
    {
      id: '9-4-1-ex-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'En rettvinklet trekant har hypotenus 13 cm og en katet på 5 cm. Finn den andre kateten.',
      solution: `Vi kjenner $c = 13$ og $a = 5$. Vi skal finne $b$.

$a^2 + b^2 = c^2$

$5^2 + b^2 = 13^2$

$25 + b^2 = 169$

$b^2 = 169 - 25 = 144$

$b = \\sqrt{144} = 12$ cm`,
    },
    {
      id: '9-4-1-ex-2-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn den ukjente kateten',
        subTasks: [
          { label: 'a', task: 'Hypotenus 10 cm, katet 6 cm', solution: '$b = \\sqrt{100 - 36} = \\sqrt{64} = 8$ cm' },
          { label: 'b', task: 'Hypotenus 17 cm, katet 15 cm', solution: '$b = \\sqrt{289 - 225} = \\sqrt{64} = 8$ cm' },
          { label: 'c', task: 'Hypotenus 25 cm, katet 7 cm', solution: '$b = \\sqrt{625 - 49} = \\sqrt{576} = 24$ cm' },
        ],
        solution: 'a) 8 cm, b) 8 cm, c) 24 cm',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-1-ex-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'En stige er 5 m lang og står mot en vegg. Bunnen av stigen er 3 m fra veggen. Hvor høyt opp på veggen når stigen?',
      solution: `Vi tegner en rettvinklet trekant der:
- Stigen er hypotenusen: $c = 5$ m
- Avstanden fra veggen er en katet: $a = 3$ m
- Høyden på veggen er den andre kateten: $b = ?$

$a^2 + b^2 = c^2$

$3^2 + b^2 = 5^2$

$9 + b^2 = 25$

$b^2 = 16$

$b = 4$ m

Stigen når 4 m opp på veggen.`,
    },
    {
      id: '9-4-1-ex-3-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs de praktiske oppgavene',
        subTasks: [
          { label: 'a', task: 'En stige er 10 m lang og bunnen står 6 m fra veggen. Hvor høyt når stigen?', solution: '$h = \\sqrt{100 - 36} = \\sqrt{64} = 8$ m' },
          { label: 'b', task: 'Du går 8 km rett nord, så 6 km rett øst. Hvor langt er du fra start?', solution: '$d = \\sqrt{64 + 36} = \\sqrt{100} = 10$ km' },
        ],
        solution: 'a) 8 m, b) 10 km',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-1-ex-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'Finn diagonalen i et rektangel med sider 9 cm og 12 cm.',
      solution: `Diagonalen deler rektangelet i to rettvinklede trekanter.
Diagonalen er hypotenusen, og sidene er katetene.

$d^2 = 9^2 + 12^2 = 81 + 144 = 225$

$d = \\sqrt{225} = 15$ cm

Diagonalen er 15 cm.`,
    },
    {
      id: '9-4-1-ex-4-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn diagonalen i figurene',
        subTasks: [
          { label: 'a', task: 'Rektangel med sider 5 cm og 12 cm', solution: '$d = \\sqrt{25 + 144} = \\sqrt{169} = 13$ cm' },
          { label: 'b', task: 'Kvadrat med side 7 cm', solution: '$d = \\sqrt{49 + 49} = \\sqrt{98} \\approx 9{,}9$ cm' },
          { label: 'c', task: 'TV-skjerm med bredde 80 cm og høyde 60 cm. Hvor mange tommer er skjermen? (1 tomme = 2,54 cm)', solution: '$d = \\sqrt{6400 + 3600} = 100$ cm $= 39{,}4$ tommer' },
        ],
        solution: 'a) 13 cm, b) ca. 9,9 cm, c) ca. 39 tommer',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-1-ex-5-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Avgjør om trekantene er rettvinklede ved å sjekke om Pytagoras\' setning stemmer',
        subTasks: [
          { label: 'a', task: 'Trekant med sider 9 cm, 12 cm og 15 cm', solution: '$9^2 + 12^2 = 81 + 144 = 225 = 15^2$. Ja, trekanten er rettvinklet.' },
          { label: 'b', task: 'Trekant med sider 5 cm, 6 cm og 8 cm', solution: '$5^2 + 6^2 = 25 + 36 = 61 \\neq 64 = 8^2$. Nei, trekanten er ikke rettvinklet.' },
          { label: 'c', task: 'Trekant med sider 7 cm, 24 cm og 25 cm', solution: '$7^2 + 24^2 = 49 + 576 = 625 = 25^2$. Ja, trekanten er rettvinklet.' },
        ],
        solution: 'a) Ja, b) Nei, c) Ja',
        hints: ['Sjekk om summen av kvadratene til de to korteste sidene er lik kvadratet av den lengste siden'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-1-ex-6-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn de ukjente sidene i trekantene',
        subTasks: [
          { label: 'a', task: 'En rettvinklet trekant har kateter $a = 2{,}5$ cm og $b = 6$ cm. Finn hypotenusen.', solution: '$c = \\sqrt{6{,}25 + 36} = \\sqrt{42{,}25} = 6{,}5$ cm' },
          { label: 'b', task: 'En rettvinklet trekant har hypotenus $c = 20$ cm og en katet $a = 16$ cm. Finn den andre kateten.', solution: '$b = \\sqrt{400 - 256} = \\sqrt{144} = 12$ cm' },
          { label: 'c', task: 'En rettvinklet trekant har hypotenus $c = 13$ cm og en katet $b = 12$ cm. Finn den andre kateten.', solution: '$a = \\sqrt{169 - 144} = \\sqrt{25} = 5$ cm' },
        ],
        solution: 'a) 6,5 cm, b) 12 cm, c) 5 cm',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-1-ex-7-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs praktiske oppgaver med Pytagoras\' setning',
        subTasks: [
          { label: 'a', task: 'En fotballbane er 100 m lang og 60 m bred. Hvor lang er diagonalen?', solution: '$d = \\sqrt{100^2 + 60^2} = \\sqrt{10000 + 3600} = \\sqrt{13600} \\approx 116{,}6$ m' },
          { label: 'b', task: 'En rampe er 5 m lang og stiger 1,2 m. Hvor lang er den horisontale avstanden?', solution: '$a = \\sqrt{25 - 1{,}44} = \\sqrt{23{,}56} \\approx 4{,}85$ m' },
          { label: 'c', task: 'Et tau er festet fra toppen av en 8 m høy mast til bakken 6 m fra masten. Hvor langt er tauet?', solution: '$\\text{Tau} = \\sqrt{64 + 36} = \\sqrt{100} = 10$ m' },
        ],
        solution: 'a) ca. 116,6 m, b) ca. 4,85 m, c) 10 m',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-1-ex-8-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn hypotenusen i disse rettvinklede trekantene (pytagoreiske tripler)',
        subTasks: [
          { label: 'a', task: 'Katetene er 20 cm og 21 cm', solution: '$c = \\sqrt{400 + 441} = \\sqrt{841} = 29$ cm' },
          { label: 'b', task: 'Katetene er 11 cm og 60 cm', solution: '$c = \\sqrt{121 + 3600} = \\sqrt{3721} = 61$ cm' },
          { label: 'c', task: 'Katetene er 9 cm og 40 cm', solution: '$c = \\sqrt{81 + 1600} = \\sqrt{1681} = 41$ cm' },
        ],
        solution: 'a) 29 cm, b) 61 cm, c) 41 cm',
        hints: ['Pytagoreiske tripler er heltallsløsninger der $a^2 + b^2 = c^2$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-1-ex-9-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bruk Pytagoras\' setning i koordinatsystemet',
        subTasks: [
          { label: 'a', task: 'Finn avstanden mellom punktene $A(1, 2)$ og $B(4, 6)$', solution: '$d = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$' },
          { label: 'b', task: 'Finn avstanden mellom punktene $P(0, 0)$ og $Q(5, 12)$', solution: '$d = \\sqrt{25 + 144} = \\sqrt{169} = 13$' },
          { label: 'c', task: 'Finn avstanden mellom punktene $C(-2, 3)$ og $D(4, -5)$', solution: '$d = \\sqrt{(4-(-2))^2 + (-5-3)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$' },
        ],
        solution: 'a) 5, b) 13, c) 10',
        hints: ['Avstanden mellom to punkter: $d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-1-ex-10-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn høyden i likesidede og likebeinte trekanter',
        subTasks: [
          { label: 'a', task: 'Finn høyden i en likesidet trekant med side 10 cm', solution: 'Høyden deler grunnlinjen i to like deler. $h = \\sqrt{10^2 - 5^2} = \\sqrt{75} \\approx 8{,}66$ cm' },
          { label: 'b', task: 'Finn høyden i en likebent trekant med ben 13 cm og grunnlinje 10 cm', solution: '$h = \\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$ cm' },
          { label: 'c', task: 'Finn arealet av trekanten i b)', solution: '$A = \\frac{10 \\cdot 12}{2} = 60$ cm²' },
        ],
        solution: 'a) ca. 8,66 cm, b) 12 cm, c) 60 cm²',
        hints: ['I likesidede og likebeinte trekanter står høyden vinkelrett på grunnlinjen og deler den i to like deler'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-1-ex-11-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs utfordrende oppgaver',
        subTasks: [
          { label: 'a', task: 'Et rektangulært rom er 4 m langt, 3 m bredt og 2,5 m høyt. Hvor lang er romdiagonalen (fra et hjørne på gulvet til motsatt hjørne i taket)?', solution: 'Først gulvdiagonal: $d_g = \\sqrt{16 + 9} = 5$ m. Så romdiagonal: $d = \\sqrt{25 + 6{,}25} = \\sqrt{31{,}25} \\approx 5{,}59$ m' },
          { label: 'b', task: 'En kube har sidekanter 6 cm. Finn lengden av romdiagonalen.', solution: '$d = \\sqrt{6^2 + 6^2 + 6^2} = \\sqrt{108} \\approx 10{,}39$ cm' },
        ],
        solution: 'a) ca. 5,59 m, b) ca. 10,39 cm',
        hints: ['Bruk Pytagoras to ganger: først for å finne diagonalen i bunnen, deretter for romdiagonalen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-1-ex-12-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-1-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammensatte oppgaver',
        subTasks: [
          { label: 'a', task: 'En stang på 2 m lener mot en vegg. Når bunnen flyttes 0,4 m lenger fra veggen, glir toppen 0,2 m ned. Hvor høyt nådde stangen opprinnelig?', solution: 'La $h$ være opprinnelig høyde og $x$ avstand fra vegg. Da: $x^2 + h^2 = 4$ og $(x+0{,}4)^2 + (h-0{,}2)^2 = 4$. Løs for å få $h = 1{,}92$ m og $x = 0{,}56$ m' },
          { label: 'b', task: 'To fly forlater samme flyplass. Det ene flyr 200 km rett nord, det andre 150 km rett øst. Hvor langt fra hverandre er flyene?', solution: '$d = \\sqrt{200^2 + 150^2} = \\sqrt{62500} = 250$ km' },
          { label: 'c', task: 'En rektangulær hage har areal 120 m² og diagonalen er 17 m. Finn lengde og bredde.', solution: 'La $l \\cdot b = 120$ og $l^2 + b^2 = 289$. Fra $(l+b)^2 = l^2 + 2lb + b^2 = 289 + 240 = 529$, så $l + b = 23$. Løs for å få $l = 15$ m, $b = 8$ m' },
        ],
        solution: 'a) ca. 1,92 m, b) 250 km, c) 15 m og 8 m',
        hints: ['Sett opp likninger basert på Pytagoras\' setning og løs dem'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-4-1-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '9-4-1-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-4-1-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Finn hypotenusen i rettvinklede trekanter.',
            subTasks: [
              { label: 'a', task: 'Katetene er $3$ cm og $4$ cm. Finn hypotenusen.', solution: '$c = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$ cm' },
              { label: 'b', task: 'Katetene er $6$ cm og $8$ cm. Finn hypotenusen.', solution: '$c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$ cm' },
              { label: 'c', task: 'Katetene er $5$ cm og $12$ cm. Finn hypotenusen.', solution: '$c = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$ cm' },
              { label: 'd', task: 'Katetene er $8$ cm og $15$ cm. Finn hypotenusen.', solution: '$c = \\sqrt{8^2 + 15^2} = \\sqrt{64 + 225} = \\sqrt{289} = 17$ cm' },
              { label: 'e', task: 'Katetene er $7$ cm og $24$ cm. Finn hypotenusen.', solution: '$c = \\sqrt{7^2 + 24^2} = \\sqrt{49 + 576} = \\sqrt{625} = 25$ cm' },
              { label: 'f', task: 'Katetene er $9$ cm og $40$ cm. Finn hypotenusen.', solution: '$c = \\sqrt{9^2 + 40^2} = \\sqrt{81 + 1600} = \\sqrt{1681} = 41$ cm' },
            ],
            solution: 'a) 5 cm, b) 10 cm, c) 13 cm, d) 17 cm, e) 25 cm, f) 41 cm',
            hideInlineSolution: true,
            hints: ['Bruk Pytagoras\' setning: $c^2 = a^2 + b^2$, der $c$ er hypotenusen'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-4-1-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-4-1-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Finn den ukjente kateten.',
            subTasks: [
              { label: 'a', task: 'Hypotenusen er $10$ cm og den ene kateten er $6$ cm. Finn den andre kateten.', solution: '$b = \\sqrt{10^2 - 6^2} = \\sqrt{100 - 36} = \\sqrt{64} = 8$ cm' },
              { label: 'b', task: 'Hypotenusen er $13$ cm og den ene kateten er $5$ cm. Finn den andre kateten.', solution: '$b = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$ cm' },
              { label: 'c', task: 'Hypotenusen er $17$ cm og den ene kateten er $8$ cm. Finn den andre kateten.', solution: '$b = \\sqrt{17^2 - 8^2} = \\sqrt{289 - 64} = \\sqrt{225} = 15$ cm' },
              { label: 'd', task: 'Hypotenusen er $25$ cm og den ene kateten er $7$ cm. Finn den andre kateten.', solution: '$b = \\sqrt{25^2 - 7^2} = \\sqrt{625 - 49} = \\sqrt{576} = 24$ cm' },
              { label: 'e', task: 'Hypotenusen er $15$ cm og den ene kateten er $9$ cm. Finn den andre kateten.', solution: '$b = \\sqrt{15^2 - 9^2} = \\sqrt{225 - 81} = \\sqrt{144} = 12$ cm' },
              { label: 'f', task: 'Hypotenusen er $20$ cm og den ene kateten er $12$ cm. Finn den andre kateten.', solution: '$b = \\sqrt{20^2 - 12^2} = \\sqrt{400 - 144} = \\sqrt{256} = 16$ cm' },
            ],
            solution: 'a) 8 cm, b) 12 cm, c) 15 cm, d) 24 cm, e) 12 cm, f) 16 cm',
            hideInlineSolution: true,
            hints: ['Omform Pytagoras\' setning: $b = \\sqrt{c^2 - a^2}$'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-4-1-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-4-1-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Avgjør om trekanten er rettvinklet.',
            subTasks: [
              { label: 'a', task: 'En trekant har sider $3$ cm, $4$ cm og $5$ cm. Er den rettvinklet?', solution: '$3^2 + 4^2 = 9 + 16 = 25 = 5^2$. Ja, den er rettvinklet.' },
              { label: 'b', task: 'En trekant har sider $5$ cm, $7$ cm og $9$ cm. Er den rettvinklet?', solution: '$5^2 + 7^2 = 25 + 49 = 74 \\neq 81 = 9^2$. Nei, den er ikke rettvinklet.' },
              { label: 'c', task: 'En trekant har sider $6$ cm, $8$ cm og $10$ cm. Er den rettvinklet?', solution: '$6^2 + 8^2 = 36 + 64 = 100 = 10^2$. Ja, den er rettvinklet.' },
              { label: 'd', task: 'En trekant har sider $8$ cm, $15$ cm og $17$ cm. Er den rettvinklet?', solution: '$8^2 + 15^2 = 64 + 225 = 289 = 17^2$. Ja, den er rettvinklet.' },
              { label: 'e', task: 'En trekant har sider $10$ cm, $12$ cm og $15$ cm. Er den rettvinklet?', solution: '$10^2 + 12^2 = 100 + 144 = 244 \\neq 225 = 15^2$. Nei, den er ikke rettvinklet.' },
              { label: 'f', task: 'En trekant har sider $9$ cm, $12$ cm og $15$ cm. Er den rettvinklet?', solution: '$9^2 + 12^2 = 81 + 144 = 225 = 15^2$. Ja, den er rettvinklet.' },
            ],
            solution: 'a) Ja, b) Nei, c) Ja, d) Ja, e) Nei, f) Ja',
            hideInlineSolution: true,
            hints: ['Sjekk om $a^2 + b^2 = c^2$ der $c$ er den lengste siden'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-4-1-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-4-1-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Praktiske oppgaver med Pytagoras\' setning.',
            subTasks: [
              { label: 'a', task: 'En stige er $5$ m lang og lener mot en vegg. Bunnen av stigen er $2$ m fra veggen. Hvor høyt opp på veggen når stigen?', solution: '$h = \\sqrt{5^2 - 2^2} = \\sqrt{25 - 4} = \\sqrt{21} \\approx 4{,}58$ m' },
              { label: 'b', task: 'Et rektangulært rom er $6$ m langt og $4$ m bredt. Hvor lang er diagonalen på gulvet?', solution: '$d = \\sqrt{6^2 + 4^2} = \\sqrt{36 + 16} = \\sqrt{52} \\approx 7{,}21$ m' },
              { label: 'c', task: 'En fotballbane er $100$ m lang og $64$ m bred. Hvor lang er diagonalen?', solution: '$d = \\sqrt{100^2 + 64^2} = \\sqrt{10000 + 4096} = \\sqrt{14096} \\approx 118{,}7$ m' },
              { label: 'd', task: 'Et telt har en stang på $2{,}5$ m i midten. Teltduken når bakken $2$ m fra midten. Hvor lang er teltduken fra toppen til bakken (skråsiden)?', solution: '$s = \\sqrt{2{,}5^2 + 2^2} = \\sqrt{6{,}25 + 4} = \\sqrt{10{,}25} \\approx 3{,}20$ m' },
              { label: 'e', task: 'En drage flyr $30$ m over bakken. Snoren til dragen er $50$ m lang. Hvor langt borte (vannrett) er dragen?', solution: '$x = \\sqrt{50^2 - 30^2} = \\sqrt{2500 - 900} = \\sqrt{1600} = 40$ m' },
            ],
            solution: 'a) ca. 4,58 m, b) ca. 7,21 m, c) ca. 118,7 m, d) ca. 3,20 m, e) 40 m',
            hideInlineSolution: true,
            hints: ['Tegn en skisse og finn den rettvinklede trekanten i situasjonen'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-4-1-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-4-1-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Bruk Pytagoras\' setning i koordinatsystemet og sammensatte figurer.',
            subTasks: [
              { label: 'a', task: 'Finn avstanden mellom punktene $A(1, 2)$ og $B(4, 6)$.', solution: '$AB = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$' },
              { label: 'b', task: 'Finn avstanden mellom punktene $C(-3, 1)$ og $D(5, -5)$.', solution: '$CD = \\sqrt{(5-(-3))^2 + (-5-1)^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$' },
              { label: 'c', task: 'Et rektangel har sider $8$ cm og $6$ cm. Finn diagonalen.', solution: '$d = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$ cm' },
              { label: 'd', task: 'En likesidet trekant har sider $10$ cm. Finn høyden.', solution: '$h = \\sqrt{10^2 - 5^2} = \\sqrt{100 - 25} = \\sqrt{75} \\approx 8{,}66$ cm' },
              { label: 'e', task: 'En likebent trekant har to sider på $13$ cm og grunnlinje $10$ cm. Finn høyden.', solution: '$h = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$ cm' },
              { label: 'f', task: 'En rombe har diagonaler $16$ cm og $12$ cm. Finn sidens lengde.', solution: 'Halve diagonaler: $8$ og $6$. Side $= \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$ cm' },
            ],
            solution: 'a) 5, b) 10, c) 10 cm, d) ca. 8,66 cm, e) 12 cm, f) 10 cm',
            hideInlineSolution: true,
            hints: ['Avstandsformelen er en variant av Pytagoras: $d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-4-1-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-4-1-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Krevende oppgaver med Pytagoras\' setning.',
            subTasks: [
              { label: 'a', task: 'Et rektangulært rom er $5$ m langt, $4$ m bredt og $3$ m høyt. Finn romdiagonalen (fra et hjørne på gulvet til det motsatte hjørnet i taket).', solution: 'Gulvdiagonal: $d_g = \\sqrt{5^2 + 4^2} = \\sqrt{41}$ m. Romdiagonal: $d = \\sqrt{41 + 9} = \\sqrt{50} \\approx 7{,}07$ m' },
              { label: 'b', task: 'En kjegle har radius $3$ cm og skråhøyde $5$ cm. Finn høyden til kjeglen.', solution: '$h = \\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4$ cm' },
              { label: 'c', task: 'To skip forlater samme havn. Det ene seiler $8$ km rett nord, deretter $6$ km rett øst. Det andre seiler $15$ km rett sør. Hvor langt fra hverandre er skipene?', solution: 'Skip 1 er $8$ km N og $6$ km Ø fra havnen. Skip 2 er $15$ km S. Vannrett avstand: $6$ km. Loddrett avstand: $8 + 15 = 23$ km. $d = \\sqrt{6^2 + 23^2} = \\sqrt{36 + 529} = \\sqrt{565} \\approx 23{,}8$ km' },
              { label: 'd', task: 'Et trapes har parallelle sider $10$ cm og $16$ cm, og de to andre sidene er begge $5$ cm. Finn høyden i trapeset.', solution: 'Differanse parallelle sider: $16 - 10 = 6$. Hver side: $\\frac{6}{2} = 3$ cm. Høyde: $h = \\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4$ cm' },
            ],
            solution: 'a) ca. 7,07 m, b) 4 cm, c) ca. 23,8 km, d) 4 cm',
            hideInlineSolution: true,
            hints: ['Tegn figuren og identifiser de rettvinklede trekantene. Ved romdiagonal brukes Pytagoras to ganger.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_9_4_2: TextbookChapter = {
  id: '9-4-2',
  courseId: '9',
  chapterNumber: '4.2',
  title: 'Formlikhet',
  description: 'Formlike figurer, målestokk og forholdstall.',
  estimatedMinutes: 45,
  competenceGoals: ['utforske eigenskapar ved to- og tredimensjonale figurar og beskrive dei'],
  content: [
    {
      id: '9-4-2-intro',
      type: 'text',
      content: `To figurer er **formlike** når de har samme form, men forskjellig størrelse. Alle tilsvarende vinkler er like, og alle tilsvarende sider har samme forholdstall.`,
    },
    {
      id: '9-4-2-def-1',
      type: 'definition',
      title: 'Formlike figurer',
      content: `To figurer er **formlike** når:
1. Alle tilsvarende vinkler er like
2. Alle tilsvarende sider har samme forholdstall

**Forholdstallet** (skaleringsfaktoren) $k$ er:
$$k = \\frac{\\text{ny side}}{\\text{original side}}$$`,
    },
    {
      id: '9-4-2-ex-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'To formlike trekanter har sider 3 cm, 4 cm, 5 cm og 6 cm, 8 cm, 10 cm. Finn forholdstallet.',
      solution: `Vi finner forholdstallet ved å dele tilsvarende sider:

$k = \\frac{6}{3} = \\frac{8}{4} = \\frac{10}{5} = 2$

Forholdstallet er 2, som betyr at den store trekanten er dobbelt så stor.`,
    },
    {
      id: '9-4-2-ex-1-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn forholdstallet mellom de formlike figurene',
        subTasks: [
          { label: 'a', task: 'Trekant A: 4 cm, 6 cm, 8 cm. Trekant B: 2 cm, 3 cm, 4 cm', solution: '$k = \\frac{2}{4} = 0{,}5$' },
          { label: 'b', task: 'Rektangel A: 5 cm × 10 cm. Rektangel B: 15 cm × 30 cm', solution: '$k = \\frac{15}{5} = 3$' },
        ],
        solution: 'a) $k = 0{,}5$, b) $k = 3$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-2-def-2',
      type: 'definition',
      title: 'Målestokk',
      content: `**Målestokk** angir forholdet mellom størrelsen på en tegning/modell og virkeligheten.

Målestokk 1:100 betyr at 1 cm på tegningen tilsvarer 100 cm (1 m) i virkeligheten.

$$\\text{Virkelig lengde} = \\text{Tegning} \\times \\text{Målestokk}$$`,
    },
    {
      id: '9-4-2-ex-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'Et rom måler 4 cm × 3 cm på en plantegning med målestokk 1:50. Finn de virkelige målene.',
      solution: `Målestokk 1:50 betyr at 1 cm på tegningen er 50 cm i virkeligheten.

Lengde: $4 \\text{ cm} \\times 50 = 200 \\text{ cm} = 2 \\text{ m}$

Bredde: $3 \\text{ cm} \\times 50 = 150 \\text{ cm} = 1{,}5 \\text{ m}$

Rommet er 2 m × 1,5 m i virkeligheten.`,
    },
    {
      id: '9-4-2-ex-2-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk målestokk til å finne virkelige mål',
        subTasks: [
          { label: 'a', task: 'Et hus måler 8 cm på en tegning med målestokk 1:100. Hvor langt er huset?', solution: '$8 \\times 100 = 800$ cm $= 8$ m' },
          { label: 'b', task: 'Avstanden på et kart er 5 cm. Målestokk 1:50000. Hvor lang er den virkelige avstanden?', solution: '$5 \\times 50000 = 250000$ cm $= 2{,}5$ km' },
        ],
        solution: 'a) 8 m, b) 2,5 km',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-2-ex-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'To formlike trekanter har sider på 4 cm, 5 cm og 6 cm (trekant A). Trekant B har korteste side 6 cm. Finn de andre sidene i trekant B.',
      solution: `Forholdstallet er:
$k = \\frac{6}{4} = 1{,}5$

Vi multipliserer alle sider med 1,5:
- Side 1: $4 \\times 1{,}5 = 6$ cm (gitt)
- Side 2: $5 \\times 1{,}5 = 7{,}5$ cm
- Side 3: $6 \\times 1{,}5 = 9$ cm

Trekant B har sider 6 cm, 7,5 cm og 9 cm.`,
    },
    {
      id: '9-4-2-ex-3-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn de ukjente sidene i de formlike figurene',
        subTasks: [
          { label: 'a', task: 'Trekant A: 3 cm, 4 cm, 5 cm. Trekant B har lengste side 15 cm. Finn de andre sidene.', solution: '$k = 3$. Sidene er 9 cm, 12 cm, 15 cm' },
          { label: 'b', task: 'Rektangel A: 6 cm × 10 cm. Rektangel B har bredde 15 cm. Finn lengden.', solution: '$k = 2{,}5$. Lengde $= 10 \\times 2{,}5 = 25$ cm' },
        ],
        solution: 'a) 9 cm, 12 cm, 15 cm, b) 25 cm',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-2-ex-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'Et tre kaster en skygge på 15 m. Samtidig kaster en pinne på 1 m en skygge på 0,75 m. Hvor høyt er treet?',
      solution: `Treet og pinnen med sine skygger danner formlike trekanter.

Forholdstallet mellom skyggene:
$k = \\frac{15}{0{,}75} = 20$

Treets høyde må ha samme forhold til pinnens høyde:
$\\text{Høyde} = 1 \\text{ m} \\times 20 = 20 \\text{ m}$

Treet er 20 m høyt.`,
    },
    {
      id: '9-4-2-ex-4-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bruk formlikhet til å løse oppgavene',
        subTasks: [
          { label: 'a', task: 'En bygning kaster en skygge på 24 m. En 2 m høy person kaster samtidig en skygge på 1,5 m. Hvor høy er bygningen?', solution: '$k = \\frac{24}{1{,}5} = 16$. Høyde $= 2 \\times 16 = 32$ m' },
          { label: 'b', task: 'På et foto er en bil 4 cm lang. I virkeligheten er bilen 4,8 m. Hvor langt er et hus som er 12 cm på bildet?', solution: '$k = \\frac{480}{4} = 120$. Hus $= 12 \\times 120 = 1440$ cm $= 14{,}4$ m' },
        ],
        solution: 'a) 32 m, b) 14,4 m',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-2-ex-5-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Avgjør om figurene er formlike',
        subTasks: [
          { label: 'a', task: 'Rektangel A: 4 cm $\\times$ 6 cm. Rektangel B: 6 cm $\\times$ 9 cm', solution: '$\\frac{6}{4} = 1{,}5$ og $\\frac{9}{6} = 1{,}5$. Ja, figurene er formlike med $k = 1{,}5$' },
          { label: 'b', task: 'Trekant A: 3 cm, 4 cm, 5 cm. Trekant B: 6 cm, 8 cm, 11 cm', solution: '$\\frac{6}{3} = 2$, $\\frac{8}{4} = 2$, men $\\frac{11}{5} = 2{,}2$. Nei, ikke formlike.' },
          { label: 'c', task: 'Kvadrat A: 5 cm. Kvadrat B: 8 cm', solution: 'Alle kvadrater er formlike. $k = \\frac{8}{5} = 1{,}6$' },
        ],
        solution: 'a) Ja, b) Nei, c) Ja',
        hints: ['Sjekk om alle tilsvarende sider har samme forholdstall'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-2-ex-6-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn ukjente sider i formlike figurer',
        subTasks: [
          { label: 'a', task: 'To formlike trekanter har sider 5 cm, 7 cm, 9 cm og $x$ cm, 14 cm, 18 cm. Finn $x$.', solution: '$k = \\frac{14}{7} = 2$. $x = 5 \\times 2 = 10$ cm' },
          { label: 'b', task: 'To formlike rektangler. Det lille: 3 cm $\\times$ 5 cm. Det store har bredde 12 cm. Finn lengden.', solution: '$k = \\frac{12}{3} = 4$. Lengde $= 5 \\times 4 = 20$ cm' },
          { label: 'c', task: 'To formlike trekanter. Trekant A har sider 8 cm, 10 cm, 12 cm. Trekant B har omkrens 45 cm. Finn sidene i B.', solution: 'Omkrens A $= 30$ cm. $k = \\frac{45}{30} = 1{,}5$. Sider: $12$ cm, $15$ cm, $18$ cm' },
        ],
        solution: 'a) 10 cm, b) 20 cm, c) 12 cm, 15 cm, 18 cm',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-2-ex-7-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn med målestokk',
        subTasks: [
          { label: 'a', task: 'Et rom måler 6 cm $\\times$ 4 cm på en tegning med målestokk 1:50. Finn de virkelige målene.', solution: 'Lengde: $6 \\times 50 = 300$ cm $= 3$ m. Bredde: $4 \\times 50 = 200$ cm $= 2$ m' },
          { label: 'b', task: 'Avstanden mellom to byer er 8 km. Hvor lang er avstanden på et kart med målestokk 1:200 000?', solution: '$\\frac{800000}{200000} = 4$ cm' },
          { label: 'c', task: 'En modellbil er 8 cm lang. Målestokken er 1:43. Hvor lang er den virkelige bilen?', solution: '$8 \\times 43 = 344$ cm $= 3{,}44$ m' },
        ],
        solution: 'a) 3 m $\\times$ 2 m, b) 4 cm, c) 3,44 m',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-2-ex-8-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Praktiske oppgaver med målestokk',
        subTasks: [
          { label: 'a', task: 'En arkitekt tegner et hus med målestokk 1:100. Huset skal være 12 m langt og 8 m bredt. Hvor store blir målene på tegningen?', solution: 'Lengde: $\\frac{1200}{100} = 12$ cm. Bredde: $\\frac{800}{100} = 8$ cm' },
          { label: 'b', task: 'På et turkart med målestokk 1:50 000 er en sti 15 cm lang. Hvor lang er stien i virkeligheten?', solution: '$15 \\times 50000 = 750000$ cm $= 7{,}5$ km' },
          { label: 'c', task: 'En modell av Eiffeltårnet har målestokk 1:200. Modellen er 1,62 m høy. Hvor høyt er det ekte tårnet?', solution: '$162 \\times 200 = 32400$ cm $= 324$ m' },
        ],
        solution: 'a) 12 cm $\\times$ 8 cm, b) 7,5 km, c) 324 m',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-2-ex-9-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk formlike trekanter til å finne ukjente lengder',
        subTasks: [
          { label: 'a', task: 'I en stor trekant er en parallell linje trukket til grunnlinjen. Den lille trekanten har sider 4 cm og 6 cm. Den tilsvarende siden i den store er 9 cm. Finn den andre siden.', solution: '$k = \\frac{9}{6} = 1{,}5$. Den andre siden $= 4 \\times 1{,}5 = 6$ cm' },
          { label: 'b', task: 'To formlike trekanter har arealer 16 cm² og 36 cm². Hvis den minste har en side på 6 cm, hvor lang er den tilsvarende siden i den store?', solution: 'Arealforhold $= \\frac{36}{16} = 2{,}25 = k^2$. $k = 1{,}5$. Side $= 6 \\times 1{,}5 = 9$ cm' },
        ],
        solution: 'a) 6 cm, b) 9 cm',
        hints: ['Arealforholdet er lik kvadratet av lengdeforholdet: $\\frac{A_2}{A_1} = k^2$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-2-ex-10-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Areal og formlikhet',
        subTasks: [
          { label: 'a', task: 'Et rektangel har areal 24 cm². Et formlik rektangel har $k = 2$. Finn arealet av det store rektangelet.', solution: 'Areal $= 24 \\times 2^2 = 24 \\times 4 = 96$ cm²' },
          { label: 'b', task: 'En trekant har areal 50 cm². En formlik trekant har $k = 0{,}5$. Finn arealet av den lille trekanten.', solution: 'Areal $= 50 \\times 0{,}5^2 = 50 \\times 0{,}25 = 12{,}5$ cm²' },
          { label: 'c', task: 'To formlike figurer har arealer 18 cm² og 72 cm². Finn forholdstallet $k$.', solution: '$k^2 = \\frac{72}{18} = 4$. $k = 2$' },
        ],
        solution: 'a) 96 cm², b) 12,5 cm², c) $k = 2$',
        hints: ['Når sidene skaleres med $k$, skaleres arealet med $k^2$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-2-ex-11-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Avanserte skyggeoppgaver',
        subTasks: [
          { label: 'a', task: 'En lyktestolpe kaster en skygge på 12 m. Samtidig kaster en 1,8 m høy person en skygge på 2,4 m. Hvor høy er lyktestolpen?', solution: '$k = \\frac{12}{2{,}4} = 5$. Høyde $= 1{,}8 \\times 5 = 9$ m' },
          { label: 'b', task: 'Et 3 m høyt tre kaster en skygge på 4 m. Hvor lang skygge kaster et 10 m høyt tre samtidig?', solution: '$k = \\frac{10}{3}$. Skygge $= 4 \\times \\frac{10}{3} \\approx 13{,}3$ m' },
          { label: 'c', task: 'Kl. 14:00 kaster en 2 m høy person en skygge på 1,5 m. Kl. 16:00 er skyggen 4 m lang. Hvor lang skygge kaster et 15 m høyt hus kl. 16:00?', solution: 'Kl. 16:00: Forholdet skygge/høyde $= \\frac{4}{2} = 2$. Husets skygge $= 15 \\times 2 = 30$ m' },
        ],
        solution: 'a) 9 m, b) ca. 13,3 m, c) 30 m',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-2-ex-12-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-2-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammensatte oppgaver',
        subTasks: [
          { label: 'a', task: 'En modell av en bygning har målestokk 1:250. Modellen er 32 cm høy og bruker 500 ml maling. Hvor mye maling trengs til den virkelige bygningen hvis forbruket er proporsjonalt med overflaten?', solution: 'Bygningen er $32 \\times 250 = 8000$ cm $= 80$ m høy. Overflatefaktor $= 250^2 = 62500$. Maling $= 500 \\times 62500 = 31{,}25$ millioner ml $= 31250$ liter' },
          { label: 'b', task: 'To formlike bokser har volumer 27 cm³ og 125 cm³. Den lille boksen har overflate 54 cm². Finn overflaten til den store boksen.', solution: '$k^3 = \\frac{125}{27} = \\frac{125}{27}$. $k = \\frac{5}{3}$. $k^2 = \\frac{25}{9}$. Overflate $= 54 \\times \\frac{25}{9} = 150$ cm²' },
          { label: 'c', task: 'Et kart har målestokk 1:25 000. Arealet av en innsjø på kartet er 8 cm². Finn det virkelige arealet i km².', solution: 'Arealfaktor $= 25000^2 = 625000000$. Areal $= 8 \\times 625000000 = 5$ milliarder cm² $= 0{,}5$ km²' },
        ],
        solution: 'a) 31 250 liter, b) 150 cm², c) 0,5 km²',
        hints: ['Volum skaleres med $k^3$, overflate med $k^2$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-4-2-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '9-4-2-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-4-2-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Finn ukjente sider i formlike figurer.',
            subTasks: [
              { label: 'a', task: 'To formlike trekanter har sider $3$ cm, $4$ cm, $5$ cm og $6$ cm, $x$ cm, $10$ cm. Finn $x$.', solution: 'Forholdstall: $\\frac{6}{3} = 2$. $x = 4 \\cdot 2 = 8$ cm' },
              { label: 'b', task: 'To formlike rektangler har sider $5$ cm og $8$ cm, og $15$ cm og $y$ cm. Finn $y$.', solution: 'Forholdstall: $\\frac{15}{5} = 3$. $y = 8 \\cdot 3 = 24$ cm' },
              { label: 'c', task: 'To formlike trekanter har sider $4$ cm, $6$ cm, $9$ cm og $8$ cm, $x$ cm, $y$ cm. Finn $x$ og $y$.', solution: 'Forholdstall: $\\frac{8}{4} = 2$. $x = 6 \\cdot 2 = 12$ cm, $y = 9 \\cdot 2 = 18$ cm' },
              { label: 'd', task: 'En trekant har sider $10$ cm, $15$ cm og $20$ cm. En formlik trekant har korteste side $6$ cm. Finn de andre sidene.', solution: 'Forholdstall: $\\frac{6}{10} = 0{,}6$. Sider: $15 \\cdot 0{,}6 = 9$ cm, $20 \\cdot 0{,}6 = 12$ cm' },
              { label: 'e', task: 'To formlike firkanter har sider $7$ cm og $14$ cm (tilsvarende sider). Finn forholdstallet.', solution: 'Forholdstall: $k = \\frac{14}{7} = 2$' },
              { label: 'f', task: 'To formlike trekanter har forholdstall $k = 3$. Den lille trekanten har sider $2$ cm, $3$ cm og $4$ cm. Finn sidene i den store.', solution: '$2 \\cdot 3 = 6$ cm, $3 \\cdot 3 = 9$ cm, $4 \\cdot 3 = 12$ cm' },
            ],
            solution: 'a) 8 cm, b) 24 cm, c) 12 cm og 18 cm, d) 9 cm og 12 cm, e) $k = 2$, f) 6 cm, 9 cm, 12 cm',
            hideInlineSolution: true,
            hints: ['Finn forholdstallet mellom tilsvarende sider i de formlike figurene'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-4-2-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-4-2-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Regn med målestokk.',
            subTasks: [
              { label: 'a', task: 'Et kart har målestokk $1:50\\,000$. Avstanden mellom to byer er $4$ cm på kartet. Finn den virkelige avstanden i km.', solution: '$4 \\cdot 50\\,000 = 200\\,000$ cm $= 2$ km' },
              { label: 'b', task: 'Målestokk $1:200$. Hvor lang er en vegg på tegningen hvis den er $8$ m i virkeligheten?', solution: '$\\frac{800}{200} = 4$ cm' },
              { label: 'c', task: 'En modellbil er $8$ cm lang. Den virkelige bilen er $4$ m. Hva er målestokken?', solution: '$\\frac{8}{400} = \\frac{1}{50}$. Målestokk: $1:50$' },
              { label: 'd', task: 'Et kart har målestokk $1:100\\,000$. To steder er $7{,}5$ km fra hverandre. Finn avstanden på kartet.', solution: '$\\frac{750\\,000}{100\\,000} = 7{,}5$ cm' },
              { label: 'e', task: 'En husplan har målestokk $1:100$. Et rom er $3{,}5$ cm bredt og $5$ cm langt på tegningen. Finn de virkelige målene.', solution: 'Bredde: $3{,}5 \\cdot 100 = 350$ cm $= 3{,}5$ m. Lengde: $5 \\cdot 100 = 500$ cm $= 5$ m' },
              { label: 'f', task: 'En modell av et hus har målestokk $1:75$. Døren i modellen er $2{,}8$ cm høy. Hvor høy er den virkelige døren?', solution: '$2{,}8 \\cdot 75 = 210$ cm $= 2{,}1$ m' },
            ],
            solution: 'a) 2 km, b) 4 cm, c) 1:50, d) 7,5 cm, e) 3,5 m og 5 m, f) 2,1 m',
            hideInlineSolution: true,
            hints: ['Målestokk $1:n$ betyr at $1$ cm på tegningen tilsvarer $n$ cm i virkeligheten'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-4-2-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-4-2-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Sett opp forholdstall og løs.',
            subTasks: [
              { label: 'a', task: 'To formlike trekanter har sider $5$ og $x$ som tilsvarende sider, og $3$ og $9$ som et annet par tilsvarende sider. Finn $x$.', solution: '$\\frac{x}{5} = \\frac{9}{3} = 3$. $x = 5 \\cdot 3 = 15$' },
              { label: 'b', task: 'Forholdstallet mellom to formlike figurer er $\\frac{2}{5}$. Den store figuren har en side på $20$ cm. Finn tilsvarende side i den lille figuren.', solution: '$x = 20 \\cdot \\frac{2}{5} = 8$ cm' },
              { label: 'c', task: 'En trekant har sider $6$, $8$ og $10$. Finn sidene i en formlik trekant der den lengste siden er $25$.', solution: '$k = \\frac{25}{10} = 2{,}5$. Sider: $6 \\cdot 2{,}5 = 15$, $8 \\cdot 2{,}5 = 20$, $25$' },
              { label: 'd', task: 'To formlike rektangler har arealfaktor $9$. Hva er forholdstallet mellom sidene?', solution: '$k^2 = 9$, så $k = \\sqrt{9} = 3$' },
              { label: 'e', task: 'Forholdstallet mellom to formlike figurer er $4$. Den lille figuren har omkrets $12$ cm. Finn omkretsen til den store.', solution: 'Omkrets skaleres med $k$: $12 \\cdot 4 = 48$ cm' },
              { label: 'f', task: 'Forholdstallet mellom sidene i to formlike figurer er $3$. Hva er forholdet mellom arealene?', solution: 'Arealforholdet $= k^2 = 3^2 = 9$' },
            ],
            solution: 'a) 15, b) 8 cm, c) 15, 20 og 25, d) $k = 3$, e) 48 cm, f) 9',
            hideInlineSolution: true,
            hints: ['Areal skaleres med $k^2$ der $k$ er forholdstallet mellom sidene'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-4-2-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-4-2-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Praktiske oppgaver med formlikhet.',
            subTasks: [
              { label: 'a', task: 'Et tre kaster en skygge på $12$ m. Samtidig kaster en pinne på $1{,}5$ m en skygge på $2$ m. Hvor høyt er treet?', solution: 'Formlike trekanter: $\\frac{h}{12} = \\frac{1{,}5}{2}$. $h = \\frac{12 \\cdot 1{,}5}{2} = 9$ m' },
              { label: 'b', task: 'Et kart har målestokk $1:50\\,000$. Et areal på kartet er $3$ cm². Finn det virkelige arealet i km².', solution: 'Arealfaktor: $50\\,000^2 = 2{,}5 \\cdot 10^9$. Areal: $3 \\cdot 2{,}5 \\cdot 10^9 = 7{,}5 \\cdot 10^9$ cm² $= 0{,}75$ km²' },
              { label: 'c', task: 'To formlike sylindere har høyder $10$ cm og $15$ cm. Den lille har volum $200$ cm³. Finn volumet til den store.', solution: '$k = \\frac{15}{10} = 1{,}5$. Volumfaktor $= k^3 = 1{,}5^3 = 3{,}375$. Volum $= 200 \\cdot 3{,}375 = 675$ cm³' },
              { label: 'd', task: 'En bygning er $30$ m høy. En modell i målestokk $1:200$ lages. Hvor høy er modellen?', solution: '$\\frac{3000}{200} = 15$ cm' },
              { label: 'e', task: 'Et bilde forstørres slik at bredden øker fra $10$ cm til $25$ cm. Bildet var opprinnelig $15$ cm høyt. Finn den nye høyden.', solution: '$k = \\frac{25}{10} = 2{,}5$. Ny høyde: $15 \\cdot 2{,}5 = 37{,}5$ cm' },
            ],
            solution: 'a) 9 m, b) 0,75 km², c) 675 cm³, d) 15 cm, e) 37,5 cm',
            hideInlineSolution: true,
            hints: ['Ved skyggeberegninger gir solen parallelle stråler, så trekantene blir formlike'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-4-2-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-4-2-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Areal- og volumskalering i formlike figurer.',
            subTasks: [
              { label: 'a', task: 'To formlike trekanter har forholdstall $k = 2$. Den lille trekanten har areal $6$ cm². Finn arealet til den store.', solution: 'Areal $= 6 \\cdot 2^2 = 6 \\cdot 4 = 24$ cm²' },
              { label: 'b', task: 'To formlike figurer har arealer $8$ cm² og $32$ cm². Finn forholdstallet mellom sidene.', solution: '$k^2 = \\frac{32}{8} = 4$. $k = 2$' },
              { label: 'c', task: 'To formlike terninger har sider $3$ cm og $6$ cm. Den lille har volum $27$ cm³. Finn volumet til den store.', solution: '$k = \\frac{6}{3} = 2$. Volum $= 27 \\cdot 2^3 = 27 \\cdot 8 = 216$ cm³' },
              { label: 'd', task: 'To formlike figurer har volumforhold $8:27$. Finn forholdet mellom sidene og mellom overflatene.', solution: '$k = \\sqrt[3]{\\frac{27}{8}} = \\frac{3}{2}$. Sideforhold: $2:3$. Overflateforhold: $k^2 = \\frac{9}{4}$, altså $4:9$' },
              { label: 'e', task: 'Et maleri er $60$ cm bredt og $80$ cm høyt. Det skal forminskes slik at arealet blir $\\frac{1}{4}$ av originalen. Finn de nye målene.', solution: '$k^2 = \\frac{1}{4}$, $k = \\frac{1}{2}$. Nye mål: $60 \\cdot \\frac{1}{2} = 30$ cm og $80 \\cdot \\frac{1}{2} = 40$ cm' },
              { label: 'f', task: 'En kule har radius $r$. En formlik kule har dobbelt så stor radius. Hvor mange ganger større er volumet?', solution: '$k = 2$. Volumfaktor $= k^3 = 2^3 = 8$. Volumet er $8$ ganger større.' },
            ],
            solution: 'a) 24 cm², b) $k = 2$, c) 216 cm³, d) 2:3 og 4:9, e) 30 cm og 40 cm, f) 8 ganger',
            hideInlineSolution: true,
            hints: ['Husk: sider skaleres med $k$, areal med $k^2$, volum med $k^3$'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-4-2-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-4-2-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Krevende oppgaver med formlikhet og skalering.',
            subTasks: [
              { label: 'a', task: 'En modell av en dam har målestokk $1:500$. Modellen rommer $0{,}8$ liter vann. Hvor mange kubikkmeter rommer den virkelige dammen?', solution: 'Volumfaktor $= 500^3 = 125\\,000\\,000$. Volum $= 0{,}8 \\cdot 125\\,000\\,000 = 100\\,000\\,000$ ml $= 100\\,000$ liter $= 100$ m³' },
              { label: 'b', task: 'To formlike bokser har overflater $50$ cm² og $450$ cm². Den lille boksen veier $100$ g. Hvor mye veier den store boksen? (Samme materiale og tykkelse.)', solution: '$k^2 = \\frac{450}{50} = 9$, $k = 3$. Vekt skaleres med volum: $k^3 = 27$. Vekt $= 100 \\cdot 27 = 2700$ g $= 2{,}7$ kg' },
              { label: 'c', task: 'En statue er $2$ m høy og veier $500$ kg. En formlik miniatyr er $20$ cm høy. Finn vekten til miniatyren (samme materiale).', solution: '$k = \\frac{20}{200} = 0{,}1$. Vektfaktor $= k^3 = 0{,}001$. Vekt $= 500 \\cdot 0{,}001 = 0{,}5$ kg $= 500$ g' },
              { label: 'd', task: 'To formlike beholdere har volumer i forholdet $1:64$. Den store beholderen har overflate $960$ cm². Finn overflaten til den lille beholderen.', solution: '$k^3 = 64$, $k = 4$. $k^2 = 16$. Overflate lille $= \\frac{960}{16} = 60$ cm²' },
            ],
            solution: 'a) 100 m³, b) 2,7 kg, c) 500 g, d) 60 cm²',
            hideInlineSolution: true,
            hints: ['Vekt og volum skaleres med $k^3$, overflate med $k^2$. Finn $k$ fra den informasjonen du har.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_9_4_3: TextbookChapter = {
  id: '9-4-3',
  courseId: '9',
  chapterNumber: '4.3',
  title: 'Areal og volum',
  description: 'Beregne areal og volum av sammensatte figurer.',
  estimatedMinutes: 55,
  competenceGoals: ['utforske og argumentere for formlar for areal og volum'],
  content: [
    {
      id: '9-4-3-intro',
      type: 'text',
      content: `I dette kapitlet lærer vi å beregne areal og volum av ulike figurer, inkludert sammensatte figurer som består av flere grunnleggende former.`,
    },
    {
      id: '9-4-3-def-1',
      type: 'definition',
      title: 'Arealformler',
      content: `**Grunnleggende arealformler**:

- Rektangel: $A = l \\cdot b$
- Trekant: $A = \\frac{g \\cdot h}{2}$
- Sirkel: $A = \\pi r^2$
- Parallellogram: $A = g \\cdot h$
- Trapes: $A = \\frac{(a + b) \\cdot h}{2}$`,
    },
    {
      id: '9-4-3-ex-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'Finn arealet av en trekant med grunnlinje 8 cm og høyde 5 cm.',
      solution: `$A = \\frac{g \\cdot h}{2} = \\frac{8 \\cdot 5}{2} = \\frac{40}{2} = 20$ cm²`,
    },
    {
      id: '9-4-3-ex-1-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn arealet av figurene',
        subTasks: [
          { label: 'a', task: 'Trekant med grunnlinje 12 cm og høyde 7 cm', solution: '$A = \\frac{12 \\cdot 7}{2} = 42$ cm²' },
          { label: 'b', task: 'Sirkel med radius 5 cm', solution: '$A = \\pi \\cdot 5^2 \\approx 78{,}5$ cm²' },
          { label: 'c', task: 'Trapes med parallelle sider 6 cm og 10 cm, høyde 4 cm', solution: '$A = \\frac{(6+10) \\cdot 4}{2} = 32$ cm²' },
        ],
        solution: 'a) 42 cm², b) ca. 78,5 cm², c) 32 cm²',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-3-def-2',
      type: 'definition',
      title: 'Volumformler',
      content: `**Grunnleggende volumformler**:

- Prisme/boks: $V = G \\cdot h$ (grunnflate × høyde)
- Sylinder: $V = \\pi r^2 h$
- Kule: $V = \\frac{4}{3} \\pi r^3$
- Kjegle: $V = \\frac{1}{3} \\pi r^2 h$
- Pyramide: $V = \\frac{1}{3} G \\cdot h$`,
    },
    {
      id: '9-4-3-ex-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'Finn volumet av en sylinder med radius 3 cm og høyde 10 cm.',
      solution: `$V = \\pi r^2 h = \\pi \\cdot 3^2 \\cdot 10 = \\pi \\cdot 9 \\cdot 10 = 90\\pi \\approx 283$ cm³`,
    },
    {
      id: '9-4-3-ex-2-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn volumet av figurene',
        subTasks: [
          { label: 'a', task: 'Prisme med grunnflate 25 cm² og høyde 8 cm', solution: '$V = 25 \\cdot 8 = 200$ cm³' },
          { label: 'b', task: 'Kule med radius 6 cm', solution: '$V = \\frac{4}{3} \\cdot \\pi \\cdot 6^3 \\approx 905$ cm³' },
          { label: 'c', task: 'Kjegle med radius 4 cm og høyde 9 cm', solution: '$V = \\frac{1}{3} \\cdot \\pi \\cdot 16 \\cdot 9 \\approx 151$ cm³' },
        ],
        solution: 'a) 200 cm³, b) ca. 905 cm³, c) ca. 151 cm³',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-3-text-2',
      type: 'text',
      content: `### Sammensatte figurer

For å finne arealet eller volumet av sammensatte figurer, deler vi figuren i kjente deler og legger sammen (eller trekker fra).`,
    },
    {
      id: '9-4-3-ex-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'En L-formet figur består av to rektangler: 8 cm × 3 cm og 5 cm × 4 cm (som deler en side). Finn arealet.',
      solution: `Vi beregner arealet av hvert rektangel og legger sammen:

$A_1 = 8 \\cdot 3 = 24$ cm²
$A_2 = 5 \\cdot 4 = 20$ cm²

$A_{\\text{total}} = 24 + 20 = 44$ cm²`,
    },
    {
      id: '9-4-3-ex-3-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn arealet av de sammensatte figurene',
        subTasks: [
          { label: 'a', task: 'Et rektangel 10 cm × 6 cm med en halvsirkel (radius 3 cm) på ene kortsiden', solution: '$A = 60 + \\frac{\\pi \\cdot 9}{2} \\approx 74{,}1$ cm²' },
          { label: 'b', task: 'Et kvadrat med side 8 cm med en trekant (grunnlinje 8 cm, høyde 4 cm) på toppen', solution: '$A = 64 + 16 = 80$ cm²' },
        ],
        solution: 'a) ca. 74,1 cm², b) 80 cm²',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-3-ex-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'En sylinder har radius 5 cm og høyde 20 cm. Finn overflaten.',
      solution: `Overflaten består av:
- To sirkler (topp og bunn): $2 \\cdot \\pi r^2 = 2 \\cdot \\pi \\cdot 25 = 50\\pi$
- Sideflatene (rektangel): $2\\pi r \\cdot h = 2\\pi \\cdot 5 \\cdot 20 = 200\\pi$

$O = 50\\pi + 200\\pi = 250\\pi \\approx 785$ cm²`,
    },
    {
      id: '9-4-3-ex-4-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn volumet og/eller overflaten',
        subTasks: [
          { label: 'a', task: 'En boks er 20 cm × 15 cm × 10 cm. Finn volumet og overflaten.', solution: '$V = 3000$ cm³, $O = 2(200 + 150 + 300) = 1300$ cm²' },
          { label: 'b', task: 'En halvkule har radius 8 cm. Finn volumet.', solution: '$V = \\frac{1}{2} \\cdot \\frac{4}{3} \\pi \\cdot 512 \\approx 1072$ cm³' },
        ],
        solution: 'a) V = 3000 cm³, O = 1300 cm², b) ca. 1072 cm³',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-3-ex-5-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beregn arealet av figurene',
        subTasks: [
          { label: 'a', task: 'Parallellogram med grunnlinje 9 cm og høyde 6 cm', solution: '$A = 9 \\cdot 6 = 54$ cm²' },
          { label: 'b', task: 'Rombe med diagonaler 8 cm og 12 cm', solution: '$A = \\frac{8 \\cdot 12}{2} = 48$ cm²' },
          { label: 'c', task: 'Regulært heksagon (sekskantet) med side 4 cm (Hint: Del opp i 6 likesidede trekanter)', solution: 'Areal av likesidet trekant med side 4: $A = \\frac{\\sqrt{3}}{4} \\cdot 16 \\approx 6{,}93$ cm². Totalt: $6 \\cdot 6{,}93 \\approx 41{,}6$ cm²' },
        ],
        solution: 'a) 54 cm², b) 48 cm², c) ca. 41,6 cm²',
        hints: ['Rombearealet er halvparten av produktet av diagonalene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-3-ex-6-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn volumet av figurene',
        subTasks: [
          { label: 'a', task: 'Firkantet pyramide med grunnflate 6 cm $\\times$ 6 cm og høyde 10 cm', solution: '$V = \\frac{1}{3} \\cdot 36 \\cdot 10 = 120$ cm³' },
          { label: 'b', task: 'Kjegle med diameter 10 cm og høyde 12 cm', solution: '$V = \\frac{1}{3} \\cdot \\pi \\cdot 25 \\cdot 12 = 100\\pi \\approx 314$ cm³' },
          { label: 'c', task: 'Kule med diameter 9 cm', solution: '$V = \\frac{4}{3} \\cdot \\pi \\cdot 4{,}5^3 = \\frac{4}{3} \\cdot \\pi \\cdot 91{,}125 \\approx 382$ cm³' },
        ],
        solution: 'a) 120 cm³, b) ca. 314 cm³, c) ca. 382 cm³',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-3-ex-7-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn arealet av sammensatte figurer',
        subTasks: [
          { label: 'a', task: 'Et rektangel 12 cm $\\times$ 8 cm med et kvadrat 3 cm $\\times$ 3 cm kuttet ut fra et hjørne', solution: '$A = 96 - 9 = 87$ cm²' },
          { label: 'b', task: 'En sirkel med radius 10 cm med en sirkel med radius 4 cm kuttet ut i midten (ring)', solution: '$A = \\pi \\cdot 100 - \\pi \\cdot 16 = 84\\pi \\approx 264$ cm²' },
          { label: 'c', task: 'Et kvadrat med side 10 cm med fire hjørner (kvartsirkler med radius 2 cm) kuttet ut', solution: '$A = 100 - 4 \\cdot \\frac{\\pi \\cdot 4}{4} = 100 - 4\\pi \\approx 87{,}4$ cm²' },
        ],
        solution: 'a) 87 cm², b) ca. 264 cm², c) ca. 87,4 cm²',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-3-ex-8-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn overflaten av romfigurene',
        subTasks: [
          { label: 'a', task: 'En kube med side 5 cm', solution: '$O = 6 \\cdot 25 = 150$ cm²' },
          { label: 'b', task: 'En sylinder med radius 4 cm og høyde 10 cm', solution: '$O = 2\\pi \\cdot 16 + 2\\pi \\cdot 4 \\cdot 10 = 32\\pi + 80\\pi = 112\\pi \\approx 352$ cm²' },
          { label: 'c', task: 'En kule med radius 7 cm', solution: '$O = 4\\pi \\cdot 49 = 196\\pi \\approx 616$ cm²' },
        ],
        solution: 'a) 150 cm², b) ca. 352 cm², c) ca. 616 cm²',
        hints: ['Sylinderoverflate: $O = 2\\pi r^2 + 2\\pi rh$. Kuleoverflate: $O = 4\\pi r^2$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-3-ex-9-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Praktiske volumberegninger',
        subTasks: [
          { label: 'a', task: 'Et svømmebasseng er 25 m langt, 10 m bredt, 1 m dypt i den grunne enden og 3 m dypt i den dype enden. Finn volumet.', solution: 'Tverrsnitt er et trapes med parallelle sider 1 m og 3 m, høyde 25 m. Areal $= \\frac{(1+3) \\cdot 25}{2} = 50$ m². Volum $= 50 \\cdot 10 = 500$ m³' },
          { label: 'b', task: 'En iskremkjegle har radius 3 cm og høyde 10 cm. Toppen har en halvkule med radius 3 cm. Finn totalt volum.', solution: 'Kjegle: $V = \\frac{1}{3}\\pi \\cdot 9 \\cdot 10 = 30\\pi$. Halvkule: $V = \\frac{2}{3}\\pi \\cdot 27 = 18\\pi$. Total: $48\\pi \\approx 151$ cm³' },
        ],
        solution: 'a) 500 m³, b) ca. 151 cm³',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-3-ex-10-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammensatte volumberegninger',
        subTasks: [
          { label: 'a', task: 'En sylinder med radius 5 cm og høyde 12 cm har en kjegleformet fordypning i toppen. Kjeglen har radius 5 cm og høyde 4 cm. Finn volumet av den gjenværende figuren.', solution: 'Sylinder: $V = \\pi \\cdot 25 \\cdot 12 = 300\\pi$. Kjegle: $V = \\frac{1}{3}\\pi \\cdot 25 \\cdot 4 = \\frac{100\\pi}{3}$. Rest: $300\\pi - \\frac{100\\pi}{3} = \\frac{800\\pi}{3} \\approx 838$ cm³' },
          { label: 'b', task: 'En boks er 10 cm $\\times$ 8 cm $\\times$ 6 cm. En sylinder med diameter 4 cm bores gjennom boksen (gjennom sidene 10 cm $\\times$ 6 cm). Finn restvolumet.', solution: 'Boks: $V = 480$ cm³. Sylinder: $V = \\pi \\cdot 4 \\cdot 8 = 32\\pi \\approx 100{,}5$ cm³. Rest: $\\approx 379{,}5$ cm³' },
        ],
        solution: 'a) ca. 838 cm³, b) ca. 380 cm³',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-3-ex-11-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn ukjente mål',
        subTasks: [
          { label: 'a', task: 'En sylinder har volum 500 cm³ og radius 5 cm. Finn høyden.', solution: '$500 = \\pi \\cdot 25 \\cdot h$. $h = \\frac{500}{25\\pi} \\approx 6{,}37$ cm' },
          { label: 'b', task: 'En kule har volum 288$\\pi$ cm³. Finn radius.', solution: '$288\\pi = \\frac{4}{3}\\pi r^3$. $r^3 = 216$. $r = 6$ cm' },
          { label: 'c', task: 'En kjegle har volum 150 cm³ og høyde 10 cm. Finn radius.', solution: '$150 = \\frac{1}{3}\\pi r^2 \\cdot 10$. $r^2 = \\frac{45}{\\pi}$. $r \\approx 3{,}78$ cm' },
        ],
        solution: 'a) ca. 6,37 cm, b) 6 cm, c) ca. 3,78 cm',
        hints: ['Løs volumformlene med hensyn på den ukjente størrelsen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-3-ex-12-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-3-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordrende oppgaver',
        subTasks: [
          { label: 'a', task: 'En tank er formet som en sylinder med en halvkule i hver ende. Sylinderen har radius 2 m og lengde 6 m. Finn tankens totale volum.', solution: 'Sylinder: $V = \\pi \\cdot 4 \\cdot 6 = 24\\pi$ m³. To halvkuler = en kule: $V = \\frac{4}{3}\\pi \\cdot 8 = \\frac{32\\pi}{3}$ m³. Total: $24\\pi + \\frac{32\\pi}{3} = \\frac{104\\pi}{3} \\approx 109$ m³' },
          { label: 'b', task: 'Et telt har form som en kjegle med radius 3 m og høyde 4 m. Hvor mye stoff trengs til teltet? (Bare mantelen, ikke bunnen)', solution: 'Skråhøyde: $s = \\sqrt{9 + 16} = 5$ m. Mantel: $A = \\pi \\cdot 3 \\cdot 5 = 15\\pi \\approx 47{,}1$ m²' },
          { label: 'c', task: 'En glassball (kule) har radius 5 cm og veier 500 g. Glasset har tetthet 2,5 g/cm³. Finn tykkelsen på glasset.', solution: 'Glassvolum $= \\frac{500}{2{,}5} = 200$ cm³. Ytre volum $= \\frac{4}{3}\\pi \\cdot 125 \\approx 523{,}6$ cm³. Indre volum $= 523{,}6 - 200 = 323{,}6$ cm³. Indre radius: $r = \\sqrt[3]{\\frac{323{,}6 \\cdot 3}{4\\pi}} \\approx 4{,}26$ cm. Tykkelse $\\approx 0{,}74$ cm' },
        ],
        solution: 'a) ca. 109 m³, b) ca. 47,1 m², c) ca. 0,74 cm',
        hints: ['Mantelflate av kjegle: $A = \\pi r s$ der $s$ er skråhøyden'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-4-3-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '9-4-3-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-4-3-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Beregn areal av grunnleggende figurer.',
            subTasks: [
              { label: 'a', task: 'Finn arealet av et rektangel med lengde $8$ cm og bredde $5$ cm.', solution: '$A = 8 \\cdot 5 = 40$ cm²' },
              { label: 'b', task: 'Finn arealet av en trekant med grunnlinje $12$ cm og høyde $7$ cm.', solution: '$A = \\frac{12 \\cdot 7}{2} = 42$ cm²' },
              { label: 'c', task: 'Finn arealet av en sirkel med radius $6$ cm.', solution: '$A = \\pi \\cdot 6^2 = 36\\pi \\approx 113{,}1$ cm²' },
              { label: 'd', task: 'Finn arealet av et parallellogram med grunnlinje $9$ cm og høyde $4$ cm.', solution: '$A = 9 \\cdot 4 = 36$ cm²' },
              { label: 'e', task: 'Finn arealet av et trapes med parallelle sider $6$ cm og $10$ cm, og høyde $5$ cm.', solution: '$A = \\frac{(6 + 10) \\cdot 5}{2} = \\frac{80}{2} = 40$ cm²' },
              { label: 'f', task: 'Finn arealet av en sirkel med diameter $10$ cm.', solution: '$r = 5$ cm. $A = \\pi \\cdot 5^2 = 25\\pi \\approx 78{,}5$ cm²' },
            ],
            solution: 'a) 40 cm², b) 42 cm², c) ca. 113,1 cm², d) 36 cm², e) 40 cm², f) ca. 78,5 cm²',
            hideInlineSolution: true,
            hints: ['Bruk arealformlene: rektangel $A = l \\cdot b$, trekant $A = \\frac{g \\cdot h}{2}$, sirkel $A = \\pi r^2$'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-4-3-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-4-3-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Beregn volum av grunnleggende romfigurer.',
            subTasks: [
              { label: 'a', task: 'Finn volumet av en boks (rett prisme) med lengde $10$ cm, bredde $6$ cm og høyde $4$ cm.', solution: '$V = 10 \\cdot 6 \\cdot 4 = 240$ cm³' },
              { label: 'b', task: 'Finn volumet av en sylinder med radius $3$ cm og høyde $8$ cm.', solution: '$V = \\pi \\cdot 3^2 \\cdot 8 = 72\\pi \\approx 226{,}2$ cm³' },
              { label: 'c', task: 'Finn volumet av en kule med radius $5$ cm.', solution: '$V = \\frac{4}{3}\\pi \\cdot 5^3 = \\frac{500\\pi}{3} \\approx 523{,}6$ cm³' },
              { label: 'd', task: 'Finn volumet av en kjegle med radius $4$ cm og høyde $9$ cm.', solution: '$V = \\frac{1}{3}\\pi \\cdot 4^2 \\cdot 9 = 48\\pi \\approx 150{,}8$ cm³' },
              { label: 'e', task: 'Finn volumet av en terning med side $7$ cm.', solution: '$V = 7^3 = 343$ cm³' },
              { label: 'f', task: 'Finn volumet av en kule med diameter $12$ cm.', solution: '$r = 6$ cm. $V = \\frac{4}{3}\\pi \\cdot 6^3 = 288\\pi \\approx 904{,}8$ cm³' },
            ],
            solution: 'a) 240 cm³, b) ca. 226,2 cm³, c) ca. 523,6 cm³, d) ca. 150,8 cm³, e) 343 cm³, f) ca. 904,8 cm³',
            hideInlineSolution: true,
            hints: ['Volumformler: boks $V = l \\cdot b \\cdot h$, sylinder $V = \\pi r^2 h$, kule $V = \\frac{4}{3}\\pi r^3$, kjegle $V = \\frac{1}{3}\\pi r^2 h$'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-4-3-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-4-3-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Finn ukjente mål fra gitt areal eller volum.',
            subTasks: [
              { label: 'a', task: 'Et rektangel har areal $48$ cm² og lengde $8$ cm. Finn bredden.', solution: '$b = \\frac{48}{8} = 6$ cm' },
              { label: 'b', task: 'En trekant har areal $30$ cm² og grunnlinje $10$ cm. Finn høyden.', solution: '$30 = \\frac{10 \\cdot h}{2}$. $h = \\frac{60}{10} = 6$ cm' },
              { label: 'c', task: 'En sirkel har areal $154$ cm². Finn radius. (Bruk $\\pi \\approx 3{,}14$)', solution: '$154 = \\pi r^2$. $r^2 = \\frac{154}{\\pi} \\approx 49$. $r = 7$ cm' },
              { label: 'd', task: 'En sylinder har volum $500$ cm³ og radius $5$ cm. Finn høyden.', solution: '$500 = \\pi \\cdot 25 \\cdot h$. $h = \\frac{500}{25\\pi} \\approx 6{,}37$ cm' },
              { label: 'e', task: 'En terning har volum $512$ cm³. Finn sidekanten.', solution: '$s = \\sqrt[3]{512} = 8$ cm' },
              { label: 'f', task: 'En kule har volum $36\\pi$ cm³. Finn radius.', solution: '$36\\pi = \\frac{4}{3}\\pi r^3$. $r^3 = 27$. $r = 3$ cm' },
            ],
            solution: 'a) 6 cm, b) 6 cm, c) 7 cm, d) ca. 6,37 cm, e) 8 cm, f) 3 cm',
            hideInlineSolution: true,
            hints: ['Sett inn kjente verdier i formelen og løs med hensyn på den ukjente'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-4-3-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-4-3-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Beregn areal og volum av sammensatte figurer.',
            subTasks: [
              { label: 'a', task: 'En figur er satt sammen av et rektangel ($8$ cm $\\times$ $4$ cm) og en halvsirkel med diameter $4$ cm. Finn samlet areal.', solution: 'Rektangel: $32$ cm². Halvsirkel: $\\frac{\\pi \\cdot 2^2}{2} = 2\\pi \\approx 6{,}28$ cm². Totalt: $32 + 6{,}28 \\approx 38{,}3$ cm²' },
              { label: 'b', task: 'Finn arealet av en ring (sirkelring) med ytre radius $8$ cm og indre radius $5$ cm.', solution: '$A = \\pi(8^2 - 5^2) = \\pi(64 - 25) = 39\\pi \\approx 122{,}5$ cm²' },
              { label: 'c', task: 'Et T-formet rom består av to rektangler: $6$ m $\\times$ $3$ m og $2$ m $\\times$ $4$ m. Finn det totale arealet.', solution: '$A = 6 \\cdot 3 + 2 \\cdot 4 = 18 + 8 = 26$ m²' },
              { label: 'd', task: 'En isskulptur er formet som en sylinder (radius $10$ cm, høyde $20$ cm) med en halvkule på toppen. Finn det totale volumet.', solution: 'Sylinder: $\\pi \\cdot 100 \\cdot 20 = 2000\\pi$ cm³. Halvkule: $\\frac{2}{3}\\pi \\cdot 1000 = \\frac{2000\\pi}{3}$ cm³. Totalt: $2000\\pi + \\frac{2000\\pi}{3} = \\frac{8000\\pi}{3} \\approx 8378$ cm³' },
              { label: 'e', task: 'Et rektangulært basseng er $10$ m langt, $5$ m bredt og $2$ m dypt. Hvor mange liter vann rommer det?', solution: '$V = 10 \\cdot 5 \\cdot 2 = 100$ m³ $= 100\\,000$ liter' },
            ],
            solution: 'a) ca. 38,3 cm², b) ca. 122,5 cm², c) 26 m², d) ca. 8378 cm³, e) 100 000 liter',
            hideInlineSolution: true,
            hints: ['Del den sammensatte figuren opp i enkle deler og summer arealene/volumene'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-4-3-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-4-3-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Overflate og praktiske beregninger.',
            subTasks: [
              { label: 'a', task: 'Finn overflaten av en boks med mål $10$ cm $\\times$ $6$ cm $\\times$ $4$ cm.', solution: '$O = 2(10 \\cdot 6 + 10 \\cdot 4 + 6 \\cdot 4) = 2(60 + 40 + 24) = 2 \\cdot 124 = 248$ cm²' },
              { label: 'b', task: 'Finn overflaten av en sylinder med radius $3$ cm og høyde $10$ cm.', solution: '$O = 2\\pi r^2 + 2\\pi r h = 2\\pi \\cdot 9 + 2\\pi \\cdot 3 \\cdot 10 = 18\\pi + 60\\pi = 78\\pi \\approx 245$ cm²' },
              { label: 'c', task: 'Et rom skal males. Rommet er $5$ m langt, $4$ m bredt og $2{,}5$ m høyt. Det har en dør ($0{,}9$ m $\\times$ $2{,}1$ m) og et vindu ($1{,}2$ m $\\times$ $1{,}0$ m). Finn arealet som skal males (vegger og tak).', solution: 'Vegg: $2(5 + 4) \\cdot 2{,}5 = 45$ m². Tak: $5 \\cdot 4 = 20$ m². Dør: $0{,}9 \\cdot 2{,}1 = 1{,}89$ m². Vindu: $1{,}2$ m². Maleflate: $45 + 20 - 1{,}89 - 1{,}2 = 61{,}91$ m²' },
              { label: 'd', task: 'En tennisball har diameter $6{,}7$ cm. Finn overflaten.', solution: '$r = 3{,}35$ cm. $O = 4\\pi r^2 = 4\\pi \\cdot 3{,}35^2 \\approx 141{,}0$ cm²' },
              { label: 'e', task: 'Et sylinderformet glass har indre radius $3$ cm og er $12$ cm høyt. Hvor mange desiliter rommer det?', solution: '$V = \\pi \\cdot 9 \\cdot 12 = 108\\pi \\approx 339{,}3$ cm³ $= 3{,}39$ dl' },
              { label: 'f', task: 'Hvor mange liter maling trengs for å male overflaten i oppgave a) hvis $1$ liter dekker $10$ m²?', solution: '$A = 248$ cm² $= 0{,}0248$ m². Maling: $\\frac{0{,}0248}{10} = 0{,}00248$ liter $\\approx 2{,}5$ ml' },
            ],
            solution: 'a) 248 cm², b) ca. 245 cm², c) ca. 61,9 m², d) ca. 141,0 cm², e) ca. 3,39 dl, f) ca. 2,5 ml',
            hideInlineSolution: true,
            hints: ['Overflate av boks: $O = 2(lb + lh + bh)$. Overflate av sylinder: $O = 2\\pi r^2 + 2\\pi rh$'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-4-3-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-4-3-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Krevende areal- og volumoppgaver.',
            subTasks: [
              { label: 'a', task: 'En tank er formet som en liggende sylinder med radius $1{,}5$ m og lengde $4$ m, med en halvkule i hver ende. Finn tankens totale volum.', solution: 'Sylinder: $V = \\pi \\cdot 1{,}5^2 \\cdot 4 = 9\\pi$ m³. To halvkuler = en kule: $V = \\frac{4}{3}\\pi \\cdot 1{,}5^3 = 4{,}5\\pi$ m³. Totalt: $9\\pi + 4{,}5\\pi = 13{,}5\\pi \\approx 42{,}4$ m³' },
              { label: 'b', task: 'En svømmehall har form som et trapes sett fra siden: lengde $25$ m, grunt ende $1$ m dypt, dyp ende $3$ m dypt. Bredden er $12{,}5$ m. Finn vannvolumet i liter.', solution: '$A_{\\text{trapes}} = \\frac{(1 + 3) \\cdot 25}{2} = 50$ m². $V = 50 \\cdot 12{,}5 = 625$ m³ $= 625\\,000$ liter' },
              { label: 'c', task: 'En iskrem-kjegle har radius $3$ cm og høyde $12$ cm. En halvkuleformet topp med radius $3$ cm legges på. Finn det totale volumet iskrem.', solution: 'Kjegle: $V = \\frac{1}{3}\\pi \\cdot 9 \\cdot 12 = 36\\pi$ cm³. Halvkule: $V = \\frac{2}{3}\\pi \\cdot 27 = 18\\pi$ cm³. Totalt: $36\\pi + 18\\pi = 54\\pi \\approx 169{,}6$ cm³' },
              { label: 'd', task: 'En pyramide med kvadratisk grunnflate har sidelengde $6$ cm og høyde $8$ cm. Finn volumet og skråhøyden til en sideflate.', solution: 'Volum: $V = \\frac{1}{3} \\cdot 6^2 \\cdot 8 = 96$ cm³. Avstand fra sentrum til midtpunkt av side: $3$ cm. Skråhøyde: $s = \\sqrt{8^2 + 3^2} = \\sqrt{73} \\approx 8{,}54$ cm' },
            ],
            solution: 'a) ca. 42,4 m³, b) 625 000 liter, c) ca. 169,6 cm³, d) 96 cm³ og ca. 8,54 cm',
            hideInlineSolution: true,
            hints: ['Del sammensatte figurer i kjente former. Husk volumformler for kjegle ($\\frac{1}{3}\\pi r^2 h$) og kule ($\\frac{4}{3}\\pi r^3$).'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_9_4_4: TextbookChapter = {
  id: '9-4-4',
  courseId: '9',
  chapterNumber: '4.4',
  title: 'Konstruksjoner',
  description: 'Geometriske konstruksjoner med passer og linjal.',
  estimatedMinutes: 45,
  competenceGoals: ['utforske eigenskapar ved to- og tredimensjonale figurar og beskrive dei'],
  content: [
    {
      id: '9-4-4-intro',
      type: 'text',
      content: `**Geometriske konstruksjoner** gjøres kun med passer og linjal (uten målinger). Disse metodene har vært kjent i tusenvis av år og viser viktige geometriske sammenhenger.`,
    },
    {
      id: '9-4-4-def-1',
      type: 'definition',
      title: 'Verktøy for konstruksjon',
      content: `**Passer**: Brukes til å tegne sirkler og buer, og til å overføre lengder.

**Linjal** (umerket): Brukes til å trekke rette linjer gjennom to punkter.

Vi bruker IKKE linjalen til å måle lengder!`,
    },
    {
      id: '9-4-4-ex-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'Konstruer midtnormalen til et linjestykke AB.',
      solution: `**Midtnormalen** er linjen som står vinkelrett på AB og går gjennom midtpunktet.

**Fremgangsmåte**:
1. Sett passerspissen i A og lag en bue over og under AB
2. Med samme åpning: sett passerspissen i B og lag buer som krysser de første
3. Trekk en linje gjennom de to krysningspunktene

Denne linjen er midtnormalen og går gjennom midtpunktet M på AB.`,
    },
    {
      id: '9-4-4-ex-1-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Konstruer midtnormalen',
        subTasks: [
          { label: 'a', task: 'Tegn et linjestykke AB på 8 cm og konstruer midtnormalen.', solution: 'Følg fremgangsmåten fra eksemplet. Midtnormalen krysser AB i punktet M som er 4 cm fra begge endepunkter.' },
          { label: 'b', task: 'Mål at midtpunktet deler AB i to like deler.', solution: 'Begge deler skal være like lange (4 cm)' },
        ],
        solution: 'Konstruksjonen deler linjestykket i to like deler',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-4-ex-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'Konstruer halveringslinjen til en vinkel.',
      solution: `**Halveringslinjen** deler en vinkel i to like store deler.

**Fremgangsmåte**:
1. Sett passerspissen i vinkelpunktet V og lag en bue som skjærer begge vinkelbeina (punkter A og B)
2. Sett passerspissen i A og lag en bue inne i vinkelen
3. Med samme åpning: sett passerspissen i B og lag en bue som krysser den forrige
4. Trekk en linje fra V gjennom krysningspunktet

Denne linjen deler vinkelen i to like deler.`,
    },
    {
      id: '9-4-4-ex-2-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Konstruer halveringslinjer',
        subTasks: [
          { label: 'a', task: 'Tegn en vinkel på ca. 60° og konstruer halveringslinjen.', solution: 'Halveringslinjen deler vinkelen i to vinkler på ca. 30° hver.' },
          { label: 'b', task: 'Tegn en vinkel på ca. 90° og konstruer halveringslinjen.', solution: 'Halveringslinjen deler vinkelen i to vinkler på ca. 45° hver.' },
        ],
        solution: 'Bruk fremgangsmåten fra eksemplet',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-4-ex-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'Konstruer en 60° vinkel.',
      solution: `**Fremgangsmåte**:
1. Tegn en rett linje og marker et punkt A på linjen
2. Sett passerspissen i A og tegn en sirkel (bue) som krysser linjen i punkt B
3. Med samme åpning: sett passerspissen i B og tegn en bue som krysser den første sirkelen i punkt C
4. Trekk linjen AC

Vinkelen BAC er 60° fordi ABC er en likesidet trekant.`,
    },
    {
      id: '9-4-4-ex-3-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Konstruer vinklene',
        subTasks: [
          { label: 'a', task: 'Konstruer en 60° vinkel.', solution: 'Følg fremgangsmåten fra eksemplet.' },
          { label: 'b', task: 'Konstruer en 30° vinkel. (Hint: Bruk halveringslinje)', solution: 'Konstruer først 60°, deretter halver vinkelen.' },
          { label: 'c', task: 'Konstruer en 90° vinkel. (Hint: Bruk midtnormal)', solution: 'Bruk midtnormalkonstruksjon på et linjestykke.' },
        ],
        solution: 'a) Likesidet trekant-metode, b) Halver 60°, c) Midtnormal',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-4-ex-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'Konstruer en likesidet trekant med side 5 cm.',
      solution: `**Fremgangsmåte**:
1. Tegn et linjestykke AB = 5 cm
2. Sett passerspissen i A med åpning 5 cm og tegn en bue over AB
3. Sett passerspissen i B med samme åpning og tegn en bue som krysser den første i punkt C
4. Trekk linjene AC og BC

Trekanten ABC er likesidet med alle sider lik 5 cm og alle vinkler lik 60°.`,
    },
    {
      id: '9-4-4-ex-4-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Konstruer figurene',
        subTasks: [
          { label: 'a', task: 'Konstruer en likesidet trekant med side 6 cm.', solution: 'Bruk passer med åpning 6 cm fra begge endepunkter av grunnlinjen.' },
          { label: 'b', task: 'Konstruer et kvadrat med side 4 cm. (Hint: Bruk 90° vinkel)', solution: 'Tegn en side, konstruer 90° vinkel i endepunktene, mål av 4 cm langs vinkelbeina.' },
        ],
        solution: 'a) Buer fra A og B med radius = sidlengde, b) Midtnormal for 90°',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-4-ex-5-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Konstruer midtpunktet på et linjestykke',
        subTasks: [
          { label: 'a', task: 'Tegn et linjestykke AB på 10 cm og konstruer midtpunktet M.', solution: 'Konstruer midtnormalen til AB. Skjæringspunktet med AB er midtpunktet M.' },
          { label: 'b', task: 'Mål avstanden AM og MB. Er de like?', solution: 'Begge skal være 5 cm.' },
          { label: 'c', task: 'Tegn et linjestykke CD på 7 cm og konstruer midtpunktet.', solution: 'Bruk samme metode. Midtpunktet deler CD i to deler på 3,5 cm hver.' },
        ],
        solution: 'Bruk midtnormalkonstruksjon for å finne midtpunktet',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-4-ex-6-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Konstruer normalen til en linje gjennom et punkt',
        subTasks: [
          { label: 'a', task: 'Tegn en rett linje l og et punkt P på linjen. Konstruer normalen til l gjennom P.', solution: 'Sett passerspissen i P, lag to buer som skjærer l på hver side av P. Konstruer midtnormalen til disse to punktene.' },
          { label: 'b', task: 'Tegn en rett linje m og et punkt Q utenfor linjen. Konstruer normalen fra Q ned på m.', solution: 'Sett passerspissen i Q, lag en bue som skjærer m i to punkter. Konstruer midtnormalen mellom disse punktene gjennom Q.' },
        ],
        solution: 'Normal gjennom punkt på/utenfor linjen ved hjelp av midtnormal',
        hints: ['For punkt utenfor linjen: Finn to punkter på linjen som har lik avstand fra punktet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-4-ex-7-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-4-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Konstruer kopier av vinkler',
        subTasks: [
          { label: 'a', task: 'Tegn en vilkårlig vinkel. Konstruer en kopi av vinkelen.', solution: 'Lag bue i originalvinkelen, overfør buelengden til ny vinkel, bruk passer til å kopiere avstanden mellom skjæringspunktene.' },
          { label: 'b', task: 'Tegn to vinkler på ca. 40° og 50°. Konstruer summen av vinklene.', solution: 'Kopier den ene vinkelen, så kopier den andre vinkelen med toppunkt i samme punkt og ett ben sammenfallende med det ene benet til den første.' },
        ],
        solution: 'Bruk passer til å overføre buelengder og avstander',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-4-ex-8-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-4-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Konstruer spesielle vinkler',
        subTasks: [
          { label: 'a', task: 'Konstruer en 45° vinkel.', solution: 'Konstruer først 90° (midtnormal), deretter halver med halveringslinje.' },
          { label: 'b', task: 'Konstruer en 120° vinkel.', solution: 'Konstruer 60° og legg til en ny 60° vinkel, eller konstruer 180° og trekk fra 60°.' },
          { label: 'c', task: 'Konstruer en 15° vinkel.', solution: 'Konstruer 60°, halver til 30°, halver igjen til 15°.' },
        ],
        solution: 'a) Halver 90°, b) 60° + 60° eller 180° - 60°, c) Halver 30°',
        hints: ['Start med vinkler du kan konstruere direkte (60°, 90°) og halver/kombiner'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-4-ex-9-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-4-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Konstruer trekanter med gitte mål',
        subTasks: [
          { label: 'a', task: 'Konstruer en trekant med sider 5 cm, 6 cm og 7 cm.', solution: 'Tegn én side (f.eks. 7 cm), bruk passer med radius 5 cm fra ett endepunkt og 6 cm fra det andre. Skjæringspunktet gir tredje hjørne.' },
          { label: 'b', task: 'Konstruer en rettvinklet trekant med kateter 4 cm og 3 cm.', solution: 'Tegn en katet, konstruer 90° vinkel, mål av den andre kateten.' },
          { label: 'c', task: 'Konstruer en likebent trekant med ben 6 cm og grunnlinje 4 cm.', solution: 'Tegn grunnlinjen, bruk passer med radius 6 cm fra begge endepunkter. Skjæringspunktet er toppen.' },
        ],
        solution: 'Bruk passer til å markere riktige lengder fra endepunktene',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-4-ex-10-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-4-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Konstruer innskrevne og omskrevne sirkler',
        subTasks: [
          { label: 'a', task: 'Tegn en trekant og konstruer den omskrevne sirkelen (sirkelen som går gjennom alle tre hjørner).', solution: 'Konstruer midtnormalene til to av sidene. Skjæringspunktet er sentrum i den omskrevne sirkelen. Radius er avstanden til et hjørne.' },
          { label: 'b', task: 'Tegn en trekant og konstruer den innskrevne sirkelen (sirkelen som tangerer alle tre sider).', solution: 'Konstruer halveringslinjene til to av vinklene. Skjæringspunktet er sentrum. Radius er avstanden ned på en side.' },
        ],
        solution: 'a) Bruk midtnormaler, b) Bruk vinkelhalveringslinjer',
        hints: ['Omskrevet sirkel: Sentrum har lik avstand til alle hjørner. Innskrevet sirkel: Sentrum har lik avstand til alle sider.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-4-ex-11-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-4-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Konstruer regulære mangekanter',
        subTasks: [
          { label: 'a', task: 'Konstruer en regulær sekskant (6-kant) innskrevet i en sirkel med radius 4 cm.', solution: 'Tegn sirkel med radius 4 cm. Siden i en regulær sekskant = radius. Marker av 6 punkter på sirkelen med passeråpning lik radius.' },
          { label: 'b', task: 'Konstruer en regulær åttekant (8-kant) innskrevet i en sirkel.', solution: 'Tegn sirkel, konstruer to diametre vinkelrett på hverandre (90°), halver hver av de fire 90°-vinklene (45°). Dette gir 8 punkter.' },
        ],
        solution: 'a) Side = radius, marker 6 punkter, b) Del sirkelen i 8 like deler med 45° vinkler',
        hints: ['Regulær sekskant: Sentralvinkelen er 60°. Regulær åttekant: Sentralvinkelen er 45°.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-4-4-ex-12-exercise',
      type: 'exercise',
      exercise: {
        id: '9-4-4-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Avanserte konstruksjoner',
        subTasks: [
          { label: 'a', task: 'Konstruer en trekant gitt siden $a = 6$ cm, vinkelen $B = 60°$ og vinkelen $C = 45°$.', solution: 'Tegn siden a. Konstruer 60° vinkel i B og 45° vinkel i C. Forleng vinkelbeina til de møtes i A.' },
          { label: 'b', task: 'Del et linjestykke AB i tre like deler.', solution: 'Tegn en hjelpelinje fra A i vilkårlig vinkel. Marker tre like avstander på hjelpelinjen (punktene P, Q, R). Trekk linje fra R til B. Konstruer parallelle linjer gjennom P og Q til denne linjen. Skjæringspunktene med AB deler AB i tre.' },
          { label: 'c', task: 'Konstruer tangenten til en sirkel fra et punkt P utenfor sirkelen.', solution: 'Tegn linjestykket fra P til sentrum S. Konstruer midtpunktet M på PS. Tegn sirkel med sentrum M og radius MS. Skjæringspunktene med den opprinnelige sirkelen gir tangentpunktene.' },
        ],
        solution: 'a) Bruk vinkelkonstruksjon, b) Del ved hjelp av parallelle linjer, c) Bruk Thales-sirkelen',
        hints: ['c) Thales setning: Vinkel i halvsirkel er alltid 90°'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-4-4-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '9-4-4-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-4-4-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Beskriv grunnleggende konstruksjoner med passer og linjal.',
            subTasks: [
              { label: 'a', task: 'Beskriv hvordan du konstruerer midtnormalen til et linjestykke $AB$.', solution: 'Sett passeren i $A$ med åpning større enn halvparten av $AB$, tegn bue over og under. Gjenta fra $B$ med samme åpning. Trekk linje gjennom skjæringspunktene.' },
              { label: 'b', task: 'Beskriv hvordan du halverer en vinkel.', solution: 'Sett passeren i toppunktet, tegn bue som skjærer begge vinkelbeina. Fra hvert skjæringspunkt, tegn buer med lik åpning som krysser hverandre. Trekk linje fra toppunktet gjennom krysningspunktet.' },
              { label: 'c', task: 'Beskriv hvordan du konstruerer en $60°$ vinkel.', solution: 'Tegn en stråle. Sett passeren i startpunktet, tegn en bue. Fra skjæringspunktet med strålen, tegn en ny bue med samme åpning. Trekk linje fra startpunktet gjennom det nye skjæringspunktet.' },
              { label: 'd', task: 'Beskriv hvordan du konstruerer en $90°$ vinkel i et punkt på en linje.', solution: 'Sett passeren i punktet $P$. Marker to like avstander til begge sider på linjen ($A$ og $B$). Konstruer midtnormalen til $AB$, som gir $90°$ vinkel i $P$.' },
              { label: 'e', task: 'Beskriv hvordan du overfører en lengde med passer.', solution: 'Sett passeren på det opprinnelige linjestykket for å fange opp lengden. Flytt passeren til den nye posisjonen og marker av.' },
              { label: 'f', task: 'Beskriv hvordan du konstruerer en $30°$ vinkel.', solution: 'Konstruer en $60°$ vinkel og halver den. $\\frac{60°}{2} = 30°$.' },
            ],
            solution: 'a) Buer fra begge endepunkter, b) Buer fra vinkelbeina, c) Likesidet trekant-prinsippet, d) Midtnormal, e) Overfør med passeråpning, f) Halver 60°',
            hideInlineSolution: true,
            hints: ['Midtnormalen bruker like passeråpninger fra begge endepunktene av linjestykket'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-4-4-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-4-4-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Konstruer trekanter med gitte mål.',
            subTasks: [
              { label: 'a', task: 'Konstruer en trekant med sider $5$ cm, $7$ cm og $9$ cm (SSS). Beskriv fremgangsmåten.', solution: 'Tegn den lengste siden ($9$ cm). Sett passeren i det ene endepunktet med åpning $5$ cm, tegn bue. Fra det andre endepunktet, passeråpning $7$ cm, tegn bue. Forbind skjæringspunktet med begge endepunktene.' },
              { label: 'b', task: 'Konstruer en trekant med sider $4$ cm og $6$ cm og mellomliggende vinkel $60°$ (SVS). Beskriv fremgangsmåten.', solution: 'Tegn siden $6$ cm. Konstruer $60°$ vinkel i det ene endepunktet. Marker $4$ cm langs vinkelbenet. Forbind med det andre endepunktet.' },
              { label: 'c', task: 'Konstruer en likesidet trekant med side $5$ cm. Beskriv fremgangsmåten.', solution: 'Tegn en side ($5$ cm). Sett passeren i hvert endepunkt med åpning $5$ cm og tegn buer. Skjæringspunktet er det tredje hjørnet.' },
              { label: 'd', task: 'Konstruer en rettvinklet trekant med kateter $3$ cm og $4$ cm. Beskriv fremgangsmåten.', solution: 'Tegn den ene kateten ($4$ cm). Konstruer $90°$ vinkel i et endepunkt. Marker $3$ cm langs normalen. Forbind med det andre endepunktet for hypotenusen.' },
              { label: 'e', task: 'Konstruer en likebent trekant med grunnlinje $6$ cm og like sider $5$ cm. Beskriv fremgangsmåten.', solution: 'Tegn grunnlinjen $6$ cm. Fra hvert endepunkt, sett passeråpning $5$ cm og tegn buer over grunnlinjen. Skjæringspunktet er toppunktet.' },
              { label: 'f', task: 'Konstruer en trekant med side $7$ cm og tilliggende vinkler $45°$ og $60°$ (VSV). Beskriv fremgangsmåten.', solution: 'Tegn siden $7$ cm. Konstruer $45°$ vinkel i det ene endepunktet (halver $90°$). Konstruer $60°$ i det andre. Forleng vinkelbeina til de møtes.' },
            ],
            solution: 'a) SSS med passer, b) SVS med vinkelkonstruksjon, c) Alle sider like, d) 90°-vinkler i endepunkter, e) Buer med like sider, f) VSV med vinkelkonstruksjoner',
            hideInlineSolution: true,
            hints: ['SSS: Tre sider gitt. SVS: To sider og mellomliggende vinkel. VSV: En side og begge tilliggende vinkler.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-4-4-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-4-4-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Konstruer spesielle vinkler og linjer.',
            subTasks: [
              { label: 'a', task: 'Konstruer en $120°$ vinkel. Beskriv fremgangsmåten.', solution: 'Konstruer en $60°$ vinkel. $120° = 180° - 60°$. Vinkelen på den andre siden av vinkelbenet er $120°$.' },
              { label: 'b', task: 'Konstruer en $45°$ vinkel. Beskriv fremgangsmåten.', solution: 'Konstruer en $90°$ vinkel (midtnormal), og halver den. $\\frac{90°}{2} = 45°$.' },
              { label: 'c', task: 'Konstruer en $150°$ vinkel. Beskriv fremgangsmåten.', solution: '$150° = 180° - 30°$. Konstruer $30°$ (halver $60°$) og bruk supplementvinkelen.' },
              { label: 'd', task: 'Konstruer en normal fra et punkt $P$ ned til en linje $l$ (der $P$ ikke ligger på $l$).', solution: 'Sett passeren i $P$, tegn en bue som skjærer $l$ i to punkter $A$ og $B$. Konstruer midtnormalen til $AB$. Denne går gjennom $P$ og er normal til $l$.' },
              { label: 'e', task: 'Konstruer en parallell linje gjennom et punkt $P$ til en gitt linje $l$.', solution: 'Tegn en linje gjennom $P$ som skjærer $l$ i et punkt $A$. Kopier vinkelen som dannes, men på motsatt side ved $P$. Denne nye linjen er parallell med $l$.' },
              { label: 'f', task: 'Finn midtpunktet til et linjestykke $AB$ ved konstruksjon.', solution: 'Konstruer midtnormalen til $AB$. Midtpunktet er der midtnormalen skjærer $AB$.' },
            ],
            solution: 'a) Supplementvinkel til 60°, b) Halver 90°, c) Supplementvinkel til 30°, d) Bue fra P, midtnormal, e) Kopiering av vinkel, f) Midtnormal',
            hideInlineSolution: true,
            hints: ['Supplementvinkler summerer til $180°$. Bruk dette til å konstruere stumpe vinkler.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-4-4-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-4-4-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Forklar hvorfor konstruksjonene fungerer.',
            subTasks: [
              { label: 'a', task: 'Forklar hvorfor midtnormalkonstruksjonen gir punkter som er like langt fra begge endepunktene.', solution: 'Alle punkter på midtnormalen er like langt fra $A$ og $B$ fordi konstruksjonen bruker like passeråpninger fra begge sider, noe som skaper to kongruente trekanter.' },
              { label: 'b', task: 'Forklar hvorfor vinkelhalveringskonstruksjonen fungerer.', solution: 'De to buene fra skjæringspunktene med vinkelbeina har lik radius, og fra disse buenes skjæringspunkt dannes to kongruente trekanter som deler vinkelen likt.' },
              { label: 'c', task: 'Forklar hvorfor $60°$-konstruksjonen gir nøyaktig $60°$.', solution: 'Tre like passeråpninger fra sentrum og fra buen skaper en likesidet trekant, og alle vinkler i en likesidet trekant er $60°$.' },
              { label: 'd', task: 'Hvorfor kan vi ikke konstruere alle vinkler med bare passer og linjal? Gi et eksempel på en vinkel som ikke kan konstrueres nøyaktig.', solution: 'Noen vinkler, som $20°$, kan ikke konstrueres med passer og linjal alene. Å tredele en vilkårlig vinkel (for eksempel $60° \\div 3 = 20°$) er umulig med bare disse verktøyene, noe som ble bevist i 1837.' },
              { label: 'e', task: 'Forklar hvorfor SSS-konstruksjonen alltid gir en unik trekant (hvis trekantsetningen er oppfylt).', solution: 'To sirkelbuer (fra hvert endepunkt) med gitte radier kan bare krysse i ett punkt over grunnlinjen. Trekantsetningen ($a + b > c$) sikrer at buene faktisk krysser.' },
            ],
            solution: 'a) Kongruente trekanter, b) Symmetri ved like buer, c) Likesidet trekant, d) F.eks. 20° kan ikke konstrueres, e) Unikt skjæringspunkt',
            hideInlineSolution: true,
            hints: ['Tenk på symmetri og kongruente trekanter som grunnlag for konstruksjonene'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-4-4-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-4-4-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Konstruer spesielle geometriske figurer.',
            subTasks: [
              { label: 'a', task: 'Beskriv hvordan du konstruerer omskrevet sirkel til en trekant (sirkelen som går gjennom alle tre hjørnene).', solution: 'Konstruer midtnormalen til to av sidene. Skjæringspunktet er sentrum i den omskrevne sirkelen. Sett passeren i sentrum med radius lik avstanden til et hjørne.' },
              { label: 'b', task: 'Beskriv hvordan du konstruerer innskrevet sirkel i en trekant (sirkelen som tangerer alle tre sidene).', solution: 'Konstruer vinkelhalveringslinjen i to av vinklene. Skjæringspunktet er sentrum. Fell en normal til en side for å finne radius.' },
              { label: 'c', task: 'Konstruer et kvadrat med side $4$ cm. Beskriv fremgangsmåten.', solution: 'Tegn en side ($4$ cm). Konstruer $90°$ vinkler i begge endepunktene. Marker $4$ cm langs begge normalene. Forbind toppunktene.' },
              { label: 'd', task: 'Konstruer en regulær sekskant innskrevet i en sirkel med radius $3$ cm.', solution: 'Tegn sirkel med radius $3$ cm. Siden i en regulær sekskant er lik radius. Marker $6$ punkter rundt sirkelen med passeråpning $3$ cm fra hvert forrige punkt. Forbind nabopunktene.' },
              { label: 'e', task: 'Beskriv hvordan du konstruerer trekantens tyngdepunkt (skjæringspunktet mellom medianene).', solution: 'Finn midtpunktet av hver side (midtnormal). Trekk linjer (medianer) fra hvert hjørne til midtpunktet av motstående side. Tyngdepunktet er der medianene møtes, og deler hver median i forholdet $2:1$.' },
              { label: 'f', task: 'Konstruer en likebent rettvinklet trekant med hypotenus $8$ cm.', solution: 'Tegn hypotenusen ($8$ cm). Konstruer midtnormalen. Fra midtpunktet, tegn halvsirkel med diameter = hypotenusen. Punktet der midtnormalen treffer halvsirkelen er toppunktet (Thales gir $90°$, midtnormal gir likebent).' },
            ],
            solution: 'a) Midtnormaler, b) Vinkelhalveringslinjer, c) 90°-vinkler i endepunkter, d) Side = radius, e) Medianer, f) Midtnormal og halvsirkel',
            hideInlineSolution: true,
            hints: ['Omskrevet sirkel: midtnormaler. Innskrevet sirkel: vinkelhalveringslinjer. Tyngdepunkt: medianer.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-4-4-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-4-4-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Krevende konstruksjonsoppgaver.',
            subTasks: [
              { label: 'a', task: 'Beskriv hvordan du deler et linjestykke $AB$ i tre like deler med passer og linjal.', solution: 'Tegn en hjelpestråle fra $A$ i vilkårlig vinkel. Marker tre like avstander ($P$, $Q$, $R$) langs strålen. Trekk linje fra $R$ til $B$. Konstruer parallelle linjer gjennom $P$ og $Q$ til $RB$. Skjæringspunktene med $AB$ deler den i tre.' },
              { label: 'b', task: 'Konstruer tangenten til en sirkel fra et punkt $P$ utenfor sirkelen. Beskriv og forklar.', solution: 'Finn midtpunktet $M$ av $PS$ (der $S$ er sentrum). Tegn sirkel med sentrum $M$ og radius $MS$. Skjæringspunktene med den opprinnelige sirkelen er tangentpunktene. Fungerer pga. Thales\' setning: vinkel i halvsirkel er $90°$.' },
              { label: 'c', task: 'Gitt en trekant $ABC$. Beskriv hvordan du konstruerer en formlik trekant med dobbelt så stort areal.', solution: 'Forholdstall for areal: $k^2 = 2$, altså $k = \\sqrt{2}$. Konstruer $\\sqrt{2}$ som diagonalen i et enhetskvadrat. Bruk denne lengden til å skalere alle sider med $\\sqrt{2}$.' },
              { label: 'd', task: 'Konstruer $\\sqrt{5}$ som et linjestykke, gitt et linjestykke med lengde $1$.', solution: 'Tegn en rettvinklet trekant med kateter $1$ og $2$. Da blir hypotenusen $\\sqrt{1^2 + 2^2} = \\sqrt{5}$.' },
            ],
            solution: 'a) Hjelpestråle og parallelle linjer, b) Thales-sirkelen, c) Skaler med $\\sqrt{2}$, d) Rettvinklet trekant med kateter 1 og 2',
            hideInlineSolution: true,
            hints: ['Thales\' setning sier at en vinkel i en halvsirkel alltid er $90°$. Bruk dette til tangent-konstruksjonen.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_9_5_1: TextbookChapter = {
  id: '9-5-1',
  courseId: '9',
  chapterNumber: '5.1',
  title: 'Renter',
  description: 'Beregne renter, rentesrente og innskudd.',
  estimatedMinutes: 50,
  competenceGoals: ['utforske og argumentere for korleis rekne med forhold, prosent og vekstfaktor'],
  content: [
    {
      id: '9-5-1-intro',
      type: 'text',
      content: `**Renter** er det du får betalt for å spare penger, eller det du må betale for å låne penger. Å forstå renter er viktig for god privatøkonomi.`,
    },
    {
      id: '9-5-1-def-1',
      type: 'definition',
      title: 'Enkel rente',
      content: `Ved **enkel rente** beregnes renten bare av det opprinnelige beløpet.

$$\\text{Rente} = K \\cdot r \\cdot t$$

der:
- $K$ er startkapitalen
- $r$ er rentesatsen (som desimaltall)
- $t$ er antall år`,
    },
    {
      id: '9-5-1-ex-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'Du setter inn 10 000 kr på en sparekonto med 3% årlig rente. Hvor mye rente får du etter 1 år?',
      solution: `$\\text{Rente} = K \\cdot r = 10\\,000 \\cdot 0{,}03 = 300$ kr

Etter 1 år har du $10\\,000 + 300 = 10\\,300$ kr.`,
    },
    {
      id: '9-5-1-ex-1-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beregn renten',
        subTasks: [
          { label: 'a', task: '5 000 kr med 4% rente i 1 år', solution: '$5000 \\cdot 0{,}04 = 200$ kr' },
          { label: 'b', task: '20 000 kr med 2,5% rente i 1 år', solution: '$20000 \\cdot 0{,}025 = 500$ kr' },
          { label: 'c', task: '15 000 kr med 3% rente i 2 år (enkel rente)', solution: '$15000 \\cdot 0{,}03 \\cdot 2 = 900$ kr' },
        ],
        solution: 'a) 200 kr, b) 500 kr, c) 900 kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-5-1-def-2',
      type: 'definition',
      title: 'Rentesrente (vekstfaktor)',
      content: `Ved **rentesrente** legges renten til kapitalen, og neste års rente beregnes av den nye summen.

$$K_n = K_0 \\cdot (1 + r)^n$$

der:
- $K_n$ er sluttverdien etter $n$ år
- $K_0$ er startkapitalen
- $(1 + r)$ er **vekstfaktoren**`,
    },
    {
      id: '9-5-1-ex-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'Du setter inn 10 000 kr med 3% årlig rente. Hva har du etter 3 år med rentesrente?',
      solution: `Vekstfaktor: $1 + 0{,}03 = 1{,}03$

$K_3 = 10\\,000 \\cdot 1{,}03^3 = 10\\,000 \\cdot 1{,}0927 \\approx 10\\,927$ kr

Med rentesrente har du 10 927 kr etter 3 år.

(Med enkel rente ville du hatt $10\\,000 + 900 = 10\\,900$ kr)`,
    },
    {
      id: '9-5-1-ex-2-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk vekstfaktor til å beregne',
        subTasks: [
          { label: 'a', task: '8 000 kr med 4% rente i 2 år', solution: '$8000 \\cdot 1{,}04^2 = 8\\,652{,}80$ kr' },
          { label: 'b', task: '25 000 kr med 2% rente i 5 år', solution: '$25000 \\cdot 1{,}02^5 \\approx 27\\,602$ kr' },
        ],
        solution: 'a) 8 652,80 kr, b) ca. 27 602 kr',
        hints: ['Vekstfaktor = 1 + rentesats som desimaltall'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-5-1-ex-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'Du vil ha 50 000 kr om 4 år. Banken gir 3% rente. Hvor mye må du sette inn nå?',
      solution: `Vi løser likningen for $K_0$:

$K_4 = K_0 \\cdot 1{,}03^4$

$50\\,000 = K_0 \\cdot 1{,}1255$

$K_0 = \\frac{50\\,000}{1{,}1255} \\approx 44\\,423$ kr

Du må sette inn ca. 44 423 kr nå.`,
    },
    {
      id: '9-5-1-ex-3-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn startkapitalen',
        subTasks: [
          { label: 'a', task: 'Du vil ha 30 000 kr om 3 år med 4% rente', solution: '$K_0 = \\frac{30000}{1{,}04^3} \\approx 26\\,670$ kr' },
          { label: 'b', task: 'Du vil ha 100 000 kr om 5 år med 2,5% rente', solution: '$K_0 = \\frac{100000}{1{,}025^5} \\approx 88\\,385$ kr' },
        ],
        solution: 'a) ca. 26 670 kr, b) ca. 88 385 kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-5-1-ex-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'Et innskudd på 20 000 kr har vokst til 24 000 kr på 5 år. Hva var renten?',
      solution: `Vi løser for vekstfaktoren:

$24\\,000 = 20\\,000 \\cdot (1+r)^5$

$(1+r)^5 = \\frac{24\\,000}{20\\,000} = 1{,}2$

$1 + r = \\sqrt[5]{1{,}2} \\approx 1{,}037$

$r \\approx 0{,}037 = 3{,}7\\%$

Renten var ca. 3,7% per år.`,
    },
    {
      id: '9-5-1-ex-4-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn renten',
        subTasks: [
          { label: 'a', task: 'Et innskudd har vokst fra 10 000 kr til 12 000 kr på 4 år', solution: 'Vekstfaktor $= \\sqrt[4]{1{,}2} \\approx 1{,}047$. Rente $\\approx 4{,}7\\%$' },
          { label: 'b', task: 'En investering på 50 000 kr er verdt 60 000 kr etter 3 år', solution: 'Vekstfaktor $= \\sqrt[3]{1{,}2} \\approx 1{,}063$. Rente $\\approx 6{,}3\\%$' },
        ],
        solution: 'a) ca. 4,7%, b) ca. 6,3%',
        hints: ['Bruk n-te rot for å finne vekstfaktoren'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-5-1-ex-5-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Enkel renteberegning',
        subTasks: [
          { label: 'a', task: 'Du setter inn 12 000 kr med 2% rente. Hvor mye rente får du etter 1 år?', solution: '$12000 \\cdot 0{,}02 = 240$ kr' },
          { label: 'b', task: 'Et innskudd på 7 500 kr gir 225 kr i rente på ett år. Hva er rentesatsen?', solution: '$\\frac{225}{7500} = 0{,}03 = 3\\%$' },
          { label: 'c', task: 'Hvor mye må du sette inn for å få 400 kr i rente på ett år med 4% rente?', solution: '$\\frac{400}{0{,}04} = 10\\,000$ kr' },
        ],
        solution: 'a) 240 kr, b) 3%, c) 10 000 kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-5-1-ex-6-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign enkel rente og rentesrente',
        subTasks: [
          { label: 'a', task: 'Beregn sluttverdien av 20 000 kr med 5% enkel rente i 3 år', solution: 'Rente: $20000 \\cdot 0{,}05 \\cdot 3 = 3000$ kr. Sluttverdi: $23\\,000$ kr' },
          { label: 'b', task: 'Beregn sluttverdien av 20 000 kr med 5% rentesrente i 3 år', solution: '$20000 \\cdot 1{,}05^3 = 20000 \\cdot 1{,}1576 \\approx 23\\,153$ kr' },
          { label: 'c', task: 'Hvor mye mer gir rentesrente enn enkel rente?', solution: '$23153 - 23000 = 153$ kr mer med rentesrente' },
        ],
        solution: 'a) 23 000 kr, b) ca. 23 153 kr, c) ca. 153 kr mer',
        hints: ['Ved enkel rente: Rente = K * r * t', 'Ved rentesrente: Sluttverdi = K * (1+r)^t'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-5-1-ex-7-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn vekstfaktoren',
        subTasks: [
          { label: 'a', task: 'Rentesats 6%', solution: 'Vekstfaktor $= 1 + 0{,}06 = 1{,}06$' },
          { label: 'b', task: 'Rentesats 2,5%', solution: 'Vekstfaktor $= 1 + 0{,}025 = 1{,}025$' },
          { label: 'c', task: 'Rentesats 0,8%', solution: 'Vekstfaktor $= 1 + 0{,}008 = 1{,}008$' },
          { label: 'd', task: 'Vekstfaktor 1,045. Hva er rentesatsen?', solution: 'Rentesats $= 1{,}045 - 1 = 0{,}045 = 4{,}5\\%$' },
        ],
        solution: 'a) 1,06, b) 1,025, c) 1,008, d) 4,5%',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-5-1-ex-8-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Praktiske sparemål',
        subTasks: [
          { label: 'a', task: 'Du setter inn 5 000 kr hvert år i 4 år med 3% rente. Hvor mye har du til slutt? (Første innskudd får 4 års rente, andre får 3 års rente osv.)', solution: '$5000 \\cdot 1{,}03^4 + 5000 \\cdot 1{,}03^3 + 5000 \\cdot 1{,}03^2 + 5000 \\cdot 1{,}03 = 5627 + 5464 + 5305 + 5150 \\approx 21\\,546$ kr' },
          { label: 'b', task: 'Hvor mye av dette er renter?', solution: 'Innskudd: $4 \\cdot 5000 = 20000$ kr. Renter: $21546 - 20000 = 1546$ kr' },
        ],
        solution: 'a) ca. 21 546 kr, b) ca. 1 546 kr i renter',
        hints: ['Hvert innskudd får forskjellig antall år med rente'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-5-1-ex-9-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn antall år',
        subTasks: [
          { label: 'a', task: 'Hvor mange år tar det før et innskudd å doble seg med 4% årlig rente?', solution: '$2 = 1{,}04^n$. Ved prøving: $1{,}04^{18} \\approx 2{,}03$. Det tar ca. 18 år.' },
          { label: 'b', task: 'Hvor mange år tar det før 15 000 kr å vokse til 20 000 kr med 3% rente?', solution: '$\\frac{20000}{15000} = 1{,}33 = 1{,}03^n$. Ved prøving: $1{,}03^{10} \\approx 1{,}34$. Ca. 10 år.' },
        ],
        solution: 'a) ca. 18 år, b) ca. 10 år',
        hints: ['Prøv forskjellige verdier for n til du finner riktig'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-5-1-ex-10-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Inflasjon og realverdi',
        subTasks: [
          { label: 'a', task: 'Inflasjonen er 2,5%. Hva koster en vare på 100 kr om 1 år?', solution: '$100 \\cdot 1{,}025 = 102{,}50$ kr' },
          { label: 'b', task: 'Du har 50 000 kr på konto med 1% rente. Inflasjonen er 3%. Hva er realverdien etter 1 år?', solution: 'Kontoverdi: $50000 \\cdot 1{,}01 = 50500$ kr. Realverdi: $\\frac{50500}{1{,}03} \\approx 49\\,029$ kr. Du taper kjøpekraft.' },
          { label: 'c', task: 'Hvilken rente trenger du for å beholde kjøpekraften med 3% inflasjon?', solution: 'Du trenger minst 3% rente for å beholde kjøpekraften.' },
        ],
        solution: 'a) 102,50 kr, b) ca. 49 029 kr (tap av kjøpekraft), c) minst 3%',
        hints: ['Realverdi viser hva pengene faktisk er verdt når vi tar hensyn til inflasjon'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-5-1-ex-11-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign sparealternativer',
        subTasks: [
          { label: 'a', task: 'Bank A: 2% rente. Bank B: 1,8% rente + 200 kr bonus ved årsslutt. Hvilket er best for 15 000 kr i 1 år?', solution: 'A: $15000 \\cdot 0{,}02 = 300$ kr. B: $15000 \\cdot 0{,}018 + 200 = 270 + 200 = 470$ kr. Bank B er best.' },
          { label: 'b', task: 'Hva om du sparer 50 000 kr? Hvilket alternativ er best da?', solution: 'A: $50000 \\cdot 0{,}02 = 1000$ kr. B: $50000 \\cdot 0{,}018 + 200 = 900 + 200 = 1100$ kr. Bank B er fortsatt best.' },
          { label: 'c', task: 'Ved hvilket innskudd gir begge bankene like mye?', solution: '$K \\cdot 0{,}02 = K \\cdot 0{,}018 + 200$. $0{,}002K = 200$. $K = 100\\,000$ kr.' },
        ],
        solution: 'a) Bank B (470 kr vs 300 kr), b) Bank B (1100 kr vs 1000 kr), c) 100 000 kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-5-1-ex-12-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-1-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammensatte renteproblemer',
        subTasks: [
          { label: 'a', task: 'Et innskudd på 30 000 kr har vokst til 38 000 kr på 6 år. Finn den årlige renten.', solution: 'Vekstfaktor: $\\sqrt[6]{\\frac{38000}{30000}} = \\sqrt[6]{1{,}267} \\approx 1{,}040$. Rente $\\approx 4{,}0\\%$' },
          { label: 'b', task: 'Du setter inn 10 000 kr. Etter 2 år er renten økt fra 2% til 3%. Hva har du etter totalt 5 år?', solution: 'Etter 2 år: $10000 \\cdot 1{,}02^2 = 10404$ kr. Etter 3 år til: $10404 \\cdot 1{,}03^3 \\approx 11\\,371$ kr' },
          { label: 'c', task: 'Beregn forskjellen om renten hadde vært 2,5% hele tiden', solution: 'Med 2,5% i 5 år: $10000 \\cdot 1{,}025^5 \\approx 11\\,314$ kr. Forskjell: $11371 - 11314 = 57$ kr mer med variabel rente.' },
        ],
        solution: 'a) ca. 4,0%, b) ca. 11 371 kr, c) ca. 57 kr mer',
        hints: ['Del opp problemet i perioder med forskjellig rente'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-5-1-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '9-5-1-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-5-1-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Beregn enkel rente.',
            subTasks: [
              { label: 'a', task: 'Du setter inn $5\\,000$ kr i banken til $3\\%$ rente. Hvor mye rente får du etter $1$ år?', solution: '$5000 \\cdot 0{,}03 = 150$ kr' },
              { label: 'b', task: 'Du setter inn $10\\,000$ kr til $2{,}5\\%$ rente. Hvor mye rente får du etter $1$ år?', solution: '$10000 \\cdot 0{,}025 = 250$ kr' },
              { label: 'c', task: 'Du setter inn $20\\,000$ kr til $4\\%$ rente. Hvor mye rente får du etter $1$ år?', solution: '$20000 \\cdot 0{,}04 = 800$ kr' },
              { label: 'd', task: 'Hvor mye har du totalt etter $1$ år med $8\\,000$ kr til $3{,}5\\%$ rente?', solution: '$8000 + 8000 \\cdot 0{,}035 = 8000 + 280 = 8280$ kr' },
              { label: 'e', task: 'Du setter inn $15\\,000$ kr til $2\\%$ rente. Hvor mye har du totalt etter $1$ år?', solution: '$15000 \\cdot 1{,}02 = 15\\,300$ kr' },
              { label: 'f', task: 'Du får $450$ kr i rente på et innskudd på $12\\,000$ kr. Hva er rentesatsen?', solution: '$r = \\frac{450}{12000} = 0{,}0375 = 3{,}75\\%$' },
            ],
            solution: 'a) 150 kr, b) 250 kr, c) 800 kr, d) 8280 kr, e) 15 300 kr, f) 3,75%',
            hideInlineSolution: true,
            hints: ['Rente = kapital $\\times$ rentesats. Vekstfaktor = $1 +$ rentesats som desimaltall.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-5-1-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-5-1-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Bruk vekstfaktor for renteberegning.',
            subTasks: [
              { label: 'a', task: 'Hva er vekstfaktoren ved $3\\%$ rente?', solution: '$1 + 0{,}03 = 1{,}03$' },
              { label: 'b', task: 'Hva er vekstfaktoren ved $5{,}5\\%$ rente?', solution: '$1 + 0{,}055 = 1{,}055$' },
              { label: 'c', task: 'Hva er vekstfaktoren ved $0{,}8\\%$ rente?', solution: '$1 + 0{,}008 = 1{,}008$' },
              { label: 'd', task: 'Rentesatsen er $2\\%$. Beregn $6\\,000$ kr etter $1$ år med vekstfaktor.', solution: '$6000 \\cdot 1{,}02 = 6120$ kr' },
              { label: 'e', task: 'Vekstfaktoren er $1{,}04$. Hva er rentesatsen?', solution: '$1{,}04 - 1 = 0{,}04 = 4\\%$' },
              { label: 'f', task: 'Vekstfaktoren er $1{,}025$. Beregn $50\\,000$ kr etter $1$ år.', solution: '$50000 \\cdot 1{,}025 = 51\\,250$ kr' },
            ],
            solution: 'a) 1,03, b) 1,055, c) 1,008, d) 6120 kr, e) 4%, f) 51 250 kr',
            hideInlineSolution: true,
            hints: ['Vekstfaktor $= 1 + \\frac{\\text{rentesats}}{100}$'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-5-1-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-5-1-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Beregn rentes rente over flere år.',
            subTasks: [
              { label: 'a', task: 'Du setter inn $10\\,000$ kr til $3\\%$ rente i $2$ år. Hva har du etter $2$ år (rentes rente)?', solution: '$10000 \\cdot 1{,}03^2 = 10000 \\cdot 1{,}0609 = 10\\,609$ kr' },
              { label: 'b', task: 'Du setter inn $5\\,000$ kr til $4\\%$ rente i $3$ år. Hva har du etter $3$ år?', solution: '$5000 \\cdot 1{,}04^3 = 5000 \\cdot 1{,}124864 \\approx 5\\,624$ kr' },
              { label: 'c', task: 'Du setter inn $20\\,000$ kr til $2\\%$ rente i $5$ år. Hva har du etter $5$ år?', solution: '$20000 \\cdot 1{,}02^5 = 20000 \\cdot 1{,}10408 \\approx 22\\,082$ kr' },
              { label: 'd', task: 'Du setter inn $8\\,000$ kr til $5\\%$ rente i $4$ år. Hvor mye rente har du fått totalt?', solution: '$8000 \\cdot 1{,}05^4 \\approx 9724$ kr. Rente: $9724 - 8000 = 1724$ kr' },
              { label: 'e', task: 'Sammenlign: $15\\,000$ kr i $3$ år. Enkel rente $3\\%$ vs. rentes rente $3\\%$. Hva er forskjellen?', solution: 'Enkel: $15000 + 15000 \\cdot 0{,}03 \\cdot 3 = 16\\,350$ kr. Rentes rente: $15000 \\cdot 1{,}03^3 \\approx 16\\,391$ kr. Forskjell: $41$ kr' },
              { label: 'f', task: 'Du setter inn $25\\,000$ kr til $2{,}5\\%$ rente i $6$ år. Hva har du etter $6$ år?', solution: '$25000 \\cdot 1{,}025^6 \\approx 25000 \\cdot 1{,}1597 \\approx 28\\,993$ kr' },
            ],
            solution: 'a) 10 609 kr, b) ca. 5 624 kr, c) ca. 22 082 kr, d) ca. 1724 kr rente, e) ca. 41 kr forskjell, f) ca. 28 993 kr',
            hideInlineSolution: true,
            hints: ['Rentes rente: $K \\cdot v^n$ der $v$ er vekstfaktoren og $n$ er antall år'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-5-1-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-5-1-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Finn ukjente størrelser i renteoppgaver.',
            subTasks: [
              { label: 'a', task: 'Et innskudd på $K$ kr til $3\\%$ rente har vokst til $11\\,593$ kr etter $5$ år. Finn startkapitalen $K$.', solution: '$K \\cdot 1{,}03^5 = 11593$. $K = \\frac{11593}{1{,}03^5} = \\frac{11593}{1{,}1593} = 10\\,000$ kr' },
              { label: 'b', task: 'Et innskudd på $20\\,000$ kr har vokst til $24\\,310$ kr etter $4$ år. Finn den årlige renten.', solution: '$20000 \\cdot v^4 = 24310$. $v^4 = 1{,}2155$. $v = \\sqrt[4]{1{,}2155} = 1{,}05$. Rente $= 5\\%$' },
              { label: 'c', task: 'Et innskudd på $30\\,000$ kr til $4\\%$ rente skal vokse til $40\\,000$ kr. Hvor mange år tar det?', solution: '$30000 \\cdot 1{,}04^n = 40000$. $1{,}04^n = \\frac{4}{3} \\approx 1{,}333$. Prøv: $1{,}04^7 \\approx 1{,}316$, $1{,}04^8 \\approx 1{,}369$. Det tar ca. $7{,}3$ år.' },
              { label: 'd', task: 'Etter $3$ år har du $13\\,310$ kr på konto til $4\\%$ rente. Hvor mye satte du inn?', solution: '$K = \\frac{13310}{1{,}04^3} = \\frac{13310}{1{,}124864} \\approx 11\\,833$ kr' },
              { label: 'e', task: 'Et beløp dobles på $12$ år med rentes rente. Finn den årlige renten.', solution: '$v^{12} = 2$. $v = \\sqrt[12]{2} \\approx 1{,}0595$. Rente $\\approx 5{,}95\\%$' },
            ],
            solution: 'a) 10 000 kr, b) 5%, c) ca. 7,3 år, d) ca. 11 833 kr, e) ca. 5,95%',
            hideInlineSolution: true,
            hints: ['For å finne startkapital: del sluttbeløpet på $v^n$. For å finne renten: ta $n$-te rot av forholdet.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-5-1-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-5-1-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Sammenlign sparealternativer og praktiske renteoppgaver.',
            subTasks: [
              { label: 'a', task: 'Bank A tilbyr $2{,}5\\%$ rente. Bank B tilbyr $2\\%$ rente pluss $300$ kr bonus hvert år. For et innskudd på $10\\,000$ kr i $1$ år, hvilken bank er best?', solution: 'A: $10000 \\cdot 0{,}025 = 250$ kr. B: $10000 \\cdot 0{,}02 + 300 = 200 + 300 = 500$ kr. Bank B er best.' },
              { label: 'b', task: 'Hva om innskuddet er $40\\,000$ kr? Hvilken bank er best da?', solution: 'A: $40000 \\cdot 0{,}025 = 1000$ kr. B: $40000 \\cdot 0{,}02 + 300 = 800 + 300 = 1100$ kr. Bank B er fortsatt best.' },
              { label: 'c', task: 'Ved hvilket innskudd gir Bank A og Bank B like mye rente/bonus?', solution: '$K \\cdot 0{,}025 = K \\cdot 0{,}02 + 300$. $0{,}005K = 300$. $K = 60\\,000$ kr.' },
              { label: 'd', task: 'Du sparer $1\\,000$ kr i måneden i $1$ år til $3\\%$ årlig rente. Omtrent hvor mye har du etter $12$ måneder? (Forenklet: anta at alt settes inn ved starten.)', solution: 'Forenklet: $12000 \\cdot 1{,}03 = 12\\,360$ kr. (I virkeligheten noe mindre fordi pengene settes inn gradvis.)' },
              { label: 'e', task: 'Inflasjonen er $2\\%$ og bankrenten er $3\\%$. Hva er realrenten (omtrentlig)?', solution: 'Realrente $\\approx 3\\% - 2\\% = 1\\%$. (Mer nøyaktig: $\\frac{1{,}03}{1{,}02} - 1 \\approx 0{,}98\\%$.)' },
              { label: 'f', task: 'Du har $50\\,000$ kr og renten er $2\\%$. Inflasjonen er $3\\%$. Hva er kjøpekraften etter $5$ år?', solution: 'Nominelt: $50000 \\cdot 1{,}02^5 \\approx 55\\,204$ kr. Realverdi: $\\frac{55204}{1{,}03^5} \\approx \\frac{55204}{1{,}1593} \\approx 47\\,616$ kr. Kjøpekraften synker.' },
            ],
            solution: 'a) Bank B, b) Bank B, c) 60 000 kr, d) ca. 12 360 kr, e) ca. 1%, f) ca. 47 616 kr',
            hideInlineSolution: true,
            hints: ['Realrente = nominell rente minus inflasjon (omtrentlig). Kjøpekraft kan synke selv om pengene vokser nominelt.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-5-1-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-5-1-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Krevende renteoppgaver.',
            subTasks: [
              { label: 'a', task: 'Et innskudd på $25\\,000$ kr har vokst til $32\\,000$ kr på $8$ år. Finn den årlige renten.', solution: '$v^8 = \\frac{32000}{25000} = 1{,}28$. $v = \\sqrt[8]{1{,}28} \\approx 1{,}0314$. Rente $\\approx 3{,}14\\%$' },
              { label: 'b', task: 'Du setter inn $15\\,000$ kr. Etter $3$ år øker renten fra $2\\%$ til $4\\%$. Hva har du etter totalt $7$ år?', solution: 'Etter $3$ år: $15000 \\cdot 1{,}02^3 \\approx 15\\,918$ kr. Etter $4$ år til: $15918 \\cdot 1{,}04^4 \\approx 18\\,626$ kr' },
              { label: 'c', task: 'Hvor lang tid tar det å tredoble et beløp med $5\\%$ årlig rente?', solution: '$1{,}05^n = 3$. $n = \\frac{\\ln 3}{\\ln 1{,}05} = \\frac{1{,}0986}{0{,}04879} \\approx 22{,}5$ år' },
              { label: 'd', task: 'To venner setter inn $100\\,000$ kr hver. Ola får $3\\%$ rente i $10$ år. Kari får $2\\%$ de første $5$ årene og $4{,}5\\%$ de neste $5$ årene. Hvem har mest?', solution: 'Ola: $100000 \\cdot 1{,}03^{10} \\approx 134\\,392$ kr. Kari: $100000 \\cdot 1{,}02^5 \\cdot 1{,}045^5 \\approx 110408 \\cdot 1{,}2462 \\approx 137\\,585$ kr. Kari har mest.' },
            ],
            solution: 'a) ca. 3,14%, b) ca. 18 626 kr, c) ca. 22,5 år, d) Kari (ca. 137 585 kr vs. 134 392 kr)',
            hideInlineSolution: true,
            hints: ['For å finne antall år: bruk at $v^n = \\frac{\\text{sluttbeløp}}{\\text{startbeløp}}$ og løs for $n$ med prøving eller logaritmer.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_9_5_2: TextbookChapter = {
  id: '9-5-2',
  courseId: '9',
  chapterNumber: '5.2',
  title: 'Lån',
  description: 'Forstå og beregne lån, avdrag og terminbeløp.',
  estimatedMinutes: 50,
  competenceGoals: ['utforske og argumentere for korleis rekne med forhold, prosent og vekstfaktor'],
  content: [
    {
      id: '9-5-2-intro',
      type: 'text',
      content: `Når du låner penger, må du betale tilbake både lånet (avdrag) og renter. Det finnes forskjellige typer lån med ulike betalingsplaner.`,
    },
    {
      id: '9-5-2-def-1',
      type: 'definition',
      title: 'Lånetyper',
      content: `**Serielån**: Like store avdrag hver termin. Terminbeløpet synker over tid fordi rentene blir mindre.

**Annuitetslån**: Like store terminbeløp. I starten er mesteparten renter, mot slutten mest avdrag.

**Terminbeløp** = Avdrag + Rente`,
    },
    {
      id: '9-5-2-ex-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'Du låner 60 000 kr som serielån over 3 år med 6% årlig rente. Hva blir terminbeløpet første og andre år?',
      solution: `**Årlig avdrag**: $\\frac{60\\,000}{3} = 20\\,000$ kr

**År 1**:
- Rente: $60\\,000 \\cdot 0{,}06 = 3\\,600$ kr
- Terminbeløp: $20\\,000 + 3\\,600 = 23\\,600$ kr
- Restgjeld: $60\\,000 - 20\\,000 = 40\\,000$ kr

**År 2**:
- Rente: $40\\,000 \\cdot 0{,}06 = 2\\,400$ kr
- Terminbeløp: $20\\,000 + 2\\,400 = 22\\,400$ kr`,
    },
    {
      id: '9-5-2-ex-1-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beregn for serielån',
        subTasks: [
          { label: 'a', task: 'Lån: 40 000 kr, 4 år, 5% rente. Finn årlig avdrag.', solution: '$\\frac{40000}{4} = 10\\,000$ kr' },
          { label: 'b', task: 'Fra a): Finn terminbeløpet første år', solution: 'Rente: $40000 \\cdot 0{,}05 = 2000$ kr. Terminbeløp: $12\\,000$ kr' },
          { label: 'c', task: 'Fra a): Finn terminbeløpet andre år', solution: 'Restgjeld: 30 000 kr. Rente: 1 500 kr. Terminbeløp: $11\\,500$ kr' },
        ],
        solution: 'a) 10 000 kr, b) 12 000 kr, c) 11 500 kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-5-2-ex-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'Sett opp nedbetalingsplan for serielån: 30 000 kr, 3 år, 4% rente.',
      solution: `| År | Gjeld ved start | Rente | Avdrag | Terminbeløp | Gjeld ved slutt |
|-----|-----------------|-------|--------|-------------|-----------------|
| 1   | 30 000 kr      | 1 200 | 10 000 | 11 200 kr   | 20 000 kr       |
| 2   | 20 000 kr      | 800   | 10 000 | 10 800 kr   | 10 000 kr       |
| 3   | 10 000 kr      | 400   | 10 000 | 10 400 kr   | 0 kr            |

**Sum renter**: $1\\,200 + 800 + 400 = 2\\,400$ kr
**Totalt betalt**: $30\\,000 + 2\\,400 = 32\\,400$ kr`,
    },
    {
      id: '9-5-2-ex-2-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett opp nedbetalingsplan for serielån: 24 000 kr, 4 år, 5% rente',
        subTasks: [
          { label: 'a', task: 'Fyll ut nedbetalingsplanen (avdrag per år, rente per år, terminbeløp)', solution: 'Avdrag: 6000 kr/år. År 1: Rente 1200, term 7200. År 2: Rente 900, term 6900. År 3: Rente 600, term 6600. År 4: Rente 300, term 6300.' },
          { label: 'b', task: 'Finn totale rentekostnader', solution: '$1200 + 900 + 600 + 300 = 3\\,000$ kr' },
        ],
        solution: 'a) Se plan, b) 3 000 kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-5-2-text-2',
      type: 'text',
      content: `### Sammenligne lånekostnader

Effektiv rente tar hensyn til alle kostnader ved et lån, inkludert gebyrer.`,
    },
    {
      id: '9-5-2-ex-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'Du skal kjøpe en telefon til 8 000 kr. Butikken tilbyr betaling over 12 måneder med 300 kr per måned rentefritt, men 500 kr i opprettelsesgebyr. Hva koster lånet totalt?',
      solution: `**Total betaling**: $12 \\cdot 300 + 500 = 3\\,600 + 500 = 4\\,100$ kr i tillegg til 8 000 kr?

Vent - la oss sjekke: $12 \\cdot 300 = 3\\,600$ kr. Det er mindre enn 8 000 kr.

Oppgaven må bety: Du betaler totalt $12 \\cdot 300 = 3\\,600$ kr som avdrag på de 8 000 kr? Nei, det gir ikke mening.

La oss anta: Du betaler 300 kr ekstra per måned.
**Totalkostnad**: $8\\,000 + 12 \\cdot 300 + 500 = 8\\,000 + 3\\,600 + 500 = 12\\,100$ kr

**Merkostnad**: $12\\,100 - 8\\,000 = 4\\,100$ kr ekstra for å dele betalingen.`,
    },
    {
      id: '9-5-2-ex-3-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign lånekostnadene',
        subTasks: [
          { label: 'a', task: 'Du låner 50 000 kr i 2 år med 8% rente. Finn totale rentekostnader med serielån.', solution: 'År 1: 4000 kr, År 2: 2000 kr. Totalt: $6\\,000$ kr' },
          { label: 'b', task: 'Hva ville rentene vært med enkel rente (8% av 50 000 i 2 år)?', solution: '$50000 \\cdot 0{,}08 \\cdot 2 = 8\\,000$ kr' },
        ],
        solution: 'a) 6 000 kr, b) 8 000 kr (serielån er billigere)',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-5-2-ex-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'Et forbrukslån på 20 000 kr har nominell rente 18% og et etableringsgebyr på 900 kr. Hva blir den reelle kostnaden første år?',
      solution: `**Rentekostnad**: $20\\,000 \\cdot 0{,}18 = 3\\,600$ kr

**Totale kostnader første år**: $3\\,600 + 900 = 4\\,500$ kr

**Reell rentekostnad**: $\\frac{4\\,500}{20\\,000} = 0{,}225 = 22{,}5\\%$

Den effektive renten er mye høyere enn den nominelle renten på grunn av gebyret!`,
    },
    {
      id: '9-5-2-ex-4-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Beregn reelle lånekostnader',
        subTasks: [
          { label: 'a', task: 'Kredittkort: 15 000 kr gjeld, 20% rente, 500 kr årsgebyr. Hva er reell rente?', solution: 'Kostnader: $3000 + 500 = 3500$ kr. Reell: $\\frac{3500}{15000} \\approx 23{,}3\\%$' },
          { label: 'b', task: 'Sammenlign: Lån A: 10 000 kr, 12% rente, 0 gebyr. Lån B: 10 000 kr, 10% rente, 300 kr gebyr.', solution: 'A: 1200 kr. B: 1000 + 300 = 1300 kr. Lån A er billigere.' },
        ],
        solution: 'a) ca. 23,3%, b) Lån A er 100 kr billigere',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-5-2-ex-5-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Grunnleggende lånebegreper',
        subTasks: [
          { label: 'a', task: 'Du låner 80 000 kr som serielån over 4 år. Hvor stort er hvert avdrag?', solution: '$\\frac{80000}{4} = 20\\,000$ kr per år' },
          { label: 'b', task: 'Fra a): Med 5% rente, hva er renten første år?', solution: '$80000 \\cdot 0{,}05 = 4\\,000$ kr' },
          { label: 'c', task: 'Fra a) og b): Hva er terminbeløpet første år?', solution: '$20000 + 4000 = 24\\,000$ kr' },
        ],
        solution: 'a) 20 000 kr, b) 4 000 kr, c) 24 000 kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-5-2-ex-6-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Nedbetalingsplan for serielån',
        subTasks: [
          { label: 'a', task: 'Lån: 36 000 kr, 3 år, 6% rente. Sett opp nedbetalingsplan med gjeld, rente, avdrag og terminbeløp for hvert år.', solution: 'Avdrag: 12 000 kr/år. År 1: Rente 2160 kr, term 14160 kr. År 2: Gjeld 24000 kr, rente 1440 kr, term 13440 kr. År 3: Gjeld 12000 kr, rente 720 kr, term 12720 kr.' },
          { label: 'b', task: 'Finn totale rentekostnader', solution: '$2160 + 1440 + 720 = 4\\,320$ kr' },
          { label: 'c', task: 'Hvor mye betaler du totalt?', solution: '$36000 + 4320 = 40\\,320$ kr' },
        ],
        solution: 'a) Se plan, b) 4 320 kr, c) 40 320 kr totalt',
        hints: ['Renten beregnes av restgjelden ved starten av hvert år'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-5-2-ex-7-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Restgjeld',
        subTasks: [
          { label: 'a', task: 'Du har lånt 100 000 kr med 10 000 kr i avdrag per år. Hva er restgjelden etter 3 år?', solution: '$100000 - 3 \\cdot 10000 = 70\\,000$ kr' },
          { label: 'b', task: 'Et lån på 60 000 kr over 5 år (serielån). Hva er restgjelden etter 2 år?', solution: 'Avdrag: $\\frac{60000}{5} = 12000$ kr/år. Restgjeld: $60000 - 2 \\cdot 12000 = 36\\,000$ kr' },
          { label: 'c', task: 'Fra b): Hvor mye rente betaler du i år 3 med 4% rente?', solution: '$36000 \\cdot 0{,}04 = 1\\,440$ kr' },
        ],
        solution: 'a) 70 000 kr, b) 36 000 kr, c) 1 440 kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-5-2-ex-8-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Billån',
        subTasks: [
          { label: 'a', task: 'Du låner 150 000 kr til bil med 7% rente over 5 år (serielån). Hva er avdraget per år?', solution: '$\\frac{150000}{5} = 30\\,000$ kr per år' },
          { label: 'b', task: 'Beregn terminbeløpet for år 1, 2 og 3', solution: 'År 1: $30000 + 10500 = 40500$ kr. År 2: Restgjeld 120000, rente 8400, term 38400 kr. År 3: Restgjeld 90000, rente 6300, term 36300 kr.' },
          { label: 'c', task: 'Hvor mye betaler du totalt i renter over hele lånetiden?', solution: '$10500 + 8400 + 6300 + 4200 + 2100 = 31\\,500$ kr' },
        ],
        solution: 'a) 30 000 kr/år, b) År 1: 40 500 kr, År 2: 38 400 kr, År 3: 36 300 kr, c) 31 500 kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-5-2-ex-9-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign lånetilbud',
        subTasks: [
          { label: 'a', task: 'Bank A: 50 000 kr, 5% rente, 2 år, 0 kr gebyr. Bank B: 50 000 kr, 4% rente, 2 år, 1 500 kr opprettelsesgebyr. Hvilket lån er billigst?', solution: 'A: Renter år 1: 2500, år 2: 1250. Sum: 3750 kr. B: Renter år 1: 2000, år 2: 1000. Sum: 3000 + 1500 = 4500 kr. Bank A er billigst.' },
          { label: 'b', task: 'Ved hvilket lånebeløp gir de to bankene like total kostnad?', solution: 'La x = lånebeløp. A: $x \\cdot 0{,}05 \\cdot 1{,}5 = 0{,}075x$. B: $x \\cdot 0{,}04 \\cdot 1{,}5 + 1500 = 0{,}06x + 1500$. $0{,}015x = 1500$. $x = 100\\,000$ kr.' },
        ],
        solution: 'a) Bank A er 750 kr billigere, b) 100 000 kr',
        hints: ['For serielån: Total rente er ca. (n+1)/(2n) * K * r * n, der n er antall år'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-5-2-ex-10-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Avdragsfrihet',
        subTasks: [
          { label: 'a', task: 'Du har et lån på 200 000 kr med 4% rente. Du får 1 år avdragsfrihet. Hvor mye rente betaler du dette året?', solution: '$200000 \\cdot 0{,}04 = 8\\,000$ kr' },
          { label: 'b', task: 'Etter avdragsfritt år betaler du som serielån over 4 år. Hva er avdraget per år?', solution: '$\\frac{200000}{4} = 50\\,000$ kr per år' },
          { label: 'c', task: 'Sammenlign totale rentekostnader med og uten avdragsfritt år', solution: 'Med: 8000 + (4000+3000+2000+1000) = 18000 kr. Uten: 8000+6000+4000+2000 = 20000 kr. Men med avdragsfrihet tar det 5 år totalt, så renten er 8000 kr for det "ekstra" året.' },
        ],
        solution: 'a) 8 000 kr, b) 50 000 kr/år, c) Med avdragsfrihet: 18 000 kr + 1 års ekstra ventetid',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-5-2-ex-11-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forbrukslån vs. sparelån',
        subTasks: [
          { label: 'a', task: 'Du vil kjøpe noe til 15 000 kr. Forbrukslån: 15% rente, betales ned over 1 år. Hva koster det?', solution: 'Avdrag: 15000 kr. Rente: $15000 \\cdot 0{,}15 = 2250$ kr. Totalt: 17 250 kr' },
          { label: 'b', task: 'Alternativ: Spare 1 250 kr/mnd i 12 måneder med 3% rente. Hva har du spart?', solution: 'Uten rente: $12 \\cdot 1250 = 15000$ kr. Med rente (ca. halvparten av tiden): $15000 \\cdot 1{,}015 \\approx 15\\,225$ kr' },
          { label: 'c', task: 'Hvor mye tjener du på å spare i stedet for å låne?', solution: 'Lån koster 17250 kr, sparing koster 15000 kr (du får varen etter 1 år). Besparelse: ca. 2250 kr + renteinntekt.' },
        ],
        solution: 'a) 17 250 kr totalt, b) ca. 15 225 kr, c) ca. 2 250 kr + du eier pengene',
        hints: ['Sammenlign totalkostnader og tenk på hva som er smartest'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-5-2-ex-12-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-2-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Boliglån (forenklet)',
        subTasks: [
          { label: 'a', task: 'Et boliglån på 2 000 000 kr skal betales over 25 år med serielån og 3% rente. Hva er årlig avdrag?', solution: '$\\frac{2000000}{25} = 80\\,000$ kr per år' },
          { label: 'b', task: 'Hva er terminbeløpet første år?', solution: 'Rente: $2000000 \\cdot 0{,}03 = 60000$ kr. Terminbeløp: $80000 + 60000 = 140\\,000$ kr' },
          { label: 'c', task: 'Hva er terminbeløpet år 10? (Hint: Finn først restgjelden)', solution: 'Restgjeld: $2000000 - 9 \\cdot 80000 = 1\\,280\\,000$ kr. Rente: $1280000 \\cdot 0{,}03 = 38400$ kr. Term: $80000 + 38400 = 118\\,400$ kr' },
          { label: 'd', task: 'Anslå totale rentekostnader over hele lånetiden', solution: 'Gjennomsnittlig gjeld: ca. 1 000 000 kr. Totale renter: ca. $1000000 \\cdot 0{,}03 \\cdot 25 = 750\\,000$ kr (forenklet anslag)' },
        ],
        solution: 'a) 80 000 kr/år, b) 140 000 kr, c) 118 400 kr, d) ca. 750 000 kr',
        hints: ['Ved serielån synker renten lineært over tid', 'Totale renter kan anslås med gjennomsnittlig gjeld'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-5-2-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '9-5-2-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-5-2-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Beregn terminbeløp for serielån',
            subTasks: [
              { label: 'a', task: 'Et lån på $60\\,000$ kr skal betales tilbake over 3 år med serielån og $5\\%$ rente. Hva er det årlige avdraget?', solution: '$\\frac{60000}{3} = 20\\,000$ kr per år' },
              { label: 'b', task: 'Hva er renten det første året?', solution: '$60000 \\cdot 0{,}05 = 3000$ kr' },
              { label: 'c', task: 'Hva er terminbeløpet det første året?', solution: '$20000 + 3000 = 23\\,000$ kr' },
              { label: 'd', task: 'Hva er restgjelden etter første år?', solution: '$60000 - 20000 = 40\\,000$ kr' },
              { label: 'e', task: 'Hva er renten det andre året?', solution: '$40000 \\cdot 0{,}05 = 2000$ kr' },
              { label: 'f', task: 'Hva er terminbeløpet det andre året?', solution: '$20000 + 2000 = 22\\,000$ kr' },
            ],
            solution: 'a) 20 000 kr, b) 3 000 kr, c) 23 000 kr, d) 40 000 kr, e) 2 000 kr, f) 22 000 kr',
            hideInlineSolution: true,
            hints: ['Avdrag = Lånebeløp delt på antall år. Rente beregnes av restgjelden.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-5-2-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-5-2-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Enkel renteberegning på lån',
            subTasks: [
              { label: 'a', task: 'Du låner $10\\,000$ kr til $4\\%$ rente i 1 år. Hvor mye rente betaler du?', solution: '$10000 \\cdot 0{,}04 = 400$ kr' },
              { label: 'b', task: 'Hva blir totalt tilbakebetalt?', solution: '$10000 + 400 = 10\\,400$ kr' },
              { label: 'c', task: 'Du låner $25\\,000$ kr til $8\\%$ rente i 1 år. Hvor mye rente betaler du?', solution: '$25000 \\cdot 0{,}08 = 2000$ kr' },
              { label: 'd', task: 'Hva blir totalt tilbakebetalt?', solution: '$25000 + 2000 = 27\\,000$ kr' },
              { label: 'e', task: 'Du låner $50\\,000$ kr til $6\\%$ rente i 1 år. Hvor mye rente betaler du?', solution: '$50000 \\cdot 0{,}06 = 3000$ kr' },
              { label: 'f', task: 'Rangér de tre lånene etter hvor mye rente du betaler.', solution: 'Mest rente: e) $3000$ kr, deretter c) $2000$ kr, til slutt a) $400$ kr.' },
            ],
            solution: 'a) 400 kr, b) 10 400 kr, c) 2 000 kr, d) 27 000 kr, e) 3 000 kr, f) e > c > a',
            hideInlineSolution: true,
            hints: ['Rente = lånebeløp ganger rentesats'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-5-2-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-5-2-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Forstå forskjellen mellom avdrag og rente',
            subTasks: [
              { label: 'a', task: 'Et lån på $80\\,000$ kr betales ned over 4 år med serielån. Hva er det årlige avdraget?', solution: '$\\frac{80000}{4} = 20\\,000$ kr per år' },
              { label: 'b', task: 'Renten er $6\\%$. Hva er renten første år?', solution: '$80000 \\cdot 0{,}06 = 4800$ kr' },
              { label: 'c', task: 'Hva er terminbeløpet første år?', solution: '$20000 + 4800 = 24\\,800$ kr' },
              { label: 'd', task: 'Hva er restgjelden etter to år?', solution: '$80000 - 2 \\cdot 20000 = 40\\,000$ kr' },
              { label: 'e', task: 'Hva er renten tredje år?', solution: 'Restgjeld etter 2 år: $40\\,000$ kr. Rente: $40000 \\cdot 0{,}06 = 2400$ kr' },
              { label: 'f', task: 'Hva er terminbeløpet fjerde (siste) år?', solution: 'Restgjeld etter 3 år: $20\\,000$ kr. Rente: $20000 \\cdot 0{,}06 = 1200$ kr. Terminbeløp: $20000 + 1200 = 21\\,200$ kr' },
            ],
            solution: 'a) 20 000 kr, b) 4 800 kr, c) 24 800 kr, d) 40 000 kr, e) 2 400 kr, f) 21 200 kr',
            hideInlineSolution: true,
            hints: ['Avdrag er det du betaler ned på gjelden. Rente beregnes av restgjelden.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-5-2-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-5-2-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Sammenlign serielån og annuitetslån',
            subTasks: [
              { label: 'a', task: 'Et serielån på $120\\,000$ kr over 4 år med $5\\%$ rente. Regn ut terminbeløpet for hvert av de 4 årene.', solution: 'Avdrag: $30\\,000$ kr/år. År 1: $30000 + 6000 = 36\\,000$ kr. År 2: $30000 + 4500 = 34\\,500$ kr. År 3: $30000 + 3000 = 33\\,000$ kr. År 4: $30000 + 1500 = 31\\,500$ kr.' },
              { label: 'b', task: 'Finn totale rentekostnader for serielånet.', solution: '$6000 + 4500 + 3000 + 1500 = 15\\,000$ kr' },
              { label: 'c', task: 'Et annuitetslån på $120\\,000$ kr har fast terminbeløp på $33\\,872$ kr per år i 4 år. Finn totale rentekostnader.', solution: 'Totalt betalt: $4 \\cdot 33872 = 135\\,488$ kr. Renter: $135488 - 120000 = 15\\,488$ kr' },
              { label: 'd', task: 'Hvilket lån gir lavest totale rentekostnader? Forklar hvorfor.', solution: 'Serielån gir lavere renter ($15\\,000$ kr vs. $15\\,488$ kr) fordi gjelden reduseres raskere med høyere avdrag i starten.' },
              { label: 'e', task: 'Hvilket lån passer best for en person med stram økonomi? Begrunn.', solution: 'Annuitetslån passer bedre fordi terminbeløpet er likt hver gang, og det er lavere enn serielånets første termin.' },
            ],
            solution: 'a) 36000, 34500, 33000, 31500 kr, b) 15 000 kr, c) 15 488 kr, d) Serielån er billigst, e) Annuitetslån gir jevnere kostnader',
            hideInlineSolution: true,
            hints: ['Serielån: avdraget er likt, terminbeløpet synker. Annuitetslån: terminbeløpet er likt.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-5-2-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-5-2-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Nedbetalingsplan for serielån',
            subTasks: [
              { label: 'a', task: 'Et billån på $200\\,000$ kr betales ned over 5 år med serielån og $4\\%$ rente. Sett opp en tabell med avdrag, rente, terminbeløp og restgjeld for hvert år.', solution: 'Avdrag: $40\\,000$ kr/år. År 1: rente $8000$, term $48000$, rest $160000$. År 2: rente $6400$, term $46400$, rest $120000$. År 3: rente $4800$, term $44800$, rest $80000$. År 4: rente $3200$, term $43200$, rest $40000$. År 5: rente $1600$, term $41600$, rest $0$.' },
              { label: 'b', task: 'Finn totale rentekostnader over hele låneperioden.', solution: '$8000 + 6400 + 4800 + 3200 + 1600 = 24\\,000$ kr' },
              { label: 'c', task: 'Hva er den totale kostnaden for bilen (lån + renter)?', solution: '$200000 + 24000 = 224\\,000$ kr' },
              { label: 'd', task: 'Hvis du i stedet sparer $40\\,000$ kr/år i 5 år med $3\\%$ rente, har du nok til bilen?', solution: 'Omtrentlig: $5 \\cdot 40000 = 200\\,000$ kr pluss renter. Du slipper rentekostnader på $24\\,000$ kr og tjener sparerenter i tillegg.' },
            ],
            solution: 'a) Se tabell, b) 24 000 kr, c) 224 000 kr, d) Ja, du sparer ca. 24 000 kr pluss renteinntekter',
            hideInlineSolution: true,
            hints: ['Sett opp tabellen rad for rad: beregn rente av restgjeld, deretter terminbeløp.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-5-2-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-5-2-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Kompleks låneplanlegging',
            subTasks: [
              { label: 'a', task: 'Familien Olsen skal kjøpe bolig til $3\\,000\\,000$ kr. De har spart $450\\,000$ kr i egenkapital (15%). Hvor mye må de låne?', solution: '$3000000 - 450000 = 2\\,550\\,000$ kr' },
              { label: 'b', task: 'Lånet er et serielån over 25 år med $3{,}5\\%$ rente. Hva er det årlige avdraget, og hva er terminbeløpet det første året?', solution: 'Avdrag: $\\frac{2550000}{25} = 102\\,000$ kr/år. Rente år 1: $2550000 \\cdot 0{,}035 = 89\\,250$ kr. Terminbeløp: $102000 + 89250 = 191\\,250$ kr.' },
              { label: 'c', task: 'Hva er terminbeløpet etter 10 år? Sammenlign med det første.', solution: 'Restgjeld etter 10 år: $2550000 - 10 \\cdot 102000 = 1\\,530\\,000$ kr. Rente: $1530000 \\cdot 0{,}035 = 53\\,550$ kr. Term: $102000 + 53550 = 155\\,550$ kr. Nedgang på $35\\,700$ kr.' },
              { label: 'd', task: 'Anslå totale rentekostnader over 25 år. (Hint: bruk gjennomsnittlig restgjeld.)', solution: 'Gjennomsnittlig restgjeld: ca. $\\frac{2550000}{2} = 1\\,275\\,000$ kr. Totale renter: ca. $1275000 \\cdot 0{,}035 \\cdot 25 = 1\\,115\\,625$ kr.' },
            ],
            solution: 'a) 2 550 000 kr, b) 191 250 kr/år, c) 155 550 kr/år, d) ca. 1 115 625 kr',
            hideInlineSolution: true,
            hints: ['Egenkapital trekkes fra boligprisen for å finne lånebeløpet.', 'Gjennomsnittlig restgjeld er omtrent halvparten av opprinnelig lån for serielån.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_9_5_3: TextbookChapter = {
  id: '9-5-3',
  courseId: '9',
  chapterNumber: '5.3',
  title: 'Budsjett',
  description: 'Sette opp personlige budsjetter og forstå privatøkonomi.',
  estimatedMinutes: 45,
  competenceGoals: ['utforske og argumentere for korleis rekne med forhold, prosent og vekstfaktor'],
  content: [
    {
      id: '9-5-3-intro',
      type: 'text',
      content: `Et **budsjett** er en plan for inntekter og utgifter over en periode. Å ha oversikt over økonomien din hjelper deg å unngå gjeld og nå sparemål.`,
    },
    {
      id: '9-5-3-def-1',
      type: 'definition',
      title: 'Budsjettbegreper',
      content: `**Inntekt**: Penger du får (lønn, lommepenger, stipend)

**Faste utgifter**: Utgifter som er like hver måned (husleie, abonnementer)

**Variable utgifter**: Utgifter som varierer (mat, klær, fritid)

**Overskudd** = Inntekt - Utgifter (positivt = du sparer, negativt = underskudd)`,
    },
    {
      id: '9-5-3-ex-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'Emil har disse månedlige postene: Lønn 8 000 kr, husleie 3 500 kr, mat 2 000 kr, mobil 300 kr, strømning 150 kr. Hva er overskuddet?',
      solution: `**Inntekt**: 8 000 kr

**Utgifter**:
- Husleie: 3 500 kr
- Mat: 2 000 kr
- Mobil: 300 kr
- Strømning: 150 kr
- **Sum**: 5 950 kr

**Overskudd**: $8\\,000 - 5\\,950 = 2\\,050$ kr`,
    },
    {
      id: '9-5-3-ex-1-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beregn overskudd/underskudd',
        subTasks: [
          { label: 'a', task: 'Inntekt: 6 000 kr. Utgifter: Leie 2 500 kr, mat 1 500 kr, transport 800 kr, fritid 1 000 kr', solution: 'Utgifter: 5 800 kr. Overskudd: 200 kr' },
          { label: 'b', task: 'Inntekt: 12 000 kr. Utgifter: Leie 5 000 kr, mat 3 000 kr, transport 1 500 kr, annet 3 000 kr', solution: 'Utgifter: 12 500 kr. Underskudd: 500 kr' },
        ],
        solution: 'a) 200 kr overskudd, b) 500 kr underskudd',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-5-3-ex-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'Sara vil spare 24 000 kr til en reise om 12 måneder. Hun tjener 15 000 kr i måneden. Hvor mye kan hun bruke til andre utgifter?',
      solution: `**Månedlig sparing**: $\\frac{24\\,000}{12} = 2\\,000$ kr

**Tilgjengelig for utgifter**: $15\\,000 - 2\\,000 = 13\\,000$ kr

Sara kan bruke maksimalt 13 000 kr per måned til andre utgifter.`,
    },
    {
      id: '9-5-3-ex-2-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Planlegg sparing',
        subTasks: [
          { label: 'a', task: 'Du vil spare 6 000 kr på 6 måneder. Inntekt 4 000 kr/mnd. Hvor mye kan du bruke?', solution: 'Sparing: 1 000 kr/mnd. Kan bruke: 3 000 kr/mnd' },
          { label: 'b', task: 'Du har 10 000 kr i måneden og vil spare 20%. Hvor mye sparer du per år?', solution: 'Månedlig: $10000 \\cdot 0{,}20 = 2000$ kr. Årlig: 24 000 kr' },
        ],
        solution: 'a) 3 000 kr/mnd, b) 24 000 kr/år',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-5-3-text-2',
      type: 'text',
      content: `### Budsjettfordeling

En vanlig tommelfingerregel er 50/30/20-regelen:
- 50% til nødvendige utgifter (bolig, mat, transport)
- 30% til ønsker (fritid, underholdning)
- 20% til sparing og gjeldsbetaling`,
    },
    {
      id: '9-5-3-ex-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'Mia tjener 25 000 kr i måneden. Bruk 50/30/20-regelen til å fordele budsjettet.',
      solution: `**50% til nødvendige utgifter**: $25\\,000 \\cdot 0{,}50 = 12\\,500$ kr
(bolig, mat, transport, forsikring)

**30% til ønsker**: $25\\,000 \\cdot 0{,}30 = 7\\,500$ kr
(fritid, restaurant, shopping, hobbyer)

**20% til sparing**: $25\\,000 \\cdot 0{,}20 = 5\\,000$ kr
(sparekonto, nedbetaling av gjeld, pensjon)`,
    },
    {
      id: '9-5-3-ex-3-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk 50/30/20-regelen',
        subTasks: [
          { label: 'a', task: 'Fordel 18 000 kr etter 50/30/20-regelen', solution: 'Nødvendig: 9 000 kr, Ønsker: 5 400 kr, Sparing: 3 600 kr' },
          { label: 'b', task: 'En person bruker 60% på nødvendige utgifter. Hva må kuttes for å følge regelen ved inntekt 20 000 kr?', solution: 'Bruker: 12 000 kr. Bør bruke: 10 000 kr. Må kutte 2 000 kr' },
        ],
        solution: 'a) 9000/5400/3600 kr, b) Må kutte 2 000 kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-5-3-ex-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'Lag et årsbudsjett for en student med: Stipend 5 000 kr/mnd, deltidsjobb 6 000 kr/mnd. Utgifter: Leie 4 500 kr, mat 2 500 kr, transport 800 kr, mobil 300 kr.',
      solution: `**Månedlig inntekt**: $5\\,000 + 6\\,000 = 11\\,000$ kr
**Årlig inntekt**: $11\\,000 \\cdot 12 = 132\\,000$ kr

**Månedlige utgifter**: $4\\,500 + 2\\,500 + 800 + 300 = 8\\,100$ kr
**Årlige utgifter**: $8\\,100 \\cdot 12 = 97\\,200$ kr

**Årlig overskudd**: $132\\,000 - 97\\,200 = 34\\,800$ kr

Studenten kan spare 34 800 kr i året, eller 2 900 kr per måned.`,
    },
    {
      id: '9-5-3-ex-4-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag årsbudsjett',
        subTasks: [
          { label: 'a', task: 'Inntekt: 14 000 kr/mnd. Faste utgifter: 9 500 kr/mnd. Variable: ca. 3 000 kr/mnd. Beregn årlig overskudd.', solution: 'Månedlig overskudd: 1 500 kr. Årlig: 18 000 kr' },
          { label: 'b', task: 'Fra a): Hvor mange måneder tar det å spare til ferie på 15 000 kr?', solution: '$\\frac{15000}{1500} = 10$ måneder' },
        ],
        solution: 'a) 18 000 kr/år, b) 10 måneder',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-5-3-ex-5-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beregn månedlige utgifter',
        subTasks: [
          { label: 'a', task: 'Strømregning: 1 200 kr/mnd. Hvor mye er det per år?', solution: '$1200 \\cdot 12 = 14\\,400$ kr per år' },
          { label: 'b', task: 'Busskortet koster 8 400 kr per år. Hvor mye er det per måned?', solution: '$\\frac{8400}{12} = 700$ kr per måned' },
          { label: 'c', task: 'Netflix koster 169 kr/mnd, Spotify 119 kr/mnd. Hvor mye er abonnementene per år totalt?', solution: '$(169 + 119) \\cdot 12 = 288 \\cdot 12 = 3\\,456$ kr per år' },
        ],
        solution: 'a) 14 400 kr/år, b) 700 kr/mnd, c) 3 456 kr/år',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-5-3-ex-6-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett opp månedsbudsjett',
        subTasks: [
          { label: 'a', task: 'Lise tjener 22 000 kr/mnd. Sett opp budsjett etter 50/30/20-regelen.', solution: 'Nødvendig: $22000 \\cdot 0{,}5 = 11000$ kr. Ønsker: $22000 \\cdot 0{,}3 = 6600$ kr. Sparing: $22000 \\cdot 0{,}2 = 4400$ kr.' },
          { label: 'b', task: 'Lise har disse faste utgiftene: Leie 7 000 kr, strøm 800 kr, mat 3 500 kr. Er dette innenfor 50%-grensen?', solution: 'Sum: $7000 + 800 + 3500 = 11300$ kr. Grense: 11 000 kr. Hun er 300 kr over grensen.' },
          { label: 'c', task: 'Hva kan Lise gjøre for å holde seg innenfor budsjettet?', solution: 'Kutte 300 kr i mat/strøm, eller øke inntekten, eller justere fordelingen.' },
        ],
        solution: 'a) 11000/6600/4400 kr, b) 300 kr over grensen, c) Kutte utgifter eller justere',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-5-3-ex-7-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Kategoriser utgifter',
        subTasks: [
          { label: 'a', task: 'Hvilke av disse er faste utgifter? Husleie, kinobillett, forsikring, restaurantbesøk, mobilabonnement, klær', solution: 'Faste: Husleie, forsikring, mobilabonnement. Variable: Kinobillett, restaurantbesøk, klær.' },
          { label: 'b', task: 'Forklar hvorfor det er viktig å skille mellom faste og variable utgifter', solution: 'Faste utgifter må betales uansett, variable kan justeres. Ved dårlig økonomi kutter man først variable utgifter.' },
        ],
        solution: 'a) Faste: Husleie, forsikring, mobilabonnement, b) Faste må betales, variable kan kuttes',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-5-3-ex-8-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Planlegg større kjøp',
        subTasks: [
          { label: 'a', task: 'Du vil spare til en datamaskin som koster 12 000 kr. Du kan spare 800 kr/mnd. Hvor lang tid tar det?', solution: '$\\frac{12000}{800} = 15$ måneder' },
          { label: 'b', task: 'Datamaskinen er på tilbud med 20% rabatt i 6 måneder. Rekker du å spare nok?', solution: 'Tilbudspris: $12000 \\cdot 0{,}8 = 9600$ kr. Spart på 6 mnd: $800 \\cdot 6 = 4800$ kr. Nei, du mangler 4 800 kr.' },
          { label: 'c', task: 'Hvor mye må du spare per måned for å nå tilbudet?', solution: '$\\frac{9600}{6} = 1600$ kr per måned' },
        ],
        solution: 'a) 15 måneder, b) Nei, mangler 4 800 kr, c) 1 600 kr/mnd',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-5-3-ex-9-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Budsjett med uregelmessige inntekter',
        subTasks: [
          { label: 'a', task: 'Ola jobber deltid og tjener 3 000 kr i snitt per måned, men varierer mellom 2 000 og 5 000 kr. Hvordan bør han budsjettere?', solution: 'Budsjetter med laveste inntekt (2 000 kr) for sikkerhet, eller lag buffer fra gode måneder.' },
          { label: 'b', task: 'Ola har faste utgifter på 1 500 kr/mnd. Hvor mye bør han ha i buffer for en dårlig måned?', solution: 'Buffer bør dekke faste utgifter: minimum 1 500 kr, gjerne 2-3 måneders utgifter = 3000-4500 kr.' },
          { label: 'c', task: 'Etter et halvår med varierende inntekt: 3500, 2000, 4500, 3000, 5000, 2500 kr. Hva var gjennomsnittlig månedsoverskudd?', solution: 'Sum: 20500 kr. Snitt: $\\frac{20500}{6} \\approx 3417$ kr. Overskudd: $3417 - 1500 = 1917$ kr/mnd i snitt.' },
        ],
        solution: 'a) Budsjetter med laveste inntekt, b) 1 500-4 500 kr buffer, c) ca. 1 917 kr/mnd',
        hints: ['En buffer gir trygghet ved uforutsette utgifter eller lav inntekt'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-5-3-ex-10-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign livsstiler',
        subTasks: [
          { label: 'a', task: 'Anna lager mat hjemme 5 dager i uka (50 kr/måltid) og spiser ute 2 dager (200 kr/måltid). Hva koster middagene per uke?', solution: '$5 \\cdot 50 + 2 \\cdot 200 = 250 + 400 = 650$ kr per uke' },
          { label: 'b', task: 'Bjørn spiser ute hver dag til 150 kr/måltid. Hvor mye mer bruker han per måned enn Anna?', solution: 'Bjørn: $7 \\cdot 150 \\cdot 4 = 4200$ kr/mnd. Anna: $650 \\cdot 4 = 2600$ kr/mnd. Forskjell: 1600 kr/mnd' },
          { label: 'c', task: 'Hvor mye sparer Anna per år ved å lage mat hjemme oftere?', solution: '$1600 \\cdot 12 = 19\\,200$ kr per år' },
        ],
        solution: 'a) 650 kr/uke, b) 1 600 kr/mnd mer, c) 19 200 kr/år',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-5-3-ex-11-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Studentbudsjett',
        subTasks: [
          { label: 'a', task: 'En student får 12 872 kr/mnd fra Lånekassen (40% stipend, 60% lån). Hvor mye er stipend og hvor mye er lån?', solution: 'Stipend: $12872 \\cdot 0{,}4 = 5149$ kr. Lån: $12872 \\cdot 0{,}6 = 7723$ kr.' },
          { label: 'b', task: 'Studenten har utgifter: Leie 5 500 kr, mat 3 000 kr, transport 700 kr, bøker 500 kr, annet 1 500 kr. Går budsjettet i balanse?', solution: 'Utgifter: $5500 + 3000 + 700 + 500 + 1500 = 11200$ kr. Overskudd: $12872 - 11200 = 1672$ kr.' },
          { label: 'c', task: 'Studenten jobber også 20 timer/mnd til 180 kr/time. Hvor mye kan hun spare per måned totalt?', solution: 'Ekstrainntekt: $20 \\cdot 180 = 3600$ kr. Totalt overskudd: $1672 + 3600 = 5272$ kr/mnd.' },
        ],
        solution: 'a) Stipend: 5 149 kr, Lån: 7 723 kr, b) 1 672 kr overskudd, c) 5 272 kr/mnd',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-5-3-ex-12-exercise',
      type: 'exercise',
      exercise: {
        id: '9-5-3-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Familiebudsjett',
        subTasks: [
          { label: 'a', task: 'En familie har to inntekter: 32 000 kr og 28 000 kr per måned. Bruk 50/30/20-regelen på totalinntekten.', solution: 'Total: 60 000 kr. Nødvendig: 30 000 kr. Ønsker: 18 000 kr. Sparing: 12 000 kr.' },
          { label: 'b', task: 'Faste utgifter: Boliglån 12 000 kr, mat 8 000 kr, bil 4 000 kr, strøm 2 000 kr, forsikring 1 500 kr, barnehage 3 000 kr. Er dette innenfor 50%-grensen?', solution: 'Sum: $12000 + 8000 + 4000 + 2000 + 1500 + 3000 = 30500$ kr. Grense: 30 000 kr. 500 kr over.' },
          { label: 'c', task: 'Familien vil spare 15 000 kr/mnd til bolig. Hvor mye har de igjen til "ønsker"?', solution: 'Etter faste og sparing: $60000 - 30500 - 15000 = 14500$ kr til ønsker.' },
          { label: 'd', task: 'Sammenlign med 50/30/20: Er dette et sunt budsjett?', solution: 'Ønsker: 14500 kr (24%). Sparing: 15000 kr (25%). Nødvendig: 30500 kr (51%). Budsjettet prioriterer sparing, som er bra for langsiktig økonomi.' },
        ],
        solution: 'a) 30000/18000/12000 kr, b) 500 kr over grensen, c) 14 500 kr, d) Sunt budsjett med høy sparing',
        hints: ['Et godt budsjett balanserer nåværende behov med fremtidig sikkerhet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-5-3-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '9-5-3-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-5-3-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Grunnleggende budsjettering',
            subTasks: [
              { label: 'a', task: 'Sara har en månedsinntekt på $12\\,000$ kr. Hun bruker $4\\,500$ kr på faste utgifter. Hvor mye har hun igjen?', solution: '$12000 - 4500 = 7\\,500$ kr' },
              { label: 'b', task: 'Av det som er igjen bruker hun $3\\,000$ kr på mat. Hvor mye har hun igjen nå?', solution: '$7500 - 3000 = 4\\,500$ kr' },
              { label: 'c', task: 'Hun bruker $1\\,500$ kr på transport. Hva er overskuddet hennes?', solution: '$4500 - 1500 = 3\\,000$ kr' },
              { label: 'd', task: 'Hva er de samlede utgiftene hennes?', solution: '$4500 + 3000 + 1500 = 9\\,000$ kr' },
              { label: 'e', task: 'Hvor stor andel (i prosent) av inntekten går til faste utgifter?', solution: '$\\frac{4500}{12000} \\cdot 100 = 37{,}5\\%$' },
              { label: 'f', task: 'Hvor stor andel av inntekten kan hun spare?', solution: '$\\frac{3000}{12000} \\cdot 100 = 25\\%$' },
            ],
            solution: 'a) 7 500 kr, b) 4 500 kr, c) 3 000 kr, d) 9 000 kr, e) 37,5%, f) 25%',
            hideInlineSolution: true,
            hints: ['Overskudd = Inntekt - Utgifter'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-5-3-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-5-3-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Kategoriser inntekter og utgifter',
            subTasks: [
              { label: 'a', task: 'Ola har disse postene: Lønn $18\\,000$ kr, husleie $6\\,000$ kr, lommepenger $500$ kr, strøm $800$ kr, mat $3\\,500$ kr, klær $1\\,200$ kr. Hva er total inntekt?', solution: '$18000 + 500 = 18\\,500$ kr' },
              { label: 'b', task: 'Hva er de faste utgiftene (husleie og strøm)?', solution: '$6000 + 800 = 6\\,800$ kr' },
              { label: 'c', task: 'Hva er de variable utgiftene (mat og klær)?', solution: '$3500 + 1200 = 4\\,700$ kr' },
              { label: 'd', task: 'Hva er totale utgifter?', solution: '$6800 + 4700 = 11\\,500$ kr' },
              { label: 'e', task: 'Hva er overskuddet per måned?', solution: '$18500 - 11500 = 7\\,000$ kr' },
              { label: 'f', task: 'Hvor mye kan han spare på et helt år med dette overskuddet?', solution: '$7000 \\cdot 12 = 84\\,000$ kr' },
            ],
            solution: 'a) 18 500 kr, b) 6 800 kr, c) 4 700 kr, d) 11 500 kr, e) 7 000 kr, f) 84 000 kr',
            hideInlineSolution: true,
            hints: ['Faste utgifter er like hver måned. Variable utgifter endrer seg.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-5-3-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-5-3-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Enkel prosentregning i budsjett',
            subTasks: [
              { label: 'a', task: 'En person tjener $20\\,000$ kr i måneden. Ifølge 50/30/20-regelen, hvor mye bør gå til nødvendige utgifter (50%)?', solution: '$20000 \\cdot 0{,}50 = 10\\,000$ kr' },
              { label: 'b', task: 'Hvor mye bør gå til ønsker (30%)?', solution: '$20000 \\cdot 0{,}30 = 6\\,000$ kr' },
              { label: 'c', task: 'Hvor mye bør gå til sparing (20%)?', solution: '$20000 \\cdot 0{,}20 = 4\\,000$ kr' },
              { label: 'd', task: 'Personen bruker $11\\,500$ kr på nødvendige utgifter. Er dette innenfor 50%-grensen?', solution: '$11500 > 10000$. Nei, det er $1\\,500$ kr over grensen.' },
              { label: 'e', task: 'For å komme innenfor, hvor mye må han kutte i nødvendige utgifter?', solution: '$11500 - 10000 = 1\\,500$ kr' },
              { label: 'f', task: 'Hvis han kutter $1\\,500$ kr, men legger dette til sparing i stedet, hvor mye sparer han per måned totalt?', solution: '$4000 + 1500 = 5\\,500$ kr per måned' },
            ],
            solution: 'a) 10 000 kr, b) 6 000 kr, c) 4 000 kr, d) Nei, 1 500 kr over, e) 1 500 kr, f) 5 500 kr',
            hideInlineSolution: true,
            hints: ['50/30/20-regelen: 50% til behov, 30% til ønsker, 20% til sparing'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-5-3-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-5-3-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Månedsbudsjett med sparemål',
            subTasks: [
              { label: 'a', task: 'Kari tjener $25\\,000$ kr/mnd. Faste utgifter: husleie $7\\,000$ kr, strøm $1\\,200$ kr, forsikring $600$ kr, transport $1\\,500$ kr. Hva er summen av faste utgifter?', solution: '$7000 + 1200 + 600 + 1500 = 10\\,300$ kr' },
              { label: 'b', task: 'Variable utgifter: mat $4\\,000$ kr, klær $800$ kr, fritid $2\\,000$ kr. Hva er totale utgifter?', solution: 'Variable: $4000 + 800 + 2000 = 6800$ kr. Totalt: $10300 + 6800 = 17\\,100$ kr' },
              { label: 'c', task: 'Kari vil spare til en ferie som koster $24\\,000$ kr. Med dagens overskudd, hvor mange måneder tar det?', solution: 'Overskudd: $25000 - 17100 = 7900$ kr/mnd. Antall måneder: $\\frac{24000}{7900} \\approx 3{,}04$, altså 4 måneder.' },
              { label: 'd', task: 'Hvis hun kutter fritidsutgiftene med $500$ kr/mnd, hvor mange måneder raskere når hun sparemålet?', solution: 'Nytt overskudd: $7900 + 500 = 8400$ kr/mnd. Tid: $\\frac{24000}{8400} \\approx 2{,}86$, altså 3 måneder. 1 måned raskere.' },
              { label: 'e', task: 'Sett opp det reviderte budsjettet i en tabell med alle poster.', solution: 'Inntekt: 25000 kr. Husleie: 7000, Strøm: 1200, Forsikring: 600, Transport: 1500, Mat: 4000, Klær: 800, Fritid: 1500, Sparing: 8400. Sum utgifter + sparing = 25000 kr.' },
            ],
            solution: 'a) 10 300 kr, b) 17 100 kr, c) 4 måneder, d) 1 måned raskere, e) Se tabell',
            hideInlineSolution: true,
            hints: ['Del opp i faste og variable utgifter, regn ut overskudd, del sparemål på overskudd.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-5-3-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-5-3-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Budsjett med uforutsette utgifter',
            subTasks: [
              { label: 'a', task: 'Erik har $30\\,000$ kr i månedsinntekt og $22\\,000$ kr i faste og variable utgifter. Han sparer $5\\,000$ kr/mnd til bufferkonto. Hva er overskuddet etter sparing?', solution: '$30000 - 22000 - 5000 = 3\\,000$ kr' },
              { label: 'b', task: 'Etter 8 måneder med sparing, hvor mye har han på bufferkontoen?', solution: '$5000 \\cdot 8 = 40\\,000$ kr' },
              { label: 'c', task: 'Vaskemaskinen ryker og koster $8\\,000$ kr å erstatte. Hvor mye har han igjen på bufferkontoen?', solution: '$40000 - 8000 = 32\\,000$ kr' },
              { label: 'd', task: 'Eksperter anbefaler 3 måneders utgifter i buffer. Har Erik nok etter reparasjonen?', solution: 'Behov: $3 \\cdot 22000 = 66\\,000$ kr. Han har $32\\,000$ kr. Nei, han mangler $34\\,000$ kr.' },
              { label: 'e', task: 'Hvor mange flere måneder med sparing ($5\\,000$ kr/mnd) trenger han for å nå buffermålet?', solution: '$\\frac{34000}{5000} = 6{,}8$, altså 7 måneder til.' },
              { label: 'f', task: 'Hva er fordelen med å ha en bufferkonto i stedet for å ta opp forbrukslån når noe uventet skjer?', solution: 'Med bufferkonto betaler du ikke renter. Et forbrukslån på 8000 kr til 20% rente koster 1600 kr ekstra.' },
            ],
            solution: 'a) 3 000 kr, b) 40 000 kr, c) 32 000 kr, d) Nei, mangler 34 000 kr, e) 7 måneder, f) Slipper rentekostnader',
            hideInlineSolution: true,
            hints: ['En bufferkonto beskytter mot uforutsette utgifter og gjør at du slipper dyre lån.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-5-3-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-5-3-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Langsiktig økonomisk planlegging',
            subTasks: [
              { label: 'a', task: 'Lise er 18 år og begynner å jobbe med $28\\,000$ kr/mnd. Hun bruker $20\\,000$ kr/mnd og sparer resten med $4\\%$ årlig rente. Hvor mye sparer hun i året?', solution: 'Månedlig sparing: $28000 - 20000 = 8000$ kr. Årlig: $8000 \\cdot 12 = 96\\,000$ kr.' },
              { label: 'b', task: 'Etter 5 år (uten rentes rente): Hvor mye har hun spart totalt?', solution: '$96000 \\cdot 5 = 480\\,000$ kr' },
              { label: 'c', task: 'Med $4\\%$ rente hvert år (forenklet: rente på gjennomsnittlig saldo): Omtrent hvor mye rente har hun tjent over 5 år?', solution: 'Gjennomsnittlig saldo ca. $240\\,000$ kr. Rente per år: $240000 \\cdot 0{,}04 = 9600$ kr. Over 5 år: ca. $48\\,000$ kr.' },
              { label: 'd', task: 'En venninne bruker $25\\,000$ kr/mnd og sparer $3\\,000$ kr/mnd. Sammenlign sparingen etter 5 år (uten rente).', solution: 'Venninne: $3000 \\cdot 12 \\cdot 5 = 180\\,000$ kr. Lise: $480\\,000$ kr. Forskjell: $300\\,000$ kr. Lise sparer nesten 3 ganger mer.' },
            ],
            solution: 'a) 96 000 kr/år, b) 480 000 kr, c) ca. 48 000 kr i rente, d) Lise sparer 300 000 kr mer',
            hideInlineSolution: true,
            hints: ['Små forskjeller i månedlig sparing gir store utslag over tid.', 'Bruk gjennomsnittlig saldo for forenklet renteberegning.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_9_6_1: TextbookChapter = {
  id: '9-6-1',
  courseId: '9',
  chapterNumber: '6.1',
  title: 'Statistiske mål',
  description: 'Sentralmål, spredningsmål og variasjonsbredde.',
  estimatedMinutes: 50,
  competenceGoals: ['bruke sentralmål og spreiingsmål til å analysere og samanlikne datasett'],
  content: [
    {
      id: '9-6-1-intro',
      type: 'text',
      content: `**Statistiske mål** brukes til å oppsummere og beskrive datasett. Vi deler dem inn i **sentralmål** (som viser "typiske" verdier) og **spredningsmål** (som viser hvor spredt dataene er).`,
    },
    {
      id: '9-6-1-def-1',
      type: 'definition',
      title: 'Sentralmål',
      content: `**Gjennomsnitt** (middeltall): Summen av alle verdier delt på antallet
$$\\bar{x} = \\frac{x_1 + x_2 + ... + x_n}{n}$$

**Median**: Den midterste verdien når dataene er sortert

**Typetall** (modus): Den verdien som forekommer oftest`,
    },
    {
      id: '9-6-1-ex-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'Finn gjennomsnitt, median og typetall for: 4, 7, 2, 7, 5, 7, 3',
      solution: `**Sortert**: 2, 3, 4, 5, 7, 7, 7

**Gjennomsnitt**: $\\frac{2+3+4+5+7+7+7}{7} = \\frac{35}{7} = 5$

**Median**: Den midterste (4. verdien) = **5**

**Typetall**: **7** (forekommer 3 ganger)`,
    },
    {
      id: '9-6-1-ex-1-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn gjennomsnitt, median og typetall',
        subTasks: [
          { label: 'a', task: '3, 5, 7, 5, 10', solution: 'Gj.snitt: 6, Median: 5, Typetall: 5' },
          { label: 'b', task: '12, 15, 12, 18, 12, 21', solution: 'Gj.snitt: 15, Median: 13,5, Typetall: 12' },
          { label: 'c', task: '8, 4, 6, 10, 2, 6', solution: 'Gj.snitt: 6, Median: 6, Typetall: 6' },
        ],
        solution: 'a) 6, 5, 5, b) 15, 13.5, 12, c) 6, 6, 6',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-6-1-def-2',
      type: 'definition',
      title: 'Spredningsmål',
      content: `**Variasjonsbredde**: Differansen mellom største og minste verdi
$$R = x_{\\text{maks}} - x_{\\text{min}}$$

**Standardavvik**: Et mål på gjennomsnittlig avstand fra gjennomsnittet (læres mer om senere)`,
    },
    {
      id: '9-6-1-ex-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'Finn variasjonsbredden for datasettene:\nA: 10, 15, 12, 18, 14\nB: 8, 25, 11, 19, 7',
      solution: `**Datasett A**:
- Maks: 18, Min: 10
- Variasjonsbredde: $18 - 10 = 8$

**Datasett B**:
- Maks: 25, Min: 7
- Variasjonsbredde: $25 - 7 = 18$

Datasett B har større spredning.`,
    },
    {
      id: '9-6-1-ex-2-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn variasjonsbredden',
        subTasks: [
          { label: 'a', task: '22, 35, 28, 41, 30', solution: '$41 - 22 = 19$' },
          { label: 'b', task: '5, 5, 5, 5, 5', solution: '$5 - 5 = 0$' },
          { label: 'c', task: '-3, 8, 2, -1, 5', solution: '$8 - (-3) = 11$' },
        ],
        solution: 'a) 19, b) 0, c) 11',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-6-1-ex-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'Resultatene på en prøve var: 2, 3, 4, 4, 5, 5, 5, 6. Hvilke(t) sentralmål egner seg best?',
      solution: `**Gjennomsnitt**: $\\frac{34}{8} = 4{,}25$

**Median**: Gjennomsnittet av 4. og 5. verdi = $\\frac{4+5}{2} = 4{,}5$

**Typetall**: 5 (forekommer 3 ganger)

**Vurdering**: Alle tre gir fornuftige verdier rundt 4-5. Gjennomsnittet (4,25) er litt påvirket av de lave verdiene. Median (4,5) er robust mot ekstremverdier. Typetallet (5) viser den vanligste karakteren.`,
    },
    {
      id: '9-6-1-ex-3-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg passende sentralmål og forklar',
        subTasks: [
          { label: 'a', task: 'Lønn i en bedrift: 350 000, 380 000, 400 000, 420 000, 1 500 000 kr. Hvilket sentralmål representerer "typisk lønn" best?', solution: 'Median = 400 000 kr er best. Gj.snitt = 610 000 kr trekkes opp av den høye lønnen.' },
          { label: 'b', task: 'Skostørrelser: 38, 40, 40, 41, 42, 42, 42, 43. Hvilket sentralmål bør en butikk se på for innkjøp?', solution: 'Typetall = 42 (mest solgte størrelse)' },
        ],
        solution: 'a) Median, b) Typetall',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-6-1-ex-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'To klasser har disse resultatene:\nKlasse A: Gj.snitt 4,2, Variasjonsbredde 3\nKlasse B: Gj.snitt 4,0, Variasjonsbredde 5\nSammenlign klassene.',
      solution: `**Klasse A**: Litt høyere gjennomsnitt (4,2 vs 4,0), men lavere spredning (3 vs 5).
- Prestasjonene er mer like i klasse A
- De fleste ligger rundt 4,2

**Klasse B**: Litt lavere snitt, men større spredning.
- Større forskjeller mellom elevene
- Noen gjør det veldig bra, andre svakere

**Konklusjon**: Klasse A er mer homogen med jevnere resultater.`,
    },
    {
      id: '9-6-1-ex-4-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign datasettene og tolk',
        subTasks: [
          { label: 'a', task: 'Lag A: 5, 5, 6, 6, 7, 7, 7. Lag B: 3, 4, 6, 6, 8, 9, 10. Beregn gj.snitt og variasjonsbredde for begge.', solution: 'A: Gj.snitt 6,14, VB 2. B: Gj.snitt 6,57, VB 7' },
          { label: 'b', task: 'Hvilket lag er mest stabilt basert på tallene over?', solution: 'Lag A er mest stabilt (lavere variasjonsbredde)' },
        ],
        solution: 'a) A: 6,14/2, B: 6,57/7. b) Lag A er mest stabilt',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-6-1-ex-5-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn gjennomsnitt og median',
        subTasks: [
          { label: 'a', task: 'Antall maal i 5 fotballkamper: 0, 1, 2, 2, 5', solution: 'Gjennomsnitt: $\\frac{0+1+2+2+5}{5} = \\frac{10}{5} = 2$. Median: 2' },
          { label: 'b', task: 'Temperaturer (grader): 15, 18, 17, 20, 15', solution: 'Gjennomsnitt: $\\frac{85}{5} = 17$. Sortert: 15, 15, 17, 18, 20. Median: 17' },
          { label: 'c', task: 'Poeng paa quiz: 6, 8, 9, 9, 10, 10', solution: 'Gjennomsnitt: $\\frac{52}{6} \\approx 8{,}67$. Median: $\\frac{9+9}{2} = 9$' },
        ],
        solution: 'a) Gj.snitt 2, median 2. b) Gj.snitt 17, median 17. c) Gj.snitt 8,67, median 9',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-6-1-ex-6-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et datasett har gjennomsnitt 25 og 5 verdier. Fire av verdiene er 20, 22, 28, 30.',
        subTasks: [
          { label: 'a', task: 'Finn den femte verdien.', solution: 'Sum = $25 \\cdot 5 = 125$. Kjente verdier: $20+22+28+30 = 100$. Femte verdi: $125 - 100 = 25$' },
          { label: 'b', task: 'Finn medianen naar alle verdiene er kjent.', solution: 'Sortert: 20, 22, 25, 28, 30. Median = 25' },
          { label: 'c', task: 'Hva er variasjonsbredden?', solution: '$30 - 20 = 10$' },
        ],
        solution: 'a) 25, b) 25, c) 10',
        hints: ['Sum av alle verdier = gjennomsnitt ganger antall'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-6-1-ex-7-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn typetallet',
        subTasks: [
          { label: 'a', task: 'Favorittfarge blant 20 elever: Roed (8), Blaa (6), Groenn (4), Gul (2)', solution: 'Typetall: Roed (forekommer 8 ganger)' },
          { label: 'b', task: 'Antall soesken: 0, 1, 1, 1, 2, 2, 3', solution: 'Typetall: 1 (forekommer 3 ganger)' },
          { label: 'c', task: 'Terningkast: 3, 5, 2, 6, 4, 1', solution: 'Ingen typetall (alle forekommer like ofte)' },
        ],
        solution: 'a) Roed, b) 1, c) Ingen typetall',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-6-1-ex-8-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Datasett med ekstremverdier',
        subTasks: [
          { label: 'a', task: 'Alder paa 6 personer: 12, 13, 14, 14, 15, 65. Beregn gjennomsnitt og median.', solution: 'Gjennomsnitt: $\\frac{133}{6} \\approx 22{,}2$. Median: $\\frac{14+14}{2} = 14$' },
          { label: 'b', task: 'Hvilket sentralmaal representerer gruppen best? Begrunn svaret.', solution: 'Median (14) representerer gruppen best. Gjennomsnittet trekkes opp av ekstremverdien 65.' },
        ],
        solution: 'a) Gj.snitt ca. 22,2, median 14. b) Median er best fordi den ikke paavirkes av ekstremverdien.',
        hints: ['Ekstremverdier paavirker gjennomsnittet mye, men ikke medianen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-6-1-ex-9-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Ny verdi legges til',
        subTasks: [
          { label: 'a', task: 'Et datasett har verdiene 10, 12, 14, 16, 18 med gjennomsnitt 14. En ny verdi legges til og gjennomsnittet blir 15. Finn den nye verdien.', solution: 'Ny sum = $15 \\cdot 6 = 90$. Gammel sum = 70. Ny verdi: $90 - 70 = 20$' },
          { label: 'b', task: 'Hva blir den nye medianen?', solution: 'Sortert: 10, 12, 14, 16, 18, 20. Median: $\\frac{14+16}{2} = 15$' },
        ],
        solution: 'a) 20, b) 15',
        hints: ['Bruk formelen: ny sum = nytt gjennomsnitt ganger nytt antall'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-6-1-ex-10-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign to grupper',
        subTasks: [
          { label: 'a', task: 'Gruppe A: 5, 6, 7, 8, 9. Gruppe B: 3, 5, 7, 9, 11. Beregn gjennomsnitt for begge.', solution: 'Gruppe A: $\\frac{35}{5} = 7$. Gruppe B: $\\frac{35}{5} = 7$' },
          { label: 'b', task: 'Beregn variasjonsbredden for begge grupper.', solution: 'Gruppe A: $9-5 = 4$. Gruppe B: $11-3 = 8$' },
          { label: 'c', task: 'Hvilken gruppe har mest spredte data? Begrunn.', solution: 'Gruppe B har stoerst spredning (variasjonsbredde 8 vs 4). Selv om gjennomsnittene er like, er B-verdiene mer spredt rundt gjennomsnittet.' },
        ],
        solution: 'a) Begge har gj.snitt 7. b) A: 4, B: 8. c) Gruppe B er mest spredt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-6-1-ex-11-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Praktisk anvendelse av statistikk',
        subTasks: [
          { label: 'a', task: 'En butikk selger sko i stoerrelsene 38, 39, 40, 41, 42, 43, 44. Salg siste uke: 38 (2 par), 39 (5 par), 40 (12 par), 41 (15 par), 42 (10 par), 43 (4 par), 44 (2 par). Finn typetallet.', solution: 'Typetall: 41 (15 par solgt)' },
          { label: 'b', task: 'Beregn gjennomsnittlig skostoerrelse solgt.', solution: 'Sum: $38 \\cdot 2 + 39 \\cdot 5 + 40 \\cdot 12 + 41 \\cdot 15 + 42 \\cdot 10 + 43 \\cdot 4 + 44 \\cdot 2 = 2040$. Antall: 50. Gj.snitt: $\\frac{2040}{50} = 40{,}8$' },
          { label: 'c', task: 'Hvilken informasjon er mest nyttig for butikken naar de skal bestille nye sko?', solution: 'Typetallet (41) er mest nyttig - det viser hvilken stoerrelse som selger best og boer bestilles i stoerst antall.' },
        ],
        solution: 'a) 41, b) 40,8, c) Typetallet (41)',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-6-1-ex-12-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-1-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag datasett som oppfyller kravene',
        subTasks: [
          { label: 'a', task: 'Lag et datasett med 5 verdier der gjennomsnitt = median = 10', solution: 'Eksempel: 8, 9, 10, 11, 12 (sum 50, median 10)' },
          { label: 'b', task: 'Lag et datasett med 5 verdier der gjennomsnitt = 10 men median = 8', solution: 'Eksempel: 6, 7, 8, 9, 20 (sum 50, median 8)' },
          { label: 'c', task: 'Lag et datasett med 6 verdier der typetall = 5 og gjennomsnitt = 6', solution: 'Eksempel: 5, 5, 5, 6, 7, 8 (typetall 5, sum 36, gj.snitt 6)' },
          { label: 'd', task: 'Er det mulig aa lage et datasett der median > alle verdiene? Begrunn.', solution: 'Nei, medianen er alltid en av verdiene (eller gjennomsnittet av to verdier i datasettet), saa den kan ikke vaere stoerre enn alle.' },
        ],
        solution: 'a) F.eks. 8,9,10,11,12. b) F.eks. 6,7,8,9,20. c) F.eks. 5,5,5,6,7,8. d) Nei, umulig.',
        hints: ['For gjennomsnitt 10 med 5 verdier maa summen vaere 50'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-6-1-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '9-6-1-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-6-1-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Beregn gjennomsnitt og median',
            subTasks: [
              { label: 'a', task: 'Finn gjennomsnittet av tallene: $4, 7, 3, 9, 2$', solution: '$\\bar{x} = \\frac{4+7+3+9+2}{5} = \\frac{25}{5} = 5$' },
              { label: 'b', task: 'Finn medianen av de samme tallene', solution: 'Sortert: $2, 3, 4, 7, 9$. Median: $4$ (midterste verdi)' },
              { label: 'c', task: 'Finn gjennomsnittet av: $12, 15, 18, 21, 24, 30$', solution: '$\\bar{x} = \\frac{12+15+18+21+24+30}{6} = \\frac{120}{6} = 20$' },
              { label: 'd', task: 'Finn medianen av tallene i c)', solution: 'Sortert: $12, 15, 18, 21, 24, 30$. Median: $\\frac{18+21}{2} = 19{,}5$' },
              { label: 'e', task: 'Finn gjennomsnittet av: $5, 5, 5, 5, 5, 5$', solution: '$\\bar{x} = \\frac{30}{6} = 5$' },
              { label: 'f', task: 'Finn gjennomsnittet av: $1, 1, 1, 1, 100$', solution: '$\\bar{x} = \\frac{1+1+1+1+100}{5} = \\frac{104}{5} = 20{,}8$' },
            ],
            solution: 'a) 5, b) 4, c) 20, d) 19,5, e) 5, f) 20,8',
            hideInlineSolution: true,
            hints: ['Gjennomsnitt = sum av alle verdier delt på antallet. Median = midterste verdi i sortert rekkefølge.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-6-1-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-6-1-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Finn typetall og variasjonsbredde',
            subTasks: [
              { label: 'a', task: 'Finn typetallet i datasettet: $3, 5, 7, 5, 3, 5, 8, 5$', solution: 'Typetall: $5$ (forekommer 4 ganger)' },
              { label: 'b', task: 'Finn variasjonsbredden i samme datasett', solution: 'Variasjonsbredde: $8 - 3 = 5$' },
              { label: 'c', task: 'Finn typetallet i: $2, 4, 6, 4, 2, 4, 6, 2$', solution: 'Typetall: $2$ og $4$ (begge forekommer 3 ganger). Datasettet er bimodalt.' },
              { label: 'd', task: 'Finn variasjonsbredden i c)', solution: 'Variasjonsbredde: $6 - 2 = 4$' },
              { label: 'e', task: 'Kan et datasett ha flere typetall? Forklar.', solution: 'Ja, hvis to eller flere verdier forekommer like ofte (og oftest), har datasettet flere typetall.' },
              { label: 'f', task: 'Hva er typetallet i: $1, 2, 3, 4, 5$?', solution: 'Datasettet har ikke noe typetall fordi alle verdiene forekommer bare én gang.' },
            ],
            solution: 'a) 5, b) 5, c) 2 og 4 (bimodalt), d) 4, e) Ja, f) Ikke noe typetall',
            hideInlineSolution: true,
            hints: ['Typetall = den verdien som forekommer oftest. Variasjonsbredde = størst - minst.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-6-1-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-6-1-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Alle sentralmål i ett datasett',
            subTasks: [
              { label: 'a', task: 'Resultatene på en prøve (i poeng): $6, 8, 8, 5, 9, 7, 8, 4, 10, 5$. Finn gjennomsnittet.', solution: '$\\bar{x} = \\frac{6+8+8+5+9+7+8+4+10+5}{10} = \\frac{70}{10} = 7$' },
              { label: 'b', task: 'Finn medianen', solution: 'Sortert: $4, 5, 5, 6, 7, 8, 8, 8, 9, 10$. Median: $\\frac{7+8}{2} = 7{,}5$' },
              { label: 'c', task: 'Finn typetallet', solution: 'Typetall: $8$ (forekommer 3 ganger)' },
              { label: 'd', task: 'Finn variasjonsbredden', solution: '$10 - 4 = 6$' },
              { label: 'e', task: 'Hvis eleven som fikk 4 poeng i stedet fikk 7, hva skjer med gjennomsnittet?', solution: 'Ny sum: $70 - 4 + 7 = 73$. Nytt gjennomsnitt: $\\frac{73}{10} = 7{,}3$. Gjennomsnittet øker med $0{,}3$.' },
              { label: 'f', task: 'Endrer typetallet seg i e)? Begrunn.', solution: 'Nei, typetallet er fortsatt $8$ (3 ganger). At én verdi endres fra $4$ til $7$ gir ingen ny topp.' },
            ],
            solution: 'a) 7, b) 7,5, c) 8, d) 6, e) 7,3, f) Nei, fortsatt 8',
            hideInlineSolution: true,
            hints: ['Sorter tallene først. Husk at median med partall verdier er gjennomsnittet av de to midterste.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-6-1-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-6-1-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Sammenlign datasett med statistiske mål',
            subTasks: [
              { label: 'a', task: 'Klasse A fikk disse resultatene på en prøve: $5, 6, 7, 7, 8, 8, 8, 9, 9, 10$. Klasse B: $3, 4, 5, 7, 8, 8, 9, 10, 10, 10$. Finn gjennomsnittet for begge klassene.', solution: 'A: $\\frac{77}{10} = 7{,}7$. B: $\\frac{74}{10} = 7{,}4$.' },
              { label: 'b', task: 'Finn medianen for begge klassene.', solution: 'A: $\\frac{8+8}{2} = 8$. B: $\\frac{8+8}{2} = 8$.' },
              { label: 'c', task: 'Finn variasjonsbredden for begge klassene.', solution: 'A: $10 - 5 = 5$. B: $10 - 3 = 7$.' },
              { label: 'd', task: 'Hvilken klasse har mest spredte resultater? Begrunn med variasjonsbredden.', solution: 'Klasse B har variasjonsbredde $7$ mot A sin $5$. Klasse B har mest spredte resultater.' },
              { label: 'e', task: 'Hvilken klasse gjør det best totalt sett? Begrunn med flere sentralmål.', solution: 'Klasse A har høyere gjennomsnitt ($7{,}7$ vs. $7{,}4$) og lik median ($8$). Klasse A gjør det litt bedre totalt sett og har jevnere resultater.' },
            ],
            solution: 'a) A: 7,7 og B: 7,4, b) Begge: 8, c) A: 5 og B: 7, d) Klasse B er mest spredt, e) Klasse A gjør det best',
            hideInlineSolution: true,
            hints: ['Sammenlign gjennomsnitt for nivå og variasjonsbredde for spredning.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-6-1-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-6-1-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Statistiske mål med frekvenstabell',
            subTasks: [
              { label: 'a', task: 'En undersøkelse av antall søsken: 0 søsken (4 elever), 1 søsken (12 elever), 2 søsken (8 elever), 3 søsken (3 elever), 4 søsken (1 elev). Finn gjennomsnittet.', solution: '$\\bar{x} = \\frac{0 \\cdot 4 + 1 \\cdot 12 + 2 \\cdot 8 + 3 \\cdot 3 + 4 \\cdot 1}{28} = \\frac{0+12+16+9+4}{28} = \\frac{41}{28} \\approx 1{,}46$' },
              { label: 'b', task: 'Finn medianen.', solution: 'Totalt 28 elever. Median mellom verdi 14 og 15. Begge er i gruppen «1 søsken» (verdi 5-16). Median: $1$.' },
              { label: 'c', task: 'Finn typetallet.', solution: 'Typetall: $1$ søsken (12 elever, flest)' },
              { label: 'd', task: 'Finn variasjonsbredden.', solution: '$4 - 0 = 4$' },
              { label: 'e', task: 'Hvilket sentralmål gir best bilde av det «typiske» antall søsken? Begrunn.', solution: 'Typetallet ($1$) og medianen ($1$) gir best bilde. Gjennomsnittet ($1{,}46$) er påvirket av de få med mange søsken.' },
              { label: 'f', task: 'Hvis en ny elev med 7 søsken legges til, hva skjer med gjennomsnittet og medianen?', solution: 'Nytt gjennomsnitt: $\\frac{41+7}{29} = \\frac{48}{29} \\approx 1{,}66$. Medianen er fortsatt $1$ (verdi 15 av 29 er i gruppen «1 søsken»). Gjennomsnittet påvirkes mer av ekstreme verdier.' },
            ],
            solution: 'a) 1,46, b) 1, c) 1, d) 4, e) Typetall/median, f) Gjennomsnitt øker, median uendret',
            hideInlineSolution: true,
            hints: ['Ved frekvenstabell: gang verdi med frekvens, summer, og del på totalt antall.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-6-1-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-6-1-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Avansert statistisk analyse',
            subTasks: [
              { label: 'a', task: 'Bedrift A har lønninger (i 1000 kr): $35, 38, 40, 42, 45, 48, 50, 55, 120$. Bedrift B: $40, 42, 44, 45, 46, 48, 50, 52, 55$. Beregn gjennomsnittslønnen for begge.', solution: 'A: $\\frac{473}{9} \\approx 52{,}6$ tusen kr. B: $\\frac{422}{9} \\approx 46{,}9$ tusen kr.' },
              { label: 'b', task: 'Finn medianlønnen for begge bedriftene.', solution: 'A: $45$ tusen kr (5. verdi). B: $46$ tusen kr (5. verdi).' },
              { label: 'c', task: 'Forklar hvorfor gjennomsnittet i bedrift A er mye høyere enn medianen. Hvilket mål gir et mer rettferdig bilde?', solution: 'Direktørlønnen på $120\\,000$ kr trekker gjennomsnittet kraftig opp. Medianen ($45\\,000$ kr) gir et mer rettferdig bilde av hva en «typisk» ansatt tjener.' },
              { label: 'd', task: 'Bedrift A sier: «Gjennomsnittslønnen vår er $52\\,600$ kr.» Er dette villedende? Begrunn.', solution: 'Ja, det er villedende. 8 av 9 ansatte tjener under gjennomsnittet. Medianen ($45\\,000$ kr) ville gitt et mer ærlig bilde av lønnsnivået.' },
            ],
            solution: 'a) A: 52,6 og B: 46,9 tusen, b) A: 45 og B: 46 tusen, c) Ekstremverdien trekker opp gjennomsnittet, d) Ja, villedende',
            hideInlineSolution: true,
            hints: ['Gjennomsnitt påvirkes sterkt av ekstremverdier (uteliggere). Median er mer robust.', 'Tenk kritisk på hvilke mål som brukes til å presentere data.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_9_6_2: TextbookChapter = {
  id: '9-6-2',
  courseId: '9',
  chapterNumber: '6.2',
  title: 'Diagrammer og visualisering',
  description: 'Velge riktig diagramtype og presentere data.',
  estimatedMinutes: 45,
  competenceGoals: ['planleggje og gjennomføre statistiske undersøkingar og presentere resultat'],
  content: [
    {
      id: '9-6-2-intro',
      type: 'text',
      content: `Å velge riktig diagramtype er viktig for å kommunisere data tydelig. Ulike diagrammer egner seg for ulike typer data og formål.`,
    },
    {
      id: '9-6-2-def-1',
      type: 'definition',
      title: 'Diagramtyper',
      content: `**Stolpediagram**: Viser kategoriske data, sammenligner størrelser

**Linjediagram**: Viser utvikling over tid

**Sektordiagram (kakediagram)**: Viser andeler av en helhet

**Histogram**: Viser fordelingen av numeriske data i klasser`,
    },
    {
      id: '9-6-2-ex-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'Hvilken diagramtype passer best for:\na) Antall elever som liker ulike fag\nb) Temperaturen gjennom et døgn\nc) Hvor stor andel av budsjettet som går til ulike utgifter',
      solution: `**a) Antall elever per fag**: **Stolpediagram**
- Kategoriske data (fag)
- Sammenligner antall

**b) Temperatur gjennom døgnet**: **Linjediagram**
- Viser utvikling over tid
- Sammenhengende endring

**c) Budsjettandeler**: **Sektordiagram**
- Viser deler av en helhet
- Prosentandeler som summer til 100%`,
    },
    {
      id: '9-6-2-ex-1-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Velg passende diagramtype',
        subTasks: [
          { label: 'a', task: 'Befolkningsvekst i Norge fra 1900 til 2020', solution: 'Linjediagram' },
          { label: 'b', task: 'Favorittidrett blant elever i en klasse', solution: 'Stolpediagram' },
          { label: 'c', task: 'Fordeling av transportmåter til skolen', solution: 'Sektordiagram' },
        ],
        solution: 'a) Linjediagram, b) Stolpediagram, c) Sektordiagram',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-6-2-ex-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'Tegn et sektordiagram for: Mat 40%, Bolig 35%, Transport 15%, Annet 10%',
      solution: `For å tegne sektordiagram beregner vi vinklene (360° er hele sirkelen):

- Mat: $40\\% \\cdot 360° = 144°$
- Bolig: $35\\% \\cdot 360° = 126°$
- Transport: $15\\% \\cdot 360° = 54°$
- Annet: $10\\% \\cdot 360° = 36°$

**Kontroll**: $144 + 126 + 54 + 36 = 360°$ ✓`,
    },
    {
      id: '9-6-2-ex-2-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn vinklene til et sektordiagram',
        subTasks: [
          { label: 'a', task: 'Norsk 25%, Matte 30%, Engelsk 20%, Gym 15%, Annet 10%', solution: 'Norsk 90°, Matte 108°, Engelsk 72°, Gym 54°, Annet 36°' },
          { label: 'b', task: 'En klasse har 12 gutter og 18 jenter. Finn prosentene og vinklene.', solution: 'Gutter: 40% (144°), Jenter: 60% (216°)' },
        ],
        solution: 'a) 90°, 108°, 72°, 54°, 36°, b) Gutter 144°, Jenter 216°',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-6-2-text-2',
      type: 'text',
      content: `### Kritisk vurdering av diagrammer

Diagrammer kan være villedende. Se opp for:
- Y-aksen som ikke starter på 0
- Ulik bredde på stolper
- 3D-effekter som forvrenger
- Manglende enhet eller tittel`,
    },
    {
      id: '9-6-2-ex-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'Et diagram viser salg. Y-aksen går fra 950 til 1050. Salgstallene er: 2020: 980, 2021: 1010, 2022: 1020. Er fremstillingen rettferdig?',
      solution: `**Problemet**: Y-aksen starter på 950, ikke 0.

**Effekt**: Økningen ser dramatisk ut:
- Visuelt ser 1020 ut som nesten dobbelt så høy som 980
- I virkeligheten er det bare $\\frac{1020-980}{980} \\approx 4\\%$ økning

**Rettferdig fremstilling**: Start y-aksen på 0, eller angi tydelig at aksen er avkortet.`,
    },
    {
      id: '9-6-2-ex-3-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Vurder diagrammene kritisk',
        subTasks: [
          { label: 'a', task: 'Et stolpediagram viser inntekt for 3 bedrifter med y-akse fra 80 til 100 millioner. Bedrift A: 85, B: 90, C: 95. Hva er problemet?', solution: 'Y-aksen starter ikke på 0. Forskjellene ser større ut enn de er (kun 11% forskjell mellom A og C).' },
          { label: 'b', task: 'Hvordan ville diagrammet se ut med y-akse fra 0?', solution: 'Stolpene ville vært nesten like høye, og forskjellene ville vært knapt synlige.' },
        ],
        solution: 'a) Villedende y-akse, b) Nesten like stolper',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-6-2-ex-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'Les av fra diagrammet (tenkt linjediagram): Antall besøkende på et nettsted var 100 i januar, 150 i april, 200 i juli, 180 i oktober. Beskriv utviklingen.',
      solution: `**Beskrivelse**:
- Jevn økning fra januar til juli (+100 besøkende)
- Nedgang fra juli til oktober (-20 besøkende)
- Høyest i juli (sommertopp?)
- Totalt økte besøket fra 100 til 180, en vekst på 80%

**Tolkning**: Nettsiden vokste gjennom året, men hadde en nedgang mot høsten. Juli var høysesong.`,
    },
    {
      id: '9-6-2-ex-4-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Beskriv og tolk dataene',
        subTasks: [
          { label: 'a', task: 'Temperaturer i en uke: Man 12°, Tir 14°, Ons 15°, Tor 13°, Fre 10°, Lør 8°, Søn 9°. Beskriv utviklingen.', solution: 'Økte til midt i uken (onsdag 15°), deretter gradvis nedgang til helgen (lørdag 8°). Kaldest i helgen.' },
          { label: 'b', task: 'Lag en kort rapport om været basert på dataene.', solution: 'Uken startet mildt og ble varmere mot midten. Fra torsdag sank temperaturen betydelig, og helgen ble kjølig.' },
        ],
        solution: 'a) Topp onsdag, lavest lørdag, b) Se løsningsforslag',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-6-2-ex-5-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Velg riktig diagramtype og begrunn valget',
        subTasks: [
          { label: 'a', task: 'Sammenligning av antall elever i 5 ulike klasser', solution: 'Stolpediagram - sammenligner antall i kategorier' },
          { label: 'b', task: 'Hvordan stroemforbruket i et hus varierer gjennom aaret', solution: 'Linjediagram - viser utvikling over tid' },
          { label: 'c', task: 'Fordeling av karakterer i en klasse (A, B, C, D, E, F)', solution: 'Stolpediagram eller sektordiagram - viser fordeling' },
          { label: 'd', task: 'Hvordan en elevs hoyde har endret seg fra 6 til 15 aar', solution: 'Linjediagram - viser endring over tid' },
        ],
        solution: 'a) Stolpediagram, b) Linjediagram, c) Stolpe/sektor, d) Linjediagram',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-6-2-ex-6-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn vinkler til sektordiagram',
        subTasks: [
          { label: 'a', task: 'En undersokelse viser transportmaater til skolen: Gaa 30%, Sykle 25%, Buss 35%, Bil 10%. Beregn vinklene.', solution: 'Gaa: $0{,}30 \\cdot 360° = 108°$, Sykle: $0{,}25 \\cdot 360° = 90°$, Buss: $0{,}35 \\cdot 360° = 126°$, Bil: $0{,}10 \\cdot 360° = 36°$' },
          { label: 'b', task: 'Kontroller at vinklene summerer til 360 grader.', solution: '$108° + 90° + 126° + 36° = 360°$ \\checkmark' },
          { label: 'c', task: 'Av 200 elever - hvor mange bruker hver transportmaate?', solution: 'Gaa: 60, Sykle: 50, Buss: 70, Bil: 20' },
        ],
        solution: 'a) 108, 90, 126, 36 grader, b) 360 grader, c) 60, 50, 70, 20',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-6-2-ex-7-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Les av fra linjediagram',
        subTasks: [
          { label: 'a', task: 'Et linjediagram viser salg: Jan 50, Feb 60, Mar 80, Apr 70, Mai 90. Hva er stoerst og minst salg?', solution: 'Stoerst: Mai (90), Minst: Januar (50)' },
          { label: 'b', task: 'Mellom hvilke maaneder var okningen stoerst?', solution: 'Februar til mars (+20)' },
          { label: 'c', task: 'Mellom hvilke maaneder var det nedgang?', solution: 'Mars til april (-10)' },
        ],
        solution: 'a) Stoerst: 90, minst: 50, b) Feb-Mar, c) Mar-Apr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-6-2-ex-8-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Kritisk vurdering av diagram',
        subTasks: [
          { label: 'a', task: 'Et stolpediagram viser priser: Butikk A 99 kr, Butikk B 95 kr. Y-aksen starter paa 90 kr. Beskriv problemet.', solution: 'Forskjellen ser mye stoerre ut enn den er. 4 kr forskjell (ca. 4%) ser ut som en betydelig forskjell.' },
          { label: 'b', task: 'Hva er den faktiske prosentvise forskjellen?', solution: '$\\frac{99-95}{99} \\approx 4\\%$' },
          { label: 'c', task: 'Hvordan kan diagrammet forbedres for aa gi et riktigere bilde?', solution: 'Start y-aksen paa 0, eller angi tydelig at aksen er avkortet.' },
        ],
        solution: 'a) Villedende skala, b) ca. 4%, c) Start paa 0',
        hints: ['Se paa hvor y-aksen starter'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-6-2-ex-9-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Fra data til sektordiagram',
        subTasks: [
          { label: 'a', task: 'I en klasse med 30 elever spiller 12 fotball, 8 haandball, 6 basket og 4 annet. Regn ut prosentandelene.', solution: 'Fotball: $\\frac{12}{30} = 40\\%$, Haandball: $\\frac{8}{30} \\approx 26{,}7\\%$, Basket: $\\frac{6}{30} = 20\\%$, Annet: $\\frac{4}{30} \\approx 13{,}3\\%$' },
          { label: 'b', task: 'Beregn vinklene for et sektordiagram.', solution: 'Fotball: $144°$, Haandball: $96°$, Basket: $72°$, Annet: $48°$' },
          { label: 'c', task: 'Tegn sektordiagrammet (skisser eller beskriv).', solution: 'Stoerste sektor (fotball 144 grader) er ca. 2/5 av sirkelen. Minste (annet 48 grader) er ca. 1/8.' },
        ],
        solution: 'a) 40%, 26,7%, 20%, 13,3%, b) 144, 96, 72, 48 grader',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-6-2-ex-10-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammensatt stolpediagram',
        subTasks: [
          { label: 'a', task: 'Gutter og jenter i tre klasser: 9A (12G, 15J), 9B (14G, 14J), 9C (16G, 12J). Hvilken klasse har flest elever?', solution: '9A og 9C har 27 elever hver, 9B har 28 elever. 9B har flest.' },
          { label: 'b', task: 'Hvilken klasse har jevnest fordeling mellom gutter og jenter?', solution: '9B (14-14, helt likt)' },
          { label: 'c', task: 'Beregn gjennomsnittlig antall gutter per klasse.', solution: '$\\frac{12+14+16}{3} = \\frac{42}{3} = 14$' },
        ],
        solution: 'a) 9B (28), b) 9B, c) 14 gutter',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-6-2-ex-11-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Analyse av tidsseriedata',
        subTasks: [
          { label: 'a', task: 'Besokende paa et nettsted per maaned (i 1000): Jan 50, Feb 55, Mar 70, Apr 85, Mai 100, Jun 95. Beskriv trenden.', solution: 'Generell okning fra januar til mai, med en liten nedgang i juni. Vekst paa 100% fra jan til mai.' },
          { label: 'b', task: 'Beregn gjennomsnittlig maanedlig okning fra jan til mai.', solution: 'Total okning: $100-50=50$ tusen. Over 4 perioder: $\\frac{50}{4} = 12{,}5$ tusen per maaned.' },
          { label: 'c', task: 'Hvis trenden fortsetter, hva kan vi forvente i juli? Diskuter usikkerheten.', solution: 'Vanskelig aa si - nedgangen i juni kan vaere starten paa en ny trend, eller bare en midlertidig nedgang. Forenklet: ca. 90-95 tusen.' },
        ],
        solution: 'a) Okning jan-mai, nedgang i juni, b) 12,5 tusen/mnd, c) Usikkert, ca. 90-95',
        hints: ['Se paa monsteret i dataene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-6-2-ex-12-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-2-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Planlegg en statistisk undersokelse',
        subTasks: [
          { label: 'a', task: 'Du vil undersoke hvilke sosiale medier elevene paa skolen bruker mest. Hvilke sporsmaal vil du stille?', solution: 'Eksempel: Hvilke sosiale medier bruker du? Hvor mange timer daglig? Hva bruker du det til?' },
          { label: 'b', task: 'Hvordan vil du samle inn dataene?', solution: 'Sporreundersokelse - digital eller papir. Utvalg: tilfeldig fra alle trinn, eller hele klasser.' },
          { label: 'c', task: 'Hvilke diagramtyper vil du bruke for aa presentere resultatene? Begrunn.', solution: 'Stolpediagram for aa sammenligne plattformer, sektordiagram for fordeling av tid, linjediagram for utvikling over tid.' },
          { label: 'd', task: 'Hvilke feilkilder kan paavirke resultatene?', solution: 'Uaerlige svar, skjevt utvalg, ledende sporsmaal, lav svarprosent.' },
        ],
        solution: 'a) Relevante sporsmaal, b) Sporreundersokelse, c) Tilpassede diagrammer, d) Feilkilder',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-6-2-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '9-6-2-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-6-2-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Les av diagrammer',
            subTasks: [
              { label: 'a', task: 'Et stolpediagram viser antall elever som liker ulike fag: Matte (15), Norsk (10), Engelsk (12), Naturfag (8), Gym (20). Hvilket fag er mest populært?', solution: 'Gym med $20$ elever' },
              { label: 'b', task: 'Hvor mange flere liker Gym enn Naturfag?', solution: '$20 - 8 = 12$ flere' },
              { label: 'c', task: 'Hvor mange elever er med i undersøkelsen totalt?', solution: '$15 + 10 + 12 + 8 + 20 = 65$ elever' },
              { label: 'd', task: 'Hvor stor andel (i prosent) liker Matte?', solution: '$\\frac{15}{65} \\cdot 100 \\approx 23{,}1\\%$' },
              { label: 'e', task: 'Hvor stor andel liker Engelsk?', solution: '$\\frac{12}{65} \\cdot 100 \\approx 18{,}5\\%$' },
              { label: 'f', task: 'Hvis du skulle lage et sektordiagram, hvor mange grader ville «Gym» utgjøre?', solution: '$\\frac{20}{65} \\cdot 360° \\approx 110{,}8°$' },
            ],
            solution: 'a) Gym, b) 12, c) 65, d) 23,1%, e) 18,5%, f) ca. 111 grader',
            hideInlineSolution: true,
            hints: ['Les av verdiene nøyaktig. Prosent = del/helhet ganger 100. Grader = andel ganger 360.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-6-2-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-6-2-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Fra tabell til diagram',
            subTasks: [
              { label: 'a', task: 'Temperaturer gjennom en uke: Man $5°$C, Tir $7°$C, Ons $4°$C, Tor $8°$C, Fre $10°$C, Lør $9°$C, Søn $6°$C. Hvilken diagramtype passer best for disse dataene?', solution: 'Linjediagram, fordi vi viser endring over tid (en tidsserie).' },
              { label: 'b', task: 'Hva var den høyeste temperaturen og hvilken dag?', solution: '$10°$C på fredag' },
              { label: 'c', task: 'Hva var den laveste temperaturen?', solution: '$4°$C på onsdag' },
              { label: 'd', task: 'Hva er variasjonsbredden for temperaturen?', solution: '$10 - 4 = 6°$C' },
              { label: 'e', task: 'Finn gjennomsnittstemperaturen for uken.', solution: '$\\bar{x} = \\frac{5+7+4+8+10+9+6}{7} = \\frac{49}{7} = 7°$C' },
              { label: 'f', task: 'Beskriv trenden i temperaturen gjennom uken.', solution: 'Generell stigning fra mandag til fredag, med en dip på onsdag. Nedgang i helgen.' },
            ],
            solution: 'a) Linjediagram, b) 10 grader (fredag), c) 4 grader (onsdag), d) 6 grader, e) 7 grader, f) Stigende trend med nedgang i helgen',
            hideInlineSolution: true,
            hints: ['Linjediagram brukes for å vise endring over tid. Stolpediagram brukes for å sammenligne kategorier.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-6-2-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-6-2-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Sektordiagram og prosent',
            subTasks: [
              { label: 'a', task: 'Et sektordiagram viser transportmåte til skolen: Buss $40\\%$, Gå $25\\%$, Sykkel $20\\%$, Bil $15\\%$. Det er 200 elever. Hvor mange tar buss?', solution: '$200 \\cdot 0{,}40 = 80$ elever' },
              { label: 'b', task: 'Hvor mange går til skolen?', solution: '$200 \\cdot 0{,}25 = 50$ elever' },
              { label: 'c', task: 'Hvor mange grader utgjør «Sykkel» i sektordiagrammet?', solution: '$0{,}20 \\cdot 360° = 72°$' },
              { label: 'd', task: 'Hvor mange grader utgjør «Bil»?', solution: '$0{,}15 \\cdot 360° = 54°$' },
              { label: 'e', task: 'Sjekk at alle prosentene summerer til $100\\%$.', solution: '$40 + 25 + 20 + 15 = 100\\%$. Stemmer.' },
              { label: 'f', task: 'Sjekk at alle gradene summerer til $360°$.', solution: 'Buss: $144°$, Gå: $90°$, Sykkel: $72°$, Bil: $54°$. Sum: $144 + 90 + 72 + 54 = 360°$. Stemmer.' },
            ],
            solution: 'a) 80 elever, b) 50 elever, c) 72 grader, d) 54 grader, e) 100%, f) 360 grader',
            hideInlineSolution: true,
            hints: ['I et sektordiagram svarer 100% til 360 grader. Antall = prosent ganger totalt antall.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-6-2-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-6-2-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Velg riktig diagramtype',
            subTasks: [
              { label: 'a', task: 'Du vil vise fordelingen av karakterer (1-6) i en klasse. Hvilken diagramtype velger du? Begrunn.', solution: 'Stolpediagram. Karakterer er kategoriske data med naturlig rekkefølge. Stolpene viser antallet i hver kategori.' },
              { label: 'b', task: 'Du vil vise hvordan Norges befolkning fordeler seg på aldersgrupper (0-19, 20-39, osv.). Hvilken diagramtype?', solution: 'Histogram (aldersgrupper er grupperte data), eller stolpediagram med aldersgrupper som kategorier.' },
              { label: 'c', task: 'Du vil vise utviklingen i CO$_2$-utslipp fra 2000 til 2024. Hvilken diagramtype?', solution: 'Linjediagram, fordi det viser endring over tid (tidsserie).' },
              { label: 'd', task: 'Du vil vise markedsandeler for mobilprodusenter (Samsung 25%, Apple 20%, osv.). Hvilken diagramtype?', solution: 'Sektordiagram, fordi det viser andeler av en helhet. Delene skal summere til 100%.' },
              { label: 'e', task: 'Du vil sammenligne gutter og jenters resultater på en matteprøve. Hvilken diagramtype?', solution: 'Boksplott (for å sammenligne spredning) eller sammenstilt stolpediagram (for direkte sammenligning av kategorier).' },
              { label: 'f', task: 'Du vil vise sammenhengen mellom timer lekser og karakter. Hvilken diagramtype?', solution: 'Punktdiagram (spredningsdiagram), fordi vi undersøker sammenhengen mellom to variabler.' },
            ],
            solution: 'a) Stolpediagram, b) Histogram, c) Linjediagram, d) Sektordiagram, e) Boksplott, f) Punktdiagram',
            hideInlineSolution: true,
            hints: ['Tidsserie: linjediagram. Kategorier: stolpediagram. Andeler: sektordiagram. Sammenheng: punktdiagram.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-6-2-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-6-2-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Analyser og sammenlign diagrammer',
            subTasks: [
              { label: 'a', task: 'Et boksplott for klasse A viser: min $= 3$, $Q_1 = 5$, median $= 7$, $Q_3 = 8$, maks $= 10$. Hva er variasjonsbredden?', solution: '$10 - 3 = 7$' },
              { label: 'b', task: 'Hva er IQR (interkvartilbredden)?', solution: '$Q_3 - Q_1 = 8 - 5 = 3$' },
              { label: 'c', task: 'Klasse B har boksplott: min $= 5$, $Q_1 = 6$, median $= 7$, $Q_3 = 8$, maks $= 9$. Hvilken klasse har mest spredte resultater?', solution: 'Klasse A har variasjonsbredde $7$ og IQR $3$. Klasse B har variasjonsbredde $4$ og IQR $2$. Klasse A har mest spredte resultater.' },
              { label: 'd', task: 'Begge har median $7$. Hva betyr det?', solution: 'Halvparten av elevene i begge klassene fikk $7$ eller bedre. Midtnivået er likt.' },
              { label: 'e', task: 'I hvilken klasse er det mest sannsynlig å finne elever med svært lave resultater? Begrunn.', solution: 'Klasse A, fordi minimum er $3$ mot B sin $5$. Klasse A har større spredning nedover.' },
            ],
            solution: 'a) 7, b) 3, c) Klasse A mest spredt, d) Likt midtnivå, e) Klasse A',
            hideInlineSolution: true,
            hints: ['Boksplott viser min, Q1, median, Q3 og maks. IQR = Q3 - Q1.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-6-2-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-6-2-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Kritisk vurdering av villedende diagrammer',
            subTasks: [
              { label: 'a', task: 'Et stolpediagram viser salg i januar ($100\\,000$ kr) og februar ($110\\,000$ kr), men y-aksen starter på $95\\,000$ kr. Hva er den faktiske prosentvise økningen?', solution: '$\\frac{110000 - 100000}{100000} \\cdot 100 = 10\\%$' },
              { label: 'b', task: 'Forklar hvorfor diagrammet er villedende.', solution: 'Når y-aksen ikke starter på $0$, ser forskjellen mellom søylene mye større ut enn den faktisk er. Visuelt kan det se ut som en dobling, mens det bare er $10\\%$ økning.' },
              { label: 'c', task: 'Et sektordiagram viser valgresultater, men sektorene summerer til $120\\%$. Hva er feilen, og hvorfor er dette et problem?', solution: 'Sektorene skal alltid summere til $100\\%$ (eller $360°$). Enten er prosentene feil, eller respondentene kunne velge flere alternativer, og da er sektordiagram feil diagramtype.' },
              { label: 'd', task: 'En avisoverskrift sier «Kriminaliteten doblet!» og viser et linjediagram der antall tyverier gikk fra $50$ til $100$ over 10 år. Hva mangler for å vurdere dette riktig?', solution: 'Vi trenger å vite om befolkningen har vokst. Hvis befolkningen doblet seg, er raten den samme. Vi trenger kriminalitet per innbygger, ikke bare totaltall.' },
            ],
            solution: 'a) 10%, b) Y-aksen starter ikke på 0, c) Prosentene summerer til mer enn 100%, d) Mangler befolkningsdata',
            hideInlineSolution: true,
            hints: ['Se alltid på aksene: Starter y-aksen på 0? Er skalaen jevn?', 'Sjekk at prosentene i et sektordiagram summerer til 100%.', 'Vær kritisk til overskrifter som ikke setter tall i kontekst.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_9_6_3: TextbookChapter = {
  id: '9-6-3',
  courseId: '9',
  chapterNumber: '6.3',
  title: 'Sannsynlighetsberegning',
  description: 'Beregne sannsynligheter for sammensatte hendelser.',
  estimatedMinutes: 50,
  competenceGoals: ['bruke programmering til å utforske sannsyn'],
  content: [
    {
      id: '9-6-3-intro',
      type: 'text',
      content: `**Sannsynlighet** måler hvor sannsynlig en hendelse er på en skala fra 0 (umulig) til 1 (sikkert). For sammensatte hendelser bruker vi regler for å kombinere sannsynligheter.`,
    },
    {
      id: '9-6-3-def-1',
      type: 'definition',
      title: 'Grunnleggende sannsynlighet',
      content: `**Sannsynlighet** for en hendelse A:
$$P(A) = \\frac{\\text{antall gunstige utfall}}{\\text{antall mulige utfall}}$$

**Eksempel**: Terning - sannsynligheten for å få 6:
$$P(6) = \\frac{1}{6}$$`,
    },
    {
      id: '9-6-3-kortstokk-info',
      type: 'tip',
      title: 'Om kortstokken',
      content: `En standard kortstokk har **52 kort** fordelt på **4 farger**:

| Farge | Symbol | Farge på kortet |
|-------|--------|-----------------|
| **Hjerter** | ♥ | Rød |
| **Ruter** | ♦ | Rød |
| **Spar** | ♠ | Sort |
| **Kløver** | ♣ | Sort |

Hver farge har **13 kort**: Ess (1), 2, 3, 4, 5, 6, 7, 8, 9, 10, Knekt, Dame, Konge.

**Nyttige tall:**
- Totalt: 52 kort
- Hver farge: 13 kort
- Røde kort: 26 (hjerter + ruter)
- Sorte kort: 26 (spar + kløver)
- Ess: 4 (ett i hver farge)
- Bildekort (knekt, dame, konge): 12 (3 per farge)`,
    },
    {
      id: '9-6-3-ex-1',
      type: 'example',
      title: 'Eksempel 1',
      problem: 'En kortstokk har 52 kort. Finn sannsynligheten for å trekke:\na) Et ess\nb) En ruter',
      solution: `**a) Et ess**:
- Gunstige utfall: 4 ess
- Mulige utfall: 52 kort
- $P(\\text{ess}) = \\frac{4}{52} = \\frac{1}{13}$

**b) En ruter**:
- Gunstige utfall: 13 ruterkort
- Mulige utfall: 52 kort
- $P(\\text{ruter}) = \\frac{13}{52} = \\frac{1}{4}$`,
    },
    {
      id: '9-6-3-ex-1-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn sannsynligheten',
        subTasks: [
          { label: 'a', task: 'Trekke en rød kule fra en pose med 3 røde og 7 blå kuler. Oppgi svaret som brøk.', solution: '$P = \\frac{3}{10} = 0{,}3 = 30\\%$', expressionAnswer: ['3/10'] },
          { label: 'b', task: 'Kaste en terning og få et partall. Oppgi svaret som brøk.', solution: '$P = \\frac{3}{6} = \\frac{1}{2} = 50\\%$', expressionAnswer: ['1/2', '3/6'] },
          { label: 'c', task: 'Trekke et bildekort fra en kortstokk (knekt, dame, konge). Oppgi svaret som brøk.', solution: '$P = \\frac{12}{52} = \\frac{3}{13} \\approx 23\\%$', expressionAnswer: ['3/13', '12/52'] },
        ],
        solution: 'a) 30%, b) 50%, c) ca. 23%',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-6-3-def-2',
      type: 'definition',
      title: 'Produktregelen (OG)',
      content: `For **uavhengige hendelser** der begge skal skje:

$$P(A \\text{ og } B) = P(A) \\cdot P(B)$$

Brukes når hendelsene ikke påvirker hverandre (f.eks. to terningkast).`,
    },
    {
      id: '9-6-3-ex-2',
      type: 'example',
      title: 'Eksempel 2',
      problem: 'Du kaster en mynt og en terning. Finn sannsynligheten for å få kron OG 6.',
      solution: `Hendelsene er uavhengige.

$P(\\text{kron}) = \\frac{1}{2}$

$P(6) = \\frac{1}{6}$

$P(\\text{kron og 6}) = \\frac{1}{2} \\cdot \\frac{1}{6} = \\frac{1}{12} \\approx 8{,}3\\%$`,
    },
    {
      id: '9-6-3-ex-2-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk produktregelen',
        subTasks: [
          { label: 'a', task: 'Kaste to terninger og få 6 på begge. Oppgi svaret som brøk.', solution: '$P = \\frac{1}{6} \\cdot \\frac{1}{6} = \\frac{1}{36} \\approx 2{,}8\\%$', expressionAnswer: ['1/36'] },
          { label: 'b', task: 'Kaste en mynt tre ganger og få kron alle gangene. Oppgi svaret som brøk.', solution: '$P = \\frac{1}{2}^3 = \\frac{1}{8} = 12{,}5\\%$', expressionAnswer: ['1/8'] },
          { label: 'c', task: 'Trekke to kort (med tilbakelegging) og få to ess. Oppgi svaret som brøk.', solution: '$P = \\frac{4}{52} \\cdot \\frac{4}{52} = \\frac{1}{169} \\approx 0{,}6\\%$', expressionAnswer: ['1/169', '16/2704'] },
        ],
        solution: 'a) 2,8%, b) 12,5%, c) ca. 0,6%',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-6-3-def-3',
      type: 'definition',
      title: 'Sumregelen (ELLER)',
      content: `For **disjunkte hendelser** (som ikke kan skje samtidig):

$$P(A \\text{ eller } B) = P(A) + P(B)$$

**Eksempel**: Sannsynligheten for 1 eller 6 på en terning:
$P(1) + P(6) = \\frac{1}{6} + \\frac{1}{6} = \\frac{2}{6} = \\frac{1}{3}$`,
    },
    {
      id: '9-6-3-ex-3',
      type: 'example',
      title: 'Eksempel 3',
      problem: 'En pose har 4 røde, 3 blå og 5 grønne kuler. Finn sannsynligheten for å trekke rød ELLER blå.',
      solution: `Totalt: $4 + 3 + 5 = 12$ kuler

$P(\\text{rød}) = \\frac{4}{12} = \\frac{1}{3}$

$P(\\text{blå}) = \\frac{3}{12} = \\frac{1}{4}$

Hendelsene er disjunkte (kan ikke få begge samtidig):

$P(\\text{rød eller blå}) = \\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12} \\approx 58\\%$`,
    },
    {
      id: '9-6-3-ex-3-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk sumregelen',
        subTasks: [
          { label: 'a', task: 'Terning: Få 1, 2 eller 3. Oppgi svaret som brøk.', solution: '$P = \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} = \\frac{3}{6} = 50\\%$', expressionAnswer: ['1/2', '3/6'] },
          { label: 'b', task: 'Kortstokk: Trekke spar eller kløver. Oppgi svaret som brøk.', solution: '$P = \\frac{13}{52} + \\frac{13}{52} = \\frac{26}{52} = 50\\%$', expressionAnswer: ['1/2', '26/52'] },
        ],
        solution: 'a) 50%, b) 50%',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-6-3-ex-4',
      type: 'example',
      title: 'Eksempel 4',
      problem: 'Du kaster to terninger. Finn sannsynligheten for at summen er 7.',
      solution: `**Gunstige utfall** (sum = 7):
- (1,6), (2,5), (3,4), (4,3), (5,2), (6,1)
- Antall: 6

**Totalt antall utfall**: $6 \\cdot 6 = 36$

$P(\\text{sum } 7) = \\frac{6}{36} = \\frac{1}{6} \\approx 16{,}7\\%$`,
    },
    {
      id: '9-6-3-ex-4-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs de sammensatte sannsynlighetsoppgavene',
        subTasks: [
          { label: 'a', task: 'To terninger: Finn sannsynligheten for sum 11. Oppgi svaret som brøk.', solution: 'Gunstige: (5,6), (6,5). $P = \\frac{2}{36} = \\frac{1}{18} \\approx 5{,}6\\%$', expressionAnswer: ['1/18', '2/36'] },
          { label: 'b', task: 'Tre myntkast: Finn sannsynligheten for nøyaktig 2 kron. Oppgi svaret som brøk.', solution: 'Gunstige: KKM, KMK, MKK (3 utfall). Totalt: 8. $P = \\frac{3}{8} = 37{,}5\\%$', expressionAnswer: ['3/8'] },
        ],
        solution: 'a) ca. 5,6%, b) 37,5%',
        hints: ['List opp alle gunstige utfall systematisk'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== KOMPLEMENTÆR SANNSYNLIGHET ==========
    {
      id: '9-6-3-def-4',
      type: 'definition',
      title: 'Komplementær sannsynlighet',
      content: `**Komplementet** til en hendelse A er at A **ikke** skjer. Vi skriver $\\overline{A}$ eller "ikke A".

$$P(\\text{ikke } A) = 1 - P(A)$$

**Nyttig når**: Det er lettere å regne ut sannsynligheten for det motsatte, f.eks. "minst én" beregnes via "ingen".`,
    },
    {
      id: '9-6-3-ex-5',
      type: 'example',
      title: 'Eksempel 5',
      problem: 'Du kaster en terning 3 ganger. Finn sannsynligheten for å få minst én sekser.',
      solution: `**Strategi**: Bruk komplementet - det er lettere å regne ut "ingen seksere".

$P(\\text{ikke 6}) = \\frac{5}{6}$ for hvert kast

$P(\\text{ingen seksere på 3 kast}) = \\left(\\frac{5}{6}\\right)^3 = \\frac{125}{216}$

$P(\\text{minst én sekser}) = 1 - \\frac{125}{216} = \\frac{91}{216} \\approx 42\\%$`,
    },
    {
      id: '9-6-3-ex-5-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk komplementær sannsynlighet',
        subTasks: [
          { label: 'a', task: 'Kaste en mynt 4 ganger: Sannsynlighet for minst én kron. Oppgi svaret som brøk.', solution: '$P(\\text{ingen kron}) = (\\frac{1}{2})^4 = \\frac{1}{16}$. $P(\\text{minst én}) = 1 - \\frac{1}{16} = \\frac{15}{16} = 93{,}75\\%$', expressionAnswer: ['15/16'] },
          { label: 'b', task: 'Trekke 2 kort (med tilbakelegging): Sannsynlighet for minst ett ess. Oppgi svaret som brøk.', solution: '$P(\\text{ikke ess}) = \\frac{48}{52} = \\frac{12}{13}$. $P(\\text{ingen ess}) = (\\frac{12}{13})^2 \\approx 0{,}85$. $P(\\text{minst ett}) \\approx 15\\%$', expressionAnswer: ['25/169'] },
          { label: 'c', task: 'Kaste terning 2 ganger: Sannsynlighet for minst ett partall. Oppgi svaret som brøk.', solution: '$P(\\text{oddetall}) = \\frac{1}{2}$. $P(\\text{to oddetall}) = \\frac{1}{4}$. $P(\\text{minst ett partall}) = 1 - \\frac{1}{4} = 75\\%$', expressionAnswer: ['3/4'] },
        ],
        solution: 'a) 93,75%, b) ca. 15%, c) 75%',
        hints: ['Regn ut P(ingen), så bruk P(minst én) = 1 - P(ingen)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TREDIAGRAM ==========
    {
      id: '9-6-3-def-5',
      type: 'definition',
      title: 'Trediagram',
      content: `Et **trediagram** viser alle mulige utfall for sammensatte forsøk.

**Oppbygging**:
- Hver gren representerer ett utfall
- Sannsynlighetene skrives langs grenene
- **Multiplikasjon** langs en sti gir sannsynligheten for den kombinasjonen
- **Addisjon** av stier gir sannsynligheten for "eller"`,
    },
    {
      id: '9-6-3-ex-6',
      type: 'example',
      title: 'Eksempel 6',
      problem: 'En pose har 3 røde og 2 blå kuler. Du trekker én kule, legger den tilbake, og trekker igjen. Bruk trediagram til å finne sannsynligheten for å få to like farger.',
      solution: `**Trediagram med tilbakelegging**

Vi har 3 røde og 2 blå kuler, totalt 5 kuler. Sannsynlighetene er:
- $P(\\text{rød}) = \\frac{3}{5}$
- $P(\\text{blå}) = \\frac{2}{5}$

| Første trekk | Andre trekk | Utregning | Sannsynlighet |
|:-------------|:------------|:----------|:--------------|
| Rød | Rød | $\\frac{3}{5} \\cdot \\frac{3}{5}$ | $\\frac{9}{25}$ |
| Rød | Blå | $\\frac{3}{5} \\cdot \\frac{2}{5}$ | $\\frac{6}{25}$ |
| Blå | Rød | $\\frac{2}{5} \\cdot \\frac{3}{5}$ | $\\frac{6}{25}$ |
| Blå | Blå | $\\frac{2}{5} \\cdot \\frac{2}{5}$ | $\\frac{4}{25}$ |

**To like farger** betyr Rød-Rød eller Blå-Blå:

$$P(\\text{to like}) = \\frac{9}{25} + \\frac{4}{25} = \\frac{13}{25} = 52\\%$$`,
    },
    {
      id: '9-6-3-ex-6-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk trediagram til å løse oppgavene',
        subTasks: [
          { label: 'a', task: 'Kast mynt to ganger. Tegn trediagram og finn P(nøyaktig én kron). Oppgi svaret som brøk.', solution: 'Utfall: KK, KM, MK, MM. Nøyaktig én kron: KM eller MK. $P = \\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2} = 50\\%$', expressionAnswer: ['1/2', '2/4'] },
          { label: 'b', task: 'Pose med 4 røde og 1 grønn kule (med tilbakelegging). Trekk 2 ganger. Finn P(minst én grønn). Oppgi svaret som brøk.', solution: '$P(\\text{RR}) = \\frac{16}{25}$. $P(\\text{minst én grønn}) = 1 - \\frac{16}{25} = \\frac{9}{25} = 36\\%$', expressionAnswer: ['9/25'] },
          { label: 'c', task: 'Terning kastes 2 ganger. Finn P(summen er partall) ved å telle gunstige stier. Oppgi svaret som brøk.', solution: 'Partall+Partall eller Oddetall+Oddetall. $P = \\frac{1}{2} \\cdot \\frac{1}{2} + \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{2} = 50\\%$', expressionAnswer: ['1/2'] },
        ],
        solution: 'a) 50%, b) 36%, c) 50%',
        hints: ['Tegn alle grener systematisk', 'Gang sannsynlighetene langs hver sti'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TREKKING UTEN TILBAKELEGGING ==========
    {
      id: '9-6-3-def-6',
      type: 'definition',
      title: 'Trekking uten tilbakelegging',
      content: `Når vi trekker **uten tilbakelegging**, endres sannsynlighetene etter hvert trekk fordi antall objekter minker.

**Eksempel**: Pose med 5 kuler (3 røde, 2 blå).
- Første trekk: $P(\\text{rød}) = \\frac{3}{5}$
- Andre trekk hvis første var rød: $P(\\text{rød}) = \\frac{2}{4}$ (nå 4 kuler igjen, 2 røde)`,
    },
    {
      id: '9-6-3-ex-7',
      type: 'example',
      title: 'Eksempel 7',
      problem: 'Fra en kortstokk (52 kort) trekker du 2 kort UTEN tilbakelegging. Finn sannsynligheten for å få to ess.',
      solution: `**Første trekk**:
$P(\\text{ess}) = \\frac{4}{52} = \\frac{1}{13}$

**Andre trekk** (gitt at første var ess):
$P(\\text{ess}) = \\frac{3}{51} = \\frac{1}{17}$

**Begge ess**:
$P = \\frac{4}{52} \\cdot \\frac{3}{51} = \\frac{12}{2652} = \\frac{1}{221} \\approx 0{,}45\\%$

**Sammenligning**: Med tilbakelegging ville det vært $\\frac{4}{52} \\cdot \\frac{4}{52} \\approx 0{,}59\\%$`,
    },
    {
      id: '9-6-3-ex-7-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Regn med trekking uten tilbakelegging',
        subTasks: [
          { label: 'a', task: 'Pose med 6 røde og 4 blå kuler. Trekk 2 uten tilbakelegging. Finn P(begge røde). Oppgi svaret som brøk.', solution: '$P = \\frac{6}{10} \\cdot \\frac{5}{9} = \\frac{30}{90} = \\frac{1}{3} \\approx 33\\%$', expressionAnswer: ['1/3', '30/90'] },
          { label: 'b', task: 'Kortstokk: Trekk 2 kort uten tilbakelegging. Finn P(begge er hjerter). Oppgi svaret som brøk.', solution: '$P = \\frac{13}{52} \\cdot \\frac{12}{51} = \\frac{156}{2652} = \\frac{1}{17} \\approx 5{,}9\\%$', expressionAnswer: ['1/17', '156/2652'] },
          { label: 'c', task: 'Klasse med 12 jenter og 8 gutter. Velg 2 elever tilfeldig. Finn P(begge er jenter). Oppgi svaret som brøk.', solution: '$P = \\frac{12}{20} \\cdot \\frac{11}{19} = \\frac{132}{380} = \\frac{33}{95} \\approx 34{,}7\\%$', expressionAnswer: ['33/95', '132/380'] },
        ],
        solution: 'a) ca. 33%, b) ca. 5,9%, c) ca. 34,7%',
        hints: ['Husk at antallet minker med 1 for hvert trekk'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-6-3-ex-8-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'lett',
        task: 'Grunnleggende sannsynlighet',
        subTasks: [
          { label: 'a', task: 'En pose har 8 røde, 5 blå og 2 grønne kuler. Finn sannsynligheten for å trekke en blå kule. Oppgi svaret som brøk.', solution: '$P(\\text{blaa}) = \\frac{5}{15} = \\frac{1}{3} \\approx 33\\%$', expressionAnswer: ['1/3', '5/15'] },
          { label: 'b', task: 'Finn sannsynligheten for å trekke en kule som IKKE er rød. Oppgi svaret som brøk.', solution: '$P(\\text{ikke roed}) = \\frac{5+2}{15} = \\frac{7}{15} \\approx 47\\%$', expressionAnswer: ['7/15'] },
          { label: 'c', task: 'Et lykkehjul har 12 like store felter: 4 røde, 3 blå, 3 grønne og 2 gule. Finn P(rød eller gul). Oppgi svaret som brøk.', solution: '$P = \\frac{4+2}{12} = \\frac{6}{12} = \\frac{1}{2} = 50\\%$', expressionAnswer: ['1/2', '6/12'] },
        ],
        solution: 'a) 1/3, b) 7/15, c) 50%',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-6-3-ex-9-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammensatte hendelser med terninger',
        subTasks: [
          { label: 'a', task: 'Du kaster to terninger. Finn sannsynligheten for at summen er 9. Oppgi svaret som brøk.', solution: 'Gunstige: (3,6), (4,5), (5,4), (6,3) = 4 utfall. $P = \\frac{4}{36} = \\frac{1}{9} \\approx 11\\%$', expressionAnswer: ['1/9', '4/36'] },
          { label: 'b', task: 'Finn sannsynligheten for at produktet av terningene er 12. Oppgi svaret som brøk.', solution: 'Gunstige: (2,6), (3,4), (4,3), (6,2) = 4 utfall. $P = \\frac{4}{36} = \\frac{1}{9} \\approx 11\\%$', expressionAnswer: ['1/9', '4/36'] },
          { label: 'c', task: 'Finn sannsynligheten for at differansen mellom terningene er 0 (like tall). Oppgi svaret som brøk.', solution: 'Gunstige: (1,1), (2,2), (3,3), (4,4), (5,5), (6,6) = 6 utfall. $P = \\frac{6}{36} = \\frac{1}{6} \\approx 17\\%$', expressionAnswer: ['1/6', '6/36'] },
        ],
        solution: 'a) 1/9, b) 1/9, c) 1/6',
        hints: ['Totalt antall utfall med to terninger er $6 \\cdot 6 = 36$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-6-3-ex-10-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Betinget sannsynlighet og avhengige hendelser',
        subTasks: [
          { label: 'a', task: 'En skuff har 10 hvite og 5 svarte sokker. Du trekker 2 sokker uten å se (uten tilbakelegging). Finn P(begge hvite). Oppgi svaret som brøk.', solution: '$P = \\frac{10}{15} \\cdot \\frac{9}{14} = \\frac{90}{210} = \\frac{3}{7} \\approx 43\\%$', expressionAnswer: ['3/7', '90/210'] },
          { label: 'b', task: 'Finn P(ett par like sokker). Oppgi svaret som brøk.', solution: 'P(begge hvite) + P(begge svarte) = $\\frac{10}{15} \\cdot \\frac{9}{14} + \\frac{5}{15} \\cdot \\frac{4}{14} = \\frac{90+20}{210} = \\frac{110}{210} = \\frac{11}{21} \\approx 52\\%$', expressionAnswer: ['11/21', '110/210'] },
          { label: 'c', task: 'Finn P(ulike sokker). Oppgi svaret som brøk.', solution: '$P = 1 - \\frac{11}{21} = \\frac{10}{21} \\approx 48\\%$, eller: $\\frac{10}{15} \\cdot \\frac{5}{14} + \\frac{5}{15} \\cdot \\frac{10}{14} = \\frac{100}{210} = \\frac{10}{21}$', expressionAnswer: ['10/21', '100/210'] },
        ],
        solution: 'a) 3/7, b) 11/21, c) 10/21',
        hints: ['Etter foerste trekk er det ett mindre objekt i skuffen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-6-3-ex-11-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Kompleks sannsynlighetsberegning',
        subTasks: [
          { label: 'a', task: 'Et lotteri har 100 lodd, 10 gir gevinst. Du kjøper 3 lodd. Finn P(minst en gevinst) med tilbakelegging. Oppgi svaret som brøk (bruk 1000 som nevner).', solution: '$P(\\text{ingen gevinst}) = (\\frac{90}{100})^3 = 0{,}729$. $P(\\text{minst en}) = 1 - 0{,}729 = 0{,}271 = 27{,}1\\%$', expressionAnswer: ['271/1000'] },
          { label: 'b', task: 'Samme lotteri, men UTEN tilbakelegging. Finn P(minst en gevinst). Oppgi svaret som brøk (bruk 970200 som nevner).', solution: '$P(\\text{ingen}) = \\frac{90}{100} \\cdot \\frac{89}{99} \\cdot \\frac{88}{98} \\approx 0{,}726$. $P(\\text{minst en}) \\approx 27{,}4\\%$', expressionAnswer: ['265716/970200'] },
          { label: 'c', task: 'Hvorfor er svaret i b) litt høyere enn i a)?', solution: 'Uten tilbakelegging, når du trekker et ikke-gevinstlodd, økes sjansen for gevinst litt i neste trekk fordi det er færre lodd igjen.', multipleChoiceOptions: ['Sannsynligheten endres etter hvert trekk fordi det er færre lodd igjen', 'Loddene har forskjellig verdi', 'Det er flere gevinstlodd i b)', 'Tilfeldig variasjon'] },
        ],
        solution: 'a) 27,1%, b) 27,4%, c) Sannsynligheten endres etter hvert trekk',
        hints: ['Bruk komplementaer sannsynlighet: P(minst en) = 1 - P(ingen)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '9-6-3-ex-12-exercise',
      type: 'exercise',
      exercise: {
        id: '9-6-3-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Praktiske sannsynlighetsoppgaver',
        subTasks: [
          { label: 'a', task: 'I en klasse med 25 elever er det 60% sannsynlighet for at minst 2 har samme bursdag i samme måned. Hvorfor er dette høyere enn mange tror?', solution: 'Vi sammenligner alle mulige par av elever. Med 25 elever er det $\\frac{25 \\cdot 24}{2} = 300$ par som kan matche, noe som gir mange sjanser for treff.', multipleChoiceOptions: ['Fordi vi sammenligner mange par av elever (300 par)', 'Fordi det er 12 måneder i et år', 'Fordi bursdager er jevnt fordelt', 'Fordi klassen er stor'] },
          { label: 'b', task: 'En test har 5 flervalgsspørsmål med 4 alternativer hver. Finn P(å gjette alle riktig). Oppgi svaret som brøk.', solution: '$P = (\\frac{1}{4})^5 = \\frac{1}{1024} \\approx 0{,}1\\%$', expressionAnswer: ['1/1024'] },
          { label: 'c', task: 'Finn P(å gjette minst 4 av 5 riktig). Oppgi svaret som brøk.', solution: '$P(\\text{4 riktig}) = \\binom{5}{4} \\cdot (\\frac{1}{4})^4 \\cdot \\frac{3}{4} = 5 \\cdot \\frac{3}{1024} = \\frac{15}{1024}$. $P(\\text{5 riktig}) = \\frac{1}{1024}$. Totalt: $\\frac{16}{1024} = \\frac{1}{64} \\approx 1{,}6\\%$', expressionAnswer: ['1/64', '16/1024'] },
          { label: 'd', task: 'En dør har kode med 4 siffer (0-9). Hvor mange forsøk trenger du i verste fall for å finne koden?', solution: 'Antall mulige koder: $10^4 = 10000$. Verste fall: 10000 forsøk (men i snitt 5000).', answer: 10000 },
        ],
        solution: 'a) Mange par, b) 0,1%, c) 1,6%, d) 10000',
        hints: ['Bursdagsparadokset handler om antall mulige par, ikke antall personer'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== LØS OPPGAVEN ==========
    {
      id: '9-6-3-los-oppgaven',
      type: 'collapsible',
      title: 'Løs oppgaven',
      buttonText: 'Vis oppgave',
      content: [
        {
          id: '9-6-3-los-oppgaven-intro',
          type: 'text',
          content: `Her får du en større oppgave som kombinerer flere emner fra kapittelet. Ta deg god tid og vis utregningen.`,
        },
        {
          id: '9-6-3-los-oppgaven-exercise',
          type: 'exercise',
          exercise: {
            id: '9-6-3-los-ex-1',
            number: 'Hovedoppgave',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'En pose inneholder 5 røde, 3 blå og 2 grønne kuler. Du skal trekke kuler fra posen.',
            subTasks: [
              {
                label: 'a',
                task: 'Du trekker én kule. Finn sannsynligheten for å trekke en rød kule. Oppgi svaret som brøk.',
                solution: '$P(\\text{rød}) = \\frac{5}{10} = \\frac{1}{2} = 50\\%$',
                expressionAnswer: ['1/2', '5/10']
              },
              {
                label: 'b',
                task: 'Du trekker én kule. Finn sannsynligheten for å trekke en kule som IKKE er grønn. Oppgi svaret som brøk.',
                solution: '$P(\\text{ikke grønn}) = \\frac{5+3}{10} = \\frac{8}{10} = 80\\%$, eller bruk komplementet: $P = 1 - \\frac{2}{10} = 80\\%$',
                expressionAnswer: ['4/5', '8/10']
              },
              {
                label: 'c',
                task: 'Du trekker to kuler MED tilbakelegging. Finn sannsynligheten for å få to røde kuler. Oppgi svaret som brøk.',
                solution: 'Med tilbakelegging (produktregelen): $P = \\frac{5}{10} \\cdot \\frac{5}{10} = \\frac{25}{100} = 25\\%$',
                expressionAnswer: ['1/4', '25/100']
              },
              {
                label: 'd',
                task: 'Du trekker to kuler UTEN tilbakelegging. Finn sannsynligheten for å få to røde kuler. Oppgi svaret som brøk.',
                solution: 'Uten tilbakelegging: $P = \\frac{5}{10} \\cdot \\frac{4}{9} = \\frac{20}{90} = \\frac{2}{9} \\approx 22{,}2\\%$',
                expressionAnswer: ['2/9', '20/90']
              },
              {
                label: 'e',
                task: 'Du trekker tre kuler MED tilbakelegging. Finn sannsynligheten for å få minst én blå kule. Oppgi svaret som brøk.',
                solution: 'Bruk komplementet: $P(\\text{ingen blå}) = (\\frac{7}{10})^3 = \\frac{343}{1000} = 34{,}3\\%$. Dermed: $P(\\text{minst én blå}) = 1 - 0{,}343 = 65{,}7\\%$',
                expressionAnswer: ['657/1000']
              },
              {
                label: 'f',
                task: 'Du trekker to kuler UTEN tilbakelegging. Finn sannsynligheten for å få to kuler med ulik farge. Oppgi svaret som brøk.',
                solution: `Trediagram med R, B, G som utfall. Ulike farger: RB + RG + BR + BG + GR + GB.
$P = \\frac{5}{10} \\cdot \\frac{3}{9} + \\frac{5}{10} \\cdot \\frac{2}{9} + \\frac{3}{10} \\cdot \\frac{5}{9} + \\frac{3}{10} \\cdot \\frac{2}{9} + \\frac{2}{10} \\cdot \\frac{5}{9} + \\frac{2}{10} \\cdot \\frac{3}{9}$
$= \\frac{15 + 10 + 15 + 6 + 10 + 6}{90} = \\frac{62}{90} = \\frac{31}{45} \\approx 68{,}9\\%$`,
                expressionAnswer: ['31/45', '62/90']
              },
            ],
            solution: 'a) 50%, b) 80%, c) 25%, d) ≈22,2%, e) ≈65,7%, f) ≈68,9%',
            hints: [
              'Del a-b: Bruk grunnformelen for sannsynlighet',
              'Del c-d: Pass på forskjellen mellom med og uten tilbakelegging',
              'Del e: Bruk P(minst én) = 1 - P(ingen)',
              'Del f: List opp alle kombinasjoner som gir ulike farger'
            ],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },

    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-6-3-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        // Repetisjonsoppgave 1 - Grunnleggende sannsynlighet
        {
          id: '9-6-3-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-6-3-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Finn sannsynligheten',
            subTasks: [
              { label: 'a', task: 'Trekke en grønn kule fra en pose med 5 grønne, 3 røde og 2 blå kuler', solution: '$P = \\frac{5}{10} = 0{,}5 = 50\\%$' },
              { label: 'b', task: 'Kaste en terning og få et tall større enn 4', solution: '$P = \\frac{2}{6} = \\frac{1}{3} \\approx 33\\%$' },
              { label: 'c', task: 'Trekke en dame fra en kortstokk', solution: '$P = \\frac{4}{52} = \\frac{1}{13} \\approx 7{,}7\\%$' },
              { label: 'd', task: 'Trekke et sort kort (spar eller kløver) fra en kortstokk', solution: '$P = \\frac{26}{52} = \\frac{1}{2} = 50\\%$' },
            ],
            solution: 'a) 50%, b) 1/3 ≈ 33%, c) 1/13 ≈ 7,7%, d) 50%',
            hideInlineSolution: true,
            hints: ['P(A) = gunstige/mulige'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // Repetisjonsoppgave 2 - Produktregelen
        {
          id: '9-6-3-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-6-3-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'medium',
            task: 'Bruk produktregelen (uavhengige hendelser)',
            subTasks: [
              { label: 'a', task: 'Kast terning 2 ganger. Finn P(to seksere)', solution: '$P = \\frac{1}{6} \\cdot \\frac{1}{6} = \\frac{1}{36} \\approx 2{,}8\\%$' },
              { label: 'b', task: 'Kast mynt 5 ganger. Finn P(fem kron)', solution: '$P = (\\frac{1}{2})^5 = \\frac{1}{32} \\approx 3{,}1\\%$' },
              { label: 'c', task: 'Trekk 3 kort med tilbakelegging. Finn P(tre spar)', solution: '$P = (\\frac{13}{52})^3 = (\\frac{1}{4})^3 = \\frac{1}{64} \\approx 1{,}6\\%$' },
              { label: 'd', task: 'Kast 2 terninger. Finn P(begge større enn 3)', solution: '$P = \\frac{3}{6} \\cdot \\frac{3}{6} = \\frac{1}{4} = 25\\%$' },
            ],
            solution: 'a) 1/36 ≈ 2,8%, b) 1/32 ≈ 3,1%, c) 1/64 ≈ 1,6%, d) 1/4 = 25%',
            hideInlineSolution: true,
            hints: ['P(A og B) = P(A) · P(B) for uavhengige hendelser'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // Repetisjonsoppgave 3 - Sumregelen
        {
          id: '9-6-3-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-6-3-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'medium',
            task: 'Bruk sumregelen (disjunkte hendelser)',
            subTasks: [
              { label: 'a', task: 'Terning: Finn P(1 eller 2 eller 3)', solution: '$P = \\frac{3}{6} = \\frac{1}{2} = 50\\%$' },
              { label: 'b', task: 'Kortstokk: Finn P(ess eller konge)', solution: '$P = \\frac{4}{52} + \\frac{4}{52} = \\frac{8}{52} = \\frac{2}{13} \\approx 15{,}4\\%$' },
              { label: 'c', task: 'Pose med 4 røde, 3 blå, 2 grønne, 1 gul kule. Finn P(rød eller gul)', solution: '$P = \\frac{4}{10} + \\frac{1}{10} = \\frac{5}{10} = 50\\%$' },
            ],
            solution: 'a) 50%, b) 2/13 ≈ 15,4%, c) 50%',
            hideInlineSolution: true,
            hints: ['P(A eller B) = P(A) + P(B) når A og B ikke kan skje samtidig'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // Repetisjonsoppgave 4 - Komplementær
        {
          id: '9-6-3-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-6-3-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Bruk komplementær sannsynlighet',
            subTasks: [
              { label: 'a', task: 'Kast terning 3 ganger. Finn P(minst én ener)', solution: '$P = 1 - (\\frac{5}{6})^3 = 1 - \\frac{125}{216} = \\frac{91}{216} \\approx 42\\%$' },
              { label: 'b', task: 'Kast mynt 6 ganger. Finn P(minst én kron)', solution: '$P = 1 - (\\frac{1}{2})^6 = 1 - \\frac{1}{64} = \\frac{63}{64} \\approx 98\\%$' },
              { label: 'c', task: 'Trekk 3 kort med tilbakelegging. Finn P(minst ett bildekort)', solution: '$P = 1 - (\\frac{40}{52})^3 \\approx 1 - 0{,}46 \\approx 54\\%$' },
            ],
            solution: 'a) 91/216 ≈ 42%, b) 63/64 ≈ 98%, c) ca. 54%',
            hideInlineSolution: true,
            hints: ['P(minst én) = 1 - P(ingen)'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // Repetisjonsoppgave 5 - Trediagram
        {
          id: '9-6-3-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-6-3-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Bruk trediagram',
            subTasks: [
              { label: 'a', task: 'Kast mynt 3 ganger. Tegn trediagram og finn P(nøyaktig 2 kron)', solution: 'Gunstige: KKM, KMK, MKK (3 stier). $P = 3 \\cdot \\frac{1}{8} = \\frac{3}{8} = 37{,}5\\%$' },
              { label: 'b', task: 'Pose med 2 røde og 3 blå (med tilbakelegging, 2 trekk). Finn P(ulike farger)', solution: 'RB eller BR: $P = \\frac{2}{5} \\cdot \\frac{3}{5} + \\frac{3}{5} \\cdot \\frac{2}{5} = \\frac{12}{25} = 48\\%$' },
            ],
            solution: 'a) 3/8 = 37,5%, b) 12/25 = 48%',
            hideInlineSolution: true,
            hints: ['Tegn alle grener og gang langs stiene', 'Adder stiene som gir ønsket utfall'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // Repetisjonsoppgave 6 - Uten tilbakelegging
        {
          id: '9-6-3-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-6-3-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Regn med trekking uten tilbakelegging',
            subTasks: [
              { label: 'a', task: 'Pose med 5 røde og 5 blå kuler. Trekk 2 uten tilbakelegging. Finn P(én av hver farge)', solution: 'RB + BR: $P = \\frac{5}{10} \\cdot \\frac{5}{9} + \\frac{5}{10} \\cdot \\frac{5}{9} = \\frac{50}{90} = \\frac{5}{9} \\approx 56\\%$' },
              { label: 'b', task: 'Kortstokk: Trekk 2 kort uten tilbakelegging. Finn P(begge røde: hjerter eller ruter)', solution: '$P = \\frac{26}{52} \\cdot \\frac{25}{51} = \\frac{650}{2652} = \\frac{25}{102} \\approx 24{,}5\\%$' },
              { label: 'c', task: 'Klasse med 10 jenter og 15 gutter. Velg 2 tilfeldig. Finn P(én av hvert kjønn)', solution: 'JG + GJ: $P = \\frac{10}{25} \\cdot \\frac{15}{24} + \\frac{15}{25} \\cdot \\frac{10}{24} = \\frac{300}{600} = \\frac{1}{2}$' },
            ],
            solution: 'a) 5/9 ≈ 56%, b) 25/102 ≈ 24,5%, c) 1/2 = 50%',
            hideInlineSolution: true,
            hints: ['Husk at antallet minker etter første trekk', 'For én av hver: regn begge rekkefølger'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        // Repetisjonsoppgave 7 - Blandede oppgaver
        {
          id: '9-6-3-rep-7',
          type: 'exercise',
          exercise: {
            id: '9-6-3-rep-ex-7',
            number: 'R7',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Blandede sannsynlighetsoppgaver',
            subTasks: [
              { label: 'a', task: 'To terninger: Finn P(summen er minst 10)', solution: 'Gunstige: (4,6), (5,5), (5,6), (6,4), (6,5), (6,6) = 6 stk. $P = \\frac{6}{36} = \\frac{1}{6} \\approx 17\\%$' },
              { label: 'b', task: 'Tre myntkast: Finn P(flere kron enn mynt)', solution: 'Gunstige: KKK, KKM, KMK, MKK = 4 av 8. $P = \\frac{4}{8} = \\frac{1}{2} = 50\\%$' },
              { label: 'c', task: 'Et tall fra 1-20 velges tilfeldig. Finn P(primtall)', solution: 'Primtall: 2,3,5,7,11,13,17,19 = 8 stk. $P = \\frac{8}{20} = \\frac{2}{5} = 40\\%$' },
              { label: 'd', task: 'Kast terning til du får 6. Finn P(trenger nøyaktig 3 kast)', solution: 'Ikke-6, ikke-6, 6: $P = \\frac{5}{6} \\cdot \\frac{5}{6} \\cdot \\frac{1}{6} = \\frac{25}{216} \\approx 11{,}6\\%$' },
            ],
            solution: 'a) 1/6 ≈ 17%, b) 50%, c) 2/5 = 40%, d) 25/216 ≈ 11,6%',
            hideInlineSolution: true,
            hints: ['Les oppgaven nøye og velg riktig metode', 'Tegn opp utfallsrommet hvis nødvendig'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

// Eksporter alle kapitler som et objekt
export const CHAPTERS_9KLASSE: Record<string, TextbookChapter> = {
  '9-1-1': CHAPTER_9_1_1,
  '9-1-2': CHAPTER_9_1_2,
  '9-1-3': CHAPTER_9_1_3,
  '9-1-4': CHAPTER_9_1_4,
  '9-2-1': CHAPTER_9_2_1,
  '9-2-2': CHAPTER_9_2_2,
  '9-2-3': CHAPTER_9_2_3,
  '9-2-4': CHAPTER_9_2_4,
  '9-3-1': CHAPTER_9_3_1,
  '9-3-2': CHAPTER_9_3_2,
  '9-3-3': CHAPTER_9_3_3,
  '9-4-1': CHAPTER_9_4_1,
  '9-4-2': CHAPTER_9_4_2,
  '9-4-3': CHAPTER_9_4_3,
  '9-4-4': CHAPTER_9_4_4,
  '9-5-1': CHAPTER_9_5_1,
  '9-5-2': CHAPTER_9_5_2,
  '9-5-3': CHAPTER_9_5_3,
  '9-6-1': CHAPTER_9_6_1,
  '9-6-2': CHAPTER_9_6_2,
  '9-6-3': CHAPTER_9_6_3,
};
