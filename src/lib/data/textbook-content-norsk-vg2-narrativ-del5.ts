/**
 * Norsk VG2 - Narrative versjoner Del 5 (Kapittel 5.1-5.9)
 *
 * Engasjerende, fortellende versjoner av kapitlene om retorikk og skriving.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 5.1 NARRATIV: Retorikkens grunnbegreper
// ============================================================================

export const CHAPTER_NORSK_VG2_5_1_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-5-1-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '5.1',
  title: 'Retorikkens grunnbegreper',
  subtitle: 'Narrativ versjon',
  description:
    'Reis tilbake til antikkens Hellas og oppdag kunsten som har formet sivilisasjonen - overtalelsens kunst.',
  estimatedMinutes: 45,
  competenceGoals: [
    'reflektere over sakprosatekster og retorisk situasjon',
    'skrive fagartikler som drofter tekster i kontekst',
  ],
  linkedChapterId: 'norsk-vg2-5-1',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg2-5-1-n-intro',
      type: 'text',
      content: `## Velkommen til overtalelsens kunst

Forestill deg at du star pa torget i Athen for 2400 ar siden. Rundt deg summer det av stemmer. Borgere diskuterer, krangler og argumenterer. En mann stiger opp pa en stein og begynner a tale. Ordene hans far folkemengden til a lytte, nikke, og til slutt rope i begeistring. Hva er det han gjor? Han bruker retorikk.

Retorikk er kunsten a tale og skrive overbevisende. Det er evnen til a fa andre til a se verden slik du ser den, a tenke det du tenker, a ville det du vil. Og selv om ordet kanskje hores gammeldags ut, er retorikken mer relevant i dag enn noensinne. Hver gang du ser en reklame, leser et debattinnlegg, eller horer en politiker tale, er du vitne til retorikk i aksjon.

I dette kapittelet skal vi reise tilbake til retorikkens fodested. Vi skal mote de greske tenkerne som systematiserte denne kunsten, lare begrepene de skapte, og forsta hvorfor disse ideene fortsatt former maten vi kommuniserer pa i dag. For a forsta retorikken er a forsta noe grunnleggende om mennesket: Vi er vesener som overbevises av ord.`,
    },

    // ========== SEKSJON 1: Retorikkens historie ==========
    {
      id: 'norsk-vg2-5-1-n-section1',
      type: 'text',
      content: `## Fra agora til algoritmer - retorikkens historie

Det hele begynte med demokrati. I antikkens Athen pa 400-tallet for Kristus skjedde noe revolusjonerende: Vanlige borgere fikk makt til a bestemme. Men hvordan skulle beslutninger tas nar alle hadde stemmerett? Gjennom debatt. Gjennom overtalelse. Den som kunne tale best, vant.

Plutselig ble talekunst viktig. Veldig viktig. Hvis du ble anklaget for en forbrytelse, matte du forsvare deg selv i retten, foran hundrevis av meddommere. Hvis du ville fa gjennom et forslag i folkeforsamlingen, matte du overbevise tusenvis. A kunne tale godt var ikke bare fint a ha. Det var et sporsmaal om liv og dod, om makt og avmakt.

Inn pa scenen kom sofistene, omreisende laerere som tilbod undervisning i talekunst mot betaling. De lovet a laere bort hemmeligheten bak overbevisning. Mange ble rike og beromte. Men de fikk ogsa kritikk. Filosofen Platon mente de var mer opptatt av a vinne enn av sannhet. De kunne fa folk til a tro pa hva som helst, sa han, uavhengig av om det var sant eller rettferdig.

Sa kom Aristoteles, Platons elev, og systematiserte det hele. Han skrev verket Retorikken, som fortsatt regnes som grunnboken i faget. For Aristoteles var retorikk ikke noe skittent eller manipulerende. Det var en kunst, en ferdighet, et verktoy som kunne brukes til godt eller ondt, akkurat som en kniv kan brukes til a lage mat eller til a skade.

Fra Hellas spredte retorikken seg til Romerriket. Cicero og Quintilian videreforte tradisjonen. Gjennom middelalderen var retorikk en del av den klassiske utdannelsen. Og i dag? Retorikken lever videre i alt fra politiske taler til sosiale medier, fra reklame til jobbintervjuer. Verktoyene er de samme. Bare plattformene har endret seg.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg2-5-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvorfor ble retorikk sa viktig i antikkens Athen?',
        options: [
          {
            id: 'a',
            text: 'Fordi det var det eneste faget som ble undervist',
            isCorrect: false,
          },
          {
            id: 'b',
            text: 'Fordi kongen krevde gode talere ved hoffet',
            isCorrect: false,
          },
          {
            id: 'c',
            text: 'Fordi demokratiet krevde at borgere matte overbevise hverandre',
            isCorrect: true,
          },
          {
            id: 'd',
            text: 'Fordi det var den eneste maten a underhalde folk pa',
            isCorrect: false,
          },
        ],
        correctAnswer: 'c',
        solution:
          'I det athenske demokratiet matte borgere forsvare seg selv i retten og argumentere for forslag i folkeforsamlingen. A kunne tale overbevisende var dermed avgjorende for a pavirke beslutninger og beskytte sine egne interesser.',
      },
    },

    // ========== SEKSJON 2: De tre taletypene ==========
    {
      id: 'norsk-vg2-5-1-n-section2',
      type: 'text',
      content: `## Tre mater a overbevise pa - taletypene

Aristoteles var en systematiker. Han elsket a kategorisere, ordne og forsta. Og nar han sa pa alle de ulike talene som ble holdt i Athen, la han merke til et monster. Talene hadde ulike formal, og de handlet om ulike tidsperspektiver.

Den forste typen kalte han genus judiciale, den juridiske talen. Dette er taler som handler om fortiden. Gjorde tiltalte det han er anklaget for? Var handlingen riktig eller gal? I en rettssal ser vi bakover i tid og prover a finne ut hva som faktisk skjedde. Forsvarsadvokater og aktorar bruker fortsatt disse teknikkene i dag.

Den andre typen er genus deliberativum, den politiske eller radgivende talen. Denne handler om fremtiden. Hva bor vi gjore? Hvilken vei bor vi velge? Nar en politiker argumenterer for en ny reform, nar en bedriftsleder presenterer en strategi, nar du prover a overbevise foreldrene dine om at du bor fa dra pa festival - da bruker du den radgivende taletypens teknikker.

Den tredje typen er genus demonstrativum, festtalen eller den epidiktiske talen. Denne handler om natiden. Den roser eller kritiserer, feirer eller sorgeer. Tenk pa en 17. mai-tale som hyller nasjonens verdier. Tenk pa en begravelsestale som minnes den avdode. Tenk pa en tale som hyller arets vinner av en pris. Disse talene styrker fellesskapet og bekrefter verdier vi deler.

Hvorfor er dette relevant for deg? Fordi enhver overbevisende tekst du leser eller skriver, kan analyseres med disse kategoriene. En kronikk som krever handling er radgivende. En analyse av en forfatters motiver er juridisk. En hyllest til en forfatter er epidiktisk. Nar du vet hvilken type du har med a gjore, forstar du ogsa hva som forventes.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg2-5-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'En bryllupstale som hyller brudeparet og onsker dem lykke til - hvilken taletype er dette?',
        options: [
          {
            id: 'a',
            text: 'Genus judiciale (juridisk tale)',
            isCorrect: false,
          },
          {
            id: 'b',
            text: 'Genus deliberativum (politisk tale)',
            isCorrect: false,
          },
          {
            id: 'c',
            text: 'Genus demonstrativum (festtale)',
            isCorrect: true,
          },
          { id: 'd', text: 'Genus rhetoricum (retorisk tale)', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution:
          'En bryllupstale er en festtale (genus demonstrativum) fordi den handler om natiden og har som formal a rose og feire brudeparet. Festtaler styrker fellesskap og bekrefter verdier.',
      },
    },

    // ========== SEKSJON 3: De fem arbeidsfasene ==========
    {
      id: 'norsk-vg2-5-1-n-section3',
      type: 'text',
      content: `## Fra ide til applaus - de fem arbeidsfasene

Sa du skal holde en tale. Eller skrive en tekst som skal overbevise. Hvor begynner du? De gamle retorikerne hadde et svar: en steg-for-steg-prosess med fem faser. Denne prosessen er like relevant na som for to tusen ar siden.

Forste fase heter inventio, som betyr a finne stoff. Her handler det om a samle argumenter, fakta, eksempler og ideer. Hva vet du om emnet? Hva kan du finne ut? Hvilke argumenter taler for din sak, og hvilke taler mot? I denne fasen er du som en gullgraver som leter etter verdifulle nuggets i elveleiet. Du vet ikke helt hva du finner, men du graver systematisk.

Andre fase er dispositio, a ordne stoffet. Na har du en haug med materiale, men i hvilken rekkefolge skal du presentere det? Skal du begynne med det sterkeste argumentet eller spare det til slutt? Hvordan bygger du opp mot et klimaks? Strukturen er som skjelettet i kroppen, det som holder alt sammen.

Tredje fase heter elocutio, den spraklige utformingen. Her velger du ord, bygger setninger, skaper bilder. Skal du bruke metaforer? Gjentakelser? Retoriske sporsmal? Dette er fasen der du former leira til en skulptur, der ravarene blir til kunst.

Fjerde fase er memoria, a huske talen. For de gamle grekerne, som talte uten manus, var dette avgjorende. De utviklet avanserte teknikker for a huske lange taler. I dag er denne fasen kanskje mindre viktig for skriftlige tekster, men for muntlige fremforinger er ovelse fortsatt nokkelen.

Femte og siste fase er actio, selve fremforingen. Stemme, kroppssprak, oyekontakt, pauser. Selv den beste teksten kan odeelegges av darlig fremforing, og en middelmaadig tekst kan loftes av en karismatisk taler. Denne fasen minner oss om at kommunikasjon er mer enn bare ord pa papir.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg2-5-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'I hvilken rekkefolgee bor du jobbe med en tale ifolgee de fem arbeidsfasene?',
        options: [
          {
            id: 'a',
            text: 'Elocutio, inventio, dispositio, memoria, actio',
            isCorrect: false,
          },
          {
            id: 'b',
            text: 'Inventio, dispositio, elocutio, memoria, actio',
            isCorrect: true,
          },
          {
            id: 'c',
            text: 'Actio, memoria, elocutio, dispositio, inventio',
            isCorrect: false,
          },
          {
            id: 'd',
            text: 'Dispositio, elocutio, inventio, actio, memoria',
            isCorrect: false,
          },
        ],
        correctAnswer: 'b',
        solution:
          'Riktig rekkefolge er: inventio (finne stoff), dispositio (ordne stoffet), elocutio (formulere spraklig), memoria (huske), actio (fremfore). Denne logiske rekkefolgen sikrer at du forst har noe a si, deretter organiserer det, sa formulerer det godt, laerer det, og til slutt fremforer det.',
      },
    },

    // ========== SEKSJON 4: Kairos og aptum ==========
    {
      id: 'norsk-vg2-5-1-n-section4',
      type: 'text',
      content: `## Det rette oyeblikket - kairos og aptum

To greske ord som enhver god kommunikator ma forsta: kairos og aptum. De handler begge om tilpasning, om a lese situasjonen og respondere riktig.

Kairos betyr det rette oyeblikket. Det handler om timing, om a si det rette pa rett tid. En kommentar som er genial i dag, kan vaere katastrofal i morgen. En spok som fungerer i en avslappet setting, kan bomme fullstendig i et alvorlig mote. Kairos er fornemmelsen for nar tiden er moden, nar publikum er klart, nar ordene vil treffe.

Tenk pa de store historiske talene. Martin Luther Kings "I Have a Dream" kom pa akkurat riktig tidspunkt i borgerrettskampen. Churchills taler under andre verdenskrig traff en nasjon som trengte mot. Disse talerne forstod kairos. De visste at det de sa, ville resonere akkurat da, pa akkurat det stedet, med akkurat de menneskene.

Aptum betyr det passende. Det handler om a tilpasse kommunikasjonen til situasjonen, publikum og emnet. Du snakker ikke til besteforeldrene dine som du snakker til vennene dine. Du skriver ikke en jobbsoknad som du skriver en melding pa Snapchat. Aptum er bevisstheten om at konteksten former hva som fungerer.

A bryte med aptum kan vaere odeleggende. Tenk pa politikeren som holder en morsom tale ved en minneseremoni. Tenk pa eleven som skriver en uformell tekst pa eksamen. Tenk pa sjefen som bruker ungdomsslang i et seriost mote. Disse bruddene oppfattes som malplasserte, pinlige, til og med respektlose.

Men a mestre kairos og aptum? Det er a vaere en retor som virkelig forstar sitt publikum og sin situasjon. Det er a kommunisere med presisjon og eleganse.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg2-5-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom kairos og aptum?',
        options: [
          {
            id: 'a',
            text: 'Kairos handler om ordvalg, aptum om setningsbygning',
            isCorrect: false,
          },
          {
            id: 'b',
            text: 'Kairos handler om timing og oyeblikk, aptum om tilpasning til situasjon og publikum',
            isCorrect: true,
          },
          {
            id: 'c',
            text: 'Kairos er en taletype, aptum er en arbeidsfase',
            isCorrect: false,
          },
          {
            id: 'd',
            text: 'Kairos brukes i juridiske taler, aptum i politiske taler',
            isCorrect: false,
          },
        ],
        correctAnswer: 'b',
        solution:
          'Kairos handler om timing og det rette oyeblikket - nar noe bor sies. Aptum handler om tilpasning til publikum, situasjon og emne - hvordan noe bor sies. Begge handler om kontekst, men fra ulike vinkler.',
      },
    },

    // ========== SEKSJON 5: Retorikkens relevans i dag ==========
    {
      id: 'norsk-vg2-5-1-n-section5',
      type: 'text',
      content: `## Fra torget til TikTok - hvorfor retorikk fortsatt betyr noe

Du tenker kanskje: "Alt dette er jo fra antikken. Hva har det med min hverdag a gjore?" Svaret er: Alt. Retorikken er overalt, bare i nye forkledninger.

Hver gang du scroller gjennom sosiale medier, er du utsatt for retorikk. Influencere som vil at du skal kjope et produkt. Politikere som vil ha stemmen din. Aktivister som vil du skal engasjere deg. Til og med vennene dine som poster bilder fra ferien, driver en form for selvpresentasjon som de gamle retorikerne ville kjent igjen.

Og det stopper ikke der. Jobbintervjuet der du prover a overbevise om at du er rett kandidat? Retorikk. Kjaeresten du prover a overtale til a se den filmen du vil se? Retorikk. Klagen du sender til nettbutikken som leverte feil vare? Retorikk. Vi er alle retorer, enten vi vet det eller ikke.

Men her er det viktige: Nar du forstar retorikk, blir du bade en bedre avsender og en bedre mottaker. Som avsender kan du bygge sterkere argumenter, strukturere tekstene dine bedre, og tilpasse deg publikum mer presist. Som mottaker kan du gjennomskue manipulasjon, stille kritiske sporsmal, og ta mer informerte valg.

I en tid med falske nyheter, ekkokamre og algoritmestyrt informasjon er retorisk kompetanse en superkraft. Ikke fordi den gjor deg immun mot pavirkning, men fordi den gjor deg bevisst. Du vet hva som skjer nar noen prover a overbevise deg. Du kan velge om du vil la deg overbevise.

Sofistene hadde rett i en ting: Retorikk er makt. Men Aristoteles hadde ogsa rett: Hvordan vi bruker den makten, er opp til oss.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg2-5-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvorfor er retorisk kompetanse viktig i dag?',
        options: [
          {
            id: 'a',
            text: 'Fordi det er et krav pa eksamen i norsk',
            isCorrect: false,
          },
          {
            id: 'b',
            text: 'Fordi det gjor deg bedre til a skrive dikter',
            isCorrect: false,
          },
          {
            id: 'c',
            text: 'Fordi det hjelper deg a kommunisere bedre og gjennomskue pavirkning',
            isCorrect: true,
          },
          {
            id: 'd',
            text: 'Fordi det er den eneste maten a bli politiker pa',
            isCorrect: false,
          },
        ],
        correctAnswer: 'c',
        solution:
          'Retorisk kompetanse gjor deg til bade en bedre kommunikator og en mer kritisk mottaker. I en tid med mye informasjon og pavirkning er det avgjorende a forsta hvordan overtalelse fungerer.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg2-5-1-n-summary',
      type: 'text',
      content: `## Oppsummering: Nokler til overtalelsens kunst

Du har na fatt en innforing i retorikkens grunnbegreper. Her er det viktigste a huske:

**Retorikkens opprinnelse:**
Retorikken oppsto i antikkens Hellas pa 400-tallet f.Kr. I demokratiet trengte borgerne a kunne tale overbevisende i folkeforsamlingen og i retten. Sofistene underviste i talekunst, og Aristoteles systematiserte faget.

**De tre taletypene:**
Aristoteles delte talene inn etter formal og tidsperspektiv. Juridisk tale (genus judiciale) handler om fortiden. Politisk tale (genus deliberativum) handler om fremtiden. Festtale (genus demonstrativum) handler om natiden.

**De fem arbeidsfasene:**
Inventio er a finne stoff. Dispositio er a ordne stoffet. Elocutio er a formulere spraklig. Memoria er a huske. Actio er a fremfore. Denne prosessen fungerer like godt for en skoleoppgave som for en statsministertale.

**Kairos og aptum:**
Kairos er det rette oyeblikket, fornemmelsen for timing. Aptum er det passende, tilpasning til publikum og situasjon. Begge handler om a lese konteksten og respondere riktig.

**Nokkeltermer:**
Retorikk (overtalelsens kunst), retor (den som taler/skriver), retorisk situasjon (hvem, hva, hvorfor, nar, hvor), kairos (rett oyeblikk), aptum (det passende), de tre taletypene, de fem arbeidsfasene.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.2 NARRATIV: Retoriske appellformer - etos, logos, patos
// ============================================================================

export const CHAPTER_NORSK_VG2_5_2_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-5-2-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '5.2',
  title: 'Retoriske appellformer - etos, logos, patos',
  subtitle: 'Narrativ versjon',
  description:
    'Oppdag de tre noklene til overtalelse som alle fra politikere til reklamefolk bruker for a pavirke deg.',
  estimatedMinutes: 45,
  competenceGoals: [
    'reflektere over sakprosatekster og retorisk situasjon',
    'analysere og tolke tekster med bruk av fagbegreper',
  ],
  linkedChapterId: 'norsk-vg2-5-2',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg2-5-2-n-intro',
      type: 'text',
      content: `## Tre veier inn i hodet ditt

Tenk deg at du er pa vei inn i en butikk. Ved inngangen star tre forskjellige mennesker som alle vil selge deg det samme produktet.

Den forste er en lege i hvit frakk. Hun forteller rolig at produktet er anbefalt av helsemyndighetene og at hun selv bruker det. Du tenker: "Hun virker troverdig. Hun vet hva hun snakker om."

Den andre er en statistiker med tabeller og grafer. Han viser deg forskning, tall og fakta som beviser at produktet virker. Du tenker: "Dette er overbevisende. Bevisene er tydelige."

Den tredje er en mor som forteller en historie. Hun beskriver hvordan barnet hennes var sykt, hvordan hun var fortvilt, og hvordan produktet reddet situasjonen. Du tenker: "Det der rorte meg. Jeg foler at jeg ma gjore noe."

Gratulerer. Du har nettopp mott etos, logos og patos, de tre grunnleggende matene a overbevise pa. Disse tre appellformene er nokler som kan apne nesten alle dorer, og som brukes av alle fra politikere til markedsforere, fra predikanter til professorer.

I dette kapittelet skal vi utforske hver av dem. Vi skal forsta hvordan de virker, hvorfor de er effektive, og hvordan du kan bruke dem og gjennomskue dem.`,
    },

    // ========== SEKSJON 1: Etos ==========
    {
      id: 'norsk-vg2-5-2-n-section1',
      type: 'text',
      content: `## Etos - hvorfor vi stoler pa noen

Etos handler om troverdighet. Det handler om hvem du er og hvorfor vi skal lytte til deg. Det greske ordet etos betyr karakter, og det var nettopp karakteren Aristoteles mente var avgjorende. Vi lar oss lettere overbevise av noen vi stoler pa.

Men hva gjor noen troverdig? Aristoteles pekte pa tre ting.

For det forste: kompetanse. Vet personen hva de snakker om? En lege som uttaler seg om medisin har sterkere etos enn en musiker pa samme felt. En ordforer som kjenner lokalsamfunnet har sterkere etos i bygdesaker enn en tilreisende byrakrat.

For det andre: aerlighet. Virker personen oppriktig? Har de noe a vinne pa a lyve? Vi stoler mer pa kilder som ikke har apenbare egeninteresser. Derfor er uavhengig forskning mer troverdig enn forskning betalt av et selskap.

For det tredje: velvilje. Bryr personen seg om oss? Vil de vart beste? En reklame som bare prover a selge far mindre troverdighet enn en anbefaling fra en venn som genuint tror produktet vil hjelpe deg.

Her kommer et viktig skille. Vi snakker om innledende etos og avledet etos. Innledende etos er det ryktet du har for du apner munnen. Er du professor? Politiker? Kjendis? Det gir deg troverdighet pa forhand. Avledet etos er det du bygger gjennom selve teksten eller talen. Selv en ukjent person kan bygge sterk etos ved a vise kunnskap, vaere aerlig om usikkerhet, og uttrykke genuine omtanke for publikum.

Legg merke til hvordan reklamer bruker etos. Kjendiser som anbefaler produkter. Eksperter i hvite frakker. Vanlige folk som deler sine erfaringer. Alt dette er forsok pa a lane troverdighet.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg2-5-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'En advokat skriver: "Som jurist med 20 ars erfaring fra familierett kan jeg si at denne loven vil skade barna." Hva bygger dette utsagnet pa?',
        options: [
          { id: 'a', text: 'Logos - logikk og fakta', isCorrect: false },
          { id: 'b', text: 'Patos - folelsesappell', isCorrect: false },
          { id: 'c', text: 'Etos - avsenderens troverdighet', isCorrect: true },
          { id: 'd', text: 'Kairos - timing', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution:
          'Advokaten bygger etos ved a vise til sin tittel (jurist), sin erfaring (20 ar) og sitt spesialfelt (familierett). Alt dette styrker troverdigheten og gjor at vi lettere tror pa konklusjonen om at loven vil skade barna.',
      },
    },

    // ========== SEKSJON 2: Logos ==========
    {
      id: 'norsk-vg2-5-2-n-section2',
      type: 'text',
      content: `## Logos - fornuftens kraft

Logos handler om logikk, fakta og argumentasjon. Det er appellen til fornuften, til den tenkende delen av oss som vil ha bevis for du tror pa noe. Nar noen sier "forskning viser at..." eller "statistikken forteller oss at...", bruker de logos.

Logos-argumenter kan ta mange former. De kan vaere statistikk og tall: "9 av 10 tannleger anbefaler...". De kan vaere eksempler og case studies: "I Sverige har de gjort dette, og resultatet var...". De kan vaere logiske slutninger: "Hvis A forer til B, og B forer til C, da vil A fore til C."

Det fine med logos er at det appellerer til noe universelt. Fakta er fakta, uavhengig av hvem som presenterer dem. En logisk gyldig slutning er gyldig uansett om den fremfores av en venn eller en fiende. Dette gjor logos til den mest objektive av appellformene.

Men logos har ogsa svakheter. For det forste: Fakta kan manipuleres. Man kan velge ut bare den statistikken som stotter ens sak. Man kan fremstille tall pa misvisende mater. "9 av 10 tannleger" hores overbevisende ut, men hvem spurte disse tannlegene? Hvordan var sporsmalet formulert?

For det andre: Logos alene varmer ikke. En tekst full av tall og fakta kan vaere overbevisende for intellektet, men den beveger ikke hjertet. Folk handler ofte pa folelser, ikke pa fornuft. Derfor trenger logos gjerne folge av de andre appellformene.

Nar du skriver en fagartikkel, er logos avgjorende. Du ma ha fakta, kilder og logiske argumenter. Men nar du holder en tale eller skriver et debattinnlegg, er logos bare en del av verktoysettet.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg2-5-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hvilket av disse utsagnene er det beste eksempelet pa logos?',
        options: [
          {
            id: 'a',
            text: '"Tenk pa alle barna som lider! Vi kan ikke sitte stille!"',
            isCorrect: false,
          },
          {
            id: 'b',
            text: '"Som mor til tre vet jeg hvor vanskelig dette er."',
            isCorrect: false,
          },
          {
            id: 'c',
            text: '"Ifolge Folkehelseinstituttet har forekomsten okt med 23 prosent siden 2015."',
            isCorrect: true,
          },
          {
            id: 'd',
            text: '"Dette er en skandale! Noe ma gjores NA!"',
            isCorrect: false,
          },
        ],
        correctAnswer: 'c',
        solution:
          'Logos appellerer til fornuft gjennom fakta og logikk. Henvisningen til Folkehelseinstituttet med konkret tall (23 prosent) og tidsperiode (siden 2015) er et tydelig logos-argument. De andre alternativene bruker patos (folelsesappell) eller etos (personlig erfaring).',
      },
    },

    // ========== SEKSJON 3: Patos ==========
    {
      id: 'norsk-vg2-5-2-n-section3',
      type: 'text',
      content: `## Patos - folelsenes makt

Patos er appellen til folelsene. Det er det som far oss til a fole noe, reagere, handle. Nar en tale far deg til a grate, nar en reklame gjor deg varm innvendig, nar et debattinnlegg gjor deg sint, da har patos gjort jobben sin.

Mennesker er folelsesdyr. Vi kan fortelle oss selv at vi tar beslutninger basert pa fornuft, men forskning viser noe annet. Folelser driver handling. Vi kjoper den dyre jakken ikke fordi vi logisk trenger den, men fordi den far oss til a fole oss bra. Vi stemmer pa politikere som far oss til a fole hap eller frykt, ikke bare de med best statistikk.

Patos-virkemidler er mange. Personlige fortellinger er kraftfulle, spesielt om individer vi kan identifisere oss med. Et barn som lider engasjerer mer enn statistikk om tusenvis av barn. Sterke bilder, bade i ordets bokstavelige og overforte betydning, vekker folelser. Appeller til verdier vi holder kjart, som frihet, rettferdighet eller familiekjaerlighet, treffer dypt.

Men patos kan ogsa misbrukes. Fryktpropaganda er patos brukt til a skremme folk til a stotte en sak. Sentimentale reklamer manipulerer oss til a kjope ting vi ikke trenger. Politikere kan spille pa hat og mistro i stedet for a presentere losninger.

Nokkelen er balanse. God overtalelse bruker patos til a engasjere, men stotter det opp med etos og logos. Patos uten fakta er manipulasjon. Patos med fakta er overbevisende kommunikasjon.

Vurdert kritisk: Nar en tekst far deg til a fole sterkt, stopp opp og spor. Er folelsene mine basert pa noe reelt? Er det ogsa gode argumenter her, eller prover noen bare a manipulere meg?`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg2-5-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'En veldedighetsorganisasjon viser bilder av sultne barn og forteller historien til lille Ahmed som mistet foreldrene sine. Hvilken appellform dominerer?',
        options: [
          { id: 'a', text: 'Etos - organisasjonens troverdighet', isCorrect: false },
          { id: 'b', text: 'Logos - statistikk om sult', isCorrect: false },
          { id: 'c', text: 'Patos - folelsesappell', isCorrect: true },
          { id: 'd', text: 'Kairos - timing', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution:
          'Dette er et tydelig patos-argument. Bilder av sultne barn og personlige historier er klassiske patos-virkemidler som vekker medfolelse og onsket om a hjelpe. Det er effektivt, men bor ideelt kombineres med logos (hvor gar pengene?) og etos (er organisasjonen palitelig?).',
      },
    },

    // ========== SEKSJON 4: Balansen mellom appellformene ==========
    {
      id: 'norsk-vg2-5-2-n-section4',
      type: 'text',
      content: `## Den perfekte blandingen

De beste overbevisende tekstene bruker alle tre appellformene. De bygger troverdighet, presenterer fakta, og engasjerer folelsesmessig. La oss se pa hvordan dette fungerer i praksis.

Tenk deg en kronikk om klimaendringer. Forfatteren begynner med a presentere seg selv som klimaforsker ved et anerkjent universitet. Der har du etos. Deretter presenterer hun data fra FNs klimapanel om temperaturstigning og ekstremvaer. Der har du logos. Til slutt beskriver hun hvordan barnebarna vare kan oppleve en helt annen verden enn vi kjenner. Der har du patos.

Balansen mellom appellformene avhenger av sjanger og situasjon. En vitenskapelig artikkel er naesten rent logos. En begravelsestale er naesten ren patos. En anbefalingstale, der noen introduserer en hovedtaler, er naesten ren etos. Men de fleste tekster trenger en blanding.

Hva skjer nar balansen er skjev? Bare logos kan virke kaldt og upersonlig. Leseren tenker kanskje at "dette er interessant, men det rorer meg ikke". Bare patos kan virke manipulerende. Leseren tenker "dette er rourende, men hvor er bevisene?". Bare etos kan virke arrogant. Leseren tenker "greit at du er ekspert, men hva er egentlig argumentet ditt?".

Vurder alltid: Hvem er publikum? Hva forventer de? En akademisk tekst trenger sterkt logos. En innsamlingsaksjon trenger sterkt patos. En anbefaling trenger sterkt etos. Men ingen av dem kan ignorere de andre appellformene helt.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg2-5-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvorfor bruker de fleste overbevisende tekster en kombinasjon av etos, logos og patos?',
        options: [
          {
            id: 'a',
            text: 'Fordi det er et krav i laereplanen',
            isCorrect: false,
          },
          {
            id: 'b',
            text: 'Fordi mennesker overbevises av ulike ting, og en kombinasjon treffer flere',
            isCorrect: true,
          },
          {
            id: 'c',
            text: 'Fordi Aristoteles sa det',
            isCorrect: false,
          },
          {
            id: 'd',
            text: 'Fordi det gjor teksten lengre og mer imponerende',
            isCorrect: false,
          },
        ],
        correctAnswer: 'b',
        solution:
          'Mennesker overbevises av ulike ting. Noen stoler pa eksperter (etos), noen vil ha bevis (logos), noen drives av folelser (patos). En kombinasjon sikrer at teksten treffer flere typer lesere og at budskapet stotter seg pa flere bein.',
      },
    },

    // ========== SEKSJON 5: Gjenkjenne appellformer i hverdagen ==========
    {
      id: 'norsk-vg2-5-2-n-section5',
      type: 'text',
      content: `## Appellformene i hverdagen din

Na nar du kjenner etos, logos og patos, vil du begynne a se dem overalt. Det er som a laere et nytt ord og plutselig hore det hele tiden. La oss se pa noen hverdagseksempler.

Reklame er et laboratorium for appellformer. Legg merke til hvordan ulike produkter bruker ulike strategier. Luksusvarer bruker ofte etos, kjendiser og eksperter som anbefaler. Teknologiprodukter bruker ofte logos, spesifikasjoner og tester. Veldedighet bruker ofte patos, bilder og historier som rorer.

Politisk kommunikasjon er ogsa full av appellformer. Politikere bygger etos ved a snakke om sin bakgrunn og erfaring. De bruker logos nar de viser til statistikk og budsjetter. De bruker patos nar de snakker om familier, fremtid og fellesskap.

Selv i hverdagssamtaler bruker du appellformene. Nar du prover a overbevise foreldrene dine om noe, bygger du kanskje etos ved a vise at du er ansvarlig. Du bruker logos ved a presentere gode argumenter. Du bruker patos ved a appellere til deres onsker om at du skal vaere lykkelig.

Det kritiske sporsmaalet er alltid: Er appellformene brukt aerlig og balansert, eller er de brukt for a manipulere? En reklame som bare bruker patos uten a gi fakta om produktet er mistenkelig. En politiker som bare bruker etos uten a presentere konkret politikk fortjener kritiske sporsmal. En ekspert som bare bruker logos uten a vise menneskelig forstaelse kan miste kontakten med publikum.

Med denne kunnskapen er du bedre rustet bade som avsender og mottaker av overbevisende kommunikasjon.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg2-5-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Du ser en reklame der en kjent idrettsstjerne sier "Jeg bruker dette produktet hver dag, og det gir meg energi til a prestere." Hvilken appellform er mest fremtredende?',
        options: [
          {
            id: 'a',
            text: 'Logos - fordi det nevnes daglig bruk',
            isCorrect: false,
          },
          {
            id: 'b',
            text: 'Etos - fordi en kjent person anbefaler produktet',
            isCorrect: true,
          },
          {
            id: 'c',
            text: 'Patos - fordi energi er en folelse',
            isCorrect: false,
          },
          {
            id: 'd',
            text: 'Kairos - fordi timing er viktig i idrett',
            isCorrect: false,
          },
        ],
        correctAnswer: 'b',
        solution:
          'Dette er primaert en etos-appell. En kjent idrettsstjerne har status og beundring, og nar hun anbefaler noe, laaner produktet av hennes troverdighet. Kritisk sporsmaal: Har hun faktisk kompetanse pa produktets effekt, eller er hun bare betalt for a reklamere?',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg2-5-2-n-summary',
      type: 'text',
      content: `## Oppsummering: Tre veier til overtalelse

Du har na laert om de tre grunnleggende appellformene. Her er det viktigste a huske:

**Etos - troverdighet:**
Etos handler om avsenderens karakter og troverdighet. Det bygges gjennom kompetanse, aerlighet og velvilje. Vi skiller mellom innledende etos (ryktet fra for) og avledet etos (det som bygges i teksten).

**Logos - fornuft:**
Logos handler om logikk, fakta og argumentasjon. Det appellerer til var fornuft gjennom statistikk, eksempler og logiske slutninger. Logos er objektivt og universelt, men kan manipuleres og varmer ikke alene.

**Patos - folelser:**
Patos handler om a vekke folelser. Det bruker personlige fortellinger, sterke bilder og appell til verdier. Patos driver handling, men kan ogsa misbrukes til manipulasjon.

**Balansen:**
De beste overbevisende tekstene kombinerer alle tre. Balansen avhenger av sjanger, publikum og formal. Vaer kritisk til tekster som bare bruker en appellform.

**Nokkeltermer:**
Etos (troverdighet), logos (logikk/fakta), patos (folelser), innledende etos (forhands-troverdighet), avledet etos (tekstbygget troverdighet), appellformer (mater a overbevise pa).`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.3 NARRATIV: Analyse av sakprosatekster
// ============================================================================

export const CHAPTER_NORSK_VG2_5_3_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-5-3-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '5.3',
  title: 'Analyse av sakprosatekster',
  subtitle: 'Narrativ versjon',
  description:
    'Bli en tekstdetektiv som kan avslore hvordan tekster prover a pavirke deg, og laer a skrive analyser som imponerer.',
  estimatedMinutes: 50,
  competenceGoals: [
    'reflektere over sakprosatekster og retorisk situasjon',
    'analysere og tolke tekster med bruk av fagbegreper',
    'skrive fagartikler som drofter tekster i kontekst',
  ],
  linkedChapterId: 'norsk-vg2-5-3',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg2-5-3-n-intro',
      type: 'text',
      content: `## Bli en tekstdetektiv

Forestill deg at du er en detektiv. Men i stedet for a oppklare forbrytelser, oppklarer du tekster. Du undersoker bevis, stiller sporsmal, og avslorer hvordan forfatteren prover a pavirke deg. Det er akkurat dette sakprosaanalyse handler om.

Vi lever i en tid der vi oversvommes av tekster. Debattinnlegg, kronikker, reklamer, nyhetsartikler, bloggposter, tweets. Alle prover a fortelle oss noe, overbevise oss om noe, fa oss til a gjore noe. Hvordan skal vi navigere i dette havet av ord?

Svaret er kritisk lesing. Og verktooyet er sakprosaanalyse. Nar du analyserer en sakprosatekst, gjor du noe mer enn bare a lese den. Du dissekerer den. Du sporger: Hva sier denne teksten? Hvordan sier den det? Hvorfor sier den det slik? Og hva gjor det med meg som leser?

I dette kapittelet skal vi bygge opp din analytiske verktooykasse. Vi skal laere a kartlegge den retoriske situasjonen, identifisere virkemidler, og vurdere argumentasjonen. Nar du er ferdig, vil du aldri lese en tekst pa samme mate igjen.`,
    },

    // ========== SEKSJON 1: Den retoriske situasjonen ==========
    {
      id: 'norsk-vg2-5-3-n-section1',
      type: 'text',
      content: `## Hvem snakker til hvem om hva - og hvorfor?

Enhver tekst oppstar i en sammenheng. Den er ikke bare ord pa papir, den er et forsok pa kommunikasjon fra noen til noen om noe. For a forsta teksten ma du forsta denne sammenhengen. Vi kaller det den retoriske situasjonen.

Begynn med avsenderen, det vi ogsa kaller retor. Hvem har skrevet denne teksten? Er det en journalist, en forsker, en politiker, en aktivist? Hvilken bakgrunn har de? Hvilke interesser? Hvorfor skriver akkurat denne personen om akkurat dette temaet? Avsenderens identitet farger alt.

Deretter ser du pa mottakeren, det vi kaller publikum. Hvem er teksten rettet mot? En fagartikkel i et vitenskapelig tidsskrift har et annet publikum enn et debattinnlegg i Aftenposten. Forfatteren tilpasser sprak, stil og argumentasjon til dem de prover a na.

Sa kommer saken, emnet teksten handler om. Hva er temaet? Hvordan avgrenses det? Hvilke aspekter vektlegges, og hvilke ignoreres? En tekst kan aldri si alt om et emne, sa valgene forfatteren gjor er i seg selv meningsbaerende.

Situasjonen, det vi kaller kairos, handler om nar og hvor teksten ble skrevet. Hva var anledningen? Hvilken debatt er den del av? En tekst om innvandring betyr noe annet i 2015 enn i 2025. Konteksten former meningen.

Til slutt spor du om formalet. Hva vil avsenderen oppna? Vil de informere, overbevise, underholde, provosere, oppfordre til handling? Formaalet styrer alle de andre valgene.

Nar du har kartlagt den retoriske situasjonen, har du et kart over tekstens terreng. Na kan du begynne a utforske detaljene.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg2-5-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva er det FORSTE du bor gjore nar du skal analysere en sakprosatekst?',
        options: [
          {
            id: 'a',
            text: 'Telle alle metaforene i teksten',
            isCorrect: false,
          },
          {
            id: 'b',
            text: 'Lese teksten for a fa et helhetsinntrykk',
            isCorrect: true,
          },
          {
            id: 'c',
            text: 'Skrive ned konklusjonen din',
            isCorrect: false,
          },
          {
            id: 'd',
            text: 'Sla opp alle ord du ikke forstar',
            isCorrect: false,
          },
        ],
        correctAnswer: 'b',
        solution:
          'Forste steg er alltid a lese teksten for a fa et helhetsinntrykk. For du kan analysere detaljer, ma du forsta hva teksten handler om i store trekk. Deretter kan du ga over til mer systematisk kartlegging av retorisk situasjon og virkemidler.',
      },
    },

    // ========== SEKSJON 2: Sjangerbevissthet ==========
    {
      id: 'norsk-vg2-5-3-n-section2',
      type: 'text',
      content: `## Hver sjanger har sine regler

En kronikk er ikke det samme som et debattinnlegg, og et essay er noe helt annet enn en lederartikkel. Hver sakprosasjanger har sine egne kjennetegn, konvensjoner og forventninger. A kjenne sjangrene er nokkelen til god analyse.

Kronikken er den dype analysen. Her far forfatteren plass til a utfolde seg, gjerne over 800-1200 ord. Kronikken har personlig vinkling pa et samfunnssporsmal, men stotter seg pa kunnskap og refleksjon. Forfatteren er ofte en fagperson eller en kjent stemme i offentligheten.

Debattinnlegget er kortere og mer direkte. Her er det en klar tese, gjerne allerede i tittelen, og argumentasjonen er spisset. Debattinnlegget tar stilling og inviterer til diskusjon. Det er et innlegg i en paagaende samtale.

Lederen er avisens offisielle standpunkt. Den skrives ofte av redaktoren eller en kommentator, men publiseres uten navn fordi den representerer hele avisen. Lederen tar stilling til aktuelle saker og signaliserer hva avisen mener.

Essayet er det friest av alle. Her utforsker forfatteren mer enn de konkluderer. Essayet er personlig, assosierende, reflekterende. Det stiller sporsmal, prover ut ideer, og tar leseren med pa en tankereise.

Fagartikkelen er den mest formelle. Den har fast struktur med innledning, hoveddel og avslutning. Den bruker kilder og referanser, har saklig tone, og drafter en problemstilling systematisk.

Nar du analyserer, spor alltid: Hvilken sjanger er dette? Folger teksten sjangerens konvensjoner, eller bryter den med dem? Og hva betyr det for hvordan vi skal lese den?`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg2-5-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva kjennetegner en lederartikkel til forskjell fra en kronikk?',
        options: [
          {
            id: 'a',
            text: 'Lederen er lengre og mer personlig',
            isCorrect: false,
          },
          {
            id: 'b',
            text: 'Lederen representerer avisens offisielle standpunkt, ikke en enkeltpersons',
            isCorrect: true,
          },
          {
            id: 'c',
            text: 'Lederen bruker aldri kilder',
            isCorrect: false,
          },
          {
            id: 'd',
            text: 'Lederen handler alltid om politikk',
            isCorrect: false,
          },
        ],
        correctAnswer: 'b',
        solution:
          'En leder (lederartikkel) representerer avisens offisielle standpunkt og publiseres uten forfatterangivelse fordi den snakker pa vegne av redaksjonen. En kronikk er derimot en lengre, signert tekst med personlig vinkling fra en navngitt forfatter.',
      },
    },

    // ========== SEKSJON 3: Innhold og struktur ==========
    {
      id: 'norsk-vg2-5-3-n-section3',
      type: 'text',
      content: `## Hva sier teksten - og hvordan er den bygget opp?

Na beveger vi oss inn i selve teksten. Det forste vi ser etter er innholdet. Hva er hovedbudskapet? Hvis du skulle oppsummere teksten i en setning, hva ville du sagt? Dette kaller vi ofte tesen eller hovedpaastanden.

Men en tese alene overbeviser ingen. Den ma stottes opp av argumenter. Hvilke argumenter bruker forfatteren? Vi kan dele dem inn i typer. Faktaargumenter bygger pa etterprøvbare fakta og statistikk. Erfaringsargumenter bygger pa egne eller andres erfaringer. Etiske argumenter appellerer til verdier og moral. Autoritetsargumenter stotter seg pa eksperter eller respekterte kilder.

Sa ser vi pa strukturen. Hvordan er stoffet ordnet? De fleste sakprosatekster folger en tredelt struktur: innledning som presenterer tema og tese, hoveddel som utvikler argumentasjonen, og avslutning som oppsummerer og konkluderer.

Men innenfor denne rammen finnes det mange varianter. Noen tekster bygger opp mot et klimaks, med det sterkeste argumentet til slutt. Andre begynner med det sterkeste for a fange leseren. Noen presenterer motargumenter og tilbakeviser dem. Andre ignorerer motargumenter helt.

Legg merke til overgangene mellom avsnitt. Hvordan henger delene sammen? Gode tekster har god tekstbinding, der hvert avsnitt leder naturlig til det neste. Darlige tekster hopper mellom poenger uten sammenheng.

Strukturanalyse avslorer mye om tekstens strategi. En tekst som gjemmer motargumenter langt bak, har en annen retorikk enn en tekst som tar dem opp tidlig og tilbakeviser dem grundig.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg2-5-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom et faktaargument og et erfaringsargument?',
        options: [
          {
            id: 'a',
            text: 'Faktaargumenter er alltid sanne, erfaringsargumenter er alltid falske',
            isCorrect: false,
          },
          {
            id: 'b',
            text: 'Faktaargumenter brukes i aviser, erfaringsargumenter brukes i boker',
            isCorrect: false,
          },
          {
            id: 'c',
            text: 'Faktaargumenter bygger pa etterprøvbar informasjon, erfaringsargumenter bygger pa personlige opplevelser',
            isCorrect: true,
          },
          {
            id: 'd',
            text: 'Det er ingen forskjell, de betyr det samme',
            isCorrect: false,
          },
        ],
        correctAnswer: 'c',
        solution:
          'Faktaargumenter bygger pa etterprøvbare fakta som statistikk og forskning ("Temperaturen har steget 1,5 grader"). Erfaringsargumenter bygger pa personlige eller andres opplevelser ("Som laerer ser jeg at elevene sliter"). Begge kan vaere gyldige, men de har ulik beviskraft.',
      },
    },

    // ========== SEKSJON 4: Virkemidler og sprak ==========
    {
      id: 'norsk-vg2-5-3-n-section4',
      type: 'text',
      content: `## Hvordan sier teksten det den sier?

Na kommer den mest detaljerte delen av analysen: virkemiddelanalysen. Her ser vi pa hvordan forfatteren bruker sprak og retoriske grep for a overbevise.

Forst ser vi pa appellformene vi laerte i forrige kapittel. Hvordan bygger forfatteren etos, troverdighet? Henviser de til egen kompetanse? Viser de aerlighet ved a innromme usikkerhet? Uttrykker de velvilje mot leseren? Hvordan brukes logos, fakta og logikk? Er det statistikk, eksempler, logiske slutninger? Og hvordan brukes patos, folelsesappellen? Er det sterke bilder, personlige historier, appell til verdier?

Sa ser vi pa de spraklige virkemidlene. Metaforer gjor det abstrakte konkret: "Klimakrisen er en tikkende bombe." Retoriske sporsmal engasjerer leseren: "Kan vi virkelig sitte stille og se pa?" Kontraster skaper spenning: "De rike blir rikere, de fattige blir fattigere." Trikolon, tre elementer i rekke, skaper rytme: "Vi kom, vi sa, vi vant."

Ordvalget er ogsa viktig. Er spraket formelt eller uformelt? Noytral eller ladet? A kalle noen "klimaaktivist" eller "klimaterrorist" er ikke det samme, selv om de kanskje gjor det samme. Valg av ord avslorer holdninger.

Men her er en viktig advarsel: Ikke bare list opp virkemidler. Det er ikke nok a si "her er en metafor". Du ma forklare hvordan den virker. Hva gjor metaforen med budskapet? Hvordan pavirker den leseren? Analysen er ikke komplett for du har svart pa disse sporsmaalene.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg2-5-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'En forfatter skriver: "Mobilen stjeler barndommen fra barna vare." Hva er dette et eksempel pa?',
        options: [
          { id: 'a', text: 'Litotes (underdrivelse)', isCorrect: false },
          {
            id: 'b',
            text: 'Metafor (mobilen fremstilles som en tyv)',
            isCorrect: true,
          },
          { id: 'c', text: 'Ironi (forfatteren mener det motsatte)', isCorrect: false },
          { id: 'd', text: 'Eufemisme (mildere uttrykk)', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution:
          'Dette er en metafor der mobilen fremstilles som en tyv som stjeler. Metaforen gjor det abstrakte (barns skjermbruk) konkret og negativt ladet. Den vekker beskyttelsesinstinkt hos foreldre (patos) og gjor budskapet minneverdig.',
      },
    },

    // ========== SEKSJON 5: Vurdering og konklusjon ==========
    {
      id: 'norsk-vg2-5-3-n-section5',
      type: 'text',
      content: `## Fungerer teksten - og hvorfor?

Den siste delen av analysen er vurderingen. Her skal du ikke bare beskrive hva teksten gjor, men ogsa vurdere om den lykkes med det den prover a gjore.

Er argumentasjonen overbevisende? En tekst kan ha mange fine virkemidler og likevel ha svak argumentasjon. Se etter logiske hull, udokumenterte paastander, og manglende motargumenter. Er kildene palitelige? Er fakta korrekte?

Fungerer appellformene? Bygger teksten troverdighet effektivt, eller fremstar forfatteren arrogant? Er patosappellen engasjerende, eller virker den manipulerende? Er logosargumentene relevante, eller virker de perifere?

Hva er tekstens styrker? Kanskje har den et tydelig budskap, engasjerende sprak, eller overbevisende eksempler. Hva er svakhetene? Kanskje er den ensidig, mangler kilder, eller overdriver.

Er teksten relevant? For hvem? I hvilken sammenheng? En tekst som var relevant i 2010 kan vaere utdatert na. En tekst som fungerer for et voksent publikum kan misse blink for ungdom.

Husk: En god vurdering er balansert. Du ma ikke vaere enig med teksten for a anerkjenne at den er godt skrevet. Og du ma ikke vaere uenig for a peke pa svakheter. Din jobb som analytiker er a vaere rettferdig og grundig.

Til slutt: Trekk en konklusjon. Hva er ditt helhetlige inntrykk? Lykkes teksten med sitt formal? Hvorfor eller hvorfor ikke?`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg2-5-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva er den vanligste feilen elever gjor i sakprosaanalyse?',
        options: [
          {
            id: 'a',
            text: 'De bruker for mange fagbegreper',
            isCorrect: false,
          },
          {
            id: 'b',
            text: 'De gjenforteller innholdet i stedet for a analysere',
            isCorrect: true,
          },
          {
            id: 'c',
            text: 'De er for kritiske mot teksten',
            isCorrect: false,
          },
          { id: 'd', text: 'De skriver for korte analyser', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution:
          'Den vanligste feilen er parafrase - a bare gjenfortelle hva teksten sier i stedet for a analysere hvordan og hvorfor den sier det. God analyse undersooker virkemidler og deres effekt, ikke bare innholdet.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg2-5-3-n-summary',
      type: 'text',
      content: `## Oppsummering: Din analytiske verktooykasse

Du har na laert grunnlaget for sakprosaanalyse. Her er det viktigste a huske:

**Den retoriske situasjonen:**
Kartlegg alltid forst: avsender (hvem skriver), mottaker (til hvem), saken (om hva), situasjonen (nar og hvor), og formal (hvorfor). Dette er kartet som hjelper deg a navigere i teksten.

**Sjangerbevissthet:**
Kjenn sjangrene: kronikk, debattinnlegg, leder, essay, fagartikkel. Hver har sine konvensjoner og forventninger. A bryte med sjangeren er i seg selv meningsbaerende.

**Innhold og struktur:**
Finn tesen (hovedbudskapet), identifiser argumenttypene (fakta, erfaring, etikk, autoritet), og analyser strukturen (hvordan stoffet er ordnet).

**Virkemidler og sprak:**
Analyser appellformene (etos, logos, patos) og spraklige virkemidler (metafor, retorisk sporsmal, kontrast, etc.). Husk a forklare effekten, ikke bare navngi virkemidlene.

**Vurdering:**
Vurder om teksten lykkes med sitt formal. Pek pa styrker og svakheter. Vaer balansert og begrunnet.

**Nokkeltermer:**
Retorisk situasjon, avsender/retor, mottaker/publikum, kairos, sjanger, tese, argumenttyper, tekstbinding, virkemidler, parafrase vs. analyse.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.4 NARRATIV: Retoriske virkemidler i praksis
// ============================================================================

export const CHAPTER_NORSK_VG2_5_4_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-5-4-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '5.4',
  title: 'Retoriske virkemidler i praksis',
  subtitle: 'Narrativ versjon',
  description:
    'Utforsk verktooykassen til verdens beste talere og skribentet, og laer a bruke de samme triksene selv.',
  estimatedMinutes: 50,
  competenceGoals: [
    'reflektere over sakprosateksters formal og retoriske situasjon',
    'skrive tekster som kombinerer informasjon, drøfting og argumentasjon',
  ],
  linkedChapterId: 'norsk-vg2-5-4',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg2-5-4-n-intro',
      type: 'text',
      content: `## Sprakets hemmelige vaapen

Noen taler far deg til a reise deg og applaudere. Noen tekster far deg til a stoppe opp og tenke. Noen setninger setter seg fast i hodet ditt og nekter a forsvinne. Hva er det som gjor disse ordene sa kraftfulle?

Svaret er retoriske virkemidler. Det er teknikker, moonstre og grep som gjor sprak mer effektivt. De har navn som kan hores fremmedartede ut: metafor, anafor, trikolon, allitterasjon. Men nar du forstar hva de gjor, vil du oppdage at de er overalt, fra historiske taler til Instagram-caption.

Tenk pa Martin Luther Kings berømte "I have a dream". Han gjentar frasen "I have a dream" gang pa gang. Det er anafor. Han maler bilder av barn som leker sammen uavhengig av hudfarge. Det er patos gjennom levende bilder. Han bygger opp til et klimaks med sin visjon om frihet. Det er strukturell retorikk.

I dette kapittelet skal vi apne verktooykassen og se pa hvert verktoy. Vi skal forsta hva de gjor, hvorfor de virker, og hvordan du kan bruke dem selv. Nar du er ferdig, vil du bade kunne gjenkjenne virkemidler i andres tekster og bruke dem i dine egne.`,
    },

    // ========== SEKSJON 1: Troper - overfort betydning ==========
    {
      id: 'norsk-vg2-5-4-n-section1',
      type: 'text',
      content: `## Nar ord betyr noe annet - troper

Troper er spraklige bilder der ord brukes i overfort betydning. De gjor det abstrakte konkret, det fremmede kjent, og det kjedelige levende.

Metaforen er kanskje den mektigste av alle. Nar vi sier "livet er en reise" eller "tiden er penger", bruker vi metaforer. Vi sier at noe er noe annet, ikke at det ligner. Metaforer former hvordan vi tenker. Nar politikere snakker om "invasjon" av flyktninger eller "klimakamp", bruker de metaforer som farger hele debatten.

Similen er metaforens forsiktigere sosken. Den sammenligner med "som" eller "liksom": "Hun er sterk som en loevinne", "Ordene flyt som en elv". Similen er mer forsiktig fordi den innrommer at det er en sammenligning, ikke en pastand om identitet.

Besjeling, eller personifikasjon, gir liv til det livlose. "Solen smilte ned pa oss", "Naturen grater over oodeleggelsene", "Frykten grep tak i ham". Nar vi besjeeler naturen eller folelser, skaper vi emosjonell tilknytning. Det er lettere a foole med noe som har menneskelige trekk.

Metonymi er nar vi bruker en del for helheten eller noe naert for det vi egentlig mener. "Kronen" betyr kongen, "Det hvite hus" betyr den amerikanske presidenten, "Oslo" betyr den norske regjeringen. Metonymi er ofte sa innarbeidet at vi glemmer at det er et virkemiddel.

Alle disse tropene har det til felles at de gjor spraket rikere, mer levende, mer minneverdig. De tar leseren fra det abstrakte til det konkrete, fra det fjerne til det naere.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg2-5-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom metafor og simile?',
        options: [
          { id: 'a', text: 'Metafor brukes i poesi, simile i prosa', isCorrect: false },
          {
            id: 'b',
            text: 'Metafor sier at noe ER noe annet, simile sammenligner med "som"',
            isCorrect: true,
          },
          { id: 'c', text: 'Metafor er gammelmodig, simile er moderne', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell, de betyr det samme', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution:
          'Metafor sier direkte at noe er noe annet ("Livet er en reise"), mens simile bruker "som" eller "liksom" for a sammenligne ("Livet er som en reise"). Metaforen er mer direkte og ofte kraftigere, mens similen er mer forsiktig.',
      },
    },

    // ========== SEKSJON 2: Stilistiske figurer ==========
    {
      id: 'norsk-vg2-5-4-n-section2',
      type: 'text',
      content: `## Sprakets moonstre - stilistiske figurer

Mens troper handler om betydning, handler stilistiske figurer om form. De skaper monster, rytme og gjentakelser som gjor spraket mer slagkraftig.

Trikolon er tre elementer i rekke. "Frihet, likhet, brorskap" fra den franske revolusjon. "Veni, vidi, vici" - vi kom, vi sa, vi vant - fra Caesar. Tre er et magisk tall i retorikk. To fooles for lite, fire for mye, men tre er akkurat passe. Trikolon skaper en folelse av helhet og rytme.

Anafor er gjentakelse i begynnelsen av setninger. "Vi ma handle. Vi ma handle na. Vi ma handle sammen." Hver setning begynner likt, og budskapet hamres inn. Martin Luther Kings "I have a dream" er kanskje det mest berømte eksempelet. Anafor bygger intensitet og gjor teksten lett a huske.

Det retoriske sporsmaalet er et sporsmaal som ikke forventer svar. "Kan vi virkelig akseptere dette?" "Er ikke tiden inne for endring?" Sporsmaalet engasjerer leseren, far dem til a tenke, og antyder et svar uten a si det direkte.

Kontrasten, eller antitesen, setter motsetninger opp mot hverandre. "En liten feil kan gi store konsekvenser." "De rike blir rikere, de fattige blir fattigere." Kontraster skaper spenning og tydeliggjor poenger ved a vise hva noe ikke er.

Allitterasjon er bokstavrim, gjentakelse av begynnelseslyder. "Folk flest foler seg fremmedgjort." "Sterke, stolte, staae". Allitterasjon gir teksten musikalitet og gjor formuleringer lettere a huske.

Alle disse figurene har det til felles at de skaper monster. Og moonstre er lettere a huske enn tilfeldig sprak. De gjor budskapet sticky.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg2-5-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: '"Vi skal kjempe pa strendene, vi skal kjempe pa landestedene, vi skal kjempe pa feltene og gatene." Hvilket virkemiddel er mest fremtredende?',
        options: [
          { id: 'a', text: 'Metafor', isCorrect: false },
          { id: 'b', text: 'Anafor (gjentakelse av "vi skal kjempe")', isCorrect: true },
          { id: 'c', text: 'Ironi', isCorrect: false },
          { id: 'd', text: 'Hyperbel', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution:
          'Dette berømte sitatet fra Winston Churchill bruker anafor - gjentakelse av "vi skal kjempe" i begynnelsen av hver del. Anaforen bygger intensitet, hamrer inn besluttsomheten, og gjor ordene minneverdige.',
      },
    },

    // ========== SEKSJON 3: Tonemarkorer ==========
    {
      id: 'norsk-vg2-5-4-n-section3',
      type: 'text',
      content: `## A si mer - eller mindre - enn man mener

Noen virkemidler handler om tone, om a formidle holdning gjennom maten man sier ting pa. De kan forstoorre eller forminske, rose eller kritisere indirekte.

Hyperbel er overdrivelse for effekt. "Jeg har sagt det tusen ganger." "Hele verden er imot meg." "Det tok en evighet." Ingen tar disse pastandene bokstavelig. Overdrivelsen understreker poenget og kan vaere humoristisk. Men pass pa: For mye hyperbel undergraver troverdigheten.

Litotes er det motsatte - underdrivelse. "Det var ikke akkurat billig" (om noe veldig dyrt). "Han er ikke den skarpeste kniven i skuffen" (om noen som ikke er spesielt smart). Litotes er ofte ironisk og skaper en avstand mellom det som sies og det som menes.

Ironien sier det motsatte av det man mener. "Stralende timing!" nar noen kommer altfor sent. "Det var jo kjempehyggelig" om noe ubehagelig. Ironi krever at mottakeren forstar at det er ironi, ellers mislykkes kommunikasjonen. Den skaper distanse og kan vaere et kraftig kritisk verktoy.

Eufemisme er milde ord for noe ubehagelig. "Han gikk bort" i stedet for "han dode". "Frigjort" i stedet for "nedbemannet". Eufemismer gjor det vanskelige lettere a snakke om, men kan ogsa tilslore ubehagelige sannheter.

Dysefemisme er det motsatte - et hardere ord enn nodvendig. "Skattesluket" i stedet for "skattesystemet". "Byrakratimonster" i stedet for "offentlig administrasjon". Dysefemismer skaper negative assosiasjoner og brukes ofte i politisk retorikk.

Alle disse virkemidlene krever at du leser mellom linjene. De forteller ikke bare hva avsenderen mener, men hvordan de foler om det.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg2-5-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'En politiker kaller en skatteokning for "investering i fellesskapet". Hva er dette et eksempel pa?',
        options: [
          { id: 'a', text: 'Hyperbel - overdrivelse', isCorrect: false },
          { id: 'b', text: 'Ironi - sier det motsatte', isCorrect: false },
          { id: 'c', text: 'Eufemisme - mildere uttrykk', isCorrect: true },
          { id: 'd', text: 'Litotes - underdrivelse', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution:
          'Dette er en eufemisme - et mildere, mer positivt ladet uttrykk for noe som kan oppfattes negativt (skatteokning). Ved a kalle det "investering i fellesskapet" fremstilles det som noe positivt og nodvendig, ikke som en byrde.',
      },
    },

    // ========== SEKSJON 4: Virkemidler i kontekst ==========
    {
      id: 'norsk-vg2-5-4-n-section4',
      type: 'text',
      content: `## Riktig verktoy for riktig jobb

Virkemidler er som verktoy i en verktooykasse. En hammer er perfekt for spiker, men darlig for skruer. Pa samme mate passer ulike virkemidler til ulike situasjoner.

I politiske taler dominerer ofte anafor, trikolon og retoriske sporsmal. De bygger intensitet, skaper rytme, og engasjerer publikum. Barack Obamas "Yes we can" - gjentatt som anafor - ble et slogan for hap. Taler krever virkemidler som fungerer muntlig, som er lette a huske, og som vekker folelser.

I kronikker og debattinnlegg ser vi ofte metaforer og kontraster. Metaforer gjor abstrakte poenger konkrete. Kontraster tydeliggjor standpunktet ved a vise hva forfatteren er mot, ikke bare for. Men fordi leseren har tid til a tenke, ma logikken ogsa vaere god.

I reklame brukes hyperbel, allitterasjon og eufemisme. "Det beste du kan gi barna dine" (hyperbel). "Frisk, fruktig, fantastisk" (allitterasjon). "Velvaere" i stedet for "spa-behandling som koster en formue" (eufemisme). Reklame ma fange oppmerksomheten raskt og skape positive assosiasjoner.

I vitenskapelige tekster er virkemiddelbruken minimal. Her dominerer logos, klar struktur og presist sprak. For mye patos eller blomstrende metaforer undergraver troverdigheten. Objektivitet er idealet.

Det viktigste er aptum - a tilpasse virkemidlene til situasjonen. En politisk tale uten patos faller flatt. En fagartikkel med for mye patos mister troverdighet. Godt skrevet er situasjonstilpasset skrevet.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg2-5-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvorfor brukes det faerre retoriske virkemidler i vitenskapelige tekster?',
        options: [
          { id: 'a', text: 'Fordi forskere ikke kan skrive godt', isCorrect: false },
          {
            id: 'b',
            text: 'Fordi objektivitet og klarhet er viktigere enn overtalelse',
            isCorrect: true,
          },
          { id: 'c', text: 'Fordi vitenskapelige tekster alltid er kjedelige', isCorrect: false },
          { id: 'd', text: 'Fordi det er forbudt i akademiske regler', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution:
          'I vitenskapelige tekster er objektivitet og klarhet avgjorende. For mye retoriske virkemidler kan fa teksten til a virke partisk eller manipulerende. Logos (logikk og fakta) dominerer, mens patos og blomstrende sprak holdes til et minimum.',
      },
    },

    // ========== SEKSJON 5: Kritisk bruk av virkemidler ==========
    {
      id: 'norsk-vg2-5-4-n-section5',
      type: 'text',
      content: `## Nar virkemidler blir vaapen

Virkemidler er kraftfulle. Og som alle kraftfulle verktoy kan de misbrukes. A kjenne igjen misbruk er like viktig som a kunne bruke dem selv.

Overdreven patos kan skjule manglende argumenter. Nar en tekst prover a fa deg til a foole sterkt uten a gi deg fakta a tenke pa, bor alarmklokkene ringe. "Tenk pa barna!" er ikke et argument, det er en folelsesappell som ma stottes av fakta og logikk.

Ladede ord manipulerer uten a argumentere. A kalle noen "aktivist" eller "ekstremist" signaliserer holdning uten a begrunne den. A si "byrde" i stedet for "utfordring" eller "reform" i stedet for "kutt" farger mottakerens oppfatning. Vaer oppmerksom pa ordvalg.

Falske motsetninger skaper kunstige valg. "Enten er du med oss, eller mot oss." Virkeligheten er sjelden sa svart-hvit. Nar noen presenterer et dilemma, spor deg selv: Finnes det virkelig bare disse to alternativene?

Stramenn forvrenger motstanderens argument. I stedet for a imotega det faktiske argumentet, lager man en karikatur som er lettere a angripe. Nar du leser en tekst som kritiserer andre, spor: Gjengis motstanderen rettferdig?

A vaere kritisk betyr ikke a vaere negativ. Det betyr a stille sporsmal, a ikke ta ting for gitt, a tenke selv. Nar du ser et virkemiddel, spor: Tjener dette sannheten, eller tjener det bare avsenderens sak?`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg2-5-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'En politiker sier: "Mine motstandere vil rive ned alt vi har bygget opp!" Dette er trolig et eksempel pa:',
        options: [
          { id: 'a', text: 'Presis gjengivelse av motstandernes politikk', isCorrect: false },
          {
            id: 'b',
            text: 'Stramannsargumentasjon - a forvrenge motstanderens posisjon',
            isCorrect: true,
          },
          { id: 'c', text: 'Logos - faktabasert argumentasjon', isCorrect: false },
          { id: 'd', text: 'Etos - troverdighetsbygging', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution:
          'Dette er trolig en stramann - en forvrengt fremstilling av motstandernes posisjon. Det er lite sannsynlig at noen faktisk vil "rive ned alt". Ved a karikere motstanderen blir det lettere a kritisere dem, men dette er ikke aerlig argumentasjon.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg2-5-4-n-summary',
      type: 'text',
      content: `## Oppsummering: Din retoriske verktooykasse

Du har na fatt en grundig innforing i retoriske virkemidler. Her er det viktigste a huske:

**Troper (overfort betydning):**
Metafor sier at noe er noe annet. Simile sammenligner med "som". Besjeling gir liv til det livlose. Metonymi bruker del for helhet. Alle gjor det abstrakte konkret.

**Stilistiske figurer:**
Trikolon er tre elementer i rekke. Anafor gjentar i begynnelsen av setninger. Retorisk sporsmaal forventer ikke svar. Kontrast setter motsetninger opp mot hverandre. Allitterasjon er bokstavrim.

**Tonemarkorer:**
Hyperbel overdriver. Litotes underdriver. Ironi sier det motsatte. Eufemisme bruker mildere ord. Dysefemisme bruker hardere ord.

**Kontekstavhengighet:**
Virkemidlene ma tilpasses sjanger og situasjon. Politiske taler krever andre verktoy enn fagartikler. Aptum er nookkelen.

**Kritisk bevissthet:**
Virkemidler kan misbrukes. Vaer oppmerksom pa overdreven patos, ladede ord, falske motsetninger og stramannsargumentasjon.

**Nokkeltermer:**
Metafor, simile, besjeling, metonymi, trikolon, anafor, retorisk sporsmaal, kontrast, allitterasjon, hyperbel, litotes, ironi, eufemisme, dysefemisme, stramann.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.5 NARRATIV: Fagartikkelens oppbygging
// ============================================================================

export const CHAPTER_NORSK_VG2_5_5_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-5-5-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '5.5',
  title: 'Fagartikkelens oppbygging',
  subtitle: 'Narrativ versjon',
  description:
    'Laer a mestre den akademiske skrivingen som apner dorer til videre studier og profesjonelt arbeid.',
  estimatedMinutes: 55,
  competenceGoals: [
    'skrive fagartikler som gjor rede for og drofter tekster i kontekst',
    'reflektere over sakprosateksters formål og retorisk situasjon',
    'vurdere og bruke kilder kritisk',
  ],
  linkedChapterId: 'norsk-vg2-5-5',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg2-5-5-n-intro',
      type: 'text',
      content: `## Den akademiske trappen

Tenk deg at du star foran en imponerende bygning. Det er universitetet, arbeidslivet, den voksne verden der ideer ma begrummes og pastander ma dokumenteres. For a komme inn, ma du beherske et sprak, en stil, en sjanger: fagartikkelen.

Fagartikkelen er den akademiske verdens lingua franca. Den brukes i alle fag, pa alle nivaer, i alle land. Enten du skal bli lege, ingenjor, laerer eller forsker, vil du matte skrive fagartikler. Og jo for du mestrer sjangeren, jo lettere far du det.

Men fagartikkelen er mer enn bare et skoleformat. Den representerer en mate a tenke pa. Den krever at du formulerer klare sporsmal, finner paalitelige svar, og presenterer dem pa en oversiktlig mate. Den laerer deg a skille mellom det du vet og det du tror, mellom fakta og mening, mellom egen innsikt og andres arbeid.

I dette kapittelet skal vi bygge fagartikkelen sten for sten. Vi starter med grunnmuren: problemstillingen. Deretter reiser vi veggene: hoveddelen med droftingen. Og til slutt setter vi pa taket: avslutningen med konklusjonen. Nar vi er ferdige, har du et hus du kan bo i.`,
    },

    // ========== SEKSJON 1: Problemstilling og innledning ==========
    {
      id: 'norsk-vg2-5-5-n-section1',
      type: 'text',
      content: `## Sporsmalet som styrer alt

Alt begynner med et sporsmal. Problemstillingen er fagartikkelens hjerte. Den forteller leseren hva teksten skal handle om, og den styrer alle valgene du gjor underveis.

En god problemstilling har tre kjennetegn. For det forste er den avgrenset. "Hva er litteratur?" er for vid. "Hvordan bruker Ibsen symbolikk i Et dukkehjem?" er avgrenset nok til a kunne besvares pa noen sider. For det andre er den apen. Et ja/nei-sporsmal gir ingen god droofting. "Var Wergeland romantiker?" kan besvares med ja eller nei. "Hvordan gjenspeiler Wergelands diktning romantikkens idealer?" inviterer til analyse. For det tredje er den analytisk. Den krever ikke bare beskrivelse, men ogsa tolkning, vurdering og drøfting.

Innledningen er der du presenterer problemstillingen, men den er mer enn bare det. En god innledning har flere funksjoner. Den vekker interesse - kanskje med et sitat, en overraskende pastand, eller et relevant eksempel. Den presenterer temaet i bred forstand for den smalner inn til din spesifikke vinkling. Den avgrenser hva du vil og ikke vil ta opp. Og den gir gjerne en veiviser, en kort oversikt over hvordan teksten er bygget opp.

En klassisk feil er a begynne for smalt: "I denne oppgaven skal jeg skrive om..." Det er kjedelig og gir ingen kontekst. Begynn heller med noe som engasjerer, noe som viser hvorfor temaet er interessant eller viktig.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg2-5-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvilken av disse er den beste problemstillingen for en fagartikkel?',
        options: [
          { id: 'a', text: '"Hva er romantikken?"', isCorrect: false },
          { id: 'b', text: '"Er Ibsen en god forfatter?"', isCorrect: false },
          {
            id: 'c',
            text: '"Hvordan bruker Bjørnson retoriske virkemidler i sin 17. mai-tale?"',
            isCorrect: true,
          },
          { id: 'd', text: '"Skrev Wergeland dikt?"', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution:
          'Alternativ C er best fordi det er avgrenset (en spesifikk tale), apent (ikke ja/nei), og analytisk (krever analyse av virkemidler). A er for vid, B er subjektivt og vanskelig a besvare akademisk, og D er et ja/nei-sporsmal.',
      },
    },

    // ========== SEKSJON 2: Hoveddel og drofting ==========
    {
      id: 'norsk-vg2-5-5-n-section2',
      type: 'text',
      content: `## Kunsten a drofte

Hoveddelen er fagartikkelens kjerne. Her utvikler du argumentasjonen, presenterer bevis, og drofter saken fra flere sider. Men hva betyr egentlig a drofte?

A drofte er mer enn a beskrive. Beskrivelse sier hva som er. Drofting vurderer, sammenligner, veier for og mot. Nar du drofter, tar du et tema, ser pa det fra ulike vinkler, og trekker begrunnede konklusjoner.

En god drofting presenterer flere synspunkter. Du viser at saken er kompleks, at det finnes ulike perspektiver. Du gir motargumentene en fair behandling, du stramanner ikke motstanderne. Deretter veier du synspunktene mot hverandre. Hvilke argumenter er sterkest? Hvilke har best stotte i kildene? Til slutt trekker du en konklusjon som folger logisk av droftingen.

Strukturen i hoveddelen kan variere. En mulighet er tematisk organisering, der du tar opp ett tema av gangen. En annen er kronologisk, der du folger en utvikling over tid. En tredje er komparativ, der du sammenligner to tekster, forfattere eller fenomener.

Hvert avsnitt bor ha ett hovedpoeng. Start med en temasetning som sier hva avsnittet handler om. Utvikle poenget med eksempler og analyse. Avslutt med a vise hvordan det henger sammen med det neste. God tekstbinding gjor teksten lettere a folge.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg2-5-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva betyr det å "drofte" i en fagartikkel?',
        options: [
          { id: 'a', text: 'A gjenfortelle hva kildene sier', isCorrect: false },
          { id: 'b', text: 'A gi sin personlige mening uten begrunnelse', isCorrect: false },
          {
            id: 'c',
            text: 'A belyse en sak fra flere sider og veie argumenter mot hverandre',
            isCorrect: true,
          },
          { id: 'd', text: 'A skrive sa langt som mulig om et tema', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution:
          'A drofte betyr a belyse en sak fra flere sider, vurdere ulike argumenter, og veie dem mot hverandre for a komme frem til en begrunnet konklusjon. Det er noe mer enn bare gjenfortelling eller personlig synsing.',
      },
    },

    // ========== SEKSJON 3: Kildebruk i fagartikkelen ==========
    {
      id: 'norsk-vg2-5-5-n-section3',
      type: 'text',
      content: `## Kildene som byggesteiner

En fagartikkel uten kilder er som en bygning uten fundament. Kilder gir teksten din troverdighet, viser at du har satt deg inn i temaet, og lar leseren etterprove pastandene dine.

Det finnes to hovedtyper kilder. Primærkilder er originalmaterialet du analyserer: diktet, romanen, talen, dokumentet. Sekundærkilder er andres analyser og tolkninger: forskning, laerebokeer, artikler. En god fagartikkel bruker begge. Du analyserer primærkilden med egne oyne, men drofter den i lys av hva andre har sagt.

Kilder kan brukes pa tre mater. Direkte sitat er nar du gjengir eksakte ord i anfoorselstegn. Bruk dette nar formuleringen er spesielt god eller viktig. Parafrase er nar du gjengir innholdet med egne ord, men fortsatt oppgir kilde. Bruk dette nar du vil gjengi et poeng uten a sitere ordrett. Henvisning er nar du bare viser til at en kilde finnes, uten a gjengi innhold. Bruk dette nar du vil vise til stotte for et poeng.

Det viktigste prinsippet er: Skill alltid mellom ditt og andres. Nar du parafraserer eller siterer, ma det vaere tydelig. Nar du analyserer selv, ma ogsa det vaere tydelig. En god fagartikkel veksler mellom a presentere andres synspunkter og a utvikle egne analyser.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg2-5-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom en primærkilde og en sekundærkilde?',
        options: [
          {
            id: 'a',
            text: 'Primærkilder er fra internett, sekundærkilder er fra boker',
            isCorrect: false,
          },
          {
            id: 'b',
            text: 'Primærkilder er originalmaterialet, sekundærkilder er andres analyser',
            isCorrect: true,
          },
          {
            id: 'c',
            text: 'Primærkilder er viktigere, sekundærkilder er uviktige',
            isCorrect: false,
          },
          {
            id: 'd',
            text: 'Primærkilder er gamle, sekundærkilder er nye',
            isCorrect: false,
          },
        ],
        correctAnswer: 'b',
        solution:
          'En primærkilde er originalmaterialet du analyserer (f.eks. et dikt av Wergeland), mens en sekundærkilde er andres behandling av primærkilden (f.eks. en litteraturhistorisk analyse av diktet). Begge typer er viktige i en fagartikkel.',
      },
    },

    // ========== SEKSJON 4: Avslutning og konklusjon ==========
    {
      id: 'norsk-vg2-5-5-n-section4',
      type: 'text',
      content: `## Det avgjorende punktumet

Avslutningen er din siste sjanse til a gjore inntrykk. Her samler du tradene, svarer pa problemstillingen, og gir leseren noe a tenke pa.

En god avslutning gjor tre ting. For det forste oppsummerer den hovedpunktene fra droftingen. Ikke gjenfortell alt, men trekk frem de viktigste poengene. For det andre svarer den pa problemstillingen. Etter all droftingen, hva er svaret? Hva har du kommet frem til? For det tredje avslutter den pa en minneverdig mate. Kanskje du knytter tilbake til innledningen. Kanskje du peker pa bredere implikasjoner. Kanskje du stiller et nytt sporsmal som leseren kan tenke videre pa.

En klassisk feil er a introdusere nytt stoff i avslutningen. Avslutningen skal samle det som allerede er sagt, ikke bringe inn nye argumenter. En annen feil er a vaere for forsiktig: "Kanskje kan man si at..." Hvis droftingen din har vart god, har du grunnlag for en tydelig konklusjon.

Husk at avslutningen ofte er det leseren husker best. De forste og siste inntrykkene setter seg. Sa bruk tid pa avslutningen. Skriv den gjerne flere ganger. En sterk avslutning kan lofte en hel tekst.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg2-5-5-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-5-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva bor avslutningen i en fagartikkel IKKE gjore?',
        options: [
          { id: 'a', text: 'Oppsummere hovedpunktene', isCorrect: false },
          { id: 'b', text: 'Svare pa problemstillingen', isCorrect: false },
          { id: 'c', text: 'Introdusere helt nye argumenter', isCorrect: true },
          { id: 'd', text: 'Knytte tilbake til innledningen', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution:
          'Avslutningen skal samle det som allerede er sagt, ikke introdusere nye argumenter. Nytt stoff i avslutningen forvirrer leseren og tyder pa darlig planlegging. Oppsummering, svar pa problemstilling og tilbakekobling til innledningen er derimot gode avslutningsgrep.',
      },
    },

    // ========== SEKSJON 5: Fra utkast til ferdig tekst ==========
    {
      id: 'norsk-vg2-5-5-n-section5',
      type: 'text',
      content: `## Revisjonens kunst

Forste utkast er aldri ferdig. Profesjonelle skribenter vet at skriving er omskriving. Det forste utkastet fanger ideene. Revisjonen former dem til noe som fungerer.

Revisjon skjer pa flere nivaer. Forst ser du pa helheten: Er strukturen logisk? Svarer teksten pa problemstillingen? Er det god sammenheng mellom delene? Deretter ser du pa avsnittene: Har hvert avsnitt ett hovedpoeng? Er overgangene gode? Sa ser du pa setningene: Er de klare og varierte? Er ordvalget presist? Til slutt korrektur: rettskriving, tegnsetting, referanseformat.

Et godt tips er a la teksten ligge en dag for du reviderer. Med friske oyne ser du ting du ikke sa da du skrev. Et annet tips er a lese hoyt. Da horer du om noe skurrer, om setninger er for lange, om rytmen er monoton.

Be gjerne andre om tilbakemelding. Det er vanskelig a se egne tekster objektivt. En leser som ikke har vaert med pa skriveprosessen, ser andre ting enn deg. Ta imot kritikk konstruktivt. Den gjor teksten din bedre.

Husk: A skrive en god fagartikkel tar tid. Ikke forvent perfeksjon pa forste forsok. Forvent heller en prosess der teksten gradvis blir bedre. Det er slik alle gode tekster blir til.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg2-5-5-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-5-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvorfor bor du la teksten ligge en dag for du reviderer?',
        options: [
          { id: 'a', text: 'For a fa bedre karakter', isCorrect: false },
          {
            id: 'b',
            text: 'For a fa avstand og se teksten med friske oyne',
            isCorrect: true,
          },
          { id: 'c', text: 'For a slippe a jobbe sa hardt', isCorrect: false },
          { id: 'd', text: 'For a glemme hva du skrev', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution:
          'Avstand gir perspektiv. Nar du akkurat har skrevet noe, er du for naer teksten til a se den objektivt. Ved a vente en dag eller mer, kan du lese teksten med friske oyne og oppdage feil og forbedringspotensial du ikke sa for.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg2-5-5-n-summary',
      type: 'text',
      content: `## Oppsummering: Fagartikkelens byggesteiner

Du har na laert grunnlaget for a skrive fagartikler. Her er det viktigste a huske:

**Problemstillingen:**
Bor vaere avgrenset, apen og analytisk. Den styrer hele teksten og bor formuleres tidlig i prosessen.

**Innledningen:**
Vekker interesse, presenterer tema, avgrenser, og gir veiviser. Unnga kjedelig start med "I denne oppgaven skal jeg..."

**Hoveddel og drofting:**
Drøfting er mer enn beskrivelse. Presenter flere synspunkter, vei dem mot hverandre, og trekk begrunnede konklusjoner. Hvert avsnitt bor ha ett hovedpoeng.

**Kildebruk:**
Bruk bade primær- og sekundærkilder. Skill tydelig mellom ditt og andres gjennom sitater, parafraser og referanser.

**Avslutning:**
Oppsummer hovedpunktene, svar pa problemstillingen, og avslutt minneverdig. Ikke introduser nytt stoff.

**Revisjon:**
God skriving er omskriving. La teksten ligge for du reviderer. Arbeid pa flere nivaer: helhet, avsnitt, setninger, korrektur.

**Nokkeltermer:**
Problemstilling, innledning, hoveddel, avslutning, drofting, primærkilde, sekundærkilde, sitat, parafrase, referanse, temasetning, tekstbinding, revisjon.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.6 NARRATIV: Kildebruk og referanser
// ============================================================================

export const CHAPTER_NORSK_VG2_5_6_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-5-6-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '5.6',
  title: 'Kildebruk og referanser',
  subtitle: 'Narrativ versjon',
  description:
    'Oppdag hvorfor akademisk aerlighet er avgjorende, og laer a navigere i kildebrukens regler uten a snuble.',
  estimatedMinutes: 45,
  competenceGoals: [
    'skrive fagartikler som drofter tekster i kontekst',
    'bruke kilder og referanser på en etterrettelig måte',
  ],
  linkedChapterId: 'norsk-vg2-5-6',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg2-5-6-n-intro',
      type: 'text',
      content: `## Stå på skuldrene til kjemper

Isaac Newton sa en gang: "Hvis jeg har sett lenger, er det fordi jeg har statt pa skuldrene til kjemper." Det er en vakker beskrivelse av hvordan kunnskap bygges. Vi starter ikke fra null. Vi bygger videre pa det andre har gjort for oss.

Kildebruk handler om a anerkjenne dette. Nar du skriver en tekst og bruker andres ideer, fakta eller formuleringer, sier du hvorfra de kommer. Det er ikke bare en formalitet. Det er en grunnleggende akademisk verdi: aerlighet.

Men kildebruk er ogsa praktisk. Nar du oppgir kilder, kan leseren sjekke det du skriver. De kan finne mer informasjon om temaet. De kan vurdere om kildene dine er palitelige. Kilder gjor teksten din etterprøvbar, og etterprøvbarhet er kjernen i all seriøs kunnskap.

I dette kapittelet skal vi laere hvorfor og hvordan. Vi skal forsta prinsippene bak kildebruk, laere de ulike matene a referere pa, og bli bevisste pa fallgruvene, inkludert den alvorligste av alle: plagiat.`,
    },

    // ========== SEKSJON 1: Hvorfor vi refererer ==========
    {
      id: 'norsk-vg2-5-6-n-section1',
      type: 'text',
      content: `## Aerlighet som grunnverdi

Hvorfor bryr vi oss egentlig om kilder? Er det bare byraakrati, eller er det noe dypere?

Tenk pa det slik: Kunnskap er en kollektiv innsats. Ingen forsker alene. Ingen tenker helt originalt. Vi bygger alle pa det som er tenkt og gjort for oss. Nar vi oppgir kilder, anerkjenner vi dette. Vi viser at vi er del av et fellesskap av tenkende mennesker.

Kildebruk handler ogsa om troverdighet, det vi har kalt etos. Nar du viser at du har lest relevante kilder, at du kjenner debatten, at du bygger pa solid forskning, styrker du din egen troverdighet. En tekst uten kilder virker ufundert, som synsing. En tekst med gode kilder virker informert og reflektert.

Og sa er det etterprøvbarheten. Vitenskap fungerer fordi andre kan sjekke det du sier. Hvis du pastar at "forskning viser at...", ma leseren kunne finne den forskningen. Hvis du siterer en forfatter, ma leseren kunne finne originalen. Uten kilder er prastander bare ord.

Til slutt: Kilder beskytter deg. Hvis du har oppgitt hvor informasjonen kommer fra, og kilden viser seg a vaere feil, er det ikke din feil. Du har gjort jobben din. Men hvis du fremsetter pastander uten kilder, og de viser seg a vaere feil, har du et problem.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg2-5-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvilken av disse grunnene er IKKE en god grunn til a oppgi kilder?',
        options: [
          { id: 'a', text: 'A vise akademisk aerlighet', isCorrect: false },
          { id: 'b', text: 'A la leseren etterprøve pastandene', isCorrect: false },
          {
            id: 'c',
            text: 'A gjore teksten lengre og mer imponerende',
            isCorrect: true,
          },
          { id: 'd', text: 'A styrke egen troverdighet', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution:
          'Kilder skal ikke brukes for a gjore teksten lengre eller mer imponerende, men for a vaere aerlig om hvor informasjonen kommer fra, la leseren etterprøve pastander, og styrke egen troverdighet. Kildebruk for a "pynte" er meningslos.',
      },
    },

    // ========== SEKSJON 2: Sitat, parafrase og referanse ==========
    {
      id: 'norsk-vg2-5-6-n-section2',
      type: 'text',
      content: `## Tre mater a bruke kilder pa

Det finnes tre hovedmater a bruke kilder pa, og det er viktig a kunne alle tre.

Direkte sitat er nar du gjengir eksakte ord fra kilden. Du setter teksten i anfoorselstegn og oppgir kilde med sidetall. Bruk sitat nar formuleringen er spesielt god, nar det er viktig a vise noyaktig hva kilden sier, eller nar du skal analysere selve ordvalget.

Eksempel: Ibsen lar Nora si at hun har vaert "en dukke-hustru her, likesom jeg hjemme var pappa-dukke" (Ibsen, 1879, akt 3).

Parafrase er nar du gjengir innholdet med egne ord. Du bruker fortsatt kilde, men ingen anfoorselstegn. Parafrase er nyttig nar du vil gjengi et poeng uten a sitere ordrett, eller nar du vil forenkle et komplisert argument.

Eksempel: Ifolge Templeton (1997) er Torvalds reaksjon typisk for tidens menn - han handler etter samfunnets forventninger, ikke av ondskap.

Referanse eller henvisning er nar du bare viser til at en kilde finnes, uten a gjengi innhold. Dette brukes nar du vil stotte et poeng eller vise til bakgrunnslitteratur.

Eksempel: Flere forskere har diskutert Ibsens forhold til feminismen (Templeton, 1997; Moi, 2006).

Det viktigste er a vaere konsekvent og tydelig. Leseren skal alltid vite hva som er dine ord og hva som er andres.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg2-5-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Nar bor du bruke direkte sitat i stedet for parafrase?',
        options: [
          { id: 'a', text: 'Alltid - sitater er bedre enn parafraser', isCorrect: false },
          {
            id: 'b',
            text: 'Nar formuleringen er spesielt god eller viktig a gjengi noyaktig',
            isCorrect: true,
          },
          { id: 'c', text: 'Aldri - parafraser er alltid best', isCorrect: false },
          { id: 'd', text: 'Nar du ikke forstar kilden godt nok til a parafrasere', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution:
          'Direkte sitat bor brukes nar formuleringen er spesielt god, nar det er viktig a vise noyaktig hva kilden sier (f.eks. for a analysere ordvalg), eller nar parafrase ville miste nyanser. For mye sitering kan gjore teksten oppstykket.',
      },
    },

    // ========== SEKSJON 3: Plagiat - den store fallgruven ==========
    {
      id: 'norsk-vg2-5-6-n-section3',
      type: 'text',
      content: `## Nar laning blir tyveri

Plagiat er a bruke andres arbeid uten a oppgi kilde. Det er akademisk juks, og det tas svart alvorlig. I skolen kan det gi annullert oppgave. Pa universitetet kan det fore til utvisning eller tilbaketrekking av grad.

Men hva teller egentlig som plagiat? Det finnes flere former.

Kopiplagiat er det mest apenbare: a kopiere tekst direkte uten anfoorselstegn og kilde. Selv om du bare kopierer en setning, er det plagiat.

Parafraseplagiat er mer lumsk: a gjengi innhold med litt endrede ord, men uten kilde. Selv om du har "skrevet om" teksten, er ideene fortsatt andres.

Oversettelsesplagiat er a oversette fra et annet sprak uten a oppgi kilde. At du oversatte selv, gjor det ikke til ditt eget arbeid.

Selvplagiat er a gjenbruke egen tekst fra for uten a oppgi det. Hvis du har skrevet om samme tema for, ma du si fra.

Ghostwriting er a levere andres arbeid som ditt eget, enten det er kjopt, laant eller skrevet av en venn.

Hvordan unnga plagiat? Regelen er enkel: Oppgi kilde nar du bruker andres ord, ideer eller funn. Nar du er i tvil, oppgi kilde. Det er bedre a referere for mye enn for lite.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg2-5-6-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-6-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva er parafraseplagiat?',
        options: [
          {
            id: 'a',
            text: 'A kopiere tekst ordrett uten kilde',
            isCorrect: false,
          },
          {
            id: 'b',
            text: 'A gjengi innhold med litt endrede ord, men uten kilde',
            isCorrect: true,
          },
          {
            id: 'c',
            text: 'A oversette tekst fra et annet sprak',
            isCorrect: false,
          },
          {
            id: 'd',
            text: 'A bruke egne notater som kilde',
            isCorrect: false,
          },
        ],
        correctAnswer: 'b',
        solution:
          'Parafraseplagiat er a gjengi andres innhold med litt endrede ord, men uten a oppgi kilde. Det hjelper ikke a "skrive om" teksten - ideene er fortsatt andres, og de krever kilde. Dette er en vanlig form for plagiat fordi mange ikke vet at det er galt.',
      },
    },

    // ========== SEKSJON 4: Referansesystemer ==========
    {
      id: 'norsk-vg2-5-6-n-section4',
      type: 'text',
      content: `## Spillets regler - APA, Harvard og Chicago

Det finnes flere standardiserte mater a oppgi kilder pa, kalt referansesystemer. De vanligste er APA, Harvard og Chicago. Alle gjor den samme jobben - de forteller leseren hvor informasjonen kommer fra - men de gjor det pa litt ulike mater.

APA-stilen (American Psychological Association) brukes mye i samfunnsvitenskap og psykologi. Den bruker parenteser i teksten med forfatter og arstall: (Forfatter, 2023). Full informasjon kommer i litteraturlisten til slutt.

Harvard-stilen ligner mye pa APA og brukes mye i Norge og Storbritannia. Ogsa her brukes parenteser: (Forfatter arstall: sidetal).

Chicago-stilen brukes ofte i humaniora, saerlig i historiske fag. Den bruker fotnoter nederst pa siden i stedet for parenteser i teksten. Dette gir renere lesetekst, men kan gjore bunnen av siden travel.

Hvilken stil du bruker, avhenger ofte av faget eller laereren. Det viktigste er a vaere konsekvent. Velg en stil og hold deg til den gjennom hele teksten.

Litteraturlisten til slutt er like viktig som referansene i teksten. Her oppgir du full informasjon om alle kildene: forfatter, tittel, utgiver, ar, og for nettkilder: URL og hentet-dato. Litteraturlisten ordnes alfabetisk etter forfatternavn.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg2-5-6-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-6-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva er hovedforskjellen mellom APA-stilen og Chicago-stilen?',
        options: [
          {
            id: 'a',
            text: 'APA er amerikansk, Chicago er europeisk',
            isCorrect: false,
          },
          {
            id: 'b',
            text: 'APA bruker parenteser i teksten, Chicago bruker fotnoter',
            isCorrect: true,
          },
          {
            id: 'c',
            text: 'APA er for boker, Chicago er for artikler',
            isCorrect: false,
          },
          {
            id: 'd',
            text: 'Det er ingen forskjell, de er det samme',
            isCorrect: false,
          },
        ],
        correctAnswer: 'b',
        solution:
          'Hovedforskjellen er at APA (og Harvard) bruker parenteshenvisninger i teksten (Forfatter, ar), mens Chicago bruker fotnoter nederst pa siden. Begge fungerer godt, men valget avhenger ofte av faglig tradisjon.',
      },
    },

    // ========== SEKSJON 5: Praktiske tips ==========
    {
      id: 'norsk-vg2-5-6-n-section5',
      type: 'text',
      content: `## Kildebruk i praksis

La oss avslutte med noen praktiske tips som gjor kildebruken din enklere og bedre.

Hold orden fra starten. Nar du leser en kilde, noter med en gang forfatter, tittel, ar og sidetal. Det er mye lettere enn a prove a finne igjen informasjonen senere. Bruk gjerne et referanseverktoy som Zotero eller EndNote.

Integrer kildene smidig. Ikke bare list opp kilder - bruk dem aktivt i argumentasjonen. "Ifolge Hansen...", "Hansen argumenterer for at...", "Dette stotter Hansens poeng om...". La kildene bli del av teksten, ikke bare fotnoter.

Varier maten du refererer pa. Noen ganger forfatter i teksten ("Hansen hevder at..."), noen ganger i parentes ("...som forskning har vist (Hansen, 2023)"). Noen ganger sitat, noen ganger parafrase. Variasjon gjor teksten mer levende.

Sjekk alltid til slutt. Stemmer alle referanser i teksten med litteraturlisten? Er referansestilen konsekvent? Er det noe du har glemt a referere? En siste sjekk kan redde deg fra pinlige feil.

Nar du er i tvil, oppgi kilde. Det verste som kan skje er at du refererer mer enn nodvendig. Det er langt bedre enn a bli mistenkt for plagiat.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg2-5-6-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-6-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva er det beste radet nar du er usikker pa om noe trenger kilde?',
        options: [
          { id: 'a', text: 'Dropp kilden - det er sikkert greit', isCorrect: false },
          { id: 'b', text: 'Spor en venn om de tror det trenger kilde', isCorrect: false },
          { id: 'c', text: 'Oppgi kilde - det er bedre a referere for mye enn for lite', isCorrect: true },
          { id: 'd', text: 'Slett hele avsnittet sa du slipper a tenke pa det', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution:
          'Nar du er i tvil, oppgi kilde. Det verste som kan skje er at du refererer mer enn nodvendig, og det er aldri feil. Manglende kildehenvisning kan derimot vaere plagiat, som har alvorlige konsekvenser.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg2-5-6-n-summary',
      type: 'text',
      content: `## Oppsummering: Kildebrukens regler

Du har na laert grunnlaget for god kildebruk. Her er det viktigste a huske:

**Hvorfor kilder:**
Kilder viser akademisk aerlighet, gjor teksten etterprøvbar, styrker troverdigheten din, og beskytter deg mot anklagelser om feil.

**Tre mater a bruke kilder:**
Direkte sitat gjengir eksakte ord i anfoorselstegn. Parafrase gjengir innhold med egne ord. Referanse bare viser til at en kilde finnes.

**Plagiat:**
A bruke andres arbeid uten kilde. Inkluderer kopiplagiat, parafraseplagiat, oversettelsesplagiat, selvplagiat og ghostwriting. Konsekvensene er alvorlige.

**Referansesystemer:**
APA og Harvard bruker parenteser i teksten. Chicago bruker fotnoter. Vaer konsekvent i valgt stil.

**Praktiske tips:**
Hold orden fra starten. Integrer kilder smidig. Varier referansematen. Sjekk til slutt. Nar i tvil, oppgi kilde.

**Nokkeltermer:**
Kilde, primærkilde, sekundærkilde, sitat, parafrase, referanse, plagiat, litteraturliste, APA, Harvard, Chicago.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.7 NARRATIV: Kritisk lesing av kilder
// ============================================================================

export const CHAPTER_NORSK_VG2_5_7_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-5-7-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '5.7',
  title: 'Kritisk lesing av kilder',
  subtitle: 'Narrativ versjon',
  description:
    'Bli en kritisk leser som kan skille gull fra grav i informasjonsjungelen.',
  estimatedMinutes: 50,
  competenceGoals: [
    'vurdere og bruke kilder på en kritisk og etterrettelig måte',
    'reflektere over sakprosateksters formål og kontekst',
  ],
  linkedChapterId: 'norsk-vg2-5-7',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg2-5-7-n-intro',
      type: 'text',
      content: `## I jungelen av informasjon

Vi lever i en tid med mer informasjon enn noen generasjon for oss. Med noen tastetrykk kan du finne svar pa nesten ethvert sporsmaal. Men her er problemet: Ikke alle svar er like gode. Noen er palitelige, andre er usikre, og noen er rett og slett feil.

Tenk deg at du er pa jakt etter sannheten om et tema. Du googler, og opp kommer tusenvis av treff. Noen er fra universiteter, andre fra aviser, noen fra blogger, noen fra anonyme forum. Hvordan skal du vite hva du kan stole pa?

Svaret er kritisk kildevurdering. Det betyr ikke a vaere negativ til alt du leser. Det betyr a stille sporsmal, undersoke, og vurdere for du aksepterer noe som sant. Det betyr a behandle informasjon som en detektiv behandler bevis: med nysgjerrighet, men ogsa med skepsis.

I dette kapittelet skal vi laere a navigere i informasjonsjungelen. Vi skal utvikle verktoy for a vurdere kilder, gjenkjenne falsk informasjon, og ta mer informerte beslutninger om hva vi kan stole pa.`,
    },

    // ========== SEKSJON 1: De fire hovedsporsmalene ==========
    {
      id: 'norsk-vg2-5-7-n-section1',
      type: 'text',
      content: `## Fire sporsmal som avslorer sannheten

Nar du moter en ny kilde, still fire grunnleggende sporsmal. De avslorer mye om kildens palitelighet.

HVEM star bak kilden? Er det en anerkjent forsker, en journalist, en organisasjon, eller en anonym blogger? Har de kompetanse pa feltet? Har de interesser som kan farge fremstillingen? En oljebransjerapport om klima bor leses annerledes enn en uavhengig forskerrapport.

HVA sier kilden egentlig? Er pastandene etterprøvbare? Er det skilt mellom fakta og meninger? Bruker kilden selv kilder, eller bare pastar ting? En artikkel full av udokumenterte pastander fortjener skepsis.

HVORFOR er kilden skrevet? Er formalet a informere, overbevise, selge, eller underholde? Er det apenbar propaganda, reklame forkledd som informasjon, eller genuin opplysning? Skjulte agendaer undergraver troverdighet.

HVORDAN er informasjonen fremskaffet? For forskning: Hvilken metode er brukt? Er den beskrevet tydelig? For journalistikk: Er kildene oppgitt? Er fremstillingen balansert? Gjennomsiktighet er et godt tegn.

Disse fire sporsmalene tar ikke lang tid a stille. Men de kan spare deg for a falle for feilinformasjon.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg2-5-7-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-7-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'En nettside om sunn mat er sponset av et kosttilskuddsfirma. Hvilket sporsmal bor du stille?',
        options: [
          { id: 'a', text: 'HVA sier kilden?', isCorrect: false },
          { id: 'b', text: 'HVORFOR er kilden skrevet - har de en agenda?', isCorrect: true },
          { id: 'c', text: 'HVORDAN er informasjonen fremskaffet?', isCorrect: false },
          { id: 'd', text: 'HVEM har flest folgerere pa sosiale medier?', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution:
          'Nar en kilde er sponset av et firma, er HVORFOR-sporsmaalet avgjorende. Firmaet har okonomisk interesse av at du kjoper produktene deres, noe som kan farge fremstillingen. Det betyr ikke at alt er feil, men du bor vaere ekstra kritisk.',
      },
    },

    // ========== SEKSJON 2: Ulike kildetyper ==========
    {
      id: 'norsk-vg2-5-7-n-section2',
      type: 'text',
      content: `## Ikke alle kilder er like

Ulike kildetyper har ulike styrker og svakheter. A kjenne dem hjelper deg a vurdere palitelighet.

Vitenskapelige kilder, som fagfellevurderte artikler og akademiske boker, har hoyest troverdighet. De er kvalitetssikret av eksperter, beskriver metode, og refererer til andre studier. Men de kan vaere utdaterte, vanskelig tilgjengelige, eller ha faglig uenighet.

Leksika og oppslagsverk, som Store norske leksikon, gir god oversikt og har redaksjonell kontroll. Wikipedia er nyttig som startpunkt, men kvaliteten varierer mellom artikler. Bruk heller kildene Wikipedia refererer til.

Nyhetsmedier gir aktuelle perspektiver og folger journalistiske standarder. Men nyheter kan vaere vinklet, tidsnod gir feil, og sensasjonalisme kan forvrenge. Sammenlign flere nyhetskilder.

Sosiale medier og blogger gir rask tilgang til mange perspektiver, men mangler ofte kvalitetskontroll. Anonymitet gjor det vanskelig a vurdere kompetanse. Ekkokamre forsterker ensidige syn.

Som hovedregel: Jo mer kvalitetskontroll en kilde har gjennomgatt, jo mer palitelig er den. En fagfellevurdert artikkel har hoyere troverdighet enn et blogginnlegg.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg2-5-7-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-7-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hvilken kildetype har typisk hoyest troverdighet?',
        options: [
          { id: 'a', text: 'Blogginnlegg fra en engasjert person', isCorrect: false },
          { id: 'b', text: 'Fagfellevurderte vitenskapelige artikler', isCorrect: true },
          { id: 'c', text: 'Twitter-traader med mange likes', isCorrect: false },
          { id: 'd', text: 'YouTube-videoer med mange visninger', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution:
          'Fagfellevurderte vitenskapelige artikler har hoyest troverdighet fordi de er kvalitetssikret av eksperter, beskriver metode, og bygger pa dokumentert forskning. Popularitet (likes, visninger) sier ingenting om palitelighet.',
      },
    },

    // ========== SEKSJON 3: Triangulering ==========
    {
      id: 'norsk-vg2-5-7-n-section3',
      type: 'text',
      content: `## Tre vitner er bedre enn ett

Triangulering er en av de viktigste strategiene for kildekritikk. Navnet kommer fra navigasjon, der man bruker tre punkter for a bestemme en posisjon. I kildevurdering betyr det a sjekke informasjon mot flere uavhengige kilder.

Tanken er enkel: Hvis tre uavhengige, palitelige kilder sier det samme, er det sannsynligvis sant. Hvis bare en kilde sier noe som ingen andre bekrefter, bor du vaere skeptisk.

Hvordan gjor du det i praksis? Si at du finner en pastand pa en blogg. For du stoler pa den, sook etter det samme i en fagbok eller vitenskapelig artikkel, i en serioos nyhetsavis, og i et anerkjent leksikon. Hvis alle tre bekrefter, er pastanden trolig riktig.

Men pass pa: Kildene ma vaere uavhengige. Hvis alle tre bare siterer hverandre, eller alle bygger pa samme opprinnelige kilde, er det ikke ekte triangulering. Sook etter kilder som har kommet frem til samme konklusjon pa uavhengige veier.

Triangulering tar litt tid, men det er tiden verdt. Det er forskjellen mellom a gjette og a vite.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg2-5-7-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-7-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva er triangulering i kildekritisk sammenheng?',
        options: [
          {
            id: 'a',
            text: 'A dele teksten inn i tre deler',
            isCorrect: false,
          },
          {
            id: 'b',
            text: 'A sjekke informasjonen mot flere uavhengige kilder',
            isCorrect: true,
          },
          {
            id: 'c',
            text: 'A bruke tre forskjellige referansestiler',
            isCorrect: false,
          },
          {
            id: 'd',
            text: 'A skrive tre utkast av teksten',
            isCorrect: false,
          },
        ],
        correctAnswer: 'b',
        solution:
          'Triangulering betyr a sjekke informasjon mot flere uavhengige kilder. Hvis tre ulike, palitelige kilder bekrefter samme informasjon, er den trolig korrekt. Det er en av de viktigste teknikkene for a unnga feilinformasjon.',
      },
    },

    // ========== SEKSJON 4: Falsk informasjon ==========
    {
      id: 'norsk-vg2-5-7-n-section4',
      type: 'text',
      content: `## Nar informasjon lyver

Falsk informasjon er en av var tids storste utfordringer. Den spres raskere enn sannheten, ofte fordi den spiller pa folelser som frykt og sinne. A kjenne igjen den er en nodvendig ferdighet.

Desinformasjon er bevisst falsk informasjon spredt for a villede. Det er propaganda, lognaktige kampanjer, og falske nyheter laget for a manipulere. Avsenderen vet at det er usant.

Misinformasjon er feilaktig informasjon spredt uten vond hensikt. Noen tror oppriktig pa det de sprer, selv om det er galt. Resultatet er det samme, men intensjonen er annerledes.

Varseltegn pa falsk informasjon inkluderer sensasjonelle pastander uten kilder, anonyme eller ukjente avsendere, darlig sprak og mange feil, sterk appell til frykt eller sinne, oppfordring til a dele raskt, og innhold som virker "for godt til a vaere sant".

Hva gjor du nar du mistenker falsk informasjon? Bruk triangulering. Sjekk faktasjekknettsteder som Faktisk.no. Goor omvendt bildesok for a se om bilder er gamle eller manipulerte. Og viktigst: Ikke del for du har sjekket.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg2-5-7-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-7-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom desinformasjon og misinformasjon?',
        options: [
          {
            id: 'a',
            text: 'Det er ingen forskjell, begge betyr det samme',
            isCorrect: false,
          },
          {
            id: 'b',
            text: 'Desinformasjon spres bevisst for a villede, misinformasjon spres uten vond hensikt',
            isCorrect: true,
          },
          {
            id: 'c',
            text: 'Desinformasjon finnes bare pa internett',
            isCorrect: false,
          },
          {
            id: 'd',
            text: 'Misinformasjon er alltid mer skadelig',
            isCorrect: false,
          },
        ],
        correctAnswer: 'b',
        solution:
          'Desinformasjon er bevisst falsk informasjon spredt for a villede - avsenderen vet at det er usant. Misinformasjon er feilaktig informasjon spredt uten vond hensikt - avsenderen tror det er sant. Begge er problematiske, men intensjonen er ulik.',
      },
    },

    // ========== SEKSJON 5: Praktisk kildekritikk ==========
    {
      id: 'norsk-vg2-5-7-n-section5',
      type: 'text',
      content: `## Sjekklisten din

La oss avslutte med en praktisk sjekkliste du kan bruke nar du vurderer kilder.

For nettsider: Sjekk URL-en. Er det en kjent organisasjon? Finn "Om oss"-siden og se hvem som star bak. Se etter kilder og referanser. Vurder spraket - er det noytral eller ladet? Sjekk datoen - er informasjonen oppdatert?

For sosiale medier: Hvem delte dette? Er det en kjent og palitelig kilde? Er innholdet satire eller parodi? Kan du finne originalkilden? Bruk omvendt bildesok for a sjekke bilder.

For alle kilder: Still de fire hovedsporsmalene (hvem, hva, hvorfor, hvordan). Bruk triangulering mot andre kilder. Vaer ekstra kritisk til sensasjonelle pastander. Sjekk faktasjekknettsteder ved mistanke.

Nyttige verktoy: Faktisk.no for norsk faktasjekk. Snopes.com for internasjonal faktasjekk. Google Scholar for vitenskapelige artikler. TinEye eller Google bildesok for omvendt bildesok.

Husk: A vaere kritisk er ikke a vaere kynisk. Det er a vaere nysgjerrig, a stille sporsmal, a lete etter sannheten. Det er en styrke, ikke en svakhet.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg2-5-7-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-7-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvilket av disse er et varseltegn pa falsk informasjon?',
        options: [
          { id: 'a', text: 'Artikkelen oppgir kilder og forfatternavn', isCorrect: false },
          { id: 'b', text: 'Artikkelen har noytral tone og balansert fremstilling', isCorrect: false },
          {
            id: 'c',
            text: 'Artikkelen bruker sensasjonelle pastander og oppfordrer til rask deling',
            isCorrect: true,
          },
          { id: 'd', text: 'Artikkelen er publisert av et universitet', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution:
          'Sensasjonelle pastander og oppfordring til rask deling er klassiske varseltegn pa falsk informasjon. Serioose kilder har noytral tone, oppgir forfatter og kilder, og presser deg ikke til a dele for du har tenkt deg om.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg2-5-7-n-summary',
      type: 'text',
      content: `## Oppsummering: Din kritiske verktooykasse

Du har na laert grunnlaget for kritisk kildevurdering. Her er det viktigste a huske:

**De fire hovedsporsmalene:**
HVEM star bak? HVA sier kilden? HVORFOR er den skrevet? HVORDAN er informasjonen fremskaffet?

**Kildetyper:**
Vitenskapelige kilder har hoyest troverdighet, deretter leksika, sa nyhetsmedier, og til slutt sosiale medier. Jo mer kvalitetskontroll, jo mer palitelig.

**Triangulering:**
Sjekk informasjon mot flere uavhengige kilder. Tre bekreftelser er bedre enn en.

**Falsk informasjon:**
Desinformasjon spres bevisst for a villede. Misinformasjon spres uten vond hensikt. Begge krever skepsis og faktasjekk.

**Praktiske verktoy:**
Faktisk.no, Snopes.com, Google Scholar, omvendt bildesok.

**Nokkeltermer:**
Kildekritikk, triangulering, desinformasjon, misinformasjon, fagfellevurdering, bias, interessekonflikt, faktasjekk.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.8 NARRATIV: Praktisk tekstutvikling og revisjon
// ============================================================================

export const CHAPTER_NORSK_VG2_5_8_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-5-8-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '5.8',
  title: 'Praktisk tekstutvikling og revisjon',
  subtitle: 'Narrativ versjon',
  description:
    'Oppdag hemmeligheten alle gode skribenter kjenner: god skriving er omskriving.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke tilbakemeldinger og kunnskap om sprak til a utvikle egne tekster',
    'vurdere og revidere egne tekster ut fra faglige kriterier',
  ],
  linkedChapterId: 'norsk-vg2-5-8',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg2-5-8-n-intro',
      type: 'text',
      content: `## Hemmeligheten de beste skribentene kjenner

Det er en myte at gode tekster flyter ut av gode skribenter ferdig formet, som Athene fra Zeus' hode. Sannheten er mer prosaisk og mer oppmuntrende: Gode tekster blir til gjennom arbeid. Forste utkast er bare ramaterialet. Det er i revisjonen magien skjer.

Ernest Hemingway skal ha sagt: "The first draft of anything is shit." Det er grovt sagt, men poenget star seg: Forvent ikke perfeksjon forste gang. Forste utkast fanger ideene. Deretter former du dem.

Dette betyr at du aldri trenger a vaere lammet av kravet om a skrive perfekt fra starten. Skriv. Fa noe ned pa papiret. Det er lettere a forbedre noe som eksisterer enn a forbedre en tom side.

I dette kapittelet skal vi laere a se pa egne tekster med kritiske, men kjaarlige oyne. Vi skal utvikle verktoy for selvvurdering, forsta hvordan tilbakemeldinger fungerer, og laere a revidere systematisk. Nar vi er ferdige, vil du ha en prosess som gjor deg til en bedre skribent for hver tekst du skriver.`,
    },

    // ========== SEKSJON 1: Revisjon pa flere nivaer ==========
    {
      id: 'norsk-vg2-5-8-n-section1',
      type: 'text',
      content: `## Fra det store til det lille

Revisjon handler ikke bare om a rette skrivefeil. Det er en flernivaprosess der du starter med de store tingene og jobber deg nedover til detaljene.

Pa det overste nivaet ser du pa innhold og struktur. Er hovedbudskapet tydelig? Svarer teksten pa problemstillingen? Er argumentasjonen logisk? Er det huller i resonnementet? Pa dette nivaet kan du ende opp med a skrive om hele avsnitt, flytte deler rundt, eller kutte ting som ikke fungerer.

Pa neste niva ser du pa avsnitt og sammenheng. Har hvert avsnitt ett klart hovedpoeng? Er det gode overganger mellom avsnittene? Flyter teksten, eller hopper den rundt? Her jobber du med temasetninger og tekstbinding.

Sa kommer setningsnivaet. Er setningene klare og varierte? Er ordvalget presist? Er tonen passende for sjangeren? Her polerer du formuleringene og luker ut uklarhet.

Til slutt kommer korrektur. Rettskriving, tegnsetting, referanseformat. Dette er det siste du gjor, for det gir ingen mening a rette skrivefeil i setninger du ender opp med a slette.

Nokkelen er a jobbe ovenfra og ned. Ikke bruk tid pa komma for du vet at avsnittet skal vaere med.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg2-5-8-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-8-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'I hvilken rekkefolge bor du revidere en tekst?',
        options: [
          {
            id: 'a',
            text: 'Forst skrivefeil, deretter struktur, sa innhold',
            isCorrect: false,
          },
          {
            id: 'b',
            text: 'Forst innhold og struktur, deretter avsnitt, sa setninger, til slutt korrektur',
            isCorrect: true,
          },
          {
            id: 'c',
            text: 'Alt pa en gang for a spare tid',
            isCorrect: false,
          },
          {
            id: 'd',
            text: 'Bare korrektur - resten er bra nok',
            isCorrect: false,
          },
        ],
        correctAnswer: 'b',
        solution:
          'Revisjon bor ga fra det store til det lille: forst innhold og struktur (de viktigste sporsmalene), deretter avsnitt og sammenheng, sa setninger og sprak, og til slutt korrektur. A rette skrivefeil i setninger du ender opp med a slette er bortkastet tid.',
      },
    },

    // ========== SEKSJON 2: A lese egen tekst kritisk ==========
    {
      id: 'norsk-vg2-5-8-n-section2',
      type: 'text',
      content: `## Fremmede oyne pa egen tekst

Det vanskeligste med revisjon er a se egen tekst objektivt. Du vet hva du mener, sa du leser det du mente a skrive, ikke det du faktisk skrev. Her er noen strategier for a overkomme dette.

La teksten ligge. Jo lenger du venter, jo mer fremmede oyne far du. Et dogn er bra, to er bedre. Nar du kommer tilbake, vil du se ting du ikke sa for.

Les hoyt. Nar du leser teksten hoyt, horer du ting du ikke ser. Lange setninger som tar pusten fra deg. Gjentakelser som blir apenbare. Overganger som mangler. Les hoyt, gjerne for noen andre.

Bytt perspektiv. Forestill deg at du er en kritisk sensor som leter etter feil. Eller en leser som ikke kan noe om temaet. Eller noen som er uenig med deg. Hvert perspektiv avslorer nye svakheter.

Bruk en sjekkliste. En systematisk gjennomgang sikrer at du ikke glemmer noe. Innledning: Vekker den interesse? Er problemstillingen tydelig? Hoveddel: Er argumentasjonen logisk? Brukes kilder? Avslutning: Oppsummerer den? Svarer den pa problemstillingen?

Print ut teksten. Vi leser annerledes pa papir enn pa skjerm. Feil vi overser digitalt, blir synlige pa papir. Det er merkelig, men det fungerer.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg2-5-8-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-8-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hvorfor bor du la teksten ligge for du reviderer?',
        options: [
          { id: 'a', text: 'For a slippe a jobbe sa mye', isCorrect: false },
          {
            id: 'b',
            text: 'For a fa avstand og se teksten med friske oyne',
            isCorrect: true,
          },
          { id: 'c', text: 'For a glemme hva du skrev', isCorrect: false },
          { id: 'd', text: 'For a gjore laereren glad', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution:
          'Avstand gir perspektiv. Nar du akkurat har skrevet noe, leser du det du mente a skrive, ikke det du faktisk skrev. Ved a la teksten ligge en dag eller mer, kan du se den mer objektivt og oppdage feil du ikke sa for.',
      },
    },

    // ========== SEKSJON 3: Vanlige feil og hvordan fikse dem ==========
    {
      id: 'norsk-vg2-5-8-n-section3',
      type: 'text',
      content: `## Feilenes hall of fame

Noen feil dukker opp igjen og igjen i elevtekster. A kjenne dem gjor det lettere a unnga dem.

Gjentakelser er en klassiker. "Teksten handler om. I teksten ser vi. Forfatteren av teksten..." Variasjon er nokkelen. Bruk synonymer, pronomen, og varier setningsstruktur.

Vage formuleringer svekker teksten. "Det er pa en mate saann at..." "Liksom, det er jo ganske tydelig at..." Si det du mener, direkte og presist.

Manglende tekstbinding gjor teksten hakkete. "Ibsen skrev Et dukkehjem. Nora er hovedpersonen. Hun er gift med Torvald." Setningene henger ikke sammen. Bruk tekstbindingsord: "Et dukkehjem handler om Nora, som er gift med Torvald..."

Avsnitt uten hovedpoeng forvirrer leseren. Hvert avsnitt bor ha en klar temasetning som sier hva det handler om. Resten utvikler dette poenget.

Muntlig stil i skriftlig tekst er upassende. "Liksom", "typ", "skikkelig" horer hjemme i samtaler, ikke i fagartikler. Tilpass spraket til sjangeren.

Nar du reviderer, let aktivt etter disse feilene. De er vanlige fordi de er lette a gjore, men de er ogsa lette a fikse nar du forst ser dem.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg2-5-8-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-8-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hvilken setning har best tekstbinding?',
        options: [
          {
            id: 'a',
            text: '"Ibsen skrev stykket. Nora er hovedpersonen. Torvald er mannen hennes."',
            isCorrect: false,
          },
          {
            id: 'b',
            text: '"Ibsen skrev stykket der Nora er hovedpersonen. Hun er gift med Torvald, og ekteskapet er sentralt i handlingen."',
            isCorrect: true,
          },
          {
            id: 'c',
            text: '"Stykket. Nora. Torvald. Ekteskap."',
            isCorrect: false,
          },
          {
            id: 'd',
            text: '"Han skrev det. Hun er der. De er gift."',
            isCorrect: false,
          },
        ],
        correctAnswer: 'b',
        solution:
          'Alternativ B har best tekstbinding fordi det bruker relativsetninger ("der Nora er hovedpersonen") og konjunksjoner ("og ekteskapet er sentralt") til a skape sammenheng mellom opplysningene. De andre alternativene er hakkete eller uklare.',
      },
    },

    // ========== SEKSJON 4: A bruke tilbakemeldinger ==========
    {
      id: 'norsk-vg2-5-8-n-section4',
      type: 'text',
      content: `## Tilbakemeldinger som gave

Tilbakemeldinger kan fooles ubehagelige. Ingen liker a fa pekt pa feil. Men tilbakemeldinger er en gave. De viser deg ting du ikke kunne sett selv. A laere a ta imot og bruke tilbakemeldinger er en superkraft.

Forst: Forsta hva kommentaren faktisk betyr. "Utdyp" betyr at du har en god ide, men leseren trenger mer forklaring. "Kilde?" betyr at du pastar noe som trenger dokumentasjon. "Uklart" betyr at formuleringen forvirrer. "Overgang?" betyr at teksten hopper.

Deretter: Prioriter. Du trenger ikke fikse alt pa en gang. Begynn med de storste problemene - struktur og innhold. Deretter spraklige problemer. Til slutt smaating. A fikse alt samtidig er overveldende.

Sa: Gjor endringene systematisk. Les alle kommentarene forst for a fa oversikt. Grupper dem etter type. Jobb med en ting av gangen. Sjekk at endringene ikke skaper nye problemer.

Til slutt: Se monster. Hvis du far samme kommentar gang pa gang, har du funnet et forbedringspotensial. Kanskje du alltid glemmer overganger, eller alltid er for vag. A kjenne dine svakheter er forste steg mot a overvinne dem.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg2-5-8-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-8-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva betyr laererkommentaren "Utdyp!" vanligvis?',
        options: [
          {
            id: 'a',
            text: 'Du har skrevet helt feil og ma begynne pa nytt',
            isCorrect: false,
          },
          {
            id: 'b',
            text: 'Du har en god ide, men leseren trenger mer forklaring eller eksempler',
            isCorrect: true,
          },
          {
            id: 'c',
            text: 'Teksten er for lang og ma kortes ned',
            isCorrect: false,
          },
          {
            id: 'd',
            text: 'Du har brukt for mange kilder',
            isCorrect: false,
          },
        ],
        correctAnswer: 'b',
        solution:
          '"Utdyp" betyr at du har et godt poeng, men at det trenger mer utvikling. Leseren forstar ikke helt hva du mener, eller trenger flere eksempler, forklaringer eller begrunnelser for a folge tanken din. Det er ikke kritikk av ideen, men et onske om mer.',
      },
    },

    // ========== SEKSJON 5: En livslang ferdighet ==========
    {
      id: 'norsk-vg2-5-8-n-section5',
      type: 'text',
      content: `## Skribenten du blir

Revisjon er ikke bare en teknikk for skolen. Det er en ferdighet du vil bruke resten av livet. Hver gang du skriver en jobbsooknad, et viktig mail, en rapport eller et blogginnlegg, vil evnen til a forbedre egne tekster komme til nytte.

De beste skribentene er ikke de som skriver perfekt forste gang. De er de som er villige til a jobbe med teksten til den er god. De vet at forste utkast bare er begynnelsen. De ser revisjon ikke som en byrde, men som en mulighet.

Og her er det virkelig fine: For hver tekst du reviderer, blir du litt bedre. Du laerer a se feil fortere. Du utvikler instinkter for hva som fungerer. Du bygger opp et repertoar av losninger. Revisjon er ikke bare a forbedre denne teksten, det er a forbedre deg selv som skribent.

Sa omfavn prosessen. Se ikke pa forste utkast som en dom, men som et utgangspunkt. Se pa tilbakemeldinger som hjelp, ikke kritikk. Se pa revisjon som muligheten til a gjore noe godt til noe utmerket.

For det er sannheten om skriving: Det er en ferdighet, ikke en gave. Og ferdigheter kan laeres, oves og mestres. Du er pa vei.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg2-5-8-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-8-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvorfor er revisjon en livslang ferdighet?',
        options: [
          {
            id: 'a',
            text: 'Fordi skolen krever det i alle fag',
            isCorrect: false,
          },
          {
            id: 'b',
            text: 'Fordi du alltid vil ha behov for a forbedre tekster du skriver',
            isCorrect: true,
          },
          {
            id: 'c',
            text: 'Fordi datamaskiner ikke kan rette feil',
            isCorrect: false,
          },
          {
            id: 'd',
            text: 'Fordi det star i laereplanen',
            isCorrect: false,
          },
        ],
        correctAnswer: 'b',
        solution:
          'Revisjon er en livslang ferdighet fordi du alltid vil skrive tekster som kan forbedres - jobbsoknader, rapporter, mailer, innlegg. Evnen til a se og forbedre egne svakheter er verdifull i alle sammenhenger der skriftlig kommunikasjon er viktig.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg2-5-8-n-summary',
      type: 'text',
      content: `## Oppsummering: Revisjonens kunst

Du har na laert grunnlaget for a forbedre egne tekster. Her er det viktigste a huske:

**Revisjon pa flere nivaer:**
Start med innhold og struktur, deretter avsnitt og sammenheng, sa setninger og sprak, og til slutt korrektur. Jobb fra det store til det lille.

**Strategier for objektivitet:**
La teksten ligge. Les hoyt. Bytt perspektiv. Bruk sjekkliste. Print ut teksten.

**Vanlige feil:**
Gjentakelser, vage formuleringer, manglende tekstbinding, avsnitt uten hovedpoeng, muntlig stil i skriftlig tekst.

**A bruke tilbakemeldinger:**
Forsta hva kommentaren betyr. Prioriter de storste problemene. Jobb systematisk. Se etter monster i tilbakemeldingene.

**Livslang ferdighet:**
Revisjon gjor deg til en bedre skribent for hver tekst. Det er en ferdighet som vil tjene deg resten av livet.

**Nokkeltermer:**
Revisjon, forste utkast, tekstbinding, temasetning, tilbakemelding, korrektur, sjekkliste.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.9 NARRATIV: Argumentasjonsteori og feilslutninger
// ============================================================================

export const CHAPTER_NORSK_VG2_5_9_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-5-9-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '5.9',
  title: 'Argumentasjonsteori og feilslutninger',
  subtitle: 'Narrativ versjon',
  description:
    'Bli en mester i a gjenkjenne gode og darlige argumenter - en ferdighet som vil gjore deg til en bedre tenker, skribent og borger.',
  estimatedMinutes: 55,
  competenceGoals: [
    'reflektere over sakprosatekster og retorisk situasjon',
    'analysere og tolke tekster med bruk av fagbegreper',
    'bruke og variere spraklige og retoriske virkemidler',
    'vurdere argumentasjon og kilder kritisk',
  ],
  linkedChapterId: 'norsk-vg2-5-9',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg2-5-9-n-intro',
      type: 'text',
      content: `## Argumentasjonens mesterklasse

Hver dag blir du bombardert med argumenter. Politikere vil ha stemmen din. Reklamer vil ha pengene dine. Venner vil at du skal gi dem rett. Sosiale medier vil ha oppmerksomheten din. Alle prover a overbevise deg om noe.

Men er alle argumenter like gode? Selvfolgelig ikke. Noen argumenter er solide som fjell, bygget pa fakta og logikk. Andre er luftslott, basert pa feil, manipulasjon eller rent lureri. A kunne skille de gode fra de darlige er en av de viktigste ferdighetene du kan utvikle.

Dette handler ikke bare om a vinne diskusjoner. Det handler om a tenke klarere, ta bedre beslutninger, og ikke la deg lure. Det handler om a vaere en informert borger i et demokrati der argumenter, ikke makt, skal avgjore.

I dette kapittelet skal vi bore dypt inn i argumentasjonens verden. Vi skal laere hva et argument egentlig er, hvordan man bygger gode argumenter, og, like viktig, hvordan man gjenkjenner de klassiske feilene som gjor argumenter ugyldige. Nar vi er ferdige, vil du aldri hore et argument pa samme mate igjen.`,
    },

    // ========== SEKSJON 1: Hva er et argument? ==========
    {
      id: 'norsk-vg2-5-9-n-section1',
      type: 'text',
      content: `## Argumentets anatomi

Et argument er mer enn bare en pastand. Det er en sammensetning av pastander der noen (premissene) stotter en annen (konklusjonen). Formalet er a overbevise noen om at konklusjonen er sann eller sannsynlig.

La oss ta et klassisk eksempel. Premiss 1: Alle mennesker er dodelige. Premiss 2: Sokrates er et menneske. Konklusjon: Sokrates er dodelig. Dette er et gyldig argument fordi konklusjonen folger logisk av premissene. Hvis premissene er sanne, ma konklusjonen vaere sann.

Men ikke alle argumenter er sa rene. I hverdagen moter vi mer komplekse strukturer. En nyttig modell er a tenke pa tre elementer: pastand (det du hevder), begrunnelse (hvorfor du mener det), og belegg (fakta som stotter begrunnelsen).

Eksempel: Pastand: Vi bor innfore gratis skolemaltid. Begrunnelse: Fordi det vil gi bedre konsentrasjon og laeringsutbytte. Belegg: Forskning fra Sverige viser at elever presterer 15 prosent bedre pa prover etter innforing av gratis lunsj.

A identifisere disse elementene i tekster du leser er forste steg mot kritisk analyse. Hva pastas? Hvorfor? Hvilke bevis gis?`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg2-5-9-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-9-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva er de tre hovedelementene i et argument?',
        options: [
          { id: 'a', text: 'Innledning, hoveddel, avslutning', isCorrect: false },
          { id: 'b', text: 'Etos, logos, patos', isCorrect: false },
          { id: 'c', text: 'Pastand, begrunnelse, belegg', isCorrect: true },
          { id: 'd', text: 'Forste, andre, tredje', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution:
          'De tre hovedelementene er pastand (det du hevder), begrunnelse (hvorfor du mener det), og belegg (fakta, eksempler eller data som stotter begrunnelsen). Etos, logos og patos er appellformer, ikke argumentstrukturer.',
      },
    },

    // ========== SEKSJON 2: Toulmins modell ==========
    {
      id: 'norsk-vg2-5-9-n-section2',
      type: 'text',
      content: `## En kraftigere modell

Den britiske filosofen Stephen Toulmin utviklet en mer detaljert modell for a analysere argumenter. Den er spesielt nyttig for hverdagsargumenter som sjelden er sa rene som filosofiske syllogismer.

Toulmins modell har seks elementer. Pastand er det du hevder. Belegg er faktaene som stotter pastanden. Hjemmel er den underliggende regelen som kobler belegg til pastand. Ryggdekning er stotte for at hjemmelen er gyldig. Styrkemarkoor viser hvor sikker du er. Unntak er situasjoner der argumentet ikke gjelder.

La oss ta et eksempel. Pastand: Mobiltelefoner bor forbys i klasserommet. Belegg: Forskning viser at elever som bruker mobil i timen, far darligere karakterer. Hjemmel: Det som forstyrrer laeringen bor fjernes. Ryggdekning: Skolens oppgave er a legge til rette for best mulig laering. Styrkemarkoor: "I de fleste tilfeller". Unntak: Med mindre mobilen brukes som pedagogisk verktoy.

Se hvor mye rikere analysen blir? Du ser ikke bare hva som pastas, men hele strukturen bak argumentet. Og du ser hvor det kan vaere svakheter: Er hjemmelen rimelig? Er det andre unntak som ikke nevnes?`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg2-5-9-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-9-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva er "hjemmel" i Toulmins modell?',
        options: [
          { id: 'a', text: 'Fakta som stotter pastanden', isCorrect: false },
          {
            id: 'b',
            text: 'Den underliggende regelen som kobler belegg til pastand',
            isCorrect: true,
          },
          { id: 'c', text: 'Situasjoner der argumentet ikke gjelder', isCorrect: false },
          { id: 'd', text: 'Hvor sikker konklusjonen er', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution:
          'Hjemmel (warrant) er den underliggende regelen eller prinsippet som kobler belegget til pastanden. I eksempelet om mobil er hjemmelen "det som forstyrrer laeringen bor fjernes". Hjemmelen er ofte implisitt og tas for gitt.',
      },
    },

    // ========== SEKSJON 3: De klassiske feilslutningene ==========
    {
      id: 'norsk-vg2-5-9-n-section3',
      type: 'text',
      content: `## Nar logikken svikter

En feilslutning er en feil i argumentasjonen som gjor at konklusjonen ikke folger av premissene. Noen feilslutninger er sa vanlige at de har fatt egne navn. A kjenne dem er som a ha rontgensyn for darlige argumenter.

Ad hominem er a angripe personen i stedet for argumentet. "Du kan ikke uttale deg om klima - du har jo ikke studert det!" Personens bakgrunn er irrelevant for om argumentet er gyldig.

Stramann er a forvrenge motstanderens argument for a gjore det lettere a angripe. "Sa du mener vi bare skal la alle forbrytere ga fri?" Nei, det var ikke det som ble sagt.

Falsk dilemma er a presentere bare to alternativer nar det finnes flere. "Enten er du med oss, eller mot oss." Virkeligheten er sjelden sa svart-hvit.

Appell til autoritet er a bruke en kjent person som bevis, selv om de ikke har relevant kompetanse. "Denne tannkremen ma vaere best - en kjent skuespiller anbefaler den!"

Sirkelargumentasjon er a bruke konklusjonen som premiss. "Bibelen er sann fordi den er Guds ord, og vi vet det er Guds ord fordi det star i Bibelen."

Disse feilslutningene dukker opp overalt: i politiske debatter, i reklame, i sosiale medier, til og med i samtaler med venner.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg2-5-9-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-9-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: '"Hvorfor skal vi lytte til din mening om okonomi? Du er jo bare en student!" Dette er et eksempel pa:',
        options: [
          { id: 'a', text: 'Stramann', isCorrect: false },
          { id: 'b', text: 'Ad hominem', isCorrect: true },
          { id: 'c', text: 'Falsk dilemma', isCorrect: false },
          { id: 'd', text: 'Sirkelargumentasjon', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution:
          'Dette er ad hominem fordi det angriper personen (en student) i stedet for a ta stilling til argumentet. Om noen er student eller professor er irrelevant for om argumentet deres om okonomi er gyldig eller ikke.',
      },
    },

    // ========== SEKSJON 4: Flere feilslutninger ==========
    {
      id: 'norsk-vg2-5-9-n-section4',
      type: 'text',
      content: `## Flere feller a unnga

La oss se pa flere vanlige feilslutninger som det er verdt a kjenne til.

Hastig generalisering er a trekke generelle slutninger fra for fa eksempler. "Jeg kjenner to svensker som er uhoflige, sa svensker generelt er uhoflige." To eksempler beviser ingenting om en hel befolkning.

Falsk arsakssammenheng, ogsa kalt post hoc, er a anta at fordi B skjedde etter A, ma A ha forarsaket B. "Etter at jeg begynte a bruke denne amuletten, har jeg hatt flaks. Amuletten ma virke!" Tidsrekkefolge beviser ikke arsak.

Skraaplanet er a hevde at ett skritt uunngaelig vil fore til en serie negative konsekvenser. "Hvis vi tillater cannabis, vil snart heroin vaere lovlig, og hele samfunnet vil bryte sammen." Hvert ledd i kjeden ma begrunnes separat.

Alle disse feilslutningene har noe til felles: De ser overbevisende ut pa overflaten. De appellerer til intuisjoner vi har. Men nar vi analyserer dem noyere, ser vi at konklusjonen ikke folger av premissene.

Nokkelen er a vaere oppmerksom. Nar du hoorer et argument som fooles riktig, stopp opp og spoor: Folger konklusjonen virkelig av premissene? Er det noen av de klassiske feilene her?`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg2-5-9-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-9-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: '"Min bestemor roykte hele livet og ble 95 ar gammel. Altsa er ikke royking farlig." Dette er et eksempel pa:',
        options: [
          { id: 'a', text: 'Hastig generalisering', isCorrect: true },
          { id: 'b', text: 'Stramann', isCorrect: false },
          { id: 'c', text: 'Ad hominem', isCorrect: false },
          { id: 'd', text: 'Sirkelargumentasjon', isCorrect: false },
        ],
        correctAnswer: 'a',
        solution:
          'Dette er hastig generalisering fordi det trekker en generell konklusjon ("royking er ikke farlig") fra ett enkelt eksempel (bestemoren). Ett unntak motbeviser ikke omfattende forskning som viser at royking oker risikoen for sykdom.',
      },
    },

    // ========== SEKSJON 5: A argumentere bedre ==========
    {
      id: 'norsk-vg2-5-9-n-section5',
      type: 'text',
      content: `## Fra kritiker til mester

A kjenne feilslutninger gjor deg til en bedre kritiker. Men det gjor deg ogsa til en bedre argumentator. Na nar du vet hva som er feil, kan du unnga det selv.

Bygg argumenter pa fakta. Ikke bare past ting - vis til kilder, statistikk, eksempler. Jo sterkere belegget, jo sterkere argumentet.

Anerkjenn motargumenter. Ikke lat som de ikke finnes. Ta dem opp, vurder dem, og forklar hvorfor dine argumenter likevel er sterkere. Det viser at du har tenkt grundig.

Bruk styrkemarkorer. Ikke overdriv. "Kanskje", "sannsynligvis", "i mange tilfeller" viser at du forstar at verden er kompleks. Absolutte pastander uten nyanser er sjelden troverdige.

Unnga feilslutninger bevisst. Angrip argumentet, ikke personen. Gjengi motstandere rettferdig. Innrom nar du er usikker. Vaer villig til a endre mening.

Og husk: Formalet med argumentasjon er ikke a vinne, men a finne sannheten. De beste samtalene er de der begge parter laerer noe. Vaer den som bidrar til slike samtaler.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg2-5-9-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-5-9-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvorfor bor du anerkjenne motargumenter i din egen argumentasjon?',
        options: [
          {
            id: 'a',
            text: 'For a vise at du er usikker pa saken',
            isCorrect: false,
          },
          {
            id: 'b',
            text: 'For a gjore teksten lengre',
            isCorrect: false,
          },
          {
            id: 'c',
            text: 'For a vise at du har tenkt grundig og styrke din egen troverdighet',
            isCorrect: true,
          },
          {
            id: 'd',
            text: 'For a forvirre leseren',
            isCorrect: false,
          },
        ],
        correctAnswer: 'c',
        solution:
          'A anerkjenne motargumenter viser at du har tenkt grundig pa saken og ikke bare ignorerer innvendinger. Det styrker din troverdighet (etos) og gjor argumentasjonen mer overbevisende. Det er ikke et tegn pa svakhet, men pa intellektuell aerlighet.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg2-5-9-n-summary',
      type: 'text',
      content: `## Oppsummering: Argumentasjonens verktoy

Du har na laert grunnlaget for a vurdere og bygge argumenter. Her er det viktigste a huske:

**Argumentets struktur:**
Et argument bestar av pastand (det du hevder), begrunnelse (hvorfor), og belegg (stotte). Toulmins modell legger til hjemmel, ryggdekning, styrkemarkoor og unntak.

**De klassiske feilslutningene:**
Ad hominem angriper personen. Stramann forvrenger motstanderen. Falsk dilemma gir bare to alternativer. Appell til autoritet bruker ukvalifiserte kilder. Sirkelargumentasjon bruker konklusjonen som premiss. Hastig generalisering trekker slutninger fra for lite. Post hoc forveksler rekkefolge med arsak. Skraaplanet hevder uunngaelige konsekvenser.

**A argumentere bedre:**
Bygg pa fakta. Anerkjenn motargumenter. Bruk styrkemarkorer. Unnga feilslutninger. Sok sannhet, ikke seier.

**Nokkeltermer:**
Argument, premiss, konklusjon, pastand, begrunnelse, belegg, hjemmel, feilslutning, ad hominem, stramann, falsk dilemma, hastig generalisering, post hoc, skraplan.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const NORSK_VG2_NARRATIV_DEL5_CHAPTERS = [
  CHAPTER_NORSK_VG2_5_1_NARRATIV,
  CHAPTER_NORSK_VG2_5_2_NARRATIV,
  CHAPTER_NORSK_VG2_5_3_NARRATIV,
  CHAPTER_NORSK_VG2_5_4_NARRATIV,
  CHAPTER_NORSK_VG2_5_5_NARRATIV,
  CHAPTER_NORSK_VG2_5_6_NARRATIV,
  CHAPTER_NORSK_VG2_5_7_NARRATIV,
  CHAPTER_NORSK_VG2_5_8_NARRATIV,
  CHAPTER_NORSK_VG2_5_9_NARRATIV,
];
