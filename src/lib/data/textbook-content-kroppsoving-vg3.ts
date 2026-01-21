/**
 * Kroppsøving VG3 - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for kroppsøving på VG3
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Livslang bevegelsesglede - motivasjon og egenaktivitet
// ============================================================================

export const CHAPTER_KROPPSOVING_VG3_1: TextbookChapter = {
  id: 'kroppsoving-vg3-1',
  courseId: 'kroppsoving-vg3',
  chapterNumber: '1',
  title: 'Livslang bevegelsesglede - motivasjon og egenaktivitet',
  description: 'Utvikle varig motivasjon for fysisk aktivitet og ta ansvar for egen treningspraksis.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utvikle livslang bevegelsesglede gjennom varierte aktiviteter',
    'ta ansvar for egen treningspraksis og motivasjon',
  ],
  content: [
    {
      id: 'kroppsoving-vg3-1-intro',
      type: 'text',
      content: `På VG3 handler kroppsøving om å forberede seg på et liv med fysisk aktivitet etter videregående. Du skal utvikle selvstendighet, finne aktiviteter som gir deg glede, og bygge vaner som varer livet ut.`,
    },
    {
      id: 'kroppsoving-vg3-1-def-1',
      type: 'definition',
      title: 'Bevegelsesglede',
      content: `Bevegelsesglede er den indre tilfredsstillelsen og gleden man opplever ved fysisk aktivitet. Det handler om å finne aktiviteter som gir mening og velvære, ikke bare resultater.`,
    },
    {
      id: 'kroppsoving-vg3-1-text-1',
      type: 'text',
      content: `**Fra ytre til indre motivasjon**

**Ytre motivasjon**:
- Karakterer og vurdering
- Andres forventninger
- Belønninger og straff
- Sosial anerkjennelse

**Indre motivasjon**:
- Glede ved selve aktiviteten
- Følelse av mestring
- Personlig mening
- Selvbestemmelse

**Overgangen**:
- Prøv mange aktiviteter
- Finn det som passer deg
- Fokuser på prosess, ikke resultat
- Bygg på positive opplevelser`,
    },
    {
      id: 'kroppsoving-vg3-1-text-2',
      type: 'text',
      content: `**Selvbestemmelsesteorien - nøkkelen til varig motivasjon**

**Autonomi - selvbestemmelse**:
- Velge aktiviteter selv
- Bestemme når og hvordan
- Sette egne mål
- Eierskap til treningen

**Kompetanse - mestring**:
- Oppleve fremgang
- Beherske ferdigheter
- Møte passende utfordringer
- Få tilbakemelding

**Tilhørighet - sosial tilknytning**:
- Trene med andre
- Være del av et fellesskap
- Støtte og bli støttet
- Dele opplevelser`,
    },
    {
      id: 'kroppsoving-vg3-1-def-2',
      type: 'definition',
      title: 'Egenaktivitet',
      content: `Egenaktivitet er fysisk aktivitet du planlegger og gjennomfører på egen hånd, uavhengig av organisert trening. Det krever selvdisiplin, kunnskap og indre motivasjon.`,
    },
    {
      id: 'kroppsoving-vg3-1-text-3',
      type: 'text',
      content: `**Strategier for livslang aktivitet**

**Finn din aktivitet**:
- Utforsk ulike idretter og aktiviteter
- Prøv både individuelt og sosialt
- Vurder hva som passer livsstilen din
- Vær åpen for nye opplevelser

**Bygg vaner**:
- Start med små, overkommelige mål
- Knytt aktivitet til faste tidspunkter
- Ha en plan B for travle dager
- Feir konsistens, ikke perfeksjon

**Håndter motgang**:
- Forvent perioder med lav motivasjon
- Ha strategier for å komme tilbake
- Ikke gi opp etter pause
- Lær av tilbakeslag

**Tilpass over tid**:
- Aktivitetsbehov endrer seg
- Vær fleksibel med metoder
- Lytt til kroppen
- Juster mål etter livssituasjon`,
    },
    {
      id: 'kroppsoving-vg3-1-tip-1',
      type: 'tip',
      title: 'Aktivitetsidentitet',
      content: `Se på deg selv som en aktiv person. Identitet påvirker atferd - hvis du tenker "jeg er en som trener", blir det lettere å prioritere aktivitet selv i travle perioder.`,
    },
    {
      id: 'kroppsoving-vg3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er bevegelsesglede?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av bevegelsesglede.',
            solution: 'Den indre tilfredsstillelsen og gleden ved fysisk aktivitet',
            multipleChoiceOptions: [
              'Den indre tilfredsstillelsen og gleden ved fysisk aktivitet',
              'Å vinne konkurranser',
              'Å få gode karakterer i gym',
              'Å bli sliten',
            ],
          },
        ],
        solution: 'Bevegelsesglede handler om å finne aktiviteter som gir mening og velvære, uavhengig av prestasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er de tre grunnleggende behovene i selvbestemmelsesteorien?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktige behov.',
            solution: 'Autonomi, kompetanse og tilhørighet',
            multipleChoiceOptions: [
              'Autonomi, kompetanse og tilhørighet',
              'Mat, søvn og trening',
              'Styrke, utholdenhet og bevegelighet',
              'Penger, status og makt',
            ],
          },
        ],
        solution: 'Når disse tre behovene dekkes, øker indre motivasjon og sjansen for varig aktivitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva kjennetegner indre motivasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg kjennetegn på indre motivasjon.',
            solution: 'Glede ved aktiviteten, følelse av mestring og personlig mening',
            multipleChoiceOptions: [
              'Glede ved aktiviteten, følelse av mestring og personlig mening',
              'Karakterer og belønninger',
              'Andres forventninger',
              'Straff for inaktivitet',
            ],
          },
        ],
        solution: 'Indre motivasjon kommer innenfra og er mer varig enn ytre motivasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er egenaktivitet?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv egenaktivitet.',
            solution: 'Fysisk aktivitet du planlegger og gjennomfører på egen hånd',
            multipleChoiceOptions: [
              'Fysisk aktivitet du planlegger og gjennomfører på egen hånd',
              'Trening med personlig trener',
              'Organisert lagidrett',
              'Gymtimer på skolen',
            ],
          },
        ],
        solution: 'Egenaktivitet krever selvstendighet og indre motivasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvordan kan du bygge gode aktivitetsvaner?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg effektive strategier.',
            solution: 'Start smått, knytt til faste tidspunkter, ha en plan B',
            multipleChoiceOptions: [
              'Start smått, knytt til faste tidspunkter, ha en plan B',
              'Tren så mye som mulig med en gang',
              'Bare tren når du er motivert',
              'Kopier andres treningsprogram',
            ],
          },
        ],
        solution: 'Gode vaner bygges gradvis og krever konsistens over tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Reflekter over din egen bevegelsesglede. Hvilke aktiviteter gir deg mest glede, og hvorfor tror du det er slik?',
        solution: 'Svar vil variere. Bør inkludere konkrete aktiviteter, hva som gjør dem meningsfulle, og hvordan dette kan brukes for å opprettholde aktivitet i fremtiden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2: Helsefremmende livsstil - fysisk og psykisk helse
// ============================================================================

export const CHAPTER_KROPPSOVING_VG3_2: TextbookChapter = {
  id: 'kroppsoving-vg3-2',
  courseId: 'kroppsoving-vg3',
  chapterNumber: '2',
  title: 'Helsefremmende livsstil - fysisk og psykisk helse',
  description: 'Forstå sammenhengen mellom livsstil, fysisk aktivitet og helhetlig helse.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå sammenhenger mellom fysisk aktivitet og psykisk helse',
    'ta bevisste valg for en helsefremmende livsstil',
  ],
  content: [
    {
      id: 'kroppsoving-vg3-2-intro',
      type: 'text',
      content: `Helse er mer enn fravær av sykdom - det er en tilstand av fullstendig fysisk, mental og sosial velvære. Som voksen tar du ansvar for egne helsevalg, og kunnskapen du bygger nå blir grunnlaget for resten av livet.`,
    },
    {
      id: 'kroppsoving-vg3-2-def-1',
      type: 'definition',
      title: 'Helsefremmende livsstil',
      content: `En helsefremmende livsstil er et mønster av helsebevisste valg som fremmer fysisk, psykisk og sosial helse. Det inkluderer regelmessig aktivitet, balansert kosthold, god søvn, stressmestring og sosiale relasjoner.`,
    },
    {
      id: 'kroppsoving-vg3-2-text-1',
      type: 'text',
      content: `**Fysisk aktivitet og psykisk helse**

**Umiddelbare effekter**:
- Frigjøring av endorfiner
- Redusert stressnivå
- Bedre humør
- Økt energi

**Langsiktige effekter**:
- Redusert risiko for depresjon
- Bedre håndtering av angst
- Økt selvtillit
- Bedre søvnkvalitet

**Mekanismer**:
- Nevrotransmittere (serotonin, dopamin)
- Redusert kortisol
- Bedre hjernefunksjon
- Sosial tilhørighet

**Anbefalinger**:
- 150-300 min moderat aktivitet/uke
- Styrketrening 2+ ganger/uke
- Redusere stillesitting
- Velg aktiviteter du liker`,
    },
    {
      id: 'kroppsoving-vg3-2-text-2',
      type: 'text',
      content: `**Livsstilsfaktorer for helhetlig helse**

**Søvn**:
- 7-9 timer for voksne
- Fast legge- og våknetid
- Unngå skjermer før sengetid
- Viktig for restitusjon og læring

**Kosthold**:
- Variert og balansert
- Nok frukt, grønnsaker, fiber
- Begrense prosessert mat
- Tilstrekkelig væske

**Stressmestring**:
- Kjenn dine stressutløsere
- Bruk aktivitet som ventil
- Praktiser avspenning
- Søk sosial støtte

**Sosiale relasjoner**:
- Ensomhet skader helsen
- Aktivitet som sosial arena
- Støttende nettverk
- Gi og motta omsorg`,
    },
    {
      id: 'kroppsoving-vg3-2-def-2',
      type: 'definition',
      title: 'Salutogenese',
      content: `Salutogenese er fokus på hva som skaper og opprettholder helse, i motsetning til patogenese som fokuserer på sykdom. Sentralt står opplevelse av sammenheng (OAS) - at livet er begripelig, håndterbart og meningsfullt.`,
    },
    {
      id: 'kroppsoving-vg3-2-text-3',
      type: 'text',
      content: `**Forebygging av livsstilssykdommer**

**Hjerte- og karsykdommer**:
- Regelmessig kondisjonstrening
- Sunn vekt
- Ikke røyking
- Moderat alkoholforbruk

**Type 2-diabetes**:
- Fysisk aktivitet bedrer insulinfølsomhet
- Unngå overvekt
- Balansert kosthold
- Tidlig intervensjon

**Muskel- og skjelettplager**:
- Styrketrening forebygger
- Variert belastning
- God arbeidsstilling
- Unngå for mye stillesitting

**Mental helse**:
- Aktivitet som medisin
- Sosial deltakelse
- Meningsfull hverdag
- Profesjonell hjelp ved behov`,
    },
    {
      id: 'kroppsoving-vg3-2-tip-1',
      type: 'tip',
      title: 'Helhetlig tilnærming',
      content: `Helse handler om balanse mellom mange faktorer. Å trene mye hjelper lite hvis du sover for lite, spiser dårlig eller er kronisk stresset. Se på helheten i livsstilen din.`,
    },
    {
      id: 'kroppsoving-vg3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er en helsefremmende livsstil?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Et mønster av helsebevisste valg som fremmer fysisk, psykisk og sosial helse',
            multipleChoiceOptions: [
              'Et mønster av helsebevisste valg som fremmer fysisk, psykisk og sosial helse',
              'Å trene så mye som mulig',
              'Å aldri bli syk',
              'Å følge strenge dietter',
            ],
          },
        ],
        solution: 'Helsefremmende livsstil inkluderer aktivitet, kosthold, søvn, stressmestring og sosiale relasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvordan påvirker fysisk aktivitet psykisk helse?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg positive effekter.',
            solution: 'Frigjør endorfiner, reduserer stress, bedrer humør og søvn',
            multipleChoiceOptions: [
              'Frigjør endorfiner, reduserer stress, bedrer humør og søvn',
              'Ingen påvirkning',
              'Bare fysiske effekter',
              'Øker stressnivået',
            ],
          },
        ],
        solution: 'Fysisk aktivitet har dokumentert positiv effekt på mental helse gjennom flere mekanismer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er salutogenese?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv salutogenese.',
            solution: 'Fokus på hva som skaper og opprettholder helse',
            multipleChoiceOptions: [
              'Fokus på hva som skaper og opprettholder helse',
              'Studiet av sykdommer',
              'En type trening',
              'Et kosthold',
            ],
          },
        ],
        solution: 'Salutogenese ser på helsefremmende faktorer fremfor sykdomsårsaker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvor mye fysisk aktivitet anbefales per uke?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig anbefaling.',
            solution: '150-300 minutter moderat aktivitet + styrketrening 2+ ganger',
            multipleChoiceOptions: [
              '150-300 minutter moderat aktivitet + styrketrening 2+ ganger',
              '30 minutter totalt',
              'Så mye som mulig',
              'Bare i helgene',
            ],
          },
        ],
        solution: 'Helsemyndighetene anbefaler regelmessig aktivitet fordelt utover uken.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvordan kan fysisk aktivitet forebygge livsstilssykdommer?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg forebyggende effekter.',
            solution: 'Bedrer hjertehelse, insulinfølsomhet, styrker muskulatur og mental helse',
            multipleChoiceOptions: [
              'Bedrer hjertehelse, insulinfølsomhet, styrker muskulatur og mental helse',
              'Ingen forebyggende effekt',
              'Bare mot forkjølelse',
              'Øker sykdomsrisiko',
            ],
          },
        ],
        solution: 'Regelmessig aktivitet er en av de mest effektive forebyggende tiltakene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Vurder din egen livsstil. Identifiser områder som er bra og områder med forbedringspotensial.',
        solution: 'Svar vil variere. Bør inkludere vurdering av aktivitetsnivå, søvn, kosthold, stressmestring og sosiale relasjoner, samt konkrete forbedringstiltak.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3: Treningsplanlegging - langsiktig og selvstendig
// ============================================================================

export const CHAPTER_KROPPSOVING_VG3_3: TextbookChapter = {
  id: 'kroppsoving-vg3-3',
  courseId: 'kroppsoving-vg3',
  chapterNumber: '3',
  title: 'Treningsplanlegging - langsiktig og selvstendig',
  description: 'Utvikle kompetanse til å planlegge og gjennomføre egen trening over tid.',
  estimatedMinutes: 60,
  competenceGoals: [
    'planlegge trening basert på egne mål og forutsetninger',
    'anvende treningsprinsipper i praksis',
  ],
  content: [
    {
      id: 'kroppsoving-vg3-3-intro',
      type: 'text',
      content: `Selvstendig treningsplanlegging er en viktig ferdighet for livet etter skolen. Du skal kunne sette deg mål, velge metoder, gjennomføre trening og evaluere resultatene - uten at noen forteller deg hva du skal gjøre.`,
    },
    {
      id: 'kroppsoving-vg3-3-def-1',
      type: 'definition',
      title: 'Treningsplanlegging',
      content: `Treningsplanlegging er systematisk organisering av trening over tid for å oppnå spesifikke mål. Det innebærer å velge aktiviteter, bestemme belastning og progresjon, og tilpasse planen til livssituasjon.`,
    },
    {
      id: 'kroppsoving-vg3-3-text-1',
      type: 'text',
      content: `**Målsetting med SMART-prinsippet**

**Spesifikke mål**:
- Hva vil du oppnå?
- Hvilken aktivitet?
- Konkret og tydelig

**Målbare mål**:
- Hvordan måler du fremgang?
- Tall, tid, distanse
- Objektive kriterier

**Attraktive mål**:
- Hvorfor er dette viktig?
- Personlig motiverende
- Meningsfullt for deg

**Realistiske mål**:
- Er det oppnåelig?
- Passer det livssituasjonen?
- Utfordrende men mulig

**Tidsbegrensede mål**:
- Når skal du nå målet?
- Milepæler underveis
- Deadlines motiverer`,
    },
    {
      id: 'kroppsoving-vg3-3-text-2',
      type: 'text',
      content: `**Grunnleggende treningsprinsipper**

**Belastning og tilpasning**:
- Kroppen tilpasser seg belastning
- For lite = ingen effekt
- For mye = overtrenning/skade
- Finn riktig dose

**Progresjon**:
- Gradvis økning over tid
- Øk volum eller intensitet
- Ikke begge samtidig
- 5-10% økning per uke

**Spesifisitet**:
- Trening må ligne målet
- Vil du løpe - løp
- Overføringsverdi varierer

**Variasjon**:
- Unngå ensidighet
- Bytt øvelser jevnlig
- Forebygger skader og kjedsomhet

**Restitusjon**:
- Fremgang skjer i hvilen
- Nok søvn og næring
- Lytt til kroppen`,
    },
    {
      id: 'kroppsoving-vg3-3-def-2',
      type: 'definition',
      title: 'Periodisering',
      content: `Periodisering er systematisk variasjon av treningsvariabler over tid. Ved å endre volum, intensitet og type trening i ulike perioder, optimaliseres fremgang og reduseres risiko for overtrenning.`,
    },
    {
      id: 'kroppsoving-vg3-3-text-3',
      type: 'text',
      content: `**Praktisk treningsplanlegging**

**Kartlegg utgangspunktet**:
- Nåværende form og kapasitet
- Tilgjengelig tid og utstyr
- Tidligere erfaring
- Eventuelle begrensninger

**Lag en ukeplan**:
- Faste treningstidspunkter
- Balanse mellom aktiviteter
- Tid til restitusjon
- Fleksibilitet for uforutsette hendelser

**Eksempel på ukestruktur**:
- Mandag: Styrke overkropp
- Tirsdag: Kondisjon/intervall
- Onsdag: Hvile eller lett aktivitet
- Torsdag: Styrke underkropp
- Fredag: Hvile
- Lørdag: Langtur/utholdenhet
- Søndag: Aktiv restitusjon

**Juster underveis**:
- Evaluer jevnlig
- Tilpass etter respons
- Vær fleksibel
- Lær av erfaring`,
    },
    {
      id: 'kroppsoving-vg3-3-tip-1',
      type: 'tip',
      title: 'Start enkelt',
      content: `En enkel plan du faktisk følger er bedre enn en perfekt plan du ikke klarer å gjennomføre. Start med det viktigste og bygg videre derfra.`,
    },
    {
      id: 'kroppsoving-vg3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva står SMART for i målsetting?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring.',
            solution: 'Spesifikke, Målbare, Attraktive, Realistiske, Tidsbegrensede',
            multipleChoiceOptions: [
              'Spesifikke, Målbare, Attraktive, Realistiske, Tidsbegrensede',
              'Styrke, Mobilitet, Aerob, Rask, Teknikk',
              'Seriøse, Moderne, Aktive, Rettferdige, Trygge',
              'Små, Mellomstore, Ambisiøse, Rolige, Tunge',
            ],
          },
        ],
        solution: 'SMART-mål hjelper deg å sette konkrete og oppnåelige mål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er progresjonsprinsippet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Gradvis økning av belastning over tid for å oppnå fremgang',
            multipleChoiceOptions: [
              'Gradvis økning av belastning over tid for å oppnå fremgang',
              'Å trene samme øvelse hver dag',
              'Å starte med maksimal belastning',
              'Å redusere treningen over tid',
            ],
          },
        ],
        solution: 'Progresjon sikrer at kroppen kontinuerlig får nye stimuli å tilpasse seg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er periodisering?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv periodisering.',
            solution: 'Systematisk variasjon av treningsvariabler over tid',
            multipleChoiceOptions: [
              'Systematisk variasjon av treningsvariabler over tid',
              'Å trene i perioder og pause i perioder',
              'En type styrketrening',
              'Hvile mellom sett',
            ],
          },
        ],
        solution: 'Periodisering optimaliserer fremgang og reduserer risiko for overtrenning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva betyr spesifisitetsprinsippet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring.',
            solution: 'Treningen må ligne aktiviteten du vil bli bedre i',
            multipleChoiceOptions: [
              'Treningen må ligne aktiviteten du vil bli bedre i',
              'Alle må trene likt',
              'Du trenger spesielt utstyr',
              'Bare spesialister kan trene',
            ],
          },
        ],
        solution: 'Vil du bli bedre i en aktivitet, må du trene den aktiviteten eller lignende bevegelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor er restitusjon viktig?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig begrunnelse.',
            solution: 'Fremgang skjer i hvilen når kroppen tilpasser seg belastningen',
            multipleChoiceOptions: [
              'Fremgang skjer i hvilen når kroppen tilpasser seg belastningen',
              'Det er ikke viktig',
              'Bare for profesjonelle utøvere',
              'For å unngå svetting',
            ],
          },
        ],
        solution: 'Uten tilstrekkelig restitusjon blir det ingen positiv tilpasning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en 4-ukers treningsplan for deg selv med et konkret SMART-mål.',
        solution: 'Svar vil variere. Bør inkludere: SMART-mål, ukentlig treningsstruktur, progresjon over ukene, og plan for evaluering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4: Prestasjon og mestring - individuelle mål
// ============================================================================

export const CHAPTER_KROPPSOVING_VG3_4: TextbookChapter = {
  id: 'kroppsoving-vg3-4',
  courseId: 'kroppsoving-vg3',
  chapterNumber: '4',
  title: 'Prestasjon og mestring - individuelle mål',
  description: 'Forstå sammenhengen mellom innsats, mestring og personlig utvikling.',
  estimatedMinutes: 50,
  competenceGoals: [
    'sette og arbeide mot individuelle mål',
    'forstå sammenhengen mellom innsats og mestring',
  ],
  content: [
    {
      id: 'kroppsoving-vg3-4-intro',
      type: 'text',
      content: `Prestasjon handler ikke bare om å sammenligne seg med andre - det handler om å utvikle seg i forhold til egne forutsetninger. I dette kapittelet utforsker vi hvordan du kan sette meningsfulle mål og oppleve ekte mestring.`,
    },
    {
      id: 'kroppsoving-vg3-4-def-1',
      type: 'definition',
      title: 'Mestring',
      content: `Mestring er opplevelsen av å beherske en utfordring gjennom egen innsats. Det innebærer å møte krav som utfordrer, men ikke overvelder, og å oppleve fremgang som resultat av eget arbeid.`,
    },
    {
      id: 'kroppsoving-vg3-4-text-1',
      type: 'text',
      content: `**Mestringsorientering vs. prestasjonsorientering**

**Mestringsorientering (oppgavefokus)**:
- Fokus på egen utvikling
- Sammenligner seg med seg selv
- Ser innsats som vei til suksess
- Feil er læringsmuligheter
- Indre motivasjon

**Prestasjonsorientering (egofokus)**:
- Fokus på å være bedre enn andre
- Sammenligner seg med andre
- Tror evner er faste
- Unngår utfordringer der man kan feile
- Ytre motivasjon

**Optimal tilnærming**:
- Primært mestringsorientert
- Bruk konkurranse som motivasjon, ikke hovedfokus
- Lær av andre uten å la det definere din verdi`,
    },
    {
      id: 'kroppsoving-vg3-4-text-2',
      type: 'text',
      content: `**Flow - den optimale opplevelsen**

**Hva er flow?**:
- Total oppslukelse i aktiviteten
- Tid "forsvinner"
- Handlinger flyter naturlig
- Dyp tilfredsstillelse

**Betingelser for flow**:
- Klare mål
- Umiddelbar tilbakemelding
- Balanse mellom utfordring og ferdighet

**Utfordring-ferdighet-balansen**:
- For lett = kjedsomhet
- For vanskelig = angst
- Riktig nivå = flow

**Praktiske tips**:
- Sett deg i situasjoner med passende utfordring
- Søk aktiviteter du mestrer, men som utfordrer
- Juster vanskelighetsgrad underveis`,
    },
    {
      id: 'kroppsoving-vg3-4-def-2',
      type: 'definition',
      title: 'Mestringsforventning (self-efficacy)',
      content: `Mestringsforventning er troen på egen evne til å gjennomføre en oppgave. Høy mestringsforventning øker innsats, utholdenhet og prestasjon.`,
    },
    {
      id: 'kroppsoving-vg3-4-text-3',
      type: 'text',
      content: `**Bygge mestringsforventning**

**Mestringsopplevelser**:
- Den viktigste kilden
- Opplev suksess gjennom innsats
- Start med overkommelige utfordringer
- Bygg gradvis

**Vikarierende læring**:
- Se andre lignende deg lykkes
- Forbilder og rollemodeller
- "Hvis de kan, kan jeg"

**Verbal overbevisning**:
- Positiv tilbakemelding fra andre
- Oppmuntring og støtte
- Konstruktiv veiledning

**Fysisk og emosjonell tilstand**:
- Tolkning av kroppssignaler
- Spenning kan være positiv
- Mental forberedelse

**Praktiske tiltak**:
- Del store mål i mindre steg
- Fokuser på det du kan kontrollere
- Bruk positive selvsnakk
- Visualiser suksess`,
    },
    {
      id: 'kroppsoving-vg3-4-tip-1',
      type: 'tip',
      title: 'Sammenlign med gårsdagens deg',
      content: `Den mest meningsfulle sammenligningen er med deg selv over tid. Har du utviklet deg? Har du lært noe? Har du gitt god innsats? Det er det som teller.`,
    },
    {
      id: 'kroppsoving-vg3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er mestring?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon.',
            solution: 'Opplevelsen av å beherske en utfordring gjennom egen innsats',
            multipleChoiceOptions: [
              'Opplevelsen av å beherske en utfordring gjennom innsats',
              'Å være best i klassen',
              'Å vinne konkurranser',
              'Å aldri møte motstand',
            ],
          },
        ],
        solution: 'Mestring handler om personlig utvikling og opplevelse av fremgang.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva kjennetegner mestringsorientering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktige kjennetegn.',
            solution: 'Fokus på egen utvikling, ser innsats som vei til suksess',
            multipleChoiceOptions: [
              'Fokus på egen utvikling, ser innsats som vei til suksess',
              'Fokus på å slå andre',
              'Unngår utfordringer',
              'Sammenligner seg alltid med andre',
            ],
          },
        ],
        solution: 'Mestringsorienterte personer fokuserer på læring og utvikling fremfor sammenligning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er flow?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv flow-tilstanden.',
            solution: 'Total oppslukelse i aktiviteten med balanse mellom utfordring og ferdighet',
            multipleChoiceOptions: [
              'Total oppslukelse i aktiviteten med balanse mellom utfordring og ferdighet',
              'Å flyte i vannet',
              'En type yoga',
              'Å ta det med ro',
            ],
          },
        ],
        solution: 'Flow oppstår når utfordringen matcher ferdighetsnivået og gir dyp tilfredsstillelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er mestringsforventning (self-efficacy)?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring.',
            solution: 'Troen på egen evne til å gjennomføre en oppgave',
            multipleChoiceOptions: [
              'Troen på egen evne til å gjennomføre en oppgave',
              'Forventning om at andre skal hjelpe',
              'Å forvente å mislykkes',
              'Selvtillit generelt',
            ],
          },
        ],
        solution: 'Høy mestringsforventning øker innsats og sjansen for suksess.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvordan kan du bygge mestringsforventning?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg effektive strategier.',
            solution: 'Mestringsopplevelser, se andre lykkes, positiv tilbakemelding',
            multipleChoiceOptions: [
              'Mestringsopplevelser, se andre lykkes, positiv tilbakemelding',
              'Unngå utfordringer',
              'Sammenligne seg med de beste',
              'Aldri få tilbakemelding',
            ],
          },
        ],
        solution: 'Den viktigste kilden til mestringsforventning er egne mestringsopplevelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Beskriv en situasjon der du opplevde flow eller sterk mestring. Hva var det som gjorde at du opplevde det?',
        solution: 'Svar vil variere. Bør inkludere beskrivelse av situasjonen, balansen mellom utfordring og ferdighet, og følelsen av mestring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5: Idrett og samfunn - etikk, doping, kommersialisme
// ============================================================================

export const CHAPTER_KROPPSOVING_VG3_5: TextbookChapter = {
  id: 'kroppsoving-vg3-5',
  courseId: 'kroppsoving-vg3',
  chapterNumber: '5',
  title: 'Idrett og samfunn - etikk, doping, kommersialisme',
  description: 'Reflektere kritisk over idrettens rolle i samfunnet og etiske utfordringer.',
  estimatedMinutes: 55,
  competenceGoals: [
    'drøfte etiske problemstillinger i idrett',
    'reflektere over idrettens samfunnsmessige rolle',
  ],
  content: [
    {
      id: 'kroppsoving-vg3-5-intro',
      type: 'text',
      content: `Idrett eksisterer ikke i et vakuum - den påvirkes av og påvirker samfunnet. Som bevisste borgere må vi kunne reflektere kritisk over etiske dilemmaer, kommersielle krefter og sosiale utfordringer i idrettsverden.`,
    },
    {
      id: 'kroppsoving-vg3-5-def-1',
      type: 'definition',
      title: 'Idrettsetikk',
      content: `Idrettsetikk handler om moralske prinsipper og verdier som styrer atferd i idrettssammenheng. Det inkluderer fair play, respekt, ansvar og integritet.`,
    },
    {
      id: 'kroppsoving-vg3-5-text-1',
      type: 'text',
      content: `**Doping - det største etiske problemet**

**Hva er doping?**:
- Bruk av forbudte stoffer eller metoder
- Definert av WADA-listen
- Gjelder også tilrettelegging

**Hvorfor er doping galt?**:
- Bryter med fair play-prinsippet
- Setter utøveres helse i fare
- Undergraver idrettens integritet
- Bedrag mot publikum og sponsorer

**Konsekvenser av doping**:
- Utestengelse og tap av resultater
- Helseskader (kort- og langsiktige)
- Ødelagt rykte og karriere
- Skadet tillit til idretten

**Antidopingarbeid**:
- WADA og nasjonale organisasjoner
- Testing inn- og utenfor konkurranse
- Biologisk pass
- Forebyggende arbeid og holdninger`,
    },
    {
      id: 'kroppsoving-vg3-5-text-2',
      type: 'text',
      content: `**Kommersialisme i idretten**

**Positive sider**:
- Finansiering av idrett
- Profesjonalisering
- Bedre fasiliteter
- Økt synlighet og interesse

**Negative sider**:
- Pengene styrer utviklingen
- Ulikhet mellom idretter
- Press på utøvere
- Korrupsjon og manipulasjon

**Utfordringer**:
- Mediemakt og sendetider
- Sponsoravhengighet
- Overganger og lønninger
- Store arrangement og kostnader

**Balansen**:
- Bevare idrettens verdier
- Regulering og åpenhet
- Breddeidrett vs. toppidrett
- Hvem eier idretten?`,
    },
    {
      id: 'kroppsoving-vg3-5-def-2',
      type: 'definition',
      title: 'Fair play',
      content: `Fair play er respekt for regler, motstandere, dommere, publikum og seg selv. Det innebærer ærlig konkurranse, aksept av nederlag, og å vinne med verdighet.`,
    },
    {
      id: 'kroppsoving-vg3-5-text-3',
      type: 'text',
      content: `**Andre etiske utfordringer**

**Trakassering og overgrep**:
- Maktforhold i idrett
- Sårbare utøvere
- Varsling og oppfølging
- Forebygging og trygge miljøer

**Inkludering og diskriminering**:
- Kjønnslikestilling
- LHBT+ i idrett
- Funksjonsnedsettelser
- Sosioøkonomiske barrierer

**Barne- og ungdomsidrett**:
- Tidlig spesialisering
- Press og forventninger
- Frafallsproblematikk
- Barnets beste

**Miljø og bærekraft**:
- Store arrangement og klimaavtrykk
- Reising og transport
- Anleggsbygging
- Grønn idrett`,
    },
    {
      id: 'kroppsoving-vg3-5-tip-1',
      type: 'tip',
      title: 'Kritisk tenkning',
      content: `Vær kritisk til hvordan idrett fremstilles. Hvem forteller historien? Hvilke interesser ligger bak? Hvem vinner og hvem taper på ulike løsninger?`,
    },
    {
      id: 'kroppsoving-vg3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er doping?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon.',
            solution: 'Bruk av forbudte stoffer eller metoder for å forbedre prestasjon',
            multipleChoiceOptions: [
              'Bruk av forbudte stoffer eller metoder for å forbedre prestasjon',
              'All bruk av medisiner',
              'Å trene for mye',
              'Å spise kosttilskudd',
            ],
          },
        ],
        solution: 'Doping defineres av WADA-listen og inkluderer stoffer, metoder og tilrettelegging.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor er doping et etisk problem?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hovedgrunner.',
            solution: 'Bryter med fair play, helseskadelig, undergraver idrettens integritet',
            multipleChoiceOptions: [
              'Bryter med fair play, helseskadelig, undergraver idrettens integritet',
              'Det er bare ulovlig',
              'Alle gjør det uansett',
              'Det har ingen konsekvenser',
            ],
          },
        ],
        solution: 'Doping undergraver grunnleggende verdier som ærlighet, rettferdighet og helse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er fair play?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv fair play.',
            solution: 'Respekt for regler, motstandere og ærlig konkurranse',
            multipleChoiceOptions: [
              'Respekt for regler, motstandere og ærlig konkurranse',
              'Å alltid vinne',
              'Å ikke protestere',
              'Å unngå fysisk kontakt',
            ],
          },
        ],
        solution: 'Fair play er grunnleggende for idrettens verdi og mening.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er positive og negative sider ved kommersialisme i idrett?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktige svar.',
            solution: 'Positivt: finansiering. Negativt: pengene kan styre utviklingen',
            multipleChoiceOptions: [
              'Positivt: finansiering. Negativt: pengene kan styre utviklingen',
              'Bare positivt',
              'Bare negativt',
              'Ingen påvirkning',
            ],
          },
        ],
        solution: 'Kommersialisme har både fordeler og ulemper for idretten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvilke andre etiske utfordringer finnes i idretten?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg relevante utfordringer.',
            solution: 'Trakassering, diskriminering, press i barne- og ungdomsidrett, miljø',
            multipleChoiceOptions: [
              'Trakassering, diskriminering, press i barne- og ungdomsidrett, miljø',
              'Ingen utfordringer',
              'Bare doping',
              'Bare penger',
            ],
          },
        ],
        solution: 'Idretten står overfor mange etiske utfordringer som krever bevissthet og handling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft: Bør store idrettsarrangementer som OL og VM tildeles land med problematiske menneskerettighetsforhold?',
        solution: 'Svar vil variere. Bør inkludere argumenter fra begge sider: idrett som brobygger vs. legitimering av regimer, samt egen konklusjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6: Friluftsliv og naturopplevelser - bærekraft
// ============================================================================

export const CHAPTER_KROPPSOVING_VG3_6: TextbookChapter = {
  id: 'kroppsoving-vg3-6',
  courseId: 'kroppsoving-vg3',
  chapterNumber: '6',
  title: 'Friluftsliv og naturopplevelser - bærekraft',
  description: 'Oppleve friluftsliv og reflektere over bærekraftig bruk av naturen.',
  estimatedMinutes: 55,
  competenceGoals: [
    'planlegge og gjennomføre friluftslivsaktiviteter',
    'reflektere over bærekraftig friluftsliv',
  ],
  content: [
    {
      id: 'kroppsoving-vg3-6-intro',
      type: 'text',
      content: `Friluftsliv gir unike muligheter for fysisk aktivitet, naturopplevelser og mental helse. Som voksne har vi ansvar for å bruke naturen på en bærekraftig måte og ta vare på den for kommende generasjoner.`,
    },
    {
      id: 'kroppsoving-vg3-6-def-1',
      type: 'definition',
      title: 'Bærekraftig friluftsliv',
      content: `Bærekraftig friluftsliv innebærer å utøve aktiviteter i naturen på en måte som ikke skader miljøet, og som sikrer at fremtidige generasjoner kan ha samme muligheter til naturopplevelser.`,
    },
    {
      id: 'kroppsoving-vg3-6-text-1',
      type: 'text',
      content: `**Friluftsliv for livslang helse**

**Fysiske gevinster**:
- Variert bevegelse i terreng
- Kondisjon og styrke
- Balanse og koordinasjon
- Frisk luft og sollys

**Psykiske gevinster**:
- Stressreduksjon
- Bedre søvn
- Økt velvære
- Mental restitusjon

**Sosiale gevinster**:
- Fellesskap på tur
- Felles opplevelser
- Samarbeid og kommunikasjon
- Tradisjon og kultur

**Livslang aktivitet**:
- Kan tilpasses alle aldre
- Krever lite utstyr (enkelt friluftsliv)
- Tilgjengelig overalt
- Variasjon gjennom sesongene`,
    },
    {
      id: 'kroppsoving-vg3-6-text-2',
      type: 'text',
      content: `**Leave No Trace - de 7 prinsippene**

**1. Planlegg og forbered**:
- Kjenn området og regelverket
- Forbered på vær og utfordringer
- Minimer avfall ved å pakke smart

**2. Bruk slitesterke underlag**:
- Hold deg til stier
- Camp på etablerte plasser
- Unngå sårbar vegetasjon

**3. Håndter avfall riktig**:
- Bær ut alt du bærer inn
- Deponér menneskelig avfall riktig
- Ikke etterlat spor

**4. La det du finner være**:
- Ikke plukk blomster eller fjern stein
- La kulturminner være i fred
- Ta bilder, ikke souvenirer

**5. Minimer bruk av bål**:
- Bruk primus fremfor bål
- Bruk etablerte bålplasser
- Bålforbudsregler

**6. Respekter dyrelivet**:
- Observer på avstand
- Ikke mat ville dyr
- Sikre matlagring

**7. Vis hensyn til andre**:
- Del stiene vennlig
- Hold støynivå nede
- Respekter andres opplevelse`,
    },
    {
      id: 'kroppsoving-vg3-6-def-2',
      type: 'definition',
      title: 'Allemannsretten',
      content: `Allemannsretten er en norsk tradisjon og lovfestet rett til å ferdes og oppholde seg i utmark. Med retten følger ansvar for å opptre hensynsfullt overfor naturen, grunneiere og andre brukere.`,
    },
    {
      id: 'kroppsoving-vg3-6-text-3',
      type: 'text',
      content: `**Planlegge og gjennomføre tur**

**Turplanlegging**:
- Kartlesing og rutvalg
- Vurdering av vær og føre
- Tidsberegning (Naismiths regel)
- Sikkerhetsvurdering

**Utstyr og pakking**:
- De 10 essensielle
- Kles deg etter forholdene
- Vektfordeling i sekk
- Vanntett pakking

**Orientering**:
- Kart og kompass
- GPS som supplement
- Kjente punkter og landemerker
- Plan B ved dårlig sikt

**Sikkerhet**:
- Informer andre om turen
- Ha nødproviant
- Vit når du skal snu
- Førstehjelpskunnskaper`,
    },
    {
      id: 'kroppsoving-vg3-6-tip-1',
      type: 'tip',
      title: 'Nærmiljøfriluftsliv',
      content: `Du trenger ikke dra langt for gode naturopplevelser. Utforsk nærmiljøet ditt - parker, skogsområder, strender. Korte, hyppige turer i nærnaturen er bærekraftig og lett å opprettholde.`,
    },
    {
      id: 'kroppsoving-vg3-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er bærekraftig friluftsliv?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Å bruke naturen uten å skade den for fremtidige generasjoner',
            multipleChoiceOptions: [
              'Å bruke naturen uten å skade den for fremtidige generasjoner',
              'Å ikke gå på tur i det hele tatt',
              'Å bygge hytter overalt',
              'Å kjøre bil til alle turmål',
            ],
          },
        ],
        solution: 'Bærekraftig friluftsliv balanserer bruk og vern av naturen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er de 7 prinsippene i Leave No Trace?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig oppsummering.',
            solution: 'Planlegg, bruk slitesterke underlag, håndter avfall, la være, minimer bål, respekter dyr, vis hensyn',
            multipleChoiceOptions: [
              'Planlegg, bruk slitesterke underlag, håndter avfall, la være, minimer bål, respekter dyr, vis hensyn',
              'Bare å ikke legge igjen søppel',
              'Å ikke gå i naturen',
              'Å alltid tenne bål',
            ],
          },
        ],
        solution: 'Leave No Trace gir veiledning for minimal påvirkning på naturen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er allemannsretten?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv allemannsretten.',
            solution: 'Retten til å ferdes og oppholde seg i utmark med ansvar',
            multipleChoiceOptions: [
              'Retten til å ferdes og oppholde seg i utmark med ansvar',
              'Rett til å gjøre hva som helst i naturen',
              'Bare for nordmenn',
              'Gjelder bare på sommeren',
            ],
          },
        ],
        solution: 'Allemannsretten er en unik norsk tradisjon som kombinerer rettigheter med ansvar.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilke helsegevinster gir friluftsliv?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg helsegevinster.',
            solution: 'Fysisk aktivitet, stressreduksjon, bedre søvn, sosial tilhørighet',
            multipleChoiceOptions: [
              'Fysisk aktivitet, stressreduksjon, bedre søvn, sosial tilhørighet',
              'Ingen helsegevinster',
              'Bare fysisk trening',
              'Bare mental helse',
            ],
          },
        ],
        solution: 'Friluftsliv gir helhetlige helsegevinster - fysisk, psykisk og sosialt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva bør du tenke på ved turplanlegging?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg viktige elementer.',
            solution: 'Kart og rute, vær, tidsberegning, utstyr og sikkerhet',
            multipleChoiceOptions: [
              'Kart og rute, vær, tidsberegning, utstyr og sikkerhet',
              'Bare hvor du skal',
              'Ingenting spesielt',
              'Bare været',
            ],
          },
        ],
        solution: 'God planlegging er nøkkelen til trygge og gode turopplevelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-6-ex-6',
        number: '6',
        type: 'classic',
        task: 'Planlegg en bærekraftig dagstur i ditt nærmiljø. Inkluder transport, rute, utstyr og Leave No Trace-tiltak.',
        solution: 'Svar vil variere. Bør inkludere miljøvennlig transport, detaljert rute, utstyrsliste, tidsberegning og konkrete LNT-tiltak.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7: Dans og estetisk bevegelse - uttrykk og kreativitet
// ============================================================================

export const CHAPTER_KROPPSOVING_VG3_7: TextbookChapter = {
  id: 'kroppsoving-vg3-7',
  courseId: 'kroppsoving-vg3',
  chapterNumber: '7',
  title: 'Dans og estetisk bevegelse - uttrykk og kreativitet',
  description: 'Utforske dans som uttrykksform og utvikle kreativitet gjennom bevegelse.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske dans og estetisk bevegelse',
    'uttrykke seg kreativt gjennom bevegelse',
  ],
  content: [
    {
      id: 'kroppsoving-vg3-7-intro',
      type: 'text',
      content: `Dans er en universell uttrykksform som kombinerer fysisk aktivitet med kreativitet og følelser. Gjennom dans kan vi uttrykke oss, oppleve glede, og koble kropp og sinn på en unik måte.`,
    },
    {
      id: 'kroppsoving-vg3-7-def-1',
      type: 'definition',
      title: 'Estetisk bevegelse',
      content: `Estetisk bevegelse er bevegelse som fokuserer på uttrykk, skjønnhet og kunstnerisk kvalitet fremfor prestasjon. Det handler om hvordan bevegelsen ser ut og føles, ikke bare hva den oppnår.`,
    },
    {
      id: 'kroppsoving-vg3-7-text-1',
      type: 'text',
      content: `**Dans som treningsform**

**Fysiske gevinster**:
- Kondisjon og utholdenhet
- Styrke og spenst
- Bevegelighet og fleksibilitet
- Koordinasjon og balanse

**Psykiske gevinster**:
- Uttrykk for følelser
- Økt kroppbevissthet
- Selvtillit og mestringsfølelse
- Stressreduksjon og glede

**Sosiale gevinster**:
- Samarbeid i gruppedans
- Kommunikasjon uten ord
- Fellesskap og tilhørighet
- Kulturell forståelse

**Kognitive gevinster**:
- Hukommelse (koreografi)
- Rytmeforståelse
- Kreativ problemløsning
- Musikalitet`,
    },
    {
      id: 'kroppsoving-vg3-7-text-2',
      type: 'text',
      content: `**Ulike dansestiler**

**Tradisjonell folkedans**:
- Norske folkedanser
- Kulturarv og tradisjon
- Sosial dans i grupper
- Faste mønstre og figurer

**Moderne pardans**:
- Salsa, tango, swing
- Kommunikasjon mellom partnere
- Improvisasjon innenfor rammer
- Sosiale arenaer

**Street dance**:
- Hip-hop, breaking, locking
- Individuelt uttrykk
- Urban kultur
- Improvisasjon og battles

**Moderne og samtidsdans**:
- Kunstnerisk uttrykk
- Frihet i bevegelse
- Følelsesformidling
- Koreografi og improvisasjon

**Treningsorientert dans**:
- Zumba, aerobics, HIIT dance
- Fysisk trening som hovedmål
- Ofte til musikk
- Lett å følge`,
    },
    {
      id: 'kroppsoving-vg3-7-def-2',
      type: 'definition',
      title: 'Koreografi',
      content: `Koreografi er kunsten å designe og arrangere bevegelser til dans. Det inkluderer valg av bevegelser, romlig plassering, timing, dynamikk og samspill mellom dansere.`,
    },
    {
      id: 'kroppsoving-vg3-7-text-3',
      type: 'text',
      content: `**Å skape egen dans**

**Grunnleggende elementer**:
- Rom: Hvor i rommet? Nivåer?
- Tid: Tempo, rytme, pauser
- Kraft: Lett, tungt, flytende, skarp
- Kropp: Hvilke kroppsdeler?

**Kreativ prosess**:
1. Utforsk bevegelser fritt
2. Velg ut interessante elementer
3. Sett sammen til sekvenser
4. Prøv ut og juster
5. Øv og forfin

**Tips for å komme i gang**:
- Start med musikk du liker
- Følg impulser i kroppen
- Det finnes ingen feil
- Kopier og tilpass
- Våg å eksperimentere

**Fremføring**:
- Vær til stede i øyeblikket
- Fokuser på uttrykk, ikke perfeksjon
- Bruk blikk og pust
- Kjenn musikken`,
    },
    {
      id: 'kroppsoving-vg3-7-tip-1',
      type: 'tip',
      title: 'Dans hjemme',
      content: `Du trenger ikke kurs for å danse. Sett på musikk du liker og la kroppen bevege seg fritt. Dans alene kan være like verdifullt som organisert dans - det handler om gleden og uttrykket.`,
    },
    {
      id: 'kroppsoving-vg3-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er estetisk bevegelse?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Bevegelse som fokuserer på uttrykk og skjønnhet fremfor prestasjon',
            multipleChoiceOptions: [
              'Bevegelse som fokuserer på uttrykk og skjønnhet fremfor prestasjon',
              'Bare profesjonell ballett',
              'Trening for å bli sterk',
              'Konkurranseidrett',
            ],
          },
        ],
        solution: 'Estetisk bevegelse handler om hvordan bevegelsen ser ut og føles.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilke gevinster kan dans gi?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg helhetlige gevinster.',
            solution: 'Fysisk trening, følelsesuttrykk, sosial tilhørighet og kreativitet',
            multipleChoiceOptions: [
              'Fysisk trening, følelsesuttrykk, sosial tilhørighet og kreativitet',
              'Bare kondisjon',
              'Bare for profesjonelle',
              'Ingen gevinster',
            ],
          },
        ],
        solution: 'Dans gir helhetlige gevinster - fysisk, psykisk, sosialt og kognitivt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er koreografi?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv koreografi.',
            solution: 'Kunsten å designe og arrangere bevegelser til dans',
            multipleChoiceOptions: [
              'Kunsten å designe og arrangere bevegelser til dans',
              'Å øve på samme bevegelse',
              'Å kopiere andre',
              'Bare for ballett',
            ],
          },
        ],
        solution: 'Koreografi inkluderer valg av bevegelser, rom, tid og dynamikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn tre ulike dansestiler og deres kjennetegn.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Folkedans (tradisjon), street dance (urban/individuell), moderne dans (kunstnerisk)',
            multipleChoiceOptions: [
              'Folkedans (tradisjon), street dance (urban/individuell), moderne dans (kunstnerisk)',
              'Alle danser er like',
              'Bare ballett finnes',
              'Dans har ingen stiler',
            ],
          },
        ],
        solution: 'Ulike dansestiler har ulik historie, uttrykk og funksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er de fire grunnleggende elementene i dans?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktige elementer.',
            solution: 'Rom, tid, kraft og kropp',
            multipleChoiceOptions: [
              'Rom, tid, kraft og kropp',
              'Musikk og kostyme',
              'Teknikk og styrke',
              'Trening og konkurranse',
            ],
          },
        ],
        solution: 'Ved å variere disse elementene skaper man ulike uttrykk i dans.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-7-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en kort koreografi (30-60 sekunder) til en sang du liker. Beskriv bevegelsene og tenk på rom, tid, kraft og kropp.',
        solution: 'Svar vil variere. Bør inkludere sangvalg, beskrivelse av bevegelser, og hvordan de fire elementene brukes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8: Fair play og samarbeid - sosial kompetanse
// ============================================================================

export const CHAPTER_KROPPSOVING_VG3_8: TextbookChapter = {
  id: 'kroppsoving-vg3-8',
  courseId: 'kroppsoving-vg3',
  chapterNumber: '8',
  title: 'Fair play og samarbeid - sosial kompetanse',
  description: 'Utvikle sosial kompetanse gjennom samarbeid, kommunikasjon og respekt.',
  estimatedMinutes: 50,
  competenceGoals: [
    'praktisere fair play i ulike aktiviteter',
    'samarbeide og kommunisere effektivt med andre',
  ],
  content: [
    {
      id: 'kroppsoving-vg3-8-intro',
      type: 'text',
      content: `Fysisk aktivitet er en arena for å utvikle sosial kompetanse. Gjennom samarbeid, konkurranse og felles opplevelser lærer vi å kommunisere, respektere andre og bidra til et godt miljø.`,
    },
    {
      id: 'kroppsoving-vg3-8-def-1',
      type: 'definition',
      title: 'Sosial kompetanse',
      content: `Sosial kompetanse er evnen til å samhandle effektivt med andre. Det inkluderer kommunikasjon, empati, samarbeid, konflikthåndtering og evnen til å bygge positive relasjoner.`,
    },
    {
      id: 'kroppsoving-vg3-8-text-1',
      type: 'text',
      content: `**Fair play i praksis**

**Respekt for regler**:
- Følg spillets regler
- Aksepter dommerens avgjørelser
- Ikke søk urettferdige fordeler
- Spill i ånden til reglene

**Respekt for motstandere**:
- Se på dem som medspillere
- Verdsett god prestasjon
- Ingen ydmykelse eller mobbing
- Hils før og etter

**Respekt for lagkamerater**:
- Oppmuntre hverandre
- Del på spilletiden
- Aksepter feil
- Støtt i medgang og motgang

**Respekt for deg selv**:
- Gjør ditt beste
- Ta ansvar for egne handlinger
- Lær av feil
- Vær en god taper og vinner`,
    },
    {
      id: 'kroppsoving-vg3-8-text-2',
      type: 'text',
      content: `**Samarbeid og kommunikasjon**

**Effektiv kommunikasjon**:
- Tydelige beskjeder
- Aktiv lytting
- Gi konstruktiv tilbakemelding
- Tilpass kommunikasjon til mottaker

**Samarbeidsferdigheter**:
- Bidra til felles mål
- Dele ansvar og oppgaver
- Være fleksibel
- Løse uenigheter konstruktivt

**Lederskap og følgerskap**:
- Begge roller er viktige
- Ta initiativ når det trengs
- Følge andres initiativ
- Tilpasse seg situasjonen

**Inkludering**:
- Involvere alle
- Se og verdsette forskjeller
- Tilrettelegge for deltakelse
- Motarbeide ekskludering`,
    },
    {
      id: 'kroppsoving-vg3-8-def-2',
      type: 'definition',
      title: 'Emosjonell intelligens',
      content: `Emosjonell intelligens er evnen til å gjenkjenne, forstå og håndtere egne og andres følelser. Det er viktig for sosiale relasjoner og samarbeid.`,
    },
    {
      id: 'kroppsoving-vg3-8-text-3',
      type: 'text',
      content: `**Håndtere konflikter og følelser**

**Frustrasjon i aktivitet**:
- Normale følelser i konkurranse
- Viktig å håndtere konstruktivt
- Pust og tell til ti
- Fokuser på det du kan kontrollere

**Konflikthåndtering**:
- Ta opp ting tidlig
- Lytt til alle parter
- Fokuser på løsninger
- Kompromiss når mulig

**Tap og nederlag**:
- Del av idretten
- Mulighet for læring
- Gratulere vinner
- Analyser og gå videre

**Seier og suksess**:
- Vinn med verdighet
- Anerkjenn motstanderens innsats
- Del æren med laget
- Forbli ydmyk`,
    },
    {
      id: 'kroppsoving-vg3-8-tip-1',
      type: 'tip',
      title: 'Vær den som løfter andre',
      content: `Et godt aktivitetsmiljø skapes av de som løfter andre opp. Gi ros, oppmuntre, og vær støttende. Dette skaper positive opplevelser for alle - inkludert deg selv.`,
    },
    {
      id: 'kroppsoving-vg3-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er sosial kompetanse?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Evnen til å samhandle effektivt med andre',
            multipleChoiceOptions: [
              'Evnen til å samhandle effektivt med andre',
              'Å være best i konkurranse',
              'Å ha mange venner',
              'Å aldri være uenig',
            ],
          },
        ],
        solution: 'Sosial kompetanse inkluderer kommunikasjon, empati og samarbeid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-8-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva innebærer fair play?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg elementer av fair play.',
            solution: 'Respekt for regler, motstandere, lagkamerater og seg selv',
            multipleChoiceOptions: [
              'Respekt for regler, motstandere, lagkamerater og seg selv',
              'Å alltid vinne',
              'Å aldri gjøre feil',
              'Å være best',
            ],
          },
        ],
        solution: 'Fair play handler om verdier og holdninger i konkurransesituasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-8-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er emosjonell intelligens?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv emosjonell intelligens.',
            solution: 'Evnen til å gjenkjenne og håndtere egne og andres følelser',
            multipleChoiceOptions: [
              'Evnen til å gjenkjenne og håndtere egne og andres følelser',
              'Å være veldig smart',
              'Å aldri bli sint',
              'Å skjule følelser',
            ],
          },
        ],
        solution: 'Emosjonell intelligens er viktig for sosiale relasjoner og samarbeid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-8-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan bør du håndtere tap og nederlag?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig tilnærming.',
            solution: 'Gratulere vinner, lære av situasjonen, gå videre',
            multipleChoiceOptions: [
              'Gratulere vinner, lære av situasjonen, gå videre',
              'Skylde på andre',
              'Gi opp aktiviteten',
              'Bli sint og frustrert',
            ],
          },
        ],
        solution: 'Tap er en del av idretten og gir mulighet for læring og utvikling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-8-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva kjennetegner god kommunikasjon i lagaktiviteter?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg kjennetegn.',
            solution: 'Tydelige beskjeder, aktiv lytting, konstruktiv tilbakemelding',
            multipleChoiceOptions: [
              'Tydelige beskjeder, aktiv lytting, konstruktiv tilbakemelding',
              'Rope høyest mulig',
              'Kritisere andres feil',
              'Ikke si noe',
            ],
          },
        ],
        solution: 'God kommunikasjon er tilpasset situasjonen og mottakeren.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-8-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-8-ex-6',
        number: '6',
        type: 'classic',
        task: 'Beskriv en situasjon der du opplevde godt eller dårlig samarbeid i fysisk aktivitet. Hva gjorde situasjonen god eller dårlig?',
        solution: 'Svar vil variere. Bør inkludere konkret situasjon, hva som fungerte/ikke fungerte, og refleksjon over sosiale faktorer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9: Egenvurdering og refleksjon - dokumentasjon av læring
// ============================================================================

export const CHAPTER_KROPPSOVING_VG3_9: TextbookChapter = {
  id: 'kroppsoving-vg3-9',
  courseId: 'kroppsoving-vg3',
  chapterNumber: '9',
  title: 'Egenvurdering og refleksjon - dokumentasjon av læring',
  description: 'Utvikle evnen til å vurdere egen læring og dokumentere kompetanse.',
  estimatedMinutes: 50,
  competenceGoals: [
    'vurdere egen kompetanse i faget',
    'dokumentere og reflektere over egen utvikling',
  ],
  content: [
    {
      id: 'kroppsoving-vg3-9-intro',
      type: 'text',
      content: `Egenvurdering er en nøkkelferdighet for livslang læring. Ved å kunne vurdere egen kompetanse, sette mål og reflektere over utvikling, tar du kontroll over egen læringsprosess.`,
    },
    {
      id: 'kroppsoving-vg3-9-def-1',
      type: 'definition',
      title: 'Egenvurdering',
      content: `Egenvurdering er en systematisk prosess der du vurderer egen kompetanse, innsats og utvikling opp mot kriterier og mål. Det krever ærlighet, selvrefleksjon og vilje til å identifisere forbedringsområder.`,
    },
    {
      id: 'kroppsoving-vg3-9-text-1',
      type: 'text',
      content: `**Hvorfor egenvurdering?**

**For egen læring**:
- Bevisstgjøring om styrker og svakheter
- Identifisere hva du trenger å jobbe med
- Ta ansvar for egen utvikling
- Øke motivasjon gjennom selvinnsikt

**For vurdering i faget**:
- Dokumentere kompetanse
- Kommunisere med lærer
- Vise helheten i arbeidet
- Bidra til rettferdig vurdering

**For livet etter skolen**:
- Overførbar ferdighet
- Selvstendighet i læring
- Karriereutvikling
- Personlig vekst`,
    },
    {
      id: 'kroppsoving-vg3-9-text-2',
      type: 'text',
      content: `**Metoder for dokumentasjon**

**Treningsdagbok/-logg**:
- Systematisk registrering av trening
- Øvelser, belastning, opplevd form
- Refleksjon over økter
- Sporing av fremgang

**Portfolio**:
- Samling av arbeider over tid
- Viser bredde og dybde
- Dokumenterer utvikling
- Kan være digital

**Video og bilder**:
- Dokumenter ferdigheter i praksis
- Sammenlign over tid
- Visuell bevis på mestring
- Del med lærer

**Skriftlig refleksjon**:
- Hva har du lært?
- Hva mestrer du?
- Hva trenger du å jobbe med?
- Hvordan vil du utvikle deg videre?`,
    },
    {
      id: 'kroppsoving-vg3-9-def-2',
      type: 'definition',
      title: 'Metakognisjon',
      content: `Metakognisjon er å tenke om egen tenkning og læring. Det innebærer å være bevisst på hvordan du lærer, hvilke strategier som fungerer, og hvordan du kan forbedre læringsprosessen.`,
    },
    {
      id: 'kroppsoving-vg3-9-text-3',
      type: 'text',
      content: `**Kompetansemål og vurderingskriterier**

**Kompetansemål i kroppsøving VG3**:
- Øve og bruke ferdigheter i ulike aktiviteter
- Planlegge, gjennomføre og vurdere egentrening
- Praktisere fair play og samarbeid
- Bruke friluftsliv og dans
- Forstå sammenhenger mellom aktivitet og helse
- Reflektere over egen utvikling

**Vurdering av kompetanse**:
- Praktiske ferdigheter i aktiviteter
- Evne til selvstendig trening
- Sosial kompetanse og fair play
- Teoretisk forståelse
- Deltakelse og innsats

**Tips for egenvurdering**:
- Bruk kompetansemålene som sjekkliste
- Vær ærlig med deg selv
- Se utvikling over tid
- Sett konkrete forbedringsmål`,
    },
    {
      id: 'kroppsoving-vg3-9-tip-1',
      type: 'tip',
      title: 'Regelmessig refleksjon',
      content: `Sett av tid hver uke til kort refleksjon over aktivitetene dine. Hva gikk bra? Hva var utfordrende? Hva vil du fokusere på neste uke? Jevn refleksjon gir bedre læring enn å vente til slutten.`,
    },
    {
      id: 'kroppsoving-vg3-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-9-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er egenvurdering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Systematisk vurdering av egen kompetanse mot kriterier og mål',
            multipleChoiceOptions: [
              'Systematisk vurdering av egen kompetanse mot kriterier og mål',
              'Å gi seg selv karakterer',
              'Å sammenligne seg med andre',
              'Lærerens vurdering',
            ],
          },
        ],
        solution: 'Egenvurdering krever ærlighet og selvrefleksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-9-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er metakognisjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv metakognisjon.',
            solution: 'Å tenke om egen tenkning og læring',
            multipleChoiceOptions: [
              'Å tenke om egen tenkning og læring',
              'En type meditasjon',
              'Å huske fakta',
              'Å lese bøker',
            ],
          },
        ],
        solution: 'Metakognisjon hjelper deg å forstå hvordan du lærer best.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-9-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke metoder kan brukes for å dokumentere læring i kroppsøving?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg dokumentasjonsmetoder.',
            solution: 'Treningsdagbok, portfolio, video/bilder, skriftlig refleksjon',
            multipleChoiceOptions: [
              'Treningsdagbok, portfolio, video/bilder, skriftlig refleksjon',
              'Bare karakterer',
              'Ingen dokumentasjon trengs',
              'Bare tester',
            ],
          },
        ],
        solution: 'Ulike metoder kan kombineres for å vise bredden i kompetansen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-9-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva vurderes i kroppsøving på VG3?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg vurderingsområder.',
            solution: 'Ferdigheter, egentrening, fair play, friluftsliv/dans, helse-forståelse',
            multipleChoiceOptions: [
              'Ferdigheter, egentrening, fair play, friluftsliv/dans, helse-forståelse',
              'Bare fysiske tester',
              'Bare teori',
              'Bare oppmøte',
            ],
          },
        ],
        solution: 'Vurdering i kroppsøving er helhetlig og dekker flere kompetanseområder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-9-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor er egenvurdering nyttig for livet etter skolen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg overførbare fordeler.',
            solution: 'Selvstendighet i læring, karriereutvikling, personlig vekst',
            multipleChoiceOptions: [
              'Selvstendighet i læring, karriereutvikling, personlig vekst',
              'Ikke nyttig etter skolen',
              'Bare for å få karakterer',
              'Bare for lærere',
            ],
          },
        ],
        solution: 'Evnen til selvvurdering er verdifull i alle livets faser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-9-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-9-ex-6',
        number: '6',
        type: 'classic',
        task: 'Skriv en egenvurdering av din kompetanse i kroppsøving. Bruk kompetansemålene som utgangspunkt og identifiser styrker og forbedringsområder.',
        solution: 'Svar vil variere. Bør inkludere vurdering av ulike kompetanseområder, konkrete eksempler, og plan for videre utvikling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10: Fysisk aktivitet i et livsløpsperspektiv
// ============================================================================

export const CHAPTER_KROPPSOVING_VG3_10: TextbookChapter = {
  id: 'kroppsoving-vg3-10',
  courseId: 'kroppsoving-vg3',
  chapterNumber: '10',
  title: 'Fysisk aktivitet i et livsløpsperspektiv',
  description: 'Forstå hvordan aktivitetsbehov og muligheter endrer seg gjennom livet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå betydningen av fysisk aktivitet gjennom hele livet',
    'planlegge for livslang fysisk aktivitet',
  ],
  content: [
    {
      id: 'kroppsoving-vg3-10-intro',
      type: 'text',
      content: `Du er nå i ferd med å avslutte den formelle opplæringen i kroppsøving. Ansvaret for å være aktiv resten av livet hviler på deg. Dette kapittelet handler om hvordan du kan tilpasse aktiviteten til ulike livsfaser og situasjoner.`,
    },
    {
      id: 'kroppsoving-vg3-10-def-1',
      type: 'definition',
      title: 'Livsløpsperspektiv på aktivitet',
      content: `Et livsløpsperspektiv innebærer å se fysisk aktivitet som en livslang praksis som må tilpasses ulike aldre, livssituasjoner og helseutfordringer.`,
    },
    {
      id: 'kroppsoving-vg3-10-text-1',
      type: 'text',
      content: `**Aktivitet i ulike livsfaser**

**Ung voksen (18-30)**:
- Ofte høy kapasitet
- Mange muligheter
- Etablere gode vaner
- Risiko: Frafall ved overgang

**Voksen (30-50)**:
- Familie og karriere
- Tidsklemme
- Prioritering utfordres
- Finne effektive løsninger

**Middelalder (50-65)**:
- Kroppen endrer seg
- Forebygging viktigere
- Tilpasse intensitet
- Styrketrening sentralt

**Eldre (65+)**:
- Vedlikeholde funksjon
- Forebygge fall og skrøpelighet
- Sosiale aktiviteter
- Tilpasset aktivitet gir stor gevinst`,
    },
    {
      id: 'kroppsoving-vg3-10-text-2',
      type: 'text',
      content: `**Livssituasjoner og tilpasning**

**Studietiden**:
- Ny hverdag og rutiner
- Begrenset økonomi
- Sosiale muligheter
- Studentidrett og aktivitetstilbud

**Arbeidsliv**:
- Stillesittende jobber
- Aktive pauser
- Arbeidsreise som aktivitet
- Trening før/etter jobb

**Småbarnsforeldre**:
- Lite tid og søvn
- Aktivitet med barn
- Effektive økter
- Fleksible løsninger

**Sykdom og skade**:
- Tilpasset aktivitet
- Rehabilitering
- Lytte til kroppen
- Profesjonell veiledning`,
    },
    {
      id: 'kroppsoving-vg3-10-def-2',
      type: 'definition',
      title: 'Funksjonell kapasitet',
      content: `Funksjonell kapasitet er evnen til å utføre dagliglivets aktiviteter selvstendig. Den påvirkes av fysisk form, og regelmessig aktivitet gjennom livet bevarer funksjonell kapasitet inn i alderdommen.`,
    },
    {
      id: 'kroppsoving-vg3-10-text-3',
      type: 'text',
      content: `**Forberede seg på et aktivt liv**

**Bygg en bevegelsesbase**:
- Lær mange ferdigheter
- Ha flere aktiviteter å velge mellom
- Grunnleggende bevegelseskompetanse
- Fleksibilitet til å endre

**Utvikle selvstendighet**:
- Kunne planlegge egen trening
- Forstå prinsipper og metoder
- Tilpasse til egen situasjon
- Ikke avhengig av andre

**Lag et støttesystem**:
- Treningspartnere
- Familie som støtter
- Tilgang til arenaer
- Kunnskap om muligheter

**Ha en langsiktig plan**:
- Tenk 10-20-30 år frem
- Hva slags liv vil du ha?
- Hvilken rolle skal aktivitet ha?
- Hvordan kommer du dit?`,
    },
    {
      id: 'kroppsoving-vg3-10-tip-1',
      type: 'tip',
      title: 'Aldri for sent å begynne',
      content: `Uansett alder og utgangspunkt gir fysisk aktivitet gevinst. Eldre som begynner å trene får stor helsegevinst. Det er aldri for sent å starte - og aldri for tidlig å etablere gode vaner.`,
    },
    {
      id: 'kroppsoving-vg3-10-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-10-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva menes med livsløpsperspektiv på aktivitet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse.',
            solution: 'Å se aktivitet som livslang praksis tilpasset ulike livsfaser',
            multipleChoiceOptions: [
              'Å se aktivitet som livslang praksis tilpasset ulike livsfaser',
              'Å trene like mye hele livet',
              'Å slutte å trene som voksen',
              'Bare ungdomsidrett',
            ],
          },
        ],
        solution: 'Aktivitetsbehov og muligheter endrer seg gjennom livet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-10-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-10-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilke utfordringer kan oppstå for aktivitet i voksenlivet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg typiske utfordringer.',
            solution: 'Tidsklemme, familie, karriere, endret kropp',
            multipleChoiceOptions: [
              'Tidsklemme, familie, karriere, endret kropp',
              'Ingen utfordringer',
              'For mye fritid',
              'For god helse',
            ],
          },
        ],
        solution: 'Utfordringene krever bevisste valg og tilpasninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-10-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-10-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er funksjonell kapasitet?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv funksjonell kapasitet.',
            solution: 'Evnen til å utføre dagliglivets aktiviteter selvstendig',
            multipleChoiceOptions: [
              'Evnen til å utføre dagliglivets aktiviteter selvstendig',
              'Maksimal styrke',
              'Konkurranseevne',
              'IQ-nivå',
            ],
          },
        ],
        solution: 'Regelmessig aktivitet bevarer funksjonell kapasitet inn i alderdommen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-10-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-10-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er styrketrening spesielt viktig for eldre?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hovedgrunn.',
            solution: 'Forebygger tap av muskelmasse, fall og skrøpelighet',
            multipleChoiceOptions: [
              'Forebygger tap av muskelmasse, fall og skrøpelighet',
              'For å bygge store muskler',
              'Det er ikke viktig for eldre',
              'Bare for unge',
            ],
          },
        ],
        solution: 'Styrketrening er kanskje den viktigste treningsformen for eldre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-10-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-10-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva kan du gjøre nå for å forberede deg på et aktivt liv?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg forberedende tiltak.',
            solution: 'Lære mange aktiviteter, bygge selvstendighet, skape støttesystem',
            multipleChoiceOptions: [
              'Lære mange aktiviteter, bygge selvstendighet, skape støttesystem',
              'Trene så hardt som mulig nå',
              'Vente til du blir eldre',
              'Ikke tenke på fremtiden',
            ],
          },
        ],
        solution: 'Det du lærer og vaner du bygger nå, følger deg resten av livet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg3-10-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg3-10-ex-6',
        number: '6',
        type: 'classic',
        task: 'Skriv en personlig plan for fysisk aktivitet de neste 10 årene. Inkluder forventede livssituasjoner, utfordringer og strategier.',
        solution: 'Svar vil variere. Bør inkludere realistiske forventninger om livsløpet, identifiserte utfordringer, konkrete strategier og mål for aktivitetsnivå.',
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

export const KROPPSOVING_VG3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KROPPSOVING_VG3_1,
  CHAPTER_KROPPSOVING_VG3_2,
  CHAPTER_KROPPSOVING_VG3_3,
  CHAPTER_KROPPSOVING_VG3_4,
  CHAPTER_KROPPSOVING_VG3_5,
  CHAPTER_KROPPSOVING_VG3_6,
  CHAPTER_KROPPSOVING_VG3_7,
  CHAPTER_KROPPSOVING_VG3_8,
  CHAPTER_KROPPSOVING_VG3_9,
  CHAPTER_KROPPSOVING_VG3_10,
];
