/**
 * Fysikk 1 - Kapittel 6.4: Atommodeller og kvantefysikk
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_FYS1_6_4: TextbookChapter = {
  id: 'fys1-6-4',
  courseId: 'fys1',
  chapterNumber: '6.4',
  title: 'Atommodeller og kvantefysikk',
  description: 'Lær om atommodeller, Bohrs modell, energinivåer, spektrallinjer og fotoelektrisk effekt.',
  estimatedMinutes: 65,
  competenceGoals: [
    'beskrive utviklingen av atommodeller',
    'forklare Bohrs atommodell og energinivåer',
    'beregne bølgelengder for spektrallinjer',
    'forklare fotoelektrisk effekt',
  ],
  content: [
    {
      id: 'fys1-6-4-intro',
      type: 'text',
      content: `# Atommodeller og kvantefysikk

På begynnelsen av 1900-tallet oppdaget fysikerne at klassisk fysikk ikke kunne forklare atomer. En ny teori måtte til: **kvantefysikk**.

## Historisk utvikling

**1. Daltons kulemodell (1803)**
- Atomer er udelelige kuler
- Forskjellige grunnstoff har forskjellige atomer

**2. Thomsons "plum pudding"-modell (1897)**
- J.J. Thomson oppdager elektronet
- Atom = positiv "deig" med elektroner som "rosiner"

**3. Rutherfords atommodell (1911)**
- Ernest Rutherford utfører gullfolie-eksperiment
- Skyter $\\alpha$-partikler mot gullfolie
- De fleste går rett gjennom, noen sprettes tilbake
- **Konklusjon:** Atomet er mesteparten tomt rom med en liten, tett **kjerne**

**4. Bohrs atommodell (1913)**
- Niels Bohr kombinerer klassisk og kvantemekanikk
- Elektroner i **diskrete baner** rundt kjernen
- **Kvantiserte energinivåer**`,
    },
    {
      id: 'fys1-6-4-rutherford',
      type: 'text',
      content: `# Rutherfords gullfolie-eksperiment

**Oppsett:**
- Radioaktiv kilde sender ut $\\alpha$-partikler (heliumkjerner)
- $\\alpha$-partikler skytes mot en tynn gullfolie
- Detektor registrerer hvor partiklene treffer

**Observasjoner:**
- **De fleste** $\\alpha$-partiklene går rett gjennom
- **Noen** avbøyes litt
- **Svært få** (ca. 1 av 8000) sprettes tilbake

**Rutherfords konklusjon:**

1. **Atomet er mesteparten tomt rom** (de fleste går rett gjennom)
2. **Positiv ladning er konsentrert i en liten kjerne** (noen sprettes tilbake)
3. **Kjernen er meget liten** sammenlignet med atomet

**Analogi:** Hvis atomet var så stort som en fotballstadion, ville kjernen være som et knappenålshode i midten!

**Problem med Rutherfords modell:**

Ifølge klassisk fysikk skulle elektronene i bane rundt kjernen **stråle ut energi** (som en antenne) og **spiralisere inn i kjernen** på brøkdeler av et sekund.

Men atomer er stabile! Noe var galt med klassisk fysikk.`,
    },
    {
      id: 'fys1-6-4-bohr',
      type: 'text',
      content: `# Bohrs atommodell

Den danske fysikeren **Niels Bohr** (1885-1962) løste problemet i 1913 ved å introdusere **kvantisering**.

## Bohrs postulater

**1. Elektroner beveger seg i diskrete baner**
- Kun visse baner er tillatt (kvantisert)
- Hver bane har et fast energinivå
- Elektroner i disse banene stråler **ikke** ut energi

**2. Kvantisert banemoment**

$$L = n\\frac{h}{2\\pi} = n\\hbar$$

hvor:
- $n = 1, 2, 3, \\ldots$ (heltall, kvantetall)
- $h = 6.626 \\times 10^{-34}$ J·s (Plancks konstant)
- $\\hbar = \\frac{h}{2\\pi} = 1.055 \\times 10^{-34}$ J·s

**3. Fotoner sendes ut ved overgang mellom nivåer**

Når et elektron "hopper" fra et høyere energinivå $E_i$ til et lavere $E_f$, sendes et foton ut med energi:

$$E_{\\text{foton}} = E_i - E_f = hf$$

## Energinivåer i hydrogenatomet

For hydrogen (ett elektron):

$$E_n = -\\frac{13.6 \\text{ eV}}{n^2}$$

hvor:
- $n = 1, 2, 3, \\ldots$ (hoved-kvantetall)
- $E_n$ = energi i nivå $n$
- 1 eV = $1.602 \\times 10^{-19}$ J

**Grunntilstand:** $n = 1$

$$E_1 = -13.6 \\text{ eV}$$

**Første eksiterte tilstand:** $n = 2$

$$E_2 = -\\frac{13.6}{4} = -3.4 \\text{ eV}$$

**Andre eksiterte tilstand:** $n = 3$

$$E_3 = -\\frac{13.6}{9} = -1.51 \\text{ eV}$$

**Ionisering:** $n \\to \\infty$, $E_{\\infty} = 0$

**Hvorfor negativ energi?**

Negativ energi betyr at elektronet er **bundet** til kjernen. Må tilføre energi for å fjerne det (ionisere).

## Radius av baner

Radius av $n$-te bane:

$$r_n = n^2 a_0$$

hvor $a_0 = 0.529 \\times 10^{-10}$ m = Bohrs radius (grunntilstand).

**Eksempel:**
- $r_1 = a_0 = 0.529$ Å
- $r_2 = 4a_0 = 2.12$ Å
- $r_3 = 9a_0 = 4.76$ Å`,
    },
    {
      id: 'fys1-6-4-def-bohr',
      type: 'definition',
      title: 'Bohrs atommodell',
      content: 'Elektroner i diskrete energinivåer: $E_n = -\\frac{13.6 \\text{ eV}}{n^2}$ (hydrogen). Foton sendes ut ved overgang: $E = hf = E_i - E_f$.',
    },
    {
      id: 'fys1-6-4-ex-bohr',
      type: 'example',
      title: 'Eksempel: Energinivåer i hydrogen',
      problem: 'Et hydrogenatom har et elektron i $n = 3$ nivået. a) Hva er energien til elektronet? b) Hva er ioniseringsenergien (energi for å fjerne elektronet)?',
      solution: `**Gitt:**
- $n = 3$
- $E_n = -\\frac{13.6 \\text{ eV}}{n^2}$

**a) Energi i $n = 3$:**

$$E_3 = -\\frac{13.6}{3^2} = -\\frac{13.6}{9} = -1.51 \\text{ eV}$$

**b) Ioniseringsenerg i:**

For å ionisere må elektronet gå fra $n = 3$ til $n = \\infty$ ($E_{\\infty} = 0$):

$$E_{\\text{ionisering}} = E_{\\infty} - E_3 = 0 - (-1.51) = 1.51 \\text{ eV}$$

**Svar:**
a) $E_3 = -1.51$ eV
b) Ioniseringsenergien er 1.51 eV.`,
    },
    {
      id: 'fys1-6-4-spektrum',
      type: 'text',
      content: `# Spektrallinjer

Når elektroner hopper mellom energinivåer, sendes fotoner ut. Disse fotonene har spesifikke bølgelengder, som gir **spektrallinjer**.

## Sammenheng mellom energi og bølgelengde

**Foton:**

$$E = hf = \\frac{hc}{\\lambda}$$

hvor:
- $h = 6.626 \\times 10^{-34}$ J·s (Plancks konstant)
- $c = 3.00 \\times 10^8$ m/s (lysets hastighet)
- $f$ = frekvens (Hz)
- $\\lambda$ = bølgelengde (m)

**Ved overgang mellom nivåer:**

$$E_i - E_f = hf = \\frac{hc}{\\lambda}$$

$$\\lambda = \\frac{hc}{E_i - E_f}$$

## Serier i hydrogenpektret

**Lyman-serien** ($n_f = 1$, UV)
- Overganger til $n = 1$
- Ultraviolett stråling

**Balmer-serien** ($n_f = 2$, synlig)
- Overganger til $n = 2$
- Synlig lys
- **H$\\alpha$:** $n = 3 \\to 2$ (rød, 656 nm)
- **H$\\beta$:** $n = 4 \\to 2$ (blågrønn, 486 nm)
- **H$\\gamma$:** $n = 5 \\to 2$ (blå, 434 nm)

**Paschen-serien** ($n_f = 3$, IR)
- Overganger til $n = 3$
- Infrarød stråling

**Anvendelser:**
- Identifisere grunnstoff i stjerner
- Måle temperatur og bevegelse av stjerner`,
    },
    {
      id: 'fys1-6-4-ex-spektrum',
      type: 'example',
      title: 'Eksempel: Balmer H-alfa linje',
      problem: 'Beregn bølgelengden til H$\\alpha$-linjen (overgang fra $n = 3$ til $n = 2$) i hydrogenspektret.',
      solution: `**Gitt:**
- $n_i = 3$, $n_f = 2$
- $hc = 1.99 \\times 10^{-25}$ J·m (praktisk)
- Eller: $h = 6.626 \\times 10^{-34}$ J·s, $c = 3.00 \\times 10^8$ m/s

**Energier:**

$$E_3 = -\\frac{13.6}{9} = -1.51 \\text{ eV}$$

$$E_2 = -\\frac{13.6}{4} = -3.40 \\text{ eV}$$

**Energidifferanse:**

$$\\Delta E = E_3 - E_2 = -1.51 - (-3.40) = 1.89 \\text{ eV}$$

Konverter til joule:

$$\\Delta E = 1.89 \\times 1.602 \\times 10^{-19} = 3.03 \\times 10^{-19} \\text{ J}$$

**Bølgelengde:**

$$\\lambda = \\frac{hc}{\\Delta E} = \\frac{6.626 \\times 10^{-34} \\times 3.00 \\times 10^8}{3.03 \\times 10^{-19}}$$

$$\\lambda = \\frac{1.99 \\times 10^{-25}}{3.03 \\times 10^{-19}} = 6.57 \\times 10^{-7} \\text{ m} = 657 \\text{ nm}$$

**Svar:** Bølgelengden er 657 nm (rød farge).

(Eksperimentell verdi: 656.3 nm - meget bra samsvar!)`,
    },
    {
      id: 'fys1-6-4-fotoelektrisk',
      type: 'text',
      content: `# Fotoelektrisk effekt

**Fotoelektrisk effekt:** Lys treffer en metalloverflate og frigjør elektroner.

**Oppdaget av:** Heinrich Hertz (1887)

**Forklart av:** Albert Einstein (1905) - fikk Nobelprisen i 1921 for dette!

## Klassisk vs. kvante-forklaring

**Klassisk forklaring (feil):**
- Lys er en bølge med energi
- Sterkere lys → mer energi → mer kinetisk energi til elektroner
- Alle frekvenser skulle virke (hvis intensitet er høy nok)

**Observasjoner (strider mot klassisk):**
1. **Terskelfrekvens:** Lys under en viss frekvens frigjør **ingen** elektroner, uansett intensitet
2. **Umiddelbar effekt:** Elektroner frigjøres umiddelbart, ingen forsinkelse
3. **Kinetisk energi:** Avhenger av **frekvens**, ikke intensitet

**Einsteins forklaring (kvantemekanikk):**

Lys består av **fotoner** (lyskvanter), hver med energi:

$$E = hf$$

**Prinsipp:**
1. Ett foton treffer ett elektron
2. Hvis $E = hf > W$ (arbeidsfunksjon), frigjøres elektronet
3. Overskuddsenergien blir kinetisk energi:

$$E_k = hf - W$$

hvor:
- $E_k$ = maksimal kinetisk energi til elektron
- $h$ = Plancks konstant
- $f$ = lysets frekvens
- $W$ = arbeidsfunksjon (energi for å frigjøre elektron fra metall)

**Terskelfrekvens:**

$$f_0 = \\frac{W}{h}$$

Hvis $f < f_0$: Ingen elektroner frigjøres.

**Typiske arbeidsfunksjoner:**
- Cesium: 2.1 eV (lavest)
- Natrium: 2.3 eV
- Aluminium: 4.1 eV
- Kobber: 4.7 eV
- Gull: 5.1 eV`,
    },
    {
      id: 'fys1-6-4-def-foto',
      type: 'definition',
      title: 'Fotoelektrisk effekt',
      content: 'Lys frigjør elektroner fra metall. Fotonenergi: $E = hf$. Kinetisk energi: $E_k = hf - W$, hvor $W$ = arbeidsfunksjon.',
    },
    {
      id: 'fys1-6-4-ex-foto',
      type: 'example',
      title: 'Eksempel: Fotoelektrisk effekt',
      problem: 'UV-lys med bølgelengde 250 nm treffer en natriumoverflate. Arbeidsfunksjonen til natrium er 2.3 eV. a) Hva er fotonenes energi? b) Hva er maksimal kinetisk energi til elektronene? c) Hva er terskelfrekvensen?',
      solution: `**Gitt:**
- $\\lambda = 250$ nm $= 2.50 \\times 10^{-7}$ m
- $W = 2.3$ eV $= 2.3 \\times 1.602 \\times 10^{-19} = 3.68 \\times 10^{-19}$ J
- $h = 6.626 \\times 10^{-34}$ J·s
- $c = 3.00 \\times 10^8$ m/s

**a) Fotonenerg i:**

$$E = \\frac{hc}{\\lambda} = \\frac{6.626 \\times 10^{-34} \\times 3.00 \\times 10^8}{2.50 \\times 10^{-7}}$$

$$E = 7.95 \\times 10^{-19} \\text{ J}$$

Konverter til eV:

$$E = \\frac{7.95 \\times 10^{-19}}{1.602 \\times 10^{-19}} = 4.96 \\text{ eV}$$

**b) Kinetisk energi:**

$$E_k = E - W = 4.96 - 2.3 = 2.66 \\text{ eV}$$

$$E_k = 2.66 \\times 1.602 \\times 10^{-19} = 4.26 \\times 10^{-19} \\text{ J}$$

**c) Terskelfrekvens:**

$$f_0 = \\frac{W}{h} = \\frac{3.68 \\times 10^{-19}}{6.626 \\times 10^{-34}} = 5.55 \\times 10^{14} \\text{ Hz}$$

Tilsvarende bølgelengde:

$$\\lambda_0 = \\frac{c}{f_0} = \\frac{3.00 \\times 10^8}{5.55 \\times 10^{14}} = 5.41 \\times 10^{-7} \\text{ m} = 541 \\text{ nm}$$

**Svar:**
a) $E = 4.96$ eV
b) $E_k = 2.66$ eV
c) $f_0 = 5.55 \\times 10^{14}$ Hz (541 nm, grønt lys)`,
    },
    {
      id: 'fys1-6-4-note-nobel',
      type: 'note',
      title: 'Nobelpriser for kvantefysikk',
      content: `**1918:** Max Planck - for oppdagelsen av energikvanter ($E = hf$)

**1921:** Albert Einstein - for forklaringen av fotoelektrisk effekt

**1922:** Niels Bohr - for atommodellen og kvantiserte energinivåer

**1929:** Louis de Broglie - for oppdagelsen av materiens bølgenatur

**1933:** Erwin Schrödinger og Paul Dirac - for kvantemekanikk

Kvantefysikk er en av de viktigste vitenskapelige revolusjonene i historien!`,
    },
  ],
  exercises: [
    {
      id: 'fys1-6-4-ex-1',
      number: '1',
      type: 'classic',
      difficulty: 'lett',
      task: 'Hva er energien til et elektron i $n = 2$ nivået i hydrogenatomet?',
      solution: `**Gitt:**
- $n = 2$
- $E_n = -\\frac{13.6 \\text{ eV}}{n^2}$

**Løsning:**

$$E_2 = -\\frac{13.6}{2^2} = -\\frac{13.6}{4} = -3.4 \\text{ eV}$$

**Svar:** $E_2 = -3.4$ eV.`,
      hints: ['Bruk $E_n = -\\frac{13.6}{n^2}$ eV'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-4-ex-2',
      number: '2',
      type: 'classic',
      difficulty: 'lett',
      task: 'Hva er ioniseringsenergien til hydrogen i grunntilstand ($n = 1$)?',
      solution: `**Gitt:**
- $n = 1$
- $E_1 = -13.6$ eV
- $E_{\\infty} = 0$

**Løsning:**

Ioniseringsenergien er energien for å gå fra $n = 1$ til $n = \\infty$:

$$E_{\\text{ionisering}} = E_{\\infty} - E_1 = 0 - (-13.6) = 13.6 \\text{ eV}$$

**Svar:** 13.6 eV.`,
      hints: ['Ionisering: $n = 1 \\to n = \\infty$', '$E_{\\infty} = 0$'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-4-ex-3',
      number: '3',
      type: 'classic',
      difficulty: 'lett',
      task: 'Et foton har frekvens $6.0 \\times 10^{14}$ Hz. Hva er energien til fotonet i eV?',
      solution: `**Gitt:**
- $f = 6.0 \\times 10^{14}$ Hz
- $h = 6.626 \\times 10^{-34}$ J·s
- 1 eV = $1.602 \\times 10^{-19}$ J

**Løsning:**

$$E = hf = 6.626 \\times 10^{-34} \\times 6.0 \\times 10^{14} = 3.98 \\times 10^{-19} \\text{ J}$$

Konverter til eV:

$$E = \\frac{3.98 \\times 10^{-19}}{1.602 \\times 10^{-19}} = 2.48 \\text{ eV}$$

**Svar:** 2.5 eV.`,
      hints: ['Bruk $E = hf$', 'Konverter J til eV'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-4-ex-4',
      number: '4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Et hydrogenatom har et elektron som går fra $n = 4$ til $n = 2$. a) Hva er energien til det utsendte fotonet? b) Hva er bølgelengden?',
      solution: `**Gitt:**
- $n_i = 4$, $n_f = 2$

**a) Energi:**

$$E_4 = -\\frac{13.6}{16} = -0.85 \\text{ eV}$$

$$E_2 = -\\frac{13.6}{4} = -3.40 \\text{ eV}$$

$$\\Delta E = E_4 - E_2 = -0.85 - (-3.40) = 2.55 \\text{ eV}$$

**b) Bølgelengde:**

Konverter til joule:

$$\\Delta E = 2.55 \\times 1.602 \\times 10^{-19} = 4.09 \\times 10^{-19} \\text{ J}$$

$$\\lambda = \\frac{hc}{\\Delta E} = \\frac{6.626 \\times 10^{-34} \\times 3.00 \\times 10^8}{4.09 \\times 10^{-19}}$$

$$\\lambda = 4.86 \\times 10^{-7} \\text{ m} = 486 \\text{ nm}$$

**Svar:**
a) 2.55 eV
b) 486 nm (blågrønn, H$\\beta$-linje)`,
      hints: ['Beregn $E_4$ og $E_2$', 'Bruk $\\lambda = \\frac{hc}{\\Delta E}$'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-4-ex-5',
      number: '5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Lys med bølgelengde 400 nm treffer en kaliumoverflate med arbeidsfunksjon 2.3 eV. a) Hva er fotonenes energi? b) Blir elektroner frigjort? c) Hvis ja, hva er maksimal kinetisk energi?',
      solution: `**Gitt:**
- $\\lambda = 400$ nm $= 4.00 \\times 10^{-7}$ m
- $W = 2.3$ eV

**a) Fotonenerg i:**

$$E = \\frac{hc}{\\lambda} = \\frac{6.626 \\times 10^{-34} \\times 3.00 \\times 10^8}{4.00 \\times 10^{-7}}$$

$$E = 4.97 \\times 10^{-19} \\text{ J} = \\frac{4.97 \\times 10^{-19}}{1.602 \\times 10^{-19}} = 3.10 \\text{ eV}$$

**b) Frigjøres elektroner?**

$$E = 3.10 \\text{ eV} > W = 2.3 \\text{ eV}$$

Ja, elektroner frigjøres.

**c) Kinetisk energi:**

$$E_k = E - W = 3.10 - 2.3 = 0.80 \\text{ eV}$$

**Svar:**
a) 3.10 eV
b) Ja
c) 0.80 eV`,
      hints: ['Bruk $E = \\frac{hc}{\\lambda}$', 'Sammenlign med $W$', 'Bruk $E_k = E - W$'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-4-ex-6',
      number: '6',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er radius av $n = 3$ banen i hydrogenatomet? (Bohrs radius: $a_0 = 0.529 \\times 10^{-10}$ m)',
      solution: `**Gitt:**
- $n = 3$
- $a_0 = 0.529 \\times 10^{-10}$ m

**Løsning:**

$$r_n = n^2 a_0$$

$$r_3 = 3^2 \\times 0.529 \\times 10^{-10} = 9 \\times 0.529 \\times 10^{-10}$$

$$r_3 = 4.76 \\times 10^{-10} \\text{ m} = 0.476 \\text{ nm}$$

**Svar:** 0.476 nm eller 4.76 Å.`,
      hints: ['Bruk $r_n = n^2 a_0$'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-4-ex-7',
      number: '7',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beregn bølgelengden til det utsendte fotonet når et elektron i hydrogen går fra $n = 3$ til $n = 1$ (Lyman-$\\alpha$ linje).',
      solution: `**Gitt:**
- $n_i = 3$, $n_f = 1$

**Energier:**

$$E_3 = -\\frac{13.6}{9} = -1.51 \\text{ eV}$$

$$E_1 = -13.6 \\text{ eV}$$

**Energidifferanse:**

$$\\Delta E = E_3 - E_1 = -1.51 - (-13.6) = 12.09 \\text{ eV}$$

Konverter:

$$\\Delta E = 12.09 \\times 1.602 \\times 10^{-19} = 1.94 \\times 10^{-18} \\text{ J}$$

**Bølgelengde:**

$$\\lambda = \\frac{hc}{\\Delta E} = \\frac{6.626 \\times 10^{-34} \\times 3.00 \\times 10^8}{1.94 \\times 10^{-18}}$$

$$\\lambda = 1.03 \\times 10^{-7} \\text{ m} = 103 \\text{ nm}$$

**Svar:** 103 nm (ultraviolett).`,
      hints: ['Beregn energidifferanse', 'Bruk $\\lambda = \\frac{hc}{\\Delta E}$'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-4-ex-8',
      number: '8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Arbeidsfunksjonen til kobber er 4.7 eV. Hva er den maksimale bølgelengden som kan frigjøre elektroner fra kobber?',
      solution: `**Gitt:**
- $W = 4.7$ eV $= 4.7 \\times 1.602 \\times 10^{-19} = 7.53 \\times 10^{-19}$ J

**Terskelenergi:**

$$E_{\\text{min}} = W$$

**Maksimal bølgelengde:**

$$\\lambda_{\\text{max}} = \\frac{hc}{W} = \\frac{6.626 \\times 10^{-34} \\times 3.00 \\times 10^8}{7.53 \\times 10^{-19}}$$

$$\\lambda_{\\text{max}} = 2.64 \\times 10^{-7} \\text{ m} = 264 \\text{ nm}$$

**Svar:** 264 nm (ultraviolett).

Synlig lys (400-700 nm) kan **ikke** frigjøre elektroner fra kobber.`,
      hints: ['Terskel: $E = W$', 'Bruk $\\lambda = \\frac{hc}{W}$'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-4-ex-9',
      number: '9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En UV-lampe sender ut fotoner med bølgelengde 200 nm. Hvert foton frigjør ett elektron fra en metalloverflate. Elektronenes maksimale kinetiske energi er 2.5 eV. Hva er arbeidsfunksjonen til metallet?',
      solution: `**Gitt:**
- $\\lambda = 200$ nm $= 2.00 \\times 10^{-7}$ m
- $E_k = 2.5$ eV

**Fotonenergi:**

$$E = \\frac{hc}{\\lambda} = \\frac{6.626 \\times 10^{-34} \\times 3.00 \\times 10^8}{2.00 \\times 10^{-7}}$$

$$E = 9.94 \\times 10^{-19} \\text{ J} = \\frac{9.94 \\times 10^{-19}}{1.602 \\times 10^{-19}} = 6.20 \\text{ eV}$$

**Arbeidsfunksjon:**

$$E_k = E - W$$

$$W = E - E_k = 6.20 - 2.5 = 3.7 \\text{ eV}$$

**Svar:** 3.7 eV.`,
      hints: ['Finn $E$ fra $\\lambda$', 'Bruk $W = E - E_k$'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-4-ex-10',
      number: '10',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Et hydrogenatom er i $n = 5$ tilstand. a) Hvor mange forskjellige fotoner kan sendes ut når elektronet går tilbake til grunntilstand? b) Hva er bølgelengden til fotonet med høyest energi?',
      solution: `**a) Antall fotoner:**

Fra $n = 5$ kan elektronet gå til:
- Direkte til $n = 1$ (1 overgang)
- Via $n = 4$ til $n = 1$ (2 overganger: $5 \\to 4$, $4 \\to 1$)
- Via $n = 3$ til $n = 1$ (3 overganger)
- Via $n = 2$ til $n = 1$ (4 overganger)
- Osv.

**Mulige overganger:**
$5 \\to 1$, $5 \\to 2$, $5 \\to 3$, $5 \\to 4$
$4 \\to 1$, $4 \\to 2$, $4 \\to 3$
$3 \\to 1$, $3 \\to 2$
$2 \\to 1$

Total: **10 forskjellige fotoner** (spektrallinjer).

Generell formel: $\\frac{n(n-1)}{2} = \\frac{5 \\cdot 4}{2} = 10$

**b) Høyest energi:**

Høyest energi: $5 \\to 1$

$$E_5 = -\\frac{13.6}{25} = -0.544 \\text{ eV}$$

$$E_1 = -13.6 \\text{ eV}$$

$$\\Delta E = -0.544 - (-13.6) = 13.06 \\text{ eV} = 2.09 \\times 10^{-18} \\text{ J}$$

$$\\lambda = \\frac{hc}{\\Delta E} = \\frac{6.626 \\times 10^{-34} \\times 3.00 \\times 10^8}{2.09 \\times 10^{-18}}$$

$$\\lambda = 9.51 \\times 10^{-8} \\text{ m} = 95.1 \\text{ nm}$$

**Svar:**
a) 10 forskjellige fotoner
b) 95.1 nm (UV, Lyman-serien)`,
      hints: ['Antall overganger: $\\frac{n(n-1)}{2}$', 'Høyest energi: størst $\\Delta n$'],
      allowsUpload: true,
    },
  ],
};
