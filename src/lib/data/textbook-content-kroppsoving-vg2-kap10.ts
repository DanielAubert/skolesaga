/**
 * Kroppsøving VG2 - Kapittel 10: Egenvurdering og fremtid
 *
 * Dekker LK20 læreplan for kroppsøving på VG2
 * Delkapitler 10.1-10.5
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 10.1: Refleksjon og egenvurdering
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_10_1: TextbookChapter = {
  id: 'kroppsoving-vg2-10-1',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '10.1',
  title: 'Refleksjon og egenvurdering',
  description: 'Lær å vurdere egen innsats, utvikling og kompetanse i kroppsøving gjennom systematisk refleksjon.',
  estimatedMinutes: 45,
  competenceGoals: [
    'vurdere egen kompetanse og utvikling i kroppsøving',
    'reflektere over egen innsats og treningspraksis',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-10-1-intro',
      type: 'text',
      content: `Egenvurdering er en sentral del av kroppsøving i LK20. Det handler om å reflektere over egen innsats, kompetanse og utvikling. Gjennom systematisk egenvurdering blir du bevisst på styrker og forbedringsområder, og du utvikler evnen til å ta ansvar for egen læring.`,
    },
    {
      id: 'kroppsoving-vg2-10-1-def-1',
      type: 'definition',
      title: 'Egenvurdering',
      content: `Egenvurdering er en prosess der du systematisk vurderer egen kompetanse, innsats og utvikling opp mot læringsmål og vurderingskriterier. Det innebærer å identifisere hva du mestrer, hva du kan forbedre, og hvordan du kan jobbe videre.`,
    },
    {
      id: 'kroppsoving-vg2-10-1-text-1',
      type: 'text',
      content: `**Vurderingskriterier i kroppsøving (LK20)**

I kroppsøving vurderes du etter flere kriterier:
- **Bevegelseskompetanse**: Ferdigheter i ulike aktiviteter og evne til å tilpasse bevegelser.
- **Egentrening**: Planlegging, gjennomføring og vurdering av egen trening.
- **Fair play og samarbeid**: Holdninger, respekt og evne til å samarbeide med andre.
- **Refleksjon**: Evne til å vurdere egne valg, utvikling og innsats.`,
    },
    {
      id: 'kroppsoving-vg2-10-1-def-2',
      type: 'definition',
      title: 'Vurdering for læring',
      content: `Vurdering for læring (VFL) er en tilnærming der vurdering brukes som et verktøy for å fremme videre læring, ikke bare måle hva eleven kan. Tilbakemeldinger skal peke fremover og gi konkrete forbedringsforslag.`,
    },
    {
      id: 'kroppsoving-vg2-10-1-example-1',
      type: 'example',
      title: 'Eksempel på egenvurdering',
      content: `En elev skriver: "Denne perioden har jeg trent utholdenhet tre ganger i uken. Jeg har blitt bedre til å holde tempoet på langkjøring, og Cooper-testen viser fremgang fra 2200 m til 2450 m. Jeg kan forbedre teknikken min i intervalltrening ved å jobbe mer med pust og løpssteg."`,
    },
    {
      id: 'kroppsoving-vg2-10-1-text-2',
      type: 'text',
      content: `**Refleksjonsmodell for kroppsøving**

En god refleksjon følger en enkel struktur:
1. **Hva** - Hva har du gjort og opplevd?
2. **Hvorfor** - Hvorfor valgte du disse aktivitetene?
3. **Hvordan** - Hvordan gikk det sammenlignet med målene dine?
4. **Videre** - Hva vil du jobbe med fremover?`,
    },
    {
      id: 'kroppsoving-vg2-10-1-def-3',
      type: 'definition',
      title: 'Kompetansemål',
      content: `Kompetansemål beskriver hva elevene skal mestre etter opplæringen. I kroppsøving VG2 handler kompetansemålene om å kunne planlegge, gjennomføre og vurdere egentrening, samt vise fair play og samarbeid.`,
    },
    {
      id: 'kroppsoving-vg2-10-1-text-3',
      type: 'text',
      content: `**Forskjellen på selvvurdering og karakterjakt**

Egenvurdering handler ikke om å gi seg selv karakter. Det handler om å forstå egen læringsprosess. Du skal beskrive hva du kan, hvordan du har utviklet deg, og hva du trenger å øve mer på. Fokuser på utvikling og innsats, ikke bare resultater.`,
    },
    {
      id: 'kroppsoving-vg2-10-1-tip-1',
      type: 'tip',
      title: 'Bruk konkrete eksempler',
      content: `Når du egenvurderer, bruk konkrete eksempler fra timer og trening. "Jeg har blitt bedre på håndball" er vagt. "Jeg mestrer nå pasninger med svak hånd og leser spillet bedre i forsvar" er konkret og nyttig.`,
    },
    {
      id: 'kroppsoving-vg2-10-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er egenvurdering i kroppsøving?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av egenvurdering.',
            solution: 'En prosess der du vurderer egen kompetanse, innsats og utvikling opp mot læringsmål',
            multipleChoiceOptions: [
              'En prosess der du vurderer egen kompetanse, innsats og utvikling opp mot læringsmål',
              'At læreren gir deg karakter',
              'At du gir deg selv den karakteren du ønsker',
              'En fysisk test som måler styrke',
            ],
          },
        ],
        solution: 'Egenvurdering handler om å systematisk vurdere egen kompetanse, innsats og utvikling opp mot vurderingskriterier og læringsmål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-10-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilke områder vurderes i kroppsøving ifølge LK20?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar om vurderingsområder i kroppsøving.',
            solution: 'Bevegelseskompetanse, egentrening, fair play, samarbeid og refleksjon',
            multipleChoiceOptions: [
              'Bevegelseskompetanse, egentrening, fair play, samarbeid og refleksjon',
              'Bare fysiske tester og resultater',
              'Bare oppmøte og innsats i timen',
              'Bare teoretisk kunnskap om trening',
            ],
          },
        ],
        solution: 'LK20 legger opp til en helhetlig vurdering som inkluderer ferdigheter, treningsplanlegging, samarbeid og evne til refleksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-10-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er vurdering for læring (VFL)?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring av vurdering for læring.',
            solution: 'Vurdering som brukes til å fremme videre læring med fremoverrettede tilbakemeldinger',
            multipleChoiceOptions: [
              'Vurdering som brukes til å fremme videre læring med fremoverrettede tilbakemeldinger',
              'En avsluttende eksamen etter skoleåret',
              'At læreren kun gir karakter uten kommentar',
              'Fysiske tester som rangerer elevene',
            ],
          },
        ],
        solution: 'Vurdering for læring bruker tilbakemeldinger som et verktøy for å hjelpe eleven videre, ikke bare for å måle nåværende nivå.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-10-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Skriv en refleksjon over din utvikling i en selvvalgt aktivitet denne perioden. Bruk refleksjonsmodellen (hva, hvorfor, hvordan, videre).',
        solution: 'Svaret bør inneholde: Konkret beskrivelse av aktiviteten, begrunnelse for valget, vurdering av resultat opp mot mål, og plan for videre utvikling med minst ett konkret tiltak.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-10-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Vurder deg selv opp mot to kompetansemål i kroppsøving VG2. Beskriv hva du mestrer godt og hva du kan forbedre.',
        solution: 'Svaret bør vise at eleven kjenner kompetansemålene, kan gi konkrete eksempler på mestring, og identifiserer realistiske forbedringsområder med forslag til tiltak.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-10-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Sammenlign din egen utvikling i kroppsøving fra VG1 til nå. Hva har du lært om deg selv som aktiv person?',
        solution: 'Svaret bør vise refleksjon over lengre tid, inkludere konkrete eksempler på utvikling i ferdigheter, kunnskap og holdninger, og vise innsikt i egen læringsprosess.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.2: Dokumentasjon av aktivitet
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_10_2: TextbookChapter = {
  id: 'kroppsoving-vg2-10-2',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '10.2',
  title: 'Dokumentasjon av aktivitet',
  description: 'Lær å dokumentere treningsaktivitet systematisk med treningsdagbok og digitale verktøy.',
  estimatedMinutes: 45,
  competenceGoals: [
    'dokumentere og vurdere egen treningsaktivitet over tid',
    'bruke digitale verktøy til å registrere og analysere trening',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-10-2-intro',
      type: 'text',
      content: `Systematisk dokumentasjon av aktivitet er viktig for å følge egen utvikling og gjøre gode justeringer i treningen. En treningsdagbok eller digital treningslogg hjelper deg med å se mønstre, måle fremgang og holde motivasjonen oppe.`,
    },
    {
      id: 'kroppsoving-vg2-10-2-def-1',
      type: 'definition',
      title: 'Treningsdagbok',
      content: `En treningsdagbok er en systematisk logg der du registrerer treningsøkter med informasjon om aktivitet, varighet, intensitet, opplevelse og eventuelle resultater. Den kan føres på papir eller digitalt.`,
    },
    {
      id: 'kroppsoving-vg2-10-2-text-1',
      type: 'text',
      content: `**Hva bør en treningsdagbok inneholde?**

En god treningsdagbok registrerer:
- **Dato og tidspunkt** for økten
- **Aktivitetstype** (f.eks. styrke, utholdenhet, ballspill)
- **Varighet og intensitet** (tid, puls, opplevd anstrengelse)
- **Øvelser og belastning** (sett, repetisjoner, vekt)
- **Opplevelse** (hvordan du følte deg, motivasjon, energi)`,
    },
    {
      id: 'kroppsoving-vg2-10-2-def-2',
      type: 'definition',
      title: 'Digital dokumentasjon',
      content: `Digital dokumentasjon innebærer å bruke apper, pulsklokker eller nettbaserte verktøy for å registrere og analysere treningsdata. Eksempler er Strava, Garmin Connect og treningsapper med GPS-sporing.`,
    },
    {
      id: 'kroppsoving-vg2-10-2-example-1',
      type: 'example',
      title: 'Eksempel på treningsdagbok-notat',
      content: `**Dato:** Mandag 15. januar\n**Aktivitet:** Styrketrening overkropp\n**Varighet:** 50 min\n**Øvelser:** Benkpress 4x8 (50 kg), skulderpress 3x10 (20 kg), roing 4x10 (40 kg)\n**Opplevelse:** God økt, merket fremgang i benkpress. Litt sliten i skuldrene mot slutten.\n**RPE:** 7/10`,
    },
    {
      id: 'kroppsoving-vg2-10-2-text-2',
      type: 'text',
      content: `**Fordeler med digital dokumentasjon**

Digitale verktøy gir muligheter som papir ikke har:
- Automatisk registrering av puls, distanse og tempo via GPS og pulsklokke.
- Grafiske fremstillinger som viser utvikling over tid.
- Deling med trener eller lærer for tilbakemelding.
- Sammenligning av treningsøkter over uker og måneder.`,
    },
    {
      id: 'kroppsoving-vg2-10-2-example-2',
      type: 'example',
      title: 'Analyse av treningsdata',
      content: `En elev bruker pulsklokke og ser at gjennomsnittspulsen på 5 km løping har sunket fra 175 til 165 bpm over åtte uker, mens tempoet er det samme. Dette viser tydelig bedring i utholdenhet uten at eleven nødvendigvis løper raskere.`,
    },
    {
      id: 'kroppsoving-vg2-10-2-text-3',
      type: 'text',
      content: `**RPE-skalaen (Rate of Perceived Exertion)**

Borgs RPE-skala brukes for å måle opplevd anstrengelse på en skala fra 6 til 20, der 6 er total hvile og 20 er maksimal innsats. En forenklet versjon bruker 1-10. RPE er nyttig fordi den fanger opp helheten av belastningen, inkludert stress og søvn.`,
    },
    {
      id: 'kroppsoving-vg2-10-2-tip-1',
      type: 'tip',
      title: 'Skriv logg rett etter økten',
      content: `Dokumenter treningen din umiddelbart etter økten mens opplevelsen er fersk. Det tar bare to minutter og gir mye mer nøyaktig informasjon enn om du skriver ned dagene etterpå.`,
    },
    {
      id: 'kroppsoving-vg2-10-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er en treningsdagbok?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av en treningsdagbok.',
            solution: 'En systematisk logg med informasjon om treningsøkter, varighet, intensitet og opplevelse',
            multipleChoiceOptions: [
              'En systematisk logg med informasjon om treningsøkter, varighet, intensitet og opplevelse',
              'En bok med treningsprogrammer fra internett',
              'En dagbok der du skriver om følelser',
              'Et skjema læreren fyller ut for deg',
            ],
          },
        ],
        solution: 'En treningsdagbok er en systematisk logg der du registrerer treningsøkter med aktivitet, varighet, intensitet, opplevelse og resultater.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-10-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er en fordel med digital dokumentasjon av trening?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den viktigste fordelen med digitale treningsverktøy.',
            solution: 'Automatisk registrering av puls, distanse og tempo, og grafisk fremstilling av utvikling',
            multipleChoiceOptions: [
              'Automatisk registrering av puls, distanse og tempo, og grafisk fremstilling av utvikling',
              'Det er gratis å bruke alle apper',
              'Du slipper å trene selv',
              'Læreren kan kontrollere deg hele tiden',
            ],
          },
        ],
        solution: 'Digitale verktøy gir automatisk datainnsamling, grafisk analyse og mulighet for å dele med trener for tilbakemelding.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-10-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva måler RPE-skalaen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring av RPE.',
            solution: 'Opplevd anstrengelse under trening, på en skala fra hvile til maksimal innsats',
            multipleChoiceOptions: [
              'Opplevd anstrengelse under trening, på en skala fra hvile til maksimal innsats',
              'Maksimalt oksygenopptak',
              'Hvilepuls etter trening',
              'Antall repetisjoner i styrketrening',
            ],
          },
        ],
        solution: 'RPE (Rate of Perceived Exertion) måler opplevd anstrengelse og fanger opp helheten av belastningen, inkludert faktorer som stress og søvn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-10-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Før treningsdagbok for en uke (minst 3 økter). Dokumenter aktivitetstype, varighet, intensitet (RPE) og opplevelse for hver økt.',
        solution: 'Svaret bør inneholde minst tre dokumenterte økter med dato, aktivitetstype, varighet, RPE-verdi og kort beskrivelse av opplevelse. Loggen bør vise variasjon i aktiviteter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-10-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Analyser treningsdataene dine fra de siste fire ukene. Beskriv mønstre du ser og hvordan du vil justere treningen videre.',
        solution: 'Svaret bør identifisere trender i volum, intensitet eller opplevelse. Eleven bør koble observasjoner til treningsprinsipper og foreslå konkrete justeringer basert på dataene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-10-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Sammenlign fordeler og ulemper med papirbasert og digital treningsdagbok. Hvilken metode passer best for deg, og hvorfor?',
        solution: 'Svaret bør diskutere tilgjengelighet, detaljnivå, automatisering, personvern og brukervennlighet. Eleven bør begrunne sin preferanse med konkrete argumenter knyttet til egne behov.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.3: Lede aktiviteter for andre
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_10_3: TextbookChapter = {
  id: 'kroppsoving-vg2-10-3',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '10.3',
  title: 'Lede aktiviteter for andre',
  description: 'Lær å planlegge og lede fysiske aktiviteter for medelever med fokus på instruksjon, tilpasning og inkludering.',
  estimatedMinutes: 50,
  competenceGoals: [
    'planlegge og lede aktiviteter tilpasset ulike grupper',
    'vise evne til instruksjon, tilpasning og inkludering i aktivitet',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-10-3-intro',
      type: 'text',
      content: `Å lede aktiviteter for andre er en viktig kompetanse i kroppsøving. Det krever at du kan planlegge, instruere og tilpasse aktiviteter slik at alle kan delta og ha utbytte. God ledelse handler om å skape trygghet, engasjement og mestring hos deltakerne.`,
    },
    {
      id: 'kroppsoving-vg2-10-3-def-1',
      type: 'definition',
      title: 'Instruksjon',
      content: `Instruksjon er å formidle kunnskap om en aktivitet eller øvelse på en tydelig og forståelig måte. God instruksjon inkluderer verbal forklaring, demonstrasjon og tilbakemelding til deltakerne.`,
    },
    {
      id: 'kroppsoving-vg2-10-3-text-1',
      type: 'text',
      content: `**Planlegging av en aktivitetsøkt**

Når du skal lede en aktivitet, bør du planlegge:
- **Mål**: Hva skal deltakerne lære eller oppleve?
- **Oppvarming**: Relevant oppvarming som forbereder kroppen.
- **Hoveddel**: Selve aktiviteten med tydelige regler og progresjon.
- **Avslutning**: Oppsummering, nedtrapping og refleksjon.
- **Tilpasning**: Hvordan kan aktiviteten tilpasses ulike nivåer?`,
    },
    {
      id: 'kroppsoving-vg2-10-3-def-2',
      type: 'definition',
      title: 'Differensiering',
      content: `Differensiering i kroppsøving betyr å tilpasse aktiviteter slik at alle elever kan delta uavhengig av ferdighetsnivå. Det kan gjøres ved å endre regler, areal, utstyr eller krav til utførelse.`,
    },
    {
      id: 'kroppsoving-vg2-10-3-example-1',
      type: 'example',
      title: 'Eksempel på tilpasset stafett',
      content: `I en stafett kan du differensiere ved å la noen løpe kortere distanse, noen jogge og noen sprinte. Du kan også variere bevegelsesform (hinke, sidelengs, baklengs) slik at det er utfordrende for alle, uavhengig av løpsfart.`,
    },
    {
      id: 'kroppsoving-vg2-10-3-text-2',
      type: 'text',
      content: `**Tips for god instruksjon**

- Stå slik at alle ser og hører deg.
- Forklar kort og tydelig - unngå for mye prating.
- Demonstrer øvelsen selv eller bruk en medelev.
- Sjekk forståelse ved å stille spørsmål.
- Gi positiv tilbakemelding underveis.`,
    },
    {
      id: 'kroppsoving-vg2-10-3-def-3',
      type: 'definition',
      title: 'Inkludering',
      content: `Inkludering i kroppsøving innebærer at alle elever opplever tilhørighet, deltakelse og mestring, uavhengig av fysiske forutsetninger, bakgrunn eller ferdighetsnivå.`,
    },
    {
      id: 'kroppsoving-vg2-10-3-text-3',
      type: 'text',
      content: `**Vanlige utfordringer ved ledelse**

Når du leder aktiviteter, kan du møte utfordringer som lav motivasjon hos deltakere, konflikter om regler eller store nivåforskjeller. Nøkkelen er å være tydelig, rettferdig og fleksibel. Ha en reserveplan hvis noe ikke fungerer som forventet.`,
    },
    {
      id: 'kroppsoving-vg2-10-3-tip-1',
      type: 'tip',
      title: 'Start enkelt',
      content: `Begynn med en enkel aktivitet og legg til kompleksitet gradvis. Det er lettere å bygge opp enn å forenkle noe som allerede er i gang. Sørg for at alle forstår grunnreglene før du introduserer variasjoner.`,
    },
    {
      id: 'kroppsoving-vg2-10-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er instruksjon i kroppsøving?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av god instruksjon.',
            solution: 'Tydelig verbal forklaring, demonstrasjon og tilbakemelding til deltakerne',
            multipleChoiceOptions: [
              'Tydelig verbal forklaring, demonstrasjon og tilbakemelding til deltakerne',
              'Å skrive reglene på tavla og la elevene lese selv',
              'Å bare vise øvelsen uten å forklare',
              'Å la elevene finne ut av reglene selv',
            ],
          },
        ],
        solution: 'God instruksjon kombinerer verbal forklaring, demonstrasjon og tilbakemelding for å sikre at alle forstår aktiviteten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-10-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva betyr differensiering i kroppsøving?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring av differensiering.',
            solution: 'Å tilpasse aktiviteter slik at alle kan delta, uavhengig av ferdighetsnivå',
            multipleChoiceOptions: [
              'Å tilpasse aktiviteter slik at alle kan delta, uavhengig av ferdighetsnivå',
              'At alle gjør akkurat det samme uten tilpasning',
              'At bare de flinkeste får delta i aktiviteten',
              'At aktiviteten gjøres vanskeligere for alle',
            ],
          },
        ],
        solution: 'Differensiering handler om å tilpasse aktiviteter ved å endre regler, areal, utstyr eller krav slik at alle elever kan delta og oppleve mestring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-10-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva bør en plan for en aktivitetsøkt inneholde?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig oppbygging av en aktivitetsøkt.',
            solution: 'Mål, oppvarming, hoveddel, avslutning og plan for tilpasning',
            multipleChoiceOptions: [
              'Mål, oppvarming, hoveddel, avslutning og plan for tilpasning',
              'Bare selve aktiviteten uten oppvarming',
              'Bare reglene for aktiviteten',
              'En liste over alt utstyr som trengs',
            ],
          },
        ],
        solution: 'En god øktplan har tydelige mål, relevant oppvarming, en hoveddel med progresjon, en avslutning og plan for tilpasning til ulike nivåer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-10-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Planlegg og led en oppvarmingsaktivitet (10-15 minutter) for klassen. Beskriv planen skriftlig med mål, gjennomføring og tilpasninger.',
        solution: 'Svaret bør inneholde tydelig mål for oppvarmingen, beskrivelse av aktiviteten med regler, plan for differensiering (lettere/vanskeligere varianter) og forventet tidsbruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-10-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Reflekter over en gang du har ledet eller blitt ledet i en aktivitet. Hva fungerte godt, og hva kunne vært gjort annerledes for å inkludere alle bedre?',
        solution: 'Svaret bør beskrive situasjonen konkret, identifisere styrker og svakheter ved ledelsen, og foreslå tiltak for bedre inkludering med kobling til differensiering og instruksjonsteknikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.4: Aktivitet i fremtidig arbeidsliv
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_10_4: TextbookChapter = {
  id: 'kroppsoving-vg2-10-4',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '10.4',
  title: 'Aktivitet i fremtidig arbeidsliv',
  description: 'Lær om ergonomi, HMS og hvordan fysisk aktivitet kan forebygge belastningslidelser i arbeidslivet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstå sammenhengen mellom fysisk aktivitet og helse i arbeidslivet',
    'bruke kunnskap om ergonomi og HMS til å forebygge belastningslidelser',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-10-4-intro',
      type: 'text',
      content: `Mange yrker stiller krav til fysisk helse, enten det er tungt fysisk arbeid eller lange dager foran skjerm. Kunnskap om ergonomi, HMS og bedriftsidrett gjør deg bedre rustet til å ta vare på kroppen gjennom et langt arbeidsliv.`,
    },
    {
      id: 'kroppsoving-vg2-10-4-def-1',
      type: 'definition',
      title: 'Ergonomi',
      content: `Ergonomi er læren om tilpasning av arbeidsmiljø og arbeidsoppgaver til menneskets fysiske og psykiske forutsetninger. Målet er å forebygge belastningslidelser og fremme helse og effektivitet.`,
    },
    {
      id: 'kroppsoving-vg2-10-4-text-1',
      type: 'text',
      content: `**Vanlige belastningslidelser i arbeidslivet**

- **Muskel- og skjelettplager**: Rygg-, nakke- og skulderproblemer fra feil arbeidsstillinger eller tunge løft.
- **Repetitive strain injuries (RSI)**: Overbelastningsskader fra ensidige, gjentatte bevegelser.
- **Stillesittingsrelaterte plager**: Redusert blodsirkulasjon, stivhet og økt risiko for livsstilssykdommer.
- **Psykisk belastning**: Stress og utbrenthet som påvirker kroppen fysisk.`,
    },
    {
      id: 'kroppsoving-vg2-10-4-def-2',
      type: 'definition',
      title: 'HMS (Helse, miljø og sikkerhet)',
      content: `HMS er et systematisk arbeid for å sikre et trygt og helsefremmende arbeidsmiljø. Alle virksomheter i Norge er pålagt å ha et HMS-system som forebygger skader og sykdom på arbeidsplassen.`,
    },
    {
      id: 'kroppsoving-vg2-10-4-example-1',
      type: 'example',
      title: 'Ergonomi ved kontorarbeid',
      content: `En god kontorarbeidsplass har: Regulerbar stol med korsryggstøtte, skjerm i øyehøyde, underarmer vannrett ved tastaturbruk, og føttene flatt i gulvet. I tillegg bør du reise deg og bevege deg hvert 30. minutt for å motvirke stillesitting.`,
    },
    {
      id: 'kroppsoving-vg2-10-4-text-2',
      type: 'text',
      content: `**Bedriftsidrett og aktive arbeidsplasser**

Bedriftsidrett organiserer fysisk aktivitet gjennom arbeidsplassen. Forskning viser at aktive ansatte har lavere sykefravær, høyere trivsel og bedre produktivitet. Mange bedrifter tilbyr treningsrom, bedriftslag eller støtte til treningsmedlemskap.`,
    },
    {
      id: 'kroppsoving-vg2-10-4-def-3',
      type: 'definition',
      title: 'Bedriftsidrett',
      content: `Bedriftsidrett er organisert fysisk aktivitet og idrett tilknyttet arbeidsplassen. Norges Bedriftsidrettsforbund organiserer turneringer, mosjonskampanjer og aktivitetstilbud for ansatte i norske virksomheter.`,
    },
    {
      id: 'kroppsoving-vg2-10-4-text-3',
      type: 'text',
      content: `**Forebygging gjennom fysisk aktivitet**

Regelmessig trening forebygger mange arbeidsrelaterte plager. Styrketrening av kjernemuskulatur beskytter ryggen, tøyning og mobilitet reduserer stivhet, og utholdenhetstrening bedrer den generelle helsetilstanden. Bare 30 minutter moderat aktivitet daglig gir betydelig helsegevinst.`,
    },
    {
      id: 'kroppsoving-vg2-10-4-tip-1',
      type: 'tip',
      title: 'Pauser er trening',
      content: `Aktive pauser i arbeidsdagen er svært effektive. Stå opp, strekk deg, gå en kort tur eller gjør noen enkle øvelser. Selv korte pauser på 2-3 minutter gir helsegevinst når de gjentas gjennom dagen.`,
    },
    {
      id: 'kroppsoving-vg2-10-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er ergonomi?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av ergonomi.',
            solution: 'Læren om tilpasning av arbeidsmiljø til menneskets fysiske og psykiske forutsetninger',
            multipleChoiceOptions: [
              'Læren om tilpasning av arbeidsmiljø til menneskets fysiske og psykiske forutsetninger',
              'En type styrketrening for ryggen',
              'Et digitalt verktøy for treningsplanlegging',
              'Regler for sikkerhet i idrettsanlegg',
            ],
          },
        ],
        solution: 'Ergonomi handler om å tilpasse arbeidsmiljø og oppgaver til mennesket for å forebygge belastningslidelser og fremme helse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-10-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva står HMS for, og hva innebærer det?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring av HMS.',
            solution: 'Helse, miljø og sikkerhet - systematisk arbeid for trygt og helsefremmende arbeidsmiljø',
            multipleChoiceOptions: [
              'Helse, miljø og sikkerhet - systematisk arbeid for trygt og helsefremmende arbeidsmiljø',
              'Høy maksimal styrke - et mål for fysisk form',
              'Helseorganisasjonens minimumsstandarder for idrett',
              'Hjelpemidler for skadeforebygging i sport',
            ],
          },
        ],
        solution: 'HMS står for helse, miljø og sikkerhet, og alle virksomheter i Norge er pålagt å ha et HMS-system for å forebygge skader og sykdom.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-10-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er bedriftsidrett?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av bedriftsidrett.',
            solution: 'Organisert fysisk aktivitet og idrett tilknyttet arbeidsplassen',
            multipleChoiceOptions: [
              'Organisert fysisk aktivitet og idrett tilknyttet arbeidsplassen',
              'Profesjonell idrett sponset av bedrifter',
              'Treningssenter kun for ledere i bedriften',
              'Obligatorisk trening for alle ansatte',
            ],
          },
        ],
        solution: 'Bedriftsidrett er organisert aktivitet gjennom arbeidsplassen, med turneringer, mosjonskampanjer og aktivitetstilbud for ansatte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-10-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Velg et yrke du er interessert i. Beskriv hvilke fysiske belastninger dette yrket kan innebære, og foreslå tiltak for å forebygge plager.',
        solution: 'Svaret bør beskrive konkrete fysiske belastninger (stillesitting, tunge løft, ensidige bevegelser osv.) og foreslå relevante forebyggende tiltak som ergonomisk tilpasning, styrketrening og aktive pauser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-10-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lag et program med 5 øvelser som kan gjøres som aktiv pause på en kontorarbeidsplass. Beskriv hver øvelse med utførelse og varighet.',
        solution: 'Svaret bør inneholde 5 realistiske øvelser for kontormiljø, f.eks. nakkestrekk, skulderrullinger, ryggstrekk, knebøy og trappegang. Hver øvelse skal ha kort beskrivelse av utførelse og tidsbruk (1-3 min per øvelse).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-10-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Diskuter hvorfor bedrifter bør investere i fysisk aktivitet for ansatte. Bruk argumenter knyttet til helse, økonomi og trivsel.',
        solution: 'Svaret bør inkludere argumenter om redusert sykefravær, økt produktivitet, bedre psykisk helse, lavere kostnader til arbeidsrelaterte skader, økt trivsel og bedre rekruttering. Forskning viser at 1 krone investert i bedriftsidrett gir 2-3 kroner tilbake.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.5: Livslang bevegelsesglede
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_10_5: TextbookChapter = {
  id: 'kroppsoving-vg2-10-5',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '10.5',
  title: 'Livslang bevegelsesglede',
  description: 'Utforsk hvordan du kan opprettholde fysisk aktivitet og bevegelsesglede gjennom hele livet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'reflektere over hva som fremmer livslang bevegelsesglede',
    'forstå sammenhengen mellom fysisk aktivitet, helse og livskvalitet over tid',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-10-5-intro',
      type: 'text',
      content: `Et av de viktigste målene i kroppsøving er å skape grunnlag for livslang bevegelsesglede. Det handler om å finne aktiviteter du trives med, forstå verdien av å være aktiv, og utvikle vaner som varer livet ut.`,
    },
    {
      id: 'kroppsoving-vg2-10-5-def-1',
      type: 'definition',
      title: 'Bevegelsesglede',
      content: `Bevegelsesglede er den positive opplevelsen og gleden knyttet til fysisk aktivitet og bevegelse. Når bevegelse oppleves som lystbetont og meningsfullt, øker sannsynligheten for at man forblir aktiv over tid.`,
    },
    {
      id: 'kroppsoving-vg2-10-5-text-1',
      type: 'text',
      content: `**Hva fremmer livslang bevegelsesglede?**

Forskning viser at flere faktorer bidrar til at folk holder seg aktive gjennom livet:
- **Indre motivasjon**: Aktiviteten oppleves som gøy og meningsfull i seg selv.
- **Mestringsopplevelser**: Å føle at du behersker noe gir lyst til å fortsette.
- **Sosialt fellesskap**: Å trene sammen med andre gir tilhørighet og forpliktelse.
- **Variasjon**: Å prøve nye aktiviteter holder interessen oppe.
- **Autonomi**: Å kunne velge aktiviteter selv øker motivasjonen.`,
    },
    {
      id: 'kroppsoving-vg2-10-5-def-2',
      type: 'definition',
      title: 'Indre motivasjon',
      content: `Indre motivasjon betyr at du gjør en aktivitet fordi den i seg selv gir glede, tilfredsstillelse eller mening. I motsetning til ytre motivasjon (belønning, press) er indre motivasjon mer varig og knyttet til bevegelsesglede.`,
    },
    {
      id: 'kroppsoving-vg2-10-5-example-1',
      type: 'example',
      title: 'Fra konkurranse til bevegelsesglede',
      content: `Mange slutter med organisert idrett etter ungdomsårene, men finner nye former for aktivitet. En som sluttet med håndball kan finne glede i klatring, padling eller gruppetimer på treningssenter. Nøkkelen er å lete etter aktiviteter som gir energi og glede, ikke bare resultater.`,
    },
    {
      id: 'kroppsoving-vg2-10-5-text-2',
      type: 'text',
      content: `**Fysisk aktivitet gjennom livsfasene**

Behovet for aktivitet endrer seg gjennom livet. I ungdomsårene er det naturlig å prøve mange aktiviteter. I voksenlivet må trening ofte tilpasses jobb og familieliv. I eldre år blir balanse, mobilitet og sosial trening viktigere. Det som er felles er at kroppen trenger bevegelse i alle faser.`,
    },
    {
      id: 'kroppsoving-vg2-10-5-example-2',
      type: 'example',
      title: 'Anbefalinger for fysisk aktivitet (voksne)',
      content: `Helsedirektoratet anbefaler at voksne er fysisk aktive i minst 150 minutter med moderat intensitet per uke, eller 75 minutter med høy intensitet. I tillegg anbefales styrketrening minst to ganger per uke. All bevegelse teller, inkludert hverdagsaktivitet som gåing og sykling.`,
    },
    {
      id: 'kroppsoving-vg2-10-5-text-3',
      type: 'text',
      content: `**Barrierer for fysisk aktivitet**

Vanlige barrierer er tidsmangel, manglende motivasjon, skader og dårlig tilgang til aktivitetstilbud. For å overvinne barrierer kan du: integrere aktivitet i hverdagen (sykle til jobb), finne en treningspartner, sette realistiske mål og fokusere på aktiviteter du genuint liker.`,
    },
    {
      id: 'kroppsoving-vg2-10-5-def-3',
      type: 'definition',
      title: 'Hverdagsaktivitet',
      content: `Hverdagsaktivitet er all fysisk aktivitet som ikke er planlagt trening, men som skjer naturlig i løpet av dagen. Eksempler er gåing, sykling, trapper, husarbeid og hagearbeid. Hverdagsaktivitet bidrar betydelig til den totale aktivitetsmengden.`,
    },
    {
      id: 'kroppsoving-vg2-10-5-tip-1',
      type: 'tip',
      title: 'Finn din aktivitet',
      content: `Du trenger ikke å elske løping eller styrketrening for å være aktiv. Prøv ulike ting: dans, klatring, svømming, kampsport, frisbeegolf, yoga eller turgåing. Den beste treningen er den du faktisk gjør fordi du trives med den.`,
    },
    {
      id: 'kroppsoving-vg2-10-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er bevegelsesglede?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av bevegelsesglede.',
            solution: 'Positiv opplevelse og glede knyttet til fysisk aktivitet som øker sannsynligheten for varig aktivitet',
            multipleChoiceOptions: [
              'Positiv opplevelse og glede knyttet til fysisk aktivitet som øker sannsynligheten for varig aktivitet',
              'Å vinne konkurranser i idrett',
              'Å trene hardt selv om man ikke liker det',
              'Å være best i klassen i fysiske tester',
            ],
          },
        ],
        solution: 'Bevegelsesglede handler om at aktivitet oppleves som lystbetont og meningsfullt, noe som gjør det lettere å holde seg aktiv livet ut.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-10-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er indre motivasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring av indre motivasjon.',
            solution: 'At du gjør en aktivitet fordi den i seg selv gir glede og mening',
            multipleChoiceOptions: [
              'At du gjør en aktivitet fordi den i seg selv gir glede og mening',
              'At du trener for å få god karakter',
              'At foreldrene dine bestemmer at du skal trene',
              'At du trener for å se bra ut for andre',
            ],
          },
        ],
        solution: 'Indre motivasjon innebærer at aktiviteten i seg selv gir tilfredsstillelse. Dette er mer varig enn ytre motivasjon som belønning eller press.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-10-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva anbefaler Helsedirektoratet for fysisk aktivitet hos voksne?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig anbefaling.',
            solution: 'Minst 150 minutter moderat aktivitet per uke, pluss styrketrening to ganger per uke',
            multipleChoiceOptions: [
              'Minst 150 minutter moderat aktivitet per uke, pluss styrketrening to ganger per uke',
              'Minst 30 minutter intens trening hver dag',
              'Trening er bare nødvendig for overvektige',
              'Man trenger kun styrketrening, ikke utholdenhet',
            ],
          },
        ],
        solution: 'Helsedirektoratet anbefaler 150 minutter moderat eller 75 minutter høy intensitet per uke, pluss styrketrening to ganger ukentlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-10-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv tre aktiviteter du trives med og forklar hva som gjør at de gir deg bevegelsesglede. Knytt til begrepene indre motivasjon, mestring og sosialt fellesskap.',
        solution: 'Svaret bør beskrive tre konkrete aktiviteter med begrunnelse for hvorfor de gir glede. Eleven bør bruke fagbegrepene indre motivasjon, mestringsopplevelse og sosialt fellesskap i forklaringen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-10-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lag en realistisk plan for hvordan du vil holde deg fysisk aktiv etter videregående. Inkluder konkrete aktiviteter, tidspunkt og strategier for å overvinne barrierer.',
        solution: 'Svaret bør ha konkrete aktiviteter med frekvens, realistische tidspunkt tilpasset forventet livssituasjon, og strategier for vanlige barrierer som tidsmangel og motivasjonssvikt. Planen bør vise variasjon og forankring i bevegelsesglede.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-10-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-10-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Diskuter: Hva er skolens ansvar for å skape livslang bevegelsesglede, og hva er den enkeltes eget ansvar? Bruk eksempler fra din egen erfaring.',
        solution: 'Svaret bør drøfte balansen mellom skolens rolle (variert undervisning, trygt miljø, mestringsopplevelser, kunnskap) og individets ansvar (egenmotivasjon, valg, innsats). Eleven bør bruke egne erfaringer som eksempler og vise refleksjon over hva som har fremmet eller hemmet bevegelsesglede.',
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

export const KROPPSOVING_VG2_KAP10_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KROPPSOVING_VG2_10_1,
  CHAPTER_KROPPSOVING_VG2_10_2,
  CHAPTER_KROPPSOVING_VG2_10_3,
  CHAPTER_KROPPSOVING_VG2_10_4,
  CHAPTER_KROPPSOVING_VG2_10_5,
];
