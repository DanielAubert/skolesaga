/**
 * Kroppsøving VG2 - Kapittel 3: Idrettspsykologi
 *
 * Delkapitler:
 *   3.1 Motivasjon og drivkraft
 *   3.2 Konsentrasjon og fokus
 *   3.3 Visualisering og mental forestilling
 *   3.4 Spenningsregulering og mestring av press
 *   3.5 Selvtillit og mestringstro
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// 3.1 Motivasjon og drivkraft
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_3_1: TextbookChapter = {
  id: 'kroppsoving-vg2-3-1',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '3.1',
  title: 'Motivasjon og drivkraft',
  description: 'Forstå hva som driver oss til å trene og prestere, og hvordan du kan styrke din indre motivasjon.',
  estimatedMinutes: 45,
  competenceGoals: [
    'reflektere over egen motivasjon for fysisk aktivitet',
    'bruke kunnskap om motivasjonsteorier for å fremme egen treningsinnsats',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-3-1-intro',
      type: 'text',
      content: `Motivasjon er drivkraften bak all aktivitet og prestasjon. I idrettspsykologi skiller vi mellom ulike typer motivasjon og undersøker hvordan de påvirker innsats, utholdenhet og trivsel. Å forstå egen motivasjon er nøkkelen til langvarig treningsglede.`,
    },
    {
      id: 'kroppsoving-vg2-3-1-def-1',
      type: 'definition',
      title: 'Indre motivasjon',
      content: `Indre motivasjon betyr at du driver med en aktivitet fordi den i seg selv gir glede, mestring eller tilfredshet. Du trener fordi du liker det, ikke på grunn av ytre belønninger.`,
    },
    {
      id: 'kroppsoving-vg2-3-1-def-2',
      type: 'definition',
      title: 'Ytre motivasjon',
      content: `Ytre motivasjon innebærer at du drives av faktorer utenfor selve aktiviteten, som premier, karakterer, sosial anerkjennelse eller å unngå straff. Ytre motivasjon kan variere fra kontrollert til selvbestemt.`,
    },
    {
      id: 'kroppsoving-vg2-3-1-text-1',
      type: 'text',
      title: 'Selvbestemmelsesteorien (SDT)',
      content: `Deci og Ryans selvbestemmelsesteori er en av de mest brukte motivasjonsteoriene i idrett. Teorien hevder at tre grunnleggende psykologiske behov må dekkes for å fremme indre motivasjon: **autonomi** (opplevelse av valgfrihet), **kompetanse** (opplevelse av mestring) og **tilhørighet** (opplevelse av sosial tilknytning). Når disse behovene dekkes, øker den indre motivasjonen og trivselen.`,
    },
    {
      id: 'kroppsoving-vg2-3-1-example-1',
      type: 'example',
      title: 'Indre vs. ytre motivasjon i praksis',
      problem: 'En elev trener håndball tre ganger i uken. Hvordan kan indre og ytre motivasjon se ut for denne eleven?',
      solution: `**Indre motivasjon**: Eleven elsker lagfølelsen, gleder seg til å lære nye finter, og opplever mestringsfølelse i kamp. **Ytre motivasjon**: Eleven vil bli tatt ut på A-laget, foreldrene gir belønning for oppmøte, og treneren setter opp rangeringslister. Ideelt bør den indre motivasjonen være sterkest for langvarig engasjement.`,
    },
    {
      id: 'kroppsoving-vg2-3-1-text-2',
      type: 'text',
      title: 'Mestringsorientering vs. resultatorientering',
      content: `I idrettspsykologi skiller vi mellom to hovedtyper målorienteringer. **Mestringsorienterte** utøvere fokuserer på egen fremgang og utvikling, og sammenligner seg med seg selv. **Resultatorienterte** utøvere fokuserer på å vinne og sammenligner seg med andre. Forskning viser at mestringsorientering gir mer stabil motivasjon og mindre prestasjonsangst over tid.`,
    },
    {
      id: 'kroppsoving-vg2-3-1-def-3',
      type: 'definition',
      title: 'Motivasjonsklima',
      content: `Motivasjonsklima beskriver det psykologiske miljøet i en treningsgruppe. Et mestringsklima vektlegger individuell utvikling og innsats, mens et prestasjonsklima vektlegger sammenligning og resultater.`,
    },
    {
      id: 'kroppsoving-vg2-3-1-text-3',
      type: 'text',
      content: `Trenere og lærere har stor innvirkning på motivasjonsklimaet. Ved å gi valgmuligheter, anerkjenne innsats fremfor resultat, og skape trygge rammer for å feile, kan man bygge et mestringsklima som fremmer indre motivasjon hos utøverne.`,
    },
    {
      id: 'kroppsoving-vg2-3-1-tip-1',
      type: 'tip',
      title: 'Bygg din indre motivasjon',
      content: `Sett deg personlige mål for utvikling fremfor bare resultater. Finn treningsformer du genuint liker, og tren gjerne sammen med andre. Autonomi, mestring og tilhørighet er nøklene til varig motivasjon.`,
    },
    {
      id: 'kroppsoving-vg2-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva kjennetegner indre motivasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det alternativet som best beskriver indre motivasjon.',
            solution: 'Du driver med aktiviteten fordi den i seg selv gir glede og mestring',
            multipleChoiceOptions: [
              'Du driver med aktiviteten fordi den i seg selv gir glede og mestring',
              'Du trener for å vinne premier og medaljer',
              'Du trener fordi foreldrene krever det',
              'Du trener for å få bedre karakter i kroppsøving',
            ],
          },
        ],
        solution: 'Indre motivasjon betyr at selve aktiviteten er belønningen. Gleden, mestringen og tilfredsstillelsen ved å utøve er det som driver deg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilke tre grunnleggende behov beskriver selvbestemmelsesteorien?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg de tre behovene i Deci og Ryans selvbestemmelsesteori.',
            solution: 'Autonomi, kompetanse og tilhørighet',
            multipleChoiceOptions: [
              'Autonomi, kompetanse og tilhørighet',
              'Styrke, utholdenhet og bevegelighet',
              'Seier, ære og berømmelse',
              'Søvn, ernæring og trening',
            ],
          },
        ],
        solution: 'Selvbestemmelsesteorien peker på autonomi (valgfrihet), kompetanse (mestringsopplevelse) og tilhørighet (sosial tilknytning) som de tre grunnleggende behovene for indre motivasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva kjennetegner et mestringsklima?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det alternativet som best beskriver et mestringsklima.',
            solution: 'Individuell utvikling og innsats vektlegges fremfor resultater',
            multipleChoiceOptions: [
              'Individuell utvikling og innsats vektlegges fremfor resultater',
              'Bare de beste utøverne får oppmerksomhet',
              'Rangering og sammenligning er viktigst',
              'Treneren bestemmer alt uten medvirkning',
            ],
          },
        ],
        solution: 'Et mestringsklima vektlegger personlig utvikling, innsats og prosess. Alle opplever at de blir sett og anerkjent for egen fremgang, uavhengig av nivå.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar forskjellen mellom mestringsorientering og resultatorientering med egne eksempler fra idrett.',
        solution: 'Mestringsorientering: Fokuserer på egen utvikling, f.eks. å slå sin personlige rekord i 60-meteren. Resultatorientering: Fokuserer på å vinne eller slå andre, f.eks. å bli best i klassen. Mestringsorientering gir ofte mer stabil motivasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Beskriv en situasjon der ytre motivasjon kan undergrave indre motivasjon. Bruk selvbestemmelsesteorien til å forklare hvorfor.',
        solution: 'Eksempel: En elev som elsker å løpe for gleden av det, begynner å få premier for hver trening. Over tid kan fokuset skifte fra gleden til premiene. Ifølge SDT svekkes autonomien fordi aktiviteten oppleves som kontrollert utenfra, noe som kan redusere indre motivasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-3-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en plan for hvordan en trener kan bygge et mestringsklima i en idrettsgruppe. Begrunn valgene dine med motivasjonsteori.',
        solution: 'En trener kan: 1) Gi utøverne medbestemmelse i treningsopplegg (autonomi), 2) Tilpasse oppgaver slik at alle opplever fremgang (kompetanse), 3) Bruke lagøvelser og sosiale aktiviteter (tilhørighet), 4) Anerkjenne innsats og utvikling fremfor bare resultater, 5) Unngå rangering og offentlig sammenligning. Dette bygger på SDT og mestringsklimaets prinsipper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// 3.2 Konsentrasjon og fokus
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_3_2: TextbookChapter = {
  id: 'kroppsoving-vg2-3-2',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '3.2',
  title: 'Konsentrasjon og fokus',
  description: 'Lær teknikker for å styre oppmerksomheten og holde fokus under trening og konkurranse.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstå ulike typer oppmerksomhetsfokus i idrett',
    'bruke konsentrasjonsteknikker for å forbedre egen prestasjon',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-3-2-intro',
      type: 'text',
      content: `Konsentrasjon er evnen til å rette og holde oppmerksomheten på det som er relevant for oppgaven. I idrett er konsentrasjon avgjørende for å prestere optimalt, enten det gjelder en balanse-øvelse, en sprint eller taktiske valg i lagspill.`,
    },
    {
      id: 'kroppsoving-vg2-3-2-def-1',
      type: 'definition',
      title: 'Selektiv oppmerksomhet',
      content: `Selektiv oppmerksomhet er evnen til å fokusere på relevant informasjon og filtrere bort forstyrrelser. I idrett betyr dette å rette oppmerksomheten mot det som er viktig for prestasjonen, som ballens bane eller motstanderens posisjon.`,
    },
    {
      id: 'kroppsoving-vg2-3-2-text-1',
      type: 'text',
      title: 'Nideffers oppmerksomhetsmodell',
      content: `Nideffer beskrev fire typer oppmerksomhetsfokus langs to dimensjoner: **bredde** (bred vs. smal) og **retning** (intern vs. ekstern). **Bred-ekstern**: Overblikk over spillet (lese spillet i fotball). **Smal-ekstern**: Fokus på ett punkt (sikte på mål). **Bred-intern**: Analysere og planlegge (vurdere taktikk). **Smal-intern**: Kontrollere kroppen (pusteteknikk, mental forberedelse).`,
    },
    {
      id: 'kroppsoving-vg2-3-2-def-2',
      type: 'definition',
      title: 'Flow',
      content: `Flow er en psykologisk tilstand der du er fullstendig oppslukt av aktiviteten. Tidsfølelsen forsvinner, og du presterer tilsynelatende uanstrengt. Flow oppstår typisk når utfordringsnivået matcher ferdighetsnivået.`,
    },
    {
      id: 'kroppsoving-vg2-3-2-example-1',
      type: 'example',
      title: 'Oppmerksomhetsfokus i ulike idretter',
      problem: 'Gi eksempler på hvordan ulike typer oppmerksomhetsfokus brukes i basketball.',
      solution: `**Bred-ekstern**: Spilloppbyggeren scanner banen for medspilleres posisjoner. **Smal-ekstern**: Skytteren fokuserer på ringen ved frikast. **Bred-intern**: Treneren analyserer motstanderens forsvarsmønster i timeout. **Smal-intern**: Spilleren kontrollerer pusten sin før frikast for å roe ned nervene.`,
    },
    {
      id: 'kroppsoving-vg2-3-2-text-2',
      type: 'text',
      title: 'Distraksjoner og fokusstrategier',
      content: `Vanlige distraksjoner i idrett er publikum, egne tanker om feil, smerter og press om resultater. Effektive fokusstrategier inkluderer **stikkord** (korte triggere som "rolig" eller "push"), **prestasjonsrutiner** (fast rekkefølge av handlinger før prestasjon) og **refokusering** (bevisst tilbakestilling av fokus etter distraksjon).`,
    },
    {
      id: 'kroppsoving-vg2-3-2-text-3',
      type: 'text',
      content: `Forskning viser at de beste utøverne er bedre på å refokusere etter forstyrrelser enn å unngå dem helt. Evnen til å raskt vende tilbake til oppgaverelevant fokus etter en feil eller distraksjon skiller ofte toppidrettsutøvere fra andre.`,
    },
    {
      id: 'kroppsoving-vg2-3-2-tip-1',
      type: 'tip',
      title: 'Tren konsentrasjonen',
      content: `Begynn med å definere hva du bør fokusere på i din aktivitet. Lag gjerne et stikkord du bruker for å hente tilbake fokus. Øv på prestasjonsrutiner slik at de blir automatiske, og tren på refokusering etter feil.`,
    },
    {
      id: 'kroppsoving-vg2-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er selektiv oppmerksomhet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den beste definisjonen av selektiv oppmerksomhet.',
            solution: 'Evnen til å fokusere på relevant informasjon og filtrere bort forstyrrelser',
            multipleChoiceOptions: [
              'Evnen til å fokusere på relevant informasjon og filtrere bort forstyrrelser',
              'Evnen til å gjøre flere ting samtidig',
              'Evnen til å huske informasjon over lang tid',
              'Evnen til å reagere raskt på uventede hendelser',
            ],
          },
        ],
        solution: 'Selektiv oppmerksomhet handler om å rette fokus mot det som er relevant og ignorere det som ikke er det. Dette er sentralt i all idrettsprestasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken type oppmerksomhetsfokus bruker en tennisspiller som fokuserer på motstanderens racketvinkel?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig type oppmerksomhetsfokus.',
            solution: 'Smal-ekstern',
            multipleChoiceOptions: [
              'Smal-ekstern',
              'Bred-ekstern',
              'Smal-intern',
              'Bred-intern',
            ],
          },
        ],
        solution: 'Å fokusere på ett spesifikt punkt utenfor seg selv (motstanderens racketvinkel) er smal-ekstern oppmerksomhet ifølge Nideffers modell.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Når oppstår flow-tilstand typisk?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det alternativet som best beskriver når flow oppstår.',
            solution: 'Når utfordringsnivået matcher ferdighetsnivået',
            multipleChoiceOptions: [
              'Når utfordringsnivået matcher ferdighetsnivået',
              'Når oppgaven er veldig enkel',
              'Når du er svært nervøs',
              'Når du konkurrerer mot noen mye bedre enn deg',
            ],
          },
        ],
        solution: 'Flow oppstår når utfordringen er passe stor i forhold til dine ferdigheter. For lite utfordring gir kjedsomhet, for mye gir angst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv en prestasjonsrutine du kan bruke i en selvvalgt idrett. Forklar hvordan rutinen hjelper konsentrasjonen.',
        solution: 'Eksempel for frikast i basketball: 1) Ta tre spretter med ballen, 2) Dyp innpust, 3) Fokuser blikket på ringen, 4) Bøy knærne, 5) Kast. Rutinen gir forutsigbarhet, styrer fokus til smal-ekstern oppmerksomhet, og blokkerer distraherende tanker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Bruk Nideffers oppmerksomhetsmodell til å analysere en lagidrett. Gi eksempler på alle fire typer oppmerksomhetsfokus.',
        solution: 'Eksempel fra fotball: Bred-ekstern: Keeperen leser spillets utvikling. Smal-ekstern: Spissen sikter på hjørnet ved straffespark. Bred-intern: Midtbanespilleren planlegger neste angrepsmønster. Smal-intern: Spilleren fokuserer på pusten og muskelavspenning under dødball.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-3-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Tenk på en gang du opplevde flow under trening eller konkurranse. Beskriv situasjonen og analyser hvorfor flow-tilstanden oppsto.',
        solution: 'Svar vil variere. Bør inkludere: Beskrivelse av aktiviteten, at utfordringen matchet ferdighetsnivået, at oppmerksomheten var fullstendig rettet mot oppgaven, at tidsfølelsen endret seg, og eventuelt hva som kunne ha forstyrret opplevelsen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// 3.3 Visualisering og mental forestilling
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_3_3: TextbookChapter = {
  id: 'kroppsoving-vg2-3-3',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '3.3',
  title: 'Visualisering og mental forestilling',
  description: 'Lær hvordan du kan bruke mentale bilder til å forbedre teknikk, bygge selvtillit og forberede deg til konkurranse.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke visualiseringsteknikker for å forbedre egen prestasjon',
    'forstå hvordan mental trening kan supplere fysisk trening',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-3-3-intro',
      type: 'text',
      content: `Visualisering, eller mental forestilling, innebærer at du skaper eller gjenskaper opplevelser i hodet uten fysisk utførelse. Forskning viser at hjernen aktiveres på lignende måte under visualisering som under faktisk bevegelse, noe som gjør mental trening til et kraftfullt supplement til fysisk trening.`,
    },
    {
      id: 'kroppsoving-vg2-3-3-def-1',
      type: 'definition',
      title: 'Visualisering',
      content: `Visualisering er en mental teknikk der du bevisst forestiller deg en idrettslig handling, situasjon eller prestasjon. Det involverer å bruke alle sanser for å skape en så livaktig mental opplevelse som mulig.`,
    },
    {
      id: 'kroppsoving-vg2-3-3-text-1',
      type: 'text',
      title: 'PETTLEP-modellen',
      content: `PETTLEP-modellen (Holmes & Collins) beskriver syv faktorer for effektiv visualisering: **Physical** (forestill deg kroppsfølelsen), **Environment** (se for deg omgivelsene), **Task** (forestill deg oppgaven nøyaktig), **Timing** (bruk realistisk tid), **Learning** (oppdater bildene etter hvert som du utvikler deg), **Emotion** (inkluder følelsene du vil ha) og **Perspective** (bruk førsteperson eller tredjeperson-perspektiv).`,
    },
    {
      id: 'kroppsoving-vg2-3-3-def-2',
      type: 'definition',
      title: 'Intern vs. ekstern visualisering',
      content: `Intern visualisering betyr at du ser for deg bevegelsen fra eget perspektiv (førsteperson), som om du ser gjennom egne øyne. Ekstern visualisering betyr at du ser deg selv utenfra (tredjeperson), som om du ser på video av deg selv.`,
    },
    {
      id: 'kroppsoving-vg2-3-3-example-1',
      type: 'example',
      title: 'Visualisering i praksis',
      problem: 'En friidrettsutøver skal forberede seg mentalt til lengdehopp. Hvordan kan hun bruke PETTLEP-modellen?',
      solution: `**Physical**: Hun kjenner tilløpet i bena og satsen. **Environment**: Hun ser for seg stadion med publikum. **Task**: Hun ser hele hoppet fra tilløp til landing. **Timing**: Hun bruker like lang tid som et reelt hopp. **Learning**: Hun oppdaterer teknikken basert på siste treninger. **Emotion**: Hun kjenner spenning og glede. **Perspective**: Hun ser hoppet fra eget perspektiv (intern). Dette gjøres kort tid før konkurransen for best effekt.`,
    },
    {
      id: 'kroppsoving-vg2-3-3-text-2',
      type: 'text',
      title: 'Bruksområder for visualisering',
      content: `Visualisering kan brukes til **teknikklæring** (mentalt øve på bevegelsesmønstre), **mestringsforberedelse** (forestille seg at du håndterer utfordringer), **selvtillitsbygging** (se for deg vellykkede prestasjoner) og **skaderehabilitering** (vedlikeholde bevegelsesmønstre mentalt under skadeperioder).`,
    },
    {
      id: 'kroppsoving-vg2-3-3-text-3',
      type: 'text',
      content: `For at visualisering skal fungere, bør den være regelmessig og strukturert. Start med korte sesjoner på 3-5 minutter og gjør det til en del av treningsrutinen. Jo mer levende og detaljert forestillingen er, desto bedre effekt gir den.`,
    },
    {
      id: 'kroppsoving-vg2-3-3-tip-1',
      type: 'tip',
      title: 'Kom i gang med visualisering',
      content: `Sett deg ned på et rolig sted, lukk øynene, og se for deg en teknisk bevegelse du ønsker å forbedre. Bruk alle sanser: Se bevegelsen, kjenn kroppsfølelsen, hør lydene. Start enkelt og bygg gradvis opp detaljnivået.`,
    },
    {
      id: 'kroppsoving-vg2-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva står bokstavene i PETTLEP-modellen for?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring av PETTLEP.',
            solution: 'Physical, Environment, Task, Timing, Learning, Emotion, Perspective',
            multipleChoiceOptions: [
              'Physical, Environment, Task, Timing, Learning, Emotion, Perspective',
              'Planning, Effort, Training, Technique, Listening, Energy, Power',
              'Preparation, Endurance, Tactics, Teamwork, Leadership, Evaluation, Performance',
              'Practice, Exercise, Testing, Teaching, Loyalty, Enthusiasm, Patience',
            ],
          },
        ],
        solution: 'PETTLEP står for Physical, Environment, Task, Timing, Learning, Emotion og Perspective. Modellen gir retningslinjer for effektiv visualisering i idrett.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen mellom intern og ekstern visualisering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av intern visualisering.',
            solution: 'Du ser bevegelsen fra eget perspektiv, som om du ser gjennom egne øyne',
            multipleChoiceOptions: [
              'Du ser bevegelsen fra eget perspektiv, som om du ser gjennom egne øyne',
              'Du ser deg selv utenfra, som på en video',
              'Du tenker på bevegelsen uten å bruke mentale bilder',
              'Du visualiserer bare omgivelsene, ikke deg selv',
            ],
          },
        ],
        solution: 'Intern visualisering (førsteperson) betyr at du ser gjennom egne øyne. Ekstern visualisering (tredjeperson) betyr at du ser deg selv utenfra. Begge har verdi avhengig av formål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilket bruksområde for visualisering handler om å forestille seg at du håndterer utfordringer?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig bruksområde.',
            solution: 'Mestringsforberedelse',
            multipleChoiceOptions: [
              'Mestringsforberedelse',
              'Teknikklæring',
              'Skaderehabilitering',
              'Styrketrening',
            ],
          },
        ],
        solution: 'Mestringsforberedelse innebærer å visualisere at du håndterer vanskelige situasjoner, som nervøsitet, motgang eller press, på en god måte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Gjennomfør en visualiseringsøvelse for en teknisk ferdighet i din idrett. Beskriv hva du forestilte deg og hvordan det føltes.',
        solution: 'Svar vil variere. Bør inkludere: Hvilken ferdighet som ble visualisert, bruk av flere sanser (syn, hørsel, bevegelse), emosjonell opplevelse, perspektiv (intern/ekstern), og en refleksjon over hvordan det opplevdes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar hvordan en skadet utøver kan bruke visualisering som del av rehabiliteringen. Bruk PETTLEP-modellen.',
        solution: 'En skadet utøver kan visualisere bevegelsene de ikke kan utføre fysisk. Med PETTLEP: Physical (kjenne muskelaktivering mentalt), Environment (se for seg treningshallen), Task (se hele teknikken), Timing (bruke realistisk tempo), Learning (tilpasse etter rehabiliteringsfase), Emotion (positive følelser), Perspective (intern). Dette vedlikeholder nevrale baner og kan forkorte rehabiliteringstiden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-3-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag et 4-ukers visualiseringsprogram for en utøver som skal forberede seg til en viktig konkurranse. Beskriv innhold og progresjon.',
        solution: 'Uke 1: Grunnleggende visualisering 3 min daglig, fokus på teknisk utførelse (intern perspektiv). Uke 2: Øk til 5 min, inkluder konkurranseomgivelsene (Environment) og følelser (Emotion). Uke 3: Visualiser hele konkurransesituasjonen med realistisk timing, inkluder mestringsforberedelse for utfordringer. Uke 4: Full PETTLEP-visualisering som del av oppvarmingsrutine, inkluder positive utfall og mestringssituasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// 3.4 Spenningsregulering og mestring av press
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_3_4: TextbookChapter = {
  id: 'kroppsoving-vg2-3-4',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '3.4',
  title: 'Spenningsregulering og mestring av press',
  description: 'Lær å regulere aktiveringsninvået for optimal prestasjon og håndtere press i konkurransesituasjoner.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå sammenhengen mellom aktivering og prestasjon',
    'bruke teknikker for spenningsregulering i trenings- og konkurransesituasjoner',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-3-4-intro',
      type: 'text',
      content: `Alle utøvere opplever spenning og press, men de beste vet hvordan de skal regulere aktiveringsnivået sitt. For lite aktivering gir sløvhet, for mye gir angst og anspenthet. Å finne det optimale spenningsnivået er en sentral ferdighet i idrettspsykologi.`,
    },
    {
      id: 'kroppsoving-vg2-3-4-def-1',
      type: 'definition',
      title: 'Yerkes-Dodson-loven',
      content: `Yerkes-Dodson-loven beskriver sammenhengen mellom aktivering (arousal) og prestasjon som en omvendt U-kurve. Prestasjonen er best ved et moderat aktiveringsnivå. For lavt nivå gir underaktivering, og for høyt nivå gir overaktivering - begge reduserer prestasjonen.`,
    },
    {
      id: 'kroppsoving-vg2-3-4-text-1',
      type: 'text',
      title: 'Optimalt aktiveringsnivå varierer',
      content: `Det optimale aktiveringsnivået varierer mellom idretter og individer. **Grovmotoriske idretter** (styrkeløft, sprint) tåler høyere aktivering enn **finmotoriske idretter** (skyting, golf). Erfarne utøvere håndterer også høyere aktivering bedre enn nybegynnere. Kjennskap til eget optimale nivå er derfor viktig.`,
    },
    {
      id: 'kroppsoving-vg2-3-4-def-2',
      type: 'definition',
      title: 'Prestasjonsangst',
      content: `Prestasjonsangst er en tilstand av nervøsitet og bekymring knyttet til å prestere. Den har en kognitiv komponent (bekymringstanker) og en somatisk komponent (kroppslige symptomer som høy puls, svetting og muskelspenning).`,
    },
    {
      id: 'kroppsoving-vg2-3-4-example-1',
      type: 'example',
      title: 'Aktiveringsregulering i praksis',
      problem: 'En håndballspiller er svært nervøs før en viktig kamp. Hvordan kan hun regulere aktiveringsnivået?',
      solution: `**Nedregulering (for å senke spenningen)**: 1) Diafragmapusting: Langsomme, dype pust der utpust er lengre enn innpust. 2) Progressiv muskelavspenning: Spenner og slapper av ulike muskelgrupper systematisk. 3) Stikkord: Gjenta rolige ord som "slapp av" eller "kontroll". **Oppregulering (hvis for lite spenning)**: 1) Energisk musikk, 2) Rask pusting, 3) Aktive bevegelser og klapp.`,
    },
    {
      id: 'kroppsoving-vg2-3-4-text-2',
      type: 'text',
      title: 'Pusteøvelser for spenningsregulering',
      content: `Pusten er et av de mest effektive verktøyene for å regulere aktivering fordi den påvirker det autonome nervesystemet direkte. **Diafragmapusting** (mageområdet utvider seg) aktiverer det parasympatiske nervesystemet og senker puls og spenningsnivå. En enkel teknikk er **4-7-8-metoden**: Pust inn i 4 sekunder, hold i 7 sekunder, pust ut i 8 sekunder.`,
    },
    {
      id: 'kroppsoving-vg2-3-4-def-3',
      type: 'definition',
      title: 'Kognitiv restrukturering',
      content: `Kognitiv restrukturering er en teknikk der du identifiserer og endrer negative eller uhensiktsmessige tanker. I idrett brukes dette til å erstatte tanker som "Jeg kommer til å feile" med mer konstruktive tanker som "Jeg har trent godt og er forberedt".`,
    },
    {
      id: 'kroppsoving-vg2-3-4-text-3',
      type: 'text',
      content: `Å mestre press handler ikke om å fjerne nervøsiteten, men om å tolke den positivt. Forskning viser at utøvere som tolker sommerfugler i magen som "kroppen gjør seg klar" presterer bedre enn de som tolker det som "jeg er redd". Denne omtolkningen kalles ofte "challenge appraisal" versus "threat appraisal".`,
    },
    {
      id: 'kroppsoving-vg2-3-4-tip-1',
      type: 'tip',
      title: 'Kjenn ditt optimale aktiveringsnivå',
      content: `Tenk tilbake på dine beste prestasjoner. Hvordan føltes det i kroppen? Var du rolig, middels spent eller veldig spent? Bruk dette som referansepunkt og jobb med å finne tilbake til denne tilstanden før viktige prestasjoner.`,
    },
    {
      id: 'kroppsoving-vg2-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva beskriver Yerkes-Dodson-loven?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den beste beskrivelsen av Yerkes-Dodson-loven.',
            solution: 'Sammenhengen mellom aktivering og prestasjon følger en omvendt U-kurve',
            multipleChoiceOptions: [
              'Sammenhengen mellom aktivering og prestasjon følger en omvendt U-kurve',
              'Jo mer nervøs du er, desto bedre presterer du',
              'Alle presterer best når de er helt avslappet',
              'Aktivering har ingen effekt på prestasjon',
            ],
          },
        ],
        solution: 'Yerkes-Dodson-loven viser at prestasjonen er best ved moderat aktivering. Både for lite og for mye spenning gir dårligere prestasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken idrettstype krever vanligvis lavest aktiveringsnivå for optimal prestasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig idrettstype.',
            solution: 'Finmotoriske idretter som skyting og bueskyting',
            multipleChoiceOptions: [
              'Finmotoriske idretter som skyting og bueskyting',
              'Grovmotoriske idretter som styrkeløft',
              'Eksplosive idretter som sprint',
              'Kontaktidretter som rugby',
            ],
          },
        ],
        solution: 'Finmotoriske idretter krever presisjon og kontroll, og tåler derfor lavere aktiveringsnivå enn grovmotoriske og eksplosive idretter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er kognitiv restrukturering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den beste forklaringen av kognitiv restrukturering.',
            solution: 'Å identifisere og endre negative tanker til mer konstruktive tanker',
            multipleChoiceOptions: [
              'Å identifisere og endre negative tanker til mer konstruktive tanker',
              'Å trene fysisk styrke',
              'Å unngå alle stressende situasjoner',
              'Å slutte å tenke helt under konkurranse',
            ],
          },
        ],
        solution: 'Kognitiv restrukturering handler om å bevisst endre tankemønstre. I idrett brukes det til å erstatte hemmende tanker med tanker som fremmer prestasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Gjennomfør 4-7-8-pusteøvelsen fem ganger. Beskriv hvordan kroppen din føltes før og etter.',
        solution: 'Svar vil variere. Bør inkludere en beskrivelse av spenningsnivå og kroppslige fornemmelser før øvelsen, opplevelsen underveis, og endringer i puls, muskelspenning og ro etterpå. De fleste vil oppleve lavere spenning etter øvelsen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar forskjellen mellom "challenge appraisal" og "threat appraisal". Gi eksempler fra en konkurransesituasjon.',
        solution: 'Challenge appraisal: Utøveren tolker nervøsiteten som at kroppen er klar for prestasjon. Eksempel: "Sommerfuglene i magen betyr at jeg er klar!" Threat appraisal: Utøveren tolker nervøsiteten som farlig. Eksempel: "Jeg er så nervøs at jeg kommer til å feile." De som bruker challenge appraisal presterer typisk bedre under press.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-3-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en plan for spenningsregulering for en utøver som skal prestere i en viktig konkurranse. Inkluder både nedregulering og oppregulering, og begrunn med Yerkes-Dodson-loven.',
        solution: 'Plan: Kvelden før: Progressiv muskelavspenning og visualisering for å sikre god søvn. Morgenen: Lett oppvarming og rolig musikk for å unngå overaktivering. 1 time før: Sjekke spenningsnivå. Er utøveren for spent: diafragmapusting og kognitiv restrukturering. Er utøveren for slapp: energisk musikk og dynamisk oppvarming. Rett før start: Prestasjonsrutine med stikkord. Begrunnelse: Ifølge Yerkes-Dodson må spenningen verken være for høy eller lav.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// 3.5 Selvtillit og mestringstro
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_3_5: TextbookChapter = {
  id: 'kroppsoving-vg2-3-5',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '3.5',
  title: 'Selvtillit og mestringstro',
  description: 'Forstå hva mestringstro er, hvordan den bygges opp, og hvorfor den er avgjørende for prestasjon.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstå begrepet mestringstro og dets betydning for prestasjon',
    'bruke strategier for å bygge og vedlikeholde selvtillit i idrett',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-3-5-intro',
      type: 'text',
      content: `Selvtillit i idrett handler om troen på at du kan lykkes med en bestemt oppgave. Denne troen påvirker innsats, utholdenhet og hvordan du håndterer motgang. Utøvere med høy mestringstro presterer bedre, tåler mer motgang og setter seg høyere mål.`,
    },
    {
      id: 'kroppsoving-vg2-3-5-def-1',
      type: 'definition',
      title: 'Self-efficacy (mestringstro)',
      content: `Self-efficacy, eller mestringstro, er ifølge Albert Bandura troen på egen evne til å gjennomføre en bestemt oppgave eller nå et bestemt mål. Det er ikke en generell selvfølelse, men en oppgavespesifikk tro på egen kapasitet.`,
    },
    {
      id: 'kroppsoving-vg2-3-5-text-1',
      type: 'text',
      title: 'Banduras fire kilder til mestringstro',
      content: `Bandura identifiserte fire hovedkilder til self-efficacy: **1) Mestringserfaring** er den sterkeste kilden og bygges gjennom å lykkes med oppgaver. **2) Vikarierende erfaring** er å se andre på lignende nivå lykkes, noe som styrker troen på at du også kan klare det. **3) Verbal overtalelse** er oppmuntring og positiv tilbakemelding fra trenere og medspillere. **4) Fysiologisk og emosjonell tilstand** handler om hvordan du tolker kroppens signaler som puls og spenning.`,
    },
    {
      id: 'kroppsoving-vg2-3-5-def-2',
      type: 'definition',
      title: 'Mestringserfaring',
      content: `Mestringserfaring er den viktigste kilden til self-efficacy. Hver gang du lykkes med en oppgave, styrkes troen på at du kan klare lignende oppgaver i fremtiden. Gjentatte suksesser bygger robust mestringstro.`,
    },
    {
      id: 'kroppsoving-vg2-3-5-example-1',
      type: 'example',
      title: 'Bygge mestringstro i praksis',
      problem: 'En elev har lav selvtillit i turn. Hvordan kan læreren bruke Banduras fire kilder for å bygge mestringstroen?',
      solution: `**Mestringserfaring**: Gi eleven enklere øvelser først slik at hun opplever å lykkes, og øk gradvis vanskelighetsgraden. **Vikarierende erfaring**: La eleven se en jevnaldring på lignende nivå mestre øvelsen. **Verbal overtalelse**: Gi spesifikk og ærlig ros som "Du holdt armene strake hele veien, det var flott." **Fysiologisk tilstand**: Lær eleven pusteøvelser slik at nervøsitet tolkes som positiv spenning.`,
    },
    {
      id: 'kroppsoving-vg2-3-5-text-2',
      type: 'text',
      title: 'Selvtillit og målsetting',
      content: `Selvtillit og målsetting henger tett sammen. **Prosessmål** (fokus på utførelse) og **prestasjonsmål** (personlige standarder) bygger mestringstro mer effektivt enn **resultatmål** (seier/tap). Ved å sette realistiske, men utfordrende mål, kan utøvere skape en positiv spiral av mestring og økt selvtillit.`,
    },
    {
      id: 'kroppsoving-vg2-3-5-text-3',
      type: 'text',
      content: `Selvtillit er ikke statisk, men svinger med erfaringer og prestasjoner. Viktig er at robust selvtillit bygges over tid gjennom systematisk arbeid. Utøvere som har opplevd å mestre motgang, har ofte sterkere mestringstro enn de som aldri har blitt utfordret.`,
    },
    {
      id: 'kroppsoving-vg2-3-5-def-3',
      type: 'definition',
      title: 'Selvoppfyllende profeti',
      content: `En selvoppfyllende profeti oppstår når forventninger om et utfall påvirker atferden slik at utfallet blir som forventet. I idrett: Tror du at du vil mislykkes, kan det føre til lavere innsats og dårligere prestasjon, som bekrefter den negative troen.`,
    },
    {
      id: 'kroppsoving-vg2-3-5-tip-1',
      type: 'tip',
      title: 'Styrk din mestringstro',
      content: `Hold en treningsdagbok der du noterer små og store fremskritt. Når selvtilliten er lav, les tilbake og se hvor langt du har kommet. Omgi deg med folk som støtter deg, og husk at tilbakeslag er en naturlig del av utviklingen.`,
    },
    {
      id: 'kroppsoving-vg2-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er self-efficacy ifølge Bandura?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den beste definisjonen av self-efficacy.',
            solution: 'Troen på egen evne til å gjennomføre en bestemt oppgave',
            multipleChoiceOptions: [
              'Troen på egen evne til å gjennomføre en bestemt oppgave',
              'En generell følelse av å være god nok',
              'Evnen til å kontrollere egne følelser',
              'Hvor mye fysisk styrke du har',
            ],
          },
        ],
        solution: 'Self-efficacy er oppgavespesifikk. Det handler ikke om generell selvfølelse, men om troen på at du kan klare en bestemt utfordring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken av Banduras fire kilder til mestringstro er den sterkeste?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den sterkeste kilden til self-efficacy.',
            solution: 'Mestringserfaring (å lykkes med oppgaven selv)',
            multipleChoiceOptions: [
              'Mestringserfaring (å lykkes med oppgaven selv)',
              'Verbal overtalelse fra treneren',
              'Å se andre lykkes på video',
              'Å føle seg opplagt fysisk',
            ],
          },
        ],
        solution: 'Mestringserfaring er den sterkeste kilden fordi den gir direkte bevis på at du kan klare oppgaven. De andre kildene er viktige supplementer, men erstatter ikke egen suksessopplevelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er en selvoppfyllende profeti i idrettssammenheng?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det alternativet som best forklarer selvoppfyllende profeti.',
            solution: 'Forventningen om et utfall påvirker atferden slik at utfallet blir som forventet',
            multipleChoiceOptions: [
              'Forventningen om et utfall påvirker atferden slik at utfallet blir som forventet',
              'At treneren alltid vet hvem som vil vinne',
              'At de med mest talent alltid lykkes',
              'At flaks bestemmer resultatet i konkurranse',
            ],
          },
        ],
        solution: 'Selvoppfyllende profetier viser hvordan tanker påvirker atferd. Negative forventninger kan føre til redusert innsats og dermed dårligere resultat, mens positive forventninger kan gi økt innsats og bedre prestasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Gi konkrete eksempler på hvordan en trener kan bruke alle fire kildene til self-efficacy for en utøver som sliter med en ny teknikk.',
        solution: 'Mestringserfaring: Bryt teknikken ned i enklere deler som utøveren mestrer, og bygg gradvis opp. Vikarierende erfaring: Vis video av en utøver på lignende nivå som mestrer teknikken. Verbal overtalelse: "Jeg ser at du har god balanse, og det er viktig for denne teknikken. Du er på god vei." Fysiologisk tilstand: Lær utøveren avspenningsøvelser før forsøk, slik at nervøsitet ikke hemmer utførelsen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar forskjellen mellom prosessmål, prestasjonsmål og resultatmål. Hvorfor er prosessmål og prestasjonsmål bedre for mestringstro?',
        solution: 'Prosessmål: Fokus på teknikk og utførelse (f.eks. "Holde albuen høy ved skudd"). Prestasjonsmål: Personlig standard (f.eks. "Løpe 100 meter under 13 sekunder"). Resultatmål: Knyttet til utfall (f.eks. "Vinne kampen"). Prosess- og prestasjonsmål bygger mestringstro bedre fordi de er kontrollerbare og gir hyppigere mestringsopplevelser, mens resultatmål avhenger av motstandere og ytre faktorer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-3-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-3-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Reflekter over din egen mestringstro i en aktivitet. Identifiser hvilke av Banduras fire kilder som påvirker deg mest, og lag en plan for å styrke din mestringstro.',
        solution: 'Svar vil variere. Bør inkludere: Valg av aktivitet, ærlig vurdering av eget mestringstro-nivå, identifisering av hvilke kilder som påvirker mest (f.eks. "Når treneren gir meg positiv tilbakemelding, tror jeg mer på meg selv"), og en konkret plan som adresserer minst to av de fire kildene (f.eks. "Jeg vil sette delmål for å oppleve mestring oftere, og be om spesifikk tilbakemelding fra trener").',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler i kapittel 3
// ============================================================================

export const KROPPSOVING_VG2_KAP3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KROPPSOVING_VG2_3_1,
  CHAPTER_KROPPSOVING_VG2_3_2,
  CHAPTER_KROPPSOVING_VG2_3_3,
  CHAPTER_KROPPSOVING_VG2_3_4,
  CHAPTER_KROPPSOVING_VG2_3_5,
];
