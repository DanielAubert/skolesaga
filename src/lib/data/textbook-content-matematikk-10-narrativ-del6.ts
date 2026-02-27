/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 10. klasse - Narrativ versjon Del 6
 * Kapittel 6.1-6.3: Oekonomi (Prosentregning, Vekstfaktor, Rente og laan)
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * aa lese og lytte til, med quiz-spoersmaal for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 6.1 NARRATIV: Prosentregning
// ============================================================================

export const CHAPTER_10_6_1_NARRATIV: TextbookChapter = {
  id: '10-6-1-narrativ',
  courseId: '10',
  chapterNumber: '6.1',
  title: 'Prosentregning',
  subtitle: 'Narrativ versjon',
  description: 'Fra Black Friday-tilbud til loennsslippen din -- mestr prosentregning og gjennomsku villedende rabatter.',
  estimatedMinutes: 35,
  competenceGoals: ['utforske og argumentere for korleis rekne med forhold, prosent og vekstfaktor'],
  linkedChapterId: '10-6-1',
  content: [
    {
      id: '10-6-1-n-intro',
      type: 'text',
      content: `## Prosent -- tallet som styrer lommeboken din

Du ser det overalt: "50% RABATT!", "Renta oeker med 0,5 prosentpoeng", "Inflasjonen er 5,8%". Prosent gjennomsyrer oekonomien, og den som forstaar prosentregning, tar bedre beslutninger med pengene sine.

Prosent betyr rett og slett "per hundre". 25% er det samme som $\\frac{25}{100} = 0{,}25$. Saa enkelt er det i bunn og grunn. Men naar vi begynner aa stable prosenter paa hverandre -- rabatt paa toppen av prisoekning paa toppen av moms -- da kan selv erfarne voksne gaa i fella.

De tre grunnleggende beregningene du maa mestre:

**Prosentandel:** Hvor stor del noe utgjoer: $\\text{prosentandel} = \\frac{\\text{del}}{\\text{hele}} \\cdot 100\\%$

**Prosentoekning:** $\\text{ny verdi} = \\text{gammel verdi} \\cdot \\left(1 + \\frac{p}{100}\\right)$

**Prosentreduksjon:** $\\text{ny verdi} = \\text{gammel verdi} \\cdot \\left(1 - \\frac{p}{100}\\right)$

La oss varme opp: 35% av 800 kr er $0{,}35 \\cdot 800 = 280$ kr. En vare til 1200 kr med 25% avslag: $1200 \\cdot 0{,}75 = 900$ kr. I en klasse paa 28 besto 21 en proeve: $\\frac{21}{28} \\cdot 100\\% = 75\\%$.`,
    },
    {
      id: '10-6-1-n-section1',
      type: 'text',
      content: `## Rabatt og moms -- hverdagsmatematikk

Tenk deg at du er paa jakt etter en ny jakke til 1600 kr. Butikken har 40% salg. Hva blir prisen?

$$\\text{Salgspris} = 1600 \\cdot (1 - 0{,}40) = 1600 \\cdot 0{,}60 = 960 \\text{ kr}$$

**Moms (merverdiavgift)** er en avgift som legges til prisen. I Norge er vanlig moms 25%. En haandverker som oppgir 4800 kr uten moms -- hva maa du betale?

$$\\text{Pris med moms} = 4800 \\cdot 1{,}25 = 6000 \\text{ kr}$$

Hva om du vil finne prisen UTEN moms? En TV koster 7500 kr inkludert moms:

$$\\text{Pris uten moms} = \\frac{7500}{1{,}25} = 6000 \\text{ kr}$$

Et lurt spoersmaal: En vare koster 500 kr. Foerst faar du 20% rabatt, saa legges 25% moms paa. Hva betaler du? Etter rabatt: $500 \\cdot 0{,}80 = 400$ kr. Med moms: $400 \\cdot 1{,}25 = 500$ kr. Tilbake til start! Men det er tilfeldigheter -- dette gjelder bare for akkurat denne kombinasjonen av rabatt og moms.`,
    },
    {
      id: '10-6-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-6-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa rabatt og moms:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-6-1-n-quiz1-q0',
            task: 'En mobiltelefon koster 8000 kr med 35% rabatt. Hva er salgsprisen?',
            options: [
              { id: 'a', text: '$5600$ kr', isCorrect: false },
              { id: 'b', text: '$5200$ kr', isCorrect: true },
              { id: 'c', text: '$2800$ kr', isCorrect: false },
              { id: 'd', text: '$5000$ kr', isCorrect: false },
            ],
            solution: '$8000 \\cdot (1 - 0{,}35) = 8000 \\cdot 0{,}65 = 5200$ kr.',
          },
          {
            id: '10-6-1-n-quiz1-q1',
            task: 'En printer koster 2500 kr med moms. Hva er prisen uten moms?',
            options: [
              { id: 'a', text: '$1875$ kr', isCorrect: false },
              { id: 'b', text: '$2000$ kr', isCorrect: true },
              { id: 'c', text: '$3125$ kr', isCorrect: false },
              { id: 'd', text: '$2100$ kr', isCorrect: false },
            ],
            solution: '$\\frac{2500}{1{,}25} = 2000$ kr.',
          },
          {
            id: '10-6-1-n-quiz1-q2',
            task: 'Du kjoeper en vare til 599 kr med "betal 3, faa 1 gratis" (dvs. 25% rabatt). Hva betaler du?',
            options: [
              { id: 'a', text: '$599$ kr', isCorrect: false },
              { id: 'b', text: '$400$ kr', isCorrect: false },
              { id: 'c', text: '$449{,}25$ kr', isCorrect: true },
              { id: 'd', text: '$479{,}20$ kr', isCorrect: false },
            ],
            solution: '$599 \\cdot 0{,}75 = 449{,}25$ kr.',
          },
        ],
      },
    },
    {
      id: '10-6-1-n-section2',
      type: 'text',
      content: `## Prosentpoeng vs. prosentvis endring -- ikke la deg lure

Her er en felle som selv journalister og politikere gaar i. Tenk deg at arbeidsledigheten oeker fra 6% til 9%.

**Prosentpoeng:** Forskjellen mellom prosenttallene: $9\\% - 6\\% = 3$ prosentpoeng.

**Prosentvis endring:** Hvor mye det endret seg i forhold til utgangspunktet: $\\frac{9 - 6}{6} \\cdot 100\\% = 50\\%$.

Ledigheten oekte altsaa med 3 prosentpoeng, men dette tilsvarer en oekning paa hele 50%! Det hoeres veldig forskjellig ut. Renta som gikk fra 2% til 5%: det er 3 prosentpoeng, men en prosentvis oekning paa $\\frac{3}{2} \\cdot 100\\% = 150\\%$.

Naar politikere sier "renta oekte med 3 prosentpoeng" hoeres det moderate ut. Naar de sier "renta oekte med 150%" hoeres det dramatisk ut. Begge er sant -- men de forteller ulike deler av historien.`,
    },
    {
      id: '10-6-1-n-section3',
      type: 'text',
      content: `## Finne opprinnelig verdi og sammensatte endringer

Noen ganger vet du sluttprisen og vil finne tilbake til den opprinnelige. En bukse koster 560 kr etter 30% rabatt. Hva var originalprisen?

$$x \\cdot 0{,}70 = 560 \\quad \\Rightarrow \\quad x = \\frac{560}{0{,}70} = 800 \\text{ kr}$$

Etter 5% loennsokning tjener Maria 42 000 kr. Loenn foer? $\\frac{42\\,000}{1{,}05} = 40\\,000$ kr.

Naa kommer vi til noe som overrasker mange: **en oekning paa 20% etterfulgt av en nedgang paa 20% gir IKKE tilbake til start!**

La oss si en aksje starter paa 100 kr. Opp 20%: $100 \\cdot 1{,}20 = 120$ kr. Ned 20%: $120 \\cdot 0{,}80 = 96$ kr. Du har tapt 4%!

Forklaringen er at nedgangen beregnes fra et hoyere beloep. Totalt: $1{,}20 \\cdot 0{,}80 = 0{,}96 = 96\\%$ av opprinnelig verdi.

En pris som oeker 10% to ganger: $1{,}10 \\cdot 1{,}10 = 1{,}21$, altsaa 21% total oekning (ikke 20%). To like store prosentvise oekninger gir 44% total oekning? Da er $x^2 = 1{,}44$, saa $x = 1{,}2$, altsaa 20% per gang.`,
    },
    {
      id: '10-6-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-6-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa prosentpoeng og sammensatte endringer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-6-1-n-quiz2-q0',
            task: 'Renta gikk fra 2% til 5%. Hva er endringen i prosentpoeng og prosentvis?',
            options: [
              { id: 'a', text: '3 prosentpoeng, 150% oekning', isCorrect: true },
              { id: 'b', text: '3 prosentpoeng, 60% oekning', isCorrect: false },
              { id: 'c', text: '5 prosentpoeng, 150% oekning', isCorrect: false },
              { id: 'd', text: '3%, 150%', isCorrect: false },
            ],
            solution: 'Prosentpoeng: $5 - 2 = 3$. Prosentvis: $\\frac{3}{2} \\cdot 100\\% = 150\\%$ oekning.',
          },
          {
            id: '10-6-1-n-quiz2-q1',
            task: 'En verdi synker 25% og stiger deretter 25%. Hva er nettoendringen?',
            options: [
              { id: 'a', text: 'Ingen endring', isCorrect: false },
              { id: 'b', text: '$6{,}25\\%$ nedgang', isCorrect: true },
              { id: 'c', text: '$6{,}25\\%$ oekning', isCorrect: false },
              { id: 'd', text: '$50\\%$ nedgang', isCorrect: false },
            ],
            solution: '$0{,}75 \\cdot 1{,}25 = 0{,}9375$. Netto: $6{,}25\\%$ nedgang. Opp og ned med samme prosent gir alltid tap!',
          },
          {
            id: '10-6-1-n-quiz2-q2',
            task: 'En butikk oeker prisene med 20% og har deretter "20% paa alt"-salg. Er prisene tilbake til normalt?',
            options: [
              { id: 'a', text: 'Ja, tilbake til normalt', isCorrect: false },
              { id: 'b', text: 'Nei, 4% lavere enn originalt', isCorrect: true },
              { id: 'c', text: 'Nei, 4% hoeyere', isCorrect: false },
              { id: 'd', text: 'Nei, 40% lavere', isCorrect: false },
            ],
            solution: '$1{,}20 \\cdot 0{,}80 = 0{,}96$. Prisen er 4% lavere enn originalt. Saa kunden faar faktisk en liten rabatt!',
          },
          {
            id: '10-6-1-n-quiz2-q3',
            task: 'Inflasjonen var 5,8% i 2023 og 3,2% i 2024. Hva er total prisoekning?',
            options: [
              { id: 'a', text: '9,0% oekning', isCorrect: false },
              { id: 'b', text: 'Ca. 9,2% oekning', isCorrect: true },
              { id: 'c', text: '18,6% oekning', isCorrect: false },
              { id: 'd', text: 'Ca. 9,0% oekning', isCorrect: false },
            ],
            solution: '$1{,}058 \\cdot 1{,}032 = 1{,}0919$. Totalt ca. 9,2% -- litt mer enn bare aa legge prosentene sammen.',
          },
        ],
      },
    },
    {
      id: '10-6-1-n-section4',
      type: 'text',
      content: `## Praktiske anvendelser -- slik pavirker prosent lommeboken din

La oss se paa realistiske situasjoner. Ola tjener 38 000 kr per maaned og faar 3,5% loennsokning: $38\\,000 \\cdot 1{,}035 = 39\\,330$ kr.

Marie har 450 000 kr i aarsloenn med 28% skatt. Utbetalt: $450\\,000 \\cdot 0{,}72 = 324\\,000$ kr per aar.

Et lurt spoersmaal: En aksje steg 100% paa ett aar. Hvor mye maa den synke aret etter for aa komme tilbake? Etter 100% oekning er verdien doblet. For aa halvere den maa den synke 50% -- ikke 100%!

Hvilken rabatt er best? Butikk A har 20% rabatt. Butikk B har 10% + 10% + 10% rabatt etter hverandre.
- A: $0{,}70 = 70\\%$ av prisen (30% rabatt)
- B: $0{,}90^3 = 0{,}729 = 72{,}9\\%$ av prisen (bare 27,1% rabatt)

Tre ganger 10% er altsaa IKKE det samme som 30%! Tilbud A er best.

En bilforhandler kjoeper en bil for 180 000 kr, legger paa 25% paaslag, og kunden betaler ogsaa 25% moms:
$$180\\,000 \\cdot 1{,}25 \\cdot 1{,}25 = 281\\,250 \\text{ kr}$$`,
    },
    {
      id: '10-6-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '10-6-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv paa praktisk prosentregning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-6-1-n-quiz3-q0',
            task: 'En husleie paa 12 000 kr oekes med 4% aarlig. Hva blir husleien om 2 aar?',
            options: [
              { id: 'a', text: '$12\\,960$ kr', isCorrect: false },
              { id: 'b', text: '$12\\,979{,}20$ kr', isCorrect: true },
              { id: 'c', text: '$13\\,000$ kr', isCorrect: false },
              { id: 'd', text: '$12\\,480$ kr', isCorrect: false },
            ],
            solution: '$12\\,000 \\cdot 1{,}04^2 = 12\\,000 \\cdot 1{,}0816 = 12\\,979{,}20$ kr. Rentesrente-effekten gjoer at det blir litt mer enn $12\\,000 + 2 \\cdot 480$.',
          },
          {
            id: '10-6-1-n-quiz3-q1',
            task: 'En aksje steg 100%. Hvor mye maa den synke for aa komme tilbake til start?',
            options: [
              { id: 'a', text: '$100\\%$', isCorrect: false },
              { id: 'b', text: '$50\\%$', isCorrect: true },
              { id: 'c', text: '$75\\%$', isCorrect: false },
              { id: 'd', text: '$200\\%$', isCorrect: false },
            ],
            solution: 'Etter 100% oekning er verdien doblet. For aa komme tilbake maa den halveres, altsaa synke 50%.',
          },
          {
            id: '10-6-1-n-quiz3-q2',
            task: 'Du handler for 2350 kr, faar 15% studentrabatt, og betaler deretter med et gavekort paa 500 kr. Hva maa du betale?',
            options: [
              { id: 'a', text: '$1497{,}50$ kr', isCorrect: true },
              { id: 'b', text: '$1497$ kr', isCorrect: false },
              { id: 'c', text: '$1850$ kr', isCorrect: false },
              { id: 'd', text: '$1350$ kr', isCorrect: false },
            ],
            solution: 'Etter rabatt: $2350 \\cdot 0{,}85 = 1997{,}50$ kr. Minus gavekort: $1997{,}50 - 500 = 1497{,}50$ kr.',
          },
          {
            id: '10-6-1-n-quiz3-q3',
            task: 'Etter to like prosentvise oekninger er en verdi 44% hoeyere. Hvor stor var hver oekning?',
            options: [
              { id: 'a', text: '$22\\%$', isCorrect: false },
              { id: 'b', text: '$20\\%$', isCorrect: true },
              { id: 'c', text: '$21\\%$', isCorrect: false },
              { id: 'd', text: '$44\\%$', isCorrect: false },
            ],
            solution: '$x^2 = 1{,}44 \\Rightarrow x = 1{,}2$. Hver oekning var 20%. Merk: to ganger 20% gir 44%, ikke 40%.',
          },
        ],
      },
    },
    {
      id: '10-6-1-n-summary',
      type: 'text',
      content: `## Oppsummering

- **Prosent betyr "per hundre"**: 25% = 0,25. Grunnleggende: finn prosentandel, beregn oekning/reduksjon.

- **Rabatt og moms:** Rabatt trekkes fra ($\\cdot (1 - p/100)$), moms legges til ($\\cdot 1{,}25$). For aa finne pris uten moms: del paa 1,25.

- **Prosentpoeng vs. prosentvis endring:** Prosentpoeng er differansen mellom prosenttall. Prosentvis endring beregnes fra utgangspunktet. De er IKKE det samme!

- **Finne opprinnelig verdi:** Del paa vekstfaktoren. Ny verdi / (1 + p/100) eller ny verdi / (1 - p/100).

- **Sammensatte endringer:** Gang vekstfaktorene. 20% opp og 20% ned = $1{,}20 \\cdot 0{,}80 = 0{,}96$, IKKE tilbake til start.

- **Praktisk huskeregel:** Tre ganger 10% rabatt er IKKE 30% rabatt ($0{,}90^3 = 0{,}729$, altsaa bare 27,1%).`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.2 NARRATIV: Vekstfaktor
// ============================================================================

export const CHAPTER_10_6_2_NARRATIV: TextbookChapter = {
  id: '10-6-2-narrativ',
  courseId: '10',
  chapterNumber: '6.2',
  title: 'Vekstfaktor',
  subtitle: 'Narrativ versjon',
  description: 'Forstaa kraften i eksponentiell vekst -- fra bakteriekolonier og befolkningsvekst til bilverdi og sparekonto.',
  estimatedMinutes: 35,
  competenceGoals: ['utforske og argumentere for korleis rekne med forhold, prosent og vekstfaktor'],
  linkedChapterId: '10-6-2',
  content: [
    {
      id: '10-6-2-n-intro',
      type: 'text',
      content: `## Vekstfaktor -- det magiske gangetallet

I forrige kapittel saa vi at prosentvise endringer handler om aa gange med et tall. En oekning paa 20% betyr at vi ganger med 1,20. En nedgang paa 15% betyr at vi ganger med 0,85. Dette gangetallet kalles **vekstfaktoren**, og det er noekkelen til aa forstaa eksponentiell vekst og nedgang.

**Vekstfaktor** er tallet vi ganger med for aa faa ny verdi etter en prosentvis endring:

$$\\text{vekstfaktor} = 1 + \\frac{p}{100}$$

der $p$ er prosentendringen (positiv for oekning, negativ for reduksjon).

Noen eksempler: 8% oekning gir vekstfaktor $1{,}08$. 15% reduksjon gir $0{,}85$. Dobling gir $2$. Halvering gir $0{,}5$.

Naar vekstfaktoren er stoerre enn 1, oeker verdien. Naar den er mindre enn 1, synker verdien. Og den andre veien: en vekstfaktor paa $1{,}15$ betyr 15% oekning, mens $0{,}72$ betyr 28% reduksjon (fordi $1 - 0{,}72 = 0{,}28$).`,
    },
    {
      id: '10-6-2-n-section1',
      type: 'text',
      content: `## Gjentatt prosentvis endring -- eksponentiell vekst

Det virkelig kraftige med vekstfaktor er naar den samme endringen skjer flere ganger. I stedet for aa beregne hver endring for seg, bruker vi:

$$\\text{ny verdi} = \\text{gammel verdi} \\cdot v^n$$

der $v$ er vekstfaktoren og $n$ er antall perioder.

En investering paa 50 000 kr vokser med 6% per aar. Etter 8 aar:
$$50\\,000 \\cdot 1{,}06^8 = 50\\,000 \\cdot 1{,}594 \\approx 79\\,692 \\text{ kr}$$

En bil til 400 000 kr mister 18% av verdien hvert aar. Etter 5 aar:
$$400\\,000 \\cdot 0{,}82^5 = 400\\,000 \\cdot 0{,}371 \\approx 148\\,481 \\text{ kr}$$

Bilen har altsaa mistet over halvparten av verdien paa 5 aar! En sparekonto med 20 000 kr og 4% rente gir etter 5 aar: $20\\,000 \\cdot 1{,}04^5 \\approx 24\\,333$ kr.

En bakteriekoloni dobles hver time. Med 100 bakterier i starten: etter 6 timer er det $100 \\cdot 2^6 = 6400$ bakterier. Et radioaktivt stoff halveres hvert 5. aar. Av 200 g gjenstaar etter 20 aar (4 halveringsperioder): $200 \\cdot 0{,}5^4 = 12{,}5$ g.`,
    },
    {
      id: '10-6-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-6-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa vekstfaktor og eksponentiell vekst:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-6-2-n-quiz1-q0',
            task: 'Hva er vekstfaktoren for 3,5% oekning?',
            options: [
              { id: 'a', text: '$0{,}035$', isCorrect: false },
              { id: 'b', text: '$1{,}035$', isCorrect: true },
              { id: 'c', text: '$1{,}35$', isCorrect: false },
              { id: 'd', text: '$0{,}965$', isCorrect: false },
            ],
            solution: 'Vekstfaktor $= 1 + 0{,}035 = 1{,}035$.',
          },
          {
            id: '10-6-2-n-quiz1-q1',
            task: 'En vekstfaktor paa $0{,}72$ betyr:',
            options: [
              { id: 'a', text: '72% oekning', isCorrect: false },
              { id: 'b', text: '72% reduksjon', isCorrect: false },
              { id: 'c', text: '28% reduksjon', isCorrect: true },
              { id: 'd', text: '28% oekning', isCorrect: false },
            ],
            solution: '$(1 - 0{,}72) \\cdot 100\\% = 28\\%$ reduksjon. Verdien er 72% av det opprinnelige.',
          },
          {
            id: '10-6-2-n-quiz1-q2',
            task: 'En maskin til 150 000 kr mister 25% av verdien aarlig. Hva er den verdt etter 3 aar?',
            options: [
              { id: 'a', text: 'Ca. $75\\,000$ kr', isCorrect: false },
              { id: 'b', text: 'Ca. $63\\,281$ kr', isCorrect: true },
              { id: 'c', text: 'Ca. $37\\,500$ kr', isCorrect: false },
              { id: 'd', text: 'Ca. $112\\,500$ kr', isCorrect: false },
            ],
            solution: '$150\\,000 \\cdot 0{,}75^3 = 150\\,000 \\cdot 0{,}4219 \\approx 63\\,281$ kr.',
          },
          {
            id: '10-6-2-n-quiz1-q3',
            task: 'En PC mister 30% av verdien aarlig. Etter hvor mange aar er den verdt under halvparten?',
            options: [
              { id: 'a', text: '1 aar', isCorrect: false },
              { id: 'b', text: '2 aar', isCorrect: true },
              { id: 'c', text: '3 aar', isCorrect: false },
              { id: 'd', text: '4 aar', isCorrect: false },
            ],
            solution: '$0{,}70^2 = 0{,}49 < 0{,}5$. Allerede etter 2 aar er den verdt under halvparten.',
          },
        ],
      },
    },
    {
      id: '10-6-2-n-section2',
      type: 'text',
      content: `## Doblingtid og 70-regelen

Hvor lang tid tar det aa doble en investering? Det avhenger av renta, og det finnes en elegant tommelfingerregel:

$$\\text{Doblingtid} \\approx \\frac{70}{\\text{vekstprosent}}$$

Med 7% aarlig vekst tar det ca. $\\frac{70}{7} = 10$ aar aa doble. Med 5% rente: ca. $\\frac{70}{5} = 14$ aar. La oss sjekke: $1{,}05^{14} \\approx 1{,}98$ -- nesten noeeyaktig dobbelt!

En investering som doblet seg paa 5 aar maa ha hatt ca. $\\frac{70}{5} = 14\\%$ aarlig rente.

For halveringstid gjelder det samme. Et medikament i blodet halveres hver 4. time. Av 100 mg gjenstaar etter 12 timer (3 halveringsperioder): $100 \\cdot 0{,}5^3 = 12{,}5$ mg.

Naar vi trenger noeeyaktig antall perioder, bruker vi proeving og feiling. Eksempel: Hvor mange aar tar det foer 10 000 kr blir til 15 000 kr med 8% rente?

$1{,}08^5 \\approx 1{,}47$ gir ca. 14 693 kr -- ikke nok. $1{,}08^6 \\approx 1{,}59$ gir ca. 15 869 kr -- nok! Svar: 6 aar.`,
    },
    {
      id: '10-6-2-n-section3',
      type: 'text',
      content: `## Finne aarlig vekstrate og sammenligne scenarier

Noen ganger kjenner vi start- og sluttverdien og vil finne den aarlige vekstraten. En aksje steg fra 150 kr til 240 kr paa 4 aar. Hva var den aarlige vekstraten?

$$v^4 = \\frac{240}{150} = 1{,}6 \\quad \\Rightarrow \\quad v = \\sqrt[4]{1{,}6} \\approx 1{,}125$$

Aarlig vekstrate: $12{,}5\\%$.

Vi kan ogsaa sammenligne forskjellige vekstscenarier. Hva er best over 15 aar: 80 000 kr med 6% rente, eller 100 000 kr med 4% rente?

- A: $80\\,000 \\cdot 1{,}06^{15} \\approx 191\\,736$ kr
- B: $100\\,000 \\cdot 1{,}04^{15} \\approx 180\\,094$ kr

Overraskende nok er det mindre beloppet med hoyere rente som vinner! Renta har enorm kraft over lang tid.

Praktiske anvendelser: Inflasjonen er 4% per aar -- en lunsj til 120 kr koster om 10 aar: $120 \\cdot 1{,}04^{10} \\approx 178$ kr. Norges befolkning paa 5,5 millioner med 0,8% vekst per aar gir om 25 aar: $5{,}5 \\cdot 1{,}008^{25} \\approx 6{,}7$ millioner.

Men kan eksponentiell vekst fortsette evig? Nei! Bakterier som dobles hver time gir etter 48 timer $2^{48} \\approx 281$ billioner. Ressursbegrensninger vil alltid stoppe veksten.`,
    },
    {
      id: '10-6-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-6-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa doblingtid og praktiske anvendelser:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-6-2-n-quiz2-q0',
            task: 'Med 2% aarlig befolkningsvekst, omtrent hvor lang tid tar det foer befolkningen dobles?',
            options: [
              { id: 'a', text: 'Ca. 20 aar', isCorrect: false },
              { id: 'b', text: 'Ca. 35 aar', isCorrect: true },
              { id: 'c', text: 'Ca. 50 aar', isCorrect: false },
              { id: 'd', text: 'Ca. 70 aar', isCorrect: false },
            ],
            solution: '70-regelen: $\\frac{70}{2} = 35$ aar.',
          },
          {
            id: '10-6-2-n-quiz2-q1',
            task: 'Hva er best over 15 aar: 80 000 kr med 6% rente, eller 100 000 kr med 4% rente?',
            options: [
              { id: 'a', text: '80 000 kr med 6% (ca. 191 736 kr)', isCorrect: true },
              { id: 'b', text: '100 000 kr med 4% (ca. 180 094 kr)', isCorrect: false },
              { id: 'c', text: 'Like gode', isCorrect: false },
              { id: 'd', text: 'Avhenger av inflasjonen', isCorrect: false },
            ],
            solution: 'A: $80\\,000 \\cdot 1{,}06^{15} \\approx 191\\,736$ kr. B: $100\\,000 \\cdot 1{,}04^{15} \\approx 180\\,094$ kr. Hoyere rente vinner over tid!',
          },
          {
            id: '10-6-2-n-quiz2-q2',
            task: 'Prisene stiger 3% per aar. Hva koster en vare til 500 kr om 15 aar?',
            options: [
              { id: 'a', text: 'Ca. $725$ kr', isCorrect: false },
              { id: 'b', text: 'Ca. $779$ kr', isCorrect: true },
              { id: 'c', text: 'Ca. $650$ kr', isCorrect: false },
              { id: 'd', text: 'Ca. $900$ kr', isCorrect: false },
            ],
            solution: '$500 \\cdot 1{,}03^{15} \\approx 779$ kr.',
          },
          {
            id: '10-6-2-n-quiz2-q3',
            task: 'En investering vokste fra 25 000 kr til 40 000 kr paa 10 aar. Hva er aarlig vekstrate?',
            options: [
              { id: 'a', text: 'Ca. 4,8% per aar', isCorrect: true },
              { id: 'b', text: 'Ca. 6,0% per aar', isCorrect: false },
              { id: 'c', text: 'Ca. 16% per aar', isCorrect: false },
              { id: 'd', text: 'Ca. 3,5% per aar', isCorrect: false },
            ],
            solution: '$v^{10} = \\frac{40\\,000}{25\\,000} = 1{,}6 \\Rightarrow v = 1{,}6^{0{,}1} \\approx 1{,}048$. Ca. 4,8% per aar.',
          },
        ],
      },
    },
    {
      id: '10-6-2-n-summary',
      type: 'text',
      content: `## Oppsummering

- **Vekstfaktor:** Tallet vi ganger med: $v = 1 + \\frac{p}{100}$. Stoerre enn 1 = vekst. Mindre enn 1 = nedgang.

- **Gjentatt endring:** $\\text{ny verdi} = \\text{gammel verdi} \\cdot v^n$, der $v$ er vekstfaktoren og $n$ er antall perioder.

- **70-regelen:** Doblingtid $\\approx \\frac{70}{\\text{vekstprosent}}$. Nyttig for raske overslag.

- **Finne vekstrate:** Total vekstfaktor = sluttverdi / startverdi. Aarlig faktor = ta $n$-te rot.

- **Eksponentiell vekst** er ekstremt kraftig over tid: hoeyere rente paa lavere belop kan slaa lavere rente paa hoeyere belop.

- **Vekst kan ikke vare evig:** Ressursbegrensninger stopper alltid eksponentiell vekst i praksis.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.3 NARRATIV: Rente og laan
// ============================================================================

export const CHAPTER_10_6_3_NARRATIV: TextbookChapter = {
  id: '10-6-3-narrativ',
  courseId: '10',
  chapterNumber: '6.3',
  title: 'Rente og laan',
  subtitle: 'Narrativ versjon',
  description: 'Forstaa hvordan laan og renter fungerer -- fra sparekonto og rentesrente til boliglaanets skjulte kostnader.',
  estimatedMinutes: 40,
  competenceGoals: ['utforske og argumentere for korleis rekne med forhold, prosent og vekstfaktor'],
  linkedChapterId: '10-6-3',
  content: [
    {
      id: '10-6-3-n-intro',
      type: 'text',
      content: `## Rente -- prisen paa penger

De fleste av oss vil i loepet av livet ta opp laan -- til bolig, bil eller utdanning. Og mange av oss vil forundres over hvor mye vi ender med aa betale tilbake. Aa forstaa renter og laan er en av de viktigste oekonomiske ferdighetene du kan ha.

**Rente** er prisen du betaler for aa laane penger -- eller gevinsten du faar for aa spare. Men rente er ikke bare rente. Det finnes to fundamentalt forskjellige maater aa beregne den paa:

**Enkel rente:** Renten beregnes kun paa det opprinnelige beloppet. Formelen er:
$$K_n = K_0 \\cdot (1 + r \\cdot n)$$

**Rentesrente (sammensatt rente):** Renten legges til kapitalen og gir rente paa rente. Formelen er:
$$K_n = K_0 \\cdot (1 + r)^n$$

Her er $K_0$ startkapitalen, $r$ renten per periode (som desimaltall), og $n$ antall perioder.`,
    },
    {
      id: '10-6-3-n-section1',
      type: 'text',
      content: `## Rentesrente -- Einsteins aattende underverk

Det sies at Einstein kalte rentesrente for "verdens aattende underverk". La oss se hvorfor.

Du setter inn 10 000 kr paa en sparekonto med 5% aarlig rente. Etter 10 aar:

Med **enkel rente** (renten utbetales og reinvesteres ikke):
$$K_{10} = 10\\,000 \\cdot (1 + 0{,}05 \\cdot 10) = 10\\,000 \\cdot 1{,}5 = 15\\,000 \\text{ kr}$$

Med **rentesrente** (renten legges til kontoen):
$$K_{10} = 10\\,000 \\cdot 1{,}05^{10} = 10\\,000 \\cdot 1{,}629 \\approx 16\\,289 \\text{ kr}$$

Forskjellen er 1 289 kr -- renten paa renten. Over lengre tid blir forskjellen dramatisk!

La oss oeve: 5000 kr med 4% rente i 3 aar gir $5000 \\cdot 1{,}04^3 = 5624{,}32$ kr. En investering paa 20 000 kr med 7% i 5 aar gir $20\\,000 \\cdot 1{,}07^5 \\approx 28\\,051$ kr.

Men rentesrente virker ogsaa mot deg naar du laaner. Et laan paa 8000 kr til 6% rente i 2 aar vokser til $8000 \\cdot 1{,}06^2 = 8988{,}80$ kr.`,
    },
    {
      id: '10-6-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-6-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa rentesrente:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-6-3-n-quiz1-q0',
            task: 'Du setter inn 5000 kr med 4% aarlig rente. Hva har du etter 3 aar?',
            options: [
              { id: 'a', text: '$5600$ kr', isCorrect: false },
              { id: 'b', text: '$5624{,}32$ kr', isCorrect: true },
              { id: 'c', text: '$5800$ kr', isCorrect: false },
              { id: 'd', text: '$6000$ kr', isCorrect: false },
            ],
            solution: '$5000 \\cdot 1{,}04^3 = 5000 \\cdot 1{,}124864 = 5624{,}32$ kr. Litt mer enn $5000 + 3 \\cdot 200$ fordi du faar rente paa renten.',
          },
          {
            id: '10-6-3-n-quiz1-q1',
            task: 'Beregn 15 000 kr med 6% enkel rente i 5 aar.',
            options: [
              { id: 'a', text: '$19\\,500$ kr', isCorrect: true },
              { id: 'b', text: '$20\\,073$ kr', isCorrect: false },
              { id: 'c', text: '$18\\,000$ kr', isCorrect: false },
              { id: 'd', text: '$21\\,000$ kr', isCorrect: false },
            ],
            solution: 'Enkel rente: $15\\,000 \\cdot (1 + 0{,}06 \\cdot 5) = 15\\,000 \\cdot 1{,}30 = 19\\,500$ kr.',
          },
          {
            id: '10-6-3-n-quiz1-q2',
            task: 'Samme 15 000 kr med 6% rentesrente i 5 aar. Hvor mye mer gir rentesrente?',
            options: [
              { id: 'a', text: 'Ca. $573$ kr mer', isCorrect: true },
              { id: 'b', text: 'Ca. $200$ kr mer', isCorrect: false },
              { id: 'c', text: 'Ca. $1000$ kr mer', isCorrect: false },
              { id: 'd', text: 'Likt belop', isCorrect: false },
            ],
            solution: 'Rentesrente: $15\\,000 \\cdot 1{,}06^5 \\approx 20\\,073$ kr. Forskjell: $20\\,073 - 19\\,500 = 573$ kr.',
          },
        ],
      },
    },
    {
      id: '10-6-3-n-section2',
      type: 'text',
      content: `## Nominell og effektiv rente -- les det som staar med smaat

Banker reklamerer gjerne med en "nominell rente", men det du faktisk betaler er den **effektive renten**. Forskjellen? Effektiv rente tar hensyn til hvor ofte renten beregnes og eventuelle gebyrer.

Hvis nominell rente er $r_{nom}$ og renten beregnes $m$ ganger per aar:
$$r_{eff} = \\left(1 + \\frac{r_{nom}}{m}\\right)^m - 1$$

En bank tilbyr 6% nominell rente med kvartalsvis renteberegning:
$$r_{eff} = \\left(1 + \\frac{0{,}06}{4}\\right)^4 - 1 = 1{,}015^4 - 1 = 0{,}0614 = 6{,}14\\%$$

Effektiv rente er hoeyere fordi du faar rente paa renten gjennom aaret!

12% nominell rente med maanedlig renteberegning gir:
$$r_{eff} = 1{,}01^{12} - 1 \\approx 12{,}68\\%$$

Et viktig spoersmaal: Hva gir hoeyest effektiv rente -- 10% med aarlig renteberegning, eller 9,8% med maanedlig? Aarlig: 10%. Maanedlig: $1{,}00817^{12} - 1 \\approx 10{,}25\\%$. Den maanedlige vinner!`,
    },
    {
      id: '10-6-3-n-section3',
      type: 'text',
      content: `## Serielaan og annuitetslaan -- to maater aa betale tilbake

Naar du tar opp laan, maa du bestemme hvordan du vil betale tilbake. Det finnes to hovedtyper:

**Serielaan:** Avdraget er likt hver termin, men terminbeloppet synker over tid fordi rentedelen blir mindre.

**Annuitetslaan:** Terminbeloppet er likt hver termin. I starten er det mest renter, mot slutten mest avdrag.

La oss se paa et serielaan: 100 000 kr, 6% rente, 4 aar. Aarlig avdrag: $\\frac{100\\,000}{4} = 25\\,000$ kr.

- Aar 1: Rente $100\\,000 \\cdot 0{,}06 = 6000$ kr. Terminbelop: $31\\,000$ kr. Restgjeld: 75 000 kr.
- Aar 2: Rente $75\\,000 \\cdot 0{,}06 = 4500$ kr. Terminbelop: $29\\,500$ kr. Restgjeld: 50 000 kr.
- Aar 3: Rente 3000 kr. Terminbelop: $28\\,000$ kr. Restgjeld: 25 000 kr.
- Aar 4: Rente 1500 kr. Terminbelop: $26\\,500$ kr. Restgjeld: 0 kr.

Totale renter: $6000 + 4500 + 3000 + 1500 = 15\\,000$ kr.

For annuitetslaan bruker vi formelen: $T = L \\cdot \\frac{r(1+r)^n}{(1+r)^n - 1}$ (gitt paa eksamen). Samme laan gir terminbelop paa ca. 28 859 kr og totale renter paa 15 436 kr. Serielaanet har lavere totale renter fordi gjelden betales ned raskere.`,
    },
    {
      id: '10-6-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-6-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa laan og nedbetaling:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-6-3-n-quiz2-q0',
            task: 'Serielaan: 80 000 kr, 5% rente, 4 aar. Hva er terminbeloppet foerste aar?',
            options: [
              { id: 'a', text: '$20\\,000$ kr', isCorrect: false },
              { id: 'b', text: '$24\\,000$ kr', isCorrect: true },
              { id: 'c', text: '$22\\,000$ kr', isCorrect: false },
              { id: 'd', text: '$25\\,000$ kr', isCorrect: false },
            ],
            solution: 'Avdrag: $\\frac{80\\,000}{4} = 20\\,000$ kr. Rente: $80\\,000 \\cdot 0{,}05 = 4000$ kr. Terminbelop: $20\\,000 + 4000 = 24\\,000$ kr.',
          },
          {
            id: '10-6-3-n-quiz2-q1',
            task: 'Samme laan: Hva er totale rentekostnader over 4 aar?',
            options: [
              { id: 'a', text: '$10\\,000$ kr', isCorrect: true },
              { id: 'b', text: '$16\\,000$ kr', isCorrect: false },
              { id: 'c', text: '$8\\,000$ kr', isCorrect: false },
              { id: 'd', text: '$12\\,000$ kr', isCorrect: false },
            ],
            solution: 'Renter per aar: 4000 + 3000 + 2000 + 1000 = $10\\,000$ kr.',
          },
          {
            id: '10-6-3-n-quiz2-q2',
            task: 'Hva gir hoeyest effektiv rente: 10% aarlig renteberegning eller 9,8% maanedlig?',
            options: [
              { id: 'a', text: '10% aarlig', isCorrect: false },
              { id: 'b', text: '9,8% maanedlig (10,25% effektiv)', isCorrect: true },
              { id: 'c', text: 'Like gode', isCorrect: false },
              { id: 'd', text: 'Avhenger av beloppet', isCorrect: false },
            ],
            solution: 'Maanedlig: $(1 + \\frac{0{,}098}{12})^{12} - 1 \\approx 10{,}25\\%$. Hoeyere enn 10% aarlig!',
          },
          {
            id: '10-6-3-n-quiz2-q3',
            task: 'Hvorfor har serielaan lavere totale renter enn annuitetslaan?',
            options: [
              { id: 'a', text: 'Lavere rente', isCorrect: false },
              { id: 'b', text: 'Stoerre avdrag tidlig gir raskere nedbetaling av gjeld', isCorrect: true },
              { id: 'c', text: 'Laengre nedbetalingstid', isCorrect: false },
              { id: 'd', text: 'Farre terminer', isCorrect: false },
            ],
            solution: 'Ved serielaan betaler du like mye i avdrag fra start, saa restgjelden (og dermed rentene) synker raskere.',
          },
        ],
      },
    },
    {
      id: '10-6-3-n-section4',
      type: 'text',
      content: `## Boliglaan og praktiske tips

La oss se paa et realistisk boliglaan. Du laaner 2 000 000 kr med 4% nominell rente og maanedlige terminer over 25 aar.

Maanedlig rente: $r = \\frac{0{,}04}{12} = 0{,}00333$. Antall terminer: $25 \\cdot 12 = 300$.

Maanedlig terminbelop (annuitet): ca. $10\\,559$ kr.

**Totalt betalt:** $300 \\cdot 10\\,559 = 3\\,167\\,700$ kr.
**Totale renter:** $3\\,167\\,700 - 2\\,000\\,000 = 1\\,167\\,700$ kr.

Du betaler altsaa nesten 1,2 millioner i bare renter! Hva om du oeker nedbetalingstiden fra 25 til 30 aar? Terminbeloppet synker, men totale renter oeker enormt. Omvendt: et laan paa 3 millioner over 20 aar i stedet for 30 aar sparer deg ca. 1 million i renter, selv om maanedsbeloppet oeker.

**Praktiske tips:**
- **Ekstra innbetaling** paa laanet reduserer restgjelden og sparer fremtidige renter. 50 000 kr ekstra paa et 5%-laan sparer 2500 kr i renter per aar.
- **Forbrukslaan** har mye hoeyere rente (10-20%) enn boliglaan (3-6%). Unngaa forbrukslaan!
- **0% rente** fra bilforhandlere er sjelden gratis -- kostnaden er bakt inn i prisen.
- Betale ned kredittkortgjeld (20% rente) er bedre "investering" enn aa investere til 7% avkastning.`,
    },
    {
      id: '10-6-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '10-6-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv paa boliglaan og praktisk oekonomi:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-6-3-n-quiz3-q0',
            task: 'Et boliglaan paa 3 mill med 5% rente over 30 aar koster ca. 16 104 kr/mnd. Hva er totale rentekostnader?',
            options: [
              { id: 'a', text: 'Ca. 1,5 mill kr', isCorrect: false },
              { id: 'b', text: 'Ca. 2,8 mill kr', isCorrect: true },
              { id: 'c', text: 'Ca. 3,0 mill kr', isCorrect: false },
              { id: 'd', text: 'Ca. 1,0 mill kr', isCorrect: false },
            ],
            solution: 'Totalt betalt: $360 \\cdot 16\\,104 = 5\\,797\\,440$ kr. Renter: $5\\,797\\,440 - 3\\,000\\,000 = 2\\,797\\,440$ kr.',
          },
          {
            id: '10-6-3-n-quiz3-q1',
            task: 'Du har et laan paa 500 000 kr med 5% rente. Du betaler 50 000 kr ekstra. Hvor mye sparer du i renter per aar?',
            options: [
              { id: 'a', text: '$5\\,000$ kr', isCorrect: false },
              { id: 'b', text: '$2\\,500$ kr', isCorrect: true },
              { id: 'c', text: '$25\\,000$ kr', isCorrect: false },
              { id: 'd', text: '$500$ kr', isCorrect: false },
            ],
            solution: '$50\\,000 \\cdot 0{,}05 = 2500$ kr spart per aar. Over mange aar akkumuleres dette.',
          },
          {
            id: '10-6-3-n-quiz3-q2',
            task: 'Sara laaner 150 000 kr til bil med 7% rente som serielaan over 5 aar. Hva er totale rentekostnader?',
            options: [
              { id: 'a', text: '$31\\,500$ kr', isCorrect: true },
              { id: 'b', text: '$52\\,500$ kr', isCorrect: false },
              { id: 'c', text: '$21\\,000$ kr', isCorrect: false },
              { id: 'd', text: '$42\\,000$ kr', isCorrect: false },
            ],
            solution: 'Avdrag: 30 000 kr/aar. Renter per aar: $10\\,500 + 8400 + 6300 + 4200 + 2100 = 31\\,500$ kr.',
          },
          {
            id: '10-6-3-n-quiz3-q3',
            task: 'Du har kredittkortgjeld paa 20 000 kr til 20% rente. Hvor mye "tjener" du paa aa betale ned i stedet for aa investere til 7%?',
            options: [
              { id: 'a', text: '$1\\,400$ kr per aar', isCorrect: false },
              { id: 'b', text: '$2\\,600$ kr per aar', isCorrect: true },
              { id: 'c', text: '$4\\,000$ kr per aar', isCorrect: false },
              { id: 'd', text: '$400$ kr per aar', isCorrect: false },
            ],
            solution: 'Du sparer 20% - 7% = 13% paa de 20 000 kr, dvs. $20\\,000 \\cdot 0{,}13 = 2600$ kr per aar.',
          },
        ],
      },
    },
    {
      id: '10-6-3-n-summary',
      type: 'text',
      content: `## Oppsummering

- **Enkel rente:** $K_n = K_0 \\cdot (1 + r \\cdot n)$. Renten beregnes kun paa opprinnelig belop.

- **Rentesrente:** $K_n = K_0 \\cdot (1 + r)^n$. Renten legges til og gir rente paa rente. Over tid gir dette vesentlig mer enn enkel rente.

- **Effektiv rente** tar hensyn til hvor ofte renten beregnes: $r_{eff} = (1 + \\frac{r_{nom}}{m})^m - 1$. Alltid hoeyere enn nominell rente naar $m > 1$.

- **Serielaan:** Like avdrag, synkende terminbelop. Lavere totale renter.

- **Annuitetslaan:** Likt terminbelop, lettere aa budsjettere. Hoeyere totale renter.

- **Praktiske tips:** Betal ekstra paa laanet, unngaa forbrukslaan, kortere nedbetalingstid sparer enormt i renter, og betal ned dyr gjeld foer du investerer.

Renter virker FOR deg naar du sparer, og MOT deg naar du laaner. Jo foer du begynner aa spare, jo kraftigere jobber rentesrente-effekten for deg.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EXPORT
// ============================================================================

export const MATEMATIKK_10_NARRATIV_DEL6_CHAPTERS = [
  CHAPTER_10_6_1_NARRATIV,
  CHAPTER_10_6_2_NARRATIV,
  CHAPTER_10_6_3_NARRATIV,
];
