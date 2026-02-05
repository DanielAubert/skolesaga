/**
 * Norsk VG3 - Narrative versjoner Del 4 (Kapittel 2.1-2.7)
 *
 * Engasjerende, fortellende versjoner av kapitlene om modernisme og mellomkrigstid,
 * optimalisert for lesing/lytting.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 2.1 NARRATIV: Modernismens kjennetegn
// ============================================================================

export const CHAPTER_NORSK_VG3_2_1_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-2-1-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '2.1',
  title: 'Modernismens kjennetegn',
  subtitle: 'Narrativ versjon',
  description: 'Opplev hvordan en verden i ruiner forandret litteraturen for alltid - fra skyttergravene til bevissthetsstrommen.',
  estimatedMinutes: 40,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
  ],
  linkedChapterId: 'norsk-vg3-2-1',
  content: [
    {
      id: 'norsk-vg3-2-1-n-intro',
      type: 'text',
      content: `## Da verden gikk i stykker

Forestill deg at du er en ung mann i 1916. Du ligger i en gjormete skyttergrav et sted i Frankrike. Rundt deg faller granatene, og kameratene dine dor en etter en i det som skulle vaere "krigen som avslutter alle kriger". Du hadde trodd pa fremskrittet, pa sivilisasjonen, pa at menneskeheten beveget seg mot noe bedre. Na ser du sannheten: Vi er i stand til a utslette hverandre i industriell skala.

Nar krigen er over, har ni millioner soldater dodd. Hele byer er jevnet med jorden. Og noe annet er ogsa dodt: Troen pa at verden er ordnet, forutsigbar og meningsfull.

Hvordan skal litteraturen fange denne nye virkeligheten? De gamle formene - den pene romanen med begynnelse, midte og slutt, det velformede diktet med rim og rytme - virker plutselig falske. De later som om verden fortsatt henger sammen. Men det gjor den jo ikke.

Sa begynner forfatterne a eksperimentere. De bryter opp fortellingene i fragmenter. De lar tankene stromme fritt over sidene. De blander myter og samtid, drom og virkelighet. De skaper noe nytt - noe vi kaller modernismen.`,
    },
    {
      id: 'norsk-vg3-2-1-n-section1',
      type: 'text',
      content: `## En verden i omveltning

For a forsta modernismen ma vi forsta hva som skjedde med verden rundt 1900. Det var ikke bare krigen - det var en hel serie omveltninger som rokket ved alt folk hadde trodd pa.

Charles Darwin hadde vist at mennesket ikke var skapt i Guds bilde, men nedstammet fra apene. Nietzsche hadde erklart at "Gud er dod" - ikke som en triumf, men som en diagnose av en kultur som hadde mistet sitt ankerfeste. Hvis Gud ikke finnes, hvem bestemmer da hva som er rett og galt?

Sigmund Freud avdekket det ubevisste - alle de driftene og draommene som ligger under overflaten av var bevissthet. Plutselig var vi ikke lenger herrer i eget hus. Under den siviliserte fasaden lurer krefter vi knapt forstaar.

Einstein viste at selv tid og rom er relative. Det faste rammeverket for virkeligheten viste seg a vaere en illusjon. Og sa kom krigen og demonstrerte at fremskrittet ikke bare bringer goder - det bringer ogsa maskingevaer og giftgass.

Teknologien endret hverdagen dramatisk. Biler, fly, telefon, film - alt dette forandret hvordan mennesker opplevde tid og rom. Verden krympet og akselererte. Storbyene vokste og skapte nye, fremmedgjorende livsmater. Mennesket folte seg lite i den moderne verden.`,
    },
    {
      id: 'norsk-vg3-2-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvilken historisk hendelse regnes som utlosende for modernismen?',
        options: [
          { id: 'a', text: 'Den franske revolusjon', isCorrect: false },
          { id: 'b', text: 'Forste verdenskrig', isCorrect: true },
          { id: 'c', text: 'Andre verdenskrig', isCorrect: false },
          { id: 'd', text: 'Den industrielle revolusjon', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Forste verdenskrig (1914-1918) regnes som den utlosende hendelsen for modernismen. Krigens meningslose massedod knuste troen pa fremskritt og sivilisasjon, og skapte behov for nye litteraere uttrykksformer.',
      },
    },
    {
      id: 'norsk-vg3-2-1-n-section2',
      type: 'text',
      content: `## Fragmenter av en knust virkelighet

Modernistenes svar pa kaoset var a la litteraturen speile det. Hvis virkeligheten er fragmentert, ma ogsa litteraturen vaere det.

Tenk pa et tradisjonelt maleri: Det viser en scene fra ett perspektiv, som om du ser gjennom et vindu. Na tenk pa Picassos kubisme: Ansiktet er brutt opp, vist fra flere vinkler samtidig. Det er ikke "pent", men det fanger noe sant om hvordan vi faktisk opplever verden - i bruddstykker, fra skiftende perspektiver.

Modernistisk litteratur gjor det samme. Den lineaere fortellingen - forst skjedde dette, sa skjedde dette - blir erstattet av fragmenter, tidshopp, parallelle handlinger. Leseren ma selv sette bitene sammen, som et puslespill.

T.S. Eliots dikt "The Waste Land" fra 1922 er et perfekt eksempel. Det er et kaos av stemmer, sitater pa flere sprak, mytiske referanser og samtidsbilder. Det finnes ingen ryddig forteller som forklarer hva som skjer. Leseren kastes ut i et odelandet - bade et konkret landskap og et bilde pa Europas andelige tomhet etter krigen.

Apningslinjene snur alt pa hodet: "April is the cruellest month" - april er den grusomste maneden. Tradisjonelt er varen tid for fornyelse og hap. Men Eliot sier: Varen er grusom fordi den vekker liv i det som var dadt, tvinger frem minner og lengsel vi helst ville begrave.`,
    },
    {
      id: 'norsk-vg3-2-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva menes med "fragmentering" i modernistisk litteratur?',
        options: [
          { id: 'a', text: 'At bokene er delt inn i mange korte kapitler', isCorrect: false },
          { id: 'b', text: 'At verket brytes opp i bruddstykker leseren ma sette sammen', isCorrect: true },
          { id: 'c', text: 'At forfatteren skriver i korte arbeidsokter', isCorrect: false },
          { id: 'd', text: 'At bokene utgis i flere deler', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Fragmentering betyr at verket ikke presenteres som en ordnet helhet, men som bruddstykker - tidshopp, skiftende synsvinkler, usammenhengende scener - som leseren aktivt ma sette sammen for a skape mening.',
      },
    },
    {
      id: 'norsk-vg3-2-1-n-section3',
      type: 'text',
      content: `## Inn i bevisstheten

En av modernismens storste nyvinninger var bevissthetsstrommen - forsok pa a gjengi tankenes og inntrykkenes flyt direkte pa papiret.

Tenk pa hvordan du faktisk tenker. Det er ikke pene, fullstendige setninger. Det er assosiasjoner, hopp fra emne til emne, minner som plutselig dukker opp, sanseinntrykk som blander seg med tanker. En lukt kan plutselig transportere deg tjue ar tilbake i tid.

James Joyce tok dette til ytterligheter i romanen "Ulysses" fra 1922. Boken folger Leopold Bloom gjennom en eneste dag i Dublin. Men vi er inne i hodet hans, opplever verden slik han opplever den - et kaos av tanker, inntrykk, minner og drifter.

Virginia Woolf gjorde noe lignende, men med storre poetisk finesse. I "Mrs. Dalloway" folger vi Clarissa Dalloway gjennom en dag i London mens hun forbereder en fest. Men tiden folder seg ut og trekker seg sammen - et oyeblikk kan vare sider, ar kan passere i en setning. Vi er i hennes bevissthet, og tid fungerer annerledes der.

Marcel Proust brukte syv bind pa "Pa sporet av den tapte tid", der en smak av en madeleinekake utloser en flom av minner. Fortiden er ikke borte, viser Proust - den ligger lagret i kroppen, i sansene, klar til a vekkes til live.`,
    },
    {
      id: 'norsk-vg3-2-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva er bevissthetsstrom?',
        options: [
          { id: 'a', text: 'En filosofisk retning fra Tyskland', isCorrect: false },
          { id: 'b', text: 'En teknikk som gjengir tankenes flyt direkte', isCorrect: true },
          { id: 'c', text: 'En type elv som brukes som symbol', isCorrect: false },
          { id: 'd', text: 'Et psykologisk eksperiment', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Bevissthetsstrom er en litteraer teknikk som forsoker a gjengi tankenes og inntrykkenes strom direkte, uten ordnende forteller. James Joyce, Virginia Woolf og Marcel Proust var mestere i denne teknikken.',
      },
    },
    {
      id: 'norsk-vg3-2-1-n-section4',
      type: 'text',
      content: `## Modernismens mestere

La oss se naermere pa noen av de store modernistene som forandret litteraturen.

James Joyce fra Irland skrev "Ulysses", som mange regner som det 20. arhundrets viktigste roman. Boken var sa eksperimentell at den ble forbudt i flere land. Hvert kapittel har sin egen stil - ett er skrevet som et teaterstykke, ett som en rekke sporsmal og svar, ett som en uendelig bevissthetsstrom uten punktum.

Virginia Woolf i England utforsket det indre livet med poetisk presisjon. "To the Lighthouse" bryter radikalt med kronologien - midtdelen, som dekker ti ar, er bare noen fa sider, mens en enkelt dag kan strekke seg over hundrevis.

Franz Kafka i Praha skrev om det absurde. I "Prosessen" arresteres Josef K. uten a fa vite hva han er anklaget for. I "Forvandlingen" vakner Gregor Samsa som et kjempestort insekt. Kafkas verden er marerittaktig, men ogsaa merkelig gjenkjennelig - byrakratiets ugjennomtrengelighet, familiens kvelende forventninger.

Marcel Proust i Frankrike brukte et helt liv pa a utforske minnet og tiden. Hans romanverk viser at fortiden ikke er borte - den lever i oss, klar til a vekkes av en smak, en lukt, en melodi.`,
    },
    {
      id: 'norsk-vg3-2-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvilken forfatter skrev "Ulysses"?',
        options: [
          { id: 'a', text: 'Virginia Woolf', isCorrect: false },
          { id: 'b', text: 'Franz Kafka', isCorrect: false },
          { id: 'c', text: 'James Joyce', isCorrect: true },
          { id: 'd', text: 'Marcel Proust', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'James Joyce fra Irland skrev "Ulysses" (1922), som regnes som et hovedverk i modernismen. Boken folger Leopold Bloom gjennom en dag i Dublin og eksperimenterer radikalt med form og stil.',
      },
    },
    {
      id: 'norsk-vg3-2-1-n-section5',
      type: 'text',
      content: `## Modernismen i Norge

Norge var noe sen med a ta til seg modernismen. Mens Joyce og Woolf skrev sine hovedverker pa 1920-tallet, kom det virkelige modernistiske gjennombruddet i norsk lyrikk forst pa 1950-tallet.

Men det fantes tidlige modernistiske tendenser. Knut Hamsuns "Sult" fra 1890 - med sin skildring av en sulten manns kaotiske bevissthet - peker fremover mot bevissthetsstrommen. Sigbjorn Obstfelders symbolistiske lyrikk fra 1890-tallet bryter med de tradisjonelle formene.

Det var likevel forfattere som Tarjei Vesaas som virkelig bragte modernismen til Norge. Hans romaner - som "Fuglane" og "Is-slottet" - kombinerer poetisk prosa med eksistensiell tematikk. Språket er enkelt pa overflaten, men ladet med symbolikk og undertekst.

I lyrikken kom gjennombruddet med diktere som Rolf Jacobsen, som skrev om teknologi og natur i et moderne formsprak, og Olav H. Hauge, som forente det lokale med det universelle i konsentrerte, dype dikt.

Modernismen forandret var forstaelse av hva litteratur kan vaere. Den viste at formen ikke er noytral - hvordan du forteller, er en del av hva du forteller. Og den insisterte pa at litteraturen ma vaere sant mot sin tid, selv nar den tiden er fragmentert og forvirrende.`,
    },
    {
      id: 'norsk-vg3-2-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Nar kom det modernistiske gjennombruddet i norsk lyrikk?',
        options: [
          { id: 'a', text: 'Pa 1920-tallet', isCorrect: false },
          { id: 'b', text: 'Pa 1930-tallet', isCorrect: false },
          { id: 'c', text: 'Pa 1950-tallet', isCorrect: true },
          { id: 'd', text: 'Pa 1970-tallet', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Det modernistiske gjennombruddet i norsk lyrikk kom forst pa 1950-tallet, senere enn i mange andre europeiske land. Diktere som Rolf Jacobsen og Olav H. Hauge var sentrale i denne utviklingen.',
      },
    },
    {
      id: 'norsk-vg3-2-1-n-summary',
      type: 'text',
      content: `## Oppsummering

**Modernismen** var det 20. arhundrets store litteraere revolusjon, fodt ut av forste verdenskrigs traumer og tidens omveltninger.

**Historisk bakgrunn:**
- Forste verdenskrig knuste troen pa fremskritt
- Freuds psykoanalyse avdekket det ubevisste
- Einsteins relativitetsteori utfordret faste sannheter
- Teknologisk revolusjon endret hverdagen

**Litteraere kjennetegn:**
- Fragmentering: Brutt kronologi, skiftende perspektiver
- Bevissthetsstrom: Tankenes flyt gjengis direkte
- Subjektivitet: Virkeligheten oppleves, ikke beskrives objektivt
- Intertekstualitet: Referanser til myter og andre tekster

**Sentrale forfattere internasjonalt:**
- James Joyce: "Ulysses"
- Virginia Woolf: "Mrs. Dalloway"
- Franz Kafka: "Prosessen"
- Marcel Proust: "Pa sporet av den tapte tid"
- T.S. Eliot: "The Waste Land"

**I Norge:**
- Sen modernisme - gjennombrudd pa 1950-tallet
- Tarjei Vesaas, Rolf Jacobsen, Olav H. Hauge

**Betydning:** Modernismen forandret var forstaelse av hva litteratur kan vaere og hvordan form og innhold henger sammen.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.2 NARRATIV: Olav Duun
// ============================================================================

export const CHAPTER_NORSK_VG3_2_2_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-2-2-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '2.2',
  title: 'Olav Duun',
  subtitle: 'Narrativ versjon',
  description: 'Fólg en slekt gjennom generasjoner i kampen mellom lys og morke - historien om Juvikfolke og mannen som skrev den.',
  estimatedMinutes: 35,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
    'skrive litteraere analyser og sammenligninger',
  ],
  linkedChapterId: 'norsk-vg3-2-2',
  content: [
    {
      id: 'norsk-vg3-2-2-n-intro',
      type: 'text',
      content: `## En slekts saga

Pa en gard i Namdalen, ytterst mot havet, bor en slekt som har vaert der i uminnelige tider. Gjennom generasjonene har de kjempet mot naturkreftene, mot hverandre, og mot det morke som bor i dem selv. Dette er Juvikfolket - og deres historie er en av de storste fortellingene i norsk litteratur.

Mannen som skrev denne sagaen het Olav Duun. Han vokste selv opp i dette landskapet, blant bonder og fiskere som levde hardt og tenkte dypt. Han kjente menneskene, kjente naturen, kjente kampen mellom det gode og det onde som utspiller seg i ethvert menneskehjerte.

I seks bind - fra "Juvikingar" til "I eventyret" - folger vi slekten pa Juvika fra naermest mytiske tider til var egen tid. Det er en reise gjennom norsk historie, men ogsa en tidlos fortelling om hva det vil si a vaere menneske.

For i Duuns univers er kampen mellom godt og ondt ikke noe abstrakt. Den utspiller seg i konkrete valg, i forholdet mellom foreldre og barn, mellom mann og kvinne, mellom menneske og natur. Og utfallet er aldri gitt pa forhand.`,
    },
    {
      id: 'norsk-vg3-2-2-n-section1',
      type: 'text',
      content: `## Forfatteren fra Namdalen

Olav Duun ble fodt 21. november 1876 pa Joa i Namdalen. Han vokste opp i et bondemiljo preget av harde livsvilkar og sterke tradisjoner. Havet var naert, fjellene var naere, og menneskene levde tett pa naturens krefter.

Han ble laerer - et yrke som ga ham tid til a skrive og naerhet til vanlige mennesker. Forst arbeidet han i Namdalen, senere i Holmestrand. Men det var alltid Namdalen han skrev om, alltid dette landskapet og disse menneskene som fylte hans boker.

Duun debuterte sent, i 1907, med romanen "Loglege skruvar og anna folk". Men det var med "Juvikfolke" han skapte sitt livsverk. Fra 1918 til 1923 ga han ut de seks bindene som skulle bli staende som noe av det ypperste i norsk romankunst.

Han skrev pa nynorsk med et sterkt trondersk preg - et sprak sa kraftfullt og poetisk at det naesten synger. Setningene hans er som landskapet han skriver om: De kan vaere harde og vaerbitne, men ogsa overraskende vakre.

Duun ble nominert til Nobelprisen i litteratur flere ganger, men fikk den aldri. Han dode i 1939, like for krigen som skulle ryste verden. Men verkene hans lever videre.`,
    },
    {
      id: 'norsk-vg3-2-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvor mange bind bestar "Juvikfolke" av?',
        options: [
          { id: 'a', text: 'Tre bind', isCorrect: false },
          { id: 'b', text: 'Fire bind', isCorrect: false },
          { id: 'c', text: 'Seks bind', isCorrect: true },
          { id: 'd', text: 'Atte bind', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: '"Juvikfolke" bestar av seks bind utgitt mellom 1918 og 1923: "Juvikingar", "I blinda", "Storbryllaupet", "I ungdomen", "I stormen" og "I eventyret".',
      },
    },
    {
      id: 'norsk-vg3-2-2-n-section2',
      type: 'text',
      content: `## Juvikfolke - slektens saga

La oss folge Juvikfolket gjennom generasjonene.

I de forste bindene moter vi en slekt i en naermest arkaisk tid. Det er vikingtider, middelalder - eller kanskje bare et samfunn sa isolert at tiden knapt har noen betydning. Her lever menneskene tett pa naturen, styrt av aarstider og vaer, av fiske og jordbruk.

Men i slekten ligger det ogsa noe morkt. Det er voldsomhet, egenradighet, destruktive krefter som gar i arv fra generasjon til generasjon. Duun viser oss hvordan egenskaper - bade gode og onde - folger blodlinjene, men ogsa hvordan det enkelte menneske kan kjempe mot sin arv.

Den sentrale skikkelsen er Per Anders. Han baerer pa slektens morke arv, kjenner voldsomheten i seg selv. Men han velger a kjempe imot. Han velger det gode, selv nar det koster ham dyrt.

Gjennom de seks bindene folger vi denne kampen - ikke bare i Per Anders, men i hele slekten. Det er en kosmisk kamp, speilet i naturen og aarstidene, i stormer og stille dager. Men det er ogsa en intimt menneskelig kamp, utspilt i daglige valg og hverdagens prover.`,
    },
    {
      id: 'norsk-vg3-2-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva er det sentrale temaet i "Juvikfolke"?',
        options: [
          { id: 'a', text: 'Klassekampen mellom bonder og embedsmenn', isCorrect: false },
          { id: 'b', text: 'Kampen mellom godt og ondt i mennesket og slekten', isCorrect: true },
          { id: 'c', text: 'Kjaerlighetshistorier gjennom generasjoner', isCorrect: false },
          { id: 'd', text: 'Norges politiske historie', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Det sentrale temaet i "Juvikfolke" er kampen mellom godt og ondt - ikke som abstrakte storrelser, men som krefter i mennesket og slekten. Per Anders sin kamp mot sin morke arv er kjernen i verket.',
      },
    },
    {
      id: 'norsk-vg3-2-2-n-section3',
      type: 'text',
      content: `## Arv og valg

Et av de store sporsmaalene Duun stiller, handler om arv og frihet. Er vi fanget av genene vare, av slektens historie? Eller kan vi velge var egen vei?

Naturalistene - som Amalie Skram i "Hellemyrsfolket" - tendens til a svare pessimistisk. Arven bestemmer, miljoet former, mennesket er et offer for krefter det ikke kontrollerer.

Duun gir et annet svar. Ja, arven er virkelig. Per Anders kjenner morket i seg, voldsomheten som har fulgt slekten gjennom generasjoner. Men han er ikke determinert av den. Han kan velge - og valgene hans har betydning.

Dette gjor Duuns verk til noe mer enn en naturalistisk slektsskildring. Det er et dypt humanistisk verk som insisterer pa menneskets verdighet og ansvar. Vi er ikke bare produkter av arv og miljo - vi er ogsa moralske vesener som star overfor valg.

Samtidig er Duun ingen naiv optimist. Kampen er hard, og seieren er aldri sikker. Det onde er virkelig, og det kan vinne. Men det gode er ogsa virkelig - og det er verdt a kjempe for.`,
    },
    {
      id: 'norsk-vg3-2-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hvordan skiller Duuns menneskesyn seg fra naturalismen?',
        options: [
          { id: 'a', text: 'Duun mener arv ikke har noen betydning', isCorrect: false },
          { id: 'b', text: 'Duun gir mer rom for moralske valg og kamp mot arven', isCorrect: true },
          { id: 'c', text: 'Duun er mer pessimistisk enn naturalistene', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Mens naturalistene ofte fremstilte mennesket som determinert av arv og miljo, gir Duun mer rom for moralske valg. Hans karakterer kjemper mot sin arv, og valgene deres har reell betydning.',
      },
    },
    {
      id: 'norsk-vg3-2-2-n-section4',
      type: 'text',
      content: `## Sprak og stil

Duuns sprak er noe helt for seg selv. Han skrev pa nynorsk med et sterkt trondersk preg, og skapte en prosa som er bade kraftfull og poetisk.

Setningene kan vaere korte og huggende, som okseslag. Men de kan ogsa flyte ut i lange, rytmiske perioder som mimer naturens egne bevegelser - bolger mot strand, vind over vidder.

Naturen er aldri bare kulisse hos Duun. Den er en aktiv kraft, en speiling av menneskets indre liv. Nar stormen raser, raser det ogsa i menneskesinnet. Nar solen bryter gjennom, er det ogsa et tegn pa hap.

Dialogen er mesterlig. Duun fanger hvordan mennesker faktisk snakker - de halve setningene, det usagte, pausene der alt det viktige ligger. Han forstod at kommunikasjon ofte handler mer om det vi ikke sier enn det vi sier.

Denne stilen krever noe av leseren. Duun forklarer ikke, han viser. Han stoler pa at leseren forstaar - at vi kjenner igjen sannheten i det han skildrer fordi vi har kjent den i oss selv.`,
    },
    {
      id: 'norsk-vg3-2-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvilket sprak skrev Olav Duun pa?',
        options: [
          { id: 'a', text: 'Bokmal', isCorrect: false },
          { id: 'b', text: 'Nynorsk med trondersk preg', isCorrect: true },
          { id: 'c', text: 'Dansk', isCorrect: false },
          { id: 'd', text: 'Dialekt direkte', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Duun skrev pa nynorsk med et sterkt trondersk preg. Dette spraket er blitt staende som et av de mest kraftfulle og poetiske i norsk litteratur.',
      },
    },
    {
      id: 'norsk-vg3-2-2-n-section5',
      type: 'text',
      content: `## Duuns betydning

Olav Duun er en av de storste forfatterne i norsk litteraturhistorie, selv om han kanskje ikke er den mest leste i dag. Hans verk krever noe av leseren - tid, konsentrasjon, villighet til a ga inn i et fremmed univers.

Men belonningen er stor. "Juvikfolke" gir innsikt i menneskenaturen som faa andre verk. Det er en bok om oss alle - om kampen vi alle kjenner mellom det vi vil vaere og det vi frykter vi er.

Duun ble nominert til Nobelprisen flere ganger, men fikk den aldri. Noen mener det var fordi han skrev pa nynorsk, et sprak faa utenfor Skandinavia forsto. Andre peker pa at hans verk er vanskelig a oversette - sa mye ligger i sprakets egne kvaliteter.

Uansett er hans status i norsk litteratur ubestridt. "Juvikfolke" regnes som det storste episke verket i var litteratur, en saga som kan male seg med de beste slektsromanene i verdenslitteraturen.

Nar du leser Duun, blir du konfrontert med grunnleggende sporsmal om menneskelivet. Hva er arvet, og hva er valgt? Finnes det noe ondt i oss alle? Og kan vi overvinne det? Duuns svar er verken lettvint optimistisk eller motlos pessimistisk - det er dypt menneskelig.`,
    },
    {
      id: 'norsk-vg3-2-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Fikk Olav Duun Nobelprisen i litteratur?',
        options: [
          { id: 'a', text: 'Ja, i 1938', isCorrect: false },
          { id: 'b', text: 'Nei, men han ble nominert flere ganger', isCorrect: true },
          { id: 'c', text: 'Ja, sammen med Sigrid Undset', isCorrect: false },
          { id: 'd', text: 'Han ble aldri nominert', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Duun mottok aldri Nobelprisen, men ble nominert flere ganger. Hans verk er likevel anerkjent som noe av det ypperste i norsk litteratur.',
      },
    },
    {
      id: 'norsk-vg3-2-2-n-summary',
      type: 'text',
      content: `## Oppsummering

**Olav Duun (1876-1939)** regnes som en av Norges storste romanforfattere.

**Bakgrunn:**
- Fodt pa Joa i Namdalen
- Arbeidet som laerer
- Debuterte 1907
- Skrev pa nynorsk med trondersk preg

**Hovedverk - Juvikfolke (1918-1923):**
- Seksbinds romansyklus
- Folger en slekt gjennom generasjoner
- Fra arkaiske tider til moderne tid

**Sentrale temaer:**
- Kampen mellom godt og ondt
- Arv og valg
- Mennesket og naturen
- Moralsk ansvar

**Litteraere kjennetegn:**
- Episk slektsskildring
- Kraftfullt, poetisk sprak
- Naturen som speil for sjelen
- Psykologisk dybde

**Betydning:**
- Nominert til Nobelprisen flere ganger
- "Juvikfolke" regnes som det storste episke verket i norsk litteratur
- Viser at mennesket kan kjempe mot sin arv`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.3 NARRATIV: Sigrid Undset - Kristin Lavransdatter
// ============================================================================

export const CHAPTER_NORSK_VG3_2_3_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-2-3-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '2.3',
  title: 'Sigrid Undset - Kristin Lavransdatter',
  subtitle: 'Narrativ versjon',
  description: 'Reis tilbake til norsk middelalder og fólg en kvinnes liv fra ungdommens kjærlighet til alderdommens forsoning.',
  estimatedMinutes: 40,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
    'skrive litteraere analyser og sammenligninger',
  ],
  linkedChapterId: 'norsk-vg3-2-3',
  content: [
    {
      id: 'norsk-vg3-2-3-n-intro',
      type: 'text',
      content: `## En kvinnes liv i middelalderen

Det er tidlig 1300-tall i Norge. Pa garden Jorundgaard i Gudbrandsdalen vokser en jente opp. Hun heter Kristin, og hun er farens oyensten. Lavrans er en god mann, from og rettferdig, og han elsker datteren sin hoyt.

Men Kristin baerer pa en lengsel som faren ikke forstaar. Nar hun moter Erlend Nikulausson - en vakker, karismatisk mann med et darlig rykte - forelsker hun seg hodestups. Mot farens onske, mot alt som er forstandig, velger hun Erlend.

Dette valget vil forme resten av hennes liv.

Gjennom tre bind folger vi Kristin fra ungdommens lidenskapelige kjaerlighet gjennom ekteskapets slitasje til alderdommens anger og forsoning. Det er en reise gjennom et helt kvinneliv - med alle dets gleder og sorger, triumfer og nederlag.

Forfatteren som skapte dette mesteverket het Sigrid Undset. I 1928 fikk hun Nobelprisen i litteratur for sine "mektige skildringer av livet i Norden i middelalderen". Hun var den tredje kvinnen og den tredje nordmannen som mottok prisen.`,
    },
    {
      id: 'norsk-vg3-2-3-n-section1',
      type: 'text',
      content: `## Forfatteren

Sigrid Undset ble fodt 20. mai 1882 i Kalundborg i Danmark, men familien flyttet til Kristiania da hun var to ar. Faren, arkeologen Ingvald Undset, dode da hun var elleve, og hun matte ga ut i arbeid for a forsorge familien.

I ti ar arbeidet hun som kontordame pa et kontor i Kristiania. Det var gra, kjedelige ar - men de ga henne innsikt i vanlige kvinners liv og kamp som hun senere skulle bruke i sitt forfatterskap.

Samtidig utdannet hun seg selv. Hun leste alt hun kom over, besokte museer, studerte middelalderens historie og kultur. Langsomt vokste det frem en dyp kunnskap om perioden som skulle bli hennes litteraere hjemland.

I 1912 giftet hun seg med maleren Anders Castus Svarstad. Ekteskapet var vanskelig - han hadde barn fra for, det var okonomiske problemer, og de to var svart forskjellige. De skilte seg i 1924, samme ar som Undset konverterte til katolisismen.

Konverteringen var et vendepunkt. Den katolske troen ble sentral i hennes liv og forfatterskap. Temaer som synd, anger og tilgivelse - som allerede var tilstede i "Kristin Lavransdatter" - fikk enda storre tyngde.`,
    },
    {
      id: 'norsk-vg3-2-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Nar mottok Sigrid Undset Nobelprisen i litteratur?',
        options: [
          { id: 'a', text: '1920', isCorrect: false },
          { id: 'b', text: '1924', isCorrect: false },
          { id: 'c', text: '1928', isCorrect: true },
          { id: 'd', text: '1932', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Sigrid Undset mottok Nobelprisen i litteratur i 1928 for sine "mektige skildringer av livet i Norden i middelalderen". Hun var den tredje kvinnen og den tredje nordmannen som fikk prisen.',
      },
    },
    {
      id: 'norsk-vg3-2-3-n-section2',
      type: 'text',
      content: `## Trilogien

"Kristin Lavransdatter" bestar av tre bind som folger hovedpersonen gjennom hele hennes liv.

I "Kransen" (1920) moter vi den unge Kristin. Hun er datter av Lavrans pa Jorundgaard, oppvokst i et trygt og kjærlig hjem. Men sa moter hun Erlend - og alt forandrer seg. Hun bryter forlovelsen med en annen mann, gir seg hen til Erlend for de er gift, og baerer pa skyldfølelse nar hun gar til alteret i brudekransen hun egentlig ikke har rett til.

"Husfrue" (1921) skildrer ekteskapet. Kristin er na husfrue pa Husaby, Erlends gard. Hun foder ham mange sonner og sliter med a holde garden gaende mens Erlend drommer om politisk makt. Ekteskapet er fullt av konflikt - hans uansvarlighet, hennes stolthet, gjensidig bebreidelse. Men det er ogsa kjaerlighet der, tross alt.

"Korset" (1922) folger Kristin inn i alderdommen. Etter Erlends dod trekker hun seg tilbake. Gradvis forsones hun med fortiden og med Gud. Trilogien ender med at hun dor mens hun pleier pestsyke i et kloster - en soning og forsoning som fullforer hennes ǎndelige reise.`,
    },
    {
      id: 'norsk-vg3-2-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva heter de tre bindene i "Kristin Lavransdatter"?',
        options: [
          { id: 'a', text: 'Ungdom, Modning, Alderdom', isCorrect: false },
          { id: 'b', text: 'Kransen, Husfrue, Korset', isCorrect: true },
          { id: 'c', text: 'Kjaerlighet, Ekteskap, Dod', isCorrect: false },
          { id: 'd', text: 'Jorundgaard, Husaby, Klosteret', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'De tre bindene heter "Kransen" (1920), "Husfrue" (1921) og "Korset" (1922). Titlene speiler Kristins livsløp fra ungdommens brudekrans gjennom husfruerollen til korsets soning.',
      },
    },
    {
      id: 'norsk-vg3-2-3-n-section3',
      type: 'text',
      content: `## Middelalderen blir levende

Det som gjor "Kristin Lavransdatter" sa enestående, er kombinasjonen av historisk autentisitet og psykologisk dybde.

Undset hadde studert middelalderen i årevis. Hun kjente lovene, skikkene, klærne, maten. Hun visste hvordan en gard ble drevet, hvordan en kirke så ut, hvordan mennesker snakket og tenkte. Denne kunnskapen brukte hun til a skape en verden som foler seg helt virkelig.

Men det er ikke bare det ytre som er overbevisende. Kristin selv er en av de mest komplekse karakterene i verdenslitteraturen. Hun er stolt, lidenskapelig, sta - egenskaper som bade losrever henne og skaper problemer. Hun gjor valg vi kanskje ikke er enige i, men vi forstår dem.

Undsets metode var a ta middelaldermennesket pa alvor. Hun framstilte ikke Kristin som en "moderne" kvinne i historisk kostyme, men heller ikke som en eksotisk fremmed. Kristins indre liv - hennes kjaerlighet, sjalusi, anger, lengsel - er gjenkjennelig fordi det er menneskelig.

Slik viser Undset at mennesket i bunn og grunn er det samme, uavhengig av tid og sted. De ytre omstendighetene forandrer seg, men de grunnleggende folelsene - kjaerlighet, frykt, hap, anger - er tidløse.`,
    },
    {
      id: 'norsk-vg3-2-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva kjennetegner Undsets fremstilling av middelalderen?',
        options: [
          { id: 'a', text: 'Hun romantiserer perioden', isCorrect: false },
          { id: 'b', text: 'Hun kombinerer historisk autentisitet med psykologisk dybde', isCorrect: true },
          { id: 'c', text: 'Hun bruker moderne sprak og tankegang', isCorrect: false },
          { id: 'd', text: 'Hun fokuserer kun pa de store hendelsene', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Undsets storhet ligger i kombinasjonen: grundig historisk research som skaper en autentisk verden, og dyp psykologisk innsikt som gjor karakterene levende og gjenkjennelige.',
      },
    },
    {
      id: 'norsk-vg3-2-3-n-section4',
      type: 'text',
      content: `## Temaer og symbolikk

"Kristin Lavransdatter" er en bok om kjaerlighet - men ikke den eventyrlige typen. Det er kjaerlighet som koster, som krever, som forandrer. Kristins kjaerlighet til Erlend bringer henne både den storste lykke og den dypeste smerte.

Det er ogsa en bok om kvinnelivet. Vi folger Kristin gjennom alle livets faser - som datter, som elskerinne, som hustru, som mor, som enke. Undset skildrer dette livet med en ærlighet som var sjelden i samtiden. Fodsler, sykdom, hverdagens slit - alt er der.

Den katolske troen gjennomsyrer verket. Synd, anger, botsgang, nadė - dette er ikke bare ord, men levde erfaringer for Kristin. Trilogiens struktur folger en åndelig reise fra ungdommens fall gjennom livets prover til alderdommens forsoning.

Selve titlene er symbolske. "Kransen" er brudekransen Kristin baerer selv om hun ikke er uskyldig. "Husfrue" er rollen hun må vokse inn i. "Korset" er både det kristne symbolet og byrden hun baerer gjennom livet - men ogsa veien til frelse.`,
    },
    {
      id: 'norsk-vg3-2-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvilken religion er sentral i "Kristin Lavransdatter"?',
        options: [
          { id: 'a', text: 'Norron tro', isCorrect: false },
          { id: 'b', text: 'Protestantisme', isCorrect: false },
          { id: 'c', text: 'Katolisisme', isCorrect: true },
          { id: 'd', text: 'Religion spiller ingen rolle', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Den katolske troen er sentral i trilogien. Middelalderens Norge var katolsk, og temaer som synd, anger og tilgivelse er vesentlige i Kristins liv. Undset selv konverterte til katolisismen.',
      },
    },
    {
      id: 'norsk-vg3-2-3-n-section5',
      type: 'text',
      content: `## Arven etter Undset

Under andre verdenskrig matte Sigrid Undset flykte. Sonnen Anders falt i kamp mot tyskerne, og hun selv var pa nazistenes liste. Via Sverige og Sovjet reiste hun til USA, der hun virket for Norges sak.

Hun vendte hjem i 1945 og dode i Lillehammer i 1949.

"Kristin Lavransdatter" lever videre som et av verdenslitteraturens store verker. Trilogien er oversatt til over 80 sprak og leses fortsatt av millioner. I 1995 ble den filmatisert.

Undsets storhet ligger i hennes evne til a gjore fortiden levende uten a miste det tidlose. Nar vi leser om Kristin, leser vi om oss selv - om kjaerlighet og tap, valg og konsekvenser, skyld og tilgivelse.

Hun viste ogsa at den historiske romanen kunne vaere stor litteratur. Ikke nostalgi eller eskapisme, men en måte a utforske de evige sporsmålene pa gjennom en annen tids oyner.

For alle som lurer pa hvordan det var a vaere kvinne for 700 ar siden - og for alle som vil forstå noe dypt sant om menneskelivet - er "Kristin Lavransdatter" en uunnvaerlig bok.`,
    },
    {
      id: 'norsk-vg3-2-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Til hvor mange sprak er "Kristin Lavransdatter" oversatt?',
        options: [
          { id: 'a', text: 'Over 20 sprak', isCorrect: false },
          { id: 'b', text: 'Over 40 sprak', isCorrect: false },
          { id: 'c', text: 'Over 80 sprak', isCorrect: true },
          { id: 'd', text: 'Bare de skandinaviske sprakene', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: '"Kristin Lavransdatter" er oversatt til over 80 sprak og regnes som et hovedverk i verdenslitteraturen. Trilogiens universelle temaer gjor den relevant pa tvers av kulturer.',
      },
    },
    {
      id: 'norsk-vg3-2-3-n-summary',
      type: 'text',
      content: `## Oppsummering

**Sigrid Undset (1882-1949)** mottok Nobelprisen i litteratur i 1928.

**Biografi:**
- Fodt i Danmark, oppvokst i Kristiania
- Arbeidet som kontordame i ti ar
- Konverterte til katolisismen 1924
- Flyktet til USA under krigen

**Kristin Lavransdatter (1920-1922):**
- Trilogi: Kransen, Husfrue, Korset
- Folger Kristin gjennom hele livet
- Norsk middelalder (1300-tallet)

**Temaer:**
- Kjaerlighet og lidelse
- Synd og tilgivelse
- Kvinnelivet i middelalderen
- Tid og forandring

**Litteraere kjennetegn:**
- Historisk autentisitet
- Psykologisk dybde
- Katolsk tematikk
- Symbolsk struktur

**Betydning:**
- Oversatt til over 80 sprak
- Regnes som verdenslitteratur
- Viste at historisk roman kunne vaere stor kunst`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.4 NARRATIV: Cora Sandel
// ============================================================================

export const CHAPTER_NORSK_VG3_2_4_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-2-4-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '2.4',
  title: 'Cora Sandel',
  subtitle: 'Narrativ versjon',
  description: 'Fólg Alberte fra en iskald nordnorsk by til Paris - en kvinnes kamp for frihet og en egen stemme.',
  estimatedMinutes: 35,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'utforske realistiske og modernistiske tekster',
    'skrive litteraere analyser og sammenligninger',
  ],
  linkedChapterId: 'norsk-vg3-2-4',
  content: [
    {
      id: 'norsk-vg3-2-4-n-intro',
      type: 'text',
      content: `## I kulden

Det er vinter i en nordnorsk by. Kulden biter gjennom klærne, gjennom huden, inn i margen. En ung jente ved navn Alberte gar gjennom gatene og fryser. Hun fryser alltid.

Kulden er ikke bare i luften. Den er i hjemmet, der moren ser pa henne med kalde øyne. Den er i samfunnet, som holder henne fanget i en rolle hun ikke har valgt. Den er i kroppen hennes, som hun har laert a skamme seg over.

Alberte drommer om noe annet. Om varme. Om frihet. Om a bli noe mer enn det denne byen tillater henne a vaere. Men drommene foler seg umulige, og hun tør knapt erkjenne dem for seg selv.

Dette er begynnelsen pa en av norsk litteraturs storste reiser. Forfatteren som skapte Alberte het egentlig Sara Fabricius, men skrev under pseudonymet Cora Sandel. Hun kjente historien innenfra - for ogsa hun hadde vokst opp i en nordnorsk by, ogsa hun hadde dromt om noe mer.

Alberte-trilogien ble hennes mesterverk: tre boker som folger en kvinnes vei fra ufrihet til selvstendighet, fra taushet til egen stemme.`,
    },
    {
      id: 'norsk-vg3-2-4-n-section1',
      type: 'text',
      content: `## Forfatteren bak pseudonymet

Sara Fabricius ble fodt 20. desember 1880 i Kristiania. Da hun var tolv, flyttet familien til Tromso. Årene i Nord-Norge preget henne dypt - og ble stoff for det forste bindet i trilogien.

Hun dromte om a bli maler, ikke forfatter. I 1906 dro hun til Paris for a studere kunst. Der levde hun et fattig bohemliv, sultet og fros, men opplevde ogsa frihet fra den norske smaborgerligheten.

I Paris motet hun den svenske skulptoren Anders Jonsson. De giftet seg i 1913 og fikk en sonn. Men ekteskapet var vanskelig. Han var dominerende, hun matte sette egne drommer til side. Kunsten ble umulig.

Sa begynte hun a skrive - forst som flukt, sa som kall. I 1926, da hun var 45 ar gammel, debuterte hun med "Alberte og Jakob". Hun brukte pseudonymet Cora Sandel, kanskje for a skape avstand til det selvbiografiske stoffet.

Samme ar ble hun skilt. Resten av livet levde hun av a skrive, bosatt i Sverige. Hun dode i 1974, 93 år gammel.`,
    },
    {
      id: 'norsk-vg3-2-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva var Cora Sandels egentlige navn?',
        options: [
          { id: 'a', text: 'Alberte Fabricius', isCorrect: false },
          { id: 'b', text: 'Sara Fabricius', isCorrect: true },
          { id: 'c', text: 'Cora Fabricius', isCorrect: false },
          { id: 'd', text: 'Sara Sandel', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Cora Sandel var et pseudonym. Forfatteren het egentlig Sara Fabricius (1880-1974).',
      },
    },
    {
      id: 'norsk-vg3-2-4-n-section2',
      type: 'text',
      content: `## Alberte-trilogien

I "Alberte og Jakob" (1926) moter vi Alberte i den nordnorske byen. Hun er ung, hun fryser, hun lengter. Familien sliter okonomisk og kjemper for a opprettholde fasaden. Moren er kald og krevende. Eneste lyspunkt er broren Jakob, som hun har et naert forhold til.

Men ogsa dette forholdet er komplisert. Alberte drommer om noe annet, om kunst, om et liv som er hennes eget. Bindet ender med at hun reiser fra byen - en apen slutt full av hap og frykt.

"Alberte og friheten" (1931) folger henne til Paris. Her lever hun blant kunstnere og bohemer, fattig men fri. Hun opplever kjaerlighet - komplisert, smertefull kjaerlighet. Hun prover a male, men det blir ikke noe av. Langsomt begynner hun a skrive.

I "Bare Alberte" (1939) ser vi henne som voksen kvinne. Hun har et barn, et vanskelig ekteskap, økonomiske bekymringer. Men hun har ogsa noe annet: en stemme. Hun har begynt a skrive for alvor, a forvandle sine erfaringer til kunst.`,
    },
    {
      id: 'norsk-vg3-2-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hvor gammel var Cora Sandel da hun debuterte med "Alberte og Jakob"?',
        options: [
          { id: 'a', text: '25 ar', isCorrect: false },
          { id: 'b', text: '35 ar', isCorrect: false },
          { id: 'c', text: '45 ar', isCorrect: true },
          { id: 'd', text: '55 ar', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Cora Sandel debuterte forst i 1926, da hun var 45 ar gammel. Den sene debuten ga henne livserfaring som preget forfatterskapet.',
      },
    },
    {
      id: 'norsk-vg3-2-4-n-section3',
      type: 'text',
      content: `## Kropp og skam

Sandel skriver om kroppen pa en mate som var uvanlig i hennes tid. Albertes kropp er en kilde til ubehag - kulden som trenger inn, sulten som gnager, menstruasjonen som skammer.

I den nordnorske byen lærer Alberte a skjule kroppen, a skamme seg over den. Jentene ma oppfore seg "passende", ma skjule at de har kropper i det hele tatt. Denne skammen setter seg dypt.

Men kroppen er ogsa der frigjøringen kan begynne. I Paris opplever Alberte at kroppen kan vaere en kilde til glede, ikke bare skam. Kjaerlighetsforholdene - med alle sine komplikasjoner - er ogsa en vei til a gjenerobre sin egen kropp.

Sandel viser hvordan samfunnets kontroll over kvinner ofte virker gjennom kroppen. Ved a fa kvinner til a skamme seg over sine kropper, holder man dem fanget. Albertes reise er ogsa en reise mot a akseptere og eie sin egen kropp.`,
    },
    {
      id: 'norsk-vg3-2-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva symboliserer kulden i "Alberte og Jakob"?',
        options: [
          { id: 'a', text: 'Bare det nordnorske klimaet', isCorrect: false },
          { id: 'b', text: 'Bade fysisk kulde og emosjonell kulde i familie og samfunn', isCorrect: true },
          { id: 'c', text: 'Albertes sykdom', isCorrect: false },
          { id: 'd', text: 'Fattigdom', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Kulden i "Alberte og Jakob" er bade fysisk og symbolsk. Den representerer den emosjonelle kulden i familien, saerlig fra moren, og det kalde, kontrollerende samfunnet som holder Alberte fanget.',
      },
    },
    {
      id: 'norsk-vg3-2-4-n-section4',
      type: 'text',
      content: `## En egen stil

Sandels stil er helt særegen. Den er presis og tilbakeholdt - hun sier aldri mer enn nodvendig. Men under den nøkterne overflaten ligger det enorme dyp.

Hun bruker undertekst mesterlig. Det viktigste sies ofte ikke direkte, men ligger mellom linjene. Et blikk, en pause, en liten gest - leseren ma tolke selv.

Observasjonene er skarpe, nesten ubarmhjertige. Sandel ser det andre overser - de sma tegnene pa makt og avmakt, de sosiale spillenes usynlige regler. Hun avslorer uten a fordømme.

Ironien er der, men aldri ondskapsfull. Sandel har medfølelse med sine karakterer, selv de vanskeligste. Hun forstar hvorfor de er som de er - uten a unnskylde dem.

Denne stilen ble lenge undervurdert. Noen syntes den var for "liten", for uambisiøs. Men i dag forstår vi at dette er en egen type storhet - kunsten a si mye med fa ord, a avsløre verden gjennom skarpt observerte detaljer.`,
    },
    {
      id: 'norsk-vg3-2-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva kjennetegner Cora Sandels stil?',
        options: [
          { id: 'a', text: 'Lange, utbrøderende beskrivelser', isCorrect: false },
          { id: 'b', text: 'Presis, tilbakeholdt med mye undertekst', isCorrect: true },
          { id: 'c', text: 'Poetisk og symbolrik', isCorrect: false },
          { id: 'd', text: 'Humoristisk og lett', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Sandels stil er presis og tilbakeholdt. Hun bruker undertekst - det viktigste sies ofte ikke direkte, men ligger mellom linjene. Leseren ma aktivt tolke det usagte.',
      },
    },
    {
      id: 'norsk-vg3-2-4-n-section5',
      type: 'text',
      content: `## Gjenoppdagelsen

I sin egen tid var Cora Sandel respektert, men ikke regnet blant de aller storste. Kanskje var det fordi hun skrev om kvinneliv i en tid da det ble sett som et "lite" tema. Kanskje var det stilen, som kunne virke beskjeden ved forste blikk.

Men i de siste tiårene har hun fått en helt ny status. Feministisk litteraturkritikk gjenoppdaget henne og viste hvor radikalt hun egentlig skrev. Stilanalyser avslørte dybden i det tilsynelatende enkle.

I dag regnes Alberte-trilogien som et hovedverk i norsk litteratur. Sandels presise skildring av kvinnelivet - med alle dets begrensninger og muligheter - er blitt stadig mer verdsatt.

Historien om Alberte er ogsa historien om mange kvinner. Kampen for a finne sin egen stemme, for å sleppe fri fra andres forventninger, for å bli seg selv. Det er en historie som fortsatt resonerer, fordi den handler om noe grunnleggende menneskelig.

Sandel viste at det "lille" livet - hverdagens kamper, de usynlige undertrykkelsene - er like viktig å skildre som de store historiske hendelsene. Hun ga stemme til dem som ofte ble oversett.`,
    },
    {
      id: 'norsk-vg3-2-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva dromte Cora Sandel opprinnelig om a bli?',
        options: [
          { id: 'a', text: 'Forfatter', isCorrect: false },
          { id: 'b', text: 'Maler', isCorrect: true },
          { id: 'c', text: 'Laerer', isCorrect: false },
          { id: 'd', text: 'Skuespiller', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Cora Sandel dromte opprinnelig om å bli maler. Hun dro til Paris for a studere kunst, men begynte a skrive da malerkarrieren ikke lyktes. Dette speiles i Alberte-trilogien.',
      },
    },
    {
      id: 'norsk-vg3-2-4-n-summary',
      type: 'text',
      content: `## Oppsummering

**Cora Sandel (1880-1974)**, egentlig Sara Fabricius, er gjenoppdaget som en av periodens viktigste forfattere.

**Biografi:**
- Oppvokst i Tromso fra 1892
- Kunstnerstudier i Paris
- Gift med Anders Jönsson, skilt 1926
- Debuterte 45 ar gammel
- Bodde i Sverige fra 1921

**Alberte-trilogien:**
- "Alberte og Jakob" (1926): Ungdom i nordnorsk by
- "Alberte og friheten" (1931): Paris-arene
- "Bare Alberte" (1939): Modning som forfatter

**Temaer:**
- Kvinnens kamp for frihet
- Kropp og skam
- Okonomisk avhengighet
- Kunstnerens vei

**Litteraere kjennetegn:**
- Presis, tilbakeholdt stil
- Undertekst - det usagte
- Skarpe observasjoner
- Ironi med medfølelse

**Betydning:**
- Gjenoppdaget av feministisk kritikk
- Alberte-trilogien er na et hovedverk
- Ga stemme til kvinners erfaringer`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.5 NARRATIV: Politisk engasjert litteratur
// ============================================================================

export const CHAPTER_NORSK_VG3_2_5_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-2-5-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '2.5',
  title: 'Politisk engasjert litteratur',
  subtitle: 'Narrativ versjon',
  description: 'Mellomkrigstiden da forfattere matte velge side - om litteratur som vapen i kampen mot fascismen.',
  estimatedMinutes: 35,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'reflektere over hvordan litteraturen speiler og pavirker samfunnet',
  ],
  linkedChapterId: 'norsk-vg3-2-5',
  content: [
    {
      id: 'norsk-vg3-2-5-n-intro',
      type: 'text',
      content: `## En tid uten noytralitet

Det er 1930-tallet. I Tyskland har nazistene tatt makten. I Italia hersker Mussolini. I Spania raser borgerkrigen. Over hele Europa sprer fascismen seg som en morke sky.

For forfatterne blir det umulig a sta utenfor. "Den som tier, samtykker," sier de. Litteraturen ma ta stilling - den ma bli et vapen i kampen mot barbariet.

Men hva skjer med kunsten nar den blir politisk? Kan en roman som forst og fremst vil overbevise, ogsa vaere god litteratur? Blir karakterene levende mennesker, eller bare talerør for ideologier?

Mellomkrigstiden - årene mellom 1918 og 1940 - var en tid der disse sporsmålene ble tvunget frem med brutal kraft. Forfattere måtte velge. Noen valgte feil, som Knut Hamsun, som støttet nazismen. Andre, som Arnulf Overland og Nordahl Grieg, brukte sine stemmer til å advare.

Dette er historien om en tid da litteraturen ble dradd inn i politikken - og om de vanskelige sporsmålene det reiste.`,
    },
    {
      id: 'norsk-vg3-2-5-n-section1',
      type: 'text',
      content: `## Verden i krise

For a forstå mellomkrigstidens litteratur ma vi forstå krisen den vokste ut av.

Forste verdenskrig hadde etterlatt Europa i ruiner. Millioner var dode, imperier hadde falt, og troen pa fremskrittet var knust. Inn i dette vakuumet strommet nye ideologier.

Den russiske revolusjonen i 1917 hadde vist at sosialismen kunne seire. For mange intellektuelle virket kommunismen som håpet - en vei ut av kapitalismens kriser og krigens galskap.

Men ogsa hoyreardiakle bevegelser vokste. Fascismen i Italia fra 1922, nazismen i Tyskland fra 1933. De lovte orden, nasjonalt fellesskap, gjenreising av tapt storhet.

Den store depresjonen fra 1929 forsterket krisen. Arbeidslosheten eksploderte, fattigdommen spredde seg. De liberale demokratiene virket handlingslammet. Bare de radikale alternativene - til venstre eller hoyre - syntes a ha svar.

I denne situasjonen ble det stadig vanskeligere a vaere noytral. Enten var du for eller mot. Mellomposisjoner ble sett som feighet eller selvbedrag.`,
    },
    {
      id: 'norsk-vg3-2-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvilken økonomisk krise rammet verden i 1929?',
        options: [
          { id: 'a', text: 'Oljekrisen', isCorrect: false },
          { id: 'b', text: 'Den store depresjonen', isCorrect: true },
          { id: 'c', text: 'Boligkrisen', isCorrect: false },
          { id: 'd', text: 'Valutakrisen', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Den store depresjonen (1929) skapte massiv arbeidsledighet og fattigdom. Denne okonomiske krisen styrket bade kommunismen og fascismen som alternativer til det liberale demokratiet.',
      },
    },
    {
      id: 'norsk-vg3-2-5-n-section2',
      type: 'text',
      content: `## Litteraturen tar stilling

Over hele Europa begynte forfattere a skrive politisk. Litteraturen skulle ikke lenger bare underholde eller gi estetisk nytelse - den skulle påvirke, overbevise, forandre.

Arbeiderlitteraturen vokste frem. Forfattere fra arbeiderklassen skrev om sine egne erfaringer - fabrikkenes monotoni, fattigdommens nedverdigelse, klassekampens nodvendighet. I Norge kom stemmer som Rudolf Nilsen, med dikt som "Revolusjonens rosta".

Antifascistisk litteratur ble et eget fenomen. Forfattere som hadde sett nazismens sanne ansikt - forfolgelsen av joder, undertrykkelsen av opposisjonen - folte et ansvar for a advare.

Sosialistisk realisme ble den offisielle kunsten i Sovjetunionen. Her skulle litteraturen tjene revolusjonen, vise arbeidernes heltemot, inspirere til videre kamp. Resultatene var ofte propaganda mer enn kunst.

Eksillitteraturen oppsto da forfattere flyktet fra nazismen. Thomas Mann, Bertolt Brecht og mange andre fortsatte a skrive fra utlandet, ofte med sterkere politisk brodd enn for.`,
    },
    {
      id: 'norsk-vg3-2-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva er arbeiderlitteratur?',
        options: [
          { id: 'a', text: 'Boker om arbeidslivet skrevet av overklassen', isCorrect: false },
          { id: 'b', text: 'Litteratur av og om arbeiderklassen', isCorrect: true },
          { id: 'c', text: 'Tekniske manualer for industrien', isCorrect: false },
          { id: 'd', text: 'Underholdningslitteratur for arbeidere', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Arbeiderlitteratur er litteratur skrevet av forfattere fra arbeiderklassen om arbeiderklassens erfaringer og kamp. Den vokste frem som en egen tradisjon i mellomkrigstiden.',
      },
    },
    {
      id: 'norsk-vg3-2-5-n-section3',
      type: 'text',
      content: `## Norge i mellomkrigstiden

I Norge var ogsa mellomkrigstiden preget av uro. Arbeidsledigheten var hoy, klassemotsetningene skarpe. Arbeiderpartiet vokste og radikaliserte seg - pa 1920-tallet var det til og med medlem av den kommunistiske internasjonalen.

Pa den andre siden av spekteret ble Nasjonal Samling stiftet i 1933, ledet av Vidkun Quisling. Partiet var smatt, men fantes.

Forfatterne tok stilling. Mange sympatiserte med venstresiden - Nordahl Grieg, Arnulf Overland, Rudolf Nilsen. De skrev dikt og drama som advarte mot fascismen og hyllet arbeiderbevegelsen.

Andre, som Knut Hamsun, beveget seg i motsatt retning. Hans beundring for det "sterke" lederskapet, hans forakt for parlamentarismen, forte ham til slutt i armene pa nazismen. Det er en av de store tragediene i norsk litteraturhistorie.

Spaniakrigen (1936-39) ble et samlingspunkt. Da fascistene forsøkte a styrte den spanske republikken, dro frivillige fra hele Europa for a kjempe. Norske forfattere som Nordahl Grieg dekket krigen og skrev om den.`,
    },
    {
      id: 'norsk-vg3-2-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Nar ble Nasjonal Samling stiftet?',
        options: [
          { id: 'a', text: '1923', isCorrect: false },
          { id: 'b', text: '1933', isCorrect: true },
          { id: 'c', text: '1938', isCorrect: false },
          { id: 'd', text: '1940', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Nasjonal Samling ble stiftet i 1933 med Vidkun Quisling som leder. Partiet var inspirert av fascismen og skulle senere samarbeide med den tyske okkupasjonsmakten.',
      },
    },
    {
      id: 'norsk-vg3-2-5-n-section4',
      type: 'text',
      content: `## Tendenskunst - kunst med en agenda

Nar kunsten blir politisk, oppstar det et begrep: tendenskunst. Det er kunst med et klart budskap, et onske om a pavirke leseren i en bestemt retning.

Forsvarerne av tendenskunsten argumenterte slik: All kunst er politisk, enten den vil det eller ikke. A late som om kunsten star over politikken, er i seg selv en politisk posisjon - en som tjener status quo. I en krisetid har kunstneren et ansvar for a ta stilling.

Kritikerne svarte: Nar budskapet kommer forst, lider kunsten. Karakterene blir talsmenn, ikke mennesker. Kompleksiteten forsvinner. Propaganda er ikke kunst, selv om den er skrevet i godt sprak.

Denne debatten er ikke avgjort. Den dukker opp igjen og igjen - hver gang kunsten konfronteres med politiske kriser. Bor forfattere skrive om klimaendringer? Om migrasjon? Om ulikhet?

Mellomkrigstidens erfaring viser bade farene og mulighetene. Noe av den politiske litteraturen fra perioden er glemt i dag - for propagandistisk, for endimensjonal. Annet lever fortsatt, fordi det kombinerte politisk engasjement med kunstnerisk kvalitet.`,
    },
    {
      id: 'norsk-vg3-2-5-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-5-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva er tendenskunst?',
        options: [
          { id: 'a', text: 'Kunst som folger moteretninger', isCorrect: false },
          { id: 'b', text: 'Kunst med et klart politisk budskap', isCorrect: true },
          { id: 'c', text: 'Kunst som er i utvikling', isCorrect: false },
          { id: 'd', text: 'Kunst som tendens til a selge godt', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Tendenskunst er kunst med et bevisst politisk eller ideologisk budskap. Begrepet brukes ofte kritisk, men kan ogsa vaere noytral beskrivelse av engasjert kunst.',
      },
    },
    {
      id: 'norsk-vg3-2-5-n-section5',
      type: 'text',
      content: `## Arven fra mellomkrigstiden

Mellomkrigstiden tvang frem sporsmal som fortsatt er relevante. Kan kunsten være noytral? Bor den vaere det? Hva skjer med den kunstneriske kvaliteten nar budskapet blir viktigst?

Noen av tidens forfattere viste at det er mulig a kombinere politisk engasjement med kunstnerisk kvalitet. Brecht i Tyskland skapte teaterstykker som bade var politiske og nyskapende. Hemingway skrev om Spaniakrigen med bade engasjement og litterær kraft.

Andre advarer mot farene. Sosialistisk realisme viste hvordan kunst kan kveles nar staten bestemmer hva den skal uttrykke. Selv velmenende propaganda har en tendens til a bli flasky og forglemmelig.

Kanske er lardommen denne: Det beste er nar det politiske engasjementet springer ut av dyp menneskelig innsikt, ikke motsatt. Nar forfatteren forst forstår menneskene, og sa oppdager de politiske dimensjonene ved deres liv.

Mellomkrigstidens beste litteratur gjor nettopp dette. Den viser oss mennesker - i all deres kompleksitet - fanget i historiens krefter. Slik blir den bade sant og engasjerende, bade kunst og politikk.`,
    },
    {
      id: 'norsk-vg3-2-5-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-5-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva er hovedkritikken mot tendenskunst?',
        options: [
          { id: 'a', text: 'Den er for vanskelig a forstå', isCorrect: false },
          { id: 'b', text: 'Den kunstneriske kvaliteten kan lide nar budskapet kommer forst', isCorrect: true },
          { id: 'c', text: 'Den selger for darlig', isCorrect: false },
          { id: 'd', text: 'Den er for lite politisk', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Hovedkritikken er at nar det politiske budskapet blir viktigst, kan den kunstneriske kvaliteten lide. Karakterene blir talsmenn, kompleksiteten forsvinner, og verket blir propaganda snarere enn kunst.',
      },
    },
    {
      id: 'norsk-vg3-2-5-n-summary',
      type: 'text',
      content: `## Oppsummering

**Mellomkrigstiden (1918-1940)** var preget av politisk uro og ideologisk kamp.

**Historisk bakgrunn:**
- Ettervirkninger av forste verdenskrig
- Den russiske revolusjonen (1917)
- Fascismens fremvekst i Italia og Tyskland
- Den store depresjonen (1929)
- Spaniakrigen (1936-39)

**Politisk litteratur:**
- Arbeiderlitteratur
- Antifascistisk litteratur
- Sosialistisk realisme
- Eksillitteratur

**I Norge:**
- Skarpe klassemotsetninger
- Nasjonal Samling stiftet 1933
- Forfattere som Øverland og Grieg advarte mot fascismen
- Hamsun gikk motsatt vei

**Tendenskunst:**
- Kunst med politisk budskap
- Debatt om kunst og politikk
- Kan engasjement og kvalitet kombineres?

**Sporsmal som fortsatt er aktuelle:**
- Bor forfattere ta politisk stilling?
- Kan kunst vaere noytral?
- Hva skjer med kunsten nar budskapet blir viktigst?`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.6 NARRATIV: Arnulf Overland
// ============================================================================

export const CHAPTER_NORSK_VG3_2_6_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-2-6-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '2.6',
  title: 'Arnulf Overland',
  subtitle: 'Narrativ versjon',
  description: 'Mót dikteren som advarte mot nazismen og betalte prisen - historien om "Du ma ikke sove".',
  estimatedMinutes: 35,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'reflektere over hvordan litteraturen speiler og pavirker samfunnet',
  ],
  linkedChapterId: 'norsk-vg3-2-6',
  content: [
    {
      id: 'norsk-vg3-2-6-n-intro',
      type: 'text',
      content: `## Stemmen som ikke ville tie

Det er 1936. I Norge lever folk sine liv, bekymret for okonomien, for fremtiden, men ikke for krig. Krigen er langt borte - i Spania, i Etiopia. Ikke her.

Men en mann ser klarere. Han har sett hva som skjer i Tyskland - forfolgelsene, volden, hatet. Han vet at det kommer naermere. Og han nekter a tie.

Arnulf Overland stiger opp pa talerstolen. Ordene han skal si, vil bli husket i generasjoner:

"Du ma ikke sitte trygt i ditt hjem
og si: Det er sørgelig, stakkars dem!
Du ma ikke tale så inderlig vel
den urett som ikke rammer deg selv!"

Dette er ikke bare et dikt. Det er et rop, en advarsel, en befaling. Du ma ikke sove. Du ma ikke late som om det ikke skjer. Du ma ikke tro at du er trygg bare fordi det er andre som rammes forst.

Overland visste hva han risikerte. Og fem ar senere skulle han betale prisen: arrestert av nazistene, sendt til Sachsenhausen. Men stemmen hans kunne de ikke tie.`,
    },
    {
      id: 'norsk-vg3-2-6-n-section1',
      type: 'text',
      content: `## Dikteren

Arnulf Overland ble fodt 27. april 1889 i Kristiansund. Han vokste opp til a bli en av Norges mest betydelige lyrikere - en mester i den tradisjonelle, formbevisste diktekunsten.

Hans tidlige diktning var preget av kjærlighet og melankoli, av det personlige livets drama. Han skrev om tap og lengsel med en presisjon og klangrikdom som fa kunne mate.

Men 1930-tallet forandret ham. Han kunne ikke fortsette a skrive vakre vers om private følelser mens Europa brant. Diktet måtte bli et våpen.

Overland var ateist og sosialist. Han hadde holdt det berømte foredraget "Kristendommen - den tiende landeplage" i 1933, som provoserte mange. Men na samlet han seg om en annen kamp: kampen mot nazismen.

Han så klart hva andre ikke ville se. Mens mange fortsatt håpet pa fred, forsto Overland at Hitler ikke kunne stanses med ord. Og han forsto at likegyldigheten - "stakkars dem, men det angår ikke meg" - var nazismens beste allierte.`,
    },
    {
      id: 'norsk-vg3-2-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Nar ble diktet "Du ma ikke sove" skrevet?',
        options: [
          { id: 'a', text: '1933', isCorrect: false },
          { id: 'b', text: '1936', isCorrect: true },
          { id: 'c', text: '1940', isCorrect: false },
          { id: 'd', text: '1945', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: '"Du ma ikke sove" ble holdt som tale/dikt i 1936, fire ar for Norge ble okkupert. Overland advarte mot det som kom mens mange fortsatt håpet pa fred.',
      },
    },
    {
      id: 'norsk-vg3-2-6-n-section2',
      type: 'text',
      content: `## "Du ma ikke sove"

La oss se naermere pa dette diktet som har blitt et nasjonalt klenodie.

Overland begynner med a beskrive det grusomme: jodene som forfølges, barn som skilles fra foreldre, mennesker som drepes for sin tro eller sin rase. Han tvinger leseren til a se det man helst vil snu seg bort fra.

Sa kommer anklage mot likegyldigheten: "Du ma ikke tåle så inderlig vel / den urett som ikke rammer deg selv!" Her ligger diktets kjerne. Det er ikke nok a synes synd pa ofrene. Du ma handle. Du ma ta stilling.

Overland advarer: Det som skjer i Tyskland na, kan skje her. "Du ma ikke gå til ditt arbeid i dag, / du ma ikke gå til ditt daglige strev, / som om intet var hendt i din naerhet i natt." Hverdagen fortsetter, men verden har forandret seg.

Til slutt det direkte kravet: "Du ma ikke sove!" Gjentatt som et hamrende refreng. Ikke sov. Ikke vend deg bort. Ikke lat som om det ikke skjer.

Diktet er formet med alle den tradisjonelle lyrikkens virkemidler - rim, rytme, gjentakelse - men brukt til a slynge ut en politisk advarsel. Det er bade kunst og appell.`,
    },
    {
      id: 'norsk-vg3-2-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva er hovedbudskapet i "Du ma ikke sove"?',
        options: [
          { id: 'a', text: 'At man bor fa mer søvn', isCorrect: false },
          { id: 'b', text: 'At man ikke ma vaere likegyldig til andres lidelse', isCorrect: true },
          { id: 'c', text: 'At man bor flykte fra Norge', isCorrect: false },
          { id: 'd', text: 'At krig er uunngaelig', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Diktets hovedbudskap er at man ikke ma vaere likegyldig til urett som rammer andre. "Du ma ikke tale sa inderlig vel / den urett som ikke rammer deg selv!" Overland angriper den passive tilskuerrollen.',
      },
    },
    {
      id: 'norsk-vg3-2-6-n-section3',
      type: 'text',
      content: `## Prisen

Nar krigen kom til Norge 9. april 1940, var Overland allerede en merket mann. Nazistene visste hvem han var, hva han hadde sagt.

I 1941 ble han arrestert. Forst satt han pa Grini, sa ble han sendt til Sachsenhausen i Tyskland. Der tilbragte han fire ar under forferdelige forhold - sult, kulde, sykdom, konstant trussel om dod.

Men han overlevde. Og han fortsatte a skrive - i hodet, pa lapper, hvordan han kunne. Diktene fra denne tiden er blant hans sterkeste.

Nar krigen var over, vendte han hjem som en helt. Han hadde gjort det han krevde av andre: Han hadde ikke sovet. Han hadde ikke tidd. Og han hadde betalt prisen.

Overland levde til 1968. Han fortsatte a skrive, fortsatte a mene, fortsatte a provosere. Men det er "Du ma ikke sove" som har gjort ham udødelig - en tekst som fortsatt siteres, fortsatt synges, fortsatt maner til aktsomhet.`,
    },
    {
      id: 'norsk-vg3-2-6-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-6-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hvilken konsentrasjonsleir ble Overland sendt til?',
        options: [
          { id: 'a', text: 'Auschwitz', isCorrect: false },
          { id: 'b', text: 'Dachau', isCorrect: false },
          { id: 'c', text: 'Sachsenhausen', isCorrect: true },
          { id: 'd', text: 'Buchenwald', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Overland ble sendt til Sachsenhausen i Tyskland, der han satt fra 1941 til 1945. Han overlevde og vendte hjem etter krigen.',
      },
    },
    {
      id: 'norsk-vg3-2-6-n-section4',
      type: 'text',
      content: `## Diktets form

Overland var en mester i tradisjonell versekunst. Selv nar han skrev politisk poesi, holdt han fast ved rim og rytme, ved diktets musikalske kvaliteter.

"Du ma ikke sove" er skrevet i bundne vers med enderim. Formen gir diktet kraft - ordene fester seg, rytmen driver fremover, rimene hamrer budskapet inn.

Men Overland bruker ogsa effektfulle brudd. Nar han beskriver grusomhetene, kan spraket bli naesten prosaisk - som om det forferdelige sprenger diktets form. Sa vender han tilbake til rytmen, og kontrasten forsterker virkningen.

Gjentakelsen er et sentralt virkemiddel. "Du ma ikke" - igjen og igjen. Det blir et mantra, en befaling som ikke lar seg ignorere.

Overland viste at politisk poesi ikke trenger a ofre det kunstneriske. Tvert imot: Ved a bruke diktets fulle arsenal av virkemidler, blir budskapet sterkere. Formen baerer innholdet.`,
    },
    {
      id: 'norsk-vg3-2-6-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-6-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva kjennetegner Overlands diktstil?',
        options: [
          { id: 'a', text: 'Fri vers uten rim', isCorrect: false },
          { id: 'b', text: 'Tradisjonell form med rim og rytme', isCorrect: true },
          { id: 'c', text: 'Prosaisk og hverdagslig', isCorrect: false },
          { id: 'd', text: 'Eksperimentell modernisme', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Overland var en mester i tradisjonell versekunst. Han brukte rim, rytme og andre klassiske virkemidler, ogsa nar han skrev politisk poesi.',
      },
    },
    {
      id: 'norsk-vg3-2-6-n-section5',
      type: 'text',
      content: `## Aktualitet

"Du ma ikke sove" er blitt staende som en tidlos tekst. Den siteres fremdeles nar urett skjer og folk vender bort blikket.

Budskapet er like relevant i dag. Nar flyktninger drukner i Middelhavet. Nar minoriteter forfølges. Nar demokratier trues. Overlands ord minner oss om at likegyldighet er et valg - og et farlig et.

Det er lett a tenke at urett som ikke rammer oss selv, ikke er var sak. Det er behagelig a snu seg bort, a fortsette med hverdagen, a si "stakkars dem" og så gå videre. Overland nekter oss den bekvemmeligheten.

Han minner oss ogsa om at forfattere har en stemme - og et ansvar for a bruke den. I en tid med falske nyheter og propaganda er den klare, ærlige stemmen viktigere enn noensinne.

Arnulf Overland ga oss et dikt som er mer enn litteratur. Det er en etisk pafinnelse, et krav om a være til stede i sin egen tid, om a se det man helst ikke vil se. "Du ma ikke sove" - fire ord som rommer et helt moralsk univers.`,
    },
    {
      id: 'norsk-vg3-2-6-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-6-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvorfor er "Du ma ikke sove" fortsatt aktuelt?',
        options: [
          { id: 'a', text: 'Fordi nazismen fortsatt eksisterer', isCorrect: false },
          { id: 'b', text: 'Fordi budskapet om a ikke vaere likegyldig til andres lidelse er tidlost', isCorrect: true },
          { id: 'c', text: 'Fordi diktet er pensum pa skolen', isCorrect: false },
          { id: 'd', text: 'Fordi Overland fortsatt lever', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Diktets budskap om a ikke vaere likegyldig til urett som rammer andre, er tidløst. Det gjelder like mye i dag - overfor flyktningkriser, forfolgelser og trusler mot demokratiet.',
      },
    },
    {
      id: 'norsk-vg3-2-6-n-summary',
      type: 'text',
      content: `## Oppsummering

**Arnulf Overland (1889-1968)** var en av Norges storste lyrikere og en uredd antifascist.

**Biografi:**
- Fodt 27. april 1889 i Kristiansund
- Debuterte som lyriker 1911
- Aktiv antifascist pa 1930-tallet
- Fanget i Sachsenhausen 1941-45
- Dode 25. mars 1968

**"Du ma ikke sove" (1936):**
- Advarsel mot nazismen
- Angrep pa likegyldigheten
- Krav om handling
- Ble en tidlos tekst

**Berømte linjer:**
"Du ma ikke tale så inderlig vel
den urett som ikke rammer deg selv!"

**Litterære kjennetegn:**
- Tradisjonell form med rim og rytme
- Kraftfullt, direkte språk
- Gjentakelse som virkemiddel
- Politisk engasjement

**Betydning:**
- Viste at politisk poesi kan vaere stor kunst
- Betalte personlig pris for sitt engasjement
- Etterlot en tekst som fortsatt maner til aktsomhet`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.7 NARRATIV: Nordahl Grieg
// ============================================================================

export const CHAPTER_NORSK_VG3_2_7_NARRATIV: TextbookChapter = {
  id: 'norsk-vg3-2-7-narrativ',
  courseId: 'norsk-vg3',
  chapterNumber: '2.7',
  title: 'Nordahl Grieg',
  subtitle: 'Narrativ versjon',
  description: 'Historien om dikteren som falt over Berlin - og etterlot seg ord som lever videre.',
  estimatedMinutes: 35,
  competenceGoals: [
    'analysere og tolke romaner, noveller, drama, lyrikk og sakprosa fra 1850 til i dag',
    'reflektere over hvordan litteraturen speiler og pavirker samfunnet',
  ],
  linkedChapterId: 'norsk-vg3-2-7',
  content: [
    {
      id: 'norsk-vg3-2-7-n-intro',
      type: 'text',
      content: `## Dikteren som ikke kom hjem

Det er natt til 3. desember 1943. Et britisk bombefly er pa vei mot Berlin. Om bord sitter en norsk forfatter. Han er der som observatør, for a se krigen med egne oyne, for a skrive om den.

Flyet nar aldri malet. Over Berlin blir det skutt ned av tysk luftvern. Alle om bord omkommer.

Nordahl Grieg var 41 ar gammel. Han etterlot seg dikt som skulle bli sunget av generasjoner, drama som fortsatt spilles, og en legende som bare vokste etter hans dod.

"Til ungdommen" hadde han skrevet noen ar for - et dikt som er blitt Norges uoffisielle nasjonalsang. "Krig er forakt for liv," star det. Men Grieg selv dro altsa i krigen, visste at han risikerte alt, og betalte den høyeste prisen.

Dette er historien om en dikter som levde som han skrev - med brennende engasjement, uten kompromisser, helt til det siste.`,
    },
    {
      id: 'norsk-vg3-2-7-n-section1',
      type: 'text',
      content: `## Den unge idealisten

Nordahl Grieg ble fodt 1. november 1902 i Bergen. Han var nevø av den store komponisten Edvard Grieg - kunstneriske gener lå i familien.

Allerede som ung viste han litterært talent. Han debuterte som lyriker bare 20 ar gammel. Men det var ikke nok a sitte hjemme og skrive vakre vers. Grieg ville ut i verden, ville oppleve, ville forstå.

Han reiste. Til sjøs som lettmatros. Til Kina som journalist. Til Sovjet, der han begeistret seg for eksperimentet med å skape et nytt samfunn. Overalt så han, lærte, skrev.

Grieg var idealist til fingerspissene. Han trodde pa menneskets mulighet til a skape en bedre verden. Han trodde på solidaritet, på kamp mot urettferdighet, på kunstens kraft til å forandre.

Denne idealismen drev ham inn i politikken. Han ble kommunist, eller i alle fall kommunistsympatisør. Han trodde at Sovjet representerte fremtiden - en tro han delte med mange intellektuelle i sin tid, og som senere skulle vise seg naiv.`,
    },
    {
      id: 'norsk-vg3-2-7-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-7-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvem var Nordahl Grieg slektning av?',
        options: [
          { id: 'a', text: 'Henrik Ibsen', isCorrect: false },
          { id: 'b', text: 'Edvard Grieg', isCorrect: true },
          { id: 'c', text: 'Knut Hamsun', isCorrect: false },
          { id: 'd', text: 'Bjørnstjerne Bjørnson', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Nordahl Grieg var nevø av komponisten Edvard Grieg. Kunstneriske evner lå altså i familien.',
      },
    },
    {
      id: 'norsk-vg3-2-7-n-section2',
      type: 'text',
      content: `## Dramaene

Pa 1930-tallet skrev Grieg dramaer som rystet det norske teaterpublikummet.

"Var aere og var makt" (1935) var en direkte anklage mot norske skipsredere som hadde tjent penger på første verdenskrig mens sjøfolk døde. Stykket var kontroversielt - mange følte seg truffet. Men det stilte spørsmål som matte stilles: Hva er viktigst, profitt eller menneskeliv?

"Nederlaget" (1937) handlet om Paris-kommunen i 1871. Men egentlig handlet det om revolusjonens dilemmaer: Kan man bruke vold for å skape en bedre verden? Hva skjer når idealene møter virkeligheten?

Disse stykkene var tendenskunst - de hadde et klart politisk budskap. Men de var ogsa godt teater, med levende karakterer og dramatisk spenning. Grieg mestret håndverket.

Dramaene viste en forfatter som ikke var redd for a ta stilling. I en tid der mange holdt seg unna politikken, kastet Grieg seg inn i den med åpne øyne.`,
    },
    {
      id: 'norsk-vg3-2-7-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-7-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva kritiserer dramaet "Var aere og var makt"?',
        options: [
          { id: 'a', text: 'Den norske kirken', isCorrect: false },
          { id: 'b', text: 'Norske skipsredere som tjente pa krigen', isCorrect: true },
          { id: 'c', text: 'Det norske skolesystemet', isCorrect: false },
          { id: 'd', text: 'Norsk utenrikspolitikk', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: '"Var aere og var makt" (1935) kritiserte norske skipsredere som tjente penger på første verdenskrig mens sjøfolk døde. Stykket var svært kontroversielt i sin tid.',
      },
    },
    {
      id: 'norsk-vg3-2-7-n-section3',
      type: 'text',
      content: `## I krigen

Da krigen kom til Spania i 1936, reiste Grieg dit som journalist. Han så fascismen på nært hold, så hva bomber kunne gjøre mot sivile, så hvordan demokratiet ble knust.

Erfaringene preget ham dypt. Han skrev reportasjer som brakte krigens virkelighet hjem til norske lesere. Han var ikke lenger bare dikter - han var vitne.

Da Norge ble okkupert i april 1940, flyktet Grieg til England. Der arbeidet han for den norske eksilregjeringen, skrev propaganda, holdt radiotaler.

Men det var ikke nok a sitte trygt i London. Grieg ville se krigen selv, ville vaere der det skjedde. Sa han begynte a bli med pa bombetokt som observatør.

Det var farlig - han visste det. Men han følte at han måtte. Kanskje tenkte han at en dikter som skrev om krig, matte oppleve krigen. Kanskje var det idealismen igjen - han kunne ikke be andre ta risiko han ikke selv var villig til a ta.`,
    },
    {
      id: 'norsk-vg3-2-7-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-7-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hvilken krig dekket Grieg som journalist på 1930-tallet?',
        options: [
          { id: 'a', text: 'Forste verdenskrig', isCorrect: false },
          { id: 'b', text: 'Vinterkrigen', isCorrect: false },
          { id: 'c', text: 'Spaniakrigen', isCorrect: true },
          { id: 'd', text: 'Krigen i Kina', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Grieg dekket den spanske borgerkrigen (1936-39) som journalist. Der så han fascismen på nært hold og fikk erfaringer som preget ham dypt.',
      },
    },
    {
      id: 'norsk-vg3-2-7-n-section4',
      type: 'text',
      content: `## "Til ungdommen"

Det diktet Grieg er mest kjent for, skrev han før krigen - men det er blitt stående som et tidløst uttrykk for hap og motstand.

"Til ungdommen" begynner: "Kringsatt av fiender, gå inn i din tid!" Det er et kamprop, en oppfordring til å ikke gi opp selv når alt ser morkt ut.

Men så kommer vendingen: "Krig er forakt for liv. Fred er å skape. Kast dine krefter inn - Loss ikke taket." Det handler ikke om å slåss for slåssingens skyld, men om å skape, bygge, bevare.

Diktet ble tonesatt og er blitt sunget utallige ganger - pa 17. mai, på minnemarkeringer, når folk vil uttrykke hap og samhold. Etter terrorangrepet 22. juli 2011 ble det sunget av tusenvis i gatene.

Det er paradokset i Griegs liv: Han skrev om fred, men gikk selv i krigen. Kanskje mente han at noen ganger ma man kjempe for a skape fred. Kanskje var det motsigelse, kanskje var det konsistens. Vi vet ikke hva han tenkte den natten over Berlin.`,
    },
    {
      id: 'norsk-vg3-2-7-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-7-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvilken åpningslinje har diktet "Til ungdommen"?',
        options: [
          { id: 'a', text: 'Du ma ikke sove', isCorrect: false },
          { id: 'b', text: 'Kringsatt av fiender', isCorrect: true },
          { id: 'c', text: 'Fred er a skape', isCorrect: false },
          { id: 'd', text: 'Krig er forakt for liv', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: '"Til ungdommen" åpner med linjen "Kringsatt av fiender, ga inn i din tid!" - en oppfordring til a engasjere seg selv nar tidene er morke.',
      },
    },
    {
      id: 'norsk-vg3-2-7-n-section5',
      type: 'text',
      content: `## Legenden

Nordahl Griegs tidlige død gjorde ham til en legende. Den unge, vakre dikteren som ofret livet for friheten - det var et bilde som festet seg.

Men legenden kan også skygge for forfatteren. Grieg skrev mye mer enn "Til ungdommen". Hans dramaer er fortsatt leseverdige. Journalistikken hans ga stemme til krigens ofre. Romanene hans utforsket idealisme og skuffelse.

Han var heller ikke uproblematisk. Hans begeistring for Sovjet - i en tid da Stalin terroriserte sitt eget folk - var blindhet. Hans tro på kommunismen var naiv. Men han var ærlig i sin villfarelse, og han betalte for sine idealer med livet.

Det vi husker ham for, er motet. Motet til å ta stilling. Motet til å risikere. Motet til å dra dit andre ikke ville ga.

"Til ungdommen" lever videre fordi det taler til noe tidløst i oss - lengselen etter å skape, ikke odelegge, håpet om at det er mulig a bygge en bedre verden. Grieg ga stemme til det håpet. Og den stemmen tier ikke.`,
    },
    {
      id: 'norsk-vg3-2-7-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg3-2-7-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvordan dode Nordahl Grieg?',
        options: [
          { id: 'a', text: 'I en konsentrasjonsleir', isCorrect: false },
          { id: 'b', text: 'I strid pa bakken', isCorrect: false },
          { id: 'c', text: 'Da flyet han var om bord i ble skutt ned over Berlin', isCorrect: true },
          { id: 'd', text: 'Av sykdom i eksil', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Nordahl Grieg dode da bombeflyet han var med pa som observatør ble skutt ned over Berlin natten til 3. desember 1943. Han var 41 år gammel.',
      },
    },
    {
      id: 'norsk-vg3-2-7-n-summary',
      type: 'text',
      content: `## Oppsummering

**Nordahl Grieg (1902-1943)** var forfatter, journalist og motstandsmann.

**Biografi:**
- Fodt 1. november 1902 i Bergen
- Nevø av Edvard Grieg
- Reiste mye, dekket Spaniakrigen
- Falt over Berlin 2. desember 1943

**Hovedverk:**
- "Var aere og var makt" (1935) - drama
- "Nederlaget" (1937) - drama
- "Til ungdommen" - dikt
- "17. mai 1940" - dikt

**Litteraere kjennetegn:**
- Politisk engasjement
- Idealistisk tone
- Dramatisk nerve
- Lyrisk kraft

**Temaer:**
- Kamp mot fascismen
- Solidaritet
- Idealisme og offer
- Fred og krig

**Betydning:**
- "Til ungdommen" er blitt en uoffisiell nasjonalsang
- Symboliserer idealismen og offeret
- Hans tidlige død styrket legenden`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const NORSK_VG3_NARRATIV_DEL4_CHAPTERS = [
  CHAPTER_NORSK_VG3_2_1_NARRATIV,
  CHAPTER_NORSK_VG3_2_2_NARRATIV,
  CHAPTER_NORSK_VG3_2_3_NARRATIV,
  CHAPTER_NORSK_VG3_2_4_NARRATIV,
  CHAPTER_NORSK_VG3_2_5_NARRATIV,
  CHAPTER_NORSK_VG3_2_6_NARRATIV,
  CHAPTER_NORSK_VG3_2_7_NARRATIV,
];
