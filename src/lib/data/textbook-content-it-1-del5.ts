/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Informasjonsteknologi 1 (IT 1) VG2
 *
 * Seksjon 5: JavaScript og interaktivitet (Kapittel 5.1–5.5)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 5.1: Introduksjon til JavaScript
// ============================================================================

export const CHAPTER_IT_1_5_1: TextbookChapter = {
  id: 'it-1-5-1',
  courseId: 'it-1',
  chapterNumber: '5.1',
  title: 'Introduksjon til JavaScript',
  description: 'Lær hva JavaScript er, hvordan det kjøres i nettleseren, og skriv dine første programmer med variabler, utskrift og enkel logikk.',
  estimatedMinutes: 55,
  prevChapter: 'it-1-4-5',
  nextChapter: 'it-1-5-2',
  competenceGoals: [
    'bruke et programmeringsspråk for å utvikle interaktive nettsider',
    'lage og feilsøke programmer som bruker variabler, kontrollstrukturer og funksjoner',
  ],
  keyTerms: [
    { term: 'JavaScript', definition: 'Et programmeringsspråk som kjører i nettleseren og gjør nettsider interaktive. JavaScript ble opprinnelig laget av Brendan Eich hos Netscape i 1995 på bare ti dager, og har siden blitt det mest brukte programmeringsspråket i verden. Det brukes til alt fra enkle animasjoner og skjemavalidering til komplekse webapplikasjoner, serverprogrammering (Node.js) og mobilapper.' },
    { term: 'Konsoll', definition: 'Et verktøy i nettleserens utviklerpanel der du kan skrive JavaScript-kode direkte og se resultater. Konsollen viser også feilmeldinger, advarsler og utskrift fra console.log(). Den åpnes med F12 eller Ctrl+Shift+J (Cmd+Option+J på Mac) og er et uunnværlig verktøy for utvikling og feilsøking av JavaScript-kode.' },
    { term: 'Variabel', definition: 'En navngitt lagringsplass i minnet som holder på en verdi. I JavaScript opprettes variabler med nøkkelordene let (for verdier som kan endres), const (for verdier som ikke skal endres) eller det eldre var. Variabler gir programmet mulighet til å lagre, hente og manipulere data under kjøring.' },
    { term: 'Funksjon', definition: 'En gjenbrukbar kodeblokk som utfører en bestemt oppgave. Funksjoner defineres med nøkkelordet function eller som pilfunksjoner (=>) og kan ta inn parametere og returnere verdier. Funksjoner gjør koden mer oversiktlig, modulær og lettere å vedlikeholde ved å dele programmet inn i logiske enheter.' },
    { term: 'Script-tag', definition: 'HTML-elementet <script> som brukes til å inkludere JavaScript-kode i en nettside. Koden kan skrives direkte mellom taggene (inline) eller lastes inn fra en ekstern fil med src-attributtet. Plassering av script-taggen påvirker når koden kjøres i forhold til sidens lasting.' },
    { term: 'Streng (string)', definition: 'En datatype som representerer tekst i JavaScript. Strenger omsluttes av enkle anførselstegn (\'), doble anførselstegn (\") eller backticks (`). Backticks tillater template literals der du kan sette inn variabler og uttrykk direkte i teksten med ${}-syntaks.' },
  ],
  content: [
    {
      id: 'it-1-5-1-intro',
      type: 'text',
      content: `## Introduksjon til JavaScript

Hittil har vi lært å strukturere nettsider med HTML og style dem med CSS. Men nettsidene vi har laget har vært **statiske** – innholdet endrer seg ikke etter at siden er lastet. For å gjøre nettsider **interaktive** trenger vi et programmeringsspråk som kan reagere på brukerens handlinger, endre innhold dynamisk og kommunisere med servere. Det språket er **JavaScript**.

JavaScript er det eneste programmeringsspråket som kjører direkte i nettleseren. Alle moderne nettlesere har en innebygd JavaScript-motor som tolker og kjører koden. Chrome bruker V8-motoren, Firefox bruker SpiderMonkey, og Safari bruker JavaScriptCore. Når du besøker en nettside som inneholder JavaScript, laster nettleseren ned koden og kjører den lokalt på din maskin.

I dette kapittelet skal vi ta de første stegene med JavaScript. Vi lærer hvordan vi kobler JavaScript til HTML-sider, skriver ut data til konsollen, bruker variabler, og lager enkle programmer med betingelser og løkker.`,
    },
    {
      id: 'it-1-5-1-def-javascript',
      type: 'definition',
      title: 'JavaScript',
      content: `**JavaScript** er et høynivå, dynamisk typet programmeringsspråk som primært brukes til å gjøre nettsider interaktive. Det ble skapt av Brendan Eich i 1995 og har utviklet seg til å bli verdens mest brukte programmeringsspråk. JavaScript kan manipulere HTML-elementer, reagere på hendelser som klikk og tastettrykk, validere skjemadata, lage animasjoner, kommunisere med servere asynkront, og mye mer. Til tross for navnelikheten har JavaScript ingenting med programmeringsspråket Java å gjøre.`,
    },
    {
      id: 'it-1-5-1-text-koble',
      type: 'text',
      title: 'Koble JavaScript til en nettside',
      content: `Det finnes to hovedmåter å legge til JavaScript i en HTML-side:

### Ekstern JavaScript-fil (anbefalt)

Den beste praksisen er å skrive JavaScript i en separat fil med filendelsen \`.js\` og koble den til HTML-dokumentet med en \`<script>\`-tag:

\`\`\`html
<!DOCTYPE html>
<html lang="nb">
<head>
  <meta charset="UTF-8">
  <title>Min side</title>
</head>
<body>
  <h1>Hei, verden!</h1>
  <p id="melding">Denne teksten kan endres med JavaScript.</p>

  <script src="skript.js"></script>
</body>
</html>
\`\`\`

Legg merke til at \`<script>\`-taggen er plassert like før \`</body>\`. Dette sikrer at hele HTML-dokumentet er ferdig lastet før JavaScript-koden kjører, slik at koden kan finne og manipulere alle elementer på siden.

### Inline JavaScript

Du kan også skrive JavaScript direkte i HTML-filen mellom \`<script>\`-tagger:

\`\`\`html
<script>
  console.log("Hei fra JavaScript!");
</script>
\`\`\`

Denne metoden er grei for korte tester og eksperimenter, men for større prosjekter bør du alltid bruke eksterne filer. Det holder HTML-en ren og gjør JavaScript-koden lettere å vedlikeholde og gjenbruke.`,
    },
    {
      id: 'it-1-5-1-text-konsoll',
      type: 'text',
      title: 'Konsollen – ditt viktigste verktøy',
      content: `Nettleserens **konsoll** er det viktigste verktøyet du har når du lærer og utvikler JavaScript. Du åpner den ved å trykke **F12** (eller **Ctrl+Shift+J** på Windows, **Cmd+Option+J** på Mac) og velge fanen «Console».

I konsollen kan du:
- Skrive JavaScript-kode direkte og se resultatet umiddelbart
- Se feilmeldinger når noe går galt i koden din
- Bruke \`console.log()\` for å skrive ut verdier og feilsøke

La oss prøve den mest grunnleggende JavaScript-kommandoen:

\`\`\`javascript
console.log("Hei, verden!");
\`\`\`

Når denne koden kjører, vises teksten «Hei, verden!» i konsollen. \`console.log()\` er som en utskriftskommando – den viser verdier i konsollen slik at du kan sjekke hva som skjer i programmet ditt.

Du kan skrive ut tall, tekst, beregninger og variabler:

\`\`\`javascript
console.log(42);                    // Skriver ut tallet 42
console.log("Hei på deg!");         // Skriver ut en tekststreng
console.log(10 + 5);               // Skriver ut 15 (beregning)
console.log("Svaret er:", 6 * 7);  // Skriver ut "Svaret er: 42"
\`\`\``,
    },
    {
      id: 'it-1-5-1-example-console',
      type: 'example',
      title: 'Eksperimentere i konsollen',
      content: `Åpne nettleserens konsoll (F12 → Console) og prøv å skrive inn disse uttrykkene ett om gangen:

\`\`\`javascript
2 + 3           // 5
"Hei" + " " + "verden"  // "Hei verden"
10 > 5          // true
Math.random()   // Et tilfeldig tall mellom 0 og 1
Date()          // Dagens dato og klokkeslett
\`\`\`

Konsollen evaluerer hvert uttrykk og viser resultatet umiddelbart. Dette gjør den perfekt for å teste små kodebiter og lære hvordan JavaScript fungerer. Legg merke til at tekst kombineres med \`+\`-operatoren (kalles strengkonkatenering), og at sammenligninger returnerer \`true\` eller \`false\`.`,
    },
    {
      id: 'it-1-5-1-text-variabler',
      type: 'text',
      title: 'Variabler – lagre data',
      content: `**Variabler** er navngitte lagringssteder der du kan lagre verdier som programmet bruker. Tenk på en variabel som en eske med et navnelapp – du kan legge noe i esken, lese hva som er i den, og eventuelt bytte ut innholdet.

I moderne JavaScript bruker vi to nøkkelord for å opprette variabler:

### let – for verdier som kan endres

\`\`\`javascript
let alder = 17;
console.log(alder);  // 17

alder = 18;           // Verdien kan endres
console.log(alder);  // 18
\`\`\`

### const – for verdier som ikke skal endres

\`\`\`javascript
const PI = 3.14159;
console.log(PI);  // 3.14159

PI = 3;  // FEIL! const kan ikke endres etter opprettelse
\`\`\`

**Tommelfingerregel:** Bruk \`const\` som standard. Bruk \`let\` bare når du vet at verdien skal endres senere. Unngå det gamle nøkkelordet \`var\`, som har uforutsigbar oppførsel på grunn av hoisting og funksjonsbasert scope.

### Navneregler for variabler

- Navnet kan inneholde bokstaver, tall, understrek (_) og dollartegn ($)
- Navnet kan ikke starte med et tall
- Navnet er case-sensitive (\`alder\` og \`Alder\` er to forskjellige variabler)
- Bruk **camelCase** for variabelnavn: \`minAlder\`, \`forsteNavn\`, \`antallElever\`
- Velg beskrivende navn som forteller hva variabelen inneholder`,
    },
    {
      id: 'it-1-5-1-def-variabel',
      type: 'definition',
      title: 'Variabel',
      content: `En **variabel** er et navngitt lagringssted i datamaskinens minne som inneholder en verdi. I JavaScript opprettes variabler med \`let\` (verdien kan endres), \`const\` (verdien kan ikke endres) eller \`var\` (eldre syntaks, frarådes). Variabelnavnet fungerer som en referanse til verdien, slik at du kan bruke og manipulere den i programmet. Variabler er fundamentale i all programmering og gjør det mulig å lagre brukerens input, mellomresultater og tilstand.`,
    },
    {
      id: 'it-1-5-1-text-betingelser',
      type: 'text',
      title: 'Betingelser – if/else',
      content: `Programmer må ofte ta valg basert på betingelser. I JavaScript bruker vi \`if\`, \`else if\` og \`else\` for å styre flyten:

\`\`\`javascript
const alder = 17;

if (alder >= 18) {
  console.log("Du er myndig.");
} else if (alder >= 16) {
  console.log("Du kan ta mopedlappen.");
} else {
  console.log("Du er under 16 år.");
}
// Skriver ut: "Du kan ta mopedlappen."
\`\`\`

Betingelsen inne i parentesene evalueres til \`true\` eller \`false\`. Koden inne i \`{}\` kjøres bare hvis betingelsen er sann. Du kan bruke sammenligningsoperatorer som:

- \`===\` – er lik (streng sammenligning)
- \`!==\` – er ikke lik
- \`>\` – større enn
- \`<\` – mindre enn
- \`>=\` – større enn eller lik
- \`<=\` – mindre enn eller lik

Du kan også kombinere betingelser med logiske operatorer:

- \`&&\` – og (begge må være sanne)
- \`||\` – eller (minst én må være sann)
- \`!\` – ikke (snur verdien)

\`\`\`javascript
const alder = 17;
const harForeldretillatelse = true;

if (alder >= 18 || harForeldretillatelse) {
  console.log("Du kan delta på arrangementet.");
}
\`\`\``,
    },
    {
      id: 'it-1-5-1-text-lokker',
      type: 'text',
      title: 'Løkker – gjenta kode',
      content: `Løkker lar deg gjenta kode flere ganger uten å skrive den om og om igjen. JavaScript har flere typer løkker:

### for-løkke

Den klassiske \`for\`-løkken er nyttig når du vet hvor mange ganger koden skal kjøres:

\`\`\`javascript
for (let i = 1; i <= 5; i++) {
  console.log("Runde " + i);
}
// Skriver ut: Runde 1, Runde 2, ... Runde 5
\`\`\`

Løkken har tre deler: initialisering (\`let i = 1\`), betingelse (\`i <= 5\`), og oppdatering (\`i++\`).

### while-løkke

\`while\`-løkken gjentar koden så lenge en betingelse er sann:

\`\`\`javascript
let tall = 1;

while (tall <= 10) {
  console.log(tall);
  tall = tall + 1;
}
\`\`\`

### for...of-løkke

\`for...of\` er perfekt for å gå gjennom elementer i en liste (array):

\`\`\`javascript
const frukter = ["eple", "banan", "appelsin"];

for (const frukt of frukter) {
  console.log(frukt);
}
// Skriver ut: eple, banan, appelsin
\`\`\`

Pass på å unngå uendelige løkker der betingelsen aldri blir usann – det vil fryse nettleseren!`,
    },
    {
      id: 'it-1-5-1-text-funksjoner',
      type: 'text',
      title: 'Funksjoner – gjenbrukbar kode',
      content: `En **funksjon** er en navngitt kodeblokk som utfører en bestemt oppgave. Funksjoner er essensielle for å organisere kode, unngå gjentakelse og gjøre programmet lettere å forstå.

### Definere og kalle en funksjon

\`\`\`javascript
function hilsen(navn) {
  return "Hei, " + navn + "!";
}

console.log(hilsen("Sara"));   // "Hei, Sara!"
console.log(hilsen("Erik"));   // "Hei, Erik!"
\`\`\`

Funksjonen \`hilsen\` tar inn en **parameter** (\`navn\`) og **returnerer** en verdi med \`return\`. Når vi kaller funksjonen med et **argument** (f.eks. "Sara"), settes parameteren til den verdien.

### Pilfunksjoner (arrow functions)

Moderne JavaScript tilbyr en kortere syntaks kalt pilfunksjoner:

\`\`\`javascript
const hilsen = (navn) => {
  return "Hei, " + navn + "!";
};

// Enda kortere for enkle funksjoner:
const doble = (tall) => tall * 2;

console.log(doble(5));   // 10
\`\`\`

### Funksjoner med flere parametere

\`\`\`javascript
function beregnAreal(bredde, hoyde) {
  const areal = bredde * hoyde;
  return areal;
}

console.log(beregnAreal(5, 3));   // 15
console.log(beregnAreal(10, 7));  // 70
\`\`\`

Funksjoner er grunnleggende byggeklosser i JavaScript. Senere skal vi se hvordan vi bruker funksjoner til å håndtere hendelser, manipulere DOM-en og kommunisere med servere.`,
    },
    {
      id: 'it-1-5-1-example-program',
      type: 'example',
      title: 'Et komplett eksempelprogram',
      content: `Her er et komplett program som kombinerer variabler, betingelser og funksjoner:

\`\`\`javascript
// Program: Karakterkalkulator

function beregnKarakter(poeng) {
  if (poeng >= 90) {
    return 6;
  } else if (poeng >= 75) {
    return 5;
  } else if (poeng >= 55) {
    return 4;
  } else if (poeng >= 40) {
    return 3;
  } else if (poeng >= 20) {
    return 2;
  } else {
    return 1;
  }
}

function visResultat(navn, poeng) {
  const karakter = beregnKarakter(poeng);
  console.log(navn + " fikk " + poeng + " poeng, karakter: " + karakter);
}

visResultat("Anna", 82);    // Anna fikk 82 poeng, karakter: 5
visResultat("Ole", 45);     // Ole fikk 45 poeng, karakter: 3
visResultat("Kari", 95);    // Kari fikk 95 poeng, karakter: 6
\`\`\`

Dette programmet viser hvordan du kan dele opp logikk i separate funksjoner. \`beregnKarakter\` tar seg av selve utregningen, mens \`visResultat\` formaterer og viser utskriften. Denne arbeidsdelingen gjør koden lettere å lese, teste og vedlikeholde.`,
    },
    {
      id: 'it-1-5-1-tip-feilsok',
      type: 'tip',
      title: 'Feilsøking med console.log()',
      content: `Når koden din ikke fungerer som forventet, er \`console.log()\` ditt beste verktøy. Plasser utskrifter på strategiske steder for å se hva variablene inneholder:

\`\`\`javascript
function beregnPris(antall, enhetspris) {
  console.log("antall:", antall);          // Sjekk input
  console.log("enhetspris:", enhetspris);  // Sjekk input

  const total = antall * enhetspris;
  console.log("total:", total);            // Sjekk beregning

  const mva = total * 0.25;
  const totalMedMva = total + mva;
  console.log("totalMedMva:", totalMedMva); // Sjekk resultat

  return totalMedMva;
}
\`\`\`

Når du har funnet og fikset feilen, kan du fjerne eller kommentere ut \`console.log()\`-linjene. I profesjonell utvikling brukes også nettleserens debugger med breakpoints for mer avansert feilsøking.`,
    },
    {
      id: 'it-1-5-1-warning-feil',
      type: 'warning',
      title: 'Vanlige nybegynnerfeil',
      content: `Pass opp for disse vanlige feilene:

- **Glemme semikolon eller parenteser**: JavaScript er mer tilgivende enn mange språk, men manglende \`)\` eller \`}\` gir feilmeldinger som kan være forvirrende.
- **Bruke \`=\` i stedet for \`===\`**: \`=\` er tilordning (setter en verdi), mens \`===\` er sammenligning (sjekker om to verdier er like).
- **Skrivefeil i variabelnavn**: JavaScript skiller mellom store og små bokstaver. \`minVariabel\` og \`MinVariabel\` er to forskjellige variabler.
- **Bruke \`var\` i stedet for \`let\`/\`const\`**: \`var\` har uventet oppførsel med hoisting. Bruk alltid \`let\` eller \`const\`.`,
    },
    {
      id: 'it-1-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-1-ex-1',
        number: '5.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er JavaScript primært brukt til i webutvikling?',
        options: [
          { id: 'a', text: 'Å definere strukturen til nettsider', isCorrect: false, feedback: 'Strukturen defineres med HTML, ikke JavaScript.' },
          { id: 'b', text: 'Å style og designe utseendet til nettsider', isCorrect: false, feedback: 'Styling gjøres med CSS, ikke JavaScript.' },
          { id: 'c', text: 'Å gjøre nettsider interaktive og dynamiske', isCorrect: true },
          { id: 'd', text: 'Å lagre data i databaser', isCorrect: false, feedback: 'Databaser håndteres av server-side teknologier, selv om JavaScript kan kommunisere med dem.' },
        ],
        solution: 'JavaScript er programmeringsspråket som gjør nettsider interaktive og dynamiske. Det kan reagere på brukerens handlinger, endre innhold etter at siden er lastet, validere skjemadata, lage animasjoner og kommunisere med servere. HTML gir struktur, CSS gir utseende, og JavaScript gir oppførsel.',
      },
    },
    {
      id: 'it-1-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-1-ex-2',
        number: '5.1.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom `let` og `const` i JavaScript?',
        options: [
          { id: 'a', text: 'let brukes for tall og const for tekst', isCorrect: false, feedback: 'Begge kan brukes for alle datatyper.' },
          { id: 'b', text: 'let lar deg endre verdien senere, const gjør det ikke', isCorrect: true },
          { id: 'c', text: 'const er raskere enn let', isCorrect: false, feedback: 'Ytelsesforskjellen er ubetydelig. Forskjellen handler om endringsbarhet.' },
          { id: 'd', text: 'Det er ingen forskjell – de fungerer likt', isCorrect: false, feedback: 'De har en viktig forskjell knyttet til om verdien kan endres.' },
        ],
        solution: 'Variabler deklarert med `let` kan tilordnes en ny verdi senere i koden, mens variabler deklarert med `const` (konstanter) ikke kan endres etter opprettelse. Best practice er å bruke `const` som standard og bare bruke `let` når verdien faktisk skal endres.',
      },
    },
    {
      id: 'it-1-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-1-ex-3',
        number: '5.1.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva skrives ut i konsollen av denne koden?\n\n```javascript\nlet x = 10;\nif (x > 5 && x < 15) {\n  console.log("A");\n} else {\n  console.log("B");\n}\n```',
        options: [
          { id: 'a', text: '"A"', isCorrect: true },
          { id: 'b', text: '"B"', isCorrect: false, feedback: 'Sjekk betingelsen: x er 10, og 10 > 5 er sant og 10 < 15 er sant. Begge sider av && er sanne.' },
          { id: 'c', text: '"A" og "B"', isCorrect: false, feedback: 'En if/else-blokk kjører bare én av grenene, aldri begge.' },
          { id: 'd', text: 'Ingenting – koden gir en feil', isCorrect: false, feedback: 'Koden er syntaktisk korrekt og vil kjøre uten feil.' },
        ],
        solution: 'Variabelen x har verdien 10. Betingelsen sjekker om x > 5 (sant) OG x < 15 (sant). Siden begge sider av &&-operatoren er sanne, er hele betingelsen sann, og "A" skrives ut.',
      },
    },
    {
      id: 'it-1-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-1-ex-4',
        number: '5.1.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva skrives ut av denne for-løkken?\n\n```javascript\nfor (let i = 0; i < 3; i++) {\n  console.log(i);\n}\n```',
        options: [
          { id: 'a', text: '1, 2, 3', isCorrect: false, feedback: 'Løkken starter på 0, ikke 1, og betingelsen er i < 3, så den stopper før 3.' },
          { id: 'b', text: '0, 1, 2', isCorrect: true },
          { id: 'c', text: '0, 1, 2, 3', isCorrect: false, feedback: 'Betingelsen er i < 3 (strengt mindre enn), så løkken stopper når i blir 3.' },
          { id: 'd', text: '1, 2', isCorrect: false, feedback: 'Løkken starter på i = 0 og kjører for 0, 1 og 2.' },
        ],
        solution: 'Løkken starter med i = 0 og kjører så lenge i < 3. Den skriver ut 0, deretter økes i til 1 (skrives ut), deretter til 2 (skrives ut), og deretter til 3. Nå er betingelsen i < 3 usann, og løkken stopper. Resultatet er 0, 1, 2.',
      },
    },
    {
      id: 'it-1-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-1-ex-5',
        number: '5.1.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en JavaScript-funksjon `erPartall(tall)` som tar inn et tall og returnerer `true` hvis tallet er et partall og `false` hvis det er oddetall. Bruk modulo-operatoren (`%`). Test funksjonen med tallene 4, 7 og 0.',
        solution: `\`\`\`javascript
function erPartall(tall) {
  return tall % 2 === 0;
}

console.log(erPartall(4));  // true
console.log(erPartall(7));  // false
console.log(erPartall(0));  // true
\`\`\`

Modulo-operatoren (%) gir resten etter divisjon. Hvis tall % 2 er 0, er tallet delelig med 2 og dermed et partall. 4 % 2 = 0 (partall), 7 % 2 = 1 (oddetall), 0 % 2 = 0 (partall).`,
      },
    },
    {
      id: 'it-1-5-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-1-ex-6',
        number: '5.1.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et JavaScript-program som bruker en løkke til å skrive ut alle tallene fra 1 til 20 som er delelige med 3. Bruk `console.log()` for utskriften. Programmet skal skrive ut: 3, 6, 9, 12, 15, 18.',
        solution: `\`\`\`javascript
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
\`\`\`

Løkken itererer gjennom tallene 1 til 20. For hvert tall sjekker vi om i % 3 === 0, altså om resten ved divisjon med 3 er 0. Hvis ja, er tallet delelig med 3 og skrives ut. Resultatet er: 3, 6, 9, 12, 15, 18.`,
      },
    },
    {
      id: 'it-1-5-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-1-ex-7',
        number: '5.1.7',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hva returnerer denne funksjonen når vi kaller `mystery(5)`?\n\n```javascript\nfunction mystery(n) {\n  let sum = 0;\n  for (let i = 1; i <= n; i++) {\n    sum = sum + i;\n  }\n  return sum;\n}\n```',
        options: [
          { id: 'a', text: '5', isCorrect: false, feedback: 'Funksjonen legger sammen alle tall fra 1 til n, ikke bare n selv.' },
          { id: 'b', text: '10', isCorrect: false, feedback: 'Sjekk beregningen: 1 + 2 + 3 + 4 + 5. Det er mer enn 10.' },
          { id: 'c', text: '15', isCorrect: true },
          { id: 'd', text: '25', isCorrect: false, feedback: 'Funksjonen summerer 1+2+3+4+5, ikke 5*5.' },
        ],
        solution: 'Funksjonen beregner summen av alle heltall fra 1 til n. For n=5: sum = 0+1+2+3+4+5 = 15. Løkken legger til i i sum for hver iterasjon: etter i=1 er sum 1, etter i=2 er sum 3, etter i=3 er sum 6, etter i=4 er sum 10, etter i=5 er sum 15.',
      },
    },
    {
      id: 'it-1-5-1-ex-8',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-1-ex-8',
        number: '5.1.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en funksjon `fizzBuzz(n)` som går gjennom tallene fra 1 til n og skriver ut:\n- "Fizz" hvis tallet er delelig med 3\n- "Buzz" hvis tallet er delelig med 5\n- "FizzBuzz" hvis tallet er delelig med både 3 og 5\n- Selve tallet ellers\n\nTest med `fizzBuzz(15)`.',
        solution: `\`\`\`javascript
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
\`\`\`

Det er viktig at sjekken for både 3 og 5 (FizzBuzz) kommer først, fordi et tall som er delelig med 15 også er delelig med 3 og med 5 separat. Hadde vi sjekket delelig-med-3 først, ville den truffet før vi rakk å sjekke for begge.`,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.2: Variabler, datatyper og operatorer i JavaScript
// ============================================================================

export const CHAPTER_IT_1_5_2: TextbookChapter = {
  id: 'it-1-5-2',
  courseId: 'it-1',
  chapterNumber: '5.2',
  title: 'Variabler, datatyper og operatorer i JavaScript',
  description: 'Dykk dypere inn i JavaScripts datatyper, lær om typesystemet, og mestre operatorer for beregninger, sammenligninger og logikk.',
  estimatedMinutes: 60,
  prevChapter: 'it-1-5-1',
  nextChapter: 'it-1-5-3',
  competenceGoals: [
    'bruke variabler, datatyper og operatorer i programmer',
    'forstå forskjellen mellom primitive datatyper og objekter i JavaScript',
  ],
  keyTerms: [
    { term: 'Datatype', definition: 'En klassifisering som bestemmer hvilke verdier en variabel kan inneholde og hvilke operasjoner som kan utføres på den. JavaScript har syv primitive datatyper: number, string, boolean, null, undefined, symbol og bigint. I tillegg finnes objekttypen som inkluderer arrays, objekter og funksjoner. JavaScript er dynamisk typet, noe som betyr at en variabel kan endre datatype under kjøring.' },
    { term: 'Number', definition: 'Datatypen for alle tall i JavaScript, både heltall og desimaltall. JavaScript bruker 64-bit flytepunktsformat (IEEE 754) for alle tall, noe som betyr at veldig store tall eller presise desimalberegninger kan gi uventede resultater. Spesielle tallverdier inkluderer Infinity, -Infinity og NaN (Not a Number).' },
    { term: 'String', definition: 'Datatypen for tekst i JavaScript. Strenger er sekvenser av tegn som omsluttes av enkle anførselstegn (\'), doble anførselstegn (\") eller backticks (`). Strenger er uforanderlige (immutable) – metoder som toUpperCase() returnerer en ny streng i stedet for å endre den opprinnelige. Template literals (med backticks) støtter flerlinjers tekst og innebygde uttrykk med ${}-syntaks.' },
    { term: 'Boolean', definition: 'En datatype med bare to mulige verdier: true (sann) eller false (usann). Boolske verdier brukes i betingelser og sammenligninger for å styre programflyten. Andre verdier kan konverteres til boolean: 0, "" (tom streng), null, undefined og NaN er alle "falsy" (behandles som false), mens alle andre verdier er "truthy" (behandles som true).' },
    { term: 'Array', definition: 'En ordnet samling (liste) av verdier i JavaScript. Arrays opprettes med firkantparenteser og kan inneholde verdier av ulike datatyper. Elementene nås via indeks som starter på 0. Arrays har innebygde metoder som push(), pop(), map(), filter() og forEach() som gjør det enkelt å legge til, fjerne og manipulere elementer.' },
    { term: 'Objekt', definition: 'En samling av nøkkel-verdi-par i JavaScript. Objekter brukes til å gruppere relaterte data og funksjonalitet. Nøklene (også kalt egenskaper) er strenger, og verdiene kan være av hvilken som helst datatype, inkludert andre objekter og funksjoner. Objekter er grunnleggende i JavaScript og brukes overalt – fra enkle datastrukturer til DOM-elementer og JSON-data.' },
    { term: 'typeof', definition: 'En operator i JavaScript som returnerer en streng som beskriver datatypen til en verdi. For eksempel returnerer typeof 42 strengen "number" og typeof "hei" returnerer "string". typeof er nyttig for å sjekke datatyper under kjøring, spesielt i et dynamisk typet språk der variabler kan inneholde ulike typer verdier.' },
    { term: 'Template literal', definition: 'En strengsyntaks i JavaScript som bruker backticks (`) i stedet for vanlige anførselstegn. Template literals støtter innebygde uttrykk med ${variabel}-syntaks og flerlinjers tekst. De gjør det enklere å bygge sammensatte strenger enn tradisjonell strengkonkatenering med + operatoren.' },
  ],
  content: [
    {
      id: 'it-1-5-2-intro',
      type: 'text',
      content: `## Variabler, datatyper og operatorer i JavaScript

I forrige kapittel ble du kjent med variabler og enkel bruk av JavaScript. Nå skal vi gå dypere inn i **datatypene** som JavaScript tilbyr, forstå hvordan **typesystemet** fungerer, og mestre de ulike **operatorene** for beregninger, sammenligninger og logikk.

En solid forståelse av datatyper er avgjørende for å skrive korrekt og forutsigbar kode. JavaScript er et **dynamisk typet** språk, noe som betyr at du ikke deklarerer hvilken type en variabel skal inneholde – typen bestemmes automatisk av verdien du tilordner. Dette gir fleksibilitet, men kan også føre til overraskende resultater hvis du ikke forstår hvordan typesystemet fungerer.`,
    },
    {
      id: 'it-1-5-2-def-datatype',
      type: 'definition',
      title: 'Datatype',
      content: `En **datatype** er en klassifisering av data som bestemmer hvilke verdier en variabel kan inneholde, hvor mye minne den bruker, og hvilke operasjoner som kan utføres på den. JavaScript har syv **primitive** datatyper (number, string, boolean, null, undefined, symbol, bigint) og én **sammensatt** type (object). Forståelse av datatyper er essensielt for å unngå typefeil og skrive robust kode.`,
    },
    {
      id: 'it-1-5-2-text-primitive',
      type: 'text',
      title: 'Primitive datatyper',
      content: `JavaScript har syv primitive datatyper. De tre viktigste for daglig programmering er:

### Number – tall

Alle tall i JavaScript er av typen \`number\`, enten det er heltall eller desimaltall:

\`\`\`javascript
const heltall = 42;
const desimaltall = 3.14;
const negativt = -7;
const vitenskapelig = 2.5e6;    // 2 500 000

console.log(typeof heltall);     // "number"
console.log(typeof desimaltall); // "number"
\`\`\`

JavaScript har noen spesielle tallverdier:

\`\`\`javascript
console.log(1 / 0);          // Infinity
console.log(-1 / 0);         // -Infinity
console.log("hei" * 2);      // NaN (Not a Number)
console.log(0.1 + 0.2);      // 0.30000000000000004 (flytepunktsfeil!)
\`\`\`

### String – tekst

Strenger representerer tekst og omsluttes av anførselstegn:

\`\`\`javascript
const enkle = 'Hei på deg';
const doble = "Hei på deg";
const backticks = \`Hei på deg\`;  // Template literal

console.log(typeof enkle);  // "string"
\`\`\`

Template literals (med backticks) er spesielt nyttige fordi de støtter **innebygde uttrykk**:

\`\`\`javascript
const navn = "Sara";
const alder = 17;
const melding = \`\${navn} er \${alder} år gammel.\`;
console.log(melding);  // "Sara er 17 år gammel."
\`\`\`

### Boolean – sann/usann

Boolske verdier er enten \`true\` eller \`false\`:

\`\`\`javascript
const erMyndig = true;
const harRegnet = false;
const erStorre = 10 > 5;   // true

console.log(typeof erMyndig);  // "boolean"
\`\`\``,
    },
    {
      id: 'it-1-5-2-text-null-undefined',
      type: 'text',
      title: 'null og undefined',
      content: `JavaScript har to spesielle verdier for «ingenting»:

### undefined

\`undefined\` betyr at en variabel er deklarert men ikke har fått en verdi:

\`\`\`javascript
let noe;
console.log(noe);         // undefined
console.log(typeof noe);  // "undefined"
\`\`\`

### null

\`null\` representerer et bevisst fravær av verdi – du bruker det for å si «denne variabelen har ingen verdi med vilje»:

\`\`\`javascript
let bruker = null;  // Brukeren er ikke logget inn ennå
console.log(bruker);         // null
console.log(typeof bruker);  // "object" (en velkjent bug i JavaScript!)
\`\`\`

Forskjellen i praksis er at \`undefined\` betyr «verdien er ikke satt ennå», mens \`null\` betyr «verdien er bevisst satt til ingenting».`,
    },
    {
      id: 'it-1-5-2-text-operatorer',
      type: 'text',
      title: 'Aritmetiske operatorer',
      content: `JavaScript har de vanlige regneoperatorene:

| Operator | Beskrivelse | Eksempel | Resultat |
|----------|-------------|----------|----------|
| \`+\` | Addisjon | \`5 + 3\` | \`8\` |
| \`-\` | Subtraksjon | \`10 - 4\` | \`6\` |
| \`*\` | Multiplikasjon | \`3 * 7\` | \`21\` |
| \`/\` | Divisjon | \`15 / 4\` | \`3.75\` |
| \`%\` | Modulo (rest) | \`17 % 5\` | \`2\` |
| \`**\` | Potens | \`2 ** 8\` | \`256\` |

\`\`\`javascript
const a = 10;
const b = 3;

console.log(a + b);   // 13
console.log(a - b);   // 7
console.log(a * b);   // 30
console.log(a / b);   // 3.3333...
console.log(a % b);   // 1 (resten ved 10 delt på 3)
console.log(a ** b);  // 1000 (10 opphøyd i 3)
\`\`\`

### Forkortet tilordning

Du kan kombinere regneoperatorer med tilordning:

\`\`\`javascript
let tall = 10;
tall += 5;    // tall = tall + 5 → 15
tall -= 3;    // tall = tall - 3 → 12
tall *= 2;    // tall = tall * 2 → 24
tall /= 4;    // tall = tall / 4 → 6
tall++;       // tall = tall + 1 → 7
tall--;       // tall = tall - 1 → 6
\`\`\``,
    },
    {
      id: 'it-1-5-2-text-sammenligning',
      type: 'text',
      title: 'Sammenlignings- og logiske operatorer',
      content: `### Sammenligningsoperatorer

Sammenligningsoperatorer returnerer \`true\` eller \`false\`:

\`\`\`javascript
console.log(5 === 5);     // true (streng likhet)
console.log(5 === "5");   // false (ulike typer)
console.log(5 == "5");    // true (løs likhet – unngå denne!)
console.log(5 !== 3);     // true (streng ulikhet)
console.log(10 > 5);      // true
console.log(3 <= 3);      // true
\`\`\`

Bruk alltid \`===\` (trippel likhetstegn) for sammenligning, aldri \`==\` (dobbel likhetstegn). Dobbel likhet utfører automatisk typekonvertering som kan gi uventede resultater:

\`\`\`javascript
console.log(0 == "");      // true  (begge konverteres til 0)
console.log(0 === "");     // false (number !== string)
console.log(null == undefined);  // true  (spesiell regel)
console.log(null === undefined); // false (ulike typer)
\`\`\`

### Logiske operatorer

\`\`\`javascript
const a = true;
const b = false;

console.log(a && b);   // false (OG – begge må være sanne)
console.log(a || b);   // true  (ELLER – minst én må være sann)
console.log(!a);        // false (IKKE – snur verdien)
\`\`\``,
    },
    {
      id: 'it-1-5-2-text-typekonvertering',
      type: 'text',
      title: 'Typekonvertering',
      content: `JavaScript konverterer automatisk mellom typer i noen situasjoner, noe som kalles **implisitt typekonvertering** (coercion). Dette kan gi overraskende resultater:

\`\`\`javascript
console.log("5" + 3);      // "53" (tallet konverteres til streng)
console.log("5" - 3);      // 2   (strengen konverteres til tall)
console.log("5" * "3");    // 15  (begge konverteres til tall)
console.log(true + 1);     // 2   (true konverteres til 1)
console.log(false + 1);    // 1   (false konverteres til 0)
\`\`\`

Plussoperatoren (\`+\`) er spesiell: når én side er en streng, konverterer den den andre siden til streng og setter dem sammen. For andre operatorer prøver JavaScript å konvertere til tall.

For å unngå forvirring kan du eksplisitt konvertere mellom typer:

\`\`\`javascript
// Streng til tall
const tall = Number("42");        // 42
const tall2 = parseInt("42px");   // 42 (ignorerer ikke-numeriske tegn)
const tall3 = parseFloat("3.14"); // 3.14

// Tall til streng
const tekst = String(42);        // "42"
const tekst2 = (42).toString();  // "42"

// Til boolean
const bool = Boolean(0);         // false
const bool2 = Boolean("hei");    // true
\`\`\``,
    },
    {
      id: 'it-1-5-2-text-arrays',
      type: 'text',
      title: 'Arrays – ordnede lister',
      content: `En **array** (liste) er en ordnet samling av verdier. Arrays er en av de mest brukte datastrukturene i JavaScript:

\`\`\`javascript
const frukter = ["eple", "banan", "appelsin"];
const tall = [1, 2, 3, 4, 5];
const blandet = ["tekst", 42, true, null];

// Hente elementer (indeks starter på 0!)
console.log(frukter[0]);   // "eple"
console.log(frukter[1]);   // "banan"
console.log(frukter[2]);   // "appelsin"
console.log(frukter.length); // 3

// Endre elementer
frukter[1] = "mango";
console.log(frukter);  // ["eple", "mango", "appelsin"]
\`\`\`

### Nyttige array-metoder

\`\`\`javascript
const tall = [3, 1, 4, 1, 5, 9];

// Legge til og fjerne
tall.push(2);            // Legger til 2 bakerst → [3,1,4,1,5,9,2]
tall.pop();              // Fjerner siste element → [3,1,4,1,5,9]
tall.unshift(0);         // Legger til 0 forrest → [0,3,1,4,1,5,9]

// Søke
console.log(tall.includes(4));   // true
console.log(tall.indexOf(1));    // 2 (første forekomst)

// Transformere
const doble = tall.map(t => t * 2);      // Dobler hvert element
const store = tall.filter(t => t > 3);   // Filtrerer ut tall > 3
const sum = tall.reduce((a, b) => a + b, 0); // Summerer alle

// Sortere
tall.sort((a, b) => a - b);  // Sorterer stigende
\`\`\``,
    },
    {
      id: 'it-1-5-2-text-objekter',
      type: 'text',
      title: 'Objekter – nøkkel-verdi-par',
      content: `Et **objekt** er en samling av **nøkkel-verdi-par** (også kalt egenskaper). Objekter brukes til å gruppere relaterte data:

\`\`\`javascript
const elev = {
  fornavn: "Sara",
  etternavn: "Hansen",
  alder: 17,
  klasse: "2ITA",
  erAktiv: true,
};

// Hente verdier
console.log(elev.fornavn);        // "Sara"
console.log(elev["etternavn"]);   // "Hansen"

// Endre verdier
elev.alder = 18;

// Legge til nye egenskaper
elev.epost = "sara@skole.no";

// Slette egenskaper
delete elev.erAktiv;
\`\`\`

Objekter kan også inneholde arrays og andre objekter:

\`\`\`javascript
const skole = {
  navn: "Nordberg videregående",
  adresse: {
    gate: "Skolegata 1",
    poststed: "Oslo",
  },
  fag: ["IT1", "Matematikk", "Norsk"],
  antallElever: 850,
};

console.log(skole.adresse.gate);   // "Skolegata 1"
console.log(skole.fag[0]);         // "IT1"
\`\`\`

Objekter og arrays er fundamentale i JavaScript og brukes overalt – fra enkel datalagring til JSON-formatet som brukes i nesten all datautveksling på webben.`,
    },
    {
      id: 'it-1-5-2-example-strengmetoder',
      type: 'example',
      title: 'Nyttige strengmetoder',
      content: `Strenger i JavaScript har mange innebygde metoder:

\`\`\`javascript
const tekst = "Hei, verden!";

// Lengde
console.log(tekst.length);           // 12

// Store/små bokstaver
console.log(tekst.toUpperCase());    // "HEI, VERDEN!"
console.log(tekst.toLowerCase());    // "hei, verden!"

// Søke
console.log(tekst.includes("verden"));  // true
console.log(tekst.indexOf("verden"));   // 5
console.log(tekst.startsWith("Hei"));   // true

// Hente deler
console.log(tekst.slice(5, 11));     // "verden"
console.log(tekst.charAt(0));        // "H"

// Erstatte
console.log(tekst.replace("verden", "Norge")); // "Hei, Norge!"

// Dele opp
const ord = tekst.split(" ");       // ["Hei,", "verden!"]

// Fjerne mellomrom
const rotete = "  hei  ";
console.log(rotete.trim());          // "hei"
\`\`\`

Husk at alle strengmetoder returnerer en **ny** streng – den opprinnelige strengen endres ikke.`,
    },
    {
      id: 'it-1-5-2-note-json',
      type: 'note',
      title: 'JSON – JavaScript Object Notation',
      content: `**JSON** er et tekstformat for datautveksling som er basert på JavaScript-objektsyntaks. JSON brukes for å sende data mellom klient og server, lagre innstillinger og konfigurere programmer. JSON ser nesten likt ut som JavaScript-objekter, men med noen forskjeller:

\`\`\`json
{
  "fornavn": "Sara",
  "alder": 17,
  "fag": ["IT1", "Norsk"],
  "aktiv": true
}
\`\`\`

I JSON må alle nøkler omsluttes av doble anførselstegn, og verdier kan kun være strenger, tall, boolske verdier, arrays, objekter eller null. JavaScript har innebygde funksjoner for å konvertere mellom objekter og JSON:

\`\`\`javascript
const obj = { navn: "Sara", alder: 17 };
const jsonTekst = JSON.stringify(obj);   // '{"navn":"Sara","alder":17}'
const tilbake = JSON.parse(jsonTekst);   // { navn: "Sara", alder: 17 }
\`\`\``,
    },
    {
      id: 'it-1-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-2-ex-1',
        number: '5.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva returnerer `typeof "42"` i JavaScript?',
        options: [
          { id: 'a', text: '"number"', isCorrect: false, feedback: '"42" er omsluttet av anførselstegn, noe som gjør det til en streng, ikke et tall.' },
          { id: 'b', text: '"string"', isCorrect: true },
          { id: 'c', text: '"integer"', isCorrect: false, feedback: 'JavaScript har ingen egen "integer"-type – alle tall er "number".' },
          { id: 'd', text: '"boolean"', isCorrect: false, feedback: 'Boolean er datatypen for true/false-verdier.' },
        ],
        solution: '`typeof "42"` returnerer "string" fordi verdien er omsluttet av anførselstegn. Selv om innholdet ser ut som et tall, behandler JavaScript det som tekst. For å gjøre det til et tall må du bruke Number("42") eller parseInt("42").',
      },
    },
    {
      id: 'it-1-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-2-ex-2',
        number: '5.2.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva blir resultatet av `"5" + 3` i JavaScript?',
        options: [
          { id: 'a', text: '8', isCorrect: false, feedback: 'Når + brukes med en streng, utfører JavaScript strengkonkatenering, ikke addisjon.' },
          { id: 'b', text: '"53"', isCorrect: true },
          { id: 'c', text: '"8"', isCorrect: false, feedback: 'JavaScript konverterer tallet til streng og setter dem sammen, den prøver ikke å regne.' },
          { id: 'd', text: 'NaN', isCorrect: false, feedback: 'NaN oppstår ved ugyldig matematikk, men her utfører JavaScript strengkonkatenering.' },
        ],
        solution: 'Når plussoperatoren (+) brukes med minst én streng, konverterer JavaScript den andre verdien til streng og setter dem sammen (strengkonkatenering). Tallet 3 konverteres til "3", og "5" + "3" blir "53". For å få tallet 8 må du først konvertere strengen: Number("5") + 3.',
      },
    },
    {
      id: 'it-1-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-2-ex-3',
        number: '5.2.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er verdien av `frukter[2]` etter denne koden?\n\n```javascript\nconst frukter = ["eple", "banan", "appelsin", "mango"];\nfrukter[2] = "druer";\n```',
        options: [
          { id: 'a', text: '"appelsin"', isCorrect: false, feedback: '"appelsin" var den opprinnelige verdien, men den ble erstattet i linje 2.' },
          { id: 'b', text: '"banan"', isCorrect: false, feedback: '"banan" er på indeks 1, ikke indeks 2.' },
          { id: 'c', text: '"druer"', isCorrect: true },
          { id: 'd', text: 'Koden gir feil fordi arrayen er const', isCorrect: false, feedback: 'const hindrer oss fra å tilordne en ny array til variabelen, men innholdet i arrayen kan endres.' },
        ],
        solution: 'Arrayen er deklarert med const, men det hindrer bare oss fra å tilordne en helt ny array til variabelen. Innholdet (elementene) i arrayen kan fortsatt endres. Etter `frukter[2] = "druer"` er arrayen ["eple", "banan", "druer", "mango"], og `frukter[2]` er "druer".',
      },
    },
    {
      id: 'it-1-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-2-ex-4',
        number: '5.2.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er resultatet av dette uttrykket?\n\n```javascript\nconst tall = [10, 20, 30, 40, 50];\nconst storeTall = tall.filter(t => t > 25);\nconsole.log(storeTall.length);\n```',
        options: [
          { id: 'a', text: '2', isCorrect: false, feedback: 'Sjekk betingelsen nøye: t > 25. Hvilke tall er større enn 25?' },
          { id: 'b', text: '3', isCorrect: true },
          { id: 'c', text: '5', isCorrect: false, feedback: 'filter() returnerer kun elementene som oppfyller betingelsen.' },
          { id: 'd', text: '0', isCorrect: false, feedback: 'Det er flere tall i arrayen som er større enn 25.' },
        ],
        solution: 'filter() lager en ny array med bare elementene som oppfyller betingelsen t > 25. Tallene 30, 40 og 50 er alle større enn 25, så storeTall blir [30, 40, 50] med length 3. Tallet 20 er ikke større enn 25 og filtreres bort.',
      },
    },
    {
      id: 'it-1-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-2-ex-5',
        number: '5.2.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag et JavaScript-objekt som representerer en bok. Objektet skal ha egenskapene `tittel` (streng), `forfatter` (streng), `ar` (tall), `sider` (tall) og `lest` (boolean). Skriv deretter kode som bruker en template literal til å skrive ut en setning som: "Sofies verden av Jostein Gaarder (1991) – 518 sider".',
        solution: `\`\`\`javascript
const bok = {
  tittel: "Sofies verden",
  forfatter: "Jostein Gaarder",
  ar: 1991,
  sider: 518,
  lest: true,
};

console.log(\`\${bok.tittel} av \${bok.forfatter} (\${bok.ar}) – \${bok.sider} sider\`);
// "Sofies verden av Jostein Gaarder (1991) – 518 sider"
\`\`\`

Vi bruker template literal (backticks) med \${}-syntaks for å sette inn objektets egenskaper direkte i strengen. Dette er mer lesbart enn strengkonkatenering med + operatoren.`,
      },
    },
    {
      id: 'it-1-5-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-2-ex-6',
        number: '5.2.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en funksjon `statistikk(talliste)` som tar inn en array med tall og returnerer et objekt med egenskapene `sum`, `gjennomsnitt`, `min` og `maks`. Test funksjonen med arrayen `[4, 8, 15, 16, 23, 42]`.',
        solution: `\`\`\`javascript
function statistikk(talliste) {
  const sum = talliste.reduce((a, b) => a + b, 0);
  return {
    sum: sum,
    gjennomsnitt: sum / talliste.length,
    min: Math.min(...talliste),
    maks: Math.max(...talliste),
  };
}

const resultat = statistikk([4, 8, 15, 16, 23, 42]);
console.log(resultat);
// { sum: 108, gjennomsnitt: 18, min: 4, maks: 42 }
\`\`\`

Funksjonen bruker reduce() for å summere alle tall, Math.min() og Math.max() med spread-operatoren (...) for å finne minste og største verdi, og beregner gjennomsnitt ved å dele summen på antall elementer.`,
      },
    },
    {
      id: 'it-1-5-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-2-ex-7',
        number: '5.2.7',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hva skrives ut av denne koden?\n\n```javascript\nconsole.log(typeof null);\n```',
        options: [
          { id: 'a', text: '"null"', isCorrect: false, feedback: 'Intuitivt ville man forvente dette, men det er ikke det JavaScript returnerer.' },
          { id: 'b', text: '"undefined"', isCorrect: false, feedback: 'null og undefined er forskjellige verdier i JavaScript.' },
          { id: 'c', text: '"object"', isCorrect: true },
          { id: 'd', text: '"boolean"', isCorrect: false, feedback: 'null er ikke en boolsk verdi.' },
        ],
        solution: '`typeof null` returnerer "object", noe som er en velkjent bug i JavaScript som har eksistert siden språkets begynnelse i 1995. Feilen kan ikke rettes fordi det ville ødelegge eksisterende kode. For å sjekke om en verdi er null, bruk `verdi === null` i stedet for typeof.',
      },
    },
    {
      id: 'it-1-5-2-ex-8',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-2-ex-8',
        number: '5.2.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en funksjon `formaterNavn(navneliste)` som tar inn en array med navn og returnerer en formatert streng. Hvis listen har ett navn, returner det navnet. Hvis to, returner "Navn1 og Navn2". Hvis tre eller flere, returner "Navn1, Navn2 og Navn3". Test med `["Anna"]`, `["Anna", "Ole"]` og `["Anna", "Ole", "Kari"]`.',
        solution: `\`\`\`javascript
function formaterNavn(navneliste) {
  if (navneliste.length === 1) {
    return navneliste[0];
  } else if (navneliste.length === 2) {
    return navneliste[0] + " og " + navneliste[1];
  } else {
    const sistNavn = navneliste[navneliste.length - 1];
    const resten = navneliste.slice(0, -1).join(", ");
    return resten + " og " + sistNavn;
  }
}

console.log(formaterNavn(["Anna"]));                // "Anna"
console.log(formaterNavn(["Anna", "Ole"]));         // "Anna og Ole"
console.log(formaterNavn(["Anna", "Ole", "Kari"])); // "Anna, Ole og Kari"
\`\`\`

Funksjonen bruker slice(0, -1) for å hente alle elementer unntatt det siste, join(", ") for å sette dem sammen med komma, og legger til "og" før det siste navnet.`,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.3: DOM-manipulering
// ============================================================================

export const CHAPTER_IT_1_5_3: TextbookChapter = {
  id: 'it-1-5-3',
  courseId: 'it-1',
  chapterNumber: '5.3',
  title: 'DOM-manipulering',
  description: 'Lær å bruke JavaScript til å finne, endre, opprette og slette HTML-elementer via Document Object Model (DOM).',
  estimatedMinutes: 65,
  prevChapter: 'it-1-5-2',
  nextChapter: 'it-1-5-4',
  competenceGoals: [
    'bruke JavaScript til å manipulere HTML-dokumenter via DOM-en',
    'utvikle dynamiske nettsider der innholdet endres med JavaScript',
  ],
  keyTerms: [
    { term: 'DOM', definition: 'Document Object Model er en trestruktur som nettleseren bygger opp fra HTML-koden. Hvert HTML-element blir et objekt (node) i treet, og JavaScript kan lese, endre, legge til og fjerne disse nodene. DOM-en er bindeleddet mellom HTML-dokumentet og JavaScript – den gjør det mulig å endre nettsiden dynamisk uten å laste den på nytt.' },
    { term: 'document', definition: 'Det globale JavaScript-objektet som representerer hele HTML-dokumentet. Alle DOM-metoder starter fra dette objektet, for eksempel document.getElementById() og document.querySelector(). document-objektet er inngangsporten til hele DOM-treet og gir tilgang til alle elementer på siden.' },
    { term: 'querySelector', definition: 'En DOM-metode som returnerer det første elementet som matcher en CSS-selektor. For eksempel finner document.querySelector(".info") det første elementet med klassen "info". Den tilsvarende querySelectorAll() returnerer alle matchende elementer som en NodeList. Disse metodene er de mest fleksible for å finne elementer i DOM-en.' },
    { term: 'innerHTML', definition: 'En egenskap på DOM-elementer som lar deg lese eller sette HTML-innholdet inni elementet. Å sette innerHTML erstatter alt eksisterende innhold med ny HTML-kode. innerHTML bør brukes med forsiktighet fordi det kan introdusere sikkerhetsproblemer (XSS) hvis du setter inn brukerdata uten å rense dem først.' },
    { term: 'textContent', definition: 'En egenskap på DOM-elementer som lar deg lese eller sette tekstinnholdet uten HTML-tagger. I motsetning til innerHTML behandler textContent alt som ren tekst – HTML-tagger vises som vanlig tekst i stedet for å tolkes. Dette gjør textContent tryggere å bruke med brukerdata.' },
    { term: 'createElement', definition: 'En DOM-metode som oppretter et nytt HTML-element uten å legge det til i dokumentet. Det opprettede elementet må deretter legges til DOM-treet med appendChild() eller lignende metoder. Denne tilnærmingen gir mer kontroll enn innerHTML fordi du kan bygge opp elementer steg for steg.' },
    { term: 'classList', definition: 'En egenskap på DOM-elementer som gir tilgang til elementets CSS-klasser. Den har metodene add() for å legge til en klasse, remove() for å fjerne, toggle() for å veksle, og contains() for å sjekke om en klasse finnes. classList er det foretrukne verktøyet for å endre utseendet til elementer dynamisk.' },
  ],
  content: [
    {
      id: 'it-1-5-3-intro',
      type: 'text',
      content: `## DOM-manipulering

Nå som du kan grunnleggende JavaScript, er det på tide å koble språket til nettsiden. **DOM-manipulering** handler om å bruke JavaScript til å finne HTML-elementer på siden og endre dem – endre tekst, style, legge til nye elementer eller fjerne eksisterende. Dette er kjernen i interaktiv webutvikling.

Når nettleseren laster en HTML-side, bygger den opp en **Document Object Model (DOM)** – en trestruktur der hvert HTML-element er et objekt. JavaScript kan navigere i dette treet, lese elementenes innhold og egenskaper, og endre dem. Endringer i DOM-en reflekteres umiddelbart på skjermen, slik at brukeren ser oppdateringene uten å laste siden på nytt.`,
    },
    {
      id: 'it-1-5-3-def-dom',
      type: 'definition',
      title: 'Document Object Model (DOM)',
      content: `**DOM** (Document Object Model) er en programmeringsgrensesnitt (API) som representerer et HTML-dokument som en trestruktur av objekter. Hver HTML-tag blir en **node** i treet, med \`document\` som rotnode. JavaScript bruker DOM-en for å lese og endre nettsiden dynamisk. Nettleseren holder DOM-en synkronisert med det som vises på skjermen – når du endrer et element i DOM-en, oppdateres visningen automatisk.`,
    },
    {
      id: 'it-1-5-3-text-finne',
      type: 'text',
      title: 'Finne elementer i DOM-en',
      content: `Før du kan endre et element, må du finne det. JavaScript tilbyr flere metoder for dette:

### querySelector – den mest fleksible metoden

\`querySelector()\` bruker CSS-selektorer for å finne elementer:

\`\`\`javascript
// Finn det første elementet med id="overskrift"
const overskrift = document.querySelector("#overskrift");

// Finn det første elementet med klassen "info"
const info = document.querySelector(".info");

// Finn den første <p>-taggen
const avsnitt = document.querySelector("p");

// Finn det første <a>-elementet inne i en <nav>
const lenke = document.querySelector("nav a");
\`\`\`

### querySelectorAll – finn alle matchende elementer

\`\`\`javascript
// Finn ALLE elementer med klassen "kort"
const alleKort = document.querySelectorAll(".kort");

// Gå gjennom alle matchende elementer
alleKort.forEach(kort => {
  console.log(kort.textContent);
});
\`\`\`

### getElementById – finn element med ID

\`\`\`javascript
const element = document.getElementById("minId");
\`\`\`

### Eksempel med HTML

Gitt denne HTML-koden:

\`\`\`html
<h1 id="tittel">Min nettside</h1>
<p class="beskrivelse">Velkommen til siden min.</p>
<ul>
  <li class="punkt">Punkt 1</li>
  <li class="punkt">Punkt 2</li>
  <li class="punkt">Punkt 3</li>
</ul>
\`\`\`

Kan vi finne elementene slik:

\`\`\`javascript
const tittel = document.querySelector("#tittel");
const beskrivelse = document.querySelector(".beskrivelse");
const allePunkter = document.querySelectorAll(".punkt");

console.log(tittel.textContent);       // "Min nettside"
console.log(beskrivelse.textContent);  // "Velkommen til siden min."
console.log(allePunkter.length);       // 3
\`\`\``,
    },
    {
      id: 'it-1-5-3-text-endre',
      type: 'text',
      title: 'Endre innhold og attributter',
      content: `Når du har funnet et element, kan du endre innholdet og egenskapene:

### Endre tekst med textContent

\`\`\`javascript
const overskrift = document.querySelector("#tittel");
overskrift.textContent = "Ny overskrift!";
\`\`\`

### Endre HTML med innerHTML

\`\`\`javascript
const boks = document.querySelector("#innhold");
boks.innerHTML = "<strong>Viktig:</strong> Denne teksten er <em>endret</em>.";
\`\`\`

### Endre attributter

\`\`\`javascript
const bilde = document.querySelector("img");
bilde.src = "nytt-bilde.jpg";
bilde.alt = "Et nytt bilde";

const lenke = document.querySelector("a");
lenke.href = "https://www.nrk.no";
lenke.target = "_blank";
\`\`\`

### Endre stiler direkte

\`\`\`javascript
const element = document.querySelector("#boks");
element.style.backgroundColor = "lightblue";
element.style.padding = "20px";
element.style.borderRadius = "10px";
element.style.fontSize = "18px";   // Merk: camelCase i stedet for bindestrek
\`\`\`

Legg merke til at CSS-egenskaper med bindestrek (som \`background-color\`) skrives med camelCase i JavaScript (\`backgroundColor\`).`,
    },
    {
      id: 'it-1-5-3-warning-innerhtml',
      type: 'warning',
      title: 'Sikkerhet med innerHTML',
      content: `Vær forsiktig med å bruke \`innerHTML\` med data fra brukere. Hvis du setter inn brukerens tekst direkte som HTML, kan en ondsinnet bruker injisere skadelig kode (XSS – Cross-Site Scripting):

\`\`\`javascript
// FARLIG – aldri gjør dette med brukerdata!
const brukerInput = '<img src="x" onerror="alert(\'Hacket!\')">';
document.querySelector("#boks").innerHTML = brukerInput;

// TRYGT – bruk textContent for brukerdata
document.querySelector("#boks").textContent = brukerInput;
\`\`\`

Bruk \`textContent\` når du skal vise tekst fra brukere, og \`innerHTML\` bare med innhold du har full kontroll over.`,
    },
    {
      id: 'it-1-5-3-text-klasser',
      type: 'text',
      title: 'Endre CSS-klasser med classList',
      content: `Den mest elegante måten å endre utseendet til elementer er via CSS-klasser. I stedet for å sette stiler direkte i JavaScript, definerer du klasser i CSS og legger dem til eller fjerner dem med JavaScript:

\`\`\`css
/* CSS */
.synlig { display: block; }
.skjult { display: none; }
.uthevet { background-color: yellow; font-weight: bold; }
.feilmelding { color: red; border: 2px solid red; padding: 10px; }
\`\`\`

\`\`\`javascript
// JavaScript
const boks = document.querySelector("#meldingsboks");

// Legge til en klasse
boks.classList.add("uthevet");

// Fjerne en klasse
boks.classList.remove("skjult");

// Veksle en klasse (legger til hvis den mangler, fjerner hvis den finnes)
boks.classList.toggle("synlig");

// Sjekke om en klasse finnes
if (boks.classList.contains("feilmelding")) {
  console.log("Det er en feilmelding!");
}

// Legge til flere klasser samtidig
boks.classList.add("synlig", "uthevet");
\`\`\`

Denne tilnærmingen er bedre enn å endre \`style\` direkte fordi:
- CSS-koden holdes i stilarket der den hører hjemme
- Du kan bruke CSS-animasjoner og overganger
- Koden er lettere å lese og vedlikeholde
- Flere stiler endres med én operasjon`,
    },
    {
      id: 'it-1-5-3-text-opprette',
      type: 'text',
      title: 'Opprette og fjerne elementer',
      content: `JavaScript kan også lage helt nye HTML-elementer og legge dem til på siden:

### Opprette nye elementer

\`\`\`javascript
// Opprett et nytt <li>-element
const nyttPunkt = document.createElement("li");
nyttPunkt.textContent = "Nytt listepunkt";
nyttPunkt.classList.add("punkt");

// Legg til i en eksisterende liste
const liste = document.querySelector("ul");
liste.appendChild(nyttPunkt);
\`\`\`

### Mer avansert: Bygge opp en komplett struktur

\`\`\`javascript
// Lag et nytt kort-element
const kort = document.createElement("div");
kort.classList.add("kort");

const kortTittel = document.createElement("h3");
kortTittel.textContent = "Nytt kort";

const kortTekst = document.createElement("p");
kortTekst.textContent = "Dette kortet ble laget med JavaScript.";

const kortKnapp = document.createElement("button");
kortKnapp.textContent = "Les mer";

// Sett sammen strukturen
kort.appendChild(kortTittel);
kort.appendChild(kortTekst);
kort.appendChild(kortKnapp);

// Legg kortet til på siden
document.querySelector("#kortContainer").appendChild(kort);
\`\`\`

### Fjerne elementer

\`\`\`javascript
// Fjern et element
const element = document.querySelector("#gammelBoks");
element.remove();

// Alternativ: Fjern et barn-element
const liste = document.querySelector("ul");
const forstePunkt = liste.querySelector("li");
liste.removeChild(forstePunkt);
\`\`\`

### Erstatte elementer

\`\`\`javascript
const gammelElement = document.querySelector("#gammel");
const nyttElement = document.createElement("div");
nyttElement.textContent = "Nytt innhold";

gammelElement.replaceWith(nyttElement);
\`\`\``,
    },
    {
      id: 'it-1-5-3-example-dynamisk-liste',
      type: 'example',
      title: 'Komplett eksempel: Dynamisk oppgaveliste',
      content: `Her er et komplett eksempel som kombinerer DOM-metoder for å lage en interaktiv oppgaveliste:

**HTML:**
\`\`\`html
<h2>Min oppgaveliste</h2>
<div>
  <input type="text" id="nyOppgave" placeholder="Skriv en oppgave...">
  <button id="leggTil">Legg til</button>
</div>
<ul id="oppgaveliste"></ul>
<p id="teller">Antall oppgaver: 0</p>
\`\`\`

**JavaScript:**
\`\`\`javascript
function leggTilOppgave() {
  const input = document.querySelector("#nyOppgave");
  const tekst = input.value.trim();

  if (tekst === "") {
    return;  // Ikke legg til tom oppgave
  }

  // Opprett nytt listeelement
  const li = document.createElement("li");
  li.textContent = tekst;

  // Opprett sletteknapp
  const slettKnapp = document.createElement("button");
  slettKnapp.textContent = "Slett";
  slettKnapp.style.marginLeft = "10px";
  slettKnapp.addEventListener("click", function () {
    li.remove();
    oppdaterTeller();
  });

  li.appendChild(slettKnapp);
  document.querySelector("#oppgaveliste").appendChild(li);

  // Tøm inputfeltet
  input.value = "";
  input.focus();

  oppdaterTeller();
}

function oppdaterTeller() {
  const antall = document.querySelectorAll("#oppgaveliste li").length;
  document.querySelector("#teller").textContent = "Antall oppgaver: " + antall;
}

document.querySelector("#leggTil").addEventListener("click", leggTilOppgave);
\`\`\`

Dette eksempelet viser hvordan createElement(), appendChild(), remove(), querySelector() og addEventListener() jobber sammen for å skape en interaktiv brukeropplevelse.`,
    },
    {
      id: 'it-1-5-3-tip-devtools',
      type: 'tip',
      title: 'Utforsk DOM-en med utviklerverktøy',
      content: `Nettleserens utviklerverktøy (F12) har en «Elements»-fane som viser hele DOM-treet. Her kan du:

- Klikke på elementer for å se deres egenskaper og stiler
- Redigere HTML og CSS direkte for rask testing
- Høyreklikke på et element og velge «Copy → Copy selector» for å få CSS-selektoren
- Bruke \`$0\` i konsollen for å referere til det valgte elementet
- Bruke \`document.querySelectorAll("*").length\` i konsollen for å telle alle elementer på siden

Utviklerverktøyene er uvurderlige for å forstå og feilsøke DOM-manipulering.`,
    },
    {
      id: 'it-1-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-3-ex-1',
        number: '5.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er DOM-en (Document Object Model)?',
        options: [
          { id: 'a', text: 'En CSS-standard for layout', isCorrect: false, feedback: 'DOM handler ikke om CSS-layout, men om dokumentstrukturen.' },
          { id: 'b', text: 'En trestruktur som representerer HTML-dokumentet og lar JavaScript endre nettsiden', isCorrect: true },
          { id: 'c', text: 'En nettleser-plugin for webutvikling', isCorrect: false, feedback: 'DOM er innebygd i alle nettlesere og krever ingen plugins.' },
          { id: 'd', text: 'Et JavaScript-bibliotek for animasjoner', isCorrect: false, feedback: 'DOM er en standard API som er innebygd i nettleseren, ikke et bibliotek.' },
        ],
        solution: 'DOM (Document Object Model) er en trestruktur som nettleseren bygger fra HTML-koden. Hvert HTML-element blir et objekt (node) i treet. JavaScript bruker DOM-en som et grensesnitt for å lese, endre, opprette og fjerne elementer på nettsiden dynamisk.',
      },
    },
    {
      id: 'it-1-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-3-ex-2',
        number: '5.3.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken metode bruker du for å finne det første elementet med klassen "info"?',
        options: [
          { id: 'a', text: 'document.querySelector(".info")', isCorrect: true },
          { id: 'b', text: 'document.querySelector("#info")', isCorrect: false, feedback: '# brukes for å søke etter ID, ikke klasse. For klasse bruker du punkt (.).' },
          { id: 'c', text: 'document.getElement(".info")', isCorrect: false, feedback: 'Denne metoden eksisterer ikke i DOM-en.' },
          { id: 'd', text: 'document.querySelector("info")', isCorrect: false, feedback: 'Uten punkt vil dette søke etter et HTML-element med taggen <info>, som ikke eksisterer.' },
        ],
        solution: 'document.querySelector(".info") finner det første elementet med klassen "info". Punkt (.) foran navnet betyr klasse, hash (#) betyr ID, og ingen prefiks betyr HTML-tag. Denne syntaksen er identisk med CSS-selektorer.',
      },
    },
    {
      id: 'it-1-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-3-ex-3',
        number: '5.3.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er forskjellen mellom `textContent` og `innerHTML`?',
        options: [
          { id: 'a', text: 'Det er ingen forskjell – de gjør det samme', isCorrect: false, feedback: 'De har en viktig forskjell i hvordan de behandler HTML-tagger.' },
          { id: 'b', text: 'textContent behandler alt som ren tekst, innerHTML tolker HTML-tagger', isCorrect: true },
          { id: 'c', text: 'innerHTML er raskere enn textContent', isCorrect: false, feedback: 'textContent er faktisk raskere fordi den ikke trenger å tolke HTML.' },
          { id: 'd', text: 'textContent kan bare brukes på <p>-elementer', isCorrect: false, feedback: 'textContent kan brukes på alle DOM-elementer.' },
        ],
        solution: 'textContent setter inn ren tekst – eventuelle HTML-tagger vises som tekst i stedet for å tolkes. innerHTML tolker innholdet som HTML-kode. For eksempel vil `element.innerHTML = "<b>Hei</b>"` vise **Hei** (fet skrift), mens `element.textContent = "<b>Hei</b>"` viser den rå teksten <b>Hei</b>. textContent er tryggere å bruke med brukerdata.',
      },
    },
    {
      id: 'it-1-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-3-ex-4',
        number: '5.3.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Gitt denne HTML:\n\n```html\n<ul id="liste">\n  <li>A</li>\n  <li>B</li>\n  <li>C</li>\n</ul>\n```\n\nHva er resultatet av `document.querySelectorAll("#liste li").length`?',
        options: [
          { id: 'a', text: '1', isCorrect: false, feedback: 'querySelectorAll returnerer alle matchende elementer, ikke bare det første.' },
          { id: 'b', text: '2', isCorrect: false, feedback: 'Det er tre <li>-elementer inne i listen.' },
          { id: 'c', text: '3', isCorrect: true },
          { id: 'd', text: '0', isCorrect: false, feedback: 'Selektoren "#liste li" finner alle <li>-elementer inne i elementet med id="liste".' },
        ],
        solution: 'querySelectorAll("#liste li") finner alle <li>-elementer som er etterkommere av elementet med id="liste". Det er tre slike elementer (A, B, C), så length er 3. Merk forskjellen fra querySelector() som bare returnerer det første matchende elementet.',
      },
    },
    {
      id: 'it-1-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-3-ex-5',
        number: '5.3.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv JavaScript-kode som finner et element med id="melding" og gjør følgende:\n1. Endrer tekstinnholdet til "Velkommen til IT1!"\n2. Legger til CSS-klassen "uthevet"\n3. Setter bakgrunnsfargen til lysblå\n\nSkriv koden og forklar hva hver linje gjør.',
        solution: `\`\`\`javascript
const melding = document.querySelector("#melding");

// 1. Endre tekstinnholdet
melding.textContent = "Velkommen til IT1!";

// 2. Legge til CSS-klassen "uthevet"
melding.classList.add("uthevet");

// 3. Sette bakgrunnsfargen
melding.style.backgroundColor = "lightblue";
\`\`\`

Først finner vi elementet med querySelector("#melding"). Deretter bruker vi textContent for å endre teksten, classList.add() for å legge til en CSS-klasse, og style.backgroundColor for å sette en inline-stil. Merk at CSS-egenskapen background-color skrives som backgroundColor i JavaScript (camelCase).`,
      },
    },
    {
      id: 'it-1-5-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-3-ex-6',
        number: '5.3.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en JavaScript-funksjon `lagKort(tittel, beskrivelse)` som oppretter en ny `<div>` med klassen "kort", setter inn en `<h3>` med tittelen og en `<p>` med beskrivelsen, og legger kortet til i et element med id="kortContainer". Test funksjonen med `lagKort("JavaScript", "Et programmeringsspråk for webben")`.',
        solution: `\`\`\`javascript
function lagKort(tittel, beskrivelse) {
  // Opprett hovedelementet
  const kort = document.createElement("div");
  kort.classList.add("kort");

  // Opprett tittel
  const h3 = document.createElement("h3");
  h3.textContent = tittel;

  // Opprett beskrivelse
  const p = document.createElement("p");
  p.textContent = beskrivelse;

  // Sett sammen strukturen
  kort.appendChild(h3);
  kort.appendChild(p);

  // Legg kortet til i containeren
  document.querySelector("#kortContainer").appendChild(kort);
}

lagKort("JavaScript", "Et programmeringsspråk for webben");
\`\`\`

Funksjonen bruker createElement() til å opprette tre nye elementer, textContent til å sette innholdet, classList.add() til å legge til klasse, appendChild() til å bygge opp trestrukturen, og til slutt querySelector() og appendChild() til å legge det ferdige kortet inn i DOM-en.`,
      },
    },
    {
      id: 'it-1-5-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-3-ex-7',
        number: '5.3.7',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hvorfor bør du unngå å sette inn brukerdata med `innerHTML`?',
        options: [
          { id: 'a', text: 'Fordi innerHTML er tregere enn textContent', isCorrect: false, feedback: 'Ytelse er en faktor, men den viktigste grunnen handler om sikkerhet.' },
          { id: 'b', text: 'Fordi innerHTML ikke støttes i alle nettlesere', isCorrect: false, feedback: 'innerHTML støttes av alle moderne nettlesere.' },
          { id: 'c', text: 'Fordi det kan føre til XSS-angrep der ondsinnet kode kjøres på nettsiden', isCorrect: true },
          { id: 'd', text: 'Fordi innerHTML bare fungerer med <div>-elementer', isCorrect: false, feedback: 'innerHTML kan brukes på alle HTML-elementer.' },
        ],
        solution: 'Når du bruker innerHTML med brukerdata, kan en ondsinnet bruker injisere HTML og JavaScript-kode som kjøres i andre brukeres nettlesere. Dette kalles XSS (Cross-Site Scripting) og er en alvorlig sikkerhetssårbarhet. Bruk textContent for brukerdata – det behandler alt som ren tekst uten å tolke HTML-tagger.',
      },
    },
    {
      id: 'it-1-5-3-ex-8',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-3-ex-8',
        number: '5.3.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv JavaScript-kode som finner alle `<li>`-elementer på siden, og for hvert element som inneholder teksten "Viktig", legger til CSS-klassen "uthevet" og endrer tekstfargen til rød. Bruk querySelectorAll() og forEach().',
        solution: `\`\`\`javascript
const allePunkter = document.querySelectorAll("li");

allePunkter.forEach(punkt => {
  if (punkt.textContent.includes("Viktig")) {
    punkt.classList.add("uthevet");
    punkt.style.color = "red";
  }
});
\`\`\`

Koden bruker querySelectorAll("li") for å finne alle listeelementer og får en NodeList tilbake. Deretter brukes forEach() for å gå gjennom hvert element. For hvert element sjekker vi om textContent inneholder strengen "Viktig" med includes()-metoden. Hvis ja, legger vi til klassen "uthevet" og setter tekstfargen til rød.`,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.4: Hendelseshåndtering og brukerinteraksjon
// ============================================================================

export const CHAPTER_IT_1_5_4: TextbookChapter = {
  id: 'it-1-5-4',
  courseId: 'it-1',
  chapterNumber: '5.4',
  title: 'Hendelseshåndtering og brukerinteraksjon',
  description: 'Lær å gjøre nettsider interaktive ved å reagere på brukerens handlinger som klikk, tastettrykk, musebevegelser og skjemainnsending.',
  estimatedMinutes: 60,
  prevChapter: 'it-1-5-3',
  nextChapter: 'it-1-5-5',
  competenceGoals: [
    'bruke hendelseshåndtering for å skape interaktive brukeropplevelser',
    'utvikle skjemavalidering og brukergrensesnitt med JavaScript',
  ],
  keyTerms: [
    { term: 'Hendelse (event)', definition: 'En handling eller forekomst som skjer i nettleseren, for eksempel et museklikk, tastettrykk, siderulling eller at et skjema sendes inn. JavaScript kan lytte etter hendelser og kjøre kode som respons. Hendelsessystemet er grunnlaget for all interaktivitet på webben og følger en asynkron modell der kode kjøres når hendelsen inntreffer.' },
    { term: 'addEventListener', definition: 'En DOM-metode som registrerer en funksjon (event handler) som skal kjøres når en bestemt hendelse inntreffer på et element. Syntaksen er element.addEventListener("hendelsesnavn", funksjon). Denne metoden er den anbefalte måten å håndtere hendelser fordi den tillater flere lyttere på samme element og gir mer kontroll.' },
    { term: 'Event-objekt', definition: 'Et objekt som sendes automatisk til hendelseshåndtereren og inneholder informasjon om hendelsen som inntraff. For musehendelser inneholder det koordinater (clientX, clientY), for tastehendelser inneholder det hvilken tast som ble trykket (key), og for alle hendelser inneholder det referanse til elementet som utløste hendelsen (target).' },
    { term: 'event.target', definition: 'En egenskap på event-objektet som refererer til det DOM-elementet som faktisk utløste hendelsen. Dette er nyttig for å identifisere hvilket element brukeren interagerte med, spesielt når du bruker event delegation der én lytter håndterer hendelser fra flere barn-elementer.' },
    { term: 'Event delegation', definition: 'Et mønster der du plasserer én hendelseslytter på et forelder-element i stedet for separate lyttere på hvert barn-element. Hendelsen bobler opp fra barnet til forelderen, der du bruker event.target for å identifisere kilden. Dette er mer effektivt og fungerer også for dynamisk opprettede elementer.' },
    { term: 'preventDefault', definition: 'En metode på event-objektet som forhindrer nettleserens standardoppførsel for hendelsen. For eksempel stopper event.preventDefault() på et skjema at siden lastes på nytt når skjemaet sendes inn, slik at du kan håndtere innsendingen med JavaScript i stedet.' },
    { term: 'Skjemavalidering', definition: 'Prosessen med å kontrollere at data brukeren har fylt inn i et skjema oppfyller bestemte krav før de sendes til serveren. JavaScript kan validere at felter er utfylt, at e-postadresser har riktig format, at passord er sterke nok, og gi brukeren umiddelbar tilbakemelding uten å vente på svar fra serveren.' },
  ],
  content: [
    {
      id: 'it-1-5-4-intro',
      type: 'text',
      content: `## Hendelseshåndtering og brukerinteraksjon

I forrige kapittel lærte vi å endre nettsiden med JavaScript. Men endringene skjedde bare når koden kjørte ved sidelasting. For å skape virkelig interaktive nettsider trenger vi å reagere på **brukerens handlinger** – klikk, tastettrykk, musebevegelser og skjemainnsending. Dette kalles **hendelseshåndtering** (event handling).

Hendelsessystemet i JavaScript fungerer etter et enkelt prinsipp: du forteller nettleseren «når denne hendelsen skjer på dette elementet, kjør denne koden». Nettleseren venter tålmodig og kjører koden din bare når hendelsen faktisk inntreffer. Dette er en **asynkron** programmeringsmodell – koden kjører ikke i rekkefølge fra topp til bunn, men som respons på hendelser.`,
    },
    {
      id: 'it-1-5-4-def-hendelse',
      type: 'definition',
      title: 'Hendelse (Event)',
      content: `En **hendelse** er en handling eller forekomst som skjer i nettleseren og som JavaScript kan reagere på. Eksempler er museklikk (\`click\`), tastettrykk (\`keydown\`), musebevegelse (\`mouseover\`), siderulling (\`scroll\`), lasting av siden (\`load\`) og innsending av skjema (\`submit\`). Hendelser er grunnlaget for all brukerinteraksjon på webben.`,
    },
    {
      id: 'it-1-5-4-text-addeventlistener',
      type: 'text',
      title: 'Lytte etter hendelser med addEventListener',
      content: `Den anbefalte måten å håndtere hendelser på er med \`addEventListener()\`:

\`\`\`javascript
const knapp = document.querySelector("#minKnapp");

knapp.addEventListener("click", function () {
  console.log("Knappen ble klikket!");
});
\`\`\`

\`addEventListener\` tar to argumenter:
1. **Hendelsesnavnet** som en streng (f.eks. \`"click"\`)
2. **En funksjon** som kjøres når hendelsen inntreffer (kalles en **callback-funksjon**)

Du kan også bruke pilfunksjoner:

\`\`\`javascript
knapp.addEventListener("click", () => {
  console.log("Klikk registrert!");
});
\`\`\`

Eller referere til en navngitt funksjon:

\`\`\`javascript
function handterKlikk() {
  console.log("Funksjon ble kalt!");
}

knapp.addEventListener("click", handterKlikk);
\`\`\`

### Vanlige hendelsestyper

| Hendelse | Beskrivelse |
|----------|-------------|
| \`click\` | Museklikk på elementet |
| \`dblclick\` | Dobbeltklikk |
| \`mouseover\` | Musen beveges over elementet |
| \`mouseout\` | Musen forlater elementet |
| \`keydown\` | En tast trykkes ned |
| \`keyup\` | En tast slippes |
| \`input\` | Verdien i et inputfelt endres |
| \`submit\` | Et skjema sendes inn |
| \`change\` | Et skjemaelement endrer verdi |
| \`scroll\` | Siden eller et element rulles |
| \`load\` | Siden eller en ressurs er ferdig lastet |`,
    },
    {
      id: 'it-1-5-4-text-eventobj',
      type: 'text',
      title: 'Event-objektet',
      content: `Når en hendelse inntreffer, sender nettleseren automatisk et **event-objekt** til callback-funksjonen. Dette objektet inneholder nyttig informasjon om hendelsen:

\`\`\`javascript
const knapp = document.querySelector("#minKnapp");

knapp.addEventListener("click", function (event) {
  console.log("Type:", event.type);          // "click"
  console.log("Mål:", event.target);          // Elementet som ble klikket
  console.log("X-posisjon:", event.clientX);  // Musens x-koordinat
  console.log("Y-posisjon:", event.clientY);  // Musens y-koordinat
});
\`\`\`

### Event-objektet for tastehendelser

\`\`\`javascript
document.addEventListener("keydown", function (event) {
  console.log("Tast:", event.key);         // F.eks. "Enter", "a", "Escape"
  console.log("Kode:", event.code);        // F.eks. "Enter", "KeyA", "Escape"
  console.log("Shift holdt:", event.shiftKey);  // true/false
  console.log("Ctrl holdt:", event.ctrlKey);    // true/false
});
\`\`\`

### event.target – identifiser kilde-elementet

\`event.target\` refererer til det elementet som faktisk utløste hendelsen. Dette er spesielt nyttig når du har mange like elementer:

\`\`\`javascript
const knapper = document.querySelectorAll(".farge-knapp");

knapper.forEach(knapp => {
  knapp.addEventListener("click", function (event) {
    const valgtFarge = event.target.dataset.farge;
    document.body.style.backgroundColor = valgtFarge;
  });
});
\`\`\`

Med tilhørende HTML:
\`\`\`html
<button class="farge-knapp" data-farge="lightblue">Blå</button>
<button class="farge-knapp" data-farge="lightgreen">Grønn</button>
<button class="farge-knapp" data-farge="lightyellow">Gul</button>
\`\`\``,
    },
    {
      id: 'it-1-5-4-text-skjema',
      type: 'text',
      title: 'Skjemahåndtering og validering',
      content: `En av de viktigste bruksområdene for hendelseshåndtering er **skjemavalidering** – å sjekke at brukeren har fylt inn gyldige data før de sendes til serveren.

### Forhindre standard oppførsel

Når et skjema sendes inn, laster nettleseren normalt siden på nytt. For å håndtere innsendingen med JavaScript må vi stoppe denne oppførselen:

\`\`\`javascript
const skjema = document.querySelector("#registrering");

skjema.addEventListener("submit", function (event) {
  event.preventDefault();  // Stopp sidelasting!

  // Hent verdier fra skjemaet
  const navn = document.querySelector("#navn").value;
  const epost = document.querySelector("#epost").value;

  console.log("Navn:", navn);
  console.log("E-post:", epost);
});
\`\`\`

### Komplett skjemavalidering

\`\`\`html
<form id="pamelding">
  <label>Navn: <input type="text" id="navn"></label>
  <label>E-post: <input type="email" id="epost"></label>
  <label>Alder: <input type="number" id="alder"></label>
  <button type="submit">Send inn</button>
  <div id="feilmeldinger"></div>
</form>
\`\`\`

\`\`\`javascript
const skjema = document.querySelector("#pamelding");

skjema.addEventListener("submit", function (event) {
  event.preventDefault();

  const navn = document.querySelector("#navn").value.trim();
  const epost = document.querySelector("#epost").value.trim();
  const alder = Number(document.querySelector("#alder").value);
  const feilDiv = document.querySelector("#feilmeldinger");
  const feil = [];

  // Valider navn
  if (navn === "") {
    feil.push("Navn er obligatorisk.");
  } else if (navn.length < 2) {
    feil.push("Navnet må ha minst 2 tegn.");
  }

  // Valider e-post (enkel sjekk)
  if (!epost.includes("@") || !epost.includes(".")) {
    feil.push("Ugyldig e-postadresse.");
  }

  // Valider alder
  if (isNaN(alder) || alder < 13 || alder > 120) {
    feil.push("Alder må være mellom 13 og 120.");
  }

  // Vis resultat
  if (feil.length > 0) {
    feilDiv.innerHTML = feil.map(f => "<p style='color:red'>" + f + "</p>").join("");
  } else {
    feilDiv.innerHTML = "<p style='color:green'>Påmelding mottatt!</p>";
  }
});
\`\`\``,
    },
    {
      id: 'it-1-5-4-text-delegation',
      type: 'text',
      title: 'Event delegation – effektiv hendelseshåndtering',
      content: `Når du har mange elementer som skal reagere på klikk (for eksempel en liste med hundre elementer), er det ineffektivt å legge til en hendelseslytter på hvert enkelt element. I stedet kan du bruke **event delegation** – én lytter på forelder-elementet:

\`\`\`javascript
// I stedet for dette (ineffektivt):
document.querySelectorAll("li").forEach(li => {
  li.addEventListener("click", function () {
    console.log(this.textContent);
  });
});

// Bruk event delegation (effektivt):
document.querySelector("ul").addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log(event.target.textContent);
  }
});
\`\`\`

Hendelsen **bobler opp** (event bubbling) fra barneelementet til forelderen. Lytteren på \`<ul>\` fanger opp klikk på alle \`<li>\`-elementer, og \`event.target\` forteller oss hvilket element som ble klikket.

Event delegation har to store fordeler:
1. **Ytelse**: Bare én lytter i stedet for mange
2. **Dynamisk innhold**: Fungerer også for elementer som legges til senere med JavaScript`,
    },
    {
      id: 'it-1-5-4-example-interaktiv',
      type: 'example',
      title: 'Komplett eksempel: Interaktiv quiz',
      content: `Her er et eksempel som kombinerer hendelseshåndtering og DOM-manipulering til en liten quiz:

\`\`\`html
<div id="quiz">
  <h2>Quiz: JavaScript</h2>
  <p id="sporsmal">Hva brukes JavaScript til?</p>
  <div id="alternativer">
    <button class="alt" data-korrekt="false">Å strukturere nettsider</button>
    <button class="alt" data-korrekt="true">Å gjøre nettsider interaktive</button>
    <button class="alt" data-korrekt="false">Å style nettsider</button>
  </div>
  <p id="resultat"></p>
</div>
\`\`\`

\`\`\`javascript
const alternativer = document.querySelector("#alternativer");
const resultat = document.querySelector("#resultat");

alternativer.addEventListener("click", function (event) {
  // Sjekk at et alternativ-knapp ble klikket
  if (!event.target.classList.contains("alt")) {
    return;
  }

  const erKorrekt = event.target.dataset.korrekt === "true";

  // Deaktiver alle knapper
  document.querySelectorAll(".alt").forEach(knapp => {
    knapp.disabled = true;
    if (knapp.dataset.korrekt === "true") {
      knapp.style.backgroundColor = "lightgreen";
    }
  });

  // Vis tilbakemelding
  if (erKorrekt) {
    resultat.textContent = "Riktig! JavaScript gjør nettsider interaktive.";
    resultat.style.color = "green";
    event.target.style.backgroundColor = "lightgreen";
  } else {
    resultat.textContent = "Feil! Prøv igjen neste gang.";
    resultat.style.color = "red";
    event.target.style.backgroundColor = "lightcoral";
  }
});
\`\`\`

Eksempelet bruker event delegation på \`#alternativer\`-elementet i stedet for individuelle lyttere på hver knapp. \`dataset\`-egenskapen leser \`data-*\`-attributter fra HTML, og vi bruker DOM-manipulering for visuell tilbakemelding.`,
    },
    {
      id: 'it-1-5-4-note-input',
      type: 'note',
      title: 'Sanntids-input med "input"-hendelsen',
      content: `\`input\`-hendelsen utløses hver gang brukeren endrer verdien i et tekstfelt – for hvert eneste tastetrykk. Dette gir sanntids-tilbakemelding:

\`\`\`javascript
const sokefeld = document.querySelector("#sok");
const resultatDiv = document.querySelector("#resultater");

sokefeld.addEventListener("input", function (event) {
  const sokeTekst = event.target.value.toLowerCase();

  if (sokeTekst.length === 0) {
    resultatDiv.textContent = "";
    return;
  }

  // Enkel filtrering av en liste
  const elementer = ["JavaScript", "HTML", "CSS", "Python", "Java"];
  const treff = elementer.filter(e => e.toLowerCase().includes(sokeTekst));

  resultatDiv.textContent = treff.length > 0
    ? "Treff: " + treff.join(", ")
    : "Ingen treff.";
});
\`\`\`

Dette mønsteret brukes for sanntidssøk, passordstyrke-indikatorer, tegngrenser og lignende funksjoner.`,
    },
    {
      id: 'it-1-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-4-ex-1',
        number: '5.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken metode brukes for å lytte etter hendelser i JavaScript?',
        options: [
          { id: 'a', text: 'element.onEvent()', isCorrect: false, feedback: 'Denne metoden eksisterer ikke i standard DOM API.' },
          { id: 'b', text: 'element.addEventListener("hendelse", funksjon)', isCorrect: true },
          { id: 'c', text: 'element.listenFor("hendelse")', isCorrect: false, feedback: 'Denne metoden eksisterer ikke.' },
          { id: 'd', text: 'document.createEvent("hendelse")', isCorrect: false, feedback: 'createEvent oppretter et hendelse-objekt, men lytter ikke etter hendelser.' },
        ],
        solution: 'addEventListener() er den anbefalte metoden for å lytte etter hendelser. Den tar hendelsesnavnet som en streng og en callback-funksjon som kjøres når hendelsen inntreffer. Den kan brukes på alle DOM-elementer og tillater flere lyttere for samme hendelse.',
      },
    },
    {
      id: 'it-1-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-4-ex-2',
        number: '5.4.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva gjør `event.preventDefault()`?',
        options: [
          { id: 'a', text: 'Den fjerner hendelseslytteren fra elementet', isCorrect: false, feedback: 'For å fjerne en lytter bruker du removeEventListener().' },
          { id: 'b', text: 'Den stopper nettleserens standardoppførsel for hendelsen', isCorrect: true },
          { id: 'c', text: 'Den logger hendelsen til konsollen', isCorrect: false, feedback: 'For å logge til konsollen bruker du console.log().' },
          { id: 'd', text: 'Den forhindrer at hendelsen skjer igjen', isCorrect: false, feedback: 'preventDefault stopper bare standardoppførselen, ikke fremtidige hendelser.' },
        ],
        solution: 'event.preventDefault() stopper nettleserens standardoppførsel for hendelsen. For et skjema (submit) forhindrer det sidelasting, for en lenke (click) forhindrer det navigering, og for et avkrysningsfelt (click) forhindrer det at feltet endres. Hendelsen utløses fortsatt, men nettleseren gjør ikke sin vanlige respons.',
      },
    },
    {
      id: 'it-1-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-4-ex-3',
        number: '5.4.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er `event.target` i denne koden?\n\n```javascript\ndocument.querySelector("ul").addEventListener("click", function(event) {\n  console.log(event.target);\n});\n```\n\nNår brukeren klikker på et `<li>`-element inne i listen.',
        options: [
          { id: 'a', text: 'Det <ul>-elementet som lytteren er registrert på', isCorrect: false, feedback: 'event.target er elementet som utløste hendelsen, ikke elementet lytteren er på.' },
          { id: 'b', text: 'Det <li>-elementet som brukeren faktisk klikket på', isCorrect: true },
          { id: 'c', text: 'Hele document-objektet', isCorrect: false, feedback: 'event.target er det spesifikke elementet som ble klikket.' },
          { id: 'd', text: 'null fordi lytteren er på <ul>, ikke <li>', isCorrect: false, feedback: 'Hendelsen bobler opp fra <li> til <ul>, og event.target beholder referansen til kildeelementet.' },
        ],
        solution: 'event.target refererer alltid til det elementet som faktisk utløste hendelsen, uavhengig av hvor lytteren er registrert. Selv om lytteren er på <ul>, er det <li>-elementet brukeren klikket på som er event.target. Dette er grunnlaget for event delegation.',
      },
    },
    {
      id: 'it-1-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-4-ex-4',
        number: '5.4.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er fordelen med event delegation?',
        options: [
          { id: 'a', text: 'Koden kjører raskere fordi JavaScript tolkes annerledes', isCorrect: false, feedback: 'Event delegation handler ikke om JavaScript-tolkning, men om antall lyttere.' },
          { id: 'b', text: 'Du trenger færre lyttere og det fungerer for dynamisk opprettede elementer', isCorrect: true },
          { id: 'c', text: 'Hendelsene utløses raskere enn vanlige lyttere', isCorrect: false, feedback: 'Hendelsene utløses likt, men du har færre lyttere å håndtere.' },
          { id: 'd', text: 'Du kan bruke CSS-selektorer i stedet for JavaScript', isCorrect: false, feedback: 'Event delegation bruker JavaScript, men med én lytter på forelder-elementet.' },
        ],
        solution: 'Event delegation har to hovedfordeler: (1) Bedre ytelse fordi du har én hendelseslytter i stedet for mange, og (2) det fungerer automatisk for elementer som legges til dynamisk med JavaScript. Uten event delegation må du manuelt legge til lyttere på nye elementer etter at de er opprettet.',
      },
    },
    {
      id: 'it-1-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-4-ex-5',
        number: '5.4.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv JavaScript-kode for en knapp med id="morsknapp". Når knappen klikkes for første gang, skal teksten i et `<p>`-element med id="morsmelding" endres til "Du er fantastisk!". Ved neste klikk skal teksten endres til "Og det vet du!". Knappen skal veksle mellom disse to meldingene.',
        solution: `\`\`\`javascript
const knapp = document.querySelector("#morsknapp");
const melding = document.querySelector("#morsmelding");
let erForsteMelding = true;

knapp.addEventListener("click", function () {
  if (erForsteMelding) {
    melding.textContent = "Du er fantastisk!";
  } else {
    melding.textContent = "Og det vet du!";
  }
  erForsteMelding = !erForsteMelding;
});
\`\`\`

Vi bruker en boolsk variabel \`erForsteMelding\` for å holde styr på hvilken melding som skal vises. Hver gang knappen klikkes, sjekker vi verdien, viser riktig melding, og snur variabelen med \`!\`-operatoren.`,
      },
    },
    {
      id: 'it-1-5-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-4-ex-6',
        number: '5.4.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en komplett skjemavalidering med JavaScript. Skjemaet har feltene "brukernavn" (minst 3 tegn), "epost" (må inneholde @ og .), og "passord" (minst 8 tegn). Vis feilmeldinger i et `<div>` med id="feil". Bruk preventDefault() for å stoppe innsending ved feil.',
        solution: `\`\`\`javascript
const skjema = document.querySelector("#registrering");

skjema.addEventListener("submit", function (event) {
  event.preventDefault();

  const brukernavn = document.querySelector("#brukernavn").value.trim();
  const epost = document.querySelector("#epost").value.trim();
  const passord = document.querySelector("#passord").value;
  const feilDiv = document.querySelector("#feil");
  const feil = [];

  if (brukernavn.length < 3) {
    feil.push("Brukernavn må ha minst 3 tegn.");
  }

  if (!epost.includes("@") || !epost.includes(".")) {
    feil.push("Ugyldig e-postadresse.");
  }

  if (passord.length < 8) {
    feil.push("Passord må ha minst 8 tegn.");
  }

  if (feil.length > 0) {
    feilDiv.innerHTML = feil
      .map(f => "<p style='color:red'>" + f + "</p>")
      .join("");
  } else {
    feilDiv.innerHTML = "<p style='color:green'>Registrering vellykket!</p>";
  }
});
\`\`\`

Koden bruker event.preventDefault() for å forhindre standard skjemainnsending, henter verdier fra inputfeltene, validerer hver verdi mot kravene, samler feilmeldinger i en array, og viser dem samlet i feil-diven.`,
      },
    },
    {
      id: 'it-1-5-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-4-ex-7',
        number: '5.4.7',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hva er forskjellen mellom `"input"`-hendelsen og `"change"`-hendelsen på et tekstfelt?',
        options: [
          { id: 'a', text: 'Det er ingen forskjell – begge utløses ved hvert tastetrykk', isCorrect: false, feedback: '"change" utløses ikke ved hvert tastetrykk.' },
          { id: 'b', text: '"input" utløses ved hvert tastetrykk, "change" utløses først når feltet mister fokus', isCorrect: true },
          { id: 'c', text: '"change" utløses ved hvert tastetrykk, "input" utløses ved fokustap', isCorrect: false, feedback: 'Det er omvendt – "input" er den som reagerer umiddelbart.' },
          { id: 'd', text: '"input" fungerer bare for tekstfelt, "change" fungerer for alle elementer', isCorrect: false, feedback: 'Begge kan brukes med ulike skjemaelementer, men tidspunktet de utløses er forskjellig.' },
        ],
        solution: '"input"-hendelsen utløses umiddelbart ved hvert tastetrykk (eller annen endring) i et felt, noe som gjør den perfekt for sanntids-tilbakemelding. "change"-hendelsen utløses først når feltet mister fokus (blur) og verdien har endret seg siden det fikk fokus. For avkrysningsbokser og nedtrekksmenyer utløses "change" umiddelbart ved endring.',
      },
    },
    {
      id: 'it-1-5-4-ex-8',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-4-ex-8',
        number: '5.4.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en interaktiv teller med JavaScript. Siden har tre knapper: "+1", "-1" og "Nullstill", og et `<span>` med id="teller" som viser gjeldende verdi (starter på 0). Telleren skal ikke kunne gå under 0. Bruk én hendelseslytter med event delegation på en felles forelder-container.',
        solution: `\`\`\`html
<div id="teller-container">
  <button data-handling="minus">-1</button>
  <span id="teller">0</span>
  <button data-handling="pluss">+1</button>
  <button data-handling="nullstill">Nullstill</button>
</div>
\`\`\`

\`\`\`javascript
let verdi = 0;
const tellerSpan = document.querySelector("#teller");
const container = document.querySelector("#teller-container");

container.addEventListener("click", function (event) {
  const handling = event.target.dataset.handling;

  if (!handling) return; // Klikk utenfor knappene

  if (handling === "pluss") {
    verdi++;
  } else if (handling === "minus" && verdi > 0) {
    verdi--;
  } else if (handling === "nullstill") {
    verdi = 0;
  }

  tellerSpan.textContent = verdi;
});
\`\`\`

Event delegation brukes: én lytter på \`#teller-container\` håndterer alle tre knappene. \`data-handling\`-attributtene identifiserer hvilken knapp som ble klikket. Betingelsen \`verdi > 0\` forhindrer at telleren går under 0.`,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.5: Asynkron programmering og API-er
// ============================================================================

export const CHAPTER_IT_1_5_5: TextbookChapter = {
  id: 'it-1-5-5',
  courseId: 'it-1',
  chapterNumber: '5.5',
  title: 'Asynkron programmering og API-er',
  description: 'Forstå asynkron programmering med callbacks, Promises og async/await, og lær å hente data fra eksterne API-er med fetch().',
  estimatedMinutes: 70,
  prevChapter: 'it-1-5-4',
  nextChapter: 'it-1-6-1',
  competenceGoals: [
    'bruke asynkron programmering for å kommunisere med eksterne tjenester',
    'hente og behandle data fra API-er ved hjelp av JavaScript',
  ],
  keyTerms: [
    { term: 'Asynkron programmering', definition: 'En programmeringsmodell der operasjoner kan starte og fullføre uavhengig av hverandre, uten å blokkere resten av programmet. I JavaScript er nettverksforespørsler, fillesing og timere asynkrone – programmet fortsetter å kjøre mens det venter på at operasjonen fullføres. Dette gjør at nettsiden forblir responsiv selv under tunge operasjoner.' },
    { term: 'API', definition: 'Application Programming Interface er et sett med regler og protokoller som lar programmer kommunisere med hverandre. Web-API-er lar JavaScript-kode hente data fra eksterne tjenester over internett via HTTP-forespørsler. Eksempler er vær-API-er, kartdata, sosiale medier og offentlige datatjenester. API-er returnerer vanligvis data i JSON-format.' },
    { term: 'fetch()', definition: 'En innebygd JavaScript-funksjon for å sende HTTP-forespørsler til servere og API-er. fetch() er asynkron og returnerer et Promise som fullføres når serveren svarer. Den erstatter det eldre XMLHttpRequest-objektet og tilbyr en enklere og mer moderne syntaks. fetch() brukes til å hente data (GET), sende data (POST), oppdatere (PUT) og slette (DELETE).' },
    { term: 'Promise', definition: 'Et JavaScript-objekt som representerer det fremtidige resultatet av en asynkron operasjon. Et Promise kan være i tre tilstander: pending (venter), fulfilled (fullført med suksess) eller rejected (feilet). Promises håndteres med .then() for suksess og .catch() for feil, eller med async/await-syntaksen som gir mer lesbar kode.' },
    { term: 'async/await', definition: 'Syntaktisk sukker i JavaScript som gjør asynkron kode lettere å lese og skrive. Nøkkelordet async foran en funksjon gjør at den returnerer et Promise, og await inne i funksjonen pauser kjøringen til Promiset er fullført. Dette gjør at asynkron kode ser ut som vanlig synkron kode, noe som gjør den enklere å forstå og feilsøke.' },
    { term: 'JSON', definition: 'JavaScript Object Notation er et lettvekts tekstformat for datautveksling. JSON er standarden for data som sendes mellom klienter og servere via API-er. Formatet er basert på JavaScript-objektsyntaks med nøkkel-verdi-par, arrays og primitive verdier. JSON er språkuavhengig og støttes av nesten alle programmeringsspråk.' },
    { term: 'HTTP-metoder', definition: 'Standardiserte handlinger i HTTP-protokollen som beskriver hva klienten ønsker å gjøre. GET henter data, POST sender nye data, PUT oppdaterer eksisterende data, og DELETE sletter data. Disse metodene kalles ofte CRUD-operasjoner (Create, Read, Update, Delete) og er grunnlaget for hvordan klienter kommuniserer med REST-API-er.' },
    { term: 'try/catch', definition: 'En feilhåndteringsmekanisme i JavaScript som lar deg prøve å kjøre kode (try) og håndtere eventuelle feil (catch) uten at programmet krasjer. I asynkron programmering med async/await er try/catch den vanligste måten å håndtere nettverksfeil, serverfeil og andre problemer som kan oppstå ved API-kommunikasjon.' },
  ],
  content: [
    {
      id: 'it-1-5-5-intro',
      type: 'text',
      content: `## Asynkron programmering og API-er

Hittil har JavaScript-koden vår kjørt **synkront** – instruksjon for instruksjon, fra topp til bunn. Men mange oppgaver i moderne webutvikling tar tid: hente data fra en server, laste bilder, vente på brukerinput. Hvis JavaScript måtte vente på at hver slik operasjon ble ferdig før den fortsatte, ville nettsiden fryse og bli ubrukelig.

Løsningen er **asynkron programmering** – en modell der tidkrevende operasjoner startes og kjører i bakgrunnen, mens resten av programmet fortsetter. Når operasjonen er ferdig, varsles programmet og kan behandle resultatet.

I dette kapittelet lærer vi om Promises, async/await og den kanskje viktigste praktiske ferdigheten i moderne JavaScript: å hente data fra **API-er** (Application Programming Interfaces) med \`fetch()\`.`,
    },
    {
      id: 'it-1-5-5-def-asynkron',
      type: 'definition',
      title: 'Asynkron programmering',
      content: `**Asynkron programmering** er en programmeringsmodell der operasjoner kan starte og fullføre uavhengig av programflyten, uten å blokkere kjøringen av annen kode. I JavaScript betyr dette at tidkrevende operasjoner som nettverksforespørsler, fillesing og timere starter i bakgrunnen, mens programmet fortsetter å kjøre. Når den asynkrone operasjonen er ferdig, varsles programmet gjennom en callback-funksjon, et Promise eller async/await.`,
    },
    {
      id: 'it-1-5-5-text-synk-vs-asynk',
      type: 'text',
      title: 'Synkron vs. asynkron kode',
      content: `La oss se forskjellen mellom synkron og asynkron kode:

### Synkron kode (blokkerende)

\`\`\`javascript
console.log("Steg 1");
console.log("Steg 2");  // Venter til steg 1 er ferdig
console.log("Steg 3");  // Venter til steg 2 er ferdig
// Utskrift: Steg 1, Steg 2, Steg 3 (i rekkefølge)
\`\`\`

### Asynkron kode (ikke-blokkerende)

\`\`\`javascript
console.log("Steg 1");

setTimeout(() => {
  console.log("Steg 2 (etter 2 sekunder)");
}, 2000);

console.log("Steg 3");
// Utskrift: Steg 1, Steg 3, Steg 2 (etter 2 sek)
\`\`\`

I det asynkrone eksemplet kjøres «Steg 3» _før_ «Steg 2» fordi \`setTimeout\` er asynkron – den starter en timer i bakgrunnen og lar resten av koden kjøre videre. Når timeren utløper etter 2 sekunder, kjøres callback-funksjonen.

\`setTimeout\` er det enkleste eksemplet på asynkron kode, men i praksis er det **nettverksforespørsler** (henting av data fra API-er) som er den viktigste bruken av asynkron programmering.`,
    },
    {
      id: 'it-1-5-5-def-api',
      type: 'definition',
      title: 'API (Application Programming Interface)',
      content: `Et **API** er et grensesnitt som lar programmer kommunisere med hverandre etter bestemte regler. **Web-API-er** er tjenester som leverer data over internett via HTTP-forespørsler. Når JavaScript henter værdata, kartinformasjon eller nyheter fra en ekstern tjeneste, kommuniserer det med et API. API-er mottar forespørsler og returnerer data, vanligvis i JSON-format. De fleste moderne nettsider og apper bruker API-er for å hente og sende data.`,
    },
    {
      id: 'it-1-5-5-text-fetch',
      type: 'text',
      title: 'Hente data med fetch()',
      content: `\`fetch()\` er den innebygde JavaScript-funksjonen for å sende HTTP-forespørsler. Den er asynkron og returnerer et **Promise**:

\`\`\`javascript
fetch("https://api.eksempel.no/data")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Feil:", error);
  });
\`\`\`

La oss bryte ned hva som skjer:

1. \`fetch(url)\` sender en HTTP GET-forespørsel til URL-en
2. \`.then(response => response.json())\` tar svaret fra serveren og konverterer det fra JSON-tekst til et JavaScript-objekt
3. \`.then(data => { ... })\` lar deg bruke de konverterte dataene
4. \`.catch(error => { ... })\` fanger opp feil (f.eks. nettverksproblemer)

### Praktisk eksempel med et ekte API

\`\`\`javascript
// Hent et tilfeldig vitseriat fra et åpent API
fetch("https://official-joke-api.appspot.com/random_joke")
  .then(response => response.json())
  .then(joke => {
    console.log(joke.setup);
    console.log(joke.punchline);
  })
  .catch(error => {
    console.error("Kunne ikke hente vits:", error);
  });
\`\`\`

Denne koden sender en forespørsel til et API som returnerer tilfeldige vitser i JSON-format, konverterer svaret til et JavaScript-objekt, og skriver ut oppsett og poeng.`,
    },
    {
      id: 'it-1-5-5-def-promise',
      type: 'definition',
      title: 'Promise',
      content: `Et **Promise** er et JavaScript-objekt som representerer det fremtidige resultatet av en asynkron operasjon. Navnet «promise» (løfte) kommer av at objektet gir et løfte om at det vil levere et resultat senere. Et Promise kan ha tre tilstander: **pending** (operasjonen er i gang), **fulfilled** (operasjonen lyktes og har et resultat) eller **rejected** (operasjonen feilet). Du håndterer utfallet med \`.then()\` for suksess og \`.catch()\` for feil.`,
    },
    {
      id: 'it-1-5-5-text-asyncawait',
      type: 'text',
      title: 'async/await – enklere asynkron kode',
      content: `Promise-kjeder med \`.then()\` kan bli vanskelige å lese. Moderne JavaScript tilbyr **async/await** som gjør asynkron kode mye enklere:

\`\`\`javascript
async function hentData() {
  try {
    const response = await fetch("https://api.eksempel.no/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Feil:", error);
  }
}

hentData();
\`\`\`

Nøkkelord:
- **\`async\`** foran funksjonen markerer den som asynkron
- **\`await\`** pauser funksjonen til Promiset er fullført (kan bare brukes inne i \`async\`-funksjoner)
- **\`try/catch\`** håndterer feil på en oversiktlig måte

### Sammenligning: .then() vs. async/await

\`\`\`javascript
// Med .then() (eldre stil)
fetch("https://api.eksempel.no/brukere")
  .then(response => response.json())
  .then(brukere => {
    console.log(brukere);
  })
  .catch(error => {
    console.error(error);
  });

// Med async/await (moderne, anbefalt)
async function hentBrukere() {
  try {
    const response = await fetch("https://api.eksempel.no/brukere");
    const brukere = await response.json();
    console.log(brukere);
  } catch (error) {
    console.error(error);
  }
}
\`\`\`

Begge gjør nøyaktig det samme, men async/await-versjonen er lettere å lese fordi den ser ut som vanlig synkron kode.`,
    },
    {
      id: 'it-1-5-5-text-feilhandtering',
      type: 'text',
      title: 'Feilhåndtering i asynkron kode',
      content: `Nettverksforespørsler kan feile av mange grunner: ingen internettforbindelse, serveren er nede, feil URL, API-nøkkel er ugyldig, osv. God feilhåndtering er derfor avgjørende.

### Sjekke HTTP-statuskoden

\`fetch()\` kaster bare en feil ved nettverksproblemer – den anser HTTP-feil som 404 og 500 som vellykkede forespørsler. Du må sjekke statuskoden selv:

\`\`\`javascript
async function hentData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("HTTP-feil: " + response.status);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Noe gikk galt:", error.message);
    return null;
  }
}
\`\`\`

\`response.ok\` er \`true\` for statuskoder 200-299 og \`false\` for andre. Ved å kaste en feil med \`throw new Error()\` sikrer vi at feil fanges av \`catch\`-blokken.

### Vise feilmeldinger til brukeren

\`\`\`javascript
async function lastInnVarsel() {
  const statusDiv = document.querySelector("#status");
  statusDiv.textContent = "Laster data...";

  try {
    const response = await fetch("https://api.met.no/weatherapi");

    if (!response.ok) {
      throw new Error("Kunne ikke hente værdata.");
    }

    const data = await response.json();
    statusDiv.textContent = "";
    visVardata(data);

  } catch (error) {
    statusDiv.textContent = "Feil: " + error.message;
    statusDiv.style.color = "red";
  }
}
\`\`\``,
    },
    {
      id: 'it-1-5-5-text-post',
      type: 'text',
      title: 'Sende data med POST-forespørsler',
      content: `Hittil har vi bare hentet data (GET). For å **sende** data til en server bruker vi POST-forespørsler:

\`\`\`javascript
async function sendKommentar(tekst) {
  try {
    const response = await fetch("https://api.eksempel.no/kommentarer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        innhold: tekst,
        tidspunkt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error("Kunne ikke sende kommentar.");
    }

    const resultat = await response.json();
    console.log("Kommentar lagret:", resultat);

  } catch (error) {
    console.error("Feil:", error.message);
  }
}
\`\`\`

\`fetch()\` tar et valgfritt options-objekt som andre argument:
- **\`method\`**: HTTP-metoden (POST, PUT, DELETE osv.)
- **\`headers\`**: Metainformasjon, her spesifiserer vi at vi sender JSON
- **\`body\`**: Selve dataene, konvertert til JSON-streng med \`JSON.stringify()\``,
    },
    {
      id: 'it-1-5-5-example-komplett',
      type: 'example',
      title: 'Komplett eksempel: Vise data fra et API i DOM-en',
      content: `Her er et komplett eksempel som henter brukerdata fra et åpent API og viser det på nettsiden:

**HTML:**
\`\`\`html
<h2>Brukeroversikt</h2>
<button id="lastInn">Last inn brukere</button>
<div id="status"></div>
<div id="brukerliste"></div>
\`\`\`

**JavaScript:**
\`\`\`javascript
const knapp = document.querySelector("#lastInn");
const statusDiv = document.querySelector("#status");
const listeDiv = document.querySelector("#brukerliste");

knapp.addEventListener("click", async function () {
  statusDiv.textContent = "Laster...";
  listeDiv.innerHTML = "";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Serverfeil: " + response.status);
    }

    const brukere = await response.json();
    statusDiv.textContent = brukere.length + " brukere funnet:";

    brukere.forEach(bruker => {
      const kort = document.createElement("div");
      kort.classList.add("bruker-kort");
      kort.innerHTML = \`
        <h3>\${bruker.name}</h3>
        <p>E-post: \${bruker.email}</p>
        <p>By: \${bruker.address.city}</p>
      \`;
      listeDiv.appendChild(kort);
    });

  } catch (error) {
    statusDiv.textContent = "Feil: " + error.message;
    statusDiv.style.color = "red";
  }
});
\`\`\`

Dette eksempelet kombinerer alt vi har lært: hendelseshåndtering (klikk-lytter), asynkron programmering (async/await med fetch), feilhåndtering (try/catch), JSON-parsing og DOM-manipulering (createElement, innerHTML, appendChild).`,
    },
    {
      id: 'it-1-5-5-note-cors',
      type: 'note',
      title: 'CORS – sikkerhet ved API-kall',
      content: `Når du henter data fra et annet domene enn ditt eget, gjelder **CORS** (Cross-Origin Resource Sharing)-regler. Nettleseren blokkerer forespørsler til andre domener med mindre serveren eksplisitt tillater det.

Hvis du får en CORS-feil i konsollen, betyr det at API-et ikke tillater forespørsler fra din nettside. Løsninger:
- Bruk et API som støtter CORS (de fleste åpne API-er gjør det)
- Bruk en proxy-server som videresender forespørslene
- Konfigurer serveren til å sende riktige CORS-headere

CORS er en sikkerhetsfunksjon som beskytter brukere mot at ondsinnede nettsider sender forespørsler på deres vegne.`,
    },
    {
      id: 'it-1-5-5-tip-api',
      type: 'tip',
      title: 'Gratis API-er å øve med',
      content: `Her er noen gratis API-er du kan bruke for å øve:

- **JSONPlaceholder** (\`jsonplaceholder.typicode.com\`): Falske data for testing (brukere, innlegg, kommentarer)
- **Open-Meteo** (\`api.open-meteo.com\`): Værdata for hele verden
- **Rest Countries** (\`restcountries.com/v3.1\`): Informasjon om verdens land
- **PokeAPI** (\`pokeapi.co/api/v2\`): Data om Pokémon
- **Dog API** (\`dog.ceo/api\`): Tilfeldige hundebilder

Alle disse API-ene er gratis, krever ingen autentisering og støtter CORS.`,
    },
    {
      id: 'it-1-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-5-ex-1',
        number: '5.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr det at JavaScript er asynkront?',
        options: [
          { id: 'a', text: 'Koden kjører raskere enn i andre språk', isCorrect: false, feedback: 'Asynkron betyr ikke raskere, men at programmet ikke blokkerer under ventetid.' },
          { id: 'b', text: 'Tidkrevende operasjoner kan kjøre i bakgrunnen uten å blokkere resten av programmet', isCorrect: true },
          { id: 'c', text: 'Koden kjører i tilfeldig rekkefølge', isCorrect: false, feedback: 'Asynkron kode kjører ikke tilfeldig – den starter operasjoner og håndterer resultater når de er klare.' },
          { id: 'd', text: 'JavaScript kan kjøre flere programmer samtidig', isCorrect: false, feedback: 'JavaScript er single-threaded. Asynkron betyr at det ikke blokkerer mens det venter.' },
        ],
        solution: 'Asynkron programmering betyr at tidkrevende operasjoner (som nettverksforespørsler) kan starte og fullføre i bakgrunnen uten å blokkere resten av koden. Programmet fortsetter å kjøre og blir varslet når operasjonen er ferdig, slik at nettsiden forblir responsiv for brukeren.',
      },
    },
    {
      id: 'it-1-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-5-ex-2',
        number: '5.5.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er et API i websammenheng?',
        options: [
          { id: 'a', text: 'Et programmeringsspråk for webutvikling', isCorrect: false, feedback: 'API er ikke et programmeringsspråk, men et grensesnitt for datautveksling.' },
          { id: 'b', text: 'Et grensesnitt som lar programmer hente og sende data til eksterne tjenester', isCorrect: true },
          { id: 'c', text: 'En type database for lagring av nettsider', isCorrect: false, feedback: 'API-er er ikke databaser, men et grensesnitt for å kommunisere med tjenester.' },
          { id: 'd', text: 'En nettleser-utvidelse for utviklere', isCorrect: false, feedback: 'API-er er tjenester tilgjengelig over nett, ikke nettleser-utvidelser.' },
        ],
        solution: 'Et API (Application Programming Interface) er et grensesnitt som lar programmer kommunisere med hverandre. Web-API-er leverer data over internett via HTTP-forespørsler. JavaScript kan bruke fetch() til å hente data fra et API (f.eks. værdata eller brukerinformasjon) og vise det på nettsiden.',
      },
    },
    {
      id: 'it-1-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-5-ex-3',
        number: '5.5.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva skrives ut av denne koden?\n\n```javascript\nconsole.log("A");\nsetTimeout(() => console.log("B"), 0);\nconsole.log("C");\n```',
        options: [
          { id: 'a', text: 'A, B, C', isCorrect: false, feedback: 'Selv med 0 millisekunder forsinkelse er setTimeout asynkron.' },
          { id: 'b', text: 'A, C, B', isCorrect: true },
          { id: 'c', text: 'B, A, C', isCorrect: false, feedback: 'setTimeout kjører callback-funksjonen etter at den synkrone koden er ferdig.' },
          { id: 'd', text: 'C, A, B', isCorrect: false, feedback: 'Synkron kode kjører i rekkefølge, så A kommer før C.' },
        ],
        solution: 'Selv med 0 millisekunder forsinkelse er setTimeout asynkron – callback-funksjonen legges i en kø og kjøres først etter at all synkron kode er ferdig. Rekkefølgen er: "A" (synkron), "C" (synkron), og deretter "B" (asynkron callback). Dette illustrerer JavaScripts event loop.',
      },
    },
    {
      id: 'it-1-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-5-ex-4',
        number: '5.5.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva gjør `response.json()` i en fetch()-forespørsel?',
        options: [
          { id: 'a', text: 'Den sender data til serveren i JSON-format', isCorrect: false, feedback: 'response.json() leser svaret fra serveren, den sender ikke data.' },
          { id: 'b', text: 'Den konverterer serverens svar fra JSON-tekst til et JavaScript-objekt', isCorrect: true },
          { id: 'c', text: 'Den validerer at svaret er gyldig JSON', isCorrect: false, feedback: 'response.json() konverterer – den vil kaste en feil hvis svaret ikke er gyldig JSON, men det er ikke hovedformålet.' },
          { id: 'd', text: 'Den komprimerer dataene for raskere overføring', isCorrect: false, feedback: 'Komprimering håndteres av HTTP-protokollen, ikke av response.json().' },
        ],
        solution: 'response.json() er en asynkron metode som leser serverens svar-kropp (body) og parser den fra JSON-tekst til et JavaScript-objekt eller array. Metoden returnerer et Promise, så du må bruke await eller .then() for å få resultatet. Etter konverteringen kan du bruke dataene som vanlige JavaScript-objekter.',
      },
    },
    {
      id: 'it-1-5-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-5-ex-5',
        number: '5.5.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en asynkron funksjon `hentLand(navn)` som bruker fetch() og async/await til å hente informasjon om et land fra API-et `https://restcountries.com/v3.1/name/{navn}`. Funksjonen skal skrive ut landets offisielle navn og befolkningstall til konsollen. Inkluder feilhåndtering med try/catch.',
        solution: `\`\`\`javascript
async function hentLand(navn) {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/name/" + navn
    );

    if (!response.ok) {
      throw new Error("Fant ikke landet: " + navn);
    }

    const data = await response.json();
    const land = data[0];

    console.log("Land:", land.name.official);
    console.log("Befolkning:", land.population.toLocaleString());

  } catch (error) {
    console.error("Feil:", error.message);
  }
}

hentLand("norway");
// Land: Kingdom of Norway
// Befolkning: 5,379,475
\`\`\`

Funksjonen bruker async/await for lesbar asynkron kode. fetch() sender en GET-forespørsel til API-et. Vi sjekker response.ok for å fange HTTP-feil, parser JSON-svaret, og henter ut relevant data. try/catch sikrer at feil håndteres gracefully.`,
      },
    },
    {
      id: 'it-1-5-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-5-ex-6',
        number: '5.5.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en komplett nettside-funksjon som henter en liste med brukere fra `https://jsonplaceholder.typicode.com/users` og viser dem som kort i en `<div id="brukere">`. Hvert kort skal vise brukerens navn, e-post og firma. Vis en "Laster..."-melding mens data hentes, og en feilmelding hvis noe går galt. Bruk async/await, DOM-manipulering og feilhåndtering.',
        solution: `\`\`\`javascript
async function visBrukere() {
  const container = document.querySelector("#brukere");
  container.textContent = "Laster...";

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error("Serverfeil: " + response.status);
    }

    const brukere = await response.json();
    container.innerHTML = "";

    brukere.forEach(bruker => {
      const kort = document.createElement("div");
      kort.classList.add("bruker-kort");

      const navn = document.createElement("h3");
      navn.textContent = bruker.name;

      const epost = document.createElement("p");
      epost.textContent = "E-post: " + bruker.email;

      const firma = document.createElement("p");
      firma.textContent = "Firma: " + bruker.company.name;

      kort.appendChild(navn);
      kort.appendChild(epost);
      kort.appendChild(firma);
      container.appendChild(kort);
    });

  } catch (error) {
    container.textContent = "Feil: " + error.message;
    container.style.color = "red";
  }
}

visBrukere();
\`\`\`

Funksjonen kombinerer async/await (for asynkron datahenting), try/catch (for feilhåndtering), fetch og response.json() (for API-kommunikasjon), og createElement/appendChild (for DOM-manipulering). Brukeren ser "Laster..." mens data hentes, og en rød feilmelding hvis noe går galt.`,
      },
    },
    {
      id: 'it-1-5-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-5-ex-7',
        number: '5.5.7',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hvorfor kaster ikke `fetch()` en feil for HTTP-statuskode 404 (Ikke funnet)?',
        options: [
          { id: 'a', text: 'Fordi 404 ikke er en ekte feil i HTTP-protokollen', isCorrect: false, feedback: '404 er en feilkode, men fetch() skiller mellom nettverksfeil og HTTP-feil.' },
          { id: 'b', text: 'Fordi fetch() bare kaster feil ved nettverksproblemer, ikke ved HTTP-feilkoder', isCorrect: true },
          { id: 'c', text: 'Fordi det er en bug i fetch()-implementasjonen', isCorrect: false, feedback: 'Dette er bevisst design, ikke en bug.' },
          { id: 'd', text: 'Fordi 404-svar ikke inneholder noen data', isCorrect: false, feedback: '404-svar kan inneholde data (f.eks. en feilside), og fetch() leverer svaret uansett statuskode.' },
        ],
        solution: 'fetch() anser en forespørsel som vellykket så lenge serveren svarer – uavhengig av statuskoden. En 404-respons betyr at serveren svarte, bare at ressursen ikke finnes. fetch() kaster bare feil ved nettverksproblemer (f.eks. ingen internett, DNS-feil, server nede). Derfor må du sjekke response.ok eller response.status manuelt for å oppdage HTTP-feil.',
      },
    },
    {
      id: 'it-1-5-5-ex-8',
      type: 'exercise',
      exercise: {
        id: 'it-1-5-5-ex-8',
        number: '5.5.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en async funksjon `sendTilbakemelding(navn, melding)` som sender en POST-forespørsel med JSON-data til `https://jsonplaceholder.typicode.com/posts`. Dataene skal inneholde `title` (navnet), `body` (meldingen) og `userId` satt til 1. Funksjonen skal returnere det opprettede objektet fra serveren, eller null ved feil. Inkluder korrekte headers og feilhåndtering.',
        solution: `\`\`\`javascript
async function sendTilbakemelding(navn, melding) {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: navn,
          body: melding,
          userId: 1,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Feil ved innsending: " + response.status);
    }

    const resultat = await response.json();
    console.log("Lagret med ID:", resultat.id);
    return resultat;

  } catch (error) {
    console.error("Feil:", error.message);
    return null;
  }
}

// Bruk:
sendTilbakemelding("Ola Nordmann", "Flott nettside!").then(resultat => {
  if (resultat) {
    console.log("Tilbakemelding sendt:", resultat);
  }
});
\`\`\`

POST-forespørselen krever et options-objekt med: method satt til "POST", headers med Content-Type for å fortelle serveren at vi sender JSON, og body med dataene konvertert til JSON-streng med JSON.stringify(). Feilhåndtering returnerer null slik at kallende kode kan sjekke om innsendingen lyktes.`,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const IT_1_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_IT_1_5_1, CHAPTER_IT_1_5_2, CHAPTER_IT_1_5_3, CHAPTER_IT_1_5_4, CHAPTER_IT_1_5_5,
];
