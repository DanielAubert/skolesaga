# Eksamensanalyse: IT2805 Webteknologi (NTNU)

> Grunnlagsdokument for en eksamensrettet lærebok. Bygger på NTNU-arkivet i mappen
> `~/Desktop/Eksamner/NTNU/IT2805/`: **4 distinkte eksamenssett med fullstendig
> løsningsforslag** — én ordinær eksamen fra **2015** og tre sett fra **2019** (én ordinær
> «Exam» + to «example»-sett, trolig prøve-/kandidat-sett). Alle fire foreligger med fasit.
> Til sammen 7 PDF-filer (fire oppgavesett + tre rene løsningsversjoner; den ordinære 2019
> forelå kun i løsningsversjon).
>
> **Lesestrategi som avtalt:** alt er lite, så **alle fire sett og alle løsningsforslag er
> lest grundig og i sin helhet**. Både oppgavetekst og fasit lot seg trekke ut som ren tekst
> med `pdftotext -layout` (figurene til canvas-oppgavene og enkelte kodebilder mangler, men
> fasitene gjengir koden). Alle fire settene var skrevet på **engelsk**.
>
> **Evidensstyrke — les dette først.** Arkivet er **lite (4 sett) og skjevt i tid** (ett fra
> 2015, tre fra 2019), og alle fire virker å stamme fra **samme emneansvarlig-æra** med tung
> gjenbruk av identiske oppgaver på tvers av sittinger (se seksjon 1). Det gir høy sikkerhet
> om *hva denne eksamenstypen testet*, men **lav sikkerhet om dagens pensum**: de arkiverte
> settene dekker **ikke** flere temaer som NTNUs gjeldende emnebeskrivelse framhever
> (responsivt design, Flexbox/Grid, universell utforming/WCAG, Ajax, semantisk HTML5). Se
> seksjon 1 og 7 for denne divergensen. **Alt innhold under er omskrevet med egne ord** —
> ingen ordrette oppgavetekster eller fasiter. Kodemønstrene er standard HTML/CSS/JS-idiomer.

---

## 1. Eksamensform og utvikling

### Dagens form (slik arkivet viser den)

IT2805 vurderes ifølge NTNUs emnebeskrivelse med **én avsluttende skriftlig skoleeksamen
(4 timer), 100 %**, med krav om godkjente obligatoriske øvinger/prosjekt for eksamensadgang.
De fire arkiverte settene har en **stabil, fast tredelt makrostruktur** som er identisk i
2015 og 2019:

| Del | Innhold | Vekt |
|---|---|---|
| **Section A — Multiple Choice / kortsvar** | ~8–13 spørsmål: flervalg (ett riktig alternativ), sant/usant-lister, og korte kodesporinger. Om HTML-elementer, CSS box-model, selektorer, canvas, JavaScript-syntaks, protokoller, XML. | **30 %** |
| **Section B — Longer Answer** | Lengre kortsvar: relative URL-er, TCP/IP-lagene, fyll-inn-setninger, kodesporing («hva skrives ut»), forklaringsoppgaver (POST vs GET, Canvas vs SVG, stilarktyper), variabelsporing. | **30 %** |
| **Section C — Coding Related** | **Ren kodeskriving**: skriv HTML (skjema, tabell), CSS-regler (selektorer, pseudo-klasser/-elementer, box-model, posisjonering) og JavaScript (DOM, funksjoner, løkker, dato) — samt **alltid en canvas-tegneoppgave**. | **40 %** |

Vektingen er oppgitt i **prosent per deloppgave** i selve teksten (2 % per flervalg, 1–10 %
per B/C-deloppgave), slik at studenten disponerer tid etter poeng. Innledningen til
kodedelen gjentar et fast sensorsignal: *«koden din trenger ikke matche vår nøyaktig —
løsningene er bare én av mange måter; det er idéene som teller.»* (se seksjon 4).

### Flervalg vs. kodeskriving — fordelingen

Dette er det viktigste formtrekket. IT2805-eksamenen er en **jevn hybrid** mellom
konseptkunnskap og praktisk koding — den er verken en ren teori- eller ren kodeeksamen:

- **Konseptuell/faktakunnskap (flervalg + forklaringer):** ~35–40 %. Section A er
  overveiende faktaflervalg (box-model-rekkefølge, selektorsyntaks, protokoller,
  XML-regler), og deler av Section B er rene forklaringsoppgaver (TCP/IP-lagene, POST vs GET,
  Canvas vs SVG, stilarktyper, bildeformater).
- **Kodelesing/sporing («hva skrives ut / hva er verdien»):** ~15 %. Boolske uttrykk,
  løkke-utskrift (`do-while`, `for`, `continue`), variabelsporing, typetvang (`==`/`===`).
- **Kodeskriving (HTML/CSS/JS fra bunnen):** ~45 %. Hele Section C pluss CSS-regel- og
  skjemaskriving i Section B. **Canvas-tegning alene** utgjør 6–10 % i **hvert eneste sett**.

En IT2805-bok må dermed trene **tre ferdigheter parallelt**: (1) presis faktakunnskap om
web-teknologiens byggeklosser for flervalget, (2) mekanisk kodesporing av små JS-snutter, og
(3) selvstendig produksjon av korrekt HTML, CSS og JavaScript — inkludert den distinktive
**canvas-2D-tegningen**.

### Historisk utvikling og en kritisk pensummerknad

Formen (tre seksjoner A/B/C, 30/30/40, canvas hver gang) er **helt stabil fra 2015 til
2019**. Det mest slående trekket er **omfattende gjenbruk av identiske oppgaver** på tvers av
sittinger — et sterkt signal om et resirkulert oppgavebank:

- De boolske sporingsoppgavene (`humid` / `isValid` / `sendFile`) er **ordrett like** i 2015
  og 2019.
- Beskrivelsen av **TCP/IP-lagene** gjengis nesten verbatim i tre sett.
- **Relativ-URL-oppgaven** («musikknettsted» med samme mappestruktur) går igjen i 2015 og
  2019.
- **Canvas-ansiktet** (samme fasitfunksjon med ytre sirkel, munn og to øyne) er identisk i
  2015 og 2019.
- **«Class ends 12:20»**-klokkeoppgaven er identisk i 2015 og 2019.
- **Canvas vs SVG**, **box-model-rekkefølge**, **position-verdiene** og **posisjons-standard
  (static)** dukker opp i flere sett i nær identisk form.

**Kritisk merknad om pensum-divergens (verifiser mot gjeldende emne).** De arkiverte settene
speiler en **eldre «web-design-grunnkurs»-profil**: HTML + CSS box-model med
posisjonsbasert layout, `<canvas>`-tegning, vanilla JavaScript/DOM og nettverksprotokoller.
Følgende temaer som **NTNUs nåværende emnebeskrivelse framhever, forekommer IKKE i noe av de
fire settene**:

- **Universell utforming / webtilgjengelighet / WCAG / ARIA** — helt fraværende.
- **Responsivt design / media queries** — helt fraværende.
- **Flexbox og CSS Grid** — helt fraværende (layout gjøres med `position`/box-model).
- **Ajax / `fetch` / asynkron datautveksling** — fraværende (JSON nevnes kun i én
  sant/usant-oppgave om syntaks).
- **Semantisk HTML5** (`<header>`/`<nav>`/`<article>`/`<section>`/`<footer>`) — fraværende;
  bare `<div>`/`<span>` og gammel dokumentstruktur diskuteres.
- **Sikkerhet** (XSS, HTTPS, CSRF) — så godt som fraværende (bare POST/GET-caching og en
  bisetning om at «https er mulig»).

En ny lærebok bør derfor **dekke både** det arkivet faktisk tester (som fortsatt kan gå
igjen) **og** de moderne temaene i gjeldende emnebeskrivelse, og eksplisitt markere sistnevnte
som `(ikke belagt i arkivet 2015–2019 — verifiser mot gjeldende pensum)`. Divergensen er stor
nok til at man **ikke** kan anta at et nytt sett ser ut som 2019-settene på temanivå.

---

## 2. Temafrekvens

Basert på de 4 settene (2015, 2019-ordinær, 2019-eksempel1, 2019-eksempel2).
«Gjenganger-score» = andel av de fire settene der temaet forekommer som egen oppgave eller
tydelig deloppgave. Med kun fire sett er tallene grove — de angir tendens, ikke presisjon.

### 2.1 CSS

| Tema | Gjenganger-score | Kommentar |
|---|---|---|
| **Box-model** (rekkefølge margin→border→padding, hvor margin ligger, margin vs padding, `border-width`-shorthand med 4 verdier) | **4/4 = 100 %** | «From outside to inside …» går igjen nesten ordrett i alle sett. |
| **CSS-selektorer og pseudo-klasser/-elementer** (etterkommer `div p`, søsken `h2+p`/`h2~p`, lenketilstander `a:link/visited/hover/active`, `::first-line`, `::first-letter`, `::before`/`::after`, `.klasse:hover`) | **4/4 = 100 %** | Testes både som flervalg og som skriveoppgave; pseudo-elementene `::first-letter`/`::before`/`::after` er en fast C-oppgave. |
| **`position`-egenskapen** (static/relative/absolute/fixed, standard = static, `top`/`left`) | **4/4 = 100 %** | Både «hva er standardverdien» (flervalg) og «skriv riktig verdi for beskrivelsen». Layout gjøres posisjonsbasert. |
| **CSS-regelens anatomi og bruksmåter** (selektor/deklarasjon/property/value; ekstern vs. intern vs. inline stilark; `!important`) | **3/4 = 75 %** | «Navngi de 4 delene av en CSS-regel»; «beskriv når du bruker hver stilark-type». |
| **Skrive konkrete CSS-regler** (font, bakgrunn, farge, padding, border-shorthand, `display:inline`, `border-radius`) | **4/4 = 100 %** | Kjernen i Section C sammen med selektorene. |

### 2.2 HTML og XML

| Tema | Gjenganger-score | Kommentar |
|---|---|---|
| **HTML-elementer og attributter** (skjema med `<input>`/`<label>`/`<textarea>`, tabeller `<tr>`/`<td>`/`colspan`/`rowspan`, `<img alt>`, `<video src>`, `<div>`/`<span>` blokk vs. inline, `<button>`) | **4/4 = 100 %** | Skjema- og/eller tabellskriving i hvert sett; HTML-attributt-flervalg i Section A. |
| **HTML-/DOM-tre** (tegn dokumenttreet av en HTML-snutt) | **2/4 = 50 %** | «Build/draw the Document tree». |
| **XML og JSON** (velformet XML, gyldige tagnavn, rot-element, tomme elementer, gyldig JSON) | **4/4 = 100 %** | Fast innslag i sant/usant-listene og som egen «velg gyldige tagnavn»-oppgave. |
| **Relative URL-er** (regn ut relativ sti mellom filer i et mappetre) | **~4/4 = 100 %** | Egen B-oppgave i tre sett (musikk-/serie-nettsted) + ett flervalg i det fjerde. Klassisk gjenganger. |
| **Bildeformater** (GIF/JPEG/PNG: tapsløs/tap, transparens, animasjon, antall farger) | **3/4 = 75 %** | Som fyll-inn, flervalg og utfyllingstabell. |

### 2.3 JavaScript

| Tema | Gjenganger-score | Kommentar |
|---|---|---|
| **Kodesporing / «hva skrives ut / hva er verdien»** (løkke-utskrift `do-while`/`for`/`continue`, boolske uttrykk, variabelsporing, `Math.floor`) | **4/4 = 100 %** | Kjernen i JS-lesedelen; boolsk sporing (`humid`/`isValid`/`sendFile`) gjenbrukes. |
| **DOM-manipulering** (`getElementById().innerHTML`, `document.write`, `document.forms[...]`, `getElementsByTagName`, `img.src.match`) | **3/4 = 75 %** | «Skriv funksjon som leser skjemafelt og oppdaterer siden.» |
| **Funksjoner, løkker, betingelser, hendelser** (`function`, `for`/`while`, `if/else`, `onclick`) | **4/4 = 100 %** | Ryggrad i all JS-skriving; `onclick`-knapper går igjen. |
| **`prompt`/`alert` og brukerinteraksjon** | **3/4 = 75 %** | Les tall fra bruker, regn og vis (trehøyde, gange/dele). |
| **Date-objektet** (`new Date()`, `getDay()`, `getHours()`, datodifferanse) | **3/4 = 75 %** | «Er timen over 12:20?», «dager til jul», «trehøyde om n år». |
| **Typetvang og sammenligning** (`==` vs `===`, streng+tall-konkatenering, `Boolean(...)`) | **2/4 = 50 %** | Egen sporingstabell i eksempel2; string+1 = «181» i eksempel1. |
| **Finn/rett feil i JS-kode** (identifisér N feiltyper, skriv rettet kode, vis utskrift) | **1/4 = 25 %** | Distinktiv sjanger i 2015 (fem feiltyper i en dagsløkke). |

### 2.4 Canvas (egen kategori — svært tungtveiende)

| Tema | Gjenganger-score | Kommentar |
|---|---|---|
| **Skriv JavaScript som tegner en figur i `<canvas>` med 2D-API-et** (`getContext("2d")`, `beginPath`, `arc`, `moveTo`/`lineTo`, `strokeRect`, `fill`/`stroke`) | **4/4 = 100 %** | **Alltid siste C-oppgave, 6–10 %.** Ansikt (2015, 2019), seilbåt (eks.1), sirkel+kryss i ramme (eks.2). Enkeltstående største oppgavetype i settet. |
| **Canvas-konsept** (canvas-primitiver, `getContext`, Canvas vs SVG) | **3/4 = 75 %** | Både flervalg og «forklar 4–5 forskjeller Canvas vs SVG». |

### 2.5 Nettverk, protokoller og web-arkitektur

| Tema | Gjenganger-score | Kommentar |
|---|---|---|
| **TCP/IP-modellens 4 lag** (Application/Transport/Network/Physical + protokoll per lag) | **~4/4 = 100 %** | «Navngi de 4 lagene og forklar hvert kort»; også lag↔protokoll-matching (eks.1) og fyll-inn (eks.2). Nesten verbatim gjenbruk. |
| **HTTP-metoder POST vs GET** (caching, bokmerking, URL-lengde, synlighet av data) | **2/4 = 50 %** | Egen forklaringsoppgave + sant/usant. |
| **Protokoller generelt** (FTP for store filer, HTTP, DNS/navneservere) | **~4/4 = 100 %** | «Hvilken protokoll egner seg for store filer → FTP» går igjen; DNS i fyll-inn/sant-usant. |

### 2.6 Temaer som IKKE forekommer i arkivet (men står i gjeldende emnebeskrivelse)

| Tema | Forekomst | Merknad |
|---|---|---|
| **Universell utforming / WCAG / ARIA** | **0/4** | Helt fraværende. Framhevet i dagens emnebeskrivelse. |
| **Responsivt design / media queries** | **0/4** | Fraværende. |
| **Flexbox / CSS Grid** | **0/4** | Fraværende; layout er posisjonsbasert. |
| **Ajax / `fetch` / asynkron JS** | **0/4** | Fraværende (JSON kun som syntaks-sant/usant). |
| **Semantisk HTML5-struktur** | **0/4** | Fraværende (kun `div`/`span`). |
| **Sikkerhet (XSS/HTTPS/CSRF)** | **~0/4** | Nær fraværende. |

**Viktigste funn:** Fem tema-familier opptrer i **hvert eneste** av de fire settene — **CSS
box-model + selektorer + posisjonering**, **HTML-elementer/skjema/tabell**, **XML/JSON- og
URL-fakta**, **JavaScript-sporing og -skriving med DOM**, og **canvas-2D-tegning**. Legger
man til **TCP/IP-lagene** og **protokoller (FTP/DNS/HTTP)** har man mesteparten av poengene.
Men **arkivets temaunivers er smalere enn dagens emnebeskrivelse** — se merknaden i seksjon 1.

---

## 3. Oppgavetype-katalog

De sjangrene som faktisk går igjen, med sensors foretrukne løsningsform. Fire hovedfamilier:
**flervalg/sant-usant**, **kodesporing**, **korte forklaringer** og **kodeskriving
(HTML/CSS/JS/canvas)**.

### A. Flervalg og sant/usant (Section A, ~30 %)
- **Krav:** ett riktig alternativ (flervalg), eller T/F på en påstandsliste. Om
  CSS-box-model-rekkefølge, selektorsyntaks, `position`-standard, HTML-attributter, canvas,
  JS-syntaks (for-løkke, `Math.max`, `Boolean`), protokoller (FTP), XML-regler.
- **Distraktorenes karakter:** tett formulerte syntaksvarianter der ett tegn/ord skiller
  riktig fra galt (`h2+p` vs `h2~p` vs `h2.p`; `border-width`-verdirekkefølge TRBL; `==` vs
  `===`; `<link>` vs `<script src>` for ekstern JS). Krever presis syntaks-hukommelse.

### B. Kodesporing «hva skrives ut / hva er verdien» (JS)
- **Krav:** kjør snutten mekanisk i hodet og angi utskrift/verdi.
- **Faste konstruksjoner:** boolske uttrykk med `&&`/`||` (returnerer true/false);
  løkke-utskrift (`do-while` som skriver 0–9, `for` over array, `continue` som hopper over
  `i===3`); variabelsporing gjennom flere tilordninger; typetvang (`i==j` true, `i===j`
  false); `Math.floor(3.8)=3`; streng+tall = konkatenering («181»).
- **Vekting:** 0,3–3 % per punkt.

### C. Korte forklaringsoppgaver (Section B)
- **Krav:** forklar presist i noen setninger/kulepunkter. Faste temaer: **TCP/IP-lagenes 4
  lag og oppgave**, **POST vs GET**, **Canvas vs SVG (4–5 punkter)**, **ekstern vs. intern
  vs. inline stilark (med kodeeksempel)**, **de 4 delene av en CSS-regel**.
- **Vekting:** 4–8 %. Konsishet forventes (jf. sensorsignal).

### D. Relative URL-er
- **Krav:** gitt et mappe-/filtre, oppgi korrekt relativ sti fra fil X til fil Y (`../`,
  `mappe/fil.html`, bare `fil.html` i samme mappe).
- **Vekting:** 1–1,5 % per delspørsmål, 4–6 % totalt. Nesten alltid til stede.

### E. Fyll-inn (setninger/tabell)
- **Krav:** fyll inn manglende ord/verdi: `z-index`, `src`-attributt, DNS, `content`-boks,
  bildeformattabell (GIF/JPEG/PNG × tap/transparens/animasjon/farger), `position`-verdier.
- **Vekting:** ~1–1,5 % per felt.

### F. Skriv HTML (Section C)
- **Krav:** produsér HTML fra en spesifikasjon: **skjema** (`<label>`+`<input type=text/email>`),
  **tabell** (`<tr>`/`<th>`/`<td>` med `<img src>`), **knapp med `onclick`**.
- **Vekting:** 4–5 %.

### G. Skriv CSS (Section C — kjernen)
- **Krav:** skriv regler som treffer riktig selektor og setter riktige egenskaper:
  **pseudo-klasser** (`a:link/visited/hover/active`, `.klasse:hover`), **pseudo-elementer**
  (`::first-line`, `::first-letter`, `::before`/`::after` med `content:url(...)`),
  **posisjonering** (`position:relative/absolute` med `top`/`left`), **box-model**
  (`border:10px solid green`, `padding`), **font** (`font-family/size/weight/style`),
  **`display:inline`**.
- **Vekting:** 8–12 % samlet; ofte tyngdepunktet i C.

### H. Skriv JavaScript (Section C)
- **Krav:** funksjon som leser skjemafelt (`getElementById(...).value` / `document.forms[0]`),
  regner (største av to tall, gange/dele, trehøyde, dager til jul, «class over 12:20»), og
  oppdaterer siden (`innerHTML` / `document.write` / `alert`). Ofte med `if/else`, løkke og
  `Date`. Enkelte er **fyll-inn-hull** i en nesten ferdig funksjon (lyspære-toggle med
  `src.match`; `while`-løkke som teller til 10).
- **Vekting:** 4–10 %.

### I. Canvas-2D-tegning (Section C — fast siste oppgave)
- **Krav:** skriv fullstendig JS som henter canvas (`getElementById`), sjekker
  `getContext`, henter 2D-konteksten og tegner en figur med `beginPath`, `arc` (sirkler/øyne/
  munn), `moveTo`/`lineTo` (linjer), `strokeRect`/`fillRect`, `fillStyle`/`strokeStyle`,
  `lineWidth`, `fill`/`stroke`. Fasit sier eksplisitt at figuren bare trenger å være
  *tilnærmet* riktig (størrelse/sentrering/farge er ikke poenggivende).
- **Vekting:** **6–10 % i hvert sett** — den enkeltstående største oppgaven.

### J. Finn og rett feil i kode (JS)
- **Krav:** identifisér N *typer* feil (samme feiltype flere steder teller som én), skriv
  rettet kode, og vis hva den rettede koden skriver ut. 2015: fem feiltyper (uquotet
  array-strenger, feil løkkestart `i=1`, tilordning `=` i `if`, manglende `+` i utskrift,
  feil indeks i else-gren).
- **Vekting:** 5 %+5 %+2 %. Sjeldnere (1/4), men høy uttelling når den kommer.

---

## 4. Sensorens krav

Destillert fra de fire løsningsforslagene, som fungerer som sensorveiledning.

### Metaregler (gjentas i innledningen)
1. **«Koden trenger ikke matche fasit.»** Løsningsforslagene innleder Section C med at
   *«løsningene er bare noen av mange måter — det er idéene som teller»*. Alternative,
   korrekte løsninger gir full pott.
2. **Prosentvekting per deloppgave er oppgitt** — disponér tiden etter poeng.
3. **Konsishet i forklaringer.** Forklaringsoppgavene (TCP/IP, Canvas vs SVG, POST/GET)
   besvares med korte, presise kulepunkter — fasitene er stramme.
4. **Flere svar kan være riktige** i fyll-inn: fasit noterer eksplisitt at «PNG kan også
   være tapskomprimert, så det er også riktig» og «andre svar godtas så lenge de er riktige».

### Stil og poenggivning (fasitens faktiske kodestil)
- **Idiomatisk, kortfattet vanilla-kode.** Fasit bruker enkel HTML5, ren CSS uten
  preprosessorer, og JavaScript uten rammeverk. Ingen jQuery, ingen build-verktøy.
- **DOM-idiomer forventes:** `document.getElementById(id).innerHTML = ...`,
  `getElementById(id).value`, `document.forms[0].felt.value`, `onclick="fn()"`.
- **Canvas-fasiten følger et fast oppsett:** `window.onload = function(){ ... }`, hent canvas,
  sjekk `canvas && canvas.getContext`, hent `getContext("2d")`, tegn med sti-API-et. Studenten
  bør automatisere dette skjelettet.
- **Delvis riktig gir uttelling.** I «finn feilene» godtas rett *type*-identifikasjon selv om
  ikke hvert forekomststed listes; i canvas godtas omtrentlig figur.
- **Både engelske og norske svar/kommentarer forekommer** — settene er på engelsk, men
  fagterminologien (HTTP, box model, pseudo-class, TCP/IP) brukes konsekvent på engelsk.
- **Presis syntaks premieres i flervalget:** her finnes ingen delvis uttelling — feil
  selektor/verdi gir null. Distraktorene er tette (se 3A).

---

## 5. Typiske feil (utledet av fasitkommentarer og distraktorer)

1. **Feil rekkefølge i box-model** — svare «border, margin, padding» i stedet for korrekt
   **margin → border → padding** (utenfra og inn). Fast distraktor.
2. **Blande CSS-selektortyper** — `h2.p` / `h2*p` i stedet for etterkommer `h2 p` eller
   søsken `h2+p`/`h2~p`; forveksle `.klasse` (class) med element-selektor.
3. **Feil lenketilstand-rekkefølge / -navn** — `a:unvisited`/`a:mouseover` finnes ikke; riktig
   er `a:link`, `a:visited`, `a:hover`, `a:active` (LVHA-rekkefølgen).
4. **Feil `border-width`-shorthand** — verdirekkefølgen er **topp, høyre, bunn, venstre**
   (klokkeretning); studenten bytter om høyre/venstre eller topp/bunn.
5. **`=` i stedet for `==`/`===` i betingelse** — `if (i = today)` tilordner og gir uendelig/
   feil løkke (2015-klassiker).
6. **Manglende `+` ved strengkonkatenering** — `"Today is " days[i]` er syntaksfeil; må være
   `"Today is " + days[i]`.
7. **Feil løkkegrenser / av-med-én** — starte `for` på `i=1` og hoppe over første element;
   glemme at `<=` vs `<` endrer antall iterasjoner.
8. **Bruke feil indeks i utskrift** — skrive `days[today]` der det skal være `days[i]` (gir
   alltid samme dag).
9. **Typetvang-fallgruver** — anta at `age + 1` med `prompt`-input blir tall (blir «181»);
   forveksle `==` (verditvang, true) med `===` (streng, false).
10. **Ekstern JS via `<link>`** — feilaktig tro at `<link>` laster JavaScript; riktig er
    `<script src="...">` (fast sant/usant-felle).
11. **Bildeformat-forvekslinger** — «JPG begrenset til 256 farger» (nei, det er GIF-8-bit),
    «GIF for foto» (nei, JPEG), «GIF er tapskomprimert» (nei, tapsløst).
12. **Canvas: glemme `beginPath()`/`getContext("2d")`** eller å hente canvas-elementet før man
    tegner — fasit understreker «ikke glem å aksessere canvas-elementet og bruke 2D-API-et».
13. **XML/JSON-validitet** — bomme på at XML må ha ett rot-element, at tagnavn ikke kan starte
    med siffer/`#`, eller at et JSON-objekt er gyldig.
14. **Relativ URL** — glemme `../` for å gå opp et nivå, eller legge til unødig sti når filene
    ligger i samme mappe.

---

## 6. API-/konstruksjonsapparat

Apparatet er **bredt men grunt** — det spenner over HTML, CSS og JavaScript/DOM/canvas, men
hver enkelt konstruksjon er på innføringsnivå. Ingen appendiks med funksjonssignaturer følger
settene; studenten må kunne syntaksen utenat.

### Må beherskes aktivt (skrive fra bunnen)

**1. HTML:**
- Dokumentskjelett (`<!DOCTYPE html>`, `<html>`/`<head>`/`<body>`), `<h1>`–`<h2>`, `<p>`,
  `<div>`/`<span>` (blokk vs. inline), `<b>`, `<ul>`/`<li>`.
- **Skjema:** `<form>`, `<label for>`, `<input type="text/email/button">`, `<textarea rows
  cols>`, `onclick`.
- **Tabell:** `<table>`/`<tr>`/`<th>`/`<td>`, `colspan`/`rowspan`.
- `<img src alt>`, `<video src controls>`, `<a href>`, `<script src>`, `<link rel stylesheet>`.
- **Relative stier** (`../`, `mappe/fil`).

**2. CSS:**
- Regelanatomi (selektor { property: value; }); ekstern/intern/inline.
- **Selektorer:** element, `.class`, etterkommer (`div p`), søsken (`h2+p`, `h2~p`),
  barn (`p>b`).
- **Pseudo-klasser:** `:link`, `:visited`, `:hover`, `:active`; **pseudo-elementer:**
  `::first-line`, `::first-letter`, `::before`, `::after` (med `content:`).
- **Box-model:** `margin`, `border` (`border:10px solid green`, `border-radius`,
  `border-width`-shorthand), `padding`.
- **Posisjonering:** `position: static/relative/absolute/fixed`, `top`/`left`, `z-index`,
  `display:inline`, `!important`.
- **Tekst:** `font-family`, `font-size` (px/em), `font-weight`, `font-style`,
  `text-decoration`, `color`, `background-color`.

**3. JavaScript:**
- Variabler (`var`), typer (tall/streng/boolsk), aritmetikk (`%`, `Math.floor`, `Math.max`),
  strengkonkatenering (`+`).
- `if/else`, `for`, `while`, `do-while`, `continue`, boolske uttrykk (`&&`/`||`/`!`).
- Sammenligning `==` vs `===` (typetvang).
- Funksjoner (`function navn(){}`), hendelser (`onclick`).
- **DOM:** `document.getElementById(id)`, `.innerHTML`, `.value`, `document.write`,
  `document.forms[...]`, `getElementsByTagName`, `img.src`/`.match`.
- **Brukerinteraksjon:** `prompt`, `alert`.
- **Date:** `new Date()`, `getDay`, `getHours`, `getMinutes`, datodifferanse (ms → dager).

**4. Canvas 2D-API:**
- `getContext("2d")`, `beginPath`, `arc(x,y,r,start,end,ccw)`, `moveTo`/`lineTo`,
  `rect`/`strokeRect`/`fillRect`, `closePath`, `fill`/`stroke`, `fillStyle`/`strokeStyle`,
  `lineWidth`. `window.onload`-skjelett.

### Bør kjenne til (konseptuelt / differensierer)
- **TCP/IP-modellens 4 lag** og hvilke protokoller som hører til (HTTP/DNS, TCP/UDP, IP, WiFi).
- **HTTP-metoder POST vs GET** (caching, URL-lengde, synlighet).
- **Protokoller:** FTP (store filer), DNS (navn→IP), HTTP.
- **XML/JSON:** velformethet, gyldige tagnavn, rot-element, gyldig JSON-syntaks.
- **Bildeformater:** GIF/JPEG/PNG (tap/tapsløst, transparens, animasjon, farger).
- **Canvas vs SVG** (piksel vs. vektor, DOM-tilgjengelighet, innebygde animasjoner).
- **SVG-format** (XML-basert).

### Ikke belagt i arkivet (men i gjeldende emnebeskrivelse — `verifiser`)
- **WCAG/universell utforming/ARIA**, **responsivt design/media queries**,
  **Flexbox/CSS Grid**, **Ajax/`fetch`**, **semantisk HTML5**, **web-sikkerhet**. En bok bør
  dekke disse for dagens pensum, men de er ikke testet i 2015–2019-settene.

---

## 7. Prognose og prioritering

> **Forbehold:** kun 4 sett (2015 + tre 2019) fra samme æra, med tung oppgavegjenbruk. Sikker
> på *denne eksamenstypens* mønster; usikker på om dagens sett fortsatt ser slik ut, gitt at
> emnebeskrivelsen nå framhever temaer arkivet ikke tester (se seksjon 1). Prioriteringen
> under gjelder «slik arkivet er» — suppler med de moderne temaene.

### Nivå 1 — må beherskes perfekt (avgjør karakteren)
1. **CSS: box-model + selektorer + pseudo-klasser/-elementer + posisjonering (100 % frekvens).**
   Skrive korrekte regler *og* svare på box-model-/selektor-flervalg. Størst samlet poengvekt.
2. **Canvas-2D-tegning (100 %, 6–10 % alene).** Automatisér skjelettet
   (`onload`→hent canvas→`getContext("2d")`→`beginPath`/`arc`/`moveTo`/`lineTo`→`stroke`/`fill`)
   og øv på ansikt, båt, geometriske figurer.
3. **JavaScript-skriving med DOM (100 %).** Les skjemafelt, regn, oppdater side med `innerHTML`/
   `alert`; `Date`-oppgaver; `prompt`. Inkludert fyll-inn-hull i ferdige funksjoner.
4. **HTML: skjema + tabell + grunnstruktur (100 %).**
5. **Kodesporing (100 %).** «Hva skrives ut/hva er verdien» for løkker, boolsk logikk,
   variabelsporing, typetvang.

### Nivå 2 — må kunne (differensierer)
6. **TCP/IP-lagene (~100 %)** — de fire lagene, oppgave og protokoll per lag.
7. **Relative URL-er (~100 %)** — regn stier i mappetre.
8. **XML/JSON-validitet + bildeformater (GIF/JPEG/PNG)** — faste sant/usant- og fyll-inn-poeng.
9. **Forklaringsoppgaver:** POST vs GET, Canvas vs SVG, stilark-typene, CSS-regelens 4 deler.
10. **Protokoll-fakta** (FTP for store filer, DNS).

### Nivå 3 — bør kjenne til (toppkarakter / robusthet)
11. **Finn-og-rett-feil i JS** (5 feiltyper + rettet kode + utskrift).
12. **Typetvang i dybden** (`==` vs `===`-tabeller, `prompt`-strenger).
13. **HTML-/DOM-tre-tegning.**
14. **Moderne pensumtemaer (`verifiser`):** WCAG/universell utforming, responsivt design,
    Flexbox/Grid, Ajax, semantisk HTML5 — ikke i arkivet, men i emnebeskrivelsen.

### Prognose for neste eksamen (arkivbasert)
**Svært sannsynlig samme tredelte struktur** (A 30 % flervalg/kortsvar, B 30 % lengre svar,
C 40 % koding):
- **Section A:** ~10 flervalg/sant-usant om box-model, selektorer, `position`, HTML-attributter,
  canvas, JS-syntaks, protokoller, XML — pluss én boolsk/utskrifts-sporing.
- **Section B:** relative URL-er, TCP/IP-lagene, fyll-inn, JS-kodesporing, én forklaringsoppgave
  (POST/GET eller Canvas vs SVG).
- **Section C:** skjema/tabell-HTML, flere CSS-regler (pseudo-klasser/-elementer, posisjonering,
  box-model), en JS-DOM-funksjon, og **alltid en canvas-tegning**.

**Men:** gitt divergensen mot dagens emnebeskrivelse er det en reell mulighet for at et nytt
sett (ny emneansvarlig) legger inn **responsivt design, Flexbox/Grid, WCAG eller Ajax** som
arkivet ikke har. En bok bør derfor dekke begge deler.

### Konsekvens for boka
Bygg kjernen rundt (1) **CSS-mestring** — box-model, selektorer, pseudo-klasser/-elementer og
posisjonering, både som flervalgstrening og skriveøvelser; (2) en fullt gjennomarbeidet
**canvas-2D-mal** med rikelig tegneøving; (3) **JavaScript/DOM** — funksjoner, løkker, `Date`,
`getElementById`/`innerHTML`, `prompt`/`alert`, og kodesporing; (4) **HTML** — skjema, tabell,
relative URL-er; (5) en **konsept-/faktadel** — TCP/IP-lagene, HTTP POST/GET, protokoller,
XML/JSON, bildeformater, Canvas vs SVG — med flervalgstrening. **I tillegg** bør boka ha egne,
tydelig merkede kapitler for de moderne temaene i emnebeskrivelsen (**responsivt design,
Flexbox/Grid, universell utforming/WCAG, Ajax, semantisk HTML5**) som `(ikke belagt i arkivet
— verifiser mot gjeldende pensum)`, siden disse trolig testes i dag selv om 2015–2019-settene
ikke gjorde det.

### Anbefalt arketype
**Kodefag-hybrid med tredelt struktur** (samme familie som TDT4110, men web-vridd): en bok som
trener **tre ferdigheter parallelt** — (a) *konseptflervalg/fakta*, (b) *kodelesing/sporing*,
og (c) *kodeskriving* — men over **tre språk (HTML/CSS/JS + canvas)** i stedet for ett. Til
forskjell fra TDT4110 (én stor programmeringskjede i Python) er IT2805 preget av **mange små,
selvstendige kodeoppgaver** (skriv én CSS-regel, én liten JS-funksjon, én canvas-figur) og en
**tyngre andel «syntaks-presisjon»** (flervalg der ett tegn avgjør). Arketypen bør derfor ha:
korte teoriseksjoner → mange små, avgrensede kodeoppgaver med fasit → flervalgs-/sant-usant-
drill per tema → og et gjennomgående **canvas-verksted**. Vekt kapitlene etter seksjon 7:
CSS + canvas + JS/DOM + HTML tyngst, konsept-/nettverksdelen som fast, billig poengkilde.

---

## 8. Kildeliste

Alle filer ligger i `~/Desktop/Eksamner/NTNU/IT2805/`. Arkivet: **4 distinkte sett, alle med
løsningsforslag**, 7 PDF-filer.

**Sett lest grundig i sin helhet (oppgave + fasit):**
- `IT2805_2015_Exam.pdf` + `IT2805_2015_Exam_solution.pdf` (2015 — div/span, box-model,
  canvas, prompt, FTP, tabeller, lenke-pseudoklasser; relative URL-er, TCP/IP-lag, fyll-inn,
  boolsk sporing; HTML-skjema, CSS-selektorer/font, JS «finn 5 feil», klokke-oppgave,
  canvas-ansikt).
- `IT2805_2019_Exam_solution.pdf` (2019 ordinær, kun løsningsversjon — canvas, for-løkke,
  border-radius, box-model, søskenselektor, `Math.max`, `Boolean`, FTP, sant/usant, boolsk
  sporing; relative URL-er, TCP/IP-lag, do-while/for/continue-utskrift, position-verdier,
  Canvas vs SVG; JS trehøyde, CSS `.cities`, knapp+alert, pseudo-klasser/-elementer,
  klokke-oppgave, canvas-ansikt).
- `IT2805_2019_Exam_example1.pdf` + `IT2805_2019_Exam_example1_solution.pdf` (2019 eksempel1 —
  `!important`, position-standard, HTML5-API-er, `Math.floor`, SVG=XML, prompt-typetvang,
  etterkommerselektor, border-width-shorthand, XML rot, GIF, TCP/IP-matching; relative URL-er,
  array-indeks, variabelsporing, stilark-typer, POST vs GET; HTML-tabell m/bilde, CSS-position/
  hover/first-line, JS «dager til jul», gange/dele-skjema, canvas-seilbåt).
- `IT2805_2019_Exam_example2.pdf` + `IT2805_2019_Exam_example2_solution.pdf` (2019 eksempel2 —
  input-felt, text-decoration, border-width, `getElementById`, border-radius, table colspan,
  for-alert-antall, forms-tilgang, relativ URL, textarea, JSON/XML sant-usant, `==`/`===`-
  tabell; fyll-inn Transport/dynamisk ruting/z-index, gyldige XML-tagnavn, bildeformat-tabell,
  position-verdier, Canvas vs SVG, HTML-tre + lenke-pseudoklasser; JS «største tall»-skjema,
  CSS `.company`/pseudo-elementer, lyspære-toggle, while-løkke-fyll-inn, canvas
  rektangel+sirkel+kryss).

**Merknader om kildene:**
- **Lite, tidsskjevt arkiv:** 4 sett, tyngdepunkt 2019 (tre sett) + ett 2015. Sterk
  oppgavegjenbruk mellom sittinger (identiske boolske sporinger, TCP/IP-tekst, canvas-ansikt,
  klokke- og relativ-URL-oppgaver). Gir høy sikkerhet om eksamenstypen, lav om dagens pensum.
- **Språk:** alle fire settene er på **engelsk** (fagterminologi på engelsk), til tross for at
  emnebeskrivelsen oppgir norsk undervisningsspråk.
- **Figurer/kodebilder:** canvas-måltegningene og enkelte kodebilder (variabelsporing i
  eksempel1) forelå som bilder og ga ingen tekst; de er dekket via fasitenes gjengivelse av
  kode og resultat.
- **Pensum-divergens (viktig):** arkivet 2015–2019 tester **ikke** responsivt design,
  Flexbox/Grid, universell utforming/WCAG, Ajax eller semantisk HTML5, som NTNUs gjeldende
  emnebeskrivelse framhever. Analysen speiler arkivet; moderne temaer må `verifiseres mot
  gjeldende pensum` ved bokbygging.
- **Fagbeskrivelse:** omskrevet sammendrag av NTNUs emnebeskrivelse for IT2805 (scratchpad:
  `fagbeskrivelse-it2805.md`); emnet er verifisert **aktivt** (undervises h2026).
- **Opphavsrett:** alle beskrivelser av oppgaver, løsninger og sensorkommentarer er
  parafrasert og omstrukturert med egne ord. Ingen oppgavetekster eller fasiter er gjengitt
  ordrett; kodemønstrene er standard HTML/CSS/JS-idiomer.
