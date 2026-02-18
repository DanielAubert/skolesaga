/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 1T – NARRATIV VERSJON
 * Kapittel 4.1: Likningssett
 * Kapittel 4.2: Lineære ulikheter
 * Kapittel 4.3: Fortegnslinjer
 * Kapittel 4.4: Andregradsulikheter
 * Kapittel 4.5: Rasjonale ulikheter
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * å lese og lytte til, med quiz-spørsmål for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 4.1 NARRATIV: Likningssett
// ============================================================================

export const CHAPTER_1T_4_1_NARRATIV: TextbookChapter = {
  id: '1t-4-1-narrativ',
  courseId: '1t',
  chapterNumber: '4.1',
  title: 'Likningssett',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan du finner den ene kombinasjonen av verdier som får flere likninger til å stemme samtidig – grafisk, med innsetting og med addisjon.',
  estimatedMinutes: 55,
  competenceGoals: [
    'løse likningssett med to ukjente grafisk og algebraisk',
    'sette opp og løse likningssett fra praktiske situasjoner',
  ],
  linkedChapterId: '1t-4-1',
  content: [    {
      id: '1t-4-1-n-intro',
      type: 'text',
      content: `## Når én likning ikke er nok

Tenk deg at du vet at summen av to tall er 10. Kan du finne tallene? Vel, det kan være 3 og 7, eller 4 og 6, eller 2,5 og 7,5 – det finnes uendelig mange muligheter. Men hva om du i tillegg vet at forskjellen mellom de to tallene er 4? Nå har du plutselig to betingelser som må oppfylles samtidig, og det finnes bare én løsning: tallene må være 7 og 3.

Dette er kjernen i et **likningssett** – et sett med flere likninger som alle skal stemme på samme tid. Når vi har to ukjente, trenger vi to likninger. Når vi har tre ukjente, trenger vi tre. For å holde orden nummererer vi likningene med romertall: $I$ for den første og $II$ for den andre. I dette kapittelet skal vi lære tre ulike metoder for å løse slike sett: vi kan tegne grafer, vi kan sette inn uttrykk, og vi kan legge sammen likningene på en smart måte.`,
    },
    {
      id: '1t-4-1-n-section1',
      type: 'text',
      content: `## Grafisk løsning – å se svaret med egne øyne

Den mest intuitive metoden er å tegne begge likningene som rette linjer i et koordinatsystem. Hver likning beskriver en linje, og **løsningen er punktet der de to linjene krysser hverandre** – skjæringspunktet.

La oss si at vi har likningssettet $I$: $y + 4 = 2x$ og $II$: $2y - 1 = x$. For å tegne disse omformer vi til $y = ax + b$-form. Likning $I$ gir $y = 2x - 4$, og likning $II$ gir $y = \\frac{1}{2}x + \\frac{1}{2}$. Nå tegner vi begge linjene. Den første stiger bratt med stigningstall 2, den andre stiger slakere med stigningstall $\\frac{1}{2}$. Der de møtes, leser vi av punktet $(3, 2)$. Vi kan bekrefte: i likning $I$ gir $2 + 4 = 6$ og $2 \\cdot 3 = 6$, som stemmer. I likning $II$ gir $2 \\cdot 2 - 1 = 3$ og $x = 3$, som også stemmer.

Men hva om linjene aldri krysser? Dersom to linjer er **parallelle** – altså har samme stigningstall men ulik konstantledd – vil de aldri møtes. Da har likningssettet ingen løsning. Og hva om de to likningene egentlig beskriver *samme* linje? Da er de **sammenfallende**, og det finnes uendelig mange løsninger fordi alle punktene på linjen tilfredsstiller begge likningene.

Grafisk løsning er utmerket for å forstå hva som skjer, men den har en ulempe: det er vanskelig å lese av nøyaktige verdier fra en tegning, spesielt når svaret inneholder brøker. Derfor trenger vi algebraiske metoder.`,
    },
    {
      id: '1t-4-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-4-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på grafisk løsning av likningssett:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-4-1-n-quiz1-q0',
            task: 'Hva representerer løsningen av et likningssett med to ukjente grafisk?',
            options: [
              { id: 'a', text: 'Stigningstallet til linjene', isCorrect: false },
              { id: 'b', text: 'Nullpunktet til den ene linjen', isCorrect: false },
              { id: 'c', text: 'Skjæringspunktet mellom de to linjene', isCorrect: true },
              { id: 'd', text: 'Arealet mellom de to linjene', isCorrect: false },
            ],
            solution: 'Løsningen av et likningssett er den $x$- og $y$-verdien som oppfyller begge likningene samtidig. Grafisk er dette nettopp skjæringspunktet der de to linjene krysser hverandre.',
          },
          {
            id: '1t-4-1-n-quiz1-q1',
            task: 'Hva skjer når de to linjene i et likningssett er parallelle?',
            options: [
              { id: 'a', text: 'Likningssettet har uendelig mange løsninger', isCorrect: false },
              { id: 'b', text: 'Likningssettet har ingen løsning', isCorrect: true },
              { id: 'c', text: 'Likningssettet har nøyaktig to løsninger', isCorrect: false },
              { id: 'd', text: 'Linjene krysser hverandre i origo', isCorrect: false },
            ],
            solution: 'Parallelle linjer har samme stigningstall men ulikt konstantledd, og de krysser aldri hverandre. Derfor finnes det ingen $x$- og $y$-verdier som oppfyller begge likningene, og likningssettet har ingen løsning.',
          },
          {
            id: '1t-4-1-n-quiz1-q2',
            task: 'Vi har likningen $y + 4 = 2x$. Hva blir den omskrevet til $y = ax + b$-form?',
            options: [
              { id: 'a', text: '$y = 2x + 4$', isCorrect: false },
              { id: 'b', text: '$y = 2x - 4$', isCorrect: true },
              { id: 'c', text: '$y = -2x + 4$', isCorrect: false },
              { id: 'd', text: '$y = \\frac{1}{2}x - 4$', isCorrect: false },
            ],
            solution: 'Vi trekker fra 4 på begge sider: $y = 2x - 4$. Stigningstallet er $a = 2$ og konstantleddet er $b = -4$.',
          },
          {
            id: '1t-4-1-n-quiz1-q3',
            task: 'Når har et likningssett med to likninger uendelig mange løsninger?',
            options: [
              { id: 'a', text: 'Når linjene er parallelle', isCorrect: false },
              { id: 'b', text: 'Når begge likningene beskriver samme linje', isCorrect: true },
              { id: 'c', text: 'Når begge likningene går gjennom origo', isCorrect: false },
              { id: 'd', text: 'Når stigningstallene har motsatt fortegn', isCorrect: false },
            ],
            solution: 'Når de to likningene beskriver nøyaktig samme linje (sammenfallende linjer), oppfyller alle punktene på linjen begge likningene. Da har likningssettet uendelig mange løsninger.',
          },
        ],
      },
    },    {
      id: '1t-4-1-n-section2',
      type: 'text',
      content: `## Innsettingsmetoden – erstatt og løs

**Innsettingsmetoden** bygger på en enkel idé: hvis én likning forteller deg at $x$ er lik et uttrykk med $y$, kan du erstatte $x$ med det uttrykket i den andre likningen. Da får du en likning med bare én ukjent, som du kan løse direkte.

La oss ta likningssettet $I$: $x + 3y = 8$ og $II$: $2x - 2y = 8$. Vi starter med å løse likning $I$ for $x$ fordi $x$ har koeffisient 1, noe som gjør det enkelt: $x = -3y + 8$. Nå erstatter vi $x$ i likning $II$ med dette uttrykket: $2(-3y + 8) - 2y = 8$. Vi løser opp parentesen: $-6y + 16 - 2y = 8$, som gir $-8y = -8$, altså $y = 1$. Til slutt setter vi $y = 1$ tilbake i uttrykket for $x$: $x = -3 \\cdot 1 + 8 = 5$.

Notasjonen $I \\to II$ betyr at vi bruker informasjon fra likning $I$ i likning $II$. Noen ganger skriver vi $II^*$ for å vise at likning $II$ er omformet.

Et godt tips er å alltid velge den variabelen som er **enklest å isolere** – typisk den som allerede har koeffisient 1 eller $-1$. For eksempel i likningssettet $2x + 5y = 9$ og $3x - y = 5$ er det lurtest å løse den andre likningen for $y$ (koeffisient $-1$): $y = 3x - 5$. Deretter setter vi inn: $2x + 5(3x - 5) = 9$, som gir $17x = 34$ og $x = 2$, og deretter $y = 3 \\cdot 2 - 5 = 1$.`,
    },
    {
      id: '1t-4-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-4-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på innsettingsmetoden:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-4-1-n-quiz2-q0',
            task: 'Gitt likningssettet $x = 2y$ og $3x + y = 14$. Hva er verdien av $y$?',
            options: [
              { id: 'a', text: '$y = 4$', isCorrect: false },
              { id: 'b', text: '$y = 2$', isCorrect: true },
              { id: 'c', text: '$y = 7$', isCorrect: false },
              { id: 'd', text: '$y = 3$', isCorrect: false },
            ],
            solution: 'Vi setter $x = 2y$ inn i den andre likningen: $3 \\cdot 2y + y = 14$, som gir $6y + y = 7y = 14$, altså $y = 2$.',
          },
          {
            id: '1t-4-1-n-quiz2-q1',
            task: 'Hvilken variabel er det lurtest å isolere i likningen $2x + 5y = 9$ og $3x - y = 5$?',
            options: [
              { id: 'a', text: '$x$ i den første likningen', isCorrect: false },
              { id: 'b', text: '$x$ i den andre likningen', isCorrect: false },
              { id: 'c', text: '$y$ i den andre likningen', isCorrect: true },
              { id: 'd', text: '$y$ i den første likningen', isCorrect: false },
            ],
            solution: 'Vi velger variabelen med koeffisient $1$ eller $-1$ fordi det gir enklest uttrykk. I $3x - y = 5$ har $y$ koeffisient $-1$, så vi isolerer $y$: $y = 3x - 5$.',
          },
          {
            id: '1t-4-1-n-quiz2-q2',
            task: 'Med $y = 3x - 5$ satt inn i $2x + 5y = 9$, hva blir likningen?',
            options: [
              { id: 'a', text: '$2x + 5(3x - 5) = 9$, altså $17x - 25 = 9$', isCorrect: true },
              { id: 'b', text: '$2x + 5 \\cdot 3x - 5 = 9$, altså $17x - 5 = 9$', isCorrect: false },
              { id: 'c', text: '$2(3x - 5) + 5y = 9$, altså $6x - 10 + 5y = 9$', isCorrect: false },
              { id: 'd', text: '$2x + 15x + 5 = 9$, altså $17x = 4$', isCorrect: false },
            ],
            solution: 'Vi erstatter $y$ med $(3x - 5)$: $2x + 5(3x - 5) = 9$. Løser opp parentesen: $2x + 15x - 25 = 9$, altså $17x - 25 = 9$.',
          },
        ],
      },
    },    {
      id: '1t-4-1-n-section3',
      type: 'text',
      content: `## Addisjonsmetoden – eliminér en ukjent

**Addisjonsmetoden** utnytter at vi kan legge sammen likningene. Siden begge sidene av en likning er like, kan vi trygt legge venstre side av $I$ sammen med venstre side av $II$ og sette det lik summen av høyresidene. Trikset er å sørge for at én av variablene forsvinner i prosessen.

Ta likningssettet $I$: $2x + 4y = 14$ og $II$: $-2x - 2y = -8$. Legg merke til at $I$ har $+2x$ og $II$ har $-2x$. Legger vi sammen, kansellerer $x$-leddene hverandre: $(2x + 4y) + (-2x - 2y) = 14 + (-8)$, som forenkles til $2y = 6$, altså $y = 3$. Så setter vi $y = 3$ inn i én av likningene for å finne $x$: $2x + 12 = 14$ gir $x = 1$.

Men hva gjør du når variablene ikke kansellerer av seg selv? Da **multipliserer** du én eller begge likningene med passende tall. For eksempel: $I$: $x + 3y = 8$ og $II$: $2x - 2y = 8$. Her ganger vi likning $I$ med $(-2)$ og får $-2x - 6y = -16$. Nå legger vi denne sammen med $II$: $(2x - 2y) + (-2x - 6y) = 8 + (-16)$, som gir $-8y = -8$ og $y = 1$. Da er $x = 5$.

Noen ganger må vi gange begge likningene. Har du $3x + 5y = 2$ og $2x - 2y = -4$, kan du gange den første med 2 og den andre med 3 for å få $6x$ i begge. Deretter trekker du den ene fra den andre: $2I - 3II$ gir $16y = 16$, altså $y = 1$ og $x = -1$.`,
    },
    {
      id: '1t-4-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-4-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på addisjonsmetoden:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-4-1-n-quiz3-q0',
            task: 'Vi har likningssettet $3x + y = 6$ og $2x - y = -4$. Hva skjer om vi legger sammen de to likningene?',
            options: [
              { id: 'a', text: 'Vi får $5x + 2y = 2$', isCorrect: false },
              { id: 'b', text: 'Vi får $5x = 2$', isCorrect: true },
              { id: 'c', text: 'Vi får $x + 2y = 10$', isCorrect: false },
              { id: 'd', text: 'Vi får $5x = 10$', isCorrect: false },
            ],
            solution: 'Legger vi sammen venstresidene: $3x + y + 2x - y = 5x$ (y-leddene kansellerer). Høyresidene: $6 + (-4) = 2$. Vi får $5x = 2$, altså $x = \\frac{2}{5}$.',
          },
          {
            id: '1t-4-1-n-quiz3-q1',
            task: 'Vi har $I$: $x + 3y = 8$ og $II$: $2x - 2y = 8$. Hva bør vi gange likning $I$ med for at $x$-leddene skal kansellere ved addisjon?',
            options: [
              { id: 'a', text: '$2$', isCorrect: false },
              { id: 'b', text: '$-2$', isCorrect: true },
              { id: 'c', text: '$3$', isCorrect: false },
              { id: 'd', text: '$-1$', isCorrect: false },
            ],
            solution: 'Likning $II$ har $2x$. For at $x$-leddene skal kansellere trenger vi $-2x$ i likning $I$. Vi ganger $I$ med $-2$: $-2(x + 3y) = -2x - 6y = -16$. Nå har vi $-2x$ og $2x$ som kansellerer ved addisjon.',
          },
          {
            id: '1t-4-1-n-quiz3-q2',
            task: 'Hva er hovedideen bak addisjonsmetoden?',
            options: [
              { id: 'a', text: 'Å tegne begge likningene som linjer', isCorrect: false },
              { id: 'b', text: 'Å løse én likning for én variabel og sette inn', isCorrect: false },
              { id: 'c', text: 'Å multiplisere likningene slik at én variabel forsvinner ved addisjon', isCorrect: true },
              { id: 'd', text: 'Å dele begge likningene med den samme konstanten', isCorrect: false },
            ],
            solution: 'Addisjonsmetoden går ut på å multiplisere én eller begge likningene med passende tall slik at koeffisientene til én variabel blir like store med motsatt fortegn. Når vi legger likningene sammen, forsvinner den variabelen.',
          },
          {
            id: '1t-4-1-n-quiz3-q3',
            task: 'Vi har $I$: $2x + 4y = 14$ og $II$: $-2x - 2y = -8$. Hva blir $y$ etter addisjon?',
            options: [
              { id: 'a', text: '$y = 2$', isCorrect: false },
              { id: 'b', text: '$y = 1$', isCorrect: false },
              { id: 'c', text: '$y = 3$', isCorrect: true },
              { id: 'd', text: '$y = 4$', isCorrect: false },
            ],
            solution: 'Vi legger sammen: $(2x + 4y) + (-2x - 2y) = 14 + (-8)$, som gir $2y = 6$, altså $y = 3$.',
          },
        ],
      },
    },    {
      id: '1t-4-1-n-section4',
      type: 'text',
      content: `## Tre ukjente – samme prinsipp, flere steg

Metoden kan utvides til likningssett med **tre ukjente** – typisk $x$, $y$ og $z$. Vi trenger da tre likninger, og strategien er å redusere problemet steg for steg til noe vi allerede kan løse.

Tenk på det som å skrelle av lag. Først bruker vi én likning til å uttrykke én variabel ved hjelp av de to andre. Deretter setter vi dette uttrykket inn i de to gjenværende likningene. Nå har vi to likninger med to ukjente – og det vet vi jo allerede hvordan vi løser.

La oss ta et eksempel: $I$: $x + 3y + z = 4$, $II$: $2x - 2y - z = 1$, $III$: $2x - y + 2z = -6$. Vi løser likning $I$ for $x$: $x = 4 - 3y - z$. Så setter vi dette inn i likning $II$: $2(4 - 3y - z) - 2y - z = 1$, som forenkles til $-8y - 3z = -7$. Og inn i likning $III$: $2(4 - 3y - z) - y + 2z = -6$, som gir $-7y = -14$, altså $y = 2$. Med $y = 2$ i den forenklede likningen finner vi $z = -3$, og til slutt $x = 4 - 3 \\cdot 2 - (-3) = 1$.

Det krever noen flere steg, men prinsippet er nøyaktig det samme som med to ukjente: reduser antall variabler ett steg om gangen til du kan regne ut svaret direkte.`,
    },
    {
      id: '1t-4-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-4-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på likningssett med tre ukjente:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-4-1-n-quiz4-q0',
            task: 'Hvor mange likninger trenger du for å løse et likningssett med tre ukjente?',
            options: [
              { id: 'a', text: 'To likninger', isCorrect: false },
              { id: 'b', text: 'Fire likninger', isCorrect: false },
              { id: 'c', text: 'Én likning', isCorrect: false },
              { id: 'd', text: 'Tre likninger', isCorrect: true },
            ],
            solution: 'For å finne verdien av $n$ ukjente trenger vi minst $n$ uavhengige likninger. Med tre ukjente trenger vi altså tre likninger.',
          },
          {
            id: '1t-4-1-n-quiz4-q1',
            task: 'Hva er strategien for å løse tre likninger med tre ukjente?',
            options: [
              { id: 'a', text: 'Legge alle tre likningene sammen på én gang', isCorrect: false },
              { id: 'b', text: 'Redusere til to likninger med to ukjente, og deretter til én likning med én ukjent', isCorrect: true },
              { id: 'c', text: 'Tegne tre linjer og finne fellessnittet', isCorrect: false },
              { id: 'd', text: 'Sette alle tre variablene lik hverandre', isCorrect: false },
            ],
            solution: 'Vi reduserer steg for steg: først bruker vi én likning til å eliminere én variabel fra de to andre, slik at vi får to likninger med to ukjente. Deretter løser vi dette systemet som vanlig.',
          },
          {
            id: '1t-4-1-n-quiz4-q2',
            task: 'Gitt $I$: $x + 3y + z = 4$ løst for $x$: $x = 4 - 3y - z$. Hva blir likning $II$: $2x - 2y - z = 1$ etter innsetting?',
            options: [
              { id: 'a', text: '$8 - 6y - 2z - 2y - z = 1$, altså $-8y - 3z = -7$', isCorrect: true },
              { id: 'b', text: '$8 - 3y - z - 2y - z = 1$, altså $-5y - 2z = -7$', isCorrect: false },
              { id: 'c', text: '$4 - 3y - z - 2y - z = 1$, altså $-5y - 2z = -3$', isCorrect: false },
              { id: 'd', text: '$2 - 6y - 2z - 2y - z = 1$, altså $-8y - 3z = -1$', isCorrect: false },
            ],
            solution: 'Vi setter $x = 4 - 3y - z$ inn i $2x - 2y - z = 1$: $2(4 - 3y - z) - 2y - z = 1$. Vi løser opp: $8 - 6y - 2z - 2y - z = 1$, som forenkles til $-8y - 3z = -7$.',
          },
        ],
      },
    },    {
      id: '1t-4-1-n-section5',
      type: 'text',
      content: `## Fra virkeligheten til likningssett

Likningssett blir virkelig nyttige når vi bruker dem på **praktiske problemer**. Nøkkelen er å oversette den hverdagslige situasjonen til matematiske likninger.

Tenk deg at Mari handler for moren sin to ganger. Første gang kjøper hun 5 kg poteter og 2 kg gulrøtter for 58 kroner. Andre gang kjøper hun 3 kg poteter og 5 kg gulrøtter for 50 kroner. Prisene er de samme begge gangene. Hva koster ett kilo av hver?

Vi lar $x$ være prisen per kilo poteter og $y$ prisen per kilo gulrøtter. Første handletur gir $I$: $5x + 2y = 58$. Andre handletur gir $II$: $3x + 5y = 50$. Vi bruker addisjonsmetoden: ganger $I$ med 5 og $II$ med $(-2)$ for å eliminere $y$-leddene. Da får vi $25x + 10y = 290$ og $-6x - 10y = -100$. Summen gir $19x = 190$, altså $x = 10$. Setter vi inn i likning $I$: $50 + 2y = 58$, som gir $y = 4$. Poteter koster 10 kr/kg og gulrøtter 4 kr/kg.

Et annet eksempel: en taxisjåfør tar et fast oppstartsgebyr pluss en pris per kilometer. Kåre brukte taxien 2 ganger i januar og kjørte 30 km totalt for 700 kroner, og 3 ganger i februar med 60 km for 1350 kroner. Med $x$ som oppstartsgebyr og $y$ som kilometerpris får vi $2x + 30y = 700$ og $3x + 60y = 1350$. Løser vi dette finner vi at oppstartsgebyret er 50 kroner og kilometerprisen er 20 kroner. Evnen til å oversette ord til likninger er en ferdighet du vil bruke igjen og igjen.`,
    },
    {
      id: '1t-4-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-4-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på praktiske likningssett:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-4-1-n-quiz5-q0',
            task: 'En butikk selger epler og bananer. 3 epler og 2 bananer koster 21 kr. 1 eple og 4 bananer koster 17 kr. Hva koster ett eple?',
            options: [
              { id: 'a', text: '4 kr', isCorrect: false },
              { id: 'b', text: '6 kr', isCorrect: false },
              { id: 'c', text: '5 kr', isCorrect: true },
              { id: 'd', text: '7 kr', isCorrect: false },
            ],
            solution: 'Vi setter opp: $I$: $3x + 2y = 21$ og $II$: $x + 4y = 17$. Fra $II$: $x = 17 - 4y$. Inn i $I$: $3(17 - 4y) + 2y = 21$, altså $51 - 12y + 2y = 21$, som gir $-10y = -30$, $y = 3$. Da er $x = 17 - 4 \\cdot 3 = 5$. Epler koster 5 kr.',
          },
          {
            id: '1t-4-1-n-quiz5-q1',
            task: 'Mari kjøper 5 kg poteter og 2 kg gulrøtter for 58 kr. Hvilken likning beskriver dette med $x$ = pris per kg poteter og $y$ = pris per kg gulrøtter?',
            options: [
              { id: 'a', text: '$5x + 2y = 58$', isCorrect: true },
              { id: 'b', text: '$5y + 2x = 58$', isCorrect: false },
              { id: 'c', text: '$x + y = 58$', isCorrect: false },
              { id: 'd', text: '$5x \\cdot 2y = 58$', isCorrect: false },
            ],
            solution: '5 kg poteter til pris $x$ koster $5x$, og 2 kg gulrøtter til pris $y$ koster $2y$. Totalen er $5x + 2y = 58$.',
          },
          {
            id: '1t-4-1-n-quiz5-q2',
            task: 'En taxi tar oppstartsgebyr $x$ kr pluss $y$ kr per km. Kåre betalte 700 kr for 2 turer og 30 km totalt. Hvilken likning passer?',
            options: [
              { id: 'a', text: '$2x + 30y = 700$', isCorrect: true },
              { id: 'b', text: '$30x + 2y = 700$', isCorrect: false },
              { id: 'c', text: '$x + y = 700$', isCorrect: false },
              { id: 'd', text: '$2x \\cdot 30y = 700$', isCorrect: false },
            ],
            solution: 'Kåre betalte oppstartsgebyr 2 ganger ($2x$) og kjørte 30 km ($30y$). Totalkostnaden gir $2x + 30y = 700$.',
          },
        ],
      },
    },    {
      id: '1t-4-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi lært tre metoder for å løse likningssett, og alle har sin plass i verktøykassen din.

**Grafisk løsning** handler om å tegne begge likningene som linjer og finne skjæringspunktet. Metoden gir god visuell forståelse, men kan være upresis for verdier med desimaler eller brøker. Husk at parallelle linjer betyr ingen løsning, og sammenfallende linjer betyr uendelig mange løsninger.

**Innsettingsmetoden** går ut på å løse én likning for én variabel og sette uttrykket inn i den andre likningen. Velg alltid den variabelen som er enklest å isolere – gjerne den med koeffisient 1 eller $-1$.

**Addisjonsmetoden** går ut på å multiplisere likningene slik at én variabel får like koeffisienter med motsatt fortegn, for deretter å legge likningene sammen slik at variabelen forsvinner. Denne metoden er spesielt effektiv når ingen variabel er lett å isolere.

For likningssett med **tre ukjente** bruker vi de samme prinsippene, men vi reduserer først fra tre likninger og tre ukjente ned til to likninger og to ukjente. Og i **praktiske oppgaver** er nøkkelen å la ukjente størrelser være variabler og oversette betingelsene i teksten til matematiske likninger.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.2 NARRATIV: Lineære ulikheter
// ============================================================================

export const CHAPTER_1T_4_2_NARRATIV: TextbookChapter = {
  id: '1t-4-2-narrativ',
  courseId: '1t',
  chapterNumber: '4.2',
  title: 'Lineære ulikheter',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om ulikhetstegn, når du må snu dem, og hvordan du skriver svaret som et intervall – alt du trenger for å mestre førstegradsulikheter.',
  estimatedMinutes: 30,
  competenceGoals: [
    'løyse ulikskapar av første grad',
  ],
  linkedChapterId: '1t-4-2',
  content: [    {
      id: '1t-4-2-n-intro',
      type: 'text',
      content: `## Fra likhetstegn til ulikhetstegn

Til nå har du jobbet med likninger – uttrykk der to sider er *like*. Men i matematikken, og i hverdagen, handler det ofte om at noe er *større* eller *mindre* enn noe annet. Du vil vite: når er funksjonen positiv? Hvor stor kan $x$ være uten at broen kollapser? Hvor mange timer må du jobbe for å tjene *minst* 5000 kroner?

Velkommen til **ulikheter**. I dette kapittelet skal vi lære å løse førstegradsulikheter – altså ulikheter der $x$ bare opptrer i førstepotens. Du vil oppdage at prosessen ligner veldig på å løse vanlige likninger, men med én viktig fallgruve som vi skal bli godt kjent med.`,
    },
    {
      id: '1t-4-2-n-section1',
      type: 'text',
      content: `## Ulikhetstegnene og intervallnotasjon

La oss starte med selve tegnene. Vi har fire stykker: $<$ betyr «mindre enn», $>$ betyr «større enn», $\\leq$ betyr «mindre enn eller lik», og $\\geq$ betyr «større enn eller lik». Forskjellen mellom $<$ og $\\leq$ er om grenseverdien selv er inkludert eller ikke.

Når vi løser en ulikhet, finner vi ikke én bestemt verdi av $x$ – vi finner et helt sett med verdier som oppfyller kravet. Dette settet kaller vi **løsningsmengden**, og vi skriver den med **intervallnotasjon**. For eksempel betyr $x < 3$ at alle tall mindre enn 3 er gyldige. Vi skriver dette som $x \\in \\langle \\leftarrow, 3 \\rangle$, der vinkelparentesene $\\langle \\rangle$ betyr at endepunktet *ikke* er med.

Hva om $x \\geq 5$? Da er 5 selv inkludert, og vi skriver $x \\in [5, \\rightarrow \\rangle$. Hakeparentesen $[$ betyr at endepunktet *er* med. En enkel huskeregel: hakeparentes = lukket = inkludert, vinkelparentes = åpen = ikke inkludert. Pilen $\\rightarrow$ betyr at intervallet fortsetter i det uendelige.

La oss ta et eksempel. Vi løser $3x + 9 < 12$. Vi trekker fra 9 på begge sider: $3x < 3$. Vi deler med 3: $x < 1$. Løsningsmengden er $L = \\langle \\leftarrow, 1 \\rangle$. Her gikk alt akkurat som i en vanlig likning – men det er fordi vi ikke ganget eller delte med et negativt tall.`,
    },
    {
      id: '1t-4-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-4-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på ulikhetstegn og intervallnotasjon:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-4-2-n-quiz1-q0',
            task: 'Hva er løsningsmengden til ulikheten $2x < 8$?',
            options: [
              { id: 'a', text: '$x \\in [4, \\rightarrow \\rangle$', isCorrect: false },
              { id: 'b', text: '$x \\in \\langle \\leftarrow, 4 \\rangle$', isCorrect: true },
              { id: 'c', text: '$x \\in \\langle \\leftarrow, 4]$', isCorrect: false },
              { id: 'd', text: '$x \\in \\langle 4, \\rightarrow \\rangle$', isCorrect: false },
            ],
            solution: 'Vi deler begge sider med 2 (positivt tall, så ulikhetstegnet beholdes): $x < 4$. Siden $x$ skal være strengt mindre enn 4, bruker vi vinkelparentes ved 4. Svaret er $x \\in \\langle \\leftarrow, 4 \\rangle$.',
          },
          {
            id: '1t-4-2-n-quiz1-q1',
            task: 'Hva betyr hakeparentesen $[$ i intervallet $[5, \\rightarrow \\rangle$?',
            options: [
              { id: 'a', text: 'At 5 ikke er med i løsningsmengden', isCorrect: false },
              { id: 'b', text: 'At 5 er med i løsningsmengden', isCorrect: true },
              { id: 'c', text: 'At intervallet starter ved 0', isCorrect: false },
              { id: 'd', text: 'At intervallet er tomt', isCorrect: false },
            ],
            solution: 'Hakeparentes $[$ betyr at endepunktet er inkludert (lukket). Altså er $x = 5$ med i løsningsmengden. Dette tilsvarer $x \\geq 5$.',
          },
          {
            id: '1t-4-2-n-quiz1-q2',
            task: 'Hvilket ulikhetstegn svarer til intervallet $\\langle \\leftarrow, 3]$?',
            options: [
              { id: 'a', text: '$x < 3$', isCorrect: false },
              { id: 'b', text: '$x > 3$', isCorrect: false },
              { id: 'c', text: '$x \\leq 3$', isCorrect: true },
              { id: 'd', text: '$x \\geq 3$', isCorrect: false },
            ],
            solution: 'Vinkelparentes ved $\\leftarrow$ betyr at intervallet strekker seg mot minus uendelig. Hakeparentes $]$ ved 3 betyr at 3 er inkludert. Altså $x \\leq 3$.',
          },
          {
            id: '1t-4-2-n-quiz1-q3',
            task: 'Hvorfor bruker vi alltid vinkelparentes ved uendelig ($\\rightarrow$ eller $\\leftarrow$)?',
            options: [
              { id: 'a', text: 'Fordi det ser penere ut', isCorrect: false },
              { id: 'b', text: 'Fordi uendelig ikke er et tall vi kan nå eller inkludere', isCorrect: true },
              { id: 'c', text: 'Fordi hakeparentes bare brukes ved 0', isCorrect: false },
              { id: 'd', text: 'Fordi intervallet er åpent i den retningen', isCorrect: false },
            ],
            solution: 'Uendelig ($\\infty$) er ikke et reelt tall, men et konsept for at tallene fortsetter uten stopp. Siden vi ikke kan «nå» uendelig, kan vi heller ikke inkludere det, og bruker vinkelparentes.',
          },
        ],
      },
    },    {
      id: '1t-4-2-n-section2',
      type: 'text',
      content: `## Den store regelen – snu tegnet ved negative tall

Her kommer den ene regelen som skiller ulikheter fra likninger, og den er helt avgjørende: **når du ganger eller deler med et negativt tall på begge sider av en ulikhet, må du snu ulikhetstegnet**.

Hvorfor? Tenk på tallinjen. Vi vet at $2 < 5$. Men hva skjer om vi ganger begge sider med $-1$? Da får vi $-2$ og $-5$. Og $-2$ er *større* enn $-5$, altså $-2 > -5$. Ganging med et negativt tall speiler tallene gjennom null, og da snur rekkefølgen seg.

La oss ta et konkret eksempel: $-5x > 20$. Vi må dele med $-5$ for å isolere $x$. Fordi vi deler med et negativt tall, snur vi ulikhetstegnet: $x < -4$. Løsningsmengden er $L = \\langle \\leftarrow, -4 \\rangle$.

Et annet eksempel: $-\\frac{x - 2}{5} \\geq 3$. Vi ganger med $-1$ og snur tegnet: $\\frac{x - 2}{5} \\leq -3$. Så ganger vi med 5: $x - 2 \\leq -15$. Og legger til 2: $x \\leq -13$. Løsningsmengden er $L = \\langle \\leftarrow, -13]$.

Mange gjør feilen å glemme å snu tegnet. En god vane er å alltid spørre deg selv: «Ganger eller deler jeg med noe negativt?» Hvis ja – snu tegnet.`,
    },
    {
      id: '1t-4-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-4-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på regelen om negative tall:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-4-2-n-quiz2-q0',
            task: 'Hva blir løsningen av $-10x < 50$?',
            options: [
              { id: 'a', text: '$x < -5$', isCorrect: false },
              { id: 'b', text: '$x < 5$', isCorrect: false },
              { id: 'c', text: '$x > -5$', isCorrect: true },
              { id: 'd', text: '$x > 5$', isCorrect: false },
            ],
            solution: 'Vi deler med $-10$ på begge sider. Fordi vi deler med et negativt tall, snur vi ulikhetstegnet: $x > \\frac{50}{-10} = -5$. Løsningen er $x > -5$.',
          },
          {
            id: '1t-4-2-n-quiz2-q1',
            task: 'Hvorfor snur vi ulikhetstegnet når vi ganger med et negativt tall?',
            options: [
              { id: 'a', text: 'Fordi negative tall er mindre enn null', isCorrect: false },
              { id: 'b', text: 'Fordi ganging med negativt tall speiler tallene gjennom null og snur rekkefølgen', isCorrect: true },
              { id: 'c', text: 'Fordi vi alltid snur tegnet når vi ganger', isCorrect: false },
              { id: 'd', text: 'Fordi negative tall ikke kan sammenlignes', isCorrect: false },
            ],
            solution: 'Ganging med et negativt tall speiler alle tall gjennom null på tallinjen. For eksempel er $2 < 5$, men $-2 > -5$. Rekkefølgen snur seg, og derfor må ulikhetstegnet snus.',
          },
          {
            id: '1t-4-2-n-quiz2-q2',
            task: 'Løs $-\\frac{x-2}{5} \\geq 3$. Hva er løsningsmengden?',
            options: [
              { id: 'a', text: '$x \\in [-13, \\rightarrow \\rangle$', isCorrect: false },
              { id: 'b', text: '$x \\in \\langle \\leftarrow, -13 \\rangle$', isCorrect: false },
              { id: 'c', text: '$x \\in \\langle \\leftarrow, -13]$', isCorrect: true },
              { id: 'd', text: '$x \\in \\langle -13, \\rightarrow \\rangle$', isCorrect: false },
            ],
            solution: 'Vi ganger med $-1$ og snur tegnet: $\\frac{x-2}{5} \\leq -3$. Ganger med 5: $x - 2 \\leq -15$. Legger til 2: $x \\leq -13$. Løsningsmengden er $x \\in \\langle \\leftarrow, -13]$.',
          },
        ],
      },
    },    {
      id: '1t-4-2-n-section3',
      type: 'text',
      content: `## Ulikheter med $x$ på begge sider

Ofte dukker $x$ opp på begge sider av ulikheten, og da må vi samle alle $x$-leddene på én side og tallene på den andre – akkurat som med vanlige likninger.

Ta ulikheten $-3x - 1 > 2x + 4$. Vi samler $x$-ledd på venstre side ved å trekke fra $2x$ på begge sider: $-5x - 1 > 4$. Så legger vi til 1: $-5x > 5$. Vi deler med $-5$ og snur tegnet: $x < -1$. Løsningsmengden er $L = \\langle \\leftarrow, -1 \\rangle$.

Et annet eksempel: $\\frac{x}{2} - 1 > \\frac{x}{3} + 2$. Når vi har brøker er det lurt å gange hele ulikheten med fellesnevneren for å bli kvitt dem. Fellesnevneren til 2 og 3 er 6. Vi ganger alt med 6: $3x - 6 > 2x + 12$. Deretter samler vi $x$-ledd: $x > 18$. Her gikk det greit – vi ganget med positivt tall (6), så tegnet ble stående.

Hva med $\\frac{x}{2} - 5x \\leq 18$? Vi finner fellesnevner: $\\frac{x}{2} - \\frac{10x}{2} = \\frac{-9x}{2} \\leq 18$. Vi ganger med 2: $-9x \\leq 36$. Vi deler med $-9$ og snur tegnet: $x \\geq -4$. Løsningsmengden er $L = [-4, \\rightarrow \\rangle$.

Prinsippet er det samme hver gang: isoler $x$, vær oppmerksom på fortegn, og skriv svaret som et intervall.`,
    },
    {
      id: '1t-4-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-4-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på ulikheter med $x$ på begge sider:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-4-2-n-quiz3-q0',
            task: 'Løs ulikheten $5 - 2x \\geq 1$. Hva er løsningsmengden?',
            options: [
              { id: 'a', text: '$x \\in \\langle \\leftarrow, 2 \\rangle$', isCorrect: false },
              { id: 'b', text: '$x \\in \\langle 2, \\rightarrow \\rangle$', isCorrect: false },
              { id: 'c', text: '$x \\in [2, \\rightarrow \\rangle$', isCorrect: false },
              { id: 'd', text: '$x \\in \\langle \\leftarrow, 2]$', isCorrect: true },
            ],
            solution: 'Vi trekker fra 5 på begge sider: $-2x \\geq -4$. Deler med $-2$ og snur tegnet: $x \\leq 2$. Løsningsmengden er $x \\in \\langle \\leftarrow, 2]$.',
          },
          {
            id: '1t-4-2-n-quiz3-q1',
            task: 'Løs $-3x - 1 > 2x + 4$. Hva er løsningsmengden?',
            options: [
              { id: 'a', text: '$x \\in \\langle \\leftarrow, -1 \\rangle$', isCorrect: true },
              { id: 'b', text: '$x \\in \\langle -1, \\rightarrow \\rangle$', isCorrect: false },
              { id: 'c', text: '$x \\in \\langle \\leftarrow, 1 \\rangle$', isCorrect: false },
              { id: 'd', text: '$x \\in \\langle 1, \\rightarrow \\rangle$', isCorrect: false },
            ],
            solution: 'Trekk fra $2x$: $-5x - 1 > 4$. Legg til 1: $-5x > 5$. Del med $-5$ og snu tegnet: $x < -1$. Løsningsmengden er $x \\in \\langle \\leftarrow, -1 \\rangle$.',
          },
          {
            id: '1t-4-2-n-quiz3-q2',
            task: 'Løs $\\frac{x}{2} - 1 > \\frac{x}{3} + 2$. Hva er første steg?',
            options: [
              { id: 'a', text: 'Dele begge sider med $x$', isCorrect: false },
              { id: 'b', text: 'Gange hele ulikheten med fellesnevneren 6', isCorrect: true },
              { id: 'c', text: 'Snu ulikhetstegnet', isCorrect: false },
              { id: 'd', text: 'Sette $x = 0$ for å prøve', isCorrect: false },
            ],
            solution: 'Når vi har brøker, ganger vi hele ulikheten med fellesnevneren for å kvitte oss med brøkene. Fellesnevneren til 2 og 3 er 6. Vi ganger alt med 6 (positivt, så tegnet beholdes): $3x - 6 > 2x + 12$.',
          },
        ],
      },
    },    {
      id: '1t-4-2-n-section4',
      type: 'text',
      content: `## Ulikheter med brøker

Brøker i ulikheter kan se skremmende ut, men teknikken er den samme som vi allerede kan. Det viktigste er å gange med fellesnevner for å kvitte deg med brøkene, og å passe på fortegnet til det du ganger med.

Ta ulikheten $\\frac{2x - 2}{3} \\geq 4$. Vi ganger begge sider med 3 (positivt, så tegnet beholdes): $2x - 2 \\geq 12$. Legger til 2: $2x \\geq 14$. Deler med 2: $x \\geq 7$. Løsningsmengden er $L = [7, \\rightarrow \\rangle$.

Hva med $\\frac{-x - 2}{2} \\geq \\frac{x + 3}{4}$? Vi ganger med fellesnevneren 4 på begge sider: $2(-x - 2) \\geq x + 3$. Vi løser opp: $-2x - 4 \\geq x + 3$. Samler $x$-ledd: $-3x \\geq 7$. Deler med $-3$ og snur tegnet: $x \\leq -\\frac{7}{3}$. Løsningsmengden er $L = \\langle \\leftarrow, -\\frac{7}{3}]$.

Noe som er viktig å huske: $x$ kan være positiv, negativ eller null. Vi vet ikke fortegnet til $x$. Derfor er det **ikke lov** å gange med eller dele på et uttrykk som inneholder $x$ (med mindre vi vet at det er positivt eller negativt). Dette blir spesielt viktig i de kommende kapitlene om andregradsulikheter og rasjonale ulikheter.`,
    },
    {
      id: '1t-4-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-4-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på ulikheter med brøker:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-4-2-n-quiz4-q0',
            task: 'Hva er løsningsmengden til $\\frac{3x - 2}{3} \\geq 1$?',
            options: [
              { id: 'a', text: '$x \\in [1, \\rightarrow \\rangle$', isCorrect: false },
              { id: 'b', text: '$x \\in \\langle \\leftarrow, \\frac{5}{3}]$', isCorrect: false },
              { id: 'c', text: '$x \\in [\\frac{5}{3}, \\rightarrow \\rangle$', isCorrect: true },
              { id: 'd', text: '$x \\in \\langle \\frac{5}{3}, \\rightarrow \\rangle$', isCorrect: false },
            ],
            solution: 'Ganger med 3: $3x - 2 \\geq 3$. Legger til 2: $3x \\geq 5$. Deler med 3: $x \\geq \\frac{5}{3}$. Løsningsmengden er $x \\in [\\frac{5}{3}, \\rightarrow \\rangle$.',
          },
          {
            id: '1t-4-2-n-quiz4-q1',
            task: 'Løs $\\frac{x}{2} - 5x \\leq 18$. Hva er løsningsmengden?',
            options: [
              { id: 'a', text: '$x \\in \\langle \\leftarrow, -4]$', isCorrect: false },
              { id: 'b', text: '$x \\in [-4, \\rightarrow \\rangle$', isCorrect: true },
              { id: 'c', text: '$x \\in \\langle -4, \\rightarrow \\rangle$', isCorrect: false },
              { id: 'd', text: '$x \\in \\langle \\leftarrow, -4 \\rangle$', isCorrect: false },
            ],
            solution: 'Felles nevner: $\\frac{x}{2} - \\frac{10x}{2} = \\frac{-9x}{2} \\leq 18$. Ganger med 2: $-9x \\leq 36$. Deler med $-9$ og snur tegnet: $x \\geq -4$. Løsningsmengden er $x \\in [-4, \\rightarrow \\rangle$.',
          },
          {
            id: '1t-4-2-n-quiz4-q2',
            task: 'Løs $\\frac{-x-2}{2} \\geq \\frac{x+3}{4}$. Hva er fellesnevneren vi bør gange med?',
            options: [
              { id: 'a', text: '$2$', isCorrect: false },
              { id: 'b', text: '$8$', isCorrect: false },
              { id: 'c', text: '$4$', isCorrect: true },
              { id: 'd', text: '$6$', isCorrect: false },
            ],
            solution: 'Nevnerne er 2 og 4. Fellesnevneren er 4 (det minste tallet som er delelig med både 2 og 4). Vi ganger hele ulikheten med 4: $2(-x-2) \\geq x + 3$.',
          },
        ],
      },
    },    {
      id: '1t-4-2-n-section5',
      type: 'text',
      content: `## Vanlige feil og hvordan du unngår dem

La oss avslutte med de klassiske feilene du bør være på vakt mot.

Den vanligste feilen er å **glemme å snu ulikhetstegnet** når du ganger eller deler med et negativt tall. Husk: hver gang du multipliserer eller dividerer med noe negativt, snu tegnet. Skriv det gjerne som en kommentar i regningen din – «deler med $-3$, snur tegnet» – så glemmer du det ikke.

En annen vanlig feil er å blande sammen hakeparentes og vinkelparentes i intervallnotasjonen. Huskeregelen: $<$ og $>$ gir vinkelparentes (åpen), mens $\\leq$ og $\\geq$ gir hakeparentes (lukket) ved det aktuelle endepunktet. Ved uendelig ($\\rightarrow$ eller $\\leftarrow$) bruker vi alltid vinkelparentes, fordi uendelig ikke er et tall du kan «nå».

En tredje feil er å tro at du kan gange begge sider av en ulikhet med $x$. Siden vi ikke vet om $x$ er positiv eller negativ, vet vi ikke om tegnet skal snus. Denne situasjonen løser vi med fortegnsskjema, som vi skal lære om i neste kapittel.

Til slutt: sjekk alltid svaret ditt ved å sette inn en verdi som ligger i løsningsmengden. Hvis du finner $x > 3$, prøv med $x = 5$ og se at den opprinnelige ulikheten stemmer.`,
    },
    {
      id: '1t-4-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-4-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på vanlige feil i ulikheter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-4-2-n-quiz5-q0',
            task: 'Hva gjør vi med ulikhetstegnet når vi ganger begge sider med $-1$?',
            options: [
              { id: 'a', text: 'Vi beholder det som det er', isCorrect: false },
              { id: 'b', text: 'Vi snur det', isCorrect: true },
              { id: 'c', text: 'Vi fjerner det og bruker likhetstegn', isCorrect: false },
              { id: 'd', text: 'Det kommer an på verdien av $x$', isCorrect: false },
            ],
            solution: 'Når vi ganger (eller deler) med et negativt tall, må vi snu ulikhetstegnet. For eksempel: $-2 > -5$ stemmer, men ganger vi med $-1$ får vi $2 < 5$, som også stemmer – tegnet ble snudd.',
          },
          {
            id: '1t-4-2-n-quiz5-q1',
            task: 'Hvorfor kan vi ikke gange begge sider av en ulikhet med $x$?',
            options: [
              { id: 'a', text: 'Fordi $x$ alltid er negativ', isCorrect: false },
              { id: 'b', text: 'Fordi vi ikke vet om $x$ er positiv eller negativ', isCorrect: true },
              { id: 'c', text: 'Fordi $x$ er en variabel', isCorrect: false },
              { id: 'd', text: 'Fordi det er regelforbud i matematikken', isCorrect: false },
            ],
            solution: 'Siden vi ikke vet fortegnet til $x$, vet vi heller ikke om ulikhetstegnet skal snus eller ikke. Derfor kan vi ikke trygt gange med $x$. Denne situasjonen løser vi med fortegnsskjema.',
          },
          {
            id: '1t-4-2-n-quiz5-q2',
            task: 'Hvordan kan du sjekke at $x > 3$ er riktig svar på en ulikhet?',
            options: [
              { id: 'a', text: 'Sette inn $x = 3$ og se at ulikheten stemmer', isCorrect: false },
              { id: 'b', text: 'Sette inn en verdi som $x = 5$ i den opprinnelige ulikheten og sjekke', isCorrect: true },
              { id: 'c', text: 'Tegne grafen til ulikheten', isCorrect: false },
              { id: 'd', text: 'Det er ikke mulig å sjekke svaret', isCorrect: false },
            ],
            solution: 'Vi velger en verdi i løsningsmengden, for eksempel $x = 5$ (som er $> 3$), og setter den inn i den opprinnelige ulikheten. Hvis den stemmer, har vi et godt tegn. Vi kan også prøve en verdi utenfor, f.eks. $x = 1$, og sjekke at den ikke stemmer.',
          },
        ],
      },
    },    {
      id: '1t-4-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Førstegradsulikheter løses på nesten samme måte som likninger – du samler $x$-ledd på én side og tall på den andre, og isolerer $x$.

Den ene store forskjellen er regelen om **negative tall**: når du ganger eller deler med et negativt tall på begge sider, **må du snu ulikhetstegnet**. Dette er fordi multiplikasjon med et negativt tall speiler tallene på tallinjen, slik at rekkefølgen snur.

Svaret skriver du som et **intervall**. Bruk hakeparentes $[$ eller $]$ når endepunktet er med ($\\leq$ eller $\\geq$), og vinkelparentes $\\langle$ eller $\\rangle$ når det ikke er med ($<$ eller $>$). Ved uendelig bruker du alltid vinkelparentes.

Til slutt: husk at du **ikke kan gange med et uttrykk som inneholder $x$** med mindre du vet fortegnet. Dette begrensningen er nettopp grunnen til at vi trenger fortegnsskjema – temaet for neste kapittel.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.3 NARRATIV: Fortegnslinjer
// ============================================================================

export const CHAPTER_1T_4_3_NARRATIV: TextbookChapter = {
  id: '1t-4-3-narrativ',
  courseId: '1t',
  chapterNumber: '4.3',
  title: 'Fortegnslinjer',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om fortegnslinjer og fortegnsskjema – det visuelle verktøyet som avslører om et uttrykk er positivt, negativt eller null for alle verdier av x.',
  estimatedMinutes: 35,
  competenceGoals: [
    'bruke fortegnsskjema til å løyse ulikskapar',
  ],
  linkedChapterId: '1t-4-3',
  content: [    {
      id: '1t-4-3-n-intro',
      type: 'text',
      content: `## Et kart over pluss og minus

I forrige kapittel lærte du å løse enkle ulikheter ved å isolere $x$ på den ene siden. Men hva gjør du når uttrykket har flere faktorer som alle inneholder $x$? Du kan ikke bare gange med $x$ fordi du ikke vet om det er positivt eller negativt. Her kommer **fortegnslinjer** og **fortegnsskjema** til unnsetning – et visuelt verktøy som viser deg fortegnet til et uttrykk for *alle* verdier av $x$ på én gang.

Tenk på en fortegnslinje som et kart over tallinjen. For hvert punkt langs linjen forteller den deg: er uttrykket positivt her, negativt her, eller akkurat null? Når du vet dette for hver enkelt faktor, kan du kombinere dem til å forstå hele produktet.`,
    },
    {
      id: '1t-4-3-n-section1',
      type: 'text',
      content: `## Slik tegner du en fortegnslinje

En **fortegnslinje** viser fortegnet til et uttrykk langs hele tallinjen. La oss starte med uttrykket $(x + 3)$.

Først finner vi **nullpunktet** – altså der uttrykket er lik null: $x + 3 = 0$ gir $x = -3$. For $x$-verdier mindre enn $-3$ er uttrykket negativt (for eksempel: $-5 + 3 = -2$), og for $x$-verdier større enn $-3$ er det positivt (for eksempel: $0 + 3 = 3$). Vi tegner en stiplet linje for negativ, markerer nullpunktet med en 0, og en heltrukket linje for positiv.

Hva med en **konstant** som $-3$? Denne er alltid negativ, uansett hva $x$ er. Fortegnslinjen er stiplet hele veien. Konstanten $4$ er alltid positiv – heltrukket hele veien.

Og hva med $(-x)$? Nullpunktet er $x = 0$. For $x < 0$ er $-x$ positivt (for eksempel $-(-2) = 2$), og for $x > 0$ er $-x$ negativt. Det er altså «omvendt» sammenlignet med $x$.

Legg merke til mønsteret: for et lineært uttrykk $(ax + b)$ der $a > 0$ går fortegnslinjen fra minus til pluss ved nullpunktet. Dersom $a < 0$ går den fra pluss til minus. Konstanten $a$ foran bestemmer retningen.`,
    },
    {
      id: '1t-4-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-4-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på fortegnslinjer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-4-3-n-quiz1-q0',
            task: 'Uttrykket $(x - 5)$ er negativt. Hvilke $x$-verdier gjelder dette for?',
            options: [
              { id: 'a', text: '$x < 5$', isCorrect: true },
              { id: 'b', text: '$x = 5$', isCorrect: false },
              { id: 'c', text: '$x > 5$', isCorrect: false },
              { id: 'd', text: 'Alle $x$-verdier', isCorrect: false },
            ],
            solution: 'Nullpunktet til $(x - 5)$ er $x = 5$. Siden koeffisienten foran $x$ er positiv, går fortegnslinjen fra negativ til positiv ved nullpunktet. Altså er uttrykket negativt for $x < 5$.',
          },
          {
            id: '1t-4-3-n-quiz1-q1',
            task: 'Hva er nullpunktet til uttrykket $(x + 3)$?',
            options: [
              { id: 'a', text: '$x = 3$', isCorrect: false },
              { id: 'b', text: '$x = -3$', isCorrect: true },
              { id: 'c', text: '$x = 0$', isCorrect: false },
              { id: 'd', text: '$x = -\\frac{1}{3}$', isCorrect: false },
            ],
            solution: 'Nullpunktet finner vi ved å sette uttrykket lik null: $x + 3 = 0$, som gir $x = -3$.',
          },
          {
            id: '1t-4-3-n-quiz1-q2',
            task: 'Hva er fortegnet til $(-x)$ for $x > 0$?',
            options: [
              { id: 'a', text: 'Positivt', isCorrect: false },
              { id: 'b', text: 'Negativt', isCorrect: true },
              { id: 'c', text: 'Null', isCorrect: false },
              { id: 'd', text: 'Udefinert', isCorrect: false },
            ],
            solution: 'Når $x > 0$, for eksempel $x = 2$, er $-x = -2$, som er negativt. Fortegnslinjen til $(-x)$ er altså negativ for positive $x$-verdier – det er «omvendt» sammenlignet med $x$.',
          },
          {
            id: '1t-4-3-n-quiz1-q3',
            task: 'Hva er fortegnslinjen til en konstant som $-3$?',
            options: [
              { id: 'a', text: 'Positiv for $x > 3$ og negativ for $x < 3$', isCorrect: false },
              { id: 'b', text: 'Alltid positiv', isCorrect: false },
              { id: 'c', text: 'Alltid negativ', isCorrect: true },
              { id: 'd', text: 'Null overalt', isCorrect: false },
            ],
            solution: 'Konstanten $-3$ avhenger ikke av $x$ og er alltid negativ, uansett hva $x$ er. Fortegnslinjen er stiplet (negativ) hele veien.',
          },
        ],
      },
    },    {
      id: '1t-4-3-n-section2',
      type: 'text',
      content: `## Fortegnsskjema – kombinere flere faktorer

Kraften i fortegnslinjer viser seg når vi setter dem sammen i et **fortegnsskjema**. Et fortegnsskjema er en tabell der vi har én rad for hver faktor og én rad for produktet. Tallinjens kritiske punkter (nullpunktene) markeres øverst, og vi leser av fortegnet i hvert intervall.

La oss ta uttrykket $f(x) = -3(x - 6)$. Vi har to faktorer: konstanten $-3$ og uttrykket $(x - 6)$. Fortegnslinjen til $-3$ er alltid negativ. Fortegnslinjen til $(x - 6)$ har nullpunkt ved $x = 6$: negativ for $x < 6$, positiv for $x > 6$.

Nå multipliserer vi fortegnene rad for rad. For $x < 6$: $(-) \\cdot (-) = +$. Ved $x = 6$: $(-) \\cdot 0 = 0$. For $x > 6$: $(-) \\cdot (+) = -$. Altså er $f(x)$ positiv for $x < 6$, null ved $x = 6$, og negativ for $x > 6$.

Huskereglene for å kombinere fortegn er de samme som for vanlig multiplikasjon: pluss ganger pluss er pluss, minus ganger minus er pluss, og pluss ganger minus er minus. Null ganger hva som helst er null.`,
    },
    {
      id: '1t-4-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-4-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på fortegnsskjema:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-4-3-n-quiz2-q0',
            task: 'Hva er fortegnet til $-2(x + 3)$ når $x = -5$?',
            options: [
              { id: 'a', text: 'Negativt', isCorrect: false },
              { id: 'b', text: 'Udefinert', isCorrect: false },
              { id: 'c', text: 'Null', isCorrect: false },
              { id: 'd', text: 'Positivt', isCorrect: true },
            ],
            solution: 'Vi setter inn: $-2(-5 + 3) = -2 \\cdot (-2) = 4$, som er positivt. Alternativt: nullpunktet er $x = -3$. For $x < -3$ er $(x+3)$ negativ, og $-2 \\cdot (\\text{negativ}) = \\text{positiv}$.',
          },
          {
            id: '1t-4-3-n-quiz2-q1',
            task: 'Hva er resultatet av å multiplisere fortegnene $(-)$ og $(-)$?',
            options: [
              { id: 'a', text: 'Negativt', isCorrect: false },
              { id: 'b', text: 'Positivt', isCorrect: true },
              { id: 'c', text: 'Null', isCorrect: false },
              { id: 'd', text: 'Udefinert', isCorrect: false },
            ],
            solution: 'Minus ganger minus gir pluss. Huskeregelen: like fortegn gir pluss, ulike fortegn gir minus.',
          },
          {
            id: '1t-4-3-n-quiz2-q2',
            task: 'Vi har $f(x) = -3(x-6)$. For hvilke $x$-verdier er $f(x)$ positiv?',
            options: [
              { id: 'a', text: '$x > 6$', isCorrect: false },
              { id: 'b', text: '$x < 6$', isCorrect: true },
              { id: 'c', text: '$x = 6$', isCorrect: false },
              { id: 'd', text: 'Ingen $x$-verdier', isCorrect: false },
            ],
            solution: 'Nullpunktet er $x = 6$. For $x < 6$: $(x-6)$ er negativ, og $-3 \\cdot (\\text{negativ}) = \\text{positiv}$. For $x > 6$: $(x-6)$ er positiv, og $-3 \\cdot (\\text{positiv}) = \\text{negativ}$. Altså er $f(x)$ positiv for $x < 6$.',
          },
        ],
      },
    },    {
      id: '1t-4-3-n-section3',
      type: 'text',
      content: `## Faktorisering – nøkkelen til fortegnsskjema

For å bruke fortegnsskjema må vi skrive uttrykket som et **produkt av faktorer**. Noen ganger er det opplagt – for eksempel er $-3(x-6)$ allerede faktorisert. Men andre ganger må vi faktorisere selv.

Ta uttrykket $-2x + 12$. Vi kan trekke ut den felles faktoren $-2$: $-2x + 12 = -2(x - 6)$. Nå har vi to faktorer: $-2$ og $(x - 6)$. Fortegnsskjemaet viser at uttrykket er positivt for $x < 6$ og negativt for $x > 6$.

Et annet eksempel: $-5x - 10$. Vi trekker ut $-5$: $-5(x + 2)$. Nullpunktet er $x = -2$. For $x < -2$: $(-) \\cdot (-) = +$, altså positivt. For $x > -2$: $(-) \\cdot (+) = -$, altså negativt.

Faktoriseringen er viktig fordi fortegnsskjemaet krever at vi kan se hver enkelt faktor for seg. Uten faktorisering kan vi ikke sette opp skjemaet korrekt. Heldigvis er faktorisering av lineære uttrykk ganske rett frem – du trekker ut den største felles faktoren og ser hva som er igjen.

Tenk alltid: «Kan jeg skrive dette som et produkt?» Hvis ja, har du nøkkelen til fortegnsskjemaet.`,
    },
    {
      id: '1t-4-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-4-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på faktorisering:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-4-3-n-quiz3-q0',
            task: 'Hva er den faktoriserte formen av $-6x + 18$?',
            options: [
              { id: 'a', text: '$-3(2x + 6)$', isCorrect: false },
              { id: 'b', text: '$-6(x - 3)$', isCorrect: true },
              { id: 'c', text: '$-6(x + 3)$', isCorrect: false },
              { id: 'd', text: '$6(x - 3)$', isCorrect: false },
            ],
            solution: 'Vi trekker ut $-6$: $-6x + 18 = -6(x - 3)$. Vi kan verifisere: $-6 \\cdot x + (-6) \\cdot (-3) = -6x + 18$. Stemmer.',
          },
          {
            id: '1t-4-3-n-quiz3-q1',
            task: 'Faktoriser $-5x - 10$.',
            options: [
              { id: 'a', text: '$-5(x - 2)$', isCorrect: false },
              { id: 'b', text: '$5(x + 2)$', isCorrect: false },
              { id: 'c', text: '$-5(x + 2)$', isCorrect: true },
              { id: 'd', text: '$-10(x + 1)$', isCorrect: false },
            ],
            solution: 'Vi trekker ut $-5$: $-5x - 10 = -5(x + 2)$. Sjekk: $-5 \\cdot x + (-5) \\cdot 2 = -5x - 10$. Stemmer.',
          },
          {
            id: '1t-4-3-n-quiz3-q2',
            task: 'Hvorfor er faktorisering viktig for fortegnsskjema?',
            options: [
              { id: 'a', text: 'Fordi det gjør uttrykket kortere', isCorrect: false },
              { id: 'b', text: 'Fordi fortegnsskjemaet krever at vi ser hver faktor for seg', isCorrect: true },
              { id: 'c', text: 'Fordi det fjerner brøker', isCorrect: false },
              { id: 'd', text: 'Fordi det finnes bare én måte å faktorisere på', isCorrect: false },
            ],
            solution: 'Fortegnsskjemaet krever at uttrykket er skrevet som et produkt av faktorer. Bare da kan vi bestemme fortegnet til hver faktor separat og multiplisere dem for å finne fortegnet til hele uttrykket.',
          },
        ],
      },
    },    {
      id: '1t-4-3-n-section4',
      type: 'text',
      content: `## Løse ulikheter med fortegnsskjema

Nå kommer den store payoffen: vi kan bruke fortegnsskjema til å **løse ulikheter**. Istedenfor å manipulere ulikheten algebraisk, setter vi opp et fortegnsskjema for uttrykket og leser av der uttrykket har riktig fortegn.

La oss løse $-5x - 10 < 0$. Vi faktoriserer: $-5(x + 2) < 0$. Vi setter opp fortegnsskjema med faktorene $-5$ og $(x + 2)$. Nullpunktet er $x = -2$. For $x < -2$: $(-) \\cdot (-) = +$. For $x > -2$: $(-) \\cdot (+) = -$. Vi ønsker å finne der uttrykket er *negativt*, altså der produktraden viser minus. Svaret er $x > -2$, altså $x \\in \\langle -2, \\rightarrow \\rangle$.

Hva om vi istedenfor hadde spurt: $-5x - 10 \\geq 0$? Da ønsker vi positivt *eller* null. Fra skjemaet er produktet positivt for $x < -2$ og null for $x = -2$. Svaret er $x \\leq -2$, altså $x \\in \\langle \\leftarrow, -2]$.

Legg merke til at vi fikk to «komplementære» svar – den ene ulikheten dekker nøyaktig det intervallet den andre ikke dekker. Dette er fordi et tall enten er negativt, null eller positivt – det finnes ingen andre muligheter.`,
    },
    {
      id: '1t-4-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-4-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på å løse ulikheter med fortegnsskjema:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-4-3-n-quiz4-q0',
            task: 'Fra et fortegnsskjema finner vi at $f(x) = -2(x+1)$ er positivt for $x < -1$ og negativt for $x > -1$. Hva er løsningen på $-2(x+1) > 0$?',
            options: [
              { id: 'a', text: '$x \\in \\langle -1, \\rightarrow \\rangle$', isCorrect: false },
              { id: 'b', text: '$x \\in \\langle \\leftarrow, -1 \\rangle$', isCorrect: true },
              { id: 'c', text: '$x \\in \\langle \\leftarrow, -1]$', isCorrect: false },
              { id: 'd', text: '$x \\in [-1, \\rightarrow \\rangle$', isCorrect: false },
            ],
            solution: 'Vi ønsker å finne der uttrykket er strengt positivt ($> 0$). Fra fortegnsskjemaet er uttrykket positivt for $x < -1$. Siden det er streng ulikhet ($>$ og ikke $\\geq$), inkluderer vi ikke $x = -1$ (der er uttrykket null). Svaret er $x \\in \\langle \\leftarrow, -1 \\rangle$.',
          },
          {
            id: '1t-4-3-n-quiz4-q1',
            task: 'Hva er løsningen på $-5(x+2) < 0$?',
            options: [
              { id: 'a', text: '$x \\in \\langle \\leftarrow, -2 \\rangle$', isCorrect: false },
              { id: 'b', text: '$x \\in \\langle -2, \\rightarrow \\rangle$', isCorrect: true },
              { id: 'c', text: '$x \\in \\langle \\leftarrow, -2]$', isCorrect: false },
              { id: 'd', text: '$x \\in [-2, \\rightarrow \\rangle$', isCorrect: false },
            ],
            solution: 'Nullpunktet er $x = -2$. For $x < -2$: $(-) \\cdot (-) = +$ (positivt). For $x > -2$: $(-) \\cdot (+) = -$ (negativt). Vi ønsker negativt ($< 0$), altså $x > -2$. Svaret er $x \\in \\langle -2, \\rightarrow \\rangle$.',
          },
          {
            id: '1t-4-3-n-quiz4-q2',
            task: 'Hva er løsningen på $-5x - 10 \\geq 0$?',
            options: [
              { id: 'a', text: '$x \\in \\langle -2, \\rightarrow \\rangle$', isCorrect: false },
              { id: 'b', text: '$x \\in \\langle \\leftarrow, -2 \\rangle$', isCorrect: false },
              { id: 'c', text: '$x \\in \\langle \\leftarrow, -2]$', isCorrect: true },
              { id: 'd', text: '$x \\in [-2, \\rightarrow \\rangle$', isCorrect: false },
            ],
            solution: 'Vi faktoriserer: $-5(x+2) \\geq 0$. Nullpunkt $x = -2$. For $x < -2$: $(-) \\cdot (-) = +$ (positivt). For $x > -2$: $(-) \\cdot (+) = -$ (negativt). Vi ønsker positivt eller null ($\\geq 0$): $x \\leq -2$. Svaret er $x \\in \\langle \\leftarrow, -2]$.',
          },
        ],
      },
    },    {
      id: '1t-4-3-n-section5',
      type: 'text',
      content: `## Fortegnsskjema med flere kritiske punkter

Når uttrykket har flere faktorer med forskjellige nullpunkter, får vi flere kritiske punkter på tallinjen – og flere intervaller å sjekke.

Tenk deg uttrykket $2(x + 4)(x - 2)$. Faktorene er $2$ (alltid positiv), $(x+4)$ med nullpunkt $-4$, og $(x-2)$ med nullpunkt $2$. Vi setter opp fortegnsskjema med kritiske punkter $-4$ og $2$ og tre intervaller: $x < -4$, $-4 < x < 2$, og $x > 2$.

For $x < -4$: $(+) \\cdot (-) \\cdot (-) = +$. For $-4 < x < 2$: $(+) \\cdot (+) \\cdot (-) = -$. For $x > 2$: $(+) \\cdot (+) \\cdot (+) = +$. Uttrykket er null ved $x = -4$ og $x = 2$.

Vil vi løse $2(x+4)(x-2) \\leq 0$, ser vi fra skjemaet at produktet er negativt eller null for $-4 \\leq x \\leq 2$, altså $x \\in [-4, 2]$.

Denne teknikken skalerer til så mange faktorer du vil. Jo flere faktorer, jo flere nullpunkter, og jo flere intervaller. Men prinsippet er alltid det samme: finn nullpunktene, sett opp en rad per faktor, multipliser fortegnene, og les av svaret. I neste kapittel skal vi bruke dette til å løse andregradsulikheter.`,
    },
    {
      id: '1t-4-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-4-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på fortegnsskjema med flere faktorer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-4-3-n-quiz5-q0',
            task: 'Vi vet at $5(x-2) \\leq 0$ og $5$ er positiv. Hva kan vi si om $(x-2)$?',
            options: [
              { id: 'a', text: '$(x-2)$ er positiv', isCorrect: false },
              { id: 'b', text: 'Vi kan ikke avgjøre fortegnet', isCorrect: false },
              { id: 'c', text: '$(x-2)$ er negativ eller null', isCorrect: true },
              { id: 'd', text: '$(x-2)$ er null', isCorrect: false },
            ],
            solution: 'Produktet $5 \\cdot (x-2) \\leq 0$. Siden $5 > 0$ (alltid positiv), må $(x-2)$ være negativ eller null for at produktet skal være $\\leq 0$. Altså $x - 2 \\leq 0$, som gir $x \\leq 2$.',
          },
          {
            id: '1t-4-3-n-quiz5-q1',
            task: 'For uttrykket $2(x+4)(x-2)$, hva er fortegnet når $-4 < x < 2$?',
            options: [
              { id: 'a', text: 'Positivt', isCorrect: false },
              { id: 'b', text: 'Negativt', isCorrect: true },
              { id: 'c', text: 'Null', isCorrect: false },
              { id: 'd', text: 'Udefinert', isCorrect: false },
            ],
            solution: 'For $-4 < x < 2$: $2$ er positiv, $(x+4)$ er positiv (fordi $x > -4$), og $(x-2)$ er negativ (fordi $x < 2$). Produktet: $(+) \\cdot (+) \\cdot (-) = -$, altså negativt.',
          },
          {
            id: '1t-4-3-n-quiz5-q2',
            task: 'Hva er løsningen på $2(x+4)(x-2) \\leq 0$?',
            options: [
              { id: 'a', text: '$x \\in \\langle -4, 2 \\rangle$', isCorrect: false },
              { id: 'b', text: '$x \\in [-4, 2]$', isCorrect: true },
              { id: 'c', text: '$x \\in \\langle -\\infty, -4 \\rangle \\cup \\langle 2, \\infty \\rangle$', isCorrect: false },
              { id: 'd', text: '$x \\in \\langle -\\infty, -4] \\cup [2, \\infty \\rangle$', isCorrect: false },
            ],
            solution: 'Uttrykket er negativt for $-4 < x < 2$ og null ved $x = -4$ og $x = 2$. Siden ulikheten er $\\leq 0$ (negativt eller null), er løsningen $x \\in [-4, 2]$.',
          },
        ],
      },
    },    {
      id: '1t-4-3-n-summary',
      type: 'text',
      content: `## Oppsummering

En **fortegnslinje** viser fortegnet til et uttrykk for alle verdier av $x$. For et lineært uttrykk $(ax + b)$ finner du nullpunktet, og fortegnet skifter der. Konstanter har samme fortegn overalt.

Et **fortegnsskjema** setter sammen flere fortegnslinjer i en tabell. Hvert intervall mellom de kritiske punktene (nullpunktene) får sitt fortegn bestemt av produktregelen: pluss ganger pluss er pluss, minus ganger minus er pluss, og pluss ganger minus er minus. Null ganger noe gir alltid null.

For å bruke fortegnsskjema må uttrykket være **faktorisert** – skrevet som et produkt av enklere uttrykk. Faktorisering av lineære uttrykk gjøres ved å trekke ut den største felles faktoren.

For å **løse en ulikhet** med fortegnsskjema setter du opp skjemaet for uttrykket på venstre side (med null på høyre side), og leser av hvilke intervaller som har det fortegnet ulikheten krever. Denne metoden er spesielt kraftfull for ulikheter med flere faktorer, og den er grunnlaget for å løse andregradsulikheter og rasjonale ulikheter.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.4 NARRATIV: Andregradsulikheter
// ============================================================================

export const CHAPTER_1T_4_4_NARRATIV: TextbookChapter = {
  id: '1t-4-4-narrativ',
  courseId: '1t',
  chapterNumber: '4.4',
  title: 'Andregradsulikheter',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan du bruker nullpunktsfaktorisering og fortegnsskjema til å finne ut nøyaktig hvor en andregradsfunksjon er positiv eller negativ.',
  estimatedMinutes: 35,
  competenceGoals: [
    'løyse ulikskapar av andre grad',
  ],
  linkedChapterId: '1t-4-4',
  content: [    {
      id: '1t-4-4-n-intro',
      type: 'text',
      content: `## Parabolen over og under x-aksen

Tenk deg en parabel – grafen til en andregradsfunksjon. Den svinger oppover eller nedover og krysser kanskje $x$-aksen i ett eller to punkter. Men en andregradsulikhet spør ikke bare *hvor* parabelen krysser aksen, den spør: *hvor er parabelen over aksen? Og hvor er den under?*

I dette kapittelet skal vi svare på nettopp dette spørsmålet. Verktøyene vi trenger er **nullpunktsfaktorisering** fra kapittel 2 og **fortegnsskjema** fra forrige kapittel. Kombinasjonen av disse to gir oss en elegant og systematisk metode for å løse enhver andregradsulikhet.`,
    },
    {
      id: '1t-4-4-n-section1',
      type: 'text',
      content: `## Fremgangsmåten – fire steg

La oss starte med oppskriften, og så skal vi gå gjennom hvert steg grundig med eksempler.

**Steg 1:** Sørg for at ulikheten har null på den ene siden. Flytt eventuelt alle ledd til venstre side slik at du har noe $\\gtrless 0$.

**Steg 2:** **Faktoriser** andregradsuttrykket. Du kan bruke abc-formelen til å finne nullpunktene $x_1$ og $x_2$, og deretter skrive $ax^2 + bx + c = a(x - x_1)(x - x_2)$. Denne teknikken kalles **nullpunktsfaktorisering**.

**Steg 3:** Sett opp et **fortegnsskjema** med én rad for hver faktor. Markér de kritiske punktene (nullpunktene) og bestem fortegnet i hvert intervall.

**Steg 4:** **Les av svaret** fra fortegnsskjemaet. Se hvilke intervaller som har det fortegnet ulikheten krever (positivt, negativt, eller null), og skriv løsningsmengden med intervallnotasjon.

Denne oppskriften fungerer for alle andregradsulikheter – uansett om parabelen åpner oppover eller nedover, og uansett om nullpunktene er pene heltall eller stygge brøker.`,
    },
    {
      id: '1t-4-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-4-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på fremgangsmåten for andregradsulikheter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-4-4-n-quiz1-q0',
            task: 'Hva er det første steget når du skal løse en andregradsulikhet?',
            options: [
              { id: 'a', text: 'Sørge for at du har null på den ene siden', isCorrect: true },
              { id: 'b', text: 'Tegne grafen', isCorrect: false },
              { id: 'c', text: 'Bruke abc-formelen direkte', isCorrect: false },
              { id: 'd', text: 'Dele begge sider med koeffisienten foran $x^2$', isCorrect: false },
            ],
            solution: 'Det første steget er å flytte alle ledd til én side slik at du har formen «uttrykk $\\gtrless 0$». Deretter kan du faktorisere og bruke fortegnsskjema.',
          },
          {
            id: '1t-4-4-n-quiz1-q1',
            task: 'Hva kalles teknikken med å skrive $ax^2 + bx + c = a(x - x_1)(x - x_2)$?',
            options: [
              { id: 'a', text: 'Konjugatsetningen', isCorrect: false },
              { id: 'b', text: 'Nullpunktsfaktorisering', isCorrect: true },
              { id: 'c', text: 'Kvadratsetningen', isCorrect: false },
              { id: 'd', text: 'Polynomdivisjon', isCorrect: false },
            ],
            solution: 'Nullpunktsfaktorisering innebærer å finne nullpunktene $x_1$ og $x_2$ (for eksempel med abc-formelen) og deretter skrive uttrykket som $a(x - x_1)(x - x_2)$.',
          },
          {
            id: '1t-4-4-n-quiz1-q2',
            task: 'I hvilken rekkefølge utføres de fire stegene for å løse andregradsulikheter?',
            options: [
              { id: 'a', text: 'Faktoriser, sett opp fortegnsskjema, flytt ledd, les av svar', isCorrect: false },
              { id: 'b', text: 'Flytt ledd til null, faktoriser, fortegnsskjema, les av svar', isCorrect: true },
              { id: 'c', text: 'Les av svar, faktoriser, fortegnsskjema, flytt ledd', isCorrect: false },
              { id: 'd', text: 'Fortegnsskjema, flytt ledd, faktoriser, les av svar', isCorrect: false },
            ],
            solution: 'Rekkefølgen er: (1) flytt alt til én side slik at du har null, (2) faktoriser uttrykket, (3) sett opp fortegnsskjema, (4) les av løsningsmengden fra skjemaet.',
          },
        ],
      },
    },    {
      id: '1t-4-4-n-section2',
      type: 'text',
      content: `## Eksempel: mellom to nullpunkter

La oss løse $x^2 - 12x + 35 < 0$. Uttrykket har allerede null på høyre side, så vi hopper rett til faktorisering. Vi leter etter to tall som har sum 12 og produkt 35. Tallene 5 og 7 passer perfekt: $x^2 - 12x + 35 = (x - 5)(x - 7)$.

Nå setter vi opp fortegnsskjema. Kritiske punkter: $x = 5$ og $x = 7$. Vi har tre intervaller og to faktorer.

For $(x - 5)$: negativ for $x < 5$, null ved $x = 5$, positiv for $x > 5$. For $(x - 7)$: negativ for $x < 7$, null ved $x = 7$, positiv for $x > 7$.

Produktet i de tre intervallene: for $x < 5$ er $(-) \\cdot (-) = +$, for $5 < x < 7$ er $(+) \\cdot (-) = -$, og for $x > 7$ er $(+) \\cdot (+) = +$.

Vi ønsker å finne der uttrykket er *negativt* ($< 0$). Fra skjemaet ser vi at dette skjer for $5 < x < 7$. Løsningsmengden er $x \\in \\langle 5, 7 \\rangle$.

Grafisk tilsvarer dette intervallet der parabelen befinner seg *under* $x$-aksen – altså mellom de to nullpunktene. Siden koeffisienten foran $x^2$ er positiv (parabelen åpner oppover), er uttrykket negativt nettopp i dette midtintervallet.`,
    },
    {
      id: '1t-4-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-4-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på andregradsulikheter mellom nullpunkter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-4-4-n-quiz2-q0',
            task: 'Hva er løsningen på $(x - 2)(x + 3) > 0$?',
            options: [
              { id: 'a', text: '$x \\in \\langle -3, 2 \\rangle$', isCorrect: false },
              { id: 'b', text: '$x \\in [-3, 2]$', isCorrect: false },
              { id: 'c', text: '$x \\in \\langle -\\infty, -3 \\rangle \\cup \\langle 2, \\infty \\rangle$', isCorrect: true },
              { id: 'd', text: '$x \\in \\langle 2, \\infty \\rangle$', isCorrect: false },
            ],
            solution: 'Nullpunkter: $x = 2$ og $x = -3$. For $x < -3$: $(-)(-)= +$. For $-3 < x < 2$: $(+)(-) = -$. For $x > 2$: $(+)(+) = +$. Produktet er positivt for $x < -3$ eller $x > 2$.',
          },
          {
            id: '1t-4-4-n-quiz2-q1',
            task: 'Faktoriser $x^2 - 12x + 35$.',
            options: [
              { id: 'a', text: '$(x - 5)(x + 7)$', isCorrect: false },
              { id: 'b', text: '$(x - 5)(x - 7)$', isCorrect: true },
              { id: 'c', text: '$(x + 5)(x + 7)$', isCorrect: false },
              { id: 'd', text: '$(x - 3)(x - 12)$', isCorrect: false },
            ],
            solution: 'Vi leter etter to tall med sum 12 og produkt 35. Tallene $5$ og $7$ passer: $5 + 7 = 12$ og $5 \\cdot 7 = 35$. Altså $x^2 - 12x + 35 = (x-5)(x-7)$.',
          },
          {
            id: '1t-4-4-n-quiz2-q2',
            task: 'For $x^2 - 12x + 35 < 0$, altså $(x-5)(x-7) < 0$, hva er løsningsmengden?',
            options: [
              { id: 'a', text: '$x \\in \\langle -\\infty, 5 \\rangle \\cup \\langle 7, \\infty \\rangle$', isCorrect: false },
              { id: 'b', text: '$x \\in [5, 7]$', isCorrect: false },
              { id: 'c', text: '$x \\in \\langle 5, 7 \\rangle$', isCorrect: true },
              { id: 'd', text: '$x \\in \\langle 7, \\infty \\rangle$', isCorrect: false },
            ],
            solution: 'Produktet er negativt der faktorene har ulikt fortegn, altså for $5 < x < 7$. Med streng ulikhet ($<$) inkluderer vi ikke endepunktene. Løsningen er $x \\in \\langle 5, 7 \\rangle$.',
          },
        ],
      },
    },    {
      id: '1t-4-4-n-section3',
      type: 'text',
      content: `## Negativ koeffisient foran $x^2$

Hva skjer når koeffisienten foran $x^2$ er negativ? Da åpner parabelen *nedover*, og fortegnsmønsteret blir speilvendt. Men med fortegnsskjema trenger du ikke huske dette – skjemaet tar seg av det automatisk.

La oss løse $-2x^2 + 10x - 12 \\geq 0$. Først faktoriserer vi ut $-2$: $-2(x^2 - 5x + 6)$. Deretter faktoriserer vi andregradsuttrykket: $x^2 - 5x + 6 = (x - 2)(x - 3)$ (sum 5, produkt 6). Altså: $-2(x - 2)(x - 3) \\geq 0$.

Fortegnsskjemaet har tre faktorer: $-2$ (alltid negativ), $(x - 2)$ med nullpunkt 2, og $(x - 3)$ med nullpunkt 3.

For $x < 2$: $(-) \\cdot (-) \\cdot (-) = -$. For $2 < x < 3$: $(-) \\cdot (+) \\cdot (-) = +$. For $x > 3$: $(-) \\cdot (+) \\cdot (+) = -$.

Vi ønsker positivt eller null ($\\geq 0$). Uttrykket er positivt for $2 < x < 3$, og null ved $x = 2$ og $x = 3$. Løsningsmengden er $x \\in [2, 3]$.

Legg merke til at den negative konstanten $-2$ snudde hele mønsteret. Uten den ville uttrykket vært positivt utenfor nullpunktene, men med $-2$ foran blir det positivt *mellom* nullpunktene. Fortegnsskjemaet håndterer dette helt automatisk – du trenger ikke tenke på det separat.`,
    },
    {
      id: '1t-4-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-4-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på negativ koeffisient foran $x^2$:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-4-4-n-quiz3-q0',
            task: 'Hva er løsningsmengden til $x^2 - 4 \\leq 0$?',
            options: [
              { id: 'a', text: '$x \\in \\langle -\\infty, -2] \\cup [2, \\infty \\rangle$', isCorrect: false },
              { id: 'b', text: '$x \\in \\langle -2, 2 \\rangle$', isCorrect: false },
              { id: 'c', text: '$x \\in [-2, 2]$', isCorrect: true },
              { id: 'd', text: '$x \\in \\langle -\\infty, -2 \\rangle \\cup \\langle 2, \\infty \\rangle$', isCorrect: false },
            ],
            solution: 'Vi faktoriserer: $x^2 - 4 = (x-2)(x+2)$. Nullpunkter: $x = 2$ og $x = -2$. For $x < -2$: $(-)(-) = +$. For $-2 < x < 2$: $(+)(-) = -$. For $x > 2$: $(+)(+) = +$. Uttrykket er $\\leq 0$ (negativt eller null) for $-2 \\leq x \\leq 2$.',
          },
          {
            id: '1t-4-4-n-quiz3-q1',
            task: 'Faktoriser $-2x^2 + 10x - 12$.',
            options: [
              { id: 'a', text: '$-2(x-2)(x-3)$', isCorrect: true },
              { id: 'b', text: '$2(x-2)(x-3)$', isCorrect: false },
              { id: 'c', text: '$-2(x+2)(x+3)$', isCorrect: false },
              { id: 'd', text: '$-2(x-6)(x-1)$', isCorrect: false },
            ],
            solution: 'Først trekker vi ut $-2$: $-2(x^2 - 5x + 6)$. Så faktoriserer vi: to tall med sum 5 og produkt 6 er 2 og 3. Altså $-2(x-2)(x-3)$.',
          },
          {
            id: '1t-4-4-n-quiz3-q2',
            task: 'Løs $-2(x-2)(x-3) \\geq 0$. Hva er fortegnet for $x < 2$?',
            options: [
              { id: 'a', text: 'Positivt', isCorrect: false },
              { id: 'b', text: 'Negativt', isCorrect: true },
              { id: 'c', text: 'Null', isCorrect: false },
              { id: 'd', text: 'Udefinert', isCorrect: false },
            ],
            solution: 'For $x < 2$: $-2$ er negativ, $(x-2)$ er negativ, $(x-3)$ er negativ. Produktet: $(-) \\cdot (-) \\cdot (-) = -$. Uttrykket er negativt for $x < 2$.',
          },
          {
            id: '1t-4-4-n-quiz3-q3',
            task: 'Hva er løsningsmengden til $-2(x-2)(x-3) \\geq 0$?',
            options: [
              { id: 'a', text: '$x \\in \\langle -\\infty, 2] \\cup [3, \\infty \\rangle$', isCorrect: false },
              { id: 'b', text: '$x \\in \\langle 2, 3 \\rangle$', isCorrect: false },
              { id: 'c', text: '$x \\in [2, 3]$', isCorrect: true },
              { id: 'd', text: '$x \\in \\langle -\\infty, 2 \\rangle \\cup \\langle 3, \\infty \\rangle$', isCorrect: false },
            ],
            solution: 'Fra fortegnsskjemaet: negativt for $x < 2$, positivt for $2 < x < 3$, negativt for $x > 3$, null ved $x = 2$ og $x = 3$. Vi ønsker $\\geq 0$ (positivt eller null), altså $x \\in [2, 3]$.',
          },
        ],
      },
    },    {
      id: '1t-4-4-n-section4',
      type: 'text',
      content: `## Når du må flytte ledd først

Ikke alle andregradsulikheter kommer ferdig arrangert med null på den ene siden. Noen ganger må du flytte ledd over.

Ta ulikheten $x^2 - 4x > 12$. Her trekker vi fra 12 på begge sider: $x^2 - 4x - 12 > 0$. Nå faktoriserer vi. Vi leter etter to tall med sum $-4$ og produkt $-12$. Tallene $-6$ og $2$ passer: $(x - 6)(x + 2) > 0$.

Nullpunkter: $x = 6$ og $x = -2$. Fortegnsskjema: for $x < -2$ er $(-) \\cdot (-) = +$, for $-2 < x < 6$ er $(+) \\cdot (-) = -$, og for $x > 6$ er $(+) \\cdot (+) = +$. Vi ønsker positivt ($> 0$), altså $x < -2$ eller $x > 6$. Løsningsmengden er $x \\in \\langle -\\infty, -2 \\rangle \\cup \\langle 6, \\infty \\rangle$.

Et annet eksempel: $-2x^2 + 16x - 30 < 0$. Vi faktoriserer: $-2(x^2 - 8x + 15) = -2(x - 3)(x - 5)$. For $x < 3$: $(-)(-)(-) = -$. For $3 < x < 5$: $(-)(+)(-) = +$. For $x > 5$: $(-)(+)(+) = -$. Vi ønsker negativt ($< 0$), altså $x < 3$ eller $x > 5$. Løsningsmengden er $x \\in \\langle -\\infty, 3 \\rangle \\cup \\langle 5, \\infty \\rangle$.

Husk: alltid flytt alt til én side først, og jobb deretter med å faktorisere og sette opp fortegnsskjema.`,
    },
    {
      id: '1t-4-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-4-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på andregradsulikheter med leddflytting:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-4-4-n-quiz4-q0',
            task: 'For å løse $x^2 + 3x + 2 \\geq 0$, faktoriserer vi til $(x+1)(x+2) \\geq 0$. Hva er løsningsmengden?',
            options: [
              { id: 'a', text: '$x \\in [-2, -1]$', isCorrect: false },
              { id: 'b', text: '$x \\in \\langle -2, -1 \\rangle$', isCorrect: false },
              { id: 'c', text: '$x \\in \\langle -\\infty, -2 \\rangle \\cup \\langle -1, \\infty \\rangle$', isCorrect: false },
              { id: 'd', text: '$x \\in \\langle -\\infty, -2] \\cup [-1, \\infty \\rangle$', isCorrect: true },
            ],
            solution: 'Nullpunkter: $x = -2$ og $x = -1$. For $x < -2$: $(-)(-) = +$. For $-2 < x < -1$: $(+)(-) = -$. For $x > -1$: $(+)(+) = +$. Vi ønsker $\\geq 0$, altså positivt eller null. Dette er for $x \\leq -2$ eller $x \\geq -1$.',
          },
          {
            id: '1t-4-4-n-quiz4-q1',
            task: 'For ulikheten $x^2 - 4x > 12$, hva er første steg?',
            options: [
              { id: 'a', text: 'Dele begge sider med $x$', isCorrect: false },
              { id: 'b', text: 'Trekke fra 12 på begge sider: $x^2 - 4x - 12 > 0$', isCorrect: true },
              { id: 'c', text: 'Faktorisere $x^2 - 4x$ direkte', isCorrect: false },
              { id: 'd', text: 'Ta kvadratroten av begge sider', isCorrect: false },
            ],
            solution: 'Første steg er alltid å få null på den ene siden. Vi trekker fra 12: $x^2 - 4x - 12 > 0$. Deretter kan vi faktorisere og bruke fortegnsskjema.',
          },
          {
            id: '1t-4-4-n-quiz4-q2',
            task: 'Hva er løsningen på $(x-6)(x+2) > 0$?',
            options: [
              { id: 'a', text: '$x \\in \\langle -2, 6 \\rangle$', isCorrect: false },
              { id: 'b', text: '$x \\in [-2, 6]$', isCorrect: false },
              { id: 'c', text: '$x \\in \\langle -\\infty, -2 \\rangle \\cup \\langle 6, \\infty \\rangle$', isCorrect: true },
              { id: 'd', text: '$x \\in \\langle 6, \\infty \\rangle$', isCorrect: false },
            ],
            solution: 'Nullpunkter: $x = 6$ og $x = -2$. For $x < -2$: $(-)(-) = +$. For $-2 < x < 6$: $(+)(-) = -$. For $x > 6$: $(+)(+) = +$. Positivt for $x < -2$ eller $x > 6$.',
          },
        ],
      },
    },    {
      id: '1t-4-4-n-section5',
      type: 'text',
      content: `## Tredjegradsulikheter og uttrykk med tre faktorer

Fortegnsskjema er ikke begrenset til andregradsulikheter – det fungerer like godt med tre eller flere faktorer. La oss løse $x(x - 4)(x + 2) < 0$.

Her er uttrykket allerede faktorisert med tre nullpunkter: $x = 0$, $x = 4$ og $x = -2$. Vi har fire intervaller å sjekke.

For $x < -2$: $(-)(-)(-)  = -$. For $-2 < x < 0$: $(-)(-)( +) = +$. For $0 < x < 4$: $(+)(-)(+) = -$. For $x > 4$: $(+)(+)(+) = +$.

Vi ønsker negativt ($< 0$). Svaret er $x < -2$ eller $0 < x < 4$. I intervallnotasjon: $x \\in \\langle -\\infty, -2 \\rangle \\cup \\langle 0, 4 \\rangle$.

Prinsippet er identisk: finn alle nullpunktene, sorter dem i stigende rekkefølge, bestem fortegnet til hver faktor i hvert intervall, og multipliser for å finne fortegnet til hele produktet. Med øvelse vil du oppdage at fortegnet alternerer mellom pluss og minus når du passerer hvert nullpunkt (gitt at alle faktorer har odde multiplisitet), men det er alltid tryggest å sjekke systematisk med fortegnsskjema.

Husk også at løsningsmengden kan bestå av *flere adskilte intervaller*, slik som i eksempelet over. Disse skriver vi med unionstegnet $\\cup$.`,
    },
    {
      id: '1t-4-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-4-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på tredjegradsulikheter og union:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-4-4-n-quiz5-q0',
            task: 'Hva betyr symbolet $\\cup$ i løsningsmengden $x \\in \\langle -\\infty, -3 \\rangle \\cup \\langle 2, \\infty \\rangle$?',
            options: [
              { id: 'a', text: 'Produkt -- verdiene fra det ene ganget med det andre', isCorrect: false },
              { id: 'b', text: 'Snitt -- verdiene som er i begge intervallene', isCorrect: false },
              { id: 'c', text: 'Differanse -- verdiene som er i det første men ikke det andre', isCorrect: false },
              { id: 'd', text: 'Union -- verdiene som er i minst ett av intervallene', isCorrect: true },
            ],
            solution: 'Symbolet $\\cup$ betyr union, altså «eller». Løsningsmengden $\\langle -\\infty, -3 \\rangle \\cup \\langle 2, \\infty \\rangle$ betyr at $x$ kan være enten mindre enn $-3$ *eller* større enn 2.',
          },
          {
            id: '1t-4-4-n-quiz5-q1',
            task: 'For $x(x-4)(x+2) < 0$, hva er fortegnet i intervallet $0 < x < 4$?',
            options: [
              { id: 'a', text: 'Positivt', isCorrect: false },
              { id: 'b', text: 'Negativt', isCorrect: true },
              { id: 'c', text: 'Null', isCorrect: false },
              { id: 'd', text: 'Udefinert', isCorrect: false },
            ],
            solution: 'For $0 < x < 4$: $x$ er positiv $(+)$, $(x-4)$ er negativ $(-)$, $(x+2)$ er positiv $(+)$. Produktet: $(+) \\cdot (-) \\cdot (+) = -$, altså negativt.',
          },
          {
            id: '1t-4-4-n-quiz5-q2',
            task: 'Hva er løsningen på $x(x-4)(x+2) < 0$?',
            options: [
              { id: 'a', text: '$x \\in \\langle -2, 0 \\rangle \\cup \\langle 4, \\infty \\rangle$', isCorrect: false },
              { id: 'b', text: '$x \\in \\langle -\\infty, -2 \\rangle \\cup \\langle 0, 4 \\rangle$', isCorrect: true },
              { id: 'c', text: '$x \\in \\langle -2, 4 \\rangle$', isCorrect: false },
              { id: 'd', text: '$x \\in \\langle 0, 4 \\rangle$', isCorrect: false },
            ],
            solution: 'Nullpunkter: $x = -2$, $x = 0$, $x = 4$. Fortegn: $x < -2$: $(-)(-)(-)=-$. $-2 < x < 0$: $(-)(-)( +)=+$. $0 < x < 4$: $(+)(-)(+)=-$. $x > 4$: $(+)(+)(+)=+$. Negativt for $x < -2$ eller $0 < x < 4$.',
          },
        ],
      },
    },    {
      id: '1t-4-4-n-summary',
      type: 'text',
      content: `## Oppsummering

For å løse andregradsulikheter følger du fire steg. Først sørger du for at du har **null på den ene siden**. Deretter **faktoriserer** du andregradsuttrykket med nullpunktsfaktorisering: $ax^2 + bx + c = a(x - x_1)(x - x_2)$. Så setter du opp et **fortegnsskjema** med én rad per faktor, der du markerer nullpunktene og bestemmer fortegnet i hvert intervall. Til slutt **leser du av** fra produktraden hvilke intervaller som har det fortegnet ulikheten krever.

Når koeffisienten foran $x^2$ er positiv, er uttrykket negativt mellom nullpunktene og positivt utenfor. Når koeffisienten er negativ, er det omvendt. Men du trenger ikke huske dette – fortegnsskjemaet gir deg svaret uansett.

Metoden fungerer også for ulikheter med tre eller flere faktorer. Løsningsmengden kan bestå av flere adskilte intervaller, som skrives med unionstegnet $\\cup$.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.5 NARRATIV: Rasjonale ulikheter
// ============================================================================

export const CHAPTER_1T_4_5_NARRATIV: TextbookChapter = {
  id: '1t-4-5-narrativ',
  courseId: '1t',
  chapterNumber: '4.5',
  title: 'Rasjonale ulikheter',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om ulikheter med brøker der x dukker opp i nevneren – hvorfor du ikke kan gange deg ut av det, og hvordan fortegnsskjema redder deg.',
  estimatedMinutes: 40,
  competenceGoals: [
    'løyse rasjonale ulikskapar',
  ],
  linkedChapterId: '1t-4-5',
  content: [    {
      id: '1t-4-5-n-intro',
      type: 'text',
      content: `## Når $x$ havner under brøkstreken

Frem til nå har vi jobbet med ulikheter der $x$ bare forekommer i telleren. Men hva skjer når $x$ dukker opp i **nevneren** av en brøk? Plutselig kan vi ikke lenger gange begge sider med nevneren, fordi vi ikke vet om den er positiv eller negativ – og om vi må snu ulikhetstegnet.

Slike ulikheter kaller vi **rasjonale ulikheter**, fordi de inneholder brøkuttrykk (rasjonale uttrykk) med variabler i nevneren. I dette kapittelet skal vi se at fortegnsskjema er redningen – men med én ekstra ting å huske: der nevneren er null, er uttrykket **udefinert**. Det punktet kan aldri være med i løsningsmengden.`,
    },
    {
      id: '1t-4-5-n-section1',
      type: 'text',
      content: `## Hvorfor du ikke kan gange med nevneren

La oss forstå problemet ordentlig. Tenk på ulikheten $\\frac{3}{x} > 1$. Første instinkt er kanskje å gange begge sider med $x$. Men det gir $3 > x$ bare dersom $x > 0$. Hvis $x < 0$, måtte vi snudd ulikhetstegnet og fått $3 < x$, som aldri kan stemme for negative $x$. Så ganging med $x$ splittes i to tilfeller, og det blir rotete.

Istedenfor bruker vi en annen strategi: **flytt alt til én side** slik at du får en brøk som er $> 0$ eller $< 0$. For $\\frac{3}{x} > 1$ trekker vi fra 1: $\\frac{3}{x} - 1 > 0$. Felles nevner gir $\\frac{3 - x}{x} > 0$. Nå har vi et brøkuttrykk som vi kan analysere med fortegnsskjema.

Den generelle oppskriften er: flytt alt til én side, skriv om med felles nevner, faktoriser teller og nevner, og sett opp fortegnsskjema. Brøken har samme fortegn som produktet av teller og nevner (pluss delt på pluss er pluss, minus delt på minus er pluss, og så videre). Faktisk kan vi behandle $\\frac{1}{x}$ som en egen faktor i fortegnsskjemaet.

Det viktigste å huske: der nevneren er null, er uttrykket **udefinert**. Vi markerer slike punkter med $\\not\\exists$ i fortegnsskjemaet, og de kan aldri inkluderes i løsningsmengden – uansett om ulikheten er streng ($<$, $>$) eller svak ($\\leq$, $\\geq$).`,
    },
    {
      id: '1t-4-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-4-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på grunnlaget for rasjonale ulikheter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-4-5-n-quiz1-q0',
            task: 'Hvorfor kan vi ikke gange begge sider av $\\frac{5}{x-2} > 0$ med $(x-2)$?',
            options: [
              { id: 'a', text: 'Fordi $(x-2)$ kan være null', isCorrect: false },
              { id: 'b', text: 'Fordi brøker ikke kan ganges', isCorrect: false },
              { id: 'c', text: 'Fordi vi ikke vet om $(x-2)$ er positivt eller negativt', isCorrect: true },
              { id: 'd', text: 'Fordi 5 er en primtallsfaktor', isCorrect: false },
            ],
            solution: 'Vi vet ikke fortegnet til $(x-2)$. Hvis $(x-2) > 0$, beholder vi ulikhetstegnet. Hvis $(x-2) < 0$, må vi snu det. Siden vi ikke vet fortegnet, kan vi ikke utføre multiplikasjonen uten å dele opp i tilfeller.',
          },
          {
            id: '1t-4-5-n-quiz1-q1',
            task: 'Hva er den generelle strategien for å løse rasjonale ulikheter?',
            options: [
              { id: 'a', text: 'Gange med nevneren og løse som vanlig likning', isCorrect: false },
              { id: 'b', text: 'Flytte alt til én side, skrive om med felles nevner, og bruke fortegnsskjema', isCorrect: true },
              { id: 'c', text: 'Sette $x = 0$ og sjekke fortegnet', isCorrect: false },
              { id: 'd', text: 'Tegne grafen og lese av svaret', isCorrect: false },
            ],
            solution: 'Vi flytter alt til én side slik at vi har en brøk $\\gtrless 0$. Deretter skriver vi om med felles nevner, faktoriserer teller og nevner, og bruker fortegnsskjema for å bestemme fortegnet i hvert intervall.',
          },
          {
            id: '1t-4-5-n-quiz1-q2',
            task: 'For $\\frac{3}{x} > 1$, hva er riktig omskriving til én brøk med null på høyre side?',
            options: [
              { id: 'a', text: '$\\frac{3 + x}{x} > 0$', isCorrect: false },
              { id: 'b', text: '$\\frac{3 - x}{x} > 0$', isCorrect: true },
              { id: 'c', text: '$\\frac{3}{x - 1} > 0$', isCorrect: false },
              { id: 'd', text: '$\\frac{x - 3}{x} > 0$', isCorrect: false },
            ],
            solution: 'Vi trekker fra 1: $\\frac{3}{x} - 1 > 0$. Felles nevner $x$: $\\frac{3}{x} - \\frac{x}{x} = \\frac{3-x}{x} > 0$.',
          },
        ],
      },
    },    {
      id: '1t-4-5-n-section2',
      type: 'text',
      content: `## Fortegnslinjer for brøkuttrykk

I forrige kapittel tegnet vi fortegnslinjer for lineære uttrykk som $(x-3)$. Nå trenger vi fortegnslinjer for uttrykk som $\\frac{1}{x}$ og $\\frac{1}{x-2}$.

La oss starte med $\\frac{1}{x}$. For $x > 0$ er brøken positiv (positivt delt på positivt). For $x < 0$ er brøken negativ (positivt delt på negativt). Ved $x = 0$ er brøken *udefinert* – vi kan ikke dele med null. Fortegnslinjen viser altså: negativ for $x < 0$, udefinert ved $x = 0$, og positiv for $x > 0$.

Hva med $\\frac{1}{x-2}$? Nevneren er null ved $x = 2$. For $x < 2$ er nevneren negativ, så brøken er negativ. For $x > 2$ er nevneren positiv, så brøken er positiv. Ved $x = 2$ er den udefinert.

Nøkkelobservasjonen er: $\\frac{1}{x-a}$ har **nøyaktig samme fortegn** som $(x - a)$, bortsett fra at den er *udefinert* (ikke null) ved $x = a$. Dette betyr at vi kan bruke $\\frac{1}{x-a}$ som en faktor i fortegnsskjemaet, og den oppfører seg nesten identisk med $(x-a)$ – den eneste forskjellen er at vi markerer nullpunktet som udefinert istedenfor null.

La oss ta et eksempel: $\\frac{4}{x}$. Vi skriver det som $4 \\cdot \\frac{1}{x}$. Fortegnsskjemaet har $4$ (alltid positiv) og $\\frac{1}{x}$ (negativ for $x < 0$, udefinert ved $x = 0$, positiv for $x > 0$). Produktet: negativ for $x < 0$, udefinert ved $x = 0$, positiv for $x > 0$.`,
    },
    {
      id: '1t-4-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-4-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på fortegnslinjer for brøkuttrykk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-4-5-n-quiz2-q0',
            task: 'Hva er fortegnet til $\\frac{-3}{x-2}$ når $x = 5$?',
            options: [
              { id: 'a', text: 'Positivt', isCorrect: false },
              { id: 'b', text: 'Null', isCorrect: false },
              { id: 'c', text: 'Udefinert', isCorrect: false },
              { id: 'd', text: 'Negativt', isCorrect: true },
            ],
            solution: 'Vi setter inn: $\\frac{-3}{5-2} = \\frac{-3}{3} = -1$, som er negativt. Alternativt: for $x > 2$ er $(x-2)$ positiv, og $-3$ er negativ. Negativt delt på positivt er negativt.',
          },
          {
            id: '1t-4-5-n-quiz2-q1',
            task: 'Hva skjer med $\\frac{1}{x}$ ved $x = 0$?',
            options: [
              { id: 'a', text: 'Den er lik null', isCorrect: false },
              { id: 'b', text: 'Den er positiv', isCorrect: false },
              { id: 'c', text: 'Den er udefinert', isCorrect: true },
              { id: 'd', text: 'Den er negativ', isCorrect: false },
            ],
            solution: 'Vi kan ikke dele med null, så $\\frac{1}{x}$ er udefinert ved $x = 0$. I fortegnsskjemaet markerer vi dette punktet som udefinert, ikke null.',
          },
          {
            id: '1t-4-5-n-quiz2-q2',
            task: 'Hva har $\\frac{1}{x-a}$ til felles med $(x-a)$ i et fortegnsskjema?',
            options: [
              { id: 'a', text: 'Ingenting, de har helt forskjellig fortegn', isCorrect: false },
              { id: 'b', text: 'Samme fortegn overalt, men $\\frac{1}{x-a}$ er udefinert (ikke null) ved $x = a$', isCorrect: true },
              { id: 'c', text: 'Motsatt fortegn overalt', isCorrect: false },
              { id: 'd', text: 'Samme fortegn, og begge er null ved $x = a$', isCorrect: false },
            ],
            solution: '$\\frac{1}{x-a}$ har nøyaktig samme fortegn som $(x-a)$ i alle intervaller. Forskjellen er at ved $x = a$ er $\\frac{1}{x-a}$ udefinert (deling med null), mens $(x-a)$ er null.',
          },
        ],
      },
    },    {
      id: '1t-4-5-n-section3',
      type: 'text',
      content: `## Løse rasjonale ulikheter – steg for steg

La oss løse $\\frac{x - 3}{x} \\geq 0$. Vi skriver om som et produkt: $(x - 3) \\cdot \\frac{1}{x} \\geq 0$. Kritiske punkter: $x = 3$ (nullpunkt for telleren) og $x = 0$ (udefinert for nevneren).

Fortegnsskjema: $(x-3)$ er negativ for $x < 3$, null ved $x = 3$, positiv for $x > 3$. $\\frac{1}{x}$ er negativ for $x < 0$, udefinert ved $x = 0$, positiv for $x > 0$.

Produktet: for $x < 0$ er $(-) \\cdot (-) = +$. For $0 < x < 3$ er $(-) \\cdot (+) = -$. For $x > 3$ er $(+) \\cdot (+) = +$. Ved $x = 3$ er produktet null (inkluderes fordi $\\geq$). Ved $x = 0$ er produktet udefinert (inkluderes aldri).

Vi ønsker $\\geq 0$, altså positivt eller null. Svaret: $x < 0$ eller $x \\geq 3$. I intervallnotasjon: $x \\in \\langle -\\infty, 0 \\rangle \\cup [3, \\infty \\rangle$. Legg merke til at vi bruker vinkelparentes ved 0 (udefinert, aldri med) og hakeparentes ved 3 (null er med fordi $\\geq$).

Et annet eksempel: $\\frac{-3}{(x + 2)(x - 1)} \\geq 0$. Faktorene er $-3$ (alltid negativ), $\\frac{1}{x+2}$ (udefinert ved $x = -2$) og $\\frac{1}{x-1}$ (udefinert ved $x = 1$). For $-2 < x < 1$: $(-) \\cdot (+) \\cdot (-) = +$. Ellers er produktet negativt. Løsning: $x \\in \\langle -2, 1 \\rangle$. Telleren er aldri null ($-3 \\neq 0$), så vi bruker vinkelparentes ved begge endepunktene.`,
    },
    {
      id: '1t-4-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-4-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på å løse rasjonale ulikheter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-4-5-n-quiz3-q0',
            task: 'Løs $\\frac{-3}{x} < 0$. Hva er løsningsmengden?',
            options: [
              { id: 'a', text: '$x \\in \\langle 0, \\infty \\rangle$', isCorrect: true },
              { id: 'b', text: '$x \\in \\langle -\\infty, 0 \\rangle$', isCorrect: false },
              { id: 'c', text: '$x \\in \\langle -\\infty, 0 \\rangle \\cup \\langle 0, \\infty \\rangle$', isCorrect: false },
              { id: 'd', text: 'Ingen løsning', isCorrect: false },
            ],
            solution: 'Vi har $-3 \\cdot \\frac{1}{x} < 0$. For $x > 0$: $(-) \\cdot (+) = -$ (negativt, stemmer). For $x < 0$: $(-) \\cdot (-) = +$ (positivt, stemmer ikke). Løsningen er $x > 0$, altså $x \\in \\langle 0, \\infty \\rangle$.',
          },
          {
            id: '1t-4-5-n-quiz3-q1',
            task: 'For $\\frac{x-3}{x} \\geq 0$, hva er de kritiske punktene?',
            options: [
              { id: 'a', text: '$x = 3$ (nullpunkt) og $x = 0$ (udefinert)', isCorrect: true },
              { id: 'b', text: 'Bare $x = 3$ (nullpunkt)', isCorrect: false },
              { id: 'c', text: 'Bare $x = 0$ (nullpunkt)', isCorrect: false },
              { id: 'd', text: '$x = 3$ og $x = -3$', isCorrect: false },
            ],
            solution: 'Telleren $x - 3 = 0$ gir nullpunkt $x = 3$. Nevneren $x = 0$ gir et punkt der uttrykket er udefinert. Begge er kritiske punkter i fortegnsskjemaet.',
          },
          {
            id: '1t-4-5-n-quiz3-q2',
            task: 'Hva er løsningen på $\\frac{x-3}{x} \\geq 0$?',
            options: [
              { id: 'a', text: '$x \\in \\langle -\\infty, 0] \\cup [3, \\infty \\rangle$', isCorrect: false },
              { id: 'b', text: '$x \\in \\langle 0, 3 \\rangle$', isCorrect: false },
              { id: 'c', text: '$x \\in \\langle -\\infty, 0 \\rangle \\cup [3, \\infty \\rangle$', isCorrect: true },
              { id: 'd', text: '$x \\in [0, 3]$', isCorrect: false },
            ],
            solution: 'For $x < 0$: $(-) \\cdot (-) = +$. For $0 < x < 3$: $(-) \\cdot (+) = -$. For $x > 3$: $(+) \\cdot (+) = +$. Vi ønsker $\\geq 0$: positivt for $x < 0$ og $x > 3$, null ved $x = 3$, udefinert ved $x = 0$. Løsning: $x \\in \\langle -\\infty, 0 \\rangle \\cup [3, \\infty \\rangle$.',
          },
        ],
      },
    },    {
      id: '1t-4-5-n-section4',
      type: 'text',
      content: `## Ulikheter som krever omskriving

Mange rasjonale ulikheter kommer ikke ferdig arrangert med null på den ene siden. Da må du flytte ledd og finne felles nevner.

La oss løse $\\frac{8}{x} < 4$. Vi trekker fra 4: $\\frac{8}{x} - 4 < 0$. For å skrive dette som én brøk trenger vi felles nevner $x$: $\\frac{8}{x} - \\frac{4x}{x} = \\frac{8 - 4x}{x} < 0$. Vi faktoriserer telleren: $\\frac{-4(x - 2)}{x} < 0$, som vi skriver som $-4 \\cdot (x - 2) \\cdot \\frac{1}{x} < 0$.

Kritiske punkter: $x = 2$ (nullpunkt for telleren) og $x = 0$ (udefinert for nevneren). Fortegnsskjema: for $x < 0$ er $(-)(-)(-) = -$. For $0 < x < 2$ er $(-)(-)( +) = +$. For $x > 2$ er $(-)(+)(+) = -$. Vi ønsker negativt ($< 0$), altså $x < 0$ eller $x > 2$. Løsning: $x \\in \\langle -\\infty, 0 \\rangle \\cup \\langle 2, \\infty \\rangle$.

Et annet eksempel: $\\frac{2}{x-4} + 2 \\leq 0$. Felles nevner $(x-4)$: $\\frac{2 + 2(x-4)}{x-4} = \\frac{2x - 6}{x - 4} = \\frac{2(x-3)}{x-4} \\leq 0$. Kritiske punkter: $x = 3$ (nullpunkt) og $x = 4$ (udefinert). For $x < 3$: $(+)(-)(-) = +$. For $3 < x < 4$: $(+)(+)(-) = -$. For $x > 4$: $(+)(+)(+) = +$. Negativt eller null for $3 \\leq x < 4$. Løsning: $x \\in [3, 4 \\rangle$. Hakeparentes ved 3 (nullpunkt inkludert) og vinkelparentes ved 4 (udefinert).`,
    },
    {
      id: '1t-4-5-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-4-5-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på rasjonale ulikheter med omskriving:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-4-5-n-quiz4-q0',
            task: 'Løs $\\frac{5}{x - 3} \\leq 0$. Hva er løsningsmengden?',
            options: [
              { id: 'a', text: '$x \\in \\langle -\\infty, 3]$', isCorrect: false },
              { id: 'b', text: '$x \\in [3, \\infty \\rangle$', isCorrect: false },
              { id: 'c', text: '$x \\in \\langle 3, \\infty \\rangle$', isCorrect: false },
              { id: 'd', text: '$x \\in \\langle -\\infty, 3 \\rangle$', isCorrect: true },
            ],
            solution: 'Vi har $5 \\cdot \\frac{1}{x-3} \\leq 0$. Telleren er $5 > 0$ (aldri null), så brøken er aldri lik null. For $x < 3$: $(+) \\cdot (-) = -$ (negativt, stemmer). For $x > 3$: $(+) \\cdot (+) = +$ (positivt, stemmer ikke). Ved $x = 3$: udefinert. Løsningen er $x \\in \\langle -\\infty, 3 \\rangle$.',
          },
          {
            id: '1t-4-5-n-quiz4-q1',
            task: 'For $\\frac{8}{x} < 4$, hva er riktig omskriving med null på høyre side?',
            options: [
              { id: 'a', text: '$\\frac{8 + 4x}{x} < 0$', isCorrect: false },
              { id: 'b', text: '$\\frac{8 - 4x}{x} < 0$', isCorrect: true },
              { id: 'c', text: '$\\frac{4 - 8x}{x} < 0$', isCorrect: false },
              { id: 'd', text: '$\\frac{8}{x - 4} < 0$', isCorrect: false },
            ],
            solution: 'Vi trekker fra 4: $\\frac{8}{x} - 4 < 0$. Felles nevner $x$: $\\frac{8}{x} - \\frac{4x}{x} = \\frac{8 - 4x}{x} < 0$.',
          },
          {
            id: '1t-4-5-n-quiz4-q2',
            task: 'Løs $\\frac{2}{x-4} + 2 \\leq 0$. Hva er løsningsmengden?',
            options: [
              { id: 'a', text: '$x \\in \\langle -\\infty, 3]$', isCorrect: false },
              { id: 'b', text: '$x \\in [3, 4 \\rangle$', isCorrect: true },
              { id: 'c', text: '$x \\in \\langle 3, 4 \\rangle$', isCorrect: false },
              { id: 'd', text: '$x \\in [3, 4]$', isCorrect: false },
            ],
            solution: 'Felles nevner $(x-4)$: $\\frac{2 + 2(x-4)}{x-4} = \\frac{2x-6}{x-4} = \\frac{2(x-3)}{x-4} \\leq 0$. Nullpunkt: $x = 3$. Udefinert: $x = 4$. For $3 \\leq x < 4$ er uttrykket negativt eller null. Løsning: $x \\in [3, 4 \\rangle$.',
          },
        ],
      },
    },    {
      id: '1t-4-5-n-section5',
      type: 'text',
      content: `## Definisjonsmengde og fallgruver

La oss snakke om **definisjonsmengden** – altså de verdiene av $x$ der uttrykket i det hele tatt gir mening. For en rasjonal ulikhet er uttrykket udefinert der nevneren er null. Disse verdiene må alltid utelukkes fra løsningsmengden, uansett hva ulikheten sier.

Ta uttrykket $\\frac{3x + 6}{x - 5}$. Nevneren er null ved $x = 5$, så definisjonsmengden er alle reelle tall unntatt $x = 5$. Skal vi løse $\\frac{3x + 6}{x - 5} \\leq 0$, faktoriserer vi telleren: $\\frac{3(x + 2)}{x - 5}$. Nullpunkt i telleren: $x = -2$. Udefinert: $x = 5$. Fortegnsskjema med faktorene $3$ (positiv), $(x+2)$ og $\\frac{1}{x-5}$: for $x < -2$ er $(+)(-)(-)  = +$. For $-2 < x < 5$ er $(+)(+)(-) = -$. For $x > 5$ er $(+)(+)(+) = +$. Vi ønsker $\\leq 0$: negativt for $-2 < x < 5$, null ved $x = -2$. Løsning: $x \\in [-2, 5 \\rangle$.

Her er de viktigste fallgruvene å passe seg for. For det første: glem aldri å utelukke verdier der nevneren er null – bruk alltid vinkelparentes ved slike punkter. For det andre: ikke glem å faktorisere *hele* uttrykket ordentlig. Uttrykk som $\\frac{-2x + 4}{x + 1}$ bør skrives som $\\frac{-2(x-2)}{x+1}$ før du setter opp fortegnsskjema. For det tredje: husk at en brøk er null bare når *telleren* er null (og nevneren ikke er det). Hvis telleren er en konstant som $5$ eller $-3$, er brøken aldri null.`,
    },
    {
      id: '1t-4-5-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-4-5-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på definisjonsmengde og fallgruver:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-4-5-n-quiz5-q0',
            task: 'Uttrykket $\\frac{x+1}{x-3}$ er lik null. Hva er $x$?',
            options: [
              { id: 'a', text: '$x = 3$', isCorrect: false },
              { id: 'b', text: '$x = -1$ eller $x = 3$', isCorrect: false },
              { id: 'c', text: '$x = -1$', isCorrect: true },
              { id: 'd', text: 'Det finnes ingen slik $x$', isCorrect: false },
            ],
            solution: 'En brøk er null bare når telleren er null og nevneren ikke er null. Telleren $x + 1 = 0$ gir $x = -1$. Vi sjekker nevneren: $-1 - 3 = -4 \\neq 0$, så $x = -1$ er gyldig. Ved $x = 3$ er uttrykket udefinert (nevneren er null), ikke lik null.',
          },
          {
            id: '1t-4-5-n-quiz5-q1',
            task: 'Hva er definisjonsmengden til $\\frac{3x+6}{x-5}$?',
            options: [
              { id: 'a', text: 'Alle reelle tall', isCorrect: false },
              { id: 'b', text: 'Alle reelle tall unntatt $x = -2$', isCorrect: false },
              { id: 'c', text: 'Alle reelle tall unntatt $x = 5$', isCorrect: true },
              { id: 'd', text: 'Alle reelle tall unntatt $x = -2$ og $x = 5$', isCorrect: false },
            ],
            solution: 'Definisjonsmengden er alle $x$-verdier der nevneren ikke er null. Nevneren $x - 5 = 0$ gir $x = 5$. Altså er alle reelle tall unntatt $x = 5$ i definisjonsmengden. ($x = -2$ gjør telleren null, men det er lov.)',
          },
          {
            id: '1t-4-5-n-quiz5-q2',
            task: 'Hvilken type parentes bruker vi ved et punkt der nevneren er null i løsningsmengden?',
            options: [
              { id: 'a', text: 'Hakeparentes $[$ eller $]$ fordi punktet er inkludert', isCorrect: false },
              { id: 'b', text: 'Vinkelparentes $\\langle$ eller $\\rangle$ fordi punktet er ekskludert', isCorrect: true },
              { id: 'c', text: 'Det avhenger av ulikhetstegnet', isCorrect: false },
              { id: 'd', text: 'Ingen parentes trengs', isCorrect: false },
            ],
            solution: 'Der nevneren er null, er uttrykket udefinert. Slike punkter kan aldri inkluderes i løsningsmengden, uansett om ulikheten er streng ($<$, $>$) eller svak ($\\leq$, $\\geq$). Vi bruker alltid vinkelparentes (åpen).',
          },
          {
            id: '1t-4-5-n-quiz5-q3',
            task: 'Kan $\\frac{5}{x+1} \\leq 0$ ha et punkt der brøken er lik null?',
            options: [
              { id: 'a', text: 'Ja, ved $x = -1$', isCorrect: false },
              { id: 'b', text: 'Ja, ved $x = 0$', isCorrect: false },
              { id: 'c', text: 'Nei, fordi telleren $5$ aldri er null', isCorrect: true },
              { id: 'd', text: 'Ja, ved $x = 5$', isCorrect: false },
            ],
            solution: 'En brøk er null bare når telleren er null. Telleren er konstanten $5$, som aldri er null. Derfor er $\\frac{5}{x+1}$ aldri lik null, og $\\leq 0$ gir bare de intervallene der brøken er strengt negativ.',
          },
        ],
      },
    },    {
      id: '1t-4-5-n-summary',
      type: 'text',
      content: `## Oppsummering

**Rasjonale ulikheter** inneholder brøkuttrykk der $x$ forekommer i nevneren. Du kan **ikke gange med nevneren** fordi du ikke vet fortegnet, og da vet du ikke om ulikhetstegnet skal snus.

Fremgangsmåten er: flytt alt til én side slik at du har $\\frac{\\text{noe}}{\\text{noe}} \\gtrless 0$. Faktoriser teller og nevner. Sett opp **fortegnsskjema** med én rad for hver faktor. Fortegnslinjen til $\\frac{1}{x-a}$ er lik den til $(x-a)$, bortsett fra at den er *udefinert* (ikke null) ved $x = a$.

Der nevneren er null, er uttrykket **udefinert** og kan aldri inkluderes i løsningsmengden – bruk alltid vinkelparentes. Der telleren er null, er uttrykket lik null – dette punktet inkluderes bare ved svak ulikhet ($\\leq$ eller $\\geq$).

En brøk er null bare når telleren er null (og nevneren ikke er det). Hvis telleren er en konstant som aldri er null, er brøken aldri null – da gir selv $\\leq 0$ bare de intervallene der brøken er strengt negativ.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const MATEMATIKK_1T_NARRATIV_DEL4_CHAPTERS = [
  CHAPTER_1T_4_1_NARRATIV,
  CHAPTER_1T_4_2_NARRATIV,
  CHAPTER_1T_4_3_NARRATIV,
  CHAPTER_1T_4_4_NARRATIV,
  CHAPTER_1T_4_5_NARRATIV,
];
