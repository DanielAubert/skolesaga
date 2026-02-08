/**
 * Kroppsøving VG2 - Kapittel 4: Prestasjon og samarbeid
 *
 * Dekker LK20-kompetansemål for kroppsøving VG2:
 * - Prestasjonsutvikling og talentutvikling
 * - Flow og optimal prestasjon (Csikszentmihalyi)
 * - Samarbeid og lagdynamikk (Tuckman)
 * - Mestringsstrategier og selvregulering
 * - Vurdering og tilbakemelding (VFL, formativ/summativ)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 4.1: Prestasjonsutvikling og talentutvikling
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_4_1: TextbookChapter = {
  id: 'kroppsoving-vg2-4-1',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '4.1',
  title: 'Prestasjonsutvikling og talentutvikling',
  description: 'Lær om hva som kjennetegner god prestasjonsutvikling, forskjellen mellom tidlig spesialisering og allsidighet, og hvordan talent utvikles over tid.',
  estimatedMinutes: 45,
  competenceGoals: [
    'reflektere over hva som påvirker prestasjonsutvikling i idrett og fysisk aktivitet',
    'drøfte fordeler og ulemper ved tidlig spesialisering versus allsidig trening',
    'forstå sammenhengen mellom motivasjon, øving og utvikling',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-4-1-intro',
      type: 'text',
      content: `Hva skal til for å utvikle seg som utøver? Prestasjonsutvikling handler ikke bare om fysisk trening, men også om mentale ferdigheter, motivasjon og et godt treningsmiljø. I dette kapittelet ser vi på hvordan talent utvikles og hva forskning sier om veien til gode prestasjoner.`,
    },
    {
      id: 'kroppsoving-vg2-4-1-def-1',
      type: 'definition',
      title: 'Prestasjonsutvikling',
      content: `Prestasjonsutvikling er den langsiktige prosessen der en utøver forbedrer sine fysiske, tekniske, taktiske og mentale ferdigheter gjennom systematisk trening og erfaring over tid.`,
    },
    {
      id: 'kroppsoving-vg2-4-1-text-1',
      type: 'text',
      content: `**Allsidighet versus tidlig spesialisering**

Forskning viser at allsidig aktivitet i barne- og ungdomsårene gir flere fordeler enn tidlig spesialisering i én idrett. Allsidighet utvikler et bredt bevegelsesgrunnlag, reduserer skaderisiko og forebygger utbrenthet. Mange toppidrettsutøvere drev med flere idretter i oppveksten før de spesialiserte seg i tenårene.

Tidlig spesialisering kan gi rask fremgang på kort sikt, men øker risikoen for overbelastningsskader, motivasjonstap og frafall fra idrett. Unntaket er idretter med tidlig prestasjonstopp, som turn og kunstløp.`,
    },
    {
      id: 'kroppsoving-vg2-4-1-def-2',
      type: 'definition',
      title: 'Allsidighet (diversifisering)',
      content: `Allsidighet i idrettssammenheng betyr å delta i flere ulike aktiviteter og idretter i oppveksten, fremfor å spesialisere seg i bare én idrett. Dette gir et bredere motorisk repertoar og bedre langsiktig utvikling.`,
    },
    {
      id: 'kroppsoving-vg2-4-1-example-1',
      type: 'example',
      title: 'Allsidighet i praksis',
      problem: 'En 14-åring spiller fotball, driver med friidrett om sommeren og svømmer om vinteren. Er dette gunstig for utviklingen?',
      solution: 'Ja. Fotball utvikler koordinasjon og samarbeid, friidrett gir god løpsteknikk og hurtighet, og svømming bygger utholdenhet uten belastning på ledd. Sammen gir dette et bredt bevegelsesgrunnlag som gagner utøveren uansett hvilken idrett hen velger å spesialisere seg i senere.',
    },
    {
      id: 'kroppsoving-vg2-4-1-text-2',
      type: 'text',
      content: `**Talentutvikling og vekstfaktorer**

Talent er ikke bare medfødte egenskaper. Forskning viser at talent utvikles gjennom samspillet mellom genetiske forutsetninger, treningsmiljø, motivasjon og mengden kvalitetstrening over tid. Relative aldersforskjeller (fødselsmånedseffekten) kan gi noen barn fysiske fordeler som forveksles med talent.

Et godt utviklingsmiljø kjennetegnes av kompetente trenere, støttende omgivelser, passende utfordringer og mulighet for egenorganisert lek og aktivitet.`,
    },
    {
      id: 'kroppsoving-vg2-4-1-text-3',
      type: 'text',
      content: `**Indre og ytre motivasjon**

Indre motivasjon, der man driver med aktiviteten fordi den er gøy og givende i seg selv, er den sterkeste drivkraften for langsiktig utvikling. Ytre motivasjon som premier, karakterer og press fra andre kan fungere på kort sikt, men gir sjelden varig engasjement. De beste utviklingsmiljøene fremmer indre motivasjon gjennom mestring, selvbestemmelse og tilhørighet.`,
    },
    {
      id: 'kroppsoving-vg2-4-1-tip-1',
      type: 'tip',
      title: 'Veien til mestring',
      content: `Fokuser på din egen utvikling fremfor å sammenligne deg med andre. Sett deg konkrete, realistiske mål og feir fremgangen underveis. Mestringsorientering gir bedre langsiktig utvikling enn prestasjonsorientering.`,
    },
    {
      id: 'kroppsoving-vg2-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva kjennetegner prestasjonsutvikling?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den beste beskrivelsen av prestasjonsutvikling.',
            solution: 'Langsiktig forbedring av fysiske, tekniske, taktiske og mentale ferdigheter',
            multipleChoiceOptions: [
              'Langsiktig forbedring av fysiske, tekniske, taktiske og mentale ferdigheter',
              'Bare fysisk trening over kort tid',
              'Å vinne flest mulig konkurranser',
              'Genetisk bestemt evne som ikke kan trenes opp',
            ],
          },
        ],
        solution: 'Prestasjonsutvikling er en helhetlig, langsiktig prosess som omfatter flere dimensjoner enn bare den fysiske.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva sier forskningen om tidlig spesialisering versus allsidighet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig påstand om allsidighet i barne- og ungdomsidretten.',
            solution: 'Allsidighet gir bredere bevegelsesgrunnlag og reduserer skaderisiko',
            multipleChoiceOptions: [
              'Allsidighet gir bredere bevegelsesgrunnlag og reduserer skaderisiko',
              'Tidlig spesialisering gir alltid best resultater',
              'Allsidighet gjør at man aldri blir god i noe',
              'Det spiller ingen rolle om man er allsidig eller spesialisert',
            ],
          },
        ],
        solution: 'Forskning støtter allsidig aktivitet i oppveksten. Det bygger et bredt motorisk repertoar, forebygger skader og utbrenthet, og gir bedre langsiktig utvikling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er fødselsmånedseffekten?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring på fødselsmånedseffekten i idrett.',
            solution: 'Barn født tidlig på året kan ha fysiske fordeler som forveksles med talent',
            multipleChoiceOptions: [
              'Barn født tidlig på året kan ha fysiske fordeler som forveksles med talent',
              'Alle som er født i januar er best i idrett',
              'Fødselsmåned bestemmer hvilken idrett du bør drive med',
              'Effekten av å trene i den måneden du er født',
            ],
          },
        ],
        solution: 'Fødselsmånedseffekten viser at barn født tidlig i kalenderåret kan være opptil 12 måneder eldre enn de yngste i samme alderskull, noe som gir fysiske fordeler som feilaktig kan tolkes som talent.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar forskjellen mellom indre og ytre motivasjon, og drøft hvilken form som er viktigst for langsiktig utvikling i idrett.',
        solution: 'Indre motivasjon kommer fra gleden ved selve aktiviteten, mens ytre motivasjon drives av belønning, anerkjennelse eller press. Forskning viser at indre motivasjon er viktigst for langsiktig utvikling fordi den gir vedvarende engasjement og glede. Ytre motivasjon kan fungere på kort sikt, men fører ofte til frafall når belønningen uteblir.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-4-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Beskriv hva som kjennetegner et godt utviklingsmiljø for unge utøvere. Gi minst tre konkrete kjennetegn.',
        solution: 'Et godt utviklingsmiljø kjennetegnes av: 1) Kompetente trenere som fokuserer på utvikling fremfor resultater. 2) Støttende omgivelser der det er trygt å prøve og feile. 3) Passende utfordringer tilpasset den enkeltes nivå. 4) Mulighet for egenorganisert lek og aktivitet. 5) Fokus på mestring og indre motivasjon fremfor prestasjonspress.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-4-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Tenk på din egen idrettslige utvikling. Har du vært allsidig eller spesialisert? Drøft hvordan dette har påvirket din utvikling, motivasjon og glede ved fysisk aktivitet.',
        solution: 'Svar vil variere. Bør inkludere: Beskrivelse av egne aktiviteter, refleksjon over fordeler og ulemper med egen tilnærming, kobling til teori om allsidighet og spesialisering, og tanker om hvordan egen motivasjon har blitt påvirket.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.2: Flow og optimal prestasjon
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_4_2: TextbookChapter = {
  id: 'kroppsoving-vg2-4-2',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '4.2',
  title: 'Flow og optimal prestasjon',
  description: 'Forstå Csikszentmihalyis flowteori, hva som kjennetegner optimal prestasjon, og hvordan du kan legge til rette for flow i trening og konkurranse.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forklare hva flow er og hvordan det påvirker prestasjon',
    'beskrive betingelsene for å oppnå flow i idrett og fysisk aktivitet',
    'reflektere over sammenhengen mellom utfordring, ferdighet og optimal prestasjon',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-4-2-intro',
      type: 'text',
      content: `Har du noen gang vært så oppslukt av en aktivitet at du glemte tid og sted? Den tilstanden kalles flow, og den henger tett sammen med optimal prestasjon. I dette kapittelet utforsker vi Mihaly Csikszentmihalyis flowteori og hva den betyr for idrett og fysisk aktivitet.`,
    },
    {
      id: 'kroppsoving-vg2-4-2-def-1',
      type: 'definition',
      title: 'Flow',
      content: `Flow er en psykologisk tilstand der en person er fullstendig oppslukt av en aktivitet. Begrepet ble utviklet av psykologen Mihaly Csikszentmihalyi. I flow opplever man dyp konsentrasjon, tap av tidsoppfatning, og at handlinger flyter naturlig og uanstrengt.`,
    },
    {
      id: 'kroppsoving-vg2-4-2-text-1',
      type: 'text',
      content: `**Kjennetegn ved flow**

Csikszentmihalyi beskrev ni kjennetegn ved flowtilstanden:
1. **Balanse mellom utfordring og ferdighet** - oppgaven er verken for lett eller for vanskelig
2. **Klare mål** - du vet hva du skal gjøre
3. **Umiddelbar tilbakemelding** - du vet hvordan det går
4. **Dyp konsentrasjon** - full oppmerksomhet på oppgaven
5. **Handling og bevissthet smelter sammen** - du handler uten å tenke
6. **Følelse av kontroll** - du opplever mestring
7. **Tap av selvbevissthet** - du glemmer deg selv
8. **Endret tidsoppfatning** - tiden flyr eller står stille
9. **Autotelisk opplevelse** - aktiviteten er belønning i seg selv`,
    },
    {
      id: 'kroppsoving-vg2-4-2-def-2',
      type: 'definition',
      title: 'Flowkanalen',
      content: `Flowkanalen er modellen som viser forholdet mellom utfordringsnivå og ferdighetsnivå. Flow oppstår når utfordringen matcher ferdighetene. Er utfordringen for høy i forhold til ferdighetene, oppstår angst. Er utfordringen for lav, oppstår kjedsomhet.`,
    },
    {
      id: 'kroppsoving-vg2-4-2-example-1',
      type: 'example',
      title: 'Flowkanalen i praksis',
      problem: 'En basketballspiller som er nybegynner settes til å spille mot landslaget. En annen nybegynner trener dribbling med en venn på samme nivå. Hvem opplever mest sannsynlig flow?',
      solution: 'Nybegynneren som trener med en venn på samme nivå er mest sannsynlig å oppleve flow. Her matcher utfordringen ferdighetsnivået. Mot landslaget vil utfordringen være altfor stor i forhold til ferdighetene, noe som skaper frustrasjon og angst fremfor flow.',
    },
    {
      id: 'kroppsoving-vg2-4-2-text-2',
      type: 'text',
      content: `**Optimal prestasjon i idrett**

Optimal prestasjon oppstår når en utøver presterer på sitt beste. Dette henger ofte sammen med flow, men krever også god forberedelse. Faktorer som påvirker optimal prestasjon er aktiveringsregulering (riktig spenningsnivå), fokus på prosess fremfor resultat, og evnen til å være til stede i øyeblikket.

Den omvendte U-kurven (Yerkes-Dodsons lov) viser at prestasjon er best ved moderat aktivering. For lite aktivering gir sløvhet, mens for mye gir nervøsitet og spenning som hemmer prestasjonen.`,
    },
    {
      id: 'kroppsoving-vg2-4-2-text-3',
      type: 'text',
      content: `**Hvordan legge til rette for flow**

Du kan øke sjansen for flow ved å: sette klare, oppnåelige mål for hver treningsøkt, velge utfordringer som ligger litt over nåværende ferdighetsnivå, fjerne distraksjoner og være mentalt til stede, og søke aktiviteter du genuint liker. Trenere kan legge til rette ved å tilpasse oppgaver til den enkeltes nivå og skape trygge rammer for utforskning.`,
    },
    {
      id: 'kroppsoving-vg2-4-2-tip-1',
      type: 'tip',
      title: 'Finn din flowsone',
      content: `Legg merke til når du er mest oppslukt av en aktivitet. Hva kjennetegner situasjonen? Bruk denne innsikten til å skape flere slike opplevelser i treningen. Flow kommer oftere når du trener noe du synes er meningsfullt.`,
    },
    {
      id: 'kroppsoving-vg2-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er flow ifølge Csikszentmihalyi?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den beste beskrivelsen av flow.',
            solution: 'En tilstand der man er fullstendig oppslukt av en aktivitet og handlinger flyter naturlig',
            multipleChoiceOptions: [
              'En tilstand der man er fullstendig oppslukt av en aktivitet og handlinger flyter naturlig',
              'En treningsmetode for utholdenhet',
              'Evnen til å slappe av fullstendig',
              'En type yoga-øvelse',
            ],
          },
        ],
        solution: 'Flow er en psykologisk tilstand preget av dyp konsentrasjon, tap av tidsoppfatning og en opplevelse av at handlinger flyter naturlig og uanstrengt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva skjer ifølge flowkanalen når utfordringen er mye høyere enn ferdighetsnivået?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig konsekvens av for høy utfordring i forhold til ferdighet.',
            solution: 'Man opplever angst og frustrasjon',
            multipleChoiceOptions: [
              'Man opplever angst og frustrasjon',
              'Man opplever flow',
              'Man blir kjedet',
              'Man presterer optimalt',
            ],
          },
        ],
        solution: 'Når utfordringen er for høy i forhold til ferdighetene, plasserer man seg utenfor flowkanalen på angstsiden. Dette gir stress og dårligere prestasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva sier Yerkes-Dodsons lov om forholdet mellom aktivering og prestasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av den omvendte U-kurven.',
            solution: 'Prestasjon er best ved moderat aktivering, og dårligere ved for lite eller for mye aktivering',
            multipleChoiceOptions: [
              'Prestasjon er best ved moderat aktivering, og dårligere ved for lite eller for mye aktivering',
              'Jo mer aktivert man er, desto bedre presterer man',
              'Aktivering har ingen effekt på prestasjon',
              'Man presterer best når man er helt avslappet',
            ],
          },
        ],
        solution: 'Yerkes-Dodsons lov beskriver at prestasjon følger en omvendt U-kurve. Moderat aktivering gir optimal prestasjon, mens for lite gir sløvhet og for mye gir hemming.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv minst fire av de ni kjennetegnene ved flow og forklar hvordan de henger sammen med god prestasjon i idrett.',
        solution: 'Fire kjennetegn kan for eksempel være: 1) Balanse mellom utfordring og ferdighet gir riktig vanskelighetsgrad. 2) Klare mål gir retning og fokus. 3) Umiddelbar tilbakemelding lar utøveren justere underveis. 4) Dyp konsentrasjon fjerner forstyrrende tanker. Disse henger sammen med god prestasjon fordi de gjør at utøveren er fullt fokusert, tilpasser seg fortløpende og opplever mestring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Gi et konkret eksempel fra egen erfaring der du opplevde noe som ligner flow i fysisk aktivitet. Beskriv situasjonen og knytt den til teorien.',
        solution: 'Svar vil variere. Bør inkludere: Beskrivelse av situasjonen, hvilke kjennetegn ved flow som var til stede (f.eks. tap av tidsoppfatning, dyp konsentrasjon), og en vurdering av om utfordringen matchet ferdighetsnivået.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-4-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Som trener skal du planlegge en økt der du legger til rette for flow hos deltakerne. Beskriv hvordan du vil tilpasse utfordringsnivå, sette mål og gi tilbakemelding.',
        solution: 'Svar bør inkludere: 1) Differensiere oppgaver slik at utfordringen matcher den enkeltes ferdighetsnivå. 2) Sette klare, konkrete mål for økten. 3) Gi umiddelbar og konstruktiv tilbakemelding underveis. 4) Skape et trygt miljø uten for mye prestasjonspress. 5) Velge aktiviteter som engasjerer og motiverer deltakerne.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.3: Samarbeid og lagdynamikk
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_4_3: TextbookChapter = {
  id: 'kroppsoving-vg2-4-3',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '4.3',
  title: 'Samarbeid og lagdynamikk',
  description: 'Utforsk hvordan grupper utvikler seg, hva som kjennetegner godt samarbeid, og Tuckmans modell for gruppeutvikling.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare Tuckmans modell for gruppeutvikling',
    'drøfte hva som kjennetegner godt samarbeid i idrett og fysisk aktivitet',
    'reflektere over egen rolle i et lag eller en gruppe',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-4-3-intro',
      type: 'text',
      content: `Idrett og fysisk aktivitet skjer ofte i fellesskap. Å forstå hvordan grupper fungerer og utvikler seg er avgjørende for å skape gode prestasjonsmiljøer. I dette kapittelet lærer du om lagdynamikk, grupperoller og Tuckmans modell for gruppeutvikling.`,
    },
    {
      id: 'kroppsoving-vg2-4-3-def-1',
      type: 'definition',
      title: 'Lagdynamikk',
      content: `Lagdynamikk handler om de psykologiske og sosiale prosessene som påvirker hvordan medlemmer i en gruppe samhandler, kommuniserer og presterer sammen. Det inkluderer roller, normer, kommunikasjon og konflikthåndtering.`,
    },
    {
      id: 'kroppsoving-vg2-4-3-text-1',
      type: 'text',
      content: `**Tuckmans modell for gruppeutvikling**

Bruce Tuckman beskrev i 1965 fire faser som grupper typisk gjennomgår:

1. **Forming (dannelsesfasen)** - Gruppemedlemmene blir kjent, er høflige og forsiktige. Rollene er uklare og avhengigheten av lederen er stor.
2. **Storming (konfliktfasen)** - Uenigheter og maktkamper oppstår. Medlemmer utfordrer hverandre og lederen. Dette er en nødvendig fase for utvikling.
3. **Norming (normeringsfasen)** - Gruppen finner felles spilleregler og normer. Samarbeidet bedres og rollene avklares. Tillit og aksept utvikles.
4. **Performing (prestasjonsfasen)** - Gruppen fungerer effektivt og selvstendig. Medlemmene støtter hverandre og fokuserer på felles mål.

Tuckman la senere til en femte fase: **Adjourning (avslutningsfasen)**, der gruppen oppløses.`,
    },
    {
      id: 'kroppsoving-vg2-4-3-def-2',
      type: 'definition',
      title: 'Gruppekohesjon',
      content: `Gruppekohesjon er styrken i båndet som holder gruppen sammen. Det deles inn i oppgavekohesjon (samhold rundt felles mål og oppgaver) og sosial kohesjon (sosiale relasjoner og trivsel i gruppen). Begge typer er viktige for gode prestasjoner.`,
    },
    {
      id: 'kroppsoving-vg2-4-3-example-1',
      type: 'example',
      title: 'Tuckmans faser i et idrettslag',
      problem: 'Et nytt håndballag er satt sammen ved skolestart. Beskriv hvordan laget kan utvikle seg gjennom Tuckmans faser.',
      solution: 'Forming: Spillerne er usikre på roller og prøver å finne sin plass. Storming: Konflikter oppstår om hvem som skal spille hvor, og noen er frustrerte over manglende samspill. Norming: Laget blir enige om spillestil, roller avklares, og spillerne begynner å stole på hverandre. Performing: Laget spiller godt sammen, kommuniserer effektivt og løser utfordringer selvstendig.',
    },
    {
      id: 'kroppsoving-vg2-4-3-text-2',
      type: 'text',
      content: `**Roller og ansvar i et lag**

I alle grupper oppstår formelle og uformelle roller. Formelle roller er tildelte (som kaptein eller trener), mens uformelle roller utvikles naturlig (som motivatoren, fredsmekleren eller komikeren). God lagdynamikk krever at medlemmene forstår og aksepterer hverandres roller, og at alle føler de bidrar til fellesskapet.`,
    },
    {
      id: 'kroppsoving-vg2-4-3-text-3',
      type: 'text',
      content: `**Kommunikasjon og konflikthåndtering**

Effektiv kommunikasjon er grunnsteinen i godt samarbeid. Det innebærer å lytte aktivt, gi konstruktive tilbakemeldinger, og uttrykke egne behov og meninger tydelig. Konflikter er naturlige og kan være konstruktive hvis de håndteres godt. Nøkkelen er å ta opp uenigheter tidlig, fokusere på sak fremfor person, og søke løsninger som ivaretar alle parter.`,
    },
    {
      id: 'kroppsoving-vg2-4-3-tip-1',
      type: 'tip',
      title: 'Konflikter er normalt',
      content: `Ikke vær redd for storming-fasen. Konflikter er en naturlig del av gruppeutvikling og kan føre til bedre samarbeid hvis de håndteres konstruktivt. Grupper som unngår alle konflikter utvikler seg sjelden til performing-fasen.`,
    },
    {
      id: 'kroppsoving-vg2-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva kalles den andre fasen i Tuckmans modell for gruppeutvikling?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig fase.',
            solution: 'Storming (konfliktfasen)',
            multipleChoiceOptions: [
              'Storming (konfliktfasen)',
              'Forming (dannelsesfasen)',
              'Norming (normeringsfasen)',
              'Performing (prestasjonsfasen)',
            ],
          },
        ],
        solution: 'Storming er den andre fasen der uenigheter og maktkamper oppstår. Denne fasen er nødvendig for at gruppen skal utvikle seg videre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er gruppekohesjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den beste beskrivelsen av gruppekohesjon.',
            solution: 'Styrken i båndet som holder gruppen sammen, inkludert oppgavekohesjon og sosial kohesjon',
            multipleChoiceOptions: [
              'Styrken i båndet som holder gruppen sammen, inkludert oppgavekohesjon og sosial kohesjon',
              'Antall medlemmer i en gruppe',
              'Hvor mange kamper et lag vinner',
              'Lagets økonomiske ressurser',
            ],
          },
        ],
        solution: 'Gruppekohesjon omfatter både oppgavekohesjon (samhold om mål) og sosial kohesjon (trivsel og relasjoner), og begge er viktige for lagets fungering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva kjennetegner performing-fasen i Tuckmans modell?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig kjennetegn ved performing-fasen.',
            solution: 'Gruppen fungerer effektivt, medlemmene støtter hverandre og jobber selvstendig mot felles mål',
            multipleChoiceOptions: [
              'Gruppen fungerer effektivt, medlemmene støtter hverandre og jobber selvstendig mot felles mål',
              'Gruppen er preget av konflikter og maktkamper',
              'Medlemmene er usikre og avhengige av lederen',
              'Gruppen er i ferd med å oppløses',
            ],
          },
        ],
        solution: 'I performing-fasen har gruppen avklart roller, normer og spilleregler. Fokus er på felles mål, og samarbeidet er effektivt og selvstendig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-4-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar forskjellen mellom formelle og uformelle roller i et lag. Gi eksempler på begge typer.',
        solution: 'Formelle roller er tildelte og offisielle, som kaptein, keepertrener eller lagspiller på en bestemt posisjon. Uformelle roller utvikles naturlig basert på personlighet, som motivatoren som heier alle frem, fredsmekleren som løser konflikter, eller komikeren som letter stemningen. Begge typer roller er viktige for lagets fungering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-4-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvorfor storming-fasen er en nødvendig del av gruppeutviklingen. Hva kan skje hvis gruppen unngår konflikter?',
        solution: 'Storming er nødvendig fordi gruppen må avklare roller, forventninger og arbeidsformer. Gjennom konflikter lærer medlemmene å forstå hverandres perspektiver og finne felles løsninger. Grupper som unngår konflikter risikerer å bli stående i forming-fasen med uavklarte roller, undertrykt frustrasjon og overfladisk samarbeid som aldri utvikler seg til effektiv prestasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-4-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Tenk på en gruppe eller et lag du har vært del av. Beskriv gruppens utvikling med utgangspunkt i Tuckmans modell. Hvilke faser gjenkjenner du?',
        solution: 'Svar vil variere. Bør inkludere: Beskrivelse av konkrete situasjoner fra de ulike fasene, refleksjon over egen rolle i gruppen, og vurdering av hvordan gruppen håndterte overgangene mellom fasene. Eleven bør vise at de kan bruke teorien til å forstå egne erfaringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.4: Mestringsstrategier og selvregulering
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_4_4: TextbookChapter = {
  id: 'kroppsoving-vg2-4-4',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '4.4',
  title: 'Mestringsstrategier og selvregulering',
  description: 'Lær om mentale strategier for å håndtere press, regulere følelser og oppnå bedre prestasjoner i idrett og hverdagsliv.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive ulike mestringsstrategier og hvordan de kan brukes i idrett',
    'forstå begrepet selvregulering og dets betydning for læring og prestasjon',
    'anvende mentale teknikker for å håndtere prestasjonspress og motgang',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-4-4-intro',
      type: 'text',
      content: `Alle møter motgang og press i idrett og fysisk aktivitet. Hvordan du håndterer disse situasjonene avgjør ofte om du lykkes eller gir opp. Mestringsstrategier og selvregulering er mentale verktøy som hjelper deg å prestere bedre og takle utfordringer på en konstruktiv måte.`,
    },
    {
      id: 'kroppsoving-vg2-4-4-def-1',
      type: 'definition',
      title: 'Mestringsstrategier',
      content: `Mestringsstrategier er bevisste mentale og atferdsmessige teknikker en person bruker for å håndtere stress, press og utfordringer. I idrett skiller man ofte mellom problemfokuserte strategier (løse selve problemet) og emosjonsfokuserte strategier (håndtere følelsene problemet skaper).`,
    },
    {
      id: 'kroppsoving-vg2-4-4-text-1',
      type: 'text',
      content: `**Problemfokuserte og emosjonsfokuserte strategier**

**Problemfokuserte strategier** retter seg mot å endre situasjonen:
- Planlegging og målsetting
- Innhente informasjon og kunnskap
- Øke trening på svake områder
- Søke hjelp fra trener eller eksperter

**Emosjonsfokuserte strategier** retter seg mot å håndtere følelser:
- Avspenningsøvelser og pustekontroll
- Positiv selvsnakk og mental omprogrammering
- Visualisering av gode prestasjoner
- Aksept og mindfulness`,
    },
    {
      id: 'kroppsoving-vg2-4-4-def-2',
      type: 'definition',
      title: 'Selvregulering',
      content: `Selvregulering er evnen til å styre egne tanker, følelser og handlinger mot et mål. I idrett handler det om å kontrollere aktiveringsnivå, holde fokus, håndtere feil og justere innsats etter behov. Selvregulering er en ferdighet som kan trenes og utvikles over tid.`,
    },
    {
      id: 'kroppsoving-vg2-4-4-example-1',
      type: 'example',
      title: 'Selvregulering under press',
      problem: 'En straffekaster i fotball kjenner at nervene tar over rett før skuddet. Hvilke selvreguleringsteknikker kan hjelpe?',
      solution: 'Spilleren kan bruke flere teknikker: 1) Pustekontroll med dype, rolige pust for å senke aktiveringsnivået. 2) Positiv selvsnakk som "Jeg har øvd på dette, jeg klarer det." 3) Visualisering av ballen som går i mål. 4) Fokus på rutinen (plassering av ball, oppstilling, mål) fremfor resultatet. Disse teknikkene hjelper spilleren å regulere nervøsitet og holde fokus på oppgaven.',
    },
    {
      id: 'kroppsoving-vg2-4-4-text-2',
      type: 'text',
      content: `**Mentale teknikker for idrettsutøvere**

**Visualisering**: Å forestille seg en prestasjon i detalj før den utføres. Forskning viser at mental trening aktiverer mange av de samme hjerneområdene som fysisk utførelse.

**Positiv selvsnakk**: Å erstatte negative tanker med konstruktive. I stedet for "Jeg klarer aldri dette" kan man tenke "Jeg har trent godt og gjør mitt beste."

**Pustekontroll**: Dype, kontrollerte pust aktiverer det parasympatiske nervesystemet og demper stressresponsene. Teknikken 4-7-8 (pust inn i 4 sek, hold i 7, pust ut i 8) er effektiv.`,
    },
    {
      id: 'kroppsoving-vg2-4-4-text-3',
      type: 'text',
      content: `**Mestringsorientering versus prestasjonsorientering**

Mestringsorienterte utøvere definerer suksess ut fra egen utvikling og innsats. Prestasjonsorienterte utøvere definerer suksess ut fra å vinne over andre. Forskning viser at mestringsorientering gir bedre langsiktig utvikling, større utholdenhet ved motgang, og sterkere indre motivasjon. De to orienteringene kan kombineres, men mestringsorientering bør være grunnmuren.`,
    },
    {
      id: 'kroppsoving-vg2-4-4-tip-1',
      type: 'tip',
      title: 'Tren hodet som kroppen',
      content: `Mentale ferdigheter kan trenes akkurat som fysiske. Sett av 5-10 minutter daglig til visualisering eller pusteøvelser. Over tid vil dette styrke evnen til selvregulering under press.`,
    },
    {
      id: 'kroppsoving-vg2-4-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen mellom problemfokuserte og emosjonsfokuserte mestringsstrategier?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av problemfokuserte strategier.',
            solution: 'Strategier som retter seg mot å endre selve situasjonen, for eksempel økt trening eller bedre planlegging',
            multipleChoiceOptions: [
              'Strategier som retter seg mot å endre selve situasjonen, for eksempel økt trening eller bedre planlegging',
              'Strategier som bare handler om å ignorere problemet',
              'Strategier der man lar andre løse problemene for seg',
              'Strategier som kun brukes i konkurranser',
            ],
          },
        ],
        solution: 'Problemfokuserte strategier handler om å gjøre noe aktivt med situasjonen, mens emosjonsfokuserte strategier handler om å håndtere følelsene som oppstår.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-4-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er selvregulering i idrettssammenheng?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den beste beskrivelsen av selvregulering.',
            solution: 'Evnen til å styre egne tanker, følelser og handlinger mot et mål',
            multipleChoiceOptions: [
              'Evnen til å styre egne tanker, følelser og handlinger mot et mål',
              'Å la treneren bestemme alt',
              'Å unngå all form for stress',
              'En type fysisk trening',
            ],
          },
        ],
        solution: 'Selvregulering handler om bevisst styring av egne mentale prosesser og handlinger for å nå mål, og er en ferdighet som kan utvikles gjennom øving.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-4-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva kjennetegner mestringsorientering sammenlignet med prestasjonsorientering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig kjennetegn ved mestringsorientering.',
            solution: 'Suksess defineres ut fra egen utvikling og innsats, ikke sammenligning med andre',
            multipleChoiceOptions: [
              'Suksess defineres ut fra egen utvikling og innsats, ikke sammenligning med andre',
              'Suksess handler bare om å vinne over andre',
              'Man unngår alle utfordringer',
              'Man bryr seg ikke om resultater i det hele tatt',
            ],
          },
        ],
        solution: 'Mestringsorienterte utøvere fokuserer på egen læring og forbedring. Dette gir bedre langsiktig utvikling og sterkere indre motivasjon enn ren prestasjonsorientering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-4-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv tre konkrete mentale teknikker en utøver kan bruke for å håndtere prestasjonspress. Forklar hvordan hver teknikk fungerer.',
        solution: '1) Visualisering: Utøveren forestiller seg prestasjonen i detalj, noe som aktiverer hjerneområder knyttet til bevegelse og forbereder kroppen. 2) Positiv selvsnakk: Erstatte negative tanker med konstruktive, som gir økt selvtillit og fokus. 3) Pustekontroll: Dype, langsomme pust aktiverer det parasympatiske nervesystemet og senker stressnivået, noe som gir bedre kontroll over kroppen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-4-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Gi et eksempel på en situasjon i idrett der du ville brukt en problemfokusert strategi og en der du ville brukt en emosjonsfokusert strategi. Begrunn valgene dine.',
        solution: 'Problemfokusert: Hvis man taper kamper fordi man har svak teknikk, kan man øke teknikktrening (endre situasjonen). Emosjonsfokusert: Hvis man er nervøs før en viktig kamp, kan man bruke pusteøvelser og visualisering (håndtere følelsene), fordi man ikke kan endre at kampen er viktig. Valget avhenger av om man kan påvirke situasjonen direkte eller ikke.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-4-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en plan for mentalt treningsprogram på én uke. Inkluder konkrete teknikker, tidspunkter og varighet. Forklar hva du forventer å oppnå med programmet.',
        solution: 'Svar vil variere. Bør inkludere: Daglige øvelser som visualisering (5-10 min), pusteøvelser (morgen/kveld), selvsnakk-trening i forbindelse med trening, og refleksjon/loggføring. Programmet bør ha klare mål, som å bli bedre på å håndtere nervøsitet eller holde fokus under trening.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.5: Vurdering og tilbakemelding
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_4_5: TextbookChapter = {
  id: 'kroppsoving-vg2-4-5',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '4.5',
  title: 'Vurdering og tilbakemelding',
  description: 'Forstå ulike former for vurdering, forskjellen mellom formativ og summativ vurdering, og hvordan vurdering for læring (VFL) kan fremme utvikling.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forklare forskjellen mellom formativ og summativ vurdering',
    'beskrive prinsipper for vurdering for læring (VFL) i kroppsøving',
    'bruke egenvurdering og medelevvurdering som verktøy for utvikling',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-4-5-intro',
      type: 'text',
      content: `Vurdering er en viktig del av lærings- og utviklingsprosessen i kroppsøving. Men vurdering handler om mye mer enn karakterer. I dette kapittelet lærer du om hvordan ulike vurderingsformer kan brukes til å fremme læring, og hvordan du selv kan bli bedre på å vurdere egen utvikling.`,
    },
    {
      id: 'kroppsoving-vg2-4-5-def-1',
      type: 'definition',
      title: 'Formativ vurdering',
      content: `Formativ vurdering er vurdering som skjer underveis i læringsprosessen, med mål om å fremme videre læring. Det kalles også vurdering for læring (VFL). Kjennetegn er tilbakemeldinger som peker fremover, dialog mellom elev og lærer, og fokus på hva eleven kan gjøre for å forbedre seg.`,
    },
    {
      id: 'kroppsoving-vg2-4-5-text-1',
      type: 'text',
      content: `**Formativ versus summativ vurdering**

**Formativ vurdering (vurdering FOR læring)**:
- Skjer underveis i læringsprosessen
- Gir tilbakemelding som hjelper eleven videre
- Fokuserer på prosess og utvikling
- Eksempler: muntlige tilbakemeldinger, læringssamtaler, loggføring

**Summativ vurdering (vurdering AV læring)**:
- Skjer ved slutten av en periode
- Oppsummerer hva eleven har lært
- Gir en karakter eller vurdering av kompetansenivå
- Eksempler: standpunktkarakter, eksamen, tester

Begge formene er nødvendige, men formativ vurdering har størst potensial for å fremme læring.`,
    },
    {
      id: 'kroppsoving-vg2-4-5-def-2',
      type: 'definition',
      title: 'Vurdering for læring (VFL)',
      content: `Vurdering for læring er en pedagogisk tilnærming der vurdering brukes som et verktøy for å fremme læring. Fire sentrale prinsipper er: 1) Elevene forstår hva de skal lære og hva som forventes. 2) Elevene får tilbakemeldinger som forteller dem om kvaliteten på arbeidet. 3) Elevene får råd om hva de kan gjøre for å forbedre seg. 4) Elevene er involvert i egen læring gjennom egenvurdering.`,
    },
    {
      id: 'kroppsoving-vg2-4-5-example-1',
      type: 'example',
      title: 'VFL i kroppsøving',
      problem: 'Hvordan kan en kroppsøvingslærer bruke VFL-prinsippene i en friidrettsøkt med kulestøt?',
      solution: '1) Eleven får vite læringsmålene og kjennetegn på god teknikk på forhånd. 2) Læreren gir konkret tilbakemelding underveis: "Glidningen din er god, men armen skyver fremfor å støte." 3) Læreren gir råd om forbedring: "Prøv å holde albuen høyere og tenk på å støte ut fra halsen." 4) Eleven vurderer egne forsøk ved å sammenligne med kjennetegnene og diskuterer med medelever hva som fungerte.',
    },
    {
      id: 'kroppsoving-vg2-4-5-text-2',
      type: 'text',
      content: `**Egenvurdering og medelevvurdering**

Egenvurdering er når eleven selv vurderer eget arbeid, innsats og utvikling. Dette utvikler metakognisjon og selvbevissthet. Medelevvurdering er når elever gir tilbakemelding til hverandre basert på kjente kriterier. Begge formene krever trening og trygge rammer for å fungere godt.

I kroppsøving kan egenvurdering gjøres gjennom treningslogg, videoanalyse av egen teknikk, og refleksjonssamtaler. Medelevvurdering fungerer godt ved at elever observerer hverandres teknikk og gir tilbakemelding ut fra på forhånd avtalte kriterier.`,
    },
    {
      id: 'kroppsoving-vg2-4-5-text-3',
      type: 'text',
      content: `**Gode tilbakemeldinger**

En god tilbakemelding er konkret, konstruktiv og fremoverpekende. Utsagn som "Bra jobba!" gir lite læringsverdi, mens "Du holder god balanse i svingen, men prøv å bøye knærne mer i nedslaget for bedre stabilitet" gir eleven noe konkret å jobbe med. Den beste tilbakemeldingen kobler seg til læringsmålene og gir eleven et tydelig neste steg i utviklingen.`,
    },
    {
      id: 'kroppsoving-vg2-4-5-tip-1',
      type: 'tip',
      title: 'Bruk treningslogg',
      content: `Før en enkel treningslogg der du noterer hva du trente, hvordan det gikk, og hva du vil fokusere på neste gang. Dette er praktisk egenvurdering som gjør deg mer bevisst på egen utvikling over tid.`,
    },
    {
      id: 'kroppsoving-vg2-4-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er hovedforskjellen mellom formativ og summativ vurdering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av formativ vurdering.',
            solution: 'Vurdering som skjer underveis og har som mål å fremme videre læring',
            multipleChoiceOptions: [
              'Vurdering som skjer underveis og har som mål å fremme videre læring',
              'Vurdering som bare gir en sluttkarakter',
              'Vurdering som kun gjøres av læreren',
              'Vurdering som handler om fysiske tester',
            ],
          },
        ],
        solution: 'Formativ vurdering (vurdering for læring) skjer underveis og peker fremover, mens summativ vurdering (vurdering av læring) oppsummerer kompetanse ved slutten av en periode.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-4-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilke prinsipper ligger til grunn for vurdering for læring (VFL)?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig VFL-prinsipp.',
            solution: 'Elevene forstår hva de skal lære, får tilbakemelding og råd om forbedring, og vurderer eget arbeid',
            multipleChoiceOptions: [
              'Elevene forstår hva de skal lære, får tilbakemelding og råd om forbedring, og vurderer eget arbeid',
              'Læreren bestemmer alt uten å involvere elevene',
              'Bare karakterer og prøver brukes som vurdering',
              'Elevene skal ikke vite hva de vurderes i',
            ],
          },
        ],
        solution: 'VFL bygger på at elevene vet hva som forventes, får konstruktive tilbakemeldinger, får råd om forbedring og deltar aktivt i vurderingen av eget arbeid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-4-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva kjennetegner en god tilbakemelding i kroppsøving?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den beste tilbakemeldingen til en elev som øver på basketball-skyting.',
            solution: '"Du har god kraft i skuddet, men prøv å løfte albuen høyere for å få bedre bue på ballen"',
            multipleChoiceOptions: [
              '"Du har god kraft i skuddet, men prøv å løfte albuen høyere for å få bedre bue på ballen"',
              '"Bra jobba!"',
              '"Du må trene mer"',
              '"Alle andre skyter bedre enn deg"',
            ],
          },
        ],
        solution: 'En god tilbakemelding er konkret (hva er bra, hva kan forbedres), konstruktiv (gir råd) og fremoverpekende (viser neste steg). Generell ros eller kritikk gir lite læringsverdi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-4-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hva egenvurdering og medelevvurdering er, og drøft hvordan disse formene kan brukes i kroppsøvingsfaget.',
        solution: 'Egenvurdering er når eleven vurderer egen innsats, ferdigheter og utvikling, for eksempel gjennom treningslogg eller refleksjon etter aktivitet. Medelevvurdering er når elever gir tilbakemelding til hverandre, for eksempel ved å observere teknikk ut fra avtalte kriterier. Begge former utvikler elevenes vurderingskompetanse og selvbevissthet. I kroppsøving kan videoanalyse, observasjonsskjemaer og læringssamtaler brukes som verktøy.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-4-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lag et observasjonsskjema med tre konkrete kriterier for god teknikk i en selvvalgt idrettsaktivitet. Forklar hvordan medelever kan bruke skjemaet til å gi tilbakemelding.',
        solution: 'Svar vil variere. Eksempel for basketball-skyting: 1) Bøyde knær og god balanse ved skudd. 2) Albuen peker mot kurven og er i linje med skulder. 3) Fullfølging med håndleddet etter utskudd. Medelever kan observere tre forsøk, krysse av for hvert kriterie, og gi muntlig tilbakemelding om hva som var bra og hva som kan forbedres.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-4-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-4-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft fordeler og utfordringer ved å bruke egenvurdering og medelevvurdering i kroppsøving. Hva kreves for at disse vurderingsformene skal fungere godt?',
        solution: 'Fordeler: Elevene utvikler vurderingskompetanse, blir mer selvstendige, får flere perspektiver og økt bevissthet om egen læring. Utfordringer: Krever trygge relasjoner i klassen, elevene trenger opplæring i å gi tilbakemelding, fare for usaklig kritikk, og noen kan synes det er ubehagelig. For at det skal fungere kreves: klare kriterier, øving i å gi tilbakemelding, trygge rammer, og at læreren modellerer gode tilbakemeldinger først.',
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

export const KROPPSOVING_VG2_KAP4_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KROPPSOVING_VG2_4_1,
  CHAPTER_KROPPSOVING_VG2_4_2,
  CHAPTER_KROPPSOVING_VG2_4_3,
  CHAPTER_KROPPSOVING_VG2_4_4,
  CHAPTER_KROPPSOVING_VG2_4_5,
];
