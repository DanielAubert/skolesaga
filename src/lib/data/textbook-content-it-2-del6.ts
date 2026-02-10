/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Informasjonsteknologi 2 (IT 2) VG3
 *
 * Seksjon 6: Webutvikling og brukeropplevelse (Kapittel 6.1–6.5)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ========================================
// KAPITTEL 6.1: Moderne webutvikling
// ========================================

export const CHAPTER_IT_2_6_1: TextbookChapter = {
  id: 'it-2-6-1',
  courseId: 'it-2',
  title: 'Moderne webutvikling',
  chapterNumber: '6.1',
  section: 'Del 6: Webutvikling og brukeropplevelse',
  content: [
    {
      id: 'it2-6-1-intro',
      type: 'text',
      title: 'Introduksjon',
      content: `Webutvikling har utviklet seg enormt de siste årene. Det som en gang var statiske HTML-sider med litt CSS og JavaScript, er nå komplekse applikasjoner som kan konkurrere med tradisjonelle desktop-programmer.

I dette kapittelet skal vi se på hvordan moderne webutvikling fungerer, hvilke verktøy og rammeverk som brukes, og hva som skiller frontend fra backend.`
    },
    {
      id: 'it2-6-1-theory-frontend-backend',
      type: 'text',
      title: 'Frontend vs Backend',
      content: `**Frontend** er alt brukeren ser og samhandler med i nettleseren:
- HTML-struktur
- CSS-styling
- JavaScript for interaktivitet
- Grafikk, animasjoner, skjemaer

**Backend** kjører på serveren og håndterer:
- Datalagring (databaser)
- Forretningslogikk
- Autentisering og sikkerhet
- API-er som frontend kommuniserer med

**Fullstack-utviklere** jobber med både frontend og backend.`
    },
    {
      id: 'it2-6-1-example-traditional',
      type: 'example',
      title: 'Tradisjonell web vs moderne web',
      content: `**Tradisjonell webapplikasjon:**
Når brukeren klikker på en lenke eller sender inn et skjema, laster hele siden på nytt. Serveren genererer ny HTML for hver forespørsel.

**Moderne webapplikasjon (SPA - Single Page Application):**
Siden laster én gang. Deretter henter JavaScript data fra serveren (vanligvis JSON) og oppdaterer bare deler av siden dynamisk.

**Fordeler med SPA:**
- Raskere opplevelse (ingen full sidelasting)
- Mer app-lignende oppførsel
- Bedre brukeropplevelse

**Ulemper:**
- Krever mer JavaScript-kunnskap
- Kan være vanskeligere å optimalisere for søkemotorer (SEO)
- Krever mer kompleks arkitektur`
    },
    {
      id: 'it2-6-1-theory-frameworks',
      type: 'text',
      title: 'Rammeverk og biblioteker',
      content: `**Frontend-rammeverk:**

**React** (bibliotek fra Meta/Facebook)
- Komponentbasert
- Mest populære valget
- Stort økosystem

**Vue.js**
- Enklere å lære enn React
- God dokumentasjon
- Fleksibel

**Angular** (fra Google)
- Komplett rammeverk
- Brukes ofte i store bedrifter
- Bratt læringskurve

**Backend-rammeverk:**

**Flask** (Python)
- Lettvekts
- God for læring og små prosjekter

**Django** (Python)
- Mer omfattende
- Innebygd admin-panel og ORM

**Express** (Node.js/JavaScript)
- Minimalistisk
- Fleksibel

**Spring Boot** (Java)
- Kraftig
- Bedriftsstandard`
    },
    {
      id: 'it2-6-1-example-npm',
      type: 'example',
      title: 'npm og pakkehåndtering',
      content: `**npm** (Node Package Manager) brukes til å installere JavaScript-biblioteker.

**Installere et bibliotek:**
\`\`\`bash
npm install react
npm install express
\`\`\`

**package.json** holder oversikt over avhengigheter:
\`\`\`json
{
  "name": "mitt-prosjekt",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.2.0",
    "express": "^4.18.2"
  },
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
\`\`\`

**Installere alle avhengigheter:**
\`\`\`bash
npm install
\`\`\`

Dette er essensielt for moderne webutvikling hvor prosjekter kan ha hundrevis av avhengigheter.`
    },
    {
      id: 'it2-6-1-example-project-structure',
      type: 'example',
      title: 'Typisk prosjektstruktur',
      content: `**Fullstack webprosjekt:**
\`\`\`
mitt-prosjekt/
├── backend/
│   ├── app.py              # Flask-applikasjon
│   ├── models.py           # Databasemodeller
│   ├── routes.py           # API-ruter
│   └── requirements.txt    # Python-avhengigheter
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/     # React-komponenter
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json        # npm-avhengigheter
│   └── package-lock.json
├── database/
│   └── init.sql
└── README.md
\`\`\`

Denne separasjonen gjør det enklere å:
- Jobbe parallelt på frontend og backend
- Deploy delene separat
- Teste hver del isolert`
    },
    {
      id: 'it2-6-1-exercise-intro',
      type: 'text',
      title: 'Oppgaver',
      content: `Nå skal du løse oppgaver om moderne webutvikling, frontend/backend-arkitektur og verktøy.`
    }
  ],
  exercises: [
    {
      id: 'it2-6-1-ex-1',
      type: 'multiple-choice',
      question: 'Hva er hovedforskjellen mellom en tradisjonell webapplikasjon og en SPA (Single Page Application)?',
      options: [
        'SPA bruker kun HTML og CSS',
        'SPA laster hele siden på nytt for hver interaksjon',
        'SPA laster én gang og oppdaterer innhold dynamisk med JavaScript',
        'SPA krever ikke server'
      ],
      correctAnswer: 2,
      explanation: 'En SPA (Single Page Application) laster én gang, og deretter bruker JavaScript til å hente data og oppdatere deler av siden dynamisk uten full sidelasting.'
    },
    {
      id: 'it2-6-1-ex-2',
      type: 'multiple-choice',
      question: 'Hvilken del av en webapplikasjon håndterer datalagring og autentisering?',
      options: [
        'Frontend',
        'Backend',
        'CSS',
        'HTML'
      ],
      correctAnswer: 1,
      explanation: 'Backend kjører på serveren og håndterer datalagring, forretningslogikk, autentisering og sikkerhet.'
    },
    {
      id: 'it2-6-1-ex-3',
      type: 'multiple-choice',
      question: 'Hva brukes npm til?',
      options: [
        'Å skrive HTML-kode',
        'Å style nettsider med CSS',
        'Å installere og håndtere JavaScript-biblioteker',
        'Å kjøre Python-kode'
      ],
      correctAnswer: 2,
      explanation: 'npm (Node Package Manager) brukes til å installere og håndtere JavaScript-biblioteker og avhengigheter i prosjekter.'
    },
    {
      id: 'it2-6-1-ex-4',
      type: 'classic',
      question: 'Forklar hva en fullstack-utvikler gjør, og nevn eksempler på teknologier de jobber med på frontend og backend.',
      answer: `En fullstack-utvikler jobber med både frontend (brukergrensesnittet) og backend (serverside-logikk).

**Frontend-teknologier:**
- HTML, CSS, JavaScript
- Rammeverk som React, Vue.js eller Angular
- Responsivt design

**Backend-teknologier:**
- Python (Flask/Django), Node.js (Express), Java (Spring)
- Databaser (SQL/NoSQL)
- API-design og sikkerhet

Fullstack-utviklere kan bygge komplette webapplikasjoner fra brukergrensesnitt til database.`
    },
    {
      id: 'it2-6-1-ex-5',
      type: 'classic',
      question: 'Nevn to fordeler og én ulempe med Single Page Applications (SPA) sammenlignet med tradisjonelle webapplikasjoner.',
      answer: `**Fordeler:**
1. Raskere brukeropplevelse - siden slipper å laste på nytt ved hver interaksjon
2. Mer app-lignende oppførsel - føles mer responsiv og moderne

**Ulempe:**
1. Kan være vanskeligere å optimalisere for søkemotorer (SEO) siden innholdet genereres dynamisk med JavaScript

Andre mulige ulemper: krever mer JavaScript-kunnskap, kan ha lengre initial lastetid.`
    },
    {
      id: 'it2-6-1-ex-6',
      type: 'classic',
      question: 'Se på denne prosjektstrukturen:\n\n```\nwebapp/\n├── backend/\n│   ├── app.py\n│   └── requirements.txt\n├── frontend/\n│   ├── src/\n│   └── package.json\n└── README.md\n```\n\nHvilken fil inneholder oversikt over Python-avhengigheter? Hvilken fil inneholder oversikt over JavaScript-avhengigheter?',
      answer: `**Python-avhengigheter:** requirements.txt (i backend-mappen)
**JavaScript-avhengigheter:** package.json (i frontend-mappen)

requirements.txt lister Python-pakker som kan installeres med pip, mens package.json lister npm-pakker for JavaScript/Node.js.`
    },
    {
      id: 'it2-6-1-ex-7',
      type: 'classic',
      question: 'Forklar forskjellen mellom React, Vue.js og Angular. Hvilket av disse er egentlig et bibliotek og ikke et fullstendig rammeverk?',
      answer: `**React** er teknisk sett et bibliotek (ikke et fullstendig rammeverk). Det fokuserer på UI-komponenter og krever ofte tilleggsbiblioteker for routing, state management, etc. Laget av Meta/Facebook.

**Vue.js** er et progressivt rammeverk som er enklere å lære enn React og Angular. Det har god dokumentasjon og er fleksibelt.

**Angular** er et komplett rammeverk fra Google med alt innebygd (routing, forms, HTTP, etc.). Det har en brattere læringskurve men er kraftig for store applikasjoner.

React er mest populært, men Vue.js er ofte lettere for nybegynnere.`
    },
    {
      id: 'it2-6-1-ex-8',
      type: 'classic',
      question: 'Du skal starte et nytt webprosjekt med Flask backend og vanlig JavaScript frontend. Skriv kommandoene du ville brukt for å:\na) Installere Flask med pip\nb) Opprette en package.json-fil for frontend',
      answer: `**a) Installere Flask:**
\`\`\`bash
pip install flask
\`\`\`

Eller for å lagre i requirements.txt:
\`\`\`bash
pip install flask
pip freeze > requirements.txt
\`\`\`

**b) Opprette package.json:**
\`\`\`bash
npm init
\`\`\`

Dette starter en interaktiv prosess der du kan spesifisere prosjektnavn, versjon, osv. For å hoppe over spørsmålene og bruke standardverdier:
\`\`\`bash
npm init -y
\`\`\``
    }
  ],
  keyTerms: [
    { term: 'Frontend', definition: 'Delen av en webapplikasjon som brukeren ser og samhandler med i nettleseren' },
    { term: 'Backend', definition: 'Serverside-delen av en applikasjon som håndterer logikk, data og sikkerhet' },
    { term: 'SPA (Single Page Application)', definition: 'Webapplikasjon som laster én gang og oppdaterer innhold dynamisk uten full sidelasting' },
    { term: 'Fullstack', definition: 'Utviklere som jobber med både frontend og backend' },
    { term: 'npm', definition: 'Node Package Manager - verktøy for å installere og håndtere JavaScript-biblioteker' },
    { term: 'Rammeverk', definition: 'Strukturert samling av verktøy og biblioteker for å utvikle applikasjoner' },
    { term: 'API', definition: 'Application Programming Interface - grensesnitt som lar frontend kommunisere med backend' },
    { term: 'package.json', definition: 'Fil som holder oversikt over npm-avhengigheter i et JavaScript-prosjekt' }
  ],
  estimatedMinutes: 55,
  prevChapter: 'it-2-5-5',
  nextChapter: 'it-2-6-2'
};

// ========================================
// KAPITTEL 6.2: JavaScript og DOM-manipulering
// ========================================

export const CHAPTER_IT_2_6_2: TextbookChapter = {
  id: 'it-2-6-2',
  courseId: 'it-2',
  title: 'JavaScript og DOM-manipulering',
  chapterNumber: '6.2',
  section: 'Del 6: Webutvikling og brukeropplevelse',
  content: [
    {
      id: 'it2-6-2-intro',
      type: 'text',
      title: 'Introduksjon',
      content: `JavaScript er motoren bak moderne webapplikasjoner. Ved å manipulere DOM (Document Object Model) kan vi endre HTML og CSS dynamisk, hente data fra servere, og skape interaktive brukeropplevelser.

I dette kapittelet skal vi se på avansert JavaScript, asynkron programmering med fetch og async/await, og hvordan vi bygger dynamiske grensesnitt.`
    },
    {
      id: 'it2-6-2-theory-dom',
      type: 'text',
      title: 'DOM (Document Object Model)',
      content: `**DOM** er en trestruktur-representasjon av HTML-dokumentet som JavaScript kan manipulere.

**Vanlige DOM-operasjoner:**

**Hente elementer:**
\`\`\`javascript
const element = document.getElementById('minId');
const elementer = document.querySelectorAll('.minKlasse');
\`\`\`

**Endre innhold:**
\`\`\`javascript
element.textContent = 'Ny tekst';
element.innerHTML = '<strong>Bold tekst</strong>';
\`\`\`

**Endre styling:**
\`\`\`javascript
element.style.color = 'red';
element.classList.add('aktiv');
element.classList.remove('skjult');
\`\`\`

**Opprette og legge til elementer:**
\`\`\`javascript
const nyDiv = document.createElement('div');
nyDiv.textContent = 'Hei!';
document.body.appendChild(nyDiv);
\`\`\``
    },
    {
      id: 'it2-6-2-example-event-handling',
      type: 'example',
      title: 'Event-håndtering',
      content: `**Lytte til klikk:**
\`\`\`javascript
const knapp = document.getElementById('minKnapp');

knapp.addEventListener('click', function() {
  console.log('Knappen ble klikket!');
  this.textContent = 'Klikket!';
});
\`\`\`

**Moderne syntaks med arrow function:**
\`\`\`javascript
knapp.addEventListener('click', () => {
  console.log('Klikket!');
});
\`\`\`

**Hindre standard oppførsel:**
\`\`\`javascript
const skjema = document.getElementById('mittSkjema');

skjema.addEventListener('submit', (e) => {
  e.preventDefault(); // Stopp vanlig form-submit

  const data = new FormData(skjema);
  console.log('Sender:', Object.fromEntries(data));
});
\`\`\`

**Andre events:**
- \`mouseover\`, \`mouseout\`
- \`keydown\`, \`keyup\`
- \`change\`, \`input\`
- \`load\`, \`scroll\``
    },
    {
      id: 'it2-6-2-theory-fetch',
      type: 'text',
      title: 'Fetch API og asynkron JavaScript',
      content: `**Fetch** brukes til å hente data fra servere (API-er) uten å laste siden på nytt.

**Hvorfor asynkront?**
Å hente data over nettverk tar tid. Vi vil ikke blokkere hele programmet mens vi venter på svar.

**Promises:**
JavaScript bruker "promises" for asynkrone operasjoner:
- **pending**: Operasjonen pågår
- **fulfilled**: Operasjonen fullført (resolved)
- **rejected**: Operasjonen feilet

**Fetch returnerer en promise:**
\`\`\`javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log('Mottatt data:', data);
  })
  .catch(error => {
    console.error('Feil:', error);
  });
\`\`\``
    },
    {
      id: 'it2-6-2-example-async-await',
      type: 'example',
      title: 'async/await - Moderne asynkron kode',
      content: `**async/await** gjør asynkron kode mer lesbar:

\`\`\`javascript
async function hentBrukerdata() {
  try {
    const response = await fetch('https://api.example.com/users');

    if (!response.ok) {
      throw new Error('Nettverksforespørsel feilet');
    }

    const data = await response.json();
    console.log('Brukere:', data);
    return data;

  } catch (error) {
    console.error('Feil ved henting:', error);
  }
}

// Kalle funksjonen
hentBrukerdata();
\`\`\`

**Forklaring:**
- \`async\` markerer funksjonen som asynkron
- \`await\` pauser funksjonen til promise er løst
- \`try/catch\` håndterer feil
- Koden ser mer synkron ut, men er fortsatt asynkron`
    },
    {
      id: 'it2-6-2-example-dynamic-content',
      type: 'example',
      title: 'Bygge dynamisk innhold fra API',
      content: `**Komplett eksempel - Vise brukerliste fra API:**

**HTML:**
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>Brukerliste</title>
</head>
<body>
  <h1>Brukere</h1>
  <button id="hentKnapp">Hent brukere</button>
  <div id="loading" style="display:none;">Laster...</div>
  <ul id="brukerliste"></ul>

  <script src="app.js"></script>
</body>
</html>
\`\`\`

**JavaScript (app.js):**
\`\`\`javascript
const hentKnapp = document.getElementById('hentKnapp');
const loading = document.getElementById('loading');
const liste = document.getElementById('brukerliste');

hentKnapp.addEventListener('click', async () => {
  // Vis loading
  loading.style.display = 'block';
  liste.innerHTML = '';

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const brukere = await response.json();

    // Skjul loading
    loading.style.display = 'none';

    // Vis brukere
    brukere.forEach(bruker => {
      const li = document.createElement('li');
      li.innerHTML = \`
        <strong>\${bruker.name}</strong><br>
        Email: \${bruker.email}<br>
        By: \${bruker.address.city}
      \`;
      liste.appendChild(li);
    });

  } catch (error) {
    loading.style.display = 'none';
    liste.innerHTML = '<li style="color:red;">Feil ved henting av data</li>';
    console.error(error);
  }
});
\`\`\`

Dette viser moderne mønstre: fetch, async/await, DOM-manipulering og feilhåndtering.`
    },
    {
      id: 'it2-6-2-example-post-data',
      type: 'example',
      title: 'Sende data til server med POST',
      content: `**Sende JSON-data til API:**

\`\`\`javascript
async function opprettBruker(brukerdata) {
  try {
    const response = await fetch('https://api.example.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(brukerdata)
    });

    if (!response.ok) {
      throw new Error('Kunne ikke opprette bruker');
    }

    const nyBruker = await response.json();
    console.log('Opprettet:', nyBruker);
    return nyBruker;

  } catch (error) {
    console.error('Feil:', error);
    throw error;
  }
}

// Bruk funksjonen
opprettBruker({
  navn: 'Ola Nordmann',
  email: 'ola@example.com',
  alder: 25
});
\`\`\`

**Nøkkelpunkter:**
- \`method: 'POST'\` for å sende data
- \`headers\` spesifiserer dataformat
- \`body\` inneholder data (konvertert til JSON med \`JSON.stringify\`)
- Serveren responderer vanligvis med den opprettede ressursen`
    },
    {
      id: 'it2-6-2-exercise-intro',
      type: 'text',
      title: 'Oppgaver',
      content: `Nå skal du løse oppgaver om DOM-manipulering, fetch API og asynkron JavaScript.`
    }
  ],
  exercises: [
    {
      id: 'it2-6-2-ex-1',
      type: 'multiple-choice',
      question: 'Hva er DOM (Document Object Model)?',
      options: [
        'Et CSS-rammeverk for styling',
        'En trestruktur-representasjon av HTML som JavaScript kan manipulere',
        'En database for websider',
        'Et Python-bibliotek'
      ],
      correctAnswer: 1,
      explanation: 'DOM (Document Object Model) er en trestruktur-representasjon av HTML-dokumentet som JavaScript kan lese og endre.'
    },
    {
      id: 'it2-6-2-ex-2',
      type: 'multiple-choice',
      question: 'Hva gjør `e.preventDefault()` i en event handler?',
      options: [
        'Sletter elementet fra DOM',
        'Hindrer default oppførsel (f.eks. at et skjema sender og laster siden på nytt)',
        'Stopper all JavaScript-kjøring',
        'Endrer fargen på elementet'
      ],
      correctAnswer: 1,
      explanation: '`e.preventDefault()` hindrer standard oppførsel for et event, som at et skjema sender og laster siden på nytt.'
    },
    {
      id: 'it2-6-2-ex-3',
      type: 'multiple-choice',
      question: 'Hva returnerer `fetch()` funksjonen?',
      options: [
        'Direkte JSON-data',
        'En Promise',
        'En streng',
        'Et HTML-element'
      ],
      correctAnswer: 1,
      explanation: '`fetch()` returnerer en Promise som resolves til en Response-objekt når forespørselen fullføres.'
    },
    {
      id: 'it2-6-2-ex-4',
      type: 'classic',
      question: 'Forklar forskjellen mellom `textContent` og `innerHTML` når du setter innhold i et HTML-element.',
      answer: `**textContent:**
- Setter ren tekst
- HTML-koder tolkes som tekst (vises som tekst, ikke som HTML)
- Sikrere (ingen risiko for XSS-angrep)
- Eksempel: \`element.textContent = '<b>Test</b>'\` viser bokstavelig "<b>Test</b>"

**innerHTML:**
- Setter HTML-innhold
- HTML-koder tolkes og rendres
- Kan være farlig med brukerdata (XSS-risiko)
- Eksempel: \`element.innerHTML = '<b>Test</b>'\` viser **Test** (bold)

Bruk \`textContent\` for sikker tekst, \`innerHTML\` når du trenger faktisk HTML (og dataen er trygg).`
    },
    {
      id: 'it2-6-2-ex-5',
      type: 'classic',
      question: 'Skriv JavaScript-kode som:\na) Henter elementet med id "resultat"\nb) Endrer tekstinnholdet til "Lastet!"\nc) Legger til CSS-klassen "suksess"',
      answer: `\`\`\`javascript
// a) Hente element
const resultat = document.getElementById('resultat');

// b) Endre tekst
resultat.textContent = 'Lastet!';

// c) Legge til klasse
resultat.classList.add('suksess');
\`\`\`

Alternativt som én kjede (mindre lesbart):
\`\`\`javascript
document.getElementById('resultat').textContent = 'Lastet!';
document.getElementById('resultat').classList.add('suksess');
\`\`\``
    },
    {
      id: 'it2-6-2-ex-6',
      type: 'classic',
      question: 'Hva er forskjellen mellom Promise-syntaks (.then/.catch) og async/await? Gi et eksempel på begge som henter data fra "https://api.example.com/data".',
      answer: `**Promise-syntaks (.then/.catch):**
\`\`\`javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Feil:', error));
\`\`\`

**async/await:**
\`\`\`javascript
async function hentData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Feil:', error);
  }
}

hentData();
\`\`\`

**Forskjell:**
async/await gjør koden mer lesbar og ser mer "synkron" ut, mens .then/.catch er mer "callback-lignende". Begge gjør det samme, men async/await er moderne praksis.`
    },
    {
      id: 'it2-6-2-ex-7',
      type: 'classic',
      question: 'Forklar hva denne koden gjør:\n\n```javascript\nconst knapp = document.querySelector("#sendKnapp");\nknapp.addEventListener("click", async () => {\n  const response = await fetch("/api/melding", {\n    method: "POST",\n    headers: { "Content-Type": "application/json" },\n    body: JSON.stringify({ tekst: "Hei!" })\n  });\n  const resultat = await response.json();\n  console.log(resultat);\n});\n```',
      answer: `**Koden gjør følgende:**

1. **Henter knappen** med id "sendKnapp" fra DOM
2. **Legger til en click-lytter** som er asynkron (async)
3. **Ved klikk:**
   - Sender en POST-forespørsel til "/api/melding"
   - Med JSON-data: \`{"tekst": "Hei!"}\`
   - Setter Content-Type header til "application/json"
4. **Venter på svar** (await response)
5. **Parser JSON** fra responsen
6. **Logger resultatet** til konsollen

Dette er et typisk mønster for å sende data til en server uten å laste siden på nytt.`
    },
    {
      id: 'it2-6-2-ex-8',
      type: 'classic',
      question: 'Skriv en async-funksjon `visProdukter()` som:\n1. Henter data fra "https://fakestoreapi.com/products" (et gratis test-API)\n2. Viser produktnavn for hvert produkt i en ul-liste med id "produktliste"\n3. Håndterer feil med try/catch',
      answer: `\`\`\`javascript
async function visProdukter() {
  const liste = document.getElementById('produktliste');

  try {
    // Hent produkter
    const response = await fetch('https://fakestoreapi.com/products');

    if (!response.ok) {
      throw new Error('Kunne ikke hente produkter');
    }

    const produkter = await response.json();

    // Tøm eksisterende liste
    liste.innerHTML = '';

    // Vis hvert produkt
    produkter.forEach(produkt => {
      const li = document.createElement('li');
      li.textContent = produkt.title;
      liste.appendChild(li);
    });

  } catch (error) {
    console.error('Feil:', error);
    liste.innerHTML = '<li style="color: red;">Kunne ikke laste produkter</li>';
  }
}

// Kall funksjonen
visProdukter();
\`\`\`

Denne funksjonen demonstrerer moderne beste praksis: async/await, feilhåndtering, og dynamisk DOM-manipulering.`
    }
  ],
  keyTerms: [
    { term: 'DOM', definition: 'Document Object Model - trestruktur som representerer HTML-dokumentet' },
    { term: 'Event handler', definition: 'Funksjon som kjøres når en hendelse (click, submit, etc.) skjer' },
    { term: 'Fetch API', definition: 'Moderne JavaScript-API for å gjøre HTTP-forespørsler' },
    { term: 'Promise', definition: 'JavaScript-objekt som representerer en asynkron operasjon' },
    { term: 'async/await', definition: 'Moderne syntaks for å håndtere asynkrone operasjoner' },
    { term: 'JSON', definition: 'JavaScript Object Notation - format for datautveksling' },
    { term: 'preventDefault()', definition: 'Metode for å hindre standard oppførsel av et event' },
    { term: 'querySelector', definition: 'Metode for å hente HTML-elementer med CSS-selektorer' }
  ],
  estimatedMinutes: 65,
  prevChapter: 'it-2-6-1',
  nextChapter: 'it-2-6-3'
};

// ========================================
// KAPITTEL 6.3: Backend med Python og Flask
// ========================================

export const CHAPTER_IT_2_6_3: TextbookChapter = {
  id: 'it-2-6-3',
  courseId: 'it-2',
  title: 'Backend med Python og Flask',
  chapterNumber: '6.3',
  section: 'Del 6: Webutvikling og brukeropplevelse',
  content: [
    {
      id: 'it2-6-3-intro',
      type: 'text',
      title: 'Introduksjon',
      content: `Flask er et lettvekts Python-rammeverk for webutvikling. Det er perfekt for å lære backend-utvikling fordi det er enkelt å komme i gang med, men kraftig nok for seriøse applikasjoner.

I dette kapittelet skal vi bygge en backend-applikasjon med Flask som håndterer ruter, templates, skjemaer og sessions.`
    },
    {
      id: 'it2-6-3-theory-flask-basics',
      type: 'text',
      title: 'Flask grunnleggende',
      content: `**Installasjon:**
\`\`\`bash
pip install flask
\`\`\`

**Minimal Flask-app:**
\`\`\`python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hjem():
    return 'Velkommen til min Flask-app!'

if __name__ == '__main__':
    app.run(debug=True)
\`\`\`

**Kjør appen:**
\`\`\`bash
python app.py
\`\`\`

Applikasjonen kjører nå på \`http://localhost:5000\`

**Nøkkelkonsepter:**
- \`@app.route()\` definerer URL-ruter
- Funksjonen returnerer innhold til brukeren
- \`debug=True\` gir bedre feilmeldinger og auto-reload`
    },
    {
      id: 'it2-6-3-example-routes',
      type: 'example',
      title: 'Ruter og URL-parametere',
      content: `**Ulike HTTP-metoder:**
\`\`\`python
from flask import Flask, request

app = Flask(__name__)

# GET (standard)
@app.route('/bruker')
def hent_bruker():
    return 'Henter bruker'

# POST
@app.route('/bruker', methods=['POST'])
def opprett_bruker():
    data = request.json
    return f'Oppretter bruker: {data}'

# PUT
@app.route('/bruker/<int:id>', methods=['PUT'])
def oppdater_bruker(id):
    return f'Oppdaterer bruker {id}'

# DELETE
@app.route('/bruker/<int:id>', methods=['DELETE'])
def slett_bruker(id):
    return f'Sletter bruker {id}'
\`\`\`

**URL-parametere:**
\`\`\`python
@app.route('/produkt/<int:produkt_id>')
def vis_produkt(produkt_id):
    return f'Viser produkt {produkt_id}'

@app.route('/bruker/<string:brukernavn>')
def vis_bruker(brukernavn):
    return f'Bruker: {brukernavn}'

# Query-parametere: /sok?q=flask
@app.route('/sok')
def sok():
    query = request.args.get('q', '')
    return f'Søker etter: {query}'
\`\`\``
    },
    {
      id: 'it2-6-3-theory-templates',
      type: 'text',
      title: 'Templates med Jinja2',
      content: `**Jinja2** er Flask sitt template-system som lar deg generere dynamisk HTML.

**Prosjektstruktur:**
\`\`\`
mitt-prosjekt/
├── app.py
├── templates/
│   ├── base.html
│   ├── hjem.html
│   └── produkt.html
└── static/
    ├── style.css
    └── script.js
\`\`\`

**Templates må ligge i mappen "templates"**

**Sende data til template:**
\`\`\`python
from flask import render_template

@app.route('/velkomst/<navn>')
def velkomst(navn):
    return render_template('velkomst.html', brukernavn=navn)
\`\`\`

**Template (velkomst.html):**
\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>Velkommen</title>
</head>
<body>
    <h1>Hei, {{ brukernavn }}!</h1>
</body>
</html>
\`\`\``
    },
    {
      id: 'it2-6-3-example-jinja',
      type: 'example',
      title: 'Jinja2 syntaks og funksjoner',
      content: `**Variabler:**
\`\`\`html
<h1>{{ tittel }}</h1>
<p>{{ beskrivelse }}</p>
\`\`\`

**Løkker:**
\`\`\`html
<ul>
{% for produkt in produkter %}
    <li>{{ produkt.navn }} - {{ produkt.pris }} kr</li>
{% endfor %}
</ul>
\`\`\`

**Betingelser:**
\`\`\`html
{% if bruker_innlogget %}
    <p>Velkommen tilbake!</p>
{% else %}
    <p>Vennligst logg inn</p>
{% endif %}
\`\`\`

**Template-arv (base.html):**
\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>{% block title %}Min side{% endblock %}</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
</head>
<body>
    <nav>
        <a href="/">Hjem</a>
        <a href="/om">Om</a>
    </nav>

    {% block content %}{% endblock %}

    <footer>© 2025 Min App</footer>
</body>
</html>
\`\`\`

**Child template (hjem.html):**
\`\`\`html
{% extends "base.html" %}

{% block title %}Hjemmeside{% endblock %}

{% block content %}
    <h1>Velkommen!</h1>
    <p>Dette er innholdet.</p>
{% endblock %}
\`\`\``
    },
    {
      id: 'it2-6-3-example-forms',
      type: 'example',
      title: 'Skjemaer og POST-data',
      content: `**HTML-skjema (kontakt.html):**
\`\`\`html
<form method="POST" action="/send-melding">
    <input type="text" name="navn" placeholder="Ditt navn" required>
    <input type="email" name="epost" placeholder="Din e-post" required>
    <textarea name="melding" placeholder="Din melding" required></textarea>
    <button type="submit">Send</button>
</form>
\`\`\`

**Flask route for å håndtere skjema:**
\`\`\`python
from flask import Flask, render_template, request, redirect, url_for, flash

@app.route('/kontakt')
def kontakt():
    return render_template('kontakt.html')

@app.route('/send-melding', methods=['POST'])
def send_melding():
    navn = request.form.get('navn')
    epost = request.form.get('epost')
    melding = request.form.get('melding')

    # Validering
    if not navn or not epost or not melding:
        flash('Alle felt må fylles ut', 'error')
        return redirect(url_for('kontakt'))

    # Lagre melding (database, e-post, etc.)
    print(f'Mottatt melding fra {navn} ({epost}): {melding}')

    flash('Melding sendt!', 'success')
    return redirect(url_for('kontakt'))
\`\`\`

**Flash-meldinger krever secret key:**
\`\`\`python
app.secret_key = 'din-hemmelige-noekkel-her'
\`\`\`

**Vise flash-meldinger i template:**
\`\`\`html
{% with messages = get_flashed_messages(with_categories=true) %}
  {% if messages %}
    {% for category, message in messages %}
      <div class="alert alert-{{ category }}">{{ message }}</div>
    {% endfor %}
  {% endif %}
{% endwith %}
\`\`\``
    },
    {
      id: 'it2-6-3-example-sessions',
      type: 'example',
      title: 'Sessions og brukerautentisering',
      content: `**Sessions** lar deg lagre brukerdata mellom forespørsler (f.eks. om noen er innlogget).

**Enkel innlogging:**
\`\`\`python
from flask import Flask, session, redirect, url_for, request, render_template

app = Flask(__name__)
app.secret_key = 'supersecretkey123'

# "Database" (hardkodet for eksempel)
BRUKERE = {
    'admin': 'passord123',
    'ola': 'test456'
}

@app.route('/')
def hjem():
    if 'brukernavn' in session:
        return f'Logget inn som: {session["brukernavn"]} <a href="/logout">Logg ut</a>'
    return 'Du er ikke logget inn. <a href="/login">Logg inn</a>'

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        brukernavn = request.form['brukernavn']
        passord = request.form['passord']

        if brukernavn in BRUKERE and BRUKERE[brukernavn] == passord:
            session['brukernavn'] = brukernavn
            return redirect(url_for('hjem'))
        else:
            return 'Ugyldig brukernavn eller passord'

    return '''
        <form method="post">
            <input type="text" name="brukernavn" placeholder="Brukernavn">
            <input type="password" name="passord" placeholder="Passord">
            <button type="submit">Logg inn</button>
        </form>
    '''

@app.route('/logout')
def logout():
    session.pop('brukernavn', None)
    return redirect(url_for('hjem'))
\`\`\`

**Viktig:**
- Sessions lagres i cookies (kryptert med secret_key)
- ALDRI hardkod passord i produksjon - bruk bcrypt/hashing
- Secret key bør hentes fra miljøvariabler`
    },
    {
      id: 'it2-6-3-exercise-intro',
      type: 'text',
      title: 'Oppgaver',
      content: `Nå skal du løse oppgaver om Flask, ruter, templates og sessions.`
    }
  ],
  exercises: [
    {
      id: 'it2-6-3-ex-1',
      type: 'multiple-choice',
      question: 'Hva gjør `@app.route("/bruker/<int:id>")` i Flask?',
      options: [
        'Lager en bruker med ID',
        'Definerer en rute som tar imot en heltalls-ID som parameter',
        'Sletter en bruker',
        'Redirecter til brukerside'
      ],
      correctAnswer: 1,
      explanation: '`@app.route("/bruker/<int:id>")` definerer en rute der `<int:id>` er en dynamisk parameter som må være et heltall.'
    },
    {
      id: 'it2-6-3-ex-2',
      type: 'multiple-choice',
      question: 'Hvilken mappe må templates ligge i for at Flask skal finne dem?',
      options: [
        'static/',
        'templates/',
        'views/',
        'html/'
      ],
      correctAnswer: 1,
      explanation: 'Flask ser etter templates i mappen "templates/" som standard. Dette kan konfigureres, men "templates/" er konvensjonen.'
    },
    {
      id: 'it2-6-3-ex-3',
      type: 'multiple-choice',
      question: 'Hva brukes `session` til i Flask?',
      options: [
        'Å lagre statiske filer',
        'Å lagre brukerdata mellom HTTP-forespørsler',
        'Å kjøre JavaScript',
        'Å validere skjemaer'
      ],
      correctAnswer: 1,
      explanation: '`session` i Flask brukes til å lagre brukerdata (som innloggingsstatus) mellom HTTP-forespørsler, lagret i krypterte cookies.'
    },
    {
      id: 'it2-6-3-ex-4',
      type: 'classic',
      question: 'Forklar forskjellen mellom GET og POST HTTP-metoder. Når bruker du hver?',
      answer: `**GET:**
- Brukes til å hente/lese data
- Parametere sendes i URL (synlige)
- Kan bokmerkes og caches
- Idempotent (samme resultat ved gjentatte kall)
- Eksempel: Søk, visning av sider

**POST:**
- Brukes til å sende/opprette data
- Data sendes i request body (ikke synlig i URL)
- Kan ikke bokmerkes
- Ikke idempotent (kan endre server-state)
- Eksempel: Skjema-innsending, opprette bruker, innlogging

**Tommelfingerregel:**
- GET for lesing
- POST for skriving/endring`
    },
    {
      id: 'it2-6-3-ex-5',
      type: 'classic',
      question: 'Skriv en Flask-rute som:\na) Lytter på `/produkt/<int:id>`\nb) Returnerer en string med produktets ID\nc) Håndterer både GET og POST',
      answer: `\`\`\`python
from flask import Flask, request

app = Flask(__name__)

@app.route('/produkt/<int:id>', methods=['GET', 'POST'])
def produkt(id):
    if request.method == 'POST':
        return f'POST: Oppdaterer produkt {id}'
    else:
        return f'GET: Viser produkt {id}'

if __name__ == '__main__':
    app.run(debug=True)
\`\`\`

Alternativt kan du også skille GET og POST i separate funksjoner med samme rute.`
    },
    {
      id: 'it2-6-3-ex-6',
      type: 'classic',
      question: 'Forklar hva Jinja2 template-arv er, og gi et eksempel på hvordan du bruker `{% extends %}` og `{% block %}`.',
      answer: `**Template-arv** lar deg lage en base-template med felles struktur (header, footer, navigation) som andre templates kan arve fra.

**base.html (forelder):**
\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>{% block title %}Min Side{% endblock %}</title>
</head>
<body>
    <header><h1>Min Nettside</h1></header>

    {% block content %}
    <!-- Innhold kommer her -->
    {% endblock %}

    <footer>© 2025</footer>
</body>
</html>
\`\`\`

**hjem.html (barn):**
\`\`\`html
{% extends "base.html" %}

{% block title %}Hjem{% endblock %}

{% block content %}
    <p>Velkommen til hjemmesiden!</p>
{% endblock %}
\`\`\`

Dette gir gjenbrukbar kode og konsistent design på tvers av sider.`
    },
    {
      id: 'it2-6-3-ex-7',
      type: 'classic',
      question: 'Hvorfor må du sette `app.secret_key` når du bruker sessions eller flash messages i Flask? Hva skjer hvis du ikke gjør det?',
      answer: `**Hvorfor:**
\`app.secret_key\` brukes til å kryptere session-data som lagres i cookies på klientsiden. Uten kryptering kunne brukere manipulere session-data (f.eks. endre sin bruker-ID eller rolle).

**Uten secret_key:**
Flask vil krasje med feilmelding når du prøver å bruke \`session\` eller \`flash()\`, fordi det krever kryptering.

**Eksempel:**
\`\`\`python
app.secret_key = 'supersecretkey123'
\`\`\`

**Beste praksis:**
Bruk en tilfeldig, lang streng (minst 24 tegn) og lagre den i en miljøvariabel, ikke i kildekoden:
\`\`\`python
import os
app.secret_key = os.environ.get('SECRET_KEY') or 'fallback-key-for-dev'
\`\`\``
    },
    {
      id: 'it2-6-3-ex-8',
      type: 'classic',
      question: 'Skriv en Flask-app med:\n1. En rute `/` som viser et skjema med navn-felt\n2. En POST-rute `/lagre` som mottar navnet og lagrer det i session\n3. Vis lagret navn på `/` hvis det finnes i session',
      answer: `\`\`\`python
from flask import Flask, render_template_string, request, session, redirect, url_for

app = Flask(__name__)
app.secret_key = 'hemmelig123'

@app.route('/', methods=['GET'])
def hjem():
    navn = session.get('navn', None)

    if navn:
        html = f'''
            <h1>Hei, {navn}!</h1>
            <a href="/logout">Glem meg</a>
        '''
    else:
        html = '''
            <h1>Hvem er du?</h1>
            <form method="POST" action="/lagre">
                <input type="text" name="navn" placeholder="Ditt navn" required>
                <button type="submit">Lagre</button>
            </form>
        '''

    return html

@app.route('/lagre', methods=['POST'])
def lagre():
    navn = request.form.get('navn')
    session['navn'] = navn
    return redirect(url_for('hjem'))

@app.route('/logout')
def logout():
    session.pop('navn', None)
    return redirect(url_for('hjem'))

if __name__ == '__main__':
    app.run(debug=True)
\`\`\`

Dette demonstrerer sessions, skjemahåndtering og redirect i Flask.`
    }
  ],
  keyTerms: [
    { term: 'Flask', definition: 'Lettvekts Python-rammeverk for webutvikling' },
    { term: 'Route', definition: 'URL-endepunkt som mapper til en funksjon i Flask' },
    { term: 'Jinja2', definition: 'Template-motor for Flask som genererer dynamisk HTML' },
    { term: 'Template-arv', definition: 'Gjenbruk av HTML-struktur ved å arve fra base-templates' },
    { term: 'Session', definition: 'Mekanisme for å lagre brukerdata mellom HTTP-forespørsler' },
    { term: 'Flash messages', definition: 'Midlertidige meldinger til brukeren (suksess, feil, etc.)' },
    { term: 'request', definition: 'Flask-objekt som inneholder data fra HTTP-forespørselen' },
    { term: 'render_template', definition: 'Funksjon for å generere HTML fra Jinja2-templates' }
  ],
  estimatedMinutes: 70,
  prevChapter: 'it-2-6-2',
  nextChapter: 'it-2-6-4'
};

// ========================================
// KAPITTEL 6.4: Fullstack-applikasjoner
// ========================================

export const CHAPTER_IT_2_6_4: TextbookChapter = {
  id: 'it-2-6-4',
  courseId: 'it-2',
  title: 'Fullstack-applikasjoner',
  chapterNumber: '6.4',
  section: 'Del 6: Webutvikling og brukeropplevelse',
  content: [
    {
      id: 'it2-6-4-intro',
      type: 'text',
      title: 'Introduksjon',
      content: `Nå skal vi koble sammen frontend og backend til komplette fullstack-applikasjoner. Vi skal bygge REST API-er med Flask, kommunisere med dem fra JavaScript, og håndtere utfordringer som CORS (Cross-Origin Resource Sharing).

Dette kapittelet gir deg verktøyene til å bygge moderne webapplikasjoner der frontend og backend er separate men kommuniserer sømløst.`
    },
    {
      id: 'it2-6-4-theory-rest-api',
      type: 'text',
      title: 'REST API-design',
      content: `**REST (Representational State Transfer)** er en arkitekturstil for API-er.

**Grunnprinsipper:**

**1. Ressurser** identifiseres med URL-er:
- \`/brukere\` - samling av brukere
- \`/brukere/5\` - spesifikk bruker
- \`/brukere/5/innlegg\` - innlegg fra bruker 5

**2. HTTP-metoder** indikerer operasjon:
- **GET** - Hent data (lesing)
- **POST** - Opprett ny ressurs
- **PUT** - Oppdater hele ressurs
- **PATCH** - Oppdater deler av ressurs
- **DELETE** - Slett ressurs

**3. Statuskoder** kommuniserer resultat:
- **200 OK** - Vellykket
- **201 Created** - Ressurs opprettet
- **400 Bad Request** - Ugyldig forespørsel
- **404 Not Found** - Ressurs ikke funnet
- **500 Internal Server Error** - Serverfeil

**4. Data utveksles som JSON**`
    },
    {
      id: 'it2-6-4-example-flask-api',
      type: 'example',
      title: 'Flask REST API',
      content: `**Komplett API for produkter:**

\`\`\`python
from flask import Flask, jsonify, request

app = Flask(__name__)

# "Database" (i virkeligheten ville dette vært en ekte database)
produkter = [
    {"id": 1, "navn": "Laptop", "pris": 8999},
    {"id": 2, "navn": "Mus", "pris": 299},
    {"id": 3, "navn": "Tastatur", "pris": 599}
]

# GET alle produkter
@app.route('/api/produkter', methods=['GET'])
def hent_alle_produkter():
    return jsonify(produkter), 200

# GET ett produkt
@app.route('/api/produkter/<int:id>', methods=['GET'])
def hent_produkt(id):
    produkt = next((p for p in produkter if p['id'] == id), None)
    if produkt is None:
        return jsonify({"error": "Produkt ikke funnet"}), 404
    return jsonify(produkt), 200

# POST nytt produkt
@app.route('/api/produkter', methods=['POST'])
def opprett_produkt():
    data = request.get_json()

    # Validering
    if not data or 'navn' not in data or 'pris' not in data:
        return jsonify({"error": "Navn og pris er påkrevd"}), 400

    # Opprett produkt
    nytt_produkt = {
        "id": max(p['id'] for p in produkter) + 1,
        "navn": data['navn'],
        "pris": data['pris']
    }
    produkter.append(nytt_produkt)

    return jsonify(nytt_produkt), 201

# PUT (oppdater produkt)
@app.route('/api/produkter/<int:id>', methods=['PUT'])
def oppdater_produkt(id):
    produkt = next((p for p in produkter if p['id'] == id), None)
    if produkt is None:
        return jsonify({"error": "Produkt ikke funnet"}), 404

    data = request.get_json()
    produkt['navn'] = data.get('navn', produkt['navn'])
    produkt['pris'] = data.get('pris', produkt['pris'])

    return jsonify(produkt), 200

# DELETE
@app.route('/api/produkter/<int:id>', methods=['DELETE'])
def slett_produkt(id):
    global produkter
    produkter = [p for p in produkter if p['id'] != id]
    return '', 204  # No Content

if __name__ == '__main__':
    app.run(debug=True)
\`\`\``
    },
    {
      id: 'it2-6-4-theory-cors',
      type: 'text',
      title: 'CORS (Cross-Origin Resource Sharing)',
      content: `**Problemet:**
Av sikkerhetsgrunner blokkerer nettlesere forespørsler fra en origin (domene) til en annen. Hvis frontend kjører på \`localhost:3000\` og backend på \`localhost:5000\`, vil forespørsler bli blokkert.

**Løsningen: CORS**
Backend må eksplisitt tillate forespørsler fra frontend.

**Installere Flask-CORS:**
\`\`\`bash
pip install flask-cors
\`\`\`

**Enkel CORS (tillat alt - KUN for utvikling):**
\`\`\`python
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Tillater alle origins
\`\`\`

**Sikker CORS (produksjon):**
\`\`\`python
CORS(app, origins=[
    "https://mittdomene.no",
    "https://www.mittdomene.no"
])
\`\`\`

**Manuell CORS:**
\`\`\`python
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
    return response
\`\`\``
    },
    {
      id: 'it2-6-4-example-fullstack',
      type: 'example',
      title: 'Fullstack-eksempel: Frontend + Backend',
      content: `**Backend (Flask API - app.py):**
\`\`\`python
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

oppgaver = []

@app.route('/api/oppgaver', methods=['GET'])
def hent_oppgaver():
    return jsonify(oppgaver)

@app.route('/api/oppgaver', methods=['POST'])
def legg_til_oppgave():
    data = request.get_json()
    ny_oppgave = {
        'id': len(oppgaver) + 1,
        'tekst': data['tekst'],
        'fullfort': False
    }
    oppgaver.append(ny_oppgave)
    return jsonify(ny_oppgave), 201

@app.route('/api/oppgaver/<int:id>', methods=['DELETE'])
def slett_oppgave(id):
    global oppgaver
    oppgaver = [o for o in oppgaver if o['id'] != id]
    return '', 204

if __name__ == '__main__':
    app.run(debug=True, port=5000)
\`\`\`

**Frontend (HTML + JavaScript - index.html):**
\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>Oppgaveliste</title>
    <style>
        body { font-family: Arial; max-width: 600px; margin: 50px auto; }
        li { margin: 10px 0; }
        button { margin-left: 10px; }
    </style>
</head>
<body>
    <h1>Oppgaveliste</h1>

    <form id="oppgaveSkjema">
        <input type="text" id="oppgaveTekst" placeholder="Ny oppgave" required>
        <button type="submit">Legg til</button>
    </form>

    <ul id="oppgaveListe"></ul>

    <script>
        const API_URL = 'http://localhost:5000/api/oppgaver';
        const skjema = document.getElementById('oppgaveSkjema');
        const liste = document.getElementById('oppgaveListe');

        // Hent og vis oppgaver
        async function hentOppgaver() {
            const response = await fetch(API_URL);
            const oppgaver = await response.json();

            liste.innerHTML = '';
            oppgaver.forEach(oppgave => {
                const li = document.createElement('li');
                li.innerHTML = \`
                    \${oppgave.tekst}
                    <button onclick="slettOppgave(\${oppgave.id})">Slett</button>
                \`;
                liste.appendChild(li);
            });
        }

        // Legg til oppgave
        skjema.addEventListener('submit', async (e) => {
            e.preventDefault();
            const tekst = document.getElementById('oppgaveTekst').value;

            await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ tekst })
            });

            document.getElementById('oppgaveTekst').value = '';
            hentOppgaver();
        });

        // Slett oppgave
        async function slettOppgave(id) {
            await fetch(\`\${API_URL}/\${id}\`, { method: 'DELETE' });
            hentOppgaver();
        }

        // Last inn oppgaver ved sideinnlasting
        hentOppgaver();
    </script>
</body>
</html>
\`\`\`

Dette er en komplett fullstack-applikasjon med separate frontend og backend!`
    },
    {
      id: 'it2-6-4-example-error-handling',
      type: 'example',
      title: 'Feilhåndtering i fullstack',
      content: `**Backend - Robuste feilmeldinger:**
\`\`\`python
from flask import Flask, jsonify, request

@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Ressurs ikke funnet"}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({"error": "Intern serverfeil"}), 500

@app.route('/api/bruker/<int:id>', methods=['GET'])
def hent_bruker(id):
    bruker = finn_bruker(id)  # Fiktiv funksjon

    if not bruker:
        return jsonify({"error": "Bruker ikke funnet"}), 404

    return jsonify(bruker), 200
\`\`\`

**Frontend - Håndtere API-feil:**
\`\`\`javascript
async function hentBruker(id) {
    try {
        const response = await fetch(\`/api/bruker/\${id}\`);

        if (!response.ok) {
            // Håndter HTTP-feil (4xx, 5xx)
            const error = await response.json();
            throw new Error(error.error || 'Noe gikk galt');
        }

        const bruker = await response.json();
        console.log('Bruker:', bruker);
        return bruker;

    } catch (error) {
        console.error('Feil:', error.message);

        // Vis feilmelding til bruker
        document.getElementById('feilmelding').textContent =
            'Kunne ikke hente bruker: ' + error.message;
    }
}
\`\`\`

**Beste praksis:**
- Backend returnerer klare feilmeldinger som JSON
- Frontend sjekker \`response.ok\` før parsing
- Brukervennlige feilmeldinger i UI`
    },
    {
      id: 'it2-6-4-exercise-intro',
      type: 'text',
      title: 'Oppgaver',
      content: `Nå skal du løse oppgaver om fullstack-utvikling, REST API-er og CORS.`
    }
  ],
  exercises: [
    {
      id: 'it2-6-4-ex-1',
      type: 'multiple-choice',
      question: 'Hvilken HTTP-metode brukes for å OPPRETTE en ny ressurs i et REST API?',
      options: [
        'GET',
        'POST',
        'PUT',
        'DELETE'
      ],
      correctAnswer: 1,
      explanation: 'POST brukes til å opprette nye ressurser i REST API-er. Serveren tildeler ofte en ID til den nye ressursen.'
    },
    {
      id: 'it2-6-4-ex-2',
      type: 'multiple-choice',
      question: 'Hva betyr HTTP-statuskode 404?',
      options: [
        'Vellykket forespørsel',
        'Ressurs opprettet',
        'Ressurs ikke funnet',
        'Intern serverfeil'
      ],
      correctAnswer: 2,
      explanation: '404 Not Found betyr at serveren ikke kunne finne den forespurte ressursen (f.eks. ugyldig URL eller slettet ressurs).'
    },
    {
      id: 'it2-6-4-ex-3',
      type: 'multiple-choice',
      question: 'Hva er CORS (Cross-Origin Resource Sharing)?',
      options: [
        'En database for webapplikasjoner',
        'En sikkerhetsfunksjon som kontrollerer hvilke domener som kan gjøre API-forespørsler',
        'Et JavaScript-bibliotek',
        'En type CSS-styling'
      ],
      correctAnswer: 1,
      explanation: 'CORS er en sikkerhetsmekanisme som lar servere spesifisere hvilke domener (origins) som har lov til å gjøre API-forespørsler.'
    },
    {
      id: 'it2-6-4-ex-4',
      type: 'classic',
      question: 'Forklar forskjellen mellom PUT og PATCH i REST API-er. Når ville du brukt hver?',
      answer: `**PUT:**
- Erstatter HELE ressursen
- Krever at du sender alle felt
- Idempotent (samme resultat ved gjentatte kall)
- Eksempel: Oppdater bruker med all informasjon

**PATCH:**
- Oppdaterer KUN spesifikke felt
- Trenger bare å sende feltene du vil endre
- Mer effektivt for små endringer
- Eksempel: Endre bare brukerens e-post

**Eksempel PUT:**
\`\`\`javascript
// Må sende ALT
PUT /api/bruker/5
{ "navn": "Ola", "email": "ny@email.com", "alder": 25 }
\`\`\`

**Eksempel PATCH:**
\`\`\`javascript
// Bare det som endres
PATCH /api/bruker/5
{ "email": "ny@email.com" }
\`\`\`

Bruk PATCH når du bare vil endre deler av en ressurs.`
    },
    {
      id: 'it2-6-4-ex-5',
      type: 'classic',
      question: 'Skriv en Flask-rute som:\n1. Lytter på GET `/api/brukere`\n2. Returnerer en JSON-liste med to brukere (navn og alder)\n3. Bruker korrekt statuskode',
      answer: `\`\`\`python
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/brukere', methods=['GET'])
def hent_brukere():
    brukere = [
        {"navn": "Ola Nordmann", "alder": 25},
        {"navn": "Kari Hansen", "alder": 30}
    ]
    return jsonify(brukere), 200

if __name__ == '__main__':
    app.run(debug=True)
\`\`\`

\`jsonify()\` konverterer Python-lister/dicts til JSON, og 200 er statuskoden for vellykket GET.`
    },
    {
      id: 'it2-6-4-ex-6',
      type: 'classic',
      question: 'Hvorfor får du CORS-feil når frontend (localhost:3000) prøver å hente data fra backend (localhost:5000)? Hvordan fikser du dette i Flask?',
      answer: `**Hvorfor CORS-feil:**
Nettlesere blokkerer forespørsler mellom forskjellige origins (protokoll + domene + port) av sikkerhetsgrunner. localhost:3000 og localhost:5000 regnes som forskjellige origins.

**Løsning 1 - Flask-CORS (enklest):**
\`\`\`bash
pip install flask-cors
\`\`\`

\`\`\`python
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Tillater alle origins (utvikling)
\`\`\`

**Løsning 2 - Spesifiser origins (produksjon):**
\`\`\`python
CORS(app, origins=["http://localhost:3000"])
\`\`\`

**Løsning 3 - Manuelle headers:**
\`\`\`python
@app.after_request
def after_request(response):
    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
    return response
\`\`\`

Flask-CORS er anbefalt for enkelhets skyld.`
    },
    {
      id: 'it2-6-4-ex-7',
      type: 'classic',
      question: 'Se på denne JavaScript-koden:\n\n```javascript\nconst response = await fetch("/api/data");\nconst data = await response.json();\nconsole.log(data);\n```\n\nHva er problemet hvis serveren returnerer en 404-feil? Hvordan burde koden forbedres?',
      answer: `**Problem:**
Koden sjekker ikke om forespørselen var vellykket (\`response.ok\`). Selv ved 404-feil vil \`response.json()\` prøve å parse, og hvis serveren ikke returnerer JSON, vil det krasje.

**Forbedret versjon:**
\`\`\`javascript
try {
    const response = await fetch("/api/data");

    if (!response.ok) {
        throw new Error(\`HTTP-feil: \${response.status}\`);
    }

    const data = await response.json();
    console.log(data);

} catch (error) {
    console.error('Feil ved henting:', error);
    // Vis feilmelding til bruker
}
\`\`\`

**Viktige forbedringer:**
1. Sjekk \`response.ok\` (true for 200-299)
2. try/catch for nettverksfeil
3. Gi brukervennlig feilmelding

Dette er robust feilhåndtering i fullstack-applikasjoner.`
    },
    {
      id: 'it2-6-4-ex-8',
      type: 'classic',
      question: 'Du skal lage et REST API for en blogg. Design URL-struktur og HTTP-metoder for følgende operasjoner:\na) Hente alle innlegg\nb) Hente innlegg med ID 5\nc) Opprette nytt innlegg\nd) Slette innlegg med ID 5\n\nBruk REST-konvensjoner.',
      answer: `**REST API-design for blogg:**

**a) Hente alle innlegg:**
\`\`\`
GET /api/innlegg
\`\`\`
Returnerer: Array av innlegg, status 200

**b) Hente innlegg med ID 5:**
\`\`\`
GET /api/innlegg/5
\`\`\`
Returnerer: Ett innlegg, status 200 (eller 404 hvis ikke funnet)

**c) Opprette nytt innlegg:**
\`\`\`
POST /api/innlegg
Body: { "tittel": "...", "innhold": "..." }
\`\`\`
Returnerer: Opprettet innlegg med ID, status 201

**d) Slette innlegg med ID 5:**
\`\`\`
DELETE /api/innlegg/5
\`\`\`
Returnerer: Tom respons, status 204 (No Content)

**Ekstra (bonus):**
- PUT /api/innlegg/5 - Oppdater hele innlegget
- PATCH /api/innlegg/5 - Oppdater deler av innlegget
- GET /api/innlegg/5/kommentarer - Hent kommentarer til innlegg

Dette følger REST-prinsipper: ressursbaserte URL-er, riktige HTTP-metoder og statuskoder.`
    }
  ],
  keyTerms: [
    { term: 'REST API', definition: 'Arkitekturstil for API-er basert på ressurser, HTTP-metoder og statuskoder' },
    { term: 'Ressurs', definition: 'En enhet i et API (f.eks. bruker, produkt) identifisert med URL' },
    { term: 'CORS', definition: 'Cross-Origin Resource Sharing - sikkerhetsfunksjon som kontrollerer API-tilgang' },
    { term: 'Statuskode', definition: 'Tresifret tall som indikerer resultatet av en HTTP-forespørsel' },
    { term: 'jsonify()', definition: 'Flask-funksjon som konverterer Python-data til JSON-respons' },
    { term: 'Origin', definition: 'Kombinasjon av protokoll, domene og port (f.eks. http://localhost:3000)' },
    { term: 'Idempotent', definition: 'Operasjon som gir samme resultat uansett hvor mange ganger den kjøres' },
    { term: 'Fullstack', definition: 'Applikasjon med både frontend (UI) og backend (server/API)' }
  ],
  estimatedMinutes: 65,
  prevChapter: 'it-2-6-3',
  nextChapter: 'it-2-6-5'
};

// ========================================
// KAPITTEL 6.5: Brukeropplevelse og brukbarhetstesting
// ========================================

export const CHAPTER_IT_2_6_5: TextbookChapter = {
  id: 'it-2-6-5',
  courseId: 'it-2',
  title: 'Brukeropplevelse og brukbarhetstesting',
  chapterNumber: '6.5',
  section: 'Del 6: Webutvikling og brukeropplevelse',
  content: [
    {
      id: 'it2-6-5-intro',
      type: 'text',
      title: 'Introduksjon',
      content: `En teknisk perfekt applikasjon som er vanskelig å bruke, har lite verdi. Brukeropplevelse (UX - User Experience) handler om å skape produkter som er intuitive, effektive og behagelige å bruke.

I dette kapittelet skal vi se på UX-prinsipper, heuristisk evaluering, brukertesting og tilgjengelighet. Dette er essensielt for å vurdere brukervennligheten i egne og andres programmer.`
    },
    {
      id: 'it2-6-5-theory-ux-principles',
      type: 'text',
      title: 'UX-prinsipper',
      content: `**Viktige prinsipper for god brukeropplevelse:**

**1. Brukerkontroll og frihet**
Brukere gjør feil. Gi dem alltid en utvei (angre/undo, avbryt, tilbake).

**2. Konsistens**
Like ting skal se like ut og fungere likt. Ikke overrask brukeren.

**3. Synlighet av systemstatus**
Hold brukeren informert (laster..., lagret!, feil oppstod).

**4. Forebygging av feil**
Design for å hindre feil før de skjer (validering, bekreftelser).

**5. Gjenkjennelse fremfor hukommelse**
Ikke krev at brukere husker informasjon mellom skjermer. Vis alternativer synlig.

**6. Fleksibilitet og effektivitet**
Støtt både nybegynnere (tydelige knapper) og eksperter (hurtigtaster).

**7. Estetikk og minimalistisk design**
Hver ekstra informasjonsbit konkurrerer med relevant informasjon.

**8. Tilgjengelighet**
Design for alle, inkludert brukere med funksjonsnedsettelser.`
    },
    {
      id: 'it2-6-5-example-good-vs-bad',
      type: 'example',
      title: 'Eksempler på god vs dårlig UX',
      content: `**Dårlig: Usynlig systemstatus**
\`\`\`javascript
// Ingen feedback når data sendes
button.addEventListener('click', async () => {
    await sendData();
    // Brukeren vet ikke om noe skjedde
});
\`\`\`

**God: Tydelig feedback**
\`\`\`javascript
button.addEventListener('click', async () => {
    button.disabled = true;
    button.textContent = 'Sender...';

    try {
        await sendData();
        button.textContent = 'Sendt!';
        setTimeout(() => {
            button.disabled = false;
            button.textContent = 'Send';
        }, 2000);
    } catch (error) {
        alert('Feil: ' + error.message);
        button.disabled = false;
        button.textContent = 'Send';
    }
});
\`\`\`

**Dårlig: Irreversible handlinger**
\`\`\`html
<button onclick="slettAlt()">Slett</button>
\`\`\`

**God: Bekreftelse før farlige handlinger**
\`\`\`javascript
function slettMedBekreftelse() {
    if (confirm('Er du sikker på at du vil slette alt? Dette kan ikke angres.')) {
        slettAlt();
    }
}
\`\`\`

**Dårlig: Inkonsistent navigasjon**
Tilbake-knapp øverst venstre på noen sider, nederst høyre på andre.

**God: Konsistent plassering**
Samme navigasjonsstruktur på alle sider.`
    },
    {
      id: 'it2-6-5-theory-heuristic-evaluation',
      type: 'text',
      title: 'Heuristisk evaluering',
      content: `**Heuristisk evaluering** er en metode der eksperter evaluerer et brukergrensesnitt mot etablerte brukbarhets-prinsipper (heuristikker).

**Nielsens 10 heuristikker:**
1. Synlighet av systemstatus
2. Match mellom system og virkelig verden
3. Brukerkontroll og frihet
4. Konsistens og standarder
5. Forebygging av feil
6. Gjenkjennelse fremfor hukommelse
7. Fleksibilitet og effektivitet
8. Estetikk og minimalistisk design
9. Hjelp brukere å kjenne igjen, diagnostisere og fikse feil
10. Hjelp og dokumentasjon

**Prosess:**
1. Evaluer hver side/funksjon mot heuristikkene
2. Noter brudd på heuristikker
3. Vurder alvorlighetsgrad (0-4)
4. Prioriter og fiks problemer

**Fordeler:**
- Rask og billig
- Finner mange problemer
- Kan gjøres tidlig i utviklingen

**Ulemper:**
- Finner ikke alle problemer ekte brukere har
- Krever erfarne evaluatorer`
    },
    {
      id: 'it2-6-5-example-heuristic',
      type: 'example',
      title: 'Heuristisk evaluering - Eksempel',
      content: `**Scenario: Evaluering av innloggingsskjema**

**HTML:**
\`\`\`html
<form>
    <input type="text" name="user">
    <input type="text" name="pass">
    <button>OK</button>
</form>
\`\`\`

**Problemer funnet:**

**1. Brudd på heuristikk #9 (Feilmeldinger):**
- Ingen validering eller feilmeldinger
- Alvorlighet: 3/4 (stor)
- **Forslag:** Vis tydelige feilmeldinger

**2. Brudd på heuristikk #2 (Match virkelighet):**
- Input-felter mangler labels (hva skal skrives inn?)
- Knapp sier bare "OK" (ikke beskrivende)
- Alvorlighet: 3/4
- **Forslag:** Legg til labels og tydelig knapp-tekst

**3. Brudd på heuristikk #5 (Forebygging):**
- Passord-felt er \`type="text"\`, ikke \`type="password"\`
- Alvorlighet: 4/4 (kritisk sikkerhetsproblem)
- **Forslag:** Bruk riktig input-type

**Forbedret versjon:**
\`\`\`html
<form id="loginForm">
    <label for="brukernavn">Brukernavn:</label>
    <input type="text" id="brukernavn" name="brukernavn" required>

    <label for="passord">Passord:</label>
    <input type="password" id="passord" name="passord" required>

    <button type="submit">Logg inn</button>
    <div id="feilmelding" style="color:red;"></div>
</form>
\`\`\``
    },
    {
      id: 'it2-6-5-theory-user-testing',
      type: 'text',
      title: 'Brukertesting',
      content: `**Brukertesting** innebærer å observere ekte brukere mens de bruker produktet.

**Typer brukertesting:**

**1. Moderert testing**
- En moderator er til stede
- Brukeren "tenker høyt" mens de utfører oppgaver
- Moderator kan stille oppfølgingsspørsmål

**2. Umoderert testing**
- Brukeren tester alene (ofte hjemmefra)
- Opptak av skjerm og lyd
- Billigere og når flere brukere

**3. A/B-testing**
- To versjoner av samme funksjon
- Måle hvilken som gir best resultat
- Datadrevet beslutning

**Prosess for moderert test:**
1. **Definer mål:** Hva vil du teste?
2. **Lag oppgaver:** "Finn og kjøp en laptop under 10 000 kr"
3. **Rekrutter brukere:** 5-8 brukere (Nielsen: 5 brukere finner 85% av problemer)
4. **Gjennomfør test:** Observer, ta notater
5. **Analyser:** Identifiser mønstre og problemer
6. **Implementer forbedringer**

**Nøkkelspørsmål:**
- Hvor lang tid tok oppgaven?
- Hvor mange feil gjorde brukeren?
- Hvor fornøyd var brukeren (subjektivt)?
- Fullførte de oppgaven?`
    },
    {
      id: 'it2-6-5-example-user-test',
      type: 'example',
      title: 'Brukertesting - Eksempel',
      content: `**Scenario: Test av nettbutikk-kassen**

**Oppgave til bruker:**
"Du skal kjøpe en bok til 299 kr. Legg den i handlekurven og fullfør kjøpet. Tenk høyt mens du gjør det."

**Observasjoner:**

**Bruker 1 (Kari, 28 år):**
- Fant "Legg i kurv"-knappen umiddelbart (00:05)
- Usikker på om produktet ble lagt til (manglende feedback)
- Lette etter handlekurv-ikon i 12 sekunder
- Klikket "Kjøp nå" ved et uhell, ville bare se kurven
- **Kommentar:** "Jeg vil bare se hva som ligger i kurven uten å kjøpe nå"

**Bruker 2 (Ola, 45 år):**
- Klikket "Legg i kurv" (00:08)
- Sa høyt: "Skjedde det noe? Jeg vet ikke om det fungerte"
- Scrollet ned for å lete etter kurv
- Ga opp etter 20 sekunder, klikket på logo for å starte på nytt

**Identifiserte problemer:**
1. **Ingen visuell feedback** når produkt legges i kurv (kritisk)
2. **Handlekurv-ikon** er vanskelig å finne
3. **Forvirrende knapper** ("Kjøp nå" vs "Se kurv")

**Anbefalte forbedringer:**
\`\`\`javascript
// Vis tydelig feedback når produkt legges til
function leggIKurv(produkt) {
    // Legg til i kurv
    handlekurv.push(produkt);

    // Vis toast-melding
    visMelding(\`\${produkt.navn} lagt i handlekurven!\`);

    // Oppdater antall i kurv-ikon
    oppdaterKurvAntall();

    // Animasjon på kurv-ikon
    kurvIkon.classList.add('bounce');
}
\`\`\``
    },
    {
      id: 'it2-6-5-theory-accessibility',
      type: 'text',
      title: 'Tilgjengelighet (Accessibility)',
      content: `**Tilgjengelighet** betyr at alle, inkludert personer med funksjonsnedsettelser, kan bruke nettstedet.

**WCAG (Web Content Accessibility Guidelines)** har fire prinsipper (POUR):

**1. Perceivable (Oppfattbar)**
- Alternativ tekst for bilder (\`alt\`-attributt)
- Undertekster for video
- Fargekontrast (minst 4.5:1 for normal tekst)

**2. Operable (Anvendbar)**
- Tastaturnavigasjon (alt tilgjengelig uten mus)
- Ingen tidsbegrensninger brukeren ikke kan kontrollere
- Unngå blinkende innhold (kan utløse epilepsi)

**3. Understandable (Forståelig)**
- Klart språk
- Forutsigbar navigasjon
- Hjelp ved feilinput

**4. Robust**
- Fungerer med hjelpemiddelteknologi (skjermlesere)
- Semantisk HTML

**Lovkrav:**
I Norge er offentlige nettsider lovpålagt å følge WCAG 2.1 nivå AA.`
    },
    {
      id: 'it2-6-5-example-accessibility',
      type: 'example',
      title: 'Tilgjengelighet - Kodeeksempler',
      content: `**Dårlig - Utilgjengelig:**
\`\`\`html
<div onclick="submit()">Send</div>
<img src="logo.png">
<span style="color: #777; background: #999;">Viktig melding</span>
\`\`\`

**Problemer:**
- \`<div>\` som knapp - ikke tastaturnavigasjon, ingen semantikk
- Bilde uten alt-tekst - skjermlesere vet ikke hva det er
- Dårlig fargekontrast - vanskelig å lese

**God - Tilgjengelig:**
\`\`\`html
<button type="submit" onclick="submit()">Send skjema</button>
<img src="logo.png" alt="Firmaets logo">
<p style="color: #000; background: #fff;" role="alert" aria-live="polite">
    Viktig melding
</p>
\`\`\`

**Tastaturnavigasjon:**
\`\`\`html
<nav>
    <a href="#hovedinnhold">Hopp til hovedinnhold</a>
</nav>

<main id="hovedinnhold" tabindex="-1">
    <!-- Innhold -->
</main>
\`\`\`

**ARIA-attributter (for skjermlesere):**
\`\`\`html
<!-- Ekspanderbar seksjon -->
<button
    aria-expanded="false"
    aria-controls="innhold"
    onclick="toggle()">
    Vis mer
</button>
<div id="innhold" hidden>
    Skjult innhold...
</div>

<!-- Loading-indikator -->
<div role="status" aria-live="polite">
    <span aria-busy="true">Laster data...</span>
</div>
\`\`\`

**Test tilgjengelighet:**
- Prøv å navigere med bare TAB-tasten
- Slå av CSS - er innholdet fortsatt forståelig?
- Bruk skjermleser (NVDA for Windows, VoiceOver for Mac)
- Bruk verktøy som Lighthouse i Chrome DevTools`
    },
    {
      id: 'it2-6-5-exercise-intro',
      type: 'text',
      title: 'Oppgaver',
      content: `Nå skal du løse oppgaver om brukeropplevelse, heuristisk evaluering, brukertesting og tilgjengelighet.`
    }
  ],
  exercises: [
    {
      id: 'it2-6-5-ex-1',
      type: 'multiple-choice',
      question: 'Hva menes med "synlighet av systemstatus" i UX-design?',
      options: [
        'At nettsiden skal være søkbar på Google',
        'At brukeren alltid skal holdes informert om hva som skjer (laster, lagret, feil, etc.)',
        'At all kode skal være synlig',
        'At nettsiden skal ha mange farger'
      ],
      correctAnswer: 1,
      explanation: 'Synlighet av systemstatus betyr at brukeren alltid skal vite hva som skjer - f.eks. ved å vise "Laster...", "Lagret!" eller feilmeldinger.'
    },
    {
      id: 'it2-6-5-ex-2',
      type: 'multiple-choice',
      question: 'Hva er heuristisk evaluering?',
      options: [
        'En type database',
        'Testing av nettsidehastighet',
        'Evaluering av brukergrensesnitt mot etablerte brukbarhets-prinsipper',
        'En måte å skrive JavaScript på'
      ],
      correctAnswer: 2,
      explanation: 'Heuristisk evaluering er når eksperter evaluerer et brukergrensesnitt mot etablerte prinsipper (heuristikker) som Nielsens 10 heuristikker.'
    },
    {
      id: 'it2-6-5-ex-3',
      type: 'multiple-choice',
      question: 'Hvor mange brukere anbefaler Jakob Nielsen for å finne ca. 85% av brukbarhetsproblemene?',
      options: [
        '2-3 brukere',
        '5-8 brukere',
        '20-30 brukere',
        '100+ brukere'
      ],
      correctAnswer: 1,
      explanation: 'Jakob Nielsen fant at 5 brukere finner ca. 85% av brukbarhetsproblemene. Flere brukere gir avtagende nytte per ekstra bruker.'
    },
    {
      id: 'it2-6-5-ex-4',
      type: 'classic',
      question: 'Nevn tre av de fire POUR-prinsippene i WCAG for tilgjengelighet, og forklar hva ett av dem betyr.',
      answer: `**POUR-prinsippene:**
1. **Perceivable (Oppfattbar)** - Informasjon må kunne oppfattes av alle
2. **Operable (Anvendbar)** - Grensesnittet må kunne brukes av alle
3. **Understandable (Forståelig)** - Innhold og funksjonalitet må være forståelig
4. **Robust** - Innhold må fungere med hjelpemiddelteknologi

**Eksempel - Perceivable:**
Alt innhold må ha et alternativ for ulike sanser. Hvis du har et bilde, må det ha alt-tekst for skjermlesere. Hvis du har video, må det være undertekster for døve. Farger alene kan ikke brukes til å formidle informasjon (fargeblinde).`
    },
    {
      id: 'it2-6-5-ex-5',
      type: 'classic',
      question: 'Se på denne koden:\n\n```html\n<div onclick="sendSkjema()">Send</div>\n```\n\nIdentifiser to tilgjengelighetsproblemer og skriv en forbedret versjon.',
      answer: `**Problemer:**
1. **\`<div>\` er ikke en knapp** - ingen tastaturnavigasjon, skjermlesere vet ikke at det er klikkbart
2. **Ingen semantisk HTML** - burde brukt \`<button>\` element

**Forbedret versjon:**
\`\`\`html
<button type="button" onclick="sendSkjema()">Send skjema</button>
\`\`\`

**Alternativt enda bedre:**
\`\`\`html
<button type="submit" onclick="sendSkjema()">
    Send skjema
</button>
\`\`\`

**Fordeler:**
- Fungerer med tastatur (Enter/Space)
- Skjermlesere annonserer det som en knapp
- Riktig semantikk for søkemotorer
- Standard browser-styling for knapper`
    },
    {
      id: 'it2-6-5-ex-6',
      type: 'classic',
      question: 'Forklar forskjellen mellom heuristisk evaluering og brukertesting. Nevn én fordel med hver metode.',
      answer: `**Heuristisk evaluering:**
- Eksperter evaluerer grensesnitt mot etablerte prinsipper
- Ingen ekte brukere involvert
- **Fordel:** Rask og billig, kan gjøres tidlig i utviklingen

**Brukertesting:**
- Observere ekte brukere mens de bruker produktet
- Brukere utfører oppgaver og gir tilbakemeldinger
- **Fordel:** Finner problemer ekte brukere faktisk har, ikke bare teoretiske problemer

**Sammen:**
Brukes ofte i kombinasjon - heuristisk evaluering for å finne åpenbare problemer tidlig, deretter brukertesting for å validere med ekte brukere.`
    },
    {
      id: 'it2-6-5-ex-7',
      type: 'classic',
      question: 'Du designer en "Slett konto"-funksjon. Hvilke UX-prinsipper bør du følge for å gjøre dette trygt og brukervennlig? Gi konkrete eksempler.',
      answer: `**UX-prinsipper for "Slett konto":**

**1. Forebygging av feil:**
- Plasser "Slett konto" langt unna andre knapper
- Gjør den mindre fremtredende (ikke rød stor knapp)

**2. Brukerkontroll:**
- Krev bekreftelse før sletting
- Gi angreperiode (f.eks. 30 dager før permanent sletting)

**3. Synlighet av konsekvenser:**
- Vis tydelig hva som slettes: "All data, innlegg og meldinger vil bli permanent slettet"

**4. Forebygging av uhell:**
- Krev passord eller annen ekstra bekreftelse
- Kanskje skriv "SLETT" i et felt for å bekrefte

**Kodeeksempel:**
\`\`\`javascript
function slettKonto() {
    const bekreftelse = prompt('Skriv "SLETT KONTO" for å bekrefte:');

    if (bekreftelse !== 'SLETT KONTO') {
        alert('Sletting avbrutt');
        return;
    }

    if (confirm('Er du helt sikker? All data vil bli slettet permanent.')) {
        // Slett konto, men gi 30 dagers angrerett
        deaktiverKonto();
        alert('Kontoen er planlagt for sletting om 30 dager. Du kan angre før det.');
    }
}
\`\`\``
    },
    {
      id: 'it2-6-5-ex-8',
      type: 'classic',
      question: 'Du skal gjennomføre brukertesting av en handleliste-app. Lag:\na) Ett spesifikt testmål\nb) To oppgaver brukeren skal utføre\nc) Tre ting du vil observere/måle',
      answer: `**a) Testmål:**
Vurdere om brukere kan legge til og organisere handleliste-elementer effektivt.

**b) Oppgaver:**
1. "Legg til 'melk', 'egg' og 'brød' i handlelisten din"
2. "Marker 'egg' som kjøpt, og slett 'brød' fra listen"

**c) Observasjoner/målinger:**
1. **Tid:** Hvor lang tid tar hver oppgave? (mål: <30 sekunder)
2. **Feil:** Hvor mange ganger klikker brukeren feil eller må prøve på nytt?
3. **Subjektiv vurdering:** Spør etterpå: "På en skala 1-5, hvor enkelt var det å bruke appen?" (mål: gjennomsnitt >4)

**Ekstra:**
- Observer ansiktsuttrykk (frustrasjon vs. glede)
- Ta notater på hva brukeren sier høyt
- Identifiser mønstre på tvers av brukere

**Analyse:**
Hvis alle brukere sliter med samme oppgave, er det et designproblem som må fikses.`
    }
  ],
  keyTerms: [
    { term: 'UX (User Experience)', definition: 'Brukeropplevelse - hvordan brukere opplever og samhandler med et produkt' },
    { term: 'Heuristisk evaluering', definition: 'Evaluering av brukergrensesnitt mot etablerte brukbarhets-prinsipper' },
    { term: 'Brukertesting', definition: 'Observere ekte brukere mens de bruker produktet for å identifisere problemer' },
    { term: 'WCAG', definition: 'Web Content Accessibility Guidelines - retningslinjer for tilgjengelig webinnhold' },
    { term: 'POUR', definition: 'Perceivable, Operable, Understandable, Robust - de fire prinsippene i WCAG' },
    { term: 'Tilgjengelighet', definition: 'At alle, inkludert personer med funksjonsnedsettelser, kan bruke nettstedet' },
    { term: 'A/B-testing', definition: 'Sammenligne to versjoner av en funksjon for å se hvilken som presterer best' },
    { term: 'Semantisk HTML', definition: 'Bruk av HTML-elementer som kommuniserer mening (button, nav, main, etc.)' }
  ],
  estimatedMinutes: 60,
  prevChapter: 'it-2-6-4',
  nextChapter: 'it-2-7-1'
};

// ========================================
// EKSPORT
// ========================================

export const IT_2_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_IT_2_6_1,
  CHAPTER_IT_2_6_2,
  CHAPTER_IT_2_6_3,
  CHAPTER_IT_2_6_4,
  CHAPTER_IT_2_6_5
];
