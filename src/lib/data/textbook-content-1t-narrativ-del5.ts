/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 1T – NARRATIV VERSJON DEL 5
 * Kapittel 5.5: Areal av trekanter
 * Kapittel 5.6: Sinussetningen
 * Kapittel 5.7: Cosinussetningen
 * Kapittel 6.1: Matematisk argumentasjon
 * Kapittel 6.2: Lese og forstå bevis
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * å lese og lytte til, med quiz-spørsmål for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.5 NARRATIV: Areal av trekanter
// ============================================================================

export const CHAPTER_1T_5_5_NARRATIV: TextbookChapter = {
  id: '1t-5-5-narrativ',
  courseId: '1t',
  chapterNumber: '5.5',
  title: 'Areal av trekanter',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan du finner arealet av en trekant – fra den klassiske grunnlinje-ganger-høyde-formelen til den kraftige arealsetningen med sinus.',
  estimatedMinutes: 35,
  competenceGoals: ['beregne areal av trekanter med ulike metoder'],
  linkedChapterId: '1t-5-5',
  content: [
    {
      id: '1t-5-5-n-audio-1',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-5-5-narrativ-del1.mp3',
      description: 'Lydfil som leser opp teksten frem til første quiz.',
    },
    {
      id: '1t-5-5-n-intro',
      type: 'text',
      content: `## Hvor stort er egentlig et trekantet felt?

Forestill deg at du står foran en uregelmessig tomt formet som en trekant. Eiendomsmegleren har gitt deg noen mål, og du trenger å vite nøyaktig hvor stort arealet er. Problemet er at trekanter sjelden er pene og rettvinklede – de kan ha alle slags former og vinkler. Heldigvis finnes det flere formler som hjelper oss, avhengig av hvilken informasjon vi har tilgjengelig.

I dette kapittelet skal vi utforske tre ulike tilnærminger til å finne arealet av en trekant. Vi starter med den klassiske formelen du kanskje husker fra ungdomsskolen, og bygger videre til den elegante **arealsetningen** som bruker trigonometri. Til slutt tar vi en titt på **Herons formel**, som klarer seg bare med sidelengdene.`,
    },
    {
      id: '1t-5-5-n-section1',
      type: 'text',
      content: `## Grunnlinje og høyde – den klassiske formelen

La oss begynne med det mest grunnleggende. Hvis du kjenner **grunnlinjen** $g$ og **høyden** $h$ i en trekant, kan du alltid finne arealet med formelen:

$$A = \\frac{1}{2} \\cdot g \\cdot h$$

Men hva betyr egentlig «høyde» her? Det er den vinkelrette avstanden fra grunnlinjen opp til det motstående hjørnet. Tenk deg at du slipper en loddrett linje fra toppen av trekanten rett ned til grunnlinjen – den linjens lengde er høyden.

Hvorfor fungerer denne formelen? Tenk på et rektangel med sider $g$ og $h$. Arealet av rektangelet er $g \\cdot h$. Nå kan du alltid dele rektangelet slik at trekanten utgjør nøyaktig halvparten av det – derav faktoren $\\frac{1}{2}$.

La oss prøve et eksempel. En trekant har grunnlinje 8 cm og høyde 5 cm. Da blir arealet $A = \\frac{1}{2} \\cdot 8 \\cdot 5 = 20$ cm². Enkelt og greit.

Denne formelen fungerer for **alle** trekanter, men den har én begrensning: du må kjenne høyden. I mange praktiske situasjoner er det ikke høyden vi vet, men sidene og vinklene. Da trenger vi noe mer.`,
    },
    {
      id: '1t-5-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-5-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'En trekant har grunnlinje 14 cm og høyde 9 cm. Hva er arealet?',
        options: [
          { id: 'a', text: '$126$ cm²', isCorrect: false },
          { id: 'b', text: '$63$ cm²', isCorrect: true },
          { id: 'c', text: '$56$ cm²', isCorrect: false },
          { id: 'd', text: '$72$ cm²', isCorrect: false },
        ],
        solution: 'Vi bruker formelen $A = \\frac{1}{2} \\cdot g \\cdot h = \\frac{1}{2} \\cdot 14 \\cdot 9 = \\frac{126}{2} = 63$ cm².',
      },
    },
    {
      id: '1t-5-5-n-audio-2',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-5-5-narrativ-del2.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-5-5-n-section2',
      type: 'text',
      content: `## Arealsetningen – når du kjenner to sider og vinkelen mellom

Nå kommer det virkelig spennende. Tenk deg at du kjenner to sider i en trekant og vinkelen mellom dem, men ikke høyden. Kan du likevel finne arealet? Ja, og det er her **arealsetningen** kommer inn:

$$A = \\frac{1}{2} \\cdot a \\cdot b \\cdot \\sin C$$

Her er $a$ og $b$ to sider i trekanten, og $C$ er vinkelen mellom dem. Legg merke til at det er vinkelen *mellom* de to sidene som teller – ikke en tilfeldig vinkel.

Hvorfor fungerer dette? La oss tenke på det. Hvis vi kaller den ene siden for grunnlinjen, så er høyden den vinkelrette avstanden ned fra det motstående hjørnet. Med trigonometri vet vi at $h = a \\cdot \\sin C$. Setter vi dette inn i den klassiske formelen, får vi $A = \\frac{1}{2} \\cdot b \\cdot a \\cdot \\sin C$. Og der har vi arealsetningen.

La oss teste den. En trekant har sider 7 cm og 9 cm, og vinkelen mellom dem er 50°. Da blir arealet $A = \\frac{1}{2} \\cdot 7 \\cdot 9 \\cdot \\sin 50° = \\frac{1}{2} \\cdot 63 \\cdot 0{,}766 \\approx 24{,}1$ cm².

Hva med en likesidet trekant med side 6 cm? Alle vinkler er 60°, så $A = \\frac{1}{2} \\cdot 6 \\cdot 6 \\cdot \\sin 60° = 18 \\cdot \\frac{\\sqrt{3}}{2} = 9\\sqrt{3} \\approx 15{,}6$ cm².`,
    },
    {
      id: '1t-5-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-5-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'En trekant har sider 5 cm og 8 cm med vinkel 30° mellom dem. Hva er arealet?',
        options: [
          { id: 'a', text: '$20$ cm²', isCorrect: false },
          { id: 'b', text: '$15$ cm²', isCorrect: false },
          { id: 'c', text: '$10$ cm²', isCorrect: true },
          { id: 'd', text: '$8$ cm²', isCorrect: false },
        ],
        solution: 'Vi bruker arealsetningen: $A = \\frac{1}{2} \\cdot 5 \\cdot 8 \\cdot \\sin 30° = \\frac{1}{2} \\cdot 40 \\cdot 0{,}5 = 10$ cm². Husk at $\\sin 30° = 0{,}5$.',
      },
    },
    {
      id: '1t-5-5-n-audio-3',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-5-5-narrativ-del3.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-5-5-n-section3',
      type: 'text',
      content: `## Finne vinkelen når arealet er kjent

Arealsetningen er ikke bare nyttig for å finne arealet – vi kan også bruke den «baklengs». Hvis vi kjenner arealet og to sider, kan vi finne vinkelen mellom dem.

Tenk deg dette: to sider i en trekant er 8 m og 10 m, og arealet er 32 m². Hva er vinkelen mellom sidene? Vi setter inn i arealsetningen og løser for vinkelen:

$32 = \\frac{1}{2} \\cdot 8 \\cdot 10 \\cdot \\sin C$

$32 = 40 \\cdot \\sin C$

$\\sin C = \\frac{32}{40} = 0{,}8$

$C = \\sin^{-1}(0{,}8) \\approx 53{,}1°$

Men her er det noe viktig vi må huske: ligningen $\\sin C = 0{,}8$ har faktisk to løsninger. Siden $\\sin(180° - v) = \\sin v$, kan vinkelen også være $C = 180° - 53{,}1° = 126{,}9°$. Begge verdiene er matematisk gyldige. I praksis må vi vurdere konteksten for å avgjøre hvilken vinkel som gir mening – en spiss eller en stump vinkel.

Det er også verdt å merke seg at arealet av en trekant med to gitte sider blir størst når vinkelen mellom dem er $90°$, fordi $\\sin 90° = 1$ er den største verdien sinusfunksjonen kan ha. Hvis to sider er 7 m og 11 m, er det maksimale arealet $A = \\frac{1}{2} \\cdot 7 \\cdot 11 \\cdot 1 = 38{,}5$ m².`,
    },
    {
      id: '1t-5-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-5-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'To sider i en trekant er 6 cm og 10 cm. Hva er det størst mulige arealet?',
        options: [
          { id: 'a', text: '$60$ cm²', isCorrect: false },
          { id: 'b', text: '$25$ cm²', isCorrect: false },
          { id: 'c', text: '$15$ cm²', isCorrect: false },
          { id: 'd', text: '$30$ cm²', isCorrect: true },
        ],
        solution: 'Arealet er størst når vinkelen mellom sidene er $90°$ (fordi $\\sin 90° = 1$). Da blir $A = \\frac{1}{2} \\cdot 6 \\cdot 10 \\cdot 1 = 30$ cm².',
      },
    },
    {
      id: '1t-5-5-n-audio-4',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-5-5-narrativ-del4.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-5-5-n-section4',
      type: 'text',
      content: `## Herons formel – bare sidene er nok

Noen ganger kjenner vi ingen vinkler og ingen høyde – vi vet bare lengden på de tre sidene. Da kommer **Herons formel** til unnsetning. Denne formelen er oppkalt etter Heron av Alexandria, en gresk matematiker som levde for nesten 2000 år siden.

Formelen har to steg. Først beregner vi den såkalte **halve omkretsen** $s$:

$$s = \\frac{a + b + c}{2}$$

Deretter bruker vi denne til å finne arealet:

$$A = \\sqrt{s(s - a)(s - b)(s - c)}$$

Det kan virke mystisk at bare sidelengdene er nok til å bestemme arealet, men det gir mening: tre sidelengder bestemmer trekanten unikt (opp til speilvending), og dermed er arealet også entydig bestemt.

La oss ta et raskt eksempel. En trekant har sider 3, 4 og 5. Vi regner ut $s = \\frac{3 + 4 + 5}{2} = 6$. Deretter: $A = \\sqrt{6 \\cdot (6-3) \\cdot (6-4) \\cdot (6-5)} = \\sqrt{6 \\cdot 3 \\cdot 2 \\cdot 1} = \\sqrt{36} = 6$. Du kjenner kanskje igjen at en 3-4-5-trekant er rettvinklet, og arealet $\\frac{1}{2} \\cdot 3 \\cdot 4 = 6$ stemmer perfekt.

Et viktig poeng: Herons formel er spesielt nyttig i praksis, for eksempel i landmåling, der du kan måle sidelengder direkte uten å kjenne vinklene.`,
    },
    {
      id: '1t-5-5-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-5-5-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Du skal bruke arealsetningen. Hvilken informasjon trenger du?',
        options: [
          { id: 'a', text: 'Alle tre sidene', isCorrect: false },
          { id: 'b', text: 'To sider og vinkelen mellom dem', isCorrect: true },
          { id: 'c', text: 'Grunnlinje og høyde', isCorrect: false },
          { id: 'd', text: 'Alle tre vinklene', isCorrect: false },
        ],
        solution: 'Arealsetningen $A = \\frac{1}{2} \\cdot a \\cdot b \\cdot \\sin C$ krever to sider ($a$ og $b$) og vinkelen mellom dem ($C$). Kjenner du bare sidene, bruker du Herons formel. Kjenner du grunnlinje og høyde, bruker du den klassiske formelen.',
      },
    },
    {
      id: '1t-5-5-n-audio-5',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-5-5-narrativ-del5.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-5-5-n-section5',
      type: 'text',
      content: `## Velg riktig formel – og et nyttig triks for parallellogrammer

Nå som du kjenner tre ulike arealformler, er det viktig å vite hvilken du skal velge. Her er tommelfingerregelen: se på hva du vet om trekanten.

Kjenner du **grunnlinje og høyde**, bruker du $A = \\frac{1}{2} \\cdot g \\cdot h$. Kjenner du **to sider og vinkelen mellom dem**, bruker du arealsetningen $A = \\frac{1}{2} \\cdot a \\cdot b \\cdot \\sin C$. Kjenner du **bare de tre sidene**, bruker du Herons formel.

La oss se på en praktisk anvendelse: arealet av en parallellogram. En parallellogram kan deles inn i to kongruente trekanter langs en diagonal. Hver trekant har sider $a$ og $b$ med vinkel $C$ mellom dem, og areal $\\frac{1}{2} \\cdot a \\cdot b \\cdot \\sin C$. Hele parallellogrammet har da arealet $a \\cdot b \\cdot \\sin C$.

For eksempel: en parallellogram har sider 8 cm og 12 cm, og en vinkel på 70°. Arealet blir $8 \\cdot 12 \\cdot \\sin 70° \\approx 90{,}2$ cm².

Et trekantet tomt med sider 40 m og 55 m og vinkel 65° mellom dem har areal $A = \\frac{1}{2} \\cdot 40 \\cdot 55 \\cdot \\sin 65° \\approx 997$ m². Det er nesten en dekar – omtrent som en liten hage.

Det store bildet er dette: arealsetningen er en av de mest allsidige formlene i trigonometrien. Den dukker opp igjen og igjen i praktiske problemer, fra arkitektur til navigasjon.`,
    },
    {
      id: '1t-5-5-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-5-5-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'En parallellogram har sider 10 cm og 6 cm, og vinkelen mellom dem er 90°. Hva er arealet?',
        options: [
          { id: 'a', text: '$30$ cm²', isCorrect: false },
          { id: 'b', text: '$120$ cm²', isCorrect: false },
          { id: 'c', text: '$60$ cm²', isCorrect: true },
          { id: 'd', text: '$45$ cm²', isCorrect: false },
        ],
        solution: 'Arealet av parallellogrammet er $a \\cdot b \\cdot \\sin C = 10 \\cdot 6 \\cdot \\sin 90° = 60 \\cdot 1 = 60$ cm². Når vinkelen er $90°$, er parallellogrammet et rektangel, og formelen gir det vanlige arealet lengde ganger bredde.',
      },
    },
    {
      id: '1t-5-5-n-audio-6',
      type: 'audio',
      title: 'Lytt til oppsummeringen',
      src: '/audio/1t/1t-5-5-narrativ-del6.mp3',
      description: 'Lydfil som leser opp oppsummeringen.',
    },
    {
      id: '1t-5-5-n-summary',
      type: 'text',
      content: `## Oppsummering

Vi har nå tre kraftige verktøy for å finne arealet av en trekant.

Den **klassiske formelen** $A = \\frac{1}{2} \\cdot g \\cdot h$ er den enkleste og krever at vi kjenner grunnlinjen og den vinkelrette høyden. Den er rask å bruke, men forutsetter at høyden er kjent eller lett å finne.

**Arealsetningen** $A = \\frac{1}{2} \\cdot a \\cdot b \\cdot \\sin C$ er den mest allsidige formelen. Den bruker to sider og vinkelen mellom dem, og utleder egentlig høyden for oss via sinusfunksjonen. Denne formelen er spesielt nyttig fordi den også lar oss finne ukjente vinkler når arealet er kjent. Husk at arealet blir størst når vinkelen er $90°$.

**Herons formel** $A = \\sqrt{s(s-a)(s-b)(s-c)}$ der $s = \\frac{a+b+c}{2}$ trenger bare de tre sidelengdene. Den er praktisk i situasjoner der du kan måle sider direkte, men ikke vinkler.

For parallellogrammer gjelder en tilsvarende formel: $A = a \\cdot b \\cdot \\sin C$, uten faktoren $\\frac{1}{2}$, fordi parallellogrammet er dobbelt så stort som hver av de to trekantene det består av.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.6 NARRATIV: Sinussetningen
// ============================================================================

export const CHAPTER_1T_5_6_NARRATIV: TextbookChapter = {
  id: '1t-5-6-narrativ',
  courseId: '1t',
  chapterNumber: '5.6',
  title: 'Sinussetningen',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om sinussetningen – hvordan den knytter sider og vinkler sammen i alle trekanter, og hva du gjør når løsningen ikke er entydig.',
  estimatedMinutes: 40,
  competenceGoals: ['begrunne sinussetningen', 'bruke sinussetningen til å løse trekanter'],
  linkedChapterId: '1t-5-6',
  content: [
    {
      id: '1t-5-6-n-audio-1',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-5-6-narrativ-del1.mp3',
      description: 'Lydfil som leser opp teksten frem til første quiz.',
    },
    {
      id: '1t-5-6-n-intro',
      type: 'text',
      content: `## Sider og vinkler i samtale

I en rettvinklet trekant har vi sinusdefinisjonen $\\sin v = \\frac{\\text{motstående katet}}{\\text{hypotenus}}$ som lar oss koble vinkler til sider. Men hva gjør vi når trekanten ikke har noen rett vinkel? Da trenger vi en mer generell formel.

**Sinussetningen** er nettopp det – en formel som gjelder for *alle* trekanter, enten de er spisse, stumpe eller rettvinklede. Den gir oss en vakker sammenheng: forholdet mellom en side og sinusverdien til den motstående vinkelen er det samme for alle tre sidene i trekanten. I dette kapittelet skal vi utlede denne setningen, lære å bruke den, og forstå det berømte tvetydige tilfellet der vi kan få to ulike svar.`,
    },
    {
      id: '1t-5-6-n-section1',
      type: 'text',
      content: `## Setningen og dens begrunnelse

La oss kalle sidene i trekanten $a$, $b$ og $c$, og de motstående vinklene $A$, $B$ og $C$. Sinussetningen sier:

$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$$

Legg merke til symmetrien: hver side hører sammen med sin motstående vinkel. Side $a$ ligger overfor vinkel $A$, side $b$ overfor vinkel $B$, og side $c$ overfor vinkel $C$. Alle tre forholdstallene er like.

Hvorfor er dette sant? La oss tenke oss at vi trekker høyden $h$ fra hjørne $C$ vinkelrett ned på siden $c$. Denne høyden deler trekanten i to rettvinklede trekanter. Fra den venstre trekanten ser vi at $\\sin A = \\frac{h}{b}$, som gir $h = b \\cdot \\sin A$. Fra den høyre trekanten ser vi at $\\sin B = \\frac{h}{a}$, som gir $h = a \\cdot \\sin B$.

Siden begge uttrykkene er lik samme $h$, kan vi sette dem like: $b \\cdot \\sin A = a \\cdot \\sin B$. Deler vi begge sider på $\\sin A \\cdot \\sin B$, får vi $\\frac{b}{\\sin B} = \\frac{a}{\\sin A}$. Ved å gjenta argumentet med en annen høyde får vi hele sinussetningen. Beviset er overraskende enkelt – vi bruker bare definisjonen av sinus i rettvinklede trekanter og det at høyden kan uttrykkes fra to forskjellige sider.`,
    },
    {
      id: '1t-5-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-5-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva sier sinussetningen om en trekant med sider $a$, $b$, $c$ og motstående vinkler $A$, $B$, $C$?',
        options: [
          { id: 'a', text: '$a^2 = b^2 + c^2 - 2bc \\cos A$', isCorrect: false },
          { id: 'b', text: '$A + B + C = 180°$', isCorrect: false },
          { id: 'c', text: '$a \\cdot \\sin B = b \\cdot \\sin A = c$', isCorrect: false },
          { id: 'd', text: '$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$', isCorrect: true },
        ],
        solution: 'Sinussetningen sier at forholdstallet mellom en side og sinusverdien til den motstående vinkelen er det samme for alle tre parene: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$.',
      },
    },
    {
      id: '1t-5-6-n-audio-2',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-5-6-narrativ-del2.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-5-6-n-section2',
      type: 'text',
      content: `## Finne en ukjent side

La oss bruke sinussetningen til å løse noen problemer. Det vanligste tilfellet er at vi kjenner to vinkler og én side, og vil finne en annen side.

I trekant $ABC$ er $A = 40°$, $B = 75°$ og $a = 10$. Vi vil finne side $b$. Vi setter opp sinussetningen med de to parene vi har informasjon om:

$$\\frac{10}{\\sin 40°} = \\frac{b}{\\sin 75°}$$

Vi løser for $b$ ved å gange begge sider med $\\sin 75°$:

$$b = \\frac{10 \\cdot \\sin 75°}{\\sin 40°} = \\frac{10 \\cdot 0{,}966}{0{,}643} \\approx 15{,}0$$

Legg merke til at $B > A$ (75° > 40°), og at $b > a$ (15,0 > 10). Dette gir mening: den største vinkelen ligger alltid overfor den lengste siden.

Et annet eksempel: i en trekant er $A = 55°$, $B = 65°$ og $c = 12$. Først finner vi $C = 180° - 55° - 65° = 60°$. Deretter kan vi finne hvilken som helst side. For eksempel: $a = \\frac{12 \\cdot \\sin 55°}{\\sin 60°} \\approx 11{,}4$ og $b = \\frac{12 \\cdot \\sin 65°}{\\sin 60°} \\approx 12{,}6$. Legg merke til at vi alltid trenger å kjenne vinkel $C$ for å bruke $c$ i formelen.`,
    },
    {
      id: '1t-5-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-5-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'I en trekant er $A = 50°$, $B = 70°$ og $a = 15$. Hva er $b$ (avrundet)?',
        options: [
          { id: 'a', text: '$b \\approx 18{,}4$', isCorrect: true },
          { id: 'b', text: '$b \\approx 15{,}0$', isCorrect: false },
          { id: 'c', text: '$b \\approx 12{,}2$', isCorrect: false },
          { id: 'd', text: '$b \\approx 20{,}1$', isCorrect: false },
        ],
        solution: 'Vi bruker sinussetningen: $b = \\frac{15 \\cdot \\sin 70°}{\\sin 50°} = \\frac{15 \\cdot 0{,}940}{0{,}766} \\approx 18{,}4$. Siden $B > A$, er $b > a$, noe som stemmer.',
      },
    },
    {
      id: '1t-5-6-n-audio-3',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-5-6-narrativ-del3.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-5-6-n-section3',
      type: 'text',
      content: `## Finne en ukjent vinkel

Vi kan også bruke sinussetningen til å finne vinkler. Da snur vi formelen og løser for sinusverdien til den ukjente vinkelen.

I trekant $ABC$ er $a = 8$, $b = 12$ og $A = 35°$. Vi vil finne vinkel $B$. Vi setter opp:

$$\\frac{\\sin B}{b} = \\frac{\\sin A}{a}$$

$$\\sin B = \\frac{b \\cdot \\sin A}{a} = \\frac{12 \\cdot \\sin 35°}{8} = \\frac{12 \\cdot 0{,}574}{8} \\approx 0{,}861$$

$$B = \\sin^{-1}(0{,}861) \\approx 59{,}4°$$

Det er viktig å sjekke at svaret gir mening. Siden $b > a$ (12 > 8), forventer vi at $B > A$, og 59,4° > 35° stemmer.

Men hva om sinusverdien hadde vært for eksempel 1,2? Da finnes ingen vinkel, fordi sinus aldri er større enn 1. Det ville betydd at de gitte opplysningene ikke kan danne en trekant. Sinussetningen gir oss altså en innebygd sjekk: hvis $\\sin B > 1$, finnes ingen løsning.

Nå til en viktig detalj som vi skal dykke dypere inn i neste seksjon: når $\\sin B = 0{,}861$, finnes det strengt tatt to vinkler som oppfyller dette – nemlig $59{,}4°$ og $180° - 59{,}4° = 120{,}6°$.`,
    },
    {
      id: '1t-5-6-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-5-6-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'I en trekant er $a = 10$, $b = 14$ og $A = 40°$. Hva er $\\sin B$ (avrundet)?',
        options: [
          { id: 'a', text: '$\\sin B \\approx 0{,}64$', isCorrect: false },
          { id: 'b', text: '$\\sin B \\approx 0{,}46$', isCorrect: false },
          { id: 'c', text: '$\\sin B \\approx 1{,}12$', isCorrect: false },
          { id: 'd', text: '$\\sin B \\approx 0{,}90$', isCorrect: true },
        ],
        solution: 'Vi regner: $\\sin B = \\frac{14 \\cdot \\sin 40°}{10} = \\frac{14 \\cdot 0{,}643}{10} \\approx 0{,}90$. Vinkel $B \\approx 64°$ (eller muligens $116°$ – det tvetydige tilfellet).',
      },
    },
    {
      id: '1t-5-6-n-audio-4',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-5-6-narrativ-del4.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-5-6-n-section4',
      type: 'text',
      content: `## Det tvetydige tilfellet

Her kommer en av de mest fascinerende – og mest forvirrende – sidene ved sinussetningen. Når du bruker den til å finne en vinkel, kan det hende at det finnes **to** mulige trekanter som passer til de gitte opplysningene.

Grunnen er enkel: $\\sin v = \\sin(180° - v)$. For eksempel er $\\sin 30° = \\sin 150° = 0{,}5$. Når vi finner $\\sin B = 0{,}643$, kan $B$ altså være enten ca. $40°$ eller ca. $140°$.

La oss se på et konkret eksempel. I trekant $ABC$ er $a = 7$, $b = 9$ og $A = 30°$. Vi finner:

$\\sin B = \\frac{9 \\cdot \\sin 30°}{7} = \\frac{9 \\cdot 0{,}5}{7} \\approx 0{,}643$

$B_1 \\approx 40°$ eller $B_2 \\approx 140°$

Nå sjekker vi begge: Hvis $B = 40°$, så er $C = 180° - 30° - 40° = 110°$. Alle vinkler er positive og summen er $180°$ – dette fungerer. Hvis $B = 140°$, så er $C = 180° - 30° - 140° = 10°$. Også dette fungerer, for alle vinkler er fortsatt positive.

Altså finnes det i dette tilfellet faktisk **to ulike trekanter** med de gitte opplysningene. Når oppstår tvetydigheten? Den kan bare oppstå når vi kjenner to sider og en vinkel som *ikke* ligger mellom de to sidene. Hvis den kjente vinkelen er mellom de to sidene, bruker vi uansett cosinussetningen i stedet.`,
    },
    {
      id: '1t-5-6-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-5-6-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvis $\\sin B = 0{,}5$, hva er de mulige verdiene for $B$ i en trekant?',
        options: [
          { id: 'a', text: 'Bare $B = 30°$', isCorrect: false },
          { id: 'b', text: 'Bare $B = 150°$', isCorrect: false },
          { id: 'c', text: '$B = 30°$ eller $B = 150°$', isCorrect: true },
          { id: 'd', text: '$B = 60°$ eller $B = 120°$', isCorrect: false },
        ],
        solution: 'Siden $\\sin 30° = 0{,}5$ og $\\sin(180° - 30°) = \\sin 150° = 0{,}5$, er begge verdiene mulige. Du må sjekke om begge gir en gyldig trekant (der alle vinkler er positive og summen er $180°$).',
      },
    },
    {
      id: '1t-5-6-n-audio-5',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-5-6-narrativ-del5.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-5-6-n-section5',
      type: 'text',
      content: `## Når bruker vi sinussetningen?

Nå som vi kjenner sinussetningen og dens fallgruver, er det viktig å forstå når den er det rette verktøyet. Sinussetningen brukes i to hovedsituasjoner.

Den første er når vi kjenner **to vinkler og én side**. Da kan vi alltid finne den tredje vinkelen (fordi vinkelsummen er $180°$), og deretter bruke sinussetningen til å finne de resterende sidene. I dette tilfellet er det aldri noen tvetydighet – løsningen er unik.

Den andre er når vi kjenner **to sider og én vinkel som er motstående til en av sidene**. Her kan tvetydigheten oppstå, og vi må alltid sjekke begge mulige verdier for den ukjente vinkelen.

Når bør vi *ikke* bruke sinussetningen? Hvis vi kjenner to sider og vinkelen *mellom* dem (det vi kaller SVS-tilfellet), passer cosinussetningen bedre. Og hvis vi kjenner alle tre sidene men ingen vinkler, er cosinussetningen igjen det rette valget.

En nyttig huskeregel er: sinussetningen kobler en side med sin *motstående* vinkel, så vi trenger alltid minst ett slikt par for å komme i gang. Uten et komplett par (side pluss motstående vinkel) har vi ikke nok informasjon til å bruke sinussetningen.

Til slutt: husk alltid den innebygde sjekken. Hvis $\\sin B$ blir større enn 1, finnes ingen trekant. Hvis $\\sin B \\leq 1$, sjekk om én eller begge vinkler gir gyldig trekant.`,
    },
    {
      id: '1t-5-6-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-5-6-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Du kjenner to sider og vinkelen *mellom* dem. Hvilken setning bør du bruke?',
        options: [
          { id: 'a', text: 'Sinussetningen', isCorrect: false },
          { id: 'b', text: 'Pytagoras\' setning', isCorrect: false },
          { id: 'c', text: 'Arealsetningen', isCorrect: false },
          { id: 'd', text: 'Cosinussetningen', isCorrect: true },
        ],
        solution: 'Når du kjenner to sider og vinkelen mellom dem (SVS), bruker du cosinussetningen. Sinussetningen krever et par av side og motstående vinkel, som du ikke har i SVS-tilfellet.',
      },
    },
    {
      id: '1t-5-6-n-audio-6',
      type: 'audio',
      title: 'Lytt til oppsummeringen',
      src: '/audio/1t/1t-5-6-narrativ-del6.mp3',
      description: 'Lydfil som leser opp oppsummeringen.',
    },
    {
      id: '1t-5-6-n-summary',
      type: 'text',
      content: `## Oppsummering

**Sinussetningen** sier at i en vilkårlig trekant med sider $a$, $b$, $c$ og motstående vinkler $A$, $B$, $C$ gjelder: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$.

Beviset bygger på å uttrykke høyden i trekanten på to forskjellige måter ved hjelp av sinusdefinisjonen i rettvinklede trekanter. Fordi begge uttrykkene er lik samme høyde, kan vi sette dem like og få sinussetningen.

Vi bruker sinussetningen til å **finne ukjente sider** når vi kjenner to vinkler og én side, og til å **finne ukjente vinkler** når vi kjenner to sider og én motstående vinkel. Når vi finner vinkler, må vi alltid huske det **tvetydige tilfellet**: ligningen $\\sin B = k$ kan ha to løsninger, $B$ og $180° - B$. Begge må sjekkes mot kravet om at vinkelsummen er $180°$ og alle vinkler er positive.

Sinussetningen brukes *ikke* i SVS-tilfellet (to sider og vinkelen mellom dem) – da bruker vi cosinussetningen.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.7 NARRATIV: Cosinussetningen
// ============================================================================

export const CHAPTER_1T_5_7_NARRATIV: TextbookChapter = {
  id: '1t-5-7-narrativ',
  courseId: '1t',
  chapterNumber: '5.7',
  title: 'Cosinussetningen',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om cosinussetningen – Pytagoras\' utvidelse til alle trekanter, og hvordan den lar oss finne sider og vinkler når sinussetningen ikke strekker til.',
  estimatedMinutes: 40,
  competenceGoals: ['begrunne cosinussetningen', 'bruke cosinussetningen til å løse trekanter'],
  linkedChapterId: '1t-5-7',
  content: [
    {
      id: '1t-5-7-n-audio-1',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-5-7-narrativ-del1.mp3',
      description: 'Lydfil som leser opp teksten frem til første quiz.',
    },
    {
      id: '1t-5-7-n-intro',
      type: 'text',
      content: `## Pytagoras for alle trekanter

Du kjenner sikkert Pytagoras' setning: i en rettvinklet trekant er $a^2 + b^2 = c^2$, der $c$ er hypotenusen. Men hva gjør du når trekanten ikke er rettvinklet? Da holder ikke Pytagoras lenger, fordi den bare gjelder når én vinkel er nøyaktig $90°$.

**Cosinussetningen** er Pytagoras' storesøster. Den gjelder for *alle* trekanter – spisse, stumpe og rettvinklede. Den legger til et ekstra ledd med cosinus som korrigerer for at vinkelen ikke er $90°$. I dette kapittelet skal vi utlede cosinussetningen, bruke den til å finne ukjente sider og vinkler, og se hvordan den løser problemer som sinussetningen ikke klarer.`,
    },
    {
      id: '1t-5-7-n-section1',
      type: 'text',
      content: `## Setningen og dens begrunnelse

Cosinussetningen sier at i en trekant med sider $a$, $b$, $c$ og motstående vinkler $A$, $B$, $C$ gjelder:

$$c^2 = a^2 + b^2 - 2ab \\cos C$$

Tilsvarende kan vi skrive den for de andre sidene: $a^2 = b^2 + c^2 - 2bc \\cos A$ og $b^2 = a^2 + c^2 - 2ac \\cos B$.

Legg merke til leddet $-2ab \\cos C$. Når $C = 90°$, er $\\cos 90° = 0$, og hele dette leddet forsvinner. Da står vi igjen med $c^2 = a^2 + b^2$ – altså Pytagoras. Cosinussetningen er virkelig en generalisering.

Begrunnelsen er elegant. Vi plasserer trekanten i et koordinatsystem med $C$ i origo og siden $b$ langs $x$-aksen. Da er $A = (b, 0)$ og $B = (a \\cos C, a \\sin C)$. Avstanden mellom $A$ og $B$ er $c$, og vi bruker avstandsformelen:

$c^2 = (a \\cos C - b)^2 + (a \\sin C)^2$

Når vi ganger ut, får vi $c^2 = a^2 \\cos^2 C - 2ab \\cos C + b^2 + a^2 \\sin^2 C$. Siden $\\cos^2 C + \\sin^2 C = 1$, forenkles dette til $c^2 = a^2 + b^2 - 2ab \\cos C$. Beviset hviler altså på koordinatgeometri og den grunnleggende sammenhengen $\\sin^2 + \\cos^2 = 1$.`,
    },
    {
      id: '1t-5-7-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-5-7-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva skjer med cosinussetningen $c^2 = a^2 + b^2 - 2ab \\cos C$ når $C = 90°$?',
        options: [
          { id: 'a', text: 'Vi får $c^2 = a^2 + b^2 + 2ab$', isCorrect: false },
          { id: 'b', text: 'Formelen gjelder ikke', isCorrect: false },
          { id: 'c', text: 'Vi får $c^2 = a^2 + b^2$ (Pytagoras)', isCorrect: true },
          { id: 'd', text: 'Vi får $c^2 = a^2 - b^2$', isCorrect: false },
        ],
        solution: 'Når $C = 90°$, er $\\cos 90° = 0$, så leddet $-2ab \\cos C$ forsvinner. Da gjenstår $c^2 = a^2 + b^2$, som er Pytagoras\' setning.',
      },
    },
    {
      id: '1t-5-7-n-audio-2',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-5-7-narrativ-del2.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-5-7-n-section2',
      type: 'text',
      content: `## Finne en ukjent side

Cosinussetningen er perfekt når vi kjenner to sider og vinkelen *mellom* dem – det som kalles SVS-tilfellet (side-vinkel-side).

La oss ta et eksempel. I trekant $ABC$ er $b = 7$, $c = 10$ og $A = 60°$. Vi vil finne side $a$. Vi setter inn i cosinussetningen:

$a^2 = b^2 + c^2 - 2bc \\cos A = 7^2 + 10^2 - 2 \\cdot 7 \\cdot 10 \\cdot \\cos 60°$

$a^2 = 49 + 100 - 140 \\cdot 0{,}5 = 149 - 70 = 79$

$a = \\sqrt{79} \\approx 8{,}9$

Her er et praktisk problem: to skip starter fra samme havn. Skip A seiler 30 km mot nord, og skip B seiler 40 km i en retning som gjør en vinkel på 70° med nordretningen. Hvor langt fra hverandre er de? Vinkelen mellom rutene er 70°, og vi bruker cosinussetningen:

$d^2 = 30^2 + 40^2 - 2 \\cdot 30 \\cdot 40 \\cdot \\cos 70° = 900 + 1600 - 2400 \\cdot 0{,}342 \\approx 2500 - 820{,}8 = 1679{,}2$

$d \\approx 41{,}0$ km

Skipene er altså ca. 41 km fra hverandre. Legg merke til at uten cosinussetningen ville dette problemet vært vanskelig å løse – sinussetningen hjelper ikke her fordi vi ikke kjenner noen motstående vinkel.`,
    },
    {
      id: '1t-5-7-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-5-7-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'I en trekant er $b = 5$, $c = 8$ og $A = 45°$. Hva er $a^2$?',
        options: [
          { id: 'a', text: '$a^2 = 89 - 80 \\cos 45° \\approx 32{,}4$', isCorrect: true },
          { id: 'b', text: '$a^2 = 89 + 80 \\cos 45° \\approx 145{,}6$', isCorrect: false },
          { id: 'c', text: '$a^2 = 39 - 40 \\cos 45° \\approx 10{,}7$', isCorrect: false },
          { id: 'd', text: '$a^2 = 89 - 40 \\cos 45° \\approx 60{,}7$', isCorrect: false },
        ],
        solution: 'Vi setter inn: $a^2 = 5^2 + 8^2 - 2 \\cdot 5 \\cdot 8 \\cdot \\cos 45° = 25 + 64 - 80 \\cdot 0{,}707 = 89 - 56{,}6 \\approx 32{,}4$. Da er $a \\approx 5{,}7$.',
      },
    },
    {
      id: '1t-5-7-n-audio-3',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-5-7-narrativ-del3.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-5-7-n-section3',
      type: 'text',
      content: `## Finne en ukjent vinkel

Cosinussetningen er også det rette verktøyet når vi kjenner alle tre sidene og vil finne en vinkel – det såkalte SSS-tilfellet. Da omskriver vi formelen:

$$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$$

La oss prøve. I trekant $ABC$ er $a = 5$, $b = 7$ og $c = 9$. Vi finner vinkel $C$:

$\\cos C = \\frac{a^2 + b^2 - c^2}{2ab} = \\frac{25 + 49 - 81}{70} = \\frac{-7}{70} = -0{,}1$

$C = \\cos^{-1}(-0{,}1) \\approx 95{,}7°$

Legg merke til at $\\cos C$ er *negativ*. Hva betyr det? Jo, cosinus er negativ for vinkler mellom $90°$ og $180°$, altså for stumpe vinkler. Så vinkel $C$ er stump. Og det gir mening: side $c = 9$ er den lengste, og den lengste siden ligger alltid overfor den største vinkelen.

Dette er en stor fordel med cosinussetningen sammenlignet med sinussetningen: det er **ingen tvetydighet**. Cosinus er nemlig unik for vinkler mellom $0°$ og $180°$ – ulik sinus, som gir to mulige vinkler. Positiv cosinus betyr spiss vinkel, negativ cosinus betyr stump vinkel, og $\\cos = 0$ betyr rett vinkel.

Et annet eksempel: sidene 3, 4 og 5 gir $\\cos C = \\frac{9 + 16 - 25}{24} = 0$, altså $C = 90°$. Perfekt – vi vet at 3-4-5 er en rettvinklet trekant.`,
    },
    {
      id: '1t-5-7-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-5-7-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva forteller det oss at $\\cos A$ er negativ?',
        options: [
          { id: 'a', text: 'Vinkel $A$ er spiss (mellom $0°$ og $90°$)', isCorrect: false },
          { id: 'b', text: 'Trekanten finnes ikke', isCorrect: false },
          { id: 'c', text: 'Vinkel $A$ er rett ($90°$)', isCorrect: false },
          { id: 'd', text: 'Vinkel $A$ er stump (mellom $90°$ og $180°$)', isCorrect: true },
        ],
        solution: 'Cosinus er negativ for vinkler mellom $90°$ og $180°$. En stump vinkel i en trekant betyr at den er større enn $90°$. Den lengste siden i trekanten ligger alltid overfor den stumpe vinkelen.',
      },
    },
    {
      id: '1t-5-7-n-audio-4',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-5-7-narrativ-del4.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-5-7-n-section4',
      type: 'text',
      content: `## Praktiske anvendelser

Cosinussetningen dukker opp overalt i praktiske problemer der avstander og retninger er involvert. La oss se på et par eksempler.

Et fly flyr 200 km mot øst, snur 50° mot venstre (mot nord), og flyr 150 km til. Hvor langt er flyet fra startpunktet? Vinkelen i trekanten mellom de to rutene er ikke 50°, men $180° - 50° = 130°$, fordi vi måler vinkelen på innsiden av trekanten. Vi setter inn:

$d^2 = 200^2 + 150^2 - 2 \\cdot 200 \\cdot 150 \\cdot \\cos 130°$

$d^2 = 40000 + 22500 - 60000 \\cdot (-0{,}643) = 62500 + 38580 = 101080$

$d \\approx 318$ km

Legg merke til at $\\cos 130°$ er negativ, som gjør at vi *legger til* i stedet for å trekke fra. Det gir mening: en stump vinkel betyr at flyet bøyer «utover», slik at det ender opp lenger unna enn om det hadde fortsatt rett fram.

En parallellogram har sider 8 cm og 12 cm, og den ene diagonalen er 15 cm. Vi kan bruke cosinussetningen til å finne vinklene: $\\cos A = \\frac{64 + 144 - 225}{192} = \\frac{-17}{192} \\approx -0{,}089$, som gir $A \\approx 95{,}1°$. Den andre vinkelen er $180° - 95{,}1° = 84{,}9°$.`,
    },
    {
      id: '1t-5-7-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-5-7-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'En trekant har sider 7, 8 og 9. Hva er $\\cos C$ når $c = 9$?',
        options: [
          { id: 'a', text: '$\\cos C = \\frac{49 + 64 - 81}{112} \\approx 0{,}286$', isCorrect: true },
          { id: 'b', text: '$\\cos C = \\frac{49 + 81 - 64}{126} \\approx 0{,}524$', isCorrect: false },
          { id: 'c', text: '$\\cos C = \\frac{64 + 81 - 49}{144} \\approx 0{,}667$', isCorrect: false },
          { id: 'd', text: '$\\cos C = \\frac{81 - 49 - 64}{112} \\approx -0{,}286$', isCorrect: false },
        ],
        solution: 'Vi bruker $\\cos C = \\frac{a^2 + b^2 - c^2}{2ab} = \\frac{49 + 64 - 81}{2 \\cdot 7 \\cdot 8} = \\frac{32}{112} \\approx 0{,}286$. Positiv cosinus betyr at vinkel $C$ er spiss (ca. $73°$).',
      },
    },
    {
      id: '1t-5-7-n-audio-5',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-5-7-narrativ-del5.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-5-7-n-section5',
      type: 'text',
      content: `## Sinussetningen eller cosinussetningen?

Nå som du kjenner både sinussetningen og cosinussetningen, er det viktig å velge riktig verktøy til riktig problem. Her er en oversikt.

Bruk **sinussetningen** $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$ når du kjenner to vinkler og én side, eller to sider og én motstående vinkel. Husk at du trenger minst ett komplett par (side + motstående vinkel), og vær oppmerksom på det tvetydige tilfellet.

Bruk **cosinussetningen** $a^2 = b^2 + c^2 - 2bc \\cos A$ i to situasjoner: når du kjenner to sider og vinkelen *mellom* dem (SVS) og skal finne den tredje siden, eller når du kjenner alle tre sidene (SSS) og skal finne en vinkel. Cosinussetningen gir alltid en entydig løsning.

En likebent trekant med to sider på 10 cm og grunnlinje 12 cm illustrerer dette fint. Vi finner toppvinkelen med cosinussetningen: $\\cos C = \\frac{100 + 100 - 144}{200} = \\frac{56}{200} = 0{,}28$, som gir $C \\approx 73{,}7°$.

I praksis er det lurt å starte med å identifisere hva du vet: vinkler, sider, eller begge deler. Se etter om du har et komplett par (side + motstående vinkel) for sinussetningen, eller om du har SVS eller SSS for cosinussetningen. Ofte bruker vi begge setningene i kombinasjon – for eksempel cosinussetningen til å finne den tredje siden, og deretter sinussetningen til å finne de resterende vinklene.`,
    },
    {
      id: '1t-5-7-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-5-7-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Du kjenner alle tre sidene i en trekant, men ingen vinkler. Hva gjør du?',
        options: [
          { id: 'a', text: 'Bruker sinussetningen direkte', isCorrect: false },
          { id: 'b', text: 'Bruker cosinussetningen til å finne en vinkel', isCorrect: true },
          { id: 'c', text: 'Bruker Pytagoras\' setning', isCorrect: false },
          { id: 'd', text: 'Det er ikke mulig å finne vinklene', isCorrect: false },
        ],
        solution: 'Når du kjenner alle tre sidene (SSS), bruker du cosinussetningen omskrevet til å finne vinkel: $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$. Sinussetningen krever minst ett par (side + vinkel), som du ikke har ennå.',
      },
    },
    {
      id: '1t-5-7-n-audio-6',
      type: 'audio',
      title: 'Lytt til oppsummeringen',
      src: '/audio/1t/1t-5-7-narrativ-del6.mp3',
      description: 'Lydfil som leser opp oppsummeringen.',
    },
    {
      id: '1t-5-7-n-summary',
      type: 'text',
      content: `## Oppsummering

**Cosinussetningen** $c^2 = a^2 + b^2 - 2ab \\cos C$ er en generalisering av Pytagoras' setning til alle trekanter. Når $C = 90°$, forsvinner cosinusleddet og vi får Pytagoras tilbake.

Beviset bygger på å plassere trekanten i et koordinatsystem og bruke avstandsformelen sammen med identiteten $\\sin^2 C + \\cos^2 C = 1$.

Vi bruker cosinussetningen til å **finne ukjente sider** i SVS-tilfellet (to sider og vinkelen mellom) og til å **finne ukjente vinkler** i SSS-tilfellet (alle tre sider). Formelen for å finne vinkel er $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$.

En stor fordel med cosinussetningen er at den gir **entydige svar** – ingen tvetydighet som med sinussetningen. Positiv cosinus betyr spiss vinkel, negativ cosinus betyr stump vinkel, og $\\cos = 0$ betyr rett vinkel.

I praksis bruker vi ofte cosinussetningen og sinussetningen i kombinasjon: cosinussetningen for det første steget, og sinussetningen for resten.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.1 NARRATIV: Matematisk argumentasjon
// ============================================================================

export const CHAPTER_1T_6_1_NARRATIV: TextbookChapter = {
  id: '1t-6-1-narrativ',
  courseId: '1t',
  chapterNumber: '6.1',
  title: 'Matematisk argumentasjon',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan du bygger vanntette matematiske argumenter – fra premisser til konklusjon, med eksempler på direkte bevis, kontraposisjon og motbevis.',
  estimatedMinutes: 40,
  competenceGoals: ['argumentere for tenkemåtene sine'],
  linkedChapterId: '1t-6-1',
  content: [
    {
      id: '1t-6-1-n-audio-1',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-6-1-narrativ-del1.mp3',
      description: 'Lydfil som leser opp teksten frem til første quiz.',
    },
    {
      id: '1t-6-1-n-intro',
      type: 'text',
      content: `## Mer enn bare riktig svar

I matematikk er det ikke nok å finne svaret – du må også kunne forklare *hvorfor* svaret er riktig. Tenk deg en rettssak: det holder ikke å si at den tiltalte er skyldig – du må legge frem bevis som overbeviser juryen. Matematisk argumentasjon fungerer på samme måte. Vi bygger en kjede av logiske steg fra noe vi vet er sant (premissene), til noe vi ønsker å vise (konklusjonen).

I dette kapittelet skal vi lære hva et godt matematisk argument inneholder, hvordan vi strukturerer det, og hvilke metoder vi kan bruke. Vi skal se at det er en fundamental forskjell mellom å vise at noe fungerer i *ett* tilfelle og å vise at det fungerer *alltid*. Denne forskjellen er selve hjertet av matematikken.`,
    },
    {
      id: '1t-6-1-n-section1',
      type: 'text',
      content: `## Hva er et matematisk argument?

Et **matematisk argument** er en logisk rekkefølge av påstander som leder fra noe vi vet er sant til en konklusjon. Hvert steg må være begrunnet – enten med en kjent definisjon, et aksiom (en grunnleggende antakelse), en tidligere bevist setning, eller en logisk slutning.

Strukturen i et godt argument har tre deler. Først kommer **forutsetningene**: hva vet vi, og hva antar vi? Deretter følger **resonnementet**: en kjede av logiske steg der hvert steg bygger på det forrige. Til slutt har vi **konklusjonen**: hva har vi vist?

La oss se et enkelt eksempel. Vi vil vise at summen av to partall alltid er et partall. Forutsetningene: la $a$ og $b$ være to partall. Resonnement: et partall kan skrives som $2k$ for et helt tall $k$. Så $a = 2m$ og $b = 2n$ for noen hele tall $m$ og $n$. Summen blir $a + b = 2m + 2n = 2(m + n)$. Siden $m + n$ er et helt tall, er $2(m + n)$ på formen $2k$, altså et partall. Konklusjon: summen av to partall er alltid et partall.

Legg merke til at vi brukte bokstaver i stedet for konkrete tall. Vi skrev $a = 2m$ og $b = 2n$ – ikke $a = 4$ og $b = 6$. Det er nettopp det som gjør argumentet *generelt*: det gjelder for *alle* partall, ikke bare de spesifikke tallene vi tilfeldigvis valgte.`,
    },
    {
      id: '1t-6-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-6-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom et eksempel og et bevis?',
        options: [
          { id: 'a', text: 'Det er ingen forskjell – begge viser at noe er sant', isCorrect: false },
          { id: 'b', text: 'Et bevis bruker tall, et eksempel bruker bokstaver', isCorrect: false },
          { id: 'c', text: 'Et eksempel viser at noe kan være sant, et bevis viser at det alltid er sant', isCorrect: true },
          { id: 'd', text: 'Et bevis er lengre enn et eksempel', isCorrect: false },
        ],
        solution: 'Et eksempel viser at noe *kan* være sant (for eksempel at $2 + 4 = 6$ er partall), mens et bevis viser at det *alltid* er sant for alle tilfeller. Selv tusen eksempler utgjør ikke et bevis.',
      },
    },
    {
      id: '1t-6-1-n-audio-2',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-6-1-narrativ-del2.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-6-1-n-section2',
      type: 'text',
      content: `## Direkte bevis

Den mest naturlige bevismetoden er det **direkte beviset**. Vi starter med det vi vet og arbeider oss logisk fremover til det vi vil vise. La oss se et eksempel til.

Vi vil vise at produktet av to oddetall alltid er et oddetall. Et oddetall kan skrives som $2k + 1$ for et helt tall $k$. La $a = 2m + 1$ og $b = 2n + 1$ for hele tall $m$ og $n$. Produktet blir:

$a \\cdot b = (2m + 1)(2n + 1) = 4mn + 2m + 2n + 1 = 2(2mn + m + n) + 1$

Dette er på formen $2k + 1$ der $k = 2mn + m + n$, altså et oddetall. Ferdig!

Hvert steg i dette beviset er begrunnet: vi brukte definisjonen av oddetall ($2k + 1$), vi ganget ut parentesene (algebra), og vi faktoriserte ut 2 for å vise at resultatet er på rett form. Ingen av stegene er «magiske» – alt følger logisk.

En annen nyttig observasjon: vi kan vise at summen av tre påfølgende hele tall alltid er delelig med 3. La tallene være $n$, $n + 1$ og $n + 2$. Summen er $n + (n + 1) + (n + 2) = 3n + 3 = 3(n + 1)$. Siden $3(n + 1)$ tydelig er delelig med 3, er vi ferdige.

Poenget er: i et direkte bevis velger vi en smart representasjon av tallene våre, gjør beregninger, og viser at resultatet har den ønskede egenskapen.`,
    },
    {
      id: '1t-6-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-6-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Vi vil vise at summen av et partall og et oddetall alltid er oddetall. Hva er summen $2m + (2n + 1)$?',
        options: [
          { id: 'a', text: '$4mn + 1$', isCorrect: false },
          { id: 'b', text: '$2(m + n + 1)$', isCorrect: false },
          { id: 'c', text: '$2m + 2n + 2$', isCorrect: false },
          { id: 'd', text: '$2(m + n) + 1$', isCorrect: true },
        ],
        solution: '$2m + (2n + 1) = 2m + 2n + 1 = 2(m + n) + 1$. Dette er på formen $2k + 1$ der $k = m + n$, altså et oddetall. Dermed er summen av et partall og et oddetall alltid oddetall.',
      },
    },
    {
      id: '1t-6-1-n-audio-3',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-6-1-narrativ-del3.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-6-1-n-section3',
      type: 'text',
      content: `## Logiske slutninger og implikasjon

For å bygge sterke argumenter trenger vi å forstå logiske sammenhenger. Den viktigste er **implikasjon**: «Hvis $P$ er sant, så er $Q$ sant», som skrives $P \\Rightarrow Q$.

For eksempel: «Hvis $n$ er delelig med 4, så er $n$ delelig med 2.» Dette er sant – hvert tall som kan deles på 4, kan også deles på 2. Men den motsatte retningen er *ikke* sant: at et tall er delelig med 2 betyr ikke at det er delelig med 4. Tallet 6 er delelig med 2, men ikke med 4.

Denne asymmetrien er viktig. $P \\Rightarrow Q$ er *ikke* det samme som $Q \\Rightarrow P$. «Hvis det regner, er bakken våt» betyr ikke at «hvis bakken er våt, regner det» – bakken kan jo også være våt fordi noen har vært ute med hageslangen.

Men her er noe fascinerende: selv om $P \\Rightarrow Q$ og $Q \\Rightarrow P$ er forskjellige, finnes det en annen utsagn som *er* logisk ekvivalent med $P \\Rightarrow Q$. Det er **kontraposisjonen**: «Hvis ikke $Q$, så ikke $P$», altså $\\neg Q \\Rightarrow \\neg P$.

«Hvis det regner, er bakken våt» er logisk det samme som «Hvis bakken *ikke* er våt, regner det *ikke*.» Denne ekvivalensen er nyttig som bevismetode: noen ganger er det lettere å vise kontraposisjonen enn det opprinnelige utsagnet.`,
    },
    {
      id: '1t-6-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-6-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva er kontraposisjonen av «Hvis $n^2$ er partall, så er $n$ partall»?',
        options: [
          { id: 'a', text: 'Hvis $n$ er oddetall, så er $n^2$ oddetall', isCorrect: true },
          { id: 'b', text: 'Hvis $n$ er partall, så er $n^2$ partall', isCorrect: false },
          { id: 'c', text: 'Hvis $n^2$ er oddetall, så er $n$ partall', isCorrect: false },
          { id: 'd', text: 'Hvis $n$ er oddetall, så er $n^2$ partall', isCorrect: false },
        ],
        solution: 'Kontraposisjonen av «Hvis $P$, så $Q$» er «Hvis ikke $Q$, så ikke $P$». Her: $P$ = «$n^2$ er partall» og $Q$ = «$n$ er partall». Kontraposisjonen blir: «Hvis $n$ *ikke* er partall (altså oddetall), så er $n^2$ *ikke* partall (altså oddetall).»',
      },
    },
    {
      id: '1t-6-1-n-audio-4',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-6-1-narrativ-del4.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-6-1-n-section4',
      type: 'text',
      content: `## Bevis ved kontraposisjon og motbevis

La oss bruke kontraposisjon i praksis. Vi vil vise at «hvis $n^2$ er partall, så er $n$ partall.» I stedet for å vise dette direkte, viser vi kontraposisjonen: «hvis $n$ er oddetall, så er $n^2$ oddetall.»

La $n$ være et oddetall, altså $n = 2k + 1$ for et helt tall $k$. Da er:

$n^2 = (2k + 1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$

Dette er på formen $2m + 1$, altså et oddetall. Vi har vist kontraposisjonen, og dermed er det opprinnelige utsagnet også sant.

En annen viktig bevismetode er **motbevis** (bevis ved selvmotsigelse). Her antar vi at konklusjonen er *usann* og viser at dette fører til noe umulig – en selvmotsigelse.

Det mest berømte motbeviset viser at $\\sqrt{2}$ er irrasjonalt. Anta det motsatte: $\\sqrt{2} = \\frac{p}{q}$ der brøken er fullt forkortet. Da er $2 = \\frac{p^2}{q^2}$, altså $p^2 = 2q^2$. Siden $p^2$ er partall, er $p$ partall (det viste vi nettopp). La $p = 2k$. Da er $4k^2 = 2q^2$, som gir $q^2 = 2k^2$, altså er $q$ også partall. Men da har $p$ og $q$ begge faktor 2, noe som motsier at brøken var fullt forkortet. Selvmotsigelse! Altså er $\\sqrt{2}$ irrasjonalt.`,
    },
    {
      id: '1t-6-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-6-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'I et bevis ved selvmotsigelse, hva gjør vi?',
        options: [
          { id: 'a', text: 'Vi finner et moteksempel', isCorrect: false },
          { id: 'b', text: 'Vi viser kontraposisjonen direkte', isCorrect: false },
          { id: 'c', text: 'Vi antar det motsatte av konklusjonen og viser at det fører til en selvmotsigelse', isCorrect: true },
          { id: 'd', text: 'Vi sjekker mange eksempler til vi er sikre', isCorrect: false },
        ],
        solution: 'I et motbevis antar vi at det vi ønsker å bevise er usant. Deretter utleder vi logiske konsekvenser av denne antagelsen helt til vi når en selvmotsigelse (noe som ikke kan være sant). Siden antagelsen førte til noe umulig, må den ha vært feil, og det opprinnelige utsagnet er sant.',
      },
    },
    {
      id: '1t-6-1-n-audio-5',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-6-1-narrativ-del5.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-6-1-n-section5',
      type: 'text',
      content: `## Fallgruver og feilslutninger

Det er like viktig å gjenkjenne feil argumenter som å bygge korrekte. La oss se på en klassisk feilslutning som «beviser» at $2 = 1$.

La $a = b$. Da er $a^2 = ab$, altså $a^2 - b^2 = ab - b^2$. Vi faktoriserer begge sider: $(a + b)(a - b) = b(a - b)$. Vi deler på $(a - b)$ og får $a + b = b$. Siden $a = b$, gir dette $2b = b$, altså $2 = 1$.

Hva gikk galt? Feilen er å dele på $(a - b)$. Siden vi antok at $a = b$, er $a - b = 0$, og vi kan aldri dele på null. Dette er et eksempel på at hvert eneste steg i et argument må være gyldig – én feil ødelegger hele kjeden.

En annen vanlig feil er å forveksle et utsagn med dets omvending. «Alle hunder er dyr» betyr ikke at «alle dyr er hunder.» I matematikken: «alle primtall større enn 2 er oddetall» betyr ikke at «alle oddetall er primtall» (9 er oddetall, men ikke primtall).

Vi kan oppsummere bevismetodene. I et **direkte bevis** viser vi $P \\Rightarrow Q$ steg for steg. I et **kontrapositivt bevis** viser vi i stedet at $\\neg Q \\Rightarrow \\neg P$. I et **motbevis** antar vi $\\neg Q$ og finner en selvmotsigelse. Hvilken metode du velger, avhenger av hva som er lettest for det aktuelle problemet.`,
    },
    {
      id: '1t-6-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-6-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva er feilen i «beviset» for at $2 = 1$ der vi starter med $a = b$?',
        options: [
          { id: 'a', text: 'Vi kan ikke skrive $a^2 = ab$', isCorrect: false },
          { id: 'b', text: 'Faktoriseringen er feil', isCorrect: false },
          { id: 'c', text: 'Vi deler på $(a - b) = 0$, som er divisjon med null', isCorrect: true },
          { id: 'd', text: 'Vi kan ikke anta at $a = b$', isCorrect: false },
        ],
        solution: 'Siden $a = b$, er $a - b = 0$. Når vi deler begge sider på $(a - b)$, deler vi på null, noe som ikke er tillatt i matematikken. Alle stegene frem til den delingen er helt korrekte – det er delingen som er feilen.',
      },
    },
    {
      id: '1t-6-1-n-audio-6',
      type: 'audio',
      title: 'Lytt til oppsummeringen',
      src: '/audio/1t/1t-6-1-narrativ-del6.mp3',
      description: 'Lydfil som leser opp oppsummeringen.',
    },
    {
      id: '1t-6-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Et **matematisk argument** er en logisk kjede fra forutsetninger til konklusjon. Hvert steg må begrunnes med definisjoner, aksiomer, tidligere setninger eller logiske slutninger. Et enkelt eksempel er *ikke* et bevis – det viser bare at noe kan skje, ikke at det alltid skjer.

**Direkte bevis** er den mest naturlige metoden: vi starter med premissene og arbeider oss steg for steg til konklusjonen. Nøkkelen er å representere tallene generelt med bokstaver (for eksempel $2k$ for partall, $2k + 1$ for oddetall) og vise at resultatet har den ønskede formen.

**Kontraposisjon** utnytter at $P \\Rightarrow Q$ er logisk ekvivalent med $\\neg Q \\Rightarrow \\neg P$. Noen ganger er den motsatte retningen lettere å vise.

**Motbevis** (bevis ved selvmotsigelse) antar at konklusjonen er usann og utleder noe umulig. Det klassiske beviset for at $\\sqrt{2}$ er irrasjonalt bruker denne teknikken.

Husk også å være på vakt mot feilslutninger. Sjekk at hvert steg er gyldig – spesielt at du ikke deler på null, forveksler en implikasjon med dens omvending, eller generaliserer fra enkeltstående eksempler.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.2 NARRATIV: Lese og forstå bevis
// ============================================================================

export const CHAPTER_1T_6_2_NARRATIV: TextbookChapter = {
  id: '1t-6-2-narrativ',
  courseId: '1t',
  chapterNumber: '6.2',
  title: 'Lese og forstå bevis',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan du leser, forstår og utvikler matematiske bevis – fra algebraiske utledninger til geometriske argumenter og induksjon.',
  estimatedMinutes: 40,
  competenceGoals: ['lese og forstå matematiske bevis', 'utforske og utvikle bevis'],
  linkedChapterId: '1t-6-2',
  content: [
    {
      id: '1t-6-2-n-audio-1',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-6-2-narrativ-del1.mp3',
      description: 'Lydfil som leser opp teksten frem til første quiz.',
    },
    {
      id: '1t-6-2-n-intro',
      type: 'text',
      content: `## Å lese matematikkens språk

Å lese et matematisk bevis er litt som å lese en krimroman – du følger sporene steg for steg, og til slutt faller alt på plass. Men mens en krimroman kan ha overraskende vendinger, har et godt bevis bare logiske steg. Hvert eneste steg skal kunne begrunnes, og ingenting er overlatt til tilfeldigheter.

I forrige kapittel lærte vi om matematisk argumentasjon. Nå tar vi det videre og ser på hele bevis – både algebraiske og geometriske. Vi skal lære å lese bevis systematisk, forstå ulike bevistyper, og etter hvert prøve å utvikle egne bevis. Vi møter blant annet **direkte bevis**, **indirekte bevis** og det kraftige verktøyet **matematisk induksjon**.`,
    },
    {
      id: '1t-6-2-n-section1',
      type: 'text',
      content: `## Algebraiske bevis – kvadratsetningene

La oss starte med noe konkret: beviset for **1. kvadratsetning**. Påstanden er at $(a + b)^2 = a^2 + 2ab + b^2$ for alle tall $a$ og $b$.

Beviset er et direkte bevis. Vi skriver $(a + b)^2 = (a + b)(a + b)$. Nå ganger vi ut ved å bruke distributiv lov: hvert ledd i den første parentesen ganges med hvert ledd i den andre. Det gir $a \\cdot a + a \\cdot b + b \\cdot a + b \\cdot b = a^2 + ab + ab + b^2 = a^2 + 2ab + b^2$. Ferdig.

Hva gjør dette til et bevis og ikke bare en utregning? Jo, vi brukte $a$ og $b$ som *vilkårlige* tall. Vi antok ingenting spesielt om dem – de kan være positive, negative, brøker, irrasjonale tall, hva som helst. Derfor gjelder resultatet for *alle* tall.

Det finnes også et vakkert **geometrisk bevis** for samme setning. Tenk på et kvadrat med sidelengde $(a + b)$. Arealet er $(a + b)^2$. Del nå dette kvadratet inn i fire deler: et lite kvadrat med side $a$ (areal $a^2$), et lite kvadrat med side $b$ (areal $b^2$), og to rektangler med sider $a$ og $b$ (areal $ab$ hver). Totalt areal: $a^2 + b^2 + 2ab$. Siden dette er det samme arealet, er $(a + b)^2 = a^2 + 2ab + b^2$.

De to bevisene viser det samme resultatet fra to ulike vinkler – ett algebraisk, ett geometrisk. Det er noe av det som gjør matematikk så fascinerende.`,
    },
    {
      id: '1t-6-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-6-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva er $(a - b)^2$?',
        options: [
          { id: 'a', text: '$a^2 - b^2$', isCorrect: false },
          { id: 'b', text: '$a^2 + 2ab + b^2$', isCorrect: false },
          { id: 'c', text: '$a^2 - 2ab - b^2$', isCorrect: false },
          { id: 'd', text: '$a^2 - 2ab + b^2$', isCorrect: true },
        ],
        solution: 'Vi ganger ut: $(a - b)^2 = (a - b)(a - b) = a^2 - ab - ab + b^2 = a^2 - 2ab + b^2$. Dette er 2. kvadratsetning, og den bevises på nøyaktig samme måte som den første.',
      },
    },
    {
      id: '1t-6-2-n-audio-2',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-6-2-narrativ-del2.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-6-2-n-section2',
      type: 'text',
      content: `## Geometriske bevis – Pytagoras' setning

Nå tar vi et steg opp i vanskelighetsgrad og ser på et berømt geometrisk bevis: beviset for **Pytagoras' setning**. Påstanden er at i en rettvinklet trekant med kateter $a$ og $b$ og hypotenus $c$ gjelder $a^2 + b^2 = c^2$.

Beviset bruker areal på en svært elegant måte. Tegn et stort kvadrat med sidelengde $(a + b)$. Dets areal er $(a + b)^2 = a^2 + 2ab + b^2$. Nå plasserer vi fire kopier av den rettvinklede trekanten inne i kvadratet, slik at de danner et skjevt kvadrat i midten med sidelengde $c$.

Arealet av de fire trekantene er $4 \\cdot \\frac{1}{2}ab = 2ab$. Arealet av det indre kvadratet er $c^2$. Totalt areal: $2ab + c^2$.

Nå sammenligner vi de to uttrykkene for arealet av det store kvadratet:

$a^2 + 2ab + b^2 = 2ab + c^2$

Vi trekker $2ab$ fra begge sider og får $a^2 + b^2 = c^2$. Pytagoras er bevist!

Legg merke til hva vi gjorde: vi uttrykte *det samme arealet* på to ulike måter og satte dem like. Denne teknikken – å finne to uttrykk for den samme størrelsen – er en av de kraftigste metodene i matematikk. Det er som å veie samme gjenstand på to ulike vekter og sette resultatene lik hverandre.`,
    },
    {
      id: '1t-6-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-6-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'I beviset for Pytagoras\' setning, hva er nøkkelideen?',
        options: [
          { id: 'a', text: 'Vi uttrykker det samme arealet på to ulike måter', isCorrect: true },
          { id: 'b', text: 'Vi bruker sinussetningen', isCorrect: false },
          { id: 'c', text: 'Vi antar det motsatte og finner en selvmotsigelse', isCorrect: false },
          { id: 'd', text: 'Vi bruker induksjon', isCorrect: false },
        ],
        solution: 'Nøkkelideen er å uttrykke arealet av det store kvadratet på to måter: direkte som $(a+b)^2 = a^2 + 2ab + b^2$, og som summen av delene $2ab + c^2$. Ved å sette de to uttrykkene like, kan vi forenkle til $a^2 + b^2 = c^2$.',
      },
    },
    {
      id: '1t-6-2-n-audio-3',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-6-2-narrativ-del3.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-6-2-n-section3',
      type: 'text',
      content: `## Indirekte bevis – irrasjonale tall

Noen ganger er det vanskelig å vise noe direkte. Da kan et **indirekte bevis** (motbevis) være redningen. Vi antar at påstanden er usann og viser at dette fører til en selvmotsigelse.

Vi har allerede sett beviset for at $\\sqrt{2}$ er irrasjonalt. La oss nå gjøre det samme for $\\sqrt{3}$.

Anta det motsatte: $\\sqrt{3}$ er rasjonalt. Da kan vi skrive $\\sqrt{3} = \\frac{p}{q}$ der $p$ og $q$ er hele tall uten felles faktorer (brøken er maksimalt forkortet).

Kvadrering gir $3 = \\frac{p^2}{q^2}$, altså $p^2 = 3q^2$. Siden $p^2$ er delelig med 3, må $p$ selv være delelig med 3. (Hvorfor? Fordi hvis $p$ *ikke* var delelig med 3, ville $p^2$ heller ikke vært det – dette kan vises ved å se på alle muligheter modulo 3.)

La $p = 3k$. Da er $p^2 = 9k^2 = 3q^2$, som gir $q^2 = 3k^2$. Altså er $q^2$ delelig med 3, og dermed er $q$ delelig med 3.

Nå har vi at både $p$ og $q$ er delelige med 3. Men vi antok at brøken var maksimalt forkortet! Det er en selvmotsigelse. Altså var antagelsen feil, og $\\sqrt{3}$ er irrasjonalt.

Mønsteret er det samme som for $\\sqrt{2}$: anta rasjonalitet, vis at teller og nevner begge er delelige med det aktuelle primtallet, og konkluder med selvmotsigelse. Denne metoden fungerer for $\\sqrt{p}$ der $p$ er et primtall.`,
    },
    {
      id: '1t-6-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-6-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva er selvmotsigelsen i beviset for at $\\sqrt{3}$ er irrasjonalt?',
        options: [
          { id: 'a', text: 'Både $p$ og $q$ er delelige med 3, men vi antok at brøken var forkortet', isCorrect: true },
          { id: 'b', text: 'Vinkelsummen blir mer enn $180°$', isCorrect: false },
          { id: 'c', text: 'Vi får at $p^2$ er negativt', isCorrect: false },
          { id: 'd', text: 'Vi får $3 = 0$', isCorrect: false },
        ],
        solution: 'Vi antok at $\\frac{p}{q}$ var maksimalt forkortet (ingen felles faktorer). Men vi utledet at begge er delelige med 3, altså har de felles faktor 3. Dette er en selvmotsigelse, som betyr at antagelsen om at $\\sqrt{3}$ er rasjonalt, var feil.',
      },
    },
    {
      id: '1t-6-2-n-audio-4',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-6-2-narrativ-del4.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-6-2-n-section4',
      type: 'text',
      content: `## Bevis ved induksjon – dominoeffekten

**Matematisk induksjon** er en bevismetode som er skreddersydd for påstander som gjelder for alle naturlige tall. Ideen er lik en rekke dominobrikker: hvis den første brikken faller, og hver brikke som faller slår ned den neste, så faller alle brikkene.

Strukturen har tre steg. Først viser vi **grunntilfellet**: påstanden er sann for $n = 1$. Deretter formulerer vi **induksjonsantagelsen**: vi antar at påstanden er sann for et vilkårlig $n = k$. Til slutt gjennomfører vi **induksjonssteget**: vi viser at påstanden da også er sann for $n = k + 1$.

La oss bevise at $1 + 2 + 3 + \\ldots + n = \\frac{n(n+1)}{2}$.

**Grunntilfelle** ($n = 1$): Venstre side er $1$. Høyre side er $\\frac{1 \\cdot 2}{2} = 1$. Stemmer!

**Induksjonsantagelse:** Anta at $1 + 2 + \\ldots + k = \\frac{k(k+1)}{2}$ for et eller annet $k$.

**Induksjonssteg:** Vi vil vise at $1 + 2 + \\ldots + k + (k+1) = \\frac{(k+1)(k+2)}{2}$. Vi starter med venstre side og bruker antagelsen:

$1 + 2 + \\ldots + k + (k+1) = \\frac{k(k+1)}{2} + (k+1) = \\frac{k(k+1) + 2(k+1)}{2} = \\frac{(k+1)(k+2)}{2}$

Og det er nettopp formelen med $n = k + 1$. Beviset er fullført!`,
    },
    {
      id: '1t-6-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-6-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva er de tre stegene i et indusjonsbevis?',
        options: [
          { id: 'a', text: 'Forutsetning, resonnement, konklusjon', isCorrect: false },
          { id: 'b', text: 'Grunntilfelle, induksjonsantagelse, induksjonssteg', isCorrect: true },
          { id: 'c', text: 'Antagelse, selvmotsigelse, konklusjon', isCorrect: false },
          { id: 'd', text: 'Premiss, kontraposisjon, bevis', isCorrect: false },
        ],
        solution: 'Et indusjonsbevis har tre deler: (1) **Grunntilfellet** – vis at påstanden er sann for $n = 1$. (2) **Induksjonsantagelsen** – anta at den er sann for $n = k$. (3) **Induksjonssteget** – vis at den da er sann for $n = k + 1$.',
      },
    },
    {
      id: '1t-6-2-n-audio-5',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/1t/1t-6-2-narrativ-del5.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '1t-6-2-n-section5',
      type: 'text',
      content: `## Hvordan lese et bevis – og utvikle egne

Nå som du har sett flere bevistyper, la oss snakke om *hvordan* du bør lese et bevis. Her er fem steg som gjør det lettere.

**Forstå påstanden.** Før du begynner på selve beviset, sørg for at du forstår hva som skal bevises. Hva betyr alle begrepene? Kan du sjekke påstanden med et konkret eksempel?

**Identifiser strukturen.** Er det et direkte bevis, et kontrapositivt bevis, et motbevis eller et induksjonsbevis? Å vite hvilken type bevis du leser, hjelper deg å følge logikken.

**Følg hvert steg.** Gå gjennom beviset linje for linje. Hvorfor følger denne linjen fra den forrige? Hvilken regel eller setning brukes? Ikke hopp over steg – det er ofte i de «åpenbare» stegene at misforståelser oppstår.

**Se det store bildet.** Etter å ha forstått hvert steg, trekk deg tilbake og se helheten. Hva er hovedideen i beviset? Kan du forklare den med dine egne ord?

**Prøv selv.** Den ultimate testen er å lukke boka og forsøke å gjenskape beviset. Du trenger ikke huske det ord for ord – det viktige er at du forstår logikken godt nok til å rekonstruere den.

Det finnes fire hovedtyper bevis du bør kjenne til: **direkte bevis** (vis at $P \\Rightarrow Q$ steg for steg), **kontraposisjon** (vis at $\\neg Q \\Rightarrow \\neg P$), **motbevis** (anta $\\neg Q$ og finn selvmotsigelse), og **induksjon** (grunntilfelle pluss induksjonssteg). Hvilken type som passer best, avhenger av problemet.`,
    },
    {
      id: '1t-6-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-6-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Summen av de første $n$ oddetallene er $1 + 3 + 5 + \\ldots + (2n-1)$. Hva er denne summen lik?',
        options: [
          { id: 'a', text: '$\\frac{n(n+1)}{2}$', isCorrect: false },
          { id: 'b', text: '$2n - 1$', isCorrect: false },
          { id: 'c', text: '$n^2$', isCorrect: true },
          { id: 'd', text: '$n(2n-1)$', isCorrect: false },
        ],
        solution: 'Summen av de første $n$ oddetallene er $n^2$. Dette kan bevises med induksjon: grunntilfellet er $n=1$, der $1 = 1^2$. For induksjonssteget: $1 + 3 + \\ldots + (2k-1) + (2k+1) = k^2 + 2k + 1 = (k+1)^2$.',
      },
    },
    {
      id: '1t-6-2-n-audio-6',
      type: 'audio',
      title: 'Lytt til oppsummeringen',
      src: '/audio/1t/1t-6-2-narrativ-del6.mp3',
      description: 'Lydfil som leser opp oppsummeringen.',
    },
    {
      id: '1t-6-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Vi har sett fire typer matematiske bevis. **Direkte bevis** viser påstanden steg for steg, som da vi beviste kvadratsetningene ved å gange ut parentesene. **Geometriske bevis** bruker areal og figurer, som i det elegante beviset for Pytagoras' setning der vi uttrykte det samme arealet på to måter.

**Indirekte bevis** (motbevis) antar det motsatte av det vi vil vise og utleder en selvmotsigelse. Vi brukte dette til å vise at $\\sqrt{3}$ er irrasjonalt – hvis den var rasjonalt, ville teller og nevner begge vært delelige med 3, noe som motsa at brøken var forkortet.

**Matematisk induksjon** beviser påstander for alle naturlige tall. Grunntilfellet starter kjeden, og induksjonssteget viser at «neste» alltid følger av «forrige». Vi beviste formelen for summen $1 + 2 + \\ldots + n = \\frac{n(n+1)}{2}$ på denne måten.

For å lese et bevis godt: forstå påstanden, identifiser bevistypen, følg hvert steg, se helheten, og prøv å gjenskape beviset selv. Å forstå *hvorfor* noe er sant er den dypeste formen for matematisk innsikt.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const MATEMATIKK_1T_NARRATIV_DEL5_CHAPTERS = [
  CHAPTER_1T_5_5_NARRATIV,
  CHAPTER_1T_5_6_NARRATIV,
  CHAPTER_1T_5_7_NARRATIV,
  CHAPTER_1T_6_1_NARRATIV,
  CHAPTER_1T_6_2_NARRATIV,
];
