/**
 * Tekstbok kapitler for Matematikk 9. klasse
 * Del 10: Kritisk statistikk og data (KM235, KM243)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 10.1: Spredningsmål i praksis
// ============================================================================

export const CHAPTER_9_10_1: TextbookChapter = {
  id: '9-10-1',
  courseId: '9',
  chapterNumber: '10.1',
  title: 'Spredningsmål i praksis',
  description: 'Kvartiler, interkvartilbredde (IQR) og boksplott for å analysere datasett.',
  estimatedMinutes: 50,
  competenceGoals: ['bruke sentralmål og spreiingsmål til å analysere og samanlikne datasett'],
  content: [
    {
      id: '9-10-1-intro',
      type: 'text',
      content: `## Hvorfor trenger vi spredningsmål?

Når vi beskriver et datasett med bare gjennomsnittet, mister vi mye informasjon. Tenk deg to klasser som begge har gjennomsnittlig karakteren $4{,}0$ i matematikk. I den ene klassen har alle elevene mellom $3$ og $5$, mens i den andre har halvparten $2$ og halvparten $6$.

**Sentralmål** (gjennomsnitt, median, typetall) forteller oss hvor \"midten\" av dataene ligger. Men for å forstå hele bildet trenger vi også **spredningsmål** som forteller oss hvor spredt dataene er rundt midten.

I dette kapittelet lærer vi om:
- **Kvartiler** ($Q_1$, $Q_2$, $Q_3$) som deler datasettet i fire like store deler
- **Interkvartilbredde** (IQR) som måler spredningen til de midterste 50 % av dataene
- **Boksplott** (box plot) som gir en visuell oversikt over fordelingen
- **Standardavvik** som måler den gjennomsnittlige avstanden fra gjennomsnittet`,
    },
    {
      id: '9-10-1-def-1',
      type: 'definition',
      title: 'Kvartiler',
      content: `Når vi sorterer et datasett fra minst til størst, deler **kvartilene** datasettet i fire like store deler:

- **$Q_1$** (første kvartil): Medianen av den nedre halvdelen av datasettet. 25 % av verdiene er mindre enn $Q_1$.
- **$Q_2$** (andre kvartil): Medianen av hele datasettet. 50 % av verdiene er mindre enn $Q_2$.
- **$Q_3$** (tredje kvartil): Medianen av den øvre halvdelen av datasettet. 75 % av verdiene er mindre enn $Q_3$.

**Fremgangsmåte:**
1. Sorter dataene fra minst til størst.
2. Finn medianen ($Q_2$) - den deler datasettet i to halvdeler.
3. Finn medianen av den nedre halvdelen ($Q_1$).
4. Finn medianen av den øvre halvdelen ($Q_3$).

**Merk:** Hvis medianen er ett av datapunktene (odde antall verdier), tas den **ikke** med i noen av halvdelene.`,
    },
    {
      id: '9-10-1-def-2',
      type: 'definition',
      title: 'Interkvartilbredde (IQR)',
      content: `**Interkvartilbredden** (IQR) er forskjellen mellom tredje og første kvartil:

$$\\text{IQR} = Q_3 - Q_1$$

IQR forteller oss spredningen til de **midterste 50 %** av dataene. En stor IQR betyr stor spredning, mens en liten IQR betyr at de fleste verdiene er samlet nært medianen.

IQR er et **robust** spredningsmål fordi det ikke påvirkes av ekstremverdier (uteliggere).`,
    },
    {
      id: '9-10-1-example-1',
      type: 'example',
      title: 'Eksempel 1 - Finne kvartiler',
      problem: `Resultatene til 11 elever på en matteprøve (maks 20 poeng) er:

$$8, \\; 12, \\; 15, \\; 7, \\; 18, \\; 10, \\; 14, \\; 9, \\; 16, \\; 11, \\; 13$$

Finn $Q_1$, $Q_2$, $Q_3$ og IQR.`,
      solution: `**Løsning:**

**Steg 1:** Sorter dataene fra minst til størst:
$$7, \\; 8, \\; 9, \\; 10, \\; 11, \\; 12, \\; 13, \\; 14, \\; 15, \\; 16, \\; 18$$

**Steg 2:** Finn medianen ($Q_2$). Vi har 11 verdier, så medianen er verdi nummer 6:
$$Q_2 = 12$$

**Steg 3:** Nedre halvdel (uten medianen): $7, \\; 8, \\; 9, \\; 10, \\; 11$
Medianen av disse 5 verdiene er verdi nummer 3:
$$Q_1 = 9$$

**Steg 4:** Øvre halvdel (uten medianen): $13, \\; 14, \\; 15, \\; 16, \\; 18$
Medianen av disse 5 verdiene er verdi nummer 3:
$$Q_3 = 15$$

**Steg 5:** Beregn IQR:
$$\\text{IQR} = Q_3 - Q_1 = 15 - 9 = 6$$

De midterste 50 % av elevene fikk mellom 9 og 15 poeng, med en spredning på 6 poeng.`,
    },
    {
      id: '9-10-1-def-3',
      type: 'definition',
      title: 'Boksplott',
      content: `Et **boksplott** (box plot) er en grafisk fremstilling av et datasett som viser:

1. **Minimum** - den minste verdien (eller minste verdi som ikke er uteligger)
2. **$Q_1$** - første kvartil (venstre kant av boksen)
3. **$Q_2$** - medianen (linjen inni boksen)
4. **$Q_3$** - tredje kvartil (høyre kant av boksen)
5. **Maksimum** - den største verdien (eller største verdi som ikke er uteligger)

Disse fem verdiene kalles **femtallsoversikten** (five-number summary).

**Uteliggere** er verdier som ligger mer enn $1{,}5 \\cdot \\text{IQR}$ utenfor $Q_1$ eller $Q_3$. Disse markeres som enkeltpunkter utenfor whiskers (strekene).

- Nedre grense: $Q_1 - 1{,}5 \\cdot \\text{IQR}$
- Øvre grense: $Q_3 + 1{,}5 \\cdot \\text{IQR}$`,
    },
    {
      id: '9-10-1-example-2',
      type: 'example',
      title: 'Eksempel 2 - Tegne boksplott og finne uteliggere',
      problem: `Antall sjokoladebiter 13 elever spiste i løpet av en uke:

$$2, \\; 3, \\; 5, \\; 6, \\; 7, \\; 7, \\; 8, \\; 9, \\; 10, \\; 11, \\; 12, \\; 14, \\; 25$$

a) Finn femtallsoversikten ($\\text{min}$, $Q_1$, $Q_2$, $Q_3$, $\\text{maks}$).
b) Beregn IQR og finn eventuelle uteliggere.
c) Beskriv boksplottet.`,
      solution: `**Løsning:**

**a) Femtallsoversikt:**

Dataene er allerede sortert. Vi har 13 verdier.

$Q_2$ = verdi nummer 7: $Q_2 = 8$

Nedre halvdel: $2, \\; 3, \\; 5, \\; 6, \\; 7, \\; 7$
$Q_1 = \\frac{5 + 6}{2} = 5{,}5$

Øvre halvdel: $9, \\; 10, \\; 11, \\; 12, \\; 14, \\; 25$
$Q_3 = \\frac{11 + 12}{2} = 11{,}5$

Femtallsoversikt: $\\text{min} = 2$, $Q_1 = 5{,}5$, $Q_2 = 8$, $Q_3 = 11{,}5$, $\\text{maks} = 25$

**b) IQR og uteliggere:**

$$\\text{IQR} = Q_3 - Q_1 = 11{,}5 - 5{,}5 = 6$$

Nedre grense: $Q_1 - 1{,}5 \\cdot \\text{IQR} = 5{,}5 - 9 = -3{,}5$
Øvre grense: $Q_3 + 1{,}5 \\cdot \\text{IQR} = 11{,}5 + 9 = 20{,}5$

Verdien $25$ er over den øvre grensen på $20{,}5$, så **25 er en uteligger**.

**c) Boksplottbeskrivelse:**
- Boksen strekker seg fra $5{,}5$ til $11{,}5$ med medianlinje på $8$
- Nedre whisker går fra $2$ til $5{,}5$
- Øvre whisker går fra $11{,}5$ til $14$ (siste verdi som ikke er uteligger)
- $25$ markeres som et enkeltpunkt (uteligger)
- Vi ser at fordelingen er **høyreskjev** fordi medianen ligger nærmere $Q_1$ enn $Q_3$`,
    },
    {
      id: '9-10-1-text-2',
      type: 'text',
      content: `## Introduksjon til standardavvik

Mens IQR bare ser på de midterste 50 %, finnes det et spredningsmål som tar hensyn til **alle** datapunktene: **standardavviket**.

Standardavviket måler den **gjennomsnittlige avstanden** fra gjennomsnittet. Et lite standardavvik betyr at verdiene er samlet tett rundt gjennomsnittet, mens et stort standardavvik betyr stor spredning.

Formelen for standardavvik for et datasett med $n$ verdier $x_1, x_2, \\ldots, x_n$ og gjennomsnitt $\\bar{x}$:

$$s = \\sqrt{\\frac{(x_1 - \\bar{x})^2 + (x_2 - \\bar{x})^2 + \\cdots + (x_n - \\bar{x})^2}{n - 1}}$$

eller kortere:

$$s = \\sqrt{\\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})^2}{n - 1}}$$

**Steg for beregning:**
1. Finn gjennomsnittet $\\bar{x}$.
2. Finn avviket fra gjennomsnittet for hver verdi: $x_i - \\bar{x}$.
3. Kvadrer hvert avvik: $(x_i - \\bar{x})^2$.
4. Finn gjennomsnittet av de kvadrerte avvikene (del på $n-1$).
5. Ta kvadratroten.

**Tips:** På 9. trinn er det viktigst å forstå hva standardavviket **betyr**, og å kunne beregne det med kalkulator.`,
    },
    {
      id: '9-10-1-example-3',
      type: 'example',
      title: 'Eksempel 3 - Standardavvik',
      problem: `Fem venner har følgende antall apper på telefonen:

$$12, \\; 15, \\; 18, \\; 20, \\; 25$$

Beregn standardavviket.`,
      solution: `**Løsning:**

**Steg 1:** Gjennomsnitt:
$$\\bar{x} = \\frac{12 + 15 + 18 + 20 + 25}{5} = \\frac{90}{5} = 18$$

**Steg 2 og 3:** Avvik og kvadrerte avvik:

| $x_i$ | $x_i - \\bar{x}$ | $(x_i - \\bar{x})^2$ |
|--------|-------------------|----------------------|
| $12$ | $12 - 18 = -6$ | $36$ |
| $15$ | $15 - 18 = -3$ | $9$ |
| $18$ | $18 - 18 = 0$ | $0$ |
| $20$ | $20 - 18 = 2$ | $4$ |
| $25$ | $25 - 18 = 7$ | $49$ |

**Steg 4:** Sum av kvadrerte avvik:
$$\\sum (x_i - \\bar{x})^2 = 36 + 9 + 0 + 4 + 49 = 98$$

**Steg 5:** Standardavvik:
$$s = \\sqrt{\\frac{98}{5-1}} = \\sqrt{\\frac{98}{4}} = \\sqrt{24{,}5} \\approx 4{,}95$$

Standardavviket er ca. $5$ apper. Det betyr at verdiene i gjennomsnitt avviker ca. $5$ apper fra gjennomsnittet på $18$.`,
    },
    {
      id: '9-10-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '9-10-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: `Resultatene til 9 elever på en naturfagsprøve (maks 30 poeng) er:

$$14, \\; 18, \\; 20, \\; 22, \\; 24, \\; 25, \\; 27, \\; 28, \\; 30$$

Finn $Q_1$, $Q_2$ og $Q_3$.`,
        solution: `Dataene er allerede sortert, og vi har 9 verdier.

$Q_2$ = verdi nummer 5: $Q_2 = 24$

Nedre halvdel: $14, \\; 18, \\; 20, \\; 22$
$Q_1 = \\frac{18 + 20}{2} = 19$

Øvre halvdel: $25, \\; 27, \\; 28, \\; 30$
$Q_3 = \\frac{27 + 28}{2} = 27{,}5$`,
        hints: ['Sorter dataene og finn medianen først. Del så i to halvdeler uten medianen.'],
      },
    },
    {
      id: '9-10-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '9-10-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: `Et datasett har $Q_1 = 12$ og $Q_3 = 28$.

a) Finn IQR.
b) Hva betyr IQR-verdien?`,
        solution: `a) $\\text{IQR} = Q_3 - Q_1 = 28 - 12 = 16$

b) IQR = 16 betyr at de midterste 50 % av dataene har en spredning på 16. Verdiene i denne delen av datasettet varierer altså med 16 enheter.`,
        hints: ['IQR er ganske enkelt forskjellen mellom Q3 og Q1.'],
      },
    },
    {
      id: '9-10-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '9-10-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: `Antall timer 12 elever brukte på lekser i en uke:

$$3, \\; 4, \\; 5, \\; 6, \\; 7, \\; 8, \\; 8, \\; 9, \\; 10, \\; 11, \\; 12, \\; 20$$

a) Finn femtallsoversikten (min, $Q_1$, $Q_2$, $Q_3$, maks).
b) Beregn IQR.
c) Er det noen uteliggere?`,
        solution: `a) Vi har 12 verdier (allerede sortert).

$Q_2 = \\frac{8 + 8}{2} = 8$

Nedre halvdel: $3, \\; 4, \\; 5, \\; 6, \\; 7, \\; 8$
$Q_1 = \\frac{5 + 6}{2} = 5{,}5$

Øvre halvdel: $8, \\; 9, \\; 10, \\; 11, \\; 12, \\; 20$
$Q_3 = \\frac{10 + 11}{2} = 10{,}5$

Femtallsoversikt: min = 3, $Q_1 = 5{,}5$, $Q_2 = 8$, $Q_3 = 10{,}5$, maks = 20

b) $\\text{IQR} = 10{,}5 - 5{,}5 = 5$

c) Nedre grense: $5{,}5 - 1{,}5 \\cdot 5 = 5{,}5 - 7{,}5 = -2$
Øvre grense: $10{,}5 + 1{,}5 \\cdot 5 = 10{,}5 + 7{,}5 = 18$

Verdien 20 er over den øvre grensen 18, så **20 er en uteligger**.`,
        hints: [
          'Del datasettet i to like store halvdeler. Med 12 verdier blir hver halvdel 6 verdier.',
          'For uteliggere: regn ut grensene Q1 - 1,5 * IQR og Q3 + 1,5 * IQR.',
        ],
      },
    },
    {
      id: '9-10-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '9-10-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: `To grupper elever har gjennomført den samme testen. Resultatene (i poeng) er:

**Gruppe A:** $10, \\; 12, \\; 14, \\; 15, \\; 16, \\; 18, \\; 20$
**Gruppe B:** $3, \\; 8, \\; 13, \\; 15, \\; 17, \\; 22, \\; 27$

a) Finn medianen for begge gruppene.
b) Finn IQR for begge gruppene.
c) Hvilken gruppe har størst spredning? Forklar.`,
        solution: `**a) Medianer:** Begge gruppene har 7 verdier, så medianen er verdi nr. 4.

Gruppe A: $Q_2 = 15$
Gruppe B: $Q_2 = 15$

Begge gruppene har samme median!

**b) IQR:**

Gruppe A: Nedre halvdel: $10, 12, 14$ → $Q_1 = 12$. Øvre halvdel: $16, 18, 20$ → $Q_3 = 18$.
$\\text{IQR}_A = 18 - 12 = 6$

Gruppe B: Nedre halvdel: $3, 8, 13$ → $Q_1 = 8$. Øvre halvdel: $17, 22, 27$ → $Q_3 = 22$.
$\\text{IQR}_B = 22 - 8 = 14$

**c)** Gruppe B har mye større spredning ($\\text{IQR} = 14$) enn Gruppe A ($\\text{IQR} = 6$). Selv om begge gruppene har samme median, er resultatene i Gruppe B mye mer spredt. Det betyr at det er større forskjeller mellom elevene i Gruppe B.`,
        hints: ['Begge gruppene er allerede sortert. Finn medianen, deretter Q1 og Q3 for hver gruppe.'],
      },
    },
    {
      id: '9-10-1-ex-5',
      type: 'exercise',
      exercise: {
        id: '9-10-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: `Beregn standardavviket for dette datasettet:

$$4, \\; 7, \\; 8, \\; 10, \\; 11$$

Vis utregningen steg for steg.`,
        solution: `**Steg 1:** Gjennomsnitt:
$\\bar{x} = \\frac{4 + 7 + 8 + 10 + 11}{5} = \\frac{40}{5} = 8$

**Steg 2 og 3:** Avvik og kvadrerte avvik:

$(4-8)^2 = (-4)^2 = 16$
$(7-8)^2 = (-1)^2 = 1$
$(8-8)^2 = 0^2 = 0$
$(10-8)^2 = 2^2 = 4$
$(11-8)^2 = 3^2 = 9$

**Steg 4:** Sum av kvadrerte avvik: $16 + 1 + 0 + 4 + 9 = 30$

**Steg 5:** $s = \\sqrt{\\frac{30}{5-1}} = \\sqrt{\\frac{30}{4}} = \\sqrt{7{,}5} \\approx 2{,}74$

Standardavviket er ca. $2{,}74$.`,
        hints: [
          'Finn gjennomsnittet først.',
          'Regn ut $(x_i - \\bar{x})^2$ for hver verdi og summer dem. Husk å dele på $n-1$ (ikke $n$).',
        ],
      },
    },
    {
      id: '9-10-1-ex-6',
      type: 'exercise',
      exercise: {
        id: '9-10-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: `Forklar med egne ord hva forskjellen er mellom **variasonsbredde** (maks - min) og **IQR** som spredningsmål. Gi et eksempel der variasonsbredde kan gi et misvisende bilde.`,
        solution: `Variasjonsbredden måler avstanden mellom den største og minste verdien i hele datasettet. IQR måler bare spredningen til de midterste 50 % av dataene.

Variasjonsbredden kan gi et misvisende bilde hvis det finnes uteliggere. For eksempel: Hvis 10 elever har lommepenger $50, 55, 60, 65, 70, 70, 75, 80, 85, 500$ kr, blir variasjonsbredden $500 - 50 = 450$ kr. Men de fleste elevene har mellom 50 og 85 kr. IQR gir et bedre bilde: $Q_1 = 60$, $Q_3 = 80$, $\\text{IQR} = 20$ kr.

IQR er **robust** mot uteliggere, mens variasjonsbredden er svært følsom for dem.`,
        hints: ['Tenk på hva som skjer med de to spredningsmålene dersom ett datapunkt er veldig langt fra resten.'],
      },
    },
    {
      id: '9-10-1-ex-7',
      type: 'exercise',
      exercise: {
        id: '9-10-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Temperaturmålinger (i $°C$) kl. 12:00 de siste 15 dagene i en by:

$$-3, \\; -1, \\; 0, \\; 2, \\; 3, \\; 4, \\; 5, \\; 6, \\; 6, \\; 7, \\; 8, \\; 10, \\; 11, \\; 12, \\; 22$$

a) Finn femtallsoversikten.
b) Beregn IQR.
c) Bestem om det er uteliggere, og forklar hva de kan skyldes.
d) Beregn gjennomsnittet, og forklar hvorfor medianen kanskje er et bedre sentralmål for dette datasettet.`,
        solution: `**a) Femtallsoversikt:** 15 verdier (sortert).

$Q_2$ = verdi nr. 8: $Q_2 = 6$

Nedre halvdel (7 verdier): $-3, -1, 0, 2, 3, 4, 5$ → $Q_1 = 2$
Øvre halvdel (7 verdier): $6, 7, 8, 10, 11, 12, 22$ → $Q_3 = 10$

Femtallsoversikt: min = $-3$, $Q_1 = 2$, $Q_2 = 6$, $Q_3 = 10$, maks = $22$.

**b)** $\\text{IQR} = 10 - 2 = 8$

**c)** Nedre grense: $2 - 1{,}5 \\cdot 8 = 2 - 12 = -10$
Øvre grense: $10 + 1{,}5 \\cdot 8 = 10 + 12 = 22$

$22$ ligger akkurat på grensen, så den er **ikke** en uteligger etter formelen (den må være *over* $22$). Ingen verdier er under $-10$.

Men $22$ er likevel uvanlig høy sammenlignet med resten. Den kan skyldes en uvanlig varm dag (varmerekord, føhn-vind, eller en feil i målingen).

**d)** Gjennomsnitt: $\\bar{x} = \\frac{-3 + (-1) + 0 + 2 + 3 + 4 + 5 + 6 + 6 + 7 + 8 + 10 + 11 + 12 + 22}{15} = \\frac{92}{15} \\approx 6{,}13$

Gjennomsnittet ($6{,}13$) og medianen ($6$) er ganske like her. Men den høye verdien $22$ drar gjennomsnittet litt opp. Medianen er mer robust mot slike ekstremverdier og gir et sikrere bilde av \"typisk\" temperatur.`,
        hints: [
          'Med 15 verdier er medianen verdi nummer 8.',
          'Sjekk om verdier er under Q1 - 1,5*IQR eller over Q3 + 1,5*IQR.',
        ],
      },
    },
    {
      id: '9-10-1-ex-8',
      type: 'exercise',
      exercise: {
        id: '9-10-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En lærer har registrert antall fravær (i dager) for 10 elever det siste halvåret:

$$1, \\; 2, \\; 3, \\; 3, \\; 4, \\; 5, \\; 6, \\; 8, \\; 10, \\; 35$$

a) Beregn gjennomsnitt og standardavvik.
b) Beregn gjennomsnitt og standardavvik **uten** den siste verdien ($35$).
c) Hva forteller sammenligningen deg om hvordan uteliggere påvirker gjennomsnitt og standardavvik?`,
        solution: `**a) Med alle 10 verdier:**

$\\bar{x} = \\frac{1+2+3+3+4+5+6+8+10+35}{10} = \\frac{77}{10} = 7{,}7$

Kvadrerte avvik:
$(1-7{,}7)^2 = 44{,}89$, $(2-7{,}7)^2 = 32{,}49$, $(3-7{,}7)^2 = 22{,}09$, $(3-7{,}7)^2 = 22{,}09$, $(4-7{,}7)^2 = 13{,}69$, $(5-7{,}7)^2 = 7{,}29$, $(6-7{,}7)^2 = 2{,}89$, $(8-7{,}7)^2 = 0{,}09$, $(10-7{,}7)^2 = 5{,}29$, $(35-7{,}7)^2 = 745{,}29$

Sum: $896{,}10$

$s = \\sqrt{\\frac{896{,}10}{9}} = \\sqrt{99{,}57} \\approx 9{,}98$

**b) Uten verdien 35 (9 verdier):**

$\\bar{x} = \\frac{42}{9} \\approx 4{,}67$

Sum av kvadrerte avvik: $(1-4{,}67)^2 + \\ldots + (10-4{,}67)^2 \\approx 68{,}0$

$s = \\sqrt{\\frac{68{,}0}{8}} \\approx \\sqrt{8{,}5} \\approx 2{,}92$

**c)** Uteliggeren 35 drar gjennomsnittet fra $4{,}67$ opp til $7{,}7$ (en økning på over 60 %). Standardavviket øker fra ca. $2{,}9$ til ca. $10{,}0$ - en mer enn tredobling! Én uteligger kan altså påvirke både gjennomsnitt og standardavvik dramatisk. Derfor er median og IQR bedre mål for skjeve datasett med uteliggere.`,
        hints: [
          'Bruk formelen for standardavvik steg for steg, eller bruk kalkulator.',
          'Sammenlign gjennomsnitt og standardavvik med og uten uteliggeren.',
        ],
      },
    },
    // ========== OPPSUMMERING ==========
    {
      id: '9-10-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Kvartiler**: Å dele et sortert datasett i fire like store deler med $Q_1$, $Q_2$ (medianen) og $Q_3$
- **Interkvartilbredde (IQR)**: Å beregne spredningen til de midterste 50 % av dataene med formelen $\\text{IQR} = Q_3 - Q_1$
- **Boksplott**: Å lage en grafisk fremstilling av femtallsoversikten (min, $Q_1$, $Q_2$, $Q_3$, maks)
- **Uteliggere**: Å identifisere verdier som ligger mer enn $1{,}5 \\cdot \\text{IQR}$ utenfor $Q_1$ eller $Q_3$
- **Standardavvik**: Å beregne den gjennomsnittlige avstanden fra gjennomsnittet, og forstå hva verdien betyr

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Kvartiler ($Q_1$, $Q_2$, $Q_3$) | Verdier som deler et sortert datasett i fire like store deler |
| Interkvartilbredde (IQR) | $Q_3 - Q_1$, spredningen til de midterste 50 % av dataene |
| Boksplott | Grafisk fremstilling basert på femtallsoversikten |
| Uteligger | Verdi som ligger mer enn $1{,}5 \\cdot \\text{IQR}$ utenfor kvartilene |
| Standardavvik | Mål for gjennomsnittlig avstand fra gjennomsnittet |
| Robust spredningsmål | Mål som ikke påvirkes mye av ekstremverdier (f.eks. IQR) |`,
    },
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-10-1-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '9-10-1-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-10-1-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Finn kvartiler og IQR for oppgitte datasett.',
            subTasks: [
              { label: 'a', task: 'Sorter datasettet $3, \\; 7, \\; 1, \\; 9, \\; 5, \\; 2, \\; 8$ fra minst til størst.', solution: '$1, \\; 2, \\; 3, \\; 5, \\; 7, \\; 8, \\; 9$' },
              { label: 'b', task: 'Finn medianen ($Q_2$) i det sorterte datasettet fra a).', solution: '$Q_2 = 5$' },
              { label: 'c', task: 'Finn $Q_1$ i det sorterte datasettet fra a).', solution: 'Nedre halvdel: $1, \\; 2, \\; 3$. $Q_1 = 2$' },
              { label: 'd', task: 'Finn $Q_3$ i det sorterte datasettet fra a).', solution: 'Øvre halvdel: $7, \\; 8, \\; 9$. $Q_3 = 8$' },
              { label: 'e', task: 'Beregn $\\text{IQR}$ for datasettet fra a).', solution: '$\\text{IQR} = Q_3 - Q_1 = 8 - 2 = 6$' },
              { label: 'f', task: 'Et annet datasett har $Q_1 = 10$ og $Q_3 = 22$. Hva er $\\text{IQR}$?', solution: '$\\text{IQR} = 22 - 10 = 12$' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Sorter alltid dataene først. Medianen deler settet i to halvdeler, og $Q_1$/$Q_3$ er medianene av hver halvdel.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-10-1-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-10-1-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Finn kvartiler og IQR for et datasett med partall antall verdier.',
            subTasks: [
              { label: 'a', task: 'Sorter datasettet $14, \\; 8, \\; 11, \\; 5, \\; 19, \\; 3, \\; 17, \\; 10$ fra minst til størst.', solution: '$3, \\; 5, \\; 8, \\; 10, \\; 11, \\; 14, \\; 17, \\; 19$' },
              { label: 'b', task: 'Finn medianen ($Q_2$) av datasettet fra a). (8 verdier)', solution: '$Q_2 = \\frac{10 + 11}{2} = 10{,}5$' },
              { label: 'c', task: 'Finn $Q_1$ i datasettet fra a).', solution: 'Nedre halvdel: $3, \\; 5, \\; 8, \\; 10$. $Q_1 = \\frac{5 + 8}{2} = 6{,}5$' },
              { label: 'd', task: 'Finn $Q_3$ i datasettet fra a).', solution: 'Øvre halvdel: $11, \\; 14, \\; 17, \\; 19$. $Q_3 = \\frac{14 + 17}{2} = 15{,}5$' },
              { label: 'e', task: 'Beregn $\\text{IQR}$.', solution: '$\\text{IQR} = 15{,}5 - 6{,}5 = 9$' },
              { label: 'f', task: 'Hva forteller $\\text{IQR} = 9$ oss om datasettet?', solution: 'De midterste 50 % av verdiene er spredt over et intervall på 9 enheter.' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Med partall antall verdier er medianen gjennomsnittet av de to midterste verdiene.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-10-1-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-10-1-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Les av boksplott og finn femtallsoversikten.',
            subTasks: [
              { label: 'a', task: 'Et boksplott har min $= 2$, $Q_1 = 5$, $Q_2 = 8$, $Q_3 = 12$, maks $= 18$. Hva er $\\text{IQR}$?', solution: '$\\text{IQR} = Q_3 - Q_1 = 12 - 5 = 7$' },
              { label: 'b', task: 'For boksplottet i a), hva er bredden av boksen?', solution: 'Bredden av boksen er $\\text{IQR} = 7$.' },
              { label: 'c', task: 'For boksplottet i a), hva er variasjonsbredden?', solution: '$\\text{Variasjonsbredde} = \\text{maks} - \\text{min} = 18 - 2 = 16$' },
              { label: 'd', task: 'Beregn øvre grense for uteliggere for boksplottet i a).', solution: '$Q_3 + 1{,}5 \\cdot \\text{IQR} = 12 + 1{,}5 \\cdot 7 = 12 + 10{,}5 = 22{,}5$' },
              { label: 'e', task: 'Beregn nedre grense for uteliggere for boksplottet i a).', solution: '$Q_1 - 1{,}5 \\cdot \\text{IQR} = 5 - 1{,}5 \\cdot 7 = 5 - 10{,}5 = -5{,}5$' },
              { label: 'f', task: 'Har boksplottet i a) noen uteliggere? Begrunn svaret.', solution: 'Nei. Alle verdier ligger innenfor grensene $[-5{,}5, \\; 22{,}5]$, siden min $= 2 > -5{,}5$ og maks $= 18 < 22{,}5$.' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Uteliggere er verdier som ligger mer enn $1{,}5 \\cdot \\text{IQR}$ utenfor $Q_1$ eller $Q_3$.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-10-1-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-10-1-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Beregn standardavviket for et lite datasett.',
            subTasks: [
              { label: 'a', task: 'Finn gjennomsnittet $\\bar{x}$ av datasettet $4, \\; 7, \\; 10, \\; 13, \\; 16$.', solution: '$\\bar{x} = \\frac{4 + 7 + 10 + 13 + 16}{5} = \\frac{50}{5} = 10$' },
              { label: 'b', task: 'Finn avviket $(x_i - \\bar{x})$ for hver verdi i datasettet fra a).', solution: '$4 - 10 = -6, \\quad 7 - 10 = -3, \\quad 10 - 10 = 0, \\quad 13 - 10 = 3, \\quad 16 - 10 = 6$' },
              { label: 'c', task: 'Kvadrer hvert avvik og finn summen $\\sum (x_i - \\bar{x})^2$.', solution: '$(-6)^2 + (-3)^2 + 0^2 + 3^2 + 6^2 = 36 + 9 + 0 + 9 + 36 = 90$' },
              { label: 'd', task: 'Beregn standardavviket $s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}$.', solution: '$s = \\sqrt{\\frac{90}{5 - 1}} = \\sqrt{\\frac{90}{4}} = \\sqrt{22{,}5} \\approx 4{,}74$' },
              { label: 'e', task: 'Hva betyr standardavviket $s \\approx 4{,}74$ i praksis?', solution: 'Verdiene avviker i gjennomsnitt ca. $4{,}74$ enheter fra gjennomsnittet på $10$.' },
              { label: 'f', task: 'Et nytt datasett $9, \\; 10, \\; 10, \\; 10, \\; 11$ har også gjennomsnitt $10$. Vil standardavviket være større eller mindre enn $4{,}74$? Begrunn uten å regne.', solution: 'Mindre, fordi verdiene ligger mye tettere rundt gjennomsnittet.' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Følg steg-for-steg: gjennomsnitt, avvik, kvadrer, summer, del på $n-1$, ta kvadratrot.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-10-1-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-10-1-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Sammenlign to datasett ved hjelp av kvartiler, IQR og boksplott.',
            subTasks: [
              { label: 'a', task: 'Klasse A: $5, \\; 6, \\; 7, \\; 7, \\; 8, \\; 8, \\; 8, \\; 9, \\; 9, \\; 10$. Finn $Q_1$, $Q_2$, $Q_3$ og $\\text{IQR}$.', solution: '$Q_2 = \\frac{8+8}{2} = 8$, $Q_1 = 7$ (median av $5,6,7,7,8$), $Q_3 = 9$ (median av $8,8,9,9,10$). $\\text{IQR} = 9 - 7 = 2$' },
              { label: 'b', task: 'Klasse B: $3, \\; 4, \\; 5, \\; 7, \\; 8, \\; 9, \\; 10, \\; 10, \\; 11, \\; 12$. Finn $Q_1$, $Q_2$, $Q_3$ og $\\text{IQR}$.', solution: '$Q_2 = \\frac{8+9}{2} = 8{,}5$, $Q_1 = 5$ (median av $3,4,5,7,8$), $Q_3 = 10$ (median av $9,10,10,11,12$). $\\text{IQR} = 10 - 5 = 5$' },
              { label: 'c', task: 'Hvilken klasse har størst spredning målt med $\\text{IQR}$?', solution: 'Klasse B har $\\text{IQR} = 5$ mot klasse A sin $\\text{IQR} = 2$, altså størst spredning.' },
              { label: 'd', task: 'Beregn gjennomsnittet for begge klasser. Hvilken har høyest?', solution: 'Klasse A: $\\bar{x} = \\frac{77}{10} = 7{,}7$. Klasse B: $\\bar{x} = \\frac{79}{10} = 7{,}9$. Klasse B har høyest.' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Med 10 verdier er medianen gjennomsnittet av verdi 5 og 6. $Q_1$ er medianen av de 5 nederste, $Q_3$ medianen av de 5 øverste.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-10-1-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-10-1-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Uteliggere og tolkning av spredningsmål i en praktisk kontekst.',
            subTasks: [
              { label: 'a', task: 'En bedrift har 9 ansatte med følgende månedslønner (i tusen kr): $28, \\; 30, \\; 31, \\; 32, \\; 33, \\; 34, \\; 35, \\; 37, \\; 85$. Finn $Q_1$, $Q_2$, $Q_3$ og $\\text{IQR}$.', solution: '$Q_2 = 33$. Nedre halvdel: $28, 30, 31, 32$, $Q_1 = \\frac{30+31}{2} = 30{,}5$. Øvre halvdel: $34, 35, 37, 85$, $Q_3 = \\frac{35+37}{2} = 36$. $\\text{IQR} = 36 - 30{,}5 = 5{,}5$' },
              { label: 'b', task: 'Bestem om verdien $85$ er en uteligger. Vis utregningen.', solution: 'Øvre grense: $Q_3 + 1{,}5 \\cdot \\text{IQR} = 36 + 1{,}5 \\cdot 5{,}5 = 36 + 8{,}25 = 44{,}25$. Siden $85 > 44{,}25$ er $85$ en uteligger.' },
              { label: 'c', task: 'Beregn gjennomsnittet med og uten uteliggeren ($85$). Hvilken effekt har uteliggeren?', solution: 'Med: $\\bar{x} = \\frac{345}{9} \\approx 38{,}3$. Uten: $\\bar{x} = \\frac{260}{8} = 32{,}5$. Uteliggeren drar gjennomsnittet opp med nesten 6 tusen kr.' },
              { label: 'd', task: 'Forklar hvorfor medianen er et bedre mål på «typisk lønn» enn gjennomsnittet i dette tilfellet.', solution: 'Medianen ($33$) påvirkes ikke av den ekstreme verdien $85$, mens gjennomsnittet ($38{,}3$) trekkes kraftig opp. Medianen gir et mer realistisk bilde av hva en «vanlig» ansatt tjener.' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Beregn grensene for uteliggere: $Q_1 - 1{,}5 \\cdot \\text{IQR}$ og $Q_3 + 1{,}5 \\cdot \\text{IQR}$. Sammenlign medianen og gjennomsnittet for å forstå effekten av skjeve data.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.2: Kritisk vurdering av statistikk fra medier
// ============================================================================

export const CHAPTER_9_10_2: TextbookChapter = {
  id: '9-10-2',
  courseId: '9',
  chapterNumber: '10.2',
  title: 'Kritisk vurdering av statistikk fra medier',
  description: 'Villedende diagrammer, cherry-picking, korrelasjon vs. kausalitet og skjulte variabler.',
  estimatedMinutes: 45,
  competenceGoals: ['vurdere og drøfte om statistiske framstillingar i media og samfunn er relevante og pålitelege'],
  content: [
    {
      id: '9-10-2-intro',
      type: 'text',
      content: `## Statistikk i hverdagen

Vi møter statistikk overalt - i nyhetene, i reklame, i sosiale medier og i politiske debatter. Tall og diagrammer kan virke svært overbevisende, men de kan også villede oss hvis vi ikke er kritiske.

I dette kapittelet lærer du å gjenkjenne vanlige triks og feil i statistiske fremstillinger:
- **Villedende diagrammer** - hvordan grafikk kan overdrive eller skjule forskjeller
- **Cherry-picking** - når man bare viser de dataene som passer
- **Korrelasjon vs. kausalitet** - å forveksle sammenheng med årsaksforhold
- **Skjulte variabler** - faktorer som kan forklare en tilsynelatende sammenheng

Målet er at du skal bli en **kritisk leser** av statistikk - ikke at du skal slutte å stole på tall, men at du skal stille de rette spørsmålene.`,
    },
    {
      id: '9-10-2-def-1',
      type: 'definition',
      title: 'Villedende diagrammer',
      content: `Et diagram kan gi et **misvisende inntrykk** på flere måter:

1. **Avkortet y-akse:** Hvis y-aksen ikke starter på 0, kan små forskjeller se dramatiske ut. En økning fra 100 til 105 (5 %) kan se ut som en dobling hvis aksen starter på 98.

2. **Manipulert skala:** Bruk av ulike skalaer på aksene, eller logaritmisk skala uten å markere det, kan forvrenge bildet.

3. **3D-effekter:** Tredimensjonale søylediagrammer og sektordiagrammer kan gjøre det vanskelig å sammenligne størrelser nøyaktig.

4. **Manglende kontekst:** Å vise absolutte tall uten å oppgi befolkningsstørrelse, eller å utelate tidsperioden, kan gi et skjevt bilde.

5. **Ikonstørrelser:** Når ikoner eller bilder brukes for å representere tall, kan det skalere i to dimensjoner (areal) i stedet for én (høyde), slik at forskjellen overdramatiseres.`,
    },
    {
      id: '9-10-2-example-1',
      type: 'example',
      title: 'Eksempel 1 - Avkortet y-akse',
      problem: `En avis viser et søylediagram over gjennomsnittlig skoleresultater for to kommuner:

- Kommune A: 4,2
- Kommune B: 4,5

Y-aksen i diagrammet starter på 4,0 og slutter på 5,0.

Forklar hvorfor dette diagrammet kan være villedende, og hva det riktige inntrykket bør være.`,
      solution: `**Løsning:**

Når y-aksen starter på $4{,}0$ i stedet for $0$, ser forskjellen mellom $4{,}2$ og $4{,}5$ mye større ut enn den egentlig er. Søylen for Kommune B vil se ut til å være **nesten dobbelt så høy** som søylen for Kommune A.

I virkeligheten er forskjellen bare $4{,}5 - 4{,}2 = 0{,}3$ poeng, altså en forskjell på ca. $7{,}1\\%$ ($\\frac{0{,}3}{4{,}2} \\approx 0{,}071$).

Hvis y-aksen startet på $0$, ville begge søylene vært nesten like høye, og forskjellen ville virke mye mindre dramatisk.

**Viktig:** Det er ikke alltid \"galt\" å avkorte y-aksen - noen ganger er det nødvendig for å vise detaljer. Men det bør alltid merkes tydelig, og leseren bør se på tallene, ikke bare figuren.`,
    },
    {
      id: '9-10-2-def-2',
      type: 'definition',
      title: 'Cherry-picking (rosinen i pølsa)',
      content: `**Cherry-picking** betyr å velge ut bare de dataene eller det tidsrommet som støtter det man vil vise, og ignorere resten.

Eksempler:
- Vise aksjekursen bare de siste 3 dagene (oppgang) i stedet for det siste året (nedgang)
- Velge ut akkurat de årene der temperaturen var uvanlig lav for å \"bevise\" at klimaet ikke endrer seg
- Sammenligne testresultater fra to skoler, men bare vise fagene der den ene skolen gjør det best

**Hvordan avsløre cherry-picking:**
- Spør: \"Hva viser hele tidsperioden?\"
- Spør: \"Er det andre data som er utelatt?\"
- Se etter om start- og sluttpunktet i en tidsserie er valgt strategisk`,
    },
    {
      id: '9-10-2-example-2',
      type: 'example',
      title: 'Eksempel 2 - Cherry-picking av tidsperiode',
      problem: `En politiker sier: \"Kriminaliteten har økt med 20 % de siste to årene - dette viser at politikken vår ikke fungerer!\"

Tallene er riktige: kriminaliteten gikk fra 1000 til 1200 anmeldte lovbrudd i kommunen.

Men ser vi på de siste 10 årene, var tallene:

| År | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 |
|----|------|------|------|------|------|------|------|------|------|------|
| Lovbrudd | 1800 | 1700 | 1600 | 1400 | 1300 | 1200 | 1100 | 1000 | 1100 | 1200 |

Hva er problemet med politikerens påstand?`,
      solution: `**Løsning:**

Politikeren har valgt ut **bare de siste to årene** (2023-2025), der det er en økning fra 1000 til 1200.

Men ser vi på hele 10-årsperioden, har kriminaliteten **sunket fra 1800 til 1200** - en nedgang på $\\frac{1800 - 1200}{1800} \\approx 33\\%$.

De to siste årene viser en liten \"oppsving\" i en ellers langvarig nedadgående trend. Å fokusere bare på denne korte perioden er **cherry-picking**.

En riktig fremstilling ville sagt: \"Kriminaliteten har falt kraftig de siste 10 årene, fra 1800 til 1200 lovbrudd, selv om det har vært en svak økning de siste to årene.\"

**Lærdom:** Se alltid på den **langsiktige trenden**, ikke bare et utvalgt tidsrom.`,
    },
    {
      id: '9-10-2-def-3',
      type: 'definition',
      title: 'Korrelasjon vs. kausalitet',
      content: `To ting **korrelerer** (samvarierer) når de har en tendens til å endre seg sammen. Men korrelasjon betyr **ikke** nødvendigvis at den ene *forårsaker* den andre. Dette er en av de vanligste feilslutningene i statistikk.

**Korrelasjon:** $A$ og $B$ endrer seg i takt (begge øker, eller den ene øker mens den andre synker).

**Kausalitet:** $A$ *forårsaker* $B$ (endring i $A$ fører direkte til endring i $B$).

Tre mulige forklaringer på korrelasjon mellom $A$ og $B$:
1. $A$ forårsaker $B$
2. $B$ forårsaker $A$
3. En **skjult variabel** $C$ forårsaker begge deler (lurende variabel)

**Klassisk eksempel:** Iskremssalg og drukningsulykker korrelerer positivt. Betyr det at iskrem forårsaker drukning? Nei! Den skjulte variabelen er **varmt vær** - folk spiser mer iskrem OG bader mer når det er varmt.`,
    },
    {
      id: '9-10-2-example-3',
      type: 'example',
      title: 'Eksempel 3 - Korrelasjon eller kausalitet?',
      problem: `Avgjør om dette er korrelasjon, kausalitet, eller om det er en skjult variabel:

a) \"Jo flere brannbiler som rykker ut, desto større er skadene fra brannen.\"

b) \"Elever som spiser frokost gjør det bedre på prøver.\"

c) \"Land med høyere sjokoladeforbruk per innbygger har flere nobelprisvinnere.\"`,
      solution: `**Løsning:**

**a) Brannbiler og brannskader:**
Det er **korrelasjon, men ikke kausalitet**. Brannbilene forårsaker ikke skadene. Den **skjulte variabelen** er **brannens størrelse**. Store branner gir både mer skade OG krever flere brannbiler. Å sende færre brannbiler ville gjort skadene verre, ikke bedre!

**b) Frokost og prøveresultater:**
Her er det trolig en **delvis kausal sammenheng** - frokost gir energi til hjernen. Men det finnes også **skjulte variabler**: elever som spiser frokost kommer kanskje fra hjem med gode rutiner, foreldrene følger opp skolearbeid, elevene sover nok, osv. Så sammenhengen er nok sterkere enn det frokost alene forklarer.

**c) Sjokolade og nobelprisvinnere:**
Dette er en **tullkorrelasjon** (spurious correlation). Den skjulte variabelen er trolig **BNP per innbygger** - rike land har både høyere sjokoladeforbruk og bedre forskningsinstitusjoner. Å spise mer sjokolade gjør deg ikke smartere!`,
    },
    {
      id: '9-10-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '9-10-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: `En reklame for et treningssenter viser et søylediagram med antall medlemmer:

- 2023: 500 medlemmer
- 2024: 520 medlemmer
- 2025: 545 medlemmer

Y-aksen starter på 480. Forklar hvorfor dette kan gi et feil inntrykk.`,
        solution: `Når y-aksen starter på 480 i stedet for 0, ser det ut som om antall medlemmer har økt dramatisk. Søylen for 2025 (545) ser kanskje 3 ganger så høy ut som søylen for 2023 (500).

I virkeligheten er økningen bare fra 500 til 545, altså 45 medlemmer eller 9 % over to år. Det er en moderat økning, men diagrammet overdriver den ved å \"kutte bort\" den nedre delen av søylene.

Et ærlig diagram bør enten starte y-aksen på 0, eller tydelig markere at aksen er avkortet (med en sikk-sakk-linje).`,
        hints: ['Tenk på hvordan søylene ser ut visuelt. Hvor høye ser de ut sammenlignet med hverandre?'],
      },
    },
    {
      id: '9-10-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '9-10-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: `Forklar hva \"cherry-picking\" betyr i statistikk, og gi et eget eksempel på cherry-picking som du kan tenke deg i en hverdagssituasjon.`,
        solution: `Cherry-picking betyr å plukke ut bare de dataene eller tallene som passer med det man vil vise, og ignorere resten.

Eksempel: En elev har fått karakterene 3, 4, 2, 5, 3, 6 på seks prøver. Til foreldrene sier eleven: \"Jeg har fått 5 og 6 på de siste prøvene!\" Men dette er bare de to beste resultatene - gjennomsnittet er egentlig $\\frac{3+4+2+5+3+6}{6} = 3{,}8$.

Andre mulige eksempler: En nettbutikk som viser bare de beste kundeanmeldelsene, eller en venn som bare poster de fineste feriebildene og gir inntrykk av at hele ferien var perfekt.`,
        hints: ['Tenk på situasjoner der noen bare forteller deler av sannheten for å gi et bedre inntrykk.'],
      },
    },
    {
      id: '9-10-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '9-10-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: `For hvert av disse eksemplene: avgjør om det mest sannsynlig er kausalitet, korrelasjon med skjult variabel, eller tullkorrelasjon.

a) \"Jo mer tid elever bruker på sosiale medier, desto lavere karakterer får de.\"

b) \"Antall filmer Nicolas Cage er med i per år korrelerer med antall drukningsulykker i svømmebasseng.\"

c) \"Røyking øker risikoen for lungekreft.\"

d) \"Jo flere politifolk i et område, desto mer kriminalitet.\"`,
        solution: `**a) Sosiale medier og karakterer:**
Trolig en blanding av **delvis kausalitet** og **skjulte variabler**. Mye tid på sosiale medier kan gå utover studietid (kausalitet), men det kan også skyldes at elever som mangler motivasjon for skolen, bruker mer tid på mobilen (skjult variabel: motivasjon).

**b) Nicolas Cage-filmer og drukningsulykker:**
Dette er en **tullkorrelasjon** (spurious correlation). Det er ren tilfeldighet at disse to tallseriene følger hverandre. De har ingen sammenheng - verken direkte eller gjennom en skjult variabel.

**c) Røyking og lungekreft:**
Dette er **kausalitet**, bekreftet gjennom årtier med medisinsk forskning. Stoffer i sigarettrøyk skader lungevevet direkte og fører til kreftutvikling.

**d) Politifolk og kriminalitet:**
**Korrelasjon med omvendt kausalitet.** Flere politifolk *forårsaker* ikke kriminalitet. Det er **kriminaliteten som fører til at flere politifolk settes inn** i området.`,
        hints: [
          'For hvert eksempel: spør deg om A forårsaker B, B forårsaker A, eller om det finnes en tredje faktor.',
        ],
      },
    },
    {
      id: '9-10-2-ex-4',
      type: 'exercise',
      exercise: {
        id: '9-10-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: `En avis skriver: \"Elever som drikker energidrikk daglig har 30 % lavere karaktergjennomsnitt enn de som aldri drikker energidrikk.\"

a) Betyr dette at energidrikk gjør deg dummere? Forklar.
b) Nevn minst to mulige skjulte variabler som kan forklare sammenhengen.
c) Hva slags undersøkelse måtte man gjøre for å bevise kausalitet?`,
        solution: `**a)** Nei, dette betyr ikke nødvendigvis at energidrikk gjør deg dummere. Undersøkelsen viser **korrelasjon**, ikke **kausalitet**. Det kan godt være at de som drikker mye energidrikk og de med lavere karakterer har andre ting til felles.

**b)** Mulige skjulte variabler:
1. **Søvnmønster:** Elever som drikker mye energidrikk sover kanskje dårligere (sent oppe, uregelmessig døgnrytme), og dårlig søvn påvirker konsentrasjon og læringsevne.
2. **Generelle vaner:** Elever som drikker mye energidrikk kan også ha andre livsstilsvaner som påvirker skoleprestasjoner (mindre fysisk aktivitet, dårligere kosthold, mer gaming).
3. **Sosioøkonomisk bakgrunn:** Hjemmesituasjon og oppfølging hjemme kan påvirke både drikkevaner og skoleprestasjoner.

**c)** For å bevise kausalitet måtte man gjøre et **kontrollert eksperiment**: tilfeldig dele elever i to grupper, gi den ene gruppen energidrikk og den andre gruppen placebo over tid, og se om det er forskjell i resultater. (Et slikt eksperiment ville trolig ikke bli godkjent av etiske grunner.)`,
        hints: [
          'Husk: korrelasjon betyr ikke kausalitet. Finnes det andre forklaringer?',
          'Tenk på hva som kjennetegner livsstilen til de som drikker mye energidrikk.',
        ],
      },
    },
    {
      id: '9-10-2-ex-5',
      type: 'exercise',
      exercise: {
        id: '9-10-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: `Nevn fire spørsmål du bør stille deg selv når du ser et diagram eller en statistikk i media.`,
        solution: `Fire viktige spørsmål å stille:

1. **Hvem har laget statistikken, og hva er deres interesse?** Har avsenderen en agenda? En reklame, et politisk parti eller en interesseorganisasjon kan velge å presentere data på en måte som støtter deres sak.

2. **Starter y-aksen på null, og er skalaen riktig?** En avkortet akse kan overdrive forskjeller. Sjekk om diagrammet gir et riktig visuelt inntrykk av tallforskjellene.

3. **Hvor mye data er vist, og er noe utelatt?** Er det cherry-picking? Dekker tidsperioden hele bildet? Er alle relevante grupper tatt med?

4. **Er det snakk om korrelasjon eller kausalitet?** Bare fordi to ting henger sammen, betyr det ikke at den ene forårsaker den andre. Tenk på om det kan finnes skjulte variabler.

Tilleggsspørsmål: Hvor stort er utvalget? Hvem er spurt? Er feilmarginen oppgitt?`,
        hints: ['Tenk på de ulike typene villeding vi har gjennomgått: diagramtriks, cherry-picking, korrelasjon/kausalitet.'],
      },
    },
    {
      id: '9-10-2-ex-6',
      type: 'exercise',
      exercise: {
        id: '9-10-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En undersøkelse i en kommune viser:

- Gjennomsnittsinntekt: 650 000 kr
- Medianinntekt: 480 000 kr

a) Forklar hvorfor gjennomsnitt og median er så forskjellige.
b) Hvilken av de to er mest representativ for \"vanlige folk\" i kommunen?
c) Hvis en politiker vil vise at folk har det bra økonomisk, hvilket tall vil hen bruke? Hva om hen vil argumentere for mer økonomisk støtte?`,
        solution: `**a)** Gjennomsnitt og median er svært forskjellige fordi inntektsfordelingen er **høyreskjev** - noen få personer tjener veldig mye og drar gjennomsnittet opp. For eksempel: hvis 100 personer tjener 480 000 kr i snitt, men 2 personer tjener 10 millioner kr, vil gjennomsnittet bli mye høyere enn medianen.

**b)** **Medianen** ($480\\,000$ kr) er mest representativ for \"vanlige folk\". Den forteller at halvparten av innbyggerne tjener under $480\\,000$ kr og halvparten tjener over. Medianen er robust mot de ekstreme inntektene.

**c)** Politikeren som vil vise velstand vil bruke **gjennomsnittet** ($650\\,000$ kr) - \"innbyggerne i vår kommune tjener i snitt 650 000 kr!\"

Politikeren som vil argumentere for mer støtte vil bruke **medianen** ($480\\,000$ kr) - \"halvparten av innbyggerne våre tjener under 480 000 kr!\"

**Lærdom:** Valget av sentralmål kan gi svært forskjellig inntrykk. Vær oppmerksom på hvilke tall som brukes!`,
        hints: [
          'Tenk på hva som skjer med gjennomsnittet når noen få har ekstremt høy inntekt.',
          'Medianen er robust mot ekstremverdier - hva betyr det her?',
        ],
      },
    },
    {
      id: '9-10-2-ex-7',
      type: 'exercise',
      exercise: {
        id: '9-10-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Finn et eksempel på statistikk eller et diagram i en nyhetsartikkel, reklame eller innlegg i sosiale medier (du kan også finne på et realistisk eksempel).

a) Beskriv hva som påstås.
b) Identifiser minst to mulige problemer med fremstillingen (villedende diagram, cherry-picking, korrelasjon/kausalitet, skjulte variabler, manglende kontekst).
c) Forklar hvordan statistikken kunne vært presentert på en mer ærlig måte.`,
        solution: `Her er et eksempel du kunne brukt:

**a)** En reklame for et kosttilskudd sier: \"80 % av brukerne rapporterer bedre søvn etter 4 uker!\" sammen med et søylediagram der søylen \"etter\" er tre ganger høyere enn søylen \"før\".

**b)** Mulige problemer:
1. **Manglende kontrollgruppe:** Uten en gruppe som tar placebo, vet vi ikke om forbedringen skyldes produktet eller placeboeffekten. Mange ville rapportert bedre søvn uansett.
2. **Selvrapportering:** \"Rapporterer bedre søvn\" er subjektivt. Folk som har betalt for et produkt har tendens til å tro det virker (confirmation bias).
3. **Villedende diagram:** Søylen er trolig overdrevet gjennom avkortet y-akse.
4. **Cherry-picking:** Kanskje undersøkelsen varte 12 uker, men bare 4-ukersresultatene vises fordi effekten forsvant etterpå.

**c)** Mer ærlig: Vise resultater fra en blindstudie med kontrollgruppe, oppgi nøyaktige tall (f.eks. \"søvnkvalitet økte fra 6,2 til 6,8 på en skala fra 1-10\"), bruke korrekt skala på diagrammet, og oppgi feilmarginer og utvalgsstørrelse.`,
        hints: [
          'Tenk på reklame, politiske utspill eller oppslag i sosiale medier.',
          'Bruk sjekklisten fra oppgave 5 til å vurdere statistikken.',
        ],
      },
    },
    // ========== OPPSUMMERING ==========
    {
      id: '9-10-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Villedende diagrammer**: Å gjenkjenne triks som avkortet y-akse, manipulert skala og 3D-effekter som overdramatiserer forskjeller
- **Cherry-picking**: Å avsløre når noen bare viser utvalgte data eller tidsperioder som støtter deres synspunkt
- **Korrelasjon vs. kausalitet**: Å forstå forskjellen mellom at to ting samvarierer og at den ene faktisk forårsaker den andre
- **Skjulte variabler**: Å identifisere ukjente faktorer som kan forklare en tilsynelatende sammenheng mellom to variabler

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Villedende diagram | Diagram som gir et feilaktig visuelt inntrykk av dataene |
| Cherry-picking | Å velge ut bare data som passer med det man vil vise |
| Korrelasjon | To variabler som endrer seg i takt (samvariasjon) |
| Kausalitet | At én variabel direkte forårsaker endring i en annen |
| Skjult variabel | En ukjent faktor som påvirker begge variablene og skaper en tilsynelatende sammenheng |
| Tullkorrelasjon | En statistisk sammenheng som er helt tilfeldig og uten reell forbindelse |`,
    },
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-10-2-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '9-10-2-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-10-2-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Identifiser villedende elementer i diagrammer.',
            subTasks: [
              { label: 'a', task: 'Et søylediagram viser salg på $100$ og $110$ enheter, men y-aksen starter på $95$. Hvor mange prosent økte salget egentlig?', solution: '$\\frac{110 - 100}{100} \\cdot 100\\% = 10\\%$' },
              { label: 'b', task: 'I diagrammet fra a) ser søylen for $110$ ut til å være omtrent tre ganger så høy som søylen for $100$. Forklar hvorfor.', solution: 'Fordi y-aksen starter på $95$: søylen for $100$ viser bare $100 - 95 = 5$ enheter, mens søylen for $110$ viser $110 - 95 = 15$ enheter. $15$ er $3$ ganger $5$, selv om den reelle forskjellen bare er $10\\%$.' },
              { label: 'c', task: 'Hva bør y-aksen starte på for å gi et riktig visuelt inntrykk?', solution: 'Y-aksen bør starte på $0$.' },
              { label: 'd', task: 'Et sektordiagram har 3D-effekt. Forklar hvorfor dette kan være villedende.', solution: '3D-perspektiv gjør sektorer som er nærmest betrakteren visuelt større, og sektorer lenger bak ser mindre ut enn de faktisk er.' },
              { label: 'e', task: 'En avis bruker et bilde av en pengekasse for å vise at sparerenten har doblet seg fra $1\\%$ til $2\\%$. Bildet av den nye pengekassen er dobbelt så høy og dobbelt så bred. Hva er arealet av det nye bildet sammenlignet med det gamle?', solution: 'Arealet er $2 \\times 2 = 4$ ganger så stort, selv om økningen bare er $100\\%$ (dobling). Det overdramatiserer forskjellen.' },
              { label: 'f', task: 'Gi to eksempler på situasjoner der det faktisk kan være rimelig å la y-aksen starte på en annen verdi enn $0$.', solution: 'For eksempel temperaturdata (der $0$ °C ikke er naturlig bunnpunkt) eller aksjekurser (der verdien aldri er nær $0$). Poenget er at konteksten avgjør.' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Tenk på hva som skjer med det visuelle inntrykket når y-aksen ikke starter på 0.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-10-2-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-10-2-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Skille mellom korrelasjon og kausalitet.',
            subTasks: [
              { label: 'a', task: 'Hva er forskjellen mellom korrelasjon og kausalitet?', solution: 'Korrelasjon betyr at to variabler endrer seg i takt (samvariasjon). Kausalitet betyr at den ene variabelen direkte forårsaker endring i den andre.' },
              { label: 'b', task: 'Det er en korrelasjon mellom iskremssalg og drukning. Betyr dette at iskrem forårsaker drukning? Forklar.', solution: 'Nei. Den skjulte variabelen er varmt vær: når det er varmt, spiser folk mer is OG bader mer, noe som øker drukningsmuligheten.' },
              { label: 'c', task: 'Det er en korrelasjon mellom skostørrelse og leseferdighet hos barn. Hva er den sannsynlige skjulte variabelen?', solution: 'Alder. Eldre barn har større føtter OG bedre leseferdigheter.' },
              { label: 'd', task: 'En studie viser at elever som spiser frokost, får bedre karakterer. Er dette nødvendigvis kausalitet?', solution: 'Ikke nødvendigvis. En skjult variabel kan være sosioøkonomisk bakgrunn: familier med god økonomi kan ha mer tid til frokost OG bedre læringsmiljø.' },
              { label: 'e', task: 'I et land stiger antall storker og fødselstall samtidig. Forklar denne «tullkorrelasjonen».', solution: 'Begge følger urbanisering/sesongvariasjoner. Det er ingen årsakssammenheng mellom storker og fødsler.' },
              { label: 'f', task: 'Hva kan du gjøre for å undersøke om en sammenheng er kausal og ikke bare korrelasjon?', solution: 'Man kan gjennomføre kontrollerte eksperimenter der man endrer én variabel og holder alt annet likt, eller lete systematisk etter skjulte variabler.' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Let alltid etter en skjult variabel (confounding variable) som kan forklare sammenhengen.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-10-2-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-10-2-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Identifiser cherry-picking og manglende kontekst.',
            subTasks: [
              { label: 'a', task: 'En bedrift viser at omsetningen økte fra $8$ millioner i 2023 til $10$ millioner i 2025. Men omsetningen var $12$ millioner i 2022. Hva er cherry-picking her?', solution: 'Bedriften velger 2023 som startpunkt fordi det var et dårlig år. Hadde de sammenlignet med 2022, ville det vist en nedgang fra $12$ til $10$ millioner.' },
              { label: 'b', task: 'En politiker sier: «Kriminaliteten sank med $20\\%$ i min periode!» Men befolkningen vokste med $15\\%$ i samme periode. Hvorfor er dette villedende?', solution: 'Antall forbrytelser per innbygger kan ha endret seg annerledes enn totaltallet. Med $15\\%$ flere innbyggere bør man se på kriminalitetsraten, ikke bare det absolutte tallet.' },
              { label: 'c', task: 'I en reklame står det: «$4$ av $5$ tannleger anbefaler vårt produkt.» Hva bør du spørre om?', solution: 'Hvor mange tannleger ble spurt? Hvordan ble de valgt ut? Hva var alternativene? Anbefaler de produktet generelt eller fremfor et spesifikt annet?' },
              { label: 'd', task: 'En nettavis skriver: «Dobling av sykkelulykker!» Antallet gikk fra $3$ til $6$. Er overskriften riktig? Er den rimelig?', solution: 'Teknisk sett er det en dobling, men tallene er så små at tilfeldig variasjon kan forklare endringen. Overskriften er villedende fordi den antyder et stort problem.' },
              { label: 'e', task: 'En graf viser norsk temperaturutvikling bare fra 1998 til 2012. Hva er problemet?', solution: '1998 var et uvanlig varmt El Niño-år. Å starte grafen der gir inntrykk av at temperaturen har vært flat eller fallende, selv om den langsiktige trenden er stigende.' },
              { label: 'f', task: 'Forklar hva «manglende kontekst» betyr i statistikk og gi et eget eksempel.', solution: 'Manglende kontekst betyr at viktig informasjon er utelatt, slik at tallene gir feil inntrykk. Eksempel: «$500$ mennesker dør av X i året» høres mye ut, men hvis det gjelder hele verden med $8$ milliarder mennesker, er risikoen ekstremt lav.' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Cherry-picking betyr å bare velge ut de tallene som passer med budskapet ditt. Se alltid på hele bildet.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-10-2-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-10-2-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Analyser statistiske påstander fra medier.',
            subTasks: [
              { label: 'a', task: 'En avis skriver: «Gjennomsnittslønnen i Norge er $620\\,000$ kr.» Neste dag skriver en annen: «Vanlig lønn i Norge er $550\\,000$ kr.» Kan begge ha rett? Forklar.', solution: 'Ja. Den ene bruker gjennomsnitt (som trekkes opp av høye lønner), den andre bruker median (som ikke påvirkes av ekstremer). Medianen er alltid lavere enn gjennomsnittet når fordelingen er høyreskjev.' },
              { label: 'b', task: 'Et kosttilskuddselskap hevder: «$85\\%$ av brukerne rapporterer økt energi.» De spurte bare sine egne kunder. Hva er problemet?', solution: 'Selektivt utvalg: de som fortsetter å kjøpe produktet er sannsynligvis fornøyde. Misfornøyde kunder har sluttet å kjøpe og ble ikke spurt.' },
              { label: 'c', task: 'En studie viser at barn som leser 30 minutter daglig har $25\\%$ bedre resultater på nasjonale prøver. Kan vi konkludere med at lesing fører til bedre resultater?', solution: 'Ikke uten videre. Barn som leser mye kan ha foreldre som er mer engasjert i barnas utdanning, bedre tilgang til bøker, osv. Skjulte variabler kan forklare sammenhengen.' },
              { label: 'd', task: 'Et diagram viser at antall mennesker som druknet i svømmebasseng korrelerer med antall Nicolas Cage-filmer utgitt det året. Hva slags korrelasjon er dette?', solution: 'Dette er en tullkorrelasjon (spurious correlation). Det finnes ingen logisk forbindelse; det er ren tilfeldighet at tallene følger hverandre.' },
              { label: 'e', task: 'En kommune hevder at «trafikkulykkene er halvert» etter å ha installert fartshumper. De sammenligner ett år med forrige. Hva bør du vurdere?', solution: 'Tilfeldig variasjon mellom år, om det var spesielle forhold forrige år (ekstremt glatt vinter), om trafikkmengden har endret seg, og om man bør se på flere års data.' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Still alltid spørsmålene: Hvem er spurt? Hvordan er tallene samlet inn? Finnes det skjulte variabler? Er utvalget representativt?'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-10-2-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-10-2-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Regn med prosent og absolutte tall for å avsløre villedende statistikk.',
            subTasks: [
              { label: 'a', task: 'By A har $200$ innbrudd og $100\\,000$ innbyggere. By B har $150$ innbrudd og $50\\,000$ innbyggere. Hvilken by er «tryggest»?', solution: 'By A: $\\frac{200}{100\\,000} \\cdot 1000 = 2{,}0$ innbrudd per $1000$ innbyggere. By B: $\\frac{150}{50\\,000} \\cdot 1000 = 3{,}0$ innbrudd per $1000$ innbyggere. By A er tryggest per innbygger, selv om den har flest innbrudd totalt.' },
              { label: 'b', task: 'En medisin reduserer risikoen for sykdom fra $2\\%$ til $1\\%$. Reklamen sier «$50\\%$ risikoreduksjon!» Er dette riktig? Er det villedende?', solution: 'Det er teknisk riktig (relativ reduksjon: fra $2\\%$ til $1\\%$ er en halvering). Men den absolutte reduksjonen er bare $1$ prosentpoeng, noe som er mye mindre dramatisk.' },
              { label: 'c', task: 'En skole hadde $2$ elever som strøk i fjor og $4$ i år. Avisen skriver «$100\\%$ økning i stryk!» Forklar hvorfor dette er villedende.', solution: 'Tallene er så små at tilfeldige svingninger kan forklare endringen. Med hundrevis av elever er $2$ til $4$ helt innenfor normalvariasjon.' },
              { label: 'd', task: 'Et land har $10$ millioner innbyggere og $5\\,000$ trafikkulykker. Et annet har $1$ million innbyggere og $800$ trafikkulykker. Hvilket land er tryggest i trafikken? Vis utregning.', solution: 'Land 1: $\\frac{5\\,000}{10\\,000\\,000} \\cdot 100\\,000 = 50$ per $100\\,000$. Land 2: $\\frac{800}{1\\,000\\,000} \\cdot 100\\,000 = 80$ per $100\\,000$. Land 1 er tryggere per innbygger.' },
              { label: 'e', task: 'Forklar forskjellen mellom «prosentpoeng» og «prosent» med et eksempel.', solution: 'Hvis arbeidsledigheten går fra $5\\%$ til $8\\%$, har den økt med $3$ prosentpoeng. Men den prosentvise økningen er $\\frac{3}{5} \\cdot 100\\% = 60\\%$. Forskjellen er viktig fordi «$60\\%$ økning» høres mye mer dramatisk ut enn «$3$ prosentpoeng».' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Sammenlign alltid rater (per innbygger, per 1000) heller enn absolutte tall når populasjoner er forskjellige.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-10-2-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-10-2-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Analyser en sammensatt statistisk påstand kritisk.',
            subTasks: [
              { label: 'a', task: 'En helsekostprodusent viser til en studie der $60$ av $80$ deltakere opplevde bedring etter å ha brukt produktet i $4$ uker. Beregn prosentandelen som opplevde bedring.', solution: '$\\frac{60}{80} \\cdot 100\\% = 75\\%$' },
              { label: 'b', task: 'I studien fra a) var det ingen kontrollgruppe (placebogruppe). Forklar hvorfor dette er et problem.', solution: 'Uten kontrollgruppe vet vi ikke om bedringen skyldes produktet eller placeboeffekten (at folk føler seg bedre bare fordi de tror de får behandling). Mange ville kanskje blitt bedre uansett.' },
              { label: 'c', task: 'Deltakerne i studien meldte seg frivillig etter å ha sett en annonse fra produsenten. Hvordan kan dette påvirke resultatet?', solution: 'Selvseleksjon: folk som melder seg frivillig er kanskje allerede positive til produktet. De kan også rapportere mer positivt fordi de ønsker at produktet skal virke (confirmation bias).' },
              { label: 'd', task: 'Skriv en kort, kritisk vurdering (3-4 setninger) av studien der du bruker begrepene «selektivt utvalg», «manglende kontrollgruppe» og «placeboeffekt».', solution: 'Studien har flere svakheter. Utvalget er selektivt fordi deltakerne meldte seg frivillig, noe som kan gi skjevhet i resultatene. Det mangler en kontrollgruppe, så vi kan ikke skille effekten av produktet fra placeboeffekten. Uten disse kontrollene er det umulig å konkludere med at produktet faktisk virker.' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Tenk på hvem som er spurt, hvordan studien er gjennomført, og om det finnes alternative forklaringer på resultatene.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.3: Data, manipulering og synspunkter
// ============================================================================

export const CHAPTER_9_10_3: TextbookChapter = {
  id: '9-10-3',
  courseId: '9',
  chapterNumber: '10.3',
  title: 'Data, manipulering og synspunkter',
  description: 'Hvordan data kan brukes for å støtte synspunkter, manipulering av data og etikk i databruk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'vurdere og drøfte om statistiske framstillingar i media og samfunn er relevante og pålitelege',
    'bruke data til å stille spørsmål, beskrive forklaringar og presentere funn',
  ],
  content: [
    {
      id: '9-10-3-intro',
      type: 'text',
      content: `## Data som verktøy og våpen

Data og statistikk er kraftige verktøy. De kan hjelpe oss med å forstå verden, ta gode beslutninger og løse problemer. Men de kan også brukes til å **manipulere**, **villede** og **påvirke** folk til å tro noe som ikke stemmer.

I dette kapittelet ser vi på:
- Hvordan de **samme dataene** kan brukes til å støtte **ulike synspunkter**
- Teknikker for **datamanipulering** - bevisste og ubevisste
- **Etikk** i innsamling og bruk av data
- Hvordan du selv kan bruke data **ærlig og ansvarlig**

Husk: Problemet er sjelden selve dataene. Problemet er **hvordan de tolkes, velges ut og presenteres**.`,
    },
    {
      id: '9-10-3-def-1',
      type: 'definition',
      title: 'Framing - å ramme inn data',
      content: `**Framing** (innramming) handler om hvordan vi presenterer informasjon for å påvirke hvordan den oppfattes. De **samme tallene** kan gi helt forskjellig inntrykk avhengig av hvordan de rammes inn.

Eksempler på framing:
- \"9 av 10 anbefaler dette produktet\" vs. \"10 % er misfornøyd\"
- \"Arbeidsledigheten økte fra 3,0 % til 3,3 %\" vs. \"Antall arbeidsledige økte med 10 %\"
- \"Vi har kuttet utslipp med 15 % siden 2005\" vs. \"Utslippene er fortsatt 85 % av 2005-nivået\"

Framing er ikke nødvendigvis uærlig, men det er viktig å gjenkjenne det når det brukes for å påvirke oss.`,
    },
    {
      id: '9-10-3-example-1',
      type: 'example',
      title: 'Eksempel 1 - Samme data, ulike konklusjoner',
      problem: `En skoles resultater på nasjonale prøver i lesing:

| År | 2021 | 2022 | 2023 | 2024 | 2025 |
|----|------|------|------|------|------|
| Poeng | 48 | 51 | 50 | 49 | 52 |
| Nasjonalt snitt | 50 | 50 | 50 | 50 | 50 |

Vis hvordan en rektor og en bekymret forelder kan bruke disse **samme tallene** til å gi helt forskjellig inntrykk.`,
      solution: `**Løsning:**

**Rektoren sier (positivt):**
\"Skolen har hatt en fantastisk utvikling! Fra 48 poeng i 2021 til 52 poeng i 2025 - en økning på hele 4 poeng! Vi ligger nå **over** det nasjonale snittet. Innsatsen vår med leseopplæring gir resultater!\"

*(Rektoren fokuserer på start- og sluttverdi, og fremhever at skolen nå er over snittet.)*

**Forelderen sier (negativt):**
\"Resultatene er ustabile og svinger opp og ned hvert år. I 2024 lå vi **under** det nasjonale snittet. Vi har ingen stabil forbedring - det virker tilfeldig. Skolen har ikke kontroll på kvaliteten i undervisningen!\"

*(Forelderen fokuserer på variasjonen fra år til år og det svake året 2024.)*

**Begge bruker riktige tall**, men velger ulik framing. En nøytral fremstilling ville sagt: \"Resultatene har variert mellom 48 og 52, med en svakt stigende trend. Skolen ligger nå to poeng over snittet, men forskjellene er små.\"`,
    },
    {
      id: '9-10-3-def-2',
      type: 'definition',
      title: 'Vanlige former for datamanipulering',
      content: `**Datamanipulering** kan være bevisst (juks) eller ubevisst (dårlig metode). Her er vanlige former:

1. **Selektivt utvalg:** Spørre bare folk som sannsynligvis er enige med deg. For eksempel: spørre folk i en sportsbutikk om de trener regelmessig.

2. **Ledende spørsmål:** \"Er du enig i at X er et problem?\" gir andre svar enn \"Hva synes du om X?\"

3. **Utelating av data:** Fjerne datapunkter som \"ikke passer\", uten god grunn.

4. **Endring av definisjon:** Endre hva som telles. For eksempel ble definisjonen av \"arbeidsledig\" endret i et land, og plutselig sank arbeidsledigheten - ikke fordi flere fikk jobb, men fordi færre ble telt.

5. **Prosenttriks:** Blande absolutte tall og prosenter for å forvirre. \"Prisen økte med 50 % og ble deretter satt ned med 50 %\" - men da er den lavere enn originalen!

6. **Feil basislinje:** Sammenligne tall som ikke er sammenlignbare (ulike tidsrom, populasjoner, definisjoner).`,
    },
    {
      id: '9-10-3-example-2',
      type: 'example',
      title: 'Eksempel 2 - Ledende spørsmål',
      problem: `Et firma ønsker å vise at folk vil ha et nytt kjøpesenter. De gjennomfører to ulike spørreundersøkelser:

**Versjon A:** \"Det planlegges et nytt, moderne kjøpesenter med over 100 butikker, restauranter og aktiviteter for hele familien. Støtter du dette?\"

**Versjon B:** \"Det planlegges et kjøpesenter som vil øke trafikken, ta jordbruksareal og kan true lokale småbutikker. Støtter du dette?\"

Forklar hvorfor de to versjonene sannsynligvis gir ulike svar, og hvordan en nøytral versjon ville sett ut.`,
      solution: `**Løsning:**

**Versjon A** er **positivt ladet**: ord som \"nytt\", \"moderne\", \"aktiviteter for hele familien\" skaper positive assosiasjoner. Informasjonen er ensidig positiv. De fleste vil trolig svare ja.

**Versjon B** er **negativt ladet**: ord som \"øke trafikken\", \"ta jordbruksareal\", \"true lokale småbutikker\" skaper negative assosiasjoner. Informasjonen er ensidig negativ. De fleste vil trolig svare nei.

Begge versjonene inneholder **fakta**, men de velger ut ulike fakta og bruker ladede ord.

**En nøytral versjon:**
\"Det er foreslått å bygge et kjøpesenter med ca. 100 butikker i [sted]. Det vil skape arbeidsplasser og gi et bredt handelstilbud, men innebærer også økt trafikk og bruk av jordbruksareal. Hva er din holdning?\"
- [ ] Svært positiv
- [ ] Positiv
- [ ] Nøytral
- [ ] Negativ
- [ ] Svært negativ

En nøytral spørreundersøkelse presenterer **begge sider** og bruker **nøytralt språk**.`,
    },
    {
      id: '9-10-3-text-2',
      type: 'text',
      content: `## Etikk i databruk

Med store datamengder kommer stort ansvar. Når vi samler inn, analyserer og presenterer data, må vi tenke over etiske spørsmål:

**Personvern:** Hvem har tilgang til dataene? Kan enkeltpersoner identifiseres? I Norge har vi personopplysningsloven (basert på EUs GDPR) som beskytter folks data.

**Samtykke:** Vet folk at dataene deres samles inn? Har de gitt tillatelse? Mange apper samler data uten at brukerne er klar over det.

**Formål:** Brukes dataene til det folk ble fortalt? Data som samles inn for forskning bør ikke selges til reklame.

**Rettferdighet:** Kan data og algoritmer forsterke urettferdighet? For eksempel: hvis en algoritme trenes på historiske data der visse grupper ble diskriminert, kan den videreføre diskrimineringen.

**Transparens:** Er metoden åpen og etterprøvbar? Kan andre sjekke resultatene?`,
    },
    {
      id: '9-10-3-def-3',
      type: 'definition',
      title: 'Kildekritikk av statistikk - en sjekkliste',
      content: `Når du vurderer statistikk, bruk denne sjekklisten:

**1. HVEM?**
- Hvem har laget undersøkelsen/statistikken?
- Har de en egeninteresse i resultatet?
- Er det en uavhengig kilde (f.eks. SSB) eller en partisk kilde (f.eks. et firma som selger et produkt)?

**2. HVORDAN?**
- Hvordan ble dataene samlet inn?
- Hvor mange ble spurt (utvalgsstørrelse)?
- Er utvalget representativt?
- Er spørsmålene nøytrale?

**3. HVA vises - og hva vises IKKE?**
- Er hele datasettet vist, eller bare deler?
- Er diagrammer og tall presentert riktig?
- Mangler det kontekst eller sammenligningsgrunnlag?

**4. HVORFOR?**
- Hva er formålet med å presentere disse tallene?
- Prøver noen å overbevise deg om noe?
- Passer konklusjonen med dataene?`,
    },
    {
      id: '9-10-3-example-3',
      type: 'example',
      title: 'Eksempel 3 - Prosenttrikset',
      problem: `En nettbutikk reklamerer: \"40 % rabatt på alle varer!\" Men forrige uke økte de prisene med 40 %.

En jakke kostet opprinnelig 1000 kr.

a) Hva ble prisen etter prisøkningen på 40 %?
b) Hva blir prisen etter rabatten på 40 %?
c) Er det en reell rabatt?`,
      solution: `**Løsning:**

**a) Pris etter 40 % økning:**
$$1000 \\cdot 1{,}40 = 1400 \\text{ kr}$$

**b) Pris etter 40 % rabatt (fra den nye prisen):**
$$1400 \\cdot 0{,}60 = 840 \\text{ kr}$$

**c)** Jakken koster nå $840$ kr - det er **$160$ kr billigere** enn originalprisen på $1000$ kr. Så det *er* en reell rabatt, men den er mye mindre enn 40 %.

Den reelle rabatten fra originalprisen er:
$$\\frac{1000 - 840}{1000} = \\frac{160}{1000} = 16\\%$$

**Trikset:** Prosentøkning og prosentreduksjon med samme prosent gir **ikke** tilbake det opprinnelige beløpet, fordi prosenten beregnes fra ulike utgangspunkt. Økningen på 40 % beregnes fra 1000, men rabatten på 40 % beregnes fra det allerede oppblåste beløpet 1400.`,
    },
    {
      id: '9-10-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '9-10-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: `Skriv om denne setningen på to måter - én som høres positiv ut, og én som høres negativ ut:

\"$30\\%$ av elevene på skolen fikk under karakteren 4 på matteeksamen.\"`,
        solution: `**Positiv framing:**
\"Hele 70 % av elevene fikk karakteren 4 eller bedre på matteeksamen! Et flott resultat som viser at flertallet mestrer faget godt.\"

**Negativ framing:**
\"Nesten en tredjedel av elevene fikk under 4 på matteeksamen. Det betyr at 3 av 10 elever ikke når et tilfredsstillende nivå i matematikk.\"

Begge setningene beskriver nøyaktig det samme, men gir svært forskjellig inntrykk gjennom ordvalg og vinkling.`,
        hints: ['Tenk på å snu tallet: hva er 100 % minus 30 %? Bruk positive vs. negative ord.'],
      },
    },
    {
      id: '9-10-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '9-10-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: `En skjorte kostet 800 kr. Prisen ble først økt med 25 %, og deretter satt ned med 25 %.

a) Hva er prisen nå?
b) Forklar hvorfor den ikke er 800 kr.`,
        solution: `a) Etter 25 % økning: $800 \\cdot 1{,}25 = 1000$ kr
Etter 25 % rabatt: $1000 \\cdot 0{,}75 = 750$ kr

Prisen er nå **750 kr**.

b) Prisen er ikke 800 kr fordi:
- 25 % økning beregnes fra 800 kr: $800 \\cdot 0{,}25 = 200$ kr opp
- 25 % rabatt beregnes fra 1000 kr (den nye, høyere prisen): $1000 \\cdot 0{,}25 = 250$ kr ned

Du legger til 200 kr, men trekker fra 250 kr. Nettoresultatet er $-50$ kr. Prosenten er den samme, men beregningsgrunnlaget er forskjellig!`,
        hints: ['Regn steg for steg: først øk prisen, deretter beregn rabatten fra den nye prisen.'],
      },
    },
    {
      id: '9-10-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '9-10-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: `Et politisk parti hevder: \"Vi har skapt 50 000 nye arbeidsplasser i løpet av de siste fire årene!\"

Nevn minst tre spørsmål du bør stille for å vurdere denne påstanden kritisk.`,
        solution: `Tre viktige spørsmål:

1. **Hva er nettoeffekten?** Ble det også nedlagt arbeidsplasser i samme periode? Hvis det ble opprettet 50 000, men nedlagt 45 000, er nettoeffekten bare 5 000. Bruttoaff mot nettotall kan gi svært forskjellig bilde.

2. **Er det partiet som har \"skapt\" jobbene?** Arbeidsplasser skapes av mange faktorer: konjunktursvingninger, ny teknologi, global etterspørsel, osv. Kausaliteten er vanskelig å bevise. Hadde jobbveksten skjedd uansett?

3. **Hva slags jobber er det?** Er det faste heltidsjobber eller deltids-/midlertidige stillinger? 50 000 deltidsjobber er noe helt annet enn 50 000 faste, godt betalte jobber.

Ekstra spørsmål: Hvordan defineres \"ny arbeidsplass\"? Hva er sammenligningsgrunnlaget? Hvordan var utviklingen i forrige periode? Hva er befolkningsveksten i samme periode (trengs det kanskje 50 000 nye jobber bare for å holde tritt)?`,
        hints: ['Tenk på: hva er utelatt? Er det kausalitet? Hva betyr tallene egentlig?'],
      },
    },
    {
      id: '9-10-3-ex-4',
      type: 'exercise',
      exercise: {
        id: '9-10-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: `Forklar hva som er problemet med hvert av disse spørsmålene i en spørreundersøkelse:

a) \"Synes du ikke også at skolematen bør bli bedre?\"

b) \"Hvor mange timer bruker du på lekser? (1-2 / 2-3 / 3-4 / mer enn 4)\"

c) \"Støtter du miljøvennlig energi, eller foretrekker du å ødelegge naturen?\"`,
        solution: `**a)** \"Synes du ikke også at skolematen bør bli bedre?\"
Problemet: Dette er et **ledende spørsmål**. \"Ikke også\" antyder at det er opplagt at man bør svare ja. Et nøytralt alternativ: \"Hva synes du om kvaliteten på skolematen?\" med en skala fra \"svært dårlig\" til \"svært god\".

**b)** \"Hvor mange timer bruker du på lekser? (1-2 / 2-3 / 3-4 / mer enn 4)\"
Problemet: **Overlappende kategorier og manglende alternativ.** Hva velger du hvis du bruker nøyaktig 2 timer? Og det er ingen kategori for \"mindre enn 1 time\" eller \"0 timer\". Bedre: \"0-1 / 1-2 / 2-3 / 3-4 / mer enn 4\".

**c)** \"Støtter du miljøvennlig energi, eller foretrekker du å ødelegge naturen?\"
Problemet: **Ekstremt ledende og polariserende.** Alternativene er ikke likeverdige - ingen vil velge å \"ødelegge naturen\". Dette er en **falsk dikotomi**. Et nøytralt spørsmål: \"Hva mener du bør prioriteres høyest i energipolitikken?\" med flere nyanseerte svaralternativer.`,
        hints: ['Se etter: ledende formuleringer, manglende svaralternativer, overlappende kategorier, falske dikotomier.'],
      },
    },
    {
      id: '9-10-3-ex-5',
      type: 'exercise',
      exercise: {
        id: '9-10-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: `\"En studie viser at elever som bruker nettbrett i timen lærer 20 % mer enn de som ikke bruker nettbrett.\"

Bruk sjekklisten (hvem, hvordan, hva, hvorfor) til å vurdere denne påstanden. Skriv minst fire kritiske spørsmål.`,
        solution: `**HVEM?**
- Hvem har utført studien? Er det en uavhengig forskergruppe, eller er den finansiert av en nettbrettprodusent?
- Er studien publisert i et anerkjent tidsskrift der andre forskere har kvalitetssikret den (fagfellevurdering)?

**HVORDAN?**
- Hvor mange elever deltok? En studie med 20 elever er mye mindre pålitelig enn en med 2000.
- Var det et kontrollert eksperiment med tilfeldig inndeling, eller var det elevene selv som valgte å bruke nettbrett? (De mest motiverte elevene kan ha valgt nettbrett.)
- Hva betyr \"lærer 20 % mer\"? Hvordan ble læring målt - prøveresultat, ferdigheter, hukommelse?

**HVA vises - og hva vises IKKE?**
- Gjelder det alle fag, eller bare noen? Kanskje nettbrett hjelper i noen fag, men ikke andre.
- Hva med langtidseffekten? Kanskje nettbrettet hjelper kortsiktig, men ikke på lang sikt.
- Er det kontrollert for andre faktorer (sosioøkonomisk bakgrunn, lærerkvalitet)?

**HVORFOR?**
- Hva er formålet med å publisere dette? Vil noen selge nettbrett til skoler?`,
        hints: ['Gå gjennom sjekklisten systematisk: hvem, hvordan, hva, hvorfor.'],
      },
    },
    {
      id: '9-10-3-ex-6',
      type: 'exercise',
      exercise: {
        id: '9-10-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Du skal gjennomføre en spørreundersøkelse om skjermbruk blant elever i klassen din.

a) Skriv tre gode, nøytrale spørsmål om skjermbruk.
b) Forklar hvorfor hvert spørsmål er nøytralt.
c) Skriv en \"dårlig\" (ledende) versjon av hvert spørsmål og forklar problemet.`,
        solution: `**a) og b) Gode, nøytrale spørsmål:**

**1.** \"Omtrent hvor mange timer bruker du skjerm (mobil, PC, nettbrett) per dag utenom skolearbeid?\"
Svaralternativer: Under 1 time / 1-2 timer / 2-3 timer / 3-4 timer / Mer enn 4 timer
*Nøytralt fordi:* Ingen ladede ord, klare og ikke-overlappende kategorier, spesifiserer at det gjelder utenom skolearbeid.

**2.** \"I hvilken grad opplever du at skjermbruken din påvirker søvnen din?\"
Svaralternativer: Ikke i det hele tatt / Litt / En del / Mye / Veldig mye
*Nøytralt fordi:* Spør om opplevd påvirkning uten å antyde at svaret bør gå i én retning. \"Påvirker\" kan bety både positivt og negativt.

**3.** \"Hva bruker du mest tid på skjerm til? (Velg inntil tre)\"
Svaralternativer: Sosiale medier / Gaming / Streaming (YouTube, Netflix) / Kommunikasjon (meldinger) / Nyheter / Kreativt arbeid / Annet
*Nøytralt fordi:* Inkluderer mange typer bruk, ingen type er fremstilt som bedre eller verre.

**c) Dårlige versjoner:**

**1.** \"Hvor mange timer sløser du bort på skjerm per dag?\" - Problemet: \"Sløser bort\" er negativt ladet og antyder at all skjermbruk er bortkastet.

**2.** \"Synes du ikke at skjermen din ødelegger søvnen din?\" - Problemet: Ledende spørsmål som antyder at svaret bør være \"jo\".

**3.** \"Bruker du mest tid på meningsløse ting som TikTok, eller gjør du noe nyttig?\" - Problemet: Polariserende og verdidømmende. Kategoriserer aktiviteter som \"meningsløse\" vs. \"nyttige\".`,
        hints: [
          'Unngå ladede ord (bra, dårlig, sløse, ødelegge).',
          'Gi balanserte svaralternativer som ikke overlapper.',
          'Ikke antyd hva \"riktig\" svar er.',
        ],
      },
    },
    {
      id: '9-10-3-ex-7',
      type: 'exercise',
      exercise: {
        id: '9-10-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Data fra en ungdomsskole viser at skoleresultatene (i gjennomsnitt) har gått ned de siste tre årene. Rektor vil bruke data til å finne ut hvorfor.

a) Foreslå tre mulige forklaringer (hypoteser) som dataene kunne testes mot.
b) For hver hypotese: hvilke data ville du samlet inn for å teste den?
c) Forklar hvorfor det er viktig å teste flere hypoteser i stedet for bare å velge den \"letteste\" forklaringen.`,
        solution: `**a) Tre hypoteser:**

1. **Økt skjermbruk reduserer konsentrasjon og studietid.** Kanskje elevene bruker mer tid på sosiale medier og gaming enn før.

2. **Endringer i elevsammensetningen.** Kanskje skolen har fått flere elever med norsk som andrespråk, eller elever fra familier med lavere utdanningsnivå, som kan påvirke snittet.

3. **Lærerflukt/nye lærere.** Kanskje erfarne lærere har sluttet og blitt erstattet av nyutdannede lærere som trenger tid for å bli gode.

**b) Data for å teste hypotesene:**

1. Spørreundersøkelse om skjermbruk over tid. Sammenlign skjermbruk med resultater (kontroller for andre faktorer).

2. Demografiske data om elevsammensetning for hvert år. Sammenlign resultater per gruppe for å se om nedgangen gjelder alle grupper eller bare nye grupper.

3. Data om lærerturnover, lærernes erfaring og utdanning for hvert år. Sammenlign resultater mellom klasser med erfarne vs. nye lærere.

**c)** Det er viktig å teste flere hypoteser fordi:
- Den \"letteste\" forklaringen kan være feil (confirmation bias - vi ser det vi forventer)
- Årsakene kan være sammensatte (flere faktorer virker sammen)
- Å velge én forklaring uten å teste den kan føre til feil tiltak (f.eks. å forby mobiler hvis problemet egentlig er lærermangel)
- Vitenskapelig metode krever at vi prøver å **motbevise** hypotesen vår, ikke bare bekrefte den`,
        hints: [
          'Tenk bredt: elevene, lærerne, undervisningen, hjemmesituasjonen, samfunnsendringer.',
          'For å teste en hypotese trenger du data som kan skille den fra andre forklaringer.',
        ],
      },
    },
    {
      id: '9-10-3-ex-8',
      type: 'exercise',
      exercise: {
        id: '9-10-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Et teknologiselskap samler inn data om brukerne sine: hva de søker etter, hva de klikker på, hvor lenge de ser på ulike sider, og GPS-posisjonen deres.

a) Gi to eksempler på hvordan disse dataene kan brukes til noe **nyttig** for brukeren.
b) Gi to eksempler på hvordan de kan brukes til noe **problematisk**.
c) Hva mener du er de viktigste reglene for etisk databruk? Begrunn svaret ditt.`,
        solution: `**a) Nyttig bruk:**

1. **Personlige anbefalinger:** Basert på hva du har søkt etter og likt, kan tjenesten foreslå innhold, produkter eller steder du vil sette pris på. For eksempel: musikkforslag basert på lyttehistorikk.

2. **Trafikkoptimalisering:** GPS-data fra mange brukere kan gi sanntids trafikkoppdateringer og finne de raskeste rutene, noe som sparer tid og drivstoff for alle.

**b) Problematisk bruk:**

1. **Manipulerende reklame:** Data om dine svakheter (for eksempel at du søker mye på usunne snacks når du er stresset) kan brukes til å målrette reklame på tidspunkter der du er mest sårbar.

2. **Diskriminering:** Data kan brukes til å gi ulike priser til ulike brukere (de som virker villige til å betale mer, får høyere priser), eller til å nekte forsikring/lån basert på algoritmer som kan forsterke urettferdighet.

**c)** De viktigste reglene for etisk databruk:

1. **Samtykke og transparens:** Brukere må vite hvilke data som samles inn og hva de brukes til. De må kunne si nei.
2. **Formålsbegrensning:** Data som samles inn for ett formål bør ikke brukes til helt andre formål uten nytt samtykke.
3. **Minimering:** Bare samle inn data som er nødvendige. Ikke \"samle alt for sikkerhets skyld\".
4. **Rettferdighet:** Sjekk aktivt at algoritmene ikke diskriminerer eller forsterker ulikhet.`,
        hints: [
          'Tenk på: hva kan data gjøre for deg, og hva kan data gjøre mot deg?',
          'Tenk over personvern, samtykke og maktbalanse mellom store selskaper og enkeltpersoner.',
        ],
      },
    },
    // ========== OPPSUMMERING ==========
    {
      id: '9-10-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Framing**: Hvordan de samme tallene kan gi helt forskjellig inntrykk avhengig av hvordan de presenteres og rammes inn
- **Datamanipulering**: Å gjenkjenne selektivt utvalg, ledende spørsmål, utelating av data og prosenttriks
- **Etikk i databruk**: Å forstå viktigheten av personvern, samtykke, formålsbegrensning og rettferdighet
- **Kildekritikk**: Å bruke sjekklisten hvem, hvordan, hva og hvorfor for å vurdere statistikk kritisk

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Framing (innramming) | Å presentere informasjon på en bestemt måte for å påvirke hvordan den oppfattes |
| Ledende spørsmål | Spørsmål formulert slik at de styrer svaret i en bestemt retning |
| Selektivt utvalg | Å bare spørre folk som sannsynligvis gir det svaret du ønsker |
| Prosenttriks | Å blande absolutte tall og prosenter for å forvirre eller overdrive |
| Personvern (GDPR) | Regler som beskytter folks personlige data |
| Kildekritikk | Systematisk vurdering av hvem som står bak informasjonen og hvorfor |`,
    },
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-10-3-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '9-10-3-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-10-3-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Forstå framing - hvordan de samme tallene kan presenteres ulikt.',
            subTasks: [
              { label: 'a', task: 'En butikk har $800$ kunder. $120$ klager. Skriv dette som en positiv formulering.', solution: '«$85\\%$ av kundene våre er fornøyde!» ($\\frac{800 - 120}{800} \\cdot 100\\% = 85\\%$)' },
              { label: 'b', task: 'Skriv det samme tallet fra a) som en negativ formulering.', solution: '«Hele $15\\%$ av kundene klager!» ($\\frac{120}{800} \\cdot 100\\% = 15\\%$)' },
              { label: 'c', task: 'Arbeidsledigheten gikk fra $4\\%$ til $4{,}4\\%$. Formuler dette som «en liten endring».', solution: '«Arbeidsledigheten økte med bare $0{,}4$ prosentpoeng.»' },
              { label: 'd', task: 'Formuler det samme fra c) som «en stor endring».', solution: '«Arbeidsledigheten økte med hele $10\\%$!» ($\\frac{0{,}4}{4} \\cdot 100\\% = 10\\%$)' },
              { label: 'e', task: 'En medisin har $1$ av $10\\,000$ sjanse for bivirkninger. Formuler dette på to ulike måter — én som virker trygg og én som virker skummel.', solution: 'Trygg: «$99{,}99\\%$ av brukerne opplever ingen bivirkninger.» Skummel: «Hvert år rammes hundrevis av nordmenn av denne bivirkningen!» (med $5$ millioner innbyggere: $500$ personer).' },
              { label: 'f', task: 'Forklar med egne ord hva framing betyr og hvorfor det er viktig å gjenkjenne det.', solution: 'Framing betyr å presentere informasjon på en bestemt måte for å påvirke hvordan mottakeren oppfatter den. Det er viktig å gjenkjenne fordi de samme tallene kan gi helt forskjellig inntrykk avhengig av hvordan de rammes inn.' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Prøv å bytte mellom absolutte tall og prosenter, eller mellom prosentpoeng og relativ prosentendring.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-10-3-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-10-3-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Identifiser ledende spørsmål og selektivt utvalg.',
            subTasks: [
              { label: 'a', task: '«Er du enig i at skolen bør bruke mer penger på elevenes helse?» Forklar hvorfor dette er et ledende spørsmål.', solution: 'Spørsmålet antyder at «elevenes helse» er viktig (hvem ville si nei til det?). Et nøytralt spørsmål ville vært: «Hva bør skolen prioritere i budsjettet?»' },
              { label: 'b', task: 'Omformuler spørsmålet i a) til et nøytralt spørsmål.', solution: 'For eksempel: «Hvordan bør skolen fordele budsjettet mellom utstyr, læremidler, helse og vedlikehold?»' },
              { label: 'c', task: 'En dyrevernorganisasjon spør sine medlemmer om de støtter strengere dyrevernlover. $95\\%$ sier ja. Hva er problemet med utvalget?', solution: 'Selektivt utvalg: medlemmer av en dyrevernorganisasjon er allerede engasjerte i dyrevern og vil naturlig støtte strengere lover. Dette sier lite om den generelle befolkningens mening.' },
              { label: 'd', task: 'En nettavis legger ut en meningsmåling: «Er nordmenn for late?» Hvem vil typisk svare på en slik undersøkelse?', solution: 'Folk med sterke meninger (enten veldig enig eller veldig uenig). De som ikke bryr seg, svarer ikke. Resultatet blir derfor ikke representativt for befolkningen.' },
              { label: 'e', task: 'Forklar hva et «representativt utvalg» er.', solution: 'Et representativt utvalg gjenspeiler sammensetningen av hele befolkningen med hensyn til alder, kjønn, bosted, inntekt osv. Det gir et mer riktig bilde av hva folk mener.' },
              { label: 'f', task: 'Lag et eksempel på et ledende spørsmål og et nøytralt spørsmål om det samme temaet.', solution: 'Ledende: «Synes du ikke det er urettferdig at barn må ha så mye lekser?» Nøytralt: «Hva mener du om mengden lekser i skolen?»' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Et ledende spørsmål inneholder antagelser eller ladet språk som styrer svaret i en bestemt retning.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-10-3-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-10-3-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Vurder etikk og personvern i datainnsamling.',
            subTasks: [
              { label: 'a', task: 'Hva står GDPR for, og hva er hovedformålet?', solution: 'General Data Protection Regulation (Personvernforordningen). Hovedformålet er å beskytte enkeltpersoners persondata og gi dem kontroll over hvordan dataene brukes.' },
              { label: 'b', task: 'Gi tre eksempler på personopplysninger som er beskyttet av GDPR.', solution: 'For eksempel: navn, e-postadresse, fødselsnummer, helseopplysninger, IP-adresse, biometriske data.' },
              { label: 'c', task: 'En skoleklasse vil lage en undersøkelse om elevers søvnvaner. Hva bør de tenke på for å ivareta personvern?', solution: 'Undersøkelsen bør være anonym, frivillig, og elevene bør informeres om hva dataene brukes til. Sensitive opplysninger bør unngås.' },
              { label: 'd', task: 'En app samler inn posisjonsdata fra brukerne. Brukerne vet ikke om det. Er dette etisk? Begrunn.', solution: 'Nei, det er uetisk og i strid med GDPR. Brukerne har rett til å vite hvilke data som samles inn og gi samtykke.' },
              { label: 'e', task: 'Hva betyr «informert samtykke» i forbindelse med datainnsamling?', solution: 'At personen får tydelig informasjon om hvilke data som samles inn, hva de brukes til, og hvem som har tilgang — og deretter aktivt sier ja.' },
              { label: 'f', task: 'Gi et eksempel på en situasjon der data som er samlet inn til ett formål, kan misbrukes til et annet.', solution: 'For eksempel: en butikk samler inn e-poster for kvitteringer, men bruker dem til å sende uønsket reklame eller selger dem til tredjeparter.' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Tenk på retten til privatliv, informert samtykke og hvem som har tilgang til dataene.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-10-3-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-10-3-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Analyser hvordan de samme dataene kan støtte ulike synspunkter.',
            subTasks: [
              { label: 'a', task: 'En skole har følgende fravær (dager per elev per år): 2021: $8$, 2022: $12$, 2023: $10$, 2024: $11$, 2025: $9$. Velg ut tall som viser at fraværet synker.', solution: 'Sammenlign 2022 ($12$) med 2025 ($9$): «Fraværet har sunket med $25\\%$ de siste tre årene!»' },
              { label: 'b', task: 'Bruk de samme tallene fra a) til å vise at fraværet øker.', solution: 'Sammenlign 2021 ($8$) med 2025 ($9$): «Fraværet har økt med $12{,}5\\%$ over fem år.»' },
              { label: 'c', task: 'Hva viser tallene egentlig hvis du ser på hele perioden?', solution: 'Fraværet svinger fra år til år uten en klar trend. Det varierer mellom $8$ og $12$ dager, med et gjennomsnitt på $10$ dager.' },
              { label: 'd', task: 'En produsent sier «produktet vårt inneholder $50\\%$ mindre sukker enn konkurrenten». Produktet har $15$ g sukker per $100$ g, konkurrenten har $30$ g. Men produsenten har $40$ g fett, konkurrenten har $10$ g. Hva er problemet?', solution: 'Cherry-picking: de fremhever bare sukker og utelater fettinnholdet. Ser man på helheten, er produsenten nødvendigvis ikke «sunnere».' },
              { label: 'e', task: 'Lag to ulike overskrifter til en nyhetssak basert på dette: $48\\%$ av elevene i en kommune har valgt å ta valgfag i teknologi.', solution: 'Positiv: «Nesten halvparten av elevene velger teknologi — rekordhøy interesse!» Negativ: «Flertallet av elevene velger bort teknologi — bekymringsfullt for fremtiden.»' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Cherry-picking handler om å velge ut de tallene som passer med budskapet ditt og ignorere resten.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-10-3-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-10-3-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Gjennomfør kildekritikk på statistiske påstander.',
            subTasks: [
              { label: 'a', task: 'En blogg hevder at «forskning viser at mobilbruk ødelegger søvnen». Skriv fire spørsmål du bør stille for å vurdere påstanden.', solution: '1) Hvilken forskning? Er den publisert i et anerkjent tidsskrift? 2) Hvem finansierte studien? 3) Hvor mange deltakere var med? 4) Kan det finnes andre forklaringer (skjulte variabler)?' },
              { label: 'b', task: 'Et firma som selger «blålysbriller» publiserer en studie som viser at brillene forbedrer søvnkvaliteten. Hva bør du være kritisk til?', solution: 'Studien er finansiert av noen med økonomisk interesse i resultatet. Det er en interessekonflikt som kan påvirke hvordan studien gjennomføres og tolkes.' },
              { label: 'c', task: 'Hva er forskjellen mellom en primærkilde og en sekundærkilde i statistikk?', solution: 'Primærkilde: den opprinnelige studien eller datainnsamlingen. Sekundærkilde: en gjengivelse av studien i en avis, blogg osv. Sekundærkilder kan forenkle, overdrive eller feiltolke.' },
              { label: 'd', task: 'Forklar hvorfor det er viktig å se på utvalgsstørrelsen i en studie. Gi et eksempel.', solution: 'En studie med $10$ deltakere kan gi tilfeldige resultater. En studie med $10\\,000$ deltakere gir mer pålitelige resultater. Eksempel: å spørre $5$ venner om de liker pizza er ikke representativt.' },
              { label: 'e', task: 'En artikkel sier «$67\\%$ av lærerne mener pensum er for stort» basert på en undersøkelse med $1\\,200$ lærere. Gi to grunner til at dette kan være mer pålitelig enn de fleste statistikker i media.', solution: 'Stort utvalg ($1\\,200$) og en spesifikk, målbar problemstilling. Men vi bør fortsatt spørre om utvalget er representativt og hvem som gjennomførte undersøkelsen.' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['God kildekritikk handler om å spørre: Hvem sier dette? Hvorfor? Hva er belegget? Finnes det motstridende informasjon?'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-10-3-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-10-3-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Sammensatt oppgave: Vurder en komplett statistisk fremstilling kritisk.',
            subTasks: [
              { label: 'a', task: 'En kommune publiserer: «Elevtilfredsheten har økt med $40\\%$!» Undersøkelsen viste at tilfredshetsscoren gikk fra $5{,}0$ til $7{,}0$ på en skala fra $1$ til $10$. Stemmer påstanden rent matematisk?', solution: '$\\frac{7{,}0 - 5{,}0}{5{,}0} \\cdot 100\\% = 40\\%$. Ja, den prosentvise økningen er $40\\%$, men dette er en økning på $2$ poeng på en $10$-poengsskala, altså $20$ prosentpoeng av skalaen.' },
              { label: 'b', task: 'Undersøkelsen i a) ble sendt ut digitalt, og svarprosenten var $15\\%$. Forklar to problemer med dette.', solution: 'Lav svarprosent betyr at $85\\%$ ikke svarte — de misfornøyde har kanskje ikke giddet å svare (responsbiash). I tillegg kan digital distribusjon utelukke elever uten god nettilgang.' },
              { label: 'c', task: 'Kommunen presenterer resultatene i et søylediagram der y-aksen går fra $4{,}0$ til $8{,}0$. Beregn hvor mange ganger høyere den nye søylen ser ut sammenlignet med den gamle.', solution: 'Gamle søyle: $5{,}0 - 4{,}0 = 1{,}0$ enhet. Nye søyle: $7{,}0 - 4{,}0 = 3{,}0$ enheter. Den nye søylen ser $3$ ganger så høy ut, selv om økningen bare er $40\\%$.' },
              { label: 'd', task: 'Skriv en kort, kritisk analyse (4-5 setninger) av kommunens fremstilling. Bruk minst tre begreper fra kapittelet.', solution: 'Kommunens fremstilling bruker framing ved å velge relativ prosentøkning ($40\\%$) som høres mer imponerende ut enn den absolutte økningen ($2$ poeng). Diagrammet har en avkortet y-akse som visuelt overdramatiserer forskjellen med en faktor $3$. Med en svarprosent på bare $15\\%$ er utvalget sannsynligvis ikke representativt for alle elevene, og det er risiko for responsbiash. Samlet sett gir kommunens fremstilling et mer positivt bilde enn det dataene egentlig viser.' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Kombiner det du har lært om framing, villedende diagrammer, selektivt utvalg og prosentregning for å gi en helhetlig vurdering.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const MATEMATIKK_9_DEL10_CHAPTERS = [
  CHAPTER_9_10_1,
  CHAPTER_9_10_2,
  CHAPTER_9_10_3,
];
