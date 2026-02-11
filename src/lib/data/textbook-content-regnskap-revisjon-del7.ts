/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Regnskap og revisjon (VG3) - Del 7: Regnskapsanalyse
 *
 * Kapittel 7.1–7.5
 *
 * LK20-kompetansemål:
 * - bruke nøkkeltall til å analysere og vurdere lønnsomhet, likviditet og soliditet
 * - gjennomføre en helhetlig regnskapsanalyse og presentere funn
 * - vurdere bedriftens økonomiske stilling med utgangspunkt i regnskapsdata
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: Lønnsomhetsanalyse
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_7_1: TextbookChapter = {
  id: 'regnskap-revisjon-7-1',
  courseId: 'regnskap-revisjon',
  chapterNumber: '7.1',
  title: 'Lønnsomhetsanalyse',
  description: 'Analyse av bedriftens evne til å skape overskudd gjennom nøkkeltallene resultatgrad, totalkapitalrentabilitet (TKR), egenkapitalrentabilitet (EKR) og bruttofortjeneste.',
  estimatedMinutes: 24,
  competenceGoals: [
    'Beregne og tolke sentrale lønnsomhetsnøkkeltall',
    'Vurdere bedriftens inntjeningsevne med utgangspunkt i regnskapet',
    'Sammenligne lønnsomhet over tid og mot bransjetall',
  ],
  content: [
    {
      id: 'rr-7-1-intro',
      type: 'text',
      content: `## Hva er lønnsomhetsanalyse?

Lønnsomhetsanalyse handler om å vurdere hvor godt en bedrift klarer å skape overskudd i forhold til inntektene og kapitalen som er bundet i virksomheten. Selv om en bedrift har positivt resultat, er det ikke nødvendigvis godt nok dersom avkastningen er lavere enn hva eierne kunne oppnådd ved alternative plasseringer.

I dette kapittelet lærer du å beregne og tolke fire sentrale nøkkeltall:
- **Resultatgrad** – hvor mye av hver omsatte krone som blir til resultat
- **Totalkapitalrentabilitet (TKR)** – avkastning på all kapital i bedriften
- **Egenkapitalrentabilitet (EKR)** – avkastning på eiernes investerte kapital
- **Bruttofortjeneste** – hvor stor andel av salgsinntektene som dekker varekostnaden`,
    },
    {
      id: 'rr-7-1-def-resultatgrad',
      type: 'definition',
      title: 'Resultatgrad',
      content: `**Resultatgrad** viser hvor stor andel av driftsinntektene som blir igjen som ordinært resultat før skatt. Formelen er:

$$\\text{Resultatgrad} = \\frac{\\text{Ordinært resultat før skatt}}{\\text{Driftsinntekter}} \\times 100\\%$$

En resultatgrad på 8 % betyr at bedriften sitter igjen med 8 kroner for hver 100 kroner i omsetning, etter at alle kostnader unntatt skatt er trukket fra.`,
    },
    {
      id: 'rr-7-1-def-tkr',
      type: 'definition',
      title: 'Totalkapitalrentabilitet (TKR)',
      content: `**Totalkapitalrentabilitet (TKR)** måler avkastningen på all kapital som er investert i bedriften, uavhengig av om den er finansiert med egenkapital eller gjeld. Formelen er:

$$\\text{TKR} = \\frac{\\text{Ordinært resultat før skatt} + \\text{Rentekostnader}}{\\text{Gjennomsnittlig totalkapital}} \\times 100\\%$$

Rentekostnader legges til i telleren fordi TKR skal vise avkastningen på all kapital, og rentekostnader er godtgjørelse til fremmedkapitalen. En TKR på 12 % betyr at bedriften genererer 12 kroner i avkastning for hver 100 kroner investert.`,
    },
    {
      id: 'rr-7-1-def-ekr',
      type: 'definition',
      title: 'Egenkapitalrentabilitet (EKR)',
      content: `**Egenkapitalrentabilitet (EKR)** måler avkastningen eierne får på kapitalen de har investert. Formelen er:

$$\\text{EKR} = \\frac{\\text{Ordinært resultat etter skatt}}{\\text{Gjennomsnittlig egenkapital}} \\times 100\\%$$

En EKR på 15 % betyr at eierne får 15 kroner i avkastning for hver 100 kroner de har investert. EKR bør som minimum overstige det eierne kunne fått ved alternative plasseringer med tilsvarende risiko.`,
    },
    {
      id: 'rr-7-1-def-brutto',
      type: 'definition',
      title: 'Bruttofortjeneste',
      content: `**Bruttofortjeneste** (også kalt dekningsgrad i handelsbedrifter) viser hvor stor del av salgsinntektene som er igjen etter at varekostnaden er trukket fra:

$$\\text{Bruttofortjeneste} = \\frac{\\text{Salgsinntekter} - \\text{Varekostnad}}{\\text{Salgsinntekter}} \\times 100\\%$$

En bruttofortjeneste på 40 % betyr at 40 kroner av hver 100-lapp i salg går til å dekke andre kostnader og gi overskudd.`,
    },
    {
      id: 'rr-7-1-example-1',
      type: 'example',
      title: 'Beregning av lønnsomhetsnøkkeltall',
      problem: `Nordfjord Handel AS har følgende tall fra regnskapet:

| Post | Beløp (kr) |
|------|-----------|
| Salgsinntekter | 8 000 000 |
| Varekostnad | 4 800 000 |
| Andre driftskostnader | 2 200 000 |
| Rentekostnader | 180 000 |
| Ordinært resultat før skatt | 820 000 |
| Skattekostnad | 180 400 |
| Gjennomsnittlig totalkapital | 6 500 000 |
| Gjennomsnittlig egenkapital | 2 800 000 |

Beregn resultatgrad, TKR, EKR og bruttofortjeneste.`,
      solution: `**Resultatgrad:**
$$\\frac{820\\,000}{8\\,000\\,000} \\times 100\\% = 10{,}25\\%$$

**Totalkapitalrentabilitet (TKR):**
$$\\frac{820\\,000 + 180\\,000}{6\\,500\\,000} \\times 100\\% = \\frac{1\\,000\\,000}{6\\,500\\,000} \\times 100\\% = 15{,}4\\%$$

**Egenkapitalrentabilitet (EKR):**
$$\\frac{820\\,000 - 180\\,400}{2\\,800\\,000} \\times 100\\% = \\frac{639\\,600}{2\\,800\\,000} \\times 100\\% = 22{,}8\\%$$

**Bruttofortjeneste:**
$$\\frac{8\\,000\\,000 - 4\\,800\\,000}{8\\,000\\,000} \\times 100\\% = \\frac{3\\,200\\,000}{8\\,000\\,000} \\times 100\\% = 40\\%$$

**Tolkning:** Resultatgraden på 10,25 % er solid. TKR på 15,4 % er godt over risikofri rente, og EKR på 22,8 % viser at eierne får god avkastning. Bruttofortjenesten på 40 % gir tilstrekkelig rom til å dekke driftskostnader og generere overskudd.`,
    },
    {
      id: 'rr-7-1-note-1',
      type: 'note',
      title: 'Gjennomsnittlig kapital',
      content: `Når du beregner TKR og EKR bruker du **gjennomsnittlig** kapital, som regel beregnet som:

$$\\text{Gjennomsnittlig kapital} = \\frac{\\text{IB} + \\text{UB}}{2}$$

der IB er inngående balanse (starten av året) og UB er utgående balanse (slutten av året). Dette gir et mer representativt bilde enn å bruke kun årets sluttbalanse.`,
    },
    {
      id: 'rr-7-1-tip-1',
      type: 'tip',
      title: 'Sammenhengen mellom TKR og EKR',
      content: `Hvis TKR er høyere enn gjennomsnittlig lånerente, vil EKR stige jo mer gjeld bedriften har. Dette kalles **positiv gearingeffekt** (finansiell gearing). Omvendt, dersom lånerenten overstiger TKR, vil økt gjeld trekke EKR ned. Derfor er det viktig å se TKR og EKR i sammenheng med bedriftens gjeldsstruktur.`,
    },
    {
      id: 'rr-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rr-7-1-ex-1',
        number: '7.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'En bedrift har ordinært resultat før skatt på 600 000 kr og driftsinntekter på 5 000 000 kr. Hva er resultatgraden?',
        options: [
          { id: 'a', text: '8,3 %', isCorrect: false },
          { id: 'b', text: '12,0 %', isCorrect: true },
          { id: 'c', text: '10,0 %', isCorrect: false },
          { id: 'd', text: '15,0 %', isCorrect: false },
        ],
        solution: 'Resultatgrad = 600 000 / 5 000 000 x 100 % = 12,0 %. Svaret er B.',
      },
    },
    {
      id: 'rr-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rr-7-1-ex-2',
        number: '7.1.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Havbris Sjømat AS har følgende regnskapstall:\n\n| Post | Beløp |\n|------|-------|\n| Salgsinntekter | 12 000 000 kr |\n| Varekostnad | 7 200 000 kr |\n| Driftskostnader (ekskl. varekostnad) | 3 500 000 kr |\n| Rentekostnader | 250 000 kr |\n| Skattekostnad | 231 000 kr |\n| Totalkapital 01.01 | 9 000 000 kr |\n| Totalkapital 31.12 | 11 000 000 kr |\n| Egenkapital 01.01 | 3 500 000 kr |\n| Egenkapital 31.12 | 4 500 000 kr |',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn bruttofortjenesten.',
            solution: 'Bruttofortjeneste = (12 000 000 - 7 200 000) / 12 000 000 x 100 % = 4 800 000 / 12 000 000 x 100 % = 40 %',
          },
          {
            label: 'b',
            task: 'Beregn resultatgraden.',
            solution: 'Ordinært resultat før skatt = 12 000 000 - 7 200 000 - 3 500 000 - 250 000 = 1 050 000 kr. Resultatgrad = 1 050 000 / 12 000 000 x 100 % = 8,75 %',
          },
          {
            label: 'c',
            task: 'Beregn TKR og EKR.',
            solution: 'Gjennomsnittlig totalkapital = (9 000 000 + 11 000 000) / 2 = 10 000 000 kr. TKR = (1 050 000 + 250 000) / 10 000 000 x 100 % = 13,0 %. Gjennomsnittlig EK = (3 500 000 + 4 500 000) / 2 = 4 000 000 kr. Resultat etter skatt = 1 050 000 - 231 000 = 819 000 kr. EKR = 819 000 / 4 000 000 x 100 % = 20,5 %.',
          },
        ],
        hints: ['Husk å bruke gjennomsnittlig kapital for TKR og EKR', 'Rentekostnader legges til i TKR-telleren'],
        solution: 'Se deloppgavene over. Samlet viser nøkkeltallene at Havbris Sjømat AS har god lønnsomhet, med en TKR godt over risikofri rente og en EKR som gir eierne god avkastning.',
      },
    },
    {
      id: 'rr-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rr-7-1-ex-3',
        number: '7.1.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor legger vi rentekostnader til i telleren når vi beregner totalkapitalrentabilitet (TKR)?',
        options: [
          { id: 'a', text: 'Fordi rentekostnader er en del av driftskostnadene', isCorrect: false },
          { id: 'b', text: 'Fordi TKR skal vise avkastning på all kapital, og renter er avkastning til fremmedkapitalen', isCorrect: true },
          { id: 'c', text: 'Fordi rentekostnader alltid er skattefradragsberettigede', isCorrect: false },
          { id: 'd', text: 'Fordi det gir et høyere og mer positivt nøkkeltall', isCorrect: false },
        ],
        solution: 'Svaret er B. TKR måler avkastningen på all investert kapital, uavhengig av finansieringsform. Rentekostnader representerer avkastningen til lånegiverne (fremmedkapitalen), og må derfor legges til det ordinære resultatet for å vise den samlede avkastningen.',
      },
    },
    {
      id: 'rr-7-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rr-7-1-ex-4',
        number: '7.1.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva positiv gearingeffekt innebærer, og gi et enkelt talleksempel som viser hvordan økt gjeld kan øke EKR når TKR er høyere enn lånerenten.',
        hints: ['Tenk på hva som skjer med eiernes avkastning når bedriften låner penger til en rente som er lavere enn det kapitalen avkaster'],
        solution: 'Positiv gearingeffekt betyr at EKR øker når bedriften finansierer seg med gjeld til en rente lavere enn TKR. Eksempel: En bedrift har totalkapital 1 000 000 kr og TKR = 12 %. Avkastning = 120 000 kr. Med 100 % EK: EKR = 120 000 / 1 000 000 = 12 %. Med 500 000 EK og 500 000 gjeld til 6 % rente: Resultat til eier = 120 000 - 30 000 = 90 000 kr. EKR = 90 000 / 500 000 = 18 %. Gjelden økte EKR fra 12 % til 18 %.',
      },
    },
    {
      id: 'rr-7-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rr-7-1-ex-5',
        number: '7.1.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Diskuter hvorfor en bedrift med høy bruttofortjeneste likevel kan ha lav resultatgrad. Gi minst to eksempler på forhold som kan forklare dette.',
        solution: 'En høy bruttofortjeneste viser at marginen mellom salgspris og varekostnad er god, men resultatgraden kan likevel være lav dersom: 1) Bedriften har høye lønnskostnader (f.eks. mange ansatte i rådgivning/service). 2) Store avskrivninger på anleggsmidler (f.eks. dyre maskiner). 3) Høye markedsføringskostnader for å opprettholde salget. 4) Høye husleiekostnader i sentrale lokaler. Bruttofortjeneste viser kun forholdet mellom salg og varekostnad, mens resultatgraden tar hensyn til alle kostnader.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Resultatgrad', definition: 'Ordinært resultat før skatt i prosent av driftsinntektene' },
    { term: 'Totalkapitalrentabilitet (TKR)', definition: 'Avkastning på all investert kapital, beregnet som (resultat + renter) / gjennomsnittlig totalkapital' },
    { term: 'Egenkapitalrentabilitet (EKR)', definition: 'Avkastning på eiernes kapital, beregnet som resultat etter skatt / gjennomsnittlig egenkapital' },
    { term: 'Bruttofortjeneste', definition: 'Salgsinntekter minus varekostnad i prosent av salgsinntektene' },
    { term: 'Gearingeffekt', definition: 'Effekten av gjeldsfinansiering på egenkapitalrentabiliteten' },
    { term: 'Gjennomsnittlig kapital', definition: 'Gjennomsnittet av inngående og utgående balanse for en periode' },
  ],
};

// ============================================================================
// Kapittel 7.2: Likviditetsanalyse
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_7_2: TextbookChapter = {
  id: 'regnskap-revisjon-7-2',
  courseId: 'regnskap-revisjon',
  chapterNumber: '7.2',
  title: 'Likviditetsanalyse',
  description: 'Analyse av bedriftens betalingsevne gjennom likviditetsgrad 1, likviditetsgrad 2, arbeidskapital og kontantstrømanalyse.',
  estimatedMinutes: 22,
  competenceGoals: [
    'Beregne og tolke likviditetsgrad 1 og 2',
    'Forstå begrepet arbeidskapital og dets betydning',
    'Vurdere bedriftens betalingsevne ut fra kontantstrømanalyse',
  ],
  content: [
    {
      id: 'rr-7-2-intro',
      type: 'text',
      content: `## Hva er likviditetsanalyse?

Likviditetsanalyse handler om å vurdere bedriftens evne til å betale sine forpliktelser etter hvert som de forfaller. En bedrift kan ha god lønnsomhet, men likevel gå konkurs dersom den mangler likvide midler til å betale regninger, lønn og avdrag.

Likviditet dreier seg om det kortsiktige perspektivet: har bedriften nok kontanter og lett omsettelige eiendeler til å dekke den kortsiktige gjelden? De viktigste verktøyene er:
- **Likviditetsgrad 1 (LG1)** – forholdet mellom omløpsmidler og kortsiktig gjeld
- **Likviditetsgrad 2 (LG2)** – de mest likvide omløpsmidlene mot kortsiktig gjeld
- **Arbeidskapital** – bufferen mellom omløpsmidler og kortsiktig gjeld
- **Kontantstrømanalyse** – oversikt over faktisk pengestrøm inn og ut`,
    },
    {
      id: 'rr-7-2-def-lg1',
      type: 'definition',
      title: 'Likviditetsgrad 1 (LG1)',
      content: `**Likviditetsgrad 1** viser forholdet mellom alle omløpsmidler og kortsiktig gjeld:

$$\\text{LG1} = \\frac{\\text{Omløpsmidler}}{\\text{Kortsiktig gjeld}}$$

Tommelfingerregelen er at LG1 bør være **minst 2**, altså at omløpsmidlene er dobbelt så store som den kortsiktige gjelden. En LG1 under 1 betyr at bedriften har mer kortsiktig gjeld enn omløpsmidler, noe som er et faresignal.`,
    },
    {
      id: 'rr-7-2-def-lg2',
      type: 'definition',
      title: 'Likviditetsgrad 2 (LG2)',
      content: `**Likviditetsgrad 2** er en strengere test fordi varelageret trekkes fra omløpsmidlene. Varelager kan være vanskelig å omsette raskt til kontanter:

$$\\text{LG2} = \\frac{\\text{Omløpsmidler} - \\text{Varelager}}{\\text{Kortsiktig gjeld}}$$

Tommelfingerregelen er at LG2 bør være **minst 1**. LG2 kalles også «acid test» eller «quick ratio» og gir et strengere bilde av betalingsevnen enn LG1.`,
    },
    {
      id: 'rr-7-2-def-arbeidskapital',
      type: 'definition',
      title: 'Arbeidskapital',
      content: `**Arbeidskapital** er differansen mellom omløpsmidler og kortsiktig gjeld:

$$\\text{Arbeidskapital} = \\text{Omløpsmidler} - \\text{Kortsiktig gjeld}$$

Positiv arbeidskapital betyr at en del av omløpsmidlene er finansiert med langsiktig kapital, noe som gir en buffer. Negativ arbeidskapital er et faresignal og betyr at kortsiktig gjeld finansierer deler av anleggsmidlene.`,
    },
    {
      id: 'rr-7-2-text-kontantstrom',
      type: 'text',
      title: 'Kontantstrømanalyse',
      content: `Mens likviditetsgrad 1 og 2 gir et øyeblikksbilde av balansen, viser **kontantstrømanalysen** den faktiske pengestrømmen gjennom året. Den deles inn i tre hovedområder:

**1. Kontantstrøm fra drift**
Penger som kommer inn og ut gjennom den daglige virksomheten: innbetalinger fra kunder, utbetalinger til leverandører, lønn og avgifter. Dette er den viktigste kilden til likviditet.

**2. Kontantstrøm fra investeringer**
Kjøp og salg av anleggsmidler (maskiner, eiendom, aksjer). Investeringer gir normalt negativ kontantstrøm på kort sikt, men skal generere avkastning over tid.

**3. Kontantstrøm fra finansiering**
Opptak og nedbetaling av lån, emisjoner og utbytte. Netto finansiering viser om bedriften tilføres eller tappes for kapital.

En sunn bedrift har **positiv kontantstrøm fra drift** som finansierer investeringer og gjeldsnedbetaling.`,
    },
    {
      id: 'rr-7-2-example-1',
      type: 'example',
      title: 'Beregning av likviditetsnøkkeltall',
      problem: `Vestland Bygg AS har følgende balansedata per 31.12:

| Post | Beløp (kr) |
|------|-----------|
| Bankinnskudd | 450 000 |
| Kundefordringer | 1 200 000 |
| Varelager | 800 000 |
| Andre omløpsmidler | 150 000 |
| Kortsiktig gjeld | 1 300 000 |

Beregn LG1, LG2 og arbeidskapital.`,
      solution: `**Omløpsmidler totalt:** 450 000 + 1 200 000 + 800 000 + 150 000 = 2 600 000 kr

**LG1:**
$$\\frac{2\\,600\\,000}{1\\,300\\,000} = 2{,}0$$

**LG2:**
$$\\frac{2\\,600\\,000 - 800\\,000}{1\\,300\\,000} = \\frac{1\\,800\\,000}{1\\,300\\,000} = 1{,}38$$

**Arbeidskapital:**
$$2\\,600\\,000 - 1\\,300\\,000 = 1\\,300\\,000 \\text{ kr}$$

**Tolkning:** LG1 = 2,0 er akkurat på tommelfingerregelen. LG2 = 1,38 er over minstekravet på 1. Arbeidskapitalen er positiv med 1,3 mill. kr, noe som gir en rimelig buffer. Samlet sett har bedriften tilfredsstillende likviditet.`,
    },
    {
      id: 'rr-7-2-warning-1',
      type: 'warning',
      title: 'Likviditetsgradens begrensninger',
      content: `Likviditetsgrad 1 og 2 er øyeblikksbilder basert på balansen på en bestemt dato. De sier ingenting om hva som skjer dagen etter. Store innbetalinger eller utbetalinger like etter balansedagen kan endre bildet dramatisk. Derfor bør likviditetsgradene alltid suppleres med en kontantstrømanalyse og likviditetsbudsjett.`,
    },
    {
      id: 'rr-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rr-7-2-ex-1',
        number: '7.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'En bedrift har omløpsmidler på 3 000 000 kr, varelager på 1 000 000 kr og kortsiktig gjeld på 2 000 000 kr. Hva er LG2?',
        options: [
          { id: 'a', text: '1,5', isCorrect: false },
          { id: 'b', text: '2,0', isCorrect: false },
          { id: 'c', text: '1,0', isCorrect: true },
          { id: 'd', text: '0,5', isCorrect: false },
        ],
        solution: 'LG2 = (Omløpsmidler - Varelager) / Kortsiktig gjeld = (3 000 000 - 1 000 000) / 2 000 000 = 2 000 000 / 2 000 000 = 1,0. Svaret er C.',
      },
    },
    {
      id: 'rr-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rr-7-2-ex-2',
        number: '7.2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Kystfisk AS har følgende balansedata:\n\n| Post | 01.01 | 31.12 |\n|------|-------|-------|\n| Bankinnskudd | 300 000 | 180 000 |\n| Kundefordringer | 900 000 | 1 400 000 |\n| Varelager | 600 000 | 750 000 |\n| Kortsiktig gjeld | 1 000 000 | 1 500 000 |',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn LG1 og LG2 per 31.12.',
            solution: 'Omløpsmidler 31.12 = 180 000 + 1 400 000 + 750 000 = 2 330 000 kr. LG1 = 2 330 000 / 1 500 000 = 1,55. LG2 = (2 330 000 - 750 000) / 1 500 000 = 1 580 000 / 1 500 000 = 1,05.',
          },
          {
            label: 'b',
            task: 'Beregn arbeidskapitalen per 01.01 og 31.12. Kommenter utviklingen.',
            solution: 'AK 01.01 = (300 000 + 900 000 + 600 000) - 1 000 000 = 800 000 kr. AK 31.12 = 2 330 000 - 1 500 000 = 830 000 kr. Arbeidskapitalen er relativt stabil, men sammensetningen har endret seg: bankinnskuddet har falt kraftig mens kundefordringene har økt. Dette kan tyde på at kunder bruker lengre tid på å betale.',
          },
        ],
        hints: ['Husk at arbeidskapital = omløpsmidler minus kortsiktig gjeld'],
        solution: 'Likviditetsgradene er tilfredsstillende, men utviklingen med fallende bankinnskudd og voksende kundefordringer er bekymringsfull. Bedriften bør følge opp inkasso og vurdere strengere betalingsvilkår.',
      },
    },
    {
      id: 'rr-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rr-7-2-ex-3',
        number: '7.2.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er det viktigste faresignalet i en kontantstrømanalyse?',
        options: [
          { id: 'a', text: 'Positiv kontantstrøm fra finansiering', isCorrect: false },
          { id: 'b', text: 'Negativ kontantstrøm fra investeringer', isCorrect: false },
          { id: 'c', text: 'Negativ kontantstrøm fra drift over flere perioder', isCorrect: true },
          { id: 'd', text: 'Negativ kontantstrøm fra finansiering', isCorrect: false },
        ],
        solution: 'Svaret er C. Negativ kontantstrøm fra drift betyr at bedriften bruker mer penger enn den tjener gjennom den daglige virksomheten. Hvis dette vedvarer over flere perioder, tærer bedriften på reservene og er avhengig av lånopptak eller kapitalinnskudd for å overleve.',
      },
    },
    {
      id: 'rr-7-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rr-7-2-ex-4',
        number: '7.2.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor en bedrift med god lønnsomhet likevel kan ha likviditetsproblemer. Gi to konkrete eksempler.',
        solution: 'En lønnsom bedrift kan ha likviditetsproblemer dersom: 1) Rask vekst binder mye kapital i varelager og kundefordringer uten at kontantstrømmen henger med. Bedriften tjener penger «på papiret» men mangler kontanter. 2) Store investeringer i anleggsmidler (ny maskin, nytt bygg) tapper kontantbeholdningen selv om investeringen er lønnsom over tid. 3) Kundene betaler sent (lange kredittider) mens leverandørene krever rask betaling. 4) Store avdrag på lån forfaller samtidig.',
      },
    },
    {
      id: 'rr-7-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rr-7-2-ex-5',
        number: '7.2.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft svakheter ved å kun bruke likviditetsgrad 1 og 2 som mål på betalingsevne. Hvilke tilleggsinformasjoner bør du se på?',
        solution: 'Svakheter: 1) Øyeblikksbilde – viser kun situasjonen på balansedagen. 2) Tar ikke hensyn til når fordringer og gjeld faktisk forfaller. 3) Varelager kan være vanskelig å realisere til bokført verdi. 4) Kundefordringer kan inneholde usikre fordringer. Tilleggsinformasjon: Kontantstrømanalyse, likviditetsbudsjett, aldersfordeling på kundefordringer, forfallsstruktur på kortsiktig gjeld og eventuelle ubenyttede kassakreditter.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Likviditetsgrad 1 (LG1)', definition: 'Omløpsmidler delt på kortsiktig gjeld. Bør være minst 2.' },
    { term: 'Likviditetsgrad 2 (LG2)', definition: 'Omløpsmidler minus varelager, delt på kortsiktig gjeld. Bør være minst 1.' },
    { term: 'Arbeidskapital', definition: 'Omløpsmidler minus kortsiktig gjeld. Positiv arbeidskapital gir en buffer.' },
    { term: 'Kontantstrømanalyse', definition: 'Oversikt over faktiske inn- og utbetalinger fordelt på drift, investering og finansiering' },
    { term: 'Kontantstrøm fra drift', definition: 'Pengestrøm fra den daglige virksomheten, den viktigste kilden til likviditet' },
  ],
};

// ============================================================================
// Kapittel 7.3: Soliditetsanalyse
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_7_3: TextbookChapter = {
  id: 'regnskap-revisjon-7-3',
  courseId: 'regnskap-revisjon',
  chapterNumber: '7.3',
  title: 'Soliditetsanalyse',
  description: 'Analyse av bedriftens langsiktige finansielle styrke gjennom egenkapitalandel, gjeldsgrad, rentedekningsgrad og vurdering av finansiell risiko.',
  estimatedMinutes: 22,
  competenceGoals: [
    'Beregne og tolke nøkkeltall for soliditet',
    'Vurdere bedriftens finansielle risiko og evne til å tåle tap',
    'Forstå sammenhengen mellom soliditet og finansiell risiko',
  ],
  content: [
    {
      id: 'rr-7-3-intro',
      type: 'text',
      content: `## Hva er soliditetsanalyse?

Soliditetsanalyse handler om å vurdere bedriftens langsiktige finansielle styrke og evne til å tåle tap. Mens likviditetsanalyse ser på det kortsiktige perspektivet, ser soliditetsanalysen på bedriftens finansieringsstruktur og hvor robust den er over tid.

En bedrift med god soliditet har en sunn balanse mellom egenkapital og gjeld, og kan tåle perioder med tap uten å bli insolvent. De sentrale nøkkeltallene er:
- **Egenkapitalandel** – hvor stor del av kapitalen som er eiernes egne midler
- **Gjeldsgrad** – forholdet mellom gjeld og egenkapital
- **Rentedekningsgrad** – evnen til å betjene rentekostnadene`,
    },
    {
      id: 'rr-7-3-def-ekandel',
      type: 'definition',
      title: 'Egenkapitalandel',
      content: `**Egenkapitalandel** viser hvor stor andel av totalkapitalen som er finansiert med egenkapital:

$$\\text{Egenkapitalandel} = \\frac{\\text{Egenkapital}}{\\text{Totalkapital}} \\times 100\\%$$

En høy egenkapitalandel gir bedriften en buffer mot tap. Tommelfingerregelen er at egenkapitalandelen bør være **minst 30–35 %** for at bedriften skal anses som solid. I kapitalintensive bransjer (industri, eiendom) forventes gjerne en noe høyere andel.`,
    },
    {
      id: 'rr-7-3-def-gjeldsgrad',
      type: 'definition',
      title: 'Gjeldsgrad',
      content: `**Gjeldsgrad** viser forholdet mellom gjeld og egenkapital:

$$\\text{Gjeldsgrad} = \\frac{\\text{Total gjeld}}{\\text{Egenkapital}}$$

En gjeldsgrad på 2 betyr at bedriften har dobbelt så mye gjeld som egenkapital. Jo lavere gjeldsgrad, desto mer solid er bedriften. Gjeldsgraden er den «omvendte» av egenkapitalandelen og gir et bilde av samme forhold sett fra gjeldsiden.`,
    },
    {
      id: 'rr-7-3-def-rentedekn',
      type: 'definition',
      title: 'Rentedekningsgrad',
      content: `**Rentedekningsgrad** viser hvor mange ganger bedriften kan dekke rentekostnadene med det ordinære resultatet:

$$\\text{Rentedekningsgrad} = \\frac{\\text{Ordinært resultat før skatt} + \\text{Rentekostnader}}{\\text{Rentekostnader}}$$

En rentedekningsgrad på 5 betyr at bedriften kan dekke rentekostnadene fem ganger med det den tjener. Nøkkeltallet bør ligge **godt over 1**, gjerne over 3. Under 1 betyr at bedriften ikke tjener nok til å betale rentene sine.`,
    },
    {
      id: 'rr-7-3-text-risiko',
      type: 'text',
      title: 'Finansiell risiko',
      content: `Soliditetsnøkkeltallene sier noe om bedriftens **finansielle risiko**. Finansiell risiko handler om faren for at bedriften ikke klarer å betjene gjelden sin, og i verste fall går konkurs.

**Faktorer som påvirker finansiell risiko:**
- **Egenkapitalandel:** Lav egenkapitalandel gir liten buffer mot tap
- **Gjeldssammensetning:** Mye kortsiktig gjeld er mer risikabelt enn langsiktig
- **Rentebinding:** Flytende rente gir usikkerhet ved renteoppgang
- **Inntektsstabilitet:** Stabile inntekter tåler høyere gjeld enn volatile inntekter
- **Sikkerhet:** Pantsatte eiendeler som kan dekke gjeld ved mislighold

En bedrift i en stabil bransje (f.eks. dagligvare) kan normalt operere med lavere egenkapitalandel enn en bedrift i en syklisk bransje (f.eks. bygg og anlegg).`,
    },
    {
      id: 'rr-7-3-example-1',
      type: 'example',
      title: 'Beregning av soliditetsnøkkeltall',
      problem: `Fjordkraft Industri AS har følgende balansedata:

| Post | Beløp (kr) |
|------|-----------|
| Totalkapital | 15 000 000 |
| Egenkapital | 5 250 000 |
| Total gjeld | 9 750 000 |
| Ordinært resultat før skatt | 1 600 000 |
| Rentekostnader | 480 000 |

Beregn egenkapitalandel, gjeldsgrad og rentedekningsgrad.`,
      solution: `**Egenkapitalandel:**
$$\\frac{5\\,250\\,000}{15\\,000\\,000} \\times 100\\% = 35\\%$$

**Gjeldsgrad:**
$$\\frac{9\\,750\\,000}{5\\,250\\,000} = 1{,}86$$

**Rentedekningsgrad:**
$$\\frac{1\\,600\\,000 + 480\\,000}{480\\,000} = \\frac{2\\,080\\,000}{480\\,000} = 4{,}33$$

**Tolkning:** Egenkapitalandelen på 35 % er akkurat innenfor tommelfingerregelen. Gjeldsgraden på 1,86 betyr at bedriften har nesten dobbelt så mye gjeld som egenkapital. Rentedekningsgraden på 4,33 er god og viser at bedriften har god evne til å betjene rentekostnadene. Samlet sett har bedriften akseptabel soliditet, men den har begrenset margin dersom resultatene skulle falle.`,
    },
    {
      id: 'rr-7-3-warning-1',
      type: 'warning',
      title: 'Egenkapital under halvparten av aksjekapitalen',
      content: `Aksjeloven krever at styret skal handle dersom egenkapitalen faller under halvparten av aksjekapitalen. Styret må da innkalle generalforsamling og foreslå tiltak, for eksempel emisjon, endring av drift eller oppløsning. Brudd på handleplikten kan medføre personlig erstatningsansvar for styremedlemmene.`,
    },
    {
      id: 'rr-7-3-note-1',
      type: 'note',
      title: 'Sammenhengen mellom soliditet og likviditet',
      content: `God soliditet gir normalt bedre tilgang til kreditt og lavere rente, noe som styrker likviditeten. En bedrift med høy egenkapitalandel kan lettere ta opp nye lån ved behov. Omvendt vil dårlig soliditet gjøre det vanskelig å refinansiere gjeld, noe som kan utløse likviditetsproblemer selv om den underliggende driften er lønnsom.`,
    },
    {
      id: 'rr-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rr-7-3-ex-1',
        number: '7.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'En bedrift har egenkapital på 4 000 000 kr og totalkapital på 10 000 000 kr. Hva er egenkapitalandelen?',
        options: [
          { id: 'a', text: '25 %', isCorrect: false },
          { id: 'b', text: '40 %', isCorrect: true },
          { id: 'c', text: '60 %', isCorrect: false },
          { id: 'd', text: '2,5', isCorrect: false },
        ],
        solution: 'Egenkapitalandel = 4 000 000 / 10 000 000 x 100 % = 40 %. Svaret er B.',
      },
    },
    {
      id: 'rr-7-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rr-7-3-ex-2',
        number: '7.3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Trollfjord Mekaniske AS har følgende tall:\n\n| Post | 2023 | 2024 |\n|------|------|------|\n| Egenkapital | 6 000 000 | 4 200 000 |\n| Total gjeld | 9 000 000 | 11 800 000 |\n| Ordinært resultat før skatt | 1 200 000 | 400 000 |\n| Rentekostnader | 540 000 | 720 000 |',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn egenkapitalandel og gjeldsgrad for begge år.',
            solution: '2023: Totalkapital = 6 000 000 + 9 000 000 = 15 000 000. EK-andel = 6 000 000 / 15 000 000 = 40 %. Gjeldsgrad = 9 000 000 / 6 000 000 = 1,5. 2024: Totalkapital = 4 200 000 + 11 800 000 = 16 000 000. EK-andel = 4 200 000 / 16 000 000 = 26,3 %. Gjeldsgrad = 11 800 000 / 4 200 000 = 2,81.',
          },
          {
            label: 'b',
            task: 'Beregn rentedekningsgraden for begge år.',
            solution: '2023: (1 200 000 + 540 000) / 540 000 = 1 740 000 / 540 000 = 3,22. 2024: (400 000 + 720 000) / 720 000 = 1 120 000 / 720 000 = 1,56.',
          },
          {
            label: 'c',
            task: 'Vurder utviklingen i soliditet og kommenter bedriftens finansielle risiko.',
            solution: 'Soliditeten har svekket seg betydelig fra 2023 til 2024. Egenkapitalandelen har falt fra 40 % til 26,3 %, godt under tommelfingerregelen på 30-35 %. Gjeldsgraden har økt fra 1,5 til 2,81. Rentedekningsgraden har falt fra 3,22 til 1,56, som er bekymringsverdig lavt. Den finansielle risikoen er vesentlig høyere i 2024: svakere resultat, økt gjeld og rentekostnader gjør bedriften sårbar for ytterligere resultatfall.',
          },
        ],
        solution: 'Utviklingen viser en bedrift som er i ferd med å komme i en vanskelig finansiell situasjon. Styret bør vurdere tiltak for å styrke soliditeten.',
      },
    },
    {
      id: 'rr-7-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rr-7-3-ex-3',
        number: '7.3.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr en rentedekningsgrad på 0,8?',
        options: [
          { id: 'a', text: 'Bedriften kan dekke 80 % av gjelden sin', isCorrect: false },
          { id: 'b', text: 'Bedriften tjener ikke nok til å dekke rentekostnadene', isCorrect: true },
          { id: 'c', text: 'Bedriften har 80 % egenkapitalandel', isCorrect: false },
          { id: 'd', text: 'Bedriften har en gjeldsgrad på 0,8', isCorrect: false },
        ],
        solution: 'Svaret er B. En rentedekningsgrad under 1 betyr at bedriftens ordinære resultat pluss rentekostnader ikke er tilstrekkelig til å dekke rentekostnadene alene. Det vil si at bedriften drives med tap som er større enn rentekostnadene.',
      },
    },
    {
      id: 'rr-7-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rr-7-3-ex-4',
        number: '7.3.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor en bedrift i dagligvarebransjen normalt kan ha lavere egenkapitalandel enn en bedrift i byggebransjen, uten at det nødvendigvis betyr høyere risiko.',
        solution: 'Dagligvarebransjen kjennetegnes av stabile og forutsigbare inntekter: folk handler mat uansett konjunkturer. Kontantstrømmene er jevne, varelager omsettes raskt og betalingsrisikoen er lav (kontantsalg). Byggebransjen derimot er sterkt konjunkturavhengig, har store prosjekter med usikker lønnsomhet, lange betalingsfrister og sesongsvingninger. Risikoen for plutselige tap er mye høyere, og bedriften trenger derfor større egenkapitalbuffer.',
      },
    },
    {
      id: 'rr-7-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rr-7-3-ex-5',
        number: '7.3.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et AS har aksjekapital på 500 000 kr. Egenkapitalen har falt til 200 000 kr etter flere år med underskudd. Hva er styrets handlingsplikt etter aksjeloven, og hvilke tiltak kan de foreslå?',
        hints: ['Se aksjeloven om styrets handlingsplikt ved lav egenkapital'],
        solution: 'Egenkapitalen (200 000 kr) er under halvparten av aksjekapitalen (250 000 kr). Styret har handlingsplikt etter aksjeloven § 3-5. De må innkalle generalforsamling innen rimelig tid og foreslå tiltak: 1) Kapitalforhøyelse (emisjon) der eksisterende eller nye aksjonærer skyter inn frisk kapital. 2) Nedsettelse av aksjekapitalen til et beløp under egenkapitalen. 3) Endring av driften for å stanse underskuddet (kostnadskutt, effektivisering). 4) Fusjon med annen bedrift. 5) Oppløsning av selskapet dersom ingen andre tiltak er mulige. Brudd på handleplikten kan medføre erstatningsansvar for styremedlemmene.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Egenkapitalandel', definition: 'Egenkapital i prosent av totalkapital. Bør være minst 30-35 %.' },
    { term: 'Gjeldsgrad', definition: 'Total gjeld delt på egenkapital. Viser forholdet mellom gjeld og eiernes kapital.' },
    { term: 'Rentedekningsgrad', definition: 'Resultat pluss renter, delt på rentekostnader. Viser evnen til å betjene gjelden.' },
    { term: 'Finansiell risiko', definition: 'Risikoen for at bedriften ikke klarer å betjene sine finansielle forpliktelser' },
    { term: 'Handlingsplikt', definition: 'Styrets plikt til å handle når egenkapitalen faller under halvparten av aksjekapitalen' },
    { term: 'Soliditet', definition: 'Bedriftens langsiktige finansielle styrke og evne til å tåle tap' },
  ],
};

// ============================================================================
// Kapittel 7.4: Aktivitetsanalyse
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_7_4: TextbookChapter = {
  id: 'regnskap-revisjon-7-4',
  courseId: 'regnskap-revisjon',
  chapterNumber: '7.4',
  title: 'Aktivitetsanalyse',
  description: 'Analyse av hvor effektivt bedriften utnytter sine ressurser gjennom omløpshastigheter for varelager, kundefordringer og leverandørgjeld, samt kredittider.',
  estimatedMinutes: 20,
  competenceGoals: [
    'Beregne og tolke omløpshastigheter og kredittider',
    'Vurdere effektiviteten i bedriftens kapitalbinding',
    'Forstå sammenhengen mellom aktivitetsnøkkeltall og likviditet',
  ],
  content: [
    {
      id: 'rr-7-4-intro',
      type: 'text',
      content: `## Hva er aktivitetsanalyse?

Aktivitetsanalyse handler om å vurdere hvor effektivt bedriften bruker sine ressurser. Kapitalen som er bundet i varelager, kundefordringer og leverandørgjeld er «arbeidende kapital» som hele tiden er i bevegelse. Jo raskere denne kapitalen sirkulerer, desto bedre utnytter bedriften ressursene.

De sentrale nøkkeltallene i aktivitetsanalysen er:
- **Omløpshastighet for varelager** – hvor raskt varelageret selges og fornyes
- **Omløpshastighet for kundefordringer** – hvor raskt kundene betaler
- **Kredittid kunder** – gjennomsnittlig antall dager kundene bruker på å betale
- **Kredittid leverandører** – gjennomsnittlig antall dager bedriften bruker på å betale leverandørene`,
    },
    {
      id: 'rr-7-4-def-varelager',
      type: 'definition',
      title: 'Omløpshastighet for varelager',
      content: `**Omløpshastighet for varelager** viser hvor mange ganger varelageret «snur» i løpet av en periode:

$$\\text{Omløpshastighet varelager} = \\frac{\\text{Varekostnad}}{\\text{Gjennomsnittlig varelager}}$$

En omløpshastighet på 6 betyr at varelageret fornyes seks ganger i løpet av året. **Lagringstid i dager** beregnes som:

$$\\text{Lagringstid} = \\frac{365}{\\text{Omløpshastighet varelager}}$$

Høy omløpshastighet er generelt positivt, men for lav kan bety at bedriften går tom for varer.`,
    },
    {
      id: 'rr-7-4-def-kundefordringer',
      type: 'definition',
      title: 'Kredittid kunder',
      content: `**Omløpshastighet for kundefordringer** viser hvor raskt kundene betaler:

$$\\text{Omløpshastighet kundefordringer} = \\frac{\\text{Salgsinntekter (inkl. mva.)}}{\\text{Gjennomsnittlig kundefordringer}}$$

**Kredittid kunder** (gjennomsnittlig inkassotid) i dager:

$$\\text{Kredittid kunder} = \\frac{365}{\\text{Omløpshastighet kundefordringer}} = \\frac{\\text{Gjennomsnittlig kundefordringer} \\times 365}{\\text{Salgsinntekter (inkl. mva.)}}$$

Kort kredittid betyr at pengene kommer raskt inn, noe som styrker likviditeten. Kredittiden bør sammenlignes med betalingsvilkårene bedriften tilbyr.`,
    },
    {
      id: 'rr-7-4-def-leverandorer',
      type: 'definition',
      title: 'Kredittid leverandører',
      content: `**Kredittid leverandører** viser gjennomsnittlig antall dager bedriften bruker på å betale sine leverandører:

$$\\text{Kredittid leverandører} = \\frac{\\text{Gjennomsnittlig leverandørgjeld} \\times 365}{\\text{Varekjøp (inkl. mva.)}}$$

Lengre kredittid hos leverandørene gir bedriften en gratis finansieringskilde, men det er viktig å betale innen avtalt tid for å beholde gode leverandørrelasjoner og eventuelle kontantrabatter.`,
    },
    {
      id: 'rr-7-4-example-1',
      type: 'example',
      title: 'Beregning av aktivitetsnøkkeltall',
      problem: `Sport & Fritid AS har følgende data:

| Post | Beløp (kr) |
|------|-----------|
| Salgsinntekter (eks. mva.) | 10 000 000 |
| Salgsinntekter (inkl. mva.) | 12 500 000 |
| Varekostnad | 6 000 000 |
| Varekjøp (inkl. mva.) | 7 812 500 |
| Varelager 01.01 | 1 100 000 |
| Varelager 31.12 | 900 000 |
| Kundefordringer 01.01 | 1 400 000 |
| Kundefordringer 31.12 | 1 600 000 |
| Leverandørgjeld 01.01 | 800 000 |
| Leverandørgjeld 31.12 | 1 000 000 |

Beregn omløpshastighet for varelager, kredittid kunder og kredittid leverandører.`,
      solution: `**Omløpshastighet varelager:**
Gjennomsnittlig varelager = (1 100 000 + 900 000) / 2 = 1 000 000 kr
$$\\frac{6\\,000\\,000}{1\\,000\\,000} = 6{,}0 \\text{ ganger}$$

**Lagringstid:** 365 / 6,0 = **60,8 dager**

**Kredittid kunder:**
Gjennomsnittlig kundefordringer = (1 400 000 + 1 600 000) / 2 = 1 500 000 kr
$$\\frac{1\\,500\\,000 \\times 365}{12\\,500\\,000} = \\frac{547\\,500\\,000}{12\\,500\\,000} = \\textbf{43{,}8 dager}$$

**Kredittid leverandører:**
Gjennomsnittlig leverandørgjeld = (800 000 + 1 000 000) / 2 = 900 000 kr
$$\\frac{900\\,000 \\times 365}{7\\,812\\,500} = \\frac{328\\,500\\,000}{7\\,812\\,500} = \\textbf{42{,}0 dager}$$

**Tolkning:** Varelageret snur 6 ganger i året, altså ca. hvert 61. dag. Kundene betaler i snitt etter 44 dager – hvis betalingsvilkårene er 30 dager, betaler kundene for sent. Leverandørene betales etter 42 dager, som er rimelig for et 30-dagers vilkår.`,
    },
    {
      id: 'rr-7-4-tip-1',
      type: 'tip',
      title: 'Sammenhengen mellom aktivitet og likviditet',
      content: `Det er en direkte sammenheng mellom aktivitetsnøkkeltall og likviditet. Kort kredittid hos kunder betyr raskere innbetalinger. Lav lagringstid betyr mindre kapital bundet i varelager. Lang kredittid hos leverandører gir rentefri finansiering. Målet er at kredittiden fra leverandørene er lengre enn summen av lagringstid og kredittid fra kundene. Da finansierer leverandørene i praksis deler av varekretsløpet.`,
    },
    {
      id: 'rr-7-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rr-7-4-ex-1',
        number: '7.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'En bedrift har varekostnad på 3 000 000 kr og gjennomsnittlig varelager på 500 000 kr. Hva er lagringstiden i dager?',
        options: [
          { id: 'a', text: 'Ca. 30 dager', isCorrect: false },
          { id: 'b', text: 'Ca. 61 dager', isCorrect: true },
          { id: 'c', text: 'Ca. 122 dager', isCorrect: false },
          { id: 'd', text: 'Ca. 6 dager', isCorrect: false },
        ],
        solution: 'Omløpshastighet = 3 000 000 / 500 000 = 6,0. Lagringstid = 365 / 6 = 60,8 dager, altså ca. 61 dager. Svaret er B.',
      },
    },
    {
      id: 'rr-7-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rr-7-4-ex-2',
        number: '7.4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Byggevare Nord AS har følgende data:\n\n| Post | 2023 | 2024 |\n|------|------|------|\n| Varekostnad | 8 000 000 | 9 500 000 |\n| Gj.snitt varelager | 1 600 000 | 2 375 000 |\n| Salgsinntekter (inkl. mva.) | 15 000 000 | 17 500 000 |\n| Gj.snitt kundefordringer | 1 500 000 | 2 100 000 |',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn omløpshastighet for varelager og lagringstid for begge år.',
            solution: '2023: OH = 8 000 000 / 1 600 000 = 5,0. Lagringstid = 365 / 5 = 73 dager. 2024: OH = 9 500 000 / 2 375 000 = 4,0. Lagringstid = 365 / 4 = 91,3 dager.',
          },
          {
            label: 'b',
            task: 'Beregn kredittid kunder for begge år.',
            solution: '2023: (1 500 000 x 365) / 15 000 000 = 36,5 dager. 2024: (2 100 000 x 365) / 17 500 000 = 43,8 dager.',
          },
          {
            label: 'c',
            task: 'Kommenter utviklingen og hvilken effekt den har på likviditeten.',
            solution: 'Utviklingen er negativ: varelageret snur saktere (fra 73 til 91 dager) og kundene betaler saktere (fra 36,5 til 43,8 dager). Dette binder mer kapital i varelager og kundefordringer, noe som svekker likviditeten. Bedriften bør undersøke om det skyldes ukurant varelager, dårlig innkjøpsplanlegging eller slappere innkreving fra kunder.',
          },
        ],
        solution: 'Tallene viser en negativ utvikling i kapitalbinding som direkte svekker likviditeten.',
      },
    },
    {
      id: 'rr-7-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rr-7-4-ex-3',
        number: '7.4.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor bør du bruke salgsinntekter inkludert mva. (ikke ekskludert) når du beregner kredittid kunder?',
        options: [
          { id: 'a', text: 'Fordi kundefordringene i balansen inkluderer mva.', isCorrect: true },
          { id: 'b', text: 'Fordi mva. alltid må rapporteres til skattemyndighetene', isCorrect: false },
          { id: 'c', text: 'Fordi det gir et lavere og mer konservativt nøkkeltall', isCorrect: false },
          { id: 'd', text: 'Fordi regnskapsloven krever det', isCorrect: false },
        ],
        solution: 'Svaret er A. Kundefordringene i balansen er ført med mva. (det kunden faktisk skylder). For å få et konsistent nøkkeltall må vi derfor bruke salgsinntekter inkludert mva. i telleren.',
      },
    },
    {
      id: 'rr-7-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rr-7-4-ex-4',
        number: '7.4.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva «kontantkonverteringssyklusen» (cash conversion cycle) er, og hvordan den beregnes ut fra lagringstid, kredittid kunder og kredittid leverandører.',
        hints: ['Tenk på hvor lang tid det tar fra du betaler for varene til du får betalt av kunden'],
        solution: 'Kontantkonverteringssyklusen viser antall dager det tar fra bedriften betaler leverandøren for varer til den mottar betaling fra kunden. Beregning: Lagringstid + Kredittid kunder - Kredittid leverandører. Eksempel: Lagringstid 60 dager + Kredittid kunder 45 dager - Kredittid leverandører 30 dager = 75 dager. Det betyr at bedriften i gjennomsnitt må finansiere 75 dagers kapitalbinding fra egne midler eller lån. Jo kortere syklus, desto bedre for likviditeten.',
      },
    },
    {
      id: 'rr-7-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rr-7-4-ex-5',
        number: '7.4.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvilke tiltak en bedrift kan gjennomføre for å redusere kontantkonverteringssyklusen. Vurder fordeler og ulemper ved hvert tiltak.',
        solution: 'Tiltak for å redusere kontantkonverteringssyklusen: 1) Redusere lagringstid: Bedre innkjøpsplanlegging, «just-in-time»-leveranser, redusere sortiment. Fordel: mindre kapitalbinding. Ulempe: risiko for tomme hyller. 2) Kortere kredittid kunder: Strengere betalingsvilkår, kontantrabatter, raskere fakturering, effektiv innkreving. Fordel: raskere innbetalinger. Ulempe: kan miste kunder til konkurrenter med lengre kredittid. 3) Lengre kredittid leverandører: Forhandle lengre betalingsfrister. Fordel: gratis finansiering. Ulempe: kan miste kontantrabatter og svekke leverandørforholdet.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Omløpshastighet varelager', definition: 'Varekostnad delt på gjennomsnittlig varelager. Viser hvor raskt lageret fornyes.' },
    { term: 'Lagringstid', definition: '365 delt på omløpshastigheten. Gjennomsnittlig antall dager varene ligger på lager.' },
    { term: 'Kredittid kunder', definition: 'Gjennomsnittlig antall dager kundene bruker på å betale sine fakturaer' },
    { term: 'Kredittid leverandører', definition: 'Gjennomsnittlig antall dager bedriften bruker på å betale leverandørene' },
    { term: 'Kontantkonverteringssyklus', definition: 'Lagringstid + kredittid kunder - kredittid leverandører. Viser kapitalbindingstiden.' },
  ],
};

// ============================================================================
// Kapittel 7.5: Helhetlig regnskapsanalyse
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_7_5: TextbookChapter = {
  id: 'regnskap-revisjon-7-5',
  courseId: 'regnskap-revisjon',
  chapterNumber: '7.5',
  title: 'Helhetlig regnskapsanalyse',
  description: 'Samlet analyse der lønnsomhet, likviditet, soliditet og aktivitet ses i sammenheng. Trendanalyse, sammenligning med bransjetall og DuPont-modellen.',
  estimatedMinutes: 24,
  competenceGoals: [
    'Gjennomføre en helhetlig regnskapsanalyse med flere nøkkeltall',
    'Bruke trendanalyse for å vurdere utvikling over tid',
    'Anvende DuPont-modellen for å forstå hva som driver lønnsomheten',
    'Sammenligne bedriftens nøkkeltall med bransjetall',
  ],
  content: [
    {
      id: 'rr-7-5-intro',
      type: 'text',
      content: `## Fra enkeltnøkkeltall til helhetlig analyse

I de foregående kapitlene har du lært å beregne nøkkeltall innenfor lønnsomhet, likviditet, soliditet og aktivitet. I dette kapittelet setter du alt sammen til en **helhetlig regnskapsanalyse**. Enkeltvis gir nøkkeltallene begrenset innsikt, men sett i sammenheng tegner de et helhetlig bilde av bedriftens økonomiske helse.

En helhetlig regnskapsanalyse innebærer:
- **Trendanalyse** – utvikling over tid (typisk 3–5 år)
- **Bransjesammenligning** – bedriftens tall mot bransjegjennomsnittet
- **DuPont-modellen** – dekomponering av lønnsomheten i resultatgrad og kapitalens omløpshastighet
- **Sammenstilling** – se sammenhenger mellom de ulike analyseområdene`,
    },
    {
      id: 'rr-7-5-text-trendanalyse',
      type: 'text',
      title: 'Trendanalyse',
      content: `En **trendanalyse** sammenligner nøkkeltall over flere perioder for å avdekke utviklingsmønstre. Utvikler nøkkeltallene seg positivt, stabilt eller negativt?

**Fremgangsmåte:**
1. Samle nøkkeltall for 3–5 år
2. Sett opp en tabell med alle nøkkeltall per år
3. Beregn endringen fra år til år (absolutt og prosentvis)
4. Vurder om trenden er positiv, negativ eller stabil
5. Identifiser eventuelle vendepunkter og årsaker

**Eksempel på trendtabell:**

| Nøkkeltall | 2021 | 2022 | 2023 | 2024 | Trend |
|------------|------|------|------|------|-------|
| Resultatgrad | 8,2 % | 7,5 % | 6,1 % | 4,8 % | Negativ |
| TKR | 14,0 % | 12,8 % | 11,2 % | 9,5 % | Negativ |
| LG1 | 2,4 | 2,1 | 1,8 | 1,5 | Negativ |
| EK-andel | 42 % | 40 % | 37 % | 33 % | Negativ |

Selv om hvert enkelt tall isolert sett kan være akseptabelt, viser trenden at alle nøkkeltall utvikler seg i feil retning. Samlet sett er dette et tydelig faresignal.`,
    },
    {
      id: 'rr-7-5-text-bransje',
      type: 'text',
      title: 'Bransjesammenligning',
      content: `Nøkkeltall må alltid vurderes i lys av hvilken bransje bedriften opererer i. En resultatgrad på 3 % kan være utmerket i dagligvarebransjen (lave marginer, høyt volum), men svakt i konsulentbransjen (høye marginer, lavt volum).

**Kilder til bransjetall:**
- Statistisk sentralbyrå (SSB) publiserer regnskapsstatistikk per bransje
- Bransjeforeninger lager nøkkeltallsoversikter
- Dun & Bradstreet og Proff.no tilbyr benchmarking-data
- Brønnøysundregistrene har offentlige regnskapsdata

**Typiske bransjekjennetegn:**

| Bransje | Resultatgrad | EK-andel | LG1 |
|---------|-------------|----------|-----|
| Dagligvare | 1–3 % | 20–30 % | 1,0–1,5 |
| Industri | 5–10 % | 30–45 % | 1,5–2,5 |
| Konsulenter | 10–20 % | 40–60 % | 2,0–3,0 |
| Eiendom | 15–30 % | 15–30 % | 0,5–1,5 |

Bransjetallene er forenklede illustrasjoner og varierer over tid og mellom selskaper.`,
    },
    {
      id: 'rr-7-5-def-dupont',
      type: 'definition',
      title: 'DuPont-modellen',
      content: `**DuPont-modellen** dekomponerer totalkapitalrentabiliteten i to faktorer for å vise hva som driver lønnsomheten:

$$\\text{TKR} = \\text{Resultatgrad} \\times \\text{Kapitalens omløpshastighet}$$

der:

$$\\text{Kapitalens omløpshastighet} = \\frac{\\text{Driftsinntekter}}{\\text{Gjennomsnittlig totalkapital}}$$

Modellen viser at en bedrift kan oppnå god avkastning enten gjennom **høy margin** (høy resultatgrad) eller gjennom **høy omsetning per investert krone** (høy omløpshastighet) – eller en kombinasjon.`,
    },
    {
      id: 'rr-7-5-example-1',
      type: 'example',
      title: 'DuPont-analyse – to ulike strategier',
      problem: `Sammenlign lønnsomhetsstrategien til Bedrift A (lavprisbutikk) og Bedrift B (spesialforretning):

| | Bedrift A | Bedrift B |
|---|-----------|-----------|
| Driftsinntekter | 20 000 000 | 5 000 000 |
| Resultat + renter | 400 000 | 500 000 |
| Gj.snitt totalkapital | 4 000 000 | 5 000 000 |`,
      solution: `**Bedrift A (lavpris):**
- Resultatgrad = 400 000 / 20 000 000 = **2,0 %**
- Kapitalens omløpshastighet = 20 000 000 / 4 000 000 = **5,0**
- TKR = 2,0 % x 5,0 = **10,0 %**

**Bedrift B (spesialforretning):**
- Resultatgrad = 500 000 / 5 000 000 = **10,0 %**
- Kapitalens omløpshastighet = 5 000 000 / 5 000 000 = **1,0**
- TKR = 10,0 % x 1,0 = **10,0 %**

**Tolkning:** Begge bedriftene oppnår TKR = 10 %, men gjennom helt ulike strategier. Bedrift A har lav margin men høy omsetningshastighet (lavprisstrategi). Bedrift B har høy margin men lav omsetningshastighet (premiumstrategi). DuPont-modellen gjør det tydelig hvorfor begge kan lykkes med svært ulike forretningsmodeller.`,
    },
    {
      id: 'rr-7-5-text-sammenstilling',
      type: 'text',
      title: 'Sammenstilling av analyseområder',
      content: `I en helhetlig analyse ser du etter **sammenhenger** mellom analyseområdene:

- **Lønnsomhet og soliditet:** Svak lønnsomhet over tid vil gradvis tære på egenkapitalen og svekke soliditeten
- **Aktivitet og likviditet:** Langsom omløpshastighet binder kapital og kan skape likviditetsproblemer
- **Soliditet og likviditet:** God soliditet gir normalt bedre lånevilkår og dermed bedre likviditet
- **Vekst og likviditet:** Rask vekst kan skape likviditetsproblemer selv ved god lønnsomhet

**Struktur for en helhetlig analyse:**
1. Innledning: Kort om bedriften og bransjen
2. Lønnsomhetsanalyse med nøkkeltall og vurdering
3. Likviditetsanalyse med nøkkeltall og vurdering
4. Soliditetsanalyse med nøkkeltall og vurdering
5. Aktivitetsanalyse med nøkkeltall og vurdering
6. Sammenstilling: sammenhenger og helhetsvurdering
7. Konklusjon: samlet vurdering og anbefalinger`,
    },
    {
      id: 'rr-7-5-note-1',
      type: 'note',
      title: 'Begrensninger ved regnskapsanalyse',
      content: `Regnskapsanalyse baserer seg på historiske tall og har flere begrensninger: 1) Regnskapstallene kan påvirkes av regnskapsmessige valg (avskrivningstid, vurdering av varelager). 2) Analysen ser bakover, ikke fremover. 3) Balansetall er øyeblikksbilder. 4) Verdier kan avvike fra markedsverdi (spesielt eiendom og immaterielle verdier). 5) Ulike regnskapsprinsipper gjør sammenligning mellom bedrifter vanskelig. Analysen bør derfor suppleres med kvalitativ informasjon om bedriftens strategi, markedsposisjon og fremtidsutsikter.`,
    },
    {
      id: 'rr-7-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rr-7-5-ex-1',
        number: '7.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Ifølge DuPont-modellen kan totalkapitalrentabiliteten dekomponeres i:',
        options: [
          { id: 'a', text: 'Egenkapitalandel x gjeldsgrad', isCorrect: false },
          { id: 'b', text: 'Resultatgrad x kapitalens omløpshastighet', isCorrect: true },
          { id: 'c', text: 'Likviditetsgrad 1 x likviditetsgrad 2', isCorrect: false },
          { id: 'd', text: 'Bruttofortjeneste x rentedekningsgrad', isCorrect: false },
        ],
        solution: 'Svaret er B. DuPont-modellen viser at TKR = Resultatgrad x Kapitalens omløpshastighet. Dette avdekker om lønnsomheten drives av høye marginer, høy omsetning, eller en kombinasjon.',
      },
    },
    {
      id: 'rr-7-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rr-7-5-ex-2',
        number: '7.5.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Nordvest Møbel AS har følgende nøkkeltall over tre år:\n\n| Nøkkeltall | 2022 | 2023 | 2024 |\n|------------|------|------|------|\n| Driftsinntekter | 6 000 000 | 7 500 000 | 8 200 000 |\n| Resultat + renter | 720 000 | 675 000 | 492 000 |\n| Gj.snitt totalkapital | 4 800 000 | 5 625 000 | 6 833 000 |',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn resultatgrad, kapitalens omløpshastighet og TKR for alle tre år ved hjelp av DuPont-modellen.',
            solution: '2022: RG = 720 000 / 6 000 000 = 12,0 %. OH = 6 000 000 / 4 800 000 = 1,25. TKR = 12,0 % x 1,25 = 15,0 %. 2023: RG = 675 000 / 7 500 000 = 9,0 %. OH = 7 500 000 / 5 625 000 = 1,33. TKR = 9,0 % x 1,33 = 12,0 %. 2024: RG = 492 000 / 8 200 000 = 6,0 %. OH = 8 200 000 / 6 833 000 = 1,20. TKR = 6,0 % x 1,20 = 7,2 %.',
          },
          {
            label: 'b',
            task: 'Bruk DuPont-analysen til å forklare hva som driver nedgangen i TKR.',
            solution: 'TKR falt fra 15,0 % til 7,2 % over tre år. DuPont-analysen viser at hovedårsaken er fallende resultatgrad (fra 12,0 % til 6,0 %). Kapitalens omløpshastighet er relativt stabil (1,20-1,33). Det betyr at kostnadskontrollen er problemet, ikke omsetningen. Bedriften har vokst i omsetning men kostnadene har vokst raskere, noe som tyder på at veksten ikke har vært lønnsom.',
          },
        ],
        solution: 'DuPont-modellen avslører at den fallende lønnsomheten skyldes marginskvising, ikke dårlig kapitalutnyttelse.',
      },
    },
    {
      id: 'rr-7-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rr-7-5-ex-3',
        number: '7.5.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjennomfør en forenklet helhetlig regnskapsanalyse av Sunnmøre Elektronikk AS basert på følgende data:\n\n| Nøkkeltall | 2023 | 2024 | Bransje 2024 |\n|------------|------|------|-------------|\n| Resultatgrad | 6,5 % | 4,2 % | 5,0 % |\n| TKR | 11,0 % | 8,5 % | 10,0 % |\n| EKR | 16,0 % | 10,5 % | 13,0 % |\n| LG1 | 2,3 | 1,6 | 1,8 |\n| LG2 | 1,4 | 0,9 | 1,1 |\n| EK-andel | 38 % | 31 % | 35 % |\n| Gjeldsgrad | 1,63 | 2,23 | 1,86 |\n| Rentedekningsgrad | 4,2 | 2,5 | 3,5 |\n| OH varelager | 5,8 | 4,5 | 5,5 |\n| Kredittid kunder | 38 dager | 52 dager | 40 dager |',
        hints: ['Strukturer analysen etter lønnsomhet, likviditet, soliditet og aktivitet', 'Sammenlign både med foregående år (trend) og bransjetall'],
        solution: 'Lønnsomhet: Alle lønnsomhetstall har falt og ligger under bransjesnittet. Resultatgraden falt fra 6,5 % til 4,2 % (bransje: 5,0 %). TKR og EKR viser samme bilde. Lønnsomheten er svakere enn bransjen. Likviditet: LG1 falt fra 2,3 til 1,6 (under bransje 1,8). LG2 falt til 0,9, under minstekravet 1. Likviditeten er anstrengt. Soliditet: EK-andel falt fra 38 % til 31 % (under bransje 35 %). Gjeldsgrad økte. Rentedekningsgraden falt kraftig til 2,5. Soliditeten svekkes. Aktivitet: Varelageret snur saktere (4,5 vs. bransje 5,5) og kundene betaler saktere (52 dager vs. bransje 40). Dette binder mer kapital. Helhetsvurdering: Alle analyseområder viser negativ utvikling og bedriften ligger under bransjesnittet på de fleste nøkkeltall. Svak lønnsomhet tærer på egenkapitalen (soliditet), lav omløpshastighet og lang kredittid binder kapital (likviditet). Anbefaling: Kostnadskutt, bedre innkreving av kundefordringer, reduksjon av varelager, og vurdering av kapitalforhøyelse.',
      },
    },
    {
      id: 'rr-7-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rr-7-5-ex-4',
        number: '7.5.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken påstand om bransjesammenligning er mest korrekt?',
        options: [
          { id: 'a', text: 'En bedrift med nøkkeltall over bransjesnittet har alltid god økonomi', isCorrect: false },
          { id: 'b', text: 'Bransjegjennomsnittet inkluderer også bedrifter med dårlig økonomi, så det er et beskjedent mål', isCorrect: true },
          { id: 'c', text: 'Bransjesammenligning er unødvendig fordi alle bedrifter er unike', isCorrect: false },
          { id: 'd', text: 'Nøkkeltall som er lavere enn bransjesnittet er alltid et tegn på krise', isCorrect: false },
        ],
        solution: 'Svaret er B. Bransjegjennomsnittet inkluderer alle bedrifter, også de svakeste. Å ligge på snittet betyr derfor ikke nødvendigvis at bedriften har god økonomi. Ambisiøse bedrifter bør sikte mot øvre kvartil eller over, ikke bare gjennomsnittet.',
      },
    },
    {
      id: 'rr-7-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rr-7-5-ex-5',
        number: '7.5.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En dagligvarekjede har resultatgrad på 2 % og kapitalens omløpshastighet på 6,0, mens et advokatfirma har resultatgrad på 25 % og omløpshastighet på 0,5. Sammenlign de to bedriftene ved hjelp av DuPont-modellen og forklar hvorfor begge kan være godt drevet.',
        solution: 'Dagligvarekjeden: TKR = 2 % x 6,0 = 12,0 %. Advokatfirmaet: TKR = 25 % x 0,5 = 12,5 %. Begge oppnår omtrent lik TKR (ca. 12 %), men gjennom helt ulike strategier. Dagligvarekjeden har lave marginer fordi konkurransen er hard og priselastisiteten er høy, men kompenserer med ekstremt rask omsetning (varene selges raskt, kontantsalg, lite kapitalbinding). Advokatfirmaet har høy margin fordi det selger spesialistkompetanse med høy timepris, men har lav omsetning relativt til investert kapital (dyre lokaler, høye lønninger, relativt få timer å selge). Begge er godt drevet gitt sine bransjeforutsetninger. DuPont-modellen viser at det finnes flere veier til god lønnsomhet.',
      },
    },
    {
      id: 'rr-7-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'rr-7-5-ex-6',
        number: '7.5.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Nevn og forklar tre viktige begrensninger ved regnskapsanalyse som man bør være oppmerksom på.',
        solution: '1) Historiske tall: Regnskapet viser hva som har skjedd, ikke hva som vil skje. En bedrift kan ha gode historiske tall men stå foran store utfordringer (f.eks. teknologisk disrupsjon). 2) Regnskapsmessige valg: Ulike avskrivningsmetoder, vurdering av varelager (FIFO vs. gjennomsnitt) og nedskrivningspraksis kan gi svært ulike nøkkeltall for ellers like bedrifter. 3) Balansedag-effekt: Balansetallene viser situasjonen på én dato. Sesongvariasjoner kan gi et misvisende bilde – en klesbutikk vil ha svært ulikt varelager i januar og september.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Trendanalyse', definition: 'Sammenligning av nøkkeltall over flere perioder for å avdekke utviklingsmønstre' },
    { term: 'Bransjesammenligning', definition: 'Sammenligning av bedriftens nøkkeltall med gjennomsnittet i samme bransje' },
    { term: 'DuPont-modellen', definition: 'TKR = Resultatgrad x Kapitalens omløpshastighet. Dekomponerer lønnsomheten.' },
    { term: 'Kapitalens omløpshastighet', definition: 'Driftsinntekter delt på gjennomsnittlig totalkapital. Viser omsetning per investert krone.' },
    { term: 'Helhetlig regnskapsanalyse', definition: 'Samlet analyse av lønnsomhet, likviditet, soliditet og aktivitet sett i sammenheng' },
    { term: 'Regnskapsanalyse', definition: 'Systematisk bruk av regnskapsdata for å vurdere en bedrifts økonomiske stilling og utvikling' },
  ],
};

// ============================================================================
// Eksport
// ============================================================================

export const REGNSKAP_REVISJON_DEL7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_REGNSKAP_REVISJON_7_1,
  CHAPTER_REGNSKAP_REVISJON_7_2,
  CHAPTER_REGNSKAP_REVISJON_7_3,
  CHAPTER_REGNSKAP_REVISJON_7_4,
  CHAPTER_REGNSKAP_REVISJON_7_5,
];
