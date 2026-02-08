/**
 * Kroppsøving VG2 - Kapittel 2: Periodisering og planlegging
 *
 * Dekker LK20 læreplan for kroppsøving på VG2
 * Underkapitler 2.1-2.5
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1: Grunnleggende periodisering
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_2_1: TextbookChapter = {
  id: 'kroppsoving-vg2-2-1',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '2.1',
  title: 'Grunnleggende periodisering',
  description: 'Lær om prinsippene bak periodisering og hvordan trening struktureres over tid.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke kunnskap om treningsprinsipper til å planlegge målrettet trening',
    'forstå prinsipper for periodisering og systematisk treningsplanlegging',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-2-1-intro',
      type: 'text',
      content: `Periodisering er grunnlaget for all systematisk trening. Enten du trener for helse, idrettsprestasjon eller personlige mål, vil en strukturert plan gi bedre resultater enn tilfeldig trening. I dette kapittelet lærer du de grunnleggende prinsippene for periodisering.`,
    },
    {
      id: 'kroppsoving-vg2-2-1-def-1',
      type: 'definition',
      title: 'Periodisering',
      content: `Periodisering er en systematisk planlegging av trening der variabler som volum, intensitet og treningstype endres over tid for å oppnå optimal tilpasning og unngå overtrenning.`,
    },
    {
      id: 'kroppsoving-vg2-2-1-text-1',
      type: 'text',
      content: `**Tidsperspektiver i periodisering**

En treningsplan deles inn i ulike tidsperspektiver. **Makrosyklus** er den lengste perioden (6-12 måneder) og dekker hele sesongen eller året. **Mesosyklus** er treningsblokker på 3-6 uker med et spesifikt fokus. **Mikrosyklus** er den ukentlige planen, og den minste enheten er den enkelte **treningsøkten**.`,
    },
    {
      id: 'kroppsoving-vg2-2-1-def-2',
      type: 'definition',
      title: 'Superkompensasjon',
      content: `Superkompensasjon er kroppens evne til å restituere seg til et høyere prestasjonsnivå enn utgangspunktet etter en treningsbelastning, forutsatt tilstrekkelig hvile.`,
    },
    {
      id: 'kroppsoving-vg2-2-1-text-2',
      type: 'text',
      content: `**Klassisk lineær periodisering**

I klassisk periodisering deles året inn i fire faser. **Forberedelsesfasen** har høyt volum og lav intensitet for å bygge et bredt grunnlag. **Grunnfasen** øker intensiteten gradvis. **Konkurransefasen** har lavt volum og høy intensitet for toppform. **Overgangsfasen** er aktiv hvile mellom sesonger.`,
    },
    {
      id: 'kroppsoving-vg2-2-1-example-1',
      type: 'example',
      title: 'Eksempel på makrosyklus for en langdistanseløper',
      content: `**Forberedelse (sep-nov):** Rolige langkjøringer, 5-6 økter/uke, lav intensitet.
**Grunnfase (des-feb):** Økt mengde, terskeltrening innføres, 5-6 økter/uke.
**Konkurransefase (mars-mai):** Intervaller, redusert volum, 4-5 økter/uke.
**Overgang (juni-aug):** Aktiv hvile, andre aktiviteter, 2-3 økter/uke.`,
    },
    {
      id: 'kroppsoving-vg2-2-1-def-3',
      type: 'definition',
      title: 'Treningsvolum',
      content: `Treningsvolum er den totale mengden arbeid utført i en treningsperiode. Det måles ofte i antall sett x repetisjoner x vekt for styrke, eller distanse og tid for utholdenhet.`,
    },
    {
      id: 'kroppsoving-vg2-2-1-text-3',
      type: 'text',
      content: `**Prinsipper for god periodisering**

For å lykkes med periodisering må man følge noen grunnprinsipper. **Progressiv overbelastning** betyr at belastningen må øke gradvis over tid. **Variasjon** sikrer at kroppen stadig utfordres på nye måter. **Spesifisitet** betyr at treningen må ligne på det du vil bli bedre i. **Reversibilitet** betyr at du mister tilpasningene dersom du slutter å trene.`,
    },
    {
      id: 'kroppsoving-vg2-2-1-tip-1',
      type: 'tip',
      title: 'Start med det store bildet',
      content: `Planlegg makrosyklusen først og jobb deg ned til mikrosykluser. Det er lettere å justere de små detaljene når helheten er på plass.`,
    },
    // Exercises - first 3 with multipleChoice, last 2 open-ended
    {
      id: 'kroppsoving-vg2-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er periodisering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av periodisering.',
            solution: 'Systematisk planlegging av trening med variasjon i volum, intensitet og type over tid',
            multipleChoiceOptions: [
              'Systematisk planlegging av trening med variasjon i volum, intensitet og type over tid',
              'Å trene samme program hele året',
              'En type intervalltrening med faste perioder',
              'Å dele kroppen inn i muskelgrupper',
            ],
          },
        ],
        solution: 'Periodisering handler om å strukturere trening i ulike faser for å sikre optimal tilpasning og unngå platåer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva kjennetegner de ulike tidsperspektivene i periodisering?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor lang er en typisk mesosyklus?',
            solution: '3-6 uker',
            multipleChoiceOptions: [
              '3-6 uker',
              '1-2 dager',
              '6-12 måneder',
              '1 treningsøkt',
            ],
          },
        ],
        solution: 'Mesosyklusen er en treningsblokk på 3-6 uker med et spesifikt treningsfokus, og er byggesteinen i en lengre makrosyklus.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-2-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er superkompensasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring av superkompensasjon.',
            solution: 'Kroppen restituerer seg til et høyere nivå enn utgangspunktet etter belastning og hvile',
            multipleChoiceOptions: [
              'Kroppen restituerer seg til et høyere nivå enn utgangspunktet etter belastning og hvile',
              'Kroppen blir svakere etter trening',
              'En type kosttilskudd for idrettsutøvere',
              'Å trene to ganger på samme dag',
            ],
          },
        ],
        solution: 'Superkompensasjon er prinsippet bak all treningsfremgang: belastning etterfulgt av tilstrekkelig hvile gir et høyere prestasjonsnivå.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-2-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar de fire fasene i klassisk lineær periodisering og hva som kjennetegner hver fase.',
        solution: 'Forberedelsesfasen: Høyt volum, lav intensitet, bygge grunnlag. Grunnfasen: Moderat volum og intensitet, øke kapasitet. Konkurransefasen: Lavt volum, høy intensitet, toppform. Overgangsfasen: Aktiv hvile, mental og fysisk restitusjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-2-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Velg en idrett du kjenner til og lag en enkel skisse av en makrosyklus over ett år. Beskriv hva som er fokus i hver fase.',
        solution: 'Svar vil variere. Bør inneholde: Valg av idrett, inndeling i forberedelses-, grunn-, konkurranse- og overgangsfase, tidsangivelse for hver fase, og beskrivelse av treningsinnhold og mål i hver fase.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.2: Moderne periodiseringsmodeller
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_2_2: TextbookChapter = {
  id: 'kroppsoving-vg2-2-2',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '2.2',
  title: 'Moderne periodiseringsmodeller',
  description: 'Utforsk ulike periodiseringsmodeller og finn den som passer ditt treningsnivå og dine mål.',
  estimatedMinutes: 45,
  competenceGoals: [
    'vurdere ulike periodiseringsmodeller og deres bruksområder',
    'tilpasse treningsplanlegging til ulike mål og forutsetninger',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-2-2-intro',
      type: 'text',
      content: `Mens klassisk lineær periodisering har vært standarden i mange tiår, finnes det i dag flere moderne modeller som kan tilpasses ulike utøvere og mål. Her ser vi på blokkperiodisering, bølgeperiodisering og daglig bølgende periodisering.`,
    },
    {
      id: 'kroppsoving-vg2-2-2-def-1',
      type: 'definition',
      title: 'Blokkperiodisering',
      content: `Blokkperiodisering deler treningen inn i konsentrerte blokker (2-4 uker) der man fokuserer på én hovedegenskap om gangen, for eksempel styrke, kraft eller utholdenhet.`,
    },
    {
      id: 'kroppsoving-vg2-2-2-text-1',
      type: 'text',
      content: `**Blokkperiodisering i praksis**

I blokkperiodisering trener man én egenskap intensivt i hver blokk. En typisk rekkefølge kan være: **Akkumuleringsblokk** (grunntrening, høyt volum), **Transmutasjonsblokk** (spesifikk trening, moderat volum/høy intensitet), og **Realisasjonsblokk** (konkurranse, lavt volum, maks prestasjon). Denne modellen passer godt for erfarne utøvere.`,
    },
    {
      id: 'kroppsoving-vg2-2-2-def-2',
      type: 'definition',
      title: 'Daglig bølgende periodisering (DUP)',
      content: `Daglig bølgende periodisering (DUP) innebærer at treningsvariablene endres fra økt til økt. For eksempel kan man trene tung styrke mandag, hypertrofi onsdag og muskulær utholdenhet fredag.`,
    },
    {
      id: 'kroppsoving-vg2-2-2-text-2',
      type: 'text',
      content: `**Bølgeperiodisering vs. daglig bølgende periodisering**

**Ukentlig bølgeperiodisering** varierer belastningen fra uke til uke i mesosyklusen. En uke kan ha høyt volum, neste moderat, og den tredje lavt. **Daglig bølgende periodisering (DUP)** varierer derimot fra treningsøkt til treningsøkt. DUP gir hyppig variasjon og kan være mer praktisk for mosjonister og skolelever som ikke følger en fast konkurransekalender.`,
    },
    {
      id: 'kroppsoving-vg2-2-2-example-1',
      type: 'example',
      title: 'Eksempel på DUP-uke for styrketrening',
      content: `**Mandag (styrke):** Knebøy 5x5 med 85% av 1RM, benkpress 5x5 med 85% av 1RM.
**Onsdag (hypertrofi):** Knebøy 4x10 med 70% av 1RM, benkpress 4x10 med 70% av 1RM.
**Fredag (kraft/eksplosivitet):** Knebøy 6x3 med 75% av 1RM eksplosivt, benkpress 6x3 med 75% av 1RM eksplosivt.`,
    },
    {
      id: 'kroppsoving-vg2-2-2-text-3',
      type: 'text',
      content: `**Hvilken modell skal du velge?**

Valg av periodiseringsmodell avhenger av treningserfaring, mål og livssituasjon. Lineær periodisering passer godt for nybegynnere. Blokkperiodisering egner seg for erfarne utøvere med klare konkurransemål. DUP er fleksibelt og passer godt for de som ønsker variasjon og har en uforutsigbar hverdag.`,
    },
    {
      id: 'kroppsoving-vg2-2-2-tip-1',
      type: 'tip',
      title: 'Kombiner modeller',
      content: `Du trenger ikke velge bare én modell. Mange utøvere kombinerer elementer fra ulike periodiseringsmodeller for å finne det som fungerer best for dem.`,
    },
    // Exercises - first 3 with multipleChoice, last 2 open-ended
    {
      id: 'kroppsoving-vg2-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-2-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva kjennetegner blokkperiodisering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av blokkperiodisering.',
            solution: 'Konsentrerte treningsblokker der man fokuserer på én hovedegenskap om gangen',
            multipleChoiceOptions: [
              'Konsentrerte treningsblokker der man fokuserer på én hovedegenskap om gangen',
              'Man trener alle egenskaper likt i hver økt',
              'Man trener kun utholdenhet i blokker',
              'Man tar lange pauser mellom hver treningsøkt',
            ],
          },
        ],
        solution: 'Blokkperiodisering bruker konsentrerte blokker på 2-4 uker med fokus på én egenskap, for eksempel styrke eller utholdenhet, for å oppnå større treningseffekt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva innebærer daglig bølgende periodisering (DUP)?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring av DUP.',
            solution: 'Treningsvariablene endres fra økt til økt innen samme uke',
            multipleChoiceOptions: [
              'Treningsvariablene endres fra økt til økt innen samme uke',
              'Man trener det samme hver dag',
              'Man trener bare annenhver dag',
              'Man øker volumet jevnt hver uke',
            ],
          },
        ],
        solution: 'I DUP varierer man intensitet, volum og treningstype fra økt til økt. Det gir hyppig variasjon og kan passe godt for de som ikke har faste konkurransemål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-2-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilken periodiseringsmodell passer best for nybegynnere?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den modellen som anbefales for nybegynnere.',
            solution: 'Lineær periodisering',
            multipleChoiceOptions: [
              'Lineær periodisering',
              'Blokkperiodisering',
              'Revers periodisering',
              'Konjugert periodisering',
            ],
          },
        ],
        solution: 'Lineær periodisering med gradvis økning i intensitet og reduksjon i volum er enklest å følge og gir god fremgang for nybegynnere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-2-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Sammenlign blokkperiodisering og DUP. Hvilke fordeler og ulemper har hver modell? Hvem passer de best for?',
        solution: 'Blokkperiodisering: Fordeler - stort fokus gir stor tilpasning, god for erfarne utøvere med konkurransemål. Ulemper - krever disiplin, andre egenskaper kan gå ned. DUP: Fordeler - variasjon, fleksibelt, passer uforutsigbar hverdag. Ulemper - mindre konsentrert fokus, kan være vanskelig å måle fremgang.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-2-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lag en DUP-plan for en uke med tre styrketreningsøkter. Beskriv øvelser, sett, repetisjoner og intensitet for hver økt.',
        solution: 'Svar vil variere. Bør inneholde tre ulike treningsøkter med tydelig forskjell i sett/repetisjoner/intensitet (f.eks. styrke 5x5 med 85%, hypertrofi 4x10 med 70%, og kraft 6x3 med 75%), samt valg av relevante øvelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.3: Treningsdagbok og monitorering
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_2_3: TextbookChapter = {
  id: 'kroppsoving-vg2-2-3',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '2.3',
  title: 'Treningsdagbok og monitorering',
  description: 'Lær å føre treningsdagbok og bruke monitoreringsverktøy for å optimalisere treningen.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke treningsdagbok som verktøy for å dokumentere og evaluere egen trening',
    'forstå betydningen av monitorering for treningsfremgang',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-2-3-intro',
      type: 'text',
      content: `For å vite om treningen gir ønsket effekt, trenger du et system for å registrere og følge opp det du gjør. En treningsdagbok er et enkelt, men kraftfullt verktøy for å holde oversikt over belastning, restitusjon og fremgang.`,
    },
    {
      id: 'kroppsoving-vg2-2-3-def-1',
      type: 'definition',
      title: 'Treningsdagbok',
      content: `En treningsdagbok er et systematisk loggføringssystem der du registrerer treningsøkter, belastning, restitusjon, opplevd anstrengelse og annen relevant informasjon over tid.`,
    },
    {
      id: 'kroppsoving-vg2-2-3-text-1',
      type: 'text',
      content: `**Hva bør du registrere?**

En god treningsdagbok inneholder informasjon om **treningsinnhold** (øvelser, sett, repetisjoner, vekt, distanse), **intensitet** (puls, opplevd anstrengelse), **varighet**, **søvn og restitusjon**, samt **hvordan du følte deg** før og etter trening. Denne informasjonen gir grunnlag for å vurdere om treningen fungerer som planlagt.`,
    },
    {
      id: 'kroppsoving-vg2-2-3-def-2',
      type: 'definition',
      title: 'RPE (Rate of Perceived Exertion)',
      content: `RPE er en skala for opplevd anstrengelse, vanligvis 1-10, der 1 er ingen anstrengelse og 10 er maksimal anstrengelse. RPE brukes til å monitorere treningsbelastning uten avansert utstyr.`,
    },
    {
      id: 'kroppsoving-vg2-2-3-example-1',
      type: 'example',
      title: 'Eksempel på treningsdagbok-innlegg',
      content: `**Dato:** Mandag 14. oktober
**Økt:** Styrke overkropp (45 min)
**Øvelser:** Benkpress 4x8 (60 kg), Skulderpress 3x10 (30 kg), Roing 4x8 (50 kg)
**RPE:** 7/10
**Søvn kvelden før:** 7,5 timer
**Kommentar:** Følte meg sterk, økte vekt på benkpress med 2,5 kg fra forrige uke.`,
    },
    {
      id: 'kroppsoving-vg2-2-3-text-2',
      type: 'text',
      content: `**Digitale verktøy for monitorering**

I dag finnes mange apper og pulsklokker som kan hjelpe med treningsregistrering. Pulsklokker måler hjertefrekvens og kan beregne treningsbelastning automatisk. Treningsapper lar deg logge styrketrening, løpeturer og annen aktivitet. Selv om teknologi er nyttig, er det viktigst å forstå hva tallene betyr.`,
    },
    {
      id: 'kroppsoving-vg2-2-3-def-3',
      type: 'definition',
      title: 'Treningsbelastning (TRIMP)',
      content: `TRIMP (Training Impulse) er et mål på total treningsbelastning som beregnes ut fra varighet og intensitet. En enkel variant er øktens varighet i minutter multiplisert med RPE.`,
    },
    {
      id: 'kroppsoving-vg2-2-3-text-3',
      type: 'text',
      content: `**Evaluering og justering**

Treningsdagboken er verdiløs om du ikke bruker informasjonen. Evaluer treningen jevnlig (for eksempel ukentlig eller etter hver mesosyklus). Se etter trender: Går fremgangen fremover? Er du ofte sliten eller syk? Juster planen basert på det du finner. God monitorering gir grunnlag for smarte treningsbeslutninger.`,
    },
    {
      id: 'kroppsoving-vg2-2-3-tip-1',
      type: 'tip',
      title: 'Hold det enkelt',
      content: `En treningsdagbok trenger ikke være komplisert. Start med å notere øvelser, belastning og RPE etter hver økt. Du kan alltid legge til mer informasjon etter hvert.`,
    },
    // Exercises - first 2 with multipleChoice, last 3 open-ended
    {
      id: 'kroppsoving-vg2-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-2-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er RPE?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring av RPE.',
            solution: 'En skala for opplevd anstrengelse fra 1-10',
            multipleChoiceOptions: [
              'En skala for opplevd anstrengelse fra 1-10',
              'En type pulsklokke',
              'Et styrketreningsprogram',
              'Et mål på muskelvekst',
            ],
          },
        ],
        solution: 'RPE (Rate of Perceived Exertion) er en subjektiv skala som lar deg vurdere hvor hard en treningsøkt var, uten behov for teknisk utstyr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-2-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvordan beregnes enkel TRIMP?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig formel for enkel TRIMP-beregning.',
            solution: 'Varighet (minutter) x RPE',
            multipleChoiceOptions: [
              'Varighet (minutter) x RPE',
              'Vekt x repetisjoner',
              'Puls x alder',
              'Distanse / tid',
            ],
          },
        ],
        solution: 'Enkel TRIMP beregnes ved å multiplisere øktens varighet i minutter med opplevd anstrengelse (RPE). For eksempel gir 60 min x RPE 7 = 420 TRIMP.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-2-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hvorfor det er viktig å føre treningsdagbok. Nevn minst tre fordeler.',
        solution: 'Fordeler inkluderer: 1) Oversikt over treningsfremgang over tid, 2) Mulighet til å oppdage mønstre (f.eks. at man er sliten etter perioder med lite søvn), 3) Grunnlag for å justere treningsplanen, 4) Økt bevissthet om egen trening og restitusjon, 5) Motivasjon ved å se fremgang.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-2-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beregn ukentlig TRIMP for en person som gjennomfører følgende treningsøkter: Mandag 50 min RPE 8, Onsdag 30 min RPE 6, Fredag 45 min RPE 7. Vurder om belastningen er passende.',
        solution: 'Mandag: 50 x 8 = 400. Onsdag: 30 x 6 = 180. Fredag: 45 x 7 = 315. Total ukentlig TRIMP: 895. Dette er en moderat belastning som passer for en aktiv person. Belastningen er godt fordelt med den hardeste økten først i uken.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-2-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-2-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Før treningsdagbok for tre treningsøkter du gjennomfører denne uken. Registrer øvelser, belastning, RPE, søvn og en kort kommentar. Evaluer uken til slutt.',
        solution: 'Svar vil variere. Bør inneholde tre separate dagbokinnlegg med dato, treningsinnhold, belastningsdata, RPE-score, søvnregistrering og personlig kommentar, samt en oppsummerende evaluering av uken.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.4: Egentrening – planlegge og gjennomføre
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_2_4: TextbookChapter = {
  id: 'kroppsoving-vg2-2-4',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '2.4',
  title: 'Egentrening – planlegge og gjennomføre',
  description: 'Lær å lage din egen treningsplan og gjennomføre den med god kvalitet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'planlegge, gjennomføre og evaluere egentrening over en lengre periode',
    'vise evne til å ta ansvar for egen treningsprosess',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-2-4-intro',
      type: 'text',
      content: `Egentrening er en sentral del av kroppsøving på VG2. Du skal planlegge, gjennomføre og evaluere din egen trening over en lengre periode. Dette krever at du bruker kunnskapene om periodisering, treningsprinsipper og monitorering i praksis.`,
    },
    {
      id: 'kroppsoving-vg2-2-4-def-1',
      type: 'definition',
      title: 'Egentrening',
      content: `Egentrening er selvstyrt trening der du selv tar ansvar for planlegging, gjennomføring og evaluering av treningsarbeidet, basert på egne mål og forutsetninger.`,
    },
    {
      id: 'kroppsoving-vg2-2-4-text-1',
      type: 'text',
      content: `**Steg 1: Kartlegging og målsetting**

Før du lager en treningsplan, må du kartlegge hvor du er nå. Vurder ditt nåværende treningsnivå, styrker og svakheter. Sett deretter SMART-mål: **S**pesifikke, **M**ålbare, **A**ttraktive, **R**ealistiske og **T**idsbegrensede mål. Et godt mål kan være: "Forbedre 3000 m løpetid med 30 sekunder i løpet av 8 uker."`,
    },
    {
      id: 'kroppsoving-vg2-2-4-text-2',
      type: 'text',
      content: `**Steg 2: Utarbeide treningsplan**

Bruk kunnskapen fra periodiseringskapitlene til å lage en plan. Velg en periodiseringsmodell som passer ditt nivå og dine mål. Bestem treningsfrekvens, øvelser, volum og intensitet. Planlegg progresjon over ukene og legg inn deload-uker. Husk å inkludere oppvarming og uttøying.`,
    },
    {
      id: 'kroppsoving-vg2-2-4-def-2',
      type: 'definition',
      title: 'SMART-mål',
      content: `SMART er et rammeverk for målsetting: Spesifikt (klart definert), Målbart (kan måles), Attraktivt (motiverende), Realistisk (oppnåelig) og Tidsbegrenset (har en frist).`,
    },
    {
      id: 'kroppsoving-vg2-2-4-example-1',
      type: 'example',
      title: 'Eksempel på egentreningsplan (4 uker, styrke)',
      content: `**Mål:** Øke knebøy med 5 kg i løpet av 4 uker.
**Frekvens:** 3 økter/uke (mandag, onsdag, fredag).
**Uke 1-2:** 4x8 med 70% av 1RM. **Uke 3:** 4x6 med 80% av 1RM. **Uke 4:** Deload, 3x8 med 60% av 1RM.
**Tilleggsøvelser:** Utfall, beinpress, hamstringscurl.
**Evaluering:** Test ny 1RM i uke 5.`,
    },
    {
      id: 'kroppsoving-vg2-2-4-text-3',
      type: 'text',
      content: `**Steg 3: Gjennomføring og justering**

Under gjennomføringen er det viktig å følge planen, men også være fleksibel. Bruk treningsdagboken til å registrere alle økter. Dersom du føler deg uvanlig sliten eller syk, juster belastningen. Prioriter teknikk og kvalitet fremfor tung belastning. God gjennomføring handler om å balansere struktur og tilpasning.`,
    },
    {
      id: 'kroppsoving-vg2-2-4-tip-1',
      type: 'tip',
      title: 'Evaluering er nøkkelen',
      content: `Etter endt treningsperiode bør du evaluere: Nådde du målene? Hva fungerte bra? Hva ville du gjort annerledes? Denne refleksjonen gjør deg til en bedre trener for deg selv.`,
    },
    // Exercises - first 3 with multipleChoice, last 3 open-ended
    {
      id: 'kroppsoving-vg2-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-2-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva står SMART for i SMART-mål?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring av SMART-akronymet.',
            solution: 'Spesifikt, Målbart, Attraktivt, Realistisk, Tidsbegrenset',
            multipleChoiceOptions: [
              'Spesifikt, Målbart, Attraktivt, Realistisk, Tidsbegrenset',
              'Sterkt, Muskuløst, Atletisk, Raskt, Tøft',
              'Systematisk, Målrettet, Aktivt, Rolig, Tålmodig',
              'Sunt, Motiverende, Avansert, Riktig, Trendy',
            ],
          },
        ],
        solution: 'SMART er et verktøy for å lage gode mål. Hvert mål bør være spesifikt, målbart, attraktivt (motiverende), realistisk og tidsbegrenset.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-2-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er det første steget i planlegging av egentrening?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig rekkefølge for planlegging.',
            solution: 'Kartlegge nåværende nivå og sette mål',
            multipleChoiceOptions: [
              'Kartlegge nåværende nivå og sette mål',
              'Begynne å trene så hardt som mulig',
              'Kjøpe nytt treningsutstyr',
              'Spørre venner hva de gjør',
            ],
          },
        ],
        solution: 'Man må først vite hvor man er (kartlegging) og hvor man vil (målsetting) før man kan planlegge veien dit (treningsplan).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-2-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er det viktig å være fleksibel under gjennomføring av treningsplanen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den viktigste grunnen til fleksibilitet.',
            solution: 'Kroppen responderer ulikt fra dag til dag, og man må tilpasse for å unngå skader og overtrenning',
            multipleChoiceOptions: [
              'Kroppen responderer ulikt fra dag til dag, og man må tilpasse for å unngå skader og overtrenning',
              'Det er kjedelig å følge en plan',
              'Man bør trene det man har lyst til der og da',
              'Planer fungerer aldri i praksis',
            ],
          },
        ],
        solution: 'Fleksibilitet betyr å tilpasse treningen til dagsform, helse og livssituasjon. Det handler ikke om å droppe planen, men om kloke justeringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-2-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-2-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Formuler to SMART-mål for din egen trening: ett for styrke og ett for utholdenhet.',
        solution: 'Svar vil variere. Eksempel styrke: "Øke benkpress fra 50 kg til 55 kg i løpet av 6 uker." Eksempel utholdenhet: "Løpe 5 km under 25 minutter innen 8 uker." Begge mål bør oppfylle alle SMART-kriteriene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-2-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-2-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lag en detaljert egentreningsplan for 4 uker med minst 3 økter per uke. Inkluder periodisering, øvelsesvalg, volum, intensitet og progresjon.',
        solution: 'Svar vil variere. Bør inneholde: Klare mål, valg av periodiseringsmodell, øvelsesutvalg for hver økt, sett/rep/intensitet, progresjon fra uke til uke, deload-uke, og plan for evaluering etter perioden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-2-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-2-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Gjennomfør treningsplanen din i minst 2 uker og skriv en evalueringsrapport. Hva fungerte? Hva ville du endret? Nådde du delmålene?',
        solution: 'Svar vil variere. Bør inneholde: Oppsummering av gjennomførte økter, sammenligning med planen, refleksjon over hva som fungerte og ikke, eventuelle justeringer som ble gjort underveis, og vurdering av måloppnåelse med begrunnelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.5: Trening for helse vs. prestasjon
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_2_5: TextbookChapter = {
  id: 'kroppsoving-vg2-2-5',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '2.5',
  title: 'Trening for helse vs. prestasjon',
  description: 'Forstå forskjellen mellom helsefremmende trening og prestasjonstrening, og hvordan de planlegges ulikt.',
  estimatedMinutes: 45,
  competenceGoals: [
    'drøfte forskjellen mellom trening for helse og trening for prestasjon',
    'tilpasse treningsplanlegging til ulike mål og målgrupper',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-2-5-intro',
      type: 'text',
      content: `Ikke all trening har samme formål. Noen trener for å holde seg friske og opprettholde god helse, mens andre trener for å prestere best mulig i idrett. Disse to tilnærmingene krever ulik planlegging, selv om mange prinsipper er felles.`,
    },
    {
      id: 'kroppsoving-vg2-2-5-def-1',
      type: 'definition',
      title: 'Helsefremmende trening',
      content: `Helsefremmende trening er fysisk aktivitet som har som hovedmål å forbedre eller opprettholde helse, forebygge sykdom og øke livskvalitet. Den følger ofte anbefalingene fra Helsedirektoratet.`,
    },
    {
      id: 'kroppsoving-vg2-2-5-text-1',
      type: 'text',
      content: `**Helsedirektoratets anbefalinger for ungdom**

Ungdom bør være fysisk aktive i minst **60 minutter daglig** med moderat til høy intensitet. Aktiviteten bør inkludere både utholdenhetstrening og styrketrening minst **3 ganger per uke**. I tillegg bør man begrense stillesitting. Disse anbefalingene er rettet mot å opprettholde god helse, ikke å oppnå topprestasjon.`,
    },
    {
      id: 'kroppsoving-vg2-2-5-def-2',
      type: 'definition',
      title: 'Prestasjonstrening',
      content: `Prestasjonstrening er systematisk trening med mål om å maksimere idrettsprestasjon. Den krever periodisering, høy treningsbelastning, spesifisitet og ofte profesjonell veiledning.`,
    },
    {
      id: 'kroppsoving-vg2-2-5-text-2',
      type: 'text',
      content: `**Viktige forskjeller mellom helse- og prestasjonstrening**

**Intensitet:** Helsetrening ligger typisk på moderat nivå (60-70% av maks), mens prestasjonstrening ofte krever høy til maksimal intensitet. **Volum:** Helsetrening trenger moderate mengder, mens prestasjonstrening krever betydelig mer. **Periodisering:** Helsetrening kan være relativt jevn gjennom året, mens prestasjonstrening krever detaljert periodisering med topping til konkurranser.`,
    },
    {
      id: 'kroppsoving-vg2-2-5-example-1',
      type: 'example',
      title: 'Treningsuke: Helse vs. prestasjon',
      content: `**Helsetrening (mosjonist):**
Man: 30 min rask gange. Tirs: Styrke hjemme 20 min. Ons: Sykling til skolen. Tors: Ballspill 45 min. Fre: Styrke 20 min. Lør: Fjelltur 2 timer.

**Prestasjonstrening (friidrett):**
Man: Intervaller 8x400m. Tirs: Styrke 60 min + rolig jogg 30 min. Ons: Terskeltrening 40 min. Tors: Teknikk + styrke 90 min. Fre: Rolig jogg 40 min. Lør: Langkjøring 75 min.`,
    },
    {
      id: 'kroppsoving-vg2-2-5-text-3',
      type: 'text',
      content: `**Risiko og belastning**

Prestasjonstrening innebærer høyere risiko for overbelastningsskader og overtrenning fordi kroppen presses nærmere grensen. Helsetrening har lavere risiko, men selv mosjonister kan få skader ved for rask opptrapping. Begge tilnærminger krever balanse mellom belastning og restitusjon, men marginen er mindre i prestasjonstrening.`,
    },
    {
      id: 'kroppsoving-vg2-2-5-def-3',
      type: 'definition',
      title: 'Dose-respons-forholdet',
      content: `Dose-respons-forholdet i trening beskriver sammenhengen mellom mengde trening (dose) og helsegevinst (respons). For helse er gevinsten størst fra inaktiv til moderat aktiv, mens prestasjon krever stadig mer trening for mindre forbedring.`,
    },
    {
      id: 'kroppsoving-vg2-2-5-tip-1',
      type: 'tip',
      title: 'Det viktigste steget',
      content: `Den største helsegevinsten får man ved å gå fra å være helt inaktiv til å bli litt aktiv. Selv 10-15 minutters daglig aktivitet gir betydelig helsegevinst. Du trenger ikke trene som en toppidrettsutøver for å bli friskere.`,
    },
    // Exercises - first 3 with multipleChoice, last 3 open-ended
    {
      id: 'kroppsoving-vg2-2-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-2-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva anbefaler Helsedirektoratet for daglig fysisk aktivitet for ungdom?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig anbefaling.',
            solution: 'Minst 60 minutter daglig med moderat til høy intensitet',
            multipleChoiceOptions: [
              'Minst 60 minutter daglig med moderat til høy intensitet',
              'Minst 10 minutter daglig med lav intensitet',
              'Minst 3 timer daglig med maksimal intensitet',
              'Minst 30 minutter tre ganger i uken',
            ],
          },
        ],
        solution: 'Helsedirektoratet anbefaler at ungdom er fysisk aktive i minst 60 minutter daglig, med aktiviteter som inkluderer både utholdenhet og styrke.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-2-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-2-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er en viktig forskjell mellom helsetrening og prestasjonstrening når det gjelder periodisering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forskjell.',
            solution: 'Helsetrening kan være jevn gjennom året, mens prestasjonstrening krever detaljert periodisering',
            multipleChoiceOptions: [
              'Helsetrening kan være jevn gjennom året, mens prestasjonstrening krever detaljert periodisering',
              'Helsetrening krever mer periodisering enn prestasjonstrening',
              'Det er ingen forskjell i periodisering',
              'Prestasjonstrening trenger ingen plan',
            ],
          },
        ],
        solution: 'Prestasjonstrening krever nøye periodisering for å toppe formen til konkurranser, mens helsetrening kan holde en jevnere belastning gjennom året.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-2-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-2-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva beskriver dose-respons-forholdet i trening?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring.',
            solution: 'Sammenhengen mellom mengde trening og helsegevinst, der største gevinst er fra inaktiv til moderat aktiv',
            multipleChoiceOptions: [
              'Sammenhengen mellom mengde trening og helsegevinst, der største gevinst er fra inaktiv til moderat aktiv',
              'At mer trening alltid gir tilsvarende mer helse',
              'At man bør ta medisiner etter trening',
              'At man må trene minst 3 timer daglig for helseeffekt',
            ],
          },
        ],
        solution: 'Dose-respons-forholdet viser at den største helsegevinsten kommer ved å gå fra inaktiv til litt aktiv. Ytterligere trening gir fortsatt gevinst, men med avtakende effekt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-2-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-2-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft fordeler og ulemper ved prestasjonstrening sammenlignet med helsetrening. Hvem passer de ulike tilnærmingene for?',
        solution: 'Prestasjonstrening gir høyere idrettsprestasjon, men medfører større risiko for skader, overtrenning og psykisk press. Passer for utøvere med klare konkurransemål. Helsetrening gir god helse med lavere risiko, men gir ikke topprestasjon. Passer for de fleste som ønsker å holde seg friske. De fleste bør kombinere elementer fra begge tilnærminger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-2-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-2-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lag en ukeplan for en venn som aldri har trent før og ønsker å komme i bedre form. Begrunn valgene dine ut fra helsetreningsprinsipper.',
        solution: 'Svar vil variere. Bør inneholde: Gradvis oppstart med 3-4 økter/uke, moderat intensitet, variasjon i aktiviteter, inkludere både utholdenhet og styrke, progressive økende belastning over tid, og begrunnelse knyttet til Helsedirektoratets anbefalinger og dose-respons-forholdet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-2-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-2-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Vurder din egen trening: Trener du mest for helse eller prestasjon? Hva ville du endret dersom du byttet fokus? Skriv en refleksjon på minst 150 ord.',
        solution: 'Svar vil variere. Bør inneholde: Ærlig vurdering av egen trening, beskrivelse av nåværende mål og treningsvaner, konkrete forslag til endringer ved bytte av fokus (f.eks. endring i intensitet, volum, periodisering), og refleksjon over egen motivasjon og hva som er viktigst for eleven.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const KROPPSOVING_VG2_KAP2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KROPPSOVING_VG2_2_1,
  CHAPTER_KROPPSOVING_VG2_2_2,
  CHAPTER_KROPPSOVING_VG2_2_3,
  CHAPTER_KROPPSOVING_VG2_2_4,
  CHAPTER_KROPPSOVING_VG2_2_5,
];
