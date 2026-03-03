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
