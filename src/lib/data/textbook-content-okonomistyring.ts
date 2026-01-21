/* eslint-disable */
// @ts-nocheck
/**
 * Økonomistyring - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for Økonomistyring (VG2 valgfag)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Innføring i økonomi og regnskap
// ============================================================================

export const CHAPTER_OKONOMISTYRING_1: TextbookChapter = {
  id: 'okonomistyring-1',
  courseId: 'okonomistyring',
  chapterNumber: '1',
  title: 'Innføring i økonomi og regnskap',
  description: 'Lær grunnleggende økonomiske begreper og forstå regnskapets rolle i virksomheter.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forklare sentrale begreper innenfor økonomi og regnskap',
    'beskrive regnskapets formål og betydning for virksomheter',
    'forstå forskjellen mellom intern og ekstern rapportering',
  ],
  content: [
    {
      id: 'okonomistyring-1-intro',
      type: 'text',
      content: `Økonomi handler om hvordan vi forvalter begrensede ressurser for å dekke våre behov. For bedrifter er god økonomistyring avgjørende for å overleve og vokse. I dette kapittelet skal vi se på grunnleggende økonomiske begreper og hvordan regnskap brukes som et verktøy for styring og kontroll.`,
    },
    {
      id: 'okonomistyring-1-def-1',
      type: 'definition',
      title: 'Økonomi',
      content: `Økonomi er læren om hvordan mennesker, bedrifter og samfunn fordeler knappe ressurser for å tilfredsstille ubegrensede behov. Ordet kommer fra gresk «oikonomia» som betyr husholdning.`,
    },
    {
      id: 'okonomistyring-1-text-1',
      type: 'text',
      title: 'Hvorfor er økonomistyring viktig?',
      content: `God økonomistyring er viktig fordi den:

- **Sikrer lønnsomhet**: Bedriften må tjene penger for å overleve
- **Gir oversikt**: Ledelsen får informasjon til å ta gode beslutninger
- **Skaper tillit**: Investorer, banker og andre interessenter får innsyn
- **Oppfyller lovkrav**: Alle bedrifter må føre regnskap etter norsk lov`,
    },
    {
      id: 'okonomistyring-1-def-2',
      type: 'definition',
      title: 'Regnskap',
      content: `Regnskap er en systematisk registrering, måling og rapportering av økonomiske transaksjoner i en virksomhet. Regnskapet viser bedriftens økonomiske stilling og resultat.`,
    },
    {
      id: 'okonomistyring-1-text-2',
      type: 'text',
      title: 'Interessenter og regnskapet',
      content: `Mange ulike grupper har interesse av bedriftens regnskap:

**Interne interessenter:**
- Ledelsen - for beslutninger og styring
- Ansatte - for å vurdere jobbsikkerhet

**Eksterne interessenter:**
- Eiere/aksjonærer - for å vurdere avkastning
- Banker - for å vurdere lånesøknader
- Leverandører - for å vurdere kredittverdighet
- Kunder - for å vurdere leveringssikkerhet
- Skattemyndighetene - for å beregne skatt`,
    },
    {
      id: 'okonomistyring-1-def-3',
      type: 'definition',
      title: 'Finansregnskap vs. driftsregnskap',
      content: `**Finansregnskap** er lovpålagt og viser bedriftens totale økonomiske stilling til eksterne interessenter.

**Driftsregnskap** (internregnskap) er frivillig og brukes internt for styring og kontroll av ulike avdelinger og produkter.`,
    },
    {
      id: 'okonomistyring-1-example-1',
      type: 'example',
      title: 'Eksempel: Økonomiske begreper',
      content: `**En bedrift kjøper varer for 50 000 kr og selger dem for 80 000 kr.**

- **Inntekt**: 80 000 kr (det bedriften mottar)
- **Kostnad**: 50 000 kr (det bedriften betaler)
- **Fortjeneste/overskudd**: 80 000 - 50 000 = 30 000 kr`,
    },
    {
      id: 'okonomistyring-1-def-4',
      type: 'definition',
      title: 'Sentrale begreper',
      content: `- **Inntekt**: Verdien av solgte varer og tjenester
- **Kostnad**: Forbruk av ressurser for å skape inntekter
- **Resultat**: Differansen mellom inntekter og kostnader
- **Eiendeler (aktiva)**: Det bedriften eier
- **Gjeld (passiva)**: Det bedriften skylder
- **Egenkapital**: Eiernes andel av verdiene (eiendeler - gjeld)`,
    },
    {
      id: 'okonomistyring-1-tip-1',
      type: 'tip',
      content: `Husk hovedregelen: **Eiendeler = Gjeld + Egenkapital**. Dette kalles regnskapsligningen og er grunnlaget for all regnskapsføring.`,
    },
  ],
  exercises: [
    {
      id: 'okonomistyring-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er hovedformålet med regnskap?',
      options: [
        { id: 'a', text: 'Å betale minst mulig skatt', isCorrect: false },
        { id: 'b', text: 'Å registrere og rapportere økonomiske transaksjoner systematisk', isCorrect: true },
        { id: 'c', text: 'Å skjule bedriftens økonomi', isCorrect: false },
        { id: 'd', text: 'Kun å tilfredsstille bankene', isCorrect: false },
      ],
      solution: 'Regnskap handler om systematisk registrering og rapportering av økonomiske transaksjoner.',
    },
    {
      id: 'okonomistyring-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er egenkapital?',
      options: [
        { id: 'a', text: 'Penger bedriften har lånt i banken', isCorrect: false },
        { id: 'b', text: 'Differansen mellom eiendeler og gjeld', isCorrect: true },
        { id: 'c', text: 'Kontanter i kassen', isCorrect: false },
        { id: 'd', text: 'Bedriftens totale eiendeler', isCorrect: false },
      ],
      solution: 'Egenkapital = Eiendeler - Gjeld. Det er eiernes andel av bedriftens verdier.',
    },
    {
      id: 'okonomistyring-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'En bedrift har eiendeler på 500 000 kr og gjeld på 300 000 kr. Hva er egenkapitalen?',
      options: [
        { id: 'a', text: '800 000 kr', isCorrect: false },
        { id: 'b', text: '200 000 kr', isCorrect: true },
        { id: 'c', text: '300 000 kr', isCorrect: false },
        { id: 'd', text: '500 000 kr', isCorrect: false },
      ],
      solution: 'Egenkapital = Eiendeler - Gjeld = 500 000 - 300 000 = 200 000 kr.',
    },
    {
      id: 'okonomistyring-1-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er forskjellen mellom finansregnskap og driftsregnskap?',
      options: [
        { id: 'a', text: 'Finansregnskap er for internt bruk, driftsregnskap for eksternt', isCorrect: false },
        { id: 'b', text: 'Finansregnskap er lovpålagt og eksternt, driftsregnskap er frivillig og internt', isCorrect: true },
        { id: 'c', text: 'Det er ingen forskjell', isCorrect: false },
        { id: 'd', text: 'Finansregnskap viser kun kontanter', isCorrect: false },
      ],
      solution: 'Finansregnskap er lovpålagt og beregnet på eksterne interessenter, mens driftsregnskap er frivillig og brukes internt.',
    },
    {
      id: 'okonomistyring-1-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken gruppe er IKKE en typisk interessent for bedriftens regnskap?',
      options: [
        { id: 'a', text: 'Banker', isCorrect: false },
        { id: 'b', text: 'Skattemyndighetene', isCorrect: false },
        { id: 'c', text: 'Konkurrentenes kunder', isCorrect: true },
        { id: 'd', text: 'Leverandører', isCorrect: false },
      ],
      solution: 'Banker, skattemyndigheter og leverandører er alle interessenter, men konkurrentenes kunder har normalt ingen interesse i bedriftens regnskap.',
    },
  ],
};

// ============================================================================
// Kapittel 2: Balanse og resultatregnskap
// ============================================================================

export const CHAPTER_OKONOMISTYRING_2: TextbookChapter = {
  id: 'okonomistyring-2',
  courseId: 'okonomistyring',
  chapterNumber: '2',
  title: 'Balanse og resultatregnskap',
  description: 'Forstå oppbyggingen av balanse og resultatregnskap, og lær å lese og tolke regnskapsrapporter.',
  estimatedMinutes: 75,
  competenceGoals: [
    'forklare oppbyggingen av balanse og resultatregnskap',
    'lese og tolke enkle regnskapsrapporter',
    'forstå sammenhengen mellom balanse og resultat',
  ],
  content: [
    {
      id: 'okonomistyring-2-intro',
      type: 'text',
      content: `Balansen og resultatregnskapet er de to viktigste regnskapsrapportene. Balansen viser bedriftens økonomiske stilling på et gitt tidspunkt, mens resultatregnskapet viser hvordan det har gått over en periode.`,
    },
    {
      id: 'okonomistyring-2-def-1',
      type: 'definition',
      title: 'Balanse',
      content: `Balansen er en oppstilling som viser bedriftens eiendeler (aktiva) på den ene siden, og hvordan disse er finansiert gjennom gjeld og egenkapital (passiva) på den andre. Balansen er et øyeblikksbilde per en bestemt dato.

**Regnskapsligningen:** Eiendeler = Gjeld + Egenkapital`,
    },
    {
      id: 'okonomistyring-2-text-1',
      type: 'text',
      title: 'Balansens oppbygging',
      content: `**EIENDELER (Aktiva)**

*Anleggsmidler* - varige eiendeler:
- Immaterielle (patenter, goodwill)
- Varige driftsmidler (bygninger, maskiner, inventar)
- Finansielle (aksjer, obligasjoner)

*Omløpsmidler* - kortsiktige eiendeler:
- Varelager
- Kundefordringer
- Kontanter og bankinnskudd

**EGENKAPITAL OG GJELD (Passiva)**

*Egenkapital*:
- Aksjekapital
- Opptjent egenkapital (tidligere overskudd)

*Gjeld*:
- Langsiktig gjeld (lån over 1 år)
- Kortsiktig gjeld (leverandørgjeld, skyldig lønn)`,
    },
    {
      id: 'okonomistyring-2-example-1',
      type: 'example',
      title: 'Eksempel: Enkel balanse',
      content: `**Balanse for Kafe AS per 31.12.2024**

| EIENDELER | | EGENKAPITAL OG GJELD | |
|---|---|---|---|
| Inventar | 100 000 | Aksjekapital | 50 000 |
| Varelager | 30 000 | Opptjent EK | 40 000 |
| Kundefordringer | 20 000 | Banklån | 80 000 |
| Bank | 50 000 | Leverandørgjeld | 30 000 |
| **Sum** | **200 000** | **Sum** | **200 000** |

Legg merke til at summen av eiendeler = summen av egenkapital og gjeld.`,
    },
    {
      id: 'okonomistyring-2-def-2',
      type: 'definition',
      title: 'Resultatregnskap',
      content: `Resultatregnskapet viser bedriftens inntekter og kostnader over en periode (vanligvis ett år), og beregner resultatet (overskudd eller underskudd).

**Resultat = Inntekter - Kostnader**`,
    },
    {
      id: 'okonomistyring-2-text-2',
      type: 'text',
      title: 'Resultatregnskapets oppbygging',
      content: `Et forenklet resultatregnskap:

1. **Driftsinntekter** (salgsinntekter)
2. - **Driftskostnader** (varekostnad, lønn, avskrivninger, andre kostnader)
3. = **Driftsresultat**
4. + **Finansinntekter** (renteinntekter)
5. - **Finanskostnader** (rentekostnader)
6. = **Resultat før skatt**
7. - **Skattekostnad**
8. = **Årsresultat**`,
    },
    {
      id: 'okonomistyring-2-example-2',
      type: 'example',
      title: 'Eksempel: Resultatregnskap',
      content: `**Resultatregnskap for Kafe AS 2024**

| Post | Beløp |
|---|---|
| Salgsinntekter | 800 000 |
| - Varekostnad | 320 000 |
| - Lønnskostnader | 280 000 |
| - Andre driftskostnader | 100 000 |
| = **Driftsresultat** | **100 000** |
| + Renteinntekter | 2 000 |
| - Rentekostnader | 12 000 |
| = **Resultat før skatt** | **90 000** |
| - Skattekostnad (22%) | 19 800 |
| = **Årsresultat** | **70 200** |`,
    },
    {
      id: 'okonomistyring-2-note-1',
      type: 'note',
      title: 'Sammenhengen mellom balanse og resultat',
      content: `Årsresultatet fra resultatregnskapet påvirker egenkapitalen i balansen:
- Overskudd øker egenkapitalen
- Underskudd reduserer egenkapitalen

Dersom Kafe AS har et årsresultat på 70 200 kr, vil opptjent egenkapital øke med dette beløpet.`,
    },
  ],
  exercises: [
    {
      id: 'okonomistyring-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva viser balansen?',
      options: [
        { id: 'a', text: 'Bedriftens inntekter og kostnader', isCorrect: false },
        { id: 'b', text: 'Bedriftens eiendeler, gjeld og egenkapital på et tidspunkt', isCorrect: true },
        { id: 'c', text: 'Kun bedriftens kontanter', isCorrect: false },
        { id: 'd', text: 'Bedriftens skattekostnad', isCorrect: false },
      ],
      solution: 'Balansen er et øyeblikksbilde som viser eiendeler på den ene siden og finansiering (gjeld + egenkapital) på den andre.',
    },
    {
      id: 'okonomistyring-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er driftsresultat?',
      options: [
        { id: 'a', text: 'Inntekter minus alle kostnader inkludert skatt', isCorrect: false },
        { id: 'b', text: 'Driftsinntekter minus driftskostnader', isCorrect: true },
        { id: 'c', text: 'Kun salgsinntektene', isCorrect: false },
        { id: 'd', text: 'Egenkapitalen ved årets slutt', isCorrect: false },
      ],
      solution: 'Driftsresultat = Driftsinntekter - Driftskostnader. Det viser resultatet fra selve driften før finansposter.',
    },
    {
      id: 'okonomistyring-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket av følgende er et anleggsmiddel?',
      options: [
        { id: 'a', text: 'Varelager', isCorrect: false },
        { id: 'b', text: 'Kundefordringer', isCorrect: false },
        { id: 'c', text: 'Maskiner', isCorrect: true },
        { id: 'd', text: 'Bankinnskudd', isCorrect: false },
      ],
      solution: 'Maskiner er varige driftsmidler og klassifiseres som anleggsmidler. De andre er omløpsmidler.',
    },
    {
      id: 'okonomistyring-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'En bedrift har driftsinntekter på 500 000 kr og driftskostnader på 400 000 kr. Hva er driftsresultatet?',
      options: [
        { id: 'a', text: '900 000 kr', isCorrect: false },
        { id: 'b', text: '100 000 kr', isCorrect: true },
        { id: 'c', text: '400 000 kr', isCorrect: false },
        { id: 'd', text: '500 000 kr', isCorrect: false },
      ],
      solution: 'Driftsresultat = 500 000 - 400 000 = 100 000 kr.',
    },
    {
      id: 'okonomistyring-2-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvordan påvirker et årsoverskudd balansen?',
      options: [
        { id: 'a', text: 'Gjelden øker', isCorrect: false },
        { id: 'b', text: 'Egenkapitalen øker', isCorrect: true },
        { id: 'c', text: 'Anleggsmidlene reduseres', isCorrect: false },
        { id: 'd', text: 'Balansen blir ubalansert', isCorrect: false },
      ],
      solution: 'Årsoverskuddet legges til opptjent egenkapital, som øker egenkapitalen i balansen.',
    },
    {
      id: 'okonomistyring-2-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er leverandørgjeld?',
      options: [
        { id: 'a', text: 'Penger vi har til gode fra kunder', isCorrect: false },
        { id: 'b', text: 'Penger vi skylder leverandører for varer vi har kjøpt', isCorrect: true },
        { id: 'c', text: 'Langsiktig banklån', isCorrect: false },
        { id: 'd', text: 'Aksjekapital', isCorrect: false },
      ],
      solution: 'Leverandørgjeld er kortsiktig gjeld til leverandører for varer eller tjenester vi har mottatt men ikke betalt for ennå.',
    },
  ],
};

// ============================================================================
// Kapittel 3: Budsjettering
// ============================================================================

export const CHAPTER_OKONOMISTYRING_3: TextbookChapter = {
  id: 'okonomistyring-3',
  courseId: 'okonomistyring',
  chapterNumber: '3',
  title: 'Budsjettering',
  description: 'Lær å lage og bruke budsjetter som styringsverktøy i bedriften.',
  estimatedMinutes: 75,
  competenceGoals: [
    'forklare formålet med budsjettering',
    'sette opp enkle resultat- og likviditetsbudsjetter',
    'analysere avvik mellom budsjett og regnskap',
  ],
  content: [
    {
      id: 'okonomistyring-3-intro',
      type: 'text',
      content: `Et budsjett er en plan for fremtiden uttrykt i tall. Budsjettering er et viktig styringsverktøy som hjelper bedrifter å planlegge, koordinere og kontrollere sin virksomhet.`,
    },
    {
      id: 'okonomistyring-3-def-1',
      type: 'definition',
      title: 'Budsjett',
      content: `Et budsjett er en tallfestet handlingsplan for en fremtidig periode. Det viser forventede inntekter, kostnader og eventuelt kontantstrømmer basert på bedriftens mål og planer.`,
    },
    {
      id: 'okonomistyring-3-text-1',
      type: 'text',
      title: 'Hvorfor budsjettere?',
      content: `Budsjetter har flere viktige funksjoner:

1. **Planlegging**: Tvinger ledelsen til å tenke fremover
2. **Koordinering**: Sikrer at ulike avdelinger jobber mot samme mål
3. **Motivasjon**: Gir ansatte mål å strekke seg etter
4. **Kontroll**: Grunnlag for å sammenligne faktisk resultat med plan
5. **Kommunikasjon**: Formidler mål og forventninger i organisasjonen`,
    },
    {
      id: 'okonomistyring-3-def-2',
      type: 'definition',
      title: 'Typer budsjetter',
      content: `**Resultatbudsjett**: Viser forventede inntekter og kostnader (som resultatregnskapet)

**Likviditetsbudsjett**: Viser forventede inn- og utbetalinger (kontantstrøm)

**Balansebudsjett**: Viser forventet balanse ved periodens slutt

**Investeringsbudsjett**: Viser planlagte investeringer i anleggsmidler`,
    },
    {
      id: 'okonomistyring-3-example-1',
      type: 'example',
      title: 'Eksempel: Resultatbudsjett',
      content: `**Resultatbudsjett for Kafe AS - 1. kvartal 2025**

| Post | Januar | Februar | Mars | Sum Q1 |
|---|---|---|---|---|
| Salgsinntekter | 60 000 | 65 000 | 70 000 | 195 000 |
| - Varekostnad (40%) | 24 000 | 26 000 | 28 000 | 78 000 |
| - Lønn | 25 000 | 25 000 | 25 000 | 75 000 |
| - Husleie | 8 000 | 8 000 | 8 000 | 24 000 |
| - Andre kostnader | 5 000 | 5 000 | 5 000 | 15 000 |
| **Resultat** | **-2 000** | **1 000** | **4 000** | **3 000** |`,
    },
    {
      id: 'okonomistyring-3-text-2',
      type: 'text',
      title: 'Likviditetsbudsjett',
      content: `Likviditetsbudsjettet viser når pengene faktisk kommer inn og går ut. Dette er viktig fordi:

- En lønnsom bedrift kan gå konkurs hvis den ikke kan betale regningene
- Inntekter i resultatregnskapet blir ikke alltid betalt med en gang
- Noen kostnader betales før de føres i regnskapet

**Forskjell fra resultatbudsjett:**
- Resultatbudsjett: Når inntekten/kostnaden oppstår
- Likviditetsbudsjett: Når pengene faktisk beveger seg`,
    },
    {
      id: 'okonomistyring-3-example-2',
      type: 'example',
      title: 'Eksempel: Likviditetsbudsjett',
      content: `**Likviditetsbudsjett for Kafe AS - 1. kvartal 2025**

| Post | Januar | Februar | Mars |
|---|---|---|---|
| IB (inngående beholdning) | 20 000 | 13 000 | 14 000 |
| + Innbetalinger fra salg | 55 000 | 62 000 | 68 000 |
| - Utbetalinger varekjøp | 26 000 | 25 000 | 27 000 |
| - Utbetaling lønn | 25 000 | 25 000 | 25 000 |
| - Husleie | 8 000 | 8 000 | 8 000 |
| - Andre utbetalinger | 3 000 | 3 000 | 3 000 |
| **UB (utgående beholdning)** | **13 000** | **14 000** | **19 000** |

Merk: Innbetalingene er lavere enn salget fordi noen kunder betaler senere.`,
    },
    {
      id: 'okonomistyring-3-def-3',
      type: 'definition',
      title: 'Budsjettavvik',
      content: `Budsjettavvik er forskjellen mellom budsjetterte og faktiske tall.

**Avvik = Faktisk - Budsjett**

- Positivt avvik på inntekter = gunstig (høyere inntekt enn forventet)
- Positivt avvik på kostnader = ugunstig (høyere kostnad enn forventet)`,
    },
    {
      id: 'okonomistyring-3-warning-1',
      type: 'warning',
      title: 'Vanlige budsjettfeil',
      content: `- Være for optimistisk med salgsprognoser
- Glemme sesongvariasjoner
- Ikke ta høyde for uforutsette utgifter
- Ikke oppdatere budsjettet når forutsetningene endres`,
    },
  ],
  exercises: [
    {
      id: 'okonomistyring-3-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er et budsjett?',
      options: [
        { id: 'a', text: 'En oversikt over fjorårets regnskap', isCorrect: false },
        { id: 'b', text: 'En tallfestet plan for en fremtidig periode', isCorrect: true },
        { id: 'c', text: 'En liste over bedriftens eiendeler', isCorrect: false },
        { id: 'd', text: 'Et lån fra banken', isCorrect: false },
      ],
      solution: 'Et budsjett er en tallfestet handlingsplan som viser forventede inntekter og kostnader for fremtiden.',
    },
    {
      id: 'okonomistyring-3-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva viser et likviditetsbudsjett?',
      options: [
        { id: 'a', text: 'Forventede inntekter og kostnader', isCorrect: false },
        { id: 'b', text: 'Forventede inn- og utbetalinger', isCorrect: true },
        { id: 'c', text: 'Bedriftens eiendeler', isCorrect: false },
        { id: 'd', text: 'Aksjekapitalen', isCorrect: false },
      ],
      solution: 'Likviditetsbudsjettet viser kontantstrømmen - når pengene faktisk kommer inn og går ut.',
    },
    {
      id: 'okonomistyring-3-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Budsjettert salg er 100 000 kr, faktisk salg er 90 000 kr. Hva er avviket?',
      options: [
        { id: 'a', text: '10 000 kr gunstig', isCorrect: false },
        { id: 'b', text: '-10 000 kr ugunstig', isCorrect: true },
        { id: 'c', text: '190 000 kr', isCorrect: false },
        { id: 'd', text: '0 kr', isCorrect: false },
      ],
      solution: 'Avvik = 90 000 - 100 000 = -10 000 kr. Negativt avvik på inntekter er ugunstig.',
    },
    {
      id: 'okonomistyring-3-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvorfor kan en lønnsom bedrift likevel ha likviditetsproblemer?',
      options: [
        { id: 'a', text: 'Fordi regnskapet er feil', isCorrect: false },
        { id: 'b', text: 'Fordi inntekter i regnskapet ikke alltid betales med en gang', isCorrect: true },
        { id: 'c', text: 'Fordi budsjettet er for optimistisk', isCorrect: false },
        { id: 'd', text: 'Fordi skatten er for høy', isCorrect: false },
      ],
      solution: 'Tidspunktet for regnskapsføring og faktisk betaling kan være forskjellig. Salg på kreditt gir inntekt i regnskapet, men pengene kommer først senere.',
    },
    {
      id: 'okonomistyring-3-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'En bedrift har IB likviditet på 50 000, innbetalinger på 200 000 og utbetalinger på 230 000. Hva er UB?',
      options: [
        { id: 'a', text: '480 000 kr', isCorrect: false },
        { id: 'b', text: '20 000 kr', isCorrect: true },
        { id: 'c', text: '-30 000 kr', isCorrect: false },
        { id: 'd', text: '80 000 kr', isCorrect: false },
      ],
      solution: 'UB = IB + Innbetalinger - Utbetalinger = 50 000 + 200 000 - 230 000 = 20 000 kr.',
    },
  ],
};

// ============================================================================
// Kapittel 4: Kalkyler og lønnsomhet
// ============================================================================

export const CHAPTER_OKONOMISTYRING_4: TextbookChapter = {
  id: 'okonomistyring-4',
  courseId: 'okonomistyring',
  chapterNumber: '4',
  title: 'Kalkyler og lønnsomhet',
  description: 'Lær å beregne kostnader, sette priser og vurdere lønnsomhet.',
  estimatedMinutes: 90,
  competenceGoals: [
    'skille mellom faste og variable kostnader',
    'beregne selvkost og bidrag',
    'gjennomføre nullpunktsanalyse',
    'vurdere lønnsomhet ved ulike beslutninger',
  ],
  content: [
    {
      id: 'okonomistyring-4-intro',
      type: 'text',
      content: `For å drive lønnsomt må bedriften vite hva det koster å produsere varene eller tjenestene, og sette priser som gir fortjeneste. Kalkyler er verktøy for å beregne kostnader og analysere lønnsomhet.`,
    },
    {
      id: 'okonomistyring-4-def-1',
      type: 'definition',
      title: 'Variable og faste kostnader',
      content: `**Variable kostnader (VK)**: Kostnader som varierer med produksjons- eller salgsvolumet.
- Eksempler: Råvarer, emballasje, provisjon til selgere

**Faste kostnader (FK)**: Kostnader som er uavhengige av volumet (på kort sikt).
- Eksempler: Husleie, forsikring, faste lønninger, avskrivninger`,
    },
    {
      id: 'okonomistyring-4-text-1',
      type: 'text',
      title: 'Totale kostnader',
      content: `**Totale kostnader (TK) = Faste kostnader (FK) + Variable kostnader (VK)**

Hvis variable kostnader per enhet er $vk$, og vi produserer $x$ enheter:

$$TK = FK + vk \\cdot x$$`,
    },
    {
      id: 'okonomistyring-4-example-1',
      type: 'example',
      title: 'Eksempel: Kostnadsberegning',
      content: `**Kafe AS har følgende kostnader:**
- Husleie: 8 000 kr/mnd (fast)
- Lønn: 25 000 kr/mnd (fast)
- Råvarer per kopp kaffe: 15 kr (variabel)

Hvis de selger 1000 kopper kaffe i måneden:
- FK = 8 000 + 25 000 = 33 000 kr
- VK = 15 kr × 1000 = 15 000 kr
- TK = 33 000 + 15 000 = 48 000 kr
- Kostnad per kopp = 48 000 / 1000 = 48 kr`,
    },
    {
      id: 'okonomistyring-4-def-2',
      type: 'definition',
      title: 'Selvkost og bidragskalkyle',
      content: `**Selvkostkalkyle**: Fordeler alle kostnader (både variable og faste) på produktene.
- Selvkost = VK per enhet + andel av FK
- Brukes for langsiktig prissetting

**Bidragskalkyle**: Fokuserer på variable kostnader og dekningsbidrag.
- Dekningsbidrag (DB) = Pris - Variable kostnader per enhet
- Brukes for kortsiktige beslutninger`,
    },
    {
      id: 'okonomistyring-4-text-2',
      type: 'text',
      title: 'Dekningsbidrag',
      content: `Dekningsbidraget viser hvor mye hver solgte enhet bidrar til å dekke faste kostnader og gi overskudd.

**Dekningsbidrag per enhet = Salgspris - Variable kostnader per enhet**

**Totalt dekningsbidrag = DB per enhet × Antall solgte**

**Resultat = Totalt dekningsbidrag - Faste kostnader**`,
    },
    {
      id: 'okonomistyring-4-example-2',
      type: 'example',
      title: 'Eksempel: Dekningsbidrag',
      content: `**Kafe AS selger kaffe for 45 kr per kopp:**
- Salgspris: 45 kr
- Variable kostnader: 15 kr
- **Dekningsbidrag per kopp**: 45 - 15 = 30 kr

Ved salg av 1000 kopper:
- Totalt DB = 30 × 1000 = 30 000 kr
- Faste kostnader = 33 000 kr
- **Resultat** = 30 000 - 33 000 = **-3 000 kr** (underskudd)`,
    },
    {
      id: 'okonomistyring-4-def-3',
      type: 'definition',
      title: 'Nullpunktsanalyse',
      content: `Nullpunktet (break-even) er det salgsvolumet der inntektene akkurat dekker kostnadene. Ved nullpunktet er resultatet 0.

**Nullpunkt i antall enheter:**
$$x_0 = \\frac{FK}{DB \\text{ per enhet}} = \\frac{FK}{p - vk}$$

der $p$ = salgspris og $vk$ = variable kostnader per enhet.`,
    },
    {
      id: 'okonomistyring-4-example-3',
      type: 'example',
      title: 'Eksempel: Nullpunktsanalyse',
      content: `**Kafe AS:**
- Faste kostnader: 33 000 kr
- DB per kopp: 30 kr

**Nullpunkt:**
$$x_0 = \\frac{33000}{30} = 1100 \\text{ kopper}$$

Kafeen må selge minst 1100 kopper kaffe per måned for å gå i null.

Ved 1200 kopper:
- Resultat = 30 × 1200 - 33 000 = 36 000 - 33 000 = 3 000 kr overskudd`,
    },
    {
      id: 'okonomistyring-4-tip-1',
      type: 'tip',
      content: `**Dekningsgrad (DG)** viser dekningsbidraget som prosent av salgsprisen:

$$DG = \\frac{DB}{Salgspris} \\times 100\\%$$

For kaffeeksempelet: DG = 30/45 × 100% = 66,7%`,
    },
  ],
  exercises: [
    {
      id: 'okonomistyring-4-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er en variabel kostnad?',
      options: [
        { id: 'a', text: 'En kostnad som er lik hver måned', isCorrect: false },
        { id: 'b', text: 'En kostnad som varierer med produksjonsvolumet', isCorrect: true },
        { id: 'c', text: 'Husleie', isCorrect: false },
        { id: 'd', text: 'Forsikring', isCorrect: false },
      ],
      solution: 'Variable kostnader endrer seg i takt med hvor mye som produseres eller selges.',
    },
    {
      id: 'okonomistyring-4-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er dekningsbidrag per enhet?',
      options: [
        { id: 'a', text: 'Salgspris + variable kostnader', isCorrect: false },
        { id: 'b', text: 'Salgspris - variable kostnader', isCorrect: true },
        { id: 'c', text: 'Faste kostnader / antall enheter', isCorrect: false },
        { id: 'd', text: 'Totale kostnader - inntekter', isCorrect: false },
      ],
      solution: 'DB = Salgspris - VK per enhet. Det viser bidraget til å dekke FK og gi overskudd.',
    },
    {
      id: 'okonomistyring-4-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Salgspris er 100 kr, VK er 60 kr. Hva er dekningsbidraget?',
      options: [
        { id: 'a', text: '160 kr', isCorrect: false },
        { id: 'b', text: '40 kr', isCorrect: true },
        { id: 'c', text: '60 kr', isCorrect: false },
        { id: 'd', text: '100 kr', isCorrect: false },
      ],
      solution: 'DB = 100 - 60 = 40 kr per enhet.',
    },
    {
      id: 'okonomistyring-4-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'FK er 80 000 kr, DB per enhet er 40 kr. Hva er nullpunktet?',
      options: [
        { id: 'a', text: '200 enheter', isCorrect: false },
        { id: 'b', text: '2000 enheter', isCorrect: true },
        { id: 'c', text: '3200 enheter', isCorrect: false },
        { id: 'd', text: '800 enheter', isCorrect: false },
      ],
      solution: 'Nullpunkt = FK / DB = 80 000 / 40 = 2000 enheter.',
    },
    {
      id: 'okonomistyring-4-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'En bedrift har FK=50000, pris=200, VK=120. Hva blir resultatet ved salg av 800 enheter?',
      options: [
        { id: 'a', text: '14 000 kr overskudd', isCorrect: true },
        { id: 'b', text: '14 000 kr underskudd', isCorrect: false },
        { id: 'c', text: '64 000 kr overskudd', isCorrect: false },
        { id: 'd', text: '0 kr (nullpunkt)', isCorrect: false },
      ],
      solution: 'DB = 200-120 = 80 kr. Totalt DB = 80×800 = 64 000. Resultat = 64 000 - 50 000 = 14 000 kr.',
    },
    {
      id: 'okonomistyring-4-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Dekningsbidraget er 50 kr og salgsprisen er 125 kr. Hva er dekningsgraden?',
      options: [
        { id: 'a', text: '25%', isCorrect: false },
        { id: 'b', text: '40%', isCorrect: true },
        { id: 'c', text: '60%', isCorrect: false },
        { id: 'd', text: '50%', isCorrect: false },
      ],
      solution: 'DG = DB/Pris × 100% = 50/125 × 100% = 40%.',
    },
  ],
};

// ============================================================================
// Kapittel 5: Likviditetsstyring
// ============================================================================

export const CHAPTER_OKONOMISTYRING_5: TextbookChapter = {
  id: 'okonomistyring-5',
  courseId: 'okonomistyring',
  chapterNumber: '5',
  title: 'Likviditetsstyring',
  description: 'Lær å styre bedriftens betalingsevne og sikre god likviditet.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forklare betydningen av god likviditet',
    'identifisere faktorer som påvirker likviditeten',
    'foreslå tiltak for å forbedre likviditeten',
  ],
  content: [
    {
      id: 'okonomistyring-5-intro',
      type: 'text',
      content: `Likviditet handler om evnen til å betale regninger når de forfaller. Selv en lønnsom bedrift kan gå konkurs hvis den ikke klarer å betale sine forpliktelser. God likviditetsstyring er derfor avgjørende for bedriftens overlevelse.`,
    },
    {
      id: 'okonomistyring-5-def-1',
      type: 'definition',
      title: 'Likviditet',
      content: `Likviditet er bedriftens evne til å betale sine kortsiktige forpliktelser når de forfaller. God likviditet betyr at bedriften har tilstrekkelig med kontanter eller lett omsettelige eiendeler til å dekke løpende utgifter.`,
    },
    {
      id: 'okonomistyring-5-text-1',
      type: 'text',
      title: 'Hvorfor er likviditet viktig?',
      content: `**Konsekvenser av dårlig likviditet:**
- Kan ikke betale leverandører → mister varer/tjenester
- Kan ikke betale lønn → mister ansatte
- Kan ikke betale lån → banken kan kreve inn pant
- I verste fall: Konkurs

**God likviditet gir:**
- Betalingsdyktighet
- Handlefrihet
- Mulighet til å utnytte gunstige tilbud
- Tillit fra kreditorer`,
    },
    {
      id: 'okonomistyring-5-def-2',
      type: 'definition',
      title: 'Likviditetsgrad',
      content: `**Likviditetsgrad 1 (LG1):**
$$LG1 = \\frac{Omløpsmidler}{Kortsiktig gjeld}$$

Bør være over 2 (100% sikkerhetsmargin).

**Likviditetsgrad 2 (LG2):**
$$LG2 = \\frac{Omløpsmidler - Varelager}{Kortsiktig gjeld}$$

Bør være over 1. Varelager trekkes fra fordi det kan være vanskelig å selge raskt.`,
    },
    {
      id: 'okonomistyring-5-example-1',
      type: 'example',
      title: 'Eksempel: Likviditetsgrad',
      content: `**Kafe AS har:**
- Omløpsmidler: 100 000 kr (varelager 30 000, fordringer 20 000, bank 50 000)
- Kortsiktig gjeld: 50 000 kr

**LG1 = 100 000 / 50 000 = 2,0** ✓ (akkurat på grensen)

**LG2 = (100 000 - 30 000) / 50 000 = 70 000 / 50 000 = 1,4** ✓ (god)`,
    },
    {
      id: 'okonomistyring-5-text-2',
      type: 'text',
      title: 'Faktorer som påvirker likviditeten',
      content: `**Faktorer som forbedrer likviditeten:**
- Raskere innkreving av kundefordringer
- Utsette betalinger til leverandører (innen avtalte rammer)
- Selge overflødig varelager
- Øke salget
- Ta opp kortsiktig lån/kassakreditt

**Faktorer som forverrer likviditeten:**
- Lang kredittid til kunder
- For stort varelager
- Tap på kundefordringer
- Store investeringer finansiert med egne midler
- Utbytte til eiere`,
    },
    {
      id: 'okonomistyring-5-def-3',
      type: 'definition',
      title: 'Arbeidskapital',
      content: `Arbeidskapital = Omløpsmidler - Kortsiktig gjeld

Positiv arbeidskapital betyr at deler av omløpsmidlene er finansiert med langsiktig kapital, noe som gir bedre likviditet.`,
    },
    {
      id: 'okonomistyring-5-example-2',
      type: 'example',
      title: 'Eksempel: Tiltak for bedre likviditet',
      content: `**Kafe AS har likviditetsproblemer. Mulige tiltak:**

1. **Kortsiktige tiltak:**
   - Be kundene betale raskere (tilby rabatt ved rask betaling)
   - Forhandle lengre betalingsfrist med leverandører
   - Selge overflødig utstyr
   - Ta opp kassakreditt

2. **Langsiktige tiltak:**
   - Øke egenkapitalen (eiere skyter inn mer)
   - Refinansiere kortsiktig gjeld til langsiktig
   - Forbedre lønnsomheten`,
    },
    {
      id: 'okonomistyring-5-warning-1',
      type: 'warning',
      title: 'Likviditetsfellen',
      content: `Mange bedrifter går konkurs selv om de har fulle ordrebøker. Årsaken er ofte at de må kjøpe inn materialer og betale lønn før de får betalt fra kundene. Vekst krever ofte mer likviditet!`,
    },
  ],
  exercises: [
    {
      id: 'okonomistyring-5-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr god likviditet?',
      options: [
        { id: 'a', text: 'Bedriften har høy egenkapital', isCorrect: false },
        { id: 'b', text: 'Bedriften kan betale sine kortsiktige forpliktelser', isCorrect: true },
        { id: 'c', text: 'Bedriften har store anleggsmidler', isCorrect: false },
        { id: 'd', text: 'Bedriften har høy omsetning', isCorrect: false },
      ],
      solution: 'Likviditet handler om evnen til å betale regninger og forpliktelser når de forfaller.',
    },
    {
      id: 'okonomistyring-5-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva bør likviditetsgrad 1 minimum være?',
      options: [
        { id: 'a', text: '0,5', isCorrect: false },
        { id: 'b', text: '1', isCorrect: false },
        { id: 'c', text: '2', isCorrect: true },
        { id: 'd', text: '3', isCorrect: false },
      ],
      solution: 'LG1 bør være over 2, som gir 100% sikkerhetsmargin.',
    },
    {
      id: 'okonomistyring-5-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Omløpsmidler er 150 000, kortsiktig gjeld er 100 000. Hva er likviditetsgrad 1?',
      options: [
        { id: 'a', text: '0,67', isCorrect: false },
        { id: 'b', text: '1,5', isCorrect: true },
        { id: 'c', text: '50 000', isCorrect: false },
        { id: 'd', text: '250 000', isCorrect: false },
      ],
      solution: 'LG1 = 150 000 / 100 000 = 1,5.',
    },
    {
      id: 'okonomistyring-5-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket tiltak forbedrer likviditeten på kort sikt?',
      options: [
        { id: 'a', text: 'Kjøpe nytt utstyr', isCorrect: false },
        { id: 'b', text: 'Kreve inn kundefordringer raskere', isCorrect: true },
        { id: 'c', text: 'Øke varelageret', isCorrect: false },
        { id: 'd', text: 'Betale ut utbytte', isCorrect: false },
      ],
      solution: 'Raskere innkreving av fordringer gir raskere tilgang til kontanter.',
    },
    {
      id: 'okonomistyring-5-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Omløpsmidler 200 000 (varelager 80 000), kortsiktig gjeld 100 000. Hva er LG2?',
      options: [
        { id: 'a', text: '2,0', isCorrect: false },
        { id: 'b', text: '1,2', isCorrect: true },
        { id: 'c', text: '0,8', isCorrect: false },
        { id: 'd', text: '1,8', isCorrect: false },
      ],
      solution: 'LG2 = (200 000 - 80 000) / 100 000 = 120 000 / 100 000 = 1,2.',
    },
  ],
};

// ============================================================================
// Kapittel 6: Skatt og avgifter
// ============================================================================

export const CHAPTER_OKONOMISTYRING_6: TextbookChapter = {
  id: 'okonomistyring-6',
  courseId: 'okonomistyring',
  chapterNumber: '6',
  title: 'Skatt og avgifter',
  description: 'Forstå skatte- og avgiftssystemet og hvordan det påvirker bedrifter.',
  estimatedMinutes: 75,
  competenceGoals: [
    'forklare hovedtrekkene i skattesystemet',
    'beregne merverdiavgift',
    'forstå forskjellen mellom direkte og indirekte skatter',
  ],
  content: [
    {
      id: 'okonomistyring-6-intro',
      type: 'text',
      content: `Skatter og avgifter er hovedinntektskilden for staten og finansierer offentlige tjenester som helse, utdanning og infrastruktur. For bedrifter er det viktig å forstå skattesystemet både for å oppfylle sine forpliktelser og for å planlegge økonomien.`,
    },
    {
      id: 'okonomistyring-6-def-1',
      type: 'definition',
      title: 'Skatt og avgift',
      content: `**Skatt** er en tvungen ytelse til det offentlige uten direkte motytelse.

**Avgift** er også en tvungen ytelse, men er ofte knyttet til en bestemt aktivitet eller vare (f.eks. bensinavgift, alkoholavgift).`,
    },
    {
      id: 'okonomistyring-6-text-1',
      type: 'text',
      title: 'Direkte og indirekte skatter',
      content: `**Direkte skatter** - betales direkte av den som skal bære skatten:
- Inntektsskatt på personer
- Selskapsskatt (22% i 2024)
- Formuesskatt

**Indirekte skatter** - legges på varer/tjenester og veltes over på forbruker:
- Merverdiavgift (mva)
- Særavgifter (alkohol, tobakk, bensin)
- Toll`,
    },
    {
      id: 'okonomistyring-6-def-2',
      type: 'definition',
      title: 'Merverdiavgift (mva)',
      content: `Merverdiavgift er en avgift på forbruk som legges til prisen på varer og tjenester. Bedrifter krever inn mva fra kundene og betaler den videre til staten.

**Satser (2024):**
- Alminnelig sats: 25%
- Redusert sats (mat): 15%
- Lav sats (persontransport, kino): 12%
- Nullsats: 0% (bøker, aviser)`,
    },
    {
      id: 'okonomistyring-6-text-2',
      type: 'text',
      title: 'Hvordan mva fungerer',
      content: `Bedrifter er mva-pliktige og må:
1. Legge mva på salget (utgående mva)
2. Betale mva på innkjøp (inngående mva)
3. Betale differansen til staten

**Mva å betale = Utgående mva - Inngående mva**

Hvis inngående mva er større enn utgående, får bedriften tilbakebetalt differansen.`,
    },
    {
      id: 'okonomistyring-6-example-1',
      type: 'example',
      title: 'Eksempel: Mva-beregning',
      content: `**En bedrift kjøper varer for 10 000 kr + mva 25%:**
- Varekostnad: 10 000 kr
- Inngående mva: 10 000 × 0,25 = 2 500 kr
- Betaler totalt: 12 500 kr

**Selger varene for 15 000 kr + mva 25%:**
- Salgspris eks. mva: 15 000 kr
- Utgående mva: 15 000 × 0,25 = 3 750 kr
- Kunden betaler: 18 750 kr

**Mva å betale til staten:**
3 750 - 2 500 = 1 250 kr`,
    },
    {
      id: 'okonomistyring-6-def-3',
      type: 'definition',
      title: 'Selskapsskatt',
      content: `Aksjeselskaper betaler 22% skatt av overskuddet (skattbar inntekt). Skattbar inntekt beregnes etter bestemte skatteregler som kan avvike noe fra regnskapsmessig resultat.`,
    },
    {
      id: 'okonomistyring-6-example-2',
      type: 'example',
      title: 'Eksempel: Finne pris uten mva',
      content: `**Pris inkl. mva 25% er 1 250 kr. Hva er prisen eks. mva?**

La $x$ = pris eks. mva

$x + 0,25x = 1250$
$1,25x = 1250$
$x = 1250 / 1,25 = 1000$ kr

**Kontroll:** 1000 + 25% = 1000 + 250 = 1250 kr ✓`,
    },
    {
      id: 'okonomistyring-6-tip-1',
      type: 'tip',
      content: `**Rask formel for å finne pris eks. mva:**

Pris eks. mva = Pris inkl. mva / 1,25 (ved 25% mva)

Eller generelt: Pris eks. mva = Pris inkl. mva / (1 + mva-sats)`,
    },
  ],
  exercises: [
    {
      id: 'okonomistyring-6-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er den alminnelige mva-satsen i Norge?',
      options: [
        { id: 'a', text: '15%', isCorrect: false },
        { id: 'b', text: '22%', isCorrect: false },
        { id: 'c', text: '25%', isCorrect: true },
        { id: 'd', text: '30%', isCorrect: false },
      ],
      solution: 'Den alminnelige mva-satsen i Norge er 25%.',
    },
    {
      id: 'okonomistyring-6-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er selskapsskattesatsen for AS i Norge?',
      options: [
        { id: 'a', text: '25%', isCorrect: false },
        { id: 'b', text: '22%', isCorrect: true },
        { id: 'c', text: '28%', isCorrect: false },
        { id: 'd', text: '15%', isCorrect: false },
      ],
      solution: 'Aksjeselskaper betaler 22% skatt av overskuddet.',
    },
    {
      id: 'okonomistyring-6-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'En vare koster 8 000 kr eks. mva. Hva blir prisen inkl. 25% mva?',
      options: [
        { id: 'a', text: '9 000 kr', isCorrect: false },
        { id: 'b', text: '10 000 kr', isCorrect: true },
        { id: 'c', text: '8 250 kr', isCorrect: false },
        { id: 'd', text: '6 400 kr', isCorrect: false },
      ],
      solution: 'Pris inkl. mva = 8 000 × 1,25 = 10 000 kr.',
    },
    {
      id: 'okonomistyring-6-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'En vare koster 3 750 kr inkl. 25% mva. Hva er prisen eks. mva?',
      options: [
        { id: 'a', text: '3 000 kr', isCorrect: true },
        { id: 'b', text: '2 812,50 kr', isCorrect: false },
        { id: 'c', text: '3 500 kr', isCorrect: false },
        { id: 'd', text: '4 687,50 kr', isCorrect: false },
      ],
      solution: 'Pris eks. mva = 3 750 / 1,25 = 3 000 kr.',
    },
    {
      id: 'okonomistyring-6-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Utgående mva er 50 000 kr, inngående mva er 35 000 kr. Hvor mye skal betales til staten?',
      options: [
        { id: 'a', text: '85 000 kr', isCorrect: false },
        { id: 'b', text: '15 000 kr', isCorrect: true },
        { id: 'c', text: '35 000 kr', isCorrect: false },
        { id: 'd', text: '50 000 kr', isCorrect: false },
      ],
      solution: 'Mva å betale = Utgående - Inngående = 50 000 - 35 000 = 15 000 kr.',
    },
  ],
};

// ============================================================================
// Kapittel 7: Finansiering og investering
// ============================================================================

export const CHAPTER_OKONOMISTYRING_7: TextbookChapter = {
  id: 'okonomistyring-7',
  courseId: 'okonomistyring',
  chapterNumber: '7',
  title: 'Finansiering og investering',
  description: 'Lær om ulike finansieringskilder og hvordan investeringer vurderes.',
  estimatedMinutes: 75,
  competenceGoals: [
    'forklare ulike former for finansiering',
    'beregne enkle nåverdier og vurdere investeringer',
    'forstå sammenhengen mellom risiko og avkastning',
  ],
  content: [
    {
      id: 'okonomistyring-7-intro',
      type: 'text',
      content: `For å starte eller utvide en bedrift trengs kapital. Finansiering handler om hvordan denne kapitalen skaffes til veie. Investering handler om hvordan kapitalen brukes for å skape verdier.`,
    },
    {
      id: 'okonomistyring-7-def-1',
      type: 'definition',
      title: 'Finansiering',
      content: `Finansiering er hvordan bedriften skaffer kapital til sin virksomhet. De to hovedkildene er:

**Egenkapitalfinansiering**: Penger fra eierne
- Aksjekapital
- Tilbakeholdt overskudd

**Fremmedkapitalfinansiering**: Lån fra andre
- Banklån
- Leverandørkreditt
- Obligasjonslån`,
    },
    {
      id: 'okonomistyring-7-text-1',
      type: 'text',
      title: 'Egenkapital vs. gjeld',
      content: `**Egenkapital:**
- Ingen fast tilbakebetalingsplikt
- Utbytte bare hvis det er overskudd
- Gir eierne rett til å styre bedriften
- Høyere risiko for investor = høyere forventet avkastning

**Gjeld:**
- Fast rente og nedbetalingsplan
- Må betales uansett resultat
- Gir ikke långiver styringsrett
- Lavere risiko = lavere avkastningskrav`,
    },
    {
      id: 'okonomistyring-7-def-2',
      type: 'definition',
      title: 'Investering',
      content: `En investering er bruk av kapital i dag for å oppnå fremtidige inntekter eller besparelser. Investeringsbeslutninger vurderes ut fra lønnsomhet, risiko og likviditet.`,
    },
    {
      id: 'okonomistyring-7-text-2',
      type: 'text',
      title: 'Tidsverdien av penger',
      content: `100 kr i dag er verdt mer enn 100 kr om ett år fordi:
- Du kan investere pengene og få avkastning
- Inflasjon reduserer pengenes kjøpekraft
- Det er usikkert om du faktisk får pengene i fremtiden

**Nåverdi** er dagens verdi av fremtidige kontantstrømmer.`,
    },
    {
      id: 'okonomistyring-7-def-3',
      type: 'definition',
      title: 'Nåverdi og diskontering',
      content: `**Nåverdi av et fremtidig beløp:**
$$NV = \\frac{FV}{(1+r)^n}$$

der:
- $NV$ = nåverdi
- $FV$ = fremtidig verdi
- $r$ = diskonteringsrente (avkastningskrav)
- $n$ = antall år`,
    },
    {
      id: 'okonomistyring-7-example-1',
      type: 'example',
      title: 'Eksempel: Nåverdiberegning',
      content: `**Du kan få 110 000 kr om ett år. Renten er 10%. Hva er nåverdien?**

$$NV = \\frac{110000}{(1+0,10)^1} = \\frac{110000}{1,10} = 100000 \\text{ kr}$$

110 000 kr om ett år tilsvarer 100 000 kr i dag ved 10% rente.`,
    },
    {
      id: 'okonomistyring-7-example-2',
      type: 'example',
      title: 'Eksempel: Enkel investeringsanalyse',
      content: `**En maskin koster 500 000 kr og gir besparelser på 150 000 kr årlig i 5 år. Avkastningskrav 8%.**

Nåverdi av besparelsene:
- År 1: 150 000 / 1,08 = 138 889
- År 2: 150 000 / 1,08² = 128 601
- År 3: 150 000 / 1,08³ = 119 075
- År 4: 150 000 / 1,08⁴ = 110 255
- År 5: 150 000 / 1,08⁵ = 102 088

Sum nåverdi = 598 908 kr

**Netto nåverdi = 598 908 - 500 000 = 98 908 kr**

Positiv netto nåverdi → lønnsom investering!`,
    },
    {
      id: 'okonomistyring-7-tip-1',
      type: 'tip',
      content: `**Tommelfingerregel:** En investering er lønnsom hvis netto nåverdi (NNV) er positiv. Det betyr at investeringen gir høyere avkastning enn avkastningskravet.`,
    },
  ],
  exercises: [
    {
      id: 'okonomistyring-7-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er egenkapitalfinansiering?',
      options: [
        { id: 'a', text: 'Lån fra banken', isCorrect: false },
        { id: 'b', text: 'Kapital fra eierne', isCorrect: true },
        { id: 'c', text: 'Leverandørkreditt', isCorrect: false },
        { id: 'd', text: 'Obligasjonslån', isCorrect: false },
      ],
      solution: 'Egenkapitalfinansiering er kapital som kommer fra eierne, enten som innskutt kapital eller tilbakeholdt overskudd.',
    },
    {
      id: 'okonomistyring-7-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvorfor er 100 kr i dag verdt mer enn 100 kr om ett år?',
      options: [
        { id: 'a', text: 'Fordi inflasjonen alltid er negativ', isCorrect: false },
        { id: 'b', text: 'Fordi du kan investere pengene og få avkastning', isCorrect: true },
        { id: 'c', text: 'Fordi skatten er lavere i dag', isCorrect: false },
        { id: 'd', text: 'De er egentlig like mye verdt', isCorrect: false },
      ],
      solution: 'Penger i dag kan investeres og vokse, pluss at inflasjon og usikkerhet gjør fremtidige penger mindre verdt.',
    },
    {
      id: 'okonomistyring-7-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er nåverdien av 55 000 kr om ett år ved 10% rente?',
      options: [
        { id: 'a', text: '60 500 kr', isCorrect: false },
        { id: 'b', text: '50 000 kr', isCorrect: true },
        { id: 'c', text: '55 000 kr', isCorrect: false },
        { id: 'd', text: '49 500 kr', isCorrect: false },
      ],
      solution: 'NV = 55 000 / 1,10 = 50 000 kr.',
    },
    {
      id: 'okonomistyring-7-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken type finansiering har lavest risiko for investor?',
      options: [
        { id: 'a', text: 'Aksjekapital', isCorrect: false },
        { id: 'b', text: 'Banklån med pant', isCorrect: true },
        { id: 'c', text: 'Ansvarlig lån', isCorrect: false },
        { id: 'd', text: 'Egenkapital', isCorrect: false },
      ],
      solution: 'Banklån med pant har lavest risiko fordi långiver har sikkerhet og prioritet foran eiere.',
    },
    {
      id: 'okonomistyring-7-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'En investering koster 200 000 og gir nåverdi av fremtidige inntekter på 180 000. Er den lønnsom?',
      options: [
        { id: 'a', text: 'Ja, fordi inntektene er positive', isCorrect: false },
        { id: 'b', text: 'Nei, fordi netto nåverdi er negativ', isCorrect: true },
        { id: 'c', text: 'Ja, fordi investeringen er under 1 million', isCorrect: false },
        { id: 'd', text: 'Kan ikke avgjøres', isCorrect: false },
      ],
      solution: 'NNV = 180 000 - 200 000 = -20 000. Negativ NNV betyr at investeringen ikke er lønnsom.',
    },
  ],
};

// ============================================================================
// Kapittel 8: Personlig økonomi
// ============================================================================

export const CHAPTER_OKONOMISTYRING_8: TextbookChapter = {
  id: 'okonomistyring-8',
  courseId: 'okonomistyring',
  chapterNumber: '8',
  title: 'Personlig økonomi',
  description: 'Lær å håndtere egen økonomi, budsjettere og planlegge for fremtiden.',
  estimatedMinutes: 60,
  competenceGoals: [
    'sette opp et personlig budsjett',
    'forstå rentesrente og sparingens kraft',
    'vurdere ulike låne- og sparealternativer',
  ],
  content: [
    {
      id: 'okonomistyring-8-intro',
      type: 'text',
      content: `God personlig økonomi handler om å ha kontroll på inntekter og utgifter, spare til fremtiden og unngå unødvendig gjeld. Prinsippene fra bedriftsøkonomi kan også brukes i privatøkonomien.`,
    },
    {
      id: 'okonomistyring-8-def-1',
      type: 'definition',
      title: 'Personlig budsjett',
      content: `Et personlig budsjett er en oversikt over forventede inntekter og utgifter for en periode. Det hjelper deg å:
- Se hvor pengene går
- Planlegge forbruk og sparing
- Unngå å bruke mer enn du tjener`,
    },
    {
      id: 'okonomistyring-8-text-1',
      type: 'text',
      title: 'Inntekter og utgifter',
      content: `**Typiske inntekter:**
- Lønn (etter skatt)
- Stipend/lån fra Lånekassen
- Støtte fra foreldre
- Bijobber

**Typiske utgifter:**
- Faste: Husleie, forsikring, telefon, streaming
- Variable: Mat, klær, transport, fritid
- Uforutsette: Reparasjoner, legebesøk`,
    },
    {
      id: 'okonomistyring-8-example-1',
      type: 'example',
      title: 'Eksempel: Studentbudsjett',
      content: `**Månedlig budsjett for en student:**

| Inntekter | Beløp |
|---|---|
| Lån/stipend | 8 500 |
| Bijobb | 3 000 |
| **Sum inntekter** | **11 500** |

| Utgifter | Beløp |
|---|---|
| Husleie | 5 000 |
| Mat | 3 000 |
| Transport | 700 |
| Telefon/internett | 500 |
| Streaming | 200 |
| Fritid | 1 500 |
| **Sum utgifter** | **10 900** |

**Overskudd til sparing:** 600 kr/mnd`,
    },
    {
      id: 'okonomistyring-8-def-2',
      type: 'definition',
      title: 'Rentesrente',
      content: `Rentesrente betyr at du får rente på renten. Over tid gir dette eksponentiell vekst.

$$FV = PV \\times (1 + r)^n$$

der:
- $FV$ = fremtidig verdi
- $PV$ = nåverdi (det du sparer)
- $r$ = årlig rente
- $n$ = antall år`,
    },
    {
      id: 'okonomistyring-8-example-2',
      type: 'example',
      title: 'Eksempel: Kraften i rentesrente',
      content: `**Du sparer 10 000 kr med 5% årlig rente:**

- Etter 1 år: 10 000 × 1,05 = 10 500 kr
- Etter 5 år: 10 000 × 1,05⁵ = 12 763 kr
- Etter 10 år: 10 000 × 1,05¹⁰ = 16 289 kr
- Etter 20 år: 10 000 × 1,05²⁰ = 26 533 kr
- Etter 40 år: 10 000 × 1,05⁴⁰ = 70 400 kr

Pengene mer enn 7-dobles på 40 år!`,
    },
    {
      id: 'okonomistyring-8-text-2',
      type: 'text',
      title: 'Lån og gjeld',
      content: `**Ulike lånetyper:**
- **Boliglån**: Langsiktig, lav rente, sikret med pant
- **Billån**: Mellomlang, moderat rente
- **Forbrukslån**: Kortsiktig, høy rente, ingen sikkerhet
- **Kredittkort**: Veldig høy rente hvis ikke betalt i tide

**Tommelfingerregel:** Unngå forbrukslån og kredittkortrenter. Bruk kun gjeld til verdiskapende formål (bolig, utdanning).`,
    },
    {
      id: 'okonomistyring-8-warning-1',
      type: 'warning',
      title: 'Gjeldsfellen',
      content: `Forbrukslån og kredittkortgjeld kan ha renter på 15-25% eller mer. En gjeld på 50 000 kr med 20% rente koster 10 000 kr i renter per år. Det kan fort bli en ond spiral!`,
    },
    {
      id: 'okonomistyring-8-tip-1',
      type: 'tip',
      content: `**50/30/20-regelen** for budsjettering:
- 50% til nødvendigheter (bolig, mat, transport)
- 30% til ønsker (fritid, underholdning)
- 20% til sparing og nedbetaling av gjeld`,
    },
  ],
  exercises: [
    {
      id: 'okonomistyring-8-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er formålet med et personlig budsjett?',
      options: [
        { id: 'a', text: 'Å imponere banken', isCorrect: false },
        { id: 'b', text: 'Å ha oversikt over inntekter og utgifter', isCorrect: true },
        { id: 'c', text: 'Å betale mindre skatt', isCorrect: false },
        { id: 'd', text: 'Å få høyere lønn', isCorrect: false },
      ],
      solution: 'Et personlig budsjett gir oversikt og hjelper deg å planlegge økonomien.',
    },
    {
      id: 'okonomistyring-8-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr rentesrente?',
      options: [
        { id: 'a', text: 'At renten øker hvert år', isCorrect: false },
        { id: 'b', text: 'At du får rente på renten', isCorrect: true },
        { id: 'c', text: 'At banken tar dobbel rente', isCorrect: false },
        { id: 'd', text: 'At renten er negativ', isCorrect: false },
      ],
      solution: 'Rentesrente betyr at opptjent rente legges til kapitalen og gir ny rente neste periode.',
    },
    {
      id: 'okonomistyring-8-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Du sparer 5 000 kr med 4% rente. Hvor mye har du etter 2 år?',
      options: [
        { id: 'a', text: '5 400 kr', isCorrect: false },
        { id: 'b', text: '5 408 kr', isCorrect: true },
        { id: 'c', text: '5 200 kr', isCorrect: false },
        { id: 'd', text: '5 800 kr', isCorrect: false },
      ],
      solution: 'FV = 5 000 × 1,04² = 5 000 × 1,0816 = 5 408 kr.',
    },
    {
      id: 'okonomistyring-8-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken lånetype har typisk høyest rente?',
      options: [
        { id: 'a', text: 'Boliglån', isCorrect: false },
        { id: 'b', text: 'Billån', isCorrect: false },
        { id: 'c', text: 'Forbrukslån', isCorrect: true },
        { id: 'd', text: 'Studielån', isCorrect: false },
      ],
      solution: 'Forbrukslån og kredittkort har høyest rente fordi de ikke har sikkerhet.',
    },
    {
      id: 'okonomistyring-8-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Ifølge 50/30/20-regelen, hvor mye bør du spare av 20 000 kr i inntekt?',
      options: [
        { id: 'a', text: '10 000 kr', isCorrect: false },
        { id: 'b', text: '6 000 kr', isCorrect: false },
        { id: 'c', text: '4 000 kr', isCorrect: true },
        { id: 'd', text: '2 000 kr', isCorrect: false },
      ],
      solution: '20% av 20 000 = 4 000 kr bør gå til sparing og gjeldsbetaling.',
    },
  ],
};

// ============================================================================
// Kapittel 9: Bedriftsøkonomi
// ============================================================================

export const CHAPTER_OKONOMISTYRING_9: TextbookChapter = {
  id: 'okonomistyring-9',
  courseId: 'okonomistyring',
  chapterNumber: '9',
  title: 'Bedriftsøkonomi',
  description: 'Forstå hvordan bedrifter organiseres og styres økonomisk.',
  estimatedMinutes: 75,
  competenceGoals: [
    'beskrive ulike selskapsformer og deres kjennetegn',
    'forklare bedriftens interessenter og deres rolle',
    'forstå grunnleggende verdiskaping i bedrifter',
  ],
  content: [
    {
      id: 'okonomistyring-9-intro',
      type: 'text',
      content: `Bedriftsøkonomi handler om hvordan virksomheter skaper verdier og styres mot lønnsomhet. I dette kapittelet ser vi på ulike måter å organisere en bedrift på, hvem som har interesser i bedriften, og hvordan verdiskaping foregår.`,
    },
    {
      id: 'okonomistyring-9-def-1',
      type: 'definition',
      title: 'Selskapsformer',
      content: `**Enkeltpersonforetak (ENK)**
- Én eier som har fullt personlig ansvar
- Enkel å starte, ingen krav til kapital
- Eieren beskattes for overskuddet

**Aksjeselskap (AS)**
- Eierne (aksjonærene) har begrenset ansvar (kun innskutt kapital)
- Krav om 30 000 kr i aksjekapital
- Selskapet er eget skattesubjekt

**Ansvarlig selskap (ANS/DA)**
- To eller flere eiere
- Deltakerne har personlig ansvar`,
    },
    {
      id: 'okonomistyring-9-text-1',
      type: 'text',
      title: 'Aksjeselskapets organer',
      content: `**Generalforsamlingen**
- Øverste myndighet, består av aksjonærene
- Velger styre, godkjenner regnskap, beslutter utbytte

**Styret**
- Ansvar for forvaltning og tilsyn
- Fastsetter strategi, ansetter daglig leder

**Daglig leder**
- Ansvar for den daglige driften
- Rapporterer til styret`,
    },
    {
      id: 'okonomistyring-9-def-2',
      type: 'definition',
      title: 'Interessentmodellen',
      content: `Interessenter er alle som påvirker eller påvirkes av bedriftens virksomhet:

- **Eiere**: Ønsker avkastning på investert kapital
- **Ansatte**: Ønsker lønn, trygghet, meningsfullt arbeid
- **Kunder**: Ønsker gode produkter til riktig pris
- **Leverandører**: Ønsker betaling og langsiktige relasjoner
- **Samfunnet**: Ønsker arbeidsplasser, skatteinntekter, miljøhensyn
- **Kreditor**: Ønsker tilbakebetaling av lån`,
    },
    {
      id: 'okonomistyring-9-text-2',
      type: 'text',
      title: 'Verdiskaping',
      content: `Verdiskaping skjer når bedriften omformer ressurser (input) til produkter eller tjenester (output) som har høyere verdi for kundene.

**Verdikjeden:**
1. Innkjøp av råvarer/tjenester
2. Produksjon/bearbeiding
3. Markedsføring og salg
4. Levering til kunde
5. Ettersalgsservice

Bedriften må skape nok verdi til å dekke alle kostnader og gi eierne avkastning.`,
    },
    {
      id: 'okonomistyring-9-example-1',
      type: 'example',
      title: 'Eksempel: Verdiskaping i praksis',
      content: `**Møbelprodusent AS:**

- Kjøper trevirke for 200 kr per stol
- Bruker arbeidskraft og maskiner til å produsere stolen
- Selger ferdig stol for 800 kr

**Verdiskaping = Salgsverdi - Innkjøpte varer = 800 - 200 = 600 kr**

Disse 600 kr skal dekke lønn, husleie, strøm, avskrivninger og gi overskudd til eierne.`,
    },
    {
      id: 'okonomistyring-9-def-3',
      type: 'definition',
      title: 'Forretningsmodell',
      content: `En forretningsmodell beskriver hvordan bedriften skaper, leverer og fanger verdi:

- **Verdiforslag**: Hva tilbyr vi kundene?
- **Kundesegment**: Hvem er kundene våre?
- **Kanaler**: Hvordan når vi kundene?
- **Inntektsstrømmer**: Hvordan tjener vi penger?
- **Ressurser og aktiviteter**: Hva trenger vi for å levere?
- **Kostnadsstruktur**: Hva koster det?`,
    },
    {
      id: 'okonomistyring-9-tip-1',
      type: 'tip',
      content: `**Bærekraftig forretning:** Moderne bedrifter må også ta hensyn til miljø og sosiale forhold (ESG - Environmental, Social, Governance). Dette er viktig for omdømme, rekruttering og langsiktig lønnsomhet.`,
    },
  ],
  exercises: [
    {
      id: 'okonomistyring-9-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva kjennetegner et aksjeselskap (AS)?',
      options: [
        { id: 'a', text: 'Eierne har ubegrenset personlig ansvar', isCorrect: false },
        { id: 'b', text: 'Eierne har begrenset ansvar til innskutt kapital', isCorrect: true },
        { id: 'c', text: 'Det kan bare være én eier', isCorrect: false },
        { id: 'd', text: 'Det kreves ingen startkapital', isCorrect: false },
      ],
      solution: 'I et AS har aksjonærene kun ansvar for det de har skutt inn som aksjekapital.',
    },
    {
      id: 'okonomistyring-9-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er generalforsamlingen i et AS?',
      options: [
        { id: 'a', text: 'De ansattes møte', isCorrect: false },
        { id: 'b', text: 'Aksjonærenes øverste myndighet', isCorrect: true },
        { id: 'c', text: 'Styrets møte', isCorrect: false },
        { id: 'd', text: 'Daglig leders kontor', isCorrect: false },
      ],
      solution: 'Generalforsamlingen er der aksjonærene møtes og tar de viktigste beslutningene.',
    },
    {
      id: 'okonomistyring-9-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva ønsker eierne typisk fra bedriften?',
      options: [
        { id: 'a', text: 'Lavere priser', isCorrect: false },
        { id: 'b', text: 'Avkastning på investert kapital', isCorrect: true },
        { id: 'c', text: 'Flere arbeidsplasser uansett lønnsomhet', isCorrect: false },
        { id: 'd', text: 'Høyere skatter', isCorrect: false },
      ],
      solution: 'Eiere investerer for å få avkastning, enten som utbytte eller verdiøkning.',
    },
    {
      id: 'okonomistyring-9-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er verdiskaping i en bedrift?',
      options: [
        { id: 'a', text: 'Å kjøpe billige råvarer', isCorrect: false },
        { id: 'b', text: 'Å omforme ressurser til produkter med høyere verdi', isCorrect: true },
        { id: 'c', text: 'Å ansette flere folk', isCorrect: false },
        { id: 'd', text: 'Å ta opp mer lån', isCorrect: false },
      ],
      solution: 'Verdiskaping skjer når output er verdt mer enn input for kundene.',
    },
    {
      id: 'okonomistyring-9-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'En bedrift kjøper materialer for 5 000 kr og selger ferdig produkt for 15 000 kr. Hva er verdiskapingen?',
      options: [
        { id: 'a', text: '20 000 kr', isCorrect: false },
        { id: 'b', text: '15 000 kr', isCorrect: false },
        { id: 'c', text: '10 000 kr', isCorrect: true },
        { id: 'd', text: '5 000 kr', isCorrect: false },
      ],
      solution: 'Verdiskaping = Salgsverdi - Innkjøpte varer = 15 000 - 5 000 = 10 000 kr.',
    },
  ],
};

// ============================================================================
// Kapittel 10: Økonomisk analyse og rapportering
// ============================================================================

export const CHAPTER_OKONOMISTYRING_10: TextbookChapter = {
  id: 'okonomistyring-10',
  courseId: 'okonomistyring',
  chapterNumber: '10',
  title: 'Økonomisk analyse og rapportering',
  description: 'Lær å analysere regnskapet og presentere økonomisk informasjon.',
  estimatedMinutes: 90,
  competenceGoals: [
    'beregne og tolke sentrale nøkkeltall',
    'gjennomføre enkel regnskapsanalyse',
    'presentere økonomisk informasjon på en forståelig måte',
  ],
  content: [
    {
      id: 'okonomistyring-10-intro',
      type: 'text',
      content: `Regnskapsanalyse handler om å bruke tall fra regnskapet til å vurdere bedriftens økonomiske situasjon. Ved å beregne nøkkeltall kan vi sammenligne bedrifter og følge utviklingen over tid.`,
    },
    {
      id: 'okonomistyring-10-def-1',
      type: 'definition',
      title: 'Nøkkeltall',
      content: `Nøkkeltall er forholdstall som beregnes fra regnskapet for å vurdere bedriftens:
- **Lønnsomhet**: Tjener bedriften penger?
- **Likviditet**: Kan bedriften betale regningene?
- **Soliditet**: Tåler bedriften tap?
- **Effektivitet**: Bruker bedriften ressursene godt?`,
    },
    {
      id: 'okonomistyring-10-text-1',
      type: 'text',
      title: 'Lønnsomhetstall',
      content: `**Resultatgrad:**
$$\\text{Resultatgrad} = \\frac{\\text{Driftsresultat}}{\\text{Driftsinntekter}} \\times 100\\%$$
Viser hvor mye av hver omsatt krone som blir igjen som driftsresultat.

**Totalkapitalrentabilitet:**
$$\\text{TKR} = \\frac{\\text{Resultat før skatt + rentekostnader}}{\\text{Gjennomsnittlig totalkapital}} \\times 100\\%$$
Viser avkastningen på all kapital i bedriften.

**Egenkapitalrentabilitet:**
$$\\text{EKR} = \\frac{\\text{Årsresultat}}{\\text{Gjennomsnittlig egenkapital}} \\times 100\\%$$
Viser avkastningen til eierne.`,
    },
    {
      id: 'okonomistyring-10-example-1',
      type: 'example',
      title: 'Eksempel: Lønnsomhetsanalyse',
      content: `**Kafe AS:**
- Driftsinntekter: 800 000 kr
- Driftsresultat: 100 000 kr
- Totalkapital: 400 000 kr
- Egenkapital: 150 000 kr
- Årsresultat: 70 000 kr

**Resultatgrad:** 100 000 / 800 000 × 100% = **12,5%**
(Bra for en kafe!)

**EKR:** 70 000 / 150 000 × 100% = **46,7%**
(Meget god avkastning til eierne!)`,
    },
    {
      id: 'okonomistyring-10-def-2',
      type: 'definition',
      title: 'Soliditetstall',
      content: `**Egenkapitalandel:**
$$\\text{Egenkapitalandel} = \\frac{\\text{Egenkapital}}{\\text{Totalkapital}} \\times 100\\%$$

Viser hvor stor del av eiendelene som er finansiert med egenkapital. Bør være minst 30-40%.

**Gjeldsgrad:**
$$\\text{Gjeldsgrad} = \\frac{\\text{Gjeld}}{\\text{Egenkapital}}$$

Viser forholdet mellom gjeld og egenkapital. Lavere er bedre.`,
    },
    {
      id: 'okonomistyring-10-example-2',
      type: 'example',
      title: 'Eksempel: Soliditetsanalyse',
      content: `**Kafe AS:**
- Egenkapital: 150 000 kr
- Totalkapital: 400 000 kr
- Gjeld: 250 000 kr

**Egenkapitalandel:** 150 000 / 400 000 × 100% = **37,5%**
(Akseptabelt nivå)

**Gjeldsgrad:** 250 000 / 150 000 = **1,67**
(Bedriften har 1,67 kr gjeld per krone egenkapital)`,
    },
    {
      id: 'okonomistyring-10-text-2',
      type: 'text',
      title: 'Sammenligning og vurdering',
      content: `Nøkkeltall bør vurderes mot:

1. **Bransjesnitt**: Hva er normalt i denne bransjen?
2. **Historikk**: Hvordan har utviklingen vært over tid?
3. **Konkurrenter**: Hvordan ligger vi an mot de nærmeste konkurrentene?
4. **Mål**: Har vi nådd målene vi satte oss?

Ett enkelt nøkkeltall sier lite alene - det er helheten som teller.`,
    },
    {
      id: 'okonomistyring-10-tip-1',
      type: 'tip',
      content: `**Presentasjon av økonomisk informasjon:**
- Bruk diagrammer og grafer for å visualisere trender
- Forklar hva tallene betyr i praksis
- Sammenlign med relevante referansepunkter
- Vær ærlig om både positive og negative trender`,
    },
    {
      id: 'okonomistyring-10-note-1',
      type: 'note',
      title: 'Begrensninger ved nøkkeltallsanalyse',
      content: `Husk at nøkkeltall har begrensninger:
- De er basert på historiske tall
- Regnskapsregler kan variere
- Engangseffekter kan forvrenge bildet
- De forteller ikke hele historien

Bruk nøkkeltall som utgangspunkt for videre analyse, ikke som endelige svar.`,
    },
  ],
  exercises: [
    {
      id: 'okonomistyring-10-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva viser resultatgraden?',
      options: [
        { id: 'a', text: 'Bedriftens totale omsetning', isCorrect: false },
        { id: 'b', text: 'Hvor mye av omsetningen som blir driftsresultat', isCorrect: true },
        { id: 'c', text: 'Bedriftens egenkapital', isCorrect: false },
        { id: 'd', text: 'Antall ansatte', isCorrect: false },
      ],
      solution: 'Resultatgrad = Driftsresultat / Driftsinntekter. Den viser lønnsomheten per omsatt krone.',
    },
    {
      id: 'okonomistyring-10-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva måler egenkapitalandelen?',
      options: [
        { id: 'a', text: 'Avkastningen til eierne', isCorrect: false },
        { id: 'b', text: 'Hvor stor del av eiendelene som er finansiert med egenkapital', isCorrect: true },
        { id: 'c', text: 'Hvor mye gjeld bedriften har', isCorrect: false },
        { id: 'd', text: 'Bedriftens likviditet', isCorrect: false },
      ],
      solution: 'Egenkapitalandel = Egenkapital / Totalkapital. Den viser soliditeten.',
    },
    {
      id: 'okonomistyring-10-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Driftsresultat er 50 000 og driftsinntekter er 500 000. Hva er resultatgraden?',
      options: [
        { id: 'a', text: '5%', isCorrect: false },
        { id: 'b', text: '10%', isCorrect: true },
        { id: 'c', text: '50%', isCorrect: false },
        { id: 'd', text: '100%', isCorrect: false },
      ],
      solution: 'Resultatgrad = 50 000 / 500 000 × 100% = 10%.',
    },
    {
      id: 'okonomistyring-10-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Egenkapital er 200 000 og totalkapital er 500 000. Hva er egenkapitalandelen?',
      options: [
        { id: 'a', text: '25%', isCorrect: false },
        { id: 'b', text: '40%', isCorrect: true },
        { id: 'c', text: '60%', isCorrect: false },
        { id: 'd', text: '250%', isCorrect: false },
      ],
      solution: 'Egenkapitalandel = 200 000 / 500 000 × 100% = 40%.',
    },
    {
      id: 'okonomistyring-10-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Gjeld er 300 000 og egenkapital er 200 000. Hva er gjeldsgraden?',
      options: [
        { id: 'a', text: '0,67', isCorrect: false },
        { id: 'b', text: '1,5', isCorrect: true },
        { id: 'c', text: '2,5', isCorrect: false },
        { id: 'd', text: '500 000', isCorrect: false },
      ],
      solution: 'Gjeldsgrad = Gjeld / Egenkapital = 300 000 / 200 000 = 1,5.',
    },
    {
      id: 'okonomistyring-10-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Årsresultat er 60 000 og gjennomsnittlig egenkapital er 300 000. Hva er EKR?',
      options: [
        { id: 'a', text: '5%', isCorrect: false },
        { id: 'b', text: '20%', isCorrect: true },
        { id: 'c', text: '50%', isCorrect: false },
        { id: 'd', text: '200%', isCorrect: false },
      ],
      solution: 'EKR = 60 000 / 300 000 × 100% = 20%. Eierne får 20% avkastning på kapitalen.',
    },
  ],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const OKONOMISTYRING_CHAPTERS: TextbookChapter[] = [
  CHAPTER_OKONOMISTYRING_1,
  CHAPTER_OKONOMISTYRING_2,
  CHAPTER_OKONOMISTYRING_3,
  CHAPTER_OKONOMISTYRING_4,
  CHAPTER_OKONOMISTYRING_5,
  CHAPTER_OKONOMISTYRING_6,
  CHAPTER_OKONOMISTYRING_7,
  CHAPTER_OKONOMISTYRING_8,
  CHAPTER_OKONOMISTYRING_9,
  CHAPTER_OKONOMISTYRING_10,
];
