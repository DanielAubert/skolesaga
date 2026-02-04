/**
 * Norsk VG1 - Narrative versjoner Del 8 (Kapittel 7.1, 7.2, 7.3, 7.4)
 *
 * Engasjerende, fortellende versjoner av kapitlene optimalisert for lesing/lytting.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 *
 * Hovedfil: textbook-content-norsk-vg1-narrativ.ts
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 7.1 NARRATIV: De samiske sprakene i Norge
// ============================================================================

export const CHAPTER_NORSK_VG1_7_1_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-7-1-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '7.1',
  title: 'De samiske sprakene i Norge',
  subtitle: 'Narrativ versjon',
  description: 'Oppdag Norges urfolkssprak - tre selvstendige sprak med tusenars historie pa var egen jord.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjore rede for den historiske bakgrunnen for samisk og nasjonale minoritetssprak i Norge',
    'reflektere over spraklig mangfold i Norge og Norden',
  ],
  linkedChapterId: 'norsk-vg1-7-1',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-7-1-n-intro',
      type: 'text',
      content: `## Sprakene som var her for Norge

Tenk deg at du star pa vidda i Finnmark. Rundt deg strekker landskapet seg i alle retninger, med fjell, myrer og reinsdyrflokker i det fjerne. Her har mennesker levd i tusenvis av ar, lenge for noen tegnet grenser pa et kart og kalte dette omradet "Norge". Her har de snakket sprak som er sa gamle at de allerede var urgamle da vikingene seilte ut pa sine tokter.

Disse sprakene er de samiske sprakene. De er ikke dialekter av hverandre, ikke varianter av finsk, og definitivt ikke i slekt med norsk. De er selvstendige sprak med egen grammatikk, eget ordforrad og egen historie. Og her kommer noe som kanskje overrasker deg: I Norge snakkes det ikke ett, men tre forskjellige samiske sprak.

Nar vi snakker om samisk, snakker vi egentlig om nordsamisk, lulesamisk og sorsamisk. En som snakker nordsamisk, forstar ikke automatisk sorsamisk, like lite som en nordmann automatisk forstar nederlandsk. Disse sprakene har utviklet seg separat over lang tid, og de representerer ulike kulturer og tradisjoner innenfor det store samiske fellesskapet.

I dette kapittelet skal vi utforske disse sprakene: hvor de snakkes, hva som gjor dem unike, og hvorfor kunnskap om dem er viktig for alle som vil forsta Norge.`,
    },

    // ========== SEKSJON 1: Tre sprak, ett folk ==========
    {
      id: 'norsk-vg1-7-1-n-section1',
      type: 'text',
      content: `## Tre sprak, ett folk

La oss starte med en geografisk reise gjennom Sapmi, samenes hjemland. Sapmi strekker seg over fire land: Norge, Sverige, Finland og Russland. Det er ikke et land i tradisjonell forstand, men et kulturelt og historisk omrade der samene har hatt tilhold siden uminnelige tider.

I nord, i Finnmark og Nord-Troms, finner vi nordsamisk. Dette er det storste samiske spraket, med mellom 20 000 og 25 000 talere totalt. Nar du horer noen snakke om "samisk" uten naermere presisering, er det som regel nordsamisk de mener. Her finner du steder som Kautokeino og Karasjok, der samisk lever i hverdagen, i butikkene, pa skolen og i hjemmene. Nordsamisk har det mest utviklede skriftspraket og den rikeste litteraturen blant de samiske sprakene.

Lenger sor, i Nordland, finner vi lulesamisk. Her blir tallet pa talere dramatisk lavere: mellom 500 og 1000 personer. Lulesamisk snakkes i omradet rundt Tysfjord og Hamaroy, og over grensen i Sverige rundt Jokkmokk. UNESCO klassifiserer lulesamisk som et truet sprak, noe som betyr at framtiden er usikker dersom det ikke gjores en aktiv innsats for a bevare det.

Og sa har vi sorsamisk, det sydligste samiske spraket. Det snakkes i Trondelag, deler av Nordland og Hedmark, med spraksenter i Snasa og pa Roros. Med bare 500 til 600 talere totalt er sorsamisk i en kritisk situasjon. Det er sa forskjellig fra nordsamisk at de to sprakene ikke er gjensidig forstaelige. En nordsamisktalende ma laere sorsamisk som et fremmed sprak for a forsta det.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-7-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvor mange samiske sprak snakkes i Norge?',
        options: [
          { id: 'a', text: 'Ett - samisk er ett sprak med mange dialekter', isCorrect: false },
          { id: 'b', text: 'To - nordsamisk og sorsamisk', isCorrect: false },
          { id: 'c', text: 'Tre - nordsamisk, lulesamisk og sorsamisk', isCorrect: true },
          { id: 'd', text: 'Fire - ett for hvert land i Sapmi', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'I Norge snakkes tre samiske sprak: nordsamisk (det storste, ca. 20 000-25 000 talere), lulesamisk (ca. 500-1000 talere) og sorsamisk (ca. 500-600 talere). Disse er selvstendige sprak, ikke dialekter, og de er ikke gjensidig forstaelige.',
      },
    },

    // ========== SEKSJON 2: Et sprak fra en annen verden ==========
    {
      id: 'norsk-vg1-7-1-n-section2',
      type: 'text',
      content: `## Et sprak fra en annen verden

Her kommer kanskje den mest overraskende informasjonen for mange: Samisk er ikke i slekt med norsk. Ikke i det hele tatt. Mens norsk tilhorer den germanske grenen av den indoeuropeiske sprakfamilien (sammen med svensk, dansk, engelsk og tysk), tilhorer samisk den finsk-ugriske familien. Samisk er altsa i slekt med finsk, estisk og til og med ungarsk, men ikke med spraket til naboene som har bodd ved siden av dem i over tusen ar.

Dette gjor samisk til et fundamentalt annerledes sprak enn norsk. Ta kasussystemet som eksempel. Pa norsk uttrykker vi grammatiske forhold gjennom ordstilling: "Mannen ser hunden" betyr noe helt annet enn "Hunden ser mannen". Pa samisk bruker man i stedet kasus, boyningsformer som viser hvilken rolle ordet har i setningen. Nordsamisk har hele syv kasus. Det betyr at et substantiv kan ta syv forskjellige former avhengig av om det er subjekt, objekt, sted, retning og sa videre.

Verbsystemet er ogsa fascinerende. Samisk skiller ikke bare mellom entall og flertall, men har ogsa en egen form for totall. Det betyr at "vi to" har en annen verbform enn "vi mange". Tenk deg a kunne uttrykke med ett ord om du snakker om deg og en venn, eller om en hel gruppe.

Men det er ordforradet som virkelig viser hvordan sprak former var forstaelse av verden. Du har sikkert hort at samisk har mange ord for sno. Dette er ikke bare en myte. Fordi reindrift og liv i arktiske strøk krever presis kommunikasjon om snoforhold, har samisk utviklet et rikt vokabular: muohta er sno generelt, vahca er los nysno, skarta er et tynt lag med hard sno, seanas er kornete gammel sno. Hvert ord beskriver en spesifikk type sno som kan ha betydning for om reinsdyrene kan finne mat, om det er trygt a ferdes, eller om det er fare for ras.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-7-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hvilken sprakfamilie tilhorer samisk?',
        options: [
          { id: 'a', text: 'Den germanske sprakfamilien, sammen med norsk', isCorrect: false },
          { id: 'b', text: 'Den slaviske sprakfamilien, sammen med russisk', isCorrect: false },
          { id: 'c', text: 'Den finsk-ugriske sprakfamilien, sammen med finsk og ungarsk', isCorrect: true },
          { id: 'd', text: 'Den nordiske sprakfamilien, sammen med islandsk', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Samisk tilhorer den finsk-ugriske (eller uralske) sprakfamilien og er i slekt med finsk, estisk og ungarsk. Det er IKKE i slekt med norsk, som tilhorer den germanske grenen av den indoeuropeiske sprakfamilien.',
      },
    },

    // ========== SEKSJON 3: Truede skatter ==========
    {
      id: 'norsk-vg1-7-1-n-section3',
      type: 'text',
      content: `## Truede skatter

La oss vaere aerlige: situasjonen for de samiske sprakene er alvorlig. UNESCO, FNs organisasjon for utdanning, vitenskap og kultur, klassifiserer sprak etter hvor truet de er. Nordsamisk er klassifisert som "definert truet". Lulesamisk og sorsamisk er begge "alvorlig truet". Hva betyr dette i praksis?

Et sprak er truet nar faerre og faerre barn laerer det som morsmaal. Selv om nordsamisk har relativt mange talere, er utfordringen at overforingen mellom generasjoner svikter. Mange foreldre som selv snakker samisk, velger a snakke norsk med barna sine. Kanskje fordi de selv opplevde diskriminering. Kanskje fordi de tenker at norsk er mer "nyttig". Kanskje fordi de ikke har tilgang til samiske barnehager og skoler.

For lulesamisk og sorsamisk er situasjonen enda mer kritisk. Her er de fleste talerne eldre mennesker. Nar de gar bort, tar de med seg kunnskap som ikke kan gjenskapes. Hvert samiske sprak baerer med seg en unik mate a forsta verden pa, tradisjonell kunnskap om natur og levesett, og kulturelle uttrykk som joik og fortellinger.

Men bildet er ikke bare morkt. De siste arene har vi sett en oppvakening. Unge samer ønsker a laere spraket til besteforeldrene sine. Samisk er tilgjengelig pa sprakkurs-apper. NRK Sapmi sender nyheter og programmer pa samisk. Samiske artister som Mari Boine og Sofia Jannok kombinerer tradisjonell joik med moderne musikk og nar et internasjonalt publikum. Det er en bevegelse, en revitalisering, som gir grunn til forsiktig optimisme.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-7-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hvorfor er de samiske sprakene truet?',
        options: [
          { id: 'a', text: 'Fordi samisk er et vanskelig sprak a laere', isCorrect: false },
          { id: 'b', text: 'Fordi faerre barn laerer samisk som morsmaal, og overforingen mellom generasjoner svikter', isCorrect: true },
          { id: 'c', text: 'Fordi samisk ikke har noe skriftsprak', isCorrect: false },
          { id: 'd', text: 'Fordi det er ulovlig a snakke samisk i Norge', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Sprak blir truet nar de ikke overføres til nye generasjoner. Langvarig fornorskingspolitikk, urbanisering og dominansen av norsk i samfunnet har fort til at faerre barn laerer samisk hjemme. Selv om det na er økt interesse for a laere samisk, er utfordringen stor.',
      },
    },

    // ========== SEKSJON 4: Sprak som kulturminne ==========
    {
      id: 'norsk-vg1-7-1-n-section4',
      type: 'text',
      content: `## Sprak som kulturminne

Visste du at mange steder i Norge har samiske navn? Tromsø heter Romsa pa samisk og kan bety "sted med sterk strøm". Alta heter Alta og er relatert til ordet for bølge. Kautokeino heter Guovdageaidnu og betyr noe i retning av "midtveis". Disse navnene er ikke bare kuriositeter. De er bevis pa samisk tilstedeværelse gjennom tusenvis av ar, og de baerer med seg kunnskap om hvordan landskapet ble brukt og forstatt.

Stedsnavnloven fra 1990 sikrer at samiske stedsnavn skal tas vare pa. I dag ser vi skilting pa bade norsk og samisk i mange nordnorske kommuner. Dette er mer enn symbolikk. Det er en anerkjennelse av at denne jorden har flere historier, flere lag av mening, flere mater a vaere hjemme pa.

Siden 1988 har samisk og norsk vaert likestilte sprak i Norge gjennom Grunnloven. Sameparagrafen slar fast at staten har plikt til a legge til rette for at samene kan sikre og utvikle sitt sprak, sin kultur og sitt samfunnsliv. Dette er ikke en gave fra majoriteten til minoriteten. Det er en rettighet som springer ut av historisk urett, og et ansvar som hele det norske samfunnet deler.

Nar du laerer om samisk, laerer du altsa ikke om noe fremmed og fjernt. Du laerer om en del av Norge som har vaert her lengre enn selve ideen om Norge. Du laerer om mennesker som har formet dette landet, og som fortsetter a berike det med sine sprak, sin kunst og sin kunnskap. Og du laerer at spraklig mangfold ikke er et problem som skal løses, men en rikdom som skal verdsettes.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-7-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva sier Grunnloven om samisk sprak?',
        options: [
          { id: 'a', text: 'Samisk er forbudt i offentlige sammenhenger', isCorrect: false },
          { id: 'b', text: 'Samisk og norsk er likestilte sprak, og staten har plikt til a verne samisk', isCorrect: true },
          { id: 'c', text: 'Samisk er kun tillatt i Finnmark', isCorrect: false },
          { id: 'd', text: 'Grunnloven nevner ikke samisk', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Grunnlovens paragraf 108 (sameparagrafen) slar fast at staten har plikt til a legge til rette for at samene kan sikre og utvikle sitt sprak, sin kultur og sitt samfunnsliv. Samisk og norsk er likestilte sprak i Norge.',
      },
    },

    // ========== SEKSJON 5: Samisk i dag og i morgen ==========
    {
      id: 'norsk-vg1-7-1-n-section5',
      type: 'text',
      content: `## Samisk i dag og i morgen

Hvordan ser samisk ut i det moderne Norge? La oss ta en rask rundtur. Pa NRK Sapmi kan du se nyheter pa nordsamisk hver dag. Ávvir er en dagsavis pa samisk. Det finnes samiske podcaster, YouTube-kanaler og TikTok-kontoer. Wikipedia finnes pa nordsamisk. Du kan stille inn telefonen din til samisk sprak. Samisk er ikke et museumsstykke. Det er et levende sprak som utvikler seg og tilpasser seg nye tider.

I musikken ser vi en fantastisk blomstring. Joik, den tradisjonelle samiske sangformen, har inspirert artister over hele verden. Men samiske musikere begrenser seg ikke til tradisjon. De lager pop, rock, hip-hop og elektronisk musikk. De synger pa samisk om moderne temaer. De viser at et sprak kan vaere bade gammelt og nytt, bade tradisjonelt og nyskapende.

I litteraturen har vi forfattere som Nils-Aslak Valkeapaa, som vant Nordisk rads litteraturpris, og Rawdna Carita Eira, som skriver for nye generasjoner. Samisk litteratur utforsker identitet, tilhørighet, natur og forholdet mellom fortid og natid.

Og i hverdagen? I de samiske kjerneomradene kan du ga i barnehage pa samisk, ga pa skole pa samisk, handle i butikker der de ansatte snakker samisk. Utenfor disse omradene er det vanskeligere, men rettighetene finnes: alle elever i Norge har rett til opplaering i samisk hvis de ønsker det, uansett hvor de bor.

Fremtiden for samisk avhenger av mange ting: politiske beslutninger, økonomiske ressurser, teknologisk utvikling. Men mest av alt avhenger den av mennesker som velger a snakke, laere og videreføre spraket. Hver samtale pa samisk, hver bok som leses, hver joik som synges, er med pa a sikre at disse sprakene fortsetter a leve.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-7-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva er joik?',
        options: [
          { id: 'a', text: 'Et samisk skriftsprak', isCorrect: false },
          { id: 'b', text: 'En tradisjonell samisk sangform der man joiker om personer, steder eller dyr', isCorrect: true },
          { id: 'c', text: 'Et samisk matrett', isCorrect: false },
          { id: 'd', text: 'En type samisk bolig', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Joik er en tradisjonell samisk vokal uttrykksform. Man joiker ikke OM noe, man joiker noe eller noen. En joik forsøker a fange essensen av en person, et dyr eller et sted. Det er en av de eldste musikktradisjonene i Europa.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-7-1-n-summary',
      type: 'text',
      content: `## Oppsummering: De samiske sprakene

Du har na laert om Norges urfolkssprak. Her er de viktigste punktene a ta med seg:

**Tre selvstendige sprak:**
Norge har tre samiske sprak: nordsamisk (20 000-25 000 talere), lulesamisk (500-1000 talere) og sorsamisk (500-600 talere). Disse er ikke dialekter, men selvstendige sprak som ikke er gjensidig forstaelige.

**En annen sprakfamilie:**
Samisk tilhorer den finsk-ugriske sprakfamilien og er i slekt med finsk, estisk og ungarsk - ikke med norsk. Samisk har et rikt kasussystem, skiller mellom entall, totall og flertall, og har et omfattende ordforrad for naturfenomener.

**Truede, men levende:**
Alle tre samiske sprak er truet fordi overforingen mellom generasjoner svikter. Men det er ogsa positive tegn: økt interesse for a laere, samiske medier, moderne musikk og litteratur pa samisk.

**Rettigheter og ansvar:**
Grunnloven sikrer samisk som likestilt sprak med norsk, og staten har plikt til a verne og utvikle samisk. Samiske stedsnavn er kulturminner som bevitner tusenars tilstedeværelse.

**Hvorfor dette er viktig:**
A kjenne til samisk er a kjenne til Norges fulle historie. Spraklig mangfold beriker samfunnet, og kunnskap bidrar til forsoning etter fornorskingspolitikken.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.2 NARRATIV: Fornorskingspolitikken
// ============================================================================

export const CHAPTER_NORSK_VG1_7_2_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-7-2-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '7.2',
  title: 'Fornorskingspolitikken',
  subtitle: 'Narrativ versjon',
  description: 'Forstå et mørkt kapittel i norsk historie - og hvorfor vi ma kjenne det.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjore rede for den historiske bakgrunnen for samisk og nasjonale minoritetssprak i Norge',
    'reflektere over hvordan sprakpolitikk har pavirket minoritetsgrupper',
  ],
  linkedChapterId: 'norsk-vg1-7-2',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-7-2-n-intro',
      type: 'text',
      content: `## Da staten ville utslette et sprak

Forestill deg at du er syv ar og begynner pa skolen. Du gleder deg, for du har hort at pa skolen laerer man spennende ting. Men nar du kommer dit, skjer noe forvirrende: lareren snakker et sprak du knapt forstar. Du forsøker a si noe pa det eneste spraket du kan, morsmalet ditt, men da blir du straffet. Kanskje far du slag over fingrene. Kanskje blir du satt i skammekroken. Kanskje blir du bare ignorert til du laerer a tie.

Dette var virkeligheten for tusenvis av samiske og kvenske barn i over hundre ar. Det var ikke tilfeldig grusomhet fra enkeltstående larere. Det var statlig politikk, systematisk gjennomfort med lover, bevilgninger og institusjoner. Det hadde et navn: fornorskingspolitikken.

Fornorsking betydde at minoriteter skulle bli "norske". De skulle slutte a snakke sine egne sprak, gi opp sine kulturer, og smelte inn i det norske majoritetssamfunnet. Det var ikke ment som straff, men som "hjelp". Man trodde oppriktig at dette var til minoritetenes eget beste. At deres kulturer var "primitive" og deres sprak "unyttige". At det eneste veien til fremgang gikk gjennom a bli norsk.

I dag vet vi at dette var feil. Fundamentalt, tragisk feil. Og konsekvensene merkes fortsatt.`,
    },

    // ========== SEKSJON 1: Hvordan foregikk det? ==========
    {
      id: 'norsk-vg1-7-2-n-section1',
      type: 'text',
      content: `## Hvordan foregikk det?

La oss begynne med skolen, for det var der fornorskingen var mest systematisk og mest brutal. Samisk og kvensk var forbudt som undervisningssprak. Barn som snakket morsmalet sitt, ble straffet - fysisk, psykisk eller begge deler. Laerebøkene fremstilte samisk kultur negativt, og larerne matte beherske norsk, ikke samisk. Malet var tydelig: barna skulle glemme.

Men det stoppet ikke der. Mange samiske barn ble sendt pa internatskoler, ofte langt hjemmefra. Tenk deg a vaere atte ar og bli sendt hundrevis av kilometer bort fra familien din. Du far ikke snakke samisk, du far ikke synge joik, du far ikke praktisere kulturen du har vokst opp med. Du bor pa en institusjon med strenge regler, omgitt av barn i samme situasjon, alle fratatt det mest grunnleggende: retten til a vaere seg selv.

Jordsalgsloven fra 1902 tok et annet grep. Vil du kjøpe jord? Da ma du kunne norsk. Dette presset samer vekk fra tradisjonelle omrader og svekket det økonomiske grunnlaget for samiske samfunn. Samtidig ble samiske stedsnavn systematisk fornorsket. Steder som hadde hatt samiske navn i tusenvis av ar, fikk plutselig norske navn pa offisielle kart.

I kirken var gudstjenestene bare pa norsk. For a bli konfirmert matte du bevise norskkunnskaper. Samisk religiøs praksis, inkludert elementer som gikk tilbake til for-kristen tid, ble aktivt motarbeidet.

Resultatet var at samisk ble usynlig i det offentlige rommet. Det fantes ingen samiske aviser, ingen samiske bøker, ingen samisk tilstedeværelse i noe som helst offisielt. Og med usynligheten kom skammen.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-7-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva var fornorskingspolitikken?',
        options: [
          { id: 'a', text: 'En politikk for a laere nordmenn a snakke samisk', isCorrect: false },
          { id: 'b', text: 'Statlig politikk for a assimilere samer, kvener og andre minoriteter til norsk sprak og kultur', isCorrect: true },
          { id: 'c', text: 'Et program for a bevare samisk kultur', isCorrect: false },
          { id: 'd', text: 'En frivillig ordning der samer kunne laere norsk', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Fornorskingspolitikken var statlig politikk som varte fra ca. 1850 til 1980. Malet var a assimilere samer, kvener og andre minoriteter til norsk sprak og kultur gjennom sprakforbud i skolen, internatskoler, og andre systematiske tiltak.',
      },
    },

    // ========== SEKSJON 2: Hvorfor skjedde dette? ==========
    {
      id: 'norsk-vg1-7-2-n-section2',
      type: 'text',
      content: `## Hvorfor skjedde dette?

For a forsta fornorskingspolitikken ma vi forsta tiden den oppsto i. Norge ble løsrevet fra Danmark i 1814 og fra Sverige i 1905. Det var en tid for nasjonsbygging, for a skape en norsk identitet. Og i denne prosessen ble mangfold sett som et problem.

Ideen var "ett folk, ett sprak, en kultur". Minoriteter passet ikke inn i dette bildet. De ble sett som hindringer for nasjonal enhet, som fremmedelementer som matte fjernes - ikke fysisk, men kulturelt. Assimilering var løsningen: gjor alle norske, sa har vi ett samlet folk.

Men det var mer enn nasjonsbygging. Sosialdarwinismen, en tankemåte som var utbredt pa 1800-tallet, ranget kulturer i et hierarki. Noen kulturer ble ansett som "høyere" enn andre. Samisk kultur ble plassert langt ned pa denne stigen, sett som "primitiv" og "underutviklet". Fornorsking ble dermed fremstilt som fremskritt, som en gave fra den "høyere" kulturen til den "lavere".

Det var ogsa sikkerhetspolitiske bekymringer. Kvener i nord hadde røtter i Finland, som var under russisk styre. Samer levde pa tvers av grenser. I en tid med nasjonalstater og territorielle konflikter ble disse gruppene sett som potensielle sikkerhetstrusler. A gjøre dem norske var a sikre grensene.

Og sa var det økonomiske interesser. Samiske omrader hadde ressurser: fisk, mineraler, vannkraft. A svekke samiske rettigheter og samisk identitet gjorde det enklere a utnytte disse ressursene uten a ta hensyn til de som hadde levd der i tusenvis av ar.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-7-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva var sosialdarwinismens rolle i fornorskingspolitikken?',
        options: [
          { id: 'a', text: 'Den fremmet likeverd mellom alle kulturer', isCorrect: false },
          { id: 'b', text: 'Den rangerte kulturer i et hierarki og legitimerte assimilering som "fremskritt"', isCorrect: true },
          { id: 'c', text: 'Den hadde ingen innflytelse pa norsk politikk', isCorrect: false },
          { id: 'd', text: 'Den støttet bevaring av samisk kultur', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Sosialdarwinismen var en tankemåte som rangerte kulturer og folk i et hierarki. Samisk kultur ble sett som "primitiv", og assimilering ble fremstilt som a hjelpe samene til a bli del av en "høyere" kultur. Dette legitimerte fornorskingspolitikken.',
      },
    },

    // ========== SEKSJON 3: Konsekvensene ==========
    {
      id: 'norsk-vg1-7-2-n-section3',
      type: 'text',
      content: `## Konsekvensene som fortsatt merkes

Hva skjer nar et barn vokser opp med beskjed om at spraket til foreldrene er verdiløst? Nar kulturen det er født inn i, fremstilles som noe skammelig? Nar det a vaere seg selv er forbundet med straff og ydmykelse?

Det som skjer, er traumer. Traumer som ikke bare pavirker enkeltpersoner, men hele samfunn. Traumer som gar i arv fra generasjon til generasjon.

Spraktapet er det mest konkrete. Mange mistet morsmalet sitt fullstendig. De glemte ordene, melodien, rytmen i spraket de hadde snakket som barn. Og nar de selv fikk barn, hadde de ikke noe samisk a gi videre. Resultatet er generasjonsbrudd: besteforeldre som snakker flytende samisk, foreldre som forstar men ikke snakker, barnebarn som ikke kan et ord.

Men tapet er mer enn lingvistisk. Tradisjoner som joik, handverk og fortellinger gikk tapt. Kunnskap om naturen, om reindrift, om overlevelse i arktiske strøk, overført muntlig gjennom generasjoner, forsvant nar kjeden ble brutt. Familieband ble ødelagt da barn ble sendt pa internat og kom hjem som fremmede.

Og sa er det skammen. Mange som vokste opp under fornorskingen, laerte a skamme seg over a vaere samiske. De skjulte bakgrunnen sin, nektet a snakke samisk, fortalte aldri barna sine hvem de egentlig var. Det finnes mennesker i dag som først i voksen alder har oppdaget at de har samiske røtter, fordi foreldrene aldri fortalte.

Denne skammen sitter dypt. Den pavirker selvfølelse, mental helse, følelse av tilhørighet. Og den overføres, bevisst eller ubevisst, til nye generasjoner.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-7-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva menes med "generasjonsbrudd" i forbindelse med sprak?',
        options: [
          { id: 'a', text: 'At spraket utvikler seg forskjellig i ulike generasjoner', isCorrect: false },
          { id: 'b', text: 'At spraket ikke overføres fra foreldre til barn, slik at en generasjon vokser opp uten spraket', isCorrect: true },
          { id: 'c', text: 'At unge og eldre har forskjellig uttale', isCorrect: false },
          { id: 'd', text: 'At spraket far nye ord over tid', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Generasjonsbrudd betyr at spraket ikke overføres til neste generasjon. Besteforeldre kan vaere flytende, foreldre kan forsta litt, og barnebarn kan ingenting. Dette er hovedarsaken til at sprak dør ut, og det var en direkte konsekvens av fornorskingspolitikken.',
      },
    },

    // ========== SEKSJON 4: Forsoning og oppgjor ==========
    {
      id: 'norsk-vg1-7-2-n-section4',
      type: 'text',
      content: `## Forsoning og oppgjør

I 2018 tok Stortinget et viktig skritt: de oppnevnte Sannhets- og forsoningskommisjonen. Mandatet var a granske fornorskingspolitikken overfor samer, kvener og skogfinner, undersøke virkningene frem til i dag, og foresla tiltak for forsoning.

I 2023 la kommisjonen frem sin rapport. Den dokumenterte systematisk urett. Den inneholdt personlige historier fra mennesker som var blitt rammet. Den analyserte hvordan virkningene fortsatt merkes i dag. Og den kom med anbefalinger for veien videre.

Noen av funnene var nedslående, men ikke overraskende for de som hadde levd med konsekvensene. Fornorskingspolitikken var bevisst og systematisk. Den forsaket varige skader pa individer, familier og samfunn. Sprakrevitalisering er avgjørende for fremtiden.

Forsoning er ikke et engangsarrangement. Det er ikke en unnskyldning fra statsministeren og sa er vi ferdige. Forsoning er en pagående prosess som krever handling over tid. Det handler om a anerkjenne det som skjedde, forstå konsekvensene, og aktivt arbeide for a reparere skadene.

For deg som leser dette, handler forsoning ogsa om kunnskap. A vite hva som skjedde. A forsta hvorfor samisk sprak er truet. A se sammenhengen mellom fortid og natid. Denne kunnskapen er ikke bare viktig for samer. Den er viktig for alle nordmenn som vil forsta sitt eget lands historie.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-7-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva var Sannhets- og forsoningskommisjonens hovedoppgave?',
        options: [
          { id: 'a', text: 'A dømme enkeltpersoner som gjennomførte fornorskingen', isCorrect: false },
          { id: 'b', text: 'A granske fornorskingspolitikken, undersøke virkninger og foresla tiltak for forsoning', isCorrect: true },
          { id: 'c', text: 'A utbetale erstatning til alle samer', isCorrect: false },
          { id: 'd', text: 'A forby undervisning om samisk historie', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Stortinget oppnevnte Sannhets- og forsoningskommisjonen i 2018 for a granske fornorskingspolitikken overfor samer, kvener og skogfinner, undersøke virkningene frem til i dag, og foresla tiltak for forsoning. Rapporten ble lagt frem i 2023.',
      },
    },

    // ========== SEKSJON 5: Joik som motstand ==========
    {
      id: 'norsk-vg1-7-2-n-section5',
      type: 'text',
      content: `## Joik som motstand og overlevelse

Midt i all undertrykkelsen overlevde noe. Joiken, den eldgamle samiske sangformen, ble forbudt under fornorskingen. Den ble sett som "hedensk", uforenlig med kristendommen, primitiv. I skolen, i kirken, i det offentlige rommet var joiken bannlyst.

Men joiken døde ikke. Den trakk seg tilbake til hjemmene, til viddene, til de stille stundene der ingen myndigheter kunne here. Den ble sunget lavt, nesten hviskende, fra besteforeldre til barnebarn. Den ble holdt i live av mennesker som nektet a gi slipp pa denne delen av seg selv.

Hva er egentlig joik? Det er en vokal uttrykksform som er fundamentalt annerledes enn vestlig sang. Du joiker ikke om noe, du joiker noe eller noen. En joik kan vaere en joik av en person, og da forsøker den a fange essensen av hvem denne personen er. En joik kan vaere av et sted, og da formidler den følelsen av a vaere der. En joik kan vaere av et dyr, og da prøver den a uttrykke dyrets vesen.

Joiken bruker ofte fa eller ingen ord. Den bygger pa melodiske motiver som gjentas og varieres. Den er improvisatorisk og personlig. En joik "tilhører" den som joikes, og det a fa en joik er en stor aere.

I dag er joiken tilbake. Mari Boine kombinerer tradisjonell joik med jazz og verdensmusikk. Sofia Jannok blander joik med pop og elektronika. Joik har vaert hort i idrettsarrangementer, nasjonaldagsfeiringer og pa internasjonale scener. Det som en gang var forbudt og skambelagt, er na en kilde til stolthet og identitet. Joikens overlevelse er et symbol pa samisk motstandskraft.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-7-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvorfor ble joiken forbudt under fornorskingspolitikken?',
        options: [
          { id: 'a', text: 'Fordi den var for høylytt og forstyrret andre', isCorrect: false },
          { id: 'b', text: 'Fordi den ble sett som hedensk, primitiv og uforenlig med kristendommen', isCorrect: true },
          { id: 'c', text: 'Fordi den var vanskelig a laere', isCorrect: false },
          { id: 'd', text: 'Den ble aldri forbudt, bare upopulaer', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Joiken ble forbudt fordi myndighetene anså den som hedensk og uforenlig med kristendommen. Den ble sett som "primitiv" og som en del av kulturen som skulle utryddes gjennom fornorsking. I dag er joiken revitalisert og en kilde til samisk stolthet.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-7-2-n-summary',
      type: 'text',
      content: `## Oppsummering: Fornorskingspolitikken

Du har na laert om et av de mørkeste kapitlene i norsk historie. Her er de viktigste punktene:

**Hva var fornorskingspolitikken?**
Statlig politikk fra ca. 1850 til 1980 for a assimilere samer, kvener og andre minoriteter til norsk kultur og sprak. Metodene inkluderte sprakforbud i skolen, internatskoler, jordsalgsloven og fornorsking av stedsnavn.

**Hvorfor skjedde det?**
Nasjonsbygging og ideen om "ett folk, ett sprak". Sosialdarwinisme som rangerte kulturer. Sikkerhetspolitiske bekymringer om minoriteter i grenseomrader. Økonomiske interesser i samiske omrader.

**Konsekvensene:**
Spraktap og generasjonsbrudd. Tap av kultur, tradisjoner og kunnskap. Skam og identitetsforvirring. Traumer som overføres mellom generasjoner.

**Forsoning:**
Sannhets- og forsoningskommisjonen (2018-2023) har gransket politikken. Forsoning er en pagående prosess som krever kunnskap, anerkjennelse og handling.

**Motstand og overlevelse:**
Joiken, som var forbudt, overlevde i det skjulte og er na revitalisert. Samisk kultur har vist motstandskraft mot undertrykkelse.

**Hvorfor dette er viktig:**
A forsta fornorskingspolitikken er a forsta hvorfor samisk sprak er truet i dag, og hva som trengs for forsoning og revitalisering.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.3 NARRATIV: Samiske spraklige rettigheter
// ============================================================================

export const CHAPTER_NORSK_VG1_7_3_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-7-3-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '7.3',
  title: 'Samiske spraklige rettigheter',
  subtitle: 'Narrativ versjon',
  description: 'Fra forbud til rettigheter - forstå hvordan samisk na er beskyttet av loven.',
  estimatedMinutes: 40,
  competenceGoals: [
    'gjore rede for sprakpolitikk og spraklige rettigheter i Norge',
    'reflektere over forholdet mellom sprak, makt og identitet',
  ],
  linkedChapterId: 'norsk-vg1-7-3',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-7-3-n-intro',
      type: 'text',
      content: `## Nar det forbudte blir en rettighet

Det er noe nesten magisk med den historiske vendingen vi skal se pa na. Tenk deg: et sprak som var forbudt i skolen, som barn ble straffet for a snakke, som staten aktivt forsøkte a utrydde. Sa gar det noen tiår, og plutselig er det samme spraket beskyttet i Grunnloven. Staten som tidligere forbød det, har na plikt til a bevare og utvikle det.

Dette er historien om samiske sprakrettigheter. Det er en historie om kamp, om mennesker som nektet a gi opp, om internasjonale konvensjoner og nasjonale lover. Men det er ogsa en historie om gapet mellom rettigheter pa papiret og virkeligheten i hverdagen.

I 1988 fikk samisk grunnlovsvern. I 1989 ble Sametinget opprettet. I 1990 kom sameloven med konkrete sprakrettigheter. I 2021 styrket den nye sprakloven samisk ytterligere. Pa under 40 ar gikk samisk fra a vaere usynlig og undertrykt til a ha sterke juridiske rettigheter.

Men rettigheter er ikke det samme som virkelighet. A ha rett til noe betyr ikke automatisk at du far det. I dette kapittelet skal vi se pa hvilke rettigheter som finnes, hvordan de fungerer i praksis, og hva som trengs for at rettighetene skal bli virkelige.`,
    },

    // ========== SEKSJON 1: Grunnloven og sameloven ==========
    {
      id: 'norsk-vg1-7-3-n-section1',
      type: 'text',
      content: `## Grunnloven og sameloven

La oss starte med det mest grunnleggende: Grunnloven. Paragraf 108, ofte kalt sameparagrafen, slar fast at "det paligger statens myndigheter a legge forholdene til rette for at den samiske folkegruppe kan sikre og utvikle sitt sprak, sin kultur og sitt samfunnsliv."

Les den setningen en gang til. Staten har plikt til a legge til rette for. Det er ikke en mulighet, ikke en anbefaling. Det er en forpliktelse pa høyeste juridiske niva. Hvis staten ikke oppfyller denne plikten, bryter den Grunnloven.

Sameloven fra 1987 gir konkrete rettigheter som følger av dette prinsippet. Du har rett til a bruke samisk i kontakt med offentlige myndigheter. Du har rett til svar pa samisk i forvaltningsomradet. Du har rett til samiskopplaering i skolen. Du har rett til at samiske stedsnavn bevares og brukes.

Men hva er dette forvaltningsomradet? Det er en samling kommuner der samisk og norsk er helt likestilte. Her har du fulle rettigheter til a bruke samisk i alle offentlige sammenhenger. Kommunene inkluderer blant annet Kautokeino, Karasjok, Tana, Nesseby, Porsanger, Kafjord, Snåsa og flere andre. Flere kommuner kan søke om a bli del av omradet.

I disse kommunene kan du ga pa kommunehuset og snakke samisk. Du kan fa brev fra det offentlige pa samisk. Du kan bruke samisk i rettssaker. Du kan forvente at de som jobber med publikum, behersker samisk. Spraket er ikke en kuriositet, men en selvfølge.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-7-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva sier Grunnlovens paragraf 108 om samisk?',
        options: [
          { id: 'a', text: 'Samisk er forbudt i offentlige sammenhenger', isCorrect: false },
          { id: 'b', text: 'Staten har plikt til a legge til rette for at samene kan sikre og utvikle sitt sprak og kultur', isCorrect: true },
          { id: 'c', text: 'Samisk er kun tillatt i private hjem', isCorrect: false },
          { id: 'd', text: 'Grunnloven nevner ikke samisk', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Grunnlovens paragraf 108 palegger staten plikt til a legge til rette for at samene kan sikre og utvikle sitt sprak, sin kultur og sitt samfunnsliv. Dette er en juridisk forpliktelse pa høyeste niva.',
      },
    },

    // ========== SEKSJON 2: Samisk i skolen ==========
    {
      id: 'norsk-vg1-7-3-n-section2',
      type: 'text',
      content: `## Samisk i skolen

Her er noe du kanskje ikke visste: alle elever i Norge har rett til opplaering i samisk hvis de ønsker det. Uansett hvor du bor. Uansett om det er en eneste same i naerheten av deg. Hvis du vil laere samisk, har staten plikt til a tilby det.

I samiske distrikt er rettighetene enda sterkere. Her kan du velge samisk som førstesprak i grunnskolen, med undervisning i og pa samisk. Samiske barnehager gir barn muligheten til a vokse opp med spraket fra starten av.

Men la oss vaere aerlige: det er et stort gap mellom rettigheter og virkelighet. Hvor mange skoler utenfor samiske omrader kan faktisk tilby samiskundervisning? Problemene er mange: det mangler laerere som kan samisk, det mangler laeremidler, avstandene er lange, og fjernundervisning er ikke alltid en fullgod løsning.

For de som vil laere samisk som voksne, finnes det muligheter. Hvis du har mistet spraket pa grunn av fornorskingen, kan du fa gratis opplaering. Spraksentre tilbyr kurs. Apper og nettressurser gjør det mulig a laere hjemmefra. Men ressursene er begrenset, og tilbudet varierer.

En spesielt lovende tilnaerming er sprakbad og sprakreir. Dette er metoder hentet fra maorienes vellykkede revitalisering av spraket sitt i New Zealand. I et sprakreir snakker de voksne kun samisk med barna, som plukker opp spraket naturlig gjennom lek og daglige aktiviteter. Barna blir flytende uten a "laere" i tradisjonell forstand. Dette er en av de mest effektive metodene for a gjenopplive et truet sprak.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-7-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hvem har rett til opplaering i samisk i Norge?',
        options: [
          { id: 'a', text: 'Bare elever i Finnmark', isCorrect: false },
          { id: 'b', text: 'Bare elever som har samiske foreldre', isCorrect: false },
          { id: 'c', text: 'Alle elever i Norge som ønsker det, uansett hvor de bor', isCorrect: true },
          { id: 'd', text: 'Ingen har rett til samiskopplaering', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Opplaeringsloven gir alle elever i Norge rett til opplaering i samisk hvis de ønsker det, uansett hvor i landet de bor. I praksis er det utfordringer med a oppfylle denne retten pa grunn av mangel pa laerere og laeremidler.',
      },
    },

    // ========== SEKSJON 3: Samisk i medier og samfunn ==========
    {
      id: 'norsk-vg1-7-3-n-section3',
      type: 'text',
      content: `## Samisk i medier og samfunn

Skal et sprak leve, ma det brukes. Det ma høres pa radio, sees pa TV, leses i aviser og dukke opp i sosiale medier. Her har det skjedd mye de siste arene.

NRK Sapmi er den samiske redaksjonen til NRK. De sender nyheter pa nordsamisk daglig, har radioprogrammer pa alle tre samiske sprak, lager TV-programmer og produserer nettinnhold. For barn finnes det samiske barneprogrammer. Dette er ikke bare underholdning. Det er infrastruktur for et levende sprak.

Ávvir er en dagsavis pa nordsamisk. Tenk pa hva det betyr: a kunne lese nyheter pa sitt eget sprak hver dag. A se verden beskrevet og analysert pa det spraket du tenker pa. Sagat er en norskspraaklig avis som dekker samiske saker, viktig for de mange som ikke behersker samisk men interesserer seg for samisk samfunnsliv.

Pa internett er samisk stadig mer synlig. Wikipedia finnes pa nordsamisk. Google og Microsoft har begynt a inkludere samisk i oversettelsesverktøyene sine. Du kan sette telefonen din til samisk. Samisk finnes pa sosiale medier som TikTok, Instagram og Facebook. Unge samer skaper innhold pa samisk og nar et publikum som tidligere generasjoner bare kunne drømme om.

Og sa har vi de synlige symbolene. 6. februar, samefolkets dag, feires over hele Norge. Samiske farger og flagg sees i gatebildet. Samisk synges pa nasjonaldagsfeiringer og i idrettsarrangementer. Skilting pa samisk blir stadig vanligere. Denne synligheten er viktig. Den viser at samisk er en del av det norske samfunnet, ikke noe fremmed og fjernt.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-7-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva er NRK Sapmi?',
        options: [
          { id: 'a', text: 'En samisk frivillig organisasjon', isCorrect: false },
          { id: 'b', text: 'NRKs samiske redaksjon med nyheter og programmer pa samisk', isCorrect: true },
          { id: 'c', text: 'En privat TV-kanal', isCorrect: false },
          { id: 'd', text: 'Et samisk politisk parti', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'NRK Sapmi er NRKs samiske redaksjon. De sender daglige nyheter pa nordsamisk, har radioprogrammer pa alle tre samiske sprak, lager TV-programmer og produserer nettinnhold. De spiller en viktig rolle for a holde samisk som et levende, moderne sprak.',
      },
    },

    // ========== SEKSJON 4: Gapet mellom rettigheter og virkelighet ==========
    {
      id: 'norsk-vg1-7-3-n-section4',
      type: 'text',
      content: `## Gapet mellom rettigheter og virkelighet

La oss vaere aerlige om utfordringene. A ha rett til noe er ikke det samme som a fa det. Mellom lovtekst og hverdag ligger det ofte et gap som ma fylles med ressurser, kompetanse og politisk vilje.

Det mangler laerere. Hvordan skal en skole i Oslo tilby samiskundervisning nar det knapt finnes samisklaerere a ansette? Løsningen er ofte fjernundervisning, men a laere et sprak gjennom en skjerm er ikke det samme som a laere det i et klasserom med en laerer til stede.

Det mangler laeremidler. Mens norske elever har tilgang til utallige laerebøker, digitale ressurser og pedagogisk materiell, er utvalget pa samisk langt mer begrenset. A utvikle laeremidler pa tre forskjellige samiske sprak er kostbart og tidkrevende.

Det er vanskelig a bruke samisk i hverdagen. Selv om du har rett til a snakke samisk pa kommunehuset, hva hjelper det hvis ingen der forstar deg? Selv om du laerer samisk pa skolen, hvor skal du bruke det nar du kommer hjem til en familie som snakker norsk, i en by der ingen andre snakker samisk?

Norsk dominerer. I et samfunn der norsk er majoritetssprak, er det alltid enklere a falle tilbake til norsk. Selv i samiske omrader snakker mange norsk i hverdagen. Det krever aktiv innsats a velge samisk nar norsk er det selvfølgelige valget.

Holdninger tar tid a endre. Selv om fornorskingspolitikken offisielt er over, lever holdningene videre. Noen ser fortsatt samisk som "unyttig". Noen baerer fortsatt pa skammen fra fortiden. Det tar generasjoner a reparere skadene fra over hundre ars undertrykkelse.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-7-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva er en hovedutfordring for a oppfylle retten til samiskopplaering?',
        options: [
          { id: 'a', text: 'Samisk er for vanskelig a laere', isCorrect: false },
          { id: 'b', text: 'Det mangler laerere og laeremidler, saerlig utenfor samiske kjerneomrader', isCorrect: true },
          { id: 'c', text: 'Ingen elever vil laere samisk', isCorrect: false },
          { id: 'd', text: 'Det er forbudt a undervise i samisk', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Selv om alle elever har rett til samiskopplaering, er det vanskelig a oppfylle i praksis. Det mangler kvalifiserte laerere, laeremidler er begrenset, og fjernundervisning er ikke alltid tilfredsstillende. Gapet mellom rettigheter og virkelighet er betydelig.',
      },
    },

    // ========== SEKSJON 5: Veien videre ==========
    {
      id: 'norsk-vg1-7-3-n-section5',
      type: 'text',
      content: `## Veien videre

Tross utfordringene er det grunn til forsiktig optimisme. Noe er i ferd med a skje. Interessen for a laere samisk øker. Unge samer uttrykker stolthet over identiteten sin. Teknologien apner nye muligheter for spraklaering og spraakbruk. Og politisk vilje til a støtte samisk ser ut til a vaere sterkere enn pa lenge.

Sprakreirene gir resultater. Barn som vokser opp i sprakreir, blir flytende i samisk pa en mate som tidligere generasjoner ikke hadde mulighet til. Disse barna vil overføre spraket til sine barn igjen. Sirkelen er i ferd med a repareres.

Teknologien hjelper. Samisk pa Duolingo er under utvikling. Talesyntese og oversettelsesverktøy gjør spraket mer tilgjengelig. Digitale laeremidler kan na fram til elever over hele landet. Sosiale medier skaper sprakfellesskap pa tvers av geografi.

Men det som trengs mest, er mennesker som velger a snakke samisk. Hver samtale pa samisk, hver bok som leses, hver joik som synges, hver TikTok-video pa samisk er med pa a holde spraket levende. Sprak eksisterer ikke i lover og konvensjoner. Sprak eksisterer i munner, i ører, i samhandling mellom mennesker.

Nar du na vet om disse rettighetene, nar du forstar bakgrunnen og utfordringene, er du ogsa del av løsningen. Kunnskap er forsoning. A vite er a bry seg. Og a bry seg er første skritt mot handling.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-7-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva er sprakreir, og hvorfor er de viktige for samisk?',
        options: [
          { id: 'a', text: 'Steder der gamle samiske bøker oppbevares', isCorrect: false },
          { id: 'b', text: 'Barnehager der all kommunikasjon foregar pa samisk, slik at barn laerer spraket naturlig', isCorrect: true },
          { id: 'c', text: 'Digitale plattformer for samiskundervisning', isCorrect: false },
          { id: 'd', text: 'Samiske kultursentre for voksne', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Sprakreir er barnehager eller barnegrupper der all kommunikasjon skjer pa samisk. Barna laerer spraket naturlig gjennom lek og daglige aktiviteter, uten formell undervisning. Dette er en av de mest effektive metodene for a revitalisere truede sprak.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-7-3-n-summary',
      type: 'text',
      content: `## Oppsummering: Samiske spraklige rettigheter

Du har na laert om rettighetene som beskytter samisk i dag. Her er de viktigste punktene:

**Grunnloven og sameloven:**
Paragraf 108 gir staten plikt til a verne samisk sprak og kultur. Sameloven gir konkrete rettigheter: bruk av samisk i offentlige tjenester, rett til svar pa samisk i forvaltningsomradet, og rett til samiskopplaering.

**Forvaltningsomradet:**
Kommuner der samisk og norsk er likestilte, inkludert Kautokeino, Karasjok, Tana, Snasa og flere. Her har du fulle rettigheter til a bruke samisk i alle offentlige sammenhenger.

**Rett til opplaering:**
Alle elever i Norge har rett til opplaering i samisk, uansett hvor de bor. I samiske distrikt kan barn velge samisk som førstesprak.

**Samisk i medier:**
NRK Sapmi, Ávvir, og økt tilstedeværelse pa nett og sosiale medier holder spraket synlig og relevant i det moderne samfunnet.

**Utfordringer:**
Mangel pa laerere og laeremidler, vanskelig a bruke samisk i hverdagen, norsk dominans, og gjenvaerende holdninger fra fornorskingstiden.

**Veien videre:**
Sprakreir gir resultater, teknologien hjelper, og interessen øker. Sprak overlever gjennom mennesker som velger a snakke det.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.4 NARRATIV: Nasjonale minoriteter
// ============================================================================

export const CHAPTER_NORSK_VG1_7_4_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-7-4-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '7.4',
  title: 'Nasjonale minoriteter',
  subtitle: 'Narrativ versjon',
  description: 'Møt Norges fem nasjonale minoriteter - folkegrupper med lang historie og egne sprak.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjore rede for spraklig mangfold i Norge',
    'reflektere over forholdet mellom sprak, identitet og kulturarv',
    'analysere hvordan sprakpolitikk pavirker minoriteter',
  ],
  linkedChapterId: 'norsk-vg1-7-4',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-7-4-n-intro',
      type: 'text',
      content: `## De glemte historiene

Nar vi snakker om Norges minoriteter, tenker de fleste pa samene. Men visste du at Norge har fem offisielt anerkjente nasjonale minoriteter? Kvener, rom, romanifolket, skogfinner og jøder. Hver av disse gruppene har en lang historie i Norge, egne kulturer og ofte egne sprak. Og hver av dem har opplevd diskriminering og undertrykkelse fra det norske majoritetssamfunnet.

Hva gjør en gruppe til en nasjonal minoritet? For det første ma de ha lang historisk tilknytning til landet, minst hundre ar. For det andre ma de ha egen kultur, sprak eller religion. For det tredje ma de vaere offisielt anerkjent av staten. Norge ratifiserte Europaradets rammekonvensjon for nasjonale minoriteter i 1999, og da ble disse fem gruppene formelt anerkjent.

Men nasjonale minoriteter er ikke det samme som urfolk. Samene er Norges eneste urfolk, med saerskilt status etter internasjonal lov. Urfolk har enda sterkere rettigheter, knyttet til at de var i omradet for staten ble etablert. Nasjonale minoriteter har en annen historie, ofte preget av migrasjon, men likevel med generasjoners tilknytning til Norge.

I dette kapittelet skal vi møte hver av de fem nasjonale minoritetene. Vi skal laere om historien deres, sprakene deres, og hvordan de har blitt behandlet. Og vi skal reflektere over hva det betyr a leve som minoritet i Norge.`,
    },

    // ========== SEKSJON 1: Kvenene ==========
    {
      id: 'norsk-vg1-7-4-n-section1',
      type: 'text',
      content: `## Kvenene: Nordfinnene som bygde Nord-Norge

Fra 1500-tallet og fremover kom finske innvandrere til kysten av Nord-Norge. De slo seg ned i Troms og Finnmark, der de drev jordbruk og fiske. De ble kalt kvener eller norskfinner, og de tok med seg et sprak som var naert beslektet med finsk, men som utviklet seg til noe eget over tid.

Kvensk sprak ble lenge regnet som en finsk dialekt, men i 2005 ble det anerkjent som et eget minoritetssprak i Norge. Det var en viktig symbolsk seier. Kvensk er ikke bare finsk med norske laneord. Det er et sprak som har utviklet seg i en saeregen kontekst, med egne ord for lokale fenomener og egne grammatiske trekk.

Men situasjonen for kvensk er alvorlig. Av mellom 2000 og 8000 mennesker som fortsatt snakker spraket, er de fleste eldre. Farre barn laerer kvensk. Overføringen mellom generasjoner svikter. Spraket er truet.

Kvenene ble rammet hardt av fornorskingspolitikken. I skolen var kvensk forbudt, akkurat som samisk. Barn ble straffet for a snakke morsmalet. Mange foreldre sluttet a snakke kvensk med barna sine for a skane dem for diskriminering. Resultatet var spraktap og kulturtap over generasjoner.

I dag arbeider Kvensk institutt i Børselv for a bevare og revitalisere spraket. Det tilbys kvenskundervisning i noen skoler. Kvenske aviser og radioprogrammer finnes. Men ressursene er begrenset, og kampen for a holde spraket levende er hard.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-7-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvilket sprak snakker kvenene tradisjonelt?',
        options: [
          { id: 'a', text: 'Samisk', isCorrect: false },
          { id: 'b', text: 'Kvensk, et sprak beslektet med finsk', isCorrect: true },
          { id: 'c', text: 'Russisk', isCorrect: false },
          { id: 'd', text: 'Svensk', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Kvensk er naert beslektet med finsk, men ble anerkjent som et eget minoritetssprak i Norge i 2005. Det har utviklet seg i Nord-Norge over flere hundre ar og har egne saertrekk. Spraket er i dag truet, med de fleste talere i høy alder.',
      },
    },

    // ========== SEKSJON 2: Rom og romanifolket ==========
    {
      id: 'norsk-vg1-7-4-n-section2',
      type: 'text',
      content: `## Rom og romanifolket: To folk, to historier

Her ma vi vaere nøye med begreper, for navnene kan forveksles. Rom og romanifolket er to forskjellige grupper med ulik historie, selv om begge har røtter som kan spores tilbake til India.

Rom, tidligere kalt sigøynere, er en folkegruppe som har vaert i Norge siden 1800-tallet. De snakker romanes, et sprak med indiske røtter. Roms historie i Norge er preget av ekstrem ekskludering. Fra 1927 til 1956 var det faktisk ulovlig for rom a reise inn i Norge. De som allerede var her, ble utsatt for systematisk diskriminering. Under andre verdenskrig ble mange norske rom deportert til konsentrasjonsleirer og drept i Holocaust.

I dag bor det mellom 500 og 700 rom i Norge. De kjemper fortsatt mot fordommer og diskriminering, men det er ogsa økt fokus pa deres historie og rettigheter.

Romanifolket, ogsa kalt tatere, har en annen historie. De har vaert i Norge siden 1500-tallet, mye lenger enn rom. De snakker romani, et sprak som blander norsk grammatikk med et romanivokabular. Det var tradisjonelt et hemmelig sprak, brukt innad i gruppen for a beskytte seg mot majoritetssamfunnet.

Romanifolkets historie er kanskje den mest brutale av alle nasjonale minoriteter i Norge. De ble utsatt for tvangssterilisering, noe som fortsatte helt til 1977. Barn ble systematisk tatt fra foreldre. De ble tvunget til bofasthet, nektet a reise slik de tradisjonelt hadde gjort. Deres levemater, handverk og handel, ble forbudt eller gjort umulige. Norsk misjon blant hjemløse drev leirer der romanifolk ble internert.

Dette er historien vi ma kjenne for a forsta dagens situasjon.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-7-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom rom og romanifolket?',
        options: [
          { id: 'a', text: 'Det er ingen forskjell, det er det samme folket', isCorrect: false },
          { id: 'b', text: 'Rom kom til Norge pa 1800-tallet, romanifolket har vaert her siden 1500-tallet. De har ulike sprak og kulturer.', isCorrect: true },
          { id: 'c', text: 'Rom bor i byer, romanifolket bor pa landet', isCorrect: false },
          { id: 'd', text: 'Romanifolket er fra Romania', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Rom og romanifolket er to forskjellige grupper. Rom (tidligere kalt sigøynere) kom til Norge pa 1800-tallet og snakker romanes. Romanifolket (tatere) har vaert i Norge siden 1500-tallet og snakker romani. Begge har opprinnelse i India, men har ulike historier i Norge.',
      },
    },

    // ========== SEKSJON 3: Skogfinner og jøder ==========
    {
      id: 'norsk-vg1-7-4-n-section3',
      type: 'text',
      content: `## Skogfinner og jøder: To ulike historier

Skogfinnene kom til Norge pa 1600-tallet. De var finske innvandrere som slo seg ned i skogomrader i Hedmark, Akershus og over grensen til Sverige i Värmland. De var spesialister pa svedjebruk, en jordbruksteknikk der skog brennes for a gjøre jorda fruktbar. Det finske spraket de snakket, er na utdødd. Ingen talere er igjen.

Men det betyr ikke at skogfinsk kultur er borte. Tradisjoner, byggeskikker og stedsnavn lever videre. Finnskogdagene feires arlig og samler mennesker som identifiserer seg med denne arven. Det skogfinske kulturminneomradet er utpekt som nasjonalt kulturminneomrade, og arbeidet med a dokumentere og bevare historien fortsetter.

Skogfinnenes historie viser at sprak kan dø ut selv nar kulturen lever videre pa andre mater. Det minner oss om hvor skjørt sprak er, og hvor viktig det er a handle mens det fortsatt er tid.

Jødene i Norge har en annen historie igjen. De var forbudt adgang til Norge i over 150 ar, fra 1687 til 1851. "Jødeparagrafen" i Grunnloven av 1814 forbød jøder og jesuitter a komme inn i riket. Først i 1851 ble forbudet opphevet.

Da jødisk innvandring begynte, etablerte det seg et lite, men levende jødisk samfunn i Norge, særlig i Oslo og Trondheim. Sa kom andre verdenskrig og okkupasjonen. 773 norske jøder ble arrestert av norsk politi, deportert til konsentrasjonsleirer, og drept. Det jødiske samfunnet i Norge ble nesten utslettet.

I dag lever det rundt 1500 jøder i Norge. Synagoger finnes i Oslo og Trondheim. Jødiske museer dokumenterer historien. Det jødiske samfunnet er lite, men det er der, baerende pa en historie som er bade norsk og jødisk.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-7-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva skjedde med skogfinnenes sprak?',
        options: [
          { id: 'a', text: 'Det er et levende sprak med mange talere', isCorrect: false },
          { id: 'b', text: 'Finsk sprak blant skogfinnene døde ut, men kulturarven bevares pa andre mater', isCorrect: true },
          { id: 'c', text: 'Det utviklet seg til kvensk', isCorrect: false },
          { id: 'd', text: 'Det er forbudt og hemmelig', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Det finske spraket skogfinnene snakket, er na utdødd. Det finnes ingen morsmalstalere igjen. Men skogfinsk kultur bevares gjennom tradisjoner, byggeskikker, stedsnavn og kulturelle arrangementer som Finnskogdagene.',
      },
    },

    // ========== SEKSJON 4: Sprak, identitet og rettigheter ==========
    {
      id: 'norsk-vg1-7-4-n-section4',
      type: 'text',
      content: `## Sprak, identitet og rettigheter

Hva betyr det a miste spraket sitt? For mange er sprak mer enn et kommunikasjonsverktøy. Sprak baerer kultur, historie, verdensforstaelse. I ordforradet ligger erfaringer fra generasjoner. I grammatikken ligger mater a tenke pa. Nar et sprak dør, forsvinner en unik mate a vaere menneske pa.

For romanifolket var spraket ogsa en beskyttelse. A ha et sprak majoriteten ikke forstår, gir et rom for a vaere seg selv, a diskutere ting andre ikke skal here, a bevare noe eget i en fiendtlig verden. Nar spraket forsvinner, forsvinner ogsa denne beskyttelsen.

Men identitet kan overleve selv nar spraket er borte. Skogfinnene har ingen talere igjen, men det finnes fortsatt mennesker som identifiserer seg som skogfinner, som er stolte av arven sin, som feirer kulturelle tradisjoner. Spraket er viktig, men det er ikke alt.

Hvilke rettigheter har de nasjonale minoritetene? Europaradets rammekonvensjon for nasjonale minoriteter forplikter Norge til a beskytte disse gruppenes rett til a bevare kultur, sprak og identitet. Europeisk charter for regions- eller minoritetssprak gir kvensk høyeste beskyttelsesniva, mens romani og romanes har noe lavere beskyttelse.

I praksis betyr dette at staten har ansvar for a støtte revitalisering av kvensk, for a dokumentere romanifolkets historie og kultur, for a sikre at de nasjonale minoritetene ikke diskrimineres. Men som vi har sett med samisk, er det ofte et gap mellom rettigheter pa papiret og virkeligheten i hverdagen.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-7-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva forplikter Europaradets rammekonvensjon Norge til?',
        options: [
          { id: 'a', text: 'A gi alle nasjonale minoriteter like rettigheter som majoriteten', isCorrect: false },
          { id: 'b', text: 'A beskytte nasjonale minoriteters rett til a bevare kultur, sprak og identitet', isCorrect: true },
          { id: 'c', text: 'A gi statlige jobber til minoriteter', isCorrect: false },
          { id: 'd', text: 'Norge har ingen forpliktelser overfor nasjonale minoriteter', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Europaradets rammekonvensjon for nasjonale minoriteter forplikter Norge til a beskytte minoritetenes rett til a bevare sin kultur, sitt sprak og sin identitet, samt a beskytte dem mot diskriminering.',
      },
    },

    // ========== SEKSJON 5: Felles erfaringer, ulike veier ==========
    {
      id: 'norsk-vg1-7-4-n-section5',
      type: 'text',
      content: `## Felles erfaringer, ulike veier

Nar vi ser tilbake pa historien til de nasjonale minoritetene, ser vi noen felles trekk. Alle ble utsatt for diskriminering og fordommer. Alle opplevde at majoritetssamfunnet prøvde a endre dem, a frata dem det som gjorde dem til dem selv. Alle mistet noe i denne prosessen.

Men det er ogsa store forskjeller. Samene har sterke rettigheter som urfolk, et eget parlament, og relativt mange talere. Kvenene har et truet sprak, men det er fortsatt mulig a revitalisere det. Skogfinnene har allerede mistet spraket og ma konsentrere seg om andre former for kulturell bevaring. Romanifolket baerer pa traumer fra noen av de verste overgrepene i nyere norsk historie.

Hva kan vi laere av dette? For det første at spraklig mangfold er skjørt. Sprak kan forsvinne pa noen fa generasjoner hvis de ikke aktivt vedlikeholdes. For det andre at statlig politikk har enorme konsekvenser. Det staten velger a gjøre, former menneskers liv i generasjoner. For det tredje at forsoning er mulig, men det krever handling, ikke bare ord.

Nar du na vet om disse gruppene, nar du kjenner historien deres og utfordringene de star overfor, har du ogsa et ansvar. Ikke et tungt ansvar, men et enkelt et: a ikke glemme. A huske at Norge er mer enn majoritetsbefolkningen. A anerkjenne at mangfoldet er en rikdom, ikke et problem. A forstå at vi alle er del av samme samfunn, med ansvar for hverandre.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-7-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-7-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvilke fem grupper er anerkjent som nasjonale minoriteter i Norge?',
        options: [
          { id: 'a', text: 'Samer, kvener, polakker, svensker og dansker', isCorrect: false },
          { id: 'b', text: 'Kvener, rom, romanifolket, skogfinner og jøder', isCorrect: true },
          { id: 'c', text: 'Samene, finlendere, russere, amerikanere og briter', isCorrect: false },
          { id: 'd', text: 'Ingen grupper er offisielt anerkjent', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Norges fem nasjonale minoriteter er kvener, rom, romanifolket (tatere), skogfinner og jøder. Samene er ikke nasjonal minoritet, men urfolk, med en annen juridisk status. Nasjonale minoriteter har lang historisk tilknytning til Norge og egen kultur.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-7-4-n-summary',
      type: 'text',
      content: `## Oppsummering: Nasjonale minoriteter i Norge

Du har na laert om Norges fem nasjonale minoriteter. Her er de viktigste punktene:

**De fem nasjonale minoritetene:**
Kvener (norskfinner), rom (sigøynere), romanifolket (tatere), skogfinner og jøder. Alle har lang historisk tilknytning til Norge og egen kultur.

**Skillet fra urfolk:**
Nasjonale minoriteter er ikke det samme som urfolk. Samene er Norges eneste urfolk og har saerskilt status etter internasjonal lov.

**Sprakene:**
Kvensk (truet, men med revitaliseringsinnsats), romanes (roms sprak), romani (romanifolkets sprak, kritisk truet), skogfinsk (utdødd). Jødene har jiddisk og hebraisk, men norsk er hovedsprak.

**Diskriminering og overgrep:**
Alle gruppene ble rammet av diskriminering. Romanifolket ble utsatt for tvangssterilisering og tvangsfjernelse av barn. Norske rom og jøder ble rammet av Holocaust.

**Rettigheter:**
Europaradets rammekonvensjon forplikter Norge til a beskytte minoritetenes kultur, sprak og identitet. Kvensk har høyeste beskyttelsesniva i sprakloven.

**Sprak og identitet:**
Sprak baerer kultur og tilhørighet. Nar sprak dør, mister vi unike mater a forsta verden pa. Men identitet kan ogsa overleve pa andre mater.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const NORSK_VG1_NARRATIV_DEL8_CHAPTERS = [
  CHAPTER_NORSK_VG1_7_1_NARRATIV,
  CHAPTER_NORSK_VG1_7_2_NARRATIV,
  CHAPTER_NORSK_VG1_7_3_NARRATIV,
  CHAPTER_NORSK_VG1_7_4_NARRATIV,
];
