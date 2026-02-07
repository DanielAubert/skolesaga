/* eslint-disable */
// @ts-nocheck
/**
 * Elektro og datateknologi VG1 - Kapittel 1: Nye delkapitler
 *
 * Dekker: 1.2, 1.4, 1.5, 1.6, 1.7, 1.8
 * (1.1, 1.3 og 1.9 har allerede innhold via aliaser)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.2: Elektrisk effekt og energi
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_1_2: TextbookChapter = {
  id: 'elektro-data-vg1-1-2',
  courseId: 'elektro-data-vg1',
  chapterNumber: '1.2',
  title: 'Elektrisk effekt og energi',
  description: 'Beregning av elektrisk effekt og energiforbruk i kretser.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beregne effekt og energi i elektriske kretser',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-1-2-intro',
      type: 'text',
      content: `## Effekt og energi i elektriske kretser

Når strøm går gjennom en komponent, omsettes elektrisk energi til andre energiformer – varme, lys, bevegelse eller lyd. Hvor mye energi som omsettes per sekund, kaller vi **effekt**. Effekt er et viktig begrep fordi det forteller oss hvor raskt energien brukes opp.

I dette kapittelet skal du lære:
- Hva elektrisk effekt er og hvordan den beregnes
- Sammenhengen mellom effekt, spenning og strøm
- Hva elektrisk energi er og hvordan vi beregner energiforbruk
- Hvordan vi leser av strømregningen`,
    },

    // BLOKK 1: Effekt
    {
      id: 'elektro-data-vg1-1-2-def-1',
      type: 'definition',
      title: 'Elektrisk effekt (P)',
      content: `**Elektrisk effekt** er mengden energi som omsettes per tidsenhet. Effekt måles i **watt (W)**.

Grunnformelen er:

**P = U × I**

Der:
- P er effekt i watt (W)
- U er spenning i volt (V)
- I er strøm i ampere (A)

Ved å kombinere med Ohms lov (U = I × R) får vi to alternative formler:
- **P = I² × R** (nyttig når vi kjenner strøm og motstand)
- **P = U² / R** (nyttig når vi kjenner spenning og motstand)

Vanlige effektstørrelser:
- LED-lampe: 5–15 W
- Glødelampe: 40–100 W
- Varmovn: 1000–2000 W
- Komfyr: 2000–7000 W`,
    },
    {
      id: 'elektro-data-vg1-1-2-example-1',
      type: 'example',
      title: 'Beregne effekt med ulike formler',
      problem: 'En motstand på 100 Ω er koblet til 12 V. Beregn effekten som avgis i motstanden.',
      solution: `**Metode 1:** Finn strømmen først med Ohms lov:
I = U / R = 12 V / 100 Ω = 0,12 A
P = U × I = 12 V × 0,12 A = **1,44 W**

**Metode 2:** Bruk formelen direkte:
P = U² / R = 12² / 100 = 144 / 100 = **1,44 W**

Begge metodene gir samme svar: motstanden avgir 1,44 watt.`,
    },
    {
      id: 'elektro-data-vg1-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'En LED-lampe trekker 0,05 A fra en 230 V stikkontakt. Hva er effekten?',
        options: [
          { id: 'a', text: '4,6 W', correct: false },
          { id: 'b', text: '11,5 W', correct: true },
          { id: 'c', text: '23 W', correct: false },
          { id: 'd', text: '46 W', correct: false },
        ],
        solution: 'P = U × I = 230 V × 0,05 A = 11,5 W.',
      },
    },
    {
      id: 'elektro-data-vg1-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'middels',
        task: 'En varmovn med motstand 26,5 Ω er koblet til 230 V. Beregn strømmen gjennom ovnen og effekten den avgir.',
        hints: ['Bruk Ohms lov for å finne strømmen først.', 'Bruk P = U × I for å finne effekten.'],
        solution: 'I = U / R = 230 / 26,5 ≈ 8,68 A. P = U × I = 230 × 8,68 ≈ 2000 W = 2 kW. Ovnen trekker ca. 8,7 A og har en effekt på ca. 2 kW.',
      },
    },

    // BLOKK 2: Energi
    {
      id: 'elektro-data-vg1-1-2-def-2',
      type: 'definition',
      title: 'Elektrisk energi (W)',
      content: `**Elektrisk energi** er total mengde energi som omsettes over tid. Den beregnes som:

**W = P × t**

Der:
- W er energi i joule (J) eller wattimer (Wh)
- P er effekt i watt (W)
- t er tid i sekunder (for joule) eller timer (for wattimer)

**Enheter:**
- 1 Wh = 3600 J
- 1 kWh (kilowattime) = 1000 Wh = 3 600 000 J

Kilowattimer (kWh) er enheten vi bruker på strømregningen. Prisen per kWh varierer, men er typisk mellom 0,50 kr og 2,00 kr i Norge.`,
    },
    {
      id: 'elektro-data-vg1-1-2-example-2',
      type: 'example',
      title: 'Beregne energiforbruk og kostnad',
      problem: 'En varmovn på 2000 W står på i 3 timer. Strømprisen er 1,20 kr/kWh. Hva koster det å bruke ovnen?',
      solution: `**Steg 1:** Beregn energiforbruket:
W = P × t = 2000 W × 3 h = 6000 Wh = 6 kWh

**Steg 2:** Beregn kostnaden:
Kostnad = 6 kWh × 1,20 kr/kWh = **7,20 kr**

Det koster 7,20 kroner å bruke varmovnen i 3 timer.`,
    },
    {
      id: 'elektro-data-vg1-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: 'En datamaskin trekker 350 W og står på 8 timer om dagen i 30 dager. Strømprisen er 1,50 kr/kWh. Beregn det månedlige energiforbruket i kWh og kostnaden.',
        solution: 'Daglig forbruk: 350 W × 8 h = 2800 Wh = 2,8 kWh. Månedlig forbruk: 2,8 × 30 = 84 kWh. Kostnad: 84 × 1,50 = 126 kr.',
      },
    },
    {
      id: 'elektro-data-vg1-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er sammenhengen mellom kWh og joule?',
        options: [
          { id: 'a', text: '1 kWh = 1000 J', correct: false },
          { id: 'b', text: '1 kWh = 3600 J', correct: false },
          { id: 'c', text: '1 kWh = 3 600 000 J', correct: true },
          { id: 'd', text: '1 kWh = 360 000 J', correct: false },
        ],
        solution: '1 kWh = 1000 W × 3600 s = 3 600 000 J. Kilowattimer er en mye større enhet enn joule.',
      },
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-1-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om elektrisk effekt og energi:

- **Effekt (P)** måles i watt og angir hvor raskt energi omsettes
- **P = U × I** er grunnformelen for effekt
- Alternative formler: P = I² × R og P = U² / R
- **Energi (W)** er effekt multiplisert med tid: W = P × t
- Energi måles i joule (J) eller kilowattimer (kWh)
- 1 kWh = 3 600 000 J
- Strømregningen baseres på antall kWh forbrukt

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Effekt | Energi per tidsenhet, målt i watt (W) |
| Energi | Total energiomsetning, målt i joule (J) eller kWh |
| Kilowattime | 1000 watt brukt i én time |`,
    },

    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En husstand har følgende elektriske apparater: Varmovn 2000 W (4 timer/dag), vaskemaskin 1800 W (1 time/dag), belysning 200 W (6 timer/dag), kjøleskap 100 W (24 timer/dag). Beregn det daglige og månedlige energiforbruket. Hva blir strømkostnaden per måned med en pris på 1,30 kr/kWh?',
        solution: 'Daglig forbruk: Varmovn: 2×4=8 kWh, Vaskemaskin: 1,8×1=1,8 kWh, Belysning: 0,2×6=1,2 kWh, Kjøleskap: 0,1×24=2,4 kWh. Totalt daglig: 13,4 kWh. Månedlig: 13,4×30=402 kWh. Kostnad: 402×1,30=522,60 kr.',
      },
    },
    {
      id: 'elektro-data-vg1-1-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar forskjellen på effekt og energi med dine egne ord. Gi et praktisk eksempel som viser hvorfor begge begreper er viktige.',
        solution: 'Effekt beskriver hvor raskt energi brukes (som hastighet), mens energi er total mengde brukt (som distanse). En hårføner på 2000 W bruker energi raskt, men hvis den bare er på i 5 min, bruker den lite energi totalt (0,167 kWh). Et kjøleskap på 100 W bruker energi sakte, men fordi det står på døgnet rundt, bruker det mye energi totalt (2,4 kWh/dag). Effekt bestemmer sikringsstørrelse, energi bestemmer strømregningen.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Effekt', definition: 'Energi per tidsenhet, målt i watt (W). P = U × I.' },
    { term: 'Energi', definition: 'Total energiomsetning over tid, målt i joule eller kilowattimer.' },
    { term: 'Watt', definition: 'Enhet for effekt. 1 W = 1 J/s.' },
    { term: 'Kilowattime', definition: 'Energienhet brukt på strømregninger. 1 kWh = 3 600 000 J.' },
    { term: 'Joule', definition: 'SI-enhet for energi.' },
  ],
};

// ============================================================================
// Kapittel 1.4: Parallellkoblinger
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_1_4: TextbookChapter = {
  id: 'elektro-data-vg1-1-4',
  courseId: 'elektro-data-vg1',
  chapterNumber: '1.4',
  title: 'Parallellkoblinger',
  description: 'Analyse av parallellkoblede kretser med motstander, strømdeling og Kirchhoffs strømlov.',
  estimatedMinutes: 60,
  competenceGoals: [
    'analysere og beregne elektriske kretser',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-1-4-intro',
      type: 'text',
      content: `## Parallellkoblinger

I en parallellkobling er komponentene koblet side ved side, slik at strømmen deler seg og går gjennom flere baner samtidig. Stikkontaktene i huset ditt er parallellkoblet – hver lampe og hvert apparat får sin egen strømbane. Hvis én lampe slukkes, fungerer de andre fremdeles.

I dette kapittelet skal du lære:
- Hvordan spenning og strøm fordeles i parallellkretser
- Å beregne ekvivalent motstand i parallellkoblinger
- Kirchhoffs strømlov (KSL)
- Strømdeling mellom parallelle grener`,
    },

    // BLOKK 1: Grunnprinsipper
    {
      id: 'elektro-data-vg1-1-4-def-1',
      type: 'definition',
      title: 'Parallellkobling',
      content: `I en **parallellkobling** er alle komponentene koblet mellom de samme to punktene. Det betyr at:
- **Spenningen er lik** over alle parallelle grener
- **Strømmen deler seg** mellom grenene
- **Totalstrømmen** er summen av alle grenstrømmene

Jo flere motstander vi kobler i parallell, jo **lavere** blir den totale motstanden – fordi strømmen får flere baner å gå gjennom.`,
    },
    {
      id: 'elektro-data-vg1-1-4-def-2',
      type: 'definition',
      title: 'Kirchhoffs strømlov (KSL)',
      content: `**Kirchhoffs strømlov** sier at summen av strømmene inn i et knutepunkt er lik summen av strømmene ut av knutepunktet:

**I_inn = I_ut**

For parallelle motstander:
**I_total = I₁ + I₂ + I₃ + ...**

Dette følger av at ladning ikke kan oppstå eller forsvinne – alle elektronene som kommer inn i et knutepunkt, må også komme ut igjen.`,
    },
    {
      id: 'elektro-data-vg1-1-4-example-1',
      type: 'example',
      title: 'Strøm i parallelle grener',
      problem: 'To motstander, R₁ = 100 Ω og R₂ = 200 Ω, er parallellkoblet til en 12 V spenningskilde. Finn strømmen gjennom hver motstand og totalstrømmen.',
      solution: `Spenningen er lik over begge motstander: U = 12 V

**Strøm gjennom R₁:**
I₁ = U / R₁ = 12 / 100 = 0,12 A = 120 mA

**Strøm gjennom R₂:**
I₂ = U / R₂ = 12 / 200 = 0,06 A = 60 mA

**Totalstrøm (Kirchhoffs strømlov):**
I_total = I₁ + I₂ = 0,12 + 0,06 = **0,18 A = 180 mA**`,
    },
    {
      id: 'elektro-data-vg1-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'middels',
        task: 'Tre motstander på 220 Ω, 330 Ω og 470 Ω er parallellkoblet til 9 V. Beregn strømmen gjennom hver motstand og totalstrømmen.',
        hints: ['Spenningen over alle motstandene er 9 V.', 'Bruk I = U/R for hver motstand.'],
        solution: 'I₁ = 9/220 = 40,9 mA, I₂ = 9/330 = 27,3 mA, I₃ = 9/470 = 19,1 mA. I_total = 40,9 + 27,3 + 19,1 = 87,3 mA.',
      },
    },

    // BLOKK 2: Ekvivalent motstand
    {
      id: 'elektro-data-vg1-1-4-def-3',
      type: 'definition',
      title: 'Ekvivalent motstand i parallellkobling',
      content: `Den ekvivalente motstanden for parallellkoblede motstander beregnes med:

**1/R_ekv = 1/R₁ + 1/R₂ + 1/R₃ + ...**

For to motstander i parallell finnes en enklere formel:

**R_ekv = (R₁ × R₂) / (R₁ + R₂)**

For n like motstander med verdi R:

**R_ekv = R / n**

Den ekvivalente motstanden i en parallellkobling er **alltid lavere** enn den minste enkeltmotstanden.`,
    },
    {
      id: 'elektro-data-vg1-1-4-example-2',
      type: 'example',
      title: 'Ekvivalent motstand',
      problem: 'Beregn ekvivalent motstand for to motstander: R₁ = 100 Ω og R₂ = 200 Ω i parallell.',
      solution: `**Produktformel (for to motstander):**
R_ekv = (R₁ × R₂) / (R₁ + R₂) = (100 × 200) / (100 + 200) = 20000 / 300 = **66,7 Ω**

**Kontroll med hovedformelen:**
1/R_ekv = 1/100 + 1/200 = 0,01 + 0,005 = 0,015
R_ekv = 1/0,015 = **66,7 Ω** ✓

Merk: 66,7 Ω er lavere enn den minste motstanden (100 Ω).`,
    },
    {
      id: 'elektro-data-vg1-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Tre like motstander på 330 Ω er parallellkoblet. Hva er den ekvivalente motstanden?',
        options: [
          { id: 'a', text: '990 Ω', correct: false },
          { id: 'b', text: '330 Ω', correct: false },
          { id: 'c', text: '165 Ω', correct: false },
          { id: 'd', text: '110 Ω', correct: true },
        ],
        solution: 'For n like motstander: R_ekv = R/n = 330/3 = 110 Ω.',
      },
    },
    {
      id: 'elektro-data-vg1-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: 'Beregn ekvivalent motstand for fire motstander i parallell: 100 Ω, 200 Ω, 300 Ω og 600 Ω.',
        solution: '1/R_ekv = 1/100 + 1/200 + 1/300 + 1/600 = 6/600 + 3/600 + 2/600 + 1/600 = 12/600. R_ekv = 600/12 = 50 Ω.',
      },
    },

    // BLOKK 3: Strømdeling
    {
      id: 'elektro-data-vg1-1-4-def-4',
      type: 'definition',
      title: 'Strømdeling',
      content: `**Strømdeling** beskriver hvordan totalstrømmen fordeler seg mellom parallelle grener. Den grenen med minst motstand får størst strøm.

For to parallelle motstander gjelder:

**I₁ = I_total × R₂ / (R₁ + R₂)**
**I₂ = I_total × R₁ / (R₁ + R₂)**

Merk at formelen er «kryssvis» – strømmen gjennom R₁ avhenger av R₂, og omvendt.`,
    },
    {
      id: 'elektro-data-vg1-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'middels',
        task: 'Totalstrømmen inn i to parallelle motstander er 0,3 A. R₁ = 100 Ω og R₂ = 200 Ω. Bruk strømdelingsformelen til å finne strømmen gjennom hver motstand.',
        solution: 'I₁ = 0,3 × 200/(100+200) = 0,3 × 200/300 = 0,2 A. I₂ = 0,3 × 100/(100+200) = 0,3 × 100/300 = 0,1 A. Kontroll: I₁ + I₂ = 0,2 + 0,1 = 0,3 A ✓',
      },
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-1-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om parallellkoblinger:

- **Spenningen er lik** over alle parallelle grener
- **Strømmen deler seg** – Kirchhoffs strømlov: I_total = I₁ + I₂ + ...
- **Ekvivalent motstand**: 1/R_ekv = 1/R₁ + 1/R₂ + ...
- Ekvivalent motstand er alltid **lavere** enn den minste enkeltmotstanden
- For to motstander: R_ekv = (R₁ × R₂) / (R₁ + R₂)
- **Strømdeling**: Mest strøm gjennom minst motstand

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Parallellkobling | Komponenter koblet mellom samme to punkter |
| Kirchhoffs strømlov | Summen av strøm inn = summen av strøm ut |
| Ekvivalent motstand | Én motstand som erstatter hele parallellkoblingen |
| Strømdeling | Fordeling av strøm mellom parallelle grener |`,
    },

    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Fire like motstander er parallellkoblet til en 12 V kilde. Totalstrømmen er 480 mA. Beregn verdien til hver motstand.',
        solution: 'R_ekv = U / I_total = 12 / 0,48 = 25 Ω. For 4 like motstander i parallell: R = R_ekv × n = 25 × 4 = 100 Ω.',
      },
    },
    {
      id: 'elektro-data-vg1-1-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'middels',
        task: 'Forklar med egne ord hvorfor parallellkobling brukes i husinstallasjoner fremfor seriekobling.',
        solution: 'I parallellkobling får alle apparater full spenning (230 V). Hvis ett apparat slås av eller går i stykker, fungerer de andre normalt. I seriekobling ville spenningen delt seg og alle apparater ville påvirke hverandre – slår du av ett, stopper alt.',
      },
    },
    {
      id: 'elektro-data-vg1-1-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-4-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du har motstander med verdiene 100 Ω og 220 Ω tilgjengelig. Hvordan kan du koble to eller flere av disse i parallell for å komme nærmest mulig 50 Ω? Beregn den eksakte verdien du oppnår.',
        solution: 'To 100 Ω i parallell: R = 100/2 = 50 Ω. Alternativt: 100 Ω og 220 Ω i parallell: R = (100×220)/(100+220) = 22000/320 = 68,75 Ω. To 100 Ω i parallell gir nøyaktig 50 Ω.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Parallellkobling', definition: 'Kobling der komponentene er koblet mellom de samme to punktene.' },
    { term: 'Kirchhoffs strømlov', definition: 'Summen av strømmene inn i et knutepunkt er lik summen ut.' },
    { term: 'Ekvivalent motstand', definition: 'Én motstand som gir samme virkning som parallellkoblingen.' },
    { term: 'Strømdeling', definition: 'Fordelingen av strøm mellom parallelle grener.' },
  ],
};

// ============================================================================
// Kapittel 1.5: Blandede kretser
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_1_5: TextbookChapter = {
  id: 'elektro-data-vg1-1-5',
  courseId: 'elektro-data-vg1',
  chapterNumber: '1.5',
  title: 'Blandede kretser',
  description: 'Analyse av kretser med kombinasjoner av serie- og parallellkoblinger.',
  estimatedMinutes: 65,
  competenceGoals: [
    'analysere sammensatte elektriske kretser',
  ],
  content: [
    {
      id: 'elektro-data-vg1-1-5-intro',
      type: 'text',
      content: `## Blandede kretser

I praksis inneholder de fleste kretser både serie- og parallellkoblinger. Slike kretser kalles **blandede kretser**. For å analysere dem må vi identifisere hvilke deler som er i serie og hvilke som er i parallell, og deretter forenkle trinn for trinn.

I dette kapittelet skal du lære:
- Å identifisere serie- og parallellkoblinger i sammensatte kretser
- Systematisk kretsforenkling
- Beregne spenninger og strømmer i blandede kretser`,
    },

    // BLOKK 1: Kretsforenkling
    {
      id: 'elektro-data-vg1-1-5-def-1',
      type: 'definition',
      title: 'Systematisk kretsforenkling',
      content: `For å analysere en blandet krets bruker vi en trinnvis metode:

**Steg 1:** Identifiser parallellkoblinger og beregn ekvivalent motstand for disse
**Steg 2:** Identifiser seriekoblinger og beregn total motstand
**Steg 3:** Gjenta steg 1-2 til kretsen er forenklet til én motstand
**Steg 4:** Beregn totalstrøm med Ohms lov
**Steg 5:** Gå «bakover» og finn spenning og strøm i hver enkelt komponent`,
    },
    {
      id: 'elektro-data-vg1-1-5-example-1',
      type: 'example',
      title: 'Analyse av blandet krets',
      problem: 'R₁ = 100 Ω er i serie med en parallellkobling av R₂ = 200 Ω og R₃ = 200 Ω. Spenningskilden er 12 V. Finn totalstrømmen og spenningen over R₁.',
      solution: `**Steg 1:** Finn ekvivalent motstand for R₂ ∥ R₃:
R_par = (200 × 200) / (200 + 200) = 40000 / 400 = 100 Ω

**Steg 2:** Total motstand (R₁ i serie med R_par):
R_total = R₁ + R_par = 100 + 100 = 200 Ω

**Steg 3:** Totalstrøm:
I_total = U / R_total = 12 / 200 = 0,06 A = 60 mA

**Steg 4:** Spenning over R₁:
U_R1 = I × R₁ = 0,06 × 100 = **6 V**

Spenning over parallellkoblingen:
U_par = 12 - 6 = **6 V** (eller U_par = I × R_par = 0,06 × 100 = 6 V)`,
    },
    {
      id: 'elektro-data-vg1-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'middels',
        task: 'R₁ = 220 Ω er i serie med en parallellkobling av R₂ = 330 Ω og R₃ = 470 Ω. Kildespenningen er 9 V. Beregn totalmotstanden og totalstrømmen.',
        hints: ['Beregn parallellmotstanden først.', 'Legg så til seriemotstanden.'],
        solution: 'R_par = (330×470)/(330+470) = 155100/800 = 193,9 Ω. R_total = 220 + 193,9 = 413,9 Ω. I = 9/413,9 = 21,7 mA.',
      },
    },
    {
      id: 'elektro-data-vg1-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'R₁ = 100 Ω er i serie med to parallellkoblede motstander R₂ = R₃ = 100 Ω. Hva er totalmotstanden?',
        options: [
          { id: 'a', text: '300 Ω', correct: false },
          { id: 'b', text: '200 Ω', correct: false },
          { id: 'c', text: '150 Ω', correct: true },
          { id: 'd', text: '50 Ω', correct: false },
        ],
        solution: 'R₂ ∥ R₃ = 100/2 = 50 Ω. R_total = 100 + 50 = 150 Ω.',
      },
    },

    // BLOKK 2: Mer komplekse kretser
    {
      id: 'elektro-data-vg1-1-5-example-2',
      type: 'example',
      title: 'Trinnvis forenkling av kompleks krets',
      problem: 'R₁ = 100 Ω i serie med (R₂ = 200 Ω i parallell med (R₃ = 150 Ω i serie med R₄ = 50 Ω)). Kildespenning: 24 V. Finn totalstrømmen.',
      solution: `**Steg 1:** R₃ og R₄ er i serie:
R₃₄ = 150 + 50 = 200 Ω

**Steg 2:** R₂ og R₃₄ er i parallell:
R_par = (200 × 200) / (200 + 200) = 100 Ω

**Steg 3:** R₁ og R_par er i serie:
R_total = 100 + 100 = 200 Ω

**Steg 4:** Totalstrøm:
I = 24 / 200 = **0,12 A = 120 mA**`,
    },
    {
      id: 'elektro-data-vg1-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'I en blandet krets er R₁ = 47 Ω og R₂ = 100 Ω i serie. Parallelt med R₂ er R₃ = 150 Ω. Kildespenningen er 12 V. Finn totalstrøm, spenning over R₁ og strømmen gjennom R₃.',
        solution: 'R₂ ∥ R₃ = (100×150)/(100+150) = 60 Ω. R_total = 47 + 60 = 107 Ω. I_total = 12/107 = 112 mA. U_R1 = 0,112 × 47 = 5,26 V. U_par = 12 - 5,26 = 6,74 V. I_R3 = 6,74/150 = 44,9 mA.',
      },
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-1-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært å analysere blandede kretser:

- Identifiser serie- og parallellkoblinger i kretsen
- Forenkle trinnvis: beregn parallellmotstander først, deretter seriemotstander
- Bruk Ohms lov til å finne totalstrøm fra total motstand
- Gå «bakover» for å finne spenninger og strømmer i enkeltkomponenter
- Kirchhoffs spenningslov og strømlov gjelder alltid

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Blandet krets | Krets med både serie- og parallellkoblinger |
| Kretsforenkling | Systematisk metode for å forenkle en krets |`,
    },

    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tegn en blandet krets med minst 4 motstander (du velger verdier selv). Vis trinnvis forenkling og beregn totalmotstanden. Velg en kildespenning og beregn strøm og spenning gjennom alle komponentene.',
        solution: 'Individuell besvarelse. Sjekk at: 1) Kretsen inneholder både serie- og parallellkoblinger, 2) Forenklingen er trinnvis og korrekt, 3) Kirchhoffs lover er tilfredsstilt (summen av spenninger = kildespenning, strømmer i knutepunkter stemmer).',
      },
    },
    {
      id: 'elektro-data-vg1-1-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar forskjellen mellom Kirchhoffs spenningslov og Kirchhoffs strømlov. Gi et eksempel på hvordan begge brukes i en blandet krets.',
        solution: 'Kirchhoffs spenningslov (KSL-V): Summen av spenningene rundt en lukket sløyfe er null. Brukes til å finne ukjente spenninger. Kirchhoffs strømlov (KSL-I): Summen av strømmer inn i et knutepunkt er lik summen ut. Brukes til å finne ukjente strømmer. I en blandet krets bruker vi KSL-V for serieforbindelser og KSL-I for parallellpunkter.',
      },
    },
    {
      id: 'elektro-data-vg1-1-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du skal designe en spenningsdeler som gir 5 V fra en 12 V kilde, med en last som trekker 10 mA ved 5 V. Tegn kretsen og beregn nødvendige motstandsverdier.',
        solution: 'Lasten har motstand R_L = 5V/10mA = 500 Ω. Bruk en belastet spenningsdeler: R₁ i serie med (R₂ ∥ R_L). For god regulering, velg strøm gjennom R₂ ca. 10× laststrøm = 100 mA. R₂ = 5V/100mA = 50 Ω. R₂ ∥ R_L = (50×500)/(50+500) = 45,5 Ω. Spenning over R₁: 12-5 = 7V. I_R1 = 110 mA. R₁ = 7/0,11 = 63,6 Ω ≈ 68 Ω (standardverdi).',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Blandet krets', definition: 'Krets med kombinasjon av serie- og parallellkoblinger.' },
    { term: 'Kretsforenkling', definition: 'Trinnvis metode for å finne total motstand i en krets.' },
  ],
};

// ============================================================================
// Kapittel 1.6: Passive komponenter
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_1_6: TextbookChapter = {
  id: 'elektro-data-vg1-1-6',
  courseId: 'elektro-data-vg1',
  chapterNumber: '1.6',
  title: 'Passive komponenter',
  description: 'Resistorer, kondensatorer og spoler - oppbygning, egenskaper og bruksområder.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare oppbygning og virkemåte til passive komponenter',
  ],
  content: [
    {
      id: 'elektro-data-vg1-1-6-intro',
      type: 'text',
      content: `## Passive komponenter

Passive komponenter er elektroniske komponenter som ikke kan forsterke signaler. De tre viktigste er **resistorer** (motstander), **kondensatorer** og **spoler** (induktorer). Disse finnes i praktisk talt alle elektroniske kretser.

I dette kapittelet skal du lære:
- Oppbygning og egenskaper til resistorer, kondensatorer og spoler
- Fargekoder for motstander
- Kapasitans og hvordan kondensatorer fungerer
- Induktans og hvordan spoler fungerer`,
    },

    // BLOKK 1: Resistorer
    {
      id: 'elektro-data-vg1-1-6-def-1',
      type: 'definition',
      title: 'Resistorer (motstander)',
      content: `**Resistorer** begrenser strømmen i en krets. De finnes i ulike utførelser:

**Faste resistorer:** Har en bestemt motstandsverdi
- Karbonfilm: Billige, vanlige i hobbyprosjekter
- Metallfilm: Mer presise, brukes i profesjonelle kretser
- SMD (Surface Mount Device): Små, for maskinmontering

**Variable resistorer:**
- Potensiometer: Justerbar motstand med tre tilkoblinger (volumkontroll)
- Trimmepotentiometer: For kalibrering, ikke ment for daglig justering

**Fargekoder:**
Verdien på en resistor angis med fargebånd. Fire-bånds resistorer:
- Bånd 1 og 2: Signifikante siffer
- Bånd 3: Multiplikator (antall nuller)
- Bånd 4: Toleranse (gull = ±5%, sølv = ±10%)

| Farge | Verdi |
|-------|-------|
| Svart | 0 |
| Brun | 1 |
| Rød | 2 |
| Oransje | 3 |
| Gul | 4 |
| Grønn | 5 |
| Blå | 6 |
| Fiolett | 7 |
| Grå | 8 |
| Hvit | 9 |`,
    },
    {
      id: 'elektro-data-vg1-1-6-example-1',
      type: 'example',
      title: 'Lese motstandsverdi fra fargekode',
      problem: 'En resistor har fargene: rød, fiolett, brun, gull. Hva er motstandsverdien?',
      solution: `Rød = 2, Fiolett = 7, Brun = ×10, Gull = ±5%

Verdi: 27 × 10 = **270 Ω ± 5%**

Motstanden er mellom 256,5 Ω og 283,5 Ω.`,
    },
    {
      id: 'elektro-data-vg1-1-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-6-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'En resistor har fargene: oransje, oransje, rød, gull. Hva er motstandsverdien?',
        options: [
          { id: 'a', text: '330 Ω', correct: false },
          { id: 'b', text: '3,3 kΩ', correct: true },
          { id: 'c', text: '33 kΩ', correct: false },
          { id: 'd', text: '33 Ω', correct: false },
        ],
        solution: 'Oransje = 3, Oransje = 3, Rød = ×100. Verdi: 33 × 100 = 3300 Ω = 3,3 kΩ.',
      },
    },

    // BLOKK 2: Kondensatorer
    {
      id: 'elektro-data-vg1-1-6-def-2',
      type: 'definition',
      title: 'Kondensatorer',
      content: `**Kondensatorer** lagrer elektrisk ladning mellom to ledende plater adskilt av et isolerende materiale (dielektrikum). Kapasitans måles i **farad (F)**.

**Vanlige typer:**
- **Keramiske:** Små verdier (pF til nF), ikke-polariserte
- **Elektrolytiske:** Store verdier (µF til mF), polariserte (+ og - pol)
- **Filmkondensatorer:** Gode egenskaper, mellomstore verdier

**Egenskaper:**
- Blokkerer likestrøm, slipper gjennom vekselstrøm
- Lagrer energi: W = ½CV²
- Lades opp/utlades med en tidskonstant τ = R × C

**Kapasitans i serie og parallell:**
- Parallell: C_total = C₁ + C₂ + ... (motsatt av motstander!)
- Serie: 1/C_total = 1/C₁ + 1/C₂ + ...`,
    },
    {
      id: 'elektro-data-vg1-1-6-example-2',
      type: 'example',
      title: 'Tidskonstant for RC-krets',
      problem: 'En kondensator på 100 µF lades gjennom en motstand på 10 kΩ. Hva er tidskonstanten?',
      solution: `τ = R × C = 10 000 Ω × 0,0001 F = **1 sekund**

Etter én tidskonstant (1 s) er kondensatoren ladet til ca. 63% av kildespenningen.
Etter 5τ (5 s) er den tilnærmet fulladet (99,3%).`,
    },
    {
      id: 'elektro-data-vg1-1-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-6-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'middels',
        task: 'En kondensator på 470 µF er i parallell med en kondensator på 220 µF. Hva er total kapasitans? Hva ville den vært om de var i serie?',
        solution: 'Parallell: C = 470 + 220 = 690 µF. Serie: 1/C = 1/470 + 1/220 = 0,00213 + 0,00455 = 0,00668. C = 1/0,00668 = 149,7 µF.',
      },
    },

    // BLOKK 3: Spoler
    {
      id: 'elektro-data-vg1-1-6-def-3',
      type: 'definition',
      title: 'Spoler (induktorer)',
      content: `**Spoler** består av en ledertråd viklet rundt en kjerne. Når strøm går gjennom spolen, skapes et magnetfelt. Induktans måles i **henry (H)**.

**Egenskaper:**
- Motsetter seg endringer i strøm
- Slipper gjennom likestrøm, blokkerer vekselstrøm (motsatt av kondensatorer)
- Lagrer energi i magnetfelt: W = ½LI²

**Induktans i serie og parallell:**
- Serie: L_total = L₁ + L₂ + ... (som motstander)
- Parallell: 1/L_total = 1/L₁ + 1/L₂ + ...

**Bruksområder:**
- Filtrering av støy
- Energilagring i strømforsyninger
- Transformatorer (to koblede spoler)`,
    },
    {
      id: 'elektro-data-vg1-1-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: 'Sammenlign kondensatorer og spoler: Hvordan oppfører de seg med likestrøm vs. vekselstrøm? Lag en tabell som viser forskjellene.',
        solution: 'Kondensator: Blokkerer DC, slipper gjennom AC. Lagrer energi i elektrisk felt. Kapasitans i farad. Spole: Slipper gjennom DC, blokkerer AC. Lagrer energi i magnetfelt. Induktans i henry. De er «omvendte» av hverandre.',
      },
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-1-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

De tre passive komponentene er grunnpilarene i elektronikk:

- **Resistorer** begrenser strøm. Verdien leses av med fargekoder.
- **Kondensatorer** lagrer ladning. Blokkerer DC, slipper AC. Kapasitans i farad.
- **Spoler** lagrer energi i magnetfelt. Slipper DC, blokkerer AC. Induktans i henry.

Disse komponentene oppfører seg ulikt med serie- og parallellkobling, og reglene er delvis omvendte av hverandre.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-1-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du skal bygge en tidsforsinkelse som lyser en LED 3 sekunder etter at strømmen slås på. Du har en motstand, en kondensator og en transistor. Forklar prinsippet og beregn passende verdier for R og C (bruk τ = RC og at transistoren slår på ved ca. 0,7 V med 5 V forsyning).',
        solution: 'Prinsipp: Kondensatoren lades gjennom motstanden. Når spenningen over kondensatoren når 0,7 V, slår transistoren på og LED lyser. Uc(t) = U(1 - e^(-t/τ)). Sett 0,7 = 5(1 - e^(-3/τ)). e^(-3/τ) = 0,86. -3/τ = ln(0,86) = -0,151. τ = 3/0,151 = 19,9 s. Velg f.eks. R = 200 kΩ og C = 100 µF: τ = 20 s.',
      },
    },
    {
      id: 'elektro-data-vg1-1-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'middels',
        task: 'Forklar hvorfor elektrolytiske kondensatorer har en pluss- og minuspol, og hva som kan skje om de kobles feil vei.',
        solution: 'Elektrolytiske kondensatorer har et tynt oksidlag som dielektrikum, som bare tåler spenning i én retning. Kobles de feil vei, bryter oksidlaget ned. Kondensatoren kan da kortslutte, bli svært varm og i verste fall eksplodere. Derfor er det viktig å alltid sjekke polariteten.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Resistor', definition: 'Komponent som begrenser strøm. Måles i ohm.' },
    { term: 'Fargekode', definition: 'System med fargebånd for å angi motstandsverdi.' },
    { term: 'Kondensator', definition: 'Lagrer elektrisk ladning. Kapasitans måles i farad.' },
    { term: 'Spole', definition: 'Lagrer energi i magnetfelt. Induktans måles i henry.' },
    { term: 'Tidskonstant', definition: 'τ = RC, beskriver ladehastigheten i en RC-krets.' },
  ],
};

// ============================================================================
// Kapittel 1.7: Halvlederkomponenter
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_1_7: TextbookChapter = {
  id: 'elektro-data-vg1-1-7',
  courseId: 'elektro-data-vg1',
  chapterNumber: '1.7',
  title: 'Halvlederkomponenter',
  description: 'Dioder, lysdioder og transistorer - oppbygning og bruk i kretser.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forklare oppbygning og virkemåte til halvlederkomponenter',
  ],
  content: [
    {
      id: 'elektro-data-vg1-1-7-intro',
      type: 'text',
      content: `## Halvlederkomponenter

Halvledere er materialer som verken er gode ledere eller isolatorer – de ligger et sted imellom. Silisium er det mest brukte halvledermaterialet. Ved å tilsette små mengder andre stoffer (doping) kan vi styre halvlederens elektriske egenskaper svært presist. Dette er grunnlaget for dioder, transistorer og alle moderne integrerte kretser.

I dette kapittelet skal du lære:
- Hva halvledere er og hvordan doping fungerer
- PN-overgangen og dioder
- Lysdioder (LED) og deres egenskaper
- Transistorer som brytere og forsterkere`,
    },

    // BLOKK 1: Halvledere og PN-overgang
    {
      id: 'elektro-data-vg1-1-7-def-1',
      type: 'definition',
      title: 'Halvledere og doping',
      content: `**Halvledere** er materialer med ledningsevne mellom ledere og isolatorer. Silisium (Si) og germanium (Ge) er de mest brukte.

**Doping** er prosessen med å tilsette fremmede atomer for å endre egenskapene:
- **N-type:** Tilsetter fosfor (P) eller arsen (As) – gir ekstra elektroner (negative ladningsbærere)
- **P-type:** Tilsetter bor (B) eller gallium (Ga) – gir «hull» (positive ladningsbærere)

Når N-type og P-type halvleder møtes, dannes en **PN-overgang** – grunnlaget for dioder.`,
    },
    {
      id: 'elektro-data-vg1-1-7-def-2',
      type: 'definition',
      title: 'Dioder og PN-overgangen',
      content: `En **diode** er en komponent med en PN-overgang som lar strøm passere i kun én retning:

- **Foroverretning:** Anode (+) er mer positiv enn katode (−). Strøm flyter. Spenningsfallet er ca. 0,7 V for silisiumdioder.
- **Sperreretning:** Anode er mer negativ enn katode. Ingen strøm (bare minimal lekkasjestrøm).

**Bruksområder:**
- Likeretting av vekselstrøm
- Beskyttelse mot feil polaritet
- Spenningsbegrensning`,
    },
    {
      id: 'elektro-data-vg1-1-7-example-1',
      type: 'example',
      title: 'Diode i en krets',
      problem: 'En silisiumdiode er i serie med en motstand på 470 Ω, koblet til 5 V. Hva er strømmen gjennom kretsen?',
      solution: `Dioden har et spenningsfall på ca. 0,7 V.

Spenning over motstanden: U_R = 5 − 0,7 = 4,3 V

Strøm: I = U_R / R = 4,3 / 470 = **9,1 mA**`,
    },
    {
      id: 'elektro-data-vg1-1-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-7-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er spenningsfallet over en vanlig silisiumdiode i foroverretning?',
        options: [
          { id: 'a', text: '0,3 V', correct: false },
          { id: 'b', text: '0,7 V', correct: true },
          { id: 'c', text: '1,5 V', correct: false },
          { id: 'd', text: '5 V', correct: false },
        ],
        solution: 'En silisiumdiode har et spenningsfall på ca. 0,7 V i foroverretning.',
      },
    },
    {
      id: 'elektro-data-vg1-1-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-7-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'middels',
        task: 'Forklar hva som skjer i en PN-overgang når dioden er i foroverretning vs. sperreretning.',
        solution: 'I foroverretning: Elektroner fra N-siden og hull fra P-siden beveger seg mot overgangen. Deplesjonslaget smalner og strøm flyter. I sperreretning: Elektroner og hull trekkes vekk fra overgangen. Deplesjonslaget utvides og det flyter ingen strøm (bortsett fra minimal lekkasjestrøm).',
      },
    },

    // BLOKK 2: LED
    {
      id: 'elektro-data-vg1-1-7-def-3',
      type: 'definition',
      title: 'Lysdioder (LED)',
      content: `**LED** (Light Emitting Diode) er en spesiell diode som avgir lys når strøm passerer i foroverretning.

**Egenskaper:**
- Spenningsfall avhenger av farge: rød ≈ 1,8 V, grønn ≈ 2,2 V, blå/hvit ≈ 3,2 V
- Typisk strøm: 10–20 mA for standard-LED
- Trenger alltid en seriemotstand for strømbegrensning
- Svært energieffektive sammenlignet med glødelamper
- Lang levetid: 50 000–100 000 timer`,
    },
    {
      id: 'elektro-data-vg1-1-7-example-2',
      type: 'example',
      title: 'Beregne seriemotstand for LED',
      problem: 'Du vil koble en rød LED (spenningsfall 1,8 V, ønsket strøm 15 mA) til en 9 V batterikilde. Beregn nødvendig seriemotstand.',
      solution: `Spenning over motstanden:
U_R = 9 − 1,8 = 7,2 V

Motstand:
R = U_R / I = 7,2 / 0,015 = **480 Ω**

Nærmeste standardverdi: **470 Ω** (gir ca. 15,3 mA – akseptabelt).`,
    },
    {
      id: 'elektro-data-vg1-1-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-7-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: 'Beregn seriemotstand for en blå LED (spenningsfall 3,2 V, strøm 20 mA) koblet til 5 V.',
        hints: ['Spenningen over motstanden = 5 V − spenningsfall over LED.'],
        solution: 'U_R = 5 − 3,2 = 1,8 V. R = 1,8 / 0,02 = 90 Ω. Nærmeste standardverdi: 100 Ω (gir 18 mA).',
      },
    },

    // BLOKK 3: Transistorer
    {
      id: 'elektro-data-vg1-1-7-def-4',
      type: 'definition',
      title: 'Transistorer',
      content: `**Transistorer** kan forsterke signaler eller fungere som elektroniske brytere. De har tre tilkoblinger:

**Bipolare transistorer (BJT):**
- **NPN:** Base (B), Kollektor (C), Emitter (E). Slår på med positiv basespenning.
- **PNP:** Slår på med negativ basespenning (sjeldnere brukt).
- En liten basestrøm styrer en mye større kollektorstrøm.
- Strømforsterkning β (beta) = I_C / I_B (typisk 100–300)

**MOSFET (felteffekttransistor):**
- Gate (G), Drain (D), Source (S)
- Styres av spenning på gaten (praktisk talt ingen strøm inn)
- Svært populær i strømbrytere og digitale kretser`,
    },
    {
      id: 'elektro-data-vg1-1-7-example-3',
      type: 'example',
      title: 'Transistor som bryter',
      problem: 'En NPN-transistor med β = 200 skal styre en LED som trekker 20 mA. Transistoren drives fra en 5 V logikkutgang via en basemotstand. Beregn nødvendig basemotstand.',
      solution: `Nødvendig basestrøm for å sikre metning:
I_B = I_C / β = 20 mA / 200 = 0,1 mA

For god metning bruker vi 2-3× dette: I_B ≈ 0,3 mA

Basemotstand:
R_B = (5 V − 0,7 V) / 0,3 mA = 4,3 / 0,0003 = **14,3 kΩ**

Velg standard: **10 kΩ** (gir 0,43 mA – god metning).`,
    },
    {
      id: 'elektro-data-vg1-1-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-7-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'middels',
        task: 'Forklar forskjellen mellom en bipolar transistor (BJT) og en MOSFET. Nevn fordeler og ulemper med begge.',
        solution: 'BJT: Styres av strøm (inn på basen). Fordel: Enkel å bruke, billig. Ulempe: Basestrømmen er energitap. MOSFET: Styres av spenning (på gaten). Fordel: Ingen gate-strøm i stabil tilstand, lav motstand når «på», rask svitsjing. Ulempe: Følsom for statisk elektrisitet. MOSFET er dominerende i moderne elektronikk pga. energieffektivitet.',
      },
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-1-7-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Halvledere** ligger mellom ledere og isolatorer, og egenskapene styres med doping
- **Dioder** lar strøm passere i kun én retning (spenningsfall ca. 0,7 V for Si)
- **LED** er dioder som lyser, med fargebestemt spenningsfall. Trenger alltid seriemotstand.
- **Transistorer** forsterker signaler eller fungerer som elektroniske brytere
- **BJT:** Strømstyrt, tre ben (B, C, E)
- **MOSFET:** Spenningsstyrt, tre ben (G, D, S), dominerer i moderne kretser`,
    },

    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-1-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-7-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Design en krets der en lysfølsom motstand (LDR) styrer en transistor som slår på en LED når det blir mørkt. Beskriv hvordan kretsen fungerer og hvilke komponenter du trenger.',
        solution: 'Spenningsdeler med LDR (topp) og fast motstand (bunn). Midtpunktet kobles til basen på en NPN-transistor. LED og seriemotstand på kollektoren. Når det er lyst: LDR har lav motstand, spenning på basen er lav, transistor av. Når det er mørkt: LDR har høy motstand, spenningen på basen stiger, transistor slår på, LED lyser. Komponenter: LDR, NPN-transistor, LED, 2 motstander, strømkilde.',
      },
    },
    {
      id: 'elektro-data-vg1-1-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-7-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar hvorfor halvlederteknologi har revolusjonert elektronikken. Hva er sammenhengen mellom transistorer og moderne datamaskiner?',
        solution: 'Halvlederteknologi gjør det mulig å lage milliarder av transistorer på en brikke på størrelse med en fingernegl. Transistorer fungerer som brytere i digitale kretser – av/på representerer 0/1. En moderne prosessor har milliarder av transistorer som utfører milliarder av beregninger per sekund. Miniatyrisering gjør komponenter billigere, raskere og mer energieffektive – dette er grunnlaget for smartphones, datamaskiner og all digital teknologi.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Halvleder', definition: 'Materiale med ledningsevne mellom leder og isolator.' },
    { term: 'Doping', definition: 'Tilsetting av fremmede atomer for å endre halvlederens egenskaper.' },
    { term: 'Diode', definition: 'Komponent med PN-overgang som lar strøm passere i én retning.' },
    { term: 'LED', definition: 'Lysemitterende diode som avgir lys i foroverretning.' },
    { term: 'Transistor', definition: 'Komponent som kan forsterke signaler eller fungere som bryter.' },
    { term: 'BJT', definition: 'Bipolar junction transistor, strømstyrt med tre ben (B, C, E).' },
    { term: 'MOSFET', definition: 'Felteffekttransistor, spenningsstyrt med tre ben (G, D, S).' },
  ],
};

// ============================================================================
// Kapittel 1.8: Elektromagnetisme og induksjon
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_1_8: TextbookChapter = {
  id: 'elektro-data-vg1-1-8',
  courseId: 'elektro-data-vg1',
  chapterNumber: '1.8',
  title: 'Elektromagnetisme og induksjon',
  description: 'Magnetfelt rundt strømførende ledere, elektromagnetisk induksjon og transformatorer.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forklare elektromagnetiske fenomener og deres anvendelser',
  ],
  content: [
    {
      id: 'elektro-data-vg1-1-8-intro',
      type: 'text',
      content: `## Elektromagnetisme og induksjon

Elektrisitet og magnetisme henger tett sammen. En strømførende leder skaper et magnetfelt rundt seg, og et magnetfelt i bevegelse kan skape strøm i en leder. Denne sammenhengen er grunnlaget for motorer, generatorer, transformatorer og trådløs lading.

I dette kapittelet skal du lære:
- Sammenhengen mellom elektrisk strøm og magnetfelt
- Elektromagneter og deres bruk
- Faradays lov om elektromagnetisk induksjon
- Transformatorens virkemåte`,
    },

    // BLOKK 1: Elektromagnetisme
    {
      id: 'elektro-data-vg1-1-8-def-1',
      type: 'definition',
      title: 'Elektromagnetisme',
      content: `Når strøm går gjennom en leder, dannes et **magnetfelt** rundt lederen. Retningen bestemmes av **høyrehåndsregelen**: Pek tommelen i strømmens retning, og fingrene krummer seg i magnetfeltets retning.

**Elektromagnet:** En spole (leder viklet i sirkler) gir et sterkere magnetfelt. Styrken avhenger av:
- Antall vindinger
- Strømstyrken
- Kjernens materiale (jernkjerne gir mye sterkere felt)

Elektromagneter brukes i:
- Releer (elektrisk styrte brytere)
- Høyttalere
- Magnetsveving (maglev-tog)
- MR-maskiner`,
    },
    {
      id: 'elektro-data-vg1-1-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-8-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva skaper magnetfeltet rundt en leder?',
        options: [
          { id: 'a', text: 'Spenningen i lederen', correct: false },
          { id: 'b', text: 'Motstanden i lederen', correct: false },
          { id: 'c', text: 'Strømmen gjennom lederen', correct: true },
          { id: 'd', text: 'Temperaturen i lederen', correct: false },
        ],
        solution: 'Det er elektrisk strøm (bevegelse av ladninger) som skaper magnetfelt rundt en leder.',
      },
    },

    // BLOKK 2: Induksjon
    {
      id: 'elektro-data-vg1-1-8-def-2',
      type: 'definition',
      title: 'Elektromagnetisk induksjon',
      content: `**Faradays lov** sier at en endring i magnetfelt gjennom en lukket sløyfe induserer en spenning (EMK). Indusert spenning avhenger av:
- Hvor raskt magnetfeltet endrer seg
- Antall vindinger i spolen
- Spolens areal

**Lenz' lov** sier at den induserte strømmen alltid motvirker endringen som skapte den.

Induksjon er grunnlaget for:
- Generatorer (bevegelse → elektrisitet)
- Transformatorer (overføring av energi mellom spoler)
- Trådløs lading
- Induksjonskomfyrer`,
    },
    {
      id: 'elektro-data-vg1-1-8-example-1',
      type: 'example',
      title: 'Induksjon i praksis',
      problem: 'Forklar hva som skjer når du beveger en magnet raskt inn og ut av en spole som er koblet til et voltmeter.',
      solution: `Når magneten beveger seg inn i spolen, endres magnetfeltet gjennom spolen. Ifølge Faradays lov induseres en spenning.

**Magnet inn i spolen:** Voltmeteret viser positivt utslag.
**Magnet stanser inne i spolen:** Ingen endring = ingen indusert spenning. Voltmeter viser null.
**Magnet ut av spolen:** Feltendringen er motsatt, spenningen snur. Voltmeteret viser negativt utslag.

Jo raskere du beveger magneten, jo høyere spenning.`,
    },
    {
      id: 'elektro-data-vg1-1-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-8-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'middels',
        task: 'Forklar Lenz\' lov med et praktisk eksempel. Hvorfor er denne loven viktig for energibevaring?',
        solution: 'Lenz\' lov: Den induserte strømmen motvirker endringen som skapte den. Eksempel: Når en magnet skyves inn i en spole, lager den induserte strømmen et magnetfelt som frastøter magneten. Du må bruke kraft for å skyve den inn. Kraften du bruker = energien som overføres til den elektriske kretsen. Uten Lenz\' lov ville vi fått gratis energi, noe som bryter med energibevaringsloven.',
      },
    },

    // BLOKK 3: Transformatorer
    {
      id: 'elektro-data-vg1-1-8-def-3',
      type: 'definition',
      title: 'Transformatorer',
      content: `En **transformator** overfører elektrisk energi mellom to spoler via et felles magnetfelt. Den fungerer bare med vekselstrøm.

**Oppbygning:**
- Primærspole (inngang): N₁ vindinger
- Sekundærspole (utgang): N₂ vindinger
- Jernkjerne som leder magnetfeltet

**Transformatorlikningen:**
**U₁/U₂ = N₁/N₂ = I₂/I₁**

- **Opptrafo:** N₂ > N₁ → spenningen øker, strømmen avtar
- **Nedtrafo:** N₂ < N₁ → spenningen synker, strømmen øker
- Effekten er (ideelt) lik på begge sider: P₁ = P₂`,
    },
    {
      id: 'elektro-data-vg1-1-8-example-2',
      type: 'example',
      title: 'Beregne transformatorforhold',
      problem: 'En transformator har 1000 vindinger på primærsiden og 50 vindinger på sekundærsiden. Primærspenningen er 230 V. Finn sekundærspenningen og strømmen på sekundærsiden hvis primærstrømmen er 0,1 A.',
      solution: `**Spenning:**
U₂ = U₁ × N₂/N₁ = 230 × 50/1000 = 230 × 0,05 = **11,5 V**

**Strøm** (energibevarelse, P₁ = P₂):
I₂ = I₁ × N₁/N₂ = 0,1 × 1000/50 = 0,1 × 20 = **2 A**

**Kontroll:** P₁ = 230 × 0,1 = 23 W. P₂ = 11,5 × 2 = 23 W ✓`,
    },
    {
      id: 'elektro-data-vg1-1-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-8-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: 'En transformator skal senke spenningen fra 230 V til 12 V. Primærspolen har 460 vindinger. Hvor mange vindinger trenger sekundærspolen?',
        solution: 'N₂ = N₁ × U₂/U₁ = 460 × 12/230 = 460 × 0,0522 = 24 vindinger.',
      },
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-1-8-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Strøm skaper **magnetfelt** rundt en leder (elektromagnetisme)
- Endring i magnetfelt skaper **spenning** (induksjon, Faradays lov)
- **Lenz' lov**: Indusert strøm motvirker endringen
- **Transformatorer** overfører energi mellom spoler via magnetfelt
- Transformatorlikningen: U₁/U₂ = N₁/N₂
- Transformatorer fungerer bare med vekselstrøm`,
    },

    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-1-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-8-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar hvorfor strøm overføres med høy spenning (300 kV) over lange avstander, og hvordan transformatorer brukes i kraftnettet fra kraftverket til stikkontakten din.',
        solution: 'Effekttap i ledninger: P_tap = I²R. Ved å øke spenningen reduseres strømmen (for samme effekt), og tapet reduseres dramatisk. Fra kraftverk (ca. 20 kV) → opptrafo til 300-420 kV for transport → nedtrafo til 66 kV → 22 kV → 230 V for husholdning. Uten transformatorer ville mesteparten av energien gå tapt som varme i ledningene.',
      },
    },
    {
      id: 'elektro-data-vg1-1-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-8-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar prinsippet bak trådløs lading av mobiltelefoner. Hvilke elektromagnetiske prinsipper er involvert?',
        solution: 'Trådløs lading bruker elektromagnetisk induksjon. En spole i ladestasjonen får vekselstrøm som skaper et vekslende magnetfelt. Denne magnetfeltet induserer en spenning i en spole i telefonen (som i en transformator, men uten jernkjerne). Den induserte spenningen likerettes og brukes til å lade batteriet. Prinsippene er: 1) Elektromagnetisme (strøm → magnetfelt), 2) Faradays induksjon (vekslende felt → spenning), 3) Energioverføring uten fysisk kontakt.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Elektromagnet', definition: 'Spole som lager magnetfelt når strøm går gjennom.' },
    { term: 'Faradays lov', definition: 'Endring i magnetfelt induserer spenning i en lukket sløyfe.' },
    { term: 'Lenz\' lov', definition: 'Indusert strøm motvirker endringen som skapte den.' },
    { term: 'Transformator', definition: 'Overfører energi mellom spoler via magnetisk kobling.' },
    { term: 'Induksjon', definition: 'Prosessen der endring i magnetfelt skaper elektrisk spenning.' },
  ],
};

// ============================================================================
// Eksportarray
// ============================================================================

export const CHAPTERS_ELEKTRO_DATA_VG1_KAP1_NY = [
  CHAPTER_ELEKTRO_DATA_VG1_1_2,
  CHAPTER_ELEKTRO_DATA_VG1_1_4,
  CHAPTER_ELEKTRO_DATA_VG1_1_5,
  CHAPTER_ELEKTRO_DATA_VG1_1_6,
  CHAPTER_ELEKTRO_DATA_VG1_1_7,
  CHAPTER_ELEKTRO_DATA_VG1_1_8,
];
