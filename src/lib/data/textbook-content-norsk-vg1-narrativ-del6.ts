/**
 * Norsk VG1 - Narrative versjoner Del 6 (Kapittel 5.1-5.6)
 *
 * Engasjerende, fortellende versjoner av kapitlene optimalisert for lesing/lytting.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 *
 * Hovedfil: textbook-content-norsk-vg1-narrativ.ts
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 5.1 NARRATIV: Muntlig kommunikasjon
// ============================================================================

export const CHAPTER_NORSK_VG1_5_1_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-5-1-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '5.1',
  title: 'Muntlig kommunikasjon',
  subtitle: 'Narrativ versjon',
  description: 'Mestre kunsten a tale og lytte - fra nervos til selvsikker pa scenen.',
  estimatedMinutes: 35,
  competenceGoals: [
    'presentere fagstoff muntlig med klar struktur og tilpasning til mottaker',
  ],
  linkedChapterId: 'norsk-vg1-5-1',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-5-1-n-intro',
      type: 'text',
      content: `## Fra hjerteklapp til applaus

Hendene svetter. Hjertet banker. Du star foran klassen og skal si noe viktig. Kanskje kjenner du at ordene forsvinner, at tankene blir blanke, at alle ser pa deg.

Dette er ikke et tegn pa at du er darlig til a snakke. Det er et tegn pa at du bryr deg. Nervositet for muntlige fremforinger er noe av det mest menneskelige som finnes. Til og med erfarne foredragsholdere, politikere og skuespillere kjenner sommerfuglene i magen for de gar pa scenen.

Forskjellen mellom de som lykkes og de som strever, er ikke fravaret av nerver. Det er mestringen av dem. Og det er noe du kan laere.

I dette kapittelet skal vi utforske muntlig kommunikasjon - fra presentasjoner og foredrag til diskusjoner og daglige samtaler. Du skal laere konkrete teknikker som forvandler nervositet til energi, og som gjor deg til en tydeligere, mer overbevisende formidler. For evnen til a uttrykke seg muntlig er ikke et talent du enten har eller ikke har. Det er en ferdighet du kan utvikle.`,
    },

    // ========== SEKSJON 1: Hvorfor muntlige ferdigheter? ==========
    {
      id: 'norsk-vg1-5-1-n-section1',
      type: 'text',
      content: `## Stemmen som verktoy

Tenk pa alle situasjonene der du bruker stemmen din. Du forklarer noe for en venn. Du argumenterer med foreldrene dine. Du presenterer et prosjekt for klassen. Du deltar i en gruppediskusjon. Du moter en ny person og presenterer deg selv.

Muntlige ferdigheter er ikke bare noe du trenger pa skolen. De er grunnleggende for a fungere i samfunnet. Jobbintervjuer, motevirksomhet, forhandlinger, undervisning, omsorg - uansett hva du ender opp med a jobbe med, vil evnen til a kommunisere muntlig vaere avgiorende.

Det demokratiske samfunnet vart bygger pa at folk kan delta i samtaler og debatter. Ytringsfrihet betyr lite hvis du ikke tor eller evner a ytre deg. Derfor er muntlig kommunikasjon ogsa en demokratisk ferdighet. Nar du laerer a ta ordet, laerer du a delta i samfunnet.

Men hva betyr det egentlig a vaere god til muntlig kommunikasjon? Det handler ikke bare om a snakke hoyt og tydelig, selv om det ogsa er viktig. Det handler om a tilpasse det du sier til situasjonen og tilhorerne. Det handler om a lytte like mye som a snakke. Og det handler om a formidle budskapet ditt pa en mate som nar frem.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-5-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa muntlige ferdigheter:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-5-1-n-quiz1-q0',
            task: 'Hvorfor er muntlige ferdigheter viktige i et demokratisk samfunn?',
            options: [
              { id: 'a', text: 'Fordi politikere trenger a holde taler', isCorrect: false },
              { id: 'b', text: 'Fordi ytringsfrihet krever evne til a uttrykke seg og delta i samtaler', isCorrect: true },
              { id: 'c', text: 'Fordi skriftlig kommunikasjon er gammeldags', isCorrect: false },
              { id: 'd', text: 'Fordi alle ma holde presentasjoner pa skolen', isCorrect: false },
            ],
            solution: 'Demokratiet bygger pa at borgerne kan delta i offentlig debatt. Ytringsfrihet er meningslos hvis folk ikke tor eller evner a bruke stemmen sin.',
          },
          {
            id: 'norsk-vg1-5-1-n-quiz1-q1',
            task: 'Hva handler god muntlig kommunikasjon om?',
            options: [
              { id: 'a', text: 'Bare om a snakke hoyt og tydelig', isCorrect: false },
              { id: 'b', text: 'A tilpasse budskapet til situasjonen og lytte like mye som a snakke', isCorrect: true },
              { id: 'c', text: 'A bruke flest mulig vanskelige ord', isCorrect: false },
              { id: 'd', text: 'A snakke lengst mulig', isCorrect: false },
            ],
            solution: 'God muntlig kommunikasjon handler om a tilpasse det du sier til situasjonen og tilhorerne, lytte like mye som a snakke, og formidle budskapet slik at det nar frem.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Presentasjonens struktur ==========
    {
      id: 'norsk-vg1-5-1-n-section2',
      type: 'text',
      content: `## Presentasjonens tre akter

Alle gode presentasjoner folger en grunnstruktur som har vaert kjent siden antikken: innledning, hoveddel og avslutning. Det hores enkelt ut, og det er det ogsa. Men mange undervurderer hvor viktig denne strukturen er.

Innledningen er der du fanger oppmerksomheten. Du har bare noen fa sekunder pa a overbevise tilhorerne om at du er verdt a lytte til. Start med noe som vekker interesse - et overraskende faktum, et sporsmaal, en kort historie, eller en provoserende pastand. Deretter presenterer du temaet ditt og gir en oversikt over hva du skal snakke om. Tilhorerne vil vite hvor dere skal, slik at de kan folge med pa reisen.

Hoveddelen er der du legger frem innholdet ditt. Her er nøkkelen a begrense deg. Tre til fire hovedpunkter er nok for de fleste presentasjoner. Flere enn det, og tilhorerne mister oversikten. Hvert hovedpunkt trenger stotte i form av eksempler, fakta eller argumenter. Og mellom punktene trenger du overganger som viser sammenhengen.

Avslutningen er der du lander. Oppsummer det viktigste du har sagt. Knyt gjerne an til apningen for a skape en sirkel. Og gi tilhorerne noe a ta med seg - en oppfordring til handling, et tankekors, eller et bilde de vil huske. Den siste setningen din er det tilhorerne husker best.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-5-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa presentasjonens struktur:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-5-1-n-quiz2-q0',
            task: 'Hvor mange hovedpunkter bor du vanligvis ha i hoveddelen av en presentasjon?',
            options: [
              { id: 'a', text: 'Sa mange som mulig for a vise at du kan stoffet', isCorrect: false },
              { id: 'b', text: 'Minst sju til ti punkter for a vaere grundig', isCorrect: false },
              { id: 'c', text: 'Tre til fire punkter for at tilhorerne skal klare a folge med', isCorrect: true },
              { id: 'd', text: 'Bare ett punkt for a holde det enkelt', isCorrect: false },
            ],
            solution: 'Tre til fire hovedpunkter er ideelt. Mennesker har begrenset kapasitet til a huske informasjon, sa prioritering er viktigere enn kvantitet.',
          },
          {
            id: 'norsk-vg1-5-1-n-quiz2-q1',
            task: 'Hva bor du gjore i innledningen av en presentasjon?',
            options: [
              { id: 'a', text: 'Ga rett pa hovedinnholdet uten introduksjon', isCorrect: false },
              { id: 'b', text: 'Fange oppmerksomheten med noe interessant og presentere temaet', isCorrect: true },
              { id: 'c', text: 'Unnskylde deg for nervositet', isCorrect: false },
              { id: 'd', text: 'Lese opp hele disposisjonen i detalj', isCorrect: false },
            ],
            solution: 'Innledningen skal fange oppmerksomheten - med et overraskende faktum, et sporsmal eller en kort historie. Deretter presenterer du temaet og gir en oversikt.',
          },
        ],
      },
    },

    // ========== SEKSJON 3: Kroppssprak og stemme ==========
    {
      id: 'norsk-vg1-5-1-n-section3',
      type: 'text',
      content: `## Mer enn bare ord

Forskere anstar at over halvparten av kommunikasjonen var er ikke-verbal. Det betyr at hvordan du sier noe kan vaere like viktig som hva du sier. Kroppssprak og stemmebruk er kraftige verktoy som kan forsterke eller undergrave budskapet ditt.

La oss starte med oynene. Oyekontakt skaper forbindelse. Nar du ser pa tilhorerne, signaliserer du at du bryr deg om dem og at du er trygg pa det du sier. Mange nervose foredragsholdere ser ned i notatene, ut vinduet, eller over hodene til folk. Dette skaper avstand. Prov i stedet a dele rommet i tre soner - venstre, midten, hoyre - og se pa ulike personer i hver sone gjennom presentasjonen.

Kroppen din sender ogsa signaler. Apne skuldre og oppreist holdning ustraler selvtillit. Lukkede skuldre og krokrygget holdning signaliserer usikkerhet. Hender som gestikulerer naturlig forsterker ordene dine. Hender som er stappet i lommene eller som leker med en penn, distraherer. Du trenger ikke sta helt stille, men bevegelsene dine bor vaere bevisste.

Stemmen er et instrument du kan spille pa. Tempo, volum og toneleie pavirker hvordan budskapet mottas. Snakker du for fort, rekker ikke tilhorerne a fordoye informasjonen. Snakker du for sakte, mister de interessen. Variasjon er nøkkelen. Senk tempoet nar du sier noe viktig. Hev volumet for a understreke et poeng. Bruk pauser for a la budskapet synke inn.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-5-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa kroppssprak og stemmebruk:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-5-1-n-quiz3-q0',
            task: 'Hva er den beste maten a bruke oyekontakt pa under en presentasjon?',
            options: [
              { id: 'a', text: 'Se konstant pa en vennlig person i forste rad', isCorrect: false },
              { id: 'b', text: 'Se over hodene til folk for a unnga a bli nervos', isCorrect: false },
              { id: 'c', text: 'Del rommet i soner og se pa ulike personer i hver sone', isCorrect: true },
              { id: 'd', text: 'Hold blikket festet pa notatene for a huske hva du skal si', isCorrect: false },
            ],
            solution: 'Ved a dele rommet i soner og variere hvem du ser pa, skaper du forbindelse med hele publikum. A stirre pa en person blir ubehagelig, mens a unnga oyekontakt signaliserer usikkerhet.',
          },
          {
            id: 'norsk-vg1-5-1-n-quiz3-q1',
            task: 'Hva signaliserer lukkede skuldre og krokrygget holdning under en presentasjon?',
            options: [
              { id: 'a', text: 'At du er avslappet og komfortabel', isCorrect: false },
              { id: 'b', text: 'Usikkerhet og manglende selvtillit', isCorrect: true },
              { id: 'c', text: 'At du er konsentrert om stoffet', isCorrect: false },
              { id: 'd', text: 'Respekt for publikum', isCorrect: false },
            ],
            solution: 'Lukkede skuldre og krokrygget holdning sender signaler om usikkerhet. Apne skuldre og oppreist holdning ustraler derimot selvtillit og gjor at budskapet ditt mottas med storre autoritet.',
          },
          {
            id: 'norsk-vg1-5-1-n-quiz3-q2',
            task: 'Hvordan bor du bruke stemmen for a understreke et viktig poeng?',
            options: [
              { id: 'a', text: 'Snakke fortere for a vise engasjement', isCorrect: false },
              { id: 'b', text: 'Senke stemmen til hvisking', isCorrect: false },
              { id: 'c', text: 'Holde noyaktig samme tempo hele tiden', isCorrect: false },
              { id: 'd', text: 'Variere tempo, volum og bruke pauser bevisst', isCorrect: true },
            ],
            solution: 'Variasjon er nøkkelen til god stemmebruk. Senk tempoet for viktige poenger, hev volumet for a understreke, og bruk pauser for a la budskapet synke inn. Monoton tale gjor at tilhorerne mister interessen.',
          },
        ],
      },
    },

    // ========== SEKSJON 4: Aktiv lytting og diskusjon ==========
    {
      id: 'norsk-vg1-5-1-n-section4',
      type: 'text',
      content: `## Kunsten a lytte

Muntlig kommunikasjon handler ikke bare om a snakke. Den andre halvparten av ligningen er a lytte. Og ikke bare a vente pa tur til a si noe - men a lytte aktivt og engasjert.

Aktiv lytting betyr at du er fullt til stede i samtalen. Du viser med kroppen at du lytter - ved a nikke, holde oyekontakt, og vende deg mot den som snakker. Du lar den andre snakke ferdig uten a avbryte. Du stiller oppfolgingssporsmal som viser at du faktisk har hort hva som ble sagt. Og noen ganger oppsummerer du det du har hort for a forsikre deg om at du har forstatt riktig.

I diskusjoner og debatter er lytting enda viktigere. Mange gior den feilen at de bruker tiden mens andre snakker til a tenke ut sitt neste innlegg, i stedet for a lytte til argumentene de moter. Dette forer til at folk snakker forbi hverandre i stedet for med hverandre.

En god diskusjonsdeltaker respekterer andres synspunkter, selv nar de er dypt uenige. De argumenterer saklig, ikke personlig. De begrunner standpunktene sine med eksempler og fakta. Og de er apne for a endre mening hvis de moter bedre argumenter. For malet med en diskusjon er ikke a vinne - det er a komme naermere sannheten sammen.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-5-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv pa aktiv lytting og diskusjon:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-5-1-n-quiz4-q0',
            task: 'Hva kjennetegner aktiv lytting?',
            options: [
              { id: 'a', text: 'A tenke pa hva du selv skal si neste gang', isCorrect: false },
              { id: 'b', text: 'A stille oppfolgingssporsmal og vise med kroppen at du er engasjert', isCorrect: true },
              { id: 'c', text: 'A avbryte med egne synspunkter nar du er uenig', isCorrect: false },
              { id: 'd', text: 'A vente talmodig pa at den andre skal bli ferdig', isCorrect: false },
            ],
            solution: 'Aktiv lytting inneberer at du er fullt til stede i samtalen - ved a vise engasjement med kroppen, stille oppfolgingssporsmal, og noen ganger oppsummere for a sikre forstaelse. Det er mer enn bare a vaere stille mens andre snakker.',
          },
          {
            id: 'norsk-vg1-5-1-n-quiz4-q1',
            task: 'Hva er malet med en god diskusjon?',
            options: [
              { id: 'a', text: 'A vinne over motstanderen', isCorrect: false },
              { id: 'b', text: 'A vise at du kan mest om temaet', isCorrect: false },
              { id: 'c', text: 'A komme naermere sannheten sammen', isCorrect: true },
              { id: 'd', text: 'A fa det siste ordet', isCorrect: false },
            ],
            solution: 'En god diskusjon handler ikke om a vinne, men om a komme naermere sannheten sammen. Det krever at deltakerne argumenterer saklig, respekterer andres synspunkter, og er apne for a endre mening nar de moter bedre argumenter.',
          },
          {
            id: 'norsk-vg1-5-1-n-quiz4-q2',
            task: 'Hva er en vanlig feil mange gjor i diskusjoner?',
            options: [
              { id: 'a', text: 'A lytte for mye til andres argumenter', isCorrect: false },
              { id: 'b', text: 'A tenke ut sitt neste innlegg mens andre snakker, i stedet for a lytte', isCorrect: true },
              { id: 'c', text: 'A stille for mange oppfolgingssporsmal', isCorrect: false },
              { id: 'd', text: 'A oppsummere andres argumenter for ofte', isCorrect: false },
            ],
            solution: 'Mange bruker tiden mens andre snakker til a forberede sitt eget innlegg i stedet for a lytte. Dette forer til at folk snakker forbi hverandre i stedet for med hverandre, og diskusjonen blir mindre fruktbar.',
          },
        ],
      },
    },

    // ========== SEKSJON 5: Fra nervos til mester ==========
    {
      id: 'norsk-vg1-5-1-n-section5',
      type: 'text',
      content: `## Nervositetens hemmelighet

La oss ta en hemmelighet: Nervositet og begeistring foler nesten likt ut i kroppen. Hjertet banker, hendene svetter, energien strommer. Forskjellen ligger i hvordan du tolker disse signalene.

Hvis du tenker "jeg er redd, dette kommer til a ga galt", forsterker du nervositeten. Hvis du tenker "jeg er spent, jeg har energi til dette", kanaliserer du den samme fysiske reaksjonen til noe positivt. Dette er ikke bare positivitetssnakk - det er basert pa forskning om hvordan tanker pavirker folelser.

Det finnes ogsa praktiske strategier for a handtere nerver. God forberedelse er den viktigste. Jo bedre du kan stoffet ditt, jo tryggere foler du deg. Ov presentasjonen hoyt, helst foran noen du stoler pa. Ta opp deg selv og se gjennom. Gjor deg kjent med rommet der du skal presentere hvis du kan.

Rett for du skal begynne, kan du bruke pusteteknikker. Tre dype pust roer nervesystemet. Noen liker ogsa a strekke ut kroppen eller riste av seg spenningen. Og husk: De forste setningene er de vanskeligste. Nar du kommer i gang, faller du inn i en rytme.

Til slutt, aksepter at det ikke trenger a vaere perfekt. Selv de beste foredragsholderne snubler i ordene noen ganger. Det publikum husker er ikke feilene dine - det er engasjementet ditt og budskapet ditt.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-5-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv pa nervemestring:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-5-1-n-quiz5-q0',
            task: 'Hva er den viktigste strategien for a handtere nervositet for en presentasjon?',
            options: [
              { id: 'a', text: 'A late som om du ikke er nervos', isCorrect: false },
              { id: 'b', text: 'A unnga a ove fordi det gjor deg mer nervos', isCorrect: false },
              { id: 'c', text: 'God forberedelse og oving gir trygghet', isCorrect: true },
              { id: 'd', text: 'A lese ordrett fra et manus hele tiden', isCorrect: false },
            ],
            solution: 'God forberedelse er den beste medisinen mot nervositet. Nar du kan stoffet ditt godt og har ovd pa fremforingen, foler du deg mye tryggere. Oving gjor at ordene sitter i kroppen, ikke bare i hodet.',
          },
          {
            id: 'norsk-vg1-5-1-n-quiz5-q1',
            task: 'Hvorfor kan du kanalisere nervositet til noe positivt?',
            options: [
              { id: 'a', text: 'Fordi nervositet ikke er ekte', isCorrect: false },
              { id: 'b', text: 'Fordi nervositet og begeistring foler nesten likt ut i kroppen', isCorrect: true },
              { id: 'c', text: 'Fordi publikum ikke merker at du er nervos', isCorrect: false },
              { id: 'd', text: 'Fordi det alltid gar bra uansett', isCorrect: false },
            ],
            solution: 'Nervositet og begeistring gir nesten identiske fysiske reaksjoner - bankende hjerte, svette hender, energi. Ved a tolke signalene som spenning fremfor frykt, kan du bruke den samme energien positivt.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-5-1-n-summary',
      type: 'text',
      content: `## Oppsummering: Din muntlige verktoyskasse

Du har na utforsket de viktigste aspektene ved muntlig kommunikasjon. Her er hovedpunktene:

**Strukturen som virker:**
Innledning som fanger oppmerksomhet, hoveddel med tre til fire hovedpunkter, og avslutning som oppsummerer og gir noe a ta med.

**Kropp og stemme:**
Oyekontakt med hele publikum, apen kroppsholdning, og variasjon i tempo, volum og toneleie. Bevisst bruk av pauser.

**Aktiv lytting:**
Vaer til stede i samtaler, vis engasjement med kroppen, still oppfolgingssporsmal, og respekter andres synspunkter selv nar du er uenig.

**Mestrer nervene:**
Nervositet er energi som kan kanaliseres positivt. God forberedelse er den viktigste strategien, kombinert med pusteteknikker og aksept for at det ikke trenger a vaere perfekt.

**Nøkkelbegreper:**
Presentasjonsstruktur, kroppssprak, stemmebruk, aktiv lytting, diskusjonsteknikk, nervemestring.

Husk: Muntlige ferdigheter er som muskler - de styrkes av oving. Hver presentasjon, hver diskusjon, hver samtale er en mulighet til a bli bedre.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.2 NARRATIV: Kreativ skriving
// ============================================================================

export const CHAPTER_NORSK_VG1_5_2_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-5-2-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '5.2',
  title: 'Kreativ skriving',
  subtitle: 'Narrativ versjon',
  description: 'Slipp fantasien fri - la ordene dine skape verdener og bevege lesere.',
  estimatedMinutes: 40,
  competenceGoals: [
    'skrive kreative tekster med bevisst bruk av litteraere virkemidler',
  ],
  linkedChapterId: 'norsk-vg1-5-2',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-5-2-n-intro',
      type: 'text',
      content: `## Ordenes magi

Det begynner med et tomt ark. Eller en blinkende markør pa en tom skjerm. Foran deg ligger uendelige muligheter. Du kan skape en verden. Du kan gi liv til mennesker som aldri har eksistert. Du kan bevege lesere til tarer eller latter, tanke eller handling.

Dette er kreativ skriving. Det er ikke bare en skoledisiplin - det er en av menneskehetens eldste kunstformer. Fra de eldste mytene rundt balene til dagens bestselgere, har fortellinger formet hvem vi er og hvordan vi forstaar verden.

Kanskje tenker du at kreativ skriving bare er for de som har "talent". Det er en myte. Kreativ skriving er et handverk som kan laeres. Ja, noen har kanskje et naturlig anlegg, akkurat som noen har anlegg for musikk eller idrett. Men de beste forfatterne er ikke de med mest talent - det er de som skriver mest, leser mest, og aldri slutter a laere.

I dette kapittelet skal vi utforske kreativ skrivings handverk. Du skal laere om synsvinkel og fortellerstemme, om dialog og skildring, om det berømte radet "vis, ikke fortell". Du skal fa konkrete verktøy du kan bruke nar du skaper dine egne fortellinger.`,
    },

    // ========== SEKSJON 1: Skriveprosessen ==========
    {
      id: 'norsk-vg1-5-2-n-section1',
      type: 'text',
      content: `## Fra ide til ferdig tekst

Mange tror at forfattere setter seg ned og skriver perfekte tekster fra forste ord til siste punktum. Sannheten er at nesten all god skriving er omskriving. Det forste utkastet er bare raastoffet du jobber videre med.

Skriveprosessen har flere faser. I idefasen leter du etter noe a skrive om. Kanskje kommer inspirasjonen fra en drom, en samtale du overhørte, eller en folelse du ikke helt kan sette ord pa. Mange forfattere har en notatbok der de samler ideer, bilder og fragmenter som kan bli til noe senere.

I planleggingsfasen strukturerer du teksten din. Noen lager detaljerte disponeringer med hvert eneste kapittel planlagt. Andre har bare en vag ide om hvor de vil og oppdager resten underveis. Begge tilnaermingene kan fungere - det handler om a finne hva som virker for deg.

Sa kommer utkastet - den fasen der du faktisk skriver. Her er det viktigste radet: Ikke stopp for a rette feil. Ikke sensurer deg selv. Bare skriv. Forste utkast skal ikke vaere perfekt; det skal bare eksistere. Du kan alltid forbedre det senere.

Revisjon er der magien skjer. Her omformer du raastoffet til noe som faktisk fungerer. Du kutter det som ikke trenger a vaere der, du forbedrer det som er svakt, og du polerer til teksten skinner. De fleste forfattere bruker mer tid pa revisjon enn pa forste utkast.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-5-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa skriveprosessen:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-5-2-n-quiz1-q0',
            task: 'Hva er det viktigste radet for nar du skriver forste utkast?',
            options: [
              { id: 'a', text: 'Rett alle skrivefeil umiddelbart', isCorrect: false },
              { id: 'b', text: 'Bare skriv uten a stoppe for a sensurere deg selv', isCorrect: true },
              { id: 'c', text: 'Vis teksten til andre for tilbakemelding etter hvert avsnitt', isCorrect: false },
              { id: 'd', text: 'Planlegg hvert eneste ord pa forhand', isCorrect: false },
            ],
            solution: 'Forste utkast handler om a fa ideene ned pa papiret. Hvis du stopper for a redigere underveis, mister du flyten og hemmer kreativiteten. Revisjon kommer senere - forst ma teksten eksistere.',
          },
          {
            id: 'norsk-vg1-5-2-n-quiz1-q1',
            task: 'Hvilken fase av skriveprosessen bruker de fleste forfattere mest tid pa?',
            options: [
              { id: 'a', text: 'Idefasen', isCorrect: false },
              { id: 'b', text: 'Forste utkast', isCorrect: false },
              { id: 'c', text: 'Revisjon og omskriving', isCorrect: true },
              { id: 'd', text: 'Planleggingsfasen', isCorrect: false },
            ],
            solution: 'De fleste forfattere bruker mer tid pa revisjon enn pa forste utkast. Forste utkast er raamateriale som formes og forbedres gjennom omskriving. Det er i revisjonen magien skjer.',
          },
          {
            id: 'norsk-vg1-5-2-n-quiz1-q2',
            task: 'Hva er en god kilde til inspirasjon for kreativ skriving?',
            options: [
              { id: 'a', text: 'Bare drommer og fantasier', isCorrect: false },
              { id: 'b', text: 'Drommer, samtaler du overhorer, folelser du ikke kan sette ord pa', isCorrect: true },
              { id: 'c', text: 'Bare andre forfatteres boker', isCorrect: false },
              { id: 'd', text: 'Bare personlige opplevelser', isCorrect: false },
            ],
            solution: 'Inspirasjon kan komme fra mange steder - drommer, samtaler du overhorer, folelser, observasjoner av verden rundt deg. Mange forfattere har en notatbok der de samler ideer og fragmenter som kan bli til noe senere.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Synsvinkel og forteller ==========
    {
      id: 'norsk-vg1-5-2-n-section2',
      type: 'text',
      content: `## Hvem forteller historien?

Hvert valg du gjor som forfatter pavirker leserens opplevelse. Et av de viktigste valgene er synsvinkel - hvem forteller historien, og hvor mye vet de?

Jeg-fortelleren er kanskje den mest personlige formen. "Jeg vaknet av at regnet trommet mot vinduet. Noe var galt." Her er leseren inne i hodet pa en karakter, opplever alt gjennom deres oyne og tanker. Jeg-formen skaper naerhet og intimitet, men begrenser hva leseren kan vite - bare det fortelleren selv vet eller oppfatter.

Tredjeperson begrenset folger ogsa en karakter, men utenfra. "Hun vaknet av regnet. Noe var galt, tenkte hun." Her kan forfatteren veksle mellom a vise karakterens tanker og a beskrive dem utenfra. Det gir litt mer fleksibilitet enn jeg-formen.

Den allvitende fortelleren vet alt om alle. "Maria vaknet av regnet. I naborommet la broren hennes ogsa vaken, fylt av den samme uroen som hun ikke visste om." Denne formen gir forfatteren full frihet, men kan skape distanse til karakterene.

Det finnes ikke en "riktig" synsvinkel. Valget avhenger av historien du vil fortelle. Hvis du vil at leseren skal oppleve mysteriet sammen med hovedpersonen, pass pa a ikke avsløre noe hovedpersonen ikke vet. Hvis du vil vise hvordan ulike karakterer opplever samme hendelse, kan en allvitende forteller vaere riktig.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-5-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa synsvinkel og forteller:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-5-2-n-quiz2-q0',
            task: 'Hva er fordelen med en jeg-forteller?',
            options: [
              { id: 'a', text: 'Forfatteren kan vise alle karakterenes tanker', isCorrect: false },
              { id: 'b', text: 'Det skaper naerhet og intimitet med hovedpersonen', isCorrect: true },
              { id: 'c', text: 'Leseren far vite alt som skjer overalt i historien', isCorrect: false },
              { id: 'd', text: 'Det er lettere a skrive enn andre synsvinkler', isCorrect: false },
            ],
            solution: 'Jeg-formen lar leseren oppleve historien direkte gjennom hovedpersonens bevissthet. Denne naerheten skaper sterk innlevelse, men betyr ogsa at leseren bare vet det fortelleren vet.',
          },
          {
            id: 'norsk-vg1-5-2-n-quiz2-q1',
            task: 'Hva kjennetegner den allvitende fortelleren?',
            options: [
              { id: 'a', text: 'Fortelleren vet bare det hovedpersonen vet', isCorrect: false },
              { id: 'b', text: 'Fortelleren observerer bare ytre handling', isCorrect: false },
              { id: 'c', text: 'Fortelleren vet alt om alle karakterene og kan bevege seg fritt mellom dem', isCorrect: true },
              { id: 'd', text: 'Fortelleren er en av karakterene i historien', isCorrect: false },
            ],
            solution: 'Den allvitende fortelleren kjenner alle karakterenes tanker og folelser, og kan vise ting som skjer pa ulike steder samtidig. Det gir forfatteren full frihet, men kan skape storre distanse til karakterene enn jeg-formen.',
          },
          {
            id: 'norsk-vg1-5-2-n-quiz2-q2',
            task: 'Nar er tredjeperson begrenset et godt valg?',
            options: [
              { id: 'a', text: 'Nar du vil at leseren skal vite alt om alle', isCorrect: false },
              { id: 'b', text: 'Nar du vil folge en karakter med litt mer fleksibilitet enn jeg-formen gir', isCorrect: true },
              { id: 'c', text: 'Bare nar du skriver sakprosa', isCorrect: false },
              { id: 'd', text: 'Nar du ikke klarer a skrive i forste person', isCorrect: false },
            ],
            solution: 'Tredjeperson begrenset folger en karakter utenfra, men kan ogsa vise tankene deres. Det gir litt mer fleksibilitet enn jeg-formen - du kan veksle mellom indre tanker og ytre beskrivelse.',
          },
        ],
      },
    },

    // ========== SEKSJON 3: Vis, ikke fortell ==========
    {
      id: 'norsk-vg1-5-2-n-section3',
      type: 'text',
      content: `## Vis, ikke fortell

"Per var sint." Dette er fortelling. Det sier leseren direkte hva karakteren foler. Det er ikke galt, men det er heller ikke veldig engasjerende.

"Per smalt doren igjen sa vinduene ristet. Han rev av seg jakken og kastet den pa gulvet. Hendene skalv da han presset dem mot bordplaten." Dette er visning. Leseren ser handlingene og trekker selv konklusjonen om at Per er sint.

Forskjellen er enorm. Fortelling gjor leseren til en passiv mottaker av informasjon. Visning inviterer leseren til a tolke, til a vaere aktiv deltaker i forstaelsen av historien. Visning skaper bilder i hodet, folelser i kroppen.

Men hvordan viser du? Bruk sansene. Hva ser karakteren? Horer? Lukter? Smaker? Foler mot huden? Beskriv kroppen. Hendene skalv. Magen knot seg. Skuldrene sank. Vis gjennom handling. Hva gjor karakteren? Handlinger avslorer mer enn tanker.

Et viktig forbehold: Ikke alt trenger a "vises". Noen ganger er "fortelling" effektivt for a komme videre i historien uten a bruke for mye plass pa uviktige scener. Kunsten er a vite nar du skal vise detaljert og nar du kan fortelle kort. De viktige oyeblikkene - vendepunktene, de emosjonelle hoylepunktene - fortjener visning.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-5-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa vis, ikke fortell:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-5-2-n-quiz3-q0',
            task: 'Hvilken setning er et eksempel pa "visning" fremfor "fortelling"?',
            options: [
              { id: 'a', text: 'Hun var redd.', isCorrect: false },
              { id: 'b', text: 'Hjertet hamret mens hun presset ryggen mot veggen.', isCorrect: true },
              { id: 'c', text: 'Han var veldig glad.', isCorrect: false },
              { id: 'd', text: 'Rommet var fint.', isCorrect: false },
            ],
            solution: 'Ved a beskrive fysiske reaksjoner som bankende hjerte og kroppen presset mot veggen, lar forfatteren leseren selv trekke konklusjonen om at karakteren er redd. Dette er mer engasjerende enn bare a si det direkte.',
          },
          {
            id: 'norsk-vg1-5-2-n-quiz3-q1',
            task: 'Nar er det greit a bruke "fortelling" i stedet for "visning"?',
            options: [
              { id: 'a', text: 'Aldri - du bor alltid vise', isCorrect: false },
              { id: 'b', text: 'Bare i innledningen av en tekst', isCorrect: false },
              { id: 'c', text: 'Nar du vil komme videre i historien uten a bruke for mye plass pa uviktige scener', isCorrect: true },
              { id: 'd', text: 'Bare nar du er lat og ikke gidder a skrive detaljert', isCorrect: false },
            ],
            solution: 'Ikke alt trenger a vises detaljert. Fortelling er effektivt for a komme videre i historien nar en scene ikke er viktig nok til a fortjene detaljert visning. Kunsten er a vise de viktige oyeblikkene - vendepunkter og emosjonelle hoydepunkter.',
          },
          {
            id: 'norsk-vg1-5-2-n-quiz3-q2',
            task: 'Hvilke sanser kan du bruke for a "vise" i stedet for a "fortelle"?',
            options: [
              { id: 'a', text: 'Bare syn og horsel', isCorrect: false },
              { id: 'b', text: 'Syn, horsel, lukt, smak og fole/beroring', isCorrect: true },
              { id: 'c', text: 'Bare syn - det viktigste er a beskrive hva karakteren ser', isCorrect: false },
              { id: 'd', text: 'Ingen sanser - visning handler om dialog', isCorrect: false },
            ],
            solution: 'Alle fem sansene er verktoy for visning. Hva ser, horer, lukter, smaker og foler karakteren? Jo flere sanser du aktiverer, jo mer levende blir scenen. Kroppssprak og fysiske reaksjoner er ogsa kraftfulle visningsverktoy.',
          },
        ],
      },
    },

    // ========== SEKSJON 4: Dialog og personskildring ==========
    {
      id: 'norsk-vg1-5-2-n-section4',
      type: 'text',
      content: `## Nar karakterene snakker

Dialog er et kraftig verktoy i forfatterens verktoyskasse. Den avslorer karakter, driver handling fremover, og gir teksten liv og tempo.

God dialog later ikke som virkelig tale. Hvis du lytter til faktiske samtaler, er de fulle av nøling, gjentakelse, og ufullstendige setninger. I fiksjon ma dialogen vaere mer fokusert - den ma gjore et arbeid i historien. Hver replikk bor enten avsløre noe om karakteren, bringe informasjon, eller drive handlingen fremover.

Karakterer bor snakke forskjellig. En professor snakker annerledes enn en tenaring. En nervos person snakker annerledes enn en selvsikker. Ordvalg, setningslengde, og talemater kan vise hvem karakteren er uten at du trenger a fortelle det direkte.

Det som ikke sies kan vaere like viktig som det som sies. Pauser, unngaelser, og ting som ligger mellom linjene skaper spenning og dybde. Nar en karakter svarer pa noe annet enn det de ble spurt om, avslorer det noe.

Personskildring handler ikke bare om utseende. Ja, leseren vil ha et bilde av karakteren, men det er oppførsel, valg og reaksjoner som virkelig definerer hvem noen er. En karakter som sier at de er snille, men handler egoistisk, er langt mer interessant enn en som bare er konsekvent.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-5-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv pa dialog og personskildring:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-5-2-n-quiz4-q0',
            task: 'Hva bor god dialog i fiksjon gjore?',
            options: [
              { id: 'a', text: 'Gjengi hvordan folk faktisk snakker med alle nolinger og gjentakelser', isCorrect: false },
              { id: 'b', text: 'Avsløre karakter, gi informasjon, eller drive handlingen fremover', isCorrect: true },
              { id: 'c', text: 'Vaere sa lang som mulig for a vise karakterens personlighet', isCorrect: false },
              { id: 'd', text: 'Forklare alle karakterenes bakgrunnshistorier', isCorrect: false },
            ],
            solution: 'Dialog i fiksjon ma vaere mer fokusert enn virkelig tale. Hver replikk bor gjore et arbeid i historien - enten ved a avsløre karakter, bringe viktig informasjon, eller drive handlingen fremover.',
          },
          {
            id: 'norsk-vg1-5-2-n-quiz4-q1',
            task: 'Hva definerer en karakter mest - utseende eller handlinger?',
            options: [
              { id: 'a', text: 'Utseende - leseren trenger et tydelig bilde', isCorrect: false },
              { id: 'b', text: 'Ingen av delene - bare dialogen teller', isCorrect: false },
              { id: 'c', text: 'Handlinger og valg avslorer hvem noen virkelig er', isCorrect: true },
              { id: 'd', text: 'Forfatterens direkte beskrivelser av personligheten', isCorrect: false },
            ],
            solution: 'Oppforsel, valg og reaksjoner definerer hvem en karakter er mye mer enn utseendebeskrivelser. En karakter som sier en ting og gjor noe annet er mer interessant og troverdig enn en som bare beskrives direkte.',
          },
          {
            id: 'norsk-vg1-5-2-n-quiz4-q2',
            task: 'Hvorfor kan det som IKKE sies i en dialog vaere viktig?',
            options: [
              { id: 'a', text: 'Fordi forfatteren sparer plass', isCorrect: false },
              { id: 'b', text: 'Fordi pauser, unngaelser og ting mellom linjene skaper spenning og dybde', isCorrect: true },
              { id: 'c', text: 'Fordi leseren ikke liker a lese for mye dialog', isCorrect: false },
              { id: 'd', text: 'Fordi det er enklere a skrive', isCorrect: false },
            ],
            solution: 'Det som ligger mellom linjene - pauser, unngaelser, svar pa noe annet enn det som ble spurt - avslorer ofte mer enn ordene selv. Nar en karakter unngaar et sporsmaal, viser det at det er noe der, noe som skaper spenning.',
          },
        ],
      },
    },

    // ========== SEKSJON 5: Spenning og struktur ==========
    {
      id: 'norsk-vg1-5-2-n-section5',
      type: 'text',
      content: `## Historiens rytme

En god historie tar leseren med pa en reise. Den har en begynnelse som etablerer verden og introduserer konflikten, en midtdel der spenningen oker, og en slutt der ting loses eller endres.

Spenningskurven er et nyttig begrep. I begynnelsen etablerer du det normale - hvordan livet er for karakterene dine. Sa skjer noe som forstyrrer det normale, en hendelse eller et problem som setter handlingen i gang. I midtdelen oker vanskelighetene. Karakterene moter hindringer, tar valg, mislykkes kanskje for de lykkes. Dette bygger mot klimaks - det avgjorende oyeblikket der alt star pa spill. Etterpå kommer oppløsningen, der vi ser konsekvensene.

Ikke alle historier folger denne strukturen slavisk, men de fleste gode historier har en eller annen form for bevegelse fra en tilstand til en annen.

Frempek er nar du antyder noe som skal skje senere. Det kan vaere subtilt - et ord, et bilde, en folelse - som far betydning nar leseren ser tilbake. Tilbakeholdelse av informasjon skaper nysgjerrighet. Hvis karakteren din finner en mystisk konvolutt, men vi ikke far vite hva som star i den for ti sider senere, vil leseren bla videre for a finne ut.

Cliffhangere - a slutte et kapittel pa et spenningstopp - er en klassisk teknikk for a holde leseren fast. Men bruk den med mate. Hvis alt er dramatisk hele tiden, mister dramatikken sin kraft.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-5-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv pa spenning og struktur:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-5-2-n-quiz5-q0',
            task: 'Hva kalles det nar en fortelling starter midt i handlingen?',
            options: [
              { id: 'a', text: 'Kronologisk fortelling', isCorrect: false },
              { id: 'b', text: 'In medias res', isCorrect: true },
              { id: 'c', text: 'Tilbakeblikk', isCorrect: false },
              { id: 'd', text: 'Cliffhanger', isCorrect: false },
            ],
            solution: 'In medias res er latin for "midt i tingene". Det betyr a starte fortellingen midt i handlingen, ofte pa et dramatisk punkt, for sa a fylle inn bakgrunnsinformasjonen etterpå. Det er en effektiv mate a fange leserens oppmerksomhet umiddelbart.',
          },
          {
            id: 'norsk-vg1-5-2-n-quiz5-q1',
            task: 'Hva er klimaks i en fortelling?',
            options: [
              { id: 'a', text: 'Innledningen der karakterene presenteres', isCorrect: false },
              { id: 'b', text: 'Avslutningen der alt loses', isCorrect: false },
              { id: 'c', text: 'Det avgjorende oyeblikket der alt star pa spill', isCorrect: true },
              { id: 'd', text: 'Tilbakeblikket midt i historien', isCorrect: false },
            ],
            solution: 'Klimaks er det avgjorende vendepunktet i fortellingen, der spenningen er pa topp og alt star pa spill. Etter klimaks kommer opploesningen der vi ser konsekvensene av det som skjedde.',
          },
          {
            id: 'norsk-vg1-5-2-n-quiz5-q2',
            task: 'Hva er frempek i en fortelling?',
            options: [
              { id: 'a', text: 'Et tilbakeblikk til noe som har skjedd for', isCorrect: false },
              { id: 'b', text: 'En oppsummering av handlingen', isCorrect: false },
              { id: 'c', text: 'A antyde noe som skal skje senere i historien', isCorrect: true },
              { id: 'd', text: 'A avslutte et kapittel pa et spenningstopp', isCorrect: false },
            ],
            solution: 'Frempek er nar forfatteren antyder noe som skal skje senere - et ord, et bilde, en folelse som far betydning nar leseren ser tilbake. Det skaper nysgjerrighet og belonner oppmerksom lesing.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-5-2-n-summary',
      type: 'text',
      content: `## Oppsummering: Dine kreative verktoy

Du har na utforsket kreativ skrivings grunnleggende handverk. Her er hovedpunktene:

**Skriveprosessen:**
Ide, planlegging, utkast, revisjon. Forste utkast trenger ikke vaere perfekt - bare skriv. De fleste forfattere bruker mer tid pa omskriving enn pa forste utkast.

**Synsvinkel:**
Jeg-forteller gir naerhet, tredjeperson begrenset gir fleksibilitet, allvitende forteller gir full oversikt. Valget avhenger av historien.

**Vis, ikke fortell:**
Bruk sanser, kroppssprak og handling til a vise folelser og stemninger i stedet for a si dem direkte. Viktige øyeblikk fortjener visning.

**Dialog og karakterer:**
Dialog skal avsløre karakter og drive handling. Karakterer bor snakke forskjellig. Handling og valg definerer karakter mer enn beskrivelser.

**Spenning og struktur:**
Bygg mot klimaks, bruk frempek og tilbakeholdelse av informasjon. Variasjon i tempo holder leseren engasjert.

**Nøkkelbegreper:**
Synsvinkel, jeg-forteller, allvitende forteller, vis ikke fortell, dialog, personskildring, spenningskurve, frempek, in medias res.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.3 NARRATIV: Fagartikkel
// ============================================================================

export const CHAPTER_NORSK_VG1_5_3_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-5-3-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '5.3',
  title: 'Fagartikkel',
  subtitle: 'Narrativ versjon',
  description: 'Fra sporsmaal til svar - kunsten a utforske et tema grundig og saklig.',
  estimatedMinutes: 40,
  competenceGoals: [
    'skrive fagartikler med klar struktur, korrekt kildebruk og tilpasset sprak',
  ],
  linkedChapterId: 'norsk-vg1-5-3',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-5-3-n-intro',
      type: 'text',
      content: `## Viten pa papir

Du har lurt pa noe. Kanskje hvorfor sa mange ungdommer sliter med sovn, eller hvordan klimaendringer pavirker norsk natur, eller hva som egentlig skjedde under andre verdenskrig. Du har lest, tenkt, snakket med folk. Na vil du dele det du har laert.

Dette er fagartikkelens utgangspunkt. Den er ikke en meningsytring der du argumenterer for et standpunkt. Den er en utforskning der du undersoker et tema, sammenstiller informasjon fra flere kilder, og formidler kunnskap pa en systematisk mate.

Fagartikkelen er en av de viktigste sjangrene du laerer pa skolen. Den er grunnlaget for akademisk skriving pa høyere utdanning. Den er ogsa hverdagen for journalister, forskere, byrakrater og mange andre yrkesgrupper. A mestre fagartikkelen er a mestre kunsten a tenke klart og formidle presist.

I dette kapittelet skal vi gjennom alle fasene - fra a finne en god problemstilling til a skrive en tekst med klar struktur og korrekt kildebruk. Du skal laere hva som skiller en god fagartikkel fra en darlig, og du skal fa konkrete tips du kan bruke i dine egne tekster.`,
    },

    // ========== SEKSJON 1: Problemstillingen ==========
    {
      id: 'norsk-vg1-5-3-n-section1',
      type: 'text',
      content: `## Sporsmaalet som styrer alt

Alt begynner med et sporsmaal. Ikke et hvilket som helst sporsmaal, men ett som er avgrenset, undersøkbart og interessant. Dette kaller vi problemstillingen, og den er fagartikkelens kompass.

"Klima" er ikke en problemstilling - det er et enormt tema. "Klimaendringer er farlig" er heller ikke en problemstilling - det er en pastand du har konkludert med for du har undersøkt noe. Men "Hvordan pavirker klimaendringer nordnorsk fiske?" - det er en problemstilling. Den er avgrenset til et spesifikt omrade, den er undersøkbar gjennom kilder og data, og den inviterer til utforskning.

En god problemstilling er verken for vid eller for smal. For vid, og du drukner i materiale. For smal, og du finner ikke nok a skrive om. Den bor ogsa vaere noytral - du bor ikke ha konkludert for du begynner a undersøke.

Problemstillingen former hele teksten din. Den bestemmer hvilke kilder du leter etter, hvilken informasjon du tar med, og hvordan du strukturerer fremstillingen. Nar du er usikker pa hva du skal skrive videre, gaar du tilbake til problemstillingen og spør: Hva trenger leseren a vite for a forstaa svaret pa dette spørsmålet?`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-5-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa problemstillingen:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-5-3-n-quiz1-q0',
            task: 'Hvilken av disse er den beste problemstillingen for en fagartikkel?',
            options: [
              { id: 'a', text: 'Klima', isCorrect: false },
              { id: 'b', text: 'Klimaendringer er det storste problemet i var tid', isCorrect: false },
              { id: 'c', text: 'Hvordan pavirker klimaendringer nordnorsk fiske?', isCorrect: true },
              { id: 'd', text: 'Alt om klima og miljo', isCorrect: false },
            ],
            solution: 'En god problemstilling er avgrenset, undersokbar og noytral. Den stiller et sporsmal som kan besvares gjennom undersokelse, uten a ha konkludert pa forhand.',
          },
          {
            id: 'norsk-vg1-5-3-n-quiz1-q1',
            task: 'Hva er problemet med problemstillingen "Klimaendringer er farlig"?',
            options: [
              { id: 'a', text: 'Den er for lang', isCorrect: false },
              { id: 'b', text: 'Den er en pastand, ikke et sporsmal - du har konkludert for du har undersoki', isCorrect: true },
              { id: 'c', text: 'Den handler om klima, som er et kjedelig tema', isCorrect: false },
              { id: 'd', text: 'Den er for avgrenset', isCorrect: false },
            ],
            solution: 'En problemstilling som allerede inneholder en konklusjon er ikke en ekte undersokelse. Du har bestemt svaret for du har begynt. En noytral problemstilling apner for utforskning uten forutinntatthet.',
          },
          {
            id: 'norsk-vg1-5-3-n-quiz1-q2',
            task: 'Hva gjor du nar du er usikker pa hva du skal skrive videre i fagartikkelen?',
            options: [
              { id: 'a', text: 'Skriver om et annet tema', isCorrect: false },
              { id: 'b', text: 'Gar tilbake til problemstillingen og spor hva leseren trenger a vite', isCorrect: true },
              { id: 'c', text: 'Legger til flere kilder for sikkerhets skyld', isCorrect: false },
              { id: 'd', text: 'Kopierer fra en annen artikkel', isCorrect: false },
            ],
            solution: 'Problemstillingen er fagartikkelens kompass. Nar du star fast, gar du tilbake til den og spor: Hva trenger leseren a vite for a forsta svaret pa dette sporsmalet? Det hjelper deg a holde fokus og finne veien videre.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Struktur og oppbygning ==========
    {
      id: 'norsk-vg1-5-3-n-section2',
      type: 'text',
      content: `## Tekstens arkitektur

En fagartikkel har en tydelig struktur som gjor det lett for leseren a folge med. Strukturen er ikke bare pynt - den er et verktoy for klarhet.

Innledningen gjor flere ting samtidig. Den presenterer temaet og problemstillingen. Den forklarer hvorfor temaet er viktig eller interessant. Den gir en oversikt over hva som kommer. Og den fanger leserens oppmerksomhet. En effektiv teknikk er a starte med et overraskende faktum, et aktuelt eksempel, eller et sporsmaal som vekker nysgjerrighet.

Hoveddelen er der du utforsker temaet systematisk. Organiser stoffet i tydelige avsnitt, der hvert avsnitt har ett hovedpoeng. Rekkefølgen kan vaere kronologisk, tematisk, eller fra det generelle til det spesifikke - det viktige er at det er en logikk leseren kan følge. Bruk overganger mellom avsnittene som viser sammenhengen: "I tillegg...", "Pa den annen side...", "En annen faktor er...".

Avslutningen oppsummerer hovedfunnene og besvarer problemstillingen. Her introduserer du ikke nytt stoff - det ville forvirre leseren. Du kan gjerne peke pa videre perspektiver eller spørsmål som gjenstår, men hovedjobben er a runde av pa en mate som gir leseren folelsen av at temaet er grundig behandlet.

Og sa er det kildelisten. Alle kilder du har brukt skal oppgis her, alfabetisk ordnet og korrekt formatert.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-5-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa fagartikkelens struktur:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-5-3-n-quiz2-q0',
            task: 'Hva bor du IKKE gjore i avslutningen av en fagartikkel?',
            options: [
              { id: 'a', text: 'Oppsummere hovedfunnene', isCorrect: false },
              { id: 'b', text: 'Besvare problemstillingen', isCorrect: false },
              { id: 'c', text: 'Introdusere helt nytt stoff', isCorrect: true },
              { id: 'd', text: 'Peke pa videre perspektiver', isCorrect: false },
            ],
            solution: 'Avslutningen skal oppsummere og avrunde, ikke introdusere ny informasjon. Nytt stoff i avslutningen forvirrer leseren og gjor at teksten foler ufullstendig.',
          },
          {
            id: 'norsk-vg1-5-3-n-quiz2-q1',
            task: 'Hva er den beste maten a organisere hoveddelen i en fagartikkel?',
            options: [
              { id: 'a', text: 'Skriv alt i ett langt avsnitt uten oppdelinger', isCorrect: false },
              { id: 'b', text: 'Tydelige avsnitt med ett hovedpoeng per avsnitt og gode overganger', isCorrect: true },
              { id: 'c', text: 'Bruk kulepunktlister for alt innholdet', isCorrect: false },
              { id: 'd', text: 'La avsnittene komme i tilfeldig rekkefolge', isCorrect: false },
            ],
            solution: 'Hoveddelen bor organiseres i tydelige avsnitt der hvert avsnitt har ett hovedpoeng. Overganger som "I tillegg...", "Pa den annen side..." viser sammenhengen og hjelper leseren a folge med.',
          },
          {
            id: 'norsk-vg1-5-3-n-quiz2-q2',
            task: 'Hva bor innledningen i en fagartikkel gjore?',
            options: [
              { id: 'a', text: 'Bare presentere temaet kort', isCorrect: false },
              { id: 'b', text: 'Gi et detaljert referat av alt du skal skrive om', isCorrect: false },
              { id: 'c', text: 'Presentere tema og problemstilling, forklare hvorfor det er viktig, og fange interesse', isCorrect: true },
              { id: 'd', text: 'Allerede besvare problemstillingen', isCorrect: false },
            ],
            solution: 'Innledningen har flere oppgaver: fange leserens oppmerksomhet (f.eks. med et overraskende faktum), presentere temaet og problemstillingen, og gi en oversikt over hva som kommer. Alt dette gjor at leseren vet hva de kan forvente.',
          },
        ],
      },
    },

    // ========== SEKSJON 3: Kildebruk ==========
    {
      id: 'norsk-vg1-5-3-n-section3',
      type: 'text',
      content: `## A sta pa andres skuldre

Ingen skriver i et vakuum. Fagartikkelen bygger pa det andre har funnet ut, tenkt og skrevet. Kildebruk handler om a anerkjenne dette - og om a vise leseren hvor informasjonen din kommer fra.

Det finnes to hovedmater a bruke kilder pa: sitat og parafrase. Et sitat er en ordrett gjengivelse av kildens ord, markert med anforselstegn. Bruk sitat nar ordlyden er viktig - nar kilden har formulert noe pa en spesielt presis eller slående mate. En parafrase er a gjengi innholdet med egne ord. Du ma fortsatt oppgi kilden, men du slipper anforselstegnene.

Nar du bruker kilder i teksten, gjor du en kildehenvisning. Den enkleste formen er a skrive forfatterens etternavn og årstall i parentes: (Hansen, 2023). Hvis du siterer, tar du med sidetall: (Hansen, 2023, s. 45). Denne henvisningen kobler til den fullstendige informasjonen i kildelisten.

Kildelisten kommer til slutt i artikkelen og inneholder all informasjon som trengs for a finne kilden. For en bok: forfatter, år, tittel, utgiver. For en artikkel: forfatter, år, tittel, navn pa tidsskrift, volum og sidetall. For nettsider: forfatter (hvis det finnes), år, tittel, URL og dato for nedlasting.

God kildebruk handler ikke bare om a unnga plagiat. Det handler om ærlighet og etterrettelighet - om a gi leseren mulighet til a sjekke informasjonen selv.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-5-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa kildebruk:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-5-3-n-quiz3-q0',
            task: 'Nar bor du bruke sitat fremfor parafrase?',
            options: [
              { id: 'a', text: 'Alltid, fordi det er mer imponerende', isCorrect: false },
              { id: 'b', text: 'Nar den eksakte ordlyden er viktig eller spesielt velformulert', isCorrect: true },
              { id: 'c', text: 'Aldri, fordi parafrase er bedre', isCorrect: false },
              { id: 'd', text: 'Bare nar du ikke forstaar innholdet godt nok til a parafrasere', isCorrect: false },
            ],
            solution: 'Sitat brukes nar selve formuleringen er viktig - nar kilden har sagt noe pa en spesielt presis, autoritativ eller slaaende mate. Ellers er parafrase vanligvis bedre fordi det viser at du har forstatt stoffet.',
          },
          {
            id: 'norsk-vg1-5-3-n-quiz3-q1',
            task: 'Hva er en kildehenvisning i lopende tekst?',
            options: [
              { id: 'a', text: 'En lenke til nettsiden du brukte', isCorrect: false },
              { id: 'b', text: 'Forfatterens etternavn og aarstall i parentes, f.eks. (Hansen, 2023)', isCorrect: true },
              { id: 'c', text: 'Et fotnotenummer nederst pa siden', isCorrect: false },
              { id: 'd', text: 'Hele boktittelen skrevet inn i setningen', isCorrect: false },
            ],
            solution: 'Den enkleste formen for kildehenvisning er forfatterens etternavn og aarstall i parentes. Ved direkte sitat legges sidetall til: (Hansen, 2023, s. 45). Denne henvisningen kobler til den fullstendige informasjonen i kildelisten.',
          },
          {
            id: 'norsk-vg1-5-3-n-quiz3-q2',
            task: 'Hvorfor er god kildebruk viktig utover a unnga plagiat?',
            options: [
              { id: 'a', text: 'Fordi det gjor teksten lengre', isCorrect: false },
              { id: 'b', text: 'Fordi laereren sjekker kilder nøye', isCorrect: false },
              { id: 'c', text: 'Det handler om aerlighet og a gi leseren mulighet til a sjekke informasjonen', isCorrect: true },
              { id: 'd', text: 'Fordi det er lovpaalagt', isCorrect: false },
            ],
            solution: 'God kildebruk handler om aerlighet og etterrettelighet. Ved a vise hvor informasjonen kommer fra, gir du leseren mulighet til a sjekke fakta, vurdere kildenes kvalitet, og fordype seg videre i temaet.',
          },
        ],
      },
    },

    // ========== SEKSJON 4: Sprak og stil ==========
    {
      id: 'norsk-vg1-5-3-n-section4',
      type: 'text',
      content: `## Ordene som formidler

Fagartikkelen har sitt eget sprak - saklig, presist og noytrait. Dette betyr ikke at den ma vaere kjedelig eller tunglest. Tvert imot krever god faglspraak at du formidler komplisert stoff pa en klar og tilgjengelig mate.

Unnga muntlig sprak og slang. "Forskerne fant ut at det var skikkelig mye plast i havet" hører ikke hjemme i en fagartikkel. "Forskerne fant betydelige mengder plast i havet" er bedre. Men unnga ogsa a gjore spraket unodvendig komplisert. Du skriver ikke for a imponere med lange ord - du skriver for a bli forstaat.

Bruk fagbegreper nar de trengs, men forklar dem forste gang du bruker dem. Ikke alle lesere vet hva "fotosynsese" eller "fordismen" betyr. En kort forklaring gjor teksten tilgjengelig uten a dumme den ned.

Vaer forsiktig med personlige pronomen. "Jeg mener at..." og "vi synes at..." passer bedre i meningsartikler enn i fagartikler. Fagartikkelen skal presentere kunnskap, ikke personlige meninger. Men du kan bruke "vi" i betydningen "vi som leser denne teksten" for a gjore fremstillingen mer engasjerende.

Pass pa overgangene. Ord som "derfor", "imidlertid", "i tillegg" og "pa den annen side" hjelper leseren a folge tankegangen din. De er som veiskilt som viser hvor teksten er pa vei.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-5-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv pa sprak og stil i fagartikkelen:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-5-3-n-quiz4-q0',
            task: 'Hvordan bor du handtere fagbegreper i en fagartikkel?',
            options: [
              { id: 'a', text: 'Bruk sa mange som mulig for a virke kunnskapsrik', isCorrect: false },
              { id: 'b', text: 'Unnga dem helt fordi de gjor teksten vanskelig', isCorrect: false },
              { id: 'c', text: 'Bruk dem nar de trengs, og forklar dem forste gang', isCorrect: true },
              { id: 'd', text: 'Bare bruk fagbegreper hvis oppgaven krever det', isCorrect: false },
            ],
            solution: 'Fagbegreper er nyttige fordi de er presise, men de ma forklares for lesere som kanskje ikke kjenner dem. A bruke et begrep og forklare det viser at du behersker stoffet.',
          },
          {
            id: 'norsk-vg1-5-3-n-quiz4-q1',
            task: 'Hva er galt med setningen "Forskerne fant ut at det var skikkelig mye plast i havet" i en fagartikkel?',
            options: [
              { id: 'a', text: 'Den er for kort', isCorrect: false },
              { id: 'b', text: 'Den bruker muntlig sprak og slang ("skikkelig mye") som ikke passer i en fagartikkel', isCorrect: true },
              { id: 'c', text: 'Den handler om plast, ikke om temaet', isCorrect: false },
              { id: 'd', text: 'Den mangler kildehenvisning', isCorrect: false },
            ],
            solution: 'Fagartikkelen krever saklig og presist sprak. "Skikkelig mye" er muntlig og upresist. Bedre: "betydelige mengder". Du skriver ikke for a imponere, men for a bli forstatt - og saklig sprak signaliserer troverdighet.',
          },
          {
            id: 'norsk-vg1-5-3-n-quiz4-q2',
            task: 'Hva er rollen til overgangsord som "derfor", "imidlertid" og "i tillegg"?',
            options: [
              { id: 'a', text: 'De gjor teksten lengre og mer imponerende', isCorrect: false },
              { id: 'b', text: 'De er unodvendige og bor unngaas', isCorrect: false },
              { id: 'c', text: 'De er som veiskilt som hjelper leseren a folge tankegangen din', isCorrect: true },
              { id: 'd', text: 'De brukes bare i avslutningen', isCorrect: false },
            ],
            solution: 'Overgangsord viser sammenhengen mellom avsnitt og setninger. "Derfor" signaliserer arsak-virkning, "imidlertid" signaliserer motsetning, "i tillegg" legger til noe nytt. De gjor teksten lettere a folge.',
          },
        ],
      },
    },

    // ========== SEKSJON 5: Fra utkast til ferdig tekst ==========
    {
      id: 'norsk-vg1-5-3-n-section5',
      type: 'text',
      content: `## Den siste finpussen

Du har undersøkt temaet. Du har samlet kilder. Du har skrevet et forste utkast. Men du er ikke ferdig. Revisjonen er der fagartikkelen din gar fra ok til god.

Forst, les gjennom for innhold. Svarer teksten pa problemstillingen? Er alle pastandene begrunnet? Mangler det viktig informasjon? Er det noe overflodig som kan kuttes? Strukturen - er den logisk og lett a følge?

Deretter, les for sprak. Er setningene klare? Er ordvalget presist? Er det variasjon i setningslengde og -bygning? Er overgangene gode? Les gjerne hoyt - det avslorer problemer du ikke ser nar du leser stille.

Sa, sjekk kildebruken. Er alle parafraserte og siterte steder markert med kildehenvisninger? Stemmer henvisningene overens med kildelisten? Er kildelisten fullstendig og korrekt formatert?

Til slutt, korrekturles. Skrivefeil, kommafeil, og andre sma feil distraherer leseren og kan undergrave troverdigheten din. Bruk stavekontroll, men stol ikke blindt pa den - den fanger ikke alle feil.

Hvis du har tid, la teksten ligge en dag eller to før du leser gjennom en siste gang. Avstand gir perspektiv. Du ser teksten med friske oyne og oppdager ting du ikke sa for.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-5-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv pa revisjon av fagartikkelen:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-5-3-n-quiz5-q0',
            task: 'Hvorfor bor du la teksten ligge en stund for du leser gjennom siste gang?',
            options: [
              { id: 'a', text: 'Fordi du trenger a hvile fra skriving', isCorrect: false },
              { id: 'b', text: 'Fordi avstand gir perspektiv og du ser teksten med friske oyne', isCorrect: true },
              { id: 'c', text: 'Fordi laereren krever det', isCorrect: false },
              { id: 'd', text: 'Fordi det er lettere a huske hva du har skrevet', isCorrect: false },
            ],
            solution: 'Nar du har jobbet intenst med en tekst, blir du blind for feil og svakheter. Tid og avstand gjor at du kan se teksten mer objektivt, nesten som om noen andre hadde skrevet den.',
          },
          {
            id: 'norsk-vg1-5-3-n-quiz5-q1',
            task: 'I hvilken rekkefolge bor du sjekke teksten nar du reviderer?',
            options: [
              { id: 'a', text: 'Skrivefeil forst, deretter innhold', isCorrect: false },
              { id: 'b', text: 'Kildelisten forst, deretter alt annet', isCorrect: false },
              { id: 'c', text: 'Innhold forst, deretter sprak, sa kildebruk, til slutt korrektur', isCorrect: true },
              { id: 'd', text: 'Rekkefolgen spiller ingen rolle', isCorrect: false },
            ],
            solution: 'Start med de store tingene - innhold og struktur. Deretter sprak og formulering. Sa kildebruk og referanser. Til slutt korrektur av skrivefeil. Det nytter ikke a polere setninger du kanskje kutter.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-5-3-n-summary',
      type: 'text',
      content: `## Oppsummering: Fagartikkelens handverk

Du har na gjennomgaatt fagartikkelens viktigste elementer. Her er hovedpunktene:

**Problemstillingen:**
Avgrenset, undersokbar og noytral. Den styrer hele teksten din og hjelper deg a holde fokus.

**Strukturen:**
Innledning som presenterer tema og problemstilling, hoveddel som utforsker systematisk med ett poeng per avsnitt, avslutning som oppsummerer og besvarer problemstillingen, kildeliste til slutt.

**Kildebruk:**
Bruk sitat nar ordlyden er viktig, parafrase ellers. Kildehenvisninger i lopende tekst, fullstendig informasjon i kildelisten. Aerlig og etterrettelig.

**Sprak:**
Saklig og presist, men ikke unødvendig komplisert. Fagbegreper forklares. Gode overganger. Unnga muntlig sprak og for mye "jeg".

**Revisjon:**
Les for innhold, deretter sprak, sa kildebruk, til slutt korrektur. La teksten hvile om mulig.

**Nøkkelbegreper:**
Problemstilling, kildehenvisning, sitat, parafrase, kildeliste, fagsprak, revisjon.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.4 NARRATIV: Skriveprosess og revisjon
// ============================================================================

export const CHAPTER_NORSK_VG1_5_4_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-5-4-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '5.4',
  title: 'Skriveprosess og revisjon',
  subtitle: 'Narrativ versjon',
  description: 'Fra blankt ark til polert tekst - reisen som gjor deg til en bedre skribent.',
  estimatedMinutes: 35,
  competenceGoals: [
    'bruke ulike skrivestrategier og tilpasse skriving til formaal og mottaker',
    'gi og motta tilbakemelding pa tekster og bruke dette i egen skriving',
  ],
  linkedChapterId: 'norsk-vg1-5-4',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-5-4-n-intro',
      type: 'text',
      content: `## Hemmeligheten de beste skribentene kjenner

Her er noe som kan forandre maten du tenker pa skriving: De beste tekstene du har lest - de mest velformulerte artiklene, de mest engasjerende romanene, de mest overbevisende talene - ingen av dem ble skrevet perfekt forste gang.

Ernest Hemingway skal ha sagt: "The first draft of anything is shit." Kanskje litt grovt, men poenget er viktig. Forste utkast er bare begynnelsen. Det er i omskrivingen, i revisjonen, at teksten blir god.

Dette er frigjørende. Det betyr at du ikke trenger a vaere perfekt nar du skriver. Du trenger bare a skrive. Skriv darlig hvis du ma. Skriv rotete og ustrukturert og fullt av feil. Alt dette kan fikses senere. Det eneste du ikke kan fikse er en tom side.

I dette kapittelet skal vi utforske skriveprosessen fra start til slutt. Du skal laere teknikker for a komme i gang nar du star fast, strategier for a strukturere tankene dine, og metoder for a revidere teksten til den skinner. For skriving er ikke et talent - det er en prosess. Og prosesser kan laeres.`,
    },

    // ========== SEKSJON 1: Forskriving og ideutvikling ==========
    {
      id: 'norsk-vg1-5-4-n-section1',
      type: 'text',
      content: `## For du skriver

Mange hopper rett inn i skrivingen uten a forberede seg. De stirrer pa den tomme siden og venter pa at ordene skal komme. Ofte kommer de ikke, og frustrasjonen vokser.

Forskrivingsfasen er losningen. Det er alt du gjor for du faktisk skriver teksten - idemyldring, research, planlegging. Denne fasen sparer deg for tid og hodebry senere.

Friskriving er en kraftfull teknikk. Sett en timer pa ti minutter. Skriv om temaet ditt uten a stoppe, uten a rette feil, uten a sensurere deg selv. La tankene stromme fritt. Det meste blir kanskje ubrukelig, men et sted i rotet finner du ofte gull - en ide, et perspektiv, en formulering du kan bygge videre pa.

Tankekart er nyttige for a se sammenhenger. Skriv temaet i midten av et ark. Tegn grener ut med undertemaer, eksempler, sporsmal. Etter hvert ser du strukturer og forbindelser du ikke ville oppdaget ellers.

Bruk sporsmaal til a utforske temaet: Hvem? Hva? Hvor? Nar? Hvorfor? Hvordan? Hvert sporsmaal apner nye perspektiver.

Research er ogsa del av forsrivingen. Finn kilder, les, ta notater. Men pass pa a ikke bli sittende fast i research-fasen - pa et tidspunkt ma du begynne a skrive.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-5-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa forskriving og ideutvikling:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-5-4-n-quiz1-q0',
            task: 'Hva er hovedpoenget med friskriving?',
            options: [
              { id: 'a', text: 'A skrive perfekte setninger fra starten', isCorrect: false },
              { id: 'b', text: 'A la tankene stromme fritt uten a sensurere seg selv', isCorrect: true },
              { id: 'c', text: 'A imponere laereren med lange tekster', isCorrect: false },
              { id: 'd', text: 'A unnga a gjore research forst', isCorrect: false },
            ],
            solution: 'Friskriving handler om a fa tankene ned pa papiret uten a stoppe for a vurdere kvaliteten. Ved a skrive uavbrutt i en bestemt tid, overvinner du blokkeringer og oppdager ofte ideer du ikke visste at du hadde.',
          },
          {
            id: 'norsk-vg1-5-4-n-quiz1-q1',
            task: 'Hva er fordelen med a bruke tankekart i forskrivingsfasen?',
            options: [
              { id: 'a', text: 'Det gjor teksten penere', isCorrect: false },
              { id: 'b', text: 'Det erstatter behovet for a skrive utkast', isCorrect: false },
              { id: 'c', text: 'Det hjelper deg a se sammenhenger og strukturer mellom ideer', isCorrect: true },
              { id: 'd', text: 'Det er et krav fra laereren', isCorrect: false },
            ],
            solution: 'Tankekart lar deg visuelt organisere temaet med undertemaer, eksempler og sporsmal. Etter hvert ser du forbindelser og strukturer du ikke ville oppdaget ved bare a tenke lineaert.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Utkast og skrivestrategier ==========
    {
      id: 'norsk-vg1-5-4-n-section2',
      type: 'text',
      content: `## A fa ordene ut

Na har du forberedt deg. Du har ideer, kanskje en disposisjon. Det er tid for a skrive forste utkast.

Her er den viktigste regelen: Ikke stopp for a rette feil. Ikke ga tilbake og les det du har skrevet. Bare skriv. Forste utkast er raamateriale du skal jobbe med senere. Jo fortere du far det ned, jo mer tid har du til a forbedre det.

Men hva hvis du star fast? Prov a starte et annet sted. Du trenger ikke skrive innledningen forst. Skriv avsnittet du er mest sikker pa, og fyll inn resten etterpå.

En annen strategi er a snakke forst. Forklar hoyt for deg selv hva du vil si - til et speil, til en venn, eller til luften. Muntlig sprak er ofte mer naturlig enn skriftlig. Sa skriver du ned det du nettopp sa.

Forestill deg en konkret leser. Ikke "alle" eller "noen", men en bestemt person. Kanskje en venn, kanskje en forste-aring som ikke vet noe om temaet. Skriv til dem. Det hjelper deg a holde fokus og velge riktig nivaa.

Sett tidsfrister for deg selv. "Om en time skal jeg ha skrevet to sider." Deadlines skaper energi og motvirker perfeksjonisme. Marker steder du er usikker pa med en markør - [SJEKK DETTE] - og fortsett. Du kan ga tilbake senere.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-5-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa skrivestrategier:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-5-4-n-quiz2-q0',
            task: 'Hva bor du gjore nar du skriver forste utkast og star fast?',
            options: [
              { id: 'a', text: 'Gi opp og begynne pa noe annet', isCorrect: false },
              { id: 'b', text: 'Ga tilbake og perfeksjonere det du allerede har skrevet', isCorrect: false },
              { id: 'c', text: 'Prove a starte et annet sted i teksten eller forklare hoyt for deg selv', isCorrect: true },
              { id: 'd', text: 'Vente til inspirasjonen kommer tilbake', isCorrect: false },
            ],
            solution: 'Nar du star fast, hjelper det ofte a bytte strategi. Start et annet sted i teksten, der du er mer sikker. Eller forklar hoyt for deg selv hva du vil si - muntlig sprak er ofte mer naturlig og kan la seg overfore til skrift.',
          },
          {
            id: 'norsk-vg1-5-4-n-quiz2-q1',
            task: 'Hvorfor er det lurt a forestille seg en konkret leser nar du skriver?',
            options: [
              { id: 'a', text: 'Fordi du bare skriver for en person', isCorrect: false },
              { id: 'b', text: 'Det hjelper deg a holde fokus og velge riktig niva', isCorrect: true },
              { id: 'c', text: 'Fordi laereren vil vite hvem du skriver til', isCorrect: false },
              { id: 'd', text: 'Fordi det gjor teksten mer personlig', isCorrect: false },
            ],
            solution: 'A skrive til "alle" gjor det vanskelig a velge riktig tone og niva. En konkret leser - en venn, en forsteklassing - gir deg et holdepunkt for hva du trenger a forklare og hvordan du bor formulere deg.',
          },
          {
            id: 'norsk-vg1-5-4-n-quiz2-q2',
            task: 'Hva betyr [SJEKK DETTE]-markorer i et utkast?',
            options: [
              { id: 'a', text: 'At teksten er ferdig og klar for innlevering', isCorrect: false },
              { id: 'b', text: 'Steder du er usikker pa som du kan ga tilbake til senere, slik at du kan fortsette a skrive', isCorrect: true },
              { id: 'c', text: 'Feil som ma rettes for du gar videre', isCorrect: false },
              { id: 'd', text: 'Kommentarer til laereren', isCorrect: false },
            ],
            solution: 'Markorer lar deg flagge usikre steder uten a stoppe opp. Du fortsetter skrivingen og gar tilbake senere. Dette holder flyten i gang og motvirker perfeksjonisme som hemmer forste utkast.',
          },
        ],
      },
    },

    // ========== SEKSJON 3: Revisjon - den egentlige skrivingen ==========
    {
      id: 'norsk-vg1-5-4-n-section3',
      type: 'text',
      content: `## Nar teksten tar form

Ordet "revisjon" kommer fra latin og betyr "a se igjen". Det er nettopp det du gjor - du ser pa teksten din med nye oyne og former den til noe bedre.

Revisjon skjer pa flere nivaer. Pa det globale nivaet ser du pa helheten: Er strukturen logisk? Svarer teksten pa det den lover i innledningen? Mangler det viktig informasjon? Er det noe overflodig?

Pa avsnittsnivået undersoker du byggeklossene: Har hvert avsnitt ett hovedpoeng? Er avsnittene i riktig rekkefølge? Er overgangene mellom dem tydelige?

Pa setningsnivået finjusterer du: Er setningene klare? Er ordvalget presist? Er det variasjon i setningslengde? Er det unodvendige ord som kan kuttes?

En gyllen regel: Ta de store endringene forst. Det nytter ikke a polere enkeltsetninger i et avsnitt du kanskje kutter helt. Jobb fra helheten og innover mot detaljene.

La teksten hvile mellom utkast hvis du kan. En dag, noen timer - uansett hva du har tid til. Avstand gjor at du ser teksten mer objektivt. Det som virket perfekt i gar, avslorer svakheter i dag.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-5-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa revisjon:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-5-4-n-quiz3-q0',
            task: 'Hva er forskjellen mellom revisjon og korrektur?',
            options: [
              { id: 'a', text: 'Det er ingen forskjell - begrepene betyr det samme', isCorrect: false },
              { id: 'b', text: 'Revisjon handler om innhold og struktur, korrektur handler om sprak og rettskriving', isCorrect: true },
              { id: 'c', text: 'Revisjon er for profesjonelle, korrektur er for elever', isCorrect: false },
              { id: 'd', text: 'Korrektur kommer for revisjon', isCorrect: false },
            ],
            solution: 'Revisjon handler om de store tingene - innhold, struktur, argumentasjon. Korrektur handler om de sma tingene - rettskriving, tegnsetting, grammatikk. Revisjon bor gjores for korrektur, fordi det ikke nytter a rette skrivefeil i tekst du kanskje kutter.',
          },
          {
            id: 'norsk-vg1-5-4-n-quiz3-q1',
            task: 'Hva betyr ordet "revisjon" opprinnelig?',
            options: [
              { id: 'a', text: 'A skrive pa nytt', isCorrect: false },
              { id: 'b', text: 'A rette feil', isCorrect: false },
              { id: 'c', text: 'A se igjen - a se pa teksten med nye oyne', isCorrect: true },
              { id: 'd', text: 'A korrigere grammatikk', isCorrect: false },
            ],
            solution: 'Revisjon kommer fra latin og betyr "a se igjen". Du ser pa teksten din med nye oyne og former den til noe bedre - fra helheten (struktur, innhold) ned til detaljene (setninger, ordvalg).',
          },
          {
            id: 'norsk-vg1-5-4-n-quiz3-q2',
            task: 'Hvorfor bor du ta de store endringene forst under revisjon?',
            options: [
              { id: 'a', text: 'Fordi de er mest interessante', isCorrect: false },
              { id: 'b', text: 'Fordi det ikke nytter a polere enkeltsetninger i tekst du kanskje kutter', isCorrect: true },
              { id: 'c', text: 'Fordi sma endringer er vanskeligst', isCorrect: false },
              { id: 'd', text: 'Fordi laereren bare ser pa strukturen', isCorrect: false },
            ],
            solution: 'Hvis du bruker tid pa a perfeksjonere enkeltsetninger i et avsnitt du kanskje fjerner helt, har du kastet bort tid. Jobb fra helheten og innover: forst struktur, sa avsnitt, sa setninger, til slutt enkeltord.',
          },
        ],
      },
    },

    // ========== SEKSJON 4: Tilbakemelding og samarbeid ==========
    {
      id: 'norsk-vg1-5-4-n-section4',
      type: 'text',
      content: `## Andre oyne

Du er blind for dine egne svakheter. Det er menneskelig. Du vet hva du mente a si, og derfor ser du hva du mente a skrive, selv nar det ikke star der. Derfor er tilbakemelding fra andre sa verdifullt.

Nar du gir tilbakemelding, vaer konkret og konstruktiv. "Denne setningen er uklar" er mer nyttig enn "dette er darlig". "Kan du utdype eksemplet i avsnitt tre?" er mer nyttig enn "hoveddelen trenger arbeid". Pek pa styrker sa vel som svakheter. Foreslaa losninger, ikke bare problemer.

Nar du mottar tilbakemelding, lytt apent. Ikke ga i forsvar. Still sporsmal for a forsta. Husk at tilbakemeldingen gjelder teksten, ikke deg som person.

Du trenger ikke bruke all tilbakemelding du far. Vurder hva som er nyttig for teksten din. Noen ganger tar responsgiveren feil, eller foreslaar noe som ikke passer med det du vil si. Det er lov a vaere uenig. Men hvis flere peker pa det samme problemet, bor du ta det pa alvor.

Tilbakemelding er et verktoy, ikke en dom. De beste skribentene soker aktivt etter respons og bruker den til a bli bedre.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-5-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv pa tilbakemelding og samarbeid:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-5-4-n-quiz4-q0',
            task: 'Hva er det viktigste a huske nar du mottar tilbakemelding pa en tekst?',
            options: [
              { id: 'a', text: 'Du ma bruke all tilbakemelding du far', isCorrect: false },
              { id: 'b', text: 'Tilbakemeldingen gjelder teksten, ikke deg som person', isCorrect: true },
              { id: 'c', text: 'Du bor forsvare teksten din mot all kritikk', isCorrect: false },
              { id: 'd', text: 'Bare tilbakemelding fra laereren er viktig', isCorrect: false },
            ],
            solution: 'Det er naturlig a fole tilbakemelding personlig, men kritikk av teksten din er ikke kritikk av deg. Ved a skille disse fra hverandre kan du bruke tilbakemelding konstruktivt til a forbedre skrivingen din.',
          },
          {
            id: 'norsk-vg1-5-4-n-quiz4-q1',
            task: 'Nar bor du ta tilbakemelding ekstra seriost?',
            options: [
              { id: 'a', text: 'Nar den kommer fra laereren', isCorrect: false },
              { id: 'b', text: 'Nar den er positiv', isCorrect: false },
              { id: 'c', text: 'Nar flere peker pa det samme problemet', isCorrect: true },
              { id: 'd', text: 'Nar den er skriftlig', isCorrect: false },
            ],
            solution: 'Hvis flere uavhengige lesere peker pa det samme problemet, er det et sterkt signal om at noe bor endres. En enkeltpersons tilbakemelding kan vaere feilrettet, men nar monsteretgaar igjen, bor du lytte.',
          },
        ],
      },
    },

    // ========== SEKSJON 5: Egenvurdering og utvikling ==========
    {
      id: 'norsk-vg1-5-4-n-section5',
      type: 'text',
      content: `## A bli din egen beste kritiker

Til slutt handler det om a utvikle evnen til a vurdere dine egne tekster. Dette er en ferdighet som vokser over tid, men det finnes teknikker som hjelper.

Les teksten hoyt. Munnen og oret fanger ting oyet overser. Klosete formuleringer, unaturlige rytmer, setninger som ikke henger sammen - alt dette blir tydeligere nar du horer det.

Bruk en sjekkliste. For du leverer, ga gjennom teksten punkt for punkt: Svarer jeg pa oppgaven? Er innledningen engasjerende? Har jeg belegg for pastandene mine? Er strukturen logisk? Er sprakbruken tilpasset mottakeren? Er det skrivefeil?

Sammenlign med gode tekster. Les modelltekster og legg merke til hva som gjor dem gode. Kan du bruke lignende teknikker? Denne sammenligningen gjor deg mer bevisst pa hva kvalitet er.

Still deg selv kritiske sporsmal: Hva er det svakeste punktet i teksten min? Hvis jeg hadde en time til, hva ville jeg jobbet med? Hva ville en skeptisk leser innvende?

Egenvurdering gjor deg til en mer selvstendig skribent. Du trenger ikke vente pa at noen andre skal fortelle deg hva som er bra og darlig - du kan se det selv.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-5-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv pa egenvurdering og skriveprosessen:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-5-4-n-quiz5-q0',
            task: 'Hva er riktig rekkefolge pa fasene i skriveprosessen?',
            options: [
              { id: 'a', text: 'Utkast, forskriving, redigering, revisjon, ferdigstilling', isCorrect: false },
              { id: 'b', text: 'Forskriving, utkast, revisjon, redigering, ferdigstilling', isCorrect: true },
              { id: 'c', text: 'Revisjon, utkast, forskriving, redigering, ferdigstilling', isCorrect: false },
              { id: 'd', text: 'Forskriving, revisjon, utkast, redigering, ferdigstilling', isCorrect: false },
            ],
            solution: 'Skriveprosessen folger en logisk rekkefolge: forst forbereder du deg (forskriving), sa skriver du (utkast), deretter forbedrer du innhold og struktur (revisjon), sa polerer du spraket (redigering), og til slutt ferdigstiller du teksten.',
          },
          {
            id: 'norsk-vg1-5-4-n-quiz5-q1',
            task: 'Hvorfor er det nyttig a lese teksten hoyt under egenvurdering?',
            options: [
              { id: 'a', text: 'Fordi det er morsomt', isCorrect: false },
              { id: 'b', text: 'Fordi munnen og oret fanger klosete formuleringer og unaturlige rytmer som oyet overser', isCorrect: true },
              { id: 'c', text: 'Fordi du husker bedre det du leser hoyt', isCorrect: false },
              { id: 'd', text: 'Fordi laereren vil hore teksten din', isCorrect: false },
            ],
            solution: 'Nar du leser hoyt, horer du problemer du ikke ser. Klosete formuleringer, unaturlige rytmer, setninger som ikke henger sammen - alt dette blir tydeligere nar du horer det med dine egne orer.',
          },
          {
            id: 'norsk-vg1-5-4-n-quiz5-q2',
            task: 'Hva er det langsiktige malet med alt responsarbeid?',
            options: [
              { id: 'a', text: 'A fa gode karakterer', isCorrect: false },
              { id: 'b', text: 'A bli populaer blant medelever', isCorrect: false },
              { id: 'c', text: 'A utvikle evnen til a vurdere egne tekster selvstendig', isCorrect: true },
              { id: 'd', text: 'A skrive raskere', isCorrect: false },
            ],
            solution: 'Egenvurdering er det langsiktige malet. Du skal bli i stand til a se styrker og svakheter i egne tekster uten a vaere avhengig av andres respons. Sjekklister, hoytlesing og sammenligning med modelltekster er verktoy for a utvikle dette.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-5-4-n-summary',
      type: 'text',
      content: `## Oppsummering: Skribentens verktøykasse

Du har na laert om skriveprosessen fra start til slutt. Her er hovedpunktene:

**Førskriving:**
Bruk friskriving, tankekart og spørsmaal for a utvikle ideer. Gjor research. Lag en disposisjon.

**Utkast:**
Skriv uten a stoppe for a rette. Start der det er lettest. Forestill deg en konkret leser. Sett tidsfrister.

**Revisjon:**
Jobb fra det globale til det detaljerte - struktur for avsnitt for setninger. La teksten hvile mellom utkast.

**Tilbakemelding:**
Gi konkret og konstruktiv respons. Motta tilbakemelding apent. Vurder hva som er nyttig. Husk at det gjelder teksten, ikke deg.

**Egenvurdering:**
Les hoyt, bruk sjekklister, sammenlign med modelltekster, still kritiske sporsmal.

**Nøkkelbegreper:**
Førskriving, friskriving, tankekart, utkast, revisjon, redigering, korrektur, tilbakemelding, egenvurdering.

Husk: Skriving er omskriving. Forste utkast er bare begynnelsen.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.5 NARRATIV: Tolkende og analyserende tekst
// ============================================================================

export const CHAPTER_NORSK_VG1_5_5_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-5-5-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '5.5',
  title: 'Tolkende og analyserende tekst',
  subtitle: 'Narrativ versjon',
  description: 'Avdekk tekstenes hemmeligheter - bli en mester i a lese mellom linjene.',
  estimatedMinutes: 40,
  competenceGoals: [
    'analysere og tolke tekster og bruke fagbegreper',
    'skrive tekster med klart uttrykt tema og god struktur',
    'begrunne egne tolkninger med utgangspunkt i teksten',
  ],
  linkedChapterId: 'norsk-vg1-5-5',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-5-5-n-intro',
      type: 'text',
      content: `## A apne teksten

Foran deg ligger en tekst. Kanskje en novelle, et dikt, eller en tale. Pa overflaten er det bare ord pa papir. Men under ordene skjuler det seg lag pa lag av mening - symboler, strukturer, valg forfatteren har gjort for a pavirke deg pa bestemte mater.

A skrive en tolkende og analyserende tekst handler om a avdekke disse lagene. Det handler om a vise hvordan teksten virker, og hva den betyr utover det bokstavelige.

Dette er kanskje den mest krevende formen for skriving du møter pa videregaende. Du skal ikke bare lese og forsta - du skal forklare din forstaelse for andre. Du skal argumentere for dine tolkninger med belegg fra teksten. Du skal bruke fagbegreper presist og vise at du behersker analysens handverk.

Men det er ogsa en av de mest givende formene for skriving. Nar du virkelig trenger inn i en tekst og forstaar hvordan den virker, apner det seg nye verdener. Du ser ting du ikke sa for. Du forstaar hvorfor enkelte tekster griper deg, mens andre faller flate. Du blir en bedre leser - og en bedre skribent.`,
    },

    // ========== SEKSJON 1: Analyse vs. tolkning ==========
    {
      id: 'norsk-vg1-5-5-n-section1',
      type: 'text',
      content: `## To sider av samme mynt

Analyse og tolkning er beslektede, men ikke identiske. A forsta forskjellen er nøkkelen til a mestre sjangeren.

Analyse handler om hvordan teksten er laget. Du bryter den ned i bestanddeler og undersoker dem. Hvilken synsvinkel bruker forfatteren? Hvordan er teksten strukturert? Hvilke virkemidler - metaforer, kontraster, gjentakelser - er i bruk? Analysen er deskriptiv: Du beskriver det som faktisk star i teksten.

Tolkning handler om hva teksten betyr. Du gar utover det bokstavelige og finner dypere mening. Hva symboliserer det morke rommet i novellen? Hva vil forfatteren si oss om kjærlighet, dod, eller samfunnet? Tolkningen er mer subjektiv, men den ma forankres i teksten.

I praksis fletter analyse og tolkning seg sammen. Du analyserer et virkemiddel for a forklare hvordan det skaper mening. Du tolker en scene med utgangspunkt i spraaklige detaljer du har identifisert.

Fallgruven er a tolke uten a analysere. Det blir synsing - "jeg foler at teksten handler om ensomhet" - uten belegg. Den andre fallgruven er a analysere uten a tolke. Det blir en torr katalog over virkemidler som ikke forklarer hva de betyr.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-5-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa analyse og tolkning:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-5-5-n-quiz1-q0',
            task: 'Hva er hovedforskjellen mellom analyse og tolkning?',
            options: [
              { id: 'a', text: 'Analyse er for eksperter, tolkning er for elever', isCorrect: false },
              { id: 'b', text: 'Analyse handler om hvordan teksten er laget, tolkning om hva den betyr', isCorrect: true },
              { id: 'c', text: 'Det er ingen forskjell - begrepene betyr det samme', isCorrect: false },
              { id: 'd', text: 'Analyse er subjektiv, tolkning er objektiv', isCorrect: false },
            ],
            solution: 'Analyse undersoker tekstens virkemidler og struktur - hvordan den er laget. Tolkning handler om a finne mening utover det bokstavelige - hva teksten betyr. Gode analyserende tekster kombinerer begge.',
          },
          {
            id: 'norsk-vg1-5-5-n-quiz1-q1',
            task: 'Hva er den vanligste fallgruven nar man tolker en tekst?',
            options: [
              { id: 'a', text: 'A bruke for mange fagbegreper', isCorrect: false },
              { id: 'b', text: 'A tolke uten a analysere - synsing uten belegg fra teksten', isCorrect: true },
              { id: 'c', text: 'A sitere for mye fra teksten', isCorrect: false },
              { id: 'd', text: 'A skrive for korte avsnitt', isCorrect: false },
            ],
            solution: 'A tolke uten belegg blir synsing - "jeg foler at teksten handler om ensomhet" uten a forklare hvorfor. Tolkning ma forankres i teksten gjennom analyse av konkrete spraaklige detaljer og virkemidler.',
          },
        ],
      },
    },

    // ========== SEKSJON 2: Strukturen som virker ==========
    {
      id: 'norsk-vg1-5-5-n-section2',
      type: 'text',
      content: `## Byggesteiner i den analyserende teksten

En analyserende tekst har en tydelig struktur som gjor det lett for leseren a folge argumentasjonen din.

Innledningen gjor flere ting. Du presenterer teksten - tittel, forfatter, sjanger, utgivelsesar. Du sier kort hva teksten handler om, uten a gi et langt referat. Og du formulerer hva du skal undersoke - ditt fokus eller din problemstilling. En god innledning fanger ogsa leserens interesse, kanskje ved a peke pa noe spesielt ved teksten.

Hoveddelen er der analysen og tolkningen skjer. Organiser stoffet tematisk - ett hovedpoeng per avsnitt. Start hvert avsnitt med en pastand, stott den med analyse av konkrete teksteksempler, og forklar hva dette betyr for tolkningen. Denne strukturen - pastand, belegg, forklaring - er grunnleggende for all akademisk argumentasjon.

Avslutningen oppsummerer hovedfunnene og svarer pa fokussprsmalet fra innledningen. Her trekker du tradene sammen og viser helheten. Du kan ogsa sette teksten i en storre sammenheng - litteraturhistorisk, samfunnsmessig, eller tematisk.

Gjennom hele teksten ma du balansere mellom tekstnaer analyse og overordnet tolkning. For mye tekstnaerhet blir detaljfokusert uten retning. For mye overbygning blir spekulasjon uten belegg.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-5-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa strukturen i analyserende tekst:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-5-5-n-quiz2-q0',
            task: 'Hva bor innledningen i en analyserende tekst inneholde?',
            options: [
              { id: 'a', text: 'Et detaljert referat av hele handlingen', isCorrect: false },
              { id: 'b', text: 'Presentasjon av teksten, kort om innholdet, og fokus for analysen', isCorrect: true },
              { id: 'c', text: 'Bare tittelen pa teksten du analyserer', isCorrect: false },
              { id: 'd', text: 'Din personlige mening om teksten', isCorrect: false },
            ],
            solution: 'Innledningen skal presentere teksten (tittel, forfatter, sjanger, ar), si kort hva den handler om, og formulere hva du skal undersoke. Dette gir leseren kontekst og retning for det som kommer.',
          },
          {
            id: 'norsk-vg1-5-5-n-quiz2-q1',
            task: 'Hva er strukturen pastand-belegg-forklaring?',
            options: [
              { id: 'a', text: 'En mate a skrive innledning pa', isCorrect: false },
              { id: 'b', text: 'Grunnstrukturen i hvert avsnitt: fremme en pastand, stotte den med teksteksempler, og forklare hva det betyr', isCorrect: true },
              { id: 'c', text: 'En alternativ struktur til innledning-hoveddel-avslutning', isCorrect: false },
              { id: 'd', text: 'En teknikk for avslutninger', isCorrect: false },
            ],
            solution: 'Pastand-belegg-forklaring er grunnmonsteret for akademisk argumentasjon. Du fremmer en pastand, stotter den med konkrete teksteksempler (belegg), og forklarer hva dette betyr for tolkningen din.',
          },
          {
            id: 'norsk-vg1-5-5-n-quiz2-q2',
            task: 'Hva bor avslutningen i en analyserende tekst gjore?',
            options: [
              { id: 'a', text: 'Introdusere nye perspektiver du ikke har diskutert', isCorrect: false },
              { id: 'b', text: 'Gjenta alt du har skrevet i hoveddelen', isCorrect: false },
              { id: 'c', text: 'Oppsummere hovedfunn, svare pa fokussporsmalet, og eventuelt sette teksten i storre sammenheng', isCorrect: true },
              { id: 'd', text: 'Bare si at teksten var god', isCorrect: false },
            ],
            solution: 'Avslutningen trekker tradene sammen og viser helheten. Du oppsummerer hovedfunnene, svarer pa fokussporsmalet fra innledningen, og kan eventuelt sette teksten i en storre litteraturhistorisk eller samfunnsmessig sammenheng.',
          },
        ],
      },
    },

    // ========== SEKSJON 3: Belegg og sitatbruk ==========
    {
      id: 'norsk-vg1-5-5-n-section3',
      type: 'text',
      content: `## A prove det du sier

I en analyserende tekst kan du ikke bare pasta ting - du ma bevise dem. Belegget ditt er teksten selv, og sitatbruk er hovedverktøyet.

Et sitat ma alltid kommenteres. Aldri la et sitat sta alene. Forklar hvorfor det er relevant, hva det viser, hvordan det støtter din pastand. Et sitat uten kommentar er som et bevis ingen forklarer for juryen.

Velg sitater med omhu. Siter nar ordlyden er viktig - nar forfatteren har formulert noe pa en mate som viser poenget ditt spesielt godt. Korte sitater integreres i dine egne setninger med anforselsesmerker. Lengre sitater settes som egne avsnitt med innrykk.

Sitater er ikke erstatning for analyse. Noen elever tror at mange sitater viser at de har lest teksten godt. Men sitater uten analyse viser bare at du kan kopiere. Det som imponerer er hva du gjor med sitatene - hvordan du bruker dem til a bygge argumenter.

Bruk ogsa parafrase - a gjengi innholdet med egne ord. Det viser at du har forstaat stoffet, og det gir variasjon i teksten. Husk a referere til hvor i teksten du henter informasjonen ogsa nar du parafraserer.

Veksle mellom naerlesing av enkeltpassasjer og observasjoner om teksten som helhet. Begge er nodvendige for en fullstendig analyse.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-5-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa belegg og sitatbruk:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-5-5-n-quiz3-q0',
            task: 'Hva er belegg i en analyserende tekst?',
            options: [
              { id: 'a', text: 'Din personlige mening', isCorrect: false },
              { id: 'b', text: 'Sitater og eksempler fra teksten som stotter pastandene dine', isCorrect: true },
              { id: 'c', text: 'Informasjon om forfatterens liv', isCorrect: false },
              { id: 'd', text: 'Andre elevers tolkninger', isCorrect: false },
            ],
            solution: 'Belegg er konkrete sitater og eksempler fra teksten du analyserer. De brukes til a bevise pastandene dine. Uten belegg blir analysen bare synsing.',
          },
          {
            id: 'norsk-vg1-5-5-n-quiz3-q1',
            task: 'Hva bor du ALLTID gjore etter a ha brukt et sitat i analysen?',
            options: [
              { id: 'a', text: 'Ga videre til neste poeng', isCorrect: false },
              { id: 'b', text: 'Legge inn et nytt sitat for a forsterke', isCorrect: false },
              { id: 'c', text: 'Kommentere sitatet - forklare hva det viser og hvorfor det er relevant', isCorrect: true },
              { id: 'd', text: 'Oversette det til enklere sprak', isCorrect: false },
            ],
            solution: 'Et sitat skal aldri sta alene. Du ma forklare hvorfor det er relevant, hva det viser, og hvordan det stotter paastanden din. Et sitat uten kommentar er som et bevis ingen forklarer for juryen.',
          },
          {
            id: 'norsk-vg1-5-5-n-quiz3-q2',
            task: 'Hva er forskjellen mellom a bruke sitat og parafrase?',
            options: [
              { id: 'a', text: 'Parafrase trenger ikke kildehenvisning', isCorrect: false },
              { id: 'b', text: 'Sitat er ordrett gjengivelse med anforselstegn, parafrase er gjengivelse med egne ord', isCorrect: true },
              { id: 'c', text: 'Sitat er for noveller, parafrase er for dikt', isCorrect: false },
              { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
            ],
            solution: 'Sitat er ordrett gjengivelse markert med anforselstegn - brukes nar formuleringen er viktig. Parafrase er a gjengi innholdet med egne ord - viser at du har forstatt stoffet. Begge krever referanse til teksten.',
          },
        ],
      },
    },

    // ========== SEKSJON 4: Fagbegreper og presisjon ==========
    {
      id: 'norsk-vg1-5-5-n-section4',
      type: 'text',
      content: `## Ordene som viser at du kan

Fagbegreper er mer enn pynt. De er presise verktoy som lar deg si ting du ikke kunne sagt ellers. A bruke dem riktig viser at du behersker fagets sprak.

For litteraer analyse trenger du begreper som synsvinkel, forteller, komposisjon, spenningskurve, miljoskildring, personskildring. Du trenger ord for virkemidler: metafor, symbol, kontrast, ironi, gjentakelse, frempek.

For sakprosaanalyse trenger du begreper som avsender, mottaker, formal, etos, patos, logos. Du trenger ord for argumentasjonstyper og spraaklige virkemidler.

Bruk begrepene presist. En metafor er ikke det samme som en sammenligning. Ironi er ikke bare sarkasme. Tema er ikke det samme som motiv. Ta deg tid til a laere hva begrepene faktisk betyr, og bruk dem nar de passer - ikke overalt.

Fagbegreper alene er ikke nok. Du ma ogsa forklare hva virkemiddelet gjor i denne spesifikke teksten. A konstatere at forfatteren bruker metaforer er overfladisk. A forklare hvordan en bestemt metafor skaper en bestemt effekt er analyse.

Pass ogsa pa a ikke bli sa opptatt av a identifisere virkemidler at du glemmer a lese teksten. Virkemiddeljakten kan bli en distraksjon fra det som egentlig er viktig: a forsta teksten.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-5-5-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-5-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv pa fagbegreper og presisjon:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-5-5-n-quiz4-q0',
            task: 'Hvordan bor du bruke fagbegreper i en analyserende tekst?',
            options: [
              { id: 'a', text: 'Bruk sa mange som mulig for a virke kunnskapsrik', isCorrect: false },
              { id: 'b', text: 'Bruk dem presist og forklar hva virkemiddelet gjor i akkurat denne teksten', isCorrect: true },
              { id: 'c', text: 'Unnga dem fordi de gjor teksten vanskelig a lese', isCorrect: false },
              { id: 'd', text: 'Bare bruk dem hvis oppgaven eksplisitt ber om det', isCorrect: false },
            ],
            solution: 'Fagbegreper bor brukes presist og med forklaring av effekten. A bare nevne at et virkemiddel er til stede er overfladisk. Det som viser forstaelse er a forklare hva det gjor i denne bestemte teksten.',
          },
          {
            id: 'norsk-vg1-5-5-n-quiz4-q1',
            task: 'Hva er forskjellen mellom tema og motiv?',
            options: [
              { id: 'a', text: 'Det er ingen forskjell', isCorrect: false },
              { id: 'b', text: 'Tema er det overordnede emnet teksten handler om, motiv er gjentakende elementer som bygger opp under temaet', isCorrect: true },
              { id: 'c', text: 'Motiv er viktigere enn tema', isCorrect: false },
              { id: 'd', text: 'Tema brukes bare i sakprosa, motiv bare i skjonnlitteratur', isCorrect: false },
            ],
            solution: 'Tema er det overordnede emnet (f.eks. ensomhet, kjaerlighet). Motiv er konkrete, gjentakende elementer i teksten som bygger opp under temaet - bilder, situasjoner, symboler som gaar igjen. De er beslektet, men ikke det samme.',
          },
          {
            id: 'norsk-vg1-5-5-n-quiz4-q2',
            task: 'Hva er faren med "virkemiddeljakt" i analyse?',
            options: [
              { id: 'a', text: 'Du finner for mange virkemidler', isCorrect: false },
              { id: 'b', text: 'Du kan bli sa opptatt av a identifisere virkemidler at du glemmer a forsta teksten', isCorrect: true },
              { id: 'c', text: 'Det tar for lang tid', isCorrect: false },
              { id: 'd', text: 'Laereren liker ikke det', isCorrect: false },
            ],
            solution: 'Virkemiddeljakt blir en distraksjon nar du bare lister opp virkemidler uten a forklare hva de gjor. Malet er a forsta teksten - virkemidlene er verktoy for forstaelse, ikke et mal i seg selv.',
          },
        ],
      },
    },

    // ========== SEKSJON 5: A argumentere for en tolkning ==========
    {
      id: 'norsk-vg1-5-5-n-section5',
      type: 'text',
      content: `## Din stemme i samtalen

Her er noe viktig: Det finnes sjelden en "riktig" tolkning av en tekst. Litteratur og kunst er apne for mange lesninger. Det som teller er ikke om du treffer en fasit, men om du kan argumentere overbevisende for din tolkning.

Dette betyr ikke at alt er like bra. Noen tolkninger er bedre begrunnet enn andre. Noen tar hensyn til flere deler av teksten. Noen er mer internt konsistente. En tolkning som ignorerer halvparten av teksten, eller som motsis av det som faktisk star der, er svakere enn en som tar hensyn til helheten.

Vær ærlig om usikkerhet. Formuleringer som "dette kan tolkes som" og "en mulig lesning er" viser at du forstaar at tolkning ikke er eksakt vitenskap. Det er sterkere enn a late som om din lesning er den eneste mulige.

Vurder alternative tolkninger. A vise at du har tenkt pa andre mater a lese teksten pa, og forklare hvorfor du likevel lander der du gjor, styrker argumentasjonen din.

Knytt tolkningen til teksten. Den vanligste feilen er a spekulere om hva forfatteren "mente" uten a forankre det i tekstlige bevis. Hold deg til det teksten faktisk sier og gjor.

Til slutt: Var modig. Ta en posisjon. Det er bedre a argumentere for en klar tolkning - selv om den er kontroversiell - enn a sitte pa gjerdet og si at teksten kan bety alt mulig.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-5-5-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-5-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv pa a argumentere for en tolkning:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-5-5-n-quiz5-q0',
            task: 'Hva kjennetegner en god tolkning av en litteraer tekst?',
            options: [
              { id: 'a', text: 'Den treffer den ene riktige meningen forfatteren hadde', isCorrect: false },
              { id: 'b', text: 'Den er godt begrunnet med belegg fra teksten og tar hensyn til helheten', isCorrect: true },
              { id: 'c', text: 'Den er sa generell at ingen kan vaere uenig', isCorrect: false },
              { id: 'd', text: 'Den fokuserer pa forfatterens biografi og intensjoner', isCorrect: false },
            ],
            solution: 'Det finnes sjelden en "riktig" tolkning, men noen tolkninger er bedre enn andre. En god tolkning er godt begrunnet med tekstbelegg, tar hensyn til helheten, og er internt konsistent.',
          },
          {
            id: 'norsk-vg1-5-5-n-quiz5-q1',
            task: 'Hvorfor styrker det argumentasjonen din a vurdere alternative tolkninger?',
            options: [
              { id: 'a', text: 'Fordi du viser usikkerhet, og det er sympatisk', isCorrect: false },
              { id: 'b', text: 'Fordi det viser at du har tenkt pa andre lesninger og kan begrunne hvorfor din er bedre', isCorrect: true },
              { id: 'c', text: 'Fordi laereren gir ekstrapoeng for det', isCorrect: false },
              { id: 'd', text: 'Fordi du ma inkludere minst to tolkninger', isCorrect: false },
            ],
            solution: 'A vise at du har vurdert andre mater a lese teksten pa, og forklare hvorfor du likevel lander der du gjor, viser at tolkingen din er gjennomtenkt. Det styrker argumentasjonen fordi du aktivt har valgt din lesning fremfor alternativene.',
          },
          {
            id: 'norsk-vg1-5-5-n-quiz5-q2',
            task: 'Hva viser formuleringer som "dette kan tolkes som" og "en mulig lesning er"?',
            options: [
              { id: 'a', text: 'At du er usikker og ikke har forstatt teksten', isCorrect: false },
              { id: 'b', text: 'At du er lat og ikke gidder a ta en posisjon', isCorrect: false },
              { id: 'c', text: 'At du forstaar at tolkning ikke er eksakt vitenskap og at flere lesninger er mulige', isCorrect: true },
              { id: 'd', text: 'At du kopierer fra andres analyser', isCorrect: false },
            ],
            solution: 'Slike formuleringer viser akademisk modning - du forstaar at tekster kan leses pa flere mater. Det er sterkere enn a late som om din lesning er den eneste mulige. Men du bor likevel ta en klar posisjon og begrunne den.',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-5-5-n-summary',
      type: 'text',
      content: `## Oppsummering: Analysens verktøy

Du har na laert grunnlaget for a skrive tolkende og analyserende tekster. Her er hovedpunktene:

**Analyse og tolkning:**
Analyse handler om hvordan teksten er laget, tolkning om hva den betyr. Begge ma forankres i teksten.

**Strukturen:**
Innledning med presentasjon og fokus, hoveddel med pastand-belegg-forklaring, avslutning som samler tradene.

**Belegg og sitater:**
Bruk sitater for a bevise pastandene dine. Kommenter alltid sitatene. Velg med omhu.

**Fagbegreper:**
Bruk dem presist, og forklar hva virkemiddelet gjor i akkurat denne teksten. Virkemiddeljakt er ikke mal i seg selv.

**Tolkning:**
Argumenter for din lesning med belegg. Vær ærlig om usikkerhet, men ta en posisjon. Det finnes sjelden en fasit, men noen tolkninger er bedre begrunnet enn andre.

**Nøkkelbegreper:**
Analyse, tolkning, belegg, sitat, parafrase, fagbegreper, virkemiddel, tema, motiv, synsvinkel.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.6 NARRATIV: Respons og tilbakemelding
// ============================================================================

export const CHAPTER_NORSK_VG1_5_6_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-5-6-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '5.6',
  title: 'Respons og tilbakemelding',
  subtitle: 'Narrativ versjon',
  description: 'Fra respons til revisjon - hvordan tilbakemelding gjor deg til en bedre skribent.',
  estimatedMinutes: 30,
  competenceGoals: [
    'gi og motta tilbakemelding pa tekster og bruke dette i egen skriving',
    'bruke ulike skrivestrategier og tilpasse skriving til formaal og mottaker',
    'vurdere og revidere egne tekster ut fra faglige kriterier',
  ],
  linkedChapterId: 'norsk-vg1-5-6',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-5-6-n-intro',
      type: 'text',
      content: `## Gaven fra andre oyne

Du har skrevet en tekst. Du har jobbet med den, tenkt over den, kanskje til og med vaert litt stolt av den. Sa gir du den til noen andre a lese. Og de peker pa problemer du ikke hadde sett. Kanskje gjor det litt vondt. Men det er ogsa verdifullt - for de ser noe du ikke kan se.

Dette er respons: tilbakemelding pa teksten din fra andre lesere. Det er et av de kraftigste verktøyene du har for a bli en bedre skribent. Profesjonelle forfattere har redaktorer. Journalister har deskledere. Forskere har fagfellevurdering. Ingen skriver i et vakuum.

Men respons er ikke magisk. Det kan vaere nyttig eller ubrukelig, hjelpsomt eller saarende, avhengig av hvordan det gis og mottas. I dette kapittelet skal vi utforske hva god respons er, hvordan du gir den, og hvordan du bruker den til a forbedre tekstene dine.

For responsen er ikke malet. Malet er revisjon - a bruke tilbakemeldingene til a gjore teksten bedre. Respons uten revisjon er bortkastet tid. Revisjon uten respons er vanskeligere enn det trenger a vaere.`,
    },

    // ========== SEKSJON 1: Hva er god respons? ==========
    {
      id: 'norsk-vg1-5-6-n-section1',
      type: 'text',
      content: `## Kjennetegnene pa nyttig tilbakemelding

Ikke all tilbakemelding er like nyttig. "Bra jobba!" foler godt, men gir deg ingenting a jobbe med. "Dette er darlig" gjor vondt og gir heller ingenting. God respons er noe helt annet.

God respons er konkret. Den peker pa spesifikke steder i teksten. "Innledningen fanger oppmerksomheten min fordi du starter med et overraskende sporsmaal" er mer nyttig enn "fin innledning". "Jeg mister traaden i avsnitt tre fordi du bytter tema uten overgang" er mer nyttig enn "dette er forvirrende".

God respons er begrunnet. Den forklarer hvorfor noe fungerer eller ikke fungerer. Det hjelper deg a forsta problemet, ikke bare a vite at det finnes.

God respons er konstruktiv. Den foreslaar losninger, ikke bare peker pa problemer. "Hva om du startet med eksemplet og deretter forklarte teorien?" er mer hjelpsomt enn "rekkefølgen er feil".

God respons er balansert. Den ser bade styrker og svakheter. Tekster som bare far kritikk gjor skribenten defensiv og motlos. Tekster som bare far ros lar skribenten ga glipp av forbedringsmuligheter.

God respons er prioritert. Den fokuserer pa det viktigste forst. Hvis strukturen er et problem, er det mindre viktig a kommentere kommabruk.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-5-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa god respons:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-5-6-n-quiz1-q0',
            task: 'Hvilken tilbakemelding er mest nyttig?',
            options: [
              { id: 'a', text: 'Bra jobba med teksten!', isCorrect: false },
              { id: 'b', text: 'Dette er forvirrende a lese.', isCorrect: false },
              { id: 'c', text: 'Jeg mister traaden i avsnitt tre fordi du bytter tema uten overgang.', isCorrect: true },
              { id: 'd', text: 'Teksten trenger mye arbeid.', isCorrect: false },
            ],
            solution: 'God respons er konkret og begrunnet. Den peker pa et spesifikt sted i teksten og forklarer hvorfor det er et problem. Dette gir skribenten noe konkret a jobbe med.',
          },
          {
            id: 'norsk-vg1-5-6-n-quiz1-q1',
            task: 'Hvilke fem kjennetegn har god respons?',
            options: [
              { id: 'a', text: 'Lang, detaljert, kritisk, skriftlig og anonym', isCorrect: false },
              { id: 'b', text: 'Konkret, begrunnet, konstruktiv, balansert og prioritert', isCorrect: true },
              { id: 'c', text: 'Kort, positiv, muntlig, generell og snill', isCorrect: false },
              { id: 'd', text: 'Grundig, negativ, skriftlig, lang og detaljert', isCorrect: false },
            ],
            solution: 'God respons er konkret (peker pa spesifikke steder), begrunnet (forklarer hvorfor), konstruktiv (foreslaar losninger), balansert (ser styrker og svakheter), og prioritert (fokuserer pa det viktigste forst).',
          },
        ],
      },
    },

    // ========== SEKSJON 2: A gi respons ==========
    {
      id: 'norsk-vg1-5-6-n-section2',
      type: 'text',
      content: `## Kunsten a hjelpe andre bli bedre

A gi god respons er en ferdighet i seg selv. Det krever at du leser oppmerksomt, tenker kritisk, og kommuniserer respektfullt.

Start med a lese teksten som en leser, ikke som en kritiker. La deg gripe, la deg forvirre, la deg reagere. Noter hvor du stoppet opp, hvor du mistet interessen, hvor du ble engasjert. Disse spontane reaksjonene er verdifulle.

Deretter leser du mer analytisk. Se pa struktur, argumentasjon, sprak. Identifiser hva som fungerer godt og hva som kan forbedres.

Nar du gir responsen, kan du bruke "sandwich-metoden": start positivt, deretter konstruktiv kritikk, avslutt positivt. Dette er ikke for a vaere snill for snillhetens skyld, men fordi folk tar til seg kritikk bedre nar de ikke foler seg angrepet.

Bruk sporsmaal som verktoy. "Hva mente du med dette?" tvinger ikke din tolkning pa teksten. "Kunne du utdype dette?" apner for at forfatteren selv finner losningen.

Husk at du gir tilbakemelding pa teksten, ikke pa personen. "Argumentet her er uklart" er bedre enn "du er uklar". Det er en viktig forskjell.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-5-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa a gi respons:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-5-6-n-quiz2-q0',
            task: 'Hva er det viktigste malet med a gi respons pa en tekst?',
            options: [
              { id: 'a', text: 'A vise at du er flink til a finne feil', isCorrect: false },
              { id: 'b', text: 'A hjelpe forfatteren a skrive en bedre tekst', isCorrect: true },
              { id: 'c', text: 'A kritisere sa mye som mulig', isCorrect: false },
              { id: 'd', text: 'A rose forfatteren uansett hva som star', isCorrect: false },
            ],
            solution: 'Responsen skal hjelpe forfatteren. Det betyr a peke pa bade styrker og forbedringsmuligheter, a vaere konkret og konstruktiv, og a fokusere pa det som vil gjore mest forskjell for teksten.',
          },
          {
            id: 'norsk-vg1-5-6-n-quiz2-q1',
            task: 'Hva er "sandwich-metoden" i responsgiving?',
            options: [
              { id: 'a', text: 'A dele teksten i tre deler for a analysere', isCorrect: false },
              { id: 'b', text: 'A starte positivt, gi konstruktiv kritikk, og avslutte positivt', isCorrect: true },
              { id: 'c', text: 'A gi tre ulike typer tilbakemelding', isCorrect: false },
              { id: 'd', text: 'A lese teksten tre ganger for du gir respons', isCorrect: false },
            ],
            solution: 'Sandwich-metoden rammer inn konstruktiv kritikk mellom positive kommentarer. Det er ikke for a vaere snill for snillhetens skyld, men fordi folk tar til seg kritikk bedre nar de ikke foler seg angrepet.',
          },
          {
            id: 'norsk-vg1-5-6-n-quiz2-q2',
            task: 'Hvorfor er det viktig a si "argumentet her er uklart" i stedet for "du er uklar"?',
            options: [
              { id: 'a', text: 'Fordi det hores mer akademisk ut', isCorrect: false },
              { id: 'b', text: 'Fordi du gir tilbakemelding pa teksten, ikke pa personen', isCorrect: true },
              { id: 'c', text: 'Fordi laereren foretrekker det', isCorrect: false },
              { id: 'd', text: 'Det spiller ingen rolle hvordan du formulerer det', isCorrect: false },
            ],
            solution: 'A skille mellom tekst og person er grunnleggende i god responsgivning. "Argumentet er uklart" peker pa et konkret problem i teksten. "Du er uklar" angriper personen og skaper forsvar i stedet for laering.',
          },
        ],
      },
    },

    // ========== SEKSJON 3: A motta respons ==========
    {
      id: 'norsk-vg1-5-6-n-section3',
      type: 'text',
      content: `## Nar andre leser deg

A motta kritikk pa noe du har skapt kan vaere utfordrende. Du har lagt arbeid og kanskje folelser i teksten. Nar noen peker pa svakheter, er det naturlig a ville forsvare deg.

Men forsvar hemmer laering. Hvis du bruker all energi pa a forklare hvorfor kritikken er feil, gar du glipp av muligheten til a bli bedre.

Lytt forst. Ikke avbryt. Ta notater. La ordene synke inn for du reagerer. Ofte trenger kritikk tid for a bli forstatt.

Still sporsmal for a forsta bedre. "Kan du gi et eksempel?" "Hvor i teksten tenker du?" "Hva ville du foreslatt?" Sporsmalene viser at du tar responsen seriost og hjelper deg a forsta hva som menes.

Deretter vurderer du. Ikke all respons er like nyttig. Noen ganger tar responsgiveren feil, eller foreslaar noe som ikke passer med det du vil med teksten. Det er lov a vaere uenig. Men hvis flere peker pa det samme problemet, bor du lytte.

Husk: Tilbakemeldingen gjelder teksten, ikke deg. A akseptere at teksten din har svakheter betyr ikke a akseptere at du er en darlig skribent. Alle tekster har svakheter. Det er derfor vi reviderer.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-5-6-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-6-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa a motta respons:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-5-6-n-quiz3-q0',
            task: 'Hva bor du gjore nar du mottar respons pa en tekst?',
            options: [
              { id: 'a', text: 'Forsvare teksten din og forklare hvorfor responsgiveren tar feil', isCorrect: false },
              { id: 'b', text: 'Lytte, ta notater, stille sporsmal, og vurdere hva som er nyttig', isCorrect: true },
              { id: 'c', text: 'Endre alt som blir kritisert umiddelbart', isCorrect: false },
              { id: 'd', text: 'Ignorere responsen og beholde teksten som den er', isCorrect: false },
            ],
            solution: 'Du bor lytte apent, stille sporsmal for a forsta, og deretter vurdere hva av tilbakemeldingene som er nyttig for teksten din. Du trenger ikke bruke alt, men du bor ta det seriost.',
          },
          {
            id: 'norsk-vg1-5-6-n-quiz3-q1',
            task: 'Hvorfor hemmer forsvar laering nar du mottar respons?',
            options: [
              { id: 'a', text: 'Fordi responsgiveren blir sint', isCorrect: false },
              { id: 'b', text: 'Fordi du bruker energi pa a forklare bort kritikken i stedet for a forstaa den', isCorrect: true },
              { id: 'c', text: 'Fordi det tar for lang tid', isCorrect: false },
              { id: 'd', text: 'Fordi laereren noterer det', isCorrect: false },
            ],
            solution: 'Nar du forsvarer deg, lukker du deg for ny informasjon. I stedet for a forstaa hva som kan forbedres, fokuserer du pa a bevise at teksten allerede er god. Du gar glipp av muligheten til a laere.',
          },
        ],
      },
    },

    // ========== SEKSJON 4: Fra respons til revisjon ==========
    {
      id: 'norsk-vg1-5-6-n-section4',
      type: 'text',
      content: `## A gjore teksten bedre

Respons er verdilos hvis du ikke bruker den. Den virkelige jobben begynner nar du setter deg ned med tilbakemeldingene og teksten din.

Forst, sorter. Hva handler om store ting som innhold og struktur? Hva handler om mindre ting som sprak og tegnsetting? Ta de store tingene forst. Det nytter ikke a polere enkeltsetninger i et avsnitt du kanskje kutter.

Deretter, prioriter. Du trenger ikke fikse alt pa en gang. Hva er viktigst? Hva vil gjore storst forskjell for teksten? Start der.

Jobb systematisk. Ta ett problem om gangen. Les gjennom etter hver endring for a sikre at den fungerer og ikke skaper nye problemer.

Nar du har gjort endringene, les helheten pa nytt. Fungerer teksten bedre na? Har endringene skapt sammenheng, eller har de skapt nye hull?

Noen ganger oppdager du at responsen du fikk ikke lostre problemet du trengte a loste. Da ma du selv finne ut hva som mangler. Evnen til a vurdere egen tekst - egenvurdering - er det langsiktige malet med alt responsarbeid.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-5-6-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-6-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv pa fra respons til revisjon:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-5-6-n-quiz4-q0',
            task: 'Hva bor du prioritere forst nar du reviderer basert pa respons?',
            options: [
              { id: 'a', text: 'Skrivefeil og tegnsetting', isCorrect: false },
              { id: 'b', text: 'Store ting som innhold og struktur', isCorrect: true },
              { id: 'c', text: 'Alt pa en gang for a spare tid', isCorrect: false },
              { id: 'd', text: 'Ting du er uenig i forst', isCorrect: false },
            ],
            solution: 'Ta de store tingene forst - innhold og struktur. Det nytter ikke a rette skrivefeil i tekst du kanskje kutter eller skriver om. Jobb fra helheten og innover mot detaljene.',
          },
          {
            id: 'norsk-vg1-5-6-n-quiz4-q1',
            task: 'Hva bor du gjore etter a ha gjort endringer basert pa respons?',
            options: [
              { id: 'a', text: 'Levere teksten umiddelbart', isCorrect: false },
              { id: 'b', text: 'Be om ny respons pa de samme problemene', isCorrect: false },
              { id: 'c', text: 'Lese helheten pa nytt for a sjekke at endringene fungerer og ikke skaper nye problemer', isCorrect: true },
              { id: 'd', text: 'Slette alt og begynne pa nytt', isCorrect: false },
            ],
            solution: 'Etter endringer ma du lese helheten pa nytt. Endringer i en del av teksten kan pavirke andre deler. Du ma sjekke at teksten fortsatt henger sammen og at endringene ikke har skapt nye hull.',
          },
          {
            id: 'norsk-vg1-5-6-n-quiz4-q2',
            task: 'Hva er det langsiktige malet med responsarbeid?',
            options: [
              { id: 'a', text: 'A bli flink til a gi tilbakemelding til andre', isCorrect: false },
              { id: 'b', text: 'A fa gode karakterer', isCorrect: false },
              { id: 'c', text: 'A utvikle evnen til egenvurdering - a kunne vurdere egne tekster selvstendig', isCorrect: true },
              { id: 'd', text: 'A unnga a gjore feil', isCorrect: false },
            ],
            solution: 'Egenvurdering er det ultimate malet. Gjennom a motta og gi respons laerer du a se styrker og svakheter - forst i andres tekster, deretter i dine egne. Du blir din egen beste kritiker.',
          },
        ],
      },
    },

    // ========== SEKSJON 5: Responsgrupper og samarbeid ==========
    {
      id: 'norsk-vg1-5-6-n-section5',
      type: 'text',
      content: `## Sammen om skriving

Responsgrupper er sma grupper av to til fire personer som gir tilbakemelding pa hverandres tekster. Dette er en kraftfull laeringsform fordi du bade far respons pa egen tekst og laerer av a vurdere andres.

Forberedelse er nøkkelen. Les tekstene pa forhand. Noter kommentarer og sporsmal. Tenk pa bade styrker og forbedringsomrader. Hvis du kommer uforberedt, kaster du bort alles tid.

Under responsokten, vær strukturert. La forfatteren lese (eller oppsummere) teksten. Deretter gir hver responsgiver tilbakemelding. Start gjerne med a oppsummere hva du oppfatter at teksten handler om - det avslorer om budskapet kommer frem.

Vær respektfull, men ærlig. Falsk ros hjelper ingen. Unødvendig hard kritikk heller ikke. Mal deg selv pa om du ville likt a fa den tilbakemeldingen du gir.

Som forfatter, lytt aktivt. Ikke forsvar deg. Spor hvis noe er uklart. Takk for tilbakemeldingene, ogsa de du er uenig i.

Det du laerer av a gi respons er nesten like verdifullt som det du laerer av a fa. Nar du vurderer andres tekster kritisk, utvikler du oyet for a se dine egne.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-5-6-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-5-6-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv pa responsgrupper og samarbeid:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-5-6-n-quiz5-q0',
            task: 'Hvorfor er det verdifullt a gi respons til andre, ikke bare a motta?',
            options: [
              { id: 'a', text: 'Fordi laereren krever det', isCorrect: false },
              { id: 'b', text: 'Fordi du laerer a se kritisk pa tekst, noe som hjelper deg med dine egne tekster', isCorrect: true },
              { id: 'c', text: 'Fordi det er snillere a dele pa arbeidet', isCorrect: false },
              { id: 'd', text: 'Fordi du far bedre karakter av a delta aktivt', isCorrect: false },
            ],
            solution: 'Nar du vurderer andres tekster kritisk, trener du oyet for kvalitet. Du laerer a se styrker og svakheter, noe som gjor deg bedre til a vurdere og forbedre dine egne tekster.',
          },
          {
            id: 'norsk-vg1-5-6-n-quiz5-q1',
            task: 'Hva er det viktigste du bor gjore for en responsgruppe-okt?',
            options: [
              { id: 'a', text: 'Skrive ferdig teksten din', isCorrect: false },
              { id: 'b', text: 'Lese andres tekster pa forhand og notere kommentarer', isCorrect: true },
              { id: 'c', text: 'Bestemme deg for hva du skal si', isCorrect: false },
              { id: 'd', text: 'Forberede et forsvar for din egen tekst', isCorrect: false },
            ],
            solution: 'Forberedelse er nøkkelen til gode responsgrupper. A lese tekstene pa forhand og notere kommentarer gjor at okten blir produktiv. Uforberedte deltakere kaster bort alles tid.',
          },
          {
            id: 'norsk-vg1-5-6-n-quiz5-q2',
            task: 'Hvordan bor du balansere aerlighet og respekt i responsgiving?',
            options: [
              { id: 'a', text: 'Vaer bare aelig - folelser spiller ingen rolle', isCorrect: false },
              { id: 'b', text: 'Vaer bare snill - kritikk gjor folk leie seg', isCorrect: false },
              { id: 'c', text: 'Vaer aerlig om bade styrker og svakheter, men kommuniser respektfullt', isCorrect: true },
              { id: 'd', text: 'Gi bare positiv tilbakemelding for a vaere hyggelig', isCorrect: false },
            ],
            solution: 'Falsk ros hjelper ingen, men unodvendig hard kritikk gjor heller ingen bedre. God respons er aerlig om bade styrker og svakheter, men kommunisert pa en mate som motiverer til forbedring. Spor deg selv: Ville jeg likt a fa denne tilbakemeldingen?',
          },
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-5-6-n-summary',
      type: 'text',
      content: `## Oppsummering: Responsens kraft

Du har na laert om hvordan tilbakemelding kan gjore deg til en bedre skribent. Her er hovedpunktene:

**God respons er:**
Konkret, begrunnet, konstruktiv, balansert og prioritert. Den fokuserer pa teksten og gir forfatteren verktoy til a forbedre.

**A gi respons:**
Les som leser forst, deretter analytisk. Bruk sandwich-metoden. Still sporsmal. Husk at du kommenterer teksten, ikke personen.

**A motta respons:**
Lytt uten a forsvare deg. Still sporsmal for a forsta. Vurder hva som er nyttig. Husk at kritikk av teksten ikke er kritikk av deg.

**Fra respons til revisjon:**
Sorter etter storrelse (store ting forst), prioriter det viktigste, jobb systematisk, les helheten til slutt.

**Responsgrupper:**
Forbered deg. Vaer strukturert. Vaer ærlig og respektfull. Laer bade av a fa og gi respons.

**Nøkkelbegreper:**
Respons, konstruktiv kritikk, revisjon, responsgruppe, egenvurdering, sandwich-metoden.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport for Del 6
// ============================================================================

export const NORSK_VG1_NARRATIV_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_NORSK_VG1_5_1_NARRATIV,
  CHAPTER_NORSK_VG1_5_2_NARRATIV,
  CHAPTER_NORSK_VG1_5_3_NARRATIV,
  CHAPTER_NORSK_VG1_5_4_NARRATIV,
  CHAPTER_NORSK_VG1_5_5_NARRATIV,
  CHAPTER_NORSK_VG1_5_6_NARRATIV,
];
