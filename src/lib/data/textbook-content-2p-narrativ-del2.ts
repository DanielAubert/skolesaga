/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 2P – Seksjon 2: Funksjoner i praksis – NARRATIV VERSJON
 * Kapittel 2.1–2.3
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * å lese og lytte til, med quiz-spørsmål for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1 NARRATIV: Lineære modeller
// ============================================================================

export const CHAPTER_2P_2_1_NARRATIV: TextbookChapter = {
  id: '2p-2-1-narrativ',
  courseId: '2p',
  chapterNumber: '2.1',
  title: 'Lineære modeller',
  subtitle: 'Narrativ versjon',
  description:
    'Opplev hvordan rette linjer kan beskrive alt fra mobilabonnementer til treningssenter-priser. En fortelling om stigningstall, konstantledd og skjæringspunkter -- matematikk du bruker hver dag uten å tenke over det.',
  estimatedMinutes: 35,
  competenceGoals: [
    'forklare og bruke prosent, prosentpoeng og vekstfaktor til modellering av praktiske situasjoner med digitale verktøy',
    'utforske strategier for å løse ligninger, ligningssystemer og ulikheter og argumentere for tankemåtene sine',
  ],
  linkedChapterId: '2p-2-1',
  content: [
    {
      id: '2p-2-1-n-intro',
      type: 'text',
      content: `## Lineære modeller -- rette linjer som beskriver virkeligheten

Tenk deg at du skal kjøpe nytt mobilabonnement. Tilbudet sier 149 kroner i måneden, pluss 49 kroner per gigabyte data. Du lurer på hva regningen blir hvis du bruker 3 gigabyte -- eller 10. Du trenger egentlig ikke matematikk for å svare, du kan bare multiplisere og legge sammen. Men det er nettopp det som *er* matematikken: å sette opp en regel som fungerer for *alle* mulige verdier.

I dette kapittelet skal vi se at overraskende mange sammenhenger i hverdagen kan beskrives av den enkleste funksjonstypen som finnes: den lineære funksjonen. Fra taxiturer og leiebiler til bedrifters produksjonskostnader og spareavtaler -- mønsteret er det samme: en fast grunnpris pluss en kostnad som vokser jevnt.`,
    },
    {
      id: '2p-2-1-n-section1',
      type: 'text',
      content: `## Den lineære funksjonen -- hva er det egentlig?

En lineær funksjon har alltid formen $f(x) = ax + b$. Det er bare to tall som bestemmer alt: $a$ og $b$. La oss forstå hva de betyr.

**Stigningstallet $a$** forteller hvor mye $y$ endres når $x$ øker med 1. Tenk på det som prisen per enhet. I mobilabonnement-eksempelet er $a = 49$ -- kostnaden øker med 49 kroner for hver ekstra gigabyte. Hvis $a$ er positivt, stiger grafen. Hvis $a$ er negativt, synker den. Og jo større $|a|$ er, desto brattere er linjen.

**Konstantleddet $b$** er verdien av funksjonen når $x = 0$. Det er grunnprisen -- det du betaler uansett, før du har brukt en eneste gigabyte. I vårt eksempel er $b = 149$ kroner.

Sett sammen blir modellen: $f(x) = 49x + 149$. Vil du vite hva 5 gigabyte koster? Sett inn: $f(5) = 49 \\cdot 5 + 149 = 245 + 149 = 394$ kroner.

Hvis du kjenner to punkter på grafen, kan du finne stigningstallet med formelen $a = \\frac{y_2 - y_1}{x_2 - x_1}$. Det er rett og slett endringen i $y$ delt på endringen i $x$ -- hvor mye funksjonen stiger per skritt i $x$-retningen. Tenk på en taxi: startprisen er 60 kroner, og det koster 15 kroner per kilometer. Da er $f(x) = 15x + 60$. En tur på 12 kilometer koster $f(12) = 15 \\cdot 12 + 60 = 180 + 60 = 240$ kroner.`,
    },
    {
      id: '2p-2-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '2p-2-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på lineære funksjoner:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-2-1-n-quiz1-q0',
            task: 'Et leiebilselskap tar 500 kr per dag pluss 3,50 kr per km. Du kjører 200 km på én dag. Hva blir totalkostnaden?',
            options: [
              { id: 'a', text: '700 kr', isCorrect: false },
              { id: 'b', text: '1 000 kr', isCorrect: false },
              { id: 'c', text: '1 200 kr', isCorrect: true },
              { id: 'd', text: '850 kr', isCorrect: false },
            ],
            solution: '$f(200) = 3{,}50 \\cdot 200 + 500 = 700 + 500 = 1\\,200$ kr.',
          },
          {
            id: '2p-2-1-n-quiz1-q1',
            task: 'I funksjonen $f(x) = 49x + 149$ for et mobilabonnement, hva representerer tallet 149?',
            options: [
              { id: 'a', text: 'Prisen per gigabyte', isCorrect: false },
              { id: 'b', text: 'Den faste månedsprisen (konstantleddet)', isCorrect: true },
              { id: 'c', text: 'Antall gigabyte inkludert', isCorrect: false },
              { id: 'd', text: 'Stigningstallet', isCorrect: false },
            ],
            solution: 'Konstantleddet $b = 149$ er verdien av funksjonen når $x = 0$, altså grunnprisen du betaler uansett -- den faste månedskostnaden.',
          },
          {
            id: '2p-2-1-n-quiz1-q2',
            task: 'En taxi har startpris 60 kr og koster 15 kr per km. Hva koster en tur på 12 km?',
            options: [
              { id: 'a', text: '180 kr', isCorrect: false },
              { id: 'b', text: '240 kr', isCorrect: true },
              { id: 'c', text: '195 kr', isCorrect: false },
              { id: 'd', text: '120 kr', isCorrect: false },
            ],
            solution: '$f(12) = 15 \\cdot 12 + 60 = 180 + 60 = 240$ kr.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-2-1-n-section2',
      type: 'text',
      content: `## Finne funksjonsuttrykk fra to punkter

Ofte kjenner vi ikke formelen direkte -- vi har bare noen tallverdier. En svømmehall forteller deg at 5 besøk koster 350 kroner og 12 besøk koster 630 kroner. Kan vi finne en formel?

Ja! Vi har to punkter: $(5, 350)$ og $(12, 630)$. Først finner vi stigningstallet: $a = \\frac{630 - 350}{12 - 5} = \\frac{280}{7} = 40$. Det koster altså 40 kroner per besøk.

Deretter finner vi konstantleddet. Vi setter inn ett av punktene i $y = 40x + b$: $350 = 40 \\cdot 5 + b$, som gir $b = 350 - 200 = 150$. Modellen blir $f(x) = 40x + 150$.

Hva betyr det at $b = 150$? Det er kostnaden selv om du ikke har besøkt svømmehallen -- kanskje en årskortavgift. Og 40 kroner per besøk er det du betaler i tillegg hver gang du dukker opp.

La oss prøve et lignende eksempel med strøm. En leverandør tar 850 kroner for 100 kWh og 1 450 kroner for 300 kWh. Stigningstallet: $a = \\frac{1\\,450 - 850}{300 - 100} = \\frac{600}{200} = 3$ kroner per kWh. Konstantleddet: $850 = 3 \\cdot 100 + b$, altså $b = 550$. Modellen er $f(x) = 3x + 550$. Den faste månedsprisen er 550 kroner, og strømmen koster 3 kroner per kilowattime.`,
    },
    {
      id: '2p-2-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '2p-2-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på funksjonsuttrykk fra to punkter:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-2-1-n-quiz2-q0',
            task: 'Du vet at $f(2) = 100$ og $f(8) = 280$ for en lineær funksjon $f(x) = ax + b$. Hva er stigningstallet $a$?',
            options: [
              { id: 'a', text: '$a = 40$', isCorrect: false },
              { id: 'b', text: '$a = 30$', isCorrect: true },
              { id: 'c', text: '$a = 25$', isCorrect: false },
              { id: 'd', text: '$a = 45$', isCorrect: false },
            ],
            solution: '$a = (280 - 100) / (8 - 2) = 180 / 6 = 30$. Stigningstallet er endringen i $y$ delt på endringen i $x$.',
          },
          {
            id: '2p-2-1-n-quiz2-q1',
            task: 'Med $a = 30$ og punktet $(2, 100)$, hva er konstantleddet $b$?',
            options: [
              { id: 'a', text: '$b = 40$', isCorrect: true },
              { id: 'b', text: '$b = 70$', isCorrect: false },
              { id: 'c', text: '$b = 100$', isCorrect: false },
              { id: 'd', text: '$b = 160$', isCorrect: false },
            ],
            solution: 'Vi setter inn i $y = ax + b$: $100 = 30 \\cdot 2 + b$, altså $b = 100 - 60 = 40$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-2-1-n-section3',
      type: 'text',
      content: `## Skjæringspunkter -- når to linjer møtes

Kanskje det mest nyttige med lineære modeller er at vi kan *sammenligne* to alternativer. Tenk deg at du vurderer to mobilabonnementer: Abonnement A koster 199 kroner i måneden pluss 9 kroner per gigabyte. Abonnement B koster 349 kroner flat, med fri data.

Vi setter opp modellene: $A(x) = 9x + 199$ og $B(x) = 349$. Når er de like dyre? Vi løser $9x + 199 = 349$, som gir $9x = 150$ og $x \\approx 16{,}7$ gigabyte.

Bruker du under 17 GB i måneden, er A billigst. Bruker du mer, lønner B seg. *Det* er skjæringspunktet -- der de to grafene krysser hverandre, og der beslutningen tipper.

Samme prinsipp gjelder for treningssentre. Senter X tar 299 kroner per måned uten binding. Senter Y krever 3 000 kroner i innmeldingsavgift, men bare 199 kroner per måned etterpå. Modellene for *total* kostnad etter $x$ måneder: $X(x) = 299x$ og $Y(x) = 199x + 3\\,000$.

Skjæringspunktet: $299x = 199x + 3\\,000$, altså $100x = 3\\,000$ og $x = 30$ måneder. Først etter 2,5 år har Y blitt billigere enn X. Etter bare 12 måneder er X (3 588 kr) langt billigere enn Y (5 388 kr).

Og **nullpunktet** -- der en funksjon krysser $x$-aksen -- finner vi ved å sette $f(x) = 0$. For $f(x) = -3x + 12$: $-3x + 12 = 0$ gir $x = 4$. Det er den $x$-verdien der funksjonen skifter fortegn.`,
    },
    {
      id: '2p-2-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '2p-2-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på skjæringspunkter:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-2-1-n-quiz3-q0',
            task: 'Senter X koster 299 kr/mnd og senter Y koster 199 kr/mnd + 3 000 kr innmelding. Etter hvor mange måneder er Y billigere?',
            options: [
              { id: 'a', text: '10 måneder', isCorrect: false },
              { id: 'b', text: '20 måneder', isCorrect: false },
              { id: 'c', text: '30 måneder', isCorrect: true },
              { id: 'd', text: '15 måneder', isCorrect: false },
            ],
            solution: '$299x = 199x + 3\\,000 \\Rightarrow 100x = 3\\,000 \\Rightarrow x = 30$ måneder.',
          },
          {
            id: '2p-2-1-n-quiz3-q1',
            task: 'Hva finner du i skjæringspunktet mellom to lineære funksjoner?',
            options: [
              { id: 'a', text: 'Der den ene funksjonen er dobbelt så stor som den andre', isCorrect: false },
              { id: 'b', text: 'Der begge funksjonene krysser $x$-aksen', isCorrect: false },
              { id: 'c', text: 'Der de to funksjonene har lik verdi -- altså der alternativene koster like mye', isCorrect: true },
              { id: 'd', text: 'Der begge funksjonene er null', isCorrect: false },
            ],
            solution: 'Skjæringspunktet er der de to grafene møtes, altså der funksjonsverdiene er like: $f(x) = g(x)$. I praksis er det punktet der to alternativer koster nøyaktig like mye.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-2-1-n-section4',
      type: 'text',
      content: `## Likningssett -- to ukjente, to likninger

Noen ganger har vi to ukjente størrelser. På en kantine koster en baguett og en juice til sammen 95 kroner. To baguetter og en juice koster 145 kroner. Hva koster hver?

Vi kaller baguettprisen $b$ og juiceprisen $j$, og setter opp to likninger:
- $b + j = 95$ ... (1)
- $2b + j = 145$ ... (2)

**Addisjonsmetoden** er elegant her. Trekk likning (1) fra likning (2): $(2b + j) - (b + j) = 145 - 95$, som gir $b = 50$. Sett inn i (1): $50 + j = 95$, altså $j = 45$. En baguett koster 50 kroner og en juice 45 kroner.

**Innsettingsmetoden** fungerer også. Fra (1): $j = 95 - b$. Sett inn i (2): $2b + (95 - b) = 145$, som gir $b + 95 = 145$ og $b = 50$. Samme svar.

Et kinobillett-eksempel: voksen pluss barn koster 180 kroner. Tre voksne og to barn koster 470 kroner. Likningene: $v + b = 180$ og $3v + 2b = 470$. Fra den første: $b = 180 - v$. Sett inn: $3v + 2(180 - v) = 470$, altså $3v + 360 - 2v = 470$, som gir $v = 110$ og $b = 70$. Voksenbillett: 110 kroner, barnebillett: 70 kroner.

Du kan også løse likningssett **grafisk** -- tegn begge linjene og les av skjæringspunktet. Det gir samme svar, men er ofte mindre presist enn algebraisk løsning.`,
    },
    {
      id: '2p-2-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '2p-2-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på likningssett:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-2-1-n-quiz4-q0',
            task: 'Et likningssett: $x + y = 10$ og $3x + y = 22$. Hva er verdien av $x$?',
            options: [
              { id: 'a', text: '$x = 4$', isCorrect: false },
              { id: 'b', text: '$x = 6$', isCorrect: true },
              { id: 'c', text: '$x = 8$', isCorrect: false },
              { id: 'd', text: '$x = 5$', isCorrect: false },
            ],
            solution: 'Trekk likning 1 fra likning 2: $(3x + y) - (x + y) = 22 - 10$, altså $2x = 12$ og $x = 6$.',
          },
          {
            id: '2p-2-1-n-quiz4-q1',
            task: 'Med $x = 6$ i likningene over, hva er verdien av $y$?',
            options: [
              { id: 'a', text: '$y = 4$', isCorrect: true },
              { id: 'b', text: '$y = 6$', isCorrect: false },
              { id: 'c', text: '$y = 16$', isCorrect: false },
              { id: 'd', text: '$y = 10$', isCorrect: false },
            ],
            solution: 'Sett inn $x = 6$ i likning 1: $6 + y = 10$, altså $y = 4$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-2-1-n-section5',
      type: 'text',
      content: `## Lineære modeller i næringslivet

La oss avslutte med å se hvordan bedrifter bruker lineære modeller. En bedrift produserer lamper med faste kostnader på 60 000 kroner per måned (leie, lønn, utstyr) og variable kostnader på 120 kroner per lampe (materialer). Salgsprisen er 250 kroner per lampe.

Vi setter opp modellene: Inntekten er $I(x) = 250x$ og totalkostnaden er $TK(x) = 120x + 60\\,000$.

**Nullpunktomsetningen** -- der inntekten akkurat dekker kostnadene -- finner vi ved å sette $I(x) = TK(x)$: $250x = 120x + 60\\,000$, som gir $130x = 60\\,000$ og $x \\approx 462$ lamper. Produserer bedriften færre enn 462 lamper, går den med tap. Produserer den flere, tjener den penger.

Overskuddet ved 600 lamper: $R(600) = I(600) - TK(600) = 150\\,000 - (72\\,000 + 60\\,000) = 150\\,000 - 132\\,000 = 18\\,000$ kroner.

Eller tenk på valget mellom elbil og bensinbil. Elbil: 350 000 kroner i kjøpspris, 0,30 kr per km. Bensinbil: 250 000 kroner, 1,10 kr per km. $E(x) = 0{,}30x + 350\\,000$ og $B(x) = 1{,}10x + 250\\,000$. Skjæringspunkt: $0{,}30x + 350\\,000 = 1{,}10x + 250\\,000$, som gir $0{,}80x = 100\\,000$ og $x = 125\\,000$ km. Kjører du 15 000 km i året, tar det $125\\,000 / 15\\,000 \\approx 8{,}3$ år før elbilen er billigere totalt sett.

Lineære modeller er kanskje enkle, men de er overraskende kraftige. Neste gang du sammenligner to tilbud -- et abonnement, en forsikring, en strømleverandør -- prøv å sette opp lineære modeller og finn skjæringspunktet. Det kan spare deg for mye penger.`,
    },
    {
      id: '2p-2-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '2p-2-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på lineære modeller i næringslivet:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-2-1-n-quiz5-q0',
            task: 'En bedrift har inntekt $I(x) = 300x$ og kostnad $TK(x) = 180x + 48\\,000$. Hvor mange enheter må de selge for å gå i null?',
            options: [
              { id: 'a', text: '200 enheter', isCorrect: false },
              { id: 'b', text: '400 enheter', isCorrect: true },
              { id: 'c', text: '160 enheter', isCorrect: false },
              { id: 'd', text: '267 enheter', isCorrect: false },
            ],
            solution: '$300x = 180x + 48\\,000 \\Rightarrow 120x = 48\\,000 \\Rightarrow x = 400$ enheter.',
          },
          {
            id: '2p-2-1-n-quiz5-q1',
            task: 'Hva er overskuddet ved salg av 600 lamper med $I(x) = 250x$ og $TK(x) = 120x + 60\\,000$?',
            options: [
              { id: 'a', text: '18 000 kr', isCorrect: true },
              { id: 'b', text: '78 000 kr', isCorrect: false },
              { id: 'c', text: '30 000 kr', isCorrect: false },
              { id: 'd', text: '150 000 kr', isCorrect: false },
            ],
            solution: '$I(600) = 250 \\cdot 600 = 150\\,000$ kr. $TK(600) = 120 \\cdot 600 + 60\\,000 = 132\\,000$ kr. Overskudd $= 150\\,000 - 132\\,000 = 18\\,000$ kr.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-2-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Lineære modeller er en av de mest praktiske verktøyene i hverdagsmatematikken. Med bare to tall -- stigningstall og konstantledd -- kan du beskrive en overraskende mengde situasjoner.

**Nøkkelbegreper du nå kjenner:**
- **Lineær funksjon**: $f(x) = ax + b$ -- en rett linje i koordinatsystemet
- **Stigningstall $a$**: Hvor mye $y$ endres når $x$ øker med 1 -- prisen per enhet
- **Konstantledd $b$**: Verdien av funksjonen når $x = 0$ -- grunnprisen
- **Stigningstall fra to punkter**: $a = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}$
- **Nullpunkt**: $x$-verdien der $f(x) = 0$
- **Skjæringspunkt**: Der to lineære funksjoner er like -- løs $f(x) = g(x)$
- **Likningssett**: To likninger med to ukjente, løses med innsetting eller addisjon

**Det viktigste du tar med deg:**
Lineære modeller handler om å finne mønstre i tall og bruke dem til å ta bedre beslutninger. Neste gang du sammenligner to priser, abonnementer eller tilbud -- husk at matematikken kan gi deg et klart svar på når det ene alternativet slår det andre.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.2 NARRATIV: Eksponentielle modeller
// ============================================================================

export const CHAPTER_2P_2_2_NARRATIV: TextbookChapter = {
  id: '2p-2-2-narrativ',
  courseId: '2p',
  chapterNumber: '2.2',
  title: 'Eksponentielle modeller',
  subtitle: 'Narrativ versjon',
  description:
    'Følg med på en reise gjennom eksponentiell vekst og nedgang -- fra bankinnskudd som vokser med rentes rente til biler som taper verdi og legemidler som brytes ned i kroppen. Opplev kraften i vekstfaktoren.',
  estimatedMinutes: 35,
  competenceGoals: [
    'forklare og bruke prosent, prosentpoeng og vekstfaktor til modellering av praktiske situasjoner med digitale verktøy',
  ],
  linkedChapterId: '2p-2-2',
  content: [
    {
      id: '2p-2-2-n-intro',
      type: 'text',
      content: `## Eksponentielle modeller -- når ting vokser (eller krymper) med prosent

Et gammelt sagn forteller om en sjakkmester som ba kongen om ris som belønning: ett korn på det første feltet, to på det andre, fire på det tredje -- dobling for hvert felt. Kongen lo og trodde det var en beskjeden forespørsel. Men på det 64. feltet ville det ligge over 9 trillioner riskorn -- mer enn all ris som noensinne er produsert i historien. Det er eksponentiell vekst: tilsynelatende langsom i starten, men eksplosiv over tid.

I dette kapittelet møter du eksponentielle modeller -- funksjoner som beskriver vekst og nedgang med en fast *prosent* per periode. De er like viktige som lineære modeller, men oppfører seg fundamentalt annerledes.`,
    },
    {
      id: '2p-2-2-n-section1',
      type: 'text',
      content: `## Eksponentiell vekst -- fra bankinnskudd til befolkning

En eksponentiell funksjon har formen $f(x) = a \\cdot b^x$. Her er $a$ startverdien (verdien når $x = 0$) og $b$ er **vekstfaktoren** -- det tallet vi ganger med for hver periode.

Sammenhengen med prosent er enkel: Vekst på $p$ prosent gir vekstfaktor $b = 1 + p/100$. Fem prosent vekst betyr $b = 1{,}05$. Tre prosent nedgang betyr $b = 1 - 0{,}03 = 0{,}97$.

La oss ta et konkret eksempel. Du setter 100 000 kroner i banken til 4 prosent årlig rente. Vekstfaktoren er $b = 1{,}04$. Etter ett år: $100\\,000 \\cdot 1{,}04 = 104\\,000$ kroner. Etter to år: $100\\,000 \\cdot 1{,}04^2 = 108\\,160$ kroner. Legg merke til at du fikk 4 160 kroner i rente det andre året -- litt mer enn de 4 000 kronene i rente det første året. Det er *rentes rente*: du får rente på renten.

Etter 8 år: $f(8) = 100\\,000 \\cdot 1{,}04^8 = 100\\,000 \\cdot 1{,}3686 \\approx 136\\,857$ kroner. Du har tjent nesten 37 000 kroner i rente uten å gjøre noe som helst.

Et annet eksempel: En by med 80 000 innbyggere vokser med 1,5 prosent per år. Modellen er $f(t) = 80\\,000 \\cdot 1{,}015^t$. Om 10 år: $f(10) = 80\\,000 \\cdot 1{,}015^{10} \\approx 80\\,000 \\cdot 1{,}161 \\approx 92\\,880$ innbyggere. Byen har vokst med nesten 13 000 mennesker.`,
    },
    {
      id: '2p-2-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '2p-2-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på eksponentiell vekst:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-2-2-n-quiz1-q0',
            task: 'Et bankinnskudd på 100 000 kr har 4 % årlig rente. Hva er innskuddet verdt etter 8 år?',
            options: [
              { id: 'a', text: '132 000 kr', isCorrect: false },
              { id: 'b', text: '136 857 kr', isCorrect: true },
              { id: 'c', text: '140 000 kr', isCorrect: false },
              { id: 'd', text: '125 600 kr', isCorrect: false },
            ],
            solution: '$f(8) = 100\\,000 \\cdot 1{,}04^8 \\approx 136\\,857$ kr. Med enkel rente ville det blitt $132\\,000$ kr, men rentes rente gir mer.',
          },
          {
            id: '2p-2-2-n-quiz1-q1',
            task: 'Hva er vekstfaktoren for en årlig vekst på 5 %?',
            options: [
              { id: 'a', text: '$0{,}05$', isCorrect: false },
              { id: 'b', text: '$1{,}05$', isCorrect: true },
              { id: 'c', text: '$5{,}00$', isCorrect: false },
              { id: 'd', text: '$0{,}95$', isCorrect: false },
            ],
            solution: 'Vekstfaktor $= 1 + p/100 = 1 + 5/100 = 1{,}05$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-2-2-n-section2',
      type: 'text',
      content: `## Eksponentiell nedgang -- biler, telefoner og medisin

Ikke alt vokser. Mye *synker* med en fast prosent per periode, og det gir eksponentiell nedgang -- en vekstfaktor mellom 0 og 1.

En ny bil til 450 000 kroner mister 18 prosent av verdien hvert år. Vekstfaktoren er $b = 1 - 0{,}18 = 0{,}82$. Etter 5 år: $f(5) = 450\\,000 \\cdot 0{,}82^5 = 450\\,000 \\cdot 0{,}3707 \\approx 166\\,800$ kroner. Bilen har tapt $450\\,000 - 166\\,800 = 283\\,200$ kroner i verdi -- over 60 prosent av kjøpsprisen.

En mobiltelefon til 12 000 kroner mister 30 prosent per år. $f(t) = 12\\,000 \\cdot 0{,}70^t$. Etter 3 år: $f(3) = 12\\,000 \\cdot 0{,}343 = 4\\,116$ kroner. Etter 6 år: $f(6) = 12\\,000 \\cdot 0{,}1176 \\approx 1\\,412$ kroner. Telefonen som kostet 12 000 kroner er nå verdt mindre enn 1 500 kroner.

Det viktige å huske er at prosentnedgangen beregnes av *gjeldende* verdi, ikke av startverdien. Bilen mister 18 prosent av sin *nåværende* verdi hvert år -- ikke 18 prosent av 450 000. Derfor blir verdifallet i kroner mindre og mindre for hvert år, selv om prosenten er den samme. Det er nettopp det som gjør eksponentiell nedgang forskjellig fra lineær nedgang.

Når noen sier at vekstfaktoren er 0,92, betyr det at 8 prosent forsvinner per periode ($1 - 0{,}92 = 0{,}08$). Vekstfaktoren forteller direkte hvor stor andel som er *igjen* etter hver periode.`,
    },
    {
      id: '2p-2-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '2p-2-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på eksponentiell nedgang:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-2-2-n-quiz2-q0',
            task: 'Vekstfaktoren for en prosess er 0,92. Hva betyr dette?',
            options: [
              { id: 'a', text: 'Mengden øker med 92 % per periode', isCorrect: false },
              { id: 'b', text: 'Mengden minker med 8 % per periode', isCorrect: true },
              { id: 'c', text: 'Mengden minker med 92 % per periode', isCorrect: false },
              { id: 'd', text: 'Mengden øker med 8 % per periode', isCorrect: false },
            ],
            solution: '$b = 0{,}92 = 1 - 0{,}08$. Vekstfaktoren er under 1, altså er det nedgang. Nedgangen er $1 - 0{,}92 = 0{,}08 = 8\\%$ per periode.',
          },
          {
            id: '2p-2-2-n-quiz2-q1',
            task: 'En bil til 450 000 kr mister 18 % av verdien hvert år. Hva er bilen verdt etter 5 år?',
            options: [
              { id: 'a', text: 'Ca. 45 000 kr', isCorrect: false },
              { id: 'b', text: 'Ca. 166 800 kr', isCorrect: true },
              { id: 'c', text: 'Ca. 225 000 kr', isCorrect: false },
              { id: 'd', text: 'Ca. 310 000 kr', isCorrect: false },
            ],
            solution: '$f(5) = 450\\,000 \\cdot 0{,}82^5 = 450\\,000 \\cdot 0{,}3707 \\approx 166\\,800$ kr.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-2-2-n-section3',
      type: 'text',
      content: `## Doblingstid og halveringstid -- magiske tidspunkter

Hvor lang tid tar det å doble en investering? Hvor lang tid tar det for en bil å tape halvparten av verdien? Disse spørsmålene leder til begrepene **doblingstid** og **halveringstid**.

For vekst: Doblingstiden $T$ er den tiden det tar for verdien å doble seg. Vi løser $b^T = 2$, som gir $T = \\frac{\\ln 2}{\\ln b}$.

Men det finnes en fantastisk tommelfingerregel: **70-regelen**. Doblingstiden er omtrent $70$ delt på vekstprosenten. En investering som vokser med 6 prosent per år dobler seg på ca. $70/6 \\approx 11{,}7$ år. Eksakt beregning gir $T = \\frac{\\ln 2}{\\ln 1{,}06} = \\frac{0{,}693}{0{,}0583} \\approx 11{,}9$ år -- veldig nær tommelfingerregelen!

En befolkning som vokser med 2 prosent per år dobler seg på ca. $70/2 = 35$ år. Tenk på det: bare 2 prosent årlig vekst betyr at det er dobbelt så mange mennesker etter en generasjon.

For nedgang bruker vi **halveringstiden**: Tiden det tar for verdien å bli halvert. En bil som mister 15 prosent per år har halveringstid $T = \\frac{\\ln 0{,}5}{\\ln 0{,}85} \\approx 4{,}3$ år. Etter drøyt fire år er bilen verdt halvparten av hva du betalte.

Når er en bil til 500 000 kroner verdt under 100 000 kroner med 15 prosent årlig verditap? Vi trenger $0{,}85^t < 100\\,000/500\\,000 = 0{,}2$. Prøving viser at $0{,}85^9 \\approx 0{,}232$ og $0{,}85^{10} \\approx 0{,}197$. Etter ca. 10 år er bilen verdt under 100 000 kroner.`,
    },
    {
      id: '2p-2-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '2p-2-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på doblingstid og halveringstid:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-2-2-n-quiz3-q0',
            task: 'En befolkning vokser med 2 % per år. Omtrent hvor lang tid tar det å doble befolkningen? (Bruk 70-regelen)',
            options: [
              { id: 'a', text: '35 år', isCorrect: true },
              { id: 'b', text: '50 år', isCorrect: false },
              { id: 'c', text: '70 år', isCorrect: false },
              { id: 'd', text: '20 år', isCorrect: false },
            ],
            solution: '70-regelen: $T \\approx 70/2 = 35$ år.',
          },
          {
            id: '2p-2-2-n-quiz3-q1',
            task: 'En investering vokser med 6 % per år. Hva er omtrentlig doblingstid?',
            options: [
              { id: 'a', text: 'Ca. 6 år', isCorrect: false },
              { id: 'b', text: 'Ca. 12 år', isCorrect: true },
              { id: 'c', text: 'Ca. 17 år', isCorrect: false },
              { id: 'd', text: 'Ca. 42 år', isCorrect: false },
            ],
            solution: '70-regelen: $T \\approx 70/6 \\approx 11{,}7$ år, altså ca. 12 år.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-2-2-n-section4',
      type: 'text',
      content: `## Lineær mot eksponentiell -- en kamp med forutsigbar vinner

Hva er forskjellen mellom lineær og eksponentiell vekst? Lineær vekst betyr at det legges til et *fast beløp* per periode: 5 000 kroner mer hvert år. Eksponentiell vekst betyr at verdien ganges med en *fast faktor* per periode: 8 prosent mer hvert år.

I starten kan lineær vekst faktisk være raskere. Tenk på to spareavtaler: A starter med 50 000 kroner og øker med 5 000 kroner per år. B starter med 50 000 kroner og øker med 8 prosent per år.

$A(t) = 5\\,000t + 50\\,000$ (lineær)
$B(t) = 50\\,000 \\cdot 1{,}08^t$ (eksponentiell)

Etter 5 år: $A(5) = 75\\,000$ og $B(5) = 50\\,000 \\cdot 1{,}47 = 73\\,466$. A leder! Men etter 10 år: $A(10) = 100\\,000$ og $B(10) = 50\\,000 \\cdot 2{,}159 = 107\\,946$. B har passert. Og etter 15 år: $A(15) = 125\\,000$ og $B(15) = 50\\,000 \\cdot 3{,}172 = 158\\,608$. B leder nå komfortabelt.

Rundt $t = 9$ år krysser grafene hverandre. Etter det vinner eksponentiell vekst -- og forspranget bare øker. Det er en generell lov: eksponentiell vekst vil *alltid* overgå lineær vekst til slutt, uansett hvor bratt den lineære linjen er. Spørsmålet er bare *når*.`,
    },
    {
      id: '2p-2-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '2p-2-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på å finne vekstfaktor fra data:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-2-2-n-quiz4-q0',
            task: 'En skole hadde 400 elever og vokste til 520 elever på 5 år. Hva er den årlige vekstprosenten?',
            options: [
              { id: 'a', text: 'Ca. 4,0 %', isCorrect: false },
              { id: 'b', text: 'Ca. 5,4 %', isCorrect: true },
              { id: 'c', text: 'Ca. 6,0 %', isCorrect: false },
              { id: 'd', text: 'Ca. 3,0 %', isCorrect: false },
            ],
            solution: '$b^5 = 520/400 = 1{,}3 \\Rightarrow b = 1{,}3^{1/5} \\approx 1{,}054$. Vekstprosent $\\approx 5{,}4\\%$ per år.',
          },
          {
            id: '2p-2-2-n-quiz4-q1',
            task: 'Hva er hovedforskjellen mellom lineær og eksponentiell vekst?',
            options: [
              { id: 'a', text: 'Lineær vekst er alltid raskere enn eksponentiell', isCorrect: false },
              { id: 'b', text: 'Lineær legger til et fast beløp per periode, eksponentiell ganger med en fast faktor', isCorrect: true },
              { id: 'c', text: 'Det er ingen forskjell -- de gir samme resultat', isCorrect: false },
              { id: 'd', text: 'Eksponentiell vekst er alltid langsommere', isCorrect: false },
            ],
            solution: 'Lineær vekst legger til et *fast beløp* per periode (f.eks. 5 000 kr mer hvert år). Eksponentiell vekst ganger med en *fast faktor* (f.eks. 8 % mer hvert år). Eksponentiell vekst vil alltid overgå lineær på lang sikt.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-2-2-n-section5',
      type: 'text',
      content: `## Eksponentielle modeller i medisin og natur

La oss avslutte med en fascinerende anvendelse: legemidler i kroppen. Når du tar en smertestillende tablett, bryter kroppen gradvis ned virkestoffet. Denne nedbrytningen følger ofte eksponentiell nedgang.

Tenk deg et legemiddel med halveringstid på 6 timer. En pasient tar 400 mg. Modellen er $f(t) = 400 \\cdot 0{,}5^{t/6}$ der $t$ er timer. Etter 6 timer: $f(6) = 400 \\cdot 0{,}5 = 200$ mg. Etter 12 timer: $f(12) = 400 \\cdot 0{,}25 = 100$ mg. Etter 18 timer: $f(18) = 400 \\cdot 0{,}125 = 50$ mg.

Pasienten skal ta ny dose når det er under 50 mg igjen. Det skjer etter nøyaktig 18 timer -- tre halveringstider.

Vi kan også finne vekstfaktoren per time: $b = 0{,}5^{1/6} \\approx 0{,}891$. Det betyr at ca. 11 prosent av legemiddelet brytes ned *per time*.

Norge er et annet godt eksempel. Med ca. 5,4 millioner innbyggere i 2022 og ca. 0,5 prosent årlig vekst gir modellen $f(t) = 5\\,400\\,000 \\cdot 1{,}005^t$. 70-regelen gir doblingstid $\\approx 70/0{,}5 = 140$ år. Når passerer vi 7 millioner? Vi trenger $1{,}005^t = 7/5{,}4 \\approx 1{,}296$, som gir $t \\approx 52$ år. Men er det realistisk? Sannsynligvis ikke på så lang sikt, fordi vekstraten påvirkes av innvandring, fødselsrate og politikk som endrer seg.

Det er en viktig leksjon: Eksponentielle modeller er kraftige, men de forutsetter at vekstraten holder seg konstant. I virkeligheten endrer forutsetningene seg over tid.`,
    },
    {
      id: '2p-2-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '2p-2-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på eksponentielle modeller i praksis:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-2-2-n-quiz5-q0',
            task: 'Et legemiddel har 400 mg virkestoff og halveringstid på 6 timer. Hvor mye er igjen etter 18 timer?',
            options: [
              { id: 'a', text: '100 mg', isCorrect: false },
              { id: 'b', text: '200 mg', isCorrect: false },
              { id: 'c', text: '50 mg', isCorrect: true },
              { id: 'd', text: '25 mg', isCorrect: false },
            ],
            solution: '18 timer $= 3$ halveringstider ($18/6 = 3$). Etter 3 halveringstider: $400 \\cdot 0{,}5^3 = 400 \\cdot 0{,}125 = 50$ mg.',
          },
          {
            id: '2p-2-2-n-quiz5-q1',
            task: 'Hvor mye av legemiddelet er igjen etter 12 timer (2 halveringstider)?',
            options: [
              { id: 'a', text: '200 mg', isCorrect: false },
              { id: 'b', text: '100 mg', isCorrect: true },
              { id: 'c', text: '50 mg', isCorrect: false },
              { id: 'd', text: '150 mg', isCorrect: false },
            ],
            solution: '$400 \\cdot 0{,}5^2 = 400 \\cdot 0{,}25 = 100$ mg. Etter hver halveringstid er halvparten igjen.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-2-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Eksponentielle modeller beskriver vekst og nedgang med fast prosent -- et mønster som dukker opp overalt fra bankvesen til medisin, fra befolkningsutvikling til teknologi.

**Nøkkelbegreper du nå kjenner:**
- **Eksponentiell funksjon**: $f(x) = a \\cdot b^x$ -- startverdien $a$ ganges med vekstfaktoren $b$ for hver periode
- **Vekstfaktor**: $b = 1 + p/100$ for vekst, $b = 1 - p/100$ for nedgang
- **Eksponentiell vekst** ($b > 1$): Verdien øker stadig raskere
- **Eksponentiell nedgang** ($0 < b < 1$): Verdien avtar, men aldri helt til null
- **Doblingstid**: Tiden for dobling -- bruk 70-regelen: $T \\approx 70/p$
- **Halveringstid**: Tiden for halvering -- løs $b^T = 0{,}5$
- **Lineær vs. eksponentiell**: Fast beløp vs. fast prosent -- eksponentiell vinner alltid til slutt

**Det viktigste du tar med deg:**
Eksponentiell vekst ser harmløs ut i starten, men effekten over tid er enorm. Kongens riskorn-tabbe illustrerer det perfekt. Forstår du vekstfaktor og rentes rente, har du et verktøy som hjelper deg med alt fra å vurdere spareavtaler til å forstå hvorfor klimaendringer akselererer.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.3 NARRATIV: Regresjon
// ============================================================================

export const CHAPTER_2P_2_3_NARRATIV: TextbookChapter = {
  id: '2p-2-3-narrativ',
  courseId: '2p',
  chapterNumber: '2.3',
  title: 'Regresjon',
  subtitle: 'Narrativ versjon',
  description:
    'Lær kunsten å finne en funksjon som passer til data -- fra temperaturmålinger og treningseffekter til bakterievekst og bilpriser. En fortelling om den beste rette linjen, korrelasjonskoeffisienten, og når en kurve er bedre enn en linje.',
  estimatedMinutes: 35,
  competenceGoals: [
    'forklare og bruke prosent, prosentpoeng og vekstfaktor til modellering av praktiske situasjoner med digitale verktøy',
    'analysere og presentere funn i datasett fra lokalsamfunn og media',
  ],
  linkedChapterId: '2p-2-3',
  content: [
    {
      id: '2p-2-3-n-intro',
      type: 'text',
      content: `## Regresjon -- å finne mønster i kaos

I de to forrige kapitlene har vi laget modeller *fra bunnen av*: vi visste at en taxi tar 60 kroner pluss 15 per km, og skrev opp funksjonen direkte. Men i virkeligheten starter vi ofte den andre veien -- med en haug datapunkter og spørsmålet: Finnes det et mønster her?

Kanskje du har målt temperaturen hver time gjennom en dag. Eller registrert sammenhengen mellom treningsmengde og hvilepuls. Eller logget verdien av en bruktbil over flere år. Datapunktene ligger *nesten* på en linje -- eller en kurve -- men ikke helt. Regresjon er kunsten å finne den funksjonen som passer *best mulig* til dataene dine.`,
    },
    {
      id: '2p-2-3-n-section1',
      type: 'text',
      content: `## Lineær regresjon -- den beste rette linjen

**Lineær regresjon** finner den rette linjen $y = ax + b$ som ligger nærmest mulig alle datapunktene. Metoden kalles **minste kvadraters metode**: den minimerer summen av de kvadrerte avstandene mellom datapunktene og linjen. Du trenger heldigvis ikke gjøre dette for hånd -- GeoGebra, Excel og kalkulatorer gjør det for deg.

La oss se det i praksis. Temperaturen ble målt hver time fra kl. 08 til kl. 14:

| Tid (t) | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---------|---|---|---|---|---|---|---|
| Temp (°C) | 5 | 7 | 8 | 11 | 12 | 13 | 15 |

Et digitalt verktøy gir oss: $f(t) = 1{,}61t + 5{,}14$ med $r = 0{,}995$.

Hva betyr $r = 0{,}995$? Det er **korrelasjonskoeffisienten**, og den måler hvor godt den rette linjen passer til dataene. $r = 1$ betyr perfekt positiv sammenheng (alle punkter på en stigende linje). $r = -1$ betyr perfekt negativ sammenheng. $r = 0$ betyr ingen lineær sammenheng i det hele tatt.

I vårt tilfelle er $r = 0{,}995$, altså nesten perfekt. Temperaturen stiger med ca. 1,6 °C per time.

Vi kan bruke modellen til å *forutsi*: Hva er temperaturen kl. 16 (altså $t = 8$)? $f(8) = 1{,}61 \\cdot 8 + 5{,}14 = 18{,}0°C$. Men vær forsiktig -- modellen gjelder neppe utenfor måleperioden. Kl. 22 (t = 14) ville modellen gi $f(14) = 27{,}7°C$, noe som er usannsynlig i Norge.`,
    },
    {
      id: '2p-2-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '2p-2-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på korrelasjonskoeffisienten:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-2-3-n-quiz1-q0',
            task: 'En lineær regresjonsmodell har $r = -0{,}85$. Hva betyr dette?',
            options: [
              { id: 'a', text: 'Svak positiv sammenheng', isCorrect: false },
              { id: 'b', text: 'Middels sterk negativ sammenheng -- når x øker, avtar y', isCorrect: true },
              { id: 'c', text: 'Sterk positiv sammenheng', isCorrect: false },
              { id: 'd', text: 'Ingen lineær sammenheng', isCorrect: false },
            ],
            solution: '$r = -0{,}85$ er negativt ($y$ avtar når $x$ øker) og $|r| = 0{,}85$ ligger mellom 0,7 og 0,9, altså middels til sterk korrelasjon.',
          },
          {
            id: '2p-2-3-n-quiz1-q1',
            task: 'Hva betyr $r = 0{,}995$ i temperatureksempelet?',
            options: [
              { id: 'a', text: 'Temperaturen er 99,5 grader', isCorrect: false },
              { id: 'b', text: 'Nesten perfekt positiv lineær sammenheng mellom tid og temperatur', isCorrect: true },
              { id: 'c', text: 'Modellen har 0,5 % feilmargin', isCorrect: false },
              { id: 'd', text: 'Temperaturen stiger med 0,995 grader per time', isCorrect: false },
            ],
            solution: '$r = 0{,}995$ er svært nær 1, noe som betyr nesten perfekt positiv lineær sammenheng. Punktene ligger nesten på en rett linje.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-2-3-n-section2',
      type: 'text',
      content: `## Korrelasjonskoeffisienten -- hvor sterk er sammenhengen?

La oss dvele litt ved $r$-verdien, for den er et nøkkelverktøy i regresjonsanalyse. Her er en guide:

Når $|r| > 0{,}9$ har vi **sterk korrelasjon**. Punktene ligger tett inntil linjen, og modellen er pålitelig. Når $0{,}7 < |r| < 0{,}9$ har vi **middels korrelasjon**. Det er en tydelig sammenheng, men med mer spredning. Når $|r| < 0{,}5$ har vi **svak korrelasjon**. En lineær modell er trolig ikke den beste beskrivelsen.

$r^2$ -- korrelasjonskoeffisienten i andre potens -- kalles **forklart varians**. Den forteller hvor stor andel av variasjonen i dataene som forklares av modellen. Hvis $r = 0{,}995$, er $r^2 = 0{,}990$. Det betyr at 99 prosent av variasjonen i temperaturen forklares av tiden -- bare 1 prosent er tilfeldig variasjon.

La oss se på et nytt eksempel. Sammenhengen mellom ukentlig trening og hvilepuls ble undersøkt:

| Timer trening | 0 | 2 | 4 | 6 | 8 | 10 |
|---|---|---|---|---|---|---|
| Hvilepuls | 78 | 72 | 68 | 63 | 60 | 56 |

Lineær regresjon gir: $f(x) \\approx -2{,}13x + 77{,}5$ med $r \\approx -0{,}998$. Sammenhengen er sterkt negativ -- mer trening gir lavere hvilepuls. For en person som trener 7 timer per uke: $f(7) = -2{,}13 \\cdot 7 + 77{,}5 \\approx 62{,}6$ slag per minutt.

Legg merke til at $r$ er *negativ* fordi sammenhengen er negativ: mer trening gir *lavere* puls. Styrken på sammenhengen avgjøres av $|r|$, altså absoluttverdien.`,
    },
    {
      id: '2p-2-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '2p-2-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på r² og korrelasjonsstyrke:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-2-3-n-quiz2-q0',
            task: 'Hvis $r^2 = 0{,}96$ for en regresjonsmodell, hva betyr det?',
            options: [
              { id: 'a', text: '96 % av variasjonen i dataene forklares av modellen', isCorrect: true },
              { id: 'b', text: 'Modellen er 96 % nøyaktig', isCorrect: false },
              { id: 'c', text: 'Det er 96 % sjanse for at modellen er riktig', isCorrect: false },
              { id: 'd', text: 'Data har 96 % positiv korrelasjon', isCorrect: false },
            ],
            solution: '$r^2 = 0{,}96$ betyr at 96 % av variasjonen i dataene forklares av modellen. De resterende 4 % skyldes andre faktorer eller tilfeldig variasjon.',
          },
          {
            id: '2p-2-3-n-quiz2-q1',
            task: 'En lineær regresjon gir $r \\approx -0{,}998$ for sammenhengen mellom trening og hvilepuls. Hva betyr det negative fortegnet?',
            options: [
              { id: 'a', text: 'Modellen er dårlig', isCorrect: false },
              { id: 'b', text: 'Det er en regnefeil', isCorrect: false },
              { id: 'c', text: 'Sammenhengen er negativ -- mer trening gir lavere puls', isCorrect: true },
              { id: 'd', text: 'Korrelasjon er svak fordi verdien er nær $-1$', isCorrect: false },
            ],
            solution: 'Negativt fortegn på $r$ betyr at sammenhengen er negativ: når den ene variabelen øker, synker den andre. Styrken avgjøres av $|r|$, og $|{-}0{,}998| = 0{,}998$ er svært sterk korrelasjon.',
          },
          {
            id: '2p-2-3-n-quiz2-q2',
            task: 'En regresjonsmodell har $r = 0{,}45$. Hva kan du si om sammenhengen?',
            options: [
              { id: 'a', text: 'Sterk positiv korrelasjon', isCorrect: false },
              { id: 'b', text: 'Svak korrelasjon -- en lineær modell er trolig ikke den beste', isCorrect: true },
              { id: 'c', text: 'Perfekt tilpasning', isCorrect: false },
              { id: 'd', text: 'Negativ korrelasjon', isCorrect: false },
            ],
            solution: 'Når $|r| < 0{,}5$ har vi svak korrelasjon. $r = 0{,}45$ er positiv, men svak -- en lineær modell beskriver bare $0{,}45^2 = 0{,}20$, altså 20 % av variasjonen i dataene.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-2-3-n-section3',
      type: 'text',
      content: `## Eksponentiell regresjon -- når linjen ikke passer

Noen ganger ser du tydelig at datapunktene ikke følger en rett linje. De bøyer oppover eller nedover. Da kan eksponentiell regresjon gi bedre tilpasning. Metoden finner tallene $a$ og $b$ i modellen $f(x) = a \\cdot b^x$.

Her er verdien av en bil over flere år:

| År | 0 | 1 | 2 | 3 | 4 | 5 |
|----|---|---|---|---|---|---|
| Verdi (1000 kr) | 350 | 290 | 245 | 200 | 168 | 140 |

Eksponentiell regresjon gir: $f(t) = 349 \\cdot 0{,}833^t$ med $r^2 = 0{,}998$. Tolkning: Bilen mister ca. $1 - 0{,}833 = 16{,}7$ prosent av verdien hvert år. Startverdien i modellen (349 000 kr) er svært nær den faktiske (350 000 kr).

Et annet eksempel: Bakterier i en kultur ble telt over noen timer:

| Timer | 0 | 1 | 2 | 3 | 4 | 5 |
|-------|---|---|---|---|---|---|
| Antall | 100 | 150 | 230 | 340 | 510 | 780 |

Her kurver tallene tydelig oppover. Eksponentiell regresjon gir: $f(t) \\approx 99{,}5 \\cdot 1{,}51^t$. Vekstprosenten er ca. 51 prosent per time! Etter 8 timer: $f(8) \\approx 99{,}5 \\cdot 25{,}6 \\approx 2\\,547$ bakterier.

Husk at du trenger et **digitalt verktøy** for regresjon. I GeoGebra bruker du kommandoene FitLinje for lineær og FitExp for eksponentiell regresjon. I Excel bruker du diagramverktøyet med trendlinje.`,
    },
    {
      id: '2p-2-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '2p-2-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på eksponentiell regresjon:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-2-3-n-quiz3-q0',
            task: 'Når bør man velge eksponentiell regresjon fremfor lineær?',
            options: [
              { id: 'a', text: 'Når datapunktene kurver oppover eller nedover i stedet for å følge en rett linje', isCorrect: true },
              { id: 'b', text: 'Alltid, fordi eksponentiell er bedre', isCorrect: false },
              { id: 'c', text: 'Bare når vi har mer enn 10 datapunkter', isCorrect: false },
              { id: 'd', text: 'Når $r$ er negativ', isCorrect: false },
            ],
            solution: 'Eksponentiell regresjon passer bedre når data bøyer opp (vekst) eller ned (nedgang) i stedet for å følge en rett linje. Det har ingenting med antall datapunkter eller fortegnet til $r$ å gjøre.',
          },
          {
            id: '2p-2-3-n-quiz3-q1',
            task: 'Eksponentiell regresjon for en bils verdi gir $f(t) = 349 \\cdot 0{,}833^t$. Hva betyr tallet $0{,}833$?',
            options: [
              { id: 'a', text: 'Bilen mister 83,3 % av verdien hvert år', isCorrect: false },
              { id: 'b', text: 'Bilen beholder 83,3 % av verdien hvert år, altså mister ca. 16,7 %', isCorrect: true },
              { id: 'c', text: 'Bilen koster 833 kr', isCorrect: false },
              { id: 'd', text: 'Bilen mister en fast sum på 0,833 tusen kr per år', isCorrect: false },
            ],
            solution: 'Vekstfaktoren $b = 0{,}833$ betyr at bilen beholder $83{,}3\\%$ av verdien hvert år. Verdifallet er $1 - 0{,}833 = 0{,}167$, altså ca. $16{,}7\\%$ per år.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-2-3-n-section4',
      type: 'text',
      content: `## Modellvalg -- lineær eller eksponentiell?

Ofte har du data og vet ikke på forhånd hvilken modell som passer best. Her er en oppskrift:

**Steg 1: Plot dataene.** Lag et punktdiagram og se. Følger punktene en rett linje? Eller bøyer de opp eller ned? Det visuelle inntrykket er ofte en god pekepinn.

**Steg 2: Kjør begge regresjoner.** Bruk digitalt verktøy til å gjøre både lineær og eksponentiell regresjon. Sammenlign $r^2$-verdiene. Den modellen med høyest $r^2$ forklarer mest av variasjonen i dataene.

**Steg 3: Vurder konteksten.** Hva gir *mening* i situasjonen? Strømforbruk som avtar med en fast prosent? Eller med et fast beløp? Noen ganger forteller fagets logikk deg hvilken modell som er riktig, selv om $r^2$-verdiene er like.

**Steg 4: Vær forsiktig med ekstrapolering.** Å bruke modellen langt utenfor dataintervallet er risikabelt. Temperaturmodellen vår forutsa 18 °C kl. 16, noe som er rimelig. Men kl. 22 ga den 27,7 °C -- tydelig feil. Modeller er gode *innenfor* dataintervallet, men upålitelige langt utenfor.

Tommelfingerregel: Velg den enkleste modellen som gir god tilpasning ($r^2 > 0{,}9$). Hvis begge modeller gir nesten lik $r^2$, velg den som gir mest mening i sammenhengen.

Et godt eksempel: For et datasett gir lineær regresjon $r^2 = 0{,}87$ og eksponentiell regresjon $r^2 = 0{,}96$. Den eksponentielle modellen forklarer 96 prosent av variasjonen mot 87 prosent for den lineære. Valget er klart.`,
    },
    {
      id: '2p-2-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '2p-2-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på modellvalg:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-2-3-n-quiz4-q0',
            task: 'For et datasett gir lineær regresjon $r^2 = 0{,}87$ og eksponentiell regresjon $r^2 = 0{,}96$. Hvilken modell passer best?',
            options: [
              { id: 'a', text: 'Lineær, fordi den er enklere', isCorrect: false },
              { id: 'b', text: 'Eksponentiell, fordi $r^2 = 0{,}96 > 0{,}87$', isCorrect: true },
              { id: 'c', text: 'Begge er like gode', isCorrect: false },
              { id: 'd', text: 'Ingen av dem, fordi vi trenger flere data', isCorrect: false },
            ],
            solution: 'Den eksponentielle modellen har høyest $r^2$, altså forklarer den mest av variasjonen i dataene (96 % mot 87 %). Selv om den lineære er enklere, gir den eksponentielle klart bedre tilpasning.',
          },
          {
            id: '2p-2-3-n-quiz4-q1',
            task: 'Både lineær og eksponentiell regresjon gir $r^2 \\approx 0{,}99$ for strømforbruk over 6 måneder. Den lineære modellen gir negativt forbruk for $x = 9$. Hva bør du velge?',
            options: [
              { id: 'a', text: 'Lineær, fordi den er enklest', isCorrect: false },
              { id: 'b', text: 'Det spiller ingen rolle siden $r^2$ er lik', isCorrect: false },
              { id: 'c', text: 'Eksponentiell, fordi den ikke gir negative verdier for noe som ikke kan være negativt', isCorrect: true },
              { id: 'd', text: 'Ingen av dem passer', isCorrect: false },
            ],
            solution: 'Selv om $r^2$ er nesten lik, gir den lineære modellen *negative* verdier for strømforbruk utenfor dataintervallet -- og negativt strømforbruk gir ingen mening. Den eksponentielle modellen nærmer seg 0, men blir aldri negativ, og er derfor et bedre valg.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-2-3-n-section5',
      type: 'text',
      content: `## Regresjon i praksis -- et realistisk eksempel

La oss avslutte med et eksempel som viser hvordan modellvalg ikke alltid er opplagt. Strømforbruket i en bolig ble registrert fra januar til juni:

| Måned | Jan | Feb | Mar | Apr | Mai | Jun |
|-------|-----|-----|-----|-----|-----|-----|
| kWh | 2 400 | 2 100 | 1 700 | 1 200 | 800 | 600 |

Med $x = 1$ for januar osv., gir lineær regresjon $f(x) \\approx -360x + 2\\,720$ med $r^2 \\approx 0{,}99$. Eksponentiell regresjon gir $f(x) \\approx 3\\,070 \\cdot 0{,}77^x$ med $r^2 \\approx 0{,}99$. Begge modeller passer utmerket! Hvordan velger vi?

Tenk på juli ($x = 7$). Lineær: $f(7) = -360 \\cdot 7 + 2\\,720 = 200$ kWh. Eksponentiell: $f(7) = 3\\,070 \\cdot 0{,}77^7 \\approx 480$ kWh. Og i september ($x = 9$)? Lineær: $f(9) = -360 \\cdot 9 + 2\\,720 = -520$ kWh -- *negativt* strømforbruk! Det gir ingen mening. Den eksponentielle modellen gir $f(9) \\approx 285$ kWh, som i det minste er positivt.

Her vinner den eksponentielle modellen fordi strømforbruket naturlig flater ut -- du kan ikke bruke negativt med strøm. Lineære modeller som gir negative verdier for noe som *ikke kan* være negativt, er et klassisk varselsignal om at modellen er feil.

Neste gang du har data og lurer på sammenhengen -- prøv begge modelltyper, sammenlign $r^2$, og vurder hva som gir mening. Regresjon er ikke bare matematikk -- det er også sunn fornuft.`,
    },
    {
      id: '2p-2-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '2p-2-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på ekstrapolering og regresjon i praksis:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-2-3-n-quiz5-q0',
            task: 'Hva er den viktigste grunnen til å være forsiktig med ekstrapolering?',
            options: [
              { id: 'a', text: 'Modellen gjelder bare innenfor dataintervallet -- utenfor vet vi ikke om mønsteret holder', isCorrect: true },
              { id: 'b', text: 'Digitale verktøy gjør feil ved store tall', isCorrect: false },
              { id: 'c', text: 'Ekstrapolering gir alltid for høye verdier', isCorrect: false },
              { id: 'd', text: 'Korrelasjonskoeffisienten endrer seg utenfor dataintervallet', isCorrect: false },
            ],
            solution: 'Ekstrapolering er usikkert fordi vi ikke vet om mønsteret i dataene fortsetter utenfor det intervallet vi har observert. Virkeligheten kan endre seg på måter modellen ikke fanger opp.',
          },
          {
            id: '2p-2-3-n-quiz5-q1',
            task: 'En temperaturmodell $f(x) = 1{,}95x + 6{,}2$ er basert på data fra kl. 08 til kl. 16. Modellen gir $f(22) = 49{,}1$ °C for kl. 22. Hva er problemet?',
            options: [
              { id: 'a', text: 'Formelen er feil', isCorrect: false },
              { id: 'b', text: 'Vi mangler data', isCorrect: false },
              { id: 'c', text: '$r^2$ er for lav', isCorrect: false },
              { id: 'd', text: 'Vi ekstrapolerer langt utenfor dataintervallet -- temperaturen synker naturlig om kvelden', isCorrect: true },
            ],
            solution: 'Modellen er basert på data fra kl. 08 til 16, da temperaturen stiger. Kl. 22 er langt utenfor dette intervallet, og i virkeligheten synker temperaturen om kvelden. Ekstrapolering gir her et urealistisk svar.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-2-3-n-summary',
      type: 'text',
      content: `## Oppsummering

Regresjon er et kraftig verktøy for å finne mønstre i data og lage modeller vi kan bruke til å forstå sammenhenger og gjøre prediksjoner.

**Nøkkelbegreper du nå kjenner:**
- **Regresjon**: Finne funksjonen som passer best til datapunkter
- **Lineær regresjon**: $y = ax + b$ -- den beste rette linjen gjennom dataene
- **Eksponentiell regresjon**: $y = a \\cdot b^x$ -- den beste eksponentielle kurven
- **Minste kvadraters metode**: Minimerer summen av kvadrerte avvik fra modellen
- **Korrelasjonskoeffisienten $r$**: Måler styrken på lineær sammenheng ($-1$ til $1$)
- **$r^2$ (forklart varians)**: Andelen av variasjon forklart av modellen
- **Ekstrapolering**: Å bruke modellen utenfor dataintervallet -- vær forsiktig!

**Det viktigste du tar med deg:**
Data alene forteller deg ingenting -- du må finne mønsteret. Regresjon er verktøyet som avslører sammenhengen bak tallene. Men husk: en modell er bare så god som forutsetningene den bygger på. Velg modell med omhu, vurder $r^2$, og bruk sunn fornuft. Og vær spesielt forsiktig med å forutsi langt utenfor dataene du har.`,
    },
  ],
  exercises: [],
};

// Eksporter alle narrative kapitler i seksjon 2
export const MATEMATIKK_2P_NARRATIV_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_2P_2_1_NARRATIV,
  CHAPTER_2P_2_2_NARRATIV,
  CHAPTER_2P_2_3_NARRATIV,
];
