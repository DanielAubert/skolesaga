/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Treningslære 2 (VG3) - Seksjon 3: Avansert utholdenhetstrening
 *
 * Dekker LK20-kompetansemål for treningslære 2
 * VO2max, anaerob terskel, intervalltrening, langkjøring og idrettsspesifikk utholdenhet
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1: VO2max og aerob kapasitet
// ============================================================================

export const CHAPTER_TRENING_2_3_1: TextbookChapter = {
  id: 'trening-2-3-1',
  courseId: 'trening-2',
  chapterNumber: '3.1',
  title: 'VO2max og aerob kapasitet',
  description: 'Forstå hva VO2max er, hvordan det måles, treningsmetoder for å forbedre aerob kapasitet, og genetikkens rolle for utholdenhetsprestasjon.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forklare hva VO2max er og hvorfor det er en sentral faktor for utholdenhetsprestasjon',
    'beskrive metoder for å måle VO2max direkte og indirekte',
    'gjøre rede for treningsmetoder som forbedrer aerob kapasitet',
    'drøfte genetikkens og trenbarhetens betydning for VO2max',
  ],
  content: [
    {
      id: 'tr2-3-1-intro',
      type: 'text',
      content: `# VO2max og aerob kapasitet

VO2max er den viktigste fysiologiske markøren for utholdenhetsprestasjon. Begrepet beskriver kroppens maksimale evne til å ta opp og utnytte oksygen under hardt arbeid. En høy VO2max betyr at kroppen kan levere store mengder oksygen til de arbeidende musklene, noe som gir et høyere arbeidskapasitet over tid.

Utholdenhetsidretter som langrenn, langdistanseløp og sykling stiller enorme krav til det aerobe systemet. Verdens beste utholdenhetsutøvere har VO2max-verdier som kan være dobbelt så høye som hos utrente personer. I dette kapittelet skal vi se på hva som bestemmer VO2max, hvordan det måles, og hvilke treningsmetoder som er mest effektive for å forbedre aerob kapasitet.`,
    },
    {
      id: 'tr2-3-1-def-vo2max',
      type: 'definition',
      title: 'VO2max (maksimalt oksygenopptak)',
      content: 'VO2max er den maksimale mengden oksygen kroppen kan ta opp og utnytte per tidsenhet under maksimalt arbeid. Det uttrykkes enten absolutt i liter per minutt (L/min) eller relativt til kroppsvekt i milliliter per kilogram per minutt (mL/kg/min). Relativ VO2max er mest relevant for idretter der utøveren bærer sin egen kroppsvekt, som løping og langrenn.',
    },
    {
      id: 'tr2-3-1-text-1',
      type: 'text',
      title: 'Hva bestemmer VO2max?',
      content: `VO2max bestemmes av flere fysiologiske faktorer som fungerer som et transportsystem for oksygen fra luft til muskelceller:

**Sentrale faktorer (oksygentilbud):**
- **Hjertets minuttvolum** – Slagvolum ganger hjertefrekvens. Jo mer blod hjertet pumper per minutt, desto mer oksygen leveres til musklene
- **Hemoglobinkonsentrasjon** – Mengden oksygenbærende protein i blodet. Høyere hemoglobin gir bedre oksygentransport
- **Blodvolum** – Totalt blodvolum påvirker hjertets evne til å fylle seg og pumpe effektivt

**Perifere faktorer (oksygenutnyttelse):**
- **Kapillærtetthet** – Antall små blodkar rundt muskelfibrene. Flere kapillærer gir bedre oksygenlevering til cellene
- **Mitokondrietetthet** – Antall og størrelse på mitokondriene i muskelcellene. Flere mitokondrier gir økt evne til aerob energiproduksjon
- **Oksidative enzymer** – Mengden enzymer som katalyserer den aerobe forbrenningen i mitokondriene

| Faktor | Bidrag til VO2max | Trenbar? |
|---|---|---|
| Hjertets slagvolum | Meget høyt | Ja, spesielt med utholdenhetstrening |
| Hemoglobin | Moderat | Begrenset (påvirkes av jernstatus og høydetrening) |
| Kapillærtetthet | Høyt | Ja, øker med regelmessig utholdenhetstrening |
| Mitokondrietetthet | Høyt | Ja, responderer godt på trening |`,
    },
    {
      id: 'tr2-3-1-text-2',
      type: 'text',
      title: 'Måling av VO2max',
      content: `VO2max kan måles direkte eller estimeres indirekte. Direkte måling gir mest nøyaktig resultat, mens indirekte tester er enklere å gjennomføre i praksis.

**Direkte måling (laboratorietest):**

Utøveren løper på tredemølle eller sykler på ergometersykkel med gradvis økende belastning til utmattelse. En maske over nese og munn samler inn ekspirasjonsluft som analyseres for oksygen- og karbondioksidinnhold.

Kriterier for at VO2max er oppnådd:
- Oksygenopptaket flater ut (platåer) til tross for økt belastning
- Respiratorisk utvekslingskvotient (RER) over 1,10
- Hjertefrekvens nær estimert maksimalpuls
- Laktatnivå i blodet over 8 mmol/L

**Indirekte tester:**

| Test | Metode | Nøyaktighet |
|---|---|---|
| Cooper-test | Løp så langt som mulig på 12 min | Moderat |
| Bip-test (beep-test) | Vekselpendel med økende hastighet | Moderat til god |
| Astrand-test | Sykkelergometer med submaksimal belastning | Moderat |
| Trappetrinnstest | Steg opp og ned på en benk med bestemt rytme | Lav til moderat |

**Typiske VO2max-verdier (mL/kg/min):**

| Gruppe | Menn | Kvinner |
|---|---|---|
| Utrente | 35–45 | 27–38 |
| Mosjonister | 45–55 | 38–48 |
| Veltrente | 55–65 | 48–58 |
| Eliteutøvere | 70–85+ | 60–75+ |
| Verdensklasse langrenn | 80–96 | 70–80 |`,
    },
    {
      id: 'tr2-3-1-def-coopertest',
      type: 'definition',
      title: 'Cooper-test',
      content: 'Cooper-testen er en indirekte felttest for estimering av VO2max, utviklet av Kenneth Cooper i 1968. Testpersonen løper så langt som mulig på 12 minutter. VO2max estimeres med formelen: VO2max = (distanse i meter - 504,9) / 44,73. Testen krever høy motivasjon og god evne til å disponere kreftene for å gi pålitelige resultater.',
    },
    {
      id: 'tr2-3-1-text-3',
      type: 'text',
      title: 'Treningsmetoder for å forbedre VO2max',
      content: `For å øke VO2max må hjertet og musklene belastes tilstrekkelig over tid. De mest effektive treningsformene er:

**1. Høyintensiv intervalltrening (HIIT)**
- Arbeidsperioder på 3–5 minutter med intensitet nær VO2max (90–100 % av maksimal hjertefrekvens)
- Pauseperioder med aktiv hvile (50–70 % av HFmax)
- Eksempel: 4 x 4 min med 3 min aktiv pause (den klassiske 4x4-metoden)
- Forskning viser at dette er den mest tidseffektive metoden for å øke VO2max

**2. Langkjøring med moderat intensitet**
- 30–90 minutter i sone 2 (60–75 % av HFmax)
- Bygger aerobt grunnlag gjennom økt kapillærtetthet og mitokondrietetthet
- Viktig som fundament for å tåle mer intensiv trening

**3. Tempotrening**
- 20–40 minutter i sone 3 (75–85 % av HFmax)
- Trener overgangen mellom aerob og anaerob energiproduksjon
- Gir tilpasninger i bade sentrale og perifere faktorer

**4. Fartlek (fartslek)**
- Variasjon i tempo gjennom hele økten
- Kombinerer elementer fra både langkjøring og intervalltrening
- Naturlig og motiverende treningsform som belaster ulike energisystemer

En kombinasjon av disse metodene over tid gir best utvikling av VO2max. Forskning tyder på at 2–3 høyintensive økter per uke kombinert med 3–4 rolige økter gir optimal framgang.`,
    },
    {
      id: 'tr2-3-1-text-4',
      type: 'text',
      title: 'Genetikk og trenbarhet',
      content: `VO2max er en av de mest arvbare fysiologiske egenskapene. Studier tyder på at genetikk forklarer 40–60 % av variasjonen i VO2max mellom individer.

**Genetiske faktorer:**
- Hjertesize og slagvolum er delvis genetisk bestemt
- Muskelfibersammensetning (andel type I vs. type II fibre) er i stor grad arvelig
- Evnen til å danne nye kapillærer varierer mellom individer
- Hemoglobinproduksjon og blodvolum påvirkes av genetikk

**HERITAGE-studien:**
Den store HERITAGE Family Study viste at responsen på utholdenhetstrening varierer enormt. Noen deltakere økte VO2max med over 40 % etter 20 uker med standardisert trening, mens andre knapt viste forbedring. Gjennomsnittlig økning var ca. 15–20 %.

**Viktige poeng:**
- Selv personer med lav genetisk respons vil forbedre seg noe med trening
- Trenbarhet i seg selv er delvis genetisk bestemt
- Treningshistorikk, alder og nåværende treningsnivå påvirker potensialet for forbedring
- Utrente personer har størst potensial for prosentvis forbedring
- Etter mange år med systematisk trening blir ytterligere forbedring stadig vanskeligere

Genetikk setter altså et tak for hva som er mulig, men de aller fleste mennesker utnytter bare en brøkdel av sitt genetiske potensial. Systematisk og godt planlagt trening over mange år er nødvendig for å nærme seg sin personlige grense.`,
    },
    {
      id: 'tr2-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Beregning av VO2max fra Cooper-test',
      problem: 'En elev løper 2800 meter på Cooper-testen. Beregn estimert VO2max og vurder resultatet.',
      solution: `**Beregning med Cooper-formelen:**

VO2max = (distanse - 504,9) / 44,73
VO2max = (2800 - 504,9) / 44,73
VO2max = 2295,1 / 44,73
VO2max = 51,3 mL/kg/min

**Vurdering:**

Med en VO2max på ca. 51 mL/kg/min ligger eleven i kategorien "mosjonist" til "veltrent". For en mannlig elev på videregående er dette et godt resultat som tyder på regelmessig fysisk aktivitet. For en kvinnelig elev ville dette vært et svært godt resultat.

Merk at Cooper-testen gir et estimat, ikke en nøyaktig verdi. Motivasjon, løpserfaring og evne til å disponere kreftene påvirker resultatet.`,
    },
    {
      id: 'tr2-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr2-3-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva uttrykker VO2max?',
        options: [
          { id: 'a', text: 'Kroppens maksimale evne til å ta opp og utnytte oksygen per tidsenhet', isCorrect: true },
          { id: 'b', text: 'Den maksimale hastigheten en person kan løpe i 12 minutter', isCorrect: false },
          { id: 'c', text: 'Den høyeste pulsen en person kan oppnå under trening', isCorrect: false },
          { id: 'd', text: 'Mengden laktat som produseres ved maksimal innsats', isCorrect: false },
        ],
        solution: 'VO2max uttrykker kroppens maksimale evne til å ta opp og utnytte oksygen per tidsenhet under maksimalt arbeid. Det måles i milliliter oksygen per kilogram kroppsvekt per minutt (mL/kg/min) eller i liter per minutt (L/min).',
      },
    },
    {
      id: 'tr2-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr2-3-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken treningsmetode er ifølge forskning mest tidseffektiv for å øke VO2max?',
        options: [
          { id: 'a', text: 'Høyintensiv intervalltrening (f.eks. 4x4 min ved 90-95 % av HFmax)', isCorrect: true },
          { id: 'b', text: 'Langkjøring i 60 minutter ved lav intensitet', isCorrect: false },
          { id: 'c', text: 'Styrketrening med tunge vekter', isCorrect: false },
          { id: 'd', text: 'Tøying og bevegelighetstrening', isCorrect: false },
        ],
        solution: 'Høyintensiv intervalltrening (HIIT), som for eksempel 4x4 min ved 90-95 % av maksimal hjertefrekvens, er den mest tidseffektive metoden for å øke VO2max. Arbeidsperiodene er lange nok til at hjertet oppnår maksimalt slagvolum, noe som gir sterk treningsstimulus for det kardiovaskulære systemet.',
      },
    },
    {
      id: 'tr2-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr2-3-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom sentrale og perifere faktorer som bestemmer VO2max. Gi minst to eksempler på hver.',
        solution: 'Sentrale faktorer handler om oksygentilbudet til musklene, altså hjertets evne til å pumpe oksygenrikt blod. Eksempler: hjertets slagvolum og minuttvolum, hemoglobinkonsentrasjon i blodet, og totalt blodvolum. Perifere faktorer handler om musklenes evne til å ta opp og utnytte oksygenet som leveres. Eksempler: kapillærtetthet rundt muskelfibrene som gir bedre oksygendiffusjon, mitokondrietetthet som øker kapasiteten for aerob energiproduksjon, og mengden oksidative enzymer i muskelcellene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr2-3-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv hvordan en direkte VO2max-test gjennomføres i et fysiologisk laboratorium. Hvilke kriterier brukes for å fastslå at VO2max er oppnådd?',
        solution: 'En direkte VO2max-test gjennomføres ved at utøveren løper på tredemølle eller sykler på ergometersykkel med gradvis økende belastning til utmattelse. Utøveren har på seg en maske over nese og munn som samler ekspirasjonsluft. Luften analyseres kontinuerlig for oksygen- og karbondioksidinnhold, slik at oksygenopptaket kan beregnes. Belastningen økes trinnvis (f.eks. hvert minutt) til utøveren ikke klarer å fortsette. Kriterier for at VO2max er oppnådd: 1) Oksygenopptaket flater ut og øker ikke mer til tross for økt belastning (platå). 2) Respiratorisk utvekslingskvotient (RER) over 1,10, som viser at anaerob energiproduksjon bidrar betydelig. 3) Hjertefrekvens nær estimert maksimalpuls. 4) Blodlaktat over 8 mmol/L.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr2-3-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'HERITAGE-studien viste stor variasjon i treningsrespons mellom individer. Drøft hva dette betyr for treningsplanlegging og forventninger til utvikling av VO2max.',
        solution: 'HERITAGE-studien demonstrerte at treningsrespons er svært individuell. Noen deltakere økte VO2max med over 40 % etter 20 uker med standardisert trening, mens andre knapt viste forbedring. For treningsplanlegging betyr dette at: 1) Man ikke kan forvente lik framgang hos alle som trener likt. 2) Treneren bør individualisere treningsopplegg og justere basert på hver persons respons. 3) Jevnlige tester er viktige for å overvåke framgang og tilpasse treningen. 4) Manglende framgang betyr ikke nødvendigvis at utøveren trener for lite, men kan reflektere lav genetisk respons på den aktuelle treningsformen. 5) Det kan være hensiktsmessig å prøve ulike treningsmetoder dersom en metode ikke gir resultater. Samtidig vil de aller fleste forbedre seg noe med systematisk trening, og genetikk alene forklarer ikke alt. Faktorer som treningshistorikk, ernæring, søvn og restitusjon spiller også inn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-3-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr2-3-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag et 8-ukers treningsprogram for en elev med VO2max på 42 mL/kg/min som ønsker å forbedre sin aerobe kapasitet. Begrunn valg av treningsmetoder, intensiteter og progresjon.',
        solution: 'Et 8-ukers program for en person med VO2max på 42 mL/kg/min (utrent-mosjonstnivå): Uke 1-2 (tilvenning): 3-4 økter/uke med 30-40 min langkjøring ved 60-70 % HFmax. Målet er å bygge aerobt grunnlag og tilpasse kroppen til regelmessig trening. Uke 3-4 (oppbygging): 4 økter/uke: 2 langkjøringer (40-50 min, 65-75 % HFmax) + 1 fartlek med variert tempo + 1 tempoøkt (20 min ved 75-85 % HFmax). Uke 5-6 (intensivering): 4-5 økter/uke: 2 rolige langkjøringer + 1 intervall (4x4 min ved 90-95 % HFmax med 3 min aktiv pause) + 1 tempoøkt + evt. 1 rolig restitusjon. Uke 7-8 (toppfase): 5 økter/uke: 2 langkjøringer + 2 høyintensive økter (veksle mellom 4x4 og kortere intervaller) + 1 tempoøkt. Retest VO2max etter uke 8. Begrunnelse: Programmet starter med lavintensitet for å bygge grunnlag og unngå skade. Gradvis økning i intensitet og volum følger prinsippet om progressiv overbelastning. HIIT introduseres først etter noen uker med grunntrening, da kroppen da tåler belastningen bedre. Kombinasjonen av lavintensiv og høyintensiv trening gir tilpasninger i både sentrale og perifere faktorer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 3.2: Anaerob terskel og laktat
// ============================================================================

export const CHAPTER_TRENING_2_3_2: TextbookChapter = {
  id: 'trening-2-3-2',
  courseId: 'trening-2',
  chapterNumber: '3.2',
  title: 'Anaerob terskel og laktat',
  description: 'Lær om anaerob terskel, laktatprofil, terskeltrening og metoder for å bestemme terskelverdier i praksis.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forklare hva anaerob terskel er og hvordan den relaterer seg til utholdenhetsprestasjon',
    'beskrive laktatprofilens forløp ved økende belastning',
    'gjøre rede for ulike metoder for terskelbestemmelse',
    'drøfte treningsmetoder for å heve anaerob terskel',
  ],
  content: [
    {
      id: 'tr2-3-2-intro',
      type: 'text',
      content: `# Anaerob terskel og laktat

Anaerob terskel er et av de mest brukte begrepene innen utholdenhetstrening. Terskelen representerer den høyeste intensiteten en utøver kan opprettholde over lengre tid uten at laktat hoper seg opp i blodet. For utholdenhetsutøvere er anaerob terskel ofte en bedre prediktor for prestasjon enn VO2max, fordi den forteller hvor stor andel av VO2max utøveren faktisk kan utnytte over tid.

Å forstå laktatkinetikk og terskeltrening er avgjørende for å planlegge effektiv utholdenhetstrening. I dette kapittelet skal vi se på sammenhengen mellom laktat og intensitet, hvordan terskelen bestemmes, og hvilke treningsmetoder som er mest effektive for å heve den.`,
    },
    {
      id: 'tr2-3-2-def-at',
      type: 'definition',
      title: 'Anaerob terskel (AT)',
      content: 'Anaerob terskel er den treningsintensiteten der laktatproduksjonen begynner å overstige laktatfjerningen, slik at laktat akkumuleres i blodet. Ved intensitet under terskelen er laktatnivået stabilt (steady state), mens det over terskelen stiger kontinuerlig. Anaerob terskel ligger typisk ved 60-85 % av VO2max hos utrente og 80-92 % hos veltrente utholdenhetsutøvere.',
    },
    {
      id: 'tr2-3-2-text-1',
      type: 'text',
      title: 'Laktatprofilens forløp',
      content: `Når vi øker belastningen trinnvis under en terskeltest, følger laktatnivået i blodet et karakteristisk mønster:

**Fase 1: Lav intensitet (under aerob terskel)**
- Laktatnivå ligger nær hvilenivå (0,5-1,5 mmol/L)
- All laktat som produseres fjernes umiddelbart
- Energien kommer nesten utelukkende fra aerob forbrenning

**Fase 2: Moderat intensitet (mellom aerob og anaerob terskel)**
- Laktatnivået stiger gradvis men moderat (1,5-4 mmol/L)
- Produksjon og fjerning er tilnærmet i balanse
- Utøveren kan opprettholde intensiteten i lang tid

**Fase 3: Høy intensitet (over anaerob terskel)**
- Laktatnivået stiger raskt og ukontrollert
- Produksjonen overstiger fjerningskapasiteten
- Utøveren tvinges til å redusere intensiteten etter minutter

**To terskelbegreper:**

| Terskel | Laktatnivå | Beskrivelse |
|---|---|---|
| Aerob terskel (LT1) | Ca. 2 mmol/L | Første målbare stigning over hvilenivå |
| Anaerob terskel (LT2) | Ca. 4 mmol/L | Akselererende laktatopphopning |

Merk at verdien 4 mmol/L er en generell tommelfingerregel. Den faktiske terskelverdien varierer individuelt og kan ligge mellom 2,5 og 5,5 mmol/L.`,
    },
    {
      id: 'tr2-3-2-text-2',
      type: 'text',
      title: 'Metoder for terskelbestemmelse',
      content: `Det finnes flere metoder for å bestemme anaerob terskel, fra avanserte laboratorietester til enkle felttester.

**Laktatprofiltest (gullstandard):**
- Trinnvis økende belastning på tredemølle eller sykkelergometer
- Hvert trinn varer 4-5 minutter for å oppnå steady state
- Blodprøve fra fingertupp eller øreflipp ved slutten av hvert trinn
- Laktatverdiene plottes mot belastning for å finne terskelknekken
- Gir nøyaktig terskelverdi i puls, hastighet eller watt

**Konkanitesten (Conconi-test):**
- Progressiv økning i hastighet med registrering av puls
- Terskel identifiseres der pulskurven bøyer av fra en rett linje
- Enklere enn laktattest, men mindre nøyaktig
- Krever erfaring med tolkning av resultatene

**Felttester:**
- **30-minutters tidsforsøk:** Gjennomsnittspuls de siste 20 minuttene brukes som terskelverdi
- **Snakketesten:** Intensiteten der det blir vanskelig å snakke i hele setninger er nær anaerob terskel
- **Borg-skala:** Terskel tilsvarer typisk 14-16 på Borgs RPE-skala (6-20)

**Pulsmåler med laktatvarsling:**
Moderne treningsklokker kan estimere terskel basert på puls og løpsdynamikk, men dette er estimater med betydelig usikkerhet.`,
    },
    {
      id: 'tr2-3-2-def-laktatprofil',
      type: 'definition',
      title: 'Laktatprofil',
      content: 'En laktatprofil er en grafisk fremstilling av blodlaktatkonsentrasjonen som funksjon av treningsintensitet. Den lages ved å ta blodprøver under en trinnvis belastningstest. Kurven viser hvordan laktatnivået endrer seg fra hvile til utmattelse, og gjør det mulig å identifisere aerob terskel (LT1) og anaerob terskel (LT2) samt tilhørende puls og hastighet.',
    },
    {
      id: 'tr2-3-2-text-3',
      type: 'text',
      title: 'Terskeltrening i praksis',
      content: `Å heve anaerob terskel betyr at utøveren kan holde høyere intensitet uten laktatopphopning. Dette oppnås gjennom systematisk terskeltrening.

**Treningsmetoder for å heve anaerob terskel:**

**1. Terskelintervaller**
- 3-6 repetisjoner med 8-15 minutters varighet
- Intensitet rett ved eller like under anaerob terskel
- Kort pause (1-2 min aktiv hvile)
- Eksempel: 4 x 10 min i terskelsone med 90 sek joggepause

**2. Tempoløp**
- Sammenhengende belastning i 20-40 minutter
- Intensitet ved ca. 85-90 % av maksimal hjertefrekvens
- Gir lengre eksponering for terskelnær belastning
- Passer best for erfarne utøvere som tåler høy belastning

**3. Cruiseintervaller**
- 4-6 repetisjoner med 3-5 minutters varighet
- Intensitet like over anaerob terskel
- 60-90 sek aktiv pause
- Trener kroppen til å håndtere noe laktatopphopning

**Tilpasninger som hever anaerob terskel:**
- Økt kapillærtetthet forbedrer oksygentilførselen til musklene
- Flere og større mitokondrier øker aerob energiproduksjon
- Økt aktivitet av laktatdehydrogenase forbedrer laktatfjerningen
- Bedre fettforbrenningsevne sparer glykogenlagrene
- Økt bufferkapasitet i musklene tolererer mer laktat

Med regelmessig terskeltrening kan anaerob terskel flyttes fra 70-75 % av VO2max opp til 85-92 % hos veltrente utøvere.`,
    },
    {
      id: 'tr2-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Tolkning av laktatprofil',
      problem: 'En løper gjennomfører en laktatprofiltest med følgende resultater: 8 km/t: 1,0 mmol/L, 10 km/t: 1,2 mmol/L, 12 km/t: 1,8 mmol/L, 14 km/t: 2,8 mmol/L, 15 km/t: 3,9 mmol/L, 16 km/t: 5,8 mmol/L, 17 km/t: 8,5 mmol/L. Bestem omtrentlig aerob og anaerob terskel.',
      solution: `**Analyse av laktatprofilen:**

- Ved 8-10 km/t: Laktat er stabilt og lavt (1,0-1,2 mmol/L). Utøveren er godt under aerob terskel.
- Ved 12 km/t: Laktat begynner å stige merkbart til 1,8 mmol/L. Aerob terskel (LT1) ligger omtrent her, rundt 12 km/t.
- Ved 14-15 km/t: Laktat stiger moderat men kontrollert (2,8-3,9 mmol/L). Utøveren nærmer seg anaerob terskel.
- Ved 15 km/t (3,9 mmol/L): Nær den klassiske 4 mmol/L-grensen. Anaerob terskel (LT2) anslås til ca. 15 km/t.
- Ved 16-17 km/t: Laktat stiger raskt og ukontrollert (5,8-8,5 mmol/L). Utøveren er godt over anaerob terskel.

**Konklusjon:**
- Aerob terskel (LT1): ca. 12 km/t
- Anaerob terskel (LT2): ca. 15 km/t
- Terskeltrening bør gjennomføres i hastigheter rundt 14-15 km/t for denne utøveren.`,
    },
    {
      id: 'tr2-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr2-3-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er anaerob terskel?',
        options: [
          { id: 'a', text: 'Den høyeste intensiteten der laktatproduksjon og laktatfjerning er i balanse', isCorrect: true },
          { id: 'b', text: 'Den laveste intensiteten der kroppen begynner å bruke oksygen', isCorrect: false },
          { id: 'c', text: 'Den maksimale pulsen en person kan oppnå under trening', isCorrect: false },
          { id: 'd', text: 'Tidspunktet der kroppen går tom for glykogen', isCorrect: false },
        ],
        solution: 'Anaerob terskel er den høyeste treningsintensiteten der laktatproduksjonen og laktatfjerningen er i balanse. Over denne intensiteten akkumuleres laktat i blodet, og utøveren tvinges til å redusere tempoet etter relativt kort tid.',
      },
    },
    {
      id: 'tr2-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr2-3-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken laktatverdi brukes tradisjonelt som indikator på anaerob terskel?',
        options: [
          { id: 'a', text: 'Ca. 4 mmol/L', isCorrect: true },
          { id: 'b', text: 'Ca. 1 mmol/L', isCorrect: false },
          { id: 'c', text: 'Ca. 10 mmol/L', isCorrect: false },
          { id: 'd', text: 'Ca. 0,5 mmol/L', isCorrect: false },
        ],
        solution: 'Tradisjonelt brukes 4 mmol/L som en tommelfingerregel for anaerob terskel (OBLA - onset of blood lactate accumulation). Det er viktig å merke seg at den individuelle terskelverdien kan variere mellom 2,5 og 5,5 mmol/L, så verdien 4 mmol/L er en forenkling.',
      },
    },
    {
      id: 'tr2-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr2-3-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom aerob terskel (LT1) og anaerob terskel (LT2). Hvorfor er begge viktige for utholdenhetstrening?',
        solution: 'Aerob terskel (LT1) er den intensiteten der laktatnivået for første gang stiger merkbart over hvilenivået, typisk ved ca. 2 mmol/L. Anaerob terskel (LT2) er den intensiteten der laktat begynner å akkumulere ukontrollert, typisk ved ca. 4 mmol/L. Begge er viktige fordi de definerer treningssonene: trening under LT1 bygger aerobt grunnlag, trening mellom LT1 og LT2 gir moderat terskelbelastning, og trening over LT2 utvikler anaerob kapasitet. Ved å kjenne begge tersklene kan treneren planlegge trening i riktige intensitetssoner og sikre optimal utvikling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr2-3-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv hvordan en laktatprofiltest gjennomføres. Hva trenger man av utstyr, og hvordan tolkes resultatene?',
        solution: 'En laktatprofiltest gjennomføres på tredemølle eller sykkelergometer med trinnvis økende belastning. Hvert belastningstrinn varer 4-5 minutter for at kroppen skal nå steady state. Ved slutten av hvert trinn tas en liten blodprøve fra fingertupp eller øreflipp, og laktaten måles med en bærbar laktatmåler. Utstyr: tredemølle/ergometersykkel, laktatmåler, teststrips, lansetter, pulsmåler. Resultatene plottes i en graf med belastning (hastighet/watt) på x-aksen og laktat (mmol/L) på y-aksen. Aerob terskel identifiseres der kurven begynner å stige over hvilenivå, og anaerob terskel der kurven knekker bratt oppover. De tilhørende puls- og hastighetsverdiene brukes for å sette treningssoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr2-3-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar hvorfor anaerob terskel ofte er en bedre prediktor for utholdenhetsprestasjon enn VO2max. Bruk eksempler fra idrett for å illustrere svaret ditt.',
        solution: 'Anaerob terskel er ofte en bedre prediktor enn VO2max fordi den forteller hvor stor andel av VO2max utøveren faktisk kan utnytte over tid. To utøvere kan ha lik VO2max, men den som har høyere anaerob terskel kan holde høyere tempo i konkurranser. Eksempel: En maratonløper med VO2max på 75 mL/kg/min og terskel ved 85 % av VO2max kan holde høyere tempo enn en løper med VO2max på 80 mL/kg/min men terskel ved bare 70 %. Den første løperen arbeider ved 63,8 mL/kg/min (0,85 x 75), den andre ved 56 mL/kg/min (0,70 x 80). I langrenn ser vi at utøvere med noe lavere VO2max kan slå konkurrenter med høyere verdier hvis de har bedre terskel og arbeidsøkonomi. Anaerob terskel er dessuten mer trenbar enn VO2max, noe som betyr at riktig terskeltrening kan gi større prestasjonsgevinst over tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-3-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr2-3-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag et 4-ukers treningsprogram med fokus på å heve anaerob terskel for en syklist med terskel ved 250 watt. Begrunn intensitetsvalgene og progresjonen.',
        solution: 'Et 4-ukers program for å heve anaerob terskel fra 250 watt: Uke 1: 4 økter/uke. Mandag: 3 x 10 min terskelintervaller ved 240-250 W (95-100 % av terskel) med 2 min pause. Onsdag: 60 min langkjøring ved 170-190 W (70-75 % av terskel). Fredag: 4 x 8 min cruiseintervaller ved 255-265 W (102-106 % av terskel) med 90 sek pause. Søndag: 90 min langkjøring ved 160-180 W. Uke 2: Øk terskelintervallene til 3 x 12 min. Cruiseintervaller til 5 x 6 min. Uke 3 (overload): 4 x 12 min terskelintervaller med 90 sek pause. 6 x 5 min cruiseintervaller. Langkjøring økes til 75 og 105 min. Uke 4 (restitusjon): Reduser volum med 30-40 %. 2 x 10 min terskelintervaller. Rolige langkjøringer. Retest terskel. Begrunnelse: Terskelintervallene trener direkte ved terskelen og gir lang eksponering. Cruiseintervallene stimulerer tilpasninger rett over terskel. Langkjøringene bygger aerobt grunnlag. Progresjonen følger prinsippet om progressiv overbelastning med en letere uke for å absorbere treningsbelastningen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 3.3: Intervalltrening
// ============================================================================

export const CHAPTER_TRENING_2_3_3: TextbookChapter = {
  id: 'trening-2-3-3',
  courseId: 'trening-2',
  chapterNumber: '3.3',
  title: 'Intervalltrening',
  description: 'Lær om ulike former for intervalltrening, inkludert HIIT, SIT og Tabata, og hvordan arbeid/pause-forhold påvirker treningseffekten.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forklare prinsippene bak intervalltrening og hvorfor det er effektivt',
    'beskrive forskjellen mellom HIIT, SIT og Tabata-protokoller',
    'gjøre rede for hvordan arbeid/pause-forhold påvirker treningsrespons',
    'drøfte fordeler og ulemper ved ulike intervallformater',
  ],
  content: [
    {
      id: 'tr2-3-3-intro',
      type: 'text',
      content: `# Intervalltrening

Intervalltrening innebærer veksling mellom perioder med høy intensitet og perioder med lavere intensitet eller hvile. Denne treningsformen har revolusjonert utholdenhetstreningen fordi den gjør det mulig å akkumulere mer tid i høye intensitetssoner enn hva som er mulig med sammenhengende belastning.

Forskningen de siste tiårene har vist at intervalltrening gir overlegne forbedringer i VO2max, anaerob terskel og utholdenhetsprestasjon sammenlignet med moderat kontinuerlig trening alene. Det finnes mange varianter av intervalltrening, fra lange terskelintervaller til ultrakort sprint-intervalltrening, og valg av format avhenger av treningsformål, idrett og utøverens nivå.`,
    },
    {
      id: 'tr2-3-3-def-hiit',
      type: 'definition',
      title: 'HIIT (High-Intensity Interval Training)',
      content: 'HIIT er intervalltrening med arbeidsperioder utført ved høy intensitet (typisk 80-100 % av VO2max eller 85-100 % av maksimal hjertefrekvens), avbrutt av perioder med lav intensitet eller hvile. Arbeidsperiodene varer vanligvis fra 1 til 5 minutter, og total treningstid er kortere enn ved tradisjonell utholdenhetstrening. HIIT gir store forbedringer i aerob og anaerob kapasitet.',
    },
    {
      id: 'tr2-3-3-text-1',
      type: 'text',
      title: 'Ulike intervallformater',
      content: `Intervalltrening kan deles inn i kategorier basert på arbeidsperiodens lengde og intensitet:

**Lange intervaller (3-8 minutter)**
- Intensitet: 85-95 % av HFmax (nær VO2max)
- Eksempler: 4x4 min, 5x5 min, 3x8 min
- Primært treningsformål: VO2max og sentrale tilpasninger (økt slagvolum)
- Pause: 2-4 min aktiv hvile (50-70 % HFmax)
- Totalt arbeidstid: 15-25 minutter

**Middels intervaller (1-3 minutter)**
- Intensitet: 90-100 % av HFmax
- Eksempler: 8x2 min, 6x3 min, 10x1 min
- Treningsformål: VO2max og anaerob kapasitet
- Pause: 1-3 min aktiv eller passiv hvile
- Belaster bade aerobe og anaerobe systemer

**Korte intervaller (15-60 sekunder)**
- Intensitet: Maksimal eller nær maksimal
- Eksempler: 30/30 (30 sek arbeid/30 sek pause), 15/15, 40/20
- Treningsformål: VO2max, anaerob kapasitet, laktattoleranse
- Pause: Kort (like lang eller kortere enn arbeidsperioden)
- Gir høy gjennomsnittlig oksygenopptak uten ekstrem laktatopphopning

**Sprint-intervaller (5-30 sekunder)**
- Intensitet: All-out / maksimal
- Eksempler: Gjentatte spurter, SIT-protokoller
- Treningsformål: Anaerob kapasitet, effekt, sprintutholdenhet
- Pause: 2-4 min full eller nær full hvile`,
    },
    {
      id: 'tr2-3-3-def-sit',
      type: 'definition',
      title: 'SIT (Sprint Interval Training)',
      content: 'SIT er en form for intervalltrening som innebærer korte, all-out sprinter (typisk 20-30 sekunder) med lengre hvileperioder (3-4,5 minutter). Det mest kjente eksempelet er Wingate-protokollen med 4-6 repetisjoner av 30 sekunders maksimal innsats. Forskning viser at SIT kan gi lignende fysiologiske tilpasninger som tradisjonell utholdenhetstrening på en brøkdel av tiden, men belastningen er ekstremt hard.',
    },
    {
      id: 'tr2-3-3-text-2',
      type: 'text',
      title: 'Tabata-protokollen',
      content: `Tabata-protokollen ble utviklet av den japanske forskeren Izumi Tabata i 1996 og har blitt en av verdens mest kjente intervallformater.

**Originalprotokollen:**
- 20 sekunders arbeid ved 170 % av VO2max
- 10 sekunders hvile
- 8 repetisjoner (totalt 4 minutter)
- Gjennomført på sykkelergometer

**Resultatene fra originalstudien:**
- Gruppen som trente Tabata 4 dager per uke i 6 uker økte VO2max med 7 mL/kg/min
- Anaerob kapasitet økte med 28 %
- En sammenligningsgruppe som trente moderat kontinuerlig i 60 min 5 dager per uke økte bare VO2max, ikke anaerob kapasitet

**Misforståelser om Tabata:**
Det er viktig å skille mellom den vitenskapelige Tabata-protokollen og det som markedsføres som "Tabata" i treningssentre. Originalprotokollen krever ekstremt høy intensitet (170 % av VO2max) som de fleste mennesker ikke klarer å oppnå uten spesialisert utstyr og høy motivasjon. De populære "Tabata-klassene" på treningssentre bruker vanligvis mye lavere intensitet og gir ikke de samme treningseffektene.

**Viktige forbehold:**
- Krever svært høy treningsstatus for å gjennomføre korrekt
- Risiko for skade og overtrening ved hyppig bruk
- Bør ikke erstatte all annen trening
- Passer best som supplement i et variert treningsprogram`,
    },
    {
      id: 'tr2-3-3-text-3',
      type: 'text',
      title: 'Arbeid/pause-forhold',
      content: `Forholdet mellom arbeidstid og pausetid er en sentral variabel i intervalltrening som bestemmer treningsresponsen.

**Typiske arbeid/pause-forhold og deres effekt:**

| Forhold | Eksempel | Energisystem | Treningseffekt |
|---|---|---|---|
| 1:5-6 | 10 sek / 60 sek | Kreatinfosfat | Sprintkapasitet, maksimal kraft |
| 1:3-4 | 30 sek / 120 sek | Anaerob glykolyse | Anaerob kapasitet, sprintutholdenhet |
| 1:1-2 | 3 min / 3-6 min | Aerob + anaerob | VO2max, blandingsutholdenhet |
| 1:0,5-1 | 4 min / 2-4 min | Aerob | VO2max, aerob kapasitet |
| 2:1 | 30 sek / 15 sek | Aerob + anaerob | Akkumulert VO2-tid, laktattoleranse |

**Prinsipper for valg av arbeid/pause-forhold:**

1. **Kortere pause = høyere akkumulert intensitet:** Når pausen er kort relativt til arbeidet, rekker ikke kroppen å restituere fullstendig. Laktat akkumuleres, og den aerobe belastningen øker gjennom økten.

2. **Lengre pause = høyere intensitet per intervall:** Med lang hvile kan utøveren levere høyere kraft/hastighet i hver arbeidsperiode, noe som er viktig for utvikling av maksimal kapasitet.

3. **Formålet styrer forholdet:** For VO2max-utvikling er et 1:1 eller 1:0,5 forhold effektivt fordi det holder oksygenopptaket høyt. For sprintutvikling trengs lengre pauser (1:4-6) for å restituere kreatinfosfatlagrene.

4. **Aktiv vs. passiv pause:** Aktiv pause (lett jogging/sykling) holder oksygenopptaket høyere og fremmer laktatfjerning, men gir mindre full restitusjon enn passiv hvile.`,
    },
    {
      id: 'tr2-3-3-example-1',
      type: 'example',
      title: 'Eksempel: Sammenligning av intervallformater',
      problem: 'En trener ønsker å forbedre en løpers VO2max. Sammenlign treningseffekten av 4x4 min ved 90-95 % HFmax (3 min pause) med 30/30-intervaller (30 sek arbeid ved 95-100 % HFmax / 30 sek hvile) i 20 minutter. Hvilke fordeler og ulemper har de ulike formatene?',
      solution: `**4x4-formatet:**
- Arbeidsperiode: 4 x 4 min = 16 min total arbeidstid
- Pauseperiode: 3 x 3 min = 9 min
- Total tid: ca. 25 min (inkludert oppvarming/nedjogging)
- Fordeler: Lang tid nær VO2max, sterkt stimulus for økt slagvolum, godt dokumentert i forskning
- Ulemper: Høy laktatopphopning i slutten av hvert intervall, mentalt krevende, krever god grunnform

**30/30-formatet:**
- 20 repetisjoner av 30 sek arbeid / 30 sek pause
- Total arbeidstid: 10 min, total pausetid: 10 min
- Total tid: 20 min (pluss oppvarming/nedjogging)
- Fordeler: Oksygenopptaket forblir høyt i pausene pga. kort hvile, mindre laktatopphopning per intervall, lettere å gjennomføre mentalt
- Ulemper: Vanskeligere å styre nøyaktig intensitet, passer best for erfarne utøvere

**Konklusjon:**
Begge formatene er effektive for VO2max-utvikling. 4x4 er bedre dokumentert og lettere å standardisere, mens 30/30 kan gi høyere gjennomsnittlig VO2 med lavere subjektiv belastning. Variasjon mellom formatene er anbefalt.`,
    },
    {
      id: 'tr2-3-3-note-1',
      type: 'note',
      title: 'Sikkerhet ved høyintensiv intervalltrening',
      content: 'Høyintensiv intervalltrening er trygt for de fleste friske personer, men det er viktig med god oppvarming (minst 10-15 min med gradvis økende intensitet) og tilstrekkelig grunntrening før man begynner med HIIT. Personer med hjerte-kar-sykdommer, astma eller andre helseproblemer bør konsultere lege. Nybegynnere bør starte med lavere intensitet og færre repetisjoner, og gradvis bygge opp belastningen over flere uker.',
    },
    {
      id: 'tr2-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr2-3-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner den originale Tabata-protokollen?',
        options: [
          { id: 'a', text: '20 sekunders arbeid ved svært høy intensitet og 10 sekunders hvile, 8 repetisjoner', isCorrect: true },
          { id: 'b', text: '4 minutter arbeid ved moderat intensitet og 3 minutter hvile, 4 repetisjoner', isCorrect: false },
          { id: 'c', text: '60 sekunders arbeid ved lav intensitet og 60 sekunders hvile, 10 repetisjoner', isCorrect: false },
          { id: 'd', text: '10 minutter sammenhengende løping ved maksimal hastighet', isCorrect: false },
        ],
        solution: 'Den originale Tabata-protokollen består av 20 sekunders arbeid ved 170 % av VO2max og 10 sekunders hvile, gjentatt 8 ganger (totalt 4 minutter). Protokollen ble utviklet av Izumi Tabata i 1996 og krever ekstremt høy intensitet for å gi de dokumenterte treningseffektene.',
      },
    },
    {
      id: 'tr2-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr2-3-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket arbeid/pause-forhold er mest hensiktsmessig for utvikling av VO2max med lange intervaller?',
        options: [
          { id: 'a', text: '1:0,5 til 1:1 (f.eks. 4 min arbeid / 2-4 min pause)', isCorrect: true },
          { id: 'b', text: '1:6 (f.eks. 10 sek arbeid / 60 sek pause)', isCorrect: false },
          { id: 'c', text: '1:10 (f.eks. 30 sek arbeid / 5 min pause)', isCorrect: false },
          { id: 'd', text: 'Ingen pause mellom intervallene', isCorrect: false },
        ],
        solution: 'For VO2max-utvikling med lange intervaller er et arbeid/pause-forhold på 1:0,5 til 1:1 effektivt. Med relativt kort pause holder oksygenopptaket seg høyt mellom intervallene, slik at mer av den totale treningstiden tilbringes nær VO2max. Eksempel: 4x4 min arbeid med 3 min aktiv pause.',
      },
    },
    {
      id: 'tr2-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr2-3-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom HIIT og SIT. Hvilke fysiologiske tilpasninger gir de ulike metodene?',
        solution: 'HIIT (High-Intensity Interval Training) innebærer arbeidsperioder på 1-5 minutter ved 80-100 % av VO2max, med pauser som gir delvis restitusjon. HIIT belaster primært det aerobe systemet og gir forbedringer i VO2max, slagvolum, kapillærtetthet og mitokondrietetthet. SIT (Sprint Interval Training) innebærer korte all-out sprinter (20-30 sekunder) med lengre pauser (3-4,5 minutter). SIT belaster primært det anaerobe systemet, men gir også aerobe tilpasninger. SIT øker anaerob kapasitet, muskelens bufferkapasitet og glykolytiske enzymer, i tillegg til overraskende gode forbedringer i VO2max. Hovedforskjellen er at HIIT gir lengre eksponering for høyt oksygenopptak, mens SIT gir maksimal muskulær belastning i svært korte perioder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr2-3-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvordan arbeid/pause-forholdet påvirker hvilke energisystemer som belastes under intervalltrening. Gi eksempler for tre ulike energisystemer.',
        solution: 'Arbeid/pause-forholdet styrer restitusjongraden mellom intervallene og dermed hvilket energisystem som dominerer. 1) Kreatinfosfatsystemet: Arbeid/pause 1:5-6 (f.eks. 10 sek sprint / 60 sek hvile). Lang pause gir nesten full gjenoppbygging av kreatinfosfatlagrene, slik at hvert intervall kan utføres med maksimal intensitet. 2) Anaerob glykolyse: Arbeid/pause 1:3-4 (f.eks. 30 sek / 120 sek). Moderat pause gir noe restitusjon, men laktat akkumuleres gradvis. Trener anaerob kapasitet og laktattoleranse. 3) Aerob system: Arbeid/pause 1:0,5-1 (f.eks. 4 min / 2-4 min). Kort pause holder oksygenopptaket høyt mellom intervallene. Hjertet jobber nær maksimal kapasitet og utvikler økt slagvolum og VO2max.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr2-3-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En idrettsutøver trener 5 ganger i uken og ønsker å inkludere intervalltrening for å forbedre både VO2max og anaerob kapasitet. Design en ukeplan med minst to ulike intervallformater og begrunn valgene.',
        solution: 'Ukeplan: Mandag: 4x4 min HIIT ved 90-95 % HFmax med 3 min aktiv pause. Formål: VO2max-utvikling gjennom lang tid nær maksimalt oksygenopptak. Tirsdag: 50 min rolig langkjøring ved 65-75 % HFmax. Formål: Aerobt grunnlag og restitusjon. Onsdag: SIT-økt med 6x30 sek all-out sprint med 4 min full pause. Formål: Anaerob kapasitet, sprintevne og muskulære tilpasninger. Torsdag: 45 min rolig langkjøring eller alternativ aktivitet. Formål: Aktiv restitusjon. Fredag: 30/30-intervaller (20 rep av 30 sek arbeid / 30 sek pause) ved 95-100 % HFmax. Formål: Høy akkumulert tid nær VO2max med moderat laktatbelastning. Helg: Hvile. Begrunnelse: De tre intervallformatene trener ulike aspekter av utholdenhet. 4x4 er primært aerob VO2max-trening, SIT utvikler anaerob kapasitet og kraft, og 30/30 gir en mellomting med høy aerob belastning. Rolige dager mellom intensive økter sikrer restitusjon og forebygger overtrening. Totalbelastningen tilpasses utøverens nivå.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-3-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr2-3-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvorfor Tabata-trening i treningssentre ofte ikke gir de samme resultatene som den originale Tabata-studien viste. Hva er de viktigste forskjellene, og hvilke konsekvenser har dette for treningseffekten?',
        solution: 'Den originale Tabata-protokollen krever intensitet på 170 % av VO2max, noe som tilsvarer all-out innsats langt over maksimal aerob kapasitet. I treningssentre gjennomføres Tabata-inspirerte klasser vanligvis med bodyweight-øvelser (burpees, jump squats osv.) ved langt lavere intensitet. Viktige forskjeller: 1) Intensitet: Originalstudien brukte sykkelergometer der utøverne kunne opprettholde ekstremt høy mekanisk belastning. Bodyweight-øvelser begrenses av teknikk og koordinasjon og når sjelden tilstrekkelig intensitet. 2) Spesifisitet: Originalen brukte ett bevegelsesmønster (sykling) mens klasser veksler mellom ulike øvelser, noe som gir lavere gjennomsnittlig belastning pga. overgangstid. 3) Motivasjon og kontroll: Laboratoriesettingen ga sterk ytre motivasjon og nøyaktig intensitetskontroll. 4) Deltakerpopulasjon: Originalstudien brukte veltrente idrettsutøvere som tålte ekstrem belastning. Konsekvenser: Treningssenterversjonene gir god generell trening og kalorsforbrenning, men oppnår ikke de samme forbedringene i VO2max og anaerob kapasitet som den vitenskapelige protokollen dokumenterte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 3.4: Langkjøring og grunntrening
// ============================================================================

export const CHAPTER_TRENING_2_3_4: TextbookChapter = {
  id: 'trening-2-3-4',
  courseId: 'trening-2',
  chapterNumber: '3.4',
  title: 'Langkjøring og grunntrening',
  description: 'Forstå betydningen av grunntrening, treningsintensitetssoner og polarisert treningsmodell for utholdenhetsprestasjon.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forklare hva grunntrening er og hvorfor det er fundamentet i utholdenhetstrening',
    'beskrive treningsintensitetssonene og deres fysiologiske grunnlag',
    'gjøre rede for den polariserte treningsmodellen',
    'drøfte forholdet mellom treningsvolum og treningsintensitet',
  ],
  content: [
    {
      id: 'tr2-3-4-intro',
      type: 'text',
      content: `# Langkjøring og grunntrening

Grunntrening er ryggraden i all utholdenhetstrening. Selv om intervalltrening og høyintensiv trening får mest oppmerksomhet, utgjør langkjøring og rolig trening hoveddelen av treningsvolumet hos verdens beste utholdenhetsutøvere. Studier av eliteutøvere i langrenn, løping, sykling og roing viser at 75-85 % av all trening gjennomføres ved lav intensitet.

Denne treningsfordelingen er ikke tilfeldig. Grunntrening bygger det fysiologiske fundamentet som gjør det mulig å tåle og nyttiggjøre seg av mer intensiv trening. Uten et solid aerobt grunnlag vil høyintensiv trening gi begrenset utbytte og økt risiko for skader og overtrening.`,
    },
    {
      id: 'tr2-3-4-def-grunntrening',
      type: 'definition',
      title: 'Grunntrening',
      content: 'Grunntrening er utholdenhetstrening utført ved lav til moderat intensitet, typisk under aerob terskel (sone 1 og lav sone 2). Formålet er å bygge aerobt fundament gjennom økt kapillærtetthet, mitokondrietetthet, fettforbrenningsevne og hjertets slagvolum. Grunntrening utgjør den største andelen av treningsvolumet i et periodisert utholdenhetsopplegg.',
    },
    {
      id: 'tr2-3-4-text-1',
      type: 'text',
      title: 'Treningsintensitetssoner',
      content: `Treningsintensitetssoner er et system for å klassifisere treningsbelastning basert på fysiologiske markører. Det finnes ulike soneinndelinger, men den mest brukte i Norge er femsoneskalaen:

| Sone | Navn | Intensitet (% HFmax) | Laktat (mmol/L) | Opplevelse |
|---|---|---|---|---|
| Sone 1 | Rolig | 60-72 % | Under 1,5 | Lett, kan snakke uanstrengt |
| Sone 2 | Moderat | 72-82 % | 1,5-2,5 | Behagelig, kan snakke i setninger |
| Sone 3 | Middels hard | 82-87 % | 2,5-4,0 | Krevende, kan snakke i korte fraser |
| Sone 4 | Hard | 87-92 % | 4,0-6,0 | Svært krevende, vanskelig å snakke |
| Sone 5 | Svært hard | 92-100 % | Over 6,0 | Maksimalt, kan ikke snakke |

**Fysiologiske grenseoverganger:**
- **Sone 1-2 grensen** tilsvarer omtrent aerob terskel (LT1)
- **Sone 3-4 grensen** tilsvarer omtrent anaerob terskel (LT2)
- **Sone 4-5 grensen** tilsvarer omtrent VO2max-intensitet

**Merk:** Soneinndelingen er individuell og bør kalibreres med terskeltest for nøyaktig fastsetting av grensene. Pulssoner basert på aldersjusterte formler (220 minus alder) er svært unøyaktige for mange individer.`,
    },
    {
      id: 'tr2-3-4-text-2',
      type: 'text',
      title: 'Fysiologiske tilpasninger fra grunntrening',
      content: `Regelmessig grunntrening over tid gir en rekke viktige fysiologiske tilpasninger:

**Sentrale tilpasninger:**
- Økt hjertevolum og slagvolum (hjertets pumpekapasitet øker)
- Økt blodvolum og plasmamengde
- Lavere hvilepuls som tegn på mer effektivt hjerte
- Økt kapasitet for oksygentransport i blodet

**Perifere tilpasninger:**
- Økt kapillærtetthet rundt muskelfibrene (bedre oksygentilførsel)
- Flere og større mitokondrier (økt kapasitet for aerob energiproduksjon)
- Økt aktivitet av oksidative enzymer
- Bedre fettforbrenningsevne (sparer glykogenlagre til høy intensitet)
- Økt intramyocellulært fettlager (energireserve i muskelcellene)
- Forbedret kapillærrekruttering

**Muskulære tilpasninger:**
- Økt andel type IIa-fibre (overgangsfibre som blir mer utholdende)
- Bedre blodgjennomstrømning i arbeidende muskler
- Forbedret evne til å bruke laktat som energikilde

**Andre tilpasninger:**
- Styrket immunforsvar ved moderat treningsvolum
- Bedre mentalt overskudd og søvnkvalitet
- Økt treningstålighet som muliggjør mer intensiv trening
- Forbedret restitusjon mellom harde treningsøkter`,
    },
    {
      id: 'tr2-3-4-def-polarisert',
      type: 'definition',
      title: 'Polarisert trening',
      content: 'Polarisert trening er en treningsmodell der hoveddelen av treningen gjennomføres ved lav intensitet (under aerob terskel, sone 1-2), mens en mindre del gjennomføres ved høy intensitet (over anaerob terskel, sone 4-5). Lite trening gjennomføres i mellomsonen (sone 3). Typisk fordeling er 80 % lav intensitet, 0-5 % moderat intensitet og 15-20 % høy intensitet. Modellen er basert på observasjoner av hvordan verdens beste utholdenhetsutøvere trener.',
    },
    {
      id: 'tr2-3-4-text-3',
      type: 'text',
      title: 'Polarisert vs. terskelbasert trening',
      content: `Det finnes to hovedmodeller for intensitetsfordeling i utholdenhetstrening:

**Polarisert treningsmodell:**
- Ca. 80 % av treningen i sone 1-2 (lav intensitet)
- Ca. 0-5 % i sone 3 (moderat intensitet)
- Ca. 15-20 % i sone 4-5 (høy intensitet)
- "Enten rolig eller hardt - ingenting midt imellom"
- Basert på treningspraksis hos eliteutøvere

**Terskelbasert treningsmodell:**
- Mer trening rundt anaerob terskel (sone 3-4)
- Typisk brukt av mosjonister og halvavanserte utøvere
- Gir raskere framgang på kort sikt for nybegynnere
- Kan føre til stagnasjon og overtrening over tid

**Hva sier forskningen?**

Flere studier har sammenlignet polarisert og terskelbasert trening:
- Studier av Stöggl og Sperlich (2014) viste at polarisert trening ga størst forbedring i VO2max, tid til utmattelse og prestasjonstester hos veltrente utøvere
- Mosjonister responderer godt på begge metoder, men polarisert trening gir bedre langsiktige resultater
- Terskeltrening gir raskere kortsiktig framgang, men økt risiko for stagnasjon

**Praktisk gjennomføring av polarisert trening:**
- 4-5 rolige langkjøringer per uke (sone 1-2)
- 2-3 høyintensive økter per uke (intervaller i sone 4-5)
- Unngå "gråsonetrening" der man trener for hardt på rolige dager og for lett på harde dager
- Den vanligste feilen er å gjøre rolige dager for harde

**Fordeler med grunntrening i den polariserte modellen:**
- Bygger aerobt fundament som tåler høy total treningsbelastning
- Gir restitusjon mellom harde økter uten å være passiv
- Stimulerer fettforbrenning og mitokondrieutvikling
- Forebygger overtrening og utbrenthet`,
    },
    {
      id: 'tr2-3-4-example-1',
      type: 'example',
      title: 'Eksempel: Intensitetsfordeling for en langrennsløper',
      problem: 'En langrennsløper trener 12 timer per uke. Hvordan kan treningsukene fordeles etter den polariserte modellen?',
      solution: `**Fordeling etter polarisert modell (80/5/15):**

- Lav intensitet (80 %): 12 x 0,80 = 9,6 timer = ca. 9 t 35 min
- Moderat intensitet (5 %): 12 x 0,05 = 0,6 timer = ca. 35 min
- Høy intensitet (15 %): 12 x 0,15 = 1,8 timer = ca. 1 t 50 min

**Eksempel på ukeplan:**

- Mandag: 90 min rolig jogging/sykling (sone 1-2)
- Tirsdag: 75 min med intervaller: 15 min oppvarming + 5x4 min i sone 4-5 + nedjogging (ca. 20 min i høy sone)
- Onsdag: 90 min rolig skitrening (sone 1-2)
- Torsdag: 80 min med intervaller: 15 min oppvarming + 8x3 min i sone 4-5 + nedjogging (ca. 24 min i høy sone)
- Fredag: 60 min lett restitusjon (sone 1)
- Lørdag: 120 min langtur i rolig tempo (sone 1-2)
- Søndag: 90 min rolig alternativ trening (sone 1-2)

**Totalt:** ca. 12 timer, hvorav ca. 9,5 timer i sone 1-2 og ca. 1 t 45 min i sone 4-5.`,
    },
    {
      id: 'tr2-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr2-3-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor stor andel av treningsvolumet gjennomfører typisk eliteutøvere i utholdenhetsidretter ved lav intensitet?',
        options: [
          { id: 'a', text: 'Ca. 75-85 %', isCorrect: true },
          { id: 'b', text: 'Ca. 30-40 %', isCorrect: false },
          { id: 'c', text: 'Ca. 50-60 %', isCorrect: false },
          { id: 'd', text: 'Ca. 10-20 %', isCorrect: false },
        ],
        solution: 'Studier av eliteutøvere i langrenn, løping, sykling og roing viser at 75-85 % av all trening gjennomføres ved lav intensitet (under aerob terskel). Dette er grunnlaget for den polariserte treningsmodellen som kjennetegner elitetrening i utholdenhetsidretter.',
      },
    },
    {
      id: 'tr2-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr2-3-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva kjennetegner den polariserte treningsmodellen?',
        options: [
          { id: 'a', text: 'Mye trening ved lav intensitet, lite i mellomsonen, noe ved høy intensitet', isCorrect: true },
          { id: 'b', text: 'All trening ved moderat intensitet rundt anaerob terskel', isCorrect: false },
          { id: 'c', text: 'Like mye trening i alle intensitetssoner', isCorrect: false },
          { id: 'd', text: 'Mest trening ved høy intensitet og lite rolig trening', isCorrect: false },
        ],
        solution: 'Den polariserte treningsmodellen kjennetegnes av at ca. 80 % av treningen gjøres ved lav intensitet (sone 1-2), kun 0-5 % ved moderat intensitet (sone 3), og 15-20 % ved høy intensitet (sone 4-5). Modellen unngår mellomsonen ("gråsonetrening") og er basert på observasjoner av eliteutøveres treningspraksis.',
      },
    },
    {
      id: 'tr2-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr2-3-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv de viktigste fysiologiske tilpasningene som grunntrening gir. Forklar hvorfor disse tilpasningene er viktige for utholdenhetsprestasjon.',
        solution: 'Grunntrening gir en rekke fysiologiske tilpasninger: 1) Sentrale tilpasninger: Økt slagvolum og hjertevolum som betyr at hjertet pumper mer blod per slag, og dermed leverer mer oksygen til musklene. Lavere hvilepuls er et tegn på dette. 2) Økt kapillærtetthet rundt muskelfibrene gir kortere diffusjonsavstand for oksygen fra blod til muskelceller, noe som forbedrer oksygenutnyttelsen. 3) Flere og større mitokondrier øker muskelcellenes kapasitet for aerob energiproduksjon, slik at mer energi kan frigjøres med oksygen. 4) Økt fettforbrenningsevne betyr at kroppen blir flinkere til å bruke fett som energikilde ved moderat intensitet, noe som sparer de begrensede glykogenlagrene til perioder med høy intensitet. 5) Økt treningstålighet gjør det mulig å tåle høyere totalt treningsvolum og mer intensiv trening uten å bli overtrent.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr2-3-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva treningsintensitetssoner er, og beskriv de fem sonene med tilhørende intensitet, laktatnivå og subjektiv opplevelse.',
        solution: 'Treningsintensitetssoner er et system for å klassifisere treningsbelastning basert på fysiologiske markører som puls, laktat og opplevd anstrengelse. De fem sonene: Sone 1 (Rolig): 60-72 % av HFmax, laktat under 1,5 mmol/L, lett aktivitet der man kan snakke uanstrengt. Sone 2 (Moderat): 72-82 % av HFmax, laktat 1,5-2,5 mmol/L, behagelig tempo der man kan snakke i setninger. Sone 3 (Middels hard): 82-87 % av HFmax, laktat 2,5-4,0 mmol/L, krevende der man bare kan snakke i korte fraser. Sone 4 (Hard): 87-92 % av HFmax, laktat 4,0-6,0 mmol/L, svært krevende og vanskelig å snakke. Sone 5 (Svært hard): 92-100 % av HFmax, laktat over 6,0 mmol/L, maksimal innsats der man ikke kan snakke. Grensen mellom sone 2 og 3 tilsvarer omtrent aerob terskel, og grensen mellom sone 3 og 4 tilsvarer omtrent anaerob terskel.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr2-3-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign den polariserte treningsmodellen med terskelbasert trening. Hvilke fordeler og ulemper har de to tilnærmingene, og hvem passer de best for?',
        solution: 'Polarisert trening: Ca. 80 % lav intensitet, 15-20 % høy intensitet, lite mellomsone. Fordeler: Godt dokumentert for eliteutøvere, gir gode langsiktige resultater, lavere risiko for overtrening, bygger solid aerobt grunnlag, og de harde øktene kan utføres med høy kvalitet fordi kroppen er uthvilt. Ulemper: Krever høyt totalt treningsvolum for å gi effekt, kan virke kjedelig med mye rolig trening, krever disiplin for å holde rolige dager virkelig rolige. Terskelbasert trening: Mer trening rundt anaerob terskel (sone 3-4). Fordeler: Gir raskere framgang på kort sikt, passer godt for nybegynnere og mosjonister med begrenset tid, mer tidseffektiv per økt. Ulemper: Høyere risiko for overtrening og stagnasjon over tid, "gråsonetrening" gir verken optimal aerob eller anaerob stimuli, kan føre til kronisk trethet. Konklusjon: Polarisert trening passer best for veltrente utøvere med høyt treningsvolum, mens terskelbasert trening kan fungere godt for mosjonister og nybegynnere som trener 3-5 timer per uke. Over tid bør de fleste bevege seg mot en mer polarisert tilnærming.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-3-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr2-3-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En mosjonist trener 5 timer per uke og ønsker å forbedre sin 10 km løpetid. Vedkommende trener for tiden alle økter i "behagelig hardt" tempo (sone 3). Lag et forslag til ny treningsplan basert på den polariserte modellen, og begrunn hvorfor dette sannsynligvis vil gi bedre resultater.',
        solution: 'Nåværende problem: Utøveren trener all tid i sone 3 (gråsonetrening). Dette gir verken optimal aerob stimuli (for hardt) eller optimal anaerob stimuli (for lett). Over tid fører dette til stagnasjon og kronisk trethet. Ny plan basert på polarisert modell (5 timer/uke): Mandag: 60 min rolig løping i sone 1-2 (kan føre samtale). Tirsdag: Hvile. Onsdag: 50 min med intervaller: 15 min oppvarming sone 1, 5x3 min i sone 4 med 2 min joggepause, 10 min nedjogging. Torsdag: 45 min rolig løping sone 1-2. Fredag: Hvile. Lørdag: 50 min med intervaller: 15 min oppvarming, 4x4 min i sone 4-5 med 3 min joggepause, 10 min nedjogging. Søndag: 75 min langkjøring sone 1-2. Total: ca. 5 timer, 80 % sone 1-2, 20 % sone 4-5. Begrunnelse for bedre resultater: 1) Rolige dager er virkelig rolige, noe som gir bedre restitusjon og mulighet for høyere kvalitet på harde dager. 2) De harde øktene gir sterkere treningsstimuli enn sone 3-trening. 3) Lavintensiv trening bygger aerobt grunnlag med kapillærer og mitokondrier. 4) Større variasjon i belastning gir mer allsidig fysiologisk tilpasning. 5) Lavere total belastning på muskler og ledd pga. mer rolig trening.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 3.5: Utholdenhetstrening for ulike idretter
// ============================================================================

export const CHAPTER_TRENING_2_3_5: TextbookChapter = {
  id: 'trening-2-3-5',
  courseId: 'trening-2',
  chapterNumber: '3.5',
  title: 'Utholdenhetstrening for ulike idretter',
  description: 'Forstå hvordan utholdenhetstrening tilpasses ulike idretter som løping, sykling, langrenn og svømming.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forklare prinsippet om treningsspesifisitet og overførbarhet mellom idretter',
    'beskrive kravanalyse for ulike utholdenhetsidretter',
    'gjøre rede for idrettsspesifikke treningsmetoder for løping, sykling, langrenn og svømming',
    'drøfte hvordan treningsplanlegging tilpasses ulike idretters krav',
  ],
  content: [
    {
      id: 'tr2-3-5-intro',
      type: 'text',
      content: `# Utholdenhetstrening for ulike idretter

Utholdenhetstrening er ikke en universell tilnærming som fungerer likt for alle idretter. Selv om de grunnleggende fysiologiske prinsippene er de samme, stiller ulike idretter svært forskjellige krav til kroppen. En langdistanseløper, en syklist, en langrennsløper og en svømmer trener alle utholdenhet, men treningens innhold, intensitet og bevegelsesmønstre er vidt forskjellige.

Prinsippet om treningsspesifisitet sier at kroppen tilpasser seg den spesifikke belastningen den utsettes for. For å prestere godt i en idrett må treningen gjenspeile idrettens bevegelsesmønster, energikrav og muskler. I dette kapittelet ser vi på hvordan utholdenhetstrening tilpasses fire store utholdenhetsidretter.`,
    },
    {
      id: 'tr2-3-5-def-spesifisitet',
      type: 'definition',
      title: 'Treningsspesifisitet',
      content: 'Treningsspesifisitet er prinsippet om at kroppen tilpasser seg den spesifikke typen belastning den utsettes for. Tilpasningene er størst i de muskelgruppene, bevegelsesmønstrene og energisystemene som belastes under trening. For optimal prestasjonsforbedring bør derfor hoveddelen av treningen gjenspeile konkurranseaktivitetens krav. Overføringseffekten mellom ulike aktiviteter (cross-training) er begrenset for spesifikke prestasjoner, selv om generell aerob kapasitet har noe overførbarhet.',
    },
    {
      id: 'tr2-3-5-text-1',
      type: 'text',
      title: 'Kravanalyse som utgangspunkt',
      content: `Før man planlegger utholdenhetstrening for en idrett, må man gjennomføre en kravanalyse. En kravanalyse kartlegger:

**Fysiologiske krav:**
- Hvilke energisystemer dominerer? (aerob vs. anaerob andel)
- Hvor lenge varer konkurransen?
- Hvilken intensitet kreves?
- Hvor mye laktat produseres?

**Mekaniske krav:**
- Hvilke muskelgrupper brukes?
- Hva slags muskelarbeid kreves? (konsentrisk, eksentrisk, isometrisk)
- Hvor store leddutslag trengs?
- Hva er belastningen på ledd og bindevev?

**Taktiske krav:**
- Er tempoet jevnt eller varierende?
- Kreves det spurter?
- Hvordan er energifordelingen gjennom konkurransen?

| Idrett | Konkurransetid | Aerob andel | Dominerende muskler |
|---|---|---|---|
| Maraton (løping) | 2–5 timer | Over 99 % | Bein (quad, hamstring, legger) |
| Sykkelritt (landevei) | 3–6 timer | Over 98 % | Bein (quad, hamstring) |
| Langrenn (50 km) | 2–3 timer | Over 95 % | Helkropp (bein, armer, overkropp) |
| Svømming (1500 m) | 14–20 min | Ca. 85-90 % | Overkropp og bein |`,
    },
    {
      id: 'tr2-3-5-text-2',
      type: 'text',
      title: 'Utholdenhetstrening for løping',
      content: `Løping er den mest tilgjengelige utholdenhetsidretten og stiller høye krav til aerob kapasitet, løpsøkonomi og skadeforebygging.

**Spesielle hensyn for løping:**
- Høy mekanisk belastning pga. gjentatte landinger (2-3 ganger kroppsvekten per steg)
- Risiko for belastningsskader i knær, legger og føtter
- Løpsøkonomi (oksygenforbruk ved gitt hastighet) er like viktig som VO2max for prestasjon
- Varmeproduksjon og væskeregulering er kritiske faktorer

**Treningsoppbygging for løpere:**

*Grunntrening (70-80 % av totalt volum):*
- Langkjøringer: 60-120 min i sone 1-2
- Rolige løpeturer: 30-50 min i sone 1
- Formål: Aerob grunnlag, løpsøkonomi, styrking av sener og ledd

*Terskeltrening (10-15 %):*
- Tempoløp: 20-40 min i sone 3
- Terskelintervaller: 3-5 x 8-12 min med kort pause
- Formål: Heve anaerob terskel, forbedre løpsøkonomi ved høyere hastigheter

*Intervalltrening (10-15 %):*
- Lange intervaller: 4-6 x 3-5 min i sone 4-5
- Korte intervaller: 10-15 x 1 min i sone 5
- Formål: VO2max, fartsfornemmelse, mental hardhet

*Tilleggstrening:*
- Styrketrening: 2 ganger per uke med fokus på beinstyrke og core
- Steg- og koordinasjonsøvelser
- Bevegelighetstrening`,
    },
    {
      id: 'tr2-3-5-text-3',
      type: 'text',
      title: 'Utholdenhetstrening for sykling',
      content: `Sykling er en ikke-vektbærende idrett med lav mekanisk belastning, noe som tillater høyere treningsvolum enn løping.

**Spesielle hensyn for sykling:**
- Lav skaderisiko pga. fravær av støtbelastning
- Mulighet for høyt treningsvolum (15-30+ timer/uke for elitesyklister)
- Wattmåler gir nøyaktig intensitetsstyring
- Aerodynamikk og drafting påvirker energiforbruket betydelig
- Ernæring under trening og konkurranse er kritisk ved lange ritt

**Treningsoppbygging for syklister:**

*Grunntrening (75-85 % av totalt volum):*
- Lange turer: 2-5 timer i sone 1-2
- Rolige restitusjonsdager: 1-2 timer i sone 1
- Formål: Aerobt grunnlag, fettforbrenning, teknisk utvikling

*Terskeltrening (5-10 %):*
- Sweet spot-trening: 20-60 min ved 88-93 % av terskelwatt
- FTP-intervaller: 2-3 x 15-20 min ved terskelen
- Formål: Heve funksjonell terskeleffekt (FTP)

*Intervalltrening (10-15 %):*
- VO2max-intervaller: 5-8 x 3-5 min ved 105-120 % av FTP
- Anaerobe intervaller: 8-12 x 30-60 sek ved over 150 % av FTP
- Formål: VO2max, anaerob kapasitet, klattreevne

*Tilleggstrening:*
- Styrketrening i grunnlagsfasen: 2-3 ganger per uke
- Core-stabilitet for effektiv kraftoverføring
- Tøying og bevegelighetstrening for hoftefleksorer`,
    },
    {
      id: 'tr2-3-5-text-4',
      type: 'text',
      title: 'Utholdenhetstrening for langrenn',
      content: `Langrenn er en av de mest fysiologisk krevende idrettene fordi den bruker bade overkropp og underkropp, noe som gir ekstremt høye VO2max-verdier hos eliteutøvere.

**Spesielle hensyn for langrenn:**
- Helkroppsaktivitet som krever utholdenhet i bade bein og armer
- Teknisk kompleks idrett med to teknikker (klassisk og skøyting)
- Sesongavhengig: Snøsesong varierer, krever alternativ trening store deler av året
- Terrengvariasjoner stiller krav til bade aerob og anaerob kapasitet
- Høydetrening brukes aktivt av mange eliteutøvere

**Treningsoppbygging for langrennsløpere:**

*Grunntrening (80-85 % av totalt volum):*
- Langtur på ski/rulleski: 2-4 timer i sone 1-2
- Rolig løping og sykling som alternativ trening
- Langturer i kupert terreng for å trene bakkekapasitet
- Formål: Aerobt grunnlag, teknikk, helkroppsutholdenhet

*Terskeltrening (5-10 %):*
- Tempoøkter på rulleski eller ski: 30-50 min i sone 3
- Bakkedrag: Gjentatte bakker med noe over terskelfart
- Formål: Heve anaerob terskel i idrettsspesifikt bevegelsesmønster

*Intervalltrening (10-15 %):*
- VO2max-intervaller: 4-6 x 4-6 min i motbakke
- Korte intervaller: 20-30 x 15-30 sek i bratt bakke
- Formål: VO2max, anaerob kapasitet, bakkefart

*Tilleggstrening:*
- Styrketrening med fokus på overkropp, core og beinstyrke
- Imitasjonsøvelser (staking med staver, diagonalgang i bakke)
- Balansetrening og koordinasjonsøvelser`,
    },
    {
      id: 'tr2-3-5-text-5',
      type: 'text',
      title: 'Utholdenhetstrening for svømming',
      content: `Svømming skiller seg fra de fleste utholdenhetsidretter ved at den foregår i vann, noe som gir unike fysiologiske og mekaniske utfordringer.

**Spesielle hensyn for svømming:**
- Vannets motstand øker eksponentielt med hastigheten
- Teknikk og hydrodynamikk er ekstremt viktig for prestasjon
- Horisontal kroppsstilling gir annen hemodynamisk respons enn stående aktiviteter
- Begrensede muligheter for å trene VO2max-spesifikt pga. pustefrekvens
- Kortere konkurransetider betyr høyere anaerob andel enn i mange andre utholdenhetsidretter

**Treningsoppbygging for svømmere:**

*Grunntrening (60-70 % av totalt volum):*
- Langdistansesvømming: 3000-6000 m i rolig tempo
- Teknikkøvelser og drills
- Formål: Aerobt grunnlag, vannfølelse, teknikk

*Terskel- og tempotrening (15-20 %):*
- Terskelserier: 10-20 x 100 m ved kritisk hastighet (CSS)
- Temposvømming: 4-8 x 200-400 m med kort pause
- Formål: Heve anaerob terskel, forbedre tempo-utholdenhet

*Intervall- og sprinttrening (15-20 %):*
- VO2max-serier: 8-12 x 50-100 m med kort pause
- Sprinttrening: 4-8 x 25-50 m med lang pause
- Formål: Anaerob kapasitet, spurthastighet, racepace

*Tilleggstrening:*
- Styrketrening på land: 3-4 ganger per uke (skulder, rygg, core)
- Skadeforebygging for skulder (rotatormansjetten)
- Uttøyning og bevegelighetstrening (spesielt skuldre og ankler)

**Viktig:** Svømming har tradisjonelt svært høyt treningsvolum (opptil 60-80 km per uke for elitesvømmere). Nyere forskning tyder på at kvalitet ofte er viktigere enn kvantitet, og at noe av bassengtreningen med fordel kan erstattes med styrketrening og teknisk arbeid.`,
    },
    {
      id: 'tr2-3-5-def-overforbarhet',
      type: 'definition',
      title: 'Overførbarhet (transfer)',
      content: 'Overførbarhet beskriver i hvilken grad treningseffekten fra en aktivitet kan overføres til prestasjon i en annen aktivitet. Generell aerob kapasitet har noe overførbarhet mellom idretter (en god løper vil ha grunnlag for sykling), men spesifikk prestasjon krever idrettsspesifikk trening. Overførbarheten er størst mellom idretter med lignende bevegelsesmønstre og muskelbruk, og lavest mellom svært ulike aktiviteter.',
    },
    {
      id: 'tr2-3-5-example-1',
      type: 'example',
      title: 'Eksempel: Kravanalyse og treningsplanlegging',
      problem: 'Gjennomfør en enkel kravanalyse for en 10 km langdistanseløper og forklar hvordan treningen bør tilpasses basert på analysen.',
      solution: `**Kravanalyse for 10 km løp:**

- Konkurransetid: 30-50 min (avhengig av nivå)
- Aerob andel: Over 95 %
- Dominerende energisystem: Aerob forbrenning med bidrag fra anaerob glykolyse i avslutningen
- Dominerende muskelgrupper: Quadriceps, hamstrings, legger, hoftefleksorer, core
- Mekanisk belastning: Høy (2-3 x kroppsvekt per steg, ca. 6000-8000 steg i løpet)
- Laktatnivå under konkurranse: 3-6 mmol/L (nær anaerob terskel)
- Taktisk: Jevnt eller negativt (raskere andre halvdel) tempo er optimalt

**Treningsimplikasjoner:**

1. Hoveddelen av treningen bør være rolig løping for å bygge aerobt grunnlag og styrke bevegelsesapparatet
2. Terskeltrening er svært viktig fordi 10 km løpes nær anaerob terskel
3. VO2max-intervaller gir reservekapasitet over terskelen
4. Styrketrening forebygger belastningsskader og forbedrer løpsøkonomi
5. Sprinttrening er mindre viktig, men noe fartstrening gir bedre avslutning
6. Typisk ukesplan: 4-5 løpeøkter (2-3 rolige + 1 terskel + 1 intervall) + 1-2 styrkeøkter`,
    },
    {
      id: 'tr2-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr2-3-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva innebærer prinsippet om treningsspesifisitet?',
        options: [
          { id: 'a', text: 'Kroppen tilpasser seg den spesifikke typen belastning den utsettes for', isCorrect: true },
          { id: 'b', text: 'All trening gir lik effekt uansett aktivitetsform', isCorrect: false },
          { id: 'c', text: 'Man bør trene alle idretter like mye for best utvikling', isCorrect: false },
          { id: 'd', text: 'Bare styrketrening gir spesifikke tilpasninger', isCorrect: false },
        ],
        solution: 'Treningsspesifisitet betyr at kroppen tilpasser seg den spesifikke typen belastning den utsettes for. Tilpasningene er størst i de muskelgruppene, bevegelsesmønstrene og energisystemene som trenes. For å prestere godt i en idrett må hoveddelen av treningen gjenspeile idrettens krav.',
      },
    },
    {
      id: 'tr2-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr2-3-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken idrett stiller størst krav til helkroppsutholdenhet og gir typisk de høyeste VO2max-verdiene?',
        options: [
          { id: 'a', text: 'Langrenn, fordi det bruker bade overkropp og underkropp aktivt', isCorrect: true },
          { id: 'b', text: 'Svømming, fordi vannmotstanden er høy', isCorrect: false },
          { id: 'c', text: 'Sykling, fordi man kan trene flest timer per uke', isCorrect: false },
          { id: 'd', text: 'Løping, fordi det er den mest naturlige bevegelsesformen', isCorrect: false },
        ],
        solution: 'Langrenn gir typisk de høyeste VO2max-verdiene fordi idretten aktiverer bade overkropp og underkropp samtidig. Jo mer muskelmasse som er involvert, desto høyere oksygenopptak kreves og kan utvikles. Elitelangremsløpere har målt VO2max-verdier på over 90 mL/kg/min, som er blant de høyeste i noen idrett.',
      },
    },
    {
      id: 'tr2-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr2-3-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva en kravanalyse er, og beskriv hvilke elementer den bør inneholde. Hvorfor er kravanalyse viktig for treningsplanlegging?',
        solution: 'En kravanalyse er en systematisk kartlegging av hva en idrett krever av utøveren. Den bør inneholde: 1) Fysiologiske krav: Hvilke energisystemer dominerer, konkurransetid, intensitetsnivå og laktatproduksjon. 2) Mekaniske krav: Hvilke muskelgrupper brukes, type muskelarbeid, leddutslag og belastning på ledd og bindevev. 3) Taktiske krav: Om tempoet er jevnt eller varierende, om det kreves spurter, og energifordelingen gjennom konkurransen. Kravanalysen er viktig fordi den sikrer at treningen er spesifikk for idrettens krav. Uten kravanalyse risikerer man å trene feil egenskaper, bruke for mye tid på irrelevante treningsformer, eller overse viktige aspekter av idretten. Den danner grunnlaget for periodisering og prioritering av treningsinnhold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr2-3-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign utholdenhetstrening for løping og sykling. Hva er de viktigste forskjellene i treningsoppbygging, og hva skyldes disse forskjellene?',
        solution: 'Viktige forskjeller: 1) Treningsvolum: Syklister kan trene langt flere timer per uke (15-30+ timer) enn løpere (typisk 8-15 timer) fordi sykling er ikke-vektbærende og gir mye lavere mekanisk belastning. Løping innebærer gjentatte landinger med 2-3 ganger kroppsvekten per steg, noe som begrenser volumet pga. skaderisiko. 2) Skadeprofil: Løpere har høy risiko for belastningsskader i bein og føtter. Syklister har lavere skaderisiko under trening, men kan oppleve overbelastning i knær og rygg. 3) Intensitetsstyring: Syklister bruker wattmåler for nøyaktig intensitetsstyring. Løpere bruker puls og tempo, som er mer påvirkelig av ytre forhold. 4) Tilleggstrening: Løpere trenger styrketrening for å forebygge skader og forbedre løpsøkonomi. Syklister trenger styrke primært for kraftproduksjon. 5) Grunntrening: Lignende prosentandel, men syklisters langkjøringer er mye lengre (2-5 timer vs. 60-120 min for løpere). Forskjellene skyldes hovedsakelig den mekaniske belastningens natur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr2-3-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft begrepet overførbarhet (transfer) mellom utholdenhetsidretter. I hvilken grad kan en god langrennsløper prestere godt i løping eller sykling uten spesifikk trening? Begrunn svaret med fysiologiske argumenter.',
        solution: 'Overførbarhet mellom utholdenhetsidretter varierer avhengig av likhet i bevegelsesmønster og muskelbruk. En god langrennsløper har svært høy VO2max og utmerket aerobt system, noe som gir et godt grunnlag for andre utholdenhetsidretter. Sentrale tilpasninger (hjertets slagvolum, blodvolum, hemoglobin) er til stor del overførbare fordi hjertet ikke skiller mellom idretter. Overførbarhet til løping: Moderat til god. Langrennsløpere bruker mye av de samme beinmusklene, spesielt i diagonalgang og skating. Men løping krever spesifikk tilpasning av sener, ledd og bindevev til støtbelastning, samt løpsspesifikk økonomi. En langrennsløper vil kunne løpe bra, men ikke optimalt uten spesifikk løpstrening. Overførbarhet til sykling: Moderat. Beinstyrke og aerob kapasitet overføres delvis, men sykling krever spesifikk tilpasning av quadriceps og hoftestrekkere i et svært annerledes bevegelsesmønster. Perifere tilpasninger (kapillærtetthet, mitokondrier) i de spesifikke musklene er begrenset overførbare. Konklusjon: Generell aerob kapasitet overføres godt, men spesifikk prestasjon krever idrettsspesifikk trening. En langrennsløper vil prestere "godt" i andre utholdenhetsidretter, men ikke nær sitt potensial uten dedikert trening i den nye idretten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-3-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr2-3-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en idrett (løping, sykling, langrenn eller svømming) og lag en detaljert treningsuke for en elev på VG3 som satser på denne idretten. Inkluder 5-6 treningsøkter med spesifisert innhold, intensitet og varighet. Begrunn valgene ut fra idrettens kravanalyse.',
        solution: 'Eksempel for langrenn (VG3-elev, 8-10 timer trening per uke): Kravanalyse: Langrenn krever helkroppsutholdenhet, høy VO2max, god anaerob terskel, bakkekraft og teknisk ferdighet i bade klassisk og skøyting. Konkurranser varer 15-60 min med variert terreng. Ukeplan (september, rulleskisesong): Mandag: Styrketrening 60 min (markløft, knebøy, benkpress, skulderspress, core) + 30 min rolig jogging (sone 1). Tirsdag: Rulleski-intervaller 80 min totalt: 20 min oppvarming, 5x4 min i sone 4-5 i motbakke (veksle mellom staking og diagonalgang), 3 min aktiv pause, 15 min nedjogging. Onsdag: 70 min rolig rulleskitur i sone 1-2, fokus på teknikk i bade klassisk og skøyting. Torsdag: Styrketrening 45 min (lettere, fokus overkropp og core) + 40 min rolig sykling (alternativ trening, sone 1). Fredag: Rulleski-terskeløkt 75 min: 20 min oppvarming, 3x12 min tempoøkt i sone 3 med 3 min pause, 15 min nedjogging. Lørdag: Langtur rulleski 2 timer i sone 1-2, kupert løype. Søndag: Hvile eller lett aktivitet 30-40 min. Begrunnelse: Langturene og rolige øktene (ca. 80 %) bygger aerobt grunnlag og teknikk. Intervallene (ca. 15 %) utvikler VO2max spesifikt i bakke der kravene er høyest. Terskeløkten hever anaerob terskel. Styrketrening 2x/uke gir bakkekraft og skadeforebygging. Veksling mellom teknikker sikrer allsidig utvikling. Totalvolumet er realistisk for en satsingselev på VG3.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Eksport av alle kapitler
// ============================================================================

export const TRENING_2_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TRENING_2_3_1,
  CHAPTER_TRENING_2_3_2,
  CHAPTER_TRENING_2_3_3,
  CHAPTER_TRENING_2_3_4,
  CHAPTER_TRENING_2_3_5,
];
