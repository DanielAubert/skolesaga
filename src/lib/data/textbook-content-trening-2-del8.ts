/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Treningslære 2 (VG3) - Seksjon 8: Treningsprosjekt
 *
 * Dekker LK20-kompetansemål for treningslære 2
 * 5 delkapitler (8.1–8.5): Prosjektplanlegging, datainnsamling og testing,
 * gjennomføring av treningsprogram, analyse og tolkning, rapportskriving og presentasjon
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 8.1: Prosjektplanlegging
// ============================================================================

export const CHAPTER_TRENING_2_8_1: TextbookChapter = {
  id: 'trening-2-8-1',
  courseId: 'trening-2',
  chapterNumber: '8.1',
  title: 'Prosjektplanlegging',
  description: 'Problemstilling, valg av metode og utarbeidelse av tidsplan for et treningsprosjekt.',
  estimatedMinutes: 20,
  competenceGoals: [
    'kunne formulere en presis og avgrenset problemstilling for et treningsprosjekt',
    'kunne velge hensiktsmessig metode for datainnsamling',
    'kunne utarbeide en realistisk tidsplan for gjennomføring av prosjektet',
  ],
  keyTerms: [],
  content: [
    {
      id: 'tr2-8-1-intro',
      type: 'text',
      content: `## Treningsprosjektet i treningslære 2

I treningslære 2 skal du planlegge, gjennomføre og evaluere et eget treningsprosjekt. Dette er en sentral del av faget og gir deg mulighet til å bruke kunnskapen du har tilegnet deg gjennom kurset i praksis. Prosjektet skal bygge på vitenskapelig metode, og du skal dokumentere arbeidet i en skriftlig rapport.

Et godt treningsprosjekt starter med grundig planlegging. I denne fasen skal du formulere en problemstilling, velge metode, og lage en tidsplan som sikrer at du rekker alle delene av prosjektet innenfor den tilgjengelige tidsrammen.

**Et treningsprosjekt inneholder vanligvis disse fasene:**
- Planlegging og problemstilling
- Pretesting og datainnsamling
- Gjennomføring av treningsprogram
- Posttesting og ny datainnsamling
- Analyse og tolkning av resultater
- Rapportskriving og presentasjon`,
    },
    {
      id: 'tr2-8-1-def-problemstilling',
      type: 'definition',
      title: 'Problemstilling',
      content: 'En problemstilling er et klart og avgrenset spørsmål som prosjektet skal besvare. Den angir hva du vil undersøke, hvem du undersøker, og ofte hvilken metode du bruker. En god problemstilling er spesifikk nok til å kunne besvares innenfor prosjektets rammer.',
    },
    {
      id: 'tr2-8-1-problemstilling',
      type: 'text',
      title: 'Formulering av problemstilling',
      content: `Den viktigste delen av planleggingsfasen er å formulere en god problemstilling. Problemstillingen styrer hele prosjektet: den bestemmer hvilken metode du bruker, hvilke data du samler inn, og hvordan du analyserer resultatene.

**Kjennetegn på en god problemstilling:**
- **Spesifikk:** Den angir tydelig hva du vil undersøke
- **Målbar:** Du kan samle inn data som besvarer spørsmålet
- **Avgrenset:** Den kan besvares innenfor prosjektets tidsramme
- **Relevant:** Den er faglig relevant for treningslære

**Eksempler på svake og sterke problemstillinger:**

| Svak problemstilling | Sterk problemstilling |
|---------------------|----------------------|
| Blir man sterkere av styrketrening? | Hvordan påvirker 6 uker med styrketrening i knebøy maksimal styrke (1RM) hos mannlige elever i VG3? |
| Er intervalltrening bra? | Hvilken effekt har 4x4-intervalltrening tre ganger per uke i 8 uker på VO2maks hos utrente jenter (17–18 år)? |
| Hjelper tøying? | I hvilken grad forbedrer 6 uker med daglig statisk tøying hamstringsfleksibiliteten målt med sit-and-reach-test? |

Legg merke til at de sterke problemstillingene angir treningsmetode, varighet, målemetode og målgruppe.`,
    },
    {
      id: 'tr2-8-1-example-problemstilling',
      type: 'example',
      title: 'Eksempel: Fra tema til problemstilling',
      problem: 'Du er interessert i hvordan styrketrening påvirker spenstprestasjoner. Formuler en presis problemstilling for et 8 ukers prosjekt.',
      solution: `**Steg 1 – Velg tema:** Styrketrening og spenst.

**Steg 2 – Avgrens:** Du velger å fokusere på plyometrisk trening (spensttrening) og vertikal spenst.

**Steg 3 – Velg målgruppe:** Elever i VG3 som spiller volleyball.

**Steg 4 – Velg test:** Sargent jump test (vertikal hopphøyde).

**Steg 5 – Formuler problemstillingen:** «Hvilken effekt har 8 uker med plyometrisk trening to ganger per uke på vertikal hopphøyde (målt med Sargent jump test) hos volleyballspillere i VG3?»

Denne problemstillingen er spesifikk (plyometrisk trening, vertikal hopphøyde), målbar (Sargent jump test), avgrenset (8 uker, to ganger per uke) og relevant (spenst er viktig i volleyball).`,
    },
    {
      id: 'tr2-8-1-metode',
      type: 'text',
      title: 'Valg av metode',
      content: `Metoden du velger må passe til problemstillingen. I treningsprosjekter brukes vanligvis en **eksperimentell tilnærming** der du gjennomfører en treningsintervensjon og måler effekten med tester før og etter.

**Vanlige metoder i treningsprosjekter:**

**1. Pretest-posttest-design**
- Gjennomfør relevante tester før treningsperioden (pretest)
- Gjennomfør treningsprogrammet
- Gjennomfør de samme testene etter treningsperioden (posttest)
- Sammenlign resultatene

**2. Treningsdagbok**
- Dokumenter alle treningsøkter systematisk
- Registrer øvelser, serier, repetisjoner, belastning og opplevd anstrengelse
- Gir grunnlag for å vurdere progresjon og etterlevelse

**3. Spørreskjema**
- Kan brukes som supplement for å kartlegge subjektive opplevelser
- Motivasjon, smerte, opplevd form, treningsvaner

**Viktige hensyn ved metodevalg:**
- Velg tester som er valide (måler det du vil måle) og reliable (gir like resultater ved gjentatte målinger)
- Bruk standardiserte testprosedyrer
- Sørg for like testbetingelser ved pre- og posttest`,
    },
    {
      id: 'tr2-8-1-def-validitet',
      type: 'definition',
      title: 'Validitet og reliabilitet',
      content: 'Validitet handler om hvorvidt en test faktisk måler det den er ment å måle. Reliabilitet handler om hvor pålitelige og reproduserbare resultatene er ved gjentatte målinger under like forhold. Begge er avgjørende for kvaliteten på dataene i et treningsprosjekt.',
    },
    {
      id: 'tr2-8-1-tidsplan',
      type: 'text',
      title: 'Utarbeidelse av tidsplan',
      content: `En tidsplan gir oversikt over når de ulike delene av prosjektet skal gjennomføres. Den hjelper deg med å holde framdrift og sikrer at du rekker alle fasene.

**Eksempel på tidsplan for et 10 ukers prosjekt:**

| Uke | Aktivitet |
|-----|-----------|
| 1 | Formulere problemstilling, velge metode og tester |
| 2 | Litteratursøk, skrive teoridel, forberede tester |
| 3 | Gjennomføre pretest |
| 4–9 | Gjennomføre treningsprogram (6 uker), føre treningsdagbok |
| 10 | Gjennomføre posttest |
| 11 | Analysere data, skrive resultater |
| 12 | Skrive diskusjon og konklusjon, ferdigstille rapport |

**Tips for tidsplanlegging:**
- Legg inn buffertid for uforutsette hendelser (sykdom, utstyrsproblemer)
- Sett klare milepæler for hver fase
- Avtal testtidspunkter tidlig, spesielt hvis du trenger tilgang til utstyr eller testpersoner
- Start rapportskrivingen parallelt med treningsperioden – skriv innledning og teori mens treningen pågår`,
    },
    {
      id: 'tr2-8-1-tip-1',
      type: 'tip',
      title: 'Tips for planleggingsfasen',
      content: 'Bruk tid på planleggingen – det er en investering som betaler seg senere. En tydelig problemstilling gjør det mye enklere å velge riktig metode, samle relevante data og skrive en fokusert rapport. Diskuter gjerne problemstillingen med læreren din tidlig i prosessen for å få tilbakemelding før du starter datainnsamlingen.',
    },
    {
      id: 'tr2-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr2-8-1-ex-1',
        number: '8.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner en god problemstilling for et treningsprosjekt?',
        multipleChoiceOptions: [
          'Den er spesifikk, målbar, avgrenset og relevant',
          'Den er bred og åpen slik at den dekker mange emner',
          'Den trenger ikke å være målbar så lenge temaet er interessant',
          'Den bør unngå å nevne konkrete tester eller målemetoder',
        ],
        hints: ['Tenk på hva som gjør en problemstilling mulig å besvare med data'],
        solution: 'En god problemstilling er spesifikk (angir tydelig hva som undersøkes), målbar (du kan samle data for å besvare den), avgrenset (den kan besvares innenfor prosjektets tidsramme) og relevant (den er faglig relevant for treningslære). En bred og åpen problemstilling gjør det vanskelig å velge metode og samle fokuserte data.',
      },
    },
    {
      id: 'tr2-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr2-8-1-ex-2',
        number: '8.1.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr det at en test har høy validitet?',
        multipleChoiceOptions: [
          'Testen måler det den er ment å måle',
          'Testen gir samme resultat hver gang den gjennomføres',
          'Testen er enkel å gjennomføre uten spesialutstyr',
          'Testen kan brukes på alle aldersgrupper',
        ],
        hints: ['Validitet og reliabilitet er to ulike begreper – hva handler validitet om?'],
        solution: 'Validitet betyr at testen faktisk måler det den er ment å måle. For eksempel er en beep-test en valid test for å estimere VO2maks, mens en benkpress-test ikke er valid for å måle utholdenhet. Reliabilitet handler derimot om reproduserbarhet – at testen gir like resultater ved gjentatte målinger.',
      },
    },
    {
      id: 'tr2-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr2-8-1-ex-3',
        number: '8.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du er interessert i utholdenhetstrening. Formuler en presis problemstilling for et 6 ukers treningsprosjekt. Begrunn hvorfor problemstillingen din oppfyller kravene til en god problemstilling.',
        hints: ['Husk å inkludere treningsmetode, varighet, test og målgruppe'],
        solution: 'Eksempel: «Hvilken effekt har 6 uker med 4x4-intervalltrening (tre ganger per uke) på estimert VO2maks målt med beep-test hos utrente elever i VG3?» Denne problemstillingen er spesifikk fordi den angir treningsmetode (4x4-intervaller), frekvens (tre ganger per uke) og varighet (6 uker). Den er målbar fordi den bruker en standardisert test (beep-test) som gir et tallmessig resultat. Den er avgrenset fordi 6 uker er realistisk innenfor et skoleprosjekt. Den er relevant fordi utholdenhetstrening og VO2maks er sentrale temaer i treningslære.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr2-8-1-ex-4',
        number: '8.1.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en detaljert tidsplan for et treningsprosjekt som varer i 10 uker. Prosjektet skal inkludere pretest, 6 ukers treningsprogram, posttest og rapportskriving. Legg inn buffertid.',
        hints: ['Tenk på at rapportskrivingen kan starte parallelt med treningsperioden'],
        solution: 'Uke 1: Formulere problemstilling, velge metode og tester, gjøre litteratursøk. Uke 2: Forberede testprosedyrer og utstyr, rekruttere eventuelle forsøkspersoner, starte på innledning og teori i rapporten. Uke 3: Gjennomføre pretest (med buffer hvis noen er syke). Uke 4–9: Gjennomføre treningsprogram, føre treningsdagbok. Parallelt: skrive metodedel og ferdigstille teoridel. Uke 9 inneholder en bufferdag for eventuelle utsatte treningsøkter. Uke 10: Gjennomføre posttest under like betingelser som pretest. Uke 11: Analysere data, lage figurer og tabeller, skrive resultatdel. Uke 12: Skrive diskusjon og konklusjon, korrekturlese og ferdigstille rapport. Denne planen gir en ukes buffer mellom trening og posttest og starter rapportskrivingen tidlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-8-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr2-8-1-ex-5',
        number: '8.1.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vurder følgende problemstilling: «Er styrketrening bra for helsen?» Forklar hvilke svakheter den har, og omformuler den til en god problemstilling for et treningsprosjekt.',
        hints: ['Tenk på alle kjennetegnene ved en god problemstilling og hva som mangler her'],
        solution: 'Svakheter: 1) For bred – «styrketrening» er ikke spesifisert (hvilken type, frekvens, intensitet). 2) «Helsen» er for vagt – det er ikke angitt hvilken helseparameter som skal måles. 3) Ikke målbar – det mangler en konkret test eller målemetode. 4) Ikke avgrenset – det er ingen tidsramme eller målgruppe. 5) «Bra» er ikke et vitenskapelig presist begrep. Omformulert: «Hvilken effekt har 8 uker med styrketrening (3 ganger per uke, 3 serier x 8–12 repetisjoner) på maksimal styrke i benkpress og knebøy hos mannlige elever i VG3 som ikke har trent styrke regelmessig det siste året?» Denne versjonen er spesifikk, målbar, avgrenset og faglig relevant.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-8-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr2-8-1-ex-6',
        number: '8.1.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvorfor valg av metode er avgjørende for kvaliteten på et treningsprosjekt. Bruk begrepene validitet, reliabilitet og standardisering i svaret ditt, og gi eksempler på hvordan dårlig metodevalg kan svekke prosjektets konklusjoner.',
        hints: ['Tenk på hva som skjer med resultatene dersom testene ikke er standardiserte'],
        solution: 'Valg av metode er avgjørende fordi metodens kvalitet bestemmer hvor pålitelige og gyldige resultatene blir. Validitet: Hvis du velger en test som ikke måler det du vil undersøke (lav validitet), blir resultatene meningsløse. Eksempel: Å bruke en sprinttest for å måle effekten av utholdenhetstrening gir ikke svar på problemstillingen. Reliabilitet: Hvis testen gir ulike resultater fra gang til gang under like betingelser (lav reliabilitet), kan du ikke vite om endringene skyldes treningen eller tilfeldige svingninger i testresultatene. Eksempel: Å måle hjertefrekvens i hvile uten å kontrollere for koffeininntak eller søvn kan gi store variasjoner. Standardisering: Dersom testbetingelsene er ulike ved pre- og posttest, blir sammenligningen upålitelig. Eksempel: Hvis pretesten gjøres om morgenen og posttesten om ettermiddagen, kan forskjeller i resultat skyldes tidspunktet og ikke treningseffekten. Samlet sett: Dårlig metodevalg kan føre til at du trekker feilaktige konklusjoner – enten at treningen hadde effekt når den ikke hadde det, eller at en reell effekt ikke fanges opp.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.2: Datainnsamling og testing
// ============================================================================

export const CHAPTER_TRENING_2_8_2: TextbookChapter = {
  id: 'trening-2-8-2',
  courseId: 'trening-2',
  chapterNumber: '8.2',
  title: 'Datainnsamling og testing',
  description: 'Pretest, treningsdagbok, posttest og standardiserte testprosedyrer for treningsprosjektet.',
  estimatedMinutes: 20,
  competenceGoals: [
    'kunne gjennomføre standardiserte fysiske tester',
    'forstå betydningen av like testbetingelser ved pretest og posttest',
    'kunne føre en systematisk treningsdagbok',
  ],
  keyTerms: [],
  content: [
    {
      id: 'tr2-8-2-intro',
      type: 'text',
      content: `## Datainnsamling i treningsprosjektet

Datainnsamlingen er kjernen i treningsprosjektet. Det er gjennom systematisk innsamling av data du kan besvare problemstillingen din. De viktigste datakildene i et treningsprosjekt er fysiske tester (pretest og posttest) og treningsdagbok.

Kvaliteten på dataene avhenger av hvor grundig du planlegger og gjennomfører testene. Standardisering, kontroll av testbetingelser og nøyaktig registrering er avgjørende for at resultatene skal bli troverdige.`,
    },
    {
      id: 'tr2-8-2-def-pretest',
      type: 'definition',
      title: 'Pretest og posttest',
      content: 'En pretest er en test som gjennomføres før treningsintervensjonen starter, for å kartlegge utgangsnivået. En posttest er den samme testen gjennomført etter treningsperioden, under så like betingelser som mulig. Forskjellen mellom pre- og posttest brukes til å vurdere treningseffekten.',
    },
    {
      id: 'tr2-8-2-pretesting',
      type: 'text',
      title: 'Gjennomføring av pretest',
      content: `Pretesten gir deg et utgangspunkt for å måle treningseffekten. Det er viktig at pretesten gjennomføres grundig og under kontrollerte betingelser.

**Forberedelser til pretest:**
- Velg tester som er relevante for problemstillingen
- Sett opp en detaljert testprotokoll (rekkefølge, hvilepauser, instruksjoner)
- Sørg for at nødvendig utstyr er tilgjengelig og kalibrert
- Informer forsøkspersonene om hva som kreves (klær, faste, søvn)
- Gjennomfør eventuelt en tilvenningstest slik at forsøkspersonene kjenner prosedyren

**Vanlige fysiske tester i treningsprosjekter:**

| Test | Måler | Utstyr |
|------|-------|--------|
| 1RM knebøy/benkpress | Maksimal styrke | Vektstang, stativ |
| Sargent jump test | Vertikal spenst | Målebånd, kritt |
| Beep-test (20 m shuttle run) | Estimert VO2maks | Lydsignal, målebånd |
| Sit-and-reach | Hamstringsfleksibilitet | Sit-and-reach-boks |
| Coopertest (12 min løp) | Aerob utholdenhet | Løpebane, stoppeklokke |
| Planke-test | Kjernemuskulatur | Stoppeklokke |

**Viktig ved pretesting:**
- Registrer alle testresultater nøyaktig
- Noter testbetingelser (tidspunkt, temperatur, utstyr, dagsform)
- Ta gjerne flere forsøk og bruk beste resultat eller gjennomsnitt
- Dokumenter testprotokollen slik at du kan gjenta den eksakt ved posttesting`,
    },
    {
      id: 'tr2-8-2-dagbok',
      type: 'text',
      title: 'Treningsdagbok',
      content: `Treningsdagboken er et viktig verktøy for å dokumentere gjennomføringen av treningsprogrammet. Den gir oversikt over hva som faktisk ble gjennomført, og gjør det mulig å vurdere om programmet ble fulgt som planlagt.

**Hva bør treningsdagboken inneholde?**

For styrketrening:
- Dato og tidspunkt
- Øvelser, serier, repetisjoner og belastning (kg)
- Hvilepauser mellom serier
- Opplevd anstrengelse (Borg-skala 6–20 eller RPE 1–10)
- Kommentarer om dagsform, søvn, skader

For utholdenhetstrening:
- Dato og tidspunkt
- Treningsform (løping, sykling, svømming)
- Varighet og distanse
- Intensitet (puls, tempo, sone)
- Opplevd anstrengelse
- Kommentarer

**Eksempel på treningsdagbok for styrketrening:**

| Dato | Øvelse | Sett x rep | Belastning | RPE | Kommentar |
|------|--------|------------|-----------|-----|-----------|
| 15.01 | Knebøy | 3 x 10 | 60 kg | 7 | Tungt i siste sett |
| 15.01 | Benkpress | 3 x 10 | 40 kg | 6 | Gikk greit |
| 15.01 | Markløft | 3 x 8 | 70 kg | 8 | God teknikk |`,
    },
    {
      id: 'tr2-8-2-def-borg',
      type: 'definition',
      title: 'Borg-skala (RPE)',
      content: 'Borg-skalaen er en skala for opplevd anstrengelse (Rate of Perceived Exertion). Den originale skalaen går fra 6 til 20, der 6 er ingen anstrengelse og 20 er maksimal anstrengelse. Den modifiserte versjonen (RPE) går fra 1 til 10. Skalaen brukes i treningsdagboken for å dokumentere hvor hardt en treningsøkt opplevdes.',
    },
    {
      id: 'tr2-8-2-posttest',
      type: 'text',
      title: 'Gjennomføring av posttest',
      content: `Posttesten gjennomføres etter at treningsperioden er avsluttet. For at sammenligningen med pretesten skal være gyldig, må posttesten gjennomføres under så like betingelser som mulig.

**Krav til standardisering mellom pretest og posttest:**
- Samme testprotokoll (rekkefølge, instruksjoner, hvilepauser)
- Samme tidspunkt på dagen (±2 timer)
- Samme utstyr
- Samme oppvarming
- Like krav til forsøkspersonene (søvn, ernæring, aktivitet dagen før)
- Samme testleder

**Vanlige feil ved posttesting:**
- Endre rekkefølgen på testene
- Gjennomføre posttest på et annet tidspunkt enn pretesten
- Gi ekstra motivasjon eller instruksjoner som ikke ble gitt ved pretesten
- Glemme å registrere testbetingelser
- Gjennomføre posttest for kort tid etter siste treningsøkt (tretthet)

En tommelfingerregel er at det bør gå 48–72 timer mellom siste treningsøkt og posttesten, slik at kroppen er restituert og resultatene reflekterer den reelle treningseffekten.`,
    },
    {
      id: 'tr2-8-2-example-testprotokoll',
      type: 'example',
      title: 'Eksempel: Testprotokoll for styrketesting',
      problem: 'Lag en standardisert testprotokoll for testing av 1RM i knebøy.',
      solution: `**Testprotokoll: 1RM knebøy**

**Forberedelser:**
- Forsøkspersonen skal ha spist et lett måltid 2–3 timer før test
- Ingen hard trening siste 48 timer
- Testing gjennomføres mellom kl. 14:00 og 16:00

**Oppvarming:**
1. 5 minutter rolig sykling på ergometersykkel
2. 10 repetisjoner med tom stang (20 kg)
3. 5 repetisjoner med 50 % av estimert 1RM
4. 3 repetisjoner med 70 % av estimert 1RM
5. 1 repetisjon med 85 % av estimert 1RM
6. 3 minutter hvile

**Testing:**
1. Forsøk 1: Start med 90–95 % av estimert 1RM
2. Hvile 3–5 minutter mellom forsøk
3. Øk belastningen med 2,5–5 kg per forsøk
4. Forsøket er godkjent når hofteleddet er lavere enn kneleddet i bunnposisjonen
5. Maks 5 forsøk for å unngå tretthet
6. Registrer høyeste godkjente løft som 1RM

**Sikkerhet:** Bruk spottere og sikkerhetsstenger. Testleder godkjenner dybde.`,
    },
    {
      id: 'tr2-8-2-tip-1',
      type: 'tip',
      title: 'Tips for datainnsamling',
      content: 'Lag et ferdig skjema eller regneark for registrering av testresultater og treningsdata for du starter testingen. Det er mye lettere å fylle inn data i et strukturert skjema enn å notere fritt. Ta gjerne bilder eller video av testgjennomføringen som dokumentasjon.',
    },
    {
      id: 'tr2-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr2-8-2-ex-1',
        number: '8.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvorfor er det viktig at pre- og posttest gjennomføres under like betingelser?',
        multipleChoiceOptions: [
          'For at forskjeller i resultater skal kunne tilskrives treningseffekten og ikke andre faktorer',
          'For at forsøkspersonene skal føle seg komfortable',
          'For at testene skal ta like lang tid å gjennomføre',
          'For at resultatene skal bli best mulig',
        ],
        hints: ['Tenk på hva som kan påvirke testresultatene utover selve treningen'],
        solution: 'Standardisering av testbetingelser er avgjørende for at eventuelle forskjeller mellom pre- og posttest kan tilskrives treningseffekten. Hvis betingelsene er ulike (for eksempel ulikt tidspunkt, ulik oppvarming eller ulik motivasjon), kan forskjellene i resultatene skyldes disse faktorene i stedet for treningen.',
      },
    },
    {
      id: 'tr2-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr2-8-2-ex-2',
        number: '8.2.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedfunksjonen til en treningsdagbok i et treningsprosjekt?',
        multipleChoiceOptions: [
          'Å dokumentere hva som faktisk ble gjennomført av treningsprogrammet',
          'Å motivere forsøkspersonen til å trene hardere',
          'Å erstatte pre- og posttesting',
          'Å sammenligne seg med andre som trener',
        ],
        hints: ['Tenk på hvorfor det er viktig å vite om programmet ble fulgt som planlagt'],
        solution: 'Treningsdagboken dokumenterer den faktiske gjennomføringen av treningsprogrammet. Den gjør det mulig å vurdere om programmet ble fulgt som planlagt (etterlevelse), å spore progresjon i belastning, og å identifisere avvik som kan påvirke resultatene. Uten treningsdagbok vet man ikke om resultatene skyldes treningen eller mangel på trening.',
      },
    },
    {
      id: 'tr2-8-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr2-8-2-ex-3',
        number: '8.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du skal gjennomføre en beep-test som pretest for et utholdenhetstreningsprosjekt. Beskriv en komplett testprotokoll som sikrer standardiserte betingelser.',
        hints: ['Husk å inkludere forberedelser, oppvarming, selve testen og registrering'],
        solution: 'Testprotokoll for beep-test: Forberedelser: Forsøkspersonene informeres dagen i forveien om krav til bekledning (joggesko, treningstøy), ernæring (lett måltid 2–3 timer før), og aktivitetsnivå (ingen hard trening siste 24 timer). Testing gjennomføres i gymnastikksal mellom kl. 10:00 og 12:00. Oppvarming: 5 minutter rolig jogging, etterfulgt av 3 minutter dynamisk tøying og 2 korte akselerasjoner. Gjennomføring: 20 meter mellom linjene. Lydsignal fra standardisert beep-test-app. Forsøkspersonene løper mellom linjene og snur ved lydsignalet. Testen avsluttes når personen ikke rekker linjen to ganger på rad. Registrering: Testleder noterer siste fullførte nivå og antall lengder. Estimert VO2maks beregnes med standardformel. Testbetingelser noteres: temperatur i hallen, antall forsøkspersoner, tidspunkt. Posttesten gjennomføres med identisk protokoll.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-8-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr2-8-2-ex-4',
        number: '8.2.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag et eksempel på et treningsdagbok-skjema for et styrketreningsprosjekt som varer i 6 uker. Vis hva skjemaet bør inneholde, og fyll inn eksempeldata for en treningsøkt.',
        hints: ['Inkluder kolonner for dato, øvelser, serier, repetisjoner, vekt og opplevd anstrengelse'],
        solution: 'Treningsdagbok – Styrketreningsprosjekt. Kolonner: Dato | Økt nr. | Øvelse | Planlagt (sett x rep x kg) | Utført (sett x rep x kg) | RPE (1–10) | Kommentar. Eksempel for økt 1: Dato: 20.01, Økt nr: 1. Knebøy: Planlagt 3x10x60 kg, Utført 3x10x60 kg, RPE 7, «Siste sett tungt men god teknikk». Benkpress: Planlagt 3x10x40 kg, Utført 3x10x40 kg, RPE 6, «Gikk fint». Nedtrekk: Planlagt 3x10x45 kg, Utført 3x9x45 kg, RPE 8, «Klarte bare 9 i siste sett». Skulderpress: Planlagt 3x10x20 kg, Utført 3x10x20 kg, RPE 6, «-». Dagkommentar: «Sov 7 timer, spist frokost 2 timer før. Generelt god form.» Skjemaet bør ha plass til alle planlagte økter (for eksempel 18 økter over 6 uker med 3 treninger per uke) og en rad for generelle kommentarer om søvn, ernæring og dagsform.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-8-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr2-8-2-ex-5',
        number: '8.2.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar hva som menes med tilvenningseffekt ved testing, og drøft hvordan dette kan påvirke resultatene i et treningsprosjekt. Hva kan du gjøre for å redusere denne effekten?',
        hints: ['Tenk på hva som skjer hvis forsøkspersonene aldri har gjennomført testen tidligere'],
        solution: 'Tilvenningseffekt (læringseffekt) betyr at forsøkspersonene presterer bedre på en test andre gang de gjennomfører den, uavhengig av trening. Dette skyldes at de har lært teknikken, vet hva de kan forvente, og er mindre nervøse. I et treningsprosjekt kan dette føre til at en forbedring fra pretest til posttest delvis skyldes tilvenning og ikke bare treningseffekten. Resultatet blir at du overvurderer treningseffekten. Tiltak for å redusere tilvenningseffekten: 1) Gjennomfør en tilvenningstest (familiariseringstest) i forkant av den egentlige pretesten, slik at forsøkspersonene kjenner prosedyren. 2) Gi tydelige instruksjoner og demonstrer testen grundig før pretesten. 3) Velg tester som er enkle å forstå og gjennomføre, der teknikk-komponenten er liten. 4) Bruk flere testforsøk og registrer det beste, slik at eventuelle nervøsitets-effekter reduseres. 5) Hvis mulig, ha en kontrollgruppe som gjennomfører testene uten treningsprogram, slik at du kan skille tilvenningseffekt fra treningseffekt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-8-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr2-8-2-ex-6',
        number: '8.2.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft fordeler og ulemper ved bruk av Borg-skala (RPE) som datainnsamlingsverktøy i et treningsprosjekt. Sammenlign med objektive mål som hjertefrekvens eller belastning i kilogram.',
        hints: ['Tenk på subjektivitet, tilgjengelighet og hva de ulike målene faktisk fanger opp'],
        solution: 'Fordeler med Borg-skala: 1) Enkel å bruke – krever ingen utstyr. 2) Fanger opp den helhetlige opplevelsen av anstrengelse, inkludert faktorer som søvn, stress og motivasjon. 3) Kan brukes i alle treningsformer. 4) Gir verdifull tilleggsinformasjon til objektive mål. Ulemper med Borg-skala: 1) Subjektiv – ulike personer kan vurdere lik anstrengelse forskjellig. 2) Påvirkes av dagsform, humør og erfaring. 3) Vanskelig å sammenligne mellom forsøkspersoner. 4) Kan ha lav reliabilitet, spesielt hos uerfarne. Sammenligning: Hjertefrekvens er objektiv og reliabel, men påvirkes av koffein, stress og temperatur, og krever pulsklokke. Belastning i kg er objektiv og lett å måle, men sier lite om opplevd anstrengelse – 60 kg kan oppleves svært ulikt avhengig av dagsform. Konklusjon: Ideelt brukes RPE som supplement til objektive mål, ikke som erstatning. Kombinasjonen gir et mer helhetlig bilde av treningsbelastningen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.3: Gjennomføring av treningsprogram
// ============================================================================

export const CHAPTER_TRENING_2_8_3: TextbookChapter = {
  id: 'trening-2-8-3',
  courseId: 'trening-2',
  chapterNumber: '8.3',
  title: 'Gjennomføring av treningsprogram',
  description: 'Praktisk gjennomføring av treningsprogrammet, progresjon, justering og etterlevelse.',
  estimatedMinutes: 20,
  competenceGoals: [
    'kunne gjennomføre et planlagt treningsprogram over tid',
    'forstå betydningen av progresjon og belastningsstyring',
    'kunne vurdere og justere et treningsprogram underveis',
  ],
  keyTerms: [],
  content: [
    {
      id: 'tr2-8-3-intro',
      type: 'text',
      content: `## Gjennomføring av treningsprogrammet

Etter at planleggingen er ferdig og pretesten er gjennomført, starter den praktiske gjennomføringen av treningsprogrammet. Dette er den lengste fasen i prosjektet og krever disiplin, systematikk og evne til å justere programmet ved behov.

En vellykket gjennomføring forutsetter at du har en tydelig plan for hver treningsøkt, at du dokumenterer alt i treningsdagboken, og at du følger prinsippene for progresjon som er beskrevet i treningsprogrammet ditt.`,
    },
    {
      id: 'tr2-8-3-def-progresjon',
      type: 'definition',
      title: 'Progresjon',
      content: 'Progresjon innebærer en gradvis og systematisk økning av treningsbelastningen over tid. Progresjonen kan skje gjennom økt vekt, flere repetisjoner, flere serier, kortere hvilepauser eller høyere intensitet. Progresjon er nødvendig for å oppnå kontinuerlig treningseffekt i henhold til overbelastningsprinsippet.',
    },
    {
      id: 'tr2-8-3-praktisk',
      type: 'text',
      title: 'Praktisk gjennomføring',
      content: `For å sikre en god gjennomføring av treningsprogrammet bør du ha en detaljert plan for hver økt. Planen bør inkludere:

**Øktstruktur:**
1. **Oppvarming** (10–15 minutter): Generell oppvarming (sykling, jogging) etterfulgt av spesifikk oppvarming (lette serier av hovedøvelsene)
2. **Hoveddel** (30–45 minutter): Gjennomføring av planlagte øvelser med angitt belastning
3. **Avslutning** (5–10 minutter): Nedtrapping, lett tøying og registrering i treningsdagbok

**Sjekkliste for hver treningsøkt:**
- Er utstyret tilgjengelig og i orden?
- Er oppvarmingen gjennomført?
- Er belastningen i henhold til planen?
- Er alle serier og repetisjoner registrert?
- Er RPE notert for hovedøvelsene?
- Er eventuelle avvik fra planen dokumentert og begrunnet?`,
    },
    {
      id: 'tr2-8-3-belastning',
      type: 'text',
      title: 'Belastningsstyring og progresjon',
      content: `Hvordan du øker belastningen gjennom treningsperioden er avgjørende for resultatet. For rask progresjon kan føre til skade eller overtrenning, mens for langsom progresjon gir utilstrekkelig treningsstimulus.

**Progresjonsmodeller for styrketrening:**

**Lineær progresjon:**
- Øk belastningen med et fast antall kg hver uke eller annenhver uke
- Passer best for nybegynnere og kort-til-middels lange prosjekter
- Eksempel: Start med 60 kg i knebøy, øk med 2,5 kg per uke

**Dobbel progresjon:**
- Først øk antall repetisjoner innenfor et intervall, deretter øk vekten
- Eksempel: Start med 3x8 på 60 kg. Jobb mot 3x12 på 60 kg. Når du klarer 3x12, øk til 65 kg og start igjen på 3x8

**Progresjonsmodeller for utholdenhetstrening:**

| Uke | Volum (minutter/uke) | Intensitet |
|-----|---------------------|------------|
| 1–2 | 90 | Lav–moderat |
| 3–4 | 120 | Moderat |
| 5–6 | 120 | Moderat–høy |

**10-prosent-regelen:** Øk ikke totalvolumet med mer enn 10 % fra uke til uke for å redusere risikoen for overbelastningsskader.`,
    },
    {
      id: 'tr2-8-3-justering',
      type: 'text',
      title: 'Justering av programmet',
      content: `Det er vanlig og ofte nødvendig å gjøre justeringer underveis i treningsperioden. Det viktige er at justeringene er gjennomtenkte og dokumenterte.

**Når bør du justere programmet?**
- Belastningen er for lett eller for tung (RPE er konsekvent under 5 eller over 9)
- Forsøkspersonen opplever smerter eller ubehag i en øvelse
- Praktiske hindringer gjør det umulig å gjennomføre planen (utstyr utilgjengelig, sykdom)
- Progresjonen stagnerer over lengre tid

**Hvordan dokumentere justeringer:**
- Beskriv hva som ble endret
- Forklar hvorfor endringen var nødvendig
- Noter dato for endringen
- Vurder hvordan endringen kan påvirke resultatene

**Eksempler på vanlige justeringer:**

| Situasjon | Mulig justering |
|-----------|----------------|
| Klarer ikke planlagt antall repetisjoner | Reduser vekt med 5–10 % og bygg opp igjen |
| Smerter i kne ved knebøy | Bytt til boksknebøy eller beinpress |
| Mister en treningsøkt pga. sykdom | Legg inn erstatningsøkt, eventuelt forleng perioden med en uke |
| Progresjonen har stagnert i 2 uker | Legg inn en deload-uke og start ny progresjonssyklus |`,
    },
    {
      id: 'tr2-8-3-def-etterlevelse',
      type: 'definition',
      title: 'Etterlevelse (compliance)',
      content: 'Etterlevelse (compliance) angir i hvilken grad treningsprogrammet faktisk ble gjennomført som planlagt. Etterlevelse uttrykkes ofte som en prosentandel: antall gjennomførte økter delt på antall planlagte økter. Høy etterlevelse styrker troverdigheten til prosjektets resultater.',
    },
    {
      id: 'tr2-8-3-etterlevelse',
      type: 'text',
      title: 'Etterlevelse og dens betydning',
      content: `Etterlevelse er et nøkkelbegrep i treningsprosjektet. Selv det best planlagte programmet gir ikke resultater dersom det ikke følges.

**Beregning av etterlevelse:**

Etterlevelse (%) = (antall gjennomførte økter / antall planlagte økter) x 100

**Eksempel:** Programmet inneholder 18 planlagte økter (3 per uke i 6 uker). Forsøkspersonen gjennomfører 15 økter. Etterlevelse = (15/18) x 100 = 83 %.

**Retningslinjer:**
- Over 90 %: Svært god etterlevelse
- 80–90 %: God etterlevelse
- 70–80 %: Akseptabel etterlevelse
- Under 70 %: Lav etterlevelse – resultatene er usikre

**Faktorer som påvirker etterlevelse:**
- Motivasjon og forpliktelse
- Praktiske rammer (tilgang til treningsfasiliteter, tidskonflikter)
- Sykdom og skader
- Sosial støtte
- Realistisk treningsprogram (ikke for krevende)

Etterlevelsen bør rapporteres i prosjektrapporten, da den er avgjørende for hvor mye tillit man kan ha til resultatene.`,
    },
    {
      id: 'tr2-8-3-example-justering',
      type: 'example',
      title: 'Eksempel: Justering av treningsprogram',
      problem: 'En forsøksperson skal trene knebøy 3x10 med ukentlig vektøkning på 2,5 kg. Etter 3 uker klarer hun bare 3x7 med planlagt vekt. Hva gjør du?',
      solution: `**Vurdering:** Progresjonen har gått for raskt. RPE har økt fra 7 til 9+, og forsøkspersonen klarer ikke lenger planlagt antall repetisjoner.

**Justering:**
1. Reduser vekten med 10 % (tilbake til nivået der hun klarte 3x10)
2. Bytt til dobbel progresjon: Jobb mot 3x12 med denne vekten før vekten økes igjen
3. Vurder om progresjonsplanen bør justeres til økning annenhver uke i stedet for ukentlig

**Dokumentasjon i dagbok:** «Uke 4: Reduserte vekt i knebøy fra 72,5 kg til 65 kg grunnet stagnasjon. Klarte kun 3x7 med 72,5 kg to økter på rad. Bytter til dobbel progresjon for resten av perioden. Nytt mål: 3x12 med 65 kg før vektøkning.»

**Effekt på resultater:** Denne justeringen bør diskuteres i rapporten, da den avviker fra opprinnelig plan. Det kan påvirke den totale belastningsprogresjonen, men sikrer at treningen fortsatt gir stimulus.`,
    },
    {
      id: 'tr2-8-3-tip-1',
      type: 'tip',
      title: 'Tips for gjennomføringsfasen',
      content: 'Legg treningsøktene inn i kalenderen din som faste avtaler. Det er lettere å holde seg til planen når treningen har et fast tidspunkt. Tren gjerne sammen med noen – det øker motivasjonen og gjør det lettere å holde etterlevelsen oppe. Husk også at noen avvik er normalt og forventet. Det viktigste er at du dokumenterer dem og tar hensyn til dem i analysen.',
    },
    {
      id: 'tr2-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr2-8-3-ex-1',
        number: '8.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva innebærer 10-prosent-regelen i treningsprogresjon?',
        multipleChoiceOptions: [
          'Totalvolumet bør ikke økes med mer enn 10 % fra uke til uke',
          'Man bør trene med 10 % av maksimal styrke',
          'Hvilepauser bør være 10 % av total treningstid',
          'Man bør hoppe over 10 % av treningsøktene for å sikre restitusjon',
        ],
        hints: ['Regelen handler om å begrense hvor raskt du øker treningsbelastningen'],
        solution: '10-prosent-regelen er en retningslinje som sier at totalvolumet (for eksempel antall minutter, kilometer eller totalt løftet volum) ikke bør økes med mer enn 10 % fra uke til uke. Hensikten er å redusere risikoen for overbelastningsskader ved å sikre at kroppen får tid til å tilpasse seg den økende belastningen gradvis.',
      },
    },
    {
      id: 'tr2-8-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr2-8-3-ex-2',
        number: '8.3.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr det at etterlevelsen i et treningsprosjekt er 85 %?',
        multipleChoiceOptions: [
          'At 85 % av de planlagte treningsøktene ble gjennomført',
          'At forsøkspersonen ble 85 % sterkere',
          'At 85 % av resultatene er statistisk signifikante',
          'At forsøkspersonen trente med 85 % av maksimal intensitet',
        ],
        hints: ['Etterlevelse handler om forholdet mellom planlagte og gjennomførte økter'],
        solution: 'Etterlevelse (compliance) på 85 % betyr at 85 % av de planlagte treningsøktene faktisk ble gjennomført. Hvis programmet inneholdt 18 planlagte økter, betyr 85 % etterlevelse at 15–16 økter ble fullført. En etterlevelse på 80–90 % regnes som god og gir et akseptabelt grunnlag for å vurdere treningseffekten.',
      },
    },
    {
      id: 'tr2-8-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr2-8-3-ex-3',
        number: '8.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag et detaljert styrketreningsprogram for 6 uker med 3 treningsøkter per uke. Programmet skal inneholde minst 4 øvelser per økt og en tydelig progresjonsplan. Angi startbelastning, serier, repetisjoner og planlagt progresjon.',
        hints: ['Velg en progresjonsmodell (lineær eller dobbel) og forklar den'],
        solution: 'Styrketreningsprogram – 6 uker, helkroppsmodell, 3 økter/uke. Progresjonsmodell: Dobbel progresjon (øk repetisjoner fra 8 til 12, deretter øk vekt med 5 % og start på 8 igjen). Øvelser per økt: 1) Knebøy: Start 3x8 med 60 kg. 2) Benkpress: Start 3x8 med 40 kg. 3) Markløft: Start 3x8 med 70 kg. 4) Skulderpress: Start 3x8 med 20 kg. 5) Nedtrekk: Start 3x8 med 45 kg. Progresjon: Uke 1–2: 3x8 med startvekt. Uke 3–4: 3x10 med samme vekt. Uke 5: 3x12 med samme vekt. Uke 6: Øk vekt med 5 %, tilbake til 3x8. Hvilepauser: 2 minutter mellom serier. Oppvarming: 5 min sykling + 2 lette oppvarmingsserier per øvelse. RPE-mål: 6–8 i uke 1–2, 7–8 i uke 3–4, 8–9 i uke 5–6.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-8-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr2-8-3-ex-4',
        number: '8.3.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En forsøksperson gjennomfører 14 av 18 planlagte treningsøkter i løpet av en 6 ukers periode. Beregn etterlevelsen og vurder om den er tilfredsstillende. Hva kan ha forårsaket de tapte øktene, og hvordan bør dette håndteres i rapporten?',
        hints: ['Bruk formelen for etterlevelse og vurder mot retningslinjene'],
        solution: 'Beregning: Etterlevelse = (14/18) x 100 = 77,8 %. Vurdering: Ifølge retningslinjene er 70–80 % akseptabel etterlevelse, men det er i nedre del. Fire tapte økter kan ha redusert den samlede treningseffekten. Mulige årsaker: Sykdom (forkjølelse, influensa), skade, tidskonflikter (prøver, andre forpliktelser), mangel på motivasjon, eller manglende tilgang til treningsfasiliteter. Håndtering i rapporten: 1) Rapporter nøyaktig etterlevelse i metodedelen. 2) Beskriv årsaken til tapte økter. 3) Diskuter i diskusjonsdelen hvordan lav etterlevelse kan ha påvirket resultatene – det kan bety at den observerte effekten er en underestimering av den potensielle effekten ved full etterlevelse. 4) Foreslå tiltak for å øke etterlevelsen i fremtidige prosjekter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-8-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr2-8-3-ex-5',
        number: '8.3.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft utfordringene ved å gjennomføre et treningsprosjekt i en skolesetting. Diskuter minst fire ulike faktorer som kan påvirke gjennomføringen, og foreslå konkrete tiltak for å håndtere dem.',
        hints: ['Tenk på tidsbegrensninger, utstyr, motivasjon, fravær og etiske hensyn'],
        solution: 'Faktor 1 – Tidsbegrensninger: Skoleprosjekter har kort varighet (typisk 6–10 uker), noe som begrenser hvor store treningseffekter man kan forvente. Tiltak: Velg en treningsform og test som er sensitive for kortsiktige endringer. Bruk prosentvise endringer heller enn absolutte tall. Faktor 2 – Tilgang til utstyr og fasiliteter: Skolen har kanskje begrenset utstyr, og gymsal/styrkerom deles med andre. Tiltak: Planlegg treningstidspunkter tidlig, velg øvelser som krever minimalt med spesialisert utstyr, ha alternative øvelser klare. Faktor 3 – Forsøkspersonenes motivasjon og etterlevelse: Medelever som deltar kan ha varierende motivasjon, og fravær på grunn av prøver eller sykdom er vanlig. Tiltak: Velg gjerne deg selv som forsøksperson for å sikre kontroll over etterlevelsen. Hvis andre deltar, lag tydelige avtaler og følg opp med påminnelser. Faktor 4 – Kontroll over forstyrrende variabler: Forsøkspersoner trener kanskje annet i tillegg, sover ulikt og spiser forskjellig. Tiltak: Registrer treningsaktivitet utenom prosjektet, be forsøkspersoner rapportere søvn og annen aktivitet, og diskuter disse faktorene som feilkilder i rapporten. Faktor 5 – Etiske hensyn: Du kan ikke utsette medelever for helseskadelig trening. Tiltak: Få samtykke, tilpass belastningen til den enkeltes nivå, og ha plan for å avbryte om noen opplever skade eller ubehag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-8-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr2-8-3-ex-6',
        number: '8.3.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign lineær progresjon og dobbel progresjon som progresjonsmodeller i et styrketreningsprosjekt. Drøft fordeler og ulemper med hver modell, og anbefal hvilken som passer best for en utrent elev i VG3 som skal gjennomføre et 8 ukers prosjekt.',
        hints: ['Tenk på erfaringsnivå, risiko for stagnasjon og fleksibilitet'],
        solution: 'Lineær progresjon: Vekten økes med et fast intervall (f.eks. 2,5 kg per uke) uavhengig av prestasjon. Fordeler: Enkel å planlegge og følge, gir tydelig struktur, fungerer godt for nybegynnere som har stort potensial for rask fremgang. Ulemper: Lite fleksibel – tar ikke hensyn til dagsform, kan føre til for rask progresjon hos noen og for langsom hos andre, risiko for stagnasjon og frustrasjon dersom man ikke klarer planlagt vekt. Dobbel progresjon: Først økes repetisjoner innenfor et intervall (f.eks. 8–12), deretter økes vekten og man starter på nytt med lavere rep. Fordeler: Mer fleksibel – tilpasses automatisk til den enkeltes kapasitet, lavere risiko for overbelastning fordi vektøkningen styres av prestasjon, gir mestringsfølelse fordi man alltid klarer planlagt antall rep. Ulemper: Progresjonen kan være langsommere i starten, krever at forsøkspersonen vurderer når det er tid for vektøkning. Anbefaling for utrent VG3-elev: Dobbel progresjon er best egnet fordi den er fleksibel og tilpasser seg elevens individuelle respons på treningen. En utrent person vil oppleve rask fremgang i starten, og dobbel progresjon forhindrer at belastningen øker for raskt. Det gir også mestringsfølelse, noe som er viktig for motivasjonen i et skoleprosjekt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.4: Analyse og tolkning
// ============================================================================

export const CHAPTER_TRENING_2_8_4: TextbookChapter = {
  id: 'trening-2-8-4',
  courseId: 'trening-2',
  chapterNumber: '8.4',
  title: 'Analyse og tolkning',
  description: 'Enkel statistikk, sammenligning av pre- og posttest, feilkilder og kritisk vurdering av resultater.',
  estimatedMinutes: 20,
  competenceGoals: [
    'kunne analysere treningsdata ved hjelp av enkel statistikk',
    'kunne sammenligne pretest- og posttestresultater på en meningsfull måte',
    'kunne identifisere og vurdere feilkilder som kan påvirke resultatene',
  ],
  keyTerms: [],
  content: [
    {
      id: 'tr2-8-4-intro',
      type: 'text',
      content: `## Analyse og tolkning av treningsdata

Etter at treningsprogrammet er gjennomført og posttesten er utført, har du et datasett som skal analyseres. Analysen handler om å behandle dataene systematisk, presentere dem tydelig, og tolke hva resultatene betyr i lys av problemstillingen din.

I et treningsprosjekt på videregående-nivå brukes enkel deskriptiv statistikk. Du trenger ikke avanserte statistiske tester, men du må kunne beregne gjennomsnitt, standardavvik og prosentvis endring, og du må kunne vurdere resultatene kritisk.`,
    },
    {
      id: 'tr2-8-4-def-deskriptiv',
      type: 'definition',
      title: 'Deskriptiv statistikk',
      content: 'Deskriptiv statistikk handler om å beskrive og oppsummere data ved hjelp av tallmessige mål som gjennomsnitt, median, standardavvik og variasjonsbredde. I et treningsprosjekt brukes deskriptiv statistikk til å presentere pre- og posttestresultater og beregne endring.',
    },
    {
      id: 'tr2-8-4-statistikk',
      type: 'text',
      title: 'Enkel statistikk for treningsprosjektet',
      content: `De viktigste statistiske målene du trenger i treningsprosjektet er:

**Gjennomsnitt (mean):**
Summen av alle verdier delt på antall verdier. Gir et mål på det typiske resultatet.

Gjennomsnitt = (sum av alle verdier) / antall verdier

**Standardavvik (SD):**
Et mål på spredningen i dataene. Lavt standardavvik betyr at verdiene ligger tett rundt gjennomsnittet. Høyt standardavvik betyr stor variasjon.

**Prosentvis endring:**
Viser hvor mye resultatet har endret seg fra pretest til posttest, uttrykt i prosent.

Prosentvis endring = ((posttest - pretest) / pretest) x 100

**Eksempel:**
- Pretest 1RM knebøy: 80 kg
- Posttest 1RM knebøy: 90 kg
- Prosentvis endring: ((90 - 80) / 80) x 100 = 12,5 %

**Individuell vs. gruppedata:**
Hvis du har flere forsøkspersoner, beregner du gjennomsnitt og standardavvik for gruppen. Hvis du bare har deg selv som forsøksperson, presenterer du de individuelle resultatene direkte.`,
    },
    {
      id: 'tr2-8-4-sammenligning',
      type: 'text',
      title: 'Sammenligning av resultater',
      content: `Sammenligningen av pre- og posttestresultater er kjernen i analysen. Målet er å svare på problemstillingen: Hadde treningsintervensjonen effekt?

**Presentasjon av resultater:**

Den enkleste og tydeligste måten å presentere resultatene på er ved hjelp av en tabell:

| Variabel | Pretest | Posttest | Endring | Endring (%) |
|----------|---------|----------|---------|-------------|
| 1RM knebøy (kg) | 80,0 | 90,0 | +10,0 | +12,5 |
| 1RM benkpress (kg) | 55,0 | 60,0 | +5,0 | +9,1 |

Hvis du har flere forsøkspersoner, bør du presentere gjennomsnitt ± standardavvik:

| Variabel | Pretest (snitt ± SD) | Posttest (snitt ± SD) | Endring (%) |
|----------|---------------------|----------------------|-------------|
| 1RM knebøy (kg) | 78,5 ± 12,3 | 88,0 ± 11,8 | +12,1 |

**Visualisering:**
Bruk gjerne søylediagrammer eller linjediagrammer for å visualisere forskjellene mellom pre- og posttest. Et diagram gjør det lettere for leseren å raskt se hovedtendensene.

**Sammenligning med teori og forskning:**
Sammenlign resultatene dine med det du finner i faglitteraturen. For eksempel: Er en økning på 12,5 % i 1RM etter 6 uker realistisk sammenlignet med det forskning viser for utrente personer?`,
    },
    {
      id: 'tr2-8-4-example-analyse',
      type: 'example',
      title: 'Eksempel: Analyse av styrketreningsresultater',
      problem: 'En elev har gjennomført et 6 ukers styrketreningsprosjekt. Pretestresultater: 1RM knebøy 70 kg, 1RM benkpress 45 kg. Posttestresultater: 1RM knebøy 82 kg, 1RM benkpress 50 kg. Analyser resultatene.',
      solution: `**Resultatoversikt:**

| Test | Pretest | Posttest | Endring (kg) | Endring (%) |
|------|---------|----------|-------------|-------------|
| 1RM knebøy | 70 kg | 82 kg | +12 kg | +17,1 % |
| 1RM benkpress | 45 kg | 50 kg | +5 kg | +11,1 % |

**Tolkning:**
Resultatene viser en tydelig økning i maksimal styrke i begge øvelsene etter 6 uker med styrketrening. Knebøy viste den største prosentvise økningen (+17,1 %), noe som kan skyldes at underkroppsmuskulaturen har et større potensial for styrkeøkning hos utrente, og at knebøy involverer mer muskelmasse enn benkpress.

En økning på 17 % i 1RM knebøy etter 6 uker er forenlig med det forskning viser for utrente individer, der styrkeøkninger på 10–25 % er vanlig i de første 6–12 ukene av systematisk trening. Noe av økningen kan også skyldes nevrale tilpasninger (bedre koordinasjon og rekruttering av motoriske enheter) snarere enn ren muskelvekst.`,
    },
    {
      id: 'tr2-8-4-feilkilder',
      type: 'text',
      title: 'Feilkilder',
      content: `Feilkilder er faktorer som kan påvirke resultatene uten at de er del av den planlagte treningsintervensjonen. Å identifisere og diskutere feilkilder er en viktig del av den vitenskapelige prosessen og viser at du har en kritisk tilnærming til egne resultater.

**Vanlige feilkilder i treningsprosjekter:**

**1. Tilvenningseffekt (læringseffekt)**
Forsøkspersonen presterer bedre på posttesten fordi han eller hun kjenner testprosedyren fra pretesten.

**2. Mangel på kontrollgruppe**
Uten en kontrollgruppe (som gjennomfører testene uten treningsintervensjonen) kan du ikke utelukke at forbedringen skyldes andre faktorer enn treningen.

**3. Ulike testbetingelser**
Forskjeller i tidspunkt, dagsform, motivasjon, søvn eller ernæring mellom pre- og posttest.

**4. Lav etterlevelse**
Hvis forsøkspersonen ikke har fulgt treningsprogrammet som planlagt.

**5. Andre treningsaktiviteter**
Trening utenom prosjektet (for eksempel kroppsøvingstimer, idrettstrening) kan påvirke resultatene.

**6. Modning og naturlig utvikling**
For unge forsøkspersoner kan naturlig vekst og utvikling bidra til forbedring uavhengig av treningsintervensjonen.

**7. Hawthorn-effekten**
Forsøkspersonen presterer bedre bare fordi han eller hun vet at de blir observert og testet.`,
    },
    {
      id: 'tr2-8-4-def-feilkilde',
      type: 'definition',
      title: 'Feilkilde (confounding variable)',
      content: 'En feilkilde er en variabel som kan påvirke resultatene i et prosjekt utover den planlagte intervensjonen. Feilkilder gjør det vanskelig å fastslå at observerte endringer skyldes den uavhengige variabelen (treningsprogrammet) alene. I vitenskapelig forskning forsøker man å kontrollere for feilkilder gjennom forskningsdesign.',
    },
    {
      id: 'tr2-8-4-kritisk',
      type: 'text',
      title: 'Kritisk vurdering av resultater',
      content: `En viktig del av analysen er å vurdere resultatene kritisk. Spør deg selv:

**Er resultatene troverdige?**
- Var testbetingelsene standardiserte?
- Var etterlevelsen høy nok?
- Er endringene større enn normal testvariasjon?

**Hva kan forklare resultatene?**
- Er forbedringen sannsynligvis en treningseffekt?
- Kan tilvenningseffekt forklare deler av endringen?
- Er det andre faktorer som kan ha bidratt?

**Hva betyr resultatene?**
- Er endringen praktisk betydningsfull (ikke bare tallmessig)?
- Stemmer resultatene med det forskning viser?
- Hva ville du gjort annerledes neste gang?

**Minimal detekterbar endring:**
I noen tester er det en naturlig variasjon fra gang til gang, selv uten trening. Denne variasjonen kalles testens feilmargin eller minimal detekterbar endring. Hvis endringen fra pretest til posttest er mindre enn denne feilmarginen, kan du ikke si sikkert at endringen skyldes treningen.`,
    },
    {
      id: 'tr2-8-4-tip-1',
      type: 'tip',
      title: 'Tips for analysedelen',
      content: 'Vær ærlig om svakhetene i prosjektet ditt. Det viser vitenskapelig modenhet og styrker rapporten. Lærere verdsetter elever som kan diskutere feilkilder og begrensninger på en reflektert måte, selv om resultatene ikke ble som forventet. Husk at et prosjekt der treningen ikke ga forventet effekt fortsatt kan gi en utmerket rapport dersom analysen og diskusjonen er grundig.',
    },
    {
      id: 'tr2-8-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr2-8-4-ex-1',
        number: '8.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'En forsøksperson hadde 1RM knebøy på 60 kg ved pretest og 69 kg ved posttest. Hva er den prosentvise endringen?',
        multipleChoiceOptions: [
          '15 %',
          '9 %',
          '13 %',
          '10 %',
        ],
        hints: ['Bruk formelen: ((posttest - pretest) / pretest) x 100'],
        solution: 'Prosentvis endring = ((69 - 60) / 60) x 100 = (9 / 60) x 100 = 15 %. Resultatet viser en styrkeøkning på 15 % i knebøy etter treningsperioden.',
      },
    },
    {
      id: 'tr2-8-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr2-8-4-ex-2',
        number: '8.4.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en feilkilde i et treningsprosjekt?',
        multipleChoiceOptions: [
          'En faktor som kan påvirke resultatene utover selve treningsintervensjonen',
          'En regnefeil i dataanalysen',
          'En øvelse som ble utført med feil teknikk',
          'Et resultat som er dårligere enn forventet',
        ],
        hints: ['Tenk på hva annet enn treningen som kan påvirke testresultatene'],
        solution: 'En feilkilde er en variabel som kan påvirke resultatene utover den planlagte treningsintervensjonen. Eksempler er tilvenningseffekt, ulike testbetingelser, annen treningsaktivitet eller naturlig modning. Feilkilder gjør det vanskelig å fastslå at endringene skyldes treningen alene.',
      },
    },
    {
      id: 'tr2-8-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr2-8-4-ex-3',
        number: '8.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tre elever har gjennomført et styrketreningsprosjekt. Pretestresultater i 1RM benkpress: 40 kg, 50 kg, 45 kg. Posttestresultater: 47 kg, 56 kg, 52 kg. Beregn gjennomsnittlig pretest, gjennomsnittlig posttest, gjennomsnittlig endring i kg og prosentvis endring for gruppen.',
        hints: ['Beregn gjennomsnitt for pretest og posttest hver for seg, deretter endring'],
        solution: 'Gjennomsnittlig pretest: (40 + 50 + 45) / 3 = 135 / 3 = 45,0 kg. Gjennomsnittlig posttest: (47 + 56 + 52) / 3 = 155 / 3 = 51,7 kg. Gjennomsnittlig endring: 51,7 - 45,0 = 6,7 kg. Prosentvis endring: ((51,7 - 45,0) / 45,0) x 100 = 14,8 %. Individuell prosentvis endring: Elev 1: 17,5 %, Elev 2: 12,0 %, Elev 3: 15,6 %. Resultatene viser en gjennomsnittlig økning i 1RM benkpress på 6,7 kg (14,8 %) etter treningsperioden. Alle tre elevene viste fremgang, men med noe individuell variasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-8-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr2-8-4-ex-4',
        number: '8.4.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En elev har testet VO2maks med beep-test før og etter et 8 ukers løpetreningsprogram. Pretestresultat: nivå 8, strek 6 (estimert VO2maks: 40,5 ml/kg/min). Posttestresultat: nivå 10, strek 2 (estimert VO2maks: 45,8 ml/kg/min). Presenter resultatene i en tabell og tolk dem.',
        hints: ['Beregn prosentvis endring og vurder om dette er en realistisk forbedring'],
        solution: 'Tabell: Variabel: Estimert VO2maks (ml/kg/min). Pretest: 40,5. Posttest: 45,8. Endring: +5,3 ml/kg/min. Endring (%): +13,1 %. Tolkning: Resultatene viser en økning i estimert VO2maks på 5,3 ml/kg/min (13,1 %) etter 8 uker med løpetrening. Denne forbedringen er forenlig med det forskning viser for utrente individer som starter med systematisk utholdenhetstrening, der forbedringer på 10–20 % er vanlig i de første månedene. Det bør bemerkes at beep-testen gir et estimat av VO2maks og ikke en direkte måling, noe som innebærer en viss usikkerhet. Noe av forbedringen kan skyldes tilvenning til testen og bedre løpsteknikk ved posttesten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-8-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr2-8-4-ex-5',
        number: '8.4.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvorfor mangel på kontrollgruppe er en viktig feilkilde i et treningsprosjekt. Forklar hva en kontrollgruppe er, hvorfor den er verdifull, og diskuter praktiske utfordringer med å ha kontrollgruppe i et skoleprosjekt.',
        hints: ['Tenk på hva som kan forklare forbedring fra pretest til posttest utenom treningen'],
        solution: 'En kontrollgruppe er en gruppe som gjennomfører de samme testene (pretest og posttest) uten å delta i treningsintervensjonen. Hensikten er å kontrollere for faktorer som tilvenningseffekt, naturlig variasjon, modning og sesongmessige endringer. Uten kontrollgruppe kan vi ikke si sikkert at forbedringen fra pretest til posttest skyldes treningsprogrammet. For eksempel kan en forbedring på 10 % i beep-test delvis skyldes at forsøkspersonen kjenner testen bedre andre gang (tilvenningseffekt). Hvis kontrollgruppen også forbedret seg med 5 % uten trening, vet vi at kanskje bare halvparten av forbedringen skyldes treningsintervensjonen. Praktiske utfordringer i skoleprosjekt: 1) Vanskelig å rekruttere nok forsøkspersoner til å ha to grupper. 2) Etisk problematisk å be medelever om å la være å trene. 3) Vanskelig å kontrollere at kontrollgruppen faktisk ikke trener. 4) Kort prosjektperiode gjør det vanskelig å se statistisk signifikante forskjeller mellom gruppene. Mulige løsninger: Bruk en venteliste-design der kontrollgruppen får tilbud om programmet etter prosjektet, eller sammenlign resultatene med publiserte normdata eller tidligere forskning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-8-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr2-8-4-ex-6',
        number: '8.4.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et styrketreningsprosjekt viste en økning i 1RM knebøy på 18 % etter 6 uker. Diskuter minst fem mulige forklaringer på denne forbedringen – både de som skyldes treningseffekt og de som skyldes andre faktorer. Vurder sannsynligheten for hver forklaring.',
        hints: ['Tenk på nevrale tilpasninger, muskelvekst, tilvenning, motivasjon og testbetingelser'],
        solution: 'Forklaring 1 – Nevrale tilpasninger (svært sannsynlig): I de første ukene av styrketrening skjer det store nevrale tilpasninger: bedre aktivering av motoriske enheter, forbedret koordinasjon mellom muskler, og redusert antagonist-aktivering. Dette er den viktigste forklaringen på styrkeøkning de første 6–8 ukene. Forklaring 2 – Muskelhypertrofi (moderat sannsynlig): Noe muskelvekst kan ha skjedd, men 6 uker er kort tid for vesentlig hypertrofi. Bidraget er trolig begrenset. Forklaring 3 – Tilvenningseffekt (moderat sannsynlig): Forsøkspersonen kan ha prestert bedre på posttesten fordi teknikken i knebøy ble forbedret gjennom treningsperioden, og fordi testprosedyren var kjent. Forklaring 4 – Motivasjonsforskjeller (mulig): Forsøkspersonen kan ha vært mer motivert ved posttesten fordi han eller hun ville se forbedring og «bevise» at treningen virket. Forklaring 5 – Ulike testbetingelser (mulig): Forskjeller i tidspunkt, ernæring, søvn eller oppvarming mellom pre- og posttest kan ha bidratt. For eksempel kan bedre søvn eller høyere koffeininntak ved posttesten ha gitt bedre prestasjon. Samlet vurdering: 18 % økning etter 6 uker er realistisk for en utrent person og skyldes mest sannsynlig en kombinasjon av nevrale tilpasninger og tilvenning til øvelsen. For å styrke konklusjonen burde man hatt en kontrollgruppe og en tilvenningstest.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.5: Rapportskriving og presentasjon
// ============================================================================

export const CHAPTER_TRENING_2_8_5: TextbookChapter = {
  id: 'trening-2-8-5',
  courseId: 'trening-2',
  chapterNumber: '8.5',
  title: 'Rapportskriving og presentasjon',
  description: 'IMRaD-struktur, bruk av figurer og tabeller, drøfting av resultater og muntlig presentasjon.',
  estimatedMinutes: 20,
  competenceGoals: [
    'kunne strukturere en prosjektrapport etter IMRaD-modellen',
    'kunne lage relevante figurer og tabeller for presentasjon av resultater',
    'kunne drøfte resultater i lys av teori, feilkilder og praktisk betydning',
  ],
  keyTerms: [],
  content: [
    {
      id: 'tr2-8-5-intro',
      type: 'text',
      content: `## Rapportskriving for treningsprosjektet

Rapporten er sluttproduktet av treningsprosjektet. Den dokumenterer hele prosessen fra problemstilling til konklusjon og skal skrives slik at en leser som ikke kjenner prosjektet kan forstå hva du har gjort, hvorfor du gjorde det, hva du fant, og hva resultatene betyr.

I vitenskapelige sammenhenger brukes ofte **IMRaD-strukturen** for å organisere rapporter. IMRaD står for Introduksjon, Metode, Resultater og Diskusjon. Denne strukturen gir en logisk oppbygging som gjør det enkelt for leseren å finne informasjonen de leter etter.`,
    },
    {
      id: 'tr2-8-5-def-imrad',
      type: 'definition',
      title: 'IMRaD-struktur',
      content: 'IMRaD er en forkortelse for Introduksjon, Metode, Resultater og Diskusjon. Det er en standardisert struktur for vitenskapelige rapporter og artikler. Introduksjonen presenterer bakgrunn og problemstilling, metoden beskriver hvordan undersøkelsen ble gjennomført, resultatene viser funnene, og diskusjonen tolker og drøfter resultatene.',
    },
    {
      id: 'tr2-8-5-struktur',
      type: 'text',
      title: 'Rapportens oppbygging',
      content: `En treningsprosjektrapport bør inneholde følgende deler:

**1. Forside**
- Tittel (som reflekterer problemstillingen)
- Navn, klasse, dato
- Fag og skole

**2. Sammendrag (abstract)**
- Kort oppsummering av hele prosjektet (100–200 ord)
- Problemstilling, metode, hovedresultater og konklusjon

**3. Introduksjon**
- Bakgrunn: Hvorfor er temaet interessant og relevant?
- Teori: Hva sier faglitteraturen om temaet?
- Problemstilling: Hva vil du undersøke?
- Hypotese: Hva forventer du å finne?

**4. Metode**
- Forsøkspersoner: Hvem deltok? Alder, kjønn, treningserfaring
- Treningsprogram: Detaljert beskrivelse av programmet
- Tester: Hvilke tester ble brukt? Testprotokoll
- Databehandling: Hvordan ble dataene analysert?

**5. Resultater**
- Presentasjon av data i tabeller og figurer
- Beskrivelse av hovedfunn
- Ingen tolkning – bare fakta

**6. Diskusjon**
- Tolkning av resultatene: Hva betyr funnene?
- Sammenligning med teori og forskning
- Feilkilder og begrensninger
- Praktisk betydning
- Forslag til videre forskning

**7. Konklusjon**
- Kort svar på problemstillingen

**8. Referanseliste**
- Alle kilder du har brukt`,
    },
    {
      id: 'tr2-8-5-figurer',
      type: 'text',
      title: 'Figurer og tabeller',
      content: `Figurer og tabeller er viktige verktøy for å presentere resultater tydelig. God bruk av visualisering gjør rapporten mer profesjonell og lettlest.

**Regler for tabeller:**
- Alle tabeller skal ha et tabellnummer og en beskrivende tittel (over tabellen)
- Kolonner skal ha tydelige overskrifter med enheter
- Bruk konsistent antall desimaler
- Tabellen skal kunne leses og forstås uten å lese resten av teksten

**Eksempel:**

*Tabell 1: Pre- og posttestresultater for maksimal styrke (1RM) etter 6 ukers styrketrening (n=1).*

| Test | Pretest | Posttest | Endring | Endring (%) |
|------|---------|----------|---------|-------------|
| 1RM knebøy (kg) | 70,0 | 82,0 | +12,0 | +17,1 |
| 1RM benkpress (kg) | 45,0 | 50,0 | +5,0 | +11,1 |

**Regler for figurer:**
- Alle figurer skal ha et figurnummer og en beskrivende bildetekst (under figuren)
- Akser skal ha tydelige titler med enheter
- Bruk tydelige farger eller mønstre som skiller gruppene
- Figuren skal være selvforklarende

**Vanlige figurtyper i treningsprosjekter:**
- Søylediagram for sammenligning av pre- og posttest
- Linjediagram for progresjon over tid (f.eks. ukentlig belastning)
- Stolpediagram med feilstaver for gruppedata`,
    },
    {
      id: 'tr2-8-5-drofting',
      type: 'text',
      title: 'Drøfting av resultater',
      content: `Diskusjonsdelen er den viktigste og mest krevende delen av rapporten. Her tolker du resultatene dine, setter dem i sammenheng med teori, og vurderer styrker og svakheter ved prosjektet.

**En god diskusjon inneholder:**

**1. Tolkning av hovedfunn:**
Start med å oppsummere hovedfunnene og svar på problemstillingen. Var resultatene i tråd med hypotesen din, eller ble de annerledes enn forventet?

**2. Sammenligning med teori og forskning:**
Relaterer resultatene dine til det du skrev i introduksjonens teoridel. Stemmer funnene med det forskning viser? Hvis resultatene avviker, forklar mulige årsaker.

**3. Feilkilder og begrensninger:**
Diskuter åpent hvilke feilkilder som kan ha påvirket resultatene. Vurder hvor stor innvirkning de ulike feilkildene kan ha hatt.

**4. Praktisk betydning:**
Drøft hva resultatene betyr i praksis. Kan treningsprogrammet anbefales for andre i lignende situasjon?

**5. Forslag til forbedringer:**
Hva ville du gjort annerledes dersom du skulle gjøre prosjektet på nytt? Hvordan kunne designet forbedres?

**Eksempel på drøfting:**
«Resultatene viste en økning i 1RM knebøy på 17,1 % etter 6 ukers styrketrening. Dette er i tråd med forskning som viser at utrente individer kan forvente styrkeøkninger på 10–25 % i de første ukene av systematisk trening (Raastad et al., 2010). Forbedringen skyldes mest sannsynlig nevrale tilpasninger, da 6 uker er for kort tid til å forvente vesentlig muskelhypertrofi. En viktig feilkilde er mangel på kontrollgruppe, noe som gjør det vanskelig å utelukke at deler av forbedringen skyldes tilvenning til testen. Etterlevelsen var 89 %, noe som regnes som god, men tre tapte treningsøkter kan ha redusert den totale treningseffekten.»`,
    },
    {
      id: 'tr2-8-5-def-hypotese',
      type: 'definition',
      title: 'Hypotese',
      content: 'En hypotese er en begrunnet antakelse om hva du forventer å finne i undersøkelsen. Den bygger på teori og tidligere forskning. I et treningsprosjekt kan en hypotese for eksempel være: «Vi forventer at 6 uker med styrketrening vil gi en økning i 1RM knebøy på minst 10 % hos utrente elever.» Hypotesen testes gjennom datainnsamling og analyse.',
    },
    {
      id: 'tr2-8-5-presentasjon',
      type: 'text',
      title: 'Muntlig presentasjon',
      content: `Mange treningsprosjekter avsluttes med en muntlig presentasjon. Her er noen tips for en god presentasjon:

**Struktur for presentasjonen:**
1. Innledning: Presenter problemstillingen og hvorfor du valgte temaet (1–2 minutter)
2. Metode: Kort om hvordan prosjektet ble gjennomført (2–3 minutter)
3. Resultater: Vis de viktigste funnene med figurer og tabeller (3–4 minutter)
4. Diskusjon: Tolk resultatene og drøft feilkilder (3–4 minutter)
5. Konklusjon: Oppsummer i 2–3 setninger (1 minutt)

**Tips for presentasjonen:**
- Bruk få lysbilder med store figurer og lite tekst
- Snakk fritt – ikke les fra lysbildene
- Øv på presentasjonen minst to ganger
- Ha en klar tidsplan og hold deg innenfor tidsrammen
- Vær forberedt på spørsmål om metode og feilkilder
- Vis at du har reflektert over hva du har lært

**Vanlige spørsmål fra publikum:**
- Hvorfor valgte du akkurat denne problemstillingen?
- Hva ville du gjort annerledes neste gang?
- Hvordan kontrollerte du for feilkilder?
- Kan du generalisere resultatene dine?
- Hva overrasket deg mest?`,
    },
    {
      id: 'tr2-8-5-example-rapport',
      type: 'example',
      title: 'Eksempel: Sammendrag av en prosjektrapport',
      problem: 'Skriv et sammendrag (abstract) for et treningsprosjekt om styrketrening og vertikal spenst.',
      solution: `**Sammendrag:**

Hensikten med dette prosjektet var å undersøke effekten av 6 uker med plyometrisk trening på vertikal hopphøyde hos elever i VG3. Problemstillingen var: «Hvilken effekt har plyometrisk trening to ganger per uke i 6 uker på vertikal hopphøyde målt med Sargent jump test?»

Tre mannlige elever (17–18 år) med erfaring fra ballspill gjennomførte et plyometrisk treningsprogram bestående av dybdehopp, kasthopp og hurdle hops. Treningen ble gjennomført to ganger per uke med progressivt økende volum. Vertikal hopphøyde ble målt med Sargent jump test ved pretest og posttest.

Resultatene viste en gjennomsnittlig økning i vertikal hopphøyde fra 42,3 ± 3,1 cm til 46,7 ± 2,8 cm, tilsvarende en forbedring på 10,4 %. Etterlevelsen var 92 %.

Konklusjonen er at 6 uker med plyometrisk trening ga en tydelig forbedring i vertikal spenst hos de tre forsøkspersonene. Mangel på kontrollgruppe og lavt antall forsøkspersoner er viktige begrensninger som gjør det vanskelig å generalisere resultatene.`,
    },
    {
      id: 'tr2-8-5-tip-1',
      type: 'tip',
      title: 'Tips for rapportskriving',
      content: 'Start rapportskrivingen tidlig – skriv innledning og teori mens treningsprogrammet pågår. Det gjør sluttfasen mindre stressende. La gjerne en medelev lese gjennom rapporten og gi tilbakemelding for du leverer. Et friskt blikk fanger ofte opp uklare formuleringer og logiske hull som du selv ikke ser.',
    },
    {
      id: 'tr2-8-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr2-8-5-ex-1',
        number: '8.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva står IMRaD for?',
        multipleChoiceOptions: [
          'Introduksjon, Metode, Resultater og Diskusjon',
          'Informasjon, Mål, Registrering og Data',
          'Innledning, Motivasjon, Rapport og Drøfting',
          'Idrettsvitenskap, Medisin, Rehabilitering og Diagnostikk',
        ],
        hints: ['IMRaD er en forkortelse for de fire hoveddelene i en vitenskapelig rapport'],
        solution: 'IMRaD står for Introduksjon, Metode, Resultater og Diskusjon. Dette er en standardisert struktur for vitenskapelige rapporter og artikler som gir en logisk oppbygging: først bakgrunn og problemstilling, deretter hvordan undersøkelsen ble gjennomført, hva man fant, og til slutt tolkning og drøfting av funnene.',
      },
    },
    {
      id: 'tr2-8-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr2-8-5-ex-2',
        number: '8.5.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva skal resultatdelen i en rapport inneholde?',
        multipleChoiceOptions: [
          'Presentasjon av data i tabeller og figurer uten tolkning',
          'Tolkning av resultatene i lys av teori og forskning',
          'Beskrivelse av treningsprogrammet og testprosedyrene',
          'Bakgrunn for valg av problemstilling og hypotese',
        ],
        hints: ['Skillet mellom resultater og diskusjon er viktig i IMRaD-strukturen'],
        solution: 'Resultatdelen skal presentere dataene objektivt i form av tabeller, figurer og beskrivende tekst. Tolkning av hva resultatene betyr hører hjemme i diskusjonsdelen. Metode og testprosedyrer beskrives i metodedelen, og bakgrunn og problemstilling hører til i introduksjonen.',
      },
    },
    {
      id: 'tr2-8-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr2-8-5-ex-3',
        number: '8.5.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en metodedel for et treningsprosjekt der du trener styrke (knebøy og benkpress) 3 ganger per uke i 6 uker og tester 1RM for og etter. Inkluder informasjon om forsøksperson, treningsprogram, tester og testprotokoll.',
        hints: ['Beskriv metoden så detaljert at en annen person kunne gjentatt prosjektet'],
        solution: 'Metode: Forsøksperson: En mannlig elev (18 år, 180 cm, 75 kg) uten systematisk styrketreningserfaring det siste året. Treningsprogram: Styrketreningsprogrammet ble gjennomført 3 ganger per uke (mandag, onsdag, fredag) i 6 uker, totalt 18 planlagte økter. Programmet inneholdt knebøy og benkpress som hovedøvelser, i tillegg til markløft, skulderpress og nedtrekk. Belastning: 3 serier x 8–12 repetisjoner med dobbel progresjon. Når forsøkspersonen klarte 3x12 med en gitt vekt, ble vekten økt med 5 % og repetisjonene startet på 8 igjen. Hvilepauser: 2 minutter mellom serier. Tester: 1RM i knebøy og benkpress ble testet ved pretest (uke 1) og posttest (uke 8, 72 timer etter siste treningsøkt). Testprotokoll: Testen ble gjennomført mellom kl. 14:00 og 16:00 begge ganger. Oppvarming: 5 min ergometersykkel, deretter oppvarmingsserier med 50 %, 70 % og 85 % av estimert 1RM. Forsøk med økende vekt til maks ble nådd (maks 5 forsøk). 3–5 minutter hvile mellom forsøk. Testleder godkjente dybde i knebøy. Databehandling: Prosentvis endring ble beregnet for begge øvelsene. Treningsdagbok ble brukt for å dokumentere alle økter og beregne etterlevelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-8-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr2-8-5-ex-4',
        number: '8.5.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en tabell og et søylediagram (beskriv det med tekst) som viser følgende resultater fra et treningsprosjekt: Pretest sit-and-reach: 18 cm, posttest: 25 cm. Pretest planke: 65 sekunder, posttest: 95 sekunder. Beregn prosentvis endring for begge testene.',
        hints: ['Husk tabellnummer, tittel og enheter. Beskriv søylediagrammet med akser og verdier'],
        solution: 'Tabell 1: Pre- og posttestresultater etter 6 ukers treningsprogram (n=1). | Test | Pretest | Posttest | Endring | Endring (%) | Sit-and-reach (cm) | 18,0 | 25,0 | +7,0 | +38,9 | Planke (sek) | 65 | 95 | +30 | +46,2. Beregning: Sit-and-reach: ((25-18)/18) x 100 = 38,9 %. Planke: ((95-65)/65) x 100 = 46,2 %. Figur 1: Sammenligning av pre- og posttestresultater. Søylediagrammet har to grupper (Sit-and-reach og Planke), hver med to søyler side om side (pretest i blått, posttest i rødt). X-aksen viser testene, y-aksen viser verdier med enhet angitt for hver test. Søylene for sit-and-reach viser 18 cm og 25 cm. Søylene for planke viser 65 sekunder og 95 sekunder. Bildetekst: «Figur 1: Pre- og posttestresultater for sit-and-reach (cm) og planke (sekunder). Blå søyler viser pretest, røde søyler viser posttest.»',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-8-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr2-8-5-ex-5',
        number: '8.5.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en diskusjonsdel for et treningsprosjekt der en utrent elev økte 1RM knebøy fra 65 kg til 78 kg etter 8 uker med styrketrening. Etterlevelsen var 83 % (15 av 18 økter). Inkluder tolkning, sammenligning med forskning, feilkilder og forslag til forbedringer.',
        hints: ['Bruk strukturen: tolkning, teorisammenligning, feilkilder, praktisk betydning, forbedringer'],
        solution: 'Diskusjon: Hovedfunnet i dette prosjektet er at 8 uker med styrketrening ga en økning i 1RM knebøy fra 65 kg til 78 kg, tilsvarende en forbedring på 20 %. Dette er noe høyere enn gjennomsnittet i lignende studier, der utrente individer typisk viser en styrkeøkning på 10–20 % i de første 8–12 ukene (Kraemer og Ratamess, 2004). Forbedringen skyldes sannsynligvis primært nevrale tilpasninger, inkludert bedre motorisk rekruttering og intramuskular koordinasjon. Noe muskelhypertrofi kan også ha bidratt etter 8 uker. Etterlevelsen var 83 %, noe som anses som god, men tre tapte treningsøkter kan ha redusert den potensielle treningseffekten. Samtidig er det mulig at den observerte effekten overvurderer den rene treningseffekten, da tilvenning til knebøyteknikken og testprosedyren kan ha bidratt til forbedret prestasjon. Feilkilder: Mangel på kontrollgruppe gjør det umulig å isolere treningseffekten fra tilvenning og naturlig variasjon. Pretesten ble gjennomført om morgenen og posttesten om ettermiddagen, noe som kan ha påvirket prestasjonen. Forsøkspersonen deltok i kroppsøvingstimer som inkluderte styrkeøvelser, noe som utgjør en tilleggstreningsstimulus. Forslag til forbedringer: Inkluder en kontrollgruppe eller tilvenningstest, standardiser testtidspunkt, og kontroller for trening utenom programmet. Et lengre prosjekt (12 uker) ville gitt mer tid for fysiologiske tilpasninger. Samlet sett tyder resultatene på at systematisk styrketrening ga en vesentlig økning i maksimal styrke, men begrensningene gjør det vanskelig å konkludere med sikkerhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-8-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr2-8-5-ex-6',
        number: '8.5.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vurder følgende utsagn fra en elevs diskusjonsdel: «Resultatene viser tydelig at plyometrisk trening er den beste metoden for å øke spenst. Alle bør trene plyometrisk.» Forklar hvilke vitenskapelige svakheter denne konklusjonen har, og skriv en mer nyansert versjon av avsnittet.',
        hints: ['Tenk på generaliserbarhet, mangel på sammenligning og grunnlaget for kausale påstander'],
        solution: 'Svakheter i utsagnet: 1) Overgeneralisering: Prosjektet testet sannsynligvis en liten gruppe (kanskje bare en person), noe som gjør det umulig å generalisere til «alle». 2) Kausal slutning uten grunnlag: Uten kontrollgruppe kan man ikke si at plyometrisk trening «tydelig» forårsaket forbedringen. 3) Sammenligning mangler: Det ble ikke sammenlignet med andre treningsmetoder, så man kan ikke konkludere med at plyometrisk trening er «den beste» metoden. 4) Mangel på forbehold: Vitenskapelige konklusjoner bør inneholde forbehold om studiens begrensninger. Mer nyansert versjon: «Resultatene fra dette prosjektet indikerer at 6 uker med plyometrisk trening ga en forbedring i vertikal hopphøyde hos de tre forsøkspersonene. Denne forbedringen er i tråd med tidligere forskning som har vist positiv effekt av plyometrisk trening på spenst (Markovic, 2007). Det er imidlertid viktig å bemerke at prosjektet ikke inkluderte en kontrollgruppe eller sammenlignet med andre treningsmetoder, og det lave antallet forsøkspersoner gjør det vanskelig å generalisere resultatene. For å kunne hevde at plyometrisk trening er den mest effektive metoden for spenstutvikling, ville det vært nødvendig med et kontrollert forsøk som sammenligner ulike treningsmetoder på en større gruppe.»',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksportert samling: Seksjon 8 – Treningsprosjekt
// ============================================================================

export const TRENING_2_DEL8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TRENING_2_8_1,
  CHAPTER_TRENING_2_8_2,
  CHAPTER_TRENING_2_8_3,
  CHAPTER_TRENING_2_8_4,
  CHAPTER_TRENING_2_8_5,
];
