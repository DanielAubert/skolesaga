/**
 * Naturfag 10 - Narrativ versjon DEL 5A
 * Seksjon 5: Kropp og helse (5.1-5.3)
 *
 * Engasjerende fortellende format optimalisert for lesing/lytting på mobil
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 5.1 NARRATIV: Nervesystemet
// ============================================================================

export const CHAPTER_NATURFAG_10_5_1_NARRATIV: TextbookChapter = {
  id: 'naturfag-10-5-1-narrativ',
  courseId: 'naturfag-10',
  chapterNumber: '5.1',
  title: 'Nervesystemet',
  subtitle: 'Narrativ versjon',
  description:
    'Opplev hvordan kroppen din sender meldinger raskere enn noen datamaskin, fra den elektriske stormen i hjernen til refleksen som redder hånden din fra kokeplaten.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive nervesystemets oppgaver og oppbygning',
    'forklare hvordan nerveceller og synapser fungerer',
    'beskrive reflekser som automatiske reaksjoner',
  ],
  linkedChapterId: 'naturfag-10-5-1',
  content: [
    {
      id: 'naturfag-10-5-1-n-intro',
      type: 'text',
      content: `## Et blitsraskt kommunikasjonssystem

Tenk deg at du sitter på kjøkkenet og strekker deg etter en kopp te. Fingertuppene dine berører koppen, og i løpet av et øyeblikk registrerer du at den er brennende varm. Før du rekker å tenke en eneste bevisst tanke, har hånden din allerede trukket seg tilbake. Hele den prosessen tok under et tiendedels sekund.

Hvordan er det mulig? Svaret ligger i nervesystemet, kroppens eget kommunikasjonsnettverk som sender elektriske meldinger med hastigheter på opptil 120 meter per sekund. Det er raskere enn noen bil du noensinne har kjørt. Nervesystemet ditt styrer alt fra hvert eneste hjerteslag til de bevisste tankene du tenker akkurat nå mens du leser denne teksten.

I dette kapittelet skal vi utforske hvordan dette fantastiske systemet er bygget opp, fra de store delene som hjernen og ryggmargen, ned til de bittesmå nervecellene som frakter signalene. Vi skal forstå hvordan nerveimpulser oppstår, hva som skjer i synapsene der nervecellene møtes, hvorfor reflekser er så utrolig raske, og hvordan sansene dine lar deg oppleve verden rundt deg.`,
    },
    {
      id: 'naturfag-10-5-1-n-section1',
      type: 'text',
      content: `## Nervesystemets oppbygning og oppgaver

Nervesystemet har fem hovedoppgaver. Det sørger for kommunikasjon mellom alle deler av kroppen, det koordinerer bevegelser slik at hundrevis av muskler kan jobbe sammen når du for eksempel går, det kontrollerer både bevisste handlinger som å snakke og ubevisste funksjoner som hjerteslag og pusting, det mottar og tolker sanseinntrykk fra omgivelsene, og det gjør det mulig for deg å tenke, føle og huske.

For å klare alt dette er nervesystemet delt inn i to hoveddeler. Sentralnervesystemet, forkortet CNS, består av hjernen og ryggmargen. Hjernen er kroppens kontrollsenter og veier omtrent 1,4 kilo. Den inneholder rundt 86 milliarder nerveceller. Storehjernen tar seg av bevisst tenking, bevegelser, sanser og språk. Lillehjernen sørger for balanse og koordinering. Hjernestammen styrer livsnødvendige funksjoner som pusting og hjerteslag, helt uten at du trenger å tenke på det. Ryggmargen er en tykk nervebunt som går gjennom ryggraden og forbinder hjernen med resten av kroppen.

Det perifere nervesystemet, forkortet PNS, er alle nervene som strekker seg ut fra sentralnervesystemet og inn i kroppen. Det har tre hovedtyper nerver: sansenerver som sender informasjon fra kroppen til hjernen, bevegelsesnerver som sender kommandoer fra hjernen til musklene, og det autonome nervesystemet som styrer ubevisste funksjoner som fordøyelse og hjerterytme.`,
    },
    {
      id: 'naturfag-10-5-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-5-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på nervesystemets oppbygning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-5-1-n-quiz1-q0',
            task: 'Hvilke to deler utgjør sentralnervesystemet (CNS)?',
            options: [
              { id: 'a', text: 'Hjerne og nerver', isCorrect: false },
              { id: 'b', text: 'Hjerne og ryggmarg', isCorrect: true },
              { id: 'c', text: 'Ryggmarg og nerver', isCorrect: false },
              { id: 'd', text: 'Hjerne og muskler', isCorrect: false },
            ],
            solution:
              'Sentralnervesystemet (CNS) består av hjernen og ryggmargen. Hjernen er kontrollsenteret, mens ryggmargen forbinder hjernen med resten av kroppen. Alle nerver utenfor CNS tilhører det perifere nervesystemet (PNS).',
          },
          {
            id: 'naturfag-10-5-1-n-quiz1-q1',
            task: 'Hvilken del av hjernen styrer ubevisste funksjoner som pusting og hjerteslag?',
            options: [
              { id: 'a', text: 'Storehjernen', isCorrect: false },
              { id: 'b', text: 'Lillehjernen', isCorrect: false },
              { id: 'c', text: 'Hjernestammen', isCorrect: true },
              { id: 'd', text: 'Ryggmargen', isCorrect: false },
            ],
            solution:
              'Hjernestammen styrer livsnødvendige, ubevisste funksjoner som pusting og hjerteslag. Storehjernen tar seg av bevisst tenking og bevegelser. Lillehjernen sørger for balanse og koordinering av bevegelser.',
          },
          {
            id: 'naturfag-10-5-1-n-quiz1-q2',
            task: 'Hva er hovedoppgaven til det autonome nervesystemet?',
            options: [
              { id: 'a', text: 'Styre bevisste bevegelser', isCorrect: false },
              { id: 'b', text: 'Styre ubevisste funksjoner som fordøyelse og hjerterytme', isCorrect: true },
              { id: 'c', text: 'Sende signaler fra sansene til hjernen', isCorrect: false },
              { id: 'd', text: 'Kontrollere muskelstyrken', isCorrect: false },
            ],
            solution:
              'Det autonome nervesystemet styrer kroppsfunksjoner som skjer automatisk uten at vi tenker på dem, som hjerteslag, fordøyelse, pusting og svetting. Tenk hvor upraktisk det hadde vært om du måtte huske å slå hjertet 100 000 ganger om dagen!',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-5-1-n-section2',
      type: 'text',
      content: `## Nerveceller og nerveimpulser

Nervesystemet er bygget opp av milliarder av spesialiserte celler som kalles nevroner. Et nevron har tre hoveddeler. Cellekroppen inneholder cellekjernen og holder cellen i live. Dendrittene er korte, forgrenede utløpere som fungerer som antenner og mottar signaler fra andre nerveceller. Aksonet er en lang, tynn utløper som sender signalet videre. Noen aksoner kan være opptil en meter lange, for eksempel fra ryggmargen helt ned til tærne dine.

Rundt mange aksoner finnes det et isolerende fettlag som kalles myelinskjeden. Den gjør en enorm forskjell for hastigheten. Uten myelinskjede beveger nerveimpulsen seg med bare omtrent 1 meter per sekund. Med myelinskjede kan den nå opptil 120 meter per sekund, fordi signalet kan hoppe fra gap til gap langs isolasjonen. Det er derfor du reagerer så fort når du brenner deg.

Det finnes tre typer nevroner. Sanseneuroner sender informasjon fra sanseorganer til sentralnervesystemet. Mellomnevroner finnes i hjernen og ryggmargen og behandler informasjon. Motorneuroner sender kommandoer fra sentralnervesystemet til musklene. Selve nerveimpulsen følger alt-eller-ingenting-prinsippet: enten sendes det en full impuls, eller ingen i det hele tatt. Sterkere stimuli gir ikke sterkere impulser, men flere impulser per sekund.`,
    },
    {
      id: 'naturfag-10-5-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-5-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på nerveceller og nerveimpulser:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-5-1-n-quiz2-q0',
            task: 'Hva er funksjonen til dendrittene i et nevron?',
            options: [
              { id: 'a', text: 'Sende signaler til andre nerveceller', isCorrect: false },
              { id: 'b', text: 'Motta signaler fra andre nerveceller', isCorrect: true },
              { id: 'c', text: 'Isolere nervecellen', isCorrect: false },
              { id: 'd', text: 'Produsere energi', isCorrect: false },
            ],
            solution:
              'Dendrittene er korte, forgrenede utløpere som mottar signaler fra andre nerveceller. De fungerer som antenner. Aksonet derimot sender signalet videre til neste celle. Huskeregel: Dendritter Detekterer, Aksonet Avgir.',
          },
          {
            id: 'naturfag-10-5-1-n-quiz2-q1',
            task: 'Hva gjør myelinskjeden rundt aksonet?',
            options: [
              { id: 'a', text: 'Den mottar signaler fra andre celler', isCorrect: false },
              { id: 'b', text: 'Den produserer nevrotransmittere', isCorrect: false },
              { id: 'c', text: 'Den øker hastigheten på nerveimpulser', isCorrect: true },
              { id: 'd', text: 'Den beskytter mot bakterier', isCorrect: false },
            ],
            solution:
              'Myelinskjeden er et isolerende fettlag som gjør at nerveimpulsen kan hoppe langs aksonet. Uten myelinskjede: ca. 1 m/s. Med myelinskjede: opptil 120 m/s. Ved sykdommen MS brytes myelinskjeden ned, noe som gir muskelsvakhet og andre symptomer.',
          },
          {
            id: 'naturfag-10-5-1-n-quiz2-q2',
            task: 'Hva betyr alt-eller-ingenting-prinsippet for nerveimpulser?',
            options: [
              { id: 'a', text: 'Sterkere stimuli gir sterkere impulser', isCorrect: false },
              { id: 'b', text: 'Enten sendes en full impuls, eller ingen i det hele tatt', isCorrect: true },
              { id: 'c', text: 'Alle nerveceller sender signaler samtidig', isCorrect: false },
              { id: 'd', text: 'Nerveimpulser kan bare gå i én retning', isCorrect: false },
            ],
            solution:
              'Nerveimpulser følger alt-eller-ingenting-prinsippet: impulsen har alltid samme styrke. Sterkere stimuli gir flere impulser per sekund (høyere frekvens), ikke sterkere impulser. Det er som en lysbryter som enten er av eller på, ikke en dimmer.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-5-1-n-section3',
      type: 'text',
      content: `## Synapser og nevrotransmittere

Nervecellene er faktisk ikke i direkte kontakt med hverandre. Mellom dem finnes det et bittelite gap som kalles synapsespalten, bare omtrent 0,00002 millimeter bredt. Forbindelsespunktet der to nerveceller møtes kalles en synapse.

Når en nerveimpuls når enden av aksonet, kan den ikke hoppe over gapet som en elektrisk impuls. I stedet skjer noe elegant. Vesikler, som er små blærer i enden av aksonet, inneholder kjemiske signalstoffer kalt nevrotransmittere. Når impulsen ankommer, smelter vesiklene sammen med cellemembranen og slipper nevrotransmitterne ut i synapsespalten. Nevrotransmitterne svømmer over gapet på omtrent 0,0005 sekunder, binder seg til reseptorer på neste nervecelle som en nøkkel i en lås, og hvis nok nevrotransmittere binder seg, starter en ny elektrisk impuls i den neste cellen.

Det finnes flere viktige nevrotransmittere. Dopamin er knyttet til belønning og motivasjon, og mangel kan gi Parkinsons sykdom. Serotonin påvirker humør og søvn, og mangel kan gi depresjon. Acetylkolin er viktig for muskelsammentrekninger og hukommelse. Adrenalin aktiverer kamp-eller-flukt-responsen og øker hjerteslag og fokus.

Synapser gir nervesystemet en fantastisk fleksibilitet. Signaler kan forsterkes, dempes, filtreres og forgrenes. Én nervecelle kan sende til tusenvis av andre celler samtidig. Synapser kan styrkes gjennom gjentatt bruk, og det er nettopp dette som er grunnlaget for all læring og hukommelse.`,
    },
    {
      id: 'naturfag-10-5-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-5-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på synapser og nevrotransmittere:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-5-1-n-quiz3-q0',
            task: 'Hva skjer med signalet i en synapse?',
            options: [
              { id: 'a', text: 'Det hopper direkte som en elektrisk impuls', isCorrect: false },
              { id: 'b', text: 'Det endres fra elektrisk til kjemisk og tilbake til elektrisk', isCorrect: true },
              { id: 'c', text: 'Det stopper helt og starter på nytt', isCorrect: false },
              { id: 'd', text: 'Det forsterkes av myelinskjeden', isCorrect: false },
            ],
            solution:
              'I en synapse overføres signalet kjemisk ved hjelp av nevrotransmittere. Elektrisk impuls ankommer aksonenden, nevrotransmittere frigjøres og krysser synapsespalten, og binder seg til reseptorer som starter en ny elektrisk impuls i neste celle.',
          },
          {
            id: 'naturfag-10-5-1-n-quiz3-q1',
            task: 'Hvilken nevrotransmitter er spesielt knyttet til belønning og motivasjon?',
            options: [
              { id: 'a', text: 'Serotonin', isCorrect: false },
              { id: 'b', text: 'Acetylkolin', isCorrect: false },
              { id: 'c', text: 'Dopamin', isCorrect: true },
              { id: 'd', text: 'Adrenalin', isCorrect: false },
            ],
            solution:
              'Dopamin er nevrotransmitteren for belønning, motivasjon og bevegelseskontroll. Mangel på dopamin kan føre til Parkinsons sykdom med symptomer som skjelving og stive muskler. Serotonin påvirker humør og søvn, acetylkolin styrer muskler og hukommelse, og adrenalin er stresshormonet.',
          },
          {
            id: 'naturfag-10-5-1-n-quiz3-q2',
            task: 'Hvorfor er synapser viktige for læring og hukommelse?',
            options: [
              { id: 'a', text: 'Fordi de produserer nye nerveceller', isCorrect: false },
              { id: 'b', text: 'Fordi de kan styrkes eller svekkes gjennom gjentatt bruk', isCorrect: true },
              { id: 'c', text: 'Fordi de lagrer informasjon i nevrotransmittere', isCorrect: false },
              { id: 'd', text: 'Fordi de beskytter nervecellene mot skade', isCorrect: false },
            ],
            solution:
              'Synapser kan forsterkes over tid gjennom gjentatt bruk. Når du øver på noe, blir synapsene mellom de relevante nervecellene sterkere, slik at signalene sendes raskere og mer presist. Dette er grunnlaget for nevroplastisitet, læring og hukommelse.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-5-1-n-section4',
      type: 'text',
      content: `## Reflekser og sanser

Har du noen gang lurt på hvorfor du trekker hånden til deg fra noe varmt før du i det hele tatt kjenner smerten bevisst? Svaret er reflekser, hurtige, automatiske reaksjoner som skjer uten at hjernen trenger å ta en beslutning.

En refleks følger en fast rute gjennom nervesystemet som kalles refleksbuen. Den har fem steg. Først oppfatter en reseptor i huden stimulien, for eksempel varme. Deretter sender et sanseneuron signalet til ryggmargen, ikke til hjernen. I ryggmargen sender et mellomnevron signalet direkte videre til et motorneuron. Motorneuron sender signal til muskelen, og muskelen trekker seg sammen slik at du trekker hånden til deg. Hele prosessen tar bare omtrent 0,05 sekunder, fire til seks ganger raskere enn en bevisst handling. Etterpå sendes et signal til hjernen slik at du blir bevisst på hva som skjedde, men refleksen har allerede reddet deg.

Sansene dine lar deg oppleve verden. De fem hovedsansene er syn, hørsel, lukt, smak og følelse, men du har også balansesans og propriosepsjon, som er evnen til å vite hvor kroppens deler befinner seg uten å se på dem. Alle sanser fungerer etter samme prinsipp: en spesialisert reseptor oppfatter en bestemt type stimulus, konverterer den til et elektrisk nervesignal, og sender det til hjernen via sanseneuroner. Hjernen tolker signalet, og du opplever det som et sanseinntrykk. Fascinerende nok oppfatter vi ikke virkeligheten direkte. Vi oppfatter hva hjernen tolker basert på signalene fra sansene.`,
    },
    {
      id: 'naturfag-10-5-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-5-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på reflekser og sanser:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-5-1-n-quiz4-q0',
            task: 'Hvorfor er reflekser raskere enn bevisste handlinger?',
            options: [
              { id: 'a', text: 'Fordi de bruker sterkere nerveimpulser', isCorrect: false },
              { id: 'b', text: 'Fordi signalet går via ryggmargen i stedet for hjernen', isCorrect: true },
              { id: 'c', text: 'Fordi de bare bruker motorneuroner', isCorrect: false },
              { id: 'd', text: 'Fordi de ikke bruker synapser', isCorrect: false },
            ],
            solution:
              'Reflekser går via ryggmargen, ikke hjernen, noe som gir kortere avstand og færre synapser. En refleks tar ca. 0,05 sekunder, mens en bevisst handling tar 0,2-0,3 sekunder. Denne tidsforskjellen kan beskytte deg mot alvorlige skader.',
          },
          {
            id: 'naturfag-10-5-1-n-quiz4-q1',
            task: 'Hva er riktig rekkefølge i en refleksbue?',
            options: [
              { id: 'a', text: 'Hjerne, motorneuron, muskel, sanseneuron, reseptor', isCorrect: false },
              { id: 'b', text: 'Reseptor, sanseneuron, ryggmarg, motorneuron, muskel', isCorrect: true },
              { id: 'c', text: 'Muskel, motorneuron, hjerne, sanseneuron, reseptor', isCorrect: false },
              { id: 'd', text: 'Sanseneuron, reseptor, hjerne, muskel, motorneuron', isCorrect: false },
            ],
            solution:
              'Refleksbuen følger denne rekkefølgen: reseptor oppfatter stimulus, sanseneuron sender signal til ryggmargen, mellomnevron i ryggmargen videresender til motorneuron, motorneuron sender signal til muskelen, og muskelen trekker seg sammen. Hjernen informeres etterpå.',
          },
          {
            id: 'naturfag-10-5-1-n-quiz4-q2',
            task: 'Hva er det generelle prinsippet for hvordan alle sanser fungerer?',
            options: [
              { id: 'a', text: 'Hjernen sender signaler ut til sanseorganene', isCorrect: false },
              { id: 'b', text: 'Sanseorganene sender hormoner til hjernen', isCorrect: false },
              { id: 'c', text: 'Reseptorer konverterer stimulus til elektriske signaler som sendes til hjernen for tolkning', isCorrect: true },
              { id: 'd', text: 'Musklene i sanseorganene oppfatter stimuli direkte', isCorrect: false },
            ],
            solution:
              'Alle sanser fungerer etter samme prinsipp: en spesialisert reseptor oppfatter en bestemt stimulus (lys, lyd, kjemikalier osv.), konverterer den til et elektrisk nervesignal, sender det via sanseneuroner til hjernen, og hjernen tolker signalet som et sanseinntrykk.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-5-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket nervesystemet, kroppens fantastiske kommunikasjonsnettverk. Vi har sett at det deles i sentralnervesystemet (hjernen og ryggmargen) og det perifere nervesystemet (alle nervene ut i kroppen), og at det har fem hovedoppgaver: kommunikasjon, koordinering, kontroll, sanseoppfatning, og tenking.

Vi har lært at nerveceller, nevroner, består av cellekropp, dendritter som mottar signaler, og akson som sender signaler videre. Myelinskjeden rundt aksonet øker hastigheten på nerveimpulser fra omtrent 1 meter per sekund til opptil 120 meter per sekund, og impulsen følger alt-eller-ingenting-prinsippet.

Vi har sett hvordan nerveceller kommuniserer via synapser, der elektriske signaler omgjøres til kjemiske nevrotransmittere som krysser synapsespalten. Viktige nevrotransmittere som dopamin, serotonin, acetylkolin og adrenalin styrer alt fra humør til bevegelser. Synapsenes evne til å styrkes gjennom bruk er grunnlaget for læring og hukommelse.

Til slutt har vi forstått reflekser, de raske automatiske reaksjonene som går via ryggmargen og beskytter oss mot skade, og hvordan sansene våre konverterer stimuli til elektriske signaler som hjernen tolker som opplevelser av verden rundt oss.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.2 NARRATIV: Hormonsystemet
// ============================================================================

export const CHAPTER_NATURFAG_10_5_2_NARRATIV: TextbookChapter = {
  id: 'naturfag-10-5-2-narrativ',
  courseId: 'naturfag-10',
  chapterNumber: '5.2',
  title: 'Hormonsystemet',
  subtitle: 'Narrativ versjon',
  description:
    'Forstå kroppens langsomme, men kraftige kjemiske budbringere som styrer alt fra vekst og pubertet til blodsukker og stressreaksjoner.',
  estimatedMinutes: 40,
  competenceGoals: [
    'forklare hva hormoner er og hvordan de virker',
    'beskrive forskjellen mellom hormon- og nervesystemet',
    'forklare tilbakekoblingsmekanismer og blodsukkerregulering',
  ],
  linkedChapterId: 'naturfag-10-5-2',
  content: [
    {
      id: 'naturfag-10-5-2-n-intro',
      type: 'text',
      content: `## Kroppens kjemiske budbringere

Forestill deg at du står foran klassen og skal holde en presentasjon. Hjertet begynner å hamre, pustingen øker, og du kjenner at håndflatene blir svette. Du har ikke bedt kroppen om noe av dette. Likevel skjer det automatisk. Årsaken er et hormon som heter adrenalin, og det er bare ett av mange kjemiske budbringere som styrer kroppen din bak kulissene.

Mens nervesystemet er som et lynraskt nettverk av elektriske kabler, er hormonsystemet mer som posten. Hormonene sendes ut i blodet og transporteres rundt i hele kroppen til de treffer de rette målcellene. Det tar lenger tid enn et nervesignal, men til gjengjeld kan effekten vare i timer, dager eller til og med år.

I dette kapittelet skal vi utforske hva hormoner egentlig er, hvilke kjertler som produserer dem, hvordan de samarbeider med nervesystemet, og hvordan kroppen holder blodsukkeret stabilt gjennom et elegant system av negativ tilbakekobling. Vi skal også lære om hva som skjer når dette systemet svikter, som ved diabetes.`,
    },
    {
      id: 'naturfag-10-5-2-n-section1',
      type: 'text',
      content: `## Hormoner og endokrine kjertler

Hormoner er kjemiske budbringere som produseres i spesielle kjertler kalt endokrine kjertler. Disse kjertlene har ingen utførselsganger, de sender hormonene rett ut i blodet. Blodet frakter hormonene rundt i kroppen, men de virker bare på celler som har den rette reseptoren. Dette kalles nøkkel-lås-prinsippet. Hormonet er nøkkelen, og reseptoren på målcellen er låsen. Bare celler med riktig lås kan påvirkes.

La oss møte de viktigste endokrine kjertlene. Hypofysen sitter under hjernen og kalles mesterkjertelen fordi den kontrollerer mange andre kjertler. Den produserer blant annet veksthormon, og sender styringshormoner som TSH til skjoldbruskkjertelen og FSH og LH til kjønnskjertlene for å starte puberteten.

Skjoldbruskkjertelen i halsen produserer tyroksin som regulerer stoffskiftet, altså hvor raskt kroppen bruker energi. For mye tyroksin gir hypertyreose med vekttap og nervøsitet, for lite gir hypotyreose med tretthet og vektøkning.

Binyrene sitter på toppen av nyrene og produserer adrenalin ved akutt stress og kortisol ved langvarig stress. Bukspyttkjertelen produserer insulin og glukagon for å regulere blodsukkeret. Og kjønnskjertlene, testiklene hos gutter og eggstokkene hos jenter, produserer henholdsvis testosteron og østrogen som driver puberteten.`,
    },
    {
      id: 'naturfag-10-5-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-5-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på hormoner og endokrine kjertler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-5-2-n-quiz1-q0',
            task: 'Hvordan transporteres hormoner i kroppen?',
            options: [
              { id: 'a', text: 'Gjennom nervesystemet', isCorrect: false },
              { id: 'b', text: 'I blodet', isCorrect: true },
              { id: 'c', text: 'Direkte fra celle til celle', isCorrect: false },
              { id: 'd', text: 'Gjennom lymfesystemet', isCorrect: false },
            ],
            solution:
              'Hormoner produseres i endokrine kjertler og sendes direkte ut i blodet. Blodet fungerer som transportsystem som frakter hormonene til målceller med riktige reseptorer rundt i hele kroppen.',
          },
          {
            id: 'naturfag-10-5-2-n-quiz1-q1',
            task: 'Hvorfor kalles hypofysen for mesterkjertelen?',
            options: [
              { id: 'a', text: 'Fordi den er den største kjertelen', isCorrect: false },
              { id: 'b', text: 'Fordi den kontrollerer mange andre kjertler', isCorrect: true },
              { id: 'c', text: 'Fordi den produserer flest hormoner', isCorrect: false },
              { id: 'd', text: 'Fordi den ligger nærmest hjernen', isCorrect: false },
            ],
            solution:
              'Hypofysen kalles mesterkjertelen fordi den sender styringshormoner til mange andre kjertler: TSH til skjoldbruskkjertelen, ACTH til binyrene, og FSH/LH til kjønnskjertlene. Den er som en dirigent som bestemmer når og hvor mye de andre kjertlene skal produsere.',
          },
          {
            id: 'naturfag-10-5-2-n-quiz1-q2',
            task: 'Hvilken kjertel produserer adrenalin?',
            options: [
              { id: 'a', text: 'Hypofysen', isCorrect: false },
              { id: 'b', text: 'Skjoldbruskkjertelen', isCorrect: false },
              { id: 'c', text: 'Binyrene', isCorrect: true },
              { id: 'd', text: 'Bukspyttkjertelen', isCorrect: false },
            ],
            solution:
              'Binyrene, som sitter på toppen av nyrene, produserer adrenalin ved akutt stress og kortisol ved langvarig stress. Adrenalin er kamp-eller-flukt-hormonet som øker hjertefrekvens, blodtrykk og energitilførsel.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-5-2-n-section2',
      type: 'text',
      content: `## Nervesystemet mot hormonsystemet og tilbakekobling

En viktig forskjell mellom nervesystemet og hormonsystemet er hastighet og varighet. Nervesystemet sender elektriske impulser gjennom nerver med en hastighet på 1 til 120 meter per sekund, og reaksjonen er presis men kortvarig. Hormonsystemet sender kjemiske budbringere i blodet, noe som tar minutter til timer, men effekten kan vare lenge. Nervesystemet brukes altså til raske reaksjoner som å trekke hånden fra en varm plate, mens hormonsystemet brukes til langsiktige prosesser som vekst og pubertet.

Men de to systemene samarbeider tett. Tenk på en stressituasjon: nervesystemet reagerer først og gir øyeblikkelig økt hjertefrekvens. Deretter tar hormonsystemet over når binyrene slipper ut adrenalin, som holder kroppen i beredskap over lengre tid.

For å holde hormon-nivåene stabile bruker kroppen negativ tilbakekobling. Prinsippet er enkelt: når nivået av et hormon blir for høyt, stoppes produksjonen. Når nivået synker for lavt, startes produksjonen igjen. Det fungerer akkurat som en termostat i et rom. Ta skjoldbruskkjertelen som eksempel: hypofysen registrerer lavt tyroksin og sender ut TSH, som stimulerer skjoldbruskkjertelen. Når tyroksin er høyt nok, reduserer hypofysen TSH-produksjonen. Slik holder kroppen seg i homeostase, en stabil indre balanse.`,
    },
    {
      id: 'naturfag-10-5-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-5-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på hormonsystemet og tilbakekobling:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-5-2-n-quiz2-q0',
            task: 'Hva er hovedforskjellen mellom nervesystemet og hormonsystemet når det gjelder hastighet?',
            options: [
              { id: 'a', text: 'Hormonsystemet er raskere', isCorrect: false },
              { id: 'b', text: 'Nervesystemet er mye raskere enn hormonsystemet', isCorrect: true },
              { id: 'c', text: 'De er like raske', isCorrect: false },
              { id: 'd', text: 'Det varierer fra gang til gang', isCorrect: false },
            ],
            solution:
              'Nervesystemet sender elektriske impulser med 1-120 m/s og gir reaksjon på millisekunder. Hormonsystemet sender kjemiske budbringere via blodet og gir reaksjon på minutter til timer. Til gjengjeld varer hormonsystemets effekt mye lenger.',
          },
          {
            id: 'naturfag-10-5-2-n-quiz2-q1',
            task: 'Hva menes med negativ tilbakekobling i hormonsystemet?',
            options: [
              { id: 'a', text: 'Hormoner har negative bivirkninger over tid', isCorrect: false },
              { id: 'b', text: 'Hormoner brytes ned og sendes tilbake', isCorrect: false },
              { id: 'c', text: 'Høye nivåer hemmer produksjonen, lave nivåer stimulerer den', isCorrect: true },
              { id: 'd', text: 'Hormoner sendes tilbake til kjertelen som laget dem', isCorrect: false },
            ],
            solution:
              'Negativ tilbakekobling er kroppens viktigste reguleringsmekanisme: høyt hormonnivå bremser produksjonen, lavt hormonnivå øker den. Slik som en termostat slår varmen av når rommet er varmt nok og på igjen når det blir kaldt. Dette sikrer homeostase, stabil indre balanse.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-5-2-n-section3',
      type: 'text',
      content: `## Blodsukkerregulering og diabetes

Cellene dine trenger en jevn tilførsel av glukose, blodsukker, for å produsere energi. Bukspyttkjertelen regulerer dette med to hormoner som jobber i perfekt balanse: insulin og glukagon.

Etter et måltid brytes karbohydratene ned til glukose som tas opp i blodet. Blodsukkeret stiger. Bukspyttkjertelen merker dette og frigjør insulin. Insulin fungerer som en nøkkel som åpner muskel- og fettcellene slik at de kan ta opp glukose fra blodet. Leveren lagrer overflødig glukose som glykogen. Blodsukkeret synker tilbake til normalnivået, omtrent 4 til 6 millimol per liter.

Mellom måltider synker blodsukkeret gradvis etter hvert som cellene bruker energi. Bukspyttkjertelen frigjør da glukagon, som får leveren til å bryte ned glykogen til glukose og slippe det ut i blodet. Blodsukkeret stiger igjen til normalen. Dette er negativ tilbakekobling i praksis.

Diabetes er en sykdom der dette systemet svikter. Ved diabetes type 1, som vanligvis oppdages i barndom, ødelegger immunforsvaret cellene som produserer insulin. Personen må ta insulinsprøyter daglig. Ved diabetes type 2, som ofte skyldes overvekt og inaktivitet, responderer cellene dårlig på insulin. Type 2 kan ofte forebygges med sunt kosthold og fysisk aktivitet. Begge typene kan gi alvorlige komplikasjoner som hjerte- og karsykdommer, nerveskader og synsskader hvis de ikke behandles.`,
    },
    {
      id: 'naturfag-10-5-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-5-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på blodsukker og diabetes:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-5-2-n-quiz3-q0',
            task: 'Hva er insulinets rolle i blodsukkerreguleringen?',
            options: [
              { id: 'a', text: 'Det øker blodsukkeret mellom måltider', isCorrect: false },
              { id: 'b', text: 'Det senker blodsukkeret ved å hjelpe cellene ta opp glukose', isCorrect: true },
              { id: 'c', text: 'Det bryter ned glykogen i leveren', isCorrect: false },
              { id: 'd', text: 'Det produserer glukose fra fett', isCorrect: false },
            ],
            solution:
              'Insulin senker blodsukkeret ved å hjelpe muskel- og fettceller med å ta opp glukose fra blodet. Det stimulerer også leveren til å lagre glukose som glykogen. Insulin frigjøres etter måltider når blodsukkeret er høyt. Glukagon gjør det motsatte og øker blodsukkeret mellom måltider.',
          },
          {
            id: 'naturfag-10-5-2-n-quiz3-q1',
            task: 'Hvilken kjertel produserer insulin og glukagon?',
            options: [
              { id: 'a', text: 'Binyrene', isCorrect: false },
              { id: 'b', text: 'Skjoldbruskkjertelen', isCorrect: false },
              { id: 'c', text: 'Bukspyttkjertelen', isCorrect: true },
              { id: 'd', text: 'Hypofysen', isCorrect: false },
            ],
            solution:
              'Bukspyttkjertelen produserer både insulin (senker blodsukker) og glukagon (øker blodsukker). Disse to hormonene jobber sammen i negativ tilbakekobling for å holde blodsukkeret stabilt rundt 4-6 mmol/L.',
          },
          {
            id: 'naturfag-10-5-2-n-quiz3-q2',
            task: 'Hva er hovedforskjellen mellom diabetes type 1 og type 2?',
            options: [
              { id: 'a', text: 'Type 1 gir høyere blodsukker enn type 2', isCorrect: false },
              { id: 'b', text: 'Type 1 mangler insulin, type 2 har insulinresistens', isCorrect: true },
              { id: 'c', text: 'Type 1 rammer bare barn, type 2 bare voksne', isCorrect: false },
              { id: 'd', text: 'Type 1 kan forebygges, type 2 kan ikke', isCorrect: false },
            ],
            solution:
              'Ved diabetes type 1 ødelegger immunforsvaret cellene som produserer insulin, slik at kroppen mangler insulin. Ved type 2 responderer cellene dårlig på insulin (insulinresistens). Type 1 oppstår oftest i barndom og krever insulinsprøyter. Type 2 kan ofte forebygges med sunn livsstil.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-5-2-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket hormonsystemet, kroppens langsomme men kraftige kjemiske kommunikasjonssystem. Hormoner er kjemiske budbringere som produseres i endokrine kjertler, transporteres i blodet, og virker på målceller med riktige reseptorer etter nøkkel-lås-prinsippet.

Vi har møtt de viktigste endokrine kjertlene: hypofysen som er mesterkjertelen, skjoldbruskkjertelen som regulerer stoffskiftet med tyroksin, binyrene som produserer stresshormonene adrenalin og kortisol, bukspyttkjertelen som regulerer blodsukkeret med insulin og glukagon, og kjønnskjertlene som driver puberteten med testosteron, østrogen og progesteron.

Vi har sett forskjellen mellom nervesystemet og hormonsystemet: nervesystemet er raskt og presist men kortvarig, mens hormonsystemet er langsommere men har langvarig og bred påvirkning. De to systemene samarbeider tett, som ved stressreaksjoner.

Vi har lært om negativ tilbakekobling som kroppens termostat, og sett hvordan insulin og glukagon holder blodsukkeret stabilt gjennom dette prinsippet. Til slutt har vi forstått diabetes, der blodsukkerreguleringen svikter, enten fordi kroppen mangler insulin (type 1) eller fordi cellene responderer dårlig på det (type 2).`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.3 NARRATIV: Immunforsvaret og vaksiner
// ============================================================================

export const CHAPTER_NATURFAG_10_5_3_NARRATIV: TextbookChapter = {
  id: 'naturfag-10-5-3-narrativ',
  courseId: 'naturfag-10',
  chapterNumber: '5.3',
  title: 'Immunforsvaret og vaksiner',
  subtitle: 'Narrativ versjon',
  description:
    'Oppdag hvordan kroppen din forsvarer seg mot milliarder av fiender med tre forsvarslinjer, hukommelsesceller som aldri glemmer, og vaksiner som trener opp hæren uten at du blir syk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive kroppens tre forsvarslinjer mot infeksjoner',
    'forklare hvordan vaksiner og flokkimmunitet beskytter mot sykdom',
    'beskrive antibiotikaresistens som et globalt helseproblem',
  ],
  linkedChapterId: 'naturfag-10-5-3',
  content: [
    {
      id: 'naturfag-10-5-3-n-intro',
      type: 'text',
      content: `## Kroppen under angrep

Akkurat nå, mens du leser dette, er kroppen din under angrep. Bakterier, virus, sopp og parasitter prøver konstant å trenge inn og gjøre deg syk. På hendene dine lever det flere bakterier enn det bor mennesker på jorden. Likevel er du frisk mesteparten av tiden. Hvordan?

Svaret er immunforsvaret, et utrolig sofistikert forsvarssystem som beskytter deg døgnet rundt. Det har tre lag med forsvar, fra enkle fysiske barrierer til en avansert hær av spesialiserte celler som kan huske fiender de har møtt før og slå dem ned raskere neste gang. Det er dette prinsippet vaksiner utnytter: de trener immunforsvaret ditt uten at du trenger å bli syk.

I dette kapittelet skal vi reise gjennom kroppens tre forsvarslinjer. Vi starter med hud og slimhinner som holder inntrengerne ute, går videre til de hvite blodcellene som spiser alt fremmed de møter, og ender med de spesialiserte B-cellene og T-cellene som gir deg livsvarig beskyttelse. Vi skal også forstå hvordan vaksiner fungerer, hva flokkimmunitet er, og hvorfor antibiotikaresistens er et av verdens mest alvorlige helseproblemer.`,
    },
    {
      id: 'naturfag-10-5-3-n-section1',
      type: 'text',
      content: `## Første og andre forsvarslinje

Kroppens første forsvarslinje er de fysiske og kjemiske barrierene som hindrer mikroorganismer i å komme inn i det hele tatt. Huden er den viktigste, den er en tørr, tett barriere som de fleste bakterier og virus ikke kan trenge gjennom. Slimhinnene dekker luftveiene og mage-tarmsystemet og fanger inntrengere i slim. Flimmerhår i luftveiene frakter slimet opp til svelget der det svelges eller hostes opp. Tårer og spytt inneholder enzymet lysozym som dreper bakterier. Og magesyren, med en pH på bare 1 til 2, dreper de fleste bakterier som kommer inn med maten.

Men hva skjer når denne muren brytes? Tenk deg at du skjærer deg i fingeren. Bakterier strømmer inn gjennom kuttet, og da trer andre forsvarslinje i kraft, den medfødte immuniteten. Skadede celler sender ut kjemiske alarmsignaler. Blodårer i området utvider seg, og du ser rødhet og varme. Væske lekker ut i vevet og gir hevelse. Nervene stimuleres og du føler smerte. Dette er betennelse, og det er faktisk et tegn på at kroppen kjemper.

Hvite blodceller kalt fagocytter strømmer til stedet gjennom de utvidede blodårene. De er som kroppens soldater som spiser og fordøyer alt fremmed de møter, en prosess som kalles fagocytose. Naturlige drepeceller (NK-celler) dreper celler som allerede er infisert av virus. Ved alvorlige infeksjoner kan kroppstemperaturen øke, altså feber, som hemmer bakterienes vekst og gjør immunforsvaret mer effektivt.`,
    },
    {
      id: 'naturfag-10-5-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-5-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på kroppens forsvarslinjer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-5-3-n-quiz1-q0',
            task: 'Hvilken forsvarslinje utgjør hud og slimhinner?',
            options: [
              { id: 'a', text: 'Første forsvarslinje', isCorrect: true },
              { id: 'b', text: 'Andre forsvarslinje', isCorrect: false },
              { id: 'c', text: 'Tredje forsvarslinje', isCorrect: false },
              { id: 'd', text: 'Spesifikk immunitet', isCorrect: false },
            ],
            solution:
              'Hud og slimhinner er fysiske og kjemiske barrierer som utgjør kroppens første forsvarslinje. De hindrer mikroorganismer i å komme inn i kroppen i det hele tatt. Andre forsvarslinje er medfødt immunitet med hvite blodceller og betennelse. Tredje forsvarslinje er spesifikk immunitet med B-celler og T-celler.',
          },
          {
            id: 'naturfag-10-5-3-n-quiz1-q1',
            task: 'Hva er fagocytose?',
            options: [
              { id: 'a', text: 'Produksjon av antistoffer', isCorrect: false },
              { id: 'b', text: 'Prosessen der hvite blodceller spiser og fordøyer bakterier', isCorrect: true },
              { id: 'c', text: 'Betennelsesreaksjon med rødhet og hevelse', isCorrect: false },
              { id: 'd', text: 'Økning av kroppstemperaturen ved infeksjon', isCorrect: false },
            ],
            solution:
              'Fagocytose er prosessen der fagocytter (hvite blodceller) omslutter, spiser og fordøyer bakterier og virus. Ordet kommer fra gresk: phagein betyr å spise, og kytos betyr celle. Fagocytose er en viktig del av andre forsvarslinje, den medfødte immuniteten.',
          },
          {
            id: 'naturfag-10-5-3-n-quiz1-q2',
            task: 'Hva er de fire klassiske tegnene på betennelse?',
            options: [
              { id: 'a', text: 'Feber, hoste, kvalme og tretthet', isCorrect: false },
              { id: 'b', text: 'Rødhet, hevelse, varme og smerte', isCorrect: true },
              { id: 'c', text: 'Kløe, utslett, nysing og tårer', isCorrect: false },
              { id: 'd', text: 'Hodepine, svimmelhet, kvalme og feber', isCorrect: false },
            ],
            solution:
              'De fire klassiske tegnene på betennelse er rødhet (økt blodgjennomstrømming), hevelse (væske lekker ut i vevet), varme (økt blodgjennomstrømming) og smerte (signaliserer at noe er galt). Betennelse er en lokal reaksjon, ikke det samme som feber som påvirker hele kroppen.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-5-3-n-section2',
      type: 'text',
      content: `## Spesifikk immunitet: B-celler og T-celler

Noen ganger er ikke de to første forsvarslinjene nok. Da trer tredje forsvarslinje i kraft, den spesifikke immuniteten. Mens den medfødte immuniteten angriper alt fremmed uten å skille, er den spesifikke immuniteten et presisjonsvåpen som er skreddersydd for å bekjempe én bestemt fiende.

Nøkkelen til spesifikk immunitet er antigener, molekyler på overflaten av bakterier og virus som fungerer som et slags fingeravtrykk. Hvert virus og hver bakterie har unike antigener, og immunforsvaret lærer å gjenkjenne dem.

B-celler er hvite blodceller som produserer antistoffer, Y-formede proteiner som passer til spesifikke antigener som en nøkkel i en lås. Første gang du møter en sykdom, tar det dager før B-cellene har produsert nok antistoffer. Du blir syk. Men noen B-celler blir til hukommelsesceller som lever lenge i kroppen. Neste gang du møter samme sykdom, gjenkjenner hukommelsescellene antigenet umiddelbart og produserer antistoffer på timer i stedet for dager. Infeksjonen stoppes før du blir syk.

T-celler har en annen oppgave. Virus gjemmer seg inne i kroppens egne celler, der antistoffer ikke kan nå dem. Cytotoksiske T-celler løser dette problemet ved å drepe de infiserte cellene direkte, slik at viruset frigjøres og kan angripes av antistoffer og fagocytter. Hjelpe-T-celler koordinerer hele immunresponsen ved å aktivere både B-celler og andre T-celler. Også T-celler kan bli til hukommelsesceller.`,
    },
    {
      id: 'naturfag-10-5-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-5-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på spesifikk immunitet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-5-3-n-quiz2-q0',
            task: 'Hva er hovedforskjellen mellom B-celler og T-celler?',
            options: [
              { id: 'a', text: 'B-celler er raskere enn T-celler', isCorrect: false },
              { id: 'b', text: 'B-celler lager antistoffer, T-celler dreper infiserte celler', isCorrect: true },
              { id: 'c', text: 'B-celler bekjemper virus, T-celler bekjemper bakterier', isCorrect: false },
              { id: 'd', text: 'B-celler finnes i blodet, T-celler finnes i huden', isCorrect: false },
            ],
            solution:
              'B-celler produserer antistoffer som binder seg til antigener på inntrengere utenfor cellene og merker dem for fagocytose. T-celler (cytotoksiske) dreper celler som er infisert av virus fra innsiden. Begge celletypene kan bli til hukommelsesceller som gir langvarig beskyttelse.',
          },
          {
            id: 'naturfag-10-5-3-n-quiz2-q1',
            task: 'Hvorfor blir du vanligvis ikke like syk andre gangen du møter samme sykdom?',
            options: [
              { id: 'a', text: 'Fordi sykdommen blir svakere', isCorrect: false },
              { id: 'b', text: 'Fordi huden din blir tykkere', isCorrect: false },
              { id: 'c', text: 'Fordi hukommelsesceller reagerer raskt ved ny infeksjon', isCorrect: true },
              { id: 'd', text: 'Fordi kroppen produserer mer magesyre', isCorrect: false },
            ],
            solution:
              'Etter første infeksjon dannes hukommelsesceller (både B- og T-celler) som husker sykdommens antigener. Ved ny infeksjon gjenkjenner hukommelsescellene antigenet umiddelbart og produserer store mengder antistoffer på timer i stedet for dager. Infeksjonen stoppes før du rekker å bli syk. Dette kalles immunologisk hukommelse.',
          },
          {
            id: 'naturfag-10-5-3-n-quiz2-q2',
            task: 'Hvorfor må T-celler drepe infiserte celler i stedet for å bruke antistoffer?',
            options: [
              { id: 'a', text: 'Fordi antistoffer er for svake mot virus', isCorrect: false },
              { id: 'b', text: 'Fordi antistoffer ikke kan nå virus som gjemmer seg inne i celler', isCorrect: true },
              { id: 'c', text: 'Fordi T-celler er raskere enn antistoffer', isCorrect: false },
              { id: 'd', text: 'Fordi virus er resistente mot antistoffer', isCorrect: false },
            ],
            solution:
              'Virus formerer seg inne i kroppens celler, der antistoffer i blodbanen ikke kan nå dem. Cytotoksiske T-celler gjenkjenner infiserte celler og dreper dem før viruset rekker å formere seg og spre seg. Etter at den infiserte cellen er drept, frigjøres viruset og kan angripes av antistoffer og fagocytter.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-5-3-n-section3',
      type: 'text',
      content: `## Vaksiner, flokkimmunitet og antibiotikaresistens

Vaksiner utnytter immunforsvarets hukommelse på en genial måte. En vaksine inneholder drepte, svekkede eller deler av sykdomsframkallende mikroorganismer. Du får antigenene, men ikke sykdommen. Immunforsvaret reagerer, produserer antistoffer, og danner hukommelsesceller. Hvis du senere møter den ekte sykdommen, reagerer kroppen din raskt og effektivt, ofte uten at du merker noe i det hele tatt.

Det finnes flere typer vaksiner: levende svekkede vaksiner som MMR-vaksinen mot meslinger, drepte vaksiner som influensavaksinen, delvise vaksiner som HPV-vaksinen, og mRNA-vaksiner som COVID-19-vaksinene fra Pfizer og Moderna. Norges barnevaksinasjonsprogram tilbyr gratis vaksiner mot en rekke alvorlige sykdommer.

Når nok personer i en befolkning er vaksinert, oppstår flokkimmunitet. Sykdommen finner rett og slett ikke nok uimmune mennesker å smitte, og dør ut. For meslinger, som er svært smittsomt, kreves det at omtrent 95 prosent er vaksinert. Flokkimmunitet beskytter de som ikke kan vaksineres, som spedbarn og immunsvake personer.

Antibiotikaresistens er et voksende globalt problem. Antibiotika dreper bakterier, men virker ikke mot virus. Når bakterier formerer seg, kan tilfeldige mutasjoner gjøre noen resistente. Hvis du tar antibiotika, overlever bare de resistente bakteriene, formerer seg, og etter hvert fungerer ikke antibiotika lenger. Overforbruk av antibiotika, ufullendte kurer og bruk i matproduksjon akselererer problemet. Over 700 000 mennesker dør årlig av antibiotikaresistente infeksjoner. Forebygging handler om å bruke antibiotika bare når legen sier det er nødvendig, alltid fullføre kuren, og vaksinere seg for å redusere behovet for antibiotika.`,
    },
    {
      id: 'naturfag-10-5-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-5-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på vaksiner og antibiotikaresistens:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-5-3-n-quiz3-q0',
            task: 'Hvordan beskytter vaksiner deg mot sykdom?',
            options: [
              { id: 'a', text: 'De dreper alle virus og bakterier i kroppen', isCorrect: false },
              { id: 'b', text: 'De styrker huden slik at den blokkerer inntrengere', isCorrect: false },
              { id: 'c', text: 'De gir kroppen antigener som trener immunforsvaret til å danne hukommelsesceller', isCorrect: true },
              { id: 'd', text: 'De øker produksjonen av hvite blodceller permanent', isCorrect: false },
            ],
            solution:
              'Vaksiner inneholder antigener fra sykdomsframkallende mikroorganismer (drepte, svekkede eller deler). Immunforsvaret reagerer på antigenene, produserer antistoffer, og danner hukommelsesceller. Ved senere eksponering for den ekte sykdommen reagerer kroppen raskt og stopper infeksjonen før du blir syk.',
          },
          {
            id: 'naturfag-10-5-3-n-quiz3-q1',
            task: 'Hva er flokkimmunitet?',
            options: [
              { id: 'a', text: 'At alle i befolkningen er vaksinert', isCorrect: false },
              { id: 'b', text: 'At nok personer er immune til at sykdommen ikke kan spre seg', isCorrect: true },
              { id: 'c', text: 'At vaksinerte personer beskytter seg selv', isCorrect: false },
              { id: 'd', text: 'At sykdommen blir svakere over tid', isCorrect: false },
            ],
            solution:
              'Flokkimmunitet oppstår når en stor nok andel av befolkningen er immune, slik at sykdommen ikke kan spre seg effektivt. For meslinger kreves ca. 95 % vaksinasjonsdekning. Dette beskytter de som ikke kan vaksineres, som spedbarn og immunsvake personer.',
          },
          {
            id: 'naturfag-10-5-3-n-quiz3-q2',
            task: 'Hvorfor er det viktig å fullføre en antibiotikakur selv om du føler deg frisk?',
            options: [
              { id: 'a', text: 'Fordi antibiotika trenger tid til å virke på virus', isCorrect: false },
              { id: 'b', text: 'Fordi kroppen trenger antibiotika som vitamin', isCorrect: false },
              { id: 'c', text: 'Fordi noen resistente bakterier kan overleve og formere seg hvis du slutter for tidlig', isCorrect: true },
              { id: 'd', text: 'Fordi legen krever det av juridiske grunner', isCorrect: false },
            ],
            solution:
              'Hvis du slutter med antibiotika for tidlig, kan de mest motstandsdyktige bakteriene overleve og formere seg. Da sitter du igjen med en infeksjon av resistente bakterier som er vanskeligere å behandle. Fullføring av hele kuren dreper alle bakteriene, også de som er delvis resistente.',
          },
          {
            id: 'naturfag-10-5-3-n-quiz3-q3',
            task: 'Antibiotika virker mot:',
            options: [
              { id: 'a', text: 'Bare virus', isCorrect: false },
              { id: 'b', text: 'Bare bakterier', isCorrect: true },
              { id: 'c', text: 'Både bakterier og virus', isCorrect: false },
              { id: 'd', text: 'Bare sopp', isCorrect: false },
            ],
            solution:
              'Antibiotika virker bare mot bakterier, ikke mot virus. Forkjølelse og influensa er virusinfeksjoner, og antibiotika hjelper ikke mot dem. Å bruke antibiotika mot virus bidrar bare til antibiotikaresistens uten å gi noen nytte.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-5-3-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket immunforsvaret, kroppens livsviktige forsvarssystem mot sykdom. Det består av tre forsvarslinjer. Første forsvarslinje er fysiske og kjemiske barrierer som hud, slimhinner, tårer med lysozym og magesyre. Andre forsvarslinje er den medfødte immuniteten med hvite blodceller som utfører fagocytose, betennelse med rødhet, hevelse, varme og smerte, og feber som hemmer mikroorganismer. Tredje forsvarslinje er den spesifikke immuniteten med B-celler som produserer antistoffer og T-celler som dreper infiserte celler.

Vi har lært at antigener er molekyler på overflaten av mikroorganismer som immunforsvaret gjenkjenner, og at antistoffer er Y-formede proteiner som binder seg til spesifikke antigener. Hukommelsesceller, dannet av både B-celler og T-celler, gir immunologisk hukommelse som sikrer rask respons ved nye møter med samme sykdom.

Vi har forstått at vaksiner trener immunforsvaret uten at du blir syk, ved å presentere antigener fra drepte, svekkede eller deler av mikroorganismer. Flokkimmunitet oppstår når nok personer er vaksinert til at sykdommen ikke kan spre seg, noe som beskytter de som ikke kan vaksinere seg.

Til slutt har vi sett at antibiotikaresistens oppstår gjennom mutasjoner og naturlig utvalg når antibiotika brukes feil. Over 700 000 mennesker dør årlig av dette, og forebygging handler om ansvarlig bruk av antibiotika og vaksinering.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle narrative kapitler i DEL 5A
// ============================================================================

export const NATURFAG_10_NARRATIV_DEL5A_CHAPTERS = [
  CHAPTER_NATURFAG_10_5_1_NARRATIV,
  CHAPTER_NATURFAG_10_5_2_NARRATIV,
  CHAPTER_NATURFAG_10_5_3_NARRATIV,
];
