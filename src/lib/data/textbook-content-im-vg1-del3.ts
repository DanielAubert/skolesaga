/* eslint-disable */
// @ts-nocheck
/**
 * Informasjonsteknologi og medieproduksjon VG1 - Del 3: Webutvikling
 *
 * Kapittel 3.1-3.7: Webutvikling
 * Dekker LK20 kompetansemål for nettkommunikasjon, HTML, CSS, JavaScript,
 * tilgjengelighet og publisering
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1: Hvordan fungerer nettet?
// ============================================================================

export const CHAPTER_IM_VG1_3_1: TextbookChapter = {
  id: 'im-vg1-3-1',
  courseId: 'im-vg1',
  chapterNumber: '3.1',
  title: 'Hvordan fungerer nettet?',
  description: 'Forstå grunnleggende webteknologi: HTTP-protokollen, URL-er, nettlesere og klient-tjener-modellen som driver internett.',
  estimatedMinutes: 45,
  prevChapter: 'im-vg1-2-8',
  nextChapter: 'im-vg1-3-2',
  competenceGoals: [
    'gjøre rede for hvordan internett og nettkommunikasjon fungerer',
    'forklare klient-tjener-modellen og HTTP-protokollen',
    'beskrive oppbyggingen av URL-er og domenenavn',
  ],
  keyTerms: [
    { term: 'HTTP', definition: 'HyperText Transfer Protocol – protokollen som nettlesere og servere bruker for å kommunisere og utveksle nettsider.' },
    { term: 'URL', definition: 'Uniform Resource Locator – en unik adresse som identifiserer en ressurs på internett, f.eks. https://www.nrk.no/nyheter.' },
    { term: 'Klient', definition: 'Et program (vanligvis en nettleser) som sender forespørsler til en tjener og viser svaret til brukeren.' },
    { term: 'Tjener (server)', definition: 'En datamaskin som mottar forespørsler fra klienter, behandler dem, og sender tilbake svar (f.eks. HTML-filer).' },
    { term: 'DNS', definition: 'Domain Name System – systemet som oversetter menneskelesbare domenenavn (f.eks. nrk.no) til IP-adresser.' },
  ],
  content: [
    {
      id: 'im-3-1-intro',
      type: 'text',
      content: `## Hvordan fungerer nettet?

Hver gang du åpner en nettside, skjer det en rekke hendelser i bakgrunnen. Nettleseren din sender en forespørsel til en tjener (server) som svarer med innholdet du ser på skjermen. Denne kommunikasjonen skjer via protokoller – standardiserte regler for hvordan data utveksles.

I dette kapittelet skal vi forstå de grunnleggende mekanismene som driver nettet: klient-tjener-modellen, HTTP-protokollen, URL-er og DNS.`,
    },
    {
      id: 'im-3-1-def-1',
      type: 'definition',
      title: 'Klient-tjener-modellen',
      content: `**Klient-tjener-modellen** er en arkitektur der en **klient** (nettleseren din) sender forespørsler til en **tjener** (en datamaskin som lagrer nettsider). Tjeneren behandler forespørselen og sender tilbake et svar. Denne modellen er grunnlaget for all nettkommunikasjon.`,
    },
    {
      id: 'im-3-1-text-1',
      type: 'text',
      content: `### HTTP-protokollen

**HTTP** (HyperText Transfer Protocol) er reglene som styrer kommunikasjonen mellom nettlesere og tjenere. Når du besøker en nettside, skjer følgende:

1. Nettleseren sender en **HTTP-forespørsel** (request) til tjeneren
2. Tjeneren behandler forespørselen
3. Tjeneren sender tilbake et **HTTP-svar** (response) med innholdet

De vanligste HTTP-metodene er:
- **GET** – hente en ressurs (f.eks. laste en nettside)
- **POST** – sende data til tjeneren (f.eks. skjemadata)

HTTP-svaret inneholder en **statuskode** som forteller om forespørselen lyktes:
- **200 OK** – alt gikk bra
- **404 Not Found** – siden finnes ikke
- **500 Internal Server Error** – noe gikk galt på tjeneren

**HTTPS** er den sikre versjonen av HTTP, der dataene krypteres slik at ingen kan lese dem underveis.`,
    },
    {
      id: 'im-3-1-def-2',
      type: 'definition',
      title: 'URL (Uniform Resource Locator)',
      content: `En **URL** er adressen til en ressurs på nettet. Den er bygd opp slik:

\`\`\`
https://www.eksempel.no:443/nyheter/artikkel?id=42#kommentarer
└─┬──┘   └──────┬──────┘└┬┘└──────┬──────┘└──┬──┘└────┬────┘
protokoll    domene     port     sti       søk     fragment
\`\`\`

- **Protokoll**: \`https://\` – kommunikasjonsreglene
- **Domene**: \`www.eksempel.no\` – tjenerens adresse
- **Port**: \`:443\` – inngang på tjeneren (valgfritt)
- **Sti**: \`/nyheter/artikkel\` – plasseringen til ressursen
- **Søk**: \`?id=42\` – tilleggsparametere
- **Fragment**: \`#kommentarer\` – peker til en del av siden`,
    },
    {
      id: 'im-3-1-text-2',
      type: 'text',
      content: `### DNS – internettets telefonkatalog

**DNS** (Domain Name System) oversetter domenenavn til IP-adresser. Datamaskiner kommuniserer med IP-adresser (f.eks. 192.168.1.1), men mennesker husker navn bedre. Når du skriver \`nrk.no\` i nettleseren, spør datamaskinen en DNS-tjener om IP-adressen til \`nrk.no\`.

### Nettleseren som klient

Nettleseren (Chrome, Firefox, Safari, Edge) er den vanligste klienten. Den gjør flere jobber:

1. **Sender HTTP-forespørsler** til tjenere
2. **Mottar HTML, CSS og JavaScript** som svar
3. **Tolker og viser** innholdet som en visuell nettside
4. **Kjører JavaScript** for å gjøre siden interaktiv

Utviklerverktøyene i nettleseren (åpnes med F12) lar deg se HTTP-forespørsler, HTML-koden og feilmeldinger.`,
    },
    {
      id: 'im-3-1-example-1',
      type: 'example',
      title: 'Hva skjer når du besøker en nettside?',
      content: `**Eksempel: Besøke vg.no**

1. Du skriver \`vg.no\` i adressefeltet
2. Nettleseren spør DNS: «Hva er IP-adressen til vg.no?»
3. DNS svarer: «195.88.55.16»
4. Nettleseren sender en HTTP GET-forespørsel til 195.88.55.16
5. Tjeneren svarer med HTML-kode (statuskode 200 OK)
6. Nettleseren laster CSS (styling) og JavaScript (interaktivitet)
7. Nettleseren tolker alt og viser den ferdige nettsiden

Alt dette skjer på brøkdelen av et sekund!`,
    },
    {
      id: 'im-3-1-summary',
      type: 'text',
      content: `## Oppsummering

- **Klient-tjener-modellen** er grunnlaget for nettkommunikasjon: klienten sender forespørsler, tjeneren svarer
- **HTTP** er protokollen for kommunikasjon mellom nettleser og tjener, med metoder som GET og POST
- **URL-er** er unike adresser som identifiserer ressurser på nettet
- **DNS** oversetter domenenavn til IP-adresser
- **Nettleseren** tolker HTML, CSS og JavaScript for å vise nettsider
- **HTTPS** krypterer dataene for sikker kommunikasjon`,
    },
  ],
  exercises: [
    {
      id: 'im-3-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er HTTP?',
      options: [
        { id: 'a', text: 'Et programmeringsspråk for nettsider', isCorrect: false, feedback: 'HTTP er en protokoll, ikke et programmeringsspråk.' },
        { id: 'b', text: 'En protokoll for kommunikasjon mellom nettleser og tjener', isCorrect: true },
        { id: 'c', text: 'En type nettleser', isCorrect: false, feedback: 'HTTP er ikke en nettleser, men nettlesere bruker HTTP.' },
        { id: 'd', text: 'Et operativsystem', isCorrect: false, feedback: 'HTTP er en kommunikasjonsprotokoll.' },
      ],
      solution: 'HTTP (HyperText Transfer Protocol) er protokollen som definerer reglene for kommunikasjon mellom nettlesere (klienter) og tjenere (servere) på nettet.',
    },
    {
      id: 'im-3-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr HTTP-statuskoden 404?',
      options: [
        { id: 'a', text: 'Forespørselen var vellykket', isCorrect: false, feedback: 'Det er statuskode 200.' },
        { id: 'b', text: 'Tjeneren har en intern feil', isCorrect: false, feedback: 'Det er statuskode 500.' },
        { id: 'c', text: 'Ressursen ble ikke funnet', isCorrect: true },
        { id: 'd', text: 'Brukeren er ikke autorisert', isCorrect: false, feedback: 'Det er statuskode 401 eller 403.' },
      ],
      solution: 'Statuskode 404 betyr "Not Found" – tjeneren fant ikke ressursen som ble forespurt. Dette kan skyldes en feil i URL-en eller at siden er slettet.',
    },
    {
      id: 'im-3-1-ex-3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar med egne ord hva som skjer fra du skriver en URL i nettleseren til nettsiden vises. Nevn minst fire steg.',
      solution: 'Et fullstendig svar bør nevne: 1) Nettleseren sender domenenavnet til DNS for oppslag av IP-adresse. 2) Nettleseren sender en HTTP GET-forespørsel til tjenerens IP-adresse. 3) Tjeneren behandler forespørselen og sender tilbake HTML, CSS og JavaScript. 4) Nettleseren tolker HTML-koden, bruker CSS for styling, og kjører JavaScript for interaktivitet. 5) Den ferdige nettsiden vises på skjermen.',
    },
    {
      id: 'im-3-1-ex-4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Analyser følgende URL og beskriv hver del:\n\n`https://www.skolesaga.no:443/laerebok/im-vg1?kapittel=3#oppgaver`',
      solution: '- **Protokoll**: `https://` – sikker kommunikasjon\n- **Domene**: `www.skolesaga.no` – tjenerens adresse\n- **Port**: `:443` – standardporten for HTTPS\n- **Sti**: `/laerebok/im-vg1` – plasseringen til ressursen\n- **Søkeparameter**: `?kapittel=3` – angir at det er kapittel 3\n- **Fragment**: `#oppgaver` – peker til oppgave-seksjonen på siden',
    },
  ],
};

// ============================================================================
// Kapittel 3.2: HTML: Struktur og semantikk
// ============================================================================

export const CHAPTER_IM_VG1_3_2: TextbookChapter = {
  id: 'im-vg1-3-2',
  courseId: 'im-vg1',
  chapterNumber: '3.2',
  title: 'HTML: Struktur og semantikk',
  description: 'Lær å bygge nettsider med HTML – elementer, attributter, semantisk markering, lister, lenker og skjemaer.',
  estimatedMinutes: 60,
  prevChapter: 'im-vg1-3-1',
  nextChapter: 'im-vg1-3-3',
  competenceGoals: [
    'bruke HTML til å strukturere innhold på nettsider',
    'velge riktige semantiske elementer for ulike typer innhold',
    'lage skjemaer, lister og lenker i HTML',
  ],
  keyTerms: [
    { term: 'HTML', definition: 'HyperText Markup Language – markeringsspråket som beskriver strukturen og innholdet på en nettside.' },
    { term: 'Element', definition: 'En byggeblokk i HTML bestående av en åpningstag, innhold og en lukkingstag, f.eks. <p>Tekst</p>.' },
    { term: 'Attributt', definition: 'Tilleggsinformasjon på et HTML-element, f.eks. href i <a href="url">Lenke</a>.' },
    { term: 'Semantisk HTML', definition: 'Bruk av HTML-elementer som beskriver innholdets betydning (f.eks. <nav>, <article>, <header>) i stedet for generiske elementer.' },
    { term: 'DOM', definition: 'Document Object Model – nettleserens trestruktur som representerer HTML-dokumentet og lar JavaScript manipulere innholdet.' },
    { term: 'Skjema (form)', definition: 'Et HTML-element (<form>) som lar brukere sende inn data, f.eks. registreringsskjemaer og søkefelt.' },
  ],
  content: [
    {
      id: 'im-3-2-intro',
      type: 'text',
      content: `## HTML: Struktur og semantikk

HTML er grunnmuren i alle nettsider. Det er et **markeringsspråk** (ikke et programmeringsspråk) som beskriver **strukturen** og **innholdet** på en nettside. Nettleseren leser HTML-koden og viser innholdet visuelt.

I dette kapittelet lærer du å skrive HTML, bruke semantiske elementer, og lage interaktive skjemaer.`,
    },
    {
      id: 'im-3-2-def-1',
      type: 'definition',
      title: 'HTML-element',
      content: `Et **HTML-element** består av tre deler:

\`\`\`html
<p class="intro">Dette er et avsnitt.</p>
└┬┘ └────┬────┘  └───────┬────────┘ └┬┘
tag   attributt       innhold     lukkingstag
\`\`\`

Noen elementer er **selvlukkende** og har ikke innhold, f.eks. \`<br>\` (linjeskift) og \`<img>\` (bilde).`,
    },
    {
      id: 'im-3-2-text-1',
      type: 'text',
      content: `### Grunnstrukturen i et HTML-dokument

Alle HTML-dokumenter følger den samme grunnstrukturen:

\`\`\`html
<!DOCTYPE html>
<html lang="nb">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Min nettside</title>
</head>
<body>
    <h1>Velkommen!</h1>
    <p>Dette er min første nettside.</p>
</body>
</html>
\`\`\`

- \`<!DOCTYPE html>\` – forteller nettleseren at dette er HTML5
- \`<html>\` – roten av dokumentet, \`lang="nb"\` angir språket
- \`<head>\` – metadata som ikke vises på siden (tittel, tegnkoding)
- \`<body>\` – alt synlig innhold på siden

### Vanlige HTML-elementer

| Element | Beskrivelse | Eksempel |
|---------|------------|----------|
| \`<h1>\` til \`<h6>\` | Overskrifter (h1 er størst) | \`<h1>Hovedtittel</h1>\` |
| \`<p>\` | Avsnitt | \`<p>Brødtekst her.</p>\` |
| \`<a>\` | Lenke | \`<a href="url">Klikk her</a>\` |
| \`<img>\` | Bilde | \`<img src="bilde.jpg" alt="Beskrivelse">\` |
| \`<ul>\`, \`<ol>\` | Uordnet/ordnet liste | Se eksempel nedenfor |
| \`<div>\` | Generisk beholder | For gruppering |
| \`<span>\` | Inline beholder | For tekstmarkering |`,
    },
    {
      id: 'im-3-2-text-2',
      type: 'text',
      content: `### Semantisk HTML

**Semantiske elementer** beskriver innholdets **betydning**, ikke bare utseende. Dette er viktig for tilgjengelighet og søkemotorer.

\`\`\`html
<!-- Dårlig: bruker bare div -->
<div id="header">...</div>
<div id="nav">...</div>
<div id="content">...</div>

<!-- Bra: bruker semantiske elementer -->
<header>...</header>
<nav>...</nav>
<main>
    <article>
        <section>...</section>
    </article>
</main>
<footer>...</footer>
\`\`\`

Viktige semantiske elementer:
- \`<header>\` – topptekst for siden eller en seksjon
- \`<nav>\` – navigasjonslenker
- \`<main>\` – hovedinnholdet på siden (kun én per side)
- \`<article>\` – selvstendig innhold (bloggpost, nyhet)
- \`<section>\` – tematisk gruppering av innhold
- \`<aside>\` – sideinnhold (sidebarer)
- \`<footer>\` – bunntekst`,
    },
    {
      id: 'im-3-2-text-3',
      type: 'text',
      content: `### Lister, lenker og skjemaer

**Uordnet liste** (punktliste):
\`\`\`html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
\`\`\`

**Ordnet liste** (nummerert):
\`\`\`html
<ol>
    <li>Åpne editoren</li>
    <li>Skriv kode</li>
    <li>Lagre filen</li>
</ol>
\`\`\`

**Lenker** kobler sider sammen:
\`\`\`html
<a href="https://www.nrk.no">Besøk NRK</a>
<a href="om-oss.html">Om oss</a>
<a href="#kontakt">Gå til kontakt</a>
\`\`\`

**Skjemaer** lar brukere sende inn data:
\`\`\`html
<form action="/send" method="post">
    <label for="navn">Navn:</label>
    <input type="text" id="navn" name="navn" required>

    <label for="epost">E-post:</label>
    <input type="email" id="epost" name="epost" required>

    <label for="melding">Melding:</label>
    <textarea id="melding" name="melding" rows="4"></textarea>

    <button type="submit">Send inn</button>
</form>
\`\`\`

Viktige input-typer: \`text\`, \`email\`, \`password\`, \`number\`, \`date\`, \`checkbox\`, \`radio\`.`,
    },
    {
      id: 'im-3-2-example-1',
      type: 'example',
      title: 'En komplett semantisk nettside',
      content: `**Eksempel: Personlig porteføljeside**

\`\`\`html
<!DOCTYPE html>
<html lang="nb">
<head>
    <meta charset="UTF-8">
    <title>Kari Nordmann – Portefølje</title>
</head>
<body>
    <header>
        <h1>Kari Nordmann</h1>
        <nav>
            <ul>
                <li><a href="#om">Om meg</a></li>
                <li><a href="#prosjekter">Prosjekter</a></li>
                <li><a href="#kontakt">Kontakt</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="om">
            <h2>Om meg</h2>
            <p>Jeg er elev på VG1 IM og interessert i webutvikling.</p>
        </section>

        <section id="prosjekter">
            <h2>Mine prosjekter</h2>
            <article>
                <h3>Prosjekt 1: Nettside for skoleband</h3>
                <p>En responsiv nettside laget med HTML og CSS.</p>
            </article>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 Kari Nordmann</p>
    </footer>
</body>
</html>
\`\`\`

Legg merke til bruken av semantiske elementer: \`<header>\`, \`<nav>\`, \`<main>\`, \`<section>\`, \`<article>\` og \`<footer>\`.`,
    },
    {
      id: 'im-3-2-summary',
      type: 'text',
      content: `## Oppsummering

- **HTML** er markeringsspråket som beskriver strukturen på nettsider
- Et **element** består av åpningstag, innhold og lukkingstag
- **Attributter** gir tilleggsinformasjon til elementer
- **Semantiske elementer** (\`<header>\`, \`<nav>\`, \`<main>\`, \`<article>\`) beskriver innholdets betydning
- **Lister** lages med \`<ul>\`/\`<ol>\` og \`<li>\`
- **Lenker** lages med \`<a href="...">\`
- **Skjemaer** bruker \`<form>\`, \`<input>\`, \`<label>\` og \`<button>\``,
    },
  ],
  exercises: [
    {
      id: 'im-3-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er riktig HTML for en hovedoverskrift?',
      options: [
        { id: 'a', text: '<heading>Tittel</heading>', isCorrect: false, feedback: 'Det finnes ikke noe <heading>-element i HTML.' },
        { id: 'b', text: '<h1>Tittel</h1>', isCorrect: true },
        { id: 'c', text: '<title>Tittel</title>', isCorrect: false, feedback: '<title> brukes i <head> for sidetittelen i nettleserfanen, ikke som synlig overskrift.' },
        { id: 'd', text: '<p class="heading">Tittel</p>', isCorrect: false, feedback: 'Dette er et avsnitt med en klasse, ikke en semantisk overskrift.' },
      ],
      solution: '<h1> er det riktige elementet for hovedoverskriften på en side. Overskriftsnivåene går fra <h1> (viktigst) til <h6> (minst viktig).',
    },
    {
      id: 'im-3-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket element bør brukes for navigasjonslenker på en nettside?',
      options: [
        { id: 'a', text: '<div id="meny">', isCorrect: false, feedback: '<div> er et generisk element uten semantisk betydning.' },
        { id: 'b', text: '<menu>', isCorrect: false, feedback: '<menu> brukes for kontekstmenyer, ikke hovednavigasjon.' },
        { id: 'c', text: '<nav>', isCorrect: true },
        { id: 'd', text: '<links>', isCorrect: false, feedback: 'Det finnes ikke noe <links>-element i HTML.' },
      ],
      solution: '<nav> er det semantiske elementet for navigasjon. Det forteller nettlesere og skjermlesere at innholdet er navigasjonslenker.',
    },
    {
      id: 'im-3-2-ex-3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Skriv HTML for en uordnet liste med tre programmeringsspråk, der hvert språk er en lenke til Wikipedia-artikkelen om språket.',
      solution: `\`\`\`html
<ul>
    <li><a href="https://no.wikipedia.org/wiki/Python">Python</a></li>
    <li><a href="https://no.wikipedia.org/wiki/JavaScript">JavaScript</a></li>
    <li><a href="https://no.wikipedia.org/wiki/Java_(programmeringsspråk)">Java</a></li>
</ul>
\`\`\``,
    },
    {
      id: 'im-3-2-ex-4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Lag et kontaktskjema i HTML med felt for navn, e-post og melding. Skjemaet skal ha en send-knapp. Bruk riktige input-typer og `required`-attributtet.',
      solution: `\`\`\`html
<form action="/kontakt" method="post">
    <label for="navn">Navn:</label>
    <input type="text" id="navn" name="navn" required>

    <label for="epost">E-post:</label>
    <input type="email" id="epost" name="epost" required>

    <label for="melding">Melding:</label>
    <textarea id="melding" name="melding" rows="5" required></textarea>

    <button type="submit">Send melding</button>
</form>
\`\`\`

Viktige punkter: \`type="email"\` validerer e-postformatet, \`required\` gjør feltene obligatoriske, og \`<label>\` kobles til input med \`for\`/\`id\`.`,
    },
    {
      id: 'im-3-2-ex-5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Lag en komplett HTML-side for en fiktiv skolerestaurant. Siden skal inneholde: en header med navn og navigasjon, en main-seksjon med meny (bruk en tabell), og en footer med kontaktinfo. Bruk semantiske elementer.',
      solution: `\`\`\`html
<!DOCTYPE html>
<html lang="nb">
<head>
    <meta charset="UTF-8">
    <title>Skolerestauranten</title>
</head>
<body>
    <header>
        <h1>Skolerestauranten</h1>
        <nav>
            <ul>
                <li><a href="#meny">Meny</a></li>
                <li><a href="#kontakt">Kontakt</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="meny">
            <h2>Dagens meny</h2>
            <table>
                <thead>
                    <tr>
                        <th>Rett</th>
                        <th>Pris</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Pasta med kjøttsaus</td><td>45 kr</td></tr>
                    <tr><td>Vegetarwrap</td><td>40 kr</td></tr>
                    <tr><td>Fiskesuppe</td><td>50 kr</td></tr>
                </tbody>
            </table>
        </section>
    </main>
    <footer id="kontakt">
        <p>Kontakt oss: restaurant@skolen.no | Tlf: 12 34 56 78</p>
    </footer>
</body>
</html>
\`\`\``,
    },
    {
      id: 'im-3-2-ex-6',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er forskjellen mellom <div> og <section>?',
      options: [
        { id: 'a', text: 'Det er ingen forskjell', isCorrect: false, feedback: 'De har ulik semantisk betydning.' },
        { id: 'b', text: '<div> er for tekst, <section> er for bilder', isCorrect: false, feedback: 'Begge kan inneholde alle typer innhold.' },
        { id: 'c', text: '<section> har semantisk betydning (tematisk gruppering), <div> er en generisk beholder', isCorrect: true },
        { id: 'd', text: '<section> er eldre HTML, <div> er ny', isCorrect: false, feedback: 'Det er omvendt – <section> ble innført i HTML5.' },
      ],
      solution: '<section> er et semantisk element som markerer en tematisk gruppering av innhold, mens <div> er en generisk beholder uten semantisk betydning. Bruk <section> når innholdet hører tematisk sammen.',
    },
  ],
};

// ============================================================================
// Kapittel 3.3: CSS: Styling og layout
// ============================================================================

export const CHAPTER_IM_VG1_3_3: TextbookChapter = {
  id: 'im-vg1-3-3',
  courseId: 'im-vg1',
  chapterNumber: '3.3',
  title: 'CSS: Styling og layout',
  description: 'Lær å style nettsider med CSS – selektorer, boksmodellen, farger, typografi, Flexbox og Grid for layout.',
  estimatedMinutes: 65,
  prevChapter: 'im-vg1-3-2',
  nextChapter: 'im-vg1-3-4',
  competenceGoals: [
    'bruke CSS til å style og layoute nettsider',
    'forklare boksmodellen og dens betydning for layout',
    'bruke Flexbox og CSS Grid for å lage moderne layouter',
  ],
  keyTerms: [
    { term: 'CSS', definition: 'Cascading Style Sheets – språket som beskriver utseendet og layouten til HTML-elementer på en nettside.' },
    { term: 'Selektor', definition: 'Mønsteret som velger hvilke HTML-elementer en CSS-regel skal gjelde for, f.eks. h1, .klasse, #id.' },
    { term: 'Boksmodellen', definition: 'CSS-modellen der hvert element er en rektangulær boks med innhold, padding (indre marg), border (kantlinje) og margin (ytre marg).' },
    { term: 'Flexbox', definition: 'En CSS-layoutmodell for å fordele plass og justere elementer langs én akse (rad eller kolonne).' },
    { term: 'CSS Grid', definition: 'En CSS-layoutmodell for todimensjonale layouter med rader og kolonner, ideell for komplekse sidestrukturer.' },
  ],
  content: [
    {
      id: 'im-3-3-intro',
      type: 'text',
      content: `## CSS: Styling og layout

HTML gir nettsiden struktur, men det er **CSS** som bestemmer hvordan den ser ut. Med CSS kan du kontrollere farger, skrifttyper, størrelser, avstander og hele sidelayouten.

CSS-regler skrives i et eget stilark (\`.css\`-fil) eller direkte i HTML-dokumentet med \`<style>\`-elementet.`,
    },
    {
      id: 'im-3-3-def-1',
      type: 'definition',
      title: 'CSS-regel',
      content: `En **CSS-regel** består av en **selektor** og en **deklarasjonsblokk**:

\`\`\`css
h1 {
    color: darkblue;
    font-size: 2rem;
    margin-bottom: 1rem;
}
\`\`\`

- **Selektor** (\`h1\`) – velger hvilke elementer regelen gjelder for
- **Egenskap** (\`color\`) – hva som skal endres
- **Verdi** (\`darkblue\`) – hva egenskapen settes til`,
    },
    {
      id: 'im-3-3-text-1',
      type: 'text',
      content: `### Selektorer og kobling

CSS har flere typer selektorer for å velge elementer:

\`\`\`css
/* Element-selektor – alle <p>-elementer */
p { color: #333; }

/* Klasse-selektor – elementer med class="intro" */
.intro { font-weight: bold; }

/* ID-selektor – elementet med id="header" */
#header { background-color: navy; }

/* Kombinasjoner */
nav a { text-decoration: none; }        /* <a> inne i <nav> */
h2 + p { font-size: 1.1rem; }           /* <p> rett etter <h2> */
.kort:hover { transform: scale(1.05); } /* ved musepeker */
\`\`\`

Det finnes tre måter å koble CSS til HTML:

\`\`\`html
<!-- 1. Eksternt stilark (anbefalt) -->
<link rel="stylesheet" href="stil.css">

<!-- 2. Internt stilark -->
<style>
    body { font-family: Arial, sans-serif; }
</style>

<!-- 3. Inline-stil (unngå) -->
<p style="color: red;">Rød tekst</p>
\`\`\`

Eksternt stilark er best fordi det holder HTML og CSS adskilt og lar deg gjenbruke stilen på flere sider.`,
    },
    {
      id: 'im-3-3-def-2',
      type: 'definition',
      title: 'Boksmodellen',
      content: `**Boksmodellen** i CSS behandler hvert element som en rektangulær boks med fire lag:

\`\`\`
┌─────────── margin ───────────┐
│ ┌──────── border ──────────┐ │
│ │ ┌────── padding ───────┐ │ │
│ │ │                      │ │ │
│ │ │      innhold         │ │ │
│ │ │                      │ │ │
│ │ └──────────────────────┘ │ │
│ └──────────────────────────┘ │
└──────────────────────────────┘
\`\`\`

- **Innhold** – tekst, bilder osv.
- **Padding** – avstand mellom innhold og kantlinje
- **Border** – kantlinje rundt elementet
- **Margin** – avstand mellom elementet og andre elementer

Tips: Bruk \`box-sizing: border-box;\` slik at padding og border inkluderes i den angitte bredden.`,
    },
    {
      id: 'im-3-3-text-2',
      type: 'text',
      content: `### Flexbox og CSS Grid

**Flexbox** gjør det enkelt å fordele og justere elementer langs én akse:

\`\`\`css
.container {
    display: flex;
    justify-content: space-between; /* fordeling langs hovedaksen */
    align-items: center;            /* justering langs kryssaksen */
    gap: 1rem;                      /* avstand mellom elementer */
}
\`\`\`

Vanlige Flexbox-egenskaper:
- \`flex-direction\`: \`row\` (standard) eller \`column\`
- \`justify-content\`: \`flex-start\`, \`center\`, \`space-between\`, \`space-around\`
- \`align-items\`: \`flex-start\`, \`center\`, \`stretch\`
- \`flex-wrap\`: \`wrap\` lar elementer brytes til neste linje

**CSS Grid** er ideell for komplekse sidelayouter med rader og kolonner:

\`\`\`css
.grid-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr; /* tre kolonner */
    grid-template-rows: auto 1fr auto;  /* tre rader */
    gap: 1rem;
}

.header  { grid-column: 1 / -1; } /* strekker over alle kolonner */
.sidebar { grid-row: 2 / 3; }
.main    { grid-column: 2 / 3; }
\`\`\`

\`fr\`-enheten fordeler tilgjengelig plass proporsjonalt. \`1fr 2fr 1fr\` gir den midterste kolonnen dobbelt så mye plass.`,
    },
    {
      id: 'im-3-3-example-1',
      type: 'example',
      title: 'Navigasjonsmeny med Flexbox',
      content: `**Eksempel: Horisontal navigasjonsmeny**

HTML:
\`\`\`html
<nav class="navbar">
    <a href="/" class="logo">MinSide</a>
    <ul class="nav-links">
        <li><a href="#hjem">Hjem</a></li>
        <li><a href="#om">Om</a></li>
        <li><a href="#kontakt">Kontakt</a></li>
    </ul>
</nav>
\`\`\`

CSS:
\`\`\`css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #1a1a2e;
}

.logo {
    color: white;
    font-size: 1.5rem;
    text-decoration: none;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    color: #e0e0e0;
    text-decoration: none;
}

.nav-links a:hover {
    color: #00d4ff;
}
\`\`\`

Flexbox med \`justify-content: space-between\` skyver logoen til venstre og lenkene til høyre.`,
    },
    {
      id: 'im-3-3-summary',
      type: 'text',
      content: `## Oppsummering

- **CSS** kontrollerer utseendet til HTML-elementer gjennom regler med selektorer og egenskaper
- **Selektorer** velger elementer: element (\`p\`), klasse (\`.intro\`), ID (\`#header\`)
- **Boksmodellen** definerer innhold, padding, border og margin
- Bruk \`box-sizing: border-box\` for enklere størrelsesberegning
- **Flexbox** er ideell for endimensjonal layout (rad eller kolonne)
- **CSS Grid** er ideell for todimensjonal layout (rader og kolonner)
- Hold CSS i et **eksternt stilark** for oversikt og gjenbruk`,
    },
  ],
  exercises: [
    {
      id: 'im-3-3-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken CSS-selektor velger alle elementer med klassen "kort"?',
      options: [
        { id: 'a', text: '#kort', isCorrect: false, feedback: '#kort velger elementet med id="kort".' },
        { id: 'b', text: '.kort', isCorrect: true },
        { id: 'c', text: 'kort', isCorrect: false, feedback: 'Dette ville valgt et <kort>-element, som ikke finnes i HTML.' },
        { id: 'd', text: '*kort', isCorrect: false, feedback: '* er universalselektoren og brukes ikke slik.' },
      ],
      solution: 'Punktum (.) foran et navn velger elementer med den klassen. .kort velger alle elementer med class="kort".',
    },
    {
      id: 'im-3-3-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva gjør CSS-egenskapen `box-sizing: border-box`?',
      options: [
        { id: 'a', text: 'Den legger til en boks rundt elementet', isCorrect: false, feedback: 'Det gjør border-egenskapen.' },
        { id: 'b', text: 'Den inkluderer padding og border i elementets angitte bredde/høyde', isCorrect: true },
        { id: 'c', text: 'Den fjerner alle marginer', isCorrect: false, feedback: 'Det gjør margin: 0.' },
        { id: 'd', text: 'Den gjør elementet usynlig', isCorrect: false, feedback: 'Det gjør display: none eller visibility: hidden.' },
      ],
      solution: 'Med box-sizing: border-box inkluderes padding og border i elementets totale bredde og høyde, slik at du slipper å regne dem ut manuelt.',
    },
    {
      id: 'im-3-3-ex-3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Skriv CSS som gir alle avsnitt (<p>) grå tekstfarge (#555), linjehøyde 1.6, og 1rem margin under. Overskrifter (<h2>) skal ha mørkeblå farge (#1a1a2e) og en tynn understrek.',
      solution: `\`\`\`css
p {
    color: #555;
    line-height: 1.6;
    margin-bottom: 1rem;
}

h2 {
    color: #1a1a2e;
    border-bottom: 1px solid #1a1a2e;
}
\`\`\``,
    },
    {
      id: 'im-3-3-ex-4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Lag en Flexbox-layout der tre kort vises side om side med lik bredde og 1.5rem avstand mellom dem. Kortene skal ha padding, avrundede hjørner og en lett skygge.',
      solution: `\`\`\`css
.kort-container {
    display: flex;
    gap: 1.5rem;
}

.kort {
    flex: 1;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    background-color: white;
}
\`\`\`

\`flex: 1\` gir hvert kort lik andel av tilgjengelig plass.`,
    },
    {
      id: 'im-3-3-ex-5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Bruk CSS Grid til å lage en typisk sidelayout med header (hele bredden), sidebar (venstre, 250px), hovedinnhold (resten av plassen), og footer (hele bredden). Legg til 1rem gap.',
      solution: `\`\`\`css
.side-layout {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 1rem;
    min-height: 100vh;
}

.header {
    grid-column: 1 / -1;
}

.sidebar {
    grid-column: 1;
    grid-row: 2;
}

.hovedinnhold {
    grid-column: 2;
    grid-row: 2;
}

.footer {
    grid-column: 1 / -1;
}
\`\`\`

\`grid-column: 1 / -1\` strekker elementet over alle kolonner. \`1fr\` gir hovedinnholdet resten av plassen.`,
    },
    {
      id: 'im-3-3-ex-6',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er forskjellen mellom Flexbox og CSS Grid?',
      options: [
        { id: 'a', text: 'Flexbox er nyere enn Grid', isCorrect: false, feedback: 'Begge er moderne CSS-moduler som kom rundt samme tid.' },
        { id: 'b', text: 'Flexbox er for endimensjonal layout, Grid er for todimensjonal layout', isCorrect: true },
        { id: 'c', text: 'Grid kan bare brukes for tabeller', isCorrect: false, feedback: 'Grid er en generell layoutmodell, ikke begrenset til tabeller.' },
        { id: 'd', text: 'Man bør bare bruke én av dem', isCorrect: false, feedback: 'De utfyller hverandre og brukes ofte sammen.' },
      ],
      solution: 'Flexbox er optimalisert for layout langs én akse (enten rad eller kolonne), mens CSS Grid håndterer todimensjonal layout med både rader og kolonner. De brukes ofte sammen.',
    },
  ],
};

// ============================================================================
// Kapittel 3.4: Responsivt webdesign
// ============================================================================

export const CHAPTER_IM_VG1_3_4: TextbookChapter = {
  id: 'im-vg1-3-4',
  courseId: 'im-vg1',
  chapterNumber: '3.4',
  title: 'Responsivt webdesign',
  description: 'Lær å lage nettsider som ser bra ut på alle skjermstørrelser – media queries, mobile-first-design og responsive bilder.',
  estimatedMinutes: 55,
  prevChapter: 'im-vg1-3-3',
  nextChapter: 'im-vg1-3-5',
  competenceGoals: [
    'utvikle nettsider som fungerer godt på ulike enheter og skjermstørrelser',
    'bruke media queries og mobile-first-tilnærming',
    'implementere responsive bilder og fleksible layouter',
  ],
  keyTerms: [
    { term: 'Responsivt design', definition: 'En designtilnærming der nettsiden tilpasser seg automatisk til skjermstørrelsen på enheten den vises på.' },
    { term: 'Media query', definition: 'En CSS-teknikk som lar deg anvende ulike stiler basert på egenskaper ved enheten, som skjermbredde.' },
    { term: 'Mobile-first', definition: 'En designstrategi der man designer for mobil først og legger til CSS for større skjermer med media queries.' },
    { term: 'Viewport', definition: 'Det synlige området av en nettside i nettleservinduet, som varierer mellom enheter.' },
    { term: 'Breakpoint', definition: 'En skjermbredde der layouten endres, f.eks. fra én kolonne til to kolonner.' },
  ],
  content: [
    {
      id: 'im-3-4-intro',
      type: 'text',
      content: `## Responsivt webdesign

Over halvparten av all nettrafikk kommer fra mobiltelefoner. En nettside som bare ser bra ut på en datamaskin vil frustrere mobilbrukere. **Responsivt webdesign** betyr at nettsiden automatisk tilpasser seg skjermstørrelsen – enten brukeren er på mobil, nettbrett eller storskjerm.

I dette kapittelet lærer du teknikkene som gjør dette mulig: viewport-meta, media queries, mobile-first-design og responsive bilder.`,
    },
    {
      id: 'im-3-4-def-1',
      type: 'definition',
      title: 'Viewport-meta',
      content: `**Viewport-meta-taggen** forteller nettleseren hvordan den skal skalere siden på mobile enheter:

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

Uten denne taggen vil mobilnettleseren vise skrivebordsversjonen i miniatyr. Med taggen tilpasses bredden til enhetens skjermbredde.`,
    },
    {
      id: 'im-3-4-text-1',
      type: 'text',
      content: `### Media queries

**Media queries** lar deg anvende CSS-regler kun når bestemte betingelser er oppfylt, vanligvis basert på skjermbredden:

\`\`\`css
/* Basis-stiler (mobil) */
.container {
    padding: 1rem;
}

.kort-grid {
    display: grid;
    grid-template-columns: 1fr; /* én kolonne på mobil */
    gap: 1rem;
}

/* Nettbrett (768px og oppover) */
@media (min-width: 768px) {
    .kort-grid {
        grid-template-columns: 1fr 1fr; /* to kolonner */
    }
}

/* Desktop (1024px og oppover) */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }

    .kort-grid {
        grid-template-columns: repeat(3, 1fr); /* tre kolonner */
    }
}
\`\`\`

Vanlige breakpoints:
- **Mobil**: 0–767px
- **Nettbrett**: 768–1023px
- **Desktop**: 1024px og oppover`,
    },
    {
      id: 'im-3-4-text-2',
      type: 'text',
      content: `### Mobile-first og responsive bilder

**Mobile-first** betyr at du skriver basis-CSS for mobil og bruker \`min-width\` media queries for å legge til stiler for større skjermer:

\`\`\`css
/* Mobile-first: basis er for mobil */
.nav {
    flex-direction: column;  /* vertikal meny på mobil */
}

@media (min-width: 768px) {
    .nav {
        flex-direction: row;  /* horisontal meny på nettbrett+ */
    }
}
\`\`\`

Fordeler med mobile-first:
- Mobil får bare den CSS den trenger (raskere lasting)
- Tvinger deg til å prioritere innholdet
- Enklere å legge til enn å fjerne funksjonalitet

**Responsive bilder** må også tilpasse seg skjermstørrelsen:

\`\`\`css
img {
    max-width: 100%;  /* aldri bredere enn forelderen */
    height: auto;     /* behold proporsjoner */
}
\`\`\`

For å levere optimale bilder til ulike enheter kan du bruke \`<picture>\`-elementet:

\`\`\`html
<picture>
    <source media="(min-width: 1024px)" srcset="bilde-stor.jpg">
    <source media="(min-width: 768px)" srcset="bilde-medium.jpg">
    <img src="bilde-liten.jpg" alt="Beskrivelse">
</picture>
\`\`\``,
    },
    {
      id: 'im-3-4-text-3',
      type: 'text',
      content: `### Fleksible enheter

Bruk **relative enheter** i stedet for piksler for fleksibel design:

| Enhet | Beskrivelse | Bruksområde |
|-------|------------|-------------|
| \`rem\` | Relativt til rot-skriftstørrelse | Skriftstørrelse, margin, padding |
| \`em\` | Relativt til forelderens skriftstørrelse | Skriftstørrelse i kontekst |
| \`%\` | Prosentandel av forelder | Bredder |
| \`vw\`/\`vh\` | Prosentandel av viewport | Full-skjerm-elementer |
| \`fr\` | Fraksjon i CSS Grid | Grid-kolonner |

\`\`\`css
/* Eksempel: responsiv typografi */
html { font-size: 16px; }

h1 { font-size: 2rem; }     /* 32px */
p  { font-size: 1rem; }     /* 16px */

.hero {
    height: 100vh;           /* full skjermhøyde */
    width: 100vw;            /* full skjermbredde */
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}
\`\`\``,
    },
    {
      id: 'im-3-4-example-1',
      type: 'example',
      title: 'Responsiv kortlayout',
      content: `**Eksempel: Kortgrid som tilpasser seg**

\`\`\`css
/* Mobile-first: kortene stables vertikalt */
.kort-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1rem;
}

.kort {
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.kort img {
    width: 100%;
    border-radius: 8px;
}

/* Nettbrett: to kolonner */
@media (min-width: 768px) {
    .kort-container {
        grid-template-columns: repeat(2, 1fr);
        padding: 2rem;
    }
}

/* Desktop: tre kolonner */
@media (min-width: 1024px) {
    .kort-container {
        grid-template-columns: repeat(3, 1fr);
        max-width: 1200px;
        margin: 0 auto;
    }
}
\`\`\`

På mobil vises kortene i én kolonne, på nettbrett i to, og på desktop i tre kolonner.`,
    },
    {
      id: 'im-3-4-summary',
      type: 'text',
      content: `## Oppsummering

- **Responsivt design** tilpasser nettsiden til alle skjermstørrelser
- **Viewport-meta-taggen** er nødvendig for riktig skalering på mobil
- **Media queries** bruker \`@media (min-width: ...)\` for å endre stiler ved ulike skjermbredder
- **Mobile-first** betyr å designe for mobil først og legge til for større skjermer
- **Responsive bilder** bruker \`max-width: 100%\` og \`<picture>\`-elementet
- Bruk **relative enheter** (\`rem\`, \`%\`, \`vw\`) i stedet for piksler for fleksibilitet
- Vanlige **breakpoints**: 768px (nettbrett) og 1024px (desktop)`,
    },
  ],
  exercises: [
    {
      id: 'im-3-4-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "responsivt webdesign"?',
      options: [
        { id: 'a', text: 'At nettsiden laster raskt', isCorrect: false, feedback: 'Det handler om ytelse, ikke responsivt design.' },
        { id: 'b', text: 'At nettsiden tilpasser seg skjermstørrelsen automatisk', isCorrect: true },
        { id: 'c', text: 'At nettsiden har mye interaktivitet', isCorrect: false, feedback: 'Interaktivitet handler om JavaScript-funksjonalitet.' },
        { id: 'd', text: 'At nettsiden bruker mye JavaScript', isCorrect: false, feedback: 'Responsivt design oppnås primært med CSS.' },
      ],
      solution: 'Responsivt webdesign betyr at nettsiden automatisk tilpasser layout, bilder og innhold til skjermstørrelsen, slik at den fungerer godt på mobil, nettbrett og desktop.',
    },
    {
      id: 'im-3-4-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er mobile-first-tilnærmingen?',
      options: [
        { id: 'a', text: 'Man lager en egen app for mobil', isCorrect: false, feedback: 'Mobile-first handler om CSS-strategien, ikke separate apper.' },
        { id: 'b', text: 'Man designer for desktop først og fjerner stiler for mobil', isCorrect: false, feedback: 'Det er det motsatte av mobile-first (desktop-first).' },
        { id: 'c', text: 'Man designer for mobil først og legger til stiler for større skjermer med min-width', isCorrect: true },
        { id: 'd', text: 'Man ignorerer desktop-brukere', isCorrect: false, feedback: 'Mobile-first handler om rekkefølgen, ikke å utelate enheter.' },
      ],
      solution: 'Mobile-first betyr at basis-CSS er designet for mobil, og man bruker @media (min-width: ...) for å legge til stiler for nettbrett og desktop.',
    },
    {
      id: 'im-3-4-ex-3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Skriv en media query som endrer bakgrunnsfargen på body til lysegrå (#f5f5f5) på skjermer som er 768px brede eller bredere, og setter maksbredde på .container til 960px.',
      solution: `\`\`\`css
@media (min-width: 768px) {
    body {
        background-color: #f5f5f5;
    }

    .container {
        max-width: 960px;
        margin: 0 auto;
    }
}
\`\`\``,
    },
    {
      id: 'im-3-4-ex-4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Lag en komplett responsiv navigasjonsmeny som vises vertikalt på mobil og horisontalt på desktop (breakpoint: 768px). Bruk mobile-first-tilnærming med Flexbox.',
      solution: `\`\`\`css
/* Mobile-first: vertikal meny */
.nav {
    display: flex;
    flex-direction: column;
    background-color: #1a1a2e;
    padding: 1rem;
}

.nav-link {
    color: white;
    text-decoration: none;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

/* Desktop: horisontal meny */
@media (min-width: 768px) {
    .nav {
        flex-direction: row;
        justify-content: center;
        gap: 2rem;
    }

    .nav-link {
        border-bottom: none;
        padding: 0.5rem 1rem;
        border-radius: 4px;
    }
}
\`\`\``,
    },
    {
      id: 'im-3-4-ex-5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor det er viktig å inkludere viewport-meta-taggen i HTML-dokumentet. Hva skjer uten den?',
      solution: 'Viewport-meta-taggen `<meta name="viewport" content="width=device-width, initial-scale=1.0">` forteller mobilnettleseren at sidens bredde skal matche enhetens skjermbredde. Uten denne taggen vil mobilnettleseren anta at siden er designet for desktop (vanligvis 980px bred) og vise en forminket versjon der teksten er for liten til å lese uten å zoome inn. Med taggen tilpasses innholdet til den faktiske skjermbredden.',
    },
  ],
};

// ============================================================================
// Kapittel 3.5: JavaScript for interaktivitet
// ============================================================================

export const CHAPTER_IM_VG1_3_5: TextbookChapter = {
  id: 'im-vg1-3-5',
  courseId: 'im-vg1',
  chapterNumber: '3.5',
  title: 'JavaScript for interaktivitet',
  description: 'Lær å gjøre nettsider interaktive med JavaScript – DOM-manipulering, hendelseshåndtering, skjemavalidering og animasjoner.',
  estimatedMinutes: 65,
  prevChapter: 'im-vg1-3-4',
  nextChapter: 'im-vg1-3-6',
  competenceGoals: [
    'bruke JavaScript til å gjøre nettsider interaktive',
    'manipulere DOM-en for å endre innhold dynamisk',
    'implementere hendelseshåndtering og skjemavalidering',
  ],
  keyTerms: [
    { term: 'JavaScript', definition: 'Et programmeringsspråk som kjøres i nettleseren og gjør nettsider interaktive med dynamisk innhold, animasjoner og brukerrespons.' },
    { term: 'DOM', definition: 'Document Object Model – nettleserens trestruktur som representerer HTML-dokumentet. JavaScript kan lese, endre og slette elementer i DOM-en.' },
    { term: 'Hendelse (event)', definition: 'En handling som skjer i nettleseren, f.eks. klikk, tastetykk eller musebevegelse, som JavaScript kan reagere på.' },
    { term: 'Event listener', definition: 'En funksjon som lytter etter en bestemt hendelse på et element og kjører kode når hendelsen inntreffer.' },
    { term: 'querySelector', definition: 'En JavaScript-metode som finner HTML-elementer ved hjelp av CSS-selektorer, f.eks. document.querySelector(".klasse").' },
    { term: 'Validering', definition: 'Kontroll av at brukerinndata er korrekt og i riktig format før den sendes til en tjener.' },
  ],
  content: [
    {
      id: 'im-3-5-intro',
      type: 'text',
      content: `## JavaScript for interaktivitet

HTML gir struktur, CSS gir utseende, og **JavaScript** gir **interaktivitet**. Med JavaScript kan du reagere på brukerens handlinger, endre innhold uten å laste siden på nytt, validere skjemaer, lage animasjoner og mye mer.

JavaScript er den tredje grunnpilaren i webutvikling og kjøres direkte i nettleseren.`,
    },
    {
      id: 'im-3-5-text-1',
      type: 'text',
      content: `### JavaScript i HTML og DOM-manipulering

JavaScript legges til med \`<script>\`-taggen, helst nederst i \`<body>\` eller i en egen fil:

\`\`\`html
<!-- Inline JavaScript -->
<script>
    console.log("Hei fra JavaScript!");
</script>

<!-- Ekstern fil (anbefalt) -->
<script src="script.js"></script>
\`\`\`

**DOM-en** (Document Object Model) er nettleserens representasjon av HTML-dokumentet som et tre av objekter. JavaScript kan finne, endre og lage elementer:

\`\`\`javascript
// Finne elementer
const tittel = document.querySelector("h1");
const knapper = document.querySelectorAll(".btn");
const skjema = document.getElementById("kontaktskjema");

// Endre innhold
tittel.textContent = "Ny tittel!";
tittel.innerHTML = "<em>Kursiv</em> tittel";

// Endre stil
tittel.style.color = "blue";
tittel.classList.add("aktiv");
tittel.classList.toggle("synlig");

// Lage nye elementer
const nyParagraf = document.createElement("p");
nyParagraf.textContent = "Dynamisk innhold!";
document.body.appendChild(nyParagraf);
\`\`\``,
    },
    {
      id: 'im-3-5-def-1',
      type: 'definition',
      title: 'Hendelseshåndtering (Event Handling)',
      content: `**Hendelseshåndtering** lar JavaScript reagere på brukerens handlinger. Du bruker \`addEventListener\` til å knytte en funksjon til en hendelse:

\`\`\`javascript
const knapp = document.querySelector("#minKnapp");

knapp.addEventListener("click", function() {
    alert("Du klikket på knappen!");
});
\`\`\`

Vanlige hendelser:
- \`click\` – bruker klikker
- \`submit\` – skjema sendes inn
- \`input\` – bruker skriver i et felt
- \`keydown\` / \`keyup\` – tast trykkes/slippes
- \`mouseover\` / \`mouseout\` – musepeker over/bort fra element`,
    },
    {
      id: 'im-3-5-text-2',
      type: 'text',
      content: `### Skjemavalidering

JavaScript kan sjekke at brukeren har fylt ut skjemaet riktig **før** det sendes:

\`\`\`javascript
const skjema = document.querySelector("#registrering");

skjema.addEventListener("submit", function(event) {
    const navn = document.querySelector("#navn").value;
    const epost = document.querySelector("#epost").value;
    const passord = document.querySelector("#passord").value;

    // Valider navn
    if (navn.length < 2) {
        event.preventDefault(); // Stopp innsending
        visFeil("Navnet må ha minst 2 tegn.");
        return;
    }

    // Valider e-post (enkel sjekk)
    if (!epost.includes("@") || !epost.includes(".")) {
        event.preventDefault();
        visFeil("Ugyldig e-postadresse.");
        return;
    }

    // Valider passord
    if (passord.length < 8) {
        event.preventDefault();
        visFeil("Passordet må ha minst 8 tegn.");
        return;
    }
});

function visFeil(melding) {
    const feilDiv = document.querySelector("#feilmelding");
    feilDiv.textContent = melding;
    feilDiv.style.display = "block";
}
\`\`\`

\`event.preventDefault()\` forhindrer at skjemaet sendes dersom valideringen feiler.`,
    },
    {
      id: 'im-3-5-text-3',
      type: 'text',
      content: `### Animasjoner med JavaScript og CSS

Du kan lage animasjoner ved å kombinere JavaScript (for hendelser) med CSS-overganger:

\`\`\`css
/* CSS-overgang */
.kort {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.kort.aktiv {
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}
\`\`\`

\`\`\`javascript
// JavaScript: Toggle animasjon ved klikk
const kort = document.querySelectorAll(".kort");

kort.forEach(function(element) {
    element.addEventListener("click", function() {
        element.classList.toggle("aktiv");
    });
});
\`\`\`

For mer avanserte animasjoner brukes CSS \`@keyframes\`:

\`\`\`css
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
}

.fade-in {
    animation: fadeIn 0.5s ease forwards;
}
\`\`\``,
    },
    {
      id: 'im-3-5-example-1',
      type: 'example',
      title: 'Interaktiv gjøremålsliste',
      content: `**Eksempel: Enkel gjøremålsliste**

HTML:
\`\`\`html
<div id="todo-app">
    <h2>Gjøremålsliste</h2>
    <input type="text" id="nyOppgave" placeholder="Ny oppgave...">
    <button id="leggTil">Legg til</button>
    <ul id="oppgaveliste"></ul>
</div>
\`\`\`

JavaScript:
\`\`\`javascript
const input = document.querySelector("#nyOppgave");
const knapp = document.querySelector("#leggTil");
const liste = document.querySelector("#oppgaveliste");

knapp.addEventListener("click", function() {
    const tekst = input.value.trim();
    if (tekst === "") return;

    const li = document.createElement("li");
    li.textContent = tekst;

    // Klikk for å markere som ferdig
    li.addEventListener("click", function() {
        li.classList.toggle("ferdig");
    });

    liste.appendChild(li);
    input.value = "";
    input.focus();
});

// Legg til med Enter-tast
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        knapp.click();
    }
});
\`\`\`

Denne koden lar brukeren legge til oppgaver med knappen eller Enter-tasten, og klikke på dem for å markere dem som ferdige.`,
    },
    {
      id: 'im-3-5-summary',
      type: 'text',
      content: `## Oppsummering

- **JavaScript** gjør nettsider interaktive og dynamiske
- **DOM-en** er nettleserens trestruktur av HTML-dokumentet
- \`document.querySelector()\` finner elementer med CSS-selektorer
- **addEventListener** knytter funksjoner til hendelser som klikk og tastetykk
- **Skjemavalidering** sjekker brukerinndata før innsending med \`event.preventDefault()\`
- **Animasjoner** lages best med CSS-overganger styrt av JavaScript
- Bruk **ekstern JavaScript-fil** for ryddig kode`,
    },
  ],
  exercises: [
    {
      id: 'im-3-5-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva gjør `document.querySelector("#tittel")`?',
      options: [
        { id: 'a', text: 'Lager et nytt element med id "tittel"', isCorrect: false, feedback: 'querySelector finner eksisterende elementer, den lager ikke nye.' },
        { id: 'b', text: 'Finner HTML-elementet med id="tittel"', isCorrect: true },
        { id: 'c', text: 'Sletter elementet med id "tittel"', isCorrect: false, feedback: 'querySelector finner elementer, den sletter dem ikke.' },
        { id: 'd', text: 'Endrer teksten i elementet med id "tittel"', isCorrect: false, feedback: 'querySelector bare finner elementet. Du må bruke .textContent for å endre teksten.' },
      ],
      solution: 'document.querySelector("#tittel") bruker CSS-selektoren #tittel for å finne og returnere HTML-elementet med id="tittel".',
    },
    {
      id: 'im-3-5-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva gjør `event.preventDefault()` i en skjemahendelse?',
      options: [
        { id: 'a', text: 'Den sletter skjemadataene', isCorrect: false, feedback: 'Dataene slettes ikke, bare innsendingen stoppes.' },
        { id: 'b', text: 'Den forhindrer nettleserens standardhandling (f.eks. skjemainnsending)', isCorrect: true },
        { id: 'c', text: 'Den laster siden på nytt', isCorrect: false, feedback: 'Det er det motsatte – preventDefault hindrer ofte sidelasting.' },
        { id: 'd', text: 'Den lukker nettleservinduet', isCorrect: false, feedback: 'preventDefault har ingenting med å lukke vinduer å gjøre.' },
      ],
      solution: 'event.preventDefault() forhindrer nettleserens standardhandling for hendelsen. For et skjema betyr det at skjemaet ikke sendes inn, slik at JavaScript kan validere dataene først.',
    },
    {
      id: 'im-3-5-ex-3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Skriv JavaScript som finner en knapp med id "toggleMeny" og en nav med id "meny". Når knappen klikkes, skal klassen "synlig" toggles på nav-elementet.',
      solution: `\`\`\`javascript
const knapp = document.querySelector("#toggleMeny");
const meny = document.querySelector("#meny");

knapp.addEventListener("click", function() {
    meny.classList.toggle("synlig");
});
\`\`\`

\`classList.toggle()\` legger til klassen hvis den mangler, og fjerner den hvis den finnes.`,
    },
    {
      id: 'im-3-5-ex-4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Lag JavaScript-kode for validering av et registreringsskjema. Skjemaet har felt for brukernavn (minst 3 tegn), e-post (må inneholde @ og .) og passord (minst 8 tegn, minst ett tall). Vis feilmeldinger under hvert felt.',
      solution: `\`\`\`javascript
const skjema = document.querySelector("#registrering");

skjema.addEventListener("submit", function(event) {
    // Fjern tidligere feil
    document.querySelectorAll(".feil").forEach(el => el.textContent = "");
    let harFeil = false;

    const brukernavn = document.querySelector("#brukernavn").value;
    if (brukernavn.length < 3) {
        document.querySelector("#brukernavn-feil").textContent = "Brukernavn må ha minst 3 tegn.";
        harFeil = true;
    }

    const epost = document.querySelector("#epost").value;
    if (!epost.includes("@") || !epost.includes(".")) {
        document.querySelector("#epost-feil").textContent = "Ugyldig e-postadresse.";
        harFeil = true;
    }

    const passord = document.querySelector("#passord").value;
    const harTall = /\\d/.test(passord);
    if (passord.length < 8 || !harTall) {
        document.querySelector("#passord-feil").textContent = "Passord må ha minst 8 tegn og inneholde et tall.";
        harFeil = true;
    }

    if (harFeil) {
        event.preventDefault();
    }
});
\`\`\``,
    },
    {
      id: 'im-3-5-ex-5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Skriv JavaScript som lager en teller. Siden har en <span> med id "teller" (starter på 0) og to knapper: "Øk" (+1) og "Nullstill" (tilbake til 0). Oppdater teksten i span-elementet ved klikk.',
      solution: `\`\`\`javascript
let antall = 0;
const tellerElement = document.querySelector("#teller");
const okKnapp = document.querySelector("#ok");
const nullstillKnapp = document.querySelector("#nullstill");

okKnapp.addEventListener("click", function() {
    antall++;
    tellerElement.textContent = antall;
});

nullstillKnapp.addEventListener("click", function() {
    antall = 0;
    tellerElement.textContent = antall;
});
\`\`\``,
    },
    {
      id: 'im-3-5-ex-6',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er forskjellen mellom `textContent` og `innerHTML`?',
      options: [
        { id: 'a', text: 'Det er ingen forskjell', isCorrect: false, feedback: 'De behandler innholdet forskjellig.' },
        { id: 'b', text: 'textContent setter ren tekst, innerHTML kan inneholde HTML-kode', isCorrect: true },
        { id: 'c', text: 'innerHTML er raskere enn textContent', isCorrect: false, feedback: 'textContent er faktisk raskere fordi den ikke trenger å parse HTML.' },
        { id: 'd', text: 'textContent kan bare brukes på <p>-elementer', isCorrect: false, feedback: 'textContent kan brukes på alle elementer.' },
      ],
      solution: 'textContent setter eller henter ren tekst og ignorerer HTML-tagger. innerHTML tolker innholdet som HTML, slik at du kan legge inn elementer. Bruk textContent for sikkerhet (unngår XSS-angrep) med mindre du trenger HTML.',
    },
  ],
};

// ============================================================================
// Kapittel 3.6: Tilgjengelighet og universell utforming
// ============================================================================

export const CHAPTER_IM_VG1_3_6: TextbookChapter = {
  id: 'im-vg1-3-6',
  courseId: 'im-vg1',
  chapterNumber: '3.6',
  title: 'Tilgjengelighet og universell utforming',
  description: 'Lær å lage nettsider som er tilgjengelige for alle – WCAG-retningslinjer, ARIA, tastaturnavigasjon og fargekontrast.',
  estimatedMinutes: 50,
  prevChapter: 'im-vg1-3-5',
  nextChapter: 'im-vg1-3-7',
  competenceGoals: [
    'utvikle digitale produkter som følger krav til universell utforming',
    'bruke WCAG-retningslinjer og ARIA-attributter for tilgjengelighet',
    'teste og forbedre tilgjengeligheten til nettsider',
  ],
  keyTerms: [
    { term: 'Universell utforming', definition: 'Design av produkter og tjenester som kan brukes av alle mennesker, uavhengig av funksjonsevne, alder eller teknisk utstyr.' },
    { term: 'WCAG', definition: 'Web Content Accessibility Guidelines – internasjonale retningslinjer for tilgjengelighet på nett, med nivåene A, AA og AAA.' },
    { term: 'ARIA', definition: 'Accessible Rich Internet Applications – HTML-attributter som gir tilleggsinformasjon til hjelpeteknologi som skjermlesere.' },
    { term: 'Skjermleser', definition: 'Et hjelpemiddel som leser opp innholdet på skjermen for synshemmede brukere, f.eks. JAWS, NVDA eller VoiceOver.' },
    { term: 'Fargekontrast', definition: 'Forskjellen i lysstyrke mellom tekst og bakgrunn. WCAG krever et kontrastforhold på minst 4.5:1 for vanlig tekst.' },
  ],
  content: [
    {
      id: 'im-3-6-intro',
      type: 'text',
      content: `## Tilgjengelighet og universell utforming

Omtrent 15-20 % av befolkningen har en form for funksjonsnedsettelse. Noen er blinde og bruker skjermlesere, noen har nedsatt motorikk og navigerer med tastatur, og noen har fargeblindhet. **Universell utforming** betyr at nettsiden din skal fungere for alle.

I Norge er universell utforming av IKT-løsninger **lovpålagt** gjennom likestillings- og diskrimineringsloven. Nettsider må oppfylle WCAG 2.1 nivå AA.`,
    },
    {
      id: 'im-3-6-def-1',
      type: 'definition',
      title: 'WCAG – De fire prinsippene',
      content: `**WCAG** (Web Content Accessibility Guidelines) er organisert rundt fire prinsipper, kjent som **POUR**:

1. **Perceivable (Mulig å oppfatte)** – Innholdet må kunne oppfattes av alle sanser. Bilder trenger alternativ tekst, videoer trenger teksting.

2. **Operable (Mulig å betjene)** – Alle funksjoner må kunne brukes med tastatur. Ingenting bør bare fungere med mus.

3. **Understandable (Mulig å forstå)** – Innholdet og navigasjonen må være forståelig. Bruk klart språk og konsistent design.

4. **Robust (Robust)** – Innholdet må fungere med ulike nettlesere og hjelpeteknologier, både nå og i fremtiden.`,
    },
    {
      id: 'im-3-6-text-1',
      type: 'text',
      content: `### Semantisk HTML og alternativ tekst

Det viktigste du kan gjøre for tilgjengelighet er å bruke **riktige HTML-elementer**. Skjermlesere forstår semantiske elementer:

\`\`\`html
<!-- Dårlig tilgjengelighet -->
<div onclick="navigate()">Klikk her</div>
<div class="heading">Viktig tittel</div>

<!-- God tilgjengelighet -->
<button onclick="navigate()">Gå til neste side</button>
<h2>Viktig tittel</h2>
\`\`\`

Viktige prinsipper:
- Bruk \`<button>\` for klikkbare elementer, ikke \`<div>\`
- Bruk overskriftsnivåer (\`<h1>\`–\`<h6>\`) i riktig rekkefølge
- Bruk \`<nav>\`, \`<main>\`, \`<header>\`, \`<footer>\` for sideinndeling
- Gi alle bilder meningsfull \`alt\`-tekst
- Bruk \`<label>\` for alle skjemafelt

**Alternativ tekst for bilder:**

\`\`\`html
<!-- Dårlig: tom eller manglende alt-tekst -->
<img src="graf.png">
<img src="graf.png" alt="bilde">

<!-- God: beskrivende alt-tekst -->
<img src="graf.png" alt="Søylediagram som viser norsk BNP-vekst fra 2015 til 2024">

<!-- Dekorative bilder: tom alt-tekst -->
<img src="dekor.png" alt="">
\`\`\``,
    },
    {
      id: 'im-3-6-text-2',
      type: 'text',
      content: `### ARIA-attributter og tastaturnavigasjon

Når HTML ikke gir nok informasjon, bruker du **ARIA-attributter** for å hjelpe hjelpeteknologi:

\`\`\`html
<!-- aria-label: usynlig etikett -->
<button aria-label="Lukk dialogboks">X</button>

<!-- aria-expanded: forteller om en meny er åpen -->
<button aria-expanded="false" aria-controls="meny">Meny</button>
<nav id="meny" hidden>...</nav>

<!-- aria-live: varsler om dynamiske endringer -->
<div aria-live="polite" id="status">
    Skjemaet ble sendt!
</div>

<!-- role: beskriver elementets funksjon -->
<div role="alert">Feilmelding: Ugyldig e-post.</div>
\`\`\`

**Viktig regel**: Bruk alltid semantisk HTML først. ARIA er et supplement, ikke en erstatning.

### Tastaturnavigasjon

Alle interaktive elementer må kunne nås med tastaturet:

- **Tab** – flytt fokus til neste element
- **Shift+Tab** – flytt fokus bakover
- **Enter/Space** – aktiver knapper og lenker
- **Escape** – lukk dialoger og menyer

\`\`\`css
/* Synlig fokusindikator */
:focus {
    outline: 3px solid #005fcc;
    outline-offset: 2px;
}

/* ALDRI fjern fokusindikatoren! */
/* Feil: :focus { outline: none; } */
\`\`\``,
    },
    {
      id: 'im-3-6-text-3',
      type: 'text',
      content: `### Fargekontrast

Tekst må ha tilstrekkelig kontrast mot bakgrunnen for å være lesbar:

| WCAG-nivå | Vanlig tekst | Stor tekst (18px+) |
|-----------|-------------|-------------------|
| AA | Minst 4.5:1 | Minst 3:1 |
| AAA | Minst 7:1 | Minst 4.5:1 |

\`\`\`css
/* Dårlig kontrast – lysegrå på hvit */
.tekst { color: #aaa; background: #fff; } /* 2.3:1 – feiler */

/* God kontrast – mørk på lys */
.tekst { color: #333; background: #fff; } /* 12.6:1 – bestått */
\`\`\`

Bruk verktøy som **WebAIM Contrast Checker** for å sjekke kontrastforhold.

**Ikke stol bare på farge** for å formidle informasjon. Bruk også ikoner, tekst eller mønster:

\`\`\`html
<!-- Dårlig: bare farge -->
<span style="color: red;">Feil</span>

<!-- Bra: farge + ikon + tekst -->
<span style="color: red;">Feil: E-postadressen er ugyldig</span>
\`\`\``,
    },
    {
      id: 'im-3-6-example-1',
      type: 'example',
      title: 'Tilgjengelig navigasjonsmeny',
      content: `**Eksempel: Meny med tastaturstøtte og ARIA**

\`\`\`html
<nav aria-label="Hovednavigasjon">
    <button
        aria-expanded="false"
        aria-controls="nav-lenker"
        id="menyknapp"
    >
        Meny
    </button>
    <ul id="nav-lenker" hidden>
        <li><a href="/">Hjem</a></li>
        <li><a href="/om">Om oss</a></li>
        <li><a href="/kontakt">Kontakt</a></li>
    </ul>
</nav>
\`\`\`

\`\`\`javascript
const knapp = document.querySelector("#menyknapp");
const lenker = document.querySelector("#nav-lenker");

knapp.addEventListener("click", function() {
    const erApen = knapp.getAttribute("aria-expanded") === "true";
    knapp.setAttribute("aria-expanded", !erApen);
    lenker.hidden = erApen;
});
\`\`\`

Legg merke til: \`aria-label\` beskriver navigasjonen, \`aria-expanded\` forteller om menyen er åpen, og \`aria-controls\` kobler knappen til menyen.`,
    },
    {
      id: 'im-3-6-summary',
      type: 'text',
      content: `## Oppsummering

- **Universell utforming** er lovpålagt i Norge og betyr at nettsider skal fungere for alle
- **WCAG** har fire prinsipper: mulig å oppfatte, betjene, forstå og robust
- Bruk **semantisk HTML** som grunnlag for tilgjengelighet
- Gi bilder meningsfull **alt-tekst** og bruk \`<label>\` for skjemafelt
- **ARIA-attributter** gir tilleggsinformasjon til skjermlesere
- All funksjonalitet skal være tilgjengelig via **tastatur**
- Tekst må ha tilstrekkelig **fargekontrast** (minst 4.5:1 for AA)
- **Aldri fjern fokusindikatoren** (\`outline\`) på interaktive elementer`,
    },
  ],
  exercises: [
    {
      id: 'im-3-6-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er WCAG?',
      options: [
        { id: 'a', text: 'Et programmeringsspråk for tilgjengelighet', isCorrect: false, feedback: 'WCAG er retningslinjer, ikke et programmeringsspråk.' },
        { id: 'b', text: 'En type nettleser for synshemmede', isCorrect: false, feedback: 'Det er skjermlesere, ikke WCAG.' },
        { id: 'c', text: 'Internasjonale retningslinjer for tilgjengelighet på nett', isCorrect: true },
        { id: 'd', text: 'Et CSS-rammeverk', isCorrect: false, feedback: 'WCAG er retningslinjer, ikke et rammeverk.' },
      ],
      solution: 'WCAG (Web Content Accessibility Guidelines) er internasjonale retningslinjer som definerer hvordan nettinnhold bør utformes for å være tilgjengelig for alle, inkludert personer med funksjonsnedsettelser.',
    },
    {
      id: 'im-3-6-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er det minste kontrastforholdet WCAG AA krever for vanlig tekst?',
      options: [
        { id: 'a', text: '2:1', isCorrect: false, feedback: '2:1 er for lavt og vil gjøre teksten vanskelig å lese.' },
        { id: 'b', text: '3:1', isCorrect: false, feedback: '3:1 er kravet for stor tekst (18px+), ikke vanlig tekst.' },
        { id: 'c', text: '4.5:1', isCorrect: true },
        { id: 'd', text: '7:1', isCorrect: false, feedback: '7:1 er kravet for WCAG AAA, ikke AA.' },
      ],
      solution: 'WCAG AA krever et kontrastforhold på minst 4.5:1 for vanlig tekst. Stor tekst (18px/14px bold og over) har et lavere krav på 3:1.',
    },
    {
      id: 'im-3-6-ex-3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor man bør bruke `<button>` i stedet for `<div onclick="...">` for klikkbare elementer. Nevn minst tre grunner.',
      solution: '1) **Tastaturstøtte**: <button> kan aktiveres med Enter og Space automatisk, mens <div> ikke er fokusbar uten tabindex. 2) **Skjermlesere**: <button> annonseres som en knapp, mens <div> bare leses som tekst. 3) **Fokusindikator**: <button> får automatisk synlig fokus ved Tab-navigasjon. 4) **Semantikk**: <button> formidler riktig rolle og formål til nettleser og hjelpeteknologi.',
    },
    {
      id: 'im-3-6-ex-4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gjør følgende HTML tilgjengelig. Forklar hva du endret og hvorfor:\n\n```html\n<div class="bilde">\n    <img src="teamfoto.jpg">\n</div>\n<div onclick="sendSkjema()">\n    Send inn\n</div>\n<div class="feilmelding" style="color: red;">\n    Feltet er obligatorisk\n</div>\n```',
      solution: `\`\`\`html
<figure>
    <img src="teamfoto.jpg" alt="Teamet på fem personer samlet foran kontorbygget">
</figure>
<button onclick="sendSkjema()">
    Send inn
</button>
<div class="feilmelding" role="alert" style="color: red;">
    Feil: Feltet er obligatorisk
</div>
\`\`\`

Endringer: 1) La til beskrivende alt-tekst på bildet. 2) Byttet <div> til <button> for klikkbart element. 3) La til role="alert" og tydelig tekst på feilmeldingen slik at den annonseres av skjermlesere og ikke bare formidles med farge.`,
    },
    {
      id: 'im-3-6-ex-5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Lag HTML og JavaScript for en tilgjengelig accordion (utvidbar seksjon). Den skal ha en knapp som viser/skjuler innhold, med riktige ARIA-attributter som oppdateres dynamisk. Knappen skal fungere med tastatur.',
      solution: `\`\`\`html
<div class="accordion">
    <button
        aria-expanded="false"
        aria-controls="panel-1"
        class="accordion-knapp"
    >
        Hva er universell utforming?
    </button>
    <div id="panel-1" role="region" hidden>
        <p>Universell utforming betyr at produkter og tjenester
        skal kunne brukes av alle, uavhengig av funksjonsevne.</p>
    </div>
</div>
\`\`\`

\`\`\`javascript
document.querySelectorAll(".accordion-knapp").forEach(function(knapp) {
    knapp.addEventListener("click", function() {
        const erApen = knapp.getAttribute("aria-expanded") === "true";
        const panelId = knapp.getAttribute("aria-controls");
        const panel = document.getElementById(panelId);

        knapp.setAttribute("aria-expanded", !erApen);
        panel.hidden = erApen;
    });
});
\`\`\`

Knappen bruker aria-expanded for å indikere status, aria-controls for å koble til panelet, og hidden-attributtet for å skjule/vise innholdet.`,
    },
  ],
};

// ============================================================================
// Kapittel 3.7: Publisering og versjonskontroll
// ============================================================================

export const CHAPTER_IM_VG1_3_7: TextbookChapter = {
  id: 'im-vg1-3-7',
  courseId: 'im-vg1',
  chapterNumber: '3.7',
  title: 'Publisering og versjonskontroll',
  description: 'Lær å publisere nettsider på internett og bruke Git og GitHub for versjonskontroll og samarbeid.',
  estimatedMinutes: 55,
  prevChapter: 'im-vg1-3-6',
  nextChapter: 'im-vg1-4-1',
  competenceGoals: [
    'publisere nettsider ved hjelp av ulike vertsløsninger',
    'bruke versjonskontroll med Git for å spore endringer',
    'samarbeide om kode ved hjelp av GitHub',
  ],
  keyTerms: [
    { term: 'Webhosting', definition: 'En tjeneste som lagrer nettsidefilene dine på en tjener slik at de er tilgjengelige på internett, f.eks. GitHub Pages, Netlify eller Vercel.' },
    { term: 'Git', definition: 'Et versjonskontrollsystem som sporer endringer i filer over tid, slik at du kan gå tilbake til tidligere versjoner og samarbeide med andre.' },
    { term: 'Repository (repo)', definition: 'En mappe som Git overvåker, med full historikk over alle endringer som er gjort i filene.' },
    { term: 'Commit', definition: 'Et øyeblikksbilde av alle filene i et repository på et bestemt tidspunkt, med en melding som beskriver endringene.' },
    { term: 'GitHub', definition: 'En nettbasert plattform for å lagre Git-repositorier i skyen, samarbeide med andre og publisere nettsider.' },
  ],
  content: [
    {
      id: 'im-3-7-intro',
      type: 'text',
      content: `## Publisering og versjonskontroll

Du har laget en nettside med HTML, CSS og JavaScript – men den finnes bare på din egen datamaskin. For at andre skal se den, må du **publisere** den på en tjener. Og for å holde orden på endringene du gjør underveis, bruker du **versjonskontroll** med Git.

I dette kapittelet lærer du å bruke Git, GitHub og ulike vertsløsninger for å publisere nettsider.`,
    },
    {
      id: 'im-3-7-def-1',
      type: 'definition',
      title: 'Versjonskontroll med Git',
      content: `**Git** er et versjonskontrollsystem som lar deg:

- **Spore endringer** – se hva som ble endret, av hvem og når
- **Gå tilbake** – angre endringer ved å gå tilbake til en tidligere versjon
- **Eksperimentere** – prøve nye ting i en gren (branch) uten å ødelegge hovedkoden
- **Samarbeide** – flere kan jobbe på samme prosjekt uten å overskrive hverandres arbeid

Git lagrer en komplett historikk av prosjektet ditt, som et uendelig antall lagringspunkter i et dataspill.`,
    },
    {
      id: 'im-3-7-text-1',
      type: 'text',
      content: `### Grunnleggende Git-kommandoer

Her er de viktigste kommandoene du trenger:

\`\`\`bash
# Sette opp Git (gjøres en gang)
git config --global user.name "Kari Nordmann"
git config --global user.email "kari@example.com"

# Starte et nytt repository
git init

# Se status – hvilke filer er endret?
git status

# Legge til filer til neste commit (staging)
git add filnavn.html        # en fil
git add .                    # alle endrede filer

# Lagre et øyeblikksbilde (commit)
git commit -m "Legg til kontaktskjema på forsiden"

# Se historikken
git log --oneline
\`\`\`

### Arbeidsflyten i Git

Git har tre soner:

1. **Working directory** – filene du redigerer
2. **Staging area** – filer som er klare for neste commit (\`git add\`)
3. **Repository** – lagrede øyeblikksbilder (\`git commit\`)

\`\`\`
Redigere --> git add --> git commit --> Lagret i historikk
\`\`\``,
    },
    {
      id: 'im-3-7-text-2',
      type: 'text',
      content: `### GitHub og grener

**GitHub** er en plattform der du lagrer Git-repositorier online. Det lar deg:

- Dele kode med andre
- Samarbeide via **pull requests**
- Publisere nettsider med **GitHub Pages**

\`\`\`bash
# Koble lokalt repository til GitHub
git remote add origin https://github.com/brukernavn/prosjekt.git

# Laste opp til GitHub (push)
git push -u origin main

# Hente andres endringer (pull)
git pull origin main
\`\`\`

**Grener (branches)** lar deg jobbe med nye funksjoner uten å påvirke hovedkoden:

\`\`\`bash
# Lage en ny gren
git branch ny-funksjon

# Bytte til grenen
git checkout ny-funksjon

# Gjøre endringer og committe
git add .
git commit -m "Legg til bildegalleri"

# Bytte tilbake og flette inn endringene
git checkout main
git merge ny-funksjon
\`\`\``,
    },
    {
      id: 'im-3-7-text-3',
      type: 'text',
      content: `### Publisering av nettsider

Det finnes flere måter å publisere nettsider gratis:

**GitHub Pages** – Publiser direkte fra et GitHub-repository:
1. Lag et repository på GitHub
2. Push HTML/CSS/JS-filene dine
3. Gå til Settings, deretter Pages, velg gren og Save
4. Nettsiden er live på \`brukernavn.github.io/prosjekt\`

**Netlify** – Dra-og-slipp eller koble til GitHub:
1. Gå til netlify.com og logg inn
2. Dra prosjektmappen til nettsiden, eller koble til GitHub
3. Nettsiden publiseres automatisk ved hver push

**Vercel** – Optimalisert for moderne rammeverk:
1. Koble GitHub-repositoriet til vercel.com
2. Vercel bygger og publiserer automatisk
3. Perfekt for Next.js, React og lignende

### .gitignore

Noen filer bør **ikke** legges inn i Git (passord, bygde filer, avhengigheter):

\`\`\`
# .gitignore
node_modules/
.env
.DS_Store
dist/
*.log
\`\`\``,
    },
    {
      id: 'im-3-7-example-1',
      type: 'example',
      title: 'Publisere med GitHub Pages',
      content: `**Eksempel: Fra lokal mappe til live nettside**

\`\`\`bash
# 1. Initialiser Git i prosjektmappen
cd mitt-prosjekt
git init

# 2. Legg til alle filer
git add .

# 3. Lag første commit
git commit -m "Første versjon av nettsiden"

# 4. Koble til GitHub (lag repo på github.com først)
git remote add origin https://github.com/kari/min-nettside.git

# 5. Push til GitHub
git push -u origin main
\`\`\`

Deretter i GitHub:
1. Gå til repositoriet, Settings, Pages
2. Under Source velger du grenen **main** og mappen **/ (root)**
3. Klikk **Save**
4. Etter noen minutter er nettsiden live på: \`https://kari.github.io/min-nettside\`

Hver gang du gjør \`git push\`, oppdateres nettsiden automatisk!`,
    },
    {
      id: 'im-3-7-summary',
      type: 'text',
      content: `## Oppsummering

- **Git** er et versjonskontrollsystem som sporer alle endringer i filene dine
- Arbeidsflyten er: redigere, \`git add\` (staging), \`git commit\` (lagre)
- **GitHub** lagrer repositorier i skyen og gir verktøy for samarbeid
- **Grener** (branches) lar deg eksperimentere uten å påvirke hovedkoden
- **GitHub Pages**, **Netlify** og **Vercel** er gratis tjenester for å publisere nettsider
- \`.gitignore\` angir filer som Git skal ignorere (passord, avhengigheter, bygde filer)
- Gode commit-meldinger beskriver **hva** som ble endret og **hvorfor**`,
    },
  ],
  exercises: [
    {
      id: 'im-3-7-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva gjør kommandoen `git add .`?',
      options: [
        { id: 'a', text: 'Lager et nytt repository', isCorrect: false, feedback: 'Det gjør git init.' },
        { id: 'b', text: 'Legger alle endrede filer til staging area', isCorrect: true },
        { id: 'c', text: 'Lagrer endringene i historikken', isCorrect: false, feedback: 'Det gjør git commit.' },
        { id: 'd', text: 'Sender filene til GitHub', isCorrect: false, feedback: 'Det gjør git push.' },
      ],
      solution: '`git add .` legger alle endrede og nye filer i gjeldende mappe (og undermapper) til staging area, slik at de er klare for neste commit.',
    },
    {
      id: 'im-3-7-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er riktig rekkefølge for å lagre og laste opp endringer til GitHub?',
      options: [
        { id: 'a', text: 'git commit, git add, git push', isCorrect: false, feedback: 'Du må legge til filer (add) før du committer.' },
        { id: 'b', text: 'git push, git add, git commit', isCorrect: false, feedback: 'Du kan ikke pushe før du har committet.' },
        { id: 'c', text: 'git add, git commit, git push', isCorrect: true },
        { id: 'd', text: 'git init, git push, git add', isCorrect: false, feedback: 'git init brukes bare ved oppstart av nytt repo.' },
      ],
      solution: 'Riktig rekkefølge er: 1) git add (legg til filer i staging), 2) git commit (lagre et øyeblikksbilde lokalt), 3) git push (last opp til GitHub).',
    },
    {
      id: 'im-3-7-ex-3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Skriv Git-kommandoene for å: 1) initialisere et nytt repository, 2) legge til alle filer, 3) lage en commit med meldingen "Første versjon av porteføljen", 4) koble til et GitHub-repository, og 5) pushe til GitHub.',
      solution: `\`\`\`bash
git init
git add .
git commit -m "Første versjon av porteføljen"
git remote add origin https://github.com/brukernavn/portefolje.git
git push -u origin main
\`\`\`

\`git init\` oppretter repositoriet, \`git add .\` stager alle filer, \`git commit\` lagrer lokalt, \`git remote add\` kobler til GitHub, og \`git push -u\` laster opp og setter opp sporingskobling.`,
    },
    {
      id: 'im-3-7-ex-4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva en branch (gren) er i Git og hvorfor det er nyttig. Gi et eksempel på en situasjon der du ville brukt en branch.',
      solution: 'En branch (gren) er en uavhengig utviklingslinje i Git som lar deg jobbe med endringer uten å påvirke hovedkoden (main). Det er nyttig fordi: 1) Du kan eksperimentere trygt – hvis noe feiler, påvirkes ikke hovedkoden. 2) Flere kan jobbe parallelt på ulike funksjoner. Eksempel: Du vil legge til et bildegalleri på nettsiden. Du lager en branch `git branch bildegalleri`, jobber der til alt fungerer, og fletter deretter inn i main med `git merge bildegalleri`.',
    },
    {
      id: 'im-3-7-ex-5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Beskriv steg for steg hvordan du publiserer en nettside med GitHub Pages. Start fra en ferdig prosjektmappe på datamaskinen din og forklar alle stegene til nettsiden er live.',
      solution: '1) Opprett et nytt repository på github.com (f.eks. "min-nettside"). 2) Åpne terminalen i prosjektmappen og kjør `git init`. 3) Lag en `.gitignore`-fil med filer som ikke skal inkluderes. 4) Kjør `git add .` for å stage alle filer. 5) Kjør `git commit -m "Første publisering"`. 6) Koble til GitHub: `git remote add origin https://github.com/brukernavn/min-nettside.git`. 7) Push: `git push -u origin main`. 8) Gå til repositoriet på GitHub, Settings, Pages. 9) Velg Source: Deploy from branch, velg main og / (root). 10) Klikk Save. 11) Vent noen minutter – nettsiden er nå live på `brukernavn.github.io/min-nettside`. Hver gang du pusher nye endringer, oppdateres nettsiden automatisk.',
    },
  ],
};

// ============================================================================
// Eksporter alle delkapitler
// ============================================================================

export const IM_VG1_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_IM_VG1_3_1,
  CHAPTER_IM_VG1_3_2,
  CHAPTER_IM_VG1_3_3,
  CHAPTER_IM_VG1_3_4,
  CHAPTER_IM_VG1_3_5,
  CHAPTER_IM_VG1_3_6,
  CHAPTER_IM_VG1_3_7,
];
