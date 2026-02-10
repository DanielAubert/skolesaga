/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Informasjonsteknologi 1 (IT 1) VG2
 *
 * Seksjon 6: Databaser (Kapittel 6.1–6.5)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 6.1: Introduksjon til databaser
// ============================================================================

export const CHAPTER_IT_1_6_1: TextbookChapter = {
  id: 'it-1-6-1',
  courseId: 'it-1',
  chapterNumber: '6.1',
  title: 'Introduksjon til databaser',
  description: 'Lær hva databaser er, hvorfor vi trenger dem, og forstå forskjellen mellom ulike typer databaser. Bli kjent med grunnleggende begreper som tabeller, rader, kolonner og primærnøkler.',
  estimatedMinutes: 50,
  prevChapter: 'it-1-5-5',
  nextChapter: 'it-1-6-2',
  competenceGoals: [
    'gjøre rede for hva en database er og hvorfor databaser brukes',
    'forklare grunnleggende databasebegreper som tabell, rad, kolonne og primærnøkkel',
    'beskrive forskjellen mellom ulike typer databaser',
  ],
  keyTerms: [
    { term: 'Database', definition: 'En organisert samling av strukturerte data som lagres elektronisk og kan søkes i, oppdateres og administreres effektivt. Databaser brukes i nesten alle digitale systemer, fra nettbutikker og sosiale medier til offentlige registre og banksystemer. En database gir mulighet for å lagre store mengder data på en strukturert måte som gjør det enkelt å finne igjen, endre og slette informasjon.' },
    { term: 'Databasehåndteringssystem (DBMS)', definition: 'Programvare som brukes til å opprette, vedlikeholde og administrere databaser. Et DBMS håndterer lagring, sikkerhet, backup og tilgang til dataene. Eksempler på DBMS-er er MySQL, PostgreSQL, SQLite, Oracle og Microsoft SQL Server. DBMS-et fungerer som et mellomledd mellom brukerne og de fysiske datafilene.' },
    { term: 'Tabell', definition: 'Den grunnleggende strukturen i en relasjonsdatabase. En tabell består av rader (poster/records) og kolonner (felt/fields). Hver tabell representerer én type entitet, for eksempel elever, bøker eller bestillinger. Tabellens kolonner definerer hvilke data som lagres, mens radene inneholder de faktiske dataverdiene.' },
    { term: 'Primærnøkkel', definition: 'En kolonne (eller kombinasjon av kolonner) som unikt identifiserer hver rad i en tabell. Primærnøkkelen kan ikke inneholde duplikater eller NULL-verdier. Vanligvis brukes et automatisk økende heltall (ID) som primærnøkkel. Primærnøkkelen er essensiell for å kunne referere til spesifikke rader og for å koble tabeller sammen.' },
    { term: 'SQL', definition: 'Structured Query Language er det standardiserte spørrespråket som brukes for å kommunisere med relasjonsdatabaser. Med SQL kan du opprette tabeller, sette inn data, hente ut data, oppdatere data og slette data. SQL ble utviklet på 1970-tallet av IBM og har siden blitt en internasjonal standard som brukes av alle relasjonsdatabaser.' },
    { term: 'Post (rad/record)', definition: 'En enkelt oppføring i en databasetabell som representerer én forekomst av entiteten tabellen beskriver. For eksempel er én elev i en elevtabell én post. Hver post inneholder verdier for alle kolonnene i tabellen. Begrepene post, rad og record brukes om hverandre.' },
    { term: 'Felt (kolonne/field)', definition: 'En navngitt egenskap i en databasetabell som definerer hvilken type informasjon som lagres. For eksempel kan en elevtabell ha feltene fornavn, etternavn, fodselsdato og klasse. Hvert felt har en definert datatype som bestemmer hva slags verdier som kan lagres i feltet, for eksempel tekst, heltall eller dato.' },
  ],
  content: [
    {
      id: 'it1-6-1-intro',
      type: 'text',
      content: `## Introduksjon til databaser

Tenk deg at du skal holde oversikt over alle elevene på en skole. Du trenger navn, fødselsdato, klasse, adresse, telefonnummer og karakterer for hundrevis av elever. Du kunne lagret alt i et regneark, men hva skjer når rektor vil vite hvilke elever i 2A som har mer enn 4 i snitt? Eller når en elev bytter klasse og du må oppdatere informasjonen overalt? Med et enkelt regneark blir dette fort uoversiktlig og feilutsatt.

Databaser løser akkurat dette problemet. En **database** er en organisert samling av data som er strukturert slik at den kan søkes i, oppdateres og administreres effektivt. Databaser er ryggraden i nesten all moderne programvare. Når du logger inn på Instagram, søker på Google, bestiller en vare på Komplett.no eller sjekker bussruter på Ruter, kommuniserer applikasjonen med en database i bakgrunnen.

I dette kapittelet skal du lære hva databaser er, hvorfor de er så viktige, og bli kjent med de grunnleggende begrepene du trenger for å jobbe med dem.`,
    },
    {
      id: 'it1-6-1-def-database',
      type: 'definition',
      title: 'Database',
      content: `En **database** er en organisert samling av strukturerte data som lagres elektronisk i et datasystem. Dataene er organisert slik at de enkelt kan opprettes, leses, oppdateres og slettes – dette kalles CRUD-operasjoner (Create, Read, Update, Delete). En database administreres av et **databasehåndteringssystem** (DBMS – Database Management System), som er programvaren som håndterer all kommunikasjon mellom brukere/applikasjoner og de fysiske dataene.`,
    },
    {
      id: 'it1-6-1-text-hvorfor',
      type: 'text',
      title: 'Hvorfor trenger vi databaser?',
      content: `Før databaser ble vanlige, lagret organisasjoner data i vanlige filer – tekstfiler, regneark eller papirbaserte arkiver. Denne tilnærmingen hadde mange problemer:

**Redundans og inkonsistens**: Samme data ble ofte lagret flere steder. Hvis en elev byttet adresse, måtte endringen gjøres på mange forskjellige steder, og det var lett å glemme noen.

**Vanskelig tilgang**: For å finne spesifikk informasjon måtte man ofte gå gjennom store mengder data manuelt eller skrive spesialtilpassede programmer.

**Sikkerhet**: Det var vanskelig å kontrollere hvem som hadde tilgang til hvilke data. En lærer burde for eksempel se karakterene til sine elever, men ikke lønnsopplysninger til andre ansatte.

**Samtidig tilgang**: Når flere personer prøvde å oppdatere de samme dataene samtidig, kunne data bli ødelagt eller gå tapt.

Databaser løser alle disse problemene gjennom:

- **Strukturert lagring** – Data organiseres i tabeller med klare regler for format og sammenhenger
- **Effektive søk** – SQL gjør det enkelt å finne nøyaktig den informasjonen du trenger
- **Dataintegritet** – Regler (constraints) sikrer at dataene alltid er gyldige og konsistente
- **Tilgangskontroll** – DBMS-et styrer hvem som kan lese, skrive og endre data
- **Transaksjonshåndtering** – Flere brukere kan jobbe med databasen samtidig uten å ødelegge for hverandre
- **Backup og gjenoppretting** – Data kan sikkerhetskopieres og gjenopprettes hvis noe går galt`,
    },
    {
      id: 'it1-6-1-text-typer',
      type: 'text',
      title: 'Typer databaser',
      content: `Det finnes mange typer databaser, men de to viktigste kategoriene er **relasjonsdatabaser** og **ikke-relasjonelle databaser** (NoSQL).

### Relasjonsdatabaser (SQL)

Relasjonsdatabaser organiserer data i **tabeller** med rader og kolonner, der tabellene kan kobles sammen gjennom **relasjoner**. Dette er den mest brukte databasetypen og har vært standarden siden 1970-tallet. Relasjonsdatabaser bruker SQL (Structured Query Language) for å håndtere data.

Eksempler på relasjonsdatabaser:
- **MySQL** – Verdens mest brukte åpen kildekode-database, brukes av WordPress, Facebook og YouTube
- **PostgreSQL** – Avansert åpen kildekode-database kjent for pålitelighet og standardoverholdelse
- **SQLite** – Lettvekts-database som lagres i én enkelt fil, brukes i mobilapper og nettlesere
- **Oracle Database** – Kommersiell enterprise-database brukt av store organisasjoner
- **Microsoft SQL Server** – Microsofts relasjonsdatabase for Windows-baserte systemer

### Ikke-relasjonelle databaser (NoSQL)

NoSQL-databaser bruker andre strukturer enn tabeller for å lagre data. De er ofte bedre egnet for ustrukturerte eller semi-strukturerte data, og for systemer som trenger svært høy ytelse eller skalerbarhet.

De vanligste typene NoSQL-databaser er:
- **Dokumentdatabaser** (f.eks. MongoDB) – Lagrer data som JSON-lignende dokumenter
- **Nøkkel-verdi-databaser** (f.eks. Redis) – Lagrer data som enkle nøkkel-verdi-par, ekstremt raske
- **Grafdatabaser** (f.eks. Neo4j) – Optimalisert for data med mange relasjoner, som sosiale nettverk
- **Kolonnebaserte databaser** (f.eks. Cassandra) – Lagrer data i kolonner i stedet for rader

I dette kurset fokuserer vi på **relasjonsdatabaser** og **SQL**, fordi dette er den mest grunnleggende og utbredte teknologien.`,
    },
    {
      id: 'it1-6-1-def-dbms',
      type: 'definition',
      title: 'Databasehåndteringssystem (DBMS)',
      content: `Et **databasehåndteringssystem** (DBMS – Database Management System) er programvare som fungerer som et mellomledd mellom brukere, applikasjoner og den fysiske databasen. DBMS-et håndterer opprettelse av databaser, lagring og henting av data, sikkerhetskontroll, backup, samtidig tilgang fra flere brukere, og optimalisering av spørringer. Brukere og programmer kommuniserer med DBMS-et via SQL, og DBMS-et tar seg av de tekniske detaljene for hvordan dataene faktisk lagres på disken.`,
    },
    {
      id: 'it1-6-1-text-tabeller',
      type: 'text',
      title: 'Tabeller, rader og kolonner',
      content: `I en relasjonsdatabase er **tabellen** den grunnleggende byggesteinen. En tabell representerer én type informasjon – for eksempel elever, lærere, fag eller karakterer.

Hver tabell har:
- **Kolonner** (felt/fields) som definerer hvilke egenskaper som lagres
- **Rader** (poster/records) som inneholder de faktiske dataene

La oss se på et konkret eksempel. Tenk deg en database for en skole. Vi lager en tabell som heter \`elever\`:

| elev_id | fornavn | etternavn | fodselsdato | klasse |
|---------|---------|-----------|-------------|--------|
| 1       | Emma    | Hansen    | 2008-03-15  | 10A    |
| 2       | Oliver  | Johansen  | 2008-07-22  | 10A    |
| 3       | Nora    | Olsen     | 2008-01-10  | 10B    |
| 4       | Jakob   | Larsen    | 2008-11-03  | 10B    |
| 5       | Sofie   | Berg      | 2008-05-28  | 10A    |

Her har tabellen fem kolonner (\`elev_id\`, \`fornavn\`, \`etternavn\`, \`fodselsdato\`, \`klasse\`) og fem rader (én for hver elev). Kolonnen \`elev_id\` er **primærnøkkelen** – den unikt identifiserer hver elev.

### Datatyper

Hver kolonne har en definert **datatype** som bestemmer hva slags verdier den kan inneholde:

| Datatype | Beskrivelse | Eksempel |
|----------|-------------|----------|
| \`INTEGER\` | Heltall | 1, 42, -7 |
| \`TEXT\` / \`VARCHAR\` | Tekst | 'Emma', 'Hansen' |
| \`REAL\` / \`FLOAT\` | Desimaltall | 3.14, 4.5 |
| \`DATE\` | Dato | '2008-03-15' |
| \`BOOLEAN\` | Sant/usant | TRUE, FALSE |

Valg av riktig datatype er viktig fordi det sikrer at bare gyldige data lagres i databasen. Du kan for eksempel ikke lagre teksten «hei» i en \`INTEGER\`-kolonne.`,
    },
    {
      id: 'it1-6-1-def-primaernokkel',
      type: 'definition',
      title: 'Primærnøkkel (Primary Key)',
      content: `En **primærnøkkel** er en kolonne (eller kombinasjon av kolonner) som unikt identifiserer hver rad i en tabell. Primærnøkkelen har to ufravikelige krav: den kan ikke inneholde duplikater (to rader kan ikke ha samme verdi), og den kan ikke inneholde NULL-verdier (hver rad må ha en verdi). Den vanligste løsningen er å bruke et automatisk økende heltall (auto-increment) som primærnøkkel, ofte kalt \`id\`. Primærnøkkelen er fundamental for å koble tabeller sammen gjennom fremmednøkler.`,
    },
    {
      id: 'it1-6-1-example-skoledatabase',
      type: 'example',
      title: 'Eksempel: En enkel skoledatabase',
      content: `La oss tenke oss en enkel database for en skole med tre tabeller:

**Tabell: elever**
| elev_id | fornavn | etternavn | klasse |
|---------|---------|-----------|--------|
| 1       | Emma    | Hansen    | 10A    |
| 2       | Oliver  | Johansen  | 10A    |
| 3       | Nora    | Olsen     | 10B    |

**Tabell: fag**
| fag_id | fagnavn      | laerer        |
|--------|-------------|---------------|
| 1      | Matematikk  | Kari Nordli   |
| 2      | Norsk       | Per Haugen    |
| 3      | Naturfag    | Lise Vik      |

**Tabell: karakterer**
| karakter_id | elev_id | fag_id | karakter | termin |
|-------------|---------|--------|----------|--------|
| 1           | 1       | 1      | 5        | H2024  |
| 2           | 1       | 2      | 4        | H2024  |
| 3           | 2       | 1      | 3        | H2024  |
| 4           | 3       | 3      | 6        | H2024  |

Legg merke til hvordan tabellen \`karakterer\` bruker \`elev_id\` og \`fag_id\` for å koble karakterer til riktig elev og fag. Disse kolonnene kalles **fremmednøkler** fordi de refererer til primærnøkler i andre tabeller. Denne strukturen unngår at vi må gjenta elevnavn og fagnavn for hver karakter – vi lagrer informasjonen bare én gang og peker til den.`,
    },
    {
      id: 'it1-6-1-text-crud',
      type: 'text',
      title: 'CRUD – de fire grunnoperasjonene',
      content: `Alt arbeid med databaser kan kokes ned til fire grunnleggende operasjoner, kjent som **CRUD**:

- **C**reate (opprette) – Legge til nye data i databasen
- **R**ead (lese) – Hente ut og vise data fra databasen
- **U**pdate (oppdatere) – Endre eksisterende data i databasen
- **D**elete (slette) – Fjerne data fra databasen

I SQL utføres disse operasjonene med følgende kommandoer:

| CRUD-operasjon | SQL-kommando | Eksempel |
|----------------|-------------|----------|
| Create | \`INSERT INTO\` | Legg til en ny elev |
| Read | \`SELECT\` | Hent alle elever i klasse 10A |
| Update | \`UPDATE\` | Endre en elevs klasse |
| Delete | \`DELETE\` | Fjern en elev som har sluttet |

Vi skal lære alle disse kommandoene i detalj i kapittel 6.3.`,
    },
    {
      id: 'it1-6-1-note-sqlite',
      type: 'note',
      title: 'Vi bruker SQLite',
      content: `I dette kurset bruker vi **SQLite** som databasesystem. SQLite er en lettvekts relasjonsdatabase som lagrer hele databasen i én enkelt fil. Den krever ingen separat serverinstallasjon og er perfekt for læring og mindre prosjekter. SQLite er innebygd i Python (via modulen \`sqlite3\`), i alle nettlesere, og i de fleste mobiltelefoner. Til tross for sin enkelthet støtter SQLite standard SQL og brukes i produksjon av selskaper som Apple, Google og Mozilla.`,
    },
    {
      id: 'it1-6-1-tip-verktoy',
      type: 'tip',
      title: 'Verktøy for å jobbe med databaser',
      content: `For å eksperimentere med SQL kan du bruke:

- **DB Browser for SQLite** – Et gratis grafisk program for å opprette, redigere og spørre SQLite-databaser (sqlitebrowser.org)
- **SQLite Online** – Kjør SQL direkte i nettleseren uten installasjon (sqliteonline.com)
- **Python med sqlite3** – Bruk Python-programmering til å jobbe med databaser programmatisk
- **phpMyAdmin** – Webbasert verktøy for MySQL-databaser

Vi anbefaler å starte med DB Browser for SQLite eller en online-editor slik at du kan fokusere på å lære SQL uten å bekymre deg for oppsett.`,
    },
    {
      id: 'it1-6-1-text-historikk',
      type: 'text',
      title: 'Databasenes historie',
      content: `Databaser har en fascinerende historie som henger tett sammen med utviklingen av datamaskiner:

**1960-tallet**: De første databasesystemene ble utviklet. IBM laget IMS (Information Management System) for NASAs Apollo-program. Disse tidlige systemene brukte hierarkiske eller nettverksbaserte modeller som var kompliserte å jobbe med.

**1970**: Edgar F. Codd, en forsker ved IBM, publiserte artikkelen «A Relational Model of Data for Large Shared Data Banks». Denne artikkelen la grunnlaget for relasjonsdatabaser ved å foreslå at data burde organiseres i tabeller med relasjoner mellom dem. Codds ideer var revolusjonerende, men IBM var treg med å implementere dem.

**1974**: IBM begynte å utvikle System R, den første implementasjonen av en relasjonsdatabase, og skapte spørrespråket SEQUEL (senere omdøpt til SQL).

**1979**: Oracle lanserte den første kommersielle relasjonsdatabasen.

**1995**: MySQL ble lansert som åpen kildekode og ble raskt den mest populære databasen for webapplikasjoner.

**2000-tallet**: NoSQL-databaser som MongoDB og Redis ble utviklet for å håndtere de enorme datamengdene som oppsto med sosiale medier og stordata.

I dag er relasjonsdatabaser fortsatt den mest brukte typen, og SQL er et av de viktigste verktøyene enhver utvikler bør mestre.`,
    },
    {
      id: 'it1-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it1-6-1-ex-1',
        number: '6.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en database?',
        options: [
          { id: 'a', text: 'Et program for å skrive tekst', isCorrect: false, feedback: 'Et tekstbehandlingsprogram som Word er ikke en database.' },
          { id: 'b', text: 'En organisert samling av strukturerte data som kan søkes i og administreres', isCorrect: true },
          { id: 'c', text: 'En type nettleser for å vise nettsider', isCorrect: false, feedback: 'En nettleser og en database er to helt forskjellige ting.' },
          { id: 'd', text: 'Et operativsystem for servere', isCorrect: false, feedback: 'Et operativsystem og en database er forskjellige typer programvare.' },
        ],
        solution: 'En database er en organisert samling av strukturerte data som lagres elektronisk og kan opprettes, leses, oppdateres og slettes (CRUD-operasjoner). Databasen administreres av et databasehåndteringssystem (DBMS).',
      },
    },
    {
      id: 'it1-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it1-6-1-ex-2',
        number: '6.1.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en primærnøkkel i en databasetabell?',
        options: [
          { id: 'a', text: 'Den første kolonnen i tabellen', isCorrect: false, feedback: 'Primærnøkkelen trenger ikke være den første kolonnen, selv om den ofte er det.' },
          { id: 'b', text: 'En kolonne som unikt identifiserer hver rad i tabellen', isCorrect: true },
          { id: 'c', text: 'Et passord for å logge inn i databasen', isCorrect: false, feedback: 'Primærnøkkel har ingenting med passord å gjøre – det handler om unik identifikasjon av rader.' },
          { id: 'd', text: 'En kolonne som alltid inneholder tekst', isCorrect: false, feedback: 'Primærnøkkelen kan være av ulike datatyper, men er oftest et heltall.' },
        ],
        solution: 'En primærnøkkel er en kolonne (eller kombinasjon av kolonner) som unikt identifiserer hver rad i en tabell. Den kan ikke inneholde duplikater eller NULL-verdier. Vanligvis brukes et automatisk økende heltall (ID).',
      },
    },
    {
      id: 'it1-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it1-6-1-ex-3',
        number: '6.1.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av disse er IKKE en fordel med å bruke en database fremfor et vanlig regneark?',
        options: [
          { id: 'a', text: 'Bedre tilgangskontroll og sikkerhet', isCorrect: false, feedback: 'Tilgangskontroll er en viktig fordel med databaser.' },
          { id: 'b', text: 'Mulighet for å søke effektivt i store datamengder', isCorrect: false, feedback: 'Effektive søk er en av hovedfordelene med databaser.' },
          { id: 'c', text: 'Enklere å lage diagrammer og grafer', isCorrect: true },
          { id: 'd', text: 'Bedre håndtering av samtidig tilgang fra flere brukere', isCorrect: false, feedback: 'Transaksjonshåndtering er en viktig fordel med databaser.' },
        ],
        solution: 'Regneark som Excel er faktisk bedre egnet for å lage diagrammer og grafer direkte. Databaser er derimot overlegne når det gjelder sikkerhet, effektive søk i store datamengder, dataintegritet og håndtering av flere samtidige brukere.',
      },
    },
    {
      id: 'it1-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it1-6-1-ex-4',
        number: '6.1.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva står CRUD for i databasesammenheng?',
        options: [
          { id: 'a', text: 'Copy, Read, Undo, Download', isCorrect: false, feedback: 'CRUD er en forkortelse for de fire grunnleggende databaseoperasjonene.' },
          { id: 'b', text: 'Create, Read, Update, Delete', isCorrect: true },
          { id: 'c', text: 'Connect, Request, Upload, Disconnect', isCorrect: false, feedback: 'Disse begrepene handler mer om nettverkskommunikasjon enn databaseoperasjoner.' },
          { id: 'd', text: 'Compile, Run, Update, Debug', isCorrect: false, feedback: 'Disse begrepene handler om programvareutvikling, ikke databaseoperasjoner.' },
        ],
        solution: 'CRUD står for Create (opprette nye data), Read (lese/hente data), Update (oppdatere eksisterende data) og Delete (slette data). Disse fire operasjonene utgjør grunnlaget for alt arbeid med databaser, og i SQL utføres de med kommandoene INSERT, SELECT, UPDATE og DELETE.',
      },
    },
    {
      id: 'it1-6-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it1-6-1-ex-5',
        number: '6.1.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du skal lage en database for et skolebibliotek. Beskriv hvilke tabeller du ville opprettet, hvilke kolonner hver tabell ville hatt, og hva du ville valgt som primærnøkkel for hver tabell. Tenk også på hvordan tabellene henger sammen.',
        solution: `En database for et skolebibliotek kan ha følgende tabeller:

**Tabell: boker**
- bok_id (INTEGER, primærnøkkel) – Unikt nummer for hver bok
- tittel (TEXT) – Bokens tittel
- forfatter (TEXT) – Forfatterens navn
- isbn (TEXT) – ISBN-nummer
- sjanger (TEXT) – Sjanger (roman, sakprosa, fantasy osv.)
- antall_eksemplarer (INTEGER) – Antall eksemplarer biblioteket eier

**Tabell: elever**
- elev_id (INTEGER, primærnøkkel) – Unikt elevnummer
- fornavn (TEXT) – Elevens fornavn
- etternavn (TEXT) – Elevens etternavn
- klasse (TEXT) – Elevens klasse

**Tabell: utlaan**
- utlaan_id (INTEGER, primærnøkkel) – Unikt utlånsnummer
- elev_id (INTEGER, fremmednøkkel) – Refererer til elever-tabellen
- bok_id (INTEGER, fremmednøkkel) – Refererer til boker-tabellen
- utlaans_dato (DATE) – Når boken ble lånt
- innleverings_dato (DATE) – Når boken ble levert tilbake (NULL hvis fortsatt utlånt)

Tabellene henger sammen ved at utlaan-tabellen kobler elever og bøker gjennom fremmednøkler (elev_id og bok_id).`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it1-6-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it1-6-1-ex-6',
        number: '6.1.6',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hvilken påstand om SQLite er korrekt?',
        options: [
          { id: 'a', text: 'SQLite krever en egen serverinstallasjon for å kjøre', isCorrect: false, feedback: 'SQLite er en serverløs database som lagres i en enkelt fil.' },
          { id: 'b', text: 'SQLite kan bare brukes med programmeringsspråket C', isCorrect: false, feedback: 'SQLite kan brukes med mange språk, inkludert Python, Java, JavaScript og flere.' },
          { id: 'c', text: 'SQLite lagrer hele databasen i én enkelt fil og krever ingen serverinstallasjon', isCorrect: true },
          { id: 'd', text: 'SQLite støtter ikke standard SQL-kommandoer', isCorrect: false, feedback: 'SQLite støtter det meste av standard SQL.' },
        ],
        solution: 'SQLite er en lettvekts relasjonsdatabase som lagrer hele databasen i én enkelt fil på disk. Den krever ingen separat serverinstallasjon (den er «serverless»). SQLite er innebygd i Python, alle nettlesere og de fleste mobiltelefoner, og støtter standard SQL-kommandoer.',
      },
    },
    {
      id: 'it1-6-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it1-6-1-ex-7',
        number: '6.1.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar forskjellen mellom relasjonsdatabaser og NoSQL-databaser. Gi eksempler på situasjoner der hver type er best egnet, og nevn konkrete databasesystemer for begge kategoriene.',
        solution: `**Relasjonsdatabaser** organiserer data i tabeller med faste kolonner og rader, der tabeller kobles sammen gjennom relasjoner (primærnøkler og fremmednøkler). De bruker SQL som spørrespråk og er best egnet for strukturerte data med klare relasjoner. Eksempler: MySQL, PostgreSQL, SQLite, Oracle.

Best egnet for: banksystemer (som krever strenge konsistensregler), skolesystemer med elever/fag/karakterer, nettbutikker med produkter/bestillinger/kunder, og generelt systemer der datastrukturen er kjent på forhånd.

**NoSQL-databaser** bruker andre lagringsmodeller som dokumenter, nøkkel-verdi-par, grafer eller kolonner. De er ofte mer fleksible i datastrukturen og kan skalere bedre horisontalt. Eksempler: MongoDB (dokumenter), Redis (nøkkel-verdi), Neo4j (grafer), Cassandra (kolonner).

Best egnet for: sosiale medier med ustrukturerte poster og kommentarer, sanntidsapplikasjoner som trenger ekstremt rask tilgang (chat, spill), IoT-systemer med enorme mengder sensordata, og systemer der datastrukturen endres ofte.

Hovedforskjellen er at relasjonsdatabaser prioriterer dataintegritet og konsistens (ACID), mens NoSQL-databaser ofte prioriterer tilgjengelighet, ytelse og fleksibilitet.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.2: Relasjonsdatabaser og datamodellering
// ============================================================================

export const CHAPTER_IT_1_6_2: TextbookChapter = {
  id: 'it-1-6-2',
  courseId: 'it-1',
  chapterNumber: '6.2',
  title: 'Relasjonsdatabaser og datamodellering',
  description: 'Forstå relasjonsdatabasemodellen i dybden, lær om fremmednøkler, relasjonstyper (en-til-en, en-til-mange, mange-til-mange) og hvordan du lager ER-diagrammer for å modellere data.',
  estimatedMinutes: 60,
  prevChapter: 'it-1-6-1',
  nextChapter: 'it-1-6-3',
  competenceGoals: [
    'forklare relasjonsdatabasemodellen med tabeller, primærnøkler og fremmednøkler',
    'identifisere og beskrive relasjonstyper mellom tabeller',
    'lage ER-diagrammer for å modellere datastrukturer',
  ],
  keyTerms: [
    { term: 'Fremmednøkkel (Foreign Key)', definition: 'En kolonne i en tabell som refererer til primærnøkkelen i en annen tabell. Fremmednøkler oppretter relasjoner mellom tabeller og sikrer referanseintegritet – det vil si at du ikke kan referere til en rad som ikke eksisterer. Hvis du for eksempel har en karaktertabell med en fremmednøkkel elev_id, kan du ikke sette inn en karakter for en elev som ikke finnes i elevtabellen.' },
    { term: 'Relasjon', definition: 'En sammenheng mellom to tabeller i en relasjonsdatabase, opprettet gjennom fremmednøkler. Relasjoner gjør det mulig å koble data fra forskjellige tabeller sammen uten å duplisere informasjon. Det finnes tre hovedtyper relasjoner: en-til-en, en-til-mange og mange-til-mange.' },
    { term: 'ER-diagram', definition: 'Entity-Relationship-diagram er en grafisk representasjon av datastrukturen i en database. ER-diagrammer viser entiteter (tabeller) som rektangler, attributter (kolonner) som ovaler, og relasjoner mellom entitetene som linjer med spesielle markeringer for relasjonstype. ER-diagrammer er et viktig planleggingsverktøy som brukes før selve databasen opprettes.' },
    { term: 'Entitet', definition: 'Et objekt eller konsept som vi ønsker å lagre informasjon om i databasen. Entiteter blir til tabeller i den ferdige databasen. Eksempler på entiteter i en skoledatabase er Elev, Lærer, Fag og Karakter. Hver entitet har attributter (egenskaper) som blir til kolonner.' },
    { term: 'En-til-mange-relasjon', definition: 'Den vanligste relasjonstypen der én rad i en tabell kan kobles til mange rader i en annen tabell. For eksempel kan én klasse ha mange elever, men hver elev tilhører bare én klasse. I databasen implementeres dette ved at den «mange»-siden har en fremmednøkkel som peker til den «en»-siden.' },
    { term: 'Mange-til-mange-relasjon', definition: 'En relasjonstype der rader i begge tabellene kan kobles til flere rader i den andre tabellen. For eksempel kan én elev ha mange fag, og ett fag kan ha mange elever. Mange-til-mange-relasjoner implementeres alltid gjennom en koblingstabell (junction table) som inneholder fremmednøkler til begge tabellene.' },
    { term: 'Koblingstabell', definition: 'En mellomtabell som brukes for å implementere mange-til-mange-relasjoner i en relasjonsdatabase. Koblingstabellen inneholder fremmednøkler til de to tabellene som skal kobles, og kan i tillegg inneholde egne attributter. For eksempel kan en koblingstabell mellom elever og fag også inneholde karakter og termin.' },
    { term: 'Referanseintegritet', definition: 'En regel som sikrer at fremmednøkler alltid refererer til eksisterende rader i den refererte tabellen. Hvis du prøver å sette inn en fremmednøkkel-verdi som ikke finnes som primærnøkkel i den andre tabellen, vil databasen avvise operasjonen. Dette forhindrer «foreldreløse» rader og sikrer konsistens i dataene.' },
  ],
  content: [
    {
      id: 'it1-6-2-intro',
      type: 'text',
      content: `## Relasjonsdatabaser og datamodellering

I forrige kapittel ble vi kjent med grunnleggende databasebegreper. Nå skal vi dykke dypere inn i **relasjonsdatabasemodellen** – den modellen som ligger til grunn for de fleste databaser i verden. Vi skal lære hvordan tabeller kobles sammen, hvilke typer relasjoner som finnes, og hvordan vi planlegger en database ved hjelp av ER-diagrammer.

God datamodellering er noe av det viktigste du kan lære om databaser. En godt designet database er enkel å jobbe med, rask å søke i og lett å utvide. En dårlig designet database fører derimot til dupliserte data, inkonsistens og ytelsessproblemer som er vanskelige å rette opp i etterkant. Derfor bruker man alltid tid på å planlegge databasestrukturen grundig før man begynner å lage tabeller og fylle inn data.`,
    },
    {
      id: 'it1-6-2-def-fremmednokkel',
      type: 'definition',
      title: 'Fremmednøkkel (Foreign Key)',
      content: `En **fremmednøkkel** er en kolonne i en tabell som inneholder verdier som refererer til primærnøkkelen i en annen tabell. Fremmednøkler er limet som holder en relasjonsdatabase sammen – de oppretter koblinger mellom tabeller. Fremmednøkler sikrer **referanseintegritet**, som betyr at databasen hindrer deg i å opprette referanser til rader som ikke eksisterer. For eksempel kan du ikke registrere en karakter for elev_id 99 hvis det ikke finnes noen elev med id 99 i elevtabellen.`,
    },
    {
      id: 'it1-6-2-text-relasjonstyper',
      type: 'text',
      title: 'Relasjonstyper',
      content: `Det finnes tre grunnleggende typer relasjoner mellom tabeller i en relasjonsdatabase:

### 1. En-til-en (1:1)

Hver rad i tabell A er koblet til nøyaktig én rad i tabell B, og omvendt. Denne typen er relativt sjelden.

**Eksempel**: Hver elev har nøyaktig ett elevkort, og hvert elevkort tilhører nøyaktig én elev.

| elev_id | fornavn | etternavn |  →  | kort_id | elev_id | kortnummer | utstedt_dato |
|---------|---------|-----------|-----|---------|---------|------------|--------------|
| 1       | Emma    | Hansen    |     | 1       | 1       | EK-2024-001 | 2024-08-15 |
| 2       | Oliver  | Johansen  |     | 2       | 2       | EK-2024-002 | 2024-08-15 |

### 2. En-til-mange (1:N)

Én rad i tabell A kan kobles til mange rader i tabell B, men hver rad i tabell B kobles til bare én rad i tabell A. Dette er den **vanligste** relasjonstypen.

**Eksempel**: Én klasse har mange elever, men hver elev tilhører bare én klasse.

| klasse_id | klassenavn |  →  | elev_id | fornavn | klasse_id |
|-----------|-----------|-----|---------|---------|-----------|
| 1         | 10A       |     | 1       | Emma    | 1         |
| 2         | 10B       |     | 2       | Oliver  | 1         |
|           |           |     | 3       | Nora    | 2         |

Fremmednøkkelen \`klasse_id\` ligger på **mange-siden** (i elevtabellen).

### 3. Mange-til-mange (M:N)

Mange rader i tabell A kan kobles til mange rader i tabell B. Denne relasjonstypen krever alltid en **koblingstabell**.

**Eksempel**: En elev kan ha mange fag, og et fag kan ha mange elever.

Denne relasjonen kan ikke løses med bare en fremmednøkkel – vi trenger en koblingstabell mellom de to:

**elever** ← **elev_fag** → **fag**`,
    },
    {
      id: 'it1-6-2-example-koblingstabell',
      type: 'example',
      title: 'Eksempel: Mange-til-mange med koblingstabell',
      content: `La oss se på forholdet mellom elever og fag:

**Tabell: elever**
| elev_id | fornavn | etternavn |
|---------|---------|-----------|
| 1       | Emma    | Hansen    |
| 2       | Oliver  | Johansen  |
| 3       | Nora    | Olsen     |

**Tabell: fag**
| fag_id | fagnavn     |
|--------|------------|
| 1      | Matematikk |
| 2      | Norsk      |
| 3      | Naturfag   |

**Koblingstabell: elev_fag**
| elev_id | fag_id |
|---------|--------|
| 1       | 1      |
| 1       | 2      |
| 1       | 3      |
| 2       | 1      |
| 2       | 2      |
| 3       | 2      |
| 3       | 3      |

Her kan vi lese at:
- Emma (elev_id 1) tar matematikk, norsk og naturfag
- Oliver (elev_id 2) tar matematikk og norsk
- Nora (elev_id 3) tar norsk og naturfag

Koblingstabellen har en **sammensatt primærnøkkel** bestående av begge fremmednøklene (\`elev_id\` + \`fag_id\`). Den kan også utvides med ekstra kolonner, for eksempel karakter eller termin.`,
    },
    {
      id: 'it1-6-2-text-er-diagrammer',
      type: 'text',
      title: 'ER-diagrammer – planlegging av databaser',
      content: `Før du oppretter en database, bør du planlegge strukturen visuelt. Et **ER-diagram** (Entity-Relationship-diagram) er et standardverktøy for dette. ER-diagrammer viser:

- **Entiteter** (ting vi lagrer informasjon om) som rektangler
- **Attributter** (egenskaper) som ovaler koblet til entiteten
- **Relasjoner** som linjer mellom entiteter med markeringer for relasjonstype

### Kråkefotsnotasjon (Crow's Foot)

Den mest brukte notasjonen for ER-diagrammer i praksis er **kråkefotsnotasjon**. Her brukes symboler på linjene mellom tabellene:

- **|** (strek) = nøyaktig én
- **O** (sirkel) = null (valgfri)
- **<** (kråkefot/gaffel) = mange

Kombinasjoner:
- \`||——||\` = en-til-en (begge obligatoriske)
- \`||——O<\` = en-til-mange (mange-siden er valgfri)
- \`||——|<\` = en-til-mange (mange-siden er obligatorisk)
- \`>O——O<\` = mange-til-mange (begge sider valgfrie)

### Eksempel: ER-diagram for skoledatabase

\`\`\`
┌──────────┐         ┌──────────┐
│  Klasse  │ 1     N │   Elev   │
│──────────│─────────│──────────│
│ klasse_id│         │ elev_id  │
│ navn     │         │ fornavn  │
└──────────┘         │ etternavn│
                     │ klasse_id│
                     └──────────┘
                          │
                          │ N
                     ┌──────────┐
                     │ Elev_Fag │
                     │──────────│
                     │ elev_id  │
                     │ fag_id   │
                     │ karakter │
                     └──────────┘
                          │
                          │ N
                     ┌──────────┐
                     │   Fag    │
                     │──────────│
                     │ fag_id   │
                     │ fagnavn  │
                     │ laerer   │
                     └──────────┘
\`\`\`

Her ser vi at Klasse har en en-til-mange-relasjon med Elev (én klasse har mange elever), og Elev har en mange-til-mange-relasjon med Fag (via koblingstabellen Elev_Fag).`,
    },
    {
      id: 'it1-6-2-text-sql-create',
      type: 'text',
      title: 'Opprette tabeller med SQL',
      content: `Når vi har planlagt databasestrukturen, er neste steg å opprette tabellene med SQL. Kommandoen \`CREATE TABLE\` brukes til å definere en ny tabell med kolonner, datatyper og begrensninger.

Her er SQL-koden for skoledatabasen:

\`\`\`sql
-- Opprett tabellen for klasser
CREATE TABLE klasser (
    klasse_id INTEGER PRIMARY KEY AUTOINCREMENT,
    klassenavn TEXT NOT NULL
);

-- Opprett tabellen for elever
CREATE TABLE elever (
    elev_id INTEGER PRIMARY KEY AUTOINCREMENT,
    fornavn TEXT NOT NULL,
    etternavn TEXT NOT NULL,
    fodselsdato DATE,
    klasse_id INTEGER,
    FOREIGN KEY (klasse_id) REFERENCES klasser(klasse_id)
);

-- Opprett tabellen for fag
CREATE TABLE fag (
    fag_id INTEGER PRIMARY KEY AUTOINCREMENT,
    fagnavn TEXT NOT NULL,
    laerer TEXT
);

-- Opprett koblingstabellen for elever og fag
CREATE TABLE elev_fag (
    elev_id INTEGER,
    fag_id INTEGER,
    karakter INTEGER,
    termin TEXT,
    PRIMARY KEY (elev_id, fag_id),
    FOREIGN KEY (elev_id) REFERENCES elever(elev_id),
    FOREIGN KEY (fag_id) REFERENCES fag(fag_id)
);
\`\`\`

La oss bryte ned de viktigste elementene:

- \`INTEGER PRIMARY KEY AUTOINCREMENT\` – Oppretter en primærnøkkel som automatisk øker med 1 for hver ny rad
- \`TEXT NOT NULL\` – Kolonnen lagrer tekst og kan ikke være tom
- \`FOREIGN KEY ... REFERENCES ...\` – Oppretter en fremmednøkkel som refererer til en annen tabell
- \`PRIMARY KEY (elev_id, fag_id)\` – Sammensatt primærnøkkel som sikrer at kombinasjonen av elev og fag er unik`,
    },
    {
      id: 'it1-6-2-example-nettbutikk',
      type: 'example',
      title: 'Eksempel: Datamodell for en nettbutikk',
      content: `La oss modellere en enkel nettbutikk med kunder, produkter og bestillinger.

**Entiteter og attributter:**
- **Kunde**: kunde_id, fornavn, etternavn, epost, telefon
- **Produkt**: produkt_id, produktnavn, beskrivelse, pris, antall_paa_lager
- **Bestilling**: bestilling_id, kunde_id, bestillingsdato, totalpris, status
- **Bestillingslinje**: bestilling_id, produkt_id, antall, linjepris

**Relasjoner:**
- Kunde → Bestilling: En-til-mange (én kunde kan ha mange bestillinger)
- Bestilling → Bestillingslinje: En-til-mange (én bestilling kan ha mange produkter)
- Produkt → Bestillingslinje: En-til-mange (ett produkt kan være i mange bestillinger)

\`\`\`sql
CREATE TABLE kunder (
    kunde_id INTEGER PRIMARY KEY AUTOINCREMENT,
    fornavn TEXT NOT NULL,
    etternavn TEXT NOT NULL,
    epost TEXT UNIQUE NOT NULL,
    telefon TEXT
);

CREATE TABLE produkter (
    produkt_id INTEGER PRIMARY KEY AUTOINCREMENT,
    produktnavn TEXT NOT NULL,
    beskrivelse TEXT,
    pris REAL NOT NULL,
    antall_paa_lager INTEGER DEFAULT 0
);

CREATE TABLE bestillinger (
    bestilling_id INTEGER PRIMARY KEY AUTOINCREMENT,
    kunde_id INTEGER NOT NULL,
    bestillingsdato DATE DEFAULT CURRENT_DATE,
    totalpris REAL,
    status TEXT DEFAULT 'ny',
    FOREIGN KEY (kunde_id) REFERENCES kunder(kunde_id)
);

CREATE TABLE bestillingslinjer (
    bestilling_id INTEGER,
    produkt_id INTEGER,
    antall INTEGER NOT NULL,
    linjepris REAL NOT NULL,
    PRIMARY KEY (bestilling_id, produkt_id),
    FOREIGN KEY (bestilling_id) REFERENCES bestillinger(bestilling_id),
    FOREIGN KEY (produkt_id) REFERENCES produkter(produkt_id)
);
\`\`\`

Her ser vi mange-til-mange-relasjonen mellom bestillinger og produkter løst gjennom koblingstabellen \`bestillingslinjer\`. En bestilling kan inneholde mange produkter, og et produkt kan inngå i mange bestillinger.`,
    },
    {
      id: 'it1-6-2-note-constraints',
      type: 'note',
      title: 'Viktige begrensninger (constraints) i SQL',
      content: `Begrensninger (constraints) er regler du kan legge på kolonner for å sikre datakvalitet:

- **PRIMARY KEY** – Kolonnen er primærnøkkel (unik og ikke NULL)
- **NOT NULL** – Kolonnen kan ikke være tom
- **UNIQUE** – Alle verdier i kolonnen må være unike
- **DEFAULT verdi** – Gir kolonnen en standardverdi hvis ingen verdi oppgis
- **CHECK (betingelse)** – Verdien må oppfylle en betingelse (f.eks. \`CHECK (alder >= 0)\`)
- **FOREIGN KEY** – Verdien må eksistere som primærnøkkel i en annen tabell

Begrensninger er viktige fordi de sikrer at dataene i databasen alltid er gyldige og konsistente, uavhengig av hvem eller hva som setter inn data.`,
    },
    {
      id: 'it1-6-2-warning-design',
      type: 'warning',
      title: 'Vanlige feil i databasedesign',
      content: `Unngå disse vanlige feilene når du designer en database:

1. **Alt i én tabell**: Ikke legg all informasjon i én stor tabell. Del opp i logiske enheter.
2. **Glemme primærnøkkel**: Hver tabell bør alltid ha en primærnøkkel.
3. **Bruke navn som primærnøkkel**: Navn er ikke unike – bruk et generert ID-nummer.
4. **Lagre beregnede verdier**: Ikke lagre data som kan beregnes (f.eks. alder fra fødselsdato).
5. **Glemme fremmednøkler**: Definer alltid fremmednøkler eksplisitt for å sikre referanseintegritet.
6. **Inkonsistente datatyper**: Bruk alltid samme datatype for kolonner som skal sammenlignes.`,
    },
    {
      id: 'it1-6-2-tip-planlegging',
      type: 'tip',
      title: 'Steg for å designe en database',
      content: `Følg disse stegene når du skal designe en ny database:

1. **Identifiser entitetene** – Hva trenger du å lagre informasjon om? (Elever, bøker, bestillinger...)
2. **Definer attributtene** – Hvilke egenskaper har hver entitet? (Navn, pris, dato...)
3. **Bestem primærnøkler** – Hva identifiserer hver rad unikt?
4. **Finn relasjonene** – Hvordan henger entitetene sammen? (En-til-mange, mange-til-mange?)
5. **Tegn ER-diagram** – Lag en visuell oversikt over strukturen
6. **Skriv CREATE TABLE** – Opprett tabellene med SQL
7. **Test med data** – Sett inn noen testrader og verifiser at alt fungerer`,
    },
    {
      id: 'it1-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it1-6-2-ex-1',
        number: '6.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en fremmednøkkel?',
        options: [
          { id: 'a', text: 'En kolonne som unikt identifiserer rader i sin egen tabell', isCorrect: false, feedback: 'Det du beskriver er en primærnøkkel, ikke en fremmednøkkel.' },
          { id: 'b', text: 'En kolonne som refererer til primærnøkkelen i en annen tabell', isCorrect: true },
          { id: 'c', text: 'En kryptert kolonne for sikker lagring av passord', isCorrect: false, feedback: 'Fremmednøkler handler om relasjoner mellom tabeller, ikke kryptering.' },
          { id: 'd', text: 'En kolonne som alltid inneholder NULL-verdier', isCorrect: false, feedback: 'Fremmednøkler kan inneholde NULL i noen tilfeller, men det er ikke det som definerer dem.' },
        ],
        solution: 'En fremmednøkkel er en kolonne i en tabell som refererer til primærnøkkelen i en annen tabell. Den oppretter en relasjon mellom de to tabellene og sikrer referanseintegritet – du kan ikke referere til en rad som ikke eksisterer.',
      },
    },
    {
      id: 'it1-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it1-6-2-ex-2',
        number: '6.2.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken relasjonstype finnes mellom tabellene «klasser» og «elever» hvis hver elev tilhører nøyaktig én klasse, men en klasse kan ha mange elever?',
        options: [
          { id: 'a', text: 'En-til-en', isCorrect: false, feedback: 'En-til-en betyr at hver klasse bare har én elev, og det stemmer ikke her.' },
          { id: 'b', text: 'En-til-mange', isCorrect: true },
          { id: 'c', text: 'Mange-til-mange', isCorrect: false, feedback: 'Mange-til-mange ville bety at en elev kan tilhøre flere klasser.' },
          { id: 'd', text: 'Ingen relasjon', isCorrect: false, feedback: 'Det er klart en sammenheng mellom klasser og elever.' },
        ],
        solution: 'Dette er en en-til-mange-relasjon (1:N). Én klasse kan ha mange elever, men hver elev tilhører bare én klasse. Fremmednøkkelen klasse_id legges i elevtabellen (på mange-siden av relasjonen).',
      },
    },
    {
      id: 'it1-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it1-6-2-ex-3',
        number: '6.2.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvordan implementeres en mange-til-mange-relasjon i en relasjonsdatabase?',
        options: [
          { id: 'a', text: 'Ved å legge en fremmednøkkel i begge tabellene', isCorrect: false, feedback: 'En fremmednøkkel i begge tabeller skaper to en-til-mange-relasjoner, ikke en mange-til-mange.' },
          { id: 'b', text: 'Ved å bruke en koblingstabell med fremmednøkler til begge tabellene', isCorrect: true },
          { id: 'c', text: 'Ved å slå sammen begge tabellene til én tabell', isCorrect: false, feedback: 'Å slå sammen tabellene ville føre til massiv dataredundans.' },
          { id: 'd', text: 'Mange-til-mange-relasjoner kan ikke opprettes i relasjonsdatabaser', isCorrect: false, feedback: 'Mange-til-mange-relasjoner støttes fullt ut gjennom koblingstabeller.' },
        ],
        solution: 'En mange-til-mange-relasjon implementeres alltid gjennom en koblingstabell (junction table). Koblingstabellen inneholder fremmednøkler til begge de relaterte tabellene. For eksempel kobles elever og fag sammen gjennom en koblingstabell elev_fag med kolonnene elev_id og fag_id.',
      },
    },
    {
      id: 'it1-6-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it1-6-2-ex-4',
        number: '6.2.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: `Gitt følgende SQL:

\`\`\`sql
CREATE TABLE elever (
    elev_id INTEGER PRIMARY KEY AUTOINCREMENT,
    fornavn TEXT NOT NULL,
    etternavn TEXT NOT NULL,
    klasse_id INTEGER,
    FOREIGN KEY (klasse_id) REFERENCES klasser(klasse_id)
);
\`\`\`

Hva betyr \`NOT NULL\` for kolonnene \`fornavn\` og \`etternavn\`?`,
        options: [
          { id: 'a', text: 'Kolonnene kan bare inneholde tall, ikke tekst', isCorrect: false, feedback: 'NOT NULL handler om hvorvidt en kolonne kan være tom, ikke om datatypen.' },
          { id: 'b', text: 'Kolonnene kan ikke være tomme – de må ha en verdi', isCorrect: true },
          { id: 'c', text: 'Kolonnene krypteres automatisk', isCorrect: false, feedback: 'NOT NULL har ingenting med kryptering å gjøre.' },
          { id: 'd', text: 'Kolonnene er skjult for vanlige brukere', isCorrect: false, feedback: 'NOT NULL handler om datakrav, ikke tilgangskontroll.' },
        ],
        solution: 'NOT NULL er en begrensning (constraint) som betyr at kolonnen ikke kan inneholde NULL-verdier – altså at den ikke kan være tom. Når du setter inn en ny rad, må du oppgi en verdi for kolonnene med NOT NULL. Dette sikrer at viktige data som fornavn og etternavn alltid fylles inn.',
      },
    },
    {
      id: 'it1-6-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it1-6-2-ex-5',
        number: '6.2.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tegn et ER-diagram (eller beskriv det med tekst) for en enkel kino-database. Kinoen trenger å holde oversikt over filmer (tittel, sjanger, lengde, aldersgrense), saler (salnummer, antall plasser) og forestillinger (dato, klokkeslett). Identifiser entiteter, attributter, primærnøkler og relasjoner mellom tabellene.',
        solution: `**Entiteter og attributter:**

Tabell: filmer
- film_id (INTEGER, primærnøkkel)
- tittel (TEXT, NOT NULL)
- sjanger (TEXT)
- lengde_min (INTEGER)
- aldersgrense (INTEGER)

Tabell: saler
- sal_id (INTEGER, primærnøkkel)
- salnummer (INTEGER, NOT NULL, UNIQUE)
- antall_plasser (INTEGER)

Tabell: forestillinger
- forestilling_id (INTEGER, primærnøkkel)
- film_id (INTEGER, fremmednøkkel → filmer)
- sal_id (INTEGER, fremmednøkkel → saler)
- dato (DATE, NOT NULL)
- klokkeslett (TEXT, NOT NULL)

**Relasjoner:**
- Film → Forestilling: En-til-mange (én film kan vises i mange forestillinger)
- Sal → Forestilling: En-til-mange (én sal kan brukes til mange forestillinger)

Forestillinger-tabellen fungerer som en kobling mellom filmer og saler, og inneholder fremmednøkler til begge tabellene. Merk at dette IKKE er en mange-til-mange-relasjon fordi forestillingen er en egen entitet med egne attributter (dato, klokkeslett).`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it1-6-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it1-6-2-ex-6',
        number: '6.2.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Skriv SQL-kode (CREATE TABLE) for kino-databasen fra forrige oppgave. Inkluder passende datatyper, primærnøkler, fremmednøkler og NOT NULL-begrensninger der det er relevant.`,
        solution: `\`\`\`sql
CREATE TABLE filmer (
    film_id INTEGER PRIMARY KEY AUTOINCREMENT,
    tittel TEXT NOT NULL,
    sjanger TEXT,
    lengde_min INTEGER,
    aldersgrense INTEGER DEFAULT 0
);

CREATE TABLE saler (
    sal_id INTEGER PRIMARY KEY AUTOINCREMENT,
    salnummer INTEGER NOT NULL UNIQUE,
    antall_plasser INTEGER NOT NULL
);

CREATE TABLE forestillinger (
    forestilling_id INTEGER PRIMARY KEY AUTOINCREMENT,
    film_id INTEGER NOT NULL,
    sal_id INTEGER NOT NULL,
    dato DATE NOT NULL,
    klokkeslett TEXT NOT NULL,
    FOREIGN KEY (film_id) REFERENCES filmer(film_id),
    FOREIGN KEY (sal_id) REFERENCES saler(sal_id)
);
\`\`\`

Forklaring:
- Alle tabeller har en auto-increment primærnøkkel.
- NOT NULL brukes på viktige kolonner som tittel, salnummer, dato og klokkeslett.
- UNIQUE på salnummer sikrer at to saler ikke kan ha samme nummer.
- DEFAULT 0 på aldersgrense betyr at filmen er for alle aldre med mindre annet oppgis.
- FOREIGN KEY sikrer at forestillinger kun kan referere til filmer og saler som faktisk eksisterer.`,
        allowsUpload: true,
      },
    },
    {
      id: 'it1-6-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it1-6-2-ex-7',
        number: '6.2.7',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: `Du har tabellene \`forfattere\` og \`boker\`. En forfatter kan skrive mange bøker, og en bok kan ha flere forfattere (samarbeid). Hvilken relasjonstype er dette, og hvordan løses det?`,
        options: [
          { id: 'a', text: 'En-til-mange: legg forfatter_id som fremmednøkkel i boker-tabellen', isCorrect: false, feedback: 'Da kan en bok bare ha én forfatter, men oppgaven sier at en bok kan ha flere forfattere.' },
          { id: 'b', text: 'En-til-en: legg bok_id som fremmednøkkel i forfattere-tabellen', isCorrect: false, feedback: 'Da kan en forfatter bare ha én bok, og en bok bare ha én forfatter.' },
          { id: 'c', text: 'Mange-til-mange: opprett en koblingstabell forfatter_bok med fremmednøkler til begge tabellene', isCorrect: true },
          { id: 'd', text: 'Lagre alle forfatternavn som kommaseparert tekst i boker-tabellen', isCorrect: false, feedback: 'Å lagre flere verdier i én kolonne bryter med relasjonsdatabaseprinsippene og gjør søk svært vanskelig.' },
        ],
        solution: 'Dette er en mange-til-mange-relasjon: én forfatter kan skrive mange bøker, og én bok kan ha mange forfattere. Løsningen er en koblingstabell (f.eks. forfatter_bok) som inneholder fremmednøklene forfatter_id og bok_id. Koblingstabellen kan eventuelt ha en ekstra kolonne for rolle (f.eks. hovedforfatter, medforfatter).',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.3: SQL – grunnleggende spørringer
// ============================================================================

export const CHAPTER_IT_1_6_3: TextbookChapter = {
  id: 'it-1-6-3',
  courseId: 'it-1',
  chapterNumber: '6.3',
  title: 'SQL – grunnleggende spørringer (SELECT, INSERT, UPDATE, DELETE)',
  description: 'Lær å bruke de fire grunnleggende SQL-kommandoene for å hente ut, sette inn, oppdatere og slette data i en relasjonsdatabase.',
  estimatedMinutes: 65,
  prevChapter: 'it-1-6-2',
  nextChapter: 'it-1-6-4',
  competenceGoals: [
    'skrive SQL-spørringer for å hente ut data med SELECT',
    'sette inn nye data med INSERT INTO',
    'oppdatere eksisterende data med UPDATE',
    'slette data med DELETE',
    'bruke WHERE-klausulen for å filtrere data',
  ],
  keyTerms: [
    { term: 'SELECT', definition: 'SQL-kommandoen som brukes for å hente ut (lese) data fra en eller flere tabeller i databasen. SELECT er den mest brukte SQL-kommandoen og kan kombineres med WHERE for filtrering, ORDER BY for sortering, og LIMIT for å begrense antall resultater. SELECT tilsvarer R (Read) i CRUD-modellen.' },
    { term: 'INSERT INTO', definition: 'SQL-kommandoen som brukes for å sette inn nye rader i en tabell. Du spesifiserer tabellnavn, kolonnenavn og verdier som skal settes inn. INSERT tilsvarer C (Create) i CRUD-modellen. Du kan sette inn én rad om gangen eller flere rader i én kommando.' },
    { term: 'UPDATE', definition: 'SQL-kommandoen som brukes for å endre eksisterende data i en tabell. UPDATE brukes alltid sammen med SET (for å angi nye verdier) og bør nesten alltid ha en WHERE-klausul for å begrense hvilke rader som oppdateres. Uten WHERE oppdateres alle rader i tabellen. UPDATE tilsvarer U (Update) i CRUD-modellen.' },
    { term: 'DELETE', definition: 'SQL-kommandoen som brukes for å fjerne rader fra en tabell. DELETE bør nesten alltid brukes med en WHERE-klausul for å spesifisere hvilke rader som skal slettes. Uten WHERE slettes alle rader i tabellen. DELETE tilsvarer D (Delete) i CRUD-modellen.' },
    { term: 'WHERE', definition: 'En klausul som brukes med SELECT, UPDATE og DELETE for å filtrere hvilke rader som påvirkes av kommandoen. WHERE bruker betingelser med sammenligningsoperatorer (=, <, >, <=, >=, <>, LIKE, IN, BETWEEN) og logiske operatorer (AND, OR, NOT) for å presisere utvalget.' },
    { term: 'ORDER BY', definition: 'En klausul som brukes med SELECT for å sortere resultatene. Standard sortering er stigende (ASC), men du kan bruke DESC for synkende rekkefølge. Du kan sortere etter én eller flere kolonner.' },
  ],
  content: [
    {
      id: 'it1-6-3-intro',
      type: 'text',
      content: `## SQL – grunnleggende spørringer

Nå som du forstår hvordan databaser og tabeller er strukturert, er det på tide å lære selve språket vi bruker for å kommunisere med databasen: **SQL** (Structured Query Language). SQL uttales enten «ess-kju-ell» eller «sequel», og begge uttalene er aksepterte.

SQL er et **deklarativt** språk, noe som betyr at du beskriver **hva** du vil ha, ikke **hvordan** datamaskinen skal gjøre det. Når du skriver \`SELECT fornavn FROM elever WHERE klasse = '10A'\`, sier du til databasen: «Gi meg fornavnene til alle elever i klasse 10A.» Databasen finner selv ut den mest effektive måten å hente ut dataene på.

I dette kapittelet skal du lære de fire grunnleggende SQL-kommandoene som tilsvarer CRUD-operasjonene:
- **SELECT** – Hente ut data (Read)
- **INSERT INTO** – Sette inn data (Create)
- **UPDATE** – Oppdatere data (Update)
- **DELETE** – Slette data (Delete)

Vi bruker skoledatabasen fra forrige kapittel som eksempel gjennom hele kapittelet.`,
    },
    {
      id: 'it1-6-3-text-setup',
      type: 'text',
      title: 'Eksempeldatabasen',
      content: `For å følge eksemplene i dette kapittelet, la oss sette opp en database med noen testdata:

\`\`\`sql
-- Opprett tabellene
CREATE TABLE klasser (
    klasse_id INTEGER PRIMARY KEY AUTOINCREMENT,
    klassenavn TEXT NOT NULL
);

CREATE TABLE elever (
    elev_id INTEGER PRIMARY KEY AUTOINCREMENT,
    fornavn TEXT NOT NULL,
    etternavn TEXT NOT NULL,
    fodselsdato DATE,
    klasse_id INTEGER,
    FOREIGN KEY (klasse_id) REFERENCES klasser(klasse_id)
);

CREATE TABLE fag (
    fag_id INTEGER PRIMARY KEY AUTOINCREMENT,
    fagnavn TEXT NOT NULL,
    laerer TEXT
);

CREATE TABLE karakterer (
    karakter_id INTEGER PRIMARY KEY AUTOINCREMENT,
    elev_id INTEGER,
    fag_id INTEGER,
    karakter INTEGER,
    termin TEXT,
    FOREIGN KEY (elev_id) REFERENCES elever(elev_id),
    FOREIGN KEY (fag_id) REFERENCES fag(fag_id)
);

-- Sett inn testdata
INSERT INTO klasser (klassenavn) VALUES ('10A'), ('10B'), ('10C');

INSERT INTO elever (fornavn, etternavn, fodselsdato, klasse_id) VALUES
    ('Emma', 'Hansen', '2008-03-15', 1),
    ('Oliver', 'Johansen', '2008-07-22', 1),
    ('Nora', 'Olsen', '2008-01-10', 2),
    ('Jakob', 'Larsen', '2008-11-03', 2),
    ('Sofie', 'Berg', '2008-05-28', 1),
    ('Liam', 'Dahl', '2008-09-17', 3),
    ('Ella', 'Nilsen', '2008-02-05', 3),
    ('Noah', 'Andreassen', '2008-06-30', 2);

INSERT INTO fag (fagnavn, laerer) VALUES
    ('Matematikk', 'Kari Nordli'),
    ('Norsk', 'Per Haugen'),
    ('Naturfag', 'Lise Vik'),
    ('Engelsk', 'Tom Bakke');

INSERT INTO karakterer (elev_id, fag_id, karakter, termin) VALUES
    (1, 1, 5, 'H2024'), (1, 2, 4, 'H2024'), (1, 3, 5, 'H2024'),
    (2, 1, 3, 'H2024'), (2, 2, 4, 'H2024'), (2, 3, 3, 'H2024'),
    (3, 1, 6, 'H2024'), (3, 2, 5, 'H2024'), (3, 3, 6, 'H2024'),
    (4, 1, 4, 'H2024'), (4, 2, 3, 'H2024'),
    (5, 1, 5, 'H2024'), (5, 2, 5, 'H2024'), (5, 3, 4, 'H2024'),
    (6, 1, 2, 'H2024'), (6, 2, 3, 'H2024'),
    (7, 1, 4, 'H2024'), (7, 2, 4, 'H2024'), (7, 3, 5, 'H2024'),
    (8, 1, 3, 'H2024'), (8, 2, 2, 'H2024');
\`\`\`

Du kan kjøre denne koden i DB Browser for SQLite eller en online SQL-editor for å følge med på eksemplene.`,
    },
    {
      id: 'it1-6-3-text-select',
      type: 'text',
      title: 'SELECT – hente ut data',
      content: `\`SELECT\` er den mest brukte SQL-kommandoen. Den brukes til å hente ut data fra en eller flere tabeller.

### Grunnleggende syntaks

\`\`\`sql
SELECT kolonne1, kolonne2, ... FROM tabellnavn;
\`\`\`

### Hente alle kolonner

Bruk \`*\` (stjerne) for å hente alle kolonner:

\`\`\`sql
SELECT * FROM elever;
\`\`\`

Resultat:
| elev_id | fornavn | etternavn | fodselsdato | klasse_id |
|---------|---------|-----------|-------------|-----------|
| 1       | Emma    | Hansen    | 2008-03-15  | 1         |
| 2       | Oliver  | Johansen  | 2008-07-22  | 1         |
| 3       | Nora    | Olsen     | 2008-01-10  | 2         |
| ...     | ...     | ...       | ...         | ...       |

### Hente spesifikke kolonner

\`\`\`sql
SELECT fornavn, etternavn FROM elever;
\`\`\`

Resultat:
| fornavn | etternavn |
|---------|-----------|
| Emma    | Hansen    |
| Oliver  | Johansen  |
| Nora    | Olsen     |
| ...     | ...       |

### DISTINCT – fjerne duplikater

\`\`\`sql
SELECT DISTINCT klasse_id FROM elever;
\`\`\`

Gir bare de unike verdiene: 1, 2, 3 (selv om mange elever deler samme klasse_id).`,
    },
    {
      id: 'it1-6-3-text-where',
      type: 'text',
      title: 'WHERE – filtrere resultater',
      content: `\`WHERE\`-klausulen lar deg filtrere hvilke rader som returneres. Den brukes med sammenligningsoperatorer og logiske operatorer.

### Sammenligningsoperatorer

| Operator | Betydning | Eksempel |
|----------|-----------|----------|
| \`=\` | Lik | \`klasse_id = 1\` |
| \`<>\` eller \`!=\` | Ulik | \`karakter <> 6\` |
| \`<\` | Mindre enn | \`karakter < 4\` |
| \`>\` | Større enn | \`karakter > 4\` |
| \`<=\` | Mindre enn eller lik | \`karakter <= 3\` |
| \`>=\` | Større enn eller lik | \`karakter >= 5\` |

### Eksempler

\`\`\`sql
-- Alle elever i klasse 10A (klasse_id = 1)
SELECT fornavn, etternavn FROM elever WHERE klasse_id = 1;
\`\`\`

| fornavn | etternavn |
|---------|-----------|
| Emma    | Hansen    |
| Oliver  | Johansen  |
| Sofie   | Berg      |

\`\`\`sql
-- Alle karakterer som er 5 eller bedre
SELECT * FROM karakterer WHERE karakter >= 5;
\`\`\`

### Logiske operatorer: AND, OR, NOT

\`\`\`sql
-- Elever i klasse 1 født etter juli 2008
SELECT fornavn, etternavn, fodselsdato
FROM elever
WHERE klasse_id = 1 AND fodselsdato > '2008-07-01';
\`\`\`

\`\`\`sql
-- Elever i klasse 1 eller klasse 2
SELECT fornavn, etternavn, klasse_id
FROM elever
WHERE klasse_id = 1 OR klasse_id = 2;
\`\`\`

\`\`\`sql
-- Alle elever UTENOM klasse 1
SELECT fornavn, etternavn, klasse_id
FROM elever
WHERE NOT klasse_id = 1;
\`\`\`

### LIKE – søk med jokertegn

\`\`\`sql
-- Elever med etternavn som starter med 'H'
SELECT * FROM elever WHERE etternavn LIKE 'H%';

-- Elever med etternavn som inneholder 'sen'
SELECT * FROM elever WHERE etternavn LIKE '%sen%';
\`\`\`

\`%\` matcher null eller flere tegn. \`_\` matcher nøyaktig ett tegn.

### IN – flere verdier

\`\`\`sql
-- Elever i klasse 1 eller 3
SELECT * FROM elever WHERE klasse_id IN (1, 3);
\`\`\`

### BETWEEN – verdiintervall

\`\`\`sql
-- Karakterer mellom 3 og 5 (inkludert)
SELECT * FROM karakterer WHERE karakter BETWEEN 3 AND 5;
\`\`\``,
    },
    {
      id: 'it1-6-3-text-orderby',
      type: 'text',
      title: 'ORDER BY og LIMIT',
      content: `### ORDER BY – sortere resultater

\`\`\`sql
-- Elever sortert etter etternavn (A-Å)
SELECT fornavn, etternavn FROM elever ORDER BY etternavn ASC;

-- Karakterer sortert fra høyest til lavest
SELECT * FROM karakterer ORDER BY karakter DESC;

-- Sorter etter flere kolonner
SELECT * FROM elever ORDER BY klasse_id ASC, etternavn ASC;
\`\`\`

\`ASC\` = stigende (standard), \`DESC\` = synkende.

### LIMIT – begrense antall resultater

\`\`\`sql
-- De tre høyeste karakterene
SELECT * FROM karakterer ORDER BY karakter DESC LIMIT 3;

-- De 5 første elevene sortert etter etternavn
SELECT fornavn, etternavn FROM elever ORDER BY etternavn LIMIT 5;
\`\`\`

### Kombinere alt

\`\`\`sql
-- Topp 3 karakterer i matematikk (fag_id = 1), sortert synkende
SELECT elev_id, karakter
FROM karakterer
WHERE fag_id = 1
ORDER BY karakter DESC
LIMIT 3;
\`\`\`

Resultat:
| elev_id | karakter |
|---------|----------|
| 3       | 6        |
| 1       | 5        |
| 5       | 5        |`,
    },
    {
      id: 'it1-6-3-def-select',
      type: 'definition',
      title: 'SELECT-setningens oppbygging',
      content: `En fullstendig \`SELECT\`-setning har følgende struktur (elementer i klammer er valgfrie):

\`\`\`sql
SELECT [DISTINCT] kolonne1, kolonne2, ...
FROM tabellnavn
[WHERE betingelse]
[ORDER BY kolonne [ASC|DESC]]
[LIMIT antall];
\`\`\`

Rekkefølgen er viktig: SELECT kommer alltid før FROM, som kommer før WHERE, som kommer før ORDER BY, som kommer før LIMIT. Denne rekkefølgen må alltid følges. Databasen behandler derimot setningen i en annen rekkefølge: FROM (finn tabellen), deretter WHERE (filtrer rader), deretter SELECT (velg kolonner), deretter ORDER BY (sorter), og til slutt LIMIT (begrens).`,
    },
    {
      id: 'it1-6-3-text-insert',
      type: 'text',
      title: 'INSERT INTO – sette inn data',
      content: `\`INSERT INTO\` brukes for å legge til nye rader i en tabell.

### Sette inn én rad

\`\`\`sql
INSERT INTO elever (fornavn, etternavn, fodselsdato, klasse_id)
VALUES ('Maja', 'Strand', '2008-04-12', 1);
\`\`\`

Legg merke til at vi ikke oppgir \`elev_id\` – den fylles automatisk fordi den er definert som \`AUTOINCREMENT\`.

### Sette inn flere rader

\`\`\`sql
INSERT INTO elever (fornavn, etternavn, fodselsdato, klasse_id) VALUES
    ('Aksel', 'Moe', '2008-08-20', 2),
    ('Ingrid', 'Lund', '2008-12-01', 3),
    ('Henrik', 'Aasen', '2008-10-15', 1);
\`\`\`

### Sette inn i alle kolonner

Hvis du oppgir verdier for alle kolonner (inkludert primærnøkkel), kan du utelate kolonnenavnene:

\`\`\`sql
INSERT INTO fag VALUES (5, 'Samfunnsfag', 'Anne Holm');
\`\`\`

Men det er **anbefalt** å alltid skrive kolonnenavnene eksplisitt. Da er koden lettere å lese, og den fortsetter å fungere selv om tabellstrukturen endres.`,
    },
    {
      id: 'it1-6-3-text-update',
      type: 'text',
      title: 'UPDATE – oppdatere data',
      content: `\`UPDATE\` brukes for å endre eksisterende data i en tabell.

### Syntaks

\`\`\`sql
UPDATE tabellnavn
SET kolonne1 = ny_verdi1, kolonne2 = ny_verdi2
WHERE betingelse;
\`\`\`

### Eksempler

\`\`\`sql
-- Flytt eleven med elev_id 4 til klasse 10A (klasse_id 1)
UPDATE elever SET klasse_id = 1 WHERE elev_id = 4;

-- Endre læreren for matematikk
UPDATE fag SET laerer = 'Morten Berg' WHERE fagnavn = 'Matematikk';

-- Øk alle karakterer i norsk (fag_id 2) med 1 (maks 6)
UPDATE karakterer
SET karakter = MIN(karakter + 1, 6)
WHERE fag_id = 2;
\`\`\``,
    },
    {
      id: 'it1-6-3-warning-update-delete',
      type: 'warning',
      title: 'VIKTIG: Alltid bruk WHERE med UPDATE og DELETE!',
      content: `Hvis du glemmer \`WHERE\`-klausulen i en \`UPDATE\`- eller \`DELETE\`-setning, vil **alle rader** i tabellen bli påvirket!

\`\`\`sql
-- FARLIG! Dette sletter ALLE elever:
DELETE FROM elever;

-- FARLIG! Dette endrer ALLE karakterer til 1:
UPDATE karakterer SET karakter = 1;
\`\`\`

Dobbeltsjekk alltid at du har en WHERE-klausul som velger riktige rader. Et godt tips er å først kjøre en SELECT med samme WHERE-betingelse for å se hvilke rader som vil bli påvirket:

\`\`\`sql
-- Sjekk først hvilke rader som treffes:
SELECT * FROM elever WHERE klasse_id = 3;

-- Hvis resultatet ser riktig ut, kjør DELETE:
DELETE FROM elever WHERE klasse_id = 3;
\`\`\``,
    },
    {
      id: 'it1-6-3-text-delete',
      type: 'text',
      title: 'DELETE – slette data',
      content: `\`DELETE\` brukes for å fjerne rader fra en tabell.

### Syntaks

\`\`\`sql
DELETE FROM tabellnavn WHERE betingelse;
\`\`\`

### Eksempler

\`\`\`sql
-- Slett eleven med elev_id 6
DELETE FROM elever WHERE elev_id = 6;

-- Slett alle karakterer for termin V2023
DELETE FROM karakterer WHERE termin = 'V2023';

-- Slett alle elever i klasse 10C (klasse_id 3)
DELETE FROM elever WHERE klasse_id = 3;
\`\`\`

### NULL-verdier

\`NULL\` representerer en manglende eller ukjent verdi. Du kan ikke bruke \`=\` for å sammenligne med NULL – bruk i stedet \`IS NULL\` eller \`IS NOT NULL\`:

\`\`\`sql
-- Finn elever uten fødselsdato
SELECT * FROM elever WHERE fodselsdato IS NULL;

-- Finn fag som har en lærer
SELECT * FROM fag WHERE laerer IS NOT NULL;
\`\`\``,
    },
    {
      id: 'it1-6-3-example-komplett',
      type: 'example',
      title: 'Eksempel: Komplett CRUD-sekvens',
      content: `La oss gjøre alle fire CRUD-operasjonene i rekkefølge:

**1. CREATE – Legg til en ny elev:**
\`\`\`sql
INSERT INTO elever (fornavn, etternavn, fodselsdato, klasse_id)
VALUES ('Sara', 'Eriksen', '2008-09-05', 2);
\`\`\`

**2. READ – Se at eleven ble lagt til:**
\`\`\`sql
SELECT * FROM elever WHERE fornavn = 'Sara';
\`\`\`
| elev_id | fornavn | etternavn | fodselsdato | klasse_id |
|---------|---------|-----------|-------------|-----------|
| 9       | Sara    | Eriksen   | 2008-09-05  | 2         |

**3. UPDATE – Flytt Sara til en annen klasse:**
\`\`\`sql
UPDATE elever SET klasse_id = 1 WHERE elev_id = 9;
\`\`\`

**4. Verifiser endringen:**
\`\`\`sql
SELECT fornavn, etternavn, klasse_id FROM elever WHERE elev_id = 9;
\`\`\`
| fornavn | etternavn | klasse_id |
|---------|-----------|-----------|
| Sara    | Eriksen   | 1         |

**5. DELETE – Fjern eleven (f.eks. byttet skole):**
\`\`\`sql
DELETE FROM elever WHERE elev_id = 9;
\`\`\`

**6. Verifiser slettingen:**
\`\`\`sql
SELECT * FROM elever WHERE elev_id = 9;
\`\`\`
(Ingen resultater – raden er slettet.)`,
    },
    {
      id: 'it1-6-3-tip-kommentarer',
      type: 'tip',
      title: 'Kommentarer i SQL',
      content: `Du kan legge til kommentarer i SQL-koden for å forklare hva spørringene gjør:

\`\`\`sql
-- Dette er en kommentar på én linje

/* Dette er en
   kommentar over
   flere linjer */

SELECT fornavn, etternavn  -- Velg navn
FROM elever                -- Fra elevtabellen
WHERE klasse_id = 1;       -- Bare klasse 10A
\`\`\`

Kommentarer er spesielt nyttige i lange og komplekse spørringer.`,
    },
    {
      id: 'it1-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it1-6-3-ex-1',
        number: '6.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken SQL-kommando brukes for å hente ut data fra en tabell?',
        options: [
          { id: 'a', text: 'GET', isCorrect: false, feedback: 'GET er en HTTP-metode, ikke en SQL-kommando.' },
          { id: 'b', text: 'SELECT', isCorrect: true },
          { id: 'c', text: 'FETCH', isCorrect: false, feedback: 'FETCH brukes i noen programmeringsspråk, men standard SQL-kommandoen er SELECT.' },
          { id: 'd', text: 'READ', isCorrect: false, feedback: 'READ er CRUD-begrepet, men den faktiske SQL-kommandoen er SELECT.' },
        ],
        solution: 'SELECT er SQL-kommandoen for å hente ut data fra tabeller. Den tilsvarer Read-operasjonen i CRUD. Grunnleggende syntaks er: SELECT kolonner FROM tabell WHERE betingelse.',
      },
    },
    {
      id: 'it1-6-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it1-6-3-ex-2',
        number: '6.3.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: `Hva returnerer denne spørringen?

\`\`\`sql
SELECT fornavn, etternavn FROM elever WHERE klasse_id = 2;
\`\`\``,
        options: [
          { id: 'a', text: 'Alle kolonner for alle elever', isCorrect: false, feedback: 'Spørringen velger bare kolonnene fornavn og etternavn, og filtrerer på klasse_id.' },
          { id: 'b', text: 'Fornavn og etternavn for elever i klasse 2', isCorrect: true },
          { id: 'c', text: 'Alle elever sortert etter klasse', isCorrect: false, feedback: 'Det er ingen ORDER BY, og WHERE filtrerer – den sorterer ikke.' },
          { id: 'd', text: 'Bare fornavn for elever i klasse 2', isCorrect: false, feedback: 'Spørringen velger både fornavn og etternavn.' },
        ],
        solution: 'Spørringen returnerer kolonnene fornavn og etternavn for alle elever der klasse_id er lik 2. SELECT velger kolonnene, FROM angir tabellen, og WHERE filtrerer radene.',
      },
    },
    {
      id: 'it1-6-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it1-6-3-ex-3',
        number: '6.3.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: `Hva gjør denne SQL-kommandoen?

\`\`\`sql
UPDATE elever SET klasse_id = 3 WHERE etternavn = 'Hansen';
\`\`\``,
        options: [
          { id: 'a', text: 'Sletter alle elever med etternavn Hansen', isCorrect: false, feedback: 'UPDATE endrer data, den sletter ikke. DELETE brukes for å slette.' },
          { id: 'b', text: 'Legger til en ny elev med etternavn Hansen i klasse 3', isCorrect: false, feedback: 'UPDATE endrer eksisterende rader. INSERT brukes for å legge til nye rader.' },
          { id: 'c', text: 'Endrer klasse_id til 3 for alle elever med etternavn Hansen', isCorrect: true },
          { id: 'd', text: 'Henter alle elever med etternavn Hansen fra klasse 3', isCorrect: false, feedback: 'UPDATE endrer data, den henter den ikke. SELECT brukes for å hente data.' },
        ],
        solution: 'UPDATE endrer eksisterende data. SET angir hvilken kolonne som skal endres og til hvilken verdi. WHERE begrenser hvilke rader som påvirkes. Denne kommandoen endrer klasse_id til 3 for alle rader der etternavn er Hansen.',
      },
    },
    {
      id: 'it1-6-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it1-6-3-ex-4',
        number: '6.3.4',
        type: 'classic',
        difficulty: 'medium',
        task: `Skriv SQL-spørringer for følgende oppgaver (bruk eksempeldatabasen fra kapittelet):

a) Hent fornavn og etternavn for alle elever, sortert etter etternavn

b) Hent alle karakterer som er 5 eller høyere

c) Sett inn en ny elev: «Amalie Sørensen», født 2008-02-14, klasse_id 2

d) Endre karakteren til 4 for karakter_id 6`,
        solution: `\`\`\`sql
-- a) Alle elever sortert etter etternavn
SELECT fornavn, etternavn
FROM elever
ORDER BY etternavn ASC;

-- b) Karakterer 5 eller høyere
SELECT *
FROM karakterer
WHERE karakter >= 5;

-- c) Ny elev
INSERT INTO elever (fornavn, etternavn, fodselsdato, klasse_id)
VALUES ('Amalie', 'Sørensen', '2008-02-14', 2);

-- d) Endre karakter
UPDATE karakterer
SET karakter = 4
WHERE karakter_id = 6;
\`\`\``,
      },
    },
    {
      id: 'it1-6-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it1-6-3-ex-5',
        number: '6.3.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: `Hva skjer hvis du kjører denne kommandoen?

\`\`\`sql
DELETE FROM karakterer;
\`\`\``,
        options: [
          { id: 'a', text: 'Ingenting – kommandoen er ugyldig uten WHERE', isCorrect: false, feedback: 'Kommandoen er gyldig SQL, og den vil kjøre – men med alvorlige konsekvenser.' },
          { id: 'b', text: 'Alle rader i karakterer-tabellen slettes', isCorrect: true },
          { id: 'c', text: 'Bare den siste raden i tabellen slettes', isCorrect: false, feedback: 'Uten WHERE påvirkes ALLE rader, ikke bare den siste.' },
          { id: 'd', text: 'Hele karakterer-tabellen slettes inkludert strukturen', isCorrect: false, feedback: 'DELETE sletter rader, ikke tabellen selv. DROP TABLE ville slettet hele tabellen.' },
        ],
        solution: 'DELETE FROM karakterer uten WHERE-klausul sletter ALLE rader i tabellen. Tabellstrukturen beholdes (kolonnene er fortsatt der), men alle dataene er borte. Dette er en svært farlig operasjon, og man bør alltid bruke WHERE for å spesifisere hvilke rader som skal slettes.',
      },
    },
    {
      id: 'it1-6-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it1-6-3-ex-6',
        number: '6.3.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Skriv SQL-spørringer for følgende oppgaver:

a) Finn alle elever med etternavn som slutter på «sen»

b) Finn alle elever som er født mellom mars og august 2008

c) Finn alle karakterer for elev_id 1 eller 3, sortert fra høyeste til laveste karakter

d) Slett alle karakterer for termin «V2023» som er lavere enn 3`,
        solution: `\`\`\`sql
-- a) Etternavn som slutter på «sen»
SELECT fornavn, etternavn
FROM elever
WHERE etternavn LIKE '%sen';

-- b) Født mellom mars og august 2008
SELECT fornavn, etternavn, fodselsdato
FROM elever
WHERE fodselsdato BETWEEN '2008-03-01' AND '2008-08-31';

-- c) Karakterer for elev 1 eller 3, sortert synkende
SELECT *
FROM karakterer
WHERE elev_id IN (1, 3)
ORDER BY karakter DESC;

-- d) Slett lave karakterer for V2023
DELETE FROM karakterer
WHERE termin = 'V2023' AND karakter < 3;
\`\`\`

Forklaring:
- a) LIKE '%sen' matcher alle verdier som slutter på «sen»
- b) BETWEEN inkluderer begge grenseverdiene
- c) IN er en forkortelse for flere OR-betingelser
- d) AND kombinerer to betingelser – begge må være sanne for at raden slettes`,
      },
    },
    {
      id: 'it1-6-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it1-6-3-ex-7',
        number: '6.3.7',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: `Hva er resultatet av denne spørringen?

\`\`\`sql
SELECT fornavn, etternavn
FROM elever
WHERE klasse_id = 1 AND fodselsdato > '2008-06-01'
ORDER BY fornavn ASC
LIMIT 2;
\`\`\`

Elever i klasse 1: Emma (2008-03-15), Oliver (2008-07-22), Sofie (2008-05-28)`,
        options: [
          { id: 'a', text: 'Emma Hansen og Sofie Berg', isCorrect: false, feedback: 'Emma er født 2008-03-15 og Sofie er født 2008-05-28 – begge er FØR 2008-06-01.' },
          { id: 'b', text: 'Oliver Johansen', isCorrect: true },
          { id: 'c', text: 'Oliver Johansen og Emma Hansen', isCorrect: false, feedback: 'Emma er født 2008-03-15, som er IKKE etter 2008-06-01.' },
          { id: 'd', text: 'Ingen resultater', isCorrect: false, feedback: 'Oliver er i klasse 1 og er født 2008-07-22, som er etter 2008-06-01.' },
        ],
        solution: 'Steg for steg: 1) FROM elever – alle 8 elever. 2) WHERE klasse_id = 1 – Emma, Oliver, Sofie. 3) AND fodselsdato > 2008-06-01 – bare Oliver (2008-07-22) er født etter juni. Emma (mars) og Sofie (mai) filtreres bort. 4) ORDER BY fornavn ASC – bare Oliver igjen. 5) LIMIT 2 – bare Oliver (bare én rad å vise). Resultatet er kun Oliver Johansen.',
      },
    },
    {
      id: 'it1-6-3-ex-8',
      type: 'exercise',
      exercise: {
        id: 'it1-6-3-ex-8',
        number: '6.3.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Du har en nettbutikk-database med tabellene kunder, produkter, bestillinger og bestillingslinjer (fra kapittel 6.2). Skriv SQL-spørringer for:

a) Legg til et nytt produkt: «Trådløse hodetelefoner», pris 899.00, 25 på lager

b) Hent alle produkter med pris mellom 100 og 500 kr, sortert fra billigst til dyrest

c) Oppdater prisen på produktet «Trådløse hodetelefoner» til 799.00 (tilbud)

d) Hent alle bestillinger med status «ny», sortert etter bestillingsdato (nyeste først)`,
        solution: `\`\`\`sql
-- a) Nytt produkt
INSERT INTO produkter (produktnavn, pris, antall_paa_lager)
VALUES ('Trådløse hodetelefoner', 899.00, 25);

-- b) Produkter mellom 100 og 500 kr
SELECT produktnavn, pris
FROM produkter
WHERE pris BETWEEN 100 AND 500
ORDER BY pris ASC;

-- c) Oppdater pris
UPDATE produkter
SET pris = 799.00
WHERE produktnavn = 'Trådløse hodetelefoner';

-- d) Nye bestillinger, nyeste først
SELECT *
FROM bestillinger
WHERE status = 'ny'
ORDER BY bestillingsdato DESC;
\`\`\`

Forklaring:
- a) Vi utelater produkt_id (AUTOINCREMENT) og beskrivelse (kan være NULL)
- b) BETWEEN 100 AND 500 inkluderer begge grensene, ORDER BY ASC gir billigst først
- c) Vi bruker produktnavn i WHERE – alternativt kan vi bruke produkt_id for presisjon
- d) DESC gir synkende rekkefølge, altså nyeste dato først`,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.4: SQL – avanserte spørringer og sammenkoblinger
// ============================================================================

export const CHAPTER_IT_1_6_4: TextbookChapter = {
  id: 'it-1-6-4',
  courseId: 'it-1',
  chapterNumber: '6.4',
  title: 'SQL – avanserte spørringer og sammenkoblinger (JOIN, GROUP BY, HAVING, subqueries)',
  description: 'Lær å koble sammen data fra flere tabeller med JOIN, aggregere data med GROUP BY og HAVING, og bruke underspørringer (subqueries) for komplekse spørringer.',
  estimatedMinutes: 70,
  prevChapter: 'it-1-6-3',
  nextChapter: 'it-1-6-5',
  competenceGoals: [
    'bruke JOIN for å koble sammen data fra flere tabeller',
    'bruke aggregeringsfunksjoner som COUNT, SUM, AVG, MIN og MAX',
    'gruppere data med GROUP BY og filtrere grupper med HAVING',
    'skrive underspørringer (subqueries) for komplekse dataspørsmål',
  ],
  keyTerms: [
    { term: 'JOIN', definition: 'En SQL-operasjon som kobler sammen rader fra to eller flere tabeller basert på en felles kolonne (vanligvis en fremmednøkkel og primærnøkkel). JOIN gjør det mulig å hente relatert informasjon fra flere tabeller i én spørring. De vanligste typene er INNER JOIN (bare matchende rader), LEFT JOIN (alle rader fra venstre tabell) og RIGHT JOIN (alle rader fra høyre tabell).' },
    { term: 'INNER JOIN', definition: 'Den vanligste typen JOIN som returnerer bare rader der det finnes en match i begge tabellene. Rader uten match i den andre tabellen utelates fra resultatet. INNER JOIN er standardtypen når du bare skriver JOIN uten å spesifisere type.' },
    { term: 'LEFT JOIN', definition: 'En JOIN-type som returnerer alle rader fra den venstre (første) tabellen, og de matchende radene fra den høyre (andre) tabellen. Hvis det ikke finnes noen match i den høyre tabellen, fylles kolonnene med NULL. LEFT JOIN er nyttig når du vil ha med alle rader fra hovedtabellen, uavhengig av om de har relaterte data i den andre tabellen.' },
    { term: 'GROUP BY', definition: 'En SQL-klausul som grupperer rader med like verdier i angitte kolonner, slik at aggregeringsfunksjoner kan beregnes for hver gruppe. For eksempel kan du gruppere karakterer etter fag_id for å beregne gjennomsnittskarakteren per fag. GROUP BY brukes alltid sammen med aggregeringsfunksjoner som COUNT, SUM, AVG, MIN eller MAX.' },
    { term: 'HAVING', definition: 'En SQL-klausul som filtrerer grupper etter at GROUP BY har blitt utført. HAVING er til grupper det WHERE er til rader. Mens WHERE filtrerer individuelle rader FØR gruppering, filtrerer HAVING hele grupper ETTER gruppering. For eksempel kan HAVING brukes til å vise bare fag der gjennomsnittskarakteren er over 4.' },
    { term: 'Aggregeringsfunksjon', definition: 'Funksjoner som beregner én verdi basert på et sett med verdier. De vanligste er COUNT (tell antall rader), SUM (summer verdier), AVG (beregn gjennomsnitt), MIN (finn laveste verdi) og MAX (finn høyeste verdi). Aggregeringsfunksjoner brukes ofte sammen med GROUP BY for å beregne statistikk per gruppe.' },
    { term: 'Subquery (underspørring)', definition: 'En SELECT-spørring som er nestet inne i en annen SQL-spørring. Underspørringen kjøres først, og resultatet brukes av den ytre spørringen. Subqueries kan brukes i WHERE-klausulen, i FROM-klausulen eller i SELECT-listen. De er nyttige for komplekse dataspørsmål som er vanskelige å uttrykke med bare JOIN.' },
  ],
  content: [
    {
      id: 'it1-6-4-intro',
      type: 'text',
      content: `## SQL – avanserte spørringer og sammenkoblinger

Hittil har vi jobbet med data fra én tabell om gangen. Men den virkelige kraften i relasjonsdatabaser ligger i muligheten til å **koble sammen data fra flere tabeller**. Tenk deg at du vil se elevnavn sammen med fagnanvn og karakterer – den informasjonen er fordelt over tre tabeller (elever, fag og karakterer). For å sette dette sammen trenger vi **JOIN**.

I tillegg skal vi lære å beregne statistikk med **aggregeringsfunksjoner** (telle, summere, finne gjennomsnitt), gruppere data med **GROUP BY**, filtrere grupper med **HAVING**, og bruke **underspørringer** for å løse komplekse dataspørsmål.

Disse teknikkene er det som gjør SQL til et kraftig analyseverktøy. Med dem kan du svare på spørsmål som «Hva er gjennomsnittskarakteren per fag?», «Hvilke elever har karakter over gjennomsnittet?» og «Hvilken klasse har flest elever med toppkarakter?».`,
    },
    {
      id: 'it1-6-4-text-join',
      type: 'text',
      title: 'JOIN – koble sammen tabeller',
      content: `En **JOIN** kobler rader fra to tabeller basert på en felles kolonne. Den vanligste formen er **INNER JOIN**, som returnerer bare rader der det finnes en match i begge tabellene.

### Syntaks for INNER JOIN

\`\`\`sql
SELECT kolonne1, kolonne2, ...
FROM tabell1
INNER JOIN tabell2 ON tabell1.kolonne = tabell2.kolonne;
\`\`\`

### Eksempel: Elever med klassenavn

I stedet for å se bare \`klasse_id\` (som er et tall), vil vi se klassenavnet:

\`\`\`sql
SELECT elever.fornavn, elever.etternavn, klasser.klassenavn
FROM elever
INNER JOIN klasser ON elever.klasse_id = klasser.klasse_id;
\`\`\`

Resultat:
| fornavn | etternavn | klassenavn |
|---------|-----------|------------|
| Emma    | Hansen    | 10A        |
| Oliver  | Johansen  | 10A        |
| Sofie   | Berg      | 10A        |
| Nora    | Olsen     | 10B        |
| Jakob   | Larsen    | 10B        |
| Noah    | Andreassen| 10B        |
| Liam    | Dahl      | 10C        |
| Ella    | Nilsen    | 10C        |

### Tabellaliaser

For å gjøre spørringene kortere kan vi gi tabellene aliaser:

\`\`\`sql
SELECT e.fornavn, e.etternavn, k.klassenavn
FROM elever e
INNER JOIN klasser k ON e.klasse_id = k.klasse_id;
\`\`\`

Her er \`e\` et alias for \`elever\` og \`k\` et alias for \`klasser\`.`,
    },
    {
      id: 'it1-6-4-example-multijoin',
      type: 'example',
      title: 'Eksempel: JOIN over tre tabeller',
      content: `La oss koble elever, karakterer og fag for å se en komplett karakteroversikt med navn:

\`\`\`sql
SELECT
    e.fornavn,
    e.etternavn,
    f.fagnavn,
    k.karakter,
    k.termin
FROM karakterer k
INNER JOIN elever e ON k.elev_id = e.elev_id
INNER JOIN fag f ON k.fag_id = f.fag_id
ORDER BY e.etternavn, f.fagnavn;
\`\`\`

Resultat (utdrag):
| fornavn | etternavn  | fagnavn    | karakter | termin |
|---------|------------|------------|----------|--------|
| Noah    | Andreassen | Matematikk | 3        | H2024  |
| Noah    | Andreassen | Norsk      | 2        | H2024  |
| Sofie   | Berg       | Matematikk | 5        | H2024  |
| Sofie   | Berg       | Naturfag   | 4        | H2024  |
| Sofie   | Berg       | Norsk      | 5        | H2024  |
| ...     | ...        | ...        | ...      | ...    |

Her kobler vi tre tabeller: \`karakterer\` med \`elever\` (via elev_id), og \`karakterer\` med \`fag\` (via fag_id). Resultatet gir oss lesbare navn i stedet for ID-nummer.`,
    },
    {
      id: 'it1-6-4-def-jointyper',
      type: 'definition',
      title: 'Typer JOIN',
      content: `Det finnes flere typer JOIN:

**INNER JOIN** – Returnerer bare rader der det finnes match i begge tabellene. Rader uten match utelates.

**LEFT JOIN** (LEFT OUTER JOIN) – Returnerer alle rader fra venstre tabell, og matchende rader fra høyre tabell. Hvis ingen match finnes, fylles høyre side med NULL.

**RIGHT JOIN** (RIGHT OUTER JOIN) – Returnerer alle rader fra høyre tabell, og matchende rader fra venstre. Motsatt av LEFT JOIN. (Merk: RIGHT JOIN støttes ikke i SQLite, men kan simuleres ved å bytte tabellrekkefølgen med LEFT JOIN.)

**FULL OUTER JOIN** – Returnerer alle rader fra begge tabellene, med NULL der det ikke er match. (Støttes heller ikke direkte i SQLite.)`,
    },
    {
      id: 'it1-6-4-example-leftjoin',
      type: 'example',
      title: 'Eksempel: LEFT JOIN – alle elever, også uten karakterer',
      content: `INNER JOIN viser bare elever som har karakterer. Med LEFT JOIN får vi med alle elever, selv de som mangler karakterer:

\`\`\`sql
SELECT e.fornavn, e.etternavn, f.fagnavn, k.karakter
FROM elever e
LEFT JOIN karakterer k ON e.elev_id = k.elev_id
LEFT JOIN fag f ON k.fag_id = f.fag_id
ORDER BY e.etternavn;
\`\`\`

Hvis en elev ikke har noen karakterer, vises NULL i kolonnene fagnavn og karakter:

| fornavn | etternavn | fagnavn    | karakter |
|---------|-----------|------------|----------|
| Emma    | Hansen    | Matematikk | 5        |
| Emma    | Hansen    | Norsk      | 4        |
| Emma    | Hansen    | Naturfag   | 5        |
| Maja    | Strand    | NULL       | NULL     |

Her ser vi at Maja Strand (som vi satte inn tidligere) ikke har noen karakterer ennå. Med INNER JOIN ville Maja vært usynlig i resultatet.

**Tommelfingerregel**: Bruk INNER JOIN når du bare vil ha rader som matcher i begge tabeller. Bruk LEFT JOIN når du vil beholde alle rader fra den «venstre» tabellen, uansett om de har matchende rader i den andre.`,
    },
    {
      id: 'it1-6-4-text-aggregering',
      type: 'text',
      title: 'Aggregeringsfunksjoner',
      content: `Aggregeringsfunksjoner beregner én verdi basert på mange rader. De vanligste er:

| Funksjon | Beskrivelse | Eksempel |
|----------|-------------|----------|
| \`COUNT()\` | Teller antall rader | \`COUNT(*)\` eller \`COUNT(kolonne)\` |
| \`SUM()\` | Summerer verdier | \`SUM(karakter)\` |
| \`AVG()\` | Beregner gjennomsnitt | \`AVG(karakter)\` |
| \`MIN()\` | Finner laveste verdi | \`MIN(karakter)\` |
| \`MAX()\` | Finner høyeste verdi | \`MAX(karakter)\` |

### Eksempler

\`\`\`sql
-- Antall elever i databasen
SELECT COUNT(*) AS antall_elever FROM elever;
\`\`\`
Resultat: 8

\`\`\`sql
-- Gjennomsnittskarakter for alle
SELECT AVG(karakter) AS gjennomsnitt FROM karakterer;
\`\`\`
Resultat: 4.0 (ca.)

\`\`\`sql
-- Høyeste og laveste karakter
SELECT MAX(karakter) AS hoyeste, MIN(karakter) AS laveste FROM karakterer;
\`\`\`
Resultat: hoyeste = 6, laveste = 2

\`\`\`sql
-- Antall karakterer registrert
SELECT COUNT(*) AS antall_karakterer FROM karakterer;
\`\`\`

Legg merke til \`AS\` – det gir kolonnen i resultatet et forståelig navn (alias).`,
    },
    {
      id: 'it1-6-4-text-groupby',
      type: 'text',
      title: 'GROUP BY – gruppere data',
      content: `\`GROUP BY\` grupperer rader med like verdier slik at aggregeringsfunksjoner beregnes per gruppe.

### Eksempel: Antall elever per klasse

\`\`\`sql
SELECT klasse_id, COUNT(*) AS antall_elever
FROM elever
GROUP BY klasse_id;
\`\`\`

Resultat:
| klasse_id | antall_elever |
|-----------|---------------|
| 1         | 3             |
| 2         | 3             |
| 3         | 2             |

### Eksempel: Gjennomsnittskarakter per fag

\`\`\`sql
SELECT f.fagnavn, AVG(k.karakter) AS snittkarakter
FROM karakterer k
INNER JOIN fag f ON k.fag_id = f.fag_id
GROUP BY f.fagnavn;
\`\`\`

Resultat:
| fagnavn    | snittkarakter |
|------------|---------------|
| Matematikk | 4.0           |
| Naturfag   | 4.67          |
| Norsk      | 3.75          |

### Eksempel: Antall fag per elev

\`\`\`sql
SELECT e.fornavn, e.etternavn, COUNT(*) AS antall_fag
FROM karakterer k
INNER JOIN elever e ON k.elev_id = e.elev_id
GROUP BY e.elev_id, e.fornavn, e.etternavn;
\`\`\`

Resultat:
| fornavn | etternavn | antall_fag |
|---------|-----------|------------|
| Emma    | Hansen    | 3          |
| Oliver  | Johansen  | 3          |
| Nora    | Olsen     | 3          |
| Jakob   | Larsen    | 2          |
| ...     | ...       | ...        |`,
    },
    {
      id: 'it1-6-4-text-having',
      type: 'text',
      title: 'HAVING – filtrere grupper',
      content: `\`HAVING\` filtrerer grupper etter at \`GROUP BY\` har gjort sin jobb. Det er til grupper det \`WHERE\` er til individuelle rader.

**Viktig forskjell:**
- \`WHERE\` filtrerer rader **før** gruppering
- \`HAVING\` filtrerer grupper **etter** gruppering

### Eksempel: Fag med gjennomsnittskarakter over 4

\`\`\`sql
SELECT f.fagnavn, AVG(k.karakter) AS snittkarakter
FROM karakterer k
INNER JOIN fag f ON k.fag_id = f.fag_id
GROUP BY f.fagnavn
HAVING AVG(k.karakter) > 4;
\`\`\`

Resultat:
| fagnavn  | snittkarakter |
|----------|---------------|
| Naturfag | 4.67          |

### Eksempel: Elever med mer enn 2 fag

\`\`\`sql
SELECT e.fornavn, e.etternavn, COUNT(*) AS antall_fag
FROM karakterer k
INNER JOIN elever e ON k.elev_id = e.elev_id
GROUP BY e.elev_id, e.fornavn, e.etternavn
HAVING COUNT(*) > 2;
\`\`\`

### Kombinere WHERE og HAVING

\`\`\`sql
-- Gjennomsnittskarakter per fag for termin H2024,
-- men bare fag der snittet er over 3.5
SELECT f.fagnavn, AVG(k.karakter) AS snittkarakter, COUNT(*) AS antall
FROM karakterer k
INNER JOIN fag f ON k.fag_id = f.fag_id
WHERE k.termin = 'H2024'
GROUP BY f.fagnavn
HAVING AVG(k.karakter) > 3.5;
\`\`\`

Her filtrerer WHERE først ut bare H2024-karakterer, deretter grupperer GROUP BY etter fag, og til slutt filtrerer HAVING bort grupper med snitt under 3.5.`,
    },
    {
      id: 'it1-6-4-note-rekkefølge',
      type: 'note',
      title: 'SQL-klausulenes rekkefølge',
      content: `En fullstendig SELECT-setning har klausulene i denne rekkefølgen:

\`\`\`sql
SELECT kolonner        -- 1. Velg kolonner
FROM tabell            -- 2. Fra tabell(er)
JOIN tabell2 ON ...    -- 3. Koble med andre tabeller
WHERE betingelse       -- 4. Filtrer rader
GROUP BY kolonne       -- 5. Grupper rader
HAVING betingelse      -- 6. Filtrer grupper
ORDER BY kolonne       -- 7. Sorter resultatet
LIMIT antall;          -- 8. Begrens antall rader
\`\`\`

Denne rekkefølgen må alltid følges i SQL-koden. Databasen utfører dem derimot i en annen logisk rekkefølge: FROM/JOIN, deretter WHERE, GROUP BY, HAVING, SELECT, ORDER BY, og til slutt LIMIT.`,
    },
    {
      id: 'it1-6-4-text-subqueries',
      type: 'text',
      title: 'Subqueries – underspørringer',
      content: `En **subquery** (underspørring) er en SELECT-setning som er nestet inne i en annen spørring. Underspørringen kjøres først, og resultatet brukes av den ytre spørringen.

### Subquery i WHERE

\`\`\`sql
-- Finn alle elever med karakter høyere enn gjennomsnittet
SELECT e.fornavn, e.etternavn, k.karakter
FROM karakterer k
INNER JOIN elever e ON k.elev_id = e.elev_id
WHERE k.karakter > (SELECT AVG(karakter) FROM karakterer);
\`\`\`

Her beregner underspørringen først gjennomsnittskarakteren, og den ytre spørringen bruker dette resultatet for å filtrere.

### Subquery med IN

\`\`\`sql
-- Finn alle elever som har karakter 6 i et eller annet fag
SELECT fornavn, etternavn
FROM elever
WHERE elev_id IN (SELECT elev_id FROM karakterer WHERE karakter = 6);
\`\`\`

Underspørringen finner alle elev_id-er med karakter 6, og den ytre spørringen henter navnene til disse elevene.

### Subquery i FROM (avledede tabeller)

\`\`\`sql
-- Finn elevenes gjennomsnittskarakter og vis bare de med snitt over 4
SELECT fornavn, etternavn, snitt
FROM (
    SELECT e.fornavn, e.etternavn, AVG(k.karakter) AS snitt
    FROM karakterer k
    INNER JOIN elever e ON k.elev_id = e.elev_id
    GROUP BY e.elev_id, e.fornavn, e.etternavn
) AS elevsnitt
WHERE snitt > 4;
\`\`\`

Her lager underspørringen en midlertidig tabell (\`elevsnitt\`) med gjennomsnitt per elev, og den ytre spørringen filtrerer denne.`,
    },
    {
      id: 'it1-6-4-example-avansert',
      type: 'example',
      title: 'Eksempel: Komplett analyse av skoledatabasen',
      content: `La oss bruke alle teknikkene vi har lært for å lage en omfattende analyse:

**1. Karakteroversikt med klassenavn og fagnavn:**
\`\`\`sql
SELECT kl.klassenavn, e.fornavn, e.etternavn,
       f.fagnavn, k.karakter
FROM karakterer k
INNER JOIN elever e ON k.elev_id = e.elev_id
INNER JOIN fag f ON k.fag_id = f.fag_id
INNER JOIN klasser kl ON e.klasse_id = kl.klasse_id
ORDER BY kl.klassenavn, e.etternavn, f.fagnavn;
\`\`\`

**2. Beste elev per fag:**
\`\`\`sql
SELECT f.fagnavn, e.fornavn, e.etternavn, k.karakter
FROM karakterer k
INNER JOIN elever e ON k.elev_id = e.elev_id
INNER JOIN fag f ON k.fag_id = f.fag_id
WHERE k.karakter = (
    SELECT MAX(k2.karakter)
    FROM karakterer k2
    WHERE k2.fag_id = k.fag_id
);
\`\`\`

**3. Klassestatistikk:**
\`\`\`sql
SELECT kl.klassenavn,
       COUNT(DISTINCT e.elev_id) AS antall_elever,
       ROUND(AVG(k.karakter), 2) AS snittkarakter,
       MIN(k.karakter) AS laveste,
       MAX(k.karakter) AS hoyeste
FROM klasser kl
INNER JOIN elever e ON kl.klasse_id = e.klasse_id
INNER JOIN karakterer k ON e.elev_id = k.elev_id
GROUP BY kl.klassenavn
ORDER BY snittkarakter DESC;
\`\`\`

\`ROUND(AVG(k.karakter), 2)\` avrunder gjennomsnittet til 2 desimaler, og \`COUNT(DISTINCT e.elev_id)\` teller unike elever (ikke antall karakterrader).`,
    },
    {
      id: 'it1-6-4-tip-alias',
      type: 'tip',
      title: 'Bruk alltid tabellaliaser med JOIN',
      content: `Når du kobler flere tabeller, kan kolonnenavn bli tvetydige. For eksempel har både \`elever\` og \`karakterer\` en kolonne \`elev_id\`. Bruk tabellaliaser for å unngå forvirring:

\`\`\`sql
-- Uten alias (langt og uoversiktlig):
SELECT elever.fornavn, karakterer.karakter
FROM elever INNER JOIN karakterer ON elever.elev_id = karakterer.elev_id;

-- Med alias (kort og ryddig):
SELECT e.fornavn, k.karakter
FROM elever e
INNER JOIN karakterer k ON e.elev_id = k.elev_id;
\`\`\`

Velg korte, meningsfulle aliaser: \`e\` for elever, \`k\` for karakterer, \`f\` for fag, \`kl\` for klasser osv.`,
    },
    {
      id: 'it1-6-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it1-6-4-ex-1',
        number: '6.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva gjør en INNER JOIN?',
        options: [
          { id: 'a', text: 'Setter inn data i to tabeller samtidig', isCorrect: false, feedback: 'JOIN handler om å hente data, ikke sette inn data.' },
          { id: 'b', text: 'Returnerer bare rader der det finnes en match i begge tabellene', isCorrect: true },
          { id: 'c', text: 'Sletter rader som finnes i begge tabellene', isCorrect: false, feedback: 'JOIN sletter ikke data – det kobler data fra flere tabeller.' },
          { id: 'd', text: 'Kopierer alle data fra en tabell til en annen', isCorrect: false, feedback: 'JOIN kopierer ikke data – den henter og kombinerer data midlertidig i et resultat.' },
        ],
        solution: 'INNER JOIN returnerer bare rader der det finnes en matchende verdi i begge tabellene basert på koblingsbetingelsen (ON). Rader i den ene tabellen som ikke har en match i den andre tabellen utelates fra resultatet.',
      },
    },
    {
      id: 'it1-6-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it1-6-4-ex-2',
        number: '6.4.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken aggregeringsfunksjon beregner gjennomsnittet av verdier i en kolonne?',
        options: [
          { id: 'a', text: 'COUNT()', isCorrect: false, feedback: 'COUNT() teller antall rader, den beregner ikke gjennomsnitt.' },
          { id: 'b', text: 'SUM()', isCorrect: false, feedback: 'SUM() summerer verdier, den deler ikke på antall.' },
          { id: 'c', text: 'AVG()', isCorrect: true },
          { id: 'd', text: 'MEAN()', isCorrect: false, feedback: 'MEAN() finnes ikke i standard SQL. Riktig funksjon er AVG().' },
        ],
        solution: 'AVG() (Average) beregner gjennomsnittet av alle verdier i en kolonne. For eksempel gir AVG(karakter) gjennomsnittskarakteren. AVG() ignorerer NULL-verdier i beregningen.',
      },
    },
    {
      id: 'it1-6-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it1-6-4-ex-3',
        number: '6.4.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: `Hva er forskjellen mellom WHERE og HAVING?`,
        options: [
          { id: 'a', text: 'De gjør det samme – det spiller ingen rolle hvilken du bruker', isCorrect: false, feedback: 'WHERE og HAVING har forskjellige formål og virker på ulike tidspunkter i spørringen.' },
          { id: 'b', text: 'WHERE filtrerer individuelle rader før gruppering, HAVING filtrerer grupper etter gruppering', isCorrect: true },
          { id: 'c', text: 'WHERE brukes med SELECT og HAVING brukes med INSERT', isCorrect: false, feedback: 'Begge brukes med SELECT. HAVING brukes spesifikt etter GROUP BY.' },
          { id: 'd', text: 'HAVING er raskere enn WHERE', isCorrect: false, feedback: 'Ytelse avhenger av situasjonen, ikke av klausulen i seg selv.' },
        ],
        solution: 'WHERE filtrerer individuelle rader FØR GROUP BY utføres. HAVING filtrerer grupper ETTER GROUP BY. WHERE kan ikke bruke aggregeringsfunksjoner (COUNT, AVG osv.), men HAVING kan. Eksempel: WHERE karakter > 3 filtrerer enkeltkarakterer, mens HAVING AVG(karakter) > 3 filtrerer hele grupper basert på gjennomsnittet.',
      },
    },
    {
      id: 'it1-6-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it1-6-4-ex-4',
        number: '6.4.4',
        type: 'classic',
        difficulty: 'medium',
        task: `Skriv SQL-spørringer for følgende oppgaver (bruk skoledatabasen):

a) Vis fornavn, etternavn og klassenavn for alle elever (bruk JOIN)

b) Beregn gjennomsnittskarakteren per elev (vis fornavn og gjennomsnitt)

c) Tell antall elever per klasse (vis klassenavn og antall)`,
        solution: `\`\`\`sql
-- a) Elever med klassenavn
SELECT e.fornavn, e.etternavn, kl.klassenavn
FROM elever e
INNER JOIN klasser kl ON e.klasse_id = kl.klasse_id
ORDER BY kl.klassenavn, e.etternavn;

-- b) Gjennomsnittskarakter per elev
SELECT e.fornavn, e.etternavn, ROUND(AVG(k.karakter), 2) AS snitt
FROM karakterer k
INNER JOIN elever e ON k.elev_id = e.elev_id
GROUP BY e.elev_id, e.fornavn, e.etternavn
ORDER BY snitt DESC;

-- c) Antall elever per klasse
SELECT kl.klassenavn, COUNT(*) AS antall_elever
FROM elever e
INNER JOIN klasser kl ON e.klasse_id = kl.klasse_id
GROUP BY kl.klassenavn;
\`\`\``,
      },
    },
    {
      id: 'it1-6-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it1-6-4-ex-5',
        number: '6.4.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: `Hva returnerer denne spørringen?

\`\`\`sql
SELECT f.fagnavn, COUNT(*) AS antall
FROM karakterer k
INNER JOIN fag f ON k.fag_id = f.fag_id
GROUP BY f.fagnavn
HAVING COUNT(*) > 5;
\`\`\``,
        options: [
          { id: 'a', text: 'Alle fag med færre enn 5 registrerte karakterer', isCorrect: false, feedback: 'HAVING COUNT(*) > 5 filtrerer fag med MER enn 5, ikke færre.' },
          { id: 'b', text: 'Fagnavn og antall karakterer for fag som har mer enn 5 registrerte karakterer', isCorrect: true },
          { id: 'c', text: 'De 5 fagene med flest karakterer', isCorrect: false, feedback: 'Det er ingen LIMIT 5 i spørringen. HAVING filtrerer på antall, ikke på rekkefølge.' },
          { id: 'd', text: 'Alle karakterer som er høyere enn 5', isCorrect: false, feedback: 'COUNT(*) teller antall rader, ikke verdien av karakteren.' },
        ],
        solution: 'Spørringen grupperer karakterer etter fagnavn, teller antall rader per gruppe, og viser bare de fagene som har mer enn 5 registrerte karakterer. HAVING filtrerer etter gruppering og kan bruke aggregeringsfunksjoner som COUNT(*).',
      },
    },
    {
      id: 'it1-6-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it1-6-4-ex-6',
        number: '6.4.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Skriv SQL-spørringer for følgende oppgaver:

a) Vis elevnavn, fagnavn og karakter for alle karakterer som er over gjennomsnittskarakteren (bruk subquery)

b) Finn alle elever som har fått karakter 6 i minst ett fag – vis navnet og faget de fikk 6 i

c) Vis klassestatistikk: klassenavn, antall elever, gjennomsnittskarakter (avrundet til 1 desimal), høyeste og laveste karakter – men bare for klasser med gjennomsnitt over 3.5`,
        solution: `\`\`\`sql
-- a) Karakterer over gjennomsnittet (subquery)
SELECT e.fornavn, e.etternavn, f.fagnavn, k.karakter
FROM karakterer k
INNER JOIN elever e ON k.elev_id = e.elev_id
INNER JOIN fag f ON k.fag_id = f.fag_id
WHERE k.karakter > (SELECT AVG(karakter) FROM karakterer)
ORDER BY k.karakter DESC;

-- b) Elever med karakter 6
SELECT e.fornavn, e.etternavn, f.fagnavn
FROM karakterer k
INNER JOIN elever e ON k.elev_id = e.elev_id
INNER JOIN fag f ON k.fag_id = f.fag_id
WHERE k.karakter = 6;

-- c) Klassestatistikk med HAVING
SELECT kl.klassenavn,
       COUNT(DISTINCT e.elev_id) AS antall_elever,
       ROUND(AVG(k.karakter), 1) AS snitt,
       MAX(k.karakter) AS hoyeste,
       MIN(k.karakter) AS laveste
FROM klasser kl
INNER JOIN elever e ON kl.klasse_id = e.klasse_id
INNER JOIN karakterer k ON e.elev_id = k.elev_id
GROUP BY kl.klassenavn
HAVING AVG(k.karakter) > 3.5
ORDER BY snitt DESC;
\`\`\`

Forklaring:
- a) Underspørringen beregner gjennomsnittet av alle karakterer, og den ytre spørringen finner alle som er over dette.
- b) En enkel JOIN med WHERE-filter.
- c) COUNT(DISTINCT e.elev_id) teller unike elever (ikke antall karakterrader). HAVING filtrerer bort klasser med lavt snitt.`,
      },
    },
    {
      id: 'it1-6-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it1-6-4-ex-7',
        number: '6.4.7',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: `Hva er forskjellen mellom INNER JOIN og LEFT JOIN i denne situasjonen?

Du har 8 elever i elevtabellen, men bare 6 av dem har karakterer i karakterer-tabellen.

\`\`\`sql
-- Spørring A:
SELECT e.fornavn FROM elever e INNER JOIN karakterer k ON e.elev_id = k.elev_id;

-- Spørring B:
SELECT e.fornavn FROM elever e LEFT JOIN karakterer k ON e.elev_id = k.elev_id;
\`\`\``,
        options: [
          { id: 'a', text: 'Begge returnerer 8 rader', isCorrect: false, feedback: 'INNER JOIN returnerer bare rader med match i begge tabeller.' },
          { id: 'b', text: 'Spørring A returnerer 6 rader (bare elever med karakterer), spørring B returnerer minst 8 rader (alle elever)', isCorrect: true },
          { id: 'c', text: 'Spørring A returnerer 8 rader, spørring B returnerer 6 rader', isCorrect: false, feedback: 'Det er omvendt – INNER JOIN er mer restriktiv enn LEFT JOIN.' },
          { id: 'd', text: 'Begge returnerer 6 rader', isCorrect: false, feedback: 'LEFT JOIN inkluderer alle rader fra den venstre tabellen.' },
        ],
        solution: 'INNER JOIN returnerer bare rader der det finnes match i begge tabeller – altså bare de 6 elevene som har karakterer. LEFT JOIN returnerer ALLE rader fra den venstre tabellen (elever), altså alle 8 elever. De 2 elevene uten karakterer vises med NULL i karakterkolonnene. Merk: spørring B kan returnere MER enn 8 rader fordi elever med flere karakterer gir flere rader.',
      },
    },
    {
      id: 'it1-6-4-ex-8',
      type: 'exercise',
      exercise: {
        id: 'it1-6-4-ex-8',
        number: '6.4.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Du har nettbutikk-databasen fra kapittel 6.2. Skriv SQL-spørringer for:

a) Vis alle bestillinger med kundenavn (fornavn og etternavn), bestillingsdato og totalpris – sortert etter dato

b) Finn total omsetning (sum av alle totalpris) per kunde – vis bare kunder med total omsetning over 1000 kr

c) Finn den mest bestilte produktet (produktet som har flest bestillingslinjer). Vis produktnavn og antall ganger det er bestilt.`,
        solution: `\`\`\`sql
-- a) Bestillinger med kundenavn
SELECT ku.fornavn, ku.etternavn, b.bestillingsdato, b.totalpris
FROM bestillinger b
INNER JOIN kunder ku ON b.kunde_id = ku.kunde_id
ORDER BY b.bestillingsdato;

-- b) Total omsetning per kunde, over 1000 kr
SELECT ku.fornavn, ku.etternavn, SUM(b.totalpris) AS total_omsetning
FROM bestillinger b
INNER JOIN kunder ku ON b.kunde_id = ku.kunde_id
GROUP BY ku.kunde_id, ku.fornavn, ku.etternavn
HAVING SUM(b.totalpris) > 1000
ORDER BY total_omsetning DESC;

-- c) Mest bestilte produkt
SELECT p.produktnavn, COUNT(*) AS antall_bestillinger
FROM bestillingslinjer bl
INNER JOIN produkter p ON bl.produkt_id = p.produkt_id
GROUP BY p.produkt_id, p.produktnavn
ORDER BY antall_bestillinger DESC
LIMIT 1;
\`\`\`

Forklaring:
- a) Enkel JOIN mellom bestillinger og kunder.
- b) GROUP BY grupperer per kunde, SUM() beregner total omsetning, HAVING filtrerer bort de under 1000 kr.
- c) GROUP BY grupperer per produkt, COUNT(*) teller antall bestillingslinjer, ORDER BY DESC + LIMIT 1 gir det mest populære produktet.`,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.5: Normalisering og databasedesign
// ============================================================================

export const CHAPTER_IT_1_6_5: TextbookChapter = {
  id: 'it-1-6-5',
  courseId: 'it-1',
  chapterNumber: '6.5',
  title: 'Normalisering og databasedesign',
  description: 'Lær prinsippene for god databasedesign gjennom normalisering. Forstå de tre normalformene, identifiser problemer med unormaliserte data, og design effektive databaser som unngår redundans og inkonsistens.',
  estimatedMinutes: 60,
  prevChapter: 'it-1-6-4',
  nextChapter: 'it-1-7-1',
  competenceGoals: [
    'forklare hva normalisering er og hvorfor det er viktig',
    'identifisere problemer med unormaliserte data',
    'anvende første, andre og tredje normalform på en databasestruktur',
    'designe en fullstendig normalisert database for et gitt scenario',
  ],
  keyTerms: [
    { term: 'Normalisering', definition: 'En systematisk prosess for å organisere data i en relasjonsdatabase for å minimere redundans (duplisering av data) og unngå problemer med dataintegritet. Normalisering innebærer å dele opp store tabeller i mindre, mer spesialiserte tabeller og koble dem sammen med relasjoner. Prosessen følger et sett med regler kalt normalformer (1NF, 2NF, 3NF osv.).' },
    { term: 'Redundans', definition: 'Unødvendig gjentakelse av data i en database. For eksempel er det redundant å lagre en lærers navn i hver eneste fagrekord. Redundans fører til problemer: oppdateringer må gjøres mange steder (oppdateringsanomali), sletting kan fjerne viktig informasjon (slettingsanomali), og det er vanskelig å legge til ny informasjon uten tilhørende data (innsettingsanomali).' },
    { term: 'Første normalform (1NF)', definition: 'En tabell er i første normalform når: 1) Alle kolonner inneholder atomære (udelelige) verdier – ikke lister, grupper eller nestede strukturer. 2) Hver kolonne inneholder bare verdier av én type. 3) Hver rad er unik (tabellen har en primærnøkkel). For eksempel bryter en kolonne med «Matematikk, Norsk, Naturfag» med 1NF fordi den inneholder flere verdier.' },
    { term: 'Andre normalform (2NF)', definition: 'En tabell er i andre normalform når den er i 1NF og alle ikke-nøkkelkolonner er fullt funksjonelt avhengige av hele primærnøkkelen (ikke bare en del av den). 2NF er relevant for tabeller med sammensatte primærnøkler. Hvis en kolonne bare avhenger av én del av den sammensatte nøkkelen, bør den flyttes til en egen tabell.' },
    { term: 'Tredje normalform (3NF)', definition: 'En tabell er i tredje normalform når den er i 2NF og ingen ikke-nøkkelkolonne er avhengig av en annen ikke-nøkkelkolonne (transitiv avhengighet). Med andre ord: alle ikke-nøkkelkolonner skal avhenge direkte av primærnøkkelen, ikke av hverandre. Hvis for eksempel postnummer bestemmer poststed, bør poststed flyttes til en egen postnummer-tabell.' },
    { term: 'Anomali', definition: 'Et problem som oppstår i databaseoperasjoner på grunn av dårlig design. Det finnes tre typer: Oppdateringsanomali (en endring må gjøres mange steder), slettingsanomali (sletting av data fører til utilsiktet tap av annen informasjon) og innsettingsanomali (det er umulig å lagre informasjon uten tilhørende data). Normalisering eliminerer disse anomaliene.' },
    { term: 'Funksjonell avhengighet', definition: 'Et forhold mellom kolonner i en tabell der verdien i én kolonne entydig bestemmer verdien i en annen kolonne. For eksempel bestemmer elev_id entydig fornavn og etternavn (én elev har bare ett navn). Vi skriver dette som elev_id → fornavn, etternavn. Funksjonell avhengighet er nøkkelbegrepet for å forstå og anvende normalformer.' },
  ],
  content: [
    {
      id: 'it1-6-5-intro',
      type: 'text',
      content: `## Normalisering og databasedesign

Forestill deg at en skole lagrer all informasjon i én eneste tabell:

| elev_id | fornavn | etternavn | klasse | laerer       | fag        | karakter |
|---------|---------|-----------|--------|-------------|------------|----------|
| 1       | Emma    | Hansen    | 10A    | Kari Nordli | Matematikk | 5        |
| 1       | Emma    | Hansen    | 10A    | Per Haugen  | Norsk      | 4        |
| 1       | Emma    | Hansen    | 10A    | Lise Vik    | Naturfag   | 5        |
| 2       | Oliver  | Johansen  | 10A    | Kari Nordli | Matematikk | 3        |
| 2       | Oliver  | Johansen  | 10A    | Per Haugen  | Norsk      | 4        |

Ser du problemene? Emmas navn og klasse gjentas for hver karakter. Hvis Emma bytter klasse, må vi oppdatere tre rader. Hva hvis vi glemmer én? Da har vi inkonsistent data. Og hva hvis vi sletter alle karakterene til en elev – forsvinner all informasjon om eleven?

**Normalisering** er løsningen. Det er en systematisk metode for å organisere databasetabeller slik at de unngår disse problemene. I dette kapittelet skal du lære de tre første normalformene og hvordan du bruker dem til å designe gode databaser.`,
    },
    {
      id: 'it1-6-5-text-anomalier',
      type: 'text',
      title: 'Problemer med unormaliserte data – anomalier',
      content: `Unormaliserte tabeller (som den store enkelttabellen over) fører til tre typer problemer kalt **anomalier**:

### 1. Oppdateringsanomali
Når data er duplisert og du endrer bare noen forekomster, blir dataene inkonsistente.

**Eksempel**: Emma Hansen bytter fra 10A til 10B. Informasjonen «10A» finnes i tre rader. Hvis vi bare oppdaterer to av dem, står det 10B i to rader og 10A i én rad – inkonsistens.

### 2. Innsettingsanomali
Du kan ikke lagre informasjon uten å ha tilhørende data.

**Eksempel**: Vi ansetter en ny lærer, Jon Hauge, som skal undervise i historie. Men vi kan ikke legge ham inn i tabellen uten å også ha en elev og en karakter, fordi alle kolonnene er i samme tabell.

### 3. Slettingsanomali
Sletting av data fører til utilsiktet tap av annen informasjon.

**Eksempel**: Hvis vi sletter alle karakterrader for Liam (den eneste eleven i 10C med naturfagskarakter), mister vi ikke bare karakteren, men potensielt informasjonen om at Lise Vik underviser i naturfag.

Alle tre anomaliene skyldes det samme grunnproblemet: **data som logisk hører til forskjellige ting er blandet sammen i én tabell.** Normalisering løser dette ved å dele data inn i separate, spesialiserte tabeller.`,
    },
    {
      id: 'it1-6-5-def-normalisering',
      type: 'definition',
      title: 'Normalisering',
      content: `**Normalisering** er en steg-for-steg-prosess for å organisere data i en relasjonsdatabase slik at redundans (unødvendig gjentakelse av data) minimeres og dataintegriteten bevares. Normaliseringsprosessen følger en serie regler kalt **normalformer** (NF). Hver normalform bygger på den forrige og stiller strengere krav til tabellstrukturen. De tre første normalformene (1NF, 2NF og 3NF) er de viktigste og dekker de fleste praktiske behov.`,
    },
    {
      id: 'it1-6-5-text-1nf',
      type: 'text',
      title: 'Første normalform (1NF)',
      content: `En tabell er i **første normalform (1NF)** når:

1. Alle kolonner inneholder **atomære verdier** (udelelige enkelverdier)
2. Det finnes ingen gjentakende grupper eller kolonner
3. Hver rad er unik (tabellen har en primærnøkkel)

### Eksempel: Brudd med 1NF

| elev_id | fornavn | fag                          |
|---------|---------|------------------------------|
| 1       | Emma    | Matematikk, Norsk, Naturfag  |
| 2       | Oliver  | Matematikk, Norsk            |

Kolonnen \`fag\` inneholder flere verdier i én celle – det bryter med 1NF. Hvordan finner du alle elever som tar naturfag? Du kan ikke bruke \`WHERE fag = 'Naturfag'\` fordi verdien er «Matematikk, Norsk, Naturfag».

### Etter 1NF

| elev_id | fornavn | fag        |
|---------|---------|------------|
| 1       | Emma    | Matematikk |
| 1       | Emma    | Norsk      |
| 1       | Emma    | Naturfag   |
| 2       | Oliver  | Matematikk |
| 2       | Oliver  | Norsk      |

Nå har hver celle bare én verdi, og vi kan enkelt søke:

\`\`\`sql
SELECT fornavn FROM elever_fag WHERE fag = 'Naturfag';
\`\`\`

### Et annet eksempel: Gjentakende kolonner

| elev_id | fornavn | fag1       | fag2  | fag3     |
|---------|---------|------------|-------|----------|
| 1       | Emma    | Matematikk | Norsk | Naturfag |
| 2       | Oliver  | Matematikk | Norsk | NULL     |

Dette bryter også med 1NF – gjentakende kolonner for fag. Hva hvis en elev tar fire fag? Da må vi legge til en ny kolonne. Løsningen er å dele opp i rader, som vist over.`,
    },
    {
      id: 'it1-6-5-text-2nf',
      type: 'text',
      title: 'Andre normalform (2NF)',
      content: `En tabell er i **andre normalform (2NF)** når:

1. Den er i 1NF
2. Alle ikke-nøkkelkolonner er fullt funksjonelt avhengige av **hele** primærnøkkelen

2NF er relevant for tabeller med **sammensatte primærnøkler** (primærnøkler som består av to eller flere kolonner). Hvis en kolonne bare avhenger av én del av nøkkelen, bør den flyttes til en egen tabell.

### Eksempel: Brudd med 2NF

Tenk deg en tabell for kursregistrering med sammensatt primærnøkkel (elev_id + fag_id):

| elev_id | fag_id | elevnavn | fagnavn    | karakter |
|---------|--------|----------|------------|----------|
| 1       | 1      | Emma     | Matematikk | 5        |
| 1       | 2      | Emma     | Norsk      | 4        |
| 2       | 1      | Oliver   | Matematikk | 3        |

Primærnøkkel: (elev_id, fag_id)

**Problem**: \`elevnavn\` avhenger bare av \`elev_id\` (ikke av hele nøkkelen). \`fagnavn\` avhenger bare av \`fag_id\`. Bare \`karakter\` avhenger av hele nøkkelen (elev_id + fag_id).

### Etter 2NF – del opp i tre tabeller:

**elever:**
| elev_id | elevnavn |
|---------|----------|
| 1       | Emma     |
| 2       | Oliver   |

**fag:**
| fag_id | fagnavn    |
|--------|------------|
| 1      | Matematikk |
| 2      | Norsk      |

**karakterer:**
| elev_id | fag_id | karakter |
|---------|--------|----------|
| 1       | 1      | 5        |
| 1       | 2      | 4        |
| 2       | 1      | 3        |

Nå avhenger alle kolonner av hele primærnøkkelen i sin respektive tabell. Elevnavn lagres bare én gang, og fagnavn lagres bare én gang.`,
    },
    {
      id: 'it1-6-5-text-3nf',
      type: 'text',
      title: 'Tredje normalform (3NF)',
      content: `En tabell er i **tredje normalform (3NF)** når:

1. Den er i 2NF
2. Ingen ikke-nøkkelkolonne er avhengig av en annen ikke-nøkkelkolonne (**ingen transitive avhengigheter**)

Med andre ord: alle ikke-nøkkelkolonner avhenger **direkte** av primærnøkkelen, ikke indirekte via andre kolonner.

### Eksempel: Brudd med 3NF

| elev_id | fornavn | etternavn | postnummer | poststed |
|---------|---------|-----------|------------|----------|
| 1       | Emma    | Hansen    | 0150       | Oslo     |
| 2       | Oliver  | Johansen  | 0150       | Oslo     |
| 3       | Nora    | Olsen     | 5003       | Bergen   |

**Problem**: \`poststed\` avhenger av \`postnummer\`, som igjen avhenger av \`elev_id\`. Dette er en **transitiv avhengighet**: elev_id → postnummer → poststed. Poststed avhenger ikke direkte av elev_id.

Konsekvensen er at «Oslo» lagres to ganger (for postnummer 0150). Hvis postnummer 0150 bytter navn, må vi oppdatere alle rader.

### Etter 3NF – skill ut poststeder:

**elever:**
| elev_id | fornavn | etternavn | postnummer |
|---------|---------|-----------|------------|
| 1       | Emma    | Hansen    | 0150       |
| 2       | Oliver  | Johansen  | 0150       |
| 3       | Nora    | Olsen     | 5003       |

**poststeder:**
| postnummer | poststed |
|------------|----------|
| 0150       | Oslo     |
| 5003       | Bergen   |

Nå lagres hvert poststed bare én gang, og alle ikke-nøkkelkolonner avhenger direkte av primærnøkkelen i sin respektive tabell.`,
    },
    {
      id: 'it1-6-5-theorem-normalformer',
      type: 'theorem',
      title: 'Oppsummering av normalformene',
      content: `**1NF** – Atomære verdier: Alle kolonner inneholder bare enkelverdier, ikke lister eller grupper. Hver rad er unik.

**2NF** – Full funksjonell avhengighet: Alle ikke-nøkkelkolonner avhenger av hele primærnøkkelen, ikke bare en del av den. (Relevant ved sammensatte primærnøkler.)

**3NF** – Ingen transitive avhengigheter: Alle ikke-nøkkelkolonner avhenger direkte av primærnøkkelen, ikke av andre ikke-nøkkelkolonner.

**Huskeregel**: «Nøkkelen, hele nøkkelen, og ingenting annet enn nøkkelen.»
- 1NF: Dataene har en nøkkel (primærnøkkel, atomære verdier)
- 2NF: Avhenger av hele nøkkelen (ikke deler av sammensatt nøkkel)
- 3NF: Ingenting annet enn nøkkelen (ingen transitive avhengigheter)`,
    },
    {
      id: 'it1-6-5-example-fullnormalisering',
      type: 'example',
      title: 'Eksempel: Fullstendig normalisering av en bibliotekdatabase',
      content: `**Utgangspunkt: Unormalisert tabell**

| utlaan_id | elevnavn     | klasse | boktittel        | forfatter      | isbn          | utdato     | inndato    |
|-----------|-------------|--------|------------------|----------------|---------------|------------|------------|
| 1         | Emma Hansen | 10A    | Sofies verden    | Jostein Gaarder| 978-82-03-19   | 2024-09-01 | 2024-09-15 |
| 2         | Emma Hansen | 10A    | Beatles          | Lars S. Christensen | 978-82-02-25 | 2024-09-10 | NULL       |
| 3         | Oliver Johansen | 10A | Sofies verden   | Jostein Gaarder| 978-82-03-19   | 2024-09-05 | 2024-09-20 |

**Problemer**:
- Emmas navn og klasse gjentas (redundans)
- «Sofies verden» med forfatter og ISBN gjentas (redundans)
- \`elevnavn\` er ikke atomært (fornavn + etternavn i én kolonne) → bryter 1NF

**Steg 1: 1NF – atomære verdier**
Del \`elevnavn\` i \`fornavn\` og \`etternavn\`. Fjern gjentakende data.

**Steg 2: 2NF og 3NF – fjern partielle og transitive avhengigheter**

\`\`\`sql
CREATE TABLE elever (
    elev_id INTEGER PRIMARY KEY AUTOINCREMENT,
    fornavn TEXT NOT NULL,
    etternavn TEXT NOT NULL,
    klasse TEXT
);

CREATE TABLE boker (
    bok_id INTEGER PRIMARY KEY AUTOINCREMENT,
    tittel TEXT NOT NULL,
    forfatter TEXT,
    isbn TEXT UNIQUE
);

CREATE TABLE utlaan (
    utlaan_id INTEGER PRIMARY KEY AUTOINCREMENT,
    elev_id INTEGER NOT NULL,
    bok_id INTEGER NOT NULL,
    utlaans_dato DATE NOT NULL,
    innleverings_dato DATE,
    FOREIGN KEY (elev_id) REFERENCES elever(elev_id),
    FOREIGN KEY (bok_id) REFERENCES boker(bok_id)
);

-- Sett inn data
INSERT INTO elever (fornavn, etternavn, klasse) VALUES
    ('Emma', 'Hansen', '10A'),
    ('Oliver', 'Johansen', '10A');

INSERT INTO boker (tittel, forfatter, isbn) VALUES
    ('Sofies verden', 'Jostein Gaarder', '978-82-03-19'),
    ('Beatles', 'Lars S. Christensen', '978-82-02-25');

INSERT INTO utlaan (elev_id, bok_id, utlaans_dato, innleverings_dato) VALUES
    (1, 1, '2024-09-01', '2024-09-15'),
    (1, 2, '2024-09-10', NULL),
    (2, 1, '2024-09-05', '2024-09-20');
\`\`\`

Nå er data normalisert: elevinformasjon lagres bare én gang, bokinformasjon lagres bare én gang, og utlånstabellen kobler dem sammen.`,
    },
    {
      id: 'it1-6-5-text-denormalisering',
      type: 'text',
      title: 'Når bør man IKKE normalisere?',
      content: `Normalisering er generelt en god praksis, men det finnes situasjoner der man bevisst velger å **denormalisere** – altså tillate noe redundans:

### Ytelseshensyn
Normaliserte databaser krever mange JOIN-operasjoner for å sette sammen data fra flere tabeller. I systemer med ekstremt mange spørringer (som sosiale medier med millioner av brukere) kan dette bli en flaskehals. Da kan man bevisst duplisere noe data for å unngå dyre JOIN-operasjoner.

### Rapportering og analyse
For rapporterings-databaser (datawarehouses) er det vanlig å bruke «flate» tabeller med noe redundans, fordi det gjør spørringene enklere og raskere.

### Enkle systemer
For svært enkle systemer med lite data kan full normalisering gjøre ting unødvendig komplisert.

**Hovedregelen er**: Start alltid med normalisering. Denormaliser bare hvis du har dokumenterte ytelsesproblemer som ikke kan løses på andre måter. Det er mye lettere å denormalisere en normalisert database enn å normalisere en rotete en.`,
    },
    {
      id: 'it1-6-5-tip-design-prosess',
      type: 'tip',
      title: 'Komplett databasedesign-prosess',
      content: `Når du skal designe en database fra bunnen av, følg denne prosessen:

1. **Forstå kravene** – Hva skal systemet gjøre? Hvilke data trengs?
2. **Identifiser entiteter** – Hva er «tingene» vi lagrer? (Elever, bøker, bestillinger...)
3. **Definer attributter** – Hvilke egenskaper har hver entitet?
4. **Finn relasjoner** – Hvordan henger entitetene sammen?
5. **Tegn ER-diagram** – Visualiser strukturen
6. **Normaliser** – Sjekk 1NF, 2NF, 3NF og juster tabellene
7. **Skriv SQL** – Opprett tabellene med CREATE TABLE
8. **Test med data** – Sett inn testdata og kjør spørringer
9. **Iterer** – Juster designet basert på reelle behov

God databasedesign er en ferdighet som utvikles med praksis. Jo flere databaser du designer, jo bedre intuisjon utvikler du for hva som fungerer og hva som ikke fungerer.`,
    },
    {
      id: 'it1-6-5-warning-vanlige-feil',
      type: 'warning',
      title: 'Vanlige normaliseringsfeil',
      content: `Pass deg for disse vanlige feilene:

1. **Kommaseparerte lister i kolonner**: \`fag = "Matte, Norsk, Naturfag"\` bryter med 1NF. Bruk en koblingstabell.
2. **Gjentakende kolonner**: \`telefon1\`, \`telefon2\`, \`telefon3\` bryter med 1NF. Lag en egen tabell for telefonnumre.
3. **Beregnede verdier lagret i tabellen**: Ikke lagre \`alder\` hvis du har \`fodselsdato\`. Beregn det med SQL i stedet.
4. **Miks av ulike entiteter**: Ikke legg elevinfo og faginfo i samme tabell bare fordi de brukes sammen.
5. **For mye normalisering**: Det finnes tilfeller der det er greit å lagre noe «ekstra» data for å forenkle spørringer.`,
    },
    {
      id: 'it1-6-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it1-6-5-ex-1',
        number: '6.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er normalisering i databasesammenheng?',
        options: [
          { id: 'a', text: 'Å gjøre alle verdier i databasen til tall', isCorrect: false, feedback: 'Normalisering handler ikke om datatyper, men om tabellstruktur.' },
          { id: 'b', text: 'Å organisere data i tabeller for å minimere redundans og unngå anomalier', isCorrect: true },
          { id: 'c', text: 'Å slette alle duplikater fra databasen', isCorrect: false, feedback: 'Normalisering handler om å omstrukturere tabeller, ikke om å slette data.' },
          { id: 'd', text: 'Å konvertere data til UTF-8-format', isCorrect: false, feedback: 'Tegnkoding er noe helt annet enn databasenormalisering.' },
        ],
        solution: 'Normalisering er en systematisk prosess for å organisere data i tabeller slik at redundans (unødvendig gjentakelse) minimeres og dataintegriteten bevares. Prosessen følger regler kalt normalformer (1NF, 2NF, 3NF) og innebærer å dele opp store tabeller i mindre, spesialiserte tabeller koblet med relasjoner.',
      },
    },
    {
      id: 'it1-6-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it1-6-5-ex-2',
        number: '6.5.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: `Denne tabellen bryter med første normalform (1NF). Hvorfor?

| elev_id | fornavn | hobbyer               |
|---------|---------|----------------------|
| 1       | Emma    | Fotball, Lesing, Sjakk|
| 2       | Oliver  | Gaming, Fotball       |`,
        options: [
          { id: 'a', text: 'Fordi tabellen mangler primærnøkkel', isCorrect: false, feedback: 'Tabellen har elev_id som primærnøkkel.' },
          { id: 'b', text: 'Fordi kolonnen «hobbyer» inneholder flere verdier (ikke atomære)', isCorrect: true },
          { id: 'c', text: 'Fordi tabellen har for få kolonner', isCorrect: false, feedback: 'Antall kolonner er ikke relevant for normalformer.' },
          { id: 'd', text: 'Fordi tabellen mangler fremmednøkler', isCorrect: false, feedback: 'Fremmednøkler er ikke et krav for 1NF.' },
        ],
        solution: 'Kolonnen «hobbyer» inneholder kommaseparerte lister med flere verdier. 1NF krever at alle kolonner inneholder atomære (udelelige) verdier. Løsningen er å opprette en egen tabell for hobbyer med én rad per hobby per elev, eller en koblingstabell mellom elever og en hobbytabell.',
      },
    },
    {
      id: 'it1-6-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it1-6-5-ex-3',
        number: '6.5.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: `Hvilken type anomali oppstår i dette scenariet?

Du har en tabell der elevnavn og klasse lagres sammen med karakterer. Emma Hansen er i klasse 10A og har tre karakterrader. Du oppdaterer klassen til 10B i to av radene, men glemmer den tredje.`,
        options: [
          { id: 'a', text: 'Innsettingsanomali', isCorrect: false, feedback: 'Innsettingsanomali handler om vanskeligheten med å sette inn data, ikke om inkonsistente oppdateringer.' },
          { id: 'b', text: 'Slettingsanomali', isCorrect: false, feedback: 'Slettingsanomali handler om utilsiktet tap av data ved sletting.' },
          { id: 'c', text: 'Oppdateringsanomali', isCorrect: true },
          { id: 'd', text: 'Sorteringsanomali', isCorrect: false, feedback: 'Sorteringsanomali er ikke et standard databasebegrep.' },
        ],
        solution: 'Dette er en oppdateringsanomali: fordi elevens klasse er lagret i flere rader (redundans), kan en ufullstendig oppdatering føre til inkonsistente data. I en normalisert database ville klassen bare vært lagret én gang i elevtabellen, og oppdateringen hadde skjedd bare ett sted.',
      },
    },
    {
      id: 'it1-6-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it1-6-5-ex-4',
        number: '6.5.4',
        type: 'classic',
        difficulty: 'medium',
        task: `Denne tabellen er unormalisert. Identifiser hvilke normalformer den bryter med, og vis hvordan du normaliserer den til 3NF.

| bestilling_id | kundenavn     | kunde_epost     | produkt        | pris  | antall | totalpris |
|---------------|-------------- |-----------------|----------------|-------|--------|-----------|
| 1             | Emma Hansen   | emma@mail.no    | USB-kabel      | 79    | 2      | 158       |
| 2             | Emma Hansen   | emma@mail.no    | Mus            | 299   | 1      | 299       |
| 3             | Oliver Johansen| oliver@mail.no | USB-kabel      | 79    | 3      | 237       |`,
        solution: `**Brudd med 1NF**: kundenavn bør deles i fornavn og etternavn (ikke atomært).

**Brudd med 2NF** (hvis primærnøkkel er bestilling_id): Kundeinformasjon (navn, epost) avhenger av kunden, ikke av bestillingen. Produktinformasjon (produktnavn, pris) avhenger av produktet.

**Brudd med 3NF**: totalpris er en beregnet verdi (pris * antall) – transitiv avhengighet.

**Normalisert til 3NF:**

\`\`\`sql
CREATE TABLE kunder (
    kunde_id INTEGER PRIMARY KEY AUTOINCREMENT,
    fornavn TEXT NOT NULL,
    etternavn TEXT NOT NULL,
    epost TEXT UNIQUE NOT NULL
);

CREATE TABLE produkter (
    produkt_id INTEGER PRIMARY KEY AUTOINCREMENT,
    produktnavn TEXT NOT NULL,
    pris REAL NOT NULL
);

CREATE TABLE bestillinger (
    bestilling_id INTEGER PRIMARY KEY AUTOINCREMENT,
    kunde_id INTEGER NOT NULL,
    bestillingsdato DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (kunde_id) REFERENCES kunder(kunde_id)
);

CREATE TABLE bestillingslinjer (
    bestilling_id INTEGER,
    produkt_id INTEGER,
    antall INTEGER NOT NULL,
    PRIMARY KEY (bestilling_id, produkt_id),
    FOREIGN KEY (bestilling_id) REFERENCES bestillinger(bestilling_id),
    FOREIGN KEY (produkt_id) REFERENCES produkter(produkt_id)
);
\`\`\`

Merk: totalpris er fjernet fordi den kan beregnes med SQL (pris * antall). Kundeinformasjon lagres bare én gang i kunder-tabellen. Produktinformasjon lagres bare én gang i produkter-tabellen.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it1-6-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it1-6-5-ex-5',
        number: '6.5.5',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: `Hvilken normalform bryter denne tabellen med?

| ansatt_id | navn          | avdeling    | avdelingsleder |
|-----------|-------------- |-------------|----------------|
| 1         | Kari Nordli   | Matematikk  | Per Haugen     |
| 2         | Lise Vik      | Naturfag    | Tom Bakke      |
| 3         | Jon Hauge     | Matematikk  | Per Haugen     |

Primærnøkkel: ansatt_id. Avdelingsleder avhenger av avdeling (ikke direkte av ansatt_id).`,
        options: [
          { id: 'a', text: 'Første normalform (1NF)', isCorrect: false, feedback: 'Alle verdier er atomære og tabellen har primærnøkkel – 1NF er oppfylt.' },
          { id: 'b', text: 'Andre normalform (2NF)', isCorrect: false, feedback: 'Primærnøkkelen er ikke sammensatt, så 2NF er automatisk oppfylt.' },
          { id: 'c', text: 'Tredje normalform (3NF)', isCorrect: true },
          { id: 'd', text: 'Ingen – tabellen er fullt normalisert', isCorrect: false, feedback: 'Det finnes en transitiv avhengighet i tabellen.' },
        ],
        solution: 'Tabellen bryter med 3NF på grunn av en transitiv avhengighet: ansatt_id → avdeling → avdelingsleder. Avdelingsleder avhenger ikke direkte av primærnøkkelen (ansatt_id), men av avdeling. Løsningen er å lage en egen tabell for avdelinger med avdeling som primærnøkkel og avdelingsleder som kolonne.',
      },
    },
    {
      id: 'it1-6-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it1-6-5-ex-6',
        number: '6.5.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Design en fullstendig normalisert database (3NF) for et treningssenter. Systemet skal håndtere:

- Medlemmer (navn, telefon, e-post, medlemstype)
- Treningsklasser (navn, beskrivelse, varighet, instruktør)
- Påmeldinger til klasser (medlem, klasse, dato, tidspunkt)
- Instruktører (navn, spesialisering, telefon)

Tegn eller beskriv tabellene med kolonner, primærnøkler, fremmednøkler og relasjonstyper. Skriv deretter CREATE TABLE-kode for alle tabellene.`,
        solution: `**Entiteter og relasjoner:**
- Instruktør → Klasse: En-til-mange (én instruktør leder mange klasser)
- Medlem → Påmelding → Klasse: Mange-til-mange (via koblingstabellen påmeldinger)

\`\`\`sql
CREATE TABLE instruktorer (
    instruktor_id INTEGER PRIMARY KEY AUTOINCREMENT,
    fornavn TEXT NOT NULL,
    etternavn TEXT NOT NULL,
    spesialisering TEXT,
    telefon TEXT
);

CREATE TABLE medlemmer (
    medlem_id INTEGER PRIMARY KEY AUTOINCREMENT,
    fornavn TEXT NOT NULL,
    etternavn TEXT NOT NULL,
    telefon TEXT,
    epost TEXT UNIQUE,
    medlemstype TEXT NOT NULL DEFAULT 'standard'
);

CREATE TABLE treningsklasser (
    klasse_id INTEGER PRIMARY KEY AUTOINCREMENT,
    klassenavn TEXT NOT NULL,
    beskrivelse TEXT,
    varighet_min INTEGER,
    instruktor_id INTEGER,
    FOREIGN KEY (instruktor_id) REFERENCES instruktorer(instruktor_id)
);

CREATE TABLE pameldinger (
    pamelding_id INTEGER PRIMARY KEY AUTOINCREMENT,
    medlem_id INTEGER NOT NULL,
    klasse_id INTEGER NOT NULL,
    dato DATE NOT NULL,
    tidspunkt TEXT NOT NULL,
    FOREIGN KEY (medlem_id) REFERENCES medlemmer(medlem_id),
    FOREIGN KEY (klasse_id) REFERENCES treningsklasser(klasse_id)
);
\`\`\`

Databasen er i 3NF fordi:
- 1NF: Alle verdier er atomære, alle tabeller har primærnøkler.
- 2NF: Ingen partielle avhengigheter (alle primærnøkler er enkle kolonner).
- 3NF: Ingen transitive avhengigheter – alle ikke-nøkkelkolonner avhenger direkte av primærnøkkelen i sin tabell.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it1-6-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it1-6-5-ex-7',
        number: '6.5.7',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hva er huskeregelen for de tre første normalformene?',
        options: [
          { id: 'a', text: '«Tabeller, relasjoner og nøkler»', isCorrect: false, feedback: 'Dette er generelle databasebegreper, ikke huskeregelen for normalformer.' },
          { id: 'b', text: '«Nøkkelen, hele nøkkelen, og ingenting annet enn nøkkelen»', isCorrect: true },
          { id: 'c', text: '«Én tabell, én entitet, én nøkkel»', isCorrect: false, feedback: 'Dette er en forenkling, men ikke den etablerte huskeregelen.' },
          { id: 'd', text: '«Create, Read, Update, Delete»', isCorrect: false, feedback: 'CRUD er de fire grunnleggende databaseoperasjonene, ikke normalformene.' },
        ],
        solution: '«Nøkkelen, hele nøkkelen, og ingenting annet enn nøkkelen» (The key, the whole key, and nothing but the key). 1NF: Tabellen har en nøkkel og atomære verdier. 2NF: Alle ikke-nøkkelkolonner avhenger av HELE nøkkelen. 3NF: Alle ikke-nøkkelkolonner avhenger av INGENTING ANNET ENN nøkkelen (ingen transitive avhengigheter).',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle kapitler i seksjon 6
// ============================================================================

export const IT_1_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_IT_1_6_1, CHAPTER_IT_1_6_2, CHAPTER_IT_1_6_3, CHAPTER_IT_1_6_4, CHAPTER_IT_1_6_5,
];
