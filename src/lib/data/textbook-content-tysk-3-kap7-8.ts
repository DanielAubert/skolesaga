/* eslint-disable */
// @ts-nocheck
/**
 * Tysk Nivå 3 - Kapittel 7-8
 * Wirtschaft und Politik, Medien und Journalismus
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: Die deutsche Wirtschaft
// ============================================================================

export const CHAPTER_TYSK_3_7_1: TextbookChapter = {
  id: 'tysk-3-7-1',
  courseId: 'tysk-3',
  chapterNumber: '7.1',
  title: 'Die deutsche Wirtschaft',
  subtitle: 'Tysk økonomi i dybden',
  description: 'Lær om tysk økonomi, Mittelstand, eksportindustri og økonomiske begreper.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstå hovedtrekkene i tysk økonomi',
    'kjenne til Mittelstand og eksportindustrien',
    'bruke økonomisk fagspråk på tysk',
  ],
  content: [
    {
      id: 'tysk-3-7-1-intro',
      type: 'text',
      content: `## Die deutsche Wirtschaft

Tyskland er Europas største økonomi og verdens fjerde største. Landet er kjent for sin sterke industri, høye eksport og den såkalte "Mittelstand" - de mellomstore familiebedriftene som utgjør ryggraden i økonomien.

**Nøkkeltall (2024):**
- BNP: ca. 4,2 billioner euro
- Eksportverdi: over 1,5 billioner euro
- Arbeidsløshet: ca. 5-6%
- Viktigste handelspartnere: USA, Kina, Frankrike, Nederland

Tyskland kalles ofte "Exportweltmeister" (eksportverdensmester) på grunn av sin enorme eksport av biler, maskiner og kjemiske produkter.`,
    },
    {
      id: 'tysk-3-7-1-def-1',
      type: 'definition',
      title: 'Vokabular: Wirtschaft',
      content: `**Økonomiske grunnbegreper:**

| Tysk | Norsk |
|------|-------|
| die Wirtschaft | økonomi |
| das Bruttoinlandsprodukt (BIP) | bruttonasjonalprodukt (BNP) |
| der Export | eksport |
| der Import | import |
| die Handelsbilanz | handelsbalanse |
| das Unternehmen | bedrift |
| der Umsatz | omsetning |
| der Gewinn | fortjeneste |
| der Verlust | tap |
| die Arbeitslosigkeit | arbeidsløshet |
| das Wachstum | vekst |
| die Inflation | inflasjon |`,
    },
    {
      id: 'tysk-3-7-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Wirtschaftsnachrichten lesen',
      problem: `Les denne økonomiske nyheten og svar på spørsmålene:

"Die deutsche Wirtschaft ist im dritten Quartal um 0,3 Prozent gewachsen. Besonders der Export von Maschinen und Fahrzeugen hat zum Wachstum beigetragen. Die Arbeitslosenquote liegt bei 5,7 Prozent. Experten erwarten für das nächste Jahr ein Wachstum von etwa 1,5 Prozent."

a) Hvor mye vokste økonomien i tredje kvartal?
b) Hvilke sektorer bidro mest til veksten?
c) Hva er arbeidsløshetsprosenten?`,
      solution: `a) Økonomien vokste med 0,3 prosent (um 0,3 Prozent gewachsen).

b) Eksport av maskiner og kjøretøy (Maschinen und Fahrzeuge) bidro mest til veksten.

c) Arbeidsløshetsprosenten ligger på 5,7 prosent (die Arbeitslosenquote liegt bei 5,7 Prozent).

**Språktips:**
- "ist gewachsen" = har vokst (perfektum av wachsen)
- "beitragen zu" = bidra til
- "die Quote" = prosentsats/rate`,
    },
    {
      id: 'tysk-3-7-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-7-1-ex-1',
        number: '7.1.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Økonomien vokser med 2 prosent.', solution: 'Die Wirtschaft wächst um 2 Prozent.', answer: 'Die Wirtschaft wächst um 2 Prozent' },
          { label: 'b', task: 'Arbeidsløshet er et stort problem.', solution: 'Arbeitslosigkeit ist ein großes Problem.', answer: 'Arbeitslosigkeit ist ein großes Problem' },
          { label: 'c', task: 'Bedriften har høy omsetning.', solution: 'Das Unternehmen hat einen hohen Umsatz.', answer: 'Das Unternehmen hat einen hohen Umsatz' },
        ],
        solution: 'a) Die Wirtschaft wächst um 2 Prozent, b) Arbeitslosigkeit ist ein großes Problem, c) Das Unternehmen hat einen hohen Umsatz',
        hints: ['wachsen = å vokse', 'høy = hoch (bøyes: hohen i akkusativ)'],
      },
    },
    {
      id: 'tysk-3-7-1-text-2',
      type: 'text',
      content: `## Der Mittelstand

**Mittelstand** er et unikt tysk fenomen - de mellomstore, ofte familiedrevne bedriftene som utgjør ryggraden i tysk økonomi. Disse bedriftene er ofte "hidden champions" - verdensledende i sine nisjer uten å være kjent for allmennheten.

**Kjennetegn på Mittelstand:**
- Ofte familieeid over flere generasjoner
- Sterk fokus på kvalitet og innovasjon
- Langsiktig tenkning fremfor kvartalsresultater
- Tett forhold til lokalsamfunnet
- Høy grad av spesialisering

**Eksempler på Mittelstand-bedrifter:**
- Würth (skruer og festemidler)
- Stihl (motorsager)
- Haribo (godteri)
- Miele (hvitevarer)`,
    },
    {
      id: 'tysk-3-7-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Ein Mittelstand-Unternehmen',
      problem: `Les bedriftspresentasjonen:

"Die Firma Müller & Sohn wurde 1923 von Hans Müller gegründet. Heute wird das Unternehmen in der vierten Generation von seiner Urenkelin Maria geführt. Mit 450 Mitarbeitern produziert die Firma Präzisionswerkzeuge für die Automobilindustrie. 60 Prozent der Produktion wird exportiert, hauptsächlich nach China und in die USA."

a) Når ble firmaet grunnlagt?
b) Hvem leder bedriften i dag?
c) Hvor stor del av produksjonen eksporteres?`,
      solution: `a) Firmaet ble grunnlagt i 1923 (wurde 1923 gegründet).

b) Bedriften ledes i dag av Maria, grunnleggerens oldebarn (seine Urenkelin Maria), i fjerde generasjon.

c) 60 prosent av produksjonen eksporteres (60 Prozent der Produktion wird exportiert).

**Grammatikk:** Legg merke til passivkonstruksjonene:
- "wurde gegründet" = ble grunnlagt (preteritum passiv)
- "wird geführt" = ledes (presens passiv)
- "wird exportiert" = eksporteres (presens passiv)`,
    },
    {
      id: 'tysk-3-7-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-7-1-ex-2',
        number: '7.1.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig ord:',
        subTasks: [
          { label: 'a', task: 'Das Unternehmen wurde von meinem Grossvater ___ (grunnlagt).', solution: 'gegründet', answer: 'gegründet' },
          { label: 'b', task: 'Die Firma hat 200 ___ (ansatte).', solution: 'Mitarbeiter', answer: 'Mitarbeiter' },
          { label: 'c', task: 'Wir ___ unsere Produkte in 50 Länder (eksporterer).', solution: 'exportieren', answer: 'exportieren' },
          { label: 'd', task: 'Die ___ (kvaliteten) unserer Produkte ist sehr hoch.', solution: 'Qualität', answer: 'Qualität' },
        ],
        solution: 'a) gegründet, b) Mitarbeiter, c) exportieren, d) Qualität',
        hints: ['grunden = å grunnlegge', 'Mitarbeiter = medarbeider/ansatt'],
      },
    },
    {
      id: 'tysk-3-7-1-text-3',
      type: 'text',
      content: `## Deutsche Industrie

Tysk industri er verdenskjent for kvalitet og presisjon. De viktigste industrisektorene er:

**Bilindustrien (Automobilindustrie):**
- Volkswagen, BMW, Mercedes-Benz, Audi, Porsche
- Over 800 000 ansatte
- Største eksportsektor

**Maskinindustri (Maschinenbau):**
- Siemens, Bosch, ThyssenKrupp
- Produksjonsroboter, verktøy, landbruksmaskiner

**Kjemisk industri (Chemische Industrie):**
- BASF, Bayer, Henkel
- Legemidler, plastikk, kosmetikk

**Elektroteknikk (Elektrotechnik):**
- Siemens, Bosch, Infineon
- Elektronikk, halvledere`,
    },
    {
      id: 'tysk-3-7-1-def-2',
      type: 'definition',
      title: 'Vokabular: Industrie',
      content: `**Industriord:**

| Tysk | Norsk |
|------|-------|
| die Industrie | industri |
| die Fabrik | fabrikk |
| die Produktion | produksjon |
| herstellen | å produsere |
| der Hersteller | produsent |
| das Werk | fabrikk/verk |
| die Lieferkette | forsyningskjede |
| der Zulieferer | underleverandør |
| die Automatisierung | automatisering |
| die Digitalisierung | digitalisering |
| der Roboter | robot |
| die Qualität | kvalitet |`,
    },
    {
      id: 'tysk-3-7-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Industriestandort Deutschland',
      problem: `Analyser denne teksten:

"Deutschland ist einer der wichtigsten Industriestandorte der Welt. Die 'Industrie 4.0' - die Verbindung von Produktion und digitaler Technologie - wurde in Deutschland entwickelt. Deutsche Unternehmen investieren stark in Forschung und Entwicklung. Das duale Ausbildungssystem sorgt für gut qualifizierte Facharbeiter."

a) Hva er "Industrie 4.0"?
b) Hva investerer tyske bedrifter i?
c) Hva sikrer kvalifisert arbeidskraft?`,
      solution: `a) Industrie 4.0 er forbindelsen mellom produksjon og digital teknologi (die Verbindung von Produktion und digitaler Technologie).

b) Tyske bedrifter investerer i forskning og utvikling (Forschung und Entwicklung, forkortet F&E).

c) Det duale utdanningssystemet (das duale Ausbildungssystem) sikrer godt kvalifiserte fagarbeidere. Dette er lærlingeordningen der ungdom kombinerer skole og praksis i bedrift.

**Kulturnotat:** Det tyske lærlingesystemet er unikt og beundret verden over. Ungdom lærer et yrke gjennom 2-3 år med kombinert skole og arbeid i bedrift.`,
    },
    {
      id: 'tysk-3-7-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-7-1-ex-3',
        number: '7.1.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tekst (5-6 setninger) på tysk om et tysk firmå du kjenner til. Bruk følgende ord: das Unternehmen, herstellen, der Umsatz, exportieren, die Qualität',
        subTasks: [
          { label: 'a', task: 'Hvilket firma velger du?', solution: 'Valgfritt (f.eks. Volkswagen, BMW, Siemens)' },
          { label: 'b', task: 'Hva produserer firmaet?', solution: 'Beskriv produktene på tysk' },
          { label: 'c', task: 'Hvorfor er firmaet kjent?', solution: 'Nevn kvalitet, innovasjon eller lignende' },
        ],
        solution: 'Eksempel: "Volkswagen ist ein deutsches Unternehmen aus Wolfsburg. Die Firma stellt Autos her. Der Umsatz beträgt über 250 Milliarden Euro. Volkswagen exportiert Fahrzeuge in die ganze Welt. Die Qualität der deutschen Autos ist weltweit bekannt."',
        hints: ['herstellen = å produsere', 'betragen = å utgjøre (om belop)'],
      },
    },
    {
      id: 'tysk-3-7-1-note-1',
      type: 'note',
      title: 'Wirtschaftliche Herausforderungen',
      content: `Tysk økonomi star overfor flere utfordringer: energiomstilling (Energiewende), digitalisering, mangel på faglært arbeidskraft (Fachkräftemangel), og konkurranse fra Asia. Bilindustrien må omstille seg til elektriske kjøretøy, og mange tradisjonelle industrier må moderniseres.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.2: Politisches System
// ============================================================================

export const CHAPTER_TYSK_3_7_2: TextbookChapter = {
  id: 'tysk-3-7-2',
  courseId: 'tysk-3',
  chapterNumber: '7.2',
  title: 'Politisches System',
  subtitle: 'Det tyske politiske systemet',
  description: 'Forstå Bundestag, Bundesrat, forbundskansleren og det tyske demokratiet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstå det tyske politiske systemet',
    'kjenne til de viktigste politiske institusjonene',
    'bruke politisk vokabular på tysk',
  ],
  content: [
    {
      id: 'tysk-3-7-2-intro',
      type: 'text',
      content: `## Das politische System Deutschlands

Tyskland er en forbundsrepublikk (Bundesrepublik) med et parlamentarisk demokrati. Landet består av 16 delstater (Bundesländer) som har betydelig selvstyre.

**Grunnleggende prinsipper:**
- **Demokratie** - folket velger sine representanter
- **Rechtsstaat** - rettsstat med uavhengige domstoler
- **Sozialstaat** - velferdsstat med sosiale rettigheter
- **Föderalismus** - maktfordeling mellom forbund og delstater

Grunnloven (Grundgesetz) fra 1949 er fundamentet for det tyske demokratiet. Den beskytter grunnleggende rettigheter og setter rammene for statsmakten.`,
    },
    {
      id: 'tysk-3-7-2-def-1',
      type: 'definition',
      title: 'Vokabular: Politik',
      content: `**Politiske grunnbegreper:**

| Tysk | Norsk |
|------|-------|
| die Politik | politikk |
| die Regierung | regjering |
| das Parlament | parlament |
| die Wahl | valg |
| wählen | å velge |
| der Wähler | velger |
| die Partei | parti |
| der Abgeordnete | representant |
| das Gesetz | lov |
| die Verfassung | grunnlov |
| abstimmen | å stemme |
| die Mehrheit | flertall |
| die Opposition | opposisjon |`,
    },
    {
      id: 'tysk-3-7-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Das Grundgesetz',
      problem: `Les utdraget fra den tyske grunnloven:

"Artikel 1: Die Würde des Menschen ist unantastbar. Sie zu achten und zu schützen ist Verpflichtung aller staatlichen Gewalt.

Artikel 20: Die Bundesrepublik Deutschland ist ein demokratischer und sozialer Bundesstaat. Alle Staatsgewalt geht vom Volke aus."

a) Hva sier artikkel 1 om menneskeverdet?
b) Hva slags stat er Tyskland ifølge artikkel 20?
c) Hvor kommer all statsmakt fra?`,
      solution: `a) Artikkel 1 sier at menneskeverdet er ukrenkelig (unantastbar). A respektere og beskytte det er en forpliktelse for all statsmakt.

b) Ifølge artikkel 20 er Tyskland en demokratisk og sosial forbundsstat (demokratischer und sozialer Bundesstaat).

c) All statsmakt utgår fra folket (geht vom Volke aus).

**Historisk kontekst:** Artikkel 1 ble skrevet som et svar på nazi-tidens forbrytelser. Menneskeverdet star først i grunnloven som et signal om at det aldri skal krenkes igjen.`,
    },
    {
      id: 'tysk-3-7-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-7-2-ex-1',
        number: '7.2.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Koble tysk begrep med norsk forklaring:',
        subTasks: [
          { label: 'a', task: 'das Grundgesetz', solution: 'Grunnloven', answer: 'Grunnloven' },
          { label: 'b', task: 'der Rechtsstaat', solution: 'Rettsstaten', answer: 'Rettsstaten' },
          { label: 'c', task: 'der Sozialstaat', solution: 'Velferdsstaten', answer: 'Velferdsstaten' },
          { label: 'd', task: 'der Föderalismus', solution: 'Forbundsstatsordningen', answer: 'Forbundsstatsordningen' },
        ],
        solution: 'a) Grunnloven, b) Rettsstaten, c) Velferdsstaten, d) Forbundsstatsordningen',
        hints: ['Grund = grunn, Gesetz = lov'],
      },
    },
    {
      id: 'tysk-3-7-2-text-2',
      type: 'text',
      content: `## Der Bundestag

**Bundestag** er Tysklands parlament og det viktigste lovgivende organet. Det har minst 598 medlemmer (kan være flere på grunn av valgsystemet).

**Bundestags oppgaver:**
- Vedta lover (Gesetze verabschieden)
- Velge forbundskansleren
- Kontrollere regjeringen
- Vedta statsbudsjettet

**Valgsystemet:**
Tyskerene har to stemmer ved valg:
- **Erststimme**: Direktemandat i valgkretsen
- **Zweitstimme**: Partistemme (avgjor fordelingen i Bundestag)

Sperregrensen er 5% - partier må få minst 5% av stemmene eller 3 direktemandater for å komme inn i Bundestag.`,
    },
    {
      id: 'tysk-3-7-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Die deutschen Parteien',
      problem: `Les om de tyske partiene:

"Im aktuellen Bundestag sind følgende Parteien vertreten: CDU/CSU (Christdemokraten), SPD (Sozialdemokraten), Grüne (Umweltpartei), FDP (Liberale), AfD (rechtspopulistisch) und Die Linke (links). Die Regierung wird von einer Koalition gebildet, da keine Partei eine absolute Mehrheit hat."

a) Hvilke partier er representert i Bundestag?
b) Hvorfor trenger man en koalisjon?
c) Hva star AfD for politisk?`,
      solution: `a) Følgende partier er representert: CDU/CSU, SPD, Grüne, FDP, AfD og Die Linke.

b) Man trenger koalisjon fordi ingen parti har absolutt flertall (keine Partei eine absolute Mehrheit hat).

c) AfD beskrives som høyrepopulistisk (rechtspopulistisch).

**Partienes farger:**
- CDU/CSU: svart
- SPD: rød
- Grune: grønn
- FDP: gul
- AfD: blå
- Die Linke: mørk rød`,
    },
    {
      id: 'tysk-3-7-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-7-2-ex-2',
        number: '7.2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig ord:',
        subTasks: [
          { label: 'a', task: 'Der Bundestag ___ die Gesetze (vedtar).', solution: 'verabschiedet', answer: 'verabschiedet' },
          { label: 'b', task: 'Die Burger ___ alle vier Jahre (velger).', solution: 'wählen', answer: 'wählen' },
          { label: 'c', task: 'Eine Partei braucht mindestens fünf ___ (prosent).', solution: 'Prozent', answer: 'Prozent' },
          { label: 'd', task: 'Die ___ kontrolliert die Regierung (opposisjonen).', solution: 'Opposition', answer: 'Opposition' },
        ],
        solution: 'a) verabschiedet, b) wählen, c) Prozent, d) Opposition',
        hints: ['verabschieden = å vedta (en lov)', 'alle vier Jahre = hvert fjerde ar'],
      },
    },
    {
      id: 'tysk-3-7-2-text-3',
      type: 'text',
      content: `## Der Bundesrat und der Bundeskanzler

**Bundesrat** representerer de 16 delstatene og deltar i lovgivningen. Delstatene har ulikt antall stemmer basert på befolkning (3-6 stemmer).

**Forbundskansleren (Bundeskanzler):**
- Leder regjeringen
- Velges av Bundestag
- Bestemmer regjeringens politiske retningslinjer (Richtlinienkompetenz)
- Utnevner og avsetter ministre

**Forbundspresidenten (Bundespräsident):**
- Statsoverhode med hovedsakelig seremonielle oppgaver
- Representerer Tyskland utad
- Underskriver lover
- Velges av Forbundsforsamlingen for 5 år`,
    },
    {
      id: 'tysk-3-7-2-def-2',
      type: 'definition',
      title: 'Vokabular: Regierung',
      content: `**Regjeringsbegreper:**

| Tysk | Norsk |
|------|-------|
| der Bundeskanzler | forbundskansler |
| der Bundespräsident | forbundspresident |
| der Minister | minister |
| das Ministerium | departement |
| das Kabinett | kabinett/regjering |
| die Koalition | koalisjon |
| regieren | å regjere |
| ernennen | å utnevne |
| absetzen | å avsette |
| die Amtszeit | embetstid |`,
    },
    {
      id: 'tysk-3-7-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Berühmte Bundeskanzler',
      problem: `Les om tyske kanslere:

"Konrad Adenauer (CDU) war der erste Bundeskanzler (1949-1963). Er führte Deutschland in die westliche Allianz. Willy Brandt (SPD, 1969-1974) erhielt den Friedensnobelpreis für seine Ostpolitik. Helmut Kohl (CDU, 1982-1998) wird als 'Kanzler der Einheit' bezeichnet. Angela Merkel (CDU, 2005-2021) war die erste Frau im Kanzleramt."

a) Hvem var den første forbundskansleren?
b) Hvilken kansler fikk Nobels fredspris?
c) Hvorfor kalles Kohl 'Kanzler der Einheit'?`,
      solution: `a) Konrad Adenauer (CDU) var den første forbundskansleren fra 1949 til 1963.

b) Willy Brandt (SPD) fikk Nobels fredspris for sin Ostpolitik - tilnærming til Ost-Europa.

c) Helmut Kohl kalles "Kanzler der Einheit" (enhetskansleren) fordi han ledet gjenforeningen av Ost- og Vest-Tyskland i 1990.

**Historisk kontekst:** Gjenforeningen (die Wiedervereinigung) skjedde 3. oktober 1990, som na er Tysklands nasjonaldag (Tag der Deutschen Einheit).`,
    },
    {
      id: 'tysk-3-7-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-7-2-ex-3',
        number: '7.2.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign det tyske og norske politiske systemet på tysk (4-5 setninger):',
        subTasks: [
          { label: 'a', task: 'Hva er statsoverhodet i hvert land?', solution: 'Tyskland: Bundespräsident, Norge: Konig' },
          { label: 'b', task: 'Hva heter regjeringssjefen?', solution: 'Tyskland: Bundeskanzler, Norge: Statsminister' },
          { label: 'c', task: 'Hva heter parlamentet?', solution: 'Tyskland: Bundestag, Norge: Storting' },
        ],
        solution: 'Eksempel: "In Deutschland ist der Bundespräsident das Staatsoberhaupt, in Norwegen der Konig. Der Regierungschef heisst in Deutschland Bundeskanzler, in Norwegen Statsminister. Das deutsche Parlament heisst Bundestag, das norwegische Storting."',
        hints: ['das Staatsoberhaupt = statsoverhodet', 'der Regierungschef = regjeringssjefen'],
      },
    },
    {
      id: 'tysk-3-7-2-note-1',
      type: 'note',
      title: 'Föderalismus in Deutschland',
      content: `De 16 tyske delstatene har stor selvstendighet i utdanning, politi og kultur. Dette gjor at skolesystemet kan variere betydelig mellom delstatene. Bayern har for eksempel et annerledes skolesystem enn Berlin. Denne foderalismen er et bevisst valg etter erfaringene med den sentraliserte nazi-staten.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.3: Deutschland in der EU
// ============================================================================

export const CHAPTER_TYSK_3_7_3: TextbookChapter = {
  id: 'tysk-3-7-3',
  courseId: 'tysk-3',
  chapterNumber: '7.3',
  title: 'Deutschland in der EU',
  subtitle: 'Tyskland og europaintegrasjonen',
  description: 'Lær om Tysklands rolle i EU, euroen og europeisk samarbeid.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstå Tysklands rolle i EU',
    'kjenne til EUs institusjoner',
    'diskutere europeisk integrasjon på tysk',
  ],
  content: [
    {
      id: 'tysk-3-7-3-intro',
      type: 'text',
      content: `## Deutschland und die Europäische Union

Tyskland er et av grunnleggerlandene i det europeiske samarbeidet og EUs største medlemsland. Med 83 millioner innbyggere og største økonomi spiller Tyskland en sentral rolle i EU.

**Historisk bakgrunn:**
- 1951: Kull- og stalunionen (EGKS) - forløperen til EU
- 1957: Romatraktaten - EEC grunnlegges
- 1992: Maastricht-traktaten - EU opprettes
- 2002: Euroen innføres som betalingsmiddel

For Tyskland var europeisk integrasjon en måte å forsone seg med nabolandene etter andre verdenskrig og sikre fred i Europa.`,
    },
    {
      id: 'tysk-3-7-3-def-1',
      type: 'definition',
      title: 'Vokabular: Europäische Union',
      content: `**EU-begreper:**

| Tysk | Norsk |
|------|-------|
| die Europäische Union (EU) | Den europeiske union |
| die Europäische Kommission | Europakommisjonen |
| das Europäische Parlament | Europaparlamentet |
| der Europäische Rat | Det europeiske råd |
| die Mitgliedstaaten | medlemslandene |
| der Binnenmarkt | indre marked |
| die Freizügigkeit | fri bevegelighet |
| die Währung | valuta |
| der Euro | euro |
| die Eurozone | eurosonen |
| die Integration | integrasjon |
| die Erweiterung | utvidelse |`,
    },
    {
      id: 'tysk-3-7-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Die EU-Institutionen',
      problem: `Les om EU-institusjonene:

"Die EU hat mehrere wichtige Institutionen. Die Europäische Kommission in Brussel schlagt Gesetze vor und setzt sie um. Das Europäische Parlament in Strasburg und Brussel vertritt die Bürger und stimmt über Gesetze ab. Der Europäische Rat besteht aus den Staats- und Regierungschefs der Mitgliedsländer."

a) Hvor holder Europakommisjonen til?
b) Hva gjor Europaparlamentet?
c) Hvem sitter i Det europeiske rad?`,
      solution: `a) Europakommisjonen holder til i Brussel (in Brussel).

b) Europaparlamentet representerer borgerne (vertritt die Burger) og stemmer over lover (stimmt über Gesetze ab).

c) Det europeiske råd består av stats- og regjeringssjefene i medlemslandene (Staats- und Regierungschefs der Mitgliedsländer).

**EU-fakta:** Europaparlamentet har seter i både Strasbourg og Brussel, noe som kritiseres for å være dyrt og upraktisk.`,
    },
    {
      id: 'tysk-3-7-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-7-3-ex-1',
        number: '7.3.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Sant eller usant?',
        subTasks: [
          { label: 'a', task: 'Deutschland ist das größte EU-Land nach Bevölkerung.', solution: 'Sant', answer: 'Sant' },
          { label: 'b', task: 'Die EU wurde 1951 gegründet.', solution: 'Usant - EU ble opprettet i 1992, forløperen EGKS i 1951', answer: 'Usant' },
          { label: 'c', task: 'Das Europäische Parlament ist in Berlin.', solution: 'Usant - Det er i Strasbourg og Brussel', answer: 'Usant' },
          { label: 'd', task: 'Der Euro wurde 2002 eingeführt.', solution: 'Sant (som kontanter)', answer: 'Sant' },
        ],
        solution: 'a) Sant, b) Usant (1992), c) Usant (Strasbourg/Brussel), d) Sant',
        hints: ['EU = 1992, forløperen EGKS = 1951'],
      },
    },
    {
      id: 'tysk-3-7-3-text-2',
      type: 'text',
      content: `## Der Euro und die Wirtschaftsunion

**Euroen** er den felles valutaen for 20 EU-land (Eurozone). Tyskland var en pådriver for euroen og den europeiske sentralbanken (EZB) har hovedsete i Frankfurt.

**Fordeler med euroen:**
- Ingen valutaveksling ved reiser og handel
- Prissammenligning på tvers av landegrenser
- Stabil valuta for internasjonal handel
- Styrker europeisk økonomisk integrasjon

**Utfordringer:**
- Ulik økonomisk utvikling i medlemslandene
- Gjeldskrisen i enkelte land (Hellas, Italia)
- Manglende felles finanspolitikk
- Spørsmål om solidaritet mellom landene`,
    },
    {
      id: 'tysk-3-7-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Die Europäische Zentralbank',
      problem: `Les om EZB:

"Die Europäische Zentralbank (EZB) hat ihren Sitz in Frankfurt am Main. Sie ist für die Geldpolitik der Eurozone verantwortlich. Ihr Hauptziel ist die Preisstabilität - die Inflation soll bei etwa 2 Prozent liegen. Die EZB ist unabhängig von den Regierungen der Mitgliedstaaten."

a) Hvor ligger EZB?
b) Hva er EZBs hovedoppgave?
c) Hva er målet for inflasjonen?`,
      solution: `a) EZB ligger i Frankfurt am Main.

b) EZBs hovedoppgave er pengepolitikken i eurosonen (Geldpolitik der Eurozone) med fokus på prisstabilitet (Preisstabilität).

c) Målet er at inflasjonen skal ligge på omtrent 2 prosent (etwa 2 Prozent).

**Økonomisk kontekst:** EZB setter styringsrenten som påvirker lan og sparing i hele eurosonen. Under koronakrisen og inflasjonskrisen har EZB spilt en viktig rolle.`,
    },
    {
      id: 'tysk-3-7-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-7-3-ex-2',
        number: '7.3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til tysk:',
        subTasks: [
          { label: 'a', task: 'Euroen er en stabil valuta.', solution: 'Der Euro ist eine stabile Währung.', answer: 'Der Euro ist eine stabile Währung' },
          { label: 'b', task: 'EU har 27 medlemsland.', solution: 'Die EU hat 27 Mitgliedstaaten.', answer: 'Die EU hat 27 Mitgliedstaaten' },
          { label: 'c', task: 'Det indre markedet sikrer fri bevegelighet.', solution: 'Der Binnenmarkt sichert die Freizügigkeit.', answer: 'Der Binnenmarkt sichert die Freizügigkeit' },
        ],
        solution: 'a) Der Euro ist eine stabile Währung, b) Die EU hat 27 Mitgliedstaaten, c) Der Binnenmarkt sichert die Freizügigkeit',
        hints: ['stabil = stabil (samme på tysk)', 'sichern = å sikre'],
      },
    },
    {
      id: 'tysk-3-7-3-text-3',
      type: 'text',
      content: `## Deutschlands Rolle in der EU

Som største medlemsland har Tyskland betydelig innflytelse i EU, men også stort ansvar.

**Tysklands posisjon:**
- Største nettobidragsyter til EU-budsjettet
- Sammen med Frankrike ofte kalt "EUs motor"
- Viktig stemme i utenriks- og sikkerhetspolitikk
- Padriver for klima- og miljopolitikk

**Utfordringer for Tyskland i EU:**
- Balansere nasjonale interesser med EU-solidaritet
- Håndtere migrasjonspolitikk
- Energiomstilling og klimamål
- Forholdet til Russland og Kina`,
    },
    {
      id: 'tysk-3-7-3-example-3',
      type: 'example',
      title: 'Eksempel 3: EU-Debatte',
      problem: `Les debattinnlegget:

"Deutschland profitiert enorm vom EU-Binnenmarkt. Als Exportnation ist der freie Warenverkehr essentiell. Gleichzeitig muss Deutschland als größtes Land mehr Verantwortung übernehmen - finanziell und politisch. Die EU-Skepsis in einigen Ländern zeigt, dass Europa die Bürger besser einbinden muss."

a) Hvorfor er EU viktig for Tyskland?
b) Hvilket ansvar har Tyskland?
c) Hva er utfordringen for EU?`,
      solution: `a) Tyskland tjener enormt på EUs indre marked (profitiert enorm vom EU-Binnenmarkt) fordi landet er en eksportnasjon som trenger fri vareflyt.

b) Tyskland må ta mer ansvar både finansielt og politisk (mehr Verantwortung übernehmen - finanziell und politisch).

c) Utfordringen er at EU må involvere borgerne bedre (die Bürger besser einbinden) for å motvirke EU-skepsis.

**Diskusjonspunkt:** Norge er ikke EU-medlem, men er med i EOS-avtalen. Hvordan påvirker EU Norge?`,
    },
    {
      id: 'tysk-3-7-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-7-3-ex-3',
        number: '7.3.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Diskuter på tysk (5-6 setninger): Sollte Norwegen der EU beitreten? Begründe deine Meinung!',
        subTasks: [
          { label: 'a', task: 'Hva er fordelene med EU-medlemskap?', solution: 'Nevn økonomiske og politiske fordeler' },
          { label: 'b', task: 'Hva er ulempene?', solution: 'Nevn tap av suverenitet, bidrag til budsjettet' },
          { label: 'c', task: 'Hva er din mening?', solution: 'Begrunn standpunktet ditt' },
        ],
        solution: 'Eksempel: "Ich denke, Norwegen sollte nicht der EU beitreten. Norwegen hat bereits Zugang zum Binnenmarkt durch das EWR-Abkommen. Als EU-Mitglied musste Norwegen viel Geld zahlen und würde Souveränität verlieren. Andererseits hätte Norwegen mehr Einfluss auf EU-Entscheidungen."',
        hints: ['beitreten + Dativ = å slutte seg til', 'die Souveränität = suverenitet'],
      },
    },
    {
      id: 'tysk-3-7-3-note-1',
      type: 'note',
      title: 'Brexit und die Zukunft der EU',
      content: `Storbritannias utmelding av EU (Brexit) i 2020 var et sjokk for mange. Det viser at europeisk integrasjon ikke er irreversibel. For Tyskland betyr Brexit tap av en viktig alliert i økonomiske spørsmål. Samtidig har EU vist seg robust og fortsetter å utvide seg med nye medlemsland på Balkan.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.4: Aktuelle Debatten
// ============================================================================

export const CHAPTER_TYSK_3_7_4: TextbookChapter = {
  id: 'tysk-3-7-4',
  courseId: 'tysk-3',
  chapterNumber: '7.4',
  title: 'Aktuelle Debatten',
  subtitle: 'Aktuelle politiske debatter',
  description: 'Diskuter aktuelle temaer som innvandring, klima og digitalisering på tysk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'diskutere aktuelle samfunnstemaer på tysk',
    'forstå ulike standpunkter i debatter',
    'uttrykke og begrunnne egne meninger',
  ],
  content: [
    {
      id: 'tysk-3-7-4-intro',
      type: 'text',
      content: `## Aktuelle Debatten in Deutschland

Tyskland star midt i flere store samfunnsdebatter som preger politikken og hverdagen. Disse temaene er sentrale i medier og politiske diskusjoner.

**De store debattene:**
1. **Migration und Integration** - flyktninger og integrering
2. **Klimaschutz und Energiewende** - klimavern og energiomstilling
3. **Digitalisierung** - digital omstilling av samfunnet
4. **Soziale Gerechtigkeit** - sosial rettferdighet og ulikhet
5. **Wohnungsnot** - boligmangel i storbyene

Å forstå disse debattene er viktig for å forstå det moderne Tyskland.`,
    },
    {
      id: 'tysk-3-7-4-def-1',
      type: 'definition',
      title: 'Vokabular: Gesellschaftsdebatte',
      content: `**Debattbegreper:**

| Tysk | Norsk |
|------|-------|
| die Migration | migrasjon |
| der Flüchtling | flyktning |
| die Integration | integrering |
| der Klimaschutz | klimavern |
| die Energiewende | energiomstilling |
| die Digitalisierung | digitalisering |
| die Ungleichheit | ulikhet |
| die Gerechtigkeit | rettferdighet |
| die Debatte | debatt |
| das Argument | argument |
| die Meinung | mening |
| der Standpunkt | standpunkt |
| widersprechen | å motsi |
| zustimmen | å være enig |`,
    },
    {
      id: 'tysk-3-7-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Migrationsdebatte',
      problem: `Les de ulike standpunktene:

**Position A:** "Deutschland braucht Zuwanderung. Wir haben einen Fachkräftemangel und eine alternde Gesellschaft. Migration ist eine Chance für unsere Wirtschaft."

**Position B:** "Die Integration kostet viel Geld und funktioniert nicht immer. Wir sollten zunächst die Menschen integrieren, die schon hier sind, bevor wir mehr aufnehmen."

a) Hva er hovedargumentet i posisjon A?
b) Hva er hovedargumentet i posisjon B?
c) Hvilket argument synes du er sterkest?`,
      solution: `a) Posisjon A argumenterer for at Tyskland trenger innvandring på grunn av mangel på faglært arbeidskraft (Fachkräftemangel) og en aldrende befolkning. Migrasjon er en mulighet for økonomien.

b) Posisjon B argumenterer for at integrasjon koster mye og ikke alltid fungerer. Man bør først integrere de som allerede er der for man tar imot flere.

c) Dette er et åpent spørsmål for diskusjon. Begge sider har gyldige argumenter.

**Debatt-vokabular:**
- "Ich stimme zu, weil..." = Jeg er enig fordi...
- "Ich widerspreche, denn..." = Jeg er uenig fordi...
- "Einerseits..., andererseits..." = På den ene siden..., på den andre siden...`,
    },
    {
      id: 'tysk-3-7-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-7-4-ex-1',
        number: '7.4.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv argumenter for og mot på tysk:',
        subTasks: [
          { label: 'a', task: 'Ein Argument FUR mehr Zuwanderung:', solution: 'Eksempel: Deutschland braucht Arbeitskräfte', answer: 'Arbeitskräfte' },
          { label: 'b', task: 'Ein Argument GEGEN mehr Zuwanderung:', solution: 'Eksempel: Integration ist schwierig', answer: 'Integration' },
          { label: 'c', task: 'Deine eigene Meinung (2 Satze):', solution: 'Formuler din mening på tysk' },
        ],
        solution: 'Eksempel: a) Deutschland braucht Fachkräfte aus dem Ausland, b) Die Kapazitäten für Integration sind begrenzt, c) Meiner Meinung nach brauchen wir eine kontrollierte Zuwanderung.',
        hints: ['meiner Meinung nach = etter min mening', 'einerseits/andererseits = på den ene/andre siden'],
      },
    },
    {
      id: 'tysk-3-7-4-text-2',
      type: 'text',
      content: `## Klimaschutz und Energiewende

Klimadebatten er intens i Tyskland. Landet har ambisiose klimamål og gjennomforer en storstilt energiomstilling (Energiewende).

**Klimatiltak i Tyskland:**
- Utfasing av kullkraft innen 2038
- Utfasing av kjernekraft (gjennomfort 2023)
- Storstilt utbygging av fornybar energi
- CO2-avgift på drivstoff og oppvarming
- Støtte til elbiler og kollektivtransport

**Debatt om klimapolitikk:**
- Hvor raskt skal omstillingen skje?
- Hvem skal betale for klimatiltak?
- Er det riktig å legge ned kjernekraft?
- Hvordan balansere klima og økonomi?`,
    },
    {
      id: 'tysk-3-7-4-def-2',
      type: 'definition',
      title: 'Vokabular: Klima und Energie',
      content: `**Klima- og energiord:**

| Tysk | Norsk |
|------|-------|
| der Klimawandel | klimaendring |
| die Erderwärmung | global oppvarming |
| der CO2-Ausstoß | CO2-utslipp |
| erneuerbare Energie | fornybar energi |
| die Windkraft | vindkraft |
| die Solarenergie | solenergi |
| die Kohle | kull |
| die Kernkraft | kjernekraft |
| das Elektroauto | elbil |
| klimaneutral | klimanøytral |
| nachhaltig | bærekraftig |`,
    },
    {
      id: 'tysk-3-7-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Klimadebatte',
      problem: `Les utdraget fra en klimadebatt:

"Die Klimabewegung 'Fridays for Future' fordert schnelleres Handeln. Die Aktivisten kritisieren, dass die Regierung zu langsam ist. Wirtschaftsvertreter warnen hingegen vor zu schnellen Änderungen, die Arbeitsplätze gefährden konnten. Die Regierung versucht, einen Mittelweg zu finden."

a) Hva krever Fridays for Future?
b) Hva advarer næringslivsrepresentanter mot?
c) Hva prover regjeringen å gjore?`,
      solution: `a) Fridays for Future krever raskere handling (schnelleres Handeln) mot klimaendringene.

b) Næringslivsrepresentanter advarer mot for raske endringer som kan true arbeidsplasser (Arbeitsplätze gefährden).

c) Regjeringen prover å finne en middelvei (einen Mittelweg finden) mellom klimatiltak og økonomiske hensyn.

**Konjunktiv II:** "konnten" (kunne) brukes her for å uttrykke en mulighet/fare. Dette er subjunktiv/konjunktiv II.`,
    },
    {
      id: 'tysk-3-7-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-7-4-ex-2',
        number: '7.4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig ord:',
        subTasks: [
          { label: 'a', task: 'Der ___ ist ein großes Problem (klimaendring).', solution: 'Klimawandel', answer: 'Klimawandel' },
          { label: 'b', task: 'Deutschland will bis 2045 ___ sein (klimanøytral).', solution: 'klimaneutral', answer: 'klimaneutral' },
          { label: 'c', task: '___ Energie ist besser für die Umwelt (fornybar).', solution: 'Erneuerbare', answer: 'Erneuerbare' },
          { label: 'd', task: 'Wir müssen den CO2-___ reduzieren (utslipp).', solution: 'Ausstoß', answer: 'Ausstoß' },
        ],
        solution: 'a) Klimawandel, b) klimaneutral, c) Erneuerbare, d) Ausstoß',
        hints: ['erneuerbar = fornybar (adjektiv)', 'der Ausstoß = utslipp'],
      },
    },
    {
      id: 'tysk-3-7-4-text-3',
      type: 'text',
      content: `## Digitalisierung

Tyskland sliter med digitalisering sammenlignet med andre land. Debatten handler om hvordan samfunnet kan bli mer digitalt.

**Utfordringer:**
- Dårlig internettdekning i landlige områder
- Offentlig sektor henger etter
- Skoler mangler digital infrastruktur
- Personvernbekymringer (Datenschutz)

**Muligheter:**
- Effektivisering av offentlige tjenester
- Nye arbeidsplasser i tech-sektoren
- Forbedret utdanning med digitale verktøy
- Smartere byer og transport`,
    },
    {
      id: 'tysk-3-7-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Digitalisierung in der Schule',
      problem: `Les kommentaren:

"Die Corona-Pandemie hat gezeigt, wie weit Deutschland bei der Digitalisierung zurückliegt. Viele Schulen hatten kein funktionierendes WLAN, Lehrer kannten sich nicht mit digitalen Tools aus, und Schüler hatten keine Laptops. Jetzt investiert der Staat Milliarden, aber es wird Jahre dauern, bis wir aufholen."

a) Hva avslarte koronapandemien?
b) Hvilke problemer hadde skolene?
c) Hva gjor staten nå?`,
      solution: `a) Pandemien avslarte hvor langt Tyskland ligger etter med digitalisering (wie weit Deutschland bei der Digitalisierung zurückliegt).

b) Problemer:
- Mange skoler hadde ikke fungerende WLAN
- Lærere kunne ikke bruke digitale verktøy
- Elever hadde ikke laptoper

c) Staten investerer milliarder (investiert der Staat Milliarden), men det vil ta år å ta igjen forspranget.

**Grammatikk:** "zuruckliegen" = å ligge etter/bak. "aufholen" = å ta igjen (et forsprang).`,
    },
    {
      id: 'tysk-3-7-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-7-4-ex-3',
        number: '7.4.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg et av temaene (Migration, Klima, Digitalisierung) og skriv en kort debattekst på tysk (6-8 setninger). Bruk følgende struktur:',
        subTasks: [
          { label: 'a', task: 'Presenter problemet (2 setninger)', solution: 'Beskriv utfordringen' },
          { label: 'b', task: 'Gi et argument FOR en løsning (2 setninger)', solution: 'Argument med begrunnelse' },
          { label: 'c', task: 'Gi et argument MOT (2 setninger)', solution: 'Motargument med begrunnelse' },
          { label: 'd', task: 'Din konklusjon (2 setninger)', solution: 'Oppsummer din mening' },
        ],
        solution: 'Eksempel om klima: "Der Klimawandel ist eine große Herausforderung. Die Temperaturen steigen und extreme Wetterereignisse nehmen zu. Einerseits müssen wir schnell handeln, um die Erderwärmung zu stoppen. Andererseits dürfen wir die Wirtschaft nicht zerstoren. Meiner Meinung nach brauchen wir einen ausgewogenen Ansatz."',
        hints: ['einerseits/andererseits = på den ene/andre siden', 'meiner Meinung nach = etter min mening'],
      },
    },
    {
      id: 'tysk-3-7-4-tip-1',
      type: 'tip',
      content: `**Debatteknikk:** Når du diskuterer på tysk, bruk disse uttrykkene:
- "Ich bin der Meinung, dass..." (Jeg mener at...)
- "Das stimmt, aber..." (Det stemmer, men...)
- "Dem widerspreche ich, weil..." (Det er jeg uenig i fordi...)
- "Ein gutes Argument dafur ist..." (Et godt argument for det er...)`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.1: Deutsche Medienlandschaft
// ============================================================================

export const CHAPTER_TYSK_3_8_1: TextbookChapter = {
  id: 'tysk-3-8-1',
  courseId: 'tysk-3',
  chapterNumber: '8.1',
  title: 'Deutsche Medienlandschaft',
  subtitle: 'Det tyske medielandskapet',
  description: 'Bli kjent med tyske medier: ARD, ZDF, Spiegel, Zeit og andre.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kjenne til viktige tyske medier',
    'forstå forskjellen mellom offentlig og privat media',
    'analysere medieinnhold kritisk',
  ],
  content: [
    {
      id: 'tysk-3-8-1-intro',
      type: 'text',
      content: `## Die deutsche Medienlandschaft

Tyskland har et mangfoldig medielandskap med både offentlige og private medier. Pressefriheten (Pressefreiheit) er beskyttet i grunnloven.

**Medietyper i Tyskland:**
- **Offentlig-rettslig kringkasting** (offentlich-rechtlicher Rundfunk): ARD, ZDF
- **Private TV-kanaler:** RTL, ProSieben, Sat.1
- **Aviser:** Die Zeit, Süddeutsche Zeitung, FAZ, Bild
- **Nyhetstidsskrifter:** Der Spiegel, Focus, Stern
- **Nettmedier:** Spiegel Online, Zeit Online, Tagesschau.de

Mediemangfoldet ansees som viktig for demokratiet.`,
    },
    {
      id: 'tysk-3-8-1-def-1',
      type: 'definition',
      title: 'Vokabular: Medien',
      content: `**Mediebegreper:**

| Tysk | Norsk |
|------|-------|
| die Medien (pl.) | medier |
| die Presse | pressen |
| die Zeitung | avis |
| die Zeitschrift | tidsskrift |
| der Rundfunk | kringkasting |
| das Fernsehen | TV/fjernsyn |
| der Sender | kanal/sendeselskap |
| die Nachrichten | nyheter |
| der Journalist | journalist |
| der Bericht | rapport/reportasje |
| die Meldung | melding/nyhet |
| die Schlagzeile | overskrift |
| recherchieren | å researche |
| berichten | å rapportere |`,
    },
    {
      id: 'tysk-3-8-1-example-1',
      type: 'example',
      title: 'Eksempel 1: ARD und ZDF',
      problem: `Les om tysk kringkasting:

"ARD und ZDF sind die offentlich-rechtlichen Sender in Deutschland. Sie werden durch den Rundfunkbeitrag finanziert, den jeder Haushalt zahlen muss (aktuell 18,36 Euro pro Monat). Die Sender haben einen Informations- und Bildungsauftrag. Kritiker meinen, die Sender seien zu teuer und nicht neutral genug."

a) Hvordan finansieres ARD og ZDF?
b) Hvor mye koster kringkastingsavgiften?
c) Hva kritiseres ARD og ZDF for?`,
      solution: `a) ARD og ZDF finansieres gjennom kringkastingsavgiften (Rundfunkbeitrag) som alle husstander må betale.

b) Kringkastingsavgiften koster 18,36 euro per måned.

c) Kritikere mener at kanalene er for dyre og ikke nøytrale nok (zu teuer und nicht neutral genug).

**Sammenligning:** I Norge har vi NRK som også er offentlig finansiert, men lisensen ble erstattet av skattefinansiering i 2020. Tyskland beholder fortsatt en direkte avgift.`,
    },
    {
      id: 'tysk-3-8-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-8-1-ex-1',
        number: '8.1.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Koble medietype med eksempel:',
        subTasks: [
          { label: 'a', task: 'Offentlig-rettslig TV', solution: 'ARD, ZDF', answer: 'ARD' },
          { label: 'b', task: 'Privat TV', solution: 'RTL, ProSieben', answer: 'RTL' },
          { label: 'c', task: 'Seriøs dagsavis', solution: 'Süddeutsche Zeitung, FAZ', answer: 'Süddeutsche Zeitung' },
          { label: 'd', task: 'Nyhetstidsskrift', solution: 'Der Spiegel, Focus', answer: 'Der Spiegel' },
        ],
        solution: 'a) ARD/ZDF, b) RTL/ProSieben, c) Süddeutsche/FAZ, d) Spiegel/Focus',
        hints: ['ARD og ZDF er offentlig-rettslige, RTL er privat'],
      },
    },
    {
      id: 'tysk-3-8-1-text-2',
      type: 'text',
      content: `## Deutsche Zeitungen

Tyskland har en sterk aviskultur med både nasjonale og regionale aviser.

**Kvalitetsaviser (Qualitätszeitungen):**
- **Die Zeit** - liberal ukeavis fra Hamburg
- **Süddeutsche Zeitung (SZ)** - liberal dagsavis fra München
- **Frankfurter Allgemeine Zeitung (FAZ)** - konservativ dagsavis
- **Die Welt** - konservativ dagsavis (Springer-konsern)
- **taz (die tageszeitung)** - venstreorientert alternativ avis

**Tabloidpresse (Boulevardpresse):**
- **Bild** - Tysklands største avis, tabloidformat

**Regionale aviser:**
Hver region har sine egne aviser som Kölner Stadt-Anzeiger, Berliner Zeitung, osv.`,
    },
    {
      id: 'tysk-3-8-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Vergleich Bild vs. FAZ',
      problem: `Sammenlign disse to overskriftene om samme hendelse:

**Bild:** "HORROR-CRASH! Drei Tote bei Autobahn-Chaos!"

**FAZ:** "Drei Menschen sterben bei Verkehrsunfall auf der A3"

a) Hva er forskjellen i språk og stil?
b) Hvilken avis bruker mer følelsesladet språk?
c) Hvilken overskrift gir mest saklig informasjon?`,
      solution: `a) Bild bruker dramatisk, følelsesladet språk med store bokstaver og utropstegn. FAZ bruker nøytral, saklig stil.

b) Bild bruker mer følelsesladet språk ("HORROR-CRASH", "Chaos", utropstegn).

c) FAZ gir mest saklig informasjon ved å nevne sted (A3) og bruke nøytrale ord ("Verkehrsunfall" i stedet for "Horror-Crash").

**Mediekritikk:** Tabloidaviser som Bild kritiseres ofte for sensasjonalisme, men de har også avslørt viktige skandaler. Kvalitetsaviser prioriterer grundig journalistikk.`,
    },
    {
      id: 'tysk-3-8-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-8-1-ex-2',
        number: '8.1.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser overskriftene - hvilken stil (tabloid eller kvalitet)?',
        subTasks: [
          { label: 'a', task: '"Regierung beschliesst neue Klimamassnahmen"', solution: 'Kvalitetsstil - nøytral, saklig', answer: 'Kvalitet' },
          { label: 'b', task: '"KLIMA-HAMMER! Benzin wird SUPER-TEUER!"', solution: 'Tabloidstil - følelsesladet, dramatisk', answer: 'Tabloid' },
          { label: 'c', task: '"Experten warnen vor steigenden Energiepreisen"', solution: 'Kvalitetsstil - nøytral, refererer til eksperter', answer: 'Kvalitet' },
        ],
        solution: 'a) Kvalitetsstil, b) Tabloidstil, c) Kvalitetsstil',
        hints: ['Store bokstaver og utropstegn = tabloid', 'Nøytrale verb og saklig tone = kvalitet'],
      },
    },
    {
      id: 'tysk-3-8-1-text-3',
      type: 'text',
      content: `## Der Spiegel und andere Nachrichtenmagazine

**Der Spiegel** er Tysklands mest kjente nyhetstidsskrift, grunnlagt i 1947. Det er kjent for undersøkende journalistikk og har avslørt flere politiske skandaler.

**Viktige nyhetstidsskrifter:**
- **Der Spiegel** - undersøkende, kritisk journalistikk
- **Focus** - konkurrent til Spiegel, mer forbrukervennlig
- **Stern** - blanding av nyheter og underholdning

**Digitale medier:**
- Spiegel Online (SPON) - et av Tysklands største nettmedier
- Zeit Online - grundig analyse og debatt
- Tagesschau.de - ARDs nyhetstjeneste

Digitale medier har endret medielandskapet dramatisk. Mange aviser sliter økonomisk.`,
    },
    {
      id: 'tysk-3-8-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Die Spiegel-Affare',
      problem: `Les om en historisk medieskandale:

"1962 publizierte Der Spiegel einen kritischen Artikel über die Bundeswehr. Die Regierung unter Adenauer liess daraufhin die Spiegel-Redaktion durchsuchen und Journalisten verhaften. Dies wurde als Angriff auf die Pressefreiheit gesehen. Die Affare führte zum Rücktritt des Verteidigungsministers Franz Josef Strauss."

a) Hva publiserte Spiegel i 1962?
b) Hvordan reagerte regjeringen?
c) Hva ble konsekvensen?`,
      solution: `a) Spiegel publiserte en kritisk artikkel om det tyske forsvaret (Bundeswehr).

b) Regjeringen lot redaksjonen ransakes (durchsuchen) og journalister arresteres (verhaften).

c) Konsekvensen var at forsvarsminister Franz Josef Strauss måtte ga av. Affaeren styrket pressefriheten i Tyskland.

**Historisk betydning:** Spiegel-affaeren viste at pressen kunne stå imot statsmakten og ble et vendepunkt for pressefriheten i etterkrigstiden.`,
    },
    {
      id: 'tysk-3-8-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-8-1-ex-3',
        number: '8.1.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign tyske og norske medier på tysk (5-6 setninger):',
        subTasks: [
          { label: 'a', task: 'Hvilke likheter finnes?', solution: 'Både offentlig og privat kringkasting' },
          { label: 'b', task: 'Hvilke forskjeller finnes?', solution: 'Finansieringsmodell, avislandskap' },
          { label: 'c', task: 'Hvilken medietype bruker du mest?', solution: 'Personlig refleksjon på tysk' },
        ],
        solution: 'Eksempel: "Norwegen und Deutschland haben ähnliche Mediensysteme. Beide haben offentlich-rechtlichen Rundfunk (NRK/ARD). In Deutschland zahlt man noch eine Rundfunkgebühr, in Norwegen nicht mehr. Deutschland hat mehr große Zeitungen. Ich lese hauptsächlich Nachrichten online."',
        hints: ['ahnlich = lignende', 'hauptsächlich = hovedsakelig'],
      },
    },
    {
      id: 'tysk-3-8-1-note-1',
      type: 'note',
      title: 'Medienkrise',
      content: `Tyske aviser sliter med fallende opplag og annonseinntekter. Mange har innført betalingsmurer (Bezahlschranken) på nett. Samtidig vokser podkaster og sosiale medier som nyhetskilder, spesielt blant unge. Debatten om hvordan kvalitetsjournalistikk skal finansieres i fremtiden er aktuell.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.2: Nachrichtensprache
// ============================================================================

export const CHAPTER_TYSK_3_8_2: TextbookChapter = {
  id: 'tysk-3-8-2',
  courseId: 'tysk-3',
  chapterNumber: '8.2',
  title: 'Nachrichtensprache',
  subtitle: 'Nyhetsspråk og formelt språk',
  description: 'Lær nyhetsspråk, konjunktiv for indirekte tale og formell skriving.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstå og bruke nyhetsspråk på tysk',
    'beherske konjunktiv I for indirekte tale',
    'skrive formelle tekster',
  ],
  content: [
    {
      id: 'tysk-3-8-2-intro',
      type: 'text',
      content: `## Nachrichtensprache

Nyhetsspråk (Nachrichtensprache) skiller seg fra hverdagsspråk. Det er formelt, presist og objektivt. En viktig grammatisk funksjon er bruken av **Konjunktiv I** for å markere indirekte tale.

**Kjennetegn på nyhetsspråk:**
- Formelt og nøytral tone
- Presis og klar formulering
- Bruk av fagtermer
- Konjunktiv I for indirekte tale
- Passive konstruksjoner
- Nominalisering (substantivering av verb)

A beherske nyhetsspråk gir tilgang til tysk media og forbedrer skriftlig uttrykksevne.`,
    },
    {
      id: 'tysk-3-8-2-def-1',
      type: 'definition',
      title: 'Konjunktiv I - Indirekte tale',
      content: `**Konjunktiv I** brukes i formelt språk for å gjengi hva noen har sagt uten å ta stilling til om det er sant.

**Dannelse:** Infinitivstamme + konjunktivendelser

| Person | sein | haben | sagen |
|--------|------|-------|-------|
| ich | sei | habe | sage |
| du | seist | habest | sagest |
| er/sie/es | sei | habe | sage |
| wir | seien | haben | sagen |
| ihr | seiet | habet | saget |
| sie/Sie | seien | haben | sagen |

**Eksempel:**
- Direkte: Der Minister sagt: "Die Wirtschaft wächst."
- Indirekte: Der Minister sagt, die Wirtschaft **wachse**.`,
    },
    {
      id: 'tysk-3-8-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Konjunktiv I i nyheter',
      problem: `Gjor om til indirekte tale med Konjunktiv I:

a) Der Sprecher sagt: "Die Regierung hat neue Maßnahmen beschlossen."
b) Die Kanzlerin erklart: "Deutschland ist auf dem richtigen Weg."
c) Experten berichten: "Die Inflation wird sinken."`,
      solution: `a) Der Sprecher sagt, die Regierung **habe** neue Maßnahmen beschlossen.
- "hat" blir "habe" i Konjunktiv I

b) Die Kanzlerin erklart, Deutschland **sei** auf dem richtigen Weg.
- "ist" blir "sei" i Konjunktiv I

c) Experten berichten, die Inflation **werde** sinken.
- "wird" blir "werde" i Konjunktiv I

**Viktig:** Konjunktiv I signaliserer at journalisten gjengir noe uten å garantere at det er sant.`,
    },
    {
      id: 'tysk-3-8-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-8-2-ex-1',
        number: '8.2.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv om til indirekte tale med Konjunktiv I:',
        subTasks: [
          { label: 'a', task: 'Der Politiker sagt: "Ich bin unschuldig."', solution: 'Der Politiker sagt, er sei unschuldig.', answer: 'sei' },
          { label: 'b', task: 'Die Firma teilt mit: "Wir haben 100 neue Jobs geschaffen."', solution: 'Die Firma teilt mit, sie habe 100 neue Jobs geschaffen.', answer: 'habe' },
          { label: 'c', task: 'Der Wetterdienst meldet: "Es wird morgen regnen."', solution: 'Der Wetterdienst meldet, es werde morgen regnen.', answer: 'werde' },
        ],
        solution: 'a) sei, b) habe, c) werde',
        hints: ['sein: ist -> sei', 'haben: hat -> habe', 'werden: wird -> werde'],
      },
    },
    {
      id: 'tysk-3-8-2-text-2',
      type: 'text',
      content: `## Formelle Redewendungen

Nyhetsspråk bruker faste uttrykk og vendinger som gir teksten autoritet og profesjonalitet.

**Vanlige nyhetsvendinger:**
- "Wie aus Regierungskreisen verlautet..." (Som det horer fra regjeringskretser...)
- "Nach Angaben von..." (Ifølge opplysninger fra...)
- "Laut einer Studie..." (Ifølge en studie...)
- "Es wird berichtet, dass..." (Det rapporteres at...)
- "Im Zuge der Entwicklung..." (I løpet av utviklingen...)
- "Trotz der Kritik..." (Til tross for kritikken...)
- "Angesichts der Lage..." (I lys av situasjonen...)`,
    },
    {
      id: 'tysk-3-8-2-def-2',
      type: 'definition',
      title: 'Vokabular: Nachrichtensprache',
      content: `**Typiske nyhetsord:**

| Tysk | Norsk |
|------|-------|
| bekannt geben | å offentliggjøre |
| mitteilen | å meddele |
| berichten | å rapportere |
| fordern | å kreve |
| kritisieren | å kritisere |
| beschließen | å vedta |
| ankündigen | å kunngjore |
| bestätigen | å bekrefte |
| dementieren | å avkrefte |
| laut | ifølge |
| zufolge | ifølge |
| offenbar | tydeligvis |
| angeblich | angivelig |`,
    },
    {
      id: 'tysk-3-8-2-example-2',
      type: 'example',
      title: 'Eksempel 2: En nyhetsartikkel analysert',
      problem: `Analyser denne nyhetsteksten:

"Laut Angaben der Bundesregierung seien die Verhandlungen erfolgreich verlaufen. Der Aussenminister habe bekräftigt, dass Deutschland zu seinen Verpflichtungen stehe. Kritiker hingegen bezweifeln, ob die getroffenen Vereinbarungen ausreichen werden. Eine endgültige Entscheidung werde in der kommenden Woche erwartet."

a) Hvilke Konjunktiv I-former finner du?
b) Hvilke nyhetsvendinger brukes?
c) Hvordan markeres usikkerhet?`,
      solution: `a) Konjunktiv I-former:
- "seien" (fra sein)
- "habe bekräftigt" (fra haben)
- "stehe" (fra stehen)
- "werde erwartet" (fra werden)

b) Nyhetsvendinger:
- "Laut Angaben der Bundesregierung" (Ifølge opplysninger fra regjeringen)
- "Kritiker hingegen bezweifeln" (Kritikere derimot tviler pa)

c) Usikkerhet markeres med:
- Konjunktiv I (viser at dette er noe noen sier, ikke fakta)
- "bezweifeln, ob" (tviler på om)
- Passiv konstruksjon "werde erwartet" (forventes)`,
    },
    {
      id: 'tysk-3-8-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-8-2-ex-2',
        number: '8.2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig nyhetsuttrykk:',
        subTasks: [
          { label: 'a', task: '___ einer neuen Studie steigt die Arbeitslosigkeit (ifølge).', solution: 'Laut', answer: 'Laut' },
          { label: 'b', task: 'Die Regierung hat neue Maßnahmen ___ (offentliggjort).', solution: 'bekannt gegeben', answer: 'bekannt gegeben' },
          { label: 'c', task: 'Der Sprecher hat die Geruchte ___ (avkreftet).', solution: 'dementiert', answer: 'dementiert' },
          { label: 'd', task: '___ der schwierigen Lage bleibt die Regierung optimistisch (til tross for).', solution: 'Trotz', answer: 'Trotz' },
        ],
        solution: 'a) Laut, b) bekannt gegeben, c) dementiert, d) Trotz',
        hints: ['laut + Genitiv = ifølge', 'dementieren = å avkrefte et rykte'],
      },
    },
    {
      id: 'tysk-3-8-2-text-3',
      type: 'text',
      content: `## Konjunktiv II als Alternative

Når Konjunktiv I-formen er lik indikativ (vanlig form), bruker man **Konjunktiv II** i stedet.

**Eksempel:**
- Indikativ: "Sie sagen, sie haben keine Zeit."
- Problem: "haben" og Konjunktiv I "haben" er like!
- Løsning: "Sie sagen, sie **hatten** keine Zeit." (Konjunktiv II)

**Konjunktiv II-former av vanlige verb:**
- haben → hatten
- sein → waren
- werden → wurden
- können → konnten
- müssen → mussten`,
    },
    {
      id: 'tysk-3-8-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Skriv en nyhetsmelding',
      problem: `Skriv om denne direkte talen til en nyhetsmelding med Konjunktiv:

**Pressemeldung:**
Statsministeren sa: "Norge og Tyskland har et sterkt partnerskap. Vi vil fortsette samarbeidet innen energi og sikkerhet. Begge land ønsker tettere forbindelser."`,
      solution: `**Nyhetsspråk:**
Der norwegische Ministerpräsident erklärte, Norwegen und Deutschland **hatten** eine starke Partnerschaft. Man **werde** die Zusammenarbeit im Bereich Energie und Sicherheit fortsetzen. Beide Länder **wünschten** engere Verbindungen.

**Forklaring:**
- "hatten" - Konjunktiv II (fordi "haben" og Konj. I "haben" er like)
- "werde" - Konjunktiv I av werden
- "wünschten" - Konjunktiv II av wünschen

**Tips:** I nyheter brukes ofte 3. person ("man", "beide Länder") i stedet for "wir".`,
    },
    {
      id: 'tysk-3-8-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-8-2-ex-3',
        number: '8.2.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort nyhetsmelding (4-5 setninger) på tysk. Bruk minst to Konjunktiv-former og to nyhetsvendinger.',
        subTasks: [
          { label: 'a', task: 'Velg et tema (politikk, sport, vaer, etc.)', solution: 'Valgfritt tema' },
          { label: 'b', task: 'Skriv meldingen med Konjunktiv', solution: 'Bruk sei, habe, werde eller hatten, ware' },
          { label: 'c', task: 'Bruk nyhetsvendinger', solution: 'F.eks. laut, nach Angaben, wie bekannt wurde' },
        ],
        solution: 'Eksempel: "Wie aus Regierungskreisen verlautet, werde die Regierung nächste Woche neue Klimamassnahmen vorstellen. Der Umweltminister erklärte, man sei auf dem richtigen Weg. Laut Experten hatten die bisherigen Maßnahmen nicht ausgereicht. Eine Pressekonferenz werde für Montag erwartet."',
        hints: ['Konjunktiv I: sei, habe, werde', 'Konjunktiv II: ware, hatte, wurde'],
      },
    },
    {
      id: 'tysk-3-8-2-tip-1',
      type: 'tip',
      content: `**Øving:** Les tyske nyheter på Tagesschau.de eller Spiegel.de og marker alle Konjunktiv-formene du finner. Legg merke til hvordan journalister bruker indirekte tale for å distansere seg fra påstandene.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.3: Meinungsartikel
// ============================================================================

export const CHAPTER_TYSK_3_8_3: TextbookChapter = {
  id: 'tysk-3-8-3',
  courseId: 'tysk-3',
  chapterNumber: '8.3',
  title: 'Meinungsartikel',
  subtitle: 'Kommentarer og argumentasjon',
  description: 'Lær å skrive og analysere meningsartikler og kommentarer på tysk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstå strukturen i meningsartikler',
    'analysere argumentasjon',
    'skrive egne kommentarer på tysk',
  ],
  content: [
    {
      id: 'tysk-3-8-3-intro',
      type: 'text',
      content: `## Meinungsartikel und Kommentare

I motsetning til nyhetsartikler, som skal være objektive, uttrykker **Meinungsartikel** (meningsartikler) og **Kommentare** (kommentarer) forfatterens personlige synspunkt.

**Typer meningsinnhold:**
- **Der Kommentar** - kort, personlig vurdering av en nyhet
- **Der Leitartikel** - hovedkommentar, ofte på forsiden
- **Die Kolumne** - fast spalte av en fast skribent
- **Das Editorial** - redaksjonskommentar
- **Der Gastbeitrag** - gjesteinnlegg fra eksperter

Meningsartikler er viktige for den offentlige debatten og demokratiet.`,
    },
    {
      id: 'tysk-3-8-3-def-1',
      type: 'definition',
      title: 'Vokabular: Argumentation',
      content: `**Argumentasjonsord:**

| Tysk | Norsk |
|------|-------|
| die Meinung | mening |
| das Argument | argument |
| die These | tese/påstand |
| der Standpunkt | standpunkt |
| die Begründung | begrunnelse |
| der Einwand | innvending |
| überzeugen | å overbevise |
| behaupten | å pAstå |
| begründen | å begrunne |
| widerlegen | å motbevise |
| einwenden | å innvende |
| folglich | folglich |
| daher | derfor |
| deshalb | derfor |
| jedoch | imidlertid |
| obwohl | selv om |`,
    },
    {
      id: 'tysk-3-8-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Struktur eines Kommentars',
      problem: `Analyser strukturen i denne kommentaren:

**"Zeit für Veränderung"**
"Die Klimakrise ist die größte Herausforderung unserer Zeit. [These] Dennoch handelt die Regierung zu langsam. [Kritikk] Die neuen Maßnahmen reichen bei Weitem nicht aus, um die Pariser Klimaziele zu erreichen. [Begrunnelse] Obwohl die Wirtschaft vor schnellen Änderungen warnt, muss der Klimaschutz Vorrang haben. [Motargument og svar] Es ist hoechste Zeit, dass Deutschland seiner Verantwortung gerecht wird. [Konklusjon]"

Identifiser: a) Tesen b) Begrunnelsen c) Motargumentet d) Konklusjonen`,
      solution: `a) **These:** "Die Klimakrise ist die größte Herausforderung unserer Zeit" og "die Regierung handelt zu langsam."

b) **Begrunnelse:** "Die neuen Maßnahmen reichen bei Weitem nicht aus, um die Pariser Klimaziele zu erreichen."

c) **Motargument (og svar):** "Obwohl die Wirtschaft vor schnellen Änderungen warnt, muss der Klimaschutz Vorrang haben." - Forfatteren anerkjenner motargumentet, men avviser det.

d) **Konklusjon:** "Es ist höchste Zeit, dass Deutschland seiner Verantwortung gerecht wird."

**Struktur:** These -> Begrunnelse -> Behandling av motargument -> Konklusjon`,
    },
    {
      id: 'tysk-3-8-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-8-3-ex-1',
        number: '8.3.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn riktig argumentasjonselement:',
        subTasks: [
          { label: 'a', task: '"Ich bin der Meinung, dass..." er en...', solution: 'These/Pastand', answer: 'These' },
          { label: 'b', task: '"Das zeigt sich daran, dass..." er en...', solution: 'Begrunnelse', answer: 'Begründung' },
          { label: 'c', task: '"Kritiker wenden ein, dass..." er et...', solution: 'Motargument', answer: 'Einwand' },
          { label: 'd', task: '"Deshalb sollten wir..." er en...', solution: 'Konklusjon', answer: 'Schlussfølgerung' },
        ],
        solution: 'a) These, b) Begründung, c) Einwand, d) Schlussfølgerung',
        hints: ['These = hovedpåstand', 'Begründung = hvorfor du mener det'],
      },
    },
    {
      id: 'tysk-3-8-3-text-2',
      type: 'text',
      content: `## Argumentationstechniken

Gode argumenter følger en logisk struktur. Her er noen vanlige teknikker:

**1. Das Beispiel-Argument:**
"In Danemark zeigt sich, dass erneuerbare Energien funktionieren."

**2. Das Autoritatsargument:**
"Laut Experten des IPCC..." / "Wie der Nobelpreistrager X feststellte..."

**3. Das Fakten-Argument:**
"Statistiken zeigen, dass 80% der Deutschen..."

**4. Das Werteargument:**
"In einer Demokratie ist es wichtig, dass..."

**5. Das Folge-Argument:**
"Wenn wir nicht handeln, werden die Konsequenzen sein..."`,
    },
    {
      id: 'tysk-3-8-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Argumenttyper identifisere',
      problem: `Hvilken type argument er dette?

a) "Studien zeigen, dass 70% der Jugendlichen täglich soziale Medien nutzen."
b) "Wie der bekannte Soziologe Max Müller betont..."
c) "In Norwegen funktioniert das Modell bereits erfolgreich."
d) "Wenn wir jetzt nicht handeln, wird es zu spat sein."`,
      solution: `a) **Fakten-Argument** - bruker statistikk/tall som bevis

b) **Autoritatsargument** - refererer til en anerkjent ekspert

c) **Beispiel-Argument** - viser til et konkret eksempel fra et annet land

d) **Folge-Argument** - viser til konsekvensene av (ikke) å handle

**Tips:** Gode kommentarer bruker flere ulike argumenttyper for å overbevise leseren.`,
    },
    {
      id: 'tysk-3-8-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-8-3-ex-2',
        number: '8.3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et argument av hver type på tysk:',
        subTasks: [
          { label: 'a', task: 'Fakten-Argument (bruk tall)', solution: 'Eksempel med statistikk' },
          { label: 'b', task: 'Beispiel-Argument (bruk et land)', solution: 'Eksempel fra et annet land' },
          { label: 'c', task: 'Folge-Argument (bruk "wenn...dann")', solution: 'Argument om konsekvenser' },
        ],
        solution: 'Eksempel: a) "Über 60 Prozent der Deutschen unterstützen strengere Klimagesetze." b) "In Schweden hat die CO2-Steuer zu niedrigeren Emissionen geführt." c) "Wenn wir nicht investieren, werden wir den Anschluss verlieren."',
        hints: ['Fakten: Prozent, Statistik, Studien', 'Beispiel: In Land X zeigt sich...'],
      },
    },
    {
      id: 'tysk-3-8-3-text-3',
      type: 'text',
      content: `## Eine Stellungnahme schreiben

En **Stellungnahme** (stillingtagen) er en strukturert meningsytring. Her er en mal:

**Struktur:**
1. **Einleitung** - presenter temaet og din hovedtese
2. **Hauptteil** - argumenter med begrunnelser
3. **Auseinandersetzung mit Gegenargumenten** - ta opp motargumenter
4. **Schluss** - oppsummer og trekk konklusjon

**Nyttige fraser:**
- "Meiner Meinung nach..." (Etter min mening...)
- "Ich bin überzeugt, dass..." (Jeg er overbevist om at...)
- "Zwar..., aber..." (Riktignok..., men...)
- "Zusammenfassend lässt sich sagen..." (Oppsummert kan man si...)`,
    },
    {
      id: 'tysk-3-8-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Schritt für Schritt',
      problem: `Skriv en kort Stellungnahme til temaet: "Sollten Smartphones in der Schule verboten werden?"

Bruk strukturen:
1. Einleitung med din mening
2. To argumenter
3. Et motargument med svar
4. Konklusjon`,
      solution: `**Eksempel-Stellungnahme:**

**Einleitung:**
"Die Frage, ob Smartphones in der Schule verboten werden sollten, ist umstritten. Meiner Meinung nach sollten sie während des Unterrichts verboten sein."

**Argument 1:**
"Erstens lenken Smartphones vom Unterricht ab. Studien zeigen, dass Schüler schlechter lernen, wenn sie ständig auf ihr Handy schauen."

**Argument 2:**
"Zweitens fordern Smartphones Cybermobbing. Ohne Handys in der Schule werden weniger Mitschuler online gemobbt."

**Motargument:**
"Zwar können Smartphones auch als Lernwerkzeug genutzt werden, aber Lehrer können Tablets für diesen Zweck bereitstellen."

**Konklusjon:**
"Zusammenfassend bin ich der Meinung, dass ein Smartphone-Verbot während des Unterrichts sinnvoll ist."`,
    },
    {
      id: 'tysk-3-8-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-8-3-ex-3',
        number: '8.3.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en Stellungnahme (8-10 setninger) til temaet: "Sollte der offentliche Nahverkehr kostenlos sein?" Folg strukturen:',
        subTasks: [
          { label: 'a', task: 'Einleitung mit deiner These', solution: 'Presenter din hovedmening' },
          { label: 'b', task: 'Zwei Argumente mit Begründung', solution: 'To argumenter med begrunnelse' },
          { label: 'c', task: 'Ein Gegenargument und deine Antwort', solution: 'Anerkjenn og svar på motargument' },
          { label: 'd', task: 'Schlussfølgerung', solution: 'Oppsummer din posisjon' },
        ],
        solution: 'Eksempel: "Offentlicher Nahverkehr sollte meiner Meinung nach kostenlos sein. Erstens würde dies den Autoverkehr reduzieren und die Umwelt schonen. Zweitens wäre es sozial gerecht, da alle Menschen mobil sein konnten. Zwar würde dies viel Geld kosten, aber die Vorteile für Umwelt und Gesellschaft überwiegen. Zusammenfassend bin ich überzeugt, dass kostenloser Nahverkehr eine gute Investition wäre."',
        hints: ['Einleitung: Meiner Meinung nach...', 'Argumente: Erstens..., Zweitens...', 'Gegenargument: Zwar..., aber...'],
      },
    },
    {
      id: 'tysk-3-8-3-tip-1',
      type: 'tip',
      content: `**Ovelsestips:** Les kommentarer i Die Zeit eller FAZ og analyser strukturen. Legg merke til hvordan forfatteren bygger opp argumentasjonen og behandler motargumenter.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.4: Kritische Medienanalyse
// ============================================================================

export const CHAPTER_TYSK_3_8_4: TextbookChapter = {
  id: 'tysk-3-8-4',
  courseId: 'tysk-3',
  chapterNumber: '8.4',
  title: 'Kritische Medienanalyse',
  subtitle: 'Kildekritikk og fake news',
  description: 'Lær å analysere medieinnhold kritisk og gjenkjenne falske nyheter.',
  estimatedMinutes: 45,
  competenceGoals: [
    'analysere medieinnhold kritisk',
    'gjenkjenne desinformasjon og fake news',
    'vurdere kilders troverdighet',
  ],
  content: [
    {
      id: 'tysk-3-8-4-intro',
      type: 'text',
      content: `## Kritische Medienanalyse

I en tid med informasjonsoverflod og sosiale medier er **Medienkompetenz** (mediekompetanse) viktigere enn noensinne. A kunne vurdere informasjon kritisk er en grunnleggende ferdighet.

**Utfordringer i medielandskapet:**
- **Fake News** - bevisst falske nyheter
- **Desinformation** - villedende informasjon
- **Filterblasen** - algoritmer viser deg bare det du allerede tror på
- **Deepfakes** - manipulerte videoer
- **Clickbait** - overdrevne overskrifter for klikk
- **Propaganda** - politisk påvirkning

Kritisk tenkning hjelper oss å navigere i dette landskapet.`,
    },
    {
      id: 'tysk-3-8-4-def-1',
      type: 'definition',
      title: 'Vokabular: Medienkritik',
      content: `**Mediekritiske begreper:**

| Tysk | Norsk |
|------|-------|
| die Fake News | falske nyheter |
| die Desinformation | desinformasjon |
| die Propaganda | propaganda |
| die Quelle | kilde |
| glaubwürdig | troverdig |
| unglaubwürdig | utroverdig |
| überprüfen | å verifisere |
| hinterfragen | å stille spørsmål ved |
| die Manipulation | manipulasjon |
| die Tatsache | fakta |
| der Faktencheck | faktasjekk |
| verbreiten | å spre |
| die Filterblase | filterboble |
| der Algorithmus | algoritme |`,
    },
    {
      id: 'tysk-3-8-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Fake News erkennen',
      problem: `Analyser disse to "nyhetene":

**A:** "SCHOCK! Wissenschaftler entdecken: Kaffee ist TÖDLICH! Millionen in Gefahr!"
(Fra: gesundheits-wahrheit.info)

**B:** "Studie zeigt Zusammenhang zwischen hohem Kaffeekonsum und Herzproblemen"
(Fra: aerzteblatt.de)

Hvilken er mest troverdig og hvorfor?`,
      solution: `**B er mest troverdig.** Her er varselstegnene for A:

**Fake News-kjennetegn i A:**
1. Store bokstaver og utropstegn (SCHOCK!, TÖDLICH!)
2. Overdrevne påstander ("Millionen in Gefahr")
3. Ukjent nettsted (.info-domene)
4. Ingen navngitte forskere eller studier
5. Absolutte uttrykk ("tödlich" uten nyanser)

**Kjennetegn på serios nyhet i B:**
1. Nøytral tone og språk
2. Nyansert formulering ("Zusammenhang", ikke "verursacht")
3. Anerkjent medisinsk fagblad (aerzteblatt.de)
4. Refererer til "Studie" (kan verifiseres)

**Regel:** Var skeptisk til dramatiske overskrifter og sjekk kilden!`,
    },
    {
      id: 'tysk-3-8-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-8-4-ex-1',
        number: '8.4.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Er dette varselstegn på Fake News? Ja eller nei:',
        subTasks: [
          { label: 'a', task: 'Mange store bokstaver og utropstegn', solution: 'Ja', answer: 'Ja' },
          { label: 'b', task: 'Referanse til navngitte eksperter', solution: 'Nei', answer: 'Nei' },
          { label: 'c', task: 'Ukjent nettsted uten impressum', solution: 'Ja', answer: 'Ja' },
          { label: 'd', task: 'Nøytral og saklig tone', solution: 'Nei', answer: 'Nei' },
          { label: 'e', task: 'Pastander som "Alle vet at..."', solution: 'Ja', answer: 'Ja' },
        ],
        solution: 'a) Ja, b) Nei, c) Ja, d) Nei, e) Ja',
        hints: ['Serios journalistikk er nøytral og verifiserbar'],
      },
    },
    {
      id: 'tysk-3-8-4-text-2',
      type: 'text',
      content: `## Quellen überprüfen

For å vurdere en kildes troverdighet, still disse spørsmålene:

**Die 5 W-Fragen für Quellenkritik:**
1. **Wer?** - Hvem star bak informasjonen?
2. **Was?** - Hva er budskapet? Er det balansert?
3. **Wann?** - Når ble det publisert? Er det fortsatt aktuelt?
4. **Wo?** - Hvor kommer informasjonen fra?
5. **Warum?** - Hvorfor ble dette publisert? Hva er motivet?

**Praktiske sjekker:**
- Sok etter andre kilder som bekrefter informasjonen
- Sjekk forfatterens bakgrunn
- Se etter impressum (kontaktinformasjon)
- Bruk faktasjekk-nettsteder (Correctiv, Mimikama)`,
    },
    {
      id: 'tysk-3-8-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Quellenanalyse',
      problem: `Vurder disse kildene for en artikkel om klimaendringer:

a) Et blogginnlegg fra "klimaskeptiker-wahrheit.de"
b) En rapport fra IPCC (FNs klimapanel)
c) En Facebook-post som deles tusenvis av ganger
d) En artikkel i Süddeutsche Zeitung som siterer klimaforskere`,
      solution: `**Vurdering:**

a) **Lav troverdighet**
- Ukjent nettsted med tydelig agenda ("skeptiker")
- Ingen redaksjonell kontroll
- Sannsynlig confirmation bias

b) **Høy troverdighet**
- Internasjonal vitenskapelig organisasjon
- Fagfellevurdert forskning
- Sammenstiller tusenvis av studier

c) **Lav troverdighet**
- Sosiale medier har ingen faktasjekk
- "Mange delinger" betyr ikke at noe er sant
- Opphav ofte uklart

d) **Middels til høy troverdighet**
- Anerkjent kvalitetsavis
- Refererer til eksperter
- Redaksjonell kontroll, men kan ha bias

**Konklusjon:** Primaerkilder (som IPCC-rapporten) og kvalitetsmedier er mest pålitelige.`,
    },
    {
      id: 'tysk-3-8-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-8-2-ex-2',
        number: '8.4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Ranger kildene fra mest til minst troverdig (1-4):',
        subTasks: [
          { label: 'a', task: 'Eine wissenschaftliche Studie in Nature', solution: '1 - mest troverdig', answer: '1' },
          { label: 'b', task: 'Ein YouTube-Video mit Millionen Aufrufen', solution: '4 - minst troverdig', answer: '4' },
          { label: 'c', task: 'Ein Artikel in Der Spiegel', solution: '2 - høy troverdighet', answer: '2' },
          { label: 'd', task: 'Ein anonymer Forenbeitrag', solution: '3 - lav troverdighet', answer: '3' },
        ],
        solution: '1) Nature-studie, 2) Spiegel-artikkel, 3) Anonym forum, 4) YouTube-video',
        hints: ['Fagfellevurderte studier er mest pålitelige', 'Anonyme kilder er minst pålitelige'],
      },
    },
    {
      id: 'tysk-3-8-4-text-3',
      type: 'text',
      content: `## Strategien gegen Desinformation

Hvordan kan vi beskytte oss mot falsk informasjon?

**Individuelle strategier:**
- **Pause:** Ikke del for du har sjekket
- **Faktencheck:** Bruk Correctiv.org, Mimikama, AFP Faktencheck
- **Diversifizieren:** Les flere ulike kilder
- **Originalquellen suchen:** Ga til primaerkilden
- **Emotionale Reaktionen hinterfragen:** Sterke følelser = var forsiktig

**Gesellschaftliche Strategien:**
- Medieutdanning i skolen
- Plattformregulering
- Støtte til uavhengig journalistikk
- Faktasjekk-initiativer`,
    },
    {
      id: 'tysk-3-8-4-def-2',
      type: 'definition',
      title: 'Vokabular: Faktencheck',
      content: `**Faktasjekk-uttrykk:**

| Tysk | Norsk |
|------|-------|
| verifizieren | verifisere |
| bestätigen | bekrefte |
| widerlegen | motbevise |
| die Originalquelle | originalkilden |
| der Faktencheck | faktasjekk |
| irreführend | villedende |
| aus dem Kontext gerissen | tatt ut av kontekst |
| manipuliert | manipulert |
| teilweise wahr | delvis sant |
| falsch | usant |
| unbelegt | udokumentert |`,
    },
    {
      id: 'tysk-3-8-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Einen Faktencheck durchfuhren',
      problem: `Du ser dette innlegget på sosiale medier:

"Deutschland hat die höchsten Strompreise der Welt wegen der Energiewende! Die Regierung verschweigt das!"

Hvordan vil du gjennomfore en faktasjekk?`,
      solution: `**Faktencheck-prosess:**

**Steg 1: Verifiser påstanden**
- Sok etter statistikk over stromprise fra pålitelige kilder (Eurostat, IEA)
- Resultat: Tyskland har høye, men ikke de høyeste stromprisene

**Steg 2: Sjekk kontekst**
- Prisene varierer etter forbrukertype
- Andre faktorer enn Energiewende påvirker (skatter, nettavgifter)

**Steg 3: Sjekk påstanden om "hemmeligholdelse"**
- Strømprisstatistikk er offentlig tilgjengelig
- Regjeringen diskuterer temaet åpent

**Konklusjon:**
- **Teilweise wahr:** Tyskland har høye strømpriser
- **Irrefuhrend:** Ikke de høyeste i verden
- **Falsch:** Regjeringen "skjuler" det ikke

**Faktencheck-rating:** Diese Behauptung ist irreführend.`,
    },
    {
      id: 'tysk-3-8-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-3-8-4-ex-3',
        number: '8.4.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjennomfor en kritisk analyse av en medietekst. Velg en aktuell nyhet fra et tysk medium og svar på disse spørsmålene på tysk:',
        subTasks: [
          { label: 'a', task: 'Welche Quelle hast du gewählt und warum?', solution: 'Begrunn valg av kilde' },
          { label: 'b', task: 'Ist die Quelle glaubwürdig? Begründe!', solution: 'Vurder troverdighet med argumenter' },
          { label: 'c', task: 'Wie konnte man die Information überprüfen?', solution: 'Forklar hvordan du ville faktasjekket' },
          { label: 'd', task: 'Was ist dein Fazit?', solution: 'Oppsummer din vurdering' },
        ],
        solution: 'Eksempel: "Ich habe einen Artikel von Tagesschau.de gewählt, weil es ein offentlich-rechtliches Medium ist. Die Quelle ist glaubwürdig, da sie einem Informationsauftrag unterliegt und Fakten geprüft werden. Man konnte die Information durch Vergleich mit anderen Quellen überprüfen. Mein Fazit: Der Artikel ist zuverlassig, weil er Quellen nennt und neutral berichtet."',
        hints: ['Begründe alle Antworten', 'Verwende Vokabular aus dem Kapitel'],
      },
    },
    {
      id: 'tysk-3-8-4-note-1',
      type: 'note',
      title: 'Medienkompetenz als Bürgerpflicht',
      content: `I et demokrati er det viktig at borgere kan vurdere informasjon kritisk. Desinformasjon kan undergrave tillit til institusjoner og polarisere samfunnet. Ved å utvikle mediakompetanse bidrar du til et sunnere offentlig ordskifte. Tenk kritisk, men var også åpen for å endre mening når du motes med gode argumenter!`,
    },
    {
      id: 'tysk-3-8-4-tip-1',
      type: 'tip',
      content: `**Praktisk øving:** Ga til Correctiv.org eller Mimikama.at og les noen faktasjekker. Legg merke til hvordan de dokumenterer sine funn og vurderer påstanders sannhetsgehalt. Prov å gjore en egen faktasjekk av noe du har sett på sosiale medier!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle kapitler
// ============================================================================

export const TYSK_3_CHAPTERS_7_8: TextbookChapter[] = [
  CHAPTER_TYSK_3_7_1,
  CHAPTER_TYSK_3_7_2,
  CHAPTER_TYSK_3_7_3,
  CHAPTER_TYSK_3_7_4,
  CHAPTER_TYSK_3_8_1,
  CHAPTER_TYSK_3_8_2,
  CHAPTER_TYSK_3_8_3,
  CHAPTER_TYSK_3_8_4,
];
