/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 1T – NARRATIV VERSJON
 * Kapittel 2.8: Praktisk bruk av likninger
 * Kapittel 2.9: Praktisk bruk av andregradslikninger
 * Kapittel 2.10: Polynomdivisjon og likningsløsning
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * å lese og lytte til, med quiz-spørsmål for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.8 NARRATIV: Praktisk bruk av likninger
// ============================================================================

export const CHAPTER_1T_2_8_NARRATIV: TextbookChapter = {
  id: '1t-2-8-narrativ',
  courseId: '1t',
  chapterNumber: '2.8',
  title: 'Praktisk bruk av likninger',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan likninger blir til kraftige verktøy i hverdagen – fra aldersoppgaver og pengeproblemer til geometri og fart.',
  estimatedMinutes: 50,
  competenceGoals: ['omsetje problemstillingar til likningar', 'tolke og bruke likningsløysingar i kontekst'],
  linkedChapterId: '1t-2-8',
  content: [
    {
      id: '1t-2-8-n-audio-1',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-2-8-narrativ-del1.mp3',
      description: 'Lydfil som leser opp teksten frem til første quiz.',
    },
    {
      id: '1t-2-8-n-intro',
      type: 'text',
      content: `## Når tall gjemmer seg i hverdagen

Tenk deg at du og en venn deler en regning på en restaurant. Du vet totalen, og du vet at vennen din spiste for 50 kroner mer enn deg. Hvor mye skylder du egentlig? Uten at du kanskje tenker over det, har du nettopp formulert en likning i hodet.

I dette kapittelet skal vi se at likninger ikke bare er noe du regner med på skolen. De er et verktøy du kan bruke til å løse ekte problemer fra virkeligheten. Vi skal jobbe med fem ulike typer oppgaver: vi starter med enkle tallgåter der vi finner ukjente tall, så tar vi for oss aldersoppgaver der tiden spiller inn, før vi ser på penger og priser, geometri med omkrets og areal, og til slutt sammenhengen mellom fart, tid og strekning. For alle disse problemtypene bruker vi samme fremgangsmåte: les oppgaven nøye, velg en variabel for det ukjente, sett opp en likning, løs den, og sjekk at svaret gir mening i sammenhengen.`,
    },
    {
      id: '1t-2-8-n-section1',
      type: 'text',
      content: `## Finn tallet -- de enkleste tekstoppgavene

Vi begynner med den mest grunnleggende typen tekstoppgave: du får en beskrivelse av et tall, og du skal finne ut hvilket tall det er. Nøkkelen er å oversette ordene til matematikk.

Tenk deg at noen sier: "Summen av et tall og 7 er 15." Du lar det ukjente tallet hete $x$. "Summen av et tall og 7" blir da $x + 7$, og det hele er lik 15. Altså: $x + 7 = 15$. Du trekker fra 7 på begge sider og finner at $x = 8$. Sjekk: $8 + 7 = 15$. Stemmer!

Hva med litt mer sammensatte beskrivelser? "Det dobbelte av et tall pluss 3 er 17." Her betyr "det dobbelte av et tall" at vi ganger med 2, altså $2x$. Legg til 3 og du har $2x + 3 = 17$. Trekk fra 3 på begge sider: $2x = 14$. Del på 2: $x = 7$. Sjekk: $2 \\cdot 7 + 3 = 17$. Perfekt.

Disse oppgavene handler egentlig om å bygge et **matematisk ordforråd**: "summen" betyr pluss, "differansen" betyr minus, "det dobbelte" betyr ganger med 2, "det tredobbelte" betyr ganger med 3, og "produktet" betyr ganger. Når du kjenner dette ordforrådet, kan du oversette nesten hvilken som helst setning til en likning.

La oss ta ett til: "Summen av to tall er 20. Det ene tallet er 4 mer enn det andre." Her har vi to ukjente, men vi kan uttrykke begge med samme variabel. La det minste tallet være $x$. Da er det største $x + 4$. Summen gir oss $x + (x + 4) = 20$, altså $2x + 4 = 20$, som gir $x = 8$. Tallene er 8 og 12.`,
    },
    {
      id: '1t-2-8-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-2-8-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Summen av to tall er 30. Det ene tallet er 6 mer enn det andre. Hvilken likning passer?',
        options: [
          { id: 'a', text: '$x + x + 6 = 30$', isCorrect: true },
          { id: 'b', text: '$x \\cdot (x + 6) = 30$', isCorrect: false },
          { id: 'c', text: '$x + 6 = 30$', isCorrect: false },
          { id: 'd', text: '$2x - 6 = 30$', isCorrect: false },
        ],
        solution: 'La det minste tallet være $x$. Det andre er $x + 6$. Summen av de to er $x + (x + 6) = 30$, altså $2x + 6 = 30$.',
      },
    },
    {
      id: '1t-2-8-n-audio-2',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-2-8-narrativ-del2.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-2-8-n-section2',
      type: 'text',
      content: `## Aldersoppgaver -- når tiden spiller inn

Aldersoppgaver er en klassiker i matematikken, og de handler om en enkel sannhet: alle blir like mye eldre. Hvis det går 5 år, øker alles alder med nøyaktig 5.

La oss si at Emma er 3 ganger så gammel som Lukas, og at de til sammen er 24 år. Hvem er hvem? Vi lar $x$ være alderen til Lukas. Da er Emma $3x$ år gammel. Til sammen: $x + 3x = 24$, altså $4x = 24$, som gir $x = 6$. Lukas er 6 år og Emma er 18 år. Sjekk: $6 + 18 = 24$, og $18 = 3 \\cdot 6$. Alt stemmer.

Det blir virkelig spennende når oppgaven handler om fremtiden eller fortiden. Tenk deg denne: "En far er 30 år eldre enn sønnen sin. Om 5 år vil faren være dobbelt så gammel som sønnen." La sønnens alder nå være $x$. Faren er da $x + 30$. Om 5 år er sønnen $x + 5$ og faren $x + 35$. Betingelsen "dobbelt så gammel" gir oss:

$$x + 35 = 2(x + 5)$$

Vi løser opp: $x + 35 = 2x + 10$. Trekker fra $x$ på begge sider: $35 = x + 10$. Trekker fra 10: $x = 25$. Sønnen er 25 og faren er 55. Om 5 år er de 30 og 60, og $60 = 2 \\cdot 30$. Stemmer!

Det viktigste å huske i aldersoppgaver er at tidsforskjellen mellom to personer aldri endrer seg. Faren vil alltid være 30 år eldre enn sønnen, enten det er nå, om 5 år, eller om 50 år.`,
    },
    {
      id: '1t-2-8-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-2-8-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'En mor er 24 år eldre enn datteren. Om 4 år vil moren være 3 ganger så gammel som datteren. Hvor gammel er datteren nå?',
        options: [
          { id: 'a', text: '$6$ år', isCorrect: false },
          { id: 'b', text: '$10$ år', isCorrect: false },
          { id: 'c', text: '$8$ år', isCorrect: true },
          { id: 'd', text: '$12$ år', isCorrect: false },
        ],
        solution: 'La datterens alder være $x$. Morens alder er $x + 24$. Om 4 år: $(x + 24) + 4 = 3(x + 4)$, altså $x + 28 = 3x + 12$. Det gir $16 = 2x$, altså $x = 8$. Datteren er 8 år, moren er 32 år.',
      },
    },
    {
      id: '1t-2-8-n-audio-3',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-2-8-narrativ-del3.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-2-8-n-section3',
      type: 'text',
      content: `## Penger og priser -- matematikk i lommeboka

Pengeproblemer føles ofte mer konkrete enn abstrakte tallgåter, og de bygger på en enkel grunnregel: **totalpris er lik pris per enhet ganget med antall**.

Elise går på kino og kjøper billetter til 120 kroner stykket. Hun betaler 600 kroner totalt. Hvor mange billetter kjøpte hun? Vi setter opp likningen $120x = 600$, deler på 120 og finner $x = 5$. Fem billetter.

Fordelingsproblemer er en annen klassiker. Jonas og Ida skal dele 450 kroner, men Jonas skal ha 50 kroner mer enn Ida. La $x$ være det Ida får. Jonas får da $x + 50$. Til sammen:

$$x + (x + 50) = 450$$

Det gir $2x + 50 = 450$, altså $2x = 400$ og $x = 200$. Ida får 200 kroner og Jonas får 250 kroner. Vi sjekker: $200 + 250 = 450$ og $250 - 200 = 50$. Begge betingelsene er oppfylt.

Et viktig poeng: det er ikke alltid du bare har to parter. Tenk deg at Emilie og Markus deler 720 kroner, og Emilie skal ha dobbelt så mye som Markus. Her lar vi $x$ være det Markus får. Emilie får $2x$. Summen er $x + 2x = 3x = 720$, som gir $x = 240$. Markus får 240 kroner og Emilie får 480 kroner. Legg merke til at vi uttrykte begge beløpene med samme variabel og brukte den ene betingelsen til å sette opp likningen.`,
    },
    {
      id: '1t-2-8-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-2-8-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'En pizza koster 149 kr. Martin betalte 596 kr totalt. Hvor mange pizzaer kjøpte han?',
        options: [
          { id: 'a', text: '$3$ pizzaer', isCorrect: false },
          { id: 'b', text: '$5$ pizzaer', isCorrect: false },
          { id: 'c', text: '$6$ pizzaer', isCorrect: false },
          { id: 'd', text: '$4$ pizzaer', isCorrect: true },
        ],
        solution: 'Vi setter opp $149x = 596$ og deler begge sider på 149: $x = 596 \\div 149 = 4$. Martin kjøpte 4 pizzaer.',
      },
    },
    {
      id: '1t-2-8-n-audio-4',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-2-8-narrativ-del4.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-2-8-n-section4',
      type: 'text',
      content: `## Geometri -- likninger i form og figur

Når du kjenner omkretsen eller arealet til en figur, men ikke alle sidene, kan likninger hjelpe deg å finne de ukjente målene. Nøkkelformlene er: omkretsen av et rektangel er $O = 2l + 2b$, og arealet er $A = l \\cdot b$.

Et rektangel har omkrets 36 cm, og lengden er 3 cm mer enn bredden. Hva er målene? Vi lar bredden være $x$ cm. Da er lengden $(x + 3)$ cm. Omkretsen gir oss:

$$2x + 2(x + 3) = 36$$

Vi løser opp parentesen: $2x + 2x + 6 = 36$, altså $4x + 6 = 36$. Trekker fra 6: $4x = 30$. Deler på 4: $x = 7{,}5$. Bredden er 7,5 cm og lengden er 10,5 cm. Sjekk: $2 \\cdot 7{,}5 + 2 \\cdot 10{,}5 = 15 + 21 = 36$ cm.

Trekanter fungerer på samme måte. En likebeint trekant har omkrets 32 cm, og de to like sidene er hver 5 cm lengre enn grunnlinjen. La grunnlinjen være $x$ cm. De to like sidene er $(x + 5)$ cm hver. Omkretsen:

$$x + (x + 5) + (x + 5) = 32$$

Det gir $3x + 10 = 32$, altså $3x = 22$ og $x = \\frac{22}{3} \\approx 7{,}33$ cm. De like sidene er $\\frac{22}{3} + 5 = \\frac{37}{3} \\approx 12{,}33$ cm. Sjekk: $\\frac{22}{3} + \\frac{37}{3} + \\frac{37}{3} = \\frac{96}{3} = 32$ cm. Det stemmer!

Disse problemene viser at likninger og geometri henger tett sammen. Nøkkelen er alltid å uttrykke alle ukjente mål ved hjelp av samme variabel, sette opp en likning fra det du vet (for eksempel omkretsen), og løse den.`,
    },
    {
      id: '1t-2-8-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-2-8-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Et rektangel har omkrets 56 cm og lengden er 4 cm mer enn bredden. Hva er bredden?',
        options: [
          { id: 'a', text: '$14$ cm', isCorrect: false },
          { id: 'b', text: '$12$ cm', isCorrect: true },
          { id: 'c', text: '$16$ cm', isCorrect: false },
          { id: 'd', text: '$10$ cm', isCorrect: false },
        ],
        solution: 'La bredden være $x$. Lengden er $x + 4$. Omkretsen: $2x + 2(x + 4) = 56$, altså $4x + 8 = 56$, som gir $4x = 48$ og $x = 12$. Bredden er 12 cm og lengden er 16 cm.',
      },
    },
    {
      id: '1t-2-8-n-audio-5',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-2-8-narrativ-del5.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-2-8-n-section5',
      type: 'text',
      content: `## Fart, tid og strekning -- matematikk i bevegelse

Den siste typen praktisk oppgave vi ser på handler om bevegelse, og den bygger på en av de mest grunnleggende formlene i fysikken: **strekning er lik fart ganger tid**, eller $s = v \\cdot t$. Fra denne formelen kan vi også utlede at $v = \\frac{s}{t}$ og $t = \\frac{s}{v}$.

En bil kjører med 80 km/t. Hvor lang tid tar det å kjøre 200 km? Her kjenner vi strekningen og farten, og vi skal finne tiden. Vi setter inn: $200 = 80t$, som gir $t = \\frac{200}{80} = 2{,}5$ timer. Det er 2 timer og 30 minutter.

Det blir mer spennende når to objekter er i bevegelse samtidig. Tenk deg at to biler starter fra samme sted og kjører i motsatt retning. Den ene holder 70 km/t og den andre 90 km/t. Etter hvor lang tid er de 400 km fra hverandre?

Etter $t$ timer har den første bilen kjørt $70t$ km og den andre $90t$ km. Den samlede avstanden mellom dem er $70t + 90t = 160t$ km. Vi setter dette lik 400:

$$160t = 400$$

Det gir $t = 2{,}5$ timer. Sjekk: $70 \\cdot 2{,}5 + 90 \\cdot 2{,}5 = 175 + 225 = 400$ km.

Et enda tøffere eksempel: en bil kjører fra A til B med 60 km/t og tilbake med 40 km/t. Hele turen tar 5 timer. Hvor langt er det? La strekningen være $s$ km. Tiden fra A til B er $\\frac{s}{60}$ timer, og tilbake er $\\frac{s}{40}$ timer. Summen er 5 timer: $\\frac{s}{60} + \\frac{s}{40} = 5$. Vi ganger gjennom med 120: $2s + 3s = 600$, altså $5s = 600$ og $s = 120$ km.`,
    },
    {
      id: '1t-2-8-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-2-8-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'To syklister starter fra samme sted og sykler i motsatt retning med 20 km/t og 25 km/t. Etter hvor lang tid er de 90 km fra hverandre?',
        options: [
          { id: 'a', text: '$3$ timer', isCorrect: false },
          { id: 'b', text: '$1{,}5$ timer', isCorrect: false },
          { id: 'c', text: '$4$ timer', isCorrect: false },
          { id: 'd', text: '$2$ timer', isCorrect: true },
        ],
        solution: 'Samlet fart fra hverandre er $20 + 25 = 45$ km/t. Vi setter opp $45t = 90$ og finner $t = 2$ timer. Sjekk: $20 \\cdot 2 + 25 \\cdot 2 = 40 + 50 = 90$ km.',
      },
    },
    {
      id: '1t-2-8-n-audio-6',
      type: 'audio',
      title: 'Lytt til oppsummeringen',
      src: '/audio/1t/1t-2-8-narrativ-del6.mp3',
      description: 'Lydfil som leser opp oppsummeringen.',
    },
    {
      id: '1t-2-8-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi sett at likninger er et kraftig verktøy for å løse problemer fra den virkelige verden. Fremgangsmåten er alltid den samme: les oppgaven nøye, velg en variabel $x$ for det ukjente, uttrykk andre størrelser ved hjelp av $x$, sett opp en likning basert på informasjonen du har, løs likningen, og sjekk at svaret gir mening i konteksten.

Vi har jobbet med fem ulike problemtyper. **Tallgåter** der du finner ukjente tall fra beskrivelser som "summen", "differansen" og "det dobbelte". **Aldersoppgaver** der nøkkelen er at alle blir like mye eldre, og tidsforskjellen mellom to personer aldri endrer seg. **Pengeproblemer** som bygger på at totalpris er lik pris per enhet ganget med antall, eller at beløp deles etter bestemte regler. **Geometrioppgaver** der du bruker formler for omkrets ($O = 2l + 2b$ for rektangler) og areal til å finne ukjente sidelengder. Og **fart-tid-strekning-oppgaver** som bygger på formelen $s = v \\cdot t$ og blir spesielt interessante når flere objekter beveger seg samtidig.

Uansett type oppgave: trikset er å oversette ord til matematikk, steg for steg.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.9 NARRATIV: Praktisk bruk av andregradslikninger
// ============================================================================

export const CHAPTER_1T_2_9_NARRATIV: TextbookChapter = {
  id: '1t-2-9-narrativ',
  courseId: '1t',
  chapterNumber: '2.9',
  title: 'Praktisk bruk av andregradslikninger',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan andregradslikninger dukker opp i arealproblemer, kastebevegelse, Pytagoras og tallgåter -- og hvordan du setter opp og løser dem.',
  estimatedMinutes: 55,
  competenceGoals: ['bruke andregradslikninger i praktiske situasjoner', 'tolke løsninger i kontekst'],
  linkedChapterId: '1t-2-9',
  content: [
    {
      id: '1t-2-9-n-audio-1',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-2-9-narrativ-del1.mp3',
      description: 'Lydfil som leser opp teksten frem til første quiz.',
    },
    {
      id: '1t-2-9-n-intro',
      type: 'text',
      content: `## Når $x^2$ dukker opp i virkeligheten

Du har allerede lært å løse andregradslikninger med faktorisering, fullstendig kvadrat og abc-formelen. Men hvorfor finnes disse likningene egentlig? Svaret er at de dukker opp overalt i den virkelige verden. Når du beregner arealet av en hage, følger banen til en ball som kastes opp i luften, eller bruker Pytagoras' setning til å finne sidelengder i en trekant -- da ender du opp med andregradslikninger.

Det som gjør disse oppgavene spesielle er at du ofte får to matematiske løsninger, men bare en av dem gir mening i den praktiske sammenhengen. En sidelengde kan ikke være negativ, og tiden kan ikke være negativ (med mindre du har en tidsmaskin). Derfor er det siste steget alltid like viktig: sjekk om løsningen gir mening. I dette kapittelet skal vi se på fire typer praktiske problemer der andregradslikninger er nøkkelen til svaret.`,
    },
    {
      id: '1t-2-9-n-section1',
      type: 'text',
      content: `## Arealproblemer -- når lengde ganger bredde gir $x^2$

Areal av et rektangel er lengde ganget med bredde. Hvis begge dimensjonene avhenger av den samme ukjente $x$, blir arealet et andregradsuttrykk. Det er her andregradslikningene kommer inn.

Tenk deg at du har et rektangel der du kjenner både omkretsen og arealet, men ikke de eksakte sidene. Omkretsen er 28 cm og arealet er 48 cm$^2$. La lengden være $x$ og bredden $y$. Fra omkretsen får vi $2x + 2y = 28$, altså $x + y = 14$, som gir $y = 14 - x$. Fra arealet har vi $x \\cdot y = 48$. Setter vi inn $y = 14 - x$ får vi:

$$x(14 - x) = 48$$
$$14x - x^2 = 48$$
$$x^2 - 14x + 48 = 0$$

Vi faktoriserer: $(x - 6)(x - 8) = 0$, som gir $x = 6$ eller $x = 8$. Begge løsningene er gyldige -- den ene gir lengde 8 og bredde 6, den andre gir lengde 6 og bredde 8. Rektangelet er det samme uansett.

Et annet klassisk problem: en hage er 5 meter lengre enn den er bred, og arealet er 150 m$^2$. La bredden være $x$. Da er lengden $x + 5$, og arealet gir $x(x + 5) = 150$, altså $x^2 + 5x - 150 = 0$. Med abc-formelen: $x = \\frac{-5 \\pm \\sqrt{25 + 600}}{2} = \\frac{-5 \\pm 25}{2}$. Det gir $x = 10$ eller $x = -15$. Siden bredden ikke kan være negativ, er svaret 10 m bred og 15 m lang.`,
    },
    {
      id: '1t-2-9-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-2-9-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Lengden av et rektangel er dobbelt så stor som bredden. Arealet er 72 cm$^2$. Hva er bredden?',
        options: [
          { id: 'a', text: '$8$ cm', isCorrect: false },
          { id: 'b', text: '$6$ cm', isCorrect: true },
          { id: 'c', text: '$4$ cm', isCorrect: false },
          { id: 'd', text: '$9$ cm', isCorrect: false },
        ],
        solution: 'La bredden være $x$. Lengden er $2x$. Arealet: $x \\cdot 2x = 2x^2 = 72$, altså $x^2 = 36$ og $x = 6$ cm (forkaster $x = -6$). Bredden er 6 cm og lengden er 12 cm.',
      },
    },
    {
      id: '1t-2-9-n-audio-2',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-2-9-narrativ-del2.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-2-9-n-section2',
      type: 'text',
      content: `## Kastebevegelse -- ballen som følger en parabel

Når du kaster en ball rett opp i luften, følger høyden en andregradsfunksjon av tiden. Formelen er $h(t) = -\\frac{1}{2}gt^2 + v_0 t + h_0$, der $g \\approx 10$ m/s$^2$ er tyngdeakselerasjonen, $v_0$ er starthastigheten og $h_0$ er starthøyden. I praksis bruker vi ofte den forenklede versjonen $h(t) = -5t^2 + v_0 t$ når vi kaster fra bakkenivå.

La oss si at en ball kastes rett opp fra bakken med fart 20 m/s, slik at $h(t) = -5t^2 + 20t$. Når er ballen 15 meter over bakken? Vi setter $h(t) = 15$:

$$-5t^2 + 20t = 15$$
$$-5t^2 + 20t - 15 = 0$$

Vi deler hele likningen på $-5$: $t^2 - 4t + 3 = 0$. Faktorisering gir $(t - 1)(t - 3) = 0$, altså $t = 1$ eller $t = 3$.

Her er det fantastiske: ballen er 15 meter over bakken **to ganger**! Først etter 1 sekund, på vei opp, og så igjen etter 3 sekunder, på vei ned. Dette gir perfekt mening fysisk -- ballen stiger, når et toppunkt, og faller tilbake ned. Andregradslikningen fanger denne symmetrien.

Du kan også finne når ballen treffer bakken igjen ved å sette $h(t) = 0$: $-5t^2 + 20t = 0$, altså $-5t(t - 4) = 0$. Det gir $t = 0$ (starten) eller $t = 4$ sekunder (landingen). Og det høyeste punktet? Det er toppunktet til parabelen, ved $t = \\frac{-b}{2a} = \\frac{-20}{2 \\cdot (-5)} = 2$ sekunder, med høyde $h(2) = -5 \\cdot 4 + 20 \\cdot 2 = 20$ meter.`,
    },
    {
      id: '1t-2-9-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-2-9-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'En ball kastes opp med $h(t) = -5t^2 + 30t$ meter. Når treffer ballen bakken igjen?',
        options: [
          { id: 'a', text: 'Etter $3$ sekunder', isCorrect: false },
          { id: 'b', text: 'Etter $5$ sekunder', isCorrect: false },
          { id: 'c', text: 'Etter $6$ sekunder', isCorrect: true },
          { id: 'd', text: 'Etter $4$ sekunder', isCorrect: false },
        ],
        solution: 'Vi setter $h(t) = 0$: $-5t^2 + 30t = 0$, altså $-5t(t - 6) = 0$. Det gir $t = 0$ (starten) eller $t = 6$ sekunder (landingen). Ballen treffer bakken igjen etter 6 sekunder.',
      },
    },
    {
      id: '1t-2-9-n-audio-3',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-2-9-narrativ-del3.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-2-9-n-section3',
      type: 'text',
      content: `## Pytagoras -- den rettvinklede trekantens hemmelighet

Pytagoras' setning sier at i en rettvinklet trekant er $a^2 + b^2 = c^2$, der $c$ er hypotenusen (den lengste siden) og $a$ og $b$ er katetene. Denne formelen inneholder andregradsuttrykk, og når du skal finne ukjente sidelengder ender du ofte med en andregradslikning.

Her er et typisk problem: i en rettvinklet trekant er den ene kateten 2 cm lengre enn den andre, og hypotenusen er 10 cm. Finn katetene. La den korteste kateten være $x$. Den andre er $x + 2$. Pytagoras gir oss:

$$x^2 + (x + 2)^2 = 10^2$$

Vi regner ut $(x + 2)^2 = x^2 + 4x + 4$:

$$x^2 + x^2 + 4x + 4 = 100$$
$$2x^2 + 4x + 4 = 100$$
$$2x^2 + 4x - 96 = 0$$

Vi deler på 2: $x^2 + 2x - 48 = 0$. Faktorisering: $(x + 8)(x - 6) = 0$, altså $x = -8$ eller $x = 6$. Siden en lengde ikke kan vare negativ, er $x = 6$. Katetene er 6 cm og 8 cm. Sjekk: $6^2 + 8^2 = 36 + 64 = 100 = 10^2$. Pytagoras er fornøyd.

Her er en variasjon som er litt mer hverdagslig: en stige på 5 meter står mot en vegg. Bunnen av stigen er 1 meter lenger fra veggen enn toppen er opp på veggen. Hvor høyt opp kommer stigen? La høyden opp på veggen være $x$. Avstanden fra veggen er da $x + 1$. Pytagoras gir $x^2 + (x + 1)^2 = 25$, altså $2x^2 + 2x + 1 = 25$, som gir $2x^2 + 2x - 24 = 0$, altså $x^2 + x - 12 = 0$. Faktorisering: $(x + 4)(x - 3) = 0$. Vi forkaster $x = -4$ og får $x = 3$. Stigen når 3 meter opp, med bunnen 4 meter fra veggen. Sjekk: $3^2 + 4^2 = 9 + 16 = 25 = 5^2$.`,
    },
    {
      id: '1t-2-9-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-2-9-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'I en rettvinklet trekant er den ene kateten 7 cm lengre enn den andre. Hypotenusen er 13 cm. Hva er den korteste kateten?',
        options: [
          { id: 'a', text: '$4$ cm', isCorrect: false },
          { id: 'b', text: '$6$ cm', isCorrect: false },
          { id: 'c', text: '$5$ cm', isCorrect: true },
          { id: 'd', text: '$3$ cm', isCorrect: false },
        ],
        solution: 'La den korteste kateten vare $x$. Den andre er $x + 7$. Pytagoras: $x^2 + (x + 7)^2 = 169$, altså $2x^2 + 14x + 49 = 169$, som gir $x^2 + 7x - 60 = 0$. Faktorisering: $(x + 12)(x - 5) = 0$. Vi forkaster $x = -12$ og finner $x = 5$ cm. Katetene er 5 cm og 12 cm.',
      },
    },
    {
      id: '1t-2-9-n-audio-4',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-2-9-narrativ-del4.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-2-9-n-section4',
      type: 'text',
      content: `## Tallproblemer -- når produktet av tall gir andregradsligning

Til slutt ser vi på en type oppgave som er enklere i sin form, men som likevel krever andregradslikninger: tallproblemer der produktet av to tall inngår. Produktet av to tall som begge avhenger av $x$ gir nemlig et $x^2$-ledd.

Produktet av to påfølgende positive hele tall er 132. Hvilke tall er det? La det første tallet vare $n$. Det neste er $n + 1$. Produktet gir oss:

$$n(n + 1) = 132$$
$$n^2 + n - 132 = 0$$

Vi faktoriserer: $(n + 12)(n - 11) = 0$. Det gir $n = -12$ eller $n = 11$. Siden vi ser etter positive tall, er svaret 11 og 12. Sjekk: $11 \\cdot 12 = 132$. Stemmer!

Her er en variant: "Summen av et tall og kvadratet av tallet er 72." La tallet vare $x$. Da har vi $x + x^2 = 72$, altså $x^2 + x - 72 = 0$. Vi faktoriserer: $(x + 9)(x - 8) = 0$. Det positive svaret er $x = 8$. Sjekk: $8 + 64 = 72$.

En litt annen vri: "Produktet av to påfølgende partall er 168." Partall har avstanden 2, så vi lar det første vare $n$ og det neste $n + 2$. Da er $n(n + 2) = 168$, altså $n^2 + 2n - 168 = 0$. Faktorisering: $(n + 14)(n - 12) = 0$. Det positive svaret er $n = 12$, og de to partallene er 12 og 14. Sjekk: $12 \\cdot 14 = 168$.

I alle disse eksemplene er mønsteret det samme: vi setter opp en andregradslikning, løser den, og velger den løsningen som gir mening. Det viktige er å oversette problemet til matematikk presist, og alltid vurdere svarene i lys av det oppgaven spør om.`,
    },
    {
      id: '1t-2-9-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-2-9-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Produktet av to påfølgende positive hele tall er 240. Hva er det minste av de to tallene?',
        options: [
          { id: 'a', text: '$14$', isCorrect: false },
          { id: 'b', text: '$16$', isCorrect: false },
          { id: 'c', text: '$12$', isCorrect: false },
          { id: 'd', text: '$15$', isCorrect: true },
        ],
        solution: 'La tallet vare $n$. Da er $n(n + 1) = 240$, altså $n^2 + n - 240 = 0$. Faktorisering: $(n + 16)(n - 15) = 0$. Det positive svaret er $n = 15$. Tallene er 15 og 16. Sjekk: $15 \\cdot 16 = 240$.',
      },
    },
    {
      id: '1t-2-9-n-audio-5',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-2-9-narrativ-del5.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-2-9-n-section5',
      type: 'text',
      content: `## Å tolke og forkaste løsninger

Vi har nå sett fire typer oppgaver der andregradslikninger oppstår naturlig, og et gjennomgående tema har vart at vi ofte må forkaste en av de to løsningene. La oss se nærmere på hvorfor dette skjer og hvordan vi tenker rundt det.

Når vi løser $x^2 - 14x + 48 = 0$ og får $x = 6$ og $x = 8$, er begge løsningene gyldige fordi begge gir positive sidelengder. Men når vi løser $x^2 + 5x - 150 = 0$ og får $x = 10$ og $x = -15$, må vi forkaste $x = -15$ fordi en bredde ikke kan vare negativ. Og i kastebevegelse gir $t = 0$ teknisk sett en løsning av $h(t) = 0$, men det er bare starttidspunktet, ikke det vi leter etter.

Her er noen tommelfingerregler for tolkning. Lengder, bredder og høyder må vare positive. Tid kan ikke vare negativ (vi leter etter hendelser i fremtiden, ikke fortiden). Antall enheter (personer, billetter, bøker) må vare positive hele tall. Og noen ganger gir begge løsningene mening, som i arealproblemet der $x = 6$ og $x = 8$ ga det samme rektangelet sett fra to sider.

Det er også verdt å merke seg at noen ganger gir andregradslikningen **ingen** gyldige løsninger. Hvis diskriminanten er negativ, finnes det ingen reelle løsninger, og det betyr at problemet slik det er beskrevet faktisk er umulig. For eksempel: "Et rektangel har omkrets 10 cm og areal 100 cm$^2$" gir en likning uten reelle løsninger, fordi et slikt rektangel rett og slett ikke kan eksistere.

Å løse praktiske problemer handler altså om mer enn ren regning. Det handler om å forstå hva tallene betyr.`,
    },
    {
      id: '1t-2-9-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-2-9-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Du løser en arealoppgave og finner $x = -3$ og $x = 7$. Hva gjør du?',
        options: [
          { id: 'a', text: 'Bruker begge løsningene', isCorrect: false },
          { id: 'b', text: 'Forkaster $x = 7$ fordi den er størst', isCorrect: false },
          { id: 'c', text: 'Forkaster $x = -3$ fordi lengder ikke kan vare negative', isCorrect: true },
          { id: 'd', text: 'Likningen har ingen løsning', isCorrect: false },
        ],
        solution: 'I en arealoppgave representerer $x$ en lengde, som alltid må vare positiv. Vi forkaster $x = -3$ og beholder $x = 7$.',
      },
    },
    {
      id: '1t-2-9-n-audio-6',
      type: 'audio',
      title: 'Lytt til oppsummeringen',
      src: '/audio/1t/1t-2-9-narrativ-del6.mp3',
      description: 'Lydfil som leser opp oppsummeringen.',
    },
    {
      id: '1t-2-9-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi sett at andregradslikninger dukker opp naturlig i fire typer praktiske problemer. **Arealproblemer** oppstår fordi areal er lengde ganget med bredde, og når begge dimensjonene uttrykkes med samme variabel får vi et $x^2$-ledd. **Kastebevegelse** beskrives av formelen $h(t) = -5t^2 + v_0 t + h_0$, der to tidspunkter ofte svarer til "på vei opp" og "på vei ned". **Pytagoras' setning** $a^2 + b^2 = c^2$ gir andregradslikninger når vi setter inn uttrykk med variabler for sidelengdene. Og **tallproblemer** der produktet av to avhengige tall inngår fører også til $x^2$.

Fremgangsmåten er den samme som for lineære tekstoppgaver, men med et ekstra steg: les nøye, innfør variabel, sett opp likningen, løs den (her med faktorisering, fullstendig kvadrat eller abc-formelen), og til slutt forkast løsninger som ikke gir mening i konteksten. Husk at lengder, bredder, høyder og antall alltid må vare positive, og at tid normalt ikke kan vare negativ.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.10 NARRATIV: Polynomdivisjon og likningsløsning
// ============================================================================

export const CHAPTER_1T_2_10_NARRATIV: TextbookChapter = {
  id: '1t-2-10-narrativ',
  courseId: '1t',
  chapterNumber: '2.10',
  title: 'Polynomdivisjon og likningsløsning',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan du bruker polynomdivisjon og faktorteoremet til å knekke polynomlikninger av tredje og fjerde grad.',
  estimatedMinutes: 35,
  competenceGoals: ['bruke polynomdivisjon til å løse likninger'],
  linkedChapterId: '1t-2-10',
  content: [
    {
      id: '1t-2-10-n-audio-1',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-2-10-narrativ-del1.mp3',
      description: 'Lydfil som leser opp teksten frem til første quiz.',
    },
    {
      id: '1t-2-10-n-intro',
      type: 'text',
      content: `## Å knekke polynomer i biter

Tenk deg at du har en tredjegradsligning som $x^3 - 6x^2 + 11x - 6 = 0$. Du kan ikke bruke abc-formelen, for den gjelder bare andregradslikninger. Hva gjør du da?

Svaret er en elegant strategi i tre steg. Først finner du ett nullpunkt ved å prøve deg frem. Deretter bruker du polynomdivisjon til å dele polynomet på faktoren du fant, slik at du sitter igjen med et enklere polynom. Til slutt løser du det enklere polynomet med metodene du allerede kan.

Denne teknikken bygger på **faktorteoremet**: hvis $P(a) = 0$, altså at $a$ er et nullpunkt, så er $(x - a)$ en faktor i $P(x)$. Det betyr at $P(x) = (x - a) \\cdot Q(x)$ for et polynom $Q(x)$ av lavere grad. Og $Q(x)$ finner du ved polynomdivisjon.`,
    },
    {
      id: '1t-2-10-n-section1',
      type: 'text',
      content: `## Tredjegradslikninger -- steg for steg

La oss ta likningen $x^3 - 6x^2 + 11x - 6 = 0$ og jobbe oss gjennom den systematisk. Først trenger vi et nullpunkt. Et smart triks er å prøve **divisorene av konstantleddet**. Konstantleddet her er $-6$, og divisorene er $\\pm 1, \\pm 2, \\pm 3, \\pm 6$. Vi prøver $x = 1$: $P(1) = 1 - 6 + 11 - 6 = 0$. Bingo!

Nå vet vi at $(x - 1)$ er en faktor. Vi utfører polynomdivisjon: $(x^3 - 6x^2 + 11x - 6) : (x - 1) = x^2 - 5x + 6$. Nå har vi redusert problemet til en andregradslikning: $x^2 - 5x + 6 = 0$. Denne faktoriserer vi: $(x - 2)(x - 3) = 0$.

Den fullstendige faktoriseringen er altså $x^3 - 6x^2 + 11x - 6 = (x - 1)(x - 2)(x - 3) = 0$, og løsningene er $x = 1$, $x = 2$ og $x = 3$. Legg merke til det vakre: en tredjegradsligning kan ha opptil tre løsninger.

La oss prøve et til: $x^3 - 4x^2 + x + 6 = 0$. Konstantleddet er 6. Vi prøver $x = -1$: $P(-1) = -1 - 4 - 1 + 6 = 0$. Det fungerer! Polynomdivisjon gir $(x^3 - 4x^2 + x + 6) : (x + 1) = x^2 - 5x + 6 = (x - 2)(x - 3)$. Løsningene er $x = -1$, $x = 2$ og $x = 3$.

Mønsteret er alltid det samme: finn ett nullpunkt, divider, og løs resten. Noen ganger er andregradslikningen du ender opp med enkel å faktorisere, andre ganger trenger du abc-formelen.`,
    },
    {
      id: '1t-2-10-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-2-10-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Du skal løse $x^3 + 6x^2 + 11x + 6 = 0$ og prøver $x = -1$. Hva finner du?',
        options: [
          { id: 'a', text: '$P(-1) = 2$, altså er $-1$ ikke et nullpunkt', isCorrect: false },
          { id: 'b', text: '$P(-1) = 0$, altså er $(x + 1)$ en faktor', isCorrect: true },
          { id: 'c', text: '$P(-1) = -6$, altså er $-1$ ikke et nullpunkt', isCorrect: false },
          { id: 'd', text: '$P(-1) = 0$, altså er $(x - 1)$ en faktor', isCorrect: false },
        ],
        solution: 'Vi regner ut: $P(-1) = (-1)^3 + 6(-1)^2 + 11(-1) + 6 = -1 + 6 - 11 + 6 = 0$. Siden $P(-1) = 0$, er $(x - (-1)) = (x + 1)$ en faktor.',
      },
    },
    {
      id: '1t-2-10-n-audio-2',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-2-10-narrativ-del2.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-2-10-n-section2',
      type: 'text',
      content: `## Hva skjer når kvotienten ikke lar seg faktorisere pent?

Ikke alle tredjegradslikninger har tre pene heltallsløsninger. Noen ganger faktoriserer du vekk ett nullpunkt og sitter igjen med en andregradslikning som har irrasjonale løsninger (med kvadratrøtter) eller til og med ingen reelle løsninger.

Ta for eksempel $x^3 - 8 = 0$. Her ser vi raskt at $x = 2$ er et nullpunkt, fordi $2^3 = 8$. Vi deler: $(x^3 - 8) : (x - 2) = x^2 + 2x + 4$. Nå prøver vi å løse $x^2 + 2x + 4 = 0$. Diskriminanten er $\\Delta = 4 - 16 = -12$. Den er negativ! Det betyr at denne andregradslikningen ikke har noen reelle løsninger. Altså er $x = 2$ den eneste reelle løsningen av $x^3 - 8 = 0$.

Selv om det kan føles skuffende å "bare" finne en løsning, gir det faktisk god mening. Grafen til $y = x^3 - 8$ krysser $x$-aksen bare ett sted. De to andre løsningene eksisterer i det komplekse tallplanet, men det er stoff for senere kurs.

Et annet eksempel der du kan forenkle uten polynomdivisjon er $x^3 - 27 = 0$. Her er løsningen rett og slett $x = \\sqrt[3]{27} = 3$. Og for $x^3 + 8 = 0$ får vi $x^3 = -8$, altså $x = \\sqrt[3]{-8} = -2$. Kubikkrøtter av negative tall er gyldige, i motsetning til kvadratrøtter.

Denne typen likninger der polynomet har formen $x^3 - a = 0$ kalles **kubiske likninger**, og de har alltid nøyaktig en reell løsning: $x = \\sqrt[3]{a}$.`,
    },
    {
      id: '1t-2-10-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-2-10-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hvor mange reelle løsninger har $x^3 - 27 = 0$?',
        options: [
          { id: 'a', text: 'Ingen', isCorrect: false },
          { id: 'b', text: 'To', isCorrect: false },
          { id: 'c', text: 'Tre', isCorrect: false },
          { id: 'd', text: 'En', isCorrect: true },
        ],
        solution: '$x^3 = 27$ gir $x = \\sqrt[3]{27} = 3$. Polynomdivisjon gir $(x^3 - 27) : (x - 3) = x^2 + 3x + 9$. Diskriminanten er $9 - 36 = -27 < 0$, så andregradslikningen har ingen reelle løsninger. Dermed er $x = 3$ den eneste reelle løsningen.',
      },
    },
    {
      id: '1t-2-10-n-audio-3',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-2-10-narrativ-del3.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-2-10-n-section3',
      type: 'text',
      content: `## Fjerdegradslikninger -- når du må dele to ganger

Hva gjør du med en fjerdegradsligning som $x^4 - 5x^2 + 4 = 0$? Her finnes det to elegante tilnærminger.

Den første er **substitusjon**. Legg merke til at likningen bare inneholder $x^4$ og $x^2$, ingen $x^3$ eller $x$. Hvis vi setter $u = x^2$, blir likningen $u^2 - 5u + 4 = 0$. Dette er en vanlig andregradslikning! Vi faktoriserer: $(u - 1)(u - 4) = 0$, som gir $u = 1$ eller $u = 4$. Nå går vi tilbake: $x^2 = 1$ gir $x = \\pm 1$, og $x^2 = 4$ gir $x = \\pm 2$. Fire løsninger!

Den andre tilnærmingen er **direkte faktorisering**: $x^4 - 5x^2 + 4 = (x^2 - 1)(x^2 - 4) = (x - 1)(x + 1)(x - 2)(x + 2)$. Samme resultat, men kanskje enda raskere.

Slike likninger der bare partallspotenser av $x$ opptrer kalles **bikubiske** (eller **biquadratiske**) likninger, og substitusjon er standardmetoden.

Men ikke alle fjerdegradslikninger er bikubiske. For en generell fjerdegradsligning som $x^4 + x^3 - 4x^2 - 4x = 0$ kan du noen ganger starte med å sette felles faktor utenfor. Her: $x(x^3 + x^2 - 4x - 4) = 0$. En løsning er umiddelbart $x = 0$. For den kubiske delen prøver du $x = -1$: $(-1)^3 + (-1)^2 - 4(-1) - 4 = -1 + 1 + 4 - 4 = 0$. Det fungerer! Polynomdivisjon gir $x^2 - 4 = (x - 2)(x + 2)$. De fire løsningene er altså $x = 0$, $x = -1$, $x = 2$ og $x = -2$.

Hovedpoenget er at fjerdegradslikninger krever mer arbeid, men strategien er den samme: del problemet opp i mindre biter, steg for steg.`,
    },
    {
      id: '1t-2-10-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-2-10-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva er det smarteste første steget for å løse $x^4 - 10x^2 + 9 = 0$?',
        options: [
          { id: 'a', text: 'Prøve $x = 1$ som nullpunkt og bruke polynomdivisjon', isCorrect: false },
          { id: 'b', text: 'Sette $u = x^2$ og løse $u^2 - 10u + 9 = 0$', isCorrect: true },
          { id: 'c', text: 'Bruke abc-formelen direkte', isCorrect: false },
          { id: 'd', text: 'Sette felles faktor utenfor', isCorrect: false },
        ],
        solution: 'Likningen inneholder bare $x^4$ og $x^2$ (ingen $x^3$ eller $x$), så substitusjon $u = x^2$ er den smarteste tilnærmingen. Da blir det $u^2 - 10u + 9 = (u - 1)(u - 9) = 0$, som gir $u = 1$ eller $u = 9$, altså $x = \\pm 1$ eller $x = \\pm 3$.',
      },
    },
    {
      id: '1t-2-10-n-audio-4',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-2-10-narrativ-del4.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-2-10-n-section4',
      type: 'text',
      content: `## Å velge riktig strategi

Vi har nå sett flere metoder for å løse polynomlikninger, og det er verdt å stoppe opp og tenke over når du bruker hvilken.

For **andregradslikninger** ($ax^2 + bx + c = 0$) har du tre verktøy: faktorisering, fullstendig kvadrat og abc-formelen. Velg den som passer best for den konkrete oppgaven.

For **tredjegradslikninger** er strategien alltid den samme: finn ett nullpunkt ved å prøve divisorer av konstantleddet, bruk polynomdivisjon for å redusere til en andregradslikning, og løs den med en av de tre metodene over.

For **fjerdegradslikninger** har du to hovedvalg. Hvis likningen er biquadratisk (bare partallspotenser), bruk substitusjon $u = x^2$. Ellers, se om du kan sette felles faktor utenfor, eller finn et nullpunkt og bruk polynomdivisjon gjentatte ganger.

En ting til om å finne nullpunkter ved prøving: det er ikke tilfeldig gjetting. Start alltid med divisorene av konstantleddet. Ifølge den rasjonale-rot-teoremet, hvis polynomet har heltallskoeffisienter, er alle rasjonale nullpunkter av formen $\\frac{p}{q}$ der $p$ er en divisor av konstantleddet og $q$ er en divisor av ledende koeffisient. For de fleste oppgavene du møter i 1T, er den ledende koeffisienten 1, så du prøver bare divisorene av konstantleddet: $\\pm 1, \\pm 2, \\pm 3$ osv.

Et tips til slutt: doble nullpunkter finnes også. I likningen $x^4 - 4x^3 + 4x^2 = 0$ kan du sette $x^2$ utenfor: $x^2(x^2 - 4x + 4) = x^2(x - 2)^2 = 0$. Her er $x = 0$ et dobbelt nullpunkt og $x = 2$ et dobbelt nullpunkt.`,
    },
    {
      id: '1t-2-10-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-2-10-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Likningen $x^3 - 2x^2 - 5x + 6 = 0$ har konstantledd 6. Hvilke verdier bør du prøve først?',
        options: [
          { id: 'a', text: '$x = 0, 1, 2, 3$', isCorrect: false },
          { id: 'b', text: '$x = \\pm 1, \\pm 2, \\pm 3, \\pm 6$', isCorrect: true },
          { id: 'c', text: '$x = 1, 2, 3, 4, 5, 6$', isCorrect: false },
          { id: 'd', text: '$x = -6, -5, -4, -3, -2, -1$', isCorrect: false },
        ],
        solution: 'Vi prøver divisorene av konstantleddet, inkludert negative verdier: $\\pm 1, \\pm 2, \\pm 3, \\pm 6$. Prøving viser at $P(1) = 1 - 2 - 5 + 6 = 0$, så $x = 1$ er et nullpunkt.',
      },
    },
    {
      id: '1t-2-10-n-audio-5',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-2-10-narrativ-del5.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-2-10-n-section5',
      type: 'text',
      content: `## Et komplett eksempel fra start til slutt

La oss avslutte med å jobbe gjennom et mer sammensatt eksempel for å se hele prosessen i aksjon. Vi skal løse $2x^3 - 3x^2 - 11x + 6 = 0$.

Konstantleddet er 6 og den ledende koeffisienten er 2. Mulige rasjonale nullpunkter er av formen $\\frac{p}{q}$ der $p$ deler 6 og $q$ deler 2. Det gir kandidatene $\\pm 1, \\pm 2, \\pm 3, \\pm 6, \\pm \\frac{1}{2}, \\pm \\frac{3}{2}$.

Vi prøver $x = 3$: $P(3) = 2 \\cdot 27 - 3 \\cdot 9 - 11 \\cdot 3 + 6 = 54 - 27 - 33 + 6 = 0$. Fantastisk!

Polynomdivisjon: $(2x^3 - 3x^2 - 11x + 6) : (x - 3) = 2x^2 + 3x - 2$. Nå løser vi $2x^2 + 3x - 2 = 0$. Vi kan faktorisere: $(2x - 1)(x + 2) = 0$, som gir $x = \\frac{1}{2}$ eller $x = -2$.

De tre løsningene er altså $x = 3$, $x = \\frac{1}{2}$ og $x = -2$. Legg merke til at $\\frac{1}{2}$ er en brøk -- det skjer når den ledende koeffisienten ikke er 1.

Vi kan sjekke ved å sette inn: $P\\left(\\frac{1}{2}\\right) = 2 \\cdot \\frac{1}{8} - 3 \\cdot \\frac{1}{4} - 11 \\cdot \\frac{1}{2} + 6 = \\frac{1}{4} - \\frac{3}{4} - \\frac{11}{2} + 6 = \\frac{1 - 3}{4} + \\frac{-11 + 12}{2} = -\\frac{1}{2} + \\frac{1}{2} = 0$. Stemmer!

Hele prosessen kan oppsummeres i fire ord: prøv, del, løs, sjekk.`,
    },
    {
      id: '1t-2-10-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-2-10-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Du har utført polynomdivisjon og fått $(x^3 + 2x^2 - x - 2) : (x - 1) = x^2 + 3x + 2$. Hva er de tre løsningene av $x^3 + 2x^2 - x - 2 = 0$?',
        options: [
          { id: 'a', text: '$x = 1, x = 2, x = 3$', isCorrect: false },
          { id: 'b', text: '$x = 1, x = -1, x = 2$', isCorrect: false },
          { id: 'c', text: '$x = 1, x = -1, x = -2$', isCorrect: true },
          { id: 'd', text: '$x = -1, x = -2, x = -3$', isCorrect: false },
        ],
        solution: 'Vi har allerede $x = 1$ fra divisjonen. Kvotienten $x^2 + 3x + 2 = (x + 1)(x + 2) = 0$ gir $x = -1$ og $x = -2$. De tre løsningene er $x = 1$, $x = -1$ og $x = -2$.',
      },
    },
    {
      id: '1t-2-10-n-audio-6',
      type: 'audio',
      title: 'Lytt til oppsummeringen',
      src: '/audio/1t/1t-2-10-narrativ-del6.mp3',
      description: 'Lydfil som leser opp oppsummeringen.',
    },
    {
      id: '1t-2-10-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi lært en systematisk metode for å løse polynomlikninger av høyere grad enn andre. Nøkkelen er **faktorteoremet**: hvis $P(a) = 0$, så er $(x - a)$ en faktor i $P(x)$.

For **tredjegradslikninger** prøver du divisorer av konstantleddet for å finne et nullpunkt. Deretter utfører du polynomdivisjon for å redusere polynomet til en andregradslikning, som du løser med faktorisering, fullstendig kvadrat eller abc-formelen.

For **fjerdegradslikninger** har du to hovedstrategier. Er likningen biquadratisk (bare partallspotenser av $x$), bruker du substitusjon $u = x^2$ for å redusere til en andregradslikning. Ellers settes felles faktor utenfor, eller du finner nullpunkter og bruker polynomdivisjon gjentatte ganger til du kommer ned til andregradslikninger.

Spesialtilfellene $x^3 = a$ og $x^4 = a$ løses direkte med $x = \\sqrt[3]{a}$ og $x = \\pm \\sqrt[4]{a}$. Husk at en tredjegradsligning har opptil tre reelle løsninger, mens en fjerdegradsligning kan ha opptil fire. Noen av disse kan vaere doble nullpunkter. Og noen ganger gir andregradslikningen du ender opp med negativ diskriminant, noe som betyr at det ikke finnes flere reelle løsninger.`,
    },
  ],
  exercises: [],
};
