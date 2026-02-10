/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Informasjonsteknologi 2 (IT 2) VG3
 *
 * Seksjon 5: Databaser og datalagring (Kapittel 5.1–5.5)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================
// KAPITTEL 5.1: Relasjonsdatabaser – repetisjon og fordypning
// ============================================================

export const CHAPTER_IT_2_5_1: TextbookChapter = {
  id: 'it-2-5-1',
  courseId: 'it-2',
  title: 'Relasjonsdatabaser – repetisjon og fordypning',
  description: 'ER-modellering, normalformer og relasjoner mellom tabeller',
  sections: [
    {
      id: 'it2-5-1-intro',
      type: 'text',
      title: 'Introduksjon',
      content: `# Relasjonsdatabaser – repetisjon og fordypning

I IT 1 lærte du grunnleggende om databaser og SQL. Nå skal vi fordype oss i hvordan vi designer gode databaseløsninger fra bunnen av. En veldesignet database gjør det enklere å hente ut data, unngår duplikater og sikrer at informasjonen er konsistent.

I dette kapittelet skal du lære å:
- Lage ER-diagrammer (Entity-Relationship) for å modellere virkeligheten
- Forstå normalformer og hvorfor de er viktige
- Designe tabeller med riktige primærnøkler og fremmednøkler
- Identifisere og løse databaseproblemer som redundans og anomalier`,
    },
    {
      id: 'it2-5-1-theory-1',
      type: 'text',
      title: 'ER-modellering',
      content: `## ER-modellering (Entity-Relationship)

**ER-modellering** er en metode for å visualisere datastrukturen i et system før vi lager selve databasen. Vi identifiserer:

### Entiteter (entities)
Objekter eller "ting" i systemet. Eksempler:
- I et biblioteksystem: Bok, Forfatter, Utlån, Medlem
- I en nettbutikk: Produkt, Kunde, Ordre, Kategori

Entiteter blir tabeller i databasen.

### Attributter
Egenskaper til entitetene. Eksempel for entiteten "Bok":
- ISBN (primærnøkkel)
- Tittel
- Utgivelsesår
- Antall sider

### Relasjoner (relationships)
Forbindelser mellom entiteter. Disse kan være:

**En-til-mange (1:N)**
- Én forfatter skriver mange bøker
- Én kunde kan ha mange ordrer

**Mange-til-mange (M:N)**
- Én bok kan ha flere forfattere
- Én forfatter kan ha skrevet flere bøker

**En-til-en (1:1)**
- Sjelden brukt, men eksempel: Én person har ett pass

I et ER-diagram tegner vi:
- Rektangler for entiteter
- Ovaler for attributter
- Romber for relasjoner
- Linjer som viser hvordan alt henger sammen`,
    },
    {
      id: 'it2-5-1-ex-1',
      type: 'text',
      title: 'Eksempel: Biblioteksystem',
      content: `## Eksempel: Biblioteksystem

La oss modellere et enkelt biblioteksystem:

**Entiteter:**
- Bok (ISBN, tittel, utgivelsesår)
- Forfatter (forfatterID, navn, fødeland)
- Medlem (medlemsID, navn, epost, telefon)
- Utlån (utlånID, utlånsdato, innleveringsfrist)

**Relasjoner:**
- Bok–Forfatter: Mange-til-mange (en bok kan ha flere forfattere, en forfatter kan ha skrevet flere bøker)
- Medlem–Utlån: En-til-mange (ett medlem kan ha mange utlån)
- Bok–Utlån: En-til-mange (én bok kan lånes ut mange ganger)

Denne modelleringen hjelper oss å se helheten før vi begynner å skrive SQL-kode.`,
    },
    {
      id: 'it2-5-1-theory-2',
      type: 'text',
      title: 'Normalformer',
      content: `## Normalformer

**Normalisering** er prosessen med å organisere data for å:
- Minimere redundans (unødvendige duplikater)
- Sikre dataintegritet
- Gjøre det enklere å oppdatere og vedlikeholde databasen

### 1. Normalform (1NF)
Alle attributter må ha atomiske verdier (ikke lister eller sett).

**Dårlig design (bryter 1NF):**
\`\`\`
Kunde (kundeID, navn, telefonnumre)
1, "Kari", "98765432, 91234567"  // To nummer i ett felt!
\`\`\`

**Riktig design (1NF):**
\`\`\`
Kunde (kundeID, navn)
Telefon (telefonID, kundeID, nummer)
\`\`\`

### 2. Normalform (2NF)
Må være i 1NF + alle ikke-nøkkelattributter må være fullstendig avhengige av primærnøkkelen.

**Dårlig design (bryter 2NF):**
\`\`\`
Ordre (ordreID, produktID, produktnavn, antall)
\`\`\`
Her er produktnavn bare avhengig av produktID, ikke av hele nøkkelen (ordreID, produktID).

**Riktig design (2NF):**
\`\`\`
Ordre (ordreID, produktID, antall)
Produkt (produktID, produktnavn)
\`\`\`

### 3. Normalform (3NF)
Må være i 2NF + ingen transitive avhengigheter (ikke-nøkkelattributter skal ikke avhenge av andre ikke-nøkkelattributter).

**Dårlig design (bryter 3NF):**
\`\`\`
Ansatt (ansattID, navn, avdelingID, avdelingsnavn)
\`\`\`
Her avhenger avdelingsnavn av avdelingID, ikke direkte av ansattID.

**Riktig design (3NF):**
\`\`\`
Ansatt (ansattID, navn, avdelingID)
Avdeling (avdelingID, avdelingsnavn)
\`\`\``,
    },
    {
      id: 'it2-5-1-def-1',
      type: 'definition',
      title: 'Viktige begreper',
      content: `**Primærnøkkel (Primary Key):** Unik identifikator for hver rad i en tabell. Kan ikke være NULL og må være unik.

**Fremmednøkkel (Foreign Key):** Attributt som refererer til primærnøkkelen i en annen tabell. Skaper relasjoner mellom tabeller.

**Redundans:** Unødvendig duplisering av data. Fører til større databaser og risiko for inkonsistens.

**Dataintegritet:** Sikrer at data er nøyaktige og konsistente gjennom hele databasen.

**Anomali:** Problem som oppstår ved dårlig databasedesign (innsettings-, oppdaterings- eller slettingsanomalier).`,
    },
    {
      id: 'it2-5-1-ex-2',
      type: 'text',
      title: 'Primær- og fremmednøkler i praksis',
      content: `## Primær- og fremmednøkler i praksis

La oss se på hvordan vi definerer nøkler i SQL:

\`\`\`sql
-- Tabell med primærnøkkel
CREATE TABLE Forfatter (
    forfatterID INTEGER PRIMARY KEY,
    navn TEXT NOT NULL,
    fødeland TEXT
);

-- Tabell med primær- og fremmednøkkel
CREATE TABLE Bok (
    ISBN TEXT PRIMARY KEY,
    tittel TEXT NOT NULL,
    utgivelsesår INTEGER,
    forfatterID INTEGER,
    FOREIGN KEY (forfatterID) REFERENCES Forfatter(forfatterID)
);
\`\`\`

**Fordeler med fremmednøkler:**
- Sikrer referanseintegritet (du kan ikke referere til en rad som ikke finnes)
- Forhindrer sletting av data som andre tabeller er avhengige av
- Dokumenterer relasjoner mellom tabeller

**Eksempel på integritetssikring:**
\`\`\`sql
-- Dette vil feile hvis forfatterID 99 ikke finnes:
INSERT INTO Bok VALUES ('978-82-000-0000-0', 'Min bok', 2024, 99);

-- Dette vil også feile (kan ikke slette forfatter hvis bøker refererer til den):
DELETE FROM Forfatter WHERE forfatterID = 1;
\`\`\``,
    },
  ],
  exercises: [
    {
      id: 'it2-5-1-mc-1',
      type: 'multiple-choice',
      question: 'Hva er hovedformålet med normalisering i databaser?',
      options: [
        'Å gjøre databasen større',
        'Å minimere redundans og sikre dataintegritet',
        'Å gjøre spørringer tregere',
        'Å fjerne alle fremmednøkler',
      ],
      correctAnswer: 1,
      explanation:
        'Normalisering handler om å organisere data slik at vi minimerer unødvendige duplikater og sikrer at dataene er konsistente og nøyaktige.',
    },
    {
      id: 'it2-5-1-mc-2',
      type: 'multiple-choice',
      question:
        'Hvilken normalform krever at alle attributter har atomiske verdier (ikke lister)?',
      options: [
        'Første normalform (1NF)',
        'Andre normalform (2NF)',
        'Tredje normalform (3NF)',
        'Boyce-Codd normalform (BCNF)',
      ],
      correctAnswer: 0,
      explanation:
        'Første normalform (1NF) krever at hver kolonne inneholder kun atomiske (udelelelige) verdier, ikke lister eller sammensatte data.',
    },
    {
      id: 'it2-5-1-classic-1',
      type: 'classic',
      question: `Gitt følgende tabell som bryter 1NF:

\`\`\`
Student (studentID, navn, emner)
1, "Ole", "IT1, MAT1, FYS1"
2, "Kari", "IT1, KJE1"
\`\`\`

Tegn et ER-diagram eller beskriv hvordan du ville normalisert denne til 1NF.`,
      solution: `For å normalisere til 1NF må vi splitte "emner" til egne rader:

**Løsning 1: Én tabell med flere rader per student**
\`\`\`
StudentEmne (studentID, navn, emne)
1, "Ole", "IT1"
1, "Ole", "MAT1"
1, "Ole", "FYS1"
2, "Kari", "IT1"
2, "Kari", "KJE1"
\`\`\`

**Løsning 2: To tabeller (bedre design)**
\`\`\`
Student (studentID, navn)
1, "Ole"
2, "Kari"

StudentEmne (studentID, emnekode)
1, "IT1"
1, "MAT1"
1, "FYS1"
2, "IT1"
2, "KJE1"
\`\`\`

Løsning 2 er bedre fordi den unngår å repetere navnet til studenten for hvert emne (reduserer redundans).`,
    },
    {
      id: 'it2-5-1-classic-2',
      type: 'classic',
      question: `En database inneholder følgende tabell:

\`\`\`sql
Bestilling (bestillingID, kundeID, kundenavn, produktID, produktnavn, antall)
\`\`\`

a) Forklar hvorfor denne tabellen bryter 2NF og 3NF.
b) Normaliser til 3NF ved å lage flere tabeller.`,
      solution: `**a) Problemer:**

**Bryter 2NF:**
- Kundenavn er bare avhengig av kundeID, ikke av hele nøkkelen (bestillingID)
- Produktnavn er bare avhengig av produktID, ikke av hele nøkkelen

**Bryter 3NF:**
- Kundenavn avhenger av kundeID (ikke-nøkkelattributt)
- Produktnavn avhenger av produktID (ikke-nøkkelattributt)

**b) Normalisert til 3NF:**

\`\`\`sql
Kunde (kundeID, kundenavn)
Produkt (produktID, produktnavn)
Bestilling (bestillingID, kundeID, produktID, antall)
\`\`\`

Med FOREIGN KEY-constraints:
\`\`\`sql
CREATE TABLE Kunde (
    kundeID INTEGER PRIMARY KEY,
    kundenavn TEXT NOT NULL
);

CREATE TABLE Produkt (
    produktID INTEGER PRIMARY KEY,
    produktnavn TEXT NOT NULL
);

CREATE TABLE Bestilling (
    bestillingID INTEGER PRIMARY KEY,
    kundeID INTEGER,
    produktID INTEGER,
    antall INTEGER,
    FOREIGN KEY (kundeID) REFERENCES Kunde(kundeID),
    FOREIGN KEY (produktID) REFERENCES Produkt(produktID)
);
\`\`\`

Dette eliminerer redundans og sikrer at vi kan oppdatere kundenavn eller produktnavn ett sted uten å måtte endre flere rader.`,
    },
    {
      id: 'it2-5-1-classic-3',
      type: 'classic',
      question: `Tegn et ER-diagram for et kinosystem med følgende krav:
- En film vises på flere visninger
- En visning viser én film i én sal
- En kunde kan kjøpe billetter til flere visninger
- En billett er til én visning for én kunde

Identifiser entiteter, attributter og relasjoner (1:1, 1:N eller M:N).`,
      solution: `**Entiteter:**
1. **Film** (filmID, tittel, lengde, sjanger)
2. **Sal** (salID, navn, antallSeter)
3. **Visning** (visningID, filmID, salID, tidspunkt)
4. **Kunde** (kundeID, navn, epost)
5. **Billett** (billettID, visningID, kundeID, seterad, setenummer)

**Relasjoner:**

1. Film → Visning: **1:N**
   - Én film kan ha mange visninger
   - Én visning viser én film

2. Sal → Visning: **1:N**
   - Én sal kan ha mange visninger
   - Én visning er i én sal

3. Visning → Billett: **1:N**
   - Én visning kan ha mange billetter
   - Én billett er til én visning

4. Kunde → Billett: **1:N**
   - Én kunde kan kjøpe mange billetter
   - Én billett tilhører én kunde

**ER-diagram (tekstlig beskrivelse):**

\`\`\`
[Film] ----< [Visning] >---- [Sal]
           |
           |
           v (1:N)
        [Billett]
           ^
           |
           | (1:N)
        [Kunde]
\`\`\`

**SQL-implementering:**
\`\`\`sql
CREATE TABLE Film (
    filmID INTEGER PRIMARY KEY,
    tittel TEXT NOT NULL,
    lengde INTEGER,
    sjanger TEXT
);

CREATE TABLE Sal (
    salID INTEGER PRIMARY KEY,
    navn TEXT NOT NULL,
    antallSeter INTEGER
);

CREATE TABLE Visning (
    visningID INTEGER PRIMARY KEY,
    filmID INTEGER,
    salID INTEGER,
    tidspunkt TEXT,
    FOREIGN KEY (filmID) REFERENCES Film(filmID),
    FOREIGN KEY (salID) REFERENCES Sal(salID)
);

CREATE TABLE Kunde (
    kundeID INTEGER PRIMARY KEY,
    navn TEXT NOT NULL,
    epost TEXT
);

CREATE TABLE Billett (
    billettID INTEGER PRIMARY KEY,
    visningID INTEGER,
    kundeID INTEGER,
    seterad TEXT,
    setenummer INTEGER,
    FOREIGN KEY (visningID) REFERENCES Visning(visningID),
    FOREIGN KEY (kundeID) REFERENCES Kunde(kundeID)
);
\`\`\``,
    },
    {
      id: 'it2-5-1-mc-3',
      type: 'multiple-choice',
      question:
        'Hva kalles en attributt som refererer til primærnøkkelen i en annen tabell?',
      options: [
        'Supernøkkel',
        'Fremmednøkkel',
        'Kandidatnøkkel',
        'Sekundærnøkkel',
      ],
      correctAnswer: 1,
      explanation:
        'En fremmednøkkel (foreign key) er en kolonne som peker til primærnøkkelen i en annen tabell og skaper dermed en relasjon mellom tabellene.',
    },
    {
      id: 'it2-5-1-classic-4',
      type: 'classic',
      question: `// --- Samleoppgaver ---

Du skal designe en database for et videregående skole-system. Systemet skal håndtere:
- Elever med navn, fødselsdato og klasse
- Klasser med klassenavn og trinn (VG1, VG2, VG3)
- Lærere med navn og hvilke fag de underviser i
- Fag med fagnavn og fagkode
- Karakterer som kobler elev, fag og karakter

a) Identifiser alle entiteter og deres attributter (inkluder primærnøkler)
b) Beskriv relasjonene mellom entitetene (1:1, 1:N eller M:N)
c) Skriv SQL-kode for å opprette alle tabeller med riktige PRIMARY KEY og FOREIGN KEY constraints
d) Normaliser designet ditt til 3NF hvis nødvendig`,
      solution: `**a) Entiteter og attributter:**

1. **Elev**
   - elevID (PK)
   - navn
   - fødselsdato
   - klasseID (FK)

2. **Klasse**
   - klasseID (PK)
   - klassenavn (f.eks. "3A")
   - trinn (VG1/VG2/VG3)

3. **Lærer**
   - lærerID (PK)
   - navn

4. **Fag**
   - fagID (PK)
   - fagnavn
   - fagkode

5. **LærerFag** (koblinger for M:N mellom Lærer og Fag)
   - lærerID (FK)
   - fagID (FK)
   - PRIMARY KEY (lærerID, fagID)

6. **Karakter**
   - karakterID (PK)
   - elevID (FK)
   - fagID (FK)
   - karakter (1-6)
   - dato

**b) Relasjoner:**

- Klasse → Elev: **1:N** (én klasse har mange elever, én elev er i én klasse)
- Elev → Karakter: **1:N** (én elev har mange karakterer)
- Fag → Karakter: **1:N** (ett fag har mange karakterer)
- Lærer ↔ Fag: **M:N** (én lærer kan undervise i flere fag, ett fag kan undervises av flere lærere)

**c) SQL-kode:**

\`\`\`sql
-- Tabell uten fremmednøkler først
CREATE TABLE Klasse (
    klasseID INTEGER PRIMARY KEY,
    klassenavn TEXT NOT NULL,
    trinn TEXT CHECK (trinn IN ('VG1', 'VG2', 'VG3'))
);

CREATE TABLE Fag (
    fagID INTEGER PRIMARY KEY,
    fagnavn TEXT NOT NULL,
    fagkode TEXT UNIQUE NOT NULL
);

CREATE TABLE Lærer (
    lærerID INTEGER PRIMARY KEY,
    navn TEXT NOT NULL
);

-- Tabell med fremmednøkkel
CREATE TABLE Elev (
    elevID INTEGER PRIMARY KEY,
    navn TEXT NOT NULL,
    fødselsdato TEXT,
    klasseID INTEGER,
    FOREIGN KEY (klasseID) REFERENCES Klasse(klasseID)
);

-- Koblinger for mange-til-mange
CREATE TABLE LærerFag (
    lærerID INTEGER,
    fagID INTEGER,
    PRIMARY KEY (lærerID, fagID),
    FOREIGN KEY (lærerID) REFERENCES Lærer(lærerID),
    FOREIGN KEY (fagID) REFERENCES Fag(fagID)
);

CREATE TABLE Karakter (
    karakterID INTEGER PRIMARY KEY,
    elevID INTEGER,
    fagID INTEGER,
    karakter INTEGER CHECK (karakter BETWEEN 1 AND 6),
    dato TEXT,
    FOREIGN KEY (elevID) REFERENCES Elev(elevID),
    FOREIGN KEY (fagID) REFERENCES Fag(fagID)
);
\`\`\`

**d) Normalisering til 3NF:**

Designet er allerede i 3NF:
- ✓ 1NF: Alle attributter har atomiske verdier
- ✓ 2NF: Alle ikke-nøkkelattributter er fullstendig avhengige av primærnøkkelen
- ✓ 3NF: Ingen transitive avhengigheter (ikke-nøkkelattributter avhenger ikke av andre ikke-nøkkelattributter)

**Testdata:**
\`\`\`sql
-- Sett inn testdata
INSERT INTO Klasse VALUES (1, '3A', 'VG3');
INSERT INTO Fag VALUES (1, 'Matematikk', 'MAT3000');
INSERT INTO Lærer VALUES (1, 'Kari Hansen');
INSERT INTO Elev VALUES (1, 'Ole Olsen', '2007-03-15', 1);
INSERT INTO LærerFag VALUES (1, 1);
INSERT INTO Karakter VALUES (1, 1, 1, 5, '2024-05-15');
\`\`\``,
    },
  ],
  keyTerms: [
    'ER-modellering',
    'Entitet',
    'Relasjon',
    'Normalformer (1NF, 2NF, 3NF)',
    'Primærnøkkel',
    'Fremmednøkkel',
    'Redundans',
    'Dataintegritet',
  ],
  estimatedMinutes: 60,
  prevChapter: 'it-2-4-5',
  nextChapter: 'it-2-5-2',
};

// ============================================================
// KAPITTEL 5.2: Avansert SQL
// ============================================================

export const CHAPTER_IT_2_5_2: TextbookChapter = {
  id: 'it-2-5-2',
  courseId: 'it-2',
  title: 'Avansert SQL',
  description: 'JOIN, GROUP BY, HAVING, subqueries, views og indekser',
  sections: [
    {
      id: 'it2-5-2-intro',
      type: 'text',
      title: 'Introduksjon',
      content: `# Avansert SQL

Du kan allerede SELECT, WHERE, ORDER BY og grunnleggende SQL. Nå skal vi ta steget videre og lære teknikker som gjør at du kan hente ut kompleks informasjon fra flere tabeller samtidig, gruppere data, lage virtuelle tabeller og optimalisere ytelsen.

I dette kapittelet lærer du:
- JOIN for å kombinere data fra flere tabeller
- GROUP BY og HAVING for å aggregere og filtrere grupper
- Subqueries (underspørringer) for komplekse spørringer
- Views for å lage gjenbrukbare "virtuelle tabeller"
- Indekser for å gjøre spørringer raskere`,
    },
    {
      id: 'it2-5-2-theory-1',
      type: 'text',
      title: 'JOIN – å kombinere tabeller',
      content: `## JOIN – å kombinere tabeller

I en normalisert database er data spredt over flere tabeller. For å hente ut meningsfull informasjon må vi ofte kombinere data fra flere tabeller. Det gjør vi med **JOIN**.

### INNER JOIN
Returnerer bare rader der det finnes matchende verdier i begge tabeller.

\`\`\`sql
-- Hent alle bøker med forfatternavnet
SELECT Bok.tittel, Forfatter.navn
FROM Bok
INNER JOIN Forfatter ON Bok.forfatterID = Forfatter.forfatterID;
\`\`\`

### LEFT JOIN (LEFT OUTER JOIN)
Returnerer alle rader fra venstre tabell, selv om det ikke finnes match i høyre tabell.

\`\`\`sql
-- Hent alle forfattere, også de uten bøker
SELECT Forfatter.navn, Bok.tittel
FROM Forfatter
LEFT JOIN Bok ON Forfatter.forfatterID = Bok.forfatterID;
\`\`\`

Forfattere uten bøker vil få NULL i bok-kolonnene.

### RIGHT JOIN
Returnerer alle rader fra høyre tabell (fungerer motsatt av LEFT JOIN). Ikke støttet i SQLite, men kan løses med LEFT JOIN ved å bytte rekkefølge.

### FULL OUTER JOIN
Returnerer alle rader fra begge tabeller. Heller ikke støttet i SQLite.

### Flerveis JOIN
Du kan kombinere flere tabeller:

\`\`\`sql
SELECT Kunde.navn, Ordre.ordreID, Produkt.produktnavn
FROM Kunde
INNER JOIN Ordre ON Kunde.kundeID = Ordre.kundeID
INNER JOIN OrdreLinjer ON Ordre.ordreID = OrdreLinjer.ordreID
INNER JOIN Produkt ON OrdreLinjer.produktID = Produkt.produktID;
\`\`\``,
    },
    {
      id: 'it2-5-2-ex-1',
      type: 'text',
      title: 'Eksempel: JOIN i praksis',
      content: `## Eksempel: JOIN i praksis

Gitt disse tabellene:

\`\`\`sql
-- Elev (elevID, navn, klasseID)
-- Klasse (klasseID, klassenavn)
-- Karakter (karakterID, elevID, fagnavn, karakter)
\`\`\`

**Oppgave:** Hent alle elever med klassenavn og deres karakterer.

\`\`\`sql
SELECT
    Elev.navn AS elevnavn,
    Klasse.klassenavn,
    Karakter.fagnavn,
    Karakter.karakter
FROM Elev
INNER JOIN Klasse ON Elev.klasseID = Klasse.klasseID
LEFT JOIN Karakter ON Elev.elevID = Karakter.elevID
ORDER BY Elev.navn, Karakter.fagnavn;
\`\`\`

Vi bruker:
- INNER JOIN mellom Elev og Klasse (alle elever må ha en klasse)
- LEFT JOIN mellom Elev og Karakter (noen elever kan mangle karakterer)`,
    },
    {
      id: 'it2-5-2-theory-2',
      type: 'text',
      title: 'GROUP BY og aggregatfunksjoner',
      content: `## GROUP BY og aggregatfunksjoner

**GROUP BY** lar oss gruppere rader og bruke aggregatfunksjoner på hver gruppe.

### Vanlige aggregatfunksjoner:
- COUNT() – teller antall rader
- SUM() – summerer verdier
- AVG() – beregner gjennomsnitt
- MIN() – finner minste verdi
- MAX() – finner største verdi

### Grunnleggende GROUP BY:

\`\`\`sql
-- Hvor mange elever i hver klasse?
SELECT klasseID, COUNT(*) AS antall_elever
FROM Elev
GROUP BY klasseID;
\`\`\`

\`\`\`sql
-- Gjennomsnittskarakter per fag
SELECT fagnavn, AVG(karakter) AS snittkarakter
FROM Karakter
GROUP BY fagnavn;
\`\`\`

### HAVING – filtrering av grupper
WHERE filtrerer rader før gruppering. HAVING filtrerer grupper etter gruppering.

\`\`\`sql
-- Fag med snittkarakter over 4.0
SELECT fagnavn, AVG(karakter) AS snitt
FROM Karakter
GROUP BY fagnavn
HAVING AVG(karakter) > 4.0;
\`\`\`

### Rekkefølge i SQL-spørringer:
1. FROM (velg tabell)
2. WHERE (filtrer rader)
3. GROUP BY (grupper rader)
4. HAVING (filtrer grupper)
5. SELECT (velg kolonner)
6. ORDER BY (sorter resultat)`,
    },
    {
      id: 'it2-5-2-ex-2',
      type: 'text',
      title: 'Eksempel: GROUP BY med JOIN',
      content: `## Eksempel: GROUP BY med JOIN

La oss kombinere JOIN og GROUP BY:

\`\`\`sql
-- Hvor mange bøker har hver forfatter skrevet?
SELECT
    Forfatter.navn,
    COUNT(Bok.ISBN) AS antall_bøker
FROM Forfatter
LEFT JOIN Bok ON Forfatter.forfatterID = Bok.forfatterID
GROUP BY Forfatter.forfatterID, Forfatter.navn
ORDER BY antall_bøker DESC;
\`\`\`

**Tips:**
- Bruk LEFT JOIN hvis du vil inkludere forfattere uten bøker (de får COUNT = 0)
- GROUP BY må inkludere alle kolonner fra SELECT som ikke er aggregatfunksjoner
- ORDER BY kommer alltid til slutt`,
    },
    {
      id: 'it2-5-2-theory-3',
      type: 'text',
      title: 'Subqueries (underspørringer)',
      content: `## Subqueries (underspørringer)

En **subquery** er en SQL-spørring inne i en annen SQL-spørring. De brukes ofte når du trenger resultatet av én spørring som input til en annen.

### Subquery i WHERE:

\`\`\`sql
-- Finn elever som har bedre snittkarakter enn gjennomsnittet
SELECT navn, AVG(karakter) AS snitt
FROM Elev
INNER JOIN Karakter ON Elev.elevID = Karakter.elevID
GROUP BY Elev.elevID, Elev.navn
HAVING AVG(karakter) > (
    SELECT AVG(karakter) FROM Karakter
);
\`\`\`

### Subquery i FROM:

\`\`\`sql
-- Bruk resultatet av en spørring som en "tabell"
SELECT klassenavn, gjennomsnitt
FROM (
    SELECT
        Klasse.klassenavn,
        AVG(Karakter.karakter) AS gjennomsnitt
    FROM Elev
    JOIN Klasse ON Elev.klasseID = Klasse.klasseID
    JOIN Karakter ON Elev.elevID = Karakter.elevID
    GROUP BY Klasse.klasseID, Klasse.klassenavn
) AS klasseresultater
WHERE gjennomsnitt > 4.0;
\`\`\`

### IN og NOT IN med subquery:

\`\`\`sql
-- Finn elever som har fått 6 i minst ett fag
SELECT DISTINCT navn
FROM Elev
WHERE elevID IN (
    SELECT elevID FROM Karakter WHERE karakter = 6
);
\`\`\``,
    },
    {
      id: 'it2-5-2-theory-4',
      type: 'text',
      title: 'Views – virtuelle tabeller',
      content: `## Views – virtuelle tabeller

En **view** er en lagret SQL-spørring som oppfører seg som en tabell. Den lagrer ikke data, men gir deg en "ferdig" spørring du kan gjenbruke.

### Opprette en view:

\`\`\`sql
CREATE VIEW ElevOversikt AS
SELECT
    Elev.navn AS elevnavn,
    Klasse.klassenavn,
    AVG(Karakter.karakter) AS snittkarakter
FROM Elev
INNER JOIN Klasse ON Elev.klasseID = Klasse.klasseID
LEFT JOIN Karakter ON Elev.elevID = Karakter.elevID
GROUP BY Elev.elevID, Elev.navn, Klasse.klassenavn;
\`\`\`

### Bruke en view:

\`\`\`sql
-- Nå kan du bruke ElevOversikt som en vanlig tabell:
SELECT * FROM ElevOversikt WHERE snittkarakter > 4.5;
\`\`\`

### Fordeler med views:
- Forenkler komplekse spørringer
- Gjenbrukbar kode
- Skjuler kompleksitet for sluttbrukere
- Kan brukes for sikkerhet (gi tilgang til view i stedet for rå-tabell)

### Slette en view:

\`\`\`sql
DROP VIEW ElevOversikt;
\`\`\``,
    },
    {
      id: 'it2-5-2-theory-5',
      type: 'text',
      title: 'Indekser – optimalisering',
      content: `## Indekser – optimalisering

En **indeks** er en datastruktur som gjør det raskere å søke etter data i en tabell. Det fungerer som stikkordregisteret bak i en bok.

### Når bruke indekser?
- På kolonner som ofte brukes i WHERE
- På kolonner som ofte brukes i JOIN
- På primærnøkler (opprettes automatisk)
- På fremmednøkler

### Opprette en indeks:

\`\`\`sql
-- Indeks på kolonnen "navn" i Elev-tabellen
CREATE INDEX idx_elev_navn ON Elev(navn);
\`\`\`

### Indeks på flere kolonner:

\`\`\`sql
CREATE INDEX idx_karakter_elev_fag ON Karakter(elevID, fagnavn);
\`\`\`

### Fordeler og ulemper:

**Fordeler:**
- Dramatisk raskere SELECT-spørringer
- Raskere JOIN-operasjoner

**Ulemper:**
- Tar opp ekstra plass
- Gjør INSERT, UPDATE og DELETE litt tregere (indeksen må oppdateres)

**Tips:** Ikke lag indeks på alt. Bare på kolonner som faktisk brukes mye i spørringer.

### Slette en indeks:

\`\`\`sql
DROP INDEX idx_elev_navn;
\`\`\``,
    },
    {
      id: 'it2-5-2-def-1',
      type: 'definition',
      title: 'Viktige begreper',
      content: `**JOIN:** Kombinerer rader fra to eller flere tabeller basert på en relatert kolonne.

**INNER JOIN:** Returnerer bare rader med matchende verdier i begge tabeller.

**LEFT JOIN:** Returnerer alle rader fra venstre tabell, også de uten match.

**GROUP BY:** Grupperer rader med like verdier i én eller flere kolonner.

**HAVING:** Filtrerer grupper etter aggregering (brukes med GROUP BY).

**Subquery:** En SQL-spørring inne i en annen spørring.

**View:** En lagret SQL-spørring som kan brukes som en virtuell tabell.

**Indeks:** En datastruktur som akselererer søk i en tabell.`,
    },
  ],
  exercises: [
    {
      id: 'it2-5-2-mc-1',
      type: 'multiple-choice',
      question: 'Hva er forskjellen mellom INNER JOIN og LEFT JOIN?',
      options: [
        'Det er ingen forskjell',
        'INNER JOIN returnerer alle rader, LEFT JOIN returnerer bare matchende rader',
        'INNER JOIN returnerer bare matchende rader, LEFT JOIN returnerer alle rader fra venstre tabell',
        'INNER JOIN er raskere enn LEFT JOIN',
      ],
      correctAnswer: 2,
      explanation:
        'INNER JOIN returnerer bare rader der det finnes matchende verdier i begge tabeller. LEFT JOIN returnerer alle rader fra venstre tabell, selv om det ikke finnes match i høyre tabell (da blir høyre-kolonnene NULL).',
    },
    {
      id: 'it2-5-2-mc-2',
      type: 'multiple-choice',
      question: 'Hva er forskjellen mellom WHERE og HAVING?',
      options: [
        'WHERE filtrerer rader før gruppering, HAVING filtrerer grupper etter gruppering',
        'WHERE er raskere enn HAVING',
        'HAVING kan bare brukes med COUNT()',
        'Det er ingen forskjell',
      ],
      correctAnswer: 0,
      explanation:
        'WHERE filtrerer individuelle rader før GROUP BY, mens HAVING filtrerer grupper etter at GROUP BY er utført. HAVING brukes ofte med aggregatfunksjoner som COUNT(), AVG(), etc.',
    },
    {
      id: 'it2-5-2-classic-1',
      type: 'classic',
      question: `Gitt disse tabellene:

\`\`\`sql
Forfatter (forfatterID, navn, land)
Bok (ISBN, tittel, forfatterID, utgivelsesår)
\`\`\`

Skriv SQL-spørringer for:
a) Hent alle bøker med forfatterens navn og land
b) Finn antall bøker per land
c) Finn land som har utgitt mer enn 10 bøker
d) Finn forfattere som ikke har skrevet noen bøker`,
      solution: `**a) Alle bøker med forfatterinfo:**

\`\`\`sql
SELECT
    Bok.tittel,
    Bok.utgivelsesår,
    Forfatter.navn AS forfatter,
    Forfatter.land
FROM Bok
INNER JOIN Forfatter ON Bok.forfatterID = Forfatter.forfatterID
ORDER BY Bok.tittel;
\`\`\`

**b) Antall bøker per land:**

\`\`\`sql
SELECT
    Forfatter.land,
    COUNT(Bok.ISBN) AS antall_bøker
FROM Forfatter
LEFT JOIN Bok ON Forfatter.forfatterID = Bok.forfatterID
GROUP BY Forfatter.land
ORDER BY antall_bøker DESC;
\`\`\`

**c) Land med mer enn 10 bøker:**

\`\`\`sql
SELECT
    Forfatter.land,
    COUNT(Bok.ISBN) AS antall_bøker
FROM Forfatter
INNER JOIN Bok ON Forfatter.forfatterID = Bok.forfatterID
GROUP BY Forfatter.land
HAVING COUNT(Bok.ISBN) > 10
ORDER BY antall_bøker DESC;
\`\`\`

**d) Forfattere uten bøker:**

\`\`\`sql
SELECT Forfatter.navn, Forfatter.land
FROM Forfatter
LEFT JOIN Bok ON Forfatter.forfatterID = Bok.forfatterID
WHERE Bok.ISBN IS NULL;
\`\`\`

Alternativt med subquery:

\`\`\`sql
SELECT navn, land
FROM Forfatter
WHERE forfatterID NOT IN (
    SELECT DISTINCT forfatterID FROM Bok
);
\`\`\``,
    },
    {
      id: 'it2-5-2-classic-2',
      type: 'classic',
      question: `Gitt tabellen:

\`\`\`sql
Ordre (ordreID, kundeID, produktID, antall, pris, dato)
\`\`\`

a) Finn totalt salgsbeløp per kunde (sorter fra høyest til lavest)
b) Finn kunder som har handlet for mer enn 10 000 kr totalt
c) Finn gjennomsnittlig ordrestørrelse (antall × pris) per måned i 2024`,
      solution: `**a) Totalt salgsbeløp per kunde:**

\`\`\`sql
SELECT
    kundeID,
    SUM(antall * pris) AS totalt_salg
FROM Ordre
GROUP BY kundeID
ORDER BY totalt_salg DESC;
\`\`\`

**b) Kunder med > 10 000 kr totalt:**

\`\`\`sql
SELECT
    kundeID,
    SUM(antall * pris) AS totalt_salg
FROM Ordre
GROUP BY kundeID
HAVING SUM(antall * pris) > 10000
ORDER BY totalt_salg DESC;
\`\`\`

**c) Gjennomsnittlig ordrestørrelse per måned:**

\`\`\`sql
SELECT
    strftime('%Y-%m', dato) AS måned,
    AVG(antall * pris) AS snitt_ordrestørrelse,
    COUNT(*) AS antall_ordrer
FROM Ordre
WHERE strftime('%Y', dato) = '2024'
GROUP BY strftime('%Y-%m', dato)
ORDER BY måned;
\`\`\`

Forklaring av strftime:
- '%Y-%m' gir format '2024-01'
- '%Y' gir bare årstallet '2024'
- Dette er SQLite-syntaks for datohåndtering`,
    },
    {
      id: 'it2-5-2-classic-3',
      type: 'classic',
      question: `a) Lag en VIEW kalt "KundeStatistikk" som viser kundeID, antall ordrer og totalt salgsbeløp for hver kunde.

b) Bruk denne viewen til å finne kunder som har handlet mer enn 5 ganger og brukt over 5000 kr totalt.`,
      solution: `**a) Opprette VIEW:**

\`\`\`sql
CREATE VIEW KundeStatistikk AS
SELECT
    kundeID,
    COUNT(*) AS antall_ordrer,
    SUM(antall * pris) AS totalt_salg
FROM Ordre
GROUP BY kundeID;
\`\`\`

**b) Bruke viewen:**

\`\`\`sql
SELECT *
FROM KundeStatistikk
WHERE antall_ordrer > 5 AND totalt_salg > 5000
ORDER BY totalt_salg DESC;
\`\`\`

**Teste viewen:**

\`\`\`sql
-- Se alle kunder i statistikken
SELECT * FROM KundeStatistikk;

-- Finn topp 10 kunder etter salg
SELECT * FROM KundeStatistikk
ORDER BY totalt_salg DESC
LIMIT 10;
\`\`\`

**Fordeler med VIEW:**
- Du kan nå bruke "KundeStatistikk" i mange spørringer uten å gjenta GROUP BY-logikken
- Hvis du endrer hvordan statistikken beregnes, trenger du bare å endre viewen
- Koden blir mer leselig og vedlikeholdbar`,
    },
    {
      id: 'it2-5-2-mc-3',
      type: 'multiple-choice',
      question: 'Når bør du opprette en indeks på en kolonne?',
      options: [
        'På alle kolonner for å gjøre databasen raskest mulig',
        'Bare på primærnøkler',
        'På kolonner som ofte brukes i WHERE, JOIN eller ORDER BY',
        'Aldri – indekser er utdatert teknologi',
      ],
      correctAnswer: 2,
      explanation:
        'Indekser bør opprettes på kolonner som ofte brukes i søk (WHERE), sammenkoblinger (JOIN) eller sortering (ORDER BY). For mange indekser kan gjøre INSERT/UPDATE/DELETE tregere, så man må velge strategisk.',
    },
    {
      id: 'it2-5-2-classic-4',
      type: 'classic',
      question: `// --- Samleoppgaver ---

Du har en database for en online-strømmetjeneste:

\`\`\`sql
Bruker (brukerID, navn, epost, registrertDato)
Film (filmID, tittel, sjanger, lengdeMinutter, utgivelsesår)
Visning (visningID, brukerID, filmID, dato, minutter_sett)
\`\`\`

Skriv SQL for:
a) Finn de 5 mest populære filmene (flest visninger totalt)
b) Finn brukere som har sett mer enn 100 timer totalt
c) Finn gjennomsnittlig visningstid per sjanger
d) Lag en VIEW som viser hver brukers favorittsjanger (sjangeren de har sett mest)
e) Finn filmer som ingen har sett helt til slutten (minutter_sett < lengdeMinutter for alle visninger)
f) Foreslå hvilke indekser du ville opprettet på disse tabellene og forklar hvorfor`,
      solution: `**a) De 5 mest populære filmene:**

\`\`\`sql
SELECT
    Film.tittel,
    Film.sjanger,
    COUNT(Visning.visningID) AS antall_visninger
FROM Film
INNER JOIN Visning ON Film.filmID = Visning.filmID
GROUP BY Film.filmID, Film.tittel, Film.sjanger
ORDER BY antall_visninger DESC
LIMIT 5;
\`\`\`

**b) Brukere med > 100 timer sett:**

\`\`\`sql
SELECT
    Bruker.navn,
    Bruker.epost,
    SUM(Visning.minutter_sett) / 60.0 AS timer_sett
FROM Bruker
INNER JOIN Visning ON Bruker.brukerID = Visning.brukerID
GROUP BY Bruker.brukerID, Bruker.navn, Bruker.epost
HAVING SUM(Visning.minutter_sett) > 6000  -- 100 timer = 6000 minutter
ORDER BY timer_sett DESC;
\`\`\`

**c) Gjennomsnittlig visningstid per sjanger:**

\`\`\`sql
SELECT
    Film.sjanger,
    AVG(Visning.minutter_sett) AS snitt_minutter,
    COUNT(Visning.visningID) AS antall_visninger
FROM Film
INNER JOIN Visning ON Film.filmID = Visning.filmID
GROUP BY Film.sjanger
ORDER BY snitt_minutter DESC;
\`\`\`

**d) VIEW for favorittsjanger per bruker:**

\`\`\`sql
CREATE VIEW BrukerFavorittsjanger AS
SELECT
    Bruker.brukerID,
    Bruker.navn,
    Film.sjanger AS favorittsjanger,
    SUM(Visning.minutter_sett) AS totale_minutter
FROM Bruker
INNER JOIN Visning ON Bruker.brukerID = Visning.brukerID
INNER JOIN Film ON Visning.filmID = Film.filmID
GROUP BY Bruker.brukerID, Bruker.navn, Film.sjanger
HAVING SUM(Visning.minutter_sett) = (
    -- Subquery: finn maks minutter for denne brukeren
    SELECT MAX(sjanger_sum)
    FROM (
        SELECT SUM(v2.minutter_sett) AS sjanger_sum
        FROM Visning v2
        INNER JOIN Film f2 ON v2.filmID = f2.filmID
        WHERE v2.brukerID = Bruker.brukerID
        GROUP BY f2.sjanger
    )
);
\`\`\`

**e) Filmer ingen har sett ferdig:**

\`\`\`sql
SELECT DISTINCT Film.tittel, Film.lengdeMinutter
FROM Film
WHERE Film.filmID NOT IN (
    SELECT filmID
    FROM Visning
    INNER JOIN Film ON Visning.filmID = Film.filmID
    WHERE Visning.minutter_sett >= Film.lengdeMinutter
);
\`\`\`

Alternativ løsning med LEFT JOIN:

\`\`\`sql
SELECT Film.tittel, Film.lengdeMinutter
FROM Film
LEFT JOIN (
    SELECT filmID
    FROM Visning
    INNER JOIN Film ON Visning.filmID = Film.filmID
    WHERE Visning.minutter_sett >= Film.lengdeMinutter
) AS FerdigSett ON Film.filmID = FerdigSett.filmID
WHERE FerdigSett.filmID IS NULL;
\`\`\`

**f) Forslag til indekser:**

\`\`\`sql
-- Indeks på fremmednøkler (viktigst!)
CREATE INDEX idx_visning_brukerID ON Visning(brukerID);
CREATE INDEX idx_visning_filmID ON Visning(filmID);

-- Indeks på ofte brukte søkekolonner
CREATE INDEX idx_film_sjanger ON Film(sjanger);
CREATE INDEX idx_bruker_epost ON Bruker(epost);  -- hvis vi søker etter epost

-- Indeks på dato hvis vi filtrerer på tidsperioder
CREATE INDEX idx_visning_dato ON Visning(dato);

-- Sammensatt indeks for vanlige spørringer
CREATE INDEX idx_visning_bruker_dato ON Visning(brukerID, dato);
\`\`\`

**Begrunnelse:**
1. **Fremmednøkler:** Brukes konstant i JOIN-operasjoner → stor ytelsesgevinst
2. **Film.sjanger:** Brukes ofte i GROUP BY og WHERE → raskere gruppering
3. **Bruker.epost:** Hvis innlogging baseres på epost → raskere oppslag
4. **Visning.dato:** For å filtrere på tidsperioder (siste måned, år, etc.)
5. **Sammensatt indeks:** For spørringer som filtrerer både på brukerID og dato

**Hva man IKKE bør indeksere:**
- Kolonner med få unike verdier (f.eks. en "aktiv" boolean)
- Kolonner som sjelden brukes i spørringer
- Små tabeller (indeks gir liten gevinst på < 1000 rader)`,
    },
  ],
  keyTerms: [
    'JOIN (INNER, LEFT, RIGHT)',
    'GROUP BY',
    'HAVING',
    'Aggregatfunksjoner',
    'Subquery',
    'View',
    'Indeks',
    'Query optimization',
  ],
  estimatedMinutes: 70,
  prevChapter: 'it-2-5-1',
  nextChapter: 'it-2-5-3',
};

// ============================================================
// KAPITTEL 5.3: Databaser i Python med SQLite
// ============================================================

export const CHAPTER_IT_2_5_3: TextbookChapter = {
  id: 'it-2-5-3',
  courseId: 'it-2',
  title: 'Databaser i Python med SQLite',
  description:
    'sqlite3-modulen, CRUD-operasjoner og sikkerhet mot SQL injection',
  sections: [
    {
      id: 'it2-5-3-intro',
      type: 'text',
      title: 'Introduksjon',
      content: `# Databaser i Python med SQLite

Nå skal vi kombinere Python-kunnskapene dine med databasekompetansen. SQLite er en lettvekts database som kommer innebygd i Python – perfekt for å lage lokale applikasjoner, prototyper og mindre systemer.

I dette kapittelet lærer du:
- Koble Python til en SQLite-database
- Utføre CRUD-operasjoner (Create, Read, Update, Delete)
- Bruke parameteriserte spørringer for å unngå SQL injection
- Håndtere feil og transaksjoner
- Bygge praktiske databaseapplikasjoner`,
    },
    {
      id: 'it2-5-3-theory-1',
      type: 'text',
      title: 'Koble til database',
      content: `## Koble til database med sqlite3

Python har innebygd støtte for SQLite gjennom \`sqlite3\`-modulen.

### Grunnleggende oppsett:

\`\`\`python
import sqlite3

# Koble til database (oppretter filen hvis den ikke finnes)
conn = sqlite3.connect('skole.db')

# Opprett en cursor for å utføre SQL-kommandoer
cursor = conn.cursor()

# Utfør SQL-kommandoer her...

# Lukk forbindelsen når du er ferdig
conn.close()
\`\`\`

### In-memory database (for testing):

\`\`\`python
# Database som bare eksisterer i RAM
conn = sqlite3.connect(':memory:')
\`\`\`

### Context manager (anbefalt):

\`\`\`python
import sqlite3

# Automatisk lukking av forbindelse
with sqlite3.connect('skole.db') as conn:
    cursor = conn.cursor()
    # Gjør databaseoperasjoner her
    # conn lukkes automatisk når blokken er ferdig
\`\`\``,
    },
    {
      id: 'it2-5-3-theory-2',
      type: 'text',
      title: 'Opprette tabeller',
      content: `## Opprette tabeller

\`\`\`python
import sqlite3

conn = sqlite3.connect('skole.db')
cursor = conn.cursor()

# Opprett tabell
cursor.execute('''
    CREATE TABLE IF NOT EXISTS Elev (
        elevID INTEGER PRIMARY KEY AUTOINCREMENT,
        navn TEXT NOT NULL,
        klasse TEXT,
        epost TEXT UNIQUE
    )
''')

# Lagre endringer
conn.commit()
conn.close()
\`\`\`

**Viktige punkter:**
- \`IF NOT EXISTS\` forhindrer feil hvis tabellen allerede finnes
- \`AUTOINCREMENT\` genererer automatisk økende ID-er
- \`commit()\` må kalles for å lagre endringer
- Flerlinjet SQL i triple quotes (\`'''\`) for lesbarhet`,
    },
    {
      id: 'it2-5-3-theory-3',
      type: 'text',
      title: 'CRUD-operasjoner',
      content: `## CRUD-operasjoner

### Create (INSERT):

\`\`\`python
# FARLIG – ikke gjør dette! (SQL injection-risiko)
navn = "Ole Olsen"
cursor.execute(f"INSERT INTO Elev (navn, klasse) VALUES ('{navn}', '3A')")

# RIKTIG – bruk parameteriserte spørringer:
cursor.execute(
    "INSERT INTO Elev (navn, klasse, epost) VALUES (?, ?, ?)",
    ("Ole Olsen", "3A", "ole@example.com")
)
conn.commit()

# Hent ID-en til den nye raden:
ny_id = cursor.lastrowid
print(f"Ny elev opprettet med ID: {ny_id}")
\`\`\`

### Read (SELECT):

\`\`\`python
# Hent én rad
cursor.execute("SELECT * FROM Elev WHERE elevID = ?", (1,))
elev = cursor.fetchone()
print(elev)  # Tuple: (1, 'Ole Olsen', '3A', 'ole@example.com')

# Hent alle rader
cursor.execute("SELECT navn, klasse FROM Elev ORDER BY navn")
alle_elever = cursor.fetchall()
for elev in alle_elever:
    print(f"{elev[0]} - {elev[1]}")

# Hent rad for rad (for store resultater)
cursor.execute("SELECT * FROM Elev")
for rad in cursor:
    print(rad)
\`\`\`

### Update (UPDATE):

\`\`\`python
# Oppdater én elev
cursor.execute(
    "UPDATE Elev SET klasse = ? WHERE elevID = ?",
    ("3B", 1)
)
conn.commit()
print(f"Endret {cursor.rowcount} rad(er)")
\`\`\`

### Delete (DELETE):

\`\`\`python
# Slett én elev
cursor.execute("DELETE FROM Elev WHERE elevID = ?", (1,))
conn.commit()
print(f"Slettet {cursor.rowcount} rad(er)")
\`\`\``,
    },
    {
      id: 'it2-5-3-theory-4',
      type: 'text',
      title: 'SQL injection og sikkerhet',
      content: `## SQL injection og sikkerhet

**SQL injection** er en av de farligste sikkerhetssårbarhetene i webapplikasjoner.

### Farlig kode (ALDRI gjør dette):

\`\`\`python
# Brukerinput
bruker_input = input("Skriv navn: ")

# FARLIG: String formatting
query = f"SELECT * FROM Elev WHERE navn = '{bruker_input}'"
cursor.execute(query)
\`\`\`

### Hva kan gå galt?

Hvis brukeren skriver:
\`\`\`
Ole' OR '1'='1
\`\`\`

Blir spørringen:
\`\`\`sql
SELECT * FROM Elev WHERE navn = 'Ole' OR '1'='1'
\`\`\`

Dette returnerer ALLE elever fordi \`'1'='1'\` alltid er sant!

Verre: brukeren kan skrive:
\`\`\`
'; DROP TABLE Elev; --
\`\`\`

Dette kan slette hele tabellen!

### RIKTIG måte (parameteriserte spørringer):

\`\`\`python
# Trygt: Python escaper verdien automatisk
bruker_input = input("Skriv navn: ")
cursor.execute(
    "SELECT * FROM Elev WHERE navn = ?",
    (bruker_input,)
)
\`\`\`

**Viktig:** Bruk ALLTID \`?\` for verdier, aldri string formatting (\`f""\`) eller konkatenering (\`+\`)!`,
    },
    {
      id: 'it2-5-3-ex-1',
      type: 'text',
      title: 'Eksempel: Komplett CRUD-applikasjon',
      content: `## Eksempel: Komplett CRUD-applikasjon

\`\`\`python
import sqlite3

class ElevDatabase:
    def __init__(self, db_fil='skole.db'):
        self.conn = sqlite3.connect(db_fil)
        self.cursor = self.conn.cursor()
        self._opprett_tabell()

    def _opprett_tabell(self):
        self.cursor.execute('''
            CREATE TABLE IF NOT EXISTS Elev (
                elevID INTEGER PRIMARY KEY AUTOINCREMENT,
                navn TEXT NOT NULL,
                klasse TEXT,
                epost TEXT UNIQUE
            )
        ''')
        self.conn.commit()

    def legg_til_elev(self, navn, klasse, epost):
        """Create - legg til ny elev"""
        try:
            self.cursor.execute(
                "INSERT INTO Elev (navn, klasse, epost) VALUES (?, ?, ?)",
                (navn, klasse, epost)
            )
            self.conn.commit()
            return self.cursor.lastrowid
        except sqlite3.IntegrityError:
            return None  # Epost finnes allerede

    def hent_alle_elever(self):
        """Read - hent alle elever"""
        self.cursor.execute("SELECT * FROM Elev ORDER BY navn")
        return self.cursor.fetchall()

    def hent_elev(self, elevID):
        """Read - hent én elev"""
        self.cursor.execute("SELECT * FROM Elev WHERE elevID = ?", (elevID,))
        return self.cursor.fetchone()

    def oppdater_elev(self, elevID, navn=None, klasse=None, epost=None):
        """Update - oppdater elev"""
        if navn:
            self.cursor.execute(
                "UPDATE Elev SET navn = ? WHERE elevID = ?",
                (navn, elevID)
            )
        if klasse:
            self.cursor.execute(
                "UPDATE Elev SET klasse = ? WHERE elevID = ?",
                (klasse, elevID)
            )
        if epost:
            self.cursor.execute(
                "UPDATE Elev SET epost = ? WHERE elevID = ?",
                (epost, elevID)
            )
        self.conn.commit()
        return self.cursor.rowcount > 0

    def slett_elev(self, elevID):
        """Delete - slett elev"""
        self.cursor.execute("DELETE FROM Elev WHERE elevID = ?", (elevID,))
        self.conn.commit()
        return self.cursor.rowcount > 0

    def lukk(self):
        self.conn.close()

# Bruk av klassen
if __name__ == "__main__":
    db = ElevDatabase()

    # Legg til elever
    id1 = db.legg_til_elev("Ole Olsen", "3A", "ole@example.com")
    id2 = db.legg_til_elev("Kari Hansen", "3B", "kari@example.com")

    # Hent alle
    print("Alle elever:")
    for elev in db.hent_alle_elever():
        print(elev)

    # Oppdater
    db.oppdater_elev(id1, klasse="3C")

    # Hent én
    print("\\nEn elev:")
    print(db.hent_elev(id1))

    # Slett
    db.slett_elev(id2)

    db.lukk()
\`\`\``,
    },
    {
      id: 'it2-5-3-theory-5',
      type: 'text',
      title: 'Row factory og dictionaries',
      content: `## Row factory – få resultater som dictionaries

Som standard returnerer SQLite resultater som tuples. Vi kan endre dette:

\`\`\`python
import sqlite3

conn = sqlite3.connect('skole.db')

# Få resultater som dictionaries
conn.row_factory = sqlite3.Row

cursor = conn.cursor()
cursor.execute("SELECT * FROM Elev WHERE elevID = ?", (1,))
elev = cursor.fetchone()

# Nå kan vi bruke kolonnenavn:
print(elev['navn'])
print(elev['klasse'])

# Eller konvertere til dict:
elev_dict = dict(elev)
print(elev_dict)

conn.close()
\`\`\`

Dette gjør koden mer leselig og mindre feilutsatt.`,
    },
    {
      id: 'it2-5-3-theory-6',
      type: 'text',
      title: 'Feilhåndtering og transaksjoner',
      content: `## Feilhåndtering og transaksjoner

### Try-except for database-feil:

\`\`\`python
import sqlite3

try:
    conn = sqlite3.connect('skole.db')
    cursor = conn.cursor()

    cursor.execute(
        "INSERT INTO Elev (navn, epost) VALUES (?, ?)",
        ("Ole", "ole@example.com")
    )
    conn.commit()

except sqlite3.IntegrityError as e:
    print(f"Integritetsfeil (f.eks. duplikat epost): {e}")

except sqlite3.OperationalError as e:
    print(f"Operasjonsfeil (f.eks. tabellen finnes ikke): {e}")

except sqlite3.Error as e:
    print(f"Database-feil: {e}")

finally:
    conn.close()
\`\`\`

### Transaksjoner:

En **transaksjon** er en sekvens av operasjoner som enten utføres helt eller ikke i det hele tatt.

\`\`\`python
try:
    conn = sqlite3.connect('skole.db')
    cursor = conn.cursor()

    # Start transaksjon (implisitt)
    cursor.execute("INSERT INTO Elev (navn) VALUES (?)", ("Ole",))
    cursor.execute("INSERT INTO Karakter (elevID, fag, karakter) VALUES (?, ?, ?)",
                   (cursor.lastrowid, "Matte", 5))

    # Hvis alt går bra:
    conn.commit()

except sqlite3.Error as e:
    # Hvis noe går galt, angre alle endringer:
    conn.rollback()
    print(f"Feil: {e}")

finally:
    conn.close()
\`\`\``,
    },
    {
      id: 'it2-5-3-def-1',
      type: 'definition',
      title: 'Viktige begreper',
      content: `**sqlite3:** Pythons innebygde modul for å jobbe med SQLite-databaser.

**Cursor:** Objekt som utfører SQL-kommandoer og henter resultater.

**commit():** Lagrer endringer til databasen.

**rollback():** Angrer endringer siden siste commit.

**fetchone():** Henter én rad fra resultatet.

**fetchall():** Henter alle rader fra resultatet.

**Parameterisert spørring:** SQL-spørring med \`?\` for verdier, forhindrer SQL injection.

**SQL injection:** Sikkerhetssårbarhet der ondsinnet SQL-kode injiseres via brukerinput.

**Transaksjon:** Sekvens av operasjoner som utføres som en atomisk enhet.`,
    },
  ],
  exercises: [
    {
      id: 'it2-5-3-mc-1',
      type: 'multiple-choice',
      question: 'Hvorfor er parameteriserte spørringer viktige?',
      options: [
        'De gjør spørringer raskere',
        'De forhindrer SQL injection-angrep',
        'De gjør koden kortere',
        'De er påkrevd av Python',
      ],
      correctAnswer: 1,
      explanation:
        'Parameteriserte spørringer (med ?) forhindrer SQL injection ved å behandle brukerinput som data, ikke som SQL-kode. Dette er kritisk for sikkerhet.',
    },
    {
      id: 'it2-5-3-mc-2',
      type: 'multiple-choice',
      question: 'Hva gjør conn.commit()?',
      options: [
        'Lukker databaseforbindelsen',
        'Henter data fra databasen',
        'Lagrer endringer permanent til databasen',
        'Angrer siste endring',
      ],
      correctAnswer: 2,
      explanation:
        'commit() lagrer alle endringer (INSERT, UPDATE, DELETE) permanent til databasen. Uten commit() vil endringene gå tapt når forbindelsen lukkes.',
    },
    {
      id: 'it2-5-3-classic-1',
      type: 'classic',
      question: `Skriv en Python-funksjon \`søk_bøker(søkeord)\` som:
- Kobler til en database 'bibliotek.db'
- Søker etter bøker der tittelen inneholder søkeordet (case-insensitive)
- Returnerer en liste med tupler (tittel, forfatter, år)
- Bruker parameteriserte spørringer

Gitt tabell:
\`\`\`sql
Bok (bokID, tittel, forfatter, utgivelsesår)
\`\`\``,
      solution: `\`\`\`python
import sqlite3

def søk_bøker(søkeord):
    """
    Søker etter bøker med tittel som inneholder søkeordet.

    Args:
        søkeord (str): Tekst å søke etter i tittelen

    Returns:
        list: Liste med tupler (tittel, forfatter, år)
    """
    conn = sqlite3.connect('bibliotek.db')
    cursor = conn.cursor()

    # Bruk LIKE med % for wildcard-søk
    # LOWER() for case-insensitive søk
    cursor.execute("""
        SELECT tittel, forfatter, utgivelsesår
        FROM Bok
        WHERE LOWER(tittel) LIKE LOWER(?)
        ORDER BY tittel
    """, (f'%{søkeord}%',))

    resultater = cursor.fetchall()
    conn.close()

    return resultater

# Test
if __name__ == "__main__":
    bøker = søk_bøker("harry")

    if bøker:
        print(f"Fant {len(bøker)} bok(er):")
        for tittel, forfatter, år in bøker:
            print(f"- {tittel} av {forfatter} ({år})")
    else:
        print("Ingen bøker funnet")
\`\`\`

**Forklaring:**
- \`LIKE\` brukes for mønstermatching
- \`%\` er wildcard (matcher hva som helst)
- \`LOWER()\` konverterer til små bokstaver for case-insensitive søk
- \`f'%{søkeord}%'\` legger til % før og etter søkeordet
- Bruker parameterisert spørring (?) for sikkerhet`,
    },
    {
      id: 'it2-5-3-classic-2',
      type: 'classic',
      question: `Forklar hvorfor denne koden er farlig:

\`\`\`python
navn = input("Skriv navn: ")
cursor.execute(f"DELETE FROM Elev WHERE navn = '{navn}'")
conn.commit()
\`\`\`

Gi et eksempel på hva en ondsinnet bruker kunne skrive, og skriv en trygg versjon av koden.`,
      solution: `**Hvorfor den er farlig:**

Koden bruker f-string til å sette inn brukerinput direkte i SQL-spørringen. Dette åpner for SQL injection.

**Eksempel på angrep:**

Hvis brukeren skriver:
\`\`\`
' OR '1'='1
\`\`\`

Blir spørringen:
\`\`\`sql
DELETE FROM Elev WHERE navn = '' OR '1'='1'
\`\`\`

Fordi \`'1'='1'\` alltid er sant, slettes ALLE elever!

Verre: brukeren kan skrive:
\`\`\`
'; DROP TABLE Elev; --
\`\`\`

Dette gir:
\`\`\`sql
DELETE FROM Elev WHERE navn = ''; DROP TABLE Elev; --'
\`\`\`

Første statement sletter ingenting, andre statement sletter hele tabellen!

**Trygg versjon:**

\`\`\`python
import sqlite3

navn = input("Skriv navn: ")

conn = sqlite3.connect('skole.db')
cursor = conn.cursor()

# Bruk parameterisert spørring
cursor.execute("DELETE FROM Elev WHERE navn = ?", (navn,))

antall_slettet = cursor.rowcount
conn.commit()
conn.close()

print(f"Slettet {antall_slettet} elev(er)")
\`\`\`

**Hvorfor dette er trygt:**
- Python escaper automatisk spesialtegn i \`navn\`
- Brukerinput behandles som data, ikke som SQL-kode
- Selv om brukeren skriver \`' OR '1'='1\`, blir det søkt etter en elev med akkurat det navnet (som ikke finnes)

**Generell regel:**
ALDRI bruk f-strings, %-formatting eller + for å sette inn verdier i SQL. Bruk ALLTID \`?\` og tupler.`,
    },
    {
      id: 'it2-5-3-classic-3',
      type: 'classic',
      question: `Lag en klasse \`ProduktDatabase\` som håndterer en produktdatabase:

\`\`\`sql
Produkt (produktID, navn, pris, antall)
\`\`\`

Klassen skal ha metoder for:
- \`__init__(db_fil)\`: Koble til og opprett tabell
- \`legg_til_produkt(navn, pris, antall)\`: Legg til nytt produkt
- \`hent_alle_produkter()\`: Hent alle produkter
- \`oppdater_antall(produktID, endring)\`: Endre antall (kan være negativt for salg)
- \`finn_lave_lagre(grense=10)\`: Finn produkter med antall under grense

Bruk row_factory for dictionary-resultater.`,
      solution: `\`\`\`python
import sqlite3

class ProduktDatabase:
    def __init__(self, db_fil='produkter.db'):
        """Koble til database og opprett tabell"""
        self.conn = sqlite3.connect(db_fil)
        self.conn.row_factory = sqlite3.Row  # Få dict-resultater
        self.cursor = self.conn.cursor()
        self._opprett_tabell()

    def _opprett_tabell(self):
        """Privat metode for å opprette tabell"""
        self.cursor.execute('''
            CREATE TABLE IF NOT EXISTS Produkt (
                produktID INTEGER PRIMARY KEY AUTOINCREMENT,
                navn TEXT NOT NULL UNIQUE,
                pris REAL NOT NULL CHECK (pris >= 0),
                antall INTEGER NOT NULL DEFAULT 0 CHECK (antall >= 0)
            )
        ''')
        self.conn.commit()

    def legg_til_produkt(self, navn, pris, antall=0):
        """Legg til nytt produkt"""
        try:
            self.cursor.execute(
                "INSERT INTO Produkt (navn, pris, antall) VALUES (?, ?, ?)",
                (navn, pris, antall)
            )
            self.conn.commit()
            return self.cursor.lastrowid
        except sqlite3.IntegrityError:
            print(f"Feil: Produkt '{navn}' finnes allerede")
            return None

    def hent_alle_produkter(self):
        """Hent alle produkter som liste av dictionaries"""
        self.cursor.execute("""
            SELECT produktID, navn, pris, antall,
                   ROUND(pris * antall, 2) AS totalverdi
            FROM Produkt
            ORDER BY navn
        """)
        return [dict(row) for row in self.cursor.fetchall()]

    def oppdater_antall(self, produktID, endring):
        """
        Oppdater antall for et produkt.

        Args:
            produktID (int): ID til produktet
            endring (int): Endring i antall (pos for inn, neg for salg)

        Returns:
            bool: True hvis vellykket, False hvis ikke
        """
        # Hent nåværende antall
        self.cursor.execute(
            "SELECT antall FROM Produkt WHERE produktID = ?",
            (produktID,)
        )
        resultat = self.cursor.fetchone()

        if not resultat:
            print(f"Feil: Produkt med ID {produktID} finnes ikke")
            return False

        nytt_antall = resultat['antall'] + endring

        if nytt_antall < 0:
            print(f"Feil: Ikke nok på lager (har {resultat['antall']}, forsøker å trekke {-endring})")
            return False

        # Oppdater antall
        self.cursor.execute(
            "UPDATE Produkt SET antall = ? WHERE produktID = ?",
            (nytt_antall, produktID)
        )
        self.conn.commit()
        return True

    def finn_lave_lagre(self, grense=10):
        """Finn produkter med antall under grensen"""
        self.cursor.execute("""
            SELECT produktID, navn, pris, antall
            FROM Produkt
            WHERE antall < ?
            ORDER BY antall ASC
        """, (grense,))
        return [dict(row) for row in self.cursor.fetchall()]

    def hent_totalverdi(self):
        """Beregn total lagerverdi"""
        self.cursor.execute("""
            SELECT SUM(pris * antall) AS totalverdi
            FROM Produkt
        """)
        resultat = self.cursor.fetchone()
        return resultat['totalverdi'] or 0

    def lukk(self):
        """Lukk databaseforbindelse"""
        self.conn.close()

    def __enter__(self):
        """Context manager support"""
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        """Context manager cleanup"""
        self.lukk()

# Eksempelbruk
if __name__ == "__main__":
    # Bruk som context manager
    with ProduktDatabase('lager.db') as db:
        # Legg til produkter
        id1 = db.legg_til_produkt("Laptop", 8999, 15)
        id2 = db.legg_til_produkt("Mus", 199, 5)
        id3 = db.legg_til_produkt("Tastatur", 599, 8)

        # Vis alle produkter
        print("Alle produkter:")
        for produkt in db.hent_alle_produkter():
            print(f"{produkt['navn']}: {produkt['antall']} stk à {produkt['pris']} kr")

        # Selg 3 laptops
        print("\\nSelger 3 laptops...")
        if db.oppdater_antall(id1, -3):
            print("Salg vellykket!")

        # Motta 20 nye mus
        print("Mottar 20 nye mus...")
        db.oppdater_antall(id2, 20)

        # Finn lave lagre
        print("\\nProdukter med lavt lager (<10):")
        for produkt in db.finn_lave_lagre(10):
            print(f"⚠️  {produkt['navn']}: {produkt['antall']} stk")

        # Total lagerverdi
        print(f"\\nTotal lagerverdi: {db.hent_totalverdi():.2f} kr")
\`\`\`

**Forklaring av nøkkelfunksjoner:**

1. **row_factory:** Gjør at vi får dict i stedet for tuples
2. **CHECK constraints:** Sikrer at pris og antall ikke er negative
3. **UNIQUE på navn:** Forhindrer duplikate produktnavn
4. **Validering i Python:** Sjekker at vi ikke selger mer enn vi har
5. **Context manager:** Støtte for \`with\`-statement for automatisk lukking
6. **Beregnet kolonne:** totalverdi = pris × antall`,
    },
    {
      id: 'it2-5-3-classic-4',
      type: 'classic',
      question: `// --- Samleoppgaver ---

Lag et komplett biblioteksystem med følgende funksjonalitet:

**Tabeller:**
\`\`\`sql
Bok (ISBN PRIMARY KEY, tittel, forfatter, utgivelsesår, antall_eksemplarer)
Medlem (medlemsID PRIMARY KEY, navn, epost UNIQUE, registrert_dato)
Utlån (utlånID PRIMARY KEY, ISBN, medlemsID, utlånsdato, innleveringsfrist, innlevert_dato)
\`\`\`

**Oppgaver:**
a) Lag en \`BibliotekDatabase\`-klasse som håndterer alle tabellene
b) Implementer metoder for:
   - Registrere ny bok
   - Registrere nytt medlem
   - Låne ut en bok (sjekk at den er tilgjengelig)
   - Levere inn en bok
   - Finne alle aktive utlån for et medlem
   - Finne medlemmer med forfalte lån (innleveringsfrist passert, ikke innlevert)
   - Finn mest populære bøker (flest utlån totalt)
c) Lag et enkelt tekstbasert menygrensesnitt for å teste systemet
d) Bruk transaksjoner der det er nødvendig`,
      solution: `\`\`\`python
import sqlite3
from datetime import datetime, timedelta

class BibliotekDatabase:
    def __init__(self, db_fil='bibliotek.db'):
        self.conn = sqlite3.connect(db_fil)
        self.conn.row_factory = sqlite3.Row
        self.cursor = self.conn.cursor()
        self._opprett_tabeller()

    def _opprett_tabeller(self):
        """Opprett alle tabeller"""
        self.cursor.execute('''
            CREATE TABLE IF NOT EXISTS Bok (
                ISBN TEXT PRIMARY KEY,
                tittel TEXT NOT NULL,
                forfatter TEXT NOT NULL,
                utgivelsesår INTEGER,
                antall_eksemplarer INTEGER DEFAULT 1 CHECK (antall_eksemplarer >= 0)
            )
        ''')

        self.cursor.execute('''
            CREATE TABLE IF NOT EXISTS Medlem (
                medlemsID INTEGER PRIMARY KEY AUTOINCREMENT,
                navn TEXT NOT NULL,
                epost TEXT UNIQUE NOT NULL,
                registrert_dato TEXT DEFAULT CURRENT_DATE
            )
        ''')

        self.cursor.execute('''
            CREATE TABLE IF NOT EXISTS Utlån (
                utlånID INTEGER PRIMARY KEY AUTOINCREMENT,
                ISBN TEXT NOT NULL,
                medlemsID INTEGER NOT NULL,
                utlånsdato TEXT NOT NULL,
                innleveringsfrist TEXT NOT NULL,
                innlevert_dato TEXT,
                FOREIGN KEY (ISBN) REFERENCES Bok(ISBN),
                FOREIGN KEY (medlemsID) REFERENCES Medlem(medlemsID)
            )
        ''')

        self.conn.commit()

    def registrer_bok(self, isbn, tittel, forfatter, år, antall=1):
        """Registrer ny bok i systemet"""
        try:
            self.cursor.execute("""
                INSERT INTO Bok (ISBN, tittel, forfatter, utgivelsesår, antall_eksemplarer)
                VALUES (?, ?, ?, ?, ?)
            """, (isbn, tittel, forfatter, år, antall))
            self.conn.commit()
            return True
        except sqlite3.IntegrityError:
            print(f"Feil: Bok med ISBN {isbn} finnes allerede")
            return False

    def registrer_medlem(self, navn, epost):
        """Registrer nytt medlem"""
        try:
            dato = datetime.now().strftime('%Y-%m-%d')
            self.cursor.execute("""
                INSERT INTO Medlem (navn, epost, registrert_dato)
                VALUES (?, ?, ?)
            """, (navn, epost, dato))
            self.conn.commit()
            return self.cursor.lastrowid
        except sqlite3.IntegrityError:
            print(f"Feil: Epost {epost} er allerede registrert")
            return None

    def lån_ut_bok(self, isbn, medlemsID, låneperiode_dager=14):
        """Lån ut en bok til et medlem"""
        try:
            # Start transaksjon
            self.conn.execute("BEGIN TRANSACTION")

            # Sjekk om boken er tilgjengelig
            self.cursor.execute("""
                SELECT
                    antall_eksemplarer,
                    (SELECT COUNT(*) FROM Utlån
                     WHERE ISBN = ? AND innlevert_dato IS NULL) AS antall_utlånt
                FROM Bok
                WHERE ISBN = ?
            """, (isbn, isbn))

            resultat = self.cursor.fetchone()
            if not resultat:
                self.conn.rollback()
                print("Feil: Boken finnes ikke")
                return False

            tilgjengelige = resultat['antall_eksemplarer'] - resultat['antall_utlånt']
            if tilgjengelige <= 0:
                self.conn.rollback()
                print("Feil: Alle eksemplarer er utlånt")
                return False

            # Sjekk om medlemmet eksisterer
            self.cursor.execute("SELECT 1 FROM Medlem WHERE medlemsID = ?", (medlemsID,))
            if not self.cursor.fetchone():
                self.conn.rollback()
                print("Feil: Medlemmet finnes ikke")
                return False

            # Registrer utlån
            utlånsdato = datetime.now()
            frist = utlånsdato + timedelta(days=låneperiode_dager)

            self.cursor.execute("""
                INSERT INTO Utlån (ISBN, medlemsID, utlånsdato, innleveringsfrist)
                VALUES (?, ?, ?, ?)
            """, (isbn, medlemsID, utlånsdato.strftime('%Y-%m-%d'),
                  frist.strftime('%Y-%m-%d')))

            # Commit transaksjonen
            self.conn.commit()
            print(f"Utlån registrert! Innleveringsfrist: {frist.strftime('%d.%m.%Y')}")
            return True

        except sqlite3.Error as e:
            self.conn.rollback()
            print(f"Database-feil: {e}")
            return False

    def lever_inn_bok(self, utlånID):
        """Lever inn en lånt bok"""
        innlevert_dato = datetime.now().strftime('%Y-%m-%d')

        self.cursor.execute("""
            UPDATE Utlån
            SET innlevert_dato = ?
            WHERE utlånID = ? AND innlevert_dato IS NULL
        """, (innlevert_dato, utlånID))

        if self.cursor.rowcount > 0:
            self.conn.commit()
            print("Bok levert inn!")
            return True
        else:
            print("Feil: Utlånet finnes ikke eller er allerede innlevert")
            return False

    def hent_aktive_utlån(self, medlemsID):
        """Finn alle aktive utlån for et medlem"""
        self.cursor.execute("""
            SELECT
                Utlån.utlånID,
                Bok.tittel,
                Bok.forfatter,
                Utlån.utlånsdato,
                Utlån.innleveringsfrist,
                CASE
                    WHEN Utlån.innleveringsfrist < DATE('now') THEN 'FORFALT'
                    ELSE 'OK'
                END AS status
            FROM Utlån
            INNER JOIN Bok ON Utlån.ISBN = Bok.ISBN
            WHERE Utlån.medlemsID = ? AND Utlån.innlevert_dato IS NULL
            ORDER BY Utlån.innleveringsfrist
        """, (medlemsID,))

        return [dict(row) for row in self.cursor.fetchall()]

    def hent_forfalte_lån(self):
        """Finn alle medlemmer med forfalte lån"""
        self.cursor.execute("""
            SELECT
                Medlem.navn,
                Medlem.epost,
                Bok.tittel,
                Utlån.innleveringsfrist,
                CAST((julianday('now') - julianday(Utlån.innleveringsfrist)) AS INTEGER) AS dager_forsinkelse
            FROM Utlån
            INNER JOIN Medlem ON Utlån.medlemsID = Medlem.medlemsID
            INNER JOIN Bok ON Utlån.ISBN = Bok.ISBN
            WHERE Utlån.innleveringsfrist < DATE('now')
                AND Utlån.innlevert_dato IS NULL
            ORDER BY dager_forsinkelse DESC
        """)

        return [dict(row) for row in self.cursor.fetchall()]

    def hent_populære_bøker(self, antall=10):
        """Finn mest populære bøker (flest utlån)"""
        self.cursor.execute("""
            SELECT
                Bok.tittel,
                Bok.forfatter,
                COUNT(Utlån.utlånID) AS antall_utlån
            FROM Bok
            LEFT JOIN Utlån ON Bok.ISBN = Utlån.ISBN
            GROUP BY Bok.ISBN, Bok.tittel, Bok.forfatter
            HAVING COUNT(Utlån.utlånID) > 0
            ORDER BY antall_utlån DESC
            LIMIT ?
        """, (antall,))

        return [dict(row) for row in self.cursor.fetchall()]

    def lukk(self):
        self.conn.close()

def vis_meny():
    """Vis hovedmeny"""
    print("\\n" + "="*50)
    print("BIBLIOTEKSYSTEM")
    print("="*50)
    print("1. Registrer ny bok")
    print("2. Registrer nytt medlem")
    print("3. Lån ut bok")
    print("4. Lever inn bok")
    print("5. Vis aktive utlån for medlem")
    print("6. Vis forfalte lån")
    print("7. Vis populære bøker")
    print("0. Avslutt")
    print("="*50)

def main():
    """Hovedprogram med menygrensesnitt"""
    db = BibliotekDatabase('bibliotek.db')

    while True:
        vis_meny()
        valg = input("Velg handling (0-7): ").strip()

        if valg == "0":
            print("Avslutter...")
            break

        elif valg == "1":
            print("\\n--- Registrer ny bok ---")
            isbn = input("ISBN: ").strip()
            tittel = input("Tittel: ").strip()
            forfatter = input("Forfatter: ").strip()
            år = int(input("Utgivelsesår: "))
            antall = int(input("Antall eksemplarer: "))
            db.registrer_bok(isbn, tittel, forfatter, år, antall)

        elif valg == "2":
            print("\\n--- Registrer nytt medlem ---")
            navn = input("Navn: ").strip()
            epost = input("Epost: ").strip()
            medlemsID = db.registrer_medlem(navn, epost)
            if medlemsID:
                print(f"Medlem registrert med ID: {medlemsID}")

        elif valg == "3":
            print("\\n--- Lån ut bok ---")
            isbn = input("ISBN: ").strip()
            medlemsID = int(input("MedlemsID: "))
            db.lån_ut_bok(isbn, medlemsID)

        elif valg == "4":
            print("\\n--- Lever inn bok ---")
            utlånID = int(input("UtlånID: "))
            db.lever_inn_bok(utlånID)

        elif valg == "5":
            print("\\n--- Aktive utlån ---")
            medlemsID = int(input("MedlemsID: "))
            utlån = db.hent_aktive_utlån(medlemsID)
            if utlån:
                for lån in utlån:
                    status = "⚠️ FORFALT" if lån['status'] == 'FORFALT' else "✓"
                    print(f"{status} [{lån['utlånID']}] {lån['tittel']} - Frist: {lån['innleveringsfrist']}")
            else:
                print("Ingen aktive utlån")

        elif valg == "6":
            print("\\n--- Forfalte lån ---")
            forfalte = db.hent_forfalte_lån()
            if forfalte:
                for lån in forfalte:
                    print(f"⚠️  {lån['navn']} ({lån['epost']})")
                    print(f"    {lån['tittel']} - {lån['dager_forsinkelse']} dager forsinket")
            else:
                print("Ingen forfalte lån!")

        elif valg == "7":
            print("\\n--- Populære bøker ---")
            bøker = db.hent_populære_bøker(10)
            for i, bok in enumerate(bøker, 1):
                print(f"{i}. {bok['tittel']} av {bok['forfatter']} - {bok['antall_utlån']} utlån")

        else:
            print("Ugyldig valg, prøv igjen")

    db.lukk()

if __name__ == "__main__":
    main()
\`\`\`

**Nøkkelpunkter i løsningen:**

1. **Transaksjoner:** Brukt i \`lån_ut_bok()\` for å sikre at alle sjekker og innsetting skjer atomisk

2. **Feilhåndtering:** Try-except og rollback ved feil

3. **Datahåndtering:** Bruker datetime-modulen for å håndtere datoer

4. **SQL-teknikker:**
   - Subqueries for å telle utlånte eksemplarer
   - CASE for statusberegning
   - julianday() for datodifferanse
   - LEFT JOIN for å inkludere bøker uten utlån

5. **Sikkerhet:** Parameteriserte spørringer overalt

6. **Brukervennlighet:** Menygrensesnitt for enkel testing`,
    },
  ],
  keyTerms: [
    'sqlite3',
    'Cursor',
    'commit/rollback',
    'Parameterisert spørring',
    'SQL injection',
    'fetchone/fetchall',
    'row_factory',
    'Transaksjon',
  ],
  estimatedMinutes: 65,
  prevChapter: 'it-2-5-2',
  nextChapter: 'it-2-5-4',
};

// ============================================================
// KAPITTEL 5.4: NoSQL og alternative datalagring
// ============================================================

export const CHAPTER_IT_2_5_4: TextbookChapter = {
  id: 'it-2-5-4',
  courseId: 'it-2',
  title: 'NoSQL og alternative datalagring',
  description:
    'Dokumentdatabaser, nøkkel-verdi-lagring og når bruke hva',
  sections: [
    {
      id: 'it2-5-4-intro',
      type: 'text',
      title: 'Introduksjon',
      content: `# NoSQL og alternative datalagring

Relasjonsdatabaser er fantastiske for strukturerte data med klare relasjoner. Men hva når dataene dine ikke passer i tabeller? Hva hvis du trenger ekstrem skalerbarhet eller fleksibilitet?

Da kan **NoSQL-databaser** være løsningen.

I dette kapittelet lærer du:
- Hva NoSQL er og hvorfor det eksisterer
- Ulike typer NoSQL-databaser
- MongoDB som eksempel på dokumentdatabase
- Når bruke SQL vs. NoSQL`,
    },
    {
      id: 'it2-5-4-theory-1',
      type: 'text',
      title: 'Hva er NoSQL?',
      content: `## Hva er NoSQL?

**NoSQL** står for "Not Only SQL" (ikke bare SQL). Det er et samlebegrep for databaser som ikke følger den tradisjonelle relasjonsdatabasemodellen.

### Hvorfor NoSQL?

Relasjonsdatabaser har utfordringer med:
- **Skalerbarhet:** Vanskelig å spre data over mange servere
- **Fleksibilitet:** Krever fast skjema (schema) på forhånd
- **Ytelse:** JOIN-operasjoner kan bli trege på store datasett

NoSQL-databaser er designet for:
- **Horizontal skalering:** Spre data over mange servere
- **Skjemafrihet:** Endre struktur underveis uten å migrere hele databasen
- **Spesialiserte bruksområder:** Optimalisert for spesifikke typer data

### Typer NoSQL-databaser

1. **Dokumentdatabaser** (MongoDB, CouchDB)
   - Lagrer data som dokumenter (vanligvis JSON)
   - Eksempel: Blogginlegg med kommentarer

2. **Nøkkel-verdi-lagring** (Redis, DynamoDB)
   - Enkel lagring av nøkkel → verdi
   - Eksempel: Sessions, cache

3. **Kolonneorienterte** (Cassandra, HBase)
   - Optimalisert for store datasett med mange kolonner
   - Eksempel: Tidsseriedata, loggfiler

4. **Grafdatabaser** (Neo4j, ArangoDB)
   - Optimalisert for data med mange relasjoner
   - Eksempel: Sosiale nettverk, anbefalingssystemer`,
    },
    {
      id: 'it2-5-4-theory-2',
      type: 'text',
      title: 'Dokumentdatabaser',
      content: `## Dokumentdatabaser

Den mest populære typen NoSQL. Data lagres som **dokumenter** (vanligvis JSON eller BSON).

### Eksempel: MongoDB-dokument

\`\`\`json
{
  "_id": "507f1f77bcf86cd799439011",
  "navn": "Ole Olsen",
  "epost": "ole@example.com",
  "adresse": {
    "gate": "Storgata 1",
    "postnummer": "0001",
    "by": "Oslo"
  },
  "interesser": ["programmering", "gaming", "fotball"],
  "registrert": "2024-01-15"
}
\`\`\`

**Fordeler:**
- Nestede strukturer (adresse inne i bruker)
- Arrays (interesser) uten egen tabell
- Fleksibelt skjema (ett dokument kan ha felt andre mangler)

**Ulemper:**
- Kan føre til dataredundans
- Mindre støtte for komplekse spørringer over relasjoner
- Ingen garantert ACID-egenskaper (avhengig av database)`,
    },
    {
      id: 'it2-5-4-ex-1',
      type: 'text',
      title: 'MongoDB-konsepter',
      content: `## MongoDB-konsepter

MongoDB er den mest populære dokumentdatabasen.

### Terminologi (SQL → MongoDB)

| SQL | MongoDB |
|-----|---------|
| Database | Database |
| Tabell | Collection |
| Rad | Document |
| Kolonne | Field |
| JOIN | Embedded docs / $lookup |

### Grunnleggende operasjoner (pseudo-kode)

**Create:**
\`\`\`javascript
db.users.insertOne({
  navn: "Kari Hansen",
  epost: "kari@example.com",
  alder: 25
})
\`\`\`

**Read:**
\`\`\`javascript
// Finn alle over 18 år
db.users.find({ alder: { $gt: 18 } })

// Finn én bruker
db.users.findOne({ epost: "kari@example.com" })
\`\`\`

**Update:**
\`\`\`javascript
db.users.updateOne(
  { epost: "kari@example.com" },
  { $set: { alder: 26 } }
)
\`\`\`

**Delete:**
\`\`\`javascript
db.users.deleteOne({ epost: "kari@example.com" })
\`\`\`

### Nestede strukturer

\`\`\`javascript
{
  "tittel": "Min blogg",
  "innhold": "Dette er en bloggpost...",
  "forfatter": {
    "navn": "Ole",
    "epost": "ole@example.com"
  },
  "kommentarer": [
    {
      "bruker": "Kari",
      "tekst": "Bra innlegg!",
      "dato": "2024-01-15"
    },
    {
      "bruker": "Per",
      "tekst": "Enig!",
      "dato": "2024-01-16"
    }
  ]
}
\`\`\`

Dette ville krevd 3 tabeller i SQL (Blogg, Forfatter, Kommentar).`,
    },
    {
      id: 'it2-5-4-theory-3',
      type: 'text',
      title: 'Nøkkel-verdi-lagring',
      content: `## Nøkkel-verdi-lagring

Den enkleste formen for NoSQL. Fungerer som en gigantisk Python-dictionary.

### Eksempel: Redis

\`\`\`python
# Lagre verdi
redis.set("bruker:1001:navn", "Ole Olsen")
redis.set("bruker:1001:poeng", 1500)

# Hente verdi
navn = redis.get("bruker:1001:navn")  # "Ole Olsen"
poeng = redis.get("bruker:1001:poeng")  # "1500"

# Lagre JSON som verdi
import json
bruker_data = json.dumps({"navn": "Kari", "alder": 25})
redis.set("bruker:1002", bruker_data)

# Utløpstid (TTL - Time To Live)
redis.setex("session:abc123", 3600, "user_id:1001")  # Utløper etter 1 time
\`\`\`

### Bruksområder:
- **Caching:** Lagre ofte brukte data midlertidig
- **Sessions:** Brukersessions i webapplikasjoner
- **Rate limiting:** Begrense antall forespørsler per bruker
- **Køer:** Midlertidig lagring av oppgaver

**Fordeler:**
- Ekstremt rask (ofte i RAM)
- Enkel å forstå og bruke
- Perfekt for midlertidig data

**Ulemper:**
- Ingen spørrespråk (bare GET/SET)
- Ingen relasjoner mellom data
- Begrenset til minne (RAM) for mange implementasjoner`,
    },
    {
      id: 'it2-5-4-theory-4',
      type: 'text',
      title: 'SQL vs. NoSQL – når bruke hva?',
      content: `## SQL vs. NoSQL – når bruke hva?

Det er ikke ett svar som passer alle. Velg basert på behov:

### Bruk SQL (relasjonsdatabaser) når:

✅ Dataene har klare relasjoner (kunder, ordrer, produkter)
✅ Du trenger ACID-garantier (bank, booking-systemer)
✅ Skjemaet er stabilt og velkjent på forhånd
✅ Du trenger komplekse spørringer med JOIN
✅ Dataintegritet er kritisk

**Eksempler:** Banksystemer, e-handel, HR-systemer

### Bruk NoSQL når:

✅ Du trenger ekstrem skalerbarhet (millioner av brukere)
✅ Dataene endrer struktur ofte
✅ Du har hierarkiske/nestede data (JSON-lignende)
✅ Du trenger høy ytelse på enkle operasjoner
✅ Du jobber med store mengder ustrukturerte data

**Eksempler:** Sosiale medier, sanntidsanalyse, IoT-data, logger

### Hybrid-løsninger

Mange systemer bruker **både** SQL og NoSQL:
- SQL for kritiske transaksjoner (ordrer, betalinger)
- NoSQL for produktkataloger og brukerprofiler
- Redis for caching av ofte brukte data

**Eksempel:**
\`\`\`
PostgreSQL (ordrer) + MongoDB (produkter) + Redis (sessions)
\`\`\``,
    },
    {
      id: 'it2-5-4-def-1',
      type: 'definition',
      title: 'Viktige begreper',
      content: `**NoSQL:** "Not Only SQL" – databaser som ikke følger relasjonsdatabasemodellen.

**Dokumentdatabase:** NoSQL-database som lagrer data som dokumenter (JSON/BSON).

**Collection:** Gruppe av dokumenter i MongoDB (tilsvarer tabell i SQL).

**Nøkkel-verdi-lagring:** Enkel database som mapper nøkler til verdier (som en dictionary).

**Skjemafrihet:** Mulighet til å endre datastruktur uten å definere fast skjema på forhånd.

**Horizontal skalering:** Spre data over mange servere for å håndtere større last.

**ACID:** Atomicity, Consistency, Isolation, Durability – garantier i relasjonsdatabaser.

**CAP-teoremet:** Du kan bare ha 2 av 3: Consistency, Availability, Partition tolerance.`,
    },
  ],
  exercises: [
    {
      id: 'it2-5-4-mc-1',
      type: 'multiple-choice',
      question: 'Hva er hovedfordelen med dokumentdatabaser som MongoDB?',
      options: [
        'De er alltid raskere enn SQL',
        'De kan lagre nestede strukturer og arrays direkte',
        'De har bedre sikkerhet enn SQL',
        'De krever mindre diskplass',
      ],
      correctAnswer: 1,
      explanation:
        'Dokumentdatabaser lar deg lagre komplekse, nestede strukturer (som objekter med arrays) direkte i ett dokument, uten å måtte dele opp i flere tabeller som i SQL.',
    },
    {
      id: 'it2-5-4-mc-2',
      type: 'multiple-choice',
      question: 'Når bør du velge SQL fremfor NoSQL?',
      options: [
        'Når du har nestede JSON-data',
        'Når du trenger ekstrem skalerbarhet',
        'Når du trenger komplekse relasjoner og ACID-garantier',
        'Når dataene endrer struktur ofte',
      ],
      correctAnswer: 2,
      explanation:
        'SQL (relasjonsdatabaser) er best når du har data med klare relasjoner, trenger komplekse spørringer med JOIN, og krever ACID-garantier for dataintegritet.',
    },
    {
      id: 'it2-5-4-classic-1',
      type: 'classic',
      question: `Sammenlikn hvordan en blogg med kommentarer ville bli lagret i:
a) En relasjonsdatabase (SQL)
b) En dokumentdatabase (MongoDB)

Tegn tabellstrukturer for SQL og dokumentstruktur for MongoDB.`,
      solution: `**a) SQL (relasjonsdatabase):**

\`\`\`sql
-- Tabell 1: Blogger
CREATE TABLE Blogg (
    bloggID INTEGER PRIMARY KEY,
    tittel TEXT NOT NULL,
    innhold TEXT,
    forfatterID INTEGER,
    publisert_dato TEXT,
    FOREIGN KEY (forfatterID) REFERENCES Bruker(brukerID)
);

-- Tabell 2: Brukere
CREATE TABLE Bruker (
    brukerID INTEGER PRIMARY KEY,
    navn TEXT NOT NULL,
    epost TEXT UNIQUE
);

-- Tabell 3: Kommentarer
CREATE TABLE Kommentar (
    kommentarID INTEGER PRIMARY KEY,
    bloggID INTEGER,
    brukerID INTEGER,
    tekst TEXT,
    dato TEXT,
    FOREIGN KEY (bloggID) REFERENCES Blogg(bloggID),
    FOREIGN KEY (brukerID) REFERENCES Bruker(brukerID)
);
\`\`\`

**Hente blogg med kommentarer:**
\`\`\`sql
SELECT
    Blogg.tittel,
    Blogg.innhold,
    Forfatter.navn AS forfatter,
    Kommentar.tekst AS kommentar,
    KommentarBruker.navn AS kommentator
FROM Blogg
INNER JOIN Bruker AS Forfatter ON Blogg.forfatterID = Forfatter.brukerID
LEFT JOIN Kommentar ON Blogg.bloggID = Kommentar.bloggID
LEFT JOIN Bruker AS KommentarBruker ON Kommentar.brukerID = KommentarBruker.brukerID
WHERE Blogg.bloggID = 1;
\`\`\`

**b) MongoDB (dokumentdatabase):**

\`\`\`json
{
  "_id": "507f1f77bcf86cd799439011",
  "tittel": "Min første bloggpost",
  "innhold": "Dette er innholdet i bloggen...",
  "forfatter": {
    "brukerID": 123,
    "navn": "Ole Olsen",
    "epost": "ole@example.com"
  },
  "publisert_dato": "2024-01-15T10:30:00Z",
  "kommentarer": [
    {
      "kommentarID": 1,
      "bruker": {
        "brukerID": 456,
        "navn": "Kari Hansen"
      },
      "tekst": "Flott bloggpost!",
      "dato": "2024-01-15T11:00:00Z"
    },
    {
      "kommentarID": 2,
      "bruker": {
        "brukerID": 789,
        "navn": "Per Larsen"
      },
      "tekst": "Enig, veldig bra!",
      "dato": "2024-01-15T12:30:00Z"
    }
  ],
  "tags": ["programmering", "tutorial"],
  "visninger": 523
}
\`\`\`

**Hente blogg med kommentarer:**
\`\`\`javascript
db.blogger.findOne({ _id: ObjectId("507f1f77bcf86cd799439011") })
\`\`\`

**Sammenligning:**

| Aspekt | SQL | MongoDB |
|--------|-----|---------|
| **Struktur** | 3 tabeller med relasjoner | 1 dokument |
| **Spørring** | JOIN over 3 tabeller | Én enkel findOne() |
| **Redundans** | Minimal (forfatter lagres én gang) | Noe (forfatterinfo kopieres) |
| **Fleksibilitet** | Fast skjema | Kan legge til felt (tags, visninger) når som helst |
| **Kompleksitet** | Høyere (må forstå JOIN) | Lavere (alt i ett dokument) |

**Konklusjon:**
- SQL er bedre hvis du ofte trenger å finne alle blogger av en forfatter
- MongoDB er bedre hvis du alltid henter komplett blogg med kommentarer`,
    },
    {
      id: 'it2-5-4-classic-2',
      type: 'classic',
      question: `Du skal designe en database for en e-handelsplattform. Systemet har:
- Produkter (navn, pris, kategori, bilder, beskrivelse, spesifikasjoner)
- Kunder (navn, adresse, epost, bestillingshistorikk)
- Ordrer (produkter, antall, totalpris, status)

Diskuter:
a) Hvilke deler ville du lagre i SQL?
b) Hvilke deler ville du lagre i NoSQL?
c) Begrunn valgene dine.`,
      solution: `**Anbefalt hybrid-arkitektur:**

### a) SQL (PostgreSQL/MySQL):

**Ordrer og transaksjoner:**
\`\`\`sql
-- Kritisk for dataintegritet
CREATE TABLE Kunde (
    kundeID INTEGER PRIMARY KEY,
    navn TEXT NOT NULL,
    epost TEXT UNIQUE NOT NULL,
    registrert_dato DATE
);

CREATE TABLE Ordre (
    ordreID INTEGER PRIMARY KEY,
    kundeID INTEGER NOT NULL,
    ordre_dato TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    totalpris DECIMAL(10,2),
    status TEXT CHECK (status IN ('ny', 'behandles', 'sendt', 'levert')),
    FOREIGN KEY (kundeID) REFERENCES Kunde(kundeID)
);

CREATE TABLE OrdreLinjer (
    ordreLinje ID INTEGER PRIMARY KEY,
    ordreID INTEGER NOT NULL,
    produktID TEXT NOT NULL,  -- Refererer til MongoDB-dokument
    antall INTEGER,
    pris DECIMAL(10,2),
    FOREIGN KEY (ordreID) REFERENCES Ordre(ordreID)
);
\`\`\`

**Hvorfor SQL for ordrer?**
- ACID-garantier kritisk (kan ikke miste bestillinger!)
- Komplekse spørringer: "Vis alle ordrer siste måned"
- Transaksjoner: Ordre + betaling må skje atomisk
- Relasjoner mellom kunde og ordrer

### b) NoSQL (MongoDB):

**Produktkatalog:**
\`\`\`json
{
  "_id": "PROD-12345",
  "navn": "iPhone 15 Pro",
  "pris": 13990,
  "kategori": ["Elektronikk", "Mobiltelefoner", "Apple"],
  "beskrivelse": "Apples nyeste flaggskip...",
  "spesifikasjoner": {
    "skjermstørrelse": "6.1 tommer",
    "lagring": "256GB",
    "farge": "Titan Blå",
    "kamera": {
      "hovedkamera": "48MP",
      "teleobjektiv": "12MP",
      "video": "4K60fps"
    }
  },
  "bilder": [
    "https://cdn.example.com/iphone15-front.jpg",
    "https://cdn.example.com/iphone15-back.jpg"
  ],
  "lager": 45,
  "anmeldelser": [
    {
      "bruker": "Ole",
      "rating": 5,
      "tekst": "Fantastisk telefon!",
      "dato": "2024-01-10"
    }
  ],
  "tilknyttede_produkter": ["PROD-12346", "PROD-12347"]
}
\`\`\`

**Hvorfor NoSQL for produkter?**
- Varierende struktur (laptop har andre specs enn sko)
- Nestede data (spesifikasjoner, anmeldelser)
- Endrer ofte (nye produktegenskaper)
- Rask lesing (ingen JOIN nødvendig)

**Kundepreferanser og sessjonsdata (Redis):**
\`\`\`python
# Handlekurv (midlertidig data)
redis.set("cart:user123", json.dumps({
    "items": ["PROD-12345", "PROD-67890"],
    "total": 15990
}), ex=3600)  # Utløper etter 1 time

# Nylig sette produkter
redis.lpush("recent:user123", "PROD-12345")
redis.ltrim("recent:user123", 0, 9)  # Behold bare siste 10
\`\`\`

### c) Begrunnelse:

**SQL for:**
✅ Ordrer – ACID-garantier, transaksjoner
✅ Kunde-informasjon – strukturert, stabile data
✅ Finansiell data – integritet kritisk

**MongoDB for:**
✅ Produktkatalog – varierende struktur, nestede data
✅ Produktanmeldelser – enkelt å legge til/fjerne
✅ CMS-innhold – fleksibelt

**Redis for:**
✅ Handlekurv – midlertidig, rask tilgang
✅ Sessions – utløper automatisk
✅ Cache – ofte brukte produkter

**Kommunikasjon mellom systemene:**
\`\`\`python
# Når en ordre opprettes:
def opprett_ordre(kunde_id, produkter):
    # 1. Hent produktinfo fra MongoDB
    produkt_detaljer = mongo_db.produkter.find({"_id": {"$in": produkter}})

    # 2. Opprett ordre i SQL med transaksjon
    conn = psycopg2.connect(...)
    cursor = conn.cursor()

    try:
        cursor.execute("BEGIN")
        # Sett inn ordre
        cursor.execute("INSERT INTO Ordre (kundeID, totalpris) VALUES (?, ?)", ...)
        ordre_id = cursor.lastrowid

        # Sett inn ordrelinjer
        for produkt in produkt_detaljer:
            cursor.execute("INSERT INTO OrdreLinjer (...) VALUES (...)", ...)

        cursor.execute("COMMIT")
    except:
        cursor.execute("ROLLBACK")
        raise

    # 3. Tøm handlekurv i Redis
    redis.delete(f"cart:user{kunde_id}")
\`\`\`

**Oppsummering:**
Bruk den rette databasen til rett jobb. SQL for kritiske transaksjoner, NoSQL for fleksible data, Redis for hastighet.`,
    },
    {
      id: 'it2-5-4-mc-3',
      type: 'multiple-choice',
      question: 'Hva er en vanlig bruk for Redis (nøkkel-verdi-database)?',
      options: [
        'Lagre komplekse relasjoner mellom brukere',
        'Kjøre komplekse SQL-spørringer',
        'Cache ofte brukte data for rask tilgang',
        'Erstatte alle SQL-databaser',
      ],
      correctAnswer: 2,
      explanation:
        'Redis brukes primært som cache og for midlertidig lagring (sessions, handlekurver) fordi den er ekstremt rask (lagrer i RAM) men enkel (bare GET/SET-operasjoner).',
    },
    {
      id: 'it2-5-4-classic-3',
      type: 'classic',
      question: `// --- Samleoppgaver ---

Du skal bygge et sosialt nettverk der brukere kan:
- Ha en profil med fleksibel informasjon (noen har hjemmeside, andre ikke)
- Poste meldinger (tekst, bilder, videoer)
- Følge andre brukere
- Like og kommentere på innlegg
- Se en feed med innlegg fra folk de følger

a) Design databasestruktur med både SQL og NoSQL
b) Beskriv hvilken data som skal i hvilken database
c) Skriv pseudokode for å hente "feed" (siste 50 innlegg fra folk jeg følger)
d) Diskuter skaleringsutfordringer og løsninger`,
      solution: `**a) Databasedesign:**

### SQL (PostgreSQL) – Relasjoner og integritet

\`\`\`sql
-- Brukere (grunnleggende info)
CREATE TABLE Bruker (
    brukerID SERIAL PRIMARY KEY,
    brukernavn TEXT UNIQUE NOT NULL,
    epost TEXT UNIQUE NOT NULL,
    passord_hash TEXT NOT NULL,
    opprettet_dato TIMESTAMP DEFAULT NOW()
);

-- Følger-relasjoner (kritisk for integritet)
CREATE TABLE Følger (
    følgerID INTEGER,
    følges_av INTEGER,
    dato TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (følgerID, følges_av),
    FOREIGN KEY (følgerID) REFERENCES Bruker(brukerID),
    FOREIGN KEY (følges_av) REFERENCES Bruker(brukerID),
    CHECK (følgerID != følges_av)  -- Kan ikke følge seg selv
);

-- Indeks for rask oppslag
CREATE INDEX idx_følger_følgerav ON Følger(følges_av);
CREATE INDEX idx_følger_følgerid ON Følger(følgerID);
\`\`\`

### MongoDB – Fleksible profiler og innhold

\`\`\`json
// Brukerprofiler (varierende struktur)
{
  "_id": "user_12345",
  "brukerID": 12345,  // Matcher SQL
  "brukernavn": "ole_tech",
  "visningsnavn": "Ole Hansen",
  "bio": "Tech enthusiast 💻",
  "profilbilde": "https://cdn.example.com/users/12345.jpg",
  "lenker": {
    "hjemmeside": "https://ole.dev",
    "github": "https://github.com/oledev",
    "linkedin": "https://linkedin.com/in/oledev"
  },
  "statistikk": {
    "følgere": 523,
    "følger": 234,
    "innlegg": 89
  },
  "preferanser": {
    "tema": "mørk",
    "språk": "no",
    "varsler": true
  }
}

// Innlegg (nestede kommentarer og likes)
{
  "_id": "post_67890",
  "brukerID": 12345,
  "brukernavn": "ole_tech",
  "type": "tekst",  // eller "bilde", "video"
  "innhold": {
    "tekst": "Min første post!",
    "media": []
  },
  "dato": ISODate("2024-01-15T10:30:00Z"),
  "likes": {
    "antall": 42,
    "brukere": [123, 456, 789]  // Kun for nylige likes
  },
  "kommentarer": [
    {
      "kommentarID": 1,
      "brukerID": 456,
      "brukernavn": "kari_dev",
      "tekst": "Bra innlegg!",
      "dato": ISODate("2024-01-15T11:00:00Z"),
      "likes": 5
    }
  ],
  "antall_kommentarer": 23,  // Total (kommentarer-array inneholder kun siste 10)
  "tags": ["tech", "programmering"],
  "synlighet": "offentlig"  // eller "privat", "venner"
}
\`\`\`

### Redis – Cache og sanntidsdata

\`\`\`
// Feed-cache (pre-beregnet)
feed:user12345 → [post_67890, post_67891, ...]  (Liste med post-IDer)

// Online-status
online:user12345 → "1"  (Utløper etter 5 min hvis ikke fornyet)

// Antall uleste varsler
notifications:user12345 → "7"

// Rate limiting
ratelimit:api:user12345 → "45"  (Utløper hver time)
\`\`\`

**b) Plassering av data:**

| Data | Database | Begrunnelse |
|------|----------|-------------|
| Brukernavn, epost, passord | SQL | Kritisk, må være unikt, ACID |
| Følger-relasjoner | SQL | JOIN-spørringer, integritet |
| Brukerprofiler | MongoDB | Varierende felt, nestede data |
| Innlegg | MongoDB | Fleksibel struktur, nestede kommentarer |
| Feed-cache | Redis | Ofte lest, midlertidig |
| Online-status | Redis | Sanntidsdata, utløper |

**c) Pseudokode for feed:**

\`\`\`python
import redis
import pymongo
import psycopg2

def hent_feed(bruker_id, antall=50):
    """
    Hent feed (siste innlegg fra folk brukeren følger)
    """
    # 1. Sjekk Redis-cache først
    cache_key = f"feed:user{bruker_id}"
    cached_posts = redis.lrange(cache_key, 0, antall - 1)

    if cached_posts:
        # Cache hit! Hent full info fra MongoDB
        post_ids = [post_id.decode() for post_id in cached_posts]
        posts = mongo_db.innlegg.find({"_id": {"$in": post_ids}})
        return list(posts)

    # 2. Cache miss – bygg feed fra scratch
    # Hent liste over folk brukeren følger (SQL)
    conn = psycopg2.connect(...)
    cursor = conn.cursor()
    cursor.execute("""
        SELECT følgerID
        FROM Følger
        WHERE følges_av = %s
    """, (bruker_id,))
    følger_ids = [row[0] for row in cursor.fetchall()]

    # 3. Hent innlegg fra disse brukerne (MongoDB)
    posts = mongo_db.innlegg.find({
        "brukerID": {"$in": følger_ids},
        "synlighet": "offentlig"
    }).sort("dato", -1).limit(antall)

    posts_list = list(posts)

    # 4. Lagre i cache (Redis) for neste gang
    post_ids = [str(post["_id"]) for post in posts_list]
    if post_ids:
        redis.lpush(cache_key, *post_ids)
        redis.expire(cache_key, 300)  # Cache i 5 minutter

    return posts_list

# Når et nytt innlegg publiseres:
def publiser_innlegg(bruker_id, innhold):
    # 1. Lagre innlegg i MongoDB
    post_id = mongo_db.innlegg.insert_one({
        "brukerID": bruker_id,
        "innhold": innhold,
        "dato": datetime.now(),
        "likes": {"antall": 0, "brukere": []},
        "kommentarer": []
    }).inserted_id

    # 2. Invalider cache for alle følgere
    cursor.execute("""
        SELECT følges_av
        FROM Følger
        WHERE følgerID = %s
    """, (bruker_id,))

    for (følger_id,) in cursor.fetchall():
        redis.delete(f"feed:user{følger_id}")

    return post_id
\`\`\`

**d) Skaleringsutfordringer og løsninger:**

### Utfordring 1: Feed-generering blir treg

**Problem:**
- Bruker med 10 000 følgere → må sjekke innlegg fra 10 000 brukere

**Løsning: Fan-out on write**
\`\`\`python
# Når Ole publiserer:
# 1. Finn alle Oles følgere (SQL)
# 2. Legg innlegg-ID i hver følgers pre-beregnet feed (Redis)

def publiser_innlegg_fanout(bruker_id, innhold):
    post_id = mongo_db.innlegg.insert_one({...}).inserted_id

    # Hent følgere
    cursor.execute("SELECT følges_av FROM Følger WHERE følgerID = %s", (bruker_id,))

    # Legg til i hver følgers feed
    for (følger_id,) in cursor.fetchall():
        redis.lpush(f"feed:user{følger_id}", str(post_id))
        redis.ltrim(f"feed:user{følger_id}", 0, 999)  # Behold kun 1000 siste
\`\`\`

**Trade-off:** Raskere lesing, tregere skriving (OK for sosiale medier)

### Utfordring 2: Databasen blir for stor

**Løsning: Sharding**
\`\`\`
Shard 1: Brukere med ID 0-999999
Shard 2: Brukere med ID 1000000-1999999
...
\`\`\`

**MongoDB auto-sharding:**
\`\`\`javascript
// Shard på brukerID
sh.shardCollection("sosialnettverk.innlegg", { "brukerID": 1 })
\`\`\`

### Utfordring 3: Mange samtidige brukere

**Løsning: Read replicas + Load balancing**
\`\`\`
Master (SQL) → Skriving
  ↓ Replikering
Slave 1, 2, 3 → Lesing (feeder)
\`\`\`

### Utfordring 4: Hot spots (populære brukere)

**Problem:** Cristiano Ronaldo publiserer → 500M følgere skal få innlegget

**Løsning: Hybrid approach**
\`\`\`python
def publiser_innlegg_hybrid(bruker_id, innhold):
    følgere_antall = få_antall_følgere(bruker_id)

    if følgere_antall < 10000:
        # Fan-out (pre-beregn feed)
        publiser_innlegg_fanout(bruker_id, innhold)
    else:
        # Pull-basert (generer feed on-the-fly)
        # Bare lagre innlegget, ikke push til følgere
        mongo_db.innlegg.insert_one({...})
\`\`\`

**Oppsummering:**
Et moderne sosialt nettverk krever:
- SQL for kritiske relasjoner
- MongoDB for fleksibelt innhold
- Redis for ytelse
- Smart caching-strategi
- Sharding for skalering`,
    },
  ],
  keyTerms: [
    'NoSQL',
    'Dokumentdatabase',
    'Nøkkel-verdi-lagring',
    'MongoDB',
    'Redis',
    'Skjemafrihet',
    'Horizontal skalering',
    'CAP-teoremet',
  ],
  estimatedMinutes: 55,
  prevChapter: 'it-2-5-3',
  nextChapter: 'it-2-5-5',
};

// ============================================================
// KAPITTEL 5.5: Datamodellering for komplekse systemer
// ============================================================

export const CHAPTER_IT_2_5_5: TextbookChapter = {
  id: 'it-2-5-5',
  courseId: 'it-2',
  title: 'Datamodellering for komplekse systemer',
  description:
    'Mange-til-mange-relasjoner, koblingstabeller og prosjektbasert modellering',
  sections: [
    {
      id: 'it2-5-5-intro',
      type: 'text',
      title: 'Introduksjon',
      content: `# Datamodellering for komplekse systemer

Nå som du kan SQL, NoSQL og databasedesign, er det på tide å tackle virkelige utfordringer: komplekse systemer med mange entiteter, relasjoner og forretningsregler.

I dette kapittelet lærer du:
- Designe mange-til-mange-relasjoner med koblingstabeller
- Håndtere komplekse forretningsregler i databasen
- Modellere hierarkier og rekursive relasjoner
- Beste praksis for databasedesign i store prosjekter`,
    },
    {
      id: 'it2-5-5-theory-1',
      type: 'text',
      title: 'Mange-til-mange-relasjoner',
      content: `## Mange-til-mange-relasjoner

En **mange-til-mange (M:N)** relasjon eksisterer når:
- Én A kan være relatert til mange B
- Én B kan være relatert til mange A

**Eksempler:**
- Studenter ↔ Kurs (én student tar flere kurs, ett kurs har flere studenter)
- Forfattere ↔ Bøker (én forfatter skriver flere bøker, én bok kan ha flere forfattere)
- Skuespillere ↔ Filmer

### Problem: Kan ikke modelleres direkte

Dette fungerer IKKE:
\`\`\`sql
-- FEIL! En student kan ikke ha flere kurs i én kolonne
CREATE TABLE Student (
    studentID INTEGER PRIMARY KEY,
    navn TEXT,
    kursID INTEGER  -- Hva hvis studenten tar 5 kurs?
);
\`\`\`

### Løsning: Koblinger (junction table / associative entity)

\`\`\`sql
-- Studenter
CREATE TABLE Student (
    studentID INTEGER PRIMARY KEY,
    navn TEXT NOT NULL,
    epost TEXT UNIQUE
);

-- Kurs
CREATE TABLE Kurs (
    kursID INTEGER PRIMARY KEY,
    kursnavn TEXT NOT NULL,
    studiepoeng INTEGER
);

-- Koblinger (én rad per student-kurs-par)
CREATE TABLE StudentKurs (
    studentID INTEGER,
    kursID INTEGER,
    registrert_dato DATE,
    karakter INTEGER,
    PRIMARY KEY (studentID, kursID),
    FOREIGN KEY (studentID) REFERENCES Student(studentID),
    FOREIGN KEY (kursID) REFERENCES Kurs(kursID)
);
\`\`\`

**Fordeler:**
- Kan legge til ekstra info (registrert_dato, karakter)
- Kan enkelt finne alle kurs for en student
- Kan enkelt finne alle studenter i et kurs`,
    },
    {
      id: 'it2-5-5-ex-1',
      type: 'text',
      title: 'Eksempel: Spørringer med koblingstabeller',
      content: `## Eksempel: Spørringer med koblingstabeller

Gitt tabellene Student, Kurs og StudentKurs:

**Finn alle kurs for student med ID 1:**
\`\`\`sql
SELECT Kurs.kursnavn, StudentKurs.karakter
FROM StudentKurs
INNER JOIN Kurs ON StudentKurs.kursID = Kurs.kursID
WHERE StudentKurs.studentID = 1;
\`\`\`

**Finn alle studenter i kurset "IT2":**
\`\`\`sql
SELECT Student.navn, StudentKurs.registrert_dato
FROM StudentKurs
INNER JOIN Student ON StudentKurs.studentID = Student.studentID
INNER JOIN Kurs ON StudentKurs.kursID = Kurs.kursID
WHERE Kurs.kursnavn = 'IT2';
\`\`\`

**Finn studenter som IKKE tar noen kurs:**
\`\`\`sql
SELECT Student.navn
FROM Student
LEFT JOIN StudentKurs ON Student.studentID = StudentKurs.studentID
WHERE StudentKurs.kursID IS NULL;
\`\`\`

**Finn antall studenter per kurs:**
\`\`\`sql
SELECT Kurs.kursnavn, COUNT(StudentKurs.studentID) AS antall_studenter
FROM Kurs
LEFT JOIN StudentKurs ON Kurs.kursID = StudentKurs.kursID
GROUP BY Kurs.kursID, Kurs.kursnavn
ORDER BY antall_studenter DESC;
\`\`\``,
    },
    {
      id: 'it2-5-5-theory-2',
      type: 'text',
      title: 'Hierarkier og rekursive relasjoner',
      content: `## Hierarkier og rekursive relasjoner

Noen ganger må en entitet referere til seg selv.

### Eksempel 1: Organisasjonshierarki

\`\`\`sql
CREATE TABLE Ansatt (
    ansattID INTEGER PRIMARY KEY,
    navn TEXT NOT NULL,
    stillingstittel TEXT,
    lederID INTEGER,  -- Refererer til en annen ansatt
    FOREIGN KEY (lederID) REFERENCES Ansatt(ansattID)
);

-- Testdata
INSERT INTO Ansatt VALUES (1, 'CEO', 'Daglig leder', NULL);
INSERT INTO Ansatt VALUES (2, 'CTO', 'Teknologisjef', 1);
INSERT INTO Ansatt VALUES (3, 'Utvikler', 'Senior utvikler', 2);
INSERT INTO Ansatt VALUES (4, 'Utvikler', 'Junior utvikler', 2);
\`\`\`

**Finn alle ansatte under en leder:**
\`\`\`sql
SELECT Medarbeider.navn, Medarbeider.stillingstittel
FROM Ansatt AS Medarbeider
WHERE Medarbeider.lederID = 2;
\`\`\`

**Finn ansatt med deres leders navn:**
\`\`\`sql
SELECT
    Ansatt.navn AS ansatt,
    Leder.navn AS leder
FROM Ansatt
LEFT JOIN Ansatt AS Leder ON Ansatt.lederID = Leder.ansattID;
\`\`\`

### Eksempel 2: Kommentarer med svar

\`\`\`sql
CREATE TABLE Kommentar (
    kommentarID INTEGER PRIMARY KEY,
    brukerID INTEGER,
    innhold TEXT,
    svar_på INTEGER,  -- NULL hvis toppnivå, ellers ID til parent-kommentar
    dato TIMESTAMP,
    FOREIGN KEY (svar_på) REFERENCES Kommentar(kommentarID)
);
\`\`\`

**Utfordring:** SQL er ikke bra på å hente hele trær (alle svar til svar til svar...). Løsning: Hent i Python/JavaScript og bygg tre der.`,
    },
    {
      id: 'it2-5-5-theory-3',
      type: 'text',
      title: 'Forretningsregler i databasen',
      content: `## Forretningsregler i databasen

Databasen kan håndheve regler via **constraints** og **triggers**.

### CHECK constraints

\`\`\`sql
CREATE TABLE Produkt (
    produktID INTEGER PRIMARY KEY,
    navn TEXT NOT NULL,
    pris DECIMAL(10,2) CHECK (pris >= 0),
    antall INTEGER CHECK (antall >= 0),
    rabatt_prosent INTEGER CHECK (rabatt_prosent BETWEEN 0 AND 100)
);
\`\`\`

### UNIQUE constraints

\`\`\`sql
CREATE TABLE Bruker (
    brukerID INTEGER PRIMARY KEY,
    brukernavn TEXT UNIQUE NOT NULL,  -- Må være unik
    epost TEXT UNIQUE NOT NULL,
    UNIQUE (fornavn, etternavn, fødselsdato)  -- Kombinasjon må være unik
);
\`\`\`

### DEFAULT-verdier

\`\`\`sql
CREATE TABLE Ordre (
    ordreID INTEGER PRIMARY KEY,
    kundeID INTEGER,
    ordre_dato TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status TEXT DEFAULT 'ny',
    totalpris DECIMAL(10,2) DEFAULT 0.00
);
\`\`\`

### Triggers (avansert)

Triggers er kode som kjøres automatisk ved INSERT/UPDATE/DELETE.

\`\`\`sql
-- Automatisk oppdater produktlager ved salg
CREATE TRIGGER oppdater_lager
AFTER INSERT ON OrdreLinjer
FOR EACH ROW
BEGIN
    UPDATE Produkt
    SET antall = antall - NEW.antall
    WHERE produktID = NEW.produktID;
END;
\`\`\`

**Advarsel:** Triggers kan gjøre databasen vanskelig å debugge. Bruk med forsiktighet!`,
    },
    {
      id: 'it2-5-5-theory-4',
      type: 'text',
      title: 'Beste praksis for databasedesign',
      content: `## Beste praksis for databasedesign

### 1. Start med ER-diagram

Før du skriver én linje SQL:
- Identifiser entiteter
- Tegn relasjoner
- Normaliser til 3NF
- Diskuter med teamet

### 2. Navngivningskonvensjoner

**Tabeller:**
- Entall eller flertall? Velg én standard (jeg anbefaler entall)
- PascalCase eller snake_case? (Anbefaler snake_case for SQL)

**Kolonner:**
- Bruk beskrivende navn: \`registrert_dato\` > \`reg_dat\`
- Primærnøkkel: \`{tabellnavn}ID\` (f.eks. \`brukerID\`)
- Fremmednøkler: samme navn som i referert tabell

**Eksempel:**
\`\`\`sql
-- Godt
CREATE TABLE ordre (
    ordre_id INTEGER PRIMARY KEY,
    kunde_id INTEGER,
    ordre_dato DATE,
    FOREIGN KEY (kunde_id) REFERENCES kunde(kunde_id)
);

-- Dårlig
CREATE TABLE Orders (
    ID INTEGER PRIMARY KEY,
    CustID INTEGER,
    dt DATE
);
\`\`\`

### 3. Indekser strategisk

\`\`\`sql
-- Primærnøkler får automatisk indeks
-- Legg til indeks på fremmednøkler
CREATE INDEX idx_ordre_kunde ON ordre(kunde_id);

-- Indeks på kolonner brukt i WHERE/JOIN
CREATE INDEX idx_ordre_dato ON ordre(ordre_dato);

-- Sammensatte indekser for vanlige spørringer
CREATE INDEX idx_ordre_kunde_dato ON ordre(kunde_id, ordre_dato);
\`\`\`

### 4. Dokumentasjon

\`\`\`sql
-- Bruk kommentarer
CREATE TABLE kunde (
    kunde_id INTEGER PRIMARY KEY,
    -- Fullt navn (ikke splitt i fornavn/etternavn enda)
    navn TEXT NOT NULL,
    -- ISO 3166-1 alpha-2 landskode
    land TEXT DEFAULT 'NO'
);
\`\`\`

### 5. Migrasjonsstrategi

Aldri endre databaseskjema direkte i produksjon!

**Bruk migrasjoner:**
\`\`\`sql
-- migrations/001_initial_schema.sql
CREATE TABLE bruker (...);

-- migrations/002_add_email_verification.sql
ALTER TABLE bruker ADD COLUMN epost_verifisert BOOLEAN DEFAULT FALSE;

-- migrations/003_add_user_preferences.sql
CREATE TABLE bruker_preferanser (...);
\`\`\`

### 6. Sikkerhet

- Bruk parameteriserte spørringer (aldri string concatenation)
- Minste privilegium: Applikasjonen trenger ikke DROP TABLE
- Krypter sensitive data (passord, personnummer)
- Logg tilgang til sensitiv data`,
    },
    {
      id: 'it2-5-5-def-1',
      type: 'definition',
      title: 'Viktige begreper',
      content: `**Koblinger (Junction Table):** Tabell som implementerer mange-til-mange-relasjoner.

**Assosiativ entitet:** Kobling som også har egne attributter (f.eks. StudentKurs har karakter).

**Rekursiv relasjon:** En tabell som refererer til seg selv (f.eks. ansatt → leder).

**Hierarki:** Tre-struktur lagret i database (organisasjon, kategorier, kommentarer).

**Constraint:** Regel som databasen håndhever (CHECK, UNIQUE, NOT NULL, FOREIGN KEY).

**Trigger:** Kode som kjøres automatisk ved databasehendelser.

**Migrering:** Versionert endring av databaseskjema.

**Dataintegritet:** Sikre at data er konsistent og korrekt gjennom constraints og relasjoner.`,
    },
  ],
  exercises: [
    {
      id: 'it2-5-5-mc-1',
      type: 'multiple-choice',
      question: 'Hvordan implementerer man mange-til-mange-relasjoner i SQL?',
      options: [
        'Med en kolonne som inneholder en kommaseparert liste',
        'Med en koblinger (junction table) som har fremmednøkler til begge tabeller',
        'Med to separate en-til-mange-relasjoner',
        'Det er ikke mulig i SQL',
      ],
      correctAnswer: 1,
      explanation:
        'Mange-til-mange-relasjoner implementeres med en koblinger som har sammensatt primærnøkkel bestående av fremmednøkler til begge tabellene.',
    },
    {
      id: 'it2-5-5-mc-2',
      type: 'multiple-choice',
      question:
        'Hva er fordelen med å legge ekstra attributter i en koblinger?',
      options: [
        'Det gjør databasen tregere',
        'Det bryter normalformene',
        'Det lar deg lagre info spesifikk for relasjonen (f.eks. dato, karakter)',
        'Det er alltid dårlig praksis',
      ],
      correctAnswer: 2,
      explanation:
        'Koblingstabeller kan ha ekstra kolonner for å lagre informasjon om relasjonen selv, f.eks. når en student registrerte seg for et kurs eller hvilken karakter de fikk.',
    },
    {
      id: 'it2-5-5-classic-1',
      type: 'classic',
      question: `Design en database for et bibliotek hvor:
- Bøker kan ha flere forfattere
- Forfattere kan ha skrevet flere bøker
- Bøker kan være del av flere kategorier
- Medlemmer kan låne flere bøker samtidig
- Samme bok (flere eksemplarer) kan lånes ut til forskjellige medlemmer

a) Identifiser alle entiteter
b) Tegn ER-diagram eller beskriv relasjoner
c) Skriv SQL for å opprette alle tabeller
d) Skriv SQL for å finne alle bøker lånt av medlem med ID 5`,
      solution: `**a) Entiteter:**

1. Bok (bokID, tittel, ISBN, utgivelsesår)
2. Forfatter (forfatterID, navn, fødeland)
3. Kategori (kategoriID, kategorinavn)
4. Medlem (medlemsID, navn, epost, telefon)
5. Eksemplar (eksemplarID, bokID, status)
6. Utlån (utlånID, eksemplarID, medlemsID, utlånsdato, innleveringsfrist, innlevert_dato)
7. BokForfatter (koblinger mellom Bok og Forfatter)
8. BokKategori (koblinger mellom Bok og Kategori)

**b) Relasjoner:**

- Bok ↔ Forfatter: **M:N** (via BokForfatter)
- Bok ↔ Kategori: **M:N** (via BokKategori)
- Bok → Eksemplar: **1:N** (én bok kan ha flere fysiske eksemplarer)
- Eksemplar → Utlån: **1:N** (ett eksemplar kan lånes ut flere ganger, men én gang om gangen)
- Medlem → Utlån: **1:N** (ett medlem kan ha flere aktive utlån)

**c) SQL:**

\`\`\`sql
-- Grunnleggende entiteter
CREATE TABLE Bok (
    bokID INTEGER PRIMARY KEY,
    tittel TEXT NOT NULL,
    ISBN TEXT UNIQUE,
    utgivelsesår INTEGER
);

CREATE TABLE Forfatter (
    forfatterID INTEGER PRIMARY KEY,
    navn TEXT NOT NULL,
    fødeland TEXT
);

CREATE TABLE Kategori (
    kategoriID INTEGER PRIMARY KEY,
    kategorinavn TEXT UNIQUE NOT NULL
);

CREATE TABLE Medlem (
    medlemsID INTEGER PRIMARY KEY,
    navn TEXT NOT NULL,
    epost TEXT UNIQUE,
    telefon TEXT,
    registrert_dato DATE DEFAULT CURRENT_DATE
);

-- Fysiske eksemplarer
CREATE TABLE Eksemplar (
    eksemplarID INTEGER PRIMARY KEY,
    bokID INTEGER NOT NULL,
    status TEXT DEFAULT 'tilgjengelig' CHECK (status IN ('tilgjengelig', 'utlånt', 'skadet', 'tapt')),
    hylleplass TEXT,
    FOREIGN KEY (bokID) REFERENCES Bok(bokID)
);

-- Utlån
CREATE TABLE Utlån (
    utlånID INTEGER PRIMARY KEY,
    eksemplarID INTEGER NOT NULL,
    medlemsID INTEGER NOT NULL,
    utlånsdato DATE DEFAULT CURRENT_DATE,
    innleveringsfrist DATE NOT NULL,
    innlevert_dato DATE,
    FOREIGN KEY (eksemplarID) REFERENCES Eksemplar(eksemplarID),
    FOREIGN KEY (medlemsID) REFERENCES Medlem(medlemsID)
);

-- Koblingstabeller for mange-til-mange
CREATE TABLE BokForfatter (
    bokID INTEGER,
    forfatterID INTEGER,
    rekkefølge INTEGER,  -- Hovedforfatter = 1, medforfatter = 2, etc.
    PRIMARY KEY (bokID, forfatterID),
    FOREIGN KEY (bokID) REFERENCES Bok(bokID),
    FOREIGN KEY (forfatterID) REFERENCES Forfatter(forfatterID)
);

CREATE TABLE BokKategori (
    bokID INTEGER,
    kategoriID INTEGER,
    PRIMARY KEY (bokID, kategoriID),
    FOREIGN KEY (bokID) REFERENCES Bok(bokID),
    FOREIGN KEY (kategoriID) REFERENCES Kategori(kategoriID)
);

-- Indekser for ytelse
CREATE INDEX idx_eksemplar_bok ON Eksemplar(bokID);
CREATE INDEX idx_utlån_medlem ON Utlån(medlemsID);
CREATE INDEX idx_utlån_eksemplar ON Utlån(eksemplarID);
\`\`\`

**d) Finn alle bøker lånt av medlem 5:**

\`\`\`sql
SELECT
    Bok.tittel,
    Bok.ISBN,
    Utlån.utlånsdato,
    Utlån.innleveringsfrist,
    CASE
        WHEN Utlån.innlevert_dato IS NOT NULL THEN 'Innlevert'
        WHEN Utlån.innleveringsfrist < DATE('now') THEN 'Forfalt'
        ELSE 'Aktiv'
    END AS status
FROM Utlån
INNER JOIN Eksemplar ON Utlån.eksemplarID = Eksemplar.eksemplarID
INNER JOIN Bok ON Eksemplar.bokID = Bok.bokID
WHERE Utlån.medlemsID = 5
ORDER BY Utlån.utlånsdato DESC;
\`\`\`

**Bonus: Finn tilgjengelige eksemplarer av en bok:**

\`\`\`sql
SELECT Eksemplar.eksemplarID, Eksemplar.hylleplass
FROM Eksemplar
WHERE Eksemplar.bokID = 10
  AND Eksemplar.status = 'tilgjengelig'
  AND Eksemplar.eksemplarID NOT IN (
      SELECT eksemplarID
      FROM Utlån
      WHERE innlevert_dato IS NULL  -- Ikke innlevert = utlånt nå
  );
\`\`\``,
    },
    {
      id: 'it2-5-5-classic-2',
      type: 'classic',
      question: `Design en database for en restaurant med online-bestilling:

Krav:
- Meny med retter (navn, pris, kategori, allergener)
- Retter har ingredienser (en rett kan ha mange, en ingrediens brukes i mange retter)
- Kunder kan bestille flere retter i én ordre
- Ordre har leveringsadresse og status
- Støtte for varianter (f.eks. "Pizza Margherita" i "Liten", "Stor", "Familie")

a) Design alle tabeller med PRIMARY KEY og FOREIGN KEY
b) Skriv SQL for å finne alle retter som inneholder "melk" (allergen)
c) Skriv SQL for å beregne totalpris for ordre 42`,
      solution: `**a) Tabelldesign:**

\`\`\`sql
-- Grunnleggende entiteter
CREATE TABLE Kunde (
    kundeID INTEGER PRIMARY KEY,
    navn TEXT NOT NULL,
    epost TEXT UNIQUE,
    telefon TEXT,
    registrert_dato DATE DEFAULT CURRENT_DATE
);

CREATE TABLE Adresse (
    adresseID INTEGER PRIMARY KEY,
    kundeID INTEGER,
    gate TEXT NOT NULL,
    postnummer TEXT NOT NULL,
    by TEXT NOT NULL,
    standard BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (kundeID) REFERENCES Kunde(kundeID)
);

CREATE TABLE Rett (
    rettID INTEGER PRIMARY KEY,
    navn TEXT NOT NULL,
    beskrivelse TEXT,
    kategori TEXT CHECK (kategori IN ('forrett', 'hovedrett', 'dessert', 'drikke')),
    bilde_url TEXT
);

-- Varianter av retter (samme rett, forskjellige størrelser/priser)
CREATE TABLE RettVariant (
    variantID INTEGER PRIMARY KEY,
    rettID INTEGER NOT NULL,
    størrelse TEXT,  -- "Liten", "Stor", "Familie"
    pris DECIMAL(10,2) NOT NULL CHECK (pris >= 0),
    FOREIGN KEY (rettID) REFERENCES Rett(rettID)
);

CREATE TABLE Ingrediens (
    ingrediensID INTEGER PRIMARY KEY,
    navn TEXT UNIQUE NOT NULL
);

CREATE TABLE Allergen (
    allergenID INTEGER PRIMARY KEY,
    navn TEXT UNIQUE NOT NULL  -- "melk", "gluten", "nøtter", etc.
);

-- Mange-til-mange: Rett ↔ Ingrediens
CREATE TABLE RettIngrediens (
    rettID INTEGER,
    ingrediensID INTEGER,
    mengde TEXT,  -- "200g", "2 stk", etc.
    PRIMARY KEY (rettID, ingrediensID),
    FOREIGN KEY (rettID) REFERENCES Rett(rettID),
    FOREIGN KEY (ingrediensID) REFERENCES Ingrediens(ingrediensID)
);

-- Mange-til-mange: Ingrediens ↔ Allergen
CREATE TABLE IngrediensAllergen (
    ingrediensID INTEGER,
    allergenID INTEGER,
    PRIMARY KEY (ingrediensID, allergenID),
    FOREIGN KEY (ingrediensID) REFERENCES Ingrediens(ingrediensID),
    FOREIGN KEY (allergenID) REFERENCES Allergen(allergenID)
);

-- Ordrer
CREATE TABLE Ordre (
    ordreID INTEGER PRIMARY KEY,
    kundeID INTEGER NOT NULL,
    adresseID INTEGER NOT NULL,
    ordre_tidspunkt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status TEXT DEFAULT 'ny' CHECK (status IN ('ny', 'bekreftet', 'lages', 'ute_for_levering', 'levert', 'kansellert')),
    totalpris DECIMAL(10,2),
    FOREIGN KEY (kundeID) REFERENCES Kunde(kundeID),
    FOREIGN KEY (adresseID) REFERENCES Adresse(adresseID)
);

-- Ordrelinjer (hvilke retter i hver ordre)
CREATE TABLE OrdreLinje (
    ordreLinjeID INTEGER PRIMARY KEY,
    ordreID INTEGER NOT NULL,
    variantID INTEGER NOT NULL,
    antall INTEGER NOT NULL CHECK (antall > 0),
    pris DECIMAL(10,2) NOT NULL,  -- Pris på bestillingstidspunkt (kan endre senere)
    spesielle_ønsker TEXT,  -- "Uten løk", "Ekstra ost", etc.
    FOREIGN KEY (ordreID) REFERENCES Ordre(ordreID),
    FOREIGN KEY (variantID) REFERENCES RettVariant(variantID)
);

-- Indekser
CREATE INDEX idx_ordre_kunde ON Ordre(kundeID);
CREATE INDEX idx_ordrelinje_ordre ON OrdreLinje(ordreID);
CREATE INDEX idx_rettvariant_rett ON RettVariant(rettID);
\`\`\`

**b) Finn alle retter som inneholder "melk":**

\`\`\`sql
SELECT DISTINCT Rett.rettID, Rett.navn, Rett.beskrivelse
FROM Rett
INNER JOIN RettIngrediens ON Rett.rettID = RettIngrediens.rettID
INNER JOIN Ingrediens ON RettIngrediens.ingrediensID = Ingrediens.ingrediensID
INNER JOIN IngrediensAllergen ON Ingrediens.ingrediensID = IngrediensAllergen.ingrediensID
INNER JOIN Allergen ON IngrediensAllergen.allergenID = Allergen.allergenID
WHERE LOWER(Allergen.navn) = 'melk'
ORDER BY Rett.navn;
\`\`\`

**Alternativ: Finn retter UTEN melk (allergivennlig):**

\`\`\`sql
SELECT Rett.rettID, Rett.navn
FROM Rett
WHERE Rett.rettID NOT IN (
    SELECT DISTINCT RettIngrediens.rettID
    FROM RettIngrediens
    INNER JOIN IngrediensAllergen ON RettIngrediens.ingrediensID = IngrediensAllergen.ingrediensID
    INNER JOIN Allergen ON IngrediensAllergen.allergenID = Allergen.allergenID
    WHERE LOWER(Allergen.navn) = 'melk'
);
\`\`\`

**c) Beregn totalpris for ordre 42:**

\`\`\`sql
SELECT
    Ordre.ordreID,
    SUM(OrdreLinje.pris * OrdreLinje.antall) AS totalpris
FROM Ordre
INNER JOIN OrdreLinje ON Ordre.ordreID = OrdreLinje.ordreID
WHERE Ordre.ordreID = 42
GROUP BY Ordre.ordreID;
\`\`\`

**Oppdater totalpris i Ordre-tabellen:**

\`\`\`sql
UPDATE Ordre
SET totalpris = (
    SELECT SUM(OrdreLinje.pris * OrdreLinje.antall)
    FROM OrdreLinje
    WHERE OrdreLinje.ordreID = Ordre.ordreID
)
WHERE ordreID = 42;
\`\`\`

**Bonus: Finn mest populære retter (flest bestillinger):**

\`\`\`sql
SELECT
    Rett.navn,
    COUNT(OrdreLinje.ordreLinjeID) AS antall_bestillinger,
    SUM(OrdreLinje.antall) AS totalt_antall
FROM Rett
INNER JOIN RettVariant ON Rett.rettID = RettVariant.rettID
INNER JOIN OrdreLinje ON RettVariant.variantID = OrdreLinje.variantID
GROUP BY Rett.rettID, Rett.navn
ORDER BY totalt_antall DESC
LIMIT 10;
\`\`\``,
    },
    {
      id: 'it2-5-5-classic-3',
      type: 'classic',
      question: `// --- Samleoppgaver ---

Du skal designe en komplett database for en musikkstrømmetjeneste (à la Spotify):

**Funksjonalitet:**
- Artister har album, album har sanger
- Sanger kan være del av flere spillelister
- Brukere lager spillelister
- Brukere følger artister
- Brukere liker sanger
- Sanger har genre(r)
- Loggføre hver gang en sang spilles (for statistikk)

**Oppgaver:**
a) Design alle tabeller (minst 10 tabeller)
b) Skriv SQL for å finne:
   - De 10 mest streamede sangene siste måned
   - Alle sanger i spilleliste "Treningslåter"
   - Anbefalte artister (artister som ligner de brukeren følger)
c) Diskuter ytelsesoptimalisering (indekser, caching)
d) Beskriv hvordan du ville brukt NoSQL i tillegg til SQL`,
      solution: `Dette er en omfattende oppgave! La oss bygge en profesjonell løsning.

**a) Komplett databasedesign:**

\`\`\`sql
-- ============================================================
-- BRUKERE
-- ============================================================

CREATE TABLE Bruker (
    brukerID INTEGER PRIMARY KEY,
    brukernavn TEXT UNIQUE NOT NULL,
    epost TEXT UNIQUE NOT NULL,
    passord_hash TEXT NOT NULL,
    abonnement TEXT DEFAULT 'gratis' CHECK (abonnement IN ('gratis', 'premium', 'familie')),
    registrert_dato DATE DEFAULT CURRENT_DATE
);

-- ============================================================
-- MUSIKK-ENTITETER
-- ============================================================

CREATE TABLE Artist (
    artistID INTEGER PRIMARY KEY,
    navn TEXT UNIQUE NOT NULL,
    bio TEXT,
    bilde_url TEXT,
    verifisert BOOLEAN DEFAULT FALSE,
    månedlige_lyttere INTEGER DEFAULT 0
);

CREATE TABLE Album (
    albumID INTEGER PRIMARY KEY,
    tittel TEXT NOT NULL,
    artistID INTEGER NOT NULL,
    utgivelsesdato DATE,
    cover_url TEXT,
    FOREIGN KEY (artistID) REFERENCES Artist(artistID)
);

CREATE TABLE Sang (
    sangID INTEGER PRIMARY KEY,
    tittel TEXT NOT NULL,
    albumID INTEGER,
    artistID INTEGER NOT NULL,
    varighet_sekunder INTEGER NOT NULL,
    fil_url TEXT NOT NULL,
    utgivelsesdato DATE,
    eksplisitt BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (albumID) REFERENCES Album(albumID),
    FOREIGN KEY (artistID) REFERENCES Artist(artistID)
);

CREATE TABLE Genre (
    genreID INTEGER PRIMARY KEY,
    navn TEXT UNIQUE NOT NULL
);

-- Mange-til-mange: Sang ↔ Genre
CREATE TABLE SangGenre (
    sangID INTEGER,
    genreID INTEGER,
    PRIMARY KEY (sangID, genreID),
    FOREIGN KEY (sangID) REFERENCES Sang(sangID),
    FOREIGN KEY (genreID) REFERENCES Genre(genreID)
);

-- Mange-til-mange: Sang ↔ Artist (for features)
CREATE TABLE SangArtist (
    sangID INTEGER,
    artistID INTEGER,
    rolle TEXT DEFAULT 'hovedartist' CHECK (rolle IN ('hovedartist', 'featuring', 'produsent')),
    PRIMARY KEY (sangID, artistID),
    FOREIGN KEY (sangID) REFERENCES Sang(sangID),
    FOREIGN KEY (artistID) REFERENCES Artist(artistID)
);

-- ============================================================
-- SPILLELISTER
-- ============================================================

CREATE TABLE Spilleliste (
    spillelisteID INTEGER PRIMARY KEY,
    navn TEXT NOT NULL,
    brukerID INTEGER,  -- NULL hvis offisiell Spotify-liste
    beskrivelse TEXT,
    offentlig BOOLEAN DEFAULT TRUE,
    cover_url TEXT,
    opprettet_dato DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (brukerID) REFERENCES Bruker(brukerID)
);

-- Mange-til-mange: Spilleliste ↔ Sang
CREATE TABLE SpillelisteSang (
    spillelisteID INTEGER,
    sangID INTEGER,
    rekkefølge INTEGER,
    lagt_til_dato DATE DEFAULT CURRENT_DATE,
    PRIMARY KEY (spillelisteID, sangID),
    FOREIGN KEY (spillelisteID) REFERENCES Spilleliste(spillelisteID),
    FOREIGN KEY (sangID) REFERENCES Sang(sangID)
);

-- ============================================================
-- BRUKERINTERAKSJONER
-- ============================================================

-- Brukere følger artister
CREATE TABLE Følger (
    brukerID INTEGER,
    artistID INTEGER,
    følger_fra DATE DEFAULT CURRENT_DATE,
    PRIMARY KEY (brukerID, artistID),
    FOREIGN KEY (brukerID) REFERENCES Bruker(brukerID),
    FOREIGN KEY (artistID) REFERENCES Artist(artistID)
);

-- Brukere liker sanger
CREATE TABLE Liker (
    brukerID INTEGER,
    sangID INTEGER,
    liket_dato DATE DEFAULT CURRENT_DATE,
    PRIMARY KEY (brukerID, sangID),
    FOREIGN KEY (brukerID) REFERENCES Bruker(brukerID),
    FOREIGN KEY (sangID) REFERENCES Sang(sangID)
);

-- Avspillingslogg (STOR tabell!)
CREATE TABLE Avspilling (
    avspillingID INTEGER PRIMARY KEY,
    brukerID INTEGER NOT NULL,
    sangID INTEGER NOT NULL,
    tidspunkt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    varighet_lyttet INTEGER,  -- Sekunder faktisk lyttet
    fullført BOOLEAN,  -- TRUE hvis > 30 sekunder
    kilde TEXT,  -- 'søk', 'spilleliste', 'album', 'anbefaling'
    FOREIGN KEY (brukerID) REFERENCES Bruker(brukerID),
    FOREIGN KEY (sangID) REFERENCES Sang(sangID)
);

-- ============================================================
-- INDEKSER FOR YTELSE
-- ============================================================

-- Avspilling er stor tabell, trenger mange indekser
CREATE INDEX idx_avspilling_bruker ON Avspilling(brukerID);
CREATE INDEX idx_avspilling_sang ON Avspilling(sangID);
CREATE INDEX idx_avspilling_tidspunkt ON Avspilling(tidspunkt);
CREATE INDEX idx_avspilling_sang_tidspunkt ON Avspilling(sangID, tidspunkt);

-- Andre viktige indekser
CREATE INDEX idx_sang_album ON Sang(albumID);
CREATE INDEX idx_sang_artist ON Sang(artistID);
CREATE INDEX idx_album_artist ON Album(artistID);
CREATE INDEX idx_spilleliste_bruker ON Spilleliste(brukerID);
CREATE INDEX idx_følger_bruker ON Følger(brukerID);
CREATE INDEX idx_følger_artist ON Følger(artistID);
\`\`\`

**b) SQL-spørringer:**

**1. De 10 mest streamede sangene siste måned:**

\`\`\`sql
SELECT
    Sang.tittel,
    Artist.navn AS artist,
    COUNT(Avspilling.avspillingID) AS antall_streams
FROM Avspilling
INNER JOIN Sang ON Avspilling.sangID = Sang.sangID
INNER JOIN Artist ON Sang.artistID = Artist.artistID
WHERE Avspilling.tidspunkt >= DATE('now', '-1 month')
  AND Avspilling.fullført = TRUE
GROUP BY Sang.sangID, Sang.tittel, Artist.navn
ORDER BY antall_streams DESC
LIMIT 10;
\`\`\`

**2. Alle sanger i spilleliste "Treningslåter":**

\`\`\`sql
SELECT
    Sang.tittel,
    Artist.navn AS artist,
    Sang.varighet_sekunder,
    SpillelisteSang.rekkefølge
FROM SpillelisteSang
INNER JOIN Sang ON SpillelisteSang.sangID = Sang.sangID
INNER JOIN Artist ON Sang.artistID = Artist.artistID
INNER JOIN Spilleliste ON SpillelisteSang.spillelisteID = Spilleliste.spillelisteID
WHERE Spilleliste.navn = 'Treningslåter'
ORDER BY SpillelisteSang.rekkefølge;
\`\`\`

**3. Anbefalte artister (artister likt av folk som følger samme artister):**

\`\`\`sql
-- Steg 1: Finn artister brukeren følger
-- Steg 2: Finn andre brukere som følger de samme artistene
-- Steg 3: Finn artister DISSE brukerne følger (men ikke originale brukeren)

SELECT
    Artist.navn,
    COUNT(DISTINCT Følger.brukerID) AS antall_felles_følgere,
    Artist.månedlige_lyttere
FROM Følger
INNER JOIN Artist ON Følger.artistID = Artist.artistID
WHERE Følger.brukerID IN (
    -- Brukere med like følger-preferanser
    SELECT DISTINCT f2.brukerID
    FROM Følger f1
    INNER JOIN Følger f2 ON f1.artistID = f2.artistID
    WHERE f1.brukerID = ? AND f2.brukerID != ?
)
AND Følger.artistID NOT IN (
    -- Artister brukeren allerede følger
    SELECT artistID FROM Følger WHERE brukerID = ?
)
GROUP BY Artist.artistID, Artist.navn, Artist.månedlige_lyttere
ORDER BY antall_felles_følgere DESC, Artist.månedlige_lyttere DESC
LIMIT 20;
\`\`\`

**c) Ytelsesoptimalisering:**

### 1. Indekser (allerede lagt til i skjema)

Spesielt viktig:
- \`idx_avspilling_sang_tidspunkt\`: Sammensatt indeks for topp-lister
- \`idx_avspilling_bruker\`: For brukerhistorikk
- \`idx_følger_*\`: For anbefalinger

### 2. Partisjonering av Avspilling-tabellen

\`\`\`sql
-- Splitt opp etter måned (PostgreSQL-eksempel)
CREATE TABLE Avspilling_2024_01 PARTITION OF Avspilling
    FOR VALUES FROM ('2024-01-01') TO ('2024-02-01');

CREATE TABLE Avspilling_2024_02 PARTITION OF Avspilling
    FOR VALUES FROM ('2024-02-01') TO ('2024-03-01');
-- etc.
\`\`\`

### 3. Materialiserte views for statistikk

\`\`\`sql
-- Pre-beregn topp-lister (oppdateres hver time)
CREATE MATERIALIZED VIEW topp_sanger_uken AS
SELECT
    sangID,
    COUNT(*) AS streams
FROM Avspilling
WHERE tidspunkt >= DATE('now', '-7 days')
  AND fullført = TRUE
GROUP BY sangID;

-- Oppdater hver time
REFRESH MATERIALIZED VIEW topp_sanger_uken;
\`\`\`

### 4. Caching-strategi (Redis)

\`\`\`python
import redis
import json

# Cache topp-lister
redis.setex("top_songs:weekly", 3600, json.dumps(top_songs))

# Cache brukerens spillelister
redis.setex(f"playlists:user{user_id}", 300, json.dumps(playlists))

# Cache artistinfo
redis.setex(f"artist:{artist_id}", 1800, json.dumps(artist_data))
\`\`\`

**d) Hybrid SQL + NoSQL:**

### SQL (PostgreSQL) for:
✅ Brukerdata, abonnementer (ACID-kritisk)
✅ Avspillingslogg (transaksjonsintegritet)
✅ Følger-relasjoner (komplekse spørringer)

### MongoDB for:
✅ Artistprofiler (varierende struktur, sosiale medier-info)
✅ Album-metadata (kan ha mange ekstra felt)
✅ Lyrics (tekster, oversettelser, synkronisert med tid)

\`\`\`json
// MongoDB: Artist-dokument
{
  "_id": "artist_12345",
  "navn": "Taylor Swift",
  "bio": "...",
  "bilder": {
    "profilbilde": "https://...",
    "bannerbilde": "https://...",
    "gallerier": [...]
  },
  "sosiale_medier": {
    "instagram": "@taylorswift",
    "twitter": "@taylorswift13",
    "tiktok": "@taylorswift"
  },
  "verifisert": true,
  "statistikk": {
    "månedlige_lyttere": 95000000,
    "totale_streams": 35000000000
  },
  "turnekalender": [
    {
      "by": "Oslo",
      "venue": "Telenor Arena",
      "dato": "2024-06-15"
    }
  ]
}
\`\`\`

### Redis for:
✅ Sanntids-statistikk ("nå spiller 50 000 brukere denne sangen")
✅ Bruker-sessions
✅ Nylig spilt (siste 50 sanger per bruker)
✅ Køsystem for populære artister (billetter)

**Arkitektur-diagram:**

\`\`\`
┌──────────────┐
│   Bruker     │
└──────┬───────┘
       │
       v
┌──────────────────┐
│  API Gateway     │
│   (Node.js)      │
└────┬───┬────┬────┘
     │   │    │
     v   v    v
┌────────┐ ┌────────┐ ┌────────┐
│  SQL   │ │ MongoDB│ │ Redis  │
│(brukere│ │(artist │ │ (cache)│
│ logging│ │ profil)│ │        │
└────────┘ └────────┘ └────────┘
\`\`\`

**Konklusjon:**
En moderne musikkstrømmetjeneste krever:
- SQL for kritiske transaksjoner og relasjoner
- NoSQL for fleksible profiler og metadata
- Redis for sanntids-cache og statistikk
- Smart indeksering og partisjonering
- Materialiserte views for tung statistikk`,
    },
  ],
  keyTerms: [
    'Koblingstabeller',
    'Mange-til-mange',
    'Rekursiv relasjon',
    'Hierarki',
    'Constraints',
    'Trigger',
    'Migrering',
    'Materialisert view',
  ],
  estimatedMinutes: 70,
  prevChapter: 'it-2-5-4',
  nextChapter: 'it-2-6-1',
};

// ============================================================
// EXPORT
// ============================================================

export const IT_2_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_IT_2_5_1,
  CHAPTER_IT_2_5_2,
  CHAPTER_IT_2_5_3,
  CHAPTER_IT_2_5_4,
  CHAPTER_IT_2_5_5,
];
