/**
 * Tekstbok innhold for Historie - NARRATIV VERSJON DEL 16
 * Kapittel 17: Moderne tid (17.1 - 17.5)
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * å lese og lytte til, med quiz-spørsmål for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 17.1 NARRATIV: Globalisering og teknologi
// ============================================================================

export const CHAPTER_HISTORIE_17_1_NARRATIV: TextbookChapter = {
  id: 'historie-17-1-narrativ',
  courseId: 'historie',
  chapterNumber: '17.1',
  title: 'Globalisering og teknologi',
  subtitle: 'Narrativ versjon',
  description:
    'En fortelling om hvordan verden ble mindre og mer sammenkoblet gjennom digital revolusjon og globalisering.',
  estimatedMinutes: 50,
  competenceGoals: ['teknologiske omveltninger fra industriell revolusjon'],
  linkedChapterId: 'historie-17-1',
  content: [
    {
      id: 'historie-17-1-n-intro',
      type: 'text',
      content: `## Verden i lomma

Tenk deg at du våkner en morgen og tar opp telefonen din. Du sjekker værmelding, scroller gjennom nyheter fra hele verden, sender en melding til en venn i et annet land, og bestiller kanskje en bok som ble skrevet i USA, trykket i Kina, og som vil bli levert til døren din i løpet av noen dager. Alt dette før du har stått opp av sengen.

For bare 30 år siden ville dette virket som science fiction. Din besteforelder som var ung på 1970-tallet, hadde kanskje én telefon i huset -- med ledning. Internasjonale telefonsamtaler var dyre, og å få tak i informasjon krevde et besøk på biblioteket. Verden var større da. Avstander betydde noe.

Det som har skjedd siden den gang kalles **globalisering** -- prosessen der verden blir stadig tettere sammenkoblet økonomisk, kulturelt og politisk. Og den viktigste drivkraften bak denne utviklingen er teknologi. La oss utforske hvordan digitaliseringen har forvandlet samfunnet vårt på måter vi knapt tenker over.`,
    },
    {
      id: 'historie-17-1-n-section1',
      type: 'text',
      content: `## Den digitale revolusjonen

Det hele begynte med internett. På 1990-tallet ble World Wide Web tilgjengelig for vanlige folk, og plutselig kunne hvem som helst med en datamaskin og telefonlinje koble seg på et globalt nettverk av informasjon. Det var revolusjonerende -- men bare begynnelsen.

På 2000-tallet kom bredbånd, som gjorde internett raskere og mer tilgjengelig. Sosiale medier som Facebook og YouTube forandret måten vi kommuniserer og deler informasjon. Og så kom smarttelefonen. Plutselig hadde vi en kraftigere datamaskin enn det som sendte mennesker til månen -- i lomma, tilgjengelig hele tiden.

**Konsekvensene har vært enorme:**

**Kommunikasjon:** Du kan nå hvem som helst, hvor som helst, når som helst. Videosamtaler med bestemor på andre siden av jordkloden er gratis. Meldinger sendes på sekunder.

**Informasjon:** All verdens kunnskap er bare noen tastetrykk unna. Det du lurer på, kan du finne ut umiddelbart. Før måtte du oppsøke en ekspert eller et bibliotek.

**Handel:** Du kan bestille varer fra fabrikker i Kina og få dem levert hjem. Småbedrifter kan selge til kunder over hele verden.

**Arbeid:** Mange kan jobbe fra hvor som helst. Pandemien viste at hjemmekontor fungerer for millioner av mennesker.

**Underholdning:** Du velger selv hva du vil se, når du vil se det. Strømmetjenester har erstattet TV-programmene som alle så samtidig.

Alt dette er så hverdagslig for oss at vi glemmer hvor nytt og revolusjonerende det er. Du lever midt i en av de største teknologiske omveltningene i menneskehetens historie.`,
    },
    {
      id: 'historie-17-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-17-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på den digitale revolusjonen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-17-1-n-quiz1-q0',
            task: 'Hva menes med globalisering?',
            options: [
              { id: 'a', text: 'At verdenshandelen har blitt regulert gjennom internasjonale frihandelsavtaler', isCorrect: false },
              { id: 'b', text: 'Prosessen der verden blir tettere sammenkoblet økonomisk, kulturelt og politisk', isCorrect: true },
              { id: 'c', text: 'At nasjonal suverenitet har blitt overført til overnasjonale organisasjoner som FN og EU', isCorrect: false },
              { id: 'd', text: 'At vestlig kultur og verdier har spredt seg til alle verdens land', isCorrect: false },
            ],
            solution: 'Globalisering er prosessen der verden blir stadig tettere sammenkoblet på tvers av landegrenser -- økonomisk, kulturelt og politisk.',
          },
          {
            id: 'historie-17-1-n-quiz1-q1',
            task: 'Hva var den viktigste teknologiske drivkraften bak globaliseringen fra 1990-tallet?',
            options: [
              { id: 'a', text: 'Satellitt-TV og global nyhetsdekning via kanaler som CNN', isCorrect: false },
              { id: 'b', text: 'Mobiltelefoni og utbygging av trådløse nettverk', isCorrect: false },
              { id: 'c', text: 'Internett og digital teknologi', isCorrect: true },
              { id: 'd', text: 'Containerfrakt og moderne logistikksystemer', isCorrect: false },
            ],
            solution: 'Internett og digital teknologi var den viktigste drivkraften bak den moderne globaliseringen. Da World Wide Web ble tilgjengelig for vanlige folk på 1990-tallet, startet en revolusjon som forandret kommunikasjon, handel og informasjon fundamentalt.',
          },
          {
            id: 'historie-17-1-n-quiz1-q2',
            task: 'Hvilket av disse er IKKE en konsekvens av den digitale revolusjonen nevnt i teksten?',
            options: [
              { id: 'a', text: 'At mange kan jobbe fra hvor som helst', isCorrect: false },
              { id: 'b', text: 'At alle verdens kriger har opphørt', isCorrect: true },
              { id: 'c', text: 'At strømmetjenester har erstattet tradisjonell TV', isCorrect: false },
              { id: 'd', text: 'At informasjon er tilgjengelig umiddelbart for alle med internett', isCorrect: false },
            ],
            solution: 'Den digitale revolusjonen har forandret kommunikasjon, handel, arbeid og underholdning. Men den har ikke ført til at kriger har opphørt -- tvert imot har digital teknologi også skapt nye utfordringer og konflikter.',
          },
        ],
      },
    },
    {
      id: 'historie-17-1-n-section2',
      type: 'text',
      content: `## Plattformøkonomien: Da teknologigigantene tok over

I denne nye verdenen har noen få selskaper fått enorm makt. Google kontrollerer hvordan vi søker etter informasjon. Facebook (nå Meta) kontrollerer hvordan milliarder av mennesker kommuniserer. Amazon dominerer netthandel. Apple og Google bestemmer hvilke apper vi kan laste ned.

Disse selskapene opererer som **plattformer** -- de eier ikke varene eller innholdet selv, men de kobler sammen de som har noe å tilby med de som etterspør det. Uber eier ingen biler, men kobler sjåfører med passasjerer. Airbnb eier ingen leiligheter, men kobler utleiere med gjester.

Det interessante med plattformer er noe som kalles **nettverkseffekter**: Jo flere som bruker plattformen, desto mer verdifull blir den. Alle bruker Facebook fordi alle andre er der. Alle selger på Amazon fordi kundene er der. Dette skaper en "vinneren tar alt"-dynamikk der noen få giganter dominerer.

Men makten disse selskapene har samlet, reiser store spørsmål. De vet mer om oss enn noen regjering noen gang har visst. De bestemmer hva slags informasjon vi ser og hvem vi kobles med. De betaler ofte minimal skatt ved å registrere seg i skatteparadiser. Og de er vanskelige å regulere fordi de opererer på tvers av landegrenser.

Vi er altså i en situasjon der noen av verdens mektigste institusjoner ikke er demokratisk valgte regjeringer, men private selskaper med hovedkontorer i California.`,
    },
    {
      id: 'historie-17-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-17-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på plattformøkonomien:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-17-1-n-quiz2-q0',
            task: 'Hva kjennetegner plattformøkonomien?',
            options: [
              { id: 'a', text: 'At teknologiselskaper vertikalt integrerer hele produksjonskjeden fra råvare til sluttbruker', isCorrect: false },
              { id: 'b', text: 'At digitale plattformer kobler sammen tilbydere og etterspørrere, og nettverkseffekter skaper dominerende aktører', isCorrect: true },
              { id: 'c', text: 'At tradisjonelle bedrifter digitaliserer sine eksisterende tjenester og selger dem på nett', isCorrect: false },
              { id: 'd', text: 'At delingsøkonomien lar privatpersoner konkurrere med etablerte bedrifter gjennom lavere priser', isCorrect: false },
            ],
            solution: 'Plattformøkonomien kjennetegnes av at digitale plattformer fungerer som mellommenn. Nettverkseffekter skaper ofte dominerende monopollignende aktører.',
          },
          {
            id: 'historie-17-1-n-quiz2-q1',
            task: 'Hva er nettverkseffekter?',
            options: [
              { id: 'a', text: 'At plattformene kan skalere opp tjenestene sine uten økte kostnader', isCorrect: false },
              { id: 'b', text: 'At plattformen blir mer verdifull jo flere som bruker den', isCorrect: true },
              { id: 'c', text: 'At brukerne selv skaper innholdet som gjør plattformen attraktiv', isCorrect: false },
              { id: 'd', text: 'At konkurransen mellom plattformer holder prisene nede for forbrukerne', isCorrect: false },
            ],
            solution: 'Nettverkseffekter betyr at en plattform blir mer verdifull jo flere som bruker den. Alle bruker Facebook fordi alle andre er der. Alle selger på Amazon fordi kundene er der. Dette skaper en "vinneren tar alt"-dynamikk.',
          },
          {
            id: 'historie-17-1-n-quiz2-q2',
            task: 'Hva er et sentralt problem med teknologigigantenes makt?',
            options: [
              { id: 'a', text: 'At de utkonkurrerer lokale bedrifter gjennom aggressiv prisdumping', isCorrect: false },
              { id: 'b', text: 'At de skaper teknologisk avhengighet og gjør samfunnet sårbart for systemsvikt', isCorrect: false },
              { id: 'c', text: 'At de vet mer om oss enn noen regjering og er vanskelige å regulere', isCorrect: true },
              { id: 'd', text: 'At de kontrollerer infrastrukturen som hele den digitale økonomien er avhengig av', isCorrect: false },
            ],
            solution: 'Teknologigigantene vet mer om oss enn noen regjering noen gang har visst. De bestemmer hva slags informasjon vi ser, betaler ofte minimal skatt, og er vanskelige å regulere fordi de opererer på tvers av landegrenser.',
          },
        ],
      },
    },
    {
      id: 'historie-17-1-n-section3',
      type: 'text',
      content: `## Globaliseringens vinnere og tapere

Globaliseringen har skapt enorm velstand. Siden 1990 har hundrevis av millioner mennesker i Kina, India og andre utviklingsland blitt løftet ut av ekstrem fattigdom. Forbrukere over hele verden har fått tilgang til billigere varer -- klær, elektronikk, mat fra hele verden. Multinasjonale selskaper har fått tilgang til globale markeder.

Men gevinstene har ikke vært jevnt fordelt. La oss se på noen av taperne:

**Industriarbeidere i Vesten** har sett jobbene sine forsvinne til lavkostland. Fabrikker som en gang ga stabil middelklasseinntekt, har flyttet til Kina eller Bangladesh der arbeidskraften er billigere. Hele lokalsamfunn i det amerikanske rustbeltet eller britiske industribyer har blitt uthulet.

**Småbønder i utviklingsland** har ofte hatt vanskeligheter med å konkurrere med subsidierte storbønder fra rike land.

**Miljøet** har betalt en høy pris. Økt produksjon, transport og forbruk belaster planeten. Varer fraktes rundt jordkloden. Forbruket har eksplodert.

Disse skjevhetene har skapt politiske reaksjoner. Brexit i Storbritannia, Donald Trumps "America First", populistiske bevegelser over hele Europa -- mye av dette kan forstås som reaksjoner fra folk som føler seg som globaliseringens tapere, og som er sinte på eliter som har tjent godt på utviklingen.

Antiglobaliseringsbevegelser krever rettferdig handel, beskyttelse av arbeidere, og at multinasjonale selskaper skal betale skatt der de faktisk opererer.`,
    },
    {
      id: 'historie-17-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-17-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på globaliseringens vinnere og tapere:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-17-1-n-quiz3-q0',
            task: 'Hvem har vært blant globaliseringens tapere?',
            options: [
              { id: 'a', text: 'Den nye middelklassen i Kina og India som fikk bedre levekår', isCorrect: false },
              { id: 'b', text: 'Teknologiarbeidere i Silicon Valley som drev innovasjonen fremover', isCorrect: false },
              { id: 'c', text: 'Industriarbeidere i Vesten som har mistet jobber til lavkostland', isCorrect: true },
              { id: 'd', text: 'Eksportbedrifter i utviklingsland som fikk tilgang til vestlige markeder', isCorrect: false },
            ],
            solution: 'Industriarbeidere i vestlige land har vært blant globaliseringens tapere. Fabrikker har flyttet til land med lavere lønninger, og hele lokalsamfunn har mistet sitt økonomiske grunnlag.',
          },
          {
            id: 'historie-17-1-n-quiz3-q1',
            task: 'Hvilke politiske bevegelser har vokst frem som reaksjon på globaliseringens skjevheter?',
            options: [
              { id: 'a', text: 'Sosialdemokratiske reformbevegelser for sterkere velferdsstat', isCorrect: false },
              { id: 'b', text: 'Populistiske bevegelser som Brexit og "America First"', isCorrect: true },
              { id: 'c', text: 'Antiglobaliseringsbevegelser med krav om å melde seg ut av internasjonale handelsavtaler', isCorrect: false },
              { id: 'd', text: 'Fagforeningsbevegelser med krav om høyere tollbarrierer og importrestriksjoner', isCorrect: false },
            ],
            solution: 'Brexit i Storbritannia, Trumps "America First" og populistiske bevegelser over hele Europa kan forstås som reaksjoner fra folk som føler seg som globaliseringens tapere og er sinte på eliter som har tjent godt på utviklingen.',
          },
          {
            id: 'historie-17-1-n-quiz3-q2',
            task: 'Hva har vært en viktig positiv effekt av globaliseringen i utviklingsland?',
            options: [
              { id: 'a', text: 'At ulikheten mellom rike og fattige land har blitt helt utjevnet', isCorrect: false },
              { id: 'b', text: 'At hundrevis av millioner mennesker har blitt løftet ut av ekstrem fattigdom', isCorrect: true },
              { id: 'c', text: 'At utviklingsland har fått bedre tilgang til utdanning og helsevesen gjennom bistandsmidler', isCorrect: false },
              { id: 'd', text: 'At teknologioverføring har gjort utviklingsland selvforsynte med industrielle varer', isCorrect: false },
            ],
            solution: 'Siden 1990 har hundrevis av millioner mennesker i Kina, India og andre utviklingsland blitt løftet ut av ekstrem fattigdom. Dette er en av globaliseringens viktigste positive effekter, men gevinstene har vært ujevnt fordelt.',
          },
        ],
      },
    },
    {
      id: 'historie-17-1-n-section4',
      type: 'text',
      content: `## Informasjonssamfunnets skyggesider

Med all denne teknologien og sammenkoblingen følger også mørke sider som vi først nå begynner å forstå fullt ut.

**Desinformasjon og falske nyheter** spres like lett som sannhet på internett. Algoritmer belønner innhold som skaper sterke følelser -- og sinne og frykt er sterkere følelser enn nøktern informasjon. Valgmanipulasjon, konspirasjonsteorier og hatefullt innhold florerer.

**Personvernet er under press.** Hvert klikk, hver søk, hvert kjøp registreres. Selskapene vet mer om deg enn du vet selv. Denne dataen brukes til å manipulere deg -- til å kjøpe ting, til å klikke på annonser, kanskje til og med til å påvirke hva du stemmer.

**Ekkokamre og polarisering** oppstår når algoritmene bare viser deg innhold du allerede er enig i. Du lever i din egen informasjonsboble, og de som mener noe annet lever i sin. Dialog og kompromiss blir vanskeligere.

**Mental helse** påvirkes av sosial sammenligning, avhengighet, nettmobbing og konstant tilgjengelighet. Spesielt unge ser ut til å slite.

Og under alt dette ligger en grunnleggende **sårbarhet**. Pandemien viste hvor avhengige vi er av globale forsyningskjeder -- da fabrikkene i Kina stengte, manglet vi alt fra munnbind til datakomponenter. Cyberangrep kan lamme kritisk infrastruktur. Vi har bygget et system av enorm kompleksitet, og komplekse systemer kan kollapse.`,
    },
    {
      id: 'historie-17-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-17-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på informasjonssamfunnets skyggesider:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-17-1-n-quiz4-q0',
            task: 'Hva er et ekkokammer i sammenheng med sosiale medier?',
            options: [
              { id: 'a', text: 'Når sosiale medier forsterker populære meninger slik at de dominerer den offentlige debatten', isCorrect: false },
              { id: 'b', text: 'Når algoritmer viser deg innhold du allerede er enig i, så du lever i din egen informasjonsboble', isCorrect: true },
              { id: 'c', text: 'Når brukere aktivt oppsøker nyhetskilder som bekrefter deres eksisterende holdninger', isCorrect: false },
              { id: 'd', text: 'Når desinformasjon spres viralt fordi den deles ukritisk mellom likesinnede grupper', isCorrect: false },
            ],
            solution: 'Ekkokamre oppstår når algoritmene bare viser deg innhold du allerede er enig i. Du lever i din egen informasjonsboble, og dialog med andre synspunkter blir vanskeligere.',
          },
          {
            id: 'historie-17-1-n-quiz4-q1',
            task: 'Hvorfor spres desinformasjon lett på internett?',
            options: [
              { id: 'a', text: 'Fordi sosiale medier mangler redaktøransvar og faktasjekk slik tradisjonelle medier har', isCorrect: false },
              { id: 'b', text: 'Fordi algoritmene belønner innhold som skaper sterke følelser som sinne og frykt', isCorrect: true },
              { id: 'c', text: 'Fordi hvem som helst kan publisere innhold uten journalistisk utdanning eller kvalitetskontroll', isCorrect: false },
              { id: 'd', text: 'Fordi utenlandske aktører systematisk bruker sosiale medier til å undergrave tilliten til demokratiske institusjoner', isCorrect: false },
            ],
            solution: 'Algoritmer belønner innhold som skaper sterke følelser -- og sinne og frykt er sterkere følelser enn nøktern informasjon. Dermed spres falske nyheter og konspirasjonsteorier lettere enn balansert informasjon.',
          },
          {
            id: 'historie-17-1-n-quiz4-q2',
            task: 'Hva viste pandemien om vår sårbarhet i det globale systemet?',
            options: [
              { id: 'a', text: 'At nasjonal produksjon og beredskapslagre er tilstrekkelig til å håndtere globale kriser', isCorrect: false },
              { id: 'b', text: 'At digitale løsninger som hjemmekontor og netthandel kan kompensere for fysiske forstyrrelser', isCorrect: false },
              { id: 'c', text: 'At internasjonalt samarbeid fungerer effektivt når alle land står overfor den samme trusselen', isCorrect: false },
              { id: 'd', text: 'At vi er svært avhengige av globale forsyningskjeder -- da fabrikkene stengte manglet vi alt', isCorrect: true },
            ],
            solution: 'Pandemien viste hvor avhengige vi er av globale forsyningskjeder. Da fabrikkene i Kina stengte, manglet vi alt fra munnbind til datakomponenter. Vi har bygget et system av enorm kompleksitet som er sårbart.',
          },
        ],
      },
    },
    {
      id: 'historie-17-1-n-section5',
      type: 'text',
      content: `## Kan globaliseringen styres annerledes?

Globaliseringen kan ikke skrus tilbake. Verden er for sammenvevd, og fordelene for store. Men måten den styres på, kan endres.

Noen mener markedet bør reguleres mer. Internasjonale skattereformer skal hindre at selskaper slipper unna ved å flytte overskudd til skatteparadiser. Tech-gigantene må møte sterkere konkurranseregulering. Arbeidere trenger beskyttelse mot de verste utslagene av global konkurranse.

Andre mener vi trenger kortere verdikjeder. Pandemien viste at det er risikabelt å være helt avhengig av fabrikker på andre siden av verden. "Reshoring" -- å flytte produksjon tilbake -- er blitt et politisk tema.

Men kanskje viktigst: Vi trenger demokratisk kontroll. De viktigste beslutningene som påvirker livene våre, bør ikke tas av algoritmer eller selskaper i Silicon Valley. De bør tas av demokratisk valgte institusjoner.

Full de-globalisering er verken mulig eller ønskelig. Men en globalisering som tjener alle -- ikke bare de som allerede har makt -- er mulig hvis vi velger det.`,
    },
    {
      id: 'historie-17-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-17-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på styring av globaliseringen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-17-1-n-quiz5-q0',
            task: 'Hva er et viktig argument for å styre globaliseringen annerledes?',
            options: [
              { id: 'a', text: 'At frihandelsavtaler bør erstattes med bilaterale avtaler mellom enkeltland', isCorrect: false },
              { id: 'b', text: 'At multinasjonale selskaper bør nasjonaliseres for å sikre demokratisk kontroll', isCorrect: false },
              { id: 'c', text: 'At gevinstene har vært ujevnt fordelt og taperne trenger beskyttelse', isCorrect: true },
              { id: 'd', text: 'At utviklingsland trenger høyere tollmurer for å beskytte sine voksende industrier', isCorrect: false },
            ],
            solution: 'Et sentralt argument er at globaliseringens gevinster har vært ujevnt fordelt. En bedre styrt globalisering kan fordele gevinstene jevnere og beskytte taperne.',
          },
          {
            id: 'historie-17-1-n-quiz5-q1',
            task: 'Hva betyr "reshoring" i globaliseringsdebatten?',
            options: [
              { id: 'a', text: 'Å diversifisere forsyningskjedene ved å spre produksjonen til flere ulike land', isCorrect: false },
              { id: 'b', text: 'Å flytte produksjon tilbake til eget land for å redusere avhengighet', isCorrect: true },
              { id: 'c', text: 'Å flytte produksjonen fra Kina til andre lavkostland som Vietnam eller India', isCorrect: false },
              { id: 'd', text: 'Å automatisere produksjonen slik at arbeidskostnader ikke lenger er avgjørende', isCorrect: false },
            ],
            solution: 'Reshoring betyr å flytte produksjon tilbake til eget land. Pandemien viste at det er risikabelt å være helt avhengig av fabrikker på andre siden av verden, og reshoring har blitt et politisk tema.',
          },
        ],
      },
    },
    {
      id: 'historie-17-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Globaliseringen og den digitale revolusjonen har forvandlet verden på få tiår. Vi lever nå i et tett sammenvevd nettverk der informasjon, varer, kapital og mennesker beveger seg raskere enn noen gang.

**Nøkkelbegreper du nå kjenner:**
- **Globalisering**: Prosessen der verden kobles tettere sammen økonomisk, kulturelt og politisk
- **Plattformøkonomi**: Digitale plattformer som kobler tilbydere og etterspørrere, med sterke nettverkseffekter
- **Ekkokamre**: Informasjonsbobler der du bare eksponeres for synspunkter du allerede deler

**Det viktigste du tar med deg:**
Globaliseringen har skapt enorme muligheter og løftet hundrevis av millioner ut av fattigdom. Men gevinstene har vært ujevnt fordelt, og teknologien har skapt nye utfordringer vi bare begynner å forstå. Hvordan vi styrer globaliseringen videre, er et av vår tids viktigste politiske spørsmål.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 17.2 NARRATIV: Migrasjon i moderne tid
// ============================================================================

export const CHAPTER_HISTORIE_17_2_NARRATIV: TextbookChapter = {
  id: 'historie-17-2-narrativ',
  courseId: 'historie',
  chapterNumber: '17.2',
  title: 'Migrasjon i moderne tid',
  subtitle: 'Narrativ versjon',
  description:
    'En fortelling om hvorfor mennesker flytter, og utfordringene det skaper for både migranter og samfunn.',
  estimatedMinutes: 55,
  competenceGoals: ['migrasjon og kulturmøter fra ulike perspektiver'],
  linkedChapterId: 'historie-17-2',
  content: [
    {
      id: 'historie-17-2-n-intro',
      type: 'text',
      content: `## Mennesker på vandring

Forestill deg at du må forlate hjemmet ditt. Kanskje bomber faller over byen din. Kanskje klimaendringer har ødelagt avlingene og det ikke lenger er mulig å leve der du vokste opp. Kanskje du bare drømmer om en bedre fremtid for barna dine, et sted med jobb og muligheter.

Millioner av mennesker lever med slike valg. Noen pakker det de kan bære og legger ut på farlige reiser over hav og ørken. Andre ankommer med fly og visum, klare til å starte et nytt liv. Atter andre sitter fast, uten mulighet til å dra noe sted.

**Migrasjon** -- at mennesker flytter fra ett sted til et annet -- har alltid vært en del av menneskehetens historie. Våre forfedre vandret ut av Afrika for titusener av år siden. Vikingtiden, kolonialismen, den store utvandringen til Amerika -- historien er full av folkevandringer.

Men i vår tid har globaliseringen ført til at flere mennesker enn noen gang krysser landegrenser. Noen er flyktninger som ikke har noe valg. Andre søker arbeid og bedre liv. La oss se nærmere på dette fenomenet som former vår verden.`,
    },
    {
      id: 'historie-17-2-n-section1',
      type: 'text',
      content: `## Hvorfor folk migrerer

Historikere og samfunnsforskere snakker ofte om **push-faktorer** og **pull-faktorer** når de forklarer migrasjon.

**Push-faktorer** er det som driver folk bort fra hjemstedet:
- **Krig og konflikt**: Syria, Afghanistan, Ukraina -- millioner har flyktet fra bomber og vold
- **Forfølgelse**: Politisk undertrykkelse, religiøs forfølgelse, forfølgelse av minoriteter
- **Fattigdom**: Når det ikke finnes arbeid eller muligheter hjemme
- **Klimaendringer**: Tørke, flom og stigende hav gjør områder ubeboelige
- **Naturkatastrofer**: Jordskjelv, vulkanutbrudd, orkaner

**Pull-faktorer** er det som trekker folk mot et nytt sted:
- **Fred og sikkerhet**: Stabile samfunn der du kan leve uten frykt
- **Arbeidsmuligheter**: Økonomier som trenger arbeidskraft
- **Velferdsordninger**: Tilgang til helse, utdanning, sosial trygghet
- **Familie og nettverk**: Slektninger eller venner som allerede har migrert
- **Utdanning**: Muligheten til å studere og bygge en karriere

I virkeligheten kombineres ofte mange faktorer. En familie fra Afghanistan kan ha flyktet fra Taliban (push), men valgte Norge fordi de hadde slektninger her (pull), landet er trygt (pull), og det finnes velferdsordninger (pull).`,
    },
    {
      id: 'historie-17-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-17-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på push- og pull-faktorer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-17-2-n-quiz1-q0',
            task: 'Hva er forskjellen mellom en flyktning og en økonomisk migrant?',
            options: [
              { id: 'a', text: 'Flyktninger har midlertidig oppholdstillatelse, mens økonomiske migranter får permanent opphold', isCorrect: false },
              { id: 'b', text: 'Flyktninger har rett til beskyttelse fordi de flykter fra forfølgelse, økonomiske migranter flytter primært for bedre levekår', isCorrect: true },
              { id: 'c', text: 'Flyktninger er dekket av Genèvekonvensjonene, mens økonomiske migranter er dekket av ILO-konvensjoner', isCorrect: false },
              { id: 'd', text: 'Flyktninger krysser grenser ufrivillig, mens økonomiske migranter alltid har gyldige innreisetillatelser', isCorrect: false },
            ],
            solution: 'Flyktninger flykter fra forfølgelse og har rett til beskyttelse ifølge FNs flyktningkonvensjon. Økonomiske migranter flytter primært for bedre levekår og har ikke samme juridiske krav.',
          },
          {
            id: 'historie-17-2-n-quiz1-q1',
            task: 'Hva er en push-faktor i migrasjonssammenheng?',
            options: [
              { id: 'a', text: 'En faktor som trekker folk mot et nytt land, som jobbmuligheter og velferd', isCorrect: false },
              { id: 'b', text: 'Noe som driver folk bort fra hjemstedet, som krig eller fattigdom', isCorrect: true },
              { id: 'c', text: 'En kombinasjon av forhold i både opprinnelses- og mottakerland som samlet motiverer migrasjon', isCorrect: false },
              { id: 'd', text: 'Sosiale nettverk og familiebånd som letter overgangen til et nytt land', isCorrect: false },
            ],
            solution: 'Push-faktorer er det som driver folk bort fra hjemstedet: krig, forfølgelse, fattigdom, klimaendringer og naturkatastrofer. Pull-faktorer er det som trekker dem mot et nytt sted, som fred, arbeidsmuligheter og velferdsordninger.',
          },
          {
            id: 'historie-17-2-n-quiz1-q2',
            task: 'Hvilke av disse er en pull-faktor?',
            options: [
              { id: 'a', text: 'Økonomisk krise og høy arbeidsledighet i hjemlandet', isCorrect: false },
              { id: 'b', text: 'Klimaendringer som gjør jordbruk vanskelig i hjemlandet', isCorrect: false },
              { id: 'c', text: 'Korrupsjon og mangel på rettssikkerhet i hjemlandet', isCorrect: false },
              { id: 'd', text: 'Arbeidsmuligheter i et annet land', isCorrect: true },
            ],
            solution: 'Arbeidsmuligheter i et annet land er en pull-faktor -- noe som trekker folk mot et nytt sted. Pull-faktorer inkluderer også fred og sikkerhet, velferdsordninger, familie som allerede har migrert, og muligheter for utdanning.',
          },
        ],
      },
    },
    {
      id: 'historie-17-2-n-section2',
      type: 'text',
      content: `## FNs flyktningkonvensjon og folkeretten

Etter andre verdenskrig, da millioner av europeere var på flukt, ble det internasjonale systemet for flyktningbeskyttelse etablert. **FNs flyktningkonvensjon** fra 1951 definerer hvem som er flyktning og hvilke rettigheter de har.

En flyktning er ifølge konvensjonen en person som har velbegrunnet frykt for forfølgelse på grunn av rase, religion, nasjonalitet, politisk oppfatning eller medlemskap i en bestemt sosial gruppe.

Det viktigste prinsippet er **non-refoulement**: Stater kan ikke returnere flyktninger til steder der de risikerer forfølgelse. Dette er en absolutt regel som ikke kan fravikes.

Men systemet har svakheter. Konvensjonen ble laget for europeiske flyktninger i etterkrigstiden, og verden ser annerledes ut nå. **Klimaflyktninger** -- de som flykter fra klimaendringer -- er ikke dekket. Millioner lever i en gråsone mellom flyktning og økonomisk migrant.

I en verden der over 100 millioner mennesker er fordrevet, er presset på dette systemet enormt. Rike land forsøker å beskytte sine grenser, fattige land som ligger nær konfliktsoner bærer den tyngste byrden. Libanon, et lite land, har tatt imot over en million syriske flyktninger -- det tilsvarer en fjerdedel av befolkningen.`,
    },
    {
      id: 'historie-17-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-17-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på flyktningkonvensjonen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-17-2-n-quiz2-q0',
            task: 'Hva betyr prinsippet om non-refoulement?',
            options: [
              { id: 'a', text: 'At flyktninger har rett til å velge hvilket land de vil søke beskyttelse i', isCorrect: false },
              { id: 'b', text: 'At stater ikke kan returnere flyktninger til steder der de risikerer forfølgelse', isCorrect: true },
              { id: 'c', text: 'At mottakerlandet er forpliktet til å gi flyktninger permanent oppholdstillatelse', isCorrect: false },
              { id: 'd', text: 'At flyktninger ikke kan sendes tilbake til hjemlandet før konflikten der er offisielt avsluttet', isCorrect: false },
            ],
            solution: 'Non-refoulement er det viktigste prinsippet i flyktningretten. Det forbyr stater å returnere flyktninger til steder der de risikerer forfølgelse. Det er en absolutt regel.',
          },
          {
            id: 'historie-17-2-n-quiz2-q1',
            task: 'Når ble FNs flyktningkonvensjon vedtatt, og hvorfor?',
            options: [
              { id: 'a', text: 'I 1948, samtidig med vedtaket av Verdenserklæringen om menneskerettigheter', isCorrect: false },
              { id: 'b', text: 'I 1951, etter at millioner av europeere var på flukt etter andre verdenskrig', isCorrect: true },
              { id: 'c', text: 'I 1945, som en del av opprettelsen av De forente nasjoner', isCorrect: false },
              { id: 'd', text: 'I 1949, etter opprettelsen av UNHCR som FNs flyktningorgan', isCorrect: false },
            ],
            solution: 'FNs flyktningkonvensjon ble vedtatt i 1951, etter andre verdenskrig da millioner av europeere var på flukt. Den ble opprettet for å definere hvem som er flyktning og sikre dem beskyttelse.',
          },
          {
            id: 'historie-17-2-n-quiz2-q2',
            task: 'Hva er en svakhet ved FNs flyktningkonvensjon i dag?',
            options: [
              { id: 'a', text: 'At den ikke har mekanismer for å fordele flyktninger rettferdig mellom mottakerland', isCorrect: false },
              { id: 'b', text: 'At den ikke pålegger stater å gi økonomisk bistand til naboland som tar imot flyktninger', isCorrect: false },
              { id: 'c', text: 'At klimaflyktninger ikke er dekket av konvensjonen', isCorrect: true },
              { id: 'd', text: 'At den ikke skiller tydelig nok mellom flyktninger og internt fordrevne personer', isCorrect: false },
            ],
            solution: 'Konvensjonen ble laget for europeiske flyktninger i etterkrigstiden og dekker ikke klimaflyktninger -- de som flykter fra klimaendringer som tørke og stigende hav. I en tid der over 100 millioner er fordrevet, er dette et alvorlig hull.',
          },
        ],
      },
    },
    {
      id: 'historie-17-2-n-section3',
      type: 'text',
      content: `## Integrering: Hva kreves?

Når migranter kommer til et nytt land, starter en lang prosess med **integrering**. Integrering handler om å bli en deltaker i samfunnet man kommer til -- gjennom arbeid, språk, sosiale nettverk og aksept av grunnleggende verdier.

Det finnes ulike modeller for hvordan samfunn forholder seg til innvandrere:

**Assimilering** betyr at migranter gir opp sin opprinnelige kultur og blir som majoriteten. Historisk har mange land forsøkt dette, ofte med tvang. Samenes erfaring i Norge er et eksempel på tvungen assimilering -- myndighetene forsøkte aktivt å utslette samisk språk og kultur.

**Multikulturalisme** betyr at ulike kulturer lever side om side, med respekt for mangfold. Kritikere mener dette kan føre til parallellsamfunn med lite kontakt mellom gruppene.

**Integrering** forsøker å finne en mellomvei: Deltakelse i samfunnet og aksept av grunnregler, men med rom for kulturell egenart. Du lærer språket, du jobber, du deltar -- men du kan fortsatt praktisere din religion og bevare dine tradisjoner.

Integrering er en **toveis prosess**. Det krever noe av innvandrerne: å lære språket, å søke arbeid, å akseptere demokratiske grunnverdier. Men det krever også noe av samfunnet: å ikke diskriminere, å gi muligheter, å være åpne for nye borgere.`,
    },
    {
      id: 'historie-17-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-17-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på integrering:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-17-2-n-quiz3-q0',
            task: 'Hva er integrering?',
            options: [
              { id: 'a', text: 'At innvandrere tilpasser seg vertslandet gjennom å lære språket og følge lovene, uten krav til samfunnet', isCorrect: false },
              { id: 'b', text: 'At samfunnet legger til rette for kulturelt mangfold gjennom egne institusjoner for ulike grupper', isCorrect: false },
              { id: 'c', text: 'En toveis prosess der innvandrere blir deltakere i samfunnet mens de kan beholde kulturell egenart', isCorrect: true },
              { id: 'd', text: 'At innvandrere gradvis assimileres inn i majoritetskulturen over to til tre generasjoner', isCorrect: false },
            ],
            solution: 'Integrering er en toveis prosess der innvandrere lærer språk og deltar i samfunnet, mens samfunnet gir muligheter og ikke diskriminerer. Man kan beholde kulturell identitet.',
          },
          {
            id: 'historie-17-2-n-quiz3-q1',
            task: 'Hva er forskjellen mellom multikulturalisme og integrering?',
            options: [
              { id: 'a', text: 'Multikulturalisme krever statlig støtte til minoritetskulturer, integrering overlater det til den enkelte', isCorrect: false },
              { id: 'b', text: 'Multikulturalisme betyr at ulike kulturer lever side om side, integrering søker aktiv deltakelse i fellesskapet', isCorrect: true },
              { id: 'c', text: 'Multikulturalisme vektlegger individuelle rettigheter, integrering vektlegger gruppetilhørighet', isCorrect: false },
              { id: 'd', text: 'Integrering er en juridisk prosess mens multikulturalisme er en kulturell holdning', isCorrect: false },
            ],
            solution: 'Multikulturalisme betyr at ulike kulturer lever side om side med respekt for mangfold, men kritikere mener det kan føre til parallellsamfunn. Integrering forsøker å finne en mellomvei: deltakelse og aksept av grunnregler, men med rom for kulturell egenart.',
          },
          {
            id: 'historie-17-2-n-quiz3-q2',
            task: 'Hvorfor kalles integrering en "toveis prosess"?',
            options: [
              { id: 'a', text: 'Fordi integrering skjer både gjennom arbeidslivet og gjennom det sosiale livet', isCorrect: false },
              { id: 'b', text: 'Fordi det krever innsats både fra innvandrerne og fra samfunnet som mottar dem', isCorrect: true },
              { id: 'c', text: 'Fordi innvandrere påvirker vertslandet kulturelt, samtidig som vertslandet påvirker dem økonomisk', isCorrect: false },
              { id: 'd', text: 'Fordi integrering innebærer både å lære det nye språket og å bevare morsmålet', isCorrect: false },
            ],
            solution: 'Integrering er en toveis prosess fordi den krever noe av begge parter. Innvandrerne må lære språket, søke arbeid og akseptere grunnverdier. Samfunnet må ikke diskriminere, gi muligheter og være åpent for nye borgere.',
          },
        ],
      },
    },
    {
      id: 'historie-17-2-n-section4',
      type: 'text',
      content: `## Migrasjonsdebattens store spørsmål

Få politiske spørsmål vekker sterkere følelser enn migrasjon. Debattene handler om fundamentale verdier: humanitært ansvar versus nasjonale interesser, åpenhet versus kontroll, mangfold versus samhold.

**De som argumenterer for en mer liberal innvandringspolitikk** peker på:
- Vårt humanitære ansvar for å hjelpe folk i nød
- At innvandrere bidrar med arbeidskraft i aldrende samfunn
- At mangfold beriker kulturen
- At historien viser at innvandring ofte har vært positivt for mottakerland

**De som argumenterer for en mer restriktiv politikk** peker på:
- Integreringsutfordringer og kostnader
- Press på velferdsordninger
- Kulturelle verdikonflikter
- Sikkerhetshensyn

Debatten kompliseres av at fakta og følelser ofte blandes sammen. Kriminalitetsstatistikk tolkes ulikt. Suksesshistorier og problemer fremheves selektivt. Retorikken kan bli polarisert, med de som vil ha åpnere grenser stemplet som naive, og de som vil ha strengere kontroll stemplet som fremmedfiendtlige.

Et sentralt spørsmål er forholdet mellom migrasjon og velferdsstaten. Kan en generøs velferdsstat kombineres med høy innvandring? Noen frykter at velferdsgoder tiltrekker migranter som ikke bidrar. Andre peker på at innvandrere som jobber, betaler skatt og bidrar til systemet.`,
    },
    {
      id: 'historie-17-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-17-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på migrasjonsdebattens spørsmål:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-17-2-n-quiz4-q0',
            task: 'Hva er et sentralt argument for at innvandring kan være positivt for velferdsstaten?',
            options: [
              { id: 'a', text: 'At innvandring øker den kulturelle kompetansen i offentlig sektor og forbedrer tjenestene', isCorrect: false },
              { id: 'b', text: 'At innvandrere som jobber betaler skatt og bidrar til å finansiere velferdsstaten', isCorrect: true },
              { id: 'c', text: 'At innvandrere fyller stillinger i omsorgssektoren som nordmenn ikke vil ha', isCorrect: false },
              { id: 'd', text: 'At økt befolkningsvekst gjennom innvandring styrker etterspørselen og driver økonomisk vekst', isCorrect: false },
            ],
            solution: 'Innvandrere som kommer i arbeid betaler skatt og bidrar til å finansiere velferdsordninger. I aldrende samfunn kan arbeidsinnvandring bidra til å opprettholde velferdsstaten.',
          },
          {
            id: 'historie-17-2-n-quiz4-q1',
            task: 'Hva er et vanlig argument fra de som ønsker strengere innvandringspolitikk?',
            options: [
              { id: 'a', text: 'At kulturelt mangfold svekker den nasjonale samhørigheten som velferdsstaten bygger på', isCorrect: false },
              { id: 'b', text: 'At integreringsutfordringer og press på velferdsordninger krever kontroll', isCorrect: true },
              { id: 'c', text: 'At arbeidsmarkedet ikke klarer å absorbere flere arbeidstakere uten at lønningene presses ned', isCorrect: false },
              { id: 'd', text: 'At rask befolkningsvekst skaper press på boligmarkedet og offentlig infrastruktur', isCorrect: false },
            ],
            solution: 'Et vanlig argument for strengere politikk er at integreringsutfordringer, kostnader og press på velferdsordninger krever kontroll. Debatten handler om å balansere humanitært ansvar mot praktiske begrensninger.',
          },
        ],
      },
    },
    {
      id: 'historie-17-2-n-section5',
      type: 'text',
      content: `## Klimamigrasjon: Fremtidens store utfordring

I tiårene som kommer vil verden trolig se en ny type migrasjon i massivt omfang: **klimamigrasjon**. Klimaendringene tvinger allerede folk på flukt, og problemet vil bare vokse.

Tenk deg at havnivået stiger så mye at hele øystater forsvinner. Maldivene, Tuvalu, deler av Bangladesh -- millioner av mennesker som mister hjemmet sitt permanent. Tenk deg at tørke gjør store områder i Afrika ubeboelige, at ekstremvær ødelegger infrastruktur, at konflikter om knappe ressurser driver folk på flukt.

Estimatene varierer, men noen forskere snakker om hundrevis av millioner "klimaflyktninger" dette århundret.

Her er det store paradokset: De som har bidratt minst til klimaendringene -- fattige mennesker i utviklingsland -- rammes hardest. De rike landene som har sluppet ut mest CO2 historisk, vil måtte ta imot mennesker som flykter fra konsekvensene.

Og her er det juridiske hullet: Klimaflyktninger er ikke dekket av FNs flyktningkonvensjon. Du kan ikke kreve beskyttelse fordi øyen din synker i havet.

Klimapolitikk og migrasjonspolitikk henger altså tett sammen. Hvor mye vi klarer å begrense klimaendringene, påvirker direkte hvor mange mennesker som vil tvinges på flukt.`,
    },
    {
      id: 'historie-17-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-17-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på klimamigrasjon:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-17-2-n-quiz5-q0',
            task: 'Hvorfor er klimamigrasjon en spesiell utfordring i internasjonal rett?',
            options: [
              { id: 'a', text: 'Fordi det er vanskelig å bevise at migrasjon skyldes klimaendringer og ikke andre faktorer som fattigdom', isCorrect: false },
              { id: 'b', text: 'Fordi klimaflyktninger ikke er dekket av FNs flyktningkonvensjon', isCorrect: true },
              { id: 'c', text: 'Fordi klimamigrasjon ofte skjer internt i et land og derfor faller utenfor internasjonale avtaler', isCorrect: false },
              { id: 'd', text: 'Fordi ansvaret for klimaendringer er delt mellom mange land og ingen enkeltstat kan holdes ansvarlig', isCorrect: false },
            ],
            solution: 'FNs flyktningkonvensjon dekker folk som flykter fra forfølgelse, ikke fra klimaendringer. Mennesker som mister hjemmet på grunn av stigende hav eller tørke har ikke samme juridiske beskyttelse.',
          },
          {
            id: 'historie-17-2-n-quiz5-q1',
            task: 'Hva er det store paradokset ved klimamigrasjon?',
            options: [
              { id: 'a', text: 'At landene som tar imot flest klimamigranter selv har høye utslipp', isCorrect: false },
              { id: 'b', text: 'At de som har bidratt minst til klimaendringene rammes hardest', isCorrect: true },
              { id: 'c', text: 'At klimamigrasjon øker selv om det globale utslippsnivået går ned', isCorrect: false },
              { id: 'd', text: 'At rike land som forårsaket problemet har ressurser til å beskytte seg mot konsekvensene', isCorrect: false },
            ],
            solution: 'Det store paradokset er at de som har bidratt minst til klimaendringene -- fattige mennesker i utviklingsland -- rammes hardest. De rike landene som har sluppet ut mest CO2 historisk, vil måtte ta imot mennesker som flykter fra konsekvensene.',
          },
          {
            id: 'historie-17-2-n-quiz5-q2',
            task: 'Hvordan henger klimapolitikk og migrasjonspolitikk sammen?',
            options: [
              { id: 'a', text: 'Streng migrasjonspolitikk kan gi land incentiv til å satse mer på klimatiltak i nærområdene', isCorrect: false },
              { id: 'b', text: 'Klimapolitikk og migrasjonspolitikk forhandles i de samme internasjonale organene', isCorrect: false },
              { id: 'c', text: 'Jo mer vi begrenser klimaendringene, desto færre tvinges på flukt', isCorrect: true },
              { id: 'd', text: 'Klimatilpasning i sårbare land kan erstatte behovet for internasjonal migrasjonspolitikk', isCorrect: false },
            ],
            solution: 'Klimapolitikk og migrasjonspolitikk henger tett sammen. Hvor mye vi klarer å begrense klimaendringene påvirker direkte hvor mange mennesker som vil tvinges på flukt av tørke, flom og stigende hav.',
          },
        ],
      },
    },
    {
      id: 'historie-17-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Migrasjon er et av vår tids mest komplekse og omstridte temaer. Millioner av mennesker er på vandring -- noen på flukt fra krig og forfølgelse, andre i søken etter bedre liv.

**Nøkkelbegreper du nå kjenner:**
- **Push- og pull-faktorer**: Det som driver folk bort fra hjemstedet og trekker dem mot nye steder
- **Non-refoulement**: Forbud mot å returnere flyktninger til forfølgelse
- **Integrering**: En toveis prosess der innvandrere blir deltakere i samfunnet

**Det viktigste du tar med deg:**
Migrasjon handler om mennesker -- om håp og frykt, om drømmer og desperasjon. Det er ingen enkle svar på hvordan samfunn skal balansere humanitært ansvar med praktiske begrensninger. Men historien viser at mennesker alltid har vært i bevegelse, og at samfunn som har klart å integrere nykommere ofte har blitt beriket av det.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 17.3 NARRATIV: Konflikter etter den kalde krigen
// ============================================================================

export const CHAPTER_HISTORIE_17_3_NARRATIV: TextbookChapter = {
  id: 'historie-17-3-narrativ',
  courseId: 'historie',
  chapterNumber: '17.3',
  title: 'Konflikter etter den kalde krigen',
  subtitle: 'Narrativ versjon',
  description:
    'En fortelling om nye konflikter som oppsto da den kalde krigen tok slutt, fra Jugoslavia til krigen mot terror.',
  estimatedMinutes: 55,
  competenceGoals: ['verdenskrigene og andre konflikter, fredsslutninger'],
  linkedChapterId: 'historie-17-3',
  content: [
    {
      id: 'historie-17-3-n-intro',
      type: 'text',
      content: `## Slutten på historien?

Da Berlinmuren falt i 1989 og Sovjetunionen kollapset i 1991, var optimismen enorm. Den kalde krigen var over. USA sto igjen som verdens eneste supermakt. Demokrati og markedsøkonomi så ut til å ha seiret.

Den amerikanske statsviteren Francis Fukuyama skrev en berømt artikkel med tittelen "The End of History?" Han mente ikke at hendelser ville slutte å skje, men at den store ideologiske kampen var over. Liberalt demokrati hadde vunnet.

Det viste seg å være alt for optimistisk. For selv om den kalde krigen var slutt, ble ikke verden fredelig. Tvert imot: Nye konflikter brøt ut, noen av dem mer brutale enn noe Europa hadde sett siden andre verdenskrig. Terrorisme ble en global trussel. Og de siste årene har stormaktsrivaliseringen vendt tilbake med full kraft.

La oss se på noen av konfliktene som har formet vår tid.`,
    },
    {
      id: 'historie-17-3-n-section1',
      type: 'text',
      content: `## Jugoslavias sammenbrudd

Den sosialistiske føderasjonen Jugoslavia var et multietnisk lappeteppe: serbere, kroater, bosniere, slovenere, makedonere, albanere -- alle levde i samme stat, holdt sammen av kommunistpartiet og diktatoren Josip Broz Tito.

Da Tito døde i 1980 og kommunismen kollapset over hele Øst-Europa, begynte føderasjonen å rakne. Nasjonalistiske politikere mobiliserte frykt og hat. Gamle sår fra andre verdenskrig ble revet opp igjen.

Det som fulgte var en serie brutale kriger:

**Slovenia (1991)**: En kort krig da Slovenia erklærte uavhengighet. Slovenia slapp relativt lett unna.

**Kroatia (1991-1995)**: Krig mellom kroater og serbere. Etnisk rensing -- systematisk fordrivelse av befolkningsgrupper -- ble et forferdelig kjennetegn.

**Bosnia (1992-1995)**: Den blodigste konflikten. Bosniere, kroater og serbere kjempet om territorium. Sarajevo ble beleiret i nesten fire år. Og så kom Srebrenica.

I juli 1995 inntok bosnisk-serbiske styrker byen Srebrenica, som var erklært "sikker sone" av FN. Nederlandske FN-soldater kunne ikke forhindre det som skjedde: Over 8000 bosnisk-muslimske menn og gutter ble systematisk drept i løpet av noen få dager. Det var det verste massedrapet i Europa siden andre verdenskrig.

Srebrenica ble et symbol på det internasjonale samfunnets svikt. FN hadde lovet å beskytte sivile, men maktet det ikke.`,
    },
    {
      id: 'historie-17-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-17-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på Jugoslavias sammenbrudd:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-17-3-n-quiz1-q0',
            task: 'Hva er etnisk rensing?',
            options: [
              { id: 'a', text: 'Folkemord der en hel etnisk gruppe systematisk utryddes', isCorrect: false },
              { id: 'b', text: 'Systematisk fordrivelse av en etnisk gruppe fra et område gjennom vold og terror', isCorrect: true },
              { id: 'c', text: 'Tvangsflytting av befolkningsgrupper organisert av internasjonale fredsbevarende styrker', isCorrect: false },
              { id: 'd', text: 'Politisk segregering der etniske grupper tildeles adskilte territorier gjennom lovgivning', isCorrect: false },
            ],
            solution: 'Etnisk rensing er systematisk fordrivelse av en etnisk eller religiøs gruppe fra et område gjennom vold, terror, drap eller trusler. Det er en krigsforbrytelse.',
          },
          {
            id: 'historie-17-3-n-quiz1-q1',
            task: 'Hva skjedde i Srebrenica i juli 1995?',
            options: [
              { id: 'a', text: 'NATO gjennomførte sine første luftangrep mot bosnisk-serbiske stillinger', isCorrect: false },
              { id: 'b', text: 'Dayton-avtalen ble fremforhandlet og avsluttet Bosnia-krigen', isCorrect: false },
              { id: 'c', text: 'Over 8000 bosnisk-muslimske menn og gutter ble systematisk drept', isCorrect: true },
              { id: 'd', text: 'Beleiringen av Sarajevo ble endelig brutt etter nesten fire år', isCorrect: false },
            ],
            solution: 'I Srebrenica ble over 8000 bosnisk-muslimske menn og gutter systematisk drept av bosnisk-serbiske styrker -- det verste massedrapet i Europa siden andre verdenskrig. Byen var erklært "sikker sone" av FN, men FN-soldatene klarte ikke å forhindre massakren.',
          },
          {
            id: 'historie-17-3-n-quiz1-q2',
            task: 'Hva holdt den multietniske staten Jugoslavia sammen før sammenbruddet?',
            options: [
              { id: 'a', text: 'En felles sørslavisk nasjonal identitet og felles språk', isCorrect: false },
              { id: 'b', text: 'Økonomisk velstand og alliansen med Sovjetunionen gjennom Warszawapakten', isCorrect: false },
              { id: 'c', text: 'Kommunistpartiet og diktatoren Josip Broz Tito', isCorrect: true },
              { id: 'd', text: 'En føderativ grunnlov som ga delrepublikkene stor grad av selvstyre', isCorrect: false },
            ],
            solution: 'Jugoslavia ble holdt sammen av kommunistpartiet og diktatoren Tito. Da Tito døde i 1980 og kommunismen kollapset, begynte føderasjonen å rakne. Nasjonalistiske politikere mobiliserte frykt og hat.',
          },
        ],
      },
    },
    {
      id: 'historie-17-3-n-section2',
      type: 'text',
      content: `## 11. september og krigen mot terror

Morgenen 11. september 2001 kapret terrorister fra al-Qaida fire fly i USA. To av dem styrtet inn i tvillingtårnene World Trade Center i New York. Ett traff Pentagon. Ett styrtet i Pennsylvania etter at passasjerer forsøkte å ta kontrollen.

Nesten 3000 mennesker døde. Verden så det skje direkte på TV. Bildene av tårnene som kollapset ble brent inn i en hel generasjons bevissthet.

President George W. Bush erklærte "krig mot terror". USA invaderte Afghanistan i oktober 2001 for å knuse al-Qaida og fjerne Taliban-regimet som hadde gitt terroristene fristed. Invasjonen hadde bred internasjonal støtte.

I 2003 kom en langt mer kontroversiell beslutning: invasjonen av Irak. USA hevdet at Saddam Hussein hadde masseødeleggelsesvåpen og forbindelser til al-Qaida. Begge påstander viste seg å være feil. Mange land nektet å delta, og verdensopinionen var splittet.

Konsekvensene var enorme. Afghanistan ble en årelang krig som endte med at Taliban tok tilbake makten i 2021. Irak ble destabilisert, og vakuumet bidro til fremveksten av Den islamske stat (IS) som erobret store områder og spredte terror til Europa.

Krigen mot terror førte også til innskrenkninger i sivile rettigheter, økt overvåking, og debatt om hvor langt demokratier kan gå for å beskytte seg uten å underminere sine egne verdier.`,
    },
    {
      id: 'historie-17-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-17-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på krigen mot terror:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-17-3-n-quiz2-q0',
            task: 'Hva var hovedbegrunnelsen USA oppga for invasjonen av Irak i 2003?',
            options: [
              { id: 'a', text: 'At Saddam Hussein støttet al-Qaida operativt og bidro til planleggingen av 11. september', isCorrect: false },
              { id: 'b', text: 'At Irak angivelig hadde masseødeleggelsesvåpen og forbindelser til terrorisme', isCorrect: true },
              { id: 'c', text: 'At Irak brøt FN-resolusjoner ved å hindre våpeninspektører og utvikle kjernefysiske våpen', isCorrect: false },
              { id: 'd', text: 'At en humanitær intervensjon var nødvendig for å beskytte kurdiske og sjiamuslimske minoriteter', isCorrect: false },
            ],
            solution: 'USAs offisielle begrunnelse var masseødeleggelsesvåpen og forbindelser til al-Qaida. Begge påstandene viste seg å være feil, og invasjonen var svært kontroversiell.',
          },
          {
            id: 'historie-17-3-n-quiz2-q1',
            task: 'Hva skjedde 11. september 2001?',
            options: [
              { id: 'a', text: 'USA erklærte krig mot terror og startet bombingen av Afghanistan', isCorrect: false },
              { id: 'b', text: 'Terrorister fra al-Qaida kapret fire fly og angrep mål i USA, nesten 3000 døde', isCorrect: true },
              { id: 'c', text: 'FNs sikkerhetsråd autoriserte en internasjonal koalisjon for å bekjempe internasjonal terrorisme', isCorrect: false },
              { id: 'd', text: 'En serie koordinerte bombeangrep rammet amerikanske ambassader og militærbaser i Midtøsten', isCorrect: false },
            ],
            solution: 'Den 11. september 2001 kapret terrorister fra al-Qaida fire fly i USA. To styrtet i World Trade Center, ett traff Pentagon, og ett styrtet i Pennsylvania. Nesten 3000 mennesker døde. Hendelsen utløste USAs "krig mot terror".',
          },
          {
            id: 'historie-17-3-n-quiz2-q2',
            task: 'Hva ble en viktig konsekvens av destabiliseringen av Irak?',
            options: [
              { id: 'a', text: 'En langvarig sekterisk borgerkrig mellom sunni- og sjiamuslimer om politisk makt', isCorrect: false },
              { id: 'b', text: 'Fremveksten av Den islamske stat (IS)', isCorrect: true },
              { id: 'c', text: 'At Irans innflytelse i regionen ble kraftig styrket gjennom sjiamuslimske allianser', isCorrect: false },
              { id: 'd', text: 'En ny bølge av al-Qaida-tilknyttede terrorceller spredte seg til Nord-Afrika og Jemen', isCorrect: false },
            ],
            solution: 'Destabiliseringen av Irak skapte et vakuum som bidro til fremveksten av Den islamske stat (IS). IS erobret store områder i Irak og Syria og spredte terror til Europa. Invasjonen viste at militær makt sjelden skaper stabile demokratier.',
          },
          {
            id: 'historie-17-3-n-quiz2-q3',
            task: 'Hva skjedde med Afghanistan-krigen?',
            options: [
              { id: 'a', text: 'Krigen endte med en fredsavtale der Taliban aksepterte demokratiske valg under FN-oppsyn', isCorrect: false },
              { id: 'b', text: 'NATO-styrker lyktes gradvis med å stabilisere landet, og trakk seg ut etter en vellykket maktoverføring i 2014', isCorrect: false },
              { id: 'c', text: 'Krigen varte i 20 år og endte med at Taliban tok tilbake makten i 2021', isCorrect: true },
              { id: 'd', text: 'En FN-ledet overgangsregjering tok over styringen etter at USA reduserte sin tilstedeværelse i 2020', isCorrect: false },
            ],
            solution: 'Afghanistan-krigen varte i 20 år og endte med at Taliban tok tilbake makten i 2021 da USA trakk seg ut. Det viste at demokrati ikke kan eksporteres med våpen, og at samfunnsendring må komme innenfra.',
          },
        ],
      },
    },
    {
      id: 'historie-17-3-n-section3',
      type: 'text',
      content: `## Stormaktenes tilbakekomst

I årene etter den kalde krigen så det ut som om stormaktskonkurranse var en ting fra fortiden. Men det varte ikke.

**Russland under Putin** har gjenetablert seg som stormakt. Etter kaotiske 1990-tall med økonomisk kollaps og ydmykelse, har Vladimir Putin siden 1999 bygget opp et mer autoritært og selvhevdende Russland.

I 2014 annekterte Russland Krim-halvøya fra Ukraina etter at en pro-vestlig revolusjon hadde styrtet den russiskvennlige presidenten. Vesten innførte sanksjoner, men Russland beholdt Krim.

Så, i februar 2022, kom det mange hadde fryktet: En fullskala russisk invasjon av Ukraina. Russland hevdet å forsvare seg mot NATOs utvidelse østover og å "de-nazifisere" Ukraina. Krigen har kostet titusener av liv, drevet millioner på flukt, og sendt sjokkbølger gjennom internasjonal politikk.

**Kina** har samtidig vokst til verdens nest største økonomi og modernisert sitt militære. Spenningen med USA øker -- om handel, teknologi, Taiwan og mye annet. Noen snakker om en ny kald krig mellom USA og Kina.

Vi lever altså i en **multipolar verden** der flere stormakter konkurrerer. Det amerikanske eneveldet fra 1990-tallet er over. Den internasjonale orden som ble bygget opp etter andre verdenskrig, er under press.`,
    },
    {
      id: 'historie-17-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-17-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på stormaktenes tilbakekomst:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-17-3-n-quiz3-q0',
            task: 'Hva skjedde med Krim-halvøya i 2014?',
            options: [
              { id: 'a', text: 'Pro-russiske separatister erklærte uavhengige folkerepublikker i Øst-Ukraina', isCorrect: false },
              { id: 'b', text: 'Russland annekterte Krim fra Ukraina etter en omstridt folkeavstemning', isCorrect: true },
              { id: 'c', text: 'Krim ble en autonom republikk under FN-administrasjon etter en internasjonal konferanse', isCorrect: false },
              { id: 'd', text: 'Russland og Ukraina inngikk Minsk-avtalen om delt kontroll over halvøya', isCorrect: false },
            ],
            solution: 'I 2014 annekterte Russland Krim-halvøya fra Ukraina etter en folkeavstemning som de fleste land ikke anerkjente. Dette var et brudd på internasjonal rett og førte til vestlige sanksjoner mot Russland.',
          },
          {
            id: 'historie-17-3-n-quiz3-q1',
            task: 'Hva har kjennetegnet Russland under Vladimir Putin siden 1999?',
            options: [
              { id: 'a', text: 'Modernisering av økonomien gjennom markedsliberalisering og integrasjon med EU', isCorrect: false },
              { id: 'b', text: 'Økonomisk stabilisering gjennom oljeinntekter, men fortsatt demokratisk reform', isCorrect: false },
              { id: 'c', text: 'Oppbygging av et mer autoritært og selvhevdende Russland', isCorrect: true },
              { id: 'd', text: 'Pragmatisk samarbeid med Vesten kombinert med sterkere kontroll over nærområdet', isCorrect: false },
            ],
            solution: 'Under Putin har Russland blitt mer autoritært og selvhevdende på den internasjonale scenen, etter de kaotiske 1990-årene med økonomisk kollaps og ydmykelse.',
          },
          {
            id: 'historie-17-3-n-quiz3-q2',
            task: 'Hvorfor snakker noen om en ny kald krig mellom USA og Kina?',
            options: [
              { id: 'a', text: 'Fordi Kina og USA konkurrerer om innflytelse i internasjonale organisasjoner som FN og WTO', isCorrect: false },
              { id: 'b', text: 'Fordi spenningen øker om handel, teknologi og Taiwan', isCorrect: true },
              { id: 'c', text: 'Fordi Kinas militære opprustning i Sør-Kina-havet utfordrer USAs allianser i Asia', isCorrect: false },
              { id: 'd', text: 'Fordi begge land fører ideologisk kamp om demokrati versus autoritært styre globalt', isCorrect: false },
            ],
            solution: 'Kina har vokst til verdens nest største økonomi og modernisert sitt militære. Spenningen med USA øker om handel, teknologi, Taiwan og mye annet, noe som får noen til å snakke om en ny kald krig.',
          },
          {
            id: 'historie-17-3-n-quiz3-q3',
            task: 'Hva hevdet Russland var begrunnelsen for invasjonen av Ukraina i 2022?',
            options: [
              { id: 'a', text: 'At den russisktalende befolkningen i Øst-Ukraina ble utsatt for folkemord av ukrainske styrker', isCorrect: false },
              { id: 'b', text: 'At Ukraina brøt Minsk-avtalen og nektet å gi de østlige regionene autonomi', isCorrect: false },
              { id: 'c', text: 'At de ville forsvare seg mot NATOs utvidelse og "de-nazifisere" Ukraina', isCorrect: true },
              { id: 'd', text: 'At Ukraina utviklet kjernefysiske våpen i strid med Budapestmemorandumet fra 1994', isCorrect: false },
            ],
            solution: 'Russland hevdet å forsvare seg mot NATOs utvidelse østover og å "de-nazifisere" Ukraina. Krigen har kostet titusener av liv og sendt sjokkbølger gjennom internasjonal politikk.',
          },
        ],
      },
    },
    {
      id: 'historie-17-3-n-section4',
      type: 'text',
      content: `## Lærdommer og fremtidsutsikter

Hva har vi lært av disse konfliktene? Noen observasjoner:

**Internasjonale institusjoner er sårbare.** FN klarte ikke å forhindre folkemord i Rwanda eller Srebrenica. Sikkerhetsrådet lammes ofte av vetomaktenes egeninteresser. Folkeretten brytes av stormakter uten konsekvenser.

**Nasjonalisme og identitetspolitikk forsvant ikke.** Etter den kalde krigen trodde mange at nasjonalisme var en foreldet ideologi. Jugoslavia og mange andre konflikter viste at etnisk og nasjonal identitet fortsatt mobiliserer.

**Militær makt er fortsatt viktig.** Drømmen om en verden der konflikter løses med diplomati og økonomi, har vist seg å være for optimistisk. Russlands invasjon av Ukraina er en brutal påminnelse.

**Demokrati kan ikke eksporteres med våpen.** Irak og Afghanistan viste at militær intervensjon sjelden skaper stabile demokratier. Samfunnsendring må komme innenfra.

Men det er også grunn til håp. Ukrainas motstand mot invasjonen viste at folk er villige til å kjempe for frihet. NATO og EU ble styrket av krisen. Sverige og Finland søkte medlemskap i NATO. Selv i mørke tider finnes det lyspunkter.`,
    },
    {
      id: 'historie-17-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-17-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på lærdommer og fremtidsutsikter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-17-3-n-quiz4-q0',
            task: 'Hva viste Russlands invasjon av Ukraina i 2022 om internasjonal politikk?',
            options: [
              { id: 'a', text: 'At økonomiske sanksjoner er det mest effektive virkemiddelet for å stoppe aggresjon', isCorrect: false },
              { id: 'b', text: 'At militær makt fortsatt er viktig og at internasjonal orden kan utfordres av stormakter', isCorrect: true },
              { id: 'c', text: 'At europeisk sikkerhet er avhengig av USAs vilje til å forsvare sine allierte', isCorrect: false },
              { id: 'd', text: 'At diplomatiske forhandlinger og internasjonale avtaler ikke lenger har noen rolle i sikkerhetspolitikken', isCorrect: false },
            ],
            solution: 'Invasjonen viste at militær makt fortsatt er et redskap i internasjonal politikk, og at den internasjonale ordenen som ble bygget etter andre verdenskrig kan utfordres av stormakter som er villige til å bryte folkeretten.',
          },
          {
            id: 'historie-17-3-n-quiz4-q1',
            task: 'Hva viste erfaringene fra Irak og Afghanistan om å eksportere demokrati?',
            options: [
              { id: 'a', text: 'At demokratibygging krever langvarig internasjonal tilstedeværelse og massive investeringer i institusjoner', isCorrect: false },
              { id: 'b', text: 'At demokrati ikke kan eksporteres med våpen -- samfunnsendring må komme innenfra', isCorrect: true },
              { id: 'c', text: 'At militær intervensjon kan lykkes dersom det følges opp med omfattende sivil gjenoppbygging', isCorrect: false },
              { id: 'd', text: 'At regimeendring bare fungerer når den har bred støtte i FNs sikkerhetsråd og fra nabolandene', isCorrect: false },
            ],
            solution: 'Erfaringene fra Irak og Afghanistan viste at militær intervensjon sjelden skaper stabile demokratier. Varig samfunnsendring må komme innenfra, ikke påtvinges utenfra med militærmakt.',
          },
          {
            id: 'historie-17-3-n-quiz4-q2',
            task: 'Hvordan reagerte NATO og EU på Russlands invasjon av Ukraina?',
            options: [
              { id: 'a', text: 'De innførte strenge økonomiske sanksjoner, men var splittet om militær støtte til Ukraina', isCorrect: false },
              { id: 'b', text: 'De reagerte med diplomatiske protester, men unngikk tiltak som kunne provosere Russland ytterligere', isCorrect: false },
              { id: 'c', text: 'De ble styrket, og Sverige og Finland søkte NATO-medlemskap', isCorrect: true },
              { id: 'd', text: 'De økte forsvarsbudsjettene kraftig, men flere østeuropeiske land stilte spørsmål ved NATOs artikkel 5', isCorrect: false },
            ],
            solution: 'Russlands invasjon styrket samholdet i NATO og EU. Sverige og Finland, som hadde vært alliansefrie, søkte medlemskap i NATO som direkte reaksjon på invasjonen.',
          },
        ],
      },
    },
    {
      id: 'historie-17-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-17-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på den multipolare verdensordenen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-17-3-n-quiz5-q0',
            task: 'Hva menes med at vi lever i en "multipolar verden"?',
            options: [
              { id: 'a', text: 'At verden er delt i regionale blokker som samarbeider innad men konkurrerer seg imellom', isCorrect: false },
              { id: 'b', text: 'At flere stormakter konkurrerer om innflytelse, i motsetning til USAs dominans på 1990-tallet', isCorrect: true },
              { id: 'c', text: 'At makten i internasjonal politikk har flyttet fra stater til overnasjonale organisasjoner', isCorrect: false },
              { id: 'd', text: 'At to supermakter igjen dominerer verdensscenen, slik det var under den kalde krigen', isCorrect: false },
            ],
            solution: 'En multipolar verden betyr at flere stormakter -- som USA, Kina og Russland -- konkurrerer om innflytelse. Dette er i kontrast til 1990-tallet da USA var eneste supermakt ("unipolar verden") eller den kalde krigen med to supermakter ("bipolar verden").',
          },
          {
            id: 'historie-17-3-n-quiz5-q1',
            task: 'Hva har skjedd med internasjonale institusjoner som FN i møte med moderne konflikter?',
            options: [
              { id: 'a', text: 'De har tilpasset seg nye utfordringer ved å opprette regionale fredsbevarende styrker', isCorrect: false },
              { id: 'b', text: 'De har vist seg sårbare -- Sikkerhetsrådet lammes ofte av vetomaktenes egeninteresser', isCorrect: true },
              { id: 'c', text: 'De har fått økt legitimitet gjennom at flere land deltar aktivt i fredsbevarende operasjoner', isCorrect: false },
              { id: 'd', text: 'De har gradvis mistet relevans fordi regionale organisasjoner som EU og AU har overtatt fredsarbeidet', isCorrect: false },
            ],
            solution: 'FN klarte ikke å forhindre folkemord i Rwanda eller Srebrenica. Sikkerhetsrådet lammes ofte av vetomaktenes egeninteresser, og folkeretten brytes av stormakter uten konsekvenser.',
          },
          {
            id: 'historie-17-3-n-quiz5-q2',
            task: 'Hva mente Francis Fukuyama med "The End of History"?',
            options: [
              { id: 'a', text: 'At nasjonalstaten som politisk organisasjonsform ville forsvinne til fordel for globale institusjoner', isCorrect: false },
              { id: 'b', text: 'At stormaktskonflikter ville bli erstattet av regionale etniske og religiøse konflikter', isCorrect: false },
              { id: 'c', text: 'At den store ideologiske kampen var over og liberalt demokrati hadde vunnet', isCorrect: true },
              { id: 'd', text: 'At markedsøkonomien ville spre seg til alle land og gjøre krig økonomisk ulønnsomt', isCorrect: false },
            ],
            solution: 'Fukuyama mente ikke at hendelser ville slutte å skje, men at den store ideologiske kampen mellom kommunisme og demokrati var over. Liberalt demokrati så ut til å ha seiret -- men det viste seg å være alt for optimistisk.',
          },
        ],
      },
    },
    {
      id: 'historie-17-3-n-summary',
      type: 'text',
      content: `## Oppsummering

Etter den kalde krigens slutt brøt optimismen sammen i møte med nye konflikter. Etniske kriger, terrorisme og stormaktsrivalisering preger fortsatt vår verden.

**Nøkkelbegreper du nå kjenner:**
- **Etnisk rensing**: Systematisk fordrivelse av en etnisk gruppe gjennom vold og terror
- **Multipolar verden**: Et internasjonalt system der flere stormakter konkurrerer om innflytelse
- **Krigen mot terror**: USAs globale kampanje mot terrorisme etter 11. september 2001

**Det viktigste du tar med deg:**
Drømmen om en fredelig "ny verdensorden" etter den kalde krigen viste seg å være for optimistisk. Men historien lærer oss også at fred er mulig -- det krever bare at vi jobber for det og forsvarer den når den trues.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 17.4 NARRATIV: Klimakrise og bærekraft
// ============================================================================

export const CHAPTER_HISTORIE_17_4_NARRATIV: TextbookChapter = {
  id: 'historie-17-4-narrativ',
  courseId: 'historie',
  chapterNumber: '17.4',
  title: 'Klimakrise og bærekraft',
  subtitle: 'Narrativ versjon',
  description:
    'En fortelling om hvordan menneskets forhold til naturen har forandret seg, og utfordringene vi står overfor.',
  estimatedMinutes: 50,
  competenceGoals: ['mennesket og naturen, bærekraft'],
  linkedChapterId: 'historie-17-4',
  content: [
    {
      id: 'historie-17-4-n-intro',
      type: 'text',
      content: `## Mennesket som geologisk kraft

I tusenvis av år levde menneskene som en del av naturen. Vi tilpasset oss årstider, klima og økosystemer. Naturen satte grensene for hva vi kunne gjøre.

Det forandret seg med den industrielle revolusjonen. Kull, olje og gass ga oss tilgang til enorme mengder energi. Vi bygde fabrikker, biler, fly. Vi lyste opp natten og varmet opp vinteren. Verden ble forvandlet på måter våre forfedre aldri kunne forestilt seg.

Men det var en pris. Hver gang vi brant fossil energi, slapp vi ut CO2 som hadde vært bundet i jorda i millioner av år. Langsomt, usynlig, begynte sammensetningen av atmosfæren å forandre seg.

Noen forskere mener vi har gått inn i en ny geologisk epoke -- **antropocen**, menneskets tidsalder. En epoke der menneskelig aktivitet påvirker jordens systemer i samme skala som naturlige geologiske krefter. Klimaendringer, masseutryddelse av arter, plastforurensing i havene -- alt dette er tegn på at vi har forandret planeten fundamentalt.

La oss se på hvordan vi kom hit, og hva vi kan gjøre.`,
    },
    {
      id: 'historie-17-4-n-section1',
      type: 'text',
      content: `## Miljøbevegelsens fremvekst

Bekymring for naturen er ikke nytt. Allerede på 1800-tallet etablerte romantikerne en beundring for urørt natur, og de første nasjonalparkene ble opprettet for å beskytte landskap mot industrialisering.

Men den moderne miljøbevegelsen ble født på 1960-tallet. I 1962 publiserte den amerikanske biologen Rachel Carson boken "Silent Spring" -- om hvordan sprøytemidler drepte fugler og forgiftet naturen. Boken vakte oppsikt og bidro til å forby DDT.

I 1972 kom rapporten "Limits to Growth", bestilt av Romaklubben. Ved hjelp av tidlige datamaskiner simulerte forskere jordens ressurser og befolkningsvekst. Konklusjonen var sjokkerende: Hvis veksten fortsatte, ville vi støte mot grenser for hva planeten kunne tåle.

Første Earth Day ble arrangert i 1970, og miljøpartier dukket opp i mange land. Miljøorganisasjoner som Greenpeace ble grunnlagt og fikk økende innflytelse.

Fra 1980-tallet kom klimasaken for alvor. FNs klimapanel (IPCC) ble etablert i 1988 for å samle forskningen. Kyotoprotokollen i 1997 var den første internasjonale avtalen om å begrense utslipp. Og i 2015 ble Paris-avtalen vedtatt, der nesten alle verdens land forpliktet seg til å begrense global oppvarming.

Mens noen forskere og politikere er skeptiske til alvoret i klimaendringene, mener det store flertallet av klimaforskere at menneskeskapte klimaendringer er reelle og krever handling.`,
    },
    {
      id: 'historie-17-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-17-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på miljøbevegelsen og klimakampen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-17-4-n-quiz1-q0',
            task: 'Hva menes med antropocen?',
            options: [
              { id: 'a', text: 'Begrepet for den nåværende geologiske perioden holocen, som startet etter siste istid', isCorrect: false },
              { id: 'b', text: 'En foreslått geologisk epoke der menneskets aktivitet er blitt en dominerende kraft på jorden', isCorrect: true },
              { id: 'c', text: 'Et vitenskapelig rammeverk for å måle menneskets samlede økologiske fotavtrykk på planeten', isCorrect: false },
              { id: 'd', text: 'Teorien om at klimaendringer primært drives av naturlige sykluser snarere enn menneskelig aktivitet', isCorrect: false },
            ],
            solution: 'Antropocen betyr "menneskets tidsalder" og er en foreslått geologisk epoke der menneskelig aktivitet påvirker jordens systemer i samme skala som naturlige geologiske krefter -- gjennom klimaendringer, artstap, forurensing og landskapsendringer.',
          },
          {
            id: 'historie-17-4-n-quiz1-q1',
            task: 'Hva bidro Rachel Carsons bok "Silent Spring" (1962) til?',
            options: [
              { id: 'a', text: 'Opprettelsen av FNs miljøprogram UNEP og den første internasjonale miljøkonferansen i Stockholm', isCorrect: false },
              { id: 'b', text: 'At sprøytemiddelet DDT ble forbudt og den moderne miljøbevegelsen vokste frem', isCorrect: true },
              { id: 'c', text: 'Vedtaket av den første amerikanske miljøvernloven og opprettelsen av naturverndepartementet EPA', isCorrect: false },
              { id: 'd', text: 'At Romaklubben bestilte rapporten "Limits to Growth" om jordens begrensede ressurser', isCorrect: false },
            ],
            solution: 'Rachel Carsons "Silent Spring" dokumenterte hvordan sprøytemidler drepte fugler og forgiftet naturen. Boken vakte oppsikt, bidro til å forby DDT, og var en viktig katalysator for den moderne miljøbevegelsen.',
          },
          {
            id: 'historie-17-4-n-quiz1-q2',
            task: 'Hva var Paris-avtalen fra 2015?',
            options: [
              { id: 'a', text: 'En videreføring av Kyotoprotokollen med bindende utslippskutt for alle industriland', isCorrect: false },
              { id: 'b', text: 'En avtale om å opprette et globalt karbonmarked der land kan kjøpe og selge utslippskvoter', isCorrect: false },
              { id: 'c', text: 'En FN-resolusjon som pålegger alle land å fase ut fossil energi innen 2050', isCorrect: false },
              { id: 'd', text: 'En internasjonal avtale der nesten alle verdens land forpliktet seg til å begrense global oppvarming', isCorrect: true },
            ],
            solution: 'Paris-avtalen ble vedtatt i 2015 og er en internasjonal klimaavtale der nesten alle verdens land forpliktet seg til å begrense den globale oppvarmingen. Den bygger videre på tidligere avtaler som Kyotoprotokollen fra 1997.',
          },
          {
            id: 'historie-17-4-n-quiz1-q3',
            task: 'Hva slo rapporten "Limits to Growth" fra 1972 fast?',
            options: [
              { id: 'a', text: 'At befolkningsveksten måtte begrenses gjennom internasjonale tiltak for å unngå hungersnød', isCorrect: false },
              { id: 'b', text: 'At teknologisk innovasjon ville løse ressursproblemene før de ble kritiske', isCorrect: false },
              { id: 'c', text: 'At fortsatt vekst ville føre til at vi støtte mot planetens grenser', isCorrect: true },
              { id: 'd', text: 'At rike land måtte redusere sitt forbruk for at fattige land skulle kunne utvikle seg', isCorrect: false },
            ],
            solution: 'Rapporten "Limits to Growth" fra 1972 brukte datasimuleringer til å vise at hvis økonomisk vekst og ressursbruk fortsatte, ville vi støte mot grenser for hva planeten kunne tåle. Det var en av de første vitenskapelige advarslene om bærekraft.',
          },
        ],
      },
    },
    {
      id: 'historie-17-4-n-section2',
      type: 'text',
      content: `## Bærekraftig utvikling: Å balansere behov

I 1987 ledet Gro Harlem Brundtland en FN-kommisjon som ga oss et av de viktigste begrepene i miljøpolitikken: **bærekraftig utvikling**.

Definisjonen er enkel men dyptgripende: Utvikling som dekker dagens behov uten å ødelegge fremtidige generasjoners muligheter til å dekke sine behov.

Bærekraftig utvikling hviler på tre pilarer:
- **Økonomisk**: Velstand og utvikling
- **Sosial**: Rettferdighet, helse, utdanning
- **Miljømessig**: Bevaring av natur og ressurser

Utfordringen er å balansere alle tre. Kan vi ha økonomisk vekst uten å ødelegge miljøet? Kan vi bekjempe fattigdom uten å øke utslippene? Kan vi bevare natur samtidig som vi gir mennesker et verdig liv?

I 2015 vedtok FN 17 bærekraftsmål som forsøker å operasjonalisere dette -- fra fattigdomsbekjempelse til rent vann til klimahandling. Alle lands regjeringer har forpliktet seg til disse målene.

Kritikere mener begrepet er for vagt og brukes til "grønnvasking" -- at bedrifter og regjeringer kaller seg bærekraftige uten å faktisk endre noe. Andre mener det er en illusjon at økonomisk vekst kan kombineres med miljøvern, og at vi trenger "degrowth" -- nedvekst.`,
    },
    {
      id: 'historie-17-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-17-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på bærekraftig utvikling:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-17-4-n-quiz2-q0',
            task: 'Hva er bærekraftig utvikling?',
            options: [
              { id: 'a', text: 'Utvikling basert på fornybare ressurser og grønn teknologi som erstatter fossil energi', isCorrect: false },
              { id: 'b', text: 'Utvikling som balanserer økonomisk vekst med sosial utjevning mellom rike og fattige land', isCorrect: false },
              { id: 'c', text: 'Utvikling som dekker dagens behov uten å ødelegge fremtidige generasjoners muligheter', isCorrect: true },
              { id: 'd', text: 'Utvikling som prioriterer miljøvern og naturvern, selv om det går på bekostning av økonomisk vekst', isCorrect: false },
            ],
            solution: 'Bærekraftig utvikling balanserer tre hensyn: økonomisk velstand, sosial rettferdighet og miljøvern. Kjernen er at vi ikke skal leve på bekostning av fremtidige generasjoner.',
          },
          {
            id: 'historie-17-4-n-quiz2-q1',
            task: 'Hvem ledet FN-kommisjonen som lanserte begrepet "bærekraftig utvikling" i 1987?',
            options: [
              { id: 'a', text: 'Javier Pérez de Cuéllar, FNs generalsekretær', isCorrect: false },
              { id: 'b', text: 'Gro Harlem Brundtland', isCorrect: true },
              { id: 'c', text: 'Wangari Maathai, den kenyanske miljøaktivisten', isCorrect: false },
              { id: 'd', text: 'Maurice Strong, lederen for FNs miljøkonferanse i Stockholm', isCorrect: false },
            ],
            solution: 'Gro Harlem Brundtland ledet FN-kommisjonen som i 1987 lanserte begrepet bærekraftig utvikling. Definisjonen -- utvikling som dekker dagens behov uten å ødelegge fremtidige generasjoners muligheter -- er blitt et av de viktigste begrepene i miljøpolitikken.',
          },
          {
            id: 'historie-17-4-n-quiz2-q2',
            task: 'Hva er de tre pilarene i bærekraftig utvikling?',
            options: [
              { id: 'a', text: 'Klimatilpasning, utslippsreduksjon og naturvern', isCorrect: false },
              { id: 'b', text: 'Økonomisk velstand, sosial rettferdighet og miljøvern', isCorrect: true },
              { id: 'c', text: 'Demokrati, menneskerettigheter og internasjonal solidaritet', isCorrect: false },
              { id: 'd', text: 'Ressursforvaltning, befolkningskontroll og teknologiutvikling', isCorrect: false },
            ],
            solution: 'Bærekraftig utvikling hviler på tre pilarer: den økonomiske (velstand og utvikling), den sosiale (rettferdighet, helse, utdanning) og den miljømessige (bevaring av natur og ressurser). Utfordringen er å balansere alle tre.',
          },
          {
            id: 'historie-17-4-n-quiz2-q3',
            task: 'Hva mener kritikere med "grønnvasking"?',
            options: [
              { id: 'a', text: 'At bedrifter investerer i kompensasjonsordninger som karbonkvoter i stedet for å kutte egne utslipp', isCorrect: false },
              { id: 'b', text: 'At bedrifter og regjeringer kaller seg bærekraftige uten å faktisk endre noe', isCorrect: true },
              { id: 'c', text: 'At forbrukere villedes av miljømerking som ikke er uavhengig kontrollert', isCorrect: false },
              { id: 'd', text: 'At land rapporterer lavere utslipp enn de faktiske tallene til FNs klimapanel', isCorrect: false },
            ],
            solution: 'Grønnvasking betyr at bedrifter og regjeringer bruker miljøvennlig retorikk og kaller seg bærekraftige uten å faktisk gjennomføre reelle endringer. Kritikere mener begrepet bærekraftig utvikling kan brukes for å skjule mangel på handling.',
          },
        ],
      },
    },
    {
      id: 'historie-17-4-n-section3',
      type: 'text',
      content: `## Klimarettferdighet: Hvem har ansvaret?

Klimaendringene reiser dype spørsmål om rettferdighet.

**Historisk ansvar:** Rike land har sluppet ut mest CO2 gjennom industrialiseringen. Europa og Nord-Amerika har stått for mesteparten av de historiske utslippene. Er det rettferdig at de nå krever at fattige land -- som først nå industrialiserer -- skal begrense sine utslipp?

**Sårbarhet:** De som rammes hardest av klimaendringene, er ofte de som har bidratt minst. Øystater som Maldivene kan forsvinne i havet. Tørkeområder i Afrika blir ubeboelige. Fattige mennesker har færre ressurser til å tilpasse seg.

**Generasjonsrettferdighet:** Dagens generasjoner høster fordelene av fossil energi. Regningen sendes til barn og barnebarn som vil leve med konsekvensene.

I internasjonale klimaforhandlinger er dette en sentral konfliktlinje. Utviklingsland krever at rike land betaler for omstillingen og for skadene som allerede skjer -- "tap og skade". Rike land frykter ubegrensede krav. Spørsmålet om klimafinansiering er stadig en kilde til konflikt.

Hvem skal betale prisen for å redde klimaet? Og hvem skal betale for skadene som uansett kommer? Dette er noen av de vanskeligste politiske spørsmålene i vår tid.`,
    },
    {
      id: 'historie-17-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-17-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på klimarettferdighet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-17-4-n-quiz3-q0',
            task: 'Hva er hovedpoenget i debatten om klimarettferdighet?',
            options: [
              { id: 'a', text: 'At alle land bør kutte like mange prosent av sine utslipp uavhengig av historisk ansvar', isCorrect: false },
              { id: 'b', text: 'At de som har bidratt mest til klimaendringene bør ta størst ansvar, og de som rammes hardest ofte har bidratt minst', isCorrect: true },
              { id: 'c', text: 'At utviklingsland har rett til å industrialisere med fossil energi slik vestlige land gjorde', isCorrect: false },
              { id: 'd', text: 'At klimafinansiering bør fordeles etter landenes nåværende utslippsnivå, ikke historiske utslipp', isCorrect: false },
            ],
            solution: 'Klimarettferdighet handler om at rike land har stått for mesteparten av de historiske utslippene, men de fattigste landene -- som har bidratt minst -- rammes hardest av konsekvensene. Dette reiser vanskelige spørsmål om ansvar og rettferdig fordeling av byrder.',
          },
          {
            id: 'historie-17-4-n-quiz3-q1',
            task: 'Hva betyr "generasjonsrettferdighet" i klimadebatten?',
            options: [
              { id: 'a', text: 'At hver generasjon har ansvar for å etterlate like gode levekår som de selv arvet', isCorrect: false },
              { id: 'b', text: 'At unge mennesker bør ha større innflytelse over klimapolitikken fordi de rammes hardest', isCorrect: false },
              { id: 'c', text: 'At dagens generasjoner høster fordelene av fossil energi mens regningen sendes til barn og barnebarn', isCorrect: true },
              { id: 'd', text: 'At fremtidige generasjoner vil ha bedre teknologi og derfor lettere kan løse klimaproblemene', isCorrect: false },
            ],
            solution: 'Generasjonsrettferdighet handler om at dagens generasjoner nyter godt av fossil energi, mens fremtidige generasjoner vil måtte leve med konsekvensene av klimaendringene. Regningen sendes til barn og barnebarn.',
          },
          {
            id: 'historie-17-4-n-quiz3-q2',
            task: 'Hva krever utviklingsland i internasjonale klimaforhandlinger?',
            options: [
              { id: 'a', text: 'At utslippskutt skal fordeles etter befolkningsstørrelse slik at per capita-utslipp blir like', isCorrect: false },
              { id: 'b', text: 'At rike land betaler for klimaomstilling og "tap og skade"', isCorrect: true },
              { id: 'c', text: 'At teknologioverføring fra rike land skal skje uten patentbeskyttelse', isCorrect: false },
              { id: 'd', text: 'At utviklingsland får lengre tidsfrister for å nå utslippsmålene i Paris-avtalen', isCorrect: false },
            ],
            solution: 'I internasjonale klimaforhandlinger krever utviklingsland at rike land -- som har bidratt mest historisk -- betaler for omstillingen og for skadene som allerede skjer, kalt "tap og skade". Klimafinansiering er en sentral konfliktlinje.',
          },
        ],
      },
    },
    {
      id: 'historie-17-4-n-section4',
      type: 'text',
      content: `## Norges doble rolle

Norge står i en spesiell posisjon i klimaspørsmålet. Vi er både en del av løsningen og en del av problemet.

**Norge som klimapioner:**
- Nesten all strømmen vår kommer fra vannkraft
- Vi er verdensledende på elbiler
- Vi bidrar betydelig til klimafinansiering i fattige land
- Vi støtter bevaring av regnskog gjennom internasjonale programmer
- Vi utvikler teknologi for karbonfangst, havvind og hydrogen

**Norge som fossilnasjon:**
- Vi er en stor eksportør av olje og gass
- Når vår olje og gass brennes, bidrar det til enorme globale utslipp
- Oljefondet -- verdens største -- er bygget på fossil energi
- Vår velstand er tett knyttet til en industri som må fases ut

Dette paradokset gjør Norges posisjon komplisert. Vi snakker varmt om klimaet, men tjener godt på olje. Kritikere kaller det klimahykleri. Forsvarerne mener verden trenger norsk gass som erstatning for kull, og at vi bruker oljepengene på grønn omstilling.

Spørsmålet Norge må svare på: Kan vi omstille oss før verden slutter å kjøpe oljen vår? Og hva slags land vil vi være når oljealderen er over?`,
    },
    {
      id: 'historie-17-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-17-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på Norges doble rolle i klimaspørsmålet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-17-4-n-quiz4-q0',
            task: 'Hva er det norske paradokset i klimaspørsmålet?',
            options: [
              { id: 'a', text: 'At Norges lave nasjonale utslipp skjuler at vi har et av verdens høyeste forbruksfotavtrykk per innbygger', isCorrect: false },
              { id: 'b', text: 'At Norge både er klimapioner og stor eksportør av fossil energi', isCorrect: true },
              { id: 'c', text: 'At Oljefondet investerer i fornybar energi globalt mens Norge selv fortsetter å lete etter nye oljefelter', isCorrect: false },
              { id: 'd', text: 'At Norge er avhengig av å importere fornybar energi fra Europa samtidig som vi eksporterer gass', isCorrect: false },
            ],
            solution: 'Det norske paradokset er at vi på den ene siden er klimapionerer med fornybar energi og elbiler, men på den andre siden er en stor eksportør av olje og gass som bidrar til globale utslipp. Dette gjør Norges rolle i klimaspørsmålet kompleks.',
          },
          {
            id: 'historie-17-4-n-quiz4-q1',
            task: 'Hva er et eksempel på at Norge er en klimapioner?',
            options: [
              { id: 'a', text: 'At Norge var blant de første landene som innførte CO2-avgift og kvoteplikt for industrien', isCorrect: false },
              { id: 'b', text: 'At Norge bidrar mest til klimafinansiering per innbygger og støtter bevaring av regnskog', isCorrect: false },
              { id: 'c', text: 'At nesten all norsk strøm kommer fra vannkraft og vi er verdensledende på elbiler', isCorrect: true },
              { id: 'd', text: 'At Norge satser stort på karbonfangst og lagring gjennom prosjekter som Langskip', isCorrect: false },
            ],
            solution: 'Norge er klimapioner blant annet fordi nesten all strømproduksjonen vår kommer fra vannkraft, og vi er verdensledende på elbiler. Vi bidrar også til klimafinansiering og støtter bevaring av regnskog.',
          },
          {
            id: 'historie-17-4-n-quiz4-q2',
            task: 'Hva mener forsvarerne av norsk olje- og gassindustri?',
            options: [
              { id: 'a', text: 'At norsk olje- og gassproduksjon har lavere utslipp per enhet enn produksjonen i de fleste andre land', isCorrect: false },
              { id: 'b', text: 'At verden trenger norsk gass som erstatning for kull, og at oljepenger brukes på grønn omstilling', isCorrect: true },
              { id: 'c', text: 'At en rask nedtrapping av oljeproduksjonen ville destabilisere det globale energimarkedet', isCorrect: false },
              { id: 'd', text: 'At kompetansen fra olje- og gassindustrien er nødvendig for å utvikle havvind og karbonfangst', isCorrect: false },
            ],
            solution: 'Forsvarerne mener verden trenger norsk gass som erstatning for kull (som forurenser mer), og at oljeinntektene brukes på grønn omstilling. Kritikere kaller dette klimahykleri.',
          },
        ],
      },
    },
    {
      id: 'historie-17-4-n-section5',
      type: 'text',
      content: `## Veier fremover

Hva kan gjøres? Det finnes ulike tilnærminger, og debattene om dem er heftige.

**Teknologioptimistene** tror på innovasjon. Fornybar energi blir stadig billigere. Elbiler tar over. Karbonfangst kan rense utslipp. Kanskje kan vi til og med fjerne CO2 fra atmosfæren. Teknologi har løst problemer før og kan gjøre det igjen.

**De som vil ha politisk regulering** mener markedet alene ikke løser problemet. Vi trenger forbud mot de verste utslippene, påbud om grønn teknologi, og internasjonale avtaler som forplikter. Politikk må sette rammene.

**De som krever systemendring** mener problemet er dypere. Kapitalismens veksttvang er uforenlig med en begrenset planet. Vi trenger et helt annet økonomisk system -- kanskje "degrowth", nedvekst, der vi bevisst produserer og konsumerer mindre.

Og så er det spørsmålet om individ versus system. Hjelper det at du og jeg kildesorterer og sykler til jobb, eller er det bare politiske og strukturelle endringer som monner? Trolig trenger vi begge deler.

Det vi vet, er at tidsvinduet krymper. Hver tiendedels grad global oppvarming betyr mer ekstremvær, mer smelting, mer ødeleggelse. Valgene vi tar de neste tiårene, vil forme planetens fremtid i århundrer.`,
    },
    {
      id: 'historie-17-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-17-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på veier fremover i klimaspørsmålet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-17-4-n-quiz5-q0',
            task: 'Hvilken tilnærming til klimaproblemet vektlegger at økonomisk vekst må begrenses?',
            options: [
              { id: 'a', text: 'Sirkulærøkonomi, som vil erstatte lineær produksjon med gjenbruk og resirkulering', isCorrect: false },
              { id: 'b', text: 'Grønn vekst, som hevder at økonomisk vekst kan kobles fra miljøbelastning', isCorrect: false },
              { id: 'c', text: 'Degrowth (nedvekst)', isCorrect: true },
              { id: 'd', text: 'Politisk regulering gjennom karbonskatter og utslippskvoter', isCorrect: false },
            ],
            solution: 'Degrowth eller nedvekst er en tilnærming som mener at kontinuerlig økonomisk vekst er uforenlig med en begrenset planet. Tilhengerne mener vi bevisst må produsere og konsumere mindre.',
          },
          {
            id: 'historie-17-4-n-quiz5-q1',
            task: 'Hva mener teknologioptimistene om klimaproblemet?',
            options: [
              { id: 'a', text: 'At markedskreftene automatisk vil drive frem grønne løsninger når fossil energi blir dyrere', isCorrect: false },
              { id: 'b', text: 'At innovasjon og teknologi som fornybar energi og karbonfangst kan løse problemet', isCorrect: true },
              { id: 'c', text: 'At grønn vekst er mulig dersom vi kombinerer teknologi med strenge politiske reguleringer', isCorrect: false },
              { id: 'd', text: 'At kjernekraft er den eneste realistiske løsningen for å dekke verdens energibehov uten utslipp', isCorrect: false },
            ],
            solution: 'Teknologioptimistene tror på innovasjon: fornybar energi blir stadig billigere, elbiler tar over, og karbonfangst kan rense utslipp. De mener teknologi har løst problemer før og kan gjøre det igjen.',
          },
          {
            id: 'historie-17-4-n-quiz5-q2',
            task: 'Hva er debatten om individ versus system i klimaspørsmålet?',
            options: [
              { id: 'a', text: 'Om forbrukere bør presses til grønne valg gjennom avgifter, eller om det bør være frivillig', isCorrect: false },
              { id: 'b', text: 'Om individuelle handlinger som kildesortering monner, eller om bare politiske og strukturelle endringer hjelper', isCorrect: true },
              { id: 'c', text: 'Om bedrifter eller enkeltpersoner har størst ansvar for å redusere klimautslippene', isCorrect: false },
              { id: 'd', text: 'Om klimatiltak bør gjennomføres lokalt i hver kommune eller styres nasjonalt av regjeringen', isCorrect: false },
            ],
            solution: 'Debatten handler om hvorvidt individuelle tiltak som kildesortering og sykling gjør nok forskjell, eller om det bare er politiske og strukturelle endringer som virkelig monner. Trolig trenger vi begge deler.',
          },
        ],
      },
    },
    {
      id: 'historie-17-4-n-summary',
      type: 'text',
      content: `## Oppsummering

Klimaendringene er en av vår tids store utfordringer, med dype røtter i den industrielle revolusjonen og komplekse spørsmål om rettferdighet og ansvar.

**Nøkkelbegreper du nå kjenner:**
- **Antropocen**: Menneskets tidsalder, der vår aktivitet preger jordens systemer
- **Bærekraftig utvikling**: Utvikling som ikke ødelegger fremtidige generasjoners muligheter
- **Klimarettferdighet**: At ansvar for klimaendringer og byrder ved omstilling fordeles rettferdig

**Det viktigste du tar med deg:**
Klimaendringene er et historisk produkt -- resultat av to århundrer med fossil industrialisering. Løsningene krever at vi tenker like stort: politisk, teknologisk og kanskje også i hvordan vi organiserer samfunnene våre. Du lever i en tid der valgene som tas, vil forme planetens fremtid.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 17.5 NARRATIV: Historie og fremtiden
// ============================================================================

export const CHAPTER_HISTORIE_17_5_NARRATIV: TextbookChapter = {
  id: 'historie-17-5-narrativ',
  courseId: 'historie',
  chapterNumber: '17.5',
  title: 'Historie og fremtiden',
  subtitle: 'Narrativ versjon',
  description:
    'En fortelling om hva historien kan lære oss, hvordan den brukes og misbrukes, og hvordan den hjelper oss å forme fremtiden.',
  estimatedMinutes: 45,
  competenceGoals: [
    'fortolkninger av fortiden preget av nåtid',
    'historiebruk av ulike aktører',
  ],
  linkedChapterId: 'historie-17-5',
  content: [
    {
      id: 'historie-17-5-n-intro',
      type: 'text',
      content: `## Hvorfor studerer vi historie?

Nå har du reist gjennom århundrer med historie -- fra de tidligste sivilisasjonene til vår egen tid. Men før vi avslutter, bør vi stoppe opp og stille et grunnleggende spørsmål: Hvorfor?

Hvorfor bruker vi tid på å lære om mennesker som levde for lenge siden? Hva er poenget med å kunne årstall og hendelser fra fortiden?

Svaret handler om mer enn å bestå eksamen. Historie er ikke bare en samling fakta om ting som har skjedd. Det er en måte å tenke på -- en måte å forstå verden som hjelper oss å navigere i nåtiden og forme fremtiden.

For alt som eksisterer rundt deg -- samfunnet, lovene, verdiene, konfliktene, mulighetene -- alt dette har en historie. Og du selv, som lever og handler i dag, er med på å skrive morgendagens historie.

La oss utforske hva dette betyr.`,
    },
    {
      id: 'historie-17-5-n-section1',
      type: 'text',
      content: `## Historiebevissthet: Å tenke i tid

Det finnes et begrep som fanger det vi snakker om: **historiebevissthet**. Det handler om å forstå sammenhengen mellom fortid, nåtid og fremtid.

Historiebevissthet betyr:
- Å forstå at nåtiden er formet av fortiden. Det som virker naturlig og selvfølgelig i dag -- demokrati, likestilling, menneskerettigheter -- er resultater av kamper og prosesser gjennom historien.
- Å innse at fortiden ble opplevd som nåtid av dem som levde da. Mennesker for 500 år siden hadde like rike liv, like sterke følelser, like viktige valg -- selv om verden deres var helt annerledes.
- Å erkjenne at våre handlinger i dag former fremtiden. Akkurat som fortidens mennesker formet vår verden, former vi verdenen til de som kommer etter oss.
- Å kunne sette seg inn i fortidens menneskers situasjon. Hvorfor handlet de som de gjorde? Hva visste de, og hva visste de ikke?

Historiebevissthet er ikke det samme som å kunne mange fakta. En som ramser opp årstall men ikke forstår hvorfor de betyr noe, har liten historiebevissthet. En som forstår sammenhenger og endring over tid, men kanskje glemmer noen årstall, har mye.`,
    },
    {
      id: 'historie-17-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-17-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på historiebevissthet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-17-5-n-quiz1-q0',
            task: 'Hva er historiebevissthet?',
            options: [
              { id: 'a', text: 'Evnen til å analysere historiske kilder kritisk og vurdere deres pålitelighet', isCorrect: false },
              { id: 'b', text: 'Forståelsen av sammenhengen mellom fortid, nåtid og fremtid', isCorrect: true },
              { id: 'c', text: 'Kunnskap om de viktigste vendepunktene og årsakssammenhengene i historien', isCorrect: false },
              { id: 'd', text: 'Evnen til å sette seg inn i fortidige menneskers livsverden og handlingsmotiver', isCorrect: false },
            ],
            solution: 'Historiebevissthet handler om å forstå at nåtiden er formet av fortiden, og at våre handlinger i dag former fremtiden. Det er evnen til å tenke historisk -- å se sammenhenger og endringer over tid.',
          },
          {
            id: 'historie-17-5-n-quiz1-q1',
            task: 'Hva innebærer det å ha historiebevissthet ifølge teksten?',
            options: [
              { id: 'a', text: 'Å kunne identifisere årsak-virkning-kjeder i viktige historiske hendelser', isCorrect: false },
              { id: 'b', text: 'Å forstå hvordan ulike historiske perspektiver påvirker fremstillingen av fortiden', isCorrect: false },
              { id: 'c', text: 'Å forstå at ting vi tar for gitt i dag, som demokrati og likestilling, er historiske produkter', isCorrect: true },
              { id: 'd', text: 'Å kunne sammenligne ulike sivilisasjoner og perioder for å finne felles utviklingsmønstre', isCorrect: false },
            ],
            solution: 'Historiebevissthet innebærer blant annet å forstå at det vi anser som selvfølgelig i dag -- demokrati, likestilling, menneskerettigheter -- er resultater av kamper og prosesser gjennom historien. De er ikke naturgitte.',
          },
          {
            id: 'historie-17-5-n-quiz1-q2',
            task: 'Hva er forskjellen mellom å kunne mange historiske fakta og å ha historiebevissthet?',
            options: [
              { id: 'a', text: 'Faktakunnskap er en forutsetning for historiebevissthet -- man må ha et bredt grunnlag av kunnskap først', isCorrect: false },
              { id: 'b', text: 'Historiebevissthet handler om å forstå sammenhenger og endring, ikke bare fakta', isCorrect: true },
              { id: 'c', text: 'Historiske fakta er objektive, mens historiebevissthet innebærer subjektive tolkninger', isCorrect: false },
              { id: 'd', text: 'Fakta handler om hva som skjedde, historiebevissthet handler om å vurdere kildene', isCorrect: false },
            ],
            solution: 'En som ramser opp årstall men ikke forstår hvorfor de betyr noe, har liten historiebevissthet. En som forstår sammenhenger og endring over tid, men kanskje glemmer noen årstall, har mye mer historiebevissthet.',
          },
        ],
      },
    },
    {
      id: 'historie-17-5-n-section2',
      type: 'text',
      content: `## Historiebruk: Hvordan historien brukes

Historie er ikke nøytral. Den brukes aktivt av ulike aktører for ulike formål.

**Politisk bruk:** Politikere bruker historien for å legitimere sin makt og politikk. Nasjonalister bruker den til å bygge identitet og rettferdiggjøre krav. Konflikter begrunnes med historiske urettferdigheter.

**Kommersiell bruk:** Filmer, serier og spill fremstiller historien for underholdning -- ofte med kreative friheter. Turisme markedsfører historiske steder. Bedrifter bruker "tradisjon" i reklame.

**Pedagogisk bruk:** Skoler, museer og minnesteder bruker historien for å lære og opplyse. Lærebøker (som denne) er en form for historiebruk.

**Privat bruk:** Slektsgransking kobler oss til forfedre. Lokalhistorie gir tilhørighet. Personlige minner er en form for historie.

All denne bruken er ikke nødvendigvis problematisk. Men det er viktig å være bevisst: Hvem forteller historien? Hva velger de å inkludere, og hva utelater de? Hvilket formål tjener fremstillingen?`,
    },
    {
      id: 'historie-17-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-17-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på historiebruk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-17-5-n-quiz2-q0',
            task: 'Hvilke spørsmål er det viktig å stille når man vurderer hvordan historie brukes?',
            options: [
              { id: 'a', text: 'Om fremstillingen er basert på primærkilder eller sekundærlitteratur', isCorrect: false },
              { id: 'b', text: 'Hvem forteller, hva inkluderes og utelates, og hvilket formål det tjener', isCorrect: true },
              { id: 'c', text: 'Om fremstillingen er skrevet av en historiker med relevant fagkompetanse', isCorrect: false },
              { id: 'd', text: 'Om fremstillingen stemmer overens med det som står i andre lærebøker om samme emne', isCorrect: false },
            ],
            solution: 'Kritisk historiebevissthet innebærer å spørre: Hvem forteller denne historien? Hva velger de å inkludere og hva utelater de? Hvilket formål tjener fremstillingen? Alle historiefortellinger gjør valg.',
          },
          {
            id: 'historie-17-5-n-quiz2-q1',
            task: 'Hva er et eksempel på politisk bruk av historie?',
            options: [
              { id: 'a', text: 'At historiske minnesteder og monumenter brukes til å hedre falne soldater og styrke nasjonal identitet', isCorrect: false },
              { id: 'b', text: 'At historielæreplaner i skolen utformes for å fremme bestemte verdier og holdninger', isCorrect: false },
              { id: 'c', text: 'At nasjonalister bruker historien til å bygge identitet og rettferdiggjøre politiske krav', isCorrect: true },
              { id: 'd', text: 'At politiske partier refererer til historiske hendelser i valgkamp for å styrke sine argumenter', isCorrect: false },
            ],
            solution: 'Politisk bruk av historie innebærer at politikere bruker historien for å legitimere sin makt og politikk. Nasjonalister bruker den til å bygge identitet og rettferdiggjøre territorielle krav.',
          },
          {
            id: 'historie-17-5-n-quiz2-q2',
            task: 'Hva er kommersiell bruk av historie?',
            options: [
              { id: 'a', text: 'At museer krever inngangspenger for å vise historiske gjenstander og utstillinger', isCorrect: false },
              { id: 'b', text: 'At forlag tjener penger på å utgi populærvitenskapelige historiebøker og biografier', isCorrect: false },
              { id: 'c', text: 'At historiske reenactment-grupper arrangerer betalte forestillinger av historiske slag', isCorrect: false },
              { id: 'd', text: 'At filmer, serier og turisme utnytter historien for underholdning og profitt', isCorrect: true },
            ],
            solution: 'Kommersiell bruk av historie inkluderer filmer og serier som fremstiller historien for underholdning (ofte med kreative friheter), turisme som markedsfører historiske steder, og bedrifter som bruker "tradisjon" i reklame.',
          },
        ],
      },
    },
    {
      id: 'historie-17-5-n-section3',
      type: 'text',
      content: `## Historiemisbruk: Når historien forvrengers

Noen ganger forvrengers historien bevisst for å tjene bestemte formål. Dette kalles **historiemisbruk**.

**Holocaust-benektelse** er kanskje det mest ekstreme eksemplet. Til tross for overveldende dokumentasjon hevder noen at Holocaust aldri skjedde eller overdrives. Dette er ikke bare faglig uholdbart, det er dypt krenkende for ofre og etterlatte.

**Nasjonalistisk historieskriving** glorifiserer egen nasjon og demoniserer fiender. Kritiske hendelser utelates eller bagatelliseres. Russlands fremstilling av andre verdenskrig og Ukrainas historie er et aktuelt eksempel.

**"Begge sider"** er en subtilere form for misbruk. Å fremstille slaveri, folkemord eller Holocaust som om det var "to likeverdige sider" skaper falsk balanse mellom overgripere og ofre.

**Selektiv hukommelse** betyr å huske egne lidelser men glemme egne overgrep. Mange land har slike blinde flekker i sin nasjonale erindring.

Historiemisbruk er farlig fordi det kan legitimere urett, spre hat og hindre forsoning. Kritisk historiekompetanse -- evnen til å gjennomskue misbruk -- er derfor viktig for demokratiet.`,
    },
    {
      id: 'historie-17-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-17-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på historiemisbruk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-17-5-n-quiz3-q0',
            task: 'Hvorfor er historiemisbruk problematisk?',
            options: [
              { id: 'a', text: 'Fordi det undergraver historiefagets vitenskapelige troverdighet og offentlige tillit', isCorrect: false },
              { id: 'b', text: 'Fordi det kan legitimere urett, spre hat og hindre forsoning', isCorrect: true },
              { id: 'c', text: 'Fordi det gir folk et forvrengt bilde av fortiden som fører til dårlige politiske beslutninger', isCorrect: false },
              { id: 'd', text: 'Fordi det krenker etterkommerne av historiske ofre og forhindrer rettferdighet', isCorrect: false },
            ],
            solution: 'Historiemisbruk -- å forvrenge eller forfalske historien for bestemte formål -- er farlig fordi det kan brukes til å legitimere undertrykkelse, rettferdiggjøre konflikter, spre hat og hindre forsoning.',
          },
          {
            id: 'historie-17-5-n-quiz3-q1',
            task: 'Hva er Holocaust-benektelse et eksempel på?',
            options: [
              { id: 'a', text: 'Selektiv hukommelse -- å huske noen hendelser men utelate andre', isCorrect: false },
              { id: 'b', text: 'Nasjonalistisk historieskriving som glorifiserer egen nasjon', isCorrect: false },
              { id: 'c', text: 'Falsk balanse som fremstiller overgrep som om det er to likeverdige sider', isCorrect: false },
              { id: 'd', text: 'Historiemisbruk -- bevisst forvrenging av dokumenterte hendelser', isCorrect: true },
            ],
            solution: 'Holocaust-benektelse er kanskje det mest ekstreme eksemplet på historiemisbruk. Til tross for overveldende dokumentasjon hevder noen at Holocaust aldri skjedde eller overdrives. Det er faglig uholdbart og dypt krenkende.',
          },
          {
            id: 'historie-17-5-n-quiz3-q2',
            task: 'Hva menes med "selektiv hukommelse" som form for historiemisbruk?',
            options: [
              { id: 'a', text: 'At et land fremhever hendelser som styrker den nasjonale identiteten og nedtoner det som svekker den', isCorrect: false },
              { id: 'b', text: 'At man husker egne lidelser men glemmer egne overgrep', isCorrect: true },
              { id: 'c', text: 'At historiske fremstillinger fokuserer på de mest dramatiske hendelsene og utelater hverdagslivet', isCorrect: false },
              { id: 'd', text: 'At vinnerne skriver historien og taperens perspektiv forsvinner fra den kollektive hukommelsen', isCorrect: false },
            ],
            solution: 'Selektiv hukommelse betyr å huske egne lidelser men glemme egne overgrep. Mange land har slike blinde flekker i sin nasjonale erindring, der ubehagelige sider ved egen historie bagatelliseres eller utelates.',
          },
          {
            id: 'historie-17-5-n-quiz3-q3',
            task: 'Hva er "falsk balanse" som form for historiemisbruk?',
            options: [
              { id: 'a', text: 'At man gir like mye vekt til vitenskapelig funderte og udokumenterte historiske påstander', isCorrect: false },
              { id: 'b', text: 'At man fremstiller slaveri eller folkemord som om det var to likeverdige sider', isCorrect: true },
              { id: 'c', text: 'At man presenterer alle historiske aktørers motiver som like forståelige og rasjonelle', isCorrect: false },
              { id: 'd', text: 'At historieformidlingen forsøker å unngå moralske vurderinger av historiske hendelser', isCorrect: false },
            ],
            solution: 'Falsk balanse er å fremstille hendelser som slaveri, folkemord eller Holocaust som om det var "to likeverdige sider". Dette skaper en villedende likestilling mellom overgripere og ofre.',
          },
        ],
      },
    },
    {
      id: 'historie-17-5-n-section4',
      type: 'text',
      content: `## Lærdommer fra historien

Hva kan vi egentlig lære av historien? Det finnes et kjent sitat, ofte tilskrevet filosofen George Santayana: "De som ikke husker fortiden, er dømt til å gjenta den."

Er det sant? Delvis.

**Historien gjentar seg aldri eksakt.** Omstendighetene er alltid forskjellige. Å trekke for lettvinte paralleller kan villede. Hitler er ikke Stalin er ikke Putin, selv om det finnes likhetstrekk.

**Men mønstre kan gjenta seg.** Økonomiske bobler sprekker. Demokratier kan falle for autoritære bevegelser i krisetider. Dehumanisering av grupper kan føre til vold. Å kjenne historien gir oss et bibliotek av erfaringer å lære av.

**Kunnskap er nødvendig men ikke tilstrekkelig.** Verden visste om farene ved nasjonalisme etter første verdenskrig -- likevel kom andre verdenskrig. Vi vet om historiens folkemord -- likevel fortsetter folkemord å skje. Å vite er ikke det samme som å handle.

Kanskje den viktigste lærdommen er denne: **Ingenting er naturlig eller evig.** Alt som eksisterer i dag -- demokrati, menneskerettigheter, velstand, fred -- er historiske produkter som kan forsvinne igjen hvis vi ikke forsvarer dem.

Og omvendt: **Endring er mulig.** Slaveri ble avskaffet. Kvinner fikk stemmerett. Apartheid falt. Ting som virket umulige, har skjedd. Og ting vi ikke kan forestille oss i dag, kan skje i morgen.`,
    },
    {
      id: 'historie-17-5-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-17-5-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på lærdommer fra historien:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-17-5-n-quiz4-q0',
            task: 'Hva er den mest presise forståelsen av påstanden "de som ikke husker fortiden, er dømt til å gjenta den"?',
            options: [
              { id: 'a', text: 'Historien gjentar seg i sykluser, og vi kan forutsi fremtidige kriser ved å studere fortiden', isCorrect: false },
              { id: 'b', text: 'Historiekunnskap er nødvendig for å forstå nåtiden, men kan ikke brukes til å forutsi fremtiden', isCorrect: false },
              { id: 'c', text: 'Historiske mønstre kan gjenta seg, og kunnskap er nyttig men ikke nok alene', isCorrect: true },
              { id: 'd', text: 'Historiske analogier er det viktigste verktøyet politikere har for å ta gode beslutninger', isCorrect: false },
            ],
            solution: 'Historiske mønstre kan gjenta seg, og kunnskap om dem er verdifull. Men historien gjentar seg aldri eksakt, og kunnskap alene garanterer ikke at vi unngår feil -- det krever også vilje til å handle.',
          },
          {
            id: 'historie-17-5-n-quiz4-q1',
            task: 'Hva er kanskje den viktigste lærdommen historien gir oss ifølge teksten?',
            options: [
              { id: 'a', text: 'At historien beveger seg fremover i en retning av stadig mer demokrati og frihet', isCorrect: false },
              { id: 'b', text: 'At ingenting er naturlig eller evig -- alt kan forsvinne og alt kan forandres', isCorrect: true },
              { id: 'c', text: 'At store samfunnsendringer alltid kommer nedenfra, fra folkelige bevegelser og grasrotinitiativ', isCorrect: false },
              { id: 'd', text: 'At demokrati og menneskerettigheter er universelle verdier som gradvis har vunnet aksept verden over', isCorrect: false },
            ],
            solution: 'Historien viser at ingenting er naturlig eller evig. Demokrati, menneskerettigheter, velstand og fred er historiske produkter som kan forsvinne hvis vi ikke forsvarer dem. Men endring er også mulig -- slaveri ble avskaffet, kvinner fikk stemmerett, apartheid falt.',
          },
          {
            id: 'historie-17-5-n-quiz4-q2',
            task: 'Hvorfor sier teksten at kunnskap er "nødvendig men ikke tilstrekkelig" for å lære av historien?',
            options: [
              { id: 'a', text: 'Fordi historiske situasjoner aldri er helt like, og direkte paralleller kan villede beslutningstakere', isCorrect: false },
              { id: 'b', text: 'Fordi verden visste om farene ved nasjonalisme, men andre verdenskrig kom likevel -- å vite er ikke det samme som å handle', isCorrect: true },
              { id: 'c', text: 'Fordi historisk kunnskap ofte er ufullstendig, og nye kilder stadig endrer vår forståelse av fortiden', isCorrect: false },
              { id: 'd', text: 'Fordi ulike grupper tolker de samme historiske lærdommene på motstridende måter', isCorrect: false },
            ],
            solution: 'Verden visste om farene ved nasjonalisme etter første verdenskrig, men andre verdenskrig kom likevel. Vi vet om folkemord i historien, men folkemord fortsetter å skje. Kunnskap er nødvendig, men det krever også vilje til å handle.',
          },
        ],
      },
    },
    {
      id: 'historie-17-5-n-section5',
      type: 'text',
      content: `## Fremtiden er åpen

La oss avslutte der vi begynte -- med deg.

Du lever i en historisk tid. Klimaendringer, teknologisk omveltning, geopolitiske spenninger, demokratiets utfordringer -- alt dette er historiske prosesser du er en del av.

Historien viser at fremtiden er åpen. Den er ikke forutbestemt. De som levde i 1900 kunne ikke forestille seg 2000. De som lever nå, kan ikke forestille seg 2100. Overraskelser -- både gode og dårlige -- vil komme.

Men historien viser også at mennesker har handlingsrom. Enkeltpersoner og bevegelser kan gjøre en forskjell. Rosa Parks som nektet å gi fra seg setet sitt. Greta Thunberg som begynte å skolestrejke. Lech Walesa som ledet fagbevegelsen Solidaritet. Historien er full av mennesker som forandret noe fordi de valgte å handle.

Så: Hva vil du gjøre med din historiske tid? Hvilke kamper vil du kjempe? Hvilke verdier vil du forsvare? Hvilken verden vil du etterlate til de som kommer etter?

Historien du har lært om i dette kurset -- den er ikke slutt. Den fortsetter. Og du er med på å skrive den.`,
    },
    {
      id: 'historie-17-5-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-17-5-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på fremtiden og historiens rolle:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-17-5-n-quiz5-q0',
            task: 'Hva er det viktigste historien kan lære oss om fremtiden?',
            options: [
              { id: 'a', text: 'At historien følger visse lovmessigheter som gjør det mulig å forutsi de store linjene', isCorrect: false },
              { id: 'b', text: 'At teknologisk utvikling er den viktigste drivkraften bak historisk endring', isCorrect: false },
              { id: 'c', text: 'At fremtiden er åpen, endring er mulig, og mennesker har handlingsrom', isCorrect: true },
              { id: 'd', text: 'At demokrati og menneskerettigheter gradvis vil vinne frem i alle land hvis vi er tålmodige', isCorrect: false },
            ],
            solution: 'Historien viser at fremtiden er åpen -- ikke forutbestemt. Ting vi tar for gitt i dag var utenkelige for noen generasjoner siden. Endring er mulig, og mennesker som velger å handle kan gjøre en forskjell.',
          },
          {
            id: 'historie-17-5-n-quiz5-q1',
            task: 'Hvilke eksempler gir teksten på enkeltpersoner som forandret historien?',
            options: [
              { id: 'a', text: 'Nelson Mandela, Mahatma Gandhi og Martin Luther King Jr.', isCorrect: false },
              { id: 'b', text: 'Rosa Parks, Greta Thunberg og Lech Walesa', isCorrect: true },
              { id: 'c', text: 'Malala Yousafzai, Desmond Tutu og Aung San Suu Kyi', isCorrect: false },
              { id: 'd', text: 'Emmeline Pankhurst, Václav Havel og Wangari Maathai', isCorrect: false },
            ],
            solution: 'Teksten nevner Rosa Parks som nektet å gi fra seg setet, Greta Thunberg som begynte å skolestrejke, og Lech Walesa som ledet fagbevegelsen Solidaritet. Alle forandret noe fordi de valgte å handle.',
          },
          {
            id: 'historie-17-5-n-quiz5-q2',
            task: 'Hvorfor sier teksten at "historien er ikke slutt"?',
            options: [
              { id: 'a', text: 'Fordi nye kilder og perspektiver stadig endrer vår forståelse av fortiden', isCorrect: false },
              { id: 'b', text: 'Fordi de store globale utfordringene som klimakrise og ulikhet fortsatt er uløste', isCorrect: false },
              { id: 'c', text: 'Fordi vi alle lever i og er med på å forme historien videre med våre handlinger', isCorrect: true },
              { id: 'd', text: 'Fordi demokratiet fortsatt er truet og kampen for menneskerettigheter pågår i mange land', isCorrect: false },
            ],
            solution: 'Historien fortsetter fordi vi alle er historiske aktører. Vi lever i en tid preget av store utfordringer -- klimaendringer, teknologisk omveltning, geopolitiske spenninger -- og valgene vi tar former fremtiden for dem som kommer etter oss.',
          },
        ],
      },
    },
    {
      id: 'historie-17-5-n-summary',
      type: 'text',
      content: `## Oppsummering

Vi har nådd slutten av reisen gjennom historien -- men historien selv fortsetter, og du er en del av den.

**Nøkkelbegreper du nå kjenner:**
- **Historiebevissthet**: Forståelsen av sammenhengen mellom fortid, nåtid og fremtid
- **Historiebruk**: Hvordan historie brukes av ulike aktører til ulike formål
- **Historiemisbruk**: Når historien forvrengers for å tjene bestemte interesser

**Det viktigste du tar med deg:**
Historien gir oss ikke fasitsvar, men den gir oss verktøy til å forstå verden og perspektiver til å forme den. Ingenting er evig eller naturlig -- alt kan forandres. Og i den forandringen har du en rolle å spille.

**Takk for at du fulgte med gjennom dette kurset. Historien fortsetter -- og du er med på å skrive den.**`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle kapitler i del 16
// ============================================================================

export const HISTORIE_NARRATIV_DEL16_CHAPTERS = [
  CHAPTER_HISTORIE_17_1_NARRATIV,
  CHAPTER_HISTORIE_17_2_NARRATIV,
  CHAPTER_HISTORIE_17_3_NARRATIV,
  CHAPTER_HISTORIE_17_4_NARRATIV,
  CHAPTER_HISTORIE_17_5_NARRATIV,
];
