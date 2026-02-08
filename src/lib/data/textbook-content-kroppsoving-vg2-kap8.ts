/**
 * Kroppsøving VG2 - Kapittel 8: Idrett og samfunn
 *
 * Dekker LK20 læreplan for kroppsøving VG2, med fokus på idrettens
 * rolle i samfunnet, fair play, inkludering, doping og kroppsidealer.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 8.1: Idrettens rolle i samfunnet
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_8_1: TextbookChapter = {
  id: 'kroppsoving-vg2-8-1',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '8.1',
  title: 'Idrettens rolle i samfunnet',
  description: 'Utforsk hvordan idrett påvirker samfunnet gjennom folkehelse, økonomi, kultur og fellesskap.',
  estimatedMinutes: 45,
  competenceGoals: [
    'reflektere over idrettens plass i samfunnet',
    'drøfte idrettens betydning for folkehelse og fellesskap',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-8-1-intro',
      type: 'text',
      content: `Idrett er en av de viktigste kulturelle og sosiale institusjonene i Norge. Fra breddeidrett i lokale idrettslag til toppidrett på internasjonalt nivå, spiller idrett en sentral rolle i folks hverdag. I dette kapittelet ser vi på hvordan idrett påvirker samfunnet på flere nivåer.`,
    },
    {
      id: 'kroppsoving-vg2-8-1-def-1',
      type: 'definition',
      title: 'Idrettskultur',
      content: `Idrettskultur omfatter verdier, normer, tradisjoner og praksiser knyttet til idrett og fysisk aktivitet i et samfunn. Den påvirkes av historie, geografi, økonomi og politikk.`,
    },
    {
      id: 'kroppsoving-vg2-8-1-text-1',
      type: 'text',
      title: 'Idrett og folkehelse',
      content: `Norsk idrettspolitikk bygger på prinsippet om at fysisk aktivitet fremmer folkehelsen. Norges idrettsforbund (NIF) er landets største frivillige organisasjon med over 2 millioner medlemskap. Breddeidretten gir befolkningen tilgang til organisert aktivitet, mens friluftsliv har en særstilling i norsk kultur.`,
    },
    {
      id: 'kroppsoving-vg2-8-1-def-2',
      type: 'definition',
      title: 'Breddeidrett',
      content: `Breddeidrett er idrettsaktivitet som er åpen for alle, uavhengig av ferdighetsnivå. Målet er deltakelse, trivsel og helsefremming, i motsetning til toppidrett som fokuserer på prestasjoner og konkurranseresultater.`,
    },
    {
      id: 'kroppsoving-vg2-8-1-text-2',
      type: 'text',
      title: 'Idrettens økonomiske betydning',
      content: `Idrett skaper arbeidsplasser, genererer inntekter gjennom arrangementer og bidrar til lokal næringsutvikling. Store idrettsarrangementer som ski-VM eller fotball-NM tiltrekker turister og gir medieinntekter. Samtidig finansieres norsk idrett gjennom tippemidler, kommunale tilskudd og frivillig arbeid.`,
    },
    {
      id: 'kroppsoving-vg2-8-1-example-1',
      type: 'example',
      title: 'Idrettens samfunnsroller',
      content: `**Helse**: Idrettslag tilbyr lavterskeltilbud som trim og mosjon for alle aldersgrupper.\n\n**Integrering**: Fotballklubber og idrettslag er viktige møteplasser for barn og unge med ulik bakgrunn.\n\n**Økonomi**: Holmenkollen skifestival genererer hundrevis av millioner i omsetning for Oslo-regionen.\n\n**Identitet**: Langrenn og vintersport er tett knyttet til norsk nasjonal identitet.`,
    },
    {
      id: 'kroppsoving-vg2-8-1-text-3',
      type: 'text',
      title: 'Idrett som sosial arena',
      content: `Idrettslag fungerer som viktige sosiale møteplasser i lokalsamfunn over hele landet. For barn og unge er idrett en arena for sosialisering, vennskap og tilhørighet. Frivillig arbeid i idretten er en bærebjelke i det norske organisasjonslivet.`,
    },
    {
      id: 'kroppsoving-vg2-8-1-def-3',
      type: 'definition',
      title: 'Toppidrett',
      content: `Toppidrett er idrettsutøvelse på høyeste nivå der utøverne trener systematisk for å oppnå best mulige resultater i nasjonale og internasjonale konkurranser. Olympiatoppens definisjon krever at utøveren er blant de beste i sin idrett.`,
    },
    {
      id: 'kroppsoving-vg2-8-1-tip-1',
      type: 'tip',
      title: 'Idrett i nærmiljøet',
      content: `Undersøk hvilke idrettslag og aktivitetstilbud som finnes i ditt nærmiljø. Mange steder tilbyr idrettslag gratis prøvetimer og lavterskeltilbud for ungdom.`,
    },
    {
      id: 'kroppsoving-vg2-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er idrettskultur?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av idrettskultur.',
            solution: 'Verdier, normer, tradisjoner og praksiser knyttet til idrett i et samfunn',
            multipleChoiceOptions: [
              'Verdier, normer, tradisjoner og praksiser knyttet til idrett i et samfunn',
              'En spesiell type treningsmetode for kulturell dans',
              'Reglene i en bestemt idrett',
              'Antall idrettslag i en kommune',
            ],
          },
        ],
        solution: 'Idrettskultur handler om de samlede verdiene, normene og tradisjonene som preger hvordan idrett utøves og forstås i et samfunn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva kjennetegner breddeidrett sammenliknet med toppidrett?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det som best beskriver breddeidrett.',
            solution: 'Åpen for alle, fokus på deltakelse, trivsel og helse',
            multipleChoiceOptions: [
              'Åpen for alle, fokus på deltakelse, trivsel og helse',
              'Bare for de mest talentfulle utøverne',
              'Kun organisert av staten',
              'Aktivitet uten noen form for organisering',
            ],
          },
        ],
        solution: 'Breddeidrett er åpen for alle uavhengig av ferdighetsnivå, og vektlegger deltakelse og trivsel fremfor prestasjoner og resultater.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvordan finansieres norsk idrett?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke er de viktigste finansieringskildene for norsk idrett?',
            solution: 'Tippemidler, kommunale tilskudd, frivillig arbeid og sponsorer',
            multipleChoiceOptions: [
              'Tippemidler, kommunale tilskudd, frivillig arbeid og sponsorer',
              'Bare statlige overføringer',
              'Kun billettinntekter fra kamper',
              'Utenlandske investorer',
            ],
          },
        ],
        solution: 'Norsk idrett finansieres gjennom en kombinasjon av tippemidler (spillemidler), kommunale tilskudd, medlemskontingenter, frivillig arbeid, sponsorer og arrangementsinntekter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hvordan idrett kan bidra til integrering i samfunnet. Gi minst to konkrete eksempler.',
        solution: 'Idrett fungerer som en møteplass der mennesker med ulik bakgrunn kan delta på like vilkår. Eksempler: Fotballklubber som organiserer åpne treninger for flyktningbarn, idrettslag som tilbyr aktiviteter med redusert kontingent, og flerkulturelle idrettsarrangementer som fremmer samhold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-8-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft forholdet mellom toppidrett og breddeidrett i Norge. Kan de styrke hverandre, eller konkurrerer de om de samme ressursene?',
        solution: 'Toppidrett kan inspirere til økt deltakelse i breddeidretten gjennom rollemodeller og medieoppmerksomhet. Samtidig kan stor ressursbruk på toppidrett gå på bekostning av breddetilbud. I Norge forsøker man å balansere dette gjennom idrettspolitikk som støtter begge nivåer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-8-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Undersøk et idrettslag i ditt nærmiljø. Beskriv hvilke aktiviteter de tilbyr, hvem som deltar, og hvilken rolle laget spiller i lokalsamfunnet.',
        solution: 'Svar vil variere. Bør inkludere: Navn på idrettslaget, idrettstilbud (bredde og eventuelt toppidrett), aldersgrupper og målgrupper, frivillighet og dugnadsarbeid, og lagets sosiale funksjon i nærmiljøet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.2: Fair play og sportsmannsånd
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_8_2: TextbookChapter = {
  id: 'kroppsoving-vg2-8-2',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '8.2',
  title: 'Fair play og sportsmannsånd',
  description: 'Lær om fair play-begrepet, sportsmannsånd og etiske normer i idrett og fysisk aktivitet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'reflektere over fair play og etikk i idrett',
    'praktisere sportsmannsånd i ulike aktiviteter',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-8-2-intro',
      type: 'text',
      content: `Fair play er et grunnleggende prinsipp i all idrett. Det handler om mer enn å følge reglene - det dreier seg om respekt, ærlighet og gode holdninger. Sportsmannsånd er kjernen i det som gjør idrett til en positiv kraft i samfunnet.`,
    },
    {
      id: 'kroppsoving-vg2-8-2-def-1',
      type: 'definition',
      title: 'Fair play',
      content: `Fair play innebærer å respektere regler, motstandere, dommere og medspillere. Det omfatter både formell fair play (å følge reglene) og uformell fair play (å vise respekt og gode holdninger utover det reglene krever).`,
    },
    {
      id: 'kroppsoving-vg2-8-2-text-1',
      type: 'text',
      title: 'Formell og uformell fair play',
      content: `**Formell fair play** betyr å overholde idrettens skrevne regler og retningslinjer. **Uformell fair play** går lenger og handler om å vise sportsånd: å hjelpe en skadet motstander, innrømme en feil selv om dommeren ikke så den, eller gratulere vinneren etter et tap. Begge deler er viktige for idrettens verdi.`,
    },
    {
      id: 'kroppsoving-vg2-8-2-def-2',
      type: 'definition',
      title: 'Sportsmannsånd',
      content: `Sportsmannsånd er evnen til å konkurrere med integritet, vise respekt for motstandere og håndtere både seier og tap med verdighet. Det innebærer å sette idrettens verdier høyere enn eget resultat.`,
    },
    {
      id: 'kroppsoving-vg2-8-2-example-1',
      type: 'example',
      title: 'Fair play i praksis',
      content: `**Eksempel 1**: I en fotballkamp sparker en spiller ballen ut fordi en motstander er skadet, selv om laget hadde en god angrepsmulighet.\n\n**Eksempel 2**: En tennisspiller korrigerer en linjedommers avgjørelse til fordel for motstanderen fordi hun så at ballen var inne.\n\n**Eksempel 3**: Under en løpekonkurranse stopper en utøver for å hjelpe en konkurrent som har falt, selv om det koster egen plassering.`,
    },
    {
      id: 'kroppsoving-vg2-8-2-text-2',
      type: 'text',
      title: 'Brudd på fair play',
      content: `Brudd på fair play kan være bevisst juks, filming (simulering), verbal trakassering av dommere eller motstandere, og usportslig oppførsel. I lagidrett kan en negativ kultur med fokus på å vinne for enhver pris undergrave fair play. Konsekvensene kan være utestengelse, bøter og tap av respekt.`,
    },
    {
      id: 'kroppsoving-vg2-8-2-text-3',
      type: 'text',
      title: 'Fair play i hverdagen',
      content: `Fair play-prinsippene gjelder ikke bare i organisert idrett. I skolens kroppsøvingstimer, i friminuttet og på fritiden bør de samme verdiene ligge til grunn. Å inkludere alle, respektere ulike ferdighetsnivåer og oppmuntre hverandre er viktige sider av fair play i hverdagen.`,
    },
    {
      id: 'kroppsoving-vg2-8-2-tip-1',
      type: 'tip',
      title: 'Vær et forbilde',
      content: `Fair play starter med deg selv. Ved å vise respekt, følge regler og oppmuntre andre, bidrar du til et positivt idrettsmiljø. Husk at holdninger smitter - gode holdninger skaper gode miljøer.`,
    },
    {
      id: 'kroppsoving-vg2-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen mellom formell og uformell fair play?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av uformell fair play.',
            solution: 'Å vise respekt og gode holdninger utover det reglene krever',
            multipleChoiceOptions: [
              'Å vise respekt og gode holdninger utover det reglene krever',
              'Å følge de skrevne reglene i en idrett',
              'Å vinne for enhver pris',
              'Å unngå rødt kort',
            ],
          },
        ],
        solution: 'Formell fair play handler om å overholde reglene, mens uformell fair play går lenger og innebærer å vise sportsånd og respekt utover det som er påkrevd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva kjennetegner god sportsmannsånd?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det som best beskriver sportsmannsånd.',
            solution: 'Å konkurrere med integritet og håndtere seier og tap med verdighet',
            multipleChoiceOptions: [
              'Å konkurrere med integritet og håndtere seier og tap med verdighet',
              'Å alltid vinne',
              'Å aldri vise følelser',
              'Å kun fokusere på egne prestasjoner',
            ],
          },
        ],
        solution: 'Sportsmannsånd handler om integritet, respekt for motstandere og evnen til å håndtere konkurransens utfall med verdighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-8-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke konsekvenser kan brudd på fair play ha?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg eksempler på konsekvenser ved brudd på fair play.',
            solution: 'Utestengelse, bøter, tap av respekt og dårlig idrettsmiljø',
            multipleChoiceOptions: [
              'Utestengelse, bøter, tap av respekt og dårlig idrettsmiljø',
              'Ingen konsekvenser så lenge man vinner',
              'Bare muntlig advarsel',
              'Automatisk diskvalifikasjon fra all idrett for alltid',
            ],
          },
        ],
        solution: 'Brudd på fair play kan føre til utestengelse, bøter, tap av respekt blant medspillere og motstandere, og en negativ kultur i idrettsmiljøet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-8-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv en situasjon der du selv har opplevd god eller dårlig sportsmannsånd. Reflekter over hvordan det påvirket opplevelsen.',
        solution: 'Svar vil variere. Bør inkludere: Konkret situasjon, hvem som var involvert, hva som skjedde, hvordan det føltes, og refleksjon over betydningen av sportsmannsånd for idrettsopplevelsen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-8-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft om det er mulig å kombinere et sterkt vinnerinstinkt med god fair play. Bruk eksempler fra idrettsverden.',
        solution: 'Det er fullt mulig å ha et sterkt ønske om å vinne og samtidig vise fair play. Mange toppidrettsutøvere er kjent for sin sportsmannsånd. Eksempler kan inkludere utøvere som gratulerer motstandere, innrømmer feil, eller hjelper konkurrenter i nød. Vinnerinstinkt handler om å yte sitt beste, ikke om å bryte regler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.3: Inkludering og mangfold i idrett
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_8_3: TextbookChapter = {
  id: 'kroppsoving-vg2-8-3',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '8.3',
  title: 'Inkludering og mangfold i idrett',
  description: 'Utforsk hvordan idrett kan fremme inkludering, og hvilke barrierer som finnes for deltakelse.',
  estimatedMinutes: 50,
  competenceGoals: [
    'reflektere over inkludering og mangfold i idrett og fysisk aktivitet',
    'drøfte hvordan idrett kan tilrettelegges for ulike grupper',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-8-3-intro',
      type: 'text',
      content: `Idrett skal i utgangspunktet være for alle, men i praksis finnes det barrierer som kan hindre deltakelse. Inkludering i idrett handler om å skape muligheter for mennesker med ulik bakgrunn, funksjonsevne, kjønn og økonomi. Her ser vi på ulike perspektiver på mangfold og inkludering i idrettssammenheng.`,
    },
    {
      id: 'kroppsoving-vg2-8-3-def-1',
      type: 'definition',
      title: 'Universell utforming i idrett',
      content: `Universell utforming i idrett innebærer at idrettsanlegg, aktiviteter og organisering utformes slik at de er tilgjengelige for flest mulig, uavhengig av funksjonsevne. Dette inkluderer fysisk tilgjengelighet, informasjonstilgjengelighet og tilpassede aktiviteter.`,
    },
    {
      id: 'kroppsoving-vg2-8-3-text-1',
      type: 'text',
      title: 'Paraidrett',
      content: `Paraidrett er organisert idrett for personer med nedsatt funksjonsevne. Norges idrettsforbund arbeider for at paraidrett skal være integrert i den ordinære idretten. De paralympiske leker er det største internasjonale arrangementet for parautøvere og har bidratt til økt synlighet og anerkjennelse.`,
    },
    {
      id: 'kroppsoving-vg2-8-3-def-2',
      type: 'definition',
      title: 'Paraidrett',
      content: `Paraidrett er idrett tilrettelagt for personer med fysisk, sensorisk eller intellektuell funksjonsnedsettelse. Utøverne klassifiseres etter funksjonsevne for å sikre rettferdig konkurranse.`,
    },
    {
      id: 'kroppsoving-vg2-8-3-text-2',
      type: 'text',
      title: 'Barrierer for deltakelse',
      content: `Det finnes flere barrierer som kan hindre deltakelse i idrett. Økonomiske barrierer som høye kontingenter og utstyrskostnader rammer familier med lav inntekt. Kulturelle barrierer kan oppstå når idrettstilbud ikke er tilpasset ulike tradisjoner. Fysiske barrierer knyttet til manglende tilgjengelighet i anlegg begrenser deltakelsen for personer med funksjonsnedsettelser.`,
    },
    {
      id: 'kroppsoving-vg2-8-3-example-1',
      type: 'example',
      title: 'Tiltak for inkludering',
      content: `**Utstyrslån og redusert kontingent**: Flere idrettslag tilbyr utstyrsboder og reduserte priser for familier med lav inntekt.\n\n**Tilrettelagte grupper**: Noen klubber har egne treningsgrupper for parautøvere eller tilpasser ordinære treninger.\n\n**Flerkulturelle tiltak**: Idrettslag kan tilby kjønnsdelte treninger eller tilpasse aktiviteter for å inkludere flere.`,
    },
    {
      id: 'kroppsoving-vg2-8-3-text-3',
      type: 'text',
      title: 'Kjønn og idrett',
      content: `Likestilling i idrett har utviklet seg over tid. Kvinner fikk gradvis tilgang til flere idretter utover 1900-tallet. I dag diskuteres spørsmål om likelønn, mediedekning og kjønnskategorier i idrett. Ulike syn finnes på hvordan man best balanserer rettferdighet og inkludering i konkurranseidrett, og debatten om kjønnskategorier er kompleks med biologiske, sosiale og etiske dimensjoner.`,
    },
    {
      id: 'kroppsoving-vg2-8-3-tip-1',
      type: 'tip',
      title: 'Alle kan bidra til inkludering',
      content: `Du kan bidra til et mer inkluderende idrettsmiljø ved å invitere med nye deltakere, tilpasse aktiviteter slik at alle kan delta, og være bevisst på at folk har ulike forutsetninger og bakgrunn.`,
    },
    {
      id: 'kroppsoving-vg2-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr universell utforming i idrettssammenheng?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av universell utforming i idrett.',
            solution: 'At idrettsanlegg og aktiviteter utformes tilgjengelig for flest mulig',
            multipleChoiceOptions: [
              'At idrettsanlegg og aktiviteter utformes tilgjengelig for flest mulig',
              'At alle må delta i de samme aktivitetene',
              'At idrettsanlegg kun bygges for rullestolbrukere',
              'At alle idrettsgrener slås sammen til én',
            ],
          },
        ],
        solution: 'Universell utforming i idrett handler om å gjøre anlegg, aktiviteter og organisering tilgjengelig for flest mulig, uavhengig av funksjonsevne.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-8-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er paraidrett?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av paraidrett.',
            solution: 'Idrett tilrettelagt for personer med funksjonsnedsettelse',
            multipleChoiceOptions: [
              'Idrett tilrettelagt for personer med funksjonsnedsettelse',
              'Idrett som kun foregår innendørs',
              'En spesiell treningsform for barn',
              'Idrett som bare utøves i par',
            ],
          },
        ],
        solution: 'Paraidrett er idrett for personer med fysisk, sensorisk eller intellektuell funksjonsnedsettelse, der utøverne klassifiseres etter funksjonsevne.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-8-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke barrierer kan hindre deltakelse i idrett?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg eksempler på barrierer for idrettsdeltakelse.',
            solution: 'Økonomi, manglende tilgjengelighet og kulturelle forskjeller',
            multipleChoiceOptions: [
              'Økonomi, manglende tilgjengelighet og kulturelle forskjeller',
              'For mange idrettstilbud å velge mellom',
              'At idretten er for enkel',
              'At det finnes for mange idrettslag',
            ],
          },
        ],
        solution: 'De viktigste barrierene for idrettsdeltakelse er økonomiske (kontingenter, utstyr), fysiske (manglende tilgjengelighet i anlegg) og kulturelle (manglende tilpasning til ulike tradisjoner).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-8-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Gi eksempler på tiltak et idrettslag kan gjennomføre for å bli mer inkluderende. Begrunn hvorfor hvert tiltak er viktig.',
        solution: 'Eksempler: Utstyrslån og redusert kontingent (senker økonomisk terskel), tilrettelagte treninger for parautøvere (sikrer deltakelse uavhengig av funksjonsevne), flerkulturelle arrangementer (bygger broer mellom ulike grupper), og informasjon på flere språk (gjør tilbudet tilgjengelig for flere).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-8-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft utfordringer knyttet til likestilling i idrett. Presenter ulike perspektiver på hvordan rettferdighet og inkludering kan balanseres.',
        solution: 'Likestilling i idrett har mange dimensjoner. Noen peker på at mediedekning og lønn fortsatt er skjevfordelt mellom kjønn. Andre viser til at biologiske forskjeller gjør det nødvendig med egne konkurranseklasser. Debatten om kjønnskategorier i idrett er kompleks. Ulike perspektiver bør presenteres saklig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-8-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Velg en paraidrett og beskriv hvordan den fungerer. Forklar klassifiseringssystemet og hva som gjør idretten spesiell.',
        solution: 'Svar vil variere. Bør inkludere: Navn på paraidretten (f.eks. rullestolbasketball, boccia, svømming para), regler og tilpasninger, klassifiseringssystem for rettferdig konkurranse, kjente utøvere og arrangement, og hva som gjør idretten unik.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.4: Doping og etikk i idrett
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_8_4: TextbookChapter = {
  id: 'kroppsoving-vg2-8-4',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '8.4',
  title: 'Doping og etikk i idrett',
  description: 'Lær om antidopingarbeid, WADAs rolle, helsekonsekvenser av doping og etiske dilemmaer.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for antidopingarbeid og konsekvenser av doping',
    'drøfte etiske dilemmaer knyttet til prestasjonsfremmende midler i idrett',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-8-4-intro',
      type: 'text',
      content: `Doping er et av de mest omdiskuterte temaene i idrettsverden. Bruken av forbudte stoffer og metoder for å øke prestasjoner truer idrettens troverdighet og utøvernes helse. Her ser vi på hva doping er, hvordan det bekjempes, og hvilke etiske spørsmål som oppstår.`,
    },
    {
      id: 'kroppsoving-vg2-8-4-def-1',
      type: 'definition',
      title: 'Doping',
      content: `Doping defineres av WADA (World Anti-Doping Agency) som brudd på antidopingreglene, inkludert bruk, besittelse eller tilstedeværelse av forbudte stoffer eller metoder. Dopinglisten oppdateres årlig og inkluderer blant annet anabole steroider, EPO, veksthormoner og blodtransfusjoner.`,
    },
    {
      id: 'kroppsoving-vg2-8-4-text-1',
      type: 'text',
      title: 'WADA og antidopingarbeid',
      content: `WADA (World Anti-Doping Agency) ble opprettet i 1999 og koordinerer det internasjonale antidopingarbeidet. I Norge er Antidoping Norge ansvarlig for testing og forebygging. WADA-koden gjelder for all organisert idrett. Utøvere har meldeplikt om hvor de befinner seg, og kan testes både i og utenfor konkurranse.`,
    },
    {
      id: 'kroppsoving-vg2-8-4-def-2',
      type: 'definition',
      title: 'WADA (World Anti-Doping Agency)',
      content: `WADA er det internasjonale antidopingbyrået som utarbeider og håndhever regler for antidopingarbeid i idrett. WADA publiserer dopinglisten, utvikler testmetoder og overvåker at land og forbund følger antidopingreglene.`,
    },
    {
      id: 'kroppsoving-vg2-8-4-text-2',
      type: 'text',
      title: 'Helsekonsekvenser av doping',
      content: `Dopingmidler kan gi alvorlige helsekonsekvenser. Anabole steroider kan føre til leverskader, hjerte-kar-sykdom, hormonelle forstyrrelser og psykiske endringer. EPO øker risikoen for blodpropp og hjerneslag. Mange bivirkninger kan være varige. Helseperspektivet er et av hovedargumentene i antidopingarbeidet.`,
    },
    {
      id: 'kroppsoving-vg2-8-4-example-1',
      type: 'example',
      title: 'Typer dopingmidler og metoder',
      content: `**Anabole steroider**: Øker muskelmasse og styrke. Bivirkninger: leverskader, akne, aggresjon, hormonelle endringer.\n\n**EPO (erytropoietin)**: Øker oksygentransporten i blodet. Bivirkninger: blodpropp, hjerneslag, hjertestans.\n\n**Veksthormon (HGH)**: Stimulerer cellevekst. Bivirkninger: leddproblemer, diabetes, organvekst.\n\n**Blodtransfusjoner**: Øker antall røde blodceller. Risiko: infeksjoner, blodpropp, immunreaksjoner.`,
    },
    {
      id: 'kroppsoving-vg2-8-4-text-3',
      type: 'text',
      title: 'Etiske dilemmaer',
      content: `Dopingdebatten reiser flere etiske spørsmål. Noen mener at utøvere selv bør bestemme hva de tilfører kroppen, mens andre peker på at fri bruk ville skape urettferdig konkurranse og tvinge alle til å dope seg. Grensen mellom lovlige og ulovlige prestasjonsfremmende metoder er ikke alltid klar. Kosttilskudd, høydetrening og avansert utstyr er tillatt, mens mange medikamenter ikke er det.`,
    },
    {
      id: 'kroppsoving-vg2-8-4-def-3',
      type: 'definition',
      title: 'Strikt ansvar',
      content: `I antidopingreglene gjelder prinsippet om strikt ansvar: Utøveren er selv ansvarlig for alt som finnes i kroppen, uavhengig av hvordan stoffet kom dit. Dette betyr at utøveren må være svært forsiktig med medisiner, kosttilskudd og mat.`,
    },
    {
      id: 'kroppsoving-vg2-8-4-tip-1',
      type: 'tip',
      title: 'Sjekk kosttilskudd',
      content: `Antidoping Norge anbefaler å være svært forsiktig med kosttilskudd, da noen kan inneholde forbudte stoffer uten at det er merket. Bruk informerte valg-merket og sjekk antidoping.no for oppdatert informasjon.`,
    },
    {
      id: 'kroppsoving-vg2-8-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er WADAs rolle i antidopingarbeidet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av WADAs hovedoppgave.',
            solution: 'Koordinere internasjonalt antidopingarbeid og utarbeide dopinglisten',
            multipleChoiceOptions: [
              'Koordinere internasjonalt antidopingarbeid og utarbeide dopinglisten',
              'Trene idrettsutøvere i riktig kosthold',
              'Arrangere de olympiske leker',
              'Selge kosttilskudd til utøvere',
            ],
          },
        ],
        solution: 'WADA koordinerer det internasjonale antidopingarbeidet, publiserer dopinglisten, utvikler testmetoder og påser at land og forbund følger WADA-koden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-8-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva betyr prinsippet om strikt ansvar?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring av strikt ansvar i antidoping.',
            solution: 'Utøveren er selv ansvarlig for alt som finnes i kroppen',
            multipleChoiceOptions: [
              'Utøveren er selv ansvarlig for alt som finnes i kroppen',
              'Treneren er ansvarlig for utøverens dopingprøver',
              'Forbundet må bevise at utøveren visste om stoffet',
              'Utøveren kan skylde på forurenset kosttilskudd uten konsekvenser',
            ],
          },
        ],
        solution: 'Strikt ansvar betyr at utøveren er ansvarlig for alt som finnes i kroppen, uavhengig av om inntaket var bevisst eller ubevisst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-8-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke helsekonsekvenser kan bruk av anabole steroider ha?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg helsekonsekvenser knyttet til bruk av anabole steroider.',
            solution: 'Leverskader, hjerte-kar-sykdom, hormonelle forstyrrelser og psykiske endringer',
            multipleChoiceOptions: [
              'Leverskader, hjerte-kar-sykdom, hormonelle forstyrrelser og psykiske endringer',
              'Bedre helse og økt livskvalitet',
              'Ingen kjente bivirkninger',
              'Kun midlertidig muskelvekst uten bivirkninger',
            ],
          },
        ],
        solution: 'Anabole steroider kan gi leverskader, hjerte-kar-sykdom, hormonelle forstyrrelser, akne, aggresjon og psykiske endringer. Mange av disse bivirkningene kan være varige.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-8-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar forskjellen mellom lovlige og ulovlige prestasjonsfremmende metoder i idrett. Gi eksempler på begge.',
        solution: 'Lovlige metoder: høydetrening, optimal ernæring, mental trening, avansert treningsutstyr. Ulovlige metoder: anabole steroider, EPO, blodtransfusjoner, veksthormon. Grensen mellom lovlig og ulovlig er definert av WADAs dopingliste og baseres på kriterier som helserisiko, prestasjonsfremmende effekt og brudd på idrettens ånd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-8-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft argumenter for og mot strengere dopingkontroll i idretten. Presenter minst to argumenter fra hver side.',
        solution: 'For strengere kontroll: Beskytter utøvernes helse, sikrer rettferdig konkurranse, bevarer idrettens troverdighet. Mot strengere kontroll: Krenker personvern (meldeplikt), uforholdsmessig ressursbruk, rammer uskyldige ved falske positive, og skaper en mistillitskultur. Begge perspektiver har gyldige poeng.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-8-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Undersøk en dopingsak fra idrettshistorien. Beskriv hva som skjedde, hvilke stoffer som var involvert, og hvilke konsekvenser saken fikk for utøveren og idretten.',
        solution: 'Svar vil variere. Bør inkludere: Hvilken utøver og idrett, tidspunkt, hvilke forbudte stoffer eller metoder som ble brukt, hvordan det ble oppdaget, sanksjoner (utestengelse, fratatte medaljer), og langsiktige konsekvenser for utøveren og idretten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.5: Kroppsidealer og kroppspress
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_8_5: TextbookChapter = {
  id: 'kroppsoving-vg2-8-5',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '8.5',
  title: 'Kroppsidealer og kroppspress',
  description: 'Reflekter over kroppsidealer, medias påvirkning og et sunt forhold til egen kropp.',
  estimatedMinutes: 45,
  competenceGoals: [
    'reflektere over kroppsidealer og kroppspress i idrett og samfunn',
    'drøfte hvordan medier og sosiale medier påvirker kroppsbilde',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-8-5-intro',
      type: 'text',
      content: `Kroppsidealer endrer seg over tid og varierer mellom kulturer. I dag er ungdom eksponert for bilder og budskap om kropp gjennom sosiale medier, reklame og idrettsverden. Det er viktig å forstå hvordan disse påvirkningene fungerer, og å utvikle et reflektert og sunt forhold til egen kropp.`,
    },
    {
      id: 'kroppsoving-vg2-8-5-def-1',
      type: 'definition',
      title: 'Kroppsideal',
      content: `Et kroppsideal er en kulturelt betinget oppfatning av hvordan den ideelle kroppen ser ut. Kroppsidealer varierer mellom kulturer, epoker og idrettsgrener, og påvirkes av medier, motebransen, idrett og sosiale normer.`,
    },
    {
      id: 'kroppsoving-vg2-8-5-text-1',
      type: 'text',
      title: 'Kroppsidealer i endring',
      content: `Gjennom historien har kroppsidealene endret seg betydelig. Det som ble ansett som en attraktiv kropp på 1600-tallet er svært forskjellig fra dagens idealer. I idrettsverden varierer kroppsidealene mellom idrettsgrener - en turner har et annet kroppsideal enn en kulestøter. Denne variasjonen viser at det ikke finnes ett riktig kroppsideal.`,
    },
    {
      id: 'kroppsoving-vg2-8-5-def-2',
      type: 'definition',
      title: 'Kroppspress',
      content: `Kroppspress er opplevelsen av press til å ha en bestemt kropp eller et bestemt utseende. Det kan komme fra medier, sosiale medier, jevnaldrende, idrettsmiljø eller samfunnet generelt, og kan føre til negativt kroppsbilde og helseproblemer.`,
    },
    {
      id: 'kroppsoving-vg2-8-5-text-2',
      type: 'text',
      title: 'Sosiale medier og kroppsbilde',
      content: `Sosiale medier spiller en betydelig rolle i unges oppfatning av kropp og utseende. Redigerte bilder, filtre og fremvisning av trening og kropp kan skape urealistiske forventninger. Forskning viser ulike funn - noen studier finner sammenheng mellom bruk av sosiale medier og negativt kroppsbilde, mens andre peker på at sosiale medier også kan brukes positivt, for eksempel gjennom kroppspositivisme-bevegelser.`,
    },
    {
      id: 'kroppsoving-vg2-8-5-example-1',
      type: 'example',
      title: 'Kroppspress i ulike sammenhenger',
      content: `**I idrett**: Noen idretter har høyere forekomst av spiseforstyrrelser, særlig estetiske idretter (turn, dans) og vektklasseidretter (bryting, boksing) der lav kroppsvekt kan gi fordeler.\n\n**I sosiale medier**: Fitspiration-kontoer viser ofte redigerte bilder som kan gi et skjevt bilde av hva som er normalt og oppnåelig.\n\n**I hverdagen**: Kommentarer om kropp og utseende fra venner, familie eller trenere kan oppleves som press, selv om det ikke er ment slik.`,
    },
    {
      id: 'kroppsoving-vg2-8-5-text-3',
      type: 'text',
      title: 'Et sunt forhold til kroppen',
      content: `Å utvikle et sunt kroppsbilde handler om å verdsette kroppen for hva den kan gjøre, ikke bare for hvordan den ser ut. Fokus på funksjon, helse og velvære fremfor utseende bidrar til bedre psykisk helse. Det er viktig å være kritisk til idealer og innse at kroppsmangfold er naturlig og positivt.`,
    },
    {
      id: 'kroppsoving-vg2-8-5-tip-1',
      type: 'tip',
      title: 'Bygg et positivt kroppsbilde',
      content: `Fokuser på hva kroppen din kan gjøre, ikke bare hvordan den ser ut. Vær kritisk til redigerte bilder på sosiale medier, og omgi deg med mennesker som verdsetter deg for den du er. Dersom du eller noen du kjenner sliter med kroppspress, snakk med en voksen du stoler på.`,
    },
    {
      id: 'kroppsoving-vg2-8-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er et kroppsideal?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av kroppsideal.',
            solution: 'En kulturelt betinget oppfatning av hvordan den ideelle kroppen ser ut',
            multipleChoiceOptions: [
              'En kulturelt betinget oppfatning av hvordan den ideelle kroppen ser ut',
              'En vitenskapelig definisjon av den perfekte kroppen',
              'Den kroppen som er best for alle idretter',
              'En universell standard for skjønnhet som aldri endres',
            ],
          },
        ],
        solution: 'Et kroppsideal er kulturelt betinget og endrer seg over tid og mellom kulturer. Det finnes ikke ett objektivt riktig kroppsideal.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-8-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er kroppspress?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av kroppspress.',
            solution: 'Opplevelsen av press til å ha en bestemt kropp eller et bestemt utseende',
            multipleChoiceOptions: [
              'Opplevelsen av press til å ha en bestemt kropp eller et bestemt utseende',
              'Press for å trene mer enn andre',
              'Fysisk press under styrketrening',
              'Press fra treneren om å prestere bedre',
            ],
          },
        ],
        solution: 'Kroppspress er opplevelsen av press knyttet til kropp og utseende, og kan komme fra medier, sosiale medier, jevnaldrende eller idrettsmiljøet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-8-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvordan kan sosiale medier påvirke kroppsbildet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig om sosiale mediers påvirkning på kroppsbilde.',
            solution: 'Redigerte bilder og filtre kan skape urealistiske forventninger',
            multipleChoiceOptions: [
              'Redigerte bilder og filtre kan skape urealistiske forventninger',
              'Sosiale medier har ingen påvirkning på kroppsbilde',
              'Sosiale medier viser alltid virkeligheten',
              'Bare voksne påvirkes av sosiale medier',
            ],
          },
        ],
        solution: 'Sosiale medier kan påvirke kroppsbilde både negativt og positivt. Redigerte bilder kan skape urealistiske forventninger, men plattformene kan også brukes til å fremme kroppspositivisme og mangfold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-8-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hvorfor kroppsidealer varierer mellom ulike idrettsgrener. Gi eksempler fra minst tre idretter.',
        solution: 'Kroppsidealer varierer fordi ulike idretter stiller ulike krav til kroppen. Eksempler: Langdistanseløpere har gjerne lav kroppsvekt og lav fettprosent for effektiv oksygentransport. Brytere og vektløftere verdsetter muskelmasse og styrke. Svømmere har ofte lange armer og stor overkropp for effektiv fremdrift. Disse forskjellene viser at det ikke finnes ett universelt kroppsideal.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-8-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvordan kroppspress kan forebygges i skole og idrettsmiljø. Presenter tiltak og begrunn valgene dine.',
        solution: 'Forebyggende tiltak: Undervisning om mediekritikk og bildemanipulering, fokus på funksjon og helse fremfor utseende i kroppsøvingstimene, trenere som unngår kommentarer om utøveres vekt og kropp, åpen dialog om kroppspress og psykisk helse, og positive rollemodeller som viser kroppsmangfold. Begrunnelse: Kunnskap om påvirkningsmekanismer og et trygt miljø kan motvirke negativt kroppspress.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-8-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-8-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Analyser en reklame, et innlegg på sosiale medier eller et mediebilde som viser en kropp. Hva slags kroppsideal formidles? Hvilke virkemidler brukes? Hvordan kan budskapet påvirke ulike mottakere?',
        solution: 'Svar vil variere. Bør inkludere: Beskrivelse av medieinnholdet, identifisering av kroppsidealet som formidles, virkemiddelanalyse (lyssetting, vinkel, redigering, tekst), refleksjon over ulike mottakeres mulige reaksjoner, og kritisk vurdering av budskapets potensielle påvirkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler i kapittel 8
// ============================================================================

export const KROPPSOVING_VG2_KAP8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KROPPSOVING_VG2_8_1,
  CHAPTER_KROPPSOVING_VG2_8_2,
  CHAPTER_KROPPSOVING_VG2_8_3,
  CHAPTER_KROPPSOVING_VG2_8_4,
  CHAPTER_KROPPSOVING_VG2_8_5,
];
