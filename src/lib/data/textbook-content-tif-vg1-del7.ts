/* eslint-disable */
// @ts-nocheck
/**
 * Teknologi- og industrifag VG1 - Del 7: Produksjon og kvalitet
 *
 * Kapittel 7.1-7.7
 * Dekker LK20 kompetansemål for produksjon, kvalitetsstyring og lean
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ===== KAPITTEL 7.1: Produksjonsprosesser =====
const CHAPTER_7_1: TextbookChapter = {
  id: 'tif-vg1-7-1',
  courseId: 'tif-vg1',
  chapterNumber: '7.1',
  title: 'Produksjonsprosesser',
  description: 'Lær om ulike produksjonsmetoder og hvordan produkter lages.',
  estimatedMinutes: 45,
  sections: [
    {
      id: 'tif-vg1-7-1-intro',
      type: 'text',
      content: `# Produksjonsprosesser

Produksjon handler om å omforme råmaterialer til ferdige produkter. I dette kapittelet lærer du om ulike måter å organisere produksjon på, og hvordan valg av produksjonsmetode påvirker kvalitet, kostnad og fleksibilitet.

## Læringsmål

Etter dette kapittelet skal du kunne:
- Beskrive ulike produksjonsformer
- Forklare forskjellen mellom serieproduksjon og ordreproduksjon
- Forstå konseptet verdikjede
- Kjenne til automatisering i moderne produksjon`,
    },
    {
      id: 'tif-vg1-7-1-typer',
      type: 'text',
      content: `## Typer produksjon

### Enkeltproduksjon (ordreproduksjon)
Produkter lages ett om gangen etter kundens spesifikasjoner.
- Høy fleksibilitet
- Lav volum, høy pris
- Eksempler: Spesialmaskiner, prototyper, kunsthåndverk

### Serieproduksjon
Like produkter lages i serier (batcher).
- God balanse mellom fleksibilitet og effektivitet
- Mellomstore volumer
- Eksempler: Møbler, elektronikk, bildeler

### Masseproduksjon
Standardiserte produkter lages i svært store volumer.
- Lav fleksibilitet, høy effektivitet
- Lavest enhetskostnad
- Eksempler: Dagligvarer, biler, smarttelefoner`,
    },
    {
      id: 'tif-vg1-7-1-layout',
      type: 'text',
      content: `## Produksjonsoppsett (layout)

### Funksjonelt oppsett
Maskiner grupperes etter funksjon:
- Dreieavdeling, freseavdeling, sveiseavdeling
- Fleksibelt, men mye transport
- Passer for ordreproduksjon

### Linjeoppsett
Maskiner organisert i rekkefølge for produktflyten:
- Produktet beveger seg fra stasjon til stasjon
- Effektivt for høye volumer
- Passer for serie- og masseproduksjon

### Celleoppsett
Grupper av maskiner for komplette deloperasjoner:
- Kombinerer fleksibilitet og effektivitet
- Teamarbeid
- Passer for serieproduksjon`,
    },
    {
      id: 'tif-vg1-7-1-verdikjede',
      type: 'text',
      content: `## Verdikjeden

**Verdikjeden** beskriver alle aktivitetene fra råvare til ferdig produkt hos kunde:

1. **Inngående logistikk** - Mottak og lagring av råvarer
2. **Produksjon** - Omforming til ferdig produkt
3. **Utgående logistikk** - Lagring og distribusjon
4. **Salg og markedsføring** - Kundekontakt
5. **Service** - Ettermarkedstjenester

### Verdiskapende aktiviteter

Ikke alle aktiviteter skaper verdi for kunden:
- **Verdiskapende**: Bearbeiding som gir produktet verdi
- **Ikke verdiskapende, men nødvendig**: Transport, kontroll
- **Sløsing**: Venting, lagring, feil - bør elimineres`,
    },
    {
      id: 'tif-vg1-7-1-ex1',
      type: 'text',
      content: `### Eksempel: Produksjon av sykkelramme

**Ordreproduksjon**: En sykkelbygger lager en spesialtilpasset karbonramme til en kunde. Hver ramme er unik, høy pris, flere ukers leveringstid.

**Serieproduksjon**: En fabrikk lager 500 aluminiumsrammer av modell A, deretter 300 av modell B. Rammene er standardiserte, men det finnes varianter.

**Masseproduksjon**: En stor fabrikk produserer 50 000 identiske rammer per måned til en populær sykkelmodell. Fullt automatisert, lav enhetspris.

Valget av produksjonsform avhenger av marked, volum og kundekrav.`,
    },
    {
      id: 'tif-vg1-7-1-automatisering',
      type: 'text',
      content: `## Automatisering

### Nivåer av automatisering

| Nivå | Beskrivelse | Eksempel |
|------|-------------|----------|
| Manuell | Menneske utfører alt | Håndverk |
| Halvautomatisk | Maskin assisterer | CNC med manuell lasting |
| Automatisk | Maskin utfører, menneske overvåker | Produksjonsrobot |
| Fullautomatisk | Minimal menneskelig involvering | "Lights out" fabrikk |

### Industriroboter

Roboter brukes til:
- Sveising
- Lakkering
- Montering
- Palletering
- Maskinbetjening

### Fordeler med automatisering
- Høyere presisjon og repeterbarhet
- Økt produktivitet
- Bedre HMS (roboter tar farlige oppgaver)`,
    },
    {
      id: 'tif-vg1-7-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Enkeltproduksjon**: Unike produkter, høy pris, lav volum
- **Serieproduksjon**: Standardiserte varianter, mellomstore volumer
- **Masseproduksjon**: Identiske produkter, høye volumer, lav pris
- **Layout**: Funksjonelt, linje eller celle
- **Verdikjeden**: Alle aktiviteter fra råvare til kunde
- Skille mellom verdiskapende aktiviteter og sløsing
- **Automatisering** øker effektivitet, presisjon og sikkerhet`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-7-1-oppg1',
      number: '7.1.1',
      type: 'multiple-choice',
      task: 'Hvilken produksjonsform gir lavest enhetskostnad?',
      options: [
        { id: 'a', text: 'Enkeltproduksjon', isCorrect: false },
        { id: 'b', text: 'Serieproduksjon', isCorrect: false },
        { id: 'c', text: 'Masseproduksjon', isCorrect: true },
        { id: 'd', text: 'Ordreproduksjon', isCorrect: false },
      ],
      solution: 'Masseproduksjon gir lavest enhetskostnad fordi de høye volumene tillater full automatisering og effektive prosesser. Utviklingskostnadene fordeles på mange enheter.',
    },
    {
      id: 'tif-vg1-7-1-oppg2',
      number: '7.1.2',
      type: 'classic',
      task: 'Forklar forskjellen mellom funksjonelt oppsett og linjeoppsett i en fabrikk.',
      solution: 'Funksjonelt oppsett: Maskiner grupperes etter type/funksjon - alle dreiebenker i én avdeling, alle fresemaskiner i en annen. Produktene transporteres mellom avdelinger etter behov. Fleksibelt, men mye transport og venting. Passer for ordreproduksjon. Linjeoppsett: Maskiner plasseres i rekkefølge slik produktet skal bearbeides. Produktet beveger seg fra stasjon til stasjon langs en linje. Effektivt med lite transport, men mindre fleksibelt. Passer for serie- og masseproduksjon.',
    },
    {
      id: 'tif-vg1-7-1-oppg3',
      number: '7.1.3',
      type: 'classic',
      task: 'Gi et eksempel på hver av disse aktivitetstypene i en møbelfabrikk: a) Verdiskapende, b) Ikke verdiskapende men nødvendig, c) Sløsing.',
      solution: 'a) Verdiskapende: Høvling av trevirke, montering av stolsetet, lakkering - aktiviteter som gir produktet egenskaper kunden vil betale for. b) Ikke verdiskapende men nødvendig: Transport av deler mellom avdelinger, kvalitetskontroll, dokumentasjon - nødvendig men tilfører ikke direkte verdi. c) Sløsing: Venting på grunn av flaskehals, omarbeid av feil, leting etter verktøy, produksjon av varer som ikke blir solgt - bør elimineres.',
    },
    {
      id: 'tif-vg1-7-1-oppg4',
      number: '7.1.4',
      type: 'classic',
      task: 'En bedrift vurderer å automatisere en pakkelinje. Nevn tre fordeler og to ulemper med automatisering.',
      solution: 'Fordeler: 1) Høyere produktivitet - roboter kan jobbe 24/7 uten pauser. 2) Bedre presisjon og repeterbarhet - hver pakke blir identisk. 3) Forbedret HMS - ansatte slipper ensformig, belastende arbeid. 4) Lavere lønnskostnader over tid. Ulemper: 1) Høy investeringskostnad - roboter og systemer er dyre. 2) Redusert fleksibilitet - vanskelig å endre ved nye produkter. 3) Krever teknisk kompetanse for vedlikehold. 4) Kan gi færre arbeidsplasser.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-7-1-oppg5',
      number: '7.1.5',
      type: 'classic',
      task: 'En liten verkstedbedrift produserer spesialtilpassede ståldeler til industrien. Hvilken produksjonsform og hvilket layout vil du anbefale? Begrunn svaret.',
      solution: 'Anbefaling: Ordreproduksjon (enkeltproduksjon) med funksjonelt oppsett. Begrunnelse: Ordreproduksjon fordi: 1) Produktene er spesialtilpasset - hver ordre kan være unik. 2) Volumet er lavt - ikke grunnlag for standardisering. 3) Kunden betaler for tilpasning - høy pris aksepteres. Funksjonelt oppsett fordi: 1) Fleksibilitet til å utføre ulike operasjoner etter behov. 2) Hver jobb kan ta ulik vei gjennom verkstedet. 3) Lettere å utnytte maskinkapasiteten ved varierende jobber. Linjeoppsett ville vært for ufleksibelt for varierte ordrer.',
    },
    {
      id: 'tif-vg1-7-1-oppg6',
      number: '7.1.6',
      type: 'classic',
      task: 'Beskriv verdikjeden for produksjon av en metallhylle fra råmateriale til ferdig produkt hos kunden. Identifiser minst fem aktiviteter.',
      solution: 'Verdikjeden for metallhylle: 1) INNGÅENDE LOGISTIKK: Mottak av stålplater og profiler fra leverandør, lagring i råvarelager, kvalitetskontroll av materiale. 2) PRODUKSJON: Tilskjæring av deler, bøying og pressing, sveising, slipping/putsing, overflatebehandling (pulverlakkering), montering, emballering. 3) UTGÅENDE LOGISTIKK: Lagring av ferdige produkter, plukking og pakking av ordre, lasting på lastebil. 4) SALG OG MARKEDSFØRING: Kundehenvendelser, ordremottak, prissetting, markedsføring, katalog/nettside. 5) SERVICE: Reklamasjonsbehandling, teknisk support, reservedeler, monteringsassistanse.',
    },
  ],
  keyTerms: [
    'produksjonsprosess',
    'enkeltproduksjon',
    'serieproduksjon',
    'masseproduksjon',
    'funksjonelt oppsett',
    'linjeoppsett',
    'celleoppsett',
    'verdikjede',
    'verdiskapende',
    'sløsing',
    'automatisering',
  ],
  competenceGoals: [
    'gjøre rede for produksjonsprosesser i teknologi- og industrifag',
    'reflektere over hvordan teknologisk utvikling påvirker arbeidsoppgaver og arbeidsprosesser',
  ],
};

// ===== KAPITTEL 7.2: Kvalitetsstyring =====
const CHAPTER_7_2: TextbookChapter = {
  id: 'tif-vg1-7-2',
  courseId: 'tif-vg1',
  chapterNumber: '7.2',
  title: 'Kvalitetsstyring',
  description: 'Lær om kvalitetsbegrepet, kvalitetssystemer og ISO-standarder.',
  estimatedMinutes: 45,
  sections: [
    {
      id: 'tif-vg1-7-2-intro',
      type: 'text',
      content: `# Kvalitetsstyring

Kvalitet handler om å levere produkter og tjenester som oppfyller kundens forventninger. Systematisk kvalitetsstyring sikrer at bedriften leverer riktig kvalitet hver gang. I dette kapittelet lærer du om kvalitetsbegrepet og hvordan kvalitetssystemer fungerer.

## Læringsmål

Etter dette kapittelet skal du kunne:
- Forklare hva kvalitet betyr i industriell sammenheng
- Beskrive elementer i et kvalitetsstyringssystem
- Kjenne til ISO 9001-standarden
- Forstå prinsippene for kontinuerlig forbedring`,
    },
    {
      id: 'tif-vg1-7-2-kvalitet',
      type: 'text',
      content: `## Hva er kvalitet?

**Kvalitet** = i hvilken grad egenskaper oppfyller krav

### Kvalitetsdimensjoner

| Dimensjon | Beskrivelse |
|-----------|-------------|
| Funksjonalitet | Gjør produktet det det skal? |
| Pålitelighet | Fungerer det over tid? |
| Holdbarhet | Hvor lenge varer det? |
| Estetikk | Hvordan ser det ut? |
| Opplevd kvalitet | Hva mener kunden? |
| Samsvar | Følger det spesifikasjonene? |

### Kvalitetskostnader

- **Forebyggende**: Opplæring, planlegging, prosessutvikling
- **Kontrollkostnader**: Inspeksjon, testing, måling
- **Feilkostnader (interne)**: Vrak, omarbeid, kassasjon
- **Feilkostnader (eksterne)**: Reklamasjoner, garantireparasjoner, tap av kunder`,
    },
    {
      id: 'tif-vg1-7-2-system',
      type: 'text',
      content: `## Kvalitetsstyringssystem

Et **kvalitetsstyringssystem (KS)** er en strukturert tilnærming for å sikre kvalitet:

### Hovedelementer

1. **Kvalitetspolicy** - Ledelsens forpliktelse til kvalitet
2. **Kvalitetsmål** - Målbare mål for kvalitet
3. **Prosedyrer** - Beskrivelser av hvordan arbeid utføres
4. **Arbeidsinstrukser** - Detaljerte steg-for-steg instruksjoner
5. **Registreringer** - Dokumentasjon av utført arbeid
6. **Avvikshåndtering** - System for å håndtere feil
7. **Internrevisjon** - Sjekk at systemet følges

### Dokumentpyramiden

1. **Håndbok** - Overordnet beskrivelse
2. **Prosedyrer** - Hva som skal gjøres
3. **Instrukser** - Hvordan det skal gjøres
4. **Skjemaer** - Registrering og dokumentasjon`,
    },
    {
      id: 'tif-vg1-7-2-iso',
      type: 'text',
      content: `## ISO 9001

**ISO 9001** er den internasjonale standarden for kvalitetsstyringssystemer.

### Grunnprinsipper

1. Kundefokus
2. Lederskap
3. Medarbeiderengasjement
4. Prosesstilnærming
5. Forbedring
6. Evidensbaserte beslutninger
7. Relasjonshåndtering

### Sertifisering

Bedrifter kan bli **ISO 9001-sertifisert**:
- Eksternt revisjonsselskap vurderer systemet
- Sertifikat gyldig i 3 år
- Årlige oppfølgingsrevisjoner
- Gir troverdighet overfor kunder

### Fordeler
- Økt kundetilfredshet
- Bedre prosesser
- Reduserte feil
- Konkurransefortrinn`,
    },
    {
      id: 'tif-vg1-7-2-ex1',
      type: 'text',
      content: `### Eksempel: Avvikshåndtering

En sveiser oppdager at fem sammensveisede rammer har feil dimensjon.

**Uten kvalitetssystem**:
- Sveiseren fikser feilen og fortsetter
- Ingen læring, feilen kan skje igjen

**Med kvalitetssystem**:
1. **Registrer avviket** - Feil dimensjon på 5 rammer
2. **Strakstiltak** - Rammene kastes eller omarbeides
3. **Rotårsaksanalyse** - Hvorfor skjedde det? (Feil tegning? Slitt mal?)
4. **Korrigerende tiltak** - Oppdater tegning, bytt mal
5. **Forebyggende tiltak** - Innfør kontrollpunkt
6. **Lukking** - Verifiser at tiltak virker

Neste gang feilen oppdages, er problemet allerede løst.`,
    },
    {
      id: 'tif-vg1-7-2-forbedring',
      type: 'text',
      content: `## Kontinuerlig forbedring

**PDCA-syklusen** (Demings hjul) er grunnlaget for kontinuerlig forbedring:

1. **Plan (Planlegg)** - Identifiser problem, analyser årsak, planlegg tiltak
2. **Do (Utfør)** - Gjennomfør tiltaket
3. **Check (Kontroller)** - Mål resultatet, fungerte tiltaket?
4. **Act (Korriger)** - Standardiser det som virker, start på nytt

### Kaizen

**Kaizen** er japansk filosofi for kontinuerlig forbedring:
- Små, stadige forbedringer
- Alle bidrar
- Fokus på prosessen
- Ingen forbedring er for liten`,
    },
    {
      id: 'tif-vg1-7-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Kvalitet** = grad av samsvar med krav
- Kvalitetskostnader: Forebygging, kontroll, interne og eksterne feil
- **Kvalitetssystem** sikrer systematisk arbeid med kvalitet
- Dokumentpyramide: Håndbok → Prosedyrer → Instrukser → Skjemaer
- **ISO 9001** er internasjonal standard for kvalitetsstyring
- Avvikshåndtering: Registrer → Strakstiltak → Rotårsak → Tiltak → Lukk
- **PDCA-syklusen**: Plan-Do-Check-Act for kontinuerlig forbedring`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-7-2-oppg1',
      number: '7.2.1',
      type: 'multiple-choice',
      task: 'Hva står PDCA for i kvalitetssammenheng?',
      options: [
        { id: 'a', text: 'Problem-Design-Control-Adjust', isCorrect: false },
        { id: 'b', text: 'Plan-Do-Check-Act', isCorrect: true },
        { id: 'c', text: 'Prepare-Develop-Complete-Approve', isCorrect: false },
        { id: 'd', text: 'Process-Document-Certify-Audit', isCorrect: false },
      ],
      solution: 'PDCA står for Plan-Do-Check-Act, også kalt Demings hjul. Det er en syklisk metode for kontinuerlig forbedring: Planlegg et tiltak, utfør det, kontroller resultatet, og korriger/standardiser.',
    },
    {
      id: 'tif-vg1-7-2-oppg2',
      number: '7.2.2',
      type: 'classic',
      task: 'Forklar forskjellen mellom interne og eksterne feilkostnader, og gi et eksempel på hver.',
      solution: 'Interne feilkostnader: Kostnader ved feil som oppdages FØR produktet leveres til kunden. Eksempel: En del som må kasseres eller omarbeides fordi den er utenfor toleranse. Eksterne feilkostnader: Kostnader ved feil som oppdages ETTER at produktet er levert til kunden. Eksempel: Reklamasjon der produktet må hentes tilbake, repareres og returneres - pluss kostnader for misfornøyd kunde og skadet omdømme. Eksterne feilkostnader er typisk mye høyere enn interne, så det lønner seg å fange feil tidlig.',
    },
    {
      id: 'tif-vg1-7-2-oppg3',
      number: '7.2.3',
      type: 'classic',
      task: 'Beskriv de fire hoveddelene i dokumentpyramiden i et kvalitetssystem.',
      solution: '1) Håndbok (kvalitetshåndbok): Overordnet dokument som beskriver bedriftens kvalitetspolicy, organisering og hvordan kvalitetssystemet er bygget opp. Sier HVA bedriften står for. 2) Prosedyrer: Beskriver HVA som skal gjøres i ulike situasjoner - hvilke aktiviteter, hvem som er ansvarlig, når det skal gjøres. 3) Arbeidsinstrukser: Detaljerte steg-for-steg beskrivelser av HVORDAN spesifikke oppgaver utføres. Brukes av den som faktisk gjør jobben. 4) Skjemaer og registreringer: Dokumenter som brukes til å registrere at arbeid er utført - sjekklister, kontrollskjemaer, avviksrapporter.',
    },
    {
      id: 'tif-vg1-7-2-oppg4',
      number: '7.2.4',
      type: 'classic',
      task: 'Hvorfor er det viktig med rotårsaksanalyse når avvik oppstår? Hva kan skje hvis man bare behandler symptomene?',
      solution: 'Rotårsaksanalyse er viktig fordi: 1) Den finner den egentlige årsaken til problemet, ikke bare det synlige symptomet. 2) Den gjør det mulig å sette inn varige tiltak som hindrer at problemet skjer igjen. 3) Den gir læring som kan overføres til lignende prosesser. Hvis man bare behandler symptomene: 1) Problemet vil sannsynligvis skje igjen. 2) Man bruker ressurser på å fikse samme problem gjentatte ganger. 3) Grunnproblemet kan vokse og forårsake flere feil. Eksempel: Hvis sveiser ofte får feil dimensjon, hjelper det ikke å bare omarbeide delene - man må finne ut om det er feil tegning, dårlig opplæring eller slitt verktøy.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-7-2-oppg5',
      number: '7.2.5',
      type: 'classic',
      task: 'En bedrift opplever mange reklamasjoner på et produkt. Bruk PDCA-syklusen til å beskrive hvordan de kan jobbe systematisk med problemet.',
      solution: 'PLAN (Planlegg): 1) Samle inn data om reklamasjonene - hva klager kundene på? 2) Analyser mønsteret - er det samme feil som går igjen? 3) Gjennomfør rotårsaksanalyse - hvorfor oppstår feilen? (Kanskje: feil i produksjonsrutine) 4) Planlegg et tiltak - oppdater prosedyre, gi opplæring. DO (Utfør): 5) Innfør den nye prosedyren. 6) Gi opplæring til operatørene. 7) Start å bruke sjekkliste. CHECK (Kontroller): 8) Etter noen uker, mål reklamasjonsraten. 9) Er det færre reklamasjoner? 10) Intervju operatører og kunder. ACT (Korriger): 11) Hvis tiltaket virket - standardiser prosedyren permanent. 12) Hvis ikke - analyser hvorfor og start ny PDCA-runde.',
    },
    {
      id: 'tif-vg1-7-2-oppg6',
      number: '7.2.6',
      type: 'classic',
      task: 'Forklar hvorfor en bedrift kan ønske å bli ISO 9001-sertifisert, og beskriv prosessen for å oppnå sertifisering.',
      solution: 'Hvorfor ISO 9001-sertifisering? 1) Krav fra kunder - mange storinnkjøpere krever det. 2) Konkurransefortrinn - viser at bedriften tar kvalitet på alvor. 3) Systematisering - tvinger bedriften til å dokumentere og forbedre prosesser. 4) Internasjonal anerkjennelse - gyldig i alle land. 5) Reduserer feil og kostnader over tid. Prosessen: 1) Beslutning og forankring i ledelsen. 2) GAP-analyse - hvor står vi, hva mangler? 3) Utvikle kvalitetssystem - dokumenter prosedyrer og instrukser. 4) Innføring - implementer systemet i hele bedriften. 5) Internrevisjon - sjekk selv at systemet følges. 6) Eksternt revisjonsbesøk - sertifiseringsselskap vurderer bedriften. 7) Hvis godkjent - sertifikat utstedes (gyldig 3 år). 8) Årlige oppfølgingsrevisjoner.',
    },
  ],
  keyTerms: [
    'kvalitet',
    'kvalitetsstyringssystem',
    'kvalitetskostnader',
    'ISO 9001',
    'prosedyre',
    'arbeidsinstruks',
    'avvikshåndtering',
    'rotårsaksanalyse',
    'PDCA',
    'kontinuerlig forbedring',
    'kaizen',
    'sertifisering',
  ],
  competenceGoals: [
    'bruke kvalitetsstyringssystem og delta i arbeid med kontinuerlig forbedring',
    'dokumentere og vurdere eget arbeid',
  ],
};

// ===== KAPITTEL 7.3: Kvalitetskontroll og måling =====
const CHAPTER_7_3: TextbookChapter = {
  id: 'tif-vg1-7-3',
  courseId: 'tif-vg1',
  chapterNumber: '7.3',
  title: 'Kvalitetskontroll og måling',
  description: 'Lær om målemetoder, toleranser og statistisk prosesskontroll.',
  estimatedMinutes: 45,
  sections: [
    {
      id: 'tif-vg1-7-3-intro',
      type: 'text',
      content: `# Kvalitetskontroll og måling

Kvalitetskontroll sikrer at produktene oppfyller spesifikasjonene. I dette kapittelet lærer du om målemetoder, toleranser og hvordan statistikk brukes til å overvåke produksjonsprosesser.

## Læringsmål

Etter dette kapittelet skal du kunne:
- Utføre grunnleggende målinger og tolke resultater
- Forstå toleranser og hvordan de angis
- Kjenne til ulike kontrollmetoder
- Forstå prinsippene bak statistisk prosesskontroll (SPC)`,
    },
    {
      id: 'tif-vg1-7-3-toleranser',
      type: 'text',
      content: `## Toleranser

**Toleranse** er tillatt avvik fra nominell verdi.

### Eksempel på toleranseangivelse

**Ø50 ± 0,05 mm**
- Nominell verdi: 50,00 mm
- Øvre grense: 50,05 mm
- Nedre grense: 49,95 mm
- Toleranse: 0,10 mm (totalt avvik)

### ISO-toleransesystem

Bokstav angir posisjon, tall angir størrelse på toleranse:
- **H7**: Hull, øvre grense ved nominell
- **h6**: Aksel, nedre grense ved nominell
- Større tall = større toleranse

### Passninger

- **Glidepassning** (f.eks. H7/g6): Litt klaring
- **Overgangspassning** (f.eks. H7/k6): Kan være klaring eller press
- **Presspassning** (f.eks. H7/p6): Alltid press`,
    },
    {
      id: 'tif-vg1-7-3-maleutstyr',
      type: 'text',
      content: `## Måleutstyr

### Skyvelær

- Måler lengder, diametere, dybder
- Nøyaktighet: 0,02-0,05 mm
- Digitalt eller analogt (nonius)
- Mest brukte måleverktøy

### Mikrometer

- Høyere nøyaktighet: 0,01 mm
- Brukes for presise mål
- Typer: utvendig, innvendig, dybde

### Måleklokke

- Måler avvik fra referanse
- Nøyaktighet: 0,01 mm
- Brukes for rundhet, planhet, parallellitet

### Toleransekontroll

- **Grensemål (Go/NoGo)**: Sjekker om mål er innenfor toleranse
- Rask kontroll i produksjon
- "Go"-delen skal passe, "NoGo" skal ikke`,
    },
    {
      id: 'tif-vg1-7-3-metoder',
      type: 'text',
      content: `## Kontrollmetoder

### 100% kontroll

Alle produkter kontrolleres.
- Brukes ved kritiske egenskaper
- Tidkrevende og kostbart
- Eksempel: Sikkerhetskritiske deler til fly

### Stikkprøvekontroll

Et utvalg produkter kontrolleres.
- Basert på statistiske prinsipper
- Mer effektivt enn 100% kontroll
- Risiko for at feil slipper gjennom

### Prosesskontroll

Kontrollerer prosessen i stedet for produktet.
- Måler prosessparametere (temperatur, trykk, hastighet)
- Forhindrer feil i stedet for å oppdage dem
- Eksempel: Overvåking av sveiseparametere`,
    },
    {
      id: 'tif-vg1-7-3-ex1',
      type: 'text',
      content: `### Eksempel: Kontroll av akseldiameter

En aksel skal ha diameter 25,00 ± 0,02 mm.

**100% kontroll**: Hver aksel måles med mikrometer. Aksler utenfor 24,98 - 25,02 mm kasseres.

**Stikkprøve**: 5 av 100 aksler måles. Hvis en er utenfor toleranse, kontrolleres hele partiet.

**Grensekontroll (Go/NoGo)**:
- "Go"-ring: 25,02 mm - akselen skal passe gjennom
- "NoGo"-ring: 24,98 mm - akselen skal IKKE passe gjennom
- Rask sjekk: Passer gjennom Go men ikke NoGo = OK`,
    },
    {
      id: 'tif-vg1-7-3-spc',
      type: 'text',
      content: `## Statistisk prosesskontroll (SPC)

**SPC** bruker statistikk til å overvåke og styre produksjonsprosesser.

### Kontrolldiagram

Et diagram som viser målinger over tid:
- **Midtlinje** (gjennomsnitt): Ønsket verdi
- **Øvre kontrollgrense (UCL)**: +3 standardavvik
- **Nedre kontrollgrense (LCL)**: -3 standardavvik

### Tolkning

| Mønster | Betydning |
|---------|-----------|
| Punkter innenfor grenser | Prosess under kontroll |
| Punkt utenfor grenser | Prosess ute av kontroll - undersøk! |
| Trend (7+ punkter stigende/synkende) | Noe endrer seg gradvis |
| Skift (7+ punkter på samme side av midtlinje) | Prosessen har skiftet |

### Fordeler med SPC
- Oppdager problemer tidlig
- Reduserer vrak og omarbeid
- Gir data for forbedring`,
    },
    {
      id: 'tif-vg1-7-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Toleranse** er tillatt avvik fra nominell verdi
- ISO-toleransesystem: Bokstav (posisjon) + tall (størrelse)
- **Skyvelær**: Allround, 0,02-0,05 mm nøyaktighet
- **Mikrometer**: Presist, 0,01 mm nøyaktighet
- **Grensemål**: Go/NoGo for rask sjekk
- Kontrollmetoder: 100%, stikkprøve, prosesskontroll
- **SPC** overvåker prosessen med kontrolldiagram
- Punkt utenfor kontrollgrenser = undersøk!`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-7-3-oppg1',
      number: '7.3.1',
      type: 'multiple-choice',
      task: 'En aksel har toleranse Ø30 ± 0,03 mm. Hvilket måleresultat er innenfor toleransen?',
      options: [
        { id: 'a', text: '29,96 mm', isCorrect: false },
        { id: 'b', text: '30,04 mm', isCorrect: false },
        { id: 'c', text: '30,02 mm', isCorrect: true },
        { id: 'd', text: '29,90 mm', isCorrect: false },
      ],
      solution: 'Toleransen Ø30 ± 0,03 mm gir grenser 29,97 - 30,03 mm. 30,02 mm er innenfor denne toleransen. 29,96 mm er for lite (under 29,97), og 30,04 mm er for stort (over 30,03).',
    },
    {
      id: 'tif-vg1-7-3-oppg2',
      number: '7.3.2',
      type: 'classic',
      task: 'Forklar prinsippet bak Go/NoGo-grensemål og når det brukes.',
      solution: 'Go/NoGo-grensemål er et verktøy med to mål - ett "Go" og ett "NoGo". Go-målet tilsvarer den romsligste grensen (maksimum for hull, minimum for aksel). NoGo-målet tilsvarer den trangeste grensen. Prinsipp: Akselen skal passe gjennom Go-målet (beviser at den ikke er for stor) men IKKE gjennom NoGo-målet (beviser at den ikke er for liten). For hull: Go-pluggen skal IKKE passe (hullet er stort nok), NoGo-pluggen skal passe (hullet er ikke for stort). Brukes: I produksjon der mange deler skal kontrolleres raskt. Fordel: Rask sjekk uten avlesning av tall. Ulempe: Gir bare OK/ikke OK, ikke det faktiske målet.',
    },
    {
      id: 'tif-vg1-7-3-oppg3',
      number: '7.3.3',
      type: 'classic',
      task: 'Hva er forskjellen mellom skyvelær og mikrometer, og når bruker du hvert verktøy?',
      solution: 'Skyvelær: Nøyaktighet 0,02-0,05 mm. Kan måle utvendige mål, innvendige mål og dybder med samme verktøy. Enkelt å bruke, robust. Brukes: Generelle målinger, de fleste oppgaver i verkstedet, når 0,02-0,05 mm nøyaktighet er tilstrekkelig. Mikrometer: Nøyaktighet 0,01 mm (noen ned til 0,001 mm). Mer presist enn skyvelær. Finnes i ulike typer (utvendig, innvendig, dybde) - må velge riktig type. Brukes: Når høy presisjon kreves, finmekanikk, kontroll av toleranser under 0,05 mm, kalibrering. Tommelregel: Start med skyvelær, bruk mikrometer når toleransen krever det.',
    },
    {
      id: 'tif-vg1-7-3-oppg4',
      number: '7.3.4',
      type: 'classic',
      task: 'I et SPC-kontrolldiagram ser du at 8 punkter på rad ligger over midtlinjen, men innenfor kontrollgrensene. Hva betyr dette, og hva bør du gjøre?',
      solution: 'Dette kalles et "skift" eller "run" og indikerer at prosessen har endret seg selv om punktene er innenfor kontrollgrensene. Prosessen er teknisk sett "ute av statistisk kontroll" fordi sannsynligheten for 8 punkter på samme side tilfeldig er svært lav. Hva det betyr: Noe har endret prosessens gjennomsnitt - kanskje nytt råmateriale, verktøyslitasje, temperaturendring, ny operatør, eller maskinendring. Hva du bør gjøre: 1) Undersøk hva som kan ha endret seg. 2) Sjekk om endringen er positiv eller negativ. 3) Juster prosessen tilbake hvis nødvendig. 4) Oppdater kontrollgrensene hvis endringen er permanent og ønsket.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-7-3-oppg5',
      number: '7.3.5',
      type: 'classic',
      task: 'En CNC-maskin produserer bolteer med nominelt mål Ø12,00 mm og toleranse ± 0,02 mm. Du tar stikkprøver og måler: 11,99 - 12,01 - 12,02 - 12,00 - 12,03 mm. Vurder resultatene.',
      solution: 'Toleransegrenser: 11,98 mm (nedre) til 12,02 mm (øvre). Vurdering av måleresultater: 11,99 mm - OK (innenfor). 12,01 mm - OK (innenfor). 12,02 mm - OK (akkurat på øvre grense). 12,00 mm - OK (perfekt). 12,03 mm - IKKE OK (over øvre grense). Konklusjon: 4 av 5 er godkjent, 1 er vrak. Dette indikerer at prosessen ligger i øvre del av toleransen og kan være på vei ut. Anbefaling: 1) Vrak den ene delen. 2) Juster CNC-maskinen - reduser diameter litt (programoffset). 3) Øk stikkprøvefrekvensen. 4) Sjekk verktøy for slitasje.',
    },
    {
      id: 'tif-vg1-7-3-oppg6',
      number: '7.3.6',
      type: 'classic',
      task: 'Beskriv hvordan du ville satt opp et enkelt SPC-system for å overvåke diameteren på dreide aksler. Inkluder prøvetaking, måling og reaksjoner.',
      solution: 'Oppsett av SPC-system: PRØVETAKING: Ta 5 aksler hver time (eller hver 50. del). Mål diameteren på hver med mikrometer. Registrer alle 5 verdier + beregn gjennomsnitt. KONTROLLDIAGRAM: Tegn inn gjennomsnittet for hver prøve. Midtlinje = nominell diameter eller historisk gjennomsnitt. UCL/LCL = ± 3 standardavvik (beregn fra historiske data). REAKSJONER: Grønn: Alle punkter innenfor grenser, tilfeldig mønster - fortsett produksjon. Gul: Trend eller skift observert - undersøk, vurder justering. Rød: Punkt utenfor kontrollgrenser - stopp produksjon, identifiser årsak, juster, kontroller før restart. DOKUMENTERING: Loggfør alle målinger, hendelser og tiltak. Analyser data ukentlig for trender og forbedringspotensial.',
    },
  ],
  keyTerms: [
    'toleranse',
    'nominell verdi',
    'øvre grense',
    'nedre grense',
    'ISO-toleranse',
    'skyvelær',
    'mikrometer',
    'måleklokke',
    'grensemål',
    'Go/NoGo',
    'stikkprøve',
    'SPC',
    'kontrolldiagram',
  ],
  competenceGoals: [
    'bruke måleverktøy og kontrollere at produkter er i samsvar med spesifikasjoner',
    'dokumentere og vurdere eget arbeid',
  ],
};

// ===== KAPITTEL 7.4: Lean produksjon =====
const CHAPTER_7_4: TextbookChapter = {
  id: 'tif-vg1-7-4',
  courseId: 'tif-vg1',
  chapterNumber: '7.4',
  title: 'Lean produksjon',
  description: 'Lær om Lean-filosofien, sløsing og verktøy for forbedring.',
  estimatedMinutes: 45,
  sections: [
    {
      id: 'tif-vg1-7-4-intro',
      type: 'text',
      content: `# Lean produksjon

Lean er en filosofi for å eliminere sløsing og skape maksimal verdi for kunden. Opprinnelig fra Toyota (Toyota Production System), er Lean nå brukt i industri over hele verden. I dette kapittelet lærer du grunnprinsippene og praktiske verktøy.

## Læringsmål

Etter dette kapittelet skal du kunne:
- Forklare de fem Lean-prinsippene
- Identifisere de syv former for sløsing
- Beskrive grunnleggende Lean-verktøy som 5S
- Forstå Just-In-Time-prinsippet`,
    },
    {
      id: 'tif-vg1-7-4-prinsipper',
      type: 'text',
      content: `## Lean-prinsipper

### De fem prinsippene

1. **Definer verdi** - Hva er kunden villig til å betale for?
2. **Kartlegg verdistrømmen** - Alle aktiviteter fra råvare til kunde
3. **Skap flyt** - Fjern hindringer, la arbeidet flyte
4. **Innfør pull** - Produser bare når kunden trenger det
5. **Streb mot perfeksjon** - Kontinuerlig forbedring

### Muda, Mura, Muri (3M)

Lean fokuserer på å eliminere:
- **Muda** - Sløsing (ikke-verdiskapende aktiviteter)
- **Mura** - Ujevnhet (variasjon i arbeidsmengde)
- **Muri** - Overbelastning (for mye arbeid)`,
    },
    {
      id: 'tif-vg1-7-4-slosing',
      type: 'text',
      content: `## De syv former for sløsing

| Type | Beskrivelse | Eksempel |
|------|-------------|----------|
| **Transport** | Unødvendig flytting av materialer | Deler fraktes mellom avdelinger |
| **Lager** | Mer enn nødvendig på lager | Råvarelager for et helt år |
| **Bevegelse** | Unødvendig bevegelse av mennesker | Gå for å hente verktøy |
| **Venting** | Dødtid, vente på noe | Vente på materialer |
| **Overproduksjon** | Lage mer enn kunden trenger | Produsere på lager "i tilfelle" |
| **Overbearbeiding** | Gjøre mer enn nødvendig | Polere deler som blir skjult |
| **Defekter** | Feil og omarbeid | Vrak, reparasjoner |

Noen legger til en åttende: **Uutnyttet kompetanse** - Ikke bruke ansattes kunnskap.`,
    },
    {
      id: 'tif-vg1-7-4-5s',
      type: 'text',
      content: `## 5S - Orden og renhold

**5S** er et system for å skape orden og effektivitet:

1. **Sortere (Seiri)** - Fjern det du ikke trenger
2. **Systematisere (Seiton)** - En plass til alt, alt på sin plass
3. **Skinne (Seiso)** - Rengjør arbeidsplassen
4. **Standardisere (Seiketsu)** - Lag rutiner for 1-3
5. **Sikre (Shitsuke)** - Gjør det til vane, følg opp

### Fordeler med 5S

- Redusert søketid
- Færre ulykker
- Bedre kvalitet
- Økt effektivitet
- Trivsel på arbeidsplassen

### Implementering

Start med ett område, vis resultater, spre til resten av bedriften.`,
    },
    {
      id: 'tif-vg1-7-4-ex1',
      type: 'text',
      content: `### Eksempel: 5S på en sveisestasjon

**Før 5S:**
- Verktøy spredt overalt
- Gammel sveisetråd og tomme gassbeholdere
- Skitne arbeidsbord
- Lang tid brukt på å lete etter ting

**Etter 5S:**

1. **Sortere**: Fjernet gammelt utstyr, tomme beholdere, ødelagt verktøy.
2. **Systematisere**: Verktøytavle med merkede plasser. Sveisetrykk på angitt sted.
3. **Skinne**: Rengjort bord, feid gulv, pusset utstyr.
4. **Standardisere**: Sjekkliste for daglig rydding. Foto av hvordan det skal se ut.
5. **Sikre**: Ukentlig 5S-sjekk. 5S-tavle med score.

**Resultat**: Redusert oppsettid, færre nestenulykker, stolthet i jobben.`,
    },
    {
      id: 'tif-vg1-7-4-jit',
      type: 'text',
      content: `## Just-In-Time (JIT)

**JIT** betyr å produsere og levere riktig mengde til riktig tid.

### Prinsipper

- Produser bare det som er bestilt
- Lever til riktig tid - ikke for tidlig, ikke for sent
- Minimer lager og varer i arbeid
- Korte omstillingstider

### Kanban

**Kanban** er et signalsystem for JIT:
- Kort eller signal som sier "produser mer"
- Når en beholder er tom, signaliseres etterfylling
- Begrenser varer i arbeid (WIP)

### Fordeler med JIT
- Mindre kapitalbinding i lager
- Raskere gjennomløpstid
- Mindre plass til lagring
- Feil oppdages raskere`,
    },
    {
      id: 'tif-vg1-7-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Lean** = maksimer verdi, eliminer sløsing
- Fem prinsipper: Verdi → Verdistrøm → Flyt → Pull → Perfeksjon
- **Syv sløsinger**: Transport, Lager, Bevegelse, Venting, Overproduksjon, Overbearbeiding, Defekter
- **5S**: Sortere, Systematisere, Skinne, Standardisere, Sikre
- **JIT**: Riktig mengde til riktig tid
- **Kanban**: Signalsystem for styring av produksjon
- Lean er kontinuerlig forbedring - aldri ferdig!`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-7-4-oppg1',
      number: '7.4.1',
      type: 'multiple-choice',
      task: 'Hvilken av disse er IKKE en av de syv formene for sløsing i Lean?',
      options: [
        { id: 'a', text: 'Overproduksjon', isCorrect: false },
        { id: 'b', text: 'Innovasjon', isCorrect: true },
        { id: 'c', text: 'Venting', isCorrect: false },
        { id: 'd', text: 'Defekter', isCorrect: false },
      ],
      solution: 'Innovasjon er ikke sløsing - tvert imot er det viktig for utvikling. De syv formene for sløsing er: Transport, Lager, Bevegelse, Venting, Overproduksjon, Overbearbeiding og Defekter.',
    },
    {
      id: 'tif-vg1-7-4-oppg2',
      number: '7.4.2',
      type: 'classic',
      task: 'Forklar de fem S-ene i 5S-metoden og gi et eksempel på hvert.',
      solution: '1) Sortere (Seiri): Fjern alt som ikke trengs. Eksempel: Kast ødelagte verktøy og utdatert dokumentasjon. 2) Systematisere (Seiton): En fast plass til alt. Eksempel: Verktøytavle der hvert verktøy har sin merkede plass. 3) Skinne (Seiso): Rengjør arbeidsområdet. Eksempel: Daglig feiing av gulvet og tørking av maskiner. 4) Standardisere (Seiketsu): Lag rutiner og standarder. Eksempel: Sjekkliste for daglig opprydding med foto av hvordan det skal se ut. 5) Sikre (Shitsuke): Gjør det til vane, følg opp. Eksempel: Ukentlig 5S-inspeksjon med scoring og oppfølging.',
    },
    {
      id: 'tif-vg1-7-4-oppg3',
      number: '7.4.3',
      type: 'classic',
      task: 'Identifiser tre former for sløsing på en typisk arbeidsdag i et verksted, og foreslå tiltak for å redusere dem.',
      solution: '1) BEVEGELSE: Operatør må gå til verktøyskapet som ligger langt fra arbeidsstasjonen. TILTAK: Flytt de mest brukte verktøyene til verktøytavle ved arbeidsstasjonen. 2) VENTING: Venter på at kranfører skal komme og løfte tungt emne. TILTAK: Opplæring så flere kan kjøre kran, eller investere i flere løftehjelpemidler. 3) DEFEKTER: Første sveisede del må ofte omarbeides på grunn av feil innstilling. TILTAK: Sjekkliste for sveiseparametere, prøvestykke før produksjon.',
    },
    {
      id: 'tif-vg1-7-4-oppg4',
      number: '7.4.4',
      type: 'classic',
      task: 'Hva er Just-In-Time (JIT), og hvorfor kan det være risikabelt i noen situasjoner?',
      solution: 'Just-In-Time (JIT) er en produksjonsfilosofi der man produserer og leverer nøyaktig det som trengs, når det trengs, i riktig mengde. Målet er å minimere lager og varer i arbeid. Risiko og utfordringer: 1) Leverandørproblemer: Hvis en leverandør får problemer, stopper produksjonen fordi det ikke er bufferlager. 2) Naturkatastrofer/kriser: COVID-19 og halvledermangel viste sårbarheten i JIT-kjeder. 3) Transportforstyrkelser: Blokkeringen av Suez-kanalen rammet JIT-produsenter hardt. 4) Krever høy pålitelighet i hele verdikjeden. Balanse: Mange bedrifter har lært at litt bufferlager på kritiske deler kan være fornuftig forsikring.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-7-4-oppg5',
      number: '7.4.5',
      type: 'classic',
      task: 'Du er leder for et forbedringsteam som skal innføre 5S på en maskinoperatørs arbeidsplass. Beskriv hvordan du ville gjennomført prosessen steg for steg.',
      solution: 'Steg-for-steg 5S-innføring: FORBEREDELSE: 1) Involver operatøren fra start - deres kunnskap er viktig. 2) Ta "før-bilder" for dokumentasjon. 3) Sett av tid (f.eks. en halv dag). SORTERE: 4) Gå gjennom alt på arbeidsplassen med operatøren. 5) "Trengs dette?" - behov siste 30 dager = beholde, ellers merke for fjerning. 6) Bruk rød-lapp-metode på usikre ting. SYSTEMATISERE: 7) Bestem optimal plassering for verktøy og materialer. 8) Lag visuelle markeringer (tape, tavle, skilting). 9) "En plass til alt, alt på sin plass". SKINNE: 10) Grundig rengjøring av alt. 11) Definer rengjøringsrutiner. STANDARDISERE: 12) Ta "etter-bilder" som standard. 13) Lag sjekkliste for daglig/ukentlig vedlikehold. SIKRE: 14) Planlegg oppfølging (ukentlig 5S-runde). 15) Feire suksess, vis resultatene til andre.',
    },
    {
      id: 'tif-vg1-7-4-oppg6',
      number: '7.4.6',
      type: 'classic',
      task: 'Tegn et enkelt verdistrømskart for produksjon av en metallbraketter som viser minst fem aktiviteter. Identifiser hvilke aktiviteter som er verdiskapende og hvilke som er sløsing.',
      solution: 'Verdistrømskart for metallbrakett: [Råvarelager] → Venting → [Tilskjæring] → Transport → [Bøying] → Kontroll → [Sveising] → Venting → [Lakkering] → Transport → [Ferdigvarelager] → Transport → [Kunde]. VERDISKAPENDE (det kunden betaler for): - Tilskjæring - gir formen. - Bøying - gir 3D-form. - Sveising - sammenføyer deler. - Lakkering - gir overflate og korrosjonsbeskyttelse. NØDVENDIG MEN IKKE VERDISKAPENDE: - Kontroll - nødvendig for kvalitet. - Transport internt - må gjøres, men ingen verdi. SLØSING (bør reduseres/elimineres): - Venting mellom operasjoner - ingen verdi, forlenger gjennomløpstid. - Stor råvarelager - binder kapital. - Lang transport til kunde - kan reduseres med bedre lokalisering.',
    },
  ],
  keyTerms: [
    'Lean',
    'sløsing',
    'muda',
    'verdistrøm',
    '5S',
    'sortere',
    'systematisere',
    'skinne',
    'standardisere',
    'sikre',
    'Just-In-Time',
    'JIT',
    'Kanban',
    'pull',
  ],
  competenceGoals: [
    'bruke kvalitetsstyringssystem og delta i arbeid med kontinuerlig forbedring',
    'gjøre rede for produksjonsprosesser i teknologi- og industrifag',
  ],
};

// ===== KAPITTEL 7.5: Planlegging og oppfølging =====
const CHAPTER_7_5: TextbookChapter = {
  id: 'tif-vg1-7-5',
  courseId: 'tif-vg1',
  chapterNumber: '7.5',
  title: 'Planlegging og oppfølging',
  description: 'Lær om produksjonsplanlegging, arbeidsordrer og kapasitetsberegning.',
  estimatedMinutes: 45,
  sections: [
    {
      id: 'tif-vg1-7-5-intro',
      type: 'text',
      content: `# Planlegging og oppfølging

God planlegging sikrer at riktige produkter lages til riktig tid med riktige ressurser. I dette kapittelet lærer du om hvordan produksjon planlegges og følges opp.

## Læringsmål

Etter dette kapittelet skal du kunne:
- Beskrive produksjonsplanleggingens rolle
- Lese og forstå en arbeidsordre
- Beregne kapasitet og gjennomløpstid
- Forstå prinsippene for materialplanlegging`,
    },
    {
      id: 'tif-vg1-7-5-nivaer',
      type: 'text',
      content: `## Planleggingsnivåer

### Strategisk planlegging (1-5 år)
- Investeringer i maskiner og utstyr
- Kapasitetsutvidelser
- Nye produktområder

### Taktisk planlegging (1-12 måneder)
- Produksjonsprogram
- Bemanningsplan
- Innkjøp av råvarer

### Operativ planlegging (dager-uker)
- Daglig/ukentlig produksjonsplan
- Detaljert maskinbelastning
- Ordresekvensering`,
    },
    {
      id: 'tif-vg1-7-5-ao',
      type: 'text',
      content: `## Arbeidsordre

En **arbeidsordre** er et dokument som beskriver hva som skal produseres:

### Typisk innhold

| Felt | Beskrivelse |
|------|-------------|
| Ordrenummer | Unik identifikator |
| Kunde/prosjekt | Hvem ordren er for |
| Artikkelnummer | Hvilket produkt |
| Antall | Hvor mange som skal lages |
| Leveringsdato | Når det skal være ferdig |
| Tegning/spesifikasjon | Teknisk dokumentasjon |
| Operasjonsliste | Rekkefølge av operasjoner |
| Materialiste | Nødvendige materialer |

### Arbeidsordreflyt

1. Ordre opprettes fra kundeordre
2. Materialer bestilles/plukkes
3. Produksjon gjennomføres
4. Kvalitetskontroll
5. Levering til kunde/lager
6. Ordren lukkes og dokumenteres`,
    },
    {
      id: 'tif-vg1-7-5-kapasitet',
      type: 'text',
      content: `## Kapasitet og belastning

### Kapasitet
**Kapasitet** = hvor mye som kan produseres i en gitt periode.

**Kapasitet = Tilgjengelig tid × Effektivitet**

### Eksempel

Dreiebenk tilgjengelig 8 timer/dag
Effektivitet: 85% (tid til oppsett, pauser, vedlikehold)

**Kapasitet = 8 × 0,85 = 6,8 effektive timer/dag**

### Belastning
**Belastning** = hvor mye arbeid som er planlagt.

### Utnyttelsesgrad
**Utnyttelse = Belastning / Kapasitet × 100%**

- < 80%: Ledig kapasitet
- 80-95%: Optimal utnyttelse
- > 95%: Overbelastning, risiko for forsinkelser`,
    },
    {
      id: 'tif-vg1-7-5-ex1',
      type: 'text',
      content: `### Eksempel: Kapasitetsberegning

En CNC-fres er tilgjengelig:
- 7,5 timer per skift
- 2 skift per dag
- 5 dager per uke
- Effektivitet: 80%

**Ukentlig kapasitet:**
Bruttotid = 7,5 × 2 × 5 = 75 timer
Effektiv kapasitet = 75 × 0,80 = 60 timer/uke

**Belastning denne uken:**
- Ordre A: 15 timer
- Ordre B: 25 timer
- Ordre C: 12 timer
Total belastning = 52 timer

**Utnyttelsesgrad:**
52 / 60 × 100% = 87% - God utnyttelse med margin.`,
    },
    {
      id: 'tif-vg1-7-5-mrp',
      type: 'text',
      content: `## Materialplanlegging (MRP)

**MRP (Material Requirements Planning)** beregner hva som trengs, hvor mye, og når.

### Grunnleggende logikk

1. Start med ferdig produkt og leveringsdato
2. Bryt ned i komponenter (stykkliste)
3. Trekk fra ledetid for hver operasjon
4. Beregn når materialer må være tilgjengelig
5. Sjekk lagerbeholdning
6. Generer innkjøpsordre eller produksjonsordre

### Stykkliste (BOM)

En stykkliste viser alle komponenter som inngår:
- Ferdig produkt
  - Delprodukt A (2 stk)
    - Komponent 1 (3 stk)
    - Komponent 2 (1 stk)
  - Delprodukt B (1 stk)`,
    },
    {
      id: 'tif-vg1-7-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Planleggingsnivåer: Strategisk → Taktisk → Operativ
- **Arbeidsordre** beskriver produksjonsoppdraget
- **Kapasitet** = tilgjengelig tid × effektivitet
- **Belastning** = planlagt arbeidsmengde
- **Utnyttelsesgrad** = belastning / kapasitet
- Optimal utnyttelse: 80-95%
- **MRP** beregner materialbehov ut fra produksjonsplan
- **Stykkliste** viser produktets komponenter`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-7-5-oppg1',
      number: '7.5.1',
      type: 'multiple-choice',
      task: 'En maskin har kapasitet på 100 timer per uke. Planlagt belastning er 85 timer. Hva er utnyttelsesgraden?',
      options: [
        { id: 'a', text: '65%', isCorrect: false },
        { id: 'b', text: '75%', isCorrect: false },
        { id: 'c', text: '85%', isCorrect: true },
        { id: 'd', text: '100%', isCorrect: false },
      ],
      solution: 'Utnyttelsesgrad = Belastning / Kapasitet × 100% = 85 / 100 × 100% = 85%. Dette er en god utnyttelsesgrad med noe margin.',
    },
    {
      id: 'tif-vg1-7-5-oppg2',
      number: '7.5.2',
      type: 'classic',
      task: 'Beskriv minst fem viktige felt som bør være med i en arbeidsordre.',
      solution: '1) Ordrenummer - unik identifikasjon for sporing og referanse. 2) Kunde/prosjekt - hvem ordren er for. 3) Artikkelnummer og beskrivelse - hva som skal lages. 4) Antall - hvor mange enheter som skal produseres. 5) Leveringsdato - når produktet skal være ferdig. 6) Tegning/spesifikasjon - teknisk dokumentasjon som viser dimensjoner og krav. 7) Operasjonsliste - rekkefølge av operasjoner som skal utføres. 8) Materialliste - nødvendige råvarer og komponenter.',
    },
    {
      id: 'tif-vg1-7-5-oppg3',
      number: '7.5.3',
      type: 'classic',
      task: 'En sveisestasjon har følgende data: 7 timer per dag, 5 dager per uke, effektivitet 75%. Beregn ukentlig kapasitet.',
      solution: 'Bruttotid per uke = 7 timer/dag × 5 dager = 35 timer. Effektiv kapasitet = Bruttotid × Effektivitet = 35 timer × 0,75 = 26,25 timer per uke. Sveisestasjonen har altså en effektiv kapasitet på 26,25 timer per uke. Resten av tiden går til oppsett, pauser, vedlikehold og annen ikke-produktiv tid.',
    },
    {
      id: 'tif-vg1-7-5-oppg4',
      number: '7.5.4',
      type: 'classic',
      task: 'Forklar hva MRP (Material Requirements Planning) gjør og hvorfor det er nyttig.',
      solution: 'MRP (Material Requirements Planning) er et system som beregner materialbehov basert på produksjonsplanen. Det starter med hva som skal leveres og når, bryter ned produktet i komponenter via stykklister, og beregner bakover i tid når materialer må bestilles og produseres. Nyttig fordi: 1) Sikrer at materialer er tilgjengelige når de trengs. 2) Reduserer lagerbinding - ikke for tidlig innkjøp. 3) Unngår produksjonsstopp på grunn av materialmangel. 4) Automatiserer komplekse beregninger. 5) Gir oversikt over kommende behov til innkjøp.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-7-5-oppg5',
      number: '7.5.5',
      type: 'classic',
      task: 'Du har to dreiebenker med kapasitet 40 timer/uke hver. Denne uken har du ordrer på totalt 95 timer dreiearbeid. Vurder situasjonen og foreslå løsninger.',
      solution: 'Vurdering: Total kapasitet = 2 × 40 = 80 timer. Belastning = 95 timer. Utnyttelse = 95/80 = 119% - overbelastet med 15 timer! Løsningsforslag: 1) Overtid - kjør ekstra skift eller helgearbeid (15 timer ekstra). 2) Outsourcing - sett ut noe arbeid til underleverandør. 3) Prioriter - hvilke ordrer er mest kritiske? Utsett mindre viktige. 4) Effektivisering - kan noe gjøres raskere med annen metode? 5) Forhandle leveringstid - kan kunden akseptere forsinket levering? 6) Midlertidig kapasitet - er det mulig å leie/låne maskin? Anbefaling: Kommuniser situasjonen til ledelse og kunder tidlig.',
    },
    {
      id: 'tif-vg1-7-5-oppg6',
      number: '7.5.6',
      type: 'classic',
      task: 'Et produkt består av: 2 stk del A (ledetid 3 dager), 1 stk del B (ledetid 2 dager), og montering tar 1 dag. Kunden vil ha produktet ferdig fredag. Når må du starte de ulike aktivitetene?',
      solution: 'Bakoverplanlegging fra fredag: FREDAG: Levering til kunde. TORSDAG: Montering (1 dag). Del A og B må være klare ved start torsdag morgen. DEL A (ledetid 3 dager): Må starte 3 dager før torsdag = MANDAG. DEL B (ledetid 2 dager): Må starte 2 dager før torsdag = TIRSDAG. OPPSUMMERING: - Mandag: Start produksjon av del A. - Tirsdag: Start produksjon av del B. - Torsdag: Montering (både A og B er ferdige). - Fredag: Levering til kunde. VIKTIG: Materialer til del A og B må være tilgjengelige før oppstartsdagene. Legg inn buffertid hvis mulig.',
    },
  ],
  keyTerms: [
    'produksjonsplanlegging',
    'strategisk planlegging',
    'taktisk planlegging',
    'operativ planlegging',
    'arbeidsordre',
    'kapasitet',
    'belastning',
    'utnyttelsesgrad',
    'effektivitet',
    'MRP',
    'stykkliste',
    'ledetid',
  ],
  competenceGoals: [
    'planlegge og gjennomføre arbeidsoppgaver i henhold til arbeidsbeskrivelser',
    'dokumentere og vurdere eget arbeid',
  ],
};

// ===== KAPITTEL 7.6: Dokumentasjon =====
const CHAPTER_7_6: TextbookChapter = {
  id: 'tif-vg1-7-6',
  courseId: 'tif-vg1',
  chapterNumber: '7.6',
  title: 'Dokumentasjon',
  description: 'Lær om teknisk dokumentasjon, sporbarhet og digitale systemer.',
  estimatedMinutes: 45,
  sections: [
    {
      id: 'tif-vg1-7-6-intro',
      type: 'text',
      content: `# Dokumentasjon

God dokumentasjon er avgjørende for kvalitet, sporbarhet og kunnskapsdeling. I dette kapittelet lærer du om ulike typer dokumentasjon og hvordan den brukes i moderne industri.

## Læringsmål

Etter dette kapittelet skal du kunne:
- Forklare hvorfor dokumentasjon er viktig
- Beskrive ulike typer teknisk dokumentasjon
- Forstå krav til sporbarhet
- Kjenne til digitale dokumentasjonssystemer`,
    },
    {
      id: 'tif-vg1-7-6-hvorfor',
      type: 'text',
      content: `## Hvorfor dokumentere?

### Kvalitetssikring
- Bevise at arbeid er utført riktig
- Gi grunnlag for forbedring
- Oppfylle kundekrav og standarder

### Sporbarhet
- Kunne spore produkter tilbake til råmaterialer
- Finne årsak ved problemer
- Dokumentere hvem som gjorde hva

### Kunnskapsdeling
- Overføre kunnskap mellom skift/ansatte
- Bevare kompetanse når folk slutter
- Standardisere beste praksis

### Lovkrav
- Mange bransjer har dokumentasjonskrav
- Nødvendig for sertifisering
- Beskyttelse ved ansvarsspørsmål`,
    },
    {
      id: 'tif-vg1-7-6-typer',
      type: 'text',
      content: `## Typer dokumentasjon

### Teknisk dokumentasjon

| Type | Innhold | Bruk |
|------|---------|------|
| Arbeidstegning | Mål, toleranser, materialer | Produksjon |
| Stykkliste (BOM) | Komponenter og mengder | Innkjøp, montering |
| Arbeidsinstruks | Steg-for-steg veiledning | Operatører |
| Kontrollskjema | Sjekkliste, måleresultater | Kvalitetskontroll |
| Sertifikat | Materialbevis, godkjenninger | Kunder, myndigheter |

### Produksjonsdokumentasjon

- Arbeidsordrer
- Tidsregistreringer
- Avviksrapporter
- Vedlikeholdslogg
- Inspeksjonsrapporter`,
    },
    {
      id: 'tif-vg1-7-6-sporbarhet',
      type: 'text',
      content: `## Sporbarhet

**Sporbarhet** = evnen til å følge et produkts historie gjennom hele livsløpet.

### Fremover-sporbarhet
Fra råmateriale til ferdig produkt:
- Hvor ble dette stålet brukt?
- Hvilke produkter inneholder denne komponenten?

### Bakover-sporbarhet
Fra ferdig produkt tilbake til opprinnelse:
- Hvor kom dette materialet fra?
- Hvem sveiste denne sømmen?
- Når ble kontrollen utført?

### Krav i ulike bransjer

| Bransje | Sporbarhetskrav |
|---------|-----------------|
| Bil | Kritiske komponenter |
| Fly | Alt, 100% |
| Mat | Fra gård til butikk |
| Medisin | Alle ingredienser og prosesser |
| Olje/gass | Sveisinger, materialer |`,
    },
    {
      id: 'tif-vg1-7-6-ex1',
      type: 'text',
      content: `### Eksempel: Sporbarhet på sveisejobb

Ved sveising av rørledning til offshorebruk kreves full sporbarhet:

**Dokumentasjon som lages:**

1. **Materialsertifikat (EN 10204 3.1)**: Bevis på stålets egenskaper fra stålverket
2. **Sveiseprosedyre (WPS)**: Godkjent prosedyre for denne sveisejobben
3. **Sveisersertifikat**: Bevis på at sveiseren er kvalifisert
4. **Sveiselogg**: Dato, sveiser-ID, posisjon, parametere
5. **NDT-rapport**: Røntgen eller ultralyd av sømmen
6. **Visuell inspeksjon**: Rapport fra inspektør

Alt knyttes sammen med unike ID-nummer slik at enhver sveisesøm kan spores tilbake.`,
    },
    {
      id: 'tif-vg1-7-6-digital',
      type: 'text',
      content: `## Digitale systemer

### ERP (Enterprise Resource Planning)
Integrert system for hele bedriften:
- Ordre og faktura
- Lager og innkjøp
- Produksjonsplanlegging
- Økonomi
- Eksempler: SAP, Microsoft Dynamics, Visma

### MES (Manufacturing Execution System)
System for produksjonsstyring:
- Sanntidsdata fra produksjonen
- Sporbarhet
- Kvalitetsregistreringer
- OEE-beregninger

### PLM (Product Lifecycle Management)
Håndterer produktdata gjennom livsløpet:
- Tegninger og 3D-modeller
- Stykklister
- Endringshåndtering
- Versjonshistorikk`,
    },
    {
      id: 'tif-vg1-7-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Dokumentasjon er viktig for kvalitet, sporbarhet og kunnskap
- Teknisk dokumentasjon: Tegninger, stykklister, instrukser, sertifikater
- **Sporbarhet** = følge produktets historie fra start til slutt
- Sporbarhetskrav varierer etter bransje
- Digitale systemer: **ERP** (hele bedriften), **MES** (produksjon), **PLM** (produktdata)
- God dokumentasjon beskytter både bedrift og kunde`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-7-6-oppg1',
      number: '7.6.1',
      type: 'multiple-choice',
      task: 'Hva menes med "bakover-sporbarhet"?',
      options: [
        { id: 'a', text: 'Å se fremover i produksjonsplanen', isCorrect: false },
        { id: 'b', text: 'Å spore fra ferdig produkt tilbake til råmaterialer', isCorrect: true },
        { id: 'c', text: 'Å gå baklengs i monteringsrekkefølgen', isCorrect: false },
        { id: 'd', text: 'Å lage dokumentasjon i etterkant', isCorrect: false },
      ],
      solution: 'Bakover-sporbarhet betyr å kunne følge et ferdig produkt tilbake til dets opprinnelse - hvilke råmaterialer, hvem som jobbet med det, hvilke prosesser det gikk gjennom. Dette er viktig ved feil eller reklamasjoner.',
    },
    {
      id: 'tif-vg1-7-6-oppg2',
      number: '7.6.2',
      type: 'classic',
      task: 'Nevn tre grunner til at god dokumentasjon er viktig i produksjonsbedrifter.',
      solution: '1) Kvalitetssikring: Dokumentasjon beviser at arbeid er utført riktig, gir data for forbedring, og oppfyller kundekrav og standarder som ISO 9001. 2) Sporbarhet: Ved problemer kan man finne årsaken ved å spore tilbake til materialer, operatører og prosesser. Viktig for å begrense omfanget ved tilbakekalling. 3) Kunnskapsdeling: Dokumenterte prosedyrer og instrukser sikrer at kunnskap bevares og overføres, uavhengig av personavhengighet. Nye ansatte kan læres opp effektivt.',
    },
    {
      id: 'tif-vg1-7-6-oppg3',
      number: '7.6.3',
      type: 'classic',
      task: 'Hva er forskjellen mellom ERP og MES-systemer?',
      solution: 'ERP (Enterprise Resource Planning): Et overordnet system for hele bedriften som håndterer forretningsprosesser - ordre, fakturering, regnskap, innkjøp, lager, HR. Ser bedriften fra et økonomisk og logistisk perspektiv. Eksempler: SAP, Visma. MES (Manufacturing Execution System): Et system fokusert på produksjonsgulvet som gir sanntidsdata fra maskiner og prosesser. Håndterer sporbarhet, kvalitetsregistreringer, OEE og detaljert produksjonsstyring. Mer operativt fokus enn ERP. I mange bedrifter er ERP og MES integrert slik at data flyter mellom systemene.',
    },
    {
      id: 'tif-vg1-7-6-oppg4',
      number: '7.6.4',
      type: 'classic',
      task: 'Forklar hvorfor flybransjen har strengere sporbarhetskrav enn mange andre bransjer.',
      solution: 'Flybransjen har ekstremt strenge sporbarhetskrav fordi: 1) Konsekvensene av feil er katastrofale - liv står på spill. 2) Fly består av hundretusenvis av deler som alle må fungere. 3) Komponenter må kunne spores gjennom hele levetiden (20-30+ år). 4) Ved hendelser må man kunne identifisere alle fly med samme komponenter. 5) Lovpålagt av luftfartsmyndigheter (FAA, EASA). 6) Falske/ukjente deler må kunne avsløres. Hver bolt, hver sveis, hvert materialbatch - alt må dokumenteres og kunne spores. Dette kalles ofte "luftfartskvalitet" og er referansen for høyeste krav.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-7-6-oppg5',
      number: '7.6.5',
      type: 'classic',
      task: 'Du produserer en metallkonstruksjon for en kunde. Lag en liste over dokumentasjon du bør lage og oppbevare for å sikre sporbarhet.',
      solution: 'Dokumentasjon for metallkonstruksjon: 1) Arbeidsordre med ordrenummer, kundeinformasjon, spesifikasjoner. 2) Tegninger/arbeidstegninger med revisjonsnummer. 3) Materialsertifikater (EN 10204) for alt stål og sveisematerialer. 4) Tilskjæringslogg - merking av plater med chargenummer. 5) Sveiseprosedyrer (WPS) for jobben. 6) Sveiserlogg - hvem sveiset hva, når, med hvilke parametere. 7) Sveisersertifikater for de involverte sveiserne. 8) Kontrollskjemaer - dimensjonskontroll, visuell inspeksjon. 9) NDT-rapporter hvis påkrevd (røntgen, ultralyd). 10) Ferdigmelding og eventuelle avvik. 11) Pakkeliste og leveringsbekreftelse. Alt kobles med ordrenummer og arkiveres i avtalt tid.',
    },
    {
      id: 'tif-vg1-7-6-oppg6',
      number: '7.6.6',
      type: 'classic',
      task: 'En kunde reklamerer på et produkt dere leverte for 6 måneder siden. Forklar hvordan god dokumentasjon hjelper deg å håndtere reklamasjonen.',
      solution: 'Håndtering av reklamasjon med dokumentasjon: 1) IDENTIFISERE: Finn ordrenummeret fra kundens faktura/følgeseddel. 2) SPORE TILBAKE: Med ordrenummeret kan du finne all dokumentasjon - tegninger, materialsertifikater, hvem som produserte, kontrollskjemaer. 3) ANALYSERE: Gå gjennom dokumentasjonen - ble alt gjort riktig? Er det avvik registrert? Hva viser kontrollmålingene? 4) FINNE ÅRSAK: Var det materialet? Feil i produksjon? Kontroll som sviktet? Skade i transport? 5) AVGRENSE: Ble samme materiale/metode brukt på andre ordre? Må flere produkter tilbakekalles? 6) KORRIGERE: Iverksett tiltak for å hindre gjentakelse. 7) DOKUMENTERE: Skriv reklamasjonsrapport med funn og tiltak. Uten god dokumentasjon ville du måttet gjette - nå har du fakta.',
    },
  ],
  keyTerms: [
    'dokumentasjon',
    'sporbarhet',
    'fremover-sporbarhet',
    'bakover-sporbarhet',
    'materialsertifikat',
    'stykkliste',
    'arbeidsinstruks',
    'kontrollskjema',
    'ERP',
    'MES',
    'PLM',
  ],
  competenceGoals: [
    'dokumentere og vurdere eget arbeid',
    'bruke kvalitetsstyringssystem og delta i arbeid med kontinuerlig forbedring',
  ],
};

// ===== KAPITTEL 7.7: Feilsøking og problemløsning =====
const CHAPTER_7_7: TextbookChapter = {
  id: 'tif-vg1-7-7',
  courseId: 'tif-vg1',
  chapterNumber: '7.7',
  title: 'Feilsøking og problemløsning',
  description: 'Lær systematiske metoder for å finne og løse problemer.',
  estimatedMinutes: 45,
  sections: [
    {
      id: 'tif-vg1-7-7-intro',
      type: 'text',
      content: `# Feilsøking og problemløsning

Evnen til å finne og løse problemer er avgjørende i industrien. I dette kapittelet lærer du systematiske metoder for feilsøking og problemløsning som hjelper deg å jobbe effektivt.

## Læringsmål

Etter dette kapittelet skal du kunne:
- Beskrive en systematisk feilsøkingsprosess
- Bruke verktøy for rotårsaksanalyse
- Anvende 5 Hvorfor-metoden
- Dokumentere feilsøking og løsninger`,
    },
    {
      id: 'tif-vg1-7-7-prosess',
      type: 'text',
      content: `## Systematisk feilsøking

### Steg-for-steg tilnærming

1. **Definer problemet**
   - Hva er symptomet?
   - Når oppstod det?
   - Hvor skjer det?
   - Hvem er berørt?

2. **Samle informasjon**
   - Hva har endret seg?
   - Har det skjedd før?
   - Hva sier data/målinger?

3. **Analyser mulige årsaker**
   - Brainstorm mulige årsaker
   - Bruk strukturerte metoder

4. **Test hypoteser**
   - Start med mest sannsynlig årsak
   - Test én ting om gangen
   - Observer resultatet

5. **Implementer løsning**
   - Fiks problemet
   - Verifiser at det fungerer
   - Dokumenter løsningen`,
    },
    {
      id: 'tif-vg1-7-7-5hvorfor',
      type: 'text',
      content: `## 5 Hvorfor-metoden

**5 Hvorfor** er en enkel teknikk for å finne rotårsaken ved å spørre "hvorfor?" gjentatte ganger.

### Eksempel: Maskin stanset

**Problem**: CNC-maskinen stanset midt i produksjonen.

1. **Hvorfor stanset maskinen?** → Motoren overopphetet.
2. **Hvorfor overopphetet motoren?** → Kjølevæsken sirkulerte ikke.
3. **Hvorfor sirkulerte ikke kjølevæsken?** → Pumpen fungerte ikke.
4. **Hvorfor fungerte ikke pumpen?** → Filteret var tett.
5. **Hvorfor var filteret tett?** → Filteret hadde ikke blitt byttet på lenge.

**Rotårsak**: Manglende vedlikeholdsrutine for filterbytte.

**Tiltak**: Innfør filterbytte i vedlikeholdsplan, sett opp påminnelse.`,
    },
    {
      id: 'tif-vg1-7-7-fiskeben',
      type: 'text',
      content: `## Fiskebensdiagram (Ishikawa)

Et **fiskebensdiagram** strukturerer mulige årsaker i kategorier:

### De 6 M-ene

| Kategori | Spørsmål |
|----------|----------|
| **Mennesker** | Opplæring? Ferdigheter? Motivasjon? |
| **Maskiner** | Vedlikehold? Slitasje? Innstillinger? |
| **Materialer** | Kvalitet? Spesifikasjoner? Leverandør? |
| **Metoder** | Prosedyrer? Instrukser? Beste praksis? |
| **Miljø** | Temperatur? Renhet? Belysning? |
| **Målinger** | Måleutstyr? Kalibrering? |

### Slik brukes det

1. Skriv problemet i "fiskens hode"
2. Tegn kategorier som "bein"
3. Brainstorm årsaker under hver kategori
4. Analyser hvilke som er mest sannsynlige`,
    },
    {
      id: 'tif-vg1-7-7-ex1',
      type: 'text',
      content: `### Eksempel: Feilsøking på sveiseproblem

**Problem**: Porøsitet i sveisesøm

**Fiskebensanalyse:**

- **Mennesker**: Sveiseren holder for lang lysbue
- **Maskiner**: Feil gassflow, tilstoppet dyse
- **Materialer**: Fuktighet i tråd, olje på arbeidsstykket
- **Metoder**: Feil sveiseprosedyre, for høy hastighet
- **Miljø**: Trekk i hallen, høy luftfuktighet
- **Målinger**: Gassflowmeter ukalibrert

**Undersøkelse viste**: Gassflowmeter viste 15 l/min, men faktisk flow var 8 l/min (ukalibrert).

**Løsning**: Kalibrere gassflowmeter, øke innstilt verdi til 18 l/min for å få faktisk 15 l/min.`,
    },
    {
      id: 'tif-vg1-7-7-dokumentasjon',
      type: 'text',
      content: `## Dokumentering av problemløsning

### Avviksrapport

En avviksrapport bør inneholde:
1. **Beskrivelse** av avviket
2. **Strakstiltak** - hva ble gjort umiddelbart
3. **Rotårsaksanalyse** - hvorfor skjedde det
4. **Korrigerende tiltak** - hva gjøres for å fikse
5. **Forebyggende tiltak** - hvordan hindre gjentakelse
6. **Oppfølging** - verifisering at tiltak virker

### Læringspunkter

- Del funnene med kollegaer
- Oppdater prosedyrer ved behov
- Legg til i opplæringsmateriell
- Overfør til lignende prosesser`,
    },
    {
      id: 'tif-vg1-7-7-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Systematisk feilsøking: Definer → Samle info → Analyser → Test → Løs
- **5 Hvorfor**: Spør "hvorfor" gjentatte ganger for å finne rotårsak
- **Fiskebensdiagram**: Strukturer årsaker i 6 M-kategorier
- Test én ting om gangen når du feilsøker
- **Dokumenter** problem, analyse og løsning
- Del læringspunkter for å hindre gjentakelse
- Forebyggende tiltak er viktigere enn brannslukking`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-7-7-oppg1',
      number: '7.7.1',
      type: 'multiple-choice',
      task: 'Hva er hovedhensikten med "5 Hvorfor"-metoden?',
      options: [
        { id: 'a', text: 'Å finne fem ulike løsninger på et problem', isCorrect: false },
        { id: 'b', text: 'Å finne rotårsaken til et problem', isCorrect: true },
        { id: 'c', text: 'Å spørre fem personer om råd', isCorrect: false },
        { id: 'd', text: 'Å løse problemet innen fem minutter', isCorrect: false },
      ],
      solution: '5 Hvorfor-metoden brukes til å finne rotårsaken til et problem ved å spørre "hvorfor" gjentatte ganger. Ved å grave dypere enn det synlige symptomet, finner man den egentlige årsaken som må løses.',
    },
    {
      id: 'tif-vg1-7-7-oppg2',
      number: '7.7.2',
      type: 'classic',
      task: 'Bruk 5 Hvorfor-metoden på dette problemet: En sveis sprekker under belastningstest.',
      solution: '1) Hvorfor sprakk sveisen? → Sveisen hadde dårlig innbrenning/smeltet ikke ordentlig sammen. 2) Hvorfor var innbrenningen dårlig? → Sveiseren kjørte for fort. 3) Hvorfor kjørte sveiseren for fort? → Han visste ikke riktig hastighet for materialet. 4) Hvorfor visste han ikke riktig hastighet? → Han hadde ikke fått opplæring på dette materialet. 5) Hvorfor hadde han ikke fått opplæring? → Det mangler system for materialkvalifisering av sveisere. ROTÅRSAK: Manglende opplæringssystem. TILTAK: Innfør kvalifiseringsprogram der sveisere må godkjennes for nye materialer.',
    },
    {
      id: 'tif-vg1-7-7-oppg3',
      number: '7.7.3',
      type: 'classic',
      task: 'Forklar de 6 M-ene i fiskebensdiagrammet og hva slags årsaker du ser etter i hver kategori.',
      solution: '1) MENNESKER: Årsaker relatert til operatører - opplæring, ferdigheter, konsentrasjon, kommunikasjon, motivasjon. 2) MASKINER: Årsaker relatert til utstyr - vedlikehold, slitasje, kalibrering, innstillinger, alder. 3) MATERIALER: Årsaker relatert til råvarer og komponenter - kvalitet, spesifikasjoner, lagring, leverandør, variasjon. 4) METODER: Årsaker relatert til prosedyrer - arbeidsinstrukser, beste praksis, rekkefølge, parametere. 5) MILJØ: Årsaker relatert til omgivelser - temperatur, fuktighet, renhet, belysning, støy, trekk. 6) MÅLINGER: Årsaker relatert til kontroll - måleutstyr, kalibrering, måleteknikk, definisjoner.',
    },
    {
      id: 'tif-vg1-7-7-oppg4',
      number: '7.7.4',
      type: 'classic',
      task: 'Hvorfor er det viktig å teste bare én ting om gangen under feilsøking?',
      solution: 'Hvis du endrer flere ting samtidig og problemet løses, vet du ikke hvilken endring som faktisk løste det. Kanskje endret du noe unødvendig, eller kanskje den ene endringen introduserte et nytt problem som tilfeldigvis ble maskert av den andre. Ved å teste én ting om gangen: 1) Du vet nøyaktig hva som løste problemet. 2) Du unngår å gjøre unødvendige endringer. 3) Du kan reversere hvis endringen ikke virket eller gjorde ting verre. 4) Du bygger kunnskap om årsak-virkning. 5) Du kan dokumentere nøyaktig hva løsningen var.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-7-7-oppg5',
      number: '7.7.5',
      type: 'classic',
      task: 'En dreiebenk produserer deler med diameter 0,5 mm større enn spesifisert. Lag et enkelt fiskebensdiagram med minst to årsaker i hver av de 6 M-kategoriene.',
      solution: 'Fiskebensdiagram - Problem: Deler 0,5 mm for store. MENNESKER: 1) Feil avlesning av mål, 2) Feil programmering. MASKINER: 1) Slitasje i spindellager (spill), 2) Verktøyslitasje kompenseres ikke. MATERIALER: 1) Materialets hardhet varierer, 2) Feil råmaterialdiameter. METODER: 1) Feil skjæreparametere, 2) Manglende første-bit-kontroll. MILJØ: 1) Temperaturendringer (materialutvidelse), 2) Vibrasjoner fra nærliggende utstyr. MÅLINGER: 1) Ukalibrert mikrometer, 2) Måler på feil sted. NESTE STEG: Sjekk først måleutstyret, deretter verktøyslitasje, deretter maskinspill.',
    },
    {
      id: 'tif-vg1-7-7-oppg6',
      number: '7.7.6',
      type: 'classic',
      task: 'Du har løst et gjentakende problem på en produksjonslinje. Beskriv hvordan du ville dokumentert problemet og løsningen for å sikre at det ikke gjentar seg og at andre kan lære av det.',
      solution: 'Dokumentasjon av problemløsning: 1) AVVIKSRAPPORT: Beskrivelse: Hva var problemet, når oppstod det, omfang (antall berørte produkter). Strakstiltak: Hva ble gjort umiddelbart (stopp produksjon, sortere deler osv.). 2) ROTÅRSAKSANALYSE: Dokumenter 5 Hvorfor-analysen eller fiskebensdiagrammet. Vis bevis for konklusjonen (målinger, observasjoner). 3) KORRIGERENDE TILTAK: Hva ble gjort for å fjerne årsaken. Hvem gjorde det, når, verifisering at det virker. 4) FOREBYGGENDE TILTAK: Endringer i prosedyrer, opplæring, vedlikeholdsplan, design. Sørg for at samme feil ikke kan skje igjen. 5) DELING: Presentere på skiftmøte eller tavlemøte. Oppdatere arbeidsinstrukser. Legge i opplæringsmodul for nyansatte. Registrere i avviksdatabase for statistikk og trendanalyse.',
    },
  ],
  keyTerms: [
    'feilsøking',
    'problemløsning',
    'rotårsak',
    '5 Hvorfor',
    'fiskebensdiagram',
    'Ishikawa',
    '6 M',
    'systematisk',
    'avviksrapport',
    'korrigerende tiltak',
    'forebyggende tiltak',
  ],
  competenceGoals: [
    'bruke kvalitetsstyringssystem og delta i arbeid med kontinuerlig forbedring',
    'dokumentere og vurdere eget arbeid',
  ],
};

// Eksporter alle kapitler som én samlet array
export const TIF_VG1_DEL7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_7_1,
  CHAPTER_7_2,
  CHAPTER_7_3,
  CHAPTER_7_4,
  CHAPTER_7_5,
  CHAPTER_7_6,
  CHAPTER_7_7,
];
